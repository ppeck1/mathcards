import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Plot = require('../src/plot-view.js');
const Sampling = require('../src/sampling-extensions.js');
const attributes = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const marks = html =>
  [...html.matchAll(/<circle\b[^>]*data-role="current-point"[^>]*>/g)].map(([tag]) =>
    attributes(tag)
  );
const spec = () => ({
  title: 'Original values on a declared scale',
  x: { key: 'input', min: 0, max: 10, step: 1 },
  y: { min: 0, max: 15, label: 'Result', scale: 'log1p' },
  series: [
    {
      id: 'values',
      points: [
        { x: 0, y: 0 },
        { x: 5, y: 3 },
        { x: 10, y: 15 }
      ]
    }
  ],
  current: [{ x: 5, y: 3, draggable: true, quantity: 'output' }]
});

test('logarithmic spacing projects original endpoints and values while keeping original ticks', () => {
  const input = spec(),
    before = structuredClone(input),
    html = Plot.render(input);
  assert.match(html, /d="M82 326 L400 205 L718 84"/);
  assert.equal(marks(html)[0]['data-y'], '3');
  assert.equal(marks(html)[0].cy, '205');
  const ticks = [...html.matchAll(/<text x="70"[^>]*>([^<]+)<\/text>/g)].map(([, value]) =>
    Number(value)
  );
  assert.deepEqual(ticks, [0, 1, 3, 7, 15]);
  assert.match(html, /logarithmic spacing/);
  assert.match(html, /tick labels and point readings show the original values/);
  assert.match(html, /data-drag-min="0" data-drag-max="10"/);
  assert.deepEqual(input, before);
  assert.equal(marks(Plot.render(input, { compact: true }))[0].cy, '205');
});

test('unsupported scale domains reject safely and negative samples remain gaps', () => {
  for (const y of [
    { min: -1, max: 15, scale: 'log1p' },
    { min: 0, max: 15, scale: 'other' },
    { min: 1e300, max: 1.0000000000000002e300, scale: 'log1p' }
  ]) {
    const html = Plot.render({ ...spec(), y });
    assert.match(html, /Graph unavailable for this range/);
    assert.doesNotMatch(html, /NaN|Infinity|data-role="current-point"/);
  }
  const input = spec();
  input.series[0].points.splice(1, 0, { x: 2, y: -0.5 });
  assert.match(Plot.render(input), /d="M82 326 M400 205 L718 84"/);
});

test('ANOVA uses one fixed logarithmic scale with true F readings and independent pins', () => {
  const parameters = { separation: 2, spread: 1 },
    baseline = { separation: 1, spread: 1 };
  const html = Sampling.render('one-way-anova', parameters, { view: 'graph', baseline });
  const [current, pinned] = marks(html);
  assert.equal(current['data-y'], '12');
  assert.equal(pinned['data-y'], '3');
  const expected = 326 - (242 * Math.log1p(12)) / Math.log1p(800);
  assert.ok(Math.abs(Number(current.cy) - expected) < 0.001);
  assert.ok(326 - Number(current.cy) > 90, 'Default F has useful visible vertical displacement');
  assert.ok(Number(current.cy) < Number(pinned.cy));
  const equivalent = marks(
    Sampling.render('one-way-anova', { separation: 4, spread: 2 }, { view: 'graph' })
  )[0];
  assert.equal(
    current.cy,
    equivalent.cy,
    'Equal F values keep identical heights across different parameter families'
  );
  assert.match(html, /data-y-scale="log1p"/);
  assert.match(html, /Fixed 0–800 F bounds/);
});
