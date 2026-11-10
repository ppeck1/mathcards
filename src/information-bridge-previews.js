/* Model-derived compact artwork for the shared preview frame. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./information-bridges.js') : root.AtlasInformationBridges);
  if (node) module.exports = api;
  root.AtlasInformationBridgePreviews = api;
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
    f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, color = C.ink, size = 17, anchor = 'middle') =>
    '<text x="' +
    n(x) +
    '" y="' +
    n(y) +
    '" fill="' +
    color +
    '" font-size="' +
    size +
    '" text-anchor="' +
    anchor +
    '">' +
    esc(v) +
    '</text>';
  const rect = (x, y, width, height, color, extra = '') =>
    '<rect x="' +
    n(x) +
    '" y="' +
    n(y) +
    '" width="' +
    n(width) +
    '" height="' +
    n(height) +
    '" fill="' +
    color +
    '" ' +
    extra +
    '/>';
  const q = (key, value, body) =>
    '<g data-preview-quantity="' + key + '" data-value="' + esc(value) + '">' + body + '</g>';
  const caption = value => '<g data-preview-layer="caption">' + text(180, 216, value) + '</g>';
  function draw(slug, p, r) {
    if (!M.has(slug) || !r?.valid) return '';
    if (slug === 'channel-capacity') {
      let body = q(
        'output',
        r.output,
        text(180, 31, 'C ≈ ' + f(r.capacity) + ' bit/use', C.mint, 25)
      );
      body += text(180, 60, 'p = ' + f(p.errorChance) + ' · q = ' + f(p.inputChance), C.muted, 17);
      for (const [value, label, key, color, y] of [
        [r.noiseEntropy, 'Noise', 'noiseEntropy', C.violet, 82],
        [r.mutualInformation, 'Mix I', 'mutualInformation', C.gold, 117],
        [r.capacity, 'Best C', 'capacity', C.mint, 148]
      ]) {
        body += text(24, y + 16, label, color, 16, 'start') + rect(103, y, 225, 23, C.grid);
        body += q(
          key,
          value,
          rect(103, y, 225 * value, 23, color, 'data-role="' + key + '-bar" data-scale="225"')
        );
      }
      body +=
        text(103, 184, '0', C.muted, 13, 'start') + text(328, 184, '1 bit/use', C.muted, 13, 'end');
      return body + caption('A fixed limit. A chosen input mix.');
    }
    let body = q('output', r.output, text(180, 30, 'Syndrome s = ' + r.syndrome, C.mint, 26));
    body += text(180, 59, 'Encoded', C.muted, 15);
    for (const [bits, y, key] of [
      [r.encodedBits, 70, 'encodedWord'],
      [r.receivedBits, 132, 'receivedWord']
    ]) {
      bits.forEach((bit, index) => {
        const color =
          y === 132 && index + 1 === p.flippedBit
            ? C.gold
            : [1, 2, 4].includes(index + 1)
              ? C.violet
              : C.cyan;
        body += q(
          key,
          y === 70 ? r.encodedWord : r.receivedWord,
          rect(
            37 + index * 41,
            y,
            30,
            30,
            C.grid,
            'rx="3" stroke="' + color + '" stroke-width="2"'
          ) + text(52 + index * 41, y + 23, bit, color, 22)
        );
      });
    }
    body += text(180, 121, 'Received · j = ' + p.flippedBit, C.muted, 15);
    body += q(
      'recoveredWord',
      r.recoveredWord,
      text(180, 183, 'Recovered data ' + r.recoveredData, C.cyan, 17)
    );
    return body + caption('Three checks locate a single flip.');
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
