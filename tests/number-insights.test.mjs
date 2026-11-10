import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/number-insights.js');
const S = require('../src/number-insight-stories.js');
const P = require('../src/number-insight-previews.js');
const near = (a, b, t = 3e-12) =>
  assert.ok(Number.isFinite(a) && Math.abs(a - b) <= t * Math.max(1, Math.abs(b)), `${a} ≈ ${b}`);
const attributes = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const reference = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from number_insight_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );

test('square-root convergents agree with exact reverse continued fractions and preserve integer residuals', () => {
  const cases = [];
  for (let refinement = 1; refinement <= 8; refinement++)
    for (const side of [0.5, 1, 1.25, 3])
      cases.push({ slug: 'irrational-square-root', input: { side, refinement } });
  const oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    assert.equal(r.valid, true);
    for (const [k, v] of Object.entries(oracle[i]))
      k === 'status' ? assert.equal(r[k], v) : near(r[k], v);
    assert.equal(Math.abs(r.pellResidual), 1);
    assert.equal(r.pellResidual, c.input.refinement % 2 ? -1 : 1);
    near(r.diagonal ** 2, 2 * c.input.side ** 2);
    near(r.estimatedDiagonal / c.input.side, r.numerator / r.denominator);
    near(r.error, Math.abs(r.signedError));
    assert.equal(Math.sign(r.signedError), Math.sign(r.pellResidual));
  });
  assert.equal(M.evaluate('irrational-square-root', { side: 1, refinement: 8 }).numerator, 577);
  assert.equal(M.evaluate('irrational-square-root', { side: 1, refinement: 8 }).denominator, 408);
});

test('golden rectangles keep the rotated remainder ratio and separate finite Fibonacci candidates', () => {
  const cases = [];
  for (let term = 2; term <= 12; term++)
    for (const shortSide of [0.5, 1, 2, 3])
      cases.push({ slug: 'golden-ratio', input: { shortSide, term } });
  const oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const [k, v] of Object.entries(oracle[i]))
      k === 'status' ? assert.equal(r[k], v) : near(r[k], v);
    near(r.phi ** 2, r.phi + 1);
    near(r.longSide / c.input.shortSide, r.remainingRatio);
    near(r.remainder * c.input.shortSide + c.input.shortSide ** 2, r.area);
    assert.ok(r.phi > 1);
    assert.notEqual(r.approximation, r.phi);
    assert.equal(Math.sign(r.ratioError), c.input.term % 2 ? -1 : 1);
  });
  const final = M.evaluate('golden-ratio', { shortSide: 1, term: 12 });
  assert.equal(final.fibonacci, 144);
  assert.equal(final.following, 233);
});

test('circle circumference, diameter ratio and disk area retain distinct physical scaling', () => {
  const cases = [0.25, 0.3, 0.5, 1, 1.05, 2, 3.75, 4].map(radius => ({
      slug: 'circle-measurement',
      input: { radius }
    })),
    oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const [k, v] of Object.entries(oracle[i]))
      k === 'status' ? assert.equal(r[k], v) : near(r[k], v);
    near(r.circumference / r.diameter, Math.PI);
    near(r.area, (r.circumference * c.input.radius) / 2);
  });
  for (const radius of [0.25, 0.5, 1, 2]) {
    const a = M.evaluate('circle-measurement', { radius }),
      b = M.evaluate('circle-measurement', { radius: 2 * radius });
    near(b.circumference, 2 * a.circumference);
    near(b.area, 4 * a.area);
    near(b.ratio, a.ratio);
  }
});

test('floor and ceiling use exact decimal thresholds, including just-above fits and subnormal volumes', () => {
  const cases = [];
  for (const capacity of [1, 1.1, 1.25, 4, 6])
    for (const amount of [0, 0.25, 1, 3.3, 3.3000000000000003, 11.75, 12, 12.25, 13.5, 30, 5e-324])
      cases.push({ slug: 'floor-ceiling', input: { amount, capacity } });
  const oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const [k, v] of Object.entries(oracle[i]))
      k === 'status' ? assert.equal(r[k], v) : near(r[k], v);
    assert.ok(Number.isSafeInteger(r.output));
    assert.ok(r.needed === r.full || r.needed === r.full + 1);
    assert.ok(r.remainder >= 0 && r.remainder < c.input.capacity);
    assert.ok(r.spare >= 0 && r.spare <= c.input.capacity);
    near(r.full * c.input.capacity + r.remainder, c.input.amount);
    near(r.needed * c.input.capacity - r.spare, c.input.amount);
  });
  const exact = M.evaluate('floor-ceiling', { amount: 3.3, capacity: 1.1 });
  assert.equal(exact.needed, 3);
  assert.equal(exact.full, 3);
  assert.equal(exact.remainder, 0);
  assert.equal(exact.spare, 0);
  const above = M.evaluate('floor-ceiling', { amount: 3.3000000000000003, capacity: 1.1 });
  assert.equal(above.needed, 4);
  assert.equal(above.full, 3);
  assert.equal(above.remainder, 3e-16);
  const tiny = M.evaluate('floor-ceiling', { amount: 5e-324, capacity: 1 });
  assert.equal(tiny.needed, 1);
  assert.equal(tiny.full, 0);
  assert.equal(tiny.remainder, 5e-324);
});

test('strict domains, independent caller state and discrete indices keep the shared host contract', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('provider timer'),
    requestAnimationFrame: () => assert.fail('provider clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/number-insights.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasNumberInsights);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      copy = structuredClone(p);
    for (const input of [null, [], { ...p, extra: 1 }])
      assert.equal(M.evaluate(slug, input).status, 'invalid_parameters');
    for (const c of M.controls(slug)) {
      for (const value of [
        true,
        '2',
        NaN,
        Infinity,
        c.min - 0.1,
        c.max + 0.1,
        ...(c.discrete ? [c.min + 0.5] : [])
      ])
        assert.equal(M.evaluate(slug, { ...p, [c.key]: value }).status, 'invalid_parameters');
      const altered = { ...p, [c.key]: c.max };
      assert.equal(M.canInterpolate(slug, p, altered), !c.discrete || p[c.key] === c.max);
    }
    const c = M.controls(slug)[0];
    M.controls(slug)[0].min = -100;
    assert.equal(M.controls(slug)[0].min, c.min);
    assert.equal(M.specs(slug).views.join(','), 'geometry,graph');
    near(M.curveValue(slug, p, c.max), M.evaluate(slug, { ...p, [c.key]: c.max }).output);
    assert.equal(M.curveValue(slug, p, c.max + 1), null);
    M.render(slug, p);
    M.evaluate(slug, p).parameters[c.key] = -100;
    assert.deepEqual(p, copy);
    assert.equal(M.evaluate(slug, {}).valid, true);
  }
  assert.equal(M.has('constructor'), false);
  assert.equal(M.render('unknown', {}), '');
  assert.equal(M.evaluate('unknown', {}).valid, false);
  assert.equal(reference([{ slug: 'unhandled', input: {} }])[0], null);
});

test('stories use scalar calculations and point every numeric reading to actual quantities', () => {
  for (const slug of M.ids) {
    const s = S.forSlug(slug),
      p = M.defaults(slug),
      r = M.evaluate(slug, p),
      values = { ...p, ...r };
    assert.deepEqual(s.parameters, p);
    assert.equal(s.variables.length, M.controls(slug).length);
    assert.equal(s.calculation.length, 3);
    const markup = M.render(slug, p, { id: 'story:' + slug, compact: true, baseline: p });
    const marked = new Set(
      [...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(m => m[1].split(/\s+/))
    );
    for (const stage of s.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(['number', 'string'].includes(typeof values[key]), slug + ': ' + key);
        assert.ok(S.quantityFor(slug, key), slug + ': quantity ' + key);
        assert.ok(marked.has(key), slug + ': marked ' + key);
      }
    for (const c of M.controls(slug)) assert.ok(marked.has(c.key));
    assert.ok(S.linksFor(slug));
    assert.equal(S.find(s.id), s);
  }
  assert.equal(S.forSlug('unknown'), null);
  assert.equal(S.quantityFor('unknown', 'x'), null);
});

test('measured geometry, container filling and spare capacity encode actual model values', () => {
  for (const compact of [false, true]) {
    for (const side of [0.5, 1, 3]) {
      const markup = M.render('irrational-square-root', { side, refinement: 3 }, { compact });
      const square = attributes(markup.match(/<rect data-role="square"[^>]*>/)[0]);
      near(Number(square.width), 48 * side);
      near(Number(square.height), 48 * side);
    }
    for (const radius of [0.25, 2, 4]) {
      const markup = M.render('circle-measurement', { radius }, { compact }),
        r = M.evaluate('circle-measurement', { radius });
      near(
        Number(attributes(markup.match(/<circle data-role="table-disk"[^>]*>/)[0]).r),
        22 * radius
      );
      near(
        Number(attributes(markup.match(/<rect data-role="circumference-bar"[^>]*>/)[0]).width),
        ((compact ? 296 : 696) * r.circumference) / 26,
        2e-7
      );
    }
    const p = { amount: 13.5, capacity: 4 },
      r = M.evaluate('floor-ceiling', p),
      markup = M.render('floor-ceiling', p, { compact });
    assert.equal([...markup.matchAll(/data-role="container"/g)].length, 30);
    const fills = [...markup.matchAll(/<rect data-role="liquid"[^>]*>/g)].map(m =>
      attributes(m[0])
    );
    assert.equal(fills.length, r.needed);
    near(Number(fills.at(-1)['data-fill']), r.remainder / p.capacity);
    const empty = attributes(markup.match(/<rect data-role="spare-capacity"[^>]*>/)[0]);
    near(Number(empty.height), (44 * r.spare) / p.capacity);
    assert.match(markup, /data-quantity="spare"[^>]*>[\s\S]*Unused capacity/);
  }
});

test('ceiling graph has independent exact horizontal steps and no diagonal threshold interpolation', () => {
  for (const compact of [false, true])
    for (const capacity of [1, 1.1, 4, 6]) {
      const markup = M.render(
        'floor-ceiling',
        { amount: 12, capacity },
        { view: 'graph', compact, id: 'thresholds' }
      );
      const open = [...markup.matchAll(/<circle data-role="open-step-end"[^>]*>/g)].map(m =>
        attributes(m[0])
      );
      const closed = [...markup.matchAll(/<circle data-role="closed-step-end"[^>]*>/g)].map(m =>
        attributes(m[0])
      );
      assert.equal(open.length, Math.ceil(30 / capacity));
      assert.equal(closed.length, open.length);
      open.forEach((point, i) => assert.equal(point.cy, closed[i].cy));
      assert.doesNotMatch(markup, /<path[^>]*data-series=/);
    }
});

test('boundary previews keep the art and caption bands separate and use actual evaluated results', () => {
  for (const slug of M.ids) {
    const states = [
      M.defaults(slug),
      ...M.controls(slug).flatMap(c => [
        { ...M.defaults(slug), [c.key]: c.min },
        { ...M.defaults(slug), [c.key]: c.max }
      ])
    ];
    for (const p of states) {
      const r = M.evaluate(slug, p),
        svg = P.draw(slug, p, r);
      assert.match(svg, /data-preview-quantity="output"/);
      assert.ok(svg.includes('data-value="' + r.output + '"'));
      assert.equal([...svg.matchAll(/data-preview-layer="caption"/g)].length, 1);
      const art = svg.split('<g data-preview-layer="caption">')[0];
      for (const m of art.matchAll(/<text[^>]*>/g)) {
        const a = attributes(m[0]),
          size = Number(a['font-size']);
        assert.ok(size >= 13);
        assert.ok(Number(a.y) + size / 4 <= 188);
      }
      assert.ok(P.describe(slug, p, r).length > 40);
    }
  }
  assert.equal(P.draw('unknown', {}, {}), '');
});

test('canonical fixtures and example presets match independent references and preserve their proof boundaries', () => {
  const cases = [];
  for (const slug of M.ids) {
    const card = JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
    );
    assert.equal(card.examples.length, 5);
    for (const c of card.interactive.expected_cases)
      cases.push({ slug, input: c.input, expected: c });
    for (const ex of card.examples) {
      const r = M.evaluate(slug, ex.preset);
      assert.equal(r.valid, true);
      near(r.output, Number(ex.result.exact ?? ex.result.approximate));
      if (slug === 'floor-ceiling') assert.match(ex.steps[2].expression, /^N = \d+ containers$/);
      assert.ok(ex.interpretation.length > 75);
    }
    if (slug === 'irrational-square-root')
      assert.match(
        card.properties[0].derivation,
        /coprime[\s\S]*p is even[\s\S]*q is also even[\s\S]*contradict/
      );
    if (slug === 'golden-ratio')
      assert.match(card.properties[0].derivation, /does not.*prove convergence/);
  }
  const oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    assert.equal(r.status, c.expected.status);
    assert.equal(r.status, oracle[i].status);
    if (r.valid) {
      near(r.output, c.expected.output);
      near(r.output, oracle[i].output);
    }
  });
});
