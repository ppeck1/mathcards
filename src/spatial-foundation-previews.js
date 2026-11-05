/* Compact geometry from the same six evaluators, with a separate caption band. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatialFoundationPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const ids = Object.freeze([
    'spatial-cross-product',
    'scalar-triple-product',
    'coordinate-transformation',
    'vector-projection',
    'angular-velocity',
    'linear-momentum'
  ]);
  const has = id => typeof id === 'string' && ids.includes(id),
    C = {
      grid: '#294352',
      ink: '#eef8f4',
      muted: '#a0b5bc',
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
  const n = v => Number(v.toFixed(5)),
    fmt = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, t, color = C.ink, size = 16, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(t)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${color}" ${extra}/>`;
  function arrow(x, y, a, b, color) {
    if (x === a && y === b) return circle(x, y, 2, color);
    const angle = Math.atan2(b - y, a - x);
    return (
      line(x, y, a, b, color) +
      `<path d="M${n(a - 6 * Math.cos(angle - 0.45))} ${n(b - 6 * Math.sin(angle - 0.45))} L${n(a)} ${n(b)} L${n(a - 6 * Math.cos(angle + 0.45))} ${n(b - 6 * Math.sin(angle + 0.45))}" fill="none" stroke="${color}" stroke-width="2"/>`
    );
  }
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = t => '<g data-preview-layer="caption">' + text(180, 216, t, C.ink, 17) + '</g>';
  const project = (a, ox = 180, oy = 139, k = 18) => [
    ox + (k * (a[0] - a[1])) / Math.SQRT2,
    oy + (k * (a[0] + a[1] - 2 * a[2])) / Math.sqrt(6)
  ];
  const add = (a, b) => a.map((x, i) => x + b[i]);
  const polygon = points => `M${points.map(a => a.map(n).join(' ')).join(' L')} Z`;
  function draw(s, p, r) {
    if (!has(s)) return '';
    let body = '';
    if (s === 'spatial-cross-product') {
      const o = [125, 139],
        a = project(r.u, ...o, 18),
        b = project(r.v, ...o, 18),
        c = project(add(r.u, r.v), ...o, 18);
      body =
        q('output', r.output, text(180, 31, 'Area = ' + fmt(r.output) + ' m²', C.gold, 24)) +
        q(
          'area',
          r.area,
          `<path d="${polygon([o, a, c, b])}" fill="${C.cyan}" fill-opacity=".15" stroke="${C.muted}"/>`
        ) +
        q('u', p.ux, arrow(...o, ...a, C.cyan)) +
        q('v', p.vz, arrow(...o, ...b, C.violet));
      r.normal.forEach(
        (v, i) =>
          (body += q(
            ['nx', 'ny', 'nz'][i],
            v,
            line(278, 84 + i * 30, 278 + v * 5, 84 + i * 30, [C.cyan, C.violet, C.gold][i]) +
              text(306, 89 + i * 30, fmt(v), C.ink, 14)
          ))
      );
      body += caption('A normal beyond the plane.');
    } else if (s === 'scalar-triple-product') {
      const vectors = [r.u, r.v, r.w],
        o = [111, 142],
        points = Array.from({ length: 8 }, (_, mask) =>
          project(
            vectors.reduce((a, v, j) => (mask & (1 << j) ? add(a, v) : a), [0, 0, 0]),
            ...o,
            18
          )
        );
      body = q(
        'output',
        r.output,
        text(180, 30, 'Signed volume = ' + fmt(r.output) + ' m³', C.gold, 23)
      );
      for (let i = 0; i < 8; i++)
        for (let bit = 0; bit < 3; bit++)
          if (!(i & (1 << bit)))
            body += line(...points[i], ...points[i | (1 << bit)], [C.cyan, C.violet, C.gold][bit]);
      body +=
        q('volume', r.volume, text(278, 150, '|T| = ' + fmt(r.volume), C.mint, 17)) +
        caption('Slant and volume differ.');
    } else if (s === 'coordinate-transformation') {
      const ox = 175,
        oy = 142,
        k = 28,
        tip = [ox + p.x * k, oy - p.y * k],
        a = [ox + r.first * r.cosine * k, oy - r.first * r.sine * k];
      body =
        q('output', r.output, text(180, 30, 'x′ = ' + fmt(r.first) + ' m', C.gold, 24)) +
        q(
          'angle',
          p.angle,
          arrow(ox, oy, ox + 68 * r.cosine, oy - 68 * r.sine, C.cyan) +
            arrow(ox, oy, ox - 68 * r.sine, oy - 68 * r.cosine, C.violet)
        ) +
        q('world', r.norm, arrow(ox, oy, ...tip, C.gold)) +
        q('first', r.first, line(...a, ...tip, C.cyan, 'stroke-dasharray="4 3"')) +
        caption('Turn the frame. Keep the arrow.');
    } else if (s === 'vector-projection') {
      const o = [149, 141],
        u = project(r.u, ...o, 22),
        v = project(r.v, ...o, 22),
        part = project(r.projection, ...o, 22);
      body =
        q('output', r.output, text(180, 30, 'Component = ' + fmt(r.output) + ' m', C.gold, 23)) +
        q('u', p.ux, arrow(...o, ...u, C.cyan)) +
        q('v', p.vx, arrow(...o, ...v, C.violet)) +
        q('projection', r.output, arrow(...o, ...part, C.gold)) +
        q('residualNorm', r.residualNorm, line(...part, ...u, C.mint, 'stroke-dasharray="4 3"')) +
        caption('Parallel part. Remaining part.');
    } else if (s === 'angular-velocity') {
      const ox = 173,
        oy = 124,
        k = 48,
        x = ox + r.x * k,
        y = oy - r.y * k;
      body =
        q('output', r.output, text(180, 30, 'Rim speed = ' + fmt(r.output) + ' m/s', C.gold, 24)) +
        q(
          'radius',
          p.radius,
          circle(ox, oy, p.radius * k, 'none', 'stroke="' + C.muted + '" stroke-width="2"') +
            line(ox, oy, x, y, C.violet)
        ) +
        q('angle', r.angle, circle(x, y, 5, C.gold)) +
        q(
          'velocityX',
          r.velocityX,
          arrow(x, y, x + 18 * r.velocityX, y - 18 * r.velocityY, C.cyan)
        ) +
        caption('Steady speed. Turning velocity.');
    } else {
      const ox = 108,
        oy = 128,
        px = 255;
      body =
        q('output', r.output, text(180, 30, 'Momentum = ' + fmt(r.output), C.gold, 24)) +
        text(180, 55, 'kg·m/s', C.muted, 13) +
        q(
          'mass',
          p.mass,
          circle(ox, oy, 22 * Math.sqrt(p.mass / 5), C.violet, 'fill-opacity=".5"')
        ) +
        q('velocity', r.speed, arrow(ox, oy, ox + 24 * p.vx, oy - 24 * p.vy, C.cyan)) +
        q('momentum', r.output, arrow(px, oy, px + 8 * r.px, oy - 8 * r.py, C.gold)) +
        text(105, 176, 'Velocity', C.cyan, 14) +
        text(258, 176, 'Momentum', C.gold, 14) +
        caption('Same direction. Different units.');
    }
    return body;
  }
  function describe(s, p, r) {
    if (!has(s)) return '';
    return s === 'spatial-cross-product'
      ? 'Two three-dimensional metre edges have a square-metre cross product with components ' +
          r.normal.map(fmt).join(', ') +
          '. Its norm is ' +
          fmt(r.output) +
          ' m²; the drawing is a fixed projection.'
      : s === 'scalar-triple-product'
        ? 'The ordered triple product is ' +
          fmt(r.output) +
          ' m³, while geometric volume is ' +
          fmt(r.volume) +
          ' m³. Changing sideways shear does not change the perpendicular dimensions.'
        : s === 'coordinate-transformation'
          ? 'The fixed world arrow has rotated-frame components ' +
            fmt(r.first) +
            ' and ' +
            fmt(r.second) +
            ' metres; its length remains ' +
            fmt(r.norm) +
            ' metres. The frame turns while the arrow stays fixed.'
          : s === 'vector-projection'
            ? 'The signed scalar component is ' +
              fmt(r.output) +
              ' metres. The parallel vector and perpendicular residual reconstruct the displacement; scaling the nonzero reference direction does not change that vector projection.'
            : s === 'angular-velocity'
              ? 'At ' +
                fmt(p.time) +
                ' seconds the marked point has angular displacement ' +
                fmt(r.angle) +
                ' radians. Its tangent velocity changes direction while rim speed is ' +
                fmt(r.output) +
                ' metres per second.'
              : 'The cart momentum has components ' +
                fmt(r.px) +
                ' and ' +
                fmt(r.py) +
                ' kg·m/s and magnitude ' +
                fmt(r.output) +
                '. Velocity and momentum arrows use separate declared scales because their units differ.';
  }
  return Object.freeze({ has, list: () => ids.slice(), draw, describe });
});
