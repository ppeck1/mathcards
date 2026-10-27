/* A schematic topographic surface: one territory's summit is its playable lesson count. */
(function(root,factory){
  'use strict';const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasTopography=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const count=value=>Number.isSafeInteger(value)&&value>=0?value:0;
  const n=value=>Number.isFinite(value)?Number(value.toFixed(4)):0;
  const scope=value=>'topography-'+Array.from(String(value??'map')).map(c=>/^[A-Za-z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  function metrics(regions=[]){
    const maximum=Math.max(0,...(Array.isArray(regions)?regions:[]).map(region=>count(region?.availableCount)));
    let interval=1;
    if(maximum>24){const raw=maximum/18,power=10**Math.floor(Math.log10(raw)),fraction=raw/power;interval=power*(fraction<=1?1:fraction<=2?2:fraction<=5?5:10);}
    return Object.freeze({maximum,interval});
  }
  function levels(peak,interval=1){
    const maximum=count(peak),step=count(interval)||1,result=[];
    for(let level=step;level<=maximum&&result.length<25;level+=step)result.push(Object.freeze({height:level,scale:n(1-.86*level/maximum),index:(level/step)%5===0,summit:level===maximum}));
    // A labeled summit can fall between the regularly spaced contour lines.
    if(maximum&&(!result.length||result[result.length-1].height!==maximum))result.push(Object.freeze({height:maximum,scale:.14,index:false,summit:true}));
    return Object.freeze(result);
  }
  function render({regions=[],geography={},id='map',overview=true}={}){
    const namespace=scope(id),valid=(Array.isArray(regions)?regions:[]).filter(region=>Object.hasOwn(geography,region?.id)&&typeof geography[region.id].path==='string'&&Array.isArray(geography[region.id].anchor)&&geography[region.id].anchor.length===2&&geography[region.id].anchor.every(Number.isFinite)),summary=metrics(valid);
    const shapes=valid.map(region=>{
      const geo=geography[region.id],peak=geo.peak||geo.anchor,path=esc(geo.path),top=count(region.availableCount),clip=namespace+'-'+scope(region.id);
      const contours=levels(top,summary.interval).map(level=>{
        const fraction=summary.maximum?level.height/summary.maximum:0,transform='translate('+peak.map(n).join(' ')+') scale('+level.scale+') translate('+peak.map(value=>n(-value)).join(' ')+')';
        const fillOpacity=n(.09+.24*fraction),isRegular=level.height%summary.interval===0;
        return '<g transform="'+transform+'"><path class="atlas-topography-step" d="'+path+'" fill-opacity="'+fillOpacity+'" data-topography-height="'+level.height+'"/>'+(isRegular?'<path class="atlas-topography-contour'+(level.index?' index-contour':'')+'" d="'+path+'" data-contour-level="'+level.height+'"/>':'')+'<path class="atlas-topography-light" d="'+path+'"/></g>';
      }).join('');
      const summit=overview&&top?'<g class="atlas-topography-summit" transform="translate('+peak.map(n).join(' ')+')"><path d="M-5 4L0-5L5 4Z"/><text x="9" y="4">'+top+'</text></g>':'';
      return '<g class="atlas-topography-territory" data-topography-region="'+esc(region.id)+'" data-summit-height="'+top+'"><path class="atlas-topography-coast-under" d="'+path+'"/><path class="atlas-topography-ground" d="'+path+'" fill="'+esc(geo.color)+'"/><g clip-path="url(#'+clip+')">'+contours+'</g><path class="atlas-topography-border" d="'+path+'"/>'+summit+'</g>';
    }).join('');
    const clips=valid.map(region=>'<clipPath id="'+namespace+'-'+scope(region.id)+'"><path d="'+esc(geography[region.id].path)+'"/></clipPath>').join('');
    return '<g class="atlas-topography" aria-hidden="true" pointer-events="none" data-contour-interval="'+summary.interval+'" data-highest-summit="'+summary.maximum+'"><defs>'+clips+'</defs>'+shapes+'</g>';
  }
  function description(regions=[]){const value=metrics(regions);return 'Summit height is the number of playable lessons in each territory. Contours every '+value.interval+' lesson'+(value.interval===1?'':'s')+'; highest summit: '+value.maximum+'.';}
  function legend(regions=[]){
    const value=metrics(regions);
    return '<div class="atlas-topography-legend"><strong><span aria-hidden="true">△</span> Height = playable lessons</strong><span>Contours: '+value.interval+' lesson'+(value.interval===1?'':'s')+' · Highest summit: '+value.maximum+'</span></div><details class="atlas-topography-reading"><summary>How to read the terrain</summary><p>Territory colors identify fields. Higher summits mean more playable lessons; the slopes are schematic. A lesson can appear in more than one territory, because fields overlap. Select a territory to see its lessons and planned concepts.</p></details>';
  }
  return Object.freeze({metrics,levels,render,description,legend});
});
