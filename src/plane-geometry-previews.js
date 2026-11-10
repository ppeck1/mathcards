/* Evaluated previews share the fixed-scale measured geometry of their lessons. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plane-geometry.js') : root.AtlasPlaneGeometry);
  if (node) module.exports = api;
  root.AtlasPlaneGeometryPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (M) {
  'use strict';
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
  const text = (x, y, v, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = v => '<g data-preview-layer="caption">' + text(180, 216, v) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    const outputLabel = slug === 'perpendicular-bisector' ? 'Separation ℓ' : 'Area A';
    let body = q(
      'output',
      r.output,
      text(180, 31, outputLabel + ' ≈ ' + f(r.output) + ' ' + M.specs(slug).unit, C.gold, 25)
    );
    if (slug === 'triangle-measurement' || slug === 'similar-triangles') {
      const s = slug === 'triangle-measurement' ? 18 : 11,
        cx = 60,
        cy = 157,
        px = x => cx + s * x,
        py = y => cy - s * y,
        points = vertices => vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' '),
        base = slug === 'triangle-measurement' ? p.base : r.base,
        height = slug === 'triangle-measurement' ? p.height : r.height,
        apex = slug === 'triangle-measurement' ? r.apex : 0;
      body += text(
        180,
        59,
        slug === 'similar-triangles'
          ? 'One common length factor k = ' + f(p.scale)
          : 'Base ' + f(base) + ' m · height ' + f(height) + ' m',
        C.muted,
        16
      );
      const reference =
        slug === 'similar-triangles'
          ? [
              [0, 0],
              [3, 0],
              [0, 4]
            ]
          : [
              [0, 0],
              [base, 0],
              [base / 2, height]
            ];
      body += `<polygon points="${points(reference)}" fill="none" stroke="${C.muted}" stroke-width="1.5" stroke-dasharray="4 3"/>`;
      body += q(
        'area',
        r.area,
        `<polygon data-role="measured-triangle" data-scale="${s}" points="${points(r.vertices)}" fill="${C.gold}" fill-opacity=".18" stroke="${C.gold}" stroke-width="2.5"/>`
      );
      body += q('base', base, line(px(0), py(0), px(base), py(0), C.cyan, 3));
      body += q('height', height, line(px(apex), py(0), px(apex), py(height), C.mint, 2.5));
      if (slug === 'similar-triangles')
        body +=
          q('areaFactor', r.areaFactor, text(250, 108, 'Area × ' + f(r.areaFactor), C.mint, 19)) +
          q(
            'hypotenuse',
            r.hypotenuse,
            text(250, 143, 'Sloping side ' + f(r.hypotenuse) + ' m', C.muted, 16)
          );
      else
        body +=
          q('skew', p.skew, text(250, 108, 'Shift s = ' + f(p.skew) + ' m', C.violet, 18)) +
          text(250, 143, 'Same b, h → same area', C.muted, 15);
      body += line(48, 178, 48 + s, 178, C.muted, 2) + text(75, 182, '1 m', C.muted, 13, 'start');
      return (
        body +
        caption(
          slug === 'similar-triangles'
            ? 'Lengths scale once. Area scales twice.'
            : 'Move the top. Follow the height.'
        )
      );
    }
    if (slug === 'perpendicular-bisector') {
      const cx = 100,
        cy = 127,
        s = 11,
        px = x => cx + s * x,
        py = y => cy - s * y;
      body += text(
        180,
        59,
        'Equal radius ' + f(p.radius) + ' m · stakes ' + f(p.distance) + ' m',
        C.muted,
        16
      );
      for (const x of [-r.halfDistance, r.halfDistance])
        body += q(
          'radius',
          p.radius,
          `<circle cx="${n(px(x))}" cy="${cy}" r="${n(p.radius * s)}" fill="none" stroke="${C.cyan}" stroke-width="2"/>`
        );
      body += q(
        'distance',
        p.distance,
        line(px(-r.halfDistance), cy, px(r.halfDistance), cy, C.muted, 2)
      );
      for (const y of r.intersectionCount === 2 ? [-r.height, r.height] : [0])
        body += q(
          'intersectionCount',
          r.intersectionCount,
          `<circle cx="${cx}" cy="${n(py(y))}" r="4" fill="${C.gold}"/>`
        );
      if (r.intersectionCount === 2)
        body += q(
          'separation',
          r.separation,
          line(cx, py(-r.height), cx, py(r.height), C.gold, 2.5)
        );
      body += q('height', r.height, text(255, 107, 'h ≈ ' + f(r.height) + ' m', C.mint, 19));
      body += q(
        'intersectionCount',
        r.intersectionCount,
        text(
          255,
          140,
          r.intersectionCount === 2 ? 'Two distinct points' : 'One tangent point',
          C.muted,
          16
        )
      );
      return (
        body +
        caption(
          r.intersectionCount === 2
            ? 'Equal distances locate the midway line.'
            : 'One point cannot determine the line.'
        )
      );
    }
    const cx = 95,
      cy = 125,
      s = 10,
      px = x => cx + s * x,
      py = y => cy - s * y;
    body += text(180, 59, 'a = ' + f(p.major) + ' m · c = ' + f(p.focus) + ' m', C.muted, 16);
    body += q(
      'minor',
      r.minor,
      `<ellipse data-role="measured-ellipse" data-scale="${s}" cx="${cx}" cy="${cy}" rx="${n(p.major * s)}" ry="${n(r.minor * s)}" fill="${C.gold}" fill-opacity=".14" stroke="${C.gold}" stroke-width="2.5"/>`
    );
    for (const x of [-p.focus, p.focus])
      body += q('focus', p.focus, `<circle cx="${n(px(x))}" cy="${cy}" r="3" fill="${C.cyan}"/>`);
    body += q(
      'firstDistance',
      r.firstDistance,
      line(px(-p.focus), cy, px(r.pointX), py(r.pointY), C.mint, 2)
    );
    body += q(
      'secondDistance',
      r.secondDistance,
      line(px(p.focus), cy, px(r.pointX), py(r.pointY), C.cyan, 2)
    );
    body += q(
      'stringLength',
      r.stringLength,
      text(250, 103, 'd₁ + d₂ ≈ ' + f(r.stringLength) + ' m', C.mint, 18)
    );
    body += q('minor', r.minor, text(250, 136, 'b ≈ ' + f(r.minor) + ' m', C.violet, 18));
    body += text(250, 167, 'A = πab', C.muted, 18);
    return body + caption('Two moving lengths. One fixed sum.');
  }
  return Object.freeze({
    has: M.has,
    list: () => M.ids.slice(),
    draw,
    describe: (slug, p, r) =>
      M.specs(slug).title +
      '. ' +
      M.specs(slug).primaryLabel +
      ' ' +
      (r.valid ? f(r.output) : 'unavailable') +
      '. ' +
      M.specs(slug).limits
  });
});
