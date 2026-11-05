/* Bounded covariance, spread inference and power. The host owns clocks and state. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(
    node ? require('./plot-view.js') : root.AtlasPlotView,
    node ? require('./distribution-extensions.js') : root.AtlasDistributionExtensions
  );
  if (node) module.exports = api;
  root.AtlasDesignExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot, Distribution) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  // Numerical chi-square (.025,.975) quantiles for df=5..30. Generated offline
  // by the integer/half-integer gamma recurrence and checked independently
  // against a positive incomplete-gamma power series. No startup inversion.
  const criticalValues = freeze([
    [0.8312116134866618, 12.832501994030014],
    [1.237344245791204, 14.449375335447918],
    [1.689869180677356, 16.012764274629326],
    [2.1797307472526493, 17.53454613948464],
    [2.7003894999803606, 19.02276779864163],
    [3.246972780236841, 20.483177350807395],
    [3.8157482522361015, 21.92004926102119],
    [4.403788506981703, 23.336664158645327],
    [5.00875051181033, 24.73560488493154],
    [5.628726103039721, 26.11894804503735],
    [6.262137795043259, 27.488392863442982],
    [6.9076643534969975, 28.84535072340475],
    [7.564186449577582, 30.1910091216398],
    [8.230746194756655, 31.526378440386623],
    [8.906516481987975, 32.85232686172971],
    [9.590777392264869, 34.169606902838325],
    [10.282897782522877, 35.478875905727236],
    [10.982320734473689, 36.78071208403554],
    [11.68855192245244, 38.075627250355765],
    [12.401150217444446, 39.36407702660391],
    [13.119720024937749, 40.64646912027517],
    [13.843904982007643, 41.9231700963539],
    [14.573382730821663, 43.194510966156045],
    [15.307860552601255, 44.46079183631775],
    [16.04707169536497, 45.722285804174504],
    [16.790772265566567, 46.97924224367114]
  ]);
  const Z95 = 1.6448536269514722;
  const field = (key, label, value, min, max, step, unit, discrete = false) => ({
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
    covariance: {
      title: 'Covariance as signed area',
      expression: 's_xy = ∑(xᵢ−x̄)(yᵢ−ȳ)/(n−1)',
      axis: 'trend',
      unit: 'm·min',
      primaryLabel: 'Sample covariance',
      setting:
        'Five paired boards have lengths 1 through 5 metres and constructed finishing times. Center both measurements, multiply each pair of deviations, and combine their signed rectangle areas.',
      limits:
        'The five fixed board lengths are paired with times 10+c(x−3)+w r, using residual pattern r=(1,−2,2,−2,1). This pattern has zero mean and zero product with the centered lengths, so changing its size changes the point cloud while preserving this construction’s covariance. The sample convention divides by 4, not the population divisor 5. Signed product units are metre-minutes. This descriptive construction neither proves causation nor supplies a population inference.',
      controls: [
        field('trend', 'Time trend c', 1, -2, 2, 0.05, 'min/m'),
        field('scatter', 'Residual offset w', 0.5, 0, 2, 0.05, 'min')
      ]
    },
    'normal-variance-interval': {
      title: 'An interval for normal-population variance',
      expression: 'I = [(n−1)s²/q_U, (n−1)s²/q_L]',
      axis: 'sampleSize',
      unit: 'mm²',
      primaryLabel: 'Upper variance endpoint U',
      setting:
        'A calibration workshop has a sample standard deviation for independent normal cutting errors. Compare plausible population variances by dividing the same squared-spread total by two chi-square quantiles.',
      limits:
        'The exact fixed 95% procedure assumes independent identically normal readings with an unknown common mean and unknown positive population variance. s uses denominator n−1. The formula applies for n≥2; this bounded display supports whole n from 6 to 31 and positive s from .25 to 2 mm. Changing n holds the entered s fixed, without generating observations. Confidence describes repeated procedure coverage, not posterior probability for the fixed unknown variance; no unknown variance location is invented. Numerical quantiles are not rounded-table exact values.',
      controls: [
        field('sampleSize', 'Independent readings n', 10, 6, 31, 1, 'readings', true),
        field('sampleSpread', 'Sample standard deviation s', 1, 0.25, 2, 0.05, 'mm')
      ]
    },
    'normal-test-power': {
      title: 'Replication and a normal test’s power',
      expression: 'SE = σ√(2/n); c = z₀.₉₅ SE; power = Φ(δ/SE−z₀.₉₅)',
      axis: 'perGroup',
      unit: 'probability',
      primaryLabel: 'Planned rejection probability',
      setting:
        'Plan two equally sized independent groups for a calibration comparison. Assume a true positive mean difference and known common measurement spread; choose a one-sided 5% rule before seeing outcomes and inspect its chance of detecting that difference.',
      limits:
        'Both groups have n independent normal observations and a known common positive population standard deviation. The one-sided rule tests a non-positive population mean difference and rejects when the observed mean B−A exceeds c=z₀.₉₅ σ√(2/n); alpha=.05 occurs at the boundary of zero true difference. The entered effect δ is an assumed true planning difference, not an estimated treatment effect. Power is the rejection probability at that assumption and β is its non-rejection complement. β is a Type II error probability when δ>0; at δ=0 it is null non-rejection. Extreme numerical tails may underflow to zero and power may round to one; this is not guaranteed detection. No sample, causal finding, unknown-spread method or universal sample-size recommendation is generated.',
      controls: [
        field('perGroup', 'Independent readings per group n', 16, 2, 64, 1, 'readings', true),
        field('effect', 'Assumed true difference δ', 0.5, 0, 2, 0.05, 'mm'),
        field('sigma', 'Known common spread σ', 1, 0.25, 2, 0.05, 'mm')
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown design model.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, ...c }) => ({ ...c }));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const value = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        typeof value !== 'number' ||
        !Number.isFinite(value) ||
        value < c.min ||
        value > c.max ||
        (c.discrete && !Number.isInteger(value))
      )
        errors.push({
          field: c.key,
          message:
            'Use ' +
            (c.discrete ? 'a whole number' : 'a finite number') +
            ' within the displayed bounds.'
        });
      else parameters[c.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'covariance') {
      const xValues = [1, 2, 3, 4, 5],
        xDeviations = [-2, -1, 0, 1, 2],
        residuals = [1, -2, 2, -2, 1],
        yValues = xDeviations.map((value, i) => 10 + p.trend * value + p.scatter * residuals[i]),
        yDeviations = yValues.map(value => value - 10),
        products = xDeviations.map((value, i) => value * yDeviations[i]),
        analyticSum = 10 * p.trend,
        sumProducts = products.reduce((sum, value) => sum + value, 0),
        output = sumProducts / 4;
      if (
        p.trend !== 0 &&
        (analyticSum === 0 ||
          output === 0 ||
          Math.abs(sumProducts - analyticSum) > 1e-10 * Math.abs(analyticSum))
      )
        return {
          ...checked,
          valid: false,
          status: 'numeric_precision',
          output: null,
          errors: [
            {
              field: 'trend',
              message:
                'The trend is too small to retain beside these residual offsets. Choose a larger magnitude.'
            }
          ]
        };
      return {
        ...checked,
        status: 'valid',
        output,
        covariance: output,
        meanX: 3,
        meanY: 10,
        xValues,
        yValues,
        xDeviations,
        yDeviations,
        products,
        sumProducts,
        count: 5,
        degreesFreedom: 4,
        rows: xValues.map((x, i) => ({
          position: i + 1,
          x,
          y: yValues[i],
          dx: xDeviations[i],
          dy: yDeviations[i],
          product: products[i]
        }))
      };
    }
    if (slug === 'normal-variance-interval') {
      const degreesFreedom = p.sampleSize - 1,
        [criticalLow, criticalHigh] = criticalValues[degreesFreedom - 5],
        variance = p.sampleSpread ** 2,
        scale = degreesFreedom * variance,
        lowerVariance = scale / criticalHigh,
        upperVariance = scale / criticalLow;
      return {
        ...checked,
        status: 'valid',
        output: upperVariance,
        degreesFreedom,
        variance,
        scale,
        criticalLow,
        criticalHigh,
        lowerVariance,
        upperVariance,
        interval: [lowerVariance, upperVariance],
        width: upperVariance - lowerVariance,
        lowerSpread: Math.sqrt(lowerVariance),
        upperSpread: Math.sqrt(upperVariance)
      };
    }
    const standardError = p.sigma * Math.sqrt(2 / p.perGroup),
      criticalValue = Z95,
      threshold = criticalValue * standardError,
      standardizedEffect = p.effect / standardError,
      effectZ = standardizedEffect - criticalValue,
      tails = Distribution.normalTails(effectZ);
    return {
      ...checked,
      status: 'valid',
      output: tails.cdf,
      power: tails.cdf,
      beta: tails.survival,
      standardError,
      threshold,
      standardizedEffect,
      effectZ,
      alpha: 0.05,
      criticalValue,
      nullMean: 0,
      alternativeMean: p.effect,
      totalCount: 2 * p.perGroup,
      totalReadings: 2 * p.perGroup
    };
  }
  const canInterpolate = (slug, a, b) =>
    validateParams(slug, a).valid &&
    validateParams(slug, b).valid &&
    (slug === 'normal-variance-interval'
      ? a.sampleSize === b.sampleSize
      : slug === 'normal-test-power'
        ? a.perGroup === b.perGroup
        : true);
  function specs(slug) {
    const d = get(slug);
    return {
      title: d.title,
      expression: d.expression,
      axis: d.axis,
      unit: d.unit,
      primaryLabel: d.primaryLabel,
      setting: d.setting,
      limits: d.limits,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug),
      canInterpolate: (a, b) => canInterpolate(slug, a, b),
      readout: (p, r) => ({
        expression: d.expression,
        stats: !r.valid
          ? []
          : slug === 'covariance'
            ? [
                { label: 'SAMPLE COVARIANCE', value: r.output, note: 'signed metre-minutes' },
                { label: 'SUM OF PRODUCTS', value: r.sumProducts, note: 'divide by n−1 = 4' }
              ]
            : slug === 'normal-variance-interval'
              ? [
                  { label: 'LOWER VARIANCE', value: r.lowerVariance, note: 'squared millimetres' },
                  { label: 'UPPER VARIANCE', value: r.output, note: 'squared millimetres' },
                  { label: 'DEGREES OF FREEDOM', value: r.degreesFreedom, note: 'n−1' }
                ]
              : [
                  {
                    label: 'POWER',
                    value: r.output,
                    note:
                      r.output === 1
                        ? 'rounds to one; detection is not guaranteed'
                        : 'probability of rejecting at assumed effect'
                  },
                  {
                    label: 'NON-REJECTION β',
                    value: r.beta,
                    note:
                      p.effect > 0
                        ? 'Type II error under the positive assumed effect'
                        : 'null non-rejection when δ = 0'
                  },
                  {
                    label: 'TOTAL READINGS',
                    value: r.totalCount,
                    note: 'two groups of n independent readings'
                  }
                ],
        insight: r.valid
          ? slug === 'covariance'
            ? 'Same-direction deviations contribute positive area; opposite-direction deviations contribute negative area. This residual pattern has zero net product with length.'
            : slug === 'normal-variance-interval'
              ? 'The same squared-spread total is divided by different chi-square quantiles. The interval is asymmetric and its endpoints use squared units.'
              : 'More independent readings per group narrow the mean-difference law. The chosen threshold keeps boundary-null rejection at 5%; power depends on the assumed true effect.'
          : r.errors.map(e => e.message).join(' ')
      })
    };
  }
  const curveValue = (slug, p, value) => {
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
  };
  const normalDensity = (x, mean, sd) =>
    typeof x === 'number' &&
    Number.isFinite(x) &&
    typeof mean === 'number' &&
    Number.isFinite(mean) &&
    typeof sd === 'number' &&
    Number.isFinite(sd) &&
    sd > 0
      ? Math.exp(-0.5 * ((x - mean) / sd) ** 2) / (sd * Math.sqrt(2 * Math.PI))
      : null;
  const C = {
    bg: '#111e2b',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    grid: '#294352',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276',
    violet: '#b8a1ff'
  };
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = value => Number(value.toFixed(5)),
    f = value =>
      Number.isFinite(value)
        ? String(Number(value.toPrecision(4))).replace(/-/g, '−')
        : 'unavailable';
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const dot = (x, y, color, radius = 6) =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}"/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const scope = value =>
    Array.from(String(value))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'design-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 420" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="420" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      middle = w / 2,
      left = o.compact ? 42 : 80,
      right = w - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'covariance') {
      const px = x => left + (x / 6) * (right - left),
        py = y => 292 - (y / 20) * 186;
      body =
        text(middle, 32, 'Same way, or opposite ways?', C.ink, o.compact ? 21 : 25) +
        mark(
          'trend scatter count',
          text(
            middle,
            65,
            'c = ' + f(p.trend) + ' min/m · w = ' + f(p.scatter) + ' min',
            C.cyan,
            o.compact ? 16 : 20
          ),
          'input'
        );
      for (const y of [0, 10, 20])
        body += line(left, py(y), right, py(y)) + text(left - 12, py(y) + 5, y, C.muted, 15, 'end');
      for (const x of [1, 3, 5])
        body += line(px(x), 106, px(x), 292) + text(px(x), 317, x, C.muted, 16);
      body += mark(
        'meanX meanY',
        line(px(3), 106, px(3), 292, C.cyan, 1.5, 'stroke-dasharray="4 4"') +
          line(left, py(10), right, py(10), C.cyan, 1.5, 'stroke-dasharray="4 4"')
      );
      r.rows.forEach(row => {
        const color = row.product < 0 ? C.violet : C.mint,
          x = Math.min(px(3), px(row.x)),
          y = Math.min(py(10), py(row.y));
        body += mark(
          'products xDeviations yDeviations sumProducts',
          `<rect x="${n(x)}" y="${n(y)}" width="${n(Math.abs(px(row.x) - px(3)))}" height="${n(Math.abs(py(row.y) - py(10)))}" fill="${color}" fill-opacity=".13" stroke="${color}" stroke-opacity=".7"/>`
        );
        body += mark(
          'xValues yValues rows trend scatter',
          dot(px(row.x), py(row.y), C.gold, 5),
          'input'
        );
      });
      body +=
        text(
          middle,
          92,
          'Finishing time in minutes · 5 board pairs',
          C.muted,
          o.compact ? 14 : 18
        ) + text(middle, 341, 'Board length in metres', C.muted, 16);
      body += mark(
        'sumProducts products degreesFreedom count',
        text(
          middle,
          369,
          '∑ products = ' + f(r.sumProducts) + '; divide by 4',
          C.mint,
          o.compact ? 16 : 21
        )
      );
      body += mark(
        'output covariance',
        text(middle, 401, 'Covariance = ' + f(r.output) + ' m·min', C.gold, o.compact ? 22 : 27),
        'output'
      );
      if (pin?.valid)
        body += mark(
          'output',
          pin.rows
            .map(
              row =>
                `<circle cx="${n(px(row.x))}" cy="${n(py(row.y))}" r="8" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="3 2"/>`
            )
            .join(''),
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'The five board pairs use fixed 0–6 metre and 0–20 minute axes. Each rectangle joins a paired point to the mean crosshair (3 m, 10 min); its area is proportional to the absolute product of deviations. Mint contributes positively and violet negatively. Sum the signed products and divide by four for sample covariance.'
      );
    }
    if (slug === 'normal-variance-interval') {
      const px = value => left + (value / 25) * (right - left);
      body =
        text(middle, 32, 'How uncertain is the population spread?', C.ink, o.compact ? 17 : 24) +
        mark(
          'sampleSize degreesFreedom sampleSpread variance',
          text(
            middle,
            64,
            'n = ' + p.sampleSize + ' · s = ' + f(p.sampleSpread) + ' mm · ν = ' + r.degreesFreedom,
            C.cyan,
            o.compact ? 16 : 21
          ),
          'input'
        ) +
        mark(
          'criticalLow criticalHigh scale',
          text(
            middle,
            101,
            'qL ≈ ' + f(r.criticalLow) + ' · qU ≈ ' + f(r.criticalHigh),
            C.mint,
            o.compact ? 16 : 20
          )
        );
      for (const value of [0, 5, 10, 15, 20, 25])
        body +=
          line(px(value), 147, px(value), 252) +
          text(px(value), 278, value, C.muted, o.compact ? 14 : 17);
      body +=
        line(left, 219, right, 219) +
        mark(
          'lowerVariance upperVariance interval width output',
          line(px(r.lowerVariance), 219, px(r.upperVariance), 219, C.gold, 7) +
            line(px(r.lowerVariance), 205, px(r.lowerVariance), 233, C.gold, 3) +
            line(px(r.upperVariance), 205, px(r.upperVariance), 233, C.gold, 3),
          'output'
        );
      body += mark(
        'variance sampleSpread',
        dot(px(r.variance), 219, C.cyan, 7) +
          text(middle, 143, 'Observed s² = ' + f(r.variance) + ' mm²', C.cyan, 17),
        'input'
      );
      body += text(
        middle,
        311,
        'Population variance · squared millimetres',
        C.muted,
        o.compact ? 15 : 20
      );
      body += mark(
        'scale degreesFreedom variance',
        text(middle, 340, '(n−1)s² = ' + f(r.scale) + ' mm²', C.mint, 17)
      );
      body += mark(
        'lowerVariance upperVariance interval output',
        text(
          middle,
          371,
          'L ≈ ' + f(r.lowerVariance) + ' · U ≈ ' + f(r.output) + ' mm²',
          C.gold,
          o.compact ? 20 : 26
        ),
        'output'
      );
      body += mark(
        'lowerSpread upperSpread',
        text(
          middle,
          400,
          'Spread bounds: ' + f(r.lowerSpread) + ' to ' + f(r.upperSpread) + ' mm',
          C.muted,
          o.compact ? 16 : 21
        )
      );
      if (pin?.valid)
        body += mark(
          'output',
          line(
            px(pin.lowerVariance),
            247,
            px(pin.upperVariance),
            247,
            C.violet,
            3,
            'stroke-dasharray="5 4"'
          ),
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'Gold is the fixed 95% normal-population variance interval on a 0–25 square-millimetre axis. Cyan is the observed sample variance, not the unknown population variance. The same (n−1)s² total is divided by the upper and lower chi-square quantiles in the opposite order. Square roots give the separate standard-deviation bounds.'
      );
    }
    const px = x => left + ((x + 6) / 12) * (right - left),
      py = y => 286 - y * 169,
      pathFor = mean =>
        [
          ...new Set(
            [
              ...Array.from({ length: 241 }, (_, i) => -6 + (12 * i) / 240),
              ...Array.from({ length: 49 }, (_, i) => mean + ((i - 24) * r.standardError) / 4),
              r.threshold,
              0,
              p.effect
            ].filter(x => x >= -6 && x <= 6)
          )
        ]
          .sort((a, b) => a - b)
          .map((x, i) => {
            const y = Distribution.normalTails((x - mean) / r.standardError).survival;
            return (i ? 'L' : 'M') + n(px(x)) + ' ' + n(py(y));
          })
          .join(' ');
    body =
      text(middle, 32, 'Plan a chance of detecting the difference', C.ink, o.compact ? 17 : 24) +
      mark(
        'perGroup totalCount totalReadings sigma',
        text(
          middle,
          63,
          'n = ' + p.perGroup + ' per group · N = ' + r.totalCount + ' · σ = ' + f(p.sigma) + ' mm',
          C.cyan,
          o.compact ? 15 : 20
        ),
        'input'
      ) +
      mark(
        'standardError threshold criticalValue',
        text(
          middle,
          93,
          'c ≈ 1.645 × ' + f(r.standardError) + ' = ' + f(r.threshold) + ' mm',
          C.mint,
          o.compact ? 16 : 21
        )
      );
    for (const value of [0, 0.5, 1])
      body +=
        line(left, py(value), right, py(value)) +
        text(left - 9, py(value) + 5, f(value), C.muted, 14, 'end');
    for (const value of [-6, 0, 6])
      body += line(px(value), 117, px(value), 286) + text(px(value), 312, value, C.muted, 16);
    body += mark(
      'nullMean alpha standardError',
      `<path data-curve="boundary-null" d="${pathFor(0)}" fill="none" stroke="${C.muted}" stroke-width="3"/>`,
      'intermediate'
    );
    body += mark(
      'effect alternativeMean standardizedEffect effectZ standardError',
      `<path data-curve="assumed-effect" d="${pathFor(p.effect)}" fill="none" stroke="${C.cyan}" stroke-width="3"/>` +
        dot(px(p.effect), py(0.5), C.cyan, 4),
      'input'
    );
    body += mark(
      'threshold criticalValue',
      line(px(r.threshold), 117, px(r.threshold), 286, C.gold, 2, 'stroke-dasharray="4 4"')
    );
    body += mark('alpha', dot(px(r.threshold), py(r.alpha), C.gold, 5));
    body += mark(
      'output power beta',
      dot(px(r.threshold), py(r.output), C.mint, 7) +
        line(
          left,
          py(r.output),
          px(r.threshold),
          py(r.output),
          C.mint,
          1.5,
          'stroke-dasharray="3 4"'
        ),
      'output'
    );
    body +=
      text(middle, 340, 'Cutoff for mean B−A · millimetres', C.muted, o.compact ? 15 : 20) +
      mark(
        'effect alpha',
        text(
          middle,
          367,
          'Assumed δ = ' + f(p.effect) + ' mm · α = 0.05',
          C.cyan,
          o.compact ? 17 : 21
        ),
        'input'
      ) +
      mark(
        'output power beta',
        text(
          middle,
          401,
          'Power ≈ ' + f(r.output) + ' · β ≈ ' + f(r.beta),
          C.gold,
          o.compact ? 23 : 29
        ),
        'output'
      );
    if (pin?.valid)
      body += mark('output', dot(px(pin.threshold), py(pin.output), C.violet, 5), 'reference');
    return frame(
      slug,
      body,
      o,
      'These are normal right-tail probability curves, not density curves. Horizontal cutoff uses the fixed −6 to 6 mm scale; curve height is the full probability that the mean difference exceeds that cutoff. Gray is the boundary-null law and cyan the assumed true effect. The gold cutoff intersects gray at alpha=.05 and cyan at the green power value. β is one minus power.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls[0],
      discrete = !!c.discrete,
      values = discrete
        ? Array.from({ length: c.max - c.min + 1 }, (_, i) => c.min + i)
        : Array.from({ length: 101 }, (_, i) => c.min + ((c.max - c.min) * i) / 100),
      current = [
        {
          x: p[c.key],
          y: r.output,
          label: d.primaryLabel,
          quantity: c.key + ' output',
          color: C.mint,
          draggable: !discrete && o.sceneControl !== false
        }
      ],
      pin = o.baseline && evaluate(slug, o.baseline);
    if (pin?.valid)
      current.push({
        x: pin.parameters[c.key],
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    return Plot.render(
      {
        title: d.title,
        description: d.setting,
        x: { ...c, label: c.label },
        y: {
          min: slug === 'covariance' ? -5 : 0,
          max: slug === 'covariance' ? 5 : slug === 'normal-variance-interval' ? 25 : 1,
          label: d.primaryLabel + ' (' + d.unit + ')'
        },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: c.key + ' output',
            color: C.gold,
            dots: discrete,
            points: values.map(x => ({ x, y: curveValue(slug, p, x) }))
          }
        ],
        current,
        notes: [
          slug === 'covariance'
            ? 'The fixed signed covariance scale preserves the size and direction of the paired association. This residual pattern changes shape without changing its net signed product.'
            : slug === 'normal-variance-interval'
              ? 'Separate dots are whole sample sizes. Sample spread is held fixed to compare upper endpoints; no new readings are generated.'
              : 'Separate dots are whole per-group counts. Power uses the assumed true difference and the declared known-spread normal model.'
        ]
      },
      { ...o, ...(discrete ? { sceneControl: false } : {}) }
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(o.compact ? 180 : 380, 185, 'Choose supported inputs', C.gold, o.compact ? 21 : 25),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : geometry(slug, r.parameters, r, o);
  }
  return Object.freeze({
    ids,
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    canInterpolate,
    criticalValues,
    criticalValue: Z95,
    normalDensity,
    normalTails: Distribution.normalTails
  });
});
