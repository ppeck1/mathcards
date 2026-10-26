import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const Library=require('../src/workspace-library.js');
const Store=require('../src/workspace-store.js');
const Modules=require('../src/playground-modules.js');
const clone=value=>JSON.parse(JSON.stringify(value));

class Node{
  constructor(tag='span'){this.tagName=tag.toUpperCase();this.childNodes=[];this.listeners=new Map();this.hidden=false;this.disabled=false;this.dataset={};this._value='';this.open=false;}
  get textContent(){return this.childNodes.map(child=>child.nodeType===3?child.nodeValue:child.textContent).join('');}
  set textContent(value){this.childNodes=[{nodeType:3,nodeValue:String(value)}];}
  get value(){return this._value;}
  set value(value){const next=String(value);this._value=this.tagName==='SELECT'&&!this.childNodes.some(child=>child.value===next)?'':next;}
  set innerHTML(_value){throw new Error('Workspace prose must never be parsed as markup.');}
  append(node){this.childNodes.push(node);if(this.tagName==='SELECT'&&this.childNodes.length===1)this._value=node.value;}
  replaceChildren(...nodes){this.childNodes=[];this._value='';for(const node of nodes)this.append(node);}
  addEventListener(event,handler){if(!this.listeners.has(event))this.listeners.set(event,new Set());this.listeners.get(event).add(handler);}
  removeEventListener(event,handler){this.listeners.get(event)?.delete(handler);}
  trigger(event){if(event==='click'&&(this.hidden||this.disabled))return Promise.resolve();return Promise.all([...(this.listeners.get(event)||[])].map(handler=>handler({target:this})));}
  click(){return this.trigger('click');}
  listenerCount(){return [...this.listeners.values()].reduce((sum,listeners)=>sum+listeners.size,0);}
}
function disk(initial=null){const data=new Map(initial?[ [Store.storageKey,initial] ]:[]);return{getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value)};}
function request(title='A measured connection'){
  const slot=(id,moduleId,extra={})=>{const module=Modules.get(moduleId);return{id,module_id:moduleId,module_version:module.version,parameters:module.defaults(),view:module.defaultView,camera:.65,baseline:null,inspector:null,...extra};};
  return{title,slots:[slot('work-0','pythagorean-theorem',{camera:.8}),slot('work-1','quadratic-optimization',{view:'graph',baseline:{width:4,perimeter:20}})],connection:{sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:width'}};
}
function fixture({store=Store.createStore({storage:disk(),modules:Modules}),capture,onRestore,selectedId}={}){
  const names=['name','details','summary','select','save','restore','delete','undo','export','import','file','recovery','status','warning','compatibility','raw','raw-details'];
  const nodes=Object.fromEntries(names.map(name=>[name,new Node(name==='select'?'select':['save','restore','delete','undo','export','import','recovery'].includes(name)?'button':['details','raw-details'].includes(name)?'details':name==='name'||name==='file'?'input':'span')]));
  const host=new Node('section');host.matches=selector=>selector==='.workspace-library';host.querySelector=selector=>nodes[selector.slice('[data-workspace-'.length,-1)]||null;host.ownerDocument={createElement:tag=>new Node(tag)};
  const downloads=[],messages=[],restores=[];let captures=0;
  const panel=Library.mount(host,{store,selectedId,capture:()=>{captures++;return capture?capture():request();},onRestore:workspace=>{restores.push(workspace);return onRestore?onRestore(workspace):{ok:true};},download:(...args)=>downloads.push(args),onMessage:message=>messages.push(message)});
  return{host,nodes,store,panel,downloads,messages,restores,get captures(){return captures;},save:()=>nodes.save.trigger('click')};
}

test('saving captures the complete workspace once and restores its copied state through the host callback',async t=>{
  const storage=disk(),store=Store.createStore({storage,modules:Modules}),view=fixture({store});t.after(()=>view.panel.destroy());
  assert.equal(view.nodes.details.open,false);assert.equal(view.nodes.restore.disabled,true);
  view.nodes.name.value='<img src=x onerror=alert(1)> saved comparison';await view.save();
  assert.equal(view.captures,1);assert.equal(store.list().length,1);assert.equal(view.nodes.details.open,true);
  const saved=store.list()[0];assert.equal(saved.title,view.nodes.name.value);assert.equal(view.nodes.select.childNodes[0].textContent,saved.title);
  assert.equal(view.nodes.summary.textContent,'Saved workspaces (1)');assert.equal(view.nodes.restore.disabled,false);
  assert.deepEqual(Store.createStore({storage,modules:Modules}).get(saved.id),saved,'A fresh store sees the same views, pins, modules, and link');
  await view.nodes.restore.trigger('click');assert.deepEqual(view.restores,[saved]);assert.match(view.nodes.status.textContent,/Both panels are paused/);
  view.restores[0].slots[0].parameters.a=99;assert.equal(store.get(saved.id).slots[0].parameters.a,3,'The restoring host receives a copy');
});

test('unavailable saved revisions stay readable and exportable while Restore is disabled',async t=>{
  const seed=Store.createStore({storage:disk(),modules:Modules});assert.equal(seed.add(request()).ok,true);
  const backup=JSON.parse(seed.exportBackup());backup.workspaces[0].slots[0].module_version='old-revision';
  const book=Store.createStore({storage:disk(),modules:Modules});assert.equal(book.importBackup(backup).ok,true);
  const view=fixture({store:book});t.after(()=>view.panel.destroy());
  assert.equal(view.nodes.restore.disabled,true);assert.match(view.nodes.compatibility.textContent,/matching saved module version is unavailable/);
  assert.match(view.nodes.raw.textContent,/old-revision/);await view.nodes.restore.trigger('click');assert.equal(view.restores.length,0);
  await view.nodes.export.trigger('click');assert.deepEqual(JSON.parse(view.downloads[0][1]),backup);assert.equal(view.downloads[0][2],'application/json');
});

test('backups round-trip through the importer without applying a workspace, and oversize files are rejected before reading',async t=>{
  const source=fixture(),target=fixture();t.after(()=>{source.panel.destroy();target.panel.destroy();});await source.save();await source.nodes.export.trigger('click');
  target.nodes.file.files=[{size:source.downloads[0][1].length,text:async()=>source.downloads[0][1]}];await target.nodes.file.trigger('change');
  assert.deepEqual(target.store.list(),source.store.list());assert.equal(target.restores.length,0);assert.equal(target.nodes.details.open,true);assert.match(target.nodes.status.textContent,/Choose Restore workspace/);
  const before=target.store.exportBackup();let reads=0;target.nodes.file.files=[{size:8*1024*1024+1,text:async()=>{reads++;return'{}';}}];await target.nodes.file.trigger('change');
  assert.equal(reads,0);assert.equal(target.store.exportBackup(),before);assert.match(target.nodes.status.textContent,/smaller than 8 MB/);
  target.nodes.file.files=[{size:12,text:async()=>'{not-json'}];await target.nodes.file.trigger('change');assert.equal(target.store.exportBackup(),before);assert.equal(target.nodes.status.dataset.error,'true');
});

test('deletion undo restores the same record and cannot overwrite a newer externally added workspace',async t=>{
  const view=fixture();t.after(()=>view.panel.destroy());await view.save();const original=view.store.list()[0];
  await view.nodes.delete.trigger('click');assert.equal(view.store.list().length,0);assert.equal(view.nodes.undo.hidden,false);
  await view.nodes.undo.trigger('click');assert.deepEqual(view.store.get(original.id),original);assert.equal(view.nodes.undo.hidden,true);
  await view.nodes.delete.trigger('click');const newer=view.store.add(request('Newer work'));assert.equal(newer.ok,true);
  await view.nodes.undo.trigger('click');assert.equal(view.store.list().length,1);assert.equal(view.store.get(newer.workspace.id).title,'Newer work');assert.equal(view.store.get(original.id),null);assert.match(view.nodes.status.textContent,/cannot replace newer records/);
});

test('destroying controls cancels late import commits and safely ignores a restore that rebuilds the interface',async()=>{
  const source=fixture();await source.save();const raw=source.store.exportBackup();source.panel.destroy();
  let finish;const reading=new Promise(resolve=>{finish=resolve;});const view=fixture();view.nodes.file.files=[{size:raw.length,text:()=>reading}];
  const pending=view.nodes.file.trigger('change'),messageCount=view.messages.length;view.panel.destroy();finish(raw);await pending;
  assert.equal(view.store.list().length,0);assert.equal(view.messages.length,messageCount);assert.equal(Object.values(view.nodes).reduce((sum,node)=>sum+node.listenerCount(),0),0);
  await view.nodes.save.trigger('click');assert.equal(view.captures,0);
  let restoredView;restoredView=fixture({onRestore:()=>{restoredView.panel.destroy();return{ok:true};}});await restoredView.save();const before=restoredView.nodes.status.textContent;
  await restoredView.nodes.restore.trigger('click');assert.equal(restoredView.restores.length,1);assert.equal(restoredView.nodes.status.textContent,before,'A replaced component never writes its old nodes after restore');
});

test('corrupt stored bytes remain available through recovery and capture errors never add a record',async t=>{
  const book=Store.createStore({storage:disk('{broken workspace bytes'),modules:Modules}),view=fixture({store:book,capture:()=>{throw new Error('Pause failed safely.');}});t.after(()=>view.panel.destroy());
  assert.equal(view.nodes.warning.hidden,false);assert.equal(view.nodes.recovery.hidden,false);assert.equal(view.nodes.details.open,true);
  await view.nodes.recovery.trigger('click');assert.equal(view.downloads[0][1],'{broken workspace bytes');assert.match(view.downloads[0][0],/recovery\.json$/);
  await view.save();assert.equal(view.store.list().length,0);assert.match(view.nodes.status.textContent,/Pause failed safely/);assert.equal(view.nodes.status.dataset.error,'true');
});
