/* An original cartographic view of the atlas. The explorer owns selection and motion. */
(function(root,factory){
  'use strict';
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasLandscape=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const ink='#233d42',paper='#f6f2e3';
  const finite=Number.isFinite;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=value=>finite(value)?Number(value.toFixed(4)):0;
  const count=value=>finite(value)&&value>=0?Math.floor(value):0;
  const scope=value=>'atlas-terrain-'+Array.from(String(value??'overview')).map(c=>/^[A-Za-z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,size=16,extra='')=>'<text x="'+n(x)+'" y="'+n(y)+'" fill="'+ink+'" font-size="'+size+'" '+extra+'>'+esc(value)+'</text>';
  const line=(x,y,xx,yy,extra='')=>'<path d="M'+n(x)+' '+n(y)+'L'+n(xx)+' '+n(yy)+'" fill="none" stroke="'+ink+'" '+extra+'/>';
  const circle=(x,y,r,extra='')=>'<circle cx="'+n(x)+'" cy="'+n(y)+'" r="'+n(r)+'" '+extra+'/>';
  const slots=(x,y,width,gap=50,height=40)=>[0,1,2].map(index=>({x,y:y+index*gap,width,height}));
  const geography={
    foundations:{color:'#ecc4d4',bounds:{x:20,y:24,width:258,height:256},title:[49,73],counter:[49,96],slots:slots(48,116,193,49,38),topics:['mathematical-language','sets-and-proof','function-rules'],path:'M46 34Q94 27 139 37L234 30Q265 37 260 69L270 216Q267 254 231 263L57 271Q27 261 30 227L21 78Q20 45 46 34Z'},
    numbers:{color:'#e4b3ca',bounds:{x:262,y:24,width:325,height:260},title:[296,72],counter:[296,95],slots:slots(295,115,246,50,39),topics:['real-numbers','powers-and-logs','complex-numbers'],path:'M285 35L417 28L547 39Q568 49 563 79L559 174L581 246Q577 269 548 275L427 283L276 257L267 183L268 63Q268 42 285 35Z'},
    structures:{color:'#c6b6e3',bounds:{x:246,y:270,width:407,height:194},title:[279,311],counter:[280,333],slots:[{x:277,y:350,width:167,height:39},{x:459,y:350,width:167,height:39},{x:334,y:404,width:232,height:39}],topics:['algebraic-rules','linear-algebra','equations-and-optimization'],path:'M287 285L432 292L588 274Q612 277 619 298L645 349L611 425Q604 445 579 448L417 460L268 415L253 356L259 309Q264 288 287 285Z'},
    spaces:{color:'#bbb0db',bounds:{x:20,y:278,width:317,height:438},title:[52,322],counter:[53,345],slots:slots(53,369,170,54,42),topics:['geometry-and-measurement','vectors-and-transformations','fractals-and-spaces'],path:'M44 290L238 277L226 350L249 413L312 463L326 570L311 690Q304 710 276 707L59 700Q29 693 29 661L21 480L31 362L25 321Q26 299 44 290Z'},
    change:{color:'#c8a6d0',bounds:{x:316,y:450,width:394,height:268},title:[357,503],counter:[358,527],slots:slots(355,548,306,51,39),topics:['limits-and-continuity','calculus','dynamical-systems'],path:'M348 475L423 472L594 459L660 474Q685 484 691 509L702 635L691 697Q685 709 658 710L353 710Q331 703 331 678L335 587L324 515Q323 485 348 475Z'},
    uncertainty:{color:'#afd9e4',bounds:{x:573,y:24,width:365,height:287},title:[610,73],counter:[611,98],slots:slots(613,120,277,53,41),topics:['probability','bayesian-inference','statistics'],path:'M600 34L744 29L910 35Q928 39 927 64L934 197L908 279Q899 302 873 302L710 294L638 270L601 226L578 163L584 65Q586 41 600 34Z'},
    computation:{color:'#91c4df',bounds:{x:934,y:24,width:249,height:309},title:[958,73],counter:[959,98],slots:slots(956,120,203,55,43),topics:['graphs-and-networks','algorithms','linear-time-algorithms'],path:'M959 34L1158 28Q1178 34 1174 59L1181 178L1171 290Q1166 316 1141 322L1084 327L945 298L942 214L946 133L938 66Q937 43 959 34Z'},
    applications:{color:'#a2d0c5',bounds:{x:696,y:309,width:491,height:409},title:[742,375],counter:[743,399],slots:slots(743,424,389,57,43),topics:['growth-and-scale','optimization','physical-models'],path:'M724 317L877 318L938 343L1087 351L1155 333Q1180 330 1178 358L1181 491L1173 680Q1169 704 1144 705L904 712L738 706Q713 702 713 676L708 565L716 470L704 359Q703 331 724 317Z'}
  };
  const keys=Object.freeze(Object.keys(geography));
  function overviewBounds(){return{x:0,y:0,width:1200,height:740};}
  function boundsForRegion(id){return typeof id==='string'&&Object.hasOwn(geography,id)?{...geography[id].bounds}:null;}
  function boundsForTopic(id){
    if(typeof id!=='string')return null;
    const short=id.includes(':')?id.slice(id.indexOf(':')+1):id;
    const owner=keys.find(key=>geography[key].topics.includes(short)&&(!id.includes(':')||id.startsWith(key+':')));
    return owner?boundsForRegion(owner):null;
  }
  function camera(value){
    if(!value||typeof value!=='object'||!['x','y','width','height'].every(key=>finite(value[key]))||value.width<=0||value.height<=0)return overviewBounds();
    return{x:value.x,y:value.y,width:value.width,height:value.height};
  }
  function motif(id){
    const style='fill="none" stroke="'+ink+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    const group=body=>'<g class="atlas-terrain-motif" aria-hidden="true" pointer-events="none" '+style+'>'+body+'</g>';
    if(id==='foundations')return group(circle(218,74,12,'fill="#f6f2e3" fill-opacity=".2"')+circle(232,74,12,'fill="#f6f2e3" fill-opacity=".2"'));
    if(id==='numbers')return group('<path d="M483 69L490 77L498 56H533"/>'+text(502,76,'2',18));
    if(id==='structures')return group('<path d="M562 308H557V333H562M597 308H602V333H597"/>'+text(565,320,'1  0',12)+text(565,332,'0  1',12));
    if(id==='spaces')return group('<path d="M78 632L112 573L146 632Z" fill="#e7d792" fill-opacity=".7"/><rect x="163" y="582" width="50" height="50" transform="rotate(12 188 607)" fill="#96d3cc" fill-opacity=".7"/>'+circle(260,613,28,'fill="#ebacc5" fill-opacity=".65"')+line(64,652,283,652,'stroke-opacity=".25"')+text(171,681,'measure · transform · repeat',14,'text-anchor="middle"'));
    if(id==='change')return group('<path d="M572 512C586 512 588 489 602 489S617 516 633 516S649 492 663 492"/>'+line(569,519,667,519,'stroke-opacity=".25"'));
    if(id==='uncertainty')return group('<path d="M818 83C834 83 831 54 848 54S864 83 880 83"/>'+line(814,86,884,86,'stroke-opacity=".35"'));
    if(id==='computation')return group(line(1125,68,1147,53)+line(1125,68,1156,83)+line(1147,53,1156,83)+circle(1125,68,4,'fill="'+paper+'"')+circle(1147,53,4,'fill="'+paper+'"')+circle(1156,83,4,'fill="'+paper+'"'));
    return group('<path d="M756 650V596M756 650H842M765 639C783 637 797 627 833 604"/>'+circle(781,633,3,'fill="'+paper+'"')+circle(809,621,3,'fill="'+paper+'"')+'<path d="M888 649L915 600L944 649Z" fill="#f0d27e" fill-opacity=".65"/><path d="M892 641H940M898 630H934M904 619H927"/>'+line(986,642,1116,642,'stroke-opacity=".35"')+'<rect x="1013" y="611" width="55" height="24" rx="5" fill="#d3e4a9" fill-opacity=".8"/>'+circle(1025,642,7,'fill="'+paper+'"')+circle(1057,642,7,'fill="'+paper+'"')+text(937,685,'models turn questions into experiments',15,'text-anchor="middle"'));
  }
  function labelLines(value,maximum){
    const words=String(value).trim().split(/\s+/),lines=[''];
    for(const word of words){const last=lines.length-1;if((lines[last]+' '+word).trim().length>maximum&&lines.length<2)lines.push(word);else lines[last]=(lines[last]+' '+word).trim();}
    if(lines.at(-1).length>maximum+2)lines[lines.length-1]=lines.at(-1).slice(0,maximum+1)+'…';
    return lines;
  }
  function topicMarkup(topic,slot,selected){
    const title=String(topic.shortTitle||topic.title||topic.id),available=count(topic.availableCount),planned=count(topic.plannedCount),lines=labelLines(title,Math.max(12,Math.floor((slot.width-54)/8.2)));
    const top=slot.y+slot.height/2-(lines.length-1)*8+5;
    const description=String(topic.description||'Select this area to explore its concepts.');
    return'<g class="atlas-terrain-topic'+(selected?' is-selected':'')+'" data-atlas-topic="'+esc(topic.id)+'" role="button" tabindex="0" aria-pressed="'+selected+'" aria-label="Explore '+esc(topic.title||title)+'. '+available+' available cards and '+planned+' planned concepts."><title>'+esc(description)+'</title><rect x="'+slot.x+'" y="'+slot.y+'" width="'+slot.width+'" height="'+slot.height+'" rx="8"/>'+circle(slot.x+13,slot.y+slot.height/2,4,'class="atlas-topic-status'+(available?' has-cards':'')+'"')+'<text x="'+(slot.x+26)+'" y="'+top+'" font-size="16" fill="'+ink+'">'+lines.map((line,index)=>'<tspan x="'+(slot.x+26)+'" dy="'+(index?16:0)+'">'+esc(line)+'</tspan>').join('')+'</text>'+text(slot.x+slot.width-11,slot.y+slot.height/2+5,available,13,'text-anchor="end" class="atlas-topic-count"')+'</g>';
  }
  function render({regions=[],selectedRegion=null,selectedTopic=null,viewBox=null,id='overview'}={}){
    const namespace=scope(id),bounds=camera(viewBox),byId=new Map((Array.isArray(regions)?regions:[]).filter(region=>region&&typeof region.id==='string').map(region=>[region.id,region]));
    const territories=keys.map(key=>{
      const region=byId.get(key),geo=geography[key];if(!region)return'';
      const selected=selectedRegion===key,title=String(region.shortTitle||region.title||key),available=count(region.availableCount),planned=count(region.plannedCount);
      const topics=Array.isArray(region.topics)?region.topics:[];
      return'<g class="atlas-terrain-region'+(selected?' is-selected':'')+'" data-territory="'+key+'"><g class="atlas-terrain-region-hit" data-atlas-region="'+key+'" role="button" tabindex="0" aria-pressed="'+selected+'" aria-label="Explore '+esc(region.title||title)+'. '+available+' available cards and '+planned+' planned concepts."><path class="atlas-terrain-shape" d="'+geo.path+'" fill="'+geo.color+'"/><g pointer-events="none">'+text(...geo.title,title,24,'class="atlas-terrain-title"')+text(...geo.counter,available+' available · '+planned+' planned',13,'class="atlas-terrain-count"')+motif(key)+'</g></g><g class="atlas-terrain-topics">'+topics.slice(0,3).map((topic,index)=>topicMarkup(topic,geo.slots[index],selectedTopic===topic.id)).join('')+'</g></g>';
    }).join('');
    return'<figure class="atlas-landscape"><svg class="atlas-landscape-svg" viewBox="'+[bounds.x,bounds.y,bounds.width,bounds.height].map(n).join(' ')+'" role="group" aria-labelledby="'+namespace+'-title '+namespace+'-description" xmlns="http://www.w3.org/2000/svg"><title id="'+namespace+'-title">A landscape of mathematics</title><desc id="'+namespace+'-description">Eight colored territories connect mathematical language, number, structure, space, change, chance, computation and applications. Select a territory or a labeled area to move closer. Filled dots mark areas with available cards; outlined dots mark planned areas. Geography is a teaching arrangement and fields overlap.</desc><defs><pattern id="'+namespace+'-paper" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r=".75" fill="#748579" opacity=".14"/></pattern></defs><rect width="1200" height="740" fill="'+paper+'"/><rect width="1200" height="740" fill="url(#'+namespace+'-paper)"/>'+territories+'</svg><figcaption><span><i class="atlas-landscape-legend filled" aria-hidden="true"></i>Available cards</span><span><i class="atlas-landscape-legend" aria-hidden="true"></i>Planned areas</span><span>Choose a territory or a label. Fields overlap; this map is a guide for exploration.</span></figcaption></figure>';
  }
  return Object.freeze({render,boundsForRegion,boundsForTopic,overviewBounds});
});
