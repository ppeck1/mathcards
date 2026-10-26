import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Models=require('../src/models.js');
const Spatial=require('../src/spatial.js');
const Visuals=require('../src/visuals.js');
const Scenes=require('../src/story-scenes.js');
const Stories=require('../src/life-stories.js');
const Input=require('../src/scene-input.js');
const slugs=['function-composition','real-logarithm','derivative'];
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const elements=html=>(html.match(/<[^>]+>/g)||[]).map(attrs);
const near=(actual,expected,tolerance=1e-8)=>assert.ok(Math.abs(actual-expected)<=tolerance,`${actual} ≈ ${expected}`);

test('all three original stories honor the host-declared range and keyboard step',()=>{
  for(const slug of slugs){
    const story=Stories.forSlug(slug),control=story.variables[0];
    const bounds={[control.key]:{min:control.min,max:control.max,step:control.step}};
    const html=Scenes.render(slug,story.parameters,{controlBounds:bounds,storyFocus:'input'});
    const handle=elements(html).find(el=>el['data-drag-param']===control.key);
    assert.equal(Number(handle['data-drag-min']),control.min,slug);
    assert.equal(Number(handle['data-drag-max']),control.max,slug);
    assert.equal(Number(handle['data-drag-step']),control.step,slug);
    assert.equal(Number(handle['aria-valuenow']),story.parameters[control.key],slug);
  }
});

test('original story rails can narrow an authored setting without changing the mathematical values',()=>{
  const story=Stories.forSlug('function-composition');
  const parameters={...story.parameters,x:2};
  const html=Scenes.render(story.slug,parameters,{controlBounds:{x:{min:1,max:3,step:.02}}});
  const handle=elements(html).find(el=>el['data-drag-param']==='x');
  assert.equal(handle['data-drag-min'],'1');assert.equal(handle['data-drag-max'],'3');
  const position=elements(html).find(el=>el['data-role']==='patio-square');
  assert.equal(Number(position['data-area']),25);
  assert.equal(Models.evaluate(story.slug,parameters).output,25);
  const malformed=Scenes.render(story.slug,parameters,{controlBounds:{x:{min:3,max:1}}});
  assert.equal(elements(malformed).find(el=>el['data-drag-param']==='x')['data-drag-min'],'0');
});

test('exposure illustration responds continuously to both halvings and doublings while its exact bar stays linear',()=>{
  const samples=[.125,.25,.5,1,2,4,8,16].map(argument=>{
    const html=Scenes.render('real-logarithm',{base:2,argument});
    const light=elements(html).find(el=>el['data-role']==='exposure-light');
    const bar=elements(html).find(el=>el['data-role']==='light-ratio');
    const coordinates=[...bar.d.matchAll(/[\d.-]+/g)].map(match=>Number(match[0]));
    near((coordinates[2]-coordinates[0])/argument,391/16,1e-3);
    assert.equal(Number(light['data-value']),argument);
    assert.match(html,/brightness is a qualitative illustration/);
    return Number(light.opacity);
  });
  for(let i=1;i<samples.length;i++)assert.ok(samples[i]>samples[i-1],'Every completed doubling has a visible qualitative change');
  for(let i=2;i<samples.length;i++)near(samples[i]-samples[i-1],samples[1]-samples[0],.00011);
});

test('the derivative 3D h grip maps actual front coordinates and remains usable at zero and tiny steps',()=>{
  const px=x=>77+(x+4.2)/8.4*423;
  for(const a of [-3,0,3])for(const h of [-1,-1e-14,0,1e-14,1])for(const camera of [0,1]){
    const parameters={preset:'cubic',a,h};
    const html=Spatial.render('derivative',parameters,{camera});
    const handles=elements(html).filter(el=>el['data-drag-param']);
    assert.equal(handles.length,2);
    const grip=handles.find(el=>el['data-drag-param']==='h');
    assert.equal(grip.role,'slider');assert.equal(grip.tabindex,'0');
    assert.equal(Number(grip['aria-valuenow']),h);
    assert.match(grip['aria-label'],/drag.+arrow keys/i);
    const spec={min:-1,max:1,x0:Number(grip['data-drag-x0']),x1:Number(grip['data-drag-x1']),step:Number(grip['data-drag-step'])};
    near(spec.x0,px(a-1),.0001);near(spec.x1,px(a+1),.0001);
    near(Input.pointerValue(spec,h,px(a+h),spec.x0),-1);
    near(Input.pointerValue(spec,h,px(a+h),spec.x1),1);
    near(Input.keyValue(spec,0,'ArrowRight'),.01);
    if(h===0){assert.match(html,/secant quotient is undefined/);assert.match(html,/data-role="tangent-ribbon"/);}
  }
});

test('2D and 3D magnitude helpers preserve representable tiny geometry without inventing nonzero values',()=>{
  const values=[Number.MIN_VALUE,Number.MAX_VALUE,0];
  const area=Visuals.areaGeometry(values),volume=Spatial.volumeGeometry(values);
  assert.ok(area.sides[0]>0&&area.sides[0]<1e-310);
  assert.ok(volume.sides[0]>0&&volume.sides[0]<1e-200);
  assert.equal(area.sides[2],0);assert.equal(volume.sides[2],0);
  assert.ok(area.sides.every(Number.isFinite));assert.ok(volume.sides.every(Number.isFinite));
});

test('original card implementation status is current while saved model contracts and draft review gates stay intact',()=>{
  const coverage=fs.readFileSync(new URL('../content/coverage.csv',import.meta.url),'utf8');
  const ids={'function-composition':'function-composition-quadratic-affine','real-logarithm':'real-logarithm-linked-exponential',derivative:'derivative-secant-tangent'};
  for(const slug of slugs){
    const card=JSON.parse(fs.readFileSync(new URL(`../content/cards/${slug}.json`,import.meta.url),'utf8'));
    assert.equal(card.publication_status,'draft');
    assert.match(card.review.interaction,/^implemented;/);
    assert.equal(card.interactive.interaction_status,'implemented');
    assert.match(card.review.mathematics,/not independently reviewed/);
    assert.doesNotMatch(card.review_gaps.join(' '),/renderer.*not implemented|model specified but application/i);
    assert.equal(card.interactive.model_revision,'1');
    assert.equal(card.interactive.model_id,ids[slug]);
    assert.equal(card.interactive.renderer_id,ids[slug]);
    assert.match(coverage,new RegExp(`math:concept:${slug},[^\\n]+,implemented(?:\\r?\\n|$)`));
  }
});
