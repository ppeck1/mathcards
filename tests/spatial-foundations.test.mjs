import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const M = require('../src/spatial-foundations.js'),
  S = require('../src/spatial-foundation-stories.js'),
  P = require('../src/spatial-foundation-previews.js'),
  T = require('../src/spatial-foundation-terms.js');
const delta = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/spatial-foundation-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const near = (a, b, t = 1e-10) =>
  assert.ok(Number.isFinite(a) && Math.abs(a - b) <= t * Math.max(1, Math.abs(b)), `${a} ≈ ${b}`);
const nearVector = (a, b) => a.forEach((v, i) => near(v, b[i]));
const evaluate = (slug, patch = {}) => M.evaluate(slug, { ...M.defaults(slug), ...patch });
const attributes = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));

test('all six families have immutable independent controls and no load-time clock', () => {
  assert.equal(M.ids.length, 6);
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('provider timer'),
    requestAnimationFrame: () => assert.fail('provider animation')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/spatial-foundations.js', import.meta.url), 'utf8'),
    context
  );
  assert.equal(context.AtlasSpatialFoundations.ids.length, 6);
  for (const slug of M.ids) {
    const a = M.defaults(slug),
      b = M.defaults(slug),
      controls = M.controls(slug),
      before = structuredClone(b);
    assert.notEqual(a, b);
    a[controls[0].key] = 99;
    assert.deepEqual(b, before);
    controls[0].min = 99;
    assert.notEqual(M.controls(slug)[0].min, 99);
    assert.equal(evaluate(slug).valid, true);
    assert.deepEqual(M.specs(slug).views, ['geometry', 'graph']);
    assert.equal(M.validateParams(slug, { ...b, unrecognized: 1 }).valid, false);
    assert.equal(M.validateParams(slug, { ...b, [M.specs(slug).axis]: '1' }).valid, false);
    assert.equal(M.validateParams(slug, null).valid, false);
    assert.equal(M.validateParams(slug, []).valid, false);
  }
  for (const bad of ['constructor', '__proto__', 'toString', null, {}])
    assert.equal(M.has(bad), false);
});

test('cross-product components satisfy orientation, orthogonality and the area identity', () => {
  for (const u of [
    [2, 1, 1],
    [1, 0, 0],
    [0, 0, 0],
    [-2, 2, -1]
  ])
    for (const v of [
      [1, 2, -1],
      [0, 0, 2],
      [0, 0, 0],
      [-1, 1, 2]
    ]) {
      const p = { ux: u[0], uy: u[1], uz: u[2], vx: v[0], vy: v[1], vz: v[2] },
        r = M.evaluate('spatial-cross-product', p);
      near(M.dot(r.normal, u), 0);
      near(M.dot(r.normal, v), 0);
      near(r.output ** 2, M.dot(u, u) * M.dot(v, v) - M.dot(u, v) ** 2);
      near(r.triangleArea, r.output / 2);
      nearVector(
        M.cross(v, u),
        r.normal.map(x => -x)
      );
    }
  const vertical = evaluate('spatial-cross-product', { ux: 1, uy: 0, uz: 0, vx: 0, vy: 0, vz: 2 });
  assert.deepEqual(vertical.normal, [0, -2, 0]);
  near(vertical.output, 2);
  assert.equal(
    evaluate('spatial-cross-product', { ux: 0, uy: 0, uz: 0 }).normalLabel,
    'No normal direction'
  );
});

test('triple products distinguish orientation, volume, shear and a collapsed base', () => {
  for (const a of [0, 1, 3])
    for (const b of [0, 2, 3])
      for (const h of [-2, 0, 1.5])
        for (const shear of [-2, 0, 2]) {
          const r = evaluate('scalar-triple-product', { length: a, width: b, height: h, shear });
          near(r.output, a * b * h);
          near(r.volume, Math.abs(a * b * h));
          const swapped = M.dot(r.v, M.cross(r.u, r.w));
          near(swapped, -r.output);
        }
  const p = M.defaults('scalar-triple-product');
  assert.notEqual(
    M.render('scalar-triple-product', p),
    M.render('scalar-triple-product', { ...p, shear: -2 })
  );
  assert.equal(
    evaluate('scalar-triple-product', { shear: -2 }).output,
    evaluate('scalar-triple-product').output
  );
});

test('passive frame rotation preserves length, reconstructs the vector and keeps its world arrow fixed', () => {
  for (const angle of [-180, -90, -17.5, 0, 30, 90, 180]) {
    const r = evaluate('coordinate-transformation', { angle });
    near(r.first ** 2 + r.second ** 2, 5);
    near(r.reconstructedX, 2);
    near(r.reconstructedY, 1);
  }
  const quarter = evaluate('coordinate-transformation', { angle: 90 });
  near(quarter.output, 1);
  near(quarter.second, -2);
  const mark = p =>
    M.render('coordinate-transformation', p, { compact: true }).match(
      /<g class="story-cue" data-quantity="x y norm"[\s\S]*?<\/g>/
    )[0];
  const p = M.defaults('coordinate-transformation');
  assert.equal(mark(p), mark({ ...p, angle: 90 }));
  assert.equal(
    M.validateParams('coordinate-transformation', { ...p, angle: 30.5 }).valid,
    true,
    'a one-degree input step does not make frame angle mathematically discrete'
  );
});

test('projection is orthogonal, sign-aware, scale-invariant and robust for tiny guide vectors', () => {
  const r = evaluate('vector-projection');
  nearVector(r.projection, [1.5, 1.5, 0]);
  nearVector(r.residual, [0.5, -0.5, 1]);
  near(M.dot(r.residual, r.v), 0);
  near(M.dot(r.u, r.u), M.dot(r.projection, r.projection) + M.dot(r.residual, r.residual));
  const scaled = evaluate('vector-projection', { vx: 2, vy: 2 }),
    reversed = evaluate('vector-projection', { vx: -1, vy: -1 });
  nearVector(scaled.projection, r.projection);
  nearVector(reversed.projection, r.projection);
  near(reversed.output, -r.output);
  const tiny = evaluate('vector-projection', { vx: Number.MIN_VALUE, vy: Number.MIN_VALUE, vz: 0 });
  assert.equal(tiny.valid, true);
  near(tiny.output, r.output);
  nearVector(tiny.projection, r.projection);
  const zero = evaluate('vector-projection', { vx: 0, vy: 0, vz: 0 });
  assert.equal(zero.status, 'undefined_direction');
  assert.equal(zero.output, null);
  const html = M.render('vector-projection', zero.parameters, { view: 'graph', compact: true });
  assert.match(html, /Choose a nonzero reference/);
  assert.doesNotMatch(html, /<path|NaN|Infinity|role="slider"/);
});

test('nonzero magnitudes below machine range are not silently presented as geometric zeros', () => {
  const states = [
    [
      'spatial-cross-product',
      { ux: Number.MIN_VALUE, uy: 0, uz: 0, vx: 0, vy: Number.MIN_VALUE, vz: 0 }
    ],
    ['scalar-triple-product', { length: Number.MIN_VALUE, width: Number.MIN_VALUE, height: 1 }],
    ['angular-velocity', { radius: Number.MIN_VALUE, omega: Number.MIN_VALUE }],
    ['linear-momentum', { mass: 0.5, vx: Number.MIN_VALUE, vy: 0 }]
  ];
  for (const [slug, p] of states) {
    const r = evaluate(slug, p);
    assert.equal(r.status, 'numeric_precision', slug);
    assert.equal(r.output, null);
    assert.equal(r.valid, false);
    assert.doesNotMatch(M.render(slug, r.parameters, { compact: true }), /NaN|Infinity/);
  }
});

test('constant angular rate gives tangent velocity while speed stays nonnegative', () => {
  for (const omega of [-4, -1.5, 0, 2, 4])
    for (const radius of [0, 0.5, 2]) {
      const r = evaluate('angular-velocity', { omega, radius, time: 1.2 });
      near(r.output, Math.abs(omega) * radius);
      near(Math.hypot(r.velocityX, r.velocityY), r.output);
      near(r.x * r.velocityX + r.y * r.velocityY, 0);
      const h = 1e-6,
        a = evaluate('angular-velocity', { omega, radius, time: 1.2 - h }),
        b = evaluate('angular-velocity', { omega, radius, time: 1.2 + h });
      near((b.x - a.x) / (2 * h), r.velocityX, 1e-8);
      near((b.y - a.y) / (2 * h), r.velocityY, 1e-8);
    }
  for (const patch of [{ omega: 0 }, { radius: 0 }]) {
    const p = { ...M.defaults('angular-velocity'), ...patch },
      r = M.evaluate('angular-velocity', p),
      html = M.render('angular-velocity', p, { compact: true });
    assert.equal(r.directionLabel, 'Zero velocity');
    const group = html.match(
      /<g class="story-cue" data-quantity="time radius omega velocityX velocityY output"[\s\S]*?<\/g>/
    )[0];
    assert.doesNotMatch(group, /<path/, 'zero velocity is a point, not a nonzero arrow head');
  }
});

test('momentum uses mass times signed velocity and keeps arrow scales separate', () => {
  const base = evaluate('linear-momentum'),
    heavy = evaluate('linear-momentum', { mass: 4 }),
    reverse = evaluate('linear-momentum', { vx: -1, vy: -1 });
  near(heavy.output, 2 * base.output);
  near(heavy.px, 2 * base.px);
  near(heavy.py, 2 * base.py);
  near(reverse.output, base.output);
  near(reverse.px, -base.px);
  near(reverse.py, -base.py);
  assert.equal(evaluate('linear-momentum', { vx: 0, vy: 0 }).output, 0);
  const html = M.render('linear-momentum', M.defaults('linear-momentum'), { compact: true });
  assert.match(html, /24 px per m\/s/);
  assert.match(html, /4\.8 px per kg·m\/s/);
});

test('all boundary scenes remain finite, immutable, scoped and distinct from their graphs', () => {
  const allIds = new Set();
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      states = [
        p,
        ...M.controls(slug).flatMap(c => [
          { ...p, [c.key]: c.min },
          { ...p, [c.key]: c.max }
        ])
      ];
    for (const input of states) {
      const before = structuredClone(input);
      for (const compact of [false, true])
        for (const view of ['geometry', 'graph']) {
          const html = M.render(slug, input, { compact, view, id: 'test_' + slug });
          assert.doesNotMatch(html, /NaN|Infinity/);
          assert.match(html, /<svg/);
          assert.deepEqual(input, before);
          for (const [tag] of html.matchAll(/<(?:circle|rect)\b[^>]*>/g)) {
            const a = attributes(tag);
            for (const key of ['x', 'y', 'width', 'height', 'cx', 'cy', 'r'])
              if (key in a) assert.ok(Number.isFinite(+a[key]));
            for (const key of ['width', 'height', 'r']) if (key in a) assert.ok(+a[key] >= 0);
          }
        }
    }
    const geometry = M.render(slug, p, { id: 'first_' + slug }),
      graph = M.render(slug, p, { view: 'graph', id: 'second_' + slug });
    assert.notEqual(geometry, graph);
    for (const html of [geometry, graph])
      for (const [, id] of html.matchAll(/\bid="([^"]+)"/g)) {
        assert.equal(allIds.has(id), false);
        allIds.add(id);
      }
    const pinned = M.render(slug, p, {
      view: 'graph',
      baseline: {
        ...p,
        [M.specs(slug).axis]: M.controls(slug).find(c => c.key === M.specs(slug).axis).min
      }
    });
    assert.match(pinned, /Pinned result/);
  }
});

test('canonical fixtures agree with independent rational, complex and high-precision references', () => {
  const rows = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => ({ slug: card.slug, input: c.input, expected: c }))
  );
  const script =
    "import json,sys;sys.path.insert(0,sys.argv[1]);from spatial_foundation_reference import compute;rows=json.load(sys.stdin);print(json.dumps([compute(r['slug']+'-visual-model',r['input']) for r in rows]))";
  const references = JSON.parse(
    execFileSync(
      'python',
      ['-X', 'utf8', '-c', script, fileURLToPath(new URL('../tools/', import.meta.url))],
      { input: JSON.stringify(rows), encoding: 'utf8' }
    )
  );
  rows.forEach((row, i) => {
    const actual = M.evaluate(row.slug, row.input),
      reference = references[i];
    assert.equal(actual.status, reference.status, row.slug);
    assert.equal(actual.status, row.expected.status, row.slug);
    if (actual.valid) {
      near(actual.output, reference.output);
      near(actual.output, row.expected.output);
    }
  });
});

test('every story has three actual calculation phases, readable quantity metadata and safe lookups', () => {
  for (const story of S.all()) {
    assert.equal(story.calculation.length, 3);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    const p = story.parameters,
      r = M.evaluate(story.slug, p),
      values = { ...p, ...r };
    for (const template of [
      ...story.steps.flatMap(s => [s.body, s.formula]),
      ...story.calculation.map(c => c.template)
    ])
      for (const [, key] of template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), story.slug + ': ' + key);
        const q = S.quantityFor(story.slug, key);
        assert.ok(q);
        assert.ok(Object.isFrozen(q));
        assert.ok(q.label.length > 4 && q.label !== key);
        assert.ok(q.description.length > 40);
      }
    for (const key of ['constructor', '__proto__', 'toString', 'not-a-key'])
      assert.equal(S.quantityFor(story.slug, key), null);
  }
  for (const slug of ['constructor', '__proto__', 'unknown']) {
    assert.equal(S.linksFor(slug), null);
    assert.equal(S.quantityFor(slug, 'constructor'), null);
  }
});

test('all declared grammar quantities bind to their actual scene objects and typed ports', () => {
  for (const card of cards) {
    const slug = card.slug,
      html = M.render(slug, M.defaults(slug), { sceneControl: false }),
      marks = new Set(
        [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/))
      );
    assert.deepEqual(
      new Set(Object.keys(delta.bindings[slug])),
      new Set(card.grammar.symbols.map(s => s.token))
    );
    for (const symbol of card.grammar.symbols) {
      const keys = delta.bindings[slug][symbol.token];
      assert.ok(keys.length);
      for (const key of keys) assert.ok(marks.has(key), slug + ' ' + symbol.token + ' → ' + key);
    }
    for (const control of card.interactive.controls)
      assert.ok(delta.ports[slug].some(p => p.direction === 'input' && p.key === control.id));
    assert.ok(delta.ports[slug].some(p => p.direction === 'output' && p.key === 'output'));
  }
  const framePorts = delta.ports['coordinate-transformation'].filter(
    p => p.direction === 'output' && ['output', 'second'].includes(p.key)
  );
  assert.ok(framePorts.every(p => p.type === 'rotated-frame-component'));
});

test('static previews carry actual default output, readable text and one separate caption', () => {
  assert.deepEqual(P.list(), M.ids);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      html = P.draw(slug, p, r);
    assert.ok(P.describe(slug, p, r).length > 70);
    assert.doesNotMatch(html, /NaN|Infinity|data-drag-|<script|<input|role="slider"/);
    const caption = [...html.matchAll(/<g data-preview-layer="caption">[\s\S]*?<\/g>/g)];
    assert.equal(caption.length, 1);
    const out = html.match(/data-preview-quantity="output" data-value="([^"]+)"/);
    assert.ok(out);
    near(+out[1], r.output);
    const art = html.replace(caption[0][0], '');
    for (const [tag] of art.matchAll(/<text\b[^>]*>/g)) {
      const a = attributes(tag);
      assert.ok(+a['font-size'] >= 13);
      assert.ok(+a.y + +a['font-size'] / 4 <= 188, slug);
    }
  }
});

test('each new reference term retains primary sources and local notation scopes', () => {
  assert.equal(new Set(T.entries.map(e => e.id)).size, T.entries.length);
  for (const term of T.entries) {
    assert.ok(term.definition.length > 70);
    assert.ok(term.sourceKeys.every(k => T.sources[k]?.url.startsWith('https://')));
    assert.ok(term.grammarCards.every(s => M.has(s)));
  }
  assert.match(
    T.entries.find(e => e.id === 'coordinate-transformation').definition,
    /do not denote derivatives/
  );
  assert.match(T.entries.find(e => e.id === 'momentum-mass').definition, /distinct from the metre/);
});

test('all six canonical definitions compile to structured annotated native MathML', () => {
  const data = require('../tools/build_mathml.cjs').compile(cards);
  assert.equal(Object.keys(data.bySlug).length, 6);
  for (const card of cards) {
    assert.match(data.bySlug[card.slug], /<math/);
    assert.match(data.bySlug[card.slug], /application\/x-tex/);
  }
  assert.match(data.bySlug['coordinate-transformation'], /<mtable/);
  assert.match(data.bySlug['vector-projection'], /<mfrac/);
});
