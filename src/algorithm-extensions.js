/* Bounded search traces and a four-station cable network. The host owns time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasAlgorithmExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const items = Object.freeze([2, 4, 6, 8, 10, 12, 14, 16]);
  const field = (key, label, value, min, max, unit) => ({
    key,
    label,
    value,
    min,
    max,
    step: 1,
    discrete: true,
    unit
  });
  const definitions = freeze({
    'linear-search': {
      title: 'Linear search, one check at a time',
      expression: 'Cₖ = min(k, C)',
      axis: 'steps',
      unit: 'checks',
      primaryLabel: 'Comparisons shown',
      setting:
        'A workshop clerk checks eight numbered bins from left to right for a requested part code. Stop at the first match or after checking every bin.',
      limits:
        'The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.',
      insight:
        'Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.',
      controls: [
        field('steps', 'Comparisons to reveal k', 5, 0, 8, 'checks'),
        field('target', 'Requested code t', 10, 0, 17, '')
      ]
    },
    'binary-search': {
      title: 'Binary search and the remaining window',
      expression: 'm = ⌊(ℓ + h)/2⌋; Cₖ = min(k, C)',
      axis: 'steps',
      unit: 'checks',
      primaryLabel: 'Comparisons shown',
      setting:
        'The same workshop bins are sorted by increasing part code. Compare the middle bin of the remaining window, then discard the half whose values cannot match.',
      limits:
        'The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
      insight:
        'Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.',
      controls: [
        field('steps', 'Comparisons to reveal k', 3, 0, 4, 'checks'),
        field('target', 'Requested code t', 10, 0, 17, '')
      ]
    },
    'minimum-spanning-tree': {
      title: 'Minimum spanning tree',
      expression: 'W(T) = ∑ wₑ; minimize W(T)',
      axis: 'ac',
      unit: 'm',
      primaryLabel: 'Least total cable',
      setting:
        'Connect four garden sensor stations using three of six available cable runs. Each run has a quoted routed length. Seek the least total cable while connecting every station without a loop.',
      limits:
        'Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.',
      insight:
        'Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.',
      controls: [
        field('ac', 'Cable quote AC, w', 4, 1, 8, 'm'),
        field('bd', 'Cable quote BD, v', 4, 1, 8, 'm')
      ]
    }
  });
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown algorithm model.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, ...c }) => ({ ...c }));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared whole-number input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const value = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        typeof value !== 'number' ||
        !Number.isFinite(value) ||
        !Number.isInteger(value) ||
        value < c.min ||
        value > c.max
      )
        errors.push({
          field: c.key,
          message: 'Use a whole number from ' + c.min + ' to ' + c.max + '.'
        });
      else parameters[c.key] = value === 0 ? 0 : value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  function searchTrace(binary, target) {
    const trace = [];
    let low = 0,
      high = items.length - 1,
      foundPosition = null;
    while (low <= high) {
      const index = binary ? Math.floor((low + high) / 2) : low;
      const value = items[index],
        relation = target === value ? '=' : target < value ? '<' : '>';
      const beforeLow = low,
        beforeHigh = high;
      if (target === value) foundPosition = index + 1;
      else if (binary && target < value) high = index - 1;
      else low = index + 1;
      trace.push({
        position: index + 1,
        value,
        relation,
        low: beforeLow + 1,
        high: beforeHigh + 1,
        nextLow: low + 1,
        nextHigh: high + 1
      });
      if (foundPosition !== null) break;
    }
    return { trace, foundPosition };
  }
  const edgeSpecs = Object.freeze(
    [
      ['AB', 0, 1, 2],
      ['AC', 0, 2, 'ac'],
      ['AD', 0, 3, 6],
      ['BC', 1, 2, 3],
      ['BD', 1, 3, 'bd'],
      ['CD', 2, 3, 2]
    ].map(freeze)
  );
  function joinsAll(edges) {
    const reached = new Set([0]);
    for (let pass = 0; pass < 3; pass++)
      for (const e of edges)
        if (reached.has(e.a) || reached.has(e.b)) {
          reached.add(e.a);
          reached.add(e.b);
        }
    return reached.size === 4;
  }
  function network(p) {
    const edges = edgeSpecs.map(([id, a, b, weight]) => ({
      id,
      a,
      b,
      weight: typeof weight === 'string' ? p[weight] : weight
    }));
    // A deterministic greedy representative; tie multiplicity is independently enumerated below.
    const parent = [0, 1, 2, 3],
      find = i => {
        while (parent[i] !== i) i = parent[i];
        return i;
      },
      selected = [];
    for (const e of edges.slice().sort((a, b) => a.weight - b.weight || a.id.localeCompare(b.id))) {
      const a = find(e.a),
        b = find(e.b);
      if (a !== b) {
        parent[a] = b;
        selected.push(e);
      }
      if (selected.length === 3) break;
    }
    const output = selected.reduce((sum, e) => sum + e.weight, 0),
      trees = [];
    for (let i = 0; i < 4; i++)
      for (let j = i + 1; j < 5; j++)
        for (let k = j + 1; k < 6; k++) {
          const chosen = [edges[i], edges[j], edges[k]];
          if (joinsAll(chosen))
            trees.push({
              edges: chosen.map(e => e.id),
              weight: chosen.reduce((sum, e) => sum + e.weight, 0)
            });
        }
    const minima = trees.filter(tree => tree.weight === output),
      selectedIds = selected.map(e => e.id);
    return {
      output,
      edges,
      stationA: 'A',
      stationB: 'B',
      stationC: 'C',
      stationD: 'D',
      ...Object.fromEntries(edges.map(edge => ['edge' + edge.id, edge.weight])),
      selected: selectedIds,
      selectedWeights: selected.map(e => e.weight),
      trees,
      minima,
      treeCount: trees.length,
      tieCount: minima.length,
      alternatives: minima.filter(t => t.edges.some(id => !selectedIds.includes(id))),
      totalQuote: edges.reduce((sum, e) => sum + e.weight, 0),
      selectedLabel: selectedIds.join(' + '),
      sumLabel: selected.map(e => e.weight).join(' + '),
      tieLabel: minima.length === 1 ? 'Unique minimum' : minima.length + ' tied minimum trees'
    };
  }
  function evaluate(slug, input) {
    const c = validateParams(slug, input);
    if (!c.valid) return { ...c, status: 'invalid_parameters', output: null };
    const p = c.parameters;
    if (slug === 'minimum-spanning-tree') {
      const result = freeze(network(p));
      return { ...c, ...result, status: 'valid', unit: 'm', exactDisplay: String(result.output) };
    }
    const full = searchTrace(slug === 'binary-search', p.target),
      completedCost = full.trace.length,
      performed = Math.min(p.steps, completedCost),
      done = performed === completedCost;
    const shownTrace = full.trace.slice(0, performed),
      last = shownTrace.at(-1),
      next = full.trace[performed];
    const low = last ? last.nextLow : 1,
      high = last ? last.nextHigh : items.length;
    return {
      ...c,
      status: 'valid',
      unit: 'checks',
      output: performed,
      performed,
      completedCost,
      remaining: completedCost - performed,
      done,
      foundPosition: done ? full.foundPosition : null,
      finalFoundPosition: full.foundPosition,
      listLength: items.length,
      values: items,
      trace: freeze(full.trace),
      shownTrace: freeze(shownTrace),
      low,
      high,
      windowSize: done ? (full.foundPosition === null ? 0 : 1) : Math.max(0, high - low + 1),
      nextPosition: next?.position ?? null,
      lastPosition: last?.position ?? null,
      lastValue: last?.value ?? null,
      checkLabel: last ? p.target + ' ' + last.relation + ' ' + last.value : 'No comparison yet',
      statusLabel: !done
        ? 'In progress'
        : full.foundPosition === null
          ? 'Code absent'
          : 'Found at bin ' + full.foundPosition,
      windowLabel: done
        ? full.foundPosition === null
          ? 'No candidates remain'
          : 'Match found'
        : 'Bins ' + low + ' to ' + high,
      exactDisplay: String(performed)
    };
  }
  function readout(slug, p, r) {
    if (!r.valid)
      return {
        expression: 'Choose supported whole inputs',
        stats: [],
        insight: r.errors.map(e => e.message).join(' ')
      };
    if (slug === 'minimum-spanning-tree')
      return {
        expression: r.sumLabel + ' = ' + r.output + ' m',
        stats: [
          { label: 'Least total cable', value: r.output, note: 'm' },
          { label: 'Minimum choices', value: r.tieCount, note: r.tieLabel }
        ],
        insight: get(slug).insight
      };
    return {
      expression: r.performed + ' shown / ' + r.completedCost + ' for the completed run',
      stats: [
        { label: 'Shown comparisons', value: r.performed, note: r.statusLabel },
        {
          label: 'Completed run cost',
          value: r.completedCost,
          note: 'one three-way comparison per check'
        }
      ],
      insight: get(slug).insight
    };
  }
  function specs(slug) {
    const { controls: ignored, ...d } = get(slug);
    return {
      ...d,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug).map(({ key, label, min, max, step, discrete }) => ({
        key,
        label,
        min,
        max,
        step,
        discrete
      })),
      readout: (p, r) => readout(slug, p, r)
    };
  }
  function curveValue(slug, p, value) {
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
  }
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
  const text = (x, y, value, color = C.ink, size = 17, anchor = 'start') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, xx, yy, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const rect = (x, y, w, h, color, extra = '') =>
    `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  function frame(slug, body, o, caption, h = 380) {
    const w = o.compact ? 360 : 760,
      id = 'algorithm-' + String(o.id || slug).replace(/[^a-zA-Z0-9-]/g, '-');
    return `<figure class="visualization-frame algorithm-extension-scene"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="group" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${w}" height="${h}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function searchGeometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      cell = (w - 48) / 8,
      y = 120,
      seen = new Set(r.shownTrace.map(row => row.position));
    let body =
      text(
        24,
        33,
        slug === 'linear-search' ? 'Check bins in order' : 'Halve the candidate window',
        C.ink,
        o.compact ? 21 : 27
      ) + text(24, 65, 'One check is one three-way comparison', C.muted, o.compact ? 14 : 17);
    for (let i = 0; i < 8; i++) {
      const position = i + 1,
        x = 24 + i * cell,
        matched = r.done && r.foundPosition === position,
        next = r.nextPosition === position;
      const inside = !r.done && position >= r.low && position <= r.high;
      const color = matched ? C.mint : seen.has(position) ? C.gold : inside ? C.cyan : C.grid;
      body += mark(
        'target values listLength low high nextPosition lastPosition foundPosition',
        rect(
          x + 2,
          y,
          cell - 5,
          42,
          color,
          `rx="5" fill-opacity="${matched || seen.has(position) ? '.7' : '.2'}" stroke="${next ? C.cyan : color}" stroke-width="${next ? 3 : 1}"`
        ) +
          text(x + cell / 2, y + 28, items[i], C.ink, o.compact ? 18 : 23, 'middle') +
          text(x + cell / 2, y + 66, position, C.muted, 14, 'middle'),
        'input'
      );
    }
    body +=
      mark('listLength', text(24, 100, 'Part codes', C.muted, 15), 'reference') +
      text(24, 216, 'Positions run from 1 to 8', C.muted, o.compact ? 14 : 17);
    if (slug === 'binary-search') {
      r.shownTrace.forEach((row, index) => {
        const yy = 247 + index * 19,
          start = 24 + (row.low - 1) * cell,
          length = (row.high - row.low + 1) * cell;
        body += mark(
          'steps performed output low high windowSize',
          rect(start + 2, yy, length - 5, 8, C.cyan, 'fill-opacity=".35"') +
            `<circle cx="${n(24 + (row.position - 0.5) * cell)}" cy="${yy + 4}" r="5" fill="${C.gold}"/>`
        );
      });
    } else {
      for (let i = 0; i < 8; i++)
        body += mark(
          'steps performed output',
          `<circle cx="${n(24 + (i + 0.5) * cell)}" cy="265" r="${i < r.performed ? 8 : 4}" fill="${i < r.performed ? C.gold : C.grid}"/>`,
          'output'
        );
    }
    const limit = slug === 'linear-search' ? 8 : 4;
    body +=
      mark(
        'steps performed output remaining',
        rect(24, 341, w - 48, 12, C.grid) +
          rect(24, 341, ((w - 48) * r.performed) / limit, 12, C.gold),
        'output'
      ) +
      mark(
        'completedCost',
        line(
          24 + ((w - 48) * r.completedCost) / limit,
          335,
          24 + ((w - 48) * r.completedCost) / limit,
          359,
          C.cyan,
          3
        )
      ) +
      text(24, 328, 'Gold: shown · cyan tick: complete run', C.muted, o.compact ? 14 : 16);
    if (o.baseline) {
      const b = evaluate(slug, o.baseline);
      if (b.valid)
        body += mark(
          'output',
          line(
            24 + ((w - 48) * b.output) / (slug === 'linear-search' ? 8 : 4),
            337,
            24 + ((w - 48) * b.output) / (slug === 'linear-search' ? 8 : 4),
            359,
            C.violet,
            3
          ) + text(w - 24, 374, 'Violet tick: pinned shown count', C.violet, 14, 'end'),
          'output'
        );
    }
    return frame(
      slug,
      body,
      o,
      get(slug).insight +
        ' ' +
        r.performed +
        ' comparisons shown; completed run cost ' +
        r.completedCost +
        '. ' +
        r.statusLabel +
        '.'
    );
  }
  function networkGeometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      positions = [
        [w * 0.18, 116],
        [w * 0.82, 116],
        [w * 0.18, 268],
        [w * 0.82, 268]
      ],
      labelPositions = [
        [0.5, 98],
        [0.1, 196],
        [0.56, 163],
        [0.43, 235],
        [0.9, 196],
        [0.5, 294]
      ];
    let body =
      text(24, 33, 'Connect every sensor station', C.ink, o.compact ? 21 : 27) +
      text(24, 64, 'Layout schematic · widths encode cable metres', C.muted, o.compact ? 13 : 17);
    const tied = new Set(r.minima.flatMap(tree => tree.edges));
    r.edges.forEach((e, index) => {
      const a = positions[e.a],
        b = positions[e.b],
        selected = r.selected.includes(e.id),
        alternative = tied.has(e.id) && !selected,
        thickness = 1.5 + e.weight * 0.7;
      let drawing = selected ? line(...a, ...b, C.mint, thickness + 5, 'stroke-opacity=".25"') : '';
      drawing += line(
        ...a,
        ...b,
        selected || alternative ? C.mint : C.grid,
        thickness,
        alternative ? 'stroke-dasharray="5 6"' : ''
      );
      drawing +=
        rect(
          w * labelPositions[index][0] - 15,
          labelPositions[index][1] - 19,
          30,
          26,
          C.bg,
          'rx="5"'
        ) +
        text(
          w * labelPositions[index][0],
          labelPositions[index][1],
          e.weight,
          e.id === 'AC' ? C.cyan : e.id === 'BD' ? C.violet : C.ink,
          18,
          'middle'
        );
      body += mark(
        (e.id === 'AC' ? 'ac ' : e.id === 'BD' ? 'bd ' : '') +
          'edge' +
          e.id +
          ' edges selected output tieCount',
        drawing,
        selected ? 'output' : 'input'
      );
    });
    positions.forEach(([x, y], i) => {
      body += mark(
        'station' + 'ABCD'[i] + ' treeCount selected',
        `<circle cx="${n(x)}" cy="${y}" r="19" fill="${C.bg}" stroke="${C.cyan}" stroke-width="2"/>` +
          text(x, y + 6, 'ABCD'[i], C.ink, 18, 'middle'),
        'reference'
      );
    });
    let start = 24;
    r.selectedWeights.forEach((weight, i) => {
      const length = ((w - 48) * weight) / 8;
      body += mark(
        'output selectedWeights',
        rect(start, 337, length, 15, [C.cyan, C.gold, C.mint][i]),
        'output'
      );
      start += length;
    });
    body += text(24, 324, 'Cable in the chosen minimum tree', C.muted, o.compact ? 14 : 17);
    if (o.baseline) {
      const b = evaluate(slug, o.baseline);
      if (b.valid)
        body += mark(
          'output',
          line(
            24 + ((w - 48) * b.output) / 8,
            332,
            24 + ((w - 48) * b.output) / 8,
            359,
            C.violet,
            3
          ) + text(w - 24, 375, 'Violet tick: pinned total', C.violet, 14, 'end'),
          'output'
        );
    }
    return frame(
      slug,
      body,
      o,
      get(slug).insight + ' Total ' + r.output + ' m. ' + r.tieLabel + '.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = controls(slug).find(control => control.key === d.axis),
      maximum = slug === 'minimum-spanning-tree' ? 8 : c.max;
    const points = parameters =>
      Array.from({ length: c.max - c.min + 1 }, (_, i) => ({
        x: c.min + i,
        y: curveValue(slug, parameters, c.min + i)
      }));
    const series = [
      {
        id: 'current',
        label: slug === 'minimum-spanning-tree' ? 'Minimum cable total' : 'Shown comparisons',
        quantity: d.axis + ' output',
        color: C.gold,
        dots: true,
        points: points(p)
      }
    ];
    const current = [
      {
        x: p[d.axis],
        y: r.output,
        label: 'Current whole setting',
        quantity: d.axis + ' output',
        color: C.mint,
        draggable: o.sceneControl !== false
      }
    ];
    if (o.baseline) {
      const b = evaluate(slug, o.baseline);
      if (b.valid) {
        series.push({
          id: 'pinned',
          label: 'Pinned inputs',
          quantity: 'output',
          color: C.violet,
          dots: true,
          points: points(b.parameters)
        });
        current.push({
          x: b.parameters[d.axis],
          y: b.output,
          label: 'Pinned output',
          quantity: 'output',
          color: C.violet
        });
      }
    }
    return Plot.render(
      {
        title: d.title,
        description: d.insight,
        x: { key: d.axis, label: c.label, min: c.min, max: c.max, step: 1, value: p[d.axis] },
        y: { label: d.primaryLabel + ' (' + d.unit + ')', min: 0, max: maximum + 0.5 },
        series,
        current,
        notes: [
          'Dots denote whole choices. The model does not interpolate fractional comparisons or quotes.'
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
        text(24, 44, 'Choose supported whole inputs', C.gold, 21) +
          text(24, 83, r.errors[0].message, C.ink, o.compact ? 15 : 19),
        o,
        'Inputs are discrete and are never silently rounded.',
        120
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : slug === 'minimum-spanning-tree'
        ? networkGeometry(slug, r.parameters, r, o)
        : searchGeometry(slug, r.parameters, r, o);
  }
  return Object.freeze({
    ids: Object.freeze(Object.keys(definitions)),
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    items,
    searchTrace
  });
});
