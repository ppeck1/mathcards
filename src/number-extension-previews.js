/* Exact-number previews inside the shared card frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./number-extensions.js') : root.AtlasNumberExtensions);
  if (node) module.exports = api;
  root.AtlasNumberExtensionPreviews = api;
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
  const text = (x, y, value, color = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2) =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}"/>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'least-common-multiple') {
      const left = 46,
        right = 329,
        px = time => left + (time / 60) * (right - left);
      let body = q(
        'output',
        r.output,
        text(180, 31, 'Next together: ' + r.output + ' min', C.gold, 25)
      );
      body += text(
        180,
        60,
        'Start at 0 · intervals ' + p.first + ' and ' + p.second + ' min',
        C.muted,
        15
      );
      body += text(24, 110, 'A', C.cyan, 17) + text(24, 151, 'B', C.violet, 17);
      for (const [key, times, y, color] of [
        ['firstTimes', r.firstTimes, 105, C.cyan],
        ['secondTimes', r.secondTimes, 146, C.violet]
      ]) {
        body += line(left, y, right, y);
        body += q(
          key,
          times.join(','),
          times
            .map(
              time =>
                `<circle cx="${n(px(time))}" cy="${y}" r="${time === 0 ? 2.5 : times.length > 31 ? 1.8 : 2.6}" fill="${time === 0 ? C.muted : color}"/>`
            )
            .join('')
        );
      }
      body += q('lcm', r.lcm, line(px(r.lcm), 88, px(r.lcm), 158, C.gold, 3));
      for (const time of [0, 30, 60]) body += text(px(time), 181, time, C.muted, 14);
      return body + caption('Two rhythms. First shared return.');
    }
    let body = q(
      'output',
      r.output,
      text(180, 31, 'Sum ' + r.output + ' tiles · ' + r.classification, C.gold, 24)
    );
    body += q(
      'divisors',
      r.divisors.join(','),
      text(
        180,
        61,
        'D = ' + (r.divisors.length ? '{' + r.divisors.join(', ') + '}' : '∅'),
        C.muted,
        14
      )
    );
    for (const [key, value, left, color, label] of [
      ['number', p.number, 38, C.cyan, 'n'],
      ['divisorSum', r.divisorSum, 213, C.mint, 's']
    ]) {
      body += q(key, value, text(left + 49.5, 87, label + ' = ' + value + ' tiles', color, 17));
      let cells = '';
      for (let i = 0; i < 120; i++)
        cells += `<rect x="${left + (i % 12) * 9}" y="${96 + Math.floor(i / 12) * 9}" width="7" height="7" rx="1" fill="${i < value ? color : C.grid}" fill-opacity="${i < value ? 1 : 0.4}"/>`;
      body += q(key, value, cells);
    }
    return body + caption('Compare the proper-divisor sum.');
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
