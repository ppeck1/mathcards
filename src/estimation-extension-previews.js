/* Model-derived small previews. The common card frame supplies title/description. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(
    node ? require('./estimation-extensions.js') : root.AtlasEstimationExtensions
  );
  if (node) module.exports = api;
  root.AtlasEstimationExtensionPreviews = api;
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
  const text = (x, y, value, color = C.ink, size = 17) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="middle">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}"/>`;
  const dot = (x, y, color) => `<circle cx="${n(x)}" cy="${n(y)}" r="5" fill="${color}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    let body;
    if (slug === 'randomized-block-design') {
      const px = value => 42 + value * 13.8;
      body = q(
        'output',
        r.output,
        text(180, 31, 'Mean B − A = ' + f(r.output) + ' min', C.gold, 23)
      );
      for (const value of [0, 10, 20])
        body += line(px(value), 65, px(value), 169) + text(px(value), 182, value, C.muted, 14);
      r.rows.forEach((row, i) => {
        const y = 80 + i * 38;
        body += q(
          'rows',
          row.difference,
          line(px(row.a), y - 6, px(row.b), y + 6, C.gold, 3) +
            dot(px(row.a), y - 6, C.cyan) +
            dot(px(row.b), y + 6, C.gold)
        );
      });
      return (
        body +
        '<g data-preview-layer="caption">' +
        text(180, 216, 'Same day. Compare the two methods.', C.ink, 17) +
        '</g>'
      );
    }
    const px = value => 28 + ((value + 8) / 16) * 304;
    body = q('output', r.output, text(180, 31, 'Margin h ≈ ' + f(r.output) + ' mm', C.gold, 23));
    body += text(180, 65, 'Known σ · ' + p.sampleSize + ' independent readings', C.muted, 16);
    for (const value of [-8, 0, 8])
      body += line(px(value), 94, px(value), 163) + text(px(value), 183, value, C.muted, 15);
    body += line(28, 135, 332, 135);
    body += q('lower', r.lower, line(px(r.lower), 115, px(r.lower), 155, C.gold, 3));
    body += q('upper', r.upper, line(px(r.upper), 115, px(r.upper), 155, C.gold, 3));
    body += q('interval', r.width, line(px(r.lower), 135, px(r.upper), 135, C.gold, 7));
    body += q('mean', p.mean, dot(px(p.mean), 135, C.cyan));
    return (
      body +
      '<g data-preview-layer="caption">' +
      text(180, 216, 'More readings. A narrower interval.', C.ink, 17) +
      '</g>'
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
      (r.valid ? f(r.output) : 'unavailable') +
      '. ' +
      M.specs(slug).limits
  });
});
