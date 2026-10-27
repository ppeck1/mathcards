/* Interaction layer: the mathematical models and SVG renderers remain independent. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPlayground = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const escape = v => String(v ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const format = (v, options) => globalThis.AtlasReadableValues.format(v, options);
  function copyViewData(value,active=new Set()){
    if(value===null||typeof value==='string'||typeof value==='boolean'||typeof value==='number'&&Number.isFinite(value))return value;
    if(!value||typeof value!=='object')throw new TypeError('View state must contain finite, ordinary data.');
    const prototype=Object.getPrototypeOf(value);
    if(!Array.isArray(value)&&prototype!==null&&Object.getPrototypeOf(prototype)!==null)throw new TypeError('View state must use plain records.');
    if(active.has(value))throw new TypeError('View state cannot contain cycles.');
    active.add(value);const result=Array.isArray(value)?[]:{};
    for(const key of Reflect.ownKeys(value)){
      if(Array.isArray(value)&&key==='length')continue;
      if(typeof key!=='string'||['__proto__','prototype','constructor'].includes(key))throw new TypeError('Unsafe view state key.');
      const descriptor=Object.getOwnPropertyDescriptor(value,key);
      if(!Object.hasOwn(descriptor,'value')||!descriptor.enumerable)throw new TypeError('View state cannot contain accessors or hidden fields.');
      result[key]=copyViewData(descriptor.value,active);
    }
    active.delete(value);return result;
  }
  function moduleFor(id){const entry=globalThis.AtlasModules?.get(id);if(!entry)throw new RangeError('Unknown playground module: '+id);return entry;}
  function controlMarkup(field,p,slot){
    const id=slot+'-'+field.key,label=field.label+(field.unit?' · '+field.unit:''),value=p[field.key];
    if(field.type==='select')return '<div class="control full"><label class="fine" for="'+escape(id)+'">'+escape(label)+'</label><select id="'+escape(id)+'" data-param="'+escape(field.key)+'">'+field.options.map(option=>'<option value="'+escape(option.value)+'" '+(value===option.value?'selected':'')+'>'+escape(option.label)+'</option>').join('')+'</select></div>';
    const step=field.discrete===true&&Number.isFinite(field.step)?field.step:'any';
    const bounds=Number.isFinite(field.min)&&Number.isFinite(field.max)?' min="'+field.min+'" max="'+field.max+'"':'';
    return '<div class="control"><div class="control-top"><label for="'+escape(id)+'">'+escape(label)+'</label><input id="'+escape(id)+'" type="number" data-param="'+escape(field.key)+'" value="'+escape(value)+'"'+bounds+' step="'+step+'" aria-label="'+escape(label)+' numeric value"></div>'+(bounds?'<input type="range" data-param="'+escape(field.key)+'"'+bounds+' step="'+step+'" value="'+escape(value)+'" aria-label="'+escape(label)+' slider">':'')+'</div>';
  }
  function markup(id,parameters,options={}){
    const module=moduleFor(id),p=parameters||module.defaults(),slot=options.slot||id;
    let controls=module.controls.filter(field=>!field.group).map(field=>controlMarkup(field,p,slot)).join('');
    for(const group of new Set(module.controls.map(field=>field.group).filter(Boolean)))controls+='<details><summary>'+escape(group)+'</summary>'+module.controls.filter(field=>field.group===group).map(field=>controlMarkup(field,p,slot)).join('')+'</details>';
    if(module.presets?.length)controls+='<div class="preset-buttons full">'+module.presets.map(preset=>'<button class="button secondary small" data-preset="'+escape(preset.id)+'">'+escape(preset.label)+'</button>').join('')+'</div>';
    const intro=module.controls.length?'<p class="eyebrow">YOU’RE IN CONTROL</p><h3>Pull a thread.</h3><p>Drag a slider or enter a precise value.</p>':'<p class="eyebrow">LOOK CLOSER</p><h3>Inspect the model.</h3><p>Explore the views or pin a comparison.</p>';
    return '<div class="panel lab" data-slot="'+escape(slot)+'" data-slug="'+escape(id)+'"><div class="lab-header"><div class="lab-title"><strong>The visual playground</strong><span class="lab-subtitle">'+(module.controls.length?'Change one thing. Follow what happens.':'Look closely. Explore another perspective.')+'</span></div><button class="button secondary small" data-reset>Reset</button></div><div class="lab-body"><div class="lab-visual"><div class="lab-surface"></div><details class="numeric-detail"><summary>Inspect the numbers &amp; tables</summary><div class="output"></div></details></div><div class="lab-controls"><div class="control-intro">'+intro+'</div>'+controls+'<button class="button full" data-capture>Keep experiment ↗</button></div></div><div class="domain"><strong>Setting.</strong> '+escape(module.setting||module.title)+'<br>'+escape(module.limits||'Use this module’s declared parameter ranges.')+'</div></div>';
  }
  // Preserve SVG elements between updates so geometry transitions and particle phases continue.
  function reconcile(current, next, options = {}) {
    if (current.nodeType !== next.nodeType || current.nodeName !== next.nodeName) {
      current.replaceWith(next.cloneNode(true)); return;
    }
    if (current.nodeType === 3) { if (!options.preserveText && current.nodeValue !== next.nodeValue) current.nodeValue = next.nodeValue; return; }
    if (current.nodeType !== 1) return;
    for (const attr of Array.from(current.attributes)) if (!next.hasAttribute(attr.name)) {
      // StoryLinks owns this state. Keep it on a semantic SVG mark so the
      // next paint does not remove and reapply its highlight on every frame.
      if(attr.name==='data-story-active'&&current.namespaceURI==='http://www.w3.org/2000/svg'&&next.hasAttribute('data-story-part'))continue;
      current.removeAttribute(attr.name);
    }
    for (const attr of Array.from(next.attributes)) if (current.getAttribute(attr.name) !== attr.value) current.setAttribute(attr.name, attr.value);
    let i = 0;
    while (i < next.childNodes.length || i < current.childNodes.length) {
      const a = current.childNodes[i], b = next.childNodes[i];
      if (!b) { a.remove(); continue; }
      if (!a) current.append(b.cloneNode(true)); else reconcile(a, b, options);
      i++;
    }
  }
  function updateScene(container, html, options = {}) {
    const focused=container.contains(document.activeElement)?document.activeElement.closest?.('[data-drag-param]')?.dataset.dragParam:null;
    const next = document.createElement('div'); next.innerHTML = html;
    if (options.formatText) {
      const formatNodes = node => { if (node.nodeType === 3) node.nodeValue = options.formatText(node.nodeValue); else for (const child of node.childNodes) formatNodes(child); };
      formatNodes(next);
    }
    for(const attr of container.attributes)next.setAttribute(attr.name,attr.value);
    reconcile(container, next, options);
    // reconcile() compares attributes too; keep the container's structural class.
    if(focused){const handle=container.querySelector('[data-drag-param="'+focused+'"]');if(handle&&handle!==document.activeElement)handle.focus({preventScroll:true});}
  }

  function mount(root, options) {
    const {slug, parameters:p, onChange, onCapture}=options,module=moduleFor(slug);
    const M={evaluate:(_id,parameters)=>module.evaluate(parameters),defaults:()=>module.defaults()};
    const I=globalThis.AtlasSceneInput, Motion=globalThis.AtlasMotion, Readable=globalThis.AtlasReadableValues;
    const instance=globalThis.AtlasModules.createInstance(slug,{slot:root.dataset.slot});
    const parameterKeys=new Set(Object.keys(module.defaults()));
    const renderNumeric=options.renderNumeric||((host,parameters)=>{const result=module.evaluate(parameters);host.innerHTML='<p>'+escape(module.title)+' · '+escape(Readable.format(result.output,{settled:true}))+'</p><dl>'+Object.entries(parameters).map(([key,value])=>'<dt>'+escape(key)+'</dt><dd>'+escape(typeof value==='number'?Readable.format(value,{settled:true}):value)+'</dd>').join('')+'</dl>';});
    const surface=root.querySelector('.lab-surface'), selected=module.sweeps.map(field=>[field.key,field.label,field.min,field.max,field.direction||1]), stories=module.experiments||[];
    const compactMedia=matchMedia('(max-width:600px)');
    const reducedMedia=matchMedia('(prefers-reduced-motion:reduce)');
    let view=module.defaultView, explicitView=false, camera=.65, restoringView=false;
    let pinned=null, playing=false, pausedMode=false, frame=0, last=0, direction=1, speed=1, disposed=false, interacting=false;
    let sweep=selected.find(field=>field[0]===module.primarySweep)||selected[0], lastAnnounced=0, selectedStory=stories[0], prediction=null, phase='ready', storyPath=null, scalePath=null, lessonElapsed=0, sweepPosition=null;
    let focused=false, focusReturn=null, originalOverflow='', inertElements=[];
    surface.innerHTML=`<div class="visual-toolbar"><div class="view-switch" role="group" aria-label="Visualization mode">${module.views.map(item=>'<button type="button" data-view="'+escape(item.id)+'">'+escape(item.label)+'</button>').join('')}</div><button type="button" class="focus-toggle" aria-expanded="false" aria-label="Expand playground">⤢ Focus</button></div><div class="studio-metadata"><span class="scale-chip">Linked to your expression</span><span class="interaction-hint">Grab a glowing handle · arrow keys work too</span></div><div class="visual-stage"></div><div class="camera-control"><label>Rotate the view <input type="range" min="0.15" max="1" step=".01" value=".65" aria-label="Spatial viewing angle"></label><span>Same values. Another perspective.</span></div><div class="lab-transport"><button class="button motion-toggle" type="button" aria-pressed="false">▶ Animate</button><label class="sweep-label">Vary <select class="sweep-select" aria-label="Variable to animate">`+selected.map(([key,label])=>'<option value="'+key+'">'+label+'</option>').join('')+`</select></label><label class="speed-label"><span class="sr-only">Animation speed</span><select class="speed-select" aria-label="Animation speed"><option value="0.5">½×</option><option value="1" selected>1×</option><option value="2">2×</option></select></label><button class="button secondary pin-toggle" type="button" aria-pressed="false">◎ Pin comparison</button></div><div class="timeline"><div><span class="timeline-label">Scrub the input</span><output class="timeline-value"></output></div><input type="range" min="0" max="100" step=".1" value="0" aria-label="Scrub the experiment"></div><div class="journey-status" hidden></div><div class="live-readout"></div><p class="lab-insight"></p><details class="model-data"><summary>Read the model as data</summary><p class="model-data-status"></p><div class="model-data-content"></div></details><section class="experiment-deck" aria-label="Guided experiments"><div class="deck-heading"><div><p class="eyebrow">FOLLOW A QUESTION</p><h3>What do you think will happen?</h3></div><span>Predict. Play. Notice.</span></div><div class="story-tabs" role="group" aria-label="Choose an experiment">`+stories.map((story,i)=>'<button type="button" data-story="'+story.id+'" aria-pressed="'+(i===0)+'"><span>0'+(i+1)+'</span>'+escape(story.title)+'</button>').join('')+`</div><div class="story-content"></div></section><p class="sr-only lab-status" role="status" aria-live="polite"></p>`;
    const stage=surface.querySelector('.visual-stage'), playButton=surface.querySelector('.motion-toggle'), pinButton=surface.querySelector('.pin-toggle');
    const numeric=root.querySelector('.output'), timeline=surface.querySelector('.timeline input'), storyContent=surface.querySelector('.story-content');
    // A static module has views and results, without inventing an input to animate.
    if(!selected.length){
      for(const selector of ['.motion-toggle','.sweep-label','.speed-label','.timeline']){const node=surface.querySelector(selector);node.hidden=true;node.style.display='none';}
      for(const selector of ['.motion-toggle','.sweep-select','.speed-select','.timeline input'])surface.querySelector(selector).disabled=true;
    }
    if(!module.controls.length){const hint=surface.querySelector('.interaction-hint');hint.hidden=true;hint.style.display='none';}
    let displayed={...p}, motionPhase=0, pendingAnnounce=false, readoutExpression='', referenceKey='', referenceValue,semanticKeys=[];
    const textPacer=Readable.createPacer(), numericScratch=document.createElement('div');let inspector=null;
    const dataDetails=surface.querySelector('.model-data'),dataContent=surface.querySelector('.model-data-content'),dataStatus=surface.querySelector('.model-data-status');let dataKey='',dataAvailable=false;
    if(!globalThis.AtlasModelData)dataDetails.hidden=true;
    function paintData(resting){
      if(!dataDetails.open||!globalThis.AtlasModelData)return;
      if(!resting){Readable.writeText(dataStatus,'Readings held while the shape moves. Pause or release the control to update the table.');return;}
      const key=JSON.stringify(displayed);
      if(key!==dataKey){const data=globalThis.AtlasModelData.sample(module,displayed);dataAvailable=data.valid;updateScene(dataContent,globalThis.AtlasModelData.markup(data));dataKey=key;}
      Readable.writeText(dataStatus,dataAvailable?'Settled readings. The highlighted row is the current input.':'Choose supported inputs to read a table.');
    }
    const activeView=()=>module.views.find(item=>item.id===view);
    const usesInspector=()=>!!inspector&&activeView()?.inspector!==false;
    const follower=Motion.createFollower({initial:p,reducedMotion:()=>reducedMedia.matches,
      canInterpolate:(from,to)=>module.canInterpolate?module.canInterpolate(from,to):module.evaluate(from).valid&&module.evaluate(to).valid,
      onFrame:(values,state)=>{displayed=values;motionPhase+=state.dt/1000;paint(state.settled);}});
    root.dataset.motion='paused';

    function legalValue(key,value){
      const control=module.controls.find(item=>item.key===key),range=module.sweeps.find(item=>item.key===key);
      if(!(range?.discrete||control?.discrete))return value;
      const min=range?.min??control.min,max=range?.max??control.max,step=range?.step??control.step;
      if(!Number.isFinite(step)||step<=0)return value;
      const last=min+Math.floor((max-min)/step)*step;
      const snapped=Math.min(last,Math.max(min,min+Math.round((value-min)/step)*step));
      const checked=module.validateParams({...p,[key]:snapped});
      return checked.valid?checked.parameters[key]:p[key];
    }
    function reference() {
      const peers=options.peerParameters?options.peerParameters():[];
      const sources=[displayed,...peers.filter(peer=>peer!==p),...(scalePath?[scalePath.start,scalePath.finish]:[])];
      const shared=options.sharedScale?.()||false;
      const key=JSON.stringify([sources,shared,sweep,scalePath]);
      if(key===referenceKey)return referenceValue;
      referenceKey=key;
      const ranges=shared?selected.map(item=>[item[0],item[2],item[3]]):scalePath?scalePath.sweep?[[scalePath.sweep.key,scalePath.sweep.from,scalePath.sweep.to]]:[]:sweep?[[sweep[0],sweep[2],sweep[3]]]:[];
      const candidates=[...sources,...ranges.flatMap(range=>sources.flatMap(source=>Array.from({length:21},(_,i)=>({...source,[range[0]]:legalValue(range[0],range[1]+(range[2]-range[1])*i/20)}))))];
      surface.querySelector('.scale-chip').textContent=shared?'Shared scale · same topic':scalePath?'Experiment viewing scale':'One scale throughout the change';
      const weight=module.referenceWeight||((_p,result)=>Math.abs(result.output||0));
      referenceValue=candidates.reduce((best,candidate)=>{const r=M.evaluate(slug,candidate),b=M.evaluate(slug,best),cw=weight(candidate,r),bw=weight(best,b);return cw>bw?candidate:best;},candidates[0]);
      return referenceValue;
    }

    function syncControls(showText=true,settled=true) {
      root.querySelectorAll('[data-param]').forEach(input=>{
        if(document.activeElement===input||input.type==='number'&&!showText)return;
        const value=input.type==='number'?displayed[input.dataset.param]:p[input.dataset.param];
        const next=typeof value==='number'&&Number.isFinite(value)?input.type==='number'?format(value,{settled}).replace(/,/g,'').replace('−','-'):String(value):typeof value==='string'?value:'';
        if(input.value!==next)input.value=next;
      });
      const key=storyPath?.sweep?.key||sweep?.[0];
      let t;
      if(storyPath)t=storyPath.sweep?(p[key]-storyPath.sweep.from)/(storyPath.sweep.to-storyPath.sweep.from):Object.entries(storyPath.finish).every(([name,value])=>p[name]===value)?1:0;
      else if(sweep)t=(p[key]-sweep[2])/(sweep[3]-sweep[2]);
      timeline.value=Number.isFinite(t)?Math.max(0,Math.min(100,t*100)):0;
      surface.querySelector('.timeline-label').textContent=storyPath?'Scrub this experiment':sweep?'Scrub '+sweep[1]:'';
      const inputLabel=module.controls.find(field=>field.key===key)?.label||selected.find(field=>field[0]===key)?.[1]||key;
      if(showText)Readable.writeText(surface.querySelector('.timeline-value'),storyPath&&!storyPath.sweep?(t===1?'After':'Before'):key?inputLabel+' = '+format(displayed[key],{settled}):'');
      surface.querySelectorAll('[data-view]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.view===view)));
      surface.querySelector('.view-switch').setAttribute('aria-label','Visualization mode. '+activeView().label+' selected.');
      surface.querySelector('.sweep-select').value=sweep?.[0]||'';
      surface.querySelector('.camera-control').hidden=!activeView().camera;
      inspectorHost.hidden=!usesInspector();
      pinButton.textContent=pinned?'◉ Clear comparison':'◎ Pin comparison';pinButton.setAttribute('aria-pressed',String(!!pinned));
    }
    function readout(result,parameters,settled){
      const f=value=>Readable.format(value,{settled});
      const baseline=pinned?module.evaluate(pinned):null;
      const data=module.readout?module.readout(parameters,result,{view,format:f,baseline}):{expression:(module.expression||module.title)+' → '+f(result.output),stats:[{label:'OUTPUT',value:result.output,note:module.unit||''}],insight:''};
      readoutExpression=module.readout&&typeof data.expression==='string'?data.expression.trim():'';
      let insight=data.insight||'';
      if(result.errors?.length)insight=result.errors.map(error=>error.message).join(' ');
      if(pinned){
        const comparison=result.valid&&baseline?.valid?data.comparison:null;
        const semantic=comparison&&typeof comparison.baselineValue==='string'&&comparison.baselineValue.trim()&&typeof comparison.change==='string'&&comparison.change.trim();
        insight+=' Pinned output: '+(semantic?comparison.baselineValue:f(baseline.output))+'. Change: '+(semantic?comparison.change:f(result.output!=null&&baseline.output!=null?result.output-baseline.output:null))+'.';
      }
      updateScene(surface.querySelector('.live-readout'),'<div class="readout-equation">'+escape(data.expression)+'</div><div class="readout-stats">'+(data.stats||[]).map(stat=>'<div class="readout-stat"><span>'+escape(stat.label)+'</span><strong>'+escape(f(stat.value))+'</strong><small>'+escape(stat.note||'')+'</small></div>').join('')+'</div>');
      Readable.writeText(surface.querySelector('.lab-insight'),insight);
    }
    function paint(settled=true) {
      if(disposed)return;
      const checked=instance.setParameters(displayed),r=checked.valid?instance.evaluate():module.evaluate(displayed),renderer=module.views.find(item=>item.id===view);
      const resting=settled&&!playing&&!interacting, showText=textPacer.take({settled:resting});
      const inspection=usesInspector()?inspector.viewOptions():{};
      updateScene(stage,(checked.valid?instance.render(view,{id:root.dataset.slot,baseline:pinned,reference:reference(),compact:compactMedia.matches,camera,...inspection}):renderer.render(displayed,{id:root.dataset.slot,view,baseline:pinned,reference:reference(),compact:compactMedia.matches,camera,...inspection})),{preserveText:!showText,formatText:text=>Readable.formatText(text,{settled:resting})});
      Motion.paintGradients(stage,displayed,motionPhase,reducedMedia.matches);
      if(semanticKeys.length)globalThis.AtlasSemanticLinks.paint(stage,semanticKeys);
      stage.dataset.following=String(!settled);
      root.dataset.motion=playing?'playing':!settled||stage.dataset.dragging?'interacting':'paused';
      if(showText){readout(r,displayed,resting);inspector?.update(displayed,{settled:resting});}syncControls(showText,resting);
      if(showText&&renderNumeric&&(!numeric.hasChildNodes()||numeric.parentElement.open)){
        renderNumeric(numericScratch,displayed);
        updateScene(numeric,numericScratch.innerHTML,{formatText:text=>Readable.formatText(text,{settled:resting})});
      }
      paintData(resting);
      if(pendingAnnounce&&settled&&performance.now()-lastAnnounced>300){surface.querySelector('.lab-status').textContent=readoutExpression?readoutExpression+'.':'Current output '+format(r.output)+'.';lastAnnounced=performance.now();pendingAnnounce=false;}
    }
    function draw(announce=false,notify=true,immediate=false) {
      if(disposed)return;
      pendingAnnounce=pendingAnnounce||announce;
      follower.setTarget(p,{immediate:immediate||!!playing});
      if(notify&&onChange)onChange();
    }
    function paintStory() {
      const priorFocus=storyContent.contains(document.activeElement)?document.activeElement.dataset.prediction|| (document.activeElement.classList.contains('story-run')?'run':null):null;
      if(!selectedStory){surface.querySelector('.experiment-deck').hidden=true;return;}
      const story=selectedStory, outcome=prediction?{correct:prediction===story.answerId}:null;
      const complete=phase==='complete';
      const status=surface.querySelector('.journey-status');status.hidden=phase!=='running'&&!complete;
      status.innerHTML='<div><span>'+(complete?'EXPERIMENT COMPLETE':'FOLLOW THE CHANGE')+'</span><strong>'+escape(story.title)+'</strong></div>'+(complete?'<button type="button" class="result-jump">What changed? ↓</button>':'<span class="journey-pulse" aria-hidden="true">●</span>');
      status.querySelector('.result-jump')?.addEventListener('click',()=>storyContent.querySelector('.story-result')?.scrollIntoView({block:'center',behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'}));
      storyContent.innerHTML='<p class="story-kicker">'+escape(story.kicker)+'</p><h4>'+escape(story.question)+'</h4><div class="prediction-choices" role="group" aria-label="Your prediction, optional">'+story.prediction.map(choice=>'<button type="button" data-prediction="'+choice.id+'" aria-pressed="'+(prediction===choice.id)+'">'+escape(choice.label)+'</button>').join('')+'</div><div class="story-actions"><button type="button" class="button story-run">'+(phase==='running'?'↻ Start again':complete?'↻ Replay experiment':'▶ See what happens')+'</button><span>'+(phase==='running'?'Watch the live scene above.':complete?'Change another condition and follow your own question.':phase==='exploring'?'You’re in control. Replay to follow the original path.':'A prediction is optional. Curiosity is enough.')+'</span></div>'+(complete?'<div class="story-result" role="status"><span class="result-kicker">'+(outcome?(outcome.correct?'YOUR INTUITION HELD UP':'SOMETHING TO LOOK AT AGAIN'):'HERE’S WHAT CHANGED')+'</span><p>'+escape(story.explanation)+'</p><small>'+escape(story.insight)+'</small></div>':'');
      storyContent.querySelectorAll('[data-prediction]').forEach(button=>button.onclick=()=>{prediction=button.dataset.prediction;paintStory();});
      storyContent.querySelector('.story-run').onclick=runStory;
      if(priorFocus)storyContent.querySelector(priorFocus==='run'?'.story-run':'[data-prediction="'+priorFocus+'"]')?.focus({preventScroll:true});
      surface.querySelectorAll('[data-story]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.story===story.id)));
    }
    function pause(announce=true,settle=true) {
      if(playing)pausedMode=playing;playing=false;cancelAnimationFrame(frame);frame=0;root.dataset.motion='paused';
      playButton.textContent='▶ Animate';playButton.setAttribute('aria-pressed','false');if(settle){interacting=false;follower.settle();}if(announce)draw(true,true,true);
    }
    function manual(clearPath=true) {
      pause(false,false);pausedMode=false;if(clearPath)storyPath=null;
      if(phase==='running'||phase==='complete'){phase='exploring';paintStory();}
    }
    function applyParameters(patch,settings={}) {
      const invalid=(message,field='parameters')=>({valid:false,parameters:{...p},errors:[{field,message}]});
      if(disposed)return invalid('This playground has been removed.');
      if(!patch||typeof patch!=='object'||Array.isArray(patch))return invalid('Parameters must be a plain object.');
      const prototype=Object.getPrototypeOf(patch);
      if(prototype!==null&&Object.getPrototypeOf(prototype)!==null)return invalid('Parameters must be a plain object.');
      const candidate={...p};
      for(const key of Reflect.ownKeys(patch)){
        if(!parameterKeys.has(key))return invalid('Unknown parameter.',typeof key==='string'?key:'parameters');
        const descriptor=Object.getOwnPropertyDescriptor(patch,key);
        if(!Object.hasOwn(descriptor,'value'))return invalid('Parameter accessors are unsupported.',key);
        const value=descriptor.value;
        if(!(typeof value==='number'?Number.isFinite(value):typeof value==='string'||typeof value==='boolean'))return invalid('A parameter needs a finite number or declared value.',key);
        candidate[key]=value;
      }
      const checked=module.validateParams({...candidate});
      if(!checked.valid)return {valid:false,parameters:{...p},errors:(checked.errors||[]).map(error=>({...error}))};
      const next=checked.parameters;
      if(!next||typeof next!=='object'||Object.keys(next).length!==parameterKeys.size||Object.keys(next).some(key=>!parameterKeys.has(key))||[...parameterKeys].some(key=>!Object.hasOwn(next,key)))return invalid('Validated parameters must preserve the module parameter keys.');
      for(const key of parameterKeys){const value=next[key];if(!(typeof value==='number'?Number.isFinite(value):typeof value==='string'||typeof value==='boolean'))return invalid('A parameter needs a finite number or declared value.',key);}
      // Incoming links use the same display follower as direct edits. Stopping
      // playback must not settle it on every write or bypass readable-value pacing.
      manual();interacting=false;Object.assign(p,next);draw(false,false,settings.immediate===true);
      return {valid:true,parameters:{...p},errors:[]};
    }
    function getViewState(){
      return copyViewData({view,camera,baseline:pinned,inspector:inspector?.getState?.()??null});
    }
    function restoreViewState(input){
      const invalid=message=>({valid:false,errors:[{field:'viewState',message}]});
      if(disposed)return invalid('This playground has been removed.');
      let state,baseline=null,inspection;
      try{
        state=copyViewData(input);
        if(!state||Array.isArray(state)||Object.keys(state).length!==4||!['view','camera','baseline','inspector'].every(key=>Object.hasOwn(state,key)))return invalid('A complete view state is required.');
        if(!module.views.some(item=>item.id===state.view))return invalid('The saved representation is unavailable.');
        if(!Number.isFinite(state.camera)||state.camera<.15||state.camera>1)return invalid('Use a camera angle from 0.15 to 1.');
        if(state.baseline!==null){
          const pin=state.baseline;
          if(!pin||typeof pin!=='object'||Array.isArray(pin)||Object.keys(pin).length!==parameterKeys.size||Object.keys(pin).some(key=>!parameterKeys.has(key))||[...parameterKeys].some(key=>!Object.hasOwn(pin,key)))return invalid('A comparison pin needs the complete declared parameters.');
          const checked=module.validateParams(copyViewData(pin));
          if(!checked?.valid||!checked.parameters)return invalid('The saved comparison pin is invalid.');
          baseline=copyViewData(checked.parameters);
          if(Object.keys(baseline).length!==parameterKeys.size||Object.keys(baseline).some(key=>!parameterKeys.has(key))||[...parameterKeys].some(key=>!Object.hasOwn(baseline,key)))return invalid('Comparison parameters must preserve the module keys.');
        }
        inspection=module.validateInspectorState?module.validateInspectorState(state.inspector):{valid:state.inspector===null,state:null,errors:[]};
        if(!inspection?.valid)return invalid(inspection?.errors?.[0]?.message||'The saved inspector settings are unavailable.');
        inspection=copyViewData(inspection.state);
        if(inspection!==null&&typeof inspector?.restoreState!=='function')return invalid('This inspector cannot restore saved settings.');
      }catch(error){return invalid(error.message||'The saved view state is invalid.');}
      if(inspector?.restoreState){
        let previous;
        try{
          previous=inspector.getState?.()??null;restoringView=true;
          const restored=inspector.restoreState(inspection);
          if(!restored?.valid){inspector.restoreState(previous);return invalid(restored?.errors?.[0]?.message||'The inspector settings could not be restored.');}
        }catch(error){try{if(previous!==undefined)inspector.restoreState(previous);}catch(_){}return invalid('The inspector settings could not be restored.');}
        finally{restoringView=false;}
      }
      manual();interacting=false;scalePath=null;referenceKey='';view=state.view;explicitView=true;camera=state.camera;pinned=baseline;
      surface.querySelector('.camera-control input').value=String(camera);
      draw(false,false,true);
      return {valid:true,errors:[]};
    }
    function startMotion(mode) {
      if(!sweep)return;
      follower.setTarget(p,{immediate:true});
      if(sweepPosition===null||pausedMode!==mode)sweepPosition=Number(p[mode==='once'?module.replay.key:sweep[0]]);
      playing=mode;pausedMode=false;last=performance.now();root.dataset.motion='playing';
      playButton.textContent='Ⅱ Pause';playButton.setAttribute('aria-pressed','true');frame=requestAnimationFrame(tick);
    }
    function runStory() {
      pause(false);pausedMode=false;Object.assign(p,selectedStory.start);pinned={...p};storyPath=selectedStory;scalePath=selectedStory;lessonElapsed=0, sweepPosition=null;
      // A guided path may suggest a view, but an explicitly chosen perspective
      // belongs to this slot and survives changes to the experiment.
      if(!explicitView||!activeView())view=module.views.some(item=>item.id===selectedStory.view)?selectedStory.view:module.defaultView;
      phase='running';
      const field=selected.find(item=>item[0]===selectedStory.sweep?.key);if(field){sweep=field;surface.querySelector('.sweep-select').value=field[0];}
      if(selectedStory.sweep&&sweep){paintStory();draw(true,true,true);surface.querySelector('.visual-toolbar').scrollIntoView({block:'start',behavior:reducedMedia.matches?'auto':'smooth'});startMotion('lesson');playButton.focus({preventScroll:true});}
      else{Object.assign(p,selectedStory.finish);phase='complete';paintStory();draw(true,true,true);}
    }
    function tick(time) {
      if(!playing||disposed)return;if(!root.isConnected){pause(false);return;}
      {
        const elapsed=Math.min(time-last,100)*speed;last=time;
        motionPhase+=elapsed/1000;
        if(playing==='lesson'){
          const path=storyPath.sweep;lessonElapsed+=elapsed;
          const t=Math.min(1,lessonElapsed/path.durationMs), eased=(1-Math.cos(Math.PI*t))/2;
          p[path.key]=legalValue(path.key,path.from+(path.to-path.from)*eased);
          if(t===1){Object.assign(p,storyPath.finish);pause(false);pausedMode=false;phase='complete';paintStory();draw(true,true,true);return;}
        }else if(playing==='once'){
          const path=module.replay,t=Math.min(1,(sweepPosition-path.from)/(path.to-path.from)+elapsed/9000);
          sweepPosition=path.from+(path.to-path.from)*t;p[path.key]=legalValue(path.key,sweepPosition);
          if(t===1){pause(false);pausedMode=false;draw(true,true,true);return;}
        }else{
          const [key,,min,max]=sweep;let value=Number.isFinite(sweepPosition)?sweepPosition:min;
          value+=direction*(max-min)*elapsed/9000;
          if(value>=max){value=max;direction=-1;}if(value<=min){value=min;direction=1;}sweepPosition=value;p[key]=legalValue(key,value);
        }
        draw();
      }
      frame=requestAnimationFrame(tick);
    }
    playButton.onclick=()=>{
      if(!sweep)return;
      if(playing){pause();return;}
      if(pausedMode==='lesson'&&phase==='running'&&storyPath?.sweep){startMotion('lesson');return;}
      if(pausedMode==='free'){startMotion('free');return;}
      if(pausedMode==='once'){startMotion('once');return;}
      manual();scalePath=null;const [key,,min,max]=sweep;if(!Number.isFinite(p[key])||p[key]<min||p[key]>max)p[key]=min;
      direction=sweep[4]||1;startMotion('free');
    };
    surface.querySelector('.sweep-select').onchange=event=>{const next=selected.find(item=>item[0]===event.target.value);if(!next)return;manual();scalePath=null;sweep=next;draw();};
    surface.querySelector('.speed-select').onchange=event=>{speed=Number(event.target.value);};
    let timelineKeyboard=false;
    timeline.onpointerdown=()=>{if(sweep)interacting=true;};
    timeline.onkeydown=event=>{timelineKeyboard=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key);};
    timeline.onkeyup=()=>{timelineKeyboard=false;interacting=false;follower.settle();};
    timeline.oninput=()=>{
      if(!sweep)return;
      manual(false);const t=Number(timeline.value)/100;
      if(storyPath){Object.assign(p,storyPath.start);if(storyPath.sweep)p[storyPath.sweep.key]=legalValue(storyPath.sweep.key,storyPath.sweep.from+(storyPath.sweep.to-storyPath.sweep.from)*t);else Object.assign(p,t<.5?storyPath.start:storyPath.finish);}
      else p[sweep[0]]=legalValue(sweep[0],sweep[2]+(sweep[3]-sweep[2])*t);
      draw(true,true,timelineKeyboard);
    };
    timeline.onchange=()=>{interacting=false;follower.settle();};
    surface.querySelectorAll('[data-view]').forEach(button=>button.onclick=()=>{
      if(!module.views.some(item=>item.id===button.dataset.view))return;
      manual();view=button.dataset.view;explicitView=true;draw();
      surface.querySelector('.lab-status').textContent=activeView().label+' view selected.';
    });
    surface.querySelector('.camera-control input').oninput=event=>{camera=Number(event.target.value);draw(false,false);};
    pinButton.onclick=()=>{follower.settle();pinned=pinned?null:{...p};draw(true,true,true);};
    surface.querySelectorAll('[data-story]').forEach(button=>button.onclick=()=>{manual();selectedStory=stories.find(story=>story.id===button.dataset.story);prediction=null;phase='ready';paintStory();});
    const sceneInput=I.bind(stage,{getValue:key=>p[key],onStart:event=>{manual();interacting=event?.source==='pointer';},onChange:(key,value,event)=>{p[key]=value;draw(false,true,event?.source==='keyboard');},onEnd:()=>{interacting=false;draw(true,true,true);}});
    root.querySelectorAll('[data-param]').forEach(input=>{
      let keyboard=false;
      input.onkeydown=event=>{keyboard=['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End','PageUp','PageDown'].includes(event.key);};
      input.onpointerdown=()=>{if(input.type==='range')interacting=true;};
      input.onkeyup=()=>{keyboard=false;interacting=false;follower.settle();};
      input.onchange=()=>{interacting=false;follower.settle();};
      input.oninput=()=>{
        manual();const key=input.dataset.param;p[key]=input.tagName==='SELECT'?input.value:input.value.trim()===''?NaN:Number(input.value);
        root.querySelectorAll('[data-param="'+key+'"]').forEach(other=>{if(other!==input&&other.type!=='number')other.value=Number.isFinite(p[key])||typeof p[key]==='string'?p[key]:'';});draw(true,true,input.type!=='range'||keyboard);
      };
    });
    root.querySelector('[data-reset]').onclick=()=>{manual();scalePath=null;Object.assign(p,M.defaults(slug));pinned=null;phase='ready';paintStory();draw(true,true,true);};
    root.querySelectorAll('[data-preset]').forEach(button=>button.onclick=()=>{
      manual();const preset=module.presets?.find(item=>item.id===button.dataset.preset);if(preset)Object.assign(p,preset.parameters);draw(true,true,true);
    });
    const focusButton=surface.querySelector('.focus-toggle');
    function setFocus(next) {
      if(focused===next)return;focused=next;
      if(next){
        focusReturn=document.activeElement;originalOverflow=document.body.style.overflow;document.body.style.overflow='hidden';
        root.classList.add('studio-focused');root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-label','Expanded visual playground');
        let element=root;
        while(element.parentElement){for(const sibling of element.parentElement.children)if(sibling!==element){inertElements.push([sibling,sibling.inert]);sibling.inert=true;}element=element.parentElement;if(element===document.body)break;}
      }else{
        root.classList.remove('studio-focused');root.removeAttribute('role');root.removeAttribute('aria-modal');root.removeAttribute('aria-label');
        document.body.style.overflow=originalOverflow;inertElements.forEach(([element,value])=>element.inert=value);inertElements=[];focusReturn?.focus?.({preventScroll:true});
      }
      focusButton.textContent=next?'↙ Exit focus':'⤢ Focus';focusButton.setAttribute('aria-expanded',String(next));focusButton.setAttribute('aria-label',next?'Exit expanded playground':'Expand playground');
    }
    focusButton.onclick=()=>setFocus(!focused);
    const focusKeys=event=>{
      if(!focused)return;if(event.key==='Escape'){event.preventDefault();setFocus(false);return;}
      if(event.key==='Tab'){
        const targets=Array.from(root.querySelectorAll('button:not(:disabled),a[href],input:not(:disabled),select,textarea,summary,[tabindex="0"]')).filter(element=>element.getClientRects().length);
        const first=targets[0],last=targets[targets.length-1];
        if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
      }
    };
    root.addEventListener('keydown',focusKeys);
    root.querySelector('[data-capture]').onclick=()=>{pause(false);setFocus(false);onCapture?.();};
    dataDetails.ontoggle=()=>{if(dataDetails.open){pause(false);follower.settle();paintData(true);}};
    numeric.parentElement.ontoggle=()=>{if(numeric.parentElement.open&&renderNumeric){renderNumeric(numericScratch,displayed);updateScene(numeric,numericScratch.innerHTML);}};
    const endRange=()=>{if(interacting){interacting=false;follower.settle();}};
    const resize=()=>draw(),visibility=()=>{if(document.hidden&&(playing||interacting))pause(false);};
    const reducedChanged=()=>{if(reducedMedia.matches){follower.settle();inspector?.settle();}};
    compactMedia.addEventListener('change',resize);document.addEventListener('visibilitychange',visibility);document.addEventListener('pointerup',endRange);document.addEventListener('pointercancel',endRange);
    reducedMedia.addEventListener('change',reducedChanged);
    const inspectorHost=document.createElement('div');stage.after(inspectorHost);
    inspector=module.inspector?.(inspectorHost,{readable:Readable,models:M,reducedMotion:()=>reducedMedia.matches,onViewChange:()=>{if(disposed||restoringView||!usesInspector())return;if(!inspector?.paintView?.(stage))paint(root.dataset.motion==='paused');},onParameters:next=>{if(restoringView)return;manual();Object.assign(p,next);draw(true,true);},onReplay:()=>{if(restoringView||!module.replay)return;manual();scalePath=null;sweep=selected.find(field=>field[0]===module.replay.key)||selected[0];direction=1;Object.assign(p,{[module.replay.key]:reducedMedia.matches?module.replay.to:module.replay.from});draw(true,true,true);if(!reducedMedia.matches)startMotion('once');}});
    if(!inspector)inspectorHost.hidden=true;
    root.querySelector('[data-capture]').disabled=typeof onCapture!=='function';
    paintStory();draw();
    return {slug,slot:root.dataset.slot,selectQuantities(keys){semanticKeys=Array.isArray(keys)?[...keys]:[];return globalThis.AtlasSemanticLinks.paint(stage,semanticKeys);},getParameters(){return {...p};},applyParameters,getViewState,restoreViewState,getBaseline(){return pinned;},destroy(){dataDetails.ontoggle=null;setFocus(false);disposed=true;pause(false);inspector?.destroy();instance.destroy();follower.destroy();sceneInput.destroy();root.removeEventListener('keydown',focusKeys);document.removeEventListener('visibilitychange',visibility);document.removeEventListener('pointerup',endRange);document.removeEventListener('pointercancel',endRange);compactMedia.removeEventListener('change',resize);reducedMedia.removeEventListener('change',reducedChanged);},pause(){pause();},redraw(){draw(false,false);},refresh(){manual();interacting=false;draw(true,true,true);}};
  }
  return Object.freeze({mount,markup,renderInto:updateScene});
});
