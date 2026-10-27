import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Flow=require('../src/calculation-flow.js');
const Stories=require('../src/story-library.js');
const Scenes=require('../src/story-scenes.js');
const Readable=require('../src/readable-values.js');
const cardCount=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).length;

test('calculation descriptions load offline and resolve against all installed shared models',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/calculation-flow.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasCalculationFlow.phaseAt,'function');
  assert.equal(Stories.all().length,cardCount);
  for(const story of Stories.all()){
    const stages=Flow.stages(story),values=Scenes.values(story.slug,story.parameters);
    assert.deepEqual(stages.map(s=>s.role),['input','intermediate','output']);
    for(const stage of stages){assert.ok(stage.label.length>3);assert.ok(stage.description.length>3);for(const part of Flow.parts(stage.template))if(part.key)assert.ok(Number.isFinite(values[part.key])||typeof values[part.key]==='string'&&values[part.key].trim().length>0,`${story.slug}.${part.key}`);}
  }
  assert.deepEqual(Flow.parts('x={{x}}; literal {{x + 1}}'),[{text:'x='},{key:'x'},{text:'; literal {{x + 1}}'}]);
});

class Node {
  constructor(type=1,value=''){this.nodeType=type;this.nodeValue=type===3?value:null;this.childNodes=[];this.attrs={};}
  append(...nodes){this.childNodes.push(...nodes);}
  setAttribute(key,value){this.attrs[key]=String(value);}
  getAttribute(key){return this.attrs[key]??null;}
  get firstChild(){return this.childNodes[0]||null;}
  get textContent(){return this.nodeType===3?this.nodeValue:this.childNodes.map(n=>n.textContent).join('');}
  set textContent(value){this.childNodes=[new Node(3,String(value))];}
  dataset={};
}
function fixture(reduced=false,story=Stories.forSlug('function-composition')){
  const original=globalThis.document;globalThis.document={createElement:()=>new Node(),createTextNode:value=>new Node(3,value)};
  const host=new Node(),frames=new Map(),phases=[];let time=0,next=0;
  const controller=Flow.mount(host,{story,readable:Readable,quantityFor:key=>require('../src/story-links.js').quantityFor(story.slug,key),formatLiteral:require('../src/life-story.js').formulaLiteral,onPhase:stage=>phases.push(stage.role),reducedMotion:()=>reduced,now:()=>time,requestFrame:fn=>{frames.set(++next,fn);return next;},cancelFrame:id=>frames.delete(id)});
  return {host,controller,phases,frames,advance(at){time=at;const callbacks=[...frames.values()];frames.clear();callbacks.forEach(fn=>fn(time));},dispose(){controller.destroy();globalThis.document=original;}};
}

test('truth-valued calculation stages display semantic labels through measurement changes',()=>{
  const story=Stories.forSlug('logical-connectives'),f=fixture(false,story);
  try{
    f.controller.update(Scenes.values(story.slug,{length:3,width:5,operation:'and'}),{settled:true});
    assert.match(f.host.textContent,/P = False; Q = True/);
    assert.match(f.host.textContent,/P∧Q = False/);
    f.controller.update(Scenes.values(story.slug,{length:9,width:5,operation:'and'}),{settled:true});
    assert.match(f.host.textContent,/P = True; Q = True/);
    assert.match(f.host.textContent,/P∧Q = True/);
    assert.doesNotMatch(f.host.textContent,/Unavailable|undefined|NaN/);
  }finally{f.dispose();}
});

test('trace follows readable input, operation and shape phases then stops requesting frames',()=>{
  const f=fixture();try{
    f.controller.begin();assert.deepEqual(f.phases,['input']);
    f.advance(649);assert.deepEqual(f.phases,['input']);
    f.advance(650);assert.deepEqual(f.phases,['input','intermediate']);
    f.advance(1399);assert.equal(f.phases.length,2);
    f.advance(1400);assert.deepEqual(f.phases,['input','intermediate','output']);assert.equal(f.frames.size,0);
    f.controller.begin();f.controller.cancel();assert.equal(f.frames.size,0);
  }finally{f.dispose();}
});

test('an ongoing gesture does not restart the trace; replay explicitly starts a new reading sequence',()=>{
  const f=fixture();try{
    f.controller.begin();f.advance(700);f.controller.begin();assert.deepEqual(f.phases,['input','intermediate']);
    f.controller.begin({restart:true});assert.deepEqual(f.phases,['input','intermediate','input']);assert.equal(f.frames.size,1);
    f.controller.destroy();assert.equal(f.frames.size,0);f.controller.begin();assert.equal(f.frames.size,0);
  }finally{f.dispose();}
});

test('reduced motion shows the result directly without starting a clock',()=>{
  const f=fixture(true);try{f.controller.begin();assert.deepEqual(f.phases,['output']);assert.equal(f.frames.size,0);}finally{f.dispose();}
});

test('calculation readings keep number nodes and distinguish moving approximations from exact definitions',()=>{
  const story=Stories.forSlug('probability'),f=fixture(false,story);
  try{
    const rows=f.host.childNodes[1].childNodes,expression=rows[2].childNodes[1];
    f.controller.update(Scenes.values(story.slug,{chance:.333}),{settled:false});
    assert.match(expression.textContent,/E\[K\] = 6 × 0\.33 ≈ 2/);
    const valueNode=expression.childNodes.at(-2).firstChild;
    f.controller.update(Scenes.values(story.slug,{chance:.5}),{settled:true});
    assert.equal(expression.textContent,'E[K] = 6 × 0.5 = 3 seedlings');
    assert.equal(expression.childNodes.at(-2).firstChild,valueNode,'The number remains in the existing text node');
  }finally{f.dispose();}
});
