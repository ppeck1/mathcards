/* Scene-specific viewing tools. Camera state stays separate from mathematical state. */
(function (root, factory) {
  'use strict';
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./chaos-trace.js') : root.AtlasChaosTrace, node ? require('./fractal-lens.js') : root.AtlasFractalLens);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSceneInspector = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (ChaosTrace, FractalLens) {
  'use strict';
  const finite = Number.isFinite;
  const clamp = (value, low, high) => Math.min(high, Math.max(low, value));
  const supported = slug => slug === 'fractal-geometry' || slug === 'chaos-theory';
  const zoomFromLevel = value => Math.pow(3, finite(value) ? clamp(value, 0, 3) : 0);
  const levelFromZoom = value => Math.log(finite(value) ? clamp(value, 1, 27) : 1) / Math.log(3);
  const numberOrNull = value => finite(value) ? value : null;

  // Portable view state is data only. Unknown fields or accessors must never
  // turn a saved camera setting into an implicit adapter or program.
  function validateState(slug, state) {
    const invalid = message => ({ valid: false, state: null, errors: [{ field: 'inspector', message }] });
    if (state === null) return { valid: true, state: null, errors: [] };
    if (!state || typeof state !== 'object' || Array.isArray(state)) return invalid('Inspector state must be a plain record or null.');
    const prototype = Object.getPrototypeOf(state);
    if (prototype !== null && Object.getPrototypeOf(prototype) !== null) return invalid('Inspector state must be a plain record.');
    const expected = slug === 'fractal-geometry' ? ['kind', 'version', 'zoom', 'compare'] : slug === 'chaos-theory' ? ['kind', 'version', 'traceExpanded'] : [];
    const keys = Reflect.ownKeys(state);
    if (!expected.length || keys.length !== expected.length || keys.some(key => !expected.includes(key))) return invalid('This inspector state is unsupported by the module.');
    const values = {};
    for (const key of keys) {
      const descriptor = Object.getOwnPropertyDescriptor(state, key);
      if (!Object.hasOwn(descriptor, 'value') || !descriptor.enumerable) return invalid('Inspector state must contain ordinary data fields.');
      values[key] = descriptor.value;
    }
    if (values.version !== 1) return invalid('This inspector state version is unavailable.');
    if (slug === 'fractal-geometry') {
      if (values.kind !== 'fractal' || !finite(values.zoom) || values.zoom < 1 || values.zoom > 27 || typeof values.compare !== 'boolean') return invalid('Use a fractal zoom from 1 to 27 and an explicit comparison setting.');
      return { valid: true, state: { kind: 'fractal', version: 1, zoom: values.zoom, compare: values.compare }, errors: [] };
    }
    if (values.kind !== 'chaos' || typeof values.traceExpanded !== 'boolean') return invalid('Use an explicit chaos trace setting.');
    return { valid: true, state: { kind: 'chaos', version: 1, traceExpanded: values.traceExpanded }, errors: [] };
  }

  function chaosSnapshot(parameters, result) {
    const p = result?.parameters || parameters || {};
    const startA = numberOrNull(result?.startA ?? p.seed);
    const startB = numberOrNull(result?.startB ?? (finite(p.seed) && finite(p.delta) ? p.seed + p.delta : null));
    const initialGap = numberOrNull(result?.initialGap ?? (finite(p.delta) ? Math.abs(p.delta) : null));
    const currentGap = numberOrNull(result?.separation ?? result?.output);
    const amplification = numberOrNull(result?.amplification ?? (initialGap > 0 && currentGap !== null ? currentGap / initialGap : null));
    return Object.freeze({ startA, startB, initialGap, currentGap, amplification });
  }

  function mount(host, options = {}) {
    const noop = Object.freeze({ viewOptions: () => ({}), getState: () => null, restoreState: state => validateState(options.slug, state), update() {}, settle() {}, destroy() {} });
    if (!host) return noop;
    if (!supported(options.slug)) { host.hidden = true; return noop; }
    const Readable = options.readable || globalThis.AtlasReadableValues;
    const Models = options.models || globalThis.AtlasModels;
    const Motion = options.motion || globalThis.AtlasMotion;
    if (!Readable?.format || !Readable?.writeText || !Readable?.createPacer) throw new TypeError('The scene inspector needs readable values.');
    const doc = host.ownerDocument || globalThis.document;
    const zoomPacer = Readable.createPacer(), statsPacer = Readable.createPacer();
    const cleanup = [];
    let disposed = false, restoring = false, displayedZoom = 1, targetZoom = 1, compareRepeats = false, traceExpanded = false, latestParameters = {}, follower = null;
    const reduced = () => typeof options.reducedMotion === 'function' ? options.reducedMotion() : !!options.reducedMotion;
    function element(tag, className, text) {
      const node = doc.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }
    function listen(node, event, handler) { node.addEventListener(event, handler); cleanup.push(() => node.removeEventListener(event, handler)); }
    function button(label, key, handler) {
      const node = element('button', 'scene-inspector-button', label);
      node.type = 'button'; node.setAttribute('data-inspector-action', key);
      listen(node, 'click', handler);
      return node;
    }
    host.replaceChildren(); host.hidden = false;
    host.classList.add('scene-inspector'); host.setAttribute('data-scene-inspector', options.slug);
    const heading = element('p', 'scene-inspector-heading', options.slug === 'fractal-geometry' ? 'Follow the repeating edge' : 'Two starts. One shared rule.');
    host.append(heading);

    let paintZoom = () => {}, updateMath = () => {}, restoreUI = () => {};
    if (options.slug === 'fractal-geometry') {
      const row = element('div', 'scene-inspector-zoom-row');
      const out = button('−', 'zoom-out', () => changeZoom(zoomFromLevel(levelFromZoom(targetZoom) - 1)));
      out.setAttribute('aria-label', 'Zoom out one repeating level');
      const zoomControl = element('label', 'scene-inspector-zoom-control');
      const caption = element('span', 'scene-inspector-zoom-caption', 'Zoom');
      const output = element('output', 'scene-inspector-zoom-value', '1×');
      output.setAttribute('data-lens-value', ''); output.setAttribute('aria-live', 'off');
      const slider = element('input', 'scene-inspector-zoom-range');
      slider.type = 'range'; slider.min = '0'; slider.max = '3'; slider.step = '.01'; slider.value = '0';
      slider.setAttribute('data-lens-zoom', ''); slider.setAttribute('aria-label', 'Fractal camera zoom');
      const plus = button('+', 'zoom-in', () => changeZoom(zoomFromLevel(levelFromZoom(targetZoom) + 1)));
      plus.setAttribute('aria-label', 'Zoom in one repeating level');
      caption.append(output); zoomControl.append(caption, slider); row.append(out, zoomControl, plus);
      const actions = element('div', 'scene-inspector-actions');
      const reset = button('Reset view', 'reset-view', () => changeZoom(1));
      const refine = button('Refine to level 5', 'refine', () => options.onParameters?.({ depth: 5 }));
      const compare = button('Compare repeating edges', 'compare-repeats', () => {
        compareRepeats = !compareRepeats;
        compare.setAttribute('aria-pressed', String(compareRepeats));
        options.onViewChange?.();
      });
      compare.setAttribute('aria-pressed', 'false');
      actions.append(reset, refine, compare);
      const scale = element('p', 'scene-inspector-scale', 'Repeated edge: 1 / 3⁰ = 1 of the original length.');
      scale.setAttribute('data-lens-scale', '');
      const depth = element('p', 'scene-inspector-depth', 'Finite outline: awaiting refinement level.');
      depth.setAttribute('data-lens-depth', '');
      const note = element('p', 'scene-inspector-note', 'Zoom follows the first third of the top edge. At 3×, 9× and 27×, look for the same motif. Zoom leaves refinement unchanged.');
      const about=element('details','scene-inspector-about'),summary=element('summary','','About the zoom');about.append(summary,depth,note);
      host.append(row, scale, actions, about);
      const syncControls = () => {
        slider.value = String(levelFromZoom(targetZoom));
        slider.setAttribute('aria-valuetext', `${Readable.format(targetZoom, { settled: true, precision: 4 })} times magnification; refinement unchanged`);
        out.disabled = targetZoom <= 1; plus.disabled = targetZoom >= 27 - 1e-10; reset.disabled = targetZoom <= 1;
      };
      paintZoom = ({ settled = false, force = false } = {}) => {
        if (!zoomPacer.take({ settled, force })) return;
        const level = levelFromZoom(displayedZoom), integer = Math.abs(level - Math.round(level)) < 1e-8;
        const zoomText = Readable.format(displayedZoom, { settled, precision: settled ? 6 : 2 });
        const exponent = integer ? ['⁰', '¹', '²', '³'][Math.round(level)] : '^' + Readable.format(level, { settled, precision: settled ? 4 : 2 });
        Readable.writeText(output, zoomText + '×');
        Readable.writeText(scale, `Repeated edge: 1 / 3${exponent} ${integer ? '=' : '≈'} 1 / ${zoomText} of the original length.`);
      };
      function onFrame(state, meta = {}) {
        if (disposed) return;
        const before = displayedZoom;
        displayedZoom = finite(state.zoom) ? clamp(state.zoom, 1, 27) : 1;
        paintZoom(meta);
        if (displayedZoom !== before && !restoring) options.onViewChange?.();
      }
      follower = Motion?.createFollower ? Motion.createFollower({ initial: { zoom: 1 }, durationMs:90,maxSettleMs:450,reducedMotion: reduced, onFrame }) : {
        setTarget(state) { onFrame(state, { settled: true }); }, settle() { onFrame({ zoom: targetZoom }, { settled: true }); }, destroy() {}
      };
      function changeZoom(value) {
        if (disposed) return;
        targetZoom = finite(value) ? clamp(value, 1, 27) : 1;
        syncControls(); follower.setTarget({ zoom: targetZoom });
      }
      restoreUI = state => {
        targetZoom = state?.zoom ?? 1; displayedZoom = targetZoom; compareRepeats = state?.compare === true;
        compare.setAttribute('aria-pressed', String(compareRepeats)); syncControls();
        follower.setTarget({ zoom: targetZoom }, { immediate: true }); follower.settle();
        paintZoom({ settled: true, force: true });
      };
      listen(slider, 'input', () => changeZoom(zoomFromLevel(Number(slider.value))));
      updateMath = (parameters, settings = {}) => {
        const value = parameters.depth, valid = finite(value), complete = valid && value >= 5 - 1e-8;
        refine.disabled = !valid || complete; refine.hidden = complete;
        if (statsPacer.take(settings)) Readable.writeText(depth, valid ? `Finite outline: level ${Readable.format(value, settings)} of 5. Each completed level makes segments one third as long.` : 'Finite outline: refinement level unavailable.');
      };
      syncControls(); paintZoom({ settled: true });
    } else {
      const stats = element('dl', 'scene-inspector-stats');
      const values = {};
      for (const [key, title] of [['startA', 'Start A'], ['startB', 'Start B'], ['initialGap', 'Initial gap'], ['currentGap', 'Current gap'], ['amplification', 'Gap / initial gap']]) {
        const item = element('div', 'scene-inspector-stat'); item.setAttribute('data-chaos-quantity', key);
        const label = element('dt', '', title), value = element('dd', '', '—');
        value.setAttribute('data-chaos-value', key); item.append(label, value); stats.append(item); values[key] = value;
      }
      const note = element('p', 'scene-inspector-note', 'Both paths use the same rule and growth rate. Only the starting value changes; the gold gap measures how far apart they are now.');
      const Trace = options.chaosTrace || ChaosTrace;
      const replay = button('Replay divergence', 'replay-divergence', () => options.onReplay?.());
      replay.hidden = typeof options.onReplay !== 'function';
      const actions = element('div', 'scene-inspector-actions');
      const next = button('One generation →', 'next-generation', () => {
        const result = Models?.evaluate?.('chaos-theory', latestParameters);
        const snapshot = Trace?.snapshot(latestParameters, result);
        if (!snapshot?.valid || snapshot.atEnd) return;
        traceExpanded = true; traceDetails.open = true;
        options.onParameters?.({ generation: snapshot.nextTarget });
      });
      next.hidden = typeof options.onParameters !== 'function' || !Trace;
      actions.append(replay, next);
      const traceDetails = element('details', 'scene-inspector-iteration');
      traceDetails.setAttribute('data-chaos-trace-details', '');
      listen(traceDetails, 'toggle', () => {
        if (traceExpanded === traceDetails.open) return;
        traceExpanded = traceDetails.open;
        if (!restoring) options.onViewChange?.();
      });
      const traceSummary = element('summary', '', 'Follow one generation');
      const traceTitle = element('p', 'scene-inspector-iteration-title');
      traceTitle.setAttribute('data-chaos-interval', '');
      const traceRows = element('div', 'scene-inspector-iteration-rows'), traceValues = {};
      for (const id of ['A', 'B']) {
        const row = element('div', 'scene-inspector-iteration-row'); row.setAttribute('data-chaos-path', id);
        const title = element('strong', '', 'Path ' + id);
        const input = element('span', 'scene-inspector-iteration-value', '—');
        const expression = element('span', 'scene-inspector-iteration-formula', '—');
        const output = element('span', 'scene-inspector-iteration-value', '—');
        for (const [key, node] of Object.entries({ input, expression, output })) node.setAttribute('data-chaos-trace', id + '-' + key);
        row.append(title, input, expression, output); traceRows.append(row); traceValues[id] = { input, expression, output };
      }
      const gapStep = element('p', 'scene-inspector-iteration-gap', '—'); gapStep.setAttribute('data-chaos-trace-gap', '');
      const traceNote = element('p', 'scene-inspector-note'); traceNote.setAttribute('data-chaos-interval-note', '');
      traceDetails.append(traceSummary, traceTitle, traceRows, gapStep, traceNote); traceDetails.hidden = !Trace;
      host.append(stats, actions, traceDetails, note);
      restoreUI = state => { traceExpanded = state?.traceExpanded === true; traceDetails.open = traceExpanded; };
      updateMath = (parameters, settings = {}) => {
        const result = Models?.evaluate?.('chaos-theory', parameters);
        const snapshot = chaosSnapshot(parameters, result);
        // The tiny initial difference must remain visible, even while the paths move.
        for (const key of ['startA', 'startB', 'initialGap']) Readable.writeText(values[key], Readable.format(snapshot[key], { settled: true, precision: 7 }));
        if (!statsPacer.take(settings)) return;
        Readable.writeText(values.currentGap, Readable.format(snapshot.currentGap, settings));
        Readable.writeText(values.amplification, Readable.format(snapshot.amplification, settings) + (snapshot.amplification === null ? '' : '×'));
        const step = Trace?.snapshot(parameters, result);
        next.disabled = !step?.valid || step.atEnd;
        if (!step?.valid) return;
        const exact = value => Readable.format(value, { settled: true, precision: 7 });
        Readable.writeText(traceTitle, `Generation ${step.n} → ${step.nextGeneration} · same rule for both paths`);
        for (const row of step.rows) {
          Readable.writeText(traceValues[row.id].input, `${row.id}(${step.n}) ≈ ${exact(row.input)}`);
          Readable.writeText(traceValues[row.id].expression, `${exact(step.rate)} × ${exact(row.input)} × (1 − ${exact(row.input)})`);
          Readable.writeText(traceValues[row.id].output, `${row.id}(${step.nextGeneration}) ≈ ${exact(row.output)}`);
        }
        Readable.writeText(gapStep, `Whole-generation gap: ${exact(step.gapBefore)} → ${exact(step.gapAfter)}`);
        const between = step.progress > 0 && step.progress < 1;
        Readable.writeText(traceNote, step.atEnd ? 'The cursor has reached generation 36, the end of this finite experiment. Replay or move the timeline to inspect another update.' : between ? `The cursor is ${Readable.format(step.progress * 100, { settled: true, precision: 3 })}% between these whole generations. Its position blends the endpoints; the rule is applied only at whole generations.` : step.generation === 0 ? 'These are the first predicted values. Move one generation to place the cursor at the result.' : 'The cursor has reached these calculated results. Move one generation to apply the same rule again.');
      };
    }

    function update(parameters = {}, settings = {}) {
      if (disposed) return;
      latestParameters = parameters && typeof parameters === 'object' ? { ...parameters } : {};
      updateMath(latestParameters, settings);
    }
    function getState() {
      return options.slug === 'fractal-geometry' ? { kind: 'fractal', version: 1, zoom: targetZoom, compare: compareRepeats } : { kind: 'chaos', version: 1, traceExpanded };
    }
    function restoreState(state) {
      if (disposed) return { valid: false, state: null, errors: [{ field: 'inspector', message: 'This inspector has been removed.' }] };
      const checked = validateState(options.slug, state);
      if (!checked.valid) return checked;
      restoring = true;
      try { restoreUI(checked.state); updateMath(latestParameters, { settled: true }); }
      finally { restoring = false; }
      return checked;
    }
    return Object.freeze({
      viewOptions: () => options.slug === 'fractal-geometry' ? { lens: { zoom: displayedZoom, ...(compareRepeats ? { compare: true } : {}) } } : traceExpanded ? { chaosTrace: true } : {},
      paintView: container => !disposed && options.slug === 'fractal-geometry' && !!FractalLens?.paint(container, { zoom: displayedZoom, ...(compareRepeats ? { compare: true } : {}) }),
      update,
      getState,
      restoreState,
      settle() { if (disposed) return; follower?.settle(); paintZoom({ settled: true }); updateMath(latestParameters, { settled: true }); },
      destroy() { if (disposed) return; disposed = true; follower?.destroy(); cleanup.forEach(remove => remove()); host.replaceChildren(); host.hidden = true; }
    });
  }
  return Object.freeze({ supported, zoomFromLevel, levelFromZoom, chaosSnapshot, validateState, mount });
});
