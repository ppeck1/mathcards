/* Small routing boundary: installed models keep their own validation and scenes. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./everyday.js'):root.AtlasEveryday,node?require('./discovery.js'):root.AtlasDiscovery,node?require('./frontier.js'):root.AtlasFrontier,node?require('./foundations.js'):root.AtlasFoundations,node?require('./linear-algebra.js'):root.AtlasLinearAlgebra,node?require('./linear-workflows.js'):root.AtlasLinearWorkflows,node?require('./calculus-fields.js'):root.AtlasCalculusFields,node?require('./local-change.js'):root.AtlasLocalChange,node?require('./atlas-gaps.js'):root.AtlasGaps,node?require('./data-iteration.js'):root.AtlasDataIteration);
  if(node)module.exports=api;root.AtlasModelRegistry=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Everyday,Discovery,Frontier,Foundations,Linear,Workflows,Calculus,LocalChange,Gaps,DataIteration){
  'use strict';
  const providers=[Everyday,Discovery,Frontier,Foundations,Linear,Workflows,Calculus,LocalChange,Gaps,DataIteration].filter(Boolean);
  const provider=slug=>providers.find(model=>model.has(slug));
  const api={has:slug=>!!provider(slug),isDiscovery:slug=>!!(Discovery?.has(slug)||Frontier?.has(slug)||Foundations?.has(slug)||Linear?.has(slug)||Workflows?.has(slug)||Calculus?.has(slug)||LocalChange?.has(slug)||Gaps?.has(slug)||DataIteration?.has(slug))};
  for(const method of ['defaults','controls','specs','validateParams','evaluate','curveValue','render'])api[method]=(slug,...args)=>{
    const model=provider(slug);if(!model)throw new RangeError('Unknown model: '+slug);return model[method](slug,...args);
  };
  return Object.freeze(api);
});
