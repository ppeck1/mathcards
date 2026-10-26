import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const D = require('../src/discovery.js');
const slugs = ['chaos-theory', 'fractal-geometry', 'wave-interference', 'probability', 'vector-rotation', 'pythagorean-theorem'];
const near = (actual, expected, tolerance = 1e-11) => assert.ok(Math.abs(actual - expected) <= Math.max(1, Math.abs(expected)) * tolerance, `${actual} ≈ ${expected}`);
const attrs = (html, role) => [...html.matchAll(/<[^>]+>/g)].filter(([tag]) => tag.includes(`data-role="${role}"`)).map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])));
function finiteGeometry(html) {
  for (const [tag] of html.matchAll(/<[^>]+>/g)) assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/);
  assert.doesNotMatch(html, /(?:<script|onload=|javascript:)/i);
}

test('six allowlisted discovery models work in Node and an offline browser', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/discovery.js', import.meta.url), 'utf8'), context);
  for (const slug of slugs) {
    assert.equal(D.has(slug), true);
    const result = D.evaluate(slug, {}), metadata = D.specs(slug);
    assert.equal(result.status, 'valid');
    assert.equal(result.unit, metadata.unit);
    near(context.AtlasDiscovery.evaluate(slug, {}).output, result.output);
    assert.ok(metadata.primaryLabel && metadata.expression);
    assert.equal(metadata.rendererId, `${slug}-visual-model`);
    assert.match(D.render(slug, {}), /viewBox="0 0 760 420"/);
  }
  near(D.evaluate('wave-interference', {}).output, Math.SQRT2);
  near(D.evaluate('probability', {}).output, 3);
  near(D.evaluate('vector-rotation', {}).output, 1);
  near(D.evaluate('pythagorean-theorem', {}).output, 5);
});

test('logistic orbit uses actual iterates and the playhead linearly interpolates them', () => {
  assert.deepEqual(D.orbit(4, .25, 3), [.25, .75, .75, .75]);
  const initial = D.evaluate('chaos-theory', { generation: 0 });
  near(initial.output, .0001);
  for (const generation of [0, 1, 7, 12.25, 35.9, 36]) {
    const result = D.evaluate('chaos-theory', { generation });
    const lower = Math.floor(generation), fraction = generation - lower;
    near(result.populationA, result.orbitA[lower] + ((result.orbitA[lower + 1] ?? result.orbitA[lower]) - result.orbitA[lower]) * fraction);
    near(result.populationB, result.orbitB[lower] + ((result.orbitB[lower + 1] ?? result.orbitB[lower]) - result.orbitB[lower]) * fraction);
    near(result.output, Math.abs(result.populationA - result.populationB));
    assert.equal(result.orbitA.length, 37);
    assert.equal(result.orbitB.length, 37);
  }
  const edge = D.evaluate('chaos-theory', { seed: .99, delta: .01, generation: 36, rate: 4 });
  assert.ok(edge.orbitB.every(x => x >= 0 && x <= 1));
  assert.match(D.render('chaos-theory', {}), /not proof that every growth parameter is chaotic/);
  const atStart = D.render('chaos-theory', { generation: 0 }), atEnd = D.render('chaos-theory', { generation: 36 });
  for (const role of ['initial-population-a', 'initial-population-b']) assert.deepEqual(attrs(atStart, role), attrs(atEnd, role));
});

test('chaos gap trace follows the absolute separation through between-generation crossings', () => {
  const defaults=D.defaults('chaos-theory'), orbit=D.evaluate('chaos-theory',defaults);
  const html=D.render('chaos-theory',defaults), numbers=attrs(html,'gap-history')[0].d.match(/[-\d.]+/g).map(Number);
  const points=Array.from({length:numbers.length/2},(_,i)=>numbers.slice(i*2,i*2+2));
  let crossings=0;
  for(let i=1;i<orbit.orbitA.length;i++){
    const before=orbit.orbitA[i-1]-orbit.orbitB[i-1], after=orbit.orbitA[i]-orbit.orbitB[i];
    const fractions=[.2,.5,.8];
    if(before*after<0){fractions.push(before/(before-after));crossings++;}
    for(const fraction of fractions){
      const generation=i-1+fraction, x=75+generation/36*465;
      const j=points.findIndex((point,index)=>index&&point[0]>=x-1e-5);
      const left=points[j-1],right=points[j],t=(x-left[0])/(right[0]-left[0]);
      const drawnGap=(322-(left[1]+(right[1]-left[1])*t))/50;
      near(drawnGap,D.evaluate('chaos-theory',{generation}).output,2e-5);
    }
  }
  assert.ok(crossings>0,'exercise actual crossings');
});

test('bounded pure helpers reject requests outside their computational budget', () => {
  for (const args of [[4, .5, 1001], [4, .5, 1.5], [5, .5, 12], [4, -1, 12], [NaN, .5, 12]]) assert.throws(() => D.orbit(...args), RangeError);
  for (const args of [[6], [-1], [NaN], [3, 0], [3, 4]]) assert.throws(() => D.kochPoints(...args), RangeError);
});

test('finite Koch contours preserve topology and match the actual fractional morph perimeter', () => {
  for (const length of [.5, 1, 3]) for (const depth of [0, .01, .5, .99, 1, 2.25, 3, 4.7, 5]) {
    const points = D.kochPoints(depth, length), result = D.evaluate('fractal-geometry', { length, depth });
    assert.equal(points.length, 3073);
    assert.deepEqual(points[0], points.at(-1));
    let drawnLength = 0;
    for (let i = 1; i < points.length; i++) drawnLength += Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
    near(drawnLength, result.output);
    near(result.output, D.kochPerimeter(depth, length));
    if (Number.isInteger(depth)) near(result.output, 3 * length * Math.pow(4 / 3, depth));
  }
  const fractional = D.evaluate('fractal-geometry', { depth: 2.5 });
  assert.ok(Math.abs(fractional.output - 3 * Math.pow(4 / 3, 2.5)) > .01);
  for (const depth of [1, 2, 3, 4, 5]) {
    const before = D.kochPoints(depth - 1e-7), after = D.kochPoints(depth);
    assert.ok(Math.max(...before.map(([x, y], i) => Math.hypot(x - after[i][0], y - after[i][1]))) < 1e-6);
  }
  const html = D.render('fractal-geometry', {});
  assert.equal(attrs(html, 'koch-contour').length, 1);
  assert.equal(attrs(html, 'sierpinski-inset').length, 1);
  assert.match(html, /finite approximations/);
  assert.match(html, /outline is fitted to view/i);
  const halfway = D.evaluate('fractal-geometry', { depth: 2.5 });
  assert.equal(halfway.completedSegmentCount, 48);
  assert.equal(halfway.segmentCount, 192);
});

test('wave amplitude is distinct from the fixed probe and cancellation is exactly zero', () => {
  for (const amplitude of [.2, 1, 2]) {
    const constructive = D.evaluate('wave-interference', { amplitude, phase: 0 });
    near(constructive.output, 2 * amplitude);
    assert.equal(D.evaluate('wave-interference', { amplitude, phase: Math.PI }).output, 0);
    assert.equal(D.evaluate('wave-interference', { amplitude, phase: Math.PI }).probeValue, 0);
    near(D.evaluate('wave-interference', { amplitude, phase: Math.PI * 2 }).output, 2 * amplitude);
  }
  const r = D.evaluate('wave-interference', {});
  near(r.probeValue, 1);
  assert.notEqual(r.probeValue, r.resultantAmplitude);
  const html = D.render('wave-interference', {});
  assert.equal(attrs(html, 'component-wave-a').length, 1);
  assert.equal(attrs(html, 'component-wave-b').length, 1);
  assert.equal(attrs(html, 'resultant-wave').length, 1);
  assert.match(html, /local sum is distinct from the resultant envelope amplitude/);
});

test('binomial bars are a normalized exact distribution with the expected mean', () => {
  for (const chance of [0, .001, .2, .5, .8, .999, 1]) {
    const r = D.evaluate('probability', { chance });
    near(r.distribution.reduce((sum, p) => sum + p, 0), 1);
    near(r.distribution.reduce((sum, p, k) => sum + p * k, 0), r.output);
    near(r.distribution.reduce((sum, p, k) => sum + p * (k - r.output) ** 2, 0), r.variance);
    assert.equal(r.trials, 6);
    assert.ok(r.distribution.every(p => p >= 0 && p <= 1));
    const bars = attrs(D.render('probability', { chance }), 'probability-bar');
    assert.equal(bars.length, 7);
    for (const bar of bars) near(Number(bar.height), Number(bar['data-probability']) * 190, 1e-4);
  }
  assert.deepEqual(D.evaluate('probability', { chance: 0 }).distribution, [1, 0, 0, 0, 0, 0, 0]);
  assert.deepEqual(D.evaluate('probability', { chance: 1 }).distribution, [0, 0, 0, 0, 0, 0, 1]);
  assert.match(D.render('probability', {}), /computed probabilities, not random sample counts/);
});

test('rotation preserves vector length, signed projections, and equal visual scales', () => {
  for (const radius of [.5, 2, 3]) for (const angle of [0, 30, 90, 180, 240, 270, 360]) {
    const r = D.evaluate('vector-rotation', { radius, angle });
    near(r.x * r.x + r.y * r.y, radius * radius);
    const html = D.render('vector-rotation', { radius, angle }), horizontal = attrs(html, 'horizontal-projection')[0], vertical = attrs(html, 'vertical-projection')[0];
    near(Number(horizontal.x2) - Number(horizontal.x1), r.x * 43, 1e-4);
    near(Number(vertical.y1) - Number(vertical.y2), r.y * 43, 1e-4);
    const endpoint = attrs(html, 'vector-endpoint')[0];
    near(Number(endpoint.cx), 265 + r.x * 43, 1e-4);
    near(Number(endpoint.cy), 198 - r.y * 43, 1e-4);
  }
  assert.equal(D.evaluate('vector-rotation', { angle: 90 }).output, 0);
  assert.equal(D.evaluate('vector-rotation', { angle: 270 }).output, 0);
  assert.equal(D.evaluate('vector-rotation', { angle: 180 }).output, -2);
});

test('Pythagorean square areas use a shared scale and sum to the hypotenuse square', () => {
  for (const a of [.5, 3, 6]) for (const b of [.5, 4, 6]) {
    const r = D.evaluate('pythagorean-theorem', { a, b });
    near(r.output * r.output, r.aSquared + r.bSquared);
    const html = D.render('pythagorean-theorem', { a, b }), squareA = attrs(html, 'leg-square-a')[0], squareB = attrs(html, 'leg-square-b')[0], squareC = attrs(html, 'hypotenuse-square')[0];
    near(Number(squareA.width) * Number(squareA.height), r.aSquared * 225);
    near(Number(squareB.width) * Number(squareB.height), r.bSquared * 225);
    near(Number(squareC['data-area']), r.cSquared);
    const coords = squareC.d.match(/[-\d.]+/g).map(Number), pts = Array.from({ length: coords.length / 2 }, (_, i) => [coords[i * 2], coords[i * 2 + 1]]);
    let twiceArea = 0;
    for (let i = 0; i < pts.length; i++) twiceArea += pts[i][0] * pts[(i + 1) % pts.length][1] - pts[i][1] * pts[(i + 1) % pts.length][0];
    near(Math.abs(twiceArea) / 2, r.cSquared * 225);
  }
  assert.match(D.render('pythagorean-theorem', {}), /requires a right angle/);
});

test('all scalar controls reject unknown, nonnumeric and out of range values without clamping', () => {
  for (const slug of slugs) {
    for (const input of [null, [], '', { evil: '<script>' }]) assert.equal(D.evaluate(slug, input).status, 'invalid_parameters');
    for (const { key, min, max } of D.controls(slug)) for (const value of [NaN, Infinity, -Infinity, '1', min - .001, max + .001]) {
      const r = D.evaluate(slug, { [key]: value });
      assert.equal(r.status, 'invalid_parameters', `${slug}.${key}=${value}`);
      assert.equal(r.output, null);
    }
    assert.equal(D.curveValue(slug, {}, -1), null);
    assert.equal(D.curveValue(slug, {}, Infinity), null);
    near(D.curveValue(slug, {}, D.defaults(slug)[D.specs(slug).axis]), D.evaluate(slug, {}).output);
  }
  for (const slug of ['constructor', '__proto__', 'unknown']) {
    assert.equal(D.has(slug), false);
    assert.equal(D.evaluate(slug, {}).status, 'invalid_parameters');
    assert.equal(D.curveValue(slug, {}, 1), null);
    assert.throws(() => D.defaults(slug), RangeError);
  }
});

test('returned metadata and results cannot mutate future model state', () => {
  for (const slug of slugs) {
    const original = D.defaults(slug), frozen = Object.freeze({ ...original }), result = D.evaluate(slug, frozen);
    assert.deepEqual(frozen, original);
    const metadata = D.specs(slug); metadata.title = 'changed';
    const controls = D.controls(slug); controls[0].min = -100;
    result.parameters[controls[0].key] = -100;
    assert.deepEqual(D.defaults(slug), original);
    assert.notEqual(D.controls(slug)[0].min, -100);
    assert.notEqual(D.specs(slug).title, 'changed');
  }
});

test('namespaced scenes stay finite at every control extreme and keep keyboard and pointer rails', () => {
  for (const slug of slugs) {
    const candidates = [{}, ...D.controls(slug).flatMap(({ key, min, max }) => [{ [key]: min }, { [key]: max }])];
    for (const params of candidates) for (const view of ['geometry', 'graph', 'space']) {
      const html = D.render(slug, params, { id: '<malicious "&>', view, baseline: D.defaults(slug), storyFocus: 'output' });
      finiteGeometry(html);
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
      assert.equal(ids.length, new Set(ids).size);
      for (const [, target] of html.matchAll(/url\(#([^)]+)\)/g)) assert.ok(ids.includes(target), `Missing ${target}`);
      assert.match(html, /role="slider" tabindex="0"/);
      assert.match(html, /data-drag-param=/);
      for (const part of ['reference', 'input', 'intermediate', 'output']) assert.match(html, new RegExp(`data-story-part="[^"]*${part}`));
      assert.match(html, /Pinned comparison:/);
    }
    const invalid = D.render(slug, { unknown: '<script>' });
    finiteGeometry(invalid);
    assert.match(invalid, /Check the variable values/);
    assert.doesNotMatch(invalid, /data-drag-param|data-role="(?:koch-contour|logistic-orbit|probability-bar|rotating-vector|right-triangle|resultant-wave)"/);
  }
});
