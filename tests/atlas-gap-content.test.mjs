import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),Models=require('../src/atlas-gaps.js');
const card=slug=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));
const slugs=['set','population-sample','computational-complexity'];

test('finite collection bindings distinguish member sets from their scalar cardinalities',()=>{
  const c=card('set'),bindings=c.grammar.output_symbol_bindings;
  for(const label of ['U','A','B','R'])assert.equal(bindings[label],'set:'+label);
  assert.equal(bindings['|R|'],'resultCount');
  assert.equal(bindings['|A∩B|'],'intersectionCount');
  assert.equal(bindings['|A∪B|'],'unionCount');
  assert.equal(bindings['|A∖B|'],'differenceCount');
  assert.ok(c.grammar.symbols.filter(s=>['U','A','B','R'].includes(s.token)).every(s=>s.type==='Finite set'));
  assert.match(c.definition.conditions.join(' '),/singleton with cardinality one/);
  const boundary=c.examples.find(e=>e.id.endsWith(':exact-boundary'));
  assert.equal(Models.evaluate('set',boundary.preset).output,1);
  assert.match(boundary.interpretation,/cutoff gap is zero/);
  assert.doesNotMatch(c.branches.join(' '),/calculus|linear-algebra/);
});

test('sample and scan records retain distinct units, collection sizes and mathematical contracts',()=>{
  const sample=card('population-sample'),scan=card('computational-complexity');
  assert.equal(sample.grammar.output_symbol_bindings['∑xᵢ'],'sampleSum');
  assert.equal(sample.grammar.output_symbol_bindings['∑Xᵢ'],'populationSum');
  assert.ok(!sample.grammar.symbols.some(s=>s.token.includes('Σ')),'Summation uses the operator glyph, not the Greek capital letter');
  assert.match(sample.definition.conditions.join(' '),/not a simple random sample/);
  assert.match(sample.definition.conditions.join(' '),/zero-based/);
  const census=sample.examples.find(e=>e.id.endsWith(':full-census'));
  const censusResult=Models.evaluate('population-sample',census.preset);
  assert.equal(censusResult.sampleMean,censusResult.populationMean);
  const outside=sample.examples.find(e=>e.id.endsWith(':outside-window'));
  assert.equal(Models.evaluate('population-sample',outside.preset).sampleMean,9);
  assert.match(scan.definition.conditions.join(' '),/one item inspection|One item inspection/);
  assert.match(scan.definition.conditions.join(' '),/When c=0/);
  assert.match(scan.definition.domain_notes,/does not run a benchmark/);
  assert.equal(scan.grammar.output_symbol_bindings['w(n)'],'operationCount');
  assert.equal(scan.grammar.output_symbol_bindings['T(n)'],'totalTime');
  assert.equal(scan.grammar.output_symbol_bindings['O(n)'],undefined,'The complexity class is explanatory rather than a numeric output');
  const zero=scan.interactive.expected_cases.find(row=>row.input.costPerItem===0);
  const r=Models.evaluate('computational-complexity',zero.input);
  assert.equal(r.totalTime,0);assert.equal(r.operationCount,zero.input.itemCount);
});

test('all gap-filling examples are original, source-linked and valid complete model presets',()=>{
  const sources=new Map(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(s=>[s.id,s]));
  let fixtures=0,presets=0;
  for(const slug of slugs){
    const c=card(slug);assert.equal(c.examples.length,5);assert.equal(c.interactive.expected_cases.length,12);
    assert.equal(c.history.status,'source_gap');assert.deepEqual(c.history.claims,[]);
    assert.doesNotMatch(c.grammar.precedence,/gradient|tangent plane|matrix product/i);
    for(const id of c.source_refs){assert.ok(sources.has(id),id);assert.match(sources.get(id).url,/^https:\/\/(?:openstax\.org|courses\.cs\.washington\.edu)\//);}
    for(const e of c.examples){
      assert.ok(e.assumptions.length>=4);assert.ok(e.limits.length>70);assert.ok(e.independent_check.expected.length>50);
      assert.equal(e.provenance.kind,'original worked derivation');assert.deepEqual(e.provenance.external_source_refs,[]);
      assert.equal(Models.evaluate(slug,e.preset).valid,true,e.title);presets++;
    }
    for(const row of c.interactive.expected_cases){
      const r=Models.evaluate(slug,row.input);assert.equal(r.status,row.status||'valid');
      if(row.output!=null)assert.ok(Math.abs(r.output-row.output)<1e-9,slug+' fixture');
      fixtures++;
    }
  }
  assert.equal(fixtures,36);assert.equal(presets,15);
});
