import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const Store=require('../src/workspace-store.js');
const Links=require('../src/workspace-links.js');
const Modules=require('../src/playground-modules.js');
function storage(){const values=new Map();return{getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value),values};}
const slot=(id,moduleId='function-composition',extra={})=>{
  const module=Modules.get(moduleId);
  return{id,module_id:moduleId,module_version:module.version,parameters:module.defaults(),view:module.defaultView,camera:.65,baseline:null,inspector:null,...extra};
};
const request=extra=>({title:'Two ways to see a change',slots:[slot('work-0'),slot('work-1','real-logarithm')],connection:null,...extra});
const fresh=(value=storage(),modules=Modules)=>Store.createStore({storage:value,modules});
function saved(book,input=request()){const result=book.add(input);assert.equal(result.ok,true,result.error);return result.workspace;}
const clone=value=>JSON.parse(JSON.stringify(value));

test('the public workspace format fixture imports and restores its graph, pin and explicit length connection',()=>{
  const data=JSON.parse(fs.readFileSync(new URL('../examples/workspace-format-fixture.json',import.meta.url),'utf8'));
  const book=fresh(),result=book.importBackup(data);
  assert.equal(result.ok,true,result.error);
  assert.equal(result.count,1);
  const workspace=book.get('workspace:triangle-garden-example');
  assert.equal(book.compatibility(workspace).replayable,true);
  assert.equal(workspace.created_at,'2026-10-26T12:00:00Z');
  assert.equal(workspace.slots[0].view,'geometry');
  assert.equal(workspace.slots[1].view,'graph');
  assert.deepEqual(workspace.slots[1].baseline,{width:4,perimeter:20});
  const slots=workspace.slots.map(saved=>({id:saved.id,module:Modules.get(saved.module_id),parameters:saved.parameters}));
  assert.equal(slots[0].module.evaluate(slots[0].parameters).output,5);
  assert.equal(slots[1].parameters.width,5);
  assert.equal(slots[1].module.evaluate(slots[1].parameters).output,25);
  const session=Links.createSession({getSlots:()=>slots,apply:()=>assert.fail('Restoring an exact fixture must not change either saved slot')});
  const restored=session.restore(workspace.connection);
  assert.equal(restored.restored,true,restored.error);
  assert.equal(restored.phase,'linked');
  assert.equal(restored.value,5);
  assert.deepEqual(book.list(),data.workspaces);
  session.destroy();
});

test('workspace storage loads offline as a classic script without a document or storage access',()=>{
  const context=vm.createContext({AtlasWorkspaceLinks:Links});
  vm.runInContext(fs.readFileSync(new URL('../src/workspace-store.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasWorkspaceStore.createStore,'function');
  const book=context.AtlasWorkspaceStore.createStore({storage:null,modules:Modules});
  assert.equal(book.status().persistence,'memory');
  assert.equal(book.list().length,0);
});

test('both slots, view, camera, pin and exact parameters survive save, fresh-store reload and backup restore',()=>{
  const disk=storage(),book=fresh(disk);
  const input=request({title:'  Compare the same function  ',slots:[slot('work-0','function-composition',{view:'graph',camera:.9,baseline:{...Modules.get('function-composition').defaults(),x:-1}}),slot('work-1','function-composition',{view:'spatial',camera:.25,parameters:{...Modules.get('function-composition').defaults(),x:Math.PI,order:'g_after_f'}})]});
  const workspace=saved(book,input);
  assert.equal(workspace.title,'Compare the same function');
  assert.equal(workspace.schema_version,'1.0.0');
  assert.equal(workspace.kind,'math-atlas-workspace');
  assert.ok(workspace.id.startsWith('workspace:'));
  assert.equal(book.compatibility(workspace.id).replayable,true);
  assert.deepEqual(fresh(disk).list(),book.list());
  const second=fresh();assert.equal(second.importBackup(book.exportBackup()).ok,true);
  assert.deepEqual(second.get(workspace.id),workspace);
  assert.equal(second.get(workspace.id).slots[1].parameters.x,Math.PI,'Full precision is retained');
  const exposed=book.list();exposed[0].slots[0].parameters.x=99;
  assert.notEqual(book.get(workspace.id).slots[0].parameters.x,99);
  assert.equal(book.exportRecovery(),null);
});

test('structurally valid undefined calculations and matching comparison pins remain saveable',()=>{
  const book=fresh(),log=slot('work-0','real-logarithm',{view:'graph',parameters:{base:1,argument:0},baseline:{base:.5,argument:8}}),derivative=slot('work-1','derivative',{parameters:{preset:'absolute',a:0,h:0},baseline:{preset:'cubic',a:2,h:0}});
  const result=saved(book,request({slots:[log,derivative]}));
  assert.equal(book.compatibility(result).replayable,true);
  assert.equal(fresh().importBackup(book.exportBackup()).ok,true);
});

test('a consistent directed link round-trips and a valid but inconsistent active connection is rejected atomically',()=>{
  const source=slot('work-0','pythagorean-theorem'),target=slot('work-1','quadratic-optimization',{view:'graph'}),connection={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:width'};
  const book=fresh(),workspace=saved(book,request({slots:[source,target],connection})),backup=book.exportBackup();
  assert.deepEqual(workspace.connection,connection);
  const altered=JSON.parse(backup);altered.workspaces[0].slots[1].parameters.width=6;
  assert.equal(book.importBackup(altered).ok,false);
  assert.equal(book.exportBackup(),backup);
  assert.equal(fresh().importBackup(backup).ok,true);
});

test('a blocked connection preserves the last valid receiving value instead of coercing it during save or reload',()=>{
  const source=slot('work-0','pythagorean-theorem'),target=slot('work-1','fractal-geometry',{parameters:{depth:3,length:2}}),connection={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:length'};
  const book=fresh(),workspace=saved(book,request({slots:[source,target],connection}));
  assert.equal(workspace.slots[0].parameters.a,3);
  assert.equal(workspace.slots[1].parameters.length,2);
  assert.equal(book.compatibility(workspace).replayable,true);
  const restored=fresh();assert.equal(restored.importBackup(book.exportBackup()).ok,true);
  assert.equal(restored.get(workspace.id).slots[1].parameters.length,2);
  const session=Links.createSession({getSlots:()=>restored.get(workspace.id).slots.map(s=>({id:s.id,module:Modules.get(s.module_id),parameters:s.parameters})),apply:()=>assert.fail('Restoration must not apply')});
  const outcome=session.restore(connection);assert.equal(outcome.restored,true);assert.equal(outcome.phase,'blocked');
  session.destroy();
});

test('undefined source outputs preserve a blocked connection while incompatible units and same-slot wires reject',()=>{
  const connection={sourceSlotId:'work-0',sourcePortId:'output:output',targetSlotId:'work-1',targetPortId:'input:x'};
  const book=fresh();saved(book,request({slots:[slot('work-0','real-logarithm',{parameters:{base:1,argument:8}}),slot('work-1')],connection}));
  const before=book.exportBackup();
  const badUnits=request({slots:[slot('work-0','exponential-change'),slot('work-1','quadratic-optimization')],connection:{...connection,targetPortId:'input:width'}});
  assert.equal(book.add(badUnits).ok,false);
  const sameSlot=request({slots:[slot('work-0'),slot('work-1')],connection:{...connection,targetSlotId:'work-0'}});
  assert.equal(book.add(sameSlot).ok,false);
  assert.equal(book.exportBackup(),before);
});

test('current records require complete exact parameter keys, a declared view and a bounded camera',()=>{
  const book=fresh();saved(book);const before=book.exportBackup();
  for(const alter of [
    s=>{delete s.parameters.x;},s=>{s.parameters.unknown=1;},s=>{s.parameters.x=Infinity;},s=>{s.parameters.x='3';},
    s=>{s.view='missing-view';},s=>{s.camera=.1;},s=>{s.camera=1.01;},s=>{s.baseline={x:2};},s=>{s.inspector={zoom:2};},s=>{s.extra=true;}
  ]){
    const input=request();alter(input.slots[0]);assert.equal(book.add(input).ok,false);assert.equal(book.exportBackup(),before);
  }
});

test('saved inspector state follows its module contract and is never normalized during import',()=>{
  const original=Modules.get('fractal-geometry');
  const module={...original,validateInspectorState(state){if(state===null)return{valid:true,state:null};return{valid:Object.keys(state).sort().join(',')==='compare,zoom'&&typeof state.compare==='boolean'&&Number.isFinite(state.zoom)&&state.zoom>=1&&state.zoom<=27,state};}};
  const registry={get:id=>id===module.id?module:Modules.get(id)},book=fresh(storage(),registry);
  const workspace=saved(book,request({slots:[slot('work-0','fractal-geometry',{inspector:{zoom:27,compare:true}}),slot('work-1')]}));
  assert.deepEqual(workspace.slots[0].inspector,{zoom:27,compare:true});
  const bad=JSON.parse(book.exportBackup());bad.workspaces[0].slots[0].inspector.zoom=28;
  assert.equal(book.importBackup(bad).ok,false);
  const changing={get:id=>id===module.id?{...module,validateInspectorState:()=>({valid:true,state:{zoom:1,compare:false}})}:Modules.get(id)};
  assert.equal(fresh(storage(),changing).importBackup(book.exportBackup()).ok,false,'Normalization cannot silently change saved camera state');
});

test('exact parameter-key validation is not fooled by punctuation joining into the same text',()=>{
  const original=Modules.get('function-composition'),custom={...original,id:'custom-keys',version:'1',ports:[],defaults:()=>({'a|b':1,c:2}),validateParams:parameters=>({valid:true,parameters:{...parameters},errors:[]})};
  const registry={get:id=>id===custom.id?custom:Modules.get(id)},book=fresh(storage(),registry);
  const customSlot={...slot('work-0'),module_id:custom.id,module_version:'1',parameters:custom.defaults()};
  saved(book,request({slots:[customSlot,slot('work-1')]}));
  const before=book.exportBackup(),bad=request({slots:[{...customSlot,parameters:{a:1,'b|c':2}},slot('work-1')]});
  assert.equal(book.add(bad).ok,false);
  assert.equal(book.exportBackup(),before);
});

test('missing modules and old module revisions remain readable and exportable without invoking a different model',()=>{
  const old=fresh();const workspace=saved(old);const backup=old.exportBackup();
  let evaluations=0;
  const changed={get:id=>id==='function-composition'?{...Modules.get(id),version:'new',defaults(){throw new Error('old parameters must remain opaque');},validateParams(){throw new Error('do not validate old parameters');},evaluate(){evaluations++;throw new Error('do not recalculate old state');}}:Modules.get(id)};
  const disk=storage();disk.setItem(Store.storageKey,backup);const preserved=fresh(disk,changed);
  assert.equal(preserved.status().count,1);
  assert.equal(preserved.status().preservedCount,1);
  assert.equal(preserved.compatibility(workspace.id).status,'preserved');
  assert.equal(preserved.compatibility(workspace.id).replayable,false);
  assert.deepEqual(preserved.list(),old.list());
  assert.equal(evaluations,0);
  const unavailable={get:()=>undefined},missing=fresh(storage(),unavailable);
  assert.equal(missing.importBackup(backup).ok,true);
  assert.equal(missing.compatibility(workspace.id).status,'preserved');
  assert.deepEqual(missing.get(workspace.id),workspace);
  assert.equal(missing.exportRecovery(),null);
});

test('mixed preserved and current workspaces survive additions, fresh-store reloads and backups',()=>{
  const old=fresh();saved(old);const incoming=JSON.parse(old.exportBackup());incoming.workspaces[0].slots[0].module_version='old';incoming.workspaces[0].slots[0].parameters={legacy:true,nested:{values:[1,'kept']}};
  const disk=storage(),book=fresh(disk);assert.equal(book.importBackup(incoming).ok,true);
  saved(book,request({title:'New current workspace'}));
  assert.equal(book.status().count,2);assert.equal(book.status().preservedCount,1);
  assert.deepEqual(fresh(disk).list(),book.list());
  const freshBook=fresh();assert.equal(freshBook.importBackup(book.exportBackup()).ok,true);
  assert.deepEqual(freshBook.list(),book.list());
});

test('backup import merges idempotently, rejects identity conflicts atomically and replace supports deletion undo',()=>{
  const book=fresh(),first=saved(book),backup=book.exportBackup();
  assert.equal(book.importBackup(backup).ok,true);assert.equal(book.list().length,1);
  const conflict=JSON.parse(backup);conflict.workspaces[0].title='A different immutable record';
  assert.equal(book.importBackup(conflict).ok,false);assert.equal(book.exportBackup(),backup);
  const reordered=clone(JSON.parse(backup));reordered.workspaces[0].slots[0].parameters=Object.fromEntries(Object.entries(reordered.workspaces[0].slots[0].parameters).reverse());
  assert.equal(book.importBackup(reordered).ok,true,'Object key order does not create a different workspace');
  assert.equal(book.remove(first.id).ok,true);assert.equal(book.list().length,0);
  assert.equal(book.importBackup(backup,{mode:'replace'}).ok,true);assert.deepEqual(book.get(first.id),first);
  assert.equal(book.remove('not-found').ok,false);
});

test('malformed schemas, dates, duplicates and oversized collections cannot partially import',()=>{
  const book=fresh();saved(book);const before=book.exportBackup();
  for(const alter of [
    d=>{d.schema_version='2.0.0';},d=>{d.workspaces[0].schema_version='2.0.0';},d=>{d.kind='math-atlas-notebook';},
    d=>{d.workspaces.push(clone(d.workspaces[0]));},d=>{d.workspaces[0].created_at='2026-02-30T00:00:00Z';},
    d=>{d.workspaces[0].slots.reverse();},d=>{d.workspaces[0].title='';},d=>{d.workspaces[0].title='x'.repeat(201);},
    d=>{d.extra=true;},d=>{d.workspaces[0].slots[0].baseline=[];},
    d=>{d.workspaces=Array.from({length:201},(_,i)=>({...clone(d.workspaces[0]),id:'workspace:'+i}));}
  ]){
    const data=JSON.parse(before);alter(data);assert.equal(book.importBackup(data).ok,false);assert.equal(book.exportBackup(),before);
  }
  assert.equal(book.importBackup('{broken').ok,false);
  assert.equal(book.importBackup(' '.repeat(8*1024*1024+1)).ok,false);
});

test('hostile accessors, callbacks, prototype fields and cyclic data stay inert and cannot write state',()=>{
  const book=fresh();saved(book);const before=book.exportBackup();let touched=0;
  const getter=request();Object.defineProperty(getter.slots[0].parameters,'x',{enumerable:true,get(){touched++;return 3;}});
  assert.equal(book.add(getter).ok,false);assert.equal(touched,0);
  const callback=request();callback.slots[0].inspector={execute(){touched++;}};assert.equal(book.add(callback).ok,false);
  const cycle=request();cycle.slots[0].parameters.loop=cycle;assert.equal(book.add(cycle).ok,false);
  const poison=JSON.parse(before);Object.defineProperty(poison.workspaces[0].slots[0].parameters,'__proto__',{value:{polluted:true},enumerable:true});
  assert.equal(book.importBackup(poison).ok,false);assert.equal({}.polluted,undefined);
  assert.equal(book.exportBackup(),before);
});

test('blocked storage and quota failures keep new work in memory while raw corrupt bytes stay recoverable',()=>{
  const full={getItem:()=>null,setItem(){throw new Error('quota');}},book=fresh(full);saved(book);
  assert.equal(book.status().persistence,'memory');assert.equal(book.list().length,1);assert.match(book.status().warning,/Export a backup/);
  const corrupt=storage();corrupt.setItem(Store.storageKey,'{not-json');const recovered=fresh(corrupt);saved(recovered);
  assert.equal(recovered.status().recoveryAvailable,true);assert.equal(recovered.exportRecovery(),'{not-json');
  assert.equal(corrupt.getItem(Store.storageKey),'{not-json','Corrupt original storage is never overwritten by a new save');
  const unsupported=storage();unsupported.setItem(Store.storageKey,'{"schema_version":"999","kind":"math-atlas-workspace-backup","workspaces":[]}');
  assert.equal(fresh(unsupported).status().recoveryAvailable,true);
  const inaccessible={getItem(){throw new Error('blocked');},setItem(){assert.fail('unreadable storage must not be overwritten');}};
  const transient=fresh(inaccessible);saved(transient);assert.equal(transient.exportRecovery(),null);assert.equal(transient.status().persistence,'memory');
});

test('a stale writer from an empty baseline cannot erase another tab’s save and the current writer can continue',()=>{
  const disk=storage(),first=fresh(disk),stale=fresh(disk);
  const firstRecord=saved(first,request({title:'First tab record'})),externalRaw=disk.getItem(Store.storageKey);
  const pending=saved(stale,request({title:'Other tab pending record'}));
  assert.equal(disk.getItem(Store.storageKey),externalRaw,'The stale save never replaces the first tab’s bytes');
  assert.equal(stale.status().persistence,'memory');
  assert.match(stale.status().warning,/changed in another tab/);
  assert.match(stale.status().warning,/Export a backup.*reloading/);
  assert.deepEqual(JSON.parse(stale.exportBackup()).workspaces,[pending],'The pending save remains exportable, without importing unseen records');
  assert.deepEqual(fresh(disk).list(),[firstRecord]);
  const next=saved(first,request({title:'First tab next record'}));
  assert.equal(first.status().persistence,'local','A successful write advances the current writer’s raw guard');
  assert.deepEqual(fresh(disk).list(),[firstRecord,next]);
  const interrupted=fresh(disk),unreadExternal='{new external text must not be parsed';
  disk.setItem(Store.storageKey,unreadExternal);
  const retained=saved(interrupted,request({title:'Local pending after external replacement'}));
  assert.equal(disk.getItem(Store.storageKey),unreadExternal);
  assert.equal(interrupted.status().persistence,'memory');
  assert.match(interrupted.status().warning,/changed in another tab/);
  assert.ok(interrupted.get(retained.id));
});

test('a stale writer with the same saved baseline retains its pending addition without losing another tab’s new record',()=>{
  const disk=storage(),seed=fresh(disk),baseline=saved(seed,request({title:'Shared baseline'}));
  const first=fresh(disk),stale=fresh(disk),external=saved(first,request({title:'New external record'}));
  const externalRaw=disk.getItem(Store.storageKey),pending=saved(stale,request({title:'Pending local record'}));
  assert.equal(stale.status().persistence,'memory');
  assert.deepEqual(stale.list(),[baseline,pending]);
  assert.deepEqual(fresh(disk).list(),[baseline,external]);
  assert.equal(disk.getItem(Store.storageKey),externalRaw);
});

test('stale remove and import-replace operations cannot overwrite externally added records',()=>{
  const disk=storage(),seed=fresh(disk),baseline=saved(seed,request({title:'Saved baseline'}));
  const first=fresh(disk),removing=fresh(disk),replacing=fresh(disk);
  const external=saved(first,request({title:'External addition'})),externalRaw=disk.getItem(Store.storageKey);
  assert.equal(removing.remove(baseline.id).ok,true);
  assert.equal(removing.status().persistence,'memory');
  assert.equal(removing.list().length,0,'The requested removal is reflected in this tab’s memory');
  assert.equal(disk.getItem(Store.storageKey),externalRaw);
  const replacement=fresh();const replacementRecord=saved(replacement,request({title:'Imported replacement'}));
  assert.equal(replacing.importBackup(replacement.exportBackup(),{mode:'replace'}).ok,true);
  assert.equal(replacing.status().persistence,'memory');
  assert.deepEqual(replacing.list(),[replacementRecord]);
  assert.deepEqual(fresh(disk).list(),[baseline,external]);
  assert.equal(disk.getItem(Store.storageKey),externalRaw);
});

test('a pre-write storage read failure leaves stored data untouched and keeps the pending operation in memory',()=>{
  const disk=storage(),initial=fresh(disk),baseline=saved(initial,request({title:'Existing disk record'}));
  let failRead=false,writes=0;
  const guardedDisk={getItem(key){if(failRead)throw new Error('Storage became unreadable');return disk.getItem(key);},setItem(key,value){writes++;disk.setItem(key,value);}};
  const book=fresh(guardedDisk),raw=disk.getItem(Store.storageKey);failRead=true;
  const pending=saved(book,request({title:'Pending save'}));
  assert.equal(writes,0);
  assert.equal(disk.getItem(Store.storageKey),raw);
  assert.equal(book.status().persistence,'memory');
  assert.match(book.status().warning,/could not be checked before writing/);
  assert.match(book.status().warning,/Export a backup.*reload/);
  assert.deepEqual(book.list(),[baseline,pending]);
  assert.equal(book.exportRecovery(),null,'Unread external storage is not invented as a raw recovery payload');
});
