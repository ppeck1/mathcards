import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url),
  Notation = require('../src/math-notation.js'),
  Terms = require('../src/math-terms.js');
const entry = id => Terms.entries.find(row => row.id === id);
const field = (slug, text, kind = 'tex') => ({
  slug,
  text,
  kind,
  location: 'Expansion notation regression'
});
const audit = fields => Notation.audit({ entries: Terms.entries, fields });

test('observed and random sample-mean bars retain meaning without converting complex conjugation', () => {
  const fields = [
    field('linear-regression', String.raw`\bar x + \bar y`),
    field('correlation', String.raw`\bar{x} + \bar{y}`),
    field('sampling-distribution', String.raw`\operatorname{SE}(\bar X)`),
    field('complex-multiplication', String.raw`\bar{z}`)
  ];
  const result = audit(fields);
  assert.equal(result.complete, true, JSON.stringify(result.unresolved));
  for (const spelling of [String.raw`\bar x`, String.raw`\bar{x}`, 'x̄'])
    assert.equal(Notation.normalize(spelling), 'x̅');
  assert.deepEqual(Notation.classify(String.raw`\bar y`), ['sample-mean']);
  assert.deepEqual(Notation.classify(String.raw`\bar{z}`), ['complex-conjugate']);
  assert.ok(entry('sample-mean').formulaCards.includes('sampling-distribution'));
});

test('hat, time-dot and standard error are mathematical readers rather than formatting exclusions', () => {
  const result = audit([
    field('linear-regression', String.raw`\hat y_i=a+bx_i; SSE=2`),
    field('basin-attraction', String.raw`\dot x=x-x^3`),
    field('sampling-distribution', String.raw`SE(\bar X)`)
  ]);
  assert.equal(
    result.complete,
    true,
    JSON.stringify({ unresolved: result.unresolved, review: result.review })
  );
  assert.ok(
    result.records.some(row => row.token === '\\hat' && row.resolvedIds.includes('estimate-hat'))
  );
  assert.ok(
    result.records.some(
      row => row.token === '\\dot' && row.resolvedIds.includes('time-derivative-dot')
    )
  );
  assert.ok(
    result.records.some(
      row => row.token === 'SSE' && row.resolvedIds.includes('residual-sum-squares')
    )
  );
  assert.ok(!result.formatting.some(row => ['\\hat', '\\dot'].includes(row.token)));
  assert.deepEqual(Notation.classify('ẋ'), ['time-derivative-dot']);
  assert.ok(Notation.classify('·').includes('multiplication'));
});

test('binomial and Poisson distribution notation resolves in each actual inferential setting', () => {
  const slugs = [
    'binomial-distribution',
    'confidence-interval',
    'hypothesis-test',
    'poisson-distribution'
  ];
  const fields = slugs.map(slug =>
    field(
      slug,
      JSON.parse(
        fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
      ).definition.formal_latex
    )
  );
  const result = audit(fields);
  assert.equal(
    result.complete,
    true,
    JSON.stringify({ unresolved: result.unresolved, review: result.review })
  );
  for (const slug of slugs)
    assert.ok(
      result.records.some(
        row =>
          row.slug === slug &&
          row.token === '\\sim' &&
          row.resolvedIds.includes('distribution-notation')
      ),
      slug
    );
  assert.ok(
    result.records.some(
      row =>
        row.token === '\\operatorname{Poisson}' && row.resolvedIds.includes('poisson-distribution')
    )
  );
  const j = result.records.find(row => row.slug === 'hypothesis-test' && row.token === 'j');
  assert.ok(j?.resolvedIds.includes('summation-index'));
  assert.ok(!j.resolvedIds.includes('iteration-index'));
});

test('order operations and noninclusion preserve their meanings separately from logical or geometric glyphs', () => {
  assert.deepEqual(Notation.classify('∧', { slug: 'meet-join' }), ['lattice-meet']);
  assert.deepEqual(Notation.classify('∨', { slug: 'lattice-distributivity' }), ['lattice-join']);
  assert.ok(Notation.classify('∧', { slug: 'logical-connectives' }).includes('logical-and'));
  assert.deepEqual(Notation.classify('⊈', { slug: 'partial-order' }), ['not-subset']);
  assert.ok(
    Notation.classify(String.raw`\Longleftrightarrow`, { slug: 'partial-order' }).includes(
      'if-and-only-if'
    )
  );
  assert.ok(Notation.classify('⊥', { slug: 'inner-product' }).includes('orthogonal'));
  const result = audit([
    field('partial-order', String.raw`A\preceq B\ \Longleftrightarrow\ A\subseteq B`),
    field('partial-order', 'A ⊈ B', 'formula'),
    field('meet-join', String.raw`A\wedge B=A\cap B`)
  ]);
  assert.equal(result.complete, true, JSON.stringify(result.unresolved));
});

test('new count, rate and SI labels have actual readers and unknown units remain unresolved', () => {
  const mapping = {
    K: 'kelvin',
    kPa: 'pascal',
    mol: 'mole',
    'J/K': 'entropy-unit',
    readers: 'reader-count-unit',
    reader: 'reader-count-unit',
    packets: 'packet-count-unit',
    packet: 'packet-count-unit',
    draws: 'draw-count-unit',
    draw: 'draw-count-unit',
    'arrivals/minute': 'arrival-rate-unit'
  };
  for (const [symbol, id] of Object.entries(mapping)) {
    assert.deepEqual(Notation.classify(symbol, { kind: 'unit' }), [id], symbol);
    assert.ok(entry(id));
  }
  assert.deepEqual(Notation.classify('bananas/minute', { kind: 'unit' }), []);
  assert.equal(
    audit([
      field('relative-entropy', 'bits', 'unit'),
      field('partial-order', 'truth value', 'unit')
    ]).complete,
    true
  );
  assert.equal(
    audit([field('sampling-distribution', 'UnknownFunction(X)')]).complete,
    false,
    'unknown callable names still require review'
  );
  assert.equal(
    audit([field('linear-regression', String.raw`\madeUp y`)]).complete,
    false,
    'unknown commands do not become formatting'
  );
});

test('finite lattice collection labels have authored readers confined to their actual setting', () => {
  const collections = audit([
    field('partial-order', 'A', 'formula'),
    field('meet-join', 'B', 'formula'),
    field('lattice-distributivity', 'C', 'formula')
  ]);
  assert.equal(collections.complete, true);
  assert.ok(collections.records.every(row => row.resolvedIds.includes('tool-collection')));
  assert.equal(
    audit([field('unrelated-future-module', 'A', 'formula')]).complete,
    false,
    'a local collection label does not define A in another module'
  );
});
