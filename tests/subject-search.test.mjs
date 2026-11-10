import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url),
  Search = require('../src/atlas-search.js'),
  Inventory = require('../src/subject-inventory.js');
const context = vm.createContext({});
vm.runInContext(
  fs.readFileSync(new URL('../src/subject-inventory-data.js', import.meta.url), 'utf8'),
  context
);
const cards = fs
  .readdirSync(new URL('../content/cards/', import.meta.url))
  .filter(name => name.endsWith('.json'))
  .map(name =>
    JSON.parse(fs.readFileSync(new URL('../content/cards/' + name, import.meta.url), 'utf8'))
  );
const subjects = Inventory.create({
  data: JSON.parse(JSON.stringify(context.AtlasSubjectInventoryData)),
  cards
});
const index = { search: () => [] },
  model = Search.create({ cards, index, subjects });

test('global search gives planned subjects their own readable type and working destination', () => {
  const hit = model.search('Galois theory').find(row => row.kind === 'subject');
  assert.ok(hit);
  assert.equal(hit.href, '#subjects/galois-theory');
  assert.equal(hit.availability, 'planned');
  assert.match(hit.description, /Planned lesson/);
  const html = model.resultsMarkup('Galois theory');
  assert.match(html, /Reading roadmap/);
  assert.match(html, /Planned lesson/);
  assert.doesNotMatch(html, /Interactive cards/);
  assert.match(model.markup(), /data-search-kind="subject"/);
});

test('reading roadmap does not flood symbol or short searches and caps mixed results', () => {
  for (const query of ['+', 'δ', 'm', 'x', 'AB', 'pi'])
    assert.equal(model.search(query).filter(row => row.kind === 'subject').length, 0, query);
  const lattice = model.search('lattice').filter(row => row.kind === 'subject');
  assert.ok(lattice.length > 0 && lattice.length <= 8);
  assert.ok(lattice[0].title.toLowerCase().includes('lattice'));
  assert.ok(
    lattice.every(row => subjects.get(row.id).evidence.some(record => record.book_id === 'B06'))
  );
  assert.ok(
    model.search('lattice', { kind: 'subject' }).length > 8,
    'explicit subject filtering exposes every matching roadmap entry'
  );
  assert.equal(
    model.search('lattice', { kind: 'card' }).filter(row => row.kind === 'subject').length,
    0
  );
  assert.ok(
    model.search('Gratzer').some(row => row.kind === 'subject'),
    'an accented book author can be found from an unaccented query'
  );
});

test('card, definition and map semantics are unchanged when subject data is added', () => {
  const terms = [
      {
        id: 'example',
        title: 'Entropy',
        symbols: [],
        aliases: [],
        definition: 'An example meaning.',
        usedBy: []
      }
    ],
    fixtureIndex = { search: query => (query === 'entropy' ? terms : []) },
    atlas = {
      areas: {
        search: query =>
          query === 'entropy'
            ? [
                {
                  id: 'information:uncertainty',
                  regionId: 'information',
                  shortId: 'uncertainty',
                  title: 'Uncertainty',
                  description: 'A map area.',
                  availableCount: 3
                }
              ]
            : []
      }
    };
  const before = Search.create({ cards, index: fixtureIndex, atlas }),
    after = Search.create({ cards, index: fixtureIndex, atlas, subjects });
  for (const kind of ['term', 'card', 'area'])
    assert.deepEqual(after.search('entropy', { kind }), before.search('entropy', { kind }));
  assert.deepEqual(
    after.search('entropy').filter(row => row.kind !== 'subject'),
    before.search('entropy')
  );
  assert.ok(
    after.search('entropy').some(row => row.kind === 'subject' && row.id === 'shannon-entropy')
  );
});
