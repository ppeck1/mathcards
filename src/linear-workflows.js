/* Three small linear-algebra workflows. Pure values and retained SVG; the host owns time. */
(function(root,factory){
  const api=factory(typeof module==='object'&&module.exports?require('./plot-view.js'):root.AtlasPlotView);
  if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasLinearWorkflows=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const number=(key,label,value,min,max,extra={})=>({key,label,value,min,max,step:.01,unit:'',...extra});
  const definitions={
    'linear-combination':{title:'Linear combinations',expression:'w = ru + sv',axis:'r',primaryLabel:'Combined horizontal component',unit:'',insight:'Scale each arrow, reverse it for a negative weight, then add the scaled arrows head to tail.',controls:[number('r','First weight r',1,-2,2),number('s','Second weight s',1,-2,2),number('ux','First arrow horizontal uₓ',2,-3,3,{group:'Reference arrows'}),number('uy','First arrow vertical uᵧ',1,-3,3,{group:'Reference arrows'}),number('vx','Second arrow horizontal vₓ',-1,-3,3,{group:'Reference arrows'}),number('vy','Second arrow vertical vᵧ',2,-3,3,{group:'Reference arrows'})]},
    basis:{title:'Coordinates in a basis',expression:'r(a,c) + s(b,d) = (x,y)',axis:'x',primaryLabel:'First basis coordinate r',unit:'',insight:'A pair with nonzero determinant gives one coordinate pair for every target. Dependent arrows span only a line or a point.',controls:[number('x','Target horizontal x',3,-3,3),number('y','Target vertical y',2,-3,3),number('a','First basis arrow horizontal a',1,-2,2,{group:'Basis columns'}),number('b','Second basis arrow horizontal b',1,-2,2,{group:'Basis columns'}),number('c','First basis arrow vertical c',0,-2,2,{group:'Basis columns'}),number('d','Second basis arrow vertical d',1,-2,2,{group:'Basis columns'})]},
    'matrix-product':{title:'Order of matrix maps',expression:'ABv = A(Bv); BAv = B(Av)',axis:'a',primaryLabel:'Final horizontal coordinate',unit:'',insight:'The rightmost matrix acts first. These two area-preserving shears usually move a point to different places when their order is exchanged.',controls:[number('a','Horizontal shear a',1,-2,2),number('b','Vertical shear b',1,-2,2),number('x','Input horizontal x',1,-2,2),number('y','Input vertical y',1,-2,2),{key:'order',label:'Order of application',value:'B_then_A',type:'select',options:[{value:'B_then_A',label:'B then A · product AB'},{value:'A_then_B',label:'A then B · product BA'}]}]}
  };
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff',orange:'#ffb08a'};
  const finite=Number.isFinite,has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug);
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=value=>finite(value)?Number(value.toFixed(6)):0;
  const f=value=>finite(value)?(Math.abs(value)>=1e5||(value!==0&&Math.abs(value)<1e-4)?value.toExponential(3).replace(/\.?0+(?=e)/,''):String(Number(value.toPrecision(5)))).replace('-','−'):'undefined';
  const scope=value=>'atlas-linear-workflow-'+Array.from(String(value??'scene')).map(c=>/^[A-Za-z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const group=(keys,role,body,extra='')=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}" ${extra}>${body}</g>`;
  function definition(slug){if(!has(slug))throw new RangeError('Unknown linear workflow: '+slug);return definitions[slug];}
  const defaults=slug=>Object.fromEntries(definition(slug).controls.map(c=>[c.key,c.value]));
  const controls=slug=>definition(slug).controls.map(({value,...c})=>({...c,...(c.options?{options:c.options.map(option=>({...option}))}:{})}));
  function specs(slug){const{controls:ignored,...meta}=definition(slug);return{...meta,rendererId:slug+'-visual-model',sweeps:controls(slug).filter(c=>c.type!=='select').map(({key,label,min,max,step})=>({key,label,min,max,step})),readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};
    if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    const rules=definition(slug).controls;
    for(const key of Object.keys(input))if(!rules.some(rule=>rule.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const rule of rules){const value=Object.hasOwn(input,rule.key)?input[rule.key]:rule.value;
      if(rule.type==='select'){if(rule.options.some(option=>option.value===value))parameters[rule.key]=value;else errors.push({field:rule.key,message:'Choose one of the listed orders.'});}
      else if(typeof value!=='number'||!finite(value))errors.push({field:rule.key,message:'Enter a finite number.'});
      else if(value<rule.min||value>rule.max)errors.push({field:rule.key,message:`Use a value from ${rule.min} to ${rule.max}.`});else parameters[rule.key]=value;
    }
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  function solveBasis(p){
    const determinant=p.a*p.d-p.b*p.c,termDX=p.d*p.x,termBY=p.b*p.y,termCX=p.c*p.x,termAY=p.a*p.y,numeratorR=termDX-termBY,numeratorS=termAY-termCX;
    const coefficientScale=Math.max(Math.abs(p.a),Math.abs(p.b),Math.abs(p.c),Math.abs(p.d)),scaledDet=coefficientScale?(p.a/coefficientScale)*(p.d/coefficientScale)-(p.b/coefficientScale)*(p.c/coefficientScale):0;
    const fullRank=determinant!==0||scaledDet!==0;
    const base={determinant,determinantStatus:'valid',termDX,termBY,termCX,termAY,numeratorR,numeratorS,output:null,r:null,s:null,reconstructedX:null,reconstructedY:null,residualNorm:null,rank:fullRank?2:coefficientScale?1:0,basisKind:fullRank?'plane':coefficientScale?'line':'zero',inverseExists:fullRank,unique:fullRank};
    if(fullRank){
      // A determinant that underflows to zero is a numeric-range failure, not a dependent basis.
      if(!determinant)return{...base,determinant:null,determinantStatus:'numeric_range',solutionStatus:'numeric_range',consistent:true};
      const r=numeratorR/determinant,s=numeratorS/determinant,reconstructedX=r*p.a+s*p.b,reconstructedY=r*p.c+s*p.d;
      if(![r,s,reconstructedX,reconstructedY].every(finite))return{...base,solutionStatus:'numeric_range',consistent:true};
      return{...base,output:r,r,s,reconstructedX,reconstructedY,residualNorm:Math.hypot(reconstructedX-p.x,reconstructedY-p.y),solutionStatus:'unique',consistent:true};
    }
    const targetScale=Math.max(Math.abs(p.x),Math.abs(p.y));let consistent=!targetScale,residualNorm=Math.hypot(p.x,p.y);
    if(coefficientScale){
      const useFirst=Math.max(Math.abs(p.a),Math.abs(p.c))>=Math.max(Math.abs(p.b),Math.abs(p.d)),ux=useFirst?p.a:p.b,uy=useFirst?p.c:p.d,scale=Math.max(Math.abs(ux),Math.abs(uy));
      consistent=!targetScale||(ux/scale)*(p.y/targetScale)-(uy/scale)*(p.x/targetScale)===0;
      const length=Math.hypot(ux,uy);residualNorm=Math.abs((ux/length)*p.y-(uy/length)*p.x);
    }
    return{...base,residualNorm,consistent,solutionStatus:consistent?'infinite_solutions':'no_solution'};
  }
  function shears(p,order){
    if(order==='B_then_A'){const intermediateX=p.x,intermediateY=p.b*p.x+p.y;return{intermediateX,intermediateY,finalX:intermediateX+p.a*intermediateY,finalY:intermediateY,productA:1+p.a*p.b,productB:p.a,productC:p.b,productD:1};}
    const intermediateX=p.x+p.a*p.y,intermediateY=p.y;return{intermediateX,intermediateY,finalX:intermediateX,finalY:p.b*intermediateX+intermediateY,productA:1,productB:p.a,productC:p.b,productD:1+p.a*p.b};
  }
  function evaluate(slug,input){
    const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};
    const p=checked.parameters;let values;
    if(slug==='linear-combination'){
      const firstX=p.r*p.ux,firstY=p.r*p.uy,secondX=p.s*p.vx,secondY=p.s*p.vy,combinedX=firstX+secondX,combinedY=firstY+secondY;
      values={output:combinedX,combinedX,combinedY,firstX,firstY,secondX,secondY,norm:Math.hypot(combinedX,combinedY),determinant:p.ux*p.vy-p.uy*p.vx};
    }else if(slug==='basis')values=solveBasis(p);
    else{const selected=shears(p,p.order),other=shears(p,p.order==='B_then_A'?'A_then_B':'B_then_A');values={...selected,output:selected.finalX,determinant:1,productLabel:p.order==='B_then_A'?'AB':'BA',otherFinalX:other.finalX,otherFinalY:other.finalY,differenceX:selected.finalX-other.finalX,differenceY:selected.finalY-other.finalY};}
    return{...checked,...values,status:'valid',unit:''};
  }
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const checked=validateParams(slug,input);if(!checked.valid)return null;const r=evaluate(slug,{...checked.parameters,[definition(slug).axis]:value});return r.valid&&finite(r.output)?r.output:null;}
  const basisMessage=r=>r.solutionStatus==='unique'?(r.residualNorm>1e-8*(1+Math.hypot(r.parameters.x,r.parameters.y))?'A nearly dependent basis loses precision here. The computed reconstruction residual is '+f(r.residualNorm)+'.':'One coordinate pair reconstructs this target.'):r.solutionStatus==='infinite_solutions'?'Infinitely many coefficient pairs reach this target; no unique coordinates.':r.solutionStatus==='no_solution'?'This target lies outside the span; no coefficient pair reaches it.':'The basis is independent, but its coordinates exceed reliable numeric range.';
  function readout(slug,p,r,{format:fmt=f}={}){
    if(!r.valid)return{expression:definition(slug).expression,stats:[],insight:r.errors.map(error=>error.message).join(' ')};
    if(slug==='linear-combination')return{expression:`${fmt(p.r)}(${fmt(p.ux)},${fmt(p.uy)}) + ${fmt(p.s)}(${fmt(p.vx)},${fmt(p.vy)}) = (${fmt(r.combinedX)},${fmt(r.combinedY)})`,stats:[{label:'FIRST SCALED ARROW',value:p.r,note:'weight r; negative reverses u'},{label:'COMBINED x',value:r.combinedX,note:'signed horizontal component'},{label:'COMBINED y',value:r.combinedY,note:'signed vertical component'}],insight:definition(slug).insight};
    if(slug==='basis')return{expression:r.solutionStatus==='unique'?`r = ${fmt(r.numeratorR)} / ${fmt(r.determinant)} = ${fmt(r.r)}; s = ${fmt(r.numeratorS)} / ${fmt(r.determinant)} = ${fmt(r.s)}`:basisMessage(r),stats:[{label:'DETERMINANT',value:r.determinant,note:r.rank===2?'independent columns':'dependent columns; no inverse'},{label:'FIRST COORDINATE r',value:r.r,note:r.solutionStatus==='unique'?'weight of the first basis arrow':'no unique finite coordinate displayed'},{label:'SECOND COORDINATE s',value:r.s,note:r.solutionStatus==='unique'?'weight of the second basis arrow':'no unique finite coordinate displayed'}],insight:basisMessage(r)};
    return{expression:`${r.productLabel}(${fmt(p.x)},${fmt(p.y)}) = (${fmt(r.finalX)},${fmt(r.finalY)})`,stats:[{label:'INTERMEDIATE x',value:r.intermediateX,note:p.order==='B_then_A'?'after vertical shear B':'after horizontal shear A'},{label:'FINAL x',value:r.finalX,note:'after the second map'},{label:'FINAL y',value:r.finalY,note:'both shears preserve signed area'}],insight:definition(slug).insight};
  }
  function frame(slug,body,options,description){const id=scope(options.id||slug);return`<figure class="visualization-frame linear-workflow-scene" data-linear-workflow="${slug}"><svg class="visual-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><defs><linearGradient id="${id}-area" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".08"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".32"/></linearGradient><clipPath id="${id}-clip"><rect x="95" y="62" width="290" height="280"/></clipPath></defs><rect width="760" height="420" rx="18" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${text(28,32,definition(slug).title,C.ink,options.compact?27:23)}${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function controlFor(slug,key,options){const original=controls(slug).find(c=>c.key===key),c={...original},requested=options.controlBounds?.[key];if(requested){const min=finite(requested.min)?Math.max(c.min,requested.min):c.min,max=finite(requested.max)?Math.min(c.max,requested.max):c.max;if(max>min){c.min=min;c.max=max;if(finite(requested.step)&&requested.step>0)c.step=Math.min(requested.step,max-min);}}return c;}
  function rail(slug,p,options){const key=definition(slug).axis,c=controlFor(slug,key,options),x=105+(Math.max(c.min,Math.min(c.max,p[key]))-c.min)/(c.max-c.min)*550;return group(key,'input',`<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="${key}" data-drag-min="${c.min}" data-drag-max="${c.max}" data-drag-x0="105" data-drag-x1="655" data-drag-step="${c.step}" aria-label="${esc(c.label)}. Drag horizontally or use arrow keys." aria-valuemin="${c.min}" aria-valuemax="${c.max}" aria-valuenow="${p[key]}" aria-orientation="horizontal">${line(105,373,655,373,C.grid,'stroke-width="5" stroke-linecap="round"')}<circle cx="${n(x)}" cy="373" r="24" fill="transparent"/><circle class="scene-handle-ring" cx="${n(x)}" cy="373" r="12" fill="${C.cyan}" fill-opacity=".15" stroke="${C.cyan}"/><circle cx="${n(x)}" cy="373" r="5" fill="${C.cyan}"/></g>${text(105,400,f(c.min),C.muted,13)}${text(655,400,f(c.max),C.muted,13,'text-anchor="end"')}${text(380,400,c.label+' = '+f(p[key]),C.cyan,options.compact?22:16,'text-anchor="middle"')}`);}
  function chart(bound){const scale=130/bound,px=x=>240+x*scale,py=y=>202-y*scale;let grid='';for(let i=-2;i<=2;i++){const v=bound*i/2;grid+=line(px(-bound),py(v),px(bound),py(v),C.grid)+line(px(v),py(-bound),px(v),py(bound),C.grid);if(i)grid+=text(px(v),py(0)+18,f(v),C.muted,11,'text-anchor="middle"')+text(px(0)-8,py(v)+4,f(v),C.muted,11,'text-anchor="end"');}grid+=line(px(-bound),py(0),px(bound),py(0),C.muted)+line(px(0),py(-bound),px(0),py(bound),C.muted);return{bound,scale,px,py,grid};}
  function viewChart(slug,p,options){
    if(slug==='basis')return chart(4);
    const axis=definition(slug).axis,c=controlFor(slug,axis,options),candidates=[p,{...p,[axis]:c.min},{...p,[axis]:c.max},...[options.baseline,options.reference].filter(value=>value&&evaluate(slug,value).valid).map(value=>evaluate(slug,value).parameters)];
    const values=candidates.flatMap(q=>{const r=evaluate(slug,q);return slug==='linear-combination'?[q.ux,q.uy,q.vx,q.vy,r.firstX,r.firstY,r.secondX,r.secondY,r.combinedX,r.combinedY]:[q.x,q.y,r.intermediateX,r.intermediateY,r.finalX,r.finalY,r.otherFinalX,r.otherFinalY,r.productA,r.productB,r.productC,r.productD,r.productA+r.productB,r.productC+r.productD];});
    const extent=Math.max(2,...values.map(Math.abs));return chart([3,4,6,8,12,16,24].find(bound=>bound>=extent)||24);
  }
  function arrow(q,x,y,color,keys,role,{fromX=0,fromY=0,dashed=false,roleName='vector-tip'}={}){
    if(![x,y,fromX,fromY].every(finite))return'';
    // Clip the segment in coordinates before projection: enormous basis weights must never overflow SVG.
    const reverse=Math.max(Math.abs(fromX),Math.abs(fromY))>q.bound&&Math.max(Math.abs(x),Math.abs(y))<=q.bound;
    const startX=reverse?x:fromX,startY=reverse?y:fromY,endX=reverse?fromX:x,endY=reverse?fromY:y;
    let low=0,high=1;const dx=endX-startX,dy=endY-startY;
    for(const [start,delta]of[[startX,dx],[startY,dy]]){if(!delta){if(Math.abs(start)>q.bound)return'';continue;}const a=(-q.bound-start)/delta,b=(q.bound-start)/delta;low=Math.max(low,Math.min(a,b));high=Math.min(high,Math.max(a,b));}
    if(low>high||high<0||low>1)return'';
    const point=t=>t===0?[startX,startY]:t===1?[endX,endY]:[startX+dx*t,startY+dy*t],start=point(reverse?high:low),end=point(reverse?low:high),xx=q.px(end[0]),yy=q.py(end[1]),ox=q.px(start[0]),oy=q.py(start[1]),length=Math.hypot(xx-ox,yy-oy),size=Math.min(8,length*.3),angle=Math.atan2(yy-oy,xx-ox),bx=xx-Math.cos(angle)*size,by=yy-Math.sin(angle)*size;
    return group(keys,role,line(ox,oy,xx,yy,color,'stroke-width="3"'+(dashed?' stroke-dasharray="5 4"':''))+`<path d="M${n(bx+Math.sin(angle)*size*.5)} ${n(by-Math.cos(angle)*size*.5)}L${n(xx)} ${n(yy)}L${n(bx-Math.sin(angle)*size*.5)} ${n(by+Math.cos(angle)*size*.5)}" fill="none" stroke="${color}" stroke-width="3"/><circle data-role="${roleName}" data-x="${x}" data-y="${y}" data-clipped="${high<1||low>0}" cx="${n(xx)}" cy="${n(yy)}" r="4" fill="${color}"/>`);
  }
  const polygon=(points,q,attributes)=>`<polygon points="${points.map(([x,y])=>n(q.px(x))+','+n(q.py(y))).join(' ')}" ${attributes}/>`;
  function geometry(slug,p,r,options){
    const id=scope(options.id||slug),q=viewChart(slug,p,options),size=options.compact?22:17;let body=group('', 'reference',q.grid),description='';
    if(slug==='linear-combination'){
      body+=arrow(q,p.ux,p.uy,C.violet,'ux uy','reference',{dashed:true})+arrow(q,p.vx,p.vy,C.gold,'vx vy','reference',{dashed:true});
      body+=group('r s firstX firstY secondX secondY','intermediate',polygon([[0,0],[r.firstX,r.firstY],[r.combinedX,r.combinedY],[r.secondX,r.secondY]],q,`fill="url(#${id}-area)" stroke="${C.muted}" stroke-dasharray="4 4" data-role="sum-parallelogram"`));
      body+=arrow(q,r.firstX,r.firstY,C.violet,'r ux uy firstX firstY','input',{roleName:'first-scaled-tip'})+arrow(q,r.combinedX,r.combinedY,C.gold,'s vx vy secondX secondY','intermediate',{fromX:r.firstX,fromY:r.firstY,roleName:'second-scaled-tip'})+arrow(q,r.combinedX,r.combinedY,C.mint,'combinedX combinedY output norm','output',{roleName:'combined-tip'});
      body+=text(445,84,'SCALE EACH ARROW',C.muted,13)+text(445,119,'ru = ('+f(r.firstX)+', '+f(r.firstY)+')',C.violet,size,'data-quantity="r ux uy firstX firstY" data-story-part="input"')+text(445,153,'sv = ('+f(r.secondX)+', '+f(r.secondY)+')',C.gold,size,'data-quantity="s vx vy secondX secondY" data-story-part="intermediate"')+text(445,202,'ADD HEAD TO TAIL',C.muted,13)+text(445,245,'('+f(r.combinedX)+', '+f(r.combinedY)+')',C.mint,30,'data-quantity="output combinedX combinedY" data-story-part="output"')+text(445,285,'Length '+f(r.norm),C.muted,size,'data-quantity="norm" data-story-part="output"')+text(445,321,'Negative weights reverse direction.',C.muted,13);
      description='Dashed arrows show the original u and v. Violet ru starts at the origin; gold sv starts at its tip. Their mint sum and shaded parallelogram share a coordinate scale fixed across the r sweep. Changing other settings or pins can rescale the frame.';
    }else if(slug==='basis'){
      body+=arrow(q,p.a,p.c,C.violet,'a c','reference')+arrow(q,p.b,p.d,C.gold,'b d','reference');
      if(r.rank===1){const useFirst=Math.max(Math.abs(p.a),Math.abs(p.c))>=Math.max(Math.abs(p.b),Math.abs(p.d)),ux=useFirst?p.a:p.b,uy=useFirst?p.c:p.d,scale=Math.max(Math.abs(ux),Math.abs(uy)),xx=ux/scale*q.bound,yy=uy/scale*q.bound;body+=group('a b c d','reference',line(q.px(-xx),q.py(-yy),q.px(xx),q.py(yy),C.violet,'stroke-width="11" stroke-opacity=".14" data-role="span-line"'));}
      let clipped=false;
      if(r.solutionStatus==='unique'){
        const firstX=r.r*p.a,firstY=r.r*p.c;clipped=Math.max(Math.abs(firstX),Math.abs(firstY))>q.bound;
        body+=arrow(q,firstX,firstY,C.violet,'r','intermediate',{dashed:true,roleName:'basis-first-tip'})+arrow(q,p.x,p.y,C.gold,'s','intermediate',{fromX:firstX,fromY:firstY,dashed:true,roleName:'basis-second-tip'});
      }
      body+=arrow(q,p.x,p.y,C.cyan,'x y reconstructedX reconstructedY','input',{roleName:'target-tip'});
      body+=text(445,85,'BASIS COLUMNS',C.muted,13)+text(445,115,'('+f(p.a)+', '+f(p.c)+')   ('+f(p.b)+', '+f(p.d)+')',C.violet,size,'data-quantity="a b c d" data-story-part="reference"')+text(445,155,'det(B) = '+f(r.determinant),C.muted,size,'data-quantity="determinant" data-story-part="reference"');
      if(r.solutionStatus==='unique')body+=text(445,190,'r = ('+f(r.termDX)+' − '+f(r.termBY)+') / '+f(r.determinant),C.gold,15,'data-quantity="termDX termBY numeratorR determinant" data-story-part="intermediate"')+text(445,228,'r = '+f(r.r),C.mint,26,'data-quantity="r output" data-story-part="output"')+text(445,261,'s = '+f(r.s),C.mint,26,'data-quantity="s" data-story-part="output"')+text(445,296,'s = ('+f(r.termAY)+' − '+f(r.termCX)+') / '+f(r.determinant),C.gold,15,'data-quantity="termAY termCX numeratorS determinant" data-story-part="intermediate"')+text(445,328,clipped?'Clipped arrows · residual '+f(r.residualNorm):'The two weighted arrows reach the target.',clipped?C.orange:C.muted,13);
      else body+=text(445,207,r.solutionStatus==='infinite_solutions'?'Infinitely many pairs':r.solutionStatus==='no_solution'?'No solution':'Numeric range exceeded',C.orange,23,'data-quantity="r s output" data-story-part="output"')+text(445,245,r.rank===1?'The arrows span one line.':r.rank===0?'Both arrows are zero.':'The columns are independent.',C.muted,size)+text(445,285,'No unique coordinate pair is drawn.',C.muted,14);
      description='Violet and gold are the two proposed basis columns; cyan is the target. Unique weights are drawn head to tail on a fixed ±4 frame. Very long weighted arrows are clipped and explicitly labeled; printed coordinates retain their actual values. Dependent columns give either infinitely many solutions or none, never a fabricated inverse.';
    }else{
      const productKey='product:'+r.productLabel,otherProductKey='product:'+(r.productLabel==='AB'?'BA':'AB');
      const corners=[[0,0],[r.productA,r.productC],[r.productA+r.productB,r.productC+r.productD],[r.productB,r.productD]];
      body+=group('productA productB productC productD determinant '+productKey,'reference',polygon([[0,0],[1,0],[1,1],[0,1]],q,`fill="none" stroke="${C.muted}" stroke-dasharray="4 4"`)+polygon(corners,q,`fill="url(#${id}-area)" stroke="${C.mint}" stroke-opacity=".45" data-role="product-unit-square" data-area="1"`));
      body+=arrow(q,r.otherFinalX,r.otherFinalY,C.violet,'otherFinalX otherFinalY differenceX differenceY '+otherProductKey,'reference',{dashed:true,roleName:'other-order-tip'})+arrow(q,p.x,p.y,C.cyan,'x y','reference',{dashed:true,roleName:'input-tip'})+arrow(q,r.intermediateX,r.intermediateY,C.gold,'a b order intermediateX intermediateY','intermediate',{roleName:'intermediate-tip'})+arrow(q,r.finalX,r.finalY,C.mint,'order finalX finalY output '+productKey,'output',{roleName:'final-tip'});
      body+=group('a b order','input',line(q.px(p.x),q.py(p.y),q.px(r.intermediateX),q.py(r.intermediateY),C.gold,'stroke-dasharray="3 4"')+line(q.px(r.intermediateX),q.py(r.intermediateY),q.px(r.finalX),q.py(r.finalY),C.mint,'stroke-dasharray="3 4"'));
      body+=text(445,83,p.order==='B_then_A'?'B THEN A  →  AB':'A THEN B  →  BA',C.cyan,size,'data-quantity="order a b" data-story-part="input"')+text(445,121,'First: ('+f(r.intermediateX)+', '+f(r.intermediateY)+')',C.gold,size,'data-quantity="intermediateX intermediateY" data-story-part="intermediate"')+text(445,163,'Then: ('+f(r.finalX)+', '+f(r.finalY)+')',C.mint,25,'data-quantity="output finalX finalY '+productKey+'" data-story-part="output"')+text(445,205,r.productLabel+' = [ '+f(r.productA)+'   '+f(r.productB)+' ]',C.muted,size,'data-quantity="productA productB '+productKey+'" data-story-part="intermediate"')+text(505,235,'[ '+f(r.productC)+'   '+f(r.productD)+' ]',C.muted,size,'data-quantity="productC productD '+productKey+'" data-story-part="intermediate"')+text(445,279,'Other order: ('+f(r.otherFinalX)+', '+f(r.otherFinalY)+')',C.violet,15,'data-quantity="otherFinalX otherFinalY '+otherProductKey+'" data-story-part="reference"')+text(445,318,'Both keep signed area factor 1.',C.muted,14,'data-quantity="determinant" data-story-part="reference"');
      description='Cyan is the input; gold follows the first shear and mint the second. Dashed violet shows the same point in the other order. The tinted unit parallelogram follows the selected product. AB means B acts first, and BA means A acts first; both have determinant one. The frame scale stays fixed across the a sweep.';
    }
    if(options.baseline&&evaluate(slug,options.baseline).valid){const b=evaluate(slug,options.baseline),bp=b.parameters;body+=slug==='linear-combination'?arrow(q,b.combinedX,b.combinedY,C.muted,'combinedX combinedY output','output',{dashed:true,roleName:'baseline-tip'}):slug==='matrix-product'?arrow(q,b.finalX,b.finalY,C.muted,'finalX finalY output','output',{dashed:true,roleName:'baseline-tip'}):arrow(q,bp.x,bp.y,C.muted,'x y','reference',{dashed:true,roleName:'baseline-tip'});}
    return frame(slug,body+rail(slug,p,options),options,description);
  }
  function graph(slug,p,r,options){
    const meta=definition(slug),control=controlFor(slug,meta.axis,options),sample=parameters=>Array.from({length:129},(_,i)=>{const x=control.min+(control.max-control.min)*i/128;return{x,y:curveValue(slug,parameters,x)};});
    const current=sample(p),baseline=options.baseline&&evaluate(slug,options.baseline).valid?sample(evaluate(slug,options.baseline).parameters):[],otherOrder=slug==='matrix-product'?sample({...p,order:p.order==='B_then_A'?'A_then_B':'B_then_A'}):[],finiteValues=[0,...current.map(point=>point.y),...baseline.map(point=>point.y),...otherOrder.map(point=>point.y)].filter(finite),extent=Math.max(1,...finiteValues.map(Math.abs)),cap=1e6,bound=Math.min(extent*1.1,cap),limited=extent>cap;
    const notes=slug==='linear-combination'?'The graph tracks the sum’s horizontal component as r changes. The second weight and both original arrows stay fixed.':slug==='basis'?'The horizontal axis varies target x, with both basis columns and target y fixed. Only unique coordinates are plotted; dependent columns produce gaps, including any isolated target with infinitely many solutions.':'The graph varies horizontal shear a while b, the input and the selected order stay fixed. Each curve uses one exact order; the other order is shown as a separate violet curve.';
    const display=points=>points.map(point=>({...point,y:finite(point.y)&&Math.abs(point.y)<=cap?point.y:null}));
    const series=[{id:slug+'-curve',label:meta.primaryLabel,quantity:meta.axis+' output',color:C.mint,points:display(current)},...(baseline.length?[{id:'baseline',label:'Pinned relationship',quantity:'output',color:C.muted,points:display(baseline),dashed:true}]:[])];
    if(slug==='matrix-product')series.push({id:'other-order',label:'Other order · final x',quantity:'otherFinalX',color:C.violet,points:display(otherOrder),dashed:true});
    const descriptions=[notes,...(slug==='basis'&&r.solutionStatus!=='unique'?[basisMessage(r)]:[]),...(limited?['Values beyond ±1,000,000 are omitted from this graph; read the actual coefficient in the readout.']:[])];
    let markup=Plot.render({title:meta.primaryLabel+' vs '+(slug==='basis'?'target x':meta.axis),description:descriptions.join(' '),x:{...control,value:p[meta.axis]},y:{label:meta.primaryLabel,min:-bound,max:bound},series,current:finite(r.output)&&Math.abs(r.output)<=cap?[{label:meta.primaryLabel,x:p[meta.axis],y:r.output,quantity:meta.axis+' output',draggable:true,color:C.cyan}]:[]},options);
    if(slug==='basis'&&(!finite(r.output)||Math.abs(r.output)>cap)){
      const x=82+(p.x-control.min)/(control.max-control.min)*636;
      const handle=group('x','input',`<g class="scene-handle" data-role="input-axis-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="x" data-drag-min="${control.min}" data-drag-max="${control.max}" data-drag-x0="82" data-drag-x1="718" data-drag-step="${control.step}" aria-label="Target horizontal x. This handle marks only the input; no coefficient point is plotted." aria-valuemin="${control.min}" aria-valuemax="${control.max}" aria-valuenow="${p.x}" aria-orientation="horizontal"><circle cx="${n(x)}" cy="326" r="22" fill="transparent"/><circle class="scene-handle-ring" cx="${n(x)}" cy="326" r="12" fill="${C.cyan}" fill-opacity=".15" stroke="${C.cyan}"/><circle cx="${n(x)}" cy="326" r="5" fill="${C.cyan}"/></g>`);
      markup=markup.replace('</svg>',text(400,205,r.solutionStatus==='no_solution'?'Target outside the span':r.solutionStatus==='infinite_solutions'?'No unique coordinate':!finite(r.output)?'Coordinate exceeds numeric range':'Coordinate outside the graph window',C.orange,22,'text-anchor="middle"')+handle+'</svg>').replace('Read across from the input to the result','Drag target x along the axis · no coordinate point is plotted');
    }
    return markup;
  }
  function render(slug,input,options={}){if(!has(slug))return'';const r=evaluate(slug,input);if(!r.valid)return frame(slug,text(55,170,'Choose supported finite inputs',C.gold,25)+text(55,215,r.errors.map(error=>error.message).join(' '),C.ink,16),options,r.errors.map(error=>error.message).join(' '));return options.view==='graph'?graph(slug,r.parameters,r,options):geometry(slug,r.parameters,r,options);}
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
