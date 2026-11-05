/* Flow histories and coordinate charts. The common host owns every clock. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(
      node ? require('./plot-view.js') : root.AtlasPlotView,
      node ? require('./systems-models.js') : root.AtlasSystems
    );
  if (node) module.exports = api;
  root.AtlasDynamicsExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot, Systems) {
  'use strict';
  const number = (key, label, value, min, max, step, unit = '', discrete = false) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {})
  });
  const choice = (key, label, value, values) => ({
    key,
    label,
    value,
    type: 'select',
    options: values.map(([value, label]) => ({ value, label }))
  });
  const pole = () =>
    choice('pole', 'Projection pole', 'north', [
      ['north', 'Project from north'],
      ['south', 'Project from south']
    ]);
  const definitions = {
    hysteresis: {
      title: 'Hysteresis and remembered branches',
      axis: 'steps',
      expression: 'x³ − x − b = 0; retain the nearest stable branch',
      unit: 'position units',
      controls: [
        number('steps', 'Sweep step k', 20, 0, 80, 1, 'steps', true),
        choice('history', 'Initial sweep direction', 'up-down', [
          ['up-down', 'Raise then lower'],
          ['down-up', 'Lower then raise']
        ])
      ],
      limits:
        'A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.',
      cue: 'Gold marks the selected resting position; the same control can retain a different position after a different history.'
    },
    'gradient-flow': {
      title: 'Gradient flow and falling potential',
      axis: 'time',
      expression: 'ṙ = −∇V; dV/dt = −‖∇V‖²',
      unit: 'cost units',
      controls: [
        number('time', 'Elapsed time t', 1, 0, 5, 0.05, 'time units'),
        number('a', 'Horizontal return rate a', 1, 0.25, 2, 0.05, 'per time unit'),
        number('b', 'Vertical return rate b', 0.5, 0.25, 2, 0.05, 'per time unit')
      ],
      limits:
        'V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.',
      cue: 'The point moves along its exact trajectory through potential contours. Its potential falls while the two coordinates can settle at different rates.'
    },
    'circle-manifold': {
      title: 'A circle needs more than one chart',
      axis: 'angle',
      expression: 'u = x/(1−y) or x/(1+y)',
      unit: 'chart units',
      controls: [
        number('angle', 'Position angle θ (degrees)', 30, -180, 180, 1, 'degrees'),
        pole()
      ],
      limits:
        'The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.',
      cue: 'Follow the selected circle point along the projection line into a coordinate on the straight axis. Switch poles to cover the omitted point.'
    },
    'sphere-manifold': {
      title: 'Local coordinates on a sphere',
      axis: 'latitude',
      expression: '(u,v) = (x,y)/(1−z) or (x,y)/(1+z)',
      unit: 'chart units',
      controls: [
        number('latitude', 'Latitude φ (degrees)', 20, -90, 90, 1, 'degrees'),
        number('longitude', 'Longitude λ (degrees)', 35, -180, 180, 1, 'degrees'),
        pole()
      ],
      limits:
        'Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.',
      cue: 'The gold point belongs to the sphere. Its two chart coordinates appear on a separate plane; changing charts changes coordinates without changing the point.'
    },
    'structural-stability': {
      title: 'Perturbing a rule, not just a starting point',
      axis: 'perturbation',
      expression: 'fε(x)=−x+ε or ε−x²',
      unit: 'equilibria',
      controls: [
        number('perturbation', 'Rule perturbation ε', 0.2, -0.5, 0.5, 0.01, 'model units'),
        choice('family', 'Rule family', 'hyperbolic', [
          ['hyperbolic', 'Attracting linear rule'],
          ['fold', 'Critical fold rule']
        ])
      ],
      limits:
        'This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.',
      cue: 'Compare the dashed unperturbed velocity with the perturbed rule. Gold roots show which balance points survive or change.'
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
  const ids = Object.freeze(Object.keys(definitions)),
    has = id => typeof id === 'string' && Object.hasOwn(definitions, id),
    get = id => {
      if (!has(id)) throw new RangeError('Unknown dynamics extension: ' + id);
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
        errors: [{ field: 'parameters', message: 'Use declared parameter values.' }],
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
          : typeof v !== 'number' ||
            !Number.isFinite(v) ||
            v < c.min ||
            v > c.max ||
            (c.discrete && !Number.isInteger(v))
      )
        errors.push({
          field: c.key,
          message: c.discrete
            ? 'Choose a whole sweep step.'
            : 'Use the declared range or listed choice.'
        });
      else parameters[c.key] = v === 0 ? 0 : v;
    }
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }
  const radians = degrees => (degrees * Math.PI) / 180;
  function chartScale(degrees, pole) {
    const half = ((90 - degrees) * Math.PI) / 360;
    if (pole === 'north') {
      if (degrees === -90) return 0;
      return Math.cos(half) / Math.sin(half);
    }
    if (degrees === 90) return 0;
    return Math.sin(half) / Math.cos(half);
  }
  function hysteresis(p) {
    let last = null,
      snaps = 0;
    const trace = [];
    for (let k = 0; k <= p.steps; k++) {
      const raw = k <= 40 ? -0.6 + 0.03 * k : 0.6 - 0.03 * (k - 40),
        bias = p.history === 'up-down' ? raw : -raw,
        roots = Systems.cubicRoots(1, bias),
        stable = roots.filter(x => 3 * x * x - 1 > 0);
      const x =
        last === null
          ? stable[0]
          : stable.reduce((a, b) => (Math.abs(a - last) <= Math.abs(b - last) ? a : b));
      const snapped = last !== null && Math.abs(x - last) > 0.5;
      if (snapped) snaps++;
      trace.push({ step: k, bias, x, snapped, branch: x < 0 ? 'left' : 'right' });
      last = x;
    }
    const current = trace.at(-1);
    return {
      output: current.x,
      bias: current.bias,
      currentX: current.x,
      branch: current.branch,
      snaps,
      trace: freeze(trace),
      potential: current.x ** 4 / 4 - (current.x * current.x) / 2 - current.bias * current.x,
      phase: p.steps <= 40 ? 'First sweep' : 'Return sweep',
      classification: 'Resting on the ' + current.branch + ' branch'
    };
  }
  function evaluate(id, input) {
    const checked = validateParams(id, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let r = {};
    if (id === 'hysteresis') r = hysteresis(p);
    if (id === 'gradient-flow') {
      const x = 2 * Math.exp(-p.a * p.time),
        y = Math.exp(-p.b * p.time),
        gx = p.a * x,
        gy = p.b * y,
        cost = (p.a * x * x + p.b * y * y) / 2;
      r = {
        x,
        y,
        gradientX: gx,
        gradientY: gy,
        velocityX: -gx,
        velocityY: -gy,
        initialCost: 2 * p.a + p.b / 2,
        output: cost,
        cost,
        gradientNorm: Math.hypot(gx, gy),
        dissipation: -(gx * gx + gy * gy),
        classification: 'Exact continuous response'
      };
    }
    if (id === 'circle-manifold' || id === 'sphere-manifold') {
      const angle = id === 'circle-manifold' ? p.angle : p.latitude,
        excluded = angle === (p.pole === 'north' ? 90 : -90),
        longitude = id === 'circle-manifold' ? 0 : radians(p.longitude),
        half = ((90 - angle) * Math.PI) / 360,
        ss = Math.sin(half),
        cc = Math.cos(half),
        vertical = Math.abs(angle) === 90 ? Math.sign(angle) : cc * cc - ss * ss,
        horizontal = Math.abs(angle) === 90 ? 0 : 2 * ss * cc,
        isCircle = id === 'circle-manifold',
        x = isCircle ? horizontal : horizontal === 0 ? 0 : horizontal * Math.cos(longitude),
        y = isCircle ? vertical : horizontal === 0 ? 0 : horizontal * Math.sin(longitude),
        z = isCircle ? 0 : vertical;
      if (excluded)
        return {
          ...checked,
          valid: false,
          status: 'outside_chart',
          output: null,
          x,
          y,
          z,
          denominator: 0,
          chartLabel: 'This chart omits this pole',
          errors: [
            {
              field: 'pole',
              message:
                'The point still belongs to the smooth ' +
                (isCircle ? 'circle' : 'sphere') +
                '. Select the other projection pole to give it finite coordinates.'
            }
          ],
          unit: get(id).unit
        };
      const scale = chartScale(angle, p.pole),
        u = isCircle ? scale : scale === 0 ? 0 : scale * Math.cos(longitude),
        v = isCircle || scale === 0 ? 0 : scale * Math.sin(longitude),
        denominator = p.pole === 'north' ? 2 * ss * ss : 2 * cc * cc,
        rr = u * u + v * v,
        backX = (2 * u) / (1 + rr),
        backY = isCircle
          ? p.pole === 'north'
            ? (rr - 1) / (1 + rr)
            : (1 - rr) / (1 + rr)
          : (2 * v) / (1 + rr),
        backZ = isCircle ? 0 : p.pole === 'north' ? (rr - 1) / (1 + rr) : (1 - rr) / (1 + rr);
      r = {
        x,
        y,
        z,
        u,
        v,
        denominator,
        output: isCircle ? u : Math.hypot(u, v),
        chartRadius: Math.hypot(u, v),
        roundTripError: Math.hypot(backX - x, backY - y, backZ - z),
        chartLabel: p.pole === 'north' ? 'North-pole projection' : 'South-pole projection',
        classification:
          Math.max(Math.abs(u), Math.abs(v)) > 3
            ? 'Coordinate outside the drawn window'
            : 'Coordinates inside the drawn window'
      };
    }
    if (id === 'structural-stability') {
      const e = p.perturbation,
        linear = p.family === 'hyperbolic',
        roots = linear ? [e] : e < 0 ? [] : e === 0 ? [0] : [-Math.sqrt(e), Math.sqrt(e)];
      r = {
        output: roots.length,
        roots,
        originalCount: 1,
        changed: roots.length === 1 ? 0 : 1,
        classification: linear
          ? 'One attracting equilibrium persists'
          : e === 0
            ? 'Critical unperturbed rule'
            : 'Equilibrium count changes',
        rootLabel: roots.length ? roots.map(x => fmt(x)).join(', ') : 'No real roots'
      };
    }
    return { ...checked, ...r, status: 'valid', unit: get(id).unit };
  }
  const fmt = v =>
    Number.isFinite(v)
      ? String(Number(v.toPrecision(4))).replace(/-/g, '−')
      : String(v ?? 'undefined');
  function canInterpolate(id, a, b) {
    if (!evaluate(id, a).valid || !evaluate(id, b).valid) return false;
    const fields = controls(id);
    if (fields.some(c => (c.discrete || c.type === 'select') && a[c.key] !== b[c.key]))
      return false;
    if (id.includes('manifold')) {
      if (a.pole !== b.pole) return false;
      const key = id === 'circle-manifold' ? 'angle' : 'latitude',
        excluded = a.pole === 'north' ? 90 : -90;
      if (Math.min(a[key], b[key]) <= excluded && Math.max(a[key], b[key]) >= excluded)
        return false;
    }
    return true;
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
      primaryLabel: d.title,
      views: ['geometry', 'graph'],
      rendererId: id + '-visual-model',
      sweeps: controls(id).filter(c => c.type !== 'select'),
      canInterpolate: (a, b) => canInterpolate(id, a, b),
      readout: (p, r) =>
        !r.valid
          ? {
              expression: r.chartLabel || 'Choose valid inputs',
              stats: [],
              insight: r.errors.map(e => e.message).join(' ')
            }
          : {
              expression:
                id === 'structural-stability'
                  ? p.family === 'hyperbolic'
                    ? 'fε(x) = −x + ε'
                    : 'fε(x) = ε − x²'
                  : id === 'circle-manifold'
                    ? p.pole === 'north'
                      ? 'u = x/(1−y)'
                      : 'u = x/(1+y)'
                    : id === 'sphere-manifold'
                      ? p.pole === 'north'
                        ? '(u,v) = (x,y)/(1−z)'
                        : '(u,v) = (x,y)/(1+z)'
                      : d.expression,
              stats: [
                {
                  label:
                    id === 'hysteresis'
                      ? 'SELECTED POSITION'
                      : id === 'gradient-flow'
                        ? 'POTENTIAL'
                        : id === 'sphere-manifold'
                          ? 'CHART RADIUS'
                          : id === 'circle-manifold'
                            ? 'CHART COORDINATE'
                            : 'EQUILIBRIA',
                  value: r.output,
                  note: d.unit
                },
                {
                  label: 'INTERPRETATION',
                  value: r.classification,
                  note:
                    id === 'hysteresis'
                      ? 'History matters'
                      : id.includes('manifold')
                        ? 'The point and chart are distinct'
                        : ''
                }
              ],
              insight: d.cue
            }
    };
  }
  function curveValue(id, p, x) {
    if (!has(id) || !Number.isFinite(x)) return null;
    const r = evaluate(id, { ...p, [get(id).axis]: x });
    return r.valid ? r.output : null;
  }
  const C = {
    bg: '#101e2b',
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
  const text = (x, y, v, c = C.ink, size = 16) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}">${esc(v)}</text>`;
  const line = (x, y, xx, yy, c = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${c}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, c, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${c}" ${extra}/>`;
  const group = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}" class="story-cue">${body}</g>`;
  const path = (points, c, extra = '') =>
    `<path d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5" ${extra}/>`;
  function frame(id, o, body, caption, height = 350) {
    const w = o.compact ? 360 : 760,
      scope = 'dynamics-' + String(o.id || id).replace(/[^a-zA-Z0-9-]/g, '-');
    return `<figure class="visualization-frame dynamics-extension"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${height}" role="group" aria-labelledby="${scope}-title ${scope}-desc"><title id="${scope}-title">${esc(get(id).title)}</title><desc id="${scope}-desc">${esc(caption)}</desc><rect width="${w}" height="${height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function geometry(id, p, r, o) {
    const w = o.compact ? 360 : 760,
      mid = w / 2,
      left = 28,
      right = w - 28;
    let b = text(left, 32, get(id).title, C.ink, o.compact ? 20 : 26);
    if (id === 'hysteresis') {
      const fn = x => x ** 4 / 4 - (x * x) / 2 - r.bias * x,
        x = v => mid + ((w - 80) * v) / 4,
        vals = Array.from({ length: 101 }, (_, i) => -2 + i * 0.04),
        low = -1.25,
        high = 3.5,
        y = v => 280 - ((v - low) / (high - low)) * 150;
      b +=
        group(
          'steps bias history',
          path(
            vals.map(v => [x(v), y(fn(v))]),
            C.cyan
          ),
          'input'
        ) +
        group(
          'currentX output potential branch history steps',
          circle(x(r.currentX), y(r.potential), 9, C.gold),
          'output'
        ) +
        group('phase', text(left, 76, r.phase, C.cyan, 19), 'input') +
        text(left, 312, 'Gold: remembered resting position', C.gold, 18);
    } else if (id === 'gradient-flow') {
      const scale = Math.min(65, (w - 70) / 5),
        x = v => mid + v * scale,
        y = v => 225 - v * scale;
      const clip = 'gradient-plot-' + String(o.id || id).replace(/[^a-zA-Z0-9-]/g, '-');
      b += `<defs><clipPath id="${clip}"><rect x="28" y="105" width="${w - 56}" height="180"/></clipPath></defs><g clip-path="url(#${clip})">`;
      b += line(x(-2.4), y(0), x(2.4), y(0)) + line(x(0), y(-0.4), x(0), y(1.8));
      for (const cost of [0.2, 0.5, 1, 2, 4]) {
        const rx = Math.sqrt((2 * cost) / p.a) * scale,
          ry = Math.sqrt((2 * cost) / p.b) * scale;
        b += group(
          'a b cost',
          `<ellipse cx="${mid}" cy="225" rx="${n(rx)}" ry="${n(ry)}" fill="none" stroke="${C.grid}"/>`
        );
      }
      const trace = Array.from({ length: 61 }, (_, i) => {
        const t = (p.time * i) / 60;
        return [x(2 * Math.exp(-p.a * t)), y(Math.exp(-p.b * t))];
      });
      b +=
        group('time a b x y', path(trace, C.cyan), 'input') +
        group('x y output cost', circle(x(r.x), y(r.y), 9, C.gold), 'output') +
        group(
          'velocityX velocityY gradientX gradientY',
          line(x(r.x), y(r.y), x(r.x + 0.25 * r.velocityX), y(r.y + 0.25 * r.velocityY), C.violet)
        ) +
        '</g>' +
        text(left, 76, 'Contours of quadratic potential V', C.gold, 20) +
        group('dissipation', text(left, 318, 'dV/dt = −‖∇V‖² ≤ 0', C.muted, 17));
    } else if (id === 'circle-manifold') {
      const center = mid,
        cy = 215,
        rr = o.compact ? 70 : 90,
        window = o.compact ? 2 : 3,
        xx = v => center + rr * v,
        yy = v => cy - rr * v,
        poleY = p.pole === 'north' ? 1 : -1;
      b +=
        circle(center, cy, rr, 'none', 'stroke="' + C.grid + '" stroke-width="2"') +
        line(xx(-window), cy, xx(window), cy, C.muted) +
        group('pole', circle(center, yy(poleY), 5, C.violet), 'input') +
        group('angle x y', circle(xx(r.x), yy(r.y), 8, C.gold), 'input');
      if (r.valid) {
        const outside = Math.abs(r.u) > window,
          t = outside ? window / Math.abs(r.u) : 1,
          endX = outside ? Math.sign(r.u) * window : r.u,
          endY = outside ? poleY * (1 - t) : 0;
        const projection =
          line(center, yy(poleY), xx(r.x), yy(r.y), C.cyan) +
          line(xx(r.x), yy(r.y), xx(endX), yy(endY), C.cyan);
        b +=
          group(
            'u denominator output',
            projection +
              (outside
                ? `<path data-role="off-window" d="M${xx(endX) - Math.sign(r.u) * 9} ${yy(endY) - 5}L${xx(endX)} ${yy(endY)}L${xx(endX) - Math.sign(r.u) * 9} ${yy(endY) + 5}" fill="none" stroke="${C.mint}" stroke-width="2"/>`
                : circle(xx(r.u), cy, 7, C.mint)),
            'output'
          ) +
          text(left, 76, 'Point and line coordinate', C.mint, 22) +
          text(
            left,
            350,
            outside
              ? 'Coordinate lies beyond this window'
              : 'Coordinate line · window −' + window + ' to ' + window,
            C.muted,
            14
          );
      } else
        b +=
          text(left, 76, 'This chart omits this pole', C.gold, 21) +
          text(left, 350, 'Switch projection pole to cover the point', C.muted, 14);
    } else if (id === 'sphere-manifold') {
      const sx = o.compact ? 105 : 220,
        sy = 205,
        scale = o.compact ? 63 : 85,
        project = (x, y, z) => [
          sx + scale * (0.85 * x - 0.5 * y),
          sy - scale * (0.25 * x + 0.3 * y + 0.9 * z)
        ],
        px = o.compact ? 270 : 555,
        py = 205,
        cs = o.compact ? 18 : 28;
      for (let lat = -60; lat <= 60; lat += 30)
        b += path(
          Array.from({ length: 73 }, (_, i) => {
            const t = (i * Math.PI) / 36,
              a = radians(lat);
            return project(Math.cos(a) * Math.cos(t), Math.cos(a) * Math.sin(t), Math.sin(a));
          }),
          C.grid
        );
      for (let lon = 0; lon < 180; lon += 30)
        b += path(
          Array.from({ length: 73 }, (_, i) => {
            const t = (i * Math.PI) / 36,
              a = radians(lon);
            return project(Math.cos(t) * Math.cos(a), Math.cos(t) * Math.sin(a), Math.sin(t));
          }),
          C.grid
        );
      b +=
        line(px - 3 * cs, py, px + 3 * cs, py, C.muted) +
        line(px, py - 3 * cs, px, py + 3 * cs, C.muted) +
        group('latitude longitude x y z', circle(...project(r.x, r.y, r.z), 8, C.gold), 'input') +
        group('pole', circle(...project(0, 0, p.pole === 'north' ? 1 : -1), 5, C.violet), 'input') +
        text(left, 288, 'Fixed projection', C.muted, 14) +
        text(px - 42, 288, 'Chart plane', C.muted, 14);
      if (r.valid)
        b +=
          group(
            'u v output chartRadius',
            Math.max(Math.abs(r.u), Math.abs(r.v)) <= 3
              ? circle(px + r.u * cs, py - r.v * cs, 7, C.mint)
              : `<path data-role="off-window" d="M${px} ${py}L${px + ((3 * r.u) / Math.max(Math.abs(r.u), Math.abs(r.v))) * cs} ${py - ((3 * r.v) / Math.max(Math.abs(r.u), Math.abs(r.v))) * cs}" stroke="${C.mint}" stroke-width="3" stroke-dasharray="4 3"/>`,
            'output'
          ) +
          text(left, 76, 'Sphere point and chart plane', C.mint, o.compact ? 20 : 26) +
          text(
            left,
            330,
            Math.max(Math.abs(r.u), Math.abs(r.v)) > 3
              ? 'Chart coordinate beyond the drawn window'
              : 'Same point · two local coordinates',
            C.muted,
            14
          );
      else
        b +=
          text(left, 76, 'This chart omits this pole', C.gold, 21) +
          text(left, 330, 'The other chart still covers the point', C.muted, 14);
    } else {
      const x = v => mid + (v * (w - 80)) / 3,
        y = v => 190 - v * 55,
        fn = (v, e) => (p.family === 'hyperbolic' ? -v + e : e - v * v),
        vals = Array.from({ length: 81 }, (_, i) => -1.5 + (3 * i) / 80);
      const clip = 'phase-plot-' + String(o.id || id).replace(/[^a-zA-Z0-9-]/g, '-');
      b += `<defs><clipPath id="${clip}"><rect x="28" y="105" width="${w - 56}" height="180"/></clipPath></defs><g clip-path="url(#${clip})">`;
      b +=
        line(left, 190, right, 190) +
        group(
          'family',
          path(
            vals.map(v => [x(v), y(fn(v, 0))]),
            C.violet,
            'stroke-dasharray="5 5"'
          ),
          'reference'
        ) +
        group(
          'perturbation family',
          path(
            vals.map(v => [x(v), y(fn(v, p.perturbation))]),
            C.cyan
          ),
          'input'
        ) +
        r.roots.map(v => group('roots output', circle(x(v), 190, 8, C.gold), 'output')).join('') +
        '</g>' +
        text(left, 76, 'Zeros of the velocity rule', C.gold, 22) +
        text(left, 312, 'Dashed: original · cyan: perturbed rule', C.muted, 14);
    }
    return frame(id, o, b, get(id).cue, id === 'circle-manifold' ? 370 : 350);
  }
  function graph(id, p, r, o) {
    const d = get(id),
      c = controls(id).find(x => x.key === d.axis);
    let spec;
    if (id === 'hysteresis') {
      const stable = [-1, 1].map(sign => ({
        id: sign < 0 ? 'left-branch' : 'right-branch',
        label: sign < 0 ? 'Left stable equilibria' : 'Right stable equilibria',
        color: sign < 0 ? C.cyan : C.violet,
        points: Array.from({ length: 91 }, (_, i) => {
          const x = sign * (1 / Math.sqrt(3) + i * 0.01);
          return { x: x * x * x - x, y: x };
        })
      }));
      spec = {
        title: 'The same dial, different remembered positions',
        description:
          'Equilibrium branches are continuous curves. Gold dots are the declared whole sweep steps; no line invents a transient snap.',
        x: { label: 'Control b', min: -0.65, max: 0.65 },
        y: { label: 'Selected position', min: -1.5, max: 1.5 },
        series: [
          ...stable,
          {
            id: 'history',
            label: 'Selected history',
            quantity: 'steps history bias output currentX',
            color: C.gold,
            dots: true,
            points: r.trace.map(t => ({ x: t.bias, y: t.x }))
          }
        ],
        current: [
          {
            x: r.bias,
            y: r.output,
            quantity: 'steps bias output currentX',
            label: 'Current sweep step ' + p.steps,
            color: C.mint
          }
        ],
        notes: [
          'Change whole sweep steps with the controls. A quasi-static selected equilibrium is not a time-resolved physical trajectory.'
        ]
      };
    } else {
      const dots = id === 'structural-stability',
        samples = 240,
        points = Array.from({ length: samples + 1 }, (_, i) => {
          const x = c.min + ((c.max - c.min) * i) / samples;
          return { x, y: curveValue(id, p, x) };
        });
      if (id === 'circle-manifold') {
        const cut = p.pole === 'north' ? 90 : -90;
        for (let i = 1; i < points.length; i++)
          if (points[i - 1].x < cut && points[i].x >= cut) points.splice(i, 0, { x: cut, y: null });
      }
      const lo = id === 'circle-manifold' ? -5 : 0,
        hi = id.includes('manifold') ? 5 : id === 'gradient-flow' ? 5.5 : 2.2;
      spec = {
        title: d.title + ' · coordinate and result',
        description: id.includes('manifold')
          ? 'The chosen chart coordinate has a pole; the curve is not connected across it. The displayed coordinate window is bounded, while the mathematical chart is not.'
          : d.cue,
        x: { key: c.key, label: c.label, min: c.min, max: c.max, step: c.step, value: p[c.key] },
        y: { label: d.unit, min: lo, max: hi },
        series: [
          { id: 'result', label: d.title, quantity: c.key + ' output', color: C.gold, points, dots }
        ],
        current: r.valid
          ? [
              {
                x: p[c.key],
                y: r.output,
                quantity: c.key + ' output',
                label: 'Current value',
                color: C.mint,
                draggable: o.sceneControl !== false && r.output >= lo && r.output <= hi
              }
            ]
          : [],
        notes: [
          dots
            ? 'Dots are evaluated equilibrium counts, not fractional equilibria.'
            : id.includes('manifold')
              ? 'Switch projection pole to cover the omitted point.'
              : 'The continuous trajectory is evaluated analytically.'
        ]
      };
    }
    const pin = o.baseline && evaluate(id, o.baseline);
    if (pin?.valid) {
      if (id === 'hysteresis') {
        spec.series.push({
          id: 'pinned-history',
          label: 'Pinned history',
          quantity: 'output',
          color: C.violet,
          dots: true,
          points: pin.trace.map(t => ({ x: t.bias, y: t.x }))
        });
        spec.current.push({
          x: pin.bias,
          y: pin.output,
          quantity: 'output',
          label: 'Pinned result',
          color: C.violet
        });
      } else
        spec.current.push({
          x: pin.parameters[d.axis],
          y: pin.output,
          quantity: 'output',
          label: 'Pinned result',
          color: C.violet
        });
    }
    return Plot.render(spec, { ...o, ...(id === 'hysteresis' ? { sceneControl: false } : {}) });
  }
  function render(id, input, o = {}) {
    if (!has(id)) return '';
    const r = evaluate(id, input);
    if (!r.valid && r.status !== 'outside_chart')
      return frame(
        id,
        o,
        text(24, 55, 'Choose supported inputs', C.gold, 23),
        r.errors.map(e => e.message).join(' '),
        120
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
    canInterpolate,
    render
  });
});
