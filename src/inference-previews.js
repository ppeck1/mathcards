/* Topic-specific thumbnail geometry. Values come from the installed model. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInferencePreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const slugs = Object.freeze([
    'sampling-distribution',
    'confidence-interval',
    'hypothesis-test',
    'linear-regression',
    'correlation',
    'factorial-interaction',
    'chi-square-association',
    'relative-entropy',
    'binomial-distribution',
    'poisson-distribution'
  ]);
  const C = {
    grid: '#294352',
    ink: '#eef8f4',
    muted: '#a0b5bc',
    cyan: '#77d8e8',
    mint: '#c6f276',
    gold: '#f5cf78',
    violet: '#b8a1ff'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5)),
    fmt = v =>
      Number.isFinite(v) ? String(Number(v.toPrecision(4))).replace('-', '−') : 'undefined';
  const text = (x, y, value, color = C.ink, size = 16, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" text-anchor="${anchor}" fill="${color}" font-size="${size}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" ${extra}/>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0, w))}" height="${n(Math.max(0, h))}" fill="${color}" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${color}" ${extra}/>`;
  const q = (keys, value, body) =>
    `<g data-quantity="${esc(keys)}" data-value="${esc(value)}">${body}</g>`;
  const caption = value =>
    '<g data-preview-layer="caption">' + text(180, 216, value, C.ink, 17) + '</g>';
  const heading = value => text(180, 34, value, C.gold, 24);
  function massBars(slug, p, r) {
    const rows = r.rows,
      left = 35,
      right = 325,
      bottom = 164,
      span = right - left,
      max =
        slug === 'sampling-distribution'
          ? 0.3
          : slug === 'hypothesis-test'
            ? 0.25
            : slug === 'binomial-distribution'
              ? 0.5
              : 0.5;
    const minX = rows[0].x,
      maxX = rows.at(-1).x,
      step = span / Math.max(1, rows.length - 1),
      width = Math.min(20, step * 0.68);
    let b = '';
    if (slug === 'sampling-distribution')
      b +=
        heading('SE = ' + fmt(r.output) + ' kg') +
        text(180, 62, r.sampleCount + ' ordered samples · mean 6 kg', C.muted, 14);
    if (slug === 'hypothesis-test')
      b +=
        heading('p-value = ' + fmt(r.output)) +
        text(180, 62, 'Gold: observed count or larger', C.muted, 14);
    if (slug === 'binomial-distribution')
      b +=
        heading('P(K=' + p.count + ') = ' + fmt(r.output)) +
        text(180, 62, p.trials + ' independent packets · p=' + fmt(p.chance), C.muted, 14);
    if (slug === 'poisson-distribution')
      b +=
        heading('P(K=' + p.count + ') = ' + fmt(r.output)) +
        text(180, 62, 'λ=' + fmt(p.rate) + ' · tail above 20 retained', C.muted, 14);
    b += line(left, 164, right, 164, C.muted);
    for (const row of rows) {
      const x = left + ((row.x - minX) / (maxX - minX || 1)) * span,
        selected = slug === 'hypothesis-test' ? row.selected : row.x === p.count,
        color = selected ? C.gold : C.cyan,
        height = (82 * row.probability) / max;
      b += q(
        'rows ' + (selected ? 'output' : ''),
        row.probability,
        rect(
          x - width / 2,
          bottom - height,
          width,
          height,
          color,
          `data-role="preview-probability" data-outcome="${row.x}" data-probability="${row.probability}"`
        )
      );
    }
    b += text(left, 183, minX, C.muted, 13) + text(right, 183, maxX, C.muted, 13);
    if (slug === 'sampling-distribution') {
      const x = left + ((r.mean - minX) / (maxX - minX)) * span;
      b += q(
        'mean',
        r.mean,
        line(x, 88, x, 169, C.gold, 'stroke-width="2" stroke-dasharray="4 3"')
      );
    }
    return (
      b +
      caption(
        slug === 'sampling-distribution'
          ? 'More draws. A steadier average.'
          : slug === 'hypothesis-test'
            ? 'A tail under the null model.'
            : slug === 'binomial-distribution'
              ? 'Count outcomes. Keep their chance.'
              : 'Whole arrivals. Infinite support.'
      )
    );
  }
  function confidence(p, r) {
    const px = x => 37 + 286 * x;
    let b =
      heading('Coverage = ' + fmt(r.coverage * 100) + '%') +
      text(180, 61, 'Green intervals cover the fixed p', C.muted, 14);
    r.rows.forEach((row, i) => {
      const y = 80 + i * 11;
      b += q(
        'low high rows',
        row.count,
        line(
          px(row.low),
          y,
          px(row.high),
          y,
          row.covered ? C.mint : C.violet,
          `stroke-width="${row.count === p.observed ? 4 : 2}" data-role="preview-interval" data-low="${row.low}" data-high="${row.high}" data-covered="${row.covered}"`
        )
      );
    });
    b +=
      q(
        'trueChance',
        p.trueChance,
        line(px(p.trueChance), 72, px(p.trueChance), 177, C.cyan, 'stroke-width="2"')
      ) +
      text(37, 183, '0', C.muted, 13) +
      text(323, 183, '1', C.muted, 13);
    return b + caption('Coverage weights every interval.');
  }
  function scatter(slug, p, r) {
    const left = 45,
      right = 315,
      px = x => left + ((right - left) * (x - 1)) / 4,
      regression = slug === 'linear-regression',
      low = regression ? 0 : -4,
      high = regression ? 10 : 14,
      py = y => 172 - ((y - low) / (high - low)) * 98;
    let b =
      heading(regression ? 'b = ' + fmt(r.slope) + ' cm/day' : 'r = ' + fmt(r.r)) +
      text(
        180,
        61,
        regression
          ? 'The fit moves with the last reading'
          : 'Trend and scatter are separate inputs',
        C.muted,
        14
      ) +
      line(left, 172, right, 172, C.muted);
    if (regression) {
      b += q(
        'intercept slope',
        r.slope,
        line(
          px(1),
          py(r.intercept + r.slope),
          px(5),
          py(r.intercept + 5 * r.slope),
          C.mint,
          'stroke-width="3"'
        )
      );
      for (const row of r.rows)
        b += q(
          'residuals',
          row.residual,
          line(px(row.x), py(row.y), px(row.x), py(row.fitted), C.gold, 'stroke-width="2"')
        );
    }
    for (const row of r.rows)
      b += q(
        'rows',
        row.y,
        circle(
          px(row.x),
          py(row.y),
          5,
          C.cyan,
          `data-role="preview-observation" data-x="${row.x}" data-y="${row.y}"`
        )
      );
    b += text(left, 183, '1', C.muted, 13) + text(right, 183, '5', C.muted, 13);
    return (
      b + caption(regression ? 'Fit the line. Inspect the gaps.' : 'Association has a direction.')
    );
  }
  function factorial(p, r) {
    const px = x => 70 + x * 220,
      py = y => 171 - (y / 14) * 90;
    let b =
      heading('Δ = ' + fmt(r.difference) + ' minutes') +
      text(180, 61, 'Two tool effects. One comparison.', C.muted, 14);
    b +=
      q('without', r.without, line(px(0), py(12), px(1), py(10), C.cyan, 'stroke-width="3"')) +
      q(
        'withGuide combined',
        r.withGuide,
        line(px(0), py(9), px(1), py(p.combined), C.gold, 'stroke-width="3"')
      );
    for (const [x, y, c] of [
      [0, 12, C.cyan],
      [1, 10, C.cyan],
      [0, 9, C.gold],
      [1, p.combined, C.gold]
    ])
      b += circle(px(x), py(y), 5, c);
    b += text(70, 183, 'Tool off', C.muted, 13) + text(290, 183, 'Tool on', C.muted, 13);
    return b + caption('Parallel means equal effects.');
  }
  function table(p, r) {
    let b =
      heading('χ² = ' + fmt(r.statistic)) +
      text(180, 61, 'Expected independence count: 10', C.muted, 14);
    r.cells.forEach((count, i) => {
      const x = 61 + (i % 2) * 128,
        y = 79 + Math.floor(i / 2) * 54;
      b += q(
        'diagonal cells',
        count,
        rect(x, y, 110, 43, C.grid) +
          rect(
            x,
            y + 33,
            (110 * count) / 20,
            10,
            C.cyan,
            `data-role="preview-count" data-count="${count}"`
          ) +
          text(x + 55, y + 26, count, C.ink, 22)
      );
    });
    return b + caption('Compare counts with expectation.');
  }
  function divergence(p, r) {
    let b =
      heading('D(P∥Q) = ' + fmt(r.divergence) + ' bits') +
      text(180, 61, 'Cyan model P · purple forecast Q', C.muted, 14);
    for (let i = 0; i < 2; i++) {
      const y = 90 + i * 53,
        row = r.rows[i];
      b +=
        text(30, y + 16, i, C.muted, 14) +
        q(
          'actual rows',
          row.probability,
          rect(
            52,
            y,
            264 * row.probability,
            15,
            C.cyan,
            `data-role="preview-model-mass" data-probability="${row.probability}"`
          )
        ) +
        q(
          'forecast rows',
          row.forecast,
          rect(
            52,
            y + 21,
            264 * row.forecast,
            15,
            C.violet,
            `data-role="preview-forecast-mass" data-probability="${row.forecast}"`
          )
        );
    }
    return b + caption('A comparison with a direction.');
  }
  function has(slug) {
    return typeof slug === 'string' && slugs.includes(slug);
  }
  function draw(slug, p, r) {
    if (!has(slug)) return '';
    if (
      [
        'sampling-distribution',
        'hypothesis-test',
        'binomial-distribution',
        'poisson-distribution'
      ].includes(slug)
    )
      return massBars(slug, p, r);
    if (slug === 'confidence-interval') return confidence(p, r);
    if (slug === 'linear-regression' || slug === 'correlation') return scatter(slug, p, r);
    if (slug === 'factorial-interaction') return factorial(p, r);
    if (slug === 'chi-square-association') return table(p, r);
    return divergence(p, r);
  }
  function describe(slug, p, r) {
    if (!has(slug)) return '';
    return slug === 'confidence-interval'
      ? 'Nine interval segments and the fixed probability show which counts produce coverage; coverage is weighted by their binomial probabilities.'
      : slug === 'linear-regression'
        ? 'The fitted line, observed heights and vertical residuals share the same five measurements.'
        : slug === 'correlation'
          ? 'Five paired readings show the current trend and scatter, with Pearson correlation ' +
            fmt(r.output) +
            '.'
          : slug === 'factorial-interaction'
            ? 'Two mean-response segments compare the tool effect at both guide levels. Their difference is ' +
              fmt(r.output) +
              ' minutes.'
            : slug === 'chi-square-association'
              ? 'Four observed table counts retain the same margins; the expected independence count in each cell is ten.'
              : slug === 'relative-entropy'
                ? 'Paired probability bars show model P and forecast Q on one scale, with relative entropy ' +
                  fmt(r.output) +
                  ' bits.'
                : 'Discrete probability masses use whole outcomes; their displayed heights are calculated from the model. ' +
                  (slug === 'poisson-distribution'
                    ? 'The positive tail beyond count twenty remains accounted for.'
                    : slug === 'sampling-distribution'
                      ? 'The complete finite distribution groups all ' +
                        r.sampleCount +
                        ' equally likely samples.'
                      : 'The selected count or upper-tail masses are gold.');
  }
  return Object.freeze({ has, draw, describe, list: () => slugs.slice() });
});
