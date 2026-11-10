/* Independent boundary and representation review of the new probability family. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/distribution-extensions.js');
const close = (a, b, tolerance = 1e-12) =>
  assert.ok(Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)), `${a} should agree with ${b}`);

test('waiting-time boundaries distinguish exact zero, rejected negatives and underflowed positive probability', () => {
  assert.equal(
    M.evaluate('exponential-distribution', { time: -Number.MIN_VALUE, rate: 0.25 }).status,
    'invalid_parameters'
  );
  const zero = M.evaluate('exponential-distribution', { time: 0, rate: 0.25 });
  assert.equal(zero.valid, true);
  assert.equal(zero.output, 0);
  assert.equal(zero.survival, 1);
  for (const rate of [0.25, 0.5]) {
    const tiny = M.evaluate('exponential-distribution', { time: Number.MIN_VALUE, rate });
    assert.equal(
      tiny.valid,
      false,
      'a positive accepted wait cannot silently become a zero exponent'
    );
    assert.equal(tiny.status, 'numeric_precision');
    assert.equal(tiny.output, null);
    assert.equal(
      M.curveValue('exponential-distribution', { time: 1, rate }, Number.MIN_VALUE),
      null
    );
  }
  for (const rate of [1, 2]) {
    const tiny = M.evaluate('exponential-distribution', { time: Number.MIN_VALUE, rate });
    assert.equal(tiny.valid, true);
    assert.equal(tiny.output, Number.MIN_VALUE * rate);
    assert.ok(tiny.output > 0);
  }
});

test('normal full cumulative probability stays distinct from density height and window area', () => {
  const p = { threshold: -6, mean: -2, sigma: 2 },
    r = M.evaluate('normal-distribution', p);
  const oracle = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,math;cdf=lambda x:.5*math.erfc(-(x+2)/(2*math.sqrt(2)));print(json.dumps({"full":cdf(-6),"window":cdf(10)-cdf(-10),"visible":cdf(-6)-cdf(-10)}))'
      ],
      { encoding: 'utf8' }
    )
  );
  close(r.output, oracle.full, 2e-14);
  close(r.windowMass, oracle.window, 2e-14);
  assert.ok(r.output > oracle.visible + 3e-5, 'the left omitted tail remains in the full CDF');
  assert.ok(r.windowMass < 1, 'the displayed density window is not renormalized');
  assert.notEqual(r.output, r.density, 'probability is not the current height per millimetre');
  const narrow = M.evaluate('normal-distribution', { threshold: 0, mean: 0, sigma: 0.25 });
  assert.equal(narrow.output, 0.5);
  assert.ok(narrow.density > 1, 'a density can exceed one while its cumulative probability cannot');
  const svg = M.render('normal-distribution', p, { compact: true });
  assert.match(svg, /strip uses the full CDF without renormalizing tails/);
  assert.match(svg, /Density · per mm/);
});

test('paired signs condition on exact nonzero pairs and never replace all ties with a p-value', () => {
  const cases = [
    { shift: 0, n: 5, positives: 3, tail: 16 / 32 },
    { shift: 1, n: 5, positives: 4, tail: 6 / 32 },
    { shift: 2, n: 5, positives: 5, tail: 1 / 32 },
    { shift: 3, n: 6, positives: 6, tail: 1 / 64 },
    { shift: -3, n: 5, positives: 0, tail: 1 }
  ];
  for (const { shift, n, positives, tail } of cases) {
    const r = M.evaluate('sign-test', { shift, pattern: 'varied' });
    assert.equal(r.valid, true);
    assert.equal(r.n, n);
    assert.equal(r.positive, positives);
    assert.equal(r.ties, 6 - n);
    assert.equal(r.output, tail);
    assert.equal(r.denominator, 2 ** n);
  }
  const allTied = M.evaluate('sign-test', { shift: 0, pattern: 'matched' });
  assert.equal(allTied.status, 'no_nonzero_pairs');
  assert.equal(allTied.output, null);
  assert.equal(allTied.n, 0);
  const lostChange = M.evaluate('sign-test', { shift: 2 ** -50, pattern: 'matched' });
  assert.equal(lostChange.status, 'numeric_precision');
  assert.equal(lostChange.output, null);
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: -0.25, pattern: 'varied' },
      { shift: 0.25, pattern: 'varied' }
    ),
    false
  );
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 0.2, pattern: 'varied' },
      { shift: 0.8, pattern: 'varied' }
    ),
    true
  );
  assert.equal(
    M.canInterpolate(
      'sign-test',
      { shift: 0.2, pattern: 'varied' },
      { shift: 0.8, pattern: 'matched' }
    ),
    false
  );
});

test('probability graphs pin the actual previous distribution rather than recomputing it in the current family', () => {
  const context = vm.createContext({ AtlasPlotView: { render: value => value } });
  vm.runInContext(
    fs.readFileSync(new URL('../src/distribution-extensions.js', import.meta.url), 'utf8'),
    context
  );
  const review = context.AtlasDistributionExtensions;
  for (const [id, current, baseline] of [
    [
      'normal-distribution',
      { threshold: 0, mean: 2, sigma: 2 },
      { threshold: 0, mean: -2, sigma: 0.25 }
    ],
    ['exponential-distribution', { time: 2, rate: 0.25 }, { time: 2, rate: 2 }]
  ]) {
    const g = review.render(id, current, { view: 'graph', baseline });
    const pin = g.current.find(point => point.label === 'Pinned probability');
    assert.equal(pin.y, review.evaluate(id, baseline).output);
    assert.notEqual(pin.y, review.evaluate(id, current).output);
    assert.equal(g.y.min, 0);
    assert.equal(g.y.max, 1);
  }
});

test('geometry distinguishes pinned input position from the actual pinned cumulative probability', () => {
  for (const [id, current, baseline, inputLabel] of [
    [
      'normal-distribution',
      { threshold: 0, mean: 2, sigma: 2 },
      { threshold: 0, mean: -2, sigma: 0.25 },
      'Pinned threshold'
    ],
    ['exponential-distribution', { time: 2, rate: 0.25 }, { time: 2, rate: 2 }, 'Pinned time']
  ]) {
    const html = M.render(id, current, { compact: true, baseline });
    assert.ok(html.includes(inputLabel));
    assert.match(html, /data-role="pinned-probability"/);
    const pin = html.match(/<[^>]*data-role="pinned-probability"[^>]*>/)?.[0];
    assert.ok(pin, 'the pinned result has its own quantitative mark on the full probability strip');
    const expectedX = 35 + 290 * M.evaluate(id, baseline).output;
    const firstX = Number(pin.match(/\bx1="([^"]+)"/)?.[1]);
    assert.ok(Number.isFinite(firstX));
    close(firstX, expectedX, 1e-7);
  }
});
