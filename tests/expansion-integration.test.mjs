import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url),
  Modules = require('../src/playground-modules.js'),
  Models = require('../src/models.js'),
  Stories = require('../src/story-library.js'),
  Terms = require('../src/math-terms.js'),
  Previews = require('../src/card-previews.js'),
  Bindings = require('../src/symbol-bindings.js'),
  Order = require('../src/learning-order.js');
const root = path.resolve(new URL('..', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const cards = fs
  .readdirSync(path.join(root, 'content/cards'))
  .filter(n => n.endsWith('.json'))
  .map(n => JSON.parse(fs.readFileSync(path.join(root, 'content/cards', n), 'utf8')));
const cardIds = new Set(cards.map(c => c.id)),
  slugs = new Set(cards.map(c => c.slug));
const introduced = cards.filter(card =>
  ['source:inference:', 'source:systems:'].some(prefix =>
    card.source_refs.some(ref => ref.startsWith(prefix))
  )
);
const close = (a, b) =>
  assert.ok(Math.abs(a - b) <= 1e-10 * Math.max(1, Math.abs(a), Math.abs(b)), `${a} != ${b}`);

test('every canonical lesson has one module, story, preview and a consistent view contract', () => {
  assert.deepEqual(new Set(Modules.list().map(m => m.id)), slugs);
  assert.equal(Stories.all().length, cards.length);
  for (const card of cards) {
    const module = Modules.get(card.slug);
    assert.ok(module);
    assert.equal(module.id, card.slug);
    assert.ok(module.views.some(v => v.id === 'geometry'));
    assert.ok(module.views.some(v => v.id === 'graph'));
    assert.ok(Stories.forSlug(card.slug), card.slug + ' missing story');
    assert.ok(Previews.has(card.slug), card.slug + ' missing preview');
    assert.equal(Order.slugs.filter(s => s === card.slug).length, 1);
  }
  assert.equal(Modules.list().filter(m => m.views.some(v => v.id === 'spatial')).length, 7);
  assert.equal(
    Modules.list().reduce((sum, m) => sum + m.views.length, 0),
    cards.length * 2 + 7
  );
});

test('new family fixtures survive the public model facade and shared independent module instances', () => {
  assert.ok(introduced.length > 0);
  for (const card of introduced) {
    for (const fixture of card.interactive.expected_cases) {
      const result = Models.evaluate(card.slug, fixture.input);
      if (fixture.status)
        assert.equal(result.status, fixture.status, card.slug + JSON.stringify(fixture.input));
      if ('output' in fixture) close(result.output, fixture.output);
    }
    const a = Modules.createInstance(card.slug, { slot: 'integration-a' }),
      b = Modules.createInstance(card.slug, { slot: 'integration-b' });
    const before = b.getParameters();
    const c = Modules.get(card.slug).controls.find(c => c.type !== 'select');
    a.setParameters({ [c.key]: c.min });
    assert.deepEqual(b.getParameters(), before);
    for (const view of ['geometry', 'graph']) {
      const html = a.render(view, {
        id: 'integration-' + card.slug + '-' + view,
        compact: true,
        sceneControl: false
      });
      assert.match(html, /<svg/);
      assert.doesNotMatch(html, /NaN|Infinity/);
    }
    a.destroy();
    b.destroy();
  }
});

test('new story presets and quantity tokens agree with installed mathematical controls', () => {
  for (const card of introduced) {
    const story = Stories.forSlug(card.slug),
      module = Modules.get(card.slug),
      result = module.evaluate(story.parameters);
    assert.equal(result.valid, true, card.slug + ' story starts invalid');
    for (const variable of story.variables) {
      assert.ok(module.controls.some(c => c.key === variable.key));
      assert.ok(Stories.quantityFor(card.slug, variable.key));
    }
    const html = module.views
      .map(v =>
        v.render(module.defaults(), {
          id: 'binding-' + card.slug + '-' + v.id,
          sceneControl: false
        })
      )
      .join('');
    const quantities = new Set(
      [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/))
    );
    for (const symbol of card.grammar.symbols) {
      const keys = Bindings.keysFor(card.slug, symbol.token);
      assert.ok(keys.length, card.slug + ' ' + symbol.token + ' lacks scoped binding');
      for (const key of keys)
        assert.ok(
          quantities.has(key),
          card.slug + ' ' + symbol.token + ' lacks ' + key + ' scene mark'
        );
    }
  }
});

test('all lesson references and relations resolve without duplicate canonical or index identities', () => {
  const sources = JSON.parse(
      fs.readFileSync(path.join(root, 'content/sources.json'), 'utf8')
    ).sources,
    sourceIds = new Set(sources.map(s => s.id));
  assert.equal(sourceIds.size, sources.length);
  assert.equal(cardIds.size, cards.length);
  assert.equal(slugs.size, cards.length);
  assert.equal(new Set(Terms.entries.map(t => t.id)).size, Terms.entries.length);
  for (const card of introduced) {
    for (const ref of card.source_refs)
      assert.ok(sourceIds.has(ref), card.slug + ' unknown ' + ref);
    for (const refs of Object.values(card.prerequisites))
      for (const ref of refs) assert.ok(cardIds.has(ref), card.slug + ' prerequisite ' + ref);
    for (const edge of card.connections)
      if (edge.target_status === 'available') assert.ok(cardIds.has(edge.target));
    assert.ok(
      Terms.entries.some(term => (term.grammarCards || []).includes(card.slug)),
      card.slug + ' has no indexed language'
    );
  }
});

test('development script dependencies load offline in their actual declared order', () => {
  const html = fs.readFileSync(path.join(root, 'src/index.html'), 'utf8'),
    scripts = [...html.matchAll(/<script\b[^>]*src="([^"?]+)(?:\?[^"]*)?"[^>]*>/g)].map(
      ([, name]) => name
    ),
    position = name => scripts.indexOf(name);
  for (const [dependency, consumer] of [
    ['plot-view.js', 'inference-models.js'],
    ['legacy-models.js', 'model-registry.js'],
    ['systems-models.js', 'model-registry.js'],
    ['inference-models.js', 'model-registry.js'],
    ['systems-stories.js', 'story-library.js'],
    ['inference-stories.js', 'story-library.js'],
    ['inference-bindings.js', 'expansion-bindings.js'],
    ['expansion-bindings.js', 'symbol-bindings.js'],
    ['math-notation.js', 'math-index.js'],
    ['math-index.js', 'app.js'],
    ['math-index-data.js', 'app.js'],
    ['inference-previews.js', 'card-previews.js'],
    ['subject-inventory-data.js', 'app.js'],
    ['subject-inventory.js', 'app.js']
  ]) {
    assert.ok(position(dependency) >= 0, dependency + ' absent');
    assert.ok(position(dependency) < position(consumer), dependency + ' must precede ' + consumer);
  }
  const context = vm.createContext({});
  for (const script of scripts) {
    if (script === 'app.js') break;
    assert.ok(fs.existsSync(path.join(root, 'src', script)), script + ' missing');
    vm.runInContext(fs.readFileSync(path.join(root, 'src', script), 'utf8'), context, {
      filename: script
    });
  }
  assert.equal(context.AtlasModules.list().length, cards.length);
  assert.equal(context.AtlasMathTerms, undefined, 'reference authorship is not runtime data');
  assert.equal(context.AtlasExpansionTerms, undefined);
  for (const card of introduced) {
    const result = context.AtlasModels.evaluate(card.slug, context.AtlasModels.defaults(card.slug));
    assert.equal(result.valid, true, card.slug);
    assert.ok(context.AtlasCardPreviews.has(card.slug));
  }
});
