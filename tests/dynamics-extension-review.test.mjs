import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const M = require('../src/dynamics-extensions.js');
const Modules = require('../src/playground-modules.js');
const relativeNear = (actual, expected) =>
  assert.ok(
    Math.abs(actual - expected) <= 1e-12 * Math.max(Math.abs(expected), Number.MIN_VALUE),
    `${actual} must agree with ${expected}`
  );

test('registered chart modules preserve the underlying point at an omitted pole', () => {
  for (const id of ['circle-manifold', 'sphere-manifold']) {
    const key = id === 'circle-manifold' ? 'angle' : 'latitude';
    for (const pole of ['north', 'south']) {
      const p = { ...M.defaults(id), [key]: pole === 'north' ? 90 : -90, pole };
      const module = Modules.get(id);
      const result = module.evaluate(p);
      assert.equal(result.status, 'outside_chart');
      assert.equal(result.output, null);
      const scene = module.views
        .find(view => view.id === 'geometry')
        .render(p, { id: 'review-chart', compact: true });
      assert.match(scene, /This chart omits this pole/);
      assert.match(scene, /data-quantity="(?:angle|latitude longitude) x y/);
      assert.doesNotMatch(scene, /NaN|Infinity/);
      const covered = module.evaluate({ ...p, pole: pole === 'north' ? 'south' : 'north' });
      assert.equal(covered.valid, true);
      assert.equal(covered.x, result.x);
      assert.equal(covered.y, result.y);
      assert.equal(covered.z, result.z);
    }
  }
});

test('registered interpolation retains chart and discrete history guards', () => {
  const circle = Modules.get('circle-manifold');
  assert.equal(
    circle.canInterpolate({ angle: 80, pole: 'north' }, { angle: 100, pole: 'north' }),
    false
  );
  assert.equal(
    circle.canInterpolate({ angle: -100, pole: 'south' }, { angle: -80, pole: 'south' }),
    false
  );
  assert.equal(
    circle.canInterpolate({ angle: 30, pole: 'north' }, { angle: 35, pole: 'north' }),
    true
  );
  assert.equal(
    circle.canInterpolate({ angle: 30, pole: 'north' }, { angle: 30, pole: 'south' }),
    false
  );
  assert.equal(
    Modules.get('hysteresis').canInterpolate(
      { steps: 20, history: 'up-down' },
      { steps: 21, history: 'up-down' }
    ),
    false
  );
});

test('adjacent representable angles retain the stated projection quotient near both poles', () => {
  // Unlike subtracting a rounded Cartesian height from one, the explicit
  // denominator must remain nonzero when the represented angle is not a pole.
  for (const angle of [
    89.99999999999999, 90.00000000000001, -89.99999999999999, -90.00000000000001
  ]) {
    for (const pole of ['north', 'south']) {
      const circle = M.evaluate('circle-manifold', { angle, pole });
      assert.equal(circle.valid, true);
      assert.ok(circle.denominator > 0);
      assert.ok(Number.isFinite(circle.output));
      relativeNear(circle.u * circle.denominator, circle.x);
      assert.ok(circle.roundTripError < 1e-12);
      if (Math.abs(angle) < 90)
        for (const longitude of [-180, -43, 0, 81, 180]) {
          const sphere = M.evaluate('sphere-manifold', { latitude: angle, longitude, pole });
          assert.equal(sphere.valid, true);
          assert.ok(sphere.denominator > 0);
          relativeNear(sphere.u * sphere.denominator, sphere.x);
          relativeNear(sphere.v * sphere.denominator, sphere.y);
          assert.ok(sphere.roundTripError < 1e-12);
        }
    }
  }
});
