import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Links = require('../src/semantic-links.js');
const Models = require('../src/models.js');
const Visuals = require('../src/visuals.js');
const Spatial = require('../src/spatial.js');
const Scenes = require('../src/story-scenes.js');
const Everyday = require('../src/everyday.js');
const Discovery = require('../src/discovery.js');
const Frontier = require('../src/frontier.js');

function node(quantity, active) {
  const attrs = new Map();
  if (quantity !== undefined) attrs.set('data-quantity', quantity);
  if (active !== undefined) attrs.set('data-semantic-active', active);
  return {
    writes: 0,
    getAttribute(key) { return attrs.get(key) ?? null; },
    setAttribute(key, value) { attrs.set(key, String(value)); this.writes++; },
    removeAttribute(key) { if (attrs.delete(key)) this.writes++; }
  };
}
function host(nodes) {
  return { querySelectorAll(selector) {
    const key = selector.slice(1, -1);
    return nodes.filter(item => item.getAttribute(key) !== null);
  } };
}
function bindings(html) {
  return [...html.matchAll(/<[^>]*\bdata-quantity="([^"]+)"[^>]*>/g)].map(([tag, keys]) => ({ tag, keys: keys.split(/\s+/) }));
}
function assertQuantities(html, expected) {
  const present = new Set(bindings(html).flatMap(binding => binding.keys));
  for (const key of expected) assert.ok(present.has(key), `Missing ${key}`);
}
function role(html, name) {
  return bindings(html).find(binding => binding.tag.includes(`data-role="${name}"`));
}

test('semantic bindings load offline and select complete quantity tokens only', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/semantic-links.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasSemanticLinks.paint, 'function');
  const nodes = [node('a'), node('aSquared'), node('real imag'), node('output'), node(undefined)];
  const container = host(nodes);
  assert.equal(Links.paint(container, 'a'), 1);
  assert.deepEqual(nodes.map(item => item.getAttribute('data-semantic-active')), ['true', null, null, null, null]);
  assert.equal(Links.paint(container, ['imag', 'output']), 2);
  assert.deepEqual(nodes.map(item => item.getAttribute('data-semantic-active')), [null, null, 'true', 'true', null]);
  assert.equal(Links.paint(container, '"] arbitrary-selector'), 0, 'Keys are compared as data, never inserted into CSS selectors');
});

test('unchanged selections do not restart visual states and stale selections clear', () => {
  const nodes = [node('x output'), node('x'), node(undefined, 'true')], container = host(nodes);
  assert.equal(Links.paint(container, new Set(['x'])), 2);
  assert.equal(nodes[2].getAttribute('data-semantic-active'), null);
  const writes = nodes.map(item => item.writes);
  Links.paint(container, 'x');
  assert.deepEqual(nodes.map(item => item.writes), writes);
  assert.equal(Links.clear(container), 2);
  assert.equal(Links.clear(container), 0);
  assert.equal(Links.paint(null, 'x'), 0);
  assert.equal(Links.paint(container, null), 0);
  assert.deepEqual(Links.quantities(container), ['output', 'x']);
});

test('a broad story role never substitutes for a missing semantic quantity', () => {
  const unrelated = node();
  unrelated.setAttribute('data-story-part', 'input intermediate output');
  const container = host([unrelated, node('unrelated')]);
  assert.equal(Links.paint(container, 'output'), 0);
  assert.equal(unrelated.getAttribute('data-semantic-active'), null);
});

test('composition binds both functions according to the actual operation order', () => {
  for (const order of ['f_after_g', 'g_after_f']) {
    const p = { ...Models.defaults('function-composition'), order };
    for (const renderer of [Visuals, Spatial]) {
      const html = renderer.render('function-composition', p);
      assertQuantities(html, ['x', 'intermediate', 'output', 'function:f', 'function:g']);
    }
  }
});

test('logarithm and derivative scenes distinguish input, quotient and analytic quantities', () => {
  for (const renderer of [Visuals, Spatial]) {
    assertQuantities(renderer.render('real-logarithm', Models.defaults('real-logarithm')), ['base', 'argument', 'output']);
    assertQuantities(renderer.render('derivative', Models.defaults('derivative')), ['a', 'h', 'fa', 'fah', 'output', 'analytic']);
  }
  const p = { preset: 'cubic', a: 2, h: .1 }, html = Scenes.render('derivative', p, { storyFocus: 'output' });
  assert.deepEqual(role(html, 'motion-cart').keys, ['fa', 'position']);
  assert.deepEqual(role(html, 'speed-arrow').keys, ['analytic', 'speed']);
  assert.deepEqual(role(html, 'interval-distance').keys, ['rise']);
  assert.ok(!role(html, 'motion-cart').keys.includes('speed'), 'A metre position cannot be labelled metres per second');
});

test('every everyday model control and result has an explicit scene binding', () => {
  for (const slug of ['ratio-scale', 'linear-model', 'exponential-change']) {
    assertQuantities(Everyday.render(slug, Everyday.defaults(slug), { storyFocus: 'input' }), [...Everyday.controls(slug).map(control => control.key), 'output']);
  }
  const html = Everyday.render('linear-model', Everyday.defaults('linear-model'));
  assert.deepEqual(role(html, 'water-volume').keys, ['output']);
  assert.deepEqual(role(html, 'initial-water').keys, ['initial']);
  assert.deepEqual(role(html, 'flow-stream').keys, ['rate']);
});

test('discovery control bindings retain the distinct meanings of their visual marks', () => {
  for (const slug of ['chaos-theory', 'fractal-geometry', 'wave-interference', 'probability', 'vector-rotation', 'pythagorean-theorem']) {
    assertQuantities(Discovery.render(slug, Discovery.defaults(slug)), [...Discovery.controls(slug).map(control => control.key), 'output']);
  }
  const vector = Discovery.render('vector-rotation', Discovery.defaults('vector-rotation'));
  assert.deepEqual(role(vector, 'horizontal-projection').keys, ['x', 'output']);
  assert.deepEqual(role(vector, 'vertical-projection').keys, ['y']);
  const triangle = Discovery.render('pythagorean-theorem', Discovery.defaults('pythagorean-theorem'));
  assert.deepEqual(role(triangle, 'hypotenuse-square').keys, ['cSquared']);
  assert.deepEqual(role(triangle, 'garden-diagonal').keys, ['output']);
});

test('frontier controls have explicit bindings without a whole-figure fallback', () => {
  for (const slug of ['integral-accumulation', 'quadratic-optimization', 'complex-multiplication', 'bayes-theorem', 'graph-theory', 'resonance']) {
    const html = Frontier.render(slug, Frontier.defaults(slug));
    assertQuantities(html, [...Frontier.controls(slug).map(control => control.key), 'output']);
    assert.ok(bindings(html).every(binding => !/^<(?:svg|figure)\b/.test(binding.tag)), `${slug}: bind its marks, not the full scene`);
  }
  const complex = Frontier.render('complex-multiplication', Frontier.defaults('complex-multiplication'));
  assert.deepEqual(role(complex, 'multiplier-real-component').keys, ['real']);
  assert.deepEqual(role(complex, 'multiplier-imaginary-component').keys, ['imag']);
  const integral = Frontier.render('integral-accumulation', Frontier.defaults('integral-accumulation'));
  assert.deepEqual(role(integral, 'accumulated-area').keys, ['output', 'distance']);
  assert.deepEqual(role(integral, 'velocity-endpoint').keys, ['velocity']);
});
