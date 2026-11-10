/* Previews project evaluated quantities; they do not own state or a clock. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDiscreteExtensionPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const slugs = Object.freeze(['graph-coloring', 'inclusion-exclusion']);
  const C = {
    bg: '#101e2b',
    grid: '#294352',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276',
    violet: '#b8a1ff',
    red: '#ffb08a'
  };
  const colors = [C.cyan, C.gold, C.mint, C.violet];
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const text = (x, y, value, color = C.ink, size = 17) =>
    `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" text-anchor="middle">${esc(value)}</text>`;
  const q = (key, value, body) =>
    `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value =>
    `<g data-preview-layer="caption">${text(180, 216, value, C.ink, 16)}</g>`;
  function draw(slug, p, r) {
    if (!slugs.includes(slug) || !r?.valid) return '';
    if (slug === 'graph-coloring') {
      const points = [
        [94, 74],
        [266, 74],
        [266, 158],
        [94, 158]
      ];
      let body = q('output', r.output, text(180, 30, r.output + ' proper assignments', C.gold, 23));
      for (const [a, b] of r.edges)
        body += q(
          'edges',
          r.edgeCount,
          `<line x1="${points[a][0]}" y1="${points[a][1]}" x2="${points[b][0]}" y2="${points[b][1]}" stroke="${r.assignment[a] === r.assignment[b] ? C.red : C.grid}" stroke-width="4"${r.assignment[a] === r.assignment[b] ? ' stroke-dasharray="5 4"' : ''}/>`
        );
      points.forEach(([x, y], i) => {
        body += q(
          'assignment',
          r.assignment[i],
          `<circle cx="${x}" cy="${y}" r="20" fill="${colors[r.assignment[i] - 1]}"/>` +
            text(x, y + 6, r.assignment[i], C.bg, 19)
        );
      });
      return body + caption('Conflicting sessions need different slots.');
    }
    let body = q('output', r.output, text(180, 32, r.output + ' people need chairs', C.gold, 25));
    const segment = (x, y, count, color, key) =>
      q(key, count, `<rect x="${x}" y="${y}" width="${count * 8}" height="22" fill="${color}"/>`);
    body +=
      text(45, 82, 'Woodcraft', C.cyan, 14) +
      text(45, 123, 'Repair', C.mint, 14) +
      text(45, 174, 'Distinct', C.ink, 14);
    body +=
      segment(100, 65, p.overlap, C.gold, 'overlap') +
      segment(100 + p.overlap * 8, 65, r.woodOnly, C.cyan, 'woodOnly') +
      text(302, 82, p.wood, C.cyan, 18);
    body +=
      segment(100, 106, p.overlap, C.gold, 'overlap') +
      segment(100 + p.overlap * 8, 106, r.repairOnly, C.mint, 'repairOnly') +
      text(302, 123, p.repair, C.mint, 18);
    body +=
      segment(100, 157, p.overlap, C.gold, 'overlap') +
      segment(100 + p.overlap * 8, 157, r.woodOnly, C.cyan, 'woodOnly') +
      segment(100 + p.wood * 8, 157, r.repairOnly, C.mint, 'repairOnly');
    return body + caption('Subtract one extra copy of the overlap.');
  }
  function describe(slug, p, r) {
    if (!slugs.includes(slug) || !r?.valid) return '';
    return slug === 'graph-coloring'
      ? r.output +
          ' proper assignments with ' +
          p.palette +
          ' labeled slots; the graph needs at least ' +
          r.chromatic +
          ' slots. Node labels show assigned slots and dashed edges identify conflicts.'
      : p.wood +
          ' woodcraft registrations plus ' +
          p.repair +
          ' repair registrations minus ' +
          p.overlap +
          ' shared registrations leaves ' +
          r.output +
          ' distinct attendees. Bar widths use one common person scale.';
  }
  return Object.freeze({
    has: s => typeof s === 'string' && slugs.includes(s),
    list: () => slugs.slice(),
    draw,
    describe
  });
});
