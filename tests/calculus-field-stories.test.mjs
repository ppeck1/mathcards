import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Stories=require('../src/calculus-field-stories.js'),L=require('../src/calculus-fields.js'),Life=require('../src/life-story.js');
const slugs=['chain-rule','partial-derivative','gradient'],templates=s=>[...s.steps.flatMap(step=>[step.body,step.formula]),...s.calculation.map(phase=>phase.template)],tokens=s=>new Set(templates(s).flatMap(value=>[...value.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(([,key])=>key)));
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-9*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
function frozen(value){if(value&&typeof value==='object'){assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}}

test('three original calculus narratives load offline as deeply immutable separate modules',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/calculus-field-stories.js',import.meta.url),'utf8'),context);assert.equal(context.AtlasCalculusFieldStories.all().length,3);assert.deepEqual(Stories.all().map(s=>s.slug),slugs);for(const s of Stories.all()){frozen(s);frozen(Stories.linksFor(s.slug));assert.equal(Stories.find(s.id),s);assert.equal(Stories.forSlug(s.slug),s);assert.ok(s.assumptions.length>=4);}for(const unknown of ['__proto__','constructor','toString','missing',null,{}]){assert.equal(Stories.forSlug(unknown),null);assert.equal(Stories.find(unknown),null);assert.equal(Stories.linksFor(unknown),null);assert.equal(Stories.quantityFor(unknown,'output'),null);}Stories.all().pop();assert.equal(Stories.all().length,3);
});

test('complete story paths retain fixed settings and finite meaningful quantities',()=>{
  for(const s of Stories.all()){assert.deepEqual(Object.keys(s.parameters).sort(),Object.keys(L.defaults(s.slug)).sort());assert.equal(s.timeline.to,s.parameters[s.timeline.key]);const v=s.variables[0];assert.ok(v.min<=s.timeline.from&&s.timeline.from<=v.max);assert.ok(v.min<=s.timeline.to&&s.timeline.to<=v.max);
    for(let i=0;i<=64;i++){const p={...s.parameters,[s.timeline.key]:s.timeline.from+(s.timeline.to-s.timeline.from)*i/64},r=L.evaluate(s.slug,p),values={...p,...r};assert.equal(r.valid,true);assert.ok(Number.isFinite(r.output));for(const key of tokens(s))assert.ok(Number.isFinite(values[key]),`${s.slug}.${key}`);if(s.slug==='chain-rule')assert.ok(r.innerValue>0,'A physical panel side remains positive');if(s.slug==='gradient')assert.ok(r.gradientNorm>0,'Story unit direction is always defined');}
    for(const value of [v.min,v.max])assert.equal(L.evaluate(s.slug,{...s.parameters,[v.key]:value}).valid,true);
  }
});

test('story words, calculation phases and default views share exact semantic marks',()=>{
  for(const s of Stories.all()){const values={...s.parameters,...L.evaluate(s.slug,s.parameters)},view=s.view||'geometry',markup=L.render(s.slug,s.parameters,{view}),present=new Set([...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));
    for(const key of tokens(s)){const q=Stories.quantityFor(s.slug,key);assert.ok(q,`${s.slug}.${key}`);frozen(q);assert.ok(q.label.length>4&&q.description.length>35&&q.unit);assert.ok(present.has(key),`${s.slug}.${key} has a mark in ${view}`);}for(const t of templates(s))assert.doesNotMatch(Life.formatTemplate(t,values),/\{\{|Unavailable|NaN/);
    assert.deepEqual(s.steps.map(step=>step.focus),['reference','input','intermediate','output']);assert.deepEqual(s.calculation.map(step=>step.role),['input','intermediate','output']);s.steps.forEach((step,i)=>{assert.equal(step.from,i/4);assert.equal(step.to,(i+1)/4);assert.ok(step.body.includes('{{'+s.timeline.key+'}}'));assert.ok(step.focusDescription.length>35);});assert.equal(Stories.linksFor(s.slug).variableKey,s.timeline.key);assert.ok(L.specs(s.slug).views.includes(view));
  }
});

test('story rails honor their authored scope in every available view',()=>{
  for(const s of Stories.all()){const v=s.variables[0];for(const view of L.specs(s.slug).views){const html=L.render(s.slug,s.parameters,{view,controlBounds:{[v.key]:v}}),handle=html.match(new RegExp('<g[^>]*data-drag-param="'+v.key+'"[^>]*>'))[0];assert.ok(handle.includes('data-drag-min="'+v.min+'"'));assert.ok(handle.includes('data-drag-max="'+v.max+'"'));assert.ok(handle.includes('data-drag-step="'+v.step+'"'));}}
});

test('the stories separate area from sensitivity, height from slope, and local direction from a route',()=>{
  const chain=L.evaluate('chain-rule',Stories.forSlug('chain-rule').parameters);near(chain.innerValue,3);near(chain.composedValue,9);near(chain.innerDerivative,2);near(chain.outerDerivative,6);near(chain.chainDerivative,12);assert.match(Stories.forSlug('chain-rule').assumptions.join(' '),/not an exact finite change/);
  const p=Stories.forSlug('partial-derivative'),g=Stories.forSlug('gradient');assert.deepEqual(p.parameters,g.parameters);const partial=L.evaluate(p.slug,p.parameters),gradient=L.evaluate(g.slug,g.parameters);near(partial.height,3.4375);near(partial.output,-1);near(partial.partialY,-.25);near(gradient.gradientNorm,Math.sqrt(1.0625));near(gradient.unitGradientX,-1/Math.sqrt(1.0625));near(gradient.unitGradientY,-.25/Math.sqrt(1.0625));assert.match(p.context,/inverse-metre/);assert.match(g.context,/do not simulate a route/);assert.match(g.assumptions.join(' '),/Zero gradient alone does not prove/);
});

test('story sources resolve to the current canonical public source registry',()=>{
  const ids=new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(source=>source.id));for(const s of Stories.all())for(const id of s.sourceRefs)assert.ok(ids.has(id),id);
});
