import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Landscape=require('../src/atlas-landscape.js');
const Regions=require('../src/atlas-regions.js');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const coverage=fs.readFileSync(new URL('../content/coverage.csv',import.meta.url),'utf8').trim().split(/\r?\n/).slice(1).map(line=>{const[id,title]=line.split(',');return{id,title};});
const atlas=Regions.create({cards,coverage});
const regions=atlas.regions;
const attributes=html=>Object.fromEntries([...html.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));

test('cartographic renderer loads as a pure offline provider without a document or clock',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/atlas-landscape.js',import.meta.url),'utf8'),context);
  assert.deepEqual(Object.keys(context),['AtlasLandscape']);
  assert.equal(typeof context.AtlasLandscape.render,'function');
  assert.ok(Object.isFrozen(Landscape));
});

test('all eight territories and their 24 current topic identities are selectable and described',()=>{
  const before=JSON.stringify(regions),html=Landscape.render({regions,id:'all-regions'});
  assert.equal(JSON.stringify(regions),before);
  assert.match(html,/class="atlas-landscape-svg"/);
  assert.match(html,/viewBox="0 0 1200 740"/);
  assert.doesNotMatch(html,/\b(?:NaN|Infinity)\b|<script\b|on(?:click|load)=/i);
  const regionGroups=[...html.matchAll(/<g\b[^>]*\bdata-atlas-region="([^"]+)"[^>]*>/g)];
  const topicGroups=[...html.matchAll(/<g\b[^>]*\bdata-atlas-topic="([^"]+)"[^>]*>/g)];
  assert.deepEqual(regionGroups.map(match=>match[1]),regions.map(region=>region.id));
  assert.deepEqual(topicGroups.map(match=>match[1]),regions.flatMap(region=>region.topics.map(topic=>topic.id)));
  assert.equal(regionGroups.length,8);assert.equal(topicGroups.length,24);
  for(const match of [...regionGroups,...topicGroups]){
    const attrs=attributes(match[0]);assert.equal(attrs.role,'button');assert.equal(attrs.tabindex,'0');
    assert.equal(attrs['aria-pressed'],'false');assert.match(attrs['aria-label'],/available cards and \d+ planned concepts/);
  }
  for(const region of regions){
    assert.ok(html.includes(region.shortTitle));
    for(const topic of region.topics)assert.ok(html.includes(topic.id));
  }
  assert.match(html,/Explore Linear algebra/);assert.match(html,/Explore Algorithms/);assert.match(html,/Explore Linear-time algorithms/);
  assert.match(html,/Fields overlap/);
});

test('regions and topic camera bounds are finite fresh records that preserve local context',()=>{
  assert.deepEqual(Landscape.overviewBounds(),{x:0,y:0,width:1200,height:740});
  for(const region of regions){
    const bounds=Landscape.boundsForRegion(region.id);
    assert.ok(['x','y','width','height'].every(key=>Number.isFinite(bounds[key])));
    assert.ok(bounds.width>0&&bounds.height>0&&bounds.x>=0&&bounds.y>=0);
    assert.ok(bounds.x+bounds.width<=1200&&bounds.y+bounds.height<=740);
    assert.notEqual(bounds,Landscape.boundsForRegion(region.id));
    for(const topic of region.topics){assert.deepEqual(Landscape.boundsForTopic(topic.id),bounds);assert.deepEqual(Landscape.boundsForTopic(topic.shortId),bounds);}
  }
  assert.equal(Landscape.boundsForRegion('__proto__'),null);
  assert.equal(Landscape.boundsForTopic('unknown:linear-algebra'),null);
  assert.equal(Landscape.boundsForTopic(null),null);
  const changed=Landscape.boundsForRegion('structures');changed.x=9999;
  assert.notEqual(Landscape.boundsForRegion('structures').x,9999);
});

test('camera input never injects invalid coordinates and selections identify exactly one hotspot',()=>{
  const viewBox=Landscape.boundsForTopic('structures:linear-algebra');
  const html=Landscape.render({regions,selectedRegion:'structures',selectedTopic:'structures:linear-algebra',viewBox});
  assert.match(html,new RegExp('viewBox="'+[viewBox.x,viewBox.y,viewBox.width,viewBox.height].join(' ')+'"'));
  assert.equal((html.match(/aria-pressed="true"/g)||[]).length,2);
  assert.match(html,/data-atlas-topic="structures:linear-algebra" role="button" tabindex="0" aria-pressed="true"/);
  for(const invalid of [{x:0,y:0,width:NaN,height:500},{x:0,y:0,width:-1,height:500},'0 0 2 2',null])assert.match(Landscape.render({regions,viewBox:invalid}),/viewBox="0 0 1200 740"/);
});

test('identifiers, authored labels and descriptions remain inert and independently namespaced',()=>{
  const changed=JSON.parse(JSON.stringify(regions));
  changed[0].shortTitle='<img onerror="run()">';changed[0].topics[0].title='A "quoted" <topic>';
  changed[0].topics[0].shortTitle='A <topic>';changed[0].topics[0].description='<script>run()</script>';
  const a=Landscape.render({regions:changed,id:'a b'}),b=Landscape.render({regions:changed,id:'a_b'});
  assert.doesNotMatch(a,/<img\b|<script\b/);assert.match(a,/&lt;topic&gt;/);
  const idsA=new Set([...a.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  const idsB=new Set([...b.matchAll(/\bid="([^"]+)"/g)].map(match=>match[1]));
  assert.ok([...idsA].every(id=>!idsB.has(id)));
  for(const ref of a.matchAll(/url\(#([^\)]+)\)/g))assert.ok(idsA.has(ref[1]));
});

test('mathematical decoration is separate from every interactive topic and bounds stay inside the map',()=>{
  const html=Landscape.render({regions});
  assert.match(html,/class="atlas-terrain-motif" aria-hidden="true" pointer-events="none"/);
  const topics=[...html.matchAll(/<g class="atlas-terrain-topic[^>]*>([\s\S]*?)<\/g>/g)];
  for(const[,body]of topics){
    const rect=attributes(body.match(/<rect\b[^>]*>/)[0]);
    const x=Number(rect.x),y=Number(rect.y),width=Number(rect.width),height=Number(rect.height);
    assert.ok(x>=0&&y>=0&&width>0&&height>=38&&x+width<=1200&&y+height<=740);
    assert.doesNotMatch(body,/data-atlas-region=/,'topic buttons are not nested in a region button');
  }
  assert.equal(topics.length,24);
});
