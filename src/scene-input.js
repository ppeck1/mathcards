/* Renderer-independent pointer and keyboard input for mathematical scenes. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSceneInput = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  function snap(value, spec) {
    if (!Number.isFinite(value)) return null;
    const step = Number(spec.step);
    const rounded = step > 0 && Number.isFinite(value / step) ? Number((Math.round(value / step) * step).toPrecision(12)) : value;
    return clamp(rounded, spec.min, spec.max);
  }
  function valid(spec) {
    return spec && typeof spec === 'object' && ['min','max','x0','x1'].every(key => Number.isFinite(spec[key])) && spec.max > spec.min && spec.x1 > spec.x0 && (spec.step === undefined || (Number.isFinite(spec.step) && spec.step > 0));
  }
  function dragValue(spec, startValue, startX, x) {
    if (!valid(spec) || !Number.isFinite(x)) return null;
    if (spec.mode === 'relative' && (!Number.isFinite(startValue) || !Number.isFinite(startX))) return null;
    const span = spec.max - spec.min;
    const value = spec.mode === 'relative'
      ? startValue + (x - startX) / (spec.x1 - spec.x0) * span
      : spec.min + clamp((x - spec.x0) / (spec.x1 - spec.x0), 0, 1) * span;
    return snap(value, spec);
  }
  // Pointer position is continuous. Authored steps belong to keyboard navigation.
  function pointerValue(spec, startValue, startX, x) {
    if (!valid(spec) || !Number.isFinite(x)) return null;
    if (spec.mode === 'relative' && (!Number.isFinite(startValue) || !Number.isFinite(startX))) return null;
    const span = spec.max - spec.min;
    return clamp(spec.mode === 'relative'
      ? startValue + (x - startX) / (spec.x1 - spec.x0) * span
      : spec.min + (x - spec.x0) / (spec.x1 - spec.x0) * span, spec.min, spec.max);
  }
  function keyValue(spec, value, key, shift = false) {
    if (!valid(spec) || !Number.isFinite(value)) return null;
    if (key === 'Home') return spec.min;
    if (key === 'End') return spec.max;
    const direction = {ArrowRight:1,ArrowUp:1,ArrowLeft:-1,ArrowDown:-1}[key];
    if (!direction) return null;
    return snap(value + direction * (spec.step || (spec.max-spec.min)/100) * (shift ? 10 : 1), spec);
  }
  function bind(stage, options) {
    let active = null, pending = null, frame = null;
    const request = options.requestFrame || (callback => requestAnimationFrame(callback));
    const cancel = options.cancelFrame || (id => cancelAnimationFrame(id));
    function specification(handle) {
      return {key:handle.dataset.dragParam, min:Number(handle.dataset.dragMin), max:Number(handle.dataset.dragMax), x0:Number(handle.dataset.dragX0), x1:Number(handle.dataset.dragX1), step:Number(handle.dataset.dragStep)||.01, mode:handle.dataset.dragMode||'absolute'};
    }
    function sceneX(event) {
      const svg=stage.querySelector('svg'), matrix=svg?.getScreenCTM();
      if (!matrix) return null;
      const point=svg.createSVGPoint();point.x=event.clientX;point.y=event.clientY;
      return point.matrixTransform(matrix.inverse()).x;
    }
    const start=event=>{
      if(active)return;
      const handle=event.target.closest?.('[data-drag-param]');
      if(!handle||!stage.contains(handle)||(event.button!==undefined&&event.button!==0))return;
      const spec=specification(handle), x=sceneX(event), value=options.getValue(spec.key);
      if(!valid(spec)||x===null||!Number.isFinite(value))return;
      event.preventDefault();options.onStart?.({source:'pointer'});handle.focus?.({preventScroll:true});
      active={spec,x,value,pointerId:event.pointerId};stage.dataset.dragging=spec.key;
      stage.setPointerCapture?.(event.pointerId);
      // An absolute ruler responds immediately; a relative frame waits for movement.
      if(spec.mode!=='relative')update(event);
    };
    function flush() {
      frame=null;
      if(!active||!pending)return;
      const event=pending;pending=null;
      const x=sceneX(event);if(x===null)return;
      const value=pointerValue(active.spec,active.value,active.x,x);
      if(value!==null)options.onChange(active.spec.key,value,{source:'pointer'});
    }
    function update(event) {
      if(!active||event.pointerId!==active.pointerId)return;
      const events=event.getCoalescedEvents?.(), latest=events?.length?events[events.length-1]:event;
      pending={clientX:latest.clientX,clientY:latest.clientY};
      if(frame===null)frame=request(flush);
    }
    const stop=event=>{
      if(!active||event.pointerId!==active.pointerId)return;
      if(event.type!=='pointercancel')update(event);
      if(frame!==null)cancel(frame);frame=null;flush();
      if(stage.hasPointerCapture?.(event.pointerId))stage.releasePointerCapture(event.pointerId);
      active=null;delete stage.dataset.dragging;options.onEnd?.({source:'pointer'});
    };
    const keyboard=event=>{
      const handle=event.target.closest?.('[data-drag-param]');if(!handle||!stage.contains(handle))return;
      const spec=specification(handle), value=keyValue(spec,options.getValue(spec.key),event.key,event.shiftKey);
      if(value===null)return;
      event.preventDefault();options.onStart?.({source:'keyboard'});options.onChange(spec.key,value,{source:'keyboard'});options.onEnd?.({source:'keyboard'});
    };
    stage.addEventListener('pointerdown',start);stage.addEventListener('pointermove',update);
    stage.addEventListener('pointerup',stop);stage.addEventListener('pointercancel',stop);stage.addEventListener('keydown',keyboard);
    return {destroy(){
      if(frame!==null)cancel(frame);frame=null;pending=null;
      if(active&&stage.hasPointerCapture?.(active.pointerId))stage.releasePointerCapture(active.pointerId);
      active=null;delete stage.dataset.dragging;
      stage.removeEventListener('pointerdown',start);stage.removeEventListener('pointermove',update);
      stage.removeEventListener('pointerup',stop);stage.removeEventListener('pointercancel',stop);stage.removeEventListener('keydown',keyboard);
    }};
  }
  return Object.freeze({dragValue,pointerValue,keyValue,bind});
});
