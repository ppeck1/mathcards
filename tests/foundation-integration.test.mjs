import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js');
const Models=require('../src/models.js');
const Store=require('../src/workspace-store.js');
const slugs=['function','exponentiation','limit','signed-accumulation'];
const cards=slugs.map(slug=>JSON.parse(fs.readFileSync(new URL(`../content/cards/${slug}.json`,import.meta.url),'utf8')));
const slot=(id,slug,parameters)=>({id,module_id:slug,module_version:Modules.get(slug).version,parameters,view:'graph',camera:.65,baseline:null,inspector:null});

test('new canonical cards and module defaults agree, including string-valued selections',()=>{
  for(const card of cards){
    assert.equal(card.publication_status,'draft');
    assert.ok(card.examples.length>=5);
    assert.deepEqual(Models.defaults(card.slug),Object.fromEntries(card.interactive.controls.map(control=>[control.id,control.default])));
    for(const fixture of card.interactive.expected_cases){
      const result=Models.evaluate(card.slug,fixture.input);
      assert.equal(result.status,fixture.status??'valid',`${card.slug}: ${fixture.id}`);
      if(typeof fixture.output==='number')assert.ok(Math.abs(result.output-fixture.output)<1e-10*Math.max(1,Math.abs(fixture.output)),card.slug);
      else if('output' in fixture)assert.equal(result.output,fixture.output,card.slug);
    }
  }
});

test('provider selections stay discrete and valid-domain sweeps never animate a select or invalid power base',()=>{
  for(const slug of slugs){
    const module=Modules.get(slug);
    for(const sweep of module.sweeps){
      assert.equal(module.controls.find(control=>control.key===sweep.key).type,'number');
      for(const fraction of [0,.13,.5,.87,1]){
        assert.equal(module.evaluate({...module.defaults(),[sweep.key]:sweep.min+fraction*(sweep.max-sweep.min)}).valid,true,`${slug}.${sweep.key}`);
      }
    }
  }
  for(const [slug,key,value] of [['limit','mode','jump'],['signed-accumulation','partitions','32']]){
    const instance=Modules.createInstance(slug);
    assert.equal(instance.setParameters({[key]:value}).valid,true);
    assert.equal(instance.getParameters()[key],value);
    const state=instance.getParameters();
    assert.equal(instance.setParameters({[key]:8.5}).valid,false);
    assert.deepEqual(instance.getParameters(),state);
    instance.destroy();
  }
});

test('new module contexts round-trip through the existing workspace format with selections and a missing limit',()=>{
  const book=Store.createStore({storage:null,modules:Modules});
  const scenarios=[
    [slot('work-0','function',{x:-1.23456789,a:-2,b:1}),slot('work-1','exponentiation',{base:.5,exponent:-2})],
    [slot('work-0','limit',{mode:'jump',a:1,h:.001}),slot('work-1','signed-accumulation',{time:4,initial:2,rate:-1,partitions:'32'})]
  ];
  for(const slots of scenarios){
    const result=book.add({title:'Foundation context '+slots[0].module_id,slots,connection:null});
    assert.equal(result.ok,true,result.error);
    assert.equal(book.compatibility(result.workspace).replayable,true);
  }
  const restored=Store.createStore({storage:null,modules:Modules});
  assert.equal(restored.importBackup(book.exportBackup()).ok,true);
  assert.deepEqual(restored.list(),book.list());
  for(const workspace of restored.list())for(const saved of workspace.slots){
    const instance=Modules.createInstance(saved.module_id,{parameters:saved.parameters});
    assert.match(instance.render(saved.view),/<svg\b/);
    assert.deepEqual(instance.getParameters(),saved.parameters);
    instance.destroy();
  }
  assert.equal(Models.evaluate('limit',scenarios[1][0].parameters).output,null);
  assert.equal(Models.evaluate('signed-accumulation',scenarios[1][1].parameters).distance,4);
});
