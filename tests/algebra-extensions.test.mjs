import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/algebra-extensions.js');
const Stories = require('../src/algebra-extension-stories.js');
const Terms = require('../src/algebra-extension-terms.js');
const Previews = require('../src/algebra-extension-previews.js');
const delta = JSON.parse(
  fs.readFileSync(
    new URL('../content/planning/algebra-extension-integration.json', import.meta.url),
    'utf8'
  )
);
const cards = M.ids.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const near = (a, b) =>
  assert.ok(Math.abs(a - b) <= 2e-12 * Math.max(1, Math.abs(a), Math.abs(b)), `${a} != ${b}`);
const graph = (slug, p, options = {}) => {
  const ctx = vm.createContext({ AtlasPlotView: { render: spec => spec } });
  vm.runInContext(
    fs.readFileSync(new URL('../src/algebra-extensions.js', import.meta.url), 'utf8'),
    ctx
  );
  return ctx.AtlasAlgebraExtensions.render(slug, p, {
    view: 'graph',
    sceneControl: false,
    ...options
  });
};

test('three bounded algebra providers retain fresh defaults, immutable metadata and strict numeric domains', () => {
  assert.deepEqual(M.ids, delta.slugs);
  assert.equal(M.ids.length, 3);
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      other = M.defaults(slug),
      field = M.controls(slug)[0];
    assert.notEqual(p, other);
    assert.deepEqual(p, other);
    assert.ok(Object.isFrozen(M.ids));
    assert.equal(M.specs(slug).axis, field.key);
    for (const input of [
      null,
      [],
      { ...p, unexpected: 1 },
      { ...p, [field.key]: true },
      { ...p, [field.key]: '1' },
      { ...p, [field.key]: NaN },
      { ...p, [field.key]: field.max + 1 }
    ])
      assert.equal(M.evaluate(slug, input).status, 'invalid_parameters');
    assert.equal(M.evaluate(slug, p).valid, true);
    for (const stat of M.specs(slug).readout(p, M.evaluate(slug, p)).stats)
      assert.ok(
        typeof stat.note === 'string' && stat.note.length > 20,
        'Every statistic explains its quantity role or units.'
      );
    assert.deepEqual(M.defaults(slug), other);
    for (const value of [field.min, field.max])
      assert.equal(M.evaluate(slug, { ...p, [field.key]: value }).valid, true);
  }
  for (const slug of ['constructor', 'toString', '__proto__', 'unknown', null])
    assert.equal(M.has(slug), false);
});

test('every bounded complex grid preserves conjugation, modulus and the Pythagorean identity', () => {
  for (let a = -4; a <= 4; a += 0.5)
    for (let b = -4; b <= 4; b += 0.5) {
      const r = M.evaluate('complex-number', { real: a, imag: b });
      assert.equal(r.valid, true);
      near(r.output * r.output, a * a + b * b);
      assert.equal(r.conjugateImag === 0 ? 0 : r.conjugateImag, -b === 0 ? 0 : -b);
      near(M.evaluate('complex-number', { real: a, imag: -b }).output, r.output);
      assert.deepEqual(r.complexPoint, [a === 0 ? 0 : a, b === 0 ? 0 : b]);
      assert.deepEqual(r.conjugatePoint, [a === 0 ? 0 : a, -b === 0 ? 0 : -b]);
      assert.ok(Object.isFrozen(r.complexPoint));
    }
  assert.equal(M.evaluate('complex-number', { real: 1, imag: 1e-200 }).status, 'numeric_precision');
});

test('quadratic counts follow exact discriminant sign and root positions satisfy Vieta and residuals', () => {
  for (const leading of [0.5, 1, 1.5, 2])
    for (let linear = -4; linear <= 4; linear++)
      for (let constant = -4; constant <= 4; constant++) {
        const r = M.evaluate('quadratic-equation', { leading, linear, constant }),
          D = linear * linear - 4 * leading * constant;
        assert.equal(r.output, D < 0 ? 0 : D === 0 ? 1 : 2);
        assert.equal(r.discriminantSign, Math.sign(D));
        for (const root of r.roots) near(leading * root * root + linear * root + constant, 0);
        if (r.roots.length === 2) {
          near(r.roots[0] + r.roots[1], -linear / leading);
          near(r.roots[0] * r.roots[1], constant / leading);
        }
      }
});

test('critical neighbors are not relabeled as double roots and unresolved magnitudes are explicit', () => {
  for (const [constant, count] of [
    [0.9999999999999999, 2],
    [1, 1],
    [1.0000000000000002, 0]
  ]) {
    const r = M.evaluate('quadratic-equation', { leading: 1, linear: -2, constant });
    assert.equal(r.output, count);
  }
  const cancellation = M.evaluate('quadratic-equation', {
    leading: 1,
    linear: 4,
    constant: 1e-200
  });
  assert.equal(cancellation.valid, true);
  assert.ok(cancellation.roots[1] !== 0);
  near(cancellation.roots[1] / -2.5e-201, 1);
  assert.equal(
    M.evaluate('quadratic-equation', { leading: 1, linear: Number.MIN_VALUE, constant: 0 }).status,
    'numeric_precision'
  );
  const s = M.evaluate('quadratic-equation', {
    leading: 0.5,
    linear: 0,
    constant: Number.MIN_VALUE
  });
  assert.equal(s.output, 0);
  assert.ok(s.discriminant < 0);
});

test('nonbinary coefficient critical neighbors match exact rational classification', () => {
  const cases = [];
  for (const leading of [0.7, 1.1, 1.7])
    for (const linear of [0.3, 1.3, 2.7]) {
      const c = (linear * linear) / (4 * leading);
      if (c > 4) continue;
      const bytes = new DataView(new ArrayBuffer(8));
      bytes.setFloat64(0, c);
      const bits = bytes.getBigUint64(0);
      for (const offset of [-1n, 0n, 1n]) {
        bytes.setBigUint64(0, bits + offset);
        cases.push({ leading, linear, constant: bytes.getFloat64(0) });
      }
    }
  const refs = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from algebra_extension_reference import compute;print(json.dumps([compute("quadratic-equation-visual-model",p) for p in json.load(sys.stdin)]))'
      ],
      { cwd: new URL('..', import.meta.url), input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
  cases.forEach((p, i) => {
    const r = M.evaluate('quadratic-equation', p);
    assert.equal(r.status, refs[i].status);
    if (r.valid) assert.equal(r.output, refs[i].output, JSON.stringify(p));
  });
});

test('linear programming vertices remain feasible and no dense feasible sample beats their maximum', () => {
  for (const budget of [0, 0.25, 1, 2.5, 3, 4, 5, 6.5, 7])
    for (const rateX of [-3, 0, 1, 3, 5])
      for (const rateY of [-3, 0, 2, 5]) {
        const r = M.evaluate('linear-programming', { budget, rateX, rateY });
        assert.equal(r.valid, true);
        assert.ok(r.vertices.length >= 1);
        for (const [x, y] of r.vertices) {
          assert.ok(x >= 0 && x <= 4 && y >= 0 && y <= 3);
          assert.ok(x + y <= budget + 1e-13);
        }
        for (let x = 0; x <= 4; x += 0.25)
          for (let y = 0; y <= 3; y += 0.25)
            if (x + y <= budget) assert.ok(rateX * x + rateY * y <= r.output + 1e-12);
        for (const i of r.optimalIndices) near(r.vertexValues[i], r.output);
        assert.ok(Object.isFrozen(r.vertices) && Object.isFrozen(r.vertices[0]));
      }
});

test('optimal edges, flat regions, negative contributions and near-ties retain different meanings', () => {
  const p = { budget: 5, rateX: 2, rateY: 2 },
    tie = M.evaluate('linear-programming', p);
  assert.equal(tie.optimalIndices.length, 2);
  assert.equal(tie.output, 10);
  assert.match(tie.optimalLabel, /entire feasible edge/);
  assert.equal(
    M.evaluate('linear-programming', { ...p, rateX: 2.0000000000000004 }).optimalIndices.length,
    1
  );
  assert.equal(
    M.evaluate('linear-programming', { ...p, rateX: 1.9999999999999998 }).optimalIndices.length,
    1
  );
  const flat = M.evaluate('linear-programming', { ...p, rateX: 0, rateY: 0 });
  assert.equal(flat.allOptimal, true);
  assert.equal(flat.optimalIndices.length, flat.vertices.length);
  assert.match(flat.optimalLabel, /Every feasible mixture/);
  const loss = M.evaluate('linear-programming', { ...p, rateX: -1, rateY: -2 });
  assert.equal(loss.output, 0);
  assert.deepEqual([loss.bestX, loss.bestY], [0, 0]);
  const tiny = M.evaluate('linear-programming', { budget: Number.MIN_VALUE, rateX: 1, rateY: 0 });
  assert.equal(tiny.output, Number.MIN_VALUE);
  assert.equal(tiny.vertices.length, 3);
  assert.equal(tiny.bestX, Number.MIN_VALUE);
  assert.equal(
    M.evaluate('linear-programming', {
      budget: Number.MIN_VALUE,
      rateX: Number.MIN_VALUE,
      rateY: 0
    }).status,
    'numeric_precision'
  );
});

test('canonical fixtures agree with the independent exact-rational and Decimal oracle', () => {
  const cases = cards.flatMap(card =>
    card.interactive.expected_cases.map(c => ({ model: card.interactive.model_id, ...c }))
  );
  const result = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,sys;sys.path.insert(0,"tools");from algebra_extension_reference import compute;print(json.dumps([compute(c["model"],c["input"]) for c in json.load(sys.stdin)]))'
      ],
      { cwd: new URL('..', import.meta.url), input: JSON.stringify(cases), encoding: 'utf8' }
    )
  );
  assert.equal(cases.length, 40);
  cases.forEach((c, i) => {
    const r = M.evaluate(c.model.replace('-visual-model', ''), c.input);
    assert.equal(r.status, c.status);
    assert.equal(result[i].status, c.status);
    if (c.status === 'valid') {
      near(r.output, c.output);
      near(result[i].output, c.output);
    }
  });
});

test('connected stories bind the first control, real calculations, every template quantity and protected lookups', () => {
  for (const story of Stories.all()) {
    const link = Stories.linksFor(story.slug),
      r = M.evaluate(story.slug, story.parameters),
      values = { ...story.parameters, ...r };
    assert.equal(story.variables[0].key, story.timeline.key);
    assert.equal(link.variableKey, story.timeline.key);
    assert.equal(link.symbol, story.variables[0].symbol);
    assert.deepEqual(
      story.calculation.map(s => s.role),
      ['input', 'intermediate', 'output']
    );
    for (const template of [
      ...story.steps.map(s => s.body),
      ...story.steps.map(s => s.formula),
      ...story.calculation.map(s => s.template)
    ])
      for (const [, key] of template.matchAll(/\{\{(\w+)\}\}/g)) {
        assert.ok(Object.hasOwn(values, key), key);
        assert.ok(Stories.quantityFor(story.slug, key), key);
      }
    assert.equal(story.steps.length, link.steps.length);
    assert.deepEqual(
      story.steps.map(s => s.focus),
      link.steps.map(s => s.focus)
    );
    for (const key of ['constructor', '__proto__', 'toString'])
      assert.equal(Stories.quantityFor(story.slug, key), null);
  }
  for (const key of ['constructor', '__proto__', 'toString'])
    assert.equal(Stories.linksFor(key), null);
});

test('Geometry, compact Geometry and Graph keep real quantity marks, pins and whole root counts', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      other = { ...p, [M.specs(slug).axis]: M.controls(slug)[0].min };
    for (const compact of [false, true]) {
      const html = M.render(slug, p, { id: 'slot:a', compact, baseline: other });
      assert.match(html, new RegExp('viewBox="0 0 ' + (compact ? '360' : '760') + ' 420"'));
      assert.match(html, /data-quantity="[^"]*output/);
      assert.match(html, /data-story-part="input"/);
      assert.doesNotMatch(html, /NaN|Infinity|<animate|<script|onload=/);
      if (compact)
        for (const [, size] of html.matchAll(/font-size="([\d.]+)"/g))
          assert.ok(Number(size) >= 16);
      for (const token of Object.keys(delta.bindings[slug]))
        for (const key of delta.bindings[slug][token])
          assert.match(html, new RegExp('data-quantity="[^"]*\\b' + key + '\\b'));
      assert.notEqual(html, M.render(slug, p, { id: 'slot_a', compact, baseline: other }));
    }
    const spec = graph(slug, p);
    assert.equal(spec.x.key, M.specs(slug).axis);
    if (slug === 'quadratic-equation') {
      assert.equal(spec.series[0].dots, true);
      assert.ok(spec.series[0].points.every(p => p.y === null || Number.isInteger(p.y)));
    } else assert.equal(spec.series[0].dots, false);
    assert.equal(spec.current[0].draggable, false);
    assert.equal(r.valid, true);
  }
});

test('each quadratic family retains its own critical sample when compared with a pin', () => {
  const current = { constant: -3, linear: -2, leading: 1 };
  const baseline = { constant: -3, linear: 1.125, leading: 1 };
  const spec = graph('quadratic-equation', current, { baseline });
  assert.equal(spec.series.length, 2);
  assert.ok(spec.series[0].points.some(p => p.x === 1 && p.y === 1));
  assert.ok(spec.series[1].points.some(p => p.x === 0.31640625 && p.y === 1));
  assert.ok(spec.series[1].points.some(p => p.x < 0.31640625 && p.y === 2));
  assert.ok(spec.series[1].points.some(p => p.x > 0.31640625 && p.y === 0));
  for (const compact of [false, true]) {
    const html = M.render('linear-programming', M.defaults('linear-programming'), {
      compact,
      baseline: { budget: 3, rateX: 3, rateY: 2 }
    });
    assert.match(html, /data-quantity="budget vertices" data-story-part="reference"><polygon/);
    assert.match(html, /violet outline retains the pinned feasible region/);
  }
});

test('matching previews expose the same outputs, readable captions and namespaced reference sources', () => {
  assert.deepEqual(Previews.list(), M.ids);
  const ids = new Set();
  for (const entry of Terms.entries) {
    assert.ok(!ids.has(entry.id), entry.id);
    ids.add(entry.id);
    for (const source of entry.sourceKeys) assert.ok(Terms.sources[source], source);
  }
  assert.ok(Object.keys(Terms.sources).every(key => key.startsWith('algebra_ext_')));
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      r = M.evaluate(slug, p),
      svg = Previews.draw(slug, p, r, { id: 'one' });
    assert.match(svg, /data-preview-quantity="output"/);
    assert.match(svg, /data-preview-layer="caption"/);
    assert.doesNotMatch(svg, /NaN|Infinity|<animate|<script/);
    for (const [, size] of svg.matchAll(/font-size="([\d.]+)"/g)) assert.ok(Number(size) >= 14);
    assert.ok(Previews.describe(slug, p, r).length > 70);
  }
});

test('every retained algebra reader links to real mathematical use in its canonical lesson', () => {
  const Index = require('../src/math-index.js');
  const index = Index.create({ cards, sources: delta.sources, stories: Stories.all() });
  for (const entry of Terms.entries) {
    const compiled = index.get(entry.id);
    assert.ok(compiled, entry.id);
    const relevant = entry.grammarCards.filter(slug => M.ids.includes(slug));
    assert.ok(relevant.length, entry.id + ' has a declared mathematical context');
    assert.ok(
      compiled.usedBy.some(use => relevant.includes(use.slug) && use.contexts.length > 0),
      entry.id + ' needs actual card evidence'
    );
  }
  const expectedSquares = [
    ['complex-number-quantity-realsquared', 'a²', 'a'],
    ['complex-number-quantity-imagsquared', 'b²', 'b']
  ];
  for (const [id, square, base] of expectedSquares) {
    const authored = Terms.entries.find(entry => entry.id === id);
    assert.deepEqual(authored.symbols, [square]);
    assert.ok(
      !authored.symbols.includes(base),
      'A component and its square retain different symbol roles'
    );
    const use = index.get(id).usedBy.find(use => use.slug === 'complex-number');
    assert.ok(
      use.contexts.some(context => context.via === 'term' && context.location === 'Property')
    );
  }
  for (const id of [
    'quadratic-equation-quantity-rootstatus',
    'quadratic-equation-quantity-rootlabel',
    'complex-imaginary-part'
  ])
    assert.ok(
      !Terms.entries.some(entry => entry.id === id),
      'Presentation strings and duplicate background functions are not additional lesson terms'
    );
});

test('all algebra scenes are strict XML while requested component and optimum stroke widths survive', () => {
  const html = [];
  for (const slug of M.ids) {
    const p = M.defaults(slug);
    const baseline = { ...p, [M.specs(slug).axis]: M.controls(slug)[0].min };
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        html.push(M.render(slug, p, { id: 'strict:' + slug, compact, view, baseline }));
      }
  }
  const count = execFileSync(
    'python',
    [
      '-c',
      'import json,re,sys,xml.etree.ElementTree as ET; scenes=json.load(sys.stdin); [ET.fromstring(re.search(r"<svg\\b.*?</svg>",html,re.S).group()) for html in scenes];print(len(scenes))'
    ],
    { cwd: new URL('..', import.meta.url), input: JSON.stringify(html), encoding: 'utf8' }
  );
  assert.equal(Number(count.trim()), 12);
  assert.match(html[0], /stroke-width="4"/);
  const edge = M.render('linear-programming', { budget: 5, rateX: 2, rateY: 2 }, { compact: true });
  assert.match(edge, /stroke-width="5"/);
  const previewParameters = [
    { budget: 5, rateX: 2, rateY: 2 },
    { budget: 5, rateX: 0, rateY: 0 }
  ];
  const previews = previewParameters.map(
    p =>
      '<svg xmlns="http://www.w3.org/2000/svg">' +
      Previews.draw('linear-programming', p, M.evaluate('linear-programming', p)) +
      '</svg>'
  );
  const parsed = execFileSync(
    'python',
    [
      '-c',
      'import json,sys,xml.etree.ElementTree as ET;svgs=json.load(sys.stdin);[ET.fromstring(svg) for svg in svgs];print(len(svgs))'
    ],
    { cwd: new URL('..', import.meta.url), input: JSON.stringify(previews), encoding: 'utf8' }
  );
  assert.equal(Number(parsed.trim()), 2, 'Tied-edge and flat-region previews remain strict XML');
  for (const svg of previews) assert.match(svg, /stroke-width="4"/);
});
