import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

test('the editable offline entry loads all thirty-eight working model and story families in browser order',()=>{
  const index=fs.readFileSync(new URL('../src/index.html',import.meta.url),'utf8');
  const scripts=[...index.matchAll(/<script\s+src="([^"]+)"[^>]*data-development/g)].map(([,src])=>src.split('?')[0]);
  assert.ok(scripts.length>0);
  const context=vm.createContext({});
  for(const name of scripts){if(name==='app.js')break;vm.runInContext(fs.readFileSync(new URL('../src/'+name,import.meta.url),'utf8'),context,{filename:name});}
  assert.equal(typeof context.AtlasReadableValues.createPacer,'function');
  assert.equal(typeof context.AtlasPlayground.renderInto,'function');
  assert.equal(typeof context.AtlasStoryJourney.itinerary,'function');
  assert.equal(typeof context.AtlasCalculationFlow.mount,'function');
  assert.equal(typeof context.AtlasFractalLens.viewport,'function');
  assert.equal(typeof context.AtlasFractalLens.selfSimilarRegion,'function');
  assert.equal(typeof context.AtlasFractalLens.comparison,'function');
  assert.equal(typeof context.AtlasChaosTrace.snapshot,'function');
  assert.equal(typeof context.AtlasSceneInspector.mount,'function');
  assert.equal(context.AtlasModules.list().length,38);
  assert.equal(typeof context.AtlasPlotView.render,'function');
  assert.equal(typeof context.AtlasModuleGraphs.describe,'function');
  assert.equal(typeof context.AtlasModulePorts.forModule,'function');
  assert.equal(typeof context.AtlasWorkspaceLinks.createSession,'function');
  assert.equal(typeof context.AtlasWorkspacePanel.mount,'function');
  assert.equal(typeof context.AtlasWorkspaceStore.createStore,'function');
  assert.equal(typeof context.AtlasWorkspaceRuntime.create,'function');
  assert.equal(typeof context.AtlasWorkspaceLibrary.mount,'function');
  assert.equal(typeof context.AtlasSceneInspector.validateState,'function');
  for (const module of context.AtlasModules.list()) {
    assert.ok(module.views.some(view=>view.id==='graph'),module.id+' has a graph view');
    assert.ok(module.ports.length>0,module.id+' declares compatible quantities');
    assert.equal(module.validateInspectorState(null).valid,true,module.id+' declares safe saved view state');
    const instance=context.AtlasModules.createInstance(module.id,{slot:'offline-'+module.id});
    assert.match(instance.render('graph'),/<svg\b/,module.id+' graph loads in offline script order');
    instance.destroy();
  }
  assert.equal(typeof context.AtlasPlayground.markup,'function');
  assert.equal(typeof context.AtlasModelData.sample,'function');
  assert.equal(typeof context.AtlasCardPreviews.render,'function');
  assert.equal(context.AtlasCardPreviews.list().length,38);
  assert.equal(typeof context.AtlasConceptAtlas.create,'function');
  const atlas=context.AtlasConceptAtlas.create(context.AtlasCatalog);
  assert.equal(atlas.nodes.length,38);
  assert.equal(typeof context.AtlasExplorer.create,'function');
  assert.equal(typeof context.AtlasMathIndex.create,'function');
  assert.equal(typeof context.AtlasSearch.create,'function');
  const definitions=context.AtlasMathIndex.create(context.AtlasCatalog);
  assert.ok(definitions.entries.length>=180);
  assert.equal(definitions.search('δ')[0].id,'delta-small');
  assert.ok(definitions.forCard('determinant').length>0);
  assert.equal(typeof context.AtlasLandscape.render,'function');
  assert.equal(typeof context.AtlasRegions.create,'function');
  const landscape=context.AtlasExplorer.create(context.AtlasCatalog);
  assert.equal(landscape.areas.availableCount,38);
  assert.equal(landscape.areas.topics.length,24);
  assert.equal(landscape.stateFromPath([]).mode,'map');
  assert.equal(typeof context.AtlasSemanticLinks.paint,'function');
  assert.equal(typeof context.AtlasSymbolBindings.keysFor,'function');
  for(const story of context.AtlasStoryLibrary.all()){
    assert.equal(context.AtlasModels.evaluate(story.slug,context.AtlasModels.defaults(story.slug)).valid,true);
    assert.equal(context.AtlasStoryLinks.forSlug(story.slug).variableKey,story.timeline.key);
    assert.equal(context.AtlasStoryJourney.itinerary(story,story.steps.length-1).toProgress,1);
    assert.match(context.AtlasStoryScenes.render(story.slug,story.parameters,{storyFocus:'input'}),/data-story-part/);
  }
  assert.equal(context.AtlasStoryLibrary.all().length,38);
});
