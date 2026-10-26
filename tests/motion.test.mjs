import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Motion=require('../src/motion.js');
const Input=require('../src/scene-input.js');

function clock(initial={x:0}, settings={}) {
  let time=0,id=0;
  const pending=new Map(),frames=[];
  const follower=Motion.createFollower({initial,...settings,now:()=>time,
    requestFrame:fn=>{pending.set(++id,fn);return id;},cancelFrame:key=>pending.delete(key),
    onFrame:(value,state)=>frames.push({value,state})});
  return {follower,frames,pending,step(ms){time+=ms;const batch=[...pending.values()];pending.clear();batch.forEach(fn=>fn(time));}};
}

test('display response is monotonic, finite, and independent of frame rate',()=>{
  const a=clock(),b=clock();a.follower.setTarget({x:10});b.follower.setTarget({x:10});
  for(let i=0;i<10;i++)a.step(10);
  for(let i=0;i<20;i++)b.step(5);
  assert.ok(Math.abs(a.follower.current().x-b.follower.current().x)<1e-12);
  assert.ok(a.follower.current().x>8&&a.follower.current().x<10);
  let prior=0;
  for(const {value} of a.frames){assert.ok(value.x>=prior&&value.x<=10);prior=value.x;}
  a.step(140);assert.deepEqual(a.follower.current(),{x:10});assert.equal(a.pending.size,0);
  assert.equal(a.frames.at(-1).state.settled,true,'The final display uses the exact target, not an approximation');
});

test('rapid input targets share one frame and keep caller-owned model state exact',()=>{
  const c=clock({x:0,y:2}),target={x:8,y:6};
  c.follower.setTarget({x:3,y:4});c.follower.setTarget(target);c.follower.setTarget(target);
  assert.equal(c.pending.size,1);assert.deepEqual(target,{x:8,y:6});
  c.step(16);assert.ok(c.follower.current().x>0&&c.follower.current().x<8);
  c.follower.settle();assert.deepEqual(c.follower.current(),target);assert.equal(c.pending.size,0);
  const snapshot=c.follower.current();snapshot.x=900;assert.equal(c.follower.current().x,8);
});

test('settle and immediate targets synchronously align displays for pinning and capture',()=>{
  const c=clock();c.follower.setTarget({x:100});c.step(16);
  c.follower.settle();assert.equal(c.frames.at(-1).value.x,100);assert.equal(c.pending.size,0);
  c.follower.setTarget({x:25},{immediate:true});assert.equal(c.frames.at(-1).value.x,25);
  assert.equal(c.pending.size,0);
});

test('categorical changes and invalid numeric targets bypass interpolation',()=>{
  const c=clock({x:1,order:'first'});
  c.follower.setTarget({x:10,order:'second'});assert.deepEqual(c.follower.current(),{x:10,order:'second'});
  c.follower.setTarget({x:NaN,order:'second'});assert.ok(Number.isNaN(c.follower.current().x));
  c.follower.setTarget({x:2,order:'second'});assert.equal(c.follower.current().x,2);
  assert.equal(c.pending.size,0,'Undefined states never start an animation loop');
});

test('a domain guard prevents interpolating logarithm bases through one',()=>{
  const c=clock({base:2},{canInterpolate:(a,b)=>(a.base-1)*(b.base-1)>0});
  c.follower.setTarget({base:.5});assert.equal(c.follower.current().base,.5);assert.equal(c.pending.size,0);
  c.follower.setTarget({base:.75});c.step(16);assert.ok(c.follower.current().base>.5&&c.follower.current().base<.75);
});

test('reduced motion takes effect immediately and disposal cancels pending work',()=>{
  let reduced=true;const c=clock({x:0},{reducedMotion:()=>reduced});
  c.follower.setTarget({x:4});assert.equal(c.follower.current().x,4);assert.equal(c.pending.size,0);
  reduced=false;c.follower.setTarget({x:10});c.step(16);assert.equal(c.pending.size,1);
  reduced=true;c.step(16);assert.equal(c.follower.current().x,10);assert.equal(c.pending.size,0);
  reduced=false;c.follower.setTarget({x:20});c.follower.destroy();assert.equal(c.pending.size,0);
  const length=c.frames.length;c.follower.setTarget({x:30});c.follower.settle();c.step(16);assert.equal(c.frames.length,length);
});

test('gradient light follows input without changing IDs, accumulating opacity loss, or moving at rest',()=>{
  const node=(attributes={})=>({attributes:{...attributes},getAttribute(key){return this.attributes[key]??null;},setAttribute(key,value){this.attributes[key]=value;}});
  const stop=node({'stop-opacity':'.5'}),gradient=node({id:'scene-fill'});
  gradient.querySelectorAll=()=>[stop];const container={querySelectorAll:()=>[gradient]};
  Motion.paintGradients(container,{x:2},1);const before={...gradient.attributes},opacity=stop.attributes['stop-opacity'];
  Motion.paintGradients(container,{x:2},1);assert.deepEqual(gradient.attributes,before);assert.equal(stop.attributes['stop-opacity'],opacity);
  stop.setAttribute('stop-opacity','.8');Motion.paintGradients(container,{x:2},1);
  assert.ok(Number(stop.attributes['stop-opacity'])>.7,'A changed renderer opacity is retained');
  Motion.paintGradients(container,{x:4},2);assert.notEqual(gradient.attributes.x1,before.x1);assert.equal(gradient.attributes.id,'scene-fill');
  const resting={...gradient.attributes};Motion.paintGradients(container,{x:100},100,true);assert.deepEqual(gradient.attributes,resting);
});

test('pointer movement keeps sub-step precision while the keyboard retains authored steps',()=>{
  const spec={min:-1,max:1,x0:0,x1:400,step:.1,mode:'absolute'};
  assert.equal(Input.pointerValue(spec,0,200,201),.004999999999999893);
  assert.equal(Input.dragValue(spec,0,200,201),0);
  assert.equal(Input.keyValue(spec,0,'ArrowRight'),.1);
  assert.equal(Input.pointerValue({...spec,mode:'relative'},.3,200,201),.305);
  assert.equal(Input.pointerValue(spec,0,200,1000),1);
  assert.equal(Input.pointerValue(spec,0,200,NaN),null);
});

function stageHarness() {
  const handlers={},pending=new Map(),changes=[];let next=0,end=0;
  const handle={dataset:{dragParam:'x',dragMin:'0',dragMax:'10',dragX0:'0',dragX1:'100',dragStep:'1'},focus(){}};
  handle.closest=()=>handle;
  const svg={getScreenCTM:()=>({inverse:()=>({})}),createSVGPoint:()=>({matrixTransform(){return {x:this.x};}})};
  const stage={dataset:{},contains:node=>node===handle,querySelector:()=>svg,setPointerCapture(){},hasPointerCapture:()=>true,releasePointerCapture(){},
    addEventListener:(type,fn)=>{handlers[type]=fn;},removeEventListener:type=>{delete handlers[type];}};
  const binding=Input.bind(stage,{getValue:()=>0,onChange:(key,value)=>changes.push(value),onEnd:()=>end++,
    requestFrame:fn=>{pending.set(++next,fn);return next;},cancelFrame:id=>pending.delete(id)});
  const event=(type,x)=>({type,target:handle,button:0,pointerId:1,clientX:x,clientY:0,preventDefault(){}});
  return {stage,pending,changes,binding,end:()=>end,event(type,x){handlers[type](event(type,x));},flush(){const queue=[...pending.values()];pending.clear();queue.forEach(fn=>fn());}};
}
test('pointer events coalesce to one render and pointer-up flushes the exact final position',()=>{
  const h=stageHarness();h.event('pointerdown',10);h.event('pointermove',21);h.event('pointermove',32.5);
  assert.equal(h.pending.size,1);assert.deepEqual(h.changes,[]);
  h.flush();assert.deepEqual(h.changes,[3.25]);
  h.event('pointermove',40);h.event('pointerup',47.25);
  assert.equal(h.pending.size,0);assert.equal(h.changes.at(-1),4.725);assert.equal(h.end(),1);assert.equal(h.stage.dataset.dragging,undefined);
  h.binding.destroy();
});
test('destroying a dragged scene cancels queued input and releases its interaction state',()=>{
  const h=stageHarness();h.event('pointerdown',10);h.event('pointermove',50);
  h.binding.destroy();assert.equal(h.pending.size,0);assert.equal(h.stage.dataset.dragging,undefined);h.flush();assert.deepEqual(h.changes,[]);
});
