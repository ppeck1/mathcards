import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const { createNotebook } = require('../src/notebook.js');
const slugs = ['ratio-scale', 'linear-model', 'exponential-change'];
// Exercise the canonical source records, rather than a generated export copy.
const cards = slugs.map(slug => JSON.parse(fs.readFileSync(new URL(`../content/cards/${slug}.json`, import.meta.url), 'utf8')));
const catalog = { cards };
const near = (actual, expected) => assert.ok(
  Math.abs(actual - expected) <= 1e-10 * Math.max(1, Math.abs(expected)),
  `${actual} ≈ ${expected}`
);
function memoryStorage() {
  const values = new Map();
  return {
    getItem: key => values.get(key) || null,
    setItem: (key, value) => values.set(key, value)
  };
}
function fresh(storage = memoryStorage()) { return createNotebook({ storage, models, catalog }); }

for (const card of cards) {
  for (const fixture of card.interactive.expected_cases) {
    test(`${card.slug}: canonical fixture ${JSON.stringify(fixture.input)}`, () => {
      const result = models.evaluate(card.slug, fixture.input);
      assert.equal(result.status, fixture.status || 'valid');
      if ('output' in fixture) {
        assert.equal(result.valid, true);
        near(result.output, fixture.output);
      } else {
        assert.equal(result.valid, false);
        assert.equal(result.output, null, 'An invalid input cannot retain the preceding answer');
      }
    });
  }

  test(`${card.slug}: notebook reload and backup retain every valid canonical experiment`, () => {
    const storage = memoryStorage(), book = fresh(storage);
    const fixtures = card.interactive.expected_cases.filter(fixture => !fixture.status);
    for (const fixture of fixtures) {
      const saved = book.add({
        card,
        parameters: fixture.input,
        text: `Check the ${card.title.toLowerCase()} result for ${JSON.stringify(fixture.input)}.`,
        status: 'tested_instance'
      });
      assert.equal(saved.ok, true, saved.error);
      const snapshot = saved.note.snapshot;
      assert.equal(snapshot.card_id, card.id);
      assert.equal(snapshot.content_revision, card.revision);
      assert.equal(snapshot.expression_id, card.grammar.ast.id);
      assert.equal(snapshot.model_id, card.interactive.model_id);
      assert.equal(snapshot.model_version, card.interactive.model_revision);
      assert.equal(snapshot.renderer_id, card.interactive.renderer_id);
      assert.equal(snapshot.renderer_version, card.interactive.renderer_version);
      assert.deepEqual(snapshot.parameters, fixture.input);
      assert.deepEqual(Object.keys(snapshot.outputs), ['output']);
      assert.equal(snapshot.outputs.output.kind, 'approximate', 'These model values use an explicit floating-point policy');
      assert.equal(snapshot.outputs.output.method_id, card.interactive.model_id);
      near(snapshot.outputs.output.value, fixture.output);
    }
    assert.equal(book.list().length, fixtures.length);
    assert.deepEqual(fresh(storage).list(), book.list(), 'Reload validates the saved parameter/output binding');
    const restored = fresh();
    assert.equal(restored.importBackup(book.exportBackup()).ok, true);
    assert.deepEqual(restored.list(), book.list());
    assert.equal(restored.importBackup(book.exportBackup()).ok, true);
    assert.equal(restored.list().length, fixtures.length, 'Repeated merge is idempotent');
    for (const note of restored.list()) {
      const result = models.evaluate(card.slug, note.snapshot.parameters);
      assert.equal(result.status, 'valid');
      near(result.output, note.snapshot.outputs.output.value);
    }
  });

  test(`${card.slug}: invalid authored parameters cannot create a notebook record`, () => {
    const book = fresh();
    for (const fixture of card.interactive.expected_cases.filter(fixture => fixture.status)) {
      const before = book.exportBackup();
      const result = book.add({ card, parameters: fixture.input, text: 'A rejected input should stay visible in the playground.' });
      assert.equal(result.ok, false);
      assert.equal(book.exportBackup(), before);
    }
  });
}

test('a mixed notebook preserves recipe, tank and resize model identities and fractional inputs', () => {
  const book = fresh();
  const cases = [
    { parameters: { servings: 1.5, amount: 300, baseServings: 4 }, output: 112.5 },
    { parameters: { initial: 0, rate: 4, time: 2.5 }, output: 10 },
    { parameters: { initial: 1200, factor: 0.25, time: 0.5 }, output: 600 }
  ];
  cards.forEach((card, index) => {
    const saved = book.add({ card: card.id, parameters: cases[index].parameters, text: 'Compare continuous model values with the stated application assumptions.' });
    assert.equal(saved.ok, true, saved.error);
    near(saved.note.snapshot.outputs.output.value, cases[index].output);
  });
  const restored = fresh();
  assert.equal(restored.importBackup(book.exportBackup(), { mode: 'replace' }).ok, true);
  assert.deepEqual(restored.list(), book.list());
  assert.deepEqual(restored.list().map(note => note.snapshot.card_id), cards.map(card => card.id));
  restored.list().forEach((note, index) => {
    assert.deepEqual(note.snapshot.parameters, cases[index].parameters);
    near(models.evaluate(cards[index].slug, note.snapshot.parameters).output, cases[index].output);
  });
});

test('new-card notebook imports reject mismatched models, missing inputs and edited outputs atomically', () => {
  const book = fresh();
  cards.forEach(card => assert.equal(book.add({ card, parameters: models.defaults(card.slug), text: 'Keep the validated experiment.' }).ok, true));
  const before = book.exportBackup();
  for (let index = 0; index < cards.length; index++) {
    const mutations = [
      backup => { backup.notes[index].snapshot.model_id = cards[(index + 1) % cards.length].interactive.model_id; },
      backup => { delete backup.notes[index].snapshot.parameters[Object.keys(models.defaults(cards[index].slug))[0]]; },
      backup => { backup.notes[index].snapshot.outputs.output.value += 1; },
      backup => { backup.notes[index].snapshot.expression_id = cards[(index + 1) % cards.length].interactive.expression_id; }
    ];
    for (const mutate of mutations) {
      const backup = JSON.parse(before);
      mutate(backup);
      assert.equal(book.importBackup(backup, { mode: 'replace' }).ok, false);
      assert.equal(book.exportBackup(), before, 'A failed restore leaves all three model records intact');
    }
  }
});
