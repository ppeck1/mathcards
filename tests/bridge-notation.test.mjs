import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const N = require('../src/math-notation.js');

test('photon units keep their physical dimensions and declared scope', () => {
  for (const [unit, id] of [
    ['nm', 'physics-nanometre-unit'],
    ['Hz', 'physics-hertz-unit'],
    ['eV', 'physics-electronvolt-unit'],
    ['J·s', 'physics-action-unit'],
    ['J s', 'physics-action-unit'],
    ['J/eV', 'physics-energy-conversion-unit']
  ]) {
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug: 'photon-energy' }), [id]);
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug: 'reference:' + id }), [id]);
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug: 'partial-order' }), []);
  }
  assert.deepEqual(N.classify('s', { kind: 'unit', slug: 'time-dilation' }), [
    'measurement-unit-symbols'
  ]);
  assert.deepEqual(N.classify('m/s', { kind: 'unit', slug: 'time-dilation' }), ['compound-unit']);
});

test('channel information and bit positions retain local meanings and entropy-call structure', () => {
  for (const form of ['H₂', 'H₂(p)', 'H_2(t)', 'H_{2}(p)', 'H_2(p+q(1−2p))'])
    assert.deepEqual(N.classify(form, { slug: 'channel-capacity' }), [
      'bridge-binary-entropy-function'
    ]);
  assert.ok(!N.classify('H₂(p)', { slug: 'entropy' }).includes('bridge-binary-entropy-function'));
  for (const [unit, slug, id] of [
    ['bit/use', 'channel-capacity', 'bridge-information-rate-unit'],
    ['position', 'hamming-code', 'bridge-code-position-unit'],
    ['word choice', 'hamming-code', 'bridge-data-word-unit']
  ]) {
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug }), [id]);
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug: 'reference:' + id }), [id]);
    assert.deepEqual(N.classify(unit, { kind: 'unit', slug: 'partial-order' }), []);
  }
});

test('a registered binary-entropy call passes callable review only in its declared scope', () => {
  for (const slug of ['channel-capacity', 'reference:bridge-binary-entropy-function']) {
    const report = N.audit({ fields: [{ slug, kind: 'formula', text: 'H_2(0.5)' }] });
    assert.deepEqual(report.review, []);
  }
  const unrelated = N.audit({
    fields: [{ slug: 'partial-order', kind: 'formula', text: 'H_2(0.5)' }]
  });
  assert.ok(unrelated.review.some(row => row.token === 'H_2'));
});
