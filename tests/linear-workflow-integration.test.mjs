import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js'),Store=require('../src/workspace-store.js'),Previews=require('../src/card-previews.js'),Data=require('../src/model-data.js'),Links=require('../src/workspace-links.js');
const slugs=['linear-combination','basis','matrix-product'];
const cards=slugs.map(slug=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8')));
const near=(a,b)=>assert.ok(Math.abs(a-b)<=1e-9*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);

test('workflow cards and examples use the installed modules without changing older revisions',()=>{
  let count=0;
  for(const card of cards){
    const model=Modules.get(card.slug);assert.equal(model.version,'1');assert.equal(card.publication_status,'draft');assert.equal(card.examples.length,5);
    assert.deepEqual(model.defaults(),Object.fromEntries(card.interactive.controls.map(control=>[control.id,control.default])));
    for(const example of card.examples)if(example.preset)assert.equal(model.evaluate(example.preset).valid,true,example.id);
    for(const fixture of card.interactive.expected_cases){const r=model.evaluate(fixture.input);assert.equal(r.status,fixture.status??'valid');if(typeof fixture.output==='number')near(r.output,fixture.output);else if('output'in fixture)assert.equal(r.output,fixture.output);count++;}
    assert.equal(Number(/data-preview-output="([^"]+)"/.exec(Previews.render(card.slug))[1]),model.evaluate(model.defaults()).output);
  }
  assert.equal(count,36);
  for(const slug of ['function-composition','real-logarithm','derivative','vector','inner-product','matrix-linear-map','determinant'])assert.equal(Modules.get(slug).version,'1');
});

test('dependent basis and reversed matrix order survive a portable workspace record',()=>{
  const slot=(id,module,parameters)=>({id,module_id:module,module_version:'1',parameters,view:'graph',camera:.65,baseline:null,inspector:null});
  const basis={a:1,b:1,c:0,d:0,x:2,y:0},product={a:1,b:1,x:1,y:1,order:'A_then_B'};
  const original=Store.createStore({storage:null,modules:Modules});
  assert.equal(original.add({title:'Dependent basis and order',slots:[slot('work-0','basis',basis),slot('work-1','matrix-product',product)],connection:null}).ok,true);
  const fresh=Store.createStore({storage:null,modules:Modules});assert.equal(fresh.importBackup(original.exportBackup()).ok,true);
  assert.deepEqual(fresh.list(),original.list());
  const result=Modules.get('basis').evaluate(basis);assert.equal(result.valid,true);assert.equal(result.output,null);assert.equal(result.solutionStatus,'infinite_solutions');
  const data=Data.sample(Modules.get('basis'),basis);assert.equal(data.rows.find(row=>row.current).values.output,null);assert.match(Data.markup(data),/Undefined/);
  assert.equal(Modules.get('matrix-product').evaluate(product).finalY,3);
});

test('typed workflow outputs connect explicitly and undefined basis coordinates stay blocked',()=>{
  const target=Modules.get('linear-combination'),source=Modules.get('basis');
  const options={sourceModule:source,sourceParameters:source.defaults(),sourcePortId:'output:output',targetModule:target,targetParameters:target.defaults(),targetPortId:'input:r'};
  const ready=Links.check(options);assert.equal(ready.valid,true);assert.equal(ready.value,1);
  assert.equal(Links.check({...options,sourceParameters:{a:1,b:1,c:0,d:0,x:2,y:0}}).valid,false);
  const product=Modules.get('matrix-product'),vector=Modules.get('vector');
  const moved=Links.check({sourceModule:product,sourceParameters:product.defaults(),sourcePortId:'output:output',targetModule:vector,targetParameters:vector.defaults(),targetPortId:'input:x'});
  assert.equal(moved.valid,true);assert.equal(moved.value,3);near(vector.evaluate(moved.parameters).output,5);
});
