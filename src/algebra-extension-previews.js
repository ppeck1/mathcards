/* Matching previews use the evaluated algebra quantities. No host or clock. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgebraExtensionPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const ids = Object.freeze(['complex-number', 'quadratic-equation', 'linear-programming']);
  const C = {
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
  const n = v => Number(v.toFixed(5)),
    f = v => Number(v.toPrecision(4)).toString().replace('-', '−');
  const text = (x, y, v, c = C.ink, size = 17, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, c = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${c}" ${/(?:^|\s)stroke-width\s*=/.test(extra) ? '' : 'stroke-width="2" '}${extra}/>`;
  const dot = (x, y, c) => `<circle cx="${n(x)}" cy="${n(y)}" r="4" fill="${c}"/>`;
  const mark = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = t => `<g data-preview-layer="caption">${text(180, 216, t, C.ink, 16)}</g>`;
  function draw(slug, p, r, options = {}) {
    if (!ids.includes(slug) || !r?.valid) return '';
    let body = '';
    if (slug === 'complex-number') {
      const px = x => 145 + 18 * x,
        py = y => 125 - 18 * y;
      body = mark('output', r.output, text(180, 32, '|z| ≈ ' + f(r.output), C.gold, 24));
      body += line(45, 125, 245, 125) + line(145, 57, 145, 188);
      body += mark(
        'output',
        r.output,
        `<circle cx="145" cy="125" r="${n(r.output * 18)}" fill="none" stroke="${C.gold}" stroke-width="2"/>`
      );
      body += mark(
        'real imag',
        p.real + ',' + p.imag,
        line(145, 125, px(p.real), py(p.imag), C.gold) + dot(px(p.real), py(p.imag), C.gold)
      );
      body += mark(
        'conjugateImag',
        r.conjugateImag,
        line(145, 125, px(p.real), py(r.conjugateImag), C.violet, 'stroke-dasharray="5 4"') +
          dot(px(p.real), py(r.conjugateImag), C.violet)
      );
      body +=
        text(294, 91, 'z', C.gold, 24) +
        text(294, 140, 'z̄', C.violet, 24) +
        text(294, 178, 'Mirror', C.muted, 14);
      return body + caption('Reflect the point. Preserve distance.');
    }
    if (slug === 'quadratic-equation') {
      const px = x => 30 + (x + 4) * 37.5,
        py = y => 180 - ((y + 4) * 100) / 12;
      const clip =
        'quadratic-preview-' +
        Array.from(String(options.id || slug))
          .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
      body = mark(
        'output',
        r.output,
        text(
          180,
          32,
          r.output === 2
            ? 'Two distinct real roots'
            : r.output === 1
              ? 'One double root'
              : 'No real roots',
          C.gold,
          23
        )
      );
      body += mark(
        'discriminant',
        r.discriminant,
        text(180, 61, 'D = ' + f(r.discriminant), C.muted, 15)
      );
      body +=
        `<defs><clipPath id="${clip}"><rect x="30" y="75" width="300" height="110"/></clipPath></defs>` +
        line(30, py(0), 330, py(0)) +
        line(px(0), 75, px(0), 185);
      const path = Array.from({ length: 101 }, (_, i) => {
        const x = -4 + (8 * i) / 100;
        return `${i ? 'L' : 'M'}${n(px(x))} ${n(py(p.leading * x * x + p.linear * x + p.constant))}`;
      }).join('');
      body += mark(
        'constant',
        p.constant,
        `<path d="${path}" fill="none" stroke="${C.cyan}" stroke-width="3" clip-path="url(#${clip})"/>`
      );
      for (const x of r.roots)
        if (x >= -4 && x <= 4) body += mark('roots', x, dot(px(x), py(0), C.gold));
      return body + caption('Cross, touch, or miss the target.');
    }
    const px = x => 65 + 30 * x,
      py = y => 180 - 30 * y;
    body = mark('output', r.output, text(180, 32, 'Maximum V ≈ ' + f(r.output), C.gold, 24));
    body += line(px(0), py(0), px(4.5), py(0)) + line(px(0), py(0), px(0), py(3.5));
    body += `<rect x="65" y="90" width="120" height="90" fill="none" stroke="${C.grid}" stroke-dasharray="5 4"/>`;
    body += mark(
      'budget',
      p.budget,
      `<polygon points="${r.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ')}" fill="${r.allOptimal ? C.gold : C.cyan}" fill-opacity=".25" stroke="${C.cyan}" stroke-width="2"/>`
    );
    r.vertices.forEach(([x, y], i) => {
      body += dot(px(x), py(y), r.optimalIndices.includes(i) ? C.gold : C.cyan);
    });
    for (let i = 0; i < r.vertices.length; i++)
      if (r.optimalIndices.includes(i) && r.optimalIndices.includes((i + 1) % r.vertices.length)) {
        const a = r.vertices[i],
          b = r.vertices[(i + 1) % r.vertices.length];
        body += line(px(a[0]), py(a[1]), px(b[0]), py(b[1]), C.gold, 'stroke-width="4"');
      }
    body +=
      text(270, 105, 'Feasible', C.cyan, 16) +
      text(
        270,
        151,
        r.allOptimal ? 'All tie' : r.optimalIndices.length > 1 ? 'Best edge' : 'Best corner',
        C.gold,
        16
      );
    return body + caption('Shape the choices. Compare corners.');
  }
  function describe(slug, p, r) {
    if (!ids.includes(slug) || !r?.valid) return 'Algebra preview unavailable.';
    return slug === 'complex-number'
      ? 'The complex point has real component ' +
          f(p.real) +
          ' and imaginary component ' +
          f(p.imag) +
          '. Its violet conjugate reflects across the real axis while retaining the gold radius of ' +
          f(r.output) +
          ' in the same unitless coordinate scale.'
      : slug === 'quadratic-equation'
        ? r.rootStatus +
          ' for the displayed calibration polynomial. The discriminant is ' +
          f(r.discriminant) +
          '. Gold dots identify any real zero crossings; the count distinguishes a tangency from two crossings and from no real crossing.'
        : 'The shaded paint polygon contains the mixtures satisfying the four-litre, three-litre and total-material limits. Gold marks its maximizing corners or edge. The maximum contribution is ' +
          f(r.output) +
          ' credits. ' +
          r.optimalLabel +
          '.';
  }
  return Object.freeze({
    has: s => typeof s === 'string' && ids.includes(s),
    list: () => ids.slice(),
    draw,
    describe
  });
});
