import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/number-extensions.js');
const python = (program, input) =>
  JSON.parse(
    execFileSync('python', ['-X', 'utf8', '-c', program], {
      input: JSON.stringify(input),
      encoding: 'utf8'
    })
  );
const references = cases =>
  python(
    'import json,sys;sys.path.insert(0,"tools");from number_extension_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))',
    cases
  );
const attributes = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const near = (actual, expected) =>
  assert.ok(Math.abs(actual - expected) < 1e-4, `${actual} ≈ ${expected}`);

test('all 64 positive interval pairs agree with independent first-reunion search and real schedule intersection', () => {
  const cases = [];
  for (let first = 1; first <= 8; first++)
    for (let second = 1; second <= 8; second++)
      cases.push({ slug: 'least-common-multiple', input: { first, second } });
  const oracle = references(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input),
      expected = oracle[i];
    assert.equal(r.valid, true);
    for (const key of Object.keys(expected))
      assert.deepEqual(r[key], expected[key], key + ' ' + JSON.stringify(c.input));
    assert.equal(r.output * r.gcd, r.product);
    assert.equal(r.firstCycles * c.input.first, r.output);
    assert.equal(r.secondCycles * c.input.second, r.output);
    assert.deepEqual(
      r.sharedTimes,
      r.firstTimes.filter(time => r.secondTimes.includes(time))
    );
    assert.deepEqual(r.sharedTimes.slice(0, 2), [0, r.output]);
    assert.ok(r.output <= 56);
    for (let earlier = 1; earlier < r.output; earlier++)
      assert.ok(earlier % c.input.first !== 0 || earlier % c.input.second !== 0);
  });
  assert.equal(M.evaluate('least-common-multiple', { first: 7, second: 8 }).output, 56);
  assert.equal(M.evaluate('least-common-multiple', { first: 8, second: 8 }).output, 8);
});

test('all 60 divisor sums agree with independent factor pairs, including one, primes, squares and both perfect numbers', () => {
  const cases = Array.from({ length: 60 }, (_, i) => ({
      slug: 'perfect-number',
      input: { number: i + 1 }
    })),
    oracle = references(cases),
    perfect = [];
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const key of Object.keys(oracle[i]))
      assert.deepEqual(r[key], oracle[i][key], key + ' for ' + c.input.number);
    assert.ok(r.divisors.every(d => d > 0 && d < c.input.number && c.input.number % d === 0));
    assert.equal(new Set(r.divisors).size, r.divisorCount);
    assert.equal(
      r.divisors.reduce((sum, d) => sum + d, 0),
      r.output
    );
    assert.equal(r.balance, r.output - c.input.number);
    assert.ok(r.output >= 0 && r.output <= 120);
    if (r.classification === 'perfect') perfect.push(c.input.number);
  });
  assert.deepEqual(perfect, [6, 28]);
  assert.deepEqual(M.evaluate('perfect-number', { number: 1 }).divisors, []);
  assert.equal(M.evaluate('perfect-number', { number: 1 }).output, 0);
  assert.equal(M.evaluate('perfect-number', { number: 59 }).output, 1);
  assert.deepEqual(M.evaluate('perfect-number', { number: 49 }).divisors, [1, 7]);
  assert.equal(M.evaluate('perfect-number', { number: 60 }).output, 108);
});

test('strict integer domains, isolated caller state and explicit interpolation guards retain the provider contract', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('provider timer'),
    requestAnimationFrame: () => assert.fail('provider clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/number-extensions.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasNumberExtensions);
  assert.ok(Object.isFrozen(M.ids));
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      original = structuredClone(p),
      axis = M.specs(slug).axis;
    assert.equal(M.evaluate(slug, {}).valid, true);
    for (const bad of [
      null,
      [],
      { ...p, extra: 1 },
      { ...p, [axis]: true },
      { ...p, [axis]: '2' },
      { ...p, [axis]: 1.5 },
      { ...p, [axis]: 0 },
      { ...p, [axis]: NaN },
      { ...p, [axis]: Infinity }
    ]) {
      assert.equal(M.evaluate(slug, bad).valid, false);
      assert.equal(M.evaluate(slug, bad).output, null);
    }
    assert.equal(M.canInterpolate(slug, p, { ...p }), true);
    assert.equal(M.canInterpolate(slug, p, { ...p, [axis]: p[axis] + 1 }), false);
    assert.equal(M.curveValue(slug, p, 1.5), null);
    assert.equal(M.specs(slug).canInterpolate(p, { ...p, [axis]: p[axis] + 1 }), false);
    M.controls(slug)[0].min = -100;
    assert.equal(M.controls(slug)[0].min, 1);
    const result = M.evaluate(slug, p);
    if (result.divisors) result.divisors.push(999);
    else result.firstTimes.push(999);
    M.render(slug, p);
    assert.deepEqual(p, original);
    assert.ok(
      !Object.values(M.evaluate(slug, p)).some(value => Array.isArray(value) && value.includes(999))
    );
  }
  assert.equal(M.has('toString'), false);
  assert.equal(M.evaluate('unknown', {}).valid, false);
  assert.equal(M.render('unknown', {}), '');
});

test('scenes preserve fixed quantitative scales, explicit empty divisors, distinct positive reunion and discrete graph dots', () => {
  const documents = [];
  for (const compact of [false, true])
    for (const slug of M.ids)
      for (const view of ['geometry', 'graph']) {
        const p = M.defaults(slug),
          html = M.render(slug, p, { compact, view, id: slug + '/slot-a', baseline: p });
        assert.doesNotMatch(html, /NaN|Infinity|="[^"]*undefined/);
        documents.push(html.match(/<svg\b[\s\S]*?<\/svg>/)[0]);
        if (view === 'graph') {
          assert.doesNotMatch(html, /<path data-series="result"/);
          assert.equal(
            (html.match(/data-role="sample-point"/g) || []).length,
            slug === 'least-common-multiple' ? 8 : 60
          );
        } else
          for (const part of ['input', 'intermediate', 'output', 'reference'])
            assert.match(html, new RegExp('data-story-part="' + part + '"'));
      }
  python(
    'import json,sys,xml.etree.ElementTree as E;[E.fromstring(s) for s in json.load(sys.stdin)];print("true")',
    documents
  );
  for (const number of [1, 6, 28, 60])
    for (const compact of [false, true]) {
      const r = M.evaluate('perfect-number', { number }),
        html = M.render('perfect-number', { number }, { compact }),
        span = compact ? 288 : 620;
      const segments = [
        ...html.matchAll(/<rect\b[^>]*data-role="divisor-contribution"[^>]*>/g)
      ].map(match => attributes(match[0]));
      assert.deepEqual(
        segments.map(segment => Number(segment['data-divisor'])),
        r.divisors
      );
      for (const segment of segments)
        near(Number(segment.width), (Number(segment['data-value']) / 120) * span);
      near(
        segments.reduce((sum, segment) => sum + Number(segment.width), 0),
        (r.divisorSum / 120) * span
      );
      const order = attributes(html.match(/<rect\b[^>]*data-role="order-bar"[^>]*>/)[0]);
      near(Number(order.width), (number / 120) * span);
      if (number === 1)
        assert.match(html, /data-quantity="divisors number"[^>]*>[\s\S]*D = ∅ · empty sum = 0/);
    }
  const reunion = M.render('least-common-multiple', { first: 7, second: 8 }, { compact: true });
  assert.equal((reunion.match(/data-role="first-positive-reunion"/g) || []).length, 1);
  assert.match(reunion, /data-role="first-positive-reunion" data-time="56"/);
  assert.equal((reunion.match(/data-role="shared-start" data-time="0"/g) || []).length, 3);
  const dense = M.render('least-common-multiple', { first: 1, second: 1 }, { compact: true }),
    zero = attributes(dense.match(/<circle\b[^>]*data-role="shared-start" data-time="0"[^>]*>/)[0]),
    positive = attributes(
      dense.match(/<circle\b[^>]*data-role="first-positive-reunion" data-time="1"[^>]*>/)[0]
    );
  assert.ok(Number(positive.cx) - Number(zero.cx) > Number(positive.r) + Number(zero.r));
  assert.match(dense, /separate arrow when it is close to zero/);
  const invalid = M.render('perfect-number', { number: 1.5 });
  assert.doesNotMatch(invalid, /data-role="divisor-contribution"|data-role="order-bar"/);
});

test('canonical number fixtures agree with both the installed provider and independent oracle', () => {
  const cases = M.ids.flatMap(slug =>
      JSON.parse(
        fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
      ).interactive.expected_cases.map(c => ({ slug, ...c }))
    ),
    oracle = references(cases);
  cases.forEach((c, i) => {
    const result = M.evaluate(c.slug, c.input);
    assert.equal(result.status, c.status || 'valid');
    assert.equal(oracle[i].status, c.status || 'valid');
    if (result.valid) {
      assert.equal(result.output, c.output);
      assert.equal(result.output, oracle[i].output);
    }
  });
});
