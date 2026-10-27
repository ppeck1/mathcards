import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Order=require('../src/learning-order.js'),Models=require('../src/atlas-gaps.js'),Player=require('../src/life-story.js'),Stories=require('../src/atlas-gap-stories.js');
require('../src/catalog.js');

test('learner order covers every available concept once without changing provider order',()=>{
  const cards=globalThis.AtlasCatalog.cards,before=cards.map(card=>card.slug),ordered=Order.order(cards);
  assert.equal(new Set(Order.slugs).size,Order.slugs.length);
  assert.deepEqual(new Set(Order.slugs),new Set(before));
  assert.deepEqual(cards.map(card=>card.slug),before);
  assert.equal(ordered[0].slug,'ratio-scale');
  const position=slug=>ordered.findIndex(card=>card.slug===slug);
  assert.ok(position('linear-model')<position('derivative'));
  assert.ok(position('derivative')<position('partial-derivative'));
  assert.ok(position('probability')<position('bayes-theorem'));
  assert.ok(position('vector')<position('gradient'));
  assert.equal(Order.order([...cards,{slug:'new-concept',title:'A future concept'}]).at(-1).slug,'new-concept');
});

test('narrow crate scene preserves the same data, selection and two averages at both endpoints',()=>{
  for(const lastValue of [8,14,26,30]){
    const p={lastValue,sampleSize:4,startIndex:8},result=Models.evaluate('population-sample',p),html=Models.render('population-sample',p,Player.sceneOptions(Stories.forSlug('population-sample'),320));
    assert.match(html,/viewBox="0 0 360 332"/);
    const bars=[...html.matchAll(/data-role="population-bar" data-index="(\d+)" data-value="([^"]+)" data-selected="(true|false)"/g)];
    assert.equal(bars.length,12);
    assert.deepEqual(bars.map(([,i,v])=>[Number(i),Number(v)]),result.populationValues.map((v,i)=>[i,v]));
    assert.deepEqual(bars.filter(([,i,v,selected])=>selected==='true').map(([,i])=>Number(i)),result.sampleIndices);
    assert.ok(html.includes(result.sampleMean+' kg'));
    const shownPopulation=Number(html.match(/data-quantity="populationMean"[^>]*>([\d.]+) kg/)[1]);
    assert.ok(Math.abs(shownPopulation-result.populationMean)<.001);
    assert.doesNotMatch(html,/zero-based|confidence.interval|not a random/i);
  }
});

test('narrow crate scene keeps a pinned comparison on the same mass scale',()=>{
  const baseline={lastValue:14,sampleSize:4,startIndex:8};
  const html=Models.render('population-sample',{...baseline,lastValue:26},{compact:true,baseline});
  assert.match(html,/data-role="baseline-sample-mean"/);
  assert.match(html,/Pinned mean: 12.75 kg/);
});


const tags=(html,name)=>[...html.matchAll(new RegExp('<'+name+'\\b[^>]*>','g'))].map(([tag])=>tag);
test('compact story exposes one primary input per variable and one playback action without duplicate output bands',()=>{
  const story=Stories.forSlug('population-sample'),html=Player.markup(story,story.parameters);
  assert.equal(tags(html,'input').filter(tag=>tag.includes('type="range"')).length,1);
  assert.equal(tags(html,'input').filter(tag=>tag.includes('data-story-param="lastValue"')).length,1);
  assert.equal(tags(html,'button').filter(tag=>tag.includes('data-play>')).length,1);
  assert.doesNotMatch(html,/data-timeline|data-replay|data-progress|life-readout|data-result|data-input/);
  assert.match(html,/<details class="life-work">/,'Calculation detail is optional rather than a second control strip');
  const pair={...story,variables:[...story.variables,{key:'second',label:'Second input',unit:'kg',min:0,max:2}],parameters:{...story.parameters,second:1}};
  assert.equal(tags(Player.markup(pair,pair.parameters),'input').filter(tag=>tag.includes('type="range"')).length,2,'The compact policy is per variable rather than per slug');
});

test('full stories retain their timeline, replay and independent primary control policy',()=>{
  const story={...Stories.forSlug('population-sample'),presentation:undefined},html=Player.markup(story,story.parameters);
  assert.equal(tags(html,'input').filter(tag=>tag.includes('type="range"')).length,2);
  assert.match(html,/data-timeline/);assert.match(html,/data-replay/);assert.match(html,/life-readout/);
});

test('desktop and phone use one comparison layout with identical quantities and no extra scene slider in guided mode',()=>{
  const story=Stories.forSlug('population-sample');
  for(const width of [320,390,600,950]){
    const options=Player.sceneOptions(story,width),p={lastValue:26,sampleSize:4,startIndex:8},html=Models.render(story.slug,p,options);
    assert.match(html,/sample-comparison/);
    assert.match(html,/Selected 4/);assert.match(html,/All 12/);
    assert.match(html,/15\.75 kg/);assert.match(html,/11\.75 kg/);
    assert.equal(tags(html,'g').filter(tag=>tag.includes('role="slider"')).length,0);
    assert.equal(tags(html,'text').filter(tag=>tag.includes('data-quantity="sampleMean output"')).length,1);
    assert.equal(tags(html,'text').filter(tag=>tag.includes('data-quantity="populationMean"')).length,1);
    assert.match(html,width<480?/viewBox="0 0 360 332"/:/viewBox="0 0 640 320"/);
    const height=mass=>Number(Models.render(story.slug,{...p,lastValue:mass},options).match(/<rect[^>]*height="([^"]+)"[^>]*data-role="population-bar" data-index="11"/)[1]);
    assert.ok(Math.abs(height(26)/height(14)-26/14)<1e-6,'Bar height encodes the changed mass on the same zero-based physical scale');
  }
});
