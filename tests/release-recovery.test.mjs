import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Models = require('../src/models.js');
const Modules = require('../src/playground-modules.js');
const Notebook = require('../src/notebook.js');
const Workspaces = require('../src/workspace-store.js');
const cardDirectory = new URL('../content/cards/', import.meta.url);
const cards = fs
  .readdirSync(cardDirectory)
  .filter(name => name.endsWith('.json'))
  .sort()
  .map(name => JSON.parse(fs.readFileSync(new URL(name, cardDirectory), 'utf8')));
const catalog = { cards };
function storage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value)
  };
}
const notebook = disk => Notebook.createNotebook({ storage: disk, models: Models, catalog });
const workspace = disk => Workspaces.createStore({ storage: disk, modules: Modules });

test('every installed lesson notebook default survives reload and portable backup without changing recorded values', () => {
  assert.equal(cards.length, 123);
  const disk = storage(),
    book = notebook(disk);
  for (const card of cards) {
    const parameters = Models.defaults(card.slug);
    const saved = book.add({
      card,
      parameters,
      text: 'Release check for ' + card.title,
      status: 'observation'
    });
    assert.equal(saved.ok, true, card.slug + ': ' + saved.error);
    assert.deepEqual(saved.note.snapshot.parameters, parameters, card.slug);
    assert.equal(saved.note.snapshot.content_revision, card.revision);
    assert.equal(saved.note.snapshot.model_version, String(card.interactive.model_revision));
    assert.equal(saved.note.snapshot.renderer_version, String(card.interactive.renderer_version));
    assert.equal(book.compatibility(saved.note).replayable, true, card.slug);
  }
  const expected = book.list(),
    backup = book.exportBackup();
  assert.equal(expected.length, cards.length);
  assert.deepEqual(
    notebook(disk).list(),
    expected,
    'Fresh storage reload preserves every typed snapshot'
  );
  const restored = notebook(storage());
  assert.equal(restored.importBackup(backup).ok, true);
  assert.deepEqual(restored.list(), expected);
  assert.equal(restored.exportBackup(), backup);
  assert.equal(restored.importBackup(backup).ok, true);
  assert.deepEqual(
    restored.list(),
    expected,
    'Repeated merge is idempotent across the complete catalog'
  );
});

test('every declared module view survives workspace save, reload and backup with its pin and exact parameters', () => {
  assert.equal(Modules.list().length, cards.length);
  let count = 0;
  for (const module of Modules.list()) {
    for (const view of module.views) {
      const disk = storage(),
        book = workspace(disk);
      const parameters = module.defaults();
      const slot = (id, viewId) => ({
        id,
        module_id: module.id,
        module_version: module.version,
        parameters: { ...parameters },
        view: viewId,
        camera: 0.65,
        baseline: { ...parameters },
        inspector: null
      });
      const input = {
        title: module.title + ': ' + view.label,
        slots: [slot('work-0', view.id), slot('work-1', module.defaultView)],
        connection: null
      };
      const saved = book.add(input);
      assert.equal(saved.ok, true, module.id + '/' + view.id + ': ' + saved.error);
      assert.equal(book.compatibility(saved.workspace).replayable, true);
      assert.deepEqual(saved.workspace.slots, input.slots);
      const backup = book.exportBackup();
      assert.deepEqual(workspace(disk).get(saved.workspace.id), saved.workspace);
      const restored = workspace(storage());
      assert.equal(restored.importBackup(backup).ok, true);
      assert.deepEqual(restored.get(saved.workspace.id), saved.workspace);
      assert.equal(restored.exportBackup(), backup);
      assert.equal(restored.compatibility(saved.workspace).replayable, true);
      count++;
    }
  }
  assert.equal(count, 253);
});
