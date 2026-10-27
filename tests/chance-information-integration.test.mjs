import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Chance=require('../src/chance-information.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['probability-distribution','expected-value','entropy'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(n=>n.endsWith('.json')).map(n=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+n,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const port=(slug,direction,key)=>Ports.forModule(slug).find(p=>p.direction===direction&&p.key===key);
const uses=(query,id)=>index.search(query).find(e=>e.id===id)?.usedBy.map(u=>u.slug)||[];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} ≠ ${b}`);

test('three readings of one distribution install as separate reusable lessons and model-derived previews',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.deepEqual(module.views.map(v=>v.id),['geometry','graph']);assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);
    assert.ok(card.source_refs.every(id=>sources.some(s=>s.id===id)));
    const preview=Previews.render(slug,{id:'chance:'+slug});assert.equal(Number(preview.match(/data-preview-output="([^"]+)"/)[1]),r.output);
    assert.match(preview,/data-preview-quantity="output"/);assert.doesNotMatch(preview,/role="slider"|data-drag-param|NaN|Infinity/);
  }
  const inputs={oneChance:.5,twoShare:.75},outputs=slugs.map(slug=>Modules.get(slug).evaluate(inputs));
  for(const result of outputs)assert.deepEqual(result.probabilities,[.125,.5,.375]);
  assert.equal(outputs[0].output,.375);assert.equal(outputs[1].output,1.25);assert.equal(outputs[2].output,outputs[2].entropy);
});

test('stories expose one control and keep prose, calculations and scenes on the same probabilities',()=>{
  const answers={'probability-distribution':.25,'expected-value':1.25,entropy:Math.log2(3)};
  for(const slug of slugs){
    const story=Stories.forSlug(slug);assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);
    assert.equal(story.parameters[story.timeline.key],story.timeline.to);near(Chance.evaluate(slug,Life.parametersAt(story,1)).output,answers[slug]);
    assert.equal((Life.markup(story,Life.parametersAt(story,0)).match(/type="range"/g)||[]).length,1);
    for(const time of [0,.07,.25,.51,.97,1]){
      const p=Life.parametersAt(story,time),r=Chance.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true,slug+' at '+time);
      for(const template of [...story.steps.flatMap(s=>[s.body,s.formula]),...story.calculation.map(c=>c.template)])for(const [,key]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g))assert.ok(typeof values[key]==='string'||Number.isFinite(values[key]),slug+' readable '+key);
      for(const view of ['geometry','graph'])assert.doesNotMatch(Chance.render(slug,p,{view,compact:true,sceneControl:false,id:'chance:'+slug}),/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
  const zero=Chance.evaluate('entropy',{oneChance:1,twoShare:.5});assert.equal(zero.entropy,0);assert.equal(zero.rows[0].surprisal,null);assert.equal(zero.h0,0);
});

test('typed ports distinguish chance, remainder share, expected count and information units',()=>{
  assert.deepEqual([port('probability-distribution','output','output').type,port('probability-distribution','output','output').unit],['probability','1']);
  assert.deepEqual([port('expected-value','output','output').type,port('expected-value','output','output').unit],['expected-count','book']);
  assert.deepEqual([port('entropy','output','output').type,port('entropy','output','output').unit],['information-entropy','bit']);
  assert.equal(Links.compatible(port('probability-distribution','output','p2'),port('expected-value','input','oneChance')).valid,true);
  for(const slug of ['expected-value','entropy'])assert.equal(Links.compatible(port(slug,'output','output'),port('probability-distribution','input','oneChance')).code,'type_mismatch');
  assert.equal(Links.compatible(port('probability-distribution','output','p2'),port('entropy','input','twoShare')).code,'type_mismatch');
});

test('index symbols retain probability roles and expose new definitions with actual card links',()=>{
  for(const slug of slugs){assert.ok(uses('q','one-book-chance').includes(slug));assert.ok(uses('r','remaining-two-share').includes(slug));assert.ok(uses('pᵢ','probability-mass').includes(slug));}
  assert.ok(!uses('r','remaining-two-share').includes('torque'));
  assert.ok(uses('μ','probability-mean').includes('expected-value'));assert.ok(!uses('μ','probability-mean').includes('variance'));
  assert.ok(!uses('μ','population-mean').includes('expected-value'));
  assert.deepEqual(uses('H(X)','entropy'),['entropy']);assert.deepEqual(uses('I(xᵢ)','self-information'),['entropy']);
  for(const query of ['H(X)','H[X]'])assert.ok(index.search(query).some(e=>e.id==='entropy'));
  for(const query of ['pᵢ','p_i','p₀','p_0'])assert.ok(index.search(query).some(e=>e.id==='probability-mass'));
  for(const [query,id]of [['probability mass function','probability-mass-function'],['surprisal','self-information'],['bits','bit'],['0 log 0','zero-entropy-term']])assert.ok(index.search(query).some(e=>e.id===id&&e.usedBy.some(u=>slugs.includes(u.slug))),query);
  assert.ok(Notation.classify('H(X)',{slug:'entropy'}).includes('entropy'));assert.ok(!Notation.classify('H(X)',{slug:'variance'}).includes('entropy'));
  assert.ok(Notation.classify('p_i',{slug:'probability-distribution'}).includes('probability-mass'));
  assert.deepEqual(Notation.classify('bits',{kind:'unit',slug:'entropy'}),['bit']);assert.deepEqual(Symbols.keysFor('entropy','H(X)'),['entropy']);assert.deepEqual(Symbols.keysFor('expected-value','E[X]'),['mean']);
  for(const id of ['probability-distribution','probability-mass-function','probability-mass','discrete-outcome-value','discrete-support','total-probability-mass','one-book-chance','remaining-two-share','probability-mean','expectation-contribution','entropy','self-information','entropy-contribution','base-two-logarithm','zero-entropy-term','zero-probability-outcome','discrete-uniform-distribution','deterministic-distribution','bit','book-count-unit']){
    const entry=Terms.entries.find(e=>e.id===id);assert.ok(entry);assert.ok(entry.sourceKeys.length&&entry.sourceKeys.every(k=>Terms.sources[k]),id+' primary sources');
    assert.ok(index.get(id).usedBy.some(u=>slugs.includes(u.slug)),id+' links to an actual lesson');
  }
});

test('chance territory and learner order connect the new sequence to probability and logarithms',()=>{
  const atlas=Regions.create({cards}),topic=atlas.getTopic('uncertainty:probability');
  for(const slug of slugs)assert.ok(topic.availableCards.some(c=>c.slug===slug),slug+' on atlas');
  const sequence=Order.order(cards).map(c=>c.slug);
  for(const [before,after]of [['probability-distribution','expected-value'],['expected-value','entropy'],['real-logarithm','entropy']])assert.ok(sequence.indexOf(before)<sequence.indexOf(after),before+' before '+after);
  assert.equal(atlas.regions.length,8);assert.equal(atlas.topics.length,24);
});
