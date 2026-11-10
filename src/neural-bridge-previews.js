/* Small evaluated neural-computation illustrations inside the shared card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./neural-bridges.js') : root.AtlasNeuralBridges);
  if (node) module.exports = api;
  root.AtlasNeuralBridgePreviews = api;
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
  const text = (x, y, value, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const line = (x, y, xx, yy, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}"/>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'neural-summation') {
      const left = 115,
        right = 328,
        scale = (right - left) / 3,
        zero = left + scale;
      let body = q('output', r.output, text(180, 31, 'Net drive y ≈ ' + f(r.output), C.mint, 26));
      body += line(zero, 61, zero, 181, C.muted, 1);
      const rows = [
        [85, 'Add E', r.excitatoryDrive, C.cyan, 'excitatoryDrive'],
        [123, 'Subtract I', r.signedInhibition, C.gold, 'signedInhibition'],
        [161, 'Sum y', r.output, C.mint, 'netDrive']
      ];
      for (const [y, label, value, color, key] of rows)
        body += q(
          key,
          value,
          text(24, y + 6, label, color, 16, 'start') +
            `<rect data-role="signed-drive" x="${n(zero + Math.min(0, value) * scale)}" y="${y - 12}" width="${n(Math.abs(value) * scale)}" height="21" fill="${color}"/>`
        );
      return body + caption('One channel adds. One subtracts.');
    }
    let body = q('output', r.output, text(180, 31, 'Contrast r ≈ ' + f(r.output), C.mint, 26));
    const left = 38,
      cell = 48,
      gap = 11,
      scale = 20,
      zero = 154;
    r.pixels.forEach((value, j) => {
      const x = left + j * (cell + gap),
        shade = Math.round(value * 255),
        product = r.contributions[j],
        color = j === 2 ? C.cyan : C.gold;
      body += q(
        'site:' + (j + 1),
        value,
        `<rect data-role="stimulus-site" x="${x}" y="65" width="${cell}" height="35" rx="3" fill="rgb(${shade},${shade},${shade})" stroke="${color}" stroke-width="2"/>`
      );
      body += q(
        'weight:' + (j + 1),
        r.weights[j],
        text(x + cell / 2, 123, f(r.weights[j]), color, 14)
      );
      body += q(
        'product:' + (j + 1),
        product,
        `<rect data-role="weighted-site" x="${x + 11}" y="${n(zero - Math.max(0, product) * scale)}" width="26" height="${n(Math.abs(product) * scale)}" fill="${color}"/>`
      );
    });
    body +=
      line(30, zero, 331, zero, C.muted, 1) +
      text(180, 181, 'Five signed products become one sum', C.muted, 15);
    return body + caption('Compare the center with its surround.');
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
      (slug === 'neural-summation'
        ? 'Fixed signed gains combine the two input signals.'
        : 'The five settings are multiplied by the displayed signed spatial weights.')
  });
});
