import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const Models = require('../src/models.js');
const Visuals = require('../src/visuals.js');
const Notation = require('../src/math-notation.js');
const Terms = require('../src/math-terms.js');

test('exact logarithm labels follow certified integer powers instead of an example allowlist', () => {
  for (const [base, argument, exact] of [
    [2, 4, '2'], [2, 16, '4'], [10, 100, '2'], [2, .5, '−1'],
    [3, 243, '5'], [1.5, 2.25, '2'], [.75, .5625, '2'],
    [.5, 16, '−4'], [.25, 8, '−3/2'], [2, 2 ** 1023, '1023'],
    [2, Number.MIN_VALUE, '−1074'], [Number.MIN_VALUE, Number.MIN_VALUE, '1'],
    [Number.MAX_VALUE, Number.MAX_VALUE, '1'], [1 + Number.EPSILON, 1, '0']
  ]) {
    const result = Models.evaluate('real-logarithm', {base, argument});
    assert.equal(result.status, 'valid');
    assert.equal(result.exactDisplay, exact, `log base ${base} of ${argument}`);
    assert.equal(result.displayStatus, exact === null ? 'approximate' : 'exact');
  }
});

test('powers-of-two inputs certify reduced rational logarithms without a root search', () => {
  for (const [base, argument, exact] of [
    [4, 2, '1/2'], [8, 4, '2/3'], [4, .5, '−1/2'],
    [.25, 8, '−3/2'], [Number.MIN_VALUE, 2, '−1/1074'],
    [2 ** 1023, 2 ** 1022, '1022/1023']
  ]) {
    const result = Models.evaluate('real-logarithm', {base, argument});
    assert.equal(result.exactDisplay, exact);
    assert.equal(result.displayStatus, 'exact');
  }
  assert.equal(Models.evaluate('real-logarithm', {base:9, argument:3}).exactDisplay, null,
    'other noninteger logarithms stay approximate without an additional certificate');
  const html = Visuals.render('real-logarithm', {base:8, argument:4});
  assert.ok(html.includes('8 raised to 2/3 = 4'));
  assert.ok(html.includes('log = 2/3'));
  const approximate = Visuals.render('real-logarithm', {base:2, argument:6});
  assert.ok(approximate.includes('log base 2 of 6 ≈'));
});

test('near-integer estimates and rounded power coincidences do not certify logarithms', () => {
  const roundedSquare = 1.1 ** 2;
  assert.equal(roundedSquare, 1.2100000000000002);
  for (const [base, argument] of [
    [1.1, roundedSquare], [2, 8 + Number.EPSILON * 8], [2, 6],
    [1 + Number.EPSILON, 2], [1 - Number.EPSILON, 2], [10, .01]
  ]) {
    const result = Models.evaluate('real-logarithm', {base, argument});
    assert.equal(result.status, 'valid');
    assert.equal(result.exactDisplay, null, `${base}, ${argument}`);
    assert.equal(result.displayStatus, 'approximate');
  }
});

test('the logarithm multiplier caption describes +1 exponent, independently of ruler tick spacing', () => {
  for (const base of [.5, 2, 10]) for (const argument of [.125, .5, 2, 8, 64]) {
    const html = Visuals.render('real-logarithm', {base, argument});
    assert.ok(html.includes(`Each +1 in the exponent multiplies the argument by ${base}.`));
    assert.ok(!html.includes('Each exponent step multiplies'));
  }
});

test('summation contexts use the summation operator while machine alphabets retain Greek sigma', () => {
  const probability = JSON.parse(fs.readFileSync(new URL('../content/cards/probability.json', import.meta.url), 'utf8'));
  const derivations = probability.properties.filter(p => p.derivation?.includes('∑'));
  assert.equal(derivations.length, 2);
  for (const property of derivations) {
    assert.ok(!property.derivation.includes('Σ'));
    const sum = Notation.extract(property.derivation, {slug:'probability'}).find(r => r.token === '∑');
    assert.deepEqual(sum.entryIds, ['summation']);
  }
  const riemann = Terms.entries.find(e => e.id === 'riemann-sum');
  assert.deepEqual(riemann.symbols, ['∑ f(xᵢ)Δx']);
  assert.deepEqual(Notation.classify('Σ'), ['sigma-capital']);
  assert.deepEqual(Notation.classify('Σ', {slug:'finite-state-machine'}), ['input-alphabet', 'sigma-capital']);
});

test('the notation gate rejects a resolved Greek letter in a declared summation context', () => {
  for (const slug of ['probability', 'reference:riemann-sum']) {
    for (const text of ['Σ E(Iᵢ)', String.raw`\Sigma C(6,k)`]) {
      const result = Notation.audit({entries:Terms.entries, fields:[{slug, text, kind:'formula'}]});
      assert.equal(result.complete, false);
      assert.ok(result.review.some(r => r.reason.includes('declares summation')));
    }
  }
  const alphabet = Notation.audit({entries:Terms.entries, fields:[{slug:'finite-state-machine', text:'Σ', kind:'formula'}]});
  assert.equal(alphabet.review.length, 0);
});

test('the vertex-label definition matches the actual A-to-D route graph', () => {
  const graph = Terms.entries.find(e => e.id === 'graph-node-label');
  assert.deepEqual(graph.symbols, ['A', 'B', 'C', 'D']);
  assert.deepEqual(graph.tokens, ['A', 'B', 'C', 'D']);
  assert.ok(graph.definition.includes('Routes start at A and end at D.'));
  assert.ok(!graph.definition.includes('S and T'));
});

test('single-input logarithm examples load the exact ratio or tree count they discuss', () => {
  const card = JSON.parse(fs.readFileSync(new URL('../content/cards/real-logarithm.json', import.meta.url), 'utf8'));
  for (const [id, argument, exponent] of [['photography', 8, 3], ['binary-tree', 32, 5]]) {
    const example = card.examples.find(e => e.id === 'math:example:log:' + id);
    assert.deepEqual(example.preset, {base:2, argument});
    const result = Models.evaluate('real-logarithm', example.preset);
    assert.equal(result.output, exponent);
    assert.equal(result.exactDisplay, String(exponent));
  }
  for (const id of ['plot', 'invalid-domain', 'sum-fallacy']) {
    assert.ok(card.examples.find(e => e.id === 'math:example:log:' + id).preset == null,
      'a multi-input comparison must not pretend one slider state implements the entire example');
  }
});
