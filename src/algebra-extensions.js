/* Bounded algebra models. Views are inert; the shared host owns time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasAlgebraExtensions = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const field = (key, symbol, label, value, min, max, unit = 'dimensionless') => ({
    key,
    symbol,
    label,
    value,
    min,
    max,
    step: 0.05,
    unit
  });
  const definitions = {
    'complex-number': {
      title: 'Complex numbers, conjugates and modulus',
      axis: 'imag',
      expression: 'z = a + bi; |z| = √(a² + b²)',
      unit: 'dimensionless',
      primaryLabel: 'Modulus |z|',
      setting:
        'A drawing plotter represents a two-axis offset as one complex number. Its conjugate reflects the offset across the real axis; its modulus measures distance from the origin.',
      limits:
        'The two components lie between −4 and 4 in a declared unitless frame. Conjugation preserves distance. This lesson does not model a physical alternating-current circuit. Underflow of a nonzero squared component is a precision failure.',
      controls: [
        field('imag', 'b', 'Imaginary component b', 2, -4, 4),
        field('real', 'a', 'Real component a', 3, -4, 4)
      ]
    },
    'quadratic-equation': {
      title: 'Quadratic equations and real roots',
      axis: 'constant',
      expression: 'ax² + bx + c = 0; D = b² − 4ac',
      unit: 'roots',
      primaryLabel: 'Distinct real roots',
      setting:
        'A calibration trace has a curved offset from its target level. Move the offset and find where the trace meets zero. The discriminant distinguishes two crossings, one tangency, or no real crossing.',
      limits:
        'The leading coefficient a is positive, from 0.5 to 2; b and c lie between −4 and 4. Only real roots are drawn. A double root is one distinct real solution. Discriminant sign is exact for the represented binary inputs; root positions are numerical. Unrepresentable distinctions produce a precision failure.',
      controls: [
        field('constant', 'c', 'Calibration offset c', -3, -4, 4),
        field('linear', 'b', 'Linear coefficient b', -2, -4, 4),
        field('leading', 'a', 'Curvature coefficient a', 1, 0.5, 2)
      ]
    },
    'linear-programming': {
      title: 'Linear programming and feasible choices',
      axis: 'budget',
      expression: 'maximize V = px + qy; x + y ≤ B',
      unit: 'credits',
      primaryLabel: 'Maximum contribution V',
      setting:
        'A paint workshop chooses litres of two blends. One uses at most four litres and the other at most three; their combined base material is limited. Compare the contribution at each feasible corner.',
      limits:
        'This continuous two-blend family always contains the origin and is bounded by x between 0 and 4, y between 0 and 3, and x+y at most B. Contribution rates may be negative. Tied corners can describe a whole optimal edge; a flat objective makes every feasible point optimal. The app is not a general-purpose linear-programming solver.',
      controls: [
        field('budget', 'B', 'Base material B', 5, 0, 7, 'L'),
        field('rateX', 'p', 'First blend contribution p', 3, -3, 5, 'credits/L'),
        field('rateY', 'q', 'Second blend contribution q', 2, -3, 5, 'credits/L')
      ]
    }
  };
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  freeze(definitions);
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown algebra extension.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, symbol, ...c }) => ({ ...c }));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || input === null || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared numeric inputs.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const value = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (typeof value !== 'number' || !Number.isFinite(value) || value < c.min || value > c.max)
        errors.push({ field: c.key, message: 'Choose a finite value inside the declared range.' });
      else parameters[c.key] = value === 0 ? 0 : value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  // A represented finite Number is an integer times a power of two. Keep sign
  // decisions exact without using a tolerance to manufacture a double root/tie.
  function dyadic(value) {
    if (value === 0) return { n: 0n, e: 0 };
    const bytes = new DataView(new ArrayBuffer(8));
    bytes.setFloat64(0, value);
    const hi = bytes.getUint32(0),
      lo = bytes.getUint32(4),
      exponent = (hi >>> 20) & 2047;
    let n = (BigInt(hi & 1048575) << 32n) | BigInt(lo);
    if (exponent) n |= 1n << 52n;
    return { n: hi >>> 31 ? -n : n, e: exponent ? exponent - 1075 : -1074 };
  }
  const product = (a, b) => ({ n: a.n * b.n, e: a.e + b.e });
  function sum(a, b) {
    const e = Math.min(a.e, b.e);
    return { n: (a.n << BigInt(a.e - e)) + (b.n << BigInt(b.e - e)), e };
  }
  const compare = (a, b) => {
    const d = sum(a, { n: -b.n, e: b.e }).n;
    return d < 0n ? -1 : d > 0n ? 1 : 0;
  };
  function approximate(d) {
    if (!d.n) return 0;
    const sign = d.n < 0n ? -1 : 1,
      a = d.n < 0n ? -d.n : d.n;
    const shift = Math.max(0, a.toString(2).length - 53);
    const coefficient = Number(a >> BigInt(shift)),
      exponent = d.e + shift;
    return (
      sign *
      (exponent < -1022
        ? coefficient * 2 ** (exponent + 1022) * 2 ** -1022
        : coefficient * 2 ** exponent)
    );
  }
  function discriminant(p) {
    const b = dyadic(p.linear),
      ac = product(dyadic(p.leading), dyadic(p.constant));
    return sum(product(b, b), { n: -4n * ac.n, e: ac.e });
  }
  const clean = x => (x === 0 ? 0 : x);
  function feasibleVertices(budget) {
    const original = [
        [0, 0],
        [4, 0],
        [4, 3],
        [0, 3]
      ],
      result = [];
    for (let i = 0; i < original.length; i++) {
      const a = original[i],
        b = original[(i + 1) % original.length],
        da = a[0] + a[1] - budget,
        db = b[0] + b[1] - budget;
      if (da <= 0) result.push(a.slice());
      if ((da < 0 && db > 0) || (da > 0 && db < 0)) {
        result.push(a[0] === b[0] ? [a[0], clean(budget - a[0])] : [clean(budget - a[1]), a[1]]);
      }
    }
    return result.filter(
      (point, i) => !result.slice(0, i).some(p => p[0] === point[0] && p[1] === point[1])
    );
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      fail = message => ({
        ...checked,
        valid: false,
        status: 'numeric_precision',
        output: null,
        errors: [{ field: 'precision', message }]
      });
    let result;
    if (slug === 'complex-number') {
      const realSquared = p.real * p.real,
        imagSquared = p.imag * p.imag;
      if ((p.real !== 0 && realSquared === 0) || (p.imag !== 0 && imagSquared === 0))
        return fail('A nonzero squared component is too small for this numerical representation.');
      result = {
        output: Math.hypot(p.real, p.imag),
        complexPoint: freeze([p.real, p.imag]),
        conjugatePoint: freeze([p.real, clean(-p.imag)]),
        imaginaryUnit: freeze([0, 1]),
        realSquared,
        imagSquared,
        squaredModulus: realSquared + imagSquared,
        conjugateImag: clean(-p.imag),
        real: p.real,
        imag: p.imag
      };
    } else if (slug === 'quadratic-equation') {
      const exactD = discriminant(p),
        sign = exactD.n < 0n ? -1 : exactD.n > 0n ? 1 : 0,
        D = approximate(exactD);
      if (sign !== 0 && D === 0)
        return fail('The nonzero discriminant cannot be represented without losing its magnitude.');
      let roots = [];
      if (sign === 0) roots = [clean(-p.linear / (2 * p.leading))];
      if (sign > 0) {
        if (D === 0)
          return fail(
            'The positive discriminant cannot be represented without losing its magnitude.'
          );
        const q = -0.5 * (p.linear + (p.linear < 0 ? -1 : 1) * Math.sqrt(D));
        if (q === 0) return fail('The numerical root calculation underflowed.');
        roots = [clean(q / p.leading), clean(p.constant / q)].sort((a, b) => a - b);
        if ((p.constant !== 0 && roots.some(x => x === 0)) || roots[0] === roots[1])
          return fail('Two distinct roots cannot be resolved at this numerical precision.');
      }
      result = {
        output: roots.length,
        rootCount: roots.length,
        discriminant: D,
        discriminantSign: sign,
        roots: freeze(roots),
        vertexX: -p.linear / (2 * p.leading),
        vertexY: -D / (4 * p.leading),
        rootLabel: roots.length
          ? roots.map(x => Number(x.toPrecision(6))).join(' and ')
          : 'No real roots',
        rootStatus:
          sign < 0 ? 'No real crossing' : sign === 0 ? 'One double root' : 'Two distinct roots'
      };
    } else {
      const vertices = feasibleVertices(p.budget);
      const values = vertices.map(([x, y]) =>
        sum(product(dyadic(x), dyadic(p.rateX)), product(dyadic(y), dyadic(p.rateY)))
      );
      let best = 0;
      for (let i = 1; i < vertices.length; i++) if (compare(values[i], values[best]) > 0) best = i;
      const optimalIndices = values
          .map((v, i) => (compare(v, values[best]) === 0 ? i : -1))
          .filter(i => i >= 0),
        output = approximate(values[best]);
      if (values[best].n !== 0n && output === 0)
        return fail('A positive optimal contribution underflowed at this input scale.');
      result = {
        output,
        vertices: freeze(vertices),
        vertexValues: freeze(values.map(approximate)),
        optimalIndices: freeze(optimalIndices),
        bestX: vertices[best][0],
        bestY: vertices[best][1],
        bestUsed: vertices[best][0] + vertices[best][1],
        vertexCount: vertices.length,
        maximizingVertexCount: optimalIndices.length,
        allOptimal: p.rateX === 0 && p.rateY === 0,
        optimalLabel:
          p.rateX === 0 && p.rateY === 0
            ? 'Every feasible mixture is optimal'
            : optimalIndices.length > 1
              ? 'An entire feasible edge is optimal'
              : 'One optimal corner'
      };
    }
    return { ...checked, ...result, status: 'valid', unit: get(slug).unit };
  }
  const f = value =>
    typeof value === 'number' && Number.isFinite(value)
      ? Number(value.toPrecision(6)).toString().replace('-', '−')
      : 'Unavailable';
  function specs(slug) {
    const { controls: ignored, ...d } = get(slug);
    return {
      ...d,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug).map(c => ({
        key: c.key,
        label: c.label,
        min: c.min,
        max: c.max,
        step: c.step
      })),
      readout: (p, r) =>
        !r.valid
          ? {
              expression: 'Choose supported inputs',
              stats: [],
              insight: r.errors.map(e => e.message).join(' ')
            }
          : {
              expression:
                slug === 'complex-number'
                  ? '|z| ≈ ' + f(r.output)
                  : slug === 'quadratic-equation'
                    ? r.rootStatus
                    : 'Maximum V ≈ ' + f(r.output) + ' credits',
              stats:
                slug === 'complex-number'
                  ? [
                      {
                        label: 'Real component a',
                        value: p.real,
                        note: 'Horizontal coordinate in the declared unitless plane.'
                      },
                      {
                        label: 'Imaginary component b',
                        value: p.imag,
                        note: 'Coefficient of the imaginary unit on the same coordinate scale.'
                      },
                      {
                        label: 'Conjugate component',
                        value: r.conjugateImag,
                        note: 'Reflection reverses the imaginary component and preserves the real component.'
                      }
                    ]
                  : slug === 'quadratic-equation'
                    ? [
                        {
                          label: 'Discriminant D',
                          value: r.discriminant,
                          note: 'The represented-input sign is exact; its displayed magnitude is numerical.'
                        },
                        {
                          label: 'Real roots',
                          value: r.rootLabel,
                          note: 'Approximate real coordinates; a double root is one distinct solution.'
                        }
                      ]
                    : [
                        {
                          label: 'One optimal x',
                          value: r.bestX,
                          note: 'Litres of the first blend at one maximizing corner.'
                        },
                        {
                          label: 'One optimal y',
                          value: r.bestY,
                          note: 'Litres of the second blend at the same maximizing corner.'
                        },
                        {
                          label: 'Optimal corners',
                          value: r.maximizingVertexCount,
                          note: 'Counts maximizing vertices; tied choices can extend along an edge or the feasible region.'
                        }
                      ],
              insight:
                slug === 'complex-number'
                  ? 'Reflect the imaginary component. The radius stays the same.'
                  : slug === 'quadratic-equation'
                    ? 'The count uses exact discriminant sign; positions are numerical. ' +
                      r.rootLabel
                    : r.optimalLabel + '. Negative rates can make unused material the best choice.'
            }
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
  const n = value => Number(value.toFixed(5));
  const text = (x, y, value, color = C.ink, size = 18, anchor = 'start') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(value)}</text>`;
  const line = (x, y, a, b, color = C.grid, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" ${/(?:^|\s)stroke-width\s*=/.test(extra) ? '' : 'stroke-width="2" '}${extra}/>`;
  const dot = (x, y, color, extra = '') =>
    `<circle cx="${n(x)}" cy="${n(y)}" r="6" fill="${color}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const scope = value =>
    Array.from(String(value))
      .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
      .join('');
  function frame(slug, body, o, caption) {
    const id = 'algebra-' + scope(o.id || slug),
      width = o.compact ? 360 : 760;
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 ${width} 420" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${width}" height="420" rx="18" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function compactGeometry(slug, p, r, o) {
    const pinned = o.baseline && evaluate(slug, o.baseline);
    let body;
    if (slug === 'complex-number') {
      const px = x => 180 + 25 * x,
        py = y => 215 - 25 * y;
      body = text(180, 32, 'Complex plane & reflection', C.ink, 20, 'middle');
      body += mark(
        'real imag imaginaryUnit',
        line(30, 215, 330, 215) +
          line(180, 65, 180, 365) +
          text(325, 240, 'real', C.muted, 16, 'end') +
          text(192, 73, 'imaginary', C.muted, 16),
        'reference'
      );
      body += mark(
        'output squaredModulus',
        `<circle cx="180" cy="215" r="${n(r.output * 25)}" fill="none" stroke="${C.gold}" stroke-width="2"/>`,
        'output'
      );
      body += mark(
        'real realSquared',
        line(180, 215, px(p.real), 215, C.cyan, 'stroke-width="4"'),
        'input'
      );
      body += mark(
        'imag imagSquared',
        line(px(p.real), 215, px(p.real), py(p.imag), C.cyan, 'stroke-width="4"'),
        'input'
      );
      body += mark(
        'real imag output complexPoint',
        line(180, 215, px(p.real), py(p.imag), C.gold) +
          dot(px(p.real), py(p.imag), C.gold) +
          text(px(p.real) + 10, py(p.imag) - 10, 'z', C.gold, 21),
        'output'
      );
      body += mark(
        'conjugateImag real conjugatePoint',
        line(180, 215, px(p.real), py(r.conjugateImag), C.violet, 'stroke-dasharray="7 5"') +
          dot(px(p.real), py(r.conjugateImag), C.violet) +
          text(px(p.real) + 10, py(r.conjugateImag) + 23, 'z̄', C.violet, 21)
      );
      if (pinned?.valid)
        body += mark(
          'output',
          line(
            180,
            215,
            px(pinned.parameters.real),
            py(pinned.parameters.imag),
            C.muted,
            'stroke-dasharray="4 5"'
          ) + dot(px(pinned.parameters.real), py(pinned.parameters.imag), C.muted),
          'reference'
        );
      body += text(180, 400, 'Reflect the point. Keep its radius.', C.ink, 17, 'middle');
    } else if (slug === 'quadratic-equation') {
      const id = 'algebra-' + scope(o.id || slug) + '-curve',
        px = x => 30 + (x + 6) * 25,
        py = y => 330 - (y + 8) * 15;
      body =
        text(180, 32, 'Real roots of a quadratic', C.ink, 21, 'middle') +
        mark(
          'rootCount output discriminant',
          text(180, 65, r.rootStatus, C.gold, 20, 'middle'),
          'output'
        );
      body += `<defs><clipPath id="${id}"><rect x="30" y="90" width="300" height="240"/></clipPath></defs>`;
      body += mark(
        'leading linear constant',
        line(30, py(0), 330, py(0)) +
          line(px(0), 90, px(0), 330) +
          text(30, 357, '−6', C.muted, 17) +
          text(330, 357, '6', C.muted, 17, 'end') +
          text(340, py(0) - 10, 'x', C.muted, 18),
        'reference'
      );
      const path = params =>
        Array.from({ length: 161 }, (_, i) => {
          const x = -6 + (12 * i) / 160;
          return `${i ? 'L' : 'M'}${n(px(x))} ${n(py(params.leading * x * x + params.linear * x + params.constant))}`;
        }).join('');
      body += mark(
        'leading linear constant discriminant',
        `<path d="${path(p)}" fill="none" stroke="${C.cyan}" stroke-width="3" clip-path="url(#${id})"/>`,
        'input'
      );
      if (pinned?.valid)
        body += mark(
          'output',
          `<path d="${path(pinned.parameters)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="7 5" clip-path="url(#${id})"/>`,
          'reference'
        );
      for (const x of r.roots)
        body += mark(
          'roots output rootCount',
          x >= -6 && x <= 6
            ? dot(px(x), py(0), C.gold)
            : text(x < 0 ? 15 : 345, py(0) + 25, x < 0 ? '←' : '→', C.gold, 22, 'middle'),
          'output'
        );
      body += text(180, 397, 'Move c: lift the calibration trace.', C.ink, 17, 'middle');
    } else {
      const px = x => 60 + 58 * x,
        py = y => 335 - 58 * y;
      body =
        text(180, 32, 'Linear programming', C.ink, 22, 'middle') +
        mark(
          'output maximizingVertexCount',
          text(
            180,
            68,
            r.allOptimal
              ? 'All feasible mixtures tie'
              : r.optimalIndices.length > 1
                ? 'An optimal edge'
                : 'An optimal corner',
            C.gold,
            19,
            'middle'
          ),
          'output'
        );
      body += mark('rateX rateY', text(180, 108, 'Compare p x + q y', C.ink, 18, 'middle'));
      body += mark(
        'budget vertices',
        line(px(0), py(0), px(4.5), py(0)) +
          line(px(0), py(0), px(0), py(3.5)) +
          `<rect x="${px(0)}" y="${py(3)}" width="232" height="174" fill="none" stroke="${C.grid}" stroke-dasharray="6 5"/>` +
          text(px(4), 365, '4 L', C.muted, 17, 'middle') +
          text(50, py(3), '3 L', C.muted, 17, 'end') +
          text(180, 397, 'First blend x · litres', C.muted, 17, 'middle') +
          text(75, 140, 'Second blend y', C.muted, 17),
        'reference'
      );
      body += mark(
        'budget vertices',
        `<polygon points="${r.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ')}" fill="${r.allOptimal ? C.gold : C.cyan}" fill-opacity=".22" stroke="${C.cyan}" stroke-width="2"/>`,
        'input'
      );
      if (pinned?.valid)
        body += mark(
          'budget vertices',
          `<polygon points="${pinned.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ')}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="6 5"/>`,
          'reference'
        );
      r.vertices.forEach(([x, y], i) => {
        const best = r.optimalIndices.includes(i);
        body += mark(
          'vertices vertexValues rateX rateY' + (best ? ' output bestX bestY bestUsed' : ''),
          dot(px(x), py(y), best ? C.gold : C.cyan),
          best ? 'output' : 'intermediate'
        );
      });
      for (let i = 0; i < r.vertices.length; i++)
        if (
          r.optimalIndices.includes(i) &&
          r.optimalIndices.includes((i + 1) % r.vertices.length)
        ) {
          const a = r.vertices[i],
            b = r.vertices[(i + 1) % r.vertices.length];
          body += mark(
            'output rateX rateY',
            line(px(a[0]), py(a[1]), px(b[0]), py(b[1]), C.gold, 'stroke-width="5"'),
            'output'
          );
        }
    }
    return frame(
      slug,
      body,
      o,
      slug === 'complex-number'
        ? 'One fixed complex-plane scale shows the point, its conjugate and their common radius.'
        : slug === 'quadratic-equation'
          ? 'The fixed x window is −6 to 6, with height −8 to 8. Gold dots are real roots; arrows retain out-of-window roots.'
          : 'The moving material boundary changes the shaded feasible polygon. Gold marks every optimal corner and edge; a flat objective makes the whole shaded region optimal.' +
            (pinned?.valid ? ' The violet outline retains the pinned feasible region.' : '')
    );
  }
  function geometry(slug, p, r, o) {
    if (o.compact) return compactGeometry(slug, p, r, o);
    let body = text(30, 38, get(slug).title, C.ink, o.compact ? 23 : 27),
      caption;
    const pinned = o.baseline && evaluate(slug, o.baseline);
    if (slug === 'complex-number') {
      const px = x => 230 + 25 * x,
        py = y => 228 - 25 * y;
      body += mark(
        'real imag imaginaryUnit',
        line(80, 228, 380, 228) +
          line(230, 78, 230, 378) +
          text(350, 255, 'real', C.muted, 17) +
          text(243, 91, 'imaginary', C.muted, 17),
        'reference'
      );
      body += mark(
        'output squaredModulus',
        `<circle cx="230" cy="228" r="${n(r.output * 25)}" stroke="${C.gold}" fill="none" stroke-width="2"/>`,
        'output'
      );
      body += mark(
        'real realSquared',
        line(230, 228, px(p.real), 228, C.cyan, 'stroke-width="4"'),
        'input'
      );
      body += mark(
        'imag imagSquared',
        line(px(p.real), 228, px(p.real), py(p.imag), C.cyan, 'stroke-width="4"'),
        'input'
      );
      body += mark(
        'real imag output complexPoint',
        line(230, 228, px(p.real), py(p.imag), C.gold) +
          dot(px(p.real), py(p.imag), C.gold) +
          text(px(p.real) + 10, py(p.imag) - 10, 'z', C.gold, 22),
        'output'
      );
      body += mark(
        'conjugateImag real conjugatePoint',
        line(230, 228, px(p.real), py(r.conjugateImag), C.violet, 'stroke-dasharray="7 5"') +
          dot(px(p.real), py(r.conjugateImag), C.violet) +
          text(px(p.real) + 10, py(r.conjugateImag) + 22, 'z̄', C.violet, 22)
      );
      body +=
        text(465, 150, 'Horizontal part a', C.cyan, 21) +
        text(465, 197, 'Vertical part b', C.cyan, 21) +
        text(465, 244, 'Reflect: a − bi', C.violet, 21) +
        text(465, 291, 'Radius: |z|', C.gold, 22);
      if (pinned?.valid)
        body += mark(
          'output',
          line(
            230,
            228,
            px(pinned.parameters.real),
            py(pinned.parameters.imag),
            C.muted,
            'stroke-dasharray="4 5"'
          ) + dot(px(pinned.parameters.real), py(pinned.parameters.imag), C.muted),
          'reference'
        );
      caption =
        'Gold radius measures the current modulus on one fixed scale. The violet conjugate keeps the real component and reverses the imaginary component. ' +
        (pinned?.valid ? 'The muted dashed arrow retains the pinned offset.' : '');
    } else if (slug === 'quadratic-equation') {
      const id = 'algebra-' + scope(o.id || slug) + '-curve',
        px = x => 70 + ((x + 6) / 12) * 460,
        py = y => 350 - ((y + 8) / 16) * 270;
      body += `<defs><clipPath id="${id}"><rect x="70" y="80" width="460" height="270"/></clipPath></defs>`;
      body += mark(
        'leading linear constant',
        line(70, py(0), 530, py(0)) +
          line(px(0), 80, px(0), 350) +
          text(70, 378, '−6', C.muted) +
          text(530, 378, '6', C.muted, 18, 'end') +
          text(538, py(0) - 8, 'x', C.muted),
        'reference'
      );
      const path = params =>
        Array.from({ length: 161 }, (_, i) => {
          const x = -6 + (12 * i) / 160,
            y = params.leading * x * x + params.linear * x + params.constant;
          return `${i ? 'L' : 'M'}${n(px(x))} ${n(py(y))}`;
        }).join('');
      body += mark(
        'leading linear constant discriminant',
        `<path d="${path(p)}" fill="none" stroke="${C.cyan}" stroke-width="3" clip-path="url(#${id})"/>`,
        'input'
      );
      if (pinned?.valid)
        body += mark(
          'output',
          `<path d="${path(pinned.parameters)}" fill="none" stroke="${C.violet}" stroke-dasharray="7 5" stroke-width="2" clip-path="url(#${id})"/>`,
          'reference'
        );
      for (const x of r.roots)
        if (x >= -6 && x <= 6)
          body += mark('output roots rootCount', dot(px(x), py(0), C.gold), 'output');
      for (const x of r.roots.filter(x => x < -6 || x > 6))
        body += mark(
          'output roots',
          text(x < -6 ? 60 : 540, py(0) + 30, x < -6 ? '←' : '→', C.gold, 26),
          'output'
        );
      body += mark(
        'discriminant rootCount output',
        text(565, 132, 'Zero crossings', C.gold, 20) +
          text(
            565,
            181,
            r.output === 2 ? 'Two crossings' : r.output === 1 ? 'One tangency' : 'None in ℝ',
            C.gold,
            19
          ) +
          text(565, 254, 'Move c:', C.cyan, 20) +
          text(565, 290, 'lift the curve', C.cyan, 18),
        'output'
      );
      caption =
        'A fixed x window from −6 to 6 and height window from −8 to 8 clips the parabola without moving its zero level. Gold dots are real roots; arrows indicate roots outside the window. ' +
        r.rootStatus +
        '.';
    } else {
      const px = x => 85 + x * 63,
        py = y => 335 - y * 63,
        polygon = r.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ');
      body += mark(
        'budget vertices',
        line(px(0), py(0), px(4.5), py(0)) +
          line(px(0), py(0), px(0), py(3.5)) +
          `<rect x="${px(0)}" y="${py(3)}" width="252" height="189" fill="none" stroke="${C.grid}" stroke-dasharray="6 5"/>` +
          text(px(4), 365, '4 L', C.muted, 18, 'middle') +
          text(65, py(3), '3 L', C.muted, 18, 'end') +
          text(210, 396, 'First blend x', C.muted, 19, 'middle') +
          text(38, 86, 'Second blend y', C.muted, 19),
        'reference'
      );
      body += mark(
        'budget vertices',
        `<polygon points="${polygon}" fill="${r.allOptimal ? C.gold : C.cyan}" fill-opacity=".22" stroke="${C.cyan}" stroke-width="2"/>`,
        'input'
      );
      if (pinned?.valid)
        body += mark(
          'budget vertices',
          `<polygon points="${pinned.vertices.map(([x, y]) => n(px(x)) + ',' + n(py(y))).join(' ')}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="6 5"/>`,
          'reference'
        );
      r.vertices.forEach(([x, y], i) => {
        const best = r.optimalIndices.includes(i);
        body += mark(
          'vertices vertexValues rateX rateY' + (best ? ' output bestX bestY bestUsed' : ''),
          dot(px(x), py(y), best ? C.gold : C.cyan),
          best ? 'output' : 'intermediate'
        );
      });
      for (let i = 0; i < r.vertices.length; i++)
        if (
          r.optimalIndices.includes(i) &&
          r.optimalIndices.includes((i + 1) % r.vertices.length)
        ) {
          const a = r.vertices[i],
            b = r.vertices[(i + 1) % r.vertices.length];
          body += mark(
            'output rateX rateY',
            line(px(a[0]), py(a[1]), px(b[0]), py(b[1]), C.gold, 'stroke-width="5"'),
            'output'
          );
        }
      body += mark(
        'rateX rateY output maximizingVertexCount',
        text(470, 132, 'Feasible corners', C.cyan, 23) +
          text(470, 181, 'Compare px + qy', C.ink, 21) +
          text(
            470,
            250,
            r.allOptimal
              ? 'All mixtures tie'
              : r.optimalIndices.length > 1
                ? 'An optimal edge'
                : 'An optimal corner',
            C.gold,
            23
          ),
        'output'
      );
      caption =
        'The shaded polygon contains all feasible continuous mixtures. Gold marks every maximizing corner and connecting optimal edge. ' +
        r.optimalLabel +
        '. Fixed production limits are four litres and three litres; the moving base-material limit changes the polygon.' +
        (pinned?.valid ? ' The violet outline retains the pinned feasible region.' : '');
    }
    return frame(slug, body, o, caption);
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls.find(x => x.key === d.axis);
    const seriesFor = (params, id, label, color) => {
      const samples = new Set(
        Array.from({ length: 81 }, (_, i) => c.min + ((c.max - c.min) * i) / 80)
      );
      if (slug === 'quadratic-equation') {
        const critical = (params.linear * params.linear) / (4 * params.leading);
        if (critical >= c.min && critical <= c.max) samples.add(critical);
      }
      if (slug === 'linear-programming') for (const x of [3, 4]) samples.add(x);
      return {
        id,
        label,
        color,
        quantity: d.axis + ' output',
        dots: slug === 'quadratic-equation',
        points: [...samples].sort((a, b) => a - b).map(x => ({ x, y: curveValue(slug, params, x) }))
      };
    };
    const series = [seriesFor(p, 'current', d.primaryLabel, C.cyan)],
      current = [
        {
          x: p[d.axis],
          y: r.output,
          label: 'Current inputs',
          color: C.gold,
          quantity: d.axis + ' output',
          draggable: o.sceneControl !== false
        }
      ],
      pinned = o.baseline && evaluate(slug, o.baseline);
    if (pinned?.valid) {
      series.push(seriesFor(pinned.parameters, 'pinned', 'Pinned other inputs', C.violet));
      current.push({
        x: pinned.parameters[d.axis],
        y: pinned.output,
        label: 'Pinned result',
        color: C.violet,
        quantity: 'output'
      });
    }
    return Plot.render(
      {
        title: d.title,
        description:
          slug === 'quadratic-equation'
            ? 'Dots are evaluated real-root counts at sampled offsets. They are not joined into fractional root counts. The exact double-root offset is included when representable.'
            : 'Hold the other inputs fixed and compare the same output as the horizontal variable changes.',
        x: { key: d.axis, label: c.label, min: c.min, max: c.max, value: p[d.axis], step: c.step },
        y: {
          label: d.primaryLabel,
          min: slug === 'quadratic-equation' ? -0.25 : -0.5,
          max: slug === 'complex-number' ? 6.2 : slug === 'quadratic-equation' ? 2.25 : 36
        },
        series,
        current,
        notes: [
          slug === 'linear-programming'
            ? 'The optimal value is continuous and piecewise linear; the preferred corner can change.'
            : slug === 'complex-number'
              ? 'The conjugate has the same modulus at every setting.'
              : 'One double root counts as one distinct real solution.'
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
        text(
          30,
          70,
          r.status === 'numeric_precision'
            ? o.compact
              ? 'Precision unavailable'
              : 'Numerical precision unavailable'
            : 'Choose supported inputs',
          C.gold,
          o.compact ? 22 : 25
        ) + text(30, 130, 'Use the bounded input ranges.', C.ink, o.compact ? 17 : 20),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : geometry(slug, r.parameters, r, o);
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
