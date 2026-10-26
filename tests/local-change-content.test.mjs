import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const card=slug=>JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));
const slugs=['directional-derivative','tangent-plane','gradient-descent'];

test('local-change cards separate scalar outputs, vector roles and the signed approximation residual',()=>{
  const directional=card('directional-derivative'),plane=card('tangent-plane'),descent=card('gradient-descent');
  assert.deepEqual(directional.grammar.output_symbol_bindings.u,['directionX','directionY']);
  assert.deepEqual(directional.grammar.output_symbol_bindings['∇F'],['partialX','partialY']);
  assert.equal(directional.grammar.output_symbol_bindings['DᵤF'],'directionalSlope');
  assert.equal(plane.grammar.output_symbol_bindings['L(x+Δx,y+Δy)'],'predictedHeight');
  assert.equal(plane.grammar.output_symbol_bindings['F(x+Δx,y+Δy)'],'actualHeight');
  assert.equal(plane.grammar.output_symbol_bindings.R,'approximationError');
  assert.match(plane.grammar.symbols.find(s=>s.token==='R').role,/actual minus predicted/);
  assert.deepEqual(descent.grammar.output_symbol_bindings['∇C'],['partialX','partialY']);
  assert.equal(descent.grammar.output_symbol_bindings['C(xₖ,yₖ)'],'cost');
  for(const c of [directional,plane,descent]){
    const root=c.grammar.ast.nodes.find(n=>n.id===c.grammar.ast.root);
    assert.doesNotMatch(root.type,/vector/i,'These three primary outputs are scalar quantities');
    assert.ok(c.branches.includes('calculus'));
    assert.doesNotMatch(c.grammar.precedence,/matrix products|basis vectors/i);
  }
});

test('gradient-descent examples preserve exact whole iterations and explicit stability limits',()=>{
  const c=card('gradient-descent'),iteration=c.interactive.controls.find(control=>control.id==='iteration');
  assert.equal(iteration.step,1);assert.equal(iteration.min,0);assert.equal(iteration.max,16);
  assert.ok(c.interactive.expected_cases.some(row=>row.input.iteration===2.5&&row.status==='invalid_parameters'));
  for(const example of c.examples)assert.ok(Number.isInteger(example.preset.iteration));
  assert.match(c.representations.find(r=>r.kind==='graph').description,/fixed integer number of updates against continuous step size/);
  assert.match(c.definition.conditions.join(' '),/0<stepSize<2\/max\(a,b\)/);
  const boundary=c.examples.find(e=>e.preset.stepSize===1),oversized=c.examples.find(e=>e.preset.stepSize===1.5);
  assert.match(boundary.interpretation,/do not establish convergence/);
  assert.match(oversized.interpretation,/doubles in magnitude/);
});

test('new teaching records retain original scenarios, local conditions and resolvable definition sources',()=>{
  const sources=new Map(JSON.parse(fs.readFileSync(new URL('../content/sources.json',import.meta.url),'utf8')).sources.map(s=>[s.id,s]));
  for(const slug of slugs){
    const c=card(slug);assert.equal(c.examples.length,5);assert.equal(c.interactive.expected_cases.length,12);
    assert.equal(c.history.status,'source_gap');assert.deepEqual(c.history.claims,[]);
    for(const id of c.source_refs){assert.ok(sources.has(id),id);assert.match(sources.get(id).url,/^https:\/\/(?:openstax\.org|web\.stanford\.edu)\//);}
    for(const e of c.examples){assert.ok(e.assumptions.length>=4);assert.ok(e.limits.length>50);assert.ok(e.independent_check.expected.length>40);assert.equal(e.provenance.kind,'original worked derivation');assert.deepEqual(e.provenance.external_source_refs,[]);}
  }
});
