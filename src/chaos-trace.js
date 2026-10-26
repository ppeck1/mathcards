/* Read one actual logistic update. Formatting and animation belong to the caller. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasChaosTrace = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const MAX_GENERATION = 36;
  const FORMULA = Object.freeze({ expression: 'xₙ₊₁ = xₙ × [r(1 − xₙ)]', input: 'xₙ', remaining: '1 − xₙ', growthFactor: 'r(1 − xₙ)', output: 'xₙ₊₁' });
  const BOUNDS = Object.freeze({ generation: [0, MAX_GENERATION], rate: [2.5, 4], seed: [.01, .99], delta: [.000001, .01] });
  const finite = Number.isFinite;
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const close = (a, b) => Math.abs(a - b) <= 32 * Number.EPSILON * Math.max(1, Math.abs(a), Math.abs(b));
  const invalid = reason => Object.freeze({ valid: false, reason });

  function validOrbit(values, rate, seed) {
    if (!Array.isArray(values) || values.length !== MAX_GENERATION + 1 || !close(values[0], seed)) return false;
    for (let i = 0; i <= MAX_GENERATION; i++) {
      const value = values[i];
      if (!finite(value) || value < 0 || value > 1) return false;
      if (i < MAX_GENERATION && !close(rate * value * (1 - value), values[i + 1])) return false;
    }
    return true;
  }

  /**
   * Values come from the evaluated integer orbit, never from a rounded readout.
   * At a positive integer cursor, retain the just-completed update at progress 1.
   * signedBefore/After are B minus A; crosses means the interpolated paths swap sides.
   */
  function snapshot(parameters, result) {
    if (!object(result) || result.valid !== true || result.status !== 'valid') return invalid('A valid evaluated chaos result is required.');
    if (parameters !== undefined && !object(parameters)) return invalid('Parameters must be an object.');
    const p = result.parameters === undefined ? parameters : result.parameters;
    if (!object(p)) return invalid('Evaluated parameters are required.');
    for (const key of Object.keys(p)) if (!Object.hasOwn(BOUNDS, key)) return invalid('Unknown chaos parameter.');
    for (const [key, [minimum, maximum]] of Object.entries(BOUNDS)) {
      const value = p[key];
      if (!finite(value) || value < minimum || value > maximum) return invalid('Chaos parameters are outside the supported bounds.');
    }
    if (parameters !== undefined) {
      for (const key of Object.keys(parameters)) {
        if (!Object.hasOwn(BOUNDS, key)) return invalid('Unknown chaos parameter.');
        if (parameters[key] !== p[key]) return invalid('Parameters and evaluated result do not match.');
      }
    }
    if (p.seed + p.delta > 1 || !validOrbit(result.orbitA, p.rate, p.seed) || !validOrbit(result.orbitB, p.rate, p.seed + p.delta)) return invalid('Both bounded integer orbits must match the shared logistic rule.');
    const generation = p.generation, n = Math.max(0, Math.min(Math.ceil(generation) - 1, MAX_GENERATION - 1)), nextGeneration = n + 1, progress = generation - n;
    const rows = Object.freeze([['A', result.orbitA], ['B', result.orbitB]].map(([id, values]) => {
      const input = values[n], output = values[nextGeneration], remaining = 1 - input, growthFactor = p.rate * remaining;
      return Object.freeze({ id, input, remaining, growthFactor, output, position: input + (output - input) * progress });
    }));
    const [a, b] = rows, signedBefore = b.input - a.input, signedAfter = b.output - a.output, crosses = signedBefore * signedAfter < 0;
    return Object.freeze({
      valid: true, generation, n, nextGeneration, progress, atEnd: generation === MAX_GENERATION,
      nextTarget: Math.min(Math.floor(generation) + 1, MAX_GENERATION), rate: p.rate, rows,
      inputA: a.input, inputB: b.input, nextA: a.output, nextB: b.output, factorA: a.growthFactor, factorB: b.growthFactor,
      gapBefore: Math.abs(signedBefore), gapAfter: Math.abs(signedAfter), gapNow: Math.abs(b.position - a.position),
      signedBefore, signedAfter, crosses, crossingProgress: crosses ? signedBefore / (signedBefore - signedAfter) : null
    });
  }
  return Object.freeze({ MAX_GENERATION, FORMULA, snapshot });
});
