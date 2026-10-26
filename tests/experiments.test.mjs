import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const experiments = require('../src/experiments.js');
const slugs = ['function-composition', 'real-logarithm', 'derivative'];
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) < 1e-10, `${actual} ≈ ${expected}`);

test('guided experiments load as an independent offline classic script', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/experiments.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasExperiments.forSlug('function-composition').length, 3);
  assert.equal(context.AtlasExperiments.find('derivative', 'corner-disagreement').sweep, null);
  assert.equal(context.AtlasExperiments.outcome('real-logarithm', 'doubling-step', 'add-one').correct, true);
});

test('each card has three complete, valid, immutable exploration stories', () => {
  const allIds = new Set();
  for (const slug of slugs) {
    const stories = experiments.forSlug(slug);
    assert.equal(stories.length, 3);
    assert.ok(Object.isFrozen(stories));
    for (const story of stories) {
      assert.ok(!allIds.has(story.id), 'Story IDs are globally unique');
      allIds.add(story.id);
      for (const field of ['title', 'kicker', 'question', 'explanation', 'insight']) {
        assert.equal(typeof story[field], 'string');
        assert.ok(story[field].length > 10, field);
        assert.doesNotMatch(story[field], /<[^>]+>/, 'Authored copy is plain text');
      }
      assert.ok(['geometry', 'graph', 'spatial'].includes(story.view));
      assert.equal(story.prediction.length, 3);
      assert.equal(new Set(story.prediction.map(choice => choice.id)).size, 3);
      assert.equal(story.prediction.filter(choice => choice.id === story.answerId).length, 1);
      for (const state of [story.start, story.finish]) {
        assert.deepEqual(Object.keys(state).sort(), Object.keys(models.defaults(slug)).sort(), 'Endpoints specify every parameter');
        const result = models.evaluate(slug, state);
        assert.equal(result.valid, true, `${slug}/${story.id} endpoint`);
        assert.ok(Number.isFinite(result.output));
        assert.ok(Object.isFrozen(state));
      }
      assert.ok(Object.isFrozen(story));
      assert.ok(Object.isFrozen(story.prediction));
      story.prediction.forEach(choice => assert.ok(Object.isFrozen(choice)));
    }
  }
});

test('every animated story has valid intermediate states and changes only its sweep parameter', () => {
  for (const slug of slugs) {
    for (const story of experiments.forSlug(slug)) {
      if (!story.sweep) continue;
      const { key, from, to, durationMs } = story.sweep;
      assert.equal(story.start[key], from);
      assert.equal(story.finish[key], to);
      assert.ok(Number.isFinite(from) && Number.isFinite(to) && from !== to);
      assert.ok(durationMs > 0 && durationMs <= 10000);
      const { [key]: startValue, ...startRest } = story.start;
      const { [key]: finishValue, ...finishRest } = story.finish;
      assert.deepEqual(startRest, finishRest);
      for (let step = 0; step <= 100; step++) {
        const parameters = { ...story.start, [key]: from + (to - from) * step / 100 };
        const result = models.evaluate(slug, parameters);
        assert.equal(result.valid, true, `${slug}/${story.id} frame ${step}`);
        assert.ok(Number.isFinite(result.output));
      }
    }
  }
});

test('composition stories expose nonlinear amplification, order, and a hidden sign reversal', () => {
  const slug = 'function-composition';
  const endpoints = id => {
    const story = experiments.find(slug, id);
    return [models.evaluate(slug, story.start), models.evaluate(slug, story.finish)];
  };
  const [amplifyStart, amplifyEnd] = endpoints('square-amplifier');
  assert.deepEqual([amplifyStart.intermediate, amplifyEnd.intermediate], [3, 7]);
  assert.deepEqual([amplifyStart.output, amplifyEnd.output], [9, 49]);
  assert.ok(amplifyEnd.output > 3 * amplifyStart.output);
  assert.deepEqual(endpoints('reverse-machines').map(result => result.output), [49, 19]);
  assert.equal(experiments.find(slug, 'reverse-machines').sweep, null);
  const [mirrorStart, mirrorEnd] = endpoints('sign-mirror');
  assert.deepEqual([mirrorStart.intermediate, mirrorEnd.intermediate], [-3, 3]);
  assert.deepEqual([mirrorStart.output, mirrorEnd.output], [9, 9]);
  assert.equal(models.evaluate(slug, { ...experiments.find(slug, 'sign-mirror').start, x: -0.5 }).output, 0);
});

test('logarithm stories preserve multiplication steps, reversed direction, and fractional powers', () => {
  const slug = 'real-logarithm';
  for (const [id, expected] of [
    ['doubling-step', [3, 4]],
    ['backward-base', [-3, -4]],
    ['half-exponent', [0, 0.5]]
  ]) {
    const story = experiments.find(slug, id);
    const start = models.evaluate(slug, story.start);
    const finish = models.evaluate(slug, story.finish);
    near(start.output, expected[0]);
    near(finish.output, expected[1]);
    near(start.inverse, story.start.argument);
    near(finish.inverse, story.finish.argument);
  }
});

test('derivative stories distinguish convergence, changing location, and one-sided disagreement', () => {
  const slug = 'derivative';
  const flatten = experiments.find(slug, 'flatten-at-origin');
  const flattenStart = models.evaluate(slug, flatten.start);
  const flattenEnd = models.evaluate(slug, flatten.finish);
  near(flattenStart.output, 1);
  near(flattenEnd.output, 0.0001);
  assert.equal(flattenStart.analytic, 0);
  assert.equal(flattenEnd.analytic, 0);
  assert.ok(flattenEnd.parameters.h > 0, 'A convergence run does not define a secant at zero');

  const climb = experiments.find(slug, 'climb-cubic');
  const climbStart = models.evaluate(slug, climb.start);
  const climbEnd = models.evaluate(slug, climb.finish);
  near(climbStart.output, 3.31);
  near(climbEnd.output, 12.61);
  assert.deepEqual([climbStart.analytic, climbEnd.analytic], [3, 12]);

  const corner = experiments.find(slug, 'corner-disagreement');
  const left = models.evaluate(slug, corner.start);
  const right = models.evaluate(slug, corner.finish);
  assert.deepEqual([left.output, right.output], [-1, 1]);
  assert.equal(left.analytic, null);
  assert.equal(right.analytic, null);
  assert.deepEqual(left.oneSided, { left: -1, right: 1 });
  assert.equal(corner.sweep, null, 'Changing sides is a discrete comparison; h = 0 is undefined');
});

test('prediction outcomes are deterministic, validated, and do not alter the authored stories', () => {
  for (const slug of slugs) {
    for (const story of experiments.forSlug(slug)) {
      const before = JSON.stringify(story);
      for (const choice of story.prediction) {
        const outcome = experiments.outcome(slug, story.id, choice.id);
        assert.equal(outcome.correct, choice.id === story.answerId);
        assert.equal(outcome.explanation, story.explanation);
        assert.equal(outcome.insight, story.insight);
        assert.deepEqual(outcome, experiments.outcome(slug, story.id, choice.id));
      }
      assert.equal(JSON.stringify(story), before);
      assert.throws(() => { story.start.x = 500; }, TypeError);
      assert.throws(() => { story.prediction[0].label = 'changed'; }, TypeError);
    }
  }
  assert.deepEqual(experiments.forSlug('unknown'), []);
  assert.deepEqual(experiments.forSlug('__proto__'), []);
  assert.equal(experiments.find('derivative', 'unknown'), null);
  assert.equal(experiments.outcome('derivative', 'corner-disagreement', 'unknown'), null);
  assert.equal(experiments.outcome('unknown', 'unknown', 'unknown'), null);
});
