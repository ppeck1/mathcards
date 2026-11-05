import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Legacy = require('../src/legacy-models.js');
const Providers = require('../src/model-registry.js');
const Models = require('../src/models.js');
const Modules = require('../src/playground-modules.js');
const Store = require('../src/workspace-store.js');
const slugs = ['function-composition', 'real-logarithm', 'derivative'];

test('all original families implement and enter the common provider contract', () => {
  for (const slug of slugs) {
    assert.equal(Legacy.has(slug), true);
    assert.equal(Providers.has(slug), true);
    assert.equal(Providers.isLegacy(slug), true);
    assert.equal(Providers.isDiscovery(slug), false);
    assert.equal(Modules.get(slug).version, '1');
    const fields = new Set(Providers.controls(slug).map(control => control.key));
    assert.deepEqual(fields, new Set(Object.keys(Models.defaults(slug))));
    assert.deepEqual(Providers.specs(slug).views, ['geometry', 'spatial', 'graph']);
    const defaults = Providers.defaults(slug);
    defaults[Object.keys(defaults)[0]] = 'changed';
    assert.notDeepEqual(Providers.defaults(slug), defaults);
  }
  assert.equal(Legacy.has('linear-model'), false);
  assert.equal(Providers.isLegacy('linear-model'), false);
});

test('registry and stable facade retain exact and undefined mathematical boundaries', () => {
  const cases = [
    [
      'function-composition',
      { order: 'f_after_g' },
      { output: 49, intermediate: 7, status: 'valid' }
    ],
    [
      'function-composition',
      { order: 'g_after_f' },
      { output: 19, intermediate: 9, status: 'valid' }
    ],
    [
      'real-logarithm',
      { base: 4, argument: 2 },
      { exactDisplay: '1/2', output: 0.5, status: 'valid' }
    ],
    [
      'real-logarithm',
      { base: 0.5, argument: 8 },
      { exactDisplay: '−3', output: -3, status: 'valid' }
    ],
    ['real-logarithm', { base: 1, argument: 8 }, { output: null, status: 'invalid_base' }],
    ['real-logarithm', { argument: 0 }, { output: null, status: 'undefined_argument' }],
    [
      'derivative',
      { preset: 'absolute', a: 0, h: 0.1 },
      { output: 1, analytic: null, status: 'valid' }
    ],
    [
      'derivative',
      { preset: 'cubic', a: 2, h: 0 },
      { output: null, analytic: 12, status: 'undefined_step' }
    ]
  ];
  for (const [slug, parameters, expected] of cases) {
    const direct = Legacy.evaluate(slug, parameters);
    assert.deepEqual(Providers.evaluate(slug, parameters), direct);
    assert.deepEqual(Models.evaluate(slug, parameters), direct);
    for (const [field, value] of Object.entries(expected))
      assert.equal(direct[field], value, slug + ':' + field);
  }
});

test('classic provider arithmetic needs neither DOM nor loaded renderers, and drawing resolves afterward', () => {
  const context = vm.createContext({});
  const load = name =>
    vm.runInContext(
      fs.readFileSync(new URL('../src/' + name + '.js', import.meta.url), 'utf8'),
      context
    );
  load('legacy-models');
  assert.equal(context.AtlasLegacyModels.evaluate('function-composition', {}).output, 49);
  assert.equal(
    context.AtlasLegacyModels.evaluate('real-logarithm', { base: 4, argument: 2 }).exactDisplay,
    '1/2'
  );
  assert.throws(
    () => context.AtlasLegacyModels.render('derivative', {}),
    /view adapter is not loaded/
  );
  for (const name of ['model-registry', 'models', 'visuals', 'spatial']) load(name);
  for (const slug of slugs)
    for (const view of ['geometry', 'graph', 'spatial']) {
      const html = context.AtlasModelRegistry.render(slug, {}, { view, id: 'isolated-' + view });
      assert.match(html, /<svg/);
      for (const [tag] of html.matchAll(/<[^>]+>/g)) assert.doesNotMatch(tag, /NaN|Infinity/);
    }
});

test('pre-consolidation revision-one workspaces restore exact original states', () => {
  const composition = { a: 1, b: 0, c: 0, m: 2, n: 1, x: 3, order: 'g_after_f' };
  const makeSlot = (id, module, parameters, view) => ({
    id,
    module_id: module,
    module_version: '1',
    parameters,
    view,
    camera: 0.65,
    baseline: null,
    inspector: null
  });
  const workspaces = [
    {
      schema_version: '1.0.0',
      kind: 'math-atlas-workspace',
      id: 'workspace:legacy-orders',
      title: 'Order and exact logarithms',
      created_at: '2026-10-26T12:00:00Z',
      connection: null,
      slots: [
        makeSlot('work-0', 'function-composition', composition, 'spatial'),
        makeSlot('work-1', 'real-logarithm', { base: 4, argument: 2 }, 'graph')
      ]
    },
    {
      schema_version: '1.0.0',
      kind: 'math-atlas-workspace',
      id: 'workspace:legacy-boundaries',
      title: 'An undefined secant and invalid base',
      created_at: '2026-10-26T12:00:00Z',
      connection: null,
      slots: [
        makeSlot('work-0', 'derivative', { preset: 'absolute', a: 0, h: 0 }, 'geometry'),
        makeSlot('work-1', 'real-logarithm', { base: 1, argument: 0 }, 'spatial')
      ]
    }
  ];
  const source = JSON.stringify({
    schema_version: '1.0.0',
    kind: 'math-atlas-workspace-backup',
    workspaces
  });
  const store = Store.createStore({ storage: null, modules: Modules });
  const result = store.importBackup(source);
  assert.equal(result.ok, true, result.error);
  assert.deepEqual(store.list(), workspaces);
  for (const workspace of workspaces)
    assert.equal(store.compatibility(workspace.id).replayable, true);
  assert.equal(
    Modules.get('function-composition').evaluate(store.list()[0].slots[0].parameters).output,
    19
  );
  assert.equal(
    Modules.get('real-logarithm').evaluate(store.list()[0].slots[1].parameters).exactDisplay,
    '1/2'
  );
  assert.equal(
    Modules.get('derivative').evaluate(store.list()[1].slots[0].parameters).analytic,
    null
  );
  assert.equal(
    Modules.get('real-logarithm').evaluate(store.list()[1].slots[1].parameters).status,
    'invalid_base'
  );
  const restored = Store.createStore({ storage: null, modules: Modules });
  assert.equal(restored.importBackup(store.exportBackup()).ok, true);
  assert.deepEqual(restored.list(), workspaces);
});
