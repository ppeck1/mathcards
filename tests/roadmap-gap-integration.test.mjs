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
const Index = require('../src/math-index.js');
const Terms = require('../src/math-terms.js');

test('every calculation stage activates a real mark in each new story scene', () => {
  for (const slug of [
    'inverse-function',
    'geometric-series',
    'graph-coloring',
    'inclusion-exclusion',
    'randomized-block-design',
    'normal-mean-interval',
    'student-mean-interval',
    'randomization-distribution',
    'one-way-anova',
    'covariance',
    'normal-variance-interval',
    'normal-test-power',
    'covariance-matrix',
    'wilcoxon-signed-rank',
    'mann-whitney'
  ]) {
    const story = Stories.forSlug(slug);
    const markup = Scenes.render(slug, story.parameters, { compact: true });
    const nodes = [...markup.matchAll(/data-story-part="([^"]+)"/g)].map(([, part]) => {
      const attributes = new Map([['data-story-part', part]]);
      return {
        getAttribute: key => attributes.get(key),
        setAttribute: (key, value) => attributes.set(key, value)
      };
    });
    const attributes = new Map();
    const host = {
      getAttribute: key => attributes.get(key),
      setAttribute: (key, value) => attributes.set(key, value),
      querySelectorAll: () => nodes
    };
    for (const role of ['input', 'intermediate', 'output']) {
      assert.ok(Links.paint(host, slug, role) > 0, slug + ': ' + role + ' has a visible target');
    }
  }
});
const familyTerms = [
  require('../src/analysis-extension-terms.js'),
  require('../src/discrete-extension-terms.js'),
  require('../src/estimation-extension-terms.js'),
  require('../src/sampling-extension-terms.js'),
  require('../src/design-extension-terms.js'),
  require('../src/comparison-extension-terms.js')
];
const ids = [
  'inverse-function',
  'geometric-series',
  'graph-coloring',
  'inclusion-exclusion',
  'randomized-block-design',
  'normal-mean-interval',
  'student-mean-interval',
  'randomization-distribution',
  'one-way-anova',
  'covariance',
  'normal-variance-interval',
  'normal-test-power',
  'covariance-matrix',
  'wilcoxon-signed-rank',
  'mann-whitney'
];
const cards = ids.map(id =>
  JSON.parse(fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8'))
);
const sources = JSON.parse(
  fs.readFileSync(new URL('../content/sources.json', import.meta.url), 'utf8')
).sources;
const sourceIds = new Set(sources.map(source => source.id));
const cardFor = id => cards.find(card => card.slug === id);
const sameParameters = (a, b) =>
  JSON.stringify(Object.fromEntries(Object.entries(a).sort())) ===
  JSON.stringify(Object.fromEntries(Object.entries(b).sort()));
const alternative = (module, card) => {
  const defaults = module.defaults();
  const example = card.examples.find(
    example =>
      example.preset &&
      !sameParameters(example.preset, defaults) &&
      module.validateParams(example.preset).valid
  );
  assert.ok(example, card.slug + ' supplies a distinct executable example for comparisons');
  return example.preset;
};

test('the fifteen roadmap-gap lessons join the host in explicit family order with independent slots', () => {
  assert.deepEqual(Metadata.ids.slice(-ids.length), ids);
  assert.deepEqual(
    Modules.list()
      .slice(-ids.length)
      .map(module => module.id),
    ids
  );
  assert.deepEqual(Previews.list().slice(-ids.length), ids);
  for (const canonical of cards) {
    const id = canonical.slug,
      module = Modules.get(id),
      defaults = module.defaults(),
      changed = alternative(module, canonical);
    const first = Modules.createInstance(id, { slot: 'roadmap-left-' + id }),
      second = Modules.createInstance(id, { slot: 'roadmap-right-' + id });
    try {
      assert.notEqual(first, second);
      assert.deepEqual(first.getParameters(), defaults, id);
      assert.deepEqual(second.getParameters(), defaults, id);
      assert.equal(first.evaluate().valid, true, id);
      assert.equal(first.evaluate().output, Models.evaluate(id, defaults).output, id);
      assert.deepEqual(
        module.views.map(view => view.id),
        ['geometry', 'graph'],
        id
      );
      assert.equal(first.setParameters(changed).valid, true, id);
      assert.deepEqual(first.getParameters(), changed, id);
      assert.deepEqual(
        second.getParameters(),
        defaults,
        id + ' keeps the neighboring slot unchanged'
      );
      const exposed = first.getParameters();
      exposed[Object.keys(exposed)[0]] = 'mutated outside';
      assert.deepEqual(first.getParameters(), changed, id + ' keeps its own copied parameters');
    } finally {
      first.destroy();
      second.destroy();
    }
  }
});

test('new controls and output ports retain their actual declared quantities and canonical identities', () => {
  for (const canonical of cards) {
    const id = canonical.slug,
      module = Modules.get(id),
      result = module.evaluate(module.defaults());
    assert.equal(canonical.interactive.model_id, id + '-visual-model', id);
    assert.equal(canonical.interactive.renderer_id, id + '-visual-model', id);
    assert.equal(String(canonical.interactive.model_revision), module.version, id);
    assert.deepEqual(module.ports, Metadata.ports[id], id);
    assert.deepEqual(
      module.ports
        .filter(port => port.direction === 'input')
        .map(port => port.key)
        .sort(),
      canonical.interactive.controls
        .filter(control => control.type === 'number')
        .map(control => control.id)
        .sort(),
      id
    );
    assert.ok(
      module.ports.some(port => port.direction === 'output' && port.key === 'output'),
      id
    );
    for (const port of module.ports) {
      assert.ok(port.label && port.description && port.type && port.unit, id + ' port meaning');
      if (port.direction === 'output') {
        assert.ok(Object.hasOwn(result, port.key), id + ' output ' + port.key);
        assert.ok(
          result[port.key] === null || Number.isFinite(result[port.key]),
          id + ' numeric output ' + port.key
        );
      }
    }
  }
});

test('story variables, calculation stages and grammar follow actual model values into scene marks', () => {
  const bindingIssues = [];
  for (const canonical of cards) {
    const id = canonical.slug,
      module = Modules.get(id),
      story = Stories.forSlug(id),
      link = Links.forSlug(id);
    assert.ok(story && link, id);
    assert.equal(story.variables[0].key, story.timeline.key, id);
    assert.equal(link.variableKey, story.variables[0].key, id);
    assert.equal(link.symbol, story.variables[0].symbol, id);
    assert.deepEqual(
      story.parameters,
      module.defaults(),
      id + ' story starts in the declared model state'
    );
    const values = Scenes.values(id, story.parameters),
      stages = Flow.stages(story);
    assert.deepEqual(
      stages.map(stage => stage.role),
      ['input', 'intermediate', 'output'],
      id
    );
    for (const stage of stages) {
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), id + ' stage value ' + key);
        assert.ok(Stories.quantityFor(id, key), id + ' stage meaning ' + key);
      }
    }
    const markup = module.views
      .map(view =>
        view.render(story.parameters, {
          id: 'roadmap-semantic-' + id + '-' + view.id,
          compact: true,
          sceneControl: false
        })
      )
      .join('');
    const quantities = new Set(
      [...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/))
    );
    for (const symbol of canonical.grammar.symbols) {
      const keys = Bindings.keysFor(id, symbol.token);
      assert.deepEqual(keys, Metadata.bindings[id][symbol.token], id + ' ' + symbol.token);
      for (const key of keys) {
        if (!Object.hasOwn(values, key))
          bindingIssues.push(id + ' ' + symbol.token + ' model value ' + key);
        if (!Stories.quantityFor(id, key))
          bindingIssues.push(id + ' ' + symbol.token + ' quantity meaning ' + key);
        if (!quantities.has(key))
          bindingIssues.push(id + ' ' + symbol.token + ' actual shape mark ' + key);
      }
    }
    for (const key of ['constructor', 'toString', '__proto__']) {
      assert.equal(Stories.quantityFor(id, key), null, id);
    }
  }
  assert.deepEqual(
    bindingIssues,
    [],
    'Every bound grammar quantity has model, meaning and scene evidence'
  );
});

test('new previews mark the same primary numerical result as the installed model', () => {
  for (const canonical of cards) {
    const id = canonical.slug,
      parameters = Models.defaults(id),
      result = Models.evaluate(id, parameters),
      preview = Previews.render(id);
    assert.ok(result.valid && Number.isFinite(result.output), id);
    assert.ok(Previews.has(id), id);
    assert.match(preview, /<svg\b/, id);
    const represented = [];
    for (const [, attributes] of preview.matchAll(/<g\b([^>]*)>/g)) {
      const key = attributes.match(/data-preview-quantity="([^"]+)"/)?.[1],
        value = attributes.match(/data-value="([^"]+)"/)?.[1];
      if (key === 'output' && value !== undefined) represented.push(Number(value));
    }
    assert.ok(represented.length > 0, id + ' has a primary-output preview mark');
    for (const value of represented)
      assert.equal(value, result.output, id + ' preview preserves the model value');
  }
});

test('all new worked examples remain distinct inert data with real references and fixed model inputs', () => {
  const exampleIds = new Set();
  for (const canonical of cards) {
    const id = canonical.slug,
      keys = new Set(canonical.interactive.controls.map(control => control.id));
    assert.equal(canonical.publication_status, 'draft', id);
    assert.equal(canonical.examples.length, 5, id);
    assert.equal(
      new Set(
        canonical.examples.map(example =>
          JSON.stringify(Object.fromEntries(Object.entries(example.inputs).sort()))
        )
      ).size,
      5,
      id + ' has five different inputs'
    );
    assert.ok(canonical.interactive.expected_cases.length >= 10, id);
    for (const ref of canonical.source_refs) assert.ok(sourceIds.has(ref), id + ' source ' + ref);
    for (const example of canonical.examples) {
      assert.ok(!exampleIds.has(example.id), example.id);
      exampleIds.add(example.id);
      assert.match(example.provenance.kind, /original/i, example.id);
      assert.ok(example.steps.length >= 2, example.id);
      for (const step of example.steps) assert.equal(typeof step.expression, 'string', example.id);
      for (const key of Object.keys(example.preset || {}))
        assert.ok(keys.has(key), example.id + ' inert preset key ' + key);
      for (const ref of example.provenance.external_source_refs || [])
        assert.ok(sourceIds.has(ref), example.id + ' source ' + ref);
    }
  }
});

test('each new authored reference reader has actual new-card usage evidence', () => {
  const index = Index.create({ cards, sources, stories: ids.map(id => Stories.forSlug(id)) });
  const withoutUse = [];
  for (const family of familyTerms) {
    for (const entry of family.entries) {
      const indexed = index.get(entry.id);
      assert.ok(indexed, entry.id + ' is in the prepared reference projection');
      if (!indexed.usedBy.some(usage => ids.includes(usage.slug) && usage.contexts.length > 0))
        withoutUse.push(entry.id);
      for (const key of entry.sourceKeys || [])
        assert.ok(Terms.sources[key], entry.id + ' definition source ' + key);
    }
  }
  assert.deepEqual(withoutUse, [], 'Every new authored reader has actual new-card use');
});

test('all fifteen scenes and remembered families are finite, immutable and strict standalone SVG', () => {
  const documents = [];
  for (const canonical of cards) {
    const id = canonical.slug,
      module = Modules.get(id),
      parameters = module.defaults(),
      baseline = alternative(module, canonical),
      before = JSON.stringify({ parameters, baseline });
    documents.push({ key: id + '/preview', kind: 'preview', markup: Previews.render(id) });
    for (const compact of [false, true])
      for (const pinned of [false, true]) {
        const markup = [];
        for (const view of module.views) {
          const options = {
            id: ['roadmap', id, view.id, compact, pinned].join('-'),
            view: view.id,
            compact,
            sceneControl: false,
            ...(pinned ? { baseline } : {})
          };
          const html = view.render(parameters, options);
          assert.match(html, /<svg\b/, id + ' ' + view.id);
          assert.doesNotMatch(
            html,
            /(?:NaN|[+-]?Infinity)|(?:x|y|width|height|cx|cy|d|transform)="[^"]*undefined/,
            id + ' ' + view.id
          );
          assert.equal(html, view.render(parameters, options), id + ' deterministic ' + view.id);
          documents.push({
            key: [id, view.id, compact, pinned].join('/'),
            kind: 'view',
            markup: html
          });
          markup.push(html);
        }
        assert.notEqual(markup[0], markup[1], id + ' uses distinct Geometry and Graph encodings');
      }
    assert.equal(
      JSON.stringify({ parameters, baseline }),
      before,
      id + ' renderers preserve current and pinned inputs'
    );
  }
  const parser =
    'import json,sys\nfrom pathlib import Path\nsys.path.insert(0,str(Path.cwd()/"tools"))\nfrom check_scene_markup import audit_fragments\nreport=audit_fragments(json.load(sys.stdin),' +
    JSON.stringify(ids) +
    ')\nassert report["pass"],report["failures"]';
  execFileSync('python', ['-X', 'utf8', '-c', parser], {
    input: JSON.stringify(documents),
    encoding: 'utf8',
    maxBuffer: 4 * 1024 * 1024
  });
  assert.equal(documents.length, ids.length * 9);
});

test('classic-script entries keep the new providers before their shared consumers without reference-authoring scripts', () => {
  const template = fs.readFileSync(new URL('../src/index.html', import.meta.url), 'utf8');
  const scripts = [
    ...template.matchAll(/<script\b[^>]*src="([^"?]+)(?:\?[^"]*)?"[^>]*data-development/g)
  ].map(([, name]) => name);
  const position = name => scripts.indexOf(name);
  for (const family of ['analysis', 'discrete', 'estimation', 'sampling', 'design', 'comparison']) {
    for (const [dependency, consumer] of [
      [family + '-extensions.js', 'model-registry.js'],
      [family + '-extension-stories.js', 'story-library.js'],
      [family + '-extension-previews.js', 'card-previews.js']
    ]) {
      assert.ok(position(dependency) >= 0, dependency + ' is installed');
      assert.ok(position(dependency) < position(consumer), dependency + ' precedes ' + consumer);
    }
    assert.ok(
      !scripts.includes(family + '-extension-terms.js'),
      family + ' authorship stays in the build'
    );
  }
});
