/* Exact bounded counting and representation models. The host owns time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasNumberFoundations = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const field = (key, label, value, min, max, unit = 'items') => ({
    key,
    label,
    value,
    min,
    max,
    step: 1,
    discrete: true,
    unit
  });
  const definitions = {
    'modular-arithmetic': {
      title: 'Modular arithmetic and remainders',
      expression: 'n = qm + r; 0 ≤ r < m',
      axis: 'total',
      unit: 'items',
      primaryLabel: 'Remainder r',
      setting:
        'Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.',
      limits:
        'This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.',
      controls: [
        field('total', 'Counters n', 23, 0, 60),
        field('modulus', 'Counters per tray m', 6, 2, 12)
      ]
    },
    'greatest-common-divisor': {
      title: 'Greatest common divisor',
      expression: 'gcd(a,b) = gcd(b, a mod b)',
      axis: 'first',
      unit: 'cm',
      primaryLabel: 'Longest common piece',
      setting:
        'Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.',
      limits:
        'Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.',
      controls: [
        field('first', 'First ribbon a', 24, 1, 60, 'cm'),
        field('second', 'Second ribbon b', 18, 1, 60, 'cm')
      ]
    },
    'prime-factorization': {
      title: 'Prime factorization',
      expression: 'n = p₁ × ··· × pₛ',
      axis: 'number',
      unit: 'factors',
      primaryLabel: 'Prime factors with repetition',
      setting:
        'A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.',
      limits:
        'The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.',
      controls: [field('number', 'Item count n', 84, 1, 120)]
    },
    'rational-number': {
      title: 'Rational numbers and fractions',
      expression: 'a/b = p/q in lowest terms',
      axis: 'numerator',
      unit: 'm',
      primaryLabel: 'Signed ribbon balance',
      setting:
        'A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.',
      limits:
        'The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.',
      controls: [
        field('numerator', 'Signed pieces a', 6, -12, 12, 'pieces'),
        field('denominator', 'Parts per metre b', 8, 1, 12, 'parts')
      ]
    },
    'numeral-system': {
      title: 'Positional numeral systems',
      expression: 'n = ∑ dⱼ bʲ',
      axis: 'value',
      unit: 'items',
      primaryLabel: 'Same quantity in base ten',
      setting:
        'Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.',
      limits:
        'Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.',
      controls: [
        field('value', 'Item count n', 27, 0, 63),
        field('base', 'Representation base b', 2, 2, 10, 'dimensionless')
      ]
    },
    'permutation-count': {
      title: 'Permutations and factorials',
      expression: 'P(n,r) = n!/(n−r)!',
      axis: 'slots',
      unit: 'arrangements',
      primaryLabel: 'Ordered role assignments',
      setting:
        'Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.',
      limits:
        'Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.',
      controls: [
        field('available', 'Available volunteers n', 5, 0, 8, 'people'),
        field('slots', 'Different roles r', 3, 0, 8, 'roles')
      ]
    },
    'binomial-coefficient': {
      title: 'Combinations and binomial coefficients',
      expression: 'C(n,k) = n!/[k!(n−k)!]',
      axis: 'chosen',
      unit: 'selections',
      primaryLabel: 'Unordered teams',
      setting:
        'Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.',
      limits:
        'Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.',
      controls: [
        field('available', 'Available volunteers n', 6, 0, 10, 'people'),
        field('chosen', 'People selected k', 3, 0, 10, 'people')
      ]
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(definitions);
  const has = s => typeof s === 'string' && Object.hasOwn(definitions, s),
    get = s => {
      if (!has(s)) throw new RangeError('Unknown number-foundation model.');
      return definitions[s];
    };
  const defaults = s => Object.fromEntries(get(s).controls.map(({ key, value }) => [key, value]));
  const controls = s => get(s).controls.map(({ value, ...c }) => ({ ...c }));
  function validateParams(s, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(s) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [
          { field: 'parameters', message: 'Use an object of declared whole-number inputs.' }
        ],
        warnings: []
      };
    const fields = get(s).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        typeof v !== 'number' ||
        !Number.isFinite(v) ||
        !Number.isInteger(v) ||
        v < c.min ||
        v > c.max
      )
        errors.push({
          field: c.key,
          message: 'Use a whole number from ' + c.min + ' to ' + c.max + '.'
        });
      else parameters[c.key] = v === 0 ? 0 : v;
    }
    if (
      !errors.length &&
      ((s === 'permutation-count' && parameters.slots > parameters.available) ||
        (s === 'binomial-coefficient' && parameters.chosen > parameters.available))
    )
      errors.push({
        field: s === 'permutation-count' ? 'slots' : 'chosen',
        message: 'The selected count cannot exceed the number available.'
      });
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const gcd = (a, b) => {
    a = Math.abs(a);
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  };
  function choose(n, k) {
    const row = [1];
    for (let i = 1; i <= n; i++)
      for (let j = i; j >= 1; j--) row[j] = (row[j] || 0) + (row[j - 1] || 0);
    return row[k];
  }
  function teams(n, k) {
    const result = [];
    function visit(start, prefix) {
      if (prefix.length === k) {
        result.push(prefix.slice());
        return;
      }
      for (let i = start; i <= n - (k - prefix.length); i++) {
        prefix.push(i);
        visit(i + 1, prefix);
        prefix.pop();
      }
    }
    visit(0, []);
    return result;
  }
  function evaluate(s, input) {
    const c = validateParams(s, input);
    if (!c.valid) return { ...c, status: 'invalid_parameters', output: null, exactDisplay: null };
    const p = c.parameters;
    let r;
    if (s === 'modular-arithmetic') {
      const quotient = Math.floor(p.total / p.modulus),
        remainder = p.total - quotient * p.modulus;
      r = {
        output: remainder,
        quotient,
        remainder,
        packed: quotient * p.modulus,
        exactDisplay: String(remainder)
      };
    }
    if (s === 'greatest-common-divisor') {
      let a = p.first,
        b = p.second;
      const trace = [];
      while (b) {
        const quotient = Math.floor(a / b),
          remainder = a - quotient * b;
        trace.push({ a, b, quotient, remainder });
        [a, b] = [b, remainder];
      }
      r = {
        output: a,
        gcd: a,
        firstPieces: p.first / a,
        secondPieces: p.second / a,
        trace: freeze(trace),
        divisionCount: trace.length,
        firstEquation:
          trace[0].a + ' = ' + trace[0].quotient + ' × ' + trace[0].b + ' + ' + trace[0].remainder,
        exactDisplay: String(a)
      };
    }
    if (s === 'prime-factorization') {
      let rest = p.number;
      const factors = [],
        trace = [];
      for (let divisor = 2; divisor * divisor <= rest; divisor++)
        while (rest % divisor === 0) {
          factors.push(divisor);
          trace.push({ whole: rest, prime: divisor, remainder: rest / divisor });
          rest /= divisor;
        }
      if (rest > 1) factors.push(rest);
      r = {
        output: factors.length,
        factors: freeze(factors),
        trace: freeze(trace),
        product: factors.reduce((a, b) => a * b, 1),
        factorText: factors.length ? factors.join(' × ') : '1 · empty product',
        classification:
          p.number === 1
            ? 'Neither prime nor composite'
            : factors.length === 1
              ? 'Prime'
              : 'Composite',
        exactDisplay: String(factors.length)
      };
    }
    if (s === 'rational-number') {
      const divisor = gcd(p.numerator, p.denominator),
        reducedNumerator = p.numerator / divisor,
        reducedDenominator = p.denominator / divisor,
        exactDisplay =
          reducedDenominator === 1
            ? String(reducedNumerator)
            : reducedNumerator + '/' + reducedDenominator;
      r = {
        output: p.numerator / p.denominator,
        gcd: divisor,
        reducedNumerator,
        reducedDenominator,
        pieceLength: 1 / p.denominator,
        exactDisplay,
        fractionLabel: exactDisplay.replace('-', '−'),
        balanceLabel: p.numerator < 0 ? 'Owed' : p.numerator > 0 ? 'Held' : 'Balanced'
      };
    }
    if (s === 'numeral-system') {
      let rest = p.value;
      const reversed = [];
      do {
        reversed.push(rest % p.base);
        rest = Math.floor(rest / p.base);
      } while (rest);
      const places = reversed.map((digit, position) => ({
          position,
          digit,
          weight: p.base ** position,
          contribution: digit * p.base ** position
        })),
        digits = reversed.slice().reverse().join('');
      r = {
        output: places.reduce((s, x) => s + x.contribution, 0),
        digits,
        places: freeze(places),
        digitCount: places.length,
        placeSum: places
          .slice()
          .reverse()
          .map(x => x.digit + ' × ' + x.weight)
          .join(' + '),
        exactDisplay: String(p.value),
        representation: digits + ' (base ' + p.base + ')'
      };
    }
    if (s === 'permutation-count') {
      const factors = Array.from({ length: p.slots }, (_, i) => p.available - i),
        count = factors.reduce((a, b) => a * b, 1);
      r = {
        output: count,
        factors: freeze(factors),
        factorText: factors.length ? factors.join(' × ') : '1 · empty assignment',
        factorial: Array.from({ length: p.available }, (_, i) => i + 1).reduce((a, b) => a * b, 1),
        exactDisplay: String(count)
      };
    }
    if (s === 'binomial-coefficient') {
      const selections = teams(p.available, p.chosen),
        count = choose(p.available, p.chosen),
        orders = Array.from({ length: p.chosen }, (_, i) => i + 1).reduce((a, b) => a * b, 1);
      r = {
        output: count,
        selections: freeze(selections),
        ordersPerTeam: orders,
        orderedCount: count * orders,
        shownCount: Math.min(12, selections.length),
        exactDisplay: String(count)
      };
    }
    return { ...c, ...r, status: 'valid', unit: get(s).unit };
  }
  function specs(s) {
    const { controls: ignored, ...d } = get(s);
    const initial = defaults(s),
      sweeps = controls(s).map(({ key, label, min, max, step, discrete }) => ({
        key,
        label,
        min,
        max,
        step,
        discrete
      }));
    if (s === 'permutation-count' || s === 'binomial-coefficient')
      for (const sweep of sweeps) {
        if (sweep.key === d.axis) sweep.max = initial.available;
        else if (sweep.key === 'available') sweep.min = initial[d.axis];
      }
    sweeps.sort((a, b) => Number(b.key === d.axis) - Number(a.key === d.axis));
    return {
      ...d,
      views: ['geometry', 'graph'],
      rendererId: s + '-visual-model',
      sweeps,
      readout: (p, r) => readout(s, p, r)
    };
  }
  function readout(s, p, r) {
    if (!r.valid)
      return {
        expression: 'Choose supported whole-number inputs',
        stats: [],
        insight: r.errors.map(e => e.message).join(' ')
      };
    const d = get(s),
      expression =
        s === 'rational-number'
          ? String(p.numerator).replace('-', '−') + '/' + p.denominator + ' = ' + r.fractionLabel
          : s === 'numeral-system'
            ? r.representation + ' = ' + p.value
            : s === 'prime-factorization'
              ? p.number + ' = ' + r.factorText
              : s === 'greatest-common-divisor'
                ? 'gcd(' + p.first + ',' + p.second + ') = ' + r.output
                : s === 'modular-arithmetic'
                  ? p.total + ' = ' + r.quotient + ' × ' + p.modulus + ' + ' + r.output
                  : d.expression + ' = ' + r.exactDisplay;
    return {
      expression,
      stats: [
        {
          label: d.primaryLabel,
          value: s === 'rational-number' ? r.fractionLabel : r.output,
          note: d.unit
        },
        {
          label: 'STRUCTURE',
          value:
            r.classification ||
            r.balanceLabel ||
            r.representation ||
            r.factorText ||
            r.firstEquation ||
            r.quotient + ' full trays',
          note: 'Same declared inputs'
        }
      ],
      insight: insights[s]
    };
  }
  const insights = {
    'modular-arithmetic':
      'Full trays account for the multiple of m. Gold counters are the remainder; increasing n by m returns to the same remainder.',
    'greatest-common-divisor':
      'The final nonzero divisor cuts both ribbons with no waste. The division rows preserve the set of common divisors.',
    'prime-factorization':
      'Each prime factor remains visible, including repetitions. Multiply the factors to reconstruct the original count.',
    'rational-number':
      'The number-line position and the reduced fraction describe the same signed length. Reducing a fraction does not change that length.',
    'numeral-system':
      'Place values and digits change when the base changes. Their weighted sum stays equal to the original item count.',
    'permutation-count':
      'Each role leaves one fewer person available. Multiply these branch counts; zero roles have one empty assignment.',
    'binomial-coefficient':
      'Order is ignored for a team. Each team accounts for k! ordered assignments; the graph counts every possible team size.'
  };
  const C = {
      bg: '#101e2b',
      grid: '#294352',
      ink: '#eef8f4',
      muted: '#a0b5bc',
      cyan: '#77d8e8',
      gold: '#f5cf78',
      mint: '#c6f276',
      violet: '#b8a1ff'
    },
    esc = v =>
      String(v ?? '').replace(
        /[&<>"']/g,
        c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
      );
  const n = v => Number(v.toFixed(5)),
    text = (x, y, t, c = C.ink, size = 16, anchor = 'start') =>
      `<text x="${n(x)}" y="${n(y)}" fill="${c}" font-size="${size}" text-anchor="${anchor}">${esc(t)}</text>`,
    line = (x, y, a, b, c = C.grid) =>
      `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${c}" stroke-width="2"/>`,
    rect = (x, y, w, h, c, extra = '') =>
      `<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${c}" ${extra}/>`,
    circle = (x, y, r, c) => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${c}"/>`,
    group = (keys, body, role = 'intermediate') =>
      `<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  function frame(s, body, o, description, height = 350) {
    const width = o.compact ? 360 : 760,
      id = 'number-' + String(o.id || s).replace(/[^a-zA-Z0-9-]/g, '-');
    return `<figure class="visualization-frame number-foundation-scene"><svg class="visual-scene" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" role="group" aria-labelledby="${id}-title ${id}-desc"><title id="${id}-title">${esc(get(s).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${width}" height="${height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;
  }
  function geometry(s, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = 28,
      right = w - 28;
    let body =
      text(left, 32, get(s).title, C.ink, o.compact ? 20 : 27) +
      group(
        'output',
        text(
          left,
          72,
          s === 'rational-number'
            ? r.fractionLabel + ' m'
            : s === 'numeral-system'
              ? r.representation
              : s === 'prime-factorization'
                ? r.factorText
                : r.output + ' ' + get(s).unit,
          C.gold,
          27
        ),
        'output'
      );
    if (s === 'modular-arithmetic') {
      const cols = o.compact ? 4 : 8,
        cell = (w - 56) / cols,
        rowHeight = 48,
        height = Math.max(
          365,
          150 + Math.ceil((r.quotient + (r.remainder ? 1 : 0)) / cols) * rowHeight
        );
      for (let tray = 0; tray < r.quotient + (r.remainder ? 1 : 0); tray++)
        body += group(
          'modulus quotient',
          rect(
            left + (tray % cols) * cell,
            105 + Math.floor(tray / cols) * rowHeight,
            cell - 10,
            38,
            'none',
            'rx="5" stroke="' + (tray < r.quotient ? C.cyan : C.gold) + '"'
          )
        );
      for (let i = 0; i < p.total; i++) {
        const tray = Math.floor(i / p.modulus),
          slot = i % p.modulus,
          x = left + (tray % cols) * cell + 8 + (slot % 4) * Math.min(13, (cell - 16) / 4),
          y = 116 + Math.floor(tray / cols) * rowHeight + Math.floor(slot / 4) * 12;
        body += group(
          i < r.packed ? 'total modulus packed quotient' : 'total remainder output',
          circle(x, y, 4, i < r.packed ? C.cyan : C.gold),
          i < r.packed ? 'intermediate' : 'output'
        );
      }
      body +=
        group(
          'modulus quotient',
          text(left, height - 53, r.quotient + ' full trays of ' + p.modulus, C.muted, 16)
        ) +
        group(
          'remainder output',
          text(left, height - 28, r.output + ' counters left', C.gold, 17),
          'output'
        );
      return frame(s, body, o, insights[s], height);
    }
    if (s === 'greatest-common-divisor') {
      const scale = (w - 56) / 60;
      [p.first, p.second].forEach((length, i) => {
        const y = 111 + i * 68;
        body += group(
          i ? 'second' : 'first',
          rect(left, y, length * scale, 28, i ? C.violet : C.cyan),
          'input'
        );
        for (let j = 0; j <= length / r.output; j++)
          body += group(
            'gcd output',
            line(left + j * r.output * scale, y, left + j * r.output * scale, y + 28, C.bg),
            'output'
          );
        body += text(
          left,
          y + 50,
          length + ' cm = ' + length / r.output + ' × ' + r.output + ' cm',
          C.ink,
          16
        );
      });
      body += group(
        'trace divisionCount',
        text(left, 279, r.firstEquation, C.muted, 18) +
          text(left, 310, r.divisionCount + ' exact divisions; gcd ' + r.output + ' cm', C.gold, 17)
      );
      return frame(s, body, o, insights[s]);
    }
    if (s === 'prime-factorization') {
      const columns = o.compact ? 3 : 6,
        gap = (w - 56) / columns;
      r.factors.forEach((factor, i) => {
        const x = left + (i % columns) * gap,
          y = 118 + Math.floor(i / columns) * 77;
        body += group(
          'number factors product output',
          rect(x, y, gap - 12, 45, C.grid, 'rx="7"') +
            text(x + (gap - 12) / 2, y + 30, factor, C.cyan, 24, 'middle'),
          'output'
        );
      });
      if (!r.factors.length)
        body += group(
          'factors output',
          text(left, 146, 'No prime factors: empty product is 1', C.cyan, 17),
          'output'
        );
      body +=
        group('classification', text(left, 295, r.classification, C.mint, 20)) +
        group('number product', text(left, 326, 'Product reconstructs ' + r.product, C.muted, 17));
      return frame(s, body, o, insights[s]);
    }
    if (s === 'rational-number') {
      const unit = (w - 56) / 12,
        origin = w / 2,
        at = origin + (r.output * (w - 56)) / 24;
      body += group(
        'denominator pieceLength',
        rect(left, 112, w - 56, 34, C.grid) +
          Array.from({ length: p.denominator + 1 }, (_, i) =>
            line(
              left + (i * (w - 56)) / p.denominator,
              112,
              left + (i * (w - 56)) / p.denominator,
              146,
              C.cyan
            )
          ).join('') +
          text(
            left,
            176,
            'One metre, divided into ' + p.denominator + ' equal parts',
            C.muted,
            o.compact ? 14 : 17
          ),
        'input'
      );
      body +=
        line(left, 232, right, 232) +
        line(origin, 220, origin, 244, C.muted) +
        text(left, 263, '−12 m', C.muted, 14) +
        text(origin, 263, '0', C.muted, 14, 'middle') +
        text(right, 263, '12 m', C.muted, 14, 'end') +
        group(
          'numerator output reducedNumerator reducedDenominator',
          rect(
            Math.min(origin, at),
            222,
            Math.abs(at - origin),
            20,
            r.output < 0 ? C.violet : C.gold
          ) + circle(at, 232, 7, C.gold),
          'output'
        );
      body += group(
        'gcd exactDisplay',
        text(
          left,
          313,
          String(p.numerator).replace('-', '−') +
            '/' +
            p.denominator +
            ' = ' +
            r.fractionLabel +
            ' m · ' +
            r.balanceLabel,
          C.ink,
          18
        )
      );
      return frame(s, body, o, insights[s]);
    }
    if (s === 'numeral-system') {
      const rows = r.places.slice().reverse(),
        height = Math.max(350, 150 + rows.length * 46);
      rows.forEach((place, i) => {
        const y = 113 + i * 46,
          width = ((w - 150) * place.contribution) / 63;
        body +=
          group(
            'base places digitCount',
            text(left, y, place.digit + ' × ' + place.weight, C.cyan, 17),
            'input'
          ) +
          group(
            'value places output',
            rect(left + 100, y - 18, width, 22, C.gold) +
              text(w - 25, y, place.contribution, C.ink, 16, 'end'),
            'output'
          );
      });
      body += group(
        'digits placeSum output',
        text(left, height - 25, 'Weighted sum = ' + r.output, C.mint, 19),
        'output'
      );
      return frame(s, body, o, insights[s], height);
    }
    if (s === 'permutation-count') {
      const cols = o.compact ? 4 : 8,
        gap = (w - 56) / cols;
      r.factors.forEach((v, i) => {
        const x = left + (i % cols) * gap,
          y = 118 + Math.floor(i / cols) * 93;
        body += group(
          'available slots factors',
          rect(x, y + 48 - v * 5, gap - 14, v * 5, C.cyan) +
            text(x, y + 75, 'Role ' + (i + 1), C.muted, 13) +
            text(x, y + 20, v, C.ink, 22)
        );
      });
      if (!p.slots)
        body += group(
          'slots output',
          text(left, 145, 'One empty role assignment', C.cyan, 19),
          'output'
        );
      body += group(
        'factorText output',
        text(left, 319, r.factorText, C.gold, o.compact ? 17 : 22),
        'output'
      );
      return frame(s, body, o, insights[s]);
    }
    const shown = r.selections.slice(0, 12),
      columns = o.compact ? 3 : 6,
      cw = (w - 56) / columns;
    shown.forEach((team, i) => {
      const x = left + (i % columns) * cw,
        y = 104 + Math.floor(i / columns) * 42;
      body += group(
        'available chosen selections output',
        rect(x, y, cw - 8, 33, C.grid, 'rx="4"') +
          Array.from({ length: p.available }, (_, j) =>
            circle(
              x + 7 + (j * (cw - 20)) / Math.max(1, p.available - 1),
              y + 16,
              2.7,
              team.includes(j) ? C.gold : C.muted
            )
          ).join('') +
          (p.available === 0 ? text(x + 12, y + 22, 'empty', C.ink, 13) : ''),
        'output'
      );
    });
    body += group(
      'shownCount output ordersPerTeam',
      text(left, 301, 'Showing ' + r.shownCount + ' of ' + r.output + ' teams', C.muted, 16) +
        text(left, 328, r.ordersPerTeam + ' ordered listings per team', C.cyan, 16)
    );
    return frame(s, body, o, insights[s]);
  }
  function curveValue(s, p, x) {
    if (!has(s) || !Number.isFinite(x)) return null;
    const r = evaluate(s, { ...p, [get(s).axis]: x });
    return r.valid ? r.output : null;
  }
  function graph(s, p, r, o) {
    if (s === 'numeral-system') {
      const w = o.compact ? 360 : 760,
        left = 32,
        right = w - 32,
        gap = (right - left) / 6,
        pinned = o.baseline && evaluate(s, o.baseline),
        barWidth = pinned?.valid ? gap / 2 - 10 : gap - 16;
      let body =
        text(left, 32, 'Place contributions', C.ink, o.compact ? 24 : 28) +
        text(left, 68, 'Digits × weights add to ' + r.output, C.gold, 22) +
        line(left, 265, right, 265);
      for (let j = 0; j < 6; j++) {
        const place = r.places[j] || { digit: 0, weight: p.base ** j, contribution: 0 },
          x = left + j * gap;
        body += group(
          'base places value output',
          rect(
            x + 8,
            265 - (place.contribution / 63) * 160,
            barWidth,
            (place.contribution / 63) * 160,
            C.cyan
          ) +
            text(x + gap / 2, 291, String(j), C.muted, 14, 'middle') +
            text(x + gap / 2, 312, String(place.contribution), C.ink, 15, 'middle')
        );
        if (pinned?.valid) {
          const old = pinned.places[j] || { contribution: 0 };
          body += group(
            'places output',
            rect(
              x + 12 + barWidth,
              265 - (old.contribution / 63) * 160,
              barWidth,
              (old.contribution / 63) * 160,
              C.violet,
              'data-pinned-place="' + j + '" data-value="' + old.contribution + '"'
            )
          );
        }
      }
      return frame(
        s,
        body,
        o,
        'Each integer place j contributes digit times base to that power. Undrawn leading digits contribute zero; the finite six-place frame covers every supported value.' +
          (pinned?.valid
            ? ' Violet bars retain the pinned representation; cyan bars use the current inputs on the same item-count scale.'
            : ''),
        345
      );
    }
    const d = get(s),
      c = controls(s).find(x => x.key === d.axis);
    let max = s === 'permutation-count' || s === 'binomial-coefficient' ? p.available : c.max;
    const points = Array.from({ length: max - c.min + 1 }, (_, i) => ({
        x: c.min + i,
        y: curveValue(s, p, c.min + i)
      })),
      series = [
        {
          id: 'exact',
          label: d.primaryLabel,
          quantity: d.axis + ' output',
          color: C.gold,
          dots: true,
          points
        }
      ],
      current = [
        {
          x: p[d.axis],
          y: r.output,
          label: 'Current whole-number setting',
          quantity: d.axis + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
    const b = o.baseline && evaluate(s, o.baseline);
    if (b?.valid) {
      const bound =
        s === 'permutation-count' || s === 'binomial-coefficient' ? b.parameters.available : c.max;
      max = Math.max(max, bound);
      series.push({
        id: 'pinned',
        label: 'Pinned inputs',
        quantity: 'output',
        color: C.violet,
        dots: true,
        points: Array.from({ length: bound - c.min + 1 }, (_, i) => ({
          x: c.min + i,
          y: curveValue(s, b.parameters, c.min + i)
        }))
      });
      current.push({
        x: b.parameters[d.axis],
        y: b.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    }
    const ys = series.flatMap(x => x.points.map(y => y.y)).filter(Number.isFinite),
      low = Math.min(0, ...ys),
      high = Math.max(0, ...ys),
      pad = (high - low || 1) * 0.12;
    return Plot.render(
      {
        title: d.title + ' · exact integer settings',
        description: insights[s] + ' Dots denote whole input choices; there is no interpolation.',
        x: {
          key: d.axis,
          label: c.label,
          min: c.min,
          max: Math.max(c.min + 1, max),
          step: 1,
          value: p[d.axis]
        },
        y: { label: d.unit, min: low - pad, max: high + pad },
        series,
        current,
        notes: ['Only whole-number inputs are defined in this executable family.']
      },
      o
    );
  }
  function render(s, input, o = {}) {
    if (!has(s)) return '';
    const r = evaluate(s, input);
    if (!r.valid)
      return frame(
        s,
        text(28, 46, 'Choose supported whole counts', C.gold, 22) +
          text(28, 90, r.errors[0].message, C.ink, o.compact ? 15 : 20),
        o,
        'Use the declared integer ranges and require the selected count to be at most the number available.',
        140
      );
    return o.view === 'graph' ? graph(s, r.parameters, r, o) : geometry(s, r.parameters, r, o);
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
    gcd
  });
});
