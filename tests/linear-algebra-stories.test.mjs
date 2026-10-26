import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Stories=require('../src/linear-algebra-stories.js'),L=require('../src/linear-algebra.js'),Scenes=require('../src/story-scenes.js'),Life=require('../src/life-story.js');
const slugs=['vector','inner-product','matrix-linear-map','determinant'];
const templates=story=>[...story.steps.flatMap(step=>[step.body,step.formula]),...story.calculation.map(stage=>stage.template)];
const tokens=story=>new Set(templates(story).flatMap(value=>[...value.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(([,key])=>key)));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
function frozen(value){if(!value||typeof value!=='object')return;assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}

test('four original linear algebra narratives load offline as deeply immutable independent data',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/linear-algebra-stories.js',import.meta.url),'utf8'),context);
  assert.equal(context.AtlasLinearAlgebraStories.all().length,4);assert.deepEqual(Stories.all().map(story=>story.slug),slugs);
  for(const story of Stories.all()){frozen(story);frozen(Stories.linksFor(story.slug));assert.equal(Stories.find(story.id),story);assert.equal(Stories.forSlug(story.slug),story);assert.ok(story.assumptions.length>=3);}
  for(const unknown of ['__proto__','constructor','toString','missing',null,{}]){assert.equal(Stories.forSlug(unknown),null);assert.equal(Stories.find(unknown),null);assert.equal(Stories.linksFor(unknown),null);assert.equal(Stories.quantityFor(unknown,'output'),null);}
  Stories.all().pop();assert.equal(Stories.all().length,4);
});

test('story paths end at their complete authored states while fixed settings stay unchanged',()=>{
  for(const story of Stories.all()){
    assert.deepEqual(Object.keys(story.parameters).sort(),Object.keys(L.defaults(story.slug)).sort());
    assert.equal(story.timeline.to,story.parameters[story.timeline.key]);
    const variable=story.variables.find(item=>item.key===story.timeline.key);assert.ok(variable.min<=story.timeline.from&&variable.max>=story.timeline.from);assert.ok(variable.min<=story.timeline.to&&variable.max>=story.timeline.to);
    for(let i=0;i<=60;i++){
      const p={...story.parameters,[story.timeline.key]:story.timeline.from+(story.timeline.to-story.timeline.from)*i/60},r=L.evaluate(story.slug,p);
      assert.equal(r.valid,true,story.slug);assert.ok(Number.isFinite(r.output));
      for(const key of tokens(story))assert.ok(Number.isFinite({...p,...r}[key]),`${story.slug}.${key}`);
    }
    for(const value of [variable.min,variable.max])assert.equal(L.evaluate(story.slug,{...story.parameters,[variable.key]:value}).valid,true);
  }
});

test('story text, calculation phases and shared scenes resolve exact semantic quantities',()=>{
  for(const story of Stories.all()){
    const p=story.parameters,values=Scenes.values(story.slug,p),markup=L.render(story.slug,p,{storyFocus:'input'}),present=new Set([...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));
    for(const key of tokens(story)){
      const quantity=Stories.quantityFor(story.slug,key);assert.ok(quantity,`${story.slug}.${key}`);frozen(quantity);assert.ok(quantity.label.length>4&&quantity.description.length>35&&quantity.unit);assert.ok(present.has(key),`${story.slug}.${key} has a scene mark`);assert.ok(Number.isFinite(values[key]));
    }
    for(const template of templates(story))assert.doesNotMatch(Life.formatTemplate(template,values),/\{\{|Unavailable|NaN/);
    near(Scenes.primaryValue(story.slug,p),L.evaluate(story.slug,p).output);
    assert.deepEqual(story.steps.map(step=>step.focus),['reference','input','intermediate','output']);assert.deepEqual(story.calculation.map(stage=>stage.role),['input','intermediate','output']);
    story.steps.forEach((step,index)=>{assert.equal(step.from,index/4);assert.equal(step.to,(index+1)/4);assert.ok(step.body.includes('{{'+story.timeline.key+'}}'));assert.ok(step.focusDescription.length>35);});
    assert.equal(Stories.linksFor(story.slug).variableKey,story.timeline.key);
  }
});

test('story rails use authored ranges while the full playground keeps its wider domain',()=>{
  for(const story of Stories.all()){
    const variable=story.variables[0],controlBounds={[variable.key]:variable};
    const html=L.render(story.slug,story.parameters,{controlBounds}),handle=html.match(new RegExp('<g[^>]*data-drag-param="'+variable.key+'"[^>]*>'))[0];
    assert.ok(handle.includes('data-drag-min="'+variable.min+'"'));assert.ok(handle.includes('data-drag-max="'+variable.max+'"'));assert.ok(handle.includes('data-drag-step="'+variable.step+'"'));
  }
  assert.equal(L.controls('vector').find(control=>control.key==='x').min,-5);
});

test('practical endpoints distinguish displacement, feature scores, mapped coordinates and signed area',()=>{
  near(L.evaluate('vector',Stories.forSlug('vector').parameters).output,5);
  const dot=L.evaluate('inner-product',Stories.forSlug('inner-product').parameters);near(dot.output,6);near(dot.projection,2);near(dot.angleDegrees,45);
  assert.match(Stories.forSlug('inner-product').context,/dimensionless/);assert.match(Stories.forSlug('inner-product').context,/not a probability/);
  const map=L.evaluate('matrix-linear-map',Stories.forSlug('matrix-linear-map').parameters);near(map.mappedX,2);near(map.mappedY,1);near(map.determinant,1);
  for(const b of [-1.5,0,1,1.5])near(L.evaluate('matrix-linear-map',{...Stories.forSlug('matrix-linear-map').parameters,b}).area,1);
  const det=L.evaluate('determinant',Stories.forSlug('determinant').parameters);near(det.output,2);near(det.area,2);
  const flipped=L.evaluate('determinant',{...Stories.forSlug('determinant').parameters,d:-2});near(flipped.output,-2);near(flipped.area,2);
  assert.match(Stories.forSlug('determinant').assumptions.join(' '),/valid linear map.*no inverse/);
});

test('story references resolve to the supplied primary definition sources',()=>{
  const sources=new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(source=>source.id));
  for(const story of Stories.all())for(const id of story.sourceRefs)assert.ok(sources.has(id),id);
});
