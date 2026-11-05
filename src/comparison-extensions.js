/* Covariance geometry and exact finite rank references. The host owns time/state. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasComparisonExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const copy = value =>
    Array.isArray(value)
      ? value.map(copy)
      : value && typeof value === 'object'
        ? Object.fromEntries(Object.entries(value).map(([k, v]) => [k, copy(v)]))
        : value;
  const field = (key, label, value, min, max, step, unit) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit
  });
  const definitions = freeze({
    'covariance-matrix': {
      title: 'A covariance matrix and its ellipse',
      expression: 'tr(S) = s_xx + s_yy = λ₁ + λ₂',
      axis: 'shared',
      unit: 'mm²',
      primaryLabel: 'Total sample variance tr(S)',
      setting:
        'A laser-positioning jig has five constructed horizontal and vertical errors, both measured in millimetres. Put both variances and their covariance into one matrix, and follow its principal spreads into a descriptive ellipse.',
      limits:
        'The fixed centered patterns are u=(−2,−1,0,1,2) and v=(1,−2,2,−2,1), with x=a u and y=b u+c v. Five paired observations use sample divisor 4. The ellipse has principal radii equal to the square roots of the covariance eigenvalues. It is a descriptive one-standard-deviation geometry, not a confidence region, prediction region or boundary enclosing the five points. Residual c=0 gives rank one and a line; positive residual gives rank two when its numerical contribution is retained. Both axes have the same units and pixel scale.',
      controls: [
        field('shared', 'Shared vertical pattern b', 0.75, -2, 2, 0.05, 'mm'),
        field('horizontal', 'Horizontal pattern a', 1, 0.25, 2, 0.05, 'mm'),
        field('residual', 'Orthogonal residual c', 0.5, 0, 2, 0.05, 'mm')
      ]
    },
    'wilcoxon-signed-rank': {
      title: 'Paired differences and signed ranks',
      expression: 'p = m/M; M = 2ⁿ',
      axis: 'lastDifference',
      unit: 'probability',
      primaryLabel: 'Inclusive signed-rank p-value',
      setting:
        'Compare two packing methods on five matched parcels. Method A takes ten minutes for each constructed parcel; the paired B−A differences supply signed ranks. Move the fifth difference and follow its absolute rank into the finite sign reference.',
      limits:
        'Zero differences are omitted before ranking (the Wilcoxon convention, not Pratt). Equal nonzero absolute differences receive average ranks. The declared symmetric paired null makes the retained signs independent and equally likely conditional on the magnitudes. Enumerate all 2ⁿ sign assignments with an inclusive absolute signed-rank tail. This custom conditional enumeration includes ties; it is not a no-tie lookup table or a software default. The retained count is four or five. Even the smallest possible two-sided probability is at least 2/32, so this small family cannot reach .05. The constructed differences do not establish causation or a general median claim.',
      controls: [
        field('lastDifference', 'Fifth paired difference d₅', 5, -5, 5, 0.05, 'min'),
        {
          key: 'pattern',
          label: 'First four paired differences',
          value: 'mixed',
          type: 'select',
          discrete: true,
          options: [
            { value: 'mixed', label: 'Mixed: −3, −1, 2, 4' },
            { value: 'tied', label: 'Tied magnitudes: −2, −2, 2, 2' },
            { value: 'positive', label: 'Positive: 1, 2, 3, 4' }
          ]
        }
      ]
    },
    'mann-whitney': {
      title: 'Mann–Whitney ranks and pair comparisons',
      expression: 'U_A = R_A−6 = wins + ties/2; p = inclusive absolute tail',
      axis: 'lastScore',
      unit: 'probability',
      primaryLabel: 'Inclusive allocation p-value',
      setting:
        'Two independent workshop groups have three constructed challenge scores each. A has scores 1, 3 and v; B has 2, 4 and 6. Compare every A/B pair, then compare the observed rank statistic with all twenty balanced label allocations.',
      limits:
        'The equal-distribution null makes the six group labels exchangeable, conditional on the fixed pooled scores. Pooled ties receive average ranks. U_A counts A-above-B pairs plus half the tied pairs, and the two-sided reference includes |U_A−4.5| at least observed. All twenty three-versus-three allocations are enumerated; this custom tied-rank reference is not a no-tie software lookup. A positive common calibration multiplier changes displayed scores without changing their order or ranks. It is not a general median test, a normal-theory mean test or a causal finding. Floating calibration that loses an original score distinction is reported rather than treated as a new tie.',
      controls: [
        field('lastScore', 'Third A score v', 5, 0, 7, 0.05, 'points'),
        field('scale', 'Positive calibration multiplier k', 1, 0.5, 2, 0.05, 'ratio')
      ]
    }
  });
  const patterns = freeze({ mixed: [-3, -1, 2, 4], tied: [-2, -2, 2, 2], positive: [1, 2, 3, 4] });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown comparison model.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, ...c }) => copy(c));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const value = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        c.type === 'select'
          ? typeof value !== 'string' || !c.options.some(o => o.value === value)
          : typeof value !== 'number' || !Number.isFinite(value) || value < c.min || value > c.max
      )
        errors.push({
          field: c.key,
          message:
            c.type === 'select'
              ? 'Choose a declared difference pattern.'
              : 'Use a finite number within the displayed bounds.'
        });
      else parameters[c.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const precision = (checked, field, message) => ({
    ...checked,
    valid: false,
    status: 'numeric_precision',
    output: null,
    errors: [{ field, message }]
  });
  // Twice the midrank is an integer even when pooled ties have half ranks.
  function doubledMidranks(values) {
    const sorted = values
        .map((value, index) => ({ value, index }))
        .sort((a, b) => a.value - b.value || a.index - b.index),
      ranks = Array(values.length);
    for (let begin = 0; begin < sorted.length; ) {
      let end = begin + 1;
      while (end < sorted.length && sorted[end].value === sorted[begin].value) end++;
      const rank = begin + 1 + end;
      for (let i = begin; i < end; i++) ranks[sorted[i].index] = rank;
      begin = end;
    }
    return ranks;
  }
  const allocations = [];
  for (let a = 0; a < 4; a++)
    for (let b = a + 1; b < 5; b++)
      for (let c = b + 1; c < 6; c++) allocations.push(Object.freeze([a, b, c]));
  Object.freeze(allocations);
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'covariance-matrix') {
      const u = [-2, -1, 0, 1, 2],
        v = [1, -2, 2, -2, 1],
        xValues = u.map(x => p.horizontal * x),
        yValues = u.map((x, i) => p.shared * x + p.residual * v[i]),
        sxx = 2.5 * p.horizontal ** 2,
        sxy = 2.5 * p.horizontal * p.shared,
        syy = 2.5 * p.shared ** 2 + 3.5 * p.residual ** 2,
        trace = sxx + syy,
        determinant = 8.75 * p.horizontal ** 2 * p.residual ** 2,
        spectralGap = Math.hypot(sxx - syy, 2 * sxy),
        lambdaMajor = (trace + spectralGap) / 2,
        lambdaMinor = Math.min(lambdaMajor, determinant / lambdaMajor),
        angleMajor = 0.5 * Math.atan2(2 * sxy, sxx - syy),
        representedCross = xValues.reduce((sum, x, i) => sum + x * yValues[i], 0) / 4,
        representedDeterminant = sxx * syy - sxy * sxy;
      if (
        p.residual > 0 &&
        (determinant === 0 ||
          lambdaMinor === 0 ||
          syy === 2.5 * p.shared ** 2 ||
          representedDeterminant <= 0 ||
          yValues.every((y, i) => y === p.shared * u[i]))
      )
        return precision(
          checked,
          'residual',
          'The positive residual is too small to retain a two-dimensional covariance. Choose a larger residual.'
        );
      if (
        p.shared !== 0 &&
        (sxy === 0 || representedCross === 0 || Math.sign(representedCross) !== Math.sign(sxy))
      )
        return precision(
          checked,
          'shared',
          'The shared component is too small to retain beside the residual pattern. Choose a larger magnitude.'
        );
      return {
        ...checked,
        status: 'valid',
        output: trace,
        sxx,
        sxy,
        syy,
        matrix: [
          [sxx, sxy],
          [sxy, syy]
        ],
        trace,
        determinant,
        lambdaMajor,
        lambdaMinor,
        angleMajor,
        majorRadius: Math.sqrt(lambdaMajor),
        minorRadius: Math.sqrt(lambdaMinor),
        rank: p.residual === 0 ? 1 : 2,
        ellipseArea: Math.PI * Math.sqrt(determinant),
        angleDefined: spectralGap !== 0,
        orientationStable: spectralGap > 1e-10 * trace,
        xValues,
        yValues,
        rows: xValues.map((x, i) => ({ position: i + 1, x, y: yValues[i] })),
        meanX: 0,
        meanY: 0,
        count: 5,
        degreesFreedom: 4
      };
    }
    if (slug === 'wilcoxon-signed-rank') {
      if (p.lastDifference !== 0 && 10 + p.lastDifference === 10)
        return precision(
          checked,
          'lastDifference',
          'The nonzero difference is too small to retain beside the constructed ten-minute reading. Choose a larger magnitude.'
        );
      const differences = [...patterns[p.pattern], p.lastDifference],
        absoluteDifferences = differences.map(Math.abs),
        active = differences
          .map((difference, index) => ({ difference, index }))
          .filter(row => row.difference !== 0),
        doubledRanks = doubledMidranks(active.map(row => Math.abs(row.difference))),
        ranks = Array(5).fill(null),
        activeRows = active.map((row, i) => {
          ranks[row.index] = doubledRanks[i] / 2;
          return {
            position: row.index + 1,
            difference: row.difference,
            absolute: Math.abs(row.difference),
            rank: ranks[row.index],
            doubledRank: doubledRanks[i]
          };
        }),
        positiveRankSum = activeRows
          .filter(row => row.difference > 0)
          .reduce((sum, row) => sum + row.rank, 0),
        negativeRankSum = activeRows
          .filter(row => row.difference < 0)
          .reduce((sum, row) => sum + row.rank, 0),
        signedScore = positiveRankSum - negativeRankSum,
        observedDoubled = Math.abs(2 * signedScore),
        assignmentCount = 2 ** active.length,
        distribution = Array.from({ length: assignmentCount }, (_, mask) => {
          const doubledScore = doubledRanks.reduce(
            (sum, rank, i) => sum + ((mask >> i) & 1 ? rank : -rank),
            0
          );
          return { score: doubledScore / 2, inTail: Math.abs(doubledScore) >= observedDoubled };
        }),
        tailCount = distribution.filter(row => row.inTail).length,
        output = tailCount / assignmentCount;
      return {
        ...checked,
        status: 'valid',
        output,
        pValue: output,
        differences,
        absoluteDifferences,
        ranks,
        activeRanks: activeRows.map(row => row.rank),
        activeRows,
        positiveRankSum,
        negativeRankSum,
        rankTotal: positiveRankSum + negativeRankSum,
        signedScore,
        nonzeroCount: active.length,
        zeroCount: 5 - active.length,
        assignmentCount,
        tailCount,
        distribution,
        signedScores: distribution.map(row => row.score),
        aTimes: Array(5).fill(10),
        bTimes: differences.map(d => 10 + d)
      };
    }
    const rawA = [1, 3, p.lastScore],
      rawB = [2, 4, 6],
      raw = [...rawA, ...rawB],
      scaled = raw.map(value => value * p.scale);
    if (
      raw.some((value, i) => value !== 0 && scaled[i] === 0) ||
      raw.some((value, i) => raw.some((other, j) => value !== other && scaled[i] === scaled[j]))
    )
      return precision(
        checked,
        'scale',
        'This calibration loses a score distinction at numerical precision. Choose another score or multiplier.'
      );
    const doubledRanks = doubledMidranks(raw),
      rankA = doubledRanks.slice(0, 3).map(r => r / 2),
      rankB = doubledRanks.slice(3).map(r => r / 2),
      rankSumA = rankA.reduce((sum, value) => sum + value, 0),
      uA = rankSumA - 6,
      uB = 9 - uA,
      pairComparisons = rawA.map(a => rawB.map(b => (a > b ? 1 : a === b ? 0.5 : 0))),
      wins = pairComparisons.flat().filter(value => value === 1).length,
      ties = pairComparisons.flat().filter(value => value === 0.5).length,
      distribution = allocations.map(indices => {
        const doubledU = indices.reduce((sum, i) => sum + doubledRanks[i], 0) - 12;
        return { u: doubledU / 2, inTail: Math.abs(doubledU - 9) >= Math.abs(2 * uA - 9) };
      }),
      tailCount = distribution.filter(row => row.inTail).length,
      output = tailCount / allocations.length;
    return {
      ...checked,
      status: 'valid',
      output,
      pValue: output,
      rawA,
      rawB,
      groupA: scaled.slice(0, 3),
      groupB: scaled.slice(3),
      pooled: scaled.map((value, i) => ({
        group: i < 3 ? 'A' : 'B',
        position: (i % 3) + 1,
        value,
        rank: doubledRanks[i] / 2,
        doubledRank: doubledRanks[i]
      })),
      rankA,
      rankB,
      rankSumA,
      uA,
      uB,
      wins,
      ties,
      pairComparisons,
      pairCount: 9,
      probabilitySuperiority: uA / 9,
      allocationCount: 20,
      tailCount,
      distribution,
      uValues: distribution.map(row => row.u),
      sampleSizeA: 3,
      sampleSizeB: 3,
      totalCount: 6
    };
  }
  const canInterpolate = (slug, a, b) =>
    validateParams(slug, a).valid &&
    validateParams(slug, b).valid &&
    (slug !== 'wilcoxon-signed-rank' || a.pattern === b.pattern);
  function specs(slug) {
    const d = get(slug);
    return {
      title: d.title,
      expression: d.expression,
      axis: d.axis,
      unit: d.unit,
      primaryLabel: d.primaryLabel,
      setting: d.setting,
      limits: d.limits,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug).filter(c => c.type !== 'select'),
      canInterpolate: (a, b) => canInterpolate(slug, a, b),
      readout: (p, r) => ({
        expression: d.expression,
        stats: !r.valid
          ? []
          : slug === 'covariance-matrix'
            ? [
                {
                  label: 'TOTAL VARIANCE',
                  value: r.output,
                  note: 'sum of the two sample variances, mm²'
                },
                {
                  label: 'DETERMINANT',
                  value: r.determinant,
                  note: 'squared-variance product, mm⁴'
                },
                {
                  label: 'MATRIX RANK',
                  value: r.rank,
                  note: r.rank === 1 ? 'line geometry' : 'two-dimensional geometry'
                }
              ]
            : slug === 'wilcoxon-signed-rank'
              ? [
                  {
                    label: 'TWO-SIDED p',
                    value: r.output,
                    note: 'inclusive conditional sign tail'
                  },
                  {
                    label: 'POSITIVE RANK SUM',
                    value: r.positiveRankSum,
                    note: 'average ranks include tied magnitudes'
                  },
                  {
                    label: 'RETAINED PAIRS',
                    value: r.nonzeroCount,
                    note: 'zero differences are omitted'
                  }
                ]
              : [
                  {
                    label: 'TWO-SIDED p',
                    value: r.output,
                    note: 'inclusive tail among all 20 allocations'
                  },
                  {
                    label: 'A PAIR SCORE',
                    value: r.uA,
                    note: 'A wins plus half the ties, out of nine'
                  },
                  {
                    label: 'EMPIRICAL A SHARE',
                    value: r.probabilitySuperiority,
                    note: 'descriptive pairwise fraction'
                  }
                ],
        insight: r.valid
          ? slug === 'covariance-matrix'
            ? 'Off-diagonal covariance tilts joint spread. The trace is the sum of squared principal radii; zero residual collapses one radius to a line.'
            : slug === 'wilcoxon-signed-rank'
              ? 'A difference changes its magnitude before its rank. Rankings and their exact tail count can jump at zero or ties, so probability is not interpolated between those events.'
              : 'A common positive multiplier moves score positions while keeping all comparisons and ranks unchanged. The null is equal distributions with exchangeable labels, not an unrestricted median-only claim.'
          : r.errors.map(e => e.message).join(' ')
      })
    };
  }
  const curveValue = (slug, p, value) => {
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
  };
  const C = {
    bg: '#111e2b',
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
  const n = value => Number(value.toFixed(5)),
    f = value =>
      Number.isFinite(value)
        ? String(Number(value.toPrecision(4))).replace(/-/g, '−')
        : 'unavailable';
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const dot = (x, y, color, radius = 5) =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="${radius}" fill="${color}"/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const span = (keys, value, role = 'intermediate') =>
    `<tspan data-quantity="${esc(keys)}" data-story-part="${role}">${esc(value)}</tspan>`;
  const scope = value =>
    Array.from(String(value))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'comparison-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 440" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="440" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function ellipse(r, cx, cy, scale, color, dashed = false) {
    const a = r.majorRadius * scale,
      b = r.minorRadius * scale,
      angle = (-r.angleMajor * 180) / Math.PI;
    return r.rank === 1
      ? line(
          cx - a * Math.cos(r.angleMajor),
          cy + a * Math.sin(r.angleMajor),
          cx + a * Math.cos(r.angleMajor),
          cy - a * Math.sin(r.angleMajor),
          color,
          4,
          dashed ? 'stroke-dasharray="5 4"' : ''
        )
      : `<ellipse cx="${n(cx)}" cy="${n(cy)}" rx="${n(a)}" ry="${n(b)}" transform="rotate(${n(angle)} ${n(cx)} ${n(cy)})" fill="${color}" fill-opacity="${dashed ? 0 : 0.12}" stroke="${color}" stroke-width="3"${dashed ? ' stroke-dasharray="5 4"' : ''}/>`;
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      middle = w / 2,
      left = o.compact ? 36 : 80,
      right = w - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'covariance-matrix') {
      const side = 208,
        scale = side / 16,
        cx = middle,
        cy = 226,
        px = x => cx + x * scale,
        py = y => cy - y * scale;
      body =
        text(middle, 29, 'Two errors, one joint spread', C.ink, o.compact ? 21 : 26) +
        `<text x="${middle}" y="58" fill="${C.cyan}" font-size="${o.compact ? 16 : 20}" text-anchor="middle">${span('horizontal', 'a = ' + f(p.horizontal), 'input')} · ${span('shared', 'b = ' + f(p.shared), 'input')} · ${span('residual', 'c = ' + f(p.residual), 'input')} mm</text>`;
      body += mark(
        'matrix',
        `<text x="${middle}" y="88" fill="${C.mint}" font-size="${o.compact ? 15 : 20}" text-anchor="middle">S = [${span('sxx horizontal', f(r.sxx))}, ${span('sxy horizontal shared', f(r.sxy))}; ${span('sxy horizontal shared', f(r.sxy))}, ${span('syy shared residual', f(r.syy))}] mm²</text>`
      );
      for (const value of [-8, 0, 8])
        body +=
          line(px(value), py(8), px(value), py(-8)) +
          line(px(-8), py(value), px(8), py(value)) +
          text(px(value), 344, value, C.muted, 14) +
          text(px(-8) - 9, py(value) + 5, value, C.muted, 14, 'end');
      body += mark('meanX meanY', dot(cx, cy, C.muted, 3));
      body += mark(
        'matrix sxx sxy syy lambdaMajor lambdaMinor angleMajor majorRadius minorRadius horizontal shared residual',
        ellipse(r, cx, cy, scale, C.gold)
      );
      const dx = r.majorRadius * Math.cos(r.angleMajor) * scale,
        dy = -r.majorRadius * Math.sin(r.angleMajor) * scale;
      if (r.orientationStable)
        body += mark(
          'lambdaMajor majorRadius angleMajor',
          line(cx - dx, cy - dy, cx + dx, cy + dy, C.cyan, 2)
        );
      else
        body += text(
          middle,
          109,
          r.angleDefined
            ? 'Near-circular: direction is unstable'
            : 'Circle: no unique principal direction',
          C.muted,
          14
        );
      r.rows.forEach((row, i) => {
        body += mark(
          'xValues yValues rows residual' + (i === 2 ? '' : ' horizontal shared'),
          dot(px(row.x), py(row.y), C.mint, 4),
          'input'
        );
      });
      if (pin?.valid)
        body += mark('output', ellipse(pin, cx, cy, scale, C.violet, true), 'reference');
      body +=
        mark(
          'count degreesFreedom',
          text(middle, 369, '5 pairs · divisor 4 · equal mm axes', C.muted, o.compact ? 15 : 20)
        ) +
        mark(
          'trace output lambdaMajor lambdaMinor horizontal shared residual',
          text(middle, 397, 'Trace = ' + f(r.output) + ' mm²', C.gold, o.compact ? 25 : 29),
          'output'
        ) +
        `<text x="${middle}" y="425" fill="${C.muted}" font-size="${o.compact ? 16 : 20}" text-anchor="middle">${span('rank residual', 'Rank ' + r.rank)} · ${span('determinant horizontal residual', 'det S = ' + f(r.determinant))} mm⁴</text>`;
      return frame(
        slug,
        body,
        o,
        'Fixed equal-scale −8 to 8 mm axes show five constructed error pairs. Gold is the descriptive covariance ellipse, with principal radii equal to square roots of eigenvalues; cyan is its major direction. This one-standard-deviation geometry is not a confidence region or point enclosure. Rank one is explicitly drawn as a line.'
      );
    }
    if (slug === 'wilcoxon-signed-rank') {
      const xZero = o.compact ? 166 : 360,
        px = d => xZero + d * (o.compact ? 20 : 46),
        rankX = o.compact ? 311 : 650;
      body =
        text(middle, 30, 'Pair, omit zeros, then rank', C.ink, o.compact ? 21 : 26) +
        mark(
          'lastDifference differences absoluteDifferences aTimes bTimes',
          text(
            middle,
            61,
            'Fifth B−A = ' + f(p.lastDifference) + ' min',
            C.cyan,
            o.compact ? 18 : 22
          ),
          'input'
        );
      body +=
        text(left, 89, 'Pair', C.muted, 14, 'start') +
        text(xZero, 89, 'B−A · minutes', C.muted, 14) +
        text(rankX, 89, 'Rank', C.muted, 14);
      body += line(xZero, 98, xZero, 263, C.muted, 1.5);
      r.differences.forEach((d, i) => {
        const y = 112 + i * 33,
          color = d > 0 ? C.mint : d < 0 ? C.violet : C.muted;
        body +=
          text(left, y + 5, i + 1, C.muted, 16, 'start') +
          mark(
            'differences absoluteDifferences aTimes bTimes ' +
              (i === 4 ? 'lastDifference' : 'pattern'),
            line(xZero, y, px(d), y, color, 4) + dot(px(d), y, color, 5),
            'input'
          ) +
          mark(
            'ranks activeRanks activeRows nonzeroCount zeroCount',
            text(rankX, y + 5, r.ranks[i] === null ? 'omit' : f(r.ranks[i]), color, 16)
          );
      });
      body += mark(
        'positiveRankSum negativeRankSum rankTotal signedScore',
        text(
          middle,
          296,
          'W⁺ = ' + f(r.positiveRankSum) + ' · W⁻ = ' + f(r.negativeRankSum),
          C.mint,
          o.compact ? 20 : 24
        )
      );
      body += mark(
        'nonzeroCount zeroCount assignmentCount distribution signedScores',
        text(
          middle,
          324,
          r.nonzeroCount + ' retained · ' + r.assignmentCount + ' sign assignments',
          C.muted,
          o.compact ? 16 : 20
        )
      );
      const x0 = left,
        span = right - left;
      r.distribution.forEach((row, i) => {
        const x = x0 + ((i % (r.assignmentCount / 2)) / (r.assignmentCount / 2 - 1)) * span,
          y = 350 + Math.floor(i / (r.assignmentCount / 2)) * 16;
        body += mark(
          'distribution signedScores tailCount',
          dot(x, y, row.inTail ? C.gold : C.grid, 4)
        );
      });
      body += mark(
        'tailCount assignmentCount output pValue',
        text(
          middle,
          411,
          'p = ' + r.tailCount + '/' + r.assignmentCount + ' ≈ ' + f(r.output),
          C.gold,
          o.compact ? 26 : 30
        ),
        'output'
      );
      if (pin?.valid)
        body += mark(
          'output',
          text(right, 432, 'Pinned p ' + f(pin.output), C.violet, 14, 'end'),
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'Each fixed-scale row shows one paired B−A difference in minutes. Zeros are omitted; tied absolute differences receive average ranks. Every dot represents one equally likely retained-sign assignment; gold meets the inclusive absolute signed-score threshold. These four/five-pair conditional references cannot produce a two-sided p below .05.'
      );
    }
    const px = value => left + (value / 14) * (right - left),
      cell = 36,
      gx = middle - 1.5 * cell,
      gy = 243;
    body =
      text(middle, 30, 'Count wins and half the ties', C.ink, o.compact ? 21 : 26) +
      mark(
        'lastScore scale rawA rawB groupA groupB sampleSizeA sampleSizeB totalCount',
        text(
          middle,
          61,
          'v = ' + f(p.lastScore) + ' · k = ' + f(p.scale) + ' · 3 + 3 scores',
          C.cyan,
          o.compact ? 16 : 21
        ),
        'input'
      );
    [r.groupA, r.groupB].forEach((group, row) => {
      const y = 112 + row * 50,
        color = row === 0 ? C.cyan : C.violet,
        rankValues = row ? r.rankB : r.rankA;
      body += mark(
        (row ? 'groupB rankB' : 'groupA rankA rankSumA') + ' pooled',
        text(
          middle,
          y - 24,
          (row ? 'B' : 'A') +
            ': ' +
            group.map(f).join(', ') +
            ' · ranks ' +
            rankValues.map(f).join(', '),
          color,
          o.compact ? 14 : 18
        )
      );
      body += line(left, y, right, y);
      group.forEach((value, i) => {
        body += mark(
          (row ? 'groupB rawB' : 'groupA rawA') +
            ' pooled scale' +
            (row === 0 && i === 2 ? ' lastScore' : ''),
          dot(px(value), y + (i - 1) * 10, color, 4.5),
          'input'
        );
      });
    });
    body +=
      text(left, 193, '0', C.muted, 14) +
      text(right, 193, '14', C.muted, 14) +
      text(middle, 208, 'A rows · B columns', C.muted, o.compact ? 15 : 19);
    for (let j = 0; j < 3; j++)
      body += text(gx + j * cell + (cell - 3) / 2, 231, j + 1, C.muted, 14);
    for (let i = 0; i < 3; i++)
      body += text(gx - 10, gy + i * cell + (cell - 3) / 2 + 5, i + 1, C.muted, 14, 'end');
    r.pairComparisons.forEach((row, i) =>
      row.forEach((value, j) => {
        const x = gx + j * cell,
          y = gy + i * cell,
          color = value === 1 ? C.mint : value === 0.5 ? C.gold : C.grid;
        body += mark(
          'pairComparisons wins ties pairCount uA uB' + (i === 2 ? ' lastScore' : ''),
          `<rect x="${n(x)}" y="${n(y)}" width="${cell - 3}" height="${cell - 3}" rx="5" fill="${C.grid}" fill-opacity=".4" stroke="${color}"/>` +
            (value > 0
              ? `<rect x="${n(x)}" y="${n(y)}" width="${n((cell - 3) * value)}" height="${cell - 3}" fill="${color}" fill-opacity=".35"/>`
              : '') +
            text(
              x + (cell - 3) / 2,
              y + (cell - 3) / 2 + 6,
              f(value),
              value === 0 ? C.muted : C.ink,
              19
            )
        );
      })
    );
    body += mark(
      'rankSumA uA uB probabilitySuperiority',
      text(
        middle,
        379,
        'R_A = ' + f(r.rankSumA) + ' · U_A = ' + f(r.uA) + ' of 9',
        C.mint,
        o.compact ? 20 : 24
      )
    );
    r.distribution.forEach((row, i) => {
      const x = left + (i * (right - left)) / 19;
      body += mark(
        'distribution uValues tailCount allocationCount',
        `<g data-reference-allocation="true" data-u="${row.u}">${dot(x, 402, row.inTail ? C.gold : C.grid, 4)}</g>`
      );
      if (pin?.valid && pin.distribution[i].inTail)
        body += mark(
          'output',
          `<circle cx="${n(x)}" cy="402" r="6" fill="none" stroke="${C.violet}" stroke-width="1.5"/>`,
          'reference'
        );
    });
    body += mark(
      'tailCount allocationCount output pValue',
      text(middle, 431, 'p = ' + r.tailCount + '/20 = ' + f(r.output), C.gold, o.compact ? 25 : 28),
      'output'
    );
    return frame(
      slug,
      body,
      o,
      'The score strips use one fixed 0–14 point calibration scale; vertical lanes keep all three scores visible when tied. The nine cells count A above B as one, equal scores as one-half, and A below B as zero; the filled cell fraction equals that contribution. Each reference dot is one of twenty exchangeable three-versus-three label allocations, and gold meets the inclusive U threshold. Violet rings show pinned tail assignments. A positive common calibration multiplier moves scores while leaving ranks and U unchanged. This is not a general median-only or causal claim.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls[0],
      discrete = slug !== 'covariance-matrix',
      events =
        slug === 'wilcoxon-signed-rank' ? [-4, -3, -2, -1, 0, 1, 2, 3, 4] : [0, 1, 2, 3, 4, 6, 7],
      values = [
        ...new Set([
          ...Array.from({ length: 101 }, (_, i) => c.min + ((c.max - c.min) * i) / 100),
          ...(discrete ? events : [])
        ])
      ].sort((a, b) => a - b),
      current = [
        {
          x: p[c.key],
          y: r.output,
          label: d.primaryLabel,
          quantity: c.key + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ],
      pin = o.baseline && evaluate(slug, o.baseline);
    if (pin?.valid)
      current.push({
        x: pin.parameters[c.key],
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    return Plot.render(
      {
        title: d.title,
        description: d.setting,
        x: { ...c, label: c.label },
        y: { min: 0, max: discrete ? 1 : 35, label: d.primaryLabel + ' (' + d.unit + ')' },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: c.key + ' output',
            color: C.gold,
            dots: discrete,
            points: values.map(x => ({ x, y: curveValue(slug, p, x) }))
          }
        ],
        current,
        notes: [
          discrete
            ? 'Separate evaluated dots retain jumps at zero, score ties and rank changes. No line invents probabilities between those events.'
            : 'The fixed trace axis preserves total variance as the shared error component changes. The covariance ellipse also shows orientation and rank.'
        ]
      },
      o
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(o.compact ? 180 : 380, 210, 'Choose supported inputs', C.gold, o.compact ? 21 : 25),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : geometry(slug, r.parameters, r, o);
  }
  return Object.freeze({
    ids,
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    canInterpolate,
    doubledMidranks
  });
});
