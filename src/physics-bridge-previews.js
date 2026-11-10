/* Evaluated photon and clock artwork in the shared compact card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./physics-bridges.js') : root.AtlasPhysicsBridges);
  if (node) module.exports = api;
  root.AtlasPhysicsBridgePreviews = api;
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
    f = v => {
      const magnitude = Math.abs(v);
      return (
        v !== 0 && (magnitude >= 1e6 || magnitude < 0.001)
          ? v
              .toExponential(3)
              .replace(/\.?0+e/, 'e')
              .replace('e+', 'e')
          : String(Number(v.toPrecision(4)))
      ).replace(/-/g, '−');
    };
  const text = (x, y, v, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra}/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = v => '<g data-preview-layer="caption">' + text(180, 216, v, C.ink, 17) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'photon-energy') {
      const left = 32,
        width = 296,
        scale = width / 1600,
        points = Array.from({ length: 161 }, (_, i) => {
          const x = (1600 * i) / 160;
          return [left + x * scale, 103 - 13 * Math.sin((2 * Math.PI * x) / p.wavelength)];
        });
      return (
        q('output', r.output, text(180, 31, 'Photon E ≈ ' + f(r.output) + ' eV', C.mint, 25)) +
        q(
          'wavelength',
          p.wavelength,
          text(180, 61, 'Vacuum λ = ' + f(p.wavelength) + ' nm', C.cyan, 18)
        ) +
        q(
          'wavelength',
          p.wavelength,
          `<path data-role="wavelength-wave" data-nm-scale="${scale}" d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${C.cyan}" stroke-width="2"/>`
        ) +
        text(left, 135, '0', C.muted, 13, 'start') +
        text(left + width, 135, '1600 nm', C.muted, 13, 'end') +
        rect(left, 151, width, 22, C.grid) +
        q(
          'energyEV',
          r.energyEV,
          rect(left, 151, (width * r.output) / 3.5, 22, C.mint, 'data-role="energy-bar"')
        ) +
        text(left, 184, '0', C.muted, 13, 'start') +
        text(left + width, 184, '3.5 eV', C.muted, 13, 'end') +
        caption('A photon’s energy, not beam power.')
      );
    }
    const left = 38,
      width = 284;
    return (
      q('output', r.output, text(180, 31, 'Laboratory t ≈ ' + f(r.output) + ' s', C.mint, 24)) +
      q(
        'speedFraction',
        p.speedFraction,
        text(180, 61, 'β = ' + f(p.speedFraction) + ' · γ ≈ ' + f(r.gamma), C.gold, 18)
      ) +
      q(
        'properDuration',
        p.properDuration,
        text(38, 95, 'Clock τ = ' + f(p.properDuration) + ' s', C.cyan, 16, 'start') +
          rect(left, 105, width, 19, C.grid) +
          rect(
            left,
            105,
            (width * p.properDuration) / 35,
            19,
            C.cyan,
            'data-role="proper-interval"'
          )
      ) +
      q(
        'coordinateDuration',
        r.coordinateDuration,
        text(38, 151, 'Laboratory interval', C.mint, 16, 'start') +
          rect(left, 161, width, 19, C.grid) +
          rect(left, 161, (width * r.output) / 35, 19, C.mint, 'data-role="coordinate-interval"')
      ) +
      text(left + width, 95, '0–35 s scale', C.muted, 13, 'end') +
      caption('One clock. The same two events.')
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
