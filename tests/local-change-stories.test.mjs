import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Stories=require('../src/local-change-stories.js'),L=require('../src/local-change.js'),Life=require('../src/life-story.js');
const slugs=['directional-derivative','tangent-plane','gradient-descent'];
const templates=s=>[...s.steps.flatMap(step=>[step.body,step.formula]),...s.calculation.map(phase=>phase.template)];
const tokens=s=>new Set(templates(s).flatMap(value=>[...value.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(([,key])=>key)));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
function frozen(value){if(value&&typeof value==='object'){assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}}

test('three local-change stories load offline as separate deeply immutable narrative data',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/local-change-stories.js',import.meta.url),'utf8'),context);assert.equal(context.AtlasLocalChangeStories.all().length,3);assert.deepEqual(Stories.all().map(s=>s.slug),slugs);for(const s of Stories.all()){frozen(s);frozen(Stories.linksFor(s.slug));assert.equal(Stories.find(s.id),s);assert.equal(Stories.forSlug(s.slug),s);assert.ok(s.assumptions.length>=4);}for(const unknown of ['__proto__','constructor','toString','missing',null,{}]){assert.equal(Stories.forSlug(unknown),null);assert.equal(Stories.find(unknown),null);assert.equal(Stories.linksFor(unknown),null);assert.equal(Stories.quantityFor(unknown,'output'),null);}Stories.all().pop();assert.equal(Stories.all().length,3);
});

test('every playback frame is a complete valid model state without fractional descent iterations',()=>{
  for(const s of Stories.all()){const v=s.variables[0];assert.deepEqual(Object.keys(s.parameters).sort(),Object.keys(L.defaults(s.slug)).sort());assert.equal(s.timeline.to,s.parameters[s.timeline.key]);assert.ok(v.min<=s.timeline.from&&s.timeline.from<=v.max);assert.ok(v.min<=s.timeline.to&&s.timeline.to<=v.max);
    for(let i=0;i<=120;i++){const p=Life.parametersAt(s,i/120),r=L.evaluate(s.slug,p),values={...p,...r};assert.equal(r.valid,true,`${s.slug} frame ${i}`);assert.ok(Number.isFinite(r.output));for(const key of tokens(s))assert.ok(Number.isFinite(values[key]),`${s.slug}.${key}`);if(s.slug==='gradient-descent'){assert.equal(p.iteration,4);assert.equal(r.history.length,5);assert.equal(r.stability,'contracting');}}
    for(const value of [v.min,v.max])assert.equal(L.evaluate(s.slug,{...s.parameters,[v.key]:value}).valid,true);
  }
});

test('story text, formula phases and the declared view expose the exact same quantities',()=>{
  for(const s of Stories.all()){const values={...s.parameters,...L.evaluate(s.slug,s.parameters)},view=s.view||'geometry',markup=L.render(s.slug,s.parameters,{view}),present=new Set([...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));
    for(const key of tokens(s)){const q=Stories.quantityFor(s.slug,key);assert.ok(q,`${s.slug}.${key}`);frozen(q);assert.ok(q.label.length>4&&q.description.length>35&&q.unit);assert.ok(present.has(key),`${s.slug}.${key} has an actual mark in ${view}`);}for(const t of templates(s))assert.doesNotMatch(Life.formatTemplate(t,values),/\{\{|Unavailable|NaN/);
    assert.deepEqual(s.steps.map(step=>step.focus),['reference','input','intermediate','output']);assert.deepEqual(s.calculation.map(step=>step.role),['input','intermediate','output']);s.steps.forEach((step,i)=>{assert.equal(step.from,i/4);assert.equal(step.to,(i+1)/4);assert.ok(step.body.includes('{{'+s.timeline.key+'}}'));assert.ok(step.focusDescription.length>35);});assert.equal(Stories.linksFor(s.slug).variableKey,s.timeline.key);assert.ok(L.specs(s.slug).views.includes(view));
  }
});

test('all declared views restrict draggable story rails to their authored domains',()=>{
  for(const s of Stories.all()){const v=s.variables[0];for(const view of L.specs(s.slug).views){const html=L.render(s.slug,s.parameters,{view,controlBounds:{[v.key]:v}}),handle=html.match(new RegExp('<g[^>]*data-drag-param="'+v.key+'"[^>]*>'))[0];assert.ok(handle.includes('data-drag-min="'+v.min+'"'));assert.ok(handle.includes('data-drag-max="'+v.max+'"'));assert.ok(handle.includes('data-drag-step="'+v.step+'"'));}}
});

test('the narratives distinguish a chosen rate, nearby approximation and a finite optimization sequence',()=>{
  const directional=L.evaluate('directional-derivative',Stories.forSlug('directional-derivative').parameters);assert.equal(directional.directionX,-1);assert.equal(directional.directionY,0);near(directional.output,1);near(directional.height,3.4375);
  const tangent=L.evaluate('tangent-plane',Stories.forSlug('tangent-plane').parameters);near(tangent.predictedHeight,3.0375);near(tangent.actualHeight,2.9575);near(tangent.approximationError,-.08);assert.equal(tangent.parameters.dy,0);assert.equal(L.defaults('tangent-plane').dy,.2,'The story explicitly takes a one-direction displacement while the playground has two');
  const descent=L.evaluate('gradient-descent',Stories.forSlug('gradient-descent').parameters);near(descent.initialCost,4.25);near(descent.currentX,.2592);near(descent.currentY,.0024);near(descent.cost,.03359808);assert.equal(descent.history.length,5);assert.match(Stories.forSlug('gradient-descent').context,/exactly four updates/);assert.match(Stories.forSlug('tangent-plane').assumptions.join(' '),/both offsets approach zero/);
});

test('all narrative definition references resolve to the canonical source registry',()=>{
  const ids=new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(source=>source.id));for(const s of Stories.all())for(const id of s.sourceRefs)assert.ok(ids.has(id),id);
});
