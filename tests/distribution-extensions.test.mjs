import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/distribution-extensions.js');
const S = require('../src/distribution-extension-stories.js');
const Terms = require('../src/distribution-extension-terms.js');
const Preview = require('../src/distribution-extension-previews.js');
const near = (actual, expected, tolerance = 2e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const cards = M.ids.map(id =>
  JSON.parse(fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8'))
);

test('Gaussian quadrature agrees with independent erfc across the entire represented threshold domain', () => {
  const z = Array.from({ length: 8001 }, (_, i) => -32 + i * 0.008);
  const expected = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,math;print(json.dumps([[.5*math.erfc(-z/math.sqrt(2)),.5*math.erfc(z/math.sqrt(2))] for z in [-32+i*.008 for i in range(8001)]]))'
      ],
      { encoding: 'utf8', maxBuffer: 2 ** 22 }
    )
  );
  let maxAbsolute = 0,
    maxTailRelative = 0;
  z.forEach((value, index) => {
    const r = M.normalTails(value),
      ref = expected[index];
    maxAbsolute = Math.max(maxAbsolute, Math.abs(r.cdf - ref[0]), Math.abs(r.survival - ref[1]));
    const tail = value < 0 ? r.cdf : r.survival,
      reference = value < 0 ? ref[0] : ref[1];
    maxTailRelative = Math.max(maxTailRelative, Math.abs(tail - reference) / reference);
    assert.ok(r.cdf >= 0 && r.cdf <= 1 && r.survival >= 0 && r.survival <= 1);
    near(r.cdf + r.survival, 1, 3e-16);
    const mirrored = M.normalTails(-value);
    assert.equal(r.cdf, mirrored.survival);
  });
  assert.ok(maxAbsolute < 2e-14, 'measured max absolute error ' + maxAbsolute);
  assert.ok(maxTailRelative < 2e-12, 'measured max tail relative error ' + maxTailRelative);
  assert.deepEqual(M.normalTails(0), { cdf: 0.5, survival: 0.5 });
  console.log(
    'Gaussian measured grid: max absolute ' +
      maxAbsolute +
      '; max tail relative ' +
      maxTailRelative +
      ' over8001 z values in[-32,32].'
  );
});

test('normal location/scale preserve the standardized probability while density keeps its units', () => {
  for (const mean of [-2, 0, 2])
    for (const sigma of [0.25, 0.5, 1, 2]) {
      const centered = M.evaluate('normal-distribution', { threshold: mean, mean, sigma });
      assert.equal(centered.output, 0.5);
      near(centered.density, 1 / (sigma * Math.sqrt(2 * Math.PI)));
      assert.ok(centered.windowMass <= 1 && centered.windowMass > 0.9999);
      for (const z of [-2, -1, 0, 1, 2]) {
        const threshold = mean + sigma * z;
        if (Math.abs(threshold) > 6) continue;
        const r = M.evaluate('normal-distribution', { threshold, mean, sigma });
        near(r.z, z);
        near(r.output, M.normalTails(z).cdf);
        near(r.standardDensity, r.density * sigma);
      }
    }
  const small = M.evaluate('normal-distribution', { threshold: 1, mean: 0, sigma: 0.25 });
  const broad = M.evaluate('normal-distribution', { threshold: 1, mean: 0, sigma: 2 });
  assert.ok(small.output > broad.output);
  const tail = M.evaluate('normal-distribution', { threshold: -6, mean: 2, sigma: 0.25 });
  assert.ok(
    tail.output > 0 && tail.output < 1e-200,
    'the negative extreme retains its small nonzero probability'
  );
});

test('exponential waiting probability, survival, rate units and memorylessness agree', () => {
  for (const rate of [0.25, 0.5, 1, 2])
    for (const time of [0, 1e-12, 0.5, 2, 8]) {
      const r = M.evaluate('exponential-distribution', { time, rate });
      near(r.output + r.survival, 1, 2e-16);
      near(r.density, rate * r.survival);
      near(r.meanWait * rate, 1);
      if (time === 0) assert.equal(r.output, 0);
      else assert.ok(r.output > 0);
      if (time <= 4) {
        const later = M.evaluate('exponential-distribution', { time: time + 2, rate });
        near(later.survival / r.survival, Math.exp(-rate * 2));
      }
    }
  const faster = M.evaluate('exponential-distribution', { time: 2, rate: 1 }),
    slower = M.evaluate('exponential-distribution', { time: 2, rate: 0.5 });
  assert.ok(faster.output > slower.output);
  assert.ok(faster.meanWait < slower.meanWait);
});

test('curve sampling retains evaluation semantics without recomputing an unchanged density window', () => {
  for (const id of M.ids) {
    const p = M.defaults(id),
      control = M.controls(id)[0];
    for (let i = 0; i <= 32; i++) {
      const x = control.min + ((control.max - control.min) * i) / 32,
        r = M.evaluate(id, { ...p, [control.key]: x });
      assert.equal(M.curveValue(id, p, x), r.valid ? r.output : null);
    }
    assert.equal(M.curveValue(id, p, control.max + 1), null);
  }
});

test('positive subnormal waits and standardized distances never silently become exact zeros', () => {
  for (const rate of [0.25, 0.5]) {
    const r = M.evaluate('exponential-distribution', { time: Number.MIN_VALUE, rate });
    assert.equal(r.valid, false);
    assert.equal(r.status, 'numeric_precision');
    assert.equal(r.output, null);
    assert.equal(
      M.curveValue('exponential-distribution', { time: 1, rate }, Number.MIN_VALUE),
      null
    );
  }
  for (const rate of [1, 2]) {
    const r = M.evaluate('exponential-distribution', { time: Number.MIN_VALUE, rate });
    assert.equal(r.valid, true);
    assert.equal(r.output, rate * Number.MIN_VALUE);
    assert.ok(r.output > 0);
  }
  assert.equal(M.evaluate('exponential-distribution', { time: 0, rate: 0.25 }).output, 0);
  const normal = M.evaluate('normal-distribution', {
    threshold: Number.MIN_VALUE,
    mean: 0,
    sigma: 2
  });
  assert.equal(normal.status, 'numeric_precision');
  assert.equal(normal.output, null);
  const retained = M.evaluate('normal-distribution', {
    threshold: Number.MIN_VALUE,
    mean: 0,
    sigma: 1
  });
  assert.equal(retained.valid, true);
  assert.equal(retained.z, Number.MIN_VALUE);
  assert.equal(
    retained.output,
    0.5,
    'CDF rounds to half while its nonzero standardized distance remains explicit'
  );
});

test('paired sign tails equal exhaustive independent sign-pattern counts', () => {
  for (const pattern of ['varied', 'matched'])
    for (const shift of [-4, -3, -2, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3, 4]) {
      const r = M.evaluate('sign-test', { shift, pattern });
      assert.equal(r.pairs.length, 6);
      assert.equal(r.positive + r.negative + r.ties, 6);
      r.pairs.forEach(pair => {
        near(pair.after - pair.before, pair.difference);
        assert.equal(Math.sign(pair.after - pair.before), pair.sign);
      });
      if (!r.valid) {
        assert.equal(r.status, 'no_nonzero_pairs');
        assert.equal(r.n, 0);
        assert.equal(r.output, null);
        continue;
      }
      let ways = 0;
      for (let mask = 0; mask < 2 ** r.n; mask++) {
        let count = 0;
        for (let bit = 0; bit < r.n; bit++) count += (mask >> bit) & 1;
        if (count >= r.positive) ways++;
      }
      assert.equal(r.tailWays, ways);
      assert.equal(r.denominator, 2 ** r.n);
      assert.equal(r.output, ways / 2 ** r.n);
      near(
        r.masses.reduce((sum, m) => sum + m.mass, 0),
        1
      );
      assert.equal(
        r.masses.filter(m => m.selected).reduce((sum, m) => sum + m.count, 0),
        ways
      );
    }
  assert.equal(M.evaluate('sign-test', { shift: 1.5, pattern: 'varied' }).output, 7 / 64);
  assert.equal(M.evaluate('sign-test', { shift: 2.5, pattern: 'varied' }).output, 1 / 64);
  const tie = M.evaluate('sign-test', { shift: 0, pattern: 'varied' });
  assert.equal(tie.n, 5);
  assert.equal(tie.ties, 1);
  assert.equal(tie.positive, 3);
  assert.equal(tie.output, 0.5);
});

test('sign precision failures cannot label identical represented readings with opposite signs', () => {
  for (const p of [
    { shift: 2 - 2 ** -51, pattern: 'varied' },
    { shift: 2 ** -50, pattern: 'matched' }
  ]) {
    const r = M.evaluate('sign-test', p);
    assert.equal(r.valid, false);
    assert.equal(r.status, 'numeric_precision');
    assert.equal(r.output, null);
    assert.ok(r.pairs.some(pair => pair.difference !== 0 && pair.after === pair.before));
  }
  const representable = M.evaluate('sign-test', { shift: 2 ** -48, pattern: 'matched' });
  assert.equal(representable.valid, true);
  assert.equal(representable.positive, 6);
  assert.equal(representable.output, 1 / 64);
  const zeros = M.evaluate('sign-test', { shift: 0, pattern: 'matched' });
  assert.equal(zeros.status, 'no_nonzero_pairs');
});

test('sign interpolation guards respect exact zero boundaries without inventing intermediate counts', () => {
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 0.1, pattern: 'varied' },
      { shift: 0.9, pattern: 'varied' }
    ),
    true
  );
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 0.9, pattern: 'varied' },
      { shift: 1.1, pattern: 'varied' }
    ),
    false
  );
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 1.1, pattern: 'varied' },
      { shift: 1.1, pattern: 'matched' }
    ),
    false
  );
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 0, pattern: 'matched' },
      { shift: 1, pattern: 'matched' }
    ),
    false
  );
  assert.equal(
    M.canInterpolate('normal-distribution', M.defaults('normal-distribution'), {
      threshold: 2,
      mean: 1,
      sigma: 0.5
    }),
    true
  );
});

test('strict inputs reject unknown, coerced, unsupported and out-of-domain values', () => {
  for (const id of M.ids) {
    const defaults = M.defaults(id);
    assert.equal(M.evaluate(id, defaults).valid, true);
    assert.equal(M.evaluate(id, { ...defaults, unknown: 1 }).status, 'invalid_parameters');
    assert.equal(M.evaluate(id, []).status, 'invalid_parameters');
    for (const c of M.controls(id).filter(c => c.type !== 'select'))
      for (const value of [true, '1', NaN, Infinity, c.min - 1, c.max + 1])
        assert.equal(M.evaluate(id, { ...defaults, [c.key]: value }).status, 'invalid_parameters');
  }
  assert.equal(
    M.evaluate('normal-distribution', { threshold: 0, mean: 0, sigma: 0 }).status,
    'invalid_parameters'
  );
  assert.equal(
    M.evaluate('exponential-distribution', { time: 1, rate: 0 }).status,
    'invalid_parameters'
  );
  assert.equal(
    M.evaluate('sign-test', { shift: 1, pattern: 'constructor' }).status,
    'invalid_parameters'
  );
});

test('all canonical fixtures independently agree with the Python erfc and combinatorial references', () => {
  const requests = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => [card.slug, c.input])
  );
  const expected = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from distribution_extension_reference import compute;print(json.dumps([compute(s,p) for s,p in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(requests), encoding: 'utf8' }
    )
  );
  let index = 0;
  for (const card of cards)
    for (const c of card.interactive.expected_cases) {
      const actual = M.evaluate(card.slug, c.input),
        ref = expected[index++];
      assert.equal(actual.status, c.status, card.slug);
      assert.equal(ref.status, c.status, card.slug);
      if (c.status === 'valid') {
        near(actual.output, c.output, card.interactive.numeric_tolerance);
        near(actual.output, ref.output, card.interactive.numeric_tolerance);
      }
    }
  assert.equal(index, 63);
});

test('owning scenes provide actual grammar quantity marks and meaningful pins without extra controls', () => {
  const bindings = JSON.parse(
    fs.readFileSync(
      new URL('../content/planning/distribution-extension-integration.json', import.meta.url),
      'utf8'
    )
  ).bindings;
  for (const id of M.ids) {
    const p = M.defaults(id),
      r = M.evaluate(id, p),
      html = M.render(id, p, {
        id: 'one',
        compact: true,
        sceneControl: false,
        baseline: { ...p, [M.specs(id).axis]: M.controls(id)[0].min }
      });
    assert.doesNotMatch(html, /NaN|Infinity|<animate|animation:/);
    assert.doesNotMatch(html, /data-drag-param|role="slider"/);
    for (const keys of Object.values(bindings[id]))
      for (const key of keys)
        assert.match(html, new RegExp('data-quantity="[^"]*\\b' + key + '\\b'), id + ' ' + key);
    assert.equal(M.specs(id).views.join(','), 'geometry,graph');
    assert.match(
      M.render(id, p, { view: 'graph', compact: true, id: 'g', baseline: p }),
      /Pinned probability/
    );
    assert.ok(Number.isFinite(r.output));
  }
  const tied = M.render('sign-test', { shift: 0, pattern: 'matched' }, { compact: true });
  assert.match(tied, /All pairs tied/);
  assert.match(tied, /data-quantity="pattern shift pairs"/);
  const precision = M.render(
    'sign-test',
    { shift: 2 - 2 ** -51, pattern: 'varied' },
    { compact: true }
  );
  assert.match(precision, /represented after-reading/);
});

test('connected stories expose three actual stages, protect lookups and use the primary variable first', () => {
  for (const id of M.ids) {
    const story = S.forSlug(id),
      r = M.evaluate(id, story.parameters),
      values = { ...story.parameters, ...r };
    assert.equal(story.variables[0].key, story.timeline.key);
    assert.equal(story.variables[0].key, S.linksFor(id).variableKey);
    assert.equal(story.variables[0].symbol, S.linksFor(id).symbol);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), id + ' ' + key);
        assert.ok(S.quantityFor(id, key), id + ' ' + key);
      }
    for (const key of ['__proto__', 'constructor', 'toString'])
      assert.equal(S.quantityFor(id, key), null);
    assert.ok(Object.isFrozen(story));
  }
  assert.equal(S.forSlug('constructor'), null);
  assert.equal(S.linksFor('constructor'), null);
});

test('topic-specific preview captions stay separate and derive their reading from the model', () => {
  for (const id of M.ids) {
    const p = M.defaults(id),
      r = M.evaluate(id, p),
      svg = Preview.draw(id, p, r);
    assert.match(svg, /data-preview-quantity="output"/);
    assert.match(svg, /data-preview-layer="caption"/);
    assert.match(svg, /y="216"/);
    assert.doesNotMatch(svg, /NaN|Infinity|<animate/);
    assert.ok(Preview.describe(id, p, r).includes(M.specs(id).title));
  }
  const normal = Preview.draw(
    'normal-distribution',
    M.defaults('normal-distribution'),
    M.evaluate('normal-distribution', M.defaults('normal-distribution'))
  );
  assert.match(normal, /Probability lives in the area/);
});

test('authored vocabulary keeps probability, density, waiting and paired-sign meanings scoped', () => {
  const ids = new Set(Terms.entries.map(e => e.id));
  assert.equal(ids.size, Terms.entries.length);
  for (const entry of Terms.entries) {
    assert.ok(Array.isArray(entry.aliases));
    assert.ok(entry.definition.length > 25);
    assert.ok(entry.sourceKeys.every(key => Object.hasOwn(Terms.sources, key)));
    assert.ok(entry.grammarCards.every(id => M.has(id)));
    assert.ok(entry.formulaCards.every(id => M.has(id)));
    assert.doesNotMatch(entry.example, /\{\{/);
  }
  for (const key of Object.keys(Terms.sources)) assert.ok(key.startsWith('distribution_'));
  assert.ok(Terms.entries.some(e => e.symbols.includes('Φ(z)')));
  assert.ok(Terms.entries.some(e => e.symbols.includes('p₊')));
  assert.ok(Terms.entries.some(e => e.symbols.includes('E[T]')));
});

test('authored terms compile through the actual merged index entry contract', () => {
  const Index = require('../src/math-index.js');
  const sources = JSON.parse(
    fs.readFileSync(
      new URL('../content/planning/distribution-extension-integration.json', import.meta.url),
      'utf8'
    )
  ).sources;
  const index = Index.create({ cards, sources, stories: S.all() });
  for (const id of M.ids) {
    assert.ok(index.search(id.replaceAll('-', ' ')).length);
    for (const entry of Terms.entries.filter(e => e.grammarCards?.includes(id)))
      assert.ok(index.entries.some(row => row.id === entry.id));
  }
});

test('density geometry pins separate a remembered horizontal input from its own cumulative result', () => {
  for (const id of ['normal-distribution', 'exponential-distribution']) {
    const p = M.defaults(id),
      baseline =
        id === 'normal-distribution'
          ? { threshold: 2, mean: -1, sigma: 0.5 }
          : { time: 4, rate: 1 };
    const html = M.render(id, p, { id: 'pin', compact: true, baseline }),
      value = M.evaluate(id, baseline).output,
      key = id === 'normal-distribution' ? 'threshold' : 'time';
    assert.match(
      html,
      new RegExp(
        'data-quantity="' + key + '" data-story-part="input"[^>]*><line[^>]*stroke-dasharray="5 4"'
      )
    );
    const marker = html.match(/<line[^>]*data-role="pinned-probability"[^>]*>/)?.[0];
    assert.ok(marker);
    const actual = Number(marker.match(/x1="([^"]+)"/)[1]);
    near(actual, 35 + 290 * value, 1e-5);
    assert.match(html, id === 'normal-distribution' ? /Pinned threshold/ : /Pinned time/);
  }
});

test('the waiting random variable traces its law while the threshold keeps its own input mark', () => {
  const Bindings = require('../src/symbol-bindings.js');
  assert.deepEqual(Bindings.keysFor('exponential-distribution', 'T'), ['waitingLaw']);
  const parameters = M.defaults('exponential-distribution'),
    value = M.evaluate('exponential-distribution', parameters);
  assert.match(value.waitingLaw, /Exponential waiting-time law/);
  assert.equal(S.quantityFor('exponential-distribution', 'waitingLaw').role, 'reference');
  const html = M.render('exponential-distribution', parameters, { compact: true, id: 'law' });
  assert.match(html, /<g data-quantity="rate waitingLaw" data-story-part="reference"[^>]*><path/);
  assert.match(html, /<g data-quantity="time exponent" data-story-part="input"/);
  assert.doesNotMatch(html, /<g data-quantity="time waitingLaw"/);
  const graph = M.render('exponential-distribution', parameters, {
    view: 'graph',
    compact: true,
    id: 'law-graph'
  });
  assert.match(graph, /data-quantity="waitingLaw time output cumulative"/);
  assert.match(graph, /data-quantity="waitingLaw time rate survival"/);
});
