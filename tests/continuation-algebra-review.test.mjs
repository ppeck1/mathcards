/* Independent critical-state and feasibility review, distinct from teaching qualification. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
const require = createRequire(import.meta.url);
const M = require('../src/algebra-extensions.js');
const nearRelative = (actual, expected) =>
  assert.ok(
    Math.abs(actual - expected) <= 2e-12 * Math.max(Math.abs(expected), Number.MIN_VALUE),
    `${actual} should agree with ${expected}`
  );

test('quadratic sign decisions survive rounded-away discriminants and stable roots avoid cancellation', () => {
  const delta = 2 ** -52;
  const positive = { leading: 1 + delta, linear: 2, constant: 1 - delta };
  assert.equal(
    positive.linear ** 2 - 4 * positive.leading * positive.constant,
    0,
    'ordinary products lose the exact represented difference'
  );
  const r = M.evaluate('quadratic-equation', positive);
  assert.equal(r.valid, true);
  assert.equal(r.discriminantSign, 1);
  assert.equal(r.output, 2);
  assert.ok(r.roots[0] < r.roots[1]);
  nearRelative(r.roots[0] * r.roots[1], positive.constant / positive.leading);
  const negative = { leading: 1 + delta, linear: 2, constant: 1 - 2 ** -53 };
  assert.equal(negative.linear ** 2 - 4 * negative.leading * negative.constant, 0);
  assert.equal(M.evaluate('quadratic-equation', negative).discriminantSign, -1);
  assert.equal(M.evaluate('quadratic-equation', negative).output, 0);
  const tinyRoot = M.evaluate('quadratic-equation', { leading: 1, linear: 4, constant: 1e-200 });
  assert.equal(tinyRoot.output, 2);
  nearRelative(tinyRoot.roots[1], -2.5e-201);
  assert.deepEqual(M.evaluate('quadratic-equation', { leading: 1, linear: 0, constant: 0 }).roots, [
    0
  ]);
});

test('every budget-corner point satisfies the represented resource constraints exactly', () => {
  const budgets = [
    0,
    Number.MIN_VALUE,
    0.1,
    3 - 2 ** -51,
    3,
    3 + 2 ** -51,
    4 - 2 ** -51,
    4,
    4 + 2 ** -50,
    6.2,
    7
  ];
  const rows = budgets.map(budget => {
    const r = M.evaluate('linear-programming', { budget, rateX: 3, rateY: 2 });
    assert.equal(r.valid, true);
    return { budget, vertices: r.vertices };
  });
  const exact = JSON.parse(
    execFileSync(
      'python',
      [
        '-c',
        'import json,sys;from fractions import Fraction;rows=json.load(sys.stdin);print(json.dumps([all(Fraction(x)>=0 and Fraction(x)<=4 and Fraction(y)>=0 and Fraction(y)<=3 and Fraction(x)+Fraction(y)<=Fraction(row["budget"]) for x,y in row["vertices"]) for row in rows]))'
      ],
      { input: JSON.stringify(rows), encoding: 'utf8' }
    )
  );
  assert.ok(
    exact.every(Boolean),
    'vertex clipping must preserve actual binary-rational feasibility, not a tolerance-expanded set'
  );
  const origin = M.evaluate('linear-programming', { budget: 0, rateX: 5, rateY: -3 });
  assert.deepEqual(origin.vertices, [[0, 0]]);
  assert.equal(origin.output, 0);
  const flat = M.evaluate('linear-programming', { budget: 5, rateX: 0, rateY: 0 });
  assert.equal(flat.allOptimal, true);
  assert.equal(flat.optimalIndices.length, flat.vertices.length);
  const ties = M.evaluate('linear-programming', { budget: 5, rateX: 2, rateY: 2 });
  assert.equal(ties.optimalIndices.length, 2);
  for (const rateX of [2 - 2 ** -52, 2 + 2 ** -51])
    assert.equal(
      M.evaluate('linear-programming', { budget: 5, rateX, rateY: 2 }).optimalIndices.length,
      1
    );
});

test('pinned quadratic families include their own representable double-root event in the plotted samples', () => {
  const context = vm.createContext({ AtlasPlotView: { render: value => value } });
  vm.runInContext(
    fs.readFileSync(new URL('../src/algebra-extensions.js', import.meta.url), 'utf8'),
    context
  );
  const current = { constant: -3, linear: -2, leading: 1 };
  const baseline = { constant: -3, linear: 1.125, leading: 1 };
  const graph = context.AtlasAlgebraExtensions.render('quadratic-equation', current, {
    view: 'graph',
    baseline
  });
  const pin = graph.series.find(row => row.id === 'pinned');
  const critical = 0.31640625;
  assert.equal(M.evaluate('quadratic-equation', { ...baseline, constant: critical }).output, 1);
  assert.ok(
    pin.points.some(point => point.x === critical && point.y === 1),
    'a current-family event is not a substitute for the pinned family’s event'
  );
});
