/* Current model values, composed inside the shared card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./sampling-extensions.js') : root.AtlasSamplingExtensions);
  if (node) module.exports = api;
  root.AtlasSamplingExtensionPreviews = api;
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
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = value => Number(value.toFixed(5));
  const f = value => String(Number(value.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, value, color = C.ink, size = 17) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="middle">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const dot = (x, y, color, radius = 5) =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'student-mean-interval') {
      const px = value => 30 + ((Math.max(-4, Math.min(4, value)) + 4) / 8) * 300;
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Student margin ≈ ' + f(r.output) + ' mm', C.gold, 22)
      );
      body += text(
        180,
        65,
        'Estimated s · ' + r.degreesFreedom + ' degrees of freedom',
        C.muted,
        16
      );
      for (const value of [-4, 0, 4])
        body += line(px(value), 94, px(value), 153) + text(px(value), 177, value, C.muted, 15);
      body += line(30, 126, 330, 126);
      body += q('interval', r.width, line(px(r.lower), 126, px(r.upper), 126, C.gold, 7));
      for (const [key, value] of [
        ['lower', r.lower],
        ['upper', r.upper]
      ]) {
        const x = px(value),
          outside = value < -4 || value > 4;
        body += q(
          key,
          value,
          outside
            ? `<path d="M${n(x + (value < -4 ? 8 : -8))} 118L${n(x)} 126L${n(x + (value < -4 ? 8 : -8))} 134" fill="none" stroke="${C.gold}" stroke-width="3"/>`
            : line(x, 107, x, 145, C.gold, 3)
        );
      }
      body += q('mean', p.mean, dot(px(p.mean), 126, C.cyan));
      if (r.lower < -4 || r.upper > 4)
        body += text(180, 94, 'Arrow: endpoint beyond the fixed scale', C.muted, 14);
      return body + caption('Estimate the spread. Widen the margin.');
    }
    if (slug === 'randomization-distribution') {
      const px = value => 30 + ((value + 5) / 10) * 300;
      let body = q('output', r.output, text(180, 31, 'p ≈ ' + f(r.output), C.gold, 25));
      body += q(
        'tailCount',
        r.tailCount,
        text(180, 64, r.tailCount + ' of ' + r.assignmentCount + ' allocations', C.ink, 19)
      );
      body += line(30, 144, 330, 144);
      // Keep individual allocations visible even when contrasts almost coincide.
      // Lane position only packs dots; horizontal position retains the contrast.
      const lanes = [];
      for (const allocation of r.distribution) {
        const x = px(allocation.difference);
        let level = lanes.findIndex(lane => lane.every(previous => Math.abs(x - previous) >= 8));
        if (level < 0) {
          level = lanes.length;
          lanes.push([]);
        }
        lanes[level].push(x);
        body += q(
          'distribution',
          allocation.difference,
          dot(x, 138 - level * 7, allocation.inTail ? C.gold : C.muted, 3)
        );
      }
      for (const boundary of [-Math.abs(r.observedDifference), Math.abs(r.observedDifference)])
        body += q(
          'observedDifference',
          r.observedDifference,
          line(px(boundary), 83, px(boundary), 147, C.cyan, 1.5, 'stroke-dasharray="3 4"')
        );
      for (const value of [-5, 0, 5]) body += text(px(value), 165, value, C.muted, 15);
      body += text(180, 182, 'B − A mean difference · points', C.muted, 15);
      return body + caption('One design. All 70 allowed allocations.');
    }
    const py = value => 154 - ((value - 4) / 12) * 86;
    let body = q('output', r.output, text(180, 31, 'F = ' + f(r.output), C.gold, 25));
    body += text(180, 60, 'Between MS / within MS', C.muted, 17);
    body += q(
      'grandMean',
      r.grandMean,
      line(46, py(r.grandMean), 326, py(r.grandMean), C.muted, 1.5, 'stroke-dasharray="4 4"')
    );
    for (const value of [4, 10, 16])
      body += text(24, py(value) + 5, value === 10 ? '10 min' : value, C.muted, 14);
    r.groups.forEach((group, i) => {
      const x = 80 + i * 100,
        mean = r.groupMeans[i];
      body += q('groups', i, line(x, py(group[0]), x, py(group[2]), C.cyan, 2));
      group.forEach(value => {
        body += q('groups', value, dot(x, py(value), C.cyan, 4.5));
      });
      body += q('groupMeans', mean, line(x - 15, py(mean), x + 15, py(mean), C.gold, 4));
      body += text(x, 179, ['Method A', 'Method B', 'Method C'][i], C.muted, 14);
    });
    return body + caption('Between methods. Within each method.');
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
