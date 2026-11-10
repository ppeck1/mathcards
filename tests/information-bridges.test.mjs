import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/information-bridges.js');
const Stories = require('../src/information-bridge-stories.js');
const Previews = require('../src/information-bridge-previews.js');
const Terms = require('../src/information-bridge-terms.js');
const N = require('../src/math-notation.js');
const Life = require('../src/life-story.js');
const Readable = require('../src/readable-values.js');
const near = (a, b, tolerance = 5e-12) =>
  assert.ok(
    Number.isFinite(a) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)),
    a + ' ≈ ' + b
  );
const oracle = cases =>
  JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from information_bridge_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
const attrs = tag =>
  Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, k, v]) => [k, v]));
const role = (svg, name) =>
  attrs(svg.match(new RegExp('<[^>]+data-role="' + name + '"[^>]*>'))?.[0] || '');
const metadata = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/information-bridge-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);

test('channel information agrees with an independent high-precision joint-probability reference', () => {
  const cases = [];
  for (const errorChance of [0, 0.01, 0.1, 0.25, 0.49, 0.5, 0.51, 0.75, 0.9, 0.99, 1])
    for (const inputChance of [0, 0.01, 0.25, 0.5, 0.75, 0.99, 1])
      cases.push({ slug: 'channel-capacity', input: { errorChance, inputChance } });
  const references = oracle(cases);
  cases.forEach((c, i) => {
    const result = M.evaluate(c.slug, c.input);
    assert.equal(result.valid, true);
    for (const [key, value] of Object.entries(references[i]))
      key === 'status' ? assert.equal(result[key], value) : near(result[key], value);
    assert.ok(result.mutualInformation >= 0 && result.mutualInformation <= result.capacity);
    assert.ok(result.capacity >= 0 && result.capacity <= 1);
  });
});

test('capacity distinguishes a fixed input, balanced input, random inversion and known deterministic inversion', () => {
  for (const errorChance of [0, 0.1, 0.25, 0.5, 0.75, 0.9, 1]) {
    const balanced = M.evaluate('channel-capacity', { errorChance, inputChance: 0.5 });
    near(balanced.mutualInformation, balanced.capacity);
    for (const inputChance of [0, 1])
      assert.equal(
        M.evaluate('channel-capacity', { errorChance, inputChance }).mutualInformation,
        0
      );
    near(
      balanced.capacity,
      M.evaluate('channel-capacity', { errorChance: 1 - errorChance, inputChance: 0.5 }).capacity
    );
  }
  assert.equal(M.evaluate('channel-capacity', { errorChance: 0.5, inputChance: 0.5 }).capacity, 0);
  assert.equal(M.evaluate('channel-capacity', { errorChance: 0, inputChance: 0.5 }).capacity, 1);
  assert.equal(M.evaluate('channel-capacity', { errorChance: 1, inputChance: 0.5 }).capacity, 1);
  for (const errorChance of [0.5 - 1e-8, 0.5 + 1e-8]) {
    const r = M.evaluate('channel-capacity', { errorChance, inputChance: 0.5 });
    assert.ok(r.capacity > 0, 'a small but nonzero capacity is not lost to subtraction');
    near(r.capacity, (1 - 2 * errorChance) ** 2 / (2 * Math.LN2), 1e-30);
  }
});

test('rare input information remains positive and relatively accurate without subtracting nearly equal entropies', () => {
  const cases = [];
  for (const errorChance of [0.01, 0.1, 0.25, 0.49, 0.75, 0.9, 0.99])
    for (const inputChance of [1e-12, 1e-18, 1e-24])
      cases.push({ slug: 'channel-capacity', input: { errorChance, inputChance } });
  const expected = oracle(cases);
  cases.forEach((c, i) => {
    const actual = M.evaluate(c.slug, c.input).mutualInformation;
    const value = expected[i].mutualInformation;
    assert.ok(actual > 0 && value > 0);
    assert.ok(
      Math.abs(actual - value) <= 2e-13 * value,
      JSON.stringify({ input: c.input, actual, expected: value })
    );
  });
});

test('all 128 supported data/flip states match an independent parity matrix and nearest-codeword decoder', () => {
  const cases = [];
  for (let dataWord = 0; dataWord < 16; dataWord++)
    for (let flippedBit = 0; flippedBit <= 7; flippedBit++)
      cases.push({ slug: 'hamming-code', input: { dataWord, flippedBit } });
  const references = oracle(cases);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.slug, c.input);
    for (const [key, value] of Object.entries(references[i]))
      assert.equal(r[key], value, c.input.dataWord + '/' + c.input.flippedBit + ' ' + key);
    assert.equal(r.syndrome, c.input.flippedBit);
    assert.equal(r.recoveredWord, c.input.dataWord);
    assert.equal(r.correctedWord, r.encodedWord);
    assert.equal(r.encodedWord.length, 7);
    assert.equal(r.recoveredData.length, 4);
  });
});

test('the sixteen actual codewords have minimum distance three and binary strings keep leading zeros through shared formatting', () => {
  const words = Array.from(
    { length: 16 },
    (_, dataWord) => M.evaluate('hamming-code', { dataWord, flippedBit: 0 }).encodedWord
  );
  assert.equal(new Set(words).size, 16);
  let minimum = 7;
  for (let i = 0; i < words.length; i++)
    for (let j = i + 1; j < words.length; j++)
      minimum = Math.min(minimum, [...words[i]].filter((v, k) => v !== words[j][k]).length);
  assert.equal(minimum, 3);
  const zero = M.evaluate('hamming-code', { dataWord: 0, flippedBit: 0 });
  assert.equal(Readable.format(zero.encodedWord), '0000000');
  assert.equal(Readable.formatText('c = ' + zero.encodedWord), 'c = 0000000');
  assert.equal(
    Life.formatTemplate('c = {{encodedWord}}; recovered {{recoveredData}}', zero),
    'c = 0000000; recovered 0000'
  );
  assert.equal(
    Life.formatTemplate('c = {{encodedWord}}; recovered {{recoveredData}}', zero, { math: true }),
    'c = 0000000; recovered 0000'
  );
});

test('strict domains, immutable metadata and discrete interpolation preserve independent caller state without clocks', () => {
  const context = vm.createContext({
    setTimeout: () => assert.fail('provider timer'),
    requestAnimationFrame: () => assert.fail('provider clock')
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/information-bridges.js', import.meta.url), 'utf8'),
    context
  );
  assert.ok(context.AtlasInformationBridges);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p),
      control = M.controls(slug)[0];
    for (const bad of [
      null,
      [],
      { ...p, unknown: 2 },
      { ...p, [control.key]: true },
      { ...p, [control.key]: '1' },
      { ...p, [control.key]: Infinity },
      { ...p, [control.key]: NaN },
      { ...p, [control.key]: control.min - 0.01 },
      { ...p, [control.key]: control.max + 0.01 }
    ]) {
      assert.equal(M.evaluate(slug, bad).status, 'invalid_parameters');
      assert.equal(M.evaluate(slug, bad).output, null);
    }
    assert.equal(M.evaluate(slug, {}).valid, true);
    assert.equal(M.canInterpolate(slug, p, p), true);
    const exposed = M.controls(slug);
    exposed[0].min = -90;
    assert.equal(M.controls(slug)[0].min, control.min);
    M.render(slug, p);
    assert.deepEqual(p, before);
    assert.equal(typeof M.specs(slug).readout(p, M.evaluate(slug, p)).insight, 'string');
  }
  assert.equal(
    M.canInterpolate(
      'hamming-code',
      { dataWord: 5, flippedBit: 1 },
      { dataWord: 5, flippedBit: 2 }
    ),
    false
  );
  assert.equal(
    M.canInterpolate(
      'hamming-code',
      { dataWord: 5, flippedBit: 1 },
      { dataWord: 6, flippedBit: 1 }
    ),
    false
  );
  assert.equal(
    M.canInterpolate(
      'channel-capacity',
      { errorChance: 0.1, inputChance: 0.2 },
      { errorChance: 0.3, inputChance: 0.4 }
    ),
    true
  );
  assert.equal(M.evaluate('hamming-code', { dataWord: 2.5, flippedBit: 1 }).valid, false);
  assert.equal(M.has('constructor'), false);
  assert.equal(M.render('missing', {}), '');
  const r = M.evaluate('hamming-code', { dataWord: 5, flippedBit: 3 });
  r.encodedBits[0] = 9;
  assert.notEqual(M.evaluate('hamming-code', { dataWord: 5, flippedBit: 3 }).encodedBits[0], 9);
});

test('fixed-scale bars and primary-axis graphs encode current values, capacity and independent pinned values', () => {
  for (const compact of [false, true]) {
    const p = { errorChance: 0.1, inputChance: 0.25 },
      r = M.evaluate('channel-capacity', p),
      html = M.render('channel-capacity', p, { compact });
    for (const [name, value] of [
      ['capacity', r.capacity],
      ['mutualInformation', r.mutualInformation],
      ['noiseEntropy', r.noiseEntropy]
    ]) {
      const bar = role(html, name + '-bar');
      near(Number(bar.width), value * Number(bar['data-scale']), 1e-5);
    }
    const baseline = { errorChance: 0.4, inputChance: 0.75 },
      pin = M.evaluate('channel-capacity', baseline);
    const graph = M.render('channel-capacity', p, { compact, view: 'graph', baseline }),
      current = role(graph, 'current-capacity'),
      chosen = role(graph, 'current-information');
    const left = compact ? 44 : 85,
      right = (compact ? 360 : 760) - (compact ? 30 : 65),
      bottom = 340,
      top = 107;
    near(Number(current.cx), left + (right - left) * p.errorChance, 1e-5);
    near(Number(current.cy), bottom - (bottom - top) * r.capacity, 1e-5);
    near(Number(chosen.cx), Number(current.cx), 1e-5);
    near(Number(chosen.cy), bottom - (bottom - top) * r.mutualInformation, 1e-5);
    assert.ok(role(graph, 'capacity-curve').d && role(graph, 'information-curve').d);
    const pinned = [...graph.matchAll(/<circle[^>]+data-role="pinned-information"[^>]*>/g)].map(
      ([tag]) => attrs(tag)
    );
    assert.equal(pinned.length, 2);
    near(Number(pinned[0].cx), left + (right - left) * baseline.errorChance, 1e-5);
    near(Number(pinned[0].cy), bottom - (bottom - top) * pin.capacity, 1e-5);
    const samples = [
      ...M.render(
        'hamming-code',
        { dataWord: 5, flippedBit: 3 },
        { compact, view: 'graph' }
      ).matchAll(/<circle[^>]+data-role="syndrome-sample"[^>]*>/g)
    ].map(([tag]) => attrs(tag));
    assert.equal(samples.length, 8);
    samples.forEach((sample, i) => {
      assert.equal(Number(sample['data-input']), i);
      assert.equal(Number(sample['data-output']), i);
    });
  }
});

test('every story calculation and grammar binding reaches a scalar value, a reader and an actual scene mark', () => {
  for (const slug of M.ids) {
    const story = Stories.forSlug(slug),
      p = M.defaults(slug),
      r = M.evaluate(slug, p),
      values = { ...p, ...r },
      markup =
        M.render(slug, p, { compact: true }) + M.render(slug, p, { compact: true, view: 'graph' });
    assert.deepEqual(story.parameters, p);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    const marks = new Set(
      [...markup.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([, keys]) => keys.split(/\s+/))
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(
          Number.isFinite(values[key]) || typeof values[key] === 'string',
          slug + ' scalar ' + key
        );
        assert.ok(Stories.quantityFor(slug, key), slug + ' reader ' + key);
        assert.ok(marks.has(key), slug + ' scene ' + key);
      }
    for (const keys of Object.values(metadata.bindings[slug]))
      for (const key of keys) {
        assert.ok(Object.hasOwn(values, key), slug + ' binding value ' + key);
        assert.ok(Stories.quantityFor(slug, key), slug + ' binding reader ' + key);
        assert.ok(marks.has(key), slug + ' binding mark ' + key);
      }
    for (const key of ['constructor', '__proto__', 'toString'])
      assert.equal(Stories.quantityFor(slug, key), null);
  }
  for (const flippedBit of [0, 3, 7]) {
    const geometry = M.render('hamming-code', { dataWord: 5, flippedBit }, { compact: true });
    const selectedGroups = [...geometry.matchAll(/data-quantity="[^"]*\bflippedBit\b[^"]*"/g)];
    assert.equal(
      selectedGroups.length,
      flippedBit ? 2 : 1,
      'only the selected received bit and the explicit selection label depend on the flip selection'
    );
    const graph = M.render(
      'hamming-code',
      { dataWord: 5, flippedBit },
      { compact: true, view: 'graph' }
    );
    assert.equal(
      [...graph.matchAll(/data-quantity="[^"]*\bflippedBit\b[^"]*"/g)].length,
      1,
      'the selected graph probe changes while reference samples stay fixed'
    );
  }
});

test('canonical fixtures and five distinct original worked examples agree with the independent references', () => {
  for (const card of cards) {
    assert.equal(card.examples.length, 5);
    assert.equal(new Set(card.examples.map(e => JSON.stringify(e.inputs))).size, 5);
    for (const example of card.examples) {
      assert.match(example.provenance.kind, /original/);
      assert.equal(M.evaluate(card.slug, example.preset).valid, true);
    }
    const cases = card.interactive.expected_cases.map(c => ({ slug: card.slug, input: c.input })),
      expected = oracle(cases);
    card.interactive.expected_cases.forEach((c, i) => {
      assert.deepEqual(
        Object.keys(c.input).sort(),
        M.controls(card.slug)
          .map(x => x.key)
          .sort()
      );
      assert.equal(c.status, expected[i].status);
      const actual = M.evaluate(card.slug, c.input);
      assert.equal(actual.status, c.status);
      if (c.status === 'valid') {
        near(c.output, expected[i].output);
        near(actual.output, c.output);
      }
    });
  }
});

test('model-derived previews have exact primary-output marks, readable labels and separate caption bands', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      body = Previews.draw(slug, p, r);
    const output = attrs(body.match(/<g[^>]+data-preview-quantity="output"[^>]*>/)?.[0] || '');
    assert.equal(Number(output['data-value']), r.output);
    for (const [tag] of body.matchAll(/<text[^>]*>/g)) {
      const a = attrs(tag),
        size = Number(a['font-size']),
        y = Number(a.y);
      assert.ok(size >= 13);
      assert.ok(y === 216 || y + size / 4 <= 188, 'art caption separation ' + slug + ' ' + tag);
    }
    assert.doesNotMatch(body, /NaN|Infinity|undefined/);
  }
});

test('authored notation has valid sources, actual local meaning and no unresolved math or unit records', () => {
  const core = require('../src/math-terms.js');
  const map = new Map(core.entries.map(e => [e.id, e]));
  Terms.entries.forEach(e => map.set(e.id, e));
  const entries = [...map.values()],
    ids = new Set(entries.map(e => e.id));
  for (const e of Terms.entries) {
    for (const key of e.sourceKeys) assert.ok(Terms.sources[key], e.id + ' source');
    for (const id of e.relatedIds || []) assert.ok(ids.has(id), e.id + ' related ' + id);
  }
  const fields = Terms.entries.flatMap(e => [
    { slug: 'reference:' + e.id, ownerEntryId: e.id, text: e.example, kind: 'formula' },
    ...e.symbols.map(text => ({
      slug: 'reference:' + e.id,
      ownerEntryId: e.id,
      text,
      kind: e.category === 'units' ? 'unit' : 'formula'
    }))
  ]);
  const audit = N.audit({ cards, stories: Stories.all(), entries, fields });
  assert.deepEqual(
    audit.unresolved.map(x => ({ slug: x.slug, token: x.token, location: x.location })),
    []
  );
  assert.deepEqual(audit.review, []);
  const context = vm.createContext({
    AtlasMathTerms: { entries, sources: { ...core.sources, ...Terms.sources } },
    AtlasMathNotation: N
  });
  vm.runInContext(
    fs.readFileSync(new URL('../src/math-index.js', import.meta.url), 'utf8'),
    context
  );
  const index = context.AtlasMathIndex.create({
    cards,
    sources: metadata.sources,
    stories: Stories.all()
  });
  for (const e of Terms.entries)
    assert.ok(
      index.get(e.id).usedBy.some(use => M.ids.includes(use.slug)),
      e.id + ' actual use'
    );
});
