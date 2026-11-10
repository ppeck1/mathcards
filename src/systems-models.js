/* Bounded order, flow, energy and learning models. The shared host owns time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasSystems = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const control = (key, label, value, min, max, step = 0.05, unit = '', discrete = false) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {})
  });
  const sets = [
    control('a', 'First collection A', 3, 0, 7, 1, '', true),
    control('b', 'Second collection B', 5, 0, 7, 1, '', true)
  ];
  const definitions = {
    'vector-field': {
      title: 'Vector fields',
      axis: 'x',
      expression: 'F(x,y) = (−a x, −a y)',
      unit: 'units per time',
      controls: [
        control('x', 'Horizontal position x', 1, -2, 2),
        control('y', 'Vertical position y', 1, -2, 2),
        control('rate', 'Inward rate a', 1, 0, 2)
      ],
      limits:
        'A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.'
    },
    'continuous-flow': {
      title: 'Continuous flows',
      axis: 'time',
      expression: 'x(t) = x₀ exp(−a t)',
      unit: 'position units',
      controls: [
        control('time', 'Elapsed time t', 1, 0, 5),
        control('initial', 'Starting displacement x₀', 2, -3, 3),
        control('rate', 'Return rate a', 0.5, 0, 2)
      ],
      limits:
        'The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.'
    },
    'basin-attraction': {
      title: 'Basins of attraction',
      axis: 'initial',
      expression: 'dx/dt = x − x³',
      unit: 'position units',
      controls: [
        control('initial', 'Starting position x₀', 0.3, -2, 2),
        control('time', 'Elapsed time t', 2, 0, 5)
      ],
      limits:
        'One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.'
    },
    'fold-bifurcation': {
      title: 'Fold bifurcations',
      axis: 'mu',
      expression: 'dx/dt = μ − x²',
      unit: 'equilibria',
      controls: [control('mu', 'Control parameter μ', 1, -1, 2)],
      limits:
        'A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.'
    },
    'cusp-potential': {
      title: 'Cusp potential and competing wells',
      axis: 'bias',
      expression: 'V(x) = x⁴/4 − a x²/2 − b x',
      unit: 'stationary points',
      controls: [
        control('bias', 'Tilt b', 0, -1, 1),
        control('shape', 'Well parameter a', 1, 0, 2)
      ],
      limits:
        'Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.'
    },
    'partial-order': {
      title: 'Partial orders',
      axis: 'a',
      expression: 'A ≤ B exactly when A ⊆ B',
      unit: 'truth value',
      controls: sets,
      limits:
        'All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.'
    },
    'meet-join': {
      title: 'Meet and join',
      axis: 'a',
      expression: 'A ∧ B = A ∩ B; A ∨ B = A ∪ B',
      unit: 'tools',
      controls: [
        ...sets,
        {
          key: 'operation',
          label: 'Lattice operation',
          value: 'meet',
          type: 'select',
          options: [
            { value: 'meet', label: 'Meet · shared tools' },
            { value: 'join', label: 'Join · combined tools' }
          ]
        }
      ],
      limits:
        'In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.'
    },
    'lattice-distributivity': {
      title: 'Distributive lattices',
      axis: 'a',
      expression: 'A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)',
      unit: 'tools',
      controls: [...sets, control('c', 'Third collection C', 6, 0, 7, 1, '', true)],
      limits:
        'This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.'
    },
    'heat-balance': {
      title: 'Heat exchange and physical entropy',
      axis: 'heat',
      expression: 'ΔS = C ln(Tₕ/400) + C ln(T_c/300)',
      unit: 'J/K',
      controls: [control('heat', 'Energy transferred Q (J)', 25, 0, 50, 0.5, 'J')],
      limits:
        'Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.'
    },
    'gibbs-free-energy': {
      title: 'Gibbs free energy',
      axis: 'temperature',
      expression: 'ΔG = ΔH − T ΔS',
      unit: 'J',
      controls: [
        control('temperature', 'Temperature T (K)', 300, 100, 600, 1, 'K'),
        control('enthalpy', 'Enthalpy change ΔH (J)', 2000, -4000, 4000, 50, 'J'),
        control('entropy', 'Entropy change ΔS (J/K)', 5, -10, 10, 0.1, 'J/K')
      ],
      limits:
        'A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.'
    },
    'ideal-gas': {
      title: 'The ideal gas law',
      axis: 'volume',
      expression: 'p = n R T / V',
      unit: 'kPa',
      controls: [
        control('volume', 'Volume V (L)', 20, 5, 40, 0.1, 'L'),
        control('temperature', 'Temperature T (K)', 300, 150, 600, 1, 'K')
      ],
      limits:
        'One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.'
    },
    'artificial-neuron': {
      title: 'An artificial neuron',
      axis: 'signal',
      expression: 'z = w x + b; y = 1/(1 + exp(−z))',
      unit: 'activation',
      controls: [
        control('signal', 'Input signal x', 1, -3, 3),
        control('weight', 'Weight w', 1, -2, 2),
        control('bias', 'Bias b', 0, -2, 2)
      ],
      limits:
        'One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.'
    },
    'hebbian-learning': {
      title: 'A Hebbian weight update',
      axis: 'pre',
      expression: 'Δw = η u v; w₁ = w₀ + Δw',
      unit: 'weight units',
      controls: [
        control('pre', 'Presynaptic activity u', 0.5, 0, 1),
        control('post', 'Postsynaptic activity v', 0.5, 0, 1),
        control('rate', 'Learning rate η', 0.1, 0, 0.2, 0.01)
      ],
      limits:
        'One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.'
    }
  };
  const freeze = x => {
    if (x && typeof x === 'object' && !Object.isFrozen(x)) {
      Object.values(x).forEach(freeze);
      Object.freeze(x);
    }
    return x;
  };
  freeze(definitions);
  const has = s => Object.hasOwn(definitions, s),
    get = s => {
      if (!has(s)) throw new RangeError('Unknown systems model: ' + s);
      return definitions[s];
    };
  const defaults = s => Object.fromEntries(get(s).controls.map(c => [c.key, c.value]));
  const controls = s =>
    get(s).controls.map(({ value, ...c }) => ({
      ...c,
      ...(c.options ? { options: c.options.map(x => ({ ...x })) } : {})
    }));
  function validateParams(s, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(s) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use an object of declared inputs.' }],
        warnings: []
      };
    const fields = get(s).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        c.type === 'select'
          ? !c.options.some(o => o.value === v)
          : typeof v !== 'number' ||
            !Number.isFinite(v) ||
            v < c.min ||
            v > c.max ||
            (c.discrete && !Number.isInteger(v))
      )
        errors.push({
          field: c.key,
          message: c.discrete
            ? 'Choose a whole collection label from 0 to 7.'
            : 'Use the declared input range.'
        });
      else parameters[c.key] = v === 0 ? 0 : v;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const elements = mask => ['lamp', 'ruler', 'brush'].filter((_, i) => mask & (1 << i)),
    setLabel = mask => '{' + elements(mask).join(', ') + '}',
    count = mask => elements(mask).length;
  function binary(v) {
    if (v === 0) return [0n, 0];
    const bytes = new DataView(new ArrayBuffer(8));
    bytes.setFloat64(0, Math.abs(v));
    const hi = bytes.getUint32(0),
      lo = bytes.getUint32(4),
      exponent = (hi >>> 20) & 2047;
    return [
      (BigInt(hi & 1048575) << 32n) + BigInt(lo) + (exponent ? 1n << 52n : 0n),
      exponent ? exponent - 1075 : -1074
    ];
  }
  function discriminantSign(a, b) {
    const [A, ea] = binary(a),
      [B, eb] = binary(b),
      power = Math.min(3 * ea, 2 * eb),
      value =
        ((4n * A * A * A) << BigInt(3 * ea - power)) - ((27n * B * B) << BigInt(2 * eb - power));
    return value === 0n ? 0 : value > 0n ? 1 : -1;
  }
  function cubicRoots(a, b) {
    if (a === 0 && b === 0) return [0];
    const sign = discriminantSign(a, b),
      scale = Math.max(Math.sqrt(a), Math.cbrt(Math.abs(b))),
      aa = a / scale / scale,
      bb = b / scale / scale / scale,
      d = (bb * bb) / 4 - (aa * aa * aa) / 27;
    if (sign === 0) {
      const u = Math.cbrt(bb / 2);
      return [-u * scale, 2 * u * scale].sort((x, y) => x - y);
    }
    if (sign < 0) {
      const u = Math.cbrt(bb / 2 + (bb < 0 ? -1 : 1) * Math.sqrt(Math.max(0, d)));
      return [(u + (u === 0 ? 0 : aa / (3 * u))) * scale];
    }
    const r = 2 * Math.sqrt(aa / 3),
      theta = Math.acos(Math.max(-1, Math.min(1, (3 * bb) / (aa * r)))) / 3;
    return [0, 1, 2]
      .map(k => scale * r * Math.cos(theta - (2 * Math.PI * k) / 3))
      .sort((x, y) => x - y);
  }

  function evaluate(s, input) {
    const checked = validateParams(s, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let r = {};
    if (s === 'vector-field')
      r = { vx: -p.rate * p.x, vy: -p.rate * p.y, output: p.rate * Math.hypot(p.x, p.y) };
    if (s === 'continuous-flow')
      r = {
        factor: Math.exp(-p.rate * p.time),
        output: p.initial * Math.exp(-p.rate * p.time),
        velocity: -p.rate * p.initial * Math.exp(-p.rate * p.time)
      };
    if (s === 'basin-attraction') {
      const x = p.initial,
        decay = Math.exp(-2 * p.time),
        denominator = Math.sqrt(x * x + (1 - x * x) * decay);
      r = {
        output: x === 0 ? 0 : x / denominator,
        destination: Math.sign(x),
        velocity: x - x * x * x,
        classification: x === 0 ? 'Unstable equilibrium' : x > 0 ? 'Basin of +1' : 'Basin of −1'
      };
    }
    if (s === 'fold-bifurcation')
      r = {
        output: p.mu < 0 ? 0 : p.mu === 0 ? 1 : 2,
        stable: p.mu > 0 ? Math.sqrt(p.mu) : null,
        unstable: p.mu > 0 ? -Math.sqrt(p.mu) : null,
        classification:
          p.mu < 0
            ? 'No equilibria'
            : p.mu === 0
              ? 'One double root · one-sided attraction'
              : 'One stable and one unstable equilibrium'
      };
    if (s === 'cusp-potential') {
      const roots = cubicRoots(p.shape, p.bias);
      r = {
        roots,
        rootCountExact: 1,
        output: roots.length,
        discriminant: 4 * p.shape ** 3 - 27 * p.bias ** 2,
        classification:
          roots.length === 3
            ? 'Two wells with a barrier'
            : roots.length === 2
              ? 'Repeated stationary point'
              : p.shape === 0 && p.bias === 0
                ? 'One flat quartic minimum'
                : 'One stationary point'
      };
    }
    if (s === 'partial-order')
      r = {
        output: (p.a & p.b) === p.a ? 1 : 0,
        comparable: (p.a & p.b) === p.a || (p.a & p.b) === p.b ? 1 : 0,
        labelA: setLabel(p.a),
        labelB: setLabel(p.b),
        resultMask: p.a,
        classification:
          (p.a & p.b) === p.a
            ? 'A is included in B'
            : (p.a & p.b) === p.b
              ? 'B is included in A'
              : 'A and B are incomparable'
      };
    if (s === 'meet-join') {
      const mask = p.operation === 'meet' ? p.a & p.b : p.a | p.b;
      r = {
        output: count(mask),
        resultMask: mask,
        labelA: setLabel(p.a),
        labelB: setLabel(p.b),
        resultLabel: setLabel(mask),
        classification: p.operation === 'meet' ? 'Greatest lower bound' : 'Least upper bound'
      };
    }
    if (s === 'lattice-distributivity') {
      const left = p.a & (p.b | p.c),
        right = (p.a & p.b) | (p.a & p.c);
      r = {
        output: count(left),
        resultMask: left,
        leftMask: left,
        rightMask: right,
        equal: left === right ? 1 : 0,
        resultLabel: setLabel(left),
        classification: 'Both routes select the same tools'
      };
    }
    if (s === 'heat-balance') {
      const hot = 400 - p.heat,
        cold = 300 + p.heat;
      r = {
        hot,
        cold,
        totalTemperature: hot + cold,
        hotEntropy: Math.log(hot / 400),
        coldEntropy: Math.log(cold / 300),
        output: Math.log(hot / 400) + Math.log(cold / 300)
      };
    }
    if (s === 'gibbs-free-energy')
      r = {
        thermalTerm: p.temperature * p.entropy,
        output: p.enthalpy - p.temperature * p.entropy,
        classification:
          p.enthalpy - p.temperature * p.entropy < 0
            ? 'Thermodynamically favorable'
            : p.enthalpy === p.temperature * p.entropy
              ? 'Balanced free-energy comparison'
              : 'Thermodynamically unfavorable'
      };
    if (s === 'ideal-gas')
      r = {
        thermalEnergy: 8.31446261815324 * p.temperature,
        output: (8.31446261815324 * p.temperature) / p.volume
      };
    if (s === 'artificial-neuron') {
      const weighted = p.weight * p.signal,
        z = weighted + p.bias;
      r = { weighted, z, output: 1 / (1 + Math.exp(-z)) };
    }
    if (s === 'hebbian-learning') {
      const product = p.pre * p.post,
        change = p.rate * product;
      r = { product, change, initialWeight: 0.2, output: 0.2 + change };
    }
    if (['partial-order', 'meet-join', 'lattice-distributivity'].includes(s)) {
      r.labelA = setLabel(p.a);
      r.labelB = setLabel(p.b);
      if (p.c !== undefined) r.labelC = setLabel(p.c);
    }
    return { ...checked, ...r, status: 'valid', unit: get(s).unit };
  }
  const fmt = v =>
    Number.isFinite(v)
      ? String(Number(v.toPrecision(4))).replace(/-/g, '−')
      : String(v ?? 'undefined');
  function specs(s) {
    const d = get(s);
    return {
      ...d,
      controls: undefined,
      views: ['geometry', 'graph'],
      rendererId: s + '-visual-model',
      primaryLabel: d.title,
      sweeps: controls(s).filter(c => c.type !== 'select'),
      readout: (p, r) => ({
        expression: d.expression,
        stats: [
          {
            label: 'RESULT',
            value: s === 'partial-order' ? (r.output ? 'True' : 'False') : r.output,
            note: d.unit
          },
          { label: 'INTERPRETATION', value: r.classification || d.unit, note: 'Declared model' }
        ],
        insight: d.limits
      })
    };
  }
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
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
  const text = (x, y, t, color = C.ink, size = 16) =>
    `<text x="${x}" y="${y}" fill="${color}" font-size="${size}">${esc(t)}</text>`;
  const line = (x, y, xx, yy, c = C.grid) =>
    `<line x1="${x}" y1="${y}" x2="${xx}" y2="${yy}" stroke="${c}" stroke-width="2"/>`;
  const circle = (x, y, r, c) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${c}"/>`;
  const group = (keys, body, part = 'intermediate') =>
    `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}">${body}</g>`;
  const arrow = (x, y, xx, yy, c) => {
    if (xx === x && yy === y) return circle(x, y, 2, c);
    const a = Math.atan2(yy - y, xx - x);
    return (
      line(x, y, xx, yy, c) +
      `<path d="M${xx - 7 * Math.cos(a - 0.45)} ${yy - 7 * Math.sin(a - 0.45)}L${xx} ${yy}L${xx - 7 * Math.cos(a + 0.45)} ${yy - 7 * Math.sin(a + 0.45)}" stroke="${c}" stroke-width="2" fill="none"/>`
    );
  };
  function geometry(s, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 30,
      right = w - 30,
      mid = w / 2;
    let b = '';
    if (['vector-field', 'continuous-flow', 'basin-attraction'].includes(s)) {
      const x = v => mid + (v * (w - 80)) / 6,
        y = v => 190 - v * 34;
      b += line(left, 190, right, 190) + line(mid, 90, mid, 290);
      if (s === 'vector-field') {
        for (let i = -2; i <= 2; i++)
          for (let j = -2; j <= 2; j++)
            b += group(
              'rate',
              arrow(x(i), y(j), x(i - 0.15 * p.rate * i), y(j - 0.15 * p.rate * j), C.muted)
            );
        b += group(
          'x y vx vy output',
          circle(x(p.x), y(p.y), 7, C.gold) +
            arrow(
              x(p.x),
              y(p.y),
              x(p.x - 0.15 * p.rate * p.x),
              y(p.y - 0.15 * p.rate * p.y),
              C.cyan
            )
        );
      } else {
        for (let i = -2; i <= 2; i += 0.5) {
          const v = s === 'continuous-flow' ? -p.rate * i : i - i ** 3;
          b += arrow(x(i), 190, x(i) + Math.sign(v) * Math.min(25, Math.abs(v) * 15), 190, C.muted);
        }
        b +=
          group('initial', circle(x(p.initial), 190, 6, C.violet), 'input') +
          group(
            s === 'continuous-flow' ? 'output time rate' : 'output time',
            circle(x(r.output), 190, 10, C.gold),
            'output'
          ) +
          text(left, 265, 'Start ' + fmt(p.initial) + ' → now ' + fmt(r.output), C.ink, 17);
        if (s === 'basin-attraction')
          b += group(
            'destination',
            [-1, 0, 1].map(v => circle(x(v), 190, 4, v === 0 ? C.violet : C.mint)).join('')
          );
      }
    } else if (s === 'fold-bifurcation' || s === 'cusp-potential') {
      const xx = x => mid + (x * (w - 80)) / 5,
        fn = x =>
          s === 'fold-bifurcation' ? p.mu - x * x : x ** 4 / 4 - (p.shape * x * x) / 2 - p.bias * x,
        values = Array.from({ length: 101 }, (_, i) => ({
          x: -2.5 + i * 0.05,
          y: fn(-2.5 + i * 0.05)
        })),
        low = Math.min(0, ...values.map(v => v.y)),
        high = Math.max(0, ...values.map(v => v.y)),
        yy = y => 280 - ((y - low) / (high - low || 1)) * 180,
        points = values.map((v, i) => `${i ? 'L' : 'M'}${xx(v.x)} ${yy(v.y)}`).join(''),
        clip = 'systems-plot-' + String(o.id || s).replace(/[^a-zA-Z0-9-]/g, '-');
      let plot =
        line(left, yy(0), right, yy(0)) +
        group(
          s === 'fold-bifurcation' ? 'mu' : 'shape bias',
          `<path d="${points}" fill="none" stroke="${C.cyan}" stroke-width="3"/>`,
          'input'
        );
      const roots =
        s === 'fold-bifurcation'
          ? p.mu < 0
            ? []
            : p.mu === 0
              ? [0]
              : [r.unstable, r.stable]
          : r.roots;
      roots.forEach(
        v =>
          (plot += group(
            'roots stable unstable output',
            circle(xx(v), yy(fn(v)), 7, C.gold),
            'output'
          ))
      );
      b +=
        `<defs><clipPath id="${clip}"><rect x="${left}" y="90" width="${w - 60}" height="200"/></clipPath></defs><g clip-path="url(#${clip})">${plot}</g>` +
        text(
          left,
          312,
          s === 'fold-bifurcation'
            ? 'Zeros of the velocity curve'
            : 'Gold: approximate stationary positions',
          C.muted,
          14
        );
    } else if (['partial-order', 'meet-join', 'lattice-distributivity'].includes(s)) {
      const rows = [[0], [1, 2, 4], [3, 5, 6], [7]],
        pos = new Map();
      rows.forEach((row, k) =>
        row.forEach((mask, i) =>
          pos.set(mask, [left + ((i + 1) * (w - 60)) / (row.length + 1), 270 - k * 53])
        )
      );
      for (let a = 0; a < 8; a++)
        for (let bit = 0; bit < 3; bit++)
          if (!(a & (1 << bit))) b += line(...pos.get(a), ...pos.get(a | (1 << bit)));
      for (let mask = 0; mask < 8; mask++) {
        const [x, y] = pos.get(mask),
          selected = mask === p.a || mask === p.b || mask === p.c;
        const label =
          mask === 0
            ? '∅'
            : elements(mask)
                .map(t => t[0].toUpperCase())
                .join('');
        b += group(
          [
            mask === p.a ? 'a' : '',
            mask === p.b ? 'b' : '',
            mask === p.c ? 'c' : '',
            mask === r.resultMask ? 'resultMask' : ''
          ]
            .filter(Boolean)
            .join(' ') || 'reference',
          circle(x, y, 20, mask === r.resultMask ? C.gold : selected ? C.cyan : C.grid) +
            text(x - 10, y + 5, label, mask === r.resultMask ? C.bg : C.ink, 13)
        );
      }
      b += text(left, 305, 'L lamp · R ruler · B brush', C.muted, 14);
    } else if (s === 'heat-balance') {
      const bh = v => v * 0.4;
      b += line(left, 275, right, 275) + text(left, 97, 'Column baseline: 0 K', C.muted, 13);
      [r.hot, r.cold].forEach((t, i) => {
        const x = left + (i * (w - 80)) / 2;
        b += group(
          i ? 'cold heat' : 'hot heat',
          `<rect x="${x}" y="${275 - bh(t)}" width="${(w - 100) / 2}" height="${bh(t)}" fill="${i ? C.cyan : C.gold}"/>` +
            text(x, 300, fmt(t) + ' K', C.ink, 18)
        );
      });
    } else if (s === 'ideal-gas') {
      const ww = ((w - 80) * p.volume) / 40,
        x = mid - ww / 2;
      b +=
        group(
          'volume',
          `<rect x="${x}" y="120" width="${ww}" height="150" fill="none" stroke="${C.cyan}" stroke-width="3"/>`,
          'input'
        ) +
        group(
          'temperature output',
          arrow(x + ww, 195, x + ww + (27 * r.output) / 1000, 195, C.gold),
          'output'
        ) +
        text(left, 300, fmt(p.volume) + ' L · ' + fmt(p.temperature) + ' K', C.muted, 17);
    } else if (s === 'artificial-neuron' || s === 'hebbian-learning') {
      const xs = [left + 20, mid, right - 20],
        maxima = s === 'artificial-neuron' ? [3, 8, 1] : [1, 1, 0.4],
        vals = s === 'artificial-neuron' ? [p.signal, r.z, r.output] : [p.pre, r.product, r.output],
        labels =
          s === 'artificial-neuron'
            ? ['Input', 'Weighted + bias', 'Activation']
            : ['Activity u', 'Activity product', 'New weight'];
      xs.forEach((x, i) => {
        if (i < 2) b += arrow(x + 18, 185, xs[i + 1] - 18, 185, C.muted);
        b += group(
          i === 0
            ? s === 'artificial-neuron'
              ? 'signal'
              : 'pre'
            : i === 1
              ? s === 'artificial-neuron'
                ? 'weight bias weighted z'
                : 'post product'
              : 'output change rate',
          circle(
            x,
            185,
            30 * Math.sqrt(Math.abs(vals[i]) / maxima[i]),
            [C.cyan, C.violet, C.gold][i]
          ) +
            text(Math.max(left, x - 22), 235, fmt(vals[i]), C.ink, 18) +
            text(Math.max(left, x - 25), 270, labels[i], C.muted, o.compact ? 12 : 15),
          i === 0 ? 'input' : i === 2 ? 'output' : 'intermediate'
        );
      });
      b += text(left, 313, 'Circle area: magnitude on fixed stage scales', C.muted, 13);
    } else {
      const scale = (w - 80) / 22000;
      [p.enthalpy, -r.thermalTerm, r.output].forEach(
        (v, i) =>
          (b += group(
            i === 0 ? 'enthalpy' : i === 1 ? 'temperature entropy thermalTerm' : 'output',
            line(mid, 130 + i * 65, mid + v * scale, 130 + i * 65, [C.cyan, C.violet, C.gold][i]) +
              circle(mid + v * scale, 130 + i * 65, 6, [C.cyan, C.violet, C.gold][i]) +
              text(left, 115 + i * 65, ['ΔH', '−TΔS', 'ΔG'][i] + ' ' + fmt(v) + ' J', C.ink, 17)
          ))
      );
    }
    return b;
  }
  function curveValue(s, p, v) {
    if (!has(s) || !Number.isFinite(v)) return null;
    const r = evaluate(s, { ...p, [get(s).axis]: v });
    return r.valid ? r.output : null;
  }
  function graph(s, p, r, o) {
    const d = get(s),
      c = controls(s).find(c => c.key === d.axis),
      discrete = !!c.discrete || ['fold-bifurcation', 'cusp-potential'].includes(s),
      samples = discrete && c.discrete ? c.max - c.min : 80;
    const sample = parameters =>
      Array.from({ length: samples + 1 }, (_, i) => {
        const x = c.min + ((c.max - c.min) * i) / samples;
        return { x, y: curveValue(s, parameters, x) };
      });
    const points = sample(p),
      series = [
        {
          id: 'result',
          label: d.title,
          quantity: d.axis + ' output',
          color: C.gold,
          points,
          dots: discrete
        }
      ],
      current = [
        {
          x: p[c.key],
          y: r.output,
          label: 'Current result',
          quantity: d.axis + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
    const baseline = o.baseline && evaluate(s, o.baseline);
    if (baseline?.valid) {
      series.push({
        id: 'pinned-result',
        label: 'Pinned inputs',
        quantity: d.axis + ' output',
        color: C.violet,
        points: sample(baseline.parameters),
        dots: discrete
      });
      current.push({
        x: baseline.parameters[c.key],
        y: baseline.output,
        label: 'Pinned result',
        quantity: d.axis + ' output',
        color: C.violet
      });
    }
    const values = series.flatMap(line => line.points.map(v => v.y)).filter(Number.isFinite),
      lo = Math.min(0, ...values),
      hi = Math.max(0, ...values),
      pad = (hi - lo || 1) * 0.12;
    return Plot.render(
      {
        title: d.title + ' · input and result',
        description: 'Hold the other inputs fixed. ' + d.limits,
        x: { key: c.key, label: c.label, min: c.min, max: c.max, step: c.step, value: p[c.key] },
        y: { label: d.unit, min: lo - pad, max: hi + pad },
        series,
        current,
        notes: [
          discrete
            ? 'Dots are separate evaluated states; connecting them would invent intermediate results.'
            : 'The curve samples the declared analytic rule; it is not empirical data.'
        ]
      },
      o
    );
  }

  function render(s, input, o = {}) {
    if (!has(s)) return '';
    const r = evaluate(s, input),
      d = get(s),
      w = o.compact ? 360 : 760,
      id = 'systems-' + String(o.id || s).replace(/[^a-zA-Z0-9-]/g, '-');
    if (r.valid && o.view === 'graph') return graph(s, r.parameters, r, o);
    const body = r.valid
      ? text(24, 34, d.title, C.ink, o.compact ? 20 : 27) +
        group(
          'output',
          text(
            24,
            73,
            s === 'partial-order'
              ? r.output
                ? 'True · A ⊆ B'
                : 'False · A ⊈ B'
              : fmt(r.output) + ' ' + d.unit,
            C.gold,
            27
          ),
          'output'
        ) +
        geometry(s, r.parameters, r, o)
      : text(24, 50, 'Choose the declared input range', C.gold, 20);
    return `<figure class="visualization-frame systems-scene"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} 330" role="group" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(d.title)}</title><desc id="${id}-desc">${esc(d.expression + '. ' + d.limits)}</desc><rect width="${w}" height="330" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(d.limits)}</figcaption></figure>`;
  }
  return Object.freeze({
    has,
    ids: Object.freeze(Object.keys(definitions)),
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    elements,
    setLabel,
    cubicRoots,
    discriminantSign
  });
});
