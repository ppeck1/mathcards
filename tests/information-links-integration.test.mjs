import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Information=require('../src/information-links.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['joint-distribution','conditional-entropy','mutual-information'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(n=>n.endsWith('.json')).map(n=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+n,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const port=(slug,direction,key)=>Ports.forModule(slug).find(p=>p.direction===direction&&p.key===key);
const uses=(query,id)=>index.search(query).find(e=>e.id===id)?.usedBy.map(u=>u.slug)||[];
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-12,`${a} ≠ ${b}`);

test('three information readings compose independent cards, views, sources and evaluated previews',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);assert.deepEqual(module.views.map(v=>v.id),['geometry','graph']);
    assert.ok(card.source_refs.every(id=>sources.some(s=>s.id===id)));
    const preview=Previews.render(slug,{id:'information:'+slug});near(Number(preview.match(/data-preview-output="([^"]+)"/)[1]),r.output);
    assert.match(preview,/data-preview-quantity="output"/);assert.doesNotMatch(preview,/role="slider"|data-drag-param|NaN|Infinity/);
    for(const example of card.examples)if(example.preset)assert.equal(module.evaluate(example.preset).valid,true,slug+' '+example.id);
  }
});

test('one guided error variable connects narrative, formula and each shared scene',()=>{
  const goals={'joint-distribution':.45,'conditional-entropy':.4689955935892812,'mutual-information':.5310044064107188};
  for(const slug of slugs){
    const story=Stories.forSlug(slug);assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);assert.equal(story.variables[0].key,'errorChance');
    assert.equal(story.parameters.errorChance,story.timeline.to);near(Information.evaluate(slug,Life.parametersAt(story,1)).output,goals[slug]);
    assert.equal((Life.markup(story,Life.parametersAt(story,0)).match(/type="range"/g)||[]).length,1);
    for(const time of [0,.07,.25,.51,.97,1]){
      const p=Life.parametersAt(story,time),r=Information.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true,slug+' at '+time);
      for(const template of [...story.steps.flatMap(s=>[s.body,s.formula]),...story.calculation.map(c=>c.template)])for(const [,key]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g))assert.ok(typeof values[key]==='string'||Number.isFinite(values[key]),slug+' readable '+key);
      for(const view of ['geometry','graph'])assert.doesNotMatch(Information.render(slug,p,{view,compact:true,sceneControl:false,id:'story:'+slug}),/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
});

test('selected observations cannot alter averaged results, including impossible and inverted cases',()=>{
  for(const slug of slugs){
    const on=Modules.get(slug).evaluate({bookChance:.75,errorChance:.25,observed:'1'}),off=Modules.get(slug).evaluate({bookChance:.75,errorChance:.25,observed:'0'});
    near(on.output,off.output);near(on.hxGivenY,off.hxGivenY);near(off.selectedEntropy,1);assert.ok(off.selectedEntropy>off.hx);assert.ok(off.hxGivenY<off.hx);
    const impossible=Modules.get(slug).evaluate({bookChance:1,errorChance:0,observed:'0'});
    assert.equal(impossible.valid,true);assert.equal(impossible.conditionalDefined,0);assert.equal(impossible.posteriorBookChance,null);assert.equal(impossible.selectedEntropy,null);assert.equal(impossible.hxGivenY,0);
    assert.doesNotMatch(Modules.get(slug).views[0].render(impossible.parameters,{compact:true,sceneControl:false}),/NaN|Infinity/);
  }
  const inverted=Modules.get('mutual-information').evaluate({bookChance:.5,errorChance:1,observed:'1'});near(inverted.output,1);near(inverted.hxGivenY,0);
  assert.deepEqual(Symbols.keysFor('conditional-entropy','H(X|Y=y)'),['selectedEntropy']);assert.deepEqual(Symbols.keysFor('conditional-entropy','H(X|Y)'),['hxGivenY']);
  assert.deepEqual(Symbols.keysFor('mutual-information','yₛ'),[],'a global information reading must not pretend to change with the selected slice');
});

test('ports distinguish joint probability, averaged uncertainty and mutual information',()=>{
  assert.deepEqual([port('joint-distribution','output','output').type,port('joint-distribution','output','output').unit],['probability','1']);
  assert.deepEqual([port('conditional-entropy','output','output').type,port('conditional-entropy','output','output').unit],['information-entropy','bit']);
  assert.deepEqual([port('mutual-information','output','output').type,port('mutual-information','output','output').unit],['mutual-information','bit']);
  assert.equal(Links.compatible(port('joint-distribution','output','p11'),port('conditional-entropy','input','bookChance')).valid,true);
  assert.equal(Links.compatible(port('mutual-information','output','output'),port('conditional-entropy','input','bookChance')).code,'type_mismatch');
  assert.equal(Modules.get('conditional-entropy').evaluate({bookChance:1,errorChance:0,observed:'0'})[port('conditional-entropy','output','posteriorBookChance').key],null);
});

test('scoped notation distinguishes mutual information, surprisal, conditional averages and perpendicular vectors',()=>{
  for(const slug of slugs){assert.ok(uses('q','tray-book-chance').includes(slug));assert.ok(uses('e','symmetric-error-chance').includes(slug));assert.ok(!uses('q','one-book-chance').includes(slug));}
  assert.ok(uses('H(X|Y)','conditional-entropy').includes('conditional-entropy'));assert.ok(uses('H(X|Y=y)','observed-conditional-entropy').includes('conditional-entropy'));
  assert.ok(uses('I(X;Y)','mutual-information').includes('mutual-information'));assert.ok(!uses('I(X;Y)','self-information').includes('mutual-information'));
  assert.ok(uses('X ⟂ Y','random-variable-independence').includes('mutual-information'));assert.ok(!uses('X ⟂ Y','orthogonal').includes('mutual-information'));
  for(const [query,id]of [['p₀₀','joint-probability-mass'],['p_{ij}','joint-probability-mass'],['p_Y(y)','marginal-distribution'],['H(X,Y)','joint-entropy'],['I(X;Y)','mutual-information'],['y_s','selected-observation']])assert.ok(index.search(query).some(e=>e.id===id),query);
  assert.deepEqual(Notation.classify('I(X;Y)',{slug:'mutual-information'}),['mutual-information']);assert.ok(!Notation.classify('I(X;Y)',{slug:'entropy'}).includes('mutual-information'));
  assert.deepEqual(Notation.classify('⊥',{slug:'mutual-information'}),['random-variable-independence']);assert.ok(Notation.classify('⊥',{slug:'inner-product'}).includes('orthogonal'));
  assert.ok(Notation.classify('H(X|Y=y)',{slug:'conditional-entropy'}).includes('observed-conditional-entropy'));assert.ok(!Notation.classify('H(X|Y=y)',{slug:'conditional-entropy'}).includes('conditional-entropy'));
  const ids=new Set(Terms.entries.map(e=>e.id));for(const e of Terms.entries){assert.ok(e.sourceKeys.every(k=>Terms.sources[k]),e.id);assert.ok((e.relatedIds||[]).every(id=>ids.has(id)),e.id);}
});

test('every authored information term has an actual card link and the atlas preserves the learner sequence',()=>{
  for(const id of ['joint-distribution','joint-probability-mass','marginal-distribution','marginalization','conditional-distribution','joint-entropy','conditional-entropy','observed-conditional-entropy','mutual-information','entropy-chain-rule','binary-symmetric-channel','symmetric-error-chance','tray-book-chance','lamp-variable','selected-observation','zero-probability-conditioning','conditional-entropy-contribution','inverted-observation','random-variable-independence'])assert.ok(index.get(id).usedBy.some(u=>slugs.includes(u.slug)),id+' links to its new lesson');
  const atlas=Regions.create({cards}),topic=atlas.getTopic('uncertainty:probability');for(const slug of slugs)assert.ok(topic.availableCards.some(c=>c.slug===slug));
  const sequence=Order.order(cards).map(c=>c.slug);for(const [a,b]of [['entropy','joint-distribution'],['joint-distribution','conditional-entropy'],['conditional-entropy','mutual-information']])assert.ok(sequence.indexOf(a)<sequence.indexOf(b),a+' before '+b);
});
