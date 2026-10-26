import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const modules = require('../src/playground-modules.js');
const models = require('../src/models.js');
const expectedIds = [
  'set', 'population-sample', 'computational-complexity',
  'directional-derivative', 'tangent-plane', 'gradient-descent',
  'chain-rule', 'partial-derivative', 'gradient',
  'linear-combination', 'basis', 'matrix-product',
  'vector', 'inner-product', 'matrix-linear-map', 'determinant',
  'function', 'exponentiation', 'limit', 'signed-accumulation',
  'integral-accumulation', 'quadratic-optimization', 'complex-multiplication',
  'bayes-theorem', 'graph-theory', 'resonance', 'chaos-theory',
  'fractal-geometry', 'wave-interference', 'probability', 'vector-rotation',
  'pythagorean-theorem', 'ratio-scale', 'linear-model', 'exponential-change',
  'function-composition', 'real-logarithm', 'derivative'
];
const format = value => value == null ? 'undefined' : String(Number(value.toPrecision(7)));
const context = (id, view) => ({ id, view, format, compact: false, camera: .65 });
const finiteScene = (html, label) => {
  assert.equal(typeof html, 'string', label);
  assert.match(html, /<svg\b/, label);
  assert.match(html, /viewBox="0 0 \d+ \d+"/, label);
  assert.doesNotMatch(html, /(?:NaN|[+-]?Infinity)/, label);
  assert.doesNotMatch(html, /(?:x|y|width|height|cx|cy|r|d|transform)="[^"]*undefined/, label);
};

test('all thirty-eight installed model families register through the same module contract', () => {
  assert.deepEqual(modules.list().map(module => module.id), expectedIds);
  for (const id of expectedIds) {
    const module = modules.get(id), instance = modules.createInstance(id, { slot: 'contract-' + id });
    assert.equal(instance.definition, module);
    assert.equal(module.validateParams(module.defaults()).valid, true, id);
    assert.deepEqual(instance.getParameters(), models.defaults(id), id);
    assert.equal(instance.evaluate().valid, true, id);
    assert.equal(instance.evaluate().output, models.evaluate(id, models.defaults(id)).output, id);
    instance.destroy();
  }
});

test('every declared view renders finite geometry at module defaults', () => {
  for (const module of modules.list()) {
    const instance = modules.createInstance(module.id, { slot: 'views-' + module.id });
    for (const view of module.views) {
      finiteScene(instance.render(view.id, context(module.id + '-' + view.id, view.id)), module.id + ' / ' + view.id);
    }
    instance.destroy();
  }
});

test('each topic exposes a distinct graph and the original three retain genuine 3D views', () => {
  const spatialIds = new Set(['function-composition', 'real-logarithm', 'derivative', 'partial-derivative', 'gradient', 'directional-derivative', 'tangent-plane']);
  for (const module of modules.list()) {
    const instance = modules.createInstance(module.id, { slot: 'view-contract' });
    assert.ok(module.views.some(view => view.id === 'graph'), module.id + ' offers Graph');
    const geometry = instance.render('geometry'), graph = instance.render('graph');
    assert.notEqual(graph, geometry, module.id + ' graph must not duplicate the geometry scene');
    assert.equal(module.views.some(view => view.id === 'spatial'), spatialIds.has(module.id));
    if (spatialIds.has(module.id)) {
      const spatial = instance.render('spatial');
      assert.notEqual(spatial, geometry, module.id + ' 3D is a distinct representation');
      assert.notEqual(spatial, graph, module.id + ' 3D is not a graph duplicate');
      assert.match(module.views.find(view => view.id === 'spatial').label, /3D/);
    }
    instance.destroy();
  }
  assert.equal(modules.get('fractal-geometry').views.find(view => view.id === 'graph').inspector, false);
});

test('controls and sweeps expose immutable parameter metadata instead of host slug branches', () => {
  for (const module of modules.list()) {
    const parameters = module.defaults();
    assert.ok(Object.isFrozen(module.controls), module.id);
    assert.ok(Object.isFrozen(module.sweeps), module.id);
    assert.ok(module.controls.length > 0 && module.sweeps.length > 0, module.id);
    assert.ok(module.views.some(view => view.id === module.defaultView), module.id);
    assert.ok(module.sweeps.some(sweep => sweep.key === module.primarySweep), module.id);
    for (const control of module.controls) {
      assert.ok(Object.hasOwn(parameters, control.key), module.id + ' / ' + control.key);
      assert.equal(typeof control.label, 'string');
      assert.ok(Object.isFrozen(control));
      if (control.type === 'select') {
        assert.ok(control.options.some(option => option.value === parameters[control.key]));
        assert.ok(control.options.every(option => typeof option.value === 'string' && typeof option.label === 'string'));
      } else {
        assert.equal(control.type, 'number');
        assert.ok(Number.isFinite(control.min) && Number.isFinite(control.max) && control.min < control.max);
      }
    }
    for (const sweep of module.sweeps) {
      assert.ok(Object.hasOwn(parameters, sweep.key));
      assert.ok(Number.isFinite(sweep.min) && Number.isFinite(sweep.max) && sweep.min < sweep.max);
    }
  }
});

test('two instances of each installed module change independently in the shared workspace', () => {
  for (const module of modules.list()) {
    const left = modules.createInstance(module.id, { slot: 'left' }), right = modules.createInstance(module.id, { slot: 'right' });
    const original = right.getParameters(), sweep = module.sweeps[0];
    const next = original[sweep.key] === sweep.min ? sweep.max : sweep.min;
    assert.equal(left.setParameters({ [sweep.key]: next }).valid, true, module.id);
    assert.equal(left.getParameters()[sweep.key], next);
    assert.deepEqual(right.getParameters(), original, module.id + ' right slot remains independent');
    assert.deepEqual(module.defaults(), original, module.id + ' defaults remain independent');
    const leftScene = left.render(undefined, context(module.id + '-left', module.defaultView));
    const rightScene = right.render(undefined, context(module.id + '-right', module.defaultView));
    finiteScene(leftScene, module.id + ' left'); finiteScene(rightScene, module.id + ' right');
    const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    const leftIds = new Set(ids(leftScene));
    assert.equal(ids(rightScene).some(id => leftIds.has(id)), false, module.id + ' scoped SVG definitions do not collide');
    left.destroy();
    assert.equal(right.evaluate().valid, true, module.id + ' removing one slot preserves its peer');
    right.destroy();
  }
});

test('module readouts return structured data that a shared host can format and present', () => {
  for (const module of modules.list()) {
    const parameters = module.defaults(), result = module.evaluate(parameters);
    const readout = module.readout(parameters, result, context('readout-' + module.id, module.defaultView));
    assert.equal(typeof readout.expression, 'string', module.id);
    assert.ok(readout.expression.length > 0);
    assert.equal(typeof readout.insight, 'string', module.id);
    assert.ok(readout.insight.length > 0);
    assert.ok(Array.isArray(readout.stats) && readout.stats.length > 0, module.id);
    for (const stat of readout.stats) {
      assert.equal(typeof stat.label, 'string');
      assert.equal(typeof stat.note, 'string');
      assert.ok(stat.value === null || Number.isFinite(stat.value), module.id + ' / ' + stat.label);
    }
    assert.deepEqual(parameters, module.defaults(), module.id + ' readout does not mutate parameters');
    assert.ok(Number.isFinite(module.referenceWeight(parameters, result)), module.id);
    assert.equal(module.canInterpolate(parameters, parameters), true, module.id);
  }
});

test('invalid domain demonstrations remain inspectable module states rather than rejected edits', () => {
  const cases = [
    { id: 'real-logarithm', patch: { base: 1 }, status: 'invalid_base', message: /base|NO REAL VALUE|domain/i },
    { id: 'real-logarithm', patch: { argument: 0 }, status: 'undefined_argument', message: /argument|NO REAL VALUE|domain/i },
    { id: 'derivative', patch: { h: 0 }, status: 'undefined_step', message: /undefined|divides by zero|h = 0/i }
  ];
  for (const item of cases) {
    const instance = modules.createInstance(item.id, { slot: 'boundary' });
    assert.equal(instance.setParameters(item.patch).valid, true, item.id + ' accepts structurally valid parameters');
    assert.equal(instance.evaluate().status, item.status);
    for (const view of instance.definition.views) {
      const html = instance.render(view.id, context(item.id + '-' + view.id + '-boundary', view.id));
      finiteScene(html, item.id + ' / ' + view.id);
      assert.match(html, item.message);
    }
    if (item.id === 'derivative') {
      assert.equal(instance.evaluate().analytic, 12, 'The independent analytic tangent is still available');
    }
    instance.destroy();
  }
});

test('structurally invalid edits leave installed module state and sibling slots unchanged', () => {
  for (const module of modules.list()) {
    const instance = modules.createInstance(module.id), before = instance.getParameters();
    assert.equal(instance.setParameters({ unknownParameter: 3 }).valid, false, module.id);
    const numeric = module.controls.find(control => control.type === 'number');
    assert.equal(instance.setParameters({ [numeric.key]: NaN }).valid, false, module.id);
    assert.deepEqual(instance.getParameters(), before, module.id);
    instance.destroy();
  }
});

test('module symbol overrides take precedence while Node and browser share exact authored defaults', () => {
  const context = vm.createContext({
    AtlasModuleRegistry: require('../src/module-registry.js'), AtlasModels: models,
    AtlasModelRegistry: require('../src/model-registry.js'), AtlasVisuals: require('../src/visuals.js'),
    AtlasSpatial: require('../src/spatial.js'), AtlasExperiments: require('../src/experiments.js'),
    AtlasStoryLibrary: require('../src/story-library.js'), AtlasSceneInspector: require('../src/scene-inspector.js'),
    AtlasSymbolBindings: require('../src/symbol-bindings.js'), AtlasModuleGraphs: require('../src/module-graphs.js'), AtlasModulePorts: require('../src/module-ports.js')
  });
  vm.runInContext(fs.readFileSync(new URL('../src/playground-modules.js', import.meta.url), 'utf8'), context);
  for (const registry of [modules, context.AtlasModules]) {
    assert.deepEqual([...registry.symbolKeys('derivative', 'f')], ['function:f']);
    assert.deepEqual([...registry.symbolKeys('derivative', 'f′(a)')], ['analytic']);
    for (const [id, token] of [['function-composition', '∘'], ['real-logarithm', 'log'], ['derivative', 'f′'], ['derivative', 'Δf'], ['unknown', 'output']]) {
      assert.deepEqual([...registry.symbolKeys(id, token)], [], `${id} ${token} must not use a legacy fallback`);
    }
    const original = registry.get('function-composition');
    try {
      registry.unregister(original.id);
      registry.register({ ...original, symbols: { f: ['local-function'], x: [] } });
      assert.deepEqual([...registry.symbolKeys(original.id, 'f')], ['local-function'], 'Local module metadata overrides a built-in symbol binding');
      assert.deepEqual([...registry.symbolKeys(original.id, 'x')], [], 'An explicit empty override keeps a symbol text-only');
      assert.deepEqual([...registry.symbolKeys(original.id, 'g')], ['function:g'], 'An undeclared local token retains its exact authored helper binding');
      assert.deepEqual([...registry.symbolKeys(original.id, 'output')], [], 'Unknown tokens never become quantity keys by coincidence');
    } finally {
      registry.unregister(original.id);
      registry.register(original);
    }
    const custom = { ...original, id: 'custom-symbol-module', symbols: { f: ['custom-mark'] } };
    try {
      registry.register(custom);
      assert.deepEqual([...registry.symbolKeys(custom.id, 'f')], ['custom-mark'], 'A new module supplies its own mappings without a helper allowlist');
      assert.deepEqual([...registry.symbolKeys(custom.id, 'g')], []);
    } finally { registry.unregister(custom.id); }
  }
});
