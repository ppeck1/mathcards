/* Bounded common multiples and proper-divisor sums. The shared host owns time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasNumberExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const copy = value =>
    Array.isArray(value)
      ? value.map(copy)
      : value && typeof value === 'object'
        ? Object.fromEntries(Object.entries(value).map(([key, item]) => [key, copy(item)]))
        : value;
  const field = (key, label, value, min, max, unit) => ({
    key,
    label,
    value,
    min,
    max,
    step: 1,
    discrete: true,
    unit
  });
  const definitions = freeze({
    'least-common-multiple': {
      title: 'Least common multiple',
      expression: 'L = lcm(a,b) = ab/gcd(a,b)',
      axis: 'first',
      unit: 'min',
      primaryLabel: 'First positive reunion L',
      setting:
        'Two maintenance bells ring together at time zero. Bell A repeats every a minutes and bell B every b minutes. Find their first positive simultaneous ring.',
      limits:
        'Intervals are whole minutes from 1 to 8. Both repeating schedules start at zero and continue without delays. The fixed timeline runs from 0 to 60 minutes. Zero is the shared start; the least common multiple is the first positive reunion. Cycle counts are dimensionless, and the product of the two intervals has squared-minute units.',
      controls: [
        field('first', 'Bell A interval a', 4, 1, 8, 'min'),
        field('second', 'Bell B interval b', 6, 1, 8, 'min')
      ]
    },
    'perfect-number': {
      title: 'Perfect numbers and proper divisors',
      expression: 's = ∑ d for positive d | n with d < n; Δ = s−n',
      axis: 'number',
      unit: 'items',
      primaryLabel: 'Proper-divisor sum s',
      setting:
        'A workshop exhibit begins with n tiles. Build one strip for each smaller positive tile count that divides n exactly, then compare all those strip tiles with the original collection.',
      limits:
        'The order is a positive integer from 1 to 60. Proper divisors exclude the number itself. One has no positive proper divisors and an empty sum of zero. Deficient, perfect and abundant classify the divisor sum below, equal to or above n; they are mathematical names, not judgments about a real order. The fixed 0 to 120 item scale is shared by both bars.',
      controls: [field('number', 'Order size n', 6, 1, 60, 'items')]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown number extension.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, ...control }) => copy(control));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared whole-number input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(control => control.key === key))
        errors.push({ field: key, message: 'Unknown input.' });
    for (const control of fields) {
      const value = Object.hasOwn(input, control.key) ? input[control.key] : control.value;
      if (!Number.isSafeInteger(value) || value < control.min || value > control.max)
        errors.push({
          field: control.key,
          message: 'Use a whole number within the displayed bounds.'
        });
      else parameters[control.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function gcd(a, b) {
    while (b !== 0) [a, b] = [b, a % b];
    return a;
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'least-common-multiple') {
      const commonDivisor = gcd(p.first, p.second),
        product = p.first * p.second,
        lcm = product / commonDivisor,
        times = interval =>
          Array.from({ length: Math.floor(60 / interval) + 1 }, (_, i) => i * interval);
      return {
        ...checked,
        status: 'valid',
        output: lcm,
        lcm,
        gcd: commonDivisor,
        product,
        firstCycles: lcm / p.first,
        secondCycles: lcm / p.second,
        firstTimes: times(p.first),
        secondTimes: times(p.second),
        sharedTimes: times(lcm)
      };
    }
    const divisors = [];
    for (let d = 1; d < p.number; d++) if (p.number % d === 0) divisors.push(d);
    const divisorSum = divisors.reduce((sum, d) => sum + d, 0),
      balance = divisorSum - p.number;
    return {
      ...checked,
      status: 'valid',
      output: divisorSum,
      divisors,
      divisorSum,
      balance,
      divisorCount: divisors.length,
      classification: balance < 0 ? 'deficient' : balance > 0 ? 'abundant' : 'perfect'
    };
  }
  const canInterpolate = (slug, a, b) => {
    const first = validateParams(slug, a),
      second = validateParams(slug, b);
    return (
      first.valid &&
      second.valid &&
      get(slug).controls.every(
        control => first.parameters[control.key] === second.parameters[control.key]
      )
    );
  };
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
          : slug === 'least-common-multiple'
            ? [
                {
                  label: 'FIRST POSITIVE REUNION',
                  value: r.output,
                  note: 'minutes after the shared start'
                },
                { label: 'A CYCLES', value: r.firstCycles, note: 'whole A intervals to reunion' },
                { label: 'B CYCLES', value: r.secondCycles, note: 'whole B intervals to reunion' }
              ]
            : [
                {
                  label: 'PROPER-DIVISOR SUM',
                  value: r.divisorSum,
                  note: 'items across the smaller exact pack sizes'
                },
                { label: 'BALANCE s−n', value: r.balance, note: r.classification },
                {
                  label: 'PROPER DIVISORS',
                  value: r.divisorCount,
                  note: 'positive divisors excluding n'
                }
              ],
        insight: !r.valid
          ? r.errors.map(e => e.message).join(' ')
          : slug === 'least-common-multiple'
            ? 'The shared start is zero. The first positive shared mark is L; each bell reaches it after a whole number of its own cycles.'
            : 'The divisor-sum bar uses the same item scale as the order bar. Equality gives a perfect number; an empty divisor list still has the valid sum zero.'
      })
    };
  }
  const curveValue = (slug, p, value) => {
    const result = evaluate(slug, { ...p, [get(slug).axis]: value });
    return result.valid ? result.output : null;
  };
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
  const n = value => Number(value.toFixed(5));
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, xx, yy, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const dot = (x, y, color, radius = 4, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}" ${extra}/>`;
  const scope = value =>
    Array.from(String(value))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'number-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="440" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      middle = w / 2,
      left = o.compact ? 36 : 70,
      right = w - left,
      span = right - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body = text(
      middle,
      30,
      slug === 'perfect-number' ? 'Compare the proper-divisor sum' : get(slug).title,
      C.ink,
      o.compact ? 22 : 27
    );
    if (slug === 'least-common-multiple') {
      const px = value => left + (value / 60) * span;
      body += mark(
        'first',
        text(middle, 61, 'A every ' + p.first + ' min', C.cyan, o.compact ? 18 : 22),
        'input'
      );
      body += mark(
        'second',
        text(middle, 87, 'B every ' + p.second + ' min', C.mint, o.compact ? 18 : 22),
        'input'
      );
      const rows = [
        { y: 132, times: r.firstTimes, keys: 'first firstTimes', color: C.cyan, label: 'A' },
        { y: 201, times: r.secondTimes, keys: 'second secondTimes', color: C.mint, label: 'B' },
        {
          y: 270,
          times: r.sharedTimes,
          keys: 'first second sharedTimes',
          color: C.gold,
          label: 'Both'
        }
      ];
      for (const row of rows) {
        body +=
          line(left, row.y, right, row.y) + text(left, row.y - 16, row.label, C.muted, 14, 'start');
        row.times.forEach(time => {
          const firstReunion = row.label === 'Both' && time === r.lcm,
            interval = row.label === 'A' ? p.first : row.label === 'B' ? p.second : r.lcm,
            spacing = (interval / 60) * span,
            eventRadius = Math.min(3, spacing * 0.36),
            earlyReunion = firstReunion && px(time) - left < 24;
          const keys =
            time === 0
              ? row.keys
                  .split(' ')
                  .filter(key => key !== 'first' && key !== 'second')
                  .join(' ')
              : row.keys;
          body += mark(
            keys + (firstReunion ? ' lcm output' : ''),
            dot(
              px(time),
              row.y,
              time === 0 ? C.muted : row.color,
              firstReunion && !earlyReunion ? 6 : eventRadius,
              `data-role="${time === 0 ? 'shared-start' : firstReunion ? 'first-positive-reunion' : 'schedule-event'}" data-time="${time}"`
            ) +
              (earlyReunion
                ? line(px(time), row.y + 9, px(time), row.y + 17, C.gold, 2) +
                  `<path d="M${n(px(time) - 2)} ${row.y + 10} L${n(px(time))} ${row.y + 5} L${n(px(time) + 2)} ${row.y + 10}" fill="none" stroke="${C.gold}" stroke-width="1.5"/>` +
                  text(px(time) + 7, row.y + 16, 'L', C.gold, 13, 'start')
                : firstReunion
                  ? `<circle cx="${n(px(time))}" cy="${row.y}" r="10" fill="none" stroke="${C.gold}" stroke-width="2"/>`
                  : ''),
            row.label === 'Both' ? (firstReunion ? 'output' : 'intermediate') : 'input'
          );
        });
      }
      for (const time of [0, 12, 24, 36, 48, 60])
        body +=
          line(px(time), 291, px(time), 297, C.muted, 1) + text(px(time), 317, time, C.muted, 14);
      body += text(middle, 338, 'Minutes · zero is the shared start', C.muted, o.compact ? 14 : 18);
      body += mark(
        'first firstCycles lcm output',
        text(
          middle,
          365,
          r.firstCycles + ' A cycles × ' + p.first + ' = ' + r.lcm + ' min',
          C.cyan,
          o.compact ? 18 : 22
        )
      );
      body += mark(
        'second secondCycles lcm output',
        text(
          middle,
          391,
          r.secondCycles + ' B cycles × ' + p.second + ' = ' + r.lcm + ' min',
          C.mint,
          o.compact ? 18 : 22
        )
      );
      body += mark(
        'gcd product',
        text(
          middle,
          421,
          'gcd = ' + r.gcd + ' min · ab = ' + r.product + ' min²',
          C.muted,
          o.compact ? 16 : 20
        )
      );
      if (pin?.valid)
        body += mark(
          'output',
          line(px(pin.lcm), 110, px(pin.lcm), 285, C.violet, 2, 'stroke-dasharray="4 4"') +
            `<title>Pinned first reunion ${pin.lcm} minutes</title>`,
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'All three tracks share a fixed 0–60 minute scale. Muted zero marks the common start; gold marks the first positive reunion with a ring, or a separate arrow when it is close to zero. A and B marks occur at their own interval multiples, and the third track contains exactly their shared times. The cycle equations count complete intervals. A violet dashed line, when present, preserves the pinned reunion.'
      );
    }
    const px = value => left + (value / 120) * span,
      colors = [C.cyan, C.mint, C.gold, C.violet];
    body += mark(
      'number',
      text(middle, 63, 'Order n = ' + p.number + ' items', C.cyan, o.compact ? 20 : 24),
      'input'
    );
    body += mark(
      'divisors divisorCount number',
      text(
        middle,
        96,
        r.divisorCount + ' proper divisor' + (r.divisorCount === 1 ? '' : 's') + ' · n is excluded',
        C.muted,
        o.compact ? 15 : 19
      )
    );
    const chunks = r.divisors.length
      ? [r.divisors.slice(0, 8), r.divisors.slice(8)].filter(row => row.length)
      : [];
    body += mark(
      'divisors number',
      chunks.length
        ? chunks
            .map((row, i) =>
              text(
                middle,
                123 + 23 * i,
                (i === 0 ? 'D = { ' : '') + row.join(', ') + (i === chunks.length - 1 ? ' }' : ','),
                C.mint,
                o.compact ? 16 : 20
              )
            )
            .join('')
        : text(middle, 123, 'D = ∅ · empty sum = 0', C.mint, o.compact ? 18 : 22)
    );
    body += mark(
      'divisorSum output',
      text(left, 178, 'Sum s = ' + r.divisorSum + ' items', C.gold, o.compact ? 20 : 25, 'start'),
      'output'
    );
    body += `<rect x="${left}" y="192" width="${span}" height="30" rx="3" fill="${C.grid}" fill-opacity=".3"/>`;
    let begin = 0;
    for (let i = 0; i < r.divisors.length; i++) {
      const divisor = r.divisors[i],
        width = (divisor / 120) * span;
      body += mark(
        'number divisors divisorSum output',
        `<rect data-role="divisor-contribution" data-divisor="${divisor}" data-value="${divisor}" x="${n(px(begin))}" y="192" width="${n(width)}" height="30" fill="${colors[i % colors.length]}" stroke="${C.bg}" stroke-width=".5"/>` +
          (width >= 25 ? text(px(begin) + width / 2, 213, divisor, C.bg, 14) : '')
      );
      begin += divisor;
    }
    body += mark(
      'number',
      text(left, 254, 'Order n = ' + p.number + ' items', C.cyan, o.compact ? 20 : 25, 'start') +
        `<rect data-role="order-bar" data-value="${p.number}" x="${left}" y="267" width="${n((p.number / 120) * span)}" height="30" fill="${C.cyan}"/>`,
      'input'
    );
    for (const value of [0, 30, 60, 90, 120])
      body +=
        line(px(value), 309, px(value), 315, C.muted, 1) + text(px(value), 337, value, C.muted, 14);
    body += mark(
      'balance divisorSum number',
      text(
        middle,
        370,
        's − n = ' + r.divisorSum + ' − ' + p.number + ' = ' + String(r.balance).replace('-', '−'),
        C.mint,
        o.compact ? 21 : 26
      )
    );
    body += mark(
      'classification balance',
      text(
        middle,
        407,
        r.classification[0].toUpperCase() + r.classification.slice(1),
        C.gold,
        o.compact ? 26 : 31
      ),
      'output'
    );
    if (pin?.valid)
      body += mark(
        'output',
        line(
          px(pin.divisorSum),
          185,
          px(pin.divisorSum),
          229,
          C.violet,
          2,
          'stroke-dasharray="4 4"'
        ) + `<title>Pinned divisor sum ${pin.divisorSum} items</title>`,
        'reference'
      );
    return frame(
      slug,
      body,
      o,
      'Both bars use the fixed 0–120 item scale. Each colored segment has width proportional to one positive proper divisor; their widths add to the exact divisor sum. The lower bar shows the original order on the same scale. One has an empty list, a zero-length sum and the valid classification deficient. A violet dashed line, when present, shows the pinned sum.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls[0],
      pin = o.baseline && evaluate(slug, o.baseline),
      current = [
        {
          x: p[c.key],
          y: r.output,
          label: d.primaryLabel,
          quantity: c.key + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
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
        x: { ...c, value: p[c.key] },
        y: {
          min: 0,
          max: slug === 'least-common-multiple' ? 60 : 120,
          label: d.primaryLabel + ' (' + d.unit + ')'
        },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: c.key + ' output',
            color: C.gold,
            dots: true,
            points: Array.from({ length: c.max - c.min + 1 }, (_, i) => ({
              x: c.min + i,
              y: curveValue(slug, p, c.min + i)
            }))
          }
        ],
        current,
        notes: [
          'Only whole-number input choices are defined. Separate dots preserve the discrete arithmetic; no line invents values between them.'
        ]
      },
      o
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(
          o.compact ? 180 : 380,
          207,
          'Choose supported whole numbers',
          C.gold,
          o.compact ? 20 : 26
        ),
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
    canInterpolate
  });
});
