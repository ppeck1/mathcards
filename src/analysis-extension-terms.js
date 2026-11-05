/* Original analysis teaching data; no clocks, DOM or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAnalysisExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'analysis-inverse-calibration',
        title: 'Inverse functions and calibration',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value. The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.',
        example: 'f⁻¹(5) = (5 − 1)/2 = 2',
        readAs: 'Inverse functions and calibration',
        aliases: ['inverse function'],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: []
      },
      {
        id: 'inverse-function-notation-1',
        title: 'Recovered command',
        category: 'card-notation',
        symbols: ['x'],
        tokens: ['x'],
        definition:
          'Recovered command in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Recovered command',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-2',
        title: 'Observed position',
        category: 'card-notation',
        symbols: ['y'],
        tokens: ['y'],
        definition:
          'Observed position in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Observed position',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-3',
        title: 'Nonzero calibration gain',
        category: 'card-notation',
        symbols: ['a'],
        tokens: ['a'],
        definition:
          'Nonzero calibration gain in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Nonzero calibration gain',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-4',
        title: 'Zero offset',
        category: 'card-notation',
        symbols: ['b'],
        tokens: ['b'],
        definition:
          'Zero offset in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Zero offset',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-5',
        title: 'Forward affine function',
        category: 'card-notation',
        symbols: ['f'],
        tokens: ['f'],
        definition:
          'Forward affine function in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Forward affine function',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-6',
        title: 'Inverse function, not reciprocal',
        category: 'card-notation',
        symbols: ['f⁻¹'],
        tokens: ['f⁻¹'],
        definition:
          'Inverse function, not reciprocal in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Inverse function, not reciprocal',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-7',
        title: 'Recovered command',
        category: 'card-notation',
        symbols: ['f⁻¹(y)'],
        tokens: ['f⁻¹(y)'],
        definition:
          'Recovered command in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Recovered command',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-8',
        title: 'Forward position',
        category: 'card-notation',
        symbols: ['f(x)'],
        tokens: ['f(x)'],
        definition:
          'Forward position in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Forward position',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-notation-9',
        title: 'Offset-corrected position',
        category: 'card-notation',
        symbols: ['y − b'],
        tokens: ['y − b'],
        definition:
          'Offset-corrected position in this bounded lesson. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        example: 'y = ax+b; x = f⁻¹(y)',
        readAs: 'Offset-corrected position',
        aliases: [],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'geometric-series',
        title: 'Geometric series and partial sums',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one. The first correction a lies in [0.25,4] cm, ratio r in [−1.5,1.5], and n is a whole number from 1 through 12. Every finite sum is defined, including r=1. Because a is nonzero, the infinite series has a finite sum only for |r|<1. Integer commands do not interpolate into fractional terms. Numeric sums use a compensated recurrence; nonzero term underflow is reported explicitly.',
        example: '2 + 1 + 0.5 + 0.25 = 3.75',
        readAs: 'Geometric series and partial sums',
        aliases: ['geometric series'],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: []
      },
      {
        id: 'geometric-series-notation-11',
        title: 'Positive first correction',
        category: 'card-notation',
        symbols: ['a'],
        tokens: ['a'],
        definition:
          'Positive first correction in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Positive first correction',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-12',
        title: 'Common ratio',
        category: 'card-notation',
        symbols: ['r'],
        tokens: ['r'],
        definition:
          'Common ratio in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Common ratio',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-13',
        title: 'Whole number of terms',
        category: 'card-notation',
        symbols: ['n'],
        tokens: ['n'],
        definition:
          'Whole number of terms in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Whole number of terms',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-14',
        title: 'Bound summation index, from zero through n minus one',
        category: 'card-notation',
        symbols: ['k'],
        tokens: ['k'],
        definition:
          'Bound summation index, from zero through n minus one in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Bound summation index, from zero through n minus one',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-15',
        title: 'Individual signed term',
        category: 'card-notation',
        symbols: ['arᵏ'],
        tokens: ['arᵏ'],
        definition:
          'Individual signed term in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Individual signed term',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-16',
        title: 'Finite partial sum',
        category: 'card-notation',
        symbols: ['Sₙ'],
        tokens: ['Sₙ'],
        definition:
          'Finite partial sum in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Finite partial sum',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-18',
        title: 'Unbounded summation limit, not a finite term count',
        category: 'card-notation',
        symbols: ['∞'],
        tokens: ['∞'],
        definition:
          'Unbounded summation limit, not a finite term count in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Unbounded summation limit, not a finite term count',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-19',
        title: 'Infinite-series sum when it exists',
        category: 'card-notation',
        symbols: ['S∞'],
        tokens: ['S∞'],
        definition:
          'Infinite-series sum when it exists in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Infinite-series sum when it exists',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-series-notation-20',
        title: 'Magnitude of the common ratio',
        category: 'card-notation',
        symbols: ['|r|'],
        tokens: ['|r|'],
        definition:
          'Magnitude of the common ratio in this bounded lesson. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        example: 'Sₙ = ∑ arᵏ',
        readAs: 'Magnitude of the common ratio',
        aliases: [],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'one-to-one-function',
        title: 'One-to-one function',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'A function that assigns different outputs to different inputs. It has an inverse from its range back to its domain. A nonzero affine gain makes the declared real calibration one-to-one.',
        example: 'f⁻¹(5) = 2',
        readAs: 'One-to-one function',
        aliases: ['injective function', 'one to one'],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'inverse-function-domain-range',
        title: 'Domain and range of an inverse',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'An inverse accepts the outputs of the original function and returns its inputs. The original range becomes the inverse domain and the original domain becomes the inverse range.',
        example: 'f⁻¹(5) = 2',
        readAs: 'Domain and range of an inverse',
        aliases: ['inverse domain', 'inverse range'],
        grammarCards: ['inverse-function'],
        formulaCards: ['inverse-function'],
        sourceKeys: ['analysis_ext_inverse'],
        relatedIds: ['inverse-function']
      },
      {
        id: 'geometric-common-ratio',
        title: 'Common ratio',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'The fixed multiplier from one geometric term to its successor. A negative ratio reverses successive term signs. In this lesson the positive first term is nonzero.',
        example: '2 + 1 + 0.5 + … → 4',
        readAs: 'Common ratio',
        aliases: ['common ratio'],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-partial-sum',
        title: 'Partial sum',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'The sum of a whole finite initial segment of a series. Sₙ adds exactly n terms; convergence of all such sums is a separate question.',
        example: '2 + 1 + 0.5 + … → 4',
        readAs: 'Partial sum',
        aliases: ['partial sum'],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'geometric-infinite-sum',
        title: 'Convergent geometric series',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'For a nonzero first term a, the infinite geometric series has sum a/(1−r) exactly when |r|<1. An undefined infinite sum does not invalidate a finite partial sum.',
        example: '2 + 1 + 0.5 + … → 4',
        readAs: 'Convergent geometric series',
        aliases: ['infinite geometric series', 'geometric convergence'],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      },
      {
        id: 'analysis-command-count',
        title: 'Command count',
        category: 'units',
        symbols: ['commands'],
        tokens: ['commands'],
        mathSymbols: ['commands'],
        notationKinds: ['unit'],
        definition:
          'Here commands counts ordered signed corrections. It is a whole-number count, rather than a length or a duration.',
        example: 'n = 6 commands adds six correction terms',
        readAs: 'commands',
        aliases: ['command count', 'whole commands'],
        grammarCards: ['geometric-series'],
        formulaCards: ['geometric-series'],
        sourceKeys: ['analysis_ext_series'],
        relatedIds: ['geometric-series']
      }
    ],
    sources: {
      analysis_ext_inverse: {
        title: 'OpenStax · Inverse Functions',
        url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-7-inverse-functions'
      },
      analysis_ext_series: {
        title: 'OpenStax · Series and Their Notations',
        url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/13-4-series-and-their-notations'
      }
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(data);
  return data;
});
