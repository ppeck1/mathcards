import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Order=require('../src/learning-order.js'),Models=require('../src/atlas-gaps.js');
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
    const p={lastValue,sampleSize:4,startIndex:8},result=Models.evaluate('population-sample',p),html=Models.render('population-sample',p,{compact:true});
    assert.match(html,/viewBox="0 0 360 456"/);
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
