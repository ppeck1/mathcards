import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Regions=require('../src/atlas-regions.js');
const cards=fs.readdirSync(new URL('../content/cards/',import.meta.url)).filter(name=>name.endsWith('.json')).map(name=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+name,import.meta.url),'utf8')));
const csv=fs.readFileSync(new URL('../content/coverage.csv',import.meta.url),'utf8').trim().split(/\r?\n/).map(line=>line.split(','));
const coverage=csv.slice(1).map(row=>Object.fromEntries(csv[0].map((key,i)=>[key,row[i]])));
const model=Regions.create({cards,coverage});
const ids=new Set([...cards.map(card=>card.id),...coverage.map(row=>row.id)]);

test('region data loads offline without DOM, model evaluation, clocks or storage',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/atlas-regions.js',import.meta.url),'utf8'),context);
  assert.deepEqual(Object.keys(context),['AtlasRegions']);
  assert.equal(context.AtlasRegions.create({cards,coverage}).regions.length,8);
  assert.ok(Object.isFrozen(Regions));
});

test('eight editorial territories expose three immutable named portions each and cover all available cards',()=>{
  assert.deepEqual(model.regions.map(region=>region.id),['foundations','numbers','structures','spaces','change','uncertainty','computation','applications']);
  assert.equal(model.topics.length,24);
  assert.equal(model.availableCount,38);
  assert.equal(new Set(model.topics.flatMap(topic=>topic.availableCards.map(card=>card.id))).size,cards.length);
  for(const region of model.regions){
    assert.equal(region.topics.length,3);assert.ok(Object.isFrozen(region)&&Object.isFrozen(region.topics));
    assert.equal(model.getRegion(region.id),region);
    assert.equal(region.availableCount,new Set(region.topics.flatMap(topic=>topic.availableCards.map(card=>card.id))).size);
    assert.equal(region.plannedCount,new Set(region.topics.flatMap(topic=>topic.plannedConcepts.map(concept=>concept.id))).size);
    for(const topic of region.topics){
      assert.equal(topic.id,region.id+':'+topic.shortId);assert.equal(topic.regionId,region.id);
      assert.equal(model.getTopic(topic.id),topic);assert.ok(Object.isFrozen(topic)&&Object.isFrozen(topic.aliases));
      assert.ok(topic.description.length>30);assert.ok(topic.shortTitle.length<=20);
      for(const id of topic.conceptIds)assert.ok(ids.has(id),id);
      for(const card of topic.availableCards){assert.equal(card.available,true);assert.equal(card.href,'#card/'+card.slug);assert.ok(Object.isFrozen(card));}
      for(const concept of topic.plannedConcepts){assert.equal(concept.available,false);assert.equal(concept.href,null);assert.ok(coverage.some(row=>row.id===concept.id));}
    }
  }
});

test('linear algebra and linear-time algorithms remain distinct navigable search choices',()=>{
  const algebra=model.getTopic('structures:linear-algebra'),algorithms=model.getTopic('computation:linear-time-algorithms');
  assert.ok(algebra.availableCards.some(card=>card.slug==='vector-rotation'));
  assert.ok(algebra.availableCards.some(card=>card.slug==='complex-multiplication'));
  assert.equal(algorithms.availableCount,1);
  assert.deepEqual(algorithms.availableCards.map(card=>card.slug),['computational-complexity']);
  assert.deepEqual(algorithms.plannedConcepts,[]);
  assert.match(algebra.description,/Algorithm running time is a separate topic/);
  assert.match(algorithms.description,/no linear-time claim/);
  assert.deepEqual(model.search('linear algorithms').map(topic=>topic.id),['structures:linear-algebra','computation:linear-time-algorithms','computation:algorithms']);
  assert.equal(model.search('linear algebra')[0],algebra);
  assert.equal(model.search('O(n)')[0],algorithms);
  assert.ok(model.search('matrix').includes(algebra));
  assert.deepEqual(model.search('    '),[]);assert.deepEqual(model.search(null),[]);
});

test('actual availability wins over coverage status without inventing cards for planned concepts',()=>{
  const promoted={id:'math:concept:vector-space',slug:'vector-space',title:'Vector spaces',publication_status:'draft'};
  const expanded=Regions.create({cards:[...cards,promoted],coverage});
  const topic=expanded.getTopic('structures:linear-algebra');
  assert.ok(topic.availableCards.some(card=>card.id===promoted.id));
  assert.ok(!topic.plannedConcepts.some(card=>card.id===promoted.id));
  assert.equal(expanded.availableCount,cards.length+1);
  const absent=Regions.create({cards:cards.filter(card=>card.slug!=='graph-theory'),coverage}).getTopic('computation:graphs-and-networks');
  assert.equal(absent.availableCount,0);
  assert.equal(absent.plannedConcepts.find(concept=>concept.id==='math:concept:graph-theory').status,'unavailable');
});

test('projection owns its data, uses safe lookup, and permits empty or partial collections',()=>{
  const source=JSON.parse(JSON.stringify(cards)),inventory=JSON.parse(JSON.stringify(coverage));
  const isolated=Regions.create({cards:source,coverage:inventory});
  source[0].title='Changed';inventory[0].title='Changed';
  assert.ok(!isolated.topics.some(topic=>topic.availableCards.some(card=>card.title==='Changed')));
  const results=isolated.search('linear algorithms');results.pop();assert.equal(isolated.search('linear algorithms').length,3);
  for(const key of ['__proto__','constructor','toString',null,{}]){assert.equal(model.getRegion(key),null);assert.equal(model.getTopic(key),null);}
  assert.equal(Regions.create().availableCount,0);assert.equal(Regions.create().plannedCount,0);
  assert.equal(Regions.create({cards}).availableCount,38);
  assert.throws(()=>Regions.create({cards:{}}),TypeError);
  assert.throws(()=>Regions.create({cards:[cards[0],cards[0]]}),/Duplicate/);
  assert.throws(()=>Regions.create({coverage:[coverage[0],coverage[0]]}),/Duplicate/);
});
