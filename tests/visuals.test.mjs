import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const visuals = require('../src/visuals.js');

function render(slug, parameters = {}, options = {}) {
  return visuals.render(slug, { ...models.defaults(slug), ...parameters }, { id: 'test-visual', view: 'geometry', ...options });
}

function assertFiniteDrawing(html) {
  assert.equal(typeof html, 'string');
  assert.ok(html.length > 0);
  // These are forbidden in coordinates, transforms, gradient stops, and paths.
  // Explanatory prose can still describe an undefined mathematical result.
  for (const tag of html.match(/<[^>]+>/g) || []) {
    assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/, tag);
  }
}

function frames(html, role = 'magnitude-frame') {
  return [...html.matchAll(/<rect\b[^>]*>/g)]
    .map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(([, key, value]) => [key, value])))
    .filter(attributes => attributes['data-role'] === role);
}

function roleAttributes(html, role) {
  const tag = (html.match(/<[^>]+>/g) || []).find(tag => tag.includes(`data-role="${role}"`));
  assert.ok(tag, `Drawing must expose its ${role}`);
  return Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(([, key, value]) => [key, value]));
}

function sceneHandles(html) {
  return [...html.matchAll(/<g\b[^>]*class="scene-handle"[^>]*>/g)]
    .map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)=["']([^"']*)["']/g)].map(([, key, value]) => [key, value])));
}

test('visual renderer works as an offline classic browser script', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/models.js', import.meta.url), 'utf8'), context);
  vm.runInContext(fs.readFileSync(new URL('../src/visuals.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasVisuals.render, 'function');
  const html = context.AtlasVisuals.render('function-composition', context.AtlasModels.defaults('function-composition'), { id: 'browser', view: 'geometry' });
  assert.match(html, /<svg\b/);
  assertFiniteDrawing(html);
});

test('square area encodes magnitude on a shared scale, preserving zero and sign', () => {
  const values = [0, 1, 4, 9, -16];
  const geometry = visuals.areaGeometry(values, 144);
  assert.equal(geometry.sides.length, values.length);
  assert.equal(geometry.sides[0], 0);
  assert.equal(Math.max(...geometry.sides), 144);
  const unitArea = geometry.sides[1] ** 2;
  geometry.sides.forEach((side, index) => {
    assert.ok(Number.isFinite(side) && side >= 0);
    assert.ok(Math.abs(side ** 2 / unitArea - Math.abs(values[index])) < 1e-10);
  });
  assert.equal(visuals.areaGeometry([4, -4]).sides[0], visuals.areaGeometry([4, -4]).sides[1]);
  assert.deepEqual(values, [0, 1, 4, 9, -16], 'Geometry must not mutate model values');
});

test('area geometry remains finite when every value is zero', () => {
  const geometry = visuals.areaGeometry([0, 0, 0]);
  assert.deepEqual(geometry.sides, [0, 0, 0]);
  assert.ok(Number.isFinite(geometry.scale));
});

test('composition frames track the actual chosen operation order and signed results', () => {
  for (const order of ['f_after_g', 'g_after_f']) {
    const parameters = { ...models.defaults('function-composition'), x: -2, a: -1, b: 0, c: 0, m: 2, n: 0, order };
    const result = models.evaluate('function-composition', parameters);
    const html = render('function-composition', parameters);
    const actual = Object.fromEntries(frames(html).map(frame => [frame['data-stage'], Number(frame['data-value'])]));
    assert.deepEqual(actual, { input: parameters.x, intermediate: result.intermediate, output: result.output });
    const zero = render('function-composition', { ...parameters, x: 0 });
    assertFiniteDrawing(zero);
    assertFiniteDrawing(html);
  }
});

test('current and pinned composition values use the same area scale', () => {
  const baseline = models.defaults('function-composition');
  const html = render('function-composition', { x: 1 }, { baseline });
  const current = frames(html);
  const pinned = frames(html, 'baseline-frame');
  assert.equal(current.length, 3);
  assert.equal(pinned.length, 3);
  const all = [...current, ...pinned];
  const nonzero = all.filter(frame => Number(frame['data-value']) !== 0);
  const areaPerUnit = frame => Number(frame.width) * Number(frame.height) / Math.abs(Number(frame['data-value']));
  const scale = areaPerUnit(nonzero[0]);
  // SVG dimensions are serialized to three decimals; allow that subpixel
  // rounding while still rejecting a separate normalization for either state.
  nonzero.forEach(frame => assert.ok(Math.abs(areaPerUnit(frame) - scale) <= Math.max(1, scale) * 1e-4));
});

test('both views handle signed secants, collapsed steps, corners, and logarithm directions', () => {
  const cases = [
    ['function-composition', { a: -5, b: 5, c: -5, m: -5, n: 5, x: -10 }],
    ['function-composition', { a: 0, b: 0, c: 0, m: 0, n: 0, x: 0 }],
    ['real-logarithm', { base: 0.5, argument: 8 }],
    ['real-logarithm', { base: 2, argument: 0.125 }],
    ['real-logarithm', { base: 1 + Number.EPSILON, argument: 8 }],
    ['real-logarithm', { base: 1 - Number.EPSILON, argument: 8 }],
    ['real-logarithm', { base: Number.MIN_VALUE, argument: Number.MIN_VALUE }],
    ['real-logarithm', { base: Number.MAX_VALUE, argument: Number.MAX_VALUE }],
    ['derivative', { preset: 'cubic', a: 3, h: -1 }],
    ['derivative', { preset: 'cubic', a: -3, h: 1 }],
    ['derivative', { preset: 'cubic', a: 2, h: 0 }],
    ['derivative', { preset: 'cubic', a: 2, h: 1e-14 }],
    ['derivative', { preset: 'linear', a: 0, h: -0.5 }],
    ['derivative', { preset: 'absolute', a: 0.25, h: -0.5 }],
    ['derivative', { preset: 'absolute', a: 0, h: -0.1 }],
    ['derivative', { preset: 'absolute', a: 0, h: 0 }]
  ];
  for (const [slug, parameters] of cases) {
    for (const view of ['geometry', 'graph']) {
      const html = render(slug, parameters, { view });
      assertFiniteDrawing(html);
      // A legitimate finite model may outgrow a display window. Either a graph
      // or an explicit explanation must remain available in that situation.
      assert.match(html, /<svg\b|window|range|scale|display/i);
    }
  }
});

test('invalid parameters and logarithm domains cannot leave a stale magnitude picture', () => {
  const cases = [
    ['function-composition', { x: NaN }],
    ['function-composition', { a: 6 }],
    ['real-logarithm', { base: 1 }],
    ['real-logarithm', { base: 0 }],
    ['real-logarithm', { argument: 0 }],
    ['real-logarithm', { argument: -1 }],
    ['derivative', { h: Infinity }]
  ];
  for (const [slug, parameters] of cases) {
    for (const view of ['geometry', 'graph']) {
      const html = render(slug, parameters, { view });
      assertFiniteDrawing(html);
      assert.equal(frames(html).length, 0);
      assert.match(html, /invalid|undefined|finite|requires|from|positive|choose|value|unavailable/i);
    }
  }
});

test('a zero step keeps the derivative and explicitly distinguishes the undefined secant', () => {
  const html = render('derivative', { preset: 'cubic', a: 2, h: 0 });
  assert.match(html, /<svg\b/);
  assert.match(html, /undefined|division by zero|h\s*=\s*0/i);
  assertFiniteDrawing(html);
});

test('a finite extreme logarithm argument preserves a drawable pinned comparison curve', () => {
  const html = render('real-logarithm', { base: 2, argument: Number.MAX_VALUE }, {
    view: 'graph', baseline: { base: 10, argument: Number.MAX_VALUE }
  });
  const pinned = (html.match(/<path\b[^>]+>/g) || []).find(tag => /stroke-dasharray=["']5 5["']/.test(tag));
  assert.ok(pinned, 'The valid pinned function remains part of the graph');
  const path = pinned.match(/\bd=["']([^"']*)["']/)?.[1] || '';
  assert.ok((path.match(/\bL/g) || []).length > 1, 'A curve needs line segments, not a lone move command');
  assertFiniteDrawing(html);
});

test('changing only the logarithm base preserves the actual argument position', () => {
  const reference = { base: 1.25, argument: 8 };
  const positions = [2, 8].map(base => {
    const html = render('real-logarithm', { base, argument: 8 }, { reference });
    assertFiniteDrawing(html);
    return Number(roleAttributes(html, 'argument-point').cx);
  });
  assert.equal(positions[0], positions[1], 'A change to base cannot move an unchanged argument on a fixed linear ruler');
});

test('the local slope inset magnifies tiny signed steps while keeping equal coordinate units', () => {
  const reference = { preset: 'cubic', a: 2, h: 1 };
  for (const h of [-1e-14, 1e-14]) {
    const parameters = { preset: 'cubic', a: 2, h };
    const result = models.evaluate('derivative', parameters);
    const html = render('derivative', parameters, { reference });
    const triangle = roleAttributes(html, 'local-slope-triangle');
    const horizontal = Number(triangle.d.match(/h([+-]?[\d.]+)/)?.[1]);
    const vertical = Number(triangle.d.match(/v([+-]?[\d.]+)/)?.[1]);
    assert.ok(Math.max(Math.abs(horizontal), Math.abs(vertical)) >= 100, 'Tiny nonzero steps remain readable in the magnifier');
    assert.ok(Math.abs(-vertical / horizontal - result.output) < 1e-3, 'Equal x/y units preserve the actual rise/run slope');
    assertFiniteDrawing(html);
  }
});

test('rendering is deterministic with a supplied ID and preserves current and pinned state', () => {
  for (const slug of ['function-composition', 'real-logarithm', 'derivative']) {
    const parameters = Object.freeze(models.defaults(slug));
    const baseline = Object.freeze({ ...parameters });
    const options = Object.freeze({ id: 'stable', view: 'geometry', baseline });
    const before = JSON.stringify({ parameters, baseline, options });
    const first = visuals.render(slug, parameters, options);
    assert.equal(first, visuals.render(slug, parameters, options));
    assert.equal(JSON.stringify({ parameters, baseline, options }), before);
  }
});

test('independent workbench drawings keep SVG definitions and references isolated', () => {
  for (const slug of ['function-composition', 'real-logarithm', 'derivative']) {
    for (const view of ['geometry', 'graph']) {
      const documents = ['panel-a', 'panel-b'].map(id => render(slug, {}, { id, view }));
      const allIds = [];
      for (const html of documents) {
        const ids = [...html.matchAll(/\bid=["']([^"']+)["']/g)].map(([, id]) => id);
        const local = new Set(ids);
        assert.equal(local.size, ids.length, 'A drawing cannot contain duplicate SVG IDs');
        for (const [, reference] of html.matchAll(/url\(#([^)]*)\)/g)) {
          assert.ok(local.has(reference), `Drawing references missing definition ${reference}`);
        }
        allIds.push(...ids);
      }
      assert.equal(new Set(allIds).size, allIds.length, 'Workbench panels must not share definition IDs');
    }
  }
});

test('every valid scene describes keyboard and pointer controls without attaching events', () => {
  for (const slug of ['function-composition', 'real-logarithm', 'derivative']) {
    for (const view of ['geometry', 'graph']) {
      for (const compact of [false, true]) {
        const html = render(slug, {}, { view, compact });
        const handles = sceneHandles(html);
        assert.equal(handles.length, slug === 'derivative' ? 2 : 1, `${slug}/${view} must expose the intended input handles`);
        assert.match(html, /<svg\b[^>]*role="group"/, 'An interactive SVG must expose its slider descendants');
        assert.doesNotMatch(html, /\son(?:pointer|mouse|key|touch)\w*=/i, 'Scenes contain no imperative event handlers');
        handles.forEach(handle => {
          assert.equal(handle.role, 'slider');
          assert.equal(handle.tabindex, '0');
          assert.equal(handle['aria-orientation'], 'horizontal');
          assert.match(handle['aria-label'], /drag.+arrow keys/i);
          assert.ok(handle['aria-valuetext']);
          const min = Number(handle['data-drag-min']), max = Number(handle['data-drag-max']), value = Number(handle['aria-valuenow']);
          assert.equal(Number(handle['aria-valuemin']), min);
          assert.equal(Number(handle['aria-valuemax']), max);
          assert.ok(value >= min && value <= max);
          assert.ok(Number(handle['data-drag-x1']) > Number(handle['data-drag-x0']));
          assert.ok(Number(handle['data-drag-step']) > 0);
        });
        assertFiniteDrawing(html);
      }
    }
  }
});

test('composition graph and input frame controls preserve their distinct coordinate mappings', () => {
  const frame = sceneHandles(render('function-composition', { x: -4 }))[0];
  assert.equal(frame['data-drag-param'], 'x');
  assert.equal(frame['data-drag-mode'], 'relative');
  assert.equal(Number(frame['data-drag-x1']) - Number(frame['data-drag-x0']), 400);
  const graph = sceneHandles(render('function-composition', { x: -4 }, { view: 'graph' }))[0];
  assert.equal(graph['data-drag-mode'], 'absolute');
  assert.equal(Number(graph['data-drag-x0']), 64);
  assert.equal(Number(graph['data-drag-x1']), 722);
  assert.equal(Number(graph['data-drag-min']), -10);
  assert.equal(Number(graph['data-drag-max']), 10);
});

test('derivative handles map a and signed h to the actual curve coordinates, including zero steps', () => {
  for (const view of ['geometry', 'graph']) {
    const width = view === 'graph' ? 658 : 430;
    for (const a of [-3, 0, 3]) {
      for (const h of [-1, 0, 1]) {
        const html = render('derivative', { a, h }, { view });
        const handles = Object.fromEntries(sceneHandles(html).map(handle => [handle['data-drag-param'], handle]));
        const px = value => 64 + (value + 4.2) / 8.4 * width;
        for (const [key, min, max] of [['a', -3, 3], ['h', -1, 1]]) {
          const handle = handles[key];
          assert.ok(handle, `${key} must remain reachable at a=${a}, h=${h}`);
          assert.equal(Number(handle['data-drag-min']), min);
          assert.equal(Number(handle['data-drag-max']), max);
          assert.ok(Math.abs(Number(handle['data-drag-x0']) - px(key === 'a' ? min : a + min)) <= .001);
          assert.ok(Math.abs(Number(handle['data-drag-x1']) - px(key === 'a' ? max : a + max)) <= .001);
        }
        assertFiniteDrawing(html);
      }
    }
  }
});

test('logarithm controls keep a strictly positive range and leave room to increase the default argument', () => {
  for (const view of ['geometry', 'graph']) {
    for (const argument of [Number.MIN_VALUE, .125, 8, Number.MAX_VALUE]) {
      const html = render('real-logarithm', { argument }, { view });
      const handle = sceneHandles(html)[0];
      assert.ok(handle, 'A finite logarithm has an argument handle');
      assert.equal(handle['data-drag-param'], 'argument');
      const min = Number(handle['data-drag-min']), max = Number(handle['data-drag-max']);
      assert.ok(min > 0 && min <= argument);
      assert.ok(Number.isFinite(max) && max >= argument);
      if (argument === 8) assert.ok(max > argument);
      assertFiniteDrawing(html);
    }
  }
});
