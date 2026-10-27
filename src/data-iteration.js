/* Bounded probability, descriptive spread and discrete updates share the host clock. */
(function(root,factory){const node=typeof module==='object'&&module.exports,api=factory(node?require('./plot-view.js'):root.AtlasPlotView);if(node)module.exports=api;root.AtlasDataIteration=api;})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const finite=Number.isFinite,freeze=v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v)){Object.values(v).forEach(freeze);Object.freeze(v);}return v;};
  const field=(key,label,value,min,max,extra={})=>({key,label,value,min,max,step:.01,unit:'',...extra});
  const definitions=freeze({
    'conditional-probability':{title:'Conditional probability',expression:'P(A|B) = P(A∩B) / P(B)',axis:'windowEnd',primaryLabel:'Conditional probability P(A|B)',unit:'',views:['geometry','graph'],setting:'Uniformly select one location on a 100 cm proof strip.',limits:'A and B are intervals starting at zero. Conditioning requires a positive-length window; no random production observations are simulated.',controls:[field('eventEnd','Inked portion a',24,0,100,{unit:'cm'}),field('windowEnd','Inspection window b',40,0,100,{unit:'cm',excluded:[0]})]},
    variance:{title:'Variance and standard deviation',expression:'σ² = ∑(xᵢ − μ)² / 4; σ = √(σ²)',axis:'lastLength',primaryLabel:'Population variance σ²',unit:'cm²',views:['geometry','graph'],setting:'The complete group contains four known lengths: 8, 10, 12 and x centimetres.',limits:'Divide by four to describe this group. No sample estimator or inference is produced; the first three fixed lengths prevent zero variance.',controls:[field('lastLength','Last strip length x',14,0,20,{unit:'cm'})]},
    recurrence:{title:'Recurrence relations',expression:'vₖ₊₁ = rvₖ + d',axis:'retention',primaryLabel:'Volume after n rounds',unit:'L',views:['geometry','graph'],setting:'Each whole round retains a fraction of the current volume, then adds a fixed refill.',limits:'Rounds are integers. Exact discrete updates are shown; joins guide the eye and do not compute fractional rounds. The reservoir is a stipulated model.',controls:[field('initial','Starting volume v₀',20,0,40,{unit:'L'}),field('retention','Retained fraction r',.75,0,1),field('addition','Refill d',3,0,5,{unit:'L'}),field('rounds','Completed rounds n',6,0,12,{step:1,discrete:true})]}
  });
  const has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug),definition=slug=>{if(!has(slug))throw new RangeError('Unknown data-and-iteration model.');return definitions[slug];};
  const defaults=slug=>Object.fromEntries(definition(slug).controls.map(c=>[c.key,c.value]));
  const controls=slug=>definition(slug).controls.map(({value,...c})=>({...c,...(c.excluded?{excluded:[...c.excluded]}:{})}));
  function specs(slug){const{controls:ignored,...meta}=definition(slug),sweeps=controls(slug).filter(c=>!c.discrete).map(c=>({key:c.key,label:c.label,min:c.excluded?.includes(c.min)?1:c.min,max:c.max,step:c.step}));return{...meta,views:[...meta.views],rendererId:slug+'-visual-model',sweeps,readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    const rules=definition(slug).controls;
    for(const key of Object.keys(input))if(!rules.some(c=>c.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const c of rules){const value=Object.hasOwn(input,c.key)?input[c.key]:c.value;if(typeof value!=='number'||!finite(value))errors.push({field:c.key,message:'Enter a finite number.'});else if(value<c.min||value>c.max)errors.push({field:c.key,message:'Use a value from '+c.min+' to '+c.max+'.'});else if(c.discrete&&!Number.isInteger(value))errors.push({field:c.key,message:'Use a whole number of completed rounds.'});else if(c.excluded?.includes(value))errors.push({field:c.key,message:'The conditioning window must have positive length: P(B) must be greater than zero.'});else parameters[c.key]=value;}
    if(slug==='conditional-probability'&&parameters.windowEnd>0&&parameters.windowEnd/100===0)errors.push({field:'windowEnd',code:'numeric_precision',message:'This positive window is below numeric precision for the 100 cm probability frame. Use a larger window.'});
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  function evaluate(slug,input){
    const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};const p=checked.parameters;let result;
    if(slug==='conditional-probability'){
      const overlapLength=Math.min(p.eventEnd,p.windowEnd),eventProbability=p.eventEnd/100,givenProbability=p.windowEnd/100,intersectionProbability=overlapLength/100,conditionalProbability=overlapLength/p.windowEnd;
      result={overlapLength,eventProbability,givenProbability,intersectionProbability,conditionalProbability,output:conditionalProbability};
    }else if(slug==='variance'){
      const measurements=[8,10,12,p.lastLength],count=4,lengthSum=measurements.reduce((a,b)=>a+b,0),mean=lengthSum/count,deviations=measurements.map(x=>x-mean),squaredDeviations=deviations.map(d=>d*d),sumSquaredDeviations=squaredDeviations.reduce((a,b)=>a+b,0),variance=sumSquaredDeviations/count,standardDeviation=Math.sqrt(variance);
      result={measurements,count,lengthSum,mean,deviations,squaredDeviations,sumSquaredDeviations,variance,standardDeviation,output:variance};
      deviations.forEach((d,i)=>{result['deviation'+(i+1)]=d;result['square'+(i+1)]=squaredDeviations[i];});
    }else{
      const values=[p.initial];for(let k=0;k<p.rounds;k++)values.push(p.retention*values[k]+p.addition);
      const previous=p.rounds?values[p.rounds-1]:p.initial,retained=p.rounds?p.retention*previous:0,added=p.rounds?p.addition:0;
      result={values,previous,retained,added,output:values[p.rounds]};
    }
    return{...checked,...result,status:'valid',unit:definition(slug).unit};
  }
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const r=evaluate(slug,{...input,[definition(slug).axis]:value});return r.valid?r.output:null;}
  function readout(slug,p,r,{format:f=fmt}={}){
    if(!r.valid)return{expression:r.errors.map(e=>e.message).join(' '),stats:[],insight:'Choose inputs in the declared domain.'};
    if(slug==='conditional-probability')return{expression:'P(A|B) = '+f(r.overlapLength)+' / '+f(p.windowEnd)+' = '+f(r.output),stats:[{label:'WHOLE STRIP P(A)',value:r.eventProbability,note:'original 100 cm frame'},{label:'WINDOW P(B)',value:r.givenProbability,note:'conditioning event'},{label:'GIVEN THE WINDOW',value:r.output,note:'probability inside B'}],insight:'Restrict the possible location to B. Then divide the inked overlap by the length of B; the whole-strip probability stays separate.'};
    if(slug==='variance')return{expression:'σ² = '+f(r.sumSquaredDeviations)+' / 4 = '+f(r.variance)+' cm²',stats:[{label:'MEAN μ',value:r.mean,note:'cm'},{label:'VARIANCE σ²',value:r.variance,note:'cm² · average squared deviation'},{label:'STANDARD DEVIATION σ',value:r.standardDeviation,note:'cm · square root of variance'}],insight:'The squared areas cannot cancel. Their average has squared units; taking the square root restores centimetres.'};
    return{expression:p.rounds?'v'+sub(p.rounds)+' = '+f(p.retention)+' × '+f(r.previous)+' + '+f(p.addition)+' ≈ '+f(r.output)+' L':'v₀ = '+f(p.initial)+' L',stats:[{label:'COMPLETED ROUNDS',value:p.rounds,note:'whole updates only'},{label:p.rounds?'RETAINED IN LAST ROUND':'STARTING VOLUME',value:p.rounds?r.retained:p.initial,note:'L'},{label:'CURRENT VOLUME',value:r.output,note:'L'}],insight:p.rounds?'Retain first, refill second. The graph contains one exact point per completed round.':'No update has happened: the current volume is exactly the starting volume.'};
  }
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff',orange:'#ffb08a'};
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=v=>finite(v)?Number(v.toFixed(6)):0;
  function fmt(v){return finite(v)?String(Number(v.toPrecision(5))).replace('-','−'):'unavailable';}
  const sub=value=>String(value).replace(/[0-9]/g,d=>'₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
  const scope=v=>'data-iteration-'+Array.from(String(v??'scene')).map(c=>/^[a-zA-Z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,v,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(v)}</text>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const rect=(x,y,w,h,color,extra='')=>`<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0,w))}" height="${n(Math.max(0,h))}" fill="${color}" ${extra}/>`;
  const group=(keys,role,body)=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  function dimensions(options,normal=390,narrow=390){return{width:options.compact?360:760,height:options.compact?narrow:normal};}
  function frame(slug,body,options,description,size){const id=scope(options.id||slug),d=size||dimensions(options);return`<figure class="visualization-frame data-iteration-scene" data-data-model="${slug}"><svg class="visual-scene" viewBox="0 0 ${d.width} ${d.height}" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${d.width}" height="${d.height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function axisControl(slug,options,p){const c=controls(slug).find(c=>c.key===definition(slug).axis),bounds=options.controlBounds?.[c.key];if(c.excluded?.includes(c.min))c.min=Math.min(c.step,p[c.key]);if(bounds){const min=finite(bounds.min)?Math.max(c.min,bounds.min):c.min,max=finite(bounds.max)?Math.min(c.max,bounds.max):c.max;if(max>min){c.min=min;c.max=max;if(finite(bounds.step)&&bounds.step>0)c.step=Math.min(bounds.step,max-min);}}return c;}
  function rail(slug,p,options,width,y){if(options.sceneControl===false)return'';const c=axisControl(slug,options,p),left=28,right=width-28,t=Math.max(0,Math.min(1,(p[c.key]-c.min)/(c.max-c.min))),at=left+t*(right-left);return group(c.key,'input',`<g role="slider" tabindex="0" class="scene-handle" style="cursor:ew-resize;touch-action:none" data-drag-param="${c.key}" data-drag-min="${c.min}" data-drag-max="${c.max}" data-drag-x0="${left}" data-drag-x1="${right}" data-drag-step="${c.step}" aria-label="${esc(c.label)}. Drag horizontally or use arrow keys." aria-valuemin="${c.min}" aria-valuemax="${c.max}" aria-valuenow="${p[c.key]}">${line(left,y,right,y,C.muted,'stroke-width="3"')}<circle cx="${n(at)}" cy="${y}" r="22" fill="transparent" pointer-events="all"/><circle cx="${n(at)}" cy="${y}" r="7" fill="${C.cyan}"/>${text(width/2,y+25,c.label+' · '+fmt(p[c.key])+(c.unit?' '+c.unit:''),C.cyan,options.compact?12:15,'text-anchor="middle"')}</g>`);}
  function conditionalGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?350:410,o.sceneControl===false?350:410),w=d.width,left=24,span=w-48;
    let body=text(left,30,'A narrower frame of possibility',C.ink,o.compact?19:24)+text(left,65,'Whole strip',C.muted,14)+group('eventProbability','reference',text(left,92,fmt(100*r.eventProbability)+'%',C.mint,28))+text(w/2+12,65,'Given B',C.muted,14)+group('conditionalProbability output','output',text(w/2+12,92,fmt(100*r.output)+'%',C.gold,32));
    body+=text(left,125,'Whole strip · 100 cm',C.muted,14)+rect(left,138,span,32,C.grid)+group('eventEnd event:A','reference',rect(left,138,span*p.eventEnd/100,32,C.gold,'fill-opacity=".35" data-role="event-strip"'))+group('overlapLength intersectionProbability event:intersection','intermediate',rect(left,138,span*r.overlapLength/100,32,C.gold,'data-role="overlap-strip"'))+group('windowEnd givenProbability event:B','input',rect(left,134,span*p.windowEnd/100,40,'none','stroke="'+C.cyan+'" stroke-width="2.5" data-role="window-frame"'));
    body+=text(left,194,'0',C.muted,12)+text(w-left,194,'100 cm',C.muted,12,'text-anchor="end"')+text(left,225,'Inside B · '+fmt(p.windowEnd)+' cm fills this frame',C.cyan,o.compact?13:16)+rect(left,240,span,42,C.grid)+group('conditionalProbability output','output',rect(left,240,span*r.output,42,C.gold,'data-role="conditional-fill"'))+text(left,311,fmt(r.overlapLength)+' / '+fmt(p.windowEnd)+' = '+fmt(r.output),C.gold,22,'data-quantity="overlapLength windowEnd conditionalProbability output" data-story-part="output"');
    const b=o.baseline&&evaluate('conditional-probability',o.baseline);if(b?.valid)body+=rect(left,237,span*b.output,48,'none','stroke="'+C.violet+'" stroke-width="2" stroke-dasharray="5 4" data-role="baseline-conditional"')+text(w-left,335,'Pinned: '+fmt(100*b.output)+'%',C.violet,13,'text-anchor="end"');
    body+=rail('conditional-probability',p,o,w,365);
    return frame('conditional-probability',body,o,'Gold is the inked overlap. Cyan outlines the inspection window B. The upper strip uses the full 100 cm scale; the lower frame expands only B to full width.',d);
  }
  function varianceGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?425:485,o.sceneControl===false?425:485),w=d.width,left=42,right=w-22,span=right-left,base=236,y=v=>base-v*6,barWidth=o.compact?37:76,centres=Array.from({length:4},(_,i)=>left+(i+.5)*span/4);
    let body=text(22,29,'Length, deviation, squared area',C.ink,o.compact?19:24);
    body+=group('mean','intermediate',text(22,59,'μ '+fmt(r.mean)+' cm',C.cyan,o.compact?17:22))+group('variance output','output',text(w/2,59,'σ² '+fmt(r.variance)+' cm²',C.gold,o.compact?17:22,'text-anchor="middle"'))+group('standardDeviation','output',text(w-22,86,'σ '+fmt(r.standardDeviation)+' cm',C.mint,o.compact?17:22,'text-anchor="end"'));
    for(const value of [0,10,20])body+=line(left,y(value),right,y(value),C.grid)+text(left-8,y(value)+4,value,C.muted,12,'text-anchor="end"');
    body+=text(left,103,'Lengths (cm)',C.muted,13);
    r.measurements.forEach((value,i)=>{
      const x=centres[i]-barWidth/2,keys='measurements '+(i===3?'lastLength ':'')+'deviations deviation'+(i+1);
      body+=group(keys,i===3?'input':'reference',rect(x,y(value),barWidth,base-y(value),i===3?C.cyan:C.muted,'data-role="length-bar" data-index="'+i+'" data-value="'+value+'" fill-opacity=".75"')+text(centres[i],254,fmt(value),i===3?C.cyan:C.muted,14,'text-anchor="middle"'));
      body+=group('deviations deviation'+(i+1),'intermediate',line(centres[i],y(value),centres[i],y(r.mean),C.orange,'stroke-width="2.5" data-role="deviation-line"')+text(centres[i],278,'d'+sub(i+1)+' '+fmt(r.deviations[i]),C.orange,o.compact?11:14,'text-anchor="middle"'));
    });
    body+=group('mean','intermediate',line(left-4,y(r.mean),right,y(r.mean),C.mint,'stroke-width="2" stroke-dasharray="5 3" data-role="mean-line"'));
    body+=text(22,306,'Squared deviations (cm²)',C.muted,14);
    r.squaredDeviations.forEach((value,i)=>{const side=Math.abs(r.deviations[i])*7;body+=group('squaredDeviations square'+(i+1)+' '+(i===3?'deviation4 ':''),'intermediate',rect(centres[i]-side/2,367-side,side,side,i===3?C.gold:C.violet,'fill-opacity=".6" data-role="deviation-square" data-index="'+i+'" data-area="'+value+'"')+text(centres[i],382,fmt(value),i===3?C.gold:C.violet,14,'text-anchor="middle"'));});
    body+=group('lengthSum count sumSquaredDeviations variance output','output',text(22,409,'σ² = '+fmt(r.sumSquaredDeviations)+' / 4 = '+fmt(r.variance)+' cm²',C.gold,o.compact?17:21));
    const b=o.baseline&&evaluate('variance',o.baseline);if(b?.valid)body+=line(left-4,y(b.mean),right,y(b.mean),C.violet,'stroke-width="2" stroke-dasharray="3 4" data-role="baseline-mean"')+rect(centres[3]-barWidth/2,y(b.parameters.lastLength),barWidth,base-y(b.parameters.lastLength),'none','stroke="'+C.violet+'" stroke-width="2" stroke-dasharray="4 3" data-role="baseline-length"');
    body+=rail('variance',p,o,w,442);
    return frame('variance',body,o,'The four bars share a 0 to 20 cm length scale. Orange lines show signed deviations from the moving mean. Square areas use one common scale: their mean is population variance in cm²; standard deviation returns to cm.',d);
  }
  function recurrenceGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?355:415,o.sceneControl===false?355:415),w=d.width,left=24,span=w-48,rows=[{y:118,value:r.previous,keys:'initial previous values',label:p.rounds?'Before round '+p.rounds:'Initial state · no update',color:C.muted},{y:192,value:r.retained,keys:'retention retained',label:p.rounds?'Retain '+fmt(100*p.retention)+'%':'Retained amount · no update',color:C.cyan},{y:266,value:r.output,keys:'rounds addition added output values',label:p.rounds?'Then add '+fmt(r.added)+' L':'Current volume = starting volume',color:C.mint}];
    let body=text(left,30,'Retain first. Refill second.',C.ink,o.compact?20:24)+group('rounds output','output',text(left,72,'v'+sub(p.rounds)+'  '+fmt(r.output)+' L',C.gold,30));
    for(const row of rows){body+=text(left,row.y-13,row.label,C.muted,o.compact?13:16)+rect(left,row.y,span,28,C.grid)+group(row.keys,row.y===192?'intermediate':row.y===266?'output':'reference',rect(left,row.y,span*row.value/100,28,row.color,'data-role="'+(row.y===118?'previous-volume':row.y===192?'retained-volume':'current-volume')+'" data-value="'+row.value+'"')+text(w-left,row.y-13,fmt(row.value)+' L',row.color,15,'text-anchor="end"'));}
    if(p.rounds)body+=group('addition added','intermediate',rect(left+span*r.retained/100,266,span*r.added/100,28,C.gold,'data-role="added-volume" data-value="'+r.added+'"'));
    body+=text(left,319,'All bars share a 0–100 L scale',C.muted,13)+text(w-left,343,p.rounds?'vₙ = r vₙ₋₁ + d':'n = 0 · zero updates',C.cyan,14,'text-anchor="end"');
    const b=o.baseline&&evaluate('recurrence',o.baseline);if(b?.valid)body+=rect(left,263,span*b.output/100,34,'none','stroke="'+C.violet+'" stroke-width="2" stroke-dasharray="5 3" data-role="baseline-volume"')+text(left,343,'Pinned v'+sub(b.parameters.rounds)+': '+fmt(b.output)+' L',C.violet,13);
    body+=rail('recurrence',p,o,w,370);
    return frame('recurrence',body,o,p.rounds?'Cyan is the retained volume; gold is the refill added afterward. The current result is an exact whole-round update. The three bars use the same volume scale.':'At round zero no retaining or refilling has happened. Current volume equals the initial volume.',d);
  }
  function graph(slug,p,r,o){
    const baseline=o.baseline&&evaluate(slug,o.baseline),axis=axisControl(slug,o,p),series=[],current=[],validBaseline=baseline?.valid;
    let x,y,description;
    if(slug==='recurrence'){
      x={key:'rounds',label:'Completed round k',min:0,max:12,step:1,value:p.rounds};y={label:'Volume vₖ (L)',min:0,max:100};description='Points are exact whole-round updates. Dashed joins guide the eye; they do not compute fractional rounds. Each step retains first, then refills.';
      series.push({id:'rounds',label:'Exact round volumes',quantity:'values retention initial addition',color:C.mint,dots:'both',dashed:true,points:r.values.map((value,k)=>({x:k,y:value}))});
      if(validBaseline)series.push({id:'baseline',label:'Pinned exact rounds',quantity:'values output',color:C.violet,dots:'both',dashed:true,points:baseline.values.map((value,k)=>({x:k,y:value}))});
      current.push({x:p.rounds,y:r.output,label:'Current completed round',quantity:'rounds output',color:C.gold,draggable:o.sceneControl!==false});
    }else{
      x={...axis,value:p[axis.key]};if(slug==='conditional-probability'&&validBaseline)x.min=Math.min(x.min,baseline.parameters.windowEnd);y={label:slug==='variance'?'Population variance σ² (cm²)':'P(A|B)',min:0,max:slug==='variance'?22:1};
      description=slug==='variance'?'The minimum population variance is 2 cm² at a last length of 10 cm. The first three fixed lengths prevent zero spread. Standard deviation is not plotted on this squared-unit axis.':'The window length b changes the conditional fraction. At b=0, P(B)=0 and conditional probability is undefined. Whole-strip probability is a separate quantity.';
      const points=params=>{
        const samples=Array.from({length:201},(_,i)=>x.max*i/200);
        // Keep the exact plateau and its corner even when a is smaller than a grid interval.
        // Positive b samples must also represent a positive probability on the full strip.
        if(slug==='conditional-probability')samples.push(Math.max(params.eventEnd/2,Number.MIN_VALUE*100),params.eventEnd,params.windowEnd);
        return[...new Set(samples)].filter(value=>slug!=='conditional-probability'||value===0||value/100>0).sort((a,b)=>a-b).map(value=>({x:value,y:curveValue(slug,params,value)}));
      };
      series.push({id:'relationship',label:definition(slug).primaryLabel,quantity:axis.key+' output',color:C.gold,points:points(p)});
      if(slug==='conditional-probability')series.push({id:'whole-strip',label:'Whole-strip P(A)',quantity:'eventProbability',color:C.mint,dashed:true,points:[{x:0,y:r.eventProbability},{x:100,y:r.eventProbability}]});
      if(validBaseline){series.push({id:'baseline',label:'Pinned relationship',quantity:'output',color:C.violet,dashed:true,points:points(baseline.parameters)});current.push({x:baseline.parameters[axis.key],y:baseline.output,label:'Pinned result',quantity:'output',color:C.violet});}
      current.push({x:p[axis.key],y:r.output,label:definition(slug).primaryLabel,quantity:axis.key+' output',color:C.cyan,draggable:o.sceneControl!==false});
    }
    return Plot.render({title:definition(slug).title,description,x,y,series,current,notes:[]},o);
  }
  function render(slug,input,options={}){if(!has(slug))return'';const r=evaluate(slug,input);if(!r.valid){const d=dimensions(options,240,260),message=r.errors.map(e=>e.message).join(' '),emptyWindow=r.errors.some(e=>e.field==='windowEnd'&&e.message.includes('positive length')),precision=r.errors.some(e=>e.code==='numeric_precision');return frame(slug,text(22,48,'Choose valid inputs',C.gold,24)+text(22,92,precision?'Window is below numeric precision.':emptyWindow?'P(B) must be greater than zero.':'Check the declared input ranges.',C.ink,options.compact?15:20),options,message,d);}if(options.view==='graph')return graph(slug,r.parameters,r,options);return slug==='conditional-probability'?conditionalGeometry(r.parameters,r,options):slug==='variance'?varianceGeometry(r.parameters,r,options):recurrenceGeometry(r.parameters,r,options);}
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
