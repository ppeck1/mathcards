import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/comparison-extensions.js');
const near = (a, b, tolerance = 3e-12) =>
  assert.ok(
    Number.isFinite(a) && Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)),
    `${a} ≈ ${b}`
  );
const python = (program, input) =>
  JSON.parse(
    execFileSync('python', ['-X', 'utf8', '-c', program], {
      input: JSON.stringify(input),
      encoding: 'utf8'
    })
  );
const references = cases =>
  python(
    'import json,sys;sys.path.insert(0,"tools");from comparison_extension_reference import compute;print(json.dumps([compute(c["slug"],c["input"]) for c in json.load(sys.stdin)]))',
    cases
  );

test('covariance entries and trace agree with actual centered pairs and exact independent reconstruction', () => {
  const cases = [];
  for (const horizontal of [0.25, 1, 2])
    for (const shared of [-2, -0.7, 0, 0.75, 2])
      for (const residual of [0, 0.5, 2]) {
        const p = { horizontal, shared, residual },
          r = M.evaluate('covariance-matrix', p);
        assert.equal(r.valid, true);
        near(r.xValues.reduce((a, b) => a + b, 0) / 5, r.meanX);
        near(r.yValues.reduce((a, b) => a + b, 0) / 5, r.meanY);
        near(r.xValues.reduce((sum, x) => sum + (x - r.meanX) ** 2, 0) / 4, r.sxx);
        near(r.yValues.reduce((sum, y) => sum + (y - r.meanY) ** 2, 0) / 4, r.syy);
        near(
          r.xValues.reduce((sum, x, i) => sum + (x - r.meanX) * (r.yValues[i] - r.meanY), 0) / 4,
          r.sxy
        );
        near(r.output, r.sxx + r.syy);
        assert.deepEqual(r.matrix, [
          [r.sxx, r.sxy],
          [r.sxy, r.syy]
        ]);
        assert.deepEqual(
          r.rows.map(row => row.position),
          [1, 2, 3, 4, 5]
        );
        assert.ok(r.output <= 35);
        cases.push({ slug: 'covariance-matrix', input: p, expected: r.output });
      }
  references(cases).forEach((r, i) => {
    assert.equal(r.status, 'valid');
    near(r.output, cases[i].expected);
  });
});

test('principal spreads reconstruct covariance, preserve singular rank and disclose circular orientation', () => {
  for (const shared of [-2, 0, 0.75, 2])
    for (const residual of [0, 0.05, 0.5, 2]) {
      const p = { shared, horizontal: 1, residual },
        r = M.evaluate('covariance-matrix', p),
        c = Math.cos(r.angleMajor),
        s = Math.sin(r.angleMajor);
      assert.equal(r.rank, residual === 0 ? 1 : 2);
      near(r.lambdaMajor + r.lambdaMinor, r.trace);
      near(r.lambdaMajor * r.lambdaMinor, r.determinant);
      near(r.lambdaMajor * c * c + r.lambdaMinor * s * s, r.sxx);
      near((r.lambdaMajor - r.lambdaMinor) * s * c, r.sxy);
      near(r.majorRadius ** 2, r.lambdaMajor);
      near(r.minorRadius ** 2, r.lambdaMinor);
      near(r.ellipseArea, Math.PI * r.majorRadius * r.minorRadius);
      assert.ok(r.lambdaMajor >= r.lambdaMinor && r.lambdaMinor >= 0);
      const svg = M.render('covariance-matrix', p, { compact: true });
      if (residual === 0) {
        assert.equal(r.minorRadius, 0);
        assert.doesNotMatch(svg, /<ellipse\b/);
      } else assert.match(svg, /<ellipse\b/);
    }
  const circle = { shared: 0, horizontal: Math.sqrt(1.4), residual: 1 },
    r = M.evaluate('covariance-matrix', circle);
  assert.equal(r.angleDefined, false);
  assert.equal(r.orientationStable, false);
  assert.match(M.render('covariance-matrix', circle), /no unique principal direction/);
  const nearly = M.evaluate('covariance-matrix', { ...circle, shared: 1e-12 });
  assert.equal(nearly.angleDefined, true);
  assert.equal(nearly.orientationStable, false);
  assert.match(
    M.render('covariance-matrix', { ...circle, shared: 1e-12 }),
    /direction is unstable/
  );
  for (const p of [
    { shared: 0.75, horizontal: 1, residual: Number.MIN_VALUE },
    { shared: 0.9, horizontal: 1.1, residual: 1e-12 },
    { shared: Number.MIN_VALUE, horizontal: 1, residual: 0.5 }
  ])
    assert.equal(M.evaluate('covariance-matrix', p).status, 'numeric_precision');
});

test('signed ranks omit zero differences, average tied magnitudes and enumerate inclusive sign tails', () => {
  const cases = [];
  for (const pattern of ['mixed', 'tied', 'positive'])
    for (const lastDifference of [-5, -4.001, -4, -3, -2, -1, -0.05, 0, 0.05, 1, 2, 3, 4, 5]) {
      const p = { pattern, lastDifference },
        r = M.evaluate('wilcoxon-signed-rank', p);
      assert.equal(r.valid, true);
      assert.equal(r.assignmentCount, 2 ** r.nonzeroCount);
      assert.equal(r.nonzeroCount, lastDifference === 0 ? 4 : 5);
      assert.equal(r.zeroCount, lastDifference === 0 ? 1 : 0);
      if (lastDifference === 0) assert.equal(r.ranks[4], null);
      near(r.rankTotal, (r.nonzeroCount * (r.nonzeroCount + 1)) / 2);
      near(r.positiveRankSum + r.negativeRankSum, r.rankTotal);
      near(r.positiveRankSum - r.negativeRankSum, r.signedScore);
      assert.equal(
        r.tailCount,
        r.distribution.filter(row => Math.abs(row.score) >= Math.abs(r.signedScore)).length
      );
      near(r.output, r.tailCount / r.assignmentCount);
      assert.ok(r.output >= 2 / 32 && r.output <= 1);
      const scores = r.signedScores.slice().sort((a, b) => a - b);
      assert.deepEqual(scores, scores.map(x => (x === 0 ? 0 : -x)).reverse());
      cases.push({ slug: 'wilcoxon-signed-rank', input: p, expected: r.output });
    }
  assert.deepEqual(
    M.evaluate('wilcoxon-signed-rank', { pattern: 'tied', lastDifference: 2 }).ranks,
    [3, 3, 3, 3, 3]
  );
  assert.equal(
    M.evaluate('wilcoxon-signed-rank', { pattern: 'positive', lastDifference: 5 }).output,
    2 / 32
  );
  assert.equal(
    M.evaluate('wilcoxon-signed-rank', { pattern: 'positive', lastDifference: 0 }).output,
    2 / 16
  );
  assert.equal(
    M.evaluate('wilcoxon-signed-rank', { pattern: 'mixed', lastDifference: Number.MIN_VALUE })
      .status,
    'numeric_precision'
  );
  references(cases).forEach((r, i) => {
    assert.equal(r.status, 'valid');
    near(r.output, cases[i].expected);
  });
});

test('Mann–Whitney rank sums equal pair scores and exact twenty-allocation references with ties', () => {
  const cases = [];
  for (const lastScore of [0, 0.05, 1, 1.01, 2, 3, 4, 5, 6, 6.01, 7])
    for (const scale of [0.5, 1, 2]) {
      const p = { lastScore, scale },
        r = M.evaluate('mann-whitney', p);
      assert.equal(r.valid, true);
      assert.equal(r.allocationCount, 20);
      assert.equal(
        r.rankA.reduce((a, b) => a + b, 0),
        r.rankSumA
      );
      assert.equal(r.rankSumA + r.rankB.reduce((a, b) => a + b, 0), 21);
      near(r.uA, r.rankSumA - 6);
      near(r.uA, r.wins + r.ties / 2);
      near(
        r.pairComparisons.flat().reduce((a, b) => a + b, 0),
        r.uA
      );
      assert.equal(r.uA + r.uB, 9);
      near(r.probabilitySuperiority, r.uA / 9);
      assert.equal(
        r.tailCount,
        r.distribution.filter(row => Math.abs(row.u - 4.5) >= Math.abs(r.uA - 4.5)).length
      );
      assert.ok(r.output >= 2 / 20 && r.output <= 1);
      const base = M.evaluate('mann-whitney', { lastScore, scale: 1 });
      assert.equal(r.output, base.output);
      assert.deepEqual(r.rankA, base.rankA);
      assert.deepEqual(r.rankB, base.rankB);
      r.groupA.forEach((value, i) => near(value, r.rawA[i] * scale));
      cases.push({ slug: 'mann-whitney', input: p, expected: r.output });
    }
  const tied = M.evaluate('mann-whitney', { lastScore: 4, scale: 1 });
  assert.equal(tied.ties, 1);
  assert.equal(tied.uA, 2.5);
  assert.equal(
    M.evaluate('mann-whitney', { lastScore: Number.MIN_VALUE, scale: 0.5 }).status,
    'numeric_precision'
  );
  references(cases).forEach((r, i) => {
    assert.equal(r.status, 'valid');
    near(r.output, cases[i].expected);
  });
});

test('Mann–Whitney scene distinguishes the U total from its normalized pair share', () => {
  for (const [lastScore, uA] of [
    [2, 1.5],
    [5, 3],
    [7, 4]
  ])
    for (const compact of [false, true]) {
      const html = M.render('mann-whitney', { lastScore, scale: 1 }, { compact });
      assert.ok(html.includes('U_A = ' + uA + ' of 9'));
      assert.doesNotMatch(html, /U_A\s*=\s*[-−\d.]+\s*\/\s*9/);
    }
});

test('domains, select copies, interpolation and pure recomputation retain caller ownership', () => {
  for (const slug of M.ids) {
    const p = M.defaults(slug),
      before = structuredClone(p);
    for (const bad of [
      null,
      [],
      { ...p, unknown: 2 },
      { ...p, [Object.keys(p)[0]]: true },
      { ...p, [Object.keys(p)[0]]: NaN },
      { ...p, [Object.keys(p)[0]]: Infinity }
    ])
      assert.equal(M.validateParams(slug, bad).valid, false);
    assert.equal(M.canInterpolate(slug, p, { ...p }), true);
    M.evaluate(slug, p);
    M.render(slug, p);
    assert.deepEqual(p, before);
    const first = M.controls(slug)[0];
    for (const value of [first.min, first.max])
      near(M.curveValue(slug, p, value), M.evaluate(slug, { ...p, [first.key]: value }).output);
    assert.equal(M.curveValue(slug, p, first.max + 1), null);
  }
  const controls = M.controls('wilcoxon-signed-rank');
  controls[1].options[0].value = 'outside';
  assert.equal(M.controls('wilcoxon-signed-rank')[1].options[0].value, 'mixed');
  assert.equal(
    M.canInterpolate('wilcoxon-signed-rank', M.defaults('wilcoxon-signed-rank'), {
      lastDifference: 5,
      pattern: 'tied'
    }),
    false
  );
  assert.equal(M.validateParams('wilcoxon-signed-rank', { pattern: 'unknown' }).valid, false);
});

test('compact, graph and pinned scenes are valid finite SVG and ranks are not smoothed', () => {
  const documents = [];
  for (const slug of M.ids)
    for (const compact of [false, true])
      for (const view of ['geometry', 'graph']) {
        const p = M.defaults(slug),
          html = M.render(slug, p, {
            compact,
            view,
            id: 'xml-' + slug + '-' + compact + '-' + view,
            baseline: p
          });
        assert.doesNotMatch(html, /NaN|Infinity|="[^"]*undefined/);
        assert.match(html, /data-quantity="[^"]*output/);
        if (view === 'geometry')
          for (const role of ['input', 'intermediate', 'output'])
            assert.match(html, new RegExp('data-story-part="' + role + '"'));
        if (view === 'graph' && slug !== 'covariance-matrix') {
          assert.match(html, /data-role="sample-point"/);
          assert.doesNotMatch(html, /<path data-series="result"/);
        }
        documents.push(html.match(/<svg\b[\s\S]*?<\/svg>/)[0]);
      }
  python(
    'import json,sys,xml.etree.ElementTree as E;[E.fromstring(s) for s in json.load(sys.stdin)];print("true")',
    documents
  );
  const mann = M.render('mann-whitney', { lastScore: 3, scale: 1 }, { compact: true });
  assert.equal((mann.match(/data-reference-allocation="true"/g) || []).length, 20);
  assert.match(mann, /ranks 1, 3.5, 3.5/);
});

test('variable focus identifies the observations and matrix entries that actually depend on it', () => {
  const scenes = M.ids.map(
    slug => M.render(slug, M.defaults(slug), { compact: true }).match(/<svg\b[\s\S]*?<\/svg>/)[0]
  );
  const evidence = python(
    `import json,sys,xml.etree.ElementTree as E
def inspect(source):
    rows=[]
    def walk(node, inherited):
        keys=inherited | set(node.get('data-quantity','').split())
        tag=node.tag.rsplit('}',1)[-1]
        if tag in ('circle','ellipse','rect','tspan'):
            rows.append(dict(tag=tag,keys=sorted(keys),attributes=dict(node.attrib),text=''.join(node.itertext())))
        for child in node: walk(child,keys)
    walk(E.fromstring(source),set())
    return rows
print(json.dumps([inspect(s) for s in json.load(sys.stdin)]))`,
    scenes
  );
  const [covariance, signedRanks, mann] = evidence;
  const includes = (row, key) => row.keys.includes(key);
  const circles = (rows, key) => rows.filter(row => row.tag === 'circle' && includes(row, key));
  assert.equal(circles(covariance, 'horizontal').length, 4);
  assert.equal(circles(covariance, 'shared').length, 4);
  assert.equal(circles(covariance, 'residual').length, 5);
  assert.equal(circles(signedRanks, 'lastDifference').length, 1);
  assert.equal(circles(signedRanks, 'pattern').length, 4);
  assert.equal(circles(mann, 'lastScore').length, 1);
  assert.equal(circles(mann, 'scale').length, 6);
  assert.equal(circles(mann, 'groupA').length, 3);
  assert.equal(circles(mann, 'groupB').length, 3);
  assert.equal(circles(mann, 'lastScore')[0].attributes.cy, '122');
  assert.ok(circles(mann, 'lastScore')[0].keys.includes('groupA'));
  const cellRectangles = mann.filter(row => row.tag === 'rect' && includes(row, 'pairComparisons'));
  assert.ok(cellRectangles.length >= 9);
  assert.deepEqual(
    [
      ...new Set(
        cellRectangles.filter(row => includes(row, 'lastScore')).map(row => row.attributes.y)
      )
    ],
    ['315']
  );
  assert.ok(cellRectangles.every(row => !includes(row, 'scale')));
  const matrixEntries = covariance.filter(row => row.tag === 'tspan' && includes(row, 'matrix'));
  assert.equal(matrixEntries.length, 4);
  assert.deepEqual(
    matrixEntries.map(row =>
      ['horizontal', 'shared', 'residual'].filter(key => includes(row, key))
    ),
    [['horizontal'], ['horizontal', 'shared'], ['horizontal', 'shared'], ['shared', 'residual']]
  );
  for (const key of ['rank', 'determinant'])
    assert.ok(
      covariance
        .filter(row => row.tag === 'tspan' && includes(row, key))
        .every(row => !includes(row, 'shared'))
    );
});

test('canonical comparison fixtures agree with the independent Python oracle and installed models', () => {
  const cases = M.ids.flatMap(slug => {
    const file = new URL('../content/cards/' + slug + '.json', import.meta.url);
    assert.equal(fs.existsSync(file), true, 'Canonical card is required: ' + slug);
    return JSON.parse(fs.readFileSync(file, 'utf8')).interactive.expected_cases.map(c => ({
      slug,
      ...c
    }));
  });
  const oracle = references(cases);
  cases.forEach((c, i) => {
    const actual = M.evaluate(c.slug, c.input),
      expected = oracle[i];
    assert.equal(actual.status, c.status || 'valid', c.slug + ' ' + JSON.stringify(c.input));
    assert.equal(expected.status, c.status || 'valid', c.slug + ' reference');
    if (actual.status === 'valid') {
      near(actual.output, c.output);
      near(actual.output, expected.output);
    }
  });
});
