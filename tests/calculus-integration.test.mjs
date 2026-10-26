import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js');
const Stories=require('../src/story-library.js');
const Scenes=require('../src/story-scenes.js');
const Store=require('../src/workspace-store.js');
const Links=require('../src/workspace-links.js');
const slot=(id,moduleId,extra={})=>{const m=Modules.get(moduleId);return{id,module_id:moduleId,module_version:m.version,parameters:m.defaults(),view:'spatial',camera:.85,baseline:m.defaults(),inspector:null,...extra};};

test('story scene routing preserves a declared surface view and its exact quantity marks',()=>{
  for(const slug of ['partial-derivative','gradient']){
    const s=Stories.forSlug(slug),html=Scenes.render(slug,s.parameters,{id:'story-'+slug,view:s.view});
    assert.match(html,/orthographic projection of the evaluated field surface/);
    assert.match(html,/data-quantity="partialY"/);
    assert.match(html,/data-quantity="height/);
    assert.doesNotMatch(Scenes.render(slug,s.parameters),/orthographic projection/,'Older callers still default to Geometry');
  }
});

test('surface cameras, pins and a valid zero gradient survive portable workspace restoration',()=>{
  const gradient=Modules.get('gradient'),zero={...gradient.defaults(),x:0,y:0};
  const original=Store.createStore(),saved=original.add({title:'Local slopes and zero direction',slots:[slot('work-0','partial-derivative'),slot('work-1','gradient',{parameters:zero})],connection:null});
  assert.equal(saved.ok,true,saved.error);
  const restored=Store.createStore();assert.equal(restored.importBackup(original.exportBackup()).ok,true);
  const record=restored.get(saved.workspace.id);assert.deepEqual(record,saved.workspace);
  assert.equal(restored.compatibility(record).replayable,true);
  const r=gradient.evaluate(record.slots[1].parameters);assert.equal(r.gradientNorm,0);assert.equal(r.unitGradientX,null);assert.equal(r.unitGradientY,null);
  for(const s of record.slots){const m=Modules.get(s.module_id),view=m.views.find(v=>v.id===s.view);assert.equal(view.camera,true);const html=view.render(s.parameters,{id:s.id,camera:s.camera,baseline:s.baseline});assert.match(html,/baseline-surface-point/);assert.doesNotMatch(html,/NaN|Infinity/);}
});

test('rate, norm and scalar-setting ports keep distinct mathematical roles',()=>{
  const chain=Modules.get('chain-rule'),gradient=Modules.get('gradient');
  const port=(m,key,direction)=>m.ports.find(p=>p.key===key&&p.direction===direction);
  assert.equal(Links.compatible(port(gradient,'output','output'),port(chain,'a','input')).valid,false,'A slope magnitude is not a scalar calibration setting');
  assert.equal(Links.compatible(port(gradient,'partialX','output'),port(gradient,'x','input')).valid,false,'A derivative is not a coordinate');
  assert.notEqual(port(gradient,'output','output').type,port(gradient,'partialX','output').type);
});
