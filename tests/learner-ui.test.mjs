import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Regions=require('../src/atlas-regions.js'),Order=require('../src/learning-order.js');
const source=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const cards=Order.order(fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(n=>n.endsWith('.json')).map(n=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+n,import.meta.url),'utf8'))));
const areas=Regions.create({cards});
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function actual(name,next){const a=source.indexOf('function '+name+'('),b=source.indexOf('\nfunction '+next+'(',a);assert.ok(a>=0&&b>a);return source.slice(a,b);}
function collectionFixture(){
 const nodes=new Map([['cards',{innerHTML:'',querySelectorAll(){return Array.from({length:(this.innerHTML.match(/class="card-tile"/g)||[]).length},()=>({querySelector:()=>({focus(){}})}));}}],['card-summary',{}]]);
 const queries=[];
 const context={cards,atlasData:{areas},activeTerritory:'all',search:'',exploreLimit:12,esc,LS:{forSlug:()=>null},mini:()=>'<svg></svg>',explore(){context.explored=true;},searchData:{search(query,options){queries.push({query,options});return cards.filter(c=>c.title.toLowerCase().includes(query.toLowerCase())).map(c=>({id:c.slug}));}},document:{getElementById(id){if(nodes.has(id))return nodes.get(id);if(nodes.get('cards').innerHTML.includes('id="'+id+'"')){const node={};nodes.set(id,node);return node;}return null;}}};
 vm.runInContext(actual('matchingCards','lab'),vm.createContext(context));
 return {context,nodes,queries,draw(){nodes.delete('load-more-cards');nodes.delete('clear-search');context.tiles();}};
}

test('Explore territories project the actual atlas and cover every available lesson',()=>{
 const f=collectionFixture(),seen=new Set();
 assert.equal(f.context.matchingCards().length,cards.length);
 for(const region of areas.regions){f.context.activeTerritory=region.id;const result=f.context.matchingCards();assert.deepEqual(result.map(c=>c.slug).sort(),region.availableCards.map(c=>c.slug).sort());result.forEach(c=>seen.add(c.slug));}
 assert.deepEqual([...seen].sort(),cards.map(c=>c.slug).sort());
 f.context.activeTerritory='uncertainty';f.context.search='entropy';const result=f.context.matchingCards();assert.ok(result.length>0);assert.ok(result.every(c=>c.title.toLowerCase().includes('entropy')));assert.ok(result.every(c=>areas.getRegion('uncertainty').availableCards.some(x=>x.slug===c.slug)));assert.equal(f.queries.at(-1).options.limit,cards.length);
});

test('Explore initially shows twelve ideas and exposes every further match through Show more',()=>{
 const f=collectionFixture();f.draw();const count=()=>f.nodes.get('cards').innerHTML.match(/class="card-tile"/g)?.length||0;
 assert.equal(count(),12);assert.equal(f.nodes.get('card-summary').textContent,'Showing 12 of '+cards.length+' matching ideas');assert.doesNotMatch(f.nodes.get('cards').innerHTML,/DRAFT CARD/);
 for(let n=12;n<cards.length;n+=12){assert.ok(f.nodes.get('load-more-cards')?.onclick);f.nodes.get('load-more-cards').onclick();assert.equal(count(),Math.min(n+12,cards.length));}
 assert.equal(count(),cards.length);assert.doesNotMatch(f.nodes.get('cards').innerHTML,/id="load-more-cards"/);
 f.context.activeTerritory='uncertainty';f.context.search='does not exist';f.draw();assert.equal(count(),0);f.nodes.get('clear-search').onclick();assert.equal(f.context.activeTerritory,'all');assert.equal(f.context.search,'');assert.equal(f.context.exploreLimit,12);assert.equal(f.context.explored,true);
});

test('plain Index opens Addition while specific definitions and queries retain their routes',()=>{
 const mounts=[],context={clearStudios(){},main:{},mathIndex:{mount(_host,options){mounts.push(options);return{};}},history:{replaceState(){}}};
 vm.runInContext(actual('indexPage','searchPage'),vm.createContext(context));
 context.indexPage();assert.equal(mounts.at(-1).entryId,'addition');
 context.indexPage(['absolute-value']);assert.equal(mounts.at(-1).entryId,'absolute-value');
 context.indexPage(['search',encodeURIComponent('δ')]);assert.equal(mounts.at(-1).query,'δ');assert.equal(mounts.at(-1).entryId,undefined);
});

test('connections link readable card titles and keep review metadata out of the explanation',()=>{
 const content={innerHTML:''},context={cards,C:{coverage:[{id:'math:concept:variable',title:'Variable'}]},esc,observe:false,document:{getElementById:()=>content}};
 vm.runInContext(actual('connectionTarget','workContext'),vm.createContext(context));
 const target=cards.find(c=>c.slug==='joint-distribution');context.connections({prompts:[],connections:[{target:target.id,type:'shares_structure',reason:'Use the same joint law.',conditions:'Binary outcomes.',evidence_status:'definition_level',target_status:'available'}]});
 assert.match(content.innerHTML,/#card\/joint-distribution/);assert.match(content.innerHTML,/Joint probability distributions/);assert.doesNotMatch(content.innerHTML,/Target:|Evidence:|math:concept|definition_level/);assert.match(content.innerHTML,/<details class="connection-review">/);
 assert.match(context.connectionTarget({target:'math:concept:variable',target_status:'planned'}),/Variable · planned lesson/);
 assert.match(context.connectionTarget({target:'external:concept:workflow',target_status:'external'}),/workflow · related topic/);
});

test('initial Workbench choices differ and Notebook import has an accessible label',()=>{
 const declaration=source.match(/let work=(\[[^;]+);/)[1],context={M:{defaults:slug=>({module:slug})}};vm.runInContext('globalThis.choices='+declaration,vm.createContext(context));assert.deepEqual(Array.from(context.choices,c=>c.slug),['function-composition','linear-model']);
 const nodes=new Map(),main={innerHTML:'',querySelectorAll:()=>[]},notebookContext={main,notebook:{list:()=>[],status:()=>({})},esc,document:{getElementById(id){if(!nodes.has(id))nodes.set(id,{addEventListener(){}});return nodes.get(id);}}};
 vm.runInContext(actual('notebookPage','noteHtml'),vm.createContext(notebookContext));notebookContext.notebookPage();assert.match(main.innerHTML,/<label[^>]*for="import-file"[^>]*>Choose a notebook JSON backup<\/label>/);assert.match(main.innerHTML,/<input[^>]*type="file"[^>]*id="import-file"/);
 assert.ok(source.indexOf('class="work-panels"',source.indexOf('function workbench'))<source.indexOf('WorkspaceLibrary.markup()',source.indexOf('function workbench')));
});

function rgb(hex){return hex.slice(1).match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4);}
function contrast(a,b){const lum=c=>rgb(c).reduce((sum,v,i)=>sum+v*[.2126,.7152,.0722][i],0),x=lum(a),y=lum(b);return(Math.max(x,y)+.05)/(Math.min(x,y)+.05);}

test('reference metadata meets a declared 11px floor and 4.5:1 text contrast',()=>{
 const css=fs.readFileSync(new URL('../src/math-index.css',import.meta.url),'utf8');
 for(const match of css.matchAll(/font-size:\s*(\d+)px|font:\s*(\d+)px\//g))assert.ok(Number(match[1]||match[2])>=11,match[0]);
 for(const [selector,bg]of [['.index-entry small','#eef2e7'],['.index-entry-count','#eef2e7'],['.index-example > span','#eff3e7'],['.index-definition .eyebrow','#fffef8'],['.index-browse > span','#f4f5ef'],['.index-symbol-grid small','#e8efdc'],['.index-sources p, .index-definition > .fine','#fffef8']]){
  const rule=css.split(selector+' {')[1]?.split('}')[0];assert.ok(rule,selector);const color=rule.match(/color:\s*(#[0-9a-f]{6})/i)?.[1];assert.ok(color,selector);assert.ok(contrast(color,bg)>=4.5,selector+' '+contrast(color,bg));
 }
});
