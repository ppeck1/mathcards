import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const E = require('../src/everyday.js');
const M = require('../src/models.js');
const V = require('../src/visuals.js');
const S = require('../src/spatial.js');
const slugs = ['ratio-scale', 'linear-model', 'exponential-change'];
const near = (a, b) => assert.ok(Math.abs(a - b) <= Math.max(1, Math.abs(b)) * 1e-12, `${a} ≈ ${b}`);

function attributes(html, role) {
  return [...html.matchAll(/<[^>]+>/g)].filter(([tag]) => tag.includes(`data-role="${role}"`)).map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])));
}
function assertFinite(html) {
  for (const [tag] of html.matchAll(/<[^>]+>/g)) assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/);
  assert.doesNotMatch(html, /(?:<script|onload=|javascript:)/i);
}

test('everyday models share allowlisted arithmetic across Node and offline browser APIs', () => {
  const context = vm.createContext({});
  for (const file of ['everyday', 'models', 'visuals', 'spatial']) vm.runInContext(fs.readFileSync(new URL(`../src/${file}.js`, import.meta.url), 'utf8'), context);
  for (const [slug, expected] of [['ratio-scale', 450], ['linear-model', 40], ['exponential-change', 614.4]]) {
    near(E.evaluate(slug, {}).output, expected);
    near(M.evaluate(slug, {}).output, expected);
    near(context.AtlasModels.evaluate(slug, {}).output, expected);
    assert.match(context.AtlasVisuals.render(slug, {}, { id: slug }), /<svg/);
    assert.match(context.AtlasSpatial.render(slug, {}, { id: slug }), /<svg/);
  }
});

test('recipe scales preserve per-serving mass including zero and fractional servings', () => {
  for (const baseServings of [1, 2.5, 4, 12]) for (const servings of [1, 1.5, 6, 12]) {
    const result = E.evaluate('ratio-scale', { amount: 315, baseServings, servings });
    near(result.output / servings, 315 / baseServings);
    near(result.factor, servings / baseServings);
    near(E.curveValue('ratio-scale', result.parameters, servings), result.output);
  }
  assert.equal(E.evaluate('ratio-scale', { amount: 0 }).output, 0);
  assert.equal(E.evaluate('ratio-scale', { amount: 1000, baseServings: 1, servings: 12 }).output, 12000);
});

test('water model adds equal amounts in equal intervals and preserves an empty tank', () => {
  for (const initial of [0, 20, 100]) for (const rate of [0, 4, 20]) {
    const first = E.evaluate('linear-model', { initial, rate, time: 2.5 });
    const second = E.evaluate('linear-model', { initial, rate, time: 3.5 });
    near(second.output - first.output, rate);
    near(first.increment, rate * 2.5);
    near(E.curveValue('linear-model', first.parameters, 2.5), first.output);
  }
  assert.equal(E.evaluate('linear-model', { initial: 0, rate: 0 }).output, 0);
});

test('photograph model repeats a factor, preserves identity, and supports continuous interpolation', () => {
  for (const factor of [.25, .8, 1, 1.25, 2]) for (const time of [0, .5, 3, 7]) {
    const first = E.evaluate('exponential-change', { initial: 1200, factor, time });
    const next = E.evaluate('exponential-change', { initial: 1200, factor, time: time + 1 });
    near(next.output / first.output, factor);
    near(first.height / first.output, 2 / 3);
    near(E.curveValue('exponential-change', first.parameters, time), first.output);
  }
  near(E.evaluate('exponential-change', { initial: 1, factor: .25, time: 8 }).output, 1 / 65536);
  assert.equal(E.evaluate('exponential-change', { initial: 2000, factor: 2, time: 8 }).output, 512000);
  assert.equal(E.curveValue('exponential-change', { factor: 2 }, Number.MAX_VALUE), null);
});

test('all new parameters reject unknowns, nonfinite values and bounds violations without clamping', () => {
  for (const slug of slugs) {
    for (const input of [null, [], '', { evil: 'initial*time' }]) assert.equal(E.evaluate(slug, input).status, 'invalid_parameters');
    for (const { key, min, max } of E.controls(slug)) {
      for (const bad of [NaN, Infinity, -Infinity, '1', min - .001, max + .001]) {
        const result = M.evaluate(slug, { [key]: bad });
        assert.equal(result.status, 'invalid_parameters', `${slug}.${key} = ${bad}`);
        assert.equal(result.output, null);
      }
    }
    assert.equal(E.curveValue(slug, {}, -1), null);
    assert.equal(E.curveValue(slug, {}, Infinity), null);
  }
  assert.equal(E.evaluate('constructor', {}).status, 'invalid_parameters');
  assert.throws(() => E.defaults('unknown'), RangeError);
});

test('metadata, parameters and evaluated results cannot mutate future state', () => {
  for (const slug of slugs) {
    const original = E.defaults(slug), input = Object.freeze({ ...original });
    const result = E.evaluate(slug, input);
    assert.deepEqual(input, original);
    const controls = E.controls(slug); controls[0].min = -100; controls.push({ key: 'evil' });
    const specs = E.specs(slug); specs.title = 'changed';
    result.parameters[Object.keys(original)[0]] = -100;
    assert.deepEqual(E.defaults(slug), original);
    assert.notEqual(E.controls(slug)[0].min, -100);
    assert.notEqual(E.specs(slug).title, 'changed');
  }
});

test('ingredient filled area and water filled height encode the actual displayed quantities', () => {
  const recipe = E.render('ratio-scale', { servings: 6, amount: 300, baseServings: 4 });
  const jars = attributes(recipe, 'ingredient-mass');
  near(Number(jars[1].height) / Number(jars[0].height), 1.5);
  near(Number(jars[1].width) * Number(jars[1].height) / (Number(jars[0].width) * Number(jars[0].height)), 1.5);
  const tank20 = attributes(E.render('linear-model', { time: 0 }), 'water-volume')[0];
  const tank40 = attributes(E.render('linear-model', { time: 5 }), 'water-volume')[0];
  near(Number(tank40.height) / Number(tank20.height), 2);
  assert.equal(tank20.width, tank40.width);
  assert.equal(attributes(E.render('linear-model', { initial: 0, rate: 0 }), 'water-volume')[0].height, '0');
});

test('photo width carries pixel magnitude while dimensions preserve the labeled aspect ratio', () => {
  const html = E.render('exponential-change', {}, { baseline: { initial: 1200, factor: 1, time: 3 } });
  const current = attributes(html, 'photo-width')[0], original = attributes(html, 'original-photo')[0];
  near(Number(current.width) / Number(original.width), .8 ** 3);
  near(Number(current.width) / Number(current.height), 1.5);
  assert.match(html, /Width is the quantity being measured/);
  assert.match(html, /−585\.6 px/);
  assert.equal(attributes(html, 'baseline-photo').length, 1);
});

test('graphs expose the true current point and label the measured units and independent variable', () => {
  for (const slug of slugs) {
    const result = E.evaluate(slug, {}), meta = E.specs(slug);
    const html = V.render(slug, {}, { view: 'graph', id: `${slug}-graph` });
    const point = attributes(html, 'current-point')[0];
    near(Number(point['data-x']), result.parameters[meta.axis]);
    near(Number(point['data-y']), result.output);
    assert.match(html, /ZERO-BASED AXES/);
    assert.match(html, /data-role="model-curve"/);
    assertFinite(html);
  }
});

test('scene IDs are namespaced, accessibility handles stay in-domain and all extreme geometry is finite', () => {
  for (const slug of slugs) for (const view of ['geometry', 'graph', 'space']) {
    const candidates = [{}, ...E.controls(slug).flatMap(({ key, min, max }) => [{ [key]: min }, { [key]: max }])];
    for (const params of candidates) {
      const html = E.render(slug, params, { id: 'scene <"&>', view });
      assertFinite(html);
      assert.match(html, /aria-labelledby="everyday-scene-+/);
      const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
      assert.equal(ids.length, new Set(ids).size);
      for (const [, target] of html.matchAll(/url\(#([^)]+)\)/g)) assert.ok(ids.includes(target), `Missing local SVG definition ${target}`);
      assert.match(html, /role="slider" tabindex="0"/);
      assert.match(html, /aria-valuenow="/);
    }
    assertFinite(S.render(slug, {}, { id: 'space-fallback' }));
    assert.match(E.render(slug, { evil: '<script>' }), /Check the variable values/);
  }
});
