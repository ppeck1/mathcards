/* Reference providers register data; content never executes imported programs. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(
      node ? require('./systems-terms.js') : root.AtlasSystemsTerms,
      node ? require('./inference-terms.js') : root.AtlasInferenceTerms
    );
  if (node) module.exports = api;
  root.AtlasExpansionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Systems, Inference) {
  'use strict';
  const entries = new Map(),
    sources = {};
  for (const provider of [Systems, Inference].filter(Boolean)) {
    for (const entry of provider.entries) entries.set(entry.id, entry);
    Object.assign(sources, provider.sources);
  }
  return Object.freeze({
    entries: Object.freeze([...entries.values()]),
    sources: Object.freeze(sources)
  });
});
