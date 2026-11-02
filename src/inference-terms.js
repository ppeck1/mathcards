/* Authored inference-family data; independent of host state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInferenceTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  return freeze({
    entries: [
      {
        id: 'sampling-distribution',
        title: 'Sampling distribution of a mean',
        category: 'chance',
        symbols: ['n', 'SE(X̄)'],
        definition:
          'A sampling distribution assigns probabilities to a statistic across repeated samples under an explicit sampling rule. Here every independent ordered sample with replacement is enumerated, and identical sample means are grouped by exact multiplicities.',
        example: 'A single draw has variance 10 kg² and standard error √10 kg.',
        readAs: 'Sampling distribution of a mean',
        aliases: [
          'sampling distribution',
          'standard error',
          'repeated sampling',
          'with replacement'
        ],
        sourceKeys: ['inference_sampling'],
        grammarCards: ['sampling-distribution'],
        formulaCards: ['sampling-distribution'],
        relatedIds: []
      },
      {
        id: 'sampling-distribution-samplesize',
        title: 'Number of independent draws',
        category: 'chance',
        symbols: ['n'],
        definition:
          'Number of independent draws. Context: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.',
        example: 'A single draw has variance 10 kg² and standard error √10 kg.',
        readAs: 'Number of independent draws.',
        aliases: ['sampling-distribution sampleSize'],
        sourceKeys: ['inference_sampling'],
        grammarCards: ['sampling-distribution'],
        formulaCards: ['sampling-distribution'],
        relatedIds: ['sampling-distribution']
      },
      {
        id: 'sampling-distribution-output',
        title: 'Standard deviation of the sample mean, in kg',
        category: 'chance',
        symbols: ['SE(X̄)'],
        definition:
          'Standard deviation of the sample mean, in kg. Context: Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.',
        example: 'A single draw has variance 10 kg² and standard error √10 kg.',
        readAs: 'Standard deviation of the sample mean, in kg.',
        aliases: ['sampling-distribution output'],
        sourceKeys: ['inference_sampling'],
        grammarCards: ['sampling-distribution'],
        formulaCards: ['sampling-distribution'],
        relatedIds: ['sampling-distribution']
      },
      {
        id: 'confidence-interval',
        title: 'Confidence intervals and coverage',
        category: 'chance',
        symbols: ['p', 'k', 'L(k)', 'U(k)'],
        definition:
          'A confidence procedure constructs intervals from data so that, under repeated sampling, a stated fraction cover a fixed parameter. This finite demonstration evaluates binomial coverage of two-sided 95% Clopper–Pearson intervals. At k=0 set L=0; at k=8 set U=1.',
        example: 'At p=1/2, counts 1 through 7 cover p: coverage is 254/256.',
        readAs: 'Confidence intervals and coverage',
        aliases: [
          'confidence interval',
          'coverage',
          'Clopper Pearson',
          'confidence level',
          'interval estimation'
        ],
        sourceKeys: ['inference_interval'],
        grammarCards: ['confidence-interval'],
        formulaCards: ['confidence-interval'],
        relatedIds: []
      },
      {
        id: 'confidence-interval-truechance',
        title: 'Fixed probability used to inspect repeated-sampling coverage',
        category: 'chance',
        symbols: ['p'],
        definition:
          'Fixed probability used to inspect repeated-sampling coverage. Context: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
        example: 'At p=1/2, counts 1 through 7 cover p: coverage is 254/256.',
        readAs: 'Fixed probability used to inspect repeated-sampling coverage.',
        aliases: ['confidence-interval trueChance'],
        sourceKeys: ['inference_interval'],
        grammarCards: ['confidence-interval'],
        formulaCards: ['confidence-interval'],
        relatedIds: ['confidence-interval']
      },
      {
        id: 'confidence-interval-observed',
        title: 'Highlighted observed count out of eight',
        category: 'chance',
        symbols: ['k'],
        definition:
          'Highlighted observed count out of eight. Context: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
        example: 'At p=1/2, counts 1 through 7 cover p: coverage is 254/256.',
        readAs: 'Highlighted observed count out of eight.',
        aliases: ['confidence-interval observed'],
        sourceKeys: ['inference_interval'],
        grammarCards: ['confidence-interval'],
        formulaCards: ['confidence-interval'],
        relatedIds: ['confidence-interval']
      },
      {
        id: 'confidence-interval-low',
        title: 'Lower endpoint of the highlighted interval',
        category: 'chance',
        symbols: ['L(k)'],
        definition:
          'Lower endpoint of the highlighted interval. Context: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
        example: 'At p=1/2, counts 1 through 7 cover p: coverage is 254/256.',
        readAs: 'Lower endpoint of the highlighted interval.',
        aliases: ['confidence-interval low'],
        sourceKeys: ['inference_interval'],
        grammarCards: ['confidence-interval'],
        formulaCards: ['confidence-interval'],
        relatedIds: ['confidence-interval']
      },
      {
        id: 'confidence-interval-high',
        title: 'Upper endpoint of the highlighted interval',
        category: 'chance',
        symbols: ['U(k)'],
        definition:
          'Upper endpoint of the highlighted interval. Context: Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
        example: 'At p=1/2, counts 1 through 7 cover p: coverage is 254/256.',
        readAs: 'Upper endpoint of the highlighted interval.',
        aliases: ['confidence-interval high'],
        sourceKeys: ['inference_interval'],
        grammarCards: ['confidence-interval'],
        formulaCards: ['confidence-interval'],
        relatedIds: ['confidence-interval']
      },
      {
        id: 'hypothesis-test',
        title: 'An exact one-sided hypothesis test',
        category: 'chance',
        symbols: ['k', 'p-value'],
        definition:
          'A p-value is the probability, under a specified null model, of a result at least as extreme as the observation in the prespecified direction. Here extremeness is a larger count in twelve Bernoulli trials, so the exact p-value is an upper binomial tail.',
        example: 'The tail probability is (66+12+1)/4096=79/4096, below 0.05.',
        readAs: 'An exact one-sided hypothesis test',
        aliases: [
          'hypothesis test',
          'p value',
          'p-value',
          'null hypothesis',
          'significance level',
          'one sided test'
        ],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['hypothesis-test'],
        formulaCards: ['hypothesis-test'],
        relatedIds: []
      },
      {
        id: 'hypothesis-test-observed',
        title: 'Observed count out of twelve',
        category: 'chance',
        symbols: ['k'],
        definition:
          'Observed count out of twelve. Context: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.',
        example: 'The tail probability is (66+12+1)/4096=79/4096, below 0.05.',
        readAs: 'Observed count out of twelve.',
        aliases: ['hypothesis-test observed'],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['hypothesis-test'],
        formulaCards: ['hypothesis-test'],
        relatedIds: ['hypothesis-test']
      },
      {
        id: 'hypothesis-test-output',
        title: 'Probability of this count or a larger count under p₀=1/2',
        category: 'chance',
        symbols: ['p-value'],
        definition:
          'Probability of this count or a larger count under p₀=1/2. Context: A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.',
        example: 'The tail probability is (66+12+1)/4096=79/4096, below 0.05.',
        readAs: 'Probability of this count or a larger count under p₀=1/2.',
        aliases: ['hypothesis-test output'],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['hypothesis-test'],
        formulaCards: ['hypothesis-test'],
        relatedIds: ['hypothesis-test']
      },
      {
        id: 'linear-regression',
        title: 'Least squares and residuals',
        category: 'chance',
        symbols: ['h', 'a', 'b'],
        definition:
          'Ordinary least squares chooses line parameters that minimize the sum of squared vertical residuals. A residual is an observed response minus its fitted response. This family refits five constructed seedling heights whenever the final height changes.',
        example: 'Sₓᵧ=9, Sₓₓ=10, so b=0.9 and a=1.3.',
        readAs: 'Least squares and residuals',
        aliases: [
          'linear regression',
          'least squares',
          'residual',
          'fitted value',
          'slope estimate'
        ],
        sourceKeys: ['inference_regression'],
        grammarCards: ['linear-regression'],
        formulaCards: ['linear-regression'],
        relatedIds: []
      },
      {
        id: 'linear-regression-lastvalue',
        title: 'Day-five measured height in cm',
        category: 'chance',
        symbols: ['h'],
        definition:
          'Day-five measured height in cm. Context: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.',
        example: 'Sₓᵧ=9, Sₓₓ=10, so b=0.9 and a=1.3.',
        readAs: 'Day-five measured height in cm.',
        aliases: ['linear-regression lastValue'],
        sourceKeys: ['inference_regression'],
        grammarCards: ['linear-regression'],
        formulaCards: ['linear-regression'],
        relatedIds: ['linear-regression']
      },
      {
        id: 'linear-regression-intercept',
        title: 'Fitted intercept in cm',
        category: 'chance',
        symbols: ['a'],
        definition:
          'Fitted intercept in cm. Context: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.',
        example: 'Sₓᵧ=9, Sₓₓ=10, so b=0.9 and a=1.3.',
        readAs: 'Fitted intercept in cm.',
        aliases: ['linear-regression intercept'],
        sourceKeys: ['inference_regression'],
        grammarCards: ['linear-regression'],
        formulaCards: ['linear-regression'],
        relatedIds: ['linear-regression']
      },
      {
        id: 'linear-regression-slope',
        title: 'Fitted slope in cm per day',
        category: 'chance',
        symbols: ['b'],
        definition:
          'Fitted slope in cm per day. Context: Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.',
        example: 'Sₓᵧ=9, Sₓₓ=10, so b=0.9 and a=1.3.',
        readAs: 'Fitted slope in cm per day.',
        aliases: ['linear-regression slope'],
        sourceKeys: ['inference_regression'],
        grammarCards: ['linear-regression'],
        formulaCards: ['linear-regression'],
        relatedIds: ['linear-regression']
      },
      {
        id: 'correlation',
        title: 'Correlation and scatter',
        category: 'chance',
        symbols: ['t', 's', 'r'],
        definition:
          'Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.',
        example: 'r=10/√(10×24)=√(5/12).',
        readAs: 'Correlation and scatter',
        aliases: ['correlation', 'Pearson r', 'linear association', 'correlation coefficient'],
        sourceKeys: ['inference_correlation'],
        grammarCards: ['correlation'],
        formulaCards: ['correlation'],
        relatedIds: []
      },
      {
        id: 'correlation-trend',
        title: 'Trend coefficient in the constructed response',
        category: 'chance',
        symbols: ['t'],
        definition:
          'Trend coefficient in the constructed response. Context: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.',
        example: 'r=10/√(10×24)=√(5/12).',
        readAs: 'Trend coefficient in the constructed response.',
        aliases: ['correlation trend'],
        sourceKeys: ['inference_correlation'],
        grammarCards: ['correlation'],
        formulaCards: ['correlation'],
        relatedIds: ['correlation']
      },
      {
        id: 'correlation-scatter',
        title: 'Scale of the fixed orthogonal scatter pattern',
        category: 'chance',
        symbols: ['s'],
        definition:
          'Scale of the fixed orthogonal scatter pattern. Context: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.',
        example: 'r=10/√(10×24)=√(5/12).',
        readAs: 'Scale of the fixed orthogonal scatter pattern.',
        aliases: ['correlation scatter'],
        sourceKeys: ['inference_correlation'],
        grammarCards: ['correlation'],
        formulaCards: ['correlation'],
        relatedIds: ['correlation']
      },
      {
        id: 'correlation-output',
        title: 'Pearson sample correlation',
        category: 'chance',
        symbols: ['r'],
        definition:
          'Pearson sample correlation. Context: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.',
        example: 'r=10/√(10×24)=√(5/12).',
        readAs: 'Pearson sample correlation.',
        aliases: ['correlation output'],
        sourceKeys: ['inference_correlation'],
        grammarCards: ['correlation'],
        formulaCards: ['correlation'],
        relatedIds: ['correlation']
      },
      {
        id: 'factorial-interaction',
        title: 'Two-factor interaction',
        category: 'chance',
        symbols: ['c', 'Δ'],
        definition:
          'Two factors interact on an additive response scale when the effect of one depends on the level of the other. A difference of differences compares those two simple effects. The conventional ±1 factorial interaction effect is half this explicitly named contrast.',
        example: '(7−9)−(10−12)=0 minutes.',
        readAs: 'Two-factor interaction',
        aliases: ['factorial design', 'interaction', 'difference of differences', 'two factors'],
        sourceKeys: ['inference_factorial'],
        grammarCards: ['factorial-interaction'],
        formulaCards: ['factorial-interaction'],
        relatedIds: []
      },
      {
        id: 'factorial-interaction-combined',
        title: 'Mean time with both tool and guide',
        category: 'chance',
        symbols: ['c'],
        definition:
          'Mean time with both tool and guide. Context: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.',
        example: '(7−9)−(10−12)=0 minutes.',
        readAs: 'Mean time with both tool and guide.',
        aliases: ['factorial-interaction combined'],
        sourceKeys: ['inference_factorial'],
        grammarCards: ['factorial-interaction'],
        formulaCards: ['factorial-interaction'],
        relatedIds: ['factorial-interaction']
      },
      {
        id: 'factorial-interaction-output',
        title: 'Difference between the two tool effects, in minutes',
        category: 'chance',
        symbols: ['Δ'],
        definition:
          'Difference between the two tool effects, in minutes. Context: A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.',
        example: '(7−9)−(10−12)=0 minutes.',
        readAs: 'Difference between the two tool effects, in minutes.',
        aliases: ['factorial-interaction output'],
        sourceKeys: ['inference_factorial'],
        grammarCards: ['factorial-interaction'],
        formulaCards: ['factorial-interaction'],
        relatedIds: ['factorial-interaction']
      },
      {
        id: 'chi-square-association',
        title: 'Observed versus expected counts',
        category: 'chance',
        symbols: ['d', 'χ²'],
        definition:
          'The Pearson chi-square statistic adds squared observed-minus-expected discrepancies divided by expected counts. Independence expected counts use row total times column total divided by grand total. This lesson computes a statistic without an unqualified significance claim.',
        example: 'All observed counts equal 10, giving χ²=0.',
        readAs: 'Observed versus expected counts',
        aliases: [
          'chi square',
          'chi-square',
          'contingency table',
          'expected count',
          'Pearson chi square'
        ],
        sourceKeys: ['inference_association'],
        grammarCards: ['chi-square-association'],
        formulaCards: ['chi-square-association'],
        relatedIds: []
      },
      {
        id: 'chi-square-association-diagonal',
        title: 'Two matching diagonal counts in a fixed-margin table',
        category: 'chance',
        symbols: ['d'],
        definition:
          'Two matching diagonal counts in a fixed-margin table. Context: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.',
        example: 'All observed counts equal 10, giving χ²=0.',
        readAs: 'Two matching diagonal counts in a fixed-margin table.',
        aliases: ['chi-square-association diagonal'],
        sourceKeys: ['inference_association'],
        grammarCards: ['chi-square-association'],
        formulaCards: ['chi-square-association'],
        relatedIds: ['chi-square-association']
      },
      {
        id: 'chi-square-association-output',
        title: 'Pearson chi-square discrepancy statistic',
        category: 'chance',
        symbols: ['χ²'],
        definition:
          'Pearson chi-square discrepancy statistic. Context: Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.',
        example: 'All observed counts equal 10, giving χ²=0.',
        readAs: 'Pearson chi-square discrepancy statistic.',
        aliases: ['chi-square-association output'],
        sourceKeys: ['inference_association'],
        grammarCards: ['chi-square-association'],
        formulaCards: ['chi-square-association'],
        relatedIds: ['chi-square-association']
      },
      {
        id: 'relative-entropy',
        title: 'Relative entropy',
        category: 'chance',
        symbols: ['p', 'q', 'D(P∥Q)'],
        definition:
          'Relative entropy compares distributions in a specified direction using their probability-weighted log ratio. It is nonnegative, zero exactly when they agree, generally asymmetric, and infinite if Q excludes an outcome with positive P probability. Individual contributions can be negative.',
        example: 'D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.',
        readAs: 'Relative entropy',
        aliases: [
          'relative entropy',
          'KL divergence',
          'Kullback Leibler divergence',
          'distribution mismatch'
        ],
        sourceKeys: ['inference_relative'],
        grammarCards: ['relative-entropy'],
        formulaCards: ['relative-entropy'],
        relatedIds: []
      },
      {
        id: 'relative-entropy-actual',
        title: 'Sticker chance in teaching model P',
        category: 'chance',
        symbols: ['p'],
        definition:
          'Sticker chance in teaching model P. Context: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.',
        example: 'D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.',
        readAs: 'Sticker chance in teaching model P.',
        aliases: ['relative-entropy actual'],
        sourceKeys: ['inference_relative'],
        grammarCards: ['relative-entropy'],
        formulaCards: ['relative-entropy'],
        relatedIds: ['relative-entropy']
      },
      {
        id: 'relative-entropy-forecast',
        title: 'Sticker chance in forecast Q',
        category: 'chance',
        symbols: ['q'],
        definition:
          'Sticker chance in forecast Q. Context: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.',
        example: 'D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.',
        readAs: 'Sticker chance in forecast Q.',
        aliases: ['relative-entropy forecast'],
        sourceKeys: ['inference_relative'],
        grammarCards: ['relative-entropy'],
        formulaCards: ['relative-entropy'],
        relatedIds: ['relative-entropy']
      },
      {
        id: 'relative-entropy-output',
        title: 'Relative entropy from P to Q in bits',
        category: 'chance',
        symbols: ['D(P∥Q)'],
        definition:
          'Relative entropy from P to Q in bits. Context: A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.',
        example: 'D=(1/4)log₂(1/2)+(3/4)log₂(3/2)≈0.188722 bits.',
        readAs: 'Relative entropy from P to Q in bits.',
        aliases: ['relative-entropy output'],
        sourceKeys: ['inference_relative'],
        grammarCards: ['relative-entropy'],
        formulaCards: ['relative-entropy'],
        relatedIds: ['relative-entropy']
      },
      {
        id: 'binomial-distribution',
        title: 'Binomial counts',
        category: 'chance',
        symbols: ['p', 'k'],
        definition:
          'A binomial distribution counts successes in fixed independent Bernoulli trials with common success probability. Its mass multiplies a binomial coefficient by the probability of one arrangement of successes and failures.',
        example: 'C(8,4)/2⁸=70/256.',
        readAs: 'Binomial counts',
        aliases: [
          'binomial distribution',
          'Bernoulli trials',
          'number of successes',
          'binomial probability'
        ],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['binomial-distribution'],
        formulaCards: ['binomial-distribution'],
        relatedIds: []
      },
      {
        id: 'binomial-distribution-chance',
        title: 'Common sticker chance on each independent trial',
        category: 'chance',
        symbols: ['p'],
        definition:
          'Common sticker chance on each independent trial. Context: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.',
        example: 'C(8,4)/2⁸=70/256.',
        readAs: 'Common sticker chance on each independent trial.',
        aliases: ['binomial-distribution chance'],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['binomial-distribution'],
        formulaCards: ['binomial-distribution'],
        relatedIds: ['binomial-distribution']
      },
      {
        id: 'binomial-distribution-count',
        title: 'Selected whole sticker count',
        category: 'chance',
        symbols: ['k'],
        definition:
          'Selected whole sticker count. Context: Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.',
        example: 'C(8,4)/2⁸=70/256.',
        readAs: 'Selected whole sticker count.',
        aliases: ['binomial-distribution count'],
        sourceKeys: ['inference_binomial'],
        grammarCards: ['binomial-distribution'],
        formulaCards: ['binomial-distribution'],
        relatedIds: ['binomial-distribution']
      },
      {
        id: 'poisson-distribution',
        title: 'Poisson arrivals',
        category: 'chance',
        symbols: ['λ', 'k'],
        definition:
          'A Poisson distribution assigns probabilities to nonnegative counts using a nonnegative mean. A homogeneous Poisson-process interpretation assumes constant rate and independent increments. For positive mean, infinitely many counts are possible.',
        example: 'e⁻³×27/6≈0.224042.',
        readAs: 'Poisson arrivals',
        aliases: ['Poisson distribution', 'arrival count', 'event rate', 'Poisson probability'],
        sourceKeys: ['inference_poisson'],
        grammarCards: ['poisson-distribution'],
        formulaCards: ['poisson-distribution'],
        relatedIds: []
      },
      {
        id: 'poisson-distribution-rate',
        title: 'Expected arrivals in a fixed minute',
        category: 'chance',
        symbols: ['λ'],
        definition:
          'Expected arrivals in a fixed minute. Context: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.',
        example: 'e⁻³×27/6≈0.224042.',
        readAs: 'Expected arrivals in a fixed minute.',
        aliases: ['poisson-distribution rate'],
        sourceKeys: ['inference_poisson'],
        grammarCards: ['poisson-distribution'],
        formulaCards: ['poisson-distribution'],
        relatedIds: ['poisson-distribution']
      },
      {
        id: 'poisson-distribution-count',
        title: 'Selected whole arrival count',
        category: 'chance',
        symbols: ['k'],
        definition:
          'Selected whole arrival count. Context: A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.',
        example: 'e⁻³×27/6≈0.224042.',
        readAs: 'Selected whole arrival count.',
        aliases: ['poisson-distribution count'],
        sourceKeys: ['inference_poisson'],
        grammarCards: ['poisson-distribution'],
        formulaCards: ['poisson-distribution'],
        relatedIds: ['poisson-distribution']
      }
    ],
    sources: {
      inference_sampling: {
        title: 'Penn State STAT 500 · Sampling Distributions',
        url: 'https://online.stat.psu.edu/stat500/Lesson04'
      },
      inference_interval: {
        title: 'NIST · Confidence intervals for a binomial proportion',
        url: 'https://itl.nist.gov/div898/handbook/prc/section2/prc241.htm'
      },
      inference_binomial: {
        title: 'NIST · Binomial Distribution',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda366i.htm'
      },
      inference_poisson: {
        title: 'NIST · Poisson Distribution',
        url: 'https://www.itl.nist.gov/div898/handbook/eda/section3/eda366j.htm'
      },
      inference_regression: {
        title: 'NIST · Linear Least Squares Regression',
        url: 'https://www.itl.nist.gov/div898/handbook/pmd/section1/pmd141.htm'
      },
      inference_correlation: {
        title: 'NIST Dataplot · Correlation',
        url: 'https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/correlat.htm'
      },
      inference_factorial: {
        title: 'NIST · Full factorial designs',
        url: 'https://www.itl.nist.gov/div898/handbook/pri/section3/pri333.htm'
      },
      inference_interaction: {
        title: 'NIST · Effects plot',
        url: 'https://www.itl.nist.gov/div898/handbook/pri/section5/pri597.htm'
      },
      inference_association: {
        title: 'NIST · Contingency tables',
        url: 'https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm'
      },
      inference_relative: {
        title: 'Stanford EE376A · Information Theory lecture notes',
        url: 'https://web.stanford.edu/class/ee376a/files/lecture_notes.pdf'
      }
    }
  });
});
