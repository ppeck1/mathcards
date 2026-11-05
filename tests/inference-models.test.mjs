import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url),
  M = require('../src/inference-models.js'),
  Stories = require('../src/inference-stories.js'),
  Terms = require('../src/inference-terms.js'),
  Bindings = require('../src/inference-bindings.js'),
  Previews = require('../src/inference-previews.js');
const slugs = [
  'sampling-distribution',
  'confidence-interval',
  'hypothesis-test',
  'linear-regression',
  'correlation',
  'factorial-interaction',
  'chi-square-association',
  'relative-entropy',
  'binomial-distribution',
  'poisson-distribution'
];
const close = (a, b, tolerance = 1e-10) =>
  assert.ok(Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(a), Math.abs(b)), `${a} != ${b}`);
const sum = values => values.reduce((a, b) => a + b, 0);
const source = fs.readFileSync(new URL('../src/inference-models.js', import.meta.url), 'utf8');
const attrs = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const roles = (html, role) =>
  [...html.matchAll(new RegExp('<[^>]*data-role="' + role + '"[^>]*>', 'g'))].map(([tag]) =>
    attrs(tag)
  );
function graph(slug, p, o = {}) {
  const context = vm.createContext({ AtlasPlotView: { render: spec => spec } });
  vm.runInContext(source, context);
  return context.AtlasInference.render(slug, p, { view: 'graph', sceneControl: false, ...o });
}

test('ten inference families expose fresh validated metadata and no module clock', () => {
  for (const slug of slugs) {
    const d = M.defaults(slug),
      c = M.controls(slug),
      s = M.specs(slug);
    assert.equal(M.has(slug), true);
    assert.deepEqual(s.views, ['geometry', 'graph']);
    assert.equal(s.rendererId, slug + '-visual-model');
    assert.ok(s.sweeps.length > 0);
    assert.ok(c.some(c => c.key === s.axis));
    d[c[0].key] = 999;
    c[0].label = 'changed';
    assert.notEqual(M.defaults(slug)[c[0].key], 999);
    assert.notEqual(M.controls(slug)[0].label, 'changed');
    assert.equal(M.evaluate(slug).valid, true);
    assert.ok(Object.isFrozen(Stories.all()[0]));
  }
  for (const slug of ['constructor', 'toString', '__proto__', '', null, {}])
    assert.equal(M.has(slug), false);
  assert.doesNotMatch(source, /requestAnimationFrame|setInterval|localStorage|document\./);
});

test('all 89 authored numeric fixtures agree with independently supplied expected results', () => {
  let count = 0;
  for (const slug of slugs) {
    const card = JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
    );
    assert.equal(card.examples.length, 5);
    for (const fixture of card.interactive.expected_cases) {
      count++;
      const r = M.evaluate(slug, fixture.input);
      assert.equal(r.status, fixture.status, slug + JSON.stringify(fixture.input));
      if (fixture.status === 'valid') close(r.output, fixture.output);
      else assert.equal(r.output, null);
    }
  }
  assert.equal(count, 89);
});

test('sampling exhaustively groups every ordered sample and preserves the mean', () => {
  for (let n = 1; n <= 4; n++) {
    let samples = [[]];
    for (let j = 0; j < n; j++)
      samples = samples.flatMap(row => [2, 4, 8, 10].map(x => [...row, x]));
    const means = samples.map(row => sum(row) / n),
      r = M.evaluate('sampling-distribution', { sampleSize: n });
    assert.equal(r.sampleCount, 4 ** n);
    close(sum(r.rows.map(row => row.probability)), 1);
    close(sum(r.rows.map(row => row.x * row.probability)), 6);
    close(sum(r.rows.map(row => (row.x - 6) ** 2 * row.probability)), 10 / n);
    close(r.output, Math.sqrt(sum(means.map(x => (x - 6) ** 2)) / means.length));
    for (const row of r.rows) assert.equal(row.count, means.filter(x => x === row.x).length);
  }
  close(
    M.evaluate('sampling-distribution', { sampleSize: 4 }).output,
    M.evaluate('sampling-distribution', { sampleSize: 1 }).output / 2
  );
});

test('Clopper–Pearson endpoint equations and binomial coverage retain boundary meanings', () => {
  const rows = M.evaluate('confidence-interval').rows;
  const choose = (n, k) => {
    let a = 1;
    for (let j = 1; j <= k; j++) a = (a * (n - j + 1)) / j;
    return a;
  };
  const pmf = (k, p) => choose(8, k) * p ** k * (1 - p) ** (8 - k);
  assert.equal(rows[0].low, 0);
  assert.equal(rows[8].high, 1);
  for (let k = 0; k <= 8; k++) {
    assert.ok(rows[k].low <= k / 8 && rows[k].high >= k / 8);
    if (k) close(sum(Array.from({ length: 9 - k }, (_, i) => pmf(k + i, rows[k].low))), 0.025);
    if (k < 8) close(sum(Array.from({ length: k + 1 }, (_, i) => pmf(i, rows[k].high))), 0.025);
    close(rows[k].low, 1 - rows[8 - k].high);
  }
  for (let i = 0; i <= 1000; i++) {
    const p = i / 1000,
      r = M.evaluate('confidence-interval', { trueChance: p });
    assert.ok(r.output >= 0.95 - 1e-12 && r.output <= 1 + 1e-12);
    close(r.output, sum(r.rows.filter(row => row.covered).map(row => row.probability)));
  }
  close(M.evaluate('confidence-interval', { trueChance: 0.5 }).output, 254 / 256);
  assert.equal(M.evaluate('confidence-interval', { trueChance: 0 }).output, 1);
  assert.equal(M.evaluate('confidence-interval', { trueChance: 1 }).output, 1);
});

test('highlighting an observed interval cannot change repeated-sampling coverage', () => {
  for (const p of [0.1, 0.5, 0.9]) {
    const first = M.evaluate('confidence-interval', { trueChance: p, observed: 0 });
    for (let k = 0; k <= 8; k++) {
      const r = M.evaluate('confidence-interval', { trueChance: p, observed: k });
      assert.equal(r.output, first.output);
      assert.equal(r.selected.count, k);
      assert.equal(r.low, r.rows[k].low);
    }
  }
  assert.equal(M.evaluate('confidence-interval', { trueChance: 0.5, observed: 8 }).covered, 0);
});

test('one-sided p-values count the exact null tail without turning it into a posterior', () => {
  const counts = Array(13).fill(0);
  for (let pattern = 0; pattern < 4096; pattern++)
    counts[pattern.toString(2).replace(/0/g, '').length]++;
  let previous = 1;
  for (let k = 0; k <= 12; k++) {
    const r = M.evaluate('hypothesis-test', { observed: k });
    close(r.output, sum(counts.slice(k)) / 4096);
    assert.ok(r.output <= previous);
    assert.equal(r.reject, r.output <= 0.05 ? 1 : 0);
    previous = r.output;
  }
  assert.equal(M.evaluate('hypothesis-test', { observed: 9 }).reject, 0);
  assert.equal(M.evaluate('hypothesis-test', { observed: 10 }).reject, 1);
  close(M.evaluate('hypothesis-test', { observed: 10 }).output, 79 / 4096);
});

test('least squares satisfies both normal equations and minimizes SSE', () => {
  for (let h = 0; h <= 10; h += 0.25) {
    const r = M.evaluate('linear-regression', { lastValue: h });
    close(sum(r.rows.map(row => row.residual)), 0);
    close(sum(r.rows.map(row => row.x * row.residual)), 0);
    close(r.slope, 0.2 * h - 0.3);
    close(r.intercept, 0.2 * sum([2, 3, 5, 4, h]) - 3 * r.slope);
    for (const da of [-0.5, 0.5])
      for (const db of [-0.3, 0.3]) {
        const trial = sum(
          r.rows.map(row => (row.y - (r.intercept + da) - (r.slope + db) * row.x) ** 2)
        );
        assert.ok(trial > r.sse);
      }
  }
  const r = M.evaluate('linear-regression');
  close(r.slope, 0.9);
  close(r.intercept, 1.3);
  close(r.sse, 1.9);
});

test('correlation agrees with centered observed readings and handles zero variation', () => {
  for (const trend of [-2, -1, 0, 1, 2])
    for (const scatter of [0, 0.25, 1, 2]) {
      const r = M.evaluate('correlation', { trend, scatter });
      if (trend === 0 && scatter === 0) {
        assert.equal(r.valid, false);
        assert.equal(r.status, 'undefined_correlation');
        assert.equal(r.output, null);
        continue;
      }
      const xMean = sum(r.rows.map(row => row.x)) / 5,
        yMean = sum(r.rows.map(row => row.y)) / 5,
        cov = sum(r.rows.map(row => (row.x - xMean) * (row.y - yMean))),
        denom = Math.sqrt(
          sum(r.rows.map(row => (row.x - xMean) ** 2)) *
            sum(r.rows.map(row => (row.y - yMean) ** 2))
        );
      close(r.output, cov / denom);
      assert.ok(r.output >= -1 && r.output <= 1);
      if (scatter === 0) close(r.output, Math.sign(trend));
      if (trend === 0) assert.equal(r.output, 0);
    }
});

test('interaction distinguishes the named difference of differences from factorial scaling', () => {
  for (let c = 2; c <= 14; c += 0.25) {
    const r = M.evaluate('factorial-interaction', { combined: c });
    assert.equal(r.output, r.cells[3] - r.cells[2] - (r.cells[1] - r.cells[0]));
    assert.equal(r.output, c - 7);
    assert.equal(r.factorialEffect, r.output / 2);
  }
  assert.equal(M.evaluate('factorial-interaction', { combined: 7 }).output, 0);
});

test('chi-square keeps margins and expectations fixed and is invariant under swapping columns', () => {
  for (let d = 0; d <= 20; d++) {
    const r = M.evaluate('chi-square-association', { diagonal: d }),
      opposite = M.evaluate('chi-square-association', { diagonal: 20 - d });
    assert.equal(r.cells[0] + r.cells[1], 20);
    assert.equal(r.cells[2] + r.cells[3], 20);
    assert.equal(r.cells[0] + r.cells[2], 20);
    assert.equal(r.cells[1] + r.cells[3], 20);
    assert.equal(r.expected, 10);
    close(r.output, (40 * (r.cells[0] * r.cells[3] - r.cells[1] * r.cells[2]) ** 2) / 20 ** 4);
    assert.equal(r.output, opposite.output);
  }
  assert.equal(M.evaluate('chi-square-association', { diagonal: 10 }).output, 0);
  assert.equal(M.evaluate('chi-square-association', { diagonal: 20 }).output, 40);
});

test('relative entropy has signed contributions, correct direction and explicit support failures', () => {
  const a = M.evaluate('relative-entropy', { actual: 0.75, forecast: 0.5 }),
    b = M.evaluate('relative-entropy', { actual: 0.5, forecast: 0.75 });
  close(a.contribution0, -0.25);
  close(a.output, 0.18872187554086717);
  close(b.output, 0.2075187496394219);
  assert.notEqual(a.output, b.output);
  for (const p of [0, 0.01, 0.1, 0.5, 0.9, 0.99, 1])
    for (const q of [0, 0.01, 0.1, 0.5, 0.9, 0.99, 1]) {
      const r = M.evaluate('relative-entropy', { actual: p, forecast: q }),
        excluded = (p > 0 && q === 0) || (p < 1 && q === 1);
      if (excluded) {
        assert.equal(r.status, 'infinite_divergence');
        assert.equal(r.output, null);
        assert.match(r.outputLabel, /∞/);
      } else {
        assert.equal(r.valid, true);
        assert.ok(r.output >= 0);
        close(r.output, sum(r.rows.map(row => row.contribution)));
        if (p === q) assert.equal(r.output, 0);
      }
    }
  const extreme = M.evaluate('relative-entropy', { actual: 1, forecast: Number.MIN_VALUE });
  assert.equal(extreme.valid, true);
  assert.equal(extreme.output, 1074);
});

test('binomial masses sum to one and their mean and variance agree with finite moments', () => {
  for (const n of [1, 2, 4, 8, 20])
    for (const p of [0, 0.01, 0.25, 0.5, 0.9, 1]) {
      const r = M.evaluate('binomial-distribution', {
        trials: n,
        chance: p,
        count: Math.min(n, 4)
      });
      close(sum(r.rows.map(row => row.probability)), 1);
      close(sum(r.rows.map(row => row.x * row.probability)), n * p);
      close(sum(r.rows.map(row => (row.x - n * p) ** 2 * row.probability)), n * p * (1 - p));
      assert.equal(r.output, r.rows[Math.min(n, 4)].probability);
    }
  assert.equal(M.evaluate('binomial-distribution', { trials: 4, count: 5 }).output, 0);
  close(M.evaluate('binomial-distribution', { trials: 4, chance: 0.25, count: 1 }).output, 27 / 64);
});

test('Poisson recurrence leaves its infinite support tail unnormalized and numerically visible', () => {
  for (const rate of [0, 0.05, 0.5, 1, 3, 10]) {
    const r = M.evaluate('poisson-distribution', { rate });
    close(sum(r.rows.map(row => row.probability)) + r.remaining, 1);
    assert.equal(r.mean, rate);
    assert.equal(r.variance, rate);
    for (let k = 1; k <= 20; k++)
      close(r.rows[k].probability * k, r.rows[k - 1].probability * rate);
    if (rate > 0) assert.ok(r.remaining > 0);
  }
  const rare = M.evaluate('poisson-distribution', { rate: 0.05 });
  assert.ok(
    rare.remaining < 1e-40 && rare.remaining > 0,
    'tail is accumulated directly rather than lost in 1−CDF cancellation'
  );
  close(M.evaluate('poisson-distribution', { rate: 2, count: 0 }).output, Math.exp(-2));
  assert.equal(M.evaluate('poisson-distribution', { rate: 0, count: 0 }).output, 1);
  assert.equal(M.evaluate('poisson-distribution', { rate: 0, count: 1 }).output, 0);
});

test('strict inputs reject unsupported objects, unknown keys, coercion and fractional counts', () => {
  for (const slug of slugs) {
    for (const p of [null, [], 5, 'state', true, { unknown: 1 }]) {
      const r = M.evaluate(slug, p);
      assert.equal(r.valid, false);
      assert.equal(r.status, 'invalid_parameters');
      assert.equal(r.output, null);
    }
    for (const c of M.controls(slug)) {
      for (const value of [
        NaN,
        Infinity,
        -Infinity,
        null,
        true,
        String(M.defaults(slug)[c.key]),
        c.min - 1,
        c.max + 1,
        ...(c.discrete ? [c.min + 0.5] : [])
      ])
        assert.equal(
          M.evaluate(slug, { [c.key]: value }).valid,
          false,
          slug + ' ' + c.key + ' ' + value
        );
    }
    const p = M.defaults(slug),
      before = JSON.stringify(p);
    M.evaluate(slug, p);
    M.render(slug, p, { compact: true });
    assert.equal(JSON.stringify(p), before);
  }
  assert.equal(M.curveValue('missing', {}, 1), null);
  assert.equal(M.curveValue('binomial-distribution', {}, NaN), null);
});

test('subnormal probabilities and lost response variation have explicit precision states', () => {
  for (const [slug, p] of [
    ['binomial-distribution', { chance: 1e-300, trials: 20 }],
    ['poisson-distribution', { rate: 1e-300 }],
    ['confidence-interval', { trueChance: 1e-300 }],
    ['correlation', { trend: 1e-300, scatter: 0 }]
  ]) {
    const r = M.evaluate(slug, p);
    assert.equal(r.status, 'numeric_precision');
    assert.equal(r.valid, false);
    assert.equal(r.output, null);
  }
});

test('probability geometry uses the same fixed probability scale and tail selection as evaluation', () => {
  for (const compact of [true, false])
    for (const slug of [
      'sampling-distribution',
      'hypothesis-test',
      'binomial-distribution',
      'poisson-distribution'
    ]) {
      const r = M.evaluate(slug),
        html = M.render(slug, {}, { compact, sceneControl: false }),
        bars = roles(html, 'probability-mass');
      assert.equal(bars.length, r.rows.length);
      bars.forEach((bar, i) => {
        assert.equal(Number(bar['data-probability']), r.rows[i].probability);
        close(Number(bar.height), 149 * r.rows[i].probability, 1e-5);
      });
    }
});

test('interval, residual, count and relative-entropy marks carry actual computed values', () => {
  for (const compact of [true, false]) {
    const c = M.evaluate('confidence-interval', { trueChance: 0.3, observed: 2 }),
      segments = roles(
        M.render('confidence-interval', c.parameters, { compact, sceneControl: false }),
        'confidence-interval'
      );
    segments.forEach((mark, i) => {
      close(Number(mark['data-low']), c.rows[i].low);
      close(Number(mark['data-high']), c.rows[i].high);
      assert.equal(mark['data-covered'], String(c.rows[i].covered));
    });
    const r = M.evaluate('linear-regression'),
      marks = roles(
        M.render('linear-regression', {}, { compact, sceneControl: false }),
        'residual'
      );
    marks.forEach((m, i) => close(Number(m['data-value']), r.rows[i].residual));
    for (const slug of ['chi-square-association', 'factorial-interaction']) {
      const r = M.evaluate(slug),
        cells = roles(M.render(slug, {}, { compact, sceneControl: false }), 'cell-value');
      assert.deepEqual(
        cells.map(m => Number(m['data-value'])),
        r.cells
      );
    }
    const kl = M.evaluate('relative-entropy'),
      html = M.render('relative-entropy', {}, { compact, sceneControl: false });
    assert.deepEqual(
      roles(html, 'model-mass').map(x => Number(x['data-probability'])),
      kl.rows.map(r => r.probability)
    );
    assert.deepEqual(
      roles(html, 'forecast-mass').map(x => Number(x['data-probability'])),
      kl.rows.map(r => r.forecast)
    );
  }
});

test('Graph gives distinct residual, interaction, weighted-coverage and discrete representations', () => {
  const residual = graph('linear-regression', {});
  assert.equal(residual.current.length, 5);
  residual.current.forEach((point, i) =>
    close(point.y, M.evaluate('linear-regression').rows[i].residual)
  );
  const interaction = graph('factorial-interaction', { combined: 7 });
  assert.equal(interaction.series.length, 2);
  assert.equal(
    interaction.series[0].points[1].y - interaction.series[0].points[0].y,
    interaction.series[1].points[1].y - interaction.series[1].points[0].y
  );
  const coverage = graph('confidence-interval', {});
  assert.equal(coverage.current.length, 9);
  assert.equal(coverage.series.length, 0);
  for (const slug of ['sampling-distribution', 'hypothesis-test', 'chi-square-association']) {
    const g = graph(slug, {});
    assert.ok(g.current.every(point => Number.isInteger(point.x)));
    assert.ok(!g.series.some(s => s.id === 'response'));
  }
  const kl = graph('relative-entropy', {});
  assert.equal(kl.series[0].points[0].y, null);
  assert.equal(kl.series[0].points.at(-1).y, null);
});

test('scoped accessible scenes never create their own controls when host controls are present', () => {
  for (const slug of slugs)
    for (const view of ['geometry', 'graph']) {
      const a = M.render(slug, {}, { view, compact: true, id: 'slot:a', sceneControl: false }),
        b = M.render(slug, {}, { view, compact: true, id: 'slot_a', sceneControl: false }),
        ids = [...a.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id),
        other = [...b.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
      assert.ok(ids.length >= 2);
      assert.equal(ids.length, new Set(ids).size);
      assert.ok(ids.every(id => !other.includes(id)));
      assert.match(a, /aria-labelledby=/);
      assert.doesNotMatch(a, /NaN|Infinity|role="slider"|data-drag-param/);
      assert.match(M.render(slug, { unknown: 1 }), /Choose valid inputs/);
    }
  assert.equal(M.render('unknown', {}), '');
});

test('every authored grammar symbol binds to a real default scene mark', () => {
  for (const slug of slugs) {
    const card = JSON.parse(
        fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
      ),
      html =
        M.render(slug, {}, { sceneControl: false }) +
        M.render(slug, {}, { view: 'graph', sceneControl: false }),
      keys = new Set(
        [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, key]) => key.split(/\s+/))
      );
    for (const s of card.grammar.symbols) {
      assert.ok(Bindings[slug][s.token]?.length, slug + ' ' + s.token);
      for (const key of Bindings[slug][s.token])
        assert.ok(keys.has(key), slug + ' ' + s.token + ' missing mark ' + key);
    }
  }
});

test('connected stories use one controlled timeline and only actual computed template quantities', () => {
  for (const slug of slugs) {
    const story = Stories.forSlug(slug),
      r = M.evaluate(slug, story.parameters),
      keys = new Set([...Object.keys(r), ...Object.keys(r.parameters)]);
    assert.ok(r.valid);
    assert.equal(story.steps.length, 4);
    assert.equal(story.calculation.length, 3);
    assert.equal(story.variables[0].key, story.timeline.key);
    assert.equal(story.timeline.durationMs, 16000);
    for (const c of story.steps.concat(story.calculation))
      for (const template of [c.body, c.formula, c.template].filter(Boolean))
        for (const [, key] of template.matchAll(/\{\{([A-Za-z0-9]+)\}\}/g)) {
          assert.ok(keys.has(key), slug + ' missing ' + key);
          assert.ok(Stories.quantityFor(slug, key), slug + ' unexplained ' + key);
        }
    assert.equal(Stories.linksFor(slug).variableKey, story.timeline.key);
  }
});

test('new reference entries retain source links, contextual symbols and canonical card links', () => {
  assert.equal(Terms.entries.length, 35);
  assert.equal(new Set(Terms.entries.map(t => t.id)).size, 35);
  for (const term of Terms.entries) {
    assert.ok(term.definition);
    assert.ok(term.symbols.length > 0);
    assert.ok(term.grammarCards.every(s => slugs.includes(s)));
    assert.ok(term.sourceKeys.every(key => Terms.sources[key]?.url.startsWith('https://')));
  }
  for (const slug of slugs) {
    assert.ok(Terms.entries.find(t => t.id === slug));
    assert.ok(Object.isFrozen(Bindings[slug]));
  }
});

test('pinned graphs keep the earlier parameter family and every geometry names its retained reading', () => {
  for (const slug of slugs) {
    const p = M.defaults(slug),
      b = { ...p };
    const controls = M.controls(slug);
    for (const c of controls)
      b[c.key] = c.min + (c.discrete ? Math.floor((c.max - c.min) / 3) : (c.max - c.min) / 3);
    if (slug === 'correlation') {
      b.trend = -1;
      b.scatter = 0.25;
    }
    const result = M.evaluate(slug, b);
    assert.equal(result.valid, true);
    const html = M.render(slug, p, { compact: true, sceneControl: false, baseline: b });
    assert.match(html, /Pinned:/);
    const mark = roles(html, 'pinned-output')[0];
    close(Number(mark['data-value']), result.output);
    const g = graph(slug, p, { baseline: b });
    assert.match(g.description, /pinned/);
    if (['confidence-interval', 'linear-regression', 'factorial-interaction'].includes(slug)) {
      assert.ok(g.current.some(point => point.label.startsWith('Pinned')));
    } else {
      const curve = g.series.find(s => s.id === 'baseline-curve');
      assert.ok(curve);
      for (const point of curve.points) {
        const expected = M.curveValue(slug, b, point.x);
        if (expected === null) assert.equal(point.y, null);
        else close(point.y, expected);
      }
      assert.equal(
        Boolean(curve.dots),
        Boolean(controls.find(c => c.key === M.specs(slug).axis).discrete)
      );
    }
  }
});

test('topic-specific previews retain discrete probabilities, interval coverage and actual paired readings', () => {
  assert.deepEqual(Previews.list(), slugs);
  for (const slug of slugs) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      body = Previews.draw(slug, p, r);
    assert.ok(body);
    assert.ok(Previews.describe(slug, p, r));
    const labels = [...body.matchAll(/<text\b([^>]*)>(.*?)<\/text>/g)].map(
      ([, attributes, text]) => ({ ...attrs(attributes), text })
    );
    assert.equal(labels.filter(l => Number(l.y) === 216).length, 1);
    assert.ok(labels.every(l => Number(l['font-size']) >= 13));
    assert.ok(labels.every(l => Number(l.y) <= 188 || Number(l.y) === 216));
    assert.doesNotMatch(body, /NaN|Infinity|requestAnimationFrame/);
    if (
      [
        'sampling-distribution',
        'hypothesis-test',
        'binomial-distribution',
        'poisson-distribution'
      ].includes(slug)
    )
      assert.deepEqual(
        roles(body, 'preview-probability').map(a => Number(a['data-probability'])),
        r.rows.map(row => row.probability)
      );
    if (slug === 'confidence-interval') assert.equal(roles(body, 'preview-interval').length, 9);
    if (slug === 'linear-regression' || slug === 'correlation')
      assert.deepEqual(
        roles(body, 'preview-observation').map(a => Number(a['data-y'])),
        r.rows.map(row => row.y)
      );
  }
  assert.equal(Previews.draw('missing', {}, {}), '');
});
