import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js'),Store=require('../src/workspace-store.js'),Links=require('../src/workspace-links.js');
const slugs=['vector','inner-product','matrix-linear-map','determinant'];
const cards=slugs.map(slug=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8')));
const near=(a,b)=>assert.ok(Math.abs(a-b)<=1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);

test('new linear-algebra content and examples evaluate through their registered module contracts',()=>{
  let cases=0;
  for(const card of cards){
    const module=Modules.get(card.slug);assert.equal(module.version,'1');assert.equal(card.publication_status,'draft');assert.equal(card.examples.length,5);
    assert.deepEqual(module.defaults(),Object.fromEntries(card.interactive.controls.map(control=>[control.id,control.default])));
    for(const example of card.examples)if(example.preset)assert.equal(module.evaluate(example.preset).valid,true,example.id);
    for(const fixture of card.interactive.expected_cases){const result=module.evaluate(fixture.input);assert.equal(result.status,fixture.status??'valid');if(typeof fixture.output==='number')near(result.output,fixture.output);cases++;}
  }
  assert.equal(cases,41);
});

test('zero-direction and singular contexts round-trip without losing undefined auxiliary quantities',()=>{
  const slot=(id,slug,parameters)=>({id,module_id:slug,module_version:'1',parameters,view:'graph',camera:.65,baseline:null,inspector:null});
  const request={title:'Zero direction and collapsed map',slots:[slot('work-0','inner-product',{ux:0,uy:0,vx:2,vy:2}),slot('work-1','determinant',{a:1,b:1,c:1,d:1})],connection:null};
  const book=Store.createStore({storage:null,modules:Modules}),saved=book.add(request);assert.equal(saved.ok,true,saved.error);
  const restored=Store.createStore({storage:null,modules:Modules});assert.equal(restored.importBackup(book.exportBackup()).ok,true);
  assert.deepEqual(restored.list(),book.list());
  const [dot,det]=request.slots.map(slot=>Modules.get(slot.module_id).evaluate(slot.parameters));
  assert.equal(dot.output,0);assert.equal(dot.projection,null);assert.equal(dot.angleDegrees,null);
  assert.equal(det.output,0);assert.equal(det.inverseExists,false);
});

test('matrix components connect to vector components while area factors retain their distinct meaning',()=>{
  const source=Modules.get('matrix-linear-map'),target=Modules.get('vector');
  const linked=Links.check({sourceModule:source,sourceParameters:source.defaults(),sourcePortId:'output:output',targetModule:target,targetParameters:target.defaults(),targetPortId:'input:x'});
  assert.equal(linked.valid,true,linked.reason);assert.equal(linked.value,2);near(target.evaluate(linked.parameters).output,Math.sqrt(20));
  const area=Modules.get('determinant').ports.find(port=>port.key==='area'),lengthScale=Modules.get('exponential-change').ports.find(port=>port.key==='factor');
  assert.notEqual(area.type,lengthScale.type,'An area factor is not silently treated as a length factor');
});
