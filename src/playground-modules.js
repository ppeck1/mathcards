/* Installed learning modules adapt to one host contract. No module owns a clock. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./module-registry.js'):root.AtlasModuleRegistry,node?require('./models.js'):root.AtlasModels,node?require('./model-registry.js'):root.AtlasModelRegistry,node?require('./visuals.js'):root.AtlasVisuals,node?require('./spatial.js'):root.AtlasSpatial,node?require('./experiments.js'):root.AtlasExperiments,node?require('./story-library.js'):root.AtlasStoryLibrary,node?require('./scene-inspector.js'):root.AtlasSceneInspector,node?null:root.AtlasCatalog,node?require('./symbol-bindings.js'):root.AtlasSymbolBindings,node?require('./module-graphs.js'):root.AtlasModuleGraphs,node?require('./module-ports.js'):root.AtlasModulePorts);
  if(node)module.exports=api;root.AtlasModules=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Registry,M,D,V,S,Experiments,Stories,Inspector,Catalog,Symbols,Graphs,Ports){
  'use strict';
  const registry=Registry.createRegistry();
  const numeric=(key,label,min,max,extra={})=>({key,label,min,max,type:'number',...extra});
  const select=(key,label,options)=>({key,label,type:'select',options:options.map(([value,label])=>({value,label}))});
  const legacy={
    'function-composition':{
      title:'Function composition',expression:'f(g(x))',unit:'',defaultView:'spatial',
      controls:[numeric('x','Input x',-10,10),select('order','Operation order',[['f_after_g','g first, then f'],['g_after_f','f first, then g']]),...['a','b','c','m','n'].map((key,i)=>numeric(key,['a (quadratic)','b (linear)','c (constant)','m (slope)','n (offset)'][i],-5,5,{group:'Function parameters'}))],
      sweeps:[{key:'x',label:'Input x',min:-10,max:10}],
      presets:[{id:'identity',label:'Make f the identity',parameters:{a:0,b:1,c:0}}],
      setting:'Real quadratic f and affine g. Other function types require their own domain and type checks.',
      limits:'A difference at one input refutes equality. Agreement at one input does not prove the functions are equal.'
    },
    'real-logarithm':{
      title:'Real logarithm',expression:'logᵦ(x)',unit:'',
      controls:[numeric('base','Base b',.25,8),numeric('argument','Argument x',.125,64)],
      sweeps:[{key:'argument',label:'Argument x',min:.125,max:64},{key:'base',label:'Base b',min:1.25,max:8}],
      presets:[{id:'half',label:'Base ½',parameters:{base:.5}},{id:'invalid-base',label:'Try base 1',parameters:{base:1}},{id:'zero-argument',label:'Try x = 0',parameters:{argument:0}}],
      setting:'A real logarithm in a fixed base.',limits:'b > 0, b ≠ 1, x > 0. Slider ranges are viewing conveniences; numeric entries may expose invalid cases.'
    },
    derivative:{
      title:'Derivative at a point',expression:'Δf / h',unit:'',
      controls:[select('preset','Function',[['cubic','Cubic · f(x) = x³'],['linear','Linear · f(x) = 3x + 1'],['absolute','Corner · f(x) = |x|']]),numeric('a','Point a',-3,3),numeric('h','Signed step h',-1,1)],
      sweeps:[{key:'a',label:'Point a',min:-3,max:3},{key:'h',label:'Step h → 0',min:.01,max:1,direction:-1}],
      presets:[{id:'corner',label:'Inspect the corner',parameters:{preset:'absolute',a:0,h:.1}},{id:'zero-step',label:'Try h = 0',parameters:{h:0}}],
      setting:'Secant and analytic tangent of the selected real function.',limits:'Secant values are finite calculations. A finite graph cannot establish the existence of a limit.'
    }
  };
  const ids=['probability-distribution','expected-value','entropy','countability','finite-state-machine','open-set','quantifier-scope','relation','equivalence','inference','torque','logical-connectives','quantifier','cross-product','stability','conditional-probability','variance','recurrence','set','population-sample','computational-complexity','directional-derivative','tangent-plane','gradient-descent','chain-rule','partial-derivative','gradient','linear-combination','basis','matrix-product','vector','inner-product','matrix-linear-map','determinant','function','exponentiation','limit','signed-accumulation','integral-accumulation','quadratic-optimization','complex-multiplication','bayes-theorem','graph-theory','resonance','chaos-theory','fractal-geometry','wave-interference','probability','vector-rotation','pythagorean-theorem','ratio-scale','linear-model','exponential-change','function-composition','real-logarithm','derivative'];
  const legacyReadout={
    'function-composition'(p,r,{view,format:f}){
      const fg=p.order==='f_after_g';return{expression:(fg?'f(g(x))':'g(f(x))')+' = '+f(r.output),stats:[{label:'INPUT',value:p.x,note:'starting value'},{label:'INTERMEDIATE',value:r.intermediate,note:(fg?'g':'f')+' acts first'},{label:'OUTPUT',value:r.output,note:(fg?'f':'g')+' acts second'}],insight:view==='spatial'?'Each cube’s volume represents magnitude. Follow the input through both transformations; negative values keep their sign.':view==='geometry'?'Each square’s area represents magnitude. A shared scale exposes which step amplifies, shrinks, or reverses the input.':'The curve traces every input through both transformations. Drag the glowing point to follow its output.'};
    },
    'real-logarithm'(p,r,{format:f}){return{expression:'log'+f(p.base)+'('+f(p.argument)+') '+(r.exactDisplay!=null?'=':'≈')+' '+f(r.output),stats:[{label:'BASE',value:p.base,note:'the multiplication factor'},{label:'EXPONENT',value:r.output,note:r.exactDisplay!=null?'recognized exact identity':'numerical approximation'},{label:'REBUILT ARGUMENT',value:r.inverse,note:'b raised to this exponent'}],insight:r.valid?(p.base>1?'Equal exponent steps multiply the argument by '+f(p.base)+'. Drag the marker and follow how the spacing changes.':'For a base between 0 and 1, positive exponent steps shrink the power. Negative exponents grow it.'):(r.message||'Enter a positive argument and a positive base other than 1.')};},
    derivative(p,r,{view,format:f}){return{expression:'Δf / h = '+f(r.output),stats:[{label:'RUN · h',value:p.h,note:'horizontal change'},{label:'RISE · Δf',value:r.fah==null||r.fa==null?null:r.fah-r.fa,note:'vertical change'},{label:'SLOPE AT a',value:r.analytic,note:r.analytic==null?'two-sided derivative undefined':'analytic derivative'}],insight:p.h===0?'The run is zero, so the finite quotient is undefined. The analytic tangent is computed independently.':r.analytic===null?'At this corner the left slope is −1 and the right slope is +1. There is no two-sided derivative.':view==='spatial'?'Travel along the ribbon to see the slope change. Depth is a viewing aid; the function still has one input.':'Drag a to travel along the curve, or drag the h grip to change the run. The local magnifier makes a tiny triangle visible.'};}
  };
  const everydayReadout={
    'ratio-scale'(p,r,{format:f}){return{expression:f(p.amount)+' × '+f(p.servings)+' / '+f(p.baseServings)+' = '+f(r.output)+' g',stats:[{label:'ORIGINAL RECIPE',value:p.amount,note:'grams for '+f(p.baseServings)+' people'},{label:'NEW TABLE',value:p.servings,note:'people to serve'},{label:'SCALE FACTOR',value:r.factor,note:'multiply every ingredient by this'}],insight:'Each serving takes the same share. Stretch the table and watch the ingredient amount grow in direct proportion.'};},
    'linear-model'(p,r,{format:f}){return{expression:f(p.initial)+' + '+f(p.rate)+' × '+f(p.time)+' = '+f(r.output)+' L',stats:[{label:'ALREADY IN THE TANK',value:p.initial,note:'litres at the start'},{label:'FLOW RATE',value:p.rate,note:'litres added each minute'},{label:'ADDED WATER',value:r.increment,note:'litres after '+f(p.time)+' minutes'}],insight:'Every extra minute adds the same amount of water. Change the flow rate to change how quickly the tank fills.'};},
    'exponential-change'(p,r,{format:f}){return{expression:f(p.initial)+' × '+f(p.factor)+'^'+f(p.time)+' = '+f(r.output)+' px',stats:[{label:'ORIGINAL WIDTH',value:p.initial,note:'pixels before resizing'},{label:'SCALE PER PASS',value:p.factor,note:'each pass multiplies the previous width'},{label:'RESIZE PASSES',value:p.time,note:'fractional passes reveal continuous change'}],insight:'The same percentage acts on a changing width. A factor below 1 shrinks the image; a factor above 1 grows it.'};}
  };
  function symbolKeys(id,token){
    if(typeof id!=='string'||typeof token!=='string')return[];
    const module=registry.get(id);
    if(module?.symbols&&Object.prototype.hasOwnProperty.call(module.symbols,token))return module.symbols[token];
    return Symbols?.keysFor(id,token)||[];
  }
  for(const id of ids){
    const old=legacy[id],card=Catalog?.cards?.find(c=>c.slug===id),meta=old||D.specs(id);
    const controls=old?.controls||D.controls(id).map(field=>({...field,type:field.type||'number'}));
    const sweeps=meta.sweeps||controls.filter(field=>field.type==='number').map(({key,label,min,max})=>({key,label,min,max}));
    const primary=meta.axis||sweeps[0].key;
    const viewIds=old?['geometry','spatial','graph']:(meta.views||['geometry','graph']);
    registry.register({
      id,version:String(card?.interactive.model_revision||'1'),title:card?.title||meta.title,expression:meta.expression,unit:meta.unit||'',
      defaults:()=>M.defaults(id),validateParams:p=>M.validateParams(id,p),evaluate:p=>M.evaluate(id,p),controls,sweeps,ports:Ports.forModule(id),
      views:viewIds.map(view=>({id:view,label:({geometry:'◈ Geometry',spatial:'⬡ 3D space',graph:'⌁ Graph'})[view],camera:view==='spatial',inspector:!(id==='fractal-geometry'&&view==='graph'),render:(p,context)=>(view==='spatial'&&old?S:view==='graph'&&Graphs.has(id)?Graphs:V).render(id,p,{...context,id:context.id||context.slot||id,view})})),
      defaultView:meta.defaultView||'geometry',presets:meta.presets||[],experiments:Experiments.forSlug(id),story:Stories.forSlug(id),
      setting:old?.setting||card?.definition.setting||meta.title,limits:old?.limits||card?.definition.conditions.join(' ')||'Use the declared finite control ranges.',
      readout:meta.readout||legacyReadout[id]||everydayReadout[id]||((p,r,{format:f,view})=>({expression:meta.expression+' → '+f(r.output)+' '+meta.unit,stats:sweeps.slice(0,3).map(({key,label})=>({label,value:p[key],note:'current input'})),insight:view==='graph'?'Follow '+meta.primaryLabel+' as '+controls.find(control=>control.key===primary).label+' changes. The graph holds the other controls fixed; its caption explains sampling and interpolation.':meta.insight||'Follow the highlighted input through the calculation into the geometry. Finite samples illustrate this model.'})),
      canInterpolate:(a,b)=>M.evaluate(id,a).valid&&M.evaluate(id,b).valid&&controls.every(field=>!field.discrete||a[field.key]===b[field.key])&&(id!=='real-logarithm'||(a.base-1)*(b.base-1)>0),
      referenceWeight:(p,r)=>id==='real-logarithm'?Math.abs(p.argument||0):Math.max(Math.abs(r.output||0),Math.abs(r.intermediate||0),Math.abs(p.x||0)),
      primarySweep:primary,shareScale:id!=='derivative',
      inspector:Inspector.supported(id)?(host,options)=>Inspector.mount(host,{...options,slug:id}):undefined,
      validateInspectorState:state=>Inspector.validateState(id,state),
      replay: id==='chaos-theory'?{key:'generation',from:0,to:36,mode:'once'}:null
    });
  }
  return Object.freeze({...registry,symbolKeys});
});
