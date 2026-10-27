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
  assert.match(html,/viewBox="0 0 1200 800"/);
  assert.doesNotMatch(html,/\b(?:NaN|Infinity)\b|<script\b|on(?:click|load)=/i);
  const regionGroups=[...html.matchAll(/<g\b[^>]*\bdata-atlas-region="([^"]+)"[^>]*>/g)];
  const topicGroups=[...html.matchAll(/<g\b[^>]*\bdata-atlas-topic="([^"]+)"[^>]*>/g)];
  assert.deepEqual(regionGroups.map(match=>match[1]),regions.map(region=>region.id));
  assert.deepEqual(topicGroups.map(match=>match[1]),regions.flatMap(region=>region.topics.map(topic=>topic.id)));
  assert.equal(regionGroups.length,8);assert.equal(topicGroups.length,24);
  for(const match of [...regionGroups,...topicGroups]){
    const attrs=attributes(match[0]);assert.equal(attrs.role,'button');assert.equal(attrs.tabindex,match[0].includes('data-atlas-topic')?'-1':'0');
    assert.equal(attrs['aria-pressed'],'false');assert.match(attrs['aria-label'],/available cards and \d+ planned concepts/);
  }
  for(const region of regions){
    assert.ok(html.includes(region.title));
    for(const topic of region.topics)assert.ok(html.includes(topic.id));
  }
  assert.match(html,/Explore Linear algebra/);assert.match(html,/Explore Algorithms/);assert.match(html,/Explore Linear-time algorithms/);
  assert.ok(html.includes('fields overlap'));
});

test('regions and topic camera bounds are finite fresh records that preserve local context',()=>{
  assert.deepEqual(Landscape.overviewBounds(),{x:0,y:0,width:1200,height:800});
  for(const region of regions){
    const bounds=Landscape.boundsForRegion(region.id);
    assert.ok(['x','y','width','height'].every(key=>Number.isFinite(bounds[key])));
    assert.ok(bounds.width>0&&bounds.height>0&&bounds.x>=0&&bounds.y>=0);
    assert.ok(bounds.x+bounds.width<=1200&&bounds.y+bounds.height<=800);
    assert.notEqual(bounds,Landscape.boundsForRegion(region.id));
    for(const topic of region.topics){const local=Landscape.boundsForTopic(topic.id);assert.notDeepEqual(local,bounds);assert.deepEqual(Landscape.boundsForTopic(topic.shortId),local);assert.ok(local.width<bounds.width&&local.height<bounds.height);const point=Landscape.topicLocation(topic.id);assert.ok(point.x>local.x&&point.x<local.x+local.width&&point.y>local.y&&point.y<local.y+local.height);}
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
  const selected=html.match(/<g[^>]*data-atlas-topic="structures:linear-algebra"[^>]*>/)[0];assert.equal(attributes(selected)['aria-pressed'],'true');assert.equal(attributes(selected).tabindex,'0');
  for(const invalid of [{x:0,y:0,width:NaN,height:500},{x:0,y:0,width:-1,height:500},'0 0 2 2',null])assert.match(Landscape.render({regions,viewBox:invalid}),/viewBox="0 0 1200 800"/);
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

test('flat field colors identify semantic territories without encoding invented elevation',()=>{
  const html=Landscape.render({regions,selectedRegion:'structures'});
  assert.ok(html.includes('class="atlas-field-territories"'));
  assert.doesNotMatch(html,/<image\b|<filter\b|data:image|atlas-relief|atlas-contours|elevation|mountain/i);
  assert.ok(html.includes('Territory colors identify fields.'));
  for(const region of regions)assert.match(Landscape.regionColor(region.id),/^#[a-f0-9]{6}$/i);
  assert.equal(Landscape.regionColor('not-a-field'),'#e8ecdf');
  assert.ok(!html.includes('atlas-terrain-motif'));
  const topics=[...html.matchAll(/<g class="atlas-terrain-topic[^>]*>([\s\S]*?)<\/g>/g)];
  assert.equal(topics.length,24);
  for(const[,body]of topics){
    assert.ok(body.includes('class="atlas-marker-target" r="22"'),'A small marker has a 44 CSS pixel inverse-scaled target');
    assert.ok(!body.includes('<rect'),'No three rectangular topic-pill stacks');
    assert.ok(!body.includes('data-atlas-region='));
  }
});

test('a phone overview shows all eight field names on the complete map without label collisions',()=>{
  for(const width of [280,300,320,345,360,390,430]){
    const viewport={width,height:width*2/3};
    const labels=Landscape.labelLayout({regions,viewBox:Landscape.overviewBounds(),viewport});
    assert.equal(labels.length,8);
    assert.ok(labels.every(label=>label.visible),'All eight labels are visible at '+width+' px');
    assert.deepEqual(new Set(labels.map(label=>label.text)),new Set(regions.map(region=>region.shortTitle)));
    for(const label of labels){assert.equal(label.fontSize,13);assert.ok(label.box.x>=7&&label.box.y>=7&&label.box.x+label.box.width<=width-7&&label.box.y+label.box.height<=viewport.height-7);}
    for(let i=0;i<labels.length;i++)for(let j=i+1;j<labels.length;j++){
      const a=labels[i].box,b=labels[j].box;
      assert.ok(a.x+a.width+6<=b.x||b.x+b.width+6<=a.x||a.y+a.height+5<=b.y||b.y+b.height+5<=a.y);
    }
  }
});

test('semantic labels prioritize the selected area, suppress collisions, and retain screen-sized fonts',()=>{
  for(const width of [360,390,430,768,1200]){
    const viewport={width,height:width<500?440:590},box=Landscape.boundsForTopic('change:calculus');
    const labels=Landscape.labelLayout({regions,selectedRegion:'change',selectedTopic:'change:calculus',viewBox:box,viewport});
    assert.equal(labels.find(label=>label.id==='topic:change:calculus').visible,true);
    for(const label of labels)assert.equal(label.fontSize,label.kind==='region'?18:label.kind==='card'?13:14);
    assert.ok(labels.filter(label=>label.visible).length>=1);
    const visible=labels.filter(label=>label.visible);
    for(let i=0;i<visible.length;i++)for(let j=i+1;j<visible.length;j++){
      const a=visible[i].box,b=visible[j].box;
      assert.ok(a.x+a.width+6<=b.x||b.x+b.width+6<=a.x||a.y+a.height+5<=b.y||b.y+b.height+5<=a.y,'Visible label boxes do not overlap');
    }

  }
});

test('an area can expose real lesson destinations, while its readable provider remains complete',()=>{
  const html=Landscape.render({regions,selectedRegion:'change',selectedTopic:'change:calculus',viewBox:Landscape.boundsForTopic('change:calculus')});
  assert.ok(html.includes('class="atlas-card-destination"'));
  for(const match of html.matchAll(/<a href="([^"]+)" class="atlas-card-destination"/g))assert.ok(atlas.getTopic('change:calculus').availableCards.some(card=>card.href===match[1]));
  const first=Landscape.topicLocation('change:calculus');first.x=99999;
  assert.notEqual(Landscape.topicLocation('change:calculus').x,first.x);
});

test('lesson labels exist before a camera transition so zooming can reveal their text',()=>{
  const state={regions,selectedRegion:'change',selectedTopic:'change:calculus'};
  const wide=Landscape.labelLayout({...state,viewBox:Landscape.overviewBounds()}),near=Landscape.labelLayout({...state,viewBox:Landscape.boundsForTopic('change:calculus')});
  const before=wide.filter(label=>label.kind==='card'),after=near.filter(label=>label.kind==='card');
  assert.equal(before.length,4);
  assert.deepEqual(before.map(label=>label.id),after.map(label=>label.id));
  assert.ok(before.every(label=>!label.visible));
  assert.ok(after.some(label=>label.visible));
  const html=Landscape.render({...state,viewBox:Landscape.overviewBounds()});
  assert.ok(html.includes('data-terrain-label="card:derivative"'));
});

test('labels avoid camera, locator and touch controls at phone and desktop sizes',()=>{
  const Explorer=require('../src/atlas-explorer.js');
  const apart=(a,b)=>a.x+a.width+6<=b.x||b.x+b.width+6<=a.x||a.y+a.height+5<=b.y||b.y+b.height+5<=a.y;
  for(const width of [320,350,360,390,430,768,1200]){
    const viewport={width,height:width<500?506:590},reserved=Landscape.reservedBoxes(viewport);
    assert.deepEqual(reserved.map(box=>box.id),['camera-controls','locator','touch-toggle']);
    for(const region of regions)for(const topic of region.topics){
      const viewBox=Explorer.fitCamera(Landscape.boundsForTopic(topic.id),viewport);
      const labels=Landscape.labelLayout({regions,selectedRegion:region.id,selectedTopic:topic.id,viewBox,viewport});
      assert.equal(labels.find(label=>label.id==='topic:'+topic.id).visible,true,'Selected '+topic.id+' stays readable at '+width+' px');
      for(const label of labels.filter(label=>label.visible))for(const control of reserved)assert.ok(apart(label.box,control),label.id+' must clear '+control.id+' at '+width+' px');
    }
  }
});

test('a lesson near the top-right tools moves its label into free space',()=>{
  const Explorer=require('../src/atlas-explorer.js'),viewport={width:322,height:506};
  const labels=Landscape.labelLayout({regions,selectedRegion:'change',selectedTopic:'change:calculus',viewBox:Explorer.fitCamera(Landscape.boundsForTopic('change:calculus'),viewport),viewport});
  const integral=labels.find(label=>label.id==='card:integral-accumulation');
  assert.equal(integral.visible,true);
  const tools=Landscape.reservedBoxes(viewport)[0],box=integral.box;
  assert.ok(box.y>=tools.y+tools.height+5||box.x+box.width+6<=tools.x,'Integral label is placed below or to the left of the camera tools');
});
