/* Small, allowlisted everyday models and renderer-independent SVG scenes. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasEveryday = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DEFINITIONS = {
    'ratio-scale': {
      title: 'Scale a recipe', expression: 'amount × servings ÷ baseServings', rendererId: 'ratio-scale-proportion', unit: 'g', axis: 'servings', maximum: 12,
      controls: [
        { key: 'servings', label: 'Target servings', value: 6, min: 1, max: 12, step: .05, unit: 'servings' },
        { key: 'amount', label: 'Original ingredient', value: 300, min: 0, max: 1000, step: 1, unit: 'g' },
        { key: 'baseServings', label: 'Original servings', value: 4, min: 1, max: 12, step: .05, unit: 'servings' }
      ]
    },
    'linear-model': {
      title: 'Fill a water tank', expression: 'initial + rate × time', rendererId: 'linear-model-tank', unit: 'L', axis: 'time', maximum: 12,
      controls: [
        { key: 'initial', label: 'Starting water', value: 20, min: 0, max: 100, step: .1, unit: 'L' },
        { key: 'rate', label: 'Flow rate', value: 4, min: 0, max: 20, step: .05, unit: 'L/min' },
        { key: 'time', label: 'Elapsed time', value: 5, min: 0, max: 12, step: .05, unit: 'min' }
      ]
    },
    'exponential-change': {
      title: 'Resize a photograph', expression: 'initial × factor^time', rendererId: 'exponential-change-resize', unit: 'px', axis: 'time', maximum: 8,
      controls: [
        { key: 'initial', label: 'Original width', value: 1200, min: 1, max: 2000, step: 1, unit: 'px' },
        { key: 'factor', label: 'Scale each pass', value: .8, min: .25, max: 2, step: .01, unit: '×' },
        { key: 'time', label: 'Resize passes', value: 3, min: 0, max: 8, step: .05, unit: 'passes' }
      ]
    }
  };
  const C = Object.freeze({ bg: '#101e2b', grid: '#294352', white: '#f0f7f6', muted: '#98afbd', mint: '#c6f276', cyan: '#77d8e8', gold:'#f5cf78', orange: '#ffb08a', violet: '#b8a1ff' });
  const finite = Number.isFinite;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const num = value => finite(value) ? Number(value.toFixed(4)) : 0;
  const fmt = value => finite(value) ? (Math.abs(value) >= 100000 ? value.toExponential(2).replace('e+', 'e') : String(Number(value.toPrecision(5)))).replace('-', '−') : 'undefined';
  const text = (x, y, value, color = C.muted, size = 12, anchor = 'start', extra = '') => `<text x="${num(x)}" y="${num(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}" ${extra}>${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${num(x1)}" y1="${num(y1)}" x2="${num(x2)}" y2="${num(y2)}" stroke="${color}" ${extra}/>`;
  const mark = (part, body) => `<g data-story-part="${part}" class="story-cue">${body}</g>`;
  const verticalBracket = (x,y,bottom,label,color,part) => mark(part,line(x,y,x,bottom,color,`stroke-width="2" data-role="story-${part}-measure"`)+line(x-5,y,x+5,y,color,'stroke-width="2"')+line(x-5,bottom,x+5,bottom,color,'stroke-width="2"')+text(x+10,(y+bottom)/2+4,label,color,10));
  const widthBracket = (x,y,right,label,color,part) => mark(part,line(x,y,right,y,color,`stroke-width="2" data-role="story-${part}-measure"`)+line(x,y-5,x,y+5,color,'stroke-width="2"')+line(right,y-5,right,y+5,color,'stroke-width="2"')+text((x+right)/2,y+17,label,color,11,'middle'));

  function has(slug) { return Object.hasOwn(DEFINITIONS, slug); }
  function definition(slug) {
    if (!has(slug)) throw new RangeError('Unknown everyday model: ' + slug);
    return DEFINITIONS[slug];
  }
  function controls(slug) { return definition(slug).controls.map(({ value, ...control }) => ({ ...control })); }
  function specs(slug) {
    const { title, expression, rendererId, unit, axis, maximum } = definition(slug);
    return { title, expression, rendererId, unit, axis, maximum };
  }
  function defaults(slug) { return Object.fromEntries(definition(slug).controls.map(control => [control.key, control.value])); }
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
  function value(slug, p, x) {
    if (slug === 'ratio-scale') return p.amount * x / p.baseServings;
    if (slug === 'linear-model') return p.initial + p.rate * x;
    return p.initial * Math.pow(p.factor, x);
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters, metadata = definition(slug), output = value(slug, p, p[metadata.axis]);
    if (!finite(output)) return { ...checked, valid: false, status: 'numerical_failure', output: null, message: 'The result exceeds this floating-point model’s range.' };
    const extra = slug === 'ratio-scale' ? { factor: p.servings / p.baseServings, perServing: p.amount / p.baseServings }
      : slug === 'linear-model' ? { increment: p.rate * p.time }
        : { change: output - p.initial, height: output * 2 / 3 };
    return { ...checked, ...extra, status: 'valid', output, unit: metadata.unit };
  }
  function curveValue(slug, input, x) {
    if (!finite(x) || x < 0) return null;
    const checked = validateParams(slug, input);
    if (!checked.valid) return null;
    const y = value(slug, checked.parameters, x);
    return finite(y) ? y : null;
  }

  function rail(slug, p) {
    const { axis } = definition(slug), rule = controls(slug).find(control => control.key === axis);
    const position = 90 + (p[axis] - rule.min) / (rule.max - rule.min) * 590;
    return text(90, 350, `${rule.label.toUpperCase()} · ${fmt(p[axis])} ${rule.unit}`, C.white, 11) +
      `<g class="scene-handle" data-story-part="input" role="slider" tabindex="0" data-quantity="${axis}" data-drag-param="${axis}" data-drag-min="${rule.min}" data-drag-max="${rule.max}" data-drag-x0="90" data-drag-x1="680" data-drag-step="${rule.step}" aria-label="${esc(rule.label)}" aria-orientation="horizontal" aria-valuemin="${rule.min}" aria-valuemax="${rule.max}" aria-valuenow="${p[axis]}" aria-valuetext="${esc(fmt(p[axis]) + ' ' + rule.unit)}" style="cursor:ew-resize;touch-action:none"><rect x="70" y="356" width="630" height="40" fill="transparent"/>${line(90, 376, 680, 376, C.grid, 'stroke-width="3" stroke-linecap="round"')}${line(90, 376, position, 376, C.cyan, 'stroke-width="3" stroke-linecap="round"')}<circle cx="${num(position)}" cy="376" r="14" fill="${C.cyan}" fill-opacity=".16" stroke="${C.cyan}"/><circle cx="${num(position)}" cy="376" r="5" fill="${C.cyan}"/></g>`;
  }
  function frame(id, title, body, caption, compact) {
    return `<figure class="visualization-frame everyday-frame"${compact ? ' data-compact="true"' : ''}><svg class="visual-scene everyday-scene" viewBox="0 0 760 410" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(caption)}</desc><defs><linearGradient id="${id}-mint" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".25"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".8"/></linearGradient><linearGradient id="${id}-water" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#3a83a3" stop-opacity=".5"/><stop offset="1" stop-color="${C.cyan}" stop-opacity=".85"/></linearGradient><linearGradient id="${id}-sky" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${C.violet}" stop-opacity=".8"/><stop offset="1" stop-color="${C.cyan}" stop-opacity=".45"/></linearGradient></defs><rect width="760" height="410" rx="20" fill="${C.bg}"/><g font-family="Inter,system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function recipe(result, id, pin, reference, linked) {
    const p = result.parameters;
    const maximum = Math.max(900, p.amount, result.output, pin?.output || 0, reference?.output || 0);
    const height = mass => mass / maximum * 180;
    let body = text(35, 33, 'SAME RECIPE. MORE PLATES.', C.mint, 12) + text(725, 33, 'FILL AREA = INGREDIENT MASS', C.muted, 10, 'end');
    const columns = [{ x: 120, mass: p.amount, label: `${fmt(p.baseServings)} original servings`, color: C.cyan }, { x: 440, mass: result.output, label: `${fmt(p.servings)} target servings`, color: C.mint }];
    columns.forEach(({ x, mass, label, color }, index) => {
      body += text(x + 90, 71, label, linked&&index?C.cyan:C.white, 15, 'middle',`data-quantity="${index ? 'servings' : 'baseServings'}" data-story-part="${index?'input':'reference'}"`);
      body += `<rect data-story-part="${index?'input output':'reference'}" x="${x}" y="91" width="180" height="180" rx="6" fill="${C.white}" fill-opacity=".018" stroke="${color}" stroke-opacity=".35"/>`;
      body += `<rect data-story-part="${index?'input output':'reference'}" data-role="ingredient-mass" data-quantity="${index ? 'output' : 'amount'}" data-stage="${index ? 'output' : 'original'}" data-value="${mass}" x="${x}" y="${num(271 - height(mass))}" width="180" height="${num(height(mass))}" fill="url(#${id}-mint)"/>`;
      for (let tick = 1; tick < 4; tick++) body += line(x, 271 - tick * 45, x + 180, 271 - tick * 45, C.bg, 'stroke-opacity=".35"');
      body += text(x + 90, 301, `${fmt(mass)} g`, linked&&index?C.gold:color, 24, 'middle',`data-quantity="${index ? 'output' : 'amount'}" data-story-part="${index?'output':'reference'}"`);
      if(linked&&index)body+=mark('output',line(x,271-height(mass),x+180,271-height(mass),C.gold,'stroke-width="2"'))+verticalBracket(x+190,271-height(mass),271,'flour',C.gold,'output');
    });
    body += text(380, 167, `× ${fmt(result.factor)}`, linked?C.violet:C.white, 19, 'middle','data-quantity="factor" data-story-part="intermediate"') + text(380, 192, 'same ratio', C.muted, 11, 'middle');
    body += text(35, 323, `${fmt(result.perServing)} g per serving · both jars share a ${fmt(maximum)} g display scale`, C.muted, 11, 'start', 'data-quantity="perServing"');
    if (pin) body += line(440, 271 - height(pin.output), 620, 271 - height(pin.output), C.orange, 'stroke-dasharray="5 4" stroke-width="2" data-role="baseline-mass"');
    return { body, caption: `A recipe for ${fmt(p.baseServings)} servings uses ${fmt(p.amount)} g. For ${fmt(p.servings)} servings, multiply by ${fmt(result.factor)} to get ${fmt(result.output)} g. Jar fill areas share one mass scale.` };
  }
  function tank(result, id, pin, reference, linked) {
    const p = result.parameters, maximum = Math.max(100, result.output, pin?.output || 0, reference?.output || 0);
    const height = litres => litres / maximum * 190, top = 278 - height(result.output);
    let body = text(35, 33, 'TURN TIME INTO WATER.', C.mint, 12) + text(725, 33, 'CONSTANT FOOTPRINT · HEIGHT = VOLUME', C.muted, 10, 'end');
    body += `<path d="M220 65H395V95" stroke="${C.muted}" stroke-width="8" fill="none" stroke-linejoin="round"/>`;
    body += `<path data-story-part="intermediate" data-role="flow-stream" data-quantity="rate" d="M395 96V${num(top)}" stroke="${C.cyan}" stroke-opacity="${p.rate === 0 ? 0 : .65}" stroke-width="${num(2 + p.rate * .4)}" stroke-linecap="round"/>`;
    body += `<rect x="245" y="88" width="300" height="190" rx="5" fill="${C.white}" fill-opacity=".02" stroke="${C.cyan}" stroke-opacity=".55" stroke-width="2"/>`;
    body += `<rect data-story-part="output" data-role="water-volume" data-quantity="output" data-value="${result.output}" x="245" y="${num(top)}" width="300" height="${num(height(result.output))}" fill="url(#${id}-water)"/>`;
    body += line(245, top, 545, top, linked?C.gold:C.cyan, 'stroke-width="2" data-story-part="output" data-role="water-surface" data-quantity="output"') + line(245, 278 - height(p.initial), 545, 278 - height(p.initial), C.white, 'stroke-opacity=".45" stroke-dasharray="5 4" data-story-part="reference" data-role="initial-water" data-quantity="initial"');
    if(linked)body+=verticalBracket(220,top,278-height(p.initial),'added',C.violet,'intermediate')+verticalBracket(650,top,278,'total',C.gold,'output');
    for (let tick = 0; tick <= 4; tick++) {
      const y = 278 - tick * 47.5;
      body += line(550, y, 560, y) + text(570, y + 4, `${fmt(maximum * tick / 4)} L`, C.muted, 11);
    }
    if (pin) body += line(245, 278 - height(pin.output), 545, 278 - height(pin.output), C.orange, 'stroke-width="2" stroke-dasharray="5 4" data-role="baseline-water"');
    body += text(395, 313, `${fmt(p.initial)} L + ${fmt(p.rate)} L/min × ${fmt(p.time)} min = ${fmt(result.output)} L`, linked?C.gold:C.white, 19, 'middle','data-story-part="output"');
    body += text(35, 128, 'START', C.muted, 10) + text(35, 153, `${fmt(p.initial)} L`, C.white, 21,'start','data-story-part="reference"') + text(35, 215, 'ADDED', C.muted, 10) + text(35, 240, `+ ${fmt(result.increment)} L`, linked?C.violet:C.mint, 21,'start','data-quantity="increment" data-story-part="intermediate"');
    return { body, caption: `A tank starts with ${fmt(p.initial)} L. A steady ${fmt(p.rate)} L/min adds ${fmt(result.increment)} L in ${fmt(p.time)} minutes, giving ${fmt(result.output)} L. Equal height changes represent equal volumes; the viewing scale is labeled in litres.` };
  }
  function photograph(result, id, pin, reference, linked) {
    const p = result.parameters, maximum = Math.max(1, p.initial, result.output, pin?.output || 0, reference?.output || 0);
    const width = pixels => pixels / maximum * 300;
    const w = width(result.output), h = w * 2 / 3, originalW = width(p.initial), originalH = originalW * 2 / 3;
    const x = 230, bottom = 292, y = bottom - h;
    let body = text(35, 33, 'SMALL CHANGES. REPEATED.', C.mint, 12) + text(725, 33, 'FRAME WIDTH = PIXEL WIDTH', C.muted, 10, 'end');
    body += `<rect data-story-part="reference" data-role="original-photo" data-quantity="initial" data-value="${p.initial}" x="${x}" y="${num(bottom - originalH)}" width="${num(originalW)}" height="${num(originalH)}" fill="none" stroke="${C.muted}" stroke-dasharray="6 4"/>`;
    body += `<svg data-role="photo-width" data-quantity="output width" data-value="${result.output}" x="${x}" y="${num(y)}" width="${num(w)}" height="${num(h)}" viewBox="0 0 300 200" overflow="hidden" aria-hidden="true"><rect width="300" height="200" fill="url(#${id}-sky)"/><circle cx="228" cy="48" r="22" fill="${C.orange}"/><path d="M0 184L92 67L188 184Z" fill="${C.cyan}" fill-opacity=".65"/><path d="M90 200L213 89L325 200Z" fill="${C.mint}" fill-opacity=".6"/><path d="M0 168Q65 150 125 173T300 164V200H0Z" fill="${C.bg}" fill-opacity=".35"/></svg>`;
    body += `<rect data-story-part="output" x="${x}" y="${num(y)}" width="${num(w)}" height="${num(h)}" fill="none" stroke="${linked?C.gold:C.mint}" stroke-width="2"/>`;
    if(linked)body+=mark('output',line(x+w,y,x+w,bottom,C.gold,'stroke-width="3" data-role="changing-photo-edge" data-quantity="output width"'))+widthBracket(x,bottom+13,x+w,'current width',C.gold,'output');
    if (pin) body += `<rect data-role="baseline-photo" x="${x}" y="${num(bottom - width(pin.output) * 2 / 3)}" width="${num(width(pin.output))}" height="${num(width(pin.output) * 2 / 3)}" fill="none" stroke="${C.orange}" stroke-dasharray="4 4"/>`;
    body += text(35, 93, 'ORIGINAL', C.muted, 10) + text(35, 120, `${fmt(p.initial)} px`, C.white, 21,'start','data-story-part="reference"');
    body += text(35, 179, 'EACH PASS', C.muted, 10) + text(35, 206, `× ${fmt(p.factor)}`, linked?C.violet:C.cyan, 24,'start','data-quantity="factor" data-story-part="intermediate"');
    body += text(565, 174, 'NOW', C.muted, 10) + text(565, 204, `${fmt(result.output)} px`, linked?C.gold:C.mint, 23,'start','data-story-part="output"');
    body += text(565, 231, `${fmt(p.time)} passes`, linked?C.cyan:C.white, 13,'start','data-quantity="time" data-story-part="input"') + text(565, 254, `${result.change >= 0 ? '+' : ''}${fmt(result.change)} px`, C.muted, 12, 'start', 'data-quantity="change"');
    body += text(linked?35:230, linked?340:318, `3:2 aspect ratio · viewing width ${fmt(maximum)} px`, C.muted, 11);
    return { body, caption: `A ${fmt(p.initial)} px wide photograph is scaled by ${fmt(p.factor)} each pass. After ${fmt(p.time)} passes its width is ${fmt(result.output)} px. Width is the quantity being measured; image area is not a second encoding. Fractional passes interpolate the repeated scaling continuously.` };
  }
  function graph(slug, result, id, pin) {
    const meta = definition(slug), p = result.parameters, xMax = meta.maximum;
    const samples = Array.from({ length: 81 }, (_, i) => ({ x: i * xMax / 80, y: curveValue(slug, p, i * xMax / 80) }));
    const pinSamples = pin ? samples.map(({ x }) => ({ x, y: curveValue(slug, pin.parameters, x) })) : [];
    const yMax = Math.max(1, ...samples.map(sample => sample.y), ...pinSamples.map(sample => sample.y));
    const px = x => 90 + x / xMax * 590, py = y => 290 - y / yMax * 195;
    const path = points => points.filter(point => point.y !== null).map(({ x, y }, i) => `${i ? 'L' : 'M'}${num(px(x))} ${num(py(y))}`).join('');
    let body = text(35, 33, 'THE WHOLE RELATIONSHIP', C.mint, 12) + text(725, 33, 'ZERO-BASED AXES', C.muted, 10, 'end');
    for (let tick = 0; tick <= 4; tick++) {
      const y = py(yMax * tick / 4), x = px(xMax * tick / 4);
      body += line(90, y, 680, y) + text(77, y + 4, fmt(yMax * tick / 4), C.muted, 11, 'end');
      body += line(x, 95, x, 290, C.grid, 'stroke-opacity=".55"') + text(x, 310, fmt(xMax * tick / 4), C.muted, 11, 'middle');
    }
    body += line(90, 290, 680, 290, C.muted) + line(90, 95, 90, 290, C.muted);
    body += `<path data-role="model-curve" d="${path(samples)}" fill="none" stroke="${C.mint}" stroke-width="3" stroke-linecap="round"/>`;
    if (pin) body += `<path data-role="baseline-curve" d="${path(pinSamples)}" fill="none" stroke="${C.orange}" stroke-width="2" stroke-dasharray="5 4"/>`;
    const cx = px(p[meta.axis]), cy = py(result.output);
    body += line(cx, cy, cx, 290, C.cyan, 'stroke-dasharray="4 4"') + `<circle data-role="current-point" data-quantity="${meta.axis} output" data-x="${p[meta.axis]}" data-y="${result.output}" cx="${num(cx)}" cy="${num(cy)}" r="7" fill="${C.cyan}" stroke="${C.bg}" stroke-width="2"/>`;
    body += text(90, 78, `${meta.unit} · ${fmt(result.output)} now`, C.white, 14) + text(680, 329, meta.axis === 'servings' ? 'target servings' : slug === 'linear-model' ? 'time (min)' : 'resize passes', C.muted, 11, 'end');
    return { body, caption: `${meta.title}: ${meta.expression}. The horizontal axis shows ${meta.axis === 'servings' ? 'target servings' : slug === 'linear-model' ? 'elapsed minutes' : 'resize passes'}; the vertical axis shows ${meta.unit}. The current output is ${fmt(result.output)} ${meta.unit}.` };
  }
  function render(slug, input, options = {}) {
    const id = 'everyday-' + String(options.id || 'stage').replace(/[^A-Za-z0-9_-]/g, '-');
    const result = evaluate(slug, input);
    if (!result.valid) {
      const reason = result.message || result.errors.map(error => error.message).join(' ');
      return frame(id, 'The input is outside this model', text(380, 174, '∅', C.orange, 44, 'middle') + text(380, 230, 'Check the variable values', C.white, 18, 'middle'), reason, options.compact);
    }
    const validResult = parameters => { const r = parameters ? evaluate(slug, parameters) : null; return r?.valid ? r : null; };
    const pin = validResult(options.baseline), reference = validResult(options.reference);
    const linked=!!options.storyFocus;
    const scene = options.view === 'graph' ? graph(slug, result, id, pin) : slug === 'ratio-scale' ? recipe(result, id, pin, reference,linked) : slug === 'linear-model' ? tank(result, id, pin, reference,linked) : photograph(result, id, pin, reference,linked);
    return frame(id, definition(slug).title, scene.body + rail(slug, result.parameters), scene.caption, options.compact);
  }

  return Object.freeze({ has, defaults, controls, specs, validateParams, evaluate, curveValue, render });
});
