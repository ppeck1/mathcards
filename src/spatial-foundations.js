/* Vectors, coordinates and motion share one right-handed frame and the host clock. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasSpatialFoundations = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const field = (key, label, value, min, max, step = 0.05, unit = 'm') => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit
  });
  const vectors = [
    field('ux', 'First edge, x component', 2, -2, 2),
    field('uy', 'First edge, y component', 1, -2, 2),
    field('uz', 'First edge, z component', 1, -2, 2),
    field('vx', 'Second edge, x component', 1, -2, 2),
    field('vy', 'Second edge, y component', 2, -2, 2),
    field('vz', 'Second edge, z component', -1, -2, 2)
  ];
  const definitions = {
    'spatial-cross-product': {
      title: 'Cross products in space',
      axis: 'vz',
      expression: 'n = u × v; A = ‖n‖',
      unit: 'm²',
      primaryLabel: 'Parallelogram area',
      controls: vectors,
      setting:
        'Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.',
      limits:
        'The normal has square-metre components because both input vectors are lengths. Its norm is parallelogram area; the corresponding triangle has half that area. A zero cross product has no distinguished normal direction. The fixed projection is not an area measurement.'
    },
    'scalar-triple-product': {
      title: 'The scalar triple product',
      axis: 'height',
      expression: 'T = u · (v × w); V = |T|',
      unit: 'm³',
      primaryLabel: 'Signed triple product',
      controls: [
        field('length', 'First edge length a', 2, 0, 3),
        field('width', 'Second perpendicular extent b', 3, 0, 3),
        field('height', 'Signed third-edge height h', 1, -2, 2),
        field('shear', 'Second-edge shear s', 1, -2, 2)
      ],
      setting:
        'A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.',
      limits:
        'This triangular edge family has signed triple product a b h. Geometric volume is its absolute value. Zero height or a collapsed base gives zero volume even if visible slanted edges remain. The displayed drawing is a fixed projection, not a volume scale.'
    },
    'coordinate-transformation': {
      title: 'Changing an orthonormal frame',
      axis: 'angle',
      expression: 'x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ',
      unit: 'm',
      primaryLabel: 'First rotated-frame component',
      controls: [
        field('x', 'Fixed world x component', 2, -3, 3),
        field('y', 'Fixed world y component', 1, -3, 3),
        field('angle', 'Frame angle θ', 30, -180, 180, 1, 'deg')
      ],
      setting:
        'A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.',
      limits:
        'This is a passive coordinate change between orthonormal frames. Coordinates transform by the transpose of the frame rotation; the vector itself does not rotate. Angle controls use degrees, converted to radians for trigonometry.'
    },
    'vector-projection': {
      title: 'Vector projection and its residual',
      axis: 'ux',
      expression: 'c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v',
      unit: 'm',
      primaryLabel: 'Signed scalar component',
      controls: vectors.map(c => ({
        ...c,
        value: { ux: 2, uy: 1, uz: 1, vx: 1, vy: 1, vz: 0 }[c.key],
        label:
          c.key[0] === 'u'
            ? 'Measured displacement, ' + c.key[1] + ' component'
            : 'Reference direction, ' + c.key[1] + ' component'
      })),
      setting:
        'A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.',
      limits:
        'The reference vector must be nonzero. Multiplying it by a positive factor leaves the projection unchanged, while reversing it reverses the signed scalar component and preserves the projection vector. The residual is orthogonal to the reference; projection is not the full displacement.'
    },
    'angular-velocity': {
      title: 'Angular velocity and rim motion',
      axis: 'time',
      expression: 'θ = ωt; v = ω × r; speed = |ω|r',
      unit: 'm/s',
      primaryLabel: 'Rim speed',
      controls: [
        field('time', 'Elapsed time t', 1, 0, 3, 0.02, 's'),
        field('radius', 'Rim radius r', 1, 0, 2),
        field('omega', 'Signed angular velocity ω', 1.5, -4, 4, 0.05, 'rad/s')
      ],
      setting:
        'A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.',
      limits:
        'The exact constant-rate position uses θ=ωt in radians. Speed is nonnegative even when angular velocity is negative. At the centre or at zero rate the rim velocity is zero and has no direction. No force, rolling contact or angular acceleration is modeled.'
    },
    'linear-momentum': {
      title: 'Linear momentum',
      axis: 'vx',
      expression: 'p = m v; |p| = m|v|',
      unit: 'kg·m/s',
      primaryLabel: 'Momentum magnitude',
      controls: [
        field('mass', 'Cart mass m', 2, 0.5, 5, 0.05, 'kg'),
        field('vx', 'Velocity x component', 1, -3, 3, 0.05, 'm/s'),
        field('vy', 'Velocity y component', 1, -3, 3, 0.05, 'm/s')
      ],
      setting:
        'A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.',
      limits:
        'This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.'
    }
  };
  const freeze = x => {
    if (x && typeof x === 'object' && !Object.isFrozen(x)) {
      Object.values(x).forEach(freeze);
      Object.freeze(x);
    }
    return x;
  };
  freeze(definitions);
  const has = s => typeof s === 'string' && Object.hasOwn(definitions, s),
    get = s => {
      if (!has(s)) throw new RangeError('Unknown spatial foundation: ' + s);
      return definitions[s];
    };
  const defaults = s => Object.fromEntries(get(s).controls.map(c => [c.key, c.value]));
  const controls = s => get(s).controls.map(({ value, ...c }) => ({ ...c }));
  const clean = x => (x === 0 ? 0 : x);
  const cross = (a, b) =>
    [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]].map(clean);
  const dot = (a, b) => a.reduce((sum, v, i) => sum + v * b[i], 0);
  const norm = a => Math.hypot(...a),
    plus = (a, b) => a.map((v, i) => v + b[i]),
    scale = (a, k) => a.map(v => v * k);
  function validateParams(s, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(s) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use an object of declared numeric inputs.' }],
        warnings: []
      };
    const fields = get(s).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key))
        errors.push({ field: key, message: 'Unknown parameter.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (typeof v !== 'number' || !Number.isFinite(v) || v < c.min || v > c.max)
        errors.push({ field: c.key, message: 'Use a finite number in the declared range.' });
      else parameters[c.key] = clean(v);
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function evaluate(s, input) {
    const checked = validateParams(s, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let r = {};
    if (s === 'spatial-cross-product' || s === 'vector-projection') {
      const u = [p.ux, p.uy, p.uz],
        v = [p.vx, p.vy, p.vz],
        n = cross(u, v);
      if (s === 'spatial-cross-product')
        r = {
          u,
          v,
          normal: n,
          nx: n[0],
          ny: n[1],
          nz: n[2],
          output: norm(n),
          area: norm(n),
          triangleArea: norm(n) / 2,
          normalLabel: norm(n) === 0 ? 'No normal direction' : 'Ordered right-handed normal'
        };
      else {
        const largest = Math.max(...v.map(Math.abs));
        if (largest === 0)
          return {
            ...checked,
            valid: false,
            status: 'undefined_direction',
            output: null,
            unit: get(s).unit,
            message:
              'Choose a nonzero reference vector; zero does not define a projection direction.',
            errors: [{ field: 'reference', message: 'The reference vector is zero.' }]
          };
        const scaled = v.map(x => x / largest),
          scaledNorm = norm(scaled),
          unit = scaled.map(x => x / scaledNorm),
          parallel = dot(u, unit),
          projection = scale(unit, parallel),
          residual = u.map((x, i) => clean(x - projection[i]));
        r = {
          u,
          v,
          projection,
          residual,
          unitX: unit[0],
          unitY: unit[1],
          unitZ: unit[2],
          parallel,
          referenceNorm: largest * scaledNorm,
          px: projection[0],
          py: projection[1],
          pz: projection[2],
          rx: residual[0],
          ry: residual[1],
          rz: residual[2],
          residualNorm: norm(residual),
          output: parallel
        };
      }
    }
    if (s === 'scalar-triple-product') {
      const u = [p.length, 0, 0],
        v = [p.shear, p.width, 0],
        w = [1, 0.5, p.height],
        normal = cross(v, w),
        triple = dot(u, normal);
      r = {
        u,
        v,
        w,
        normal,
        nx: normal[0],
        ny: normal[1],
        nz: normal[2],
        baseArea: p.length * p.width,
        output: clean(triple),
        volume: Math.abs(triple)
      };
    }
    if (s === 'coordinate-transformation') {
      const theta = (p.angle * Math.PI) / 180,
        c = Math.cos(theta),
        sn = Math.sin(theta),
        first = p.x * c + p.y * sn,
        second = -p.x * sn + p.y * c;
      r = {
        theta,
        cosine: c,
        sine: sn,
        first: clean(first),
        second: clean(second),
        output: clean(first),
        norm: Math.hypot(p.x, p.y),
        reconstructedX: first * c - second * sn,
        reconstructedY: first * sn + second * c
      };
    }
    if (s === 'angular-velocity') {
      const angle = p.omega * p.time,
        co = Math.cos(angle),
        sn = Math.sin(angle),
        x = p.radius * co,
        y = p.radius * sn,
        velocityX = -p.omega * y,
        velocityY = p.omega * x;
      r = {
        angle,
        x,
        y,
        velocityX: clean(velocityX),
        velocityY: clean(velocityY),
        output: Math.abs(p.omega) * p.radius,
        arcLength: p.radius * angle,
        directionLabel:
          p.omega === 0 || p.radius === 0
            ? 'Zero velocity'
            : p.omega > 0
              ? 'Counterclockwise'
              : 'Clockwise'
      };
    }
    if (s === 'linear-momentum') {
      const px = p.mass * p.vx,
        py = p.mass * p.vy;
      r = {
        px: clean(px),
        py: clean(py),
        speed: Math.hypot(p.vx, p.vy),
        output: Math.hypot(px, py)
      };
    }
    const underflow =
      (s === 'spatial-cross-product' &&
        r.output === 0 &&
        norm(r.u) > 0 &&
        norm(r.v) > 0 &&
        norm(
          cross(
            r.u.map(x => x / Math.max(...r.u.map(Math.abs))),
            r.v.map(x => x / Math.max(...r.v.map(Math.abs)))
          )
        ) > 0) ||
      (s === 'scalar-triple-product' &&
        r.output === 0 &&
        p.length > 0 &&
        p.width > 0 &&
        p.height !== 0) ||
      (s === 'angular-velocity' && r.output === 0 && p.radius > 0 && p.omega !== 0) ||
      (s === 'linear-momentum' && r.output === 0 && (p.vx !== 0 || p.vy !== 0));
    if (underflow)
      return {
        ...checked,
        valid: false,
        status: 'numeric_precision',
        output: null,
        unit: get(s).unit,
        message: 'The nonzero result is below floating-point range. Increase the input magnitudes.',
        errors: [
          {
            field: 'precision',
            message: 'A nonzero mathematical magnitude underflows this numeric representation.'
          }
        ]
      };
    return { ...checked, ...r, status: 'valid', unit: get(s).unit };
  }
  const fmt = x =>
    Number.isFinite(x)
      ? String(Number(x.toPrecision(4))).replace(/-/g, '−')
      : String(x ?? 'undefined');
  const tuple = a => '(' + a.map(fmt).join(', ') + ')';
  const cues = {
    'spatial-cross-product':
      'Cyan and violet are the two metre edges. The gold component bars measure their square-metre normal; its norm is area.',
    'scalar-triple-product':
      'The projected edges make a slanted frame. The signed height changes orientation; the separate volume reading takes absolute value.',
    'coordinate-transformation':
      'The gold vector stays fixed as the cyan and violet measuring directions turn. Dashed segments are the two component projections.',
    'vector-projection':
      'Gold is the parallel part, and the dashed residual reaches the measured displacement. Read lengths from the computed values, not this fixed projection.',
    'angular-velocity':
      'The marked point follows the wheel. Its tangent arrow changes direction while the nonnegative speed stays constant for fixed radius and rate.',
    'linear-momentum':
      'Cyan velocity and gold momentum point the same way. They have separate fixed scales; cart-circle area represents mass.'
  };
  function specs(s) {
    const d = get(s);
    return {
      title: d.title,
      expression: d.expression,
      axis: d.axis,
      unit: d.unit,
      primaryLabel: d.primaryLabel,
      setting: d.setting,
      limits: d.limits,
      views: ['geometry', 'graph'],
      rendererId: s + '-visual-model',
      sweeps: controls(s),
      readout: (p, r) => {
        if (!r.valid)
          return {
            expression: r.message || 'Use supported inputs',
            stats: [],
            insight: r.errors?.map(x => x.message).join(' ') || ''
          };
        const extra =
          s === 'spatial-cross-product'
            ? { label: 'NORMAL Z COMPONENT', value: r.nz, note: 'm² in the right-handed frame' }
            : s === 'scalar-triple-product'
              ? { label: 'GEOMETRIC VOLUME', value: r.volume, note: 'm³, nonnegative' }
              : s === 'coordinate-transformation'
                ? { label: 'SECOND COMPONENT', value: r.second, note: 'm in the rotated frame' }
                : s === 'vector-projection'
                  ? { label: 'PERPENDICULAR RESIDUAL', value: r.residualNorm, note: 'm' }
                  : s === 'angular-velocity'
                    ? { label: 'ANGULAR DISPLACEMENT', value: r.angle, note: 'rad, signed' }
                    : { label: 'HORIZONTAL MOMENTUM', value: r.px, note: 'kg·m/s' };
        return {
          expression: d.expression,
          stats: [{ label: d.primaryLabel.toUpperCase(), value: r.output, note: d.unit }, extra],
          insight: cues[s]
        };
      }
    };
  }
  const C = {
    bg: '#101e2b',
    grid: '#294352',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276',
    violet: '#b8a1ff',
    red: '#ff8791'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5));
  const text = (x, y, value, color = C.ink, size = 16, anchor = 'start') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${color}" ${extra}/>`;
  const group = (keys, body, part = 'intermediate') =>
    `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}">${body}</g>`;
  function arrow(x, y, a, b, color, extra = '') {
    if (x === a && y === b) return circle(x, y, 2, color);
    const theta = Math.atan2(b - y, a - x);
    return (
      line(x, y, a, b, color, extra) +
      `<path d="M${n(a - 7 * Math.cos(theta - 0.45))} ${n(b - 7 * Math.sin(theta - 0.45))} L${n(a)} ${n(b)} L${n(a - 7 * Math.cos(theta + 0.45))} ${n(b - 7 * Math.sin(theta + 0.45))}" fill="none" stroke="${color}" stroke-width="2"/>`
    );
  }
  const project = (a, ox, oy, k) => [
    ox + (k * (a[0] - a[1])) / Math.SQRT2,
    oy + (k * (a[0] + a[1] - 2 * a[2])) / Math.sqrt(6)
  ];
  const path = points => points.map((a, i) => (i ? 'L' : 'M') + a.map(n).join(' ')).join(' ');
  function axes3(ox, oy, k) {
    let out = '';
    for (let j = 0; j < 3; j++) {
      const v = [0, 0, 0];
      v[j] = 2.3;
      const q = project(v, ox, oy, k);
      out +=
        arrow(ox, oy, ...q, C.muted) + text(q[0] + 4, q[1] + 4, ['x', 'y', 'z'][j], C.muted, 13);
    }
    return out;
  }
  function componentBars(values, keys, w, top, maximum, unit) {
    const compact = w < 500,
      left = compact ? 32 : w * 0.56,
      right = w - 25,
      mid = (left + right) / 2,
      scale = (right - left - 30) / (2 * maximum);
    let out = '';
    values.forEach((v, i) => {
      const y = top + i * 31;
      out += group(
        keys[i],
        text(
          left,
          y - 5,
          ['Horizontal', 'Depth', 'Vertical'][i] + ' component · ' + unit,
          C.muted,
          13
        ) +
          line(mid, y + 3, mid + v * scale, y + 3, [C.cyan, C.violet, C.gold][i]) +
          circle(mid + v * scale, y + 3, 4, [C.cyan, C.violet, C.gold][i])
      );
    });
    return out;
  }
  function geometry(s, p, r, o, w) {
    const compact = w < 500;
    let body = '',
      height = compact ? 440 : 350;
    if (s === 'spatial-cross-product') {
      const ox = compact ? w / 2 : w * 0.27,
        oy = compact ? 173 : 208,
        k = compact ? 12 : 17,
        U = project(r.u, ox, oy, k),
        V = project(r.v, ox, oy, k),
        UV = project(plus(r.u, r.v), ox, oy, k);
      body +=
        axes3(ox, oy, k) +
        group(
          'ux uy uz vx vy vz area output',
          `<path d="${path([[ox, oy], U, UV, V])} Z" fill="${C.cyan}" fill-opacity=".12" stroke="${C.muted}"/>`
        ) +
        group('ux uy uz', arrow(ox, oy, ...U, C.cyan), 'input') +
        group('vx vy vz', arrow(ox, oy, ...V, C.violet), 'input') +
        text(24, compact ? 267 : 315, 'Fixed projection; area from components', C.muted, 14) +
        componentBars(r.normal, ['nx', 'ny', 'nz'], w, compact ? 300 : 125, 8, 'm²');
      height = compact ? 405 : 350;
    } else if (s === 'scalar-triple-product') {
      const ox = compact ? 150 : w * 0.25,
        oy = compact ? 190 : 218,
        k = compact ? 18 : 23,
        vertices = [0, 1, 2, 3, 4, 5, 6, 7]
          .map(mask =>
            plus(
              plus(scale(r.u, mask & 1 ? 1 : 0), scale(r.v, mask & 2 ? 1 : 0)),
              scale(r.w, mask & 4 ? 1 : 0)
            )
          )
          .map(v => project(v, ox, oy, k));
      body += axes3(ox, oy, k);
      let box = '';
      for (let i = 0; i < 8; i++)
        for (let bit = 0; bit < 3; bit++)
          if (!(i & (1 << bit)))
            box += group(
              bit === 0 ? 'length u' : bit === 1 ? 'width shear v' : 'height w',
              line(...vertices[i], ...vertices[i | (1 << bit)], [C.cyan, C.violet, C.gold][bit]),
              'input'
            );
      body += group('output volume', box, 'output');
      body +=
        group(
          'output volume',
          text(compact ? 24 : w * 0.55, compact ? 315 : 165, 'Signed orientation', C.gold, 20) +
            text(
              compact ? 24 : w * 0.55,
              compact ? 350 : 207,
              'Volume uses absolute value',
              C.mint,
              20
            ),
          'output'
        ) +
        group(
          'output',
          arrow(
            compact ? 180 : 568,
            compact ? 330 : 182,
            (compact ? 180 : 568) + r.output * 8,
            compact ? 330 : 182,
            C.gold
          ),
          'output'
        ) +
        group(
          'volume',
          arrow(
            compact ? 24 : 418,
            compact ? 365 : 224,
            (compact ? 24 : 418) + r.volume * 8,
            compact ? 365 : 224,
            C.mint
          ),
          'output'
        ) +
        text(24, compact ? 389 : 315, 'Fixed projection · perpendicular height', C.muted, 13);
      height = compact ? 420 : 350;
    } else if (s === 'coordinate-transformation') {
      const ox = w / 2,
        oy = compact ? 240 : 225,
        k = compact ? 31 : 38,
        tip = [ox + p.x * k, oy - p.y * k],
        e1 = [r.cosine, r.sine],
        e2 = [-r.sine, r.cosine],
        q1 = [ox + r.first * e1[0] * k, oy - r.first * e1[1] * k],
        q2 = [ox + r.second * e2[0] * k, oy - r.second * e2[1] * k];
      body +=
        line(ox - 120, oy, ox + 120, oy) +
        line(ox, oy - 120, ox, oy + 120) +
        group(
          'angle cosine sine',
          arrow(ox, oy, ox + e1[0] * 105, oy - e1[1] * 105, C.cyan) +
            arrow(ox, oy, ox + e2[0] * 105, oy - e2[1] * 105, C.violet),
          'input'
        ) +
        group('x y norm', arrow(ox, oy, ...tip, C.gold), 'reference') +
        group(
          'first output',
          line(...q1, ...tip, C.cyan, 'stroke-dasharray="5 4"') + line(ox, oy, ...q1, C.cyan),
          'output'
        ) +
        group(
          'second',
          line(...q2, ...tip, C.violet, 'stroke-dasharray="5 4"') + line(ox, oy, ...q2, C.violet)
        ) +
        text(24, compact ? 390 : 342, 'Fixed arrow · rotating measuring frame', C.muted, 14);
      height = compact ? 420 : 365;
    } else if (s === 'vector-projection') {
      const ox = compact ? w / 2 : w * 0.27,
        oy = compact ? 180 : 208,
        k = compact ? 22 : 28,
        U = project(r.u, ox, oy, k),
        V = project([r.unitX, r.unitY, r.unitZ], ox, oy, k),
        P = project(r.projection, ox, oy, k);
      body +=
        axes3(ox, oy, k) +
        group('vx vy vz referenceNorm unitX unitY unitZ', arrow(ox, oy, ...V, C.violet), 'input') +
        group('ux uy uz u', arrow(ox, oy, ...U, C.cyan), 'input') +
        group('projection px py pz', arrow(ox, oy, ...P, C.gold), 'output') +
        group(
          'residual rx ry rz residualNorm',
          line(...P, ...U, C.mint, 'stroke-dasharray="5 4"')
        ) +
        text(24, compact ? 282 : 315, 'Purple unit guide · gold parallel part', C.muted, 13);
      const left = compact ? 32 : w * 0.56,
        mid = (left + w - 25) / 2,
        barScale = (w - 25 - left - 30) / 8;
      [
        [r.output, 'output parallel', 'Signed along-guide component', C.gold],
        [r.residualNorm, 'residualNorm', 'Perpendicular residual', C.mint]
      ].forEach(([value, keys, label, color], i) => {
        const y = (compact ? 315 : 150) + i * 50;
        body += group(
          keys,
          text(left, y, label + ' · m', color, 13) +
            arrow(mid, y + 15, mid + value * barScale, y + 15, color),
          i ? 'intermediate' : 'output'
        );
      });
      height = compact ? 420 : 350;
    } else if (s === 'angular-velocity') {
      const ox = compact ? w / 2 : w * 0.32,
        oy = compact ? 242 : 224,
        k = compact ? 64 : 72,
        R = p.radius * k,
        x = ox + r.x * k,
        y = oy - r.y * k,
        velocityScale = compact ? 7 : 10;
      body +=
        group(
          'radius',
          circle(ox, oy, R, 'none', 'stroke="' + C.muted + '" stroke-width="2"') +
            line(ox, oy, x, y, C.violet),
          'input'
        ) +
        group('time omega angle x y', circle(x, y, 7, C.gold), 'input') +
        group(
          'time radius omega velocityX velocityY output',
          arrow(x, y, x + r.velocityX * velocityScale, y - r.velocityY * velocityScale, C.cyan),
          'output'
        ) +
        text(compact ? 24 : w * 0.62, compact ? 408 : 155, r.directionLabel, C.ink, 18) +
        text(
          compact ? 24 : w * 0.62,
          compact ? 435 : 190,
          'Cyan arrow: tangent velocity',
          C.muted,
          16
        );
      height = compact ? 462 : 380;
    } else {
      const ox = compact ? w / 2 : w * 0.3,
        vy = compact ? 181 : 173,
        py = compact ? 361 : 173,
        px = compact ? ox : w * 0.72,
        vscale = 24,
        pscale = 4.8;
      body +=
        group(
          'mass',
          circle(ox, vy, 24 * Math.sqrt(p.mass / 5), C.violet, 'fill-opacity=".45"'),
          'input'
        ) +
        group(
          'vx vy speed',
          arrow(ox, vy, ox + p.vx * vscale, vy - p.vy * vscale, C.cyan),
          'input'
        ) +
        text(24, compact ? 279 : 304, 'Velocity · 24 px per m/s', C.cyan, 14) +
        group(
          'mass px py output',
          arrow(px, py, px + r.px * pscale, py - r.py * pscale, C.gold),
          'output'
        ) +
        text(
          compact ? 24 : w * 0.55,
          compact ? 465 : 304,
          'Momentum · 4.8 px per kg·m/s',
          C.gold,
          14
        );
      height = compact ? 490 : 350;
    }
    return { body, height };
  }
  function curveValue(s, input, value) {
    if (!has(s) || !Number.isFinite(value)) return null;
    const r = evaluate(s, { ...input, [get(s).axis]: value });
    return r.valid ? r.output : null;
  }
  function graph(s, p, r, o) {
    const d = get(s),
      axis = controls(s).find(c => c.key === d.axis),
      at = parameters =>
        Array.from({ length: 81 }, (_, i) => {
          const x = axis.min + ((axis.max - axis.min) * i) / 80,
            v = evaluate(s, { ...parameters, [axis.key]: x });
          return { x, r: v };
        }),
      rows = at(p),
      series = [];
    const add = (key, label, color) =>
      series.push({
        id: key,
        label,
        color,
        quantity: key + ' ' + (key === 'output' ? d.axis : ''),
        points: rows.map(({ x, r }) => ({ x, y: r.valid ? r[key] : null }))
      });
    if (s === 'spatial-cross-product') {
      add('nx', 'Normal x', C.cyan);
      add('ny', 'Normal y', C.violet);
      add('nz', 'Normal z', C.mint);
    }
    if (s === 'coordinate-transformation') add('second', 'Second rotated component', C.violet);
    if (s === 'vector-projection') add('residualNorm', 'Residual magnitude', C.mint);
    if (s === 'angular-velocity') {
      add('velocityX', 'Tangent velocity x', C.cyan);
      add('velocityY', 'Tangent velocity y', C.violet);
    }
    if (s === 'linear-momentum') {
      add('px', 'Momentum x', C.cyan);
      add('py', 'Momentum y', C.violet);
    }
    add('output', d.primaryLabel, C.gold);
    const current = [
        {
          x: p[axis.key],
          y: r.output,
          label: 'Current ' + d.primaryLabel.toLowerCase(),
          quantity: axis.key + ' output',
          color: C.gold,
          draggable: o.sceneControl !== false
        }
      ],
      pin = o.baseline && evaluate(s, o.baseline);
    if (pin?.valid) {
      series.push({
        id: 'pinned',
        label: 'Pinned result',
        quantity: 'output',
        color: C.red,
        points: at(pin.parameters).map(({ x, r }) => ({ x, y: r.valid ? r.output : null }))
      });
      current.push({
        x: pin.parameters[axis.key],
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.red
      });
    }
    const values = series.flatMap(line => line.points.map(v => v.y)).filter(Number.isFinite),
      low = Math.min(0, ...values),
      high = Math.max(0, ...values),
      pad = (high - low || 1) * 0.12;
    return Plot.render(
      {
        title: d.title + ' · one changing input',
        description:
          'Other inputs stay fixed. ' +
          (s === 'angular-velocity'
            ? 'The signed velocity components change while their norm stays constant.'
            : s === 'coordinate-transformation'
              ? 'The component curves change with the frame while the vector stays fixed.'
              : cues[s]),
        x: {
          key: axis.key,
          label: axis.label,
          min: axis.min,
          max: axis.max,
          step: axis.step,
          value: p[axis.key]
        },
        y: { label: d.unit, min: low - pad, max: high + pad },
        series,
        current,
        notes: [d.limits]
      },
      o
    );
  }
  function render(s, input, o = {}) {
    if (!has(s)) return '';
    const d = get(s),
      r = evaluate(s, input),
      w = o.compact ? 360 : 760,
      id =
        'spatial-foundation-' +
        Array.from(String(o.id || s))
          .map(c => (/[A-Za-z0-9-]/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    if (r.valid && o.view === 'graph') return graph(s, r.parameters, r, o);
    const content = r.valid
      ? geometry(s, r.parameters, r, o, w)
      : {
          body: text(
            24,
            115,
            r.status === 'undefined_direction'
              ? 'Choose a nonzero reference vector'
              : 'Choose supported inputs',
            C.gold,
            o.compact ? 18 : 24
          ),
          height: 165
        };
    const body =
      text(24, 33, d.title, C.ink, o.compact ? 20 : 26) +
      group(
        'output',
        text(24, 72, r.valid ? d.primaryLabel : 'Result undefined', C.gold, o.compact ? 20 : 27),
        'output'
      ) +
      content.body;
    return `<figure class="visualization-frame spatial-foundation-scene" data-spatial-foundation="${s}"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${content.height}" role="group" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(d.title)}</title><desc id="${id}-desc">${esc(d.setting + ' ' + d.limits)}</desc><rect width="${w}" height="${content.height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(r.valid ? cues[s] : r.message || 'Use the declared finite ranges.')}</figcaption></figure>`;
  }
  return Object.freeze({
    ids: Object.freeze(Object.keys(definitions)),
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    cross,
    dot,
    norm,
    project
  });
});
