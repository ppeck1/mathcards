import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const S = require('../src/systems-models.js');
const near = (actual, expected, tolerance = 1e-10) =>
  assert.ok(
    Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const finiteSVG = html => {
  assert.match(html, /<svg/);
  for (const [tag] of html.matchAll(/<[^>]+>/g)) assert.doesNotMatch(tag, /NaN|Infinity/);
};
const set = mask => new Set([0, 1, 2].filter(bit => mask & (2 ** bit)));
const subset = (a, b) => [...a].every(value => b.has(value));
const attrs = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );

test('systems providers reject invalid structures and preserve fresh parameter metadata', () => {
  assert.equal(S.ids.length, 13);
  for (const slug of S.ids) {
    assert.equal(S.evaluate(slug, {}).valid, true, slug);
    for (const input of [null, [], { unexpected: 1 }])
      assert.equal(S.evaluate(slug, input).valid, false, slug);
    const defaults = S.defaults(slug),
      original = structuredClone(defaults),
      controls = S.controls(slug);
    for (const c of controls) {
      if (c.type === 'select')
        assert.equal(S.evaluate(slug, { ...defaults, [c.key]: 'unsupported' }).valid, false);
      else {
        for (const bad of [NaN, Infinity, '1', c.min - 1, c.max + 1])
          assert.equal(
            S.evaluate(slug, { ...defaults, [c.key]: bad }).valid,
            false,
            slug + ':' + c.key
          );
        if (c.discrete)
          assert.equal(S.evaluate(slug, { ...defaults, [c.key]: c.min + 0.5 }).valid, false);
      }
    }
    defaults[Object.keys(defaults)[0]] = 'changed';
    assert.deepEqual(S.defaults(slug), original);
    controls[0].label = 'changed';
    assert.notEqual(S.controls(slug)[0].label, 'changed');
    assert.deepEqual(S.specs(slug).views, ['geometry', 'graph']);
  }
  for (const slug of ['ideal-gas', 'gibbs-free-energy'])
    assert.equal(
      S.evaluate(slug, { temperature: 300.5 }).valid,
      true,
      'Kelvin input remains continuous'
    );
});

test('all finite subset pairs and all 512 distributive triples agree with set membership', () => {
  for (let a = 0; a < 8; a++)
    for (let b = 0; b < 8; b++) {
      const A = set(a),
        B = set(b),
        ordered = S.evaluate('partial-order', { a, b });
      assert.equal(ordered.output, Number(subset(A, B)));
      assert.equal(ordered.comparable, Number(subset(A, B) || subset(B, A)));
      for (const operation of ['meet', 'join']) {
        const expected =
          operation === 'meet' ? new Set([...A].filter(v => B.has(v))) : new Set([...A, ...B]);
        const r = S.evaluate('meet-join', { a, b, operation });
        assert.equal(r.output, expected.size);
        assert.deepEqual(set(r.resultMask), expected);
      }
      for (let c = 0; c < 8; c++) {
        const C = set(c),
          expected = new Set([...A].filter(v => B.has(v) || C.has(v))),
          r = S.evaluate('lattice-distributivity', { a, b, c });
        assert.equal(r.equal, 1);
        assert.equal(r.output, expected.size);
        assert.deepEqual(set(r.leftMask), expected);
        assert.deepEqual(set(r.rightMask), expected);
      }
    }
  assert.equal(S.evaluate('partial-order', { a: 3, b: 5 }).comparable, 0);
  assert.equal(S.evaluate('partial-order', { a: 0, b: 7 }).output, 1);
});

test('continuous solutions satisfy their initial conditions, semigroups and differential equations', () => {
  for (const initial of [-2, -1, -0.3, 0, 0.3, 1, 2]) {
    for (const rate of [0, 0.5, 2]) {
      near(S.evaluate('continuous-flow', { initial, rate, time: 0 }).output, initial);
      const first = S.evaluate('continuous-flow', { initial, rate, time: 1 }).output;
      near(
        S.evaluate('continuous-flow', { initial: first, rate, time: 2 }).output,
        S.evaluate('continuous-flow', { initial, rate, time: 3 }).output
      );
      const r = S.evaluate('continuous-flow', { initial, rate, time: 2 }),
        dt = 1e-5;
      const derivative =
        (S.evaluate('continuous-flow', { initial, rate, time: 2 + dt }).output -
          S.evaluate('continuous-flow', { initial, rate, time: 2 - dt }).output) /
        (2 * dt);
      near(derivative, -rate * r.output, 1e-8);
      near(r.velocity, -rate * r.output);
    }
    near(S.evaluate('basin-attraction', { initial, time: 0 }).output, initial);
    const first = S.evaluate('basin-attraction', { initial, time: 1 }).output;
    near(
      S.evaluate('basin-attraction', { initial: first, time: 2 }).output,
      S.evaluate('basin-attraction', { initial, time: 3 }).output
    );
    const r = S.evaluate('basin-attraction', { initial, time: 2 }),
      dt = 1e-5;
    const derivative =
      (S.evaluate('basin-attraction', { initial, time: 2 + dt }).output -
        S.evaluate('basin-attraction', { initial, time: 2 - dt }).output) /
      (2 * dt);
    near(derivative, r.output - r.output ** 3, 1e-8);
    assert.equal(r.destination, Math.sign(initial));
    assert.equal(Math.sign(r.output), Math.sign(initial));
  }
});

test('fold equilibria satisfy the velocity equation and the declared stability signs', () => {
  for (const mu of [-1, -0.0001, 0, 0.0001, 0.25, 1, 2]) {
    const r = S.evaluate('fold-bifurcation', { mu });
    assert.equal(r.output, mu < 0 ? 0 : mu === 0 ? 1 : 2);
    if (mu > 0) {
      near(mu - r.stable ** 2, 0);
      near(mu - r.unstable ** 2, 0);
      assert.ok(-2 * r.stable < 0);
      assert.ok(-2 * r.unstable > 0);
    } else assert.equal(r.stable, null);
  }
  assert.match(S.evaluate('fold-bifurcation', { mu: 0 }).classification, /one-sided/);
});

test('cusp root counts distinguish exact repeated roots from adjacent represented inputs', () => {
  for (const [bias, count] of [
    [0.25 - 1e-15, 3],
    [0.25 - 1e-16, 3],
    [0.25, 2],
    [0.25 + 1e-16, 1],
    [0.25 + 1e-15, 1]
  ]) {
    const r = S.evaluate('cusp-potential', { shape: 0.75, bias });
    assert.equal(r.output, count, 'bias=' + bias);
    for (const x of r.roots) near(x ** 3 - 0.75 * x - bias, 0, 1e-12);
  }
  const repeated = S.evaluate('cusp-potential', { shape: 0.75, bias: 0.25 }).roots;
  near(repeated[0], -0.5);
  near(repeated[1], 1);
  assert.deepEqual(S.evaluate('cusp-potential', { shape: 0, bias: 0 }).roots, [0]);
  for (const shape of [0, 0.0001, 0.25, 0.75, 1, 2])
    for (const bias of [-1, -0.25, 0, 0.25, 1]) {
      const r = S.evaluate('cusp-potential', { shape, bias });
      assert.ok(r.roots.every(Number.isFinite));
      for (const x of r.roots) near(x ** 3 - shape * x - bias, 0, 1e-10);
    }
});

test('cusp accepted subnormal and tiny parameters never produce undefined scene coordinates', () => {
  for (const shape of [Number.MIN_VALUE, 1e-250, 1e-220, 1e-100]) {
    const r = S.evaluate('cusp-potential', { shape, bias: 0 });
    assert.equal(r.output, 3);
    assert.ok(r.roots.every(Number.isFinite));
    near(r.roots[0] / Math.sqrt(shape), -1, 1e-12);
    near(r.roots[2] / Math.sqrt(shape), 1, 1e-12);
    finiteSVG(S.render('cusp-potential', { shape, bias: 0 }, { compact: true }));
  }
  const r = S.evaluate('cusp-potential', { shape: 0, bias: Number.MIN_VALUE });
  near(r.roots[0] / Math.cbrt(Number.MIN_VALUE), 1, 1e-12);
});

test('heat transfer conserves energy and increases physical entropy up to equal temperature', () => {
  let previous = -Infinity;
  for (let heat = 0; heat <= 50; heat += 0.5) {
    const r = S.evaluate('heat-balance', { heat });
    assert.equal(r.hot + r.cold, 700);
    assert.equal(400 - r.hot, r.cold - 300);
    near(r.output, Math.log((r.hot * r.cold) / (400 * 300)));
    assert.ok(r.output >= previous - 1e-14);
    assert.ok(r.hot >= r.cold);
    assert.equal(r.unit, 'J/K');
    previous = r.output;
  }
  const equilibrium = S.evaluate('heat-balance', { heat: 50 });
  assert.equal(equilibrium.hot, 350);
  assert.equal(equilibrium.cold, 350);
});

test('gas and free-energy families retain their declared units and balance identities', () => {
  const R = 8.31446261815324;
  for (const volume of [5, 10, 20, 40])
    for (const temperature of [150, 300.5, 600]) {
      const r = S.evaluate('ideal-gas', { volume, temperature });
      near((r.output * volume) / temperature, R);
      assert.equal(r.unit, 'kPa');
    }
  for (const temperature of [100, 300.5, 600])
    for (const enthalpy of [-4000, 0, 4000])
      for (const entropy of [-10, 0, 10]) {
        const r = S.evaluate('gibbs-free-energy', { temperature, enthalpy, entropy });
        assert.equal(r.output + r.thermalTerm, enthalpy);
        assert.equal(r.unit, 'J');
      }
  assert.equal(
    S.evaluate('gibbs-free-energy', { temperature: 400, enthalpy: 2000, entropy: 5 }).output,
    0
  );
});

test('sigmoid symmetry and one-step Hebbian increments retain distinct intermediate quantities', () => {
  for (const signal of [-3, -1, 0, 1, 3])
    for (const weight of [-2, 0, 2])
      for (const bias of [-2, 0, 2]) {
        const r = S.evaluate('artificial-neuron', { signal, weight, bias });
        const opposite = S.evaluate('artificial-neuron', { signal: -signal, weight, bias: -bias });
        assert.ok(r.output > 0 && r.output < 1);
        near(r.output + opposite.output, 1);
        near(r.z, weight * signal + bias);
      }
  for (const pre of [0, 0.5, 1])
    for (const post of [0, 0.5, 1])
      for (const rate of [0, 0.1, 0.2]) {
        const r = S.evaluate('hebbian-learning', { pre, post, rate });
        assert.equal(r.product, pre * post);
        near(r.output - 0.2, rate * pre * post);
        assert.equal(r.change, rate * pre * post);
      }
});

test('radial vector arrows use the position projection and point toward the visible origin', () => {
  for (const compact of [false, true]) {
    const html = S.render('vector-field', { x: 1, y: 1, rate: 1 }, { compact });
    const marks = html.match(/<g[^>]+data-quantity="x y vx vy output"[^>]*>([\s\S]*?)<\/g>/)[1];
    const point = attrs(marks.match(/<circle[^>]*>/)[0]),
      arrow = attrs(marks.match(/<line[^>]*>/)[0]);
    const dx = Number(arrow.x2) - Number(arrow.x1),
      dy = Number(arrow.y2) - Number(arrow.y1);
    const ox = (compact ? 360 : 760) / 2 - Number(point.cx),
      oy = 190 - Number(point.cy);
    near(ox * dy - oy * dx, 0, 1e-9);
    assert.ok(ox * dx + oy * dy > 0);
  }
});

test('all default and control-boundary scenes stay finite and separate views, with clipped potential plots', () => {
  for (const slug of S.ids) {
    const p = S.defaults(slug),
      cases = [p];
    for (const c of S.controls(slug))
      if (c.type !== 'select')
        for (const value of [c.min, c.max]) cases.push({ ...p, [c.key]: value });
    for (const parameters of cases)
      for (const compact of [false, true]) {
        const geometry = S.render(slug, parameters, { compact, id: slug + '-geometry' }),
          graph = S.render(slug, parameters, { compact, view: 'graph', id: slug + '-graph' });
        finiteSVG(geometry);
        finiteSVG(graph);
        assert.notEqual(geometry, graph, slug);
        assert.match(geometry, /data-quantity="[^"]*output/);
        if (['fold-bifurcation', 'cusp-potential'].includes(slug))
          assert.match(geometry, /clip-path="url\(#systems-plot-/);
      }
  }
});

test('independent Python references agree across boundary cases and the critical cusp neighborhood', () => {
  const cases = [];
  for (const slug of S.ids) {
    const p = S.defaults(slug);
    cases.push({ model: slug + '-visual-model', parameters: p });
    for (const c of S.controls(slug))
      if (c.type !== 'select')
        for (const value of [c.min, (c.min + c.max) / 2, c.max]) {
          if (c.discrete && !Number.isInteger(value)) continue;
          cases.push({ model: slug + '-visual-model', parameters: { ...p, [c.key]: value } });
        }
  }
  for (const bias of [0.25 - 1e-15, 0.25 - 1e-16, 0.25, 0.25 + 1e-16, 0.25 + 1e-15])
    cases.push({ model: 'cusp-potential-visual-model', parameters: { shape: 0.75, bias } });
  const script =
    'import sys,json;sys.path.insert(0,"tools");import systems_reference as r;print(json.dumps([r.compute(x["model"],x["parameters"]) for x in json.load(sys.stdin)]))';
  const checked = spawnSync('python', ['-c', script], {
    cwd: new URL('..', import.meta.url),
    input: JSON.stringify(cases),
    encoding: 'utf8'
  });
  assert.equal(checked.status, 0, checked.stderr);
  const expected = JSON.parse(checked.stdout);
  cases.forEach((item, i) => {
    const actual = S.evaluate(item.model.replace(/-visual-model$/, ''), item.parameters);
    assert.equal(actual.status, expected[i].status);
    near(actual.output, expected[i].output, 1e-10);
  });
});
