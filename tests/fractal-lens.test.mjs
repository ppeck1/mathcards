import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const L = require('../src/fractal-lens.js');
const D = require('../src/discovery.js');
const near = (actual, expected, epsilon = 1e-10) => assert.ok(Math.abs(actual - expected) <= epsilon * Math.max(1, Math.abs(expected)), `${actual} ≈ ${expected}`);

test('the Koch camera loads independently in Node and an offline browser', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/fractal-lens.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasFractalLens.viewport({ zoom: 9 }).zoom, L.viewport({ zoom: 9 }).zoom);
  assert.equal(L.MAX_ZOOM, 27);
  assert.equal(L.MAX_LEVEL, 3);
  assert.ok(Object.isFrozen(L.DEFAULT_BOX));
});

test('overview mapping is the identity and includes the complete finite outline', () => {
  const view = L.viewport({ zoom: 1 });
  assert.deepEqual(view.matrix, { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 });
  assert.deepEqual(view.sourceBox, L.DEFAULT_BOX);
  for (const [x, y] of D.kochPoints(5)) {
    const scene = { x: 140 + x * 230, y: 143 + y * 230 }, projected = L.project(scene, view);
    near(projected.x, scene.x); near(projected.y, scene.y);
    assert.ok(scene.x >= view.box.x && scene.x <= view.box.x + view.box.width);
    assert.ok(scene.y >= view.box.y && scene.y <= view.box.y + view.box.height);
  }
});

test('nested first-third Koch edges are exact scaled copies of the parent edge', () => {
  const fine = D.kochPoints(5), coarser = D.kochPoints(4);
  // The first 256 segments of the fine contour form the first child edge.
  for (let i = 0; i <= 256; i++) {
    near(fine[i][0] * 3, coarser[i * 4][0]);
    near(fine[i][1] * 3, coarser[i * 4][1]);
  }
  for (const level of [0, 1, 2, 3]) {
    const region = L.selfSimilarRegion(level);
    near(region.width, 230 / Math.pow(3, level));
    near(region.scale, Math.pow(1 / 3, level));
    near(region.from.x, 140); near(region.from.y, 143);
    near(region.to.x - region.from.x, region.width);
    near(region.height, region.width * Math.sqrt(3) / 6);
  }
});

test('each power-of-three zoom centers the next repeat at the same on-screen size', () => {
  for (const level of [1, 2, 3]) {
    const view = L.viewport({ zoom: Math.pow(3, level) }), region = L.selfSimilarRegion(level);
    const center = L.project(region.center, view), from = L.project(region.from, view), to = L.project(region.to, view);
    near(view.level, level);
    near(center.x, view.box.x + view.box.width / 2);
    near(center.y, view.box.y + view.box.height / 2);
    near(to.x - from.x, 230);
    near(to.y, from.y);
    near(view.segmentScale, Math.pow(1 / 3, level));
    assert.equal(view.completedZoomLevel, level);
  }
});

test('continuous camera mapping and its inverse window agree between zoom stops', () => {
  for (const zoom of [1, 1.00001, 1.4, 2.99999, 3, 3.00001, 7.6, 9, 13.2, 27]) {
    const view = L.viewport({ zoom });
    const topLeft = L.project({ x: view.sourceBox.x, y: view.sourceBox.y }, view);
    const bottomRight = L.project({ x: view.sourceBox.x + view.sourceBox.width, y: view.sourceBox.y + view.sourceBox.height }, view);
    near(topLeft.x, view.box.x); near(topLeft.y, view.box.y);
    near(bottomRight.x, view.box.x + view.box.width); near(bottomRight.y, view.box.y + view.box.height);
    if (zoom < 27) {
      const after = L.viewport({ zoom: zoom + 1e-7 });
      assert.ok(Math.abs(after.matrix.e - view.matrix.e) < .001);
      assert.ok(Math.abs(after.matrix.f - view.matrix.f) < .001);
    }
  }
});

test('view state is bounded, independent of model parameters, and does not mutate inputs', () => {
  for (const input of [undefined, null, 3, [], {}, { zoom: NaN }, { zoom: Infinity }, { zoom: '9' }]) assert.equal(L.normalize(input).zoom, 1);
  assert.equal(L.normalize({ zoom: -5 }).zoom, 1);
  assert.equal(L.normalize({ zoom: 100 }).zoom, 27);
  const params = Object.freeze({ depth: 4, length: 2 }), before = D.evaluate('fractal-geometry', params);
  const state = Object.freeze({ zoom: 27, depth: 1, length: 99 });
  const geometry = Object.freeze({ x: 10, y: 30, size: 120, box: Object.freeze({ x: 0, y: 0, width: 300, height: 250 }) });
  const view = L.viewport(state, geometry);
  assert.equal(view.geometry.size, 120);
  assert.deepEqual(D.evaluate('fractal-geometry', params), before);
  assert.equal(state.depth, 1);
  assert.ok(Object.isFrozen(view));
  assert.ok(Object.isFrozen(view.matrix));
  const invalid = L.viewport({ zoom: 27 }, { x: Infinity, y: NaN, size: -1, box: { width: Infinity, height: 0 } });
  assert.deepEqual(invalid.geometry, { ...L.DEFAULT_GEOMETRY, box: L.DEFAULT_BOX });
});

test('SVG helpers isolate magnification, sanitize IDs, and keep the minimap window exact', () => {
  const geometry = '<path data-role="trusted-outline" d="M140 143L370 143"/>';
  const view = L.viewport({ zoom: 9 });
  const wrapped = L.wrap(geometry, { id: 'main" onload="evil()', zoom: 9 });
  assert.equal((wrapped.match(/trusted-outline/g) || []).length, 1);
  assert.match(wrapped, /data-role="fractal-lens-camera" transform="matrix\(9 0 0 9 /);
  assert.match(wrapped, /height="275"/);
  assert.doesNotMatch(wrapped, /onload=|<script|NaN|Infinity/);
  const mini = L.minimap(geometry, { id: 'main', zoom: 9 });
  assert.match(mini, /data-role="fractal-camera-window"/);
  assert.match(mini, new RegExp(`width="${Number(view.sourceBox.width.toFixed(8))}"`));
  assert.match(mini, /whole Koch outline/i);
  assert.match(mini, /1\/3 segments/);
  assert.doesNotMatch(mini, /NaN|Infinity/);
});

test('motif windows normalize exact nested source edges without inventing refinement', () => {
  const fine = D.kochPoints(5), regions = L.comparisonRegions(5);
  assert.equal(regions.length, 3);
  assert.ok(Object.isFrozen(regions));
  for (const region of regions) {
    const { level, sourceRegion, clipBox } = region;
    assert.deepEqual(sourceRegion, L.selfSimilarRegion(level));
    const start = L.project(sourceRegion.from, region), end = L.project(sourceRegion.to, region);
    near(start.x, clipBox.x); near(end.x, clipBox.x + clipBox.width);
    near(start.y, 108); near(end.y, 108);
    near(end.x - start.x, 202);
    const coarser = D.kochPoints(5 - level), segmentCount = 1024 / Math.pow(4, level);
    for (let i = 0; i <= segmentCount; i++) {
      const actual = L.project({ x: 140 + fine[i][0] * 230, y: 143 + fine[i][1] * 230 }, region);
      const expectedPoint = coarser[i * Math.pow(4, level)];
      near(actual.x, clipBox.x + expectedPoint[0] * 202);
      near(actual.y, 108 + expectedPoint[1] * 202);
      assert.ok(actual.y >= clipBox.y && actual.y <= clipBox.y + clipBox.height);
    }
    assert.equal(region.completedLevels, 5 - level);
    near(region.remainingDepth, 5 - level);
    const topLeft = L.project({ x: region.sourceBox.x, y: region.sourceBox.y }, region);
    near(topLeft.x, clipBox.x); near(topLeft.y, clipBox.y);
    assert.ok(Object.isFrozen(region.sourceRegion)); assert.ok(Object.isFrozen(region.matrix));
  }
});

test('comparison labels distinguish complete, forming and absent finite detail', () => {
  for (const depth of [0, .5, 1, 1.5, 2, 2.5, 3, 4.5, 5]) {
    const regions = L.comparisonRegions(depth);
    for (const region of regions) {
      const remaining = Math.max(0, depth - region.level);
      assert.equal(region.completedLevels, Math.floor(remaining));
      assert.equal(region.forming, remaining % 1 > 0);
      near(region.remainingDepth, remaining);
      if (remaining === 0) assert.equal(region.detailLabel, 'No refined detail at this scale');
      else if (remaining < 1) assert.equal(region.detailLabel, 'First refinement is forming');
      else if (remaining % 1) assert.match(region.detailLabel, /next forming/);
      else assert.match(region.detailLabel, /full levels? of detail/);
    }
  }
  for (const depth of [NaN, Infinity, undefined, '5']) assert.equal(L.comparisonRegions(depth)[0].drawingDepth, 0);
  assert.equal(L.comparisonRegions(100)[0].drawingDepth, 5);
  assert.equal(L.comparisonRegions(-1)[0].drawingDepth, 0);
  for (const region of L.comparisonRegions(5, { size: Number.MIN_VALUE, x: Infinity, y: NaN })) {
    assert.ok(Object.values(region.matrix).every(Number.isFinite));
    assert.doesNotMatch(region.transform, /NaN|Infinity/);
  }
});

test('comparison rendering reuses one contour reference in three accessible fixed windows', () => {
  const use = '<use href="#shared-koch-geometry"/>';
  const options = Object.freeze({ id: 'story" onload="bad()', depth: 3.5 });
  const html = L.comparison(use, options);
  assert.match(html, /viewBox="0 0 760 160"/);
  assert.equal((html.match(/<use href="#shared-koch-geometry"\/>/g) || []).length, 3);
  assert.equal((html.match(/data-role="fractal-motif-window"/g) || []).length, 3);
  assert.equal((html.match(/<clipPath /g) || []).length, 3);
  assert.match(html, /Edge length 1\/3: 2 full levels \+ next forming/);
  assert.match(html, /Edge length 1\/9: 1 full level \+ next forming/);
  assert.match(html, /Magnification does not add refinement or change perimeter/);
  assert.doesNotMatch(html, /<path|onload=|<script|NaN|Infinity/);
  assert.equal(options.depth, 3.5);
});

test('camera paint toggles the retained comparison alongside the overview state', () => {
  const node = () => ({ hidden: false, attrs: {}, getAttribute(key) { return this.attrs[key] ?? null; }, setAttribute(key, value) { this.attrs[key] = String(value); } });
  const lens = node(), camera = node(), overview = node(), inset = node(), map = node(), window = node(), comparison = node();
  map.querySelector = selector => selector === '[data-role="fractal-camera-window"]' ? window : null;
  const nodes = new Map([
    ['fractal-lens', lens], ['fractal-lens-camera', camera], ['fractal-detail-overview', overview],
    ['fractal-reference-inset', inset], ['fractal-minimap', map], ['fractal-comparison', comparison]
  ]);
  const container = { querySelector(selector) { const role = selector.match(/^\[data-role="([^"]+)"\]$/)?.[1]; return nodes.get(role) || null; } };
  assert.equal(L.paint(container, { zoom: 9, compare: true }), true);
  assert.equal(comparison.hidden, false); assert.equal(overview.attrs.display, 'inline'); assert.equal(inset.attrs.display, 'none');
  assert.equal(camera.attrs.transform, L.viewport({ zoom: 9 }).transform);
  near(Number(window.attrs.width), L.viewport({ zoom: 9 }).sourceBox.width);
  assert.equal(L.paint(container, { zoom: 1 }), true);
  assert.equal(comparison.hidden, true); assert.equal(overview.attrs.display, 'none'); assert.equal(inset.attrs.display, 'inline');
});
