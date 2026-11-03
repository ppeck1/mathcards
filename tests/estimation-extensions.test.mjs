import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/estimation-extensions.js');
const Stories = require('../src/estimation-extension-stories.js');
const Previews = require('../src/estimation-extension-previews.js');
const Terms = require('../src/estimation-extension-terms.js');
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const near = (a, b, tolerance = 2e-12) =>
  assert.ok(
    Number.isFinite(a) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)),
    `${a} ≈ ${b}`
  );

test('within-day contrasts cancel common additive day offsets and retain displayed assignment meaning', () => {
  for (const change of [-4, -2, -0.5, 0, 1.25, 4]) {
    for (const blockSpread of [0, 1, 3, 4]) {
      const p = { change, blockSpread, assignment: 'alternating' },
        r = M.evaluate('randomized-block-design', p);
      assert.equal(r.valid, true);
      assert.deepEqual(
        r.blockIndex,
        r.rows.map(row => row.block)
      );
      near(r.output, change);
      near(r.meanB - r.meanA, r.output);
      assert.deepEqual(
        r.rows.map(row => row.difference),
        [change - 1, change, change + 1]
      );
      assert.deepEqual(
        r.rows.map(row => row.first),
        ['A', 'B', 'A']
      );
      for (const row of r.rows) near(row.b - row.a, row.difference);
      const reversed = M.evaluate('randomized-block-design', { ...p, assignment: 'reversed' });
      assert.deepEqual(
        reversed.rows.map(row => row.first),
        ['B', 'A', 'B']
      );
      assert.deepEqual(reversed.differences, r.differences);
      assert.equal(reversed.output, r.output);
    }
  }
  const tiny = M.evaluate('randomized-block-design', {
    change: Number.MIN_VALUE,
    blockSpread: 3,
    assignment: 'alternating'
  });
  assert.equal(tiny.valid, false);
  assert.equal(tiny.status, 'numeric_precision');
  assert.equal(tiny.output, null);
});

test('known-sigma interval endpoints, square-root scaling and location shifts have their declared units', () => {
  for (const sigma of [0.25, 0.5, 1, 2])
    for (const sampleSize of [1, 2, 4, 16, 64]) {
      const p = { sampleSize, sigma, mean: 0.5 },
        r = M.evaluate('normal-mean-interval', p);
      assert.equal(r.valid, true);
      near(r.standardError, sigma / Math.sqrt(sampleSize));
      near(r.output, r.criticalValue * r.standardError);
      near(r.upper - r.lower, 2 * r.output);
      near((r.upper + r.lower) / 2, p.mean);
      assert.deepEqual(r.interval, [r.lower, r.upper]);
      const moved = M.evaluate('normal-mean-interval', { ...p, mean: -1.5 });
      assert.equal(moved.output, r.output);
      near(moved.lower, r.lower - 2);
      near(moved.upper, r.upper - 2);
      if (sampleSize <= 16)
        near(
          M.evaluate('normal-mean-interval', { ...p, sampleSize: 4 * sampleSize }).output,
          r.output / 2
        );
    }
  assert.notEqual(
    M.criticalValue,
    1.96,
    'The rounded display is not used as an exact 95% quantile.'
  );
  const coverage = Number(
    execFileSync('python', ['-c', 'import math;print(math.erf(1.959963984540054/math.sqrt(2)))'], {
      encoding: 'utf8'
    })
  );
  near(coverage, 0.95, 2e-15);
});

test('all canonical numerical fixtures agree with independent Python references', () => {
  const cases = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => ({ model: card.interactive.model_id, ...c }))
  );
  const references = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from estimation_extension_reference import compute;print(json.dumps([compute(c["model"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
  cases.forEach((c, i) => {
    const slug = c.model.replace(/-visual-model$/, ''),
      result = M.evaluate(slug, c.input);
    assert.deepEqual(references[i].status, c.status, slug);
    assert.equal(result.status, c.status, slug + JSON.stringify(c.input));
    if (c.status === 'valid') {
      near(result.output, references[i].output);
      near(result.output, c.output);
    } else assert.equal(result.output, null);
  });
});

test('validation rejects unsupported types, unknown fields and fractional sample counts without mutating inputs', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p);
    assert.equal(M.validateParams(slug, p).valid, true);
    assert.deepEqual(M.defaults(slug), p);
    for (const bad of [
      null,
      [],
      3,
      'input',
      { ...p, unknown: 3 },
      { ...p, [Object.keys(p)[0]]: NaN },
      { ...p, [Object.keys(p)[0]]: Infinity },
      { ...p, [Object.keys(p)[0]]: true }
    ])
      assert.equal(M.validateParams(slug, bad).valid, false);
    M.evaluate(slug, p);
    M.render(slug, p);
    assert.deepEqual(p, before);
    const c = M.controls(slug)[0];
    for (const value of [c.min, c.max, p[c.key]])
      near(M.curveValue(slug, p, value), M.evaluate(slug, { ...p, [c.key]: value }).output);
    assert.equal(M.curveValue(slug, p, c.max + 1), null);
  }
  assert.equal(
    M.validateParams('normal-mean-interval', { sampleSize: 3.5, mean: 0, sigma: 1 }).valid,
    false
  );
  assert.equal(M.curveValue('normal-mean-interval', M.defaults('normal-mean-interval'), 3.5), null);
  assert.equal(
    M.canInterpolate('normal-mean-interval', M.defaults('normal-mean-interval'), {
      sampleSize: 17,
      mean: 0.5,
      sigma: 1
    }),
    false
  );
  assert.equal(
    M.canInterpolate('normal-mean-interval', M.defaults('normal-mean-interval'), {
      sampleSize: 16,
      mean: 1,
      sigma: 1
    }),
    true
  );
  assert.equal(
    M.canInterpolate('randomized-block-design', M.defaults('randomized-block-design'), {
      change: -2,
      blockSpread: 3,
      assignment: 'reversed'
    }),
    false
  );
});

test('stories, grammar, ports and quantity anchors connect the same primary input to its calculation', () => {
  const metadata = JSON.parse(
    fs.readFileSync(
      new URL('../content/planning/estimation-extension-integration.json', import.meta.url),
      'utf8'
    )
  );
  for (const card of cards) {
    const slug = card.slug,
      story = Stories.forSlug(slug),
      p = M.defaults(slug),
      r = M.evaluate(slug, p);
    assert.equal(story.parameters[Stories.linksFor(slug).variableKey], p[M.specs(slug).axis]);
    assert.equal(story.variables[0].key, M.specs(slug).axis);
    assert.deepEqual(
      story.calculation.map(stage => stage.role),
      ['input', 'intermediate', 'output']
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn({ ...p, ...r }, key), slug + ' value ' + key);
        assert.ok(Stories.quantityFor(slug, key), key);
      }
    assert.equal(card.examples.length, 5);
    assert.equal(new Set(card.examples.map(e => JSON.stringify(e.inputs))).size, 5);
    assert.deepEqual(
      Object.keys(metadata.bindings[slug]).sort(),
      card.grammar.symbols.map(item => item.token).sort()
    );
    assert.deepEqual(
      metadata.ports[slug]
        .filter(port => port.direction === 'input')
        .map(port => port.key)
        .sort(),
      card.interactive.controls
        .filter(c => c.type === 'number')
        .map(c => c.id)
        .sort()
    );
    assert.ok(
      metadata.ports[slug].some(port => port.direction === 'output' && port.key === 'output')
    );
    assert.ok(Terms.entries.some(entry => entry.id === slug && entry.grammarCards.includes(slug)));
    const scene = M.render(slug, p, { id: 'quantity-' + slug, compact: true });
    assert.match(scene, new RegExp('data-quantity="[^"]*' + M.specs(slug).axis));
    assert.match(scene, /data-quantity="[^"]*output/);
    for (const key of ['__proto__', 'constructor', 'toString'])
      assert.equal(Stories.quantityFor(slug, key), null);
  }
  assert.deepEqual(
    metadata.bindings['normal-mean-interval']['μ'],
    [],
    'No numeric location is fabricated for unknown μ.'
  );
  assert.match(
    Stories.forSlug('normal-mean-interval').assumptions[0],
    /known positive population spread/
  );
  assert.match(
    Stories.forSlug('randomized-block-design').assumptions[0],
    /fixed possible allocations/
  );
});

test('desktop, compact, pinned scenes and previews parse as independent valid SVG fragments', () => {
  const fragments = [];
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p);
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const html = M.render(slug, p, {
          id: 'xml-' + slug + '-' + view + '-' + compact,
          compact,
          view,
          baseline: p
        });
        assert.doesNotMatch(html, /NaN|Infinity|="[^"]*undefined/);
        fragments.push(html.match(/<svg\b[\s\S]*?<\/svg>/)[0]);
      }
    const preview = Previews.draw(slug, p, r);
    assert.match(preview, /data-preview-layer="caption"/);
    fragments.push(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 232">' + preview + '</svg>'
    );
  }
  execFileSync(
    'python',
    [
      '-c',
      'import json,sys,xml.etree.ElementTree as E;[E.fromstring(s) for s in json.load(sys.stdin)]'
    ],
    { input: JSON.stringify(fragments) }
  );
});
