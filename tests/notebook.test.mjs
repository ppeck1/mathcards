import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const { createNotebook, storageKey } = require('../src/notebook.js');
const cards = ['function-composition', 'real-logarithm', 'derivative'].map(slug => JSON.parse(fs.readFileSync(new URL('../math_expression_atlas_handoff/content/cards/' + slug + '.json', import.meta.url))));
const catalog = { cards };
function memoryStorage() {
  const values = new Map();
  return { getItem: key => values.get(key) || null, setItem: (key, value) => values.set(key, value), values };
}
function fresh(storage = memoryStorage()) { return createNotebook({ storage, models, catalog }); }
function capture(book, card = cards[0], parameters = models.defaults(card.slug)) { return book.add({ card, parameters, text: 'I predict the order matters at this input.', status: 'conjecture' }); }

test('capture, reload, backup and restore preserve private typed state', () => {
  const storage = memoryStorage();
  const book = fresh(storage);
  assert.equal(book.list().length, 0);
  const saved = capture(book);
  assert.equal(saved.ok, true, saved.error);
  assert.equal(saved.note.snapshot.outputs.output.representation, '49');
  assert.equal(saved.note.snapshot.outputs.intermediate.representation, '7');
  assert.deepEqual(fresh(storage).list(), book.list());
  const restored = fresh();
  assert.equal(restored.importBackup(book.exportBackup()).ok, true);
  assert.deepEqual(restored.list(), book.list());
  assert.equal(restored.importBackup(book.exportBackup()).ok, true);
  assert.equal(restored.list().length, 1, 'Repeated merge is idempotent');
  const exposed = restored.list(); exposed[0].text = 'mutated';
  assert.notEqual(restored.list()[0].text, 'mutated', 'Return values do not expose mutable state');
  assert.equal(restored.remove(saved.note.id).ok, true);
  assert.equal(restored.get(saved.note.id), null);
});

test('corrupt schemas and inconsistent current-version backups are atomic', () => {
  const book = fresh(); capture(book);
  const before = book.exportBackup();
  const alterations = [
    backup => { backup.schema_version = '9.0.0'; },
    backup => { backup.notes[0].snapshot.model_id = 'arbitrary-code'; },
    backup => { backup.notes[0].snapshot.renderer_id = 'arbitrary-renderer'; },
    backup => { backup.notes[0].snapshot.parameters.x = Infinity; },
    backup => { backup.notes[0].snapshot.parameters.program = 'run()'; },
    backup => { delete backup.notes[0].snapshot.parameters.x; },
    backup => { backup.notes[0].snapshot.outputs.output.representation = '100'; },
    backup => { backup.notes[0].snapshot.outputs.output.value = 100; },
    backup => { backup.notes.push(backup.notes[0]); },
    backup => { backup.notes[0].text = ''; },
    backup => { backup.notes[0].created_at = '2026-02-30T00:00:00Z'; },
    backup => { backup.notes[0].snapshot.expression_id = 'ast:composition:apply-g-after-f'; },
    backup => { backup.notes[0].extra = true; }
  ];
  for (const alter of alterations) {
    const backup = JSON.parse(before); alter(backup);
    assert.equal(book.importBackup(backup, { mode: 'replace' }).ok, false);
    assert.equal(book.exportBackup(), before, 'Failed restore keeps every existing note');
  }
  assert.equal(book.importBackup('{broken').ok, false);
  assert.equal(book.exportBackup(), before);
});

test('unavailable, corrupt and full storage have an actionable memory fallback', () => {
  const full = { getItem: () => null, setItem: () => { throw new Error('quota'); } };
  const book = fresh(full);
  assert.equal(capture(book).ok, true);
  assert.equal(book.status().persistence, 'memory');
  assert.match(book.status().warning, /Export a backup/);
  assert.equal(JSON.parse(book.exportBackup()).notes.length, 1);
  const blocked = { getItem: () => { throw new Error('blocked'); }, setItem: () => assert.fail('Must not overwrite unreadable storage') };
  const fallback = fresh(blocked);
  assert.equal(capture(fallback).ok, true);
  assert.match(fallback.status().warning, /stored bytes were left untouched/);
  const corrupt = memoryStorage(); corrupt.setItem(storageKey, '{}');
  const recovered = fresh(corrupt); capture(recovered);
  assert.equal(corrupt.getItem(storageKey), '{}');
  assert.equal(recovered.status().persistence, 'memory');
  assert.equal(recovered.status().recoveryAvailable, true);
  assert.equal(recovered.exportRecovery(), '{}');
  assert.equal(book.exportRecovery(), null);
  assert.equal(fallback.exportRecovery(), null, 'Unreadable storage cannot invent original bytes');
});

test('boundary experiments save separate valid and undefined outputs', () => {
  const book = fresh();
  const zeroStep = capture(book, cards[2], { preset: 'cubic', a: 2, h: 0 });
  assert.equal(zeroStep.ok, true, zeroStep.error);
  assert.equal(zeroStep.note.snapshot.outputs.secant.kind, 'undefined');
  assert.equal(zeroStep.note.snapshot.outputs.analytic.value, 12);
  const corner = capture(book, cards[2], { preset: 'absolute', a: 0, h: 0.1 });
  assert.equal(corner.ok, true, corner.error);
  assert.equal(corner.note.snapshot.outputs.analytic.kind, 'undefined');
  assert.equal(corner.note.snapshot.outputs.secant.value, 1);
  const invalidLog = capture(book, cards[1], { base: 1, argument: 8 });
  assert.equal(invalidLog.ok, true, invalidLog.error);
  assert.equal(invalidLog.note.snapshot.outputs.output.kind, 'outside-domain');
  const copy = fresh();
  assert.equal(copy.importBackup(book.exportBackup()).ok, true);
  assert.deepEqual(copy.list(), book.list());
});

test('backup conflicts and empty notes are rejected without replacing existing notes', () => {
  const book = fresh(); capture(book);
  const backup = JSON.parse(book.exportBackup());
  backup.notes[0].text = 'Different revision of my note';
  assert.equal(book.importBackup(backup).ok, false);
  assert.equal(book.importBackup(backup, { mode: 'replace' }).ok, true);
  const before = book.exportBackup();
  assert.equal(book.add({ card: cards[0], parameters: models.defaults(cards[0].slug), text: '  ' }).ok, false);
  assert.equal(book.exportBackup(), before);
});

test('reopening a reverse-order snapshot keeps the full model state and typed connection', () => {
  const book = fresh();
  const parameters = { ...models.defaults(cards[0].slug), order: 'g_after_f', x: 4 };
  const connection = { target_card_id: cards[1].id, role_mapping: 'Both combine transformations.', preserved_features: 'The declared inputs and output types.', counterexample_attempt: 'A logarithm at zero fails its domain check.', unresolved_conditions: 'This observation does not establish an equivalence.' };
  const saved = book.add({ card: cards[0].id, parameters, text: 'A possible structural relationship.', status: 'conjecture', connection });
  assert.equal(saved.ok, true, saved.error);
  const backup = JSON.parse(book.exportBackup());
  assert.equal(backup.schema_version, '0.1.0');
  assert.equal(backup.kind, 'math-atlas-notebook');
  assert.ok(!('snapshots' in backup.notes[0]), 'Portable schema stores a single snapshot');
  const loaded = book.get(saved.note.id);
  assert.equal(loaded.snapshot.expression_id, 'ast:composition:apply-g-after-f');
  assert.equal(loaded.snapshot.content_revision, cards[0].revision);
  assert.equal(loaded.snapshot.model_version, '1');
  assert.deepEqual(loaded.snapshot.parameters, parameters);
  assert.deepEqual(loaded.connection, connection);
  assert.equal(models.evaluate(cards[0].slug, loaded.snapshot.parameters).output, 33);
  const restored = fresh();
  assert.equal(restored.importBackup(backup).ok, true);
  assert.deepEqual(restored.get(loaded.id), loaded);
});

test('oversized backup is rejected before parsing and current state is preserved', () => {
  const book = fresh(); capture(book);
  const before = book.exportBackup();
  const result = book.importBackup(' '.repeat(8 * 1024 * 1024 + 1));
  assert.equal(result.ok, false);
  assert.match(result.error, /8 MB/);
  assert.equal(book.exportBackup(), before);
});

test('a mixed notebook preserves old revisions on startup, export, and later saves', () => {
  const storage = memoryStorage(), original = fresh(storage);
  capture(original); capture(original, cards[1]);
  const backup = JSON.parse(original.exportBackup());
  backup.notes[0].snapshot.content_revision = 'older-content';
  backup.notes[0].snapshot.parameters = { former_input: 3 };
  backup.notes[0].snapshot.outputs = { former_output: { kind: 'exact', representation: 'The old result' } };
  const raw = JSON.stringify(backup); storage.setItem(storageKey, raw);
  const book = fresh(storage);
  assert.deepEqual(book.list(), backup.notes, 'One preserved note cannot hide the current note');
  assert.equal(storage.getItem(storageKey), raw, 'Opening the store does not rewrite it');
  assert.deepEqual(JSON.parse(book.exportBackup()), backup);
  assert.deepEqual(book.status(), { persistence: 'local', warning: null, count: 2, preservedCount: 1, recoveryAvailable: false });
  const old = book.compatibility(backup.notes[0].id), current = book.compatibility(backup.notes[1]);
  assert.equal(old.replayable, false); assert.equal(old.status, 'preserved');
  assert.ok(old.issues.includes('content-revision')); assert.match(old.reason, /without recalculation/);
  assert.equal(current.replayable, true); assert.equal(current.status, 'current');
  assert.equal(capture(book, cards[2]).ok, true);
  assert.deepEqual(book.list()[0], backup.notes[0]);
  assert.equal(fresh(storage).list().length, 3);
  old.issues.push('mutated'); assert.equal(book.compatibility(backup.notes[0].id).issues.includes('mutated'), false);
});

test('unsupported implementation revisions and unavailable cards remain opaque data', () => {
  const source = fresh(); capture(source);
  const original = JSON.parse(source.exportBackup());
  const changes = [
    snapshot => { snapshot.content_revision = 'older'; snapshot.model_id = 'model:previous-family'; snapshot.renderer_id = 'renderer:previous-family'; },
    snapshot => { snapshot.model_version = '999'; },
    snapshot => { snapshot.renderer_version = '999'; },
    snapshot => { snapshot.card_id = 'card:uninstalled'; }
  ];
  for (const change of changes) {
    const backup = structuredClone(original); change(backup.notes[0].snapshot);
    const storage = memoryStorage();
    const unavailableModels = {
      evaluate: () => assert.fail('An unsupported snapshot must never run under a current model'),
      validateParams: () => assert.fail('An old parameter contract must not use the current validator'),
      defaults: () => assert.fail('An old parameter contract must not use current defaults')
    };
    const book = createNotebook({ storage, catalog, models: unavailableModels });
    const imported = book.importBackup(backup);
    assert.equal(imported.ok, true, imported.error);
    assert.equal(book.compatibility(backup.notes[0].id).replayable, false);
    assert.deepEqual(JSON.parse(book.exportBackup()), backup);
    const reopened = createNotebook({ storage, catalog, models: unavailableModels });
    assert.deepEqual(reopened.list(), backup.notes, 'Unsupported revisions also survive startup without executing a model');
    assert.deepEqual(fresh().importBackup(book.exportBackup()).ok, true);
  }
});

test('imported historical snapshots merge without overwriting existing notes', () => {
  const current = fresh(); capture(current);
  const before = JSON.parse(current.exportBackup());
  const old = structuredClone(before);
  old.notes[0].id += ':older'; old.notes[0].snapshot.id += ':older';
  old.notes[0].snapshot.model_version = '0';
  old.notes[0].connection = { target_card_id: 'card:retired', role_mapping: 'A retained observation.', preserved_features: '', counterexample_attempt: '', unresolved_conditions: '' };
  assert.equal(current.importBackup(old).ok, true);
  assert.deepEqual(current.list(), before.notes.concat(old.notes));
  const merged = current.exportBackup();
  assert.equal(current.importBackup(old).ok, true, 'Repeated historical imports are idempotent');
  assert.equal(current.exportBackup(), merged);
  const conflict = structuredClone(old); conflict.notes[0].text = 'Changed note with same identity';
  assert.equal(current.importBackup(conflict).ok, false);
  assert.equal(current.exportBackup(), merged);
});

test('historical snapshots still reject unsafe, nonportable, malformed, or oversized data atomically', () => {
  const book = fresh(); capture(book);
  const before = book.exportBackup();
  const changes = [
    snapshot => { snapshot.parameters.x = Infinity; },
    snapshot => { snapshot.parameters.x = { nested: 'code' }; },
    snapshot => { Object.defineProperty(snapshot.parameters, '__proto__', { value: { polluted: true }, enumerable: true }); },
    snapshot => { snapshot.parameters.constructor = 'polluted'; },
    snapshot => { snapshot.outputs.output.kind = 'executable'; },
    snapshot => { snapshot.outputs.output.representation = ''; },
    snapshot => { snapshot.outputs.output.value = NaN; },
    snapshot => { snapshot.outputs.output.run = 'alert(1)'; },
    snapshot => { snapshot.viewport.x = []; },
    snapshot => { snapshot.seed = 0.1; },
    snapshot => { snapshot.units.x = { unit: 'm' }; },
    snapshot => { snapshot.parameters.x = 'x'.repeat(20001); }
  ];
  for (const change of changes) {
    const backup = JSON.parse(before); backup.notes[0].snapshot.content_revision = 'older'; change(backup.notes[0].snapshot);
    assert.equal(book.importBackup(backup, { mode: 'replace' }).ok, false);
    assert.equal(book.exportBackup(), before);
  }
  assert.equal({}.polluted, undefined);
});

test('numeric current-version results reject changed methods, tolerances, and values', () => {
  const book = fresh(); capture(book, cards[2]);
  const before = book.exportBackup();
  for (const change of [
    output => { output.value += 1; },
    output => { output.method_id = 'model:another-method'; },
    output => { output.tolerance = 1e6; },
    output => { output.representation = 'invented exact value'; }
  ]) {
    const backup = JSON.parse(before); change(backup.notes[0].snapshot.outputs.secant);
    assert.equal(book.importBackup(backup, { mode: 'replace' }).ok, false);
    assert.equal(book.exportBackup(), before);
  }
});

test('raw storage recovery remains exact and available after memory-only imports and saves', () => {
  for (const raw of ['{broken', '{"schema_version":"9.0.0","kind":"math-atlas-notebook","notes":[]}', '{"notes":[{"text":"do not lose this"}]}']) {
    const storage = memoryStorage(); storage.setItem(storageKey, raw);
    const book = fresh(storage);
    assert.equal(book.status().recoveryAvailable, true);
    assert.equal(book.exportRecovery(), raw);
    assert.equal(capture(book).ok, true);
    const source = fresh(); capture(source, cards[1]);
    assert.equal(book.importBackup(source.exportBackup()).ok, true);
    assert.equal(JSON.parse(book.exportBackup()).notes.length, 2);
    assert.equal(book.exportRecovery(), raw);
    assert.equal(storage.getItem(storageKey), raw, 'The original store remains intact until explicitly recovered externally');
  }
});
