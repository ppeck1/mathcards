import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
const require = createRequire(import.meta.url),
  M = require('../src/dynamics-extensions.js'),
  S = require('../src/dynamics-extension-stories.js'),
  P = require('../src/dynamics-extension-previews.js');
const near = (a, b, e = 1e-10) =>
  assert.ok(Number.isFinite(a) && Math.abs(a - b) <= e * Math.max(1, Math.abs(b)), `${a} ≈ ${b}`);
const attrs = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
test('hysteresis remembers different resting positions at exactly the same control', () => {
  const a = M.evaluate('hysteresis', { steps: 20, history: 'up-down' }),
    b = M.evaluate('hysteresis', { steps: 60, history: 'up-down' }),
    c = M.evaluate('hysteresis', { steps: 20, history: 'down-up' });
  assert.equal(a.bias, 0);
  assert.equal(b.bias, 0);
  near(a.output, -1);
  near(b.output, 1);
  near(c.output, 1);
  for (const history of ['up-down', 'down-up']) {
    const r = M.evaluate('hysteresis', { steps: 80, history });
    assert.equal(r.snaps, 2);
    assert.equal(r.trace.length, 81);
    assert.ok(Object.isFrozen(r.trace));
    for (const row of r.trace) {
      near(row.x ** 3 - row.x, row.bias);
      assert.ok(3 * row.x ** 2 - 1 > 0);
    }
  }
});
test('every sweep prefix is independent and discrete; a later step cannot mutate an earlier trace', () => {
  const before = M.evaluate('hysteresis', { steps: 20, history: 'up-down' }),
    json = JSON.stringify(before.trace);
  for (let steps = 0; steps <= 80; steps++)
    assert.equal(M.evaluate('hysteresis', { steps, history: 'up-down' }).trace.length, steps + 1);
  assert.equal(JSON.stringify(before.trace), json);
  assert.equal(
    M.evaluate('hysteresis', { steps: 1.5, history: 'up-down' }).status,
    'invalid_parameters'
  );
  assert.equal(
    M.canInterpolate(
      'hysteresis',
      { steps: 20, history: 'up-down' },
      { steps: 21, history: 'up-down' }
    ),
    false
  );
});
test('quadratic gradient flow satisfies the ODE and the exact dissipation identity', () => {
  for (const a of [0.25, 0.5, 1, 2])
    for (const b of [0.25, 0.5, 1, 2]) {
      let last = Infinity;
      for (let time = 0; time <= 5; time += 0.25) {
        const r = M.evaluate('gradient-flow', { a, b, time });
        assert.ok(r.cost <= last + 1e-14);
        last = r.cost;
        near(r.dissipation, -(r.gradientNorm ** 2));
        near(r.velocityX, -a * r.x);
        near(r.velocityY, -b * r.y);
      }
      const h = 1e-5,
        left = M.evaluate('gradient-flow', { a, b, time: 1 - h }),
        right = M.evaluate('gradient-flow', { a, b, time: 1 + h }),
        mid = M.evaluate('gradient-flow', { a, b, time: 1 });
      near((right.cost - left.cost) / (2 * h), mid.dissipation, 2e-9);
    }
  const start = M.evaluate('gradient-flow', { time: 0, a: 1, b: 0.5 });
  near(start.x, 2);
  near(start.y, 1);
  near(start.cost, 2.25);
});
test('both circle charts invert on their domains and omit different smooth points', () => {
  for (const pole of ['north', 'south'])
    for (let angle = -180; angle <= 180; angle += 5) {
      const r = M.evaluate('circle-manifold', { angle, pole });
      if (angle === (pole === 'north' ? 90 : -90)) {
        assert.equal(r.status, 'outside_chart');
        assert.equal(r.output, null);
        continue;
      }
      assert.equal(r.valid, true);
      near(r.x * r.x + r.y * r.y, 1);
      assert.ok(r.roundTripError < 1e-12);
    }
  const omitted = M.evaluate('circle-manifold', { angle: 90, pole: 'north' }),
    covered = M.evaluate('circle-manifold', { angle: 90, pole: 'south' });
  near(omitted.x, covered.x);
  near(omitted.y, covered.y);
  near(covered.output, 0);
});
test('circle projection lines really pass through the same point, not an unrelated coordinate panel', () => {
  const r = M.evaluate('circle-manifold', { angle: 30, pole: 'north' }),
    html = M.render('circle-manifold', r.parameters, { compact: true });
  const group = html.match(/data-quantity="u denominator output"[\s\S]*?<\/g>/)[0],
    lines = [...group.matchAll(/<line\b[^>]*>/g)].map(x => attrs(x[0]));
  assert.equal(lines.length, 2);
  const a = lines[0],
    b = lines[1],
    dx = +a.x2 - +a.x1,
    dy = +a.y2 - +a.y1;
  near((+b.x2 - +a.x1) * dy - (+b.y2 - +a.y1) * dx, 0, 1e-5);
  assert.match(
    M.render('circle-manifold', { angle: 89.9, pole: 'north' }, { compact: true }),
    /data-role="off-window"/
  );
});
test('sphere charts agree with projection identities and overlap by reciprocal radius', () => {
  for (const latitude of [-80, -45, 0, 30, 80])
    for (const longitude of [-180, -90, 0, 35, 180]) {
      const n = M.evaluate('sphere-manifold', { latitude, longitude, pole: 'north' }),
        s = M.evaluate('sphere-manifold', { latitude, longitude, pole: 'south' });
      near(n.x ** 2 + n.y ** 2 + n.z ** 2, 1);
      near(n.u * (1 - n.z), n.x);
      near(n.v * (1 - n.z), n.y);
      near(n.u / n.output ** 2, s.u);
      near(n.v / n.output ** 2, s.v);
      assert.ok(n.roundTripError < 1e-12 && s.roundTripError < 1e-12);
    }
  for (const longitude of [-180, 0, 99]) {
    const r = M.evaluate('sphere-manifold', { latitude: 90, longitude, pole: 'south' });
    assert.equal(r.x, 0);
    assert.equal(r.y, 0);
    assert.equal(r.z, 1);
    assert.equal(r.output, 0);
  }
  assert.equal(
    M.evaluate('sphere-manifold', { latitude: 90, longitude: 0, pole: 'north' }).status,
    'outside_chart'
  );
});
test('a chart sweep never interpolates across its pole or across chart selection', () => {
  assert.equal(
    M.canInterpolate(
      'circle-manifold',
      { angle: 80, pole: 'north' },
      { angle: 100, pole: 'north' }
    ),
    false
  );
  assert.equal(
    M.canInterpolate('circle-manifold', { angle: 30, pole: 'north' }, { angle: 35, pole: 'north' }),
    true
  );
  assert.equal(
    M.canInterpolate('circle-manifold', { angle: 30, pole: 'north' }, { angle: 30, pole: 'south' }),
    false
  );
  assert.equal(
    M.canInterpolate(
      'structural-stability',
      { perturbation: 0.2, family: 'fold' },
      { perturbation: 0.2, family: 'hyperbolic' }
    ),
    false
  );
});
test('perturbations change the rule and are not mislabeled as initial-state changes', () => {
  for (const perturbation of [-0.5, -1e-8, 0, 1e-8, 0.5]) {
    const linear = M.evaluate('structural-stability', { perturbation, family: 'hyperbolic' });
    assert.equal(linear.output, 1);
    near(linear.roots[0], perturbation);
    const fold = M.evaluate('structural-stability', { perturbation, family: 'fold' });
    assert.equal(fold.output, perturbation < 0 ? 0 : perturbation === 0 ? 1 : 2);
    for (const root of fold.roots) near(root * root, perturbation);
  }
});
test('story calculations, scoped meanings and grammar bindings use actual evaluated quantities', () => {
  const delta = JSON.parse(
    fs.readFileSync(
      new URL('../content/planning/dynamics-extension-integration.json', import.meta.url),
      'utf8'
    )
  );
  for (const id of M.ids) {
    const story = S.forSlug(id),
      r = M.evaluate(id, story.parameters);
    assert.equal(story.calculation.length, 3);
    for (const t of [
      ...story.steps.flatMap(s => [s.body, s.formula]),
      ...story.calculation.map(s => s.template)
    ])
      for (const [, key] of t.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn({ ...r.parameters, ...r }, key), id + ':' + key);
        assert.ok(S.quantityFor(id, key));
      }
    const html = M.render(id, story.parameters, { compact: true, sceneControl: false }),
      keys = new Set(
        [...html.matchAll(/data-quantity="([^"]*)"/g)].flatMap(m => m[1].split(/\s+/))
      );
    for (const [token, bindings] of Object.entries(delta.bindings[id]))
      for (const key of bindings) assert.ok(keys.has(key), id + ' ' + token + ' → ' + key);
  }
  for (const id of ['constructor', 'toString', '__proto__', 'unknown'])
    assert.equal(S.quantityFor(id, 'output'), null);
  for (const id of M.ids) assert.equal(S.quantityFor(id, 'constructor'), null);
});
test('both views stay finite at control boundaries and charts preserve their point at an omitted pole', () => {
  for (const id of M.ids) {
    const p = M.defaults(id),
      variants = [p];
    for (const c of M.controls(id)) {
      if (c.type === 'select') variants.push(...c.options.map(x => ({ ...p, [c.key]: x.value })));
      else variants.push({ ...p, [c.key]: c.min }, { ...p, [c.key]: c.max });
    }
    for (const p of variants) {
      const a = M.render(id, p, { compact: true, id: 'slot-a' }),
        b = M.render(id, p, { compact: true, view: 'graph', id: 'slot-b' });
      assert.doesNotMatch(a + b, /NaN|Infinity/);
      assert.notEqual(a, b);
      assert.equal(M.evaluate(id, p).valid || M.evaluate(id, p).status === 'outside_chart', true);
    }
  }
  for (const id of ['circle-manifold', 'sphere-manifold']) {
    const p = {
      ...M.defaults(id),
      [id === 'circle-manifold' ? 'angle' : 'latitude']: 90,
      pole: 'north'
    };
    const html = M.render(id, p, { compact: true });
    assert.match(html, /This chart omits this pole/);
    assert.match(html, /data-quantity="(?:angle|latitude longitude) x y/);
  }
});
test('independent Python references agree with every canonical fixture', () => {
  const jobs = M.ids.flatMap(id =>
    JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8')
    ).interactive.expected_cases.map(c => ({ id, p: c.input }))
  );
  const script =
    "import json,sys;sys.path.insert(0,'tools');from dynamics_extension_reference import compute;print(json.dumps([compute(x['id']+'-visual-model',x['p']) for x in json.load(sys.stdin)]))";
  const oracle = JSON.parse(
    execFileSync('python', ['-X', 'utf8', '-c', script], {
      input: JSON.stringify(jobs),
      encoding: 'utf8'
    })
  );
  jobs.forEach((j, i) => {
    const r = M.evaluate(j.id, j.p);
    assert.equal(r.status, oracle[i].status);
    if (r.valid) near(r.output, oracle[i].output);
  });
});
test('previews reserve the shared caption band and show the actual default result', () => {
  for (const id of M.ids) {
    const p = M.defaults(id),
      r = M.evaluate(id, p),
      html = P.draw(id, p, r);
    assert.equal([...html.matchAll(/data-preview-layer="caption"/g)].length, 1);
    assert.match(html, /data-preview-quantity="output"/);
    assert.doesNotMatch(html, /NaN|Infinity|<script/);
    const art = html.replace(/<g data-preview-layer="caption">[\s\S]*?<\/g>/, '');
    for (const [tag] of art.matchAll(/<text\b[^>]*>/g)) {
      const a = attrs(tag);
      assert.ok(+a['font-size'] >= 13);
      assert.ok(+a.y + +a['font-size'] / 4 <= 188);
    }
  }
});
test('live geometry changes continuously without duplicating fast-ticking numerical text', () => {
  const changes = {
    hysteresis: ['steps', 21],
    'gradient-flow': ['time', 2],
    'circle-manifold': ['angle', 20],
    'sphere-manifold': ['latitude', 30],
    'structural-stability': ['perturbation', 0.3]
  };
  const texts = html => [...html.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/g)].map(m => m[1]);
  for (const id of M.ids) {
    const a = M.defaults(id),
      [key, value] = changes[id],
      b = { ...a, [key]: value };
    if (id === 'circle-manifold') a.angle = 10;
    const before = M.render(id, a, { compact: true }),
      after = M.render(id, b, { compact: true });
    assert.notEqual(before, after);
    assert.deepEqual(
      texts(before),
      texts(after),
      id + ' leaves numeric readings in the paced host'
    );
  }
});
