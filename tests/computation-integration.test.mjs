import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Computation=require('../src/computation.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['turing-machine','proof'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(n=>n.endsWith('.json')).map(n=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+n,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const port=(slug,direction,key)=>Ports.forModule(slug).find(p=>p.direction===direction&&p.key===key);
const uses=(query,id)=>index.search(query).find(e=>e.id===id)?.usedBy.map(u=>u.slug)||[];

test('computation and proof plug into the existing host with model-derived previews',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.ok(card.examples.length>=5);assert.deepEqual(module.views.map(v=>v.id),['geometry','graph']);
    assert.ok(card.source_refs.every(id=>sources.some(s=>s.id===id)));
    const preview=Previews.render(slug,{id:'computation:'+slug});assert.equal(Number(preview.match(/data-preview-output="([^"]+)"/)[1]),r.output);
    assert.match(preview,/data-preview-quantity="output"/);assert.doesNotMatch(preview,/role="slider"|data-drag-param|NaN|Infinity/);
    for(const example of card.examples)if(example.preset)assert.equal(module.evaluate(example.preset).valid,true,slug+' '+example.id);
  }
});

test('guided stories reveal exact whole configurations with one visible control',()=>{
  for(const slug of slugs){
    const story=Stories.forSlug(slug);assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);assert.equal(story.variables[0].key,'steps');
    assert.equal(story.parameters.steps,story.timeline.to);
    assert.equal((Life.markup(story,Life.parametersAt(story,0)).match(/type="range"/g)||[]).length,1);
    for(const time of [0,.07,.25,.51,.97,1]){
      const p=Life.parametersAt(story,time),r=Computation.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true,slug+' at '+time);assert.ok(Number.isInteger(p.steps));
      for(const template of [...story.steps.flatMap(s=>[s.body,s.formula]),...story.calculation.map(c=>c.template)])for(const [,key]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g))assert.ok(typeof values[key]==='string'||Number.isFinite(values[key]),slug+' readable '+key);
      for(const view of ['geometry','graph'])assert.doesNotMatch(Computation.render(slug,p,{view,compact:true,sceneControl:false,id:'story:'+slug}),/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
  assert.equal(Computation.evaluate('turing-machine',Life.parametersAt(Stories.forSlug('turing-machine'),1)).halted,1);
  assert.equal(Computation.evaluate('proof',Life.parametersAt(Stories.forSlug('proof'),1)).complete,1);
});

test('typed ports separate machine steps, tape values, derivation counts and truth',()=>{
  assert.deepEqual([port('turing-machine','output','output').type,port('turing-machine','output','output').unit],['integer-value','1']);
  assert.equal(Links.compatible(port('turing-machine','output','transitionCount'),port('turing-machine','input','steps')).valid,true);
  assert.equal(Links.compatible(port('proof','output','acceptedLines'),port('proof','input','steps')).valid,true);
  assert.equal(Links.compatible(port('turing-machine','output','transitionCount'),port('proof','input','steps')).code,'type_mismatch');
  assert.equal(Links.compatible(port('proof','output','conclusionTruth'),port('proof','input','steps')).code,'type_mismatch');
  assert.equal(Computation.evaluate('turing-machine',{steps:10,word:'0000'}).transitionCount,6);
  const failed=Computation.evaluate('proof',{steps:5,plan:'wrong-conclusion',world:'111'});assert.equal(failed.acceptedLines,3);assert.equal(failed.conclusionTruth,1);assert.equal(failed.complete,0);assert.equal(failed.targetDerivable,1);
});

test('scoped symbols keep tape rules, finite automata, derivability and semantics distinct',()=>{
  assert.ok(uses('δ','tape-transition').includes('turing-machine'));assert.ok(!uses('δ','transition-function').includes('turing-machine'));
  assert.ok(uses('δ','transition-function').includes('finite-state-machine'));
  assert.ok(uses('⊢','derivability').includes('proof'));assert.ok(uses('⊨','semantic-entailment').includes('proof'));
  for(const [query,id]of [['□','tape-blank'],['q_k','tape-control-state'],['h_k','tape-head'],['v_k','tape-numeral'],['Γ','assumption-set'],['MP','modus-ponens']])assert.ok(index.search(query).some(e=>e.id===id),query);
  assert.ok(Notation.classify('δ(C,□)',{slug:'turing-machine'}).includes('tape-transition'));assert.ok(!Notation.classify('δ(C,□)',{slug:'turing-machine'}).includes('transition-function'));
  assert.ok(Notation.classify('δ(q,1)',{slug:'finite-state-machine'}).includes('transition-function'));
  assert.ok(Notation.classify('Γ⊢r',{slug:'proof'}).includes('derivability'));assert.ok(!Notation.classify('Γ⊢r',{slug:'proof'}).includes('semantic-entailment'));
  assert.ok(Notation.classify('Γ⊨r',{slug:'proof'}).includes('semantic-entailment'));
  assert.deepEqual(Symbols.keysFor('turing-machine','vₖ'),['tapeValue']);assert.deepEqual(Symbols.keysFor('proof','⊢'),[]);
  const ids=new Set(Terms.entries.map(e=>e.id));for(const e of Terms.entries){assert.ok(e.sourceKeys.every(k=>Terms.sources[k]),e.id);assert.ok((e.relatedIds||[]).every(id=>ids.has(id)),e.id);}
});

test('every new reference term links to its actual lesson and atlas prerequisites remain ordered',()=>{
  for(const id of ['turing-machine','writable-tape','tape-cell','tape-head','tape-configuration','tape-transition','tape-blank','tape-control-state','tape-direction','machine-step','tape-write','tape-read','halting','binary-numeral','carry-bit','tape-numeral','formal-derivation','derivability','assumption-set','line-citation','accepted-proof-prefix','proof-line-count','valuation','transition-count-unit','derivation-line-unit'])assert.ok(index.get(id).usedBy.some(u=>slugs.includes(u.slug)),id+' links to its new lesson');
  const atlas=Regions.create({cards});assert.ok(atlas.getTopic('computation:algorithms').availableCards.some(c=>c.slug==='turing-machine'));assert.ok(atlas.getTopic('foundations:sets-and-proof').availableCards.some(c=>c.slug==='proof'));
  const sequence=Order.order(cards).map(c=>c.slug);for(const [a,b]of [['inference','proof'],['finite-state-machine','turing-machine']])assert.ok(sequence.indexOf(a)<sequence.indexOf(b),a+' before '+b);
  assert.ok(atlas.search('writable tape').some(row=>row.id==='computation:algorithms'));
});
