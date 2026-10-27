import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Symbols = require('../src/symbol-bindings.js');
const Models = require('../src/models.js');
const Modules = require('../src/playground-modules.js');
const Visuals = require('../src/visuals.js');
const Spatial = require('../src/spatial.js');
const Scenes = require('../src/story-scenes.js');
const cards = fs.readdirSync(new URL('../content/cards/', import.meta.url)).filter(name => name.endsWith('.json')).map(name => JSON.parse(fs.readFileSync(new URL('../content/cards/' + name, import.meta.url), 'utf8')));
const quantityKeys = html => new Set([...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/)));

test('symbol bindings load offline, remain immutable and reject unknown inputs', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/symbol-bindings.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasSymbolBindings.keysFor, 'function');
  assert.deepEqual([...context.AtlasSymbolBindings.keysFor('function-composition', 'f')], ['function:f']);
  for (const slug of ['constructor', 'toString', '__proto__', 'unknown', null, {}]) {
    assert.deepEqual(Symbols.keysFor(slug, 'output'), []);
  }
  for (const token of ['constructor', 'toString', '__proto__', 'output', 'prior ', 'Prior', null, {}]) {
    assert.deepEqual(Symbols.keysFor('bayes-theorem', token), []);
  }
  const keys = Symbols.keysFor('chaos-theory', 's');
  assert.ok(Object.isFrozen(keys));
  assert.throws(() => keys.push('unrelated'));
  assert.deepEqual(Symbols.keysFor('chaos-theory', 's'), ['seed']);
});

test('every mapped canonical grammar token resolves to an actual rendered quantity mark', () => {
  assert.equal(cards.length, Modules.list().length);
  const textOnly = new Set(['function-composition:∘', 'real-logarithm:log', 'derivative:lim', 'probability:X','partial-derivative:h','computational-complexity:O(n)','recurrence:k','quantifier:x','stability:k','relation:x','relation:y','equivalence:c','inference:a','torque:N·m']);
  let mapped = 0, unmapped = 0;
  for (const card of cards) {
    const p = Models.defaults(card.slug);
    const selections = [p, ...Modules.get(card.slug).controls.filter(control=>control.type==='select').flatMap(control=>control.options.map(option=>({...p,[control.key]:option.value})))];
    const html = selections.map(parameters=>Visuals.render(card.slug, parameters) + Spatial.render(card.slug, parameters) + Scenes.render(card.slug, parameters, { storyFocus: 'input' })).join('');
    const present = quantityKeys(html);
    for (const { token } of card.grammar.symbols) {
      const keys = Symbols.keysFor(card.slug, token);
      if (textOnly.has(`${card.slug}:${token}`)) {
        assert.deepEqual(keys, [], `${card.slug} ${token}: should remain text-only`);
        unmapped++;
      } else {
        assert.ok(keys.length > 0, `${card.slug} ${token}: missing authored mapping`);
        for (const key of keys) assert.ok(present.has(key), `${card.slug} ${token}: no rendered ${key} mark`);
        mapped++;
      }
    }
  }
  assert.equal(unmapped, 14);
  assert.ok(mapped > 50);
});

test('aliases distinguish physical quantities and mathematical roles in each card', () => {
  assert.deepEqual(Symbols.keysFor('function-composition', 'f'), ['function:f']);
  assert.deepEqual(Symbols.keysFor('function-composition', 'g'), ['function:g']);
  assert.deepEqual(Symbols.keysFor('derivative', 'f′(a)'), ['analytic']);
  assert.ok(!Symbols.keysFor('derivative', 'f′(a)').includes('output'), 'The finite secant quotient is not the analytic derivative');
  assert.deepEqual(Symbols.keysFor('fractal-geometry', 'n'), ['completedDepth']);
  assert.deepEqual(Symbols.keysFor('fractal-geometry', 'd'), ['depth']);
  assert.deepEqual(Symbols.keysFor('chaos-theory', 'n'), ['generation']);
  assert.deepEqual(Symbols.keysFor('exponential-change', 'n'), ['time']);
  assert.deepEqual(Symbols.keysFor('chaos-theory', 's'), ['seed']);
  assert.deepEqual(Symbols.keysFor('fractal-geometry', 's'), ['length']);
  assert.deepEqual(Symbols.keysFor('ratio-scale', 's'), ['servings']);
  assert.deepEqual(Symbols.keysFor('wave-interference', 'A'), ['amplitude']);
  assert.deepEqual(Symbols.keysFor('resonance', 'amplitude'), ['output']);
});

test('operators, binders and unobserved random variables do not claim a result mark', () => {
  for (const [slug, token] of [['function-composition', '∘'], ['real-logarithm', 'log'], ['derivative', 'lim'], ['probability', 'X']]) {
    assert.deepEqual(Symbols.keysFor(slug, token), []);
  }
  assert.deepEqual(Symbols.keysFor('probability', 'E[X]'), ['output']);
  assert.deepEqual(Symbols.keysFor('pythagorean-theorem', 'c'), ['output']);
  assert.deepEqual(Symbols.keysFor('graph-theory', 'shortestDistance'), ['output']);
});
