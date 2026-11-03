/* Original bounded estimation teaching data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasEstimationExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:estimation-extension:randomized-block-design',
        slug: 'randomized-block-design',
        scene: 'randomized-block-design-estimation-scene',
        unit: 'min',
        title: 'Can we compare two packing methods without confusing them with a busy day?',
        eyebrow: 'Compare carefully, estimate honestly',
        presentation: {
          compact: true,
          controlHint:
            'Move one quantity and follow its highlighted meaning into the calculation and shape.'
        },
        summary:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Day is the blocking factor; the within-block contrast compares B with A on that same day.',
        context:
          'A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.',
        question: 'Can we compare two packing methods without confusing them with a busy day?',
        variables: [
          {
            key: 'change',
            symbol: 'd',
            label: 'Common B−A shift d',
            unit: 'min',
            min: -4,
            max: 4,
            step: 0.05
          },
          {
            key: 'blockSpread',
            symbol: 'b',
            label: 'Day offset size b',
            unit: 'min',
            min: 0,
            max: 4,
            step: 0.05
          }
        ],
        parameters: {
          change: -2,
          blockSpread: 3,
          assignment: 'alternating'
        },
        timeline: {
          key: 'change',
          from: -4,
          to: 4,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared study',
            body: 'A packing workshop plans two similar parcels on each of three days. Randomly assign the two methods within each day before measuring. For this teaching construction, method A takes 10−b, 10 and 10+b minutes; method B adds d−1, d and d+1 minutes. Slide the common shift d or the day offset b, and keep each day’s pair together.',
            formula: 'd_j=B_j-A_j,\\quad \\bar{d}=\\frac{d_1+d_2+d_3}{3}.',
            focusLabel: 'The declared model',
            focusDescription:
              'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Keep days and methods distinct',
            body: 'Each day contains both methods. The time scale is shared by all three days.',
            formula: 'd = {{change}} min; b = {{blockSpread}} min',
            focusLabel: 'Keep days and methods distinct',
            focusDescription:
              'Each day contains both methods. The time scale is shared by all three days.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Compare within each day',
            body: 'Subtract each A time from its paired B time before combining days.',
            formula:
              'd₁ = {{firstDifference}}; d₂ = {{secondDifference}}; d₃ = {{thirdDifference}} min',
            focusLabel: 'Compare within each day',
            focusDescription: 'Subtract each A time from its paired B time before combining days.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Average the three paired differences',
            body: 'The gold pair gaps lead to the mint mean. Changing a shared day offset does not alter this contrast.',
            formula: 'd̄ = {{sumDifferences}}/3 ≈ {{output}} min',
            focusLabel: 'Average the three paired differences',
            focusDescription:
              'The gold pair gaps lead to the mint mean. Changing a shared day offset does not alter this contrast.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Keep days and methods distinct',
            template: 'd = {{change}} min; b = {{blockSpread}} min',
            description:
              'Each day contains both methods. The time scale is shared by all three days.'
          },
          {
            role: 'intermediate',
            label: 'Compare within each day',
            template:
              'd₁ = {{firstDifference}}; d₂ = {{secondDifference}}; d₃ = {{thirdDifference}} min',
            description: 'Subtract each A time from its paired B time before combining days.'
          },
          {
            role: 'output',
            label: 'Average the three paired differences',
            template: 'd̄ = {{sumDifferences}}/3 ≈ {{output}} min',
            description:
              'The gold pair gaps lead to the mint mean. Changing a shared day offset does not alter this contrast.'
          }
        ],
        assumptions: [
          'Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.'
        ],
        sourceRefs: ['source:estimation-extensions:blocks'],
        conclusion:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Day is the blocking factor; the within-block contrast compares B with A on that same day.'
      },
      {
        id: 'story:estimation-extension:normal-mean-interval',
        slug: 'normal-mean-interval',
        scene: 'normal-mean-interval-estimation-scene',
        unit: 'mm',
        title: 'How precisely does an observed mean locate the unknown mean cutting error?',
        eyebrow: 'Compare carefully, estimate honestly',
        presentation: {
          compact: true,
          controlHint:
            'Move one quantity and follow its highlighted meaning into the calculation and shape.'
        },
        summary:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin of error on each side of the observed mean.',
        context:
          'A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.',
        question: 'How precisely does an observed mean locate the unknown mean cutting error?',
        variables: [
          {
            key: 'sampleSize',
            symbol: 'n',
            label: 'Independent readings n',
            unit: 'readings',
            min: 1,
            max: 64,
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
            key: 'sigma',
            symbol: 'σ',
            label: 'Known population spread σ',
            unit: 'mm',
            min: 0.25,
            max: 2,
            step: 0.05
          }
        ],
        parameters: {
          sampleSize: 16,
          mean: 0.5,
          sigma: 1
        },
        timeline: {
          key: 'sampleSize',
          from: 1,
          to: 64,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared study',
            body: 'A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.',
            formula:
              '\\mathrm{SE}=\\frac{\\sigma}{\\sqrt{n}},\\quad h=z_{0.975}\\,\\mathrm{SE},\\quad I=[\\bar{x}-h,\\bar{x}+h],\\quad z_{0.975}=\\Phi^{-1}(0.975).',
            focusLabel: 'The declared model',
            focusDescription:
              'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the summary and known spread',
            body: 'n is a whole count. x̄ is entered observed information, while σ is an assumed known model quantity.',
            formula: 'n = {{sampleSize}}; x̄ = {{mean}} mm; σ = {{sigma}} mm',
            focusLabel: 'Declare the summary and known spread',
            focusDescription:
              'n is a whole count. x̄ is entered observed information, while σ is an assumed known model quantity.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Convert reading spread to mean uncertainty',
            body: 'More independent readings reduce the standard error by a square-root factor.',
            formula: 'SE = {{sigma}}/√{{sampleSize}} ≈ {{standardError}} mm',
            focusLabel: 'Convert reading spread to mean uncertainty',
            focusDescription:
              'More independent readings reduce the standard error by a square-root factor.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Place the margin around the observed mean',
            body: 'The gold endpoints are centered on the cyan observed mean. Unknown μ has no invented marked location.',
            formula: 'h ≈ {{output}} mm; I ≈ [{{lower}}, {{upper}}] mm',
            focusLabel: 'Place the margin around the observed mean',
            focusDescription:
              'The gold endpoints are centered on the cyan observed mean. Unknown μ has no invented marked location.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the summary and known spread',
            template: 'n = {{sampleSize}}; x̄ = {{mean}} mm; σ = {{sigma}} mm',
            description:
              'n is a whole count. x̄ is entered observed information, while σ is an assumed known model quantity.'
          },
          {
            role: 'intermediate',
            label: 'Convert reading spread to mean uncertainty',
            template: 'SE = {{sigma}}/√{{sampleSize}} ≈ {{standardError}} mm',
            description:
              'More independent readings reduce the standard error by a square-root factor.'
          },
          {
            role: 'output',
            label: 'Place the margin around the observed mean',
            template: 'h ≈ {{output}} mm; I ≈ [{{lower}}, {{upper}}] mm',
            description:
              'The gold endpoints are centered on the cyan observed mean. Unknown μ has no invented marked location.'
          }
        ],
        assumptions: [
          'Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.'
        ],
        sourceRefs: ['source:estimation-extensions:normal-interval'],
        conclusion:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin of error on each side of the observed mean.'
      }
    ],
    quantities: {
      'randomized-block-design': {
        change: {
          label: 'Common constructed B−A shift',
          role: 'input',
          unit: 'min',
          description:
            'Common constructed B−A shift. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        blockSpread: {
          label: 'Size of additive day offset',
          role: 'input',
          unit: 'min',
          description:
            'Size of additive day offset. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        assignment: {
          label: 'Displayed fixed within-day allocation',
          role: 'reference',
          unit: '',
          description:
            'Displayed fixed within-day allocation. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        blockIndex: {
          label: 'Displayed day indices j',
          role: 'reference',
          unit: '',
          description:
            'Day index j. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        aReadings: {
          label: 'Packing times for method A',
          role: 'input',
          unit: 'min',
          description:
            'Packing times for method A. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        bReadings: {
          label: 'Packing times for method B',
          role: 'input',
          unit: 'min',
          description:
            'Packing times for method B. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        differences: {
          label: 'Three within-day B−A differences',
          role: 'intermediate',
          unit: 'min',
          description:
            'Three within-day B−A differences. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        firstDifference: {
          label: 'Difference on day one',
          role: 'intermediate',
          unit: 'min',
          description:
            'Difference on day one. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        secondDifference: {
          label: 'Difference on day two',
          role: 'intermediate',
          unit: 'min',
          description:
            'Difference on day two. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        thirdDifference: {
          label: 'Difference on day three',
          role: 'intermediate',
          unit: 'min',
          description:
            'Difference on day three. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        sumDifferences: {
          label: 'Sum of three within-day differences',
          role: 'intermediate',
          unit: 'min',
          description:
            'Sum of three within-day differences. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        blockCount: {
          label: 'Number of paired days',
          role: 'reference',
          unit: 'count',
          description:
            'Number of paired days. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        },
        output: {
          label: 'Mean within-day B−A difference',
          role: 'output',
          unit: 'min',
          description:
            'Mean within-day B−A difference. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
        }
      },
      'normal-mean-interval': {
        sampleSize: {
          label: 'Whole number of independent readings',
          role: 'input',
          unit: 'readings',
          description:
            'Whole number of independent readings. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        mean: {
          label: 'Observed sample mean error',
          role: 'input',
          unit: 'mm',
          description:
            'Observed sample mean error. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        sigma: {
          label: 'Known population standard deviation',
          role: 'input',
          unit: 'mm',
          description:
            'Known population standard deviation. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        standardError: {
          label: 'Standard error of the sample mean',
          role: 'intermediate',
          unit: 'mm',
          description:
            'Standard error of the sample mean. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        criticalValue: {
          label: 'Numerical standard normal 0.975 quantile',
          role: 'reference',
          unit: '',
          description:
            'Numerical standard normal 0.975 quantile. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        output: {
          label: 'Margin of error on either side',
          role: 'output',
          unit: 'mm',
          description:
            'Margin of error on either side. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        margin: {
          label: 'Margin of error on either side',
          role: 'output',
          unit: 'mm',
          description:
            'Margin of error on either side. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        lower: {
          label: 'Lower mean-interval endpoint',
          role: 'output',
          unit: 'mm',
          description:
            'Lower mean-interval endpoint. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        upper: {
          label: 'Upper mean-interval endpoint',
          role: 'output',
          unit: 'mm',
          description:
            'Upper mean-interval endpoint. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        interval: {
          label: 'Interval of candidate mean values',
          role: 'output',
          unit: 'mm',
          description:
            'Interval of candidate mean values. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        width: {
          label: 'Full mean-interval width',
          role: 'output',
          unit: 'mm',
          description:
            'Full mean-interval width. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        },
        unknownMean: {
          label: 'Fixed unknown population mean; no numerical position is supplied',
          role: 'reference',
          unit: 'mm',
          description:
            'Fixed unknown population mean; no numerical position is supplied. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
        }
      }
    },
    links: {
      'randomized-block-design': {
        variableKey: 'change',
        symbol: 'd',
        variableLabel: 'Common B−A shift d',
        unit: 'min',
        effectLabel:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Day is the blocking factor; the within-block contrast compares B with A on that same day.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared study',
            description:
              'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.'
          },
          {
            focus: 'input',
            label: 'Keep days and methods distinct',
            description:
              'Each day contains both methods. The time scale is shared by all three days.'
          },
          {
            focus: 'intermediate',
            label: 'Compare within each day',
            description: 'Subtract each A time from its paired B time before combining days.'
          },
          {
            focus: 'output',
            label: 'Average the three paired differences',
            description:
              'The gold pair gaps lead to the mint mean. Changing a shared day offset does not alter this contrast.'
          }
        ]
      },
      'normal-mean-interval': {
        variableKey: 'sampleSize',
        symbol: 'n',
        variableLabel: 'Independent readings n',
        unit: 'readings',
        effectLabel:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin of error on each side of the observed mean.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared study',
            description:
              'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.'
          },
          {
            focus: 'input',
            label: 'Declare the summary and known spread',
            description:
              'n is a whole count. x̄ is entered observed information, while σ is an assumed known model quantity.'
          },
          {
            focus: 'intermediate',
            label: 'Convert reading spread to mean uncertainty',
            description:
              'More independent readings reduce the standard error by a square-root factor.'
          },
          {
            focus: 'output',
            label: 'Place the margin around the observed mean',
            description:
              'The gold endpoints are centered on the cyan observed mean. Unknown μ has no invented marked location.'
          }
        ]
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
  return Object.freeze({
    all: () => data.stories.slice(),
    forSlug: s => data.stories.find(v => v.slug === s) || null,
    find: id => data.stories.find(v => v.id === id) || null,
    quantityFor: (s, k) =>
      Object.hasOwn(data.quantities, s) && Object.hasOwn(data.quantities[s], k)
        ? data.quantities[s][k]
        : null,
    linksFor: s => (Object.hasOwn(data.links, s) ? data.links[s] : null)
  });
});
