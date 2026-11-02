/* Original exact-number teaching data; no clocks or storage. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberFoundationTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'modular-arithmetic',
        title: 'Modular arithmetic and remainders',
        category: 'operations',
        symbols: [],
        definition:
          'Modular arithmetic groups integers by their remainders for a fixed positive modulus. Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers. This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.',
        example: '23 = 3 × 6 + 5',
        readAs: 'Modular arithmetic and remainders',
        aliases: ['modular arithmetic and remainders'],
        sourceKeys: ['number_integer'],
        relatedIds: [],
        grammarCards: ['modular-arithmetic'],
        formulaCards: ['modular-arithmetic']
      },
      {
        id: 'modular-arithmetic-total',
        title: 'Total counters before packing',
        category: 'card-notation',
        symbols: ['n'],
        definition:
          'Total counters before packing. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.',
        example: '23 = 3 × 6 + 5',
        readAs: 'Total counters before packing.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['modular-arithmetic'],
        formulaCards: ['modular-arithmetic'],
        relatedIds: ['modular-arithmetic']
      },
      {
        id: 'modular-arithmetic-modulus',
        title: 'Positive number of counters in a full tray',
        category: 'card-notation',
        symbols: ['m'],
        definition:
          'Positive number of counters in a full tray. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.',
        example: '23 = 3 × 6 + 5',
        readAs: 'Positive number of counters in a full tray.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['modular-arithmetic'],
        formulaCards: ['modular-arithmetic'],
        relatedIds: ['modular-arithmetic']
      },
      {
        id: 'modular-arithmetic-quotient',
        title: 'Number of completely filled trays',
        category: 'card-notation',
        symbols: ['q'],
        definition:
          'Number of completely filled trays. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.',
        example: '23 = 3 × 6 + 5',
        readAs: 'Number of completely filled trays.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['modular-arithmetic'],
        formulaCards: ['modular-arithmetic'],
        relatedIds: ['modular-arithmetic']
      },
      {
        id: 'modular-arithmetic-remainder',
        title: 'Nonnegative leftover count, strictly smaller than one tray',
        category: 'card-notation',
        symbols: ['r'],
        definition:
          'Nonnegative leftover count, strictly smaller than one tray. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.',
        example: '23 = 3 × 6 + 5',
        readAs: 'Nonnegative leftover count, strictly smaller than one tray.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['modular-arithmetic'],
        formulaCards: ['modular-arithmetic'],
        relatedIds: ['modular-arithmetic']
      },
      {
        id: 'greatest-common-divisor',
        title: 'Greatest common divisor',
        category: 'operations',
        symbols: [],
        definition:
          'The greatest common divisor of two positive integers is the largest positive integer dividing both. Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths. Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.',
        example: '24 = 1 × 18 + 6; 18 = 3 × 6',
        readAs: 'Greatest common divisor',
        aliases: ['greatest common divisor'],
        sourceKeys: ['number_integer'],
        relatedIds: [],
        grammarCards: ['greatest-common-divisor'],
        formulaCards: ['greatest-common-divisor']
      },
      {
        id: 'greatest-common-divisor-first',
        title: 'Length of the first ribbon in centimetres',
        category: 'card-notation',
        symbols: ['a'],
        definition:
          'Length of the first ribbon in centimetres. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.',
        example: '24 = 1 × 18 + 6; 18 = 3 × 6',
        readAs: 'Length of the first ribbon in centimetres.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['greatest-common-divisor'],
        formulaCards: ['greatest-common-divisor'],
        relatedIds: ['greatest-common-divisor']
      },
      {
        id: 'greatest-common-divisor-second',
        title: 'Length of the second ribbon in centimetres',
        category: 'card-notation',
        symbols: ['b'],
        definition:
          'Length of the second ribbon in centimetres. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.',
        example: '24 = 1 × 18 + 6; 18 = 3 × 6',
        readAs: 'Length of the second ribbon in centimetres.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['greatest-common-divisor'],
        formulaCards: ['greatest-common-divisor'],
        relatedIds: ['greatest-common-divisor']
      },
      {
        id: 'greatest-common-divisor-gcd',
        title: 'Longest whole-centimetre piece dividing both ribbon lengths',
        category: 'card-notation',
        symbols: ['d'],
        definition:
          'Longest whole-centimetre piece dividing both ribbon lengths. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.',
        example: '24 = 1 × 18 + 6; 18 = 3 × 6',
        readAs: 'Longest whole-centimetre piece dividing both ribbon lengths.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['greatest-common-divisor'],
        formulaCards: ['greatest-common-divisor'],
        relatedIds: ['greatest-common-divisor']
      },
      {
        id: 'greatest-common-divisor-output',
        title: 'Greatest common divisor of these two positive integer lengths',
        category: 'card-notation',
        symbols: ['gcd(a,b)'],
        definition:
          'Greatest common divisor of these two positive integer lengths. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.',
        example: '24 = 1 × 18 + 6; 18 = 3 × 6',
        readAs: 'Greatest common divisor of these two positive integer lengths.',
        aliases: [],
        sourceKeys: ['number_integer'],
        grammarCards: ['greatest-common-divisor'],
        formulaCards: ['greatest-common-divisor'],
        relatedIds: ['greatest-common-divisor']
      },
      {
        id: 'prime-factorization',
        title: 'Prime factorization',
        category: 'operations',
        symbols: [],
        definition:
          'A prime factorization expresses an integer larger than one as a product of primes, retaining repetitions. Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count. The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.',
        example: '84 = 2 × 2 × 3 × 7',
        readAs: 'Prime factorization',
        aliases: ['prime factorization'],
        sourceKeys: ['number_prime'],
        relatedIds: [],
        grammarCards: ['prime-factorization'],
        formulaCards: ['prime-factorization']
      },
      {
        id: 'prime-factorization-number',
        title: 'Original positive item count',
        category: 'card-notation',
        symbols: ['n'],
        definition:
          'Original positive item count. A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.',
        example: '84 = 2 × 2 × 3 × 7',
        readAs: 'Original positive item count.',
        aliases: [],
        sourceKeys: ['number_prime'],
        grammarCards: ['prime-factorization'],
        formulaCards: ['prime-factorization'],
        relatedIds: ['prime-factorization']
      },
      {
        id: 'prime-factorization-output',
        title: 'Number of prime factors, counted with repetitions',
        category: 'card-notation',
        symbols: ['s'],
        definition:
          'Number of prime factors, counted with repetitions. A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.',
        example: '84 = 2 × 2 × 3 × 7',
        readAs: 'Number of prime factors, counted with repetitions.',
        aliases: [],
        sourceKeys: ['number_prime'],
        grammarCards: ['prime-factorization'],
        formulaCards: ['prime-factorization'],
        relatedIds: ['prime-factorization']
      },
      {
        id: 'prime-factorization-factors',
        title: 'The prime factors in the displayed product',
        category: 'card-notation',
        symbols: ['pⱼ'],
        definition:
          'The prime factors in the displayed product. A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.',
        example: '84 = 2 × 2 × 3 × 7',
        readAs: 'The prime factors in the displayed product.',
        aliases: [],
        sourceKeys: ['number_prime'],
        grammarCards: ['prime-factorization'],
        formulaCards: ['prime-factorization'],
        relatedIds: ['prime-factorization']
      },
      {
        id: 'rational-number',
        title: 'Rational numbers and fractions',
        category: 'operations',
        symbols: [],
        definition:
          'A rational number is expressible as a quotient of two integers with a nonzero denominator. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances. The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.',
        example: '6/8 = 3/4',
        readAs: 'Rational numbers and fractions',
        aliases: ['rational numbers and fractions'],
        sourceKeys: ['number_fraction'],
        relatedIds: [],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number']
      },
      {
        id: 'rational-number-numerator',
        title: 'Signed count of ribbon pieces held or owed',
        category: 'card-notation',
        symbols: ['a'],
        definition:
          'Signed count of ribbon pieces held or owed. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
        example: '6/8 = 3/4',
        readAs: 'Signed count of ribbon pieces held or owed.',
        aliases: [],
        sourceKeys: ['number_fraction'],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number'],
        relatedIds: ['rational-number']
      },
      {
        id: 'rational-number-denominator',
        title: 'Positive number of equal pieces making one metre',
        category: 'card-notation',
        symbols: ['b'],
        definition:
          'Positive number of equal pieces making one metre. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
        example: '6/8 = 3/4',
        readAs: 'Positive number of equal pieces making one metre.',
        aliases: [],
        sourceKeys: ['number_fraction'],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number'],
        relatedIds: ['rational-number']
      },
      {
        id: 'rational-number-reduced-numerator',
        title: 'Numerator after canceling the common divisor',
        category: 'card-notation',
        symbols: ['p'],
        definition:
          'Numerator after canceling the common divisor. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
        example: '6/8 = 3/4',
        readAs: 'Numerator after canceling the common divisor.',
        aliases: [],
        sourceKeys: ['number_fraction'],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number'],
        relatedIds: ['rational-number']
      },
      {
        id: 'rational-number-reduced-denominator',
        title: 'Positive denominator after canceling the common divisor',
        category: 'card-notation',
        symbols: ['q'],
        definition:
          'Positive denominator after canceling the common divisor. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
        example: '6/8 = 3/4',
        readAs: 'Positive denominator after canceling the common divisor.',
        aliases: [],
        sourceKeys: ['number_fraction'],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number'],
        relatedIds: ['rational-number']
      },
      {
        id: 'rational-number-gcd',
        title: 'Common positive divisor used to reduce both parts',
        category: 'card-notation',
        symbols: ['d'],
        definition:
          'Common positive divisor used to reduce both parts. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
        example: '6/8 = 3/4',
        readAs: 'Common positive divisor used to reduce both parts.',
        aliases: [],
        sourceKeys: ['number_fraction'],
        grammarCards: ['rational-number'],
        formulaCards: ['rational-number'],
        relatedIds: ['rational-number']
      },
      {
        id: 'numeral-system',
        title: 'Positional numeral systems',
        category: 'operations',
        symbols: [],
        definition:
          'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions. Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Positional numeral systems',
        aliases: ['positional numeral systems'],
        sourceKeys: ['number_numeral'],
        relatedIds: [],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system']
      },
      {
        id: 'numeral-system-value',
        title: 'Nonnegative represented item count',
        category: 'card-notation',
        symbols: ['n'],
        definition:
          'Nonnegative represented item count. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Nonnegative represented item count.',
        aliases: [],
        sourceKeys: ['number_numeral'],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system'],
        relatedIds: ['numeral-system']
      },
      {
        id: 'numeral-system-base',
        title: 'Integer base of the positional representation',
        category: 'card-notation',
        symbols: ['b'],
        definition:
          'Integer base of the positional representation. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Integer base of the positional representation.',
        aliases: [],
        sourceKeys: ['number_numeral'],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system'],
        relatedIds: ['numeral-system']
      },
      {
        id: 'numeral-system-places',
        title: 'Digit occupying position j, counted from the units place',
        category: 'card-notation',
        symbols: ['dⱼ'],
        definition:
          'Digit occupying position j, counted from the units place. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Digit occupying position j, counted from the units place.',
        aliases: [],
        sourceKeys: ['number_numeral'],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system'],
        relatedIds: ['numeral-system']
      },
      {
        id: 'numeral-system-digit-count',
        title: 'Number of digits, including one zero digit for zero',
        category: 'card-notation',
        symbols: ['s'],
        definition:
          'Number of digits, including one zero digit for zero. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Number of digits, including one zero digit for zero.',
        aliases: [],
        sourceKeys: ['number_numeral'],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system'],
        relatedIds: ['numeral-system']
      },
      {
        id: 'numeral-system-place-index',
        title: 'Whole position index of a digit, beginning at the units place',
        category: 'card-notation',
        symbols: ['j'],
        definition:
          'Whole position index of a digit, beginning at the units place. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
        example: '11011₂ = 16 + 8 + 2 + 1 = 27',
        readAs: 'Whole position index of a digit, beginning at the units place.',
        aliases: [],
        sourceKeys: ['number_numeral'],
        grammarCards: ['numeral-system'],
        formulaCards: ['numeral-system'],
        relatedIds: ['numeral-system']
      },
      {
        id: 'permutation-count',
        title: 'Permutations and factorials',
        category: 'discrete',
        symbols: [],
        definition:
          'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one. Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.',
        example: '5 × 4 × 3 = 60',
        readAs: 'Permutations and factorials',
        aliases: ['permutations and factorials'],
        sourceKeys: ['number_counting'],
        relatedIds: [],
        grammarCards: ['permutation-count'],
        formulaCards: ['permutation-count']
      },
      {
        id: 'permutation-count-available',
        title: 'Number of distinct volunteers available',
        category: 'card-notation',
        symbols: ['n'],
        definition:
          'Number of distinct volunteers available. Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.',
        example: '5 × 4 × 3 = 60',
        readAs: 'Number of distinct volunteers available.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['permutation-count'],
        formulaCards: ['permutation-count'],
        relatedIds: ['permutation-count']
      },
      {
        id: 'permutation-count-slots',
        title: 'Number of different labeled roles to fill',
        category: 'card-notation',
        symbols: ['r'],
        definition:
          'Number of different labeled roles to fill. Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.',
        example: '5 × 4 × 3 = 60',
        readAs: 'Number of different labeled roles to fill.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['permutation-count'],
        formulaCards: ['permutation-count'],
        relatedIds: ['permutation-count']
      },
      {
        id: 'permutation-count-output',
        title: 'Number of ordered role assignments without repetition',
        category: 'card-notation',
        symbols: ['P(n,r)'],
        definition:
          'Number of ordered role assignments without repetition. Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.',
        example: '5 × 4 × 3 = 60',
        readAs: 'Number of ordered role assignments without repetition.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['permutation-count'],
        formulaCards: ['permutation-count'],
        relatedIds: ['permutation-count']
      },
      {
        id: 'binomial-coefficient',
        title: 'Combinations and binomial coefficients',
        category: 'discrete',
        symbols: [],
        definition:
          'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count. Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.',
        example: 'C(6,3) = 120/6 = 20',
        readAs: 'Combinations and binomial coefficients',
        aliases: ['combinations and binomial coefficients'],
        sourceKeys: ['number_counting'],
        relatedIds: [],
        grammarCards: ['binomial-coefficient'],
        formulaCards: ['binomial-coefficient']
      },
      {
        id: 'binomial-coefficient-available',
        title: 'Number of distinct volunteers available',
        category: 'card-notation',
        symbols: ['n'],
        definition:
          'Number of distinct volunteers available. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.',
        example: 'C(6,3) = 120/6 = 20',
        readAs: 'Number of distinct volunteers available.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['binomial-coefficient'],
        formulaCards: ['binomial-coefficient'],
        relatedIds: ['binomial-coefficient']
      },
      {
        id: 'binomial-coefficient-chosen',
        title: 'Number of people in a team',
        category: 'card-notation',
        symbols: ['k'],
        definition:
          'Number of people in a team. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.',
        example: 'C(6,3) = 120/6 = 20',
        readAs: 'Number of people in a team.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['binomial-coefficient'],
        formulaCards: ['binomial-coefficient'],
        relatedIds: ['binomial-coefficient']
      },
      {
        id: 'binomial-coefficient-output',
        title: 'Number of unordered k-person subsets of the n-person group',
        category: 'card-notation',
        symbols: ['C(n,k)'],
        definition:
          'Number of unordered k-person subsets of the n-person group. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.',
        example: 'C(6,3) = 120/6 = 20',
        readAs: 'Number of unordered k-person subsets of the n-person group.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['binomial-coefficient'],
        formulaCards: ['binomial-coefficient'],
        relatedIds: ['binomial-coefficient']
      },
      {
        id: 'binomial-coefficient-orders-per-team',
        title: 'Number of ordered listings corresponding to one team',
        category: 'card-notation',
        symbols: ['k!'],
        definition:
          'Number of ordered listings corresponding to one team. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.',
        example: 'C(6,3) = 120/6 = 20',
        readAs: 'Number of ordered listings corresponding to one team.',
        aliases: [],
        sourceKeys: ['number_counting'],
        grammarCards: ['binomial-coefficient'],
        formulaCards: ['binomial-coefficient'],
        relatedIds: ['binomial-coefficient']
      },
      {
        id: 'modulo',
        title: 'Modulo and congruence',
        category: 'discrete',
        symbols: ['mod', 'bmod', '\\bmod', 'a mod b', 'n mod m'],
        definition:
          'Taking a remainder with a positive modulus identifies an integer residue class. In this family the remainder is nonnegative and smaller than the modulus.',
        example: '23 mod 6 = 5',
        readAs: 'Modulo and congruence',
        aliases: ['modular arithmetic', 'modulus', 'residue', 'congruence'],
        sourceKeys: ['number_integer'],
        grammarCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        formulaCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        relatedIds: []
      },
      {
        id: 'greatest-common-divisor-function',
        title: 'Greatest common divisor notation',
        category: 'discrete',
        symbols: ['gcd', '\\operatorname{gcd}', 'gcd(a,b)', 'gcd(|a|,b)'],
        definition:
          'The gcd is the greatest positive integer dividing both arguments when they are not both zero. The ribbon family restricts both lengths to be positive.',
        example: 'gcd(24,18) = 6',
        readAs: 'Greatest common divisor notation',
        aliases: ['common divisor', 'coprime', 'relatively prime'],
        sourceKeys: ['number_integer'],
        grammarCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        formulaCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        relatedIds: []
      },
      {
        id: 'product-notation',
        title: 'Repeated product',
        category: 'discrete',
        symbols: ['∏', '\\prod'],
        definition:
          'The product operator multiplies a finite indexed family. Repeated equal factors are included repeatedly; an empty product is one.',
        example: '84 = 2 × 2 × 3 × 7',
        readAs: 'Repeated product',
        aliases: ['product operator', 'empty product', 'prime factor'],
        sourceKeys: ['number_prime'],
        grammarCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        formulaCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        relatedIds: []
      },
      {
        id: 'positional-digit',
        title: 'Positional digit',
        category: 'discrete',
        symbols: ['dⱼ', 'd_j'],
        definition:
          'A digit at position j is multiplied by the j-th power of the base. Ordinary base-b digits range from zero to b minus one.',
        example: '11011₂ = 27',
        readAs: 'Positional digit',
        aliases: ['digit', 'place value', 'positional notation'],
        sourceKeys: ['number_numeral'],
        grammarCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        formulaCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        relatedIds: []
      },
      {
        id: 'number-count-unit',
        title: 'Count units in the number workshop',
        category: 'units',
        symbols: [
          'item',
          'items',
          'factor',
          'factors',
          'piece',
          'pieces',
          'part',
          'parts',
          'people',
          'person',
          'role',
          'roles',
          'arrangement',
          'arrangements',
          'selection',
          'selections',
          'place',
          'places'
        ],
        definition:
          'Count labels identify what is counted. People, ordered assignments, unordered teams, digit places and prime factors are different kinds of counted things, even when their numerical values happen to match.',
        example: 'Five volunteers can produce sixty ordered assignments to three roles.',
        readAs: 'Count units in the number workshop',
        aliases: ['counter', 'team', 'volunteer'],
        sourceKeys: ['number_counting'],
        grammarCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        formulaCards: [
          'modular-arithmetic',
          'greatest-common-divisor',
          'prime-factorization',
          'rational-number',
          'numeral-system',
          'permutation-count',
          'binomial-coefficient'
        ],
        relatedIds: []
      }
    ],
    sources: {
      number_integer: {
        title: 'James Aspnes · Number Theory',
        url: 'https://www.cs.yale.edu/homes/aspnes/pinewiki/NumberTheory.html'
      },
      number_prime: {
        title: 'OpenStax · Prime and Composite Numbers',
        url: 'https://openstax.org/books/contemporary-mathematics/pages/3-1-prime-and-composite-numbers'
      },
      number_fraction: {
        title: 'OpenStax · Rational Numbers',
        url: 'https://openstax.org/books/contemporary-mathematics/pages/3-4-rational-numbers'
      },
      number_numeral: {
        title: 'Carl Burch · More About Binary Numbers',
        url: 'https://www.cs.cmu.edu/~cburch/pgss97/binary.html'
      },
      number_counting: {
        title: 'OpenStax · Counting Principles',
        url: 'https://openstax.org/books/algebra-and-trigonometry/pages/13-5-counting-principles'
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
