import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Display=require('../src/math-display.js');
test('declared value labels display actual tool collections while saved inputs stay numeric',()=>{
  for(const slug of ['partial-order','meet-join','lattice-distributivity']){
    const card=JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));
    const values=card.examples[0].inputs,html=Display.inputs(card,values);
    assert.match(html,/\{lamp, ruler\}/);assert.match(html,/\{lamp, brush\}/);
    assert.equal(typeof values.a,'number');assert.doesNotMatch(html,/<td>3<\/td>|<td>5<\/td>/);
  }
});
test('value labels escape authored text and unknown values keep their original reading',()=>{
  const card={interactive:{controls:[{id:'kit',value_labels:{1:'<unsafe>'}}]}};
  assert.match(Display.inputs(card,{kit:1}),/&lt;unsafe&gt;/);
  assert.match(Display.inputs(card,{kit:2}),/<td>2<\/td>/);
  assert.match(Display.inputs(card,{kit:'constructor'}),/<td>constructor<\/td>/);
});
