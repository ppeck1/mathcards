import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {performance} from 'node:perf_hooks';
import {createRequire} from 'node:module';

const require=createRequire(import.meta.url);
const Index=require('../src/math-index.js');
const Stories=require('../src/story-library.js');
const sourceDirectory=new URL('../src/',import.meta.url);
const dataSource=fs.readFileSync(new URL('math-index-data.js',sourceDirectory),'utf8');
const dataContext=vm.createContext({});
vm.runInContext(dataSource,dataContext);
const data=JSON.parse(JSON.stringify(dataContext.AtlasMathIndexData));
const catalogContext=vm.createContext({});
vm.runInContext(fs.readFileSync(new URL('catalog.js',sourceDirectory),'utf8'),catalogContext);
const catalog=JSON.parse(JSON.stringify(catalogContext.AtlasCatalog));

test('the prebuilt reference has exact compiler parity, including story notation and local contexts',()=>{
  const compiled=Index.compile({...catalog,stories:Stories.all()});
  assert.deepEqual(data,compiled,'run tools/build.py after changing cards, stories or terms');
  const live=Index.hydrate(compiled),built=Index.hydrate(data);
  assert.deepEqual(built.entries,live.entries);
  assert.deepEqual(built.categories,live.categories);
  for(const query of ['δ','Δ','∂','μ','N','n','x','R','|R|','x̄','\\bar{x}','ms/item','∑xᵢ','Θ(n)','DᵤF','matrix','mean','not a term']){
    assert.deepEqual(built.search(query),live.search(query),query);
    assert.equal(built.isNotation(query),live.isNotation(query),query);
  }
  for(const card of catalog.cards)assert.deepEqual(built.forCard(card.slug),live.forCard(card.slug),card.slug);
  assert.deepEqual(built.forCard('not-a-card'),[]);
  assert.ok(Object.isFrozen(built.entries)&&Object.isFrozen(built.get('population-mean').usedBy));
});

test('serialized reference data is inert and rejects an incompatible projection',()=>{
  assert.ok(!/<\/script/i.test(dataSource));
  assert.equal(data.formatVersion,1);
  assert.equal(new Set(data.entries.map(entry=>entry.id)).size,data.entries.length);
  assert.throws(()=>Index.hydrate(null),TypeError);
  assert.throws(()=>Index.hydrate({...data,formatVersion:2}),TypeError);
  assert.throws(()=>Index.hydrate({...data,entries:{}}),TypeError);
});

test('browser bootstrap hydrates without a source scan and stays within its CPU budget',t=>{
  const template=fs.readFileSync(new URL('index.html',sourceDirectory),'utf8');
  const names=[...template.matchAll(/<script\s+src="([^"]+)"[^>]*data-development/g)].map(([,name])=>name.split('?')[0]);
  const scripts=names.filter(name=>name!=='app.js').map(name=>[name,fs.readFileSync(new URL(name,sourceDirectory),'utf8')]);
  const app=fs.readFileSync(new URL('app.js',sourceDirectory),'utf8');
  const boundary=app.indexOf('let storage;');
  assert.ok(boundary>0,'bootstrap phase ends before browser storage and view mounting');
  const node={innerHTML:'',value:'',querySelector(){return this;},addEventListener(){},removeEventListener(){}};
  const context=vm.createContext({document:{getElementById:()=>node,querySelector:()=>node,addEventListener(){}}});
  const started=performance.now();
  for(const [name,source]of scripts)vm.runInContext(source,context,{filename:name,timeout:2000});
  const api=context.AtlasMathIndex;
  context.AtlasMathIndex=Object.freeze({...api,create(){throw new Error('Runtime cross-link compilation blocks startup.');},compile(){throw new Error('Runtime compilation must remain in the build.');}});
  vm.runInContext(app.slice(0,boundary)+'})();',context,{filename:'app-bootstrap.js',timeout:1500});
  const elapsed=performance.now()-started;
  // This checks JavaScript parsing, module setup, reference hydration, atlas
  // providers and search initialization. Browser layout/paint is measured in
  // the separate visual walkthrough, not simulated by this minimal DOM host.
  t.diagnostic(`bootstrap JavaScript: ${elapsed.toFixed(1)} ms; budget 1500 ms`);
  assert.ok(elapsed<1500,`bootstrap took ${elapsed.toFixed(1)} ms (budget 1500 ms)`);
  assert.match(node.innerHTML,/Search all mathematics/,'the header search is available without deferred compilation');
});
