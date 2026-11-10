import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const N = require('../src/math-notation.js');
const Terms = require('../src/math-terms.js');

test('least-common-multiple calls and operator names resolve without treating arbitrary names as functions', () => {
  for (const text of ['lcm(a,b)', '\\operatorname{lcm}(a,b)']) {
    assert.ok(
      N.classify(text, { slug: 'least-common-multiple' }).includes('least-common-multiple-function')
    );
    assert.equal(
      N.audit({ entries: Terms.entries, fields: [{ slug: 'least-common-multiple', text }] })
        .complete,
      true,
      text
    );
  }
  assert.deepEqual(N.classify('unregistered(a,b)', { slug: 'least-common-multiple' }), []);
});

test('divisor bars retain relation meaning without consuming absolute-value or conditional-probability bars', () => {
  for (const text of ['d|n', 'd∣n', 'd\\mid n']) {
    assert.deepEqual(N.classify(text, { slug: 'perfect-number' }), ['divisibility']);
    const records = N.extract(text, { slug: 'perfect-number' });
    assert.ok(
      records.some(record => record.entryIds.includes('divisibility')),
      text
    );
    assert.equal(
      N.audit({ entries: Terms.entries, fields: [{ slug: 'perfect-number', text }] }).complete,
      true,
      text
    );
  }
  assert.ok(N.classify('|x|', { slug: 'perfect-number' }).includes('absolute-value'));
  assert.ok(!N.classify('d|n', { slug: 'unrelated-card' }).includes('divisibility'));
  assert.ok(!N.classify('P(X|Y)', { slug: 'conditional-probability' }).includes('divisibility'));
});

test('the product of two periods keeps squared-time units distinct from an area or elapsed duration', () => {
  for (const form of ['min²', 'min^2', 'min^{2}']) {
    assert.deepEqual(N.classify(form, { slug: 'least-common-multiple', kind: 'unit' }), [
      'number-period-product-unit'
    ]);
    const records = N.extract('a b = 24 ' + form, { slug: 'least-common-multiple' });
    assert.ok(
      records.some(
        record => record.kind === 'unit' && record.entryIds.includes('number-period-product-unit')
      ),
      form
    );
    assert.ok(
      !N.classify(form, { slug: 'regular-polygon', kind: 'unit' }).includes(
        'number-period-product-unit'
      )
    );
  }
  assert.deepEqual(N.classify('min', { slug: 'least-common-multiple', kind: 'unit' }), [
    'measurement-unit-symbols'
  ]);
  assert.deepEqual(N.classify('m²', { slug: 'regular-polygon', kind: 'unit' }), ['powered-unit']);
});

test('signal labels keep their local names without claiming an area or a second period value', () => {
  for (const token of ['A', 'B']) {
    assert.deepEqual(N.classify(token, { slug: 'least-common-multiple' }), [
      'number-signal-labels'
    ]);
    assert.ok(!N.classify(token, { slug: 'regular-polygon' }).includes('number-signal-labels'));
  }
  assert.deepEqual(N.classify('strips', { slug: 'perfect-number', kind: 'unit' }), [
    'number-count-unit'
  ]);
});
