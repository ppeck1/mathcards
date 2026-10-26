/* A model-independent relationship graph. The playground owns every interaction. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPlotView = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const C = Object.freeze({ navy:'#111e2b', cyan:'#77d8e8', mint:'#c6f276', gold:'#f2ca76', violet:'#b6a3f0', orange:'#ffb08a', white:'#f3f8fb', muted:'#91a5b5', grid:'#294050' });
  const colors = [C.mint, C.cyan, C.gold, C.violet, C.orange];
  const R = Object.freeze({ x:82, y:84, width:636, height:242 });
  const finite = Number.isFinite;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[character]);
  const coordinate = value => Number(value.toFixed(3));
  // Encode, rather than drop, punctuation so separately named slots retain separate IDs.
  const scope = value => 'atlas-plot-' + Array.from(String(value ?? 'relationship')).map(character => /^[A-Za-z0-9-]$/.test(character) ? character : '_' + character.codePointAt(0).toString(16) + '_').join('');
  function color(value, index = 0) {
    if (Object.prototype.hasOwnProperty.call(C, value)) return C[value];
    return typeof value === 'string' && /^#(?:[\da-f]{3}|[\da-f]{4}|[\da-f]{6}|[\da-f]{8})$/i.test(value) ? value : colors[index % colors.length];
  }
  function number(value) {
    if (!finite(value)) return '';
    if (Object.is(value, -0) || value === 0) return '0';
    return Number(value.toPrecision(4)).toString().replace('e+', 'e');
  }
  function shortLabel(value, maximum) {
    const characters = Array.from(String(value));
    return characters.length <= maximum ? characters.join('') : characters.slice(0, maximum - 1).join('') + '…';
  }
  function axisNumber(value, compact) {
    if (!compact) return number(value);
    if (!finite(value)) return '';
    if (value === 0) return '0';
    if (Math.abs(value) < .001) return value.toExponential(0).replace('e+', 'e');
    const [mantissa, exponent] = value.toPrecision(3).split('e');
    return Number(mantissa).toString() + (exponent === undefined ? '' : 'e' + Number(exponent));
  }
  function text(x, y, value, options = {}) {
    return `<text x="${coordinate(x)}" y="${coordinate(y)}" fill="${options.color || C.muted}" font-size="${options.size || 12}"${options.anchor ? ` text-anchor="${options.anchor}"` : ''}${options.weight ? ` font-weight="${options.weight}"` : ''}${options.fullLabel ? ` aria-label="${esc(options.fullLabel)}"` : ''}>${esc(value)}</text>`;
  }
  function line(x1, y1, x2, y2, stroke, extra = '') {
    return `<line x1="${coordinate(x1)}" y1="${coordinate(y1)}" x2="${coordinate(x2)}" y2="${coordinate(y2)}" stroke="${stroke}" ${extra}/>`;
  }
  function validAxis(axis) {
    return axis && finite(axis.min) && finite(axis.max) && axis.max > axis.min;
  }
  // Dividing the endpoints first also supports finite bounds whose subtraction overflows.
  function fraction(value, low, high) {
    const span = high - low, difference = value - low;
    return finite(span) && finite(difference) ? difference / span : (value / 2 - low / 2) / (high / 2 - low / 2);
  }
  function interpolate(low, high, t) {
    return t === 0 ? low : t === 1 ? high : low * (1 - t) + high * t;
  }
  function frame(id, title, description, body, caption, legend, compact, interactive = false) {
    return `<figure class="visualization-frame relationship-graph${compact ? ' relationship-graph-compact' : ''}"><svg class="visual-scene" viewBox="0 0 760 420" role="${interactive ? 'group' : 'img'}" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(description)}</desc><rect width="760" height="420" rx="20" fill="${C.navy}"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption>${legend ? `<div class="visual-legend">${legend}</div>` : ''}</figure>`;
  }
  function unavailable(spec, id, compact) {
    const title = typeof spec?.title === 'string' ? spec.title : 'Relationship graph';
    const reason = 'This graph needs finite, increasing horizontal and vertical bounds.';
    const body = text(34, 34, compact ? shortLabel(title, 43) : title, {color:C.white,size:compact ? 30 : 22,weight:650}) + text(380, 202, 'Graph unavailable for this range', {color:C.gold,size:compact ? 28 : 22,anchor:'middle'}) + text(380, 232, 'Choose a valid range to explore the relationship.', {size:compact ? 24 : 15,anchor:'middle'});
    return frame(id, title, reason, body, reason, '', compact);
  }
  /**
   * Render inert SVG markup. Invalid bounds produce a readable fallback.
   * dots:true draws discrete samples; dots:'both' adds samples to a continuous line.
   * Nonfinite samples are gaps, never interpolated connections.
   */
  function render(spec, options = {}) {
    const id = scope(options.id), compact = Boolean(options.compact);
    if (!validAxis(spec?.x) || !validAxis(spec?.y)) return unavailable(spec, id, compact);
    const title = spec.title || 'Relationship graph';
    const description = spec.description || 'The horizontal variable changes the vertical result.';
    const px = value => R.x + fraction(value, spec.x.min, spec.x.max) * R.width;
    const py = value => R.y + R.height - fraction(value, spec.y.min, spec.y.max) * R.height;
    const point = value => {
      if (!value || !finite(value.x) || !finite(value.y)) return null;
      const x = px(value.x), y = py(value.y);
      return finite(x) && finite(y) ? { x, y } : null;
    };
    let body = text(34, 34, compact ? shortLabel(title, 43) : title, {color:C.white,size:compact ? 30 : 22,weight:650});
    const yLabel = spec.y.label || 'Result';
    body += text(R.x, 65, compact ? shortLabel(yLabel, 42) : yLabel, {color:C.mint,size:compact ? 28 : 18,fullLabel:compact ? yLabel : undefined});
    body += `<defs><clipPath id="${id}-clip"><rect x="${R.x}" y="${R.y}" width="${R.width}" height="${R.height}"/></clipPath></defs>`;
    body += `<rect x="${R.x}" y="${R.y}" width="${R.width}" height="${R.height}" rx="4" fill="${C.white}" fill-opacity=".018" stroke="${C.grid}"/>`;
    const intervals = compact ? 2 : 4;
    for (let index = 0; index <= intervals; index++) {
      const t = index / intervals, x = R.x + t * R.width, y = R.y + R.height - t * R.height;
      body += line(x, R.y, x, R.y + R.height, C.grid, 'stroke-opacity=".65"');
      body += text(x, 348, axisNumber(interpolate(spec.x.min, spec.x.max, t), compact), {anchor:'middle',size:compact ? 26 : 16});
      body += line(R.x, y, R.x + R.width, y, C.grid, 'stroke-opacity=".65"');
      body += text(R.x - 12, y + 4, axisNumber(interpolate(spec.y.min, spec.y.max, t), compact), {anchor:'end',size:compact ? 26 : 16});
    }
    if (spec.x.min <= 0 && spec.x.max >= 0) body += line(px(0), R.y, px(0), R.y + R.height, C.muted, 'data-role="zero-x" stroke-opacity=".55"');
    if (spec.y.min <= 0 && spec.y.max >= 0) body += line(R.x, py(0), R.x + R.width, py(0), C.muted, 'data-role="zero-y" stroke-opacity=".55"');
    const xLabel = (spec.x.label || spec.x.key || 'Input') + (spec.x.unit ? ` (${spec.x.unit})` : '');
    body += text(R.x + R.width / 2, 381, compact ? shortLabel(xLabel, 42) : xLabel, {color:C.cyan,size:compact ? 28 : 18,anchor:'middle',fullLabel:compact ? xLabel : undefined});
    const series = Array.isArray(spec.series) ? spec.series : [];
    const legendItems = [];
    body += `<g clip-path="url(#${id}-clip)">`;
    series.forEach((item, index) => {
      if (!item || typeof item !== 'object') return;
      const stroke = color(item.color, index), label = item.label || item.id || `Relationship ${index + 1}`;
      const quantity = esc(item.quantity || ''), name = esc(item.id ?? `series-${index + 1}`);
      const metadata = `data-series="${name}" data-label="${esc(label)}" data-quantity="${quantity}"`;
      const points = Array.isArray(item.points) ? item.points : [];
      let path = '', connected = false, dots = '';
      points.forEach(sample => {
        const projected = point(sample);
        if (!projected) { connected = false; return; }
        path += `${connected ? 'L' : 'M'}${coordinate(projected.x)} ${coordinate(projected.y)} `;
        connected = true;
        if (item.dots) dots += `<circle data-role="sample-point" data-x="${sample.x}" data-y="${sample.y}" cx="${coordinate(projected.x)}" cy="${coordinate(projected.y)}" r="3" fill="${stroke}"/>`;
      });
      if (item.dots !== true && path) body += `<path ${metadata} d="${path.trim()}" fill="none" stroke="${stroke}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"${item.dashed ? ' stroke-dasharray="7 5"' : ''}/>`;
      if (dots) body += `<g ${metadata}>${dots}</g>`;
      legendItems.push(`<span><i style="background:${stroke}${item.dashed ? ';border-top:2px dashed currentColor;height:0' : ''}" aria-hidden="true"></i>${esc(label)}${item.dashed ? ' · dashed' : ''}</span>`);
    });
    let draggableUsed = false;
    const current = Array.isArray(spec.current) ? spec.current : [];
    current.forEach((item, index) => {
      const projected = point(item);
      if (!projected) return;
      const stroke = color(item.color, index), quantity = String(item.quantity || spec.x.key || '');
      const draggable = !draggableUsed && item.draggable && typeof spec.x.key === 'string' && spec.x.key.length > 0;
      const label = item.label || 'Current value';
      if (draggable) {
        draggableUsed = true;
        const step = finite(spec.x.step) && spec.x.step > 0 ? spec.x.step : (spec.x.max / 100 - spec.x.min / 100);
        const keys = Array.from(new Set((spec.x.key + ' ' + quantity).split(/\s+/).filter(Boolean))).join(' ');
        body += `<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-quantity="${esc(keys)}" data-drag-param="${esc(spec.x.key)}" data-drag-min="${spec.x.min}" data-drag-max="${spec.x.max}" data-drag-x0="${R.x}" data-drag-x1="${R.x + R.width}" data-drag-step="${step}" aria-label="${esc(label + '. Drag horizontally or use arrow keys to change ' + (spec.x.label || spec.x.key) + '.')}" aria-orientation="horizontal" aria-valuemin="${spec.x.min}" aria-valuemax="${spec.x.max}" aria-valuenow="${item.x}" aria-valuetext="${esc(number(item.x) + (spec.x.unit ? ' ' + spec.x.unit : ''))}">`;
      } else body += `<g data-quantity="${esc(quantity)}">`;
      body += line(projected.x, R.y + R.height, projected.x, projected.y, stroke, 'stroke-opacity=".35" stroke-dasharray="3 5"');
      body += line(R.x, projected.y, projected.x, projected.y, stroke, 'stroke-opacity=".35" stroke-dasharray="3 5"');
      if (draggable) body += `<circle class="scene-handle-hit" cx="${coordinate(projected.x)}" cy="${coordinate(projected.y)}" r="22" fill="transparent" pointer-events="all"/><circle class="scene-handle-ring" cx="${coordinate(projected.x)}" cy="${coordinate(projected.y)}" r="13" fill="${stroke}" fill-opacity=".12" stroke="${stroke}" stroke-opacity=".5"/>`;
      body += `<circle data-role="current-point" data-label="${esc(label)}" data-x="${item.x}" data-y="${item.y}" data-quantity="${esc(quantity)}" cx="${coordinate(projected.x)}" cy="${coordinate(projected.y)}" r="5" fill="${stroke}" stroke="${C.navy}" stroke-width="2"><title>${esc(label)}</title></circle></g>`;
    });
    body += '</g>';
    const hint = draggableUsed ? 'Drag the highlighted point ↔ · arrow keys also work' : 'Read across from the input to the result';
    body += text(380, 406, hint, {anchor:'middle',size:compact ? 24 : 15});
    const notes = Array.isArray(spec.notes) ? spec.notes.filter(note => typeof note === 'string' && note.trim()) : [];
    const caption = [description, ...notes].join(' ');
    return frame(id, title, description, body, caption, legendItems.join(''), compact, draggableUsed);
  }
  return Object.freeze({ render });
});
