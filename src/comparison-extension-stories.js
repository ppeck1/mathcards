/* Original joint-spread and rank-comparison stories; the host owns pacing and state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasComparisonExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    'covariance-matrix': {
      title: 'How do horizontal and vertical positioning errors vary together?',
      unit: 'mm²',
      context:
        'A laser jig has five constructed pairs of horizontal and vertical positioning errors, both measured in millimetres. Change the horizontal amplitude a, shared amplitude b or residual amplitude c. The same five paired marks change the covariance matrix and its descriptive ellipse.',
      summary:
        'Center the paired errors, combine their squared and cross-products into a covariance matrix, then follow its diagonal sum and principal spreads into the ellipse.',
      parameters: { shared: 0.75, horizontal: 1, residual: 0.5 },
      variables: [
        {
          key: 'shared',
          symbol: 'b',
          label: 'Shared error amplitude b',
          unit: 'mm',
          min: -2,
          max: 2,
          step: 0.05
        },
        {
          key: 'horizontal',
          symbol: 'a',
          label: 'Horizontal error amplitude a',
          unit: 'mm',
          min: 0.25,
          max: 2,
          step: 0.05
        },
        {
          key: 'residual',
          symbol: 'c',
          label: 'Residual error amplitude c',
          unit: 'mm',
          min: 0,
          max: 2,
          step: 0.05
        }
      ],
      formula:
        'S=\\begin{bmatrix}S_{xx}&S_{xy}\\\\S_{xy}&S_{yy}\\end{bmatrix},\\quad \\operatorname{tr}(S)=S_{xx}+S_{yy}.',
      stages: [
        [
          'Move the paired errors',
          'a = {{horizontal}} mm; b = {{shared}} mm; c = {{residual}} mm',
          'Each dot keeps its horizontal and vertical error together. Both axes use the same millimetre scale, so a tilt has a direct geometric meaning.'
        ],
        [
          'Read the covariance matrix',
          'Sxx ≈ {{sxx}}; Sxy ≈ {{sxy}}; Syy ≈ {{syy}} mm²',
          'The diagonal entries describe spread on each axis. The cross-product entry determines how the two centered directions vary together.'
        ],
        [
          'Follow combined spread into principal radii',
          'tr(S) ≈ {{sxx}} + {{syy}} = {{output}} mm²; r₁ ≈ {{majorRadius}} mm; r₂ ≈ {{minorRadius}} mm',
          'The trace adds the two axis variances. Square roots of the eigenvalues give the descriptive ellipse radii; when the residual vanishes, one radius becomes zero and the shape is a line.'
        ]
      ],
      assumptions: [
        'These five pairs use two fixed, centered orthogonal numerical patterns. Sample covariance divides centered products by n−1=4. The ellipse is the one-standard-deviation covariance shape, not a confidence region, prediction region or a promise to contain the five points. No Gaussian law or empirical causal claim is supplied. Its geometric axes use the same physical units. A zero residual gives an exact rank-one construction; positive residuals that cannot be represented faithfully are reported as a numerical-precision limit.'
      ],
      sourceRefs: ['source:comparison-extensions:covariance-matrix']
    },
    'wilcoxon-signed-rank': {
      title: 'Do the paired time differences keep their direction after ranking their sizes?',
      unit: '',
      context:
        'A packing workshop compares methods A and B on five constructed pairs. Method A takes 10 minutes in each pair; method B adds that pair’s difference. Change the fifth difference d₅ or choose a fixed pattern for the first four pairs. Rank the nonzero difference sizes while keeping their signs.',
      summary:
        'Omit zero differences, average ranks for tied absolute sizes, add positive and negative rank weights, then compare the observed signed total with every fair-sign assignment.',
      parameters: { lastDifference: 5, pattern: 'mixed' },
      variables: [
        {
          key: 'lastDifference',
          symbol: 'd₅',
          label: 'Fifth paired B−A time difference d₅',
          unit: 'min',
          min: -5,
          max: 5,
          step: 0.05
        }
      ],
      formula: 'T=W^{+}-W^{-},\\quad p=\\frac{m}{M},\\quad M=2^n.',
      stages: [
        [
          'Change one paired difference',
          'd₅ = {{lastDifference}} min; {{nonzeroCount}} nonzero pairs',
          'The fifth difference changes its row. Zero differences are omitted from the ranked comparison rather than assigned a rank of zero.'
        ],
        [
          'Keep the sign of each rank',
          'W⁺ = {{positiveRankSum}}; W⁻ = {{negativeRankSum}}; T = {{signedScore}}',
          'Rank the absolute nonzero sizes, average tied ranks and keep each original sign. Positive and negative rank weights form the signed total.'
        ],
        [
          'Count the inclusive two-sided tail',
          'p = {{tailCount}}/{{assignmentCount}} ≈ {{output}}',
          'Every independent fair-sign assignment is represented. Count signed totals at least as far from zero as observed, including ties; divide by all allowed assignments.'
        ]
      ],
      assumptions: [
        'The conditional null gives independent equally likely signs to the nonzero observed magnitudes, as supplied by the declared symmetric paired-difference model. Zero differences use the Wilcoxon omission convention, not the Pratt convention. Equal absolute differences receive average ranks. Doubled ranks make the inclusive absolute-tail comparison exact. The first four differences stay nonzero, so this bounded view has four or five active pairs. Even its smallest two-sided p-value is at least 2/32=0.0625, above 0.05. Ranks and the finite p-value can jump at ties and zero; no smooth probability between those cases is invented. The constructed pairs are not an experiment or a causal finding.'
      ],
      sourceRefs: ['source:comparison-extensions:signed-rank']
    },
    'mann-whitney': {
      title: 'How often does an A score outrank a B score?',
      unit: '',
      context:
        'Three workshop learners using instruction A have constructed challenge scores 1, 3 and v; three using B score 2, 4 and 6. Move the third A score v, then compare all nine A-versus-B pairs. A positive calibration multiplier k moves every displayed score together while preserving their order.',
      summary:
        'Pool the six scores, average tied ranks and find A’s rank sum. Its U statistic also counts A wins with half weight for ties. Compare it with every three-versus-three label allocation.',
      parameters: { lastScore: 5, scale: 1 },
      variables: [
        {
          key: 'lastScore',
          symbol: 'v',
          label: 'Third A learner’s base score v',
          unit: 'points',
          min: 0,
          max: 7,
          step: 0.05
        },
        {
          key: 'scale',
          symbol: 'k',
          label: 'Positive calibration multiplier k',
          unit: 'ratio',
          min: 0.5,
          max: 2,
          step: 0.05
        }
      ],
      formula:
        'n_A=3,\\quad n_B=3,\\quad U_A=R_A-6,\\quad \\theta=\\frac{U_A}{n_A n_B},\\quad p=\\frac{m}{M}.',
      stages: [
        [
          'Change a score, or its common calibration',
          'v = {{lastScore}} points; k = {{scale}}; n_A = {{sampleSizeA}}; n_B = {{sampleSizeB}}',
          'The third A score changes its row of pair comparisons. Multiplying all scores by the same positive factor changes positions and readings while retaining ranks.'
        ],
        [
          'Connect ranks with pair comparisons',
          'R_A = {{rankSumA}}; U_A = {{uA}}; U_B = {{uB}}; θ ≈ {{probabilitySuperiority}}',
          'One A win contributes one, a tie contributes one-half and a loss contributes zero. A’s total equals its rank sum minus six; its share divides by the nine comparisons.'
        ],
        [
          'Compare every allowed label allocation',
          'p = {{tailCount}}/{{allocationCount}} ≈ {{output}}',
          'Under the exchangeable-label null, count U values at least as far from the center 4.5 as observed. Include ties and divide by all twenty allocations.'
        ]
      ],
      assumptions: [
        'The reference null treats labels as exchangeable under equal score distributions, with three independent observations in each group. All twenty fixed-size allocations of the same pooled scores are enumerated. Tied scores receive pooled average ranks; pair ties have half weight. The stated two-sided convention compares absolute distance from 4.5 and includes ties. This is not a general test of medians without additional common-shape assumptions. θ here is the descriptive share of A-versus-B wins including half ties. The selected scores and groups are constructed, not empirical evidence or a causal result. A positive common calibration preserves order; loss of represented distinctions is a numerical-precision limit rather than a new tie.'
      ],
      sourceRefs: ['source:comparison-extensions:mann-whitney']
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
      id: 'story:comparison-extension:' + slug,
      slug,
      scene: slug + '-comparison-scene',
      unit: spec.unit,
      title: spec.title,
      eyebrow: 'Read spread, preserve order',
      presentation: {
        compact: true,
        controlHint:
          'Follow the highlighted quantity from the story through its calculation into the same shape.'
      },
      summary: spec.summary,
      context: spec.context,
      question: spec.title,
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
          title: 'Begin with the declared comparison',
          body: spec.context,
          formula: spec.formula,
          focusLabel: 'The declared comparison',
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
  const q = (label, role, unit, description) => ({ label, role, unit, description });
  const quantities = {
    'covariance-matrix': {
      shared: q(
        'Shared error amplitude',
        'input',
        'mm',
        'The signed coefficient of the shared centered pattern changes the tilt and cross-product entry.'
      ),
      horizontal: q(
        'Horizontal error amplitude',
        'input',
        'mm',
        'The positive amplitude sets the horizontal errors on the same physical scale as the vertical errors.'
      ),
      residual: q(
        'Residual error amplitude',
        'input',
        'mm',
        'This orthogonal residual pattern widens the second principal direction.'
      ),
      xValues: q(
        'Five horizontal errors',
        'input',
        'mm',
        'The horizontal coordinate of each paired positioning error.'
      ),
      yValues: q(
        'Five vertical errors',
        'input',
        'mm',
        'The vertical error remains paired with its own horizontal error.'
      ),
      rows: q(
        'Five paired positioning errors',
        'input',
        '',
        'Each ordinary numbered row keeps both coordinates of one constructed error.'
      ),
      meanX: q(
        'Mean horizontal error',
        'reference',
        'mm',
        'The centered construction has mean horizontal error zero.'
      ),
      meanY: q(
        'Mean vertical error',
        'reference',
        'mm',
        'The centered construction has mean vertical error zero.'
      ),
      count: q(
        'Paired error count',
        'reference',
        'pairs',
        'The sample covariance matrix uses five constructed coordinate pairs.'
      ),
      degreesFreedom: q(
        'Sample-product divisor',
        'reference',
        '',
        'Five centered pairs give divisor n−1=4.'
      ),
      sxx: q(
        'Horizontal sample variance',
        'intermediate',
        'mm²',
        'The horizontal diagonal entry is the centered squared horizontal errors divided by four.'
      ),
      sxy: q(
        'Cross-axis sample covariance',
        'intermediate',
        'mm²',
        'The off-diagonal entry sums the paired centered cross-products and divides by four.'
      ),
      syy: q(
        'Vertical sample variance',
        'intermediate',
        'mm²',
        'The vertical diagonal entry combines the shared and residual squared errors.'
      ),
      matrix: q(
        'Sample covariance matrix',
        'intermediate',
        'mm²',
        'The two diagonal variances and repeated off-diagonal covariance describe joint spread.'
      ),
      trace: q(
        'Total sample variance',
        'output',
        'mm²',
        'The trace adds the horizontal and vertical sample variances.'
      ),
      determinant: q(
        'Covariance determinant',
        'intermediate',
        'mm⁴',
        'The determinant is the product of the two nonnegative eigenvalues.'
      ),
      lambdaMajor: q(
        'Larger covariance eigenvalue',
        'intermediate',
        'mm²',
        'Its square root gives the longer principal radius.'
      ),
      lambdaMinor: q(
        'Smaller covariance eigenvalue',
        'intermediate',
        'mm²',
        'Its square root gives the shorter principal radius, zero in the rank-one construction.'
      ),
      angleMajor: q(
        'Principal-direction angle',
        'intermediate',
        'rad',
        'When a stable unique principal direction exists, this angle orients the longer radius on equal-scale axes; a circle has no unique direction.'
      ),
      majorRadius: q(
        'Longer principal radius',
        'output',
        'mm',
        'The square root of the larger covariance eigenvalue.'
      ),
      minorRadius: q(
        'Shorter principal radius',
        'output',
        'mm',
        'The square root of the smaller covariance eigenvalue.'
      ),
      rank: q(
        'Covariance matrix rank',
        'output',
        '',
        'The rank is one when the residual vanishes and two in a represented positive-residual construction.'
      ),
      ellipseArea: q(
        'Descriptive ellipse area',
        'output',
        'mm²',
        'The geometric area is pi times the product of the two principal radii, without a coverage claim.'
      ),
      output: q(
        'Total sample variance',
        'output',
        'mm²',
        'Add the two diagonal entries of the sample covariance matrix.'
      )
    },
    'wilcoxon-signed-rank': {
      lastDifference: q(
        'Fifth paired time difference',
        'input',
        'min',
        'Change the fifth method-B time relative to its paired method-A time of ten minutes.'
      ),
      pattern: q(
        'First-four difference pattern',
        'input',
        '',
        'Choose one declared construction for the first four pairs.'
      ),
      differences: q(
        'Five paired differences',
        'input',
        'min',
        'Subtract A from B within each pair before comparing pairs.'
      ),
      aTimes: q(
        'Method-A paired times',
        'reference',
        'min',
        'Each constructed method-A time is ten minutes; subtract it from its paired method-B time.'
      ),
      bTimes: q(
        'Method-B paired times',
        'input',
        'min',
        'Each method-B time is ten minutes plus that pair’s declared difference.'
      ),
      absoluteDifferences: q(
        'Absolute difference sizes',
        'intermediate',
        'min',
        'Absolute sizes determine ranks after zero differences are omitted.'
      ),
      ranks: q(
        'Ranks with omitted zero positions',
        'intermediate',
        '',
        'A zero difference has no rank; tied nonzero absolute sizes receive average ranks.'
      ),
      activeRanks: q(
        'Nonzero absolute-difference ranks',
        'intermediate',
        '',
        'These ranks belong only to the active nonzero pairs.'
      ),
      activeRows: q(
        'Active paired differences and ranks',
        'intermediate',
        '',
        'Each active row retains the original pair number, size and sign.'
      ),
      positiveRankSum: q(
        'Positive rank-weight sum',
        'intermediate',
        '',
        'Add the absolute-size ranks whose original differences are positive.'
      ),
      negativeRankSum: q(
        'Negative rank-weight sum',
        'intermediate',
        '',
        'Add the ranks whose original differences are negative.'
      ),
      rankTotal: q(
        'Total rank weight',
        'reference',
        '',
        'The nonzero ranks total n(n+1)/2, including averaged ties.'
      ),
      signedScore: q(
        'Signed rank-weight total',
        'intermediate',
        '',
        'Subtract the negative rank sum from the positive rank sum.'
      ),
      nonzeroCount: q(
        'Active nonzero pair count',
        'intermediate',
        'pairs',
        'Four or five pairs remain after the selected fifth zero is omitted.'
      ),
      zeroCount: q(
        'Omitted zero-difference count',
        'reference',
        'pairs',
        'A fifth difference equal to zero removes that pair from ranking and sign enumeration.'
      ),
      assignmentCount: q(
        'Allowed sign assignments',
        'reference',
        'assignments',
        'There are two independent sign choices for each active pair.'
      ),
      tailCount: q(
        'Inclusive two-sided tail count',
        'intermediate',
        'assignments',
        'Count assignments whose signed total is at least as far from zero as the observed signed total.'
      ),
      distribution: q(
        'Complete sign-reference distribution',
        'reference',
        '',
        'Every fair-sign assignment of the observed nonzero magnitudes is included.'
      ),
      signedScores: q(
        'All reference signed totals',
        'reference',
        '',
        'These totals retain repeated values from distinct sign assignments.'
      ),
      pValue: q(
        'Two-sided signed-rank p-value',
        'output',
        '',
        'Divide the inclusive absolute-tail count by all allowed sign assignments.'
      ),
      output: q(
        'Two-sided signed-rank p-value',
        'output',
        '',
        'The exact conditional fair-sign tail fraction is not a probability that the null is true.'
      )
    },
    'mann-whitney': {
      lastScore: q(
        'Third A learner’s base score',
        'input',
        'points',
        'Changing this score changes its A-versus-B comparison row and pooled rank.'
      ),
      scale: q(
        'Positive common calibration',
        'input',
        'ratio',
        'Every score is multiplied by this same positive value, preserving represented order.'
      ),
      rawA: q(
        'Three A base scores',
        'input',
        'points',
        'The A scores before common calibration are one, three and the adjustable score.'
      ),
      rawB: q(
        'Three B base scores',
        'reference',
        'points',
        'The B base scores are two, four and six.'
      ),
      groupA: q(
        'Calibrated A scores',
        'input',
        'points',
        'These three displayed scores have the common positive multiplier applied.'
      ),
      groupB: q(
        'Calibrated B scores',
        'input',
        'points',
        'The same multiplier applies to B as to A.'
      ),
      pooled: q(
        'Pooled score ranks',
        'intermediate',
        '',
        'All six scores are ranked together, averaging ties.'
      ),
      rankA: q('A’s pooled ranks', 'intermediate', '', 'Each A score keeps its own pooled rank.'),
      rankB: q('B’s pooled ranks', 'intermediate', '', 'Each B score keeps its own pooled rank.'),
      rankSumA: q(
        'A’s rank sum',
        'intermediate',
        '',
        'Add the three pooled ranks assigned to group A.'
      ),
      uA: q(
        'A’s pair-comparison total',
        'intermediate',
        '',
        'A win contributes one, a tie one-half and a loss zero.'
      ),
      uB: q(
        'B’s complementary pair total',
        'intermediate',
        '',
        'The two U totals add to the nine A-versus-B comparisons.'
      ),
      wins: q(
        'Strict A wins',
        'intermediate',
        'comparisons',
        'Count A scores strictly above their compared B score.'
      ),
      ties: q(
        'Equal-score comparisons',
        'intermediate',
        'comparisons',
        'Each equality contributes half weight to both groups.'
      ),
      pairComparisons: q(
        'Nine pair-comparison weights',
        'intermediate',
        '',
        'The three-by-three grid shows one, one-half or zero for each A-versus-B pair.'
      ),
      pairCount: q(
        'A-versus-B comparison count',
        'reference',
        'comparisons',
        'Three A scores and three B scores give nine comparisons.'
      ),
      probabilitySuperiority: q(
        'Descriptive A win share',
        'output',
        '',
        'Divide A’s win-plus-half-tie total by nine; this is the displayed pair share.'
      ),
      allocationCount: q(
        'Allowed three-versus-three allocations',
        'reference',
        'allocations',
        'There are twenty ways to assign three of the six pooled observations to A.'
      ),
      tailCount: q(
        'Inclusive label-reference tail count',
        'intermediate',
        'allocations',
        'Count U values at least as far from 4.5 as the observed U, including ties.'
      ),
      distribution: q(
        'Complete label-reference distribution',
        'reference',
        '',
        'Every fixed-size three-versus-three allocation of the pooled scores is retained.'
      ),
      uValues: q(
        'All reference U values',
        'reference',
        '',
        'The complete array retains repeated U values from distinct label allocations.'
      ),
      sampleSizeA: q(
        'A observation count',
        'reference',
        'readings',
        'Group A contains three independent observations under the stated model.'
      ),
      sampleSizeB: q(
        'B observation count',
        'reference',
        'readings',
        'Group B contains three independent observations under the stated model.'
      ),
      totalCount: q(
        'Pooled observation count',
        'reference',
        'readings',
        'The pooled comparison uses six constructed scores.'
      ),
      pValue: q(
        'Two-sided Mann–Whitney p-value',
        'output',
        '',
        'Divide the inclusive centered-U tail count by all twenty exchangeable allocations.'
      ),
      output: q(
        'Two-sided Mann–Whitney p-value',
        'output',
        '',
        'The conditional label-reference tail fraction does not say that a hypothesis is true.'
      )
    }
  };
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
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
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
