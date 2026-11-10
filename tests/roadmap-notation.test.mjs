import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Notation = require('../src/math-notation.js');
const Terms = require('../src/math-terms.js');

test('paired-difference mean notation preserves native and explicit TeX forms', () => {
  for (const form of ['d̄', 'd̅', '\\bar{d}', '\\bar d', '\\overline{d}']) {
    assert.equal(Notation.normalize(form), 'd̅');
    const report = Notation.audit({
      entries: Terms.entries,
      fields: [
        {
          slug: 'randomized-block-design',
          text: form,
          kind: form.startsWith('\\') ? 'tex' : 'formula'
        }
      ]
    });
    assert.equal(report.complete, true, form);
    assert.ok(
      report.records.some(row => row.resolvedIds.includes('randomized-block-design-symbol-9'))
    );
  }
});

test('new count units keep their actual lesson meaning without replacing earlier unit roles', () => {
  for (const [text, slug, id] of [
    ['people', 'inclusion-exclusion', 'discrete-person-count-unit'],
    ['slots', 'graph-coloring', 'discrete-time-slot-count-unit'],
    ['assignments', 'graph-coloring', 'discrete-assignment-count-unit'],
    ['commands', 'geometric-series', 'analysis-command-count'],
    ['readings', 'normal-mean-interval', 'estimation-reading-count-unit']
  ]) {
    assert.deepEqual(Notation.classify(text, { slug, kind: 'unit' }), [id]);
    assert.equal(
      Notation.audit({ entries: Terms.entries, fields: [{ slug, text, kind: 'unit' }] }).complete,
      true
    );
  }
  assert.deepEqual(Notation.classify('people', { slug: 'permutation-count', kind: 'unit' }), [
    'number-count-unit'
  ]);
  assert.deepEqual(Notation.classify('commands', { slug: 'linear-search', kind: 'unit' }), []);
  assert.deepEqual(Notation.classify('readings', { slug: 'graph-coloring', kind: 'unit' }), []);
});

test('sampling units resolve to their scoped score, allocation and reading meanings', () => {
  for (const [text, slug, id] of [
    ['points', 'randomization-distribution', 'sampling-task-point-unit'],
    ['allocations', 'randomization-distribution', 'sampling-allocation-count-unit'],
    ['readings', 'student-mean-interval', 'sampling-reading-count-unit']
  ]) {
    assert.deepEqual(Notation.classify(text, { slug, kind: 'unit' }), [id]);
    assert.equal(
      Notation.audit({ entries: Terms.entries, fields: [{ slug, text, kind: 'unit' }] }).complete,
      true
    );
    assert.deepEqual(Notation.classify(text, { slug: 'unrelated-card', kind: 'unit' }), []);
  }
});

test('the coloring count is an explicit callable reader and remains scoped to its graph lesson', () => {
  assert.ok(Notation.classify('N_G(k)').includes('graph-coloring-output-4'));
  const readers = Terms.entries.filter(entry => entry.id === 'graph-coloring-output-4');
  const report = Notation.audit({
    entries: readers,
    fields: [
      { slug: 'graph-coloring', text: 'N_G', kind: 'formula' },
      { slug: 'other-card', text: 'N_G', kind: 'formula' }
    ]
  });
  assert.ok(
    report.records.some(
      row => row.slug === 'graph-coloring' && row.resolvedIds.includes('graph-coloring-output-4')
    )
  );
  assert.ok(report.unresolved.some(row => row.slug === 'other-card'));
});
