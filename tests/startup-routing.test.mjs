import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const source = fs.readFileSync(new URL('../src/story-library.js', import.meta.url), 'utf8');
function fixture() {
  const calls = [];
  function provider(name, matching) {
    const record = Object.freeze({ provider: name });
    const read = (method, value) => {
      calls.push(name + ':' + method);
      return matching.includes(value) ? record : null;
    };
    return {
      record,
      all: () => [record],
      forSlug: value => read('story', value),
      linksFor: value => read('links', value),
      quantityFor: (value, key) =>
        read('quantity', value === 'shared' && key === 'value' ? value : null),
      find: value => read('find', value)
    };
  }
  const first = provider('first', ['shared']),
    second = provider('second', ['shared']),
    last = provider('last', ['late']);
  const context = vm.createContext({
    AtlasLifeStories: first,
    AtlasDiscoveryStories: second,
    AtlasFrontierStories: last
  });
  vm.runInContext(source, context);
  return { api: context.AtlasStoryLibrary, calls, first, second, last };
}

test('story and quantity routing stops after the first matching installed provider', () => {
  const { api, calls, first } = fixture();
  for (const [method, args, label] of [
    ['forSlug', ['shared'], 'story'],
    ['linksFor', ['shared'], 'links'],
    ['quantityFor', ['shared', 'value'], 'quantity'],
    ['find', ['shared'], 'find']
  ]) {
    calls.length = 0;
    assert.equal(api[method](...args), first.record);
    assert.deepEqual(
      calls,
      ['first:' + label],
      method + ' does not query irrelevant later families'
    );
  }
});

test('late matches, missing keys and full enumeration keep their existing semantics', () => {
  const { api, calls, first, second, last } = fixture();
  assert.equal(api.forSlug('late'), last.record);
  assert.deepEqual(calls, ['first:story', 'second:story', 'last:story']);
  calls.length = 0;
  for (const value of ['missing', '__proto__', 'constructor', 'toString']) {
    assert.equal(api.forSlug(value), null);
    assert.equal(api.linksFor(value), null);
    assert.equal(api.quantityFor(value, 'value'), null);
    assert.equal(api.find(value), null);
  }
  assert.equal(calls.length, 4 * 4 * 3);
  assert.deepEqual(Array.from(api.all()), [first.record, second.record, last.record]);
  assert.ok(Object.isFrozen(api));
});
