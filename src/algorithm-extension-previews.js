/* Compact views of decisions already represented by the actual model state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgorithmExtensionPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const slugs = Object.freeze(['linear-search', 'binary-search', 'minimum-spanning-tree']);
  const C = {
    bg: '#101e2b',
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
  const n = v => Number(v.toFixed(4));
  const text = (x, y, value, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra}/>`;
  const line = (x, y, xx, yy, color, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value =>
    `<g data-preview-layer="caption">${text(180, 216, value, C.ink, 17)}</g>`;
  function draw(slug, p, r) {
    if (!slugs.includes(slug) || !r?.valid) return '';
    if (slug === 'minimum-spanning-tree') {
      const pts = [
          [62, 83],
          [298, 83],
          [62, 166],
          [298, 166]
        ],
        labels = [
          [180, 68],
          [39, 132],
          [184, 109],
          [175, 150],
          [321, 132],
          [180, 183]
        ];
      let body = q(
        'output',
        r.output,
        text(180, 32, 'Least cable = ' + r.output + ' m', C.gold, 24)
      );
      const tied = new Set(r.minima.flatMap(t => t.edges));
      r.edges.forEach((edge, i) => {
        const selected = r.selected.includes(edge.id),
          alternative = !selected && tied.has(edge.id);
        body += q(
          'edges',
          edge.weight,
          line(
            ...pts[edge.a],
            ...pts[edge.b],
            selected || alternative ? C.mint : C.grid,
            1 + edge.weight * 0.6,
            alternative ? 'stroke-dasharray="4 5"' : ''
          ) +
            rect(labels[i][0] - 12, labels[i][1] - 16, 24, 20, C.bg, 'rx="4"') +
            text(
              ...labels[i],
              edge.weight,
              edge.id === 'AC' ? C.cyan : edge.id === 'BD' ? C.violet : C.ink,
              15
            )
        );
      });
      pts.forEach(([x, y], i) => {
        body +=
          `<circle cx="${x}" cy="${y}" r="14" fill="${C.bg}" stroke="${C.cyan}"/>` +
          text(x, y + 5, 'ABCD'[i], C.ink, 15);
      });
      return body + caption('Connect all four. Keep the least total.');
    }
    const values = [2, 4, 6, 8, 10, 12, 14, 16],
      inspected = new Set(r.shownTrace.map(row => row.position));
    let body =
      q(
        'output',
        r.output,
        text(
          180,
          32,
          r.output + ' ' + (r.output === 1 ? 'check shown' : 'checks shown'),
          C.gold,
          24
        )
      ) + text(180, 62, 'Requested part code ' + p.target, C.cyan, 15);
    values.forEach((value, i) => {
      const x = 22 + i * 40,
        found = r.done && r.foundPosition === i + 1;
      body += q(
        'target',
        value,
        rect(
          x,
          87,
          35,
          37,
          found ? C.mint : inspected.has(i + 1) ? C.gold : C.grid,
          'rx="5" fill-opacity=".55"'
        ) +
          text(x + 17.5, 112, value, C.ink, 17) +
          text(x + 17.5, 144, i + 1, C.muted, 13)
      );
    });
    if (slug === 'binary-search') {
      r.shownTrace.forEach((row, i) => {
        body += q(
          'windowSize',
          row.high - row.low + 1,
          rect(
            22 + (row.low - 1) * 40,
            155 + i * 9,
            (row.high - row.low + 1) * 40 - 5,
            5,
            C.cyan,
            'fill-opacity=".5"'
          )
        );
      });
    } else {
      body += q(
        'performed',
        r.performed,
        rect(22, 165, 315, 9, C.grid) + rect(22, 165, (315 * r.performed) / 8, 9, C.gold)
      );
    }
    return (
      body +
      caption(
        slug === 'linear-search'
          ? 'Check in order. Stop at the first match.'
          : 'Sorted bins make each discarded half safe.'
      )
    );
  }
  function describe(slug, p, r) {
    if (!slugs.includes(slug) || !r?.valid) return '';
    return slug === 'minimum-spanning-tree'
      ? 'The chosen three cable runs connect all four stations with total ' +
          r.output +
          ' metres. ' +
          r.tieLabel +
          '. Positions are schematic; quoted lengths determine the minimum.'
      : r.performed +
          ' comparisons are revealed from a complete search costing ' +
          r.completedCost +
          '. ' +
          r.statusLabel +
          '. Gold marks inspected bins; mint marks a completed match.';
  }
  return Object.freeze({
    has: slug => typeof slug === 'string' && slugs.includes(slug),
    list: () => slugs.slice(),
    draw,
    describe
  });
});
