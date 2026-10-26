/* Contextual scenes use the same evaluated quantities as the adjacent story. */
(function(root,factory){
  const models=typeof module==='object'&&module.exports?require('./models.js'):root.AtlasModels;
  const everyday=typeof module==='object'&&module.exports?require('./model-registry.js'):(root.AtlasModelRegistry||root.AtlasEveryday);
  const trace=typeof module==='object'&&module.exports?require('./chaos-trace.js'):root.AtlasChaosTrace;
  const api=factory(models,everyday,trace);if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasStoryScenes=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(M,D,Trace){
  'use strict';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const f=value=>Number.isFinite(value)?Number(value.toPrecision(5)).toLocaleString('en-US',{maximumFractionDigits:5}):'Undefined';
  const n=value=>Number.isFinite(value)?Number(value.toFixed(4)):0;
  const colors={ink:'#eef9f0',muted:'#98b2b7',mint:'#c6f276',cyan:'#77d8e8',gold:'#f5cf78',violet:'#c3afff',orange:'#ffb891',grid:'#2b4450'};
  const PATIO_PIXELS_PER_METRE=200/9;
  const text=(x,y,value,color=colors.muted,size=13,extra='')=>'<text x="'+n(x)+'" y="'+n(y)+'" fill="'+color+'" font-size="'+size+'" '+extra+'>'+esc(value)+'</text>';
  const line=(x,y,xx,yy,color=colors.grid,extra='')=>'<path d="M'+n(x)+' '+n(y)+'L'+n(xx)+' '+n(yy)+'" stroke="'+color+'" fill="none" '+extra+'/>';
  function mark(part,body,extra=''){return '<g data-story-part="'+part+'" class="story-cue" '+extra+'>'+body+'</g>';}
  function bracket(x,y,xx,label,color,part,quantity=''){return mark(part,line(x,y,xx,y,color,'stroke-width="2" data-role="story-'+part+'-measure"')+line(x,y-5,x,y+5,color,'stroke-width="2"')+line(xx,y-5,xx,y+5,color,'stroke-width="2"')+text((x+xx)/2,y-10,label,color,11,'text-anchor="middle"'),quantity?'data-quantity="'+quantity+'"':'');}
  function values(slug,p){
    const result=M.evaluate(slug,p);
    const aliases=slug==='derivative'?{position:result.fa,speed:result.analytic}:slug==='function-composition'?{side:result.intermediate,area:result.output}:slug==='real-logarithm'?{stops:result.output}:slug==='exponential-change'?{width:result.output,rounded:result.output==null?null:Math.round(result.output)}:{};
    const step=slug==='chaos-theory'?Trace?.snapshot(p,result):null;
    const iteration=step?.valid?{iteration:step.n,nextIteration:step.nextGeneration,iterationProgress:step.progress,stepInputA:step.rows[0].input,stepInputB:step.rows[1].input,stepRemainingA:step.rows[0].remaining,stepRemainingB:step.rows[1].remaining,stepGrowthA:step.rows[0].growthFactor,stepGrowthB:step.rows[1].growthFactor,stepNextA:step.rows[0].output,stepNextB:step.rows[1].output,stepGapBefore:step.gapBefore,stepGapAfter:step.gapAfter}:{};
    return {...p,...result,...aliases,...iteration};
  }
  function primaryValue(slug,p){const r=M.evaluate(slug,p);return slug==='derivative'?(Number.isFinite(r.analytic)?r.analytic:null):(Number.isFinite(r.output)?r.output:null);}
  function rail(key,value,min,max,label,step,options={}){
    const requested=options.controlBounds?.[key];
    if(requested&&Number.isFinite(requested.min)&&Number.isFinite(requested.max)){
      const low=Math.max(min,requested.min),high=Math.min(max,requested.max);
      if(high>low){min=low;max=high;if(Number.isFinite(requested.step)&&requested.step>0)step=requested.step;}
    }
    const position=80+Math.max(0,Math.min(1,(value-min)/(max-min)))*600;
    return text(80,346,label,colors.ink,11)+'<g class="scene-handle" data-story-part="input" role="slider" tabindex="0" data-quantity="'+key+'" data-drag-param="'+key+'" data-drag-min="'+min+'" data-drag-max="'+max+'" data-drag-x0="80" data-drag-x1="680" data-drag-step="'+step+'" aria-label="'+esc(label)+'" aria-valuemin="'+min+'" aria-valuemax="'+max+'" aria-valuenow="'+value+'" aria-orientation="horizontal"><rect x="66" y="352" width="628" height="40" fill="transparent"/>'+line(80,372,680,372,colors.grid,'stroke-width="4" stroke-linecap="round"')+line(80,372,position,372,colors.cyan,'stroke-width="4" stroke-linecap="round"')+'<circle class="scene-handle-ring" cx="'+n(position)+'" cy="372" r="10" fill="#152c31" stroke="'+colors.cyan+'" stroke-width="2"/><circle cx="'+n(position)+'" cy="372" r="3" fill="'+colors.cyan+'"/></g>'+text(80,401,f(min),colors.muted,11)+text(680,401,f(max),colors.muted,11,'text-anchor="end"');
  }
  function frame(id,title,body,caption){
    return '<figure class="visualization-frame story-illustration"><svg class="visual-scene story-scene" viewBox="0 0 760 420" role="group" aria-labelledby="'+id+'-title '+id+'-desc" xmlns="http://www.w3.org/2000/svg"><title id="'+id+'-title">'+esc(title)+'</title><desc id="'+id+'-desc">'+esc(caption)+'</desc><defs><linearGradient id="'+id+'-field" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#51897e" stop-opacity=".2"/><stop offset="1" stop-color="#c6f276" stop-opacity=".75"/></linearGradient><linearGradient id="'+id+'-sky" x1="0" y1="1" x2="1" y2="0"><stop stop-color="#233d51"/><stop offset="1" stop-color="#ffd9a1"/></linearGradient><linearGradient id="'+id+'-light"><stop stop-color="#ffdc94" stop-opacity=".15"/><stop offset="1" stop-color="#fff2c5" stop-opacity=".9"/></linearGradient></defs><rect width="760" height="420" rx="16" fill="#112631"/><g font-family="system-ui,sans-serif">'+body+'</g></svg><figcaption class="visual-caption">'+esc(caption)+'</figcaption></figure>';
  }
  function patio(p,r,id,linked,options){
    const side=r.intermediate, pixels=PATIO_PIXELS_PER_METRE*side, x=154, bottom=294, top=bottom-pixels;
    let body=text(30,30,'A SMALL PATIO, BUILT FROM TWO LENGTHS',colors.mint,12)+text(30,58,'side = 2x + 1 metres',colors.ink,20);
    body+='<rect x="130" y="92" width="294" height="210" rx="10" fill="#244737" fill-opacity=".28"/>';
    for(let i=0;i<8;i++)body+=line(140+i*39,98,140+i*39,297,'#4d7460','stroke-opacity=".15"');
    body+='<rect data-story-part="output" data-role="patio-square" data-quantity="output area" data-side="'+side+'" data-area="'+r.output+'" x="'+x+'" y="'+n(top)+'" width="'+n(pixels)+'" height="'+n(pixels)+'" fill="url(#'+id+'-field)" stroke="'+(linked?colors.gold:colors.mint)+'" stroke-width="2"/>';
    for(let i=1;i<9;i++){const offset=PATIO_PIXELS_PER_METRE*i;if(offset<pixels){body+=line(x+offset,top,x+offset,bottom,'#d8efb4','stroke-opacity=".25"')+line(x,top+offset,x+pixels,top+offset,'#d8efb4','stroke-opacity=".25"');}}
    const patch=PATIO_PIXELS_PER_METRE, patchX=x+(pixels-patch)/2,patchY=top+(pixels-patch)/2;body+='<rect data-story-part="reference" data-role="herb-patch" x="'+n(patchX)+'" y="'+n(patchY)+'" width="'+n(patch)+'" height="'+n(patch)+'" fill="#315e37" stroke="#e1efb9" stroke-width="1.5"/>';
    body+=mark('intermediate',line(x,bottom+11,x+pixels,bottom+11,linked?colors.violet:colors.cyan,'stroke-width="1.5"')+text(x+pixels/2,bottom+30,f(side)+' m',linked?colors.violet:colors.cyan,13,'text-anchor="middle"'),'data-quantity="intermediate side function:g"');
    if(linked)body+=bracket(x,patchY+patch/2,patchX,'x',colors.cyan,'input','x');
    body+=text(478,125,'ONE SIDE',colors.muted,11)+text(478,158,f(side)+' m',linked?colors.violet:colors.cyan,29,'data-quantity="intermediate side" data-story-part="intermediate"')+text(478,212,'TOTAL FOOTPRINT',colors.muted,11)+text(478,250,f(r.output)+' m²',linked?colors.gold:colors.mint,32,'data-quantity="output area function:f" data-story-part="output"');
    body+=text(478,280,'Herb patch stays 1 m²',colors.muted,12);
    body+=rail('x',p.x,0,4,'DRAG x · WATCH BOTH DIMENSIONS GROW',.05,options);
    return frame(id,'A herb patch and its growing border',body,'The patch and border together have side length 2x + 1 metres. Width and height use one fixed length scale. Total footprint is '+f(r.output)+' square metres; the fixed herb patch is 1 square metre and the paved border is '+f(r.output-1)+' square metres.');
  }
  function photography(p,r,id,linked,options){
    // Map the whole declared stop range (−3..4) continuously. The separate
    // linear bar remains the quantitative exposure encoding.
    const ratio=p.argument, stops=r.output, luminosity=.13+.82*Math.max(0,Math.min(1,(stops+3)/7));
    let body=text(30,30,'LIGHT CHANGES BY RATIOS',colors.mint,12)+text(30,59,f(ratio)+'× the reference light',colors.ink,23);
    body+='<rect data-role="exposure-light" data-quantity="argument" data-value="'+ratio+'" x="80" y="87" width="390" height="196" rx="12" fill="url(#'+id+'-sky)" opacity="'+n(luminosity)+'"/><circle cx="386" cy="128" r="25" fill="#ffe5a5" opacity="'+n(luminosity)+'"/><path d="M80 257L192 150L272 230L348 175L470 273V283H80Z" fill="#375d61" opacity=".85"/><rect x="80" y="87" width="390" height="196" rx="12" fill="url(#'+id+'-light)" opacity="'+n(luminosity*.35)+'"/>';
    body+=text(510,112,'EXPOSURE CHANGE',colors.muted,11)+text(510,153,(stops>=0?'+':'−')+f(Math.abs(stops))+' stops',linked?colors.gold:colors.mint,27,'data-quantity="output stops" data-story-part="output"')+text(510,196,'2 raised to '+f(stops),linked?colors.violet:colors.ink,14,'data-story-part="intermediate"')+text(510,219,'= '+f(ratio)+'× light',colors.cyan,18,'data-story-part="input"');
    body+=text(80,308,'LIGHT RATIO · linear bar',colors.muted,10)+line(289,303,680,303,colors.grid,'stroke-width="7"')+line(289,303,289+391*Math.min(ratio/16,1),303,linked?colors.cyan:colors.orange,'stroke-width="7" data-story-part="input" data-role="light-ratio" data-quantity="argument" data-value="'+ratio+'"');
    if(linked)body+=mark('reference',line(289+391/16,291,289+391/16,314,colors.ink,'stroke-width="1.5"')+text(289+391/16,328,'1× reference',colors.muted,10,'text-anchor="middle"'))+mark('input',line(289+391*Math.min(ratio/16,1),292,289+391*Math.min(ratio/16,1),314,colors.cyan,'stroke-width="2"'))+mark('output',line(510,163,692,163,colors.gold,'stroke-width="2"'));
    body+=rail('argument',ratio,0.125,16,'DRAG THE LIGHT RATIO · FIND THE NUMBER OF STOPS',.1,options);
    return frame(id,'Photography exposure stops',body,'One exposure stop doubles or halves the light. log base 2 of '+f(ratio)+' is '+f(stops)+' stops. Bar length encodes the actual ratio; picture brightness is a qualitative illustration.');
  }
  function motion(p,r,id,linked,options){
    const max=Math.max(30,Math.pow(3+Math.abs(p.h),3)), px=value=>90+Math.max(0,Math.min(1,value/max))*570, position=r.fa, next=r.fah, cx=px(position), ghost=px(next);
    let body=text(30,30,'FOLLOW THE CART · THEN ASK HOW FAST',colors.mint,12)+text(30,59,'position = t³ metres',colors.ink,22);
    body+='<g data-story-part="reference"><path d="M75 249H686L731 290H30Z" fill="#334951" fill-opacity=".5"/><path d="M76 267H685" stroke="#7e9699" stroke-width="2" stroke-dasharray="10 13"/></g>';
    for(let i=0;i<=6;i++){const x=90+570*i/6;body+=line(x,281,x,287,colors.muted)+text(x,306,f(max*i/6)+' m',colors.muted,11,'text-anchor="middle"');}
    body+='<g data-story-part="intermediate" data-quantity="fah" transform="translate('+n(ghost)+' 222)" opacity=".3"><rect x="-25" y="-22" width="50" height="25" rx="5" fill="none" stroke="'+colors.orange+'" stroke-dasharray="3 3"/><circle cx="-15" cy="8" r="7" fill="none" stroke="'+colors.orange+'"/><circle cx="15" cy="8" r="7" fill="none" stroke="'+colors.orange+'"/></g>';
    body+='<g data-story-part="intermediate" data-role="motion-cart" data-quantity="fa position" data-position="'+position+'" transform="translate('+n(cx)+' 222)"><ellipse cx="0" cy="15" rx="34" ry="8" fill="#05131d" opacity=".6"/><rect x="-27" y="-22" width="54" height="25" rx="5" fill="url(#'+id+'-field)" stroke="'+colors.mint+'" stroke-width="2"/>'+[-16,16].map(x=>'<circle cx="'+x+'" cy="9" r="8" fill="#132a35" stroke="'+colors.cyan+'" stroke-width="2"/><path d="M'+(x-4)+' 9H'+(x+4)+'" stroke="'+colors.cyan+'" transform="rotate('+n(position*40)+' '+x+' 9)"/>').join('')+'</g>';
    body+=text(90,110,'AT t = '+f(p.a)+' s',colors.cyan,12,'data-story-part="input"')+text(90,143,'Distance '+f(position)+' m',linked?colors.violet:colors.cyan,23,'data-quantity="fa position" data-story-part="intermediate"')+text(430,110,'INSTANTANEOUS SPEED',colors.muted,11)+text(430,145,f(r.analytic)+' m/s',linked?colors.gold:colors.mint,29,'data-quantity="analytic speed" data-story-part="output"')+text(430,180,'3 × '+f(p.a)+'² = '+f(r.analytic),colors.ink,15);
    if(linked){
      const arrowEnd=cx+r.analytic/27*84;
      body+=bracket(90,326,cx,'position',colors.violet,'intermediate','fa position')+mark('intermediate',line(cx,248,ghost,248,colors.violet,'stroke-width="2" data-role="interval-distance" data-quantity="rise" data-value="'+(next-position)+'"')+line(cx,244,cx,252,colors.violet)+line(ghost,244,ghost,252,colors.violet))+mark('output',line(cx,190,arrowEnd,190,colors.gold,'stroke-width="3" data-role="speed-arrow" data-quantity="analytic speed" data-value="'+r.analytic+'"')+'<path d="M'+n(arrowEnd-6)+' 186L'+n(arrowEnd)+' 190L'+n(arrowEnd-6)+' 194" fill="none" stroke="'+colors.gold+'" stroke-width="2" opacity="'+(r.analytic>0?1:0)+'"/>'+text(cx,178,'speed v',colors.gold,11));
    }
    body+=rail('a',p.a,0,3,'DRAG TIME t · SEE THE CART SPEED UP',.05,options);
    return frame(id,'A cart with cubic position over time',body,'In this constructed motion model the cart is '+f(position)+' metres from its starting point at '+f(p.a)+' seconds. The analytic speed is '+f(r.analytic)+' metres per second. The faint cart shows the position at t + h.');
  }
  function render(slug,p,options={}){
    const id='story-'+String(options.id||slug).replace(/[^A-Za-z0-9_-]/g,'-'), r=M.evaluate(slug,p);
    if(D.has(slug))return D.render(slug,p,{...options,id,view:options.view||'geometry'});
    if(r.status==='invalid_parameters'||(!Number.isFinite(r.output)&&!(slug==='derivative'&&Number.isFinite(r.fa)&&Number.isFinite(r.analytic))))return frame(id,'This story needs valid inputs',text(65,175,r.message||'Choose inputs inside the supported range.',colors.orange,20),'The current parameters do not define a valid scene.');
    const mismatch=slug==='function-composition'&&(p.order!=='f_after_g'||p.a!==1||p.b!==0||p.c!==0||p.m!==2||p.n!==1||p.x<0||p.x>4)||slug==='real-logarithm'&&(p.base!==2||p.argument<0.125||p.argument>16)||slug==='derivative'&&(p.preset!=='cubic'||p.a<0||p.a>3);
    if(mismatch)return frame(id,'These inputs use a different setting',text(65,175,'These inputs are outside this story’s setting.',colors.orange,19),'The story scene uses the assumptions stated beside it. Explore other functions and domains in the general playground.');
    const linked=!!options.storyFocus;
    if(slug==='function-composition')return r.intermediate>=0?patio(p,r,id,linked,options):frame(id,'Negative lengths do not fit this patio',text(65,175,'A patio side must be nonnegative.',colors.orange,20),'This geometric story requires a nonnegative physical length.');
    if(slug==='real-logarithm')return photography(p,r,id,linked,options);
    return motion(p,r,id,linked,options);
  }
  return Object.freeze({render,values,primaryValue});
});
