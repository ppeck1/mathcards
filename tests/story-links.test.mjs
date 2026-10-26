import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Links=require('../src/story-links.js');
const Scenes=require('../src/story-scenes.js');
const Stories=require('../src/life-stories.js');
const Models=require('../src/models.js');
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-3,`${a} ≈ ${b}`);
function tags(html,role){return [...html.matchAll(/<[^>]+>/g)].map(([tag])=>tag).filter(tag=>tag.includes(`data-role="${role}"`)).map(tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,k,v])=>[k,v])));}
function mockNode(parts){const attrs=new Map(parts?[['data-story-part',parts]]:[]);return {writes:0,getAttribute:k=>attrs.get(k)||null,setAttribute(k,v){attrs.set(k,String(v));this.writes++;}};}

test('story links load offline and describe the actual variable and authored step focus',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/story-links.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasStoryLinks.paint,'function');
  for(const slug of ['unknown','constructor','toString','__proto__']){
    assert.equal(Links.forSlug(slug),null);
    assert.equal(Links.focusFor(slug,0),null);
  }
  for(const story of Stories.all()){
    const linked=Links.forSlug(story.slug);
    assert.equal(linked.variableKey,story.variables[0].key);
    assert.equal(linked.symbol,story.variables[0].symbol);
    assert.ok(linked.effectLabel.length>20);
    assert.equal(linked.steps.length,story.steps.length);
    assert.deepEqual(linked.steps.map(step=>step.focus),story.steps.map(step=>step.focus));
    assert.ok(Object.isFrozen(linked)&&Object.isFrozen(linked.steps)&&Object.isFrozen(linked.steps[0]));
  }
});

test('focus painting is idempotent and selects only matching physical parts',()=>{
  const nodes=[mockNode('input'),mockNode('output'),mockNode('input output'),mockNode('reference')],host=mockNode();
  host.querySelectorAll=()=>nodes;
  assert.equal(Links.paint(host,'ratio-scale','input'),2);
  assert.deepEqual(nodes.map(node=>node.getAttribute('data-story-active')),['true','false','true','false']);
  const before=nodes.map(node=>node.writes),hostWrites=host.writes;
  Links.paint(host,'ratio-scale','input');
  assert.deepEqual(nodes.map(node=>node.writes),before,'An unchanged frame must not restart visual states');
  assert.equal(host.writes,hostWrites);
  assert.equal(Links.paint(host,'ratio-scale','output'),2);
  assert.deepEqual(nodes.map(node=>node.getAttribute('data-story-active')),['false','true','true','false']);
  assert.equal(Links.paint(null,'ratio-scale','output'),0);
  assert.equal(Links.paint(host,'unrecognized','output'),0);
});

test('all six stories expose physical reference, variable and result anchors without pulsing',()=>{
  for(const story of Stories.all()){
    const html=Scenes.render(story.slug,story.parameters,{id:story.slug,storyFocus:'input'});
    for(const part of ['reference','input','intermediate','output'])assert.match(html,new RegExp(`data-story-part="[^\"]*\\b${part}\\b`),`${story.slug} needs a ${part} anchor`);
    assert.doesNotMatch(html,/<animate|animation:|transition:|filter=/i);
    for(const [,value] of html.matchAll(/\b(?:width|height|r|rx|ry)="([^"]+)"/g))if(!value.includes('%'))assert.ok(Number(value)>=0);
  }
});

test('following a variable can highlight its resulting shape at the same time',()=>{
  const nodes=[mockNode('input'),mockNode('output'),mockNode('reference')],host=mockNode();host.querySelectorAll=()=>nodes;
  assert.equal(Links.paint(host,'linear-model','input',{showEffect:true}),2);
  assert.deepEqual(nodes.map(node=>node.getAttribute('data-story-active')),['true','true','false']);
  Links.paint(host,'linear-model','reference');
  assert.deepEqual(nodes.map(node=>node.getAttribute('data-story-active')),['false','false','true']);
});

test('patio input bracket measures exactly the border from outer edge to fixed patch',()=>{
  for(const x of [0,.37,1,2,4]){
    const p={...Models.defaults('function-composition'),x},html=Scenes.render('function-composition',p,{storyFocus:'input'});
    const square=tags(html,'patio-square')[0],patch=tags(html,'herb-patch')[0],measure=tags(html,'story-input-measure')[0];
    const [,start,,end]=measure.d.match(/M([\d.-]+) ([\d.-]+)L([\d.-]+) ([\d.-]+)/);
    near(Number(start),Number(square.x));near(Number(end),Number(patch.x));
    const scale=Number(square.width)/Number(square['data-side']);
    near(Number(end)-Number(start),scale*x);
    near(Number(patch.width),scale);near(Number(patch.height),scale);
    near(Number(patch.x)+Number(patch.width)/2,Number(square.x)+Number(square.width)/2);
    near(Number(patch.y)+Number(patch.height)/2,Number(square.y)+Number(square.height)/2);
    assert.ok(Number(square.y)>=92,'The largest patio must stay below its title and inside the grass frame');
    const plain=tags(Scenes.render('function-composition',p),'patio-square')[0];
    assert.equal(square.width,plain.width);assert.equal(square.height,plain.height);
  }
});

test('ingredient level and water surface cues stay attached to the live measured shapes',()=>{
  for(const servings of [1,4,6,8,12]){
    const html=Scenes.render('ratio-scale',{servings,baseServings:4,amount:300},{storyFocus:'output'});
    const fill=tags(html,'ingredient-mass').at(-1),measure=tags(html,'story-output-measure')[0];
    near(Number(measure.y1),Number(fill.y));near(Number(measure.y2),Number(fill.y)+Number(fill.height));
  }
  for(const time of [0,.5,5,12]){
    const html=Scenes.render('linear-model',{initial:20,rate:4,time},{storyFocus:'output'});
    const fill=tags(html,'water-volume')[0],surface=tags(html,'water-surface')[0],measure=tags(html,'story-output-measure')[0];
    near(Number(surface.y1),Number(fill.y));near(Number(surface.y2),Number(fill.y));
    near(Number(measure.y1),Number(fill.y));near(Number(measure.y2),Number(fill.y)+Number(fill.height));
  }
});

test('photo width cue tracks exactly the moving right edge while reference remains fixed',()=>{
  for(const time of [0,.45,1,3,8]){
    const p={initial:1200,factor:.8,time},html=Scenes.render('exponential-change',p,{storyFocus:'output'});
    const photo=tags(html,'photo-width')[0],edge=tags(html,'changing-photo-edge')[0],measure=tags(html,'story-output-measure')[0],reference=tags(html,'original-photo')[0];
    near(Number(edge.x1),Number(photo.x)+Number(photo.width));near(Number(edge.x2),Number(edge.x1));
    near(Number(measure.x1),Number(photo.x));near(Number(measure.x2),Number(edge.x1));
    near(Number(reference.width),300);near(Number(photo.width)/300,Math.pow(.8,time));
  }
});

test('cart speed arrow encodes the derivative and the interval marker encodes a different distance',()=>{
  let scale;
  for(const a of [0,.5,1,2,3]){
    const p={preset:'cubic',a,h:.1},html=Scenes.render('derivative',p,{storyFocus:'output'}),arrow=tags(html,'speed-arrow')[0],interval=tags(html,'interval-distance')[0];
    assert.equal(Number(arrow['data-value']),3*a*a);
    near(Number(interval['data-value']),Math.pow(a+.1,3)-Math.pow(a,3));
    const [,x,,end]=arrow.d.match(/M([\d.-]+) ([\d.-]+)L([\d.-]+) ([\d.-]+)/);
    const width=Number(end)-Number(x);
    if(a===0)near(width,0);else if(scale===undefined)scale=width/(3*a*a);else near(width/(3*a*a),scale);
  }
});
