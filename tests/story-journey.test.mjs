import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require = createRequire(import.meta.url);
const Journey = require('../src/story-journey.js');
const Stories = require('../src/life-stories.js');

test('the progression helper loads offline without DOM, model or clock dependencies', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/story-journey.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasStoryJourney.itinerary, 'function');
  assert.ok(Object.isFrozen(Journey));
  assert.equal(Journey.bounds, Journey.resolveStep);
});

test('all six authored stories establish a reference and finish at the exact final answer', () => {
  const stories = Stories.all();
  assert.equal(stories.length, 6);
  for (const story of stories) {
    assert.deepEqual(Journey.itinerary(story, 0), {fromProgress: 0, toProgress: 0}, story.slug);
    story.steps.forEach((step, index) => {
      assert.deepEqual(Journey.resolveStep(story, index), {
        index, from: step.from, to: step.to, targetProgress: index === 0 ? 0 : step.to
      }, story.slug);
      assert.ok(Object.isFrozen(Journey.resolveStep(story, index)));
      assert.ok(Object.isFrozen(Journey.itinerary(story, index)));
      if (index > 0) assert.equal(Journey.itinerary(story, index).fromProgress, Journey.itinerary(story, index - 1).toProgress, story.slug + ' has no gaps between step animations');
      assert.equal(Journey.stepAt(story, (step.from + step.to) / 2), index, story.slug);
      assert.equal(Journey.nextIndex(story, index, 1), Math.min(index + 1, story.steps.length - 1));
      assert.equal(Journey.nextIndex(story, index, -1), Math.max(index - 1, 0));
    });
    assert.equal(Journey.itinerary(story, story.steps.length - 1).toProgress, 1, story.slug);
    assert.equal(Journey.stepAt(story, 1), story.steps.length - 1, story.slug);
  }
});

test('unequal authored ranges and exact shared boundaries stay intact', () => {
  const story = {steps: [{from: 0, to: 0.1}, {from: 0.1, to: 0.65}, {from: 0.65, to: 1}]};
  assert.equal(Journey.stepAt(story, 0.0999), 0);
  assert.equal(Journey.stepAt(story, 0.1), 1);
  assert.equal(Journey.stepAt(story, 0.6499), 1);
  assert.equal(Journey.stepAt(story, 0.65), 2);
  assert.deepEqual(Journey.itinerary(story, 1), {fromProgress: 0, toProgress: 0.65});
  assert.deepEqual(Journey.itinerary(story, 2), {fromProgress: 0.65, toProgress: 1});
});

test('navigation clamps numeric boundaries without wrapping or advancing an explicit selection', () => {
  const story = Stories.all()[0], last = story.steps.length - 1;
  for (const value of [-10, -Infinity, NaN, undefined]) {
    assert.equal(Journey.resolveStep(story, value).index, 0);
    assert.equal(Journey.stepAt(story, value), 0);
  }
  for (const value of [10, Infinity]) {
    assert.equal(Journey.resolveStep(story, value).index, last);
    assert.equal(Journey.stepAt(story, value), last);
  }
  assert.equal(Journey.nextIndex(story, 0, -1), 0);
  assert.equal(Journey.nextIndex(story, last, 1), last);
  assert.equal(Journey.nextIndex(story, 1, 0), 1);
  assert.equal(Journey.nextIndex(story, 1, NaN), 1);
  assert.equal(Journey.resolveStep(story, 1.8).index, 1);
});

test('resolving a step never modifies saved inputs, authored ranges or narrative selection', () => {
  const story = structuredClone(Stories.all()[0]), before = structuredClone(story);
  for (let index = 0; index < story.steps.length; index++) {
    Journey.resolveStep(story, index);
    Journey.itinerary(story, index);
    Journey.stepAt(story, index / (story.steps.length - 1));
    Journey.nextIndex(story, index);
  }
  assert.deepEqual(story, before);
  const selected = Journey.resolveStep(story, 1);
  Journey.stepAt(story, 1);
  assert.equal(selected.index, 1, 'Moving the playhead does not change the selected reading step');
});

test('missing stories expose no navigable step', () => {
  for (const story of [null, {}, {steps: []}]) {
    assert.equal(Journey.resolveStep(story, 0), null);
    assert.equal(Journey.itinerary(story, 0), null);
    assert.equal(Journey.stepAt(story, 0), -1);
    assert.equal(Journey.nextIndex(story, 0), -1);
  }
});
