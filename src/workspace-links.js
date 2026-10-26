/* Explicit directed links between independent playground slots. This module
   only proposes a validated parameter snapshot; the host decides when to apply
   it. Matching names never imply matching quantities, conversions or ranges. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasWorkspaceLinks = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const unsafe = new Set(['__proto__', 'prototype', 'constructor']);
  const own = (value, key) => Object.hasOwn(value, key);
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const keyOK = value => text(value) && !unsafe.has(value);
  const record = value => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
  };

  // Each callback gets its own data. A validator or model cannot accidentally
  // mutate either live slot, another callback's input, or the proposed result.
  function copy(value, active = new Set()) {
    if (value === null || typeof value !== 'object') {
      if (['function', 'symbol', 'bigint'].includes(typeof value)) throw new TypeError('Parameters must contain data only.');
      return value;
    }
    if (!Array.isArray(value) && !record(value)) throw new TypeError('Parameters must contain plain objects and arrays.');
    if (active.has(value)) throw new TypeError('Parameters cannot contain cycles.');
    active.add(value);
    const result = Array.isArray(value) ? [] : {};
    for (const key of Reflect.ownKeys(value)) {
      if (Array.isArray(value) && key === 'length') continue;
      if (!keyOK(key)) throw new TypeError('Unsafe parameter key.');
      const descriptor = Object.getOwnPropertyDescriptor(value, key);
      if (!own(descriptor, 'value')) throw new TypeError('Parameters cannot contain accessors.');
      Object.defineProperty(result, key, {
        value: copy(descriptor.value, active), enumerable: descriptor.enumerable,
        writable: true, configurable: true
      });
    }
    active.delete(value);
    return result;
  }

  const verdict = (valid, code, reason) => ({ valid, code, reason });
  const portOK = port => record(port) && keyOK(port.id) && keyOK(port.key) && text(port.label) &&
    ['input', 'output'].includes(port.direction) && text(port.type) && text(port.unit);

  function compatible(sourcePort, targetPort) {
    if (!portOK(sourcePort)) return verdict(false, 'invalid_source_port', 'Choose a source quantity with declared type and unit.');
    if (!portOK(targetPort)) return verdict(false, 'invalid_target_port', 'Choose a target quantity with declared type and unit.');
    if (targetPort.direction !== 'input') return verdict(false, 'target_is_output', 'A link can change an input only.');
    if (sourcePort.type !== targetPort.type) return verdict(false, 'type_mismatch', 'These quantities have different types.');
    if (sourcePort.unit !== targetPort.unit) return verdict(false, 'unit_mismatch', 'These quantities use different units. No conversion is applied.');
    return verdict(true, 'compatible', 'The declared type and unit match. The current value still needs validation.');
  }

  function ports(module) {
    if (!record(module) || !Array.isArray(module.ports)) return [];
    const counts = new Map();
    for (const port of module.ports) if (portOK(port)) counts.set(port.id, (counts.get(port.id) || 0) + 1);
    return module.ports.filter(port => portOK(port) && counts.get(port.id) === 1);
  }

  // Deliberately ignores the current value: a range failure should pause a
  // connection, not make its otherwise compatible ports vanish from the UI.
  function listPairs(sourceModule, targetModule) {
    const pairs = [];
    for (const sourcePort of ports(sourceModule)) {
      for (const targetPort of ports(targetModule)) {
        if (compatible(sourcePort, targetPort).valid) pairs.push({ sourcePort: copy(sourcePort), targetPort: copy(targetPort) });
      }
    }
    return pairs;
  }

  function firstReason(result, fallback) {
    if (text(result?.message)) return result.message;
    const error = Array.isArray(result?.errors) && result.errors.find(item => text(item?.message));
    return error ? error.message : fallback;
  }
  const moduleOK = module => record(module) && Array.isArray(module.ports) &&
    typeof module.validateParams === 'function' && typeof module.evaluate === 'function';

  function check(options = {}) {
    const { sourceModule, sourceParameters, sourcePortId, targetModule, targetParameters, targetPortId } = options || {};
    let value, targetKey = null;
    const fail = (code, reason) => ({ valid: false, code, reason, value, parameters: null, targetKey });
    if (!moduleOK(sourceModule)) return fail('invalid_source_module', 'The source module does not declare a link contract.');
    if (!moduleOK(targetModule)) return fail('invalid_target_module', 'The target module does not declare a link contract.');
    const sourcePort = ports(sourceModule).find(port => port.id === sourcePortId);
    const targetPort = ports(targetModule).find(port => port.id === targetPortId);
    if (!sourcePort) return fail('unknown_source_port', 'The selected source quantity is unavailable or ambiguous.');
    if (!targetPort) return fail('unknown_target_port', 'The selected target quantity is unavailable or ambiguous.');
    targetKey = targetPort.key;
    const agreement = compatible(sourcePort, targetPort);
    if (!agreement.valid) return fail(agreement.code, agreement.reason);

    let checkedSource, candidate, sourceSnapshot;
    try {
      if (!record(sourceParameters)) return fail('invalid_source_parameters', 'The source parameters must be a plain object.');
      sourceSnapshot = copy(sourceParameters);
      checkedSource = sourceModule.validateParams(copy(sourceSnapshot));
      if (checkedSource?.valid !== true || !record(checkedSource.parameters)) {
        return fail('invalid_source_parameters', firstReason(checkedSource, 'The source parameters are invalid.'));
      }
      candidate = copy(checkedSource.parameters);
    } catch (error) {
      return fail('invalid_source_parameters', 'The source parameters could not be validated.');
    }

    if (sourcePort.direction === 'input') value = own(sourceSnapshot, sourcePort.key) ? sourceSnapshot[sourcePort.key] : undefined;
    else {
      let evaluated;
      try { evaluated = sourceModule.evaluate(copy(candidate)); }
      catch (error) { return fail('source_evaluation_failed', 'The source quantity could not be calculated.'); }
      if (!record(evaluated) || evaluated.valid === false) {
        return fail('invalid_source_domain', firstReason(evaluated, 'The source calculation is undefined at these values.'));
      }
      value = own(evaluated, sourcePort.key) ? evaluated[sourcePort.key] : undefined;
    }
    if (!Number.isFinite(value)) return fail('invalid_source_value', 'The selected source quantity must be a finite number.');

    let checkedTarget, parameters;
    try {
      if (!record(targetParameters)) return fail('invalid_target_parameters', 'The target parameters must be a plain object.');
      candidate = copy(targetParameters);
      candidate[targetKey] = value;
      checkedTarget = targetModule.validateParams(copy(candidate));
      if (checkedTarget?.valid !== true || !record(checkedTarget.parameters)) {
        return fail('invalid_target_parameters', firstReason(checkedTarget, 'The linked value is outside the target range.'));
      }
      parameters = copy(checkedTarget.parameters);
      if (!own(parameters, targetKey) || parameters[targetKey] !== value) {
        return fail('target_value_changed', 'The target would change the linked value. No rounding, clamping or conversion is applied.');
      }
    } catch (error) {
      return fail('invalid_target_parameters', 'The proposed target parameters could not be validated.');
    }

    let evaluated;
    try { evaluated = targetModule.evaluate(copy(parameters)); }
    catch (error) { return fail('target_evaluation_failed', 'The proposed target calculation could not be calculated.'); }
    if (!record(evaluated) || evaluated.valid === false || !Number.isFinite(evaluated.output)) {
      return fail('invalid_target_domain', firstReason(evaluated, 'The linked value makes the target calculation undefined.'));
    }
    return { valid: true, code: 'linked', reason: 'The source value fits the target input and its calculation is defined.', value, parameters, targetKey };
  }

  // One explicit connection coordinates two independent live slots. There is
  // no clock or listener here: the host calls refresh after its own changes and
  // applies complete validated snapshots through its existing controller.
  function createSession(options) {
    if (!record(options) || typeof options.getSlots !== 'function' || typeof options.apply !== 'function') {
      throw new TypeError('A link session needs getSlots and apply functions.');
    }
    const { getSlots, apply } = options;
    let state = { phase: 'idle', connection: null, value: undefined, targetKey: null, code: 'idle', reason: 'Panels are independent.' };
    let guards = null, lastValue, busy = false, destroyed = false;
    const getState = () => copy(state);
    function idle(reason, code = 'disconnected') {
      guards = null; lastValue = undefined;
      state = { phase: 'idle', connection: null, value: undefined, targetKey: null, code, reason };
    }
    function slotsFor(connection) {
      const slots = getSlots();
      if (!Array.isArray(slots)) return null;
      const find = id => {
        const matches = slots.filter(slot => record(slot) && slot.id === id);
        return matches.length === 1 ? matches[0] : null;
      };
      const source = find(connection.sourceSlotId), target = find(connection.targetSlotId);
      return source && target ? { source, target } : null;
    }
    const identity = slot => ({ id: slot.id, module: slot.module, moduleId: slot.module?.id, version: slot.module?.version });
    const sameIdentity = (slot, previous) => slot.id === previous.id && slot.module === previous.module &&
      slot.module?.id === previous.moduleId && slot.module?.version === previous.version;
    const inspect = (connection, slots) => check({
      sourceModule: slots.source.module, sourceParameters: slots.source.parameters, sourcePortId: connection.sourcePortId,
      targetModule: slots.target.module, targetParameters: slots.target.parameters, targetPortId: connection.targetPortId
    });
    function applyResult(slots, checked) {
      let result;
      try { result = apply(slots.target.id, copy(checked.parameters)); }
      catch (error) { return verdict(false, 'apply_failed', 'The receiving input could not be updated. Its last valid value was retained.'); }
      if (result !== true && result?.valid !== true) {
        return verdict(false, 'apply_failed', firstReason(result, 'The receiving input could not be updated. Its last valid value was retained.'));
      }
      return verdict(true, 'applied', 'The receiving input was updated.');
    }
    function linked(connection, checked) {
      lastValue = checked.value;
      state = { phase: 'linked', connection: copy(connection), value: checked.value, targetKey: checked.targetKey, code: checked.code, reason: checked.reason };
    }
    function blocked(connection, checked) {
      state = { phase: 'blocked', connection: copy(connection), value: checked.value, targetKey: checked.targetKey || state.targetKey, code: checked.code, reason: checked.reason };
    }
    function connect(descriptor) {
      if (destroyed || busy) return getState();
      busy = true;
      try {
        if (!record(descriptor) || !['sourceSlotId', 'sourcePortId', 'targetSlotId', 'targetPortId'].every(key => keyOK(descriptor[key]))) {
          idle('Choose a source slot, source quantity, receiving slot and receiving input.', 'invalid_connection');
          return getState();
        }
        const connection = Object.fromEntries(['sourceSlotId', 'sourcePortId', 'targetSlotId', 'targetPortId'].map(key => [key, descriptor[key]]));
        if (connection.sourceSlotId === connection.targetSlotId) {
          idle('Choose two different slots. A slot cannot feed itself.', 'same_slot');
          return getState();
        }
        let slots;
        try { slots = slotsFor(connection); }
        catch (error) { idle('The workspace slots are unavailable.', 'slots_unavailable'); return getState(); }
        if (destroyed) return getState();
        if (!slots) { idle('A selected workspace slot is unavailable or ambiguous.', 'slot_unavailable'); return getState(); }
        const checked = inspect(connection, slots);
        if (destroyed) return getState();
        if (!checked.valid) {
          idle(checked.reason, checked.code);
          return getState();
        }
        // Always apply the first valid connection, even if the values match:
        // the host uses this boundary to pause receiving-slot playback.
        const applied = applyResult(slots, checked);
        if (destroyed) return getState();
        if (!applied.valid) { idle(applied.reason, applied.code); return getState(); }
        guards = { source: identity(slots.source), target: identity(slots.target) };
        linked(connection, checked);
        return getState();
      } finally { busy = false; }
    }
    // Restoring an already saved workspace never runs the receiving input.
    // A blocked connection retains its saved last-valid target until a later
    // source edit makes the ordinary check pass again.
    function restore(descriptor) {
      const result = (restored, error = null) => ({ ...getState(), restored, error });
      const fail = (code, reason) => result(false, { code, reason });
      if (destroyed) return fail('destroyed', 'The workspace connection is closed.');
      if (busy) return fail('busy', 'The workspace connection is already updating.');
      busy = true;
      try {
        if (descriptor === null) {
          idle('The saved workspace has independent panels.', 'restored_independent');
          return result(true);
        }
        let connection;
        try {
          connection = copy(descriptor);
          const fields = ['sourceSlotId', 'sourcePortId', 'targetSlotId', 'targetPortId'];
          if (!record(connection) || Object.keys(connection).length !== fields.length || !fields.every(key => own(connection, key) && keyOK(connection[key]))) {
            return fail('invalid_connection', 'The saved connection must identify exactly two slots and their quantities.');
          }
        } catch (_) { return fail('invalid_connection', 'The saved connection must contain plain data.'); }
        if (connection.sourceSlotId === connection.targetSlotId) return fail('same_slot', 'A saved connection needs two different slots.');
        let slots;
        try { slots = slotsFor(connection); }
        catch (_) { return fail('slots_unavailable', 'The saved workspace slots are unavailable.'); }
        if (destroyed) return fail('destroyed', 'The workspace connection is closed.');
        if (!slots) return fail('slot_unavailable', 'A saved workspace slot is unavailable or ambiguous.');
        if (!moduleOK(slots.source.module) || !moduleOK(slots.target.module)) return fail('invalid_module', 'A saved module does not declare a connection contract.');
        const sourcePort = ports(slots.source.module).find(port => port.id === connection.sourcePortId);
        const targetPort = ports(slots.target.module).find(port => port.id === connection.targetPortId);
        if (!sourcePort) return fail('unknown_source_port', 'The saved source quantity is unavailable or ambiguous.');
        if (!targetPort) return fail('unknown_target_port', 'The saved receiving input is unavailable or ambiguous.');
        const agreement = compatible(sourcePort, targetPort);
        if (!agreement.valid) return fail(agreement.code, agreement.reason);
        let targetParameters, checkedTarget;
        try {
          targetParameters = copy(slots.target.parameters);
          if (!record(targetParameters) || !own(targetParameters, targetPort.key) || !Number.isFinite(targetParameters[targetPort.key])) {
            return fail('invalid_saved_target', 'The saved receiving value must be a finite number.');
          }
          checkedTarget = slots.target.module.validateParams(copy(targetParameters));
          if (checkedTarget?.valid !== true || !record(checkedTarget.parameters)) return fail('invalid_saved_target', firstReason(checkedTarget, 'The saved receiving parameters are invalid.'));
        } catch (_) { return fail('invalid_saved_target', 'The saved receiving parameters could not be validated.'); }
        if (destroyed) return fail('destroyed', 'The workspace connection is closed.');
        const checked = inspect(connection, slots);
        if (destroyed) return fail('destroyed', 'The workspace connection is closed.');
        const savedValue = targetParameters[targetPort.key];
        if (checked.valid && savedValue !== checked.value) return fail('inconsistent_restore', 'The saved receiving input does not equal its connected source. No values were changed.');
        guards = { source: identity(slots.source), target: identity(slots.target) };
        if (checked.valid) linked(connection, checked);
        else {
          lastValue = savedValue;
          blocked(connection, { ...checked, targetKey: targetPort.key });
        }
        return result(true);
      } finally { busy = false; }
    }
    function refresh(changedSlotId) {
      if (destroyed || busy || !state.connection) return getState();
      busy = true;
      try {
        const connection = state.connection;
        let slots;
        try { slots = slotsFor(connection); }
        catch (error) { idle('The workspace slots are unavailable. Panels are independent.', 'slots_unavailable'); return getState(); }
        if (destroyed) return getState();
        if (!slots) { idle('A linked slot was removed or replaced. Panels are independent.', 'slot_changed'); return getState(); }
        if (!sameIdentity(slots.source, guards.source) || !sameIdentity(slots.target, guards.target)) {
          idle('A linked module was replaced. Panels are independent.', 'module_changed');
          return getState();
        }
        if (changedSlotId === slots.target.id && slots.target.parameters?.[state.targetKey] !== lastValue) {
          idle('Receiving value edited. Panels are independent.', 'receiving_value_edited');
          return getState();
        }
        const checked = inspect(connection, slots);
        if (destroyed) return getState();
        if (!checked.valid) { blocked(connection, checked); return getState(); }
        if (slots.target.parameters?.[checked.targetKey] !== checked.value) {
          const applied = applyResult(slots, checked);
          if (destroyed) return getState();
          if (!applied.valid) { blocked(connection, { ...checked, ...applied }); return getState(); }
        }
        linked(connection, checked);
        return getState();
      } finally { busy = false; }
    }
    function disconnect(reason = 'Panels are independent.') {
      if (destroyed || busy) return getState();
      idle(text(reason) ? reason : 'Panels are independent.');
      return getState();
    }
    function destroy() {
      if (!destroyed) { idle('Workspace link closed.', 'destroyed'); destroyed = true; }
      return getState();
    }
    return Object.freeze({ connect, restore, refresh, disconnect, getState, destroy });
  }

  return Object.freeze({ compatible, listPairs, check, createSession });
});
