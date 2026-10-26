import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require=createRequire(import.meta.url);
const Panel=require('../src/workspace-panel.js');

// A scoped DOM adapter for the surface this component actually owns. The math,
// connection state machine, and number formatter are the production modules.
class Node {
  constructor(tag='span') {
    this.tagName=tag.toUpperCase();this.nodeType=1;this.childNodes=[];
    this.dataset={};this.hidden=false;this.disabled=false;this.listeners=new Map();this._value='';
  }
  get firstChild(){return this.childNodes[0]||null;}
  get textContent(){return this.childNodes.map(child=>child.nodeType===3?child.nodeValue:child.textContent).join('');}
  set textContent(value){this.childNodes=[{nodeType:3,nodeValue:String(value)}];}
  get value(){return this._value;}
  set value(value){
    const next=String(value);
    this._value=this.tagName==='SELECT'&&!this.childNodes.some(child=>child.value===next)?'':next;
  }
  replaceChildren(...children){this.childNodes=[];this._value='';for(const child of children)this.append(child);}
  append(child){this.childNodes.push(child);if(this.tagName==='SELECT'&&this.childNodes.length===1)this._value=child.value;}
  addEventListener(event,handler){if(!this.listeners.has(event))this.listeners.set(event,new Set());this.listeners.get(event).add(handler);}
  removeEventListener(event,handler){this.listeners.get(event)?.delete(handler);}
  trigger(event){if(event==='click'&&(this.disabled||this.hidden))return;for(const handler of [...(this.listeners.get(event)||[])])handler({target:this,preventDefault(){}});}
  listenerCount(){return [...this.listeners.values()].reduce((total,handlers)=>total+handlers.size,0);}
}

function timers(t){
  let next=0,now=0;const pending=new Map(),cancelled=[];
  t.mock.method(globalThis.performance,'now',()=>now);
  t.mock.method(globalThis,'setTimeout',(callback,delay)=>{const id=++next;pending.set(id,{callback,delay});return id;});
  t.mock.method(globalThis,'clearTimeout',id=>{cancelled.push(id);pending.delete(id);});
  return {pending,cancelled,flush(){now+=250;for(const[id,item]of [...pending]){pending.delete(id);item.callback();}}};
}

function fixture({sourceType='length',targetType=sourceType,sourceUnit='m',targetUnit=sourceUnit,value=4,targetValue=1,max=10}={}){
  const selectors=['data-link-direction','data-link-source','data-link-target','data-connect','data-disconnect','data-source-label','data-target-label','data-link-status','data-source-meaning','data-target-meaning','data-source-reading','data-target-reading'];
  const nodes=Object.fromEntries(selectors.map(name=>[name,new Node(name.startsWith('data-link-')&&!name.endsWith('status')?'select':name==='data-connect'||name==='data-disconnect'?'button':'span')]));
  const direction=nodes['data-link-direction'];
  for(const value of ['forward','reverse']){const option=new Node('option');option.value=value;direction.append(option);}
  direction.value='forward';
  const host=new Node('section');
  host.matches=selector=>selector==='.workspace-linker';
  host.querySelector=selector=>nodes[selector.slice(1,-1)]||null;
  host.ownerDocument={createElement:tag=>new Node(tag)};
  const validateSource=parameters=>({valid:Number.isFinite(parameters.value),parameters:{...parameters},errors:[]});
  const validateTarget=parameters=>({valid:Number.isFinite(parameters.width)&&parameters.width>=0&&parameters.width<=max,parameters:{...parameters},errors:[{message:'Use a width from 0 to '+max+'.'}]});
  const source={id:'source-module',version:'1',ports:[{id:'output:output',label:'Calculated size',direction:'output',key:'output',type:sourceType,unit:sourceUnit,description:'The calculated size from the first experiment.'}],validateParams:validateSource,evaluate:parameters=>({valid:true,output:parameters.value})};
  const target={id:'target-module',version:'1',ports:[{id:'input:width',label:'Receiving size',direction:'input',key:'width',type:targetType,unit:targetUnit,description:'The size used to construct the second shape.'}],validateParams:validateTarget,evaluate:parameters=>({valid:true,output:parameters.width*parameters.width})};
  let applies=0,changes=0;
  const slots=[
    {id:'a',label:'A',module:source,parameters:{value},motion:'paused',indicator:new Node()},
    {id:'b',label:'B',module:target,parameters:{width:targetValue},motion:'paused',indicator:new Node()}
  ];
  slots[1].controller={applyParameters(parameters){const checked=target.validateParams(parameters);if(checked.valid){applies++;slots[1].parameters={...checked.parameters};}return checked;}};
  const panel=Panel.mount(host,{getSlots:()=>slots,onChange:()=>{changes++;}});
  return {host,nodes,slots,panel,get applies(){return applies;},get changes(){return changes;},connect(){nodes['data-connect'].trigger('click');}};
}

test('an explicit connection propagates source changes and shows sending/receiving badges',t=>{
  const view=fixture();t.after(()=>view.panel.destroy());
  assert.equal(view.nodes['data-connect'].disabled,false);
  assert.match(view.nodes['data-link-status'].textContent,/Ready to connect/);
  assert.equal(view.slots[1].parameters.width,1,'Preview leaves both modules independent');
  view.connect();
  assert.equal(view.panel.getState().phase,'linked');
  assert.equal(view.slots[1].parameters.width,4);
  assert.equal(view.applies,1);
  assert.equal(view.changes,1);
  assert.match(view.slots[0].indicator.textContent,/Sending to B/);
  assert.match(view.slots[1].indicator.textContent,/Following A.*Calculated size.*Receiving size/);
  assert.equal(view.slots[0].indicator.hidden,false);
  assert.equal(view.slots[1].indicator.hidden,false);
  view.slots[0].parameters.value=6;view.panel.refresh('a');
  assert.equal(view.slots[1].parameters.width,6);
  assert.equal(view.applies,2);
  assert.match(view.nodes['data-link-status'].textContent,/Connected\. B follows A/);
  assert.equal(view.nodes['data-connect'].hidden,true);
  assert.equal(view.nodes['data-disconnect'].hidden,false);
});

test('type and unit mismatches disable Connect and explain the specific incompatibility',()=>{
  for(const [options,reason]of [[{targetType:'area'},/different types/],[{targetUnit:'px'},/different units.*No conversion/]]){
    const view=fixture(options);
    try{
      assert.equal(view.nodes['data-connect'].disabled,true);
      assert.match(view.nodes['data-link-status'].textContent,reason);
      view.connect();
      assert.equal(view.panel.getState().phase,'idle');
      assert.equal(view.slots[1].parameters.width,1);
      assert.equal(view.applies,0);
      assert.ok(view.slots.every(slot=>slot.indicator.hidden));
    }finally{view.panel.destroy();}
  }
});

test('a value outside the receiving range holds its last valid shape and resumes automatically',t=>{
  const view=fixture({value:5,max:10});t.after(()=>view.panel.destroy());view.connect();
  view.slots[0].parameters.value=20;view.panel.refresh('a');
  assert.equal(view.panel.getState().phase,'blocked');
  assert.equal(view.slots[1].parameters.width,5);
  assert.equal(view.applies,1);
  assert.match(view.nodes['data-link-status'].textContent,/Link paused: Use a width from 0 to 10.*Last receiving value kept.*resume/);
  assert.match(view.slots[1].indicator.textContent,/Link paused.*last receiving value kept/);
  view.slots[0].parameters.value=7;view.panel.refresh('a');
  assert.equal(view.panel.getState().phase,'linked');
  assert.equal(view.slots[1].parameters.width,7);
  assert.equal(view.applies,2);
  assert.equal(view.changes,1,'Resuming requires no second Connect click');
  assert.match(view.slots[1].indicator.textContent,/Following A/);
});

test('editing the receiving value detaches the link and later source changes leave that edit alone',t=>{
  const view=fixture({value:5});t.after(()=>view.panel.destroy());view.connect();
  view.slots[1].parameters.width=3;view.panel.refresh('b');
  assert.equal(view.panel.getState().phase,'idle');
  assert.equal(view.panel.getState().code,'receiving_value_edited');
  assert.equal(view.slots[1].parameters.width,3);
  assert.match(view.nodes['data-link-status'].textContent,/Receiving value edited.*independent/);
  assert.ok(view.slots.every(slot=>slot.indicator.hidden));
  view.slots[0].parameters.value=8;view.panel.refresh('a');
  assert.equal(view.slots[1].parameters.width,3);
  assert.equal(view.applies,1);
  assert.equal(view.nodes['data-connect'].hidden,false);
});

test('quantity descriptions and unit labels remain readable while moving values update at a reading pace',t=>{
  const clock=timers(t),view=fixture({sourceType:'area',sourceUnit:'m2',value:1/3});t.after(()=>view.panel.destroy());
  assert.match(view.nodes['data-link-source'].childNodes[0].textContent,/Result.*Calculated size.*m²/);
  assert.match(view.nodes['data-link-target'].childNodes[0].textContent,/Receiving size.*m²/);
  assert.equal(view.nodes['data-source-meaning'].textContent,'From A: The calculated size from the first experiment.');
  assert.equal(view.nodes['data-target-meaning'].textContent,'Into B: The size used to construct the second shape.');
  assert.match(view.nodes['data-source-reading'].textContent,/0\.333333 m²/);
  view.connect();
  const previous=view.nodes['data-source-reading'].textContent;
  const readingNode=view.nodes['data-source-reading'].firstChild;
  view.slots[0].motion='dragging';view.slots[0].parameters.value=1.23456789;view.panel.refresh('a');
  assert.equal(view.slots[1].parameters.width,1.23456789,'Propagation uses full precision immediately');
  assert.equal(view.nodes['data-source-reading'].textContent,previous,'Text waits for the reading interval');
  assert.equal(clock.pending.size,1);
  assert.equal([...clock.pending.values()][0].delay,250);
  clock.flush();
  assert.match(view.nodes['data-source-reading'].textContent,/1\.23 m²/);
  assert.equal(view.nodes['data-source-reading'].firstChild,readingNode,'Updating text retains its existing text node');
  view.slots[0].motion='paused';view.panel.refresh('a');
  assert.match(view.nodes['data-source-reading'].textContent,/1\.23457 m²/,'Settled numbers show useful precision');
});

test('readings regain settled precision after hosts finish following without another parameter event',t=>{
  const clock=timers(t),view=fixture({value:1.23456789});t.after(()=>view.panel.destroy());
  view.slots[0].motion='dragging';view.slots[1].motion='interacting';view.connect();
  assert.match(view.nodes['data-source-reading'].textContent,/1\.23 /);
  assert.equal(clock.pending.size,1,'A forced moving reading still schedules one final precision check');
  view.slots[0].motion='paused';view.slots[1].motion='paused';clock.flush();
  assert.match(view.nodes['data-source-reading'].textContent,/1\.23457 /);
  assert.match(view.nodes['data-target-reading'].textContent,/1\.23457 /);
  assert.equal(clock.pending.size,0,'Settled hosts require no background text refresh');
});

test('route cleanup removes listeners and pending readings, hides badges, and stops propagation',t=>{
  const clock=timers(t),view=fixture();
  const listenerCount=()=>Object.values(view.nodes).reduce((total,node)=>total+node.listenerCount(),0);
  assert.equal(listenerCount(),5);
  view.connect();view.slots[0].motion='dragging';view.slots[0].parameters.value=6;view.panel.refresh('a');
  assert.equal(view.slots[1].parameters.width,6);
  assert.equal(clock.pending.size,1);
  const scheduled=[...clock.pending.values()][0].callback;
  const reading=view.nodes['data-source-reading'].textContent,applies=view.applies,changes=view.changes;
  view.panel.destroy();view.panel.destroy();
  assert.equal(listenerCount(),0);
  assert.equal(clock.pending.size,0);
  assert.equal(clock.cancelled.length,1);
  assert.ok(view.slots.every(slot=>slot.indicator.hidden));
  view.slots[0].parameters.value=9;view.panel.refresh('a');
  view.nodes['data-disconnect'].trigger('click');
  scheduled();
  assert.equal(view.panel.getState().code,'destroyed');
  assert.equal(view.slots[1].parameters.width,6);
  assert.equal(view.applies,applies);
  assert.equal(view.changes,changes);
  assert.equal(view.nodes['data-source-reading'].textContent,reading);
});

test('restoring a saved panel connection preserves its values without applying or notifying',t=>{
  const view=fixture({value:4,targetValue:4});t.after(()=>view.panel.destroy());
  const restored=view.panel.restoreConnection({sourceSlotId:'a',sourcePortId:'output:output',targetSlotId:'b',targetPortId:'input:width'});
  assert.equal(restored.restored,true);
  assert.equal(view.panel.getState().phase,'linked');
  assert.equal(view.nodes['data-link-direction'].value,'forward');
  assert.equal(view.nodes['data-link-source'].value,'output:output');
  assert.equal(view.nodes['data-link-target'].value,'input:width');
  assert.equal(view.applies,0);
  assert.equal(view.changes,0,'A restore is not another user Connect event');
  assert.match(view.slots[1].indicator.textContent,/Following A/);
  view.panel.refresh();
  assert.equal(view.nodes['data-link-source'].value,'output:output','Refresh keeps the saved selected quantity');
  view.slots[0].parameters.value=6;view.panel.refresh('a');
  assert.equal(view.slots[1].parameters.width,6);
  assert.equal(view.applies,1);
});

test('restored paused links keep their saved receiving reading until a valid source resumes them',t=>{
  const view=fixture({value:20,targetValue:4,max:10});t.after(()=>view.panel.destroy());
  const restored=view.panel.restoreConnection({sourceSlotId:'a',sourcePortId:'output:output',targetSlotId:'b',targetPortId:'input:width'});
  assert.equal(restored.restored,true);
  assert.equal(view.host.dataset.linkState,'blocked');
  assert.match(view.nodes['data-link-status'].textContent,/Link paused.*Last receiving value kept/);
  assert.match(view.nodes['data-target-reading'].textContent,/4 m/);
  assert.equal(view.slots[1].parameters.width,4);
  assert.equal(view.applies,0);
  view.slots[0].parameters.value=5;view.panel.refresh('a');
  assert.equal(view.host.dataset.linkState,'linked');
  assert.equal(view.slots[1].parameters.width,5);
});

test('reverse restoration selects the exact saved ports instead of the first compatible alternative',t=>{
  const view=fixture({value:4,targetValue:2});t.after(()=>view.panel.destroy());
  view.slots[0].module.ports.push({id:'input:value',key:'value',label:'First input',direction:'input',type:'length',unit:'m'});
  view.slots[1].module.ports.push({id:'output:output',key:'output',label:'Squared output',direction:'output',type:'length',unit:'m'});
  const restored=view.panel.restoreConnection({sourceSlotId:'b',sourcePortId:'output:output',targetSlotId:'a',targetPortId:'input:value'});
  assert.equal(restored.restored,true);
  assert.equal(restored.phase,'linked');
  assert.equal(view.nodes['data-link-direction'].value,'reverse');
  assert.equal(view.nodes['data-source-label'].textContent,'From B');
  assert.equal(view.nodes['data-target-label'].textContent,'Into A');
  assert.equal(view.nodes['data-link-source'].value,'output:output');
  assert.equal(view.nodes['data-link-target'].value,'input:value');
  assert.match(view.slots[0].indicator.textContent,/Following B.*Squared output.*First input/);
  assert.equal(view.applies,0);
  assert.equal(view.changes,0);
});

test('failed restoration leaves current controls and connection intact, and null restores independence',t=>{
  const view=fixture();t.after(()=>view.panel.destroy());view.connect();
  const before=view.panel.getState(),source=view.nodes['data-link-source'].value,target=view.nodes['data-link-target'].value;
  const invalid=view.panel.restoreConnection({sourceSlotId:'b',sourcePortId:'missing',targetSlotId:'a',targetPortId:'missing'});
  assert.equal(invalid.restored,false);
  assert.deepEqual(view.panel.getState(),before);
  assert.equal(view.nodes['data-link-direction'].value,'forward');
  assert.equal(view.nodes['data-link-source'].value,source);
  assert.equal(view.nodes['data-link-target'].value,target);
  let reads=0;
  const accessor={sourcePortId:'output:output',targetSlotId:'b',targetPortId:'input:width'};
  Object.defineProperty(accessor,'sourceSlotId',{enumerable:true,get(){reads++;return'a';}});
  assert.equal(view.panel.restoreConnection(accessor).restored,false);
  assert.equal(reads,0);
  class NotPlain { constructor(){Object.assign(this,{sourceSlotId:'a',sourcePortId:'output:output',targetSlotId:'b',targetPortId:'input:width'});} }
  assert.equal(view.panel.restoreConnection(new NotPlain()).error.code,'invalid_connection');
  assert.deepEqual(view.panel.getState(),before);
  assert.equal(view.applies,1);
  assert.equal(view.changes,1);
  const independent=view.panel.restoreConnection(null);
  assert.equal(independent.restored,true);
  assert.equal(view.panel.getState().phase,'idle');
  assert.ok(view.slots.every(slot=>slot.indicator.hidden));
  assert.equal(view.changes,1);
  view.panel.destroy();
  assert.equal(view.panel.restoreConnection(null).error.code,'destroyed');
});
