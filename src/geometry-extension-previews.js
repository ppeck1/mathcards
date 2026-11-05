/* Model-derived geometry previews; lengths keep fixed equal drawing scales. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./geometry-extensions.js') : root.AtlasGeometryExtensions);
  if (node) module.exports = api;
  root.AtlasGeometryExtensionPreviews = api;
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
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = value => Number(value.toFixed(5));
  const f = value => String(Number(value.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, value, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'regular-polygon') {
      const cx = 108,
        cy = 132,
        scale = 12,
        px = x => cx + scale * x,
        py = y => cy - scale * y;
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Floor area ≈ ' + f(r.output) + ' m²', C.gold, 25)
      );
      body += text(180, 60, p.sides + ' equal panels · R = ' + f(p.radius) + ' m', C.muted, 16);
      body += line(px(-4), cy, px(4), cy) + line(cx, py(-4), cx, py(4));
      r.vertices.forEach((vertex, i) => {
        const next = r.vertices[(i + 1) % r.vertices.length];
        body += q(
          'triangleArea',
          r.triangleArea,
          `<path d="M${cx} ${cy}L${n(px(vertex[0]))} ${n(py(vertex[1]))}L${n(px(next[0]))} ${n(py(next[1]))}Z" fill="${i % 2 ? C.gold : C.mint}" fill-opacity=".17" stroke="${C.grid}" stroke-width="1"/>`
        );
      });
      body += q(
        'sides',
        p.sides,
        `<polygon points="${r.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ')}" fill="none" stroke="${C.gold}" stroke-width="2.5"/>`
      );
      const first = r.vertices[0],
        second = r.vertices[1],
        midpoint = [(first[0] + second[0]) / 2, (first[1] + second[1]) / 2];
      body += q('radius', p.radius, line(cx, cy, px(first[0]), py(first[1]), C.cyan, 2));
      body += q('apothem', r.apothem, line(cx, cy, px(midpoint[0]), py(midpoint[1]), C.violet, 2));
      body += q(
        'perimeter',
        r.perimeter,
        text(250, 102, 'P ≈ ' + f(r.perimeter) + ' m', C.gold, 17)
      );
      body += q('apothem', r.apothem, text(250, 133, 'a ≈ ' + f(r.apothem) + ' m', C.violet, 17));
      body += text(250, 165, 'A = P × a / 2', C.muted, 17);
      body += line(26, 167, 38, 167, C.muted, 2) + text(32, 184, '1 m', C.muted, 13);
      return body + caption('Equal panels become one floor.');
    }
    const cx = 85,
      cy = 130,
      scale = 10,
      maxVolume = 550,
      barLeft = 180,
      barWidth = 155;
    let body = q(
      'output',
      r.output,
      text(180, 31, 'Capacity ≈ ' + f(r.output) + ' m³', C.gold, 25)
    );
    body += text(180, 59, 'Full spherical tank · r = ' + f(p.radius) + ' m', C.muted, 16);
    body += text(cx, 79, 'Great circle', C.muted, 14);
    body += q(
      'crossSectionArea',
      r.crossSectionArea,
      `<circle cx="${cx}" cy="${cy}" r="${n(scale * p.radius)}" fill="${C.cyan}" fill-opacity=".15" stroke="${C.cyan}" stroke-width="2.5"/>`
    );
    body += q('radius', p.radius, line(cx, cy, cx + scale * p.radius, cy, C.mint, 2.5));
    body += q(
      'surfaceArea',
      r.surfaceArea,
      text(257.5, 105, 'A ≈ ' + f(r.surfaceArea) + ' m²', C.cyan, 17)
    );
    body += text(257.5, 134, 'Full-tank volume', C.muted, 15);
    body += `<rect x="${barLeft}" y="148" width="${barWidth}" height="22" rx="3" fill="${C.grid}"/>`;
    body += q(
      'volume',
      r.volume,
      `<rect x="${barLeft}" y="148" width="${n((barWidth * r.volume) / maxVolume)}" height="22" fill="${C.gold}"/>`
    );
    body +=
      text(barLeft, 184, '0', C.muted, 13, 'start') +
      text(barLeft + barWidth, 184, f(maxVolume) + ' m³', C.muted, 13, 'end');
    return body + caption('One radius. Three measurements.');
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
