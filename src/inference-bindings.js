/* Authored inference-family data; independent of host state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInferenceBindings = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  return freeze({
    'sampling-distribution': {
      n: ['sampleSize'],
      'SE(X̄)': ['output']
    },
    'confidence-interval': {
      p: ['trueChance'],
      k: ['observed'],
      'L(k)': ['low'],
      'U(k)': ['high']
    },
    'hypothesis-test': {
      k: ['observed'],
      'p-value': ['output']
    },
    'linear-regression': {
      h: ['lastValue'],
      a: ['intercept'],
      b: ['slope']
    },
    correlation: {
      t: ['trend'],
      s: ['scatter'],
      r: ['output']
    },
    'factorial-interaction': {
      c: ['combined'],
      Δ: ['output']
    },
    'chi-square-association': {
      d: ['diagonal'],
      'χ²': ['output']
    },
    'relative-entropy': {
      p: ['actual'],
      q: ['forecast'],
      'D(P∥Q)': ['output']
    },
    'binomial-distribution': {
      p: ['chance'],
      k: ['count']
    },
    'poisson-distribution': {
      λ: ['rate'],
      k: ['count']
    }
  });
});
