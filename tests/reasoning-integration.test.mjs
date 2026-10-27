import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Models=require('../src/reasoning.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['relation','equivalence','inference','torque'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const port=(slug,direction,key)=>Ports.forModule(slug).find(item=>item.direction===direction&&item.key===key);
const quantityKeys=html=>new Set([...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));

test('four reasoning additions compose through canonical content, the shared host, stories and model-derived previews',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);
    assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);
    assert.deepEqual(module.views.map(view=>view.id),['geometry','graph']);
    assert.ok(card.source_refs.every(id=>sources.some(source=>source.id===id)));
    for(const example of card.examples)if(example.preset)assert.equal(module.evaluate({...p,...example.preset}).valid,true,slug+' preset '+example.id);
    const preview=Previews.render(slug,{id:'preview:'+slug});
    near(Number(preview.match(/data-preview-output="([^"]+)"/)[1]),r.output);
    assert.match(preview,/data-preview-quantity="output"/);
    assert.doesNotMatch(preview,/role="slider"|data-drag-param|NaN|Infinity/);
    assert.ok(Previews.description(slug).length>80);
  }
});

test('one-control stories use target goals and trace actual model values while retaining readable truth labels',()=>{
  const goals={relation:21,equivalence:1,inference:1,torque:8};
  for(const slug of slugs){
    const story=Stories.forSlug(slug),key=story.timeline.key;
    assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);
    assert.equal(story.parameters[key],story.timeline.to);
    assert.equal(Life.parametersAt(story,0)[key],story.timeline.from);
    near(Models.evaluate(slug,Life.parametersAt(story,1)).output,goals[slug]);
    assert.equal((Life.markup(story,Life.parametersAt(story,0)).match(/type="range"/g)||[]).length,1);
    const templates=[...story.steps.flatMap(step=>[step.body,step.formula]),...story.calculation.map(phase=>phase.template)];
    for(const t of [0,.25,.5,.75,1]){
      const p=Life.parametersAt(story,t),r=Models.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true);
      for(const template of templates)for(const [,token]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)){
        assert.ok(Object.hasOwn(values,token),`${slug}.${token}`);
        assert.ok(typeof values[token]==='string'||typeof values[token]==='boolean'||Number.isFinite(values[token]),`${slug}.${token} is displayable`);
      }
      for(const view of ['geometry','graph'])assert.doesNotMatch(Models.render(slug,p,{view,compact:true,sceneControl:false,id:'story:'+slug}),/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
});

test('current truth, global equivalence and global argument validity remain separate quantities',()=>{
  const matching=Models.evaluate('equivalence',{length:9,width:5,comparison:'lookalike'});
  assert.equal(matching.currentMatch,1);assert.equal(matching.equivalent,0);assert.equal(matching.mismatchCount,2);
  const unsupported=Models.evaluate('inference',{length:3,width:5,argument:'modus-ponens'});
  assert.equal(unsupported.output,1);assert.equal(unsupported.premisesHold,0);assert.equal(unsupported.validArgument,1);
  const invalid=Models.evaluate('inference',{length:3,width:5,argument:'affirming-consequent'});
  assert.equal(invalid.premisesHold,1);assert.equal(invalid.output,0);assert.equal(invalid.validArgument,0);assert.equal(invalid.counterexampleCount,1);
  assert.equal(port('equivalence','output','output').type,'truth-value');
  assert.equal(port('equivalence','output','equivalent').type,'formula-equivalence');
  assert.equal(port('inference','output','validArgument').type,'argument-validity');
  const asInput=p=>({...p,direction:'input'});
  assert.equal(Links.compatible(port('equivalence','output','equivalent'),asInput(port('equivalence','output','output'))).code,'type_mismatch');
  assert.equal(Links.compatible(port('inference','output','validArgument'),asInput(port('inference','output','output'))).code,'type_mismatch');
});

test('torque ports keep force, distance, signed torque and energy distinct despite shared dimensions',()=>{
  const p=Models.defaults('torque'),r=Models.evaluate('torque',p);
  near(r.output,p.arm*r.perpendicularForce);near(r.magnitude,p.force*r.momentArm);near(r.momentArm,.4);
  assert.equal(port('torque','input','force').type,'force');assert.equal(port('torque','input','force').unit,'N');
  assert.equal(port('torque','output','output').type,'torque');assert.equal(port('torque','output','output').unit,'N.m');
  assert.equal(Links.compatible(port('torque','output','output'),{...port('torque','input','arm'),type:'energy',unit:'N.m'}).code,'type_mismatch');
  assert.equal(Links.compatible(port('torque','output','output'),{...port('torque','input','arm'),type:'area',unit:'m2'}).code,'type_mismatch');
  assert.equal(port('torque','output','momentArm').type,'length');
});

test('relation, equivalence, entailment, force units and torque symbols preserve scoped mathematical roles',()=>{
  const uses=(query,id)=>index.search(query).find(entry=>entry.id===id)?.usedBy.map(use=>use.slug)||[];
  assert.deepEqual(uses('Rₕ','binary-relation'),['relation']);assert.deepEqual(uses('R','set'),['set']);
  assert.deepEqual(uses('Rₕ(x,y)','binary-relation'),['relation']);assert.deepEqual(uses('Rₕ(x,y)','function-notation'),[]);
  assert.deepEqual(uses('D×D','cartesian-product'),['relation']);
  assert.deepEqual(uses('≡','logical-equivalence'),['equivalence']);assert.ok(!uses('≡','identity').includes('equivalence'));
  assert.deepEqual(uses('⊨','semantic-entailment'),['inference']);
  assert.deepEqual(uses('τ_z','torque'),['torque']);assert.deepEqual(uses('N·m','torque-unit'),['torque']);
  assert.ok(uses('N','newton').includes('torque'));assert.ok(!uses('N','population-size').includes('torque'));
  assert.deepEqual(Notation.classify('N',{kind:'unit'}),['newton']);assert.ok(Notation.classify('ℕ').includes('natural-number'));
  assert.ok(Notation.extract('r⃗×F⃗',{slug:'torque'})[0].entryIds.includes('cross-product'));
  assert.ok(Notation.extract('\\vec{r}\\times\\vec{F}',{slug:'torque'})[0].entryIds.includes('cross-product'));
  assert.deepEqual(uses('r','application-distance'),['torque']);assert.deepEqual(uses('r⃗','position-vector'),['torque']);
  assert.deepEqual(uses('J','joule'),['inner-product']);
  for(const [id,slug]of [['predicate-arity','relation'],['relation-extension','relation'],['logical-equivalence','equivalence'],['de-morgan','equivalence'],['premise','inference'],['conclusion','inference'],['modus-ponens','inference'],['modus-tollens','inference'],['affirming-consequent','inference'],['moment-arm','torque'],['line-of-action','torque']]){
    const entry=index.get(id);assert.ok(entry,id);assert.ok(entry.usedBy.some(u=>u.slug===slug),id+' in '+slug);assert.ok(entry.sources.length);
  }
  const ids=new Set(Terms.entries.map(entry=>entry.id));
  for(const term of Terms.entries){assert.ok(term.sourceKeys.every(key=>Terms.sources[key]),term.id);assert.ok((term.relatedIds||[]).every(id=>ids.has(id)),term.id);}
});

test('formula-specific grammar marks activate only for the formula actually displayed',()=>{
  const base=Models.defaults('equivalence');
  const deMorgan=quantityKeys(Models.render('equivalence',base,{view:'geometry',sceneControl:false}));
  assert.ok(deMorgan.has('formula:not-and'));assert.ok(deMorgan.has('formula:not-p-or-not-q'));assert.ok(!deMorgan.has('formula:implies'));
  const implication=quantityKeys(Models.render('equivalence',{...base,comparison:'implication'},{view:'geometry',sceneControl:false}));
  assert.ok(implication.has('formula:implies'));assert.ok(implication.has('formula:not-p-or-q'));assert.ok(!implication.has('formula:not-and'));
  assert.deepEqual(Symbols.keysFor('equivalence','P→Q'),['formula:implies']);
  assert.deepEqual(Symbols.keysFor('relation','x'),[]);assert.deepEqual(Symbols.keysFor('relation','y'),[]);assert.deepEqual(Symbols.keysFor('torque','N·m'),[]);
});

test('the reasoning batch grows existing atlas neighborhoods and follows its dependencies',()=>{
  const atlas=Regions.create({cards});
  for(const slug of ['relation','equivalence','inference'])assert.ok(atlas.getTopic('foundations:sets-and-proof').availableCards.some(card=>card.slug===slug));
  assert.ok(atlas.getTopic('applications:physical-models').availableCards.some(card=>card.slug==='torque'));
  assert.ok(atlas.getTopic('structures:linear-algebra').availableCards.some(card=>card.slug==='torque'));
  assert.ok(!atlas.getTopic('spaces:geometry-and-measurement').availableCards.some(card=>card.slug==='torque'));
  assert.equal(atlas.regions.length,8);assert.equal(atlas.topics.length,24);
  const ordered=Order.order(cards).map(c=>c.slug);
  for(const [before,after]of [['quantifier','relation'],['logical-connectives','equivalence'],['equivalence','inference'],['cross-product','torque']])assert.ok(ordered.indexOf(before)<ordered.indexOf(after),before+' before '+after);
});
