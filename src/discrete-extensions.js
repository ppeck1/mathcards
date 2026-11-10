/* Small finite counting families. The shared host owns time, state and controls. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasDiscreteExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const field = (key, label, value, min, max, unit = '') => ({
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
    'graph-coloring': {
      title: 'Graph coloring and compatible sessions',
      expression: 'χ(G) = min{k : N_G(k) > 0}',
      axis: 'palette',
      primaryLabel: 'Proper labeled assignments',
      unit: 'assignments',
      setting:
        'Four workshop sessions form a cycle of shared-instructor conflicts. A selected extra conflict joins sessions 1 and 3. Assign numbered time slots so every conflicting pair meets at different times.',
      limits:
        'Only this four-session cycle and its optional diagonal are implemented. Count every assignment of four sessions to k labeled slots, including assignments that leave a slot unused. Time-slot numbers are categories, not durations. The layout is schematic; edges encode conflicts. This is neither a general graph editor nor a scheduling optimizer with room or duration constraints.',
      insight:
        'A conflict requires two different slot labels. Count all proper assignments for the selected palette; the first palette with any proper assignment gives the chromatic number. A failed palette is shown with a minimum-conflict assignment, never labeled proper.',
      controls: [
        field('palette', 'Available time slots k', 2, 1, 4, 'slots'),
        field('diagonal', 'Extra session conflict d', 0, 0, 1)
      ]
    },
    'inclusion-exclusion': {
      title: 'Inclusion–exclusion: count the overlap once',
      expression: '|A ∪ B| = |A| + |B| − |A ∩ B|',
      axis: 'overlap',
      primaryLabel: 'People needing one chair',
      unit: 'people',
      setting:
        'A community workshop has a woodcraft signup list A and a repair signup list B. Some people registered for both activities, but each person needs only one chair for the shared opening talk.',
      limits:
        'Counts are whole people from 0 to 12 on each list. The overlap cannot exceed either list count. The displayed people are an original constructed realization of those counts, not collected registrations or a probability model. Only the two-set rule is executable.',
      insight:
        'Adding both list sizes counts every shared person twice. Subtract the overlap once to leave one chair per distinct attendee. Gold people appear in both list rows but only once in the chair rows.',
      controls: [
        field('overlap', 'People on both lists h', 3, 0, 12, 'people'),
        field('wood', 'Woodcraft list size a', 7, 0, 12, 'people'),
        field('repair', 'Repair list size b', 6, 0, 12, 'people')
      ]
    }
  });
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown discrete extension.');
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
    if (
      slug === 'inclusion-exclusion' &&
      !errors.length &&
      parameters.overlap > Math.min(parameters.wood, parameters.repair)
    )
      errors.push({
        field: 'overlap',
        message: 'People on both lists cannot exceed either list size.'
      });
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const cycleEdges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 0]
  ];
  function colorings(k, edges) {
    let count = 0,
      assignment = null,
      fewest = edges.length + 1,
      representative = null;
    for (let code = 0; code < k ** 4; code++) {
      let value = code;
      const colors = [];
      for (let i = 0; i < 4; i++) {
        colors.push((value % k) + 1);
        value = Math.floor(value / k);
      }
      const conflicts = edges.filter(([a, b]) => colors[a] === colors[b]).length;
      if (conflicts < fewest) {
        fewest = conflicts;
        representative = colors;
      }
      if (!conflicts) {
        count++;
        assignment ||= colors;
      }
    }
    return { count, assignment: assignment || representative, conflicts: fewest };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    if (slug === 'graph-coloring') {
      const edges = p.diagonal ? [...cycleEdges, [0, 2]] : cycleEdges.map(e => [...e]);
      const current = colorings(p.palette, edges);
      let chromatic = null;
      for (let k = 1; k <= 4; k++)
        if (colorings(k, edges).count) {
          chromatic = k;
          break;
        }
      return {
        ...checked,
        status: 'valid',
        unit: 'assignments',
        output: current.count,
        chromatic,
        edges: freeze(edges),
        assignment: freeze(current.assignment),
        conflicts: current.conflicts,
        proper: current.count > 0,
        vertexCount: 4,
        edgeCount: edges.length,
        candidateCount: p.palette ** 4,
        slotLabel: current.assignment.join(', '),
        statusLabel: current.count
          ? 'A proper assignment exists'
          : 'No proper assignment with this palette',
        exactDisplay: String(current.count)
      };
    }
    return {
      ...checked,
      status: 'valid',
      unit: 'people',
      output: p.wood + p.repair - p.overlap,
      total: p.wood + p.repair,
      woodMembers: freeze(
        Array.from({ length: p.wood }, (_, i) => (i < p.overlap ? i : 20 + i - p.overlap))
      ),
      repairMembers: freeze(
        Array.from({ length: p.repair }, (_, i) => (i < p.overlap ? i : 40 + i - p.overlap))
      ),
      woodOnly: p.wood - p.overlap,
      repairOnly: p.repair - p.overlap,
      exactDisplay: String(p.wood + p.repair - p.overlap)
    };
  }
  function readout(slug, p, r) {
    if (!r.valid)
      return {
        expression: 'Choose consistent whole counts',
        stats: [],
        insight: r.errors.map(e => e.message).join(' ')
      };
    return slug === 'graph-coloring'
      ? {
          expression: 'N_G(' + p.palette + ') = ' + r.output,
          stats: [
            { label: 'Proper assignments', value: r.output, note: 'with labeled time slots' },
            { label: 'Chromatic number', value: r.chromatic, note: 'fewest time slots needed' },
            { label: 'Conflicts shown', value: r.conflicts, note: r.statusLabel }
          ],
          insight: get(slug).insight
        }
      : {
          expression: p.wood + ' + ' + p.repair + ' − ' + p.overlap + ' = ' + r.output + ' people',
          stats: [
            { label: 'List entries', value: r.total, note: 'shared people appear twice' },
            {
              label: 'Remove duplicates',
              value: p.overlap,
              note: 'one extra copy per shared person'
            },
            { label: 'Chairs needed', value: r.output, note: 'one for each distinct person' }
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
    violet: '#b8a1ff',
    red: '#ffb08a'
  };
  const colors = [C.cyan, C.gold, C.mint, C.violet];
  const esc = value =>
    String(value ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'start') =>
    `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, xx, yy, color, width = 2, extra = '') =>
    `<line x1="${x}" y1="${y}" x2="${xx}" y2="${yy}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  function frame(slug, body, o, caption, height = 410) {
    const width = o.compact ? 360 : 760,
      id =
        'discrete-' +
        Array.from(String(o.id || slug))
          .map(c => (/[A-Za-z0-9-]/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    return `<figure class="visualization-frame discrete-extension-scene"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="group" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="${height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function coloringGeometry(slug, p, r, o) {
    const width = o.compact ? 360 : 760,
      positions = [
        [width * 0.23, 128],
        [width * 0.77, 128],
        [width * 0.77, 266],
        [width * 0.23, 266]
      ];
    let body =
      text(24, 33, 'Conflict edges need different slots', C.ink, o.compact ? 19 : 28) +
      text(24, 64, 'Session numbers identify vertices', C.muted, o.compact ? 14 : 18);
    body += mark(
      'diagonal',
      text(
        24,
        94,
        p.diagonal ? 'd = 1 · diagonal conflict' : 'd = 0 · no diagonal conflict',
        C.violet,
        o.compact ? 14 : 18
      ) +
        (p.diagonal
          ? ''
          : line(
              ...positions[0],
              ...positions[2],
              C.muted,
              2,
              'stroke-dasharray="2 7" opacity=".3"'
            )),
      'input'
    );
    r.edges.forEach(([a, b], i) => {
      const conflict = r.assignment[a] === r.assignment[b];
      body += mark(
        i === 4 ? 'diagonal edges conflicts' : 'edges conflicts',
        line(
          ...positions[a],
          ...positions[b],
          conflict ? C.red : C.grid,
          i === 4 ? 6 : 4,
          conflict ? 'stroke-dasharray="7 5"' : ''
        ),
        i === 4 ? 'input' : 'reference'
      );
    });
    positions.forEach(([x, y], i) => {
      body += mark(
        'palette assignment',
        `<circle cx="${x}" cy="${y}" r="29" fill="${colors[r.assignment[i] - 1]}"/><text x="${x}" y="${y + 7}" fill="${C.bg}" font-size="22" text-anchor="middle">${r.assignment[i]}</text>` +
          text(x, y + 52, 'Session ' + (i + 1), C.ink, 15, 'middle'),
        'input'
      );
    });
    body += mark(
      'output candidateCount',
      text(
        24,
        352,
        r.output + ' proper of ' + r.candidateCount + ' assignments',
        C.gold,
        o.compact ? 19 : 26
      ),
      'intermediate output'
    );
    body += mark(
      'chromatic',
      text(24, 384, 'Fewest slots needed: ' + r.chromatic, C.mint, o.compact ? 17 : 22),
      'output'
    );
    return frame(
      slug,
      body,
      o,
      r.statusLabel +
        '. ' +
        get(slug).insight +
        (p.diagonal
          ? ''
          : ' The faint dotted diagonal marks only the optional location; it is not an active conflict.') +
        (o.baseline
          ? ' A pin is compared in Graph and the readout; this conflict map shows current inputs.'
          : '')
    );
  }
  function inclusionGeometry(slug, p, r, o) {
    const width = o.compact ? 360 : 760,
      gap = (width - 56) / 12;
    let body = text(24, 33, 'One chair per distinct attendee', C.ink, o.compact ? 20 : 28);
    const row = (amount, shared, y, color, keys) => {
      let result = '';
      for (let i = 0; i < amount; i++)
        result += `<circle cx="${28 + i * gap}" cy="${y}" r="${o.compact ? 8 : 12}" fill="${i < shared ? C.gold : color}"/>`;
      return mark(keys, result, keys.includes('output') ? 'output' : 'input intermediate');
    };
    body +=
      text(24, 72, 'Woodcraft: ' + p.wood, C.cyan, 18) +
      row(p.wood, p.overlap, 97, C.cyan, 'wood woodMembers overlap total');
    body +=
      text(24, 143, 'Repair: ' + p.repair, C.mint, 18) +
      row(p.repair, p.overlap, 168, C.mint, 'repair repairMembers overlap total');
    body += mark(
      'overlap',
      text(24, 210, p.overlap + ' shared people counted twice above', C.gold, o.compact ? 16 : 20),
      'intermediate'
    );
    body += mark(
      'output woodOnly repairOnly',
      text(24, 249, 'Chairs needed: ' + r.output, C.ink, 26),
      'output'
    );
    for (let i = 0; i < r.output; i++) {
      const color = i < p.overlap ? C.gold : i < p.overlap + r.woodOnly ? C.cyan : C.mint;
      body += mark(
        'output overlap woodOnly repairOnly',
        `<circle cx="${28 + (i % 12) * gap}" cy="${283 + Math.floor(i / 12) * 34}" r="${o.compact ? 8 : 12}" fill="${color}"/>`,
        'output'
      );
    }
    body += mark(
      'total overlap output',
      text(24, 375, p.wood + ' + ' + p.repair + ' − ' + p.overlap + ' = ' + r.output, C.gold, 25),
      'output'
    );
    return frame(
      slug,
      body,
      o,
      get(slug).insight + ' Each dot is one constructed person. ' + r.output + ' chairs are needed.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = controls(slug).find(x => x.key === d.axis);
    const points = parameters =>
      Array.from({ length: c.max - c.min + 1 }, (_, i) => ({
        x: c.min + i,
        y: curveValue(slug, parameters, c.min + i)
      }));
    const series = [
      {
        id: 'current',
        label: 'Current model',
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
          label: 'Pinned result',
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
        y: { label: d.primaryLabel, min: 0, max: slug === 'graph-coloring' ? 90 : 25 },
        series,
        current,
        notes: [
          slug === 'graph-coloring'
            ? 'Dots count all labeled assignments for this fixed conflict graph.'
            : 'Only feasible whole overlaps are drawn; missing dots mark impossible inputs.'
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
        text(24, 43, 'Choose consistent whole counts', C.gold, o.compact ? 18 : 23) +
          text(24, 83, r.errors[0].message, C.ink, o.compact ? 13 : 18),
        o,
        'Invalid inputs draw no mathematical result.',
        120
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : slug === 'graph-coloring'
        ? coloringGeometry(slug, r.parameters, r, o)
        : inclusionGeometry(slug, r.parameters, r, o);
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
    render
  });
});
