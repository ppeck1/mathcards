(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasStoryJourney = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Reading position is an explicit step. It need not follow the numeric playhead.
  const stepsOf = story => Array.isArray(story && story.steps) ? story.steps : [];
  const clamp = (value, low, high) => Math.max(low, Math.min(high, Number.isNaN(value) ? low : value));
  const progress = value => clamp(typeof value === 'number' ? value : 0, 0, 1);

  function nextIndex(story, index, delta = 1) {
    const steps = stepsOf(story);
    if (!steps.length) return -1;
    const current = Math.trunc(clamp(typeof index === 'number' ? index : 0, 0, steps.length - 1));
    const shift = Number.isFinite(delta) ? Math.trunc(delta) : 0;
    return clamp(current + shift, 0, steps.length - 1);
  }

  function resolveStep(story, index) {
    const steps = stepsOf(story), selected = nextIndex(story, index, 0);
    if (selected < 0) return null;
    const step = steps[selected];
    const from = progress(step.from), to = Math.max(from, progress(step.to));
    // The opening step establishes the unchanged reference before any movement.
    return Object.freeze({index: selected, from, to, targetProgress: selected === 0 ? 0 : to});
  }

  function stepAt(story, value) {
    const steps = stepsOf(story);
    if (!steps.length) return -1;
    const at = progress(value);
    // A shared boundary belongs to the next step; the final endpoint stays final.
    for (let index = 0; index < steps.length - 1; index++) {
      if (at < progress(steps[index].to)) return index;
    }
    return steps.length - 1;
  }

  function itinerary(story, index) {
    const step = resolveStep(story, index);
    if (!step) return null;
    const previous = step.index === 0 ? null : resolveStep(story, step.index - 1);
    return Object.freeze({fromProgress: previous ? previous.targetProgress : 0, toProgress: step.targetProgress});
  }

  return Object.freeze({resolveStep, bounds: resolveStep, stepAt, nextIndex, itinerary});
});
