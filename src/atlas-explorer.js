/* Atlas navigation owns the camera and scoped UI; map data and artwork stay pure. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./atlas-regions.js'):root.AtlasRegions,node?require('./atlas-landscape.js'):root.AtlasLandscape,node?require('./concept-atlas.js'):root.AtlasConceptAtlas,node?require('./motion.js'):root.AtlasMotion);
  if(node)module.exports=api;root.AtlasExplorer=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Regions,Landscape,Concepts,Motion){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const finite=Number.isFinite,clamp=(value,min,max)=>Math.max(min,Math.min(max,value));
  let mountId=0;
  function cameraBox(box){
    const whole=Landscape.overviewBounds();
    if(!box||!['x','y','width','height'].every(key=>finite(box[key]))||box.width<=0||box.height<=0)return whole;
    const width=clamp(box.width,150,whole.width),height=clamp(box.height,100,whole.height);
    return{x:clamp(box.x,0,whole.width-width),y:clamp(box.y,0,whole.height-height),width,height};
  }
  function scaleCamera(box,factor){
    if(!finite(factor)||factor<=0)return cameraBox(box);
    const width=box.width/factor,height=box.height/factor;
    return cameraBox({x:box.x+(box.width-width)/2,y:box.y+(box.height-height)/2,width,height});
  }
  function fitCamera(bounds,viewport,overview=false){
    const box=cameraBox(bounds),whole=Landscape.overviewBounds();
    if(!viewport||!finite(viewport.width)||!finite(viewport.height)||viewport.width<=0||viewport.height<=0)return box;
    const aspect=viewport.width/viewport.height;
    // Overview always retains all eight fields, including on portrait screens.
    if(overview)return whole;
    let width=Math.max(box.width,box.height*aspect),height=width/aspect;
    const shrink=Math.min(1,whole.width/width,whole.height/height);width*=shrink;height*=shrink;
    return cameraBox({x:box.x+(box.width-width)/2,y:box.y+(box.height-height)/2,width,height});
  }
  function create(input={}){
    const areas=Regions.create(input),connections=Concepts.create(input),first=connections.node('function')?.slug||connections.nodes[0]?.slug||null;
    const initial=()=>({mode:'map',regionId:null,topicId:null,selectedSlug:first});
    function normalize(value={}){
      const state=initial(),region=areas.getRegion(value.regionId),topic=areas.getTopic(value.topicId);
      state.mode=value.mode==='connections'?'connections':'map';
      state.regionId=topic?.regionId||region?.id||null;state.topicId=topic?.id||null;
      const nearby=topic?.availableCards.length?topic.availableCards:areas.getRegion(state.regionId)?.availableCards||[];
      state.selectedSlug=connections.node(value.selectedSlug)?.slug||nearby[0]?.slug||first;
      return state;
    }
    function stateFromPath(path=[]){
      if(typeof path==='string')path=path.split('/');
      if(!Array.isArray(path))return initial();
      let parts;try{parts=path.map(part=>decodeURIComponent(String(part)));}catch(_){return initial();}
      if(parts[0]==='map')return normalize({regionId:parts[1],topicId:parts[1]&&parts[2]?parts[1]+':'+parts[2]:null});
      return connections.node(parts[0])?normalize({mode:'connections',selectedSlug:parts[0]}):initial();
    }
    function pathForState(value){
      const state=normalize(value),topic=areas.getTopic(state.topicId);
      return state.mode==='connections'&&state.selectedSlug?[state.selectedSlug]:state.regionId?['map',state.regionId,...(topic?[topic.shortId]:[])]:[];
    }
    function pathForCard(slug){
      const card=connections.node(slug);if(!card)return[];
      const words=value=>String(value).toLowerCase().replace(/[^a-z0-9 ]/g,' ').split(/\s+/).filter(word=>word.length>2).map(word=>word.replace(/s$/,''));
      const terms=new Set(words(card.title+' '+slug.replace(/-/g,' ')));
      const score=topic=>words(topic.title+' '+topic.aliases.join(' ')).reduce((sum,word)=>sum+(terms.has(word)?1:0),0);
      const topic=areas.topics.filter(item=>item.availableCards.some(candidate=>candidate.slug===slug)).map((item,index)=>({item,index,score:score(item)})).sort((a,b)=>b.score-a.score||a.index-b.index)[0]?.item;
      return topic?['map',topic.regionId,topic.shortId]:[];
    }
    function selectedBounds(state){return cameraBox(Landscape.boundsForTopic(state.topicId)||Landscape.boundsForRegion(state.regionId)||Landscape.overviewBounds());}
    function topicButton(topic,selected=false){
      return'<button type="button" class="world-topic-choice'+(selected?' is-selected':'')+'" data-world-topic="'+esc(topic.id)+'" aria-pressed="'+selected+'"><span><strong>'+esc(topic.title)+'</strong><small>'+topic.availableCount+' available · '+topic.plannedCount+' planned</small></span><span aria-hidden="true">↗</span></button>';
    }
    function panelMarkup(value){
      const state=normalize(value),region=areas.getRegion(state.regionId),topic=areas.getTopic(state.topicId);
      if(!region)return'<h2>Choose a territory.</h2><p>Tap a name on the landscape, search, or use Find a place.</p><details class="world-place-list"><summary>All eight territories <span>'+areas.availableCount+' lessons</span></summary><div class="world-region-index">'+areas.regions.map(item=>'<button type="button" data-world-region="'+esc(item.id)+'"><strong>'+esc(item.title)+'</strong><span>'+item.availableCount+' available · '+item.plannedCount+' planned <span aria-hidden="true">↗</span></span></button>').join('')+'</div></details>';
      const scope=topic||region;
      const cards=scope.availableCards;
      return'<div class="world-panel-trail"><button type="button" data-world-home>Whole map</button>'+ (topic?' <span aria-hidden="true">/</span> <button type="button" data-world-region="'+esc(region.id)+'">'+esc(region.shortTitle)+'</button>':'')+'</div><p class="eyebrow">'+esc(topic?region.title:'Explore a territory')+'</p><h2>'+esc(scope.title)+'</h2><p>'+esc(scope.description)+'</p>'+
        (!topic?'<h3>Choose an area</h3><div class="world-topic-choices">'+region.topics.map(item=>topicButton(item)).join('')+'</div>':'<div class="world-topic-siblings">'+region.topics.map(item=>'<button type="button" data-world-topic="'+esc(item.id)+'" aria-pressed="'+(topic.id===item.id)+'">'+esc(item.shortTitle)+'</button>').join('')+'</div>')+
        '<details class="world-lessons"'+(topic?' open':'')+'><summary>Available lessons <span>'+cards.length+'</span></summary>'+(cards.length?'<ul class="world-card-list">'+cards.map(card=>'<li><a href="'+esc(card.href)+'">'+esc(card.title)+' <span aria-hidden="true">↗</span></a><button type="button" data-world-trace="'+esc(card.slug)+'">See connections</button></li>').join('')+'</ul>':'<p class="world-coming">There is no lesson here yet. The planned topics below show where this area can grow.</p>')+'</details>'+
        (scope.plannedConcepts.length?'<details class="world-planned"><summary>Planned concepts <span>'+scope.plannedConcepts.length+'</span></summary><ul>'+scope.plannedConcepts.map(concept=>'<li>'+esc(concept.title)+' <span>Planned</span></li>').join('')+'</ul></details>':'');
    }
    function markup(options={}){
      const state=options.path?stateFromPath(options.path):normalize(options.state),id='world-'+String(options.id||'atlas').replace(/[^A-Za-z0-9_-]/g,'-');
      const native='<label for="'+id+'-region">Territory<select id="'+id+'-region" data-world-region-select aria-label="Choose a map territory"><option value="">Overview</option>'+areas.regions.map(region=>'<option value="'+esc(region.id)+'"'+(state.regionId===region.id?' selected':'')+'>'+esc(region.title)+'</option>').join('')+'</select></label><label for="'+id+'-topic">Area<select id="'+id+'-topic" data-world-topic-select aria-label="Choose a map area"'+(!state.regionId?' disabled':'')+'>'+topicOptions(state)+'</select></label>';
      return'<section class="atlas-explorer" aria-label="Mathematics atlas"><div class="world-head"'+(state.mode==='connections'?' hidden':'')+'><h1>A map of mathematics.</h1></div><div class="world-mode-switch" role="group" aria-label="Atlas view"><button type="button" data-world-mode="map" aria-pressed="'+(state.mode==='map')+'">Map</button><button type="button" data-world-mode="connections" aria-pressed="'+(state.mode==='connections')+'">Concept connections</button><a href="#explore/section/cards">Browse cards ↗</a></div><div class="world-map" data-world-overview="'+(!state.regionId)+'"'+(state.mode==='connections'?' hidden':'')+'><div class="world-toolbar"><div class="world-search"><label class="world-sr-only" for="'+id+'-search">Find a mathematical place</label><input type="search" id="'+id+'-search" data-world-search maxlength="160" autocomplete="off" placeholder="Find a field or idea…" aria-controls="'+id+'-results"><div class="world-search-results" id="'+id+'-results" data-world-results hidden></div></div><details class="world-find"><summary>Find a place</summary><div class="world-navigation">'+native+'</div></details></div><div class="world-layout"><div class="world-map-surface"><div class="world-map-frame"><div class="world-map-canvas" data-world-canvas tabindex="0" aria-label="Mathematics map. Arrow keys move, plus or minus zoom, zero resets. On touch screens enable Move map to drag; turn it off to scroll the page.">'+Landscape.render({regions:areas.regions,selectedRegion:state.regionId,selectedTopic:state.topicId,viewBox:selectedBounds(state),id})+'</div><nav class="world-overview-key" aria-label="All eight territories">'+areas.regions.map(region=>'<button type="button" data-world-region="'+esc(region.id)+'"><span aria-hidden="true" style="background:'+Landscape.regionColor(region.id)+'"></span>'+esc(region.title)+'</button>').join('')+'</nav><div class="world-camera-bar"><div class="world-camera-tools" role="group" aria-label="Map camera"><button type="button" data-world-zoom="in" aria-label="Zoom in on map">＋</button><button type="button" data-world-zoom="out" aria-label="Zoom out on map">−</button><button type="button" data-world-fit aria-label="Fit selected area" title="Fit selected area">⊙</button><button type="button" data-world-home aria-label="Whole map overview" title="Whole map overview">↶</button></div><button type="button" class="world-touch-toggle" data-world-interact aria-pressed="false">Move map</button><div class="world-locator" data-world-locator aria-label="Map locator">'+Landscape.locator(selectedBounds(state))+'</div></div></div><p class="world-map-status" data-world-status role="status" aria-live="polite">'+esc(state.topicId?areas.getTopic(state.topicId).title:state.regionId?areas.getRegion(state.regionId).title:'Overview. Select a territory; drag or use Find a place to explore.')+'</p></div><aside class="world-area-panel" data-world-panel aria-label="Selected map area">'+panelMarkup(state)+'</aside></div></div><div class="world-connections" data-world-connections'+(state.mode==='map'?' hidden':'')+'></div></section>';
    }
    function topicOptions(state){
      const region=areas.getRegion(state.regionId);
      return'<option value="">All areas in this territory</option>'+(region?region.topics.map(topic=>'<option value="'+esc(topic.id)+'"'+(state.topicId===topic.id?' selected':'')+'>'+esc(topic.title)+'</option>').join(''):'');
    }
    function mount(host,options={}){
      if(!host||typeof host.addEventListener!=='function')throw new TypeError('The atlas explorer needs a host element.');
      let state=options.path?stateFromPath(options.path):normalize(options.state),destroyed=false,neighborhood=null,gesture=null,suppressPointerClick=false,touchPan=false;
      const id='mount-'+(++mountId),media=typeof matchMedia==='function'?matchMedia('(prefers-reduced-motion: reduce)'):null;
      host.innerHTML=markup({state,id});
      const root=host.querySelector('.atlas-explorer'),map=host.querySelector('.world-map'),canvas=host.querySelector('[data-world-canvas]'),panel=host.querySelector('[data-world-panel]'),connectionHost=host.querySelector('[data-world-connections]'),search=host.querySelector('[data-world-search]'),results=host.querySelector('[data-world-results]'),status=host.querySelector('[data-world-status]'),regionSelect=host.querySelector('[data-world-region-select]'),topicSelect=host.querySelector('[data-world-topic-select]');
      function dimensions(){const rect=canvas.querySelector('svg')?.getBoundingClientRect?.();return rect?.width&&rect?.height?{width:rect.width,height:rect.height}:{width:900,height:600};}
      function targetBounds(){return fitCamera(selectedBounds(state),dimensions(),!state.regionId);}
      function applyCamera(box){
        if(destroyed)return;
        Landscape.updateView(canvas.querySelector('svg'),{regions:areas.regions,selectedRegion:state.regionId,selectedTopic:state.topicId,viewBox:box,viewport:dimensions()});
        const frame=host.querySelector('[data-world-locator]')?.querySelector?.('[data-locator-frame]');
        if(frame)for(const key of ['x','y','width','height'])frame.setAttribute(key,box[key]);
      }
      const follower=Motion.createFollower({initial:selectedBounds(state),durationMs:85,maxSettleMs:380,reducedMotion:()=>!!media?.matches,onFrame:applyCamera});
      function notify(){if(typeof options.onNavigate==='function')options.onNavigate(pathForState(state));}
      function closeResults(){results.hidden=true;}
      function paint({animate=true,focusKey=null}={}){
        if(destroyed)return;
        const isMap=state.mode==='map';
        host.querySelector('.world-head').hidden=!isMap;map.hidden=!isMap;connectionHost.hidden=isMap;
        host.querySelectorAll('[data-world-mode]').forEach(button=>button.setAttribute('aria-pressed',String(button.getAttribute('data-world-mode')===state.mode)));
        closeResults();
        if(isMap){
          map.setAttribute('data-world-overview',String(!state.regionId));
          neighborhood?.destroy();neighborhood=null;connectionHost.replaceChildren();
          const current=follower.current();
          canvas.innerHTML=Landscape.render({regions:areas.regions,selectedRegion:state.regionId,selectedTopic:state.topicId,viewBox:current,viewport:dimensions(),id});
          panel.innerHTML=panelMarkup(state);regionSelect.value=state.regionId||'';
          topicSelect.innerHTML=topicOptions(state);topicSelect.disabled=!state.regionId;topicSelect.value=state.topicId||'';
          status.textContent=state.topicId?areas.getTopic(state.topicId).title+' selected. Open a lesson on the map or in the list.':state.regionId?areas.getRegion(state.regionId).title+' selected. Choose an area.':'Overview. Select a territory; drag or use Find a place to explore.';
          follower.setTarget(targetBounds(),{immediate:!animate});
          if(focusKey)canvas.querySelector('['+focusKey.attribute+'="'+focusKey.value+'"]')?.focus({preventScroll:true});
        }else{
          follower.settle();neighborhood?.destroy();
          neighborhood=connections.mount(connectionHost,{selectedSlug:state.selectedSlug,onSelect:slug=>{state.selectedSlug=slug;notify();}});
        }
      }
      function chooseRegion(id,settings={}){
        if(destroyed||id&&!areas.getRegion(id))return false;
        const region=areas.getRegion(id),selected=region?.availableCards.find(card=>card.slug===state.selectedSlug)?.slug||region?.availableCards[0]?.slug||state.selectedSlug;
        state=normalize({...state,mode:'map',regionId:id||null,topicId:null,selectedSlug:selected});paint(settings);notify();return true;
      }
      function chooseTopic(id,settings={}){
        const topic=areas.getTopic(id);if(destroyed||!topic)return false;
        state=normalize({...state,mode:'map',topicId:topic.id,regionId:topic.regionId,selectedSlug:topic.availableCards[0]?.slug||state.selectedSlug});paint(settings);notify();return true;
      }
      function showConnections(slug){
        if(destroyed||!connections.node(slug))return false;
        state=normalize({...state,mode:'connections',selectedSlug:slug});paint();notify();return true;
      }
      function zoom(factor){if(destroyed||state.mode!=='map')return;follower.setTarget(scaleCamera(follower.current(),factor));}
      function move(dx,dy){const box=follower.current();follower.setTarget(cameraBox({...box,x:box.x+dx*box.width,y:box.y+dy*box.height}));}
      function action(event){
        if(destroyed)return;
        if(event.type==='click'&&event.detail!==0&&suppressPointerClick){
          suppressPointerClick=false;
          if(canvas.contains(event.target)){event.preventDefault();return;}
        }
        const target=event.target?.closest?.('[data-atlas-region],[data-atlas-topic],[data-world-region],[data-world-topic],[data-world-trace],[data-world-mode],[data-world-zoom],[data-world-home],[data-world-fit],[data-world-interact]');
        if(!target||!host.contains(target))return;
        if(event.type==='keydown'){
          if(!['Enter',' '].includes(event.key)||String(target.tagName).toLowerCase()!=='g')return;
        }
        event.preventDefault();
        const keyboard=event.type==='keydown'||event.detail===0;
        if(target.hasAttribute('data-atlas-topic')||target.hasAttribute('data-world-topic')){
          const id=target.getAttribute('data-atlas-topic')||target.getAttribute('data-world-topic');chooseTopic(id,{focusKey:keyboard?{attribute:'data-atlas-topic',value:id}:null});
        }else if(target.hasAttribute('data-atlas-region')||target.hasAttribute('data-world-region')){
          const id=target.getAttribute('data-atlas-region')||target.getAttribute('data-world-region');chooseRegion(id,{focusKey:keyboard?{attribute:'data-atlas-region',value:id}:null});
        }else if(target.hasAttribute('data-world-trace'))showConnections(target.getAttribute('data-world-trace'));
        else if(target.hasAttribute('data-world-mode')){
          if(target.getAttribute('data-world-mode')==='connections')showConnections(state.selectedSlug);
          else{state.mode='map';paint();notify();}
        }else if(target.hasAttribute('data-world-zoom'))zoom(target.getAttribute('data-world-zoom')==='in'?1.4:1/1.4);
        else if(target.hasAttribute('data-world-home'))chooseRegion(null);
        else if(target.hasAttribute('data-world-fit'))follower.setTarget(targetBounds());
        else if(target.hasAttribute('data-world-interact')){
          touchPan=!touchPan;canvas.dataset.touchPan=String(touchPan);target.setAttribute('aria-pressed',String(touchPan));target.textContent=touchPan?'Done moving':'Move map';
          if(gesture)pointerEnd({pointerId:gesture.id,type:'pointercancel'});
          status.textContent=touchPan?'Map movement on. Drag to pan; choose Done moving to scroll the page.':'Map movement off. Swipe to scroll the page; tap a territory to explore.';
        }
      }
      function change(event){if(event.target===regionSelect)chooseRegion(regionSelect.value);else if(event.target===topicSelect){if(topicSelect.value)chooseTopic(topicSelect.value);else chooseRegion(state.regionId);}}
      function searchInput(event){
        if(event.target!==search)return;
        const matches=areas.search(search.value).slice(0,8);
        if(!search.value.trim()){results.hidden=true;results.replaceChildren();return;}
        results.innerHTML='<p>'+matches.length+' matching areas</p>'+(matches.length?'<ul>'+matches.map(topic=>'<li><button type="button" data-world-topic="'+esc(topic.id)+'"><strong>'+esc(topic.title)+'</strong><span>'+esc(areas.getRegion(topic.regionId).title)+' · '+topic.availableCount+' available</span></button></li>').join('')+'</ul>':'<p>Try a field, an idea, or an application.</p>');results.hidden=false;
      }
      function keys(event){
        if(event.target===search&&event.key==='Escape'){closeResults();return;}
        if(!canvas.contains(event.target)||['Enter',' '].includes(event.key))return;
        const movements={ArrowLeft:[-.12,0],ArrowRight:[.12,0],ArrowUp:[0,-.12],ArrowDown:[0,.12]};
        if(movements[event.key]){event.preventDefault();move(...movements[event.key]);}
        else if(['+','=','-','0'].includes(event.key)){event.preventDefault();if(event.key==='0')chooseRegion(null);else zoom(event.key==='-'?1/1.4:1.4);}
      }
      function pointerDown(event){
        if(event.button!==0||event.isPrimary===false||event.pointerType==='touch'&&!touchPan)return;
        suppressPointerClick=false;
        const svg=canvas.querySelector('svg'),box=follower.current(),rect=svg?.getBoundingClientRect();if(!rect||!rect.width||!rect.height)return;
        gesture={id:event.pointerId,x:event.clientX,y:event.clientY,box,scale:Math.min(rect.width/box.width,rect.height/box.height),moved:false};
      }
      function pointerMove(event){
        if(!gesture||event.pointerId!==gesture.id)return;
        if(event.buttons===0){pointerEnd({pointerId:gesture.id,type:'pointercancel'});return;}
        const dx=event.clientX-gesture.x,dy=event.clientY-gesture.y;
        if(!gesture.moved&&Math.hypot(dx,dy)<6)return;
        if(!gesture.moved){gesture.moved=true;follower.settle();canvas.setPointerCapture?.(gesture.id);canvas.dataset.dragging='true';}
        event.preventDefault();follower.setTarget(cameraBox({...gesture.box,x:gesture.box.x-dx/gesture.scale,y:gesture.box.y-dy/gesture.scale}),{immediate:true});
      }
      function pointerEnd(event){
        if(!gesture||event.pointerId!==gesture.id)return;
        const id=gesture.id;suppressPointerClick=gesture.moved&&event.type!=='pointercancel';gesture=null;delete canvas.dataset.dragging;
        if(canvas.hasPointerCapture?.(id))canvas.releasePointerCapture(id);
      }
      function pointerLeave(event){if(gesture&&!gesture.moved)pointerEnd({...event,pointerId:gesture.id,type:'pointercancel'});}
      const reduced=()=>{if(media?.matches)follower.settle();};
      let lastSize='';
      function resize(){
        if(destroyed||state.mode!=='map')return;const size=dimensions(),key=size.width+' '+size.height;if(key===lastSize)return;lastSize=key;
        follower.setTarget(fitCamera(follower.current(),size,!state.regionId),{immediate:true});
      }
      const observer=typeof ResizeObserver==='function'?new ResizeObserver(resize):null;observer?.observe(canvas);
      if(!observer&&typeof window!=='undefined')window.addEventListener('resize',resize);
      host.addEventListener('click',action);host.addEventListener('keydown',action);host.addEventListener('keydown',keys);host.addEventListener('change',change);host.addEventListener('input',searchInput);host.addEventListener('focusin',searchInput);
      canvas.addEventListener('pointerdown',pointerDown);canvas.addEventListener('pointermove',pointerMove);canvas.addEventListener('pointerup',pointerEnd);canvas.addEventListener('pointercancel',pointerEnd);canvas.addEventListener('pointerleave',pointerLeave);
      media?.addEventListener('change',reduced);paint({animate:false});
      return Object.freeze({selectRegion:chooseRegion,selectTopic:chooseTopic,showConnections,zoom,getState:()=>({...state,camera:follower.current()}),destroy(){if(destroyed)return;destroyed=true;observer?.disconnect();if(!observer&&typeof window!=='undefined')window.removeEventListener('resize',resize);neighborhood?.destroy();follower.destroy();if(gesture&&canvas.hasPointerCapture?.(gesture.id))canvas.releasePointerCapture(gesture.id);gesture=null;host.removeEventListener('click',action);host.removeEventListener('keydown',action);host.removeEventListener('keydown',keys);host.removeEventListener('change',change);host.removeEventListener('input',searchInput);host.removeEventListener('focusin',searchInput);canvas.removeEventListener('pointerdown',pointerDown);canvas.removeEventListener('pointermove',pointerMove);canvas.removeEventListener('pointerup',pointerEnd);canvas.removeEventListener('pointercancel',pointerEnd);canvas.removeEventListener('pointerleave',pointerLeave);media?.removeEventListener('change',reduced);}});
    }
    return Object.freeze({areas,connections,stateFromPath,pathForState,pathForCard,markup,panelMarkup,mount});
  }
  return Object.freeze({create,cameraBox,scaleCamera,fitCamera});
});
