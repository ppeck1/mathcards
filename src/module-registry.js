/* Local playground modules share a contract, never mutable instance state.
   Modules are trusted bundled JavaScript, not executable imported JSON. The
   registry owns validated parameters; the host owns DOM, animation, cleanup,
   and any explicit coordination between separate instances. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasModuleRegistry = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const poisoned = new Set(['__proto__', 'prototype', 'constructor']);
  const own = (object, key) => Object.hasOwn(object, key);
  const record = value => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
    const prototype = Object.getPrototypeOf(value);
    return prototype === null || Object.getPrototypeOf(prototype) === null;
  };
  const keyOK = key => typeof key === 'string' && key.length > 0 && !poisoned.has(key);
  const text = value => typeof value === 'string' && value.trim().length > 0;
  const idOK = id => keyOK(id) && /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(id);
  const portFields = new Set(['id', 'label', 'direction', 'key', 'type', 'unit', 'description']);
  const portText = value => text(value) && value === value.trim() && !/[\u0000-\u001f\u007f]/.test(value);
  const portIdOK = value => keyOK(value) && /^[A-Za-z][A-Za-z0-9:_-]*$/.test(value);
  const portKeyOK = value => keyOK(value) && /^[A-Za-z][A-Za-z0-9_]*$/.test(value);
  const portTypeOK = value => keyOK(value) && /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(value);
  const portUnitOK = value => keyOK(value) && /^[A-Za-z0-9][A-Za-z0-9/.*^_-]*$/.test(value);
  const fail = message => { throw new TypeError(message); };

  // Metadata is data plus trusted local function references. Copying it must
  // neither evaluate accessors nor turn authored formula strings into code.
  function copy(value, active = new Set()) {
    if (value === null || typeof value !== 'object') return value;
    if (!Array.isArray(value) && !record(value)) fail('Module data must contain plain objects and arrays.');
    if (active.has(value)) fail('Module data cannot contain cycles.');
    active.add(value);
    const result = Array.isArray(value) ? [] : {};
    for (const key of Reflect.ownKeys(value)) {
      if (Array.isArray(value) && key === 'length') continue;
      if (!keyOK(key)) fail('Unsafe module data key.');
      const descriptor = Object.getOwnPropertyDescriptor(value, key);
      if (!own(descriptor, 'value')) fail('Module data cannot contain accessors.');
      Object.defineProperty(result, key, {
        value: copy(descriptor.value, active), enumerable: descriptor.enumerable,
        writable: true, configurable: true
      });
    }
    active.delete(value);
    return result;
  }
  function freeze(value) {
    if (value && typeof value === 'object') {
      for (const child of Object.values(value)) freeze(child);
      Object.freeze(value);
    }
    return value;
  }
  const invalid = (parameters, message, field = 'parameters') => ({
    valid: false, parameters: copy(parameters), errors: [{ field, message }], warnings: []
  });

  function createRegistry() {
    const modules = new Map();

    function validate(definition, input, keys) {
      if (!record(input)) return invalid({}, 'Parameters must be a plain object.');
      let candidate;
      try { candidate = copy(input); }
      catch (error) { return invalid({}, error.message); }
      const checked = definition.validateParams(copy(candidate));
      if (!record(checked) || typeof checked.valid !== 'boolean') fail('validateParams must return a validation object.');
      const result = copy(checked);
      result.errors = result.errors || [];
      result.warnings = result.warnings || [];
      if (!Array.isArray(result.errors) || !Array.isArray(result.warnings)) fail('Validation errors and warnings must be arrays.');
      const unknown = keys && Object.keys(candidate).find(key => !keys.has(key));
      if (unknown !== undefined) return invalid({}, 'Unknown parameter.', unknown);
      if (result.valid) {
        if (!record(result.parameters)) fail('Valid parameters must be returned as a plain object.');
        if (keys && (Object.keys(result.parameters).some(key => !keys.has(key)) || [...keys].some(key => !own(result.parameters, key)))) {
          fail('Validated parameters must preserve the module parameter keys.');
        }
      }
      return result;
    }

    function register(input) {
      if (!record(input)) fail('A module definition must be a plain object.');
      const definition = copy(input);
      if (!idOK(definition.id)) fail('A module id must be a safe lower-case slug.');
      if (modules.has(definition.id)) throw new RangeError('Module already registered: ' + definition.id);
      if (!text(definition.version) || !text(definition.title)) fail('A module needs a version and title.');
      for (const name of ['defaults', 'validateParams', 'evaluate']) {
        if (typeof definition[name] !== 'function') fail('A module needs a ' + name + ' function.');
      }
      for (const name of ['readout', 'inspector', 'validateInspectorState', 'canInterpolate', 'referenceWeight']) {
        if (definition[name] !== undefined && typeof definition[name] !== 'function') fail(name + ' must be a function.');
      }
      for (const name of ['controls', 'sweeps', 'views']) {
        if (!Array.isArray(definition[name])) fail('A module needs a ' + name + ' array.');
      }
      if (definition.experiments !== undefined && !Array.isArray(definition.experiments)) fail('Experiments must be an array.');
      const baseline = validate(definition, definition.defaults());
      if (!baseline.valid) fail('Module defaults must pass validateParams.');
      const keys = new Set(Object.keys(baseline.parameters));
      for (const name of ['controls', 'sweeps']) {
        const seen = new Set();
        for (const item of definition[name]) {
          if (!record(item) || !keyOK(item.key) || !keys.has(item.key) || !text(item.label)) fail(name + ' must name a known parameter and label.');
          if (seen.has(item.key)) fail('Duplicate ' + name + ' key: ' + item.key);
          seen.add(item.key);
          const hasBounds = item.min !== undefined || item.max !== undefined;
          if ((name === 'sweeps' || hasBounds) && (!Number.isFinite(item.min) || !Number.isFinite(item.max) || item.max <= item.min)) fail(name + ' must have finite increasing bounds.');
          if (item.step !== undefined && (!Number.isFinite(item.step) || item.step <= 0)) fail('A control step must be positive and finite.');
        }
      }
      // Ports name flat numeric properties. They cannot install value readers,
      // executable expressions, conversions, or property-path adapters.
      if (definition.ports !== undefined) {
        if (!Array.isArray(definition.ports)) fail('Ports must be an array.');
        const seen = new Set(), outputs = [];
        for (const port of definition.ports) {
          if (!record(port) || Reflect.ownKeys(port).some(key => !portFields.has(key))) fail('Ports must contain only declarative quantity metadata.');
          if (!portIdOK(port.id) || seen.has(port.id)) fail('A port needs a unique safe id.');
          seen.add(port.id);
          if (port.direction !== 'input' && port.direction !== 'output') fail('A port direction must be input or output.');
          if (!portKeyOK(port.key) || !portText(port.label) || !portTypeOK(port.type) || !portUnitOK(port.unit)) fail('A port needs a safe flat key, label, type, and unit.');
          if (port.description !== undefined && typeof port.description !== 'string') fail('A port description must be a string.');
          if (port.direction === 'input') {
            if (!keys.has(port.key) || !Number.isFinite(baseline.parameters[port.key])) fail('An input port must name a finite numeric default parameter.');
          } else outputs.push(port);
        }
        if (outputs.length) {
          const result = definition.evaluate(copy(baseline.parameters));
          if (!record(result)) fail('Output ports need an evaluated result object.');
          for (const port of outputs) {
            const field = Object.getOwnPropertyDescriptor(result, port.key);
            if (!field || !own(field, 'value') || (field.value !== null && typeof field.value !== 'number')) fail('An output port must name an own numeric or null model result.');
          }
        }
      }
      const views = new Set();
      for (const view of definition.views) {
        if (!record(view) || !idOK(view.id) || !text(view.label) || typeof view.render !== 'function') fail('A view needs a safe id, label, and render function.');
        if (views.has(view.id)) fail('Duplicate view id: ' + view.id);
        views.add(view.id);
      }
      if (!views.has(definition.defaultView)) fail('The default view must be registered by the module.');
      freeze(definition);
      modules.set(definition.id, { definition, keys });
      return definition;
    }

    function createInstance(id, options = {}) {
      const entry = modules.get(id);
      if (!entry) throw new RangeError('Unknown module: ' + id);
      if (!record(options)) fail('Instance options must be a plain object.');
      const { definition, keys } = entry;
      let parameters = null, destroyed = false;
      const slot = options.slot;
      const alive = () => { if (destroyed) throw new Error('Module instance is destroyed: ' + id); };
      function setParameters(patch) {
        alive();
        if (!record(patch)) return invalid(parameters || {}, 'Parameters must be a plain object.');
        let safePatch;
        try { safePatch = copy(patch); }
        catch (error) { return invalid(parameters || {}, error.message); }
        const checked = validate(definition, { ...(parameters || {}), ...safePatch }, keys);
        if (checked.valid) parameters = copy(checked.parameters);
        // A failed edit reports the retained state as well as its errors.
        return { ...checked, parameters: copy(parameters || {}) };
      }
      const initial = validate(definition, definition.defaults(), keys);
      if (!initial.valid) fail('Module defaults no longer pass validateParams.');
      parameters = copy(initial.parameters);
      if (options.parameters !== undefined && !setParameters(options.parameters).valid) fail('Initial module parameters are invalid.');
      return Object.freeze({
        id, slot, definition,
        getParameters() { alive(); return copy(parameters); },
        setParameters,
        evaluate() { alive(); return definition.evaluate(copy(parameters)); },
        render(viewId = definition.defaultView, context = {}) {
          alive();
          const view = definition.views.find(candidate => candidate.id === viewId);
          if (!view) throw new RangeError('Unknown view for ' + id + ': ' + viewId);
          if (!context || typeof context !== 'object' || Array.isArray(context)) fail('A render context must be an object.');
          return view.render(copy(parameters), { ...context, slot });
        },
        destroy() { destroyed = true; parameters = null; }
      });
    }

    return Object.freeze({
      register,
      get: id => modules.get(id)?.definition,
      has: id => modules.has(id),
      list: () => Object.freeze([...modules.values()].map(entry => entry.definition)),
      unregister: id => modules.delete(id),
      createInstance
    });
  }

  return Object.freeze({ createRegistry });
});
