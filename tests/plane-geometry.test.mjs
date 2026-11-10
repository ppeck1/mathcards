import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/plane-geometry.js');
const S = require('../src/plane-geometry-stories.js');
const P = require('../src/plane-geometry-previews.js');
const T = require('../src/plane-geometry-terms.js');
const near = (a, b, tolerance = 5e-11) =>
  assert.ok(
    Number.isFinite(a) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)),
    `${a} ≈ ${b}`
  );
const attrs = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const refs = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from plane_geometry_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
const area = points =>
  Math.abs(
    points.reduce((s, [x, y], i) => {
      const next = points[(i + 1) % points.length];
      return s + x * next[1] - y * next[0];
    }, 0)
  ) / 2;

test('four plane models match independent coordinate and root-solving references across canonical and boundary fixtures', () => {
  const cases = M.ids.flatMap(slug =>
    JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
    ).interactive.expected_cases.map(c => ({ slug, input: c.input, expected: c }))
  );
  const oracle = refs(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input),
      ref = oracle[i];
    assert.equal(r.status, ref.status);
    assert.equal(r.status, c.expected.status);
    if (!r.valid) return;
    for (const [key, value] of Object.entries(ref)) if (key !== 'status') near(r[key], value);
    near(r.output, c.expected.output);
  });
  assert.equal(cases.length, 111);
  assert.equal(refs([{ slug: 'not-a-plane-lesson', input: {} }])[0], null);
});

test('triangle area is shear invariant including an exterior height foot, while the perimeter changes', () => {
  const shape = M.evaluate('triangle-measurement', { base: 1, height: 2, skew: -2 });
  assert.ok(shape.apex < 0);
  near(shape.output, 1);
  near(area(shape.vertices), 1);
  const centered = M.evaluate('triangle-measurement', { base: 4, height: 2, skew: 0 }),
    shifted = M.evaluate('triangle-measurement', { base: 4, height: 2, skew: 2 });
  near(centered.area, shifted.area);
  assert.notEqual(centered.perimeter, shifted.perimeter);
  for (const base of [1, 3, 6])
    for (const height of [0.5, 2, 4])
      for (const skew of [-2, 0, 2]) {
        const r = M.evaluate('triangle-measurement', { base, height, skew });
        near(area(r.vertices), r.output);
        near(r.leftSide, Math.hypot(r.vertices[2][0], height));
        near(r.rightSide, Math.hypot(base - r.vertices[2][0], height));
      }
});

test('similarity keeps every side ratio and angle while scaling area quadratically', () => {
  for (const scale of [0.25, 0.5, 1, 1.25, 2]) {
    const r = M.evaluate('similar-triangles', { scale });
    near(r.base / 3, scale);
    near(r.height / 4, scale);
    near(r.hypotenuse / 5, scale);
    near(r.base ** 2 + r.height ** 2, r.hypotenuse ** 2);
    near(r.area / 6, scale ** 2);
    near(area(r.vertices), r.area);
    near(r.height / r.base, 4 / 3);
  }
});

test('two-point compass construction distinguishes the single tangent point and equal-distance invariant', () => {
  const tangent = M.evaluate('perpendicular-bisector', { radius: 2, distance: 4 });
  assert.equal(tangent.valid, true);
  assert.equal(tangent.intersectionCount, 1);
  assert.equal(tangent.height, 0);
  assert.equal(tangent.output, 0);
  assert.match(tangent.constructionState, /tangent/);
  for (const radius of [2, 2.025, 3, 4])
    for (const distance of [2, 3, 4]) {
      const r = M.evaluate('perpendicular-bisector', { radius, distance });
      near(Math.hypot(r.halfDistance, r.height), radius);
      near(r.output, 2 * r.height);
      assert.equal(r.intersectionCount, radius === distance / 2 ? 1 : 2);
    }
  const shape = M.render(
    'perpendicular-bisector',
    { radius: 2, distance: 4 },
    { compact: true, id: 'one' }
  );
  assert.equal((shape.match(/data-role="circle-intersection"/g) || []).length, 1);
  assert.doesNotMatch(shape, /<g data-quantity="separation output height"/);
  const close = { radius: 2, distance: 4 - Number.EPSILON * 2 };
  const actual = M.evaluate('perpendicular-bisector', close);
  const expected = refs([{ slug: 'perpendicular-bisector', input: close }])[0];
  near(actual.height, expected.height, 1e-15);
  assert.ok(actual.height > 0);
  assert.equal(actual.intersectionCount, 2);
});

test('ellipse boundary distances preserve the fixed string sum, including the circular case and parameter endpoints', () => {
  for (const major of [3, 4, 5])
    for (const focus of [0, 1, 2])
      for (const angle of [0, Math.PI / 3, Math.PI / 2, Math.PI, 2 * Math.PI]) {
        const r = M.evaluate('ellipse-section', { major, focus, angle });
        near(r.pointX ** 2 / major ** 2 + r.pointY ** 2 / r.minor ** 2, 1);
        near(r.distanceSum, 2 * major);
        near(r.firstDistance, Math.hypot(r.pointX + focus, r.pointY));
        near(r.secondDistance, Math.hypot(r.pointX - focus, r.pointY));
        near(r.minor ** 2 + focus ** 2, major ** 2);
        if (focus === 0) {
          near(r.minor, major);
          near(r.firstDistance, major);
          near(r.secondDistance, major);
        }
      }
  const r = M.evaluate('ellipse-section', { major: 4, focus: 2, angle: Math.PI / 3 });
  assert.ok(
    Math.abs(Math.atan2(r.pointY, r.pointX) - Math.PI / 3) > 0.01,
    'ellipse parameter is not generally polar angle'
  );
});

test('strict parameters, caller isolation and script globals preserve the host contract without clocks', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout: () => assert.fail('provider clock'),
    requestAnimationFrame: () => assert.fail('provider clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/plane-geometry.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasPlaneGeometry);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      copy = structuredClone(p);
    for (const bad of [null, [], true, { ...p, unknown: 1 }])
      assert.equal(M.evaluate(slug, bad).status, 'invalid_parameters');
    for (const c of M.controls(slug)) {
      for (const bad of [c.min - 0.01, c.max + 0.01, NaN, Infinity, true, null, '2'])
        assert.equal(M.evaluate(slug, { ...p, [c.key]: bad }).valid, false);
      const shifted = { ...p, [c.key]: (c.min + c.max) / 2 };
      assert.equal(M.canInterpolate(slug, p, shifted), true);
      near(M.curveValue(slug, p, p[M.specs(slug).axis]), M.evaluate(slug, p).output);
    }
    M.render(slug, p);
    assert.deepEqual(p, copy);
    const c = M.controls(slug)[0];
    c.min = -100;
    assert.notEqual(M.controls(slug)[0].min, -100);
    assert.equal(M.evaluate(slug, {}).valid, true);
  }
  assert.equal(M.has('constructor'), false);
  assert.equal(M.evaluate('no', {}).valid, false);
  assert.equal(M.render('no', {}), '');
});

test('scene coordinates carry real area and length on fixed equal scales and independent slot IDs', () => {
  for (const compact of [false, true])
    for (const slug of M.ids) {
      const p = M.defaults(slug),
        r = M.evaluate(slug, p),
        o = { compact, id: 'slot/a', baseline: p },
        html = M.render(slug, p, o),
        second = M.render(slug, p, { ...o, id: 'slot?a' });
      assert.match(html, /data-story-part="input"/);
      assert.match(html, /data-story-part="output"/);
      assert.match(html, /data-quantity="[^"]*output/);
      assert.notEqual(
        html.match(/aria-labelledby="([^"]+)"/)[1],
        second.match(/aria-labelledby="([^"]+)"/)[1]
      );
      assert.doesNotMatch(html, /NaN|Infinity/);
      if (slug === 'triangle-measurement' || slug === 'similar-triangles') {
        const polygon = attrs(html.match(/<polygon data-role="measured-triangle"[^>]+>/)[0]);
        const vertices = polygon.points.split(' ').map(v => v.split(',').map(Number));
        near(area(vertices) / Number(polygon['data-scale']) ** 2, r.area, 1e-6);
      }
      if (slug === 'ellipse-section') {
        const ellipse = attrs(html.match(/<ellipse data-role="measured-ellipse"[^>]+>/)[0]);
        near(Number(ellipse.rx) / Number(ellipse['data-scale']), p.major);
        near(Number(ellipse.ry) / Number(ellipse['data-scale']), r.minor, 1e-6);
      }
      assert.match(M.render(slug, p, { ...o, view: 'graph' }), /relationship-graph/);
    }
});

test('all story scalar calculation bindings have readers and marked shapes, with rounded results clearly approximate', () => {
  for (const slug of M.ids) {
    const story = S.forSlug(slug),
      p = M.defaults(slug),
      r = M.evaluate(slug, p),
      html = M.render(slug, p),
      keys = new Set(
        [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(m => m[1].split(/\s+/))
      );
    assert.deepEqual(story.parameters, p);
    assert.equal(story.calculation.length, 3);
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{([^}]+)\}\}/g)) {
        const value = Object.hasOwn(r, key) ? r[key] : p[key];
        assert.ok(typeof value === 'number' || typeof value === 'string', slug + ' scalar ' + key);
        assert.ok(S.quantityFor(slug, key), slug + ' reader ' + key);
        assert.ok(keys.has(key), slug + ' shape mark ' + key);
      }
    assert.match(story.calculation[2].template, /≈/);
    assert.equal(S.forSlug('no'), null);
    assert.ok(S.linksFor(slug));
    assert.ok(Object.isFrozen(story));
  }
});

test('model-derived previews keep caption separation and scoped reference readers', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      svg = P.draw(slug, p, r);
    assert.match(svg, /data-preview-quantity="output"/);
    const art = svg.split('<g data-preview-layer="caption">')[0];
    for (const match of art.matchAll(/<text[^>]*>/g)) {
      const a = attrs(match[0]);
      assert.ok(Number(a['font-size']) >= 13);
      assert.ok(Number(a.y) + Number(a['font-size']) / 4 <= 188);
    }
    assert.match(svg, /y="216"/);
    assert.ok(P.describe(slug, p, r).includes(M.specs(slug).title));
    const symbolEntries = T.entries.filter(
      e => e.mathSymbols?.length && e.grammarCards?.includes(slug)
    );
    assert.ok(symbolEntries.length >= 4);
    assert.ok(symbolEntries.every(e => e.grammarCards.length === 1 && e.formulaCards.length === 1));
  }
  assert.equal(P.draw('no', {}, {}), '');
  assert.ok(Object.isFrozen(T));
});
