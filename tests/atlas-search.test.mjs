import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Search=require('../src/atlas-search.js');
const cards=[{slug:'function',title:'Function',purpose:'Follow an input through a rule.',grammar:{symbols:[{token:'+',meaning:'Addition combines quantities.'}]}},{slug:'chaos-theory',title:'Chaos theory',purpose:'Compare nearby starting values.'},{slug:'derivative',title:'Derivative',purpose:'A limit describing local rate of change.'}];
const terms=[
  {id:'plus',title:'Addition',symbols:['+'],aliases:['plus','add'],definition:'Combine quantities.',usedBy:[{slug:'function'}]},
  {id:'times',title:'Multiplication',symbols:['×'],aliases:['*','times'],definition:'Multiply quantities.',usedBy:[{slug:'function'}]},
  {id:'delta-small',title:'Lowercase delta',symbols:['δ'],aliases:['delta'],definition:'A small change or tolerance, according to context.',usedBy:[{slug:'chaos-theory'}]},
  {id:'delta-capital',title:'Capital delta',symbols:['Δ'],aliases:['delta'],definition:'A change in a quantity.',usedBy:[{slug:'derivative'}]}
];
const index={search(query){return terms.filter(entry=>entry.symbols.includes(query)||entry.title.toLowerCase().includes(query.toLowerCase())||entry.aliases.includes(query.toLowerCase()));}};
const atlas={areas:{search:query=>query.toLowerCase().includes('linear')?[{id:'structures:linear-algebra',regionId:'structures',shortId:'linear-algebra',title:'Linear algebra',description:'Vectors and linear maps.',availableCount:6}]:[]}};
const model=Search.create({cards,index,atlas});
const MathIndex=require('../src/math-index.js');
const realCards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const realIndex=MathIndex.create({cards:realCards}),realAreas=require('../src/atlas-regions.js').create({cards:realCards}),realSearch=Search.create({cards:realCards,index:realIndex,atlas:{areas:realAreas}});

test('search adapter loads offline without DOM, storage or model evaluation',()=>{
  const context=vm.createContext({});vm.runInContext(fs.readFileSync(new URL('../src/atlas-search.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasSearch.create,'function');assert.ok(Object.isFrozen(Search));
});

test('notation lookup preserves delta case and links only actual cards using that exact symbol',()=>{
  assert.deepEqual(model.search('δ',{kind:'card'}).map(hit=>hit.id),['chaos-theory']);
  assert.deepEqual(model.search('Δ',{kind:'card'}).map(hit=>hit.id),['derivative']);
  assert.deepEqual(model.search('+',{kind:'card'}).map(hit=>hit.id),['function']);
  assert.equal(model.search('δ',{kind:'term'})[0].href,'#index/delta-small/search/%CE%B4');
  assert.deepEqual(model.search('plus',{kind:'card'}).map(hit=>hit.id),['function'],'A symbol name can locate cards through its exact definition entry');
  assert.deepEqual(model.search('*',{kind:'card'}).map(hit=>hit.id),['function'],'An authored keyboard variant resolves to the same operation');
});

test('cards, definitions and map areas keep their own result types and working destinations',()=>{
  assert.equal(model.search('Function',{kind:'card'})[0].href,'#card/function');
  assert.equal(model.search('linear')[0].href,'#atlas/map/structures/linear-algebra');
  assert.equal(model.search('linear')[0].kind,'area');
  assert.deepEqual(model.search(''),[]);assert.deepEqual(model.search(null),[]);
  assert.equal(model.search('delta',{limit:1}).length,1);
  assert.equal(model.search('delta',{limit:0}).length,0);
});

test('real dictionary symbol names, keyboard variants and scoped variable letters reach the right cards',()=>{
  assert.ok(realSearch.search('-',{kind:'card'}).length>0);
  assert.ok(realSearch.search('minus',{kind:'card'}).length>0);
  assert.ok(realSearch.search('plus',{kind:'card'}).length>5);
  assert.deepEqual(realIndex.search('m').find(entry=>entry.id==='variable').usedBy.map(hit=>hit.slug),['function-composition']);
  assert.ok(realSearch.search('m',{kind:'card'}).some(hit=>hit.id==='function-composition'),'The scalar parameter remains discoverable alongside metre units');
  for(const hit of realSearch.search('x',{kind:'card'})){
    const exactEvidence=realIndex.search('x').some(entry=>entry.usedBy.some(usage=>usage.slug===hit.id&&usage.contexts.some(context=>context.token==='x'&&context.via!=='term')));
    assert.ok(exactEvidence,hit.id+' has exact mathematical x evidence, including a formal dummy or a differently named UI input');
  }
  assert.ok(realSearch.search('x',{kind:'card'}).some(hit=>hit.id==='limit'));
  assert.ok(realSearch.search('x',{kind:'card'}).some(hit=>hit.id==='real-logarithm'));
  assert.deepEqual(realSearch.search('ε',{kind:'card'}).map(hit=>hit.id),realSearch.search('ϵ',{kind:'card'}).map(hit=>hit.id));
  assert.ok(!realSearch.search('Δ',{kind:'card'}).some(hit=>hit.id==='chaos-theory'));
});

test('results and search markup stay accessible and escape authored text',()=>{
  const html=model.markup({query:'"<script>',compact:true,id:'"<unsafe>'});
  assert.match(html,/Search all mathematics/);assert.match(html,/type="search"/);
  assert.doesNotMatch(html,/<script>|id=".*<unsafe>/);
  assert.match(model.resultsMarkup('+'),/Definitions & notation/);
  assert.match(model.resultsMarkup('+'),/Interactive cards/);
  assert.match(model.resultsMarkup('linear'),/Atlas areas/);
  assert.match(model.resultsMarkup('nothing'),/No matches yet/);
});

test('two-letter matrix products retain notation scope in shared results and URLs',()=>{
  for(const token of ['AB','BA']){
    assert.deepEqual(realSearch.search(token,{kind:'card'}).map(hit=>hit.id),['matrix-product']);
    const definitions=realSearch.search(token,{kind:'term'});assert.deepEqual(definitions.map(hit=>hit.id),['matrix-product']);
    assert.equal(definitions[0].href,'#index/matrix-product/search/'+token);
    assert.deepEqual(realSearch.search(token,{kind:'area'}).map(hit=>hit.id),['structures:linear-algebra'],'Notation locates areas containing actual card usage rather than English substrings');
  }
});

test('a unit letter and a locally declared parameter keep separate meanings and useful links',()=>{
  const scoped=MathIndex.create({cards:realCards,stories:[{slug:'vector',variables:[{key:'x',symbol:'x',unit:'m'}]}]});
  const all=Search.create({cards:realCards,index:scoped});
  assert.deepEqual(scoped.search('m').find(entry=>entry.id==='variable').usedBy.map(card=>card.slug),['function-composition']);
  const destinations=all.search('m',{kind:'card'}).map(hit=>hit.id);
  assert.ok(destinations.includes('vector'),'Metre units find the card actually declaring them');
  assert.ok(destinations.includes('function-composition'),'The parameter m retains its own card');
});

function fixture(){
  const listeners=new Map(),input={value:'',getAttribute:()=>null},results={innerHTML:'',hidden:true},outside=new Map();
  const host={innerHTML:'',querySelector:selector=>selector==='[data-search-input]'?input:results,querySelectorAll:()=>[],contains:target=>target===input,addEventListener(name,fn){listeners.set(name,fn);},removeEventListener(name,fn){if(listeners.get(name)===fn)listeners.delete(name);}};
  return{host,listeners,input,results,outside};
}

test('header search keeps its input, opens all results on Enter and removes its outside listener',t=>{
  const f=fixture(),previous=globalThis.document;globalThis.document={addEventListener:(name,fn)=>f.outside.set(name,fn),removeEventListener:(name,fn)=>{if(f.outside.get(name)===fn)f.outside.delete(name);}};
  t.after(()=>{if(previous===undefined)delete globalThis.document;else globalThis.document=previous;});
  const opened=[],view=model.mount(f.host,{compact:true,onOpen:query=>opened.push(query)}),input=f.input;
  input.value='δ';f.listeners.get('input')({target:input});assert.equal(f.results.hidden,false);assert.equal(f.input,input);assert.match(f.results.innerHTML,/Lowercase delta/);
  f.listeners.get('keydown')({target:input,key:'Enter',preventDefault(){}});assert.deepEqual(opened,['δ']);assert.equal(f.results.hidden,true);
  f.listeners.get('focusin')({target:input});assert.equal(f.results.hidden,false);
  f.outside.get('pointerdown')({target:{}});assert.equal(f.results.hidden,true);
  f.listeners.get('focusin')({target:input});
  input.focus=()=>f.listeners.get('focusin')({target:input});
  f.listeners.get('keydown')({target:{tagName:'A'},key:'Escape',preventDefault(){}});assert.equal(f.results.hidden,true,'Escape also dismisses results after keyboard focus enters a link');
  f.listeners.get('focusin')({target:input});f.listeners.get('focusout')({relatedTarget:{}});assert.equal(f.results.hidden,true);
  view.destroy();assert.equal(f.listeners.size,0);assert.equal(f.outside.size,0);view.destroy();
});
