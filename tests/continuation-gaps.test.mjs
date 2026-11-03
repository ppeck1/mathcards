import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

const require = createRequire(import.meta.url);
const Models = require('../src/models.js');
const Modules = require('../src/playground-modules.js');
const Stories = require('../src/story-library.js');
const Links = require('../src/story-links.js');
const Scenes = require('../src/story-scenes.js');
const Flow = require('../src/calculation-flow.js');
const Metadata = require('../src/continuation-metadata.js');
const Bindings = require('../src/symbol-bindings.js');
const Previews = require('../src/card-previews.js');
const Terms = require('../src/math-terms.js');
const Notation = require('../src/math-notation.js');
const ids = [
  'complex-number',
  'quadratic-equation',
  'linear-programming',
  'linear-search',
  'binary-search',
  'minimum-spanning-tree',
  'normal-distribution',
  'exponential-distribution',
  'sign-test'
];
const card = id =>
  JSON.parse(fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8'));

test('nine gap lessons join the installed host in declared order with independent states and meaningful ports', () => {
  assert.deepEqual(Metadata.ids.slice(18, 27), ids);
  assert.deepEqual(
    Modules.list()
      .slice(102, 111)
      .map(module => module.id),
    ids
  );
  assert.deepEqual(Previews.list().slice(102, 111), ids);
  for (const id of ids) {
    const module = Modules.get(id),
      canonical = card(id);
    const first = Modules.createInstance(id),
      second = Modules.createInstance(id);
    const defaults = module.defaults();
    assert.notEqual(first, second);
    assert.deepEqual(first.getParameters(), defaults);
    assert.deepEqual(second.getParameters(), defaults);
    assert.equal(first.evaluate().valid, true, id);
    assert.equal(first.evaluate().output, Models.evaluate(id, defaults).output, id);
    assert.deepEqual(
      module.views.map(view => view.id),
      ['geometry', 'graph'],
      id
    );
    assert.deepEqual(module.ports, Metadata.ports[id], id);
    assert.ok(
      module.ports.some(port => port.direction === 'output' && port.key === 'output'),
      id
    );
    const numericKeys = canonical.interactive.controls
      .filter(control => control.type === 'number')
      .map(control => control.id)
      .sort();
    assert.deepEqual(
      module.ports
        .filter(port => port.direction === 'input')
        .map(port => port.key)
        .sort(),
      numericKeys,
      id
    );
    for (const symbol of canonical.grammar.symbols) {
      assert.deepEqual(
        Bindings.keysFor(id, symbol.token),
        Metadata.bindings[id][symbol.token],
        id + ' ' + symbol.token
      );
    }
    const control = module.controls.find(field => field.type === 'number');
    const changed = defaults[control.key] === control.min ? control.max : control.min;
    assert.equal(first.setParameters({ [control.key]: changed }).valid, true, id);
    assert.equal(first.getParameters()[control.key], changed, id);
    assert.deepEqual(
      second.getParameters(),
      defaults,
      id + ' keeps the neighboring slot independent'
    );
    first.destroy();
    second.destroy();
  }
});

test('gap stories put the animated variable first and carry actual values through all calculation stages', () => {
  for (const id of ids) {
    const story = Stories.forSlug(id),
      link = Links.forSlug(id);
    assert.equal(story.variables[0].key, story.timeline.key, id);
    assert.equal(link.variableKey, story.variables[0].key, id);
    assert.equal(link.symbol, story.variables[0].symbol, id);
    const values = Scenes.values(id, story.parameters);
    const stages = Flow.stages(story);
    assert.deepEqual(
      stages.map(stage => stage.role),
      ['input', 'intermediate', 'output'],
      id
    );
    for (const stage of stages) {
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), id + ' ' + key + ' exists in the evaluated story');
        assert.ok(Stories.quantityFor(id, key), id + ' ' + key + ' has a readable quantity');
      }
    }
    for (const key of ['constructor', 'toString', '__proto__'])
      assert.equal(Stories.quantityFor(id, key), null, id);
  }
});

test('every gap lesson has five distinct original examples, independent fixtures and source-linked authored readers', () => {
  const sources = JSON.parse(
    fs.readFileSync(new URL('../content/sources.json', import.meta.url), 'utf8')
  ).sources;
  const sourceIds = new Set(sources.map(source => source.id));
  const exampleIds = new Set();
  for (const id of ids) {
    const canonical = card(id);
    assert.equal(canonical.publication_status, 'draft');
    assert.equal(canonical.examples.length, 5, id);
    assert.ok(canonical.interactive.expected_cases.length >= 10, id);
    for (const example of canonical.examples) {
      assert.ok(!exampleIds.has(example.id), example.id);
      exampleIds.add(example.id);
      for (const ref of example.source_refs || []) assert.ok(sourceIds.has(ref), ref);
    }
    const readers = Terms.entries.filter(
      entry => entry.grammarCards?.includes(id) || entry.formulaCards?.includes(id)
    );
    assert.ok(readers.length > 0, id);
    for (const entry of readers)
      for (const key of entry.sourceKeys) assert.ok(Terms.sources[key], id + ' source ' + key);
  }
});

test('gap scenes remain valid standalone SVG in both layouts and with remembered inputs', () => {
  const documents = [];
  for (const id of ids) {
    const module = Modules.get(id),
      defaults = module.defaults();
    documents.push({ name: id + ' preview', svg: Previews.render(id) });
    for (const compact of [false, true])
      for (const pinned of [false, true]) {
        for (const view of module.views) {
          const html = view.render(defaults, {
            id: 'strict-' + id,
            compact,
            sceneControl: false,
            ...(pinned ? { baseline: defaults } : {})
          });
          const svg = html.match(/<svg\b[\s\S]*?<\/svg>/)?.[0];
          assert.ok(svg, id + ' ' + view.id);
          documents.push({
            name: [id, view.id, compact ? 'compact' : 'desktop', pinned ? 'pin' : 'live'].join(' '),
            svg
          });
        }
      }
  }
  const parser =
    'import json,sys,xml.etree.ElementTree as E\nfor item in json.load(sys.stdin):\n try:E.fromstring(item["svg"])\n except E.ParseError as error:raise AssertionError(item["name"]+": "+str(error))';
  execFileSync('python', ['-X', 'utf8', '-c', parser], {
    input: JSON.stringify(documents),
    encoding: 'utf8'
  });
  assert.equal(documents.length, 81);
});

test('new rates and counts retain their actual authored unit meanings', () => {
  for (const [slug, token, id] of [
    ['exponential-distribution', 'per min', 'inverse-minute-unit'],
    ['exponential-distribution', '1/min', 'inverse-minute-unit'],
    ['exponential-distribution', 'min⁻¹', 'inverse-minute-unit'],
    ['linear-programming', 'credits', 'algebra-contribution-units'],
    ['linear-programming', 'credits/L', 'algebra-contribution-units'],
    ['quadratic-equation', 'roots', 'algebra-real-root-count-units']
  ]) {
    const report = Notation.audit({
      entries: Terms.entries,
      fields: [{ slug, text: token, kind: 'unit' }]
    });
    assert.equal(report.complete, true, token);
    assert.ok(
      report.records.some(record => record.resolvedIds.includes(id)),
      token + ' resolves its declared meaning'
    );
  }
  const unknown = Notation.audit({
    entries: Terms.entries,
    fields: [{ slug: 'exponential-distribution', text: 'invented rate units', kind: 'unit' }]
  });
  assert.equal(unknown.complete, false);
});
