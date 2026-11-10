/* Finite communication models. The shared host owns clocks, controls and pacing. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory();
  if (node) module.exports = api;
  root.AtlasInformationBridges = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  const field = (key, label, value, min, max, step, unit, discrete = false) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {})
  });
  const definitions = freeze({
    'channel-capacity': {
      title: 'Capacity of a binary symmetric channel',
      expression: 'C = 1 − H₂(p); I = H₂(p + q(1−2p)) − H₂(p)',
      axis: 'errorChance',
      unit: 'bit/use',
      primaryLabel: 'Capacity C',
      setting:
        'A remote workshop sends one binary status symbol per channel use. The channel independently flips either symbol with probability p. Compare the best possible information per use with the information supplied by the chosen mix q of sent ones.',
      limits:
        'This is a known, stationary, memoryless binary symmetric channel, with probabilities p and q from zero to one. Capacity is the maximum mutual information per channel use, attained by equally likely input symbols. It is an asymptotic coding limit, not a guarantee that an individual message arrives correctly, a bit-per-second rate, or a code implemented by this view. A channel that always flips is invertible when its rule is known. Displayed entropy and information readings are numerical approximations.',
      controls: [
        field('errorChance', 'Flip probability p', 0.1, 0, 1, 0.01, 'probability'),
        field('inputChance', 'Chance of sending one q', 0.25, 0, 1, 0.01, 'probability')
      ]
    },
    'hamming-code': {
      title: 'Hamming code: locate and repair one flipped bit',
      expression: 's = s₁ + 2s₂ + 4s₄',
      axis: 'flippedBit',
      unit: 'position',
      primaryLabel: 'Syndrome s',
      setting:
        'A workshop sends a four-bit status label in a seven-bit block. Three even-parity checks overlap so that one flipped bit makes the failed checks name its position. Follow the received bits through the checks into the repaired label.',
      limits:
        'This is a deterministic (7,4) Hamming code even-parity example. The four data bits occupy positions 3, 5, 6 and 7; parity bits occupy 1, 2 and 4. Choose a data value from 0 to 15 and either no flip, labeled zero, or exactly one flipped position from 1 to 7. The correction guarantee requires at most one flipped bit in the block. Multiple errors can make this single-error decoder change the wrong bit; zero syndrome alone is not proof of error-free transmission outside the stated assumption. No stochastic channel or extended SECDED code is implemented.',
      controls: [
        field('flippedBit', 'Flipped position j · 0 means none', 3, 0, 7, 1, 'position', true),
        field('dataWord', 'Four-bit data value d', 5, 0, 15, 1, 'word choice', true)
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown information bridge.');
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
        errors: [{ field: 'parameters', message: 'Use the declared communication input object.' }],
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
        value < c.min ||
        value > c.max ||
        (c.discrete && !Number.isSafeInteger(value))
      )
        errors.push({
          field: c.key,
          message:
            'Use a finite value within the displayed bounds; bit positions and data values must be whole.'
        });
      else parameters[c.key] = value;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const binaryEntropy = probability => {
    if (probability === 0 || probability === 1) return 0;
    return -(
      probability * Math.log2(probability) +
      ((1 - probability) * Math.log1p(-probability)) / Math.LN2
    );
  };
  // The even power series avoids subtracting nearly equal entropies close to p=1/2.
  function informationSeries(delta, inputChance = 0.5) {
    const square = delta * delta,
      smallerInput = Math.min(inputChance, 1 - inputChance);
    const logFactor = Math.log1p(-2 * smallerInput);
    let power = square,
      sum = 0;
    for (let n = 1; n <= 40; n++) {
      const attenuation = -Math.expm1(2 * n * logFactor);
      const term = (power * attenuation) / ((2 * n - 1) * 2 * n);
      sum += term;
      power *= square;
      if (power === 0) break;
    }
    return sum / Math.LN2;
  }
  // Removing the linear term before summing avoids losing a tiny divergence.
  function entropyRemainder(ratio) {
    if (ratio === -1) return 1;
    if (Math.abs(ratio) > 0.5) return (1 + ratio) * Math.log1p(ratio) - ratio;
    let power = ratio * ratio,
      sum = 0;
    for (let n = 2; n <= 50; n++) {
      sum += (n % 2 ? -power : power) / (n * (n - 1));
      power *= ratio;
    }
    return sum;
  }
  function bernoulliDivergence(first, second) {
    const difference = first - second;
    if (difference === 0) return 0;
    const positive = difference / second,
      negative = -difference / (1 - second);
    if (Math.abs(positive) <= 0.5 && Math.abs(negative) <= 0.5)
      return (
        (second * entropyRemainder(positive) + (1 - second) * entropyRemainder(negative)) / Math.LN2
      );
    let result = 0;
    if (first > 0) result += first * (Math.log(first) - Math.log(second));
    if (first < 1) result += (1 - first) * (Math.log1p(-first) - Math.log1p(-second));
    return result / Math.LN2;
  }
  function weightedInformation(errorChance, inputChance) {
    const rare = Math.min(inputChance, 1 - inputChance);
    const received = errorChance + rare * (1 - 2 * errorChance);
    return (
      (1 - rare) * bernoulliDivergence(errorChance, received) +
      rare * bernoulliDivergence(1 - errorChance, received)
    );
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      base = { ...checked, status: 'valid' };
    if (slug === 'channel-capacity') {
      const delta = 1 - 2 * p.errorChance,
        noiseEntropy = binaryEntropy(p.errorChance);
      const outputChance = p.errorChance + p.inputChance * delta;
      const outputEntropy = binaryEntropy(Math.max(0, Math.min(1, outputChance)));
      const capacity = Math.abs(delta) <= 0.5 ? informationSeries(delta) : 1 - noiseEntropy;
      const rawInformation =
        p.inputChance === 0 || p.inputChance === 1
          ? 0
          : p.errorChance === 0 || p.errorChance === 1
            ? binaryEntropy(p.inputChance)
            : Math.abs(delta) <= 0.5
              ? informationSeries(delta, p.inputChance)
              : weightedInformation(p.errorChance, p.inputChance);
      const mutualInformation = Math.max(0, Math.min(capacity, rawInformation));
      return {
        ...base,
        output: capacity,
        capacity,
        noiseEntropy,
        outputChance,
        outputEntropy,
        inputEntropy: binaryEntropy(p.inputChance),
        mutualInformation,
        unusedCapacity: capacity - mutualInformation
      };
    }
    const dataBits = p.dataWord.toString(2).padStart(4, '0').split('').map(Number);
    const encodedBits = [0, 0, dataBits[0], 0, dataBits[1], dataBits[2], dataBits[3]];
    for (const check of [1, 2, 4]) {
      let parity = 0;
      for (let position = 1; position <= 7; position++)
        if (position !== check && position & check) parity ^= encodedBits[position - 1];
      encodedBits[check - 1] = parity;
    }
    const receivedBits = encodedBits.slice();
    if (p.flippedBit) receivedBits[p.flippedBit - 1] ^= 1;
    const checks = [1, 2, 4].map(check =>
      receivedBits.reduce((parity, bit, i) => parity ^ ((i + 1) & check ? bit : 0), 0)
    );
    const syndrome = checks[0] + 2 * checks[1] + 4 * checks[2];
    const correctedBits = receivedBits.slice();
    if (syndrome) correctedBits[syndrome - 1] ^= 1;
    const recoveredData = [2, 4, 5, 6].map(i => correctedBits[i]).join('');
    return {
      ...base,
      output: syndrome,
      syndrome,
      checkOne: checks[0],
      checkTwo: checks[1],
      checkFour: checks[2],
      encodedBits,
      receivedBits,
      correctedBits,
      encodedWord: encodedBits.join(''),
      receivedWord: receivedBits.join(''),
      correctedWord: correctedBits.join(''),
      dataBits: dataBits.join(''),
      recoveredData,
      recoveredWord: parseInt(recoveredData, 2),
      correctionCount: syndrome ? 1 : 0
    };
  }
  const canInterpolate = (slug, a, b) => {
    const first = validateParams(slug, a),
      second = validateParams(slug, b);
    return (
      first.valid &&
      second.valid &&
      get(slug).controls.every(
        c => !c.discrete || first.parameters[c.key] === second.parameters[c.key]
      )
    );
  };
  const curveValue = (slug, p, value) => {
    if (!has(slug)) return null;
    const result = evaluate(slug, { ...p, [get(slug).axis]: value });
    return result.valid ? result.output : null;
  };
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
      sweeps: controls(slug),
      canInterpolate: (a, b) => canInterpolate(slug, a, b),
      readout: (p, r) => ({
        expression: d.expression,
        stats: !r.valid
          ? []
          : slug === 'channel-capacity'
            ? [
                {
                  label: 'CAPACITY',
                  value: r.capacity,
                  note: 'bits per channel use; best input mix'
                },
                {
                  label: 'CURRENT INFORMATION',
                  value: r.mutualInformation,
                  note: 'bits per use for the chosen input mix'
                },
                { label: 'NOISE ENTROPY', value: r.noiseEntropy, note: 'bits per channel use' }
              ]
            : [
                {
                  label: 'SYNDROME',
                  value: r.syndrome,
                  note: 'zero means no repair under the stated assumption'
                },
                {
                  label: 'RECOVERED DATA',
                  value: r.recoveredData,
                  note: 'four bits in their original order'
                },
                { label: 'DATA VALUE', value: r.recoveredWord, note: 'whole label from 0 to 15' }
              ],
        insight: !r.valid
          ? r.errors.map(e => e.message).join(' ')
          : slug === 'channel-capacity'
            ? 'Balanced input symbols attain the channel capacity. An uneven mix may carry less information through the same channel.'
            : 'The three failed-check bits form the address of the one flipped position. Repair restores the original four-bit label under the single-error assumption.'
      })
    };
  }
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
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5)),
    f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, color = C.ink, size = 18, anchor = 'middle') =>
    '<text x="' +
    n(x) +
    '" y="' +
    n(y) +
    '" fill="' +
    color +
    '" font-size="' +
    size +
    '" text-anchor="' +
    anchor +
    '">' +
    esc(v) +
    '</text>';
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    '<line x1="' +
    n(x) +
    '" y1="' +
    n(y) +
    '" x2="' +
    n(a) +
    '" y2="' +
    n(b) +
    '" stroke="' +
    color +
    '" stroke-width="' +
    width +
    '" ' +
    extra +
    '/>';
  const mark = (keys, body, role = 'intermediate') =>
    '<g data-quantity="' + esc(keys) + '" data-story-part="' + role + '">' + body + '</g>';
  const rectangle = (x, y, width, height, color, extra = '') =>
    '<rect x="' +
    n(x) +
    '" y="' +
    n(y) +
    '" width="' +
    n(width) +
    '" height="' +
    n(height) +
    '" fill="' +
    color +
    '" ' +
    extra +
    '/>';
  function frame(slug, body, o, caption) {
    const w = o.compact ? 360 : 760,
      id =
        'information-bridge-' +
        Array.from(String(o.id || slug))
          .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    return (
      '<figure class="visualization-frame"><svg class="visual-scene information-bridge-model" viewBox="0 0 ' +
      w +
      ' 460" role="img" aria-labelledby="' +
      id +
      '-title ' +
      id +
      '-desc" xmlns="http://www.w3.org/2000/svg"><title id="' +
      id +
      '-title">' +
      esc(get(slug).title) +
      '</title><desc id="' +
      id +
      '-desc">' +
      esc(caption) +
      '</desc><rect width="' +
      w +
      '" height="460" rx="18" fill="' +
      C.bg +
      '"/><g font-family="Inter, system-ui, sans-serif">' +
      body +
      '</g></svg><figcaption class="visual-caption">' +
      esc(caption) +
      '</figcaption></figure>'
    );
  }
  function channelGeometry(p, r, o) {
    const w = o.compact ? 360 : 760,
      left = o.compact ? 38 : 95,
      span = w - 2 * left;
    let body = text(w / 2, 33, 'One use. At most one bit.', C.ink, o.compact ? 21 : 28);
    body += mark(
      'errorChance',
      text(w / 2, 67, 'Flip chance p = ' + f(p.errorChance), C.cyan, 20),
      'input'
    );
    body += mark(
      'inputChance inputEntropy',
      text(w / 2, 97, 'Sent-one chance q = ' + f(p.inputChance), C.cyan, 18),
      'input'
    );
    const bar = (y, label, value, color, keys) =>
      mark(
        keys,
        text(left, y - 13, label + ' ≈ ' + f(value), color, 18, 'start') +
          rectangle(left, y, span, 24, C.grid) +
          rectangle(
            left,
            y,
            span * value,
            24,
            color,
            'data-role="' + keys.split(' ')[0] + '-bar" data-scale="' + span + '"'
          ),
        keys.includes('output') ? 'output' : 'intermediate'
      );
    body += bar(151, 'Noise H₂(p)', r.noiseEntropy, C.violet, 'noiseEntropy');
    body += bar(
      225,
      'Chosen mix I',
      r.mutualInformation,
      C.gold,
      'mutualInformation outputChance outputEntropy'
    );
    body += bar(299, 'Best mix C', r.capacity, C.mint, 'capacity output unusedCapacity');
    for (const [value, label] of [
      [0, '0'],
      [0.5, '0.5'],
      [1, '1 bit/use']
    ]) {
      const x = left + span * value;
      body +=
        line(x, 329, x, 336) +
        text(x, 356, label, C.muted, 14, value === 0 ? 'start' : value === 1 ? 'end' : 'middle');
    }
    body += mark(
      'outputChance outputEntropy',
      text(w / 2, 393, 'Received-one chance ≈ ' + f(r.outputChance), C.muted, 16)
    );
    if (o.baseline) {
      const pin = evaluate('channel-capacity', o.baseline);
      if (pin.valid)
        for (const [value, y, keys] of [
          [pin.capacity, 299, 'output'],
          [pin.mutualInformation, 225, 'mutualInformation']
        ])
          body += mark(
            keys,
            line(
              left + span * value,
              y - 8,
              left + span * value,
              y + 31,
              C.violet,
              2,
              'stroke-dasharray="4 4" data-role="pinned-information-tick"'
            ),
            'reference'
          );
    }
    return frame(
      'channel-capacity',
      body,
      o,
      'The three bars share a fixed zero-to-one bit-per-use scale. Noise entropy, current mutual information and capacity are different quantities. Dashed marks preserve the earlier information and capacity.'
    );
  }
  function bitRow(label, bits, y, keys, o, changedPosition = 0) {
    const w = o.compact ? 360 : 760,
      size = o.compact ? 32 : 50,
      gap = o.compact ? 9 : 17,
      total = 7 * size + 6 * gap,
      left = (w - total) / 2;
    let body = text(w / 2, y - 10, label, C.muted, 16);
    bits.forEach((bit, i) => {
      const x = left + i * (size + gap),
        parity = [1, 2, 4].includes(i + 1),
        color = changedPosition === i + 1 ? C.gold : parity ? C.violet : C.cyan;
      body += mark(
        keys +
          (keys === 'encodedWord' ? ' dataWord' : '') +
          (changedPosition === i + 1
            ? keys === 'receivedWord'
              ? ' flippedBit'
              : ' syndrome'
            : ''),
        rectangle(
          x,
          y,
          size,
          33,
          C.grid,
          'rx="4" stroke="' +
            color +
            '" stroke-width="' +
            (changedPosition === i + 1 ? 3 : 1.5) +
            '" data-role="code-bit" data-position="' +
            (i + 1) +
            '" data-bit="' +
            bit +
            '"'
        ) + text(x + size / 2, y + 24, bit, color, 23)
      );
    });
    return body;
  }
  function hammingGeometry(p, r, o) {
    const w = o.compact ? 360 : 760,
      spacing = o.compact ? 41 : 67,
      center = w / 2,
      left = center - 3 * spacing;
    let body = text(center, 31, 'A failed check names one position', C.ink, o.compact ? 19 : 27);
    body += mark(
      'dataWord dataBits',
      text(center, 61, 'Data ' + r.dataBits + ' · value ' + p.dataWord, C.cyan, 19),
      'input'
    );
    for (let position = 1; position <= 7; position++)
      body += text(
        left + (position - 1) * spacing,
        85,
        position,
        [1, 2, 4].includes(position) ? C.violet : C.muted,
        14
      );
    body += bitRow('Encoded: data plus even-parity checks', r.encodedBits, 111, 'encodedWord', o);
    body += bitRow(
      'Received: selected position may change',
      r.receivedBits,
      184,
      'receivedWord',
      o,
      p.flippedBit
    );
    body += mark(
      'flippedBit',
      text(
        center,
        247,
        p.flippedBit ? 'Flipped position j = ' + p.flippedBit : 'j = 0 · no flip selected',
        C.gold,
        17
      ),
      'input'
    );
    body += mark(
      'checkOne checkTwo checkFour',
      text(
        center,
        280,
        's₁ = ' + r.checkOne + '    s₂ = ' + r.checkTwo + '    s₄ = ' + r.checkFour,
        C.violet,
        20
      )
    );
    body += mark(
      'output syndrome',
      text(
        center,
        314,
        's = ' + r.checkOne + ' + 2×' + r.checkTwo + ' + 4×' + r.checkFour + ' = ' + r.syndrome,
        C.mint,
        22
      ),
      'output'
    );
    body += bitRow('Repaired block', r.correctedBits, 347, 'correctedWord', o, r.syndrome);
    body += mark(
      'recoveredData recoveredWord correctionCount',
      text(center, 416, 'Recovered ' + r.recoveredData + ' · value ' + r.recoveredWord, C.cyan, 21),
      'output'
    );
    if (o.baseline) {
      const pin = evaluate('hamming-code', o.baseline);
      if (pin.valid)
        body += mark(
          'output recoveredWord',
          text(
            center,
            446,
            'Pinned s = ' + pin.syndrome + ' · data ' + pin.recoveredData,
            C.violet,
            15
          ),
          'reference'
        );
    }
    return frame(
      'hamming-code',
      body,
      o,
      'Positions 1, 2 and 4 carry parity checks; positions 3, 5, 6 and 7 carry the data. The failed-check pattern names the selected address, and the repaired block restores the four-bit label.'
    );
  }
  function graph(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      left = o.compact ? 44 : 85,
      right = w - (o.compact ? 30 : 65),
      top = 107,
      bottom = 340;
    const x = value => left + ((right - left) * value) / (slug === 'hamming-code' ? 7 : 1);
    const y = value => bottom - ((bottom - top) * value) / (slug === 'hamming-code' ? 7 : 1);
    let body = text(
      w / 2,
      32,
      slug === 'channel-capacity'
        ? 'A channel limit and a chosen mix'
        : 'One flip, one syndrome address',
      C.ink,
      o.compact ? 19 : 26
    );
    body += line(left, top, left, bottom) + line(left, bottom, right, bottom);
    if (slug === 'channel-capacity') {
      let capacityPath = '',
        informationPath = '';
      for (let i = 0; i <= 100; i++) {
        const errorChance = i / 100,
          sample = evaluate(slug, { ...p, errorChance });
        capacityPath += (i ? 'L' : 'M') + n(x(errorChance)) + ' ' + n(y(sample.capacity)) + ' ';
        informationPath +=
          (i ? 'L' : 'M') + n(x(errorChance)) + ' ' + n(y(sample.mutualInformation)) + ' ';
      }
      body += mark(
        'capacity',
        '<path data-role="capacity-curve" d="' +
          capacityPath +
          '" fill="none" stroke="' +
          C.mint +
          '" stroke-width="5"/>',
        'reference'
      );
      body += mark(
        'mutualInformation inputChance',
        '<path data-role="information-curve" d="' +
          informationPath +
          '" fill="none" stroke="' +
          C.gold +
          '" stroke-width="2.5"/>'
      );
      body += mark(
        'errorChance output capacity',
        '<circle data-role="current-capacity" cx="' +
          n(x(p.errorChance)) +
          '" cy="' +
          n(y(r.capacity)) +
          '" r="9" fill="none" stroke="' +
          C.mint +
          '" stroke-width="2.5"/>',
        'output'
      );
      body += mark(
        'inputChance mutualInformation errorChance',
        '<circle data-role="current-information" cx="' +
          n(x(p.errorChance)) +
          '" cy="' +
          n(y(r.mutualInformation)) +
          '" r="5" fill="' +
          C.gold +
          '"/>',
        'input'
      );
      for (const value of [0, 0.5, 1]) body += text(x(value), bottom + 25, value, C.muted, 14);
      for (const value of [0, 0.5, 1])
        body += text(left - 9, y(value) + 5, value, C.muted, 14, 'end');
      body +=
        text(w / 2, 390, 'Flip probability p', C.cyan, 17) +
        text(
          w / 2,
          65,
          'I ≈ ' + f(r.mutualInformation) + ' · C ≈ ' + f(r.capacity) + ' bit/use',
          C.mint,
          18
        );
      if (o.baseline) {
        const pin = evaluate(slug, o.baseline);
        if (pin.valid)
          for (const value of [pin.capacity, pin.mutualInformation])
            body += mark(
              'output mutualInformation',
              '<circle data-role="pinned-information" cx="' +
                n(x(pin.parameters.errorChance)) +
                '" cy="' +
                n(y(value)) +
                '" r="7" fill="none" stroke="' +
                C.violet +
                '" stroke-width="2" stroke-dasharray="3 3"/>',
              'reference'
            );
      }
      return frame(
        slug,
        body,
        o,
        'Both curves use fixed axes: flip probability from zero to one horizontally and information from zero to one bit per use vertically. Green is capacity; gold is mutual information for the current input mix. Balanced inputs make the curves coincide. Dashed violet circles preserve the earlier pinned input and readings.'
      );
    }
    for (let position = 0; position <= 7; position++) {
      const value = evaluate(slug, { ...p, flippedBit: position }).syndrome;
      body += mark(
        'syndrome',
        '<circle data-role="syndrome-sample" data-input="' +
          position +
          '" data-output="' +
          value +
          '" cx="' +
          n(x(position)) +
          '" cy="' +
          n(y(value)) +
          '" r="5" fill="' +
          C.mint +
          '"/>',
        'reference'
      );
      body += text(x(position), bottom + 25, position, C.muted, 14);
    }
    for (const value of [0, 2, 4, 6, 7])
      body += text(left - 9, y(value) + 5, value, C.muted, 14, 'end');
    body += mark(
      'flippedBit output',
      '<circle data-role="current-syndrome" cx="' +
        n(x(p.flippedBit)) +
        '" cy="' +
        n(y(r.syndrome)) +
        '" r="9" fill="none" stroke="' +
        C.gold +
        '" stroke-width="3"/>',
      'input'
    );
    body +=
      text(w / 2, 65, 's = ' + r.syndrome + ' · recovered data ' + r.recoveredData, C.cyan, 19) +
      text(w / 2, 390, 'Flipped position j · 0 means none', C.cyan, 16);
    if (o.baseline) {
      const pin = evaluate(slug, o.baseline);
      if (pin.valid)
        body += mark(
          'output',
          '<circle data-role="pinned-syndrome" cx="' +
            n(x(pin.parameters.flippedBit)) +
            '" cy="' +
            n(y(pin.syndrome)) +
            '" r="7" fill="none" stroke="' +
            C.violet +
            '" stroke-width="2" stroke-dasharray="3 3"/>',
          'reference'
        );
    }
    return frame(
      slug,
      body,
      o,
      'Eight separate samples show no flip or one flipped position. The syndrome equals the selected address. Samples are discrete; no line invents fractional bit positions. The corrected data stays the same across all eight supported cases.'
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(o.compact ? 180 : 380, 210, 'Choose supported communication inputs', C.gold, 18),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : slug === 'channel-capacity'
        ? channelGeometry(r.parameters, r, o)
        : hammingGeometry(r.parameters, r, o);
  }
  return Object.freeze({
    ids,
    has,
    defaults,
    controls,
    validateParams,
    evaluate,
    canInterpolate,
    specs,
    curveValue,
    render
  });
});
