(function(root,factory){
  'use strict';
  const api=factory(root.AtlasModels||(typeof require==='function'?require('./models.js'):null),root.AtlasStoryScenes||(typeof require==='function'?require('./story-scenes.js'):null));
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasLifeStory=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(M,Scenes){
  'use strict';
  const clamp=v=>Math.max(0,Math.min(1,v));
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const format=v=>typeof v==='number'?(Number.isFinite(v)?Number(v.toPrecision(6)).toLocaleString('en-US',{maximumFractionDigits:20}):'Unavailable'):String(v??'Unavailable');
  function parametersAt(story,progress,base=story.parameters){const t=clamp(Number.isFinite(progress)?progress:0),s=story.timeline;return {...base,[s.key]:t===1?s.to:t===0?s.from:s.from+(s.to-s.from)*t};}
  function formatTemplate(template,values){return String(template).replace(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g,(_,key)=>format(Object.hasOwn(values,key)?values[key]:undefined));}
  function templateParts(template){
    const parts=[];let start=0;
    for(const match of String(template).matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)){
      if(match.index>start)parts.push({text:String(template).slice(start,match.index)});
      parts.push({key:match[1]});start=match.index+match[0].length;
    }
    if(start<String(template).length)parts.push({text:String(template).slice(start)});
    return parts;
  }
  function tokenRole(slug,key,variableKey){
    if(key===variableKey)return 'input';
    if(['amount','initial','baseServings','perServing','base'].includes(key))return 'reference';
    if(['intermediate','side','factor','increment','position','fa'].includes(key)||slug==='derivative'&&key==='output')return 'intermediate';
    return 'output';
  }
  // Preserve definitions and identities; only a final numerical evaluation is approximate.
  function formulaLiteral(text,nextRole,moving){return moving&&['intermediate','output'].includes(nextRole)?text.replace(/=\s*$/,value=>value.replace('=','≈')):text;}
  function mount(host,options){
    const story=options.story,slug=story.slug,timeline=story.timeline,variable=story.variables.find(v=>v.key===timeline.key),params=parametersAt(story,0);
    const controlBounds=Object.fromEntries(story.variables.map(({key,min,max,step})=>[key,{min,max,step}]));
    const P=globalThis.AtlasPlayground,Motion=globalThis.AtlasMotion,Input=globalThis.AtlasSceneInput,Readable=globalThis.AtlasReadableValues,Links=globalThis.AtlasStoryLinks,Journey=globalThis.AtlasStoryJourney,Flow=globalThis.AtlasCalculationFlow;
    const link=Links.forSlug(slug),pacer=Readable.createPacer();
    const media=matchMedia('(prefers-reduced-motion: reduce)');
    const references=(options.sources||[]).filter(source=>story.sourceRefs.includes(source.id)&&/^https:\/\//.test(source.url)).map(source=>'<a href="'+esc(source.url)+'" target="_blank" rel="noopener noreferrer">'+esc(source.title)+' ↗</a>').join('<br>');
    let destroyed=false,playing=false,clock=null,last=null,progress=0,phase=0,display={...params};
    let activeStep=0,focus=story.steps[0].focus||'reference',followProgress=false,displaySettled=true,interacting=false;
    let playKind='whole',stepRun=null,selectedQuantity=null,calculation=null,inspector=null,semanticKeys=[];
    const unit=story.unit??(slug==='derivative'?'m/s':slug==='function-composition'?'m²':slug==='real-logarithm'?'stops':slug==='ratio-scale'?'g':slug==='linear-model'?'L':'px');
    host.innerHTML='<div class="life-heading"><p class="eyebrow">A REAL-WORLD STORY · TRY IT AS YOU READ</p><h2>'+esc(story.title)+'</h2><p>'+esc(story.summary)+'</p></div><div class="life-layout"><div class="life-copy"><p class="life-context">'+esc(story.context)+'</p><h3 class="life-question">'+esc(story.question)+'</h3><ol class="life-steps">'+story.steps.map((s,i)=>'<li><button type="button" data-step="'+i+'" aria-label="Show step '+(i+1)+': '+esc(s.title)+'"><span class="life-step-number">0'+(i+1)+'</span><strong>'+esc(s.title)+'</strong><span aria-hidden="true">↗</span></button><p data-body="'+i+'"></p><div class="life-formula" data-formula="'+i+'"></div></li>').join('')+'</ol><div class="life-answer" aria-live="off"></div><details class="life-assumptions"><summary>What this story assumes</summary><ul>'+story.assumptions.map(a=>'<li>'+esc(a)+'</li>').join('')+'</ul><p class="fine">An illustrative scenario with chosen values.</p><p class="fine">References for the underlying rules:<br>'+references+'</p></details></div><div class="life-view"><div class="life-stage-wrap"><div class="life-stage-header"><span><i class="live-dot"></i> '+esc(story.eyebrow)+'</span><span data-running>READY TO PLAY</span></div><div class="life-scene"></div><div class="life-readout"><span data-input></span><strong data-result></strong></div></div><div class="life-controls"><div class="life-playback"><button class="button" type="button" data-play>Play whole story <span aria-hidden="true">▶</span></button><button class="button secondary" type="button" data-replay>Start again ↺</button><span data-progress>0%</span></div><label class="life-timeline-label">Story timeline<input type="range" min="0" max="1" step="any" value="0" data-timeline aria-label="Story timeline"></label>'+story.variables.map(v=>'<label class="life-variable">'+esc(v.label)+' <span><b data-variable-value="'+esc(v.key)+'"></b> '+esc(v.unit)+'</span><input type="range" data-story-param="'+esc(v.key)+'" min="'+v.min+'" max="'+v.max+'" step="any" value="'+params[v.key]+'" aria-label="'+esc(v.label)+'"></label>').join('')+'<p class="life-hint">Drag the glowing handle or the slider. Follow the numbers and the frame together.</p><div class="life-actions"><button class="text-link" type="button" data-explore>Explore these values in the playground ↓</button><button class="text-link" type="button" data-keep>Keep this moment ↗</button></div></div></div></div>';
    const scene=host.querySelector('.life-scene'),play=host.querySelector('[data-play]');
    const compact=!!story.presentation?.compact;host.dataset.presentation=compact?'compact':'full';if(compact)host.querySelector('.life-timeline-label').hidden=true;
    const connection=document.createElement('div');connection.className='life-connection';
    connection.innerHTML='<div class="life-step-context"><span data-step-context></span><strong data-focus-title></strong></div><p data-focus-description></p><div class="life-link-keys" aria-label="Find a quantity in the scene">'+['reference','input','intermediate','output'].map(role=>'<button type="button" data-link-role="'+role+'" aria-pressed="false">'+esc(role==='input'?variable.symbol+' · '+link.variableLabel:role==='intermediate'?'The transformation':role==='output'?'The result':'The reference')+'</button>').join('')+'</div>';
    scene.before(connection);
    const reader=document.createElement('details');reader.className='life-reader';reader.open=matchMedia('(max-width:760px)').matches;
    reader.innerHTML='<summary>Read this step</summary>'+story.steps.map((step,i)=>'<div class="life-reader-step" data-story-index="'+i+'" '+(i?'hidden':'')+'><p class="life-reader-body"></p><div class="life-reader-formula life-formula"></div></div>').join('');
    const legend=connection.querySelector('.life-link-keys'),keyFold=document.createElement('details');keyFold.className='life-key-fold';keyFold.innerHTML='<summary>Scene key</summary>';keyFold.append(legend);
    const stepNav=document.createElement('div');stepNav.className='life-step-nav';stepNav.innerHTML='<button type="button" data-step-back aria-label="Previous story step">← Back</button><button type="button" data-play-step>Show the start</button><button type="button" data-step-next aria-label="Next story step">Next →</button>';
    const counter=document.createElement('span');counter.className='life-reader-counter';
    const traceHost=document.createElement('div');
    if(compact){const traceFold=document.createElement('details');traceFold.className='life-calculation-fold';traceFold.innerHTML='<summary>Follow each calculation</summary>';traceFold.append(traceHost);reader.hidden=true;connection.append(traceFold,counter,stepNav,keyFold);}
    else connection.append(traceHost,reader,counter,stepNav,keyFold);
    calculation=Flow.mount(traceHost,{story,readable:Readable,quantityFor:key=>Links.quantityFor(slug,key),formatLiteral:formulaLiteral,reducedMotion:()=>media.matches,onPhase:stage=>{selectedQuantity=stage;focus=stage.role;paintLinks();}});
    const status=document.createElement('p');status.className='sr-only life-step-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');host.append(status);
    host.querySelector('.life-hint').textContent='Drag to follow the highlighted variable. Tap a colored value in the explanation to find its mark in the scene.';
    const readingHint=document.createElement('p');readingHint.className='life-reading-hint';readingHint.textContent='Rounded readings while moving. Pause for a closer look.';host.querySelector('.life-readout').after(readingHint);
    const tokens=[],formulaText=[];
    function compile(node,template){
      node.replaceChildren();
      const parts=templateParts(template);
      for(let i=0;i<parts.length;i++){
        const part=parts[i],next=parts[i+1];
        if(Object.hasOwn(part,'text')){const literal=document.createTextNode(part.text);node.append(literal);if(node.classList.contains('life-formula')&&next?.key)formulaText.push({node:literal,text:part.text,nextRole:Links.quantityFor(slug,next.key)?.role||tokenRole(slug,next.key,variable.key)});continue;}
        const quantity=Links.quantityFor(slug,part.key),role=quantity?.role||tokenRole(slug,part.key,variable.key),button=document.createElement('button');button.type='button';button.className='life-token';button.dataset.tokenKey=part.key;button.dataset.linkRole=role;button.setAttribute('aria-pressed','false');
        const value=document.createElement('span');value.className='life-token-value';button.append(value);node.append(button);tokens.push({key:part.key,role,quantity,button,value});
      }
    }
    story.steps.forEach((step,i)=>{compile(host.querySelector('[data-body="'+i+'"]'),step.body);compile(host.querySelector('[data-formula="'+i+'"]'),step.formula);});
    const readerRows=Array.from(reader.querySelectorAll('.life-reader-step'));
    readerRows.forEach((row,i)=>{compile(row.querySelector('.life-reader-body'),story.steps[i].body);compile(row.querySelector('.life-reader-formula'),story.steps[i].formula);});
    const answer=host.querySelector('.life-answer');answer.innerHTML='<span class="life-answer-value"></span><span class="life-answer-note"></span>';
    function focusInfo(){
      const step=story.steps[activeStep];
      if(selectedQuantity)return selectedQuantity;
      if(focus==='input')return {label:link.variableLabel,description:link.effectLabel};
      return focus===step.focus?{label:step.focusLabel||step.title,description:step.focusDescription||link.effectLabel}:link.steps.find(step=>step.focus===focus)||{label:link.variableLabel,description:link.effectLabel};
    }
    function paintLinks(){
      const info=focusInfo();calculation?.mark(focus);host.dataset.storyFocus=focus;Links.paint(scene,slug,focus,{showEffect:focus==='input'});
      globalThis.AtlasSemanticLinks.paint(scene,selectedQuantity?.key?[selectedQuantity.key]:semanticKeys);
      Readable.writeText(host.querySelector('[data-step-context]'),'STEP '+String(activeStep+1).padStart(2,'0')+' · '+story.steps[activeStep].title);
      Readable.writeText(host.querySelector('[data-focus-title]'),info.label);Readable.writeText(host.querySelector('[data-focus-description]'),info.description);
      host.querySelectorAll('[data-link-role]').forEach(button=>{const value=String(button.dataset.linkRole===focus);if(button.getAttribute('aria-pressed')!==value)button.setAttribute('aria-pressed',value);});
      story.steps.forEach((step,i)=>{const button=host.querySelector('[data-step="'+i+'"]'),value=i===activeStep?'step':'false';button.closest('li').classList.toggle('is-current',i===activeStep);if(button.getAttribute('aria-current')!==value)button.setAttribute('aria-current',value);readerRows[i].hidden=i!==activeStep;});
      Readable.writeText(counter,'STEP '+(activeStep+1)+' OF '+story.steps.length);
      stepNav.querySelector('[data-step-back]').disabled=activeStep===0;stepNav.querySelector('[data-step-next]').disabled=activeStep===story.steps.length-1;
      Readable.writeText(stepNav.querySelector('[data-play-step]'),playing?'Pause ❚❚':activeStep===0?'Show the start':stepRun?.index===activeStep&&stepRun.elapsed<stepRun.duration?'Continue this step ▶':'Play this step ▶');
      host.dataset.playbackMode=playing?playKind:'paused';
    }
    function coordinate(p){return clamp((p[timeline.key]-timeline.from)/(timeline.to-timeline.from));}
    function frameAt(progress){return parametersAt(story,progress,params);}
    function conclusionAt(p){return story.conclusionTemplate?formatTemplate(story.conclusionTemplate,Scenes.values(slug,p)):story.conclusion;}
    function atGoal(p){return (story.goalKeys||Object.keys(story.parameters)).every(k=>typeof p[k]==='number'?Math.abs(p[k]-story.parameters[k])<=1e-9:p[k]===story.parameters[k]);}
    function draw(p,meta={dt:0}){
      if(destroyed)return;display={...p};phase+=(meta.dt||0)/1000;
      if(followProgress){const index=Journey.stepAt(story,coordinate(p));if(index!==activeStep){activeStep=index;selectedQuantity=null;focus=story.steps[index].focus||Links.focusFor(slug,index).focus;if(playing)calculation?.begin({restart:true});}}
      const settled=!!meta.settled&&!playing&&!interacting,showText=pacer.take({settled,force:meta.forceText}),reading={settled};displaySettled=settled;
      P.renderInto(scene,Scenes.render(slug,p,{id:'life-'+slug,view:story.view||'geometry',storyFocus:focus,compact:scene.clientWidth>0&&scene.clientWidth<480,controlBounds,...inspector?.viewOptions()}),{preserveText:!showText,formatText:text=>Readable.formatText(text,reading)});Motion.paintGradients(scene,p,phase,media.matches);paintLinks();
      if(!showText)return;
      inspector?.update(p,reading);
      const values=Scenes.values(slug,p);calculation?.update(values,reading);const current=Readable.format(Scenes.primaryValue(slug,p),reading)+' '+unit;
      Readable.writeText(host.querySelector('[data-input]'),variable.symbol+(settled?' = ':' ≈ ')+Readable.format(p[variable.key],reading)+' '+variable.unit);
      Readable.writeText(host.querySelector('[data-result]'),(settled?'':'≈ ')+current);
      tokens.forEach(token=>{const value=Readable.format(Object.hasOwn(values,token.key)?values[token.key]:undefined,token.quantity?.precision?{settled:true,precision:token.quantity.precision}:reading);Readable.writeText(token.value,value);const label=(token.quantity?.label||link.variableLabel)+' '+value+'. Show its place in the scene.';if(token.button.getAttribute('aria-label')!==label)token.button.setAttribute('aria-label',label);});
      formulaText.forEach(part=>{const value=formulaLiteral(part.text,part.nextRole,!settled);if(part.node.nodeValue!==value)part.node.nodeValue=value;});
      Readable.writeText(answer.querySelector('.life-answer-value'),(settled?'Current reading: ':'Moving reading: ')+current);
      Readable.writeText(answer.querySelector('.life-answer-note'),atGoal(p)?conclusionAt(p):'Move to the final story marker to check the original question.');answer.classList.toggle('is-solved',atGoal(p));
      story.variables.forEach(v=>Readable.writeText(host.querySelector('[data-variable-value="'+v.key+'"]'),Readable.format(p[v.key],v.precision?{settled:true,precision:v.precision}:reading)));
      Readable.writeText(host.querySelector('[data-progress]'),Math.round(coordinate(p)*100)+'%');
    }
    const follower=Motion.createFollower({initial:params,onFrame:draw,reducedMotion:()=>media.matches,canInterpolate:(a,b)=>M.validateParams(slug,a).valid&&M.validateParams(slug,b).valid});
    function sync(){progress=coordinate(params);host.querySelector('[data-timeline]').value=progress;story.variables.forEach(v=>host.querySelector('[data-story-param="'+v.key+'"]').value=params[v.key]);}
    function update(next,immediate=false){Object.assign(params,next);sync();follower.setTarget(params,{immediate});}
    function announce(text){Readable.writeText(status,text);}
    function stop(settle=true,cancelTrace=true){if(cancelTrace)calculation?.cancel();playing=false;if(clock!==null)cancelAnimationFrame(clock);clock=null;last=null;Readable.writeText(play,'Play whole story ▶');play.setAttribute('aria-pressed','false');Readable.writeText(host.querySelector('[data-running]'),'PAUSED · TAKE YOUR TIME');if(settle){interacting=false;follower.settle();}else paintLinks();}
    function startClock(kind){calculation?.begin({restart:true});playKind=kind;playing=true;last=null;Readable.writeText(play,'Pause ❚❚');play.setAttribute('aria-pressed','true');Readable.writeText(host.querySelector('[data-running]'),kind==='step'?'PLAYING THIS STEP':'PLAYING THE WHOLE STORY');paintLinks();clock=requestAnimationFrame(tick);}
    function tick(now){
      if(!playing||destroyed)return;
      const elapsed=last===null?0:Math.max(0,Math.min(100,now-last));last=now;phase+=elapsed/1000;
      if(playKind==='step'){
        stepRun.elapsed=Math.min(stepRun.duration,stepRun.elapsed+elapsed);
        const t=stepRun.elapsed/stepRun.duration,key=timeline.key;
        update(t===1?stepRun.to:{...stepRun.from,[key]:stepRun.from[key]+(stepRun.to[key]-stepRun.from[key])*t},true);
        if(t===1){stop();announce('Step '+(activeStep+1)+' complete. '+story.steps[activeStep].title+'. Choose Next when you are ready.');return;}
      }else{
        progress=clamp(progress+elapsed/timeline.durationMs);update(frameAt(progress),true);
        if(progress===1){stop();announce('Story complete. '+conclusionAt(params));return;}
      }
      clock=requestAnimationFrame(tick);
    }
    function start(){
      if(playing){stop();announce('Playback paused.');return;}
      stepRun=null;selectedQuantity=null;followProgress=true;
      if(progress>=1)update(frameAt(0),true);
      if(media.matches){update(frameAt(1),true);Readable.writeText(host.querySelector('[data-running]'),'FINAL STATE · REDUCED MOTION');announce('Story complete. '+conclusionAt(params));return;}
      startClock('whole');
    }
    function chooseStep(index){
      stop();stepRun=null;selectedQuantity=null;followProgress=false;activeStep=Journey.nextIndex(story,index,0);focus=story.steps[activeStep].focus;
      const path=Journey.itinerary(story,activeStep);paintLinks();update(frameAt(path.fromProgress));
      announce('Step '+(activeStep+1)+' of '+story.steps.length+': '+story.steps[activeStep].title+'. '+(activeStep?'Play this step to follow the change.':'This is the starting reference.'));
    }
    function playStep(){
      if(playing){stop();announce('Step playback paused.');return;}
      selectedQuantity=null;followProgress=false;focus=story.steps[activeStep].focus;
      if(activeStep===0){stepRun=null;update(frameAt(0));paintLinks();announce('Starting reference shown. Choose Next when you are ready.');return;}
      if(stepRun?.index===activeStep&&stepRun.elapsed<stepRun.duration){startClock('step');return;}
      const path=Journey.itinerary(story,activeStep);
      stepRun={index:activeStep,from:frameAt(path.fromProgress),to:frameAt(path.toProgress),elapsed:0,duration:Math.max(2000,timeline.durationMs*(path.toProgress-path.fromProgress))};
      update(stepRun.from,true);
      if(media.matches){update(stepRun.to,true);stepRun.elapsed=stepRun.duration;paintLinks();announce('Step '+(activeStep+1)+' complete. Choose Next when you are ready.');return;}
      startClock('step');
    }
    play.onclick=start;
    stepNav.querySelector('[data-play-step]').onclick=playStep;
    stepNav.querySelector('[data-step-back]').onclick=()=>chooseStep(Journey.nextIndex(story,activeStep,-1));
    stepNav.querySelector('[data-step-next]').onclick=()=>chooseStep(Journey.nextIndex(story,activeStep,1));
    host.querySelector('[data-replay]').onclick=()=>chooseStep(0);
    host.querySelector('[data-timeline]').oninput=ev=>{stop(false,false);calculation?.begin();stepRun=null;selectedQuantity=null;followProgress=true;update(frameAt(Number(ev.target.value)));};
    function manual(key=variable.key){stop(false,false);if(!interacting)calculation?.begin();stepRun=null;selectedQuantity=Links.quantityFor(slug,key);followProgress=false;focus='input';}
    function endInteraction(){if(interacting){interacting=false;follower.settle();}}
    host.querySelectorAll('input[type=range]').forEach(input=>{input.onpointerdown=()=>{interacting=true;calculation?.begin({restart:true});};input.onchange=()=>{interacting=false;follower.settle();};});
    host.addEventListener('pointerup',endInteraction);host.addEventListener('pointercancel',endInteraction);
    host.querySelectorAll('[data-story-param]').forEach(input=>{input.oninput=()=>{manual(input.dataset.storyParam);update({[input.dataset.storyParam]:Number(input.value)});};});
    host.querySelectorAll('[data-step]').forEach(button=>button.onclick=()=>chooseStep(Number(button.dataset.step)));
    const selectLink=event=>{
      const token=event.target.closest('[data-link-role]');if(!token||!host.contains(token))return;
      const row=token.closest('[data-body],[data-formula],[data-story-index]'),index=row?Number(row.dataset.body??row.dataset.formula??row.dataset.storyIndex):activeStep,key=token.dataset.tokenKey;
      if(row&&!reader.contains(token)&&event.type==='click'&&matchMedia('(max-width:760px)').matches)connection.scrollIntoView({block:'start',behavior:media.matches?'instant':'smooth'});
      if(token.dataset.linkRole===focus&&index===activeStep&&selectedQuantity?.key===key)return;
      calculation?.cancel();if(playing)stop();if(index!==activeStep)stepRun=null;
      const quantity=key?Links.quantityFor(slug,key):null;selectedQuantity=quantity?{...quantity,key}:null;
      followProgress=false;activeStep=index;focus=token.dataset.linkRole;draw(display,{settled:displaySettled});
    };
    host.addEventListener('click',selectLink);host.addEventListener('focusin',selectLink);
    host.querySelector('[data-explore]').onclick=()=>{stop();options.onExplore?.({...params});};
    host.querySelector('[data-keep]').onclick=()=>{stop();options.onCapture?.({...params});};
    const input=Input.bind(scene,{getValue:key=>params[key],onStart:meta=>{interacting=meta.source==='pointer';manual();calculation?.begin({restart:meta.source==='pointer'});},onEnd:endInteraction,onChange:(key,value,meta)=>{const v=story.variables.find(v=>v.key===key);if(v)update({[key]:Math.max(v.min,Math.min(v.max,value))},meta?.source==='keyboard');}});
    const inspectorHost=document.createElement('div');scene.after(inspectorHost);
    inspector=globalThis.AtlasSceneInspector.mount(inspectorHost,{slug,readable:Readable,models:M,reducedMotion:()=>media.matches,onViewChange:()=>{if(!globalThis.AtlasFractalLens.paint(scene,inspector.viewOptions().lens))draw(display,{settled:displaySettled});},onParameters:next=>{manual(Object.keys(next)[0]);calculation?.begin({restart:true});update(next);},onReplay:()=>{stop();stepRun=null;selectedQuantity=null;followProgress=true;update(frameAt(0),true);if(media.matches){update(frameAt(1),true);announce('Story complete. '+conclusionAt(params));}else startClock('whole');}});
    const visibility=()=>{if(document.hidden){stop();inspector?.settle();}},reduced=()=>{stop();inspector?.settle();draw(params,{settled:true});};
    document.addEventListener('visibilitychange',visibility);media.addEventListener?.('change',reduced);
    sync();draw(params,{settled:true});
    let lastSceneWidth=scene.clientWidth;
    const resize=typeof ResizeObserver==='function'?new ResizeObserver(()=>{const width=scene.clientWidth;if(!destroyed&&Math.abs(width-lastSceneWidth)>1){lastSceneWidth=width;draw(display,{settled:displaySettled,forceText:true});}}):null;
    resize?.observe(scene);
    return {slug,slot:'life-'+slug,selectQuantities(keys){semanticKeys=Array.isArray(keys)?[...keys]:[];selectedQuantity=null;return globalThis.AtlasSemanticLinks.paint(scene,semanticKeys);},pause:()=>stop(),getParameters:()=>({...params}),destroy(){stop();destroyed=true;resize?.disconnect();calculation?.destroy();inspector?.destroy();follower.destroy();input.destroy();document.removeEventListener('visibilitychange',visibility);media.removeEventListener?.('change',reduced);host.removeEventListener('click',selectLink);host.removeEventListener('focusin',selectLink);host.removeEventListener('pointerup',endInteraction);host.removeEventListener('pointercancel',endInteraction);host.querySelectorAll('button,input').forEach(el=>{el.onclick=null;el.oninput=null;el.onchange=null;el.onpointerdown=null;});}};
  }
  return Object.freeze({mount,parametersAt,formatTemplate,templateParts,tokenRole,formulaLiteral});
});
