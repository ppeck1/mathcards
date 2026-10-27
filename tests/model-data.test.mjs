import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Data=require('../src/model-data.js');
const Modules=require('../src/playground-modules.js');

test('data alternatives load offline without a document or model dependency',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/model-data.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasModelData.sample,'function');
  assert.ok(Object.isFrozen(Data));
});

test('every module supplies an exact current row and finite evaluations with other controls fixed',()=>{
  for(const module of Modules.list()){
    const p=module.defaults(),before=JSON.stringify(p),data=Data.sample(module,p);
    assert.equal(data.valid,true,module.id);
    assert.equal(JSON.stringify(p),before,module.id);
    const sweep=module.sweeps.find(item=>item.key===module.primarySweep)||module.sweeps[0],control=module.controls.find(item=>item.key===sweep?.key),legalCount=(sweep?.discrete||control?.discrete)?Math.floor((sweep.max-sweep.min)/(sweep.step??control.step))+1:Infinity;
    assert.ok(data.rows.length>=Math.min(9,legalCount)&&data.rows.length<=Math.min(10,legalCount),module.id);
    assert.equal(data.rows.filter(row=>row.current).length,1,module.id);
    for(const row of data.rows){
      const evaluated=module.evaluate({...p,[data.axis.key]:row.input});
      for(const column of data.columns.slice(1))assert.equal(row.values[column.key],Number.isFinite(evaluated[column.key])?evaluated[column.key]:null,module.id+' '+column.key);
    }
    const current=data.rows.find(row=>row.current);
    assert.equal(current.input,p[module.primarySweep]);
    assert.equal(current.values.output,module.evaluate(p).output);
    const html=Data.markup(data);
    assert.match(html,/<caption>/);assert.match(html,/scope="col"/);assert.match(html,/scope="row"/);
    assert.match(html,/class="model-data-current"/);
    assert.doesNotMatch(html,/NaN|Infinity/);
  }
});

test('zero secant step preserves the analytic derivative rather than inventing a finite quotient',()=>{
  const p={...Modules.get('derivative').defaults(),h:0};
  const data=Data.sample(Modules.get('derivative'),p);
  const current=data.rows.find(row=>row.current);
  assert.equal(current.values.output,null);
  assert.equal(current.values.analytic,12);
  assert.equal(current.status,'undefined_step');
  assert.match(Data.markup(data),/Undefined/);
});

test('missing limits and invalid power domains remain explicit in the accessible table',()=>{
  const limit=Modules.get('limit'),jump=Data.sample(limit,{...limit.defaults(),mode:'jump'});
  assert.ok(jump.rows.every(row=>row.values.output===null));
  assert.ok(jump.rows.every(row=>row.values.rightValue-row.values.leftValue===2));
  assert.match(Data.markup(jump),/does not exist/);
  assert.match(Data.markup(jump),/Jump discontinuity/);
  const powers=Modules.get('exponentiation'),invalid=Data.sample(powers,{...powers.defaults(),base:0});
  assert.ok(invalid.rows.every(row=>row.values.output===null));
  assert.match(Data.markup(invalid),/positive base/);
  assert.equal(Data.sample(powers,{...powers.defaults(),base:NaN}).valid,false);
});

test('discrete selections stay fixed, while current full-precision inputs are never rounded into sample values',()=>{
  const module=Modules.get('signed-accumulation'),parameters={...module.defaults(),time:2.00000000000001,partitions:'32'};
  const data=Data.sample(module,parameters);
  assert.equal(data.fixed.find(item=>item.key==='partitions').value,'32');
  assert.equal(data.rows.find(row=>row.current).input,parameters.time);
  assert.deepEqual(data.current.parameters,parameters);
  assert.equal(data.rows.length,10);
  assert.throws(()=>Data.sample(module,parameters,{count:100000}),/25/);
  assert.throws(()=>Data.sample(module,parameters,{count:2.5}),/25/);
});

test('a registered static module can expose one honest table row without inventing an axis',()=>{
  const module={title:'A fixed square',defaults:()=>({q:2}),validateParams:p=>({valid:true,parameters:{...p}}),evaluate:p=>({valid:true,status:'valid',output:p.q*p.q}),controls:[],sweeps:[],ports:[]};
  const data=Data.sample(module,{q:2});
  assert.equal(data.axis,null);assert.equal(data.rows.length,1);assert.equal(data.rows[0].values.output,4);
  assert.match(Data.markup(data),/no declared numeric animation range/);
});

test('valid logarithm bases adjacent to one never display as the excluded base one',()=>{
  const module=Modules.get('real-logarithm');
  for(const base of [1+Number.EPSILON,1-Number.EPSILON]){
    const data=Data.sample(module,{base,argument:8});
    assert.equal(data.current.status,'valid');
    assert.match(Data.markup(data),new RegExp('<dd>'+String(base).replaceAll('.','\\.')+'</dd>'));
    assert.ok(data.rows.every(row=>Number.isFinite(row.values.output)));
  }
});


test('discrete numeric samples respect the offset legal grid, stay unique and include the exact current value',()=>{
  for(const [id,key] of [['countability','index'],['finite-state-machine','steps']]){
    const module=Modules.get(id),data=Data.sample(module,{...module.defaults(),[key]:3},{count:25});
    assert.equal(data.rows.length,id==='countability'?13:9);
    assert.equal(new Set(data.rows.map(row=>row.input)).size,data.rows.length);
    for(const row of data.rows){assert.equal(Number.isInteger(row.input),true);assert.equal(module.validateParams({...data.current.parameters,[key]:row.input}).valid,true);assert.equal(row.status,'valid');}
  }
  const module={title:'Offset steps',primarySweep:'q',defaults:()=>({q:7}),controls:[{key:'q',label:'Whole grid',min:3,max:13,step:2,discrete:true}],sweeps:[{key:'q',label:'Whole grid',min:3,max:13,step:2,discrete:true}],validateParams:p=>({valid:Number.isInteger((p.q-3)/2),parameters:{...p}}),evaluate:p=>({output:p.q,status:'valid'})};
  const data=Data.sample(module,{q:7},{count:3});assert.ok(data.rows.length<=4);assert.ok(data.rows.some(row=>row.current&&row.input===7));assert.deepEqual(data.rows.map(row=>row.input),[3,7,9,13]);
});
