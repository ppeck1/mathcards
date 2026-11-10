/* Bounded inverse/series models. The shared playground owns time and state. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory();
  if (node) module.exports = api;
  root.AtlasAnalysisExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  const field = (key, label, value, min, max, unit = 'cm', extra = {}) => ({
    key,
    label,
    value,
    min,
    max,
    step: 0.05,
    unit,
    ...extra
  });
  const definitions = freeze({
    'inverse-function': {
      title: 'Inverse functions and calibration',
      expression: 'f(x) = ax + b; f⁻¹(y) = (y − b)/a',
      axis: 'reading',
      primaryLabel: 'Recovered command x',
      unit: 'cm',
      setting:
        'A positioning stage reports y centimetres after receiving command x centimetres. Its declared affine calibration is y=ax+b. Undo the offset and gain to recover the command.',
      limits:
        'The affine rule has domain and range all real numbers when a is nonzero. The controls show readings from −8 to 8 cm, offsets from −3 to 3 cm and gain from −3 to 3 with |a| at least 0.25. Negative gain describes a reversed coordinate axis. Zero and near-zero gains are unsupported. Displayed inverse and round-trip values are floating-point approximations.',
      insight:
        'Undo the last operation first: subtract the offset, then divide by the nonzero gain. Swapping a point’s two coordinates places it on the inverse graph; inverse notation does not mean reciprocal.',
      controls: [
        field('reading', 'Observed position y', 5, -8, 8),
        field('gain', 'Calibration gain a', 2, -3, 3, 'dimensionless'),
        field('offset', 'Zero offset b', 1, -3, 3)
      ],
      canInterpolate: (a, b) => a.gain * b.gain > 0
    },
    'geometric-series': {
      title: 'Geometric series and partial sums',
      expression: 'Sₙ = ∑ₖ₌₀ⁿ⁻¹ arᵏ',
      axis: 'ratio',
      primaryLabel: 'Total signed displacement Sₙ',
      unit: 'cm',
      setting:
        'A positioning script issues an initial forward correction a cm. Each later correction is r times the previous signed correction. Add exactly n commands to find the total displacement.',
      limits:
        'The first correction is positive, from 0.25 to 4 cm. The ratio lies between −1.5 and 1.5 and n is a whole number from 1 to 12. Negative ratios reverse the correction direction. This is a declared sequence of signed commands, not a mechanical motion or distance-travelled model. The finite sum exists throughout these bounds, including r=1. With a nonzero first term, an infinite sum exists only for |r|<1. Nonzero term underflow is reported as a precision failure.',
      insight:
        'The bars are individual signed corrections; their sum is the endpoint, not total travel. A negative ratio alternates direction. At r=1 every command equals a, so the sum is na.',
      controls: [
        field('ratio', 'Correction ratio r', 0.5, -1.5, 1.5, 'dimensionless'),
        field('first', 'First correction a', 2, 0.25, 4),
        field('terms', 'Commands to add n', 6, 1, 12, 'commands', { step: 1, discrete: true })
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions)),
    has = s => typeof s === 'string' && Object.hasOwn(definitions, s);
  const get = s => {
    if (!has(s)) throw new RangeError('Unknown analysis extension.');
    return definitions[s];
  };
  const defaults = s => Object.fromEntries(get(s).controls.map(c => [c.key, c.value]));
  const controls = s => get(s).controls.map(({ value, ...c }) => ({ ...c }));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (
      !has(slug) ||
      !input ||
      typeof input !== 'object' ||
      Array.isArray(input) ||
      (Object.getPrototypeOf(input) !== null &&
        Object.getPrototypeOf(Object.getPrototypeOf(input)) !== null)
    )
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared numeric input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Reflect.ownKeys(input))
      if (!fields.some(c => c.key === key))
        errors.push({ field: String(key), message: 'Unknown input.' });
    for (const c of fields) {
      const descriptor = Object.getOwnPropertyDescriptor(input, c.key);
      if (descriptor && !Object.hasOwn(descriptor, 'value')) {
        errors.push({ field: c.key, message: 'Input accessors are unsupported.' });
        continue;
      }
      const v = descriptor ? descriptor.value : c.value;
      if (
        typeof v !== 'number' ||
        !Number.isFinite(v) ||
        v < c.min ||
        v > c.max ||
        (c.discrete && !Number.isInteger(v))
      )
        errors.push({
          field: c.key,
          message: 'Choose a finite value in the declared range; counts must be whole numbers.'
        });
      else parameters[c.key] = v === 0 ? 0 : v;
    }
    if (
      slug === 'inverse-function' &&
      Object.hasOwn(parameters, 'gain') &&
      Math.abs(parameters.gain) < 0.25
    )
      errors.push({
        field: 'gain',
        message: 'Use a nonzero calibration gain with magnitude at least 0.25.'
      });
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }
  const f = v =>
    v === null ? 'unavailable' : Number(v.toPrecision(5)).toString().replace(/-/g, '−');
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      precision = message => ({
        ...checked,
        valid: false,
        status: 'numeric_precision',
        output: null,
        errors: [{ field: 'precision', message }]
      });
    if (slug === 'inverse-function') {
      const adjusted = p.reading - p.offset,
        output = adjusted / p.gain;
      if (adjusted !== 0 && output === 0)
        return precision('A nonzero recovered command is too small to represent.');
      return {
        ...checked,
        status: 'valid',
        output: output === 0 ? 0 : output,
        adjusted,
        roundTrip: p.gain * output + p.offset,
        reading: p.reading,
        gain: p.gain,
        offset: p.offset,
        inversePoint: freeze([p.reading, output]),
        forwardPoint: freeze([output, p.reading])
      };
    }
    const contributions = [],
      partialSums = [];
    let term = p.first,
      sum = 0,
      compensation = 0;
    for (let k = 0; k < p.terms; k++) {
      contributions.push(term);
      const corrected = term - compensation,
        next = sum + corrected;
      compensation = next - sum - corrected;
      sum = next;
      partialSums.push(sum === 0 ? 0 : sum);
      if (k + 1 < p.terms) {
        const nextTerm = term * p.ratio;
        if (term !== 0 && p.ratio !== 0 && nextTerm === 0)
          return precision('A nonzero geometric term is too small to represent.');
        term = nextTerm === 0 ? 0 : nextTerm;
      }
    }
    const convergent = Math.abs(p.ratio) < 1,
      infiniteSum = convergent ? p.first / (1 - p.ratio) : null;
    return {
      ...checked,
      status: 'valid',
      output: sum === 0 ? 0 : sum,
      contributions: freeze(contributions),
      partialSums: freeze(partialSums),
      lastTerm: contributions.at(-1),
      convergent,
      infiniteSum,
      remaining: convergent ? infiniteSum - sum : null,
      limitLabel: convergent ? f(infiniteSum) + ' cm' : 'no finite sum',
      first: p.first,
      ratio: p.ratio,
      terms: p.terms
    };
  }
  const curveValue = (slug, p, x) => {
    const r = evaluate(slug, { ...p, [get(slug).axis]: x });
    return r.valid ? r.output : NaN;
  };
  function specs(slug) {
    const d = get(slug);
    return {
      ...d,
      controls: controls(slug),
      sweeps: d.controls.map(c => ({
        key: c.key,
        label: c.label,
        min: c.min,
        max: c.max,
        step: c.step
      })),
      readout: (p, r) =>
        !r.valid
          ? {
              expression: 'Choose supported inputs',
              stats: [],
              insight: r.errors.map(e => e.message).join(' ')
            }
          : slug === 'inverse-function'
            ? {
                expression: 'f⁻¹(y) ≈ ' + f(r.output) + ' cm',
                stats: [
                  {
                    label: 'After offset',
                    value: r.adjusted,
                    note: 'Observed position minus the zero offset, in cm.'
                  },
                  {
                    label: 'Forward check',
                    value: r.roundTrip,
                    note: 'Apply the original affine rule to the recovered command; numerical approximation.'
                  }
                ],
                insight: d.insight
              }
            : {
                expression: 'Sₙ ≈ ' + f(r.output) + ' cm',
                stats: [
                  {
                    label: 'Commands',
                    value: p.terms,
                    note: 'A whole number of signed corrections.'
                  },
                  {
                    label: 'Last correction',
                    value: r.lastTerm,
                    note: 'The final term in the finite sum, in cm.'
                  },
                  {
                    label: 'Infinite sum',
                    value: r.limitLabel,
                    note: r.convergent
                      ? 'The analytic limit under |r|<1.'
                      : 'No infinite-series sum for this nonzero first term at |r|≥1.'
                  }
                ],
                insight: d.insight
              }
    };
  }
  const C = {
    ink: '#eef8f4',
    muted: '#a0b5bc',
    grid: '#294352',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    violet: '#b8a1ff',
    mint: '#c6f276'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const q = v => Number(v.toFixed(5));
  const text = (x, y, t, color = C.ink, size = 20, anchor = 'start') =>
    `<text x="${q(x)}" y="${q(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(t)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${q(x)}" y1="${q(y)}" x2="${q(a)}" y2="${q(b)}" stroke="${color}" ${/(?:^|\s)stroke-width\s*=/.test(extra) ? '' : 'stroke-width="2" '}${extra}/>`;
  const mark = (key, body) => {
    const keys = key.split(/\s+/);
    const part = keys.includes('output')
      ? 'output'
      : keys.includes('contributions')
        ? 'input intermediate'
        : keys.some(k => ['adjusted', 'lastTerm'].includes(k))
          ? 'intermediate'
          : keys.some(k => ['reading', 'gain', 'offset', 'ratio', 'first', 'terms'].includes(k))
            ? 'input'
            : 'reference';
    return `<g class="story-cue" data-story-part="${part}" data-quantity="${esc(key)}">${body}</g>`;
  };
  const token = v =>
    'analysis-' +
    Array.from(String(v ?? 'scene'))
      .map(c => (/[A-Za-z0-9-]/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, description, height = 460) {
    const id = token(o.id || o.slot || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="group" aria-labelledby="${id}-title ${id}-description"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-description">${esc(description)}</desc><rect width="${width}" height="${height}" rx="18" fill="#111e2b"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;
  }
  const pinned = (slug, o) => {
    const r = o.baseline && evaluate(slug, o.baseline);
    return r?.valid ? r : null;
  };
  function inverseGeometry(p, r, o) {
    const pin = pinned('inverse-function', o),
      w = o.compact ? 360 : 760,
      cx = w / 2,
      extent = o.compact ? 136 : 270,
      range = Math.max(
        12,
        Math.abs(r.output),
        Math.abs(r.adjusted),
        pin ? Math.abs(pin.output) : 0,
        pin ? Math.abs(pin.adjusted) : 0
      ),
      scale = extent / range;
    let b = text(24, 34, 'Undo the calibration', C.ink, o.compact ? 25 : 28);
    const rows = [
      ['reading', 'Observed y', p.reading, C.cyan],
      ['adjusted offset', 'Subtract b', r.adjusted, C.violet],
      ['gain output', 'Divide by a', r.output, C.gold]
    ];
    rows.forEach(([key, label, value, color], i) => {
      const y = 108 + i * 108;
      b +=
        text(24, y - 28, label, color, 20) +
        text(w - 24, y - 28, f(value) + ' cm', color, 22, 'end');
      b += line(cx - extent, y, cx + extent, y, C.grid) + line(cx, y - 13, cx, y + 13, C.muted);
      if (pin) {
        const previous = [pin.reading, pin.adjusted, pin.output][i];
        b +=
          `<g data-baseline="true" data-quantity="${key}">` +
          line(
            cx,
            y + 11,
            cx + previous * scale,
            y + 11,
            C.violet,
            'stroke-width="3" stroke-dasharray="6 4"'
          ) +
          '</g>';
      }
      b += mark(
        key,
        line(cx, y, cx + value * scale, y, color, 'stroke-width="10"') +
          `<circle cx="${q(cx + value * scale)}" cy="${y}" r="7" fill="${color}"/>`
      );
    });
    b +=
      line(cx - extent, 375, cx + extent, 375, C.muted) +
      text(cx - extent, 397, '−' + f(range), C.muted, 16, 'middle') +
      text(cx, 397, '0', C.muted, 16, 'middle') +
      text(cx + extent, 397, f(range), C.muted, 16, 'middle');
    b += text(cx, 427, 'Shared length scale (cm)', C.muted, 16, 'middle');
    if (pin) b += text(cx, 443, 'Dashed: pinned inputs', C.violet, 16, 'middle');
    return frame(
      'inverse-function',
      b,
      o,
      'Read the three aligned signed lengths: observed position, position after removing the offset, and recovered command. One shared scale makes the gain’s effect visible.'
    );
  }
  function inverseGraph(p, r, o) {
    const pin = pinned('inverse-function', o),
      compact = !!o.compact,
      w = compact ? 360 : 760,
      cx = compact ? 180 : 280,
      cy = compact ? 208 : 236,
      extent = compact ? 140 : 174,
      range =
        Math.max(
          8,
          Math.abs(r.output),
          Math.abs(p.reading),
          pin ? Math.abs(pin.output) : 0,
          pin ? Math.abs(pin.reading) : 0
        ) * 1.15,
      s = extent / range,
      px = x => cx + x * s,
      py = y => cy - y * s,
      id = token(o.id || o.slot || 'inverse') + '-clip';
    let b =
      text(24, 32, 'Swap the coordinates', C.ink, compact ? 24 : 28) +
      `<defs><clipPath id="${id}"><rect x="${cx - extent}" y="${cy - extent}" width="${2 * extent}" height="${2 * extent}"/></clipPath></defs>`;
    b +=
      line(cx - extent, cy, cx + extent, cy, C.muted) +
      line(cx, cy - extent, cx, cy + extent, C.muted) +
      text(cx + extent, cy + 23, 'cm', C.muted, 16, 'end');
    b +=
      text(cx - extent, cy + extent + 20, '−' + f(range), C.muted, 16, 'middle') +
      text(cx + extent, cy + extent + 20, f(range), C.muted, 16, 'middle') +
      text(cx - extent - 8, cy - extent + 5, f(range), C.muted, 16, 'end');
    b +=
      `<g clip-path="url(#${id})">` +
      mark(
        'identity',
        line(px(-range), py(-range), px(range), py(range), C.grid, 'stroke-dasharray="6 5"')
      );
    b += mark(
      'gain offset',
      line(
        px(-range),
        py(-p.gain * range + p.offset),
        px(range),
        py(p.gain * range + p.offset),
        C.cyan,
        'stroke-width="3"'
      )
    );
    b += mark(
      'gain offset output',
      line(
        px(-range),
        py((-range - p.offset) / p.gain),
        px(range),
        py((range - p.offset) / p.gain),
        C.gold,
        'stroke-width="3"'
      )
    );
    if (pin)
      b +=
        `<g data-baseline="true" data-quantity="output">` +
        line(
          px(-range),
          py((-range - pin.offset) / pin.gain),
          px(range),
          py((range - pin.offset) / pin.gain),
          C.violet,
          'stroke-width="2" stroke-dasharray="7 5"'
        ) +
        `<circle cx="${q(px(pin.reading))}" cy="${q(py(pin.output))}" r="9" stroke="${C.violet}" stroke-width="2" fill="none"/></g>`;
    b +=
      mark(
        'reading output',
        line(
          px(r.output),
          py(p.reading),
          px(p.reading),
          py(r.output),
          C.violet,
          'stroke-dasharray="4 4"'
        ) +
          `<circle data-point="forward" data-x="${r.output}" data-y="${p.reading}" cx="${q(px(r.output))}" cy="${q(py(p.reading))}" r="7" fill="${C.cyan}"/><circle data-point="inverse" data-x="${p.reading}" data-y="${r.output}" cx="${q(px(p.reading))}" cy="${q(py(r.output))}" r="7" fill="${C.gold}"/>`
      ) + `</g>`;
    const y = compact ? 385 : 98,
      x = compact ? 24 : 490;
    b +=
      text(x, y, 'Forward (x, y)', C.cyan, 20) +
      text(x, y + 29, 'Inverse (y, x)', C.gold, 20) +
      text(x, y + 58, 'x ≈ ' + f(r.output) + ' cm', C.ink, 21);
    if (pin) b += text(x, y + 90, 'Dashed: pinned inverse', C.violet, 16);
    return frame(
      'inverse-function',
      b,
      o,
      'Equal scales on both axes make reflection across the identity diagonal literal. Cyan is the forward calibration; gold is its inverse. The marked ordered pairs exchange coordinates.',
      500
    );
  }
  function seriesGeometry(p, r, o) {
    const pin = pinned('geometric-series', o),
      w = o.compact ? 360 : 760,
      cx = w / 2,
      extent = o.compact ? 135 : 300,
      max = Math.max(
        4,
        4 * Math.abs(p.ratio) ** (p.terms - 1),
        pin ? 4 * Math.abs(pin.ratio) ** (pin.terms - 1) : 0
      ),
      s = extent / max,
      base = 110,
      spacing = 20;
    let b =
      text(24, 34, 'Add signed corrections', C.ink, o.compact ? 24 : 28) +
      mark('output', text(w - 24, 66, 'Sₙ ≈ ' + f(r.output) + ' cm', C.gold, 24, 'end'));
    b += line(cx, 82, cx, base + 11 * spacing + 13, C.muted);
    if (pin)
      pin.contributions.forEach((term, k) => {
        const y = base + k * spacing + 7;
        b +=
          `<g data-baseline="true" data-quantity="contributions">` +
          line(cx, y, cx + term * s, y, C.muted, 'stroke-width="3" stroke-dasharray="5 3"') +
          '</g>';
      });
    r.contributions.forEach((term, k) => {
      const y = base + k * spacing;
      b += mark(
        'ratio first terms contributions' + (k === p.terms - 1 ? ' lastTerm' : ''),
        line(cx, y, cx + term * s, y, term >= 0 ? C.cyan : C.violet, 'stroke-width="12"')
      );
      if (!o.compact || k === 0 || k === p.terms - 1)
        b += text(20, y + 5, String(k + 1), C.muted, 15);
    });
    b +=
      line(cx - extent, 365, cx + extent, 365, C.muted) +
      text(cx - extent, 390, '−' + f(max), C.muted, 16, 'middle') +
      text(cx, 390, '0', C.muted, 16, 'middle') +
      text(cx + extent, 390, f(max), C.muted, 16, 'middle');
    b += text(cx, 414, 'Signed correction length (cm)', C.muted, 17, 'middle');
    b += mark(
      'infiniteSum',
      text(
        24,
        446,
        'Infinite sum: ' + r.limitLabel,
        r.convergent ? C.mint : C.muted,
        o.compact ? 18 : 21
      )
    );
    return frame(
      'geometric-series',
      b,
      o,
      'Each bar’s signed length is one correction on the same scale. Cyan moves forward; violet moves backward. Thin dashed bars, when present, retain pinned commands on this scale. The total is net displacement. A finite sum remains valid when an infinite sum does not exist.'
    );
  }
  function seriesGraph(p, r, o) {
    const pin = pinned('geometric-series', o),
      w = o.compact ? 360 : 760,
      left = 90,
      right = w - 28,
      top = 90,
      bottom = 340,
      points = [0, ...r.partialSums],
      old = pin ? [0, ...pin.partialSums] : [],
      nMax = Math.max(p.terms, pin ? pin.terms : 0),
      reference = [
        ...r.partialSums.map(v => (v * 4) / p.first),
        ...(pin ? pin.partialSums.map(v => (v * 4) / pin.first) : [])
      ],
      low = Math.min(0, ...reference),
      high = Math.max(4, ...reference),
      span = Math.max(4, high - low),
      lo = low - 0.12 * span,
      hi = high + 0.12 * span,
      px = k => left + ((right - left) * k) / nMax,
      py = v => bottom - ((v - lo) / (hi - lo)) * (bottom - top);
    let b =
      text(24, 32, 'Follow the partial sums', C.ink, o.compact ? 24 : 28) +
      line(left, bottom, right, bottom, C.muted) +
      line(left, top, left, bottom, C.muted) +
      line(left, py(0), right, py(0), C.grid);
    b +=
      text(left - 10, top + 6, f(hi), C.muted, 16, 'end') +
      text(left - 10, bottom + 5, f(lo), C.muted, 16, 'end');
    if (pin) {
      b += '<g data-baseline="true" data-quantity="output partialSums">';
      for (let k = 0; k < old.length; k++) {
        if (k > 0)
          b += line(
            px(k - 1),
            py(old[k - 1]),
            px(k),
            py(old[k]),
            C.violet,
            'stroke-dasharray="5 4"'
          );
        b += `<circle cx="${q(px(k))}" cy="${q(py(old[k]))}" r="5" fill="none" stroke="${C.violet}"/>`;
      }
      b += '</g>';
    }
    for (let k = 0; k <= p.terms; k++) {
      if (k > 0)
        b += mark(
          'ratio first output partialSums',
          line(px(k - 1), py(points[k - 1]), px(k), py(points[k]), C.grid, 'stroke-dasharray="3 5"')
        );
      b += mark(
        'ratio first terms output partialSums',
        `<circle data-x="${k}" data-y="${points[k]}" cx="${q(px(k))}" cy="${q(py(points[k]))}" r="${k === p.terms ? 6 : 4}" fill="${k === p.terms ? C.gold : C.cyan}"/>`
      );
    }
    if (r.convergent && r.infiniteSum >= lo && r.infiniteSum <= hi)
      b += mark(
        'infiniteSum',
        line(left, py(r.infiniteSum), right, py(r.infiniteSum), C.mint, 'stroke-dasharray="7 4"')
      );
    b +=
      text(left, bottom + 28, '0', C.muted, 18, 'middle') +
      text(right, bottom + 28, String(nMax), C.muted, 18, 'middle') +
      text(w / 2, 397, 'Commands added', C.muted, 20, 'middle') +
      mark('ratio', text(24, 66, 'Ratio r = ' + f(p.ratio), C.violet, 21)) +
      mark('output', text(w - 24, 66, 'Sₙ ≈ ' + f(r.output), C.gold, 21, 'end'));
    if (pin) b += text(w / 2, 435, 'Violet rings: pinned partial sums', C.violet, 16, 'middle');
    return frame(
      'geometric-series',
      b,
      o,
      'Dots are partial sums after whole commands, starting with the empty sum at zero. Dashed connectors guide the eye and do not invent fractional commands. A mint limit line is shown only when it exists and lies inside this vertical window.'
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(24, 75, 'Choose supported inputs', C.gold, o.compact ? 24 : 28),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    if (slug === 'inverse-function')
      return o.view === 'graph'
        ? inverseGraph(r.parameters, r, o)
        : inverseGeometry(r.parameters, r, o);
    return o.view === 'graph'
      ? seriesGraph(r.parameters, r, o)
      : seriesGeometry(r.parameters, r, o);
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
    render
  });
});
