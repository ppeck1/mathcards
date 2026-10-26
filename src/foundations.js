/* Four small mathematical families. Pure arithmetic and inert SVG; the host owns motion. */
(function (root, factory) {
  'use strict';
  const plot = typeof module === 'object' && module.exports ? require('./plot-view.js') : root.AtlasPlotView;
  const api = factory(plot);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasFoundations = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const DEFINITIONS = {
    function: { title: 'Functions: input, rule, output', expression: 'f(x) = ax + b', rendererId: 'function-visual-model', unit: 'units', axis: 'x', maximum: 5, primaryLabel: 'Function output', insight: 'One input passes through the same rule: multiply by a, then add b.', controls: [
      { key: 'x', label: 'Input x', value: 2, min: -5, max: 5, step: .01, unit: '' },
      { key: 'a', label: 'Multiplier a', value: 2, min: -3, max: 3, step: .01, unit: '' },
      { key: 'b', label: 'Offset b', value: 1, min: -5, max: 5, step: .01, unit: '' }
    ] },
    exponentiation: { title: 'Exponentiation and reciprocal powers', expression: 'y = bᵉ, b > 0', rendererId: 'exponentiation-visual-model', unit: 'units', axis: 'exponent', maximum: 5, primaryLabel: 'Power value', insight: 'The exponent changes the power continuously. A negative exponent gives a reciprocal.', controls: [
      { key: 'exponent', label: 'Exponent e', value: 3, min: -3, max: 5, step: .01, unit: '' },
      { key: 'base', label: 'Positive base b', value: 2, min: -1, max: 3, step: .01, unit: '' }
    ] },
    limit: { title: 'Limits from both sides', expression: 'limₓ→ₐ f(x)', rendererId: 'limit-visual-model', unit: 'units', axis: 'h', maximum: 1, primaryLabel: 'Two-sided limit', insight: 'Compare both approaching values with the function at the point. Finite probes illustrate a limit; they do not prove one.', controls: [
      { key: 'h', label: 'Probe distance h', value: .25, min: .001, max: 1, step: .001, unit: '' },
      { key: 'a', label: 'Approach point a', value: 1, min: -2, max: 2, step: .01, unit: '' },
      { key: 'mode', label: 'Function family', value: 'removable', type: 'select', options: [
        { value: 'removable', label: 'Removable hole' }, { value: 'jump', label: 'Jump discontinuity' }
      ] }
    ] },
    'signed-accumulation': { title: 'Signed accumulation and finite sums', expression: 'Δs(T) = ∫₀ᵀ (v₀ + kt) dt', rendererId: 'signed-accumulation-visual-model', unit: 'm', axis: 'time', maximum: 6, primaryLabel: 'Net displacement', insight: 'Area above zero adds displacement; area below zero subtracts it. Total distance counts both magnitudes.', controls: [
      { key: 'time', label: 'Elapsed time T', value: 4, min: 0, max: 6, step: .01, unit: 's' },
      { key: 'initial', label: 'Initial velocity v₀', value: 2, min: -4, max: 4, step: .01, unit: 'm/s' },
      { key: 'rate', label: 'Acceleration k', value: -1, min: -2, max: 2, step: .01, unit: 'm/s²' },
      { key: 'partitions', label: 'Finite rectangles n', value: '8', type: 'select', options: [4, 8, 16, 32].map(value => ({ value: String(value), label: String(value) })) }
    ] }
  };
  const C = Object.freeze({ bg: '#101e2b', grid: '#294352', white: '#f0f7f6', muted: '#98afbd', mint: '#c6f276', cyan: '#77d8e8', gold: '#f5cf78', violet: '#b8a1ff', orange: '#ffb08a' });
  const finite = Number.isFinite;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const n = value => finite(value) ? Number(value.toFixed(5)) : 0;
  const fmt = value => finite(value) ? String(Number(value.toPrecision(4))).replace('-', '−') : 'undefined';
  const scope = value => 'atlas-foundation-' + Array.from(String(value ?? 'scene')).map(c => /^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_').join('');
  const text = (x, y, value, color = C.muted, size = 15, extra = '') => `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" ${extra}/>`;
  const circle = (x, y, radius, color, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(radius)}" fill="${color}" ${extra}/>`;
  const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('');
  const group = (quantities, part, body, extra = '') => `<g class="story-cue" data-quantity="${esc(quantities)}" data-story-part="${esc(part)}" ${extra}>${body}</g>`;
  const cleanZero = value => Math.abs(value) < 1e-12 ? 0 : value;
  function has(slug) { return Object.hasOwn(DEFINITIONS, slug); }
  function definition(slug) { if (!has(slug)) throw new RangeError('Unknown foundation model: ' + slug); return DEFINITIONS[slug]; }
  function defaults(slug) { return Object.fromEntries(definition(slug).controls.map(c => [c.key, c.value])); }
  function controls(slug) { return definition(slug).controls.map(({ value, ...control }) => ({ ...control, ...(control.options ? { options: control.options.map(option => ({ ...option })) } : {}) })); }
  function specs(slug) {
    const { controls: ignored, ...metadata } = definition(slug);
    const sweeps = controls(slug).filter(control => control.type !== 'select').map(control => ({ key: control.key, label: control.label, min: slug === 'exponentiation' && control.key === 'base' ? .25 : control.min, max: control.max, step: control.step }));
    return { ...metadata, sweeps, readout: (p, r, context) => readout(slug, p, r, context) };
  }
  function readout(slug, p, r, { format: f = fmt, view } = {}) {
    if (!r.valid) return { expression: definition(slug).expression + ' · undefined for these parameters', stats: [], insight: r.errors.map(error => error.message).join(' ') };
    if (slug === 'function') return { expression: `f(${f(p.x)}) = ${f(p.a)} × ${f(p.x)} + ${f(p.b)} = ${f(r.output)}`, stats: [{ label: 'INPUT', value: p.x, note: 'the value given to the rule' }, { label: 'MULTIPLY', value: r.scaled, note: 'a × x before adding the offset' }, { label: 'OUTPUT', value: r.output, note: 'one output from this affine rule' }], insight: view === 'graph' ? 'The slope is a and the vertical intercept is b. Moving x follows one point along the same rule.' : definition(slug).insight };
    if (slug === 'exponentiation') return { expression: `${f(p.base)}^(${f(p.exponent)}) = ${f(r.output)}`, stats: [{ label: 'EXPONENT', value: p.exponent, note: 'continuous real powers for b > 0' }, { label: 'POWER', value: r.output, note: view === 'graph' ? 'vertical curve value' : 'represented by square area' }, { label: 'RECIPROCAL', value: r.reciprocal, note: 'b raised to the opposite exponent' }], insight: p.base === 1 ? 'Base 1 stays at 1 for every exponent.' : p.base < 1 ? 'A base between 0 and 1 decreases as the exponent rises. Negative exponents grow its reciprocal power.' : definition(slug).insight };
    if (slug === 'limit') return { expression: `lim x→${f(p.a)} f(x) ${r.limitExists ? '= ' + f(r.output) : 'does not exist'}`, stats: [{ label: 'FROM THE LEFT', value: r.leftValue, note: 'approaches ' + f(r.leftLimit) }, { label: 'FROM THE RIGHT', value: r.rightValue, note: 'approaches ' + f(r.rightLimit) }, { label: 'VALUE AT a', value: r.functionAtPoint, note: r.limitExists ? 'the hole does not change the limit' : 'a defined point cannot close the jump' }], insight: r.limitExists ? 'The two sides approach the same exact value although f(a) is missing. Finite probes illustrate this algebraic limit.' : 'The left and right limits disagree for every positive h. This explicit jump has no two-sided limit.' };
    return { expression: `Δs(${f(p.time)}) = ${f(p.initial)} × ${f(p.time)} + ½ × ${f(p.rate)} × ${f(p.time)}² = ${f(r.netDisplacement)} m`, stats: [{ label: 'NET DISPLACEMENT', value: r.netDisplacement, note: 'signed area · metres' }, { label: 'TOTAL DISTANCE', value: r.distance, note: 'both area magnitudes · metres' }, { label: 'LEFT SUM', value: r.leftSum, note: r.partitionCount + ' finite rectangles; midpoint ' + f(r.midpointSum) + ' m' }], insight: 'A return journey can have zero net displacement and positive distance. Left and right sums converge as the rectangle count grows; midpoint is exact for this linear velocity.' };
  }
  function validateParams(slug, input) {
    const parameters = {}, errors = [];
    const invalid = message => ({ valid: false, parameters, errors: [{ field: 'parameters', message }], warnings: [] });
    if (!has(slug)) return invalid('Unknown model.');
    if (input === undefined) input = {};
    if (!input || typeof input !== 'object' || Array.isArray(input)) return invalid('Parameters must be an object.');
    const rules = definition(slug).controls;
    for (const key of Object.keys(input)) if (!rules.some(rule => rule.key === key)) errors.push({ field: key, message: 'Unknown parameter.' });
    for (const rule of rules) {
      const value = Object.hasOwn(input, rule.key) ? input[rule.key] : rule.value;
      if (rule.type === 'select') {
        if (!rule.options.some(option => option.value === value)) errors.push({ field: rule.key, message: 'Choose one of the listed options.' });
        else parameters[rule.key] = value;
      } else if (typeof value !== 'number' || !finite(value)) errors.push({ field: rule.key, message: 'Enter a finite number.' });
      else if (value < rule.min || value > rule.max) errors.push({ field: rule.key, message: `Use a value from ${rule.min} to ${rule.max}.` });
      else parameters[rule.key] = value;
    }
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let quantities;
    if (slug === 'function') quantities = { input: p.x, scaled: p.a * p.x, output: p.a * p.x + p.b };
    else if (slug === 'exponentiation') {
      if (p.base <= 0) return { ...checked, valid: false, status: 'invalid_base', output: null, errors: [{ field: 'base', message: 'This continuous real-power family needs a positive base.' }], unit: definition(slug).unit };
      const output = p.base ** p.exponent, reciprocal = p.base ** (-p.exponent);
      if (!finite(output) || !finite(reciprocal) || output === 0 || reciprocal === 0) return { ...checked, valid: false, status: 'numeric_range', output: null, errors: [{ field: 'base', message: 'This power is outside the finite numerical range.' }], unit: definition(slug).unit };
      quantities = { output, reciprocal };
    } else if (slug === 'limit') {
      const leftX = p.a - p.h, rightX = p.a + p.h;
      const removable = p.mode === 'removable', leftLimit = removable ? 2 * p.a : p.a - 1, rightLimit = removable ? 2 * p.a : p.a + 1;
      const leftValue = removable ? leftX + p.a : leftLimit, rightValue = removable ? rightX + p.a : rightLimit;
      quantities = { leftX, rightX, leftValue, rightValue, leftLimit, rightLimit, gap: rightValue - leftValue, limitExists: removable, functionAtPoint: removable ? null : p.a, output: removable ? 2 * p.a : null };
      return { ...checked, ...quantities, status: removable ? 'valid' : 'does_not_exist', unit: definition(slug).unit };
    } else {
      const primitive = t => p.initial * t + .5 * p.rate * t * t;
      const netDisplacement = cleanZero(primitive(p.time));
      const split = p.rate === 0 ? null : -p.initial / p.rate;
      const boundaries = split > 0 && split < p.time ? [0, split, p.time] : [0, p.time];
      let positiveArea = 0, negativeArea = 0;
      for (let i = 1; i < boundaries.length; i++) {
        const area = primitive(boundaries[i]) - primitive(boundaries[i - 1]);
        if (area >= 0) positiveArea += area; else negativeArea -= area;
      }
      const partitionCount = Number(p.partitions), step = p.time / partitionCount;
      let leftSum = 0, rightSum = 0, midpointSum = 0;
      for (let i = 0; i < partitionCount; i++) {
        leftSum += (p.initial + p.rate * i * step) * step;
        rightSum += (p.initial + p.rate * (i + 1) * step) * step;
        midpointSum += (p.initial + p.rate * (i + .5) * step) * step;
      }
      const velocity = cleanZero(p.initial + p.rate * p.time);
      quantities = { output: netDisplacement, netDisplacement, positiveArea: cleanZero(positiveArea), negativeArea: cleanZero(negativeArea), signedNegativeArea: cleanZero(-negativeArea), distance: cleanZero(positiveArea + negativeArea), leftSum: cleanZero(leftSum), rightSum: cleanZero(rightSum), midpointSum: cleanZero(midpointSum), partitionCount, step, velocity, finalVelocity: velocity };
    }
    return { ...checked, ...quantities, status: 'valid', unit: definition(slug).unit };
  }
  function curveValue(slug, input, x) {
    if (!has(slug) || !finite(x)) return null;
    const checked = validateParams(slug, input);
    if (!checked.valid) return null;
    const axis = definition(slug).axis, result = evaluate(slug, { ...checked.parameters, [axis]: x });
    return result.valid && finite(result.output) ? result.output : null;
  }
  function frame(slug, options, body, description, caption) {
    const id = scope(options.id || slug), compact = Boolean(options.compact), size = compact ? 27 : 22;
    const captions = { function: 'Follow the same signed length through input → multiply → add. Drag the cyan handle.', exponentiation: 'Square area represents the power. Its scale stays fixed as the exponent changes. Drag the cyan handle.', limit: 'Cyan approaches from the left; gold from the right. Hollow points are excluded; a filled point is defined.', 'signed-accumulation': 'Mint area adds displacement; orange subtracts it. Total distance counts both magnitudes.' };
    return `<figure class="visualization-frame foundation-scene${compact ? ' foundation-scene-compact' : ''}" data-foundation="${esc(slug)}"><svg class="visual-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-description">${esc(description)}</desc><rect width="760" height="420" rx="20" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${text(30, 34, definition(slug).title, C.white, size)}${body}</g></svg><figcaption class="visual-caption">${esc(caption || captions[slug])}</figcaption></figure>`;
  }
  function rail(key, p, slug, options, y = 369) {
    const declared = definition(slug).controls.find(item => item.key === key), control = { ...declared }, x0 = 110, x1 = 650;
    const requested = options.controlBounds?.[key];
    if (requested && typeof requested === 'object' && !Array.isArray(requested)) {
      const min = finite(requested.min) ? Math.max(declared.min, requested.min) : declared.min;
      const max = finite(requested.max) ? Math.min(declared.max, requested.max) : declared.max;
      if (max > min) {
        control.min = min; control.max = max;
        control.step = Math.min(finite(requested.step) && requested.step > 0 ? requested.step : declared.step, max - min);
      }
    }
    const value = Math.max(control.min, Math.min(control.max, p[key]));
    const x = x0 + (value - control.min) / (control.max - control.min) * (x1 - x0), id = scope(options.id || slug);
    return `<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-story-part="input" data-quantity="${esc(key)}" data-drag-param="${esc(key)}" data-drag-min="${control.min}" data-drag-max="${control.max}" data-drag-x0="${x0}" data-drag-x1="${x1}" data-drag-step="${control.step}" aria-label="${esc(control.label + '. Drag horizontally or use arrow keys.')}" aria-orientation="horizontal" aria-valuemin="${control.min}" aria-valuemax="${control.max}" aria-valuenow="${value}" aria-describedby="${id}-description">${line(x0, y, x1, y, C.grid, 'stroke-width="5" stroke-linecap="round"')}${circle(x, y, 24, 'transparent', 'class="scene-handle-hit" pointer-events="all"')}${circle(x, y, 13, C.cyan, 'class="scene-handle-ring" fill-opacity=".15" stroke="' + C.cyan + '"')}${circle(x, y, 5, C.cyan)}${text(x0, y + 29, fmt(control.min), C.muted, 15)}${text(x1, y + 29, fmt(control.max), C.muted, 15, 'text-anchor="end"')}${text(380, y + 29, control.label + ' = ' + fmt(p[key]) + ' ↔', C.cyan, options.compact ? 24 : 17, 'text-anchor="middle"')}</g>`;
  }
  function baselineResult(slug, options) {
    if (!options.baseline) return null;
    const result = evaluate(slug, options.baseline);
    return result.valid ? result : null;
  }
  function invalidScene(slug, result, options) {
    const message = result.errors?.map(error => error.message).join(' ') || 'Choose valid parameters to explore this family.';
    return frame(slug, options, text(380, 176, 'Choose a valid value', C.gold, 27, 'text-anchor="middle"') + text(380, 220, message, C.white, options.compact ? 22 : 16, 'text-anchor="middle"'), message, message);
  }
  function functionGeometry(p, r, options) {
    const map = value => 380 + value * 14, rows = [
      { key: 'x input', part: 'input', label: 'Input x', value: p.x, y: 113, color: C.cyan },
      { key: 'a scaled', part: 'intermediate', label: 'Multiply by a: ax', value: r.scaled, y: 197, color: C.gold },
      { key: 'b output', part: 'output', label: 'Add b: f(x)', value: r.output, y: 281, color: C.mint }
    ];
    let body = text(30, 64, 'The same signed length scale follows each step', C.muted, 15);
    for (const row of rows) {
      body += group(row.key, row.part, text(85, row.y - 24, row.label, row.color, options.compact ? 23 : 17) + text(675, row.y - 24, fmt(row.value), row.color, options.compact ? 27 : 21, 'text-anchor="end"') + line(100, row.y, 660, row.y) + line(380, row.y - 10, 380, row.y + 14, C.muted) + `<rect x="${n(Math.min(380, map(row.value)))}" y="${row.y - 8}" width="${n(Math.abs(map(row.value) - 380))}" height="16" rx="4" fill="${row.color}" data-value="${row.value}"/>` + circle(map(row.value), row.y, 6, row.color));
    }
    const baseline = baselineResult('function', options);
    if (baseline) body += group('output', 'output', line(map(baseline.output), 266, map(baseline.output), 299, C.violet, 'stroke-width="3" stroke-dasharray="4 4" data-role="baseline-output" data-value="' + baseline.output + '"'));
    body += group('a b', 'reference', text(380, 328, `a = ${fmt(p.a)} · b = ${fmt(p.b)} · zero is at the center`, C.muted, options.compact ? 22 : 16, 'text-anchor="middle"')) + rail('x', p, 'function', options);
    return frame('function', options, body, 'This bounded family uses f(x) = ax + b. Signed lengths share a fixed scale from −20 to 20: follow x, then ax, then ax + b. Change a or b to change the rule.');
  }
  function exponentGeometry(p, r, options) {
    const baseline = baselineResult('exponentiation', options);
    const bases = [p.base, ...(baseline ? [baseline.parameters.base] : [])];
    const maximum = Math.max(1, r.output, ...(baseline ? [baseline.output] : []), ...bases.flatMap(base => [base ** -3, base ** 5]).filter(finite));
    const side = 190 * Math.sqrt(r.output / maximum), baseSide = baseline ? 190 * Math.sqrt(baseline.output / maximum) : null, x = 475, y = 290;
    const integer = Number.isInteger(p.exponent), count = Math.abs(p.exponent);
    let interpretation = p.exponent === 0 ? 'Every positive base to power 0 is 1.' : p.exponent < 0 ? `1 ÷ b${integer ? ' multiplied ' + count + ' times' : ' raised to ' + fmt(-p.exponent)}` : integer ? `${count} factors of b` : 'A continuous power between whole exponents';
    let body = group('base', 'reference', text(54, 98, 'Base b', C.cyan, 19) + text(54, 139, fmt(p.base), C.cyan, 38)) + group('exponent', 'input', text(54, 183, 'Exponent e', C.gold, 19) + text(54, 224, fmt(p.exponent), C.gold, 38)) + group('output', 'output', text(54, 267, 'Power value', C.mint, 19) + text(54, 309, fmt(r.output), C.mint, 38));
    body += `<rect x="350" y="80" width="250" height="230" rx="12" fill="${C.white}" fill-opacity=".018" stroke="${C.grid}"/>`;
    if (baseline) body += group('output', 'output', `<rect data-role="baseline-square" data-value="${baseline.output}" x="${n(x - baseSide / 2)}" y="${n(y - baseSide)}" width="${n(baseSide)}" height="${n(baseSide)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="6 5"/>`);
    body += group('output', 'output', `<rect data-role="power-square" data-value="${r.output}" data-area-scale="${190 ** 2 / maximum}" x="${n(x - side / 2)}" y="${n(y - side)}" width="${n(side)}" height="${n(side)}" fill="${C.mint}" fill-opacity=".25" stroke="${C.mint}" stroke-width="2"/>` + text(475, 333, 'Square area represents bᵉ', C.mint, options.compact ? 21 : 16, 'text-anchor="middle"'));
    body += group('reciprocal', 'intermediate', text(54, 341, 'Reciprocal = ' + fmt(r.reciprocal), C.violet, options.compact ? 21 : 16)) + rail('exponent', p, 'exponentiation', options, 380);
    return frame('exponentiation', options, body, 'Square area, not side length, represents bᵉ. Its scale stays fixed while the exponent moves; changing the base can change the scale. Positive bases allow a continuous real exponent, including reciprocal powers. ' + interpretation);
  }
  function limitGeometry(p, r, options) {
    const x = value => 380 + (value - p.a) * 220, mapY = value => 225 - value * 18;
    let body = group('mode', 'reference', text(30, 67, p.mode === 'removable' ? 'A missing point; matching limits' : 'A jump; distinct one-sided limits', C.muted, options.compact ? 23 : 17));
    body += group('a', 'reference', line(140, 121, 620, 121, C.grid, 'stroke-width="3"') + line(380, 110, 380, 139, C.white) + text(380, 98, 'a = ' + fmt(p.a), C.white, 18, 'text-anchor="middle"'));
    body += group('h leftX rightX', 'input', line(x(r.leftX), 121, 380, 121, C.cyan, 'stroke-width="4"') + line(380, 121, x(r.rightX), 121, C.gold, 'stroke-width="4"') + circle(x(r.leftX), 121, 7, C.cyan) + circle(x(r.rightX), 121, 7, C.gold) + text(90, 166, 'Left x = ' + fmt(r.leftX), C.cyan, options.compact ? 23 : 18) + text(670, 166, 'Right x = ' + fmt(r.rightX), C.gold, options.compact ? 23 : 18, 'text-anchor="end"'));
    const rows = [{value:r.leftValue,limit:r.leftLimit,cx:250,key:'leftValue leftLimit',label:'Left value',color:C.cyan},{value:r.rightValue,limit:r.rightLimit,cx:510,key:'rightValue rightLimit',label:'Right value',color:C.gold}];
    for (const row of rows) {
      const yy = mapY(row.value), target = mapY(row.limit);
      body += group(row.key, 'intermediate', line(row.cx - 72, 225, row.cx + 72, 225, C.grid) + line(row.cx, 225, row.cx, yy, row.color, 'stroke-width="10" stroke-opacity=".55"') + circle(row.cx, yy, 7, row.color, `data-role="probe-value" data-value="${row.value}"`) + line(row.cx - 58, target, row.cx + 58, target, row.color, 'stroke-width="2" stroke-dasharray="5 4"') + text(row.cx, 303, row.label + ' = ' + fmt(row.value), row.color, options.compact ? 23 : 18, 'text-anchor="middle"'));
    }
    body += group('output leftLimit', 'output', circle(380, mapY(r.leftLimit), 7, C.bg, `stroke="${C.cyan}" stroke-width="3" data-role="open-point" data-x="${p.a}" data-y="${r.leftLimit}"`));
    if (p.mode === 'jump') body += group('rightLimit', 'output', circle(380, mapY(r.rightLimit), 7, C.bg, `stroke="${C.gold}" stroke-width="3" data-role="open-point" data-x="${p.a}" data-y="${r.rightLimit}"`)) + group('functionAtPoint', 'reference', circle(380, mapY(r.functionAtPoint), 5, C.white, `data-role="defined-point" data-x="${p.a}" data-y="${r.functionAtPoint}"`));
    const baseline = baselineResult('limit', options);
    if (baseline) body += group('leftValue rightValue output', 'output', line(178,mapY(baseline.leftValue),322,mapY(baseline.leftValue),C.violet,'stroke-width="2" stroke-dasharray="3 4" data-role="baseline-probe"') + line(438,mapY(baseline.rightValue),582,mapY(baseline.rightValue),C.violet,'stroke-width="2" stroke-dasharray="3 4" data-role="baseline-probe"'));
    body += group('output gap leftLimit rightLimit functionAtPoint', 'output', text(380, 335, r.limitExists ? 'Both approach ' + fmt(r.output) + ' · hole at a' : 'Limit does not exist · gap stays 2', r.limitExists ? C.mint : C.orange, options.compact ? 24 : 20, 'text-anchor="middle"')) + rail('h', p, 'limit', options);
    return frame('limit', options, body, 'Cyan probes from a − h; gold probes from a + h. The dashed output levels show the exact one-sided limits for these two explicit families. Finite probes illustrate the calculation; they are not a proof. The graph view shows the hole or defined central point.');
  }
  function accumulationGeometry(p, r, options) {
    const baseline = baselineResult('signed-accumulation', options);
    const coefficients = [p, ...(baseline ? [baseline.parameters] : [])];
    // The full time-domain envelope holds the scale still while T changes.
    // Coefficient edits or a pinned relationship may select a new nice range.
    const maximumVelocity = Math.max(1, ...coefficients.flatMap(parameters => [Math.abs(parameters.initial), Math.abs(parameters.initial + 6 * parameters.rate)]));
    const velocityRange = [1, 2, 4, 8, 16].find(range => range >= maximumVelocity);
    const velocityScale = 117 / velocityRange;
    const px = t => 92 + 100 * t, py = v => 203 - v * velocityScale, zeroY = py(0), velocity = t => p.initial + p.rate * t;
    let body = group('initial rate', 'reference', text(30, 64, 'Velocity · shaded area is exact; rectangles use left endpoints', C.muted, options.compact ? 22 : 16));
    for (const value of [-velocityRange, -velocityRange / 2, 0, velocityRange / 2, velocityRange]) body += line(92, py(value), 692, py(value), C.grid) + text(79, py(value) + 5, value, C.muted, options.compact ? 21 : 15, 'text-anchor="end"');
    for (const value of [0, 2, 4, 6]) body += line(px(value), 86, px(value), 320, C.grid, 'stroke-opacity=".45"') + text(px(value), 341, value + 's', C.muted, options.compact ? 21 : 15, 'text-anchor="middle"');
    body += line(92, zeroY, 692, zeroY, C.muted);
    const crossing = p.rate === 0 ? null : -p.initial / p.rate;
    const bounds = crossing > 0 && crossing < p.time ? [0, crossing, p.time] : [0, p.time];
    for (let i = 1; i < bounds.length; i++) {
      const start = bounds[i - 1], end = bounds[i], positive = velocity((start + end) / 2) >= 0;
      const quantity = positive ? 'positiveArea' : 'negativeArea signedNegativeArea';
      body += group(quantity + ' output netDisplacement distance', 'output', `<path data-role="exact-signed-area" data-sign="${positive ? 'positive' : 'negative'}" d="${path([[px(start),zeroY],[px(start),py(velocity(start))],[px(end),py(velocity(end))],[px(end),zeroY]])}Z" fill="${positive ? C.mint : C.orange}" fill-opacity=".24"/>`);
    }
    for (let i = 0; i < r.partitionCount; i++) {
      const t = i * r.step, value = velocity(t), height = Math.abs(py(value) - zeroY);
      body += group('partitions partitionCount step leftSum', 'intermediate', `<rect data-role="left-rectangle" data-index="${i}" data-time="${t}" data-velocity="${value}" data-width="${r.step}" x="${n(px(t))}" y="${n(Math.min(py(value),zeroY))}" width="${n(100 * r.step)}" height="${n(height)}" fill="${value >= 0 ? C.mint : C.orange}" fill-opacity=".065" stroke="${value >= 0 ? C.mint : C.orange}" stroke-opacity=".65" stroke-width="1"/>`);
    }
    if (baseline) body += group('output netDisplacement velocity', 'output', `<path data-role="baseline-velocity" data-value="${baseline.output}" d="${path([[px(0),py(baseline.parameters.initial)],[px(6),py(baseline.parameters.initial + baseline.parameters.rate * 6)]])}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="6 5"/>`);
    body += group('velocity finalVelocity', 'intermediate', `<path data-role="velocity-line" data-velocity-range="${velocityRange}" data-velocity-scale="${velocityScale}" d="${path([[px(0),py(velocity(0))],[px(6),py(velocity(6))]])}" fill="none" stroke="${C.cyan}" stroke-width="3"/>`) + group('time velocity finalVelocity', 'input', line(px(p.time), 86, px(p.time), 320, C.cyan, 'stroke-dasharray="4 5"') + circle(px(p.time),py(r.velocity),6,C.cyan, `data-role="velocity-endpoint" data-time="${p.time}" data-velocity="${r.velocity}"`));
    body += group('output netDisplacement distance positiveArea negativeArea', 'output', text(380, 360, `Net ${fmt(r.netDisplacement)} m · distance ${fmt(r.distance)} m`, C.mint, options.compact ? 24 : 19, 'text-anchor="middle"'));
    body += rail('time', p, 'signed-accumulation', options, 384);
    return frame('signed-accumulation', options, body, `The actual signed area under v(t) = v₀ + kt gives net displacement. Cyan is velocity, mint area adds, orange area subtracts. ${r.partitionCount} finite left rectangles approximate it: left ${fmt(r.leftSum)} m, right ${fmt(r.rightSum)} m, midpoint ${fmt(r.midpointSum)} m. For this affine velocity, midpoint sums are exact. Total distance adds both area magnitudes. The vertical range is ±${velocityRange} m/s for the full 0–6 s interval; it stays fixed while time changes and may rescale when coefficients or the pinned comparison change.`, `Signed area gives net displacement; distance counts both magnitudes. The ±${velocityRange} m/s scale stays fixed as time changes; coefficients and pins can rescale it.`);
  }
  function bounds(values) {
    const all = [0, ...values.filter(finite)], min = Math.min(...all), max = Math.max(...all), span = max - min || 1;
    return { min: finite(min - span * .09) ? min - span * .09 : min, max: finite(max + span * .09) ? max + span * .09 : max };
  }
  function graph(slug, p, r, options) {
    if (slug === 'limit') return limitGraph(p, r, options);
    const meta = definition(slug), control = meta.controls.find(item => item.key === meta.axis), baseline = baselineResult(slug, options);
    const sample = parameters => Array.from({ length: 161 }, (_, i) => { const x = control.min + (control.max - control.min) * i / 160; return { x, y: curveValue(slug, parameters, x) }; });
    const points = sample(p), previous = baseline ? sample(baseline.parameters) : [];
    const range = bounds([...points, ...previous].map(point => point.y));
    const label = slug === 'signed-accumulation' ? 'Net displacement Δs(T) (m)' : slug === 'function' ? 'Function output f(x)' : 'Power value bᵉ';
    const title = slug === 'signed-accumulation' ? 'Displacement as elapsed time changes' : slug === 'function' ? 'Input and output on coordinate axes' : 'The power curve across exponents';
    const description = slug === 'signed-accumulation' ? 'The slope of this displacement curve is velocity. Returning to zero displacement can still mean positive distance traveled.' : slug === 'function' ? 'Each input has exactly one output in this affine family. The multiplier changes the slope; the offset changes the vertical intercept.' : 'For a positive base the curve is continuous across real exponents. Base 1 is constant, bases below 1 decrease, and negative exponents are reciprocal powers.';
    return Plot.render({ title, description, x: { ...control, value: p[control.key] }, y: { label, ...range }, series: [
      { id: slug + '-curve', label: label, quantity: slug === 'signed-accumulation' ? 'time output netDisplacement' : meta.axis + ' output', color: C.mint, points },
      ...(baseline ? [{ id: slug + '-baseline', label: 'Pinned relationship', quantity: 'output', color: C.violet, points: previous, dashed: true }] : [])
    ], current: [{ label: meta.primaryLabel, x: p[meta.axis], y: r.output, quantity: meta.axis + ' output' + (slug === 'signed-accumulation' ? ' netDisplacement' : ''), color: C.cyan, draggable: true }], notes: [meta.insight] }, options);
  }
  function limitGraph(p, r, options) {
    const left = p.a - 1.2, right = p.a + 1.2, center = p.mode === 'removable' ? 2 * p.a : p.a;
    const low = center - 1.6, high = center + 1.6, px = x => 90 + (x - left) / (right - left) * 600, py = y => 310 - (y - low) / (high - low) * 220;
    let body = group('mode', 'reference', text(30, 64, p.mode === 'removable' ? 'f(x) = x + a for x ≠ a; f(a) is undefined' : 'Left a − 1 · right a + 1 · f(a) = a', C.muted, options.compact ? 22 : 16));
    for (let i = 0; i <= 4; i++) {
      const xx = left + (right - left) * i / 4, yy = low + (high - low) * i / 4;
      body += line(px(xx),90,px(xx),310,C.grid) + line(90,py(yy),690,py(yy),C.grid) + text(px(xx),335,fmt(xx),C.muted,options.compact ? 21 : 15,'text-anchor="middle"') + text(78,py(yy)+5,fmt(yy),C.muted,options.compact ? 21 : 15,'text-anchor="end"');
    }
    const leftEnd = p.mode === 'removable' ? left + p.a : r.leftLimit, rightEnd = p.mode === 'removable' ? right + p.a : r.rightLimit;
    body += group('a leftLimit rightLimit output', 'reference', line(px(p.a),90,px(p.a),310,C.muted,'stroke-dasharray="4 4"') + `<path data-role="left-branch" d="${path([[px(left),py(leftEnd)],[px(p.a),py(r.leftLimit)]])}" fill="none" stroke="${C.cyan}" stroke-width="3"/><path data-role="right-branch" d="${path([[px(p.a),py(r.rightLimit)],[px(right),py(rightEnd)]])}" fill="none" stroke="${C.gold}" stroke-width="3"/>`);
    const marks = [{value:r.leftLimit,key:'leftLimit',color:C.cyan}, ...(p.mode === 'jump' ? [{value:r.rightLimit,key:'rightLimit',color:C.gold}] : [])];
    for (const mark of marks) body += group(mark.key + ' output', 'output', circle(px(p.a),py(mark.value),7,C.bg,`stroke="${mark.color}" stroke-width="3" data-role="open-point" data-x="${p.a}" data-y="${mark.value}"`));
    if (r.functionAtPoint !== null) body += group('functionAtPoint a', 'reference', circle(px(p.a),py(r.functionAtPoint),5,C.white,`data-role="defined-point" data-x="${p.a}" data-y="${r.functionAtPoint}"`));
    for (const [side,color] of [['left',C.cyan],['right',C.gold]]) {
      const xx=r[side+'X'], yy=r[side+'Value'];
      body += group(`h ${side}X ${side}Value`, 'intermediate', line(px(xx),310,px(xx),py(yy),color,'stroke-dasharray="3 5" stroke-opacity=".5"') + circle(px(xx),py(yy),6,color,`data-role="probe-point" data-side="${side}" data-x="${xx}" data-y="${yy}"`));
    }
    body += rail('h',p,'limit',options,374);
    return frame('limit',options,body,'A full coordinate view of the same probes. Hollow circles mark excluded endpoint values; a filled white point is the actual f(a), when defined. Matching one-sided limits make a two-sided limit even when f(a) is missing. A jump has no two-sided limit.');
  }
  function render(slug, input, options = {}) {
    const result = evaluate(slug, input);
    if (!has(slug)) return '';
    if (!result.valid) return invalidScene(slug, result, options);
    const p = result.parameters;
    if (options.view === 'graph') return graph(slug, p, result, options);
    if (slug === 'function') return functionGeometry(p, result, options);
    if (slug === 'exponentiation') return exponentGeometry(p, result, options);
    if (slug === 'limit') return limitGeometry(p, result, options);
    return accumulationGeometry(p, result, options);
  }
  return Object.freeze({ has, defaults, controls, specs, validateParams, evaluate, curveValue, render });
});
