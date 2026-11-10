/* Number/measurement bridges. The host owns interaction, timing and readable values. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasNumberInsights = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
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
    'irrational-square-root': {
      title: 'A square diagonal and rational approximations',
      expression: 'd = s√2; h = s(p/q)',
      axis: 'side',
      unit: 'm',
      primaryLabel: 'Square diagonal d',
      ymax: 4.5,
      setting:
        'A maker braces a square display frame across its diagonal. Follow the side length s into the diagonal d, then compare a chosen finite rational approximation p/q with √2.',
      limits:
        'The square side is 0.5 to 3 metres. The eight choices are consecutive continued-fraction convergents 1/1 through 577/408. Each is rational; no finite decimal or finite picture proves irrationality. The parity argument in the card proves that √2 is not a ratio of integers. Drawing directions use equal metre scales.',
      controls: [
        field('side', 'Square side s', 1, 0.5, 3, 0.05, 'm'),
        field('refinement', 'Rational approximation k', 3, 1, 8, 1, 'choice', true)
      ]
    },
    'golden-ratio': {
      title: 'A rectangle that keeps its proportions',
      expression: 'φ = (1+√5)/2; L = φs; q = F(k+1)/F(k)',
      axis: 'shortSide',
      unit: 'm',
      primaryLabel: 'Golden rectangle long side L',
      ymax: 5,
      setting:
        'A designer cuts a square from a rectangular panel. In a golden rectangle the remaining rectangle, turned a quarter turn, has the original proportions. Compare its exact ratio with ratios of consecutive Fibonacci numbers.',
      limits:
        'The short side is 0.5 to 3 metres. The positive ratio greater than one solves φ²=φ+1. Fibonacci index k is a whole number from 2 to 12, with F(1)=F(2)=1. A finite Fibonacci ratio is an approximation, not the exact golden ratio. No claim about universal beauty, nature or optimal design follows.',
      controls: [
        field('shortSide', 'Short side s', 1, 0.5, 3, 0.05, 'm'),
        field('term', 'Fibonacci index k', 5, 2, 12, 1, 'index', true)
      ]
    },
    'circle-measurement': {
      title: 'A round table: edge and surface',
      expression: 'd = 2r; C = 2πr; A = πr²; C/d = π',
      axis: 'radius',
      unit: 'm²',
      primaryLabel: 'Disk area A',
      ymax: 52,
      setting:
        'A maker chooses the radius of a round table. Follow that one length into the edge band needed around it and the surface area to cover. The circumference-to-diameter ratio remains π as the table grows.',
      limits:
        'The radius is 0.25 to 4 metres in Euclidean geometry. A circle is the boundary; a disk includes the interior. Circumference is measured in metres and disk area in square metres. The disk has one fixed equal-metre scale; the separate edge bar has a fixed 0–26 metre scale. Printed readings approximate the analytic values.',
      controls: [field('radius', 'Table radius r', 2, 0.25, 4, 0.05, 'm')]
    },
    'floor-ceiling': {
      title: 'Full containers and containers needed',
      expression: 'x = v/c; f = ⌊x⌋; N = ⌈x⌉',
      axis: 'amount',
      unit: 'containers',
      primaryLabel: 'Containers needed N',
      ymax: 30,
      setting:
        'A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.',
      limits:
        'Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.',
      controls: [
        field('amount', 'Liquid volume v', 13.5, 0, 30, 0.25, 'L'),
        field('capacity', 'Container capacity c', 4, 1, 6, 0.25, 'L')
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown number insight.');
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
        (c.discrete && !Number.isSafeInteger(value))
      )
        errors.push({
          field: c.key,
          message: 'Use a finite input within the stated bounds; an index must be whole.'
        });
      else parameters[c.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      base = { ...checked, status: 'valid' };
    if (slug === 'irrational-square-root') {
      let numerator = 1,
        denominator = 1;
      for (let k = 1; k < p.refinement; k++)
        [numerator, denominator] = [numerator + 2 * denominator, numerator + denominator];
      const root = Math.SQRT2,
        approximation = numerator / denominator,
        diagonal = p.side * root,
        estimatedDiagonal = p.side * approximation;
      return {
        ...base,
        output: diagonal,
        diagonal,
        root,
        numerator,
        denominator,
        approximation,
        estimatedDiagonal,
        signedError: estimatedDiagonal - diagonal,
        error: Math.abs(estimatedDiagonal - diagonal),
        pellResidual: numerator ** 2 - 2 * denominator ** 2,
        sideSquared: p.side ** 2,
        diagonalSquared: 2 * p.side ** 2
      };
    }
    if (slug === 'golden-ratio') {
      let previous = 1,
        next = 1;
      for (let k = 2; k <= p.term; k++) [previous, next] = [next, previous + next];
      const phi = (1 + Math.sqrt(5)) / 2,
        approximation = next / previous,
        longSide = phi * p.shortSide,
        remainder = longSide - p.shortSide;
      return {
        ...base,
        output: longSide,
        longSide,
        phi,
        remainder,
        remainingRatio: p.shortSide / remainder,
        fibonacci: previous,
        following: next,
        approximation,
        estimatedLongSide: approximation * p.shortSide,
        ratioError: approximation - phi,
        area: longSide * p.shortSide
      };
    }
    if (slug === 'circle-measurement') {
      const diameter = 2 * p.radius,
        circumference = 2 * Math.PI * p.radius,
        area = Math.PI * p.radius ** 2;
      return {
        ...base,
        output: area,
        area,
        diameter,
        circumference,
        pi: Math.PI,
        ratio: circumference / diameter
      };
    }
    // Treat the user's shortest decimal input as exact at count thresholds.
    // Integer arithmetic avoids adding an arbitrary epsilon to floor or ceiling.
    const decimal = value => {
      const [mantissa, power = '0'] = String(value).split('e'),
        digits = mantissa.replace('.', ''),
        places = (mantissa.split('.')[1] || '').length - Number(power);
      return places >= 0
        ? [BigInt(digits), 10n ** BigInt(places)]
        : [BigInt(digits) * 10n ** BigInt(-places), 1n];
    };
    const [a, b] = decimal(p.amount),
      [c, d] = decimal(p.capacity),
      numerator = a * d,
      denominator = b * c,
      whole = numerator / denominator,
      rest = numerator % denominator,
      full = Number(whole),
      needed = Number(whole + (rest === 0n ? 0n : 1n)),
      quotient = p.amount / p.capacity;
    const ratioFloat = (top, bottom) => {
      if (top === 0n) return 0;
      const a = top.toString(),
        b = bottom.toString(),
        as = a.slice(0, 17),
        bs = b.slice(0, 17),
        mantissa = Number(as) / 10 ** (as.length - 1) / (Number(bs) / 10 ** (bs.length - 1));
      // Parsing one scientific decimal preserves subnormal values without an
      // overflowing integer conversion or an underflowing intermediate power.
      return Number(String(mantissa) + 'e' + String(a.length - b.length));
    };
    const remainder = ratioFloat(rest, b * d),
      spare = ratioFloat(BigInt(needed) * b * c - a * d, b * d);
    return { ...base, output: needed, needed, full, quotient, remainder, spare };
  }
  function canInterpolate(slug, a, b) {
    const first = validateParams(slug, a),
      second = validateParams(slug, b);
    return (
      first.valid &&
      second.valid &&
      get(slug)
        .controls.filter(c => c.discrete)
        .every(c => first.parameters[c.key] === second.parameters[c.key])
    );
  }
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
        stats: r.valid
          ? [
              { label: d.primaryLabel.toUpperCase(), value: r.output, note: d.unit },
              ...(slug === 'floor-ceiling'
                ? [
                    {
                      label: 'COMPLETELY FULL',
                      value: r.full,
                      note: 'containers; floor of the quotient'
                    },
                    {
                      label: 'LIQUID LEFT',
                      value: r.remainder,
                      note: 'litres after the full containers'
                    }
                  ]
                : slug === 'circle-measurement'
                  ? [
                      {
                        label: 'CIRCUMFERENCE',
                        value: r.circumference,
                        note: 'metres around the edge'
                      },
                      { label: 'DIAMETER', value: r.diameter, note: 'metres across the centre' }
                    ]
                  : [
                      {
                        label: 'RATIONAL APPROXIMATION',
                        value: r.approximation,
                        note:
                          slug === 'golden-ratio'
                            ? 'ratio of consecutive Fibonacci numbers'
                            : 'chosen convergent p/q'
                      },
                      {
                        label: 'EXACT REFERENCE',
                        value: slug === 'golden-ratio' ? r.phi : r.root,
                        note: 'displayed decimal is approximate'
                      }
                    ])
            ]
          : [],
        insight: d.limits
      })
    };
  }
  const curveValue = (slug, p, value) => {
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
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
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5)),
    f = v => String(Number(v.toPrecision(5))).replace(/-/g, '−');
  const text = (x, y, v, c = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, c = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${c}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const scope = v =>
    Array.from(String(v))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'number-insight-' + scope(o.id || slug),
      w = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${w} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${w}" height="440" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      m = w / 2,
      pin = o.baseline && evaluate(slug, o.baseline),
      small = o.compact ? 18 : 23;
    let body = '';
    if (slug === 'irrational-square-root') {
      const scale = 48,
        s = p.side * scale,
        left = m - s / 2,
        top = 101 + (144 - s) / 2;
      body =
        text(m, 29, 'The diagonal of a square', C.ink, o.compact ? 23 : 29) +
        mark('side', text(m, 61, 'Side s = ' + f(p.side) + ' m', C.cyan, small), 'input');
      body += mark(
        'side sideSquared',
        `<rect data-role="square" x="${n(left)}" y="${n(top)}" width="${n(s)}" height="${n(s)}" fill="${C.cyan}" fill-opacity=".1" stroke="${C.cyan}" stroke-width="2"/>`,
        'input'
      );
      body += mark(
        'side diagonal diagonalSquared root output',
        line(left, top + s, left + s, top, C.mint, 4),
        'output'
      );
      body += mark(
        'refinement numerator denominator approximation estimatedDiagonal',
        line(
          m - (r.estimatedDiagonal * scale) / 2,
          282,
          m + (r.estimatedDiagonal * scale) / 2,
          282,
          C.gold,
          4
        ) +
          text(
            m,
            313,
            'p/q = ' + r.numerator + '/' + r.denominator + ' ≈ ' + f(r.approximation),
            C.gold,
            small
          )
      );
      body += mark(
        'diagonal output',
        line(m - (r.diagonal * scale) / 2, 263, m + (r.diagonal * scale) / 2, 263, C.mint, 4) +
          text(m, 345, 'd = s√2 ≈ ' + f(r.diagonal) + ' m', C.mint, o.compact ? 21 : 27),
        'output'
      );
      body += mark(
        'signedError error',
        text(m, 379, 'Estimate error ≈ ' + f(r.signedError) + ' m', C.gold, o.compact ? 17 : 22)
      );
      body += mark(
        'pellResidual numerator denominator',
        text(m, 410, 'p² − 2q² = ' + r.pellResidual, C.muted, o.compact ? 18 : 22)
      );
      if (pin?.valid)
        body += mark(
          'output',
          line(
            m - (pin.diagonal * scale) / 2,
            251,
            m + (pin.diagonal * scale) / 2,
            251,
            C.violet,
            2,
            'stroke-dasharray="4 4"'
          ),
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'The square and both comparison lengths use the fixed 48 pixels per metre scale. Green is the true diagonal s√2; gold is the length estimated using the rational ratio p/q. Close lengths may overlap at drawing resolution; the signed error remains readable. The exact integer residual p²−2q² is ±1, never zero for the shown choices. The card gives a separate parity proof that the diagonal-to-side ratio is irrational.'
      );
    }
    if (slug === 'golden-ratio') {
      const scale = 49,
        left = m - (r.longSide * scale) / 2,
        top = 104 + (147 - p.shortSide * scale) / 2,
        h = p.shortSide * scale;
      body =
        text(m, 29, 'Remove a square. Keep the ratio.', C.ink, o.compact ? 21 : 28) +
        mark(
          'shortSide',
          text(m, 61, 'Short side s = ' + f(p.shortSide) + ' m', C.cyan, small),
          'input'
        );
      body += mark(
        'shortSide longSide output area',
        `<rect data-role="golden-rectangle" x="${n(left)}" y="${n(top)}" width="${n(r.longSide * scale)}" height="${n(h)}" fill="${C.mint}" fill-opacity=".12" stroke="${C.mint}" stroke-width="2"/>`,
        'output'
      );
      body += mark(
        'shortSide remainder',
        `<rect data-role="removed-square" x="${n(left)}" y="${n(top)}" width="${n(h)}" height="${n(h)}" fill="${C.cyan}" fill-opacity=".18" stroke="${C.cyan}" stroke-width="2"/>` +
          line(left + h, top, left + h, top + h, C.gold, 2)
      );
      body += mark(
        'longSide output phi remainingRatio',
        text(m, 286, 'L ≈ ' + f(r.longSide) + ' m', C.mint, o.compact ? 24 : 29) +
          text(m, 319, 'L/s = s/(L−s) = φ', C.mint, o.compact ? 20 : 25),
        'output'
      );
      body += mark(
        'term fibonacci following approximation estimatedLongSide ratioError',
        text(
          m,
          353,
          r.following + '/' + r.fibonacci + ' ≈ ' + f(r.approximation),
          C.gold,
          o.compact ? 23 : 28
        ) +
          line(
            m - (r.estimatedLongSide * scale) / 2,
            371,
            m + (r.estimatedLongSide * scale) / 2,
            371,
            C.gold,
            4
          ) +
          text(m, 407, 'Ratio error ≈ ' + f(r.ratioError), C.gold, o.compact ? 17 : 22)
      );
      if (pin?.valid)
        body += mark(
          'output',
          `<rect x="${n(m - (pin.longSide * scale) / 2)}" y="${n(104 + (147 - pin.parameters.shortSide * scale) / 2)}" width="${n(pin.longSide * scale)}" height="${n(pin.parameters.shortSide * scale)}" fill="none" stroke="${C.violet}" stroke-dasharray="4 4"/>`,
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'Rectangle lengths use one fixed 49 pixels per metre scale. The cyan square has the short side as both dimensions; the remaining rectangle has dimensions s and L−s. Its rotated aspect ratio equals L/s=φ. The gold line measures the finite Fibonacci candidate width on that same length scale. Printed φ and other derived decimals are approximations.'
      );
    }
    if (slug === 'circle-measurement') {
      const scale = 22,
        cx = m,
        cy = 172,
        rad = p.radius * scale,
        left = 32,
        span = w - 64;
      body =
        text(m, 29, 'One radius. Edge and surface.', C.ink, o.compact ? 22 : 29) +
        mark('radius', text(m, 61, 'r = ' + f(p.radius) + ' m', C.cyan, small), 'input');
      body += mark(
        'radius area output',
        `<circle data-role="table-disk" cx="${cx}" cy="${cy}" r="${n(rad)}" fill="${C.mint}" fill-opacity=".16" stroke="${C.mint}" stroke-width="3"/>`,
        'output'
      );
      body += mark('radius', line(cx, cy, cx + rad, cy, C.cyan, 3), 'input');
      body += mark(
        'diameter',
        line(cx - rad, cy + 4, cx + rad, cy + 4, C.muted, 1, 'stroke-dasharray="3 4"')
      );
      body += mark(
        'area output',
        text(m, 292, 'A ≈ ' + f(r.area) + ' m²', C.mint, o.compact ? 25 : 30),
        'output'
      );
      body += mark(
        'circumference',
        text(m, 327, 'Edge C ≈ ' + f(r.circumference) + ' m', C.gold, small) +
          `<rect data-role="circumference-bar" data-value="${r.circumference}" x="${left}" y="341" width="${n((span * r.circumference) / 26)}" height="18" fill="${C.gold}"/>`
      );
      body +=
        line(left, 362, left + span, 362) +
        text(left, 385, '0', C.muted, 14, 'start') +
        text(left + span, 385, '26 m', C.muted, 14, 'end');
      body += mark(
        'ratio pi diameter',
        text(m, 416, 'C/d = π ≈ ' + f(r.ratio), C.cyan, small),
        'reference'
      );
      if (pin?.valid)
        body += mark(
          'output',
          `<circle cx="${cx}" cy="${cy}" r="${n(pin.parameters.radius * scale)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="4 4"/>`,
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'The filled disk has equal horizontal and vertical scales, fixed at 22 pixels per metre. Radius and diameter measure length; disk area grows with radius squared. The separate edge-band bar uses a fixed 0–26 metre scale for circumference. It is not an area scale. Circle boundary and disk interior have different meanings.'
      );
    }
    const left = 30,
      span = w - 60,
      columns = 10,
      cell = span / columns,
      gap = 5,
      width = cell - gap,
      boxHeight = 48;
    body =
      text(m, 29, 'Store all the liquid', C.ink, o.compact ? 25 : 30) +
      mark(
        'amount capacity quotient',
        text(m, 62, f(p.amount) + ' L ÷ ' + f(p.capacity) + ' L ≈ ' + f(r.quotient), C.cyan, small),
        'input'
      );
    for (let i = 0; i < 30; i++) {
      const x = left + (i % columns) * cell,
        y = 103 + Math.floor(i / columns) * 66,
        fill = i < r.full ? 1 : i < r.needed ? r.remainder / p.capacity : 0;
      body += mark(
        'amount capacity full needed remainder output',
        `<rect data-role="container" data-container="${i + 1}" x="${n(x)}" y="${y}" width="${n(width)}" height="${boxHeight}" fill="none" stroke="${i < r.needed ? C.gold : C.grid}" stroke-width="1.5"/>` +
          (fill > 0
            ? `<rect data-role="liquid" data-fill="${fill}" x="${n(x + 2)}" y="${n(y + boxHeight - 2 - fill * (boxHeight - 4))}" width="${n(width - 4)}" height="${n(fill * (boxHeight - 4))}" fill="${i < r.full ? C.cyan : C.gold}"/>`
            : '')
      );
      if (i === r.full && r.needed > r.full)
        body += mark(
          'spare',
          `<rect data-role="spare-capacity" x="${n(x + 2)}" y="${y + 2}" width="${n(width - 4)}" height="${n((1 - fill) * (boxHeight - 4))}" fill="${C.violet}" fill-opacity=".16"><title>Unused capacity ${esc(f(r.spare))} litres</title></rect>`,
          'output'
        );
    }
    body += mark(
      'full quotient',
      text(m, 329, 'Full: ⌊x⌋ = ' + r.full, C.cyan, o.compact ? 24 : 29)
    );
    body += mark(
      'needed output',
      text(m, 365, 'Needed: ⌈x⌉ = ' + r.needed, C.mint, o.compact ? 26 : 31),
      'output'
    );
    body += mark(
      'remainder',
      text(m, 401, 'Liquid left ≈ ' + f(r.remainder) + ' L', C.gold, small)
    );
    body += mark(
      'spare',
      text(m, 428, 'Unused capacity ≈ ' + f(r.spare) + ' L', C.violet, o.compact ? 16 : 20),
      'output'
    );
    if (pin?.valid)
      body += mark(
        'output',
        text(m, 85, 'Pinned need: ' + pin.needed + ' containers', C.violet, 14),
        'reference'
      );
    return frame(
      slug,
      body,
      o,
      'Thirty identical container outlines form a fixed count grid. Cyan containers are completely full. At most one gold container is partly filled, with height proportional to the remaining fraction of capacity. Needed containers include that partial one; at an exact integer quotient floor and ceiling agree. Zero liquid needs zero containers. Outline size depicts a container symbol, not a second physical volume scale.'
    );
  }
  function stepGraph(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      m = w / 2,
      left = o.compact ? 49 : 72,
      right = w - (o.compact ? 22 : 40),
      top = 88,
      bottom = 338,
      px = x => left + (x / 30) * (right - left),
      py = y => bottom - (y / 30) * (bottom - top),
      pin = o.baseline && evaluate(slug, o.baseline);
    let body =
      text(m, 29, 'Container counts change at thresholds', C.ink, o.compact ? 18 : 27) +
      text(m, 61, 'N = ⌈v/c⌉ · capacity ' + f(p.capacity) + ' L', C.gold, o.compact ? 19 : 24);
    for (const v of [0, 10, 20, 30])
      body +=
        line(px(v), top, px(v), bottom) +
        text(px(v), 363, v, C.muted, 15) +
        line(left, py(v), right, py(v)) +
        text(left - 10, py(v) + 5, v, C.muted, 15, 'end');
    for (let count = 1; count <= 30; count++) {
      const a = (count - 1) * p.capacity,
        b = Math.min(30, count * p.capacity);
      if (a >= 30) break;
      body += mark(
        'amount capacity needed output',
        line(px(a), py(count), px(b), py(count), C.gold, 2) +
          `<circle data-role="open-step-end" cx="${n(px(a))}" cy="${n(py(count))}" r="3.5" fill="${C.bg}" stroke="${C.gold}" stroke-width="1.5"/><circle data-role="closed-step-end" cx="${n(px(b))}" cy="${n(py(count))}" r="3.5" fill="${C.gold}"/>`,
        'output'
      );
    }
    body += `<circle cx="${left}" cy="${bottom}" r="3.5" fill="${C.gold}"/>`;
    body += mark(
      'amount output needed',
      `<circle data-role="current-point" data-x="${p.amount}" data-y="${r.needed}" cx="${n(px(p.amount))}" cy="${n(py(r.needed))}" r="7" fill="${C.mint}" stroke="${C.bg}" stroke-width="2"/>`,
      'output'
    );
    if (pin?.valid)
      body += mark(
        'output',
        `<circle cx="${n(px(pin.parameters.amount))}" cy="${n(py(pin.needed))}" r="7" fill="none" stroke="${C.violet}" stroke-width="2"/>`,
        'reference'
      );
    body +=
      text(m, 397, 'Liquid volume v (L)', C.cyan, smallSize(o)) +
      text(m, 427, 'Hollow: excluded · filled: included', C.muted, o.compact ? 15 : 18);
    return frame(
      slug,
      body,
      o,
      'Capacity stays fixed. Each horizontal segment represents a constant number of containers; hollow left endpoints exclude the threshold and filled right endpoints include it. The separate point at zero is included. No diagonal line invents a fractional container count. Both axes remain fixed at zero to thirty.'
    );
  }
  const smallSize = o => (o.compact ? 20 : 25);
  function graph(slug, p, r, o) {
    if (slug === 'floor-ceiling') return stepGraph(slug, p, r, o);
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
        y: { min: 0, max: d.ymax, label: d.primaryLabel + ' (' + d.unit + ')' },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: c.key + ' output',
            color: C.gold,
            points: Array.from({ length: 101 }, (_, i) => {
              const x = c.min + ((c.max - c.min) * i) / 100;
              return { x, y: curveValue(slug, p, x) };
            })
          }
        ],
        current,
        notes: [
          slug === 'circle-measurement'
            ? 'Area follows the square of radius; circumference is a different quantity with length units.'
            : 'The approximation index stays fixed while the physical length changes. Exact symbolic constants have rounded decimal readings.'
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
        text(o.compact ? 180 : 380, 215, 'Choose supported inputs', C.gold, 22),
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
    canInterpolate,
    specs,
    curveValue,
    render
  });
});
