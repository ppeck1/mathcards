/* Four real two-dimensional linear algebra families. The host owns time and input. */
(function(root,factory){
  const api=factory(typeof module==='object'&&module.exports?require('./plot-view.js'):root.AtlasPlotView);
  if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasLinearAlgebra=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const numeric=(key,label,value,min,max,extra={})=>({key,label,value,min,max,step:.01,...extra});
  const definitions={
    vector:{title:'Vectors: components and length',expression:'‖v‖ = √(x² + y²)',unit:'',axis:'x',primaryLabel:'Vector length',controls:[numeric('x','Horizontal component x',3,-5,5),numeric('y','Vertical component y',4,-5,5)],insight:'The two signed components locate the arrow tip; its nonnegative length uses both components.'},
    'inner-product':{title:'Dot product and projection',expression:'u · v = uₓvₓ + uᵧvᵧ',unit:'',axis:'vx',primaryLabel:'Dot product',controls:[numeric('vx','v horizontal component',2,-4,4),numeric('vy','v vertical component',2,-4,4),numeric('ux','u horizontal component',3,-4,4),numeric('uy','u vertical component',0,-4,4)],insight:'The signed dot product measures aligned contributions. Projection onto a zero direction is undefined even though its dot product is zero.'},
    'matrix-linear-map':{title:'Matrices as linear maps',expression:'(x′, y′) = (ax + by, cx + dy)',unit:'',axis:'b',primaryLabel:'Mapped horizontal component',controls:[numeric('x','Input horizontal x',1,-3,3),numeric('y','Input vertical y',1,-3,3),...['a','b','c','d'].map((key,i)=>numeric(key,['a · first column x','b · second column x','c · first column y','d · second column y'][i],[1,1,0,1][i],-2,2,{group:'Matrix coefficients'}))],insight:'Each matrix column is the image of one basis arrow. The same map moves the grid, unit square and input arrow.'},
    determinant:{title:'Determinants: signed area',expression:'det(A) = ad − bc',unit:'',axis:'d',primaryLabel:'Signed area factor',controls:['d','a','b','c'].map((key,i)=>numeric(key,['d · second column y','a · first column x','b · second column x','c · first column y'][i],[2,1,0,0][i],-3,3)),insight:'Magnitude gives the unit-square area factor. The sign distinguishes preserved from reversed orientation; zero means the plane is collapsed.'}
  };
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff',orange:'#ffb08a'};
  const finite=Number.isFinite;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=v=>finite(v)?Number(v.toFixed(6)):0;
  const f=v=>finite(v)?String(Number(v.toPrecision(5))).replace('-','−'):'undefined';
  const namespace=value=>'atlas-linear-'+Array.from(String(value??'scene')).map(c=>/^[A-Za-z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const group=(keys,role,body,extra='')=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}" ${extra}>${body}</g>`;
  const has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug);
  function spec(slug){if(!has(slug))throw new RangeError('Unknown linear algebra model: '+slug);return definitions[slug];}
  const defaults=slug=>Object.fromEntries(spec(slug).controls.map(c=>[c.key,c.value]));
  const controls=slug=>spec(slug).controls.map(({value,...control})=>({...control}));
  function specs(slug){const{controls:ignored,...meta}=spec(slug);return{...meta,rendererId:slug+'-visual-model',sweeps:controls(slug).map(({key,label,min,max,step})=>({key,label,min,max,step})),readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};
    if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    const rules=spec(slug).controls;
    for(const key of Object.keys(input))if(!rules.some(rule=>rule.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const rule of rules){const value=Object.hasOwn(input,rule.key)?input[rule.key]:rule.value;if(typeof value!=='number'||!finite(value))errors.push({field:rule.key,message:'Enter a finite number.'});else if(value<rule.min||value>rule.max)errors.push({field:rule.key,message:`Use a value from ${rule.min} to ${rule.max}.`});else parameters[rule.key]=value;}
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  function evaluate(slug,input){
    const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};
    const p=checked.parameters;let values;
    if(slug==='vector'){
      const norm=Math.hypot(p.x,p.y);values={output:norm,norm,xSquared:p.x*p.x,ySquared:p.y*p.y,angleDegrees:norm?Math.atan2(p.y,p.x)*180/Math.PI:null};
    }else if(slug==='inner-product'){
      const dot=p.ux*p.vx+p.uy*p.vy,uNorm=Math.hypot(p.ux,p.uy),vNorm=Math.hypot(p.vx,p.vy),ex=uNorm?p.ux/uNorm:null,ey=uNorm?p.uy/uNorm:null;
      const projection=uNorm?ex*p.vx+ey*p.vy:null,rawFactor=uNorm?projection/uNorm:null,projectionFactor=finite(rawFactor)?rawFactor:null;
      const cosine=uNorm&&vNorm?Math.max(-1,Math.min(1,ex*(p.vx/vNorm)+ey*(p.vy/vNorm))):null;
      values={output:dot,dot,uNorm,vNorm,xProduct:p.ux*p.vx,yProduct:p.uy*p.vy,projection,projectionFactor,projectionX:uNorm?projection*ex:null,projectionY:uNorm?projection*ey:null,cosine,angleDegrees:cosine===null?null:Math.acos(cosine)*180/Math.PI,projectionStatus:uNorm?'valid':'undefined_direction',projectionFactorStatus:uNorm?(finite(rawFactor)?'valid':'numeric_range'):'undefined_direction',angleStatus:uNorm&&vNorm?'valid':'undefined_direction'};
    }else{
      const determinant=p.a*p.d-p.b*p.c,orientation=Math.sign(determinant),area=Math.abs(determinant);
      values={output:determinant,determinant,signedArea:determinant,area,orientation,inverseExists:determinant!==0,termAD:p.a*p.d,termBC:p.b*p.c};
      if(slug==='matrix-linear-map'){const mappedX=p.a*p.x+p.b*p.y,mappedY=p.c*p.x+p.d*p.y;Object.assign(values,{output:mappedX,mappedX,mappedY,xTerm:p.a*p.x,yTerm:p.b*p.y,inputNorm:Math.hypot(p.x,p.y),mappedNorm:Math.hypot(mappedX,mappedY)});}
    }
    return{...checked,...values,status:'valid',unit:spec(slug).unit};
  }
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const checked=validateParams(slug,input);if(!checked.valid)return null;const r=evaluate(slug,{...checked.parameters,[spec(slug).axis]:value});return r.valid&&finite(r.output)?r.output:null;}
  function readout(slug,p,r,{format:fmt=f,view}={}){
    if(!r.valid)return{expression:spec(slug).expression,stats:[],insight:r.errors.map(error=>error.message).join(' ')};
    if(slug==='vector')return{expression:`‖(${fmt(p.x)}, ${fmt(p.y)})‖ = √(${fmt(r.xSquared)} + ${fmt(r.ySquared)}) = ${fmt(r.norm)}`,stats:[{label:'HORIZONTAL',value:p.x,note:'signed x component'},{label:'VERTICAL',value:p.y,note:'signed y component'},{label:'LENGTH',value:r.norm,note:'nonnegative Euclidean length'}],insight:r.norm===0?'The zero vector has length zero. It has no direction angle.':spec(slug).insight};
    if(slug==='inner-product')return{expression:`u · v = ${fmt(p.ux)} × ${fmt(p.vx)} + ${fmt(p.uy)} × ${fmt(p.vy)} = ${fmt(r.dot)}`,stats:[{label:'DOT PRODUCT',value:r.dot,note:'signed sum of component products'},{label:'PROJECTION ONTO u',value:r.projection,note:r.uNorm?'signed length along u':'undefined: u has no direction'},{label:'ANGLE',value:r.angleDegrees,note:r.angleDegrees===null?'undefined for a zero vector':'degrees between the two vectors'}],insight:r.uNorm?spec(slug).insight:'The dot product is zero, but projection onto u and the angle are undefined because u is the zero vector.'};
    if(slug==='matrix-linear-map')return{expression:`(${fmt(p.a)}×${fmt(p.x)} + ${fmt(p.b)}×${fmt(p.y)}, ${fmt(p.c)}×${fmt(p.x)} + ${fmt(p.d)}×${fmt(p.y)}) = (${fmt(r.mappedX)}, ${fmt(r.mappedY)})`,stats:[{label:'MAPPED x′',value:r.mappedX,note:'first row dotted with the input'},{label:'MAPPED y′',value:r.mappedY,note:'second row dotted with the input'},{label:'DETERMINANT',value:r.determinant,note:r.inverseExists?'nonzero: the map is invertible':'zero: the plane collapses'}],insight:spec(slug).insight};
    return{expression:`det(A) = ${fmt(p.a)}×${fmt(p.d)} − ${fmt(p.b)}×${fmt(p.c)} = ${fmt(r.determinant)}`,stats:[{label:'SIGNED FACTOR',value:r.determinant,note:r.orientation>0?'orientation preserved':r.orientation<0?'orientation reversed':'collapsed to a line or point'},{label:'AREA MAGNITUDE',value:r.area,note:'area of the mapped unit square'},{label:'ORIENTATION',value:r.orientation,note:r.orientation>0?'preserved':r.orientation<0?'reversed':'collapsed'}],insight:spec(slug).insight};
  }
  function frame(slug,body,options,description){const id=namespace(options.id||slug);return`<figure class="visualization-frame linear-algebra-scene" data-linear-model="${slug}"><svg class="visual-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(spec(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><defs><linearGradient id="${id}-area" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".13"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".5"/></linearGradient><clipPath id="${id}-plot"><rect x="130" y="62" width="280" height="280"/></clipPath></defs><rect width="760" height="420" rx="18" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${text(28,32,spec(slug).title,C.ink,options.compact?26:22)}${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function rail(slug,key,p,options){
    const original=spec(slug).controls.find(c=>c.key===key),control={...original},requested=options.controlBounds?.[key];
    if(requested&&typeof requested==='object'){const min=finite(requested.min)?Math.max(control.min,requested.min):control.min,max=finite(requested.max)?Math.min(control.max,requested.max):control.max;if(max>min){control.min=min;control.max=max;if(finite(requested.step)&&requested.step>0)control.step=Math.min(requested.step,max-min);}}
    const value=Math.max(control.min,Math.min(control.max,p[key])),x=105+(value-control.min)/(control.max-control.min)*550;
    return group(key,'input',`<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="${key}" data-drag-min="${control.min}" data-drag-max="${control.max}" data-drag-x0="105" data-drag-x1="655" data-drag-step="${control.step}" aria-label="${esc(control.label)}. Drag horizontally or use arrow keys." aria-valuemin="${control.min}" aria-valuemax="${control.max}" aria-valuenow="${p[key]}" aria-orientation="horizontal">${line(105,373,655,373,C.grid,'stroke-width="5" stroke-linecap="round"')}<circle cx="${n(x)}" cy="373" r="24" fill="transparent"/><circle class="scene-handle-ring" cx="${n(x)}" cy="373" r="12" fill="${C.cyan}" fill-opacity=".15" stroke="${C.cyan}"/><circle cx="${n(x)}" cy="373" r="5" fill="${C.cyan}"/></g>${text(105,400,f(control.min),C.muted,13)}${text(655,400,f(control.max),C.muted,13,'text-anchor="end"')}${text(380,400,control.label+' = '+f(p[key]),C.cyan,options.compact?22:16,'text-anchor="middle"')}`);
  }
  function chart(bound){const scale=130/bound,px=x=>270+x*scale,py=y=>202-y*scale;let grid='';for(let i=-2;i<=2;i++){const v=bound*i/2;grid+=line(px(-bound),py(v),px(bound),py(v),C.grid)+line(px(v),py(-bound),px(v),py(bound),C.grid);if(i)grid+=text(px(v),py(0)+18,f(v),C.muted,11,'text-anchor="middle"')+text(px(0)-8,py(v)+4,f(v),C.muted,11,'text-anchor="end"');}grid+=line(px(-bound),py(0),px(bound),py(0),C.muted)+line(px(0),py(-bound),px(0),py(bound),C.muted);return{px,py,scale,grid};}
  function arrow(chart,x,y,color,keys,role,extra=''){
    const xx=chart.px(x),yy=chart.py(y),ox=chart.px(0),oy=chart.py(0),length=Math.hypot(xx-ox,yy-oy),size=Math.min(9,length*.3),angle=Math.atan2(yy-oy,xx-ox),backX=xx-Math.cos(angle)*size,backY=yy-Math.sin(angle)*size;
    return group(keys,role,line(ox,oy,xx,yy,color,'stroke-width="3" '+extra)+`<path d="M${n(backX+Math.sin(angle)*size*.5)} ${n(backY-Math.cos(angle)*size*.5)}L${n(xx)} ${n(yy)}L${n(backX-Math.sin(angle)*size*.5)} ${n(backY+Math.cos(angle)*size*.5)}" fill="none" stroke="${color}" stroke-width="3"/><circle data-role="vector-tip" data-x="${x}" data-y="${y}" cx="${n(xx)}" cy="${n(yy)}" r="4" fill="${color}"/>`);
  }
  function matrixCorners(p){return[[0,0],[p.a,p.c],[p.a+p.b,p.c+p.d],[p.b,p.d]];}
  function matrixChart(slug,p,options){
    const axis=spec(slug).axis,control=spec(slug).controls.find(c=>c.key===axis),candidates=[p,{...p,[axis]:control.min},{...p,[axis]:control.max},...[options.reference,options.baseline].filter(v=>validateParams(slug,v).valid).map(v=>validateParams(slug,v).parameters)];
    const values=candidates.flatMap(q=>[...matrixCorners(q).flat(),...(slug==='matrix-linear-map'?[q.x,q.y,q.a*q.x+q.b*q.y,q.c*q.x+q.d*q.y]:[])]);
    const extent=Math.max(3,...values.map(Math.abs)),bound=[3,6,12,24,48].find(v=>v>=extent)||48;return chart(bound);
  }
  function polygon(points,chart,attributes){return`<polygon points="${points.map(([x,y])=>n(chart.px(x))+','+n(chart.py(y))).join(' ')}" ${attributes}/>`;}
  function mappedGrid(p,q,id){
    let body='';
    const transform=(x,y)=>[p.a*x+p.b*y,p.c*x+p.d*y];
    for(let k=-2;k<=2;k++)for(const axis of ['x','y']){
      const start=axis==='x'?transform(k,-2):transform(-2,k),end=axis==='x'?transform(k,2):transform(2,k);
      body+=line(q.px(start[0]),q.py(start[1]),q.px(end[0]),q.py(end[1]),C.mint,'stroke-width="1.25" stroke-opacity=".38" data-role="mapped-grid-line" data-grid-axis="'+axis+'" data-grid-coordinate="'+k+'"');
    }
    return group('a b c d','reference','<g clip-path="url(#'+id+'-plot)" data-role="mapped-grid">'+body+'</g>');
  }
  function geometry(slug,p,r,options){
    const id=namespace(options.id||slug),size=options.compact?23:17;let body='',description='';
    if(slug==='vector'){
      const q=chart(6);body=group('x y','reference',q.grid)+group('x','intermediate',line(q.px(0),q.py(0),q.px(p.x),q.py(0),C.cyan,'stroke-width="6"'))+group('y','intermediate',line(q.px(p.x),q.py(0),q.px(p.x),q.py(p.y),C.gold,'stroke-width="6"'))+arrow(q,p.x,p.y,C.mint,'output norm','output')+text(500,106,'COMPONENTS',C.muted,13)+text(500,143,'('+f(p.x)+', '+f(p.y)+')',C.cyan,30,'data-quantity="x y" data-story-part="input"')+text(500,200,'LENGTH',C.muted,13)+text(500,240,f(r.norm),C.mint,38,'data-quantity="norm output" data-story-part="output"')+text(500,285,r.norm?'Angle '+f(r.angleDegrees)+'°':'Zero vector · no angle',C.muted,size,'data-quantity="angleDegrees" data-story-part="reference"')+text(500,323,'Squares: '+f(r.xSquared)+' + '+f(r.ySquared),C.gold,14,'data-quantity="xSquared ySquared" data-story-part="intermediate"');
      if(options.baseline&&evaluate(slug,options.baseline).valid){const b=evaluate(slug,options.baseline).parameters;body+=arrow(q,b.x,b.y,C.violet,'norm output','output','stroke-dasharray="5 5"');}
      description='Signed x and y components use one fixed coordinate scale. The diagonal arrow length is √(x² + y²). A zero vector has no direction angle.';
    }else if(slug==='inner-product'){
      const q=chart(6);body=group('ux uy vx vy','reference',q.grid)+arrow(q,p.ux,p.uy,C.violet,'ux uy uNorm','reference')+arrow(q,p.vx,p.vy,C.cyan,'vx vy vNorm','input');
      if(r.projectionX!==null)body+=group('projection projectionFactor projectionX projectionY','intermediate',line(q.px(p.vx),q.py(p.vy),q.px(r.projectionX),q.py(r.projectionY),C.gold,'stroke-width="2" stroke-dasharray="5 4"'))+arrow(q,r.projectionX,r.projectionY,C.gold,'projection projectionX projectionY','intermediate');
      body+=text(495,95,'u · v',C.muted,18)+text(495,136,f(r.dot),r.dot<0?C.orange:C.mint,38,'data-quantity="dot output" data-story-part="output"')+text(495,183,'Products: '+f(r.xProduct)+' + '+f(r.yProduct),C.gold,size,'data-quantity="xProduct yProduct" data-story-part="intermediate"')+text(495,226,'Projection '+f(r.projection),C.gold,size,'data-quantity="projection" data-story-part="intermediate"')+text(495,267,r.angleDegrees===null?'Angle undefined':'Angle '+f(r.angleDegrees)+'°',C.muted,size,'data-quantity="angleDegrees cosine" data-story-part="output"')+text(100,343,'u · reference direction',C.violet,14)+text(300,343,'v · current vector',C.cyan,14);
      if(options.baseline&&evaluate(slug,options.baseline).valid){const b=evaluate(slug,options.baseline).parameters;body+=arrow(q,b.vx,b.vy,C.muted,'vx vy','input','stroke-dasharray="5 5"');}
      description='The violet arrow is u; cyan is v. The gold arrow is the orthogonal projection of v onto u, with a signed scalar length. A zero direction has no projection or angle, while the dot product remains zero.';
    }else{
      const q=matrixChart(slug,p,options),corners=matrixCorners(p),orientation=r.orientation>0?'Preserved':r.orientation<0?'Reversed':'Collapsed';
      body=group('a b c d','reference',q.grid)+(slug==='matrix-linear-map'?mappedGrid(p,q,id):'')+group('area signedArea determinant'+(slug==='determinant'?' output':''),'output',polygon([[0,0],[1,0],[1,1],[0,1]],q,`fill="none" stroke="${C.muted}" stroke-dasharray="4 4" data-role="original-unit-square"`)+polygon(corners,q,`fill="url(#${id}-area)" stroke="${r.orientation<0?C.orange:C.mint}" stroke-width="2" data-role="mapped-unit-square" data-signed-area="${r.determinant}" data-area="${r.area}" data-coordinate-scale="${q.scale}"`));
      body+=arrow(q,p.a,p.c,C.violet,'a c','reference')+arrow(q,p.b,p.d,C.gold,'b d','input');
      if(slug==='matrix-linear-map'){
        body+=arrow(q,p.x,p.y,C.cyan,'x y inputNorm','input','stroke-dasharray="4 3"')+arrow(q,r.mappedX,r.mappedY,C.mint,'mappedX mappedY output mappedNorm','output')+text(495,91,'[ '+f(p.a)+'   '+f(p.b)+' ]',C.violet,25,'data-quantity="a b" data-story-part="reference"')+text(495,122,'[ '+f(p.c)+'   '+f(p.d)+' ]',C.violet,25,'data-quantity="c d" data-story-part="reference"')+text(495,169,'x′ = '+f(r.xTerm)+' + '+f(r.yTerm),C.gold,size,'data-quantity="xTerm yTerm" data-story-part="intermediate"')+text(495,214,'('+f(r.mappedX)+', '+f(r.mappedY)+')',C.mint,27,'data-quantity="mappedX mappedY output" data-story-part="output"')+text(495,260,'det = '+f(r.determinant),C.muted,size,'data-quantity="determinant signedArea area" data-story-part="reference"');
        description='The faint fixed grid is the coordinate reference; the tinted grid is its mapped image. The grid and unit square share one coordinate scale. Matrix columns give the mapped basis arrows; the dashed cyan input maps to the mint output. Scale is held across the primary b sweep and may change with other settings or a pin.';
      }else{
        body+=text(495,94,'ad − bc',C.muted,18)+text(495,136,f(r.termAD)+' − '+f(r.termBC),C.gold,25,'data-quantity="termAD termBC" data-story-part="intermediate"')+text(495,184,'= '+f(r.determinant),C.mint,37,'data-quantity="determinant signedArea output" data-story-part="output"')+text(495,238,'Area '+f(r.area),C.cyan,size,'data-quantity="area" data-story-part="output"')+text(495,280,orientation,C.muted,size,'data-quantity="orientation" data-story-part="output"');
        description='The dashed outline is one unit square; the colored parallelogram is its image. |ad − bc| is its area, while the sign records orientation. Zero collapses the square. Scale is held across the primary d sweep; other settings and pins can rescale it.';
      }
      if(options.baseline&&evaluate(slug,options.baseline).valid){const b=evaluate(slug,options.baseline);body+=group('determinant area','output',polygon(matrixCorners(b.parameters),q,`fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4" data-role="baseline-square"`));}
    }
    return frame(slug,body+rail(slug,spec(slug).axis,p,options),options,description);
  }
  function graph(slug,p,r,options){
    const meta=spec(slug),control=controls(slug).find(c=>c.key===meta.axis),points=parameters=>Array.from({length:129},(_,i)=>{const x=control.min+(control.max-control.min)*i/128;return{x,y:curveValue(slug,parameters,x)};});
    const current=points(p),baseline=options.baseline&&evaluate(slug,options.baseline).valid?points(evaluate(slug,options.baseline).parameters):[],values=[0,...current,...baseline].map(item=>typeof item==='number'?item:item.y).filter(finite),min=Math.min(...values),max=Math.max(...values),span=max-min||1;
    const notes=slug==='vector'?'The graph is length versus horizontal component; the vertical component stays fixed.':slug==='inner-product'?'The graph is dot product versus v’s horizontal component. Projection and direction are separate quantities.':slug==='matrix-linear-map'?'The graph tracks mapped x′ as coefficient b changes, with the other entries and input held fixed.':'The graph tracks signed determinant versus entry d, including orientation reversal through zero.';
    return Plot.render({title:meta.primaryLabel+' as '+control.label.toLowerCase()+' changes',description:notes,x:{...control,value:p[control.key]},y:{label:meta.primaryLabel,min:min-span*.1,max:max+span*.1},series:[{id:slug+'-curve',label:meta.primaryLabel,quantity:meta.axis+' output',color:C.mint,points:current},...(baseline.length?[{id:'baseline',label:'Pinned relationship',quantity:'output',color:C.violet,points:baseline,dashed:true}]:[])],current:[{label:meta.primaryLabel,x:p[meta.axis],y:r.output,quantity:meta.axis+' output',draggable:true,color:C.cyan}],notes:[notes]},options);
  }
  function render(slug,input,options={}){
    if(!has(slug))return'';const r=evaluate(slug,input);
    if(!r.valid)return frame(slug,text(60,170,'Choose supported finite inputs',C.gold,25)+text(60,215,r.errors.map(error=>error.message).join(' '),C.ink,16),options,r.errors.map(error=>error.message).join(' '));
    return options.view==='graph'?graph(slug,r.parameters,r,options):geometry(slug,r.parameters,r,options);
  }
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
