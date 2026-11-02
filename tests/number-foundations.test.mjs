import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url),
  M = require('../src/number-foundations.js'),
  S = require('../src/number-foundation-stories.js'),
  P = require('../src/number-foundation-previews.js'),
  T = require('../src/number-foundation-terms.js');
const delta = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/number-foundation-integration.json', import.meta.url),
    'utf8'
  )
);
const attrs = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const gcdReference = (a, b) =>
  Math.max(
    ...Array.from({ length: Math.min(Math.abs(a), b) }, (_, i) => i + 1).filter(
      d => a % d === 0 && b % d === 0
    )
  );
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const modelSource = fs.readFileSync(
  new URL('../src/number-foundations.js', import.meta.url),
  'utf8'
);
function graph(slug, p) {
  const c = vm.createContext({ AtlasPlotView: { render: spec => spec } });
  vm.runInContext(modelSource, c);
  return c.AtlasNumberFoundations.render(slug, p, { view: 'graph', sceneControl: false });
}

test('seven number families use immutable metadata, fresh parameters and strictly whole inputs', () => {
  assert.deepEqual(M.ids, delta.slugs);
  assert.equal(M.ids.length, 7);
  for (const slug of M.ids) {
    const a = M.defaults(slug),
      b = M.defaults(slug);
    assert.notEqual(a, b);
    assert.deepEqual(a, b);
    const fields = M.controls(slug);
    assert.ok(fields.every(c => c.discrete && c.step === 1));
    const sweep = M.specs(slug).sweeps[0];
    assert.equal(sweep.key, M.specs(slug).axis);
    for (const value of [sweep.min, sweep.max])
      assert.equal(
        M.evaluate(slug, { ...a, [sweep.key]: value }).valid,
        true,
        slug + ' declared default sweep'
      );
    const k = fields[0].key;
    assert.equal(M.evaluate(slug, { ...a, [k]: a[k] + 0.5 }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, { ...a, unexpected: 1 }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, null).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, { ...a, [k]: Infinity }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, { ...a, [k]: String(a[k]) }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, a).valid, true);
    assert.deepEqual(M.defaults(slug), b);
  }
  for (const slug of ['unknown', 'constructor', '__proto__', null])
    assert.equal(M.has(slug), false);
});

test('every supported packing remainder satisfies Euclidean division and period identity', () => {
  for (let modulus = 2; modulus <= 12; modulus++)
    for (let total = 0; total <= 60; total++) {
      const r = M.evaluate('modular-arithmetic', { total, modulus });
      assert.equal(total, r.quotient * modulus + r.remainder);
      assert.ok(r.remainder >= 0 && r.remainder < modulus);
      assert.equal(r.output, total % modulus);
      if (total + modulus <= 60)
        assert.equal(
          M.evaluate('modular-arithmetic', { total: total + modulus, modulus }).output,
          r.output
        );
    }
});

test('all ribbon pairs match independently enumerated common divisors and every trace preserves them', () => {
  for (let first = 1; first <= 60; first++)
    for (let second = 1; second <= 60; second++) {
      const r = M.evaluate('greatest-common-divisor', { first, second });
      assert.equal(r.output, gcdReference(first, second));
      assert.equal(first % r.output, 0);
      assert.equal(second % r.output, 0);
      for (const row of r.trace) {
        assert.equal(row.a, row.quotient * row.b + row.remainder);
        assert.ok(row.remainder >= 0 && row.remainder < row.b);
        assert.equal(gcdReference(row.a, row.b), r.output);
      }
      assert.equal(r.trace.at(-1).remainder, 0);
    }
});

test('prime factors reconstruct every supported integer and retain multiplicity', () => {
  for (let number = 1; number <= 120; number++) {
    const r = M.evaluate('prime-factorization', { number });
    assert.equal(r.product, number);
    assert.equal(r.factors.length, r.output);
    assert.ok(Object.isFrozen(r.factors));
    for (const prime of r.factors) {
      assert.ok(prime > 1);
      for (let d = 2; d * d <= prime; d++) assert.notEqual(prime % d, 0);
    }
  }
  assert.deepEqual(M.evaluate('prime-factorization', { number: 64 }).factors, [2, 2, 2, 2, 2, 2]);
  assert.equal(M.evaluate('prime-factorization', { number: 1 }).output, 0);
  assert.equal(
    M.evaluate('prime-factorization', { number: 1 }).classification,
    'Neither prime nor composite'
  );
});

test('fractions preserve cross products, positive lowest denominators and exact signed strings', () => {
  for (let numerator = -12; numerator <= 12; numerator++)
    for (let denominator = 1; denominator <= 12; denominator++) {
      const r = M.evaluate('rational-number', { numerator, denominator });
      assert.equal(r.reducedNumerator * denominator, numerator * r.reducedDenominator);
      assert.ok(r.reducedDenominator > 0);
      assert.equal(
        gcdReference(r.reducedNumerator || r.reducedDenominator, r.reducedDenominator),
        1
      );
      assert.equal(r.output, numerator / denominator);
      assert.equal(
        r.exactDisplay,
        r.reducedDenominator === 1
          ? String(r.reducedNumerator)
          : r.reducedNumerator + '/' + r.reducedDenominator
      );
    }
  const third = M.evaluate('rational-number', { numerator: 2, denominator: 6 });
  assert.equal(third.exactDisplay, '1/3');
  assert.equal(
    M.evaluate('rational-number', { numerator: -3, denominator: 4 }).fractionLabel,
    '−3/4'
  );
  assert.equal(M.evaluate('rational-number', { numerator: 0, denominator: 7 }).exactDisplay, '0');
});

test('every supported numeral round-trips through an independent radix parser and weighted places', () => {
  for (let value = 0; value <= 63; value++)
    for (let base = 2; base <= 10; base++) {
      const r = M.evaluate('numeral-system', { value, base });
      assert.equal(parseInt(r.digits, base), value);
      assert.equal(r.output, value);
      assert.equal(
        r.places.reduce((s, p) => s + p.digit * p.weight, 0),
        value
      );
      assert.ok(
        r.places.every(p => p.digit >= 0 && p.digit < base && p.weight === base ** p.position)
      );
      assert.ok(r.digitCount <= 6);
    }
  assert.equal(M.evaluate('numeral-system', { value: 27, base: 2 }).digits, '11011');
  assert.equal(M.evaluate('numeral-system', { value: 27, base: 3 }).digits, '1000');
  assert.equal(M.evaluate('numeral-system', { value: 0, base: 10 }).digits, '0');
});

test('ordered assignments and unordered teams count different objects with exact empty cases', () => {
  function enumerate(n, r, used = new Set()) {
    if (used.size === r) return 1;
    let count = 0;
    for (let i = 0; i < n; i++)
      if (!used.has(i)) {
        used.add(i);
        count += enumerate(n, r, used);
        used.delete(i);
      }
    return count;
  }
  for (let available = 0; available <= 6; available++)
    for (let slots = 0; slots <= available; slots++)
      assert.equal(
        M.evaluate('permutation-count', { available, slots }).output,
        enumerate(available, slots)
      );
  for (let available = 0; available <= 10; available++)
    for (let chosen = 0; chosen <= available; chosen++) {
      const r = M.evaluate('binomial-coefficient', { available, chosen }),
        masks = Array.from({ length: 1 << available }, (_, mask) => mask).filter(
          mask => mask.toString(2).split('1').length - 1 === chosen
        );
      assert.equal(r.output, masks.length);
      assert.equal(r.selections.length, r.output);
      assert.equal(new Set(r.selections.map(x => x.join(','))).size, r.output);
      assert.ok(
        r.selections.every(
          row => row.length === chosen && row.every((x, i) => !i || row[i - 1] < x)
        )
      );
      assert.equal(r.orderedCount / r.ordersPerTeam, r.output);
      assert.equal(
        M.evaluate('binomial-coefficient', { available, chosen: available - chosen }).output,
        r.output
      );
    }
  assert.equal(M.evaluate('permutation-count', { available: 8, slots: 8 }).output, 40320);
  assert.equal(M.evaluate('binomial-coefficient', { available: 10, chosen: 5 }).output, 252);
  assert.equal(M.evaluate('permutation-count', { available: 0, slots: 0 }).output, 1);
  assert.equal(M.evaluate('binomial-coefficient', { available: 0, chosen: 0 }).output, 1);
  assert.equal(
    M.evaluate('permutation-count', { available: 2, slots: 3 }).status,
    'invalid_parameters'
  );
  assert.equal(
    M.evaluate('binomial-coefficient', { available: 2, chosen: 3 }).status,
    'invalid_parameters'
  );
});

test('graphs use separate exact whole settings, with a distinct place-contribution numeral graph', () => {
  for (const slug of M.ids.filter(s => s !== 'numeral-system')) {
    const spec = graph(slug, M.defaults(slug));
    assert.ok(spec.series.every(s => s.dots === true));
    assert.ok(
      spec.series.flatMap(s => s.points).every(p => Number.isInteger(p.x) && Number.isFinite(p.y))
    );
    assert.equal(spec.current[0].y, M.evaluate(slug, M.defaults(slug)).output);
  }
  const html = M.render('numeral-system', M.defaults('numeral-system'), {
    view: 'graph',
    compact: true
  });
  assert.match(html, /Place contributions/);
  assert.match(html, /Weighted|Digits × weights/);
  assert.notEqual(
    html,
    M.render('numeral-system', M.defaults('numeral-system'), { compact: true })
  );
});

test('pinned counting families retain their complete domain and numeral contributions share one scale', () => {
  const c = vm.createContext({ AtlasPlotView: { render: x => x } });
  vm.runInContext(modelSource, c);
  for (const [slug, key] of [
    ['permutation-count', 'slots'],
    ['binomial-coefficient', 'chosen']
  ]) {
    const spec = c.AtlasNumberFoundations.render(
      slug,
      { available: 2, [key]: 1 },
      { view: 'graph', baseline: { available: 8, [key]: 5 }, sceneControl: false }
    );
    assert.equal(spec.x.max, 8);
    assert.equal(spec.series[1].points.at(-1).x, 8);
    assert.ok(spec.current[1].x <= spec.x.max);
  }
  const html = M.render(
    'numeral-system',
    { value: 27, base: 3 },
    { view: 'graph', compact: true, baseline: { value: 27, base: 2 } }
  );
  assert.match(html, /Violet bars retain the pinned representation/);
  assert.match(html, /data-pinned-place="4" data-value="16"/);
});

test('stories expose three actual calculation stages, complete quantities and safe lookup', () => {
  for (const slug of M.ids) {
    const story = S.forSlug(slug),
      result = M.evaluate(slug, story.parameters),
      values = { ...story.parameters, ...result };
    assert.ok(Object.isFrozen(story));
    assert.deepEqual(
      story.calculation.map(x => x.role),
      ['input', 'intermediate', 'output']
    );
    assert.ok(story.variables.every(x => x.discrete));
    for (const part of [
      ...story.steps.flatMap(x => [x.body, x.formula]),
      ...story.calculation.map(x => x.template)
    ])
      for (const [, key] of part.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), slug + ' actual value ' + key);
        const q = S.quantityFor(slug, key);
        assert.ok(q && q.label.length > 4 && q.description.length > 40, slug + ' reader ' + key);
        assert.ok(Object.isFrozen(q));
      }
    for (const key of ['constructor', '__proto__', 'toString', 'missing'])
      assert.equal(S.quantityFor(slug, key), null);
  }
  for (const slug of ['constructor', '__proto__', 'toString', 'missing']) {
    assert.equal(S.forSlug(slug), null);
    assert.equal(S.linksFor(slug), null);
    assert.equal(S.quantityFor(slug, 'output'), null);
  }
});

test('all grammar tokens select actual marks and both boundary views stay finite', () => {
  for (const card of cards) {
    const slug = card.slug,
      html = M.render(slug, M.defaults(slug), { compact: true, sceneControl: false }),
      keys = new Set(
        [...html.matchAll(/data-quantity="([^"]*)"/g)].flatMap(m => m[1].split(/\s+/))
      );
    assert.deepEqual(
      Object.keys(delta.bindings[slug]).sort(),
      card.grammar.symbols.map(x => x.token).sort()
    );
    for (const [token, values] of Object.entries(delta.bindings[slug]))
      assert.ok(values.length && values.every(v => keys.has(v)), slug + ' mark for ' + token);
    for (const c of M.controls(slug))
      for (const value of [c.min, c.max]) {
        const p = { ...M.defaults(slug), [c.key]: value },
          r = M.evaluate(slug, p);
        if (!r.valid) continue;
        for (const view of ['geometry', 'graph'])
          assert.doesNotMatch(
            M.render(slug, p, { view, compact: true, sceneControl: false }),
            /NaN|Infinity|undefined/
          );
      }
  }
});

test('seven topic-specific previews preserve default values and reserved readable caption bands', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      html = P.draw(slug, p, r);
    assert.ok(P.describe(slug, p, r).length > 70);
    assert.doesNotMatch(html, /NaN|Infinity|undefined|data-drag-|<script|role="slider"/);
    assert.match(
      html,
      new RegExp(
        'data-preview-quantity="output" data-value="' + String(r.output).replace('.', '\\.') + '"'
      )
    );
    const captions = [...html.matchAll(/<g data-preview-layer="caption">([\s\S]*?)<\/g>/g)];
    assert.equal(captions.length, 1);
    for (const m of html.replace(captions[0][0], '').matchAll(/<text\b[^>]*>/g)) {
      const a = attrs(m[0]);
      assert.ok(+a['font-size'] >= 13);
      assert.ok(+a.y + +a['font-size'] / 4 <= 188, slug + ' artwork band');
    }
  }
});

test('canonical examples and fixtures agree with a separate Python reference', () => {
  const payload = cards.flatMap(c =>
      c.interactive.expected_cases.map(x => ({ slug: c.slug, ...x }))
    ),
    script =
      "import json,sys;sys.path.insert(0,'tools');from number_foundation_reference import compute;print(json.dumps([compute(x['slug']+'-visual-model',x['input']) for x in json.load(sys.stdin)]))";
  const oracle = JSON.parse(
    execFileSync('python', ['-X', 'utf8', '-c', script], {
      input: JSON.stringify(payload),
      encoding: 'utf8'
    })
  );
  for (let i = 0; i < payload.length; i++) {
    const c = payload[i],
      r = M.evaluate(c.slug, c.input);
    assert.equal(r.status, oracle[i].status, c.slug);
    assert.equal(r.status, c.status);
    if (r.valid) {
      assert.ok(Math.abs(r.output - oracle[i].output) < 1e-10);
      assert.equal(r.output, c.output);
    }
  }
  for (const card of cards) {
    assert.equal(card.examples.length, 5);
    assert.ok(card.interactive.expected_cases.length >= 8);
    for (const ex of card.examples) assert.equal(M.evaluate(card.slug, ex.preset).valid, true);
    assert.ok(card.source_refs.every(id => delta.sources.some(s => s.id === id)));
  }
});

test('browser-native providers initialize without a DOM, storage, clock or mutable globals', () => {
  const c = vm.createContext({
    AtlasPlotView: { render: x => x },
    setTimeout: () => {
      throw new Error('No provider timer');
    },
    requestAnimationFrame: () => {
      throw new Error('No provider clock');
    }
  });
  for (const file of [
    'number-foundations.js',
    'number-foundation-stories.js',
    'number-foundation-terms.js',
    'number-foundation-previews.js'
  ])
    vm.runInContext(fs.readFileSync(new URL('../src/' + file, import.meta.url), 'utf8'), c);
  assert.equal(
    c.AtlasNumberFoundations.evaluate('modular-arithmetic', { total: 23, modulus: 6 }).output,
    5
  );
  assert.equal(c.AtlasNumberFoundationStories.forSlug('rational-number').calculation.length, 3);
  assert.ok(c.AtlasNumberFoundationTerms.entries.length > 20);
  assert.ok(Object.isFrozen(T.entries));
});
