import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Metadata = require('../src/continuation-metadata.js');
const Modules = require('../src/playground-modules.js');
const Stories = require('../src/story-library.js');
const Terms = require('../src/math-terms.js');
const Bindings = require('../src/symbol-bindings.js');
const Previews = require('../src/card-previews.js');
const Flow = require('../src/calculation-flow.js');
const Scenes = require('../src/story-scenes.js');

test('the continuation metadata supplies exact new identities, actual bindings and typed quantities', () => {
  assert.equal(Metadata.ids.length, 18);
  assert.equal(new Set(Metadata.ids).size, 18);
  assert.ok(Object.isFrozen(Metadata) && Object.isFrozen(Metadata.ids));
  assert.deepEqual(
    Modules.list()
      .slice(-18)
      .map(m => m.id),
    Metadata.ids
  );
  assert.deepEqual(Previews.list().slice(-18), Metadata.ids);
  for (const id of Metadata.ids) {
    const card = JSON.parse(
      fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8')
    );
    const module = Modules.get(id),
      p = module.defaults(),
      result = module.evaluate(p);
    assert.equal(result.valid, true, id);
    assert.ok(Number.isFinite(result.output), id);
    assert.deepEqual(
      module.views.map(v => v.id),
      ['geometry', 'graph'],
      id
    );
    assert.deepEqual(module.ports, Metadata.ports[id], id);
    for (const symbol of card.grammar.symbols)
      assert.deepEqual(
        Bindings.keysFor(id, symbol.token),
        Metadata.bindings[id][symbol.token],
        id + ' ' + symbol.token
      );
    assert.ok(Object.isFrozen(Metadata.ports[id]));
    assert.ok(Object.isFrozen(Metadata.bindings[id]));
  }
});

test('new stories have actual three-stage calculations and protected quantity lookups', () => {
  for (const id of Metadata.ids) {
    const story = Stories.forSlug(id),
      stages = Flow.stages(story),
      values = Scenes.values(id, story.parameters);
    assert.deepEqual(
      stages.map(s => s.role),
      ['input', 'intermediate', 'output'],
      id
    );
    for (const stage of stages)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), id + ' calculation value ' + key);
        assert.ok(Stories.quantityFor(id, key), id + ' quantity meaning ' + key);
      }
    for (const key of ['constructor', '__proto__', 'toString'])
      assert.equal(Stories.quantityFor(id, key), null, id + ' lookup ' + key);
  }
  for (const id of ['constructor', '__proto__', 'toString'])
    assert.equal(Stories.linksFor(id), null);
});

test('provider interpolation capabilities prevent changing charts through an excluded pole', () => {
  const circle = Modules.get('circle-manifold'),
    p = circle.defaults();
  assert.equal(circle.evaluate({ ...p, angle: 30 }).valid, true);
  assert.equal(circle.evaluate({ ...p, angle: 150 }).valid, true);
  assert.equal(
    circle.canInterpolate({ ...p, angle: 30 }, { ...p, angle: 150 }),
    false,
    'valid endpoints do not justify crossing the missing chart point'
  );
  assert.equal(
    circle.canInterpolate({ ...p, angle: 30 }, { ...p, angle: 60 }),
    true,
    'one regular chart arc remains smooth'
  );
  assert.equal(
    circle.canInterpolate(p, { ...p, pole: 'south' }),
    false,
    'chart changes are categorical'
  );
  const hysteresis = Modules.get('hysteresis'),
    history = hysteresis.defaults();
  assert.equal(
    hysteresis.canInterpolate(history, { ...history, steps: history.steps + 1 }),
    false,
    'whole history states do not interpolate'
  );
  const stability = Modules.get('structural-stability'),
    rule = stability.defaults();
  assert.equal(
    stability.canInterpolate(rule, { ...rule, family: 'fold' }),
    false,
    'changing the rule family does not invent intermediate rules'
  );
});

test('extending a broad reader retains its existing symbols and unscoped meaning', () => {
  const rational = Terms.entries.find(entry => entry.id === 'rational-number');
  assert.ok(rational.symbols.includes('ℚ'));
  assert.equal(
    rational.formulaCards,
    undefined,
    'all rational-number notation remains readable outside the bounded fraction lesson'
  );
  assert.equal(rational.grammarCards, undefined);
  const choose = Terms.entries.find(entry => entry.id === 'binomial-coefficient');
  for (const id of [
    'probability',
    'binomial-distribution',
    'confidence-interval',
    'hypothesis-test',
    'binomial-coefficient'
  ])
    assert.ok(choose.formulaCards.includes(id), id + ' keeps its actual combinations meaning');
});
