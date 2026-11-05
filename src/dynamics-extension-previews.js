/* Small model-derived scenes; caption space is reserved for every topic. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./dynamics-extensions.js') : root.AtlasDynamicsExtensions);
  if (node) module.exports = api;
  root.AtlasDynamicsExtensionPreviews = api;
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
  const f = v =>
    Number.isFinite(v) ? String(Number(v.toPrecision(4))).replace(/-/g, '−') : 'undefined';
  const n = v => Number(v.toFixed(5));
  const text = (x, y, value, c = C.muted, size = 15) =>
    `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="middle">${esc(value)}</text>`;
  const line = (x, y, xx, yy, c = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${c}" stroke-width="2" ${extra}/>`;
  const circle = (x, y, r, c, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${c}" ${extra}/>`;
  const path = (points, c, extra = '') =>
    `<path d="${points.map(([x, y], i) => (i ? 'L' : 'M') + n(x) + ' ' + n(y)).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5" ${extra}/>`;
  const q = (key, v, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(v)}">${body}</g>`;
  const caption = value =>
    '<g data-preview-layer="caption">' + text(180, 216, value, C.ink, 17) + '</g>';
  const heading = (r, value) => q('output', r.output, text(180, 32, value, C.gold, 24));
  function draw(id, p, r) {
    if (!M.has(id)) return '';
    if (id === 'hysteresis') {
      const x = v => 180 + v * 205,
        y = v => 127 - v * 36;
      let body = heading(r, 'Selected x ≈ ' + f(r.output));
      for (const sign of [-1, 1])
        body += path(
          Array.from({ length: 65 }, (_, i) => {
            const state = sign * (1 / Math.sqrt(3) + i * 0.012);
            return [x(state ** 3 - state), y(state)];
          }).filter(pt => pt[0] >= 28 && pt[0] <= 332),
          sign < 0 ? C.cyan : C.violet
        );
      body +=
        q('history', p.steps, r.trace.map(t => circle(x(t.bias), y(t.x), 2.5, C.gold)).join('')) +
        q('bias', r.bias, line(x(r.bias), 75, x(r.bias), 176, C.grid, 'stroke-dasharray="4 4"')) +
        circle(x(r.bias), y(r.output), 6, C.gold);
      return body + caption('Same dial. A remembered branch.');
    }
    if (id === 'gradient-flow') {
      const x = v => 180 + 31 * v,
        y = v => 128 - 31 * v;
      let body = heading(r, 'V ≈ ' + f(r.output));
      for (const v of [0.05, 0.15, 0.3])
        body += `<ellipse cx="180" cy="128" rx="${n(31 * Math.sqrt((2 * v) / p.a))}" ry="${n(31 * Math.sqrt((2 * v) / p.b))}" fill="none" stroke="${C.grid}"/>`;
      body +=
        q(
          'time',
          p.time,
          path(
            Array.from({ length: 51 }, (_, i) => {
              const t = (p.time * i) / 50;
              return [x(2 * Math.exp(-p.a * t)), y(Math.exp(-p.b * t))];
            }),
            C.cyan
          )
        ) +
        q('x', r.x, circle(x(r.x), y(r.y), 6, C.gold)) +
        text(180, 64, 'Exact flow through potential contours', C.muted, 13);
      return body + caption('Move continuously. Lose potential.');
    }
    if (id === 'circle-manifold') {
      const xx = v => 110 + 43 * v,
        yy = v => 126 - 43 * v,
        pole = p.pole === 'north' ? 1 : -1;
      let body =
        heading(r, 'u ≈ ' + f(r.output)) +
        circle(110, 126, 43, 'none', 'stroke="' + C.grid + '"') +
        line(28, 126, 332, 126, C.grid) +
        circle(110, yy(pole), 4, C.violet) +
        q('angle', p.angle, circle(xx(r.x), yy(r.y), 5, C.gold));
      if (r.valid && Math.abs(r.u) < 5)
        body +=
          line(110, yy(pole), xx(r.x), yy(r.y), C.cyan) +
          line(xx(r.x), yy(r.y), xx(r.u), 126, C.cyan) +
          q('u', r.u, circle(xx(r.u), 126, 5, C.mint));
      return body + caption('One circle. Two coordinate charts.');
    }
    if (id === 'sphere-manifold') {
      const project = (x, y, z) => [
        105 + 45 * (0.85 * x - 0.5 * y),
        127 - 45 * (0.25 * x + 0.3 * y + 0.9 * z)
      ];
      let body = heading(r, 'Chart radius ≈ ' + f(r.output));
      for (const lat of [-45, 0, 45])
        body += path(
          Array.from({ length: 49 }, (_, i) => {
            const a = (lat * Math.PI) / 180,
              t = (i * Math.PI) / 24;
            return project(Math.cos(a) * Math.cos(t), Math.cos(a) * Math.sin(t), Math.sin(a));
          }),
          C.grid
        );
      for (const lon of [0, 60, 120])
        body += path(
          Array.from({ length: 49 }, (_, i) => {
            const a = (lon * Math.PI) / 180,
              t = (i * Math.PI) / 24;
            return project(Math.cos(t) * Math.cos(a), Math.cos(t) * Math.sin(a), Math.sin(t));
          }),
          C.grid
        );
      body +=
        q('latitude', p.latitude, circle(...project(r.x, r.y, r.z), 5, C.gold)) +
        line(210, 127, 315, 127, C.grid) +
        line(260, 76, 260, 178, C.grid);
      if (r.valid && Math.max(Math.abs(r.u), Math.abs(r.v)) < 3)
        body += q('u', r.u, circle(260 + 18 * r.u, 127 - 18 * r.v, 5, C.mint));
      return (
        body +
        text(105, 181, 'Sphere point', C.muted, 13) +
        text(260, 181, 'Chart plane', C.muted, 13) +
        caption('Same point. Local coordinates.')
      );
    }
    const x = v => 180 + 95 * v,
      y = v => 128 - 35 * v,
      fn = (v, e) => (p.family === 'hyperbolic' ? -v + e : e - v * v),
      values = Array.from({ length: 51 }, (_, i) => -1 + i / 25);
    return (
      heading(r, r.output + ' ' + (r.output === 1 ? 'equilibrium' : 'equilibria')) +
      line(40, 128, 320, 128) +
      path(
        values.map(v => [x(v), y(fn(v, 0))]),
        C.violet,
        'stroke-dasharray="4 4"'
      ) +
      path(
        values.map(v => [x(v), y(fn(v, p.perturbation))]),
        C.cyan
      ) +
      q('roots', r.output, r.roots.map(v => circle(x(v), 128, 5, C.gold)).join('')) +
      caption('Perturb the rule. Compare roots.')
    );
  }
  return Object.freeze({
    has: M.has,
    list: () => M.ids.slice(),
    draw,
    describe: (id, p, r) =>
      M.specs(id).title +
      '. The actual default result is ' +
      f(r.output) +
      '. ' +
      M.specs(id).limits
  });
});
