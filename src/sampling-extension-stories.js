/* Three original inference stories; the shared host owns controls and time. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSamplingExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    'student-mean-interval': {
      title: 'How much uncertainty remains when the spread is estimated too?',
      unit: 'mm',
      context:
        'A calibration workshop measures cutting errors and records a sample mean x̄ and sample standard deviation s. The population spread is unknown. Keep those entered summaries visible while changing the number n of independent readings.',
      summary:
        'Estimate the standard error from s and n, use n−1 degrees of freedom to find a Student critical value, then extend the resulting margin on both sides of the observed mean.',
      parameters: { sampleSize: 10, mean: 0.5, sampleSpread: 1 },
      variables: [
        {
          key: 'sampleSize',
          symbol: 'n',
          label: 'Independent readings n',
          unit: 'readings',
          min: 2,
          max: 31,
          step: 1,
          discrete: true
        },
        {
          key: 'mean',
          symbol: 'x̄',
          label: 'Observed mean error x̄',
          unit: 'mm',
          min: -4,
          max: 4,
          step: 0.05
        },
        {
          key: 'sampleSpread',
          symbol: 's',
          label: 'Sample standard deviation s',
          unit: 'mm',
          min: 0.25,
          max: 2,
          step: 0.05
        }
      ],
      formula: 'h=t_{0.975,n-1}\\frac{s}{\\sqrt{n}},\\quad I=[\\bar{x}-h,\\bar{x}+h].',
      stages: [
        [
          'Enter the observed summaries',
          'n = {{sampleSize}}; x̄ = {{mean}} mm; s = {{sampleSpread}} mm',
          'The cyan mean locates the interval. The sample spread s supplies its estimated uncertainty.'
        ],
        [
          'Find the standard error and Student multiplier',
          'SE ≈ {{standardError}} mm; ν = {{degreesFreedom}}; t* ≈ {{criticalValue}}',
          'The standard error is s/√n. The Student multiplier also changes with n−1 degrees of freedom.'
        ],
        [
          'Extend the margin around the observed mean',
          'h ≈ {{output}} mm; I ≈ [{{lower}}, {{upper}}] mm',
          'The gold interval extends one margin from either side of the cyan mean.'
        ]
      ],
      assumptions: [
        'The fixed 95% procedure assumes independent, identically normal readings with one unknown mean and unknown positive population variance. s is the sample standard deviation with denominator n−1. Changing n holds the entered summaries fixed and does not generate a sample. Repeated intervals cover the fixed population mean μ with probability 0.95 under this model; a computed interval is not a 95% posterior probability or a prediction interval. μ has no supplied numerical location. The critical value is evaluated numerically.'
      ],
      sourceRefs: ['source:sampling-extensions:student-interval']
    },
    'randomization-distribution': {
      title: 'Could the allocation alone produce a score difference this large?',
      unit: '',
      context:
        'Eight learners complete a workshop challenge. Their constructed scores are 1, 2, 3, 4, 5, 6, 7 and v points. Four receive instruction A and four instruction B. Change the eighth score v, or select the observed allocation, then compare that observed B−A mean difference with every possible four-versus-four allocation.',
      summary:
        'Hold all eight scores fixed under the sharp no-effect null, enumerate the 70 equally likely allocations, and count differences at least as far from zero as the observed difference. Divide that tail count by 70.',
      parameters: { lastValue: 8, allocation: 'separated' },
      variables: [
        {
          key: 'lastValue',
          symbol: 'v',
          label: 'Eighth learner’s score v',
          unit: 'points',
          min: 0,
          max: 10,
          step: 0.05
        }
      ],
      formula:
        'd=\\bar{y}_B-\\bar{y}_A,\\quad M=\\binom{8}{4}=70,\\quad p=\\frac{m}{M},\\quad m=\\#\\{\\text{allocations with }|D|\\ge|d|\\}.',
      stages: [
        [
          'Change one observed score',
          'v = {{lastValue}} points; B−A ≈ {{observedDifference}} points',
          'The eighth score changes the allocation contrasts and the observed group difference; the allocation selector identifies which four learners receive A.'
        ],
        [
          'Compare every allowed allocation',
          '{{tailCount}} of {{assignmentCount}} allocations meet the threshold',
          'Every dot is one complete four-versus-four allocation. Gold dots are at least as far from zero as the observed contrast; ties are included.'
        ],
        [
          'Read the exact tail proportion',
          'p = {{tailCount}}/{{assignmentCount}} ≈ {{output}}',
          'The proportion counts the gold dots among all 70 dots. It is a null-model tail probability, not the probability that the null hypothesis is true.'
        ]
      ],
      assumptions: [
        'The design assigns exactly four of eight units to each instruction, with all 70 allocations equally likely. Under the sharp null, each learner’s outcome is unchanged by instruction, so the same fixed scores can be evaluated for every allocation. The displayed scores and observed allocations are constructed. The two-sided rule compares absolute B−A mean differences and includes ties. For this bounded score family, equivalent algebraic comparisons retain the exact crossing thresholds without an epsilon band. No Monte Carlo draw, population-sampling claim or posterior probability is implied.'
      ],
      sourceRefs: ['source:sampling-extensions:randomization']
    },
    'one-way-anova': {
      title: 'How large are the method differences beside variation within each method?',
      unit: '',
      context:
        'A packing workshop compares three methods with three constructed timings per method. Their means are 10−g, 10 and 10+g minutes; each method has timings w minutes below its mean, at its mean and w minutes above. Move the mean gap g or the within-method offset w and watch the nine timings separate.',
      summary:
        'Separate the total squared deviation into between-method and within-method sums of squares. Divide each by its degrees of freedom, then compare the two mean squares with their F ratio.',
      parameters: { separation: 2, spread: 1 },
      variables: [
        {
          key: 'separation',
          symbol: 'g',
          label: 'Gap between method means g',
          unit: 'min',
          min: 0,
          max: 4,
          step: 0.05
        },
        {
          key: 'spread',
          symbol: 'w',
          label: 'Within-method offset w',
          unit: 'min',
          min: 0.25,
          max: 2,
          step: 0.05
        }
      ],
      formula: 'F=\\frac{\\mathrm{MSB}}{\\mathrm{MSW}}=\\frac{\\mathrm{SSB}/2}{\\mathrm{SSW}/6}.',
      stages: [
        [
          'Move means or move timings around them',
          'g = {{separation}} min; w = {{spread}} min',
          'The mean gap moves entire groups. The within-method offset moves the outer readings around each unchanged group mean.'
        ],
        [
          'Keep the two sources of variation separate',
          'SSB ≈ {{betweenSS}} min²; SSW ≈ {{withinSS}} min²',
          'Between-method deviations compare group means with the grand mean. Within-method deviations compare each timing with its own group mean.'
        ],
        [
          'Compare variation per degree of freedom',
          'F = {{betweenMS}}/{{withinMS}} ≈ {{output}}; p ≈ {{pValue}}',
          'Divide the between-method mean square by the within-method mean square. The tail probability uses an F distribution with 2 and 6 degrees of freedom.'
        ]
      ],
      assumptions: [
        'There are three groups of three constructed observations, with two between-group and six within-group degrees of freedom. The F reference distribution and displayed tail probability assume independent normal errors with a common positive variance under equal population means. The controls do not test those assumptions. The descriptive sums of squares remain defined without the inferential model. The tail probability does not establish causality, give the probability of equal means, or identify which pair differs.'
      ],
      sourceRefs: ['source:sampling-extensions:anova']
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
      id: 'story:sampling-extension:' + slug,
      slug,
      scene: slug + '-sampling-scene',
      unit: s.unit,
      title: s.title,
      eyebrow: 'Separate observations from inference',
      presentation: {
        compact: true,
        controlHint:
          'Move one quantity and follow its highlight through the calculation into the same visual.'
      },
      summary: s.summary,
      context: s.context,
      question: s.title,
      variables: s.variables,
      parameters: s.parameters,
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
          title: 'Begin with the declared study',
          body: s.context,
          formula: s.formula,
          focusLabel: 'The declared study',
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
      sourceRefs: s.sourceRefs,
      conclusion: s.summary
    };
  });
  const q = (label, role, unit, description) => ({ label, role, unit, description });
  const quantities = {
    'student-mean-interval': {
      sampleSize: q(
        'Number of independent readings',
        'input',
        'readings',
        'The whole count n determines the square-root reduction and n−1 Student degrees of freedom.'
      ),
      mean: q(
        'Observed sample mean',
        'input',
        'mm',
        'The entered mean centers both interval endpoints; it is an observed summary, not the unknown population mean.'
      ),
      sampleSpread: q(
        'Sample standard deviation',
        'input',
        'mm',
        'The entered sample spread s estimates the unknown population spread.'
      ),
      degreesFreedom: q(
        'Student degrees of freedom',
        'reference',
        '',
        'The sample variance uses n−1 degrees of freedom.'
      ),
      standardError: q(
        'Estimated standard error',
        'intermediate',
        'mm',
        'Divide s by √n to estimate the uncertainty of the sample mean.'
      ),
      criticalValue: q(
        'Numerical Student critical value',
        'reference',
        '',
        'The 0.975 Student quantile uses n−1 degrees of freedom for the two-sided 95% procedure.'
      ),
      output: q(
        'Margin of error',
        'output',
        'mm',
        'Multiply estimated standard error by the Student critical value to obtain one half of the interval width.'
      ),
      lower: q(
        'Lower interval endpoint',
        'output',
        'mm',
        'Subtract the margin from the observed sample mean.'
      ),
      upper: q(
        'Upper interval endpoint',
        'output',
        'mm',
        'Add the margin to the observed sample mean.'
      ),
      interval: q(
        'Mean interval',
        'output',
        'mm',
        'The two computed endpoints bound the interval; the unknown population mean is not supplied as a point.'
      ),
      width: q('Full interval width', 'output', 'mm', 'The full interval spans twice the margin.'),
      unknownMean: q(
        'Unknown population mean',
        'reference',
        'mm',
        'No numerical value or geometric position is supplied for the unknown population mean μ.'
      )
    },
    'randomization-distribution': {
      lastValue: q(
        'Eighth learner’s score',
        'input',
        'points',
        'Only the eighth of the fixed scores changes as v is dragged.'
      ),
      allocation: q(
        'Observed four-versus-four allocation',
        'reference',
        '',
        'The selected allocation identifies the four A units; the remaining four receive B.'
      ),
      aMembers: q(
        'Learners assigned instruction A',
        'input',
        '',
        'These four learner numbers identify the observed A group, using ordinary numbering from 1 through 8.'
      ),
      bMembers: q(
        'Learners assigned instruction B',
        'input',
        '',
        'These four learner numbers identify the remaining learners in the observed B group.'
      ),
      outcomes: q(
        'Eight fixed scores',
        'input',
        'points',
        'Under the sharp no-effect null, these same scores are retained for every allocation.'
      ),
      meanA: q(
        'Observed mean for A',
        'intermediate',
        'points',
        'Average the four scores assigned to A by the selected observed allocation.'
      ),
      meanB: q(
        'Observed mean for B',
        'intermediate',
        'points',
        'Average the four scores assigned to B by the selected observed allocation.'
      ),
      observedDifference: q(
        'Observed B−A mean difference',
        'input',
        'points',
        'This selected allocation supplies the absolute contrast used as the two-sided threshold.'
      ),
      distribution: q(
        'All allocation contrasts',
        'intermediate',
        'points',
        'Each dot is the B−A mean contrast for one of the 70 equally likely allocations.'
      ),
      randomizedDifferences: q(
        'All 70 allocation mean differences',
        'intermediate',
        'points',
        'The horizontal positions retain every B−A mean difference from the complete allocation distribution, including repeated values from distinct allocations.'
      ),
      tailCount: q(
        'Allocations meeting the two-sided threshold',
        'intermediate',
        'allocations',
        'Count contrasts at least as far from zero as the observed contrast, including ties.'
      ),
      assignmentCount: q(
        'Number of allowed allocations',
        'reference',
        'allocations',
        'Choosing four A units among eight gives exactly 70 allowed allocations.'
      ),
      pValue: q(
        'Exact randomization tail proportion',
        'output',
        '',
        'Divide the qualifying allocation count by all 70 allowed allocations.'
      ),
      output: q(
        'Exact randomization tail proportion',
        'output',
        '',
        'The gold allocation dots divided by all allocation dots give the null-model tail probability.'
      )
    },
    'one-way-anova': {
      separation: q(
        'Gap between neighboring method means',
        'input',
        'min',
        'The group means are 10−g, 10 and 10+g minutes; g moves the two outer means away from 10.'
      ),
      spread: q(
        'Offset within each method',
        'input',
        'min',
        'Each group has observations at its mean minus w, its mean and its mean plus w.'
      ),
      groups: q(
        'Nine constructed packing times',
        'input',
        'min',
        'The three timings for each method move around that method’s mean.'
      ),
      groupMeans: q(
        'Three method means',
        'intermediate',
        'min',
        'Each mean summarizes its own three constructed timings.'
      ),
      grandMean: q(
        'Grand mean',
        'reference',
        'min',
        'The symmetric construction keeps the grand mean at 10 minutes.'
      ),
      betweenSS: q(
        'Between-method sum of squares',
        'intermediate',
        'min²',
        'Sum each squared group-mean deviation from the grand mean, weighted by the group size.'
      ),
      withinSS: q(
        'Within-method sum of squares',
        'intermediate',
        'min²',
        'Sum each squared timing deviation from its own method mean.'
      ),
      totalSS: q(
        'Total sum of squares',
        'intermediate',
        'min²',
        'The between-method and within-method sums add to the total squared deviation from the grand mean.'
      ),
      betweenDF: q(
        'Between-method degrees of freedom',
        'reference',
        '',
        'Three method means give two between-method degrees of freedom.'
      ),
      withinDF: q(
        'Within-method degrees of freedom',
        'reference',
        '',
        'Nine observations minus three method means give six within-method degrees of freedom.'
      ),
      betweenMS: q(
        'Between-method mean square',
        'intermediate',
        'min²',
        'Divide the between-method sum of squares by two.'
      ),
      withinMS: q(
        'Within-method mean square',
        'intermediate',
        'min²',
        'Divide the within-method sum of squares by six.'
      ),
      output: q(
        'F ratio',
        'output',
        '',
        'Divide the between-method mean square by the within-method mean square; the units cancel.'
      ),
      pValue: q(
        'F reference tail probability',
        'output',
        '',
        'Under the stated null model, find the F(2,6) probability at least as large as this ratio.'
      ),
      n: q(
        'Total number of observations',
        'reference',
        'observations',
        'There are nine constructed timings, three for each of three methods.'
      ),
      groupCount: q(
        'Number of methods',
        'reference',
        'groups',
        'Three packing methods are compared in this one-factor construction.'
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
