/* Dimensionless neural-computation bridges. The host owns time, controls and pacing. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasNeuralBridges = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const field = (key, label, value, min, max) => ({
    key,
    label,
    value,
    min,
    max,
    step: 0.025,
    unit: 'dimensionless'
  });
  const definitions = freeze({
    'neural-summation': {
      title: 'Excitation and inhibition: a signed sum',
      expression: 'E = 2e; I = i; y = E − I',
      axis: 'excitation',
      unit: 'dimensionless',
      primaryLabel: 'Net drive y',
      min: -1,
      max: 2,
      setting:
        'A workshop robot demonstrator combines an approach signal e with a braking signal i. Its artificial unit gives the approach channel a gain of 2 and the braking channel a gain of 1. Follow both signed contributions into one net drive.',
      limits:
        'Both input channels range from zero to one and have no physical units. The gains are fixed at a=2 and b=1. This is a static linear artificial unit with zero bias and no activation function, learning, noise, time integration or firing model. A negative net drive is a signed model result, not a negative firing rate or a measured membrane voltage. The workshop robot is an original teaching construction, not a control or safety specification.',
      controls: [
        field('excitation', 'Approach signal e', 0.6, 0, 1),
        field('inhibition', 'Braking signal i', 0.4, 0, 1)
      ]
    },
    'receptive-field': {
      title: 'A receptive field: center versus surround',
      expression: 'S = gs; r = c − S = w · x',
      axis: 'center',
      unit: 'dimensionless',
      primaryLabel: 'Filter response r',
      min: -2,
      max: 1,
      setting:
        'A vision workshop displays five gray tiles. The middle tile has setting c and its four neighbors share setting s. A center-surround filter gives the middle a weight of one and each neighbor a weight of −g/4. Follow the displayed tiles into their five signed products and one contrast response.',
      limits:
        'Center and surrounding gray settings range from zero to one, and surround gain g ranges from zero to two. The five spatial sites are fixed; all four neighbors have the same setting. Gray shade represents a dimensionless display setting rather than calibrated radiance or perceived brightness. This is one static linear filter, not an experimentally fitted receptive field, a firing rate, a complete image-processing system or a biological validation. There is no threshold, nonlinear activation, noise, spike history or adaptation. At g=1 every uniform gray level cancels. At another gain, nonzero uniform levels do not cancel; an all-black input remains zero for every gain.',
      controls: [
        field('center', 'Center gray setting c', 0.8, 0, 1),
        field('surround', 'Surround gray setting s', 0.3, 0, 1),
        field('gain', 'Total surround gain g', 1, 0, 2)
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown neural bridge.');
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
        errors: [{ field: 'parameters', message: 'Use the declared signal input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const value = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (typeof value !== 'number' || !Number.isFinite(value) || value < c.min || value > c.max)
        errors.push({
          field: c.key,
          message: 'Use a finite number within this control’s stated range.'
        });
      else parameters[c.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'neural-summation') {
      const gainExcitation = 2,
        gainInhibition = 1,
        excitatoryDrive = gainExcitation * p.excitation,
        inhibitoryDrive = gainInhibition * p.inhibition;
      const signedInhibition = -inhibitoryDrive,
        netDrive = excitatoryDrive + signedInhibition;
      return {
        ...checked,
        status: 'valid',
        output: netDrive,
        netDrive,
        gainExcitation,
        gainInhibition,
        excitatoryDrive,
        inhibitoryDrive,
        signedInhibition,
        balanceExcitation: p.inhibition / gainExcitation
      };
    }
    const pixels = [p.surround, p.surround, p.center, p.surround, p.surround],
      weights = [-p.gain / 4, -p.gain / 4, 1, -p.gain / 4, -p.gain / 4];
    const contributions = pixels.map((x, j) => weights[j] * x),
      surroundEach = (-p.gain * p.surround) / 4,
      surroundTotal = p.gain * p.surround;
    const response = p.center - surroundTotal;
    return {
      ...checked,
      status: 'valid',
      output: response,
      response,
      pixels,
      weights,
      contributions,
      centerContribution: p.center,
      surroundEach,
      surroundTotal,
      weightSum: 1 - p.gain,
      siteCount: 5
    };
  }
  const canInterpolate = (slug, a, b) =>
    validateParams(slug, a).valid && validateParams(slug, b).valid;
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
          : [
              {
                label: d.primaryLabel.toUpperCase(),
                value: r.output,
                note: 'signed dimensionless result'
              },
              slug === 'neural-summation'
                ? {
                    label: 'EXCITATORY DRIVE E',
                    value: r.excitatoryDrive,
                    note: 'twice the approach signal'
                  }
                : {
                    label: 'TOTAL SURROUND S',
                    value: r.surroundTotal,
                    note: 'sum of four inhibitory magnitudes'
                  },
              slug === 'neural-summation'
                ? {
                    label: 'INHIBITORY DRIVE I',
                    value: r.inhibitoryDrive,
                    note: 'subtracted from the excitatory drive'
                  }
                : { label: 'WEIGHT SUM', value: r.weightSum, note: 'zero precisely when g is one' }
            ],
        insight: !r.valid
          ? r.errors.map(e => e.message).join(' ')
          : slug === 'neural-summation'
            ? 'Equal raw inputs need not cancel: the approach gain is larger. Balance requires i = 2e, not i = e.'
            : 'At g = 1 the four surrounding weights add to −1, so a uniform panel cancels. With a different gain, a uniform panel can have a nonzero response.'
      })
    };
  }
  const curveValue = (slug, p, value) => {
    if (!has(slug)) return null;
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
  };
  const C = {
    ink: '#eef8f4',
    muted: '#a0b5bc',
    grid: '#294352',
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
  const n = v => Number(v.toFixed(5)),
    f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, xx, yy, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const bar = (x, y, width, height, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0, width))}" height="${n(height)}" fill="${color}" ${extra}/>`;
  function frame(slug, body, o, caption) {
    const w = o.compact ? 360 : 760,
      id =
        'neural-' +
        Array.from(String(o.id || slug))
          .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${w} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${w}" height="440" rx="18" fill="#111e2b"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      mid = w / 2,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'neural-summation') {
      const left = o.compact ? 112 : 210,
        right = w - 28,
        scale = (right - left) / 3,
        zero = left + scale;
      body =
        text(mid, 30, 'Two channels, one signed drive', C.ink, o.compact ? 20 : 27) +
        mark(
          'excitation inhibition',
          text(mid, 61, 'e = ' + f(p.excitation) + ' · i = ' + f(p.inhibition), C.cyan, 20),
          'input'
        );
      body += mark(
        'gainExcitation gainInhibition',
        text(mid, 86, 'Fixed gains: a = 2 · b = 1', C.muted, 15),
        'reference'
      );
      body += line(zero, 105, zero, 362, C.muted, 1.5);
      const rows = [
        [
          140,
          'Weighted E',
          r.excitatoryDrive,
          'excitation gainExcitation excitatoryDrive',
          C.cyan,
          'intermediate'
        ],
        [
          218,
          'Signed −I',
          r.signedInhibition,
          'inhibition gainInhibition inhibitoryDrive signedInhibition',
          C.gold,
          'intermediate'
        ],
        [312, 'Net y', r.output, 'output netDrive', C.mint, 'output']
      ];
      for (const [y, label, value, keys, color, role] of rows)
        body += mark(
          keys,
          text(22, y + 15, label, color, o.compact ? 14 : 20, 'start') +
            bar(
              zero + Math.min(0, value) * scale,
              y,
              Math.abs(value) * scale,
              24,
              color,
              `data-role="${role === 'output' ? 'net-drive' : 'signed-contribution'}" data-value="${value}" data-scale="${scale}"`
            ) +
            text(right, y - 12, '≈ ' + f(value), color, o.compact ? 18 : 22, 'end'),
          role
        );
      if (pin?.valid)
        body += mark(
          'output',
          `<rect data-role="pinned-drive" x="${n(zero + Math.min(0, pin.output) * scale)}" y="307" width="${n(Math.abs(pin.output) * scale)}" height="34" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"/>`,
          'reference'
        );
      for (const value of [-1, 0, 1, 2])
        body +=
          line(zero + value * scale, 365, zero + value * scale, 371, C.muted, 1) +
          text(zero + value * scale, 391, f(value), C.muted, 13);
      body += text(
        mid,
        420,
        'Same fixed scale for every contribution',
        C.muted,
        o.compact ? 15 : 18
      );
      return frame(
        slug,
        body,
        o,
        'One gain stretches the adding channel. The other gives a negative contribution; their signed lengths combine into the net drive.'
      );
    }
    const left = o.compact ? 30 : 135,
      span = o.compact ? 300 : 490,
      gap = o.compact ? 10 : 25,
      cell = (span - 4 * gap) / 5,
      centers = r.pixels.map((_, j) => left + j * (cell + gap) + cell / 2),
      baseline = 260,
      productScale = 45;
    body =
      text(mid, 30, 'Five sites, one contrast response', C.ink, o.compact ? 20 : 27) +
      mark(
        'center surround gain',
        text(
          mid,
          61,
          'c = ' + f(p.center) + ' · s = ' + f(p.surround) + ' · g = ' + f(p.gain),
          C.cyan,
          o.compact ? 17 : 22
        ),
        'input'
      );
    r.pixels.forEach((value, j) => {
      const shade = Math.round(value * 255),
        color = j === 2 ? C.cyan : C.gold,
        x = centers[j] - cell / 2;
      body += mark(
        'pixels ' + (j === 2 ? 'center' : 'surround'),
        text(centers[j], 86, j + 1, C.muted, 13) +
          `<rect data-role="stimulus-site" data-site="${j + 1}" data-value="${value}" x="${n(x)}" y="96" width="${n(cell)}" height="52" rx="4" fill="rgb(${shade},${shade},${shade})" stroke="${color}" stroke-width="2.5"/>`,
        'input'
      );
      body += mark(
        j === 2 ? 'weights' : 'weights gain',
        text(centers[j], 195, f(r.weights[j]), color, o.compact ? 15 : 20)
      );
      const product = r.contributions[j];
      body += mark(
        'contributions ' +
          (j === 2 ? 'center centerContribution' : 'surround gain surroundTotal surroundEach'),
        bar(
          centers[j] - cell * 0.3,
          baseline - Math.max(0, product) * productScale,
          cell * 0.6,
          Math.abs(product) * productScale,
          color,
          `data-role="weighted-site" data-site="${j + 1}" data-value="${product}" data-scale="${productScale}"`
        ) + text(centers[j], 304, '≈ ' + f(product), color, o.compact ? 14 : 20)
      );
    });
    body +=
      line(left - 5, baseline, left + span + 5, baseline, C.muted, 1) +
      text(mid, 172, 'Weights', C.muted, 14);
    const netLeft = 30,
      netRight = w - 30,
      scale = (netRight - netLeft) / 3,
      zero = netLeft + 2 * scale;
    body += mark(
      'output response',
      text(mid, 337, 'Contrast r ≈ ' + f(r.output), C.mint, 23) +
        line(netLeft, 365, netRight, 365, C.grid, 2) +
        bar(
          zero + Math.min(0, r.output) * scale,
          349,
          Math.abs(r.output) * scale,
          22,
          C.mint,
          `data-role="filter-response" data-value="${r.output}" data-scale="${scale}"`
        ),
      'output'
    );
    body += line(zero, 344, zero, 376, C.muted, 1);
    if (pin?.valid)
      body += mark(
        'output',
        `<rect data-role="pinned-response" x="${n(zero + Math.min(0, pin.output) * scale)}" y="345" width="${n(Math.abs(pin.output) * scale)}" height="30" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"/>`,
        'reference'
      );
    for (const value of [-2, 0, 1]) body += text(zero + value * scale, 392, value, C.muted, 13);
    body += mark(
      'surroundTotal gain surround',
      text(mid, 420, 'Surround total S ≈ ' + f(r.surroundTotal), C.gold, 17)
    );
    return frame(
      slug,
      body,
      o,
      'The five gray settings become signed weighted bars. Their sum is center setting minus total surrounding drive, on one fixed response scale.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = controls(slug).find(x => x.key === d.axis),
      pin = o.baseline && evaluate(slug, o.baseline),
      current = [
        {
          x: p[d.axis],
          y: r.output,
          label: d.primaryLabel,
          quantity: d.axis + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
    if (pin?.valid)
      current.push({
        x: pin.parameters[d.axis],
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    return Plot.render(
      {
        title: d.title,
        description: d.setting,
        x: { ...c, value: p[d.axis] },
        y: { min: d.min, max: d.max, label: d.primaryLabel },
        series: [
          {
            id: 'response',
            label: d.primaryLabel,
            quantity: d.axis + ' output',
            color: C.cyan,
            points: Array.from({ length: 101 }, (_, j) => {
              const x = c.min + (j * (c.max - c.min)) / 100;
              return { x, y: curveValue(slug, p, x) };
            })
          }
        ],
        current,
        notes: [
          slug === 'neural-summation'
            ? 'The slope is the fixed approach gain 2; braking shifts the line downward.'
            : 'The center weight is one; changing surround or gain shifts the line downward.'
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
        text(o.compact ? 180 : 380, 210, 'Choose signals within their ranges', C.gold, 19),
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
    validateParams,
    evaluate,
    specs,
    curveValue,
    render,
    canInterpolate
  });
});
