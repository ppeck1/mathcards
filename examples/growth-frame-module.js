/* A standalone local module: register once, let the shared host own every
   control, motion follower, reading pace, animation frame, and DOM listener. */
(function (root) {
  'use strict';
  const id = 'growth-frame-sandbox';
  const escape = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
  const number = value => Number(value.toFixed(5));
  const display = value => String(Number(value.toPrecision(6)));

  function validateParams(input) {
    const errors = [];
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
      return { valid: false, parameters: {}, errors: [{ field: 'parameters', message: 'Use a parameter object.' }], warnings: [] };
    }
    for (const key of Object.keys(input)) if (key !== 'q') errors.push({ field: key, message: 'Unknown parameter.' });
    const q = Object.hasOwn(input, 'q') ? input.q : 2;
    if (!Number.isFinite(q) || q < 0 || q > 8) errors.push({ field: 'q', message: 'Use a side length from 0 to 8.' });
    return { valid: errors.length === 0, parameters: { q }, errors, warnings: [] };
  }
  function evaluate(input) {
    const checked = validateParams(input);
    return { ...checked, status: checked.valid ? 'valid' : 'invalid_parameters', output: checked.valid ? checked.parameters.q ** 2 : null, unit: 'square units' };
  }
  function render(parameters, context = {}) {
    const result = evaluate(parameters);
    const scope = 'growth-frame-' + String(context.id || context.slot || 'example').replace(/[^A-Za-z0-9_-]/g, '-');
    const title = 'Side length grows into square area';
    const caption = 'A fixed scale: one side unit is 20 pixels; one square unit is 400 square pixels. Drag the cyan handle or use arrow keys.';
    const label = (x, y, content, color = '#a6bac7', size = 15, attributes = '') => `<text x="${x}" y="${y}" fill="${color}" font-size="${size}" ${attributes}>${escape(content)}</text>`;
    let content;
    if (!result.valid) {
      content = label(50, 170, 'This side length is outside the module range.', '#ffb08a', 22) + label(50, 210, 'Choose a finite value from 0 to 8.');
    } else {
      const q = result.parameters.q, side = Math.sqrt(result.output) * 20, left = 110, bottom = 300;
      const grid = Array.from({ length: 9 }, (_, index) => {
        const offset = index * 20;
        return `<path d="M${left + offset} 140V${bottom}M${left} ${140 + offset}H270" fill="none" stroke="#2a4050" stroke-width="1"/>`;
      }).join('');
      const baseline = context.baseline && evaluate(context.baseline);
      const pinned = baseline?.valid ? `<rect data-role="pinned-square" x="${left}" y="${number(bottom - baseline.parameters.q * 20)}" width="${number(baseline.parameters.q * 20)}" height="${number(baseline.parameters.q * 20)}" fill="none" stroke="#ffb08a" stroke-width="2" stroke-dasharray="6 4"/>` : '';
      content = label(40, 42, 'A NEW MODULE · THE SAME PLAYGROUND', '#c6f276', 14) +
        label(40, 74, 'Side length → square area', '#f0f7f6', 27) +
        label(110, 117, '20 pixels per unit · fixed scale', '#a6bac7', 13) + grid + pinned +
        `<g data-story-part="output" data-quantity="output"><rect data-role="growth-square" data-area="${number(result.output)}" x="${left}" y="${number(bottom - side)}" width="${number(side)}" height="${number(side)}" fill="url(#${scope}-fill)" stroke="#77d8e8" stroke-width="2"/></g>` +
        `<g data-story-part="input" data-quantity="q"><path d="M${left} 325H${number(left + side)}M${left} 320V330M${number(left + side)} 320V330" fill="none" stroke="#77d8e8" stroke-width="2"/>` +
        label(110, 355, 'q = ' + display(q) + ' units', '#77d8e8', 17) +
        `<circle class="scene-handle" data-role="side-handle" data-drag-param="q" data-drag-min="0" data-drag-max="8" data-drag-x0="110" data-drag-x1="270" data-drag-step="0.1" data-drag-mode="absolute" role="slider" tabindex="0" aria-label="Square side length q" aria-valuemin="0" aria-valuemax="8" aria-valuenow="${q}" aria-valuetext="${escape(display(q))} units" cx="${number(left + side)}" cy="${bottom}" r="9" fill="#77d8e8" stroke="#f0f7f6" stroke-width="2"/></g>` +
        label(380, 154, 'THE CALCULATION', '#a6bac7', 13) +
        label(380, 201, display(q) + ' × ' + display(q), '#f0f7f6', 34) +
        label(380, 259, '= ' + display(result.output), '#c6f276', 44, 'data-story-part="output" data-quantity="output"') +
        label(380, 290, 'square units', '#a6bac7', 16) +
        label(380, 343, 'Twice the side → four times the area.', '#f0f7f6', 15);
    }
    return `<figure class="visualization-frame"${context.compact ? ' data-compact="true"' : ''}><svg class="visual-scene" viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="group" aria-labelledby="${scope}-title ${scope}-description"><title id="${scope}-title">${title}</title><desc id="${scope}-description">${caption}</desc><defs><linearGradient id="${scope}-fill" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#77d8e8" stop-opacity=".15"/><stop offset="1" stop-color="#c6f276" stop-opacity=".7"/></linearGradient></defs><rect width="760" height="420" rx="20" fill="#101e2b"/><g font-family="system-ui,sans-serif">${content}</g></svg><figcaption class="visual-caption">${caption}</figcaption></figure>`;
  }

  root.AtlasModules.register({
    id, version: '1', title: 'Growth frame · standalone module',
    expression: 'A = q²', unit: 'square units',
    defaults: () => ({ q: 2 }), validateParams, evaluate,
    controls: [{ key: 'q', label: 'Side length q', type: 'number', min: 0, max: 8, step: .1, unit: 'units' }],
    sweeps: [{ key: 'q', label: 'Side length q', min: 0, max: 8 }], primarySweep: 'q',
    views: [{ id: 'geometry', label: '◈ Square area', render }], defaultView: 'geometry',
    presets: [
      { id: 'zero', label: 'Zero area', parameters: { q: 0 } },
      { id: 'unit', label: 'Unit square', parameters: { q: 1 } },
      { id: 'four', label: 'Side 4', parameters: { q: 4 } },
      { id: 'eight', label: 'Side 8', parameters: { q: 8 } }
    ],
    experiments: [],
    setting: 'A square with side q between 0 and 8 units. Every panel uses the same fixed scale.',
    limits: 'The square area is q². Zero collapses the square to a point. This developer example is outside the canonical reviewed-card catalog.',
    readout(parameters, result, { format }) {
      return {
        expression: format(parameters.q) + ' × ' + format(parameters.q) + ' = ' + format(result.output) + ' square units',
        stats: [
          { label: 'SIDE LENGTH', value: parameters.q, note: 'units · the input' },
          { label: 'SQUARE AREA', value: result.output, note: 'square units · the output' }
        ],
        insight: 'The square’s side follows q, and its area follows q². Independent panels can share the same fixed scale.'
      };
    },
    canInterpolate: (from, to) => evaluate(from).valid && evaluate(to).valid,
    referenceWeight: (_parameters, result) => Math.abs(result.output || 0)
  });
})(typeof globalThis !== 'undefined' ? globalThis : this);
