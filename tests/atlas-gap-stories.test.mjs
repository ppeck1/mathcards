import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Stories=require('../src/atlas-gap-stories.js'),M=require('../src/atlas-gaps.js'),Life=require('../src/life-story.js');
const templates=s=>[...s.steps.flatMap(step=>[step.body,step.formula]),...s.calculation.map(phase=>phase.template)],tokens=s=>new Set(templates(s).flatMap(t=>[...t.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(([,key])=>key)));
function frozen(v){if(v&&typeof v==='object'){assert.ok(Object.isFrozen(v));Object.values(v).forEach(frozen);}}

test('three independent gap narratives load offline and retain immutable roles',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/atlas-gap-stories.js',import.meta.url),'utf8'),context);assert.equal(context.AtlasGapStories.all().length,3);assert.deepEqual(Stories.all().map(s=>s.slug),['set','population-sample','computational-complexity']);for(const s of Stories.all()){frozen(s);frozen(Stories.linksFor(s.slug));assert.equal(Stories.find(s.id),s);assert.equal(Stories.forSlug(s.slug),s);assert.ok(s.assumptions.length>=4);}for(const unknown of ['constructor','__proto__','toString','missing',null,{}]){assert.equal(Stories.forSlug(unknown),null);assert.equal(Stories.linksFor(unknown),null);assert.equal(Stories.quantityFor(unknown,'output'),null);}Stories.all().pop();assert.equal(Stories.all().length,3);
});

test('every story frame changes one continuous input and preserves valid discrete selections',()=>{
  for(const s of Stories.all()){assert.deepEqual(Object.keys(s.parameters).sort(),Object.keys(M.defaults(s.slug)).sort());assert.equal(s.timeline.to,s.parameters[s.timeline.key]);assert.ok(!M.controls(s.slug).find(c=>c.key===s.timeline.key).discrete);for(let i=0;i<=120;i++){const p=Life.parametersAt(s,i/120),r=M.evaluate(s.slug,p),values={...p,...r};assert.equal(r.valid,true,`${s.slug} ${i}`);for(const key of Object.keys(s.parameters))if(key!==s.timeline.key)assert.equal(p[key],s.parameters[key]);for(const key of tokens(s))assert.ok(Number.isFinite(values[key]),`${s.slug}.${key}`);}assert.deepEqual(Life.parametersAt(s,1),s.parameters);}
});

test('story tokens, calculation steps and rendered scene quantities share the same values',()=>{
  for(const s of Stories.all()){const values={...s.parameters,...M.evaluate(s.slug,s.parameters)},html=M.render(s.slug,s.parameters),present=new Set([...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));for(const key of tokens(s)){const q=Stories.quantityFor(s.slug,key);assert.ok(q,`${s.slug}.${key}`);frozen(q);assert.ok(q.label.length>4&&q.description.length>25&&q.unit);assert.ok(present.has(key),`${s.slug}.${key}`);}for(const text of templates(s))assert.doesNotMatch(Life.formatTemplate(text,values),/\{\{|Unavailable|NaN/);assert.deepEqual(s.steps.map(step=>step.focus),['reference','input','intermediate','output']);assert.deepEqual(s.calculation.map(phase=>phase.role),['input','intermediate','output']);s.steps.forEach(step=>assert.ok(step.body.includes('{{'+s.timeline.key+'}}')));}
});

test('authored story rails honor their declared reading ranges in both views',()=>{
  for(const s of Stories.all()){const v=s.variables[0];for(const view of M.specs(s.slug).views){const html=M.render(s.slug,s.parameters,{view,controlBounds:{[v.key]:v}}),tag=html.match(new RegExp('<g[^>]*data-drag-param="'+v.key+'"[^>]*>'))[0];assert.ok(tag.includes('data-drag-min="'+v.min+'"'));assert.ok(tag.includes('data-drag-max="'+v.max+'"'));assert.ok(tag.includes('data-drag-step="'+v.step+'"'));}}
});

test('question endpoints preserve membership, selected-means and modeled-work distinctions',()=>{
  const set=M.evaluate('set',Stories.forSlug('set').parameters);assert.deepEqual(set.resultIDs,[4,5,6,7]);assert.equal(set.resultCount,4);
  const sample=M.evaluate('population-sample',Stories.forSlug('population-sample').parameters);assert.equal(sample.sampleSum,63);assert.equal(sample.populationSum,141);assert.equal(sample.sampleMean,15.75);assert.equal(sample.populationMean,11.75);assert.equal(sample.meanError,4);assert.match(Stories.forSlug('population-sample').assumptions.join(' '),/not a random selection/);
  const scan=M.evaluate('computational-complexity',Stories.forSlug('computational-complexity').parameters);assert.equal(scan.operationCount,12);assert.equal(scan.totalTime,24);assert.equal(scan.doubledTime,48);assert.match(Stories.forSlug('computational-complexity').assumptions.join(' '),/finite plot alone does not establish/);
});

test('all story sources resolve to the canonical public registry',()=>{
  const ids=new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(s=>s.id));for(const s of Stories.all()){assert.ok(s.sourceRefs.length>0);for(const id of s.sourceRefs)assert.ok(ids.has(id),id);}
});
