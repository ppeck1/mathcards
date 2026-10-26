/* Small, renderer-independent motion clock. Target values stay exact; only the display follows. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasMotion = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const same = (a, b) => Object.keys(a).length === Object.keys(b).length && Object.keys(a).every(key => Object.is(a[key], b[key]));
  const finitePair = (a, b) => Object.keys(b).every(key => typeof b[key] === 'number'
    ? Number.isFinite(b[key]) && Number.isFinite(a[key])
    : Object.is(a[key], b[key]));
  function createFollower(options) {
    const request = options.requestFrame || (callback => globalThis.requestAnimationFrame(callback));
    const cancel = options.cancelFrame || (id => globalThis.cancelAnimationFrame(id));
    const now = options.now || (() => globalThis.performance.now());
    const reduced = () => typeof options.reducedMotion === 'function' ? options.reducedMotion() : !!options.reducedMotion;
    const response = Math.max(1, options.durationMs || 45), settleAfter = Math.max(response, options.maxSettleMs || 240);
    let current = {...options.initial}, target = {...current}, frame = null, last = now(), changedAt = last, destroyed = false;
    function emit(settled, dt = 0) { if (!destroyed) options.onFrame?.({...current}, {settled, dt}); }
    function stop() { if (frame !== null) cancel(frame); frame = null; }
    function settle() {
      if (destroyed) return;
      stop(); current = {...target}; last = now(); emit(true);
    }
    function tick(time) {
      frame = null; if (destroyed) return;
      const dt = Math.max(0, time - last); last = time;
      if (reduced() || time - changedAt >= settleAfter) { current = {...target}; emit(true, dt); return; }
      // Exponential response depends on elapsed time, so 60 Hz and 120 Hz follow the same path.
      const amount = -Math.expm1(-dt / response);
      let close = true;
      for (const key of Object.keys(target)) if (typeof target[key] === 'number') {
        current[key] += (target[key] - current[key]) * amount;
        if (Math.abs(target[key] - current[key]) > Math.max(1, Math.abs(target[key])) * 1e-6) close = false;
      }
      if (close) current = {...target};
      emit(close, dt);
      if (!close && !destroyed) frame = request(tick);
    }
    function setTarget(next, settings = {}) {
      if (destroyed) return;
      const changed = !same(next, target);
      target = {...next};
      if (settings.immediate || reduced() || !finitePair(current, target) || options.canInterpolate?.(current, target) === false) { settle(); return; }
      if (same(current, target)) { stop(); emit(true); return; }
      if (changed) changedAt = now();
      if (frame === null) { last = now(); frame = request(tick); }
    }
    return Object.freeze({setTarget, settle, current:() => ({...current}), destroy(){stop();destroyed=true;}});
  }

  // The same values that shape the geometry also move its light. No ambient animation clock.
  function paintGradients(container, parameters, phase = 0, reduced = false) {
    if (reduced) return;
    const values = Object.values(parameters).filter(Number.isFinite);
    const energy = values.reduce((sum, value, i) => sum + Math.atan(value / (i + 1)) * (i + 1), 0);
    const angle = energy * .35 + phase * .7;
    container.querySelectorAll('linearGradient').forEach((gradient, i) => {
      const wave = Math.sin(angle + i * .65), curl = Math.cos(angle * .8 + i * .5);
      gradient.setAttribute('x1', (.08 + wave * .08).toFixed(5));
      gradient.setAttribute('y1', (.88 + curl * .12).toFixed(5));
      gradient.setAttribute('x2', (.9 - wave * .1).toFixed(5));
      gradient.setAttribute('y2', (.12 - curl * .12).toFixed(5));
      // Move the direction of the light without modulating its brightness.
      // The renderer's authored stop opacity remains steady during a drag.
    });
  }
  return Object.freeze({createFollower, paintGradients});
});
