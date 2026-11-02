import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Notation = require('../src/math-notation.js');
const Terms = require('../src/math-terms.js');
const MathIndex = require('../src/math-index.js');
const Stories = require('../src/story-library.js');
const Metadata = require('../src/continuation-metadata.js');
const directory = new URL('../content/cards/', import.meta.url);
const cards = fs
  .readdirSync(directory)
  .filter(name => name.endsWith('.json'))
  .map(name => JSON.parse(fs.readFileSync(new URL(name, directory), 'utf8')));
const index = MathIndex.create({ cards, stories: Stories.all() });
const slugs = entry => entry.usedBy.map(use => use.slug).sort();
const authored = id => Terms.entries.find(entry => entry.id === id);
const auditField = (slug, text, kind = 'formula') =>
  Notation.audit({
    entries: Terms.entries,
    fields: [{ slug, text, kind }]
  });

test('continuation notation has unique authored identities and complete readers without synthesized grammar contexts', () => {
  assert.equal(new Set(Terms.entries.map(entry => entry.id)).size, Terms.entries.length);
  const installed = cards.filter(card => Metadata.ids.includes(card.slug));
  assert.equal(installed.length, Metadata.ids.length);
  const report = Notation.audit({
    cards: installed,
    stories: Stories.all(),
    entries: Terms.entries
  });
  assert.deepEqual(report.unresolved, []);
  assert.deepEqual(report.review, []);
  for (const id of ['numeral-system-places', 'numeral-system-place-index']) {
    assert.ok(authored(id), id);
  }
  assert.deepEqual(authored('numeral-system-places').symbols, ['dⱼ']);
  assert.deepEqual(authored('numeral-system-place-index').symbols, ['j']);
  assert.equal(
    Terms.sources.gradient.url,
    'https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient'
  );
  const dynamics = require('../src/dynamics-extension-terms.js');
  for (const entry of dynamics.entries)
    for (const key of entry.sourceKeys) {
      assert.ok(key.startsWith('dynamics_'), key);
      assert.deepEqual(Terms.sources[key], dynamics.sources[key]);
    }
});

test('number operators keep products distinct from Greek pi and ordered selections distinct from probability', () => {
  assert.deepEqual(Notation.classify('∏'), ['product-notation']);
  assert.deepEqual(Notation.classify('\\prod'), ['product-notation']);
  assert.deepEqual(Notation.classify('Π'), ['pi-capital']);
  assert.deepEqual(Notation.classify('\\Pi'), ['pi-capital']);
  for (const query of ['gcd(12,8)', '\\operatorname{gcd}(12,8)']) {
    const report = auditField('greatest-common-divisor', query);
    assert.equal(report.complete, true, query);
    assert.ok(
      report.records.some(record => record.resolvedIds.includes('greatest-common-divisor-function'))
    );
    assert.ok(!report.records.some(record => record.resolvedIds.includes('probability')));
  }
  const ordered = auditField('permutation-count', 'P(n,r)');
  assert.equal(ordered.complete, true);
  assert.ok(ordered.records.some(record => record.resolvedIds.includes('permutation-count')));
  assert.ok(!ordered.records.some(record => record.resolvedIds.includes('probability')));
  assert.ok(Notation.classify('P(A)', { slug: 'probability' }).includes('probability'));
  assert.deepEqual(slugs(index.get('greatest-common-divisor-function')), [
    'greatest-common-divisor',
    'rational-number'
  ]);
});

test('vector products consume the vector operation without adding scalar multiplication and preserve exact spans', () => {
  const examples = [
    [
      'spatial-cross-product',
      String.raw`\vec u\times\vec v`,
      ['cross-product', 'vector-arrow-notation']
    ],
    ['spatial-cross-product', 'u⃗ × v⃗', ['cross-product', 'vector-arrow-notation']],
    ['vector-projection', String.raw`\vec r\cdot\vec v`, ['dot-product', 'orthogonal-residual']],
    ['vector-projection', 'u · v', ['dot-product']],
    [
      'scalar-triple-product',
      String.raw`\vec u\cdot(\vec v\times\vec w)`,
      ['scalar-triple-product', 'dot-product', 'cross-product']
    ],
    [
      'scalar-triple-product',
      'u · (v × w)',
      ['scalar-triple-product', 'dot-product', 'cross-product']
    ]
  ];
  for (const [slug, text, expected] of examples) {
    const report = auditField(slug, text);
    assert.equal(report.complete, true, text);
    for (const id of expected)
      assert.ok(
        report.records.some(record => record.resolvedIds.includes(id)),
        text + ' → ' + id
      );
    assert.ok(!report.records.some(record => record.resolvedIds.includes('multiplication')), text);
    for (const record of report.records)
      assert.equal(text.slice(record.offset, record.end), record.token);
  }
  assert.deepEqual(slugs(index.get('cross-product')), [
    'cross-product',
    'scalar-triple-product',
    'spatial-cross-product',
    'torque'
  ]);
  assert.ok(
    auditField('spatial-cross-product', '2 × 3').records.some(record =>
      record.resolvedIds.includes('multiplication')
    )
  );
  assert.ok(
    auditField('vector-projection', 'r⃗').records.every(
      record => !record.resolvedIds.includes('position-vector')
    )
  );
});

test('coordinate primes, momentum and angular units retain their actual spatial roles', () => {
  for (const text of ['x′', 'y′']) {
    const report = auditField('coordinate-transformation', text);
    assert.equal(report.complete, true);
    assert.ok(
      report.records.some(record => record.resolvedIds.includes('coordinate-transformation'))
    );
    assert.ok(!report.records.some(record => record.resolvedIds.includes('derivative')));
  }
  const momentum = auditField('linear-momentum', 'p_x; ‖p‖');
  assert.equal(momentum.complete, true);
  assert.ok(momentum.records.some(record => record.resolvedIds.includes('linear-momentum')));
  assert.ok(!momentum.records.some(record => record.resolvedIds.includes('probability')));
  for (const [slug, unit, id] of [
    ['angular-velocity', 'rad/s', 'angular-velocity-unit'],
    ['linear-momentum', 'kg·m/s', 'momentum-unit'],
    ['linear-momentum', 'kg.m/s', 'momentum-unit']
  ]) {
    const report = auditField(slug, unit, 'unit');
    assert.equal(report.complete, true, unit);
    assert.ok(report.records[0].resolvedIds.includes(id));
    assert.deepEqual(slugs(index.get(id)), [slug]);
  }
  assert.ok(!index.search('x′').some(entry => entry.id === 'derivative'));
  assert.deepEqual(slugs(index.get('linear-momentum')), ['linear-momentum']);
});

test('chart dimensions, ambient coordinates and pole labels do not borrow each other’s meanings', () => {
  for (const [slug, symbol, id] of [
    ['circle-manifold', 'S¹', 'unit-circle'],
    ['sphere-manifold', 'S²', 'unit-sphere']
  ]) {
    const report = auditField(slug, symbol);
    assert.equal(report.complete, true);
    assert.ok(report.records.some(record => record.resolvedIds.includes(id)));
    assert.ok(
      !report.records.some(
        record => record.resolvedIds.includes('square') || record.resolvedIds.includes('exponent')
      )
    );
    assert.deepEqual(slugs(index.get(id)), [slug]);
  }
  const south = auditField('sphere-manifold', 'S');
  assert.ok(south.records.some(record => record.resolvedIds.includes('projection-pole')));
  assert.ok(
    !south.records.some(
      record =>
        record.resolvedIds.includes('unit-sphere') || record.resolvedIds.includes('unit-circle')
    )
  );
  assert.ok(!index.search('S²').some(entry => entry.id === 'square' || entry.id === 'exponent'));
  assert.deepEqual(slugs(index.get('sphere-latitude')), ['sphere-manifold']);
  assert.deepEqual(slugs(index.get('sphere-longitude')), ['sphere-manifold']);
  assert.deepEqual(slugs(index.get('chart-ambient-coordinate')), [
    'circle-manifold',
    'sphere-manifold'
  ]);
  assert.ok(
    auditField('sphere-manifold', 'z').records.some(record =>
      record.resolvedIds.includes('chart-ambient-coordinate')
    )
  );
  assert.ok(
    !auditField('sphere-manifold', 'z').records.some(record =>
      record.resolvedIds.includes('complex-variable')
    )
  );
});

test('dynamical and count units resolve only through their declared readers', () => {
  for (const [slug, unit, id] of [
    ['circle-manifold', 'chart units', 'chart-coordinate-unit'],
    ['gradient-flow', 'time units', 'model-time-unit'],
    ['gradient-flow', 'per time unit', 'model-return-rate-unit'],
    ['gradient-flow', 'cost units', 'model-cost-unit'],
    ['prime-factorization', 'factors', 'number-count-unit'],
    ['permutation-count', 'people', 'number-count-unit'],
    ['permutation-count', 'roles', 'number-count-unit'],
    ['binomial-coefficient', 'selections', 'number-count-unit']
  ]) {
    const report = auditField(slug, unit, 'unit');
    assert.equal(report.complete, true, unit);
    assert.ok(report.records[0].resolvedIds.includes(id));
  }
  assert.deepEqual(slugs(index.get('hysteresis-sweep-index')), ['hysteresis']);
  assert.deepEqual(slugs(index.get('hysteresis-potential')), ['hysteresis']);
  assert.deepEqual(slugs(index.get('gradient-flow-potential')), ['gradient-flow']);
});

test('all continuation source namespaces preserve every older reference and resolve every new source key', () => {
  const oldProviders = ['systems', 'inference'].map(name =>
    require('../src/' + name + '-terms.js')
  );
  const oldExpansionContext = {
    module: { exports: {} },
    require(name) {
      return oldProviders[['./systems-terms.js', './inference-terms.js'].indexOf(name)];
    }
  };
  vm.runInNewContext(
    fs.readFileSync(new URL('../src/expansion-terms.js', import.meta.url), 'utf8'),
    oldExpansionContext
  );
  const oldTermsContext = {
    module: { exports: {} },
    require: () => oldExpansionContext.module.exports
  };
  vm.runInNewContext(
    fs.readFileSync(new URL('../src/math-terms.js', import.meta.url), 'utf8'),
    oldTermsContext
  );
  const older = oldTermsContext.module.exports.sources;
  const seen = new Set(Object.keys(older));
  for (const [key, source] of Object.entries(older)) {
    assert.equal(
      JSON.stringify(Terms.sources[key]),
      JSON.stringify(source),
      key + ' preserves its existing title and URL'
    );
  }
  for (const family of ['number-foundation', 'spatial-foundation', 'dynamics-extension']) {
    const provider = require('../src/' + family + '-terms.js');
    for (const [key, source] of Object.entries(provider.sources)) {
      assert.ok(!seen.has(key), family + ' reuses source key ' + key);
      seen.add(key);
      assert.deepEqual(Terms.sources[key], source);
    }
    for (const entry of provider.entries)
      for (const key of entry.sourceKeys) {
        assert.ok(provider.sources[key], entry.id + ' has a source owned by its family');
        assert.deepEqual(Terms.sources[key], provider.sources[key]);
      }
  }
});

test('continuation readers do not hide unknown commands, arbitrary callables or undeclared units', () => {
  for (const text of [
    String.raw`\vecfoo`,
    String.raw`\vec{u}\unknownOp\vec{v}`,
    String.raw`gcd(12,\unknownOp)`,
    'anotherHelper(x)'
  ]) {
    const report = auditField('spatial-cross-product', text, 'tex');
    assert.equal(report.complete, false, text);
    assert.ok(report.unresolved.length || report.review.length, text);
  }
  assert.equal(auditField('linear-momentum', 'invented momentum units', 'unit').complete, false);
});
