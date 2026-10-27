import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Modules=require('../src/playground-modules.js'),Regions=require('../src/atlas-regions.js'),Links=require('../src/workspace-links.js'),Store=require('../src/workspace-store.js'),N=require('../src/math-notation.js');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+f,import.meta.url),'utf8')));

test('all twenty-four map areas now lead to at least one actual lesson',()=>{
  const model=Regions.create({cards});assert.equal(model.topics.length,24);assert.ok(model.topics.every(t=>t.availableCount>0));
  for(const [area,slug]of [['foundations:sets-and-proof','set'],['uncertainty:statistics','population-sample'],['computation:linear-time-algorithms','computational-complexity']])assert.ok(model.getTopic(area).availableCards.some(c=>c.slug===slug));
  assert.equal(model.availableCount,cards.length);
});

test('mean bars, conjugates and asymptotic classes preserve distinct mathematical readings',()=>{
  for(const q of ['x̄','xbar','\\bar{x}','\\overline{x}'])assert.ok(N.classify(q).includes('sample-mean'),q);
  for(const q of ['z̅','\\overline{z}']){assert.ok(N.classify(q).includes('complex-conjugate'));assert.ok(!N.classify(q).includes('sample-mean'));}
  assert.ok(N.classify('|A∩B|').includes('cardinality'));assert.ok(!N.classify('|A∩B|').includes('absolute-value'));assert.ok(N.classify('|x|').includes('absolute-value'));
  assert.deepEqual(N.classify('O(n)'),['big-o']);assert.deepEqual(N.classify('Θ(n)'),['big-theta']);assert.ok(N.classify('Θ').includes('theta-capital'));
  assert.deepEqual(N.classify('ms/item',{kind:'unit'}),['compound-unit']);
});

test('explicit count-to-scan connection preserves quantity type, bounds and portable state',()=>{
  const a=Modules.get('set'),b=Modules.get('computational-complexity'),ap=a.defaults(),bp=b.defaults();
  const linked=Links.check({sourceModule:a,sourceParameters:ap,sourcePortId:'output:output',targetModule:b,targetParameters:bp,targetPortId:'input:itemCount'});
  assert.equal(linked.valid,true,linked.reason);assert.equal(linked.parameters.itemCount,4);assert.equal(b.evaluate(linked.parameters).output,8);
  const slot=(id,m,p)=>({id,module_id:m.id,module_version:m.version,parameters:p,view:'graph',camera:.65,baseline:null,inspector:null}),connection={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:itemCount'};
  const book=Store.createStore(),saved=book.add({title:'Inspect selected candidates',slots:[slot('work-0',a,ap),slot('work-1',b,linked.parameters)],connection});assert.equal(saved.ok,true,saved.error);
  const restored=Store.createStore();assert.equal(restored.importBackup(book.exportBackup()).ok,true);assert.deepEqual(restored.get(saved.workspace.id),saved.workspace);
  const empty=Links.check({sourceModule:a,sourceParameters:{...ap,maxSize:2},sourcePortId:'output:output',targetModule:b,targetParameters:linked.parameters,targetPortId:'input:itemCount'});assert.equal(empty.valid,false,'This scan module declares a positive input count');
});

test('sample selection is discrete while a measured weight can change continuously',()=>{
  const m=Modules.get('population-sample'),p=m.defaults();assert.equal(m.canInterpolate(p,{...p,sampleSize:5}),false);assert.equal(m.canInterpolate(p,{...p,startIndex:9}),false);assert.equal(m.canInterpolate(p,{...p,lastValue:26}),true);
  assert.ok(!m.sweeps.some(s=>['sampleSize','startIndex'].includes(s.key)));
  const whole=m.evaluate({...p,sampleSize:12,startIndex:11});assert.equal(whole.sampleMean,whole.populationMean);assert.equal(whole.meanError,0);
});
