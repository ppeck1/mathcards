/* Original bounded design reference data; build-only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDesignExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance',
        title: 'Sample covariance and signed products',
        symbols: [],
        tokens: [],
        definition:
          'Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.',
        example:
          'The centered products total 10 metre-minutes. Dividing by four gives sample covariance 2.5 metre-minutes.',
        readAs: 'Sample covariance and signed products',
        aliases: [
          'Do longer boards tend to take longer to finish, and how do their paired deviations combine?',
          'sample covariance',
          'covariance'
        ],
        relatedIds: ['variance', 'correlation', 'dot-product']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-1',
        title: 'Trend of finishing time per metre of centered board length',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        definition:
          'Trend of finishing time per metre of centered board length. Its meaning is specific to the declared paired board construction.',
        example: 'c',
        readAs: 'Trend of finishing time per metre of centered board length',
        aliases: ['covariance c'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-2',
        title: 'Scale of the fixed finishing-time residual pattern, in minutes',
        symbols: ['w'],
        tokens: ['w'],
        mathSymbols: ['w'],
        definition:
          'Scale of the fixed finishing-time residual pattern, in minutes. Its meaning is specific to the declared paired board construction.',
        example: 'w',
        readAs: 'Scale of the fixed finishing-time residual pattern, in minutes',
        aliases: ['covariance w'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-3',
        title: 'The five observed board lengths, in metres',
        symbols: ['xᵢ'],
        tokens: ['xᵢ', 'x_i', 'x_{i}'],
        mathSymbols: ['xᵢ', 'x_i', 'x_{i}'],
        definition:
          'The five observed board lengths, in metres. Its meaning is specific to the declared paired board construction.',
        example: 'xᵢ',
        readAs: 'The five observed board lengths, in metres',
        aliases: ['covariance xᵢ'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-4',
        title: 'The five constructed finishing times, in minutes',
        symbols: ['yᵢ'],
        tokens: ['yᵢ', 'y_i', 'y_{i}'],
        mathSymbols: ['yᵢ', 'y_i', 'y_{i}'],
        definition:
          'The five constructed finishing times, in minutes. Its meaning is specific to the declared paired board construction.',
        example: 'yᵢ',
        readAs: 'The five constructed finishing times, in minutes',
        aliases: ['covariance yᵢ'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-5',
        title: 'Sample mean board length, 3 metres',
        symbols: ['x̄'],
        tokens: ['x̄', '\\bar{x}', '\\bar x'],
        mathSymbols: ['x̄', '\\bar{x}', '\\bar x'],
        definition:
          'Sample mean board length, 3 metres. Its meaning is specific to the declared paired board construction.',
        example: 'x̄',
        readAs: 'Sample mean board length, 3 metres',
        aliases: ['covariance x̄'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-6',
        title: 'Sample mean finishing time, 10 minutes',
        symbols: ['ȳ'],
        tokens: ['ȳ', '\\bar{y}', '\\bar y'],
        mathSymbols: ['ȳ', '\\bar{y}', '\\bar y'],
        definition:
          'Sample mean finishing time, 10 minutes. Its meaning is specific to the declared paired board construction.',
        example: 'ȳ',
        readAs: 'Sample mean finishing time, 10 minutes',
        aliases: ['covariance ȳ'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-7',
        title: 'Signed product of the paired length and time deviations, in metre-minutes',
        symbols: ['pᵢ'],
        tokens: ['pᵢ', 'p_i', 'p_{i}'],
        mathSymbols: ['pᵢ', 'p_i', 'p_{i}'],
        definition:
          'Signed product of the paired length and time deviations, in metre-minutes. Its meaning is specific to the declared paired board construction.',
        example: 'pᵢ',
        readAs: 'Signed product of the paired length and time deviations, in metre-minutes',
        aliases: ['covariance pᵢ'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-8',
        title: 'Sum of the five signed products, in metre-minutes',
        symbols: ['P'],
        tokens: ['P'],
        mathSymbols: ['P'],
        definition:
          'Sum of the five signed products, in metre-minutes. Its meaning is specific to the declared paired board construction.',
        example: 'P',
        readAs: 'Sum of the five signed products, in metre-minutes',
        aliases: ['covariance P'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-9',
        title: 'Number of paired board observations, fixed at 5',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Number of paired board observations, fixed at 5. Its meaning is specific to the declared paired board construction.',
        example: 'n',
        readAs: 'Number of paired board observations, fixed at 5',
        aliases: ['covariance n'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'covariance-symbol-10',
        title: 'Sample covariance of length and finishing time, in metre-minutes',
        symbols: ['s_xy'],
        tokens: ['s_xy', 's_{xy}', 's_{xy}'],
        mathSymbols: ['s_xy', 's_{xy}', 's_{xy}'],
        definition:
          'Sample covariance of length and finishing time, in metre-minutes. Its meaning is specific to the declared paired board construction.',
        example: 's_xy',
        readAs: 'Sample covariance of length and finishing time, in metre-minutes',
        aliases: ['covariance s_xy'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'design-centered-product',
        title: 'Centered product',
        symbols: [],
        tokens: [],
        definition:
          'A paired signed product after subtracting each variable’s own sample mean. Matching deviation signs give a positive product; opposite signs give a negative product.',
        example:
          'The centered products total 10 metre-minutes. Dividing by four gives sample covariance 2.5 metre-minutes.',
        readAs: 'Centered product',
        aliases: ['paired deviations', 'signed products', 'centered products'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        id: 'design-orthogonal-residual',
        title: 'Orthogonal residual pattern',
        symbols: [],
        tokens: [],
        definition:
          'A residual pattern whose paired cross-products with the centered lengths sum to zero. Scaling this particular pattern leaves its contribution to covariance equal to zero.',
        example:
          'The centered products total 10 metre-minutes. Dividing by four gives sample covariance 2.5 metre-minutes.',
        readAs: 'Orthogonal residual pattern',
        aliases: ['fixed residual pattern', 'orthogonal residual'],
        relatedIds: ['covariance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval',
        title: 'A normal-variance confidence interval',
        symbols: [],
        tokens: [],
        definition:
          'Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.',
        example:
          'The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.',
        readAs: 'A normal-variance confidence interval',
        aliases: [
          'How uncertain is a calibration process’s variance when only its sample spread is known?',
          'normal variance interval',
          'variance confidence interval'
        ],
        relatedIds: ['student-mean-interval', 'confidence-interval', 'variance']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-1',
        title: 'Whole number of independent calibration readings',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Whole number of independent calibration readings. Its meaning is specific to the declared normal-variance interval.',
        example: 'n',
        readAs: 'Whole number of independent calibration readings',
        aliases: ['normal-variance-interval n'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-2',
        title: 'Observed sample standard deviation, in millimetres',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        definition:
          'Observed sample standard deviation, in millimetres. Its meaning is specific to the declared normal-variance interval.',
        example: 's',
        readAs: 'Observed sample standard deviation, in millimetres',
        aliases: ['normal-variance-interval s'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-3',
        title: 'Degrees of freedom n−1 for the estimated variance',
        symbols: ['ν'],
        tokens: ['ν', '\\nu'],
        mathSymbols: ['ν', '\\nu'],
        definition:
          'Degrees of freedom n−1 for the estimated variance. Its meaning is specific to the declared normal-variance interval.',
        example: 'ν',
        readAs: 'Degrees of freedom n−1 for the estimated variance',
        aliases: ['normal-variance-interval ν'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-4',
        title: 'Observed sample variance s², in squared millimetres',
        symbols: ['V'],
        tokens: ['V'],
        mathSymbols: ['V'],
        definition:
          'Observed sample variance s², in squared millimetres. Its meaning is specific to the declared normal-variance interval.',
        example: 'V',
        readAs: 'Observed sample variance s², in squared millimetres',
        aliases: ['normal-variance-interval V'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-5',
        title: 'Numerical chi-square 0.025 quantile for ν degrees of freedom',
        symbols: ['q_L'],
        tokens: ['q_L', 'q_{L}'],
        mathSymbols: ['q_L', 'q_{L}'],
        definition:
          'Numerical chi-square 0.025 quantile for ν degrees of freedom. Its meaning is specific to the declared normal-variance interval.',
        example: 'q_L',
        readAs: 'Numerical chi-square 0.025 quantile for ν degrees of freedom',
        aliases: ['normal-variance-interval q_L'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-6',
        title: 'Numerical chi-square 0.975 quantile for ν degrees of freedom',
        symbols: ['q_U'],
        tokens: ['q_U', 'q_{U}'],
        mathSymbols: ['q_U', 'q_{U}'],
        definition:
          'Numerical chi-square 0.975 quantile for ν degrees of freedom. Its meaning is specific to the declared normal-variance interval.',
        example: 'q_U',
        readAs: 'Numerical chi-square 0.975 quantile for ν degrees of freedom',
        aliases: ['normal-variance-interval q_U'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-7',
        title: 'Lower confidence endpoint for variance, in squared millimetres',
        symbols: ['L'],
        tokens: ['L'],
        mathSymbols: ['L'],
        definition:
          'Lower confidence endpoint for variance, in squared millimetres. Its meaning is specific to the declared normal-variance interval.',
        example: 'L',
        readAs: 'Lower confidence endpoint for variance, in squared millimetres',
        aliases: ['normal-variance-interval L'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-8',
        title: 'Upper confidence endpoint for variance, in squared millimetres',
        symbols: ['U'],
        tokens: ['U'],
        mathSymbols: ['U'],
        definition:
          'Upper confidence endpoint for variance, in squared millimetres. Its meaning is specific to the declared normal-variance interval.',
        example: 'U',
        readAs: 'Upper confidence endpoint for variance, in squared millimetres',
        aliases: ['normal-variance-interval U'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-9',
        title: 'Computed variance interval with endpoints L and U',
        symbols: ['I'],
        tokens: ['I'],
        mathSymbols: ['I'],
        definition:
          'Computed variance interval with endpoints L and U. Its meaning is specific to the declared normal-variance interval.',
        example: 'I',
        readAs: 'Computed variance interval with endpoints L and U',
        aliases: ['normal-variance-interval I'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'normal-variance-interval-symbol-10',
        title: 'Unknown population variance, whose numerical location is not supplied',
        symbols: ['σ²'],
        tokens: ['σ²', '\\sigma^2', '\\sigma^{2}', 'σ^2'],
        mathSymbols: ['σ²', '\\sigma^2', '\\sigma^{2}', 'σ^2'],
        definition:
          'Unknown population variance, whose numerical location is not supplied. Its numerical value is not supplied or marked in this scene.',
        example: 'σ²',
        readAs: 'Unknown population variance, whose numerical location is not supplied',
        aliases: ['normal-variance-interval σ²'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'design-chi-square-quantile',
        title: 'Chi-square quantile',
        symbols: ['χ²_{p,ν}'],
        tokens: ['χ²_{p,ν}', '\\chi^2_{p,\\nu}', '\\chi^{2}_{p,\\nu}'],
        definition:
          'A numerical cutoff with a specified cumulative probability under a chi-square distribution and stated degrees of freedom. The lower and upper quantiles exchange positions when the variance pivot is inverted.',
        example:
          'The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.',
        readAs: 'Chi-square quantile',
        aliases: ['chi-square quantiles', 'chi-square quantile'],
        relatedIds: ['normal-variance-interval'],
        mathSymbols: ['χ²_{p,ν}', '\\chi^2_{p,\\nu}', '\\chi^{2}_{p,\\nu}']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'design-variance-pivot',
        title: 'Variance pivot',
        symbols: [],
        tokens: [],
        definition:
          'The statistic (n−1)s²/σ² has a chi-square distribution under independent normal observations. Its distribution does not depend on the unknown mean or variance after this scaling.',
        example:
          'The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.',
        readAs: 'Variance pivot',
        aliases: ['variance pivot'],
        relatedIds: ['normal-variance-interval']
      },
      {
        category: 'chance',
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        id: 'design-sample-variance',
        title: 'Sample variance',
        symbols: ['s²'],
        tokens: ['s²', 's^2', 's^{2}'],
        definition:
          'The sum of squared deviations from a sample mean divided by n−1. It estimates spread from a sample and uses squared measurement units.',
        example:
          'The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.',
        readAs: 'Sample variance',
        aliases: ['sample variance', 'observed sample variance'],
        relatedIds: ['normal-variance-interval'],
        mathSymbols: ['s²', 's^2', 's^{2}']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power',
        title: 'Replication and normal-test power',
        symbols: [],
        tokens: [],
        definition:
          'For a specified true alternative and test, the probability that the test rejects its null hypothesis. It depends on the assumed effect, sample sizes, spread and rejection rule; it is not an observed effect or a posterior probability. Declare a positive-direction mean shift and a known common reading spread before collecting data. Independent readings per group determine the standard error of the mean difference; a fixed one-sided cutoff then separates rejection from non-rejection under the assumed shift.',
        example:
          'The plan has 32 total readings. The assumed half-millimetre mean difference is compared with the cutoff determined by the two-group standard error.',
        readAs: 'Replication and normal-test power',
        aliases: [
          'How does collecting more independent readings per jig change the chance of detecting a declared mean shift?',
          'statistical power',
          'normal-test power',
          'power'
        ],
        relatedIds: [
          'hypothesis-test',
          'normal-mean-interval',
          'normal-distribution',
          'randomized-block-design'
        ]
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-1',
        title: 'Whole number of independent readings per group',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Whole number of independent readings per group. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'n',
        readAs: 'Whole number of independent readings per group',
        aliases: ['normal-test-power n'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-2',
        title: 'Total number of readings across the two equal groups',
        symbols: ['N'],
        tokens: ['N'],
        mathSymbols: ['N'],
        definition:
          'Total number of readings across the two equal groups. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'N',
        readAs: 'Total number of readings across the two equal groups',
        aliases: ['normal-test-power N'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-3',
        title: 'Assumed true increase in population mean error, in millimetres',
        symbols: ['δ'],
        tokens: ['δ', '\\delta'],
        mathSymbols: ['δ', '\\delta'],
        definition:
          'Assumed true increase in population mean error, in millimetres. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'δ',
        readAs: 'Assumed true increase in population mean error, in millimetres',
        aliases: ['normal-test-power δ'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-4',
        title: 'Known common reading standard deviation, in millimetres',
        symbols: ['σ'],
        tokens: ['σ', '\\sigma'],
        mathSymbols: ['σ', '\\sigma'],
        definition:
          'Known common reading standard deviation, in millimetres. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'σ',
        readAs: 'Known common reading standard deviation, in millimetres',
        aliases: ['normal-test-power σ'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-5',
        title: 'Standard error of the two-group mean difference, in millimetres',
        symbols: ['SE'],
        tokens: ['SE', '\\mathrm{SE}'],
        mathSymbols: ['SE', '\\mathrm{SE}'],
        definition:
          'Standard error of the two-group mean difference, in millimetres. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'SE',
        readAs: 'Standard error of the two-group mean difference, in millimetres',
        aliases: ['normal-test-power SE'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-6',
        title: 'Numerical standard-normal 0.95 quantile',
        symbols: ['z₀.₉₅'],
        tokens: ['z₀.₉₅', 'z_{0.95}', 'z_0.95'],
        mathSymbols: ['z₀.₉₅', 'z_{0.95}', 'z_0.95'],
        definition:
          'Numerical standard-normal 0.95 quantile. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'z₀.₉₅',
        readAs: 'Numerical standard-normal 0.95 quantile',
        aliases: ['normal-test-power z₀.₉₅'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-7',
        title: 'Predeclared positive-direction rejection cutoff, in millimetres',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        definition:
          'Predeclared positive-direction rejection cutoff, in millimetres. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'c',
        readAs: 'Predeclared positive-direction rejection cutoff, in millimetres',
        aliases: ['normal-test-power c'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-8',
        title: 'Maximum null rejection probability, fixed at 0.05',
        symbols: ['α'],
        tokens: ['α', '\\alpha'],
        mathSymbols: ['α', '\\alpha'],
        definition:
          'Maximum null rejection probability, fixed at 0.05. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'α',
        readAs: 'Maximum null rejection probability, fixed at 0.05',
        aliases: ['normal-test-power α'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-9',
        title: 'Non-rejection probability at the entered true difference',
        symbols: ['β'],
        tokens: ['β', '\\beta'],
        mathSymbols: ['β', '\\beta'],
        definition:
          'Non-rejection probability at the entered true difference. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: 'β',
        readAs: 'Non-rejection probability at the entered true difference',
        aliases: ['normal-test-power β'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'normal-test-power-symbol-10',
        title: 'Rejection probability at the entered true difference',
        symbols: ['1−β'],
        tokens: ['1−β', '1-β', '1-\\beta'],
        mathSymbols: ['1−β', '1-β', '1-\\beta'],
        definition:
          'Rejection probability at the entered true difference. Its meaning is specific to the declared predeclared normal-test planning model.',
        example: '1−β',
        readAs: 'Rejection probability at the entered true difference',
        aliases: ['normal-test-power 1−β'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'design-type-ii-error',
        title: 'Type II error',
        symbols: [],
        tokens: [],
        definition:
          'Failure to reject a false null hypothesis. In this positive-direction planning model, β is a Type II error probability only for a true positive shift; at zero shift the null holds.',
        example:
          'The plan has 32 total readings. The assumed half-millimetre mean difference is compared with the cutoff determined by the two-group standard error.',
        readAs: 'Type II error',
        aliases: ['Type II error', 'Type II error probability'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'design-exceedance-probability',
        title: 'Exceedance probability',
        symbols: [],
        tokens: [],
        definition:
          'The probability that a statistic exceeds a stated cutoff under a specified distribution. An exceedance curve plots this upper-tail probability against the cutoff; its vertical height is probability, not density.',
        example:
          'The plan has 32 total readings. The assumed half-millimetre mean difference is compared with the cutoff determined by the two-group standard error.',
        readAs: 'Exceedance probability',
        aliases: ['exceedance curves', 'exceedance probability', 'upper-tail probability'],
        relatedIds: ['normal-test-power']
      },
      {
        category: 'chance',
        sourceKeys: ['design_power'],
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        id: 'design-replication-planning',
        title: 'Independent replication',
        symbols: [],
        tokens: [],
        definition:
          'Additional independent experimental units or readings increase the amount of information in the stated design. Repeated readings that share unmodeled dependence do not automatically provide the same precision gain.',
        example:
          'The plan has 32 total readings. The assumed half-millimetre mean difference is compared with the cutoff determined by the two-group standard error.',
        readAs: 'Independent replication',
        aliases: ['replication', 'independent readings per group'],
        relatedIds: ['normal-test-power']
      },
      {
        id: 'design-chi-square-distribution',
        title: 'Chi-square distribution',
        category: 'chance',
        symbols: ['χ²'],
        tokens: ['χ²', 'χ^2', '\\chi^2', '\\chi^{2}'],
        mathSymbols: ['χ²', 'χ^2', '\\chi^2', '\\chi^{2}'],
        definition:
          'The distribution of the sum of squares of a stated number of independent standard normal variables. That count is its degrees of freedom. Here the normal-variance pivot has this distribution; χ² elsewhere may instead name a computed discrepancy statistic.',
        example:
          'Nine degrees of freedom select the chi-square distribution used to obtain q_L and q_U.',
        readAs: 'chi-square distribution',
        aliases: ['chi-square distribution'],
        sourceKeys: ['design_chisquare'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        relatedIds: ['normal-variance-interval', 'design-chi-square-quantile']
      },
      {
        id: 'sample-mean',
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        relatedIds: ['covariance']
      },
      {
        id: 'sampling-reading-count-unit',
        grammarCards: ['normal-variance-interval', 'normal-test-power'],
        formulaCards: ['normal-variance-interval', 'normal-test-power'],
        relatedIds: ['normal-variance-interval', 'normal-test-power']
      },
      {
        id: 'summation',
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        relatedIds: ['covariance']
      },
      {
        id: 'distribution-normal-function-heads',
        grammarCards: ['normal-test-power'],
        formulaCards: ['normal-test-power'],
        aliases: ['standard normal CDF'],
        relatedIds: ['normal-test-power']
      },
      {
        id: 'design-covariance-product-unit',
        title: 'Metre-minutes as covariance units',
        category: 'units',
        symbols: ['m·min'],
        tokens: ['m·min', 'm.min', 'm min'],
        mathSymbols: ['m·min', 'm.min', 'm min'],
        notationKinds: ['unit'],
        definition:
          'The product of a length unit and a time unit. Here a paired metre deviation multiplied by a minute deviation gives metre-minutes; this is neither speed nor a dimensionless correlation.',
        example: 's_xy = 2.5 m·min',
        readAs: 'metre-minutes',
        aliases: ['metre-minutes', 'metre minutes'],
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        relatedIds: ['covariance', 'compound-unit']
      },
      {
        id: 'design-time-per-length-unit',
        title: 'Minutes per metre',
        category: 'units',
        symbols: ['min/m'],
        tokens: ['min/m'],
        mathSymbols: ['min/m'],
        notationKinds: ['unit'],
        definition:
          'Minutes of finishing-time change per metre of length change. In this constructed rule it is the unit of the trend coefficient; it is not the covariance’s product unit.',
        example: 'c = 1 min/m',
        readAs: 'minutes per metre',
        aliases: ['minutes per metre'],
        sourceKeys: ['design_covariance'],
        grammarCards: ['covariance'],
        formulaCards: ['covariance'],
        relatedIds: ['covariance', 'compound-unit']
      },
      {
        id: 'design-variance-unit',
        title: 'Squared millimetres as variance units',
        category: 'units',
        symbols: ['mm²'],
        tokens: ['mm²', 'mm^2'],
        mathSymbols: ['mm²', 'mm^2'],
        notationKinds: ['unit'],
        definition:
          'A squared error-length unit. Multiplying two millimetre deviations gives squared millimetres; variance and its endpoints use this unit without representing a physical area. Standard-deviation endpoints return to millimetres after taking square roots.',
        example: 'Observed variance V = 1 mm²',
        readAs: 'squared millimetres of variance',
        aliases: ['squared millimetres', 'variance units'],
        sourceKeys: ['design_variance'],
        grammarCards: ['normal-variance-interval'],
        formulaCards: ['normal-variance-interval'],
        relatedIds: ['normal-variance-interval', 'powered-unit']
      },
      {
        id: 'logarithmic-axis',
        title: 'Shifted logarithmic axis',
        category: 'functions',
        symbols: [],
        tokens: [],
        definition:
          'An axis whose positions follow a stated logarithmic transformation while its tick labels retain the original quantity. Here vertical position follows ln(1+F) on fixed original F bounds: adding one keeps zero defined, and large values are compressed. Equal vertical distances represent equal ratios of 1+F, rather than equal additive changes in F.',
        example:
          'The vertical distance from F=0 to F=1 equals that from F=1 to F=3, since 1+F doubles in each step.',
        readAs: 'shifted logarithmic axis',
        aliases: ['logarithmic spacing', 'logarithmic axis'],
        sourceKeys: ['logs'],
        grammarCards: ['one-way-anova'],
        formulaCards: ['one-way-anova'],
        relatedIds: ['logarithm', 'one-way-anova']
      }
    ],
    sources: {
      design_covariance: {
        title: 'NIST/SEMATECH · Mean Vector and Covariance Matrix',
        url: 'https://www.itl.nist.gov/div898/handbook/pmc/section5/pmc541.htm'
      },
      design_variance: {
        title: 'NIST/SEMATECH · Chi-Square Test for the Variance',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda358.htm'
      },
      design_power: {
        title: 'NIST/SEMATECH · Sample Sizes Required',
        url: 'https://www.itl.nist.gov/div898/handbook/prc/section2/prc222.htm'
      },
      design_chisquare: {
        title: 'NIST/SEMATECH · Chi-Square Distribution',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3666.htm'
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
