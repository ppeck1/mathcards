(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasExperiments = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Curated stories, independent of playback, rendering, and the DOM. Each
  // endpoint is complete so a story is reproducible from any workbench state.
  function composition(overrides) {
    return { a: 1, b: 0, c: 0, m: 2, n: 1, x: 3, order: 'f_after_g', ...overrides };
  }
  function logarithm(overrides) { return { base: 2, argument: 8, ...overrides }; }
  function derivative(overrides) { return { preset: 'cubic', a: 2, h: 0.1, ...overrides }; }

  const STORIES = {
    'function-composition': [
      {
        id: 'square-amplifier',
        title: 'Watch a square amplify',
        kicker: 'Small input. Bigger consequence.',
        question: 'Move x from 1 to 3 through g(x) = 2x + 1, then square the result. How does the final area change?',
        prediction: [
          { id: 'more-than-triple', label: 'More than triples' },
          { id: 'triple', label: 'Exactly triples' },
          { id: 'less-than-triple', label: 'Less than triples' }
        ],
        answerId: 'more-than-triple',
        start: composition({ x: 1 }),
        finish: composition({ x: 3 }),
        sweep: { key: 'x', from: 1, to: 3, durationMs: 3600 },
        view: 'geometry',
        explanation: 'The intermediate value grows from 3 to 7. Squaring changes the output from 9 to 49: more than five times the original area, although x only triples. Watch the outer frame grow faster as x increases.',
        insight: 'A square measures area: doubling a side multiplies its area by four.'
      },
      {
        id: 'reverse-machines',
        title: 'Reverse the machines',
        kicker: 'Same ingredients. Different order.',
        question: 'Keep x = 3 and swap the order of squaring and g(x) = 2x + 1. Does the final area grow, shrink, or stay the same?',
        prediction: [
          { id: 'shrink', label: 'It shrinks' },
          { id: 'same', label: 'It stays the same' },
          { id: 'grow', label: 'It grows' }
        ],
        answerId: 'shrink',
        start: composition({ x: 3, order: 'f_after_g' }),
        finish: composition({ x: 3, order: 'g_after_f' }),
        // Operation order is categorical; do not interpolate it.
        sweep: null,
        view: 'geometry',
        explanation: 'Doing g first gives (2 × 3 + 1)² = 49. Squaring first gives 2 × 3² + 1 = 19. The output area shrinks from 49 to 19 because the +1 is no longer inside the square.',
        insight: 'Composition preserves the order of the machines. Reversing them can change both the path and the result.'
      },
      {
        id: 'sign-mirror',
        title: 'Two signs, one area',
        kicker: 'Shrink. Cross zero. Grow again.',
        question: 'Move x from −2 to 1 through g(x) = 2x + 1, then square. How will the final area compare with its starting area?',
        prediction: [
          { id: 'same-area', label: 'Same final area' },
          { id: 'larger-area', label: 'Larger final area' },
          { id: 'negative-area', label: 'A negative final value' }
        ],
        answerId: 'same-area',
        start: composition({ x: -2 }),
        finish: composition({ x: 1 }),
        sweep: { key: 'x', from: -2, to: 1, durationMs: 4800 },
        view: 'geometry',
        explanation: 'The intermediate value moves from −3 to +3, and both square to 9. On the way, the output shrinks to zero at x = −0.5 and then grows again. Equal endpoint areas can hide a dramatic journey.',
        insight: 'Squaring keeps magnitude but loses the sign. Follow the intermediate value to see what the final square hides.'
      }
    ],
    'real-logarithm': [
      {
        id: 'doubling-step',
        title: 'Double it. Add one.',
        kicker: 'Multiplication becomes distance.',
        question: 'Double the argument from 8 to 16 with base 2. What happens to the exponent?',
        prediction: [
          { id: 'add-one', label: 'Adds 1: 3 → 4' },
          { id: 'double', label: 'Doubles: 3 → 6' },
          { id: 'unchanged', label: 'Stays at 3' }
        ],
        answerId: 'add-one',
        start: logarithm({ argument: 8 }),
        finish: logarithm({ argument: 16 }),
        sweep: { key: 'argument', from: 8, to: 16, durationMs: 3600 },
        view: 'geometry',
        explanation: '2³ = 8 and 2⁴ = 16. Doubling the argument adds exactly one to its base-2 logarithm: 3 becomes 4. Multiplying by the base always moves one exponent step.',
        insight: 'On a logarithmic ruler, equal ratios produce equal distances. Equal additions to the argument do not.'
      },
      {
        id: 'backward-base',
        title: 'The ladder runs backward',
        kicker: 'A smaller base reverses direction.',
        question: 'Use base 0.5 and double the argument from 8 to 16. Which way does the exponent move?',
        prediction: [
          { id: 'minus-one', label: 'Down by 1: −3 → −4' },
          { id: 'plus-one', label: 'Up by 1: −3 → −2' },
          { id: 'positive', label: 'Becomes positive' }
        ],
        answerId: 'minus-one',
        start: logarithm({ base: 0.5, argument: 8 }),
        finish: logarithm({ base: 0.5, argument: 16 }),
        sweep: { key: 'argument', from: 8, to: 16, durationMs: 3600 },
        view: 'geometry',
        explanation: '0.5⁻³ = 8 and 0.5⁻⁴ = 16. The argument grows, but the exponent decreases from −3 to −4. With a base between 0 and 1, increasing the exponent makes the power smaller.',
        insight: 'The base controls the direction of the logarithm. A larger argument can require a smaller exponent.'
      },
      {
        id: 'half-exponent',
        title: 'Find the half step',
        kicker: 'The spaces between powers matter.',
        question: 'Move the argument from 1 to √2 with base 2. How far does the exponent travel?',
        prediction: [
          { id: 'half', label: 'Half an exponent step' },
          { id: 'one', label: 'One exponent step' },
          { id: 'two', label: 'Two exponent steps' }
        ],
        answerId: 'half',
        start: logarithm({ argument: 1 }),
        finish: logarithm({ argument: Math.SQRT2 }),
        sweep: { key: 'argument', from: 1, to: Math.SQRT2, durationMs: 3600 },
        view: 'geometry',
        explanation: '2⁰ = 1 and 2⁰·⁵ = √2. The logarithm moves from 0 to 0.5. Halfway in exponent space is the geometric mean √(1 × 2), rather than the arithmetic midpoint 1.5.',
        insight: 'Fractional exponents fill the ladder continuously. A half step means multiplying by √2.'
      }
    ],
    derivative: [
      {
        id: 'flatten-at-origin',
        title: 'Chase a vanishing slope',
        kicker: 'The triangle shrinks. Its direction settles.',
        question: 'For x³ at a = 0, shrink h from 1 to 0.01. Where does the secant slope head?',
        prediction: [
          { id: 'zero', label: 'Toward 0' },
          { id: 'one', label: 'It stays at 1' },
          { id: 'infinity', label: 'It keeps growing' }
        ],
        answerId: 'zero',
        start: derivative({ a: 0, h: 1 }),
        finish: derivative({ a: 0, h: 0.01 }),
        sweep: { key: 'h', from: 1, to: 0.01, durationMs: 4800 },
        view: 'graph',
        explanation: 'At the origin, the secant slope for x³ is h². Shrinking h from 1 to 0.01 changes the slope from 1 to 0.0001, approaching the tangent slope 0. Every step in this run keeps h nonzero, so the secant remains defined.',
        insight: 'A derivative is a limiting slope. The direction of a shrinking rise/run triangle can settle even as both sides vanish.'
      },
      {
        id: 'climb-cubic',
        title: 'Climb into the steep part',
        kicker: 'Same step. A changing landscape.',
        question: 'On x³, keep h = 0.1 and move a from 1 to 2. What happens to the tangent slope?',
        prediction: [
          { id: 'quadruple', label: 'It quadruples' },
          { id: 'double', label: 'It doubles' },
          { id: 'same', label: 'It stays the same' }
        ],
        answerId: 'quadruple',
        start: derivative({ a: 1, h: 0.1 }),
        finish: derivative({ a: 2, h: 0.1 }),
        sweep: { key: 'a', from: 1, to: 2, durationMs: 4200 },
        view: 'graph',
        explanation: 'The tangent slope is 3a²: it rises from 3 to 12, exactly four times as steep. With the same finite h = 0.1, the secant changes from 3.31 to 12.61. A finite secant and the tangent are related, but their values differ.',
        insight: 'Changing the location changes the local steepness. Holding the horizontal step fixed makes that change visible in the rise.'
      },
      {
        id: 'corner-disagreement',
        title: 'A corner refuses to agree',
        kicker: 'Approach from the other side.',
        question: 'For |x| at a = 0, switch from h = −0.1 to h = +0.1. Can the two sides share one tangent slope?',
        prediction: [
          { id: 'disagree', label: 'No: −1 and +1 disagree' },
          { id: 'zero', label: 'Yes: their average is 0' },
          { id: 'one', label: 'Yes: both slopes are +1' }
        ],
        answerId: 'disagree',
        start: derivative({ preset: 'absolute', a: 0, h: -0.1 }),
        finish: derivative({ preset: 'absolute', a: 0, h: 0.1 }),
        // Jump between the two valid sides. Interpolation would pass through
        // h = 0, where the secant quotient is undefined.
        sweep: null,
        view: 'graph',
        explanation: 'The left-hand secant slope is −1 and the right-hand slope is +1. These values persist however close each point comes to the corner. Their disagreement means |x| has no two-sided derivative at 0; averaging them does not create one.',
        insight: 'A sharp corner can have two clear one-sided slopes and still have no single derivative.'
      }
    ],
    'ratio-scale': [
      {
        id: 'dinner-batch',
        title: 'Make room for two more',
        kicker: 'Equal portions. A larger batch.',
        question: 'A recipe uses 300 g of flour for four equal portions. How much will six portions need?',
        prediction: [
          { id: '450-grams', label: '450 g: one and a half batches' },
          { id: '600-grams', label: '600 g: two batches' },
          { id: '300-grams', label: '300 g: the same batch' }
        ],
        answerId: '450-grams',
        start: { servings: 4, amount: 300, baseServings: 4 },
        finish: { servings: 6, amount: 300, baseServings: 4 },
        sweep: { key: 'servings', from: 4, to: 6, durationMs: 4200 },
        view: 'geometry',
        explanation: 'Six is 1.5 times four, so scale the flour by 1.5 too: 300 × (6/4) = 450 g. The amount per equal portion stays 75 g. Fractional inputs during the animation represent portion-equivalents, not fractions of people.',
        insight: 'Direct proportion preserves the amount per unit. Increasing portions by 50% increases this ingredient amount by 50% under the recipe assumptions.'
      }
    ],
    'linear-model': [
      {
        id: 'five-minute-fill',
        title: 'Keep the starting water',
        kicker: 'What is there, plus what arrives.',
        question: 'A tank starts with 20 L and gains 4 L each minute. With no outflow, how much is in it after five minutes?',
        prediction: [
          { id: '40-liters', label: '40 L in total' },
          { id: '20-liters', label: '20 L in total' },
          { id: '100-liters', label: '100 L in total' }
        ],
        answerId: '40-liters',
        start: { initial: 20, rate: 4, time: 0 },
        finish: { initial: 20, rate: 4, time: 5 },
        sweep: { key: 'time', from: 0, to: 5, durationMs: 4800 },
        view: 'geometry',
        explanation: 'The tap contributes 4 × 5 = 20 L. Add the 20 L already present to get 40 L. The animation assumes a constant rate, no loss and enough tank capacity; it separates initial water from added water.',
        insight: 'A constant rate preserves equal additions over equal time intervals. The starting amount is counted once, regardless of how long the tap runs.'
      }
    ],
    'exponential-change': [
      {
        id: 'three-photo-passes',
        title: 'Keep 80%, three times',
        kicker: 'The same percentage. A new current size.',
        question: 'A photo begins 1200 px wide. After three resizes, each keeping 80% of the current width, what is its ideal width before pixel rounding?',
        prediction: [
          { id: '614-point-4', label: '614.4 px' },
          { id: '480', label: '480 px' },
          { id: '960', label: '960 px' }
        ],
        answerId: '614-point-4',
        start: { initial: 1200, factor: 0.8, time: 0 },
        finish: { initial: 1200, factor: 0.8, time: 3 },
        sweep: { key: 'time', from: 0, to: 3, durationMs: 4800 },
        view: 'geometry',
        explanation: 'The ideal widths are 1200 → 960 → 768 → 614.4 px: 1200 × 0.8³. With final nearest-integer rounding, export at 614 px. Whole pass markers are completed resizes; the smooth fractional positions are geometric interpolation, not fractionally executed image operations.',
        insight: 'A constant multiplier preserves ratios. Later 20% reductions remove fewer pixels because the current image is smaller; ideal width, actual pixel rounding and image quality are different quantities.'
      }
    ]
  };

  function deepFreeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(deepFreeze);
      Object.freeze(value);
    }
    return value;
  }
  deepFreeze(STORIES);
  const EMPTY = Object.freeze([]);

  function forSlug(slug) {
    return Object.hasOwn(STORIES, slug) ? STORIES[slug] : EMPTY;
  }
  function find(slug, id) {
    return forSlug(slug).find(story => story.id === id) || null;
  }
  function outcome(slug, id, choiceId) {
    const story = find(slug, id);
    if (!story || !story.prediction.some(choice => choice.id === choiceId)) return null;
    return Object.freeze({
      correct: choiceId === story.answerId,
      explanation: story.explanation,
      insight: story.insight
    });
  }

  return Object.freeze({ version: '1', forSlug, find, outcome });
});
