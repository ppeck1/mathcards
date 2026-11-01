import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Models = require('../src/models.js');
const Visuals = require('../src/visuals.js');
const read = slug => JSON.parse(fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8'));
const composition = read('function-composition');
const derivative = read('derivative');
const example = (card, suffix) => card.examples.find(e => e.id.endsWith(':' + suffix));
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-10, `${a} matches ${b}`);

test('the numeric composition example loads both stated orders of the same functions', () => {
  const p = example(composition, 'numeric').preset;
  assert.ok(Models.validateParams(composition.slug, p).valid);
  assert.equal(p.order, 'f_after_g');
  const result = Models.evaluate(composition.slug, p);
  assert.equal(result.output, 49);
  assert.equal(result.intermediate, 7);
  assert.equal(result.both.g_after_f.output, 19);
  assert.equal(Models.evaluate(composition.slug, { ...p, order: 'g_after_f' }).output, 19);
});

test('derivative examples load their correct analytic or finite-quotient result channel', () => {
  const cubic = example(derivative, 'cubic').preset;
  const tangent = Models.evaluate(derivative.slug, cubic);
  assert.equal(cubic.preset, 'cubic');
  assert.equal(tangent.analytic, 12);
  assert.equal(tangent.output, null);
  assert.equal(tangent.status, 'undefined_step', 'h=0 does not turn the limit into a finite quotient');

  const secant = Models.evaluate(derivative.slug, example(derivative, 'secant').preset);
  assert.equal(secant.parameters.preset, 'cubic');
  assert.equal(secant.status, 'valid');
  near(secant.output, (2.1 ** 3 - 2 ** 3) / .1);
  near(secant.output, 12.61);
  assert.equal(secant.analytic, 12);
  assert.notEqual(secant.output, secant.analytic);

  const zero = Models.evaluate(derivative.slug, example(derivative, 'zero-step').preset);
  assert.equal(zero.parameters.h, 0);
  assert.equal(zero.output, null);
  assert.equal(zero.analytic, 12);
  assert.equal(zero.secantStatus, 'undefined');
});

test('the corner experiment preserves both one-sided slopes and the missing two-sided derivative', () => {
  const p = example(derivative, 'corner').preset;
  assert.equal(p.preset, 'absolute');
  assert.equal(p.a, 0);
  for (const h of [-.1, .1]) {
    const r = Models.evaluate(derivative.slug, { ...p, h });
    assert.equal(r.analytic, null);
    assert.equal(r.analyticStatus, 'undefined');
    assert.deepEqual(r.oneSided, { left: -1, right: 1 });
    assert.equal(r.output, h > 0 ? 1 : -1);
  }
});

test('loaded derivative domain examples remain inspectable in both visual views', () => {
  for (const e of derivative.examples.filter(e => e.preset)) {
    assert.ok(Models.validateParams(derivative.slug, e.preset).valid, e.id);
    for (const view of ['geometry', 'graph']) {
      const html = Visuals.render(derivative.slug, e.preset, { view, sceneControl: false });
      assert.doesNotMatch(html, /NaN|Infinity/);
      assert.match(html, /analytic/i, e.id);
    }
  }
});

test('unrepresented functions, types and control ranges keep their written examples honest', () => {
  for (const suffix of ['finite', 'geometry', 'restricted-domain', 'type-mismatch', 'calibration']) {
    assert.equal(example(composition, suffix).preset, null, suffix + ' is not this installed scalar model');
  }
  const calibration = { a: 0, b: 1.8, c: 32, m: .5, n: -10, x: 60, order: 'f_after_g' };
  assert.equal(Models.validateParams(composition.slug, calibration).valid, false, 'the original calibration exceeds installed control ranges');
  for (const suffix of ['motion', 'image-scale']) assert.equal(example(derivative, suffix).preset, null);
  assert.equal(Models.validateParams(derivative.slug, { preset: 'quadratic' }).valid, false, 'quadratic position and area functions are not available in this selector');
});
