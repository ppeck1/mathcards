import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Notation = require('../src/math-notation.js');

test('container and approximation-index units retain their local count meanings', () => {
  assert.deepEqual(Notation.classify('containers', { kind: 'unit', slug: 'floor-ceiling' }), [
    'number-container-count-unit'
  ]);
  assert.deepEqual(
    Notation.classify('container', { kind: 'unit', slug: 'reference:number-container-count-unit' }),
    ['number-container-count-unit']
  );
  for (const slug of ['irrational-square-root', 'golden-ratio'])
    for (const unit of ['choice', 'index'])
      assert.deepEqual(Notation.classify(unit, { kind: 'unit', slug }), [
        'number-approximation-index-unit'
      ]);
  for (const unit of ['containers', 'choice', 'index'])
    assert.deepEqual(Notation.classify(unit, { kind: 'unit', slug: 'partial-order' }), []);
  assert.deepEqual(
    Notation.classify('k', { kind: 'unit', slug: 'reference:number-approximation-index' }),
    [],
    'a mathematical index variable does not become a unit label'
  );
  assert.deepEqual(Notation.classify('L', { kind: 'unit', slug: 'floor-ceiling' }), [
    'measurement-unit-symbols'
  ]);
  assert.deepEqual(Notation.classify('cm³', { kind: 'unit', slug: 'sphere-packing' }), [
    'powered-unit'
  ]);
  assert.deepEqual(Notation.classify('choice', { kind: 'unit', slug: 'platonic-solids' }), [
    'spatial-choice-unit'
  ]);
  for (const unit of ['faces', 'vertices', 'edges', 'corners', 'sides', 'spheres'])
    assert.deepEqual(Notation.classify(unit, { kind: 'unit', slug: 'tessellation' }), [
      'spatial-count-unit'
    ]);
  assert.deepEqual(Notation.classify('fraction', { kind: 'unit', slug: 'sphere-packing' }), [
    'spatial-volume-fraction'
  ]);
  assert.deepEqual(Notation.classify('fraction', { kind: 'unit', slug: 'probability' }), [
    'ratio',
    'probability'
  ]);
});
