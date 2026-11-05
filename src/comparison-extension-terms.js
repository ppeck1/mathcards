/* Original bounded comparison reference data; build-only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasComparisonExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix',
        title: 'A covariance matrix and its ellipse',
        symbols: [],
        tokens: [],
        definition:
          'Center five paired positioning errors, place the two sample variances on a matrix diagonal and their sample covariance in both off-diagonal cells. The trace adds the two variances; the eigenvalues determine the squared radii of a descriptive covariance ellipse.',
        example:
          'The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.',
        readAs: 'A covariance matrix and its ellipse',
        aliases: [
          'How do horizontal and vertical positioning errors vary together?',
          'covariance matrix',
          'sample covariance matrix'
        ],
        relatedIds: ['covariance', 'linear-map', 'determinant', 'variance']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-1',
        title: 'Horizontal error-pattern amplitude, in millimetres',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        definition:
          'Horizontal error-pattern amplitude, in millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'a',
        readAs: 'Horizontal error-pattern amplitude, in millimetres',
        aliases: ['covariance-matrix a'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-2',
        title: 'Signed shared vertical-pattern coefficient, in millimetres',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        definition:
          'Signed shared vertical-pattern coefficient, in millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'b',
        readAs: 'Signed shared vertical-pattern coefficient, in millimetres',
        aliases: ['covariance-matrix b'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-3',
        title: 'Orthogonal residual-pattern amplitude, in millimetres',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        definition:
          'Orthogonal residual-pattern amplitude, in millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'c',
        readAs: 'Orthogonal residual-pattern amplitude, in millimetres',
        aliases: ['covariance-matrix c'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-4',
        title: 'Horizontal sample variance, in squared millimetres',
        symbols: ['Sxx'],
        tokens: ['Sxx', 'S_{xx}'],
        mathSymbols: ['Sxx', 'S_{xx}'],
        definition:
          'Horizontal sample variance, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'Sxx',
        readAs: 'Horizontal sample variance, in squared millimetres',
        aliases: ['covariance-matrix Sxx'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-5',
        title: 'Paired sample covariance, in squared millimetres',
        symbols: ['Sxy'],
        tokens: ['Sxy', 'S_{xy}'],
        mathSymbols: ['Sxy', 'S_{xy}'],
        definition:
          'Paired sample covariance, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'Sxy',
        readAs: 'Paired sample covariance, in squared millimetres',
        aliases: ['covariance-matrix Sxy'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-6',
        title: 'Vertical sample variance, in squared millimetres',
        symbols: ['Syy'],
        tokens: ['Syy', 'S_{yy}'],
        mathSymbols: ['Syy', 'S_{yy}'],
        definition:
          'Vertical sample variance, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'Syy',
        readAs: 'Vertical sample variance, in squared millimetres',
        aliases: ['covariance-matrix Syy'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-7',
        title: 'Symmetric two-by-two sample covariance matrix',
        symbols: ['S'],
        tokens: ['S'],
        mathSymbols: ['S'],
        definition:
          'Symmetric two-by-two sample covariance matrix. The role belongs to this stated two-axis covariance construction.',
        example: 'S',
        readAs: 'Symmetric two-by-two sample covariance matrix',
        aliases: ['covariance-matrix S'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-8',
        title: 'Trace: total sample coordinate variance, in squared millimetres',
        symbols: ['tr(S)'],
        tokens: ['tr(S)', '\\operatorname{tr}(S)'],
        mathSymbols: ['tr(S)', '\\operatorname{tr}(S)'],
        definition:
          'Trace: total sample coordinate variance, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'tr(S)',
        readAs: 'Trace: total sample coordinate variance, in squared millimetres',
        aliases: ['covariance-matrix tr(S)'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-9',
        title: 'Determinant of this covariance matrix, in fourth-power millimetres',
        symbols: ['D'],
        tokens: ['D'],
        mathSymbols: ['D'],
        definition:
          'Determinant of this covariance matrix, in fourth-power millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'D',
        readAs: 'Determinant of this covariance matrix, in fourth-power millimetres',
        aliases: ['covariance-matrix D'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-10',
        title: 'Larger covariance eigenvalue, in squared millimetres',
        symbols: ['λ₁'],
        tokens: ['λ₁', '\\lambda_1', 'λ_1'],
        mathSymbols: ['λ₁', '\\lambda_1', 'λ_1'],
        definition:
          'Larger covariance eigenvalue, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'λ₁',
        readAs: 'Larger covariance eigenvalue, in squared millimetres',
        aliases: ['covariance-matrix λ₁'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-11',
        title: 'Smaller covariance eigenvalue, in squared millimetres',
        symbols: ['λ₂'],
        tokens: ['λ₂', '\\lambda_2', 'λ_2'],
        mathSymbols: ['λ₂', '\\lambda_2', 'λ_2'],
        definition:
          'Smaller covariance eigenvalue, in squared millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'λ₂',
        readAs: 'Smaller covariance eigenvalue, in squared millimetres',
        aliases: ['covariance-matrix λ₂'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-12',
        title: 'Major semiaxis radius, the square root of the larger eigenvalue, in millimetres',
        symbols: ['r₁'],
        tokens: ['r₁', 'r_1'],
        mathSymbols: ['r₁', 'r_1'],
        definition:
          'Major semiaxis radius, the square root of the larger eigenvalue, in millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'r₁',
        readAs: 'Major semiaxis radius, the square root of the larger eigenvalue, in millimetres',
        aliases: ['covariance-matrix r₁'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-13',
        title: 'Minor semiaxis radius, the square root of the smaller eigenvalue, in millimetres',
        symbols: ['r₂'],
        tokens: ['r₂', 'r_2'],
        mathSymbols: ['r₂', 'r_2'],
        definition:
          'Minor semiaxis radius, the square root of the smaller eigenvalue, in millimetres. The role belongs to this stated two-axis covariance construction.',
        example: 'r₂',
        readAs: 'Minor semiaxis radius, the square root of the smaller eigenvalue, in millimetres',
        aliases: ['covariance-matrix r₂'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-14',
        title: 'Matrix rank: one for a line, two for positive residual spread',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        definition:
          'Matrix rank: one for a line, two for positive residual spread. The role belongs to this stated two-axis covariance construction.',
        example: 'k',
        readAs: 'Matrix rank: one for a line, two for positive residual spread',
        aliases: ['covariance-matrix k'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'covariance-matrix-symbol-15',
        title: 'Number of constructed paired errors, fixed at five',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Number of constructed paired errors, fixed at five. The role belongs to this stated two-axis covariance construction.',
        example: 'n',
        readAs: 'Number of constructed paired errors, fixed at five',
        aliases: ['covariance-matrix n'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'comparison-covariance-ellipse',
        title: 'Covariance ellipse',
        symbols: [],
        tokens: [],
        definition:
          'A descriptive ellipse centered on the coordinate means, with principal semiaxes equal to square roots of covariance eigenvalues. Its one-standard-deviation geometry is not a confidence region or an enclosure probability.',
        example:
          'The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.',
        readAs: 'Covariance ellipse',
        aliases: ['covariance ellipse', 'descriptive covariance ellipse'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'comparison-eigenvalue',
        title: 'Covariance eigenvalue',
        symbols: [],
        tokens: [],
        definition:
          'A scalar measuring covariance spread along a principal direction. For this symmetric positive semidefinite matrix, both eigenvalues are nonnegative; their sum is the trace and their product is the determinant.',
        example:
          'The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.',
        readAs: 'Covariance eigenvalue',
        aliases: ['eigenvalues', 'eigenvalue'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'comparison-principal-axes',
        title: 'Principal axes',
        symbols: [],
        tokens: [],
        definition:
          'Perpendicular eigenvector directions of a symmetric covariance matrix. The circular case does not select a unique orientation.',
        example:
          'The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.',
        readAs: 'Principal axes',
        aliases: ['principal axes', 'principal direction'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'linear',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        id: 'comparison-positive-semidefinite',
        title: 'Positive semidefinite covariance',
        symbols: [],
        tokens: [],
        definition:
          'A matrix whose quadratic spread is nonnegative in every real direction. Zero spread in a direction is allowed, so positive semidefinite does not require positive determinant.',
        example:
          'The matrix entries are 2.5, 1.875 and 2.28125 mm². Their diagonal sum is 4.78125 mm²; the descriptive ellipse is tilted.',
        readAs: 'Positive semidefinite covariance',
        aliases: ['positive semidefinite'],
        relatedIds: ['covariance-matrix']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank',
        title: 'Paired differences and signed ranks',
        symbols: [],
        tokens: [],
        definition:
          'Keep each packing comparison paired, omit exact zero differences, rank the remaining absolute differences and average ranks at ties. Add ranks by sign, then compare the absolute signed score with every fair-sign assignment of those same ranks.',
        example:
          'The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.',
        readAs: 'Paired differences and signed ranks',
        aliases: [
          'How unusual is the balance of signed ranks for five paired packing comparisons?',
          'Wilcoxon signed-rank test',
          'signed-rank test'
        ],
        relatedIds: ['sign-test', 'randomization-distribution', 'hypothesis-test']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-1',
        title: 'Fifth B-minus-A packing-time difference, in minutes',
        symbols: ['d₅'],
        tokens: ['d₅', 'd_5'],
        mathSymbols: ['d₅', 'd_5'],
        definition:
          'Fifth B-minus-A packing-time difference, in minutes. The role belongs to this stated paired conditional sign comparison.',
        example: 'd₅',
        readAs: 'Fifth B-minus-A packing-time difference, in minutes',
        aliases: ['wilcoxon-signed-rank d₅'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-2',
        title: 'Five paired B-minus-A differences, in minutes',
        symbols: ['dᵢ'],
        tokens: ['dᵢ', 'd_i'],
        mathSymbols: ['dᵢ', 'd_i'],
        definition:
          'Five paired B-minus-A differences, in minutes. The role belongs to this stated paired conditional sign comparison.',
        example: 'dᵢ',
        readAs: 'Five paired B-minus-A differences, in minutes',
        aliases: ['wilcoxon-signed-rank dᵢ'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-3',
        title:
          'Absolute sizes of the five paired differences; exact zero is omitted before ranking',
        symbols: ['|dᵢ|'],
        tokens: ['|dᵢ|', '|d_i|', '\\lvert d_i\\rvert'],
        mathSymbols: ['|dᵢ|', '|d_i|', '\\lvert d_i\\rvert'],
        definition:
          'Absolute sizes of the five paired differences; exact zero is omitted before ranking. The role belongs to this stated paired conditional sign comparison.',
        example: '|dᵢ|',
        readAs:
          'Absolute sizes of the five paired differences; exact zero is omitted before ranking',
        aliases: ['wilcoxon-signed-rank |dᵢ|'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-4',
        title: 'Average absolute-difference data ranks of nonzero pairs',
        symbols: ['rᵢ'],
        tokens: ['rᵢ', 'r_i'],
        mathSymbols: ['rᵢ', 'r_i'],
        definition:
          'Average absolute-difference data ranks of nonzero pairs. The role belongs to this stated paired conditional sign comparison.',
        example: 'rᵢ',
        readAs: 'Average absolute-difference data ranks of nonzero pairs',
        aliases: ['wilcoxon-signed-rank rᵢ'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-5',
        title: 'Sum of ranks attached to positive differences',
        symbols: ['W⁺'],
        tokens: ['W⁺', 'W^+', 'W^{+}'],
        mathSymbols: ['W⁺', 'W^+', 'W^{+}'],
        definition:
          'Sum of ranks attached to positive differences. The role belongs to this stated paired conditional sign comparison.',
        example: 'W⁺',
        readAs: 'Sum of ranks attached to positive differences',
        aliases: ['wilcoxon-signed-rank W⁺'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-6',
        title: 'Sum of ranks attached to negative differences',
        symbols: ['W⁻'],
        tokens: ['W⁻', 'W^-', 'W^{-}'],
        mathSymbols: ['W⁻', 'W^-', 'W^{-}'],
        definition:
          'Sum of ranks attached to negative differences. The role belongs to this stated paired conditional sign comparison.',
        example: 'W⁻',
        readAs: 'Sum of ranks attached to negative differences',
        aliases: ['wilcoxon-signed-rank W⁻'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-7',
        title: 'Observed signed rank score W⁺−W⁻',
        symbols: ['T'],
        tokens: ['T'],
        mathSymbols: ['T'],
        definition:
          'Observed signed rank score W⁺−W⁻. The role belongs to this stated paired conditional sign comparison.',
        example: 'T',
        readAs: 'Observed signed rank score W⁺−W⁻',
        aliases: ['wilcoxon-signed-rank T'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-8',
        title: 'Number of nonzero paired differences after zero omission',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Number of nonzero paired differences after zero omission. The role belongs to this stated paired conditional sign comparison.',
        example: 'n',
        readAs: 'Number of nonzero paired differences after zero omission',
        aliases: ['wilcoxon-signed-rank n'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-9',
        title: 'Number of fair-sign assignments meeting the inclusive absolute-score threshold',
        symbols: ['m'],
        tokens: ['m'],
        mathSymbols: ['m'],
        definition:
          'Number of fair-sign assignments meeting the inclusive absolute-score threshold. The role belongs to this stated paired conditional sign comparison.',
        example: 'm',
        readAs: 'Number of fair-sign assignments meeting the inclusive absolute-score threshold',
        aliases: ['wilcoxon-signed-rank m'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-10',
        title: 'Total conditional sign assignments, 2 raised to n',
        symbols: ['M'],
        tokens: ['M'],
        mathSymbols: ['M'],
        definition:
          'Total conditional sign assignments, 2 raised to n. The role belongs to this stated paired conditional sign comparison.',
        example: 'M',
        readAs: 'Total conditional sign assignments, 2 raised to n',
        aliases: ['wilcoxon-signed-rank M'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'wilcoxon-signed-rank-symbol-11',
        title: 'Inclusive two-sided conditional signed-rank tail probability',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        definition:
          'Inclusive two-sided conditional signed-rank tail probability. The role belongs to this stated paired conditional sign comparison.',
        example: 'p',
        readAs: 'Inclusive two-sided conditional signed-rank tail probability',
        aliases: ['wilcoxon-signed-rank p'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank', 'mann-whitney'],
        formulaCards: ['wilcoxon-signed-rank', 'mann-whitney'],
        id: 'comparison-data-rank',
        title: 'Data rank',
        symbols: [],
        tokens: [],
        definition:
          'The ordinal position of a measurement among ordered observations. Its ordinal value does not measure the amount of numerical separation.',
        example:
          'The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.',
        readAs: 'Data rank',
        aliases: ['rank', 'data rank', 'data ranks', 'ranks', 'ranking'],
        relatedIds: ['wilcoxon-signed-rank', 'mann-whitney'],
        wordMatches: ['data rank', 'data ranks', 'pooled ranks', 'absolute ranks']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank', 'mann-whitney'],
        formulaCards: ['wilcoxon-signed-rank', 'mann-whitney'],
        id: 'comparison-midrank',
        title: 'Average tied rank',
        symbols: [],
        tokens: [],
        definition:
          'The average of the ordinal positions occupied by a tied group. Two measurements occupying positions two and three each receive rank 2.5.',
        example:
          'The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.',
        readAs: 'Average tied rank',
        aliases: ['average rank', 'average ranks', 'midranks', 'tied absolute differences'],
        relatedIds: ['wilcoxon-signed-rank', 'mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'comparison-zero-omission',
        title: 'Wilcoxon zero omission',
        symbols: [],
        tokens: [],
        definition:
          'Remove exact zero paired differences before assigning absolute-difference ranks. This convention differs from Pratt ranking, which includes zeros while assigning ranks.',
        example:
          'The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.',
        readAs: 'Wilcoxon zero omission',
        aliases: ['zero omission', 'omit exact zero differences', 'Wilcoxon convention'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        id: 'comparison-sign-assignment',
        title: 'Conditional sign assignment',
        symbols: [],
        tokens: [],
        definition:
          'One possible choice of positive or negative sign for each nonzero observed absolute difference. The signed-rank reference keeps the magnitudes and their midranks fixed while enumerating every sign choice.',
        example:
          'The positive ranks total 11 and negative ranks total 4, so the signed score is 7. Fourteen of 32 sign assignments are at least as extreme: p=0.4375.',
        readAs: 'Conditional sign assignment',
        aliases: ['sign assignments', 'fair-sign assignment', 'null sign patterns'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney',
        title: 'Mann–Whitney ranks and pair comparisons',
        symbols: [],
        tokens: [],
        definition:
          'Pool six learner scores, average the data ranks at ties, and sum group A’s ranks. Subtract six to obtain U_A, which also counts A-over-B wins with half a win for each tie. Compare it with all 20 labeled three-versus-three allocations under the exchangeable-label null.',
        example:
          'The A scores win three of nine cross-group comparisons. U_A=3 and θ=1/3; fourteen of 20 labeled allocations are at least as far from 4.5, giving p=0.7.',
        readAs: 'Mann–Whitney ranks and pair comparisons',
        aliases: [
          'How do two independent groups compare when the order of scores matters?',
          'Mann–Whitney test',
          'Mann Whitney U',
          'rank-sum test'
        ],
        relatedIds: ['randomization-distribution', 'wilcoxon-signed-rank', 'probability']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-1',
        title: 'Uncalibrated third A learner score, in points',
        symbols: ['v'],
        tokens: ['v'],
        mathSymbols: ['v'],
        definition:
          'Uncalibrated third A learner score, in points. The role belongs to this stated independent-group rank comparison.',
        example: 'v',
        readAs: 'Uncalibrated third A learner score, in points',
        aliases: ['mann-whitney v'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-2',
        title: 'Common positive score-calibration multiplier',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        definition:
          'Common positive score-calibration multiplier. The role belongs to this stated independent-group rank comparison.',
        example: 'k',
        readAs: 'Common positive score-calibration multiplier',
        aliases: ['mann-whitney k'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-3',
        title: 'Three calibrated group A scores, in points',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        definition:
          'Three calibrated group A scores, in points. The role belongs to this stated independent-group rank comparison.',
        example: 'A',
        readAs: 'Three calibrated group A scores, in points',
        aliases: ['mann-whitney A'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-4',
        title: 'Three calibrated group B scores, in points',
        symbols: ['B'],
        tokens: ['B'],
        mathSymbols: ['B'],
        definition:
          'Three calibrated group B scores, in points. The role belongs to this stated independent-group rank comparison.',
        example: 'B',
        readAs: 'Three calibrated group B scores, in points',
        aliases: ['mann-whitney B'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-5',
        title: 'Sum of pooled midranks belonging to the three A learners',
        symbols: ['R_A'],
        tokens: ['R_A', 'R_{A}'],
        mathSymbols: ['R_A', 'R_{A}'],
        definition:
          'Sum of pooled midranks belonging to the three A learners. The role belongs to this stated independent-group rank comparison.',
        example: 'R_A',
        readAs: 'Sum of pooled midranks belonging to the three A learners',
        aliases: ['mann-whitney R_A'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-6',
        title: 'Mann–Whitney A-over-B U statistic',
        symbols: ['U_A'],
        tokens: ['U_A', 'U_{A}'],
        mathSymbols: ['U_A', 'U_{A}'],
        definition:
          'A-over-B win count with half credit for tied cross-group pairs. The role belongs to this stated independent-group rank comparison.',
        example: 'U_A',
        readAs: 'A-over-B win count with half credit for tied cross-group pairs',
        aliases: ['mann-whitney U_A', 'U statistic', 'Mann–Whitney U'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-7',
        title: 'Complementary B-over-A pair count, 9−U_A',
        symbols: ['U_B'],
        tokens: ['U_B', 'U_{B}'],
        mathSymbols: ['U_B', 'U_{B}'],
        definition:
          'Complementary B-over-A pair count, 9−U_A. The role belongs to this stated independent-group rank comparison.',
        example: 'U_B',
        readAs: 'Complementary B-over-A pair count, 9−U_A',
        aliases: ['mann-whitney U_B'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-8',
        title: 'Empirical A-over-B pair share',
        symbols: ['θ'],
        tokens: ['θ', '\\theta'],
        mathSymbols: ['θ', '\\theta'],
        definition:
          'Empirical A-over-B pair share U_A/9 among nine comparisons. The role belongs to this stated independent-group rank comparison.',
        example: 'θ',
        readAs: 'Empirical A-over-B pair share U_A/9 among nine comparisons',
        aliases: ['mann-whitney θ', 'empirical pair share', 'pair share'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-9',
        title: 'Number of independent group A learners, fixed at three',
        symbols: ['n_A'],
        tokens: ['n_A', 'n_{A}'],
        mathSymbols: ['n_A', 'n_{A}'],
        definition:
          'Number of independent group A learners, fixed at three. The role belongs to this stated independent-group rank comparison.',
        example: 'n_A',
        readAs: 'Number of independent group A learners, fixed at three',
        aliases: ['mann-whitney n_A'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-10',
        title: 'Number of independent group B learners, fixed at three',
        symbols: ['n_B'],
        tokens: ['n_B', 'n_{B}'],
        mathSymbols: ['n_B', 'n_{B}'],
        definition:
          'Number of independent group B learners, fixed at three. The role belongs to this stated independent-group rank comparison.',
        example: 'n_B',
        readAs: 'Number of independent group B learners, fixed at three',
        aliases: ['mann-whitney n_B'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-11',
        title: 'Number of allocations meeting the inclusive absolute-U threshold',
        symbols: ['m'],
        tokens: ['m'],
        mathSymbols: ['m'],
        definition:
          'Number of allocations meeting the inclusive absolute-U threshold. The role belongs to this stated independent-group rank comparison.',
        example: 'm',
        readAs: 'Number of allocations meeting the inclusive absolute-U threshold',
        aliases: ['mann-whitney m'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-12',
        title: 'Total labeled three-versus-three allocations, fixed at 20',
        symbols: ['M'],
        tokens: ['M'],
        mathSymbols: ['M'],
        definition:
          'Total labeled three-versus-three allocations, fixed at 20. The role belongs to this stated independent-group rank comparison.',
        example: 'M',
        readAs: 'Total labeled three-versus-three allocations, fixed at 20',
        aliases: ['mann-whitney M'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'mann-whitney-symbol-13',
        title: 'Inclusive two-sided conditional Mann–Whitney allocation tail',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        definition:
          'Inclusive two-sided conditional Mann–Whitney allocation tail. The role belongs to this stated independent-group rank comparison.',
        example: 'p',
        readAs: 'Inclusive two-sided conditional Mann–Whitney allocation tail',
        aliases: ['mann-whitney p'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'comparison-pooled-ranks',
        title: 'Pooled midranks',
        symbols: [],
        tokens: [],
        definition:
          'Order observations from both independent groups together, keeping each learner’s group identity. Tied observations receive the average rank of their occupied positions.',
        example:
          'The A scores win three of nine cross-group comparisons. U_A=3 and θ=1/3; fourteen of 20 labeled allocations are at least as far from 4.5, giving p=0.7.',
        readAs: 'Pooled midranks',
        aliases: ['pooled ranks', 'pooled midranks'],
        relatedIds: ['mann-whitney']
      },
      {
        category: 'chance',
        sourceKeys: ['comparison_mann_whitney'],
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        id: 'comparison-exchangeable-labels',
        title: 'Exchangeable group labels',
        symbols: [],
        tokens: [],
        definition:
          'Under the stated equal-distribution null, the same pooled outcomes can carry any group allocation allowed by the design with equal probability. This is the assumption behind the finite allocation reference.',
        example:
          'The A scores win three of nine cross-group comparisons. U_A=3 and θ=1/3; fourteen of 20 labeled allocations are at least as far from 4.5, giving p=0.7.',
        readAs: 'Exchangeable group labels',
        aliases: ['exchangeable-label null', 'exchangeable labels', 'exchangeable-label'],
        relatedIds: ['mann-whitney']
      },
      {
        id: 'sample-mean',
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        relatedIds: ['covariance-matrix']
      },
      {
        id: 'standard-deviation',
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        relatedIds: ['covariance-matrix']
      },
      {
        id: 'binomial-coefficient',
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        relatedIds: ['mann-whitney']
      },
      {
        id: 'summation',
        grammarCards: ['covariance-matrix', 'wilcoxon-signed-rank'],
        formulaCards: ['covariance-matrix', 'wilcoxon-signed-rank'],
        relatedIds: ['covariance-matrix', 'wilcoxon-signed-rank']
      },
      {
        id: 'design-variance-unit',
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        relatedIds: ['covariance-matrix'],
        definition:
          'Squared millimetres measure variance or covariance of quantities both expressed in millimetres. Coordinate variances and total variance are nonnegative; an off-diagonal covariance may be negative. This unit is distinct from the mm⁴ determinant and mm ellipse radii.'
      },
      {
        id: 'sampling-task-point-unit',
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        relatedIds: ['mann-whitney']
      },
      {
        id: 'comparison-covariance-determinant-unit',
        title: 'Fourth-power millimetres of covariance determinant',
        category: 'units',
        sourceKeys: ['comparison_covariance'],
        grammarCards: ['covariance-matrix'],
        formulaCards: ['covariance-matrix'],
        symbols: ['mm⁴'],
        tokens: ['mm⁴', 'mm^4'],
        mathSymbols: ['mm⁴', 'mm^4'],
        notationKinds: ['unit'],
        definition:
          'The determinant of a two-by-two covariance matrix multiplies two squared-length entries, so its unit is fourth-power length. It differs from a covariance entry or trace, which uses squared length, and from an ellipse radius, which uses length.',
        example: 'D = 2.1875 mm⁴',
        readAs: 'fourth-power millimetres',
        aliases: ['fourth-power millimetres'],
        relatedIds: ['covariance-matrix', 'powered-unit']
      },
      {
        id: 'comparison-sign-pattern-unit',
        title: 'Conditional sign patterns as a count',
        category: 'units',
        sourceKeys: ['comparison_signed_rank'],
        grammarCards: ['wilcoxon-signed-rank'],
        formulaCards: ['wilcoxon-signed-rank'],
        symbols: ['sign patterns'],
        tokens: ['sign pattern', 'sign patterns'],
        mathSymbols: ['sign pattern', 'sign patterns'],
        notationKinds: ['unit'],
        definition:
          'A count of labeled choices of sign for the nonzero paired differences. With n such differences there are 2^n patterns; tail count and total pattern count use this same counting unit.',
        example: '14 of 32 sign patterns',
        readAs: 'sign patterns',
        aliases: ['sign patterns'],
        relatedIds: ['wilcoxon-signed-rank']
      },
      {
        id: 'sampling-allocation-count-unit',
        grammarCards: ['mann-whitney'],
        formulaCards: ['mann-whitney'],
        relatedIds: ['mann-whitney'],
        definition:
          'One allocation chooses the declared number of distinct participant positions for one group, with the complement assigned to the other. The three-versus-three comparison has 20 allocations; the four-versus-four randomization lesson has 70. Allocations remain distinct when scores tie.',
        wordMatches: ['allocations']
      }
    ],
    sources: {
      comparison_covariance: {
        title: 'NIST/SEMATECH · Mean Vector and Covariance Matrix',
        url: 'https://www.itl.nist.gov/div898/handbook/pmc/section5/pmc541.htm'
      },
      comparison_signed_rank: {
        title: 'SciPy · Wilcoxon signed-rank test',
        url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.wilcoxon.html'
      },
      comparison_mann_whitney: {
        title: 'SciPy · Mann–Whitney U rank test',
        url: 'https://docs.scipy.org/doc/scipy/reference/generated/scipy.stats.mannwhitneyu.html'
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
