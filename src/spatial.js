(function (root, factory) {
  'use strict';
  const models = typeof module === 'object' && module.exports ? require('./models.js') : root.AtlasModels;
  const everyday = typeof module === 'object' && module.exports ? require('./everyday.js') : root.AtlasEveryday;
  const api = factory(models, everyday);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatial = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Models, Everyday) {
  'use strict';

  // A projection is a view of a model, never another mathematical variable.
  const C = Object.freeze({ bg: '#101e2b', grid: '#294352', white: '#f0f7f6', muted: '#98afbd', mint: '#c6f276', cyan: '#77d8e8', orange: '#ffb08a', violet: '#b8a1ff' });
  const finite = Number.isFinite;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const n = value => finite(value) ? Number(value.toFixed(4)) : 0;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const safeId = value => 'spatial-' + String(value).replace(/[^A-Za-z0-9_-]/g, '-');
  const fmt = value => {
    if (!finite(value)) return 'undefined';
    if (value === 0) return '0';
    if (value !== 1 && Math.abs(value - 1) < .00001) return String(value);
    const magnitude = Math.abs(value);
    return (magnitude >= 100000 || magnitude < .001 ? value.toExponential(2).replace(/\.00e/, 'e').replace(/e\+/, 'e') : String(Number(value.toPrecision(5)))).replace('-', '−');
  };
  const text = (x, y, value, color = C.muted, size = 12, anchor = 'start', extra = '') => `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}" ${extra}>${esc(value)}</text>`;
  const line = (a, b, color = C.grid, extra = '') => `<path d="M${n(a[0])} ${n(a[1])}L${n(b[0])} ${n(b[1])}" fill="none" stroke="${color}" ${extra}/>`;
  const points = vertices => vertices.map(p => `${n(p[0])},${n(p[1])}`).join(' ');
  const poly = (vertices, fill, extra = '') => `<polygon points="${points(vertices)}" fill="${fill}" ${extra}/>`;
  const dot = (p, color, radius = 4, extra = '') => `<circle cx="${n(p[0])}" cy="${n(p[1])}" r="${radius}" fill="${color}" ${extra}/>`;
  const path = vertices => vertices.map((p, i) => `${i ? 'L' : 'M'}${n(p[0])} ${n(p[1])}`).join('');
  const legend = items => items.map(([label, color]) => `<span><i style="background:${color}" aria-hidden="true"></i>${esc(label)}</span>`).join('');

  function fraction(value, low, high) {
    if (high === low) return .5;
    const span = high - low;
    return finite(span) ? (value - low) / span : (value / 2 - low / 2) / (high / 2 - low / 2);
  }

  /** Cubes share a volume scale: side³ is proportional to |value|. */
  function volumeGeometry(values, maxSide = 88) {
    const maximum = Math.max(0, ...values.filter(finite).map(Math.abs));
    const limit = finite(maxSide) ? Math.max(0, maxSide) : 88;
    return { maximum, sides: values.map(value => {
      if (!finite(value) || maximum === 0 || value === 0) return 0;
      const ratio = Math.abs(value) / maximum;
      // Division can underflow even though its cube root is representable.
      return (ratio > 0 ? Math.cbrt(ratio) : Math.exp((Math.log(Math.abs(value)) - Math.log(maximum)) / 3)) * limit;
    }) };
  }

  function projection(camera = .65) {
    const angle = .28 + clamp(finite(camera) ? camera : .65, 0, 1) * .24;
    return { horizontal: Math.cos(angle), vertical: Math.sin(angle) };
  }

  function definitions(id) {
    let markup = `<radialGradient id="${id}-aura"><stop stop-color="${C.cyan}" stop-opacity=".09"/><stop offset="1" stop-color="${C.bg}" stop-opacity="0"/></radialGradient>`;
    ['mint', 'cyan', 'orange', 'violet'].forEach(name => {
      markup += `<linearGradient id="${id}-${name}" x1="0" y1="1" x2=".8" y2="0"><stop stop-color="${C[name]}" stop-opacity=".06"/><stop offset="1" stop-color="${C[name]}" stop-opacity=".5"/></linearGradient>`;
    });
    markup += `<pattern id="${id}-hatch" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><path d="M0 0V9" stroke="${C.white}" stroke-opacity=".2" stroke-width="2"/></pattern>`;
    return markup;
  }

  function frame(id, title, body, caption, items, compact) {
    return `<figure class="visualization-frame spatial-frame"${compact ? ' data-compact="true"' : ''}><svg class="visual-scene spatial-scene" viewBox="0 0 760 440" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(caption)}</desc><defs>${definitions(id)}</defs><rect width="760" height="440" rx="20" fill="${C.bg}"/><ellipse cx="387" cy="212" rx="365" ry="195" fill="url(#${id}-aura)"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption><div class="visual-legend">${legend(items)}</div></figure>`;
  }

  function rail(parameter, value, min, max, label, color = C.mint, step = .01) {
    if (!finite(value) || !finite(min) || !finite(max) || max <= min) return '';
    const position = 80 + clamp(fraction(value, min, max), 0, 1) * 600;
    let markup = text(80, 357, label, C.white, 10, 'start', 'font-weight="600" letter-spacing="1"');
    markup += text(680, 357, `DRAG TO CHANGE · ${parameter} = ${fmt(value)}`, color, 10, 'end');
    markup += `<g class="spatial-drag-rail" role="slider" tabindex="0" data-quantity="${parameter}" data-drag-param="${parameter}" data-drag-min="${min}" data-drag-max="${max}" data-drag-x0="80" data-drag-x1="680" data-drag-step="${step}" aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${value}" aria-valuetext="${esc(fmt(value))}" aria-label="${esc(label + '. Drag horizontally or use arrow keys.')}" aria-orientation="horizontal" style="cursor:ew-resize;touch-action:none"><rect x="65" y="363" width="630" height="35" rx="17" fill="transparent"/>`;
    markup += line([80, 380], [680, 380], C.grid, 'stroke-width="3" stroke-linecap="round"');
    markup += line([80, 380], [position, 380], color, 'stroke-width="3" stroke-linecap="round" stroke-opacity=".75"');
    for (let i = 0; i <= 10; i++) markup += line([80 + i * 60, 376], [80 + i * 60, 384], C.muted, 'stroke-opacity=".35"');
    markup += dot([position, 380], color, 16, 'fill-opacity=".12"') + dot([position, 380], C.bg, 8, `stroke="${color}" stroke-width="2.5"`) + dot([position, 380], color, 2);
    markup += '</g>' + text(80, 407, fmt(min), C.muted, 10) + text(680, 407, fmt(max), C.muted, 10, 'end');
    return markup;
  }

  function cube(id, cx, floor, side, colorName, camera, options = {}) {
    const q = projection(camera), color = C[colorName];
    const p = (x, y, z) => [cx + (x - z) * q.horizontal, floor - (x + z) * q.vertical - y];
    const a = p(0, 0, 0), b = p(side, 0, 0), c = p(side, 0, side), d = p(0, 0, side);
    const A = p(0, side, 0), B = p(side, side, 0), D = p(0, side, side), E = p(side, side, side);
    const attr = `data-role="${options.wire ? 'pinned-volume' : 'magnitude-volume'}" data-stage="${esc(options.stage || '')}" ${options.quantity && !options.wire ? `data-quantity="${esc(options.quantity)}" ` : ''}data-value="${finite(options.value) ? options.value : 0}" data-side="${side}" data-sign="${options.value < 0 ? 'negative' : options.value > 0 ? 'positive' : 'zero'}"`;
    if (side === 0) return `<g ${attr}>${dot(a, options.wire ? C.orange : color, 3, options.wire ? 'fill-opacity="0" stroke="' + C.orange + '"' : '')}</g>`;
    if (options.wire) {
      return `<g ${attr} stroke="${C.orange}" stroke-width="1.5" stroke-dasharray="4 4" fill="none" opacity=".85">${poly([a, b, c, d], 'none')}${poly([A, B, E, D], 'none')}${[a, b, c, d].map((v, i) => line(v, [A, B, E, D][i], C.orange)).join('')}</g>`;
    }
    let markup = `<g ${attr} class="spatial-volume">`;
    markup += poly([a, b, c, d], color, 'fill-opacity=".065"');
    markup += poly([a, d, D, A], `url(#${id}-${colorName})`, `stroke="${color}" stroke-opacity=".65" stroke-width="1.2"`);
    markup += poly([a, b, B, A], `url(#${id}-${colorName})`, `stroke="${color}" stroke-opacity=".8" stroke-width="1.2"`);
    markup += poly([A, B, E, D], color, `fill-opacity=".27" stroke="${color}" stroke-width="1.5"`);
    if (options.value < 0) markup += poly([a, b, B, A], `url(#${id}-hatch)`);
    // Internal divisions remain subdivisions of this cube, not independent units.
    [.25, .5, .75].forEach(t => {
      markup += line(p(side * t, 0, 0), p(side * t, side, 0), color, 'stroke-opacity=".14"');
      markup += line(p(0, side * t, 0), p(side, side * t, 0), color, 'stroke-opacity=".14"');
      markup += line(p(0, 0, side * t), p(0, side, side * t), color, 'stroke-opacity=".12"');
      markup += line(p(0, side, side * t), p(side, side, side * t), color, 'stroke-opacity=".16"');
    });
    return markup + line(A, a, color, 'stroke-width="2"') + '</g>';
  }

  function floorGrid(cx, floor, camera) {
    const q = projection(camera), p = (x, z) => [cx + (x - z) * q.horizontal, floor - (x + z) * q.vertical];
    let markup = poly([p(-12, -12), p(102, -12), p(102, 102), p(-12, 102)], C.white, 'fill-opacity=".014"');
    for (let i = 0; i <= 5; i++) {
      markup += line(p(i * 20, -12), p(i * 20, 102), C.grid, 'stroke-opacity=".5"');
      markup += line(p(-12, i * 20), p(102, i * 20), C.grid, 'stroke-opacity=".5"');
    }
    return markup;
  }

  function functionFormula(p) {
    const sum = terms => terms.filter(([c]) => c !== 0).map(([c, suffix], i) => `${i ? c < 0 ? ' − ' : ' + ' : c < 0 ? '−' : ''}${Math.abs(c) === 1 && suffix ? '' : fmt(Math.abs(c))}${suffix}`).join('') || '0';
    return { f: sum([[p.a, 'x²'], [p.b, 'x'], [p.c, '']]), g: sum([[p.m, 'x'], [p.n, '']]) };
  }

  function composition(result, id, pin, ref, camera, compact) {
    const p = result.parameters, formula = functionFormula(p);
    const values = [p.x, result.intermediate, result.output];
    const pins = pin && pin.status === 'valid' ? [pin.parameters.x, pin.intermediate, pin.output] : [];
    const refs = ref && ref.status === 'valid' ? [ref.parameters.x, ref.intermediate, ref.output] : [];
    const geometry = volumeGeometry([...values, ...pins, ...refs]);
    const names = ['x', `${result.first}(x)`, `${result.second}(${result.first}(x))`], stages = ['input', 'intermediate', 'output'];
    let body = text(30, 30, 'THE VOLUME CHAIN', C.mint, 11, 'start', 'font-weight="650" letter-spacing="1.7"');
    body += text(730, 30, 'VOLUME = MAGNITUDE', C.muted, 10, 'end');
    body += text(30, 60, `f(x) = ${formula.f}     g(x) = ${formula.g}`, C.white, 18);
    [120, 380, 640].forEach((cx, i) => {
      body += text(cx, 98, ['01 / INPUT', `02 / APPLY ${result.first.toUpperCase()}`, `03 / APPLY ${result.second.toUpperCase()}`][i], C.muted, 10, 'middle');
      body += floorGrid(cx, 281, camera);
      body += cube(id, cx, 281, geometry.sides[i], i === 2 ? 'mint' : i === 1 ? 'violet' : 'cyan', camera, { stage: stages[i], value: values[i], quantity: ['x', 'intermediate', 'output'][i] });
      if (pins.length) body += cube(id, cx, 281, geometry.sides[3 + i], 'orange', camera, { stage: stages[i], value: pins[i], wire: true });
      if (values[i] === 0) body += text(cx, 260, 'zero volume', C.muted, 10, 'middle');
      body += text(cx, 307, `${names[i]} = ${fmt(values[i])}`, i === 2 ? C.mint : C.white, compact ? 19 : 17, 'middle', 'font-weight="600"');
      body += text(cx, 330, values[i] < 0 ? 'NEGATIVE · striped face' : values[i] > 0 ? 'POSITIVE' : 'ZERO', C.muted, 9, 'middle');
    });
    [[222, 276, result.first, C.violet], [482, 536, result.second, C.mint]].forEach(([a, b, name, color]) => {
      body += line([a, 198], [b, 198], C.grid, 'stroke-width="2"');
      body += line([a, 198], [b, 198], color, `data-quantity="function:${name}" class="visual-flow" stroke-width="2" stroke-dasharray="2 8"`);
      body += `<path d="M${b - 7} 193L${b} 198L${b - 7} 203" stroke="${color}" fill="none"/>`;
      body += text((a + b) / 2, 179, name, color, 12, 'middle');
    });
    body += rail('x', p.x, -10, 10, 'MOVE THE INPUT THROUGH BOTH FUNCTIONS', C.mint, .1);
    body += text(380, 426, `Shared volume scale · largest cube = ${fmt(geometry.maximum)} · sign is shown separately`, C.muted, 10, 'middle');
    return frame(id, 'Function composition as three changing volumes', body,
      `Volume = magnitude. ${names.join(' → ')} gives ${values.map(fmt).join(' → ')}. Every cube shares one volume scale, including a pinned wireframe; side lengths are cube roots of magnitudes. A negative value has an explicit sign and a striped face.`,
      [['Input', C.cyan], ['First transform', C.violet], ['Output', C.mint], ...(pins.length ? [['Pinned volume', C.orange]] : [])], compact);
  }

  /** Equal exponent samples restricted to the actual argument scale, not arbitrary powers. */
  function logarithmGeometry(result, comparisons = [], count = 7) {
    const p = result.parameters;
    const peers = comparisons.filter(r => r && r.status === 'valid');
    const maximum = Math.max(p.argument, ...peers.map(r => r.parameters.argument));
    const logMax = Math.log(maximum), logBase = Math.log(p.base);
    const logMin = Math.max(Math.log(Number.MIN_VALUE), Math.min(Math.log(p.argument), logMax - Math.log(32)));
    let emin = Math.min(logMin / logBase, logMax / logBase), emax = Math.max(logMin / logBase, logMax / logBase);
    const sampleCount = Math.max(2, Math.min(12, Math.round(finite(count) ? count : 7)));
    const collapsed = emax === emin;
    if (collapsed) { emin = result.output - .5; emax = result.output + .5; }
    const samples = Array.from({ length: collapsed ? 1 : sampleCount }, (_, i) => {
      const t = collapsed ? .5 : i / (sampleCount - 1);
      const exponent = collapsed ? result.output : emin + (emax - emin) * t;
      const logArgument = collapsed ? logMax : logBase > 0 ? logMin + (logMax - logMin) * t : logMax + (logMin - logMax) * t;
      const argument = clamp(Math.exp(logArgument), Number.MIN_VALUE, maximum);
      return { exponent, argument, height: Math.exp(logArgument - logMax + Math.log(154)) };
    });
    return { maximum, emin, emax, samples, height: value => Math.exp(Math.log(value) - logMax + Math.log(154)) };
  }

  function column(id, x, floor, width, depth, height, name, camera, options = {}) {
    const q = projection(camera), dx = depth * q.horizontal, dy = -depth * q.vertical, color = C[name];
    const a = [x - width / 2, floor], b = [x + width / 2, floor], A = [a[0], floor - height], B = [b[0], floor - height];
    const D = [A[0] + dx, A[1] + dy], E = [B[0] + dx, B[1] + dy], c = [b[0] + dx, b[1] + dy];
    const attributes = `data-role="${options.role || 'argument-column'}"${options.quantity ? ` data-quantity="${esc(options.quantity)}"` : ''} data-value="${options.value}" data-height="${height}"${finite(options.exponent) ? ` data-exponent="${options.exponent}"` : ''}`;
    if (options.wire) return `<g ${attributes} fill="none" stroke="${color}" stroke-dasharray="4 3" stroke-width="1.5">${poly([a, b, B, A], 'none')}${poly([B, E, c, b], 'none')}${poly([A, B, E, D], 'none')}</g>`;
    return `<g ${attributes}>${poly([a, b, B, A], `url(#${id}-${name})`, `stroke="${color}" stroke-opacity=".7"`)}${poly([B, E, c, b], color, 'fill-opacity=".18"')}${poly([A, B, E, D], color, `fill-opacity=".45" stroke="${color}" stroke-opacity=".8"`)}</g>`;
  }

  function logarithm(result, id, pin, ref, camera, compact) {
    const p = result.parameters, geometry = logarithmGeometry(result, [pin, ref]), q = projection(camera);
    const xpos = exponent => 98 + clamp(fraction(exponent, geometry.emin, geometry.emax), 0, 1) * 444;
    const pinValid = pin && pin.status === 'valid';
    let body = text(30, 30, 'THE EXPONENT LANDSCAPE', C.mint, 11, 'start', 'font-weight="650" letter-spacing="1.7"');
    body += text(730, 30, 'HEIGHT = ARGUMENT', C.muted, 10, 'end');
    body += text(30, 62, `${fmt(p.base)} ^ ${fmt(result.output)} ${result.exactDisplay === null ? '≈' : '='} ${fmt(p.argument)}`, C.white, 23, 'start', 'data-quantity="base output argument"');
    body += text(90, 98, `EQUAL EXPONENT STEPS → ${p.base > 1 ? 'GROWTH' : 'SHRINKAGE'}`, C.cyan, 10);
    body += text(730, 98, `Full height: ${fmt(geometry.maximum)}`, C.muted, 10, 'end');
    const depth = [35 * q.horizontal, -35 * q.vertical];
    body += poly([[75, 282], [578, 282], [578 + depth[0], 282 + depth[1]], [75 + depth[0], 282 + depth[1]]], C.white, 'fill-opacity=".025" stroke="' + C.grid + '"');
    for (let i = 0; i <= 8; i++) body += line([75 + i * 63, 282], [75 + i * 63 + depth[0], 282 + depth[1]], C.grid, 'stroke-opacity=".65"');
    const topPath = geometry.samples.map(s => [xpos(s.exponent), 282 - s.height]);
    body += `<path d="${path(topPath)}" fill="none" stroke="${C.cyan}" stroke-opacity=".35" stroke-width="1.4" stroke-dasharray="3 5"/>`;
    geometry.samples.forEach(s => {
      const x = xpos(s.exponent);
      if (Math.abs(fraction(s.exponent, geometry.emin, geometry.emax) - fraction(result.output, geometry.emin, geometry.emax)) > .025) {
        body += column(id, x, 282, 22, 17, s.height, 'cyan', camera, { role: 'exponent-sample', value: s.argument, exponent: s.exponent });
      }
      body += text(x, 305, String(Number(s.exponent.toPrecision(5))).replace('-', '−'), C.muted, compact ? 12 : 10, 'middle');
    });
    const currentX = xpos(result.output), currentHeight = geometry.height(p.argument);
    body += column(id, currentX, 282, 30, 22, currentHeight, 'mint', camera, { role: 'current-argument', value: p.argument, exponent: result.output, quantity: 'argument output' });
    body += dot([currentX + 11 * q.horizontal, 282 - currentHeight - 11 * q.vertical], C.mint, 4);
    body += text(clamp(currentX + 8, 125, 535), 266 - currentHeight, `x = ${fmt(p.argument)}`, C.mint, 13, 'middle', 'font-weight="650"');
    body += text(319, 330, `exponent z · selected ${fmt(result.output)}`, C.white, 12, 'middle');
    body += line([613, 121], [613, 330], C.grid, 'stroke-opacity=".65"');
    if (pinValid) {
      body += column(id, 663, 282, 30, 22, geometry.height(pin.parameters.argument), 'orange', camera, { role: 'pinned-argument', value: pin.parameters.argument, exponent: pin.output, wire: true });
      body += text(671, 305, 'PINNED', C.orange, 10, 'middle');
      body += text(671, 326, `x = ${fmt(pin.parameters.argument)}`, C.white, 12, 'middle');
      body += text(671, 343, `b = ${fmt(pin.parameters.base)}`, C.muted, 10, 'middle');
    } else {
      body += text(671, 224, '◎', C.violet, 32, 'middle');
      body += text(671, 305, 'PIN A MOMENT', C.muted, 9, 'middle');
      body += text(671, 324, 'compare its height', C.muted, 9, 'middle');
    }
    body += rail('argument', p.argument, Math.min(.125, p.argument), Math.max(64, p.argument), 'CHANGE THE ARGUMENT · FIND ITS EXPONENT', C.mint, .125);
    body += text(380, 426, p.base < 1 ? 'Increasing exponent → smaller argument · negative exponents can give growth' : 'Equal additions to exponent → equal multiplicative factors in argument', C.muted, 10, 'middle');
    return frame(id, 'A logarithm as a landscape of exponential heights', body,
      `Height = argument on one linear height scale. Columns sample equal exponent steps for base ${fmt(p.base)}. The selected exponent ${fmt(result.output)} gives argument ${fmt(p.argument)}.${p.base < 1 ? ' Because 0 < base < 1, heights decrease as exponents increase.' : ' Heights increase as exponents increase.'} Fractional and negative exponents follow the same rule.${pinValid ? ' The separate orange column keeps its pinned argument height and original base.' : ''} Displayed sample powers stay within the selected comparison range.`,
      [['Equal exponent samples', C.cyan], ['Selected argument', C.mint], ...(pinValid ? [['Pinned argument', C.orange]] : [])], compact);
  }

  function derivative(result, id, pin, camera, compact) {
    const p = result.parameters, name = p.preset === 'cubic' ? 'x³' : p.preset === 'linear' ? '3x + 1' : '|x|';
    const bounds = p.preset === 'cubic' ? [-75, 75] : p.preset === 'linear' ? [-13, 15] : [-.4, 4.6];
    const xmin = -4.2, xmax = 4.2, q = projection(camera), depth = [61 * q.horizontal, -69 * q.vertical];
    const px = x => 77 + fraction(x, xmin, xmax) * 423;
    const py = y => 300 - fraction(y, bounds[0], bounds[1]) * 188;
    const front = (x, y) => [px(x), py(y)], back = point => [point[0] + depth[0], point[1] + depth[1]];
    const samples = (fn, low = xmin, high = xmax, count = 100) => Array.from({ length: count + 1 }, (_, i) => { const x = low + (high - low) * i / count; return front(x, fn(x)); });
    const curvePoints = samples(x => Models.curveValue('derivative', p, x));
    let body = text(30, 30, 'THE SLOPE RIBBON', C.mint, 11, 'start', 'font-weight="650" letter-spacing="1.7"');
    body += text(730, 30, 'DEPTH IS A VIEWING AID', C.muted, 10, 'end');
    body += text(30, 61, `f(x) = ${name}`, C.white, 24);
    body += text(730, 61, 'A curve. Two points. A changing slope.', C.muted, 11, 'end');
    body += `<defs><clipPath id="${id}-curve-clip"><rect x="60" y="83" width="505" height="245"/></clipPath></defs>`;
    const floorY = py(0);
    body += poly([[77, floorY], [500, floorY], back([500, floorY]), back([77, floorY])], C.white, 'fill-opacity=".03" stroke="' + C.grid + '"');
    for (let x = -4; x <= 4; x++) {
      body += line(front(x, 0), back(front(x, 0)), C.grid, 'stroke-opacity=".8"');
      body += line([px(x), floorY - 3], [px(x), floorY + 3], C.muted, 'stroke-opacity=".5"');
      if (x % 2 === 0) body += text(px(x), floorY + 18, fmt(x), C.muted, 9, 'middle');
    }
    for (let i = 1; i <= 3; i++) {
      const t = i / 4;
      body += line([77 + depth[0] * t, floorY + depth[1] * t], [500 + depth[0] * t, floorY + depth[1] * t], C.grid, 'stroke-opacity=".5"');
    }
    body += line([px(0), 105], [px(0), 310], C.muted, 'stroke-opacity=".4"');
    body += text(px(0) - 10, 105, 'f(x)', C.cyan, 10, 'end') + text(510, floorY + 16, 'x', C.cyan, 11);
    [bounds[0], bounds[1]].forEach(v => body += text(px(0) - 8, py(v) + 4, fmt(v), C.muted, 9, 'end'));
    body += `<g clip-path="url(#${id}-curve-clip)">`;
    body += poly([...curvePoints, ...curvePoints.map(back).reverse()], `url(#${id}-mint)`, 'data-role="function-ribbon" data-quantity="function:f"');
    for (let i = 0; i < curvePoints.length; i += 5) body += line(curvePoints[i], back(curvePoints[i]), C.mint, 'stroke-opacity=".13"');
    body += `<path d="${path(curvePoints.map(back))}" fill="none" stroke="${C.mint}" stroke-opacity=".28" stroke-width="1.5"/>`;
    if (result.analytic !== null) {
      const tangent = samples(x => result.fa + result.analytic * (x - p.a), xmin, xmax, 2);
      body += poly([...tangent, ...tangent.map(back).reverse()], C.cyan, `fill-opacity=".055" data-role="tangent-ribbon" data-quantity="analytic" data-slope="${result.analytic}"`);
      body += `<path d="${path(tangent)}" fill="none" stroke="${C.cyan}" stroke-width="1.7" stroke-dasharray="5 5"/>`;
      body += `<path d="${path(tangent.map(back))}" fill="none" stroke="${C.cyan}" stroke-width="1" stroke-opacity=".25"/>`;
    } else {
      const left = samples(x => -x, xmin, 0, 2), right = samples(x => x, 0, xmax, 2);
      body += `<path d="${path(left)}" fill="none" stroke="${C.cyan}" stroke-width="2" stroke-dasharray="5 4"/><path d="${path(right)}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4"/>`;
    }
    const A = front(p.a, result.fa), B = front(p.a + p.h, result.fah), corner = front(p.a + p.h, result.fa);
    if (p.h !== 0) {
      body += poly([A, B, back(B), back(A)], C.orange, `fill-opacity=".19" data-role="secant-ribbon" data-quantity="output" data-slope="${result.output}"`);
      body += line(back(A), back(B), C.orange, 'stroke-opacity=".55" stroke-width="1.5"');
      body += poly([A, corner, B], C.orange, 'fill-opacity=".1" stroke="' + C.orange + '" stroke-width="1.6" data-role="actual-rise-run" data-quantity="h rise output"');
      body += line(A, B, C.orange, 'stroke-width="2.5"');
    }
    if (pin && pin.parameters && pin.status !== 'invalid_parameters') {
      const pinA = front(pin.parameters.a, pin.fa), pinB = front(pin.parameters.a + pin.parameters.h, pin.fah);
      body += dot(pinA, 'none', 7, `stroke="${C.orange}" stroke-dasharray="3 3" stroke-width="1.7"`);
      if (pin.parameters.h !== 0) body += line(pinA, pinB, C.orange, 'stroke-opacity=".65" stroke-width="2" stroke-dasharray="4 4"');
    }
    body += `<path d="${path(curvePoints)}" fill="none" stroke="${C.mint}" stroke-width="2.8" stroke-linecap="round"/>`;
    body += dot(A, C.cyan, 10, 'data-quantity="a fa" fill-opacity=".12"') + dot(A, C.cyan, 4, `stroke="${C.bg}" stroke-width="1.5"`);
    if (p.h !== 0) body += dot(B, C.orange, 10, 'data-quantity="a h fah" fill-opacity=".12"') + dot(B, C.orange, 4, `stroke="${C.bg}" stroke-width="1.5"`);
    body += '</g>';
    // The second grip remains separate from the point a even when h is zero
    // or too small to resolve at this scale. Its horizontal coordinates are
    // the actual front axes, so the shared input host can manipulate h in 3D.
    const hX = px(p.a + p.h), hY = Math.max(89, py(result.fah) - 29);
    body += `<g class="scene-handle" role="slider" tabindex="0" data-quantity="h fah" data-drag-param="h" data-drag-min="-1" data-drag-max="1" data-drag-x0="${n(px(p.a - 1))}" data-drag-x1="${n(px(p.a + 1))}" data-drag-step=".01" aria-valuemin="-1" aria-valuemax="1" aria-valuenow="${p.h}" aria-valuetext="${esc(fmt(p.h))}" aria-label="Step h from a. Drag the orange grip horizontally or use arrow keys." aria-orientation="horizontal" style="cursor:ew-resize;touch-action:none">`;
    body += line([hX, hY + 12], [hX, py(result.fah)], C.orange, 'stroke-opacity=".55" stroke-dasharray="2 3"');
    body += dot([hX, hY], 'transparent', 20, 'class="scene-handle-hit" pointer-events="all"') + dot([hX, hY], C.orange, 13, 'class="scene-handle-ring" fill-opacity=".12" stroke="' + C.orange + '" stroke-width="1.3"') + dot([hX, hY], C.orange, 5);
    body += text(hX, hY - 17, 'h ↔', C.orange, 11, 'middle') + '</g>';
    body += text(80, 327, `a = ${fmt(p.a)}   ·   a + h = ${fmt(p.a + p.h)}`, C.white, 11);
    body += `<rect x="576" y="111" width="155" height="219" rx="11" fill="${C.white}" fill-opacity=".025" stroke="${C.grid}"/>`;
    body += text(591, 133, 'RISE / RUN', C.white, 10, 'start', 'font-weight="650" letter-spacing="1"');
    if (p.h === 0) {
      body += text(653, 187, 'h = 0', C.orange, 24, 'middle');
      body += text(653, 211, 'secant undefined', C.muted, 11, 'middle');
      body += text(653, 247, result.analytic === null ? 'corner: no tangent' : 'tangent still exists', C.cyan, 10, 'middle');
    } else {
      const rise = result.output * p.h, extent = Math.max(Math.abs(rise), Math.abs(p.h));
      const dx = p.h / extent * 97, dy = -rise / extent * 97, ox = dx < 0 ? 714 : 594, oy = dy < 0 ? 270 : 168;
      const ca = [ox, oy], cb = [ox + dx, oy + dy], cc = [ox + dx, oy];
      body += text(591, 153, 'Equal x/y units · local zoom', C.muted, 9);
      body += poly([ca, cc, cb], C.orange, `fill-opacity=".1" stroke="${C.orange}" stroke-width="1.7" data-role="local-rise-run" data-quantity="h rise output" data-run="${p.h}" data-rise="${rise}"`);
      if (Math.abs(dx) > 10 && Math.abs(dy) > 10) {
        const sx = Math.sign(dx), sy = Math.sign(dy);
        body += `<path d="M${n(cc[0] - sx * 7)} ${n(cc[1])}v${n(sy * 7)}h${n(sx * 7)}" fill="none" stroke="${C.orange}" stroke-opacity=".65"/>`;
      }
      body += dot(ca, C.cyan, 3) + dot(cb, C.orange, 3);
      body += text(591, 296, `h = ${fmt(p.h)}`, C.orange, 10);
      body += text(591, 315, `Δf = ${fmt(rise)}`, C.orange, 10);
    }
    body += rail('a', p.a, -3, 3, 'TRAVEL ALONG THE CURVE · FEEL ITS SLOPE', C.mint, .05);
    body += text(380, 426, `Secant ${fmt(result.output)}   /   Tangent ${result.analytic === null ? 'does not exist' : fmt(result.analytic)}   ·   depth repeats the same curve`, C.muted, 10, 'middle');
    return frame(id, 'Derivative as a projected curve ribbon with actual rise and run', body,
      `Depth is a viewing aid: the ribbon repeats the same f(x), with no additional variable. The front axes measure x and f(x). ${p.h === 0 ? 'At h = 0, the secant quotient is undefined; the analytic derivative is evaluated separately.' : `Run h = ${fmt(p.h)}, rise Δf = ${fmt(result.output * p.h)}, secant slope = ${fmt(result.output)}. The local triangle magnifies x and y by the same factor.`} ${result.analytic === null ? 'At this absolute-value corner, the left slope is −1 and the right slope is +1, so the two-sided derivative does not exist.' : `Analytic tangent slope = ${fmt(result.analytic)}.`} Drag the lower rail to move a; drag the orange grip to change h. Both accept arrow keys.`,
      [['Function ribbon', C.mint], ['Point a / tangent', C.cyan], ['Point a + h / secant', C.orange], ...(result.analytic === null ? [['Right slope at corner', C.violet]] : [])], compact);
  }

  function invalid(result, id, compact) {
    const reason = result.message || (result.errors || []).map(e => e.message).join(' ') || 'This input does not define a real value.';
    let body = `<circle cx="380" cy="175" r="55" fill="${C.orange}" fill-opacity=".04" stroke="${C.orange}" stroke-opacity=".5"/>`;
    body += text(380, 190, '∅', C.orange, 44, 'middle');
    body += text(380, 269, 'NO REAL VALUE HERE', C.white, 18, 'middle');
    body += text(380, 300, reason.length > 92 ? reason.slice(0, 89) + '…' : reason, C.muted, 12, 'middle');
    body += text(380, 365, 'Change the parameters to return to the spatial model.', C.muted, 12, 'middle');
    return frame(id, 'This input has no spatial model', body, reason, [['Outside the model domain', C.orange]], compact);
  }

  function render(slug, parameters, options = {}) {
    if (Everyday?.has(slug)) return Everyday.render(slug, parameters, { ...options, view: 'geometry' });
    const { id = 'stage', baseline = null, reference = null, compact = false, camera = .65 } = options;
    const result = Models.evaluate(slug, parameters), pin = baseline ? Models.evaluate(slug, baseline) : null, ref = reference ? Models.evaluate(slug, reference) : null;
    const key = safeId(id);
    if (result.status === 'invalid_parameters' || (slug !== 'derivative' && result.status !== 'valid')) return invalid(result, key, compact);
    if (slug === 'function-composition') return composition(result, key, pin, ref, camera, compact);
    if (slug === 'real-logarithm') return logarithm(result, key, pin, ref, camera, compact);
    return derivative(result, key, pin, camera, compact);
  }

  return Object.freeze({ render, volumeGeometry, logarithmGeometry, projection });
});
