/* Regular polygon and sphere measurements. The shared host owns time and controls. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasGeometryExtensions = api;
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
        ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, copy(v)]))
        : value;
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
    'regular-polygon': {
      title: 'A regular polygon from equal triangles',
      expression: 'A = (n/2)R² sin(2π/n) = Pa/2',
      axis: 'radius',
      unit: 'm²',
      primaryLabel: 'Polygon area A',
      setting:
        'A pavilion designer places n equally spaced floor corners on a circle of radius R metres. Join neighboring corners and split the enclosed regular polygon into n equal centre triangles.',
      limits:
        'The polygon is planar, regular and convex, with 3 to 12 whole sides and circumradius 1 to 4 metres. R reaches a vertex; the apothem reaches the midpoint of a side and is perpendicular to it. Angles in the trigonometric formulas are radians. Equal horizontal and vertical metre scales preserve actual shape and area. The circumcircle is a reference, not the polygon boundary.',
      controls: [
        field('radius', 'Circumradius R', 3, 1, 4, 0.05, 'm'),
        field('sides', 'Equal sides n', 6, 3, 12, 1, 'sides', true)
      ]
    },
    'sphere-measurement': {
      title: 'Sphere surface and volume',
      expression: 'A = 4πr²; V = (4/3)πr³',
      axis: 'radius',
      unit: 'm³',
      primaryLabel: 'Sphere volume V',
      setting:
        'A designer changes the radius of a spherical water tank. Follow the same radius into the tank diameter, shell surface area, central circular cross-section and capacity.',
      limits:
        'This is an ideal mathematical sphere with radius 0.25 to 5 metres. Surface area has square-metre units and enclosed volume has cubic-metre units. The circle illustration is an equal-scale orthographic silhouette and great-circle reference: its area πr² is a central cross-section, not the sphere surface area or its volume. The volume bar uses one fixed 0 to 550 cubic-metre scale. Wall thickness and usable capacity are outside this model.',
      controls: [field('radius', 'Tank radius r', 2, 0.25, 5, 0.05, 'm')]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown geometry extension.');
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
        errors: [{ field: 'parameters', message: 'Use the declared geometry input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const control of fields) {
      const value = Object.hasOwn(input, control.key) ? input[control.key] : control.value;
      if (
        typeof value !== 'number' ||
        !Number.isFinite(value) ||
        value < control.min ||
        value > control.max ||
        (control.discrete && !Number.isSafeInteger(value))
      )
        errors.push({
          field: control.key,
          message: control.discrete
            ? 'Use a whole side count within the displayed bounds.'
            : 'Use a finite radius within the displayed bounds.'
        });
      else parameters[control.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      pi = Math.PI;
    if (slug === 'regular-polygon') {
      const centralAngle = (2 * pi) / p.sides,
        sideLength = 2 * p.radius * Math.sin(pi / p.sides),
        apothem = p.radius * Math.cos(pi / p.sides),
        perimeter = p.sides * sideLength,
        area = (p.sides / 2) * p.radius ** 2 * Math.sin(centralAngle),
        vertices = Array.from({ length: p.sides }, (_, i) => {
          const angle = pi / 2 - i * centralAngle;
          return [p.radius * Math.cos(angle), p.radius * Math.sin(angle)];
        });
      return {
        ...checked,
        status: 'valid',
        output: area,
        area,
        sideLength,
        apothem,
        perimeter,
        centralAngle,
        centralAngleDeg: 360 / p.sides,
        vertices,
        triangleArea: area / p.sides,
        pi
      };
    }
    const volume = (4 * pi * p.radius ** 3) / 3,
      surfaceArea = 4 * pi * p.radius ** 2,
      crossSectionArea = pi * p.radius ** 2;
    return {
      ...checked,
      status: 'valid',
      output: volume,
      volume,
      surfaceArea,
      crossSectionArea,
      diameter: 2 * p.radius,
      pi
    };
  }
  const canInterpolate = (slug, a, b) => {
    const first = validateParams(slug, a),
      second = validateParams(slug, b);
    return (
      first.valid &&
      second.valid &&
      (slug !== 'regular-polygon' || first.parameters.sides === second.parameters.sides)
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
          : slug === 'regular-polygon'
            ? [
                {
                  label: 'POLYGON AREA',
                  value: r.area,
                  note: 'square metres across n centre triangles'
                },
                { label: 'PERIMETER', value: r.perimeter, note: 'metres along all n equal sides' },
                {
                  label: 'APOTHEM',
                  value: r.apothem,
                  note: 'metres perpendicular from centre to a side'
                }
              ]
            : [
                {
                  label: 'ENCLOSED VOLUME',
                  value: r.volume,
                  note: 'cubic metres inside the ideal sphere'
                },
                {
                  label: 'SURFACE AREA',
                  value: r.surfaceArea,
                  note: 'square metres across the full spherical shell'
                },
                {
                  label: 'CENTRAL CROSS-SECTION',
                  value: r.crossSectionArea,
                  note: 'square metres in the great-circle disk'
                }
              ],
        insight: !r.valid
          ? r.errors.map(e => e.message).join(' ')
          : slug === 'regular-polygon'
            ? 'The n triangles have base s and height a. Their areas add to Pa/2, the same area as the circumradius formula. Radius scaling changes lengths linearly and area quadratically.'
            : 'Doubling radius doubles diameter, multiplies surface and cross-section areas by four, and multiplies volume by eight. The circle projection alone cannot encode all three quantities.'
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
  const n = value => Number(value.toFixed(5)),
    f = value => String(Number(value.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, xx, yy, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const scope = value =>
    Array.from(String(value))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'geometry-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="440" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      middle = w / 2,
      left = o.compact ? 36 : 70,
      right = w - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'regular-polygon') {
      const cx = middle,
        cy = 211,
        scale = 22,
        project = ([x, y]) => [cx + x * scale, cy - y * scale],
        pointString = values => values.map(value => project(value).map(n).join(',')).join(' '),
        first = r.vertices[0],
        next = r.vertices[1],
        midpoint = [(first[0] + next[0]) / 2, (first[1] + next[1]) / 2],
        [mx, my] = project(midpoint),
        [vx, vy] = project(first),
        [nx, ny] = project(next);
      body =
        text(middle, 30, 'Build a polygon from equal triangles', C.ink, o.compact ? 19 : 27) +
        mark(
          'sides',
          text(middle - (o.compact ? 52 : 72), 61, 'n = ' + p.sides, C.cyan, o.compact ? 20 : 24),
          'input'
        ) +
        mark(
          'radius',
          text(
            middle + (o.compact ? 42 : 65),
            61,
            'R = ' + f(p.radius) + ' m',
            C.cyan,
            o.compact ? 20 : 24
          ),
          'input'
        );
      for (const value of [-4, 0, 4])
        body +=
          line(cx + value * scale, cy - 5 * scale, cx + value * scale, cy + 5 * scale) +
          line(cx - 5 * scale, cy + value * scale, cx + 5 * scale, cy + value * scale) +
          text(cx + value * scale, cy + 5 * scale + 18, value, C.muted, 13);
      body += mark(
        'radius',
        `<circle data-role="circumcircle" cx="${cx}" cy="${cy}" r="${n(p.radius * scale)}" fill="none" stroke="${C.muted}" stroke-dasharray="4 5" stroke-width="1.5"/>`,
        'reference'
      );
      r.vertices.forEach((vertex, i) => {
        body += mark(
          'radius sides vertices triangleArea area output',
          `<polygon data-role="centre-triangle" data-triangle="${i + 1}" data-area="${r.triangleArea}" points="${pointString([[0, 0], vertex, r.vertices[(i + 1) % p.sides]])}" fill="${i % 2 ? C.gold : C.mint}" fill-opacity=".16" stroke="${C.grid}" stroke-width="1"/>`
        );
      });
      body += mark(
        'sideLength perimeter radius sides',
        `<polygon data-role="polygon-boundary" points="${pointString(r.vertices)}" fill="none" stroke="${C.mint}" stroke-width="2.5"/>` +
          line(vx, vy, nx, ny, C.gold, 4)
      );
      body += mark('radius', line(cx, cy, vx, vy, C.cyan, 3), 'input');
      body += mark('apothem radius sides', line(cx, cy, mx, my, C.violet, 3));
      const inward = [(cx - mx) / (r.apothem * scale), (cy - my) / (r.apothem * scale)],
        along = [(nx - vx) / (r.sideLength * scale), (ny - vy) / (r.sideLength * scale)],
        size = 7;
      body += mark(
        'apothem',
        `<path data-role="right-angle" d="M${n(mx + inward[0] * size)} ${n(my + inward[1] * size)} L${n(mx + inward[0] * size + along[0] * size)} ${n(my + inward[1] * size + along[1] * size)} L${n(mx + along[0] * size)} ${n(my + along[1] * size)}" fill="none" stroke="${C.violet}" stroke-width="1.5"/>`
      );
      const arc = 24,
        endAngle = -Math.PI / 2 + r.centralAngle;
      body += mark(
        'centralAngle centralAngleDeg sides pi',
        `<path data-role="central-angle" d="M${cx} ${cy - arc} A${arc} ${arc} 0 0 1 ${n(cx + arc * Math.cos(endAngle))} ${n(cy + arc * Math.sin(endAngle))}" fill="none" stroke="${C.gold}" stroke-width="2"/>`
      );
      if (pin?.valid)
        body += mark(
          'output',
          `<polygon data-role="pinned-polygon" points="${pointString(pin.vertices)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"><title>Pinned area ${f(pin.area)} square metres</title></polygon>`,
          'reference'
        );
      body += mark(
        'centralAngle centralAngleDeg sides',
        text(
          middle,
          356,
          'θ ≈ ' + f(r.centralAngle) + ' rad ≈ ' + f(r.centralAngleDeg) + '°',
          C.gold,
          o.compact ? 17 : 21
        )
      );
      body += mark(
        'perimeter sideLength radius sides',
        text(
          middle,
          381,
          'P ≈ ' + f(r.perimeter) + ' m · s ≈ ' + f(r.sideLength) + ' m',
          C.mint,
          o.compact ? 18 : 23
        )
      );
      body += mark(
        'apothem radius sides',
        text(middle, 407, 'a ≈ ' + f(r.apothem) + ' m', C.violet, o.compact ? 18 : 22)
      );
      body +=
        mark('pi', text(left, 431, 'π ≈ ' + f(r.pi), C.muted, 14, 'start'), 'reference') +
        mark(
          'area output triangleArea',
          text(right, 431, 'A ≈ ' + f(r.area) + ' m²', C.gold, o.compact ? 21 : 26, 'end'),
          'output'
        );
      return frame(
        slug,
        body,
        o,
        'Equal horizontal and vertical metre scales show the actual regular polygon inside its circumcircle. The n filled centre triangles are its full area. Cyan reaches a vertex, gold highlights one side and the central angle, and violet reaches a side midpoint at right angles. Each triangle has area sa/2, so A=Pa/2. A dashed violet polygon, when present, preserves the pinned shape on the same scale.'
      );
    }
    const cx = middle,
      cy = 202,
      scale = 22,
      radius = p.radius * scale,
      span = right - left,
      volumeX = value => left + (value / 550) * span;
    body =
      text(middle, 30, 'One radius, three different measures', C.ink, o.compact ? 20 : 27) +
      mark(
        'radius diameter',
        text(
          middle,
          61,
          'r = ' + f(p.radius) + ' m · d ≈ ' + f(r.diameter) + ' m',
          C.cyan,
          o.compact ? 21 : 25
        ),
        'input'
      );
    body += mark(
      'radius crossSectionArea pi',
      `<circle data-role="sphere-projection" cx="${cx}" cy="${cy}" r="${n(radius)}" fill="${C.cyan}" fill-opacity=".12" stroke="${C.cyan}" stroke-width="2.5"/>`
    );
    body += `<ellipse cx="${cx}" cy="${cy}" rx="${n(radius)}" ry="${n(radius * 0.28)}" fill="none" stroke="${C.muted}" stroke-dasharray="4 4" stroke-width="1.5"/>`;
    body += mark(
      'diameter radius',
      line(cx - radius, cy, cx + radius, cy, C.muted, 1.5, 'stroke-dasharray="3 4"')
    );
    body += mark('radius', line(cx, cy, cx + radius, cy, C.gold, 3), 'input');
    body +=
      line(left, 293, left + scale, 293, C.muted, 2) +
      text(left + scale / 2, 285, '1 m', C.muted, 13);
    if (pin?.valid)
      body += mark(
        'output',
        `<circle data-role="pinned-sphere" cx="${cx}" cy="${cy}" r="${n(pin.parameters.radius * scale)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"><title>Pinned radius ${f(pin.parameters.radius)} metres and volume ${f(pin.volume)} cubic metres</title></circle>`,
        'reference'
      );
    body += mark(
      'crossSectionArea pi radius',
      text(
        middle,
        328,
        'Central disk ≈ ' + f(r.crossSectionArea) + ' m²',
        C.muted,
        o.compact ? 18 : 22
      )
    );
    body += mark(
      'volume output radius',
      text(left, 354, 'V ≈ ' + f(r.volume) + ' m³', C.gold, o.compact ? 24 : 28, 'start'),
      'output'
    );
    body += `<rect x="${left}" y="365" width="${span}" height="20" rx="3" fill="${C.grid}"/>`;
    body += mark(
      'volume output radius',
      `<rect data-role="volume-bar" data-value="${r.volume}" data-scale-max="550" x="${left}" y="365" width="${n((r.volume / 550) * span)}" height="20" fill="${C.gold}"/>`,
      'output'
    );
    for (const value of [0, 275, 550])
      body +=
        line(volumeX(value), 388, volumeX(value), 393, C.muted, 1) +
        text(volumeX(value), 409, value, C.muted, 13);
    if (pin?.valid)
      body += mark(
        'output',
        line(
          volumeX(pin.volume),
          360,
          volumeX(pin.volume),
          390,
          C.violet,
          2,
          'stroke-dasharray="3 3"'
        ),
        'reference'
      );
    body +=
      mark(
        'surfaceArea radius',
        text(
          left,
          433,
          'Surface A ≈ ' + f(r.surfaceArea) + ' m²',
          C.mint,
          o.compact ? 16 : 21,
          'start'
        )
      ) +
      mark(
        'pi',
        text(right, 433, 'π ≈ ' + f(r.pi), C.muted, o.compact ? 14 : 18, 'end'),
        'reference'
      );
    return frame(
      slug,
      body,
      o,
      'The circle silhouette has a fixed metre scale: its radius is proportional to r, and its disk area is the central cross-section πr². The dashed equator is an orientation cue, not an area measurement. Neither that disk nor the apparent ellipse is the sphere surface area or volume. The separate volume bar uses a fixed 0–550 cubic-metre scale. Violet marks, when present, preserve the pinned radius and volume.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls[0],
      pin = o.baseline && evaluate(slug, o.baseline),
      current = [
        {
          x: p.radius,
          y: r.output,
          label: d.primaryLabel,
          quantity: 'radius output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
    if (pin?.valid)
      current.push({
        x: pin.parameters.radius,
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    return Plot.render(
      {
        title: d.title,
        description: d.setting,
        x: { ...c, value: p.radius },
        y: {
          min: 0,
          max: slug === 'regular-polygon' ? 55 : 550,
          label: d.primaryLabel + ' (' + d.unit + ')'
        },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: 'radius output',
            color: C.gold,
            points: Array.from({ length: 101 }, (_, i) => {
              const x = c.min + ((c.max - c.min) * i) / 100;
              return { x, y: curveValue(slug, p, x) };
            })
          }
        ],
        current,
        notes: [
          slug === 'regular-polygon'
            ? 'The side count is fixed for this radius curve. Area scales as R² on the fixed 0–55 square-metre axis.'
            : 'Volume scales as r³ on the fixed 0–550 cubic-metre axis. Surface area and central disk area have different units and quadratic scaling.'
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
          208,
          'Choose supported measurements',
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
