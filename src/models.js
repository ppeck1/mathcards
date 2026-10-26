(function (root, factory) {
  'use strict';
  const everyday = typeof module === 'object' && module.exports ? require('./model-registry.js') : (root.AtlasModelRegistry||root.AtlasEveryday);
  const api = factory(everyday);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasModels = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Everyday) {
  'use strict';

  // No formula text is executed. These are the complete, allowlisted model families.
  const SPECS = {
    'function-composition': {
      a: { value: 1, min: -5, max: 5 }, b: { value: 0, min: -5, max: 5 },
      c: { value: 0, min: -5, max: 5 }, m: { value: 2, min: -5, max: 5 },
      n: { value: 1, min: -5, max: 5 }, x: { value: 3, min: -10, max: 10 },
      order: { value: 'f_after_g', values: ['f_after_g', 'g_after_f'] }
    },
    'real-logarithm': { base: { value: 2 }, argument: { value: 8 } },
    derivative: {
      preset: { value: 'cubic', values: ['cubic', 'linear', 'absolute'] },
      a: { value: 2, min: -3, max: 3 }, h: { value: 0.1, min: -1, max: 1 }
    }
  };

  function defaults(slug) {
    if (Everyday?.has(slug)) return Everyday.defaults(slug);
    if (!Object.hasOwn(SPECS, slug)) throw new RangeError('Unknown model: ' + slug);
    return Object.fromEntries(Object.entries(SPECS[slug]).map(([k, v]) => [k, v.value]));
  }

  /** Structural validation only. Domain failures are returned by evaluate, not clamped. */
  function validateParams(slug, input) {
    if (Everyday?.has(slug)) return Everyday.validateParams(slug, input);
    const errors = [], parameters = {};
    if (!Object.hasOwn(SPECS, slug)) return {
      valid: false, parameters, errors: [{ field: 'model', message: 'Unknown model.' }], warnings: []
    };
    if (input === undefined) input = {};
    if (!input || typeof input !== 'object' || Array.isArray(input)) return {
      valid: false, parameters, errors: [{ field: 'parameters', message: 'Parameters must be an object.' }], warnings: []
    };
    const spec = SPECS[slug];
    for (const field of Object.keys(input)) {
      if (!Object.hasOwn(spec, field)) errors.push({ field, message: 'Unknown parameter.' });
    }
    for (const [field, rule] of Object.entries(spec)) {
      const value = Object.hasOwn(input, field) ? input[field] : rule.value;
      if (rule.values) {
        if (!rule.values.includes(value)) errors.push({ field, message: 'Choose ' + rule.values.join(', ') + '.' });
        else parameters[field] = value;
      } else if (typeof value !== 'number' || !Number.isFinite(value)) {
        errors.push({ field, message: 'Enter a finite number.' });
      } else if ((rule.min !== undefined && value < rule.min) || (rule.max !== undefined && value > rule.max)) {
        errors.push({ field, message: 'Use a value from ' + rule.min + ' to ' + rule.max + '.' });
      } else parameters[field] = value;
    }
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }

  function quadratic(p, x) { return (p.a * x + p.b) * x + p.c; }
  function affine(p, x) { return p.m * x + p.n; }
  function derivativeFunction(preset, x) {
    if (preset === 'cubic') return x * x * x;
    if (preset === 'linear') return 3 * x + 1;
    return Math.abs(x);
  }
  function analyticAt(preset, a) {
    if (preset === 'cubic') return 3 * a * a;
    if (preset === 'linear') return 3;
    return a === 0 ? null : Math.sign(a);
  }

  function evaluate(slug, input) {
    if (Everyday?.has(slug)) return Everyday.evaluate(slug, input);
    const checked = validateParams(slug, input);
    const p = checked.parameters;
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    if (slug === 'function-composition') {
      const gx = affine(p, p.x), fx = quadratic(p, p.x);
      const both = {
        f_after_g: { intermediate: gx, output: quadratic(p, gx), first: 'g', second: 'f' },
        g_after_f: { intermediate: fx, output: affine(p, fx), first: 'f', second: 'g' }
      };
      return { ...checked, status: 'valid', ...both[p.order], both,
        difference: both.f_after_g.output - both.g_after_f.output,
        expressionId: p.order === 'f_after_g' ? 'ast:composition:apply-f-after-g' : 'ast:composition:apply-g-after-f' };
    }
    if (slug === 'real-logarithm') {
      if (p.base <= 0 || p.base === 1) return { ...checked, valid: false, status: 'invalid_base', output: null,
        message: 'A real logarithm requires base > 0 and base ≠ 1.' };
      if (p.argument <= 0) return { ...checked, valid: false, status: 'undefined_argument', output: null,
        message: 'A real logarithm requires a strictly positive argument.' };
      const output = Math.log(p.argument) / Math.log(p.base);
      if (!Number.isFinite(output)) return { ...checked, valid: false, status: 'numerical_failure', output: null,
        message: 'The result exceeds this floating-point model’s range.' };
      // Only stipulated exact identities are labeled exact. Near-integer floating results are not proofs.
      const trusted = { '2|8': '3', '10|1000': '3', '0.5|8': '−3' };
      const exactDisplay = p.argument === 1 ? '0' : p.argument === p.base ? '1' : trusted[p.base + '|' + p.argument] || null;
      const warnings = [];
      if (Math.abs(p.base - 1) < 0.000001) warnings.push('Base is close to 1: small changes in the base can cause large changes in the logarithm. The displayed result is floating-point.');
      const inverse = Math.pow(p.base, output);
      return { ...checked, status: 'valid', output, exactDisplay, inverse: Number.isFinite(inverse) ? inverse : null,
        displayStatus: exactDisplay === null ? 'approximate' : 'exact',
        direction: p.base > 1 ? 'increasing' : 'decreasing', warnings,
        ladder: [-2, -1, 0, 1, 2, 3, 4].map(exponent => {
          const argument = Math.pow(p.base, exponent);
          return { exponent, argument: Number.isFinite(argument) && argument > 0 ? argument : null };
        }) };
    }
    const analytic = analyticAt(p.preset, p.a);
    let output = null;
    if (p.h !== 0) {
      // Algebraically equivalent finite quotients avoid catastrophic cancellation at tiny h.
      if (p.preset === 'cubic') output = 3 * p.a * p.a + 3 * p.a * p.h + p.h * p.h;
      else if (p.preset === 'linear') output = 3;
      else if (p.a >= 0 && p.a + p.h >= 0) output = 1;
      else if (p.a <= 0 && p.a + p.h <= 0) output = -1;
      else output = (Math.abs(p.a + p.h) - Math.abs(p.a)) / p.h;
    }
    const corner = p.preset === 'absolute' && p.a === 0;
    return { ...checked, valid: p.h !== 0, status: p.h === 0 ? 'undefined_step' : 'valid', output,
      secantStatus: p.h === 0 ? 'undefined' : 'valid', analytic,
      analyticStatus: analytic === null ? 'undefined' : 'valid',
      oneSided: corner ? { left: -1, right: 1 } : { left: analytic, right: analytic },
      fa: derivativeFunction(p.preset, p.a), fah: derivativeFunction(p.preset, p.a + p.h),
      warnings: p.h !== 0 && Math.abs(p.h) < 1e-8 ? ['The finite quotient remains distinct from the analytic derivative, even when rounded values agree.'] : [],
      message: p.h === 0 ? 'The secant quotient divides by zero. The analytic derivative is evaluated separately.' :
        corner ? 'The left and right slopes disagree at this corner, so the derivative does not exist.' : null };
  }

  /** Value for a finite plot sample. null means no real point; never join across nulls. */
  function curveValue(slug, input, x) {
    if (Everyday?.has(slug)) return Everyday.curveValue(slug, input, x);
    if (typeof x !== 'number' || !Number.isFinite(x)) return null;
    const c = validateParams(slug, input);
    if (!c.valid) return null;
    const p = c.parameters;
    let y;
    if (slug === 'function-composition') y = p.order === 'f_after_g' ? quadratic(p, affine(p, x)) : affine(p, quadratic(p, x));
    else if (slug === 'real-logarithm') {
      if (p.base <= 0 || p.base === 1 || x <= 0) return null;
      y = Math.log(x) / Math.log(p.base);
    } else y = derivativeFunction(p.preset, x);
    return Number.isFinite(y) ? y : null;
  }

  return Object.freeze({ version: '1', defaults, validateParams, evaluate, curveValue });
});
