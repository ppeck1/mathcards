import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Display=require('../src/math-display.js');
const card=JSON.parse(fs.readFileSync(new URL('../content/cards/population-sample.json',import.meta.url),'utf8'));

test('given values and expression parts use declared notation without changing model keys',()=>{
  const before=JSON.stringify(card),inputs={lastValue:26,sampleSize:4,startIndex:8};
  const html=Display.inputs(card,inputs),rows=Display.nodeRows(card,card.grammar.ast);
  for(const symbol of ['x','n','s'])assert.ok(html.includes('>'+symbol+'</th>'));
  assert.match(html,/>26</);assert.match(html,/>4</);assert.match(html,/>8</);
  assert.doesNotMatch(html+rows,/lastValue|sampleSize|startIndex|sampleSum|n:populationRule/);
  assert.ok(rows.includes('∑xᵢ'));
  assert.equal(JSON.stringify(card),before);
  assert.deepEqual(inputs,{lastValue:26,sampleSize:4,startIndex:8});
  assert.equal(card.grammar.output_symbol_bindings.x,'lastValue');
});

test('notation tables preserve unbound input names legibly and escape source text',()=>{
  const html=Display.inputs({}, {'otherInput':'<script>unsafe</script>'});
  assert.match(html,/other Input/);assert.match(html,/&lt;script&gt;/);assert.doesNotMatch(html,/<script>/);
  assert.match(Display.inputs({},[1,2,3]),/\[\s*1/);
});

test('the crate explanation uses mathematical symbols while keeping machine-readable bindings',()=>{
  const prose=[...card.definition.conditions,...Object.entries(card.definition.signature).flat(),card.grammar.formation_rule,...card.grammar.symbols.map(s=>s.role),...card.examples.flatMap(e=>e.steps.map(s=>s.expression))].join(' ');
  assert.doesNotMatch(prose,/lastValue|sampleSum|sampleMean|populationSum|populationMean|startIndex|sampleSize/);
  for(const symbol of ['x̄','μ','∑xᵢ'])assert.ok(prose.includes(symbol));
});
