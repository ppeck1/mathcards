/* Original bounded algebra readers; links are derived from actual mathematical use. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgebraExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'complex-number',
        title: 'Complex numbers, conjugates and modulus',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus. The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Complex numbers, conjugates and modulus',
        aliases: ['complex number'],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: []
      },
      {
        id: 'complex-number-real',
        title: 'Real component',
        category: 'card-notation',
        symbols: ['a'],
        tokens: ['a'],
        definition:
          'Real component. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Real component',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-imag',
        title: 'Imaginary component',
        category: 'card-notation',
        symbols: ['b'],
        tokens: ['b'],
        definition:
          'Imaginary component. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Imaginary component',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-complexPoint',
        title: 'Complex point represented by its components',
        category: 'card-notation',
        symbols: ['z'],
        tokens: ['z'],
        definition:
          'Complex point represented by its components. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Complex point represented by its components',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-imaginaryUnit',
        title: 'Imaginary unit with square minus one',
        category: 'card-notation',
        symbols: ['i'],
        tokens: ['i'],
        definition:
          'Imaginary unit with square minus one. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Imaginary unit with square minus one',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-conjugatePoint',
        title: 'Conjugate reflected point',
        category: 'card-notation',
        symbols: ['z̄'],
        tokens: ['z̄'],
        definition:
          'Conjugate reflected point. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Conjugate reflected point',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-output',
        title: 'Modulus of the complex number',
        category: 'card-notation',
        symbols: ['|z|'],
        tokens: ['|z|'],
        definition:
          'Modulus of the complex number. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        example: 'z = a + bi; |z| = √(a² + b²)',
        readAs: 'Modulus of the complex number',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-quantity-realsquared',
        title: 'Squared real component',
        category: 'card-notation',
        symbols: ['a²'],
        tokens: ['a²'],
        definition:
          'The squared real component is the real coefficient multiplied by itself. It contributes a nonnegative amount to the squared modulus; it is distinct from the original signed real component.',
        example: 'a² = 3² = 9',
        readAs: 'Squared real component',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-quantity-imagsquared',
        title: 'Squared imaginary component',
        category: 'card-notation',
        symbols: ['b²'],
        tokens: ['b²'],
        definition:
          'The squared imaginary component means the square of the real coefficient of the imaginary unit. It contributes a nonnegative amount to the squared modulus. It does not mean the square of the whole imaginary term, which also contains i.',
        example: 'b² = 4² = 16',
        readAs: 'Squared imaginary component',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-quantity-squaredmodulus',
        title: 'Squared modulus',
        category: 'card-notation',
        symbols: ['|z|²'],
        tokens: ['|z|²'],
        definition:
          'The squared modulus is the sum of the squared real and imaginary coefficients. It is a nonnegative squared distance; taking its nonnegative square root gives the modulus.',
        example: '|z|² = a² + b²',
        readAs: 'Squared modulus',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-number-quantity-conjugateimag',
        title: 'Imaginary component of the conjugate',
        category: 'card-notation',
        symbols: [],
        tokens: [],
        definition:
          'The imaginary component of the conjugate is the negative of the original imaginary coefficient. The real component is unchanged. This sign reversal is reflection across the real axis.',
        example: 'Im(z̄) = −b',
        readAs: 'Imaginary component of the conjugate',
        aliases: [],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        sourceKeys: ['algebra_ext_complex'],
        relatedIds: ['complex-number']
      },
      {
        id: 'quadratic-equation',
        title: 'Quadratic equations and real roots',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation. The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Quadratic equations and real roots',
        aliases: ['quadratic equation'],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: []
      },
      {
        id: 'quadratic-equation-leading',
        title: 'Positive leading coefficient',
        category: 'card-notation',
        symbols: ['a'],
        tokens: ['a'],
        definition:
          'Positive leading coefficient. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Positive leading coefficient',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'quadratic-equation-linear',
        title: 'Linear coefficient',
        category: 'card-notation',
        symbols: ['b'],
        tokens: ['b'],
        definition:
          'Linear coefficient. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Linear coefficient',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'quadratic-equation-constant',
        title: 'Constant offset',
        category: 'card-notation',
        symbols: ['c'],
        tokens: ['c'],
        definition:
          'Constant offset. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Constant offset',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'quadratic-equation-roots',
        title: 'Real solution coordinate',
        category: 'card-notation',
        symbols: ['x'],
        tokens: ['x'],
        definition:
          'Real solution coordinate. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Real solution coordinate',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'quadratic-equation-discriminant',
        title: 'Discriminant',
        category: 'card-notation',
        symbols: ['D'],
        tokens: ['D'],
        definition:
          'Discriminant. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Discriminant',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'quadratic-equation-output',
        title: 'Number of distinct real roots',
        category: 'card-notation',
        symbols: ['N'],
        tokens: ['N'],
        definition:
          'Number of distinct real roots. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        example: 'ax² + bx + c = 0; D = b² − 4ac',
        readAs: 'Number of distinct real roots',
        aliases: [],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        sourceKeys: ['algebra_ext_quadratic'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'linear-programming',
        title: 'Linear programming and feasible choices',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible. The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Linear programming and feasible choices',
        aliases: ['linear programming'],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: []
      },
      {
        id: 'linear-programming-budget',
        title: 'Available base material',
        category: 'card-notation',
        symbols: ['B'],
        tokens: ['B'],
        definition:
          'Available base material. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Available base material',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-rateX',
        title: 'Contribution per litre of the first blend',
        category: 'card-notation',
        symbols: ['p'],
        tokens: ['p'],
        definition:
          'Contribution per litre of the first blend. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Contribution per litre of the first blend',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-rateY',
        title: 'Contribution per litre of the second blend',
        category: 'card-notation',
        symbols: ['q'],
        tokens: ['q'],
        definition:
          'Contribution per litre of the second blend. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Contribution per litre of the second blend',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-bestX',
        title: 'Litres of the first blend at one maximizing corner',
        category: 'card-notation',
        symbols: ['x'],
        tokens: ['x'],
        definition:
          'Litres of the first blend at one maximizing corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Litres of the first blend at one maximizing corner',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-bestY',
        title: 'Litres of the second blend at one maximizing corner',
        category: 'card-notation',
        symbols: ['y'],
        tokens: ['y'],
        definition:
          'Litres of the second blend at one maximizing corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Litres of the second blend at one maximizing corner',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-output',
        title: 'Maximum contribution',
        category: 'card-notation',
        symbols: ['V'],
        tokens: ['V'],
        definition:
          'Maximum contribution. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        example: 'maximize V = px + qy; x + y ≤ B',
        readAs: 'Maximum contribution',
        aliases: [],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'linear-programming-quantity-vertices',
        title: 'Feasible vertex',
        category: 'card-notation',
        symbols: [],
        tokens: [],
        definition:
          'A feasible vertex is a corner of the region satisfying all the linear constraints. Its coordinates give one permitted production choice. The workshop compares these corners because a linear objective on its bounded polygon attains a maximum at a vertex.',
        example: '(x,y) = (4,1); x + y = 5',
        readAs: 'feasible vertex',
        aliases: ['feasible corner', 'feasible vertices'],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming'],
        wordMatches: ['feasible corner', 'feasible vertex', 'polygon vertices']
      },
      {
        id: 'linear-programming-quantity-vertexvalues',
        title: 'Contribution at a feasible vertex',
        category: 'card-notation',
        symbols: [],
        tokens: [],
        definition:
          'Substitute a feasible vertex into the linear objective to obtain its contribution. Comparing all vertex contributions identifies the largest value. Equal values at neighboring best vertices make their connecting feasible edge optimal.',
        example: 'V = 3 × 4 + 2 × 1 = 14 credits',
        readAs: 'contribution at a feasible vertex',
        aliases: ['objective value at a vertex'],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        sourceKeys: ['algebra_ext_lp'],
        relatedIds: ['linear-programming'],
        wordMatches: ['linear contribution', 'vertex contribution']
      },
      {
        id: 'complex-conjugate',
        title: 'Complex conjugate',
        category: 'functions',
        symbols: ['z̄'],
        tokens: ['z̄'],
        definition:
          'Conjugation leaves the real component fixed and reverses the imaginary component. In the complex plane it is reflection in the real axis.',
        example: 'z = a + bi; z̄ = a − bi',
        readAs: 'the conjugate of z',
        aliases: ['conjugation', 'complex conjugation'],
        sourceKeys: ['algebra_ext_conjugate'],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        relatedIds: ['complex-number']
      },
      {
        id: 'complex-modulus',
        title: 'Complex modulus',
        category: 'operations',
        symbols: ['|z|'],
        tokens: ['|z|'],
        definition:
          'The nonnegative distance from the origin to a complex point. It equals the square root of the sum of the squared real and imaginary components.',
        example: '|3 + 4i| = 5',
        readAs: 'modulus of z',
        aliases: ['complex magnitude', 'absolute value of a complex number'],
        sourceKeys: ['algebra_ext_complex'],
        grammarCards: ['complex-number'],
        formulaCards: ['complex-number'],
        relatedIds: ['complex-number']
      },
      {
        id: 'quadratic-discriminant',
        title: 'Quadratic discriminant',
        category: 'functions',
        symbols: ['D'],
        tokens: ['D'],
        definition:
          'For real coefficients with nonzero leading term, the discriminant is the square of the linear coefficient minus four times the product of the leading and constant coefficients. Its sign distinguishes two distinct real roots, a double root and no real roots.',
        example: 'D = b² − 4ac',
        readAs: 'quadratic discriminant',
        aliases: ['discriminant', 'double root', 'quadratic formula'],
        sourceKeys: ['algebra_ext_quadratic'],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        relatedIds: ['quadratic-equation']
      },
      {
        id: 'linear-programming-feasible-region',
        title: 'Feasible region of a linear program',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'The points satisfying every stated linear constraint simultaneously. A bounded nonempty polygon has an objective maximum at a vertex, with possible ties on edges or the whole region.',
        example: '0 ≤ x ≤ 4; 0 ≤ y ≤ 3; x + y ≤ B',
        readAs: 'feasible region',
        aliases: ['feasible polygon', 'optimal edge', 'flat objective', 'maximizing vertex'],
        sourceKeys: ['algebra_ext_lp'],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'algebra-contribution-units',
        title: 'Contribution units in the paint model',
        category: 'units',
        symbols: ['L', 'credits', 'credits/L'],
        tokens: ['L', 'credits', 'credits/L'],
        definition:
          'Litres describe continuous paint volume. Credits are the constructed objective unit, and credits per litre is a contribution rate. These units do not imply monetary measurement.',
        example: '3 credits/L × 4 L = 12 credits',
        readAs: 'litres and contribution credits',
        aliases: ['litre', 'litres', 'credit'],
        sourceKeys: ['algebra_ext_lp'],
        grammarCards: ['linear-programming'],
        formulaCards: ['linear-programming'],
        relatedIds: ['linear-programming']
      },
      {
        id: 'algebra-real-root-count-units',
        title: 'Distinct real-root count',
        category: 'units',
        symbols: ['roots'],
        tokens: ['roots'],
        definition:
          'The output counts distinct real solutions of this quadratic. Two separate crossings count as two; a double root at a tangency counts once; no real crossing counts zero. Multiplicity is not the same as the number of distinct solutions.',
        example: 'N = 2 roots means two distinct real solutions',
        readAs: 'number of distinct real roots',
        aliases: ['real-root count', 'distinct roots'],
        sourceKeys: ['algebra_ext_quadratic'],
        grammarCards: ['quadratic-equation'],
        formulaCards: ['quadratic-equation'],
        relatedIds: ['quadratic-equation']
      }
    ],
    sources: {
      algebra_ext_complex: {
        title: 'OpenStax · Complex Numbers and Polar Form',
        url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/10-5-polar-form-of-complex-numbers'
      },
      algebra_ext_conjugate: {
        title: 'OpenStax · Complex Numbers',
        url: 'https://openstax.org/books/college-algebra-2e/pages/2-4-complex-numbers'
      },
      algebra_ext_quadratic: {
        title: 'OpenStax · Quadratic Equations',
        url: 'https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-5-quadratic-equations'
      },
      algebra_ext_lp: {
        title: 'MIT · 18.310 Linear Programming',
        url: 'https://math.mit.edu/~djk/18.310/18.310F04/26and27.html'
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
