(function (root, factory) {
  'use strict';
  const models = typeof module === 'object' && module.exports ? require('./models.js') : root.AtlasModels;
  const everyday = typeof module === 'object' && module.exports ? require('./model-registry.js') : (root.AtlasModelRegistry||root.AtlasEveryday);
  const api = factory(models, everyday);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasVisuals = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Models, Everyday) {
  'use strict';

  const C = { mint: '#c6f276', cyan: '#77d8e8', orange: '#ffb08a', muted: '#91a5b5', white: '#f3f8fb', grid: '#294050', bg: '#111e2b' };
  const finite = Number.isFinite;
  const esc = value => String(value).replace(/[&<>"']/g, x => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[x]);
  const n = value => finite(value) ? Number(value.toFixed(3)) : 0;
  const uid = value => 'atlas-' + String(value).replace(/[^A-Za-z0-9_-]/g, '-');

  function formatNumber(value) {
    if (value === null || value === undefined || !finite(value)) return 'undefined';
    if (value === 0) return '0';
    // Preserve the distinction between a legal near-one logarithm base and 1.
    if (value !== 1 && Math.abs(value - 1) < 0.00001) return String(value);
    const magnitude = Math.abs(value);
    if (magnitude >= 100000 || magnitude < 0.001) return value.toExponential(2).replace(/\.00e/, 'e').replace(/e\+/, 'e');
    return Number(value.toPrecision(5)).toLocaleString('en-US', { maximumFractionDigits: 6 });
  }

  // Each square uses one common scale: its area, rather than its side, encodes |value|.
  function areaGeometry(values, maxSide = 144) {
    const maximum = Math.max(0, ...values.filter(finite).map(Math.abs));
    const limit = finite(maxSide) ? Math.max(0, maxSide) : 144;
    const scale = maximum === 0 ? 0 : limit / Math.sqrt(maximum);
    return { maximum, scale, sides: values.map(v => {
      if (!finite(v) || maximum === 0 || v === 0) return 0;
      const ratio = Math.abs(v) / maximum;
      // Keep a representable side when a tiny value/maximum division underflows.
      return (ratio > 0 ? Math.sqrt(ratio) : Math.exp((Math.log(Math.abs(v)) - Math.log(maximum)) / 2)) * limit;
    }) };
  }

  function text(x, y, content, options = {}) {
    return `<text x="${n(x)}" y="${n(y)}" fill="${options.fill || C.muted}" font-size="${options.size || 12}"${options.weight ? ` font-weight="${options.weight}"` : ''}${options.anchor ? ` text-anchor="${options.anchor}"` : ''}${options.extra ? ' ' + options.extra : ''}>${esc(content)}</text>`;
  }
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${color}" ${extra}/>`;
  const tag = (x, y, label, color = C.mint) => `<g>${text(x, y, label, { fill: color, size: 11, weight: 650 })}</g>`;
  // Scenes describe manipulation; the workbench owns pointer/keyboard events.
  // Coordinate endpoints are SVG units and always describe the same parameter
  // interval as the accessible slider, so alternate renderers can use this contract.
  function handleAttributes(key, value, min, max, x0, x1, label, options = {}) {
    return `class="scene-handle" role="slider" tabindex="0" data-quantity="${key}" data-drag-param="${key}" data-drag-min="${min}" data-drag-max="${max}" data-drag-x0="${n(x0)}" data-drag-x1="${n(x1)}" data-drag-mode="${options.relative ? 'relative' : 'absolute'}" data-drag-step="${options.step || .1}" aria-label="${esc(label)}" aria-orientation="horizontal" aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${value}" aria-valuetext="${esc(formatNumber(value))}"`;
  }
  function handle(key, value, min, max, x0, x1, body, label, options) {
    return `<g ${handleAttributes(key, value, min, max, x0, x1, label, options)}>${body}</g>`;
  }
  function pointGrip(sx, sy, color) {
    return circle(sx, sy, 20, 'transparent', 'class="scene-handle-hit" pointer-events="all"') + circle(sx, sy, 14, color, 'class="scene-handle-ring" fill-opacity=".1" stroke="' + color + '" stroke-opacity=".65" stroke-width="1.2"') + circle(sx, sy, 5, color, `stroke="${C.bg}" stroke-width="2"`);
  }
  function formula(p) {
    const term = (coefficient, suffix, first) => coefficient === 0 ? '' : (first ? coefficient < 0 ? '−' : '' : coefficient < 0 ? ' − ' : ' + ') + (Math.abs(coefficient) === 1 && suffix ? '' : formatNumber(Math.abs(coefficient))) + suffix;
    const poly = [[p.a, 'x²'], [p.b, 'x'], [p.c, '']].filter(([value]) => value !== 0);
    const aff = [[p.m, 'x'], [p.n, '']].filter(([value]) => value !== 0);
    return { f: poly.map(([value, suffix], index) => term(value, suffix, !index)).join('') || '0', g: aff.map(([value, suffix], index) => term(value, suffix, !index)).join('') || '0' };
  }
  function frame(id, title, body, caption, legend = '') {
    return `<figure class="visualization-frame"><svg class="visual-scene" viewBox="0 0 760 400" role="${body.includes('data-drag-param=') ? 'group' : 'img'}" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(caption)}</desc><defs><linearGradient id="${id}-fill" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.mint}" stop-opacity=".08"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".47"/></linearGradient><linearGradient id="${id}-cyan" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".08"/><stop offset="1" stop-color="${C.cyan}" stop-opacity=".4"/></linearGradient><pattern id="${id}-negative" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="10" stroke="${C.white}" stroke-opacity=".18" stroke-width="2"/></pattern></defs><rect width="760" height="400" rx="20" fill="${C.bg}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption>${legend ? `<div class="visual-legend">${legend}</div>` : ''}</figure>`;
  }
  function legend(items) {
    return items.map(([label, color]) => `<span><i style="background:${color}" aria-hidden="true"></i>${esc(label)}</span>`).join('');
  }
  function invalid(id, result) {
    const reason = result.message || (result.errors || []).map(e => e.message).join(' ') || 'This input does not define a real value.';
    let body = `<circle cx="380" cy="147" r="54" stroke="${C.orange}" fill="${C.orange}" fill-opacity=".06" stroke-opacity=".5"/>${text(380, 160, '∅', { fill: C.orange, size: 42, anchor: 'middle' })}`;
    body += text(380, 241, 'NO REAL VALUE HERE', { size: 17, fill: C.white, weight: 650, anchor: 'middle' });
    body += text(380, 274, reason.length > 91 ? reason.slice(0, 88) + '…' : reason, { size: 12, anchor: 'middle' });
    return frame(id, 'The current input is outside the model domain', body, reason);
  }

  function composition(result, id, baseline, reference) {
    const p = result.parameters, f = formula(p);
    const current = [p.x, result.intermediate, result.output];
    const pinned = baseline && baseline.status === 'valid' ? [baseline.parameters.x, baseline.intermediate, baseline.output] : [];
    const extent = reference && reference.status === 'valid' ? [reference.parameters.x, reference.intermediate, reference.output] : [];
    const areas = areaGeometry([...current, ...pinned, ...extent], 144);
    const names = ['x', `${result.first}(x)`, `${result.second}(${result.first}(x))`];
    const colors = [C.cyan, C.cyan, C.mint];
    let body = tag(30, 33, 'THE TRANSFORMATION CHAIN');
    body += text(730, 33, 'AREA = MAGNITUDE', { size: 11, anchor: 'end' });
    body += text(30, 61, `g(x) = ${f.g}     ·     f(x) = ${f.f}`, { size: 15, fill: C.white });
    [116, 380, 644].forEach((cx, i) => {
      const side = areas.sides[i], x = cx - side / 2, y = 268 - side;
      body += text(cx, 102, ['INPUT', 'FIRST TRANSFORM', 'OUTPUT'][i], { size: 10, anchor: 'middle' });
      if (i === 0) body += `<g ${handleAttributes('x', p.x, -10, 10, 0, 400, 'Input x. Drag the frame horizontally or use arrow keys.', { relative: true })}>`;
      body += `<rect x="${cx - 76}" y="116" width="152" height="152" rx="3" fill="${C.white}" fill-opacity=".018" stroke="${C.white}" stroke-opacity=".08"/>`;
      for (let t = 1; t < 4; t++) body += line(cx - 76, 268 - t * 38, cx + 76, 268 - t * 38, C.grid, 'stroke-opacity=".23"');
      body += `<rect class="magnitude-frame visual-magnitude" data-role="magnitude-frame" data-quantity="${['x', 'intermediate', 'output'][i]}" data-stage="${['input', 'intermediate', 'output'][i]}" data-value="${current[i]}" x="${n(x)}" y="${n(y)}" width="${side}" height="${side}" rx="2" fill="url(#${id}-${i === 2 ? 'fill' : 'cyan'})" stroke="${colors[i]}" stroke-width="2"/>`;
      if (current[i] < 0 && side > 0) body += `<rect x="${n(x)}" y="${n(y)}" width="${n(side)}" height="${n(side)}" fill="url(#${id}-negative)"/>`;
      if (current[i] === 0) body += circle(cx, 268, 4, colors[i]) + text(cx, 251, 'zero area', { size: 10, anchor: 'middle' });
      if (pinned.length) {
        const bs = areas.sides[3 + i];
        body += `<rect data-role="baseline-frame" data-stage="${['input', 'intermediate', 'output'][i]}" data-value="${pinned[i]}" x="${n(cx - bs / 2)}" y="${n(268 - bs)}" width="${bs}" height="${bs}" fill="none" stroke="${C.orange}" stroke-width="1.5" stroke-dasharray="5 4"/>`;
      }
      if (i === 0) {
        body += `<rect class="scene-handle-hit" x="${cx - 76}" y="116" width="152" height="152" rx="3" fill="transparent" pointer-events="all"/>`;
        body += `<rect class="scene-handle-ring" x="${cx - 76}" y="116" width="152" height="152" rx="3" fill="none" stroke="${C.cyan}" stroke-opacity=".3" stroke-width="1.2"/>`;
        body += text(cx, 142, '↔', { anchor: 'middle', fill: C.cyan, size: 18 });
        body += '</g>';
      }
      body += text(cx, 299, names[i], { anchor: 'middle', fill: colors[i], size: 13 });
      body += text(cx, 330, formatNumber(current[i]), { anchor: 'middle', fill: C.white, size: 25, weight: 650 });
      body += text(cx, 351, current[i] < 0 ? 'NEGATIVE · striped area' : current[i] > 0 ? 'POSITIVE' : 'ZERO', { anchor: 'middle', size: 9 });
    });
    [[205, 291, result.first], [469, 555, result.second]].forEach(([left, right, name], i) => {
      const path = `M${left} 196 H${right}`;
      body += `<path d="${path}" fill="none" stroke="${C.grid}" stroke-width="3"/><path class="visual-flow" data-quantity="function:${name}" d="${path}" fill="none" stroke="${i ? C.mint : C.cyan}" stroke-width="2" stroke-dasharray="3 10"/>`;
      body += `<path d="M${right - 8} 190 L${right} 196 L${right - 8} 202" fill="none" stroke="${i ? C.mint : C.cyan}" stroke-width="2"/>`;
      body += circle(left + 29, 196, 3.5, i ? C.mint : C.cyan, 'class="visual-particle"');
      body += text((left + right) / 2, 173, `apply ${name}`, { anchor: 'middle', fill: C.white, size: 12 });
    });
    body += text(380, 382, `Drag the input frame ↔ · shared area scale · largest frame = ${formatNumber(areas.maximum)}`, { anchor: 'middle', size: 10 });
    const caption = `${names.join(' → ')}: ${current.map(formatNumber).join(' → ')}. Drag the input frame horizontally or focus it and use arrow keys. Square areas share one scale and encode absolute values; signs remain explicit. Change the order to see a different transformation.`;
    return frame(id, 'Function composition shown as changing geometric area', body, caption,
      legend([['Magnitude (shared area scale)', C.mint], ['Intermediate value', C.cyan], ...(pinned.length ? [['Pinned comparison', C.orange]] : [])]));
  }

  function niceTicks(min, max, count = 5) {
    if (!finite(min) || !finite(max) || max <= min) return [0];
    const raw = (max - min) / count;
    if (!finite(raw) || raw <= 0) return [min, max].filter(finite);
    const power = Math.pow(10, Math.floor(Math.log10(raw)));
    const ratio = raw / power;
    const step = (ratio <= 1 ? 1 : ratio <= 2 ? 2 : ratio <= 5 ? 5 : 10) * power;
    if (!finite(step) || step <= 0) return [min, max].filter(finite);
    const result = [];
    for (let i = 0, value = Math.ceil(min / step) * step; i < 20 && value <= max + step * 1e-8; i++, value += step) result.push(Math.abs(value) < step * 1e-8 ? 0 : value);
    return result;
  }

  function plotKit(id, domain, rect = { x: 64, y: 83, w: 658, h: 244 }) {
    const { x, y, w, h } = rect, { xmin, xmax, ymin, ymax } = domain;
    // Divide each endpoint before subtracting to keep all finite log ranges drawable.
    const fraction = (value, low, high) => {
      const span = high - low;
      return finite(span) ? (value - low) / span : (value / 2 - low / 2) / (high / 2 - low / 2);
    };
    const px = value => x + fraction(value, xmin, xmax) * w;
    const py = value => y + h - fraction(value, ymin, ymax) * h;
    let grid = `<defs><clipPath id="${id}-clip"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4"/></clipPath></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${C.white}" fill-opacity=".015" stroke="${C.grid}"/>`;
    niceTicks(xmin, xmax).forEach(value => {
      grid += line(px(value), y, px(value), y + h, C.grid, 'stroke-opacity=".6"');
      grid += text(px(value), y + h + 21, formatNumber(value), { anchor: 'middle', size: 10 });
    });
    niceTicks(ymin, ymax, 4).forEach(value => {
      grid += line(x, py(value), x + w, py(value), C.grid, 'stroke-opacity=".6"');
      grid += text(x - 10, py(value) + 3.5, formatNumber(value), { anchor: 'end', size: 10 });
    });
    if (xmin <= 0 && xmax >= 0) grid += line(px(0), y, px(0), y + h, C.muted, 'stroke-opacity=".45"');
    if (ymin <= 0 && ymax >= 0) grid += line(x, py(0), x + w, py(0), C.muted, 'stroke-opacity=".45"');
    grid += text(x + w, y + h + 39, domain.xLabel || 'x', { fill: C.cyan, anchor: 'end', size: 12 });
    grid += text(x, y - 12, domain.yLabel || 'f(x)', { fill: C.cyan, size: 12 });
    return { px, py, grid, rect, domain, clip: `clip-path="url(#${id}-clip)"` };
  }

  function samplePath(fn, plot, samples = 220) {
    let path = '', open = false;
    const { xmin, xmax, ymin, ymax } = plot.domain;
    const ypad = (ymax - ymin) * 3;
    for (let i = 0; i <= samples; i++) {
      const x = xmin + (xmax - xmin) * (i / samples), y = fn(x);
      if (!finite(y) || y < ymin - ypad || y > ymax + ypad) { open = false; continue; }
      const sx = plot.px(x), sy = plot.py(y);
      if (!finite(sx) || !finite(sy)) { open = false; continue; }
      path += (open ? ' L' : 'M') + n(sx) + ' ' + n(sy); open = true;
    }
    return path;
  }
  const curve = (path, color, extra = '') => `<path d="${path}" fill="none" stroke="${color}" stroke-width="2.8" stroke-linejoin="round" stroke-linecap="round" ${extra}/>`;
  function point(plot, x, y, color, label, offset = 14, drag = null, quantity = '') {
    if (!finite(x) || !finite(y)) return '';
    const sx = plot.px(x), sy = plot.py(y), r = plot.rect;
    if (!finite(sx) || !finite(sy) || sx < r.x || sx > r.x + r.w || sy < r.y || sy > r.y + r.h) return '';
    let body = (drag ? pointGrip(sx, sy, color) : circle(sx, sy, 10, color, 'fill-opacity=".12"') + circle(sx, sy, 4, color, `stroke="${C.bg}" stroke-width="2"`)) + (label ? text(Math.min(r.x + r.w - 10, Math.max(r.x + 10, sx + offset)), Math.min(r.y + r.h - 12, Math.max(r.y + 15, sy - 13)), label, { fill: color, size: 10, anchor: offset < 0 ? 'end' : 'start' }) : '');
    const marked = quantity ? `<g data-quantity="${esc(quantity)}">${body}</g>` : body;
    return drag ? handle(drag.key, drag.value, drag.min, drag.max, drag.x0, drag.x1, marked, drag.label, { step: drag.step }) : marked;
  }

  function derivative(result, id, baseline, reference, graph) {
    const p = result.parameters, name = p.preset === 'cubic' ? 'x³' : p.preset === 'linear' ? '3x + 1' : '|x|';
    const bounds = p.preset === 'cubic' ? [-75, 75] : p.preset === 'linear' ? [-13, 15] : [-0.4, 4.6];
    const plot = plotKit(id, { xmin: -4.2, xmax: 4.2, ymin: bounds[0], ymax: bounds[1] }, { x: 64, y: 99, w: graph ? 658 : 430, h: 230 });
    let body = tag(30, 32, 'THE SLOPE LAB');
    body += text(30, 61, `f(x) = ${name}`, { fill: C.white, size: 22, weight: 650 });
    body += text(730, 35, 'DRAG THE POINTS. WATCH THE GAP.', { size: 10, anchor: 'end' });
    body += plot.grid;
    body += `<g ${plot.clip}>${curve(samplePath(x => Models.curveValue('derivative', p, x), plot), C.mint, 'class="visual-curve" data-quantity="function:f"')}`;
    if (result.analytic !== null) body += curve(samplePath(x => result.fa + result.analytic * (x - p.a), plot, 2), C.cyan, 'data-quantity="analytic" stroke-dasharray="6 5" stroke-opacity=".8"');
    if (p.preset === 'absolute' && p.a === 0) {
      body += curve(samplePath(x => x <= 0 ? -x : null, plot), C.cyan, 'stroke-dasharray="5 5"');
      body += curve(samplePath(x => x >= 0 ? x : null, plot), C.cyan, 'stroke-dasharray="5 5"');
    }
    if (p.h !== 0) {
      body += curve(samplePath(x => result.fa + result.output * (x - p.a), plot, 2), C.orange, 'data-quantity="output" stroke-opacity=".7"');
      const ax = plot.px(p.a), ay = plot.py(result.fa), bx = plot.px(p.a + p.h), by = plot.py(result.fah);
      body += `<path data-quantity="h rise output" d="M${n(ax)} ${n(ay)} H${n(bx)} V${n(by)} Z" fill="${C.orange}" fill-opacity=".12" stroke="${C.orange}" stroke-width="1.5"/>`;
    }
    if (baseline && baseline.parameters && baseline.fa !== undefined) {
      const bp = baseline.parameters;
      body += circle(plot.px(bp.a), plot.py(baseline.fa), 7, 'none', `stroke="${C.orange}" stroke-width="1.5" stroke-dasharray="2 2"`);
      if (baseline.output !== null) body += curve(samplePath(x => baseline.fa + baseline.output * (x - bp.a), plot, 2), C.orange, 'stroke-dasharray="3 6" stroke-opacity=".35"');
    }
    body += '</g>';
    body += point(plot, p.a, result.fa, C.cyan, 'a', 14, {
      key: 'a', value: p.a, min: -3, max: 3, x0: plot.px(-3), x1: plot.px(3), step: .05,
      label: 'Point a. Drag horizontally or use arrow keys.'
    }, 'a fa');
    // A separate grip above the second point keeps h reachable when the
    // secant collapses or the two points are only a fraction of a pixel apart.
    if (p.h !== 0) body += point(plot, p.a + p.h, result.fah, C.orange, '', p.h >= 0 ? 14 : -14, null, 'a h fah');
    const hx = plot.px(p.a + p.h), hy = Math.max(81, plot.py(result.fah) - 31);
    const hGrip = line(hx, hy + 14, hx, plot.py(result.fah), C.orange, 'stroke-opacity=".5" stroke-dasharray="2 3"') + pointGrip(hx, hy, C.orange) + text(hx, hy - 19, 'h ↔', { fill: C.orange, anchor: 'middle', size: 10 });
    body += handle('h', p.h, -1, 1, plot.px(p.a - 1), plot.px(p.a + 1), hGrip, 'Step h from a. Drag the orange grip horizontally or use arrow keys.', { step: .01 });
    if (!graph) {
      body += `<rect x="520" y="99" width="212" height="230" rx="12" fill="${C.white}" fill-opacity=".025" stroke="${C.grid}"/>`;
      body += text(537, 122, 'THE LOCAL TRIANGLE', { fill: C.white, size: 11, weight: 650 });
      if (p.h === 0) {
        body += text(626, 190, 'h = 0', { fill: C.orange, size: 26, anchor: 'middle' });
        body += text(626, 218, 'secant is undefined', { size: 12, anchor: 'middle' });
        body += text(626, 247, result.analytic === null ? 'corner: no unique tangent' : 'the tangent still exists', { fill: C.cyan, size: 10, anchor: 'middle' });
      } else {
        const rise = result.output * p.h;
        // The main axes preserve absolute motion; this explicitly magnified
        // inset preserves the slope of even a very small nonzero step.
        const extent = Math.max(Math.abs(p.h), Math.abs(rise));
        const magnify = 126 / extent, dx = p.h / extent * 126, dy = rise / extent * 126;
        const ox = p.h >= 0 ? 548 : 704, oy = rise >= 0 ? 279 : 149;
        body += `<path data-role="local-slope-triangle" data-quantity="h rise output" d="M${ox} ${oy} h${n(dx)} v${n(-dy)} Z" fill="${C.orange}" fill-opacity=".12" stroke="${C.orange}" stroke-width="1.8"/>`;
        body += circle(ox, oy, 4, C.cyan) + circle(ox + dx, oy - dy, 4, C.orange);
        body += text(537, 302, `run h = ${formatNumber(p.h)}`, { fill: C.orange, size: 10 });
        body += text(537, 317, `rise Δf = ${formatNumber(rise)}`, { fill: C.orange, size: 10 });
        body += text(626, 145, finite(magnify) ? `Equal x/y units · ${formatNumber(magnify)} px/unit` : 'Equal x/y units · subnormal step zoom', { anchor: 'middle', size: 8 });
      }
    }
    const analytic = result.analytic === null ? 'does not exist' : formatNumber(result.analytic);
    body += text(30, 382, `SECANT  ${formatNumber(result.output)}     /     TANGENT  ${analytic}`, { fill: C.white, size: 12 });
    const caption = (p.h === 0 ? 'At h = 0 the secant quotient divides by zero. The analytic tangent is evaluated separately.' : `Run h = ${formatNumber(p.h)}; rise Δf = ${formatNumber(result.output * p.h)}. Secant slope = ${formatNumber(result.output)}; analytic derivative = ${analytic}.${result.analytic === null ? ' The two sides of the absolute-value corner disagree.' : ' Bring h toward zero to see the secant approach the tangent.'}`) + ' Drag the cyan point to move a; drag the orange grip to change h. Both handles also accept arrow keys.';
    return frame(id, 'Derivative as an actual rise over run on a curve', body, caption,
      legend([['Function', C.mint], ['Point a / analytic tangent', C.cyan], ['Point a + h / secant', C.orange]]));
  }

  function logGeometry(result, id, baseline, reference) {
    const p = result.parameters, z = result.output;
    const other = [baseline, reference].filter(r => r && r.status === 'valid');
    const exponents = [0, z, ...other.map(r => r.output)];
    let emin = Math.min(...exponents), emax = Math.max(...exponents);
    const espan = Math.max(3, emax - emin);
    emin -= espan * .17; emax += espan * .17;
    const exponentTicks = niceTicks(emin, emax, 6);
    const argumentAt = e => {
      const value = Math.exp(Math.log(p.base) * e);
      return finite(value) && value > 0 ? value : null;
    };
    const steps = exponentTicks.map(e => ({ e, value: argumentAt(e) }));
    // Anchor magnitude to actual compared arguments. Far-away ladder powers must
    // not shrink an unchanged selected argument while only the base is moving.
    const maximum = Math.max(p.argument, 64, ...other.map(r => r.parameters.argument));
    const x = e => 78 + (e - emin) / (emax - emin) * 604;
    const ax = value => 78 + value / maximum * 604;
    let body = tag(30, 33, 'THE EXPONENTIAL RULER');
    body += text(30, 65, `${formatNumber(p.base)} raised to ${formatNumber(z)} ${result.exactDisplay === null ? '≈' : '='} ${formatNumber(p.argument)}`, { fill: C.white, size: 20, weight: 650, extra: 'data-quantity="base output argument"' });
    body += text(30, 103, 'EXPONENT · equal additions', { fill: C.cyan, size: 11 });
    body += text(30, 257, 'ARGUMENT · real magnitude on a linear ruler', { fill: C.mint, size: 11 });
    body += line(78, 145, 682, 145, C.cyan, 'stroke-width="2"');
    body += line(78, 295, 682, 295, C.mint, 'stroke-width="2"');
    steps.forEach(({ e, value }) => {
      body += line(x(e), 138, x(e), 152, C.cyan, 'stroke-width="1.5"');
      body += text(x(e), 129, formatNumber(e), { fill: C.cyan, anchor: 'middle', size: 11 });
      if (value !== null && value <= maximum) {
        body += `<path d="M${n(x(e))} 154 C${n(x(e))} 215 ${n(ax(value))} 219 ${n(ax(value))} 286" fill="none" stroke="${C.cyan}" stroke-opacity=".17"/>`;
        body += line(ax(value), 289, ax(value), 301, C.mint, 'stroke-opacity=".5"');
      } else body += text(x(e), 174, 'beyond ruler', { anchor: 'middle', size: 8 });
    });
    if (baseline && baseline.status === 'valid') {
      body += circle(x(baseline.output), 145, 7, 'none', `stroke="${C.orange}" stroke-width="2"`);
      body += circle(ax(baseline.parameters.argument), 295, 7, 'none', `stroke="${C.orange}" stroke-width="2"`);
    }
    body += `<path class="visual-flow" d="M${n(x(z))} 155 C${n(x(z))} 219 ${n(ax(p.argument))} 219 ${n(ax(p.argument))} 285" fill="none" stroke="${C.mint}" stroke-width="2.2" stroke-dasharray="5 5"/>`;
    body += circle(x(z), 145, 14, C.cyan, 'fill-opacity=".12"') + circle(x(z), 145, 5, C.cyan, 'data-quantity="output"');
    const minimum = Math.min(.125, p.argument);
    const argumentGrip = pointGrip(ax(p.argument), 295, C.mint) + circle(ax(p.argument), 295, 5, C.mint, 'data-role="argument-point" data-quantity="argument"');
    body += handle('argument', p.argument, minimum, maximum, ax(minimum), ax(maximum), argumentGrip, 'Logarithm argument. Drag along the lower ruler or use arrow keys.', { step: .125 });
    body += text(x(z), 192, `log = ${formatNumber(z)}`, { fill: C.white, size: 14, anchor: 'middle' });
    body += text(78, 323, '0', { size: 10, anchor: 'middle' }) + text(682, 323, formatNumber(maximum), { size: 10, anchor: 'middle' });
    const valueLabelX = Math.min(624, Math.max(140, ax(p.argument)));
    body += text(valueLabelX, 347, `argument = ${formatNumber(p.argument)}`, { fill: C.mint, anchor: 'middle', size: 13 });
    const spacing = exponentTicks.length > 1 ? exponentTicks[1] - exponentTicks[0] : 1;
    const factor = Math.exp(Math.log(p.base) * spacing);
    body += text(380, 381, p.base < 1 ? 'A larger exponent makes the argument smaller.' : `Each exponent step multiplies the argument${finite(factor) && factor > 0 ? ' by ' + formatNumber(factor) : ' by a fixed factor'}.`, { anchor: 'middle', size: 11 });
    const caption = `Drag the lower ruler’s green point to change the argument, or focus it and use arrow keys. The top ruler measures exponent with equal spacing; the lower ruler measures the actual argument with a linear scale. log base ${formatNumber(p.base)} of ${formatNumber(p.argument)} = ${formatNumber(z)}.${p.base < 1 ? ' Because the base is below one, exponent growth moves argument values toward zero.' : ' Equal exponent changes produce multiplicative argument growth.'}`;
    return frame(id, 'Logarithms connect equal exponent steps to multiplicative growth', body, caption,
      legend([['Exponent', C.cyan], ['Argument magnitude', C.mint], ...(baseline && baseline.status === 'valid' ? [['Pinned comparison', C.orange]] : [])]));
  }

  function graph(result, slug, id, baseline, reference) {
    const p = result.parameters;
    let domain, fn = x => Models.curveValue(slug, p, x);
    const peers = [baseline, reference].filter(r => r && r.status === 'valid');
    if (slug === 'function-composition') {
      const values = [];
      for (let i = 0; i <= 80; i++) {
        const x = -10 + i / 4;
        values.push(fn(x));
        peers.forEach(r => values.push(Models.curveValue(slug, r.parameters, x)));
      }
      const low = Math.min(0, ...values.filter(finite)), high = Math.max(0, ...values.filter(finite)), pad = Math.max(1, (high - low) * .12);
      domain = { xmin: -10, xmax: 10, ymin: low - pad, ymax: high + pad, yLabel: `${result.second}(${result.first}(x))` };
    } else {
      const maximum = Math.max(64, p.argument, ...peers.map(r => r.parameters.argument));
      const xmin = 0, xmax = maximum <= Number.MAX_VALUE / 1.15 ? maximum * 1.15 : maximum;
      const values = [];
      for (let i = 1; i <= 200; i++) {
        const x = xmax * (i / 200);
        values.push(fn(x));
        peers.forEach(r => values.push(Models.curveValue(slug, r.parameters, x)));
      }
      const low = Math.min(0, result.output, ...peers.map(r => r.output), ...values.filter(finite));
      const high = Math.max(0, result.output, ...peers.map(r => r.output), ...values.filter(finite));
      const pad = Math.max(1, (high - low) * .12);
      domain = { xmin, xmax, ymin: low - pad, ymax: high + pad, xLabel: 'argument x', yLabel: `log${formatNumber(p.base)}(x)` };
    }
    const plot = plotKit(id, domain);
    let body = tag(30, 33, slug === 'function-composition' ? 'THE COMPOSED CURVE' : 'THE LOGARITHM CURVE');
    body += text(730, 34, 'DRAG THE HIGHLIGHTED POINT ↔', { size: 10, anchor: 'end' });
    body += plot.grid;
    let path = samplePath(fn, plot, 360);
    // Log samples are geometric near zero, preserving detail for tiny positive arguments.
    if (slug === 'real-logarithm') {
      const lowerLog = Math.min(Math.log(p.argument), Math.log(domain.xmax) - 12), upperLog = Math.log(domain.xmax);
      path = '';
      for (let i = 0; i <= 420; i++) {
        const sx = Math.exp(lowerLog + (upperLog - lowerLog) * i / 420), sy = fn(sx);
        if (finite(sy)) path += (path ? ' L' : 'M') + n(plot.px(sx)) + ' ' + n(plot.py(sy));
      }
    }
    body += `<g ${plot.clip}>${curve(path, C.mint, `class="visual-curve" data-quantity="${slug === 'function-composition' ? 'function:f function:g' : 'base function:logarithm'}"`)}`;
    if (baseline && baseline.status === 'valid') body += curve(samplePath(x => Models.curveValue(slug, baseline.parameters, x), plot, 360), C.orange, 'stroke-dasharray="5 5" stroke-opacity=".65"');
    const x = slug === 'function-composition' ? p.x : p.argument, y = result.output;
    body += line(plot.px(x), plot.py(y), plot.px(x), plot.py(0), C.cyan, `data-quantity="${slug === 'function-composition' ? 'x' : 'argument'}" stroke-dasharray="4 5" stroke-opacity=".6"`);
    body += line(plot.px(0), plot.py(y), plot.px(x), plot.py(y), C.cyan, 'data-quantity="output" stroke-dasharray="4 5" stroke-opacity=".6"') + '</g>';
    const drag = slug === 'function-composition'
      ? { key: 'x', value: p.x, min: -10, max: 10, x0: plot.px(-10), x1: plot.px(10), step: .1, label: 'Input x on the composed curve. Drag horizontally or use arrow keys.' }
      : { key: 'argument', value: p.argument, min: Math.min(.125, p.argument), max: domain.xmax, x0: plot.px(Math.min(.125, p.argument)), x1: plot.px(domain.xmax), step: .125, label: 'Logarithm argument on the curve. Drag horizontally or use arrow keys.' };
    body += point(plot, x, y, C.mint, `(${formatNumber(x)}, ${formatNumber(y)})`, x > (domain.xmin + domain.xmax) / 2 ? -14 : 14, drag, `${slug === 'function-composition' ? 'x' : 'argument'} output`);
    if (baseline && baseline.status === 'valid') {
      const bx = slug === 'function-composition' ? baseline.parameters.x : baseline.parameters.argument;
      body += point(plot, bx, baseline.output, C.orange, 'pinned', -14);
    }
    body += text(30, 383, `x ∈ [${formatNumber(domain.xmin)}, ${formatNumber(domain.xmax)}]     y ∈ [${formatNumber(domain.ymin)}, ${formatNumber(domain.ymax)}]`, { size: 11 });
    return frame(id, slug === 'function-composition' ? 'The selected function composition on coordinate axes' : 'A real logarithm on coordinate axes', body,
      `Drag the highlighted point horizontally, or focus it and use arrow keys. The point is (${formatNumber(x)}, ${formatNumber(y)}). Axes use the labeled linear scales; the visible range fits the current and comparison functions.`,
      legend([['Current function', C.mint], ['Coordinate projection', C.cyan], ...(baseline && baseline.status === 'valid' ? [['Pinned comparison', C.orange]] : [])]));
  }

  function compactScene(markup, slug) {
    // Keep the same physical geometry and accessible description on small
    // screens. Promote primary labels and remove repeated footer annotations;
    // the surrounding native HTML readout carries the detailed live values.
    return markup.replace('<figure class="visualization-frame">', '<figure class="visualization-frame" data-compact="true">').replace(/<text\b[^>]*>[\s\S]*?<\/text>/g, tagMarkup => {
      const x = Number((tagMarkup.match(/\bx="([^"]+)"/) || [])[1]);
      const y = Number((tagMarkup.match(/\by="([^"]+)"/) || [])[1]);
      const size = Number((tagMarkup.match(/font-size="([^"]+)"/) || [])[1]);
      if (y >= 375 || (x >= 700 && y < 45)) return '';
      let next = size < 12 ? 16 : size < 16 ? 20 : size < 23 ? 25 : 34;
      if (y <= 40) next = 16;
      if (x < 64 && y > 75) next = Math.min(next, 14);
      if (slug === 'derivative' && x >= 520) next = size >= 23 ? 29 : size < 11 ? 14 : 16;
      if (slug === 'real-logarithm' && y === 65) next = 25;
      if (slug === 'real-logarithm' && y === 174) next = 12;
      if (x === 380 && y === 274) next = 14;
      if (slug === 'derivative' && y === 145 && x > 500) tagMarkup = tagMarkup.replace(/>[^<]*<\/text>$/, '>Equal x/y units · zoomed</text>');
      return tagMarkup.replace(/font-size="[^"]+"/, `font-size="${next}"`).replace('THE LOCAL TRIANGLE', 'LOCAL ZOOM');
    });
  }

  function render(slug, params, options = {}) {
    if (Everyday?.has(slug)) return Everyday.render(slug, params, options);
    const { id = 'stage', view = 'geometry', baseline = null, reference = null, compact = false } = options;
    const safeId = uid(id), result = Models.evaluate(slug, params);
    const pin = baseline ? Models.evaluate(slug, baseline) : null;
    const ref = reference ? Models.evaluate(slug, reference) : null;
    let markup;
    if (result.status === 'invalid_parameters' || (slug !== 'derivative' && result.status !== 'valid')) markup = invalid(safeId, result);
    else if (slug === 'derivative') markup = derivative(result, safeId, pin, ref, view === 'graph');
    else if (view === 'graph') markup = graph(result, slug, safeId, pin, ref);
    else if (slug === 'function-composition') markup = composition(result, safeId, pin, ref);
    else markup = logGeometry(result, safeId, pin, ref);
    return compact ? compactScene(markup, slug) : markup;
  }

  return Object.freeze({ render, formatNumber, areaGeometry });
});
