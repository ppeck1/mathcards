import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Models=require('../src/structures.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['countability','finite-state-machine','open-set','quantifier-scope'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(n=>n.endsWith('.json')).map(n=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+n,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const port=(slug,direction,key)=>Ports.forModule(slug).find(p=>p.direction===direction&&p.key===key);
const uses=(query,id)=>index.search(query).find(e=>e.id===id)?.usedBy.map(u=>u.slug)||[];

test('the structures batch composes canonical lessons, reusable views, sources, examples and exact model-derived previews',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);assert.deepEqual(module.views.map(v=>v.id),['geometry','graph']);
    assert.ok(card.source_refs.every(id=>sources.some(s=>s.id===id)));
    for(const e of card.examples)if(e.preset)assert.equal(module.evaluate({...p,...e.preset}).valid,true,slug+' '+e.id);
    const html=Previews.render(slug,{id:'test:'+slug});assert.equal(Number(html.match(/data-preview-output="([^"]+)"/)[1]),r.output);assert.match(html,/data-preview-quantity="output"/);assert.doesNotMatch(html,/role="slider"|data-drag-param|NaN|Infinity/);
  }
});

test('connected stories preserve whole states, readable labels and one declared control',()=>{
  const goals={countability:-4,'finite-state-machine':1,'open-set':.5,'quantifier-scope':1};
  for(const slug of slugs){
    const story=Stories.forSlug(slug),key=story.timeline.key;assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);assert.equal(story.parameters[key],story.timeline.to);
    assert.equal(Life.parametersAt(story,0)[key],story.timeline.from);assert.equal(Models.evaluate(slug,Life.parametersAt(story,1)).output,goals[slug]);
    assert.equal((Life.markup(story,Life.parametersAt(story,0)).match(/type="range"/g)||[]).length,1);
    for(const t of [0,.07,.25,.51,.97,1]){
      const p=Life.parametersAt(story,t),r=Models.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true,slug+' at '+t);
      if(story.variables[0].discrete)assert.equal(Number.isInteger(p[key]),true);
      for(const template of [...story.steps.flatMap(s=>[s.body,s.formula]),...story.calculation.map(p=>p.template)])for(const [,token]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g))assert.ok(typeof values[token]==='string'||typeof values[token]==='boolean'||Number.isFinite(values[token]),slug+' readable '+token);
      for(const view of ['geometry','graph'])assert.doesNotMatch(Models.render(slug,p,{view,compact:true,sceneControl:false,id:'story:'+slug}),/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
});

test('ports separate integer addresses, categorical parity, openness and quantified truth',()=>{
  assert.equal(port('countability','output','output').type,'integer-value');assert.equal(port('countability','output','prefixSize').type,'count');assert.ok(!Ports.forModule('countability').some(p=>p.type==='cardinality'));
  assert.equal(port('finite-state-machine','output','output').type,'parity-state');assert.equal(port('finite-state-machine','output','accepted').type,'word-acceptance-flag');
  assert.equal(port('open-set','output','output').type,'signed-clearance');assert.equal(port('open-set','output','output').unit,'cm');assert.equal(port('open-set','output','isOpen').type,'set-openness');
  assert.equal(port('quantifier-scope','output','output').type,'truth-value');
  for(const source of [port('finite-state-machine','output','output'),port('open-set','output','isOpen')])assert.equal(Links.compatible(source,{...port('quantifier-scope','output','output'),direction:'input'}).code,'type_mismatch');
  assert.equal(Models.evaluate('finite-state-machine',{steps:0,pattern:'00000000'}).acceptanceLabel,'Input unfinished');
  const open=Models.evaluate('open-set',{center:1.5,radius:.75,boundary:'open'});assert.equal(open.isOpen,1);assert.equal(open.neighborhoodFits,0);assert.ok(open.constructiveRadius>0);
});

test('new symbols retain scoped roles rather than borrowing unrelated Greek or predicate meanings',()=>{
  assert.deepEqual(uses('δ','transition-function'),['finite-state-machine']);assert.ok(!uses('δ','transition-function').includes('chaos-theory'));
  assert.deepEqual(uses('Σ','input-alphabet'),['finite-state-machine']);assert.ok(!uses('Σ','summation').includes('finite-state-machine'));
  assert.deepEqual(uses('ε','empty-word'),['finite-state-machine']);assert.deepEqual(uses('ε','neighborhood-radius'),['open-set']);
  assert.deepEqual(uses('Rₕ(x,y)','station-relation'),['quantifier-scope']);assert.deepEqual(uses('Rₕ(x,y)','binary-relation'),['relation']);
  assert.deepEqual(uses('xₚ','probe-coordinate'),['quantifier-scope']);assert.deepEqual(uses('h','free-reach-parameter'),['quantifier-scope']);
  assert.deepEqual(uses('C(x)','signed-clearance'),['open-set']);assert.ok(!uses('C(x)','cost-function').includes('open-set'));
  assert.deepEqual(uses('ℵ₀','aleph-null'),['countability']);assert.deepEqual(Symbols.keysFor('countability','ℵ₀'),[]);
  assert.deepEqual(Symbols.keysFor('quantifier-scope','x'),[]);assert.deepEqual(Symbols.keysFor('quantifier-scope','xₚ'),['desk']);assert.deepEqual(Symbols.keysFor('quantifier-scope','Aₕ'),['allSomeTruth']);
  assert.ok(Notation.classify('δ(q,1)',{slug:'finite-state-machine'}).includes('transition-function'));assert.ok(Notation.classify('B_\\varepsilon(p)',{slug:'open-set'}).includes('open-ball'));assert.ok(Notation.classify('\\aleph_0').includes('aleph-null'));
  const ids=new Set(Terms.entries.map(e=>e.id));for(const e of Terms.entries){assert.ok(e.sourceKeys.every(k=>Terms.sources[k]),e.id);assert.ok((e.relatedIds||[]).every(id=>ids.has(id)),e.id);}
});

test('thin atlas territories gain real lessons after their prerequisites without claiming broader theories',()=>{
  const atlas=Regions.create({cards});
  for(const [topic,slug]of [['numbers:real-numbers','countability'],['computation:algorithms','finite-state-machine'],['spaces:fractals-and-spaces','open-set'],['foundations:sets-and-proof','quantifier-scope']])assert.ok(atlas.getTopic(topic)?.availableCards.some(c=>c.slug===slug),topic+' '+slug);
  const order=Order.order(cards).map(c=>c.slug);for(const [a,b]of [['relation','quantifier-scope'],['set','countability'],['computational-complexity','finite-state-machine'],['vector','open-set']])assert.ok(order.indexOf(a)<order.indexOf(b),a+' before '+b);
  assert.equal(atlas.regions.length,8);assert.equal(atlas.topics.length,24);
});
