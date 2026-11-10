import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Notation = require('../src/math-notation.js');
const Index = require('../src/math-index.js');
const Terms = require('../src/math-terms.js');
const ids = ['basis', 'covariance-matrix', 'wilcoxon-signed-rank', 'mann-whitney'];
const cards = ids.map(id =>
  JSON.parse(fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8'))
);
const sources = JSON.parse(
  fs.readFileSync(new URL('../content/sources.json', import.meta.url), 'utf8')
).sources;
const index = Index.create({ cards, sources });

test('data ranks and matrix rank retain separate actual lesson evidence', () => {
  const matrix = index.get('rank').usedBy.map(use => use.slug);
  assert.ok(matrix.includes('basis'));
  assert.ok(matrix.includes('covariance-matrix'));
  assert.ok(!matrix.includes('wilcoxon-signed-rank'));
  assert.ok(!matrix.includes('mann-whitney'));
  const data = index.get('comparison-data-rank').usedBy.map(use => use.slug);
  assert.ok(data.includes('wilcoxon-signed-rank'));
  assert.ok(data.includes('mann-whitney'));
  assert.ok(!data.includes('basis'));
  assert.ok(!data.includes('covariance-matrix'));
  assert.ok(index.search('rank').some(entry => entry.id === 'rank'));
  assert.ok(index.search('rank').some(entry => entry.id === 'comparison-data-rank'));
  assert.ok(index.search('data rank').some(entry => entry.id === 'comparison-data-rank'));
  for (const slug of ['wilcoxon-signed-rank', 'mann-whitney']) {
    assert.deepEqual(Notation.classify('rank', { slug }), ['comparison-data-rank']);
  }
  assert.deepEqual(Notation.classify('rank', { slug: 'basis' }), ['rank']);
  assert.ok(index.get('standard-deviation').usedBy.some(use => use.slug === 'covariance-matrix'));
});

test('fourth-power covariance units are actual units before generic decorated identifiers', () => {
  for (const form of ['mm⁴', 'mm^4', 'mm^{4}']) {
    const text = 'D = 2.1875 ' + form;
    const records = Notation.extract(text, { slug: 'covariance-matrix' });
    assert.ok(
      records.some(
        record =>
          record.kind === 'unit' &&
          record.entryIds.includes('comparison-covariance-determinant-unit')
      ),
      form
    );
    assert.equal(
      Notation.audit({ entries: Terms.entries, fields: [{ slug: 'covariance-matrix', text }] })
        .complete,
      true
    );
    assert.ok(
      !Notation.extract(text, { slug: 'unrelated-card' }).some(record =>
        record.entryIds.includes('comparison-covariance-determinant-unit')
      )
    );
  }
});
