import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const spatial = require('../src/spatial.js');
const slugs = ['function-composition', 'real-logarithm', 'derivative'];
const near = (actual, expected, tolerance = 1e-9) => assert.ok(Math.abs(actual - expected) <= tolerance, `${actual} ≈ ${expected}`);
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(([, key, value]) => [key, value]));
const roles = (html, role) => (html.match(/<[^>]+>/g) || []).map(attrs).filter(a => a['data-role'] === role);
const render = (slug, parameters = {}, options = {}) => spatial.render(slug, { ...models.defaults(slug), ...parameters }, { id: 'test-spatial', ...options });

function finiteDrawing(html) {
  assert.equal(typeof html, 'string');
  assert.match(html, /<svg\b/);
  for (const tag of html.match(/<[^>]+>/g) || []) {
    assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/, tag);
  }
  for (const role of ['magnitude-volume', 'pinned-volume', 'exponent-sample', 'current-argument', 'pinned-argument']) {
    for (const a of roles(html, role)) {
      assert.ok(Number.isFinite(Number(a['data-value'])));
      for (const key of ['data-side', 'data-height', 'data-exponent']) {
        if (Object.hasOwn(a, key)) assert.ok(Number.isFinite(Number(a[key])), key);
      }
    }
  }
}

test('spatial scenes load as offline classic scripts with only the mathematical model dependency', () => {
  const context = vm.createContext({});
  for (const filename of ['models.js', 'spatial.js']) {
    vm.runInContext(fs.readFileSync(new URL(`../src/${filename}`, import.meta.url), 'utf8'), context);
  }
  for (const slug of slugs) finiteDrawing(context.AtlasSpatial.render(slug, context.AtlasModels.defaults(slug), { id: slug }));
});

test('cube volume encodes magnitude, preserving zero and equal positive/negative magnitudes', () => {
  const values = Object.freeze([0, 1, 8, 27, -64, 64]);
  const geometry = spatial.volumeGeometry(values, 120);
  assert.equal(geometry.maximum, 64);
  assert.equal(geometry.sides[0], 0);
  assert.equal(geometry.sides[4], geometry.sides[5]);
  near(Math.max(...geometry.sides), 120);
  const unitVolume = geometry.sides[1] ** 3;
  geometry.sides.forEach((side, index) => {
    assert.ok(Number.isFinite(side) && side >= 0);
    near(side ** 3 / unitVolume, Math.abs(values[index]));
  });
  assert.deepEqual(spatial.volumeGeometry([0, 0, 0]).sides, [0, 0, 0]);
  for (const side of spatial.volumeGeometry([Number.MIN_VALUE, Number.MAX_VALUE, -Number.MAX_VALUE]).sides) {
    assert.ok(Number.isFinite(side) && side >= 0 && side <= 88);
  }
  const extreme = spatial.volumeGeometry([Number.MIN_VALUE, Number.MAX_VALUE]);
  assert.ok(extreme.sides[0] > 0, 'A representable cube side survives even when value/maximum underflows');
  near(Math.log(extreme.sides[0]), Math.log(88) + (Math.log(Number.MIN_VALUE) - Math.log(Number.MAX_VALUE)) / 3, 1e-10);
});

test('current and pinned cubes use one common volume scale including the sweep reference', () => {
  const slug = 'function-composition';
  const parameters = { ...models.defaults(slug), x: 1 };
  const baseline = { ...models.defaults(slug), x: 2 };
  const reference = { ...models.defaults(slug), x: 4 };
  const html = render(slug, parameters, { baseline, reference });
  finiteDrawing(html);
  const current = roles(html, 'magnitude-volume');
  const pinned = roles(html, 'pinned-volume');
  assert.equal(current.length, 3);
  assert.equal(pinned.length, 3);
  assert.deepEqual(current.map(a => Number(a['data-value'])), [1, 3, 9]);
  assert.deepEqual(pinned.map(a => Number(a['data-value'])), [2, 5, 25]);
  const volumePerUnit = 88 ** 3 / 81;
  for (const cube of [...current, ...pinned]) {
    near(Number(cube['data-side']) ** 3 / Math.abs(Number(cube['data-value'])), volumePerUnit, 1e-8);
  }
  assert.match(html, /Volume = magnitude/);
  assert.match(html, /side lengths are cube roots/);
});

test('composition volume stages follow operation order and retain explicit sign and zero', () => {
  const slug = 'function-composition';
  for (const order of ['f_after_g', 'g_after_f']) {
    const parameters = { ...models.defaults(slug), x: -2, m: 2, n: 0, a: -1, order };
    const result = models.evaluate(slug, parameters);
    const html = render(slug, parameters);
    const values = Object.fromEntries(roles(html, 'magnitude-volume').map(a => [a['data-stage'], Number(a['data-value'])]));
    assert.deepEqual(values, { input: parameters.x, intermediate: result.intermediate, output: result.output });
    assert.ok(roles(html, 'magnitude-volume').every(a => a['data-sign'] === 'negative'));
    assert.match(html, /NEGATIVE/);
    assert.match(html, /url\(#test-spatial-hatch\)|url\(#spatial-test-spatial-hatch\)/);
    finiteDrawing(html);
  }
  const zero = render(slug, { x: 0, m: 0, n: 0, a: 0 });
  assert.ok(roles(zero, 'magnitude-volume').every(a => Number(a['data-side']) === 0));
  assert.ok(roles(zero, 'magnitude-volume').every(a => a['data-sign'] === 'zero'));
  assert.match(zero, /zero volume/);
});

test('logarithm columns sample true powers at equal exponent intervals and one linear height scale', () => {
  const slug = 'real-logarithm';
  for (const base of [2, 10, 0.5, 1.25, 1 + Number.EPSILON, 1 - Number.EPSILON]) {
    const current = models.evaluate(slug, { base, argument: 8 });
    const geometry = spatial.logarithmGeometry(current);
    const step = geometry.samples[1].exponent - geometry.samples[0].exponent;
    for (let index = 0; index < geometry.samples.length; index++) {
      const sample = geometry.samples[index];
      near(Math.log(sample.argument), sample.exponent * Math.log(base), 1e-12);
      near(sample.height / sample.argument, 154 / geometry.maximum, 1e-10);
      if (index > 0) near((sample.exponent - geometry.samples[index - 1].exponent) / step, 1, 1e-12);
    }
    near(geometry.height(8), 154);
    const differences = geometry.samples.slice(1).map((s, i) => s.height - geometry.samples[i].height);
    assert.ok(differences.every(d => base > 1 ? d > 0 : d < 0), 'Bases below one reverse the direction of growth');
  }
});

test('pinned logarithm argument heights share the current and reference scale despite different bases', () => {
  const slug = 'real-logarithm';
  const current = { base: 2, argument: 2 };
  const baseline = { base: 10, argument: 8 };
  const reference = { base: 0.5, argument: 64 };
  const html = render(slug, current, { baseline, reference });
  const a = roles(html, 'current-argument')[0];
  const b = roles(html, 'pinned-argument')[0];
  near(Number(a['data-height']), 154 * 2 / 64);
  near(Number(b['data-height']), 154 * 8 / 64);
  near(Number(a['data-exponent']), 1);
  near(Number(b['data-exponent']), Math.log(8) / Math.log(10));
  assert.match(html, /original base/);
  for (const sample of roles(html, 'exponent-sample')) {
    near(Math.log(Number(sample['data-value'])), Number(sample['data-exponent']) * Math.log(2), 1e-12);
    near(Number(sample['data-height']), Number(sample['data-value']) / 64 * 154, 1e-10);
  }
});

test('extreme finite logarithms keep samples, highlights, and pinned heights drawable', () => {
  const slug = 'real-logarithm';
  for (const [base, argument] of [
    [2, Number.MIN_VALUE], [2, Number.MAX_VALUE],
    [Number.MIN_VALUE, Number.MIN_VALUE], [Number.MAX_VALUE, Number.MAX_VALUE],
    [1 + Number.EPSILON, Number.MAX_VALUE], [1 - Number.EPSILON, Number.MIN_VALUE]
  ]) {
    const result = models.evaluate(slug, { base, argument });
    const geometry = spatial.logarithmGeometry(result, [models.evaluate(slug, { base: 2, argument: Number.MAX_VALUE })]);
    assert.ok(Number.isFinite(geometry.maximum));
    assert.ok(Number.isFinite(geometry.emin));
    assert.ok(Number.isFinite(geometry.emax));
    for (const sample of geometry.samples) {
      assert.ok(Number.isFinite(sample.exponent));
      assert.ok(Number.isFinite(sample.argument) && sample.argument > 0);
      assert.ok(Number.isFinite(sample.height) && sample.height >= 0 && sample.height <= 154.000001);
    }
    finiteDrawing(render(slug, { base, argument }, { baseline: { base: 2, argument: Number.MAX_VALUE } }));
  }
  const tiny = models.evaluate(slug, { base: 2, argument: 1e-170 });
  const vast = models.evaluate(slug, { base: 2, argument: 1e155 });
  const retainedHeight = spatial.logarithmGeometry(tiny, [vast]).height(tiny.parameters.argument);
  assert.ok(retainedHeight > 0 && retainedHeight < 1e-320, 'A representable subnormal column height survives an underflowing intermediate ratio');
});

test('derivative depth repeats the curve while the local triangle preserves actual signed rise/run', () => {
  for (const parameters of [
    { preset: 'cubic', a: 2, h: 0.1 }, { preset: 'cubic', a: 2, h: -1e-14 },
    { preset: 'linear', a: -2, h: -0.2 }, { preset: 'absolute', a: 0, h: -0.1 }
  ]) {
    const result = models.evaluate('derivative', parameters);
    const html = render('derivative', parameters);
    assert.match(html, /Depth is a viewing aid/);
    assert.match(html, /no additional variable/);
    assert.equal(roles(html, 'function-ribbon').length, 1);
    near(Number(roles(html, 'secant-ribbon')[0]['data-slope']), result.output, 1e-12);
    if (result.analytic !== null) near(Number(roles(html, 'tangent-ribbon')[0]['data-slope']), result.analytic, 1e-12);
    const triangle = roles(html, 'local-rise-run')[0];
    assert.ok(triangle);
    near(Number(triangle['data-run']), parameters.h, 1e-20);
    near(Number(triangle['data-rise']), result.output * parameters.h, 1e-12);
    const [a, corner, b] = triangle.points.split(' ').map(point => point.split(',').map(Number));
    near((a[1] - b[1]) / (corner[0] - a[0]), result.output, 0.001);
    assert.ok(Math.max(Math.abs(corner[0] - a[0]), Math.abs(a[1] - b[1])) > 96, 'Tiny steps remain visible in the local zoom');
    finiteDrawing(html);
  }
  const collapsed = render('derivative', { h: 0 });
  assert.equal(roles(collapsed, 'secant-ribbon').length, 0);
  assert.equal(roles(collapsed, 'local-rise-run').length, 0);
  assert.equal(roles(collapsed, 'tangent-ribbon').length, 1);
  assert.match(collapsed, /secant quotient is undefined/);
  const corner = render('derivative', { preset: 'absolute', a: 0, h: 0.1 });
  assert.equal(roles(corner, 'tangent-ribbon').length, 0);
  assert.match(corner, /two-sided derivative does not exist/);
});

test('camera changes projected geometry while preserving every encoded mathematical value', () => {
  for (const slug of slugs) {
    const values = [0, 1].map(camera => render(slug, {}, { camera }));
    assert.notEqual(values[0], values[1]);
    const encoded = html => (html.match(/<[^>]+>/g) || []).map(attrs)
      .filter(a => a['data-role'])
      .map(a => Object.fromEntries(Object.entries(a).filter(([key]) => key.startsWith('data-'))));
    assert.deepEqual(encoded(values[0]), encoded(values[1]));
    const front = roles(values[0], 'function-ribbon')[0];
    const rear = roles(values[1], 'function-ribbon')[0];
    if (front && rear) {
      const frontPoints = front.points.split(' '), rearPoints = rear.points.split(' ');
      const half = frontPoints.length / 2;
      assert.deepEqual(frontPoints.slice(0, half), rearPoints.slice(0, half), 'Changing the camera leaves front mathematical axes unchanged');
      assert.notDeepEqual(frontPoints.slice(half), rearPoints.slice(half), 'Only the projected copy moves in depth');
    }
  }
  near(spatial.projection(-1).horizontal, spatial.projection(0).horizontal);
  near(spatial.projection(2).horizontal, spatial.projection(1).horizontal);
  assert.deepEqual(spatial.projection(NaN), spatial.projection());
});

test('each valid spatial scene exposes a bounded keyboard-accessible parameter handle', () => {
  for (const [slug, parameter] of [['function-composition', 'x'], ['real-logarithm', 'argument'], ['derivative', 'a']]) {
    const html = render(slug);
    const handles = (html.match(/<[^>]+>/g) || []).map(attrs).filter(a => a['data-drag-param']);
    assert.ok(handles.length > 0);
    const handle = handles.find(a => a['data-drag-param'] === parameter);
    assert.ok(handle);
    assert.equal(handle.role, 'slider');
    assert.equal(handle.tabindex, '0');
    assert.ok(handle['aria-label'].length > 5);
    assert.equal(Number(handle['aria-valuenow']), models.defaults(slug)[parameter]);
    assert.equal(handle['aria-valuemin'], handle['data-drag-min']);
    assert.equal(handle['aria-valuemax'], handle['data-drag-max']);
    assert.ok(Number(handle['data-drag-min']) < Number(handle['data-drag-max']));
    assert.ok(Number(handle['data-drag-x0']) < Number(handle['data-drag-x1']));
  }
});

test('invalid parameters remove mathematical geometry and cannot preserve stale draggable values', () => {
  for (const [slug, parameters] of [
    ['function-composition', { x: NaN }], ['function-composition', { a: 6 }],
    ['real-logarithm', { base: 1 }], ['real-logarithm', { argument: 0 }],
    ['derivative', { h: Infinity }]
  ]) {
    const html = render(slug, parameters);
    finiteDrawing(html);
    assert.equal(roles(html, 'magnitude-volume').length, 0);
    assert.equal(roles(html, 'current-argument').length, 0);
    assert.equal(roles(html, 'function-ribbon').length, 0);
    assert.doesNotMatch(html, /data-drag-param=/);
    assert.match(html, /NO REAL VALUE HERE/);
  }
});

test('rendering is deterministic and immutable, and separate panels isolate SVG definitions', () => {
  const allIds = [];
  for (const slug of slugs) {
    const parameters = Object.freeze(models.defaults(slug));
    const baseline = Object.freeze({ ...parameters });
    const reference = Object.freeze({ ...parameters });
    const options = Object.freeze({ id: slug, baseline, reference, camera: 0.4 });
    const before = JSON.stringify({ parameters, options });
    const html = spatial.render(slug, parameters, options);
    assert.equal(html, spatial.render(slug, parameters, options));
    assert.equal(JSON.stringify({ parameters, options }), before);
    for (const id of [slug + '-left', slug + '-right']) {
      const drawing = spatial.render(slug, parameters, { ...options, id });
      const ids = [...drawing.matchAll(/\bid=["']([^"']+)["']/g)].map(([, value]) => value);
      const local = new Set(ids);
      assert.equal(local.size, ids.length);
      for (const [, ref] of drawing.matchAll(/url\(#([^)]*)\)/g)) assert.ok(local.has(ref), `Missing definition ${ref}`);
      allIds.push(...ids);
    }
  }
  assert.equal(new Set(allIds).size, allIds.length, 'Independent panels cannot reuse SVG definition IDs');
});
