/* Model-derived comparisons inside the existing shared card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(
    node ? require('./comparison-extensions.js') : root.AtlasComparisonExtensions
  );
  if (node) module.exports = api;
  root.AtlasComparisonExtensionPreviews = api;
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
  const dot = (x, y, color, radius = 4) =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'covariance-matrix') {
      const scale = 9.5,
        cx = 256,
        cy = 127,
        px = value => cx + scale * value,
        py = value => cy - scale * value,
        angle = r.angleMajor,
        dx = r.majorRadius * Math.cos(angle),
        dy = r.majorRadius * Math.sin(angle);
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Total variance ≈ ' + f(r.output) + ' mm²', C.gold, 23)
      );
      body += text(180, 59, 'Matrix · one-SD shape · axes ±6 mm', C.muted, 15);
      body += text(18, 129, 'S', C.muted, 17);
      body += `<path d="M38 88H30V156H38M154 88H162V156H154" fill="none" stroke="${C.muted}" stroke-width="1.5"/>`;
      for (const [key, value, x, y] of [
        ['sxx', r.sxx, 67, 111],
        ['sxy', r.sxy, 126, 111],
        ['sxy', r.sxy, 67, 144],
        ['syy', r.syy, 126, 144]
      ])
        body += q(key, value, text(x, y, f(value), key === 'sxy' ? C.cyan : C.gold, 16));
      body +=
        line(173, cy, 190, cy, C.muted, 1.5) +
        `<path d="M185 123L190 127L185 131" fill="none" stroke="${C.muted}" stroke-width="1.5"/>`;
      body += line(px(-6), cy, px(6), cy) + line(cx, py(-6), cx, py(6));
      body += q(
        'majorRadius',
        r.majorRadius,
        r.rank === 1
          ? line(px(-dx), py(-dy), px(dx), py(dy), C.mint, 4)
          : `<ellipse cx="${cx}" cy="${cy}" rx="${n(scale * r.majorRadius)}" ry="${n(scale * r.minorRadius)}" transform="rotate(${n((-angle * 180) / Math.PI)} ${cx} ${cy})" fill="${C.mint}" fill-opacity=".17" stroke="${C.mint}" stroke-width="2.5"/>`
      );
      r.xValues.forEach((x, i) => {
        body += q('yValues', r.yValues[i], dot(px(x), py(r.yValues[i]), C.cyan, 3.5));
      });
      body += text(px(-6), 145, '−6', C.muted, 13) + text(px(6), 145, '6', C.muted, 13);
      return body + caption('See both spreads. Follow the tilt.');
    }
    if (slug === 'wilcoxon-signed-rank') {
      let body = q('output', r.output, text(180, 31, 'Signed-rank p ≈ ' + f(r.output), C.gold, 25));
      body += text(
        180,
        61,
        r.nonzeroCount + ' pairs · ' + r.assignmentCount + ' sign patterns',
        C.muted,
        16
      );
      const baseline = 127;
      body += line(30, baseline, 330, baseline);
      r.differences.forEach((difference, i) => {
        const x = 54 + i * 63,
          rank = r.ranks[i];
        if (rank == null) {
          body += q('zeroCount', r.zeroCount, text(x, 126, 'omit 0', C.muted, 13));
          return;
        }
        const sign = Math.sign(difference),
          height = rank * 7,
          top = sign > 0 ? baseline - height : baseline,
          color = sign > 0 ? C.mint : C.violet;
        body += q(
          'activeRanks',
          rank,
          `<rect x="${n(x - 14)}" y="${n(top)}" width="28" height="${n(height)}" rx="3" fill="${color}"/>`
        );
        body += text(
          x,
          sign > 0 ? baseline - height - 8 : baseline + height + 18,
          (sign > 0 ? '+' : '−') + f(rank),
          color,
          16
        );
      });
      return body + caption('Rank the size. Keep the sign.');
    }
    let body = q('output', r.output, text(180, 31, 'Mann–Whitney p ≈ ' + f(r.output), C.gold, 24));
    body += q(
      'uA',
      r.uA,
      text(180, 61, 'U_A = ' + f(r.uA) + ' · nine A-versus-B pairs', C.muted, 16)
    );
    r.groupB.forEach((value, j) => {
      body += text(145 + j * 46, 85, 'B ' + f(value), C.cyan, 14);
    });
    r.groupA.forEach((value, i) => {
      const top = 94 + i * 29;
      body += text(109, top + 18, 'A ' + f(value), C.gold, 14, 'end');
      r.groupB.forEach((_, j) => {
        const weight = r.pairComparisons[i][j],
          left = 124 + j * 46,
          color = weight === 1 ? C.mint : weight === 0.5 ? C.gold : C.grid;
        body += q(
          'pairComparisons',
          weight,
          `<rect x="${left}" y="${top}" width="42" height="24" rx="3" fill="${C.grid}"/>` +
            (weight > 0
              ? `<rect x="${left}" y="${top}" width="${n(42 * weight)}" height="24" fill="${color}" fill-opacity=".35"/>`
              : '') +
            text(left + 21, top + 18, weight === 0.5 ? '½' : weight, weight ? C.ink : C.muted, 16)
        );
      });
    });
    return body + caption('Order the scores. Count the pairs.');
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
