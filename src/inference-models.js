/* Finite probability and inference families. No clocks, storage or DOM access. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasInference = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const finite = Number.isFinite,
    clean = x => (x === 0 ? 0 : x);
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  const field = (key, label, value, min, max, step, unit = '', discrete = false) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {})
  });
  const definitions = freeze({
    'sampling-distribution': {
      title: 'Sampling distribution of a mean',
      expression: 'SE(X̄) = σ/√n',
      axis: 'sampleSize',
      primaryLabel: 'Standard error of the mean',
      unit: 'kg',
      setting:
        'Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.',
      limits:
        'Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.',
      controls: [field('sampleSize', 'Independent draws n', 2, 1, 4, 1, 'draws', true)]
    },
    'confidence-interval': {
      title: 'Confidence intervals and coverage',
      expression: 'Pₚ{L(K) ≤ p ≤ U(K)} ≥ 0.95',
      axis: 'trueChance',
      primaryLabel: 'Coverage probability',
      unit: 'probability',
      setting:
        'Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
      limits:
        'The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.',
      controls: [
        field('trueChance', 'Teaching-model probability p', 0.5, 0, 1, 0.01, 'probability'),
        field('observed', 'Highlighted sticker count k', 4, 0, 8, 1, 'packets', true)
      ]
    },
    'hypothesis-test': {
      title: 'An exact one-sided hypothesis test',
      expression: 'p-value = Pₚ₀(K ≥ k)',
      axis: 'observed',
      primaryLabel: 'Upper-tail p-value',
      unit: 'probability',
      setting:
        'A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.',
      limits:
        'The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.',
      controls: [field('observed', 'Observed stickers k', 9, 0, 12, 1, 'packets', true)]
    },
    'linear-regression': {
      title: 'Least squares and residuals',
      expression: 'b = Sₓᵧ/Sₓₓ; a = ȳ − bx̄',
      axis: 'lastValue',
      primaryLabel: 'Fitted slope b',
      unit: 'cm/day',
      setting:
        'Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.',
      limits:
        'The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.',
      controls: [field('lastValue', 'Day-five height h', 6, 0, 10, 0.1, 'cm')]
    },
    correlation: {
      title: 'Correlation and scatter',
      expression: 'r = Sₓᵧ/√(SₓₓSᵧᵧ)',
      axis: 'trend',
      primaryLabel: 'Pearson correlation r',
      unit: 'dimensionless',
      setting:
        'Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.',
      limits:
        'Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.',
      controls: [
        field('trend', 'Trend t', 1, -2, 2, 0.05),
        field('scatter', 'Scatter scale s', 1, 0, 2, 0.05)
      ]
    },
    'factorial-interaction': {
      title: 'Two-factor interaction',
      expression: 'Δ = (y₁₁−y₀₁) − (y₁₀−y₀₀)',
      axis: 'combined',
      primaryLabel: 'Difference of differences Δ',
      unit: 'minutes',
      setting:
        'A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.',
      limits:
        'This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.',
      controls: [field('combined', 'Both improvements: mean c', 7, 2, 14, 0.1, 'minutes')]
    },
    'chi-square-association': {
      title: 'Observed versus expected counts',
      expression: 'χ² = ∑ (Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ',
      axis: 'diagonal',
      primaryLabel: 'Pearson chi-square statistic',
      unit: 'dimensionless',
      setting:
        'Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.',
      limits:
        'The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.',
      controls: [field('diagonal', 'A-paper and B-digital count d', 14, 0, 20, 1, 'readers', true)]
    },
    'relative-entropy': {
      title: 'Relative entropy',
      expression: 'D(P∥Q) = ∑ pᵢ log₂(pᵢ/qᵢ)',
      axis: 'forecast',
      primaryLabel: 'Relative entropy',
      unit: 'bits',
      setting:
        'A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.',
      limits:
        'KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.',
      controls: [
        field('actual', 'Model sticker probability p', 0.75, 0, 1, 0.01, 'probability'),
        field('forecast', 'Forecast sticker probability q', 0.5, 0, 1, 0.01, 'probability')
      ]
    },
    'binomial-distribution': {
      title: 'Binomial counts',
      expression: 'P(K=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ',
      axis: 'chance',
      primaryLabel: 'Probability of the selected count',
      unit: 'probability',
      setting:
        'Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.',
      limits:
        'Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.',
      controls: [
        field('chance', 'Sticker probability p', 0.5, 0, 1, 0.01, 'probability'),
        field('trials', 'Packets n', 8, 1, 20, 1, 'packets', true),
        field('count', 'Selected count k', 4, 0, 20, 1, 'stickers', true)
      ]
    },
    'poisson-distribution': {
      title: 'Poisson arrivals',
      expression: 'P(K=k) = e⁻λ λᵏ/k!',
      axis: 'rate',
      primaryLabel: 'Probability of the selected count',
      unit: 'probability',
      setting:
        'A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.',
      limits:
        'The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.',
      controls: [
        field('rate', 'Mean arrivals λ per minute', 3, 0, 10, 0.05, 'arrivals/minute'),
        field('count', 'Selected count k', 3, 0, 20, 1, 'arrivals', true)
      ]
    }
  });
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const definition = slug => {
    if (!has(slug)) throw new RangeError('Unknown inference model.');
    return definitions[slug];
  };
  const defaults = slug =>
    Object.fromEntries(definition(slug).controls.map(({ key, value }) => [key, value]));
  const controls = slug => definition(slug).controls.map(({ value, ...c }) => ({ ...c }));
  const specs = slug => {
    const { controls: ignored, ...d } = definition(slug);
    return {
      ...d,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug).map(({ key, label, min, max, step, discrete }) => ({
        key,
        label,
        min,
        max,
        step,
        ...(discrete ? { discrete: true } : {})
      })),
      readout: (p, r, c) => readout(slug, p, r, c)
    };
  };
  function validateParams(slug, input) {
    const parameters = {},
      errors = [],
      warnings = [];
    if (!has(slug))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Unknown model.' }],
        warnings
      };
    if (input === undefined) input = {};
    if (!input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use a parameter object.' }],
        warnings
      };
    const fields = definition(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key))
        errors.push({ field: key, message: 'Unknown parameter.' });
    for (const c of fields) {
      const x = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        typeof x !== 'number' ||
        !finite(x) ||
        x < c.min ||
        x > c.max ||
        (c.discrete && !Number.isInteger(x))
      )
        errors.push({
          field: c.key,
          message:
            'Use ' +
            (c.discrete ? 'a whole number' : 'a finite number') +
            ' from ' +
            c.min +
            ' to ' +
            c.max +
            '.'
        });
      else parameters[c.key] = clean(x);
    }
    return { valid: errors.length === 0, parameters, errors, warnings };
  }
  function choose(n, k) {
    if (!Number.isInteger(k) || k < 0 || k > n) return 0;
    k = Math.min(k, n - k);
    let r = 1;
    for (let j = 1; j <= k; j++) r = (r * (n - k + j)) / j;
    return r;
  }
  const binomial = (n, p, k) =>
    k < 0 || k > n
      ? 0
      : p === 0
        ? k === 0
          ? 1
          : 0
        : p === 1
          ? k === n
            ? 1
            : 0
          : choose(n, k) * p ** k * (1 - p) ** (n - k);
  const tail = (n, p, k) =>
    Array.from({ length: n + 1 }, (_, j) => (j >= k ? binomial(n, p, j) : 0)).reduce(
      (a, b) => a + b,
      0
    );
  function interval(k) {
    const target = 0.025;
    let low = 0,
      high = 1;
    if (k > 0) {
      let a = 0,
        b = 1;
      for (let i = 0; i < 70; i++) {
        const m = (a + b) / 2;
        if (tail(8, m, k) < target) a = m;
        else b = m;
      }
      low = (a + b) / 2;
    }
    if (k < 8) {
      let a = 0,
        b = 1;
      for (let i = 0; i < 70; i++) {
        const m = (a + b) / 2,
          cdf = 1 - tail(8, m, k + 1);
        if (cdf > target) a = m;
        else b = m;
      }
      high = (a + b) / 2;
    }
    return freeze({ count: k, low, high });
  }
  const intervals = freeze(Array.from({ length: 9 }, (_, k) => interval(k)));
  function sampling(p) {
    let sums = [0];
    for (let i = 0; i < p.sampleSize; i++)
      sums = sums.flatMap(sum => [2, 4, 8, 10].map(x => sum + x));
    const grouped = new Map();
    sums.forEach(s => grouped.set(s, (grouped.get(s) || 0) + 1));
    const rows = [...grouped]
        .sort((a, b) => a[0] - b[0])
        .map(([sum, count]) => ({
          x: sum / p.sampleSize,
          probability: count / sums.length,
          count
        })),
      mean = 6,
      variance = 10 / p.sampleSize;
    return {
      output: Math.sqrt(variance),
      standardError: Math.sqrt(variance),
      variance,
      mean,
      sampleCount: sums.length,
      rows,
      summaryLabel: sums.length + ' equally likely ordered samples',
      calculationLabel: '√(10/' + p.sampleSize + ')',
      outputLabel: fmt(Math.sqrt(variance)) + ' kg'
    };
  }
  function coverage(p) {
    const rows = intervals.map(row => ({
        ...row,
        covered: p.trueChance >= row.low && p.trueChance <= row.high,
        probability: binomial(8, p.trueChance, row.count)
      })),
      selected = rows[p.observed],
      coverage = rows.filter(r => r.covered).reduce((sum, r) => sum + r.probability, 0);
    return {
      output: coverage,
      coverage,
      rows,
      selected,
      low: selected.low,
      high: selected.high,
      width: selected.high - selected.low,
      covered: selected.covered ? 1 : 0,
      summaryLabel: '95% interval: [' + fmt(selected.low) + ', ' + fmt(selected.high) + ']',
      calculationLabel: 'Sum probabilities of covering intervals',
      outputLabel: pct(coverage)
    };
  }
  function hypothesis(p) {
    const rows = Array.from({ length: 13 }, (_, k) => ({
        x: k,
        probability: binomial(12, 0.5, k),
        selected: k >= p.observed
      })),
      pValue = rows.filter(row => row.selected).reduce((sum, row) => sum + row.probability, 0),
      reject = pValue <= 0.05;
    return {
      output: pValue,
      pValue,
      rows,
      alpha: 0.05,
      reject: reject ? 1 : 0,
      decisionLabel: reject ? 'Reject H₀ at α=0.05' : 'Do not reject H₀ at α=0.05',
      summaryLabel: '12 trials; H₀: p=1/2',
      calculationLabel: 'P(K ≥ ' + p.observed + ' | p=1/2)',
      outputLabel: pct(pValue)
    };
  }
  function fit(p) {
    const xs = [1, 2, 3, 4, 5],
      ys = [2, 3, 5, 4, p.lastValue],
      xMean = 3,
      yMean = ys.reduce((a, b) => a + b, 0) / 5,
      sxx = 10,
      sxy = xs.reduce((sum, x, i) => sum + (x - xMean) * (ys[i] - yMean), 0),
      slope = sxy / sxx,
      intercept = yMean - slope * xMean,
      rows = xs.map((x, i) => ({
        x,
        y: ys[i],
        fitted: intercept + slope * x,
        residual: clean(ys[i] - intercept - slope * x)
      })),
      sse = rows.reduce((sum, row) => sum + row.residual ** 2, 0);
    return {
      output: slope,
      slope,
      intercept,
      xMean,
      yMean,
      sxx,
      sxy,
      sse,
      rows,
      summaryLabel: 'ŷ = ' + fmt(intercept) + ' + ' + fmt(slope) + 'x',
      calculationLabel: 'b = ' + fmt(sxy) + '/10',
      outputLabel: fmt(slope) + ' cm/day'
    };
  }
  function correlation(p) {
    const noise = [1, -2, 2, -2, 1],
      xs = [1, 2, 3, 4, 5],
      rows = xs.map((x, i) => ({ x, y: 5 + p.trend * (x - 3) + p.scatter * noise[i] })),
      sxx = 10,
      sxy = 10 * p.trend,
      syy = 10 * p.trend * p.trend + 14 * p.scatter * p.scatter,
      r = syy === 0 ? null : clean(Math.max(-1, Math.min(1, sxy / Math.sqrt(sxx * syy))));
    return {
      output: r,
      r,
      sxx,
      sxy,
      syy,
      rows,
      summaryLabel: 'Same trend, adjustable scatter',
      calculationLabel: 'r = ' + fmt(sxy) + '/√(10 × ' + fmt(syy) + ')',
      outputLabel: r === null ? 'Undefined: constant y' : fmt(r)
    };
  }
  function interaction(p) {
    const cells = [12, 10, 9, p.combined],
      without = 10 - 12,
      withGuide = p.combined - 9,
      difference = withGuide - without;
    return {
      output: clean(difference),
      cells,
      without,
      withGuide,
      difference: clean(difference),
      factorialEffect: difference / 2,
      summaryLabel:
        'Tool effect: ' + fmt(without) + ' without guide; ' + fmt(withGuide) + ' with guide',
      calculationLabel: '(' + fmt(p.combined) + '−9) − (10−12)',
      outputLabel: fmt(difference) + ' minutes'
    };
  }
  function chisquare(p) {
    const cells = [p.diagonal, 20 - p.diagonal, 20 - p.diagonal, p.diagonal],
      contributions = cells.map(o => (o - 10) ** 2 / 10),
      statistic = contributions.reduce((a, b) => a + b, 0);
    return {
      output: statistic,
      cells,
      expected: 10,
      contributions,
      statistic,
      degreesFreedom: 1,
      summaryLabel: 'Each independence count is E=10',
      calculationLabel: '4 × (' + fmt(p.diagonal) + '−10)²/10',
      outputLabel: 'χ² = ' + fmt(statistic)
    };
  }
  function kl(p) {
    const ps = [1 - p.actual, p.actual],
      qs = [1 - p.forecast, p.forecast],
      rows = ps.map((probability, i) => ({
        x: i,
        probability,
        forecast: qs[i],
        contribution:
          probability === 0
            ? 0
            : qs[i] === 0
              ? null
              : probability * (Math.log2(probability) - Math.log2(qs[i]))
      })),
      infinite = rows.some(r => r.contribution === null),
      divergence = infinite
        ? null
        : Math.max(0, clean(rows.reduce((a, r) => a + r.contribution, 0)));
    return {
      output: divergence,
      divergence,
      infinite: infinite ? 1 : 0,
      rows,
      contribution0: rows[0].contribution,
      contribution1: rows[1].contribution,
      summaryLabel:
        'P=(' + fmt(ps[0]) + ', ' + fmt(ps[1]) + '); Q=(' + fmt(qs[0]) + ', ' + fmt(qs[1]) + ')',
      calculationLabel: infinite
        ? 'Positive P mass has zero Q mass'
        : 'Add signed pᵢ log₂(pᵢ/qᵢ) terms',
      outputLabel: infinite ? '∞ · support mismatch' : fmt(divergence) + ' bits'
    };
  }
  function binomialModel(p) {
    const rows = Array.from({ length: p.trials + 1 }, (_, k) => ({
        x: k,
        probability: binomial(p.trials, p.chance, k)
      })),
      mass = binomial(p.trials, p.chance, p.count);
    return {
      output: mass,
      selectedMass: mass,
      mean: p.trials * p.chance,
      variance: p.trials * p.chance * (1 - p.chance),
      rows,
      summaryLabel: p.trials + ' independent packets; p=' + fmt(p.chance),
      calculationLabel: 'P(K=' + p.count + ')',
      outputLabel: pct(mass)
    };
  }
  function poisson(p) {
    let probability = Math.exp(-p.rate);
    const rows = [];
    for (let k = 0; k <= 20; k++) {
      if (k > 0) probability = (probability * p.rate) / k;
      rows.push({ x: k, probability });
    }
    let next = probability,
      remaining = 0;
    for (let k = 21; k <= 200; k++) {
      next = (next * p.rate) / k;
      remaining += next;
      if (next === 0) break;
    }
    const mass = rows[p.count].probability;
    return {
      output: mass,
      selectedMass: mass,
      mean: p.rate,
      variance: p.rate,
      rows,
      remaining,
      summaryLabel: 'Mean λ=' + fmt(p.rate) + ' arrivals per minute',
      calculationLabel: 'P(K=' + p.count + ')',
      outputLabel: pct(mass)
    };
  }
  const evaluators = {
    'sampling-distribution': sampling,
    'confidence-interval': coverage,
    'hypothesis-test': hypothesis,
    'linear-regression': fit,
    correlation,
    'factorial-interaction': interaction,
    'chi-square-association': chisquare,
    'relative-entropy': kl,
    'binomial-distribution': binomialModel,
    'poisson-distribution': poisson
  };
  function evaluate(slug, input) {
    const c = validateParams(slug, input);
    if (!c.valid) return { ...c, status: 'invalid_parameters', output: null };
    const r = evaluators[slug](c.parameters),
      p = c.parameters;
    const lostMass =
      (slug === 'confidence-interval' &&
        p.trueChance > 0 &&
        p.trueChance < 1 &&
        r.rows.some(row => row.probability === 0)) ||
      (slug === 'binomial-distribution' &&
        p.chance > 0 &&
        p.chance < 1 &&
        r.rows.some(row => row.probability === 0)) ||
      (slug === 'poisson-distribution' && p.rate > 0 && r.rows.some(row => row.probability === 0));
    const lostVariation =
      slug === 'correlation' &&
      (p.trend !== 0 || p.scatter !== 0) &&
      (r.syy === 0 || r.rows.every(row => row.y === 5));
    if (lostMass || lostVariation)
      return {
        ...c,
        ...r,
        valid: false,
        status: 'numeric_precision',
        output: null,
        unit: definition(slug).unit,
        errors: [
          {
            field: 'parameters',
            message: lostMass
              ? 'A positive displayed probability is below numerical precision. Move the input farther from zero.'
              : 'A positive response variation is below numerical precision. Increase the trend or scatter.'
          }
        ]
      };
    if (slug === 'correlation' && r.r === null)
      return {
        ...c,
        ...r,
        valid: false,
        status: 'undefined_correlation',
        unit: definition(slug).unit,
        errors: [
          {
            field: 'scatter',
            message:
              'All response values are equal. Correlation needs positive variation in both variables.'
          }
        ]
      };
    if (slug === 'relative-entropy' && r.infinite)
      return {
        ...c,
        ...r,
        valid: false,
        status: 'infinite_divergence',
        unit: 'bits',
        errors: [
          {
            field: 'forecast',
            message:
              'The forecast assigns zero chance to an outcome with positive model probability. Relative entropy is infinite.'
          }
        ]
      };
    return { ...c, ...r, status: 'valid', unit: definition(slug).unit };
  }
  const curveValue = (slug, p, x) => {
    if (!has(slug) || !finite(x)) return null;
    const r = evaluate(slug, { ...p, [definition(slug).axis]: x });
    return r.valid ? r.output : null;
  };
  const fmt = value =>
    finite(value) ? String(Number(value.toPrecision(5))).replace('-', '−') : 'undefined';
  const pct = value => fmt(100 * value) + '%';
  function readout(slug, p, r, { format: f = fmt } = {}) {
    if (!r.valid)
      return {
        expression: r.outputLabel || 'Choose valid inputs',
        stats: [],
        insight: r.errors.map(e => e.message).join(' ')
      };
    return {
      expression: r.outputLabel,
      stats: [
        { label: definition(slug).primaryLabel, value: r.output, note: definition(slug).unit },
        ...(slug === 'linear-regression'
          ? [{ label: 'SQUARED RESIDUAL SUM', value: r.sse, note: 'cm²' }]
          : slug === 'confidence-interval'
            ? [
                { label: 'SELECTED INTERVAL LOWER', value: r.low, note: 'probability' },
                { label: 'SELECTED INTERVAL UPPER', value: r.high, note: 'probability' }
              ]
            : slug === 'poisson-distribution'
              ? [
                  {
                    label: 'MASS ABOVE 20',
                    value: r.remaining,
                    note: 'not included in displayed bars'
                  }
                ]
              : [])
      ],
      insight: r.summaryLabel + '. ' + definition(slug).limits
    };
  }
  const C = {
    bg: '#101e2b',
    grid: '#294352',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    cyan: '#77d8e8',
    mint: '#c6f276',
    gold: '#f5cf78',
    violet: '#b8a1ff'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5));
  const text = (x, y, v, color = C.ink, size = 16, extra = '') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" ${extra}/>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0, w))}" height="${n(Math.max(0, h))}" fill="${color}" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${color}" ${extra}/>`;
  const group = (keys, part, body) =>
    `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}">${body}</g>`;
  const identity = id =>
    Array.from(String(id))
      .map(c => (/[a-zA-Z0-9-]/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function pinned(slug, o) {
    const result = o.baseline && evaluate(slug, o.baseline);
    return result?.valid ? result : null;
  }
  function frame(slug, body, o, description, height = 390) {
    const width = o.compact ? 360 : 760,
      id = 'inference-' + identity(o.id || slug),
      b = pinned(slug, o);
    if (b) {
      body += text(
        22,
        height + 12,
        'Pinned: ' + b.outputLabel,
        C.violet,
        o.compact ? 14 : 18,
        'data-role="pinned-output" data-value="' + b.output + '"'
      );
      height += 35;
      description += ' Purple retains the pinned reading ' + b.outputLabel + '.';
    }
    return `<figure class="visualization-frame inference-scene" data-inference-model="${slug}"><svg class="visual-scene" viewBox="0 0 ${width} ${height}" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${width}" height="${height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;
  }
  function rail(slug, p, o, y) {
    if (o.sceneControl === false) return '';
    const c = controls(slug).find(c => c.key === definition(slug).axis),
      w = o.compact ? 360 : 760,
      left = 32,
      right = w - 32,
      x = left + ((p[c.key] - c.min) / (c.max - c.min)) * (right - left);
    return group(
      c.key,
      'input',
      `<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="${c.key}" data-drag-min="${c.min}" data-drag-max="${c.max}" data-drag-x0="${left}" data-drag-x1="${right}" data-drag-step="${c.step}" aria-label="${esc(c.label)}. Drag or use arrow keys." aria-valuemin="${c.min}" aria-valuemax="${c.max}" aria-valuenow="${p[c.key]}">${line(left, y, right, y, C.muted, 'stroke-width="3"')}${circle(x, y, 22, 'transparent', 'pointer-events="all"')}${circle(x, y, 7, C.cyan)}${text(w / 2, y + 27, c.label + ' = ' + fmt(p[c.key]), C.cyan, 15, 'text-anchor="middle"')}</g>`
    );
  }
  function headline(slug, r, o) {
    const w = o.compact ? 360 : 760;
    return (
      text(22, 32, definition(slug).primaryLabel, C.muted, o.compact ? 16 : 21) +
      group('output', 'output', text(22, 72, r.outputLabel, C.gold, o.compact ? 29 : 33)) +
      text(22, 102, r.calculationLabel, C.ink, o.compact ? 13 : 17)
    );
  }
  function bars(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 30,
      right = w - 25,
      top = 146,
      bottom = 295,
      span = right - left,
      rows = r.rows,
      max = slug === 'sampling-distribution' ? 1 : 1,
      minX = Math.min(...rows.map(r => r.x)),
      maxX = Math.max(...rows.map(r => r.x)),
      barWidth = Math.min(o.compact ? 30 : 50, (span / rows.length) * 0.72);
    let b = headline(slug, r, o) + line(left, bottom, right, bottom, C.muted);
    rows.forEach((row, i) => {
      const x = left + ((i + 0.5) * span) / rows.length,
        height = ((bottom - top) * row.probability) / max,
        selected =
          slug === 'hypothesis-test'
            ? row.selected
            : slug === 'binomial-distribution' || slug === 'poisson-distribution'
              ? row.x === p.count
              : true,
        color = selected ? C.gold : C.cyan;
      b += group(
        'rows ' +
          definition(slug).axis +
          ' output' +
          ((slug === 'binomial-distribution' || slug === 'poisson-distribution') &&
          row.x === p.count
            ? ' count'
            : ''),
        'intermediate',
        rect(
          x - barWidth / 2,
          bottom - height,
          barWidth,
          height,
          color,
          `data-role="probability-mass" data-outcome="${row.x}" data-probability="${row.probability}"`
        )
      );
      if (rows.length <= 13)
        b += text(x, bottom + 22, fmt(row.x), C.ink, 13, 'text-anchor="middle"');
    });
    if (rows.length > 13)
      b +=
        text(left, bottom + 23, fmt(minX), C.ink, 14) +
        text(right, bottom + 23, fmt(maxX), C.ink, 14, 'text-anchor="end"');
    b += text(
      w / 2,
      338,
      slug === 'sampling-distribution'
        ? 'Possible sample means · kg'
        : 'Whole counts · bar height is probability',
      C.muted,
      14,
      'text-anchor="middle"'
    );
    if (slug === 'poisson-distribution')
      b += text(w / 2, 363, 'Beyond 20: ' + pct(r.remaining), C.mint, 14, 'text-anchor="middle"');
    else if (slug === 'sampling-distribution')
      b += text(w / 2, 363, r.summaryLabel, C.mint, 14, 'text-anchor="middle"');
    else if (slug === 'hypothesis-test')
      b += text(w / 2, 363, r.decisionLabel, C.mint, 14, 'text-anchor="middle"');
    const height = o.sceneControl === false ? 390 : 460;
    b += rail(slug, p, o, 410);
    return frame(
      slug,
      b,
      o,
      slug === 'sampling-distribution'
        ? 'All sample means are weighted by the exact number of ordered samples producing them. The vertical scale stays 0 to 1. Increasing n narrows this distribution without changing its mean of 6 kg.'
        : 'Each bar is a probability at a whole count. The vertical scale is always 0 to 1. Gold marks ' +
            (slug === 'hypothesis-test'
              ? 'the entire prespecified upper tail.'
              : 'the selected count; other counts remain visible.'),
      height
    );
  }
  function intervalGeometry(p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 45,
      right = w - 30,
      px = x => left + (right - left) * x;
    let b =
      headline('confidence-interval', r, o) +
      text(left, 130, '0', C.muted, 13) +
      text(right, 130, '1', C.muted, 13, 'text-anchor="end"');
    b += group(
      'trueChance',
      'input',
      line(
        px(p.trueChance),
        142,
        px(p.trueChance),
        370,
        C.cyan,
        'stroke-width="2" data-role="true-probability"'
      )
    );
    r.rows.forEach((row, i) => {
      const y = 155 + i * 26,
        color = row.covered ? C.mint : C.violet;
      b += group(
        'rows' + (i === p.observed ? ' low high observed' : ''),
        'intermediate',
        text(20, y + 5, row.count, C.ink, 14) +
          line(
            px(row.low),
            y,
            px(row.high),
            y,
            color,
            `stroke-width="${i === p.observed ? 6 : 3}" data-role="confidence-interval" data-count="${row.count}" data-low="${row.low}" data-high="${row.high}" data-covered="${row.covered}"`
          ) +
          circle(px(row.count / 8), y, i === p.observed ? 5 : 3, C.gold)
      );
    });
    b +=
      text(
        w / 2,
        400,
        'Cyan: fixed p · green: intervals covering p',
        C.muted,
        13,
        'text-anchor="middle"'
      ) + rail('confidence-interval', p, o, 435);
    return frame(
      'confidence-interval',
      b,
      o,
      'Each horizontal segment is the interval produced by one possible count out of eight. The cyan line is the fixed model probability. Coverage adds the probabilities of green intervals, not the fraction of green rows.',
      o.sceneControl === false ? 420 : 485
    );
  }
  function scatterGeometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 42,
      right = w - 24,
      top = 138,
      bottom = 329,
      yMin = slug === 'linear-regression' ? -1 : -4,
      yMax = slug === 'linear-regression' ? 11 : 14,
      px = x => left + ((right - left) * (x - 1)) / 4,
      py = y => bottom - ((bottom - top) * (y - yMin)) / (yMax - yMin);
    let b =
      headline(slug, r, o) +
      line(left, bottom, right, bottom, C.muted) +
      line(left, top, left, bottom, C.muted);
    if (slug === 'linear-regression') {
      b += group(
        'intercept slope output',
        'output',
        line(
          px(1),
          py(r.intercept + r.slope),
          px(5),
          py(r.intercept + 5 * r.slope),
          C.mint,
          'stroke-width="3" data-role="fitted-line"'
        )
      );
      r.rows.forEach(row => {
        b += group(
          'residuals sse lastValue',
          'intermediate',
          line(
            px(row.x),
            py(row.y),
            px(row.x),
            py(row.fitted),
            C.gold,
            `stroke-width="3" data-role="residual" data-value="${row.residual}"`
          )
        );
      });
    } else {
      b += group(
        'trend',
        'reference',
        line(
          px(1),
          py(5 - 2 * p.trend),
          px(5),
          py(5 + 2 * p.trend),
          C.grid,
          'stroke-width="2" stroke-dasharray="5 4"'
        )
      );
    }
    r.rows.forEach((row, i) => {
      b += group(
        (i === 4 && slug === 'linear-regression' ? 'lastValue ' : '') +
          'rows' +
          (slug === 'correlation' ? ' scatter' : ''),
        'input',
        circle(
          px(row.x),
          py(row.y),
          6,
          i === 4 ? C.gold : C.cyan,
          `data-role="observed-point" data-x="${row.x}" data-y="${row.y}"`
        )
      );
      b += text(px(row.x), bottom + 24, row.x, C.ink, 14, 'text-anchor="middle"');
    });
    b +=
      text(left, top - 8, yMax, C.muted, 13) +
      text(left, bottom - 5, yMin, C.muted, 13) +
      text(
        w / 2,
        375,
        slug === 'linear-regression'
          ? 'Vertical gold gaps are residuals'
          : 'Dashed: trend · points: trend plus scatter',
        C.muted,
        14,
        'text-anchor="middle"'
      ) +
      rail(slug, p, o, 407);
    return frame(
      slug,
      b,
      o,
      slug === 'linear-regression'
        ? 'The green least-squares line and every gold vertical residual come from the same five measurements. Move the final point: the entire fit responds. Both axes retain fixed scales.'
        : 'Fixed-scale paired readings separate trend from scatter. Pearson r standardizes their centered cross-product; it describes linear association without establishing a cause.',
      o.sceneControl === false ? 397 : 455
    );
  }
  function cellsGeometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 30,
      cellW = (w - 80) / 2,
      ys = [163, 249],
      xs = [left, left + cellW + 20];
    let b = headline(slug, r, o);
    r.cells.forEach((v, i) => {
      const x = xs[i % 2],
        y = ys[Math.floor(i / 2)],
        color = i === 3 ? C.gold : C.cyan,
        max = slug === 'chi-square-association' ? 20 : 14;
      b += group(
        (slug === 'chi-square-association'
          ? 'diagonal cells contributions statistic'
          : 'cells difference' + (i === 3 ? ' combined' : '')) + ' output',
        'intermediate',
        rect(x, y, cellW, 63, C.grid) +
          rect(
            x,
            y + 48,
            (cellW * v) / max,
            15,
            color,
            `data-role="cell-value" data-cell="${i}" data-value="${v}"`
          ) +
          text(x + cellW / 2, y + 31, v, color, 25, 'text-anchor="middle"')
      );
    });
    b +=
      text(
        xs[0] + cellW / 2,
        145,
        slug === 'chi-square-association' ? 'Paper' : 'Tool off',
        C.muted,
        14,
        'text-anchor="middle"'
      ) +
      text(
        xs[1] + cellW / 2,
        145,
        slug === 'chi-square-association' ? 'Digital' : 'Tool on',
        C.muted,
        14,
        'text-anchor="middle"'
      ) +
      text(
        w / 2,
        344,
        slug === 'chi-square-association'
          ? 'Each expected count: 10 readers'
          : 'Top: guide off · bottom: guide on',
        C.muted,
        14,
        'text-anchor="middle"'
      ) +
      text(
        w / 2,
        374,
        slug === 'chi-square-association' ? 'All margins stay fixed at 20' : r.summaryLabel,
        C.mint,
        o.compact ? 12 : 17,
        'text-anchor="middle"'
      ) +
      rail(slug, p, o, 408);
    return frame(
      slug,
      b,
      o,
      slug === 'chi-square-association'
        ? 'Rows A/B and columns paper/digital form a fixed-margin count table. Each filled width uses a fixed 0–20 reader scale. Four nonnegative discrepancy contributions add to chi-square.'
        : 'The four cell means use the same fixed 0–14 minute scale. Compare the change across the top row with the change across the bottom row. Their difference is the displayed interaction contrast.',
      o.sceneControl === false ? 395 : 458
    );
  }
  function klGeometry(p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 28,
      span = w - 56;
    let b = headline('relative-entropy', r, o);
    for (let i = 0; i < 2; i++) {
      const y = 153 + i * 102,
        row = r.rows[i];
      b +=
        text(left, y, 'Outcome ' + i, C.ink, 16) +
        group(
          'actual rows',
          'input',
          rect(
            left,
            y + 15,
            span * row.probability,
            20,
            C.cyan,
            `data-role="model-mass" data-probability="${row.probability}"`
          )
        ) +
        group(
          'forecast rows',
          'intermediate',
          rect(
            left,
            y + 44,
            span * row.forecast,
            20,
            C.violet,
            `data-role="forecast-mass" data-probability="${row.forecast}"`
          )
        ) +
        text(
          w - 28,
          y,
          row.contribution === null ? 'Unbounded contribution' : fmt(row.contribution) + ' bits',
          C.gold,
          o.compact ? 14 : 18,
          'text-anchor="end"'
        );
    }
    b +=
      text(w / 2, 377, 'Cyan: model P · purple: forecast Q', C.muted, 14, 'text-anchor="middle"') +
      rail('relative-entropy', p, o, 411);
    return frame(
      'relative-entropy',
      b,
      o,
      'For each outcome compare the model mass with the forecast mass on the same 0–1 scale. Signed per-outcome contributions can be negative; their finite total is nonnegative. A positive model mass against zero forecast mass gives infinite relative entropy.',
      o.sceneControl === false ? 397 : 461
    );
  }
  function graph(slug, p, r, o) {
    const b = pinned(slug, o),
      baselineNote = b ? ' Purple retains the pinned model family and selected reading.' : '';
    if (slug === 'confidence-interval') {
      const current = r.rows.map(row => ({
        x: row.count,
        y: row.probability,
        label: 'k=' + row.count + (row.covered ? ' covers p' : ' misses p'),
        color: row.covered ? C.mint : C.violet,
        quantity: 'rows coverage output',
        draggable: false
      }));
      if (b)
        b.rows.forEach(row =>
          current.push({
            x: row.count,
            y: row.probability,
            label:
              'Pinned k=' + row.count + (row.covered ? ' covers pinned p' : ' misses pinned p'),
            color: C.violet,
            quantity: 'rows coverage',
            draggable: false
          })
        );
      return Plot.render(
        {
          title: 'Coverage weights at possible sticker counts',
          description:
            'Each mass belongs to a whole count. Green masses produce an interval covering the current teaching-model p; other masses miss it. Coverage is probability-weighted.' +
            baselineNote,
          x: { label: 'Sticker count k out of 8', min: 0, max: 8 },
          y: { label: 'Probability under p', min: 0, max: 1 },
          series: [],
          current,
          notes: b
            ? ['Pinned p=' + fmt(b.parameters.trueChance) + ', coverage ' + pct(b.coverage)]
            : []
        },
        o
      );
    }
    if (slug === 'linear-regression') {
      const current = r.rows.map(row => ({
        x: row.x,
        y: row.residual,
        label: 'Day ' + row.x,
        color: C.gold,
        quantity: 'residuals sse lastValue',
        draggable: false
      }));
      if (b)
        b.rows.forEach(row =>
          current.push({
            x: row.x,
            y: row.residual,
            label: 'Pinned day ' + row.x,
            color: C.violet,
            quantity: 'residuals',
            draggable: false
          })
        );
      return Plot.render(
        {
          title: 'Residuals after refitting',
          description:
            'Residuals are observed height minus fitted height. An intercept makes their sum zero up to floating precision. This is a residual-versus-day view.' +
            baselineNote,
          x: { label: 'Day x', min: 1, max: 5 },
          y: { label: 'Residual y−ŷ, cm', min: -6, max: 6 },
          series: [
            {
              id: 'zero',
              label: 'Zero residual',
              color: C.muted,
              points: [
                { x: 1, y: 0 },
                { x: 5, y: 0 }
              ]
            }
          ],
          current,
          notes: b ? ['Pinned final height ' + fmt(b.parameters.lastValue) + ' cm'] : []
        },
        o
      );
    }
    if (slug === 'factorial-interaction') {
      const series = [
        {
          id: 'without',
          label: 'Guide off',
          color: C.cyan,
          points: [
            { x: 0, y: 12 },
            { x: 1, y: 10 }
          ],
          quantity: 'without'
        },
        {
          id: 'with',
          label: 'Guide on',
          color: C.gold,
          points: [
            { x: 0, y: 9 },
            { x: 1, y: p.combined }
          ],
          quantity: 'withGuide combined difference output'
        }
      ];
      if (b)
        series.push({
          id: 'baseline-with',
          label: 'Pinned guide on',
          color: C.violet,
          dashed: true,
          points: [
            { x: 0, y: 9 },
            { x: 1, y: b.parameters.combined }
          ],
          quantity: 'withGuide'
        });
      return Plot.render(
        {
          title: 'Does the tool effect depend on the guide?',
          description:
            'Segments join means at the two tool levels. Parallel segments have equal tool effects and zero difference of differences; nonparallel segments expose interaction.' +
            baselineNote,
          x: { label: 'Tool: 0 off, 1 on', min: 0, max: 1 },
          y: { label: 'Mean packing time, minutes', min: 0, max: 14 },
          series,
          current: b
            ? [
                {
                  x: 1,
                  y: b.parameters.combined,
                  label: 'Pinned combined mean',
                  color: C.violet,
                  draggable: false
                }
              ]
            : [],
          notes: []
        },
        o
      );
    }
    const d = definition(slug),
      c = controls(slug).find(c => c.key === d.axis),
      xs = c.discrete
        ? Array.from({ length: c.max - c.min + 1 }, (_, i) => c.min + i)
        : Array.from({ length: 101 }, (_, i) => c.min + ((c.max - c.min) * i) / 100),
      points = xs.map(x => ({ x, y: curveValue(slug, p, x) })),
      ranges = {
        'sampling-distribution': [0, 3.5],
        correlation: [-1.05, 1.05],
        'chi-square-association': [0, 40],
        'relative-entropy': [0, 10],
        'binomial-distribution': [0, 1],
        'poisson-distribution': [0, 1],
        'hypothesis-test': [0, 1]
      },
      range = ranges[slug];
    const series = c.discrete
        ? []
        : [
            {
              id: 'response',
              label: d.primaryLabel,
              quantity: d.axis + ' output',
              color: C.gold,
              points
            }
          ],
      current = c.discrete
        ? points
            .filter(point => finite(point.y))
            .map(point => ({
              ...point,
              label: c.label + ' ' + point.x,
              color: point.x === p[d.axis] ? C.gold : C.cyan,
              quantity: d.axis + ' output',
              draggable: false
            }))
        : [
            {
              x: p[d.axis],
              y: r.output,
              label: 'Current result',
              color: C.mint,
              quantity: d.axis + ' output',
              draggable: false
            }
          ];
    if (b) {
      series.push({
        id: 'baseline-curve',
        label: 'Pinned model family',
        quantity: d.axis + ' output',
        color: C.violet,
        dashed: true,
        ...(c.discrete ? { dots: true } : {}),
        points: xs.map(x => ({ x, y: curveValue(slug, b.parameters, x) }))
      });
      current.push({
        x: b.parameters[d.axis],
        y: b.output,
        label: 'Pinned result',
        color: C.violet,
        quantity: 'output',
        draggable: false
      });
    }
    if (slug === 'hypothesis-test')
      series.push({
        id: 'alpha',
        label: 'α=0.05',
        color: C.violet,
        dashed: true,
        points: [
          { x: c.min, y: 0.05 },
          { x: c.max, y: 0.05 }
        ]
      });
    return Plot.render(
      {
        title: d.title + ' · parameter response',
        description:
          'Change ' +
          c.label +
          ' while holding every other input fixed. ' +
          (c.discrete
            ? 'Only whole-number inputs are evaluated; no line invents fractional states. '
            : '') +
          d.limits +
          baselineNote,
        x: { key: c.key, label: c.label, min: c.min, max: c.max, step: c.step, value: p[c.key] },
        y: { label: d.primaryLabel + (d.unit ? ' · ' + d.unit : ''), min: range[0], max: range[1] },
        series,
        current,
        notes: b ? ['Pinned input ' + c.label + ' = ' + fmt(b.parameters[d.axis])] : []
      },
      o
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid && r.status !== 'infinite_divergence' && r.status !== 'undefined_correlation')
      return frame(
        slug,
        text(22, 45, 'Choose valid inputs', C.gold, 25),
        o,
        r.errors.map(e => e.message).join(' '),
        130
      );
    const p = r.parameters;
    if (o.view === 'graph') {
      if (!r.valid)
        return frame(
          slug,
          headline(slug, r, o) + text(22, 145, 'No finite current point to plot', C.ink, 18),
          o,
          r.errors.map(e => e.message).join(' '),
          195
        );
      return graph(slug, p, r, o);
    }
    if (slug === 'confidence-interval') return intervalGeometry(p, r, o);
    if (slug === 'linear-regression' || slug === 'correlation')
      return scatterGeometry(slug, p, r, o);
    if (slug === 'factorial-interaction' || slug === 'chi-square-association')
      return cellsGeometry(slug, p, r, o);
    if (slug === 'relative-entropy') return klGeometry(p, r, o);
    return bars(slug, p, r, o);
  }
  return Object.freeze({
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render
  });
});
