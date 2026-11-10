/* Continuous probability and paired signs. The shared host owns motion and text pacing. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasDistributionExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const number = (key, label, value, min, max, step, unit = '') => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit
  });
  const definitions = {
    'normal-distribution': {
      title: 'Normal distribution: height and area',
      axis: 'threshold',
      unit: 'probability',
      expression: 'z = (x − μ)/σ; F(x) = Φ(z)',
      controls: [
        number('threshold', 'Error threshold x', 1, -6, 6, 0.05, 'mm'),
        number('mean', 'Mean error μ', 0, -2, 2, 0.05, 'mm'),
        number('sigma', 'Standard deviation σ', 1, 0.25, 2, 0.05, 'mm')
      ],
      limits:
        'A declared normal model describes signed cutting errors in millimetres. The density is not probability at a point: probability is area. The density window is fixed at −10 to 10 mm and omitted tails are not renormalized. Gaussian quadrature approximates the full CDF; measured error is checked separately against Python erfc. No normality or central-limit theorem is inferred from these chosen parameters.',
      cue: 'Move the threshold through the same density. The shaded area and full probability strip follow the threshold.'
    },
    'exponential-distribution': {
      title: 'Exponential waiting time',
      axis: 'time',
      unit: 'probability',
      expression: 'F(t) = 1 − exp(−λt); S(t) = exp(−λt)',
      controls: [
        number('time', 'Waiting threshold t', 2, 0, 8, 0.05, 'min'),
        number('rate', 'Arrival rate λ', 0.5, 0.25, 2, 0.05, 'per min')
      ],
      limits:
        'A constant-rate memoryless arrival model gives the wait to the next event. Rate λ is measured per minute; mean wait is 1/λ minutes. The time window ends at eight minutes without renormalizing its remaining tail. Waiting time is continuous, unlike a Poisson event count. This constructed service model does not validate actual arrival data.',
      cue: 'Gold area is the chance an arrival has occurred by the chosen time. The remaining strip is the chance of still waiting.'
    },
    'sign-test': {
      title: 'A paired sign test',
      axis: 'shift',
      unit: 'probability',
      expression: 'p₊ = P(K ≥ k); K ∼ Binomial(n, 1/2)',
      controls: [
        number('shift', 'Added after-reading shift h', 1.5, -4, 4, 0.05, 'mm'),
        {
          key: 'pattern',
          label: 'Paired reading pattern',
          value: 'varied',
          type: 'select',
          options: [
            { value: 'varied', label: 'Different original changes' },
            { value: 'matched', label: 'Originally matching pairs' }
          ]
        }
      ],
      limits:
        'Six original paired ruler readings illustrate a predeclared one-sided test for positive changes. Independent pairs and fair positive/negative signs among nonzero differences form the null model. A continuous difference distribution with median zero supplies the usual median interpretation; this is not equality of the two raw medians. Exact zero differences are omitted; all ties provide no sign evidence. Substantial ties need a separately justified conditional sign model. Exploring shifts is not a preplanned inferential study.',
      cue: 'Each before/after pair contributes a direction. Only nonzero signs enter the exact one-sided null tail.'
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(definitions);
  const ids = Object.freeze(Object.keys(definitions));
  const has = id => typeof id === 'string' && Object.hasOwn(definitions, id);
  const get = id => {
    if (!has(id)) throw new RangeError('Unknown distribution extension: ' + id);
    return definitions[id];
  };
  const defaults = id => Object.fromEntries(get(id).controls.map(c => [c.key, c.value]));
  const controls = id =>
    get(id).controls.map(({ value, ...c }) => ({
      ...c,
      ...(c.options ? { options: c.options.map(o => ({ ...o })) } : {})
    }));
  function validateParams(id, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(id) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared parameter object.' }],
        warnings: []
      };
    const fields = get(id).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key))
        errors.push({ field: key, message: 'Unknown parameter.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        c.type === 'select'
          ? !c.options.some(o => o.value === v)
          : typeof v !== 'number' || !Number.isFinite(v) || v < c.min || v > c.max
      )
        errors.push({ field: c.key, message: 'Use the declared range or listed choice.' });
      else parameters[c.key] = v === 0 ? 0 : v;
    }
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }
  function gaussRule(order) {
    const points = [];
    for (let i = 0; i < order / 2; i++) {
      let root = Math.cos((Math.PI * (i + 0.75)) / (order + 0.5));
      const polynomial = x => {
        let a = 1,
          b = x;
        for (let k = 2; k <= order; k++) {
          const c = ((2 * k - 1) * x * b - (k - 1) * a) / k;
          a = b;
          b = c;
        }
        return { p: b, derivative: (order * (x * b - a)) / (x * x - 1) };
      };
      for (let iteration = 0; iteration < 24; iteration++) {
        const p = polynomial(root),
          step = p.p / p.derivative;
        root -= step;
        if (Math.abs(step) < 2e-16) break;
      }
      const derivative = polynomial(root).derivative,
        weight = 2 / ((1 - root * root) * derivative * derivative);
      points.push({ x: -root, w: weight }, { x: root, w: weight });
    }
    return freeze(points);
  }
  const centralRule = gaussRule(32),
    tailRule = gaussRule(64);
  function integrate(rule, a, b, fn) {
    const center = (a + b) / 2,
      half = (b - a) / 2;
    let sum = 0,
      compensation = 0;
    for (const node of rule) {
      const value = node.w * fn(center + half * node.x) - compensation,
        next = sum + value;
      compensation = next - sum - value;
      sum = next;
    }
    return half * sum;
  }
  const phi = z => Math.exp((-z * z) / 2) / Math.sqrt(2 * Math.PI);
  function normalTails(z) {
    if (z === 0) return { cdf: 0.5, survival: 0.5 };
    const a = Math.abs(z);
    // Central integration avoids a long interval. In the tail, t=a+s/(a+1)
    // factors out phi(a), keeps all terms positive, and avoids 1-CDF cancellation.
    const tail =
      a <= 3
        ? 0.5 - integrate(centralRule, 0, a, phi)
        : (phi(a) / (a + 1)) *
          integrate(tailRule, 0, 48, s =>
            Math.exp((-a * s) / (a + 1) - (s * s) / (2 * (a + 1) * (a + 1)))
          );
    return z < 0 ? { cdf: tail, survival: 1 - tail } : { cdf: 1 - tail, survival: tail };
  }
  const before = Object.freeze([10, 12, 14, 16, 18, 20]),
    baseDifference = Object.freeze([-2, -1, 0, 1, 2, 3]);
  function signs(p) {
    return before.map((v, i) => {
      const difference = (p.pattern === 'matched' ? 0 : baseDifference[i]) + p.shift;
      return {
        index: i + 1,
        before: v,
        after: v + difference,
        difference,
        sign: Math.sign(difference)
      };
    });
  }
  function binomialRow(n) {
    let row = [1];
    for (let i = 1; i <= n; i++) {
      const next = [1];
      for (let j = 1; j < i; j++) next.push(row[j - 1] + row[j]);
      next.push(1);
      row = next;
    }
    return row;
  }
  function evaluate(id, input) {
    const checked = validateParams(id, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (id === 'normal-distribution') {
      const z = (p.threshold - p.mean) / p.sigma,
        tails = normalTails(z),
        density = phi(z) / p.sigma;
      if (p.threshold !== p.mean && z === 0)
        return {
          ...checked,
          valid: false,
          status: 'numeric_precision',
          output: null,
          errors: [
            {
              field: 'threshold',
              message:
                'A nonzero standardized distance underflowed. Choose a larger representable difference.'
            }
          ],
          unit: get(id).unit
        };
      return {
        ...checked,
        status: 'valid',
        output: tails.cdf,
        z,
        density,
        cumulative: tails.cdf,
        survival: tails.survival,
        standardDensity: phi(z),
        windowMass:
          normalTails((10 - p.mean) / p.sigma).cdf - normalTails((-10 - p.mean) / p.sigma).cdf,
        unit: get(id).unit
      };
    }
    if (id === 'exponential-distribution') {
      const exponent = p.rate * p.time,
        survival = Math.exp(-exponent),
        cumulative = -Math.expm1(-exponent);
      if (p.time > 0 && exponent === 0)
        return {
          ...checked,
          valid: false,
          status: 'numeric_precision',
          output: null,
          errors: [
            {
              field: 'time',
              message:
                'A positive rate-times-wait product underflowed. Choose a larger representable waiting time.'
            }
          ],
          unit: get(id).unit
        };
      return {
        ...checked,
        status: 'valid',
        output: cumulative,
        cumulative,
        survival,
        exponent,
        density: p.rate * survival,
        meanWait: 1 / p.rate,
        waitingLaw: 'Exponential waiting-time law with rate ' + p.rate + ' per min',
        windowMass: -Math.expm1(-8 * p.rate),
        unit: get(id).unit
      };
    }
    const pairs = signs(p),
      positive = pairs.filter(v => v.sign > 0).length,
      negative = pairs.filter(v => v.sign < 0).length,
      ties = 6 - positive - negative,
      n = positive + negative;
    if (pairs.some(pair => pair.difference !== 0 && pair.after === pair.before))
      return {
        ...checked,
        valid: false,
        status: 'numeric_precision',
        output: null,
        pairs,
        positive,
        negative,
        ties,
        n,
        errors: [
          {
            field: 'shift',
            message:
              'A nonzero change is too small to appear in its represented after-reading. Choose a larger representable shift.'
          }
        ],
        unit: get(id).unit
      };
    if (!n)
      return {
        ...checked,
        valid: false,
        status: 'no_nonzero_pairs',
        output: null,
        pairs,
        positive,
        negative,
        ties,
        n,
        denominator: 1,
        tailWays: 0,
        masses: [],
        errors: [
          {
            field: 'shift',
            message: 'Every pair is tied. No nonzero signs remain for this conditional test.'
          }
        ],
        unit: get(id).unit
      };
    const row = binomialRow(n),
      denominator = 2 ** n,
      tailWays = row.slice(positive).reduce((sum, v) => sum + v, 0),
      masses = row.map((count, k) => ({
        k,
        count,
        mass: count / denominator,
        selected: k >= positive
      }));
    return {
      ...checked,
      status: 'valid',
      output: tailWays / denominator,
      pairs,
      positive,
      negative,
      ties,
      n,
      denominator,
      tailWays,
      masses,
      unit: get(id).unit
    };
  }
  function curveValue(id, p, value) {
    if (id === 'normal-distribution' || id === 'exponential-distribution') {
      const checked = validateParams(id, { ...p, [get(id).axis]: value });
      if (!checked.valid) return null;
      const q = checked.parameters;
      if (
        (id === 'normal-distribution' &&
          q.threshold !== q.mean &&
          (q.threshold - q.mean) / q.sigma === 0) ||
        (id === 'exponential-distribution' && q.time > 0 && q.rate * q.time === 0)
      )
        return null;
      return id === 'normal-distribution'
        ? normalTails((q.threshold - q.mean) / q.sigma).cdf
        : -Math.expm1(-q.rate * q.time);
    }
    const r = evaluate(id, { ...p, [get(id).axis]: value });
    return r.valid ? r.output : null;
  }
  function canInterpolate(id, a, b) {
    if (!evaluate(id, a).valid || !evaluate(id, b).valid) return false;
    return (
      id !== 'sign-test' ||
      (a.pattern === b.pattern && signs(a).every((pair, i) => pair.sign === signs(b)[i].sign))
    );
  }
  function specs(id) {
    const d = get(id);
    return {
      title: d.title,
      axis: d.axis,
      expression: d.expression,
      unit: d.unit,
      setting: d.limits,
      limits: d.limits,
      primaryLabel:
        id === 'sign-test' ? 'One-sided sign-tail probability' : 'Cumulative probability',
      views: ['geometry', 'graph'],
      rendererId: id + '-visual-model',
      sweeps: controls(id).filter(c => c.type !== 'select'),
      canInterpolate: (a, b) => canInterpolate(id, a, b),
      readout: (p, r) => ({
        expression: d.expression,
        stats: r.valid
          ? [
              {
                label: id === 'sign-test' ? 'ONE-SIDED P-VALUE' : 'CUMULATIVE PROBABILITY',
                value: r.output,
                note: id === 'sign-test' ? 'Conditional fair-sign null' : 'Area, not density height'
              },
              ...(id === 'normal-distribution'
                ? [
                    {
                      label: 'STANDARDIZED THRESHOLD',
                      value: r.z,
                      note: 'Standard deviations from the mean'
                    },
                    {
                      label: 'DENSITY AT THRESHOLD',
                      value: r.density,
                      note: 'Per millimetre; not point probability'
                    }
                  ]
                : id === 'exponential-distribution'
                  ? [
                      { label: 'STILL WAITING', value: r.survival, note: 'Survival probability' },
                      { label: 'MEAN WAIT', value: r.meanWait, note: 'Minutes' }
                    ]
                  : [
                      {
                        label: 'POSITIVE / NONZERO',
                        value: r.positive + ' / ' + r.n,
                        note: r.ties + ' exact ties omitted'
                      },
                      {
                        label: 'SELECTED / ALL SIGNS',
                        value: r.tailWays + ' / ' + r.denominator,
                        note: 'Equally likely null sign patterns'
                      }
                    ])
            ]
          : [],
        insight: r.valid ? d.cue : r.errors.map(e => e.message).join(' ')
      })
    };
  }
  const C = {
    bg: '#112631',
    grid: '#294352',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276',
    violet: '#b8a1ff'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5));
  const text = (x, y, v, c = C.muted, size = 15, extra = '') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" ${extra}>${esc(v)}</text>`;
  const line = (x, y, xx, yy, c = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${c}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, c, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${c}" ${extra}/>`;
  const group = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}" class="story-cue">${body}</g>`;
  const path = (points, c, extra = '') =>
    `<path d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5" ${extra}/>`;
  function frame(id, o, body, caption, height = 365) {
    const w = o.compact ? 360 : 760,
      scope = 'distribution-' + String(o.id || id).replace(/[^a-zA-Z0-9-]/g, '-');
    return `<figure class="visualization-frame distribution-extension"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${height}" role="group" aria-labelledby="${scope}-title ${scope}-desc"><title id="${scope}-title">${esc(get(id).title)}</title><desc id="${scope}-desc">${esc(caption)}</desc><rect width="${w}" height="${height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(id, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 35,
      right = w - 35,
      span = right - left;
    let body = text(
      left,
      32,
      id === 'normal-distribution'
        ? 'Normal density and probability'
        : id === 'exponential-distribution'
          ? 'Waiting time and probability'
          : 'From paired readings to signs',
      C.ink,
      o.compact ? 19 : 26
    );
    if (id === 'sign-test') {
      const xx = i => left + ((i + 0.5) * span) / 6,
        yy = v => 215 - (v - 3) * 5;
      body +=
        text(left, 68, 'Cyan: before · gold: after', C.muted, 15) + line(left, 215, right, 215);
      for (const pair of r.pairs) {
        const x = xx(pair.index - 1);
        body +=
          group(
            'pattern shift pairs',
            line(
              x - 5,
              yy(pair.before),
              x + 5,
              yy(pair.after),
              pair.sign > 0 ? C.mint : pair.sign < 0 ? C.violet : C.muted
            ) +
              circle(x - 5, yy(pair.before), 4, C.cyan) +
              circle(x + 5, yy(pair.after), 5, C.gold),
            'input'
          ) +
          group(
            'positive negative ties n',
            text(
              x,
              240,
              pair.sign > 0 ? '+' : pair.sign < 0 ? '−' : 'tie',
              pair.sign > 0 ? C.mint : pair.sign < 0 ? C.violet : C.muted,
              18,
              'text-anchor="middle"'
            ),
            'intermediate'
          ) +
          text(x, 264, String(pair.index), C.muted, 14, 'text-anchor="middle"');
      }
      body += text(left, 286, 'Pair number · vertical scale in mm', C.muted, 14);
      if (r.valid) {
        const bw = span / (r.n + 1);
        for (const mass of r.masses)
          body += group(
            'positive n masses tailWays denominator output',
            `<rect x="${n(left + mass.k * bw + 2)}" y="${n(344 - mass.mass * 95)}" width="${n(Math.max(2, bw - 4))}" height="${n(mass.mass * 95)}" fill="${mass.selected ? C.gold : C.grid}"/>`,
            'output'
          );
        body += text(left, 365, 'Gold: at least this many positive signs', C.gold, 14);
      } else body += text(left, 332, 'All pairs tied · no sign evidence', C.gold, 17);
      const pin = o.baseline && evaluate(id, o.baseline);
      if (pin?.pairs) {
        for (const pair of pin.pairs) {
          const x = xx(pair.index - 1);
          body += group(
            'shift pattern pairs',
            circle(x + 12, yy(pair.after), 4, 'none', `stroke="${C.violet}" stroke-width="2"`),
            'input'
          );
        }
        body += text(left, 86, 'Violet rings: pinned after-readings', C.violet, 13);
      }
      return frame(id, o, body, get(id).cue, 390);
    }
    const normal = id === 'normal-distribution',
      low = normal ? -10 : 0,
      high = normal ? 10 : 8,
      maxDensity = normal ? 1.7 : 2.1,
      x = v => left + ((v - low) / (high - low)) * span,
      y = v => 242 - (v / maxDensity) * 145,
      cut = normal ? p.threshold : p.time,
      pdf = v => (normal ? phi((v - p.mean) / p.sigma) / p.sigma : p.rate * Math.exp(-p.rate * v)),
      samples = normal ? 240 : 160,
      points = Array.from({ length: samples + 1 }, (_, i) => {
        const value = low + ((high - low) * i) / samples;
        return [x(value), y(pdf(value))];
      }),
      shade = Array.from({ length: 121 }, (_, i) => {
        const value = low + ((cut - low) * i) / 120;
        return [x(value), y(pdf(value))];
      });
    body +=
      line(left, 242, right, 242) +
      text(left, 72, normal ? 'Density · per mm' : 'Density · per min', C.cyan, 16) +
      text(left, 266, normal ? '−10 mm' : '0 min', C.muted, 14) +
      text(right, 266, normal ? '10 mm' : '8 min', C.muted, 14, 'text-anchor="end"');
    body +=
      group(
        normal
          ? 'threshold mean sigma density cumulative output'
          : 'time rate density cumulative output',
        `<path d="M${n(x(low))} 242 ${shade.map(([xx, yy]) => 'L' + n(xx) + ' ' + n(yy)).join(' ')} L${n(x(cut))} 242Z" fill="${C.gold}" fill-opacity=".35"/>`,
        'output'
      ) + group(normal ? 'mean sigma' : 'rate waitingLaw', path(points, C.cyan), 'reference');
    body += group(
      normal ? 'threshold z' : 'time exponent',
      line(x(cut), 88, x(cut), 245, C.gold) + circle(x(cut), y(pdf(cut)), 6, C.gold),
      'input'
    );
    if (normal)
      body +=
        group(
          'mean sigma',
          line(x(p.mean - p.sigma), 284, x(p.mean + p.sigma), 284, C.violet) +
            circle(x(p.mean), 284, 4, C.violet),
          'intermediate'
        ) +
        text(left, 307, 'Bracket: one standard deviation each side', C.muted, o.compact ? 13 : 15);
    else
      body +=
        group(
          'rate meanWait',
          line(x(r.meanWait), 96, x(r.meanWait), 242, C.violet, 'stroke-dasharray="4 4"'),
          'intermediate'
        ) + text(left, 294, 'Dashed: mean waiting time', C.violet, 15);
    body +=
      group(
        'cumulative survival output',
        `<rect x="${left}" y="325" width="${span}" height="14" rx="3" fill="${C.grid}"/><rect x="${left}" y="325" width="${n(span * r.output)}" height="14" rx="3" fill="${C.gold}"/>`,
        'output'
      ) + text(left, 358, 'Full cumulative chance · remaining tail', C.muted, o.compact ? 13 : 15);
    const baseline = o.baseline && evaluate(id, o.baseline);
    if (baseline?.valid) {
      const bp = baseline.parameters,
        bcut = normal ? bp.threshold : bp.time;
      body +=
        group(
          normal ? 'threshold' : 'time',
          line(x(bcut), 88, x(bcut), 242, C.violet, 'stroke-dasharray="5 4"'),
          'input'
        ) +
        text(
          right,
          72,
          normal ? 'Pinned threshold' : 'Pinned time',
          C.violet,
          14,
          'text-anchor="end"'
        ) +
        group(
          'cumulative output',
          line(
            left + span * baseline.output,
            319,
            left + span * baseline.output,
            345,
            C.violet,
            'data-role="pinned-probability"'
          ),
          'output'
        );
    }
    return frame(
      id,
      o,
      body,
      normal
        ? 'The shaded density is clipped to the fixed window; the strip uses the full CDF without renormalizing tails.'
        : get(id).cue,
      380
    );
  }
  function graph(id, p, r, o) {
    const d = get(id),
      field = controls(id).find(c => c.key === d.axis),
      discrete = id === 'sign-test';
    let values;
    if (discrete) {
      const boundaries = p.pattern === 'matched' ? [0] : baseDifference.map(v => -v);
      values = [field.min, ...boundaries.flatMap(v => [v - 1e-7, v, v + 1e-7]), field.max]
        .filter(v => v >= field.min && v <= field.max)
        .sort((a, b) => a - b);
    } else
      values = Array.from(
        { length: 121 },
        (_, i) => field.min + ((field.max - field.min) * i) / 120
      );
    const spec = {
      title: discrete
        ? 'A sign tail changes at sign boundaries'
        : 'Probability accumulated along a threshold',
      description: d.cue,
      x: {
        key: field.key,
        label: field.label,
        min: field.min,
        max: field.max,
        step: field.step,
        value: p[field.key]
      },
      y: { label: discrete ? 'One-sided p-value' : 'Probability', min: 0, max: 1 },
      series: [
        {
          id: 'cumulative',
          label: discrete ? 'Exact sign tail' : 'Cumulative probability',
          quantity:
            (id === 'exponential-distribution' ? 'waitingLaw ' : '') +
            field.key +
            ' output cumulative',
          color: C.gold,
          points: values.map(x => ({ x, y: curveValue(id, p, x) })),
          dots: discrete
        }
      ],
      current: r.valid
        ? [
            {
              x: p[field.key],
              y: r.output,
              quantity: field.key + ' output',
              label: 'Current probability',
              color: C.mint,
              draggable: o.sceneControl !== false && !discrete
            }
          ]
        : [],
      notes: [
        discrete
          ? 'Dots show each one-sided limit and exact tie state; they are not joined across a change in signs.'
          : 'Probability is on a fixed zero-to-one scale. Density height belongs to Geometry.'
      ]
    };
    if (discrete) {
      const boundaries = (p.pattern === 'matched' ? [0] : baseDifference.map(v => -v)).sort(
          (a, b) => a - b
        ),
        cuts = [field.min, ...boundaries, field.max],
        segments = [];
      for (let i = 1; i < cuts.length; i++) {
        const lo = cuts[i - 1],
          hi = cuts[i],
          middle = (lo + hi) / 2,
          y = curveValue(id, p, middle);
        segments.push(
          { x: lo + (i === 1 ? 0 : 1e-9), y },
          { x: hi - (i === cuts.length - 1 ? 0 : 1e-9), y },
          { x: hi, y: null }
        );
      }
      spec.series[0].points = segments;
      spec.series[0].dots = false;
      spec.series.push({
        id: 'exact-ties',
        label: 'Exact tied readings',
        quantity: 'shift positive n ties output',
        color: C.cyan,
        dots: true,
        points: boundaries.map(x => ({ x, y: curveValue(id, p, x) }))
      });
      spec.notes = [
        'Separate constant segments show intervals between zero-crossings; cyan dots show exact tie states. No diagonal invents intermediate sign counts.'
      ];
    }
    if (id === 'exponential-distribution')
      spec.series.push({
        id: 'survival',
        label: 'Still waiting',
        quantity: 'waitingLaw time rate survival',
        color: C.cyan,
        points: values.map(x => ({ x, y: evaluate(id, { ...p, time: x }).survival }))
      });
    const pin = o.baseline && evaluate(id, o.baseline);
    if (pin?.valid)
      spec.current.push({
        x: pin.parameters[field.key],
        y: pin.output,
        quantity: 'output',
        label: 'Pinned probability',
        color: C.violet
      });
    return Plot.render(spec, { ...o, ...(discrete ? { sceneControl: false } : {}) });
  }
  function render(id, input, o = {}) {
    if (!has(id)) return '';
    const r = evaluate(id, input);
    if (!r.valid && r.status !== 'no_nonzero_pairs')
      return frame(
        id,
        o,
        text(28, 60, 'Choose supported inputs', C.gold, 22),
        r.errors.map(e => e.message).join(' '),
        130
      );
    return o.view === 'graph' ? graph(id, r.parameters, r, o) : geometry(id, r.parameters, r, o);
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
    normalTails,
    canInterpolate
  });
});
