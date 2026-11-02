/* Scoped mathematical symbols bind to actual marks in each installed model. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports,
    api = factory(node ? require('./inference-bindings.js') : root.AtlasInferenceBindings);
  if (node) module.exports = api;
  root.AtlasExpansionBindings = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Inference) {
  'use strict';
  const records = {
    'vector-field': { x: ['x'], y: ['y'], a: ['rate'], result: ['output'] },
    'continuous-flow': { t: ['time'], 'x₀': ['initial'], a: ['rate'], result: ['output'] },
    'basin-attraction': { 'x₀': ['initial'], t: ['time'], result: ['output'] },
    'fold-bifurcation': { μ: ['mu'], result: ['output'] },
    'cusp-potential': { b: ['bias'], a: ['shape'], result: ['output'] },
    'partial-order': { A: ['a'], B: ['b'], result: ['output'] },
    'meet-join': { A: ['a'], B: ['b'], operation: ['resultMask'], result: ['output'] },
    'lattice-distributivity': { A: ['a'], B: ['b'], C: ['c'], result: ['output'] },
    'heat-balance': { Q: ['heat'], result: ['output'] },
    'gibbs-free-energy': {
      T: ['temperature'],
      ΔH: ['enthalpy'],
      ΔS: ['entropy'],
      result: ['output']
    },
    'ideal-gas': { V: ['volume'], T: ['temperature'], result: ['output'] },
    'artificial-neuron': { x: ['signal'], w: ['weight'], b: ['bias'], result: ['output'] },
    'hebbian-learning': { u: ['pre'], v: ['post'], η: ['rate'], result: ['output'] }
  };
  return Object.freeze({ ...records, ...Inference });
});
