import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Graphs = require('../src/module-graphs.js');
const Models = require('../src/models.js');
const Providers = require('../src/model-registry.js');
const Visuals = require('../src/visuals.js');
const Plot = require('../src/plot-view.js');
const ids = [
  'integral-accumulation', 'quadratic-optimization', 'complex-multiplication',
  'bayes-theorem', 'graph-theory', 'resonance', 'chaos-theory', 'fractal-geometry',
  'wave-interference', 'probability', 'vector-rotation', 'pythagorean-theorem'
];
const close = (actual, expected, label = '') => assert.ok(Math.abs(actual - expected) <= 1e-11 * Math.max(1, Math.abs(expected)), `${label}: ${actual} ≠ ${expected}`);
const attributes = tag => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
const marks = (html, role) => (html.match(/<[^>]+>/g) || []).filter(tag => tag.includes(`data-role="${role}"`)).map(attributes);
function finiteSpec(spec, id) {
  assert.equal(spec.valid, true, id);
  assert.ok(spec.x.min < spec.x.max && spec.y.min < spec.y.max, id);
  for (const series of spec.series) {
    assert.ok(series.points.length > 1, id + ' ' + series.id);
    for (const point of series.points) {
      assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y), id);
      assert.ok(point.x >= spec.x.min && point.x <= spec.x.max, id);
      assert.ok(point.y >= spec.y.min && point.y <= spec.y.max, id);
    }
  }
  for (const point of spec.current) {
    assert.ok(Number.isFinite(point.x) && Number.isFinite(point.y), id);
    assert.ok(point.y >= spec.y.min && point.y <= spec.y.max, id);
  }
}

test('all twelve added topics describe real graph capabilities, without claiming legacy topics', () => {
  for (const id of ids) assert.equal(Graphs.has(id), true, id);
  for (const id of ['function-composition', 'real-logarithm', 'derivative', 'linear-model', 'unknown', null]) assert.equal(Graphs.has(id), false);
  assert.throws(() => Graphs.describe('unknown', {}), RangeError);
});

test('each graph names its real axis and current model output, including positive domain minima', () => {
  for (const id of ids) {
    const p = Models.defaults(id), result = Models.evaluate(id, p), spec = Graphs.describe(id, p);
    const axis = Providers.controls(id).find(control => control.key === Providers.specs(id).axis);
    finiteSpec(spec, id);
    assert.equal(spec.x.key, axis.key, id);
    assert.equal(spec.x.min, axis.min, id);
    assert.equal(spec.x.max, axis.max, id);
    assert.equal(spec.x.value, p[axis.key], id);
    assert.equal(spec.current[0].x, p[axis.key], id);
    assert.equal(spec.current[0].y, result.output, id);
    assert.equal(spec.current[0].draggable, true, id);
    for (const point of spec.series[0].points) close(point.y, Models.evaluate(id, { ...p, [axis.key]: point.x }).output, id + ' sample');
  }
  assert.equal(Graphs.describe('bayes-theorem', Models.defaults('bayes-theorem')).x.min, .01);
  assert.equal(Graphs.describe('resonance', Models.defaults('resonance')).x.min, .2);
});

test('bounded endpoints stay finite and dragging the primary input preserves graph axes', () => {
  for (const id of ids) {
    const defaults = Models.defaults(id), first = Graphs.describe(id, defaults), axis = first.x;
    for (const x of [axis.min, axis.max, axis.min + (axis.max - axis.min) * .317]) {
      const spec = Graphs.describe(id, { ...defaults, [axis.key]: x });
      finiteSpec(spec, id);
      assert.deepEqual(spec.y, first.y, id + ' vertical scale remains stable during primary dragging');
      assert.equal(spec.x.min, first.x.min);
      assert.equal(spec.x.max, first.x.max);
    }
  }
});

test('each new graph is visibly distinct from its composite geometry and has an exact draggable marker', () => {
  for (const id of ids) {
    const p = Models.defaults(id), spec = Graphs.describe(id, p), html = Graphs.render(id, p, { id: 'same' });
    assert.notEqual(html, Visuals.render(id, p, { id: 'same', view: 'geometry' }), id);
    assert.match(html, /relationship-graph/);
    assert.doesNotMatch(html, /(?:NaN|[+-]?Infinity)/);
    const point = marks(html, 'current-point')[0];
    assert.ok(point, id);
    assert.equal(Number(point['data-x']), spec.current[0].x, id);
    assert.equal(Number(point['data-y']), spec.current[0].y, id);
    assert.equal(point['data-quantity'], spec.current[0].quantity, id);
    const handle = (html.match(/<[^>]+>/g) || []).map(attributes).find(tag => tag['data-drag-param']);
    assert.equal(handle['data-drag-param'], spec.x.key, id);
    assert.equal(Number(handle['data-drag-min']), spec.x.min, id);
    assert.equal(Number(handle['data-drag-max']), spec.x.max, id);
  }
});

test('valid pinned curves and current values share bounds while invalid pins are ignored', () => {
  for (const id of ids) {
    const p = Models.defaults(id), control = Providers.controls(id).find(control => control.key !== Providers.specs(id).axis) || Providers.controls(id)[0];
    const baseline = { ...p, [control.key]: control.min }, result = Models.evaluate(id, baseline);
    const spec = Graphs.describe(id, p, { baseline });
    finiteSpec(spec, id);
    const pinned = spec.series.find(series => series.id === 'pinned-output');
    assert.ok(pinned && pinned.dashed, id);
    const current = spec.current.find(point => point.label.startsWith('Pinned '));
    assert.equal(current.y, result.output, id);
    assert.equal(current.draggable, false, id);
    assert.ok(spec.notes.some(note => /same axes/.test(note)), id);
    const invalid = Graphs.describe(id, p, { baseline: { ...p, [control.key]: NaN } });
    assert.equal(invalid.series.some(series => series.id === 'pinned-output'), false, id);
  }
});

test('chaos graph exactly follows absolute separation through between-iterate crossings', () => {
  const p = Models.defaults('chaos-theory'), spec = Graphs.describe('chaos-theory', p), points = spec.series[0].points;
  const zeroes = points.filter(point => !Number.isInteger(point.x) && point.y === 0);
  assert.ok(zeroes.length > 0, 'The nearly identical orbits cross between generations');
  const interpolate = x => {
    const right = points.findIndex(point => point.x >= x);
    if (!right) return points[0].y;
    const a = points[right - 1], b = points[right];
    return a.y + (b.y - a.y) * (x - a.x) / (b.x - a.x);
  };
  for (const x of [...zeroes.map(point => point.x), ...Array.from({ length: 101 }, (_, i) => i * 36 / 100)]) close(interpolate(x), Models.evaluate('chaos-theory', { ...p, generation: x }).output, 'fractional chaos gap');
  const dots = spec.series.find(series => series.dots);
  assert.equal(dots.points.length, 37);
  assert.ok(dots.points.every(point => Number.isInteger(point.x)));
  assert.match(spec.notes.join(' '), /actual discrete iterates/);
  assert.match(spec.notes.join(' '), /linearly interpolates each population/);
});

test('fractal graph measures the actual fractional shape and marks completed levels separately', () => {
  const p = { ...Models.defaults('fractal-geometry'), depth: 2.5 }, spec = Graphs.describe('fractal-geometry', p);
  const value = Models.evaluate('fractal-geometry', p).output;
  assert.equal(spec.current[0].y, value);
  assert.notEqual(value, 3 * p.length * (4 / 3) ** p.depth);
  assert.ok(spec.series[0].points.some(point => point.x === p.depth && point.y === value));
  const dots = spec.series.find(series => series.dots);
  assert.deepEqual(dots.points.map(point => point.x), [0, 1, 2, 3, 4, 5]);
  for (const point of dots.points) close(point.y, 3 * p.length * (4 / 3) ** point.x);
  assert.equal(dots.quantity, 'completedDepth output');
  assert.match(spec.notes.join(' '), /not the integer identity extended to fractional/);
});

test('network tie, vector components, and complex components retain their exact meanings', () => {
  const network = Graphs.describe('graph-theory', Models.defaults('graph-theory'));
  assert.ok(network.series[0].points.some(point => point.x === 3 && point.y === 8));
  assert.match(network.description, /network diagram/);
  for (const [id, property] of [['vector-rotation', 'y'], ['complex-multiplication', 'imagPart']]) {
    const p = Models.defaults(id), spec = Graphs.describe(id, p), secondary = spec.series.find(series => series.id === property);
    assert.equal(secondary.quantity, property);
    assert.equal(spec.current[1].y, Models.evaluate(id, p)[property]);
    assert.equal(spec.current[1].draggable, false);
    assert.ok(spec.y.min < 0 && spec.y.max > 0);
  }
});

test('resonance samples resolve the narrow bounded peak while keeping all current values inside the fixed axes', () => {
  const p = { ...Models.defaults('resonance'), damping: .1 }, spec = Graphs.describe('resonance', p);
  assert.ok(spec.series[0].points.length >= 2001);
  const sampledPeak = Math.max(...spec.series[0].points.map(point => point.y));
  let densePeak = 0;
  for (let i = 0; i <= 4000; i++) densePeak = Math.max(densePeak, Models.evaluate('resonance', { ...p, frequency: .2 + 1.8 * i / 4000 }).output);
  assert.ok(Math.abs(sampledPeak - densePeak) / densePeak < .0001);
  assert.ok(spec.y.max > densePeak);
});

test('invalid graph input displays an accessible domain explanation and never substitutes defaults', () => {
  for (const id of ids) {
    const key = Providers.controls(id)[0].key, p = { ...Models.defaults(id), [key]: NaN };
    const spec = Graphs.describe(id, p), html = Graphs.render(id, p, { id: 'invalid', compact: true });
    assert.equal(spec.valid, false, id);
    assert.ok(spec.errors.length > 0, id);
    assert.equal(spec.series, undefined);
    assert.match(html, /Check the variable values/);
    assert.match(html, /<desc id=/);
    assert.doesNotMatch(html, /data-role="current-point"/);
    assert.doesNotMatch(html, /(?:NaN|[+-]?Infinity)/);
  }
});

test('topic graph adapters work offline in classic scripts and leave parameters unchanged', () => {
  const context = vm.createContext({ AtlasModels: Models, AtlasModelRegistry: Providers, AtlasPlotView: Plot });
  vm.runInContext(fs.readFileSync(new URL('../src/module-graphs.js', import.meta.url), 'utf8'), context);
  for (const id of ids) {
    const p = Object.freeze(Models.defaults(id)), before = { ...p }, html = context.AtlasModuleGraphs.render(id, p, { id: 'browser-' + id });
    assert.match(html, /<svg/);
    assert.deepEqual(p, before);
  }
});
