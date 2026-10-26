/* Topic-owned graph descriptions; the plot view owns SVG, axes, and handles. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./models.js') : root.AtlasModels, node ? require('./model-registry.js') : root.AtlasModelRegistry, node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasModuleGraphs = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Models, Providers, Plot) {
  'use strict';
  const COLOR = Object.freeze({ gold: '#f5cf78', cyan: '#77d8e8', violet: '#b8a1ff', orange: '#ffb08a' });
  const TOPICS = Object.freeze({
    'integral-accumulation': {
      quantity: 'output distance',
      description: 'Distance accumulated from rest versus elapsed time. The same acceleration is held fixed along each curve; the gold point is the distance reached now.',
      notes: ['The curve shows distance, in metres. Geometry shows the velocity graph and its shaded area.']
    },
    'quadratic-optimization': {
      quantity: 'output area function:area',
      description: 'Garden area versus width, with the available fence held fixed. The gold point follows the same rectangle shown in Geometry.',
      notes: ['Other side = perimeter / 2 − width. This bounded width range keeps both sides positive.']
    },
    'complex-multiplication': {
      quantity: 'output realPart', secondary: { key: 'imagPart', label: 'Product’s imaginary component', quantity: 'imagPart' },
      description: 'The real and imaginary components of the product (2 + i)(a + bi), as the multiplier’s imaginary component b varies. Its real component a stays fixed.',
      notes: ['Gold is the real component 2a − b; violet is the imaginary component a + 2b. Geometry shows the arrows in the complex plane.']
    },
    'bayes-theorem': {
      quantity: 'output posterior',
      description: 'Defect probability among flagged parts versus the defect share before testing. Detection and false flag chances remain fixed along each curve.',
      notes: ['Probabilities are fractions from 0 to 1. Geometry shows how true positives and false alarms make the flagged group.']
    },
    'graph-theory': {
      quantity: 'output', anchors: [3],
      description: 'Shortest route time versus the bridge’s travel time. This relationship graph complements the network diagram in Geometry.',
      notes: ['At bridge time 3 minutes, two routes tie at 8 minutes. The shortest time stays continuous while the chosen route switches.']
    },
    resonance: {
      quantity: 'output function:response', samples: 2000,
      description: 'Steady state response amplitude versus drive frequency ratio, with damping held fixed. The gold point matches the amplitude envelope in Geometry.',
      notes: ['This is a frequency response curve, not instantaneous motion. Positive damping keeps the peak finite.']
    },
    'chaos-theory': {
      quantity: 'output',
      description: 'Separation of two logistic paths versus generation. The starts differ only by the declared tiny difference, and both use the same growth parameter.',
      notes: ['Dots are the actual discrete iterates. Between them, the playhead linearly interpolates each population; the gap is the absolute difference of those interpolated values.', 'A gap can return to zero when the two displayed paths cross; divergence need not grow at every generation.']
    },
    'fractal-geometry': {
      quantity: 'output',
      description: 'The actual drawn Koch snowflake perimeter versus refinement playhead. Original side length stays fixed along each curve.',
      notes: ['Integer dots satisfy Pₙ = 3s(4/3)ⁿ. Between integer levels, the curve measures the continuously unfolding shape; it is not the integer identity extended to fractional n.']
    },
    'wave-interference': {
      quantity: 'output resultant',
      description: 'Resultant amplitude versus phase difference, with each wave’s amplitude held fixed. This graph follows the envelope, rather than a single point on the wave.',
      notes: ['Equal phase reinforces the waves. A phase difference of π cancels them; one full turn restores reinforcement.']
    },
    probability: {
      quantity: 'output',
      description: 'Expected successes in six independent trials versus the chance of success in each trial. The gold point matches the expectation shown in Geometry.',
      notes: ['The expected count 6p may be fractional. Geometry’s bars show probabilities of whole-number outcomes.']
    },
    'vector-rotation': {
      quantity: 'output x', secondary: { key: 'y', label: 'Vertical projection y', quantity: 'y' },
      description: 'Horizontal and vertical vector projections versus rotation angle, at a fixed vector length. Gold follows x; violet follows y.',
      notes: ['Angle uses degrees. Both projections share one length scale and return to their starting values after 360°.']
    },
    'pythagorean-theorem': {
      quantity: 'output',
      description: 'Hypotenuse length versus horizontal leg a, with the vertical leg b held fixed. The gold point follows the same right triangle shown in Geometry.',
      notes: ['Length c = √(a² + b²). Geometry’s attached squares measure areas; this graph measures the resulting length.']
    }
  });
  const has = id => typeof id === 'string' && Object.hasOwn(TOPICS, id);
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  function checked(id, parameters) {
    if (!has(id)) throw new RangeError('No relationship graph for module: ' + id);
    return Models.evaluate(id, parameters);
  }
  function pointAt(id, parameters, key, x, valueKey = 'output') {
    const result = Models.evaluate(id, { ...parameters, [key]: x });
    return { x, y: result.valid && Number.isFinite(result[valueKey]) ? result[valueKey] : null };
  }
  function regularPoints(id, parameters, axis, topic, valueKey = 'output') {
    const count = topic.samples || 240;
    const xs = Array.from({ length: count + 1 }, (_, i) => axis.min + (axis.max - axis.min) * i / count);
    for (const x of topic.anchors || []) if (x >= axis.min && x <= axis.max) xs.push(x);
    return [...new Set(xs)].sort((a, b) => a - b).map(x => pointAt(id, parameters, axis.key, x, valueKey));
  }
  function withCurrent(points, id, parameters, axis, valueKey) {
    const x = parameters[axis.key];
    if (points.some(point => point.x === x)) return points;
    return [...points, pointAt(id, parameters, axis.key, x, valueKey)].sort((a, b) => a.x - b.x);
  }
  function chaosPoints(result) {
    const points = [];
    for (let i = 0; i < result.orbitA.length; i++) {
      const gap = result.orbitA[i] - result.orbitB[i];
      if (i) {
        const previous = result.orbitA[i - 1] - result.orbitB[i - 1];
        if (previous * gap < 0) points.push({ x: i - 1 + previous / (previous - gap), y: 0 });
      }
      points.push({ x: i, y: Math.abs(gap) });
    }
    return points;
  }
  function describe(id, parameters, options = {}) {
    const result = checked(id, parameters), topic = TOPICS[id], meta = Providers.specs(id);
    if (!result.valid) return { valid: false, title: meta.title + ' · relationship graph', description: result.errors.map(error => error.message).join(' '), errors: result.errors };
    const p = result.parameters, axis = Providers.controls(id).find(control => control.key === meta.axis);
    const candidate = options.baseline ? Models.evaluate(id, options.baseline) : null, pin = candidate?.valid ? candidate : null;
    const series = [], current = [], boundValues = [];
    const entries = [{ result, prefix: '', color: COLOR.gold, dashed: false }, ...(pin ? [{ result: pin, prefix: 'Pinned ', color: COLOR.orange, dashed: true }] : [])];
    for (const entry of entries) {
      const values = entry.result.parameters, prefix = entry.prefix;
      const fixed = id === 'chaos-theory' ? chaosPoints(entry.result) : regularPoints(id, values, axis, topic);
      boundValues.push(...fixed.map(point => point.y).filter(Number.isFinite));
      // Bounds use a fixed sample set, so dragging the primary marker cannot rescale the axes.
      const points = id === 'chaos-theory' ? fixed : withCurrent(fixed, id, values, axis, 'output');
      series.push({ id: prefix ? 'pinned-output' : 'output', label: prefix + meta.primaryLabel, color: entry.color, quantity: topic.quantity, points, dashed: entry.dashed });
      current.push({ label: prefix + meta.primaryLabel, x: values[axis.key], y: entry.result.output, color: entry.color, quantity: axis.key + ' ' + topic.quantity, draggable: !prefix });
      if (id === 'chaos-theory' || id === 'fractal-geometry') {
        const dots = id === 'chaos-theory' ? fixed.filter(point => Number.isInteger(point.x)) : Array.from({ length: 6 }, (_, depth) => pointAt(id, values, axis.key, depth));
        series.push({ id: prefix ? 'pinned-iterations' : 'iterations', label: prefix + (id === 'chaos-theory' ? 'Integer generations' : 'Completed refinement levels'), color: entry.color, quantity: id === 'fractal-geometry' ? 'completedDepth output' : topic.quantity, points: dots, dots: true, dashed: entry.dashed });
      }
      if (topic.secondary) {
        const secondary = topic.secondary, otherFixed = regularPoints(id, values, axis, topic, secondary.key);
        boundValues.push(...otherFixed.map(point => point.y).filter(Number.isFinite));
        const color = prefix ? COLOR.orange : COLOR.violet;
        series.push({ id: prefix ? 'pinned-' + secondary.key : secondary.key, label: prefix + secondary.label, color, quantity: secondary.quantity, points: withCurrent(otherFixed, id, values, axis, secondary.key), dashed: entry.dashed });
        current.push({ label: prefix + secondary.label, x: values[axis.key], y: entry.result[secondary.key], color, quantity: axis.key + ' ' + secondary.quantity, draggable: false });
      }
    }
    const low = Math.min(0, ...boundValues), high = Math.max(0, ...boundValues), span = high - low || 1;
    const y = { label: topic.secondary ? (id === 'vector-rotation' ? 'Projection length (m)' : 'Product components') : meta.primaryLabel + (meta.unit ? ' (' + meta.unit + ')' : ''), min: low < 0 ? low - span * .06 : 0, max: high + span * .08 };
    if (id === 'bayes-theorem') { y.min = 0; y.max = 1; }
    return {
      valid: true, title: meta.title + ' · relationship graph', description: topic.description,
      x: { key: axis.key, label: axis.label, min: axis.min, max: axis.max, step: axis.step, value: p[axis.key], unit: axis.unit || '' },
      y, series, current,
      notes: [...topic.notes, ...(pin ? ['Dashed orange is your pinned parameter set; both states use the same axes.'] : [])]
    };
  }
  function invalidFrame(spec, options) {
    const id = 'module-graph-' + String(options.id || options.slot || 'stage').replace(/[^A-Za-z0-9_-]/g, '-');
    return `<figure class="visualization-frame relationship-frame"${options.compact ? ' data-compact="true"' : ''}><svg class="visual-scene relationship-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(spec.title)}</title><desc id="${id}-description">${esc(spec.description)}</desc><rect width="760" height="420" rx="20" fill="#101e2b"/><g font-family="Inter,system-ui,sans-serif" text-anchor="middle"><text x="380" y="160" fill="#ffb08a" font-size="42">∅</text><text x="380" y="219" fill="#f0f7f6" font-size="19">Check the variable values</text><text x="380" y="251" fill="#98afbd" font-size="12">The input is outside this model’s declared range.</text></g></svg><figcaption class="visual-caption">${esc(spec.description)}</figcaption></figure>`;
  }
  function render(id, parameters, options = {}) {
    const spec = describe(id, parameters, options);
    return spec.valid ? Plot.render(spec, options) : invalidFrame(spec, options);
  }
  return Object.freeze({ has, describe, render });
});
