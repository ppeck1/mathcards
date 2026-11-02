/* Original distribution teaching data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDistributionExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'normal-distribution',
        title: 'Normal distribution: height and area',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability. A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.',
        example: 'z=(1−0)/1=1; F(1)≈0.841344746',
        readAs: 'Normal distribution: height and area',
        aliases: ['How much of a cutting-error model lies below a chosen tolerance?'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: []
      },
      {
        id: 'normal-distribution-symbol-1',
        title: 'Signed error threshold in mm',
        category: 'chance',
        symbols: ['x'],
        tokens: ['x'],
        mathSymbols: ['x'],
        definition:
          'Signed error threshold in mm. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'x',
        readAs: 'Signed error threshold in mm',
        aliases: ['normal-distribution x'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-2',
        title: 'Mean of the declared normal error model in mm',
        category: 'chance',
        symbols: ['μ'],
        tokens: ['μ'],
        mathSymbols: ['μ'],
        definition:
          'Mean of the declared normal error model in mm. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'μ',
        readAs: 'Mean of the declared normal error model in mm',
        aliases: ['normal-distribution μ'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-3',
        title: 'Positive standard deviation of the declared model in mm',
        category: 'chance',
        symbols: ['σ'],
        tokens: ['σ'],
        mathSymbols: ['σ'],
        definition:
          'Positive standard deviation of the declared model in mm. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'σ',
        readAs: 'Positive standard deviation of the declared model in mm',
        aliases: ['normal-distribution σ'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-4',
        title: 'Standardized threshold in standard-deviation units',
        category: 'chance',
        symbols: ['z'],
        tokens: ['z'],
        mathSymbols: ['z'],
        definition:
          'Standardized threshold in standard-deviation units. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'z',
        readAs: 'Standardized threshold in standard-deviation units',
        aliases: ['normal-distribution z'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-5',
        title: 'Probability density height per mm at the threshold',
        category: 'chance',
        symbols: ['f(x)'],
        tokens: ['f(x)'],
        mathSymbols: ['f(x)'],
        definition:
          'Probability density height per mm at the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'f(x)',
        readAs: 'Probability density height per mm at the threshold',
        aliases: ['normal-distribution f(x)'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-6',
        title: 'Cumulative probability of an error at or below the threshold',
        category: 'chance',
        symbols: ['F(x)'],
        tokens: ['F(x)'],
        mathSymbols: ['F(x)'],
        definition:
          'Cumulative probability of an error at or below the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'F(x)',
        readAs: 'Cumulative probability of an error at or below the threshold',
        aliases: ['normal-distribution F(x)'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'normal-distribution-symbol-7',
        title: 'Standard normal cumulative probability',
        category: 'chance',
        symbols: ['Φ(z)'],
        tokens: ['Φ(z)'],
        mathSymbols: ['Φ(z)'],
        definition:
          'Standard normal cumulative probability. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        example: 'Φ(z)',
        readAs: 'Standard normal cumulative probability',
        aliases: ['normal-distribution Φ(z)'],
        sourceKeys: ['distribution_normal', 'distribution_quadrature'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'exponential-distribution',
        title: 'Exponential waiting time',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval. A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.',
        example: 'λ=0.5 per min; t=2 min; F(2)≈0.632120559',
        readAs: 'Exponential waiting time',
        aliases: ['What is the chance the next workshop order arrives within the wait?'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: []
      },
      {
        id: 'exponential-distribution-symbol-1',
        title: 'Nonnegative waiting threshold in minutes',
        category: 'chance',
        symbols: ['t'],
        tokens: ['t'],
        mathSymbols: ['t'],
        definition:
          'Nonnegative waiting threshold in minutes. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 't',
        readAs: 'Nonnegative waiting threshold in minutes',
        aliases: ['exponential-distribution t'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-2',
        title: 'Positive arrival rate per minute',
        category: 'chance',
        symbols: ['λ'],
        tokens: ['λ'],
        mathSymbols: ['λ'],
        definition:
          'Positive arrival rate per minute. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'λ',
        readAs: 'Positive arrival rate per minute',
        aliases: ['exponential-distribution λ'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-3',
        title: 'Probability that the next arrival occurs by the waiting threshold',
        category: 'chance',
        symbols: ['F(t)'],
        tokens: ['F(t)'],
        mathSymbols: ['F(t)'],
        definition:
          'Probability that the next arrival occurs by the waiting threshold. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'F(t)',
        readAs: 'Probability that the next arrival occurs by the waiting threshold',
        aliases: ['exponential-distribution F(t)'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-4',
        title: 'Probability of still waiting beyond the threshold',
        category: 'chance',
        symbols: ['S(t)'],
        tokens: ['S(t)'],
        mathSymbols: ['S(t)'],
        definition:
          'Probability of still waiting beyond the threshold. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'S(t)',
        readAs: 'Probability of still waiting beyond the threshold',
        aliases: ['exponential-distribution S(t)'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-5',
        title: 'Waiting-time density height per minute',
        category: 'chance',
        symbols: ['f(t)'],
        tokens: ['f(t)'],
        mathSymbols: ['f(t)'],
        definition:
          'Waiting-time density height per minute. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'f(t)',
        readAs: 'Waiting-time density height per minute',
        aliases: ['exponential-distribution f(t)'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-6',
        title: 'Random waiting duration under the declared law',
        category: 'chance',
        symbols: ['T'],
        tokens: ['T'],
        mathSymbols: ['T'],
        definition:
          'Random waiting duration under the declared law. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'T',
        readAs: 'Random waiting duration under the declared law',
        aliases: ['exponential-distribution T'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'exponential-distribution-symbol-7',
        title: 'Mean waiting duration in minutes',
        category: 'chance',
        symbols: ['E[T]'],
        tokens: ['E[T]'],
        mathSymbols: ['E[T]'],
        definition:
          'Mean waiting duration in minutes. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        example: 'E[T]',
        readAs: 'Mean waiting duration in minutes',
        aliases: ['exponential-distribution E[T]'],
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'sign-test',
        title: 'A paired sign test',
        category: 'chance',
        symbols: [],
        tokens: [],
        definition:
          'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative. Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.',
        example: 'k=5; n=6; p₊=7/64=0.109375',
        readAs: 'A paired sign test',
        aliases: ['How unusual are this many positive paired changes under a fair-sign model?'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: []
      },
      {
        id: 'sign-test-symbol-1',
        title: 'Common added after-reading shift in mm',
        category: 'chance',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        definition:
          'Common added after-reading shift in mm. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'h',
        readAs: 'Common added after-reading shift in mm',
        aliases: ['sign-test h'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-2',
        title: 'Unshifted after-reading for pair i in mm',
        category: 'chance',
        symbols: ['a_i'],
        tokens: ['a_i'],
        mathSymbols: ['a_i'],
        definition:
          'Unshifted after-reading for pair i in mm. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'a_i',
        readAs: 'Unshifted after-reading for pair i in mm',
        aliases: ['sign-test a_i'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-3',
        title: 'Before-reading for the same pair in mm',
        category: 'chance',
        symbols: ['b_i'],
        tokens: ['b_i'],
        mathSymbols: ['b_i'],
        definition:
          'Before-reading for the same pair in mm. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'b_i',
        readAs: 'Before-reading for the same pair in mm',
        aliases: ['sign-test b_i'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-4',
        title: 'Shifted after minus before for one pair in mm',
        category: 'chance',
        symbols: ['d_i'],
        tokens: ['d_i'],
        mathSymbols: ['d_i'],
        definition:
          'Shifted after minus before for one pair in mm. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'd_i',
        readAs: 'Shifted after minus before for one pair in mm',
        aliases: ['sign-test d_i'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-5',
        title: 'Pair index from 1 through 6',
        category: 'chance',
        symbols: ['i'],
        tokens: ['i'],
        mathSymbols: ['i'],
        definition:
          'Pair index from 1 through 6. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'i',
        readAs: 'Pair index from 1 through 6',
        aliases: ['sign-test i'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-6',
        title: 'Number of positive differences',
        category: 'chance',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        definition:
          'Number of positive differences. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'k',
        readAs: 'Number of positive differences',
        aliases: ['sign-test k'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-7',
        title: 'Number of nonzero differences after exact ties are omitted',
        category: 'chance',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        definition:
          'Number of nonzero differences after exact ties are omitted. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'n',
        readAs: 'Number of nonzero differences after exact ties are omitted',
        aliases: ['sign-test n'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-8',
        title: 'Positive-sign count under the conditional fair-sign null',
        category: 'chance',
        symbols: ['K'],
        tokens: ['K'],
        mathSymbols: ['K'],
        definition:
          'Positive-sign count under the conditional fair-sign null. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'K',
        readAs: 'Positive-sign count under the conditional fair-sign null',
        aliases: ['sign-test K'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-9',
        title: 'Bound summation index over possible positive-sign counts',
        category: 'chance',
        symbols: ['j'],
        tokens: ['j'],
        mathSymbols: ['j'],
        definition:
          'Bound summation index over possible positive-sign counts. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'j',
        readAs: 'Bound summation index over possible positive-sign counts',
        aliases: ['sign-test j'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'sign-test-symbol-10',
        title: 'One-sided null tail probability for at least k positive signs',
        category: 'chance',
        symbols: ['p_+'],
        tokens: ['p_+'],
        mathSymbols: ['p_+'],
        definition:
          'One-sided null tail probability for at least k positive signs. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        example: 'p_+',
        readAs: 'One-sided null tail probability for at least k positive signs',
        aliases: ['sign-test p_+'],
        sourceKeys: ['distribution_sign', 'distribution_median'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'distribution-normal-function-heads',
        title: 'Density and cumulative function names',
        category: 'chance',
        symbols: ['f', 'F', 'Φ', 'Φ(z)', 'f(x)', 'F(x)'],
        tokens: ['f', 'F', 'Φ', 'Φ(z)', 'f(x)', 'F(x)'],
        mathSymbols: ['f', 'F', 'Φ', 'Φ(z)', 'f(x)', 'F(x)'],
        definition:
          'f is a density per mm; F is the full error CDF and Φ is the standard normal CDF. These heads refer to different quantities, so a density height must not be read as probability.',
        example: 'F(x)',
        readAs: 'Density and cumulative function names',
        sourceKeys: ['distribution_normal'],
        grammarCards: ['normal-distribution'],
        formulaCards: ['normal-distribution'],
        relatedIds: ['normal-distribution']
      },
      {
        id: 'distribution-waiting-function-heads',
        title: 'Waiting density, cumulative, survival and mean',
        category: 'chance',
        symbols: ['f', 'F', 'S', 'f(t)', 'F(t)', 'S(t)', 'E[T]', 'E(T)'],
        tokens: ['f', 'F', 'S', 'f(t)', 'F(t)', 'S(t)', 'E[T]', 'E(T)'],
        mathSymbols: ['f', 'F', 'S', 'f(t)', 'F(t)', 'S(t)', 'E[T]', 'E(T)'],
        definition:
          'f is density per minute, F is cumulative arrival probability, S is survival, and E[T] is the mean waiting time in minutes.',
        example: 'E(T)',
        readAs: 'Waiting density, cumulative, survival and mean',
        sourceKeys: ['distribution_exponential'],
        grammarCards: ['exponential-distribution'],
        formulaCards: ['exponential-distribution'],
        relatedIds: ['exponential-distribution']
      },
      {
        id: 'distribution-paired-reading-indices',
        title: 'Paired reading and difference indices',
        category: 'chance',
        symbols: ['a', 'b', 'd', 'a_i', 'b_i', 'd_i', 'aᵢ', 'bᵢ', 'dᵢ'],
        tokens: ['a', 'b', 'd', 'a_i', 'b_i', 'd_i', 'aᵢ', 'bᵢ', 'dᵢ'],
        mathSymbols: ['a', 'b', 'd', 'a_i', 'b_i', 'd_i', 'aᵢ', 'bᵢ', 'dᵢ'],
        definition:
          'Index i selects the same physical piece in the unshifted after-reading a, before-reading b and shifted difference d. The added common shift is h.',
        example: 'dᵢ',
        readAs: 'Paired reading and difference indices',
        sourceKeys: ['distribution_sign'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      },
      {
        id: 'distribution-sign-tail-p',
        title: 'One-sided fair-sign tail',
        category: 'chance',
        symbols: ['p', 'p_+', 'p₊', 'p_{+}'],
        tokens: ['p', 'p_+', 'p₊', 'p_{+}'],
        mathSymbols: ['p', 'p_+', 'p₊', 'p_{+}'],
        definition:
          'The p-value is the conditional null chance of at least the observed positive count. It is not the probability that the null is true.',
        example: 'p_{+}',
        readAs: 'One-sided fair-sign tail',
        sourceKeys: ['distribution_sign'],
        grammarCards: ['sign-test'],
        formulaCards: ['sign-test'],
        relatedIds: ['sign-test']
      }
    ],
    sources: {
      distribution_normal: {
        title: 'NIST/SEMATECH · Normal Distribution',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm'
      },
      distribution_exponential: {
        title: 'NIST/SEMATECH · Exponential Distribution',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda3667.htm'
      },
      distribution_sign: {
        title: 'NIST Dataplot · Sign Test',
        url: 'https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/signtest.htm'
      },
      distribution_median: {
        title: 'Penn State STAT 415 · The Sign Test for a Median',
        url: 'https://online.stat.psu.edu/stat415/book/export/html/836'
      },
      distribution_quadrature: {
        title: 'NIST DLMF · Gauss Quadrature',
        url: 'https://dlmf.nist.gov/3.5#v'
      }
    }
  };
  data.entries.push(
    {
      id: 'distribution-sign-count-mark',
      title: 'Count of a finite collection: #',
      category: 'sets',
      symbols: ['#', '\\#'],
      tokens: ['#', '\\#'],
      mathSymbols: ['#', '\\#'],
      definition:
        'A hash before a finite described collection means the number of its members. In this sign test it counts pair indices satisfying a stated sign condition. The resulting cardinality is a whole count, not a probability.',
      example: 'k=\\#\\{i:d_i>0\\}',
      readAs: 'number of members satisfying the condition',
      sourceKeys: ['distribution_sign'],
      grammarCards: ['sign-test'],
      formulaCards: ['sign-test'],
      relatedIds: ['cardinality', 'sign-test']
    },
    {
      id: 'distribution-sign-law-mark',
      title: 'Distributed as the fair-sign null',
      category: 'chance',
      symbols: ['∼', '\\sim'],
      tokens: ['∼', '\\sim'],
      mathSymbols: ['∼', '\\sim'],
      definition:
        'In a random-variable statement, the tilde means distributed as. Here K follows the binomial law of independent fair signs conditional on the nonzero pairs. This is a distribution declaration rather than geometric similarity.',
      example: 'K∼Binomial(n,1/2)',
      readAs: 'K is distributed as',
      sourceKeys: ['distribution_sign'],
      grammarCards: ['sign-test'],
      formulaCards: ['sign-test'],
      relatedIds: ['distribution-notation', 'sign-test']
    },
    {
      id: 'distribution-sign-binomial',
      title: 'Fair-sign binomial null',
      category: 'chance',
      symbols: ['Binomial(n,1/2)', '\\operatorname{Binomial}'],
      tokens: ['Binomial(n,1/2)', 'Binomial'],
      mathSymbols: ['Binomial(n,1/2)', '\\operatorname{Binomial}'],
      definition:
        'The conditional sign-null law counts positives among n independent nonzero pairs, each equally likely to be positive or negative. Each complete sign pattern has probability 2 to the power −n; the one-sided tail sums all patterns with at least k positives.',
      example: 'K∼Binomial(6,1/2)',
      readAs: 'binomial distribution with n signs and probability one half',
      sourceKeys: ['distribution_sign'],
      grammarCards: ['sign-test'],
      formulaCards: ['sign-test'],
      relatedIds: ['binomial-distribution', 'sign-test']
    },
    {
      id: 'distribution-sign-combinations',
      title: 'Ways to choose positive signs',
      category: 'chance',
      symbols: ['\\binom{n}{j}', 'C(n,j)'],
      tokens: ['\\binom{n}{j}', 'C(n,j)'],
      mathSymbols: ['\\binom{n}{j}', 'C(n,j)'],
      definition:
        'The binomial coefficient counts the j positive positions among n labeled independent sign outcomes. Summing these integer pattern counts from observed k through n, then dividing by 2 to the power n, gives this exact one-sided tail.',
      example: 'C(6,5)=6',
      readAs: 'n choose j',
      sourceKeys: ['distribution_sign'],
      grammarCards: ['sign-test'],
      formulaCards: ['sign-test'],
      relatedIds: ['binomial-coefficient', 'sign-test']
    },
    {
      id: 'inverse-minute-unit',
      title: 'Per minute',
      category: 'units',
      symbols: ['per min', '1/min', 'min⁻¹'],
      tokens: ['per min', '1/min', 'min⁻¹'],
      mathSymbols: ['per min', '1/min', 'min⁻¹'],
      notationKinds: ['unit'],
      definition:
        'An inverse-minute unit describes a rate whose product with a duration in minutes is dimensionless. In the waiting-time law it is the constant arrival rate, while the waiting-time density also has inverse-minute units.',
      example: 'λ=0.5 per min; t=2 min; λt=1',
      readAs: 'per minute',
      sourceKeys: ['distribution_exponential'],
      grammarCards: ['exponential-distribution'],
      formulaCards: ['exponential-distribution'],
      relatedIds: ['compound-unit', 'exponential-distribution']
    }
  );
  data.entries = data.entries.map(entry => ({ aliases: [], relatedIds: [], ...entry }));
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
