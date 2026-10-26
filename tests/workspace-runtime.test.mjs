import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Runtime=require('../src/workspace-runtime.js');
const Store=require('../src/workspace-store.js');
const Modules=require('../src/playground-modules.js');
const clone=value=>JSON.parse(JSON.stringify(value));
function slot(id,moduleId='function-composition',extra={}){
  const module=Modules.get(moduleId);
  return{id,module_id:moduleId,module_version:module.version,parameters:module.defaults(),view:module.defaultView,camera:.65,baseline:null,inspector:null,...extra};
}
function saved(slots=[slot('work-0'),slot('work-1','real-logarithm')],connection=null){
  const store=Store.createStore({storage:null,modules:Modules});
  const result=store.add({title:'Saved comparison',slots,connection});
  assert.equal(result.ok,true,result.error);return result.workspace;
}
function harness(initial=[slot('work-0'),slot('work-1','real-logarithm')],initialConnection=null){
  let live=[],connection=clone(initialConnection),onPause=null,replacement=null;
  const events=[],replacements=[];
  function build(slots,wire){
    connection=clone(wire);
    live=slots.map(data=>{
      const current=clone(data),module=Modules.get(current.module_id);
      const controller={
        pause(){events.push('pause:'+current.id);onPause?.(current.id);},
        getParameters(){events.push('parameters:'+current.id);return current.parameters;},
        getViewState(){events.push('view:'+current.id);return{view:current.view,camera:current.camera,baseline:current.baseline,inspector:current.inspector};}
      };
      return{id:current.id,module,controller,data:current};
    });
  }
  build(initial,initialConnection);
  const runtime=Runtime.create({modules:Modules,getSlots:()=>live.map(item=>({id:item.id,module:item.module,controller:item.controller})),getConnection:()=>connection,replace(slots,wire){
    replacements.push({slots:clone(slots),connection:clone(wire)});
    return replacement?replacement(slots,wire,replacements.length):build(slots,wire);
  }});
  return{runtime,events,replacements,build,get live(){return live;},get connection(){return connection;},set onPause(fn){onPause=fn;},set replacement(fn){replacement=fn;}};
}

test('workspace runtime loads offline without touching a document or browser storage',()=>{
  const context=vm.createContext({AtlasWorkspaceStore:Store});
  vm.runInContext(fs.readFileSync(new URL('../src/workspace-runtime.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasWorkspaceRuntime.create,'function');
  assert.throws(()=>Runtime.create({modules:Modules,getSlots:()=>[]}),/modules.*getSlots.*getConnection.*replace/);
  const runtime=context.AtlasWorkspaceRuntime.create({modules:Modules,getSlots:()=>[],getConnection:()=>null,replace(){}});
  assert.throws(()=>runtime.capture(),/Two live playground slots/);
});

test('capture pauses both hosts before re-reading full precision, views, camera, pins, and inspector data',()=>{
  const wire={sourceSlotId:'work-0',sourcePortId:'input:x',targetSlotId:'work-1',targetPortId:'input:x'};
  const first=slot('work-0','fractal-geometry',{parameters:{depth:3.141592653589793,length:1.23456789012345},view:'graph',camera:.2,baseline:{depth:1,length:2},inspector:{kind:'fractal',version:1,zoom:9,compare:true}});
  const second=slot('work-1','function-composition',{view:'spatial',camera:.95,baseline:{...Modules.get('function-composition').defaults(),x:-1}});
  const h=harness([first,second],wire);
  h.onPause=id=>{if(id==='work-1')h.live[0].data.parameters.length=Math.PI;};
  const payload=h.runtime.capture();
  assert.deepEqual(h.events.slice(0,2),['pause:work-0','pause:work-1']);
  assert.equal(payload.title,Modules.get('fractal-geometry').title+' + '+Modules.get('function-composition').title);
  assert.equal(payload.slots[0].parameters.length,Math.PI,'Values are re-read after both pauses');
  assert.equal(payload.slots[0].parameters.depth,3.141592653589793);
  assert.deepEqual(payload.slots[0].inspector,{kind:'fractal',version:1,zoom:9,compare:true});
  assert.equal(payload.slots[1].view,'spatial');assert.equal(payload.slots[1].camera,.95);
  payload.slots[0].parameters.length=99;payload.slots[0].baseline.length=99;payload.slots[0].inspector.zoom=1;payload.connection.sourcePortId='changed';
  assert.equal(h.live[0].data.parameters.length,Math.PI);
  assert.equal(h.live[0].data.baseline.length,2);
  assert.equal(h.live[0].data.inspector.zoom,9);
  assert.equal(h.connection.sourcePortId,'input:x');
});

test('malformed and unavailable saved workspaces fail preflight before pausing or replacing live hosts',()=>{
  const record=saved();
  const unavailable=clone(record);unavailable.slots[0].module_version='older-unavailable';
  const invalid=clone(record);invalid.slots[0].view='no-such-view';
  const wrongSchema=clone(record);wrongSchema.schema_version='99.0.0';
  let reads=0;const accessor={...record};Object.defineProperty(accessor,'slots',{enumerable:true,get(){reads++;return record.slots;}});
  for(const input of [unavailable,invalid,wrongSchema,accessor]){
    const h=harness(),before=clone(h.live.map(item=>item.data));
    const result=h.runtime.restore(input);
    assert.equal(result.ok,false);
    assert.ok(result.error);
    if(input===unavailable){assert.equal(result.compatibility.status,'preserved');assert.match(result.error,/matching saved module version/);}
    assert.deepEqual(h.events,[]);
    assert.equal(h.replacements.length,0);
    assert.deepEqual(h.live.map(item=>item.data),before);
  }
  assert.equal(reads,0);
});

test('valid linked and blocked snapshots restore their exact configuration without correcting saved receiving values',()=>{
  const link={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:width'};
  const source=slot('work-0','pythagorean-theorem',{parameters:{a:6,b:4}});
  const length=Modules.get('pythagorean-theorem').evaluate(source.parameters).output;
  const linked=saved([source,slot('work-1','quadratic-optimization',{parameters:{width:length,perimeter:20},view:'graph',camera:.8,baseline:{width:5,perimeter:20}})],link);
  const blocked=saved([slot('work-0','pythagorean-theorem'),slot('work-1','fractal-geometry',{parameters:{depth:2.5,length:2},view:'graph',baseline:{depth:1,length:1.5},inspector:{kind:'fractal',version:1,zoom:27,compare:true}})],{...link,targetPortId:'input:length'});
  for(const record of [linked,blocked]){
    const h=harness(),before=clone(record);
    const result=h.runtime.restore(record);
    assert.equal(result.ok,true,result.error);
    assert.deepEqual(result.workspace,record);
    assert.equal(h.replacements.length,1);
    assert.deepEqual(h.replacements[0],{slots:record.slots,connection:record.connection});
    assert.deepEqual(h.live.map(item=>item.data),record.slots);
    assert.deepEqual(h.connection,record.connection);
    assert.deepEqual(record,before);
    assert.deepEqual(h.events.slice(0,2),['pause:work-0','pause:work-1']);
  }
});

test('defined parameters with undefined outputs remain restorable rather than being recalculated into defaults',()=>{
  const record=saved([
    slot('work-0','real-logarithm',{parameters:{base:1,argument:0},view:'graph',baseline:{base:.5,argument:8}}),
    slot('work-1','derivative',{parameters:{preset:'absolute',a:0,h:0},view:'spatial',camera:.9,baseline:{preset:'cubic',a:2,h:.01}})
  ]);
  const h=harness();
  assert.equal(h.runtime.restore(record).ok,true);
  assert.deepEqual(h.live.map(item=>item.data.parameters),record.slots.map(item=>item.parameters));
  assert.equal(h.live[0].data.parameters.base,1);assert.equal(h.live[1].data.parameters.h,0);
});

test('replacement failure rolls back the previous exact views and pins through the same mounting boundary',()=>{
  const previous=[slot('work-0','fractal-geometry',{parameters:{depth:3,length:2},view:'geometry',baseline:{depth:1,length:1},inspector:{kind:'fractal',version:1,zoom:9,compare:true}}),slot('work-1','real-logarithm',{parameters:{base:.5,argument:8},view:'graph',camera:.3,baseline:{base:2,argument:4}})];
  const h=harness(previous);
  h.replacement=(slots,connection,attempt)=>{
    if(attempt===1){h.build([slot('work-0'),slot('work-1')],null);return{ok:false,error:'A saved view failed to mount.'};}
    h.build(slots,connection);return{ok:true};
  };
  const result=h.runtime.restore(saved());
  assert.equal(result.ok,false);
  assert.equal(result.rolledBack,true);
  assert.equal(result.error,'A saved view failed to mount.');
  assert.equal(h.replacements.length,2);
  assert.deepEqual(h.replacements[1],{slots:previous,connection:null});
  assert.deepEqual(h.live.map(item=>item.data),previous);
});

test('a failed rollback exposes a portable deep copy of the original workspace for recovery',()=>{
  const previous=[slot('work-0','pythagorean-theorem'),slot('work-1','quadratic-optimization',{view:'graph'})];
  const connection={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:width'};
  const h=harness(previous,connection);
  h.replacement=()=>{throw new Error('Mounting is unavailable.');};
  const result=h.runtime.restore(saved());
  assert.equal(result.ok,false);assert.equal(result.rolledBack,false);
  assert.match(result.error,/previous workspace also could not be rebuilt/);
  assert.deepEqual(result.recovery.slots,previous);assert.deepEqual(result.recovery.connection,connection);
  const recoveryStore=Store.createStore({storage:null,modules:Modules});
  assert.equal(recoveryStore.add(result.recovery).ok,true,'The recovery payload can be exported through the same saved-workspace schema');
  result.recovery.slots[0].parameters.a=99;
  assert.equal(h.live[0].data.parameters.a,3);
});

test('replacement callbacks receive independent copies and capture rejects hosts replaced during pause',()=>{
  const record=saved(),before=clone(record),h=harness();
  h.replacement=(slots,connection)=>{h.build(slots,connection);slots[0].parameters.x=999;return{ok:true};};
  const result=h.runtime.restore(record);
  assert.equal(result.ok,true);
  assert.deepEqual(result.workspace,before);
  assert.deepEqual(record,before);
  assert.equal(h.live[0].data.parameters.x,3);
  const changed=harness();
  changed.onPause=id=>{if(id==='work-0')changed.build([slot('work-0'),slot('work-1')],null);};
  assert.throws(()=>changed.runtime.capture(),/changed while it was being captured/);
});
