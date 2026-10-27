import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Models=require('../src/book-foundations.js'),Modules=require('../src/playground-modules.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const slugs=['logical-connectives','quantifier','cross-product','stability'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const index=Index.create({cards,sources,stories:Stories.all()});
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const port=(slug,direction,key)=>Ports.forModule(slug).find(item=>item.direction===direction&&item.key===key);

test('book additions register through the shared provider, canonical card, story and preview contracts',()=>{
  for(const slug of slugs){
    const card=cards.find(c=>c.slug===slug),module=Modules.get(slug),p=module.defaults(),r=module.evaluate(p);
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(r.valid,true);
    assert.equal(card.interactive.renderer_id,slug+'-visual-model');
    assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);
    assert.deepEqual(module.views.map(view=>view.id),['geometry','graph']);
    assert.ok(card.source_refs.every(id=>sources.some(source=>source.id===id)));
    const preview=Previews.render(slug,{id:'preview:'+slug});
    near(Number(preview.match(/data-preview-output="([^"]+)"/)[1]),r.output);
    assert.doesNotMatch(preview,/role="slider"|data-drag-param|NaN|Infinity/);
    assert.ok(Previews.description(slug).length>80);
  }
});

test('guided goals retain one control and connect actual evaluated quantities through the shared story host',()=>{
  const goals={'logical-connectives':1,quantifier:1,'cross-product':6,stability:1/256};
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
      const html=Models.render(slug,p,{view:'geometry',compact:true,sceneControl:false,id:'story:'+slug});
      assert.doesNotMatch(html,/role="slider"|data-drag-param|NaN|Infinity/);
    }
  }
});

test('truth, oriented area, unsigned area and signed displacement keep separate workspace meanings',()=>{
  assert.deepEqual([port('quantifier','output','output').type,port('quantifier','output','output').unit],['truth-value','1']);
  assert.equal(Links.compatible(port('logical-connectives','output','output'),{...port('conditional-probability','output','output'),direction:'input'}).code,'type_mismatch');
  assert.equal(port('cross-product','output','output').type,'oriented-area-component');
  assert.equal(port('cross-product','output','area').type,'area');
  assert.equal(Links.compatible(port('cross-product','output','output'),{...port('cross-product','input','uLength'),type:'area',unit:'m2'}).code,'type_mismatch');
  assert.deepEqual([port('stability','output','output').type,port('stability','output','output').unit],['displacement','cm']);
  const module=Modules.get('stability'),p=module.defaults();
  assert.equal(module.controls.find(c=>c.key==='steps').discrete,true);
  assert.equal(module.canInterpolate(p,{...p,steps:7}),false);
  assert.equal(module.canInterpolate(p,{...p,multiplier:-.5}),true);
  for(const slug of ['logical-connectives','quantifier']){
    const m=Modules.get(slug),select=m.controls.find(c=>c.type==='select');
    assert.ok(select.options.length>=2);assert.ok(m.sweeps.every(s=>s.key!==select.key));
  }
});

test('new vocabulary and literal symbols resolve to their declared card roles without borrowing conflicting old meanings',()=>{
  for(const [id,slug]of [['truth-table','logical-connectives'],['proposition','logical-connectives'],['predicate','quantifier'],['quantifier','quantifier'],['finite-domain','quantifier'],['bound-variable','quantifier'],['witness','quantifier'],['cross-product','cross-product'],['normal-component','cross-product'],['oriented-area','cross-product'],['equilibrium','stability'],['asymptotic-stability','stability'],['structural-stability','stability'],['feedback-multiplier','stability']]){
    const entry=index.get(id);assert.ok(entry,id);assert.ok(entry.usedBy.some(u=>u.slug===slug),id+' in '+slug);
    assert.ok(entry.sources.length);assert.ok(entry.sources.every(s=>s.url.startsWith('https://')));
  }
  const uses=(query,id)=>index.search(query).find(entry=>entry.id===id)?.usedBy.map(use=>use.slug)||[];
  assert.deepEqual(uses('P(x)','predicate'),['quantifier']);assert.deepEqual(uses('P(x)','probability'),[]);
  assert.deepEqual(uses('P','proposition'),['inference','logical-connectives','equivalence']);assert.ok(!uses('P','perimeter').includes('logical-connectives'));
  assert.deepEqual(uses('h','predicate-threshold'),['quantifier']);assert.ok(!uses('h','increment').includes('quantifier'));
  assert.deepEqual(uses('w_z','normal-component'),['cross-product']);assert.deepEqual(uses('eₙ','alignment-error'),['stability']);
  assert.deepEqual(uses('P(A|B)','conditional-probability'),['conditional-probability']);
  assert.deepEqual(uses('r','retained-fraction'),['recurrence']);assert.deepEqual(uses('r','feedback-multiplier'),['stability']);
  assert.deepEqual(Notation.extract('P(8)',{slug:'quantifier'})[0].entryIds,['predicate']);
  assert.ok(Notation.classify('P(A)').includes('probability'));
  assert.ok(Notation.extract('u×v',{slug:'cross-product'})[0].entryIds.includes('cross-product'));
  assert.deepEqual(Notation.classify('|u×v|'),['magnitude']);assert.ok(Notation.classify('|r|').includes('absolute-value'));
  assert.ok(index.get('magnitude').usedBy.find(use=>use.slug==='gradient').contexts.some(context=>context.token==='‖∇F‖'&&/scalar/.test(context.type)));
  assert.ok(Terms.entries.every(term=>term.sourceKeys.every(key=>Terms.sources[key])));
  const forms=new Set(index.symbolCatalog().forms.map(form=>form.symbol));
  for(const token of ['P∧Q','P∨Q','P→Q','P↔Q','¬P','∀x∈D P(x)','∃x∈D P(x)','P(x)','w_z','|u×v|','e₀','eₙ','|r|','⊙','⊗'])assert.ok(forms.has(token),token+' visible in symbol catalog');
});

test('every concrete grammar binding names a real scene quantity while binders and operators remain unpainted',()=>{
  for(const slug of slugs){
    const p=Models.defaults(slug),html=Models.render(slug,p,{view:'geometry',compact:true,sceneControl:false});
    const rendered=new Set([...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,value])=>value.split(/\s+/)));
    const card=cards.find(c=>c.slug===slug);
    for(const {token}of card.grammar.symbols){
      const keys=Symbols.keysFor(slug,token);
      if(['k','x'].includes(token)&&slug==='quantifier'||token==='k'&&slug==='stability')assert.deepEqual(keys,[]);
      for(const key of keys)assert.ok(rendered.has(key),`${slug} ${token} names rendered ${key}`);
    }
  }
});

test('the first book batch fills existing atlas neighborhoods in prerequisite order',()=>{
  const atlas=Regions.create({cards});
  for(const [topic,slug]of [['foundations:sets-and-proof','logical-connectives'],['foundations:sets-and-proof','quantifier'],['structures:linear-algebra','cross-product'],['spaces:geometry-and-measurement','cross-product'],['change:dynamical-systems','stability']])assert.ok(atlas.getTopic(topic).availableCards.some(card=>card.slug===slug),topic+' exposes '+slug);
  assert.equal(atlas.regions.length,8);assert.equal(atlas.topics.length,24);
  const ordered=Order.order(cards).map(c=>c.slug);
  for(const [before,after]of [['set','quantifier'],['logical-connectives','quantifier'],['vector','cross-product'],['inner-product','cross-product'],['recurrence','stability']])assert.ok(ordered.indexOf(before)<ordered.indexOf(after),before+' before '+after);
});
