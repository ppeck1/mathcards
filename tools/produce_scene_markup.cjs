#!/usr/bin/env node
/* Pure default-state markup; no DOM, browser, storage, network or rasterizer. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const Modules = require('../src/playground-modules.js');
const Previews = require('../src/card-previews.js');
const cards = fs
  .readdirSync(path.join(root, 'content/cards'))
  .filter(name => name.endsWith('.json'))
  .sort()
  .map(name => JSON.parse(fs.readFileSync(path.join(root, 'content/cards', name), 'utf8')));
const definitions = Modules.list();
const records = [];
for (const definition of definitions) {
  for (const layout of ['desktop', 'compact']) {
    for (const side of ['left', 'right']) {
      const slot = 'release-' + side + '-' + definition.id + '-' + layout;
      let instance;
      try {
        instance = Modules.createInstance(definition.id, { slot });
        for (const view of definition.views) {
          const record = {
            key: ['view', definition.id, view.id, layout, side].join('/'),
            kind: 'view',
            slug: definition.id,
            view: view.id,
            layout,
            side,
            pair: [definition.id, view.id, layout].join('/')
          };
          try {
            record.markup = instance.render(view.id, {
              id: slot + '-' + view.id,
              compact: layout === 'compact'
            });
          } catch (error) {
            record.renderError = String(error.message || error);
          }
          records.push(record);
        }
      } finally {
        instance?.destroy();
      }
    }
  }
}
for (const card of cards) {
  const record = { key: 'preview/' + card.slug, kind: 'preview', slug: card.slug };
  try {
    record.markup = Previews.render(card.slug, {
      id: 'release-preview-' + card.slug,
      title: card.title
    });
  } catch (error) {
    record.renderError = String(error.message || error);
  }
  records.push(record);
}
process.stdout.write(
  JSON.stringify({
    formatVersion: 1,
    applicationVersion: JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'))
      .version,
    cardSlugs: cards.map(card => card.slug),
    moduleSlugs: definitions.map(definition => definition.id),
    expected: {
      modules: definitions.length,
      declaredViews: definitions.reduce((sum, definition) => sum + definition.views.length, 0),
      viewFragments: definitions.reduce((sum, definition) => sum + definition.views.length, 0) * 4,
      previewFragments: cards.length
    },
    records
  }) + '\n'
);
