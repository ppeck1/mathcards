import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const Stories=require('../src/frontier-stories.js');
const Models=require('../src/models.js');
const Scenes=require('../src/story-scenes.js');
const {createNotebook}=require('../src/notebook.js');
const slugs=['integral-accumulation','quadratic-optimization','complex-multiplication','bayes-theorem','graph-theory','resonance'];
const read=path=>JSON.parse(fs.readFileSync(new URL(path,import.meta.url),'utf8'));
const cards=slugs.map(slug=>read(`../content/cards/${slug}.json`));
const sources=new Set(read('../content/sources.json').sources.map(source=>source.id));
const near=(a,b)=>assert.ok(Math.abs(a-b)<=1e-10*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
function frozen(value){if(!value||typeof value!=='object')return;assert.ok(Object.isFrozen(value));Object.values(value).forEach(frozen);}
function storage(){const data=new Map();return {getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};}
const parts=text=>[...text.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(match=>match[1]);

test('six frontier narratives load offline as deeply frozen, independently selectable data',()=>{
  const browser=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/frontier-stories.js',import.meta.url),'utf8'),browser);
  assert.deepEqual(Stories.all().map(story=>story.slug),slugs);assert.equal(browser.AtlasFrontierStories.all().length,6);
  for(const story of Stories.all()){
    frozen(story);frozen(Stories.linksFor(story.slug));
    assert.equal(Stories.find(story.id),story);assert.equal(Stories.forSlug(story.slug),story);
    const isolated=Stories.all();isolated.pop();assert.equal(Stories.all().length,6);
    for(const ref of story.sourceRefs)assert.ok(sources.has(ref),ref);
    assert.equal(story.steps.length,4);assert.equal(story.calculation.length,3);
    assert.deepEqual(story.steps.map(step=>step.focus),['reference','input','intermediate','output']);
    assert.deepEqual(story.calculation.map(stage=>stage.role),['input','intermediate','output']);
    for(const [index,step] of story.steps.entries()){
      assert.equal(step.from,index/4);assert.equal(step.to,(index+1)/4);
      assert.ok(step.body.includes(`{{${story.timeline.key}}}`),'The story keeps its changing quantity explicit in every step');
    }
    assert.ok(story.timeline.durationMs>0&&story.timeline.durationMs<=15000);
    const control=story.variables.find(control=>control.key===story.timeline.key);assert.ok(control);
    assert.ok(story.timeline.from>=control.min&&story.timeline.to<=control.max);
  }
  for(const key of ['constructor','__proto__','unknown']){assert.equal(Stories.forSlug(key),null);assert.equal(Stories.linksFor(key),null);assert.equal(Stories.quantityFor(key,'output'),null);assert.equal(Stories.quantityFor('resonance',key),null);}
});

test('all frontier story and calculation tokens resolve to finite shared quantities with semantic descriptions',()=>{
  for(const story of Stories.all()){
    assert.deepEqual(Object.keys(story.parameters).sort(),Object.keys(Models.defaults(story.slug)).sort());
    const keys=new Set(story.steps.flatMap(step=>parts(step.body+' '+step.formula)).concat(story.calculation.flatMap(stage=>parts(stage.template))));
    for(const key of keys){const quantity=Stories.quantityFor(story.slug,key);assert.ok(quantity,`${story.slug}.${key}`);frozen(quantity);assert.ok(quantity.label.length>3&&quantity.description.length>10);assert.ok(['reference','input','intermediate','output'].includes(quantity.role));}
    for(const stage of story.calculation)assert.ok(stage.label.length>3&&stage.description.length>10);
    for(let i=0;i<=40;i++){
      const parameters={...story.parameters,[story.timeline.key]:story.timeline.from+(story.timeline.to-story.timeline.from)*i/40};
      const result=Models.evaluate(story.slug,parameters);assert.equal(result.valid,true,story.slug);
      const values=Scenes.values(story.slug,parameters);
      for(const key of keys)assert.ok(Number.isFinite(values[key]),`${story.slug}.${key} at frame ${i}`);
      for(const [key,value] of Object.entries(parameters))near(values[key],value);
    }
  }
});

for(const card of cards){
  test(`${card.slug}: original examples, sources and numerical fixtures remain reviewable`,()=>{
    assert.equal(card.publication_status,'draft');assert.equal(card.history.status,'source_gap');assert.deepEqual(card.history.claims,[]);
    assert.equal(card.examples.length,5);assert.equal(card.interactive.expected_cases.length,7);
    for(const ref of card.source_refs)assert.ok(sources.has(ref));
    for(const example of card.examples){
      assert.ok(example.steps.length>=2);assert.ok(example.conditions_to_check.length>0);assert.ok(example.independent_check.expected.length>10);assert.ok(example.limits.length>10);
      if(example.preset)assert.equal(Models.evaluate(card.slug,example.preset).valid,true,example.id);
    }
    for(const application of card.applications){assert.equal(application.evidence_kind,'constructed_example');assert.ok(card.examples.some(example=>example.id===application.example_ref));}
    for(const fixture of card.interactive.expected_cases){const result=Models.evaluate(card.slug,fixture.input);assert.equal(result.status,fixture.status??'valid');if('output' in fixture)near(result.output,fixture.output);else assert.equal(result.output,null);}
    assert.deepEqual(Models.defaults(card.slug),Object.fromEntries(card.interactive.controls.map(control=>[control.id,control.default])));
    assert.equal(card.grammar.ast.id,`ast:${card.slug}:expression`);assert.equal(card.interactive.model_id,`${card.slug}-visual-model`);
  });
  test(`${card.slug}: captured calculations retain their model contract through notebook export and reload`,()=>{
    const backing=storage(),book=createNotebook({storage:backing,models:Models,catalog:{cards}});
    for(const fixture of card.interactive.expected_cases.filter(fixture=>'output' in fixture)){
      const added=book.add({card,parameters:fixture.input,text:'Follow the changing quantity through the substituted formula and scene.'});assert.equal(added.ok,true,added.error);
      assert.equal(added.note.snapshot.expression_id,card.grammar.ast.id);assert.deepEqual(added.note.snapshot.parameters,fixture.input);near(added.note.snapshot.outputs.output.value,fixture.output);
    }
    const restored=createNotebook({storage:storage(),models:Models,catalog:{cards}});assert.equal(restored.importBackup(book.exportBackup(),{mode:'replace'}).ok,true);assert.deepEqual(restored.list(),book.list());
    const previous=book.exportBackup();assert.equal(book.add({card,parameters:card.interactive.expected_cases.at(-1).input,text:'Reject invalid parameters.'}).ok,false);assert.equal(book.exportBackup(),previous);
  });
}

test('new worked-story endpoints distinguish coordinates, conditional fractions, route ties and a damped peak',()=>{
  const value=slug=>Models.evaluate(slug,Stories.forSlug(slug).parameters);
  near(value('integral-accumulation').output,16);near(value('quadratic-optimization').output,25);
  near(value('complex-multiplication').output,1);near(value('complex-multiplication').imagPart,3);
  near(value('bayes-theorem').output,.5);near(value('graph-theory').output,8);near(value('resonance').output,2.5);
  assert.equal(Models.evaluate('graph-theory',{bridge:3}).tieCount,2);
  assert.ok(Models.evaluate('resonance',{frequency:Math.sqrt(.92),damping:.2}).output>value('resonance').output);
  assert.match(Stories.forSlug('resonance').conclusion,/slightly below 1/);
  assert.match(Stories.forSlug('complex-multiplication').assumptions.join(' '),/both coordinates/);
  assert.match(Stories.forSlug('bayes-theorem').assumptions.join(' '),/multiply by 100/);
});
