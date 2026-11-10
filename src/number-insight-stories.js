/* Original number/measurement stories. No independent state, clocks or controls. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberInsightStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const variable = (key, symbol, label, value, min, max, step, unit, discrete = false) => ({
    key,
    symbol,
    label,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {}),
    value
  });
  const specs = {
    'irrational-square-root': {
      title: 'How long is the brace across a square frame?',
      unit: 'm',
      context:
        'A maker builds a square display frame with side s metres. Its diagonal brace has length d=s√2. Choose a finite rational approximation p/q and compare the estimated brace with the true diagonal on the same length scale.',
      summary:
        'The geometry fixes an exact irrational ratio. A finite fraction can approximate that ratio closely while remaining a different number.',
      variables: [
        variable('side', 's', 'Square side s', 1, 0.5, 3, 0.05, 'm'),
        variable('refinement', 'k', 'Rational approximation k', 3, 1, 8, 1, 'choice', true)
      ],
      formula: 'd=s\\sqrt{2},\\quad h=s\\frac{p}{q},\\quad p^2-2q^2\\in\\{-1,1\\}.',
      stages: [
        [
          'Set the square side',
          's = {{side}} m; s² ≈ {{sideSquared}} m²',
          'The same side sets the width and height of the square. Its diagonal is the hypotenuse of a right triangle with two equal legs.'
        ],
        [
          'Estimate a length with a rational ratio',
          'p/q = {{numerator}}/{{denominator}} ≈ {{approximation}}; h ≈ {{estimatedDiagonal}} m',
          'The whole-number choice selects one convergent of the continued fraction. Gold shows the corresponding length estimate, using that rational ratio on the same fixed metre scale.'
        ],
        [
          'Read the diagonal and the error',
          'd ≈ {{output}} m; h − d ≈ {{signedError}} m',
          'Green shows the actual geometric diagonal. A tiny signed error may be smaller than the drawing resolution. The separate parity proof in the card, rather than the finite picture, establishes irrationality.'
        ]
      ],
      assumptions: [
        'The square is Euclidean, its side is 0.5–3 metres, and both drawing axes use equal metre scales. Eight exact rational convergents are selectable. Printed roots and lengths are rounded. Finite approximations do not establish irrationality; the card includes the parity contradiction.'
      ],
      quantities: {
        side: ['Square side', 'input', 'm', 'The same side controls both square dimensions.'],
        refinement: [
          'Convergent choice',
          'input',
          'choice',
          'An integer selects one of eight finite rational approximations.'
        ],
        root: [
          'Exact diagonal ratio',
          'reference',
          '',
          'The exact constant √2 has a rounded decimal reading.'
        ],
        numerator: [
          'Convergent numerator',
          'intermediate',
          '',
          'The positive integer p is the selected fraction numerator.'
        ],
        denominator: [
          'Convergent denominator',
          'intermediate',
          '',
          'The positive integer q is the selected fraction denominator.'
        ],
        approximation: [
          'Rational ratio p/q',
          'intermediate',
          '',
          'This finite fraction differs from the irrational constant.'
        ],
        estimatedDiagonal: [
          'Estimated brace length',
          'intermediate',
          'm',
          'Multiply the side by the finite fraction.'
        ],
        diagonal: [
          'Geometric diagonal',
          'output',
          'm',
          'The actual diagonal equals the side times √2.'
        ],
        sideSquared: [
          'One side squared',
          'input',
          'm²',
          'The side square is one leg-square contribution.'
        ],
        diagonalSquared: [
          'Diagonal squared',
          'output',
          'm²',
          'The two equal leg squares add to the diagonal square.'
        ],
        signedError: [
          'Signed length error',
          'intermediate',
          'm',
          'Estimated diagonal minus the exact geometric diagonal.'
        ],
        error: [
          'Absolute length error',
          'intermediate',
          'm',
          'Magnitude of the estimate’s length error.'
        ],
        pellResidual: [
          'Exact squared integer residual',
          'intermediate',
          '',
          'The shown integer expression is ±1, not zero.'
        ],
        output: [
          'Geometric diagonal',
          'output',
          'm',
          'The primary output is the actual diagonal, not its finite approximation.'
        ]
      }
    },
    'golden-ratio': {
      title: 'Can a panel keep its proportions after a square is removed?',
      unit: 'm',
      context:
        'A designer chooses a short side s for a golden rectangular panel. Remove an s-by-s square. The remaining rectangle, rotated a quarter turn, has the same long-to-short ratio φ. Compare that exact rectangle with a finite Fibonacci-ratio candidate.',
      summary:
        'The self-similar rectangle solves φ²=φ+1. Consecutive Fibonacci ratios approach that constant, but a finite ratio is still only an approximation.',
      variables: [
        variable('shortSide', 's', 'Short side s', 1, 0.5, 3, 0.05, 'm'),
        variable('term', 'k', 'Fibonacci index k', 5, 2, 12, 1, 'index', true)
      ],
      formula:
        '\\varphi=\\frac{1+\\sqrt5}{2},\\quad L=\\varphi s,\\quad \\frac{L}{s}=\\frac{s}{L-s}.',
      stages: [
        [
          'Choose one physical length',
          's = {{shortSide}} m; φ ≈ {{phi}}',
          'The short side sets the square to remove. The long side is φ times that same length.'
        ],
        [
          'Remove the square',
          'L ≈ {{longSide}} m; L − s ≈ {{remainder}} m',
          'The cyan square has both dimensions equal to s. The remaining strip has sides s and L−s, so rotating it gives the original aspect ratio.'
        ],
        [
          'Compare a finite candidate',
          'F(k+1)/F(k) = {{following}}/{{fibonacci}} ≈ {{approximation}}',
          'The gold width comes from consecutive Fibonacci numbers. Its ratio error is shown separately; the exact green rectangle retains the self-similar ratio regardless of the chosen approximation.'
        ]
      ],
      assumptions: [
        'The short side is 0.5–3 metres and the golden ratio is the root greater than one of φ²=φ+1. Indices 2–12 use F(1)=F(2)=1. Drawing lengths have a fixed metre scale; decimals are approximations. This ideal panel does not imply aesthetic superiority or a claim about natural shapes.'
      ],
      quantities: {
        shortSide: [
          'Short panel side',
          'input',
          'm',
          'This length is also the side of the removed square.'
        ],
        term: [
          'Fibonacci index',
          'input',
          'index',
          'A whole index chooses consecutive Fibonacci numbers.'
        ],
        phi: [
          'Golden ratio',
          'reference',
          '',
          'The exact positive root greater than one has a rounded decimal reading.'
        ],
        longSide: ['Long panel side', 'output', 'm', 'The long side is φ times the short side.'],
        remainder: [
          'Remaining strip width',
          'intermediate',
          'm',
          'Subtract the square side from the long side.'
        ],
        remainingRatio: [
          'Rotated remainder ratio',
          'output',
          '',
          'The ratio s/(L−s) equals φ in the ideal geometry.'
        ],
        fibonacci: [
          'Fibonacci number F(k)',
          'intermediate',
          '',
          'The selected positive Fibonacci number is the denominator.'
        ],
        following: [
          'Next Fibonacci number',
          'intermediate',
          '',
          'The following Fibonacci number is the numerator.'
        ],
        approximation: [
          'Finite Fibonacci ratio',
          'intermediate',
          '',
          'The ratio of consecutive integers approximates φ.'
        ],
        estimatedLongSide: [
          'Candidate panel width',
          'intermediate',
          'm',
          'The gold length uses the finite ratio times the short side.'
        ],
        ratioError: [
          'Signed ratio error',
          'intermediate',
          '',
          'Subtract φ from the finite Fibonacci ratio.'
        ],
        area: ['Panel area', 'output', 'm²', 'Multiply long and short sides to obtain panel area.'],
        output: [
          'Long panel side',
          'output',
          'm',
          'The primary output is the exact golden-panel long side, displayed approximately.'
        ]
      }
    },
    'circle-measurement': {
      title: 'How much edging and covering does a round table need?',
      unit: 'm²',
      context:
        'A maker chooses a round table radius r. The edge band follows the circle boundary; a surface covering fills the disk. Follow the same radius through diameter, circumference and area, keeping length and area in their own units.',
      summary:
        'Changing radius scales diameter and circumference linearly, while the surface area grows with its square. Circumference divided by diameter remains π.',
      variables: [variable('radius', 'r', 'Table radius r', 2, 0.25, 4, 0.05, 'm')],
      formula: 'd=2r,\\quad C=2\\pi r,\\quad A=\\pi r^2,\\quad C/d=\\pi.',
      stages: [
        [
          'Set a center-to-edge distance',
          'r = {{radius}} m; d ≈ {{diameter}} m',
          'Cyan reaches from the center to the edge. The full diameter crosses the center and is twice that distance.'
        ],
        [
          'Measure the edge band',
          'C ≈ {{circumference}} m; C/d ≈ {{ratio}}',
          'Gold measures the circumference on a fixed metre bar. Changing radius changes this length while leaving the circumference-to-diameter ratio unchanged.'
        ],
        [
          'Cover the disk',
          'A ≈ π × {{radius}}² ≈ {{output}} m²',
          'The green disk uses equal fixed metre axes. Doubling the radius doubles the edge band length but requires four times as much surface covering.'
        ]
      ],
      assumptions: [
        'The table is an ideal Euclidean disk of radius 0.25–4 metres. Circumference and diameter are lengths; the filled disk has area. The disk uses a fixed equal-metre scale and the edge bar uses a separate fixed 0–26 metre scale. Material thickness, joins and waste are outside this calculation; displayed decimals are approximate.'
      ],
      quantities: {
        radius: ['Table radius', 'input', 'm', 'The center-to-edge distance sets the whole disk.'],
        diameter: [
          'Table diameter',
          'intermediate',
          'm',
          'The full center-crossing distance is twice the radius.'
        ],
        circumference: [
          'Edge-band length',
          'intermediate',
          'm',
          'The circle boundary has length 2πr.'
        ],
        area: ['Surface covering', 'output', 'm²', 'The disk interior has area πr².'],
        pi: [
          'Circle constant pi',
          'reference',
          '',
          'The constant C/d is the same for every Euclidean circle.'
        ],
        ratio: [
          'Circumference-to-diameter ratio',
          'intermediate',
          '',
          'The quotient of two lengths is dimensionless and equals π.'
        ],
        output: [
          'Surface covering',
          'output',
          'm²',
          'The primary output is disk area rather than edge length.'
        ]
      }
    },
    'floor-ceiling': {
      title: 'How many containers must hold this batch?',
      unit: 'containers',
      context:
        'A workshop has v litres of liquid and containers of capacity c litres. Divide volume by capacity to get x. Floor counts the completely full containers; ceiling counts all containers needed, including a final partly filled one.',
      summary:
        'A continuous volume can require a whole count. Ceiling adds a container only when some liquid remains after the full containers.',
      variables: [
        variable('amount', 'v', 'Liquid volume v', 13.5, 0, 30, 0.25, 'L'),
        variable('capacity', 'c', 'Container capacity c', 4, 1, 6, 0.25, 'L')
      ],
      formula: 'x=\\frac vc,\\quad f=\\lfloor x\\rfloor,\\quad N=\\lceil x\\rceil.',
      stages: [
        [
          'Compare volume with one capacity',
          'v = {{amount}} L; c = {{capacity}} L; x ≈ {{quotient}}',
          'Divide two litre measurements. The quotient is a dimensionless number of container capacities, which can be fractional.'
        ],
        [
          'Fill as many containers as possible',
          'f = ⌊x⌋ = {{full}}; liquid left ≈ {{remainder}} L',
          'Cyan containers are completely full. Floor chooses the greatest integer no larger than the exact input quotient.'
        ],
        [
          'Include the partial container if needed',
          'N = ⌈x⌉ = {{output}}; spare capacity ≈ {{spare}} L',
          'A gold partial container appears exactly when liquid remains. At a whole quotient no extra container is required. The graph shows horizontal steps with explicit included and excluded endpoints.'
        ]
      ],
      assumptions: [
        'The batch is 0–30 litres and each identical container holds 1–6 litres. Entered decimal measurements are treated as exact, without measurement uncertainty or a safety margin. Counts use the unrounded quotient. This storage story uses nonnegative quantities; floor and ceiling are defined for negative real numbers in the index.'
      ],
      quantities: {
        amount: [
          'Liquid volume',
          'input',
          'L',
          'The continuous volume fills the pictured containers in order.'
        ],
        capacity: [
          'One container capacity',
          'input',
          'L',
          'The same capacity applies to every container.'
        ],
        quotient: [
          'Capacity quotient',
          'intermediate',
          '',
          'Volume divided by capacity need not be an integer.'
        ],
        full: [
          'Completely full containers',
          'intermediate',
          'containers',
          'Floor counts only complete container capacities.'
        ],
        needed: [
          'All containers needed',
          'output',
          'containers',
          'Ceiling includes the partial container exactly when one is needed.'
        ],
        remainder: [
          'Liquid after the full containers',
          'intermediate',
          'L',
          'The remaining volume occupies at most one partial container.'
        ],
        spare: [
          'Unused capacity',
          'output',
          'L',
          'Total capacity of the needed containers minus the liquid volume.'
        ],
        output: [
          'All containers needed',
          'output',
          'containers',
          'The primary output is the least whole count with enough total capacity.'
        ]
      }
    }
  };
  const roles = ['input', 'intermediate', 'output'];
  const stories = Object.entries(specs).map(([slug, s]) => {
    const calculation = s.stages.map(([label, template, description], i) => ({
      role: roles[i],
      label,
      template,
      description
    }));
    return {
      id: 'story:number-insight:' + slug,
      slug,
      scene: slug + '-number-insight-scene',
      unit: s.unit,
      title: s.title,
      question: s.title,
      eyebrow: 'Exact ideas, visible measurements',
      presentation: {
        compact: true,
        controlHint:
          'Change one quantity and follow its highlighted value through the calculation into the measured shape.'
      },
      summary: s.summary,
      context: s.context,
      variables: s.variables.map(({ value, ...v }) => v),
      parameters: Object.fromEntries(s.variables.map(v => [v.key, v.value])),
      timeline: {
        key: s.variables[0].key,
        from: s.variables[0].min,
        to: s.variables[0].max,
        durationMs: 18000
      },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the declared construction',
          body: s.context,
          formula: s.formula,
          focusLabel: 'The declared construction',
          focusDescription: s.summary
        },
        ...calculation.map((c, i) => ({
          id: c.role,
          from: (i + 1) / 4,
          to: (i + 2) / 4,
          focus: c.role,
          title: c.label,
          body: c.description,
          formula: c.template,
          focusLabel: c.label,
          focusDescription: c.description
        }))
      ],
      calculation,
      assumptions: s.assumptions,
      sourceRefs: ['source:number-insights:' + slug],
      conclusion: s.summary
    };
  });
  const quantities = Object.fromEntries(
    Object.entries(specs).map(([slug, s]) => [
      slug,
      Object.fromEntries(
        Object.entries(s.quantities).map(([key, [label, role, unit, description]]) => [
          key,
          { label, role, unit, description }
        ])
      )
    ])
  );
  const links = Object.fromEntries(
    stories.map(s => [
      s.slug,
      {
        variableKey: s.variables[0].key,
        symbol: s.variables[0].symbol,
        variableLabel: s.variables[0].label,
        unit: s.variables[0].unit,
        effectLabel: s.summary,
        steps: s.steps.map(x => ({
          focus: x.focus,
          label: x.focusLabel,
          description: x.focusDescription
        }))
      }
    ])
  );
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze({ stories, quantities, links });
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(s => s.slug === slug) || null,
    find: id => stories.find(s => s.id === id) || null,
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null)
  });
});
