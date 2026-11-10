import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { validateReferenceAuthoring: validate } = require('../tools/reference_authoring.cjs');
const valid = () => ({
  entries: [
    { id: 'length', sourceKeys: ['measure'], relatedIds: ['area'] },
    { id: 'area', sourceKeys: ['measure'], relatedIds: [] }
  ],
  sources: { measure: { title: 'A declared source', url: 'https://example.org/measure' } }
});

test('reference build accepts valid editorial links without changing author data', () => {
  const data = valid(),
    before = structuredClone(data);
  assert.equal(validate(data), true);
  assert.deepEqual(data, before);
});

test('a card ID cannot silently disappear as an unknown related-definition link', () => {
  const data = valid();
  data.entries[0].relatedIds = ['math:concept:pythagorean-theorem'];
  assert.throws(() => validate(data), /length: unknown or self-related definition/);
});

test('missing sources and duplicate or self-related identities fail before index compilation', () => {
  const missing = valid();
  missing.entries[0].sourceKeys.push('missing');
  assert.throws(() => validate(missing), /unknown definition source missing/);
  const self = valid();
  self.entries[0].relatedIds = ['length'];
  assert.throws(() => validate(self), /self-related definition length/);
  const repeated = valid();
  repeated.entries[0].relatedIds = ['area', 'area'];
  assert.throws(() => validate(repeated), /unique list/);
  const duplicate = valid();
  duplicate.entries.push({ ...duplicate.entries[0] });
  assert.throws(() => validate(duplicate), /unique nonempty IDs/);
});
