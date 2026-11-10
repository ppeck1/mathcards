/* Exact recurrence and divisor stories; the shared host owns time and state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    'least-common-multiple': {
      title: 'When do the two maintenance bells next ring together?',
      unit: 'min',
      context:
        'Two maintenance bells start together at minute zero. Bell A repeats every a minutes and bell B every b minutes. Change either whole-minute interval. Follow their separate ticks to the first shared tick after the start.',
      summary:
        'Find the greatest common divisor of the two positive intervals, divide their product by it, and count how many cycles of each bell reach the same first positive reunion.',
      parameters: { first: 4, second: 6 },
      variables: [
        {
          key: 'first',
          symbol: 'a',
          label: 'Bell A interval a',
          unit: 'min',
          min: 1,
          max: 8,
          step: 1,
          discrete: true
        },
        {
          key: 'second',
          symbol: 'b',
          label: 'Bell B interval b',
          unit: 'min',
          min: 1,
          max: 8,
          step: 1,
          discrete: true
        }
      ],
      formula:
        'd=\\gcd(a,b),\\quad L=\\frac{ab}{d},\\quad c_A=\\frac{L}{a},\\quad c_B=\\frac{L}{b}.',
      stages: [
        [
          'Keep two repeating intervals',
          'a = {{first}} min; b = {{second}} min',
          'Each row marks elapsed minutes on the same fixed timeline. Minute zero is their shared start, so it is excluded from the question about the next reunion.'
        ],
        [
          'Remove the repeated common factor',
          'd = {{gcd}} min; ab = {{product}} min²',
          'The greatest common divisor is the largest whole-minute interval dividing both periods. Divide the product by this common factor once to obtain the least positive common multiple.'
        ],
        [
          'Meet at the first positive shared tick',
          'L = {{output}} min; c_A = {{firstCycles}}; c_B = {{secondCycles}}',
          'After c_A cycles of A and c_B cycles of B, both bells reach minute L. Other positive shared ticks are multiples of L; none comes earlier.'
        ]
      ],
      assumptions: [
        'Both bells begin at exactly the same time and repeat perfectly at fixed positive whole-minute intervals from one through eight. The first positive reunion is the least common multiple, not their shared start at zero. The displayed timeline always spans zero through sixty minutes; the next reunion is visible because every allowed least common multiple is at most 56. Phase offsets, timing drift and fractional periods are outside this construction.'
      ],
      sourceRefs: ['source:number-extensions:least-common-multiple']
    },
    'perfect-number': {
      title: 'Can the proper-divisor strips match the original tile count?',
      unit: 'tiles',
      context:
        'A workshop exhibit begins with n tiles. For each positive divisor smaller than n, build one strip containing that many tiles. Change the whole tile count, then compare all the strip tiles with the original n. Six makes strips of one, two and three tiles: their sum matches six.',
      summary:
        'List the proper positive divisors, add one copy of each, and subtract the original count. A zero balance identifies a perfect number; negative and positive balances mean deficient and abundant.',
      parameters: { number: 6 },
      variables: [
        {
          key: 'number',
          symbol: 'n',
          label: 'Original tile count n',
          unit: 'tiles',
          min: 1,
          max: 60,
          step: 1,
          discrete: true
        }
      ],
      formula:
        'D=\\{d\\in\\mathbb{N}:d\\mid n,\\ d<n\\},\\quad s=\\sum_{d\\in D}d,\\quad \\Delta=s-n.',
      stages: [
        [
          'Choose the original collection',
          'n = {{number}} tiles',
          'A proper positive divisor divides n exactly and is smaller than n. It supplies one strip; n itself is not included.'
        ],
        [
          'Build and add the divisor strips',
          '{{divisorCount}} proper-divisor strips; s = {{divisorSum}} tiles',
          'Each listed divisor contributes its own strip length once. One has no proper positive divisors, so its divisor set is empty and its sum is zero.'
        ],
        [
          'Compare the two tile totals',
          'Δ = {{divisorSum}} − {{number}} = {{balance}} tiles; {{classification}}',
          'The balance compares the strip total with n. Equal totals make a perfect number. Within this one-to-sixty exhibit, six and twenty-eight are the perfect examples.'
        ]
      ],
      assumptions: [
        'Use whole positive counts from one through sixty. Proper divisors are positive divisors strictly smaller than the chosen number, each included once. The empty proper-divisor sum for one is zero. Classification compares this exact integer sum with n: deficient below, perfect equal, abundant above. The exhibit is an exact construction, not a claim that every number is perfect or a search for every perfect number.'
      ],
      sourceRefs: ['source:number-extensions:perfect-number']
    }
  };
  const quantitySpecs = {
    'least-common-multiple': {
      first: [
        'Bell A repeat interval',
        'input',
        'min',
        'The positive whole-minute spacing of the cyan ticks.'
      ],
      second: [
        'Bell B repeat interval',
        'input',
        'min',
        'The positive whole-minute spacing of the violet ticks.'
      ],
      gcd: [
        'Greatest common interval divisor',
        'intermediate',
        'min',
        'The largest whole-minute interval dividing both declared periods exactly.'
      ],
      product: [
        'Product of the two intervals',
        'intermediate',
        'min²',
        'The product has squared-time units; dividing by the common interval divisor restores minutes.'
      ],
      lcm: [
        'First positive reunion time',
        'output',
        'min',
        'The smallest strictly positive elapsed time that is a whole multiple of both periods.'
      ],
      firstCycles: [
        'Bell A cycles to reunion',
        'intermediate',
        'cycles',
        'Divide the reunion time by bell A’s interval.'
      ],
      secondCycles: [
        'Bell B cycles to reunion',
        'intermediate',
        'cycles',
        'Divide the reunion time by bell B’s interval.'
      ],
      firstTimes: [
        'Bell A ticks through minute sixty',
        'input',
        'min',
        'These elapsed times include the shared start at zero and every visible A tick.'
      ],
      secondTimes: [
        'Bell B ticks through minute sixty',
        'input',
        'min',
        'These elapsed times include zero and every visible B tick on the same fixed scale.'
      ],
      sharedTimes: [
        'Shared ticks through minute sixty',
        'intermediate',
        'min',
        'Zero is the initial meeting; the first positive member is the next reunion, followed by its visible multiples.'
      ],
      output: [
        'First positive reunion time',
        'output',
        'min',
        'The least common multiple gives when the bells next ring together after minute zero.'
      ]
    },
    'perfect-number': {
      number: [
        'Original tile count',
        'input',
        'tiles',
        'The positive whole count is the reference collection against which the divisor strips are compared.'
      ],
      divisors: [
        'Proper positive divisors',
        'intermediate',
        '',
        'Every listed positive integer divides n exactly and is strictly smaller than n; for one this set is empty.'
      ],
      divisorSum: [
        'Proper-divisor tile total',
        'intermediate',
        'tiles',
        'Add one copy of each proper positive divisor, using an empty sum of zero for one.'
      ],
      balance: [
        'Strip total minus original count',
        'output',
        'tiles',
        'Negative is deficient, zero is perfect, and positive is abundant.'
      ],
      divisorCount: [
        'Proper-divisor strip count',
        'intermediate',
        'strips',
        'There is one strip for each proper positive divisor.'
      ],
      classification: [
        'Comparison of exact tile totals',
        'output',
        '',
        'The labels deficient, perfect and abundant state whether the proper-divisor sum is below, equal to or above n.'
      ],
      output: [
        'Proper-divisor tile total',
        'output',
        'tiles',
        'The primary result is the exact sum of proper positive divisors, rather than a yes-or-no perfection flag.'
      ]
    }
  };
  const roles = ['input', 'intermediate', 'output'];
  const stories = Object.entries(specs).map(([slug, spec]) => {
    const calculation = spec.stages.map(([label, template, description], i) => ({
      role: roles[i],
      label,
      template,
      description
    }));
    return {
      id: 'story:number-extension:' + slug,
      slug,
      scene: slug + '-number-extension-scene',
      unit: spec.unit,
      title: spec.title,
      question: spec.title,
      eyebrow: 'Exact counts, visible connections',
      presentation: {
        compact: true,
        controlHint:
          'Move a whole-number control, then follow its exact value through the calculation into the highlighted marks.'
      },
      summary: spec.summary,
      context: spec.context,
      variables: spec.variables,
      parameters: spec.parameters,
      timeline: {
        key: spec.variables[0].key,
        from: spec.variables[0].min,
        to: spec.variables[0].max,
        durationMs: 18000
      },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the declared construction',
          body: spec.context,
          formula: spec.formula,
          focusLabel: 'The declared construction',
          focusDescription: spec.summary
        },
        ...calculation.map((stage, i) => ({
          id: stage.role,
          from: (i + 1) / 4,
          to: (i + 2) / 4,
          focus: stage.role,
          title: stage.label,
          body: stage.description,
          formula: stage.template,
          focusLabel: stage.label,
          focusDescription: stage.description
        }))
      ],
      calculation,
      assumptions: spec.assumptions,
      sourceRefs: spec.sourceRefs,
      conclusion: spec.summary
    };
  });
  const quantities = Object.fromEntries(
    Object.entries(quantitySpecs).map(([slug, entries]) => [
      slug,
      Object.fromEntries(
        Object.entries(entries).map(([key, [label, role, unit, description]]) => [
          key,
          { label, role, unit, description }
        ])
      )
    ])
  );
  const links = Object.fromEntries(
    stories.map(story => [
      story.slug,
      {
        variableKey: story.variables[0].key,
        symbol: story.variables[0].symbol,
        variableLabel: story.variables[0].label,
        unit: story.variables[0].unit,
        effectLabel: story.summary,
        steps: story.steps.map(step => ({
          focus: step.focus,
          label: step.focusLabel,
          description: step.focusDescription
        }))
      }
    ])
  );
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }
  freeze({ stories, quantities, links });
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(story => story.slug === slug) || null,
    find: id => stories.find(story => story.id === id) || null,
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null)
  });
});
