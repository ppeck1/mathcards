/* Model-derived spatial thumbnails on the shared 360 by 228 art/caption frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./spatial-insights.js') : root.AtlasSpatialInsights);
  if (node) module.exports = api;
  root.AtlasSpatialInsightPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (M) {
  'use strict';
  const C = {
    ink: '#eef8f4',
    muted: '#a0b5bc',
    grid: '#294352',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5));
  const f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = v => '<g data-preview-layer="caption">' + text(180, 216, v) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'platonic-solids') {
      let body = q(
        'output',
        r.output,
        text(180, 31, r.name + ' · ' + r.faceCount + ' faces', C.gold, 25)
      );
      body += text(180, 60, 'Actual corners, edges and regular faces', C.muted, 15);
      const points = r.vertices.map(v => {
        const u = v[0] * Math.cos(0.47) - v[2] * Math.sin(0.47),
          z = v[0] * Math.sin(0.47) + v[2] * Math.cos(0.47);
        return [88 + u * 32, 128 - (v[1] * Math.cos(0.38) - z * Math.sin(0.38)) * 32];
      });
      body += q(
        'solid',
        p.solid,
        r.edges.map(([a, b]) => line(...points[a], ...points[b], C.cyan, 1.6)).join('')
      );
      body += q('vertexCount', r.vertexCount, text(254, 101, 'V = ' + r.vertexCount, C.cyan, 20));
      body += q('edgeCount', r.edgeCount, text(254, 130, 'E = ' + r.edgeCount, C.mint, 20));
      body += q('faceCount', r.faceCount, text(254, 159, 'F = ' + r.faceCount, C.gold, 20));
      body += q(
        'euler',
        r.euler,
        text(
          180,
          183,
          r.vertexCount + ' − ' + r.edgeCount + ' + ' + r.faceCount + ' = 2',
          C.ink,
          17
        )
      );
      return body + caption('Different frames. One Euler count.');
    }
    if (slug === 'tessellation') {
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Signed gap ≈ ' + f(r.output) + '°', C.gold, 25)
      );
      body += text(180, 60, p.sides + ' sides · ' + p.copies + ' corners at a vertex', C.muted, 15);
      const x = 85,
        y = 128,
        rad = 39;
      for (let i = 0; i < p.copies; i++) {
        const a = (i * r.angle * Math.PI) / 180 - Math.PI / 2,
          b = ((i + 1) * r.angle * Math.PI) / 180 - Math.PI / 2;
        body += q(
          'angle',
          r.angle,
          `<path d="M${x} ${y}L${n(x + rad * Math.cos(a))} ${n(y + rad * Math.sin(a))}A${rad} ${rad} 0 0 1 ${n(x + rad * Math.cos(b))} ${n(y + rad * Math.sin(b))}Z" fill="${i % 2 ? C.gold : C.cyan}" fill-opacity=".25" stroke="${C.grid}"/>`
        );
      }
      body += q('angle', r.angle, text(248, 104, 'α ≈ ' + f(r.angle) + '°', C.cyan, 19));
      body += q(
        'sumAngles',
        r.sumAngles,
        text(248, 135, 'qα ≈ ' + f(r.sumAngles) + '°', C.mint, 19)
      );
      body += text(
        248,
        165,
        r.compatible ? 'Full turn' : r.gap > 0 ? 'Angle gap' : 'Angle overlap',
        C.muted,
        16
      );
      return body + caption('Tile corners share one full turn.');
    }
    if (slug === 'perspective-projection') {
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Image width ≈ ' + f(r.output) + ' m', C.gold, 25)
      );
      body += text(
        180,
        60,
        'W = ' + f(p.width) + ' m · z = ' + f(p.depth) + ' m · f = ' + f(p.focal) + ' m',
        C.muted,
        14
      );
      const x0 = 32,
        cy = 132,
        scale = 25,
        px = z => x0 + z * scale,
        py = x => cy - x * scale;
      body += line(px(0), cy, px(10), cy, C.grid, 1);
      for (const sign of [-1, 1])
        body += line(px(0), cy, px(p.depth), py((sign * p.width) / 2), C.grid, 1.5);
      body += q(
        'width',
        p.width,
        line(px(p.depth), py(-p.width / 2), px(p.depth), py(p.width / 2), C.cyan, 4)
      );
      body += q('focal', p.focal, line(px(p.focal), py(-2), px(p.focal), py(2), C.muted, 1));
      body += q(
        'imageWidth',
        r.imageWidth,
        line(px(p.focal), py(-r.halfImage), px(p.focal), py(r.halfImage), C.mint, 4)
      );
      return body + caption('Same marker. Inverse-depth image.');
    }
    let body = q(
      'output',
      r.output,
      text(180, 31, 'Occupied fraction ≈ ' + f(r.fraction), C.gold, 25)
    );
    body += text(180, 60, r.packingName + ' · r = ' + f(p.radius) + ' cm', C.muted, 15);
    const scale = 12,
      edge = r.cellEdge * scale,
      rr = p.radius * scale,
      cx = 84,
      cy = 129,
      x = cx - edge / 2,
      y = cy - edge / 2,
      centers = [
        [x, y],
        [x + edge, y],
        [x, y + edge],
        [x + edge, y + edge]
      ];
    body += `<rect x="${n(x)}" y="${n(y)}" width="${n(edge)}" height="${n(edge)}" fill="none" stroke="${C.muted}"/>`;
    if (p.packing === 2) centers.push([cx, cy]);
    body += q(
      'radius',
      p.radius,
      centers
        .map(
          ([a, b]) =>
            `<circle cx="${n(a)}" cy="${n(b)}" r="${n(rr)}" fill="${C.cyan}" fill-opacity=".14" stroke="${C.cyan}"/>`
        )
        .join('')
    );
    body += q(
      'occupancy',
      r.occupancy,
      text(254, 102, 'N = ' + r.occupancy + ' spheres', C.cyan, 19)
    );
    body += q('cellEdge', r.cellEdge, text(254, 132, 'a ≈ ' + f(r.cellEdge) + ' cm', C.muted, 17));
    body += `<rect x="185" y="150" width="138" height="20" fill="${C.grid}"/>`;
    body += q(
      'fraction',
      r.fraction,
      `<rect x="185" y="150" width="${n(138 * r.fraction)}" height="20" fill="${C.mint}"/>`
    );
    body += text(185, 184, '0', C.muted, 13, 'start') + text(323, 184, '1', C.muted, 13, 'end');
    return body + caption('Shared beads. Measured volume.');
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
