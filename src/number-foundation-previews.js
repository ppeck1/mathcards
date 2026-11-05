/* Topic-specific compact views of exact integer structures. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberFoundationPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const slugs = Object.freeze([
    'modular-arithmetic',
    'greatest-common-divisor',
    'prime-factorization',
    'rational-number',
    'numeral-system',
    'permutation-count',
    'binomial-coefficient'
  ]);
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
    text = (x, y, t, c = C.ink, size = 16, anchor = 'middle') =>
      `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="${anchor}">${esc(t)}</text>`,
    line = (x, y, a, b, c = C.grid) =>
      `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${c}" stroke-width="2"/>`,
    rect = (x, y, w, h, c, extra = '') =>
      `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${c}" ${extra}/>`,
    circle = (x, y, r, c) => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${c}"/>`,
    q = (key, value, body) =>
      `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`,
    head = (r, t) => q('output', r.output, text(180, 32, t, C.gold, 24)),
    caption = t => `<g data-preview-layer="caption">${text(180, 216, t, C.ink, 17)}</g>`;
  function draw(s, p, r) {
    if (!slugs.includes(s) || !r?.valid) return '';
    if (s === 'modular-arithmetic') {
      let body = head(r, 'Remainder ' + r.output);
      const trays = r.quotient + (r.remainder ? 1 : 0),
        shown = Math.min(4, trays);
      for (let t = 0; t < shown; t++) {
        const x = 31 + t * 75,
          count = t < r.quotient ? p.modulus : r.remainder;
        body += q(
          'modulus',
          p.modulus,
          rect(x, 82, 65, 51, 'none', 'rx="5" stroke="' + (t < r.quotient ? C.cyan : C.gold) + '"')
        );
        for (let j = 0; j < count; j++)
          body += circle(
            x + 11 + (j % 4) * 13,
            93 + Math.floor(j / 4) * 14,
            4,
            t < r.quotient ? C.cyan : C.gold
          );
      }
      body +=
        text(
          180,
          61,
          p.total + ' ' + (p.total === 1 ? 'counter' : 'counters') + ' · trays of ' + p.modulus,
          C.muted,
          13
        ) +
        text(
          180,
          169,
          trays > 4
            ? 'First 4 of ' + trays + ' occupied trays'
            : r.quotient + ' full · ' + r.remainder + ' loose',
          C.ink,
          16
        );
      return body + caption('A full tray preserves the remainder.');
    }
    if (s === 'greatest-common-divisor') {
      let body = head(r, 'gcd = ' + r.output + ' cm');
      [p.first, p.second].forEach((a, i) => {
        const y = 83 + i * 53,
          scale = 276 / 60;
        body += q(i ? 'second' : 'first', a, rect(42, y, a * scale, 23, i ? C.violet : C.cyan));
        for (let j = 0; j <= a / r.output; j++)
          body += line(42 + j * r.output * scale, y, 42 + j * r.output * scale, y + 23, '#101e2b');
        body += text(322, y + 41, a + ' cm', C.ink, 14, 'end');
      });
      return body + caption('One common cut. No wasted ribbon.');
    }
    if (s === 'prime-factorization') {
      let body = head(r, r.output + ' prime ' + (r.output === 1 ? 'factor' : 'factors'));
      r.factors.forEach((f, i) => {
        const x = 51 + (i % 3) * 95,
          y = 75 + Math.floor(i / 3) * 47;
        body += q(
          'factor:' + i,
          f,
          rect(x, y, 68, 35, C.grid, 'rx="5"') + text(x + 34, y + 25, f, C.cyan, 22)
        );
      });
      if (!r.factors.length) body += text(180, 112, '1 is the empty product', C.cyan, 19);
      body += text(180, 178, 'Product = ' + r.product, C.muted, 14);
      return body + caption('Multiply the prime pieces.');
    }
    if (s === 'rational-number') {
      let body =
        head(r, r.fractionLabel + ' m') +
        text(180, 65, 'One metre partition', C.muted, 13) +
        rect(38, 77, 284, 23, C.grid);
      for (let i = 0; i <= p.denominator; i++)
        body += line(
          38 + (i * 284) / p.denominator,
          77,
          38 + (i * 284) / p.denominator,
          100,
          C.cyan
        );
      const at = 180 + (r.output * 284) / 24;
      body +=
        line(38, 145, 322, 145) +
        line(180, 135, 180, 155, C.muted) +
        q(
          'output',
          r.output,
          rect(Math.min(180, at), 139, Math.abs(at - 180), 12, r.output < 0 ? C.violet : C.gold) +
            circle(at, 145, 6, C.gold)
        ) +
        text(38, 178, '−12 m', C.muted, 13) +
        text(180, 178, '0', C.muted, 13) +
        text(322, 178, '12 m', C.muted, 13);
      return body + caption('A new fraction name. Same position.');
    }
    if (s === 'numeral-system') {
      let body =
        head(r, r.representation) +
        text(180, 60, 'Weighted sum = ' + r.output, C.muted, 14) +
        line(30, 169, 330, 169);
      for (let j = 0; j < 6; j++) {
        const place = r.places[j] || { digit: 0, weight: p.base ** j, contribution: 0 },
          x = 33 + j * 49;
        body += q(
          'place:' + j,
          place.contribution,
          rect(x, 169 - (place.contribution / 63) * 83, 32, (place.contribution / 63) * 83, C.cyan)
        );
        body += text(x + 16, 184, String(place.digit), C.ink, 13);
      }
      return body + caption('Different digits. The same quantity.');
    }
    if (s === 'permutation-count') {
      let body =
        head(r, r.output + ' ' + (r.output === 1 ? 'assignment' : 'assignments')) +
        text(180, 60, p.available + ' people · ' + p.slots + ' labeled roles', C.muted, 13) +
        line(32, 168, 328, 168);
      const width = 296 / 8;
      r.factors.forEach((f, i) => {
        const x = 32 + i * width;
        body += q(
          'role:' + i,
          f,
          rect(x + 4, 168 - (f / 8) * 81, width - 10, (f / 8) * 81, C.cyan) +
            text(x + width / 2, 158 - (f / 8) * 81, f, C.ink, 15) +
            text(x + width / 2, 184, i + 1, C.muted, 13)
        );
      });
      if (!p.slots) body += text(180, 123, 'One empty assignment', C.cyan, 18);
      return body + caption('Labeled roles make order matter.');
    }
    let body =
      head(r, r.output + ' ' + (r.output === 1 ? 'team' : 'teams')) +
      text(180, 60, 'Showing ' + Math.min(6, r.selections.length) + ' of ' + r.output, C.muted, 13);
    r.selections.slice(0, 6).forEach((team, i) => {
      const x = 30 + (i % 3) * 102,
        y = 81 + Math.floor(i / 3) * 53;
      body += q(
        'team:' + i,
        team.length,
        rect(x, y, 92, 32, C.grid, 'rx="5"') +
          Array.from({ length: p.available }, (_, j) =>
            circle(
              x + 10 + (j * 72) / Math.max(1, p.available - 1),
              y + 16,
              3,
              team.includes(j) ? C.gold : C.muted
            )
          ).join('') +
          (p.available === 0 ? text(x + 46, y + 22, 'empty', C.ink, 13) : '')
      );
    });
    return body + caption('Count a team once, in any order.');
  }
  function describe(s, p, r) {
    if (!slugs.includes(s)) return '';
    const description = {
      'modular-arithmetic':
        p.total +
        ' counters form ' +
        r.quotient +
        ' complete trays of ' +
        p.modulus +
        ' and ' +
        r.remainder +
        ' leftovers. Gold marks the remainder; only the first four occupied trays appear when there are more.',
      'greatest-common-divisor':
        'Ribbons of ' +
        p.first +
        ' and ' +
        p.second +
        ' centimetres share the longest whole-centimetre cut ' +
        r.output +
        '. Both strips use the same fixed length scale and every cut has that length.',
      'prime-factorization':
        p.number +
        ' reconstructs as ' +
        r.factorText +
        '. The ' +
        r.output +
        ' prime factors include repetitions; one is represented by the empty product rather than a prime factor.',
      'rational-number':
        'The signed ribbon balance ' +
        p.numerator +
        '/' +
        p.denominator +
        ' equals the exact reduced fraction ' +
        r.exactDisplay +
        '. The one-metre partition and signed number line use their own labeled fixed scales.',
      'numeral-system':
        'The numeral ' +
        r.representation +
        ' represents ' +
        p.value +
        ' items. Each bar is a digit times its place weight; changing the base leaves their sum unchanged.',
      'permutation-count':
        'Filling ' +
        p.slots +
        ' distinct roles from ' +
        p.available +
        ' volunteers has ' +
        r.output +
        ' ordered assignments. Bars show remaining choices per role and use one fixed choice-count scale.',
      'binomial-coefficient':
        'There are ' +
        r.output +
        ' unordered teams of ' +
        p.chosen +
        ' from ' +
        p.available +
        ' volunteers. Each small panel marks its members, and the displayed prefix is labeled separately from the complete count.'
    };
    return description[s];
  }
  return Object.freeze({
    has: s => typeof s === 'string' && slugs.includes(s),
    list: () => slugs.slice(),
    draw,
    describe
  });
});
