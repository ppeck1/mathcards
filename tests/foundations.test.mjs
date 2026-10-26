import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const F = require('../src/foundations.js');
const slugs = ['function', 'exponentiation', 'limit', 'signed-accumulation'];
const near = (actual, expected, tolerance = 1e-11) => assert.ok(Math.abs(actual - expected) <= Math.max(1, Math.abs(expected)) * tolerance, `${actual} ≈ ${expected}`);
const attrs = (html, role) => [...html.matchAll(/<[^>]+>/g)].filter(([tag]) => tag.includes(`data-role="${role}"`)).map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])));

test('four independent providers load offline with defaults, metadata, and select-safe sweeps', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/plot-view.js', import.meta.url), 'utf8'), context);
  vm.runInContext(fs.readFileSync(new URL('../src/foundations.js', import.meta.url), 'utf8'), context);
  for (const slug of slugs) {
    assert.equal(F.has(slug), true);
    const result = F.evaluate(slug, {}), metadata = F.specs(slug);
    assert.equal(result.status, 'valid');
    near(context.AtlasFoundations.evaluate(slug, {}).output, result.output);
    assert.equal(metadata.rendererId, slug + '-visual-model');
    assert.ok(metadata.expression && metadata.insight && metadata.primaryLabel);
    assert.equal(metadata.sweeps.length, F.controls(slug).filter(control => control.type !== 'select').length);
    for (const sweep of metadata.sweeps) assert.equal(typeof F.defaults(slug)[sweep.key], 'number');
  }
  const controls = F.controls('limit');
  controls.find(control => control.key === 'mode').options[0].value = 'changed';
  assert.equal(F.controls('limit').find(control => control.key === 'mode').options[0].value, 'removable');
  const defaults = F.defaults('function'); defaults.x = 99;
  assert.equal(F.defaults('function').x, 2);
  assert.equal(F.has('constructor'), false);
});

test('affine functions preserve their rule for signed and zero multipliers', () => {
  for (const x of [-5, -2.25, 0, 2, 5]) for (const a of [-3, 0, 2, 3]) for (const b of [-5, 1, 5]) {
    const result = F.evaluate('function', { x, a, b });
    near(result.input, x); near(result.scaled, a * x); near(result.output, a * x + b);
    near(F.curveValue('function', { a, b }, x), result.output);
  }
  near(F.evaluate('function', {}).output, 5);
  near(F.evaluate('function', { x: -2, a: 3, b: 1 }).output, -5);
  near(F.evaluate('function', { x: 4, a: 0, b: -3 }).output, -3);
  assert.equal(F.curveValue('function', {}, 5.1), null);
});

test('power fixtures distinguish growth, decay, fractional powers, and reciprocals', () => {
  const fixtures = [
    [{ base: 2, exponent: 3 }, 8, .125],
    [{ base: 2, exponent: -3 }, .125, 8],
    [{ base: .25, exponent: -.5 }, 2, .5],
    [{ base: .25, exponent: .5 }, .5, 2],
    [{ base: 3, exponent: 0 }, 1, 1],
    [{ base: 1, exponent: 4.72 }, 1, 1]
  ];
  for (const [parameters, output, reciprocal] of fixtures) {
    const result = F.evaluate('exponentiation', parameters);
    assert.equal(result.valid, true); near(result.output, output); near(result.reciprocal, reciprocal);
    near(result.output * result.reciprocal, 1);
  }
});

test('nonpositive bases are an explicit domain failure, never silently clamped', () => {
  for (const base of [-1, -.5, 0]) for (const exponent of [-2, 0, .5, 3]) {
    const result = F.evaluate('exponentiation', { base, exponent });
    assert.equal(result.valid, false); assert.equal(result.status, 'invalid_base'); assert.equal(result.output, null);
    assert.equal(result.parameters.base, base);
    assert.equal(F.curveValue('exponentiation', { base }, exponent), null);
    assert.match(F.render('exponentiation', { base, exponent }), /positive base/);
  }
  const tooSmall = F.evaluate('exponentiation', { base: Number.MIN_VALUE, exponent: -3 });
  assert.equal(tooSmall.status, 'numeric_range'); assert.equal(tooSmall.output, null);
  assert.match(F.render('exponentiation', { base: Number.MIN_VALUE, exponent: 0 }, { view: 'graph' }), /<svg/);
});

test('readouts name missing limits and separate distance, displacement, and finite sums', () => {
  for (const slug of slugs) {
    const p = F.defaults(slug), r = F.evaluate(slug, p), readout = F.specs(slug).readout(p, r, { format: String, view: 'geometry' });
    assert.ok(readout.expression && readout.insight && readout.stats.length === 3);
    for (const stat of readout.stats) assert.ok(stat.label && stat.note);
  }
  const p = { ...F.defaults('limit'), mode: 'jump' }, result = F.evaluate('limit', p);
  const jump = F.specs('limit').readout(p, result, { format: String });
  assert.match(jump.expression, /does not exist/); assert.doesNotMatch(jump.expression, /null/);
  assert.equal(jump.stats[2].value, p.a);
  const signed = F.specs('signed-accumulation').readout(F.defaults('signed-accumulation'), F.evaluate('signed-accumulation'), { format: String });
  assert.deepEqual(signed.stats.map(stat => stat.value), [0, 4, 1]);
});

test('removable limits separate finite probes, exact limit, and missing point', () => {
  for (const a of [-2, -.5, 0, 1, 2]) for (const h of [1, .25, .001]) {
    const result = F.evaluate('limit', { mode: 'removable', a, h });
    assert.equal(result.status, 'valid'); assert.equal(result.limitExists, true);
    assert.equal(result.functionAtPoint, null);
    near(result.leftX, a - h); near(result.rightX, a + h);
    near(result.leftValue, 2 * a - h); near(result.rightValue, 2 * a + h);
    near(result.leftLimit, 2 * a); near(result.rightLimit, 2 * a); near(result.output, 2 * a);
    near(result.gap, 2 * h);
    near((result.leftX ** 2 - a ** 2) / (result.leftX - a), result.leftValue, 1e-9);
  }
  const html = F.render('limit', {}, { view: 'graph' });
  assert.equal(attrs(html, 'open-point').length, 1);
  assert.equal(attrs(html, 'defined-point').length, 0);
  assert.equal(attrs(html, 'probe-point').length, 2);
});

test('jump limits keep disagreeing sides while the function remains defined at the point', () => {
  for (const a of [-2, 0, 1, 2]) for (const h of [1, .1, .001]) {
    const result = F.evaluate('limit', { mode: 'jump', a, h });
    assert.equal(result.valid, true); assert.equal(result.status, 'does_not_exist');
    assert.equal(result.output, null); assert.equal(result.limitExists, false);
    near(result.leftValue, a - 1); near(result.rightValue, a + 1); near(result.gap, 2);
    near(result.functionAtPoint, a);
    assert.equal(F.curveValue('limit', { mode: 'jump', a }, h), null);
  }
  const html = F.render('limit', { mode: 'jump' }, { view: 'graph' });
  assert.equal(attrs(html, 'open-point').length, 2);
  const point = attrs(html, 'defined-point')[0]; near(Number(point['data-x']), 1); near(Number(point['data-y']), 1);
  assert.doesNotMatch(html, /NaN|Infinity/);
});

test('signed accumulation counts return journeys as distance despite zero net displacement', () => {
  const result = F.evaluate('signed-accumulation', {});
  near(result.output, 0); near(result.netDisplacement, 0);
  near(result.positiveArea, 2); near(result.negativeArea, 2); near(result.signedNegativeArea, -2);
  near(result.distance, 4); near(result.leftSum, 1); near(result.rightSum, -1); near(result.midpointSum, 0);
  near(result.velocity, -2); near(result.finalVelocity, -2); near(result.step, .5); assert.equal(result.partitionCount, 8);
  const reverse = F.evaluate('signed-accumulation', { initial: -2, rate: 1 });
  near(reverse.output, 0); near(reverse.distance, 4); near(reverse.positiveArea, 2); near(reverse.negativeArea, 2);
});

test('signed and absolute integrals handle no crossing, endpoint crossings, and time zero', () => {
  const fixtures = [
    [{ initial: 3, rate: 0, time: 2 }, 6, 6, 0, 6],
    [{ initial: -3, rate: 0, time: 2 }, -6, 0, 6, 6],
    [{ initial: -4, rate: 2, time: 6 }, 12, 16, 4, 20],
    [{ initial: 4, rate: -2, time: 6 }, -12, 4, 16, 20],
    [{ initial: 0, rate: -2, time: 6 }, -36, 0, 36, 36],
    [{ initial: 4, rate: -1, time: 4 }, 8, 8, 0, 8],
    [{ initial: -4, rate: 1, time: 0 }, 0, 0, 0, 0]
  ];
  for (const [parameters, net, positive, negative, distance] of fixtures) {
    const result = F.evaluate('signed-accumulation', parameters);
    near(result.output, net); near(result.positiveArea, positive); near(result.negativeArea, negative); near(result.distance, distance);
    near(result.positiveArea - result.negativeArea, result.netDisplacement);
    assert.ok(result.distance + 1e-12 >= Math.abs(result.netDisplacement));
  }
});

test('finite sum error agrees with the independent closed form and shrinks with integer partition counts', () => {
  for (const initial of [-4, 1.5, 4]) for (const rate of [-2, -.4, 0, 1.25, 2]) for (const time of [0, .1, 3.3, 6]) {
    let previousError = Infinity;
    for (const partitions of ['4', '8', '16', '32']) {
      const result = F.evaluate('signed-accumulation', { initial, rate, time, partitions });
      const exact = initial * time + rate * time ** 2 / 2, error = rate * time ** 2 / (2 * Number(partitions));
      near(result.leftSum, exact - error); near(result.rightSum, exact + error); near(result.midpointSum, exact);
      assert.ok(Math.abs(result.leftSum - exact) <= previousError + 1e-10);
      previousError = Math.abs(result.leftSum - exact);
    }
  }
  for (const partitions of [8, 8.5, '8.0', '6', null]) assert.equal(F.evaluate('signed-accumulation', { partitions }).status, 'invalid_parameters');
});

test('parameter validation rejects malformed data and out of bounds without coercion', () => {
  for (const slug of slugs) {
    for (const value of [null, [], '2', 4]) assert.equal(F.evaluate(slug, value).status, 'invalid_parameters');
    assert.equal(F.evaluate(slug, { unknown: 2 }).status, 'invalid_parameters');
    for (const control of F.controls(slug)) {
      if (control.type === 'select') {
        assert.equal(F.evaluate(slug, { [control.key]: 'unknown' }).status, 'invalid_parameters');
        continue;
      }
      for (const value of [NaN, Infinity, -Infinity, '2', control.min - 1, control.max + 1]) assert.equal(F.evaluate(slug, { [control.key]: value }).status, 'invalid_parameters');
    }
  }
  assert.equal(F.evaluate('unknown', {}).valid, false);
});

test('every family has distinct views, readable descriptions, and a shared keyboard drag contract', () => {
  for (const slug of slugs) {
    const geometry = F.render(slug, {}, { id: 'left card', compact: true });
    const graph = F.render(slug, {}, { id: 'right card', compact: true, view: 'graph' });
    for (const html of [geometry, graph]) {
      assert.match(html, /viewBox="0 0 760 420"/);
      assert.match(html, /aria-labelledby="[^"]+"/); assert.match(html, /role="slider" tabindex="0"/);
      assert.match(html, /data-drag-param="/); assert.match(html, /data-quantity="/);
      assert.doesNotMatch(html, /NaN|Infinity|setInterval|setTimeout|<script/);
    }
    assert.notEqual(geometry, graph);
    const caption = geometry.match(/<figcaption[^>]*>(.*?)<\/figcaption>/s)[1], description = geometry.match(/<desc[^>]*>(.*?)<\/desc>/s)[1];
    assert.ok(caption.length < 200); assert.ok(description.length > caption.length);
  }
});

test('function lengths and power areas use honest fixed scales during the primary drag', () => {
  const functionHTML = F.render('function', { x: 2, a: -3, b: 1 });
  const bars = [...functionHTML.matchAll(/<rect[^>]+data-value="([^"]+)"[^>]*>/g)];
  assert.equal(bars.length, 3);
  for (const [tag, value] of bars) near(Number(tag.match(/width="([^"]+)"/)[1]), Math.abs(Number(value)) * 14, 1e-6);
  let previousScale;
  for (const exponent of [-3, 0, 1.5, 3, 5]) {
    const result = F.evaluate('exponentiation', { base: 2, exponent });
    const square = attrs(F.render('exponentiation', { base: 2, exponent }), 'power-square')[0];
    const scale = Number(square['data-area-scale']);
    near(Number(square.width) * Number(square.height), result.output * scale, 1e-5);
    if (previousScale !== undefined) near(scale, previousScale);
    previousScale = scale;
  }
});

test('finite rectangles have exact integer topology, signed heights, and actual time widths', () => {
  for (const partitions of ['4', '8', '16', '32']) {
    const result = F.evaluate('signed-accumulation', { partitions });
    const html = F.render('signed-accumulation', { partitions });
    const rectangles = attrs(html, 'left-rectangle');
    assert.equal(rectangles.length, Number(partitions));
    let sum = 0;
    for (const rectangle of rectangles) {
      const width = Number(rectangle['data-width']), velocity = Number(rectangle['data-velocity']);
      near(width, result.step); near(Number(rectangle.width), result.step * 100, 1e-6);
      near(Number(rectangle.height), Math.abs(velocity) * 29.25, 1e-6);
      sum += width * velocity;
    }
    near(sum, result.leftSum);
    assert.equal(attrs(html, 'exact-signed-area').length, 2);
  }
});

test('velocity geometry uses a visible full-domain envelope that is stable during time drags and includes pins', () => {
  const coefficients = [
    [{ initial: 0, rate: 0 }, 1],
    [{ initial: 1, rate: 0 }, 1],
    [{ initial: -1.5, rate: 0 }, 2],
    [{ initial: 2, rate: -1 }, 4],
    [{ initial: -2, rate: 1.5 }, 8],
    [{ initial: 4, rate: 2 }, 16]
  ];
  for (const [parameters, range] of coefficients) for (const time of [0, .5, 2, 4, 6]) {
    const html = F.render('signed-accumulation', { ...parameters, time });
    const graph = attrs(html, 'velocity-line')[0];
    near(Number(graph['data-velocity-range']), range);
    near(Number(graph['data-velocity-scale']), 117 / range);
    const coordinates = graph.d.match(/[-\d.]+/g).map(Number);
    near(coordinates[1], 203 - parameters.initial * 117 / range, 1e-5);
    near(coordinates[3], 203 - (parameters.initial + 6 * parameters.rate) * 117 / range, 1e-5);
    for (const y of [coordinates[1], coordinates[3]]) assert.ok(y >= 86 && y <= 320);
  }
  const unpinned = attrs(F.render('signed-accumulation', {}), 'velocity-line')[0];
  assert.equal(Number(unpinned['data-velocity-range']), 4);
  const pinned = attrs(F.render('signed-accumulation', {}, { baseline: { initial: 4, rate: 2, time: 1 } }), 'velocity-line')[0];
  assert.equal(Number(pinned['data-velocity-range']), 16);
  const firstRectangle = attrs(F.render('signed-accumulation', {}), 'left-rectangle')[0];
  near(Number(firstRectangle.height), 58.5);
  assert.match(F.render('signed-accumulation', {}), /stays fixed while time changes/);
});

test('story rails use intersected interaction bounds and reach both endpoints without changing model domains', () => {
  const readRail = html => {
    const group = [...html.matchAll(/<g class="scene-handle"[^>]*>.*?<\/g>/gs)][0][0];
    const attributes = Object.fromEntries([...group.slice(0, group.indexOf('>')).matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
    return { ...attributes, cx: Number(group.match(/<circle[^>]*cx="([^"]+)"[^>]*class="scene-handle-ring"/)[1]) };
  };
  const cases = [
    ['function', 'x', { min: 0, max: 4, step: .05 }, -5, 5],
    ['exponentiation', 'exponent', { min: -3, max: 4, step: .1 }, -3, 5],
    ['limit', 'h', { min: .01, max: .5, step: .005 }, .001, 1]
  ];
  for (const [slug, key, bounds, declaredMin, declaredMax] of cases) {
    for (const [value, expectedX] of [[bounds.min, 110], [bounds.max, 650]]) {
      const parameters = { [key]: value }, rail = readRail(F.render(slug, parameters, { controlBounds: { [key]: bounds } }));
      near(Number(rail['data-drag-min']), bounds.min); near(Number(rail['data-drag-max']), bounds.max);
      near(Number(rail['data-drag-step']), bounds.step); near(rail.cx, expectedX);
      near(Number(rail['aria-valuenow']), value);
      assert.equal(F.evaluate(slug, parameters).valid, true);
    }
    const ordinary = readRail(F.render(slug, {}));
    near(Number(ordinary['data-drag-min']), declaredMin); near(Number(ordinary['data-drag-max']), declaredMax);
  }
  const wider = readRail(F.render('function', {}, { controlBounds: { x: { min: -20, max: 20 } } }));
  near(Number(wider['data-drag-min']), -5); near(Number(wider['data-drag-max']), 5);
  for (const bounds of [{ min: 6, max: 8 }, { min: 3, max: 2 }, { min: 1, max: 1 }, { min: NaN, max: Infinity, step: -1 }]) {
    const rail = readRail(F.render('function', {}, { controlBounds: { x: bounds } }));
    near(Number(rail['data-drag-min']), -5); near(Number(rail['data-drag-max']), 5);
    near(Number(rail['data-drag-step']), .01);
  }
  near(F.evaluate('function', { x: -5 }).output, -9);
  near(F.evaluate('exponentiation', { exponent: 5 }).output, 32);
});

test('namespaced SVG IDs and escaped labels stay independent across slots', () => {
  for (const slug of slugs) for (const view of ['geometry', 'graph']) {
    const left = F.render(slug, {}, { id: 'slot/a', view });
    const right = F.render(slug, {}, { id: 'slota', view });
    const leftIDs = [...left.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
    const rightIDs = [...right.matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id);
    assert.ok(leftIDs.length > 0); assert.ok(leftIDs.every(id => !rightIDs.includes(id)));
    const hostile = F.render(slug, {}, { id: '\"><script>alert(1)</script>', view });
    assert.doesNotMatch(hostile, /<script>|onerror=/);
  }
});

test('all control boundaries render finite SVG in both views including no-limit and invalid domains', () => {
  for (const slug of slugs) {
    const controls = F.controls(slug);
    for (let mask = 0; mask < 2 ** controls.length; mask++) {
      const parameters = Object.fromEntries(controls.map((control, index) => [control.key, control.type === 'select' ? control.options[mask & (1 << index) ? control.options.length - 1 : 0].value : mask & (1 << index) ? control.max : control.min]));
      for (const view of ['geometry', 'graph']) {
        const html = F.render(slug, parameters, { view, baseline: F.defaults(slug) });
        assert.match(html, /<svg/); assert.doesNotMatch(html, /NaN|Infinity|undefined="/);
      }
    }
  }
});
