import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/physics-bridges.js'),
  S = require('../src/physics-bridge-stories.js'),
  P = require('../src/physics-bridge-previews.js'),
  T = require('../src/physics-bridge-terms.js');
const near = (actual, expected, tol = 3e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tol * Math.max(Math.abs(expected), Number.MIN_VALUE),
    `${actual} ≈ ${expected}`
  );
const reference = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from physics_bridge_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
const attrs = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const role = (html, name) =>
  attrs(html.match(new RegExp('<[^>]+data-role="' + name + '"[^>]*>'))?.[0] || '');

test('both physics models and all canonical fixtures agree with high-precision independent references', () => {
  const cases = [];
  for (const slug of M.ids) {
    const card = JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
    );
    for (const c of card.interactive.expected_cases) cases.push({ slug, input: c.input });
  }
  for (let wavelength = 400; wavelength <= 800; wavelength += 25)
    cases.push({ slug: 'photon-energy', input: { wavelength } });
  for (const speedFraction of [0, 0.1, 0.25, 0.6, 0.8, 0.9, 0.945, 0.95])
    for (const properDuration of [1, 4, 10])
      cases.push({ slug: 'time-dilation', input: { speedFraction, properDuration } });
  const oracle = reference(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input),
      expected = oracle[i];
    assert.equal(r.status, expected.status, c.slug);
    if (expected.status === 'valid')
      for (const [key, v] of Object.entries(expected)) if (key !== 'status') near(r[key], v);
  });
});

test('exact SI values and inverse wavelength scaling keep joules, electronvolts and frequency distinct', () => {
  assert.deepEqual(M.constants, {
    planck: 6.62607015e-34,
    lightSpeed: 299792458,
    joulesPerEV: 1.602176634e-19
  });
  const a = M.evaluate('photon-energy', { wavelength: 400 }),
    b = M.evaluate('photon-energy', { wavelength: 800 });
  near(a.output, 2 * b.output);
  near(a.frequency, 2 * b.frequency);
  near(a.energyJ, 2 * b.energyJ);
  for (const r of [a, b, M.evaluate('photon-energy', { wavelength: 550 })]) {
    near(r.frequency * r.wavelengthM, M.constants.lightSpeed);
    near(r.energyJ, r.output * r.joulesPerEV);
    near(r.energyJ / r.frequency, M.constants.planck);
    assert.ok(r.output < 3.5 && r.output > 0);
  }
  near(M.evaluate('photon-energy', { wavelength: 500 }).frequency, 599584916000000);
});

test('proper and laboratory intervals obey the invariant for one clock-event pair', () => {
  for (const speedFraction of [0, 0.1, 0.6, 0.8, 0.95])
    for (const properDuration of [1, 4, 10]) {
      const r = M.evaluate('time-dilation', { speedFraction, properDuration });
      assert.ok(r.gamma >= 1 && r.output >= properDuration && r.output < 35);
      near(r.output * (1 - speedFraction) * (r.output * (1 + speedFraction)), properDuration ** 2);
      near(r.displacement, r.velocity * r.output);
      near(r.velocity / M.constants.lightSpeed, speedFraction);
    }
  const rest = M.evaluate('time-dilation', { speedFraction: 0, properDuration: 4 });
  assert.equal(rest.gamma, 1);
  assert.equal(rest.output, 4);
  assert.equal(rest.displacement, 0);
  near(M.evaluate('time-dilation', { speedFraction: 0.6, properDuration: 4 }).output, 5);
  near(M.evaluate('time-dilation', { speedFraction: 0.8, properDuration: 3 }).output, 5);
  const a = M.evaluate('time-dilation', { speedFraction: 0.6, properDuration: 4 }),
    b = M.evaluate('time-dilation', { speedFraction: 0.6, properDuration: 8 });
  near(b.output, 2 * a.output);
  near(a.gamma, b.gamma);
});

test('strict domains, continuous interpolation and caller ownership preserve the shared host contract', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('model timer'),
    requestAnimationFrame: () => assert.fail('model clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/physics-bridges.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasPhysicsBridges);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p),
      c = M.controls(slug)[0];
    for (const bad of [
      null,
      [],
      { ...p, extra: 1 },
      { ...p, [c.key]: true },
      { ...p, [c.key]: '2' },
      { ...p, [c.key]: NaN },
      { ...p, [c.key]: Infinity },
      { ...p, [c.key]: c.min - 0.001 },
      { ...p, [c.key]: c.max + 0.001 }
    ]) {
      assert.equal(M.evaluate(slug, bad).status, 'invalid_parameters');
      assert.equal(M.evaluate(slug, bad).output, null);
    }
    assert.equal(M.evaluate(slug, {}).valid, true);
    assert.equal(M.canInterpolate(slug, p, { ...p, [c.key]: (c.min + c.max) / 2 }), true);
    assert.equal(M.canInterpolate(slug, p, { ...p, [c.key]: c.max + 1 }), false);
    M.controls(slug)[0].min = -99;
    assert.equal(M.controls(slug)[0].min, c.min);
    M.render(slug, p);
    assert.deepEqual(p, before);
    for (const key of ['constructor', '__proto__', 'toString']) assert.equal(M.has(key), false);
    const readout = M.specs(slug).readout(p, M.evaluate(slug, p));
    assert.ok(readout.insight && readout.expression && readout.stats.length > 0);
  }
  assert.equal(M.render('missing', {}), '');
  assert.equal(M.evaluate('missing', {}).status, 'invalid_parameters');
});

test('measured photon waves and energy bars use fixed independent physical scales at both widths', () => {
  for (const compact of [false, true])
    for (const wavelength of [400, 550, 800]) {
      const r = M.evaluate('photon-energy', { wavelength }),
        html = M.render('photon-energy', { wavelength }, { compact, id: 'photon:slot' }),
        wave = role(html, 'wavelength-wave'),
        bar = role(html, 'energy-bar'),
        width = compact ? 288 : 688;
      near(Number(wave['data-nm-scale']), width / 1600);
      near(Number(bar.width), (width * r.output) / 3.5, 3e-6);
      assert.equal(Number(bar['data-maximum']), 3.5);
      assert.match(html, /Wave height is not brightness or energy/);
    }
});

test('two clock-event bars share one seconds ruler, keep proper time fixed and preserve pinned parameters', () => {
  for (const compact of [false, true]) {
    const p = { speedFraction: 0.8, properDuration: 3 },
      before = structuredClone(p),
      baseline = { speedFraction: 0.6, properDuration: 4 },
      stored = structuredClone(baseline),
      r = M.evaluate('time-dilation', p),
      html = M.render('time-dilation', p, { compact, baseline, id: 'clock:slot' }),
      a = role(html, 'proper-interval'),
      b = role(html, 'coordinate-interval'),
      width = compact ? 288 : 688;
    near(Number(a.width), (width * p.properDuration) / 35, 3e-6);
    near(Number(b.width), (width * r.output) / 35, 3e-6);
    near(Number(b.width) / Number(a.width), r.gamma, 3e-6);
    assert.deepEqual(p, before);
    assert.deepEqual(baseline, stored);
    assert.match(html, /same two clock events/);
  }
});

test('all bound physical symbols and scalar story stages reach actual geometry marks', () => {
  const data = JSON.parse(
    fs.readFileSync(
      new URL('../content/planning/physics-bridge-integration.json', import.meta.url),
      'utf8'
    )
  );
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      values = { ...p, ...M.evaluate(slug, p) },
      story = S.forSlug(slug),
      html = M.render(slug, p, { compact: true });
    assert.deepEqual(story.parameters, p);
    assert.deepEqual(
      story.calculation.map(x => x.role),
      ['input', 'intermediate', 'output']
    );
    const marked = new Set(
      [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/))
    );
    for (const keys of Object.values(data.bindings[slug]))
      for (const key of keys) {
        assert.ok(Object.hasOwn(values, key), slug + ' model ' + key);
        assert.ok(S.quantityFor(slug, key), slug + ' meaning ' + key);
        assert.ok(marked.has(key), slug + ' mark ' + key);
      }
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Number.isFinite(values[key]) || typeof values[key] === 'string');
        assert.ok(S.quantityFor(slug, key));
      }
    for (const key of ['constructor', '__proto__', 'toString'])
      assert.equal(S.quantityFor(slug, key), null);
  }
});

test('actual preview quantities, fixed graph bounds and script namespaces remain finite and independent', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      preview = P.draw(slug, p, r);
    assert.ok(preview.includes('data-preview-quantity="output" data-value="' + r.output + '"'));
    assert.ok(P.list().includes(slug));
    for (const [, size] of preview.matchAll(/font-size="([^"]+)"/g)) assert.ok(Number(size) >= 13);
    for (const [, y] of preview.matchAll(/<text[^>]* y="([^"]+)"/g))
      assert.ok(Number(y) <= 185 || Number(y) === 216);
    for (const compact of [false, true]) {
      const options = { compact, view: 'graph', sceneControl: false, id: 'left:' + slug };
      const graph = M.render(slug, p, options),
        geometry = M.render(slug, p, { ...options, view: 'geometry' });
      assert.notEqual(graph, geometry);
      assert.doesNotMatch(graph + geometry, /NaN|Infinity|undefined/);
      assert.equal(graph, M.render(slug, p, options));
      assert.notEqual(
        geometry,
        M.render(slug, p, { ...options, view: 'geometry', id: 'right:' + slug })
      );
    }
    for (const e of T.entries.filter(x => x.grammarCards?.includes(slug)))
      assert.ok(e.formulaCards?.includes(slug));
  }
  const ids = new Set(T.entries.map(e => e.id));
  assert.equal(ids.size, T.entries.length);
  for (const e of T.entries) assert.ok(e.sourceKeys.every(k => T.sources[k]));
});
