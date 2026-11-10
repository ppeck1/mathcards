/* Small model-derived probability previews with a separate caption band. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(
    node ? require('./distribution-extensions.js') : root.AtlasDistributionExtensions
  );
  if (node) module.exports = api;
  root.AtlasDistributionExtensionPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (M) {
  'use strict';
  const C = {
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
  const n = v => Number(v.toFixed(5)),
    f = v =>
      Number.isFinite(v) ? String(Number(v.toPrecision(4))).replace(/-/g, '−') : 'unavailable';
  const text = (x, y, v, c = C.muted, size = 15) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="middle">${esc(v)}</text>`;
  const line = (x, y, xx, yy, c = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${c}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, c) => `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${c}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const path = (points, c) =>
    `<path d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5"/>`;
  const caption = v => '<g data-preview-layer="caption">' + text(180, 216, v, C.ink, 17) + '</g>';
  function draw(id, p, r) {
    if (!M.has(id)) return '';
    let body = q(
      'output',
      r.output,
      text(
        180,
        32,
        (id === 'sign-test' ? 'One-sided p ≈ ' : 'Chance by threshold ≈ ') + f(r.output),
        C.gold,
        22
      )
    );
    if (id === 'sign-test') {
      const yy = v => 165 - (v - 3) * 3.4;
      r.pairs.forEach((pair, i) => {
        const x = 44 + i * 54;
        body +=
          q(
            'pairs',
            pair.difference,
            line(
              x - 4,
              yy(pair.before),
              x + 4,
              yy(pair.after),
              pair.sign > 0 ? C.mint : pair.sign < 0 ? C.violet : C.muted
            ) +
              circle(x - 4, yy(pair.before), 4, C.cyan) +
              circle(x + 4, yy(pair.after), 5, C.gold)
          ) +
          text(
            x,
            183,
            pair.sign > 0 ? '+' : pair.sign < 0 ? '−' : '0',
            pair.sign > 0 ? C.mint : pair.sign < 0 ? C.violet : C.muted,
            17
          );
      });
      body += q(
        'positive',
        r.positive,
        text(180, 65, r.positive + ' positive / ' + r.n + ' nonzero', C.muted, 15)
      );
      return body + caption('Keep pairs. Follow their directions.');
    }
    if (id === 'normal-distribution') {
      const x = v => 180 + v * 26,
        y = v => 165 - v * 210,
        cut = p.threshold;
      const values = Array.from({ length: 121 }, (_, i) => -5 + i / 12),
        pdf = v =>
          Math.exp(-0.5 * ((v - p.mean) / p.sigma) ** 2) / (p.sigma * Math.sqrt(2 * Math.PI));
      // The art layer is clipped so unusually narrow models never cover the heading/caption.
      const shade = Array.from({ length: 81 }, (_, i) => -5 + ((Math.min(5, cut) + 5) * i) / 80);
      body +=
        '<svg x="26" y="76" width="308" height="108" viewBox="26 76 308 108" overflow="hidden">' +
        line(27, 165, 333, 165) +
        q(
          'density',
          r.density,
          path(
            values.map(v => [x(v), y(pdf(v))]),
            C.cyan
          )
        );
      body +=
        q(
          'cumulative',
          r.output,
          `<path d="M${n(x(-5))} 165 ${shade.map(v => 'L' + n(x(v)) + ' ' + n(y(pdf(v)))).join(' ')} L${n(x(Math.min(5, cut)))} 165Z" fill="${C.gold}" fill-opacity=".38"/>`
        ) +
        q('threshold', cut, line(x(cut), 77, x(cut), 165, C.gold)) +
        '</svg>';
      body += text(180, 64, 'A density height is not a probability', C.muted, 14);
      return body + caption('Probability lives in the area.');
    }
    const xx = v => 28 + v * 38,
      yy = v => 171 - v * 95,
      values = Array.from({ length: 81 }, (_, i) => i / 10);
    body +=
      line(28, 171, 332, 171) +
      path(
        values.map(v => [xx(v), yy(Math.exp(-p.rate * v))]),
        C.cyan
      ) +
      path(
        values.map(v => [xx(v), yy(-Math.expm1(-p.rate * v))]),
        C.gold
      ) +
      q('time', p.time, line(xx(p.time), 76, xx(p.time), 174, C.mint)) +
      q('survival', r.survival, circle(xx(p.time), yy(r.survival), 5, C.cyan)) +
      q('cumulative', r.output, circle(xx(p.time), yy(r.output), 5, C.gold)) +
      text(180, 62, 'Cyan: waiting · gold: arrived', C.muted, 14);
    return body + caption('One wait. Two complementary chances.');
  }
  return Object.freeze({
    has: M.has,
    list: () => M.ids.slice(),
    draw,
    describe: (id, p, r) =>
      M.specs(id).title + '. Current model probability ' + f(r.output) + '. ' + M.specs(id).limits
  });
});
