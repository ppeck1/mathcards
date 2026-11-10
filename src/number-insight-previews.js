/* Model-derived artwork inside the shared 360 × 232 card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./number-insights.js') : root.AtlasNumberInsights);
  if (node) module.exports = api;
  root.AtlasNumberInsightPreviews = api;
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
  const n = v => Number(v.toFixed(5)),
    f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, c = C.ink, size = 18) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="middle">${esc(v)}</text>`;
  const line = (x, y, a, b, c = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${c}" stroke-width="${width}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = v => '<g data-preview-layer="caption">' + text(180, 216, v, C.ink, 17) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'irrational-square-root') {
      const side = p.side * 30,
        left = 180 - side / 2,
        top = 92 + (90 - side) / 2;
      return (
        q('output', r.output, text(180, 31, 'd = s√2 ≈ ' + f(r.output) + ' m', C.mint, 24)) +
        q(
          'side',
          p.side,
          `<rect data-role="square" x="${n(left)}" y="${n(top)}" width="${n(side)}" height="${n(side)}" fill="${C.cyan}" fill-opacity=".12" stroke="${C.cyan}" stroke-width="2"/>`
        ) +
        q('diagonal', r.diagonal, line(left, top + side, left + side, top, C.mint, 3)) +
        q(
          'approximation',
          r.approximation,
          text(180, 62, 'Finite estimate: ' + r.numerator + '/' + r.denominator, C.gold, 17)
        ) +
        q(
          'estimatedDiagonal',
          r.estimatedDiagonal,
          line(
            180 - (r.estimatedDiagonal * 30) / 2,
            80,
            180 + (r.estimatedDiagonal * 30) / 2,
            80,
            C.gold,
            3
          )
        ) +
        caption('A finite fraction. An irrational ratio.')
      );
    }
    if (slug === 'golden-ratio') {
      const scale = 24,
        h = p.shortSide * scale,
        width = r.longSide * scale,
        left = 180 - width / 2,
        top = 93 + (72 - h) / 2;
      return (
        q('output', r.output, text(180, 31, 'L = φs ≈ ' + f(r.output) + ' m', C.mint, 24)) +
        q(
          'approximation',
          r.approximation,
          text(180, 61, r.following + '/' + r.fibonacci + ' ≈ ' + f(r.approximation), C.gold, 18)
        ) +
        q(
          'estimatedLongSide',
          r.estimatedLongSide,
          line(
            180 - (r.estimatedLongSide * scale) / 2,
            80,
            180 + (r.estimatedLongSide * scale) / 2,
            80,
            C.gold,
            3
          )
        ) +
        q(
          'longSide',
          r.longSide,
          `<rect data-role="golden-rectangle" x="${n(left)}" y="${n(top)}" width="${n(width)}" height="${n(h)}" fill="${C.mint}" fill-opacity=".12" stroke="${C.mint}" stroke-width="2"/>`
        ) +
        q(
          'shortSide',
          p.shortSide,
          `<rect x="${n(left)}" y="${n(top)}" width="${n(h)}" height="${n(h)}" fill="${C.cyan}" fill-opacity=".18" stroke="${C.cyan}" stroke-width="2"/>`
        ) +
        caption('Remove a square. Keep the ratio.')
      );
    }
    if (slug === 'circle-measurement') {
      const rad = p.radius * 12;
      return (
        q('output', r.output, text(180, 31, 'A ≈ ' + f(r.output) + ' m²', C.mint, 25)) +
        q(
          'radius',
          p.radius,
          `<circle data-role="table-disk" cx="180" cy="108" r="${n(rad)}" fill="${C.mint}" fill-opacity=".16" stroke="${C.mint}" stroke-width="2.5"/>` +
            line(180, 108, 180 + rad, 108, C.cyan, 2)
        ) +
        q(
          'circumference',
          r.circumference,
          text(180, 179, 'C ≈ ' + f(r.circumference) + ' m', C.gold, 18)
        ) +
        caption('One radius. Edge and surface.')
      );
    }
    let body =
      q('output', r.output, text(180, 31, r.needed + ' containers needed', C.mint, 25)) +
      q(
        'full',
        r.full,
        text(180, 61, r.full + ' full · ' + f(r.remainder) + ' L left', C.cyan, 17)
      );
    for (let i = 0; i < 30; i++) {
      const x = 32 + (i % 10) * 30,
        y = 82 + Math.floor(i / 10) * 28,
        fill = i < r.full ? 1 : i < r.needed ? r.remainder / p.capacity : 0;
      body += q(
        'needed',
        r.needed,
        `<rect x="${x}" y="${y}" width="24" height="22" fill="none" stroke="${i < r.needed ? C.gold : C.grid}"/>` +
          (fill > 0
            ? `<rect data-role="liquid" x="${x + 2}" y="${n(y + 20 - fill * 18)}" width="20" height="${n(fill * 18)}" fill="${i < r.full ? C.cyan : C.gold}"/>`
            : '')
      );
    }
    return (
      body +
      q(
        'quotient',
        r.quotient,
        text(180, 179, '⌊x⌋ = ' + r.full + ' · ⌈x⌉ = ' + r.needed, C.gold, 19)
      ) +
      caption('A whole count for a continuous batch.')
    );
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
      (r.valid ? r.output : 'unavailable') +
      '. ' +
      M.specs(slug).limits
  });
});
