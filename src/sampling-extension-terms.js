/* Original scoped inference reference data; build-time only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSamplingExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval',
        title: 'A Student interval with estimated spread',
        symbols: [],
        tokens: [],
        definition:
          'A mean interval that uses estimated sample spread and a Student critical value. Under independent normal observations, its degrees of freedom are n−1. Divide the sample standard deviation by the square root of the reading count. Use the Student multiplier with one fewer degree of freedom, then place the resulting margin on both sides of the observed mean.',
        example:
          'At n=10 the Student multiplier uses nine degrees of freedom. The margin is about 0.715 mm, giving endpoints about −0.215 and 1.215 mm.',
        readAs: 'A Student interval with estimated spread',
        aliases: [
          'How wide should a calibration interval be when the spread is estimated too?',
          'Student confidence interval',
          'student confidence interval',
          'Student interval'
        ],
        relatedIds: []
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-1',
        title: 'Whole number of independent calibration readings',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Whole number of independent calibration readings. The quantity is evaluated inside the stated Student interval.',
        example: 'n',
        readAs: 'Whole number of independent calibration readings',
        aliases: ['student-mean-interval n'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-2',
        title: 'Observed sample mean error, in millimetres',
        symbols: ['x̄'],
        tokens: ['x̄'],
        mathSymbols: ['x̄'],
        definition:
          'Observed sample mean error, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 'x̄',
        readAs: 'Observed sample mean error, in millimetres',
        aliases: ['student-mean-interval x̄'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-3',
        title: 'Observed sample standard deviation, in millimetres',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        definition:
          'The standard deviation calculated from the observed sample, using one fewer degree of freedom than the number of observations. Observed sample standard deviation, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 's',
        readAs: 'Observed sample standard deviation, in millimetres',
        aliases: [
          'student-mean-interval s',
          'Estimated sample spread',
          'estimated sample spread',
          'sample standard deviation'
        ],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-4',
        title: 'Degrees of freedom n−1 for the estimated spread',
        symbols: ['ν'],
        tokens: ['ν'],
        mathSymbols: ['ν'],
        definition:
          'Degrees of freedom n−1 for the estimated spread. The quantity is evaluated inside the stated Student interval.',
        example: 'ν',
        readAs: 'Degrees of freedom n−1 for the estimated spread',
        aliases: ['student-mean-interval ν'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-5',
        title: 'Estimated standard error of the sample mean, in millimetres',
        symbols: ['SE'],
        tokens: ['SE', '\\mathrm{SE}'],
        mathSymbols: ['SE', '\\mathrm{SE}'],
        definition:
          'Estimated standard error of the sample mean, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 'SE',
        readAs: 'Estimated standard error of the sample mean, in millimetres',
        aliases: ['student-mean-interval SE'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-6',
        title: 'Numerical Student 0.975 quantile with ν degrees of freedom',
        symbols: ['t₀.₉₇₅,ν'],
        tokens: ['t₀.₉₇₅,ν', 't_{0.975,\\nu}', 't_{0.975,ν}', 't₀.₉₇₅,ᵥ'],
        mathSymbols: ['t₀.₉₇₅,ν', 't_{0.975,\\nu}', 't_{0.975,ν}', 't₀.₉₇₅,ᵥ'],
        definition:
          'A quantile of a Student distribution. For the two-sided 95% mean interval the positive 0.975 quantile supplies the multiplier. Numerical Student 0.975 quantile with ν degrees of freedom. The quantity is evaluated inside the stated Student interval.',
        example: 't₀.₉₇₅,ν',
        readAs: 'Numerical Student 0.975 quantile with ν degrees of freedom',
        aliases: [
          'student-mean-interval t₀.₉₇₅,ν',
          'Student critical value',
          'student critical value',
          'Student multiplier'
        ],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-7',
        title: 'Margin from the observed mean to either interval endpoint, in millimetres',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        definition:
          'Margin from the observed mean to either interval endpoint, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 'h',
        readAs: 'Margin from the observed mean to either interval endpoint, in millimetres',
        aliases: ['student-mean-interval h'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-8',
        title: 'Computed interval of candidate population mean errors',
        symbols: ['I'],
        tokens: ['I'],
        mathSymbols: ['I'],
        definition:
          'Computed interval of candidate population mean errors. The quantity is evaluated inside the stated Student interval.',
        example: 'I',
        readAs: 'Computed interval of candidate population mean errors',
        aliases: ['student-mean-interval I'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-9',
        title: 'Lower interval endpoint, in millimetres',
        symbols: ['L'],
        tokens: ['L'],
        mathSymbols: ['L'],
        definition:
          'Lower interval endpoint, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 'L',
        readAs: 'Lower interval endpoint, in millimetres',
        aliases: ['student-mean-interval L'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-10',
        title: 'Upper interval endpoint, in millimetres',
        symbols: ['U'],
        tokens: ['U'],
        mathSymbols: ['U'],
        definition:
          'Upper interval endpoint, in millimetres. The quantity is evaluated inside the stated Student interval.',
        example: 'U',
        readAs: 'Upper interval endpoint, in millimetres',
        aliases: ['student-mean-interval U'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'student-mean-interval-symbol-11',
        title: 'Fixed unknown population mean error; its value is not supplied',
        symbols: ['μ'],
        tokens: ['μ'],
        mathSymbols: ['μ'],
        definition:
          'Fixed unknown population mean error; its value is not supplied. Its unknown value is not supplied to the scene.',
        example: 'μ',
        readAs: 'Fixed unknown population mean error; its value is not supplied',
        aliases: ['student-mean-interval μ'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        id: 'sampling-degrees-of-freedom',
        title: 'Degrees of freedom for a sample variance',
        symbols: [],
        tokens: [],
        definition:
          'After centering n observations on their sample mean, their residuals sum to zero. Only n−1 residual coordinates can vary independently.',
        example:
          'At n=10 the Student multiplier uses nine degrees of freedom. The margin is about 0.715 mm, giving endpoints about −0.215 and 1.215 mm.',
        readAs: 'Degrees of freedom for a sample variance',
        aliases: ['degrees of freedom for a sample variance', 'degrees of freedom'],
        relatedIds: ['student-mean-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution',
        title: 'An exact randomization distribution',
        symbols: [],
        tokens: [],
        definition:
          'The distribution of a statistic over the allocations allowed by a declared random assignment mechanism, with outcomes held fixed under the null. Keep eight learner scores fixed and enumerate all 70 ways to assign four learners to A and four to B. Count every allocation whose absolute mean difference is at least the observed difference, then divide that count by 70.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'An exact randomization distribution',
        aliases: [
          'How unusual is a four-versus-four learner-score difference under random assignment?',
          'Randomization distribution',
          'randomization distribution'
        ],
        relatedIds: []
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-1',
        title: 'Eighth constructed learner score, in points',
        symbols: ['v'],
        tokens: ['v'],
        mathSymbols: ['v'],
        definition:
          'Eighth constructed learner score, in points. The quantity is evaluated inside the stated finite assignment model.',
        example: 'v',
        readAs: 'Eighth constructed learner score, in points',
        aliases: ['randomization-distribution v'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-2',
        title: 'Eight fixed learner scores used under reassignment',
        symbols: ['y'],
        tokens: ['y'],
        mathSymbols: ['y'],
        definition:
          'Eight fixed learner scores used under reassignment. The quantity is evaluated inside the stated finite assignment model.',
        example: 'y',
        readAs: 'Eight fixed learner scores used under reassignment',
        aliases: ['randomization-distribution y'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-3',
        title: 'Numbers of the four learners assigned to instructions A',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        definition:
          'Numbers of the four learners assigned to instructions A. The quantity is evaluated inside the stated finite assignment model.',
        example: 'A',
        readAs: 'Numbers of the four learners assigned to instructions A',
        aliases: ['randomization-distribution A'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-4',
        title: 'Numbers of the four learners assigned to instructions B',
        symbols: ['B'],
        tokens: ['B'],
        mathSymbols: ['B'],
        definition:
          'Numbers of the four learners assigned to instructions B. The quantity is evaluated inside the stated finite assignment model.',
        example: 'B',
        readAs: 'Numbers of the four learners assigned to instructions B',
        aliases: ['randomization-distribution B'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-5',
        title: 'Mean learner score among the four A-assigned positions',
        symbols: ['ȳ_A'],
        tokens: ['ȳ_A', '\\bar{y}_A', '\\bar{y}_{A}', 'ȳₐ', 'ȳ', '\\bar{y}', '\\bar y'],
        mathSymbols: ['ȳ_A', '\\bar{y}_A', '\\bar{y}_{A}', 'ȳₐ', 'ȳ', '\\bar{y}', '\\bar y'],
        definition:
          'Mean learner score among the four A-assigned positions. The quantity is evaluated inside the stated finite assignment model.',
        example: 'ȳ_A',
        readAs: 'Mean learner score among the four A-assigned positions',
        aliases: ['randomization-distribution ȳ_A'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-6',
        title: 'Mean learner score among the four B-assigned positions',
        symbols: ['ȳ_B'],
        tokens: ['ȳ_B', '\\bar{y}_B', '\\bar{y}_{B}', 'ȳᵦ', 'ȳ', '\\bar{y}', '\\bar y'],
        mathSymbols: ['ȳ_B', '\\bar{y}_B', '\\bar{y}_{B}', 'ȳᵦ', 'ȳ', '\\bar{y}', '\\bar y'],
        definition:
          'Mean learner score among the four B-assigned positions. The quantity is evaluated inside the stated finite assignment model.',
        example: 'ȳ_B',
        readAs: 'Mean learner score among the four B-assigned positions',
        aliases: ['randomization-distribution ȳ_B'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-7',
        title: 'Observed mean B−A difference, in points',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        definition:
          'Observed mean B−A difference, in points. The quantity is evaluated inside the stated finite assignment model.',
        example: 'd',
        readAs: 'Observed mean B−A difference, in points',
        aliases: ['randomization-distribution d'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-8',
        title: 'Mean B−A differences across all 70 allocations, in points',
        symbols: ['D'],
        tokens: ['D'],
        mathSymbols: ['D'],
        definition:
          'Mean B−A differences across all 70 allocations, in points. The quantity is evaluated inside the stated finite assignment model.',
        example: 'D',
        readAs: 'Mean B−A differences across all 70 allocations, in points',
        aliases: ['randomization-distribution D'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-9',
        title: 'Number of allocations at least as extreme in absolute difference',
        symbols: ['m'],
        tokens: ['m'],
        mathSymbols: ['m'],
        definition:
          'Number of allocations at least as extreme in absolute difference. The quantity is evaluated inside the stated finite assignment model.',
        example: 'm',
        readAs: 'Number of allocations at least as extreme in absolute difference',
        aliases: ['randomization-distribution m'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-10',
        title: 'Total number of equally likely fixed-size allocations, 70',
        symbols: ['M'],
        tokens: ['M'],
        mathSymbols: ['M'],
        definition:
          'Total number of equally likely fixed-size allocations, 70. The quantity is evaluated inside the stated finite assignment model.',
        example: 'M',
        readAs: 'Total number of equally likely fixed-size allocations, 70',
        aliases: ['randomization-distribution M'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'randomization-distribution-symbol-11',
        title:
          'Exact absolute-tail fraction conditional on the sharp null and assignment mechanism',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        definition:
          'The probability, under the stated null and assignment mechanism, of a statistic at least as extreme as the observed one, conditional on the fixed outcomes. Exact absolute-tail fraction conditional on the sharp null and assignment mechanism. The quantity is evaluated inside the stated finite assignment model.',
        example: 'p',
        readAs:
          'Exact absolute-tail fraction conditional on the sharp null and assignment mechanism',
        aliases: [
          'randomization-distribution p',
          'Conditional randomization p-value',
          'conditional randomization p-value',
          'p-value is conditional'
        ],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'sampling-sharp-null',
        title: 'Sharp no-effect null',
        symbols: [],
        tokens: [],
        definition:
          'A hypothesis that every learner would have the same outcome under either instruction. It supplies the missing outcomes needed for finite reassignment reasoning.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'Sharp no-effect null',
        aliases: ['sharp no-effect null'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'sampling-absolute-tail',
        title: 'Inclusive absolute tail',
        symbols: [],
        tokens: [],
        definition:
          'The event that a reassigned statistic has magnitude at least the observed magnitude. Equal magnitudes are included.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'Inclusive absolute tail',
        aliases: ['inclusive absolute tail'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'sampling-assignment-mechanism',
        title: 'Uniform fixed-size assignment mechanism',
        symbols: [],
        tokens: [],
        definition:
          'A plan that gives each allowed allocation the same probability. Choosing four A positions among eight creates 70 possible allocations.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'Uniform fixed-size assignment mechanism',
        aliases: ['uniform fixed-size assignment mechanism', 'all 70 allocations equally likely'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'sampling-exact-enumeration',
        title: 'Exact finite enumeration',
        symbols: [],
        tokens: [],
        definition:
          'Calculating a statistic for every allowed allocation rather than estimating a distribution from a random subset.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'Exact finite enumeration',
        aliases: ['exact finite enumeration', 'enumerate all 70'],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        id: 'sampling-distinct-positions',
        title: 'Distinct participant positions despite tied scores',
        symbols: [],
        tokens: [],
        definition:
          'Learners remain distinct experimental units even when two observed scores are equal. Equal scores therefore do not reduce the number of allowed assignments.',
        example:
          'The first four scores average 2.5 and the last four average 6.5, so d=4 points. Only the two complementary extreme allocations have |D| at least four, giving p=2/70.',
        readAs: 'Distinct participant positions despite tied scores',
        aliases: [
          'distinct participant positions despite tied scores',
          'Repeated scores do not merge participant positions'
        ],
        relatedIds: ['randomization-distribution']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova',
        title: 'One-way ANOVA: between and within variation',
        symbols: [],
        tokens: [],
        definition:
          'Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'One-way ANOVA: between and within variation',
        aliases: [
          'Is separation between three method means large compared with variation inside each method?'
        ],
        relatedIds: []
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-1',
        title: 'Separation of adjacent constructed group means, in minutes',
        symbols: ['g'],
        tokens: ['g'],
        mathSymbols: ['g'],
        definition:
          'Separation of adjacent constructed group means, in minutes. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'g',
        readAs: 'Separation of adjacent constructed group means, in minutes',
        aliases: ['one-way-anova g'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-2',
        title: 'Within-group deviation from each mean, in minutes',
        symbols: ['w'],
        tokens: ['w'],
        mathSymbols: ['w'],
        definition:
          'Within-group deviation from each mean, in minutes. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'w',
        readAs: 'Within-group deviation from each mean, in minutes',
        aliases: ['one-way-anova w'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-3',
        title: 'Between-group sum of squared deviations, in squared minutes',
        symbols: ['SSB'],
        tokens: ['SSB', '\\mathrm{SSB}'],
        mathSymbols: ['SSB', '\\mathrm{SSB}'],
        definition:
          'The sum of squared distances between each group mean and the grand mean, weighted by group size. Between-group sum of squared deviations, in squared minutes. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'SSB',
        readAs: 'Between-group sum of squared deviations, in squared minutes',
        aliases: [
          'one-way-anova SSB',
          'Between-group sum of squares',
          'between-group sum of squares',
          'between SS'
        ],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-4',
        title: 'Within-group sum of squared deviations, in squared minutes',
        symbols: ['SSW'],
        tokens: ['SSW', '\\mathrm{SSW}'],
        mathSymbols: ['SSW', '\\mathrm{SSW}'],
        definition:
          'The sum of squared distances from each observation to its own group mean. Within-group sum of squared deviations, in squared minutes. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'SSW',
        readAs: 'Within-group sum of squared deviations, in squared minutes',
        aliases: [
          'one-way-anova SSW',
          'Within-group sum of squares',
          'within-group sum of squares',
          'within SS'
        ],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-5',
        title: 'Total sum of squared deviations, in squared minutes',
        symbols: ['SST'],
        tokens: ['SST', '\\mathrm{SST}'],
        mathSymbols: ['SST', '\\mathrm{SST}'],
        definition:
          'Total sum of squared deviations, in squared minutes. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'SST',
        readAs: 'Total sum of squared deviations, in squared minutes',
        aliases: ['one-way-anova SST'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-6',
        title: 'Between-group mean square, SSB divided by 2',
        symbols: ['MSB'],
        tokens: ['MSB', '\\mathrm{MSB}'],
        mathSymbols: ['MSB', '\\mathrm{MSB}'],
        definition:
          'Between-group mean square, SSB divided by 2. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'MSB',
        readAs: 'Between-group mean square, SSB divided by 2',
        aliases: ['one-way-anova MSB'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-7',
        title: 'Within-group mean square, SSW divided by 6',
        symbols: ['MSW'],
        tokens: ['MSW', '\\mathrm{MSW}'],
        mathSymbols: ['MSW', '\\mathrm{MSW}'],
        definition:
          'Within-group mean square, SSW divided by 6. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'MSW',
        readAs: 'Within-group mean square, SSW divided by 6',
        aliases: ['one-way-anova MSW'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-8',
        title: 'Dimensionless between/within mean-square ratio',
        symbols: ['F'],
        tokens: ['F'],
        mathSymbols: ['F'],
        definition:
          'The between-group mean square divided by the within-group mean square. A positive within-group variance estimate is required. Dimensionless between/within mean-square ratio. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'F',
        readAs: 'Dimensionless between/within mean-square ratio',
        aliases: [
          'one-way-anova F',
          'F ratio for one-way ANOVA',
          'f ratio for one-way anova',
          'F ratio'
        ],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-9',
        title: 'Upper-tail probability from F(2,6) under the stated null model',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        definition:
          'Upper-tail probability from F(2,6) under the stated null model. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'p',
        readAs: 'Upper-tail probability from F(2,6) under the stated null model',
        aliases: ['one-way-anova p'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-10',
        title: 'Between-group degrees of freedom, 3−1=2',
        symbols: ['ν_B'],
        tokens: ['ν_B', '\\nu_B', '\\nu_{B}'],
        mathSymbols: ['ν_B', '\\nu_B', '\\nu_{B}'],
        definition:
          'Between-group degrees of freedom, 3−1=2. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'ν_B',
        readAs: 'Between-group degrees of freedom, 3−1=2',
        aliases: ['one-way-anova ν_B'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'one-way-anova-symbol-11',
        title: 'Within-group degrees of freedom, 9−3=6',
        symbols: ['ν_W'],
        tokens: ['ν_W', '\\nu_W', '\\nu_{W}'],
        mathSymbols: ['ν_W', '\\nu_W', '\\nu_{W}'],
        definition:
          'Within-group degrees of freedom, 9−3=6. The quantity is evaluated inside the stated three-group ANOVA construction.',
        example: 'ν_W',
        readAs: 'Within-group degrees of freedom, 9−3=6',
        aliases: ['one-way-anova ν_W'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'sampling-mean-square',
        title: 'Mean square',
        symbols: [],
        tokens: [],
        definition:
          'A sum of squared deviations divided by its associated degrees of freedom; between and within components use different divisors.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'Mean square',
        aliases: ['mean square', 'mean squares'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'sampling-common-variance',
        title: 'Common error variance',
        symbols: [],
        tokens: [],
        definition:
          'The assumption that every group has the same population error variance; equal displayed constructed spreads do not test it.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'Common error variance',
        aliases: ['common error variance', 'common positive variance'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'sampling-omnibus-test',
        title: 'Omnibus mean comparison',
        symbols: [],
        tokens: [],
        definition:
          'A test whose alternative allows at least one population mean to differ. It does not determine which pair differs.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'Omnibus mean comparison',
        aliases: ['omnibus mean comparison'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'sampling-grand-mean',
        title: 'Grand mean',
        symbols: [],
        tokens: [],
        definition: 'The mean of all observations pooled across groups, weighted by group sizes.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'Grand mean',
        aliases: ['grand mean'],
        relatedIds: ['one-way-anova']
      },
      {
        category: 'chance',
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        id: 'sampling-replication',
        title: 'Replication within treatment groups',
        symbols: [],
        tokens: [],
        definition:
          'Applying the same treatment to more than one independently allocated experimental unit, allowing within-treatment variation to be estimated.',
        example:
          'Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.',
        readAs: 'Replication within treatment groups',
        aliases: ['replication within treatment groups', 'replication'],
        relatedIds: ['one-way-anova']
      },
      {
        id: 'sampling-task-point-unit',
        title: 'Points as a learner-score unit',
        category: 'units',
        symbols: ['point', 'points'],
        tokens: ['point', 'points'],
        mathSymbols: ['point', 'points'],
        notationKinds: ['unit'],
        definition:
          'A declared score unit for the constructed learner outcomes and their mean differences. Points here do not denote a probability or a count of assignments.',
        example: 'v=8 points',
        readAs: 'points',
        aliases: ['learner score unit'],
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        relatedIds: ['randomization-distribution']
      },
      {
        id: 'sampling-allocation-count-unit',
        title: 'Allocations as a finite count',
        category: 'units',
        symbols: ['allocation', 'allocations'],
        tokens: ['allocation', 'allocations'],
        mathSymbols: ['allocation', 'allocations'],
        notationKinds: ['unit'],
        definition:
          'One allocation is one choice of four distinct participant positions for A and the complementary four positions for B. The 70 allocations remain distinct even when scores tie.',
        example: 'M=70 allocations',
        readAs: 'allocations',
        aliases: ['assignment count unit', '70 allocations'],
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        relatedIds: ['randomization-distribution']
      },
      {
        id: 'sampling-reading-count-unit',
        title: 'Readings as a sample count',
        category: 'units',
        symbols: ['reading', 'readings'],
        tokens: ['reading', 'readings'],
        mathSymbols: ['reading', 'readings'],
        notationKinds: ['unit'],
        definition:
          'One reading is one calibration observation. The count n describes the sample size, while millimetres measure its errors and spread.',
        example: 'n=10 readings',
        readAs: 'readings',
        aliases: ['calibration observation count'],
        sourceKeys: ['sampling_student'],
        grammarCards: ['student-mean-interval'],
        formulaCards: ['student-mean-interval'],
        relatedIds: ['student-mean-interval']
      },
      {
        id: 'sampling-allocation-cardinality',
        title: 'Number of qualifying allocations',
        category: 'chance',
        symbols: ['#'],
        tokens: ['#', '\\#'],
        mathSymbols: ['#', '\\#'],
        definition:
          'The count of distinct participant-position allocations satisfying the written condition. The sharp-null tail uses all allocations whose absolute difference is at least the observed absolute difference.',
        example: 'm = #{allocations with |D|≥|d|}',
        readAs: 'number of allocations with',
        aliases: ['allocation tail cardinality'],
        sourceKeys: ['sampling_randomization'],
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        relatedIds: ['randomization-distribution']
      },
      {
        id: 'estimation-analysis-of-variance',
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        relatedIds: ['one-way-anova']
      },
      {
        id: 'binomial-coefficient',
        grammarCards: ['randomization-distribution'],
        formulaCards: ['randomization-distribution'],
        relatedIds: ['randomization-distribution']
      },
      {
        id: 'sampling-packing-method-labels',
        title: 'Packing-method labels',
        category: 'chance',
        symbols: ['A', 'B', 'C'],
        tokens: ['A', 'B', 'C'],
        mathSymbols: ['A', 'B', 'C'],
        definition:
          'A, B and C identify the three packing methods in this constructed one-factor comparison. They are categorical group labels, rather than numerical variables or matrices.',
        example: 'Packing methods A, B and C have three constructed times each.',
        readAs: 'method A, method B, method C',
        aliases: ['packing methods A, B and C'],
        sourceKeys: ['sampling_anova'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        relatedIds: ['one-way-anova']
      }
    ],
    sources: {
      sampling_student: {
        title: 'NIST/SEMATECH · Confidence Limits for the Mean',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm'
      },
      sampling_randomization: {
        title: 'SciPy · permutation_test: exact independent partitions and finite-precision ties',
        url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.permutation_test.html'
      },
      sampling_anova: {
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
