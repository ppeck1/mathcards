import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/neural-bridges.js');
const S = require('../src/neural-bridge-stories.js');
const P = require('../src/neural-bridge-previews.js');
const T = require('../src/neural-bridge-terms.js');
const Metadata = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/neural-bridge-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const near = (actual, expected, tolerance = 3e-12) =>
  assert.ok(
    Number.isFinite(actual) &&
      Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)),
    `${actual} ≈ ${expected}`
  );
const attrs = tag =>
  Object.fromEntries(
    [...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])
  );
const references = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from neural_bridge_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );

test('both neural bridges match independent exact-rational references across all canonical fixtures', () => {
  const cases = cards.flatMap(card =>
    card.interactive.expected_cases.map(expected => ({
      slug: card.slug,
      input: expected.input,
      expected
    }))
  );
  const oracle = references(cases);
  assert.equal(cases.length, 44);
  cases.forEach((c, index) => {
    const result = M.evaluate(c.slug, c.input),
      reference = oracle[index];
    assert.equal(result.status, c.expected.status);
    assert.equal(result.status, reference.status);
    if (!result.valid) return;
    for (const [key, value] of Object.entries(reference))
      if (key !== 'status') near(result[key], value);
    near(result.output, c.expected.output);
  });
  assert.equal(references([{ slug: 'uninstalled-neural-module', input: {} }])[0], null);
});

test('the artificial signed sum preserves unequal gains, cancellation and linear response', () => {
  for (const excitation of [0, 0.1, 0.25, 0.5, 0.75, 1])
    for (const inhibition of [0, 0.1, 0.25, 0.5, 0.75, 1]) {
      const r = M.evaluate('neural-summation', { excitation, inhibition });
      near(r.excitatoryDrive, 2 * excitation);
      near(r.inhibitoryDrive, inhibition);
      near(r.signedInhibition, -inhibition);
      near(r.output, 2 * excitation - inhibition);
      assert.ok(r.output >= -1 && r.output <= 2);
    }
  for (const excitation of [0, 0.1, 0.25, 0.4, 0.5])
    assert.equal(
      M.evaluate('neural-summation', { excitation, inhibition: 2 * excitation }).output,
      0
    );
  for (const both of [0, 0.1, 0.4, 1])
    near(M.evaluate('neural-summation', { excitation: both, inhibition: both }).output, both);
  const p = { excitation: 0.3, inhibition: 0.4 },
    r = M.evaluate('neural-summation', p);
  near(M.evaluate('neural-summation', { ...p, excitation: 0.4 }).output - r.output, 0.2);
  near(M.evaluate('neural-summation', { ...p, inhibition: 0.5 }).output - r.output, -0.1);
  assert.equal(M.evaluate('neural-summation', { excitation: 0, inhibition: 1 }).output, -1);
});

test('five spatial products agree with the collapsed response and uniform-level boundary conditions', () => {
  for (const center of [0, 0.1, 0.5, 1])
    for (const surround of [0, 0.1, 0.5, 1])
      for (const gain of [0, 0.5, 1, 2]) {
        const r = M.evaluate('receptive-field', { center, surround, gain });
        assert.deepEqual(r.pixels, [surround, surround, center, surround, surround]);
        assert.deepEqual(r.weights, [-gain / 4, -gain / 4, 1, -gain / 4, -gain / 4]);
        r.contributions.forEach((value, j) => near(value, r.pixels[j] * r.weights[j]));
        near(
          r.contributions.reduce((sum, value) => sum + value, 0),
          r.output
        );
        near(r.output, center - gain * surround);
        near(r.weightSum, 1 - gain);
        near(r.surroundTotal, gain * surround);
        assert.ok(r.output >= -2 && r.output <= 1);
      }
  for (const level of [0, 0.1, 0.3, 0.5, 0.8, 1])
    assert.equal(
      M.evaluate('receptive-field', { center: level, surround: level, gain: 1 }).output,
      0
    );
  for (const gain of [0, 0.3, 1, 1.6, 2])
    assert.equal(M.evaluate('receptive-field', { center: 0, surround: 0, gain }).output, 0);
  for (const gain of [0, 0.5, 1.5, 2])
    assert.notEqual(M.evaluate('receptive-field', { center: 0.5, surround: 0.5, gain }).output, 0);
  for (const surround of [0, 0.3, 1])
    near(M.evaluate('receptive-field', { center: 0.7, surround, gain: 0 }).output, 0.7);
});

test('model domains, caller state and browser globals remain strict without clocks or DOM', () => {
  const context = vm.createContext({
    AtlasPlotView: require('../src/plot-view.js'),
    setTimeout() {
      assert.fail('model timer');
    },
    requestAnimationFrame() {
      assert.fail('model clock');
    }
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/neural-bridges.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasNeuralBridges);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p),
      first = M.controls(slug)[0];
    for (const input of [
      null,
      [],
      false,
      { ...p, extra: 1 },
      { ...p, [first.key]: '0.5' },
      { ...p, [first.key]: true },
      { ...p, [first.key]: NaN },
      { ...p, [first.key]: Infinity },
      { ...p, [first.key]: -Number.MIN_VALUE },
      { ...p, [first.key]: first.max + 0.001 }
    ]) {
      const r = M.evaluate(slug, input);
      assert.equal(r.status, 'invalid_parameters');
      assert.equal(r.output, null);
    }
    assert.equal(M.evaluate(slug, {}).valid, true);
    assert.equal(M.canInterpolate(slug, p, { ...p, [first.key]: first.max }), true);
    assert.equal(M.canInterpolate(slug, p, { ...p, [first.key]: first.max + 1 }), false);
    M.controls(slug)[0].max = 99;
    assert.equal(M.controls(slug)[0].max, first.max);
    M.render(slug, p);
    assert.deepEqual(p, before);
    const readout = M.specs(slug).readout(p, M.evaluate(slug, p));
    assert.ok(readout.insight.length > 20 && readout.stats.length > 1);
    near(
      M.curveValue(slug, p, first.min),
      M.evaluate(slug, { ...p, [first.key]: first.min }).output
    );
    assert.equal(M.curveValue(slug, p, -1), null);
  }
  const old = M.evaluate('receptive-field', M.defaults('receptive-field'));
  old.pixels[0] = 999;
  old.weights[0] = 999;
  assert.equal(M.evaluate('receptive-field', M.defaults('receptive-field')).pixels[0], 0.3);
  assert.equal(M.has('constructor'), false);
  assert.equal(M.evaluate('missing', {}).valid, false);
  assert.equal(M.render('missing', {}), '');
});

test('Geometry uses actual signed bar lengths on fixed scales and correctly encodes gray input', () => {
  for (const compact of [false, true]) {
    for (const p of [
      { excitation: 0, inhibition: 1 },
      { excitation: 1, inhibition: 0 },
      { excitation: 0.5, inhibition: 1 }
    ]) {
      const html = M.render('neural-summation', p, { compact }),
        r = M.evaluate('neural-summation', p);
      const bars = [
        ...html.matchAll(/<rect\b[^>]*data-role="(?:signed-contribution|net-drive)"[^>]*>/g)
      ].map(m => attrs(m[0]));
      assert.equal(bars.length, 3);
      [r.excitatoryDrive, r.signedInhibition, r.output].forEach((value, j) => {
        near(Number(bars[j]['data-value']), value);
        near(Number(bars[j].width), Math.abs(value) * Number(bars[j]['data-scale']), 1e-6);
      });
    }
    for (const p of [
      { center: 1, surround: 1, gain: 2 },
      { center: 0, surround: 0, gain: 0 },
      { center: 0.8, surround: 0.3, gain: 1 }
    ]) {
      const html = M.render('receptive-field', p, { compact }),
        r = M.evaluate('receptive-field', p);
      const constantWeight =
        html.match(
          /<g data-quantity="weights" data-story-part="intermediate">(<text\b[^>]*>1<\/text>)<\/g>/g
        ) || [];
      assert.equal(constantWeight.length, 1, 'gain highlighting excludes the fixed center weight');
      assert.equal(
        (html.match(/data-quantity="weights gain"/g) || []).length,
        4,
        'gain changes exactly the four surrounding weights'
      );
      const tiles = [...html.matchAll(/<rect\b[^>]*data-role="stimulus-site"[^>]*>/g)].map(m =>
        attrs(m[0])
      );
      const products = [...html.matchAll(/<rect\b[^>]*data-role="weighted-site"[^>]*>/g)].map(m =>
        attrs(m[0])
      );
      assert.equal(tiles.length, 5);
      assert.equal(products.length, 5);
      tiles.forEach((tile, j) => {
        near(Number(tile['data-value']), r.pixels[j]);
        const shade = Math.round(r.pixels[j] * 255);
        assert.equal(tile.fill, `rgb(${shade},${shade},${shade})`);
      });
      products.forEach((product, j) => {
        near(Number(product['data-value']), r.contributions[j]);
        near(
          Number(product.height),
          Math.abs(r.contributions[j]) * Number(product['data-scale']),
          1e-6
        );
      });
      const bar = attrs(html.match(/<rect\b[^>]*data-role="filter-response"[^>]*>/)[0]);
      near(Number(bar.width), Math.abs(r.output) * Number(bar['data-scale']), 1e-6);
    }
  }
});

test('all grammar bindings and scalar calculations follow the same model values into real marked shapes', () => {
  for (const card of cards) {
    const slug = card.slug,
      story = S.forSlug(slug),
      p = M.defaults(slug),
      values = { ...p, ...M.evaluate(slug, p) };
    assert.deepEqual(story.parameters, p);
    assert.equal(story.variables[0].key, story.timeline.key);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    const html = M.render(slug, p, { compact: true }),
      marks = new Set(
        [...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, q]) => q.split(/\s+/))
      );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), slug + ' ' + key);
        assert.ok(Number.isFinite(values[key]));
        assert.ok(S.quantityFor(slug, key));
      }
    for (const symbol of card.grammar.symbols)
      for (const key of Metadata.bindings[slug][symbol.token]) {
        assert.ok(Object.hasOwn(values, key), slug + ' ' + key + ' value');
        assert.ok(S.quantityFor(slug, key), slug + ' ' + key + ' reader');
        assert.ok(marks.has(key), slug + ' ' + key + ' mark');
      }
    assert.equal(story.assumptions.length, 1);
    for (const bad of ['constructor', '__proto__', 'toString'])
      assert.equal(S.quantityFor(slug, bad), null);
    assert.notEqual(M.render(slug, p, { view: 'geometry' }), M.render(slug, p, { view: 'graph' }));
  }
});

test('previews preserve their primary numerical result, caption band and readable labels', () => {
  for (const slug of M.ids) {
    const base = M.defaults(slug);
    const candidates = [
      base,
      ...M.controls(slug).flatMap(c => [
        { ...base, [c.key]: c.min },
        { ...base, [c.key]: c.max }
      ])
    ];
    for (const p of candidates) {
      const r = M.evaluate(slug, p),
        body = P.draw(slug, p, r);
      assert.doesNotMatch(body, /NaN|Infinity|undefined/);
      assert.ok(body.includes(`data-preview-quantity="output" data-value="${r.output}"`));
      for (const [tag] of body.matchAll(/<text\b[^>]*>/g)) {
        const a = attrs(tag),
          size = Number(a['font-size']),
          y = Number(a.y);
        assert.ok(size >= 13);
        if (y < 198) assert.ok(y + size / 4 <= 188, slug + ' art band');
      }
    }
    assert.match(P.describe(slug, base, M.evaluate(slug, base)), /signed|contrast|drive/i);
  }
});

test('source fragments remain strict, independently namespaced SVG for current and pinned states', () => {
  const docs = [];
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      baseline = Object.fromEntries(M.controls(slug).map(c => [c.key, c.max]));
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph'])
        for (const pin of [false, true]) {
          const options = {
            id: ['neural', slug, compact, view, pin].join('-'),
            compact,
            view,
            sceneControl: false,
            ...(pin ? { baseline } : {})
          };
          const html = M.render(slug, p, options);
          assert.equal(html, M.render(slug, p, options));
          assert.doesNotMatch(html, /NaN|Infinity|undefined/);
          docs.push({ key: options.id, kind: 'view', markup: html });
        }
  }
  const program =
    'import json,sys;sys.path.insert(0,"tools");from check_scene_markup import audit_fragments;r=audit_fragments(json.load(sys.stdin),' +
    JSON.stringify(M.ids) +
    ');assert r["pass"],r["failures"]';
  execFileSync('python', ['-X', 'utf8', '-c', program], {
    input: JSON.stringify(docs),
    encoding: 'utf8'
  });
});

test('authored reader identities, sources and semantic units stay explicit and scoped', () => {
  const Terms = require('../src/math-terms.js'),
    N = require('../src/math-notation.js'),
    Index = require('../src/math-index.js');
  assert.equal(new Set(T.entries.map(e => e.id)).size, T.entries.length);
  const known = new Set(Terms.entries.map(e => e.id));
  for (const entry of T.entries) {
    assert.ok(entry.definition.length > 20);
    assert.ok(entry.readAs);
    for (const key of entry.sourceKeys) assert.ok(T.sources[key]);
    for (const id of entry.relatedIds || []) assert.ok(known.has(id), entry.id + ' -> ' + id);
  }
  const index = Index.create({ cards, sources: Metadata.sources, stories: S.all() });
  for (const entry of T.entries)
    assert.ok(
      index.get(entry.id).usedBy.some(use => M.ids.includes(use.slug)),
      entry.id + ' use'
    );
  const fields = T.entries.flatMap(e => [
    { slug: 'reference:' + e.id, ownerEntryId: e.id, text: e.example, kind: 'formula' },
    ...e.symbols.map(text => ({
      slug: 'reference:' + e.id,
      ownerEntryId: e.id,
      text,
      kind: 'formula'
    }))
  ]);
  const audit = N.audit({ cards, stories: S.all(), entries: Terms.entries, fields });
  assert.deepEqual(audit.unresolved, []);
  assert.deepEqual(audit.review, []);
  const unrelated = N.audit({
    entries: Terms.entries,
    fields: [{ slug: 'unrelated-neural-example', text: 'e', kind: 'formula' }]
  });
  assert.ok(unrelated.records.every(record => !record.resolvedIds.includes('neural-excitation')));
  assert.ok(Metadata.ports['neural-summation'].every(port => port.unit === '1'));
});
