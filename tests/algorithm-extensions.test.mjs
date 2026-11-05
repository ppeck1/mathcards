import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url),
  M = require('../src/algorithm-extensions.js'),
  Stories = require('../src/algorithm-extension-stories.js'),
  Terms = require('../src/algorithm-extension-terms.js'),
  Previews = require('../src/algorithm-extension-previews.js'),
  MathIndex = require('../src/math-index.js');
const delta = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/algorithm-extension-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const source = fs.readFileSync(new URL('../src/algorithm-extensions.js', import.meta.url), 'utf8');
function graph(slug, p, options = {}) {
  const context = vm.createContext({ AtlasPlotView: { render: value => value } });
  vm.runInContext(source, context);
  return context.AtlasAlgorithmExtensions.render(slug, p, { ...options, view: 'graph' });
}

test('three algorithm families have stable identities, fresh controls and exact whole inputs', () => {
  assert.deepEqual(M.ids, ['linear-search', 'binary-search', 'minimum-spanning-tree']);
  assert.deepEqual(M.ids, delta.slugs);
  assert.ok(Object.isFrozen(M.ids) && Object.isFrozen(M.items));
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      fields = M.controls(slug);
    assert.notEqual(p, M.defaults(slug));
    assert.ok(fields.every(field => field.discrete && field.step === 1));
    assert.equal(M.specs(slug).axis, fields[0].key);
    assert.deepEqual(M.specs(slug).views, ['geometry', 'graph']);
    for (const field of fields)
      for (const value of [field.min, field.max])
        assert.equal(M.evaluate(slug, { ...p, [field.key]: value }).valid, true);
    for (const value of [true, false, '1', null, NaN, Infinity, -Infinity, 1.5])
      assert.equal(M.evaluate(slug, { ...p, [fields[0].key]: value }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, { ...p, unknown: 1 }).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, null).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, []).status, 'invalid_parameters');
    assert.deepEqual(M.controls(slug), fields);
  }
  for (const name of ['unknown', '__proto__', 'constructor', null])
    assert.equal(M.has(name), false);
});

test('linear search inspects successive positions and stops at the first match or exhaustion', () => {
  for (let target = 0; target <= 17; target++) {
    const finalPosition = M.items.indexOf(target) + 1,
      fullCost = finalPosition || M.items.length;
    for (let steps = 0; steps <= 8; steps++) {
      const r = M.evaluate('linear-search', { steps, target });
      assert.equal(r.output, Math.min(steps, fullCost));
      assert.equal(r.completedCost, fullCost);
      assert.equal(r.shownTrace.length, r.output);
      assert.deepEqual(
        r.shownTrace.map(row => row.position),
        Array.from({ length: r.output }, (_, i) => i + 1)
      );
      assert.equal(r.done, steps >= fullCost);
      assert.equal(r.foundPosition, r.done ? finalPosition || null : null);
      if (!r.done) assert.equal(r.statusLabel, 'In progress');
      else if (!finalPosition) assert.equal(r.statusLabel, 'Code absent');
      assert.equal(r.performed + r.remaining, r.completedCost);
    }
  }
});

test('binary search preserves the sorted-window invariant and counts value comparisons', () => {
  for (let target = 0; target <= 17; target++)
    for (let steps = 0; steps <= 4; steps++) {
      const r = M.evaluate('binary-search', { steps, target }),
        position = M.items.indexOf(target) + 1;
      assert.ok(r.completedCost >= 1 && r.completedCost <= 4);
      assert.equal(r.output, Math.min(steps, r.completedCost));
      for (const row of r.trace) {
        assert.equal(row.position, Math.floor((row.low + row.high) / 2));
        assert.equal(row.value, M.items[row.position - 1]);
        if (row.relation === '<') assert.equal(row.nextHigh, row.position - 1);
        if (row.relation === '>') assert.equal(row.nextLow, row.position + 1);
        if (position && row.relation !== '=')
          assert.ok(position >= row.nextLow && position <= row.nextHigh);
      }
      if (!r.done && position) assert.ok(position >= r.low && position <= r.high);
      assert.equal(r.foundPosition, r.done ? position || null : null);
      if (r.done && !position) {
        assert.equal(r.windowSize, 0);
        assert.ok(r.low > r.high);
      }
      assert.ok(Object.isFrozen(r.trace) && Object.isFrozen(r.shownTrace));
    }
  assert.deepEqual(
    M.evaluate('binary-search', { target: 10, steps: 4 }).trace.map(row => row.position),
    [4, 6, 5]
  );
  assert.deepEqual(
    M.evaluate('binary-search', { target: 16, steps: 4 }).trace.map(row => row.position),
    [4, 6, 7, 8]
  );
});

test('MST connects all stations with three edges and retains all exact minimum ties', () => {
  let sawTie = false;
  for (let ac = 1; ac <= 8; ac++)
    for (let bd = 1; bd <= 8; bd++) {
      const r = M.evaluate('minimum-spanning-tree', { ac, bd });
      assert.equal(r.treeCount, 16);
      assert.equal(new Set(r.trees.map(tree => tree.edges.slice().sort().join(','))).size, 16);
      assert.equal(r.selected.length, 3);
      assert.equal(r.output, Math.min(...r.trees.map(tree => tree.weight)));
      assert.equal(
        r.selectedWeights.reduce((sum, x) => sum + x, 0),
        r.output
      );
      assert.equal(r.tieCount, r.minima.length);
      assert.ok(r.minima.every(tree => tree.weight === r.output));
      assert.ok(
        r.minima.some(
          tree => tree.edges.slice().sort().join(',') === r.selected.slice().sort().join(',')
        )
      );
      assert.ok(Object.isFrozen(r.minima) && Object.isFrozen(r.selected));
      if (r.tieCount > 1) sawTie = true;
      assert.equal(r.output, M.evaluate('minimum-spanning-tree', { ac: bd, bd: ac }).output);
    }
  assert.ok(sawTie);
  assert.equal(M.evaluate('minimum-spanning-tree', { ac: 3, bd: 4 }).tieCount, 2);
  assert.equal(
    M.evaluate('minimum-spanning-tree', { ac: 3 + Number.EPSILON * 2, bd: 4 }).status,
    'invalid_parameters'
  );
  assert.equal(
    M.evaluate('minimum-spanning-tree', { ac: 3 - Number.EPSILON * 2, bd: 4 }).status,
    'invalid_parameters'
  );
});

test('independent slice-search and Prüfer-tree oracles agree across every bounded parameter pair', () => {
  const script = `import json,sys,itertools
sys.path.insert(0,'tools')
from algorithm_extension_reference import compute,prufer_tree
jobs=json.load(sys.stdin)
results=[]
for slug,p in jobs:
 r=compute(slug,p)
 if slug=='minimum-spanning-tree':
  weights={(0,1):2,(0,2):p['ac'],(0,3):6,(1,2):3,(1,3):p['bd'],(2,3):2}
  totals=[sum(weights[e] for e in prufer_tree(code)) for code in itertools.product(range(4),repeat=2)]
  r['ties']=totals.count(min(totals))
 results.append(r)
print(json.dumps(results))`;
  const jobs = [];
  for (const slug of M.ids) {
    const [a, b] = M.controls(slug);
    for (let x = a.min; x <= a.max; x++)
      for (let y = b.min; y <= b.max; y++) jobs.push([slug, { [a.key]: x, [b.key]: y }]);
  }
  const oracle = JSON.parse(
    execFileSync('python', ['-c', script], {
      cwd: new URL('..', import.meta.url),
      input: JSON.stringify(jobs),
      encoding: 'utf8'
    })
  );
  jobs.forEach(([slug, p], i) => {
    const actual = M.evaluate(slug, p);
    assert.equal(actual.output, oracle[i].output, slug + ' ' + JSON.stringify(p));
    if (slug === 'minimum-spanning-tree') assert.equal(actual.tieCount, oracle[i].ties);
  });
  assert.equal(jobs.length, 316);
});

test('all canonical cases and original presets use the declared model and separate oracle', () => {
  assert.equal(
    cards.reduce((sum, card) => sum + card.examples.length, 0),
    15
  );
  for (const card of cards) {
    assert.equal(card.interactive.renderer_id, card.slug + '-visual-model');
    assert.equal(card.examples.length, 5);
    assert.ok(card.interactive.expected_cases.length >= 10);
    for (const fixture of card.interactive.expected_cases) {
      const r = M.evaluate(card.slug, fixture.input);
      assert.equal(r.status, fixture.status, card.slug + JSON.stringify(fixture.input));
      if (fixture.status === 'valid') assert.equal(r.output, fixture.output);
    }
    for (const example of card.examples) {
      assert.equal(M.evaluate(card.slug, example.preset).valid, true);
      assert.ok(example.independent_check.method.length > 80);
      assert.match(example.provenance.kind, /original/);
    }
  }
});

test('Geometry marks actual quantities without adding inputs or animation clocks', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      html = M.render(slug, p, { compact: true, sceneControl: false });
    assert.match(html, /role="group"/);
    assert.doesNotMatch(html, /<animate|requestAnimationFrame|setInterval|data-drag-param|<input/);
    assert.doesNotMatch(html, /NaN|Infinity/);
    const marks = [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) =>
      keys.split(' ')
    );
    for (const [token, keys] of Object.entries(delta.bindings[slug]))
      for (const key of keys) {
        assert.ok(marks.includes(key), slug + ' ' + token + ' bound to an actual mark');
        assert.ok(Object.hasOwn(p, key) || Object.hasOwn(r, key), slug + ' real quantity ' + key);
      }
  }
  const binary = M.render('binary-search', { steps: 0, target: 10 }, { compact: true });
  assert.match(binary, /0 comparisons shown; completed run cost 3/);
  assert.match(binary, /In progress/);
  const tied = M.render('minimum-spanning-tree', { ac: 3, bd: 4 }, { compact: true });
  assert.match(tied, /stroke-dasharray="5 6"/);
  assert.match(tied, /2 tied minimum trees/);
});

test('Graphs preserve whole settings, fixed scales and distinct pinned parameter families', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      field = M.controls(slug)[1],
      baseline = { ...p, [field.key]: field.min };
    const g = graph(slug, p, { baseline, sceneControl: false });
    assert.equal(g.series.length, 2);
    assert.ok(g.series.every(row => row.dots === true));
    assert.equal(g.current[0].draggable, false);
    for (const [row, parameters] of [
      [g.series[0], p],
      [g.series[1], baseline]
    ])
      for (const point of row.points) {
        assert.ok(Number.isInteger(point.x));
        assert.equal(point.y, M.curveValue(slug, parameters, point.x));
        assert.ok(point.y >= g.y.min && point.y <= g.y.max);
      }
    assert.equal(g.current[1].y, M.evaluate(slug, baseline).output);
    const html = M.render(slug, p, { view: 'graph', compact: true, baseline });
    assert.match(html, /relationship-graph/);
    assert.notEqual(html, M.render(slug, p, { compact: true }));
  }
});

test('stories match the primary control and provide real quantities for every calculation token', () => {
  for (const slug of M.ids) {
    const story = Stories.forSlug(slug),
      link = Stories.linksFor(slug),
      result = { ...story.parameters, ...M.evaluate(slug, story.parameters) };
    assert.equal(story.variables[0].key, link.variableKey);
    assert.equal(story.timeline.key, link.variableKey);
    assert.equal(story.variables[0].symbol, link.symbol);
    assert.deepEqual(
      story.calculation.map(stage => stage.role),
      ['input', 'intermediate', 'output']
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(result, key), slug + ' actual template quantity ' + key);
        assert.ok(Stories.quantityFor(slug, key), slug + ' authored quantity ' + key);
      }
    assert.ok(story.variables.every(v => v.discrete));
  }
  for (const s of ['unknown', 'constructor', '__proto__']) {
    assert.equal(Stories.forSlug(s), null);
    assert.equal(Stories.linksFor(s), null);
    assert.equal(Stories.quantityFor(s, 'output'), null);
  }
  assert.equal(Stories.quantityFor('linear-search', 'constructor'), null);
});

test('authored symbols and source keys are unique, scoped and linked to the actual cards', () => {
  assert.equal(new Set(Terms.entries.map(row => row.id)).size, Terms.entries.length);
  assert.ok(Object.keys(Terms.sources).every(key => key.startsWith('algorithm_')));
  for (const entry of Terms.entries) {
    for (const key of entry.sourceKeys) assert.ok(Terms.sources[key]);
    assert.ok(entry.grammarCards.every(slug => M.has(slug)));
    assert.ok(entry.formulaCards.every(slug => M.has(slug)));
  }
  for (const card of cards)
    for (const { token } of card.grammar.symbols)
      assert.ok(
        Terms.entries.some(
          entry => entry.grammarCards.includes(card.slug) && entry.symbols.includes(token)
        ),
        card.slug + ' reader for ' + token
      );
  const station = Terms.entries.find(row => row.id === 'minimum-spanning-tree-station-labels');
  assert.ok(station.symbols.includes('AC'));
  assert.match(station.definition, /not multiplication/);
});

test('previews use actual default results and keep captions in their own layer', () => {
  assert.deepEqual(Previews.list(), M.ids);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      svg = Previews.draw(slug, p, r);
    assert.match(svg, /data-preview-layer="caption"/);
    assert.match(svg, new RegExp('data-preview-quantity="output" data-value="' + r.output + '"'));
    assert.doesNotMatch(svg, /NaN|Infinity|<animate/);
    assert.ok(Previews.describe(slug, p, r).length > 100);
    assert.equal(Previews.draw(slug, p, { valid: false }), '');
  }
});

test('actual station and cable mathematics creates scoped reference links through compile and hydration', () => {
  const matrix = JSON.parse(
    fs.readFileSync(new URL('../content/cards/matrix-product.json', import.meta.url), 'utf8')
  );
  const input = { cards: [...cards, matrix], stories: Stories.all() };
  const compiled = MathIndex.compile(input);
  for (const index of [MathIndex.create(input), MathIndex.hydrate(compiled)]) {
    const entry = index.get('minimum-spanning-tree-station-labels');
    assert.deepEqual(
      entry.usedBy.map(use => use.slug),
      ['minimum-spanning-tree']
    );
    const contexts = entry.usedBy[0].contexts.filter(context =>
      ['grammar', 'notation'].includes(context.via)
    );
    for (const token of ['A', 'B', 'C', 'D', 'AB', 'AC', 'AD', 'BC', 'BD', 'CD'])
      assert.ok(
        contexts.some(context => context.token === token),
        token + ' has an actual declared mathematical context'
      );
    const ab = new Set(index.search('AB').flatMap(row => row.usedBy.map(use => use.slug)));
    assert.deepEqual(ab, new Set(['matrix-product', 'minimum-spanning-tree']));
    const ba = new Set(index.search('BA').flatMap(row => row.usedBy.map(use => use.slug)));
    assert.deepEqual(ba, new Set(['matrix-product']));
  }
});
