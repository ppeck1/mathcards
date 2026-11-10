import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import vm from 'node:vm';

const require = createRequire(import.meta.url);
const { createRegistry } = require('../src/module-registry.js');
const definition = extra => ({
  id: 'startup-copy',
  version: '1',
  title: 'Copied metadata',
  defaults: () => ({ amount: 2 }),
  validateParams: parameters => ({
    valid: true,
    parameters: { ...parameters },
    errors: [],
    warnings: []
  }),
  evaluate: parameters => ({ output: parameters.amount * 3 }),
  controls: [{ key: 'amount', label: 'Amount', min: 0, max: 10 }],
  sweeps: [{ key: 'amount', label: 'Amount', min: 0, max: 10 }],
  views: [{ id: 'shape', label: 'Shape', render: () => '' }],
  defaultView: 'shape',
  ...extra
});

test('ordinary metadata copying creates own properties without invoking inherited setters', () => {
  const name = 'startupCopyInheritedSetter';
  const previous = Object.getOwnPropertyDescriptor(Object.prototype, name);
  let writes = 0;
  Object.defineProperty(Object.prototype, name, {
    configurable: true,
    set() {
      writes++;
    }
  });
  try {
    const original = { [name]: { reading: 7 }, labels: ['first', 'second'] };
    const registered = createRegistry().register(definition({ metadata: original }));
    assert.equal(writes, 0);
    assert.ok(Object.hasOwn(registered.metadata, name));
    assert.deepEqual(registered.metadata[name], { reading: 7 });
    assert.notEqual(registered.metadata, original);
    original[name].reading = 99;
    assert.equal(registered.metadata[name].reading, 7);
    assert.ok(Object.isFrozen(registered.metadata[name]));
    assert.deepEqual(Object.getOwnPropertyDescriptor(registered.metadata, name), {
      value: registered.metadata[name],
      enumerable: true,
      writable: false,
      configurable: false
    });
  } finally {
    if (previous) Object.defineProperty(Object.prototype, name, previous);
    else delete Object.prototype[name];
  }
});

test('hidden metadata retains order and enumerability while sparse arrays remain independent', () => {
  const metadata = {};
  Object.defineProperty(metadata, 'hiddenFirst', { enumerable: false, value: { note: 'kept' } });
  metadata.visibleSecond = 3;
  const sparse = [];
  sparse[1] = { value: 4 };
  sparse[3] = 'last';
  Object.defineProperty(sparse, 'annotation', { enumerable: false, value: 'array detail' });
  metadata.sparse = sparse;
  const registered = createRegistry().register(definition({ metadata })).metadata;
  assert.deepEqual(Reflect.ownKeys(registered), ['hiddenFirst', 'visibleSecond', 'sparse']);
  assert.deepEqual(Object.keys(registered), ['visibleSecond', 'sparse']);
  assert.equal(Object.getOwnPropertyDescriptor(registered, 'hiddenFirst').enumerable, false);
  assert.deepEqual(Reflect.ownKeys(registered.sparse), ['1', '3', 'length', 'annotation']);
  assert.equal(registered.sparse.length, 4);
  assert.equal(0 in registered.sparse, false);
  assert.equal(2 in registered.sparse, false);
  assert.equal(registered.sparse.annotation, 'array detail');
  sparse[1].value = 9;
  assert.equal(registered.sparse[1].value, 4);
  assert.notEqual(registered.hiddenFirst, metadata.hiddenFirst);
  assert.ok(Object.isFrozen(registered.sparse[1]));
});

test('a frozen outer object cannot bypass child copying, accessor rejection or cycle rejection', () => {
  const child = { value: 3 };
  const original = Object.freeze({ child });
  const registered = createRegistry().register(definition({ metadata: original }));
  child.value = 8;
  assert.equal(registered.metadata.child.value, 3);
  const hiddenChild = { value: 5 };
  const hiddenOuter = {};
  Object.defineProperty(hiddenOuter, 'hidden', { value: hiddenChild });
  Object.freeze(hiddenOuter);
  const hiddenCopy = createRegistry().register(definition({ metadata: hiddenOuter })).metadata;
  assert.notEqual(hiddenCopy, hiddenOuter);
  assert.notEqual(hiddenCopy.hidden, hiddenChild);
  hiddenChild.value = 10;
  assert.equal(hiddenCopy.hidden.value, 5);
  let reads = 0;
  const accessor = {};
  Object.defineProperty(accessor, 'hidden', {
    get() {
      reads++;
      return 4;
    },
    enumerable: false
  });
  Object.freeze(accessor);
  assert.throws(() => createRegistry().register(definition({ metadata: accessor })), /accessors/);
  assert.equal(reads, 0);
  const cyclic = {};
  cyclic.self = cyclic;
  Object.freeze(cyclic);
  assert.throws(() => createRegistry().register(definition({ metadata: cyclic })), /cycles/);
});

test('registration retains only verified immutable metadata with ordinary same-realm prototypes', () => {
  const leaf = Object.freeze({ value: 4 });
  const array = Object.freeze([leaf, 7]);
  const metadata = Object.freeze({ leaf, array });
  const registered = createRegistry().register(definition({ metadata }));
  assert.equal(registered.metadata, metadata);
  assert.equal(registered.metadata.array, array);
  const hidden = Object.freeze({ note: 'kept' });
  const withHidden = Object.freeze(Object.defineProperty({ leaf }, 'hidden', { value: hidden }));
  const copied = createRegistry().register(definition({ metadata: withHidden })).metadata;
  assert.notEqual(copied, withHidden);
  assert.notEqual(copied.hidden, hidden);
  assert.equal(
    Object.isFrozen(copied.hidden),
    false,
    'hidden branches preserve legacy mutable copying'
  );
  copied.hidden.note = 'local';
  assert.equal(hidden.note, 'kept');

  const foreign = vm.runInNewContext('Object.freeze({ child: Object.freeze({ value: 5 }) })');
  const nullPrototype = Object.freeze(Object.assign(Object.create(null), { value: 6 }));
  const customPrototype = Object.freeze(
    Object.assign(Object.create(Object.create(null)), { value: 7 })
  );
  const foreignArray = vm.runInNewContext('Object.freeze([1, 2])');
  const customArray = [3, 4];
  Object.setPrototypeOf(customArray, Object.create(Array.prototype));
  Object.freeze(customArray);
  for (const source of [foreign, nullPrototype, customPrototype, foreignArray, customArray]) {
    const result = createRegistry().register(definition({ metadata: source })).metadata;
    assert.notEqual(result, source);
    assert.equal(
      Object.getPrototypeOf(result),
      Array.isArray(source) ? Array.prototype : Object.prototype
    );
    assert.ok(Object.isFrozen(result));
  }
  const withFunction = Object.freeze({ callback: () => 1 });
  assert.notEqual(
    createRegistry().register(definition({ metadata: withFunction })).metadata,
    withFunction
  );
});

test('frozen sparse arrays preserve legacy copied length and all descriptor checks', () => {
  const trailing = Object.freeze(new Array(5));
  const partial = [1];
  partial.length = 5;
  Object.freeze(partial);
  for (const [source, length] of [
    [trailing, 0],
    [partial, 1]
  ]) {
    const result = createRegistry().register(definition({ metadata: source })).metadata;
    assert.notEqual(result, source);
    assert.equal(result.length, length);
  }
  const sparse = [];
  sparse[3] = Object.freeze({ value: 9 });
  Object.freeze(sparse);
  assert.equal(createRegistry().register(definition({ metadata: sparse })).metadata, sparse);
  const accessor = [];
  let reads = 0;
  Object.defineProperty(accessor, 'hidden', {
    get() {
      reads++;
      return 1;
    }
  });
  Object.freeze(accessor);
  assert.throws(() => createRegistry().register(definition({ metadata: accessor })), /accessors/);
  assert.equal(reads, 0);
});

test('frozen defaults and parameter patches always produce independent mutable parameter copies', () => {
  const defaults = Object.freeze({ amount: 2, nested: Object.freeze({ value: 4 }) });
  const registry = createRegistry();
  registry.register(
    definition({
      defaults: () => defaults,
      validateParams: parameters => ({ valid: true, parameters, errors: [], warnings: [] }),
      evaluate: parameters => {
        parameters.nested.value++;
        return parameters.nested.value;
      }
    })
  );
  const instance = registry.createInstance('startup-copy');
  const snapshot = instance.getParameters();
  assert.notEqual(snapshot, defaults);
  assert.notEqual(snapshot.nested, defaults.nested);
  snapshot.nested.value = 99;
  assert.equal(instance.getParameters().nested.value, 4);
  assert.equal(instance.evaluate(), 5);
  assert.equal(instance.getParameters().nested.value, 4);
  const patch = Object.freeze({ nested: Object.freeze({ value: 8 }) });
  const changed = instance.setParameters(patch);
  assert.equal(changed.valid, true);
  changed.parameters.nested.value = 77;
  assert.equal(instance.getParameters().nested.value, 8);
  assert.equal(defaults.nested.value, 4);
  assert.equal(patch.nested.value, 8);
});

test('optimized copying retains unsafe-key checks and immediate default output-port validation', () => {
  for (const key of ['__proto__', 'constructor', 'prototype']) {
    const metadata = Object.create(null);
    Object.defineProperty(metadata, key, { value: 1, enumerable: true });
    Object.freeze(metadata);
    assert.throws(
      () => createRegistry().register(definition({ metadata })),
      /Unsafe module data key/
    );
  }
  let calls = 0;
  const port = {
    id: 'output:output',
    direction: 'output',
    key: 'output',
    label: 'Result',
    type: 'count',
    unit: '1'
  };
  const registered = createRegistry().register(
    definition({
      ports: [port],
      evaluate: p => {
        calls++;
        return { output: p.amount * 3 };
      }
    })
  );
  assert.equal(calls, 1, 'registration still verifies the output at the default inputs');
  assert.equal(registered.ports[0].key, 'output');
  let reads = 0;
  const result = {};
  Object.defineProperty(result, 'output', {
    enumerable: true,
    get() {
      reads++;
      return 6;
    }
  });
  assert.throws(
    () => createRegistry().register(definition({ ports: [port], evaluate: () => result })),
    /own numeric or null/
  );
  assert.equal(reads, 0);
});
