import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Notation = require('../src/math-notation.js');
const Terms = require('../src/math-terms.js');

test('design units distinguish covariance products, time trends and squared error spread', () => {
  for (const [slug, forms, id] of [
    ['covariance', ['m·min', 'm.min', 'm min'], 'design-covariance-product-unit'],
    ['covariance', ['min/m'], 'design-time-per-length-unit'],
    ['normal-variance-interval', ['mm²', 'mm^2'], 'design-variance-unit']
  ]) {
    for (const text of forms) {
      assert.deepEqual(Notation.classify(text, { slug, kind: 'unit' }), [id]);
      assert.equal(
        Notation.audit({ entries: Terms.entries, fields: [{ slug, text, kind: 'unit' }] }).complete,
        true
      );
      assert.ok(!Notation.classify(text, { slug: 'unrelated-card', kind: 'unit' }).includes(id));
    }
  }
  assert.deepEqual(Notation.classify('mm²', { slug: 'unrelated-card', kind: 'unit' }), [
    'powered-unit'
  ]);
});

test('normal-model counts retain the reading unit while power n remains explicitly per group', () => {
  for (const slug of ['normal-variance-interval', 'normal-test-power']) {
    assert.deepEqual(Notation.classify('readings', { slug, kind: 'unit' }), [
      'sampling-reading-count-unit'
    ]);
    assert.equal(
      Notation.audit({ entries: Terms.entries, fields: [{ slug, text: 'readings', kind: 'unit' }] })
        .complete,
      true
    );
  }
  const metadata = require('../content/planning/design-extension-integration.json');
  const n = metadata.ports['normal-test-power'].find(
    port => port.direction === 'input' && port.key === 'perGroup'
  );
  assert.equal(n.type, 'group-sample-size');
  assert.match(n.label, /group/i);
});
