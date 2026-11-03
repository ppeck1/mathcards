/* Thumbnails encode the same evaluated points and signed terms as the lessons. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAnalysisExtensionPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const ids = Object.freeze(['inverse-function', 'geometric-series']),
    C = {
      ink: '#eef8f4',
      muted: '#a0b5bc',
      grid: '#294352',
      cyan: '#77d8e8',
      gold: '#f5cf78',
      violet: '#b8a1ff'
    };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const q = v => Number(v.toFixed(5)),
    f = v => Number(v.toPrecision(4)).toString().replace(/-/g, '−');
  const text = (x, y, t, color = C.ink, size = 18) =>
    `<text x="${q(x)}" y="${q(y)}" text-anchor="middle" fill="${color}" font-size="${size}">${esc(t)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${q(x)}" y1="${q(y)}" x2="${q(a)}" y2="${q(b)}" stroke="${color}" ${/(?:^|\s)stroke-width\s*=/.test(extra) ? '' : 'stroke-width="2" '}${extra}/>`;
  const dot = (x, y, color) => `<circle cx="${q(x)}" cy="${q(y)}" r="5" fill="${color}"/>`;
  const mark = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = t => `<g data-preview-layer="caption">${text(180, 216, t, C.ink, 16)}</g>`;
  function draw(slug, p, r) {
    if (!ids.includes(slug) || !r?.valid) return '';
    if (slug === 'inverse-function') {
      const range = Math.max(1, Math.abs(p.reading), Math.abs(r.output)) * 1.2,
        s = 64 / range,
        cx = 180,
        cy = 125,
        px = x => cx + s * x,
        py = y => cy - s * y;
      let b = mark(
        'output',
        r.output,
        text(180, 30, 'f⁻¹(y) ≈ ' + f(r.output) + ' cm', C.gold, 24)
      );
      b +=
        line(90, cy, 270, cy) +
        line(cx, 57, cx, 193) +
        line(px(-range), py(-range), px(range), py(range), C.muted, 'stroke-dasharray="5 4"');
      b += mark(
        'reading output',
        p.reading + ',' + r.output,
        line(
          px(r.output),
          py(p.reading),
          px(p.reading),
          py(r.output),
          C.violet,
          'stroke-dasharray="3 4"'
        ) +
          dot(px(r.output), py(p.reading), C.cyan) +
          dot(px(p.reading), py(r.output), C.gold)
      );
      b += text(72, 81, 'f', C.cyan, 21) + text(286, 176, 'f⁻¹', C.gold, 21);
      return b + caption('Reverse the rule. Swap the coordinates.');
    }
    const largest = Math.max(4, 4 * Math.abs(p.ratio) ** (p.terms - 1)),
      s = 125 / largest;
    let b = mark('output', r.output, text(180, 30, 'Sₙ ≈ ' + f(r.output) + ' cm', C.gold, 24));
    b += mark(
      'ratio terms',
      p.ratio + ',' + p.terms,
      text(180, 60, 'r = ' + f(p.ratio) + ' · n = ' + p.terms, C.muted, 17)
    );
    b += line(180, 72, 180, 174, C.muted);
    r.contributions.forEach((term, k) => {
      const y = 76 + k * 8;
      b += mark(
        'first ratio terms contributions',
        term,
        line(180, y, 180 + term * s, y, term >= 0 ? C.cyan : C.violet, 'stroke-width="7"')
      );
    });
    b +=
      text(55, 182, '−' + f(largest), C.muted, 16) +
      text(180, 182, '0', C.muted, 16) +
      text(305, 182, f(largest), C.muted, 16);
    return b + caption('Finite sum. Infinite limit is separate.');
  }
  function describe(slug, p, r) {
    if (!ids.includes(slug) || !r?.valid) return 'Analysis preview unavailable.';
    return slug === 'inverse-function'
      ? 'The calibration point (' +
          f(r.output) +
          ', ' +
          f(p.reading) +
          ') and inverse point (' +
          f(p.reading) +
          ', ' +
          f(r.output) +
          ') exchange coordinates across the diagonal, using equal horizontal and vertical scales. The recovered command is ' +
          f(r.output) +
          ' cm.'
      : 'The signed correction bars share one length scale. The first correction is ' +
          f(p.first) +
          ' cm and each successor is multiplied by ' +
          f(p.ratio) +
          '. Adding ' +
          p.terms +
          ' whole commands gives ' +
          f(r.output) +
          ' cm net displacement. The infinite-series condition is a separate question.';
  }
  return Object.freeze({
    has: s => typeof s === 'string' && ids.includes(s),
    list: () => ids.slice(),
    draw,
    describe
  });
});
