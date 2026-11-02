/* Stable application facade: every family uses the same model provider API. */
(function (root, factory) {
  'use strict';
  const node = typeof module === 'object' && module.exports;
  const api = factory(
    node ? require('./model-registry.js') : (root.AtlasModelRegistry || root.AtlasEveryday),
    node ? require('./legacy-models.js') : root.AtlasLegacyModels
  );
  if (node) module.exports = api;
  root.AtlasModels = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Providers, Legacy) {
  'use strict';
  const provider = slug => Providers?.has(slug) ? Providers : Legacy;
  const api = {version: '1'};
  for (const method of ['defaults', 'validateParams', 'evaluate', 'curveValue']) {
    api[method] = (slug, ...args) => {
      const model = provider(slug);
      if (!model) throw new Error('Load the registered model providers before models.js.');
      return model[method](slug, ...args);
    };
  }
  return Object.freeze(api);
});
