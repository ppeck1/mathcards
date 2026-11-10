import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url),
  M = require('../src/analysis-extensions.js'),
  Stories = require('../src/analysis-extension-stories.js'),
  Previews = require('../src/analysis-extension-previews.js'),
  Terms = require('../src/analysis-extension-terms.js');
const metadata = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/analysis-extension-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(id =>
  JSON.parse(fs.readFileSync(new URL('../content/cards/' + id + '.json', import.meta.url), 'utf8'))
);
const near = (a, b, t = 3e-12) =>
  assert.ok(Math.abs(a - b) <= t * Math.max(1, Math.abs(a), Math.abs(b)), `${a} != ${b}`);

test('analysis providers keep independent state and reject unsupported values without running getters', () => {
  assert.deepEqual(M.ids, metadata.slugs);
  assert.ok(Object.isFrozen(M.ids));
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      other = M.defaults(slug),
      field = M.controls(slug)[0];
    assert.notEqual(p, other);
    assert.deepEqual(p, other);
    assert.equal(M.specs(slug).axis, field.key);
    for (const input of [
      null,
      [],
      1,
      'inputs',
      Object.create({ ratio: 0.5 }),
      { ...p, unknown: 2 },
      { ...p, [field.key]: NaN },
      { ...p, [field.key]: Infinity },
      { ...p, [field.key]: true },
      { ...p, [field.key]: '1' },
      { ...p, [field.key]: field.max + 1 }
    ])
      assert.equal(M.evaluate(slug, input).valid, false, slug);
    let reads = 0;
    const accessor = { ...p };
    Object.defineProperty(accessor, field.key, {
      get() {
        reads++;
        return 2;
      },
      enumerable: true
    });
    assert.equal(M.evaluate(slug, accessor).valid, false);
    assert.equal(reads, 0);
    const badSymbol = { ...p, [Symbol('unknown')]: 1 };
    assert.equal(M.evaluate(slug, badSymbol).valid, false);
    const controls = M.controls(slug);
    controls[0].label = 'changed';
    assert.notEqual(M.controls(slug)[0].label, 'changed');
    assert.deepEqual(M.defaults(slug), p);
  }
  assert.equal(M.has('__proto__'), false);
  assert.throws(() => M.defaults('__proto__'), /Unknown/);
});

test('all 203 canonical fixtures agree with an independent exact-rational oracle', () => {
  const requests = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => ({ model: card.interactive.model_id, p: c.input }))
  );
  assert.equal(requests.length, 203);
  const reference = JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import sys,json;sys.path.insert(0,"tools");from analysis_extension_reference import compute;print(json.dumps([compute(x["model"],x["p"]) for x in json.load(sys.stdin)]))'
      ],
      { encoding: 'utf8', input: JSON.stringify(requests) }
    )
  );
  let index = 0;
  for (const card of cards)
    for (const fixture of card.interactive.expected_cases) {
      const actual = M.evaluate(card.slug, fixture.input),
        expected = reference[index++];
      assert.equal(expected.status, fixture.status);
      assert.equal(actual.status, expected.status, card.slug + ' ' + JSON.stringify(fixture.input));
      if (expected.status === 'valid') {
        near(actual.output, expected.output);
        near(fixture.output, expected.output);
      }
    }
});

test('inverse identities, swapped ordered pairs and slope guards remain distinct from reciprocals', () => {
  for (const p of [
    { reading: 5, gain: 2, offset: 1 },
    { reading: -5, gain: -2, offset: 1 },
    { reading: 0, gain: 0.5, offset: -2 },
    { reading: 8, gain: 0.25, offset: -3 }
  ]) {
    const r = M.evaluate('inverse-function', p);
    assert.equal(r.valid, true);
    near(r.output * p.gain + p.offset, p.reading);
    assert.deepEqual(r.forwardPoint, [r.output, p.reading]);
    assert.deepEqual(r.inversePoint, [p.reading, r.output]);
    for (const compact of [false, true]) {
      const markup = M.render('inverse-function', p, {
        view: 'graph',
        compact,
        id: 'inverse-proof'
      });
      const points = [
        ...markup.matchAll(
          /data-point="(forward|inverse)" data-x="([^"]+)" data-y="([^"]+)" cx="([^"]+)" cy="([^"]+)"/g
        )
      ];
      assert.equal(points.length, 2);
      near(Number(points[0][2]), Number(points[1][3]));
      near(Number(points[0][3]), Number(points[1][2]));
      near(
        Number(points[0][4]) - Number(points[1][4]),
        Number(points[0][5]) - Number(points[1][5]),
        1e-6
      );
    }
  }
  const d = M.defaults('inverse-function'),
    spec = M.specs('inverse-function');
  assert.equal(spec.canInterpolate(d, { ...d, gain: -2 }), false);
  assert.equal(spec.canInterpolate(d, { ...d, gain: 0.5 }), true);
  assert.equal(M.evaluate('inverse-function', { ...d, gain: 0 }).valid, false);
  assert.equal(M.evaluate('inverse-function', { ...d, gain: 0.1 }).valid, false);
  assert.equal(
    M.evaluate('inverse-function', { reading: 5e-324, gain: 3, offset: 0 }).status,
    'numeric_precision'
  );
});

test('geometric sums separate finite totals, the ratio-one branch, alternation and convergence', () => {
  const base = M.defaults('geometric-series');
  assert.equal(M.controls('geometric-series').find(c => c.key === 'terms').discrete, true);
  assert.equal(M.evaluate('geometric-series', { ...base, terms: 2.5 }).valid, false);
  for (const ratio of [-1.5, -1, -0.5, 0, 0.9999999999999999, 1, 1.0000000000000002, 1.5]) {
    const p = { ratio, first: 2, terms: 12 },
      r = M.evaluate('geometric-series', p);
    assert.equal(r.valid, true);
    assert.equal(r.contributions.length, 12);
    assert.equal(r.partialSums.length, 12);
    near(r.output, r.partialSums.at(-1));
    assert.equal(r.convergent, Math.abs(ratio) < 1);
    if (r.convergent) near(r.infiniteSum, 2 / (1 - ratio));
    else assert.equal(r.infiniteSum, null);
    if (ratio === 1) assert.equal(r.output, 24);
    if (ratio === -1) assert.equal(r.output, 0);
  }
  const alternate = M.evaluate('geometric-series', { ratio: -0.5, first: 3, terms: 4 });
  assert.deepEqual(alternate.contributions, [3, -1.5, 0.75, -0.375]);
  assert.deepEqual(alternate.partialSums, [3, 1.5, 2.25, 1.875]);
  assert.equal(alternate.infiniteSum, 2);
  assert.equal(
    M.evaluate('geometric-series', { ratio: 1e-200, first: 1, terms: 3 }).status,
    'numeric_precision'
  );
  const graph = M.render('geometric-series', { ratio: -1, first: 2, terms: 5 }, { view: 'graph' });
  assert.deepEqual(
    [...graph.matchAll(/data-x="([^"]+)" data-y="([^"]+)"/g)].map(m => [
      Number(m[1]),
      Number(m[2])
    ]),
    [
      [0, 0],
      [1, 2],
      [2, 0],
      [3, 2],
      [4, 0],
      [5, 2]
    ]
  );
  assert.match(graph, /do not invent fractional commands/);
});

test('stories carry every calculation placeholder and bound symbol into actual meanings', () => {
  for (const card of cards) {
    const slug = card.slug,
      story = Stories.forSlug(slug),
      r = M.evaluate(slug, story.parameters);
    assert.equal(story.variables[0].key, M.specs(slug).axis);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    for (const stage of story.calculation)
      for (const [, key] of stage.template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(r.parameters, key) || Object.hasOwn(r, key), slug + ' ' + key);
        assert.ok(Stories.quantityFor(slug, key));
      }
    assert.deepEqual(
      Object.keys(metadata.bindings[slug]).sort(),
      card.grammar.symbols.map(s => s.token).sort()
    );
    for (const key of metadata.bindings[slug]['f'] || []) assert.ok(Stories.quantityFor(slug, key));
    for (const keys of Object.values(metadata.bindings[slug]))
      for (const key of keys) assert.ok(Stories.quantityFor(slug, key), key);
    const ports = metadata.ports[slug];
    assert.ok(ports.some(p => p.direction === 'output' && p.key === 'output'));
    assert.deepEqual(
      ports
        .filter(p => p.direction === 'input')
        .map(p => p.key)
        .sort(),
      M.controls(slug)
        .map(c => c.key)
        .sort()
    );
    assert.equal(card.examples.length, 5);
    for (const e of card.examples) {
      assert.equal(M.evaluate(slug, e.preset).valid, true);
      assert.equal(e.steps.length, 3);
    }
    for (const token of card.grammar.symbols.map(s => s.token))
      assert.ok(
        (token === '∑'
          ? require('../src/math-terms.js').entries.filter(t => t.id === 'summation')
          : Terms.entries
        ).some(
          t => t.symbols.includes(token) && (!t.grammarCards || t.grammarCards.includes(slug))
        ),
        token
      );
  }
  for (const key of ['constructor', '__proto__', 'toString'])
    assert.equal(Stories.quantityFor('inverse-function', key), null);
});

test('desktop/compact scenes and remembered states remain finite, scoped and strict SVG', () => {
  const markup = [];
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      pin =
        slug === 'inverse-function'
          ? { reading: 8, gain: -0.25, offset: 3 }
          : { ratio: -1.5, first: 4, terms: 12 };
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const current = M.render(slug, p, { view, compact, id: 'proof-left' }),
          remembered = M.render(slug, p, { view, compact, id: 'proof-right', baseline: pin });
        assert.notEqual(current, remembered);
        assert.match(remembered, /data-baseline="true"/);
        assert.doesNotMatch(current, /NaN|Infinity|undefined/);
        assert.match(current, /data-quantity="[^"]*output/);
        markup.push(current, remembered);
      }
    const preview = Previews.draw(slug, p, r);
    assert.ok(preview);
    assert.match(preview, /data-preview-quantity="[^"]*output/);
    assert.ok(Previews.describe(slug, p, r).length > 80);
    markup.push('<svg xmlns="http://www.w3.org/2000/svg">' + preview + '</svg>');
  }
  const parsed = JSON.parse(
    execFileSync(
      'python',
      [
        '-X',
        'utf8',
        '-c',
        'import sys,json,re,xml.etree.ElementTree as E;rows=json.load(sys.stdin);count=0\nfor row in rows:\n s=re.search(r"<svg\\b[\\s\\S]*?</svg>",row).group();E.fromstring(s);count+=1\nprint(json.dumps({"parsed":count}))'
      ],
      { encoding: 'utf8', input: JSON.stringify(markup) }
    )
  );
  assert.equal(parsed.parsed, 18);
});

test('both providers load as classic offline scripts without browser APIs', () => {
  const context = vm.createContext({});
  for (const name of [
    'analysis-extensions.js',
    'analysis-extension-stories.js',
    'analysis-extension-previews.js',
    'analysis-extension-terms.js'
  ])
    vm.runInContext(fs.readFileSync(new URL('../src/' + name, import.meta.url), 'utf8'), context);
  assert.equal(
    context.AtlasAnalysisExtensions.evaluate('inverse-function', { reading: 5, gain: 2, offset: 1 })
      .output,
    2
  );
  assert.equal(
    context.AtlasAnalysisExtensions.evaluate('geometric-series', { ratio: 0.5, first: 2, terms: 6 })
      .output,
    3.9375
  );
  assert.equal(context.AtlasAnalysisExtensionStories.all().length, 2);
});

test('changing correction amplitude changes actual bar and graph lengths on the same reference scale', () => {
  const barLength = markup => {
    const m = markup.match(
      /data-quantity="ratio first terms contributions"><line x1="([^"]+)"[^>]*x2="([^"]+)"/
    );
    assert.ok(m);
    return Math.abs(Number(m[2]) - Number(m[1]));
  };
  const firstRise = markup => {
    const points = [
      ...markup.matchAll(/data-x="([^"]+)" data-y="([^"]+)" cx="([^"]+)" cy="([^"]+)"/g)
    ];
    return Math.abs(Number(points[1][4]) - Number(points[0][4]));
  };
  for (const ratio of [-1.5, -0.5, 0.5, 1, 1.5]) {
    const a = { ratio, first: 1, terms: 12 },
      b = { ...a, first: 2 };
    for (const compact of [false, true]) {
      near(
        barLength(M.render('geometric-series', b, { compact })),
        2 * barLength(M.render('geometric-series', a, { compact })),
        1e-4
      );
      near(
        firstRise(M.render('geometric-series', b, { compact, view: 'graph' })),
        2 * firstRise(M.render('geometric-series', a, { compact, view: 'graph' })),
        1e-4
      );
    }
  }
});
