(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.AtlasNotebook = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const VERSION = '0.1.0';
  const KEY = 'math-expression-atlas:notebook:0.1';
  const MAX_BYTES = 8 * 1024 * 1024;
  const STATUSES = ['observation', 'conjecture', 'tested_instance', 'supported_relationship', 'rejected', 'unresolved'];
  const clone = value => JSON.parse(JSON.stringify(value));
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value) && [Object.prototype, null].includes(Object.getPrototypeOf(value));
  const text = (value, max = 20000) => typeof value === 'string' && value.length > 0 && value.length <= max;
  const finite = value => typeof value === 'number' && Number.isFinite(value);
  const byteLength = value => typeof TextEncoder !== 'undefined' ? new TextEncoder().encode(value).length : value.length * 3;
  const keys = (value, required, optional = []) => object(value) && required.every(k => Object.hasOwn(value, k)) && Object.keys(value).every(k => required.includes(k) || optional.includes(k));
  const record = value => object(value) && Object.keys(value).length <= 200 && Object.keys(value).every(k => text(k, 500) && !['__proto__', 'prototype', 'constructor'].includes(k));
  function date(value) {
    if (typeof value !== 'string') return false;
    const match = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.exec(value);
    if (!match || !Number.isFinite(Date.parse(value))) return false;
    const [, year, month, day, hour, minute, second] = match.map(Number);
    return month >= 1 && month <= 12 && day >= 1 && day <= new Date(Date.UTC(year, month, 0)).getUTCDate() && hour < 24 && minute < 60 && second < 60;
  }
  function uuid(prefix) {
    const id = typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    return prefix + ':' + id;
  }
  const empty = () => ({ schema_version: VERSION, kind: 'math-atlas-notebook', notes: [] });
  function createNotebook(options = {}) {
    const models = options.models || (typeof globalThis !== 'undefined' && globalThis.AtlasModels);
    const catalog = options.catalog || (typeof globalThis !== 'undefined' && globalThis.AtlasCatalog) || { cards: [] };
    const cards = Array.isArray(catalog) ? catalog : catalog.cards || [];
    const byId = new Map(cards.map(card => [card.id, card]));
    let storage = options.storage;
    let persistence = 'local';
    let warning = '';
    let recovery = null;
    let state = empty();
    if (!models || typeof models.evaluate !== 'function' || typeof models.validateParams !== 'function') throw new Error('Notebook requires the registered mathematical models.');
    function fallback(message) {
      storage = null;
      persistence = 'memory';
      warning = message + ' Notes shown in this tab are held in memory. Export a backup before closing it.';
    }
    if (!Object.hasOwn(options, 'storage')) {
      try { storage = globalThis.localStorage; } catch (_) { fallback('Browser storage is unavailable.'); }
    }
    if (!storage && !warning) fallback('Browser storage is unavailable.');
    // A saved snapshot has two independent contracts: a safe portable structure,
    // and an exact installed implementation that is allowed to replay it.
    function compatibilityFor(snapshot) {
      const card = byId.get(snapshot.card_id);
      const issues = [];
      if (!card) return { replayable: false, status: 'preserved', reason: 'This card is unavailable. The saved text, parameters, and outputs remain preserved; replay requires its matching Atlas release.', issues: ['card-unavailable'] };
      const interactive = card.interactive;
      if (snapshot.content_revision !== card.revision) issues.push('content-revision');
      if (snapshot.model_id !== interactive.model_id) issues.push('model-unavailable');
      if (snapshot.model_version !== String(interactive.model_revision)) issues.push('model-revision');
      if (snapshot.renderer_id !== interactive.renderer_id) issues.push('renderer-unavailable');
      if (snapshot.renderer_version !== String(interactive.renderer_version)) issues.push('renderer-revision');
      if (issues.length) return { replayable: false, status: 'preserved', reason: 'The exact saved card, model, or renderer revision is unavailable. Its recorded values are preserved without recalculation; replay requires its matching Atlas release.', issues };
      return { replayable: true, status: 'current', reason: null, issues: [] };
    }
    function cardFor(snapshot) {
      const card = byId.get(snapshot.card_id);
      if (!card) return null;
      const interactive = card.interactive;
      // An identity change with the same content revision is inconsistent, not
      // evidence that another installed model may execute this snapshot.
      if (snapshot.content_revision === card.revision && (snapshot.model_id !== interactive.model_id || snapshot.renderer_id !== interactive.renderer_id)) throw new Error('The saved model or renderer identity does not match this card revision.');
      if (!compatibilityFor(snapshot).replayable) return null;
      const expressions = new Set([interactive.expression_id, ...Object.values(interactive.expression_variants || {})]);
      if (!expressions.has(snapshot.expression_id)) throw new Error('The saved expression is not registered for this card.');
      const expectedExpression = interactive.expression_variants && interactive.expression_variants[snapshot.parameters.order] || interactive.expression_id;
      if (snapshot.expression_id !== expectedExpression) throw new Error('The saved expression does not match the operation order.');
      return card;
    }
    function validateOutputs(outputs) {
      if (!record(outputs) || !Object.keys(outputs).length) throw new Error('A snapshot needs typed output records.');
      for (const output of Object.values(outputs)) {
        if (!keys(output, ['kind'], ['representation', 'value', 'reason', 'method_id', 'tolerance'])) throw new Error('Invalid output record.');
        if (!['exact', 'approximate', 'undefined', 'outside-domain', 'unsupported'].includes(output.kind)) throw new Error('Unknown output kind.');
        for (const field of ['representation', 'reason', 'method_id']) if (Object.hasOwn(output, field) && !text(output[field])) throw new Error('Invalid output ' + field + '.');
        if (Object.hasOwn(output, 'value') && !finite(output.value)) throw new Error('Output values must be finite.');
        if (Object.hasOwn(output, 'tolerance') && (!finite(output.tolerance) || output.tolerance < 0)) throw new Error('Invalid output tolerance.');
        if (output.kind === 'exact' && !text(output.representation)) throw new Error('An exact output needs a representation.');
        if (output.kind === 'approximate' && (!finite(output.value) || !text(output.method_id))) throw new Error('An approximate output needs a finite value and method.');
        if (['undefined', 'outside-domain', 'unsupported'].includes(output.kind) && !text(output.reason)) throw new Error('An invalid output needs its reason.');
      }
    }
    function modelOutputs(card, parameters) {
      const result = models.evaluate(card.slug, parameters);
      const numerical = (value, exactRepresentation) => {
        if (!finite(value)) return { kind: 'undefined', reason: result.message || result.errors && result.errors.map(e => e.message || e).join('; ') || 'This output is undefined under the saved conditions.' };
        if (exactRepresentation !== undefined && exactRepresentation !== null) return { kind: 'exact', representation: String(exactRepresentation) };
        return { kind: 'approximate', value, method_id: card.interactive.model_id, tolerance: card.interactive.numeric_tolerance || 1e-10 };
      };
      if (card.slug === 'function-composition') {
        const exactInputs = Object.entries(parameters).filter(([key]) => key !== 'order').every(([, value]) => Number.isSafeInteger(value));
        return { intermediate: numerical(result.intermediate, exactInputs && Number.isSafeInteger(result.intermediate) ? String(result.intermediate) : null), output: numerical(result.output, exactInputs && Number.isSafeInteger(result.output) ? String(result.output) : null) };
      }
      if (card.slug === 'real-logarithm') {
        if (!finite(result.output)) return { output: { kind: 'outside-domain', reason: result.message || 'Real logarithms require base > 0, base ≠ 1, and argument > 0.' } };
        return { output: numerical(result.output, result.exactDisplay || result.exact_display) };
      }
      if(card.slug!=='derivative')return {output:numerical(result.output)};
      return { secant: numerical(result.output), analytic: numerical(result.analytic) };
    }
    function validateSnapshot(snapshot) {
      const required = ['id', 'card_id', 'content_revision', 'expression_id', 'model_id', 'model_version', 'renderer_id', 'renderer_version', 'parameters', 'units', 'outputs', 'numeric_policy', 'viewport', 'seed'];
      if (!keys(snapshot, required)) throw new Error('The snapshot format is incomplete or contains unknown fields.');
      for (const field of required.slice(0, 8)) if (!text(snapshot[field], 500)) throw new Error('Invalid snapshot ' + field + '.');
      if (!text(snapshot.numeric_policy)) throw new Error('Invalid snapshot numeric_policy.');
      if (!record(snapshot.parameters) || Object.values(snapshot.parameters).some(v => !(typeof v === 'boolean' || typeof v === 'string' && v.length <= 20000 || finite(v)))) throw new Error('Invalid saved model parameters.');
      if (!record(snapshot.units) || Object.values(snapshot.units).some(v => v !== null && !(typeof v === 'string' && v.length <= 20000))) throw new Error('Invalid saved units.');
      if (!record(snapshot.viewport) || Object.values(snapshot.viewport).some(v => !finite(v))) throw new Error('Invalid saved viewport.');
      if (!(snapshot.seed === null || Number.isSafeInteger(snapshot.seed))) throw new Error('Invalid saved seed.');
      validateOutputs(snapshot.outputs);
      const card = cardFor(snapshot);
      // Historical snapshots are opaque, validated data. Their old parameter
      // and output contracts cannot be checked using a different implementation.
      if (!card) return;
      const checked = models.validateParams(card.slug, snapshot.parameters);
      if (!checked.valid) throw new Error('Saved parameters are unsupported: ' + (checked.errors || []).map(e => e.message || e).join('; '));
      const defaults = models.defaults(card.slug);
      if (Object.keys(defaults).some(k => !Object.hasOwn(snapshot.parameters, k))) throw new Error('A saved snapshot must contain every model parameter.');
      const expected = modelOutputs(card, snapshot.parameters);
      if (Object.keys(snapshot.outputs).sort().join('|') !== Object.keys(expected).sort().join('|')) throw new Error('Saved outputs do not match this model.');
      for (const [key, output] of Object.entries(snapshot.outputs)) {
        const actual = expected[key];
        if (output.kind !== actual.kind) throw new Error('Saved output validity does not match its parameters.');
        if (Object.keys(output).sort().join('|') !== Object.keys(actual).sort().join('|')) throw new Error('Saved output fields do not match this model.');
        if (output.kind === 'exact' && output.representation !== actual.representation) throw new Error('Saved exact output does not match its parameters.');
        if (output.kind === 'approximate' && Math.abs(output.value - actual.value) > actual.tolerance * Math.max(1, Math.abs(actual.value))) throw new Error('Saved numeric output does not match its parameters.');
        if (output.kind === 'approximate' && (output.method_id !== actual.method_id || output.tolerance !== actual.tolerance)) throw new Error('Saved numeric method or tolerance does not match this model.');
      }
    }
    function validateNote(note) {
      if (!keys(note, ['id', 'created_at', 'updated_at', 'status', 'text', 'snapshot'], ['connection'])) throw new Error('The note format is incomplete or contains unknown fields.');
      if (!text(note.id, 500) || !date(note.created_at) || !date(note.updated_at) || !STATUSES.includes(note.status) || !text(note.text) || !note.text.trim()) throw new Error('Invalid note identity, dates, status, or text.');
      validateSnapshot(note.snapshot);
      if (note.connection) {
        const fields = ['target_card_id', 'role_mapping', 'preserved_features', 'counterexample_attempt', 'unresolved_conditions'];
        if (!keys(note.connection, fields) || !(note.connection.target_card_id === null || text(note.connection.target_card_id, 500)) || fields.slice(1).some(k => typeof note.connection[k] !== 'string' || note.connection[k].length > 20000)) throw new Error('Invalid proposed connection.');
      }
    }
    function validateBackup(data) {
      if (!keys(data, ['schema_version', 'kind', 'notes']) || data.schema_version !== VERSION || data.kind !== 'math-atlas-notebook' || !Array.isArray(data.notes)) throw new Error('Unsupported notebook backup format or version.');
      if (data.notes.length > 2000) throw new Error('The notebook exceeds 2,000 notes.');
      if (byteLength(JSON.stringify(data)) > MAX_BYTES) throw new Error('Choose a notebook JSON backup smaller than 8 MB.');
      const noteIds = new Set(); const snapshotIds = new Set();
      for (const note of data.notes) {
        validateNote(note);
        if (noteIds.has(note.id) || snapshotIds.has(note.snapshot.id)) throw new Error('The backup contains duplicate identities.');
        noteIds.add(note.id); snapshotIds.add(note.snapshot.id);
      }
      return clone(data);
    }
    function readJson(raw) {
      if (typeof raw !== 'string' || byteLength(raw) > MAX_BYTES) throw new Error('Choose a notebook JSON backup smaller than 8 MB.');
      return validateBackup(JSON.parse(raw));
    }
    function persist(next) {
      const raw = JSON.stringify(next);
      if (byteLength(raw) > MAX_BYTES) throw new Error('The notebook exceeds 8 MB. Export it and remove older notes before adding more.');
      if (storage) {
        try { storage.setItem(KEY, raw); }
        catch (_) { fallback('Browser storage is full or blocked.'); }
      }
      state = clone(next);
      return { ok: true, warning: warning || null, persistence };
    }
    if (storage) {
      let saved;
      try {
        saved = storage.getItem(KEY);
        if (saved) state = readJson(saved);
      } catch (_) {
        if (typeof saved === 'string') recovery = saved;
        fallback('The stored notebook could not be opened safely. Its stored bytes were left untouched.' + (recovery !== null ? ' Download the original stored data for recovery.' : ''));
      }
    }
    function guarded(fn) { try { return fn(); } catch (error) { return { ok: false, error: error.message }; } }
    return {
      list() { return clone(state.notes); },
      get(id) { const note = state.notes.find(n => n.id === id); return note ? clone(note) : null; },
      status() { return { persistence, warning: warning || null, count: state.notes.length, preservedCount: state.notes.filter(note => !compatibilityFor(note.snapshot).replayable).length, recoveryAvailable: recovery !== null }; },
      compatibility(noteOrId) {
        const note = typeof noteOrId === 'string' ? state.notes.find(n => n.id === noteOrId) : noteOrId;
        if (!note || !object(note.snapshot)) return { replayable: false, status: 'unavailable', reason: 'This saved note is unavailable.', issues: ['note-unavailable'] };
        return clone(compatibilityFor(note.snapshot));
      },
      exportRecovery() { return recovery; },
      add(input) { return guarded(() => {
        if (!object(input)) throw new Error('Provide an observation and current experiment.');
        const card = typeof input.card === 'string' ? byId.get(input.card) : input.card && byId.get(input.card.id);
        if (!card) throw new Error('Choose an available card before saving an experiment.');
        const parameters = clone(input.parameters || models.defaults(card.slug));
        const now = new Date().toISOString();
        const note = {
          id: uuid('note'), created_at: now, updated_at: now, status: input.status || 'observation', text: input.text,
          snapshot: { id: uuid('snapshot'), card_id: card.id, content_revision: card.revision, expression_id: card.interactive.expression_variants && card.interactive.expression_variants[parameters.order] || card.interactive.expression_id, model_id: card.interactive.model_id, model_version: String(card.interactive.model_revision), renderer_id: card.interactive.renderer_id, renderer_version: String(card.interactive.renderer_version), parameters, units: {}, outputs: modelOutputs(card, parameters), numeric_policy: 'IEEE-754 binary64; only registered exact fixtures and safe integer polynomial results are labeled exact.', viewport: {}, seed: null }
        };
        if (input.connection) note.connection = clone(input.connection);
        const next = validateBackup({ ...empty(), notes: state.notes.concat(note) });
        return { ...persist(next), note: clone(note) };
      }); },
      remove(id) { return guarded(() => {
        if (!state.notes.some(n => n.id === id)) throw new Error('This note is no longer available.');
        return persist({ ...empty(), notes: state.notes.filter(n => n.id !== id) });
      }); },
      exportBackup() { return JSON.stringify(state, null, 2); },
      importBackup(raw, options = {}) { return guarded(() => {
        const incoming = typeof raw === 'string' ? readJson(raw) : validateBackup(raw);
        const mode = options.mode || 'merge';
        if (!['merge', 'replace'].includes(mode)) throw new Error('Choose merge or replace for this backup.');
        let notes = incoming.notes;
        if (mode === 'merge') {
          const byNoteId = new Map(state.notes.map(note => [note.id, note]));
          for (const note of incoming.notes) {
            if (byNoteId.has(note.id) && JSON.stringify(byNoteId.get(note.id)) !== JSON.stringify(note)) throw new Error('A note identity conflicts with an existing note. Import into a fresh notebook or choose replace.');
            byNoteId.set(note.id, note);
          }
          notes = [...byNoteId.values()];
        }
        const next = validateBackup({ ...empty(), notes });
        return { ...persist(next), imported: incoming.notes.length };
      }); }
    };
  }
  return Object.freeze({ createNotebook, schemaVersion: VERSION, storageKey: KEY, statuses: STATUSES.slice() });
});
