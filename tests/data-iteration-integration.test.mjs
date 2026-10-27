import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Modules=require('../src/playground-modules.js'),Models=require('../src/data-iteration.js'),Stories=require('../src/story-library.js'),Life=require('../src/life-story.js');
const Ports=require('../src/module-ports.js'),Links=require('../src/workspace-links.js'),Symbols=require('../src/symbol-bindings.js'),Previews=require('../src/card-previews.js');
const Regions=require('../src/atlas-regions.js'),Topography=require('../src/atlas-topography.js'),Index=require('../src/math-index.js'),Notation=require('../src/math-notation.js'),Terms=require('../src/math-terms.js'),Order=require('../src/learning-order.js');
const slugs=['conditional-probability','variance','recurrence'];
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const csv=fs.readFileSync(new URL('../content/coverage.csv',import.meta.url),'utf8').trim().split(/\r?\n/).map(row=>row.split(','));
const coverage=csv.slice(1).map(row=>Object.fromEntries(csv[0].map((key,i)=>[key,row[i]])));
const index=Index.create({cards,sources,stories:Stories.all()});
const near=(actual,expected)=>assert.ok(Math.abs(actual-expected)<1e-10*Math.max(1,Math.abs(expected)),actual+' ≈ '+expected);
const cardFor=slug=>cards.find(card=>card.slug===slug);
const port=(slug,direction,key)=>Ports.forModule(slug).find(item=>item.direction===direction&&item.key===key);

test('the three gap introductions extend the same canonical module, preview and export inventory',()=>{
  assert.equal(cards.length,53);assert.equal(cards.reduce((n,c)=>n+c.examples.length,0),269);
  assert.equal(cards.reduce((n,c)=>n+c.interactive.expected_cases.length,0),526);
  assert.equal(cards.length+cards.reduce((n,c)=>n+c.examples.length,0),322);
  assert.equal(Modules.list().reduce((n,m)=>n+m.views.length,0),113);
  assert.deepEqual(new Set(Modules.list().map(m=>m.id)),new Set(cards.map(c=>c.slug)));
  for(const slug of slugs){
    const card=cardFor(slug),module=Modules.get(slug),result=module.evaluate(module.defaults());
    assert.ok(card&&module&&Stories.forSlug(slug));assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,12);
    assert.equal(result.valid,true);assert.deepEqual(module.views.map(view=>view.id),['geometry','graph']);
    const preview=Previews.render(slug),value=Number(preview.match(/data-preview-output="([^"]+)"/)[1]);near(value,result.output);
    assert.doesNotMatch(preview,/data-drag-param|role="slider"|NaN|Infinity/);
    assert.ok(card.source_refs.every(id=>sources.some(source=>source.id===id)));
  }
});

test('gap-driven placement deepens probability, statistics, algorithms and dynamics without adding territories',()=>{
  const atlas=Regions.create({cards,coverage});assert.equal(atlas.regions.length,8);assert.equal(atlas.topics.length,24);assert.equal(atlas.availableCount,53);assert.equal(atlas.plannedCount,63);
  for(const [topic,slug]of [['uncertainty:probability','conditional-probability'],['uncertainty:bayesian-inference','conditional-probability'],['uncertainty:probability','variance'],['uncertainty:statistics','variance'],['computation:algorithms','recurrence'],['change:dynamical-systems','recurrence']]){
    assert.ok(atlas.getTopic(topic).availableCards.some(c=>c.slug===slug),topic+' exposes '+slug);
    assert.ok(!atlas.getTopic(topic).plannedConcepts.some(c=>c.id==='math:concept:'+slug));
  }
  assert.equal(atlas.getRegion('uncertainty').availableCount,5);assert.equal(atlas.getRegion('computation').availableCount,4);assert.equal(atlas.getRegion('change').availableCount,15);
  assert.equal(Topography.metrics(atlas.regions).maximum,15);
  const ordered=Order.order(cards).map(card=>card.slug);
  assert.ok(ordered.indexOf('probability')<ordered.indexOf('conditional-probability'));
  assert.ok(ordered.indexOf('population-sample')<ordered.indexOf('variance'));
  assert.ok(ordered.indexOf('computational-complexity')<ordered.indexOf('recurrence'));
});

test('simple story goals agree with solved values while initial animation frames use their separate starting inputs',()=>{
  const goals={'conditional-probability':.6,variance:2,recurrence:13.423828125};
  for(const slug of slugs){
    const story=Stories.forSlug(slug),key=story.timeline.key;
    assert.equal(story.presentation.compact,true);assert.equal(story.variables.length,1);
    assert.equal(story.parameters[key],story.timeline.to);assert.equal(Life.parametersAt(story,0)[key],story.timeline.from);
    assert.equal(Life.parametersAt(story,1)[key],story.timeline.to);near(Models.evaluate(slug,Life.parametersAt(story,1)).output,goals[slug]);
    const markup=Life.markup(story,Life.parametersAt(story,0));
    assert.equal((markup.match(/type="range"/g)||[]).length,1);assert.doesNotMatch(markup,/How the two averages change/);
    const templates=[...story.steps.flatMap(step=>[step.body,step.formula]),...story.calculation.map(phase=>phase.template)];
    for(const t of [0,.25,.5,.75,1]){
      const p=Life.parametersAt(story,t),r=Models.evaluate(slug,p),values={...p,...r};assert.equal(r.valid,true);
      for(const template of templates)for(const [,token]of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g))assert.ok(Number.isFinite(values[token]),slug+'.'+token);
      for(const view of ['geometry','graph']){
        const html=Models.render(slug,p,{view,compact:true,sceneControl:false});assert.doesNotMatch(html,/role="slider"|data-drag-param|NaN|Infinity/);
      }
    }
  }
});

test('conditional chance, squared spread and discrete reservoir updates retain their different domains and units',()=>{
  const c=Models.evaluate('conditional-probability',{eventEnd:24,windowEnd:40});near(c.eventProbability,.24);near(c.givenProbability,.4);near(c.conditionalProbability,.6);
  assert.equal(Models.evaluate('conditional-probability',{eventEnd:24,windowEnd:0}).valid,false);
  const v=Models.evaluate('variance',{lastLength:14});near(v.mean,11);near(v.sumSquaredDeviations,20);near(v.output,5);near(v.standardDeviation,Math.sqrt(5));assert.equal(v.count,4);
  assert.deepEqual([port('variance','output','output').type,port('variance','output','output').unit],['population-variance','cm2']);
  assert.deepEqual([port('variance','output','standardDeviation').type,port('variance','output','standardDeviation').unit],['length','cm']);
  const sameUnitArea={...port('variance','input','lastLength'),type:'area',unit:'cm2'};
  assert.equal(Links.compatible(port('variance','output','output'),sameUnitArea).code,'type_mismatch');
  assert.deepEqual([port('conditional-probability','output','output').type,port('conditional-probability','output','output').unit],['probability','1']);
  const m=Modules.get('recurrence'),p=m.defaults(),zero=Models.evaluate('recurrence',{...p,rounds:0});
  assert.deepEqual(zero.values,[p.initial]);assert.equal(zero.output,p.initial);assert.equal(zero.previous,p.initial);assert.equal(zero.retained,0);assert.equal(zero.added,0);
  assert.equal(m.controls.find(c=>c.key==='rounds').discrete,true);assert.equal(m.canInterpolate(p,{...p,rounds:p.rounds+1}),false);
  assert.ok(m.sweeps.every(s=>s.key!=='rounds'));assert.equal(Models.evaluate('recurrence',{...p,rounds:1.5}).valid,false);
});

test('new vocabulary and visible forms have sourced, scoped readers while Greek letters and old meanings survive',()=>{
  for(const [id,slug]of [['uniform-distribution','conditional-probability'],['conditioning-event','conditional-probability'],['probability-normalization','conditional-probability'],['interval-length','conditional-probability'],['population-variance','variance'],['deviation','variance'],['squared-deviation','variance'],['recurrence','recurrence'],['retained-fraction','recurrence'],['refill-increment','recurrence'],['completed-rounds','recurrence'],['finite-geometric-sum','recurrence'],['retained-volume','recurrence']]){
    const term=index.get(id);assert.ok(term,id);assert.ok(term.usedBy.some(use=>use.slug===slug),id+' has actual '+slug+' evidence');
    assert.ok(term.sources.length);assert.ok(term.sources.every(source=>source.url.startsWith('https://')));
  }
  for(const [token,id,slug]of [['P(A|B)','conditional-probability','conditional-probability'],['ℓ(A∩B)','interval-length','conditional-probability'],['σ²','population-variance','variance'],['σ','standard-deviation','variance'],['dᵢ','deviation','variance'],['vₙ','sequence','recurrence'],['n','completed-rounds','recurrence']]){
    const hit=index.search(token).find(entry=>entry.id===id);assert.ok(hit,token+' opens '+id);assert.deepEqual(hit.usedBy.map(use=>use.slug),[slug]);
  }
  assert.ok(index.search('μ').some(term=>term.id==='mu'));assert.ok(index.search('μ').some(term=>term.id==='population-mean'&&term.usedBy.some(use=>use.slug==='variance')));
  assert.deepEqual(index.search('n').find(term=>term.id==='sample-size').usedBy.map(use=>use.slug),['population-sample']);
  assert.deepEqual(index.search('r').find(term=>term.id==='weight').usedBy.map(use=>use.slug),['linear-combination']);
  assert.ok(Notation.classify('∑').includes('summation'));assert.ok(!Notation.classify('Σ').includes('summation'));
  assert.ok(Notation.classify('cm²',{kind:'unit'}).includes('powered-unit'));assert.ok(Notation.classify('rounds',{kind:'unit'}).includes('completed-rounds'));
  assert.ok(Terms.entries.every(term=>term.sourceKeys.every(key=>Terms.sources[key])));
});

test('named deviation variants do not borrow unrelated subscript card uses',()=>{
  const hits=index.search('d₄');
  assert.deepEqual(hits.find(entry=>entry.id==='deviation').usedBy.map(use=>use.slug),['variance']);
  assert.deepEqual(hits.find(entry=>entry.id==='subscript').usedBy.map(use=>use.slug),['variance']);
  const forms=new Map(index.symbolCatalog().forms.map(form=>[form.symbol,form]));
  for(const token of ['σ²','σ','dᵢ','d₄','v₀','vₙ','r vₙ₋₁','P(A|B)','ℓ(A∩B)'])assert.ok(forms.has(token),token+' is in the visual catalog');
  for(const slug of slugs)for(const {token}of cardFor(slug).grammar.symbols){
    if(slug==='recurrence'&&token==='k')continue;
    assert.ok(Symbols.keysFor(slug,token).length,slug+' '+token+' has a scoped scene binding');
  }
});
