/* Reference providers register data; content never executes imported programs. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(
      node ? require('./systems-terms.js') : root.AtlasSystemsTerms,
      node ? require('./inference-terms.js') : root.AtlasInferenceTerms,
      node ? require('./number-foundation-terms.js') : root.AtlasNumberFoundationTerms,
      node ? require('./spatial-foundation-terms.js') : root.AtlasSpatialFoundationTerms,
      node ? require('./dynamics-extension-terms.js') : root.AtlasDynamicsExtensionTerms
    );
  if (node) module.exports = api;
  root.AtlasExpansionTerms = api;
})(
  typeof globalThis !== 'undefined' ? globalThis : this,
  function (Systems, Inference, Numbers, SpaceModels, DynamicsModels) {
    'use strict';
    const entries = new Map(),
      sources = {};
    for (const provider of [Systems, Inference, Numbers, SpaceModels, DynamicsModels].filter(
      Boolean
    )) {
      for (const entry of provider.entries) {
        const previous = entries.get(entry.id),
          merged = { ...previous, ...entry };
        for (const key of [
          'symbols',
          'tokens',
          'mathSymbols',
          'aliases',
          'sourceKeys',
          'grammarCards',
          'formulaCards',
          'lookupAliases',
          'relatedIds',
          'excludedFormulaCards'
        ]) {
          if (
            previous &&
            ['grammarCards', 'formulaCards'].includes(key) &&
            !Array.isArray(previous[key])
          ) {
            delete merged[key];
            continue;
          }
          if (previous?.[key] || entry[key])
            merged[key] = [...new Set([...(previous?.[key] || []), ...(entry[key] || [])])];
        }
        entries.set(entry.id, merged);
      }
      Object.assign(sources, provider.sources);
    }
    return Object.freeze({
      entries: Object.freeze([...entries.values()]),
      sources: Object.freeze(sources)
    });
  }
);
