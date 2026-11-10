/* Original bounded estimation teaching data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasEstimationExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'randomized-block-design',
        title: 'Randomized blocks and within-pair comparisons',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison. Every day contains both methods once. The displayed measurements are constructed and the assignment selector shows two fixed possible allocations, not a random sampler. The mean B−A is a descriptive contrast. Blocking cancels a shared additive day offset; it does not cancel treatment-by-day variation, validate randomization in actual data, establish causation or perform ANOVA. Use d from −4 to 4 and b from 0 to 4 minutes. Changes too small to survive the represented readings receive a precision state.',
        example: 'd̄ = {{sumDifferences}}/3 ≈ −2 min',
        readAs: 'Randomized blocks and within-pair comparisons',
        aliases: ['Can we compare two packing methods without confusing them with a busy day?'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: []
      },
      {
        id: 'randomized-block-design-symbol-1',
        title: 'Method A packing time within a day, in minutes',
        category: 'chance',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        definition:
          'Method A packing time within a day, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'A',
        readAs: 'Method A packing time within a day, in minutes',
        aliases: ['randomized-block-design A'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-2',
        title: 'Method B packing time within that same day, in minutes',
        category: 'chance',
        symbols: ['B'],
        tokens: ['B'],
        mathSymbols: ['B'],
        definition:
          'Method B packing time within that same day, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'B',
        readAs: 'Method B packing time within that same day, in minutes',
        aliases: ['randomized-block-design B'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-3',
        title: 'Common constructed B−A shift in minutes',
        category: 'chance',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        definition:
          'Common constructed B−A shift in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'd',
        readAs: 'Common constructed B−A shift in minutes',
        aliases: ['randomized-block-design d'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-4',
        title: 'Size of the additive day offset, in minutes',
        category: 'chance',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        definition:
          'Size of the additive day offset, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'b',
        readAs: 'Size of the additive day offset, in minutes',
        aliases: ['randomized-block-design b'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-5',
        title: 'Day index taking 1, 2 or 3',
        category: 'chance',
        symbols: ['j'],
        tokens: ['j'],
        mathSymbols: ['j'],
        definition:
          'Day index taking 1, 2 or 3. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'j',
        readAs: 'Day index taking 1, 2 or 3',
        aliases: ['randomized-block-design j'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-6',
        title: 'B−A difference on day one, in minutes',
        category: 'chance',
        symbols: ['d₁'],
        tokens: ['d₁'],
        mathSymbols: ['d₁'],
        definition:
          'B−A difference on day one, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'd₁',
        readAs: 'B−A difference on day one, in minutes',
        aliases: ['randomized-block-design d₁'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-7',
        title: 'B−A difference on day two, in minutes',
        category: 'chance',
        symbols: ['d₂'],
        tokens: ['d₂'],
        mathSymbols: ['d₂'],
        definition:
          'B−A difference on day two, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'd₂',
        readAs: 'B−A difference on day two, in minutes',
        aliases: ['randomized-block-design d₂'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-8',
        title: 'B−A difference on day three, in minutes',
        category: 'chance',
        symbols: ['d₃'],
        tokens: ['d₃'],
        mathSymbols: ['d₃'],
        definition:
          'B−A difference on day three, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'd₃',
        readAs: 'B−A difference on day three, in minutes',
        aliases: ['randomized-block-design d₃'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'randomized-block-design-symbol-9',
        title: 'Mean of the three within-day B−A differences, in minutes',
        category: 'chance',
        symbols: ['d̄'],
        tokens: ['d̄'],
        mathSymbols: ['d̄', '\\bar{d}', '\\bar d'],
        definition:
          'Mean of the three within-day B−A differences, in minutes. Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        example: 'd̄',
        readAs: 'Mean of the three within-day B−A differences, in minutes',
        aliases: ['randomized-block-design d̄'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-blocking-factor',
        title: 'Blocking factor',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'A recorded nuisance condition used to group similar experimental units; here the day is shared by a pair. Every block contains both methods.',
        example:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        readAs: 'Blocking factor',
        aliases: ['blocking factor'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-within-block-contrast',
        title: 'Within-block contrast',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'A comparison between treatments measured inside the same block. The construction uses B−A before averaging over days.',
        example:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        readAs: 'Within-block contrast',
        aliases: ['within-block contrast'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-randomized-assignment',
        title: 'Randomized assignment within blocks',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Assignment of treatments by a chance mechanism within each block, planned before outcomes are measured. The two shown allocations are fixed possibilities, not a random sample.',
        example:
          'Compare B with A within each of three days, then average those paired differences. An additive day offset moves both methods together and cancels from their same-day comparison.',
        readAs: 'Randomized assignment within blocks',
        aliases: ['randomized assignment within blocks', 'randomly assign'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'normal-mean-interval',
        title: 'A normal-mean interval with known spread',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean. Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.',
        example: 'h ≈ 0.48999 mm; I ≈ [{{lower}}, {{upper}}] mm',
        readAs: 'A normal-mean interval with known spread',
        aliases: ['How precisely does an observed mean locate the unknown mean cutting error?'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: []
      },
      {
        id: 'normal-mean-interval-symbol-1',
        title: 'Whole number of independent readings',
        category: 'chance',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Whole number of independent readings. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'n',
        readAs: 'Whole number of independent readings',
        aliases: ['normal-mean-interval n'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-2',
        title: 'Observed sample mean error, in millimetres',
        category: 'chance',
        symbols: ['x̄'],
        tokens: ['x̄'],
        mathSymbols: ['x̄', '\\bar{x}', '\\bar x'],
        definition:
          'Observed sample mean error, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'x̄',
        readAs: 'Observed sample mean error, in millimetres',
        aliases: ['normal-mean-interval x̄'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-3',
        title: 'Known positive population standard deviation, in millimetres',
        category: 'chance',
        symbols: ['σ'],
        tokens: ['σ'],
        mathSymbols: ['σ'],
        definition:
          'Known positive population standard deviation, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'σ',
        readAs: 'Known positive population standard deviation, in millimetres',
        aliases: ['normal-mean-interval σ'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-4',
        title: 'Standard error of the sample mean, in millimetres',
        category: 'chance',
        symbols: ['SE'],
        tokens: ['SE'],
        mathSymbols: ['SE'],
        definition:
          'Standard error of the sample mean, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'SE',
        readAs: 'Standard error of the sample mean, in millimetres',
        aliases: ['normal-mean-interval SE'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-5',
        title: 'Standard normal 0.975 quantile; approximately 1.959963984540054',
        category: 'chance',
        symbols: ['z₀.₉₇₅'],
        tokens: ['z₀.₉₇₅'],
        mathSymbols: ['z₀.₉₇₅', 'z_{0.975}', 'z_0.975'],
        definition:
          'Standard normal 0.975 quantile; approximately 1.959963984540054. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'z₀.₉₇₅',
        readAs: 'Standard normal 0.975 quantile; approximately 1.959963984540054',
        aliases: ['normal-mean-interval z₀.₉₇₅'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-6',
        title: 'Margin on each side of the observed mean, in millimetres',
        category: 'chance',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        definition:
          'Margin on each side of the observed mean, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'h',
        readAs: 'Margin on each side of the observed mean, in millimetres',
        aliases: ['normal-mean-interval h'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-7',
        title: 'Computed interval of candidate population mean values',
        category: 'chance',
        symbols: ['I'],
        tokens: ['I'],
        mathSymbols: ['I'],
        definition:
          'Computed interval of candidate population mean values. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'I',
        readAs: 'Computed interval of candidate population mean values',
        aliases: ['normal-mean-interval I'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-8',
        title: 'Lower interval endpoint, in millimetres',
        category: 'chance',
        symbols: ['L'],
        tokens: ['L'],
        mathSymbols: ['L'],
        definition:
          'Lower interval endpoint, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'L',
        readAs: 'Lower interval endpoint, in millimetres',
        aliases: ['normal-mean-interval L'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-9',
        title: 'Upper interval endpoint, in millimetres',
        category: 'chance',
        symbols: ['U'],
        tokens: ['U'],
        mathSymbols: ['U'],
        definition:
          'Upper interval endpoint, in millimetres. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'U',
        readAs: 'Upper interval endpoint, in millimetres',
        aliases: ['normal-mean-interval U'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-10',
        title: 'Fixed unknown population mean, not a plotted known value',
        category: 'chance',
        symbols: ['μ'],
        tokens: ['μ'],
        mathSymbols: ['μ'],
        definition:
          'Fixed unknown population mean, not a plotted known value. This unknown fixed parameter is not given a numerical location in the scene.',
        example: 'μ',
        readAs: 'Fixed unknown population mean, not a plotted known value',
        aliases: ['normal-mean-interval μ'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'normal-mean-interval-symbol-11',
        title: 'Quantile function of the standard normal distribution',
        category: 'chance',
        symbols: ['Φ⁻¹'],
        tokens: ['Φ⁻¹'],
        mathSymbols: ['Φ⁻¹', '\\Phi^{-1}', 'Φ^{-1}'],
        definition:
          'Quantile function of the standard normal distribution. Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        example: 'Φ⁻¹',
        readAs: 'Quantile function of the standard normal distribution',
        aliases: ['normal-mean-interval Φ⁻¹'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-known-population-spread',
        title: 'Known population spread',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'A population standard deviation supplied as known by the probability model, rather than estimated from this sample.',
        example:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        readAs: 'Known population spread',
        aliases: ['known population spread', 'known population standard deviation'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-margin-of-error',
        title: 'Margin of error',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'The distance from the interval center to either endpoint. The full interval width is twice this margin.',
        example:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        readAs: 'Margin of error',
        aliases: ['margin of error'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-normal-quantile',
        title: 'Standard normal quantile',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'The value whose standard normal cumulative probability is the chosen probability. The 0.975 quantile supplies the two-sided 95% interval multiplier.',
        example:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        readAs: 'Standard normal quantile',
        aliases: ['standard normal quantile', 'standard normal 0.975 quantile'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-confidence-procedure',
        title: 'Repeated-interval confidence',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'The fraction of intervals that would cover a fixed unknown parameter over repeated samples under the stated model. It is not a posterior probability assigned to one fixed computed interval.',
        example:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        readAs: 'Repeated-interval confidence',
        aliases: ['repeated-interval confidence', 'repeated-sampling procedure'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-independent-identically-normal',
        title: 'Independent identically normal readings',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Independent measurements that all follow one normal distribution with a common unknown mean and a known positive standard deviation, as assumed by this lesson.',
        example:
          'Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.',
        readAs: 'Independent identically normal readings',
        aliases: [
          'independent identically normal readings',
          'independent, identically normally distributed cutting errors',
          'independent, identically normal readings'
        ],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      },
      {
        id: 'estimation-analysis-of-variance',
        title: 'Analysis of variance (ANOVA)',
        category: 'chance',
        symbols: ['ANOVA'],
        tokens: ['ANOVA'],
        mathSymbols: ['ANOVA'],
        definition:
          'A statistical modeling family that separates explained variation from error variation under stated assumptions. Mean-square comparisons can support tests of mean effects. The blocked packing lesson computes only a descriptive contrast; it does not perform this analysis.',
        example: 'The paired contrast alone is not an ANOVA.',
        readAs: 'analysis of variance',
        aliases: ['analysis of variance', 'ANOVA'],
        sourceKeys: ['estimation_anova'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-within-day-difference-index',
        title: 'Difference within indexed day',
        category: 'chance',
        symbols: ['dⱼ', 'd_j'],
        tokens: ['dⱼ', 'd_j'],
        mathSymbols: ['dⱼ', 'd_j', 'd_{j}'],
        definition:
          'The B minus A difference inside day j, where the constructed days are numbered one, two and three. The index chooses an existing paired day; it is not another continuous control.',
        example: 'd_j=B_j−A_j for j=1,2,3',
        readAs: 'd sub j',
        aliases: ['within-day indexed difference'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-within-day-a-index',
        title: 'Method A time within indexed day',
        category: 'chance',
        symbols: ['Aⱼ', 'A_j'],
        tokens: ['Aⱼ', 'A_j'],
        mathSymbols: ['Aⱼ', 'A_j', 'A_{j}'],
        definition:
          'Packing time for method A within day j, measured in minutes. The paired method is compared within that same day.',
        example: 'A_j',
        readAs: 'A sub j',
        aliases: ['indexed packing time A'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-within-day-b-index',
        title: 'Method B time within indexed day',
        category: 'chance',
        symbols: ['Bⱼ', 'B_j'],
        tokens: ['Bⱼ', 'B_j'],
        mathSymbols: ['Bⱼ', 'B_j', 'B_{j}'],
        definition:
          'Packing time for method B within day j, measured in minutes. The paired method is compared within that same day.',
        example: 'B_j',
        readAs: 'B sub j',
        aliases: ['indexed packing time B'],
        sourceKeys: ['estimation_blocks'],
        grammarCards: ['randomized-block-design'],
        formulaCards: ['randomized-block-design'],
        relatedIds: ['randomized-block-design']
      },
      {
        id: 'estimation-reading-count-unit',
        title: 'Readings as an observation count',
        category: 'units',
        symbols: ['reading', 'readings'],
        tokens: ['reading', 'readings'],
        mathSymbols: ['reading', 'readings'],
        notationKinds: ['unit'],
        definition:
          'A reading is one measured observation. Here readings is the count unit for n independent cutting-error measurements; it does not measure millimetres of error or the width of an interval.',
        example: 'n=16 readings',
        readAs: 'readings',
        aliases: ['number of readings'],
        sourceKeys: ['estimation_normal'],
        grammarCards: ['normal-mean-interval'],
        formulaCards: ['normal-mean-interval'],
        relatedIds: ['normal-mean-interval']
      }
    ],
    sources: {
      estimation_blocks: {
        title: 'NIST/SEMATECH · Randomized Block Designs',
        url: 'https://www.itl.nist.gov/div898/handbook/pri/section3/pri332.htm'
      },
      estimation_normal: {
        title: 'NIST/SEMATECH · What Are Confidence Intervals?',
        url: 'https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm'
      },
      estimation_anova: {
        title: 'NIST/SEMATECH · The ANOVA Table and Tests of Hypotheses About Means',
        url: 'https://www.itl.nist.gov/div898/handbook/prc/section4/prc433.htm'
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
