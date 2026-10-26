import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const input = require('../src/scene-input.js');
const absolute = Object.freeze({ min: -10, max: 10, x0: 100, x1: 500, step: 0.1, mode: 'absolute' });
const relative = Object.freeze({ ...absolute, mode: 'relative' });

test('scene input loads offline without a document or browser event system', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/scene-input.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasSceneInput.bind, 'function');
  assert.equal(context.AtlasSceneInput.dragValue(absolute, 3, 180, 300), 0);
  assert.equal(context.AtlasSceneInput.keyValue(absolute, 3, 'ArrowRight'), 3.1);
});

test('absolute drags map scene coordinates to the full parameter interval and clamp at either end', () => {
  for (const [x, expected] of [[-1000, -10], [100, -10], [200, -5], [300, 0], [400, 5], [500, 10], [900, 10]]) {
    assert.equal(input.dragValue(absolute, 7, 175, x), expected);
    assert.equal(input.dragValue(absolute, -4, 425, x), expected, 'A ruler uses position independently of the pointer-down value');
  }
  assert.equal(input.dragValue(absolute, 0, 300, 301.2), 0.1, 'Values snap to the nearest authored parameter step');
  assert.equal(input.dragValue(absolute, 0, 300, 298.8), -0.1);
});

test('relative drags preserve the grabbed value and apply displacement without jumping', () => {
  assert.equal(input.dragValue(relative, 3, 172, 172), 3);
  assert.equal(input.dragValue(relative, 3, 172, 272), 8);
  assert.equal(input.dragValue(relative, 3, 172, 72), -2);
  assert.equal(input.dragValue(relative, 3, 172, 1000), 10);
  assert.equal(input.dragValue(relative, 3, 172, -1000), -10);
  assert.equal(input.dragValue(relative, 0.3, 300, 302), 0.4, 'Fractional steps do not leak binary rounding into model state');
});

test('arrow keys, shifted arrows, and endpoint keys share the authored bounds', () => {
  for (const key of ['ArrowUp', 'ArrowRight']) {
    assert.equal(input.keyValue(relative, 3, key), 3.1);
    assert.equal(input.keyValue(relative, 3, key, true), 4);
    assert.equal(input.keyValue(relative, 10, key), 10);
  }
  for (const key of ['ArrowDown', 'ArrowLeft']) {
    assert.equal(input.keyValue(relative, 3, key), 2.9);
    assert.equal(input.keyValue(relative, 3, key, true), 2);
    assert.equal(input.keyValue(relative, -10, key), -10);
  }
  assert.equal(input.keyValue(relative, 3, 'Home'), -10);
  assert.equal(input.keyValue(relative, 3, 'End'), 10);
  assert.equal(input.keyValue(relative, 3, 'Tab'), null);
  assert.equal(input.keyValue(relative, 3, 'Enter'), null);
  const fallback = { min: 0, max: 50, x0: 0, x1: 500, mode: 'absolute' };
  assert.equal(input.keyValue(fallback, 10, 'ArrowUp'), 10.5, 'An omitted step uses one hundredth of the range');
});

test('fractional derivative intervals and small positive steps stay finite and bounded', () => {
  const fine = Object.freeze({ min: -1, max: 1, x0: 50, x1: 450, step: 0.0001, mode: 'relative' });
  assert.equal(input.dragValue(fine, 0.1, 250, 230), 0);
  assert.equal(input.dragValue(fine, 0.1, 250, 229.98), -0.0001);
  assert.equal(input.keyValue(fine, 0.0001, 'ArrowLeft'), 0);
  assert.equal(input.keyValue(fine, 0, 'ArrowLeft'), -0.0001);
  const nonsymmetric = { min: 0.125, max: 8, x0: 0, x1: 400, step: 0.1, mode: 'absolute' };
  assert.equal(input.dragValue(nonsymmetric, 1, 100, -10), 0.125, 'Bounds remain reachable when they are not step multiples');
  assert.equal(input.keyValue(nonsymmetric, 1, 'Home'), 0.125);
});

test('invalid specifications and nonfinite event values return null without poisoning the model', () => {
  const invalid = [null, undefined, {}, 7,
    { ...absolute, min: NaN }, { ...absolute, max: Infinity },
    { ...absolute, max: absolute.min }, { ...absolute, max: -20 },
    { ...absolute, x0: Infinity }, { ...absolute, x1: absolute.x0 },
    { ...absolute, x1: 0 }, { ...absolute, step: -0.1 },
    { ...absolute, step: NaN }, { ...absolute, step: Infinity }
  ];
  for (const spec of invalid) {
    assert.equal(input.dragValue(spec, 0, 100, 200), null);
    assert.equal(input.keyValue(spec, 0, 'ArrowRight'), null);
  }
  for (const bad of [NaN, Infinity, -Infinity, '300', null, undefined]) {
    assert.equal(input.dragValue(absolute, 0, 300, bad), null);
    assert.equal(input.dragValue(relative, bad, 300, 350), null);
    assert.equal(input.dragValue(relative, 0, bad, 350), null);
    assert.equal(input.keyValue(absolute, bad, 'ArrowRight'), null);
  }
});

test('input calculations never mutate renderer handle specifications', () => {
  const before = JSON.stringify({ absolute, relative });
  input.dragValue(absolute, 0, 300, 350);
  input.dragValue(relative, 0, 300, 350);
  input.keyValue(absolute, 3, 'ArrowDown', true);
  assert.equal(JSON.stringify({ absolute, relative }), before);
});
