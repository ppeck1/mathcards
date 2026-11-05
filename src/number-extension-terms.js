/* Original bounded number and geometry reference data; build-only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'number-signal-labels',
        title: 'Names of the two workshop signals',
        category: 'discrete',
        symbols: ['A', 'B'],
        tokens: ['A', 'B'],
        mathSymbols: ['A', 'B'],
        aliases: ['signal A', 'signal B', 'signal labels'],
        definition:
          'Capital A and B name the two repeating workshop signals. Lowercase a and b are their periods measured in minutes; the capital labels do not denote an area or a duration.',
        example: 'Signal A repeats every a=4 minutes; signal B repeats every b=6 minutes.',
        readAs: 'signal A; signal B',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        wordMatches: ['signal A', 'signal B'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'least-common-multiple',
        title: 'Least common multiple',
        category: 'discrete',
        symbols: [],
        tokens: [],
        aliases: ['least common multiple', 'least common multiple'],
        definition:
          'For positive integers a and b, the least common multiple L is the smallest positive integer divisible by both. If two signals begin together and repeat every a and b minutes, L is their first positive reunion time. Divide ab by their greatest common divisor d to avoid counting the shared factor twice.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Least common multiple',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['greatest-common-divisor', 'modular-arithmetic', 'prime-factorization']
      },
      {
        id: 'perfect-number',
        title: 'Perfect numbers and proper divisors',
        category: 'discrete',
        symbols: [],
        tokens: [],
        aliases: ['perfect numbers and proper divisors', 'perfect number'],
        definition:
          'A positive integer is perfect when the sum of its positive proper divisors equals the integer itself. List the divisors smaller than n, make one counted strip for each divisor, and compare their combined length s with the target n. The balance Δ=s−n distinguishes deficient, perfect and abundant numbers.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Perfect numbers and proper divisors',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['greatest-common-divisor', 'prime-factorization', 'set']
      },
      {
        id: 'lcm-first-period',
        title: 'First signal period',
        category: 'discrete',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        aliases: [],
        definition:
          'The exact time a between successive A signals. It is a positive whole-minute period, measured from the common starting instant.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'First signal period',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'lcm-second-period',
        title: 'Second signal period',
        category: 'discrete',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        aliases: [],
        definition:
          'The exact time b between successive B signals. It shares a time unit and start with the first signal.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Second signal period',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'lcm-common-divisor',
        title: 'Common factor of the periods',
        category: 'discrete',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['period greatest common divisor'],
        definition:
          'The largest positive integer dividing both whole-minute period values. Dividing their product by this common factor gives the first reunion time.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Common factor of the periods',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'lcm-reunion-time',
        title: 'First positive reunion time',
        category: 'discrete',
        symbols: ['L'],
        tokens: ['L'],
        mathSymbols: ['L'],
        aliases: ['reunion time', 'first positive reunion'],
        definition:
          'The smallest strictly positive time that is a whole number of both periods. The shared mark at zero is the start and is excluded from this minimum.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'First positive reunion time',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'lcm-first-cycle-count',
        title: 'Cycles of the first signal',
        category: 'discrete',
        symbols: ['c_A'],
        tokens: ['c_A', 'c_{A}'],
        mathSymbols: ['c_A', 'c_{A}'],
        aliases: ['first cycle count'],
        definition:
          'The whole number L/a of A periods completed by the first positive reunion. The count has no time unit.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Cycles of the first signal',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'lcm-second-cycle-count',
        title: 'Cycles of the second signal',
        category: 'discrete',
        symbols: ['c_B'],
        tokens: ['c_B', 'c_{B}'],
        mathSymbols: ['c_B', 'c_{B}'],
        aliases: ['second cycle count'],
        definition:
          'The whole number L/b of B periods completed by the first positive reunion. It can differ from the A cycle count.',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Cycles of the second signal',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'least-common-multiple-function',
        title: 'Least common multiple notation',
        category: 'discrete',
        symbols: ['lcm(a,b)'],
        tokens: ['lcm(a,b)', '\\operatorname{lcm}(a,b)'],
        mathSymbols: ['lcm(a,b)', '\\operatorname{lcm}(a,b)'],
        aliases: ['lcm', 'least common multiple function'],
        definition:
          'lcm(a,b) denotes the least positive common multiple of the positive integers a and b. For these two integers it equals ab/gcd(a,b).',
        example:
          'The first reunion is minute 12. A completes three cycles and B completes two; d=2 removes one duplicated common factor.',
        readAs: 'Least common multiple notation',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'perfect-target-number',
        title: 'Target positive integer',
        category: 'discrete',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        aliases: [],
        definition:
          'The positive whole tile count n whose proper divisors are listed. The selected finite family includes one, which has no positive proper divisors.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Target positive integer',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number']
      },
      {
        id: 'positive-proper-divisors',
        title: 'Positive proper-divisor set',
        category: 'discrete',
        symbols: ['D'],
        tokens: ['D'],
        mathSymbols: ['D'],
        aliases: ['proper divisors', 'proper divisor', 'proper-divisor set'],
        definition:
          'The set D contains every positive integer dividing n except n itself. Each divisor occurs once. For one, D is the empty set.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Positive proper-divisor set',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number', 'divisibility', 'set', 'empty-set']
      },
      {
        id: 'proper-divisor-sum',
        title: 'Proper-divisor sum',
        category: 'discrete',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['divisor sum', 'proper-divisor sum'],
        definition:
          'Add each positive proper divisor of n once to obtain s. The sum over an empty divisor set is zero. Equality with n defines a perfect number.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Proper-divisor sum',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number', 'summation', 'empty-sum']
      },
      {
        id: 'proper-divisor-balance',
        title: 'Divisor surplus or shortage',
        category: 'discrete',
        symbols: ['Δ'],
        tokens: ['\\Delta', 'Δ'],
        mathSymbols: ['\\Delta', 'Δ'],
        aliases: ['divisor balance', 'divisor surplus'],
        definition:
          'The signed count Δ=s−n compares the divisor-strip total with the target. Negative means deficient, zero perfect and positive abundant.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Divisor surplus or shortage',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number']
      },
      {
        id: 'proper-divisor-member',
        title: 'Bound proper divisor',
        category: 'discrete',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['bound divisor'],
        definition:
          'The bound symbol d ranges over positive proper divisors of the current n. It is an element of D, while D denotes the whole set. No d is present when D is empty.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Bound proper divisor',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['positive-proper-divisors', 'bound-variable', 'divisibility']
      },
      {
        id: 'deficient-number',
        title: 'Deficient number',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['deficient', 'deficient numbers'],
        definition:
          'A positive integer whose positive proper divisors sum to less than the integer. One is deficient because its empty proper-divisor sum is zero.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Deficient number',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number', 'proper-divisor-sum']
      },
      {
        id: 'abundant-number',
        title: 'Abundant number',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['abundant', 'abundant numbers'],
        definition:
          'A positive integer whose positive proper divisors sum to more than the integer. Twelve is abundant because its proper-divisor sum is sixteen.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Abundant number',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['perfect-number', 'proper-divisor-sum']
      },
      {
        id: 'empty-sum',
        title: 'Empty sum',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['empty sum', 'empty divisor sum'],
        definition:
          'A sum with no terms has additive identity zero. At n=1 the proper-divisor set is empty, so the displayed divisor sum is zero.',
        example: 'The proper divisors 1, 2 and 3 total six. The balance is zero, so 6 is perfect.',
        readAs: 'Empty sum',
        sourceKeys: ['number_extension_perfect'],
        grammarCards: ['perfect-number'],
        formulaCards: ['perfect-number'],
        relatedIds: ['summation', 'empty-set', 'addition']
      },
      {
        id: 'greatest-common-divisor-function',
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        relatedIds: ['least-common-multiple']
      },
      {
        id: 'divisibility',
        grammarCards: ['least-common-multiple', 'perfect-number'],
        formulaCards: ['least-common-multiple', 'perfect-number'],
        symbols: ['d∣n'],
        tokens: ['d∣n', 'd|n', 'd\\mid n'],
        mathSymbols: ['d∣n', 'd|n', 'd\\mid n'],
        relatedIds: ['perfect-number', 'least-common-multiple']
      },
      {
        id: 'number-count-unit',
        symbols: ['tile', 'tiles', 'side', 'sides', 'strip', 'strips', 'cycle', 'cycles'],
        grammarCards: ['least-common-multiple', 'perfect-number', 'regular-polygon'],
        formulaCards: ['least-common-multiple', 'perfect-number', 'regular-polygon'],
        relatedIds: ['least-common-multiple', 'perfect-number', 'regular-polygon']
      },
      {
        id: 'number-period-product-unit',
        title: 'Squared minutes in a period product',
        category: 'units',
        symbols: ['min²'],
        tokens: ['min²', 'min^2', 'min^{2}'],
        mathSymbols: ['min²', 'min^2', 'min^{2}'],
        aliases: ['squared minutes', 'minute squared'],
        definition:
          'Multiplying two minute-valued periods produces squared minutes. Dividing this product by a minute-valued common divisor restores a duration in minutes. This is a product unit, not an elapsed time or a physical area.',
        example: '4 min × 6 min = 24 min²; 24 min² / 2 min = 12 min',
        readAs: 'squared minutes',
        sourceKeys: ['number_extension_lcm'],
        grammarCards: ['least-common-multiple'],
        formulaCards: ['least-common-multiple'],
        notationKinds: ['unit'],
        wordMatches: [],
        relatedIds: ['least-common-multiple', 'measurement-unit-symbols', 'powered-unit']
      }
    ],
    sources: {
      number_extension_lcm: {
        title: 'Wolfram MathWorld · Least Common Multiple',
        url: 'https://mathworld.wolfram.com/LeastCommonMultiple.html'
      },
      number_extension_perfect: {
        title: 'Wolfram MathWorld · Perfect Number',
        url: 'https://mathworld.wolfram.com/PerfectNumber.html'
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
