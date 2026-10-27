import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Explorer=require('../src/atlas-explorer.js');
const source=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(file=>file.endsWith('.json')).map(file=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+file,import.meta.url),'utf8')));
const sources=JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources;
const atlas=Explorer.create({cards,sources});

// Exercise the application's actual navigation and router code, with the real
// explorer controller. Only the browser DOM/history and unrelated pages are faked.
function appNavigationSource(){
  const atlasStart=source.indexOf('function atlasPage('),atlasEnd=source.indexOf('\nfunction missing(',atlasStart);
  const routeStart=source.indexOf('function route('),routeEnd=source.indexOf("\ndocument.getElementById('cancel-capture')",routeStart);
  const eventsStart=source.indexOf("window.addEventListener('hashchange',route);"),eventsEnd=source.lastIndexOf('\n})();');
  assert.ok(atlasStart>=0&&atlasEnd>atlasStart&&routeStart>=0&&routeEnd>routeStart&&eventsStart>=0&&eventsEnd>eventsStart,'Application navigation entry points remain identifiable');
  return source.slice(atlasStart,atlasEnd)+'\n'+source.slice(routeStart,routeEnd)+'\n'+source.slice(eventsStart,eventsEnd);
}

class Element{
  constructor(tag='div'){this.tagName=tag.toUpperCase();this.attrs={};this.dataset={};this.hidden=false;this.disabled=false;this.value='';this.innerHTML='';this.listeners=new Map();this.children=new Map();this.replacements=0;}
  addEventListener(name,handler){if(!this.listeners.has(name))this.listeners.set(name,new Set());this.listeners.get(name).add(handler);}
  removeEventListener(name,handler){this.listeners.get(name)?.delete(handler);}
  querySelector(selector){if(!this.children.has(selector))this.children.set(selector,new Element(selector==='svg'?'svg':'div'));return this.children.get(selector);}
  querySelectorAll(){return[];}
  setAttribute(name,value){this.attrs[name]=String(value);}
  getAttribute(name){return this.attrs[name]??null;}
  hasAttribute(name){return Object.hasOwn(this.attrs,name);}
  replaceChildren(){this.innerHTML='';this.children.clear();this.replacements++;}
  getBoundingClientRect(){return{width:900,height:600};}
  contains(){return true;}
  focus(){}
  scrollIntoView(){}
}

function browserFixture(t,initialHash='#atlas'){
  const previousMedia=globalThis.matchMedia;
  globalThis.matchMedia=()=>({matches:true,addEventListener(){},removeEventListener(){}});
  t.after(()=>{if(previousMedia===undefined)delete globalThis.matchMedia;else globalThis.matchMedia=previousMedia;});
  const main=new Element(),events=new Map(),entries=[initialHash],writes=[],mounts=[],outside=[];
  let cursor=0;
  const location={get hash(){return entries[cursor];}};
  function emit(name,event){for(const listener of events.get(name)||[])listener(event);}
  function travel(next){
    if(next<0||next>=entries.length)return false;
    const oldURL='https://example.test/'+location.hash;cursor=next;
    emit('popstate',{type:'popstate',state:null});
    emit('hashchange',{type:'hashchange',oldURL,newURL:'https://example.test/'+location.hash});
    return true;
  }
  const history={
    pushState(_state,_title,url){const hash=new URL(url,'https://example.test/').hash;entries.splice(cursor+1);entries.push(hash);cursor++;writes.push({type:'push',hash});},
    replaceState(_state,_title,url){const hash=new URL(url,'https://example.test/').hash;entries[cursor]=hash;writes.push({type:'replace',hash});},
    back(){return travel(cursor-1);},
    forward(){return travel(cursor+1);}
  };
  const context={
    main,location,history,atlasController:null,
    document:{title:'',querySelectorAll:()=>[],getElementById:()=>new Element()},
    window:{scrollTo(){},addEventListener(name,listener){if(!events.has(name))events.set(name,new Set());events.get(name).add(listener);}},
    updateCount(){},
    clearStudios(){context.atlasController?.destroy();context.atlasController=null;},
    atlasData:{mount(host,options){mounts.push([...options.path]);return atlas.mount(host,options);}}
  };
  for(const page of ['explore','indexPage','searchPage','cardPage','workbench','notebookPage','missing'])context[page]=()=>outside.push(page);
  vm.runInContext(appNavigationSource(),vm.createContext(context),{filename:'app-navigation-under-test.js'});
  t.after(()=>context.atlasController?.destroy());
  return{main,entries,writes,mounts,history,location,outside,view:()=>context.atlasController};
}

test('territory and area selections add separate browser entries without remounting or duplicating the same route',t=>{
  const browser=browserFixture(t),initial=browser.view();
  assert.equal(initial.selectRegion('structures'),true);
  assert.equal(browser.location.hash,'#atlas/map/structures');
  assert.equal(initial.selectTopic('structures:linear-algebra'),true);
  assert.equal(browser.location.hash,'#atlas/map/structures/linear-algebra');
  assert.deepEqual(browser.entries,['#atlas','#atlas/map/structures','#atlas/map/structures/linear-algebra']);
  assert.equal(initial.selectTopic('structures:linear-algebra'),true);
  assert.equal(browser.entries.length,3,'Re-selecting the exact current area adds no duplicate entry');
  assert.equal(browser.writes.length,2);
  assert.ok(browser.writes.every(write=>write.type==='push'));
  assert.equal(browser.view(),initial,'The current explorer already painted the selection');
  assert.equal(browser.mounts.length,1);
  assert.equal(browser.main.replacements,1);
});

test('Back and Forward restore the selected territory and area through the real application hashchange route',t=>{
  const browser=browserFixture(t);
  browser.view().selectRegion('structures');
  browser.view().selectTopic('structures:linear-algebra');
  browser.view().selectRegion('change');
  browser.view().selectTopic('change:calculus');
  const prior=browser.view(),length=browser.entries.length,writes=browser.writes.length;
  assert.equal(browser.history.back(),true);
  assert.equal(browser.location.hash,'#atlas/map/change');
  assert.equal(browser.view().getState().regionId,'change');
  assert.equal(browser.view().getState().topicId,null);
  assert.equal(prior.selectRegion('numbers'),false,'The previous mounted explorer was cleaned up');
  assert.equal(browser.history.back(),true);
  assert.equal(browser.location.hash,'#atlas/map/structures/linear-algebra');
  assert.equal(browser.view().getState().topicId,'structures:linear-algebra');
  assert.equal(browser.history.back(),true);
  assert.equal(browser.view().getState().regionId,'structures');
  assert.equal(browser.view().getState().topicId,null);
  assert.equal(browser.history.back(),true);
  assert.equal(browser.location.hash,'#atlas');
  assert.equal(browser.view().getState().regionId,null);
  assert.equal(browser.view().getState().mode,'map');
  assert.equal(browser.history.back(),false);
  for(const expected of ['#atlas/map/structures','#atlas/map/structures/linear-algebra','#atlas/map/change','#atlas/map/change/calculus']){
    assert.equal(browser.history.forward(),true);
    assert.equal(browser.location.hash,expected);
  }
  assert.equal(browser.view().getState().topicId,'change:calculus');
  assert.equal(browser.history.forward(),false);
  assert.equal(browser.entries.length,length);
  assert.equal(browser.writes.length,writes,'Restoring an existing entry does not write another one');
  assert.equal(browser.outside.length,0,'Map history remains within Atlas instead of leaving the page');
  assert.equal(browser.main.listeners.get('click').size,1,'Hash routing replaces rather than duplicates the explorer listeners');
});

test('connection-mode URLs retain their selected concept across Back and Forward',t=>{
  const browser=browserFixture(t,'#atlas/map/change/calculus');
  assert.equal(browser.view().getState().topicId,'change:calculus','A deep link restores its area initially');
  browser.view().showConnections('derivative');
  assert.equal(browser.location.hash,'#atlas/derivative');
  assert.equal(browser.view().getState().mode,'connections');
  assert.equal(browser.view().getState().selectedSlug,'derivative');
  browser.view().showConnections('derivative');
  assert.equal(browser.entries.length,2);
  assert.equal(browser.history.back(),true);
  assert.equal(browser.view().getState().mode,'map');
  assert.equal(browser.view().getState().topicId,'change:calculus');
  assert.equal(browser.history.forward(),true);
  assert.equal(browser.location.hash,'#atlas/derivative');
  assert.equal(browser.view().getState().mode,'connections');
  assert.equal(browser.view().getState().selectedSlug,'derivative');
  assert.equal(browser.outside.length,0);
});
