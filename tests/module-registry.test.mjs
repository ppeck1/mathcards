import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { createRegistry } = require('../src/module-registry.js');
const definition = (overrides = {}) => ({
  id: 'test-growth', version: '1', title: 'Test growth',
  defaults: () => ({ amount: 2, factor: 3 }),
  validateParams(parameters) {
    const errors = [];
    for (const key of Object.keys(parameters)) if (!['amount', 'factor'].includes(key)) errors.push({ field: key, message: 'Unknown parameter.' });
    for (const key of ['amount', 'factor']) if (!Number.isFinite(parameters[key]) || parameters[key] < 0 || parameters[key] > 10) errors.push({ field: key, message: 'Use a number from 0 to 10.' });
    return { valid: errors.length === 0, parameters: { ...parameters }, errors, warnings: [] };
  },
  evaluate: parameters => ({ output: parameters.amount * parameters.factor }),
  controls: [{ key: 'amount', label: 'Amount', min: 0, max: 10, step: .1 }],
  sweeps: [{ key: 'amount', label: 'Amount', min: 0, max: 10 }],
  views: [
    { id: 'shape', label: 'Shape', render: (parameters, context) => ({ width: parameters.amount * parameters.factor, slot: context.slot, detail: context.detail }) },
    { id: 'table', label: 'Table', render: parameters => [[parameters.amount, parameters.factor]] }
  ],
  defaultView: 'shape',
  experiments: [{ id: 'double', finish: { amount: 4 } }],
  ...overrides
});

test('the registry loads as an offline classic script without a document', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/module-registry.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasModuleRegistry.createRegistry, 'function');
  assert.equal(context.AtlasModuleRegistry.createRegistry().list().length, 0);
});

test('a new local module registers without a host allowlist and exposes immutable copied metadata', () => {
  const registry = createRegistry(), source = definition();
  const registered = registry.register(source);
  source.controls[0].label = 'Changed elsewhere';
  source.views.push({ id: 'extra', label: 'Extra', render() {} });
  source.experiments[0].finish.amount = 8;
  assert.equal(registered.controls[0].label, 'Amount');
  assert.equal(registered.views.length, 2);
  assert.equal(registered.experiments[0].finish.amount, 4);
  assert.equal(registered.evaluate, source.evaluate, 'Trusted local function references are retained');
  assert.ok(Object.isFrozen(registered));
  assert.ok(Object.isFrozen(registered.controls[0]));
  assert.ok(Object.isFrozen(registered.experiments[0].finish));
  assert.throws(() => { registered.controls[0].min = -10; }, TypeError);
  assert.equal(registry.get(source.id), registered);
  assert.equal(registry.has(source.id), true);
  assert.equal(registry.has('missing'), false);
  assert.equal(registry.get('missing'), undefined);
  assert.deepEqual(registry.list(), [registered]);
});

test('two slots own separate parameters and independent edits', () => {
  const registry = createRegistry(); registry.register(definition());
  const initial = { amount: 4 };
  const first = registry.createInstance('test-growth', { parameters: initial, slot: 'left' });
  const second = registry.createInstance('test-growth', { slot: 'right' });
  initial.amount = 9;
  assert.deepEqual(first.getParameters(), { amount: 4, factor: 3 });
  assert.deepEqual(second.getParameters(), { amount: 2, factor: 3 });
  const edit = first.setParameters({ factor: 5 });
  edit.parameters.amount = 1;
  const read = first.getParameters(); read.factor = 1;
  assert.equal(first.evaluate().output, 20);
  assert.equal(second.evaluate().output, 6);
  assert.equal(first.id, 'test-growth');
  assert.equal(first.slot, 'left');
  assert.deepEqual(first.render(undefined, { detail: 'close', slot: 'override' }), { width: 20, slot: 'left', detail: 'close' });
  assert.deepEqual(second.render('table'), [[2, 3]]);
});

test('invalid edits are atomic, preserve the last state, and report validation errors', () => {
  const registry = createRegistry(); registry.register(definition());
  const instance = registry.createInstance('test-growth');
  for (const patch of [{ amount: 4, factor: 11 }, { amount: NaN }, { amount: '4' }, { formula: 'amount * factor' }, null, [], 7]) {
    const result = instance.setParameters(patch);
    assert.equal(result.valid, false);
    assert.ok(result.errors.length > 0);
    assert.deepEqual(result.parameters, { amount: 2, factor: 3 });
    assert.deepEqual(instance.getParameters(), { amount: 2, factor: 3 });
  }
  assert.equal(instance.setParameters({ amount: 0, factor: 0 }).valid, true);
  assert.equal(instance.evaluate().output, 0, 'Valid zero values are retained');
  assert.throws(() => registry.createInstance('test-growth', { parameters: { factor: -1 } }), /Initial module parameters/);
});

test('parameter validation and rendering cannot mutate another call or instance state', () => {
  const registry = createRegistry();
  registry.register(definition({
    evaluate(parameters) { parameters.amount = 100; return parameters; },
    views: [{ id: 'shape', label: 'Shape', render(parameters) { parameters.factor = 100; return parameters; } }]
  }));
  const instance = registry.createInstance('test-growth');
  assert.equal(instance.evaluate().amount, 100);
  assert.equal(instance.render().factor, 100);
  assert.deepEqual(instance.getParameters(), { amount: 2, factor: 3 });
});

test('unknown and duplicate modules or views fail without replacing installed modules', () => {
  const registry = createRegistry(), first = registry.register(definition());
  assert.throws(() => registry.register(definition({ title: 'Replacement' })), /already registered/);
  assert.equal(registry.get(first.id), first);
  assert.throws(() => registry.createInstance('missing'), /Unknown module/);
  assert.throws(() => registry.createInstance(first.id).render('missing'), /Unknown view/);
  assert.throws(() => registry.register(definition({ id: 'another', defaultView: 'missing' })), /default view/);
  assert.throws(() => registry.register(definition({ id: 'another', views: [first.views[0], first.views[0]] })), /Duplicate view/);
  assert.equal(registry.list().length, 1);
});

test('descriptor contracts reject malformed controls, sweeps, callbacks, and defaults', () => {
  const changes = [
    { version: '' }, { title: '' }, { defaults: {} }, { evaluate: 'amount * factor' },
    { validateParams: () => true },
    { defaults: () => ({ amount: -1, factor: 3 }) },
    { controls: [{ key: 'missing', label: 'Missing' }] },
    { controls: [{ key: 'amount', label: 'Amount', min: 0, max: Infinity }] },
    { sweeps: [{ key: 'amount', label: 'Amount', min: 1, max: 1 }] },
    { controls: [definition().controls[0], definition().controls[0]] },
    { views: [] }, { experiments: {} }, { inspector: {} }, { readout: 'output' }
  ];
  for (const change of changes) assert.throws(() => createRegistry().register(definition(change)), TypeError);
});

test('hostile ids and poison keys cannot become registry or parameter properties', () => {
  const registry = createRegistry();
  for (const id of ['__proto__', 'prototype', 'constructor', '../module', '<script>', 'Not-a-slug', '']) {
    assert.throws(() => registry.register(definition({ id })), /safe lower-case slug/);
  }
  registry.register(definition());
  const instance = registry.createInstance('test-growth');
  for (const key of ['__proto__', 'prototype', 'constructor']) {
    const patch = JSON.parse('{"' + key + '":{"polluted":true}}');
    assert.equal(instance.setParameters(patch).valid, false);
    assert.throws(() => registry.register(Object.assign(definition({ id: 'unsafe-metadata' }), { metadata: patch })), /Unsafe module data key/);
  }
  assert.equal({}.polluted, undefined);
  assert.deepEqual(instance.getParameters(), { amount: 2, factor: 3 });
});

test('accessors, inherited state, cycles, and unknown validator-normalized keys are rejected', () => {
  const registry = createRegistry();
  let calls = 0;
  const malicious = definition();
  Object.defineProperty(malicious, 'title', { get() { calls++; return 'Side effect'; }, enumerable: true });
  assert.throws(() => registry.register(malicious), /accessors/);
  assert.equal(calls, 0);
  const cyclic = definition(); cyclic.extra = cyclic;
  assert.throws(() => registry.register(cyclic), /cycles/);
  registry.register(definition());
  const instance = registry.createInstance('test-growth');
  assert.equal(instance.setParameters(Object.create({ amount: 7 })).valid, false);
  const getterPatch = {}; Object.defineProperty(getterPatch, 'amount', { get() { calls++; return 7; }, enumerable: true });
  assert.equal(instance.setParameters(getterPatch).valid, false);
  assert.equal(calls, 0);
  const permissive = createRegistry();
  permissive.register(definition({ validateParams: parameters => ({ valid: true, parameters, errors: [] }) }));
  assert.equal(permissive.createInstance('test-growth').setParameters({ unknown: 4 }).valid, false);
});

test('destroy is idempotent and unregister does not change another mounted instance', () => {
  const registry = createRegistry(); registry.register(definition());
  const first = registry.createInstance('test-growth'), second = registry.createInstance('test-growth');
  assert.equal(registry.unregister('test-growth'), true);
  assert.equal(registry.unregister('test-growth'), false);
  assert.equal(registry.list().length, 0);
  assert.equal(second.evaluate().output, 6);
  assert.throws(() => registry.createInstance('test-growth'), /Unknown module/);
  first.destroy(); first.destroy();
  for (const operation of [() => first.getParameters(), () => first.evaluate(), () => first.render(), () => first.setParameters({ amount: 3 })]) {
    assert.throws(operation, /destroyed/);
  }
  assert.equal(second.setParameters({ amount: 3 }).valid, true);
  assert.equal(second.evaluate().output, 9);
});

test('formula prose stays inert while a nineteenth local module shares the registry space', () => {
  const registry = createRegistry();
  for (let i = 1; i <= 18; i++) registry.register(definition({ id: 'existing-' + i }));
  globalThis.__atlasModuleProseExecuted = false;
  try {
    const module = definition({ id: 'nineteenth-module', expression: 'globalThis.__atlasModuleProseExecuted = true', readout: (parameters, result) => ({ label: 'Output', value: result.output }) });
    registry.register(module);
    const a = registry.createInstance(module.id, { slot: 'a' }), b = registry.createInstance('existing-1', { slot: 'b' });
    assert.equal(registry.list().length, 19);
    assert.equal(a.evaluate().output, 6);
    assert.equal(b.evaluate().output, 6);
    assert.equal(globalThis.__atlasModuleProseExecuted, false);
    assert.equal(registry.get(module.id).expression, 'globalThis.__atlasModuleProseExecuted = true');
  } finally { delete globalThis.__atlasModuleProseExecuted; }
});

const inputPort = (overrides = {}) => ({ id: 'input:amount', label: 'Amount', direction: 'input', key: 'amount', type: 'mass', unit: 'g', description: 'The input ingredient mass.', ...overrides });
const outputPort = (overrides = {}) => ({ id: 'output:output', label: 'Scaled mass', direction: 'output', key: 'output', type: 'mass', unit: 'g', ...overrides });

test('quantity ports are optional and metadata-only modules do not trigger evaluation', () => {
  for (const ports of [undefined, [], [inputPort()]]) {
    let calls = 0;
    const registry = createRegistry();
    registry.register(definition({ ports, evaluate: () => { calls++; return { output: 6 }; } }));
    assert.equal(calls, 0, 'Only declared output ports need a baseline result');
  }
});

test('registered ports are copied and frozen and outputs evaluate the baseline only once', () => {
  let calls = 0;
  const registry = createRegistry(), ports = [inputPort(), outputPort(), outputPort({ id: 'output:other', key: 'other', label: 'Other output' })];
  const registered = registry.register(definition({ ports, evaluate: parameters => {
    calls++;
    assert.deepEqual(parameters, { amount: 2, factor: 3 });
    parameters.amount = 99;
    return { output: 6, other: 2 };
  } }));
  assert.equal(calls, 1);
  ports[0].unit = 'kg';
  ports.push(outputPort({ id: 'output:third' }));
  assert.equal(registered.ports.length, 3);
  assert.equal(registered.ports[0].unit, 'g');
  assert.ok(Object.isFrozen(registered.ports));
  assert.ok(registered.ports.every(Object.isFrozen));
  assert.throws(() => { registered.ports[0].key = 'factor'; }, TypeError);
  assert.deepEqual(registry.createInstance(registered.id).getParameters(), { amount: 2, factor: 3 }, 'Checking output metadata cannot mutate defaults');
});

test('port contracts reject malformed arrays, directions, identifiers, and semantic fields', () => {
  for (const ports of [null, {}, 'amount', 4]) assert.throws(() => createRegistry().register(definition({ ports })), /Ports must be an array/);
  for (const port of [null, [], 4, inputPort({ extraReader: () => 4 }), inputPort({ read: 'parameters.amount' })]) {
    assert.throws(() => createRegistry().register(definition({ ports: [port] })), /declarative quantity metadata/);
  }
  const malformed = [
    { id: '' }, { id: '../amount' }, { id: '__proto__' }, { id: 'constructor' }, { id: 'input:amount()' },
    { direction: 'both' }, { direction: '' }, { direction: () => 'input' },
    { key: '' }, { key: 'parameters.amount' }, { key: 'constructor' }, { key: 'amount()' },
    { label: '' }, { label: '  ' }, { label: '\nAmount' }, { label: () => 'Amount' },
    { type: '' }, { type: 'mass;evaluate()' }, { type: 'constructor' }, { type: {} },
    { unit: '' }, { unit: 'g/min;run()' }, { unit: 'constructor' }, { unit: ' kg ' }, { unit: () => 'g' },
    { description: 42 }, { description: () => 'Amount' }
  ];
  for (const change of malformed) assert.throws(() => createRegistry().register(definition({ ports: [inputPort(change)] })), TypeError, JSON.stringify(change));
  assert.throws(() => createRegistry().register(definition({ ports: [inputPort(), outputPort({ id: 'input:amount' })] })), /unique safe id/);
});

test('input ports must name known finite numeric baseline parameters', () => {
  assert.throws(() => createRegistry().register(definition({ ports: [inputPort({ key: 'missing' })] })), /finite numeric default parameter/);
  for (const value of ['2', null, false, Infinity, NaN, {}]) {
    const custom = definition({
      defaults: () => ({ amount: value, factor: 3 }),
      validateParams: parameters => ({ valid: true, parameters, errors: [] }),
      ports: [inputPort()]
    });
    assert.throws(() => createRegistry().register(custom), /finite numeric default parameter/);
  }
});

test('output ports accept numeric or null results while rejecting wrong keys and values', () => {
  for (const result of [{ output: 6 }, { output: 0 }, { output: null }, { output: NaN }]) {
    assert.doesNotThrow(() => createRegistry().register(definition({ ports: [outputPort()], evaluate: () => result })));
  }
  for (const result of [{}, { output: undefined }, { output: '6' }, { output: false }, { output: {} }, { output: () => 6 }, null, []]) {
    const registry = createRegistry();
    assert.throws(() => registry.register(definition({ ports: [outputPort()], evaluate: () => result })), /Output ports|output port/);
    assert.equal(registry.list().length, 0, 'A bad port never leaves a partially registered module');
  }
  const inherited = Object.create({ output: 6 });
  assert.throws(() => createRegistry().register(definition({ ports: [outputPort()], evaluate: () => inherited })), /result object/);
  let getterCalls = 0;
  const accessorResult = {};
  Object.defineProperty(accessorResult, 'output', { get() { getterCalls++; return 6; }, enumerable: true });
  assert.throws(() => createRegistry().register(definition({ ports: [outputPort()], evaluate: () => accessorResult })), /own numeric or null/);
  assert.equal(getterCalls, 0, 'Port validation must not invoke an output property getter');
});

test('port prose stays inert and executable field adapters are rejected', () => {
  const registry = createRegistry();
  globalThis.__atlasPortProseExecuted = false;
  try {
    const prose = 'globalThis.__atlasPortProseExecuted = true';
    const registered = registry.register(definition({ ports: [inputPort({ description: prose })] }));
    assert.equal(registered.ports[0].description, prose);
    assert.equal(globalThis.__atlasPortProseExecuted, false);
    assert.throws(() => createRegistry().register(definition({ id: 'bad-port-adapter', ports: [outputPort({ key: '() => result.output' })] })), /safe flat key/);
    assert.throws(() => createRegistry().register(definition({ id: 'bad-port-reader', ports: [outputPort({ read: () => 6 })] })), /declarative quantity metadata/);
    const hiddenReader = outputPort();
    Object.defineProperty(hiddenReader, 'read', { value: () => 6, enumerable: false });
    assert.throws(() => createRegistry().register(definition({ id: 'hidden-port-reader', ports: [hiddenReader] })), /declarative quantity metadata/);
  } finally { delete globalThis.__atlasPortProseExecuted; }
});
