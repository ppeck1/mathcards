/* Photon and inertial-clock models. The shared host owns all time and controls. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasPhysicsBridges = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  const constants = freeze({
    planck: 6.62607015e-34,
    lightSpeed: 299792458,
    joulesPerEV: 1.602176634e-19
  });
  const field = (key, label, value, min, max, step, unit) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit
  });
  const definitions = freeze({
    'photon-energy': {
      title: 'Photon energy and vacuum wavelength',
      expression: 'f = c/λ; E_J = hf; E = E_J/u',
      axis: 'wavelength',
      unit: 'eV',
      primaryLabel: 'Energy per photon E',
      ymax: 3.5,
      setting:
        'A light-source designer compares ideal monochromatic photons by their vacuum wavelength. Follow one wavelength into frequency, then into energy per photon in joules and electronvolts.',
      limits:
        'Vacuum wavelength is 400–800 nm. This is one monochromatic photon under E=hf, not the power or brightness of a beam. The drawn oscillation marks wavelength only; its amplitude is arbitrary and is not a photon path or probability amplitude. The fixed energy bar measures 0–3.5 eV. SI h and c and the joule/electronvolt conversion are exact defining values; printed results are approximate.',
      controls: [field('wavelength', 'Vacuum wavelength λ', 550, 400, 800, 1, 'nm')]
    },
    'time-dilation': {
      title: 'Two events on an inertial clock',
      expression: 'β = v/c; γ = 1/√(1−β²); t = γτ',
      axis: 'speedFraction',
      unit: 's',
      primaryLabel: 'Laboratory interval t',
      ymax: 35,
      setting:
        'A clock on an ideal coasting spacecraft marks two events. Its own elapsed interval is τ. A laboratory frame moving at relative speed v assigns a longer coordinate interval t to the same two events.',
      limits:
        'The dimensionless speed fraction β is 0–0.95 and proper interval τ is 1–10 seconds. Both frames are inertial, spacetime is flat and gravity is absent. The two events occur at the same place in the clock rest frame, but generally at different laboratory positions. This is a coordinate-time comparison, not a light-arrival delay, twin-paradox journey or acceleration model. Both interval bars use one fixed 0–35 second scale.',
      controls: [
        field('speedFraction', 'Relative speed fraction β', 0.6, 0, 0.95, 0.005, 'dimensionless'),
        field('properDuration', 'Clock proper interval τ', 4, 1, 10, 0.05, 's')
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown physics bridge.');
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
        errors: [{ field: 'parameters', message: 'Use the declared physics input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (typeof v !== 'number' || !Number.isFinite(v) || v < c.min || v > c.max)
        errors.push({
          field: c.key,
          message: 'Use a finite quantity within the displayed bounds.'
        });
      else parameters[c.key] = v;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'photon-energy') {
      const wavelengthM = p.wavelength * 1e-9,
        frequency = constants.lightSpeed / wavelengthM,
        energyJ = constants.planck * frequency,
        energyEV = energyJ / constants.joulesPerEV;
      return {
        ...checked,
        status: 'valid',
        ...constants,
        wavelengthM,
        frequency,
        energyJ,
        energyEV,
        output: energyEV
      };
    }
    const gamma = 1 / Math.sqrt((1 - p.speedFraction) * (1 + p.speedFraction)),
      coordinateDuration = p.properDuration * gamma,
      velocity = p.speedFraction * constants.lightSpeed,
      timeDifference = coordinateDuration - p.properDuration,
      displacement = velocity * coordinateDuration;
    return {
      ...checked,
      status: 'valid',
      lightSpeed: constants.lightSpeed,
      gamma,
      coordinateDuration,
      velocity,
      timeDifference,
      displacement,
      output: coordinateDuration
    };
  }
  const canInterpolate = (slug, a, b) =>
    validateParams(slug, a).valid && validateParams(slug, b).valid;
  const curveValue = (slug, p, x) => {
    if (!has(slug)) return null;
    const r = evaluate(slug, { ...p, [get(slug).axis]: x });
    return r.valid ? r.output : null;
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
          : slug === 'photon-energy'
            ? [
                {
                  label: 'ENERGY PER PHOTON',
                  value: r.output,
                  note: 'electronvolts, not beam power'
                },
                { label: 'FREQUENCY', value: r.frequency, note: 'hertz in vacuum' },
                { label: 'ENERGY IN JOULES', value: r.energyJ, note: 'same energy in another unit' }
              ]
            : [
                {
                  label: 'LABORATORY INTERVAL',
                  value: r.output,
                  note: 'seconds between the same two events'
                },
                {
                  label: 'PROPER INTERVAL',
                  value: p.properDuration,
                  note: 'seconds recorded by the coasting clock'
                },
                {
                  label: 'LORENTZ FACTOR',
                  value: r.gamma,
                  note: 'dimensionless interval multiplier'
                }
              ],
        insight: !r.valid
          ? r.errors.map(e => e.message).join(' ')
          : slug === 'photon-energy'
            ? 'Longer vacuum wavelength means lower frequency and lower energy per photon. Brightness also depends on how many photons arrive.'
            : 'The two bars refer to one pair of clock events. Increasing relative speed increases the laboratory interval while the chosen proper interval remains fixed.'
      })
    };
  }
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
    f = v => {
      const magnitude = Math.abs(v);
      return (
        v !== 0 && (magnitude >= 1e6 || magnitude < 0.001)
          ? v
              .toExponential(3)
              .replace(/\.?0+e/, 'e')
              .replace('e+', 'e')
          : String(Number(v.toPrecision(4)))
      ).replace(/-/g, '−');
    };
  const text = (x, y, v, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra}/>`;
  function frame(slug, body, o, caption) {
    const w = o.compact ? 360 : 760,
      id =
        'physics-' +
        Array.from(String(o.id || slug))
          .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${w} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc>${rect(0, 0, w, 440, C.bg, 'rx="18"')}<g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      cx = w / 2,
      left = 36,
      right = w - 36,
      width = right - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'photon-energy') {
      const scale = width / 1600,
        points = Array.from({ length: 161 }, (_, i) => {
          const x = (1600 * i) / 160;
          return [left + x * scale, 177 - 24 * Math.sin((2 * Math.PI * x) / p.wavelength)];
        });
      body =
        text(cx, 31, 'One wavelength, one photon energy', C.ink, o.compact ? 19 : 26) +
        mark(
          'wavelength wavelengthM',
          text(cx, 64, 'λ = ' + f(p.wavelength) + ' nm', C.cyan, 24),
          'input'
        );
      body += mark(
        'frequency lightSpeed wavelengthM',
        text(cx, 99, 'f ≈ ' + f(r.frequency) + ' Hz', C.gold, 20)
      );
      body +=
        text(cx, 131, 'Vacuum wavelength ruler · nm', C.muted, 15) + line(left, 177, right, 177);
      body += mark(
        'wavelength wavelengthM',
        `<path data-role="wavelength-wave" data-nm-scale="${scale}" d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${C.cyan}" stroke-width="2.5"/>`,
        'input'
      );
      body += mark(
        'wavelength wavelengthM',
        line(left, 220, left + p.wavelength * scale, 220, C.cyan, 3) +
          line(left, 213, left, 227, C.cyan) +
          line(left + p.wavelength * scale, 213, left + p.wavelength * scale, 227, C.cyan),
        'input'
      );
      body +=
        text(left, 248, '0', C.muted, 13, 'start') +
        text(right, 248, '1600 nm', C.muted, 13, 'end');
      body += mark(
        'energyJ planck frequency',
        text(cx, 282, 'Energy ≈ ' + f(r.energyJ) + ' J', C.gold, 19)
      );
      body +=
        rect(left, 311, width, 26, C.grid) +
        mark(
          'output energyEV energyJ joulesPerEV planck lightSpeed',
          rect(
            left,
            311,
            (width * r.output) / 3.5,
            26,
            C.mint,
            'data-role="energy-bar" data-energy="' + r.output + '" data-maximum="3.5"'
          ) + text(cx, 369, 'E ≈ ' + f(r.output) + ' eV', C.mint, 25),
          'output'
        );
      body +=
        text(left, 354, '0', C.muted, 13, 'start') + text(right, 354, '3.5 eV', C.muted, 13, 'end');
      if (pin?.valid)
        body += mark(
          'output',
          line(
            left + (width * pin.output) / 3.5,
            306,
            left + (width * pin.output) / 3.5,
            343,
            C.violet,
            2,
            'stroke-dasharray="4 3"'
          ),
          'reference'
        );
      body += text(cx, 414, 'Wave height is not brightness or energy.', C.muted, 14);
    } else {
      body =
        text(cx, 31, 'One clock, the same two events', C.ink, o.compact ? 20 : 27) +
        mark(
          'speedFraction velocity lightSpeed',
          text(cx, 64, 'β = v/c = ' + f(p.speedFraction), C.cyan, 23),
          'input'
        );
      body +=
        mark(
          'properDuration',
          text(cx, 111, 'Clock interval τ = ' + f(p.properDuration) + ' s', C.cyan, 20),
          'input'
        ) +
        rect(left, 130, width, 26, C.grid) +
        mark(
          'properDuration',
          rect(
            left,
            130,
            (width * p.properDuration) / 35,
            26,
            C.cyan,
            'data-role="proper-interval" data-seconds="' + p.properDuration + '"'
          ),
          'input'
        );
      body += text(left, 179, 'Event A · 0 s', C.muted, 13, 'start');
      body +=
        mark(
          'output coordinateDuration timeDifference properDuration gamma',
          text(cx, 219, 'Laboratory t ≈ ' + f(r.output) + ' s', C.mint, 23),
          'output'
        ) +
        rect(left, 240, width, 26, C.grid) +
        mark(
          'output coordinateDuration properDuration gamma',
          rect(
            left,
            240,
            (width * r.output) / 35,
            26,
            C.mint,
            'data-role="coordinate-interval" data-seconds="' + r.output + '"'
          ),
          'output'
        );
      for (const tick of [0, 7, 14, 21, 28, 35])
        body +=
          line(left + (width * tick) / 35, 274, left + (width * tick) / 35, 281) +
          text(left + (width * tick) / 35, 299, tick, C.muted, 13);
      body +=
        text(cx, 321, 'Same fixed seconds scale', C.muted, 14) +
        mark('gamma speedFraction', text(cx, 356, 'γ ≈ ' + f(r.gamma) + ' · t = γτ', C.gold, 23));
      body += mark(
        'displacement velocity coordinateDuration lightSpeed',
        text(cx, 389, 'Lab separation ≈ ' + f(r.displacement) + ' m', C.muted, 16)
      );
      body += text(cx, 418, 'The laboratory event positions can differ.', C.muted, 14);
      if (pin?.valid)
        body += mark(
          'output',
          line(
            left + (width * pin.output) / 35,
            234,
            left + (width * pin.output) / 35,
            272,
            C.violet,
            2,
            'stroke-dasharray="4 3"'
          ),
          'reference'
        );
    }
    return frame(
      slug,
      body,
      o,
      slug === 'photon-energy'
        ? 'Wave spacing follows vacuum wavelength; the independent fixed bar measures energy per photon.'
        : 'Both interval bars use the same seconds scale for the same two clock events.'
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
        y: { min: 0, max: d.ymax, label: d.primaryLabel + ' (' + d.unit + ')' },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: d.axis + ' output',
            color: C.gold,
            points: Array.from({ length: 101 }, (_, i) => {
              const x = c.min + ((c.max - c.min) * i) / 100;
              return { x, y: curveValue(slug, p, x) };
            })
          }
        ],
        current,
        notes: [
          slug === 'photon-energy'
            ? 'Vacuum wavelength in nanometres; energy per photon in electronvolts.'
            : 'Laboratory seconds against relative speed fraction, with the proper interval held fixed.'
        ]
      },
      o
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    return !r.valid
      ? frame(
          slug,
          text(o.compact ? 180 : 380, 210, 'Choose supported physical quantities', C.gold, 19),
          o,
          r.errors.map(e => e.message).join(' ')
        )
      : o.view === 'graph'
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
    constants
  });
});
