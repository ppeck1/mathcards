/* Stable field navigation over a schematic surface of playable lesson counts. */
(function(root,factory){
  'use strict';const node=typeof module==='object'&&module.exports;
  const api=factory(node?require('./atlas-topography.js'):root.AtlasTopography);
  if(node)module.exports=api;root.AtlasLandscape=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Topography){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const finite=Number.isFinite,n=value=>finite(value)?Number(value.toFixed(4)):0;
  const scope=value=>'atlas-map-'+Array.from(String(value??'overview')).map(c=>/^[A-Za-z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const count=value=>finite(value)&&value>=0?Math.floor(value):0;
  const world=Object.freeze({x:0,y:0,width:1200,height:800});
  // Stable editorial positions and categorical colors identify fields, not difficulty.
  const geography={
    foundations:{anchor:[210,150],bounds:{x:65,y:65,width:345,height:285},color:'#d9e5d1',topics:['mathematical-language','sets-and-proof','function-rules'],points:[[148,205],[220,255],[315,195]],path:'M75 100Q180 45 335 72Q391 116 390 204Q367 274 318 318Q187 336 79 290Q44 197 75 100Z'},
    numbers:{anchor:[460,125],bounds:{x:305,y:48,width:315,height:260},color:'#eee2c6',topics:['real-numbers','powers-and-logs','complex-numbers'],points:[[390,200],[485,230],[550,165]],path:'M335 72Q451 32 588 78Q637 150 601 235Q531 283 411 296Q355 248 373 187Q390 116 335 72Z'},
    structures:{anchor:[465,340],bounds:{x:275,y:260,width:380,height:235},color:'#dfdbea',topics:['algebraic-rules','linear-algebra','equations-and-optimization'],points:[[360,325],[450,405],[590,370]],path:'M318 318Q409 277 499 281Q567 262 623 283Q653 342 627 411Q561 463 466 472Q375 486 298 436Q272 375 318 318Z'},
    spaces:{anchor:[190,465],bounds:{x:55,y:320,width:340,height:390},color:'#d5e4e3',topics:['geometry-and-measurement','vectors-and-transformations','fractals-and-spaces'],points:[[155,390],[250,520],[245,600]],path:'M79 290Q189 336 318 318Q272 375 298 436Q325 487 379 543Q378 629 311 696Q165 740 83 657Q40 519 57 412Z'},
    change:{anchor:[565,638],bounds:{x:325,y:445,width:460,height:300},color:'#e6d9d3',topics:['limits-and-continuity','calculus','dynamical-systems'],points:[[425,550],[570,520],[690,630]],path:'M298 436Q375 486 466 472Q561 463 627 411Q724 423 777 480Q770 547 793 612Q770 703 647 741Q451 764 311 696Q378 629 379 543Z'},
    uncertainty:{anchor:[745,253],bounds:{x:575,y:70,width:330,height:290},color:'#d6e7db',topics:['probability','bayesian-inference','statistics'],points:[[650,190],[820,190],[765,310]],path:'M588 78Q721 36 886 85Q939 178 907 266Q851 325 764 353Q683 366 623 283Q567 262 601 235Q637 150 588 78Z'},
    computation:{anchor:[960,270],bounds:{x:850,y:110,width:310,height:330},color:'#d9e2ec',topics:['graphs-and-networks','algorithms','linear-time-algorithms'],points:[[900,180],[1025,340],[980,390]],path:'M886 85Q1057 91 1134 175Q1192 270 1141 369Q1045 400 946 365Q905 319 907 266Q939 178 886 85Z'},
    applications:{anchor:[940,560],bounds:{x:755,y:370,width:405,height:360},color:'#e8e6cc',topics:['growth-and-scale','optimization','physical-models'],points:[[840,460],[1025,485],[900,630]],path:'M764 353Q851 325 907 266Q905 319 946 365Q1045 400 1141 369Q1184 515 1127 657Q1020 754 869 739Q818 716 793 612Q770 547 777 480Q724 423 764 353Z'}
  };
  const keys=Object.freeze(Object.keys(geography));
  const summits={foundations:[205,232],numbers:[477,216],structures:[465,393],spaces:[220,555],change:[548,557],uncertainty:[750,156],computation:[1030,215],applications:[991,585]};
  for(const key of keys)geography[key].peak=summits[key];
  function overviewBounds(){return{...world};}
  function regionColor(id){return typeof id==='string'&&Object.hasOwn(geography,id)?geography[id].color:'#e8ecdf';}
  function boundsForRegion(id){return typeof id==='string'&&Object.hasOwn(geography,id)?{...geography[id].bounds}:null;}
  function topicLocation(id){
    if(typeof id!=='string')return null;
    const short=id.includes(':')?id.slice(id.indexOf(':')+1):id;
    const owner=keys.find(key=>geography[key].topics.includes(short)&&(!id.includes(':')||id.startsWith(key+':')));
    if(!owner)return null;const index=geography[owner].topics.indexOf(short),point=geography[owner].points[index];
    return{id:owner+':'+short,regionId:owner,x:point[0],y:point[1]};
  }
  function boundsForTopic(id){const point=topicLocation(id);return point?{x:point.x-125,y:point.y-100,width:250,height:200}:null;}
  function camera(value){return value&&['x','y','width','height'].every(key=>finite(value[key]))&&value.width>0&&value.height>0?{x:value.x,y:value.y,width:value.width,height:value.height}:overviewBounds();}
  function viewport(value){return value&&finite(value.width)&&finite(value.height)&&value.width>0&&value.height>0?value:{width:900,height:600};}
  function scaleFor(box,size){return Math.min(size.width/box.width,size.height/box.height);}
  function intersects(a,b){return a.x<b.x+b.width+6&&a.x+a.width+6>b.x&&a.y<b.y+b.height+5&&a.y+a.height+5>b.y;}
  function reservedBoxes(dimensions){
    const size=viewport(dimensions),short=size.height<310&&size.width>size.height*1.5;
    // These screen-space clearings include the controls' focus rings and the
    // mobile touch-mode button, even when that button is absent on a fine pointer.
    return[
      {id:'camera-controls',x:Math.max(0,size.width-(short?215:70)),y:0,width:Math.min(size.width,short?215:70),height:Math.min(size.height,short?70:215)},
      {id:'locator',x:0,y:Math.max(0,size.height-105),width:Math.min(size.width,105),height:Math.min(size.height,105)},
      {id:'touch-toggle',x:Math.max(0,size.width-135),y:Math.max(0,size.height-105),width:Math.min(size.width,135),height:Math.min(size.height,105)}
    ];
  }
  function candidateLines(title,maximum=20){
    const words=String(title).split(/\s+/),lines=[''];
    for(const word of words){const last=lines.length-1;if(lines[last]&&(lines[last]+' '+word).length>maximum&&lines.length<2)lines.push(word);else lines[last]+=(lines[last]?' ':'')+word;}
    return lines;
  }
  function cardPlaces(topic){
    if(!topic)return[];const point=topicLocation(topic.id);if(!point)return[];const offsets=[[-69,-44],[73,-39],[-68,51],[76,49]];
    return(topic.availableCards||[]).slice(0,4).map((card,i)=>({card,x:point.x+offsets[i][0],y:point.y+offsets[i][1]}));
  }
  function labelLayout({regions=[],selectedRegion=null,selectedTopic=null,viewBox=null,viewport:dimensions=null}={}){
    const box=camera(viewBox),size=viewport(dimensions),scale=scaleFor(box,size),offsetX=(size.width-box.width*scale)/2,offsetY=(size.height-box.height*scale)/2,candidates=[];
    for(const region of regions){
      if(!region||!Object.hasOwn(geography,region.id))continue;const geo=geography[region.id];
      candidates.push({id:'region:'+region.id,x:geo.anchor[0],y:geo.anchor[1],text:!selectedRegion&&size.width<560?(region.shortTitle||region.title):(region.title||region.shortTitle),kind:'region',priority:region.id===selectedRegion?80:50,selected:region.id===selectedRegion});
      if(region.id===selectedRegion)for(const topic of region.topics||[]){const point=topicLocation(topic.id);if(point)candidates.push({id:'topic:'+topic.id,x:point.x,y:point.y,text:topic.shortTitle||topic.title,kind:'topic',priority:topic.id===selectedTopic?120:90,selected:topic.id===selectedTopic});}
    }
    if(selectedTopic){const topic=regions.flatMap(region=>region.topics||[]).find(item=>item.id===selectedTopic);for(const place of cardPlaces(topic))candidates.push({id:'card:'+place.card.slug,x:place.x,y:place.y,text:place.card.title,kind:'card',priority:70,selected:false});}
    const overview=!selectedRegion,smallOverview=overview&&size.width<560,taken=overview?[]:reservedBoxes(size),result=[];
    for(const label of candidates.sort((a,b)=>b.priority-a.priority||(a.id<b.id?-1:a.id>b.id?1:0))){
      const fontSize=label.kind==='region'?(smallOverview?13:18):label.kind==='card'?13:14,lines=candidateLines(label.text,label.kind==='region'?21:23),width=Math.max(...lines.map(line=>line.length))*fontSize*.54+8,height=lines.length*(fontSize+2)+4;
      const px=(label.x-box.x)*scale+offsetX,py=(label.y-box.y)*scale+offsetY;
      const positions=label.kind==='card'&&box.width>=520?[]:label.kind==='region'?[[0,-height/2],[0,14],[0,32],[0,-height-20],[0,52],[width/2+14,-height/2],[-width/2-14,-height/2]]:[[0,-22-height],[0,18],[width/2+17,-height/2],[-width/2-17,-height/2]];
      let placed=null;
      for(const [dx,dy]of positions){const rect={x:px+dx-width/2,y:py+dy,width,height};if(smallOverview)rect.x=Math.max(7,Math.min(rect.x,size.width-width-7));if(rect.x<7||rect.y<7||rect.x+width>size.width-7||rect.y+height>size.height-7)continue;if(taken.some(other=>intersects(rect,other)))continue;placed={...rect,dx:rect.x+width/2-px,dy};break;}
      if(placed)taken.push(placed);
      result.push({...label,lines,fontSize,visible:!!placed,box:placed?{x:placed.x,y:placed.y,width:placed.width,height:placed.height}:null,dx:placed?.dx||0,dy:placed?.dy||0});
    }
    return result;
  }
  function textMarkup(label){return'<text class="atlas-map-label '+label.kind+'-label" text-anchor="middle" y="'+(label.fontSize+label.dy)+'" x="'+label.dx+'" font-size="'+label.fontSize+'">'+label.lines.map((line,i)=>'<tspan x="'+label.dx+'" dy="'+(i?label.fontSize+2:0)+'">'+esc(line)+'</tspan>').join('')+'</text>';}
  function regionTarget(region,selected){const geo=geography[region.id];return'<g class="atlas-terrain-region-hit'+(selected?' is-selected':'')+'" data-atlas-region="'+esc(region.id)+'" role="button" tabindex="0" aria-pressed="'+selected+'" aria-label="Explore '+esc(region.title)+'. '+count(region.availableCount)+' available cards and '+count(region.plannedCount)+' planned concepts."><path class="atlas-editorial-territory" d="'+geo.path+'" fill="'+geo.color+'"/></g>';}
  function topicTarget(topic,selected,active,scale){const point=topicLocation(topic.id);if(!point)return'';return'<g class="atlas-terrain-topic'+(selected?' is-selected':'')+'" data-atlas-topic="'+esc(topic.id)+'" data-terrain-anchor="'+point.x+' '+point.y+'" data-terrain-visible="'+active+'" transform="translate('+point.x+' '+point.y+') scale('+n(1/scale)+')" role="button" tabindex="'+(active?'0':'-1')+'" aria-pressed="'+selected+'" aria-label="Explore '+esc(topic.title)+'. '+count(topic.availableCount)+' available cards and '+count(topic.plannedCount)+' planned concepts."'+(!active?' display="none"':'')+'><title>'+esc(topic.description)+'</title><circle class="atlas-marker-target" r="22"/><circle class="atlas-topic-status'+(topic.availableCount?' has-cards':'')+'" r="5"/><circle class="atlas-marker-focus" r="11"/></g>';}
  function cardDestinations(topic,scale){
    return cardPlaces(topic).map(({card,x,y})=>'<a href="'+esc(card.href)+'" class="atlas-card-destination" data-terrain-card="'+esc(card.slug)+'" data-terrain-anchor="'+x+' '+y+'" transform="translate('+x+' '+y+') scale('+n(1/scale)+')" aria-label="Open '+esc(card.title)+'"><title>'+esc(card.title)+'</title><circle class="atlas-marker-target" r="22"/><circle r="3.5"/></a>').join('');
  }
  function render({regions=[],selectedRegion=null,selectedTopic=null,viewBox=null,viewport:dimensions=null,id='overview'}={}){
    const namespace=scope(id),box=camera(viewBox),size=viewport(dimensions),scale=scaleFor(box,size),valid=(Array.isArray(regions)?regions:[]).filter(region=>region&&Object.hasOwn(geography,region.id)),labels=labelLayout({regions:valid,selectedRegion,selectedTopic,viewBox:box,viewport:size});
    const selected=valid.flatMap(region=>region.topics||[]).find(topic=>topic.id===selectedTopic),title=Topography.description(valid),terrain=Topography.render({regions:valid,geography,id:namespace,overview:!selectedRegion});
    return'<figure class="atlas-landscape"><svg class="atlas-landscape-svg" viewBox="'+[box.x,box.y,box.width,box.height].map(n).join(' ')+'" role="group" aria-labelledby="'+namespace+'-title '+namespace+'-description" xmlns="http://www.w3.org/2000/svg"><title id="'+namespace+'-title">A map of mathematics</title><desc id="'+namespace+'-description">'+title+' Select a territory to reveal its areas. The panel also lists planned concepts.</desc><rect x="-1200" y="-800" width="3600" height="2400" fill="#f1eddf"/>'+terrain+'<g class="atlas-field-territories">'+valid.map(region=>regionTarget(region,region.id===selectedRegion)).join('')+'</g><g class="atlas-terrain-topics">'+valid.flatMap(region=>(region.topics||[]).map(topic=>topicTarget(topic,topic.id===selectedTopic,region.id===selectedRegion,scale))).join('')+'</g><g class="atlas-labels" aria-hidden="true" pointer-events="none">'+labels.map(label=>'<g data-terrain-label="'+esc(label.id)+'" data-terrain-anchor="'+label.x+' '+label.y+'" transform="translate('+label.x+' '+label.y+') scale('+n(1/scale)+')"'+(!label.visible?' display="none"':'')+'>'+textMarkup(label)+'</g>').join('')+'</g><g class="atlas-card-places">'+cardDestinations(selected,scale)+'</g></svg><figcaption>'+Topography.legend(valid)+'</figcaption></figure>';
  }

  function updateView(svg,options={}){
    if(!svg)return;const box=camera(options.viewBox),size=viewport(options.viewport),scale=scaleFor(box,size);
    svg.setAttribute('viewBox',[box.x,box.y,box.width,box.height].map(n).join(' '));
    svg.querySelectorAll?.('[data-terrain-anchor]').forEach(node=>{const [x,y]=node.getAttribute('data-terrain-anchor').split(' ').map(Number);node.setAttribute('transform','translate('+x+' '+y+') scale('+n(1/scale)+')');});
    svg.querySelectorAll?.('[data-terrain-card]').forEach(node=>node.setAttribute('display',box.width<520?'inline':'none'));
    for(const label of labelLayout({...options,viewBox:box,viewport:size})){
      const node=svg.querySelector?.('[data-terrain-label="'+label.id+'"]');if(!node)continue;
      node.setAttribute('display',label.visible?'inline':'none');node.innerHTML=textMarkup(label);
    }
  }
  function locator(viewBox){const box=camera(viewBox);return'<svg viewBox="0 0 1200 800" role="img" aria-label="Map locator. The brass frame marks the visible area.">'+keys.map(id=>'<path d="'+geography[id].path+'" fill="'+geography[id].color+'"/>').join('')+'<rect data-locator-frame x="'+n(box.x)+'" y="'+n(box.y)+'" width="'+n(box.width)+'" height="'+n(box.height)+'"/></svg>';}

  return Object.freeze({render,updateView,labelLayout,reservedBoxes,locator,regionColor,boundsForRegion,boundsForTopic,topicLocation,overviewBounds});
});
