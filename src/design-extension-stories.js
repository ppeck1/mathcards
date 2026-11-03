/* Original design stories; the shared host owns controls, timing and private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDesignExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    covariance: {
      title: 'Do longer boards also take longer to finish?',
      unit: 'm·min',
      context:
        'A workshop compares five board lengths, from 1 to 5 metres, with five constructed finishing times. The times share a mean of 10 minutes. Change the trend c to tilt the paired pattern, or change the extra variation w to move times around that pattern.',
      summary:
        'Center each length and time at its own sample mean. Multiply the paired deviations, add the signed products, then divide by four to obtain sample covariance.',
      parameters: { trend: 1, scatter: 0.5 },
      variables: [
        {
          key: 'trend',
          symbol: 'c',
          label: 'Finishing-time trend c',
          unit: 'min/m',
          min: -2,
          max: 2,
          step: 0.05
        },
        {
          key: 'scatter',
          symbol: 'w',
          label: 'Extra finishing-time variation w',
          unit: 'min',
          min: 0,
          max: 2,
          step: 0.05
        }
      ],
      formula: 's_{xy}=\\frac{\\sum_{i=1}^{5}(x_i-\\bar{x})(y_i-\\bar{y})}{5-1}.',
      stages: [
        [
          'Center the paired observations',
          'x̄ = {{meanX}} m; ȳ = {{meanY}} min; c = {{trend}} min/m; w = {{scatter}} min',
          'The two mean lines divide the plot into paired positive and negative deviations. A board remains paired with its own finishing time.'
        ],
        [
          'Add the signed deviation products',
          'Sum of paired products ≈ {{sumProducts}} m·min',
          'Each rectangle has the magnitude of one deviation product. Matching signs add positive area; opposite signs subtract signed area.'
        ],
        [
          'Divide by one fewer than the pair count',
          's_xy = {{sumProducts}}/{{degreesFreedom}} ≈ {{output}} m·min',
          'Five paired observations give a divisor of four. Sample covariance retains the product of the two measurement units.'
        ]
      ],
      assumptions: [
        'These are five constructed pairs, not measurements from an experiment. Sample covariance describes how paired deviations vary together; it does not establish a cause. The extra variation uses a symmetric pattern orthogonal to the centered lengths, so changing w alters the points while leaving this family’s covariance unchanged. The denominator is n−1 for sample covariance. A population covariance would use a different stated divisor. The result depends on measurement units and is not a normalized correlation.'
      ],
      sourceRefs: ['source:design-extensions:covariance']
    },
    'normal-variance-interval': {
      title: 'How uncertain is the spread of the cutting errors?',
      unit: 'mm²',
      context:
        'A calibration workshop summarizes independent cutting errors by the reading count n and the sample standard deviation s. The population mean and variance are unknown. Keep the entered spread visible while changing the reading count, then follow a chi-square interval for the population variance.',
      summary:
        'Square the sample spread, multiply by n−1, then divide by the two chi-square quantiles in reversed order to obtain the lower and upper variance bounds.',
      parameters: { sampleSize: 10, sampleSpread: 1 },
      variables: [
        {
          key: 'sampleSize',
          symbol: 'n',
          label: 'Independent readings n',
          unit: 'readings',
          min: 6,
          max: 31,
          step: 1,
          discrete: true
        },
        {
          key: 'sampleSpread',
          symbol: 's',
          label: 'Observed sample spread s',
          unit: 'mm',
          min: 0.25,
          max: 2,
          step: 0.05
        }
      ],
      formula: '\\nu=n-1,\\quad L=\\frac{\\nu s^2}{q_U},\\quad U=\\frac{\\nu s^2}{q_L}.',
      stages: [
        [
          'Turn sample spread into squared variation',
          'n = {{sampleSize}}; s = {{sampleSpread}} mm; s² ≈ {{variance}} mm²',
          'The cyan point is the observed sample variance. It is computed from the entered sample standard deviation, rather than supplied as the unknown population variance.'
        ],
        [
          'Locate the two chi-square cutoffs',
          'ν = {{degreesFreedom}}; q_L ≈ {{criticalLow}}; q_U ≈ {{criticalHigh}}',
          'Use n−1 degrees of freedom. Dividing by the larger quantile gives the lower endpoint; dividing by the smaller quantile gives the upper endpoint.'
        ],
        [
          'Read the interval for population variance',
          '[L, U] ≈ [{{lowerVariance}}, {{upperVariance}}] mm²',
          'The gold interval contains candidate population variances. Squared millimetres distinguish variance from the sample spread measured in millimetres.'
        ]
      ],
      assumptions: [
        'The fixed 95% procedure assumes independent, identically normal errors with one unknown mean and unknown positive population variance. The sample variance uses denominator n−1. Changing n holds the entered sample spread fixed and does not generate observations. Repeated intervals cover the fixed variance with probability 0.95 under this normal model; a computed interval is not assigned a posterior probability. Unknown σ² has no supplied point location. The general formula requires n≥2; this view supports whole n from 6 to 31 so its fixed variance scale remains readable. Chi-square quantiles are numerical.'
      ],
      sourceRefs: ['source:design-extensions:variance-interval']
    },
    'normal-test-power': {
      title: 'How many readings give a planned mean increase a chance to be detected?',
      unit: '',
      context:
        'A workshop plans to compare cut lengths from a current jig and a proposed jig. Suppose the proposed jig truly cuts δ millimetres longer on average. Before collecting readings, choose n independent readings per jig and a known common spread σ. Each curve shows the tail probability above a possible cutoff; compare their heights at the same test cutoff.',
      summary:
        'Use both groups to find the standard error of their mean difference. Set the cutoff for a 5% upper-tail test at the null boundary, then calculate the tail beyond that same cutoff under the assumed true increase.',
      parameters: { perGroup: 16, effect: 0.5, sigma: 1 },
      variables: [
        {
          key: 'perGroup',
          symbol: 'n',
          label: 'Readings per jig n',
          unit: 'readings',
          min: 2,
          max: 64,
          step: 1,
          discrete: true
        },
        {
          key: 'effect',
          symbol: 'δ',
          label: 'Assumed true mean increase δ',
          unit: 'mm',
          min: 0,
          max: 2,
          step: 0.05
        },
        {
          key: 'sigma',
          symbol: 'σ',
          label: 'Known common population spread σ',
          unit: 'mm',
          min: 0.25,
          max: 2,
          step: 0.05
        }
      ],
      formula:
        '\\mathrm{SE}=\\sigma\\sqrt{2/n},\\quad c=z_{0.95}\\mathrm{SE},\\quad 1-\\beta=\\Phi\\!\\left(\\frac{\\delta-c}{\\mathrm{SE}}\\right).',
      stages: [
        [
          'Declare the replication and assumed effect',
          'n = {{perGroup}} per jig; δ = {{effect}} mm; σ = {{sigma}} mm',
          'The null curve reaches one-half at zero, and the alternative curve reaches one-half at the assumed increase δ. Both describe possible sample-mean differences through their tail probabilities.'
        ],
        [
          'Keep the false-positive cutoff explicit',
          'SE ≈ {{standardError}} mm; c ≈ {{threshold}} mm',
          'The cutoff leaves 5% above it at the null boundary. More independent readings narrow the distribution of the mean difference and move that cutoff toward zero.'
        ],
        [
          'Find power under the assumed increase',
          '1−β ≈ {{output}}; β ≈ {{beta}}',
          'The green point on the cyan curve gives the rejection probability at the gold cutoff. For a positive increase, the remaining probability is the Type II error rate; at zero it is non-rejection under the null.'
        ]
      ],
      assumptions: [
        'This planning calculation assumes two independent normal groups with the same known positive population standard deviation and n independent readings in each group. The one-sided test targets a positive mean difference, with null δ≤0 and size 0.05 at δ=0. The entered δ is an assumed true planning effect, not an estimate or observed evidence. The rejection probability at a positive effect is statistical power; at zero it is the false-positive probability. Its complement is a Type II error probability only for a positive effect. No probability here says that a hypothesis is true. More replication means more independent observations, not repeated copies of one reading. There is no generated experiment, unknown-spread correction, causal conclusion or automatic sample-size recommendation.'
      ],
      sourceRefs: ['source:design-extensions:power']
    }
  };
  const roles = ['input', 'intermediate', 'output'];
  const stories = Object.entries(specs).map(([slug, spec]) => {
    const calculation = spec.stages.map(([label, template, description], index) => ({
      role: roles[index],
      label,
      template,
      description
    }));
    return {
      id: 'story:design-extension:' + slug,
      slug,
      scene: slug + '-design-scene',
      unit: spec.unit,
      title: spec.title,
      eyebrow: 'Describe variation, plan comparisons',
      presentation: {
        compact: true,
        controlHint:
          'Move one quantity and follow its highlight through the same calculation and shape.'
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
          title: 'Begin with the declared study',
          body: spec.context,
          formula: spec.formula,
          focusLabel: 'The declared study',
          focusDescription: spec.summary
        },
        ...calculation.map((stage, index) => ({
          id: stage.role,
          from: (index + 1) / 4,
          to: (index + 2) / 4,
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
    covariance: {
      trend: q(
        'Finishing-time trend',
        'input',
        'min/m',
        'This slope tilts finishing times as board length changes.'
      ),
      scatter: q(
        'Extra finishing-time variation',
        'input',
        'min',
        'This declared orthogonal pattern moves paired times without changing their centered cross-product sum.'
      ),
      xValues: q('Five board lengths', 'input', 'm', 'The lengths are 1, 2, 3, 4 and 5 metres.'),
      yValues: q(
        'Five constructed finishing times',
        'input',
        'min',
        'Each finishing time remains paired with its board length.'
      ),
      meanX: q(
        'Mean board length',
        'reference',
        'm',
        'The five centered lengths share sample mean 3 metres.'
      ),
      meanY: q(
        'Mean finishing time',
        'reference',
        'min',
        'The constructed pattern retains sample mean 10 minutes.'
      ),
      xDeviations: q(
        'Centered length deviations',
        'intermediate',
        'm',
        'Subtract the mean length from each board length.'
      ),
      yDeviations: q(
        'Centered time deviations',
        'intermediate',
        'min',
        'Subtract the mean finishing time from each paired time.'
      ),
      products: q(
        'Signed deviation products',
        'intermediate',
        'm·min',
        'Multiply each length deviation by its own time deviation; the signed rectangle has this product.'
      ),
      sumProducts: q(
        'Sum of signed products',
        'intermediate',
        'm·min',
        'Add all five centered deviation products, retaining their signs.'
      ),
      count: q(
        'Paired observation count',
        'reference',
        'pairs',
        'There are five paired board-length and finishing-time observations.'
      ),
      degreesFreedom: q(
        'Sample-covariance divisor',
        'reference',
        '',
        'Subtract one from the count of five pairs, giving a divisor of four.'
      ),
      covariance: q(
        'Sample covariance',
        'output',
        'm·min',
        'Divide the centered cross-product sum by four.'
      ),
      rows: q(
        'Paired board and finishing-time observations',
        'input',
        '',
        'Each row contains one board length and its own constructed finishing time.'
      ),
      output: q(
        'Sample covariance',
        'output',
        'm·min',
        'The signed product sum divided by n−1 describes variation together in the original product units.'
      )
    },
    'normal-variance-interval': {
      sampleSize: q(
        'Independent reading count',
        'input',
        'readings',
        'The whole number of independent normal cutting-error readings used in the entered summary.'
      ),
      sampleSpread: q(
        'Observed sample standard deviation',
        'input',
        'mm',
        'The entered sample spread uses denominator n−1 in its squared definition.'
      ),
      degreesFreedom: q(
        'Variance degrees of freedom',
        'intermediate',
        '',
        'Estimating the unknown mean leaves n−1 degrees of freedom.'
      ),
      variance: q(
        'Observed sample variance',
        'input',
        'mm²',
        'Square the entered sample standard deviation.'
      ),
      scale: q(
        'Degrees of freedom times sample variance',
        'intermediate',
        'mm²',
        'Multiply the sample variance by n−1 before dividing by the two quantiles.'
      ),
      criticalLow: q(
        'Lower chi-square quantile',
        'intermediate',
        '',
        'The numerical 0.025 chi-square quantile is the smaller divisor, producing the upper variance endpoint.'
      ),
      criticalHigh: q(
        'Upper chi-square quantile',
        'intermediate',
        '',
        'The numerical 0.975 chi-square quantile is the larger divisor, producing the lower variance endpoint.'
      ),
      lowerVariance: q(
        'Lower variance endpoint',
        'output',
        'mm²',
        'Divide (n−1)s² by the larger chi-square quantile.'
      ),
      upperVariance: q(
        'Upper variance endpoint',
        'output',
        'mm²',
        'Divide (n−1)s² by the smaller chi-square quantile.'
      ),
      interval: q(
        'Computed variance interval',
        'output',
        'mm²',
        'The lower and upper endpoints bound candidate population variances under the stated normal model.'
      ),
      width: q(
        'Variance interval width',
        'output',
        'mm²',
        'Subtract the lower endpoint from the upper endpoint.'
      ),
      lowerSpread: q(
        'Lower standard-deviation endpoint',
        'output',
        'mm',
        'Take the square root of the lower variance endpoint.'
      ),
      upperSpread: q(
        'Upper standard-deviation endpoint',
        'output',
        'mm',
        'Take the square root of the upper variance endpoint.'
      ),
      output: q(
        'Upper variance endpoint',
        'output',
        'mm²',
        'The primary readout is the upper bound of the computed population-variance interval.'
      )
    },
    'normal-test-power': {
      perGroup: q(
        'Independent readings per jig',
        'input',
        'readings',
        'Each of the two jigs receives this same whole number of independent readings.'
      ),
      effect: q(
        'Assumed true mean increase',
        'input',
        'mm',
        'This planning value locates the alternative mean difference; it is not an observed estimate.'
      ),
      sigma: q(
        'Known common population standard deviation',
        'input',
        'mm',
        'The declared model assumes this spread is known and equal in both groups.'
      ),
      standardError: q(
        'Standard error of the mean difference',
        'intermediate',
        'mm',
        'Independent equal-size groups give σ times the square root of 2/n.'
      ),
      threshold: q(
        'One-sided rejection cutoff',
        'intermediate',
        'mm',
        'Multiply the standard error by the standard normal 0.95 quantile; differences above this cutoff are rejected.'
      ),
      criticalValue: q(
        'Standard normal critical value',
        'reference',
        '',
        'The numerical 0.95 quantile fixes a 5% upper tail at the null boundary.'
      ),
      standardizedEffect: q(
        'Standardized true increase',
        'intermediate',
        '',
        'Divide the assumed true increase by the standard error.'
      ),
      effectZ: q(
        'Power argument',
        'intermediate',
        '',
        'Measure the true mean’s distance beyond the cutoff in standard-error units.'
      ),
      alpha: q(
        'Null-boundary rejection probability',
        'reference',
        '',
        'The declared one-sided procedure has size 0.05 at no mean increase.'
      ),
      beta: q(
        'Non-rejection probability',
        'output',
        '',
        'This is the probability of not rejecting at the entered effect. It is a Type II error probability for a positive true increase, and null non-rejection at zero.'
      ),
      power: q(
        'Statistical power',
        'output',
        '',
        'At the entered true effect, this is the probability of a sample-mean difference above the rejection cutoff.'
      ),
      nullMean: q(
        'Null-boundary mean difference',
        'reference',
        'mm',
        'The null-boundary distribution centers at zero mean increase.'
      ),
      alternativeMean: q(
        'Alternative mean difference',
        'input',
        'mm',
        'The alternative distribution centers at the assumed true increase δ.'
      ),
      totalReadings: q(
        'Total independent readings',
        'reference',
        'readings',
        'Two groups of n readings give 2n readings in total.'
      ),
      totalCount: q(
        'Total independent readings',
        'reference',
        'readings',
        'The displayed N is twice the per-group count n.'
      ),
      output: q(
        'Statistical power',
        'output',
        '',
        'The alternative tail beyond the same cutoff gives 1−β.'
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
