/* Six bounded experiments. Native SVG and explicit arithmetic; no evaluated formulas. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasFrontier = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DEFINITIONS = {
    'integral-accumulation': { title: 'Integration and accumulation', expression: 'd(T) = ∫₀ᵀ kt dt = ½kT²', rendererId: 'integral-accumulation-visual-model', unit: 'm', axis: 'time', maximum: 6, primaryLabel: 'Accumulated distance', insight: 'Distance is the actual shaded area under the velocity graph.', controls: [
      { key: 'time', label: 'Elapsed time T', value: 4, min: 0, max: 6, step: .01, unit: 's' },
      { key: 'rate', label: 'Acceleration k', value: 2, min: .5, max: 4, step: .01, unit: 'm/s²' }
    ] },
    'quadratic-optimization': { title: 'Quadratic optimization', expression: 'A(w) = w(P/2 − w)', rendererId: 'quadratic-optimization-visual-model', unit: 'm²', axis: 'width', maximum: 9.5, primaryLabel: 'Enclosed area', insight: 'For a fixed perimeter, the square reaches the parabola’s maximum.', controls: [
      { key: 'width', label: 'Garden width w', value: 5, min: .5, max: 9.5, step: .01, unit: 'm' },
      { key: 'perimeter', label: 'Available fence P', value: 20, min: 20, max: 30, step: .01, unit: 'm' }
    ] },
    'complex-multiplication': { title: 'Complex multiplication', expression: '(2 + i)(a + bi) = (2a − b) + (a + 2b)i', rendererId: 'complex-multiplication-visual-model', unit: 'real units', axis: 'imag', maximum: 2, primaryLabel: 'Product’s real component', insight: 'Multiplying by a complex number rotates and scales the original arrow.', controls: [
      { key: 'real', label: 'Multiplier real component a', value: 1, min: -2, max: 2, step: .01, unit: '' },
      { key: 'imag', label: 'Multiplier imaginary component b', value: 1, min: -2, max: 2, step: .01, unit: '' }
    ] },
    'bayes-theorem': { title: 'Bayes’ theorem', expression: 'P(D|F) = ps / [ps + (1 − p)f]', rendererId: 'bayes-theorem-visual-model', unit: 'probability', axis: 'prior', maximum: .99, primaryLabel: 'Defect chance among flagged parts', insight: 'A flag’s meaning depends on both the detector and how common defects are.', controls: [
      { key: 'prior', label: 'Defect share p', value: .1, min: .01, max: .99, step: .001, unit: 'fraction' },
      { key: 'sensitivity', label: 'Defect detection chance s', value: .9, min: .05, max: 1, step: .001, unit: 'fraction' },
      { key: 'falsePositive', label: 'Good part false flag chance f', value: .1, min: .01, max: 1, step: .001, unit: 'fraction' }
    ] },
    'graph-theory': { title: 'Graph theory and shortest paths', expression: 'd(A,D) = min(10, 8, 5 + b)', rendererId: 'graph-theory-visual-model', unit: 'min', axis: 'bridge', maximum: 12, primaryLabel: 'Shortest route time', insight: 'Changing one edge can switch which complete route is shortest.', controls: [
      { key: 'bridge', label: 'Bridge travel time b', value: 4, min: 1, max: 12, step: .01, unit: 'min' }
    ] },
    resonance: { title: 'Resonance', expression: 'R(ω) = 1 / √[(1 − ω²)² + (2ζω)²]', rendererId: 'resonance-visual-model', unit: 'relative amplitude', axis: 'frequency', maximum: 2, primaryLabel: 'Steady state response amplitude', insight: 'A drive near the natural frequency gives a larger response; damping limits it.', controls: [
      { key: 'frequency', label: 'Drive frequency ratio ω', value: 1, min: .2, max: 2, step: .005, unit: 'ratio' },
      { key: 'damping', label: 'Damping ratio ζ', value: .2, min: .1, max: .5, step: .005, unit: 'ratio' }
    ] }
  };
  const C = { bg: '#101e2b', grid: '#294352', white: '#f0f7f6', muted: '#98afbd', mint: '#c6f276', cyan: '#77d8e8', gold: '#f5cf78', violet: '#b8a1ff', orange: '#ffb08a' };
  const finite = Number.isFinite;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const n = value => finite(value) ? Number(value.toFixed(5)) : 0;
  const fmt = value => finite(value) ? String(Number(value.toPrecision(5))).replace('-', '−') : 'undefined';
  const text = (x, y, value, color = C.muted, size = 12, extra = '') => `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" ${extra}/>`;
  const circle = (x, y, radius, color, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(radius)}" fill="${color}" ${extra}/>`;
  const mark = (part, body) => `<g data-story-part="${part}" class="story-cue">${body}</g>`;
  const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('');
  const zero = value => Math.abs(value) < 1e-14 ? 0 : value;
  function has(slug) { return Object.hasOwn(DEFINITIONS, slug); }
  function definition(slug) { if (!has(slug)) throw new RangeError('Unknown frontier model: ' + slug); return DEFINITIONS[slug]; }
  function defaults(slug) { return Object.fromEntries(definition(slug).controls.map(c => [c.key, c.value])); }
  function controls(slug) { return definition(slug).controls.map(({ value, ...control }) => ({ ...control })); }
  function specs(slug) { const { controls: ignored, ...metadata } = definition(slug); return { ...metadata }; }
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
      if (typeof value !== 'number' || !finite(value)) errors.push({ field: rule.key, message: 'Enter a finite number.' });
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
    if (slug === 'integral-accumulation') {
      const distance = .5 * p.rate * p.time * p.time;
      quantities = { output: distance, distance, triangleArea: distance, velocity: p.rate * p.time, rate: p.rate };
    } else if (slug === 'quadratic-optimization') {
      const otherSide = p.perimeter / 2 - p.width, optimumWidth = p.perimeter / 4, area = p.width * otherSide;
      quantities = { output: area, area, otherSide, optimumWidth, maxArea: optimumWidth * optimumWidth };
    } else if (slug === 'complex-multiplication') {
      const realPart = zero(2 * p.real - p.imag), imagPart = zero(p.real + 2 * p.imag);
      quantities = { output: realPart, realPart, imagPart, modulus: Math.hypot(realPart, imagPart), multiplierModulus: Math.hypot(p.real, p.imag) };
    } else if (slug === 'bayes-theorem') {
      const truePositive = p.prior * p.sensitivity, falseAlarm = (1 - p.prior) * p.falsePositive, positiveRate = truePositive + falseAlarm, posterior = truePositive / positiveRate;
      quantities = { output: posterior, posterior, truePositive, falseAlarm, positiveRate };
    } else if (slug === 'graph-theory') {
      const bridgeDistance = 5 + p.bridge, directDistance = 8, shortestDistance = Math.min(10, directDistance, bridgeDistance), tied = p.bridge === 3;
      quantities = { output: shortestDistance, shortestDistance, directDistance, bridgeDistance, route: p.bridge < 3 ? 'A → B → C → D' : 'A → C → D', tied, tieCount: tied ? 2 : 1 };
    } else {
      const detuning = 1 - p.frequency * p.frequency, dampingTerm = 2 * p.damping * p.frequency, denominator = Math.hypot(detuning, dampingTerm), amplitude = 1 / denominator;
      quantities = { output: amplitude, amplitude, detuning, dampingTerm, denominator, response: amplitude };
    }
    return { ...checked, ...quantities, status: 'valid', unit: definition(slug).unit };
  }
  function curveValue(slug, input, x) {
    if (!has(slug) || !finite(x)) return null;
    const checked = validateParams(slug, input), rule = definition(slug).controls.find(control => control.key === definition(slug).axis);
    if (!checked.valid || x < rule.min || x > rule.max) return null;
    return evaluate(slug, { ...checked.parameters, [rule.key]: x }).output;
  }
  function rail(slug, p) {
    const rule = definition(slug).controls.find(c => c.key === definition(slug).axis), position = 90 + (p[rule.key] - rule.min) / (rule.max - rule.min) * 590;
    return text(90, 359, `${rule.label} · ${fmt(p[rule.key])} ${rule.unit}`, C.white, 11) +
      `<g class="scene-handle" data-story-part="input" role="slider" tabindex="0" data-quantity="${rule.key}" data-drag-param="${rule.key}" data-drag-min="${rule.min}" data-drag-max="${rule.max}" data-drag-x0="90" data-drag-x1="680" data-drag-step="${rule.step}" aria-label="${esc(rule.label)}" aria-orientation="horizontal" aria-valuemin="${rule.min}" aria-valuemax="${rule.max}" aria-valuenow="${p[rule.key]}" aria-valuetext="${esc(fmt(p[rule.key]) + ' ' + rule.unit)}" style="cursor:ew-resize;touch-action:none"><rect x="70" y="365" width="630" height="44" fill="transparent"/>${line(90, 387, 680, 387, C.grid, 'stroke-width="3" stroke-linecap="round"')}${line(90, 387, position, 387, C.cyan, 'stroke-width="3" stroke-linecap="round"')}${circle(position, 387, 14, C.cyan, `fill-opacity=".16" stroke="${C.cyan}"`)}${circle(position, 387, 5, C.cyan)}</g>`;
  }
  function frame(id, title, body, caption, compact, shortCaption = caption) {
    return `<figure class="visualization-frame frontier-frame"${compact ? ' data-compact="true"' : ''}><svg class="visual-scene frontier-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(caption)}</desc><defs><linearGradient id="${id}-fill" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".12"/><stop offset="1" stop-color="${C.violet}" stop-opacity=".55"/></linearGradient><linearGradient id="${id}-gold" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.gold}" stop-opacity=".15"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".5"/></linearGradient><marker id="${id}-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L8 4L0 8Z" fill="context-stroke"/></marker></defs><rect width="760" height="420" rx="20" fill="${C.bg}"/><g font-family="Inter,system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(shortCaption)}</figcaption></figure>`;
  }
  function integral(r, id, pin) {
    const p = r.parameters, px = t => 80 + t * 55, py = v => 290 - v * 8;
    let body = text(35, 32, 'THE AREA IS THE JOURNEY.', C.mint, 12);
    for (let v = 0; v <= 24; v += 6) body += line(80, py(v), 410, py(v)) + text(66, py(v) + 4, v, C.muted, 10, 'text-anchor="end"');
    for (let t = 0; t <= 6; t++) body += line(px(t), 98, px(t), 290, C.grid, 'stroke-opacity=".45"') + text(px(t), 308, t, C.muted, 10, 'text-anchor="middle"');
    body += text(80, 79, 'velocity (m/s)', C.muted, 11) + text(410, 330, 'time (s)', C.muted, 11, 'text-anchor="end"');
    body += line(80, 290, 410, 290, C.muted) + line(80, 98, 80, 290, C.muted);
    if (pin) body += `<path data-role="baseline-area" d="${path([[px(0), py(0)], [px(pin.parameters.time), py(pin.velocity)], [px(pin.parameters.time), py(0)]])}Z" fill="none" stroke="${C.orange}" stroke-dasharray="5 4"/>`;
    body += `<path data-story-part="intermediate output" data-role="accumulated-area" data-quantity="output distance" data-area="${r.distance}" d="${path([[px(0), py(0)], [px(p.time), py(r.velocity)], [px(p.time), py(0)]])}Z" fill="url(#${id}-gold)" stroke="${C.gold}" stroke-width="1.5"/>`;
    body += mark('reference intermediate', line(px(0), py(0), px(6), py(6 * p.rate), C.violet, 'stroke-width="2" data-role="velocity-line" data-quantity="rate function:velocity"'));
    body += mark('input', line(px(p.time), 90, px(p.time), 290, C.cyan, 'stroke-width="2" stroke-dasharray="4 5" data-role="time-marker" data-quantity="time"'));
    body += mark('intermediate', circle(px(p.time), py(r.velocity), 6, C.violet, `data-role="velocity-endpoint" data-quantity="velocity" data-value="${r.velocity}"`));
    body += text(475, 66, `constant acceleration ${fmt(p.rate)} m/s²`, C.muted, 11, 'data-story-part="reference"') + text(475, 96, `T = ${fmt(p.time)} s`, C.cyan, 22, 'data-story-part="input"') + text(475, 130, `v(T) = ${fmt(r.velocity)} m/s`, C.violet, 18, 'data-story-part="intermediate"') + text(475, 174, 'TRIANGLE · ½ × BASE × HEIGHT', C.muted, 10) + text(475, 201, `½ × ${fmt(p.time)} × ${fmt(r.velocity)}`, C.violet, 21, 'data-story-part="intermediate"') + text(475, 260, `${fmt(r.output)} m`, C.gold, 31, 'data-story-part="output"') + text(475, 286, 'distance from the start', C.gold, 12);
    const trackStart = 475, trackEnd = 691, cartX = trackStart + r.distance * 3;
    body += mark('reference', line(trackStart, 315, trackEnd, 315, C.grid, 'stroke-width="3" data-role="cart-track"') + line(trackStart, 310, trackStart, 321, C.muted) + line(trackEnd, 310, trackEnd, 321, C.muted));
    if (pin) body += `<rect data-role="baseline-cart" x="${n(trackStart + pin.distance * 3 - 8)}" y="301" width="16" height="10" rx="2" fill="none" stroke="${C.orange}" stroke-dasharray="3 2"/>`;
    body += mark('output', `<g data-role="distance-cart" data-quantity="output distance" data-distance="${r.distance}" transform="translate(${n(cartX)} 0)"><rect x="-8" y="301" width="16" height="10" rx="2" fill="${C.gold}"/>${circle(-5, 313, 3, C.gold)}${circle(5, 313, 3, C.gold)}</g>` + line(trackStart, 331, cartX, 331, C.gold, `stroke-width="2" data-role="distance-bracket" data-quantity="output distance" data-value="${r.distance}"`) + line(trackStart, 327, trackStart, 335, C.gold) + line(cartX, 327, cartX, 335, C.gold));
    body += text(trackStart, 346, '0 m', C.muted, 9) + text(trackEnd, 346, '72 m · fixed track scale', C.muted, 9, 'text-anchor="end"');
    return { body, shortCaption: 'The gold area gives ½kT² metres and moves the cart on a fixed track; this model starts from rest at constant acceleration.', caption: 'A cart starts from rest and accelerates at k metres per second squared. Its velocity is v(t)=kt. The gold triangle is the actual area under this velocity line from 0 to T, so distance is ½×T×v(T)=½kT² metres. Both zero-based axes keep fixed scales; velocity and time have different units. The cart and gold distance bracket share a separate fixed 0–72 metre track at 3 pixels per metre. No hidden clock moves the cart.' };
  }
  function optimization(r, id, pin) {
    const p = r.parameters, scale = 12, bottom = 300, x0 = 80, px = w => 430 + w * 17, py = area => 300 - area * 3.4;
    let body = text(35, 32, 'ONE FENCE. MANY POSSIBLE GARDENS.', C.mint, 12);
    body += `<rect data-story-part="input intermediate output" data-role="garden-area" data-quantity="area output perimeter" data-area="${r.area}" x="${x0}" y="${n(bottom - r.otherSide * scale)}" width="${n(p.width * scale)}" height="${n(r.otherSide * scale)}" fill="url(#${id}-gold)" stroke="${C.gold}" stroke-width="2"/>`;
    body += mark('input', line(x0, bottom + 12, x0 + p.width * scale, bottom + 12, C.cyan, 'stroke-width="3" data-role="garden-width" data-quantity="width"')) + text(x0 + p.width * scale / 2, 332, `${fmt(p.width)} m`, C.cyan, 12, 'text-anchor="middle" data-story-part="input"');
    body += mark('intermediate', line(x0 - 12, bottom, x0 - 12, bottom - r.otherSide * scale, C.violet, 'stroke-width="3" data-role="garden-other-side" data-quantity="otherSide"')) + text(x0 + p.width * scale + 15, bottom - r.otherSide * scale / 2, `${fmt(r.otherSide)} m`, C.violet, 12, 'data-story-part="intermediate"');
    body += text(80, 75, `fence P = ${fmt(p.perimeter)} m`, C.white, 13, 'data-story-part="reference"') + text(80, 101, `area = ${fmt(r.area)} m²`, C.gold, 17, 'data-story-part="output"');
    for (let area = 0; area <= 60; area += 20) body += line(430, py(area), 685, py(area)) + text(418, py(area) + 4, area, C.muted, 9, 'text-anchor="end"');
    for (const w of [0, 5, 10, 15]) body += text(px(w), 318, w, C.muted, 9, 'text-anchor="middle"');
    body += text(430, 79, 'area (m²)', C.muted, 11) + text(685, 335, 'width (m)', C.muted, 11, 'text-anchor="end"');
    const points = Array.from({ length: 121 }, (_, i) => { const w = i / 120 * p.perimeter / 2; return [px(w), py(w * (p.perimeter / 2 - w))]; });
    body += `<path data-story-part="reference" data-role="area-parabola" data-quantity="function:area perimeter" d="${path(points)}" fill="none" stroke="${C.violet}" stroke-width="2"/>`;
    body += mark('reference intermediate', circle(px(r.optimumWidth), py(r.maxArea), 5, C.mint, 'data-role="optimal-area" data-quantity="optimumWidth maxArea"') + text(px(r.optimumWidth), py(r.maxArea) - 12, `max ${fmt(r.maxArea)} m²`, C.mint, 11, 'text-anchor="middle"'));
    if (pin) body += circle(px(pin.parameters.width), py(pin.area), 6, 'none', `data-role="baseline-area-point" stroke="${C.orange}" stroke-dasharray="3 2"`);
    body += mark('input', line(px(p.width), py(0), px(p.width), py(r.area), C.cyan, 'stroke-dasharray="3 5"')) + mark('output', circle(px(p.width), py(r.area), 6, C.gold, `data-role="current-area" data-quantity="width area output" data-value="${r.area}"`));
    return { body, shortCaption: 'The rectangle’s area w(P/2−w) follows the gold dot toward the mint maximum; one fixed fence length constrains both sides.', caption: 'A rectangular garden uses perimeter P=2w+2h, so its other side is h=P/2−w. The rectangle uses the same fixed metre scale horizontally and vertically; its drawn area is proportional to w(P/2−w). On the fixed area graph, the gold dot follows this parabola. The mint vertex is the maximum at w=h=P/4. Width controls stay below P/2, so the garden always has positive sides.' };
  }
  function complex(r, id, pin) {
    const p = r.parameters, cx = 235, cy = 202, s = 17, px = x => cx + x * s, py = y => cy - y * s;
    let body = text(35, 32, 'MULTIPLY AN ARROW. TURN AND SCALE IT.', C.mint, 12);
    for (let tick = -6; tick <= 6; tick += 2) body += line(px(tick), py(7), px(tick), py(-7), C.grid, 'stroke-opacity=".55"') + line(px(-7), py(tick), px(7), py(tick), C.grid, 'stroke-opacity=".55"') + text(px(tick), py(-7) + 15, tick, C.muted, 9, 'text-anchor="middle"') + text(px(-7) - 10, py(tick) + 3, tick, C.muted, 9, 'text-anchor="end"');
    body += line(px(-7), cy, px(7), cy, C.muted) + line(cx, py(-7), cx, py(7), C.muted) + text(px(7) + 7, cy + 4, 'real', C.muted, 10) + text(cx + 7, py(7) - 8, 'imaginary', C.muted, 10);
    body += circle(cx, cy, Math.sqrt(5) * s, 'none', `data-story-part="reference" stroke="${C.muted}" stroke-dasharray="3 5" stroke-opacity=".4"`);
    body += mark('reference', line(cx, cy, px(2), py(1), C.white, `data-role="original-complex" data-quantity="function:z" stroke-width="2" marker-end="url(#${id}-arrow)"`));
    body += mark('input', line(cx, cy, px(p.real), py(p.imag), C.cyan, `data-role="complex-multiplier" data-quantity="real imag multiplierModulus" stroke-width="3" marker-end="url(#${id}-arrow)"`));
    body += line(cx, cy, px(p.real), cy, C.cyan, 'data-quantity="real" data-role="multiplier-real-component" stroke-width="1.5" stroke-dasharray="3 4"') + line(px(p.real), cy, px(p.real), py(p.imag), C.cyan, 'data-quantity="imag" data-role="multiplier-imaginary-component" stroke-width="1.5" stroke-dasharray="3 4"');
    if (pin) body += line(cx, cy, px(pin.realPart), py(pin.imagPart), C.orange, 'data-role="baseline-product" stroke-width="2" stroke-dasharray="5 4"');
    body += mark('intermediate', line(px(r.realPart), cy, px(r.realPart), py(r.imagPart), C.violet, 'data-quantity="imagPart" stroke-dasharray="3 5"') + line(cx, py(r.imagPart), px(r.realPart), py(r.imagPart), C.violet, 'data-quantity="realPart output" stroke-dasharray="3 5"'));
    body += mark('output', line(cx, cy, px(r.realPart), py(r.imagPart), C.gold, `data-role="complex-product" data-quantity="realPart imagPart output modulus" stroke-width="3" marker-end="url(#${id}-arrow)"`) + circle(px(r.realPart), py(r.imagPart), 5, C.gold, `data-role="complex-product-endpoint" data-quantity="realPart imagPart output" data-real="${r.realPart}" data-imag="${r.imagPart}"`));
    body += text(450, 88, 'FIXED ARROW z = 2 + i', C.white, 12, 'data-story-part="reference"') + text(450, 122, `w = ${fmt(p.real)} + (${fmt(p.imag)})i`, C.cyan, 20, 'data-story-part="input"') + text(450, 173, `real: 2a − b = ${fmt(r.realPart)}`, C.violet, 16, 'data-story-part="intermediate"') + text(450, 204, `imag: a + 2b = ${fmt(r.imagPart)}`, C.violet, 16, 'data-story-part="intermediate"') + text(450, 254, `zw = ${fmt(r.realPart)} + (${fmt(r.imagPart)})i`, C.gold, 22, 'data-story-part="output"') + text(450, 287, `length |zw| = ${fmt(r.modulus)}`, C.gold, 15, 'data-story-part="output"') + text(450, 322, `scale factor |w| = ${fmt(r.multiplierModulus)}`, C.muted, 12, 'data-story-part="intermediate"');
    return { body, shortCaption: 'The gold arrow is (2+i)(a+bi) on equal axes; a zero multiplier collapses it to the origin.', caption: 'The white arrow is z=2+i; cyan is the multiplier w=a+bi. Their gold product has components (2a−b, a+2b) on a complex plane with equal fixed scales. For nonzero w, multiplication rotates z by the argument of w and scales its length by |w|. Negative components point left or down. At w=0 the product collapses to the origin and the multiplier’s angle is undefined; no rotation angle is claimed there.' };
  }
  function bayes(r, id, pin) {
    const p = r.parameters, x = 80, width = 610, total = 1000, trueWidth = width * r.truePositive, falseWidth = width * r.falseAlarm;
    let body = text(35, 32, 'A FLAG IS A CLUE. COUNT ITS SOURCES.', C.mint, 12) + text(80, 70, 'Theoretical batch of 1,000 parts · one shared count scale', C.muted, 12);
    body += `<rect x="${x}" y="91" width="${width}" height="40" fill="${C.grid}"/>`;
    body += `<rect data-story-part="input reference" data-role="defective-parts" data-quantity="prior" data-fraction="${p.prior}" x="${x}" y="91" width="${n(width * p.prior)}" height="40" fill="${C.cyan}"/>`;
    body += text(80, 153, `${fmt(total * p.prior)} defective`, C.cyan, 12, 'data-story-part="input"') + text(690, 153, `${fmt(total * (1 - p.prior))} good`, C.muted, 12, 'text-anchor="end" data-story-part="reference"');
    body += line(80, 174, 690, 174, C.grid) + text(80, 196, 'FLAGGED PARTS', C.white, 11) + text(380, 196, `s = ${fmt(p.sensitivity)}`, C.violet, 11, 'data-quantity="sensitivity"') + text(690, 196, `f = ${fmt(p.falsePositive)}`, C.orange, 11, 'text-anchor="end" data-quantity="falsePositive"');
    body += `<rect x="${x}" y="209" width="${width}" height="44" fill="${C.grid}" fill-opacity=".4"/>`;
    body += `<rect data-story-part="intermediate" data-role="true-positive-bar" data-quantity="truePositive" data-probability="${r.truePositive}" x="${x}" y="209" width="${n(trueWidth)}" height="44" fill="${C.violet}"/><rect data-story-part="intermediate" data-role="false-alarm-bar" data-quantity="falseAlarm" data-probability="${r.falseAlarm}" x="${n(x + trueWidth)}" y="209" width="${n(falseWidth)}" height="44" fill="${C.orange}"/>`;
    body += text(80, 277, `${fmt(total * r.truePositive)} true flags`, C.violet, 12, 'data-story-part="intermediate"') + text(310, 277, `${fmt(total * r.falseAlarm)} false flags`, C.orange, 12, 'data-story-part="intermediate"') + text(690, 277, `${fmt(total * r.positiveRate)} flags total`, C.muted, 12, 'text-anchor="end" data-quantity="positiveRate" data-story-part="intermediate"');
    body += text(80, 326, `Among flags: ${fmt(total * r.truePositive)} ÷ ${fmt(total * r.positiveRate)}`, C.violet, 15, 'data-story-part="intermediate"') + text(690, 327, `${fmt(100 * r.posterior)}% defective`, C.gold, 25, `text-anchor="end" data-story-part="output" data-role="posterior-value" data-quantity="posterior output" data-value="${r.posterior}"`);
    body += `<rect data-story-part="output" data-role="posterior-proportion" data-quantity="posterior output" data-value="${r.posterior}" x="${x}" y="286" width="${n(width * r.posterior)}" height="6" rx="3" fill="${C.gold}"/>`;
    if (pin) body += line(x + width * pin.posterior, 282, x + width * pin.posterior, 297, C.orange, 'data-role="baseline-posterior" stroke-dasharray="2 2"');
    return { body, shortCaption: 'The gold result divides true flags by all flags; the bars show theoretical expected counts on one fixed batch scale.', caption: 'A quality-control detector flags a defective part with probability s and a good part with false-flag probability f. In a normalized batch of 1,000, true flags are 1000ps and false flags are 1000(1−p)f; these can be fractional expected counts. The two flagged bars share the full batch’s fixed count scale. Dividing true flags by all flags gives the posterior P(defect|flag), displayed as a percentage. The thin gold strip uses a separate 0–100% probability scale. These are theoretical proportions, not a random simulation.' };
  }
  function graph(r, id, pin) {
    const p = r.parameters, nodes = { A: [100, 200], B: [290, 96], C: [290, 304], D: [480, 200] };
    const edge = (a, b, color, extra = '') => line(...nodes[a], ...nodes[b], color, extra);
    const viaBridge = p.bridge < 3, tie = r.tied;
    let body = text(35, 32, 'CHANGE ONE BRIDGE. RECONSIDER THE ROUTE.', C.mint, 12);
    for (const [a, b] of [['A', 'B'], ['B', 'D'], ['A', 'C'], ['C', 'D'], ['B', 'C']]) body += edge(a, b, C.grid, 'stroke-width="8" stroke-linecap="round"');
    body += mark('reference', edge('A', 'B', C.muted, 'stroke-width="2"') + edge('B', 'D', C.muted, 'stroke-width="2"') + edge('A', 'C', C.muted, 'stroke-width="2"') + edge('C', 'D', C.muted, 'stroke-width="2"'));
    body += mark('input intermediate', edge('B', 'C', C.cyan, `stroke-width="4" data-role="variable-bridge" data-quantity="bridge" data-value="${p.bridge}"`));
    body += mark('intermediate', edge('A', 'B', C.violet, 'stroke-width="2" stroke-dasharray="4 5"') + edge('B', 'D', C.violet, 'stroke-width="2" stroke-dasharray="4 5"'));
    const route = viaBridge ? ['A', 'B', 'C', 'D'] : ['A', 'C', 'D'];
    if (pin) body += `<path data-story-part="reference" data-role="baseline-route" d="${path((pin.parameters.bridge < 3 ? ['A', 'B', 'C', 'D'] : ['A', 'C', 'D']).map(key => nodes[key]))}" fill="none" stroke="${C.orange}" stroke-width="9" stroke-dasharray="5 5" stroke-opacity=".65"/>`;
    body += `<path data-story-part="output" data-role="shortest-route" data-quantity="route output" data-route="${esc(r.route)}" d="${path(route.map(key => nodes[key]))}" fill="none" stroke="${C.gold}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
    body += `<path data-story-part="output" data-role="tied-route" data-quantity="route output tied" d="${path(['A', 'B', 'C', 'D'].map(key => nodes[key]))}" fill="none" stroke="${C.gold}" stroke-width="3" stroke-dasharray="5 5" opacity="${tie ? 1 : 0}"/>`;
    for (const [key, [x, y]] of Object.entries(nodes)) body += circle(x, y, 17, C.bg, `stroke="${C.white}" stroke-width="2"`) + text(x, y + 5, key, C.white, 14, 'text-anchor="middle"');
    body += text(185, 129, '3', C.white, 13) + text(390, 129, '7', C.white, 13) + text(185, 287, '6', C.white, 13) + text(390, 287, '2', C.white, 13) + text(307, 205, `b = ${fmt(p.bridge)}`, C.cyan, 15, 'data-story-part="input"');
    body += text(535, 94, 'CANDIDATE TIMES', C.muted, 10) + text(535, 124, 'A → B → D: 10 min', C.violet, 12, 'data-story-part="reference"') + text(535, 157, 'A → C → D: 8 min', C.violet, 12, 'data-story-part="intermediate"') + text(535, 190, `A → B → C → D: ${fmt(r.bridgeDistance)}`, C.cyan, 12, 'data-quantity="bridgeDistance" data-story-part="intermediate"') + text(535, 242, `${fmt(r.output)} min`, C.gold, 27, `data-story-part="output" data-role="shortest-distance" data-quantity="output" data-value="${r.output}"`) + text(535, 272, tie ? 'Two equal shortest routes' : 'Gold is the shortest route', C.gold, 11, 'data-story-part="output"') + text(535, 302, tie ? '8 = 5 + 3' : viaBridge ? 'A → B → C → D' : 'A → C → D', C.gold, 12, 'data-story-part="output"');
    if (pin) body += text(80, 332, `Pinned best time: ${fmt(pin.output)} min`, C.orange, 11);
    return { body, shortCaption: 'Gold follows the least total travel time, showing both routes at a tie; edge labels supply minutes and line lengths indicate connections.', caption: 'These undirected edges have positive travel times in minutes; line lengths show connectivity, not time. The relevant routes cost 10, 8, and 5+b minutes. The remaining simple route A→C→B→D costs 13+b and cannot win. Gold follows the minimum. When b=3, two routes tie at 8 minutes and both are shown. The best distance varies continuously, but the chosen route switches discretely at the tie; a changing topology is not a smooth physical motion.' };
  }
  function resonance(r, id, pin) {
    const p = r.parameters, amplitude = (w, d) => 1 / Math.hypot(1 - w * w, 2 * d * w), px = w => 70 + (w - .2) / 1.8 * 390, py = a => 296 - a * 37;
    let body = text(35, 32, 'FIND THE FREQUENCY THAT BUILDS THE RESPONSE.', C.mint, 12);
    for (const a of [0, 1, 2, 3, 4, 5]) body += line(70, py(a), 460, py(a)) + text(57, py(a) + 4, a, C.muted, 10, 'text-anchor="end"');
    for (const w of [.2, .5, 1, 1.5, 2]) body += text(px(w), 317, w, C.muted, 10, 'text-anchor="middle"');
    body += text(70, 80, 'relative amplitude', C.muted, 11) + text(460, 337, 'drive / natural frequency', C.muted, 11, 'text-anchor="end"');
    const samples = Array.from({ length: 181 }, (_, i) => .2 + 1.8 * i / 180);
    body += line(px(1), 93, px(1), 296, C.muted, 'stroke-dasharray="3 5" data-story-part="reference"') + text(px(1), 66, 'natural ratio 1', C.muted, 10, 'text-anchor="middle"');
    if (pin) body += `<path data-role="baseline-response" d="${path(samples.map(w => [px(w), py(amplitude(w, pin.parameters.damping))]))}" fill="none" stroke="${C.orange}" stroke-dasharray="5 4"/>` + circle(px(pin.parameters.frequency), py(pin.output), 7, 'none', `data-role="baseline-response-endpoint" stroke="${C.orange}" stroke-width="2"`);
    body += `<path data-story-part="reference intermediate" data-role="frequency-response" data-quantity="damping function:response" d="${path(samples.map(w => [px(w), py(amplitude(w, p.damping))]))}" fill="none" stroke="${C.violet}" stroke-width="2.5"/>`;
    body += mark('input', line(px(p.frequency), py(0), px(p.frequency), py(r.output), C.cyan, 'data-quantity="frequency" stroke-width="2" stroke-dasharray="4 5"')) + mark('output', circle(px(p.frequency), py(r.output), 6, C.gold, `data-role="response-endpoint" data-quantity="frequency output" data-value="${r.output}"`));
    const center = 622, envelope = r.output * 14, springX = center + envelope;
    body += text(622, 86, 'AMPLITUDE ENVELOPE', C.muted, 10, 'text-anchor="middle"') + line(center, 110, center, 222, C.muted, 'stroke-dasharray="3 4"');
    body += `<rect data-story-part="output" data-role="amplitude-envelope" data-quantity="output" data-amplitude="${r.output}" x="${n(center - envelope)}" y="130" width="${n(2 * envelope)}" height="72" rx="8" fill="url(#${id}-gold)" stroke="${C.gold}" stroke-dasharray="4 4"/>`;
    const spring = Array.from({ length: 13 }, (_, i) => [510 + (springX - 510 - 18) * i / 12, i === 0 || i === 12 ? 166 : 166 + (i % 2 ? -9 : 9)]);
    body += mark('reference', line(510, 142, 510, 190, C.white, 'stroke-width="4"')) + mark('intermediate', `<path data-role="spring" d="${path(spring)}" fill="none" stroke="${C.violet}" stroke-width="2"/>`) + `<rect data-story-part="output" data-role="mass-at-envelope" data-quantity="output" x="${n(springX - 18)}" y="149" width="36" height="34" rx="5" fill="${C.gold}"/>`;
    body += text(622, 249, `${fmt(r.output)}×`, C.gold, 30, 'text-anchor="middle" data-story-part="output"') + text(622, 277, `ω = ${fmt(p.frequency)} · ζ = ${fmt(p.damping)}`, C.cyan, 13, 'text-anchor="middle" data-story-part="input"') + text(622, 310, `denominator ${fmt(r.denominator)}`, C.violet, 12, 'text-anchor="middle" data-quantity="denominator" data-story-part="intermediate"') + text(622, 332, 'Static limit positions; no hidden clock', C.muted, 10, 'text-anchor="middle"');
    return { body, shortCaption: 'The gold marker and envelope show response amplitude at the selected frequency; the mass marks a limit position in this static model.', caption: 'This normalized linear driven oscillator has natural angular frequency 1. Its steady state displacement amplitude is R=1/√[(1−ω²)²+(2ζω)²]. The fixed response graph uses the current damping ζ and a gold marker at drive ratio ω. The spring and mass illustrate the positive amplitude limit inside an envelope extending from −R to +R; this is not an instantaneous oscillation or a time simulation. Damping stays positive, so resonance remains finite. The response peak may be slightly below ratio 1.' };
  }
  const RENDERERS = { 'integral-accumulation': integral, 'quadratic-optimization': optimization, 'complex-multiplication': complex, 'bayes-theorem': bayes, 'graph-theory': graph, resonance };
  function render(slug, input, options = {}) {
    const id = 'frontier-' + String(options.id || 'stage').replace(/[^A-Za-z0-9_-]/g, '-'), result = evaluate(slug, input);
    if (!result.valid) return frame(id, 'The input is outside this model', text(380, 174, '∅', C.orange, 44, 'text-anchor="middle"') + text(380, 230, 'Check the variable values', C.white, 18, 'text-anchor="middle"'), result.errors.map(error => error.message).join(' '), options.compact);
    const candidate = options.baseline ? evaluate(slug, options.baseline) : null, pin = candidate?.valid ? candidate : null;
    const scene = RENDERERS[slug](result, id, pin, options);
    const baselineCaption = pin ? ` Pinned comparison: ${definition(slug).primaryLabel.toLowerCase()} ${fmt(pin.output)} ${pin.unit}.` : '';
    return frame(id, definition(slug).title, scene.body + rail(slug, result.parameters), scene.caption + baselineCaption, options.compact, (scene.shortCaption || scene.caption) + baselineCaption);
  }
  return Object.freeze({ has, defaults, controls, specs, validateParams, evaluate, curveValue, render });
});
