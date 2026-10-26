import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const models = require('../src/models.js');
const { createNotebook } = require('../src/notebook.js');
const slugs = ['chaos-theory', 'fractal-geometry', 'wave-interference', 'probability', 'vector-rotation', 'pythagorean-theorem'];
const read = path => JSON.parse(fs.readFileSync(new URL(path, import.meta.url), 'utf8'));
const cards = slugs.map(slug => read(`../content/cards/${slug}.json`));
const sourceIds = new Set(read('../content/sources.json').sources.map(source => source.id));
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) <= 1e-10 * Math.max(1, Math.abs(expected)), `${actual} ≈ ${expected}`);
function storage() {
  const values = new Map();
  return { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value) };
}

for (const card of cards) {
  test(`${card.slug}: teaching examples keep application assumptions and sources reviewable`, () => {
    assert.equal(card.publication_status, 'draft');
    assert.equal(card.history.status, 'source_gap');
    assert.deepEqual(card.history.claims, [], 'Definitions do not establish historical priority');
    assert.ok(card.examples.length >= 5);
    assert.ok(card.source_refs.length > 0);
    for (const ref of card.source_refs) assert.ok(sourceIds.has(ref), ref);
    for (const example of card.examples) {
      assert.ok(example.steps.length >= 2);
      assert.ok(example.conditions_to_check.length > 0);
      assert.ok(example.independent_check.method.length > 0);
      assert.ok(example.limits.length > 0);
      if (example.preset) assert.equal(models.evaluate(card.slug, example.preset).valid, true, example.id);
    }
    for (const application of card.applications) {
      assert.equal(application.evidence_kind, 'constructed_example');
      assert.ok(card.examples.some(example => example.id === application.example_ref));
    }
  });

  test(`${card.slug}: canonical numerical cases agree with the allowlisted runtime`, () => {
    for (const fixture of card.interactive.expected_cases) {
      const result = models.evaluate(card.slug, fixture.input);
      assert.equal(result.status, fixture.status ?? 'valid', JSON.stringify(fixture.input));
      if ('output' in fixture) {
        assert.equal(result.valid, true);
        near(result.output, fixture.output);
      } else {
        assert.equal(result.valid, false);
        assert.equal(result.output, null, 'Invalid input cannot retain a previous answer');
      }
    }
    assert.deepEqual(models.defaults(card.slug), Object.fromEntries(card.interactive.controls.map(control => [control.id, control.default])));
  });

  test(`${card.slug}: notebook backup retains model identity, parameters and evaluated output`, () => {
    const backing = storage();
    const book = createNotebook({ storage: backing, models, catalog: { cards } });
    for (const fixture of card.interactive.expected_cases.filter(fixture => 'output' in fixture)) {
      const result = book.add({ card, parameters: fixture.input, text: 'Compare the constructed scenario with its declared assumptions.' });
      assert.equal(result.ok, true, result.error);
      const snapshot = result.note.snapshot;
      assert.equal(snapshot.expression_id, card.grammar.ast.id);
      assert.equal(snapshot.model_id, card.interactive.model_id);
      assert.equal(snapshot.model_version, card.interactive.model_revision);
      assert.equal(snapshot.renderer_version, card.interactive.renderer_version);
      assert.deepEqual(snapshot.parameters, fixture.input);
      near(snapshot.outputs.output.value, fixture.output);
    }
    const restore = createNotebook({ storage: storage(), models, catalog: { cards } });
    assert.equal(restore.importBackup(book.exportBackup(), { mode: 'replace' }).ok, true);
    assert.deepEqual(restore.list(), book.list());
    assert.deepEqual(createNotebook({ storage: backing, models, catalog: { cards } }).list(), book.list());
    const previous = book.exportBackup();
    for (const fixture of card.interactive.expected_cases.filter(fixture => fixture.status)) {
      assert.equal(book.add({ card, parameters: fixture.input, text: 'Reject an invalid parameter without storing a stale answer.' }).ok, false);
      assert.equal(book.exportBackup(), previous);
    }
    const tampered = JSON.parse(previous);
    tampered.notes[0].snapshot.outputs.output.value += 1;
    assert.equal(restore.importBackup(tampered, { mode: 'replace' }).ok, false);
    assert.deepEqual(restore.list(), book.list(), 'Rejected edited outputs leave the notebook intact');
  });
}
