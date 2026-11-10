import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/design-extensions.js');
const near = (actual, expected, tolerance = 3e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const python = (program, input) =>
  JSON.parse(
    execFileSync('python', ['-c', program], {
      input: JSON.stringify(input),
      encoding: 'utf8'
    })
  );

test('all bounded chi-square quantiles agree with independent positive-series inversion', () => {
  const oracle = python(
    'import json,sys;sys.path.insert(0,"tools");from design_extension_reference import chi_square_critical;print(json.dumps([[chi_square_critical(d,.025),chi_square_critical(d,.975)] for d in range(5,31)]))'
  );
  assert.equal(M.criticalValues.length, 26);
  assert.ok(Object.isFrozen(M.criticalValues) && M.criticalValues.every(Object.isFrozen));
  M.criticalValues.forEach((pair, i) => {
    pair.forEach((value, j) => near(value, oracle[i][j]));
    assert.ok(pair[0] > 0 && pair[0] < pair[1]);
    if (i) assert.ok(pair[0] > M.criticalValues[i - 1][0] && pair[1] > M.criticalValues[i - 1][1]);
  });
  // Independent published NIST three-decimal spot checks do not become the
  // arithmetic constants used to calculate endpoints.
  near(M.criticalValues[0][1], 12.833, 5e-5);
  near(M.criticalValues[25][1], 46.979, 1e-5);
});

test('covariance follows actual centered pairs, signs and sample denominator under shape changes', () => {
  for (const trend of [-2, -0.7, 0, 0.05, 1, 2])
    for (const scatter of [0, 0.5, 2]) {
      const p = { trend, scatter },
        r = M.evaluate('covariance', p);
      assert.equal(r.valid, true);
      assert.equal(r.count, 5);
      assert.equal(r.degreesFreedom, 4);
      assert.deepEqual(r.xValues, [1, 2, 3, 4, 5]);
      near(r.yValues.reduce((a, b) => a + b, 0) / 5, r.meanY);
      const products = r.xValues.map((x, i) => (x - r.meanX) * (r.yValues[i] - r.meanY));
      products.forEach((value, i) => near(value, r.products[i]));
      near(
        products.reduce((a, b) => a + b, 0),
        r.sumProducts
      );
      near(r.output, r.sumProducts / 4);
      near(r.output, 2.5 * trend);
      near(r.covariance, r.output);
      assert.deepEqual(
        r.rows.map(row => row.position),
        [1, 2, 3, 4, 5]
      );
      assert.ok(r.yValues.every(y => y >= 2 && y <= 18));
    }
  assert.notDeepEqual(
    M.evaluate('covariance', { trend: 1, scatter: 0 }).yValues,
    M.evaluate('covariance', { trend: 1, scatter: 2 }).yValues
  );
  for (const scatter of [0, 0.5, 2]) {
    assert.equal(
      M.evaluate('covariance', { trend: Number.MIN_VALUE, scatter }).status,
      'numeric_precision'
    );
    assert.equal(M.evaluate('covariance', { trend: 0, scatter }).output, 0);
  }
});

test('normal-variance intervals invert opposite quantiles and distinguish variance from spread units', () => {
  for (const sampleSize of [6, 10, 16, 31])
    for (const sampleSpread of [0.25, 1, 2]) {
      const r = M.evaluate('normal-variance-interval', { sampleSize, sampleSpread });
      assert.equal(r.valid, true);
      assert.equal(r.degreesFreedom, sampleSize - 1);
      near(r.scale, (sampleSize - 1) * sampleSpread ** 2);
      near(r.lowerVariance, r.scale / r.criticalHigh);
      near(r.output, r.scale / r.criticalLow);
      assert.equal(r.upperVariance, r.output);
      assert.deepEqual(r.interval, [r.lowerVariance, r.upperVariance]);
      near(r.width, r.upperVariance - r.lowerVariance);
      near(r.lowerSpread ** 2, r.lowerVariance);
      near(r.upperSpread ** 2, r.upperVariance);
      assert.ok(r.lowerVariance < sampleSpread ** 2 && r.upperVariance > sampleSpread ** 2);
      assert.ok(r.upperVariance <= 25);
      const doubled = M.evaluate('normal-variance-interval', {
        sampleSize,
        sampleSpread: sampleSpread === 2 ? 1 : sampleSpread * 2
      });
      near(doubled.output / r.output, sampleSpread === 2 ? 0.25 : 4);
    }
  const values = Array.from(
    { length: 26 },
    (_, i) => M.evaluate('normal-variance-interval', { sampleSize: i + 6, sampleSpread: 1 }).output
  );
  for (let i = 1; i < values.length; i++) assert.ok(values[i] < values[i - 1]);
});

test('known-spread power agrees with NormalDist and preserves boundary-null non-rejection', () => {
  const inputs = [];
  for (const perGroup of [2, 16, 64])
    for (const effect of [0, 0.1, 0.5, 2])
      for (const sigma of [0.25, 1, 2]) inputs.push({ perGroup, effect, sigma });
  const expected = python(
    'import json,math,sys;from statistics import NormalDist;N=NormalDist();print(json.dumps([N.cdf(p["effect"]/(p["sigma"]*math.sqrt(2/p["perGroup"]))-N.inv_cdf(.95)) for p in json.load(sys.stdin)]))',
    inputs
  );
  inputs.forEach((p, i) => {
    const r = M.evaluate('normal-test-power', p);
    assert.equal(r.valid, true);
    near(r.output, expected[i]);
    near(r.output + r.beta, 1);
    near(r.standardError, p.sigma * Math.sqrt(2 / p.perGroup));
    near(r.threshold, r.criticalValue * r.standardError);
    near(r.standardizedEffect, p.effect / r.standardError);
    near(r.effectZ, r.standardizedEffect - r.criticalValue);
    assert.equal(r.totalCount, 2 * p.perGroup);
    assert.equal(r.totalReadings, r.totalCount);
    assert.equal(r.alternativeMean, p.effect);
    assert.equal(r.nullMean, 0);
    if (p.effect === 0) {
      near(r.output, 0.05);
      near(r.beta, 0.95);
      assert.match(M.specs('normal-test-power').readout(p, r).stats[1].note, /null non-rejection/);
    }
    assert.ok(r.output >= 0 && r.output <= 1 && r.beta >= 0 && r.beta <= 1);
  });
  const power = n => M.evaluate('normal-test-power', { perGroup: n, effect: 0.5, sigma: 1 }).output;
  for (let n = 3; n <= 64; n++) assert.ok(power(n) > power(n - 1));
  const low = M.evaluate('normal-test-power', { perGroup: 16, effect: 0.5, sigma: 0.5 });
  const high = M.evaluate('normal-test-power', { perGroup: 16, effect: 0.5, sigma: 2 });
  assert.ok(low.output > high.output);
  assert.match(M.specs('normal-test-power').limits, /may round to one/);
});

test('models reject coercion and unknown inputs, preserve callers and stop interpolating discrete counts', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p),
      key = Object.keys(p)[0];
    for (const bad of [
      null,
      [],
      { ...p, unknown: 1 },
      { ...p, [key]: '1' },
      { ...p, [key]: true },
      { ...p, [key]: NaN },
      { ...p, [key]: Infinity }
    ])
      assert.equal(M.validateParams(slug, bad).valid, false);
    M.evaluate(slug, p);
    M.render(slug, p);
    assert.deepEqual(p, before);
    assert.equal(M.canInterpolate(slug, p, { ...p }), true);
    const c = M.controls(slug)[0];
    for (const value of [c.min, c.max, p[c.key]])
      near(M.curveValue(slug, p, value), M.evaluate(slug, { ...p, [c.key]: value }).output);
    assert.equal(M.curveValue(slug, p, c.max + 1), null);
  }
  assert.equal(M.validateParams('normal-variance-interval', { sampleSize: 6.5 }).valid, false);
  assert.equal(M.validateParams('normal-test-power', { perGroup: 2.5 }).valid, false);
  for (const [slug, key, value] of [
    ['normal-variance-interval', 'sampleSize', 11],
    ['normal-test-power', 'perGroup', 17]
  ]) {
    const p = M.defaults(slug);
    assert.equal(M.canInterpolate(slug, p, { ...p, [key]: value }), false);
  }
  assert.equal(M.has('__proto__'), false);
  assert.throws(() => M.defaults('__proto__'), /Unknown/);
});

test('actual geometry/graph and pin fragments remain finite strict SVG with actual story-stage marks', () => {
  const fragments = [];
  for (const slug of M.ids)
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const p = M.defaults(slug),
          html = M.render(slug, p, {
            compact,
            view,
            id: slug + '-' + compact + '-' + view,
            baseline: p
          });
        assert.doesNotMatch(html, /NaN|Infinity|="[^"]*undefined/);
        assert.match(html, /data-quantity="[^"]*output/);
        if (view === 'geometry')
          for (const role of ['input', 'intermediate', 'output'])
            assert.match(html, new RegExp('data-story-part="' + role + '"'));
        fragments.push(html.match(/<svg\b[\s\S]*?<\/svg>/)[0]);
      }
  python(
    'import json,sys,xml.etree.ElementTree as E;[E.fromstring(s) for s in json.load(sys.stdin)];print("true")',
    fragments
  );
  for (const slug of ['normal-variance-interval', 'normal-test-power']) {
    const html = M.render(slug, M.defaults(slug), { view: 'graph' });
    assert.match(html, /data-role="sample-point"/);
    assert.doesNotMatch(html, /<path data-series="result"/);
  }
  const power = M.render('normal-test-power', M.defaults('normal-test-power'), { compact: true });
  assert.match(power, /right-tail probability curves, not density curves/);
  assert.match(power, /curve height is the full probability/);
});

test('narrow power curves include actual cutoff intersections and their halfway points', () => {
  for (const compact of [false, true])
    for (const effect of [0, 0.5, 2]) {
      const p = { perGroup: 64, effect, sigma: 0.25 },
        r = M.evaluate('normal-test-power', p),
        html = M.render('normal-test-power', p, { compact }),
        width = compact ? 360 : 760,
        left = compact ? 42 : 80,
        right = width - left,
        px = x => left + ((x + 6) / 12) * (right - left),
        py = y => 286 - y * 169;
      for (const [curve, chance, mean] of [
        ['boundary-null', r.alpha, 0],
        ['assumed-effect', r.power, effect]
      ]) {
        const path = html.match(new RegExp('data-curve="' + curve + '" d="([^"]+)"'))[1],
          points = [...path.matchAll(/[ML]([\d.]+) ([\d.]+)/g)].map(([, x, y]) => [
            Number(x),
            Number(y)
          ]);
        assert.ok(
          points.some(
            ([x, y]) => Math.abs(x - px(r.threshold)) < 1e-5 && Math.abs(y - py(chance)) < 1e-5
          ),
          curve + ' has the exact cutoff point'
        );
        assert.ok(
          points.some(([x, y]) => Math.abs(x - px(mean)) < 1e-5 && Math.abs(y - py(0.5)) < 1e-5),
          curve + ' retains its halfway point'
        );
        const close = points.filter(
          ([x]) => Math.abs(x - px(mean)) < ((right - left) / 12) * r.standardError
        );
        assert.ok(close.length >= 7, 'The local one-standard-error window stays resolved');
      }
    }
});

test('every authored numeric case agrees with runtime and independent reference', () => {
  const records = M.ids.flatMap(slug => {
    const path = new URL('../content/cards/' + slug + '.json', import.meta.url);
    if (!fs.existsSync(path)) return [];
    const card = JSON.parse(fs.readFileSync(path, 'utf8'));
    return card.interactive.expected_cases.map(c => ({ slug, ...c }));
  });
  assert.ok(
    records.length >= 30,
    'Canonical cards must supply distinct arithmetic and invalid-domain fixtures.'
  );
  const refs = python(
    'import json,sys;sys.path.insert(0,"tools");from design_extension_reference import compute;print(json.dumps([compute(r["slug"]+"-visual-model",r["input"]) for r in json.load(sys.stdin)]))',
    records
  );
  records.forEach((c, i) => {
    const actual = M.evaluate(c.slug, c.input),
      expected = refs[i];
    assert.equal(actual.status, c.status || 'valid', c.slug + ' ' + JSON.stringify(c.input));
    assert.equal(expected.status, c.status || 'valid', c.slug + ' reference');
    if (actual.status === 'valid') {
      near(actual.output, c.output);
      near(actual.output, expected.output);
    }
  });
});
