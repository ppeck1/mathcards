/* Semantic links between story language and physical marks; no clocks or math. */
(function(root,factory){
  const api=factory(typeof module==='object'&&module.exports?require('./story-library.js'):root.AtlasStoryLibrary);
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasStoryLinks=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Discovery){
  'use strict';
  function freeze(value){if(value&&typeof value==='object'){Object.values(value).forEach(freeze);Object.freeze(value);}return value;}
  const records=freeze({
    'function-composition':{variableKey:'x',symbol:'x',variableLabel:'Border width',unit:'m',effectLabel:'The cyan bracket marks the border; the gold outline marks the whole footprint.',steps:[
      {focus:'reference',label:'The fixed patch',description:'The small herb patch stays one square metre.'},
      {focus:'intermediate',label:'Build one full side',description:'The side bracket spans x + 1 + x metres.'},
      {focus:'output',label:'Watch the footprint',description:'The gold outline follows both growing dimensions of the patio.'},
      {focus:'output',label:'Watch the footprint',description:'The gold outline follows both growing dimensions of the patio.'}
    ]},
    'real-logarithm':{variableKey:'argument',symbol:'R',variableLabel:'Light ratio',unit:'×',effectLabel:'The cyan bar measures the light ratio; the gold readout gives its number of stops.',steps:[
      {focus:'reference',label:'One reference exposure',description:'The reference tick is at one times the original light.'},
      {focus:'input',label:'Change the light ratio',description:'The cyan bar endpoint moves in direct proportion to the light ratio.'},
      {focus:'output',label:'Count the doublings',description:'The gold stop value counts the base-two doublings of the light ratio.'},
      {focus:'output',label:'Read the stops',description:'The gold stop value is the base-two logarithm of the light ratio.'}
    ]},
    'derivative':{variableKey:'a',symbol:'t',variableLabel:'Time on the track',unit:'s',effectLabel:'The cyan handle sets time; the distance bracket follows position and the gold arrow shows speed.',steps:[
      {focus:'intermediate',label:'Locate the cart',description:'The position bracket spans the distance travelled from the starting mark.'},
      {focus:'intermediate',label:'Measure the next interval',description:'The gap between the solid cart and faint cart is the next interval’s travel.'},
      {focus:'output',label:'See the speed',description:'The gold arrow grows with the instantaneous speed, not with position.'},
      {focus:'output',label:'See the speed',description:'The gold arrow grows with the instantaneous speed, not with position.'}
    ]},
    'ratio-scale':{variableKey:'servings',symbol:'s',variableLabel:'Target portions',unit:'portions',effectLabel:'The cyan portion count sets the batch size; the gold fill level shows the flour needed.',steps:[
      {focus:'reference',label:'Keep the original batch',description:'The left jar holds the original ingredient mass on the same scale.'},
      {focus:'input',label:'Change the portions',description:'The cyan target count is the variable that changes the right jar.'},
      {focus:'output',label:'Scale the flour',description:'The gold level follows the target flour mass on the shared scale.'},
      {focus:'output',label:'Measure the flour',description:'The gold level and bracket follow the target flour mass.'}
    ]},
    'linear-model':{variableKey:'time',symbol:'t',variableLabel:'Elapsed time',unit:'min',effectLabel:'The cyan time handle sets the filling interval; the gold surface marks the resulting volume.',steps:[
      {focus:'reference',label:'Keep the starting layer',description:'The dashed starting line marks water already in the tank.'},
      {focus:'input',label:'Let time pass',description:'The cyan time handle changes how long the tap runs.'},
      {focus:'output',label:'Combine the layers',description:'The gold surface follows the total, with the starting layer still marked.'},
      {focus:'output',label:'Read the full tank',description:'The gold surface and volume bracket follow the total water.'}
    ]},
    'exponential-change':{variableKey:'time',symbol:'n',variableLabel:'Resize passes',unit:'passes',effectLabel:'The cyan pass count controls repeated scaling; the gold edge and bracket show the current photo width.',steps:[
      {focus:'reference',label:'Keep the original frame',description:'The dashed outline preserves the original photo dimensions.'},
      {focus:'input',label:'Change the pass count',description:'The cyan pass count moves continuously between complete resize passes.'},
      {focus:'output',label:'Follow the current width',description:'The gold right edge follows repeated scaling of the current width.'},
      {focus:'output',label:'Read the new width',description:'The gold right edge and width bracket follow the current photo frame.'}
    ]}
  });
  // Quantity names belong to the story, rather than to the model's internal keys.
  // A role can highlight several related marks; descriptions keep their units and
  // meanings distinct instead of claiming every highlighted mark is this value.
  const quantities=freeze({
    'function-composition':{
      x:{label:'Border width',role:'input',description:'The cyan bracket measures one border width, from the outer edge to the fixed herb patch.'},
      intermediate:{label:'Outside side length',role:'intermediate',description:'The violet dimension line spans one full outside side: a border, the one-metre patch, and a second border.'},
      output:{label:'Total footprint',role:'output',description:'The gold outline encloses the total area, including the herb patch and the paved border. Both its width and height change.'}
    },
    'real-logarithm':{
      argument:{label:'Exposure ratio',role:'input',description:'The cyan bar length measures exposure relative to the fixed one-times reference. Picture glow is qualitative.'},
      output:{label:'Doubling stops',role:'output',description:'The gold stop readout counts base-two doublings of the exposure ratio. Negative stops mean less exposure than the reference.'}
    },
    'derivative':{
      a:{label:'Time on the track',role:'input',description:'The cyan handle sets the current time in seconds. The solid cart shows the position at that time.'},
      position:{label:'Cart position',role:'intermediate',description:'The solid cart and the long violet distance bracket show metres from the starting point. Position is a distance, not a speed.'},
      output:{label:'Average speed over the next 0.1 seconds',role:'intermediate',description:'The short violet gap measures the next 0.1-second travel distance. Dividing that distance by 0.1 seconds gives this average speed; the gap itself measures metres.'},
      analytic:{label:'Instantaneous speed',role:'output',description:'The gold arrow and speed readout show speed at the solid cart, in metres per second. This is distinct from position and the next 0.1-second average.'}
    },
    'ratio-scale':{
      servings:{label:'Target portion-equivalents',role:'input',description:'The cyan target count sets the batch size. The right jar changes with it while the reference batch stays fixed.'},
      factor:{label:'Batch multiplier',role:'intermediate',description:'The violet multiplier is the target portion count divided by the reference count. Applying it to the reference flour mass gives the target mass.'},
      output:{label:'Target flour mass',role:'output',description:'The gold fill level and mass bracket show flour needed for the target batch, on the same mass scale as the reference jar.'},
      perServing:{label:'Flour per portion',role:'reference',description:'The flour per portion stays fixed as the batch changes. Each portion uses the same share of flour as the reference recipe.'}
    },
    'linear-model':{
      time:{label:'Elapsed filling time',role:'input',description:'The cyan time handle sets how long the tap runs. More time at the fixed flow rate adds more water.'},
      increment:{label:'Added water',role:'intermediate',description:'The violet added-water readout gives flow rate multiplied by elapsed time. This is the water above the fixed starting layer, not the full tank volume.'},
      output:{label:'Total water volume',role:'output',description:'The gold surface and volume bracket show starting water plus added water. The dashed starting line remains fixed below the moving surface.'}
    },
    'exponential-change':{
      time:{label:'Resize pass coordinate',role:'input',description:'The cyan pass count controls repeated scaling. Whole numbers mark completed resizes; fractional values describe the smooth geometric interpolation.'},
      output:{label:'Ideal photo width',role:'output',description:'The gold right edge and width bracket follow the ideal, unrounded width. Height changes with it to preserve the photo aspect ratio.'},
      rounded:{label:'Rounded export width',role:'output',description:'This is the nearest whole-pixel width for final export. The gold frame still shows the ideal, unrounded width; rounding is applied only at export.'}
    }
  });
  const validFocus=new Set(['reference','input','intermediate','output']);
  function forSlug(slug){return Object.hasOwn(records,slug)?records[slug]:Discovery?.linksFor(slug)||null;}
  function quantityFor(slug,key){return Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:Discovery?.quantityFor(slug,key)||null;}
  function focusFor(slug,index){const record=forSlug(slug);return record?record.steps[Math.max(0,Math.min(record.steps.length-1,Math.trunc(index)||0))]:null;}
  function paint(container,slug,focus='input',{showEffect=false}={}){
    if(!container||!forSlug(slug)||typeof container.querySelectorAll!=='function')return 0;
    focus=validFocus.has(focus)?focus:'input';
    if(container.getAttribute?.('data-story-focus')!==focus)container.setAttribute('data-story-focus',focus);
    let count=0;
    for(const node of container.querySelectorAll('[data-story-part]')){
      const parts=(node.getAttribute('data-story-part')||'').split(/\s+/);
      const active=parts.includes(focus)||showEffect&&parts.includes('output');
      const value=active?'true':'false';
      if(node.getAttribute('data-story-active')!==value)node.setAttribute('data-story-active',value);
      if(active)count++;
    }
    return count;
  }
  return Object.freeze({forSlug,quantityFor,focusFor,paint});
});
