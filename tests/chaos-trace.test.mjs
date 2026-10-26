import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Trace = require('../src/chaos-trace.js');
const Discovery = require('../src/discovery.js');
const near = (actual, expected, tolerance = 1e-13) => assert.ok(Math.abs(actual - expected) <= tolerance * Math.max(1, Math.abs(expected)), `${actual} ≈ ${expected}`);
const read = input => { const result = Discovery.evaluate('chaos-theory', input); return Trace.snapshot(result.parameters, result); };

test('chaos trace loads as a standalone offline UMD helper without DOM or model dependencies', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/chaos-trace.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasChaosTrace.snapshot, 'function');
  assert.equal(context.AtlasChaosTrace.MAX_GENERATION, 36);
  assert.match(Trace.FORMULA.expression, /r\(1 − xₙ\)/);
  const evaluated = Discovery.evaluate('chaos-theory', {});
  near(context.AtlasChaosTrace.snapshot(evaluated.parameters, evaluated).gapNow, evaluated.output);
});

test('parallel rows expose actual discrete inputs, remaining fractions, shared growth and next iterates', () => {
  for (const rate of [2.5, 3.8, 4]) for (const generation of [0, 1, 8, 12, 35, 36]) {
    const result = Discovery.evaluate('chaos-theory', { rate, generation }), trace = Trace.snapshot(result.parameters, result);
    assert.equal(trace.valid, true);
    assert.equal(trace.rate, rate);
    assert.deepEqual(trace.rows.map(row => row.id), ['A', 'B']);
    for (const [i, row] of trace.rows.entries()) {
      const orbit = i ? result.orbitB : result.orbitA;
      assert.equal(row.input, orbit[trace.n]);
      assert.equal(row.output, orbit[trace.nextGeneration]);
      assert.equal(row.remaining, 1 - row.input);
      assert.equal(row.growthFactor, rate * row.remaining);
      near(row.input * row.growthFactor, row.output);
    }
    assert.equal(trace.inputA, trace.rows[0].input); assert.equal(trace.inputB, trace.rows[1].input);
    assert.equal(trace.nextA, trace.rows[0].output); assert.equal(trace.nextB, trace.rows[1].output);
    assert.equal(trace.factorA, trace.rows[0].growthFactor); assert.equal(trace.factorB, trace.rows[1].growthFactor);
    near(trace.gapBefore, Math.abs(trace.inputA - trace.inputB));
    near(trace.gapAfter, Math.abs(trace.nextA - trace.nextB));
  }
});

test('fractional playheads interpolate adjacent integer values without rounding or a fractional recurrence', () => {
  for (const generation of [.000001, .25, .99, 1.25, 12.731, 35.999999]) {
    const result = Discovery.evaluate('chaos-theory', { generation }), trace = Trace.snapshot({}, result);
    assert.equal(trace.n, Math.floor(generation));
    assert.equal(trace.progress, generation - Math.floor(generation));
    near(trace.rows[0].position, result.populationA);
    near(trace.rows[1].position, result.populationB);
    near(trace.gapNow, result.output);
    assert.equal(trace.nextTarget, Math.floor(generation) + 1);
    assert.equal(trace.atEnd, false);
  }
});

test('completed integer cursors retain the recurrence that just produced the visible result', () => {
  for (const generation of [1, 2, 12, 35, 36]) {
    const completed = read({ generation });
    assert.equal(completed.n, generation - 1);
    assert.equal(completed.nextGeneration, generation);
    assert.equal(completed.progress, 1);
    assert.equal(completed.nextTarget, Math.min(generation + 1, 36));
  }
  const result = Discovery.evaluate('chaos-theory', { generation: 36 }), trace = Trace.snapshot(undefined, result);
  assert.equal(trace.n, 35);
  assert.equal(trace.nextGeneration, 36);
  assert.equal(trace.progress, 1);
  assert.equal(trace.nextTarget, 36);
  assert.equal(trace.atEnd, true);
  near(trace.rows[0].position, result.orbitA[36]);
  near(trace.rows[1].position, result.orbitB[36]);
  near(trace.gapNow, trace.gapAfter);
  const initial = read({ generation: 0 });
  assert.equal(initial.n, 0); assert.equal(initial.progress, 0); assert.equal(initial.nextTarget, 1);
  near(initial.gapNow, .0001);
});

test('a side crossing reports the actual interpolated zero gap rather than interpolating endpoint magnitudes', () => {
  // The two starts lie on opposite sides of the logistic map's maximum at .5.
  const trace = read({ rate: 4, seed: .4999, delta: .0002, generation: .5 });
  // This symmetric pair meets at the next iterate; it does not cross past it.
  assert.equal(trace.crosses, false);
  assert.equal(trace.crossingProgress, null);
  const crossing = read({ rate: 3.8, generation: 1.5 });
  assert.equal(crossing.crosses, true);
  assert.ok(crossing.crossingProgress > 0 && crossing.crossingProgress < 1);
  const atCrossing = read({ rate: 3.8, generation: crossing.n + crossing.crossingProgress });
  near(atCrossing.gapNow, 0);
  assert.ok(atCrossing.gapNow < (atCrossing.gapBefore + atCrossing.gapAfter) / 2);
});

test('invalid, stale, unbounded or inconsistent inputs return an unavailable snapshot without throwing', () => {
  const result = Discovery.evaluate('chaos-theory', {});
  const cases = [
    [undefined, undefined], [null, result], [[], result], [2, result],
    [{ generation: 37 }, result], [{ rate: 2.6 }, result], [{ unknown: 1 }, result],
    [{}, { ...result, valid: false }], [{}, { ...result, status: 'invalid_parameters' }],
    [{}, { ...result, parameters: null }], [{}, { ...result, parameters: { ...result.parameters, generation: Infinity } }],
    [{}, { ...result, parameters: { ...result.parameters, seed: -.1 } }], [{}, { ...result, parameters: { ...result.parameters, delta: 0 } }],
    [{}, { ...result, parameters: { ...result.parameters, unknown: 1 } }],
    [{}, { ...result, orbitA: [] }], [{}, { ...result, orbitB: new Array(37) }],
    [{}, { ...result, orbitA: result.orbitA.map((x, i) => i === 2 ? NaN : x) }],
    [{}, { ...result, orbitB: result.orbitB.map((x, i) => i === 15 ? .2 : x) }],
    [{}, { ...result, orbitA: [...result.orbitA, .5] }]
  ];
  for (const [parameters, evaluated] of cases) {
    const trace = Trace.snapshot(parameters, evaluated);
    assert.equal(trace.valid, false);
    assert.ok(trace.reason.length > 0);
    assert.equal(Object.isFrozen(trace), true);
  }
  assert.equal(read({ seed: .99, delta: .01, rate: 4, generation: 36 }).valid, true);
});

test('snapshots keep full precision, own their frozen rows and do not mutate parameters or evaluated orbits', () => {
  const result = Discovery.evaluate('chaos-theory', { generation: 12.731 }), before = structuredClone(result);
  Object.freeze(result.parameters); Object.freeze(result.orbitA); Object.freeze(result.orbitB); Object.freeze(result);
  const trace = Trace.snapshot(result.parameters, result);
  assert.deepEqual(result, before);
  assert.ok(Object.isFrozen(trace) && Object.isFrozen(trace.rows) && trace.rows.every(Object.isFrozen));
  assert.equal(trace.inputA, result.orbitA[12]);
  assert.notEqual(trace.inputA, Number(trace.inputA.toFixed(6)));
  assert.throws(() => { trace.rows[0].input = .5; }, TypeError);
  assert.equal(Trace.snapshot(result.parameters, result).inputA, trace.inputA);
});

test('story substitutions and highlighted scene segments use the same completed or interpolated update', () => {
  const Scenes = require('../src/story-scenes.js');
  for (const generation of [0, .25, 1, 1.25, 12, 35.5, 36]) {
    const result = Discovery.evaluate('chaos-theory', { generation }), parameters = result.parameters, step = Trace.snapshot(parameters, result);
    const values = Scenes.values('chaos-theory', parameters), html = Discovery.render('chaos-theory', parameters, { chaosTrace: true });
    assert.equal(values.iteration, step.n);
    assert.equal(values.nextIteration, step.nextGeneration);
    assert.equal(values.iterationProgress, step.progress);
    near(values.stepGapBefore, step.gapBefore); near(values.stepGapAfter, step.gapAfter);
    for (const row of step.rows) {
      near(values['stepInput' + row.id], row.input);
      near(values['stepGrowth' + row.id], row.growthFactor);
      near(values['stepNext' + row.id], row.output);
      const tag = [...html.matchAll(/<line[^>]+>/g)].map(([line]) => line).find(line => line.includes(`data-role="chaos-step-${row.id.toLowerCase()}"`));
      assert.ok(tag, 'The expanded calculation has a corresponding highlighted segment.');
      const attributes = Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
      assert.equal(Number(attributes['data-from']), values.iteration);
      assert.equal(Number(attributes['data-to']), values.nextIteration);
      near(Number(attributes.x1), 75 + step.n / 36 * 465, 1e-5);
      near(Number(attributes.x2), 75 + step.nextGeneration / 36 * 465, 1e-5);
      near(Number(attributes.y1), 225 - row.input * 135, 1e-5);
      near(Number(attributes.y2), 225 - row.output * 135, 1e-5);
    }
  }
});
