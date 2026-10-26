import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js'),Store=require('../src/workspace-store.js'),N=require('../src/math-notation.js'),Scenes=require('../src/story-scenes.js'),Stories=require('../src/story-library.js');

test('local approximation calls and objective values keep their distinct notation meanings',()=>{
  const plane=N.extract('L(x+Δx,y+Δy)');assert.ok(plane.some(r=>r.token==='L(x+Δx,y+Δy)'&&r.entryIds.includes('function-notation')));
  for(const query of ['C(x,y)','C(xₖ,yₖ)','C(xₖ₊₁,yₖ₊₁)']){assert.ok(N.classify(query).includes('cost-function'));assert.ok(!N.classify(query).includes('binomial-coefficient'));}
  for(const query of ['C(n,k)','C(6,2)'])assert.ok(N.classify(query).includes('binomial-coefficient'));
  assert.ok(N.classify('D_uF(x,y)').includes('directional-derivative'));
  assert.ok(N.extract('D_uF(x,y)').some(r=>r.entryIds.includes('directional-derivative')));
});

test('discrete updates are not interpolated while step-size changes remain continuous',()=>{
  const m=Modules.get('gradient-descent'),p=m.defaults();
  assert.equal(m.canInterpolate(p,{...p,iteration:p.iteration+1}),false);
  assert.equal(m.canInterpolate(p,{...p,stepSize:.3}),true);
  assert.ok(!m.sweeps.some(s=>s.key==='iteration'));assert.equal(m.primarySweep,'stepSize');
  assert.equal(m.validateParams({...p,iteration:4.5}).valid,false);
});

test('learner-facing data descriptions preserve mathematical letter case',()=>{
  const Data=require('../src/model-data.js'),m=Modules.get('tangent-plane'),html=Data.markup(Data.sample(m,m.defaults()));
  assert.match(html,/Eastward displacement Δx/);assert.doesNotMatch(html,/displacement δx/);
});

test('surface-story declarations reach the same geometry provider through the shared route',()=>{
  for(const slug of ['directional-derivative','tangent-plane']){const s=Stories.forSlug(slug);assert.equal(s.view,'spatial');const html=Scenes.render(slug,s.parameters,{view:s.view});assert.match(html,/data-role="surface-cell"/);assert.doesNotMatch(html,/NaN|Infinity/);}
});

test('integer iterates, oversized steps and surface comparison state round-trip without revision changes',()=>{
  const slot=(id,slug,extra={})=>{const m=Modules.get(slug);return{id,module_id:slug,module_version:m.version,parameters:m.defaults(),view:m.views.some(v=>v.id==='spatial')?'spatial':'graph',camera:.8,baseline:m.defaults(),inspector:null,...extra};};
  const descent=Modules.get('gradient-descent'),p={...descent.defaults(),a:2,b:2,stepSize:1.5,iteration:16};
  const book=Store.createStore(),added=book.add({title:'Prediction and large discrete updates',slots:[slot('work-0','tangent-plane'),slot('work-1','gradient-descent',{parameters:p})],connection:null});assert.equal(added.ok,true,added.error);
  const restored=Store.createStore();assert.equal(restored.importBackup(book.exportBackup()).ok,true);assert.deepEqual(restored.get(added.workspace.id),added.workspace);assert.equal(restored.compatibility(added.workspace).replayable,true);
  const r=descent.evaluate(p);assert.ok(r.output>r.initialCost);assert.ok(Number.isFinite(r.output));
});
