import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Stories=require('../src/linear-workflow-stories.js'),L=require('../src/linear-workflows.js'),Life=require('../src/life-story.js');
const slugs=['linear-combination','basis','matrix-product'];
const templates=story=>[...story.steps.flatMap(step=>[step.body,step.formula]),...story.calculation.map(stage=>stage.template)];
const tokens=story=>new Set(templates(story).flatMap(value=>[...value.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(([,key])=>key)));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
function frozen(value){if(!value||typeof value!=='object')return;assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}

test('three original practical workflow stories load offline as deeply immutable independent data',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/linear-workflow-stories.js',import.meta.url),'utf8'),context);
  assert.equal(context.AtlasLinearWorkflowStories.all().length,3);assert.deepEqual(Stories.all().map(story=>story.slug),slugs);
  for(const story of Stories.all()){frozen(story);frozen(Stories.linksFor(story.slug));assert.equal(Stories.find(story.id),story);assert.equal(Stories.forSlug(story.slug),story);assert.ok(story.assumptions.length>=3);}
  for(const unknown of ['__proto__','constructor','toString','missing',null,{}]){assert.equal(Stories.forSlug(unknown),null);assert.equal(Stories.find(unknown),null);assert.equal(Stories.linksFor(unknown),null);assert.equal(Stories.quantityFor(unknown,'output'),null);}
  Stories.all().pop();assert.equal(Stories.all().length,3);
});

test('story timelines keep all fixed settings and end at complete finite authored model states',()=>{
  for(const story of Stories.all()){
    assert.deepEqual(Object.keys(story.parameters).sort(),Object.keys(L.defaults(story.slug)).sort());assert.equal(story.timeline.to,story.parameters[story.timeline.key]);
    const v=story.variables.find(item=>item.key===story.timeline.key);assert.ok(v.min<=story.timeline.from&&v.max>=story.timeline.from);assert.ok(v.min<=story.timeline.to&&v.max>=story.timeline.to);
    for(let i=0;i<=64;i++){const p={...story.parameters,[story.timeline.key]:story.timeline.from+(story.timeline.to-story.timeline.from)*i/64},r=L.evaluate(story.slug,p),values={...p,...r};assert.equal(r.valid,true);assert.ok(Number.isFinite(r.output));for(const key of tokens(story))assert.ok(Number.isFinite(values[key]),`${story.slug}.${key}`);if(story.slug==='basis')assert.equal(r.solutionStatus,'unique');if(story.slug==='matrix-product')assert.equal(r.parameters.order,'B_then_A');}
    for(const value of [v.min,v.max])assert.equal(L.evaluate(story.slug,{...story.parameters,[v.key]:value}).valid,true);
  }
});

test('story templates, calculation phases and geometric marks share exact semantic quantities',()=>{
  for(const story of Stories.all()){
    const values={...story.parameters,...L.evaluate(story.slug,story.parameters)},markup=L.render(story.slug,story.parameters),present=new Set([...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));
    for(const key of tokens(story)){const quantity=Stories.quantityFor(story.slug,key);assert.ok(quantity,`${story.slug}.${key}`);frozen(quantity);assert.ok(quantity.label.length>4&&quantity.description.length>35&&quantity.unit);assert.ok(present.has(key),`${story.slug}.${key} has a scene mark`);}
    for(const template of templates(story))assert.doesNotMatch(Life.formatTemplate(template,values),/\{\{|Unavailable|NaN/);
    assert.deepEqual(story.steps.map(step=>step.focus),['reference','input','intermediate','output']);assert.deepEqual(story.calculation.map(stage=>stage.role),['input','intermediate','output']);story.steps.forEach((step,index)=>{assert.equal(step.from,index/4);assert.equal(step.to,(index+1)/4);assert.ok(step.body.includes('{{'+story.timeline.key+'}}'));assert.ok(step.focusDescription.length>35);});assert.equal(Stories.linksFor(story.slug).variableKey,story.timeline.key);
  }
});

test('story interaction rails retain the authored range in both geometry and graph views',()=>{
  for(const story of Stories.all()){const v=story.variables[0],controlBounds={[v.key]:v};for(const view of ['geometry','graph']){const html=L.render(story.slug,story.parameters,{controlBounds,view}),handle=html.match(new RegExp('<g[^>]*data-drag-param="'+v.key+'"[^>]*>'))[0];assert.ok(handle.includes('data-drag-min="'+v.min+'"'));assert.ok(handle.includes('data-drag-max="'+v.max+'"'));assert.ok(handle.includes('data-drag-step="'+v.step+'"'));}}
});

test('practical endpoints use consistent quantities and distinguish map order from area preservation',()=>{
  const sum=L.evaluate('linear-combination',Stories.forSlug('linear-combination').parameters);near(sum.combinedX,2);near(sum.combinedY,3.5);assert.match(Stories.forSlug('linear-combination').context,/dimensionless/);
  const basis=L.evaluate('basis',Stories.forSlug('basis').parameters);near(basis.r,1);near(basis.s,2);near(basis.reconstructedX,3);near(basis.reconstructedY,2);assert.match(Stories.forSlug('basis').assumptions.join(' '),/not metre lengths/);
  const product=L.evaluate('matrix-product',Stories.forSlug('matrix-product').parameters);assert.deepEqual([product.intermediateX,product.intermediateY],[1,2]);assert.deepEqual([product.finalX,product.finalY],[3,2]);assert.deepEqual([product.otherFinalX,product.otherFinalY],[2,3]);assert.equal(product.determinant,1);assert.match(Stories.forSlug('matrix-product').assumptions.join(' '),/does not imply/);
});

test('story source references resolve to the canonical public source registry',()=>{
  const registry=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')),rows=Array.isArray(registry)?registry:registry.sources,ids=new Set(rows.map(source=>source.id));
  for(const story of Stories.all())for(const id of story.sourceRefs)assert.ok(ids.has(id),id);
});
