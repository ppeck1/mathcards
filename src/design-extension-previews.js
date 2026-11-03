/* Current model quantities composed inside the shared, noninteractive card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./design-extensions.js') : root.AtlasDesignExtensions);
  if (node) module.exports = api;
  root.AtlasDesignExtensionPreviews = api;
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
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const dot = (x, y, color, radius = 5) =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'covariance') {
      const px = value => 60 + (value / 6) * 270,
        py = value => 158 - (value / 20) * 87;
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Sample covariance = ' + f(r.output), C.gold, 23)
      );
      body += text(180, 57, 'Signed paired products · m·min', C.muted, 16);
      body += q(
        'meanX',
        r.meanX,
        line(px(r.meanX), 69, px(r.meanX), 159, C.muted, 1.5, 'stroke-dasharray="4 4"')
      );
      body += q(
        'meanY',
        r.meanY,
        line(60, py(r.meanY), 330, py(r.meanY), C.muted, 1.5, 'stroke-dasharray="4 4"')
      );
      r.xValues.forEach((x, index) => {
        const y = r.yValues[index],
          product = r.products[index],
          color = product >= 0 ? C.mint : C.violet;
        body += q(
          'products',
          product,
          `<rect x="${n(Math.min(px(x), px(r.meanX)))}" y="${n(Math.min(py(y), py(r.meanY)))}" width="${n(Math.abs(px(x) - px(r.meanX)))}" height="${n(Math.abs(py(y) - py(r.meanY)))}" fill="${color}" fill-opacity=".2" stroke="${color}" stroke-opacity=".5"/>`
        );
        body += q('yValues', y, dot(px(x), py(y), C.gold, 4.5));
      });
      for (const value of [0, 3, 6])
        body += text(px(value), 181, value === 3 ? '3 m' : value, C.muted, 14);
      for (const value of [0, 10, 20])
        body += text(52, py(value) + 5, value === 10 ? '10 min' : value, C.muted, 13, 'end');
      return body + caption('Pair deviations. Keep their signs.');
    }
    if (slug === 'normal-variance-interval') {
      const px = value => 30 + (Math.max(0, Math.min(8, value)) / 8) * 300;
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Upper variance ≈ ' + f(r.output) + ' mm²', C.gold, 23)
      );
      body += text(180, 62, '95% normal-model variance interval', C.muted, 17);
      for (const value of [0, 4, 8])
        body +=
          line(px(value), 88, px(value), 148) +
          text(px(value), 179, value === 4 ? '4 mm²' : value, C.muted, 15);
      body += line(30, 124, 330, 124);
      body += q(
        'interval',
        r.width,
        line(px(r.lowerVariance), 124, px(r.upperVariance), 124, C.gold, 7)
      );
      for (const [key, value] of [
        ['lowerVariance', r.lowerVariance],
        ['upperVariance', r.upperVariance]
      ]) {
        const x = px(value),
          outside = value > 8;
        body += q(
          key,
          value,
          outside
            ? `<path d="M${n(x - 8)} 116L${n(x)} 124L${n(x - 8)} 132" fill="none" stroke="${C.gold}" stroke-width="3"/>`
            : line(x, 106, x, 142, C.gold, 3)
        );
      }
      body += q('variance', r.variance, dot(px(r.variance), 124, C.cyan));
      if (r.upperVariance > 8)
        body += text(180, 91, 'Arrow: upper bound beyond 8 mm²', C.muted, 14);
      return body + caption('Estimate spread. Bound its variance.');
    }
    let body = q('output', r.output, text(180, 31, 'Power ≈ ' + f(r.output), C.gold, 26));
    body += q(
      'perGroup',
      p.perGroup,
      text(180, 61, p.perGroup + ' independent readings per jig', C.muted, 17)
    );
    const left = 30,
      width = 300;
    body += text(left, 90, 'Power at the assumed increase', C.ink, 16, 'start');
    body += text(330, 90, '0–1', C.muted, 13, 'end');
    body += `<rect x="30" y="102" width="300" height="22" rx="4" fill="${C.grid}"/>`;
    body += q(
      'power',
      r.output,
      `<rect x="30" y="102" width="${n(width * r.output)}" height="22" rx="4" fill="${C.mint}"/>`
    );
    body += text(left, 149, 'False-positive rate at no increase', C.muted, 15, 'start');
    body += `<rect x="30" y="160" width="300" height="12" rx="3" fill="${C.grid}"/>`;
    body += q(
      'alpha',
      r.alpha,
      `<rect x="30" y="160" width="${n(width * r.alpha)}" height="12" rx="3" fill="${C.gold}"/>`
    );
    body += text(330, 183, '5%', C.gold, 14, 'end');
    return body + caption('Plan replication. See detection power.');
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
