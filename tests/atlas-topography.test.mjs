import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Topography=require('../src/atlas-topography.js');
const geography={field:{path:'M0 0H100V100H0Z',anchor:[50,50],color:'#d9e5d1'}};
const region=availableCount=>({id:'field',availableCount,plannedCount:12,title:'A field'});

test('topography is a pure offline provider with no document, timer or archived image dependency',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/atlas-topography.js',import.meta.url),'utf8'),context);
  assert.deepEqual(Object.keys(context),['AtlasTopography']);
  assert.equal(typeof context.AtlasTopography.render,'function');
  assert.ok(Object.isFrozen(Topography));
  assert.doesNotMatch(Topography.render({regions:[region(3)],geography}),/<image|<filter|<script|data:image|AtlasTerrain|NaN|Infinity/);
});

test('the real collection supplies exact deduplicated peaks and one contour per available lesson',()=>{
  require('../src/catalog.js');
  const regions=require('../src/atlas-regions.js').create(globalThis.AtlasCatalog).regions;
  const expected={foundations:3,numbers:5,structures:13,spaces:5,change:13,uncertainty:3,computation:2,applications:11};
  assert.deepEqual(Object.fromEntries(regions.map(item=>[item.id,item.availableCount])),expected);
  assert.deepEqual(Topography.metrics(regions),{maximum:13,interval:1});
  const landscape=require('../src/atlas-landscape.js').render({regions});
  assert.equal((landscape.match(/data-contour-level=/g)||[]).length,55);
  for(const [id,height]of Object.entries(expected))assert.match(landscape,new RegExp('data-topography-region="'+id+'" data-summit-height="'+height+'"'));
  for(const item of regions)assert.equal(item.availableCount,new Set(item.availableCards.map(card=>card.id)).size);
});

test('integer contour levels rise toward an exact flat summit without passing its height',()=>{
  for(const peak of [1,2,3,13,24]){
    const result=Topography.levels(peak);
    assert.equal(result.length,peak);
    assert.deepEqual(result.map(level=>level.height),Array.from({length:peak},(_,index)=>index+1));
    assert.equal(result.at(-1).height,peak);assert.equal(result.at(-1).summit,true);assert.equal(result.at(-1).scale,.14);
    assert.ok(result.every((level,index)=>level.scale>0&&level.scale<1&&(!index||level.scale<result[index-1].scale)));
    assert.ok(Object.isFrozen(result)&&result.every(Object.isFrozen));
  }
});

test('adding a playable lesson changes its hill while planned inventory does not',()=>{
  const first=[region(3)],before=JSON.stringify(first),a=Topography.render({regions:first,geography,id:'a'});
  const planned=Topography.render({regions:[{...first[0],plannedCount:900}],geography,id:'a'});
  const available=Topography.render({regions:[region(4)],geography,id:'a'});
  assert.equal(a,planned);
  assert.notEqual(a,available);
  assert.equal((a.match(/data-contour-level=/g)||[]).length,3);
  assert.equal((available.match(/data-contour-level=/g)||[]).length,4);
  assert.ok(Topography.levels(4)[0].scale>Topography.levels(3)[0].scale,'An additional lesson expands the lower contour');
  assert.equal(JSON.stringify(first),before);
});

test('large future collections use a bounded stated interval while retaining the exact peak',()=>{
  for(const maximum of [25,29,100,999,1000000]){
    const {interval}=Topography.metrics([region(maximum)]),levels=Topography.levels(maximum,interval);
    assert.ok(interval>1&&Number.isInteger(interval));assert.ok(levels.length<=25);
    assert.equal(levels.at(-1).height,maximum);
    assert.ok(levels.slice(0,-1).every(level=>level.height%interval===0));
    const html=Topography.render({regions:[region(maximum)],geography});
    const contourValues=[...html.matchAll(/data-contour-level="(\d+)"/g)].map(match=>Number(match[1]));
    assert.ok(contourValues.every(level=>level%interval===0));
    assert.ok(html.includes('data-highest-summit="'+maximum+'"'));
    assert.ok(Topography.legend([region(maximum)]).includes('Contours: '+interval+' lessons'));
  }
});

test('zero and invalid counts produce no false hills or nonfinite geometry',()=>{
  for(const value of [0,-1,NaN,Infinity,'3',2.5,Number.MAX_SAFE_INTEGER+1]){
    assert.deepEqual(Topography.metrics([region(value)]),{maximum:0,interval:1});
    assert.deepEqual(Topography.levels(value),[]);
    const html=Topography.render({regions:[region(value)],geography});
    assert.ok(html.includes('data-summit-height="0"'));assert.doesNotMatch(html,/data-contour-level=|NaN|Infinity/);
  }
  const skipped=Topography.render({regions:[{id:'unknown',availableCount:999},region(3)],geography});
  assert.ok(skipped.includes('data-highest-summit="3"'));
});

test('all relief is pointer-transparent and clipped inside its own territory',()=>{
  const html=Topography.render({regions:[region(3)],geography,id:'a b'});
  assert.match(html,/class="atlas-topography" aria-hidden="true" pointer-events="none"/);
  assert.doesNotMatch(html,/tabindex|role="button"|data-atlas-region/);
  const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  for(const [,id]of html.matchAll(/clip-path="url\(#([^\)]+)\)"/g))assert.ok(ids.has(id));
  const other=Topography.render({regions:[region(3)],geography,id:'a_b'});
  assert.ok([...other.matchAll(/\bid="([^"]+)"/g)].every(match=>!ids.has(match[1])));
  assert.doesNotMatch(Topography.render({regions:[region(3)],geography,overview:false}),/class="atlas-topography-summit"/);
});

test('geometry strings are inert and malformed anchors are skipped',()=>{
  const hostile={field:{...geography.field,path:'M0 0" onload="bad()',color:'"/><script>bad()</script>'}};
  const html=Topography.render({regions:[region(3)],geography:hostile,id:'<bad>'});
  assert.doesNotMatch(html,/<script\b|onload="bad/);assert.match(html,/&quot; onload=&quot;bad/);
  for(const anchor of [null,[NaN,2],[2],['2',3]]){
    const empty=Topography.render({regions:[region(3)],geography:{field:{...geography.field,anchor}}});
    assert.doesNotMatch(empty,/data-topography-region=/);
  }
});

test('the legend distinguishes lesson availability from schematic slopes and overlapping fields once',()=>{
  const text=Topography.legend([region(3)]);
  assert.match(text,/Height = playable lessons/);assert.match(text,/Contours: 1 lesson · Highest summit: 3/);
  assert.match(text,/slopes are schematic/);assert.match(text,/A lesson can appear in more than one territory/);
  assert.doesNotMatch(text,/difficulty|prerequisite|mastery|progress|percent|%/);
});
