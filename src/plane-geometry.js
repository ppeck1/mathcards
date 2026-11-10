/* Finite plane-geometry modules. The shared host owns controls, clocks and pacing. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasPlaneGeometry = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
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
    'triangle-measurement': {
      title: 'A triangle: base, height and shear',
      expression: 'A = bh/2',
      axis: 'height',
      unit: 'm²',
      primaryLabel: 'Triangle area A',
      setting:
        'A triangular shade sail is anchored along a fixed base. Raise its third corner or slide it sideways. The perpendicular height determines area, while sloping edges determine the boundary length.',
      limits:
        'Positive base 1–6 m and height 0.5–4 m; signed apex displacement −2–2 m relative to the base midpoint. This is a planar ideal triangle. Perpendicular height can fall outside the base segment. Sideways shear preserves area at fixed base and height; it need not preserve side lengths or angles.',
      max: 12,
      controls: [
        field('height', 'Perpendicular height h', 2, 0.5, 4, 0.05, 'm'),
        field('base', 'Anchor base b', 4, 1, 6, 0.05, 'm'),
        field('skew', 'Apex shift s', 0, -2, 2, 0.05, 'm')
      ]
    },
    'similar-triangles': {
      title: 'Similar triangles: length and area',
      expression: 'b = 3k; h = 4k; c = 5k; A = 6k²',
      axis: 'scale',
      unit: 'm²',
      primaryLabel: 'Scaled triangle area A',
      setting:
        'A designer enlarges a three-by-four-metre right-triangle panel. A single positive scale factor k multiplies all three edge lengths. Follow the same factor into the area of the new panel.',
      limits:
        'A fixed 3–4–5 metre right triangle is scaled uniformly by 0.25–2. Equal horizontal and vertical metre scales preserve angles. Lengths grow by k and area by k². The outline is a reference triangle, not a separately fitted drawing. Similarity is distinct from equal size.',
      max: 24,
      controls: [field('scale', 'Length scale factor k', 1.25, 0.25, 2, 0.025, '')]
    },
    'perpendicular-bisector': {
      title: 'Constructing a perpendicular bisector',
      expression: 'h = √(r² − d²/4); ℓ = 2h',
      axis: 'radius',
      unit: 'm',
      primaryLabel: 'Intersection separation ℓ',
      setting:
        'A gardener places two stakes d metres apart and uses the same compass radius r around each. Two distinct circle intersections give a line equally distant from both stakes. Follow the compass opening into those intersections.',
      limits:
        'The stake distance d and radius r are each 2–4 m, guaranteeing r≥d/2. At r=d/2 the circles touch at one point; the two-point construction fails, although the perpendicular bisector still exists mathematically. For r>d/2 two intersections determine the perpendicular bisector. This is an equal-radius rigid-compass construction, not a complete classical-construction engine.',
      max: 8,
      controls: [
        field('radius', 'Equal compass radius r', 3, 2, 4, 0.025, 'm'),
        field('distance', 'Stake separation d', 4, 2, 4, 0.025, 'm')
      ]
    },
    'ellipse-section': {
      title: 'An ellipse from a fixed string length',
      expression: 'b = √(a² − c²); A = πab; d₁ + d₂ = 2a',
      axis: 'major',
      unit: 'm²',
      primaryLabel: 'Elliptical garden area A',
      setting:
        'A gardener lays out an ellipse with a taut loop represented by two straight string segments to fixed foci. Every boundary point has the same total focus distance 2a. Change the long half-axis or focus spacing, and move the point around the same boundary.',
      limits:
        'The semimajor axis a is 3–5 m, center-to-focus distance c is 0–2 m, and the parameter t is 0–2π radians. Thus a>c and the ellipse is nondegenerate. At c=0 the two foci coincide and the ellipse is a circle. The parameter t generally differs from the polar angle. Area is enclosed planar area; no orbit or ellipse-perimeter law is modeled.',
      max: 80,
      controls: [
        field('major', 'Semimajor axis a', 4, 3, 5, 0.025, 'm'),
        field('focus', 'Center-to-focus distance c', 2, 0, 2, 0.025, 'm'),
        field('angle', 'Boundary parameter t', Math.PI / 3, 0, 2 * Math.PI, 0.025, 'rad')
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions)),
    has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug),
    get = slug => {
      if (!has(slug)) throw new RangeError('Unknown plane geometry lesson.');
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
        errors: [{ field: 'parameters', message: 'Use the declared plane geometry input object.' }],
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
          message: 'Use a finite measurement within the displayed bounds.'
        });
      else parameters[c.key] = v;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let values;
    if (slug === 'triangle-measurement') {
      const apex = p.base / 2 + p.skew,
        leftSide = Math.hypot(apex, p.height),
        rightSide = Math.hypot(p.base - apex, p.height),
        area = (p.base * p.height) / 2;
      values = {
        output: area,
        area,
        apex,
        leftSide,
        rightSide,
        perimeter: p.base + leftSide + rightSide,
        vertices: [
          [0, 0],
          [p.base, 0],
          [apex, p.height]
        ]
      };
    } else if (slug === 'similar-triangles') {
      const base = 3 * p.scale,
        height = 4 * p.scale,
        hypotenuse = 5 * p.scale,
        area = (base * height) / 2;
      values = {
        output: area,
        area,
        base,
        height,
        hypotenuse,
        perimeter: 12 * p.scale,
        areaFactor: p.scale ** 2,
        referenceArea: 6,
        vertices: [
          [0, 0],
          [base, 0],
          [0, height]
        ]
      };
    } else if (slug === 'perpendicular-bisector') {
      const halfDistance = p.distance / 2,
        height = Math.sqrt(Math.max(0, (p.radius - halfDistance) * (p.radius + halfDistance))),
        separation = 2 * height;
      values = {
        output: separation,
        separation,
        height,
        halfDistance,
        intersectionCount: height === 0 ? 1 : 2,
        constructionState: height === 0 ? 'tangent — one point' : 'two distinct intersections',
        equalDistance: p.radius,
        midpoint: 0
      };
    } else {
      const minor = Math.sqrt(p.major ** 2 - p.focus ** 2),
        pointX = p.major * Math.cos(p.angle),
        pointY = minor * Math.sin(p.angle),
        firstDistance = Math.hypot(pointX + p.focus, pointY),
        secondDistance = Math.hypot(pointX - p.focus, pointY),
        area = Math.PI * p.major * minor;
      values = {
        output: area,
        area,
        minor,
        pointX,
        pointY,
        firstDistance,
        secondDistance,
        distanceSum: firstDistance + secondDistance,
        stringLength: 2 * p.major,
        eccentricity: p.focus / p.major,
        pi: Math.PI
      };
    }
    return { ...checked, status: 'valid', ...values };
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
        stats: r.valid
          ? [
              { label: d.primaryLabel.toUpperCase(), value: r.output, note: d.unit },
              {
                label:
                  slug === 'triangle-measurement'
                    ? 'BOUNDARY LENGTH'
                    : slug === 'similar-triangles'
                      ? 'LENGTH SCALE'
                      : slug === 'perpendicular-bisector'
                        ? 'INTERSECTION COUNT'
                        : 'STRING LENGTH',
                value:
                  slug === 'triangle-measurement'
                    ? r.perimeter
                    : slug === 'similar-triangles'
                      ? p.scale
                      : slug === 'perpendicular-bisector'
                        ? r.intersectionCount
                        : r.stringLength,
                note:
                  slug === 'perpendicular-bisector'
                    ? r.constructionState
                    : slug === 'similar-triangles'
                      ? 'area multiplier is the square of this scale'
                      : 'metres'
              }
            ]
          : [],
        insight: r.valid ? d.limits : r.errors.map(e => e.message).join(' ')
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
    f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const scope = v =>
    Array.from(String(v))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'plane-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="440" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      m = w / 2,
      s = slug === 'triangle-measurement' ? 32 : 22,
      cy = 247,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body = text(
      m,
      30,
      slug === 'triangle-measurement'
        ? 'Base × perpendicular height / 2'
        : slug === 'similar-triangles'
          ? 'One scale for every matching side'
          : slug === 'perpendicular-bisector'
            ? 'Two equal compass circles'
            : 'A fixed sum of focus distances',
      C.ink,
      o.compact ? 19 : 27
    );
    if (slug === 'triangle-measurement' || slug === 'similar-triangles') {
      const cx = m - (slug === 'triangle-measurement' ? 96 : 66),
        px = x => cx + x * s,
        py = y => cy - y * s,
        poly = vertices => vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' '),
        ref =
          slug === 'similar-triangles'
            ? [
                [0, 0],
                [3, 0],
                [0, 4]
              ]
            : [
                [0, 0],
                [p.base, 0],
                [p.base / 2, p.height]
              ],
        b = slug === 'similar-triangles' ? r.base : p.base,
        h = slug === 'similar-triangles' ? r.height : p.height,
        apex = slug === 'similar-triangles' ? 0 : r.apex;
      body += mark(
        slug === 'similar-triangles' ? 'scale' : 'base height skew',
        text(
          m,
          65,
          slug === 'similar-triangles'
            ? 'k = ' + f(p.scale)
            : 'b = ' + f(p.base) + ' m · h = ' + f(p.height) + ' m',
          C.cyan,
          21
        ),
        'input'
      );
      body += mark(
        'referenceArea',
        `<polygon data-role="reference-triangle" points="${poly(ref)}" fill="none" stroke="${C.muted}" stroke-width="1.5" stroke-dasharray="5 4"/>`,
        'reference'
      );
      body += mark(
        'area output vertices base height skew scale',
        `<polygon data-role="measured-triangle" data-area="${r.area}" data-scale="${s}" points="${poly(r.vertices)}" fill="${C.gold}" fill-opacity=".18" stroke="${C.gold}" stroke-width="2.5"/>`,
        'output'
      );
      body += mark('base scale', line(px(0), py(0), px(b), py(0), C.cyan, 4), 'input');
      body += mark(
        'height scale',
        line(px(apex), py(0), px(apex), py(h), C.mint, 3, 'stroke-dasharray="4 3"'),
        'input'
      );
      body += mark('apex skew', line(px(0), py(0), px(apex), py(0), C.violet, 1.5));
      body +=
        line(px(apex), py(0) - 8, px(apex) + 8, py(0) - 8, C.mint, 1.5) +
        line(px(apex) + 8, py(0) - 8, px(apex) + 8, py(0), C.mint, 1.5);
      body += mark(
        'base height',
        text(m, 294, 'b ≈ ' + f(b) + ' m · h ≈ ' + f(h) + ' m', C.cyan, 20)
      );
      body += mark(
        slug === 'similar-triangles' ? 'hypotenuse' : 'skew leftSide rightSide',
        text(
          m,
          325,
          slug === 'similar-triangles'
            ? 'Matching sloping side ≈ ' + f(r.hypotenuse) + ' m'
            : 'Apex shift s = ' + f(p.skew) + ' m',
          C.violet,
          o.compact ? 17 : 21
        )
      );
      body += mark('perimeter', text(m, 354, 'Boundary ≈ ' + f(r.perimeter) + ' m', C.muted, 18));
      if (slug === 'similar-triangles')
        body += mark(
          'areaFactor scale referenceArea',
          text(m, 385, 'Area multiplier ≈ ' + f(r.areaFactor), C.mint, 19)
        );
      else
        body += mark(
          'skew',
          text(
            m,
            385,
            'Slide the top: same area at the same height.',
            C.muted,
            o.compact ? 14 : 19
          ),
          'input'
        );
      if (pin?.valid)
        body += mark(
          'output',
          `<polygon data-role="pinned-triangle" points="${poly(pin.vertices)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"/>`,
          'reference'
        );
    } else if (slug === 'perpendicular-bisector') {
      const cx = m,
        yy = 209,
        px = x => cx + s * x,
        py = y => yy - s * y;
      body += mark(
        'distance radius',
        text(m, 65, 'd = ' + f(p.distance) + ' m · r = ' + f(p.radius) + ' m', C.cyan, 21),
        'input'
      );
      for (const x of [-r.halfDistance, r.halfDistance])
        body += mark(
          'radius distance',
          `<circle data-role="compass-circle" cx="${n(px(x))}" cy="${yy}" r="${n(p.radius * s)}" fill="none" stroke="${C.cyan}" stroke-width="2"/><circle cx="${n(px(x))}" cy="${yy}" r="4" fill="${C.ink}"/>`,
          'input'
        );
      body += mark(
        'distance halfDistance midpoint',
        line(px(-r.halfDistance), yy, px(r.halfDistance), yy, C.muted, 2)
      );
      for (const y of r.intersectionCount === 2 ? [-r.height, r.height] : [0])
        body += mark(
          'height intersectionCount equalDistance',
          `<circle data-role="circle-intersection" cx="${cx}" cy="${n(py(y))}" r="5" fill="${C.gold}"/>`
        );
      body += mark(
        'radius equalDistance',
        line(px(-r.halfDistance), yy, cx, py(r.height), C.mint, 2) +
          line(px(r.halfDistance), yy, cx, py(r.height), C.mint, 2)
      );
      if (r.intersectionCount === 2)
        body += mark(
          'separation output height',
          line(cx, py(-r.height), cx, py(r.height), C.gold, 3),
          'output'
        );
      if (pin?.valid && pin.intersectionCount === 2)
        body += mark(
          'output',
          line(
            cx + 8,
            py(-pin.height),
            cx + 8,
            py(pin.height),
            C.violet,
            2,
            'stroke-dasharray="4 4"'
          ),
          'reference'
        );
      body += mark(
        'intersectionCount constructionState',
        text(
          m,
          327,
          r.intersectionCount === 2
            ? 'Two intersections determine the line.'
            : 'One tangent point: no two-point line.',
          C.mint,
          o.compact ? 17 : 23
        )
      );
      body += mark(
        'halfDistance',
        text(
          m,
          357,
          'Half the stake distance ≈ ' + f(r.halfDistance) + ' m',
          C.muted,
          o.compact ? 17 : 21
        )
      );
      body += mark(
        'height equalDistance',
        text(m, 387, 'h ≈ ' + f(r.height) + ' m · equal distances r', C.cyan, o.compact ? 17 : 21)
      );
    } else {
      const cx = m,
        yy = 209,
        px = x => cx + s * x,
        py = y => yy - s * y;
      body += mark(
        'major focus angle',
        text(m, 65, 'a = ' + f(p.major) + ' m · c = ' + f(p.focus) + ' m', C.cyan, 21),
        'input'
      );
      body += mark(
        'major minor area output pi',
        `<ellipse data-role="measured-ellipse" data-area="${r.area}" data-scale="${s}" cx="${cx}" cy="${yy}" rx="${n(s * p.major)}" ry="${n(s * r.minor)}" fill="${C.gold}" fill-opacity=".14" stroke="${C.gold}" stroke-width="2.5"/>`,
        'output'
      );
      body +=
        mark('major', line(cx, yy, px(p.major), yy, C.muted, 1.5), 'input') +
        mark('minor', line(cx, yy, cx, py(r.minor), C.violet, 2));
      for (const x of [-p.focus, p.focus])
        body += mark(
          'focus',
          `<circle data-role="focus" cx="${n(px(x))}" cy="${yy}" r="4" fill="${C.cyan}"/>`,
          'input'
        );
      body += mark(
        'firstDistance secondDistance distanceSum stringLength angle pointX pointY',
        line(px(-p.focus), yy, px(r.pointX), py(r.pointY), C.mint, 2.5) +
          line(px(p.focus), yy, px(r.pointX), py(r.pointY), C.cyan, 2.5) +
          `<circle data-role="boundary-point" cx="${n(px(r.pointX))}" cy="${n(py(r.pointY))}" r="5" fill="${C.ink}"/>`
      );
      if (pin?.valid)
        body += mark(
          'output',
          `<ellipse data-role="pinned-ellipse" cx="${cx}" cy="${yy}" rx="${n(s * pin.parameters.major)}" ry="${n(s * pin.minor)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"/>`,
          'reference'
        );
      body += mark(
        'firstDistance secondDistance',
        text(
          m,
          337,
          'd₁ ≈ ' + f(r.firstDistance) + ' m · d₂ ≈ ' + f(r.secondDistance) + ' m',
          C.mint,
          o.compact ? 17 : 21
        )
      );
      body += mark(
        'distanceSum stringLength major',
        text(m, 367, 'd₁ + d₂ ≈ ' + f(r.distanceSum) + ' m = 2a', C.cyan, o.compact ? 18 : 23)
      );
      body += mark(
        'minor eccentricity angle',
        text(
          m,
          397,
          'b ≈ ' + f(r.minor) + ' m · t ≈ ' + f(p.angle) + ' rad',
          C.violet,
          o.compact ? 17 : 21
        )
      );
    }
    body += mark(
      'area output separation',
      text(
        m,
        431,
        (slug === 'perpendicular-bisector' ? 'ℓ' : 'A') +
          ' ≈ ' +
          f(r.output) +
          ' ' +
          get(slug).unit,
        C.gold,
        o.compact ? 24 : 29
      ),
      'output'
    );
    return frame(
      slug,
      body,
      o,
      get(slug).limits +
        ' All drawn distances use one fixed scale of ' +
        s +
        ' SVG units per metre in both directions. A dashed violet outline, when present, preserves the pinned measurements.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls.find(v => v.key === d.axis),
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
        y: { min: 0, max: d.max, label: d.primaryLabel + ' (' + d.unit + ')' },
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
        notes: [d.limits]
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
          text(o.compact ? 180 : 380, 210, 'Choose supported measurements', C.gold, 20),
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
    canInterpolate
  });
});
