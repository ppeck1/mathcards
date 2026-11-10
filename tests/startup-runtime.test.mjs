import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Index = require('../src/math-index.js');
const sourceDirectory = new URL('../src/', import.meta.url);
const read = name => fs.readFileSync(new URL(name, sourceDirectory), 'utf8');
const authorFiles = [
  'systems-terms.js',
  'inference-terms.js',
  'number-foundation-terms.js',
  'spatial-foundation-terms.js',
  'dynamics-extension-terms.js',
  'algebra-extension-terms.js',
  'algorithm-extension-terms.js',
  'distribution-extension-terms.js',
  'expansion-terms.js',
  'math-terms.js'
];
const plain = value => JSON.parse(JSON.stringify(value));

test('runtime entries exclude reference authoring scripts while preserving explicit prepared-data order', () => {
  const names = [
    ...read('index.html').matchAll(/<script\s+src="([^"?]+)(?:\?[^"]*)?"[^>]*data-development/g)
  ].map(([, name]) => name);
  const sandbox = fs.readFileSync(
    new URL('../examples/module-sandbox.html', import.meta.url),
    'utf8'
  );
  const buildSource = fs.readFileSync(new URL('../tools/build.py', import.meta.url), 'utf8');
  const runtimeList = buildSource.slice(
    buildSource.indexOf('    js = '),
    buildSource.indexOf('    if template.count')
  );
  for (const name of authorFiles) {
    assert.ok(!names.includes(name), name + ' is not a browser dependency');
    assert.ok(!sandbox.includes('src/' + name + '"'), name + ' is not a sandbox dependency');
    assert.ok(
      !runtimeList.includes("'" + name + "'"),
      name + ' is not in the offline runtime bundle'
    );
    assert.ok(
      fs.existsSync(new URL(name, sourceDirectory)),
      name + ' remains available to build tools'
    );
  }
  for (const [dependency, consumer] of [
    ['math-notation.js', 'math-index.js'],
    ['math-index.js', 'app.js'],
    ['math-index-data.js', 'app.js']
  ]) {
    assert.ok(names.indexOf(dependency) >= 0);
    assert.ok(names.indexOf(dependency) < names.indexOf(consumer));
  }
});

test('browser reference hydration is complete without authoring globals and never compiles source data', () => {
  const context = vm.createContext({});
  for (const name of ['math-notation.js', 'math-index.js', 'math-index-data.js']) {
    vm.runInContext(read(name), context, { filename: name });
  }
  assert.equal(context.AtlasMathTerms, undefined);
  assert.equal(context.AtlasExpansionTerms, undefined);
  const api = context.AtlasMathIndex;
  assert.throws(() => api.compile({ cards: [] }), /requires authoring data/);
  assert.throws(() => api.create({ cards: [] }), /requires authoring data/);
  const browser = api.hydrate(context.AtlasMathIndexData);
  const node = Index.hydrate(plain(context.AtlasMathIndexData));
  assert.equal(browser.entries.length, 1287);
  assert.deepEqual(plain(browser.entries), node.entries);
  assert.deepEqual(plain(browser.categories), node.categories);
  assert.deepEqual(plain(browser.symbolCatalog()), node.symbolCatalog());
  assert.equal(browser.symbolCatalog().forms.length, 940);
  assert.equal(browser.symbolCatalog().meanings, 951);
  for (const query of [
    'δ',
    'μ',
    'AB',
    'BA',
    'T',
    '∑',
    'normal distribution',
    'linear search',
    'not a term'
  ]) {
    assert.deepEqual(plain(browser.search(query)), node.search(query), query);
    assert.equal(browser.isNotation(query), node.isNotation(query), query);
  }
  assert.match(browser.markup({ entryId: 'normal-distribution' }), /Cards that use this/);
  assert.ok(Object.isFrozen(browser.entries));
  assert.ok(Object.isFrozen(browser.get('normal-distribution').usedBy));
});

test('search text deduplicates repeated meanings without changing any public usage evidence', () => {
  const contexts = [
    { token: 'x', meaning: 'Repeated reference meaning', via: 'story', location: 'First step' },
    { token: 'x', meaning: 'Repeated reference meaning', via: 'story', location: 'Second step' },
    { token: 'y', meaning: 'Unique diagonal comparison', via: 'story', location: 'Third step' },
    { token: 'z', meaning: 'Another signed result', via: 'story', location: 'Fourth step' }
  ];
  const data = {
    formatVersion: 1,
    cardSlugs: ['fixture'],
    entries: [
      {
        id: 'fixture-reader',
        title: 'Fixture reader',
        category: 'language',
        symbols: [],
        aliases: [],
        lookupAliases: [],
        readAs: 'fixture reader',
        definition: 'A finite reference fixture.',
        example: 'An original fixture.',
        sources: [],
        relatedIds: [],
        contextual: false,
        usedBy: [{ slug: 'fixture', title: 'Fixture', href: '#card/fixture', contexts }]
      }
    ]
  };
  const before = plain(data);
  const index = Index.hydrate(data);
  for (const query of ['repeated', 'diagonal', 'signed', 'unique comparison']) {
    assert.deepEqual(
      index.search(query).map(entry => entry.id),
      ['fixture-reader'],
      query
    );
  }
  assert.deepEqual(index.entries[0].usedBy[0].contexts, before.entries[0].usedBy[0].contexts);
  assert.equal(index.entries[0].usedBy[0].contexts.length, 4);
  assert.deepEqual(data, before);
});
