import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Lens=require('../src/fractal-lens.js'),Models=require('../src/models.js'),Scenes=require('../src/story-scenes.js'),Stories=require('../src/story-library.js'),Player=require('../src/life-story.js'),Links=require('../src/story-links.js'),Readable=require('../src/readable-values.js');

test('story frames preserve chosen starting values throughout a replay without changing authored defaults',()=>{
  const story=Stories.forSlug('chaos-theory'),base={...story.parameters,seed:.4,delta:.000001},before={...base};
  for(const progress of [0,.1,.5,.99,1]){
    const state=Player.parametersAt(story,progress,base),result=Models.evaluate(story.slug,state);
    assert.equal(state.seed,.4);assert.equal(state.delta,.000001);assert.equal(state.generation,12*progress);
    assert.equal(result.startB,.400001);assert.equal(result.amplification,result.output/.000001);
    assert.equal(result.valid,true);
  }
  assert.deepEqual(base,before);assert.equal(story.parameters.delta,.0001);
});

test('new story parameter names retain their units and are not overwritten by legacy scene aliases',()=>{
  const story=Stories.forSlug('quadratic-optimization'),values=Scenes.values(story.slug,story.parameters);
  assert.equal(values.width,5);assert.equal(values.area,25);assert.equal(values.output,25);
  assert.equal(Player.formatTemplate('{{width}} × {{otherSide}} = {{output}} m²',values),'5 × 5 = 25 m²');
});

test('precise starting quantities remain visibly distinct while moving readings are rounded',()=>{
  const values=Scenes.values('chaos-theory',{seed:.35,delta:.000001,generation:28,rate:3.8});
  const format=key=>Readable.format(values[key],{settled:true,precision:Links.quantityFor('chaos-theory',key).precision});
  assert.notEqual(format('seed'),format('startB'));
  assert.equal(format('initialGap'),'0.000001');
  assert.match(Stories.forSlug('chaos-theory').conclusionTemplate,/\{\{amplification\}\}/);
});

test('camera-only painting updates the transform and inverse locator without rebuilding mathematical paths',()=>{
  const node=initial=>({attrs:{...initial},getAttribute(key){return this.attrs[key]??null;},setAttribute(key,value){this.attrs[key]=String(value);}});
  const camera=node({transform:'old'}),window=node({}),map=node({}),lens=node({'data-zoom':'3'}),path=node({d:'unchanged finite geometry','data-value':'12.6419753086'});
  map.querySelector=()=>window;
  const nodes={'[data-role="fractal-lens"]':lens,'[data-role="fractal-lens-camera"]':camera,'[data-role="fractal-minimap"]':map};
  const container={querySelector:selector=>nodes[selector]||null};
  assert.equal(Lens.paint(container,{zoom:9}),true);
  const view=Lens.viewport({zoom:9});assert.equal(camera.attrs.transform,view.transform);assert.equal(Number(window.attrs.width),Number(view.sourceBox.width.toFixed(8)));
  assert.equal(path.attrs.d,'unchanged finite geometry');assert.equal(path.attrs['data-value'],'12.6419753086');
  assert.equal(Lens.paint(container,{zoom:1}),false,'Changing to overview asks the renderer to restore its reference inset once.');
  assert.equal(Lens.paint({querySelector:()=>null},{zoom:9}),false);
});

test('chaos calculation highlights share the exact whole-generation endpoints and gap',()=>{
  const Discovery=require('../src/discovery.js');
  const attributes=(html,role)=>Object.fromEntries([...html.match(new RegExp('<[^>]*data-role="'+role+'"[^>]*>'))[0].matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
  for(const generation of [0,1,1.4,12,35.9,36]){
    const parameters={generation,rate:3.8,seed:.35,delta:.000001},values=Scenes.values('chaos-theory',parameters);
    const html=Discovery.render('chaos-theory',parameters,{chaosTrace:true});
    for(const id of ['a','b']){
      const segment=attributes(html,'chaos-step-'+id);
      assert.equal(Number(segment['data-from']),values.iteration);assert.equal(Number(segment['data-to']),values.nextIteration);
      assert.ok(Math.abs((225-Number(segment.y1))/135-values[id==='a'?'stepInputA':'stepInputB'])<1e-5);
      assert.ok(Math.abs((225-Number(segment.y2))/135-values[id==='a'?'stepNextA':'stepNextB'])<1e-5);
    }
    assert.ok(Math.abs((322-Number(attributes(html,'chaos-step-gap').cy))/50-values.stepGapAfter)<1e-5);
    assert.doesNotMatch(Discovery.render('chaos-theory',parameters),/data-role="chaos-step-/);
  }
});
