import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import vm from 'node:vm';
const require = createRequire(import.meta.url);
const D = require('../src/discrete-extensions.js');
const S = require('../src/discrete-extension-stories.js');
const P = require('../src/discrete-extension-previews.js');

test('graph colorings match closed counts for every supported palette and edge family', () => {
  for (let k = 1; k <= 4; k++)
    for (const d of [0, 1]) {
      const result = D.evaluate('graph-coloring', { palette: k, diagonal: d });
      const expected = d ? k * (k - 1) * (k - 2) ** 2 : (k - 1) ** 4 + (k - 1);
      assert.equal(result.output, expected);
      assert.equal(result.chromatic, d ? 3 : 2);
      assert.equal(result.proper, expected > 0);
      assert.equal(
        result.conflicts,
        result.edges.filter(([a, b]) => result.assignment[a] === result.assignment[b]).length
      );
      assert.equal(result.candidateCount, k ** 4);
      assert.ok(result.assignment.every(label => label >= 1 && label <= k));
    }
});

test('every supported two-list state agrees with independent explicit-set union counting', () => {
  for (let a = 0; a <= 12; a++)
    for (let b = 0; b <= 12; b++)
      for (let h = 0; h <= Math.min(a, b); h++) {
        const r = D.evaluate('inclusion-exclusion', { overlap: h, wood: a, repair: b });
        const A = new Set(
          [...Array(h)]
            .map((_, i) => 'shared-' + i)
            .concat([...Array(a - h)].map((_, i) => 'wood-' + i))
        );
        const B = new Set(
          [...Array(h)]
            .map((_, i) => 'shared-' + i)
            .concat([...Array(b - h)].map((_, i) => 'repair-' + i))
        );
        assert.equal(r.output, new Set([...A, ...B]).size);
        assert.equal(r.woodOnly + r.repairOnly + h, r.output);
        assert.equal(r.total - r.output, h);
      }
});

test('unknown keys, invalid types, fractional choices and impossible overlaps are never coerced', () => {
  for (const slug of D.ids) {
    const p = D.defaults(slug),
      key = Object.keys(p)[0];
    for (const input of [
      null,
      [],
      1,
      { ...p, [key]: true },
      { ...p, [key]: '2' },
      { ...p, [key]: Infinity },
      { ...p, [key]: NaN },
      { ...p, [key]: 1.5 },
      { ...p, unknown: 2 }
    ]) {
      const result = D.evaluate(slug, input);
      assert.equal(result.valid, false, JSON.stringify(input));
      assert.equal(result.output, null);
      assert.equal(result.status, 'invalid_parameters');
    }
  }
  assert.equal(D.evaluate('inclusion-exclusion', { overlap: 3, wood: 2, repair: 7 }).valid, false);
  assert.equal(D.curveValue('inclusion-exclusion', { overlap: 0, wood: 2, repair: 7 }, 3), null);
  assert.equal(D.has('__proto__'), false);
  assert.equal(S.quantityFor('__proto__', 'constructor'), null);
  assert.equal(S.quantityFor('graph-coloring', 'constructor'), null);
});

test('the pure providers load offline and connected stories declare every calculation value', () => {
  const context = vm.createContext({ AtlasPlotView: require('../src/plot-view.js') });
  for (const file of [
    'discrete-extensions.js',
    'discrete-extension-stories.js',
    'discrete-extension-previews.js',
    'discrete-extension-terms.js'
  ])
    vm.runInContext(fs.readFileSync(new URL('../src/' + file, import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasDiscreteExtensions.ids.length, 2);
  for (const slug of D.ids) {
    const story = S.forSlug(slug),
      values = { ...story.parameters, ...D.evaluate(slug, story.parameters) };
    assert.equal(S.linksFor(slug).variableKey, story.variables[0].key);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), slug + ' ' + key);
        assert.ok(S.quantityFor(slug, key), slug + ' quantity ' + key);
      }
    assert.ok(P.draw(slug, story.parameters, D.evaluate(slug, story.parameters)).length > 50);
  }
});

test('scenes, invalid fallbacks and pinned graphs keep deterministic finite markup and scoped references', () => {
  for (const slug of D.ids)
    for (const compact of [false, true]) {
      const p = D.defaults(slug),
        baseline =
          slug === 'graph-coloring'
            ? { palette: 3, diagonal: 1 }
            : { overlap: 0, wood: 4, repair: 3 };
      for (const view of ['geometry', 'graph']) {
        const scene = D.render(slug, p, {
          id: 'left/a',
          view,
          compact,
          baseline,
          sceneControl: false
        });
        assert.equal(
          scene,
          D.render(slug, p, { id: 'left/a', view, compact, baseline, sceneControl: false })
        );
        assert.match(scene, /<svg\b/);
        assert.doesNotMatch(scene, /NaN|Infinity|(?:x|y|width|height)="[^"]*undefined/);
        assert.notEqual(
          scene,
          D.render(slug, p, { id: 'right/a', view, compact, baseline, sceneControl: false })
        );
      }
      assert.notEqual(D.render(slug, p), D.render(slug, p, { view: 'graph' }));
      assert.match(
        D.render(slug, { ...p, [Object.keys(p)[0]]: -1 }, { compact }),
        /Invalid inputs draw no mathematical result/
      );
    }
});
