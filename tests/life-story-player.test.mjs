import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Player=require('../src/life-story.js');
const Stories=require('../src/life-stories.js');
const Models=require('../src/models.js');
const Scenes=require('../src/story-scenes.js');
const near=(a,b)=>assert.ok(Math.abs(a-b)<=Math.max(1,Math.abs(b))*1e-12,`${a} ≈ ${b}`);

test('player helpers load offline without starting animation or requiring a document',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/life-story.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasLifeStory.mount,'function');
  assert.equal(context.AtlasLifeStory.formatTemplate('Value {{x}}',{x:12}),'Value 12');
  assert.equal(context.AtlasLifeStory.parametersAt({parameters:{x:5},timeline:{key:'x',from:0,to:5}},.5).x,2.5);
});

test('parametersAt clamps progress, preserves exact endpoints, and rejects nonnumeric timeline positions',()=>{
  const story=Object.freeze({parameters:Object.freeze({amount:12.5,time:.3,mode:'fixed'}),timeline:Object.freeze({key:'time',from:.1,to:.3})});
  assert.deepEqual(Player.parametersAt(story,-2),{amount:12.5,time:.1,mode:'fixed'});
  assert.deepEqual(Player.parametersAt(story,2),{amount:12.5,time:.3,mode:'fixed'});
  assert.equal(Player.parametersAt(story,0).time,.1);assert.equal(Player.parametersAt(story,1).time,.3);
  near(Player.parametersAt(story,.25).time,.15);
  for(const invalid of [NaN,Infinity,-Infinity,undefined,null,'0.5',{}])assert.equal(Player.parametersAt(story,invalid).time,.1);
  const result=Player.parametersAt(story,.5);result.amount=-900;assert.equal(story.parameters.amount,12.5);
});

test('interpolation also supports descending paths without altering fixed model parameters',()=>{
  const story={parameters:{x:1,label:'descending'},timeline:{key:'x',from:10,to:1}};
  assert.equal(Player.parametersAt(story,0).x,10);assert.equal(Player.parametersAt(story,1).x,1);
  near(Player.parametersAt(story,.5).x,5.5);assert.equal(Player.parametersAt(story,.5).label,'descending');
});

test('every real story produces complete valid model states throughout its playback interval',()=>{
  for(const story of Stories.all()){
    const before=JSON.stringify(story);
    for(let frame=0;frame<=120;frame++){
      const progress=frame/120,p=Player.parametersAt(story,progress),r=Models.evaluate(story.slug,p);
      assert.equal(r.valid,true,`${story.id} at ${progress}`);assert.ok(Number.isFinite(Scenes.primaryValue(story.slug,p)));
      assert.deepEqual(Object.keys(p).sort(),Object.keys(story.parameters).sort());
      for(const [key,value] of Object.entries(story.parameters))if(key!==story.timeline.key)assert.equal(p[key],value);
      near(p[story.timeline.key],story.timeline.from+(story.timeline.to-story.timeline.from)*progress);
    }
    assert.deepEqual(Player.parametersAt(story,1),story.parameters,'The final displayed answer exactly matches the authored question');
    assert.equal(JSON.stringify(story),before);
  }
});

test('formatTemplate replaces model quantities as plain text without evaluating formula strings',()=>{
  const values=Object.freeze({x:2,intermediate:5,output:25,name:'a photograph',tiny:.125,negative:-3});
  assert.equal(Player.formatTemplate('g({{x}}) = {{intermediate}}; A = {{output}} m²',values),'g(2) = 5; A = 25 m²');
  assert.equal(Player.formatTemplate('{{name}} × {{tiny}}; {{negative}} stops; x={{x}}, again {{x}}',values),'a photograph × 0.125; -3 stops; x=2, again 2');
  assert.equal(Player.formatTemplate('1200 × 0.8³ = {{output}} px',{output:614.4}),'1200 × 0.8³ = 614.4 px');
  assert.equal(Player.formatTemplate('No variables here',values),'No variables here');
  assert.equal(Player.formatTemplate('literal {{x + 1}} / {{x()}}',values),'literal {{x + 1}} / {{x()}}');
  assert.equal(Player.formatTemplate('{{text}}',{text:'<img onerror="bad()">'}),'<img onerror="bad()">','The helper returns text; the controller inserts it with textContent');
});

test('missing and nonfinite quantities show an explicit unavailable state',()=>{
  for(const value of [NaN,Infinity,-Infinity,null,undefined])assert.equal(Player.formatTemplate('Now {{output}}',{output:value}),'Now Unavailable');
  assert.equal(Player.formatTemplate('{{missing}}',{}),'Unavailable');
  assert.equal(Player.formatTemplate('{{zero}}',{zero:0}),'0');
  assert.equal(Player.formatTemplate('{{count}}',{count:1200}),'1,200');
});

test('all authored formulas and bodies resolve against the same frame used by the story scene',()=>{
  for(const story of Stories.all())for(const progress of [0,.1,.25,.5,.75,.9,1]){
    const p=Player.parametersAt(story,progress),values=Scenes.values(story.slug,p);
    for(const step of story.steps)for(const text of [step.body,step.formula]){
      const rendered=Player.formatTemplate(text,values);
      assert.doesNotMatch(rendered,/\{\{|\}\}|Unavailable|NaN|Infinity/);
    }
  }
});

test('moving readouts approximate final evaluations while exact identities remain unchanged',()=>{
  for(const role of ['intermediate','output']){
    assert.equal(Player.formulaLiteral('v(t) = 3t² = ',role,true),'v(t) = 3t² ≈ ');
    assert.equal(Player.formulaLiteral('v(t) = 3t² = ',role,false),'v(t) = 3t² = ');
    assert.equal(Player.formulaLiteral('v(t) = 3t²',role,true),'v(t) = 3t²');
    assert.equal(Player.formulaLiteral(' + 1)²; area follows the square',role,true),' + 1)²; area follows the square');
  }
  for(const role of ['input','reference'])assert.equal(Player.formulaLiteral('t = ',role,true),'t = ');
});
