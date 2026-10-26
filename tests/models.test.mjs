import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const M = require('../src/models.js');
const near = (actual, expected, tolerance = 1e-10) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} ≈ ${expected}`);

test('classic browser script exposes the same dependency-free API', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/models.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasModels.evaluate('function-composition', {}).output, 49);
});

for (const slug of ['function-composition', 'real-logarithm', 'derivative']) {
  const card = JSON.parse(fs.readFileSync(new URL(`../math_expression_atlas_handoff/content/cards/${slug}.json`, import.meta.url), 'utf8'));
  for (const fixture of card.interactive.expected_cases) {
    test(`${slug}: authored case ${JSON.stringify(fixture.input)}`, () => {
      const result = M.evaluate(slug, fixture.input);
      if ('output' in fixture) near(result.output, fixture.output);
      if ('intermediate' in fixture) near(result.intermediate, fixture.intermediate);
      if ('analytic' in fixture) near(result.analytic, fixture.analytic);
      if ('analytic_status' in fixture) assert.equal(result.analyticStatus, fixture.analytic_status);
      if ('status' in fixture) assert.equal(result.status, fixture.status);
      if ('exact_display' in fixture) assert.equal(result.exactDisplay, fixture.exact_display);
      if ('display_status' in fixture) assert.equal(result.displayStatus, fixture.display_status);
    });
  }
}

test('identity and ordered composition preserve the shared state invariant', () => {
  for (const x of [-10, -2, 0, 0.5, 3, 10]) {
    const p = { a: 0, b: 1, c: 0, m: -2, n: 4, x };
    const r = M.evaluate('function-composition', p);
    assert.equal(r.both.f_after_g.output, -2 * x + 4);
    assert.equal(r.both.g_after_f.output, -2 * x + 4);
    assert.equal(r.difference, 0);
    assert.equal(M.curveValue('function-composition', p, x), r.output);
  }
  assert.equal(M.evaluate('function-composition', {}).difference, 30);
});

test('unknown fields, nonfinite numbers and out-of-bounds inputs fail closed', () => {
  for (const p of [{x: NaN}, {x: Infinity}, {x: '3'}, {x: ''}, {a: 6}, {order: 'javascript:alert(1)'}, {code: 'x*x'}]) {
    assert.equal(M.evaluate('function-composition', p).status, 'invalid_parameters');
  }
  assert.equal(M.evaluate('unknown', {}).status, 'invalid_parameters');
  assert.equal(M.validateParams('derivative', null).valid, false);
  const a = M.defaults('function-composition'); a.a = 5;
  assert.equal(M.defaults('function-composition').a, 1);
});

test('real logarithm domain and inverse relation hold without silent clamping', () => {
  for (const base of [0.25, 0.5, 2, 3, 10]) {
    for (const argument of [0.125, 1, 3, 8, 1000]) {
      const r = M.evaluate('real-logarithm', {base, argument});
      near(r.inverse, argument, Math.max(1, argument) * 1e-12);
      near(M.curveValue('real-logarithm', {base, argument}, argument), r.output);
      assert.equal(r.direction, base > 1 ? 'increasing' : 'decreasing');
    }
  }
  for (const base of [-1, 0, 1]) assert.equal(M.evaluate('real-logarithm', {base}).status, 'invalid_base');
  for (const argument of [-10, 0]) assert.equal(M.evaluate('real-logarithm', {argument}).status, 'undefined_argument');
  assert.equal(M.curveValue('real-logarithm', {}, 0), null);
  assert.equal(M.curveValue('real-logarithm', {}, -1), null);
  assert.equal(M.evaluate('real-logarithm', {base: 1 + 1e-8}).warnings.length, 1);
  assert.equal(M.evaluate('real-logarithm', {argument: 6}).exactDisplay, null);
});

test('derivative distinguishes finite quotient, analytic slope, and two one-sided limits', () => {
  for (const h of [-1, -0.1, 1e-14, 0.3, 1]) {
    assert.equal(M.evaluate('derivative', {preset: 'linear', a: -2, h}).output, 3);
  }
  const corner = M.evaluate('derivative', {preset:'absolute',a:0,h:0});
  assert.equal(corner.output, null);
  assert.equal(corner.analytic, null);
  assert.deepEqual(corner.oneSided, {left:-1,right:1});
  const zero = M.evaluate('derivative', {preset:'cubic',a:2,h:0});
  assert.equal(zero.output, null);
  assert.equal(zero.analytic, 12);
  assert.equal(zero.analyticStatus, 'valid');
  near(M.evaluate('derivative', {preset:'absolute',a:0.25,h:-0.5}).output, 0);
  assert.equal(M.evaluate('derivative', {h:1e-14}).warnings.length, 1);
});
