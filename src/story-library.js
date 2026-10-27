/* Narrative providers combine here; models and renderers never read prose. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./life-stories.js'):root.AtlasLifeStories,node?require('./discovery-stories.js'):root.AtlasDiscoveryStories,node?require('./frontier-stories.js'):root.AtlasFrontierStories,node?require('./foundation-stories.js'):root.AtlasFoundationStories,node?require('./linear-algebra-stories.js'):root.AtlasLinearAlgebraStories,node?require('./linear-workflow-stories.js'):root.AtlasLinearWorkflowStories,node?require('./calculus-field-stories.js'):root.AtlasCalculusFieldStories,node?require('./local-change-stories.js'):root.AtlasLocalChangeStories,node?require('./atlas-gap-stories.js'):root.AtlasGapStories,node?require('./data-iteration-stories.js'):root.AtlasDataIterationStories,node?require('./book-foundation-stories.js'):root.AtlasBookFoundationStories,node?require('./reasoning-stories.js'):root.AtlasReasoningStories);
  if(node)module.exports=api;root.AtlasStoryLibrary=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Everyday,Discovery,Frontier,Foundations,Linear,Workflows,Calculus,LocalChange,Gaps,DataIteration,BookFoundations,Reasoning){
  'use strict';
  const providers=[Everyday,Discovery,Frontier,Foundations,Linear,Workflows,Calculus,LocalChange,Gaps,DataIteration,BookFoundations,Reasoning].filter(Boolean);
  return Object.freeze({all:()=>providers.flatMap(p=>p.all()),forSlug:slug=>providers.map(p=>p.forSlug(slug)).find(Boolean)||null,linksFor:slug=>providers.map(p=>p.linksFor?.(slug)).find(Boolean)||null,quantityFor:(slug,key)=>providers.map(p=>p.quantityFor?.(slug,key)).find(Boolean)||null,find:id=>providers.map(p=>p.find(id)).find(Boolean)||null});
});
