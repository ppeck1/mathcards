import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Stories=require('../src/life-stories.js');
const Models=require('../src/models.js');
const Scenes=require('../src/story-scenes.js');
const Experiments=require('../src/experiments.js');
const slugs=['function-composition','real-logarithm','derivative','ratio-scale','linear-model','exponential-change'];
const near=(a,b)=>assert.ok(Math.abs(a-b)<=Math.max(1,Math.abs(b))*1e-10,`${a} ≈ ${b}`);
const at=(story,progress)=>({...story.parameters,[story.timeline.key]:story.timeline.from+(story.timeline.to-story.timeline.from)*progress});
function deepFrozen(value){
  if(!value||typeof value!=='object')return;
  assert.ok(Object.isFrozen(value),'Every authored object and array is frozen');
  for(const nested of Object.values(value))deepFrozen(nested);
}

test('life story data loads offline and supplies one complete narrative for each of six cards',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/life-stories.js',import.meta.url),'utf8'),context);
  assert.equal(context.AtlasLifeStories.all().length,6);
  const all=Stories.all();assert.equal(all.length,6);assert.deepEqual(all.map(story=>story.slug).sort(),[...slugs].sort());
  assert.equal(new Set(all.map(story=>story.id)).size,6);
  for(const story of all){
    assert.equal(Stories.find(story.id).slug,story.slug);
    assert.equal(Stories.forSlug(story.slug),Stories.find(story.id));
    for(const key of ['title','summary','context','question','conclusion']){assert.equal(typeof story[key],'string');assert.ok(story[key].length>10,`${story.slug}.${key}`);}
    assert.ok(['patio','exposure','motion','recipe','tank','photo'].includes(story.scene));
    assert.ok(story.assumptions.length>0);assert.ok(story.sourceRefs.length>0);
    assert.deepEqual(Object.keys(story.parameters).sort(),Object.keys(Models.defaults(story.slug)).sort(),'A narrative owns complete reproducible model parameters');
  }
  assert.equal(Stories.forSlug('constructor'),null);assert.equal(Stories.find('unknown'),null);
});

test('all timeline positions are valid and leave fixed assumptions unchanged',()=>{
  for(const story of Stories.all()){
    const timeline=story.timeline,control=story.variables.find(variable=>variable.key===timeline.key);
    assert.ok(control,'The animated variable has a visible, labeled control');
    assert.ok(Number.isFinite(timeline.from)&&Number.isFinite(timeline.to)&&timeline.from!==timeline.to);
    assert.ok(timeline.durationMs>0&&timeline.durationMs<=15000);
    assert.ok(timeline.from>=control.min&&timeline.from<=control.max);assert.ok(timeline.to>=control.min&&timeline.to<=control.max);
    for(let i=0;i<=100;i++){
      const p=at(story,i/100),result=Models.evaluate(story.slug,p),html=Scenes.render(story.slug,p,{id:story.id});
      assert.equal(result.valid,true,`${story.slug} frame ${i}`);assert.ok(Number.isFinite(result.output));
      assert.ok(Number.isFinite(Scenes.primaryValue(story.slug,p)));
      for(const [key,value] of Object.entries(story.parameters))if(key!==timeline.key)assert.equal(p[key],value);
      assert.match(html,/role="slider"/,'The story stays inside its physical context at every frame');
      for(const [tag] of html.matchAll(/<[^>]+>/g))assert.doesNotMatch(tag,/(?:NaN|[+-]?Infinity)/);
    }
  }
});

test('each labeled story control stays valid across its full supported interval',()=>{
  for(const story of Stories.all())for(const variable of story.variables){
    assert.ok(Object.hasOwn(story.parameters,variable.key));
    assert.ok(variable.label.length>0&&variable.symbol.length>0&&typeof variable.unit==='string');
    assert.ok(Number.isFinite(variable.min)&&Number.isFinite(variable.max)&&variable.min<variable.max);
    assert.ok(Number.isFinite(variable.step)&&variable.step>0);
    for(const value of [variable.min,(variable.min+variable.max)/2,variable.max]){
      const p={...story.parameters,[variable.key]:value};
      assert.equal(Models.evaluate(story.slug,p).valid,true,`${story.slug}.${variable.key} = ${value}`);
      assert.match(Scenes.render(story.slug,p),/role="slider"/,'The visible control must not leave the story’s physical setting');
    }
  }
});

test('story progression covers every phase once and its dynamic quantities resolve from the shared model',()=>{
  for(const story of Stories.all()){
    assert.equal(story.steps.length,4);assert.equal(new Set(story.steps.map(step=>step.id)).size,4);
    assert.equal(story.steps[0].from,0);assert.equal(story.steps.at(-1).to,1);
    for(let i=0;i<story.steps.length;i++){
      const step=story.steps[i];assert.ok(step.from<step.to);if(i)assert.equal(step.from,story.steps[i-1].to,'No gap or overlap between explanation steps');
      assert.ok(step.title.length>3&&step.body.length>15&&step.formula.length>0);
      for(const progress of [0,.25,.5,.75,1]){
        const values=Scenes.values(story.slug,at(story,progress));
        for(const text of [step.title,step.body,step.formula])for(const [,key] of text.matchAll(/\{\{([\w]+)\}\}/g)){
          assert.ok(Object.hasOwn(values,key),`Unknown narrative quantity ${story.slug}.${key}`);
          assert.ok(typeof values[key]==='string'||Number.isFinite(values[key]),`Unresolved narrative value ${story.slug}.${key}`);
        }
      }
    }
  }
});

test('authored endpoints solve the six everyday questions with the stated quantities and units',()=>{
  const expected={
    'function-composition':{start:1,finish:25},'real-logarithm':{start:0,finish:3},
    derivative:{start:0,finish:12},'ratio-scale':{start:300,finish:450},
    'linear-model':{start:20,finish:40},'exponential-change':{start:1200,finish:614.4}
  };
  for(const story of Stories.all()){
    near(Scenes.primaryValue(story.slug,at(story,0)),expected[story.slug].start);
    near(Scenes.primaryValue(story.slug,at(story,1)),expected[story.slug].finish);
    const values=Scenes.values(story.slug,at(story,1));
    if(story.slug==='function-composition'){assert.equal(values.side,5);assert.equal(values.area,25);}
    if(story.slug==='real-logarithm'){assert.equal(values.stops,3);assert.equal(values.inverse,8);}
    if(story.slug==='derivative'){assert.equal(values.position,8);assert.equal(values.speed,12);near(values.output,12.61);}
    if(story.slug==='ratio-scale'){assert.equal(values.perServing,75);assert.equal(values.factor,1.5);}
    if(story.slug==='linear-model')assert.equal(values.increment,20);
    if(story.slug==='exponential-change'){near(values.width,614.4);near(values.height,409.6);near(values.change,-585.6);}
  }
});

test('every story step connects the current input to an explicit part of its scene',()=>{
  const allowedFocus=new Set(['reference','input','intermediate','output']);
  for(const story of Stories.all())for(const step of story.steps){
    assert.ok(step.body.includes('{{'+story.timeline.key+'}}'),`${story.slug}.${step.id} must describe the current input, including after a manual drag`);
    assert.ok(allowedFocus.has(step.focus),`${story.slug}.${step.id} has a known scene focus`);
    assert.ok(step.focusLabel.length>8,`${story.slug}.${step.id} has a useful visible cue label`);
    assert.ok(step.focusDescription.length>25,`${story.slug}.${step.id} explains the physical effect`);
  }
});

test('story source links resolve and callers cannot mutate authored content through returned collections',()=>{
  const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
  const known=new Set(sources.map(source=>source.id)),before=JSON.stringify(Stories.all());
  for(const story of Stories.all()){
    deepFrozen(story);for(const ref of story.sourceRefs)assert.ok(known.has(ref),`Unknown source ${ref}`);
    assert.throws(()=>{story.parameters[story.timeline.key]=-999;},TypeError);
  }
  const copy=Stories.all();copy.pop();assert.equal(Stories.all().length,6);assert.equal(JSON.stringify(Stories.all()),before);
});

test('new prediction experiments solve the same questions as the adjacent everyday stories',()=>{
  const expected={'ratio-scale':450,'linear-model':40,'exponential-change':614.4};
  for(const [slug,answer] of Object.entries(expected)){
    const experiments=Experiments.forSlug(slug);assert.equal(experiments.length,1);
    for(const experiment of experiments){
      const narrative=Stories.forSlug(slug),path=experiment.sweep;
      assert.ok(path);assert.equal(path.key,narrative.timeline.key);
      assert.deepEqual(experiment.start,at(narrative,0));assert.deepEqual(experiment.finish,at(narrative,1));
      assert.equal(path.from,experiment.start[path.key]);assert.equal(path.to,experiment.finish[path.key]);
      assert.deepEqual(Object.keys(experiment.start).sort(),Object.keys(Models.defaults(slug)).sort());
      near(Models.evaluate(slug,experiment.finish).output,answer);
      assert.equal(experiment.prediction.length,3);assert.equal(new Set(experiment.prediction.map(choice=>choice.id)).size,3);
      assert.equal(Experiments.outcome(slug,experiment.id,experiment.answerId).correct,true);
      for(const choice of experiment.prediction)assert.equal(Experiments.outcome(slug,experiment.id,choice.id).correct,choice.id===experiment.answerId);
      for(let frame=0;frame<=100;frame++){
        const p={...experiment.start,[path.key]:path.from+(path.to-path.from)*frame/100};
        assert.equal(Models.evaluate(slug,p).valid,true);for(const [key,value] of Object.entries(experiment.finish))if(key!==path.key)assert.equal(p[key],value);
      }
      deepFrozen(experiment);
    }
  }
});
