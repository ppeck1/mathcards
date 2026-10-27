import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Player=require('../src/life-story.js'),Motion=require('../src/motion.js'),Readable=require('../src/readable-values.js'),Journey=require('../src/story-journey.js');
const Structures=require('../src/structures.js'),Stories=require('../src/structure-stories.js');

const gridStory=()=>({
  id:'offset-grid',slug:'offset-grid',title:'A declared whole-step path',summary:'Follow legal positions on an offset grid.',context:'Each selected position belongs to the stated lattice.',question:'Which position is selected at the end?',eyebrow:'A reusable discrete path',unit:'positions',
  parameters:{n:9,fixed:7},variables:[{key:'n',symbol:'n',label:'Selected position',unit:'',min:1,max:9,step:2,discrete:true}],timeline:{key:'n',from:1,to:9,durationMs:1000},assumptions:[],sourceRefs:[],conclusion:'Position nine is selected.',
  steps:['reference','input','intermediate','output'].map((focus,i)=>({id:'step-'+i,from:i/4,to:(i+1)/4,focus,title:'Read position '+i,body:'Selected n={{n}}.',formula:'f(n)={{output}}',focusLabel:'A legal position',focusDescription:'The selection stays on the grid.'}))
});

test('discrete story sampling respects an offset lattice while continuous stories retain exact precision',()=>{
  const story=gridStory();
  for(let i=0;i<=200;i++){
    const p=Player.parametersAt(story,i/200);assert.ok([1,3,5,7,9].includes(p.n));assert.equal(p.fixed,7);
  }
  assert.equal(Player.parametersAt(story,0).n,1);assert.equal(Player.parametersAt(story,1).n,9);
  assert.match(Player.markup(story,{n:1,fixed:7}),/step="2"/);
  const reverse={...story,timeline:{...story.timeline,from:9,to:1}};
  for(let i=0;i<=100;i++)assert.ok([1,3,5,7,9].includes(Player.parametersAt(reverse,i/100).n));
  const continuous={...story,variables:story.variables.map(v=>({...v,discrete:false}))};
  assert.equal(Player.parametersAt(continuous,.1).n,1.8);
  assert.match(Player.markup(continuous,{n:1,fixed:7}),/step="any"/);
});

test('every new story frame evaluates its actual model without inventing fractional indices or states',()=>{
  for(const story of Stories.all())for(let i=0;i<=200;i++){
    const p=Player.parametersAt(story,i/200),r=Structures.evaluate(story.slug,p);
    assert.equal(r.valid,true,story.slug+' at '+i);assert.ok(Number.isFinite(r.output));
    if(['countability','finite-state-machine'].includes(story.slug))assert.ok(Number.isInteger(p[story.timeline.key]));
  }
});

// A small DOM adapter mounts the real controller and its actual follower. It
// tests time/input behavior; HTML parsing and visual layout stay browser checks.
const text=value=>({nodeType:3,nodeName:'#text',nodeValue:String(value),get textContent(){return this.nodeValue;}});
class Element{
  constructor(name='div'){
    this.nodeType=1;this.nodeName=this.tagName=name.toUpperCase();this.childNodes=[];this.dataset={};this.attrs={};this.selectors=new Map();this.groups=new Map();this.listeners=new Map();this.style={};this.className='';this.clientWidth=360;
    this.classList={contains:value=>this.className.split(/\s+/).includes(value),toggle(){},add(){},remove(){}};
  }
  get firstChild(){return this.childNodes[0];}
  get textContent(){return this.childNodes.map(n=>n.textContent).join('');}
  set textContent(value){this.childNodes=[text(value)];}
  set innerHTML(value){this.textContent=value;if(value.includes('data-story-index='))this.groups.set('.life-reader-step',[0,1,2,3].map(()=>new Element()));}
  get innerHTML(){return this.textContent;}
  append(...nodes){this.childNodes.push(...nodes);}
  replaceChildren(...nodes){this.childNodes=nodes;}
  insertBefore(node){this.append(node);}
  before(){} after(){} scrollIntoView(){}
  closest(){return new Element('li');}
  contains(){return false;}
  setAttribute(key,value){this.attrs[key]=String(value);}
  getAttribute(key){return this.attrs[key]??null;}
  querySelector(key){if(!this.selectors.has(key))this.selectors.set(key,new Element());return this.selectors.get(key);}
  querySelectorAll(key){return this.groups.get(key)||[];}
  addEventListener(key,value){this.listeners.set(key,value);}
  removeEventListener(key){this.listeners.delete(key);}
}
function harness(){
  const story=gridStory(),host=new Element(),slider=new Element('input'),created=[],frames=new Map(),seen=[];let now=1000,nextFrame=0;
  slider.dataset.storyParam='n';slider.value='1';
  host.selectors.set('[data-story-param="n"]',slider);host.groups.set('[data-story-param]',[slider]);
  host.groups.set('input[type=range]',[slider,host.querySelector('[data-timeline]')]);host.groups.set('[data-step]',story.steps.map((_,i)=>{const button=host.querySelector('[data-step="'+i+'"]');button.dataset.step=String(i);return button;}));
  const request=callback=>{frames.set(++nextFrame,callback);return nextFrame;},cancel=id=>frames.delete(id);
  const valid=p=>[1,3,5,7,9].includes(p.n)&&p.fixed===7;
  const context=vm.createContext({
    document:{hidden:false,createElement(name){const node=new Element(name);created.push(node);return node;},createTextNode:text,addEventListener(){},removeEventListener(){}},
    matchMedia:()=>({matches:false,addEventListener(){},removeEventListener(){}}),requestAnimationFrame:request,cancelAnimationFrame:cancel,
    AtlasModels:{validateParams:(_slug,p)=>({valid:valid(p),parameters:{...p}})},
    AtlasStoryScenes:{render(_slug,p){assert.ok(valid(p),'every rendered frame is a legal state');seen.push(p.n);return'<svg/>';},values:(_slug,p)=>({...p,output:p.n}),primaryValue:(_slug,p)=>p.n},
    AtlasMotion:{...Motion,createFollower:options=>Motion.createFollower({...options,requestFrame:request,cancelFrame:cancel,now:()=>now})},
    AtlasReadableValues:{...Readable,createPacer:()=>Readable.createPacer({now:()=>now})},AtlasPlayground:{renderInto:(node,html)=>{node.innerHTML=html;}},
    AtlasStoryLinks:{forSlug:()=>({variableLabel:'Position',effectLabel:'A legal selection',steps:story.steps}),quantityFor:(_slug,key)=>({label:key,role:key==='n'?'input':'output'}),paint(){},focusFor:()=>({focus:'input'})},
    AtlasSemanticLinks:{paint(){}},AtlasStoryJourney:Journey,
    AtlasCalculationFlow:{mount:()=>({mark(){},update(){},begin(){},cancel(){},destroy(){}})},AtlasSceneInput:{bind:()=>({destroy(){}})},
    AtlasSceneInspector:{mount:()=>({update(){},settle(){},destroy(){},viewOptions:()=>({})})}
  });
  vm.runInContext(fs.readFileSync(new URL('../src/life-story.js',import.meta.url),'utf8'),context);
  const player=context.AtlasLifeStory.mount(host,{story});
  const advanceFrame=elapsed=>{now+=elapsed;const callbacks=[...frames.values()];frames.clear();for(const callback of callbacks)callback(now);};
  return{host,slider,player,seen,created,frames,advanceFrame,advance(duration){for(let t=0;t<duration;t+=100)advanceFrame(100);}};
}

test('the mounted story clock advances, pauses and resumes without rounding away its elapsed progress',()=>{
  const h=harness();
  try{
    const play=h.host.querySelector('[data-play]');play.onclick();h.advance(500);
    assert.ok(h.player.getParameters().n>1&&h.player.getParameters().n<9,'small time increments accumulate');
    play.onclick();const paused=h.player.getParameters().n;h.advance(500);assert.equal(h.player.getParameters().n,paused);
    play.onclick();h.advance(1200);assert.equal(h.player.getParameters().n,9);assert.equal(play.getAttribute('aria-pressed'),'false');
    for(const value of [1,3,5,7,9])assert.ok(h.seen.includes(value),'the complete trajectory visits '+value);
  }finally{h.player.destroy();assert.equal(h.frames.size,0);}
});

test('manual sliders, timeline scrubbing and per-step playback cannot feed a fractional value to the follower',()=>{
  const h=harness();
  try{
    h.slider.value='6.2';h.slider.oninput();h.advance(300);assert.equal(h.player.getParameters().n,7);
    const timeline=h.host.querySelector('[data-timeline]');timeline.oninput({target:{value:'.13'}});h.advance(300);assert.equal(h.player.getParameters().n,3);
    h.host.querySelector('[data-step="1"]').onclick();h.advance(300);
    const navigation=h.created.find(node=>node.className==='life-step-nav');navigation.querySelector('[data-play-step]').onclick();h.advance(2400);
    assert.equal(h.player.getParameters().n,5);assert.ok(h.seen.length>15);
  }finally{h.player.destroy();}
});

test('throttled frame callbacks preserve the authored replay duration and still publish only legal states',()=>{
  const h=harness();
  try{
    const play=h.host.querySelector('[data-play]');play.onclick();h.advanceFrame(1000);h.advanceFrame(1000);
    assert.equal(h.player.getParameters().n,9);assert.equal(play.getAttribute('aria-pressed'),'false');
  }finally{h.player.destroy();}
});
