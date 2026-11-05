import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/sampling-extensions.js');
const near = (actual, expected, tolerance = 2e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const python = (program, input) =>
  JSON.parse(
    execFileSync('python', ['-c', program], { input: JSON.stringify(input), encoding: 'utf8' })
  );

test('Student quantiles agree with an independent analytic CDF inversion for every supported degree of freedom', () => {
  const values = python(
    'import json,sys;sys.path.insert(0,"tools");from sampling_extension_reference import student_critical;print(json.dumps([student_critical(df) for df in range(1,31)]))'
  );
  M.criticalValues.forEach((value, i) => near(value, values[i]));
  near(M.criticalValues[0], 1 / Math.tan(Math.PI * 0.025), 1e-13);
  assert.equal(M.criticalValues.length, 30);
  assert.ok(Object.isFrozen(M.criticalValues));
  for (let index = 1; index < M.criticalValues.length; index++)
    assert.ok(M.criticalValues[index] < M.criticalValues[index - 1]);
});

test('Student intervals use estimated spread, n minus one degrees of freedom and translating endpoints', () => {
  for (const sampleSize of [2, 3, 10, 16, 31])
    for (const sampleSpread of [0.25, 1, 2]) {
      const p = { sampleSize, sampleSpread, mean: 0.5 },
        r = M.evaluate('student-mean-interval', p);
      assert.equal(r.valid, true);
      assert.equal(r.degreesFreedom, sampleSize - 1);
      near(r.standardError, sampleSpread / Math.sqrt(sampleSize));
      near(r.output, r.criticalValue * r.standardError);
      near(r.upper - r.lower, 2 * r.output);
      near((r.lower + r.upper) / 2, p.mean);
      assert.deepEqual(r.interval, [r.lower, r.upper]);
      const translated = M.evaluate('student-mean-interval', { ...p, mean: -1.5 });
      assert.equal(translated.output, r.output);
      near(translated.lower, r.lower - 2);
      near(translated.upper, r.upper - 2);
      assert.ok(r.output > 1.959963984540054 * r.standardError);
    }
  const margins = Array.from(
    { length: 30 },
    (_, i) =>
      M.evaluate('student-mean-interval', { sampleSize: i + 2, sampleSpread: 1, mean: 0 }).output
  );
  for (let index = 1; index < margins.length; index++)
    assert.ok(margins[index] < margins[index - 1]);
});

test('all 70 complete assignments are distinct, balanced and paired with their opposite contrast', () => {
  for (const allocation of ['separated', 'alternating', 'mixed'])
    for (const lastValue of [0, 3, 7.25, 8, 10]) {
      const r = M.evaluate('randomization-distribution', { allocation, lastValue });
      assert.equal(r.valid, true);
      assert.equal(r.assignmentCount, 70);
      assert.equal(new Set(r.distribution.map(item => item.aIndices.join(','))).size, 70);
      assert.deepEqual(
        r.randomizedDifferences,
        r.distribution.map(item => item.difference)
      );
      near(r.meanB - r.meanA, r.observedDifference);
      assert.deepEqual(
        r.aMembers,
        r.aIndices.map(index => index + 1)
      );
      assert.deepEqual(
        r.bMembers,
        r.bIndices.map(index => index + 1)
      );
      assert.deepEqual(
        [...r.aMembers, ...r.bMembers].sort((a, b) => a - b),
        [1, 2, 3, 4, 5, 6, 7, 8]
      );
      const lookup = new Map(r.distribution.map(item => [item.aIndices.join(','), item]));
      for (const assignment of r.distribution) {
        assert.equal(assignment.aIndices.length, 4);
        const complement = Array.from({ length: 8 }, (_, i) => i).filter(
          i => !assignment.aIndices.includes(i)
        );
        const opposite = lookup.get(complement.join(','));
        near(opposite.difference, -assignment.difference);
        assert.equal(opposite.inTail, assignment.inTail);
      }
      assert.ok(r.tailCount >= 2 && r.tailCount <= 70 && r.tailCount % 2 === 0);
      assert.equal(r.output, r.tailCount / 70);
      assert.equal(r.pValue, r.output);
    }
  assert.equal(
    M.evaluate('randomization-distribution', { lastValue: 8, allocation: 'separated' }).tailCount,
    2
  );
  assert.equal(
    M.evaluate('randomization-distribution', { lastValue: 8, allocation: 'mixed' }).output,
    1
  );
});

test('randomization tail comparisons retain exact ties and distinguish immediately neighboring scores', () => {
  const cases = ['separated', 'alternating', 'mixed'].flatMap(allocation =>
    [
      0,
      Number.MIN_VALUE,
      1 - Number.EPSILON,
      1,
      1 + Number.EPSILON,
      2 - Number.EPSILON,
      2,
      2 + 2 * Number.EPSILON,
      7.999999999999999,
      8,
      8.000000000000002,
      10
    ].map(lastValue => ({
      model: 'randomization-distribution-visual-model',
      input: { allocation, lastValue }
    }))
  );
  const expected = python(
    'import json,sys;sys.path.insert(0,"tools");from sampling_extension_reference import compute;print(json.dumps([compute(c["model"],c["input"]) for c in json.load(sys.stdin)]))',
    cases
  );
  cases.forEach((c, index) =>
    assert.equal(
      M.evaluate('randomization-distribution', c.input).output,
      expected[index].output,
      JSON.stringify(c.input)
    )
  );
});

test('ANOVA reconstructs all nine readings and splits their corrected sum of squares', () => {
  for (const separation of [0, 0.05, 1, 2, 4])
    for (const spread of [0.25, 0.7, 1, 2]) {
      const p = { separation, spread },
        r = M.evaluate('one-way-anova', p);
      assert.equal(r.valid, true);
      const means = r.groups.map(
        group => group.reduce((sum, value) => sum + value, 0) / group.length
      );
      means.forEach((mean, index) => near(mean, r.groupMeans[index]));
      const grand = r.groups.flat().reduce((sum, value) => sum + value, 0) / 9;
      const between = means.reduce((sum, mean) => sum + 3 * (mean - grand) ** 2, 0);
      const within = r.groups.reduce(
        (sum, group, i) =>
          sum + group.reduce((partial, value) => partial + (value - means[i]) ** 2, 0),
        0
      );
      const total = r.groups.flat().reduce((sum, value) => sum + (value - grand) ** 2, 0);
      near(r.betweenSS, between);
      near(r.withinSS, within);
      near(r.totalSS, total);
      near(r.totalSS, between + within);
      assert.equal(r.betweenDF, 2);
      assert.equal(r.withinDF, 6);
      near(r.output, between / 2 / (within / 6));
      assert.ok(r.pValue > 0 && r.pValue <= 1);
      if (separation === 0) {
        assert.equal(r.output, 0);
        assert.equal(r.pValue, 1);
      }
    }
  assert.equal(M.evaluate('one-way-anova', { separation: 2, spread: 1 }).pValue, 0.008);
  const tiny = M.evaluate('one-way-anova', { separation: Number.MIN_VALUE, spread: 1 });
  assert.equal(tiny.status, 'numeric_precision');
  assert.equal(tiny.output, null);
});

test('all numerical canonical fixtures agree with independent Python references', () => {
  const cards = M.ids.map(slug =>
    JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
    )
  );
  const cases = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => ({ model: card.interactive.model_id, ...c }))
  );
  const values = python(
    'import json,sys;sys.path.insert(0,"tools");from sampling_extension_reference import compute;print(json.dumps([compute(c["model"],c["input"]) for c in json.load(sys.stdin)]))',
    cases
  );
  cases.forEach((c, i) => {
    const r = M.evaluate(c.model.replace(/-visual-model$/, ''), c.input);
    assert.equal(r.status, c.status, c.model + JSON.stringify(c.input));
    assert.equal(values[i].status, c.status, c.model);
    if (c.status === 'valid') {
      near(r.output, c.output);
      near(r.output, values[i].output);
    } else assert.equal(r.output, null);
  });
});

test('validation, interpolation and copied controls preserve finite numeric and discrete assignment semantics', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p);
    for (const bad of [
      null,
      [],
      3,
      'input',
      { ...p, unknown: 2 },
      { ...p, [Object.keys(p)[0]]: true },
      { ...p, [Object.keys(p)[0]]: NaN },
      { ...p, [Object.keys(p)[0]]: Infinity }
    ])
      assert.equal(M.validateParams(slug, bad).valid, false);
    M.evaluate(slug, p);
    M.render(slug, p);
    assert.deepEqual(p, before);
    const control = M.controls(slug)[0];
    for (const value of [control.min, control.max, p[control.key]])
      near(M.curveValue(slug, p, value), M.evaluate(slug, { ...p, [control.key]: value }).output);
    assert.equal(M.curveValue(slug, p, control.max + 1), null);
    assert.equal(M.canInterpolate(slug, p, { ...p }), true);
  }
  assert.equal(M.validateParams('student-mean-interval', { sampleSize: 2.5 }).valid, false);
  assert.equal(
    M.canInterpolate('student-mean-interval', M.defaults('student-mean-interval'), {
      ...M.defaults('student-mean-interval'),
      sampleSize: 11
    }),
    false
  );
  assert.equal(
    M.canInterpolate('randomization-distribution', M.defaults('randomization-distribution'), {
      lastValue: 8,
      allocation: 'mixed'
    }),
    false
  );
  const controls = M.controls('randomization-distribution');
  controls[1].options[0].value = 'changed outside';
  assert.equal(M.controls('randomization-distribution')[1].options[0].value, 'separated');
});

test('actual geometry, compact, pinned and graph fragments retain quantity marks and valid SVG', () => {
  const fragments = [];
  for (const slug of M.ids)
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const p = M.defaults(slug),
          html = M.render(slug, p, {
            compact,
            view,
            id: 'xml-' + slug + '-' + compact + '-' + view,
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
  const overflow = M.render(
    'student-mean-interval',
    { sampleSize: 2, mean: 4, sampleSpread: 2 },
    { compact: true }
  );
  assert.match(overflow, /arrows explicitly mark endpoints beyond/);
  assert.match(overflow, /\[−13\.97, 21\.97\]/);
  const randomGraph = M.render(
    'randomization-distribution',
    M.defaults('randomization-distribution'),
    { view: 'graph' }
  );
  assert.match(randomGraph, /data-role="sample-point"/);
  assert.doesNotMatch(randomGraph, /<path data-series="result"/);
});

test('all 70 assignment dots remain separate on fixed horizontal scales, including tied statistics', () => {
  for (const compact of [true, false])
    for (const lastValue of [0, 0.5, 1, 1.05, 2, 2.05, 3, 3.5, 4, 5, 6, 7, 8, 9, 10]) {
      const html = M.render(
          'randomization-distribution',
          { lastValue, allocation: 'separated' },
          { compact }
        ),
        points = [...html.matchAll(/<circle cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)"/g)].map(
          ([, x, y, radius]) => ({ x: Number(x), y: Number(y), radius: Number(radius) })
        );
      assert.equal(points.length, 70);
      for (let i = 0; i < points.length; i++) {
        assert.ok(points[i].y <= 285, lastValue + ' fits the fixed scene band');
        for (let j = 0; j < i; j++)
          assert.ok(
            Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y) >=
              points[i].radius + points[j].radius,
            lastValue + ': separate assignment dots'
          );
      }
    }
});

test('randomization previews keep one separate visible dot per assignment at tied and near-tied scores', () => {
  const Previews = require('../src/sampling-extension-previews.js');
  for (const lastValue of [2.5, 2.95, 3, 8]) {
    const p = { lastValue, allocation: 'separated' },
      html = Previews.draw(
        'randomization-distribution',
        p,
        M.evaluate('randomization-distribution', p)
      ),
      points = [...html.matchAll(/<circle cx="([\d.]+)" cy="([\d.]+)" r="([\d.]+)"/g)].map(
        ([, x, y, radius]) => ({ x: Number(x), y: Number(y), radius: Number(radius) })
      );
    assert.equal(points.length, 70);
    for (let i = 0; i < points.length; i++) {
      assert.ok(points[i].y >= 75 && points[i].y <= 138);
      for (let j = 0; j < i; j++)
        assert.ok(
          Math.hypot(points[i].x - points[j].x, points[i].y - points[j].y) >=
            points[i].radius + points[j].radius,
          lastValue + ': separate preview dots'
        );
    }
  }
});
