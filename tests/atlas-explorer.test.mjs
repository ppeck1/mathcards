import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Explorer=require('../src/atlas-explorer.js');
const Regions=require('../src/atlas-regions.js');
const Landscape=require('../src/atlas-landscape.js');
const Concepts=require('../src/concept-atlas.js');
const Motion=require('../src/motion.js');
const read=file=>JSON.parse(fs.readFileSync(new URL('../'+file,import.meta.url),'utf8'));
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(file=>file.endsWith('.json')).map(file=>read('content/cards/'+file));
const sources=read('content/sources.json').sources;
const coverage=fs.readFileSync(new URL('../content/coverage.csv',import.meta.url),'utf8').trim().split(/\r?\n/).slice(1).map(line=>{const [id,title,domain,status]=line.split(',');return{id,title,domain,status};});
const model=Explorer.create({cards,sources,coverage});

test('explorer loads offline and composes the pure map and existing connection providers',()=>{
  const context=vm.createContext({AtlasRegions:Regions,AtlasLandscape:Landscape,AtlasConceptAtlas:Concepts,AtlasMotion:Motion});
  vm.runInContext(fs.readFileSync(new URL('../src/atlas-explorer.js',import.meta.url),'utf8'),context);
  const browser=context.AtlasExplorer.create({cards,sources,coverage});
  assert.equal(browser.areas.regions.length,8);assert.equal(browser.areas.topics.length,24);
  assert.equal(browser.connections.nodes.length,38);
  assert.deepEqual(JSON.parse(JSON.stringify(browser.stateFromPath([]))),model.stateFromPath([]));
});

test('plain atlas opens the landscape while every old concept link retains its connections view',()=>{
  assert.equal(model.stateFromPath([]).mode,'map');
  assert.deepEqual(model.pathForState(model.stateFromPath([])),[]);
  for(const card of cards){
    const state=model.stateFromPath([card.slug]);
    assert.equal(state.mode,'connections');assert.equal(state.selectedSlug,card.slug);
    assert.deepEqual(model.pathForState(state),[card.slug]);
  }
  assert.equal(model.stateFromPath(['not-a-card']).mode,'map');
  assert.equal(model.stateFromPath(['%bad']).mode,'map');
});

test('region/topic URLs round-trip through validated map identities without conflating linear areas',()=>{
  for(const region of model.areas.regions){
    const state=model.stateFromPath(['map',region.id]);
    assert.equal(state.regionId,region.id);assert.equal(state.topicId,null);
    assert.deepEqual(model.pathForState(state),['map',region.id]);
    for(const topic of region.topics){
      const path=['map',region.id,topic.shortId],selected=model.stateFromPath(path);
      assert.equal(selected.topicId,topic.id);assert.deepEqual(model.pathForState(selected),path);
    }
  }
  assert.equal(model.stateFromPath(['map','structures','linear-algebra']).topicId,'structures:linear-algebra');
  assert.equal(model.stateFromPath(['map','computation','linear-time-algorithms']).topicId,'computation:linear-time-algorithms');
  assert.equal(model.stateFromPath(['map','computation','linear-time-algorithms']).selectedSlug,'computational-complexity','A newly available area opens its own lesson');
  assert.equal(model.stateFromPath(['map','unknown']).regionId,null);
  assert.equal(model.stateFromPath(['map','structures','unknown']).topicId,null);
});

test('each card can open a mapped area that actually contains that available lesson',()=>{
  for(const card of cards){
    const path=model.pathForCard(card.slug),state=model.stateFromPath(path);
    assert.ok(model.areas.getTopic(state.topicId).availableCards.some(item=>item.slug===card.slug),card.slug);
  }
  assert.deepEqual(model.pathForCard('function-composition'),['map','foundations','function-rules']);
  assert.deepEqual(model.pathForCard('real-logarithm'),['map','numbers','powers-and-logs']);
  assert.deepEqual(model.pathForCard('derivative'),['map','change','calculus']);
  assert.deepEqual(model.pathForCard('missing'),[]);
});

test('map and area markup provide native alternatives and genuine available-card links',()=>{
  const html=model.markup();
  assert.equal((html.match(/data-atlas-region=/g)||[]).length,8);
  assert.equal((html.match(/data-atlas-topic=/g)||[]).length,24);
  assert.match(html,/aria-label="Choose a map territory"/);
  assert.match(html,/aria-label="Choose a map area"/);
  assert.match(html,/type="search"/);
  assert.match(html,/data-world-zoom="in"/);
  const panel=model.panelMarkup(model.stateFromPath(['map','structures','linear-algebra']));
  assert.match(panel,/#card\/vector-rotation/);assert.match(panel,/#card\/complex-multiplication/);
  for(const slug of ['vector','inner-product','matrix-linear-map','determinant'])assert.ok(panel.includes('href="#card/'+slug+'"'));
  assert.match(panel,/General vector spaces and linear maps remain planned/);
  const filled=model.panelMarkup(model.stateFromPath(['map','computation','linear-time-algorithms']));
  assert.doesNotMatch(filled,/no lesson here yet/);
  assert.match(filled,/href="#card\/computational-complexity/);
});

test('camera zoom and pan remain finite and bounded at every extreme',()=>{
  const overview=Landscape.overviewBounds();
  for(const input of [null,{}, {x:NaN,y:0,width:5,height:2},{x:0,y:0,width:-1,height:740}])assert.deepEqual(Explorer.cameraBox(input),overview);
  for(const region of model.areas.regions){
    for(const factor of [.00001,.1,1,1.4,1000000]){
      const box=Explorer.scaleCamera(Landscape.boundsForRegion(region.id),factor);
      assert.ok(box.width>=150&&box.width<=1200);assert.ok(box.height>=100&&box.height<=800);
      assert.ok(box.x>=0&&box.x+box.width<=1200+1e-10);
      assert.ok(box.y>=0&&box.y+box.height<=800+1e-10);
    }
  }
});

class Element{
  constructor(tag='div'){this.tagName=tag.toUpperCase();this.attrs={};this.dataset={};this.hidden=false;this.disabled=false;this.value='';this.innerHTML='';this.listeners=new Map();this.focused=false;}
  addEventListener(name,fn){if(!this.listeners.has(name))this.listeners.set(name,new Set());this.listeners.get(name).add(fn);}
  removeEventListener(name,fn){this.listeners.get(name)?.delete(fn);}
  setAttribute(key,value){this.attrs[key]=String(value);}
  getAttribute(key){return this.attrs[key]??null;}
  hasAttribute(key){return Object.hasOwn(this.attrs,key);}
  replaceChildren(){this.innerHTML='';}
  contains(){return true;}
  focus(){this.focused=true;}
  getBoundingClientRect(){return{width:1200,height:740};}
}
function fixture(t){
  const host=new Element(),nodes=new Map(),svg=new Element('svg'),modes=['map','connections'].map(mode=>{const el=new Element('button');el.setAttribute('data-world-mode',mode);return el;});
  const canvas=new Element();canvas.querySelector=selector=>selector==='svg'?svg:new Element('g');
  for(const selector of ['.atlas-explorer','.world-map','[data-world-panel]','[data-world-connections]','[data-world-search]','[data-world-results]','[data-world-status]','[data-world-region-select]','[data-world-topic-select]','.world-head'])nodes.set(selector,new Element());
  nodes.set('[data-world-canvas]',canvas);host.querySelector=selector=>nodes.get(selector)||new Element();host.querySelectorAll=()=>modes;
  const nested=nodes.get('[data-world-connections]');nested.querySelector=()=>new Element();
  const pending=new Map(),cancelled=[];let next=0;
  t.mock.method(globalThis,'requestAnimationFrame',callback=>{pending.set(++next,callback);return next;});
  t.mock.method(globalThis,'cancelAnimationFrame',id=>{pending.delete(id);cancelled.push(id);});
  return{host,nodes,svg,canvas,pending,cancelled};
}

test('selection, search, connection delegation and cleanup preserve their independent lifecycles',t=>{
  // The browser owns frame scheduling; this deterministic fixture checks cancellation.
  globalThis.requestAnimationFrame??=()=>0;globalThis.cancelAnimationFrame??=()=>{};
  const f=fixture(t),paths=[],view=model.mount(f.host,{onNavigate:path=>paths.push(path)});
  assert.equal(view.getState().mode,'map');assert.equal(f.pending.size,0);
  assert.equal(view.selectTopic('structures:linear-algebra'),true);
  assert.deepEqual(paths.at(-1),['map','structures','linear-algebra']);assert.ok(f.pending.size>0);
  const search=f.nodes.get('[data-world-search]'),results=f.nodes.get('[data-world-results]');search.value='linear algorithms';
  for(const fn of f.host.listeners.get('input'))fn({target:search});
  assert.equal(search.value,'linear algorithms');assert.equal(results.hidden,false);
  assert.match(results.innerHTML,/Linear algebra/);assert.match(results.innerHTML,/Linear-time algorithms/);
  assert.equal(view.showConnections('derivative'),true);
  assert.deepEqual(paths.at(-1),['derivative']);assert.equal(f.pending.size,0);
  const nested=f.nodes.get('[data-world-connections]');assert.equal(nested.listeners.get('click').size,1);
  view.selectRegion('change');assert.equal(nested.listeners.get('click').size,0);
  view.selectRegion('computation');assert.equal(view.getState().selectedSlug,'graph-theory','Connections follow the selected territory instead of an unrelated old concept');
  assert.equal(view.selectRegion('missing'),false);assert.equal(view.selectTopic('missing'),false);
  view.destroy();assert.equal(f.pending.size,0);
  for(const set of f.host.listeners.values())assert.equal(set.size,0);
  for(const set of f.canvas.listeners.values())assert.equal(set.size,0);
  assert.equal(view.selectTopic('structures:linear-algebra'),false);view.destroy();
});

test('blank-canvas panning does not swallow the next control click or start a ghost drag after release',t=>{
  globalThis.requestAnimationFrame??=()=>0;globalThis.cancelAnimationFrame??=()=>{};
  const f=fixture(t),view=model.mount(f.host);
  f.canvas.contains=target=>target===f.canvas;
  const fire=(node,type,event)=>{for(const handler of node.listeners.get(type)||[])handler({type,preventDefault(){},...event});};
  fire(f.canvas,'pointerdown',{button:0,pointerId:1,clientX:300,clientY:300});
  fire(f.canvas,'pointermove',{buttons:1,pointerId:1,clientX:330,clientY:320});
  fire(f.canvas,'pointerup',{pointerId:1});
  fire(f.host,'click',{detail:1,target:f.canvas});
  const zoom=new Element('button');zoom.setAttribute('data-world-zoom','in');zoom.closest=()=>zoom;
  fire(f.host,'click',{detail:1,target:zoom});
  assert.ok(f.pending.size>0,'The first zoom click after a completed blank-canvas pan is handled');
  view.selectRegion(null,{animate:false});
  fire(f.canvas,'pointerdown',{button:0,pointerId:2,clientX:300,clientY:300});
  // Real PointerEvent values are inherited accessors rather than enumerable fields.
  const released=Object.create({buttons:0,pointerId:2,clientX:330,clientY:320});
  for(const handler of f.canvas.listeners.get('pointermove'))handler(released);
  assert.equal(f.canvas.dataset.dragging,undefined,'A released pointer cannot begin a later drag');
  fire(f.canvas,'pointermove',{buttons:1,pointerId:2,clientX:360,clientY:320});
  assert.equal(f.canvas.dataset.dragging,undefined,'An ended gesture cannot resume without a fresh pointerdown');
  view.destroy();
});

test('reduced motion lands on the selected area immediately and removes preference listeners',t=>{
  globalThis.requestAnimationFrame??=()=>0;globalThis.cancelAnimationFrame??=()=>{};
  const previous=globalThis.matchMedia,listeners=new Set(),media={matches:true,addEventListener:(_name,fn)=>listeners.add(fn),removeEventListener:(_name,fn)=>listeners.delete(fn)};
  globalThis.matchMedia=()=>media;t.after(()=>{if(previous===undefined)delete globalThis.matchMedia;else globalThis.matchMedia=previous;});
  const f=fixture(t),view=model.mount(f.host);
  view.selectTopic('structures:linear-algebra');
  assert.equal(f.pending.size,0);assert.deepEqual(view.getState().camera,Explorer.fitCamera(Landscape.boundsForTopic('structures:linear-algebra'),{width:1200,height:740}));
  assert.equal(listeners.size,1);view.destroy();assert.equal(listeners.size,0);
});

test('portrait overview retains the complete map and a native full-name key for all eight territories',()=>{
  for(const width of [360,390,430]){
    const viewport={width,height:460},box=Explorer.fitCamera(Landscape.overviewBounds(),viewport,true);
    assert.deepEqual(box,Landscape.overviewBounds(),'A portrait overview never crops fields');
    const area=Explorer.fitCamera(Landscape.boundsForTopic('change:calculus'),viewport);
    assert.ok(Math.abs(area.width/area.height-width/460)<1e-9);
  }
  const html=model.markup();
  assert.ok(html.includes('class="world-find"'));
  assert.ok(html.includes('data-world-locator'));
  assert.ok(html.includes('data-world-interact aria-pressed="false"'));
  const key=html.match(/<nav class="world-overview-key"[^>]*>([\s\S]*?)<\/nav>/)[1];
  assert.equal((key.match(/data-world-region=/g)||[]).length,8);
  for(const region of model.areas.regions)assert.ok(key.includes(region.title));
  assert.ok(html.includes('class="world-lessons"')===false,'Overview does not duplicate a long lesson list');
});

test('a wide overview retains the complete field map',()=>{
  const whole=Landscape.overviewBounds();
  for(const viewport of [{width:1200,height:600},{width:1022,height:527},{width:1600,height:800}])
    assert.deepEqual(Explorer.fitCamera(whole,viewport,true),whole);
});

test('touch scrolling is the default and map movement has an explicit reversible mode',t=>{
  globalThis.requestAnimationFrame??=()=>0;globalThis.cancelAnimationFrame??=()=>{};
  const f=fixture(t),view=model.mount(f.host);
  const fire=(node,type,event)=>{for(const handler of node.listeners.get(type)||[])handler({type,preventDefault(){},...event});};
  fire(f.canvas,'pointerdown',{button:0,pointerType:'touch',pointerId:1,clientX:300,clientY:300});
  fire(f.canvas,'pointermove',{buttons:1,pointerType:'touch',pointerId:1,clientX:330,clientY:320});
  assert.equal(f.canvas.dataset.dragging,undefined);
  const toggle=new Element('button');toggle.setAttribute('data-world-interact','');toggle.closest=()=>toggle;
  fire(f.host,'click',{detail:1,target:toggle});
  assert.equal(toggle.getAttribute('aria-pressed'),'true');
  fire(f.canvas,'pointerdown',{button:0,pointerType:'touch',pointerId:2,clientX:300,clientY:300});
  fire(f.canvas,'pointermove',{buttons:1,pointerType:'touch',pointerId:2,clientX:330,clientY:320});
  assert.equal(f.canvas.dataset.dragging,'true');
  fire(f.host,'click',{detail:0,target:toggle});
  assert.equal(toggle.getAttribute('aria-pressed'),'false');
  assert.equal(f.canvas.dataset.dragging,undefined);
  view.destroy();
});

test('mounted resize observation is scoped and removed during cleanup',t=>{
  globalThis.requestAnimationFrame??=()=>0;globalThis.cancelAnimationFrame??=()=>{};
  const previous=globalThis.ResizeObserver;let observed=0,disconnected=0;
  globalThis.ResizeObserver=class{constructor(callback){this.callback=callback;}observe(){observed++;}disconnect(){disconnected++;}};
  t.after(()=>{if(previous===undefined)delete globalThis.ResizeObserver;else globalThis.ResizeObserver=previous;});
  const f=fixture(t),view=model.mount(f.host);
  assert.equal(observed,1);view.destroy();view.destroy();assert.equal(disconnected,1);
});
