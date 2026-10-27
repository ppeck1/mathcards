/* Pure bounded logic, oriented area and equilibrium models; the shared host owns motion. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports,api=factory(node?require('./plot-view.js'):root.AtlasPlotView);
  if(node)module.exports=api;root.AtlasBookFoundations=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const finite=Number.isFinite;
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const field=(key,label,value,min,max,extra={})=>({key,label,value,min,max,step:.01,unit:'',...extra});
  const select=(key,label,value,options)=>({key,label,value,type:'select',options:options.map(([value,label])=>({value,label}))});
  const operations=freeze({and:{label:'AND',symbol:'∧'},or:{label:'OR',symbol:'∨'},implies:{label:'IF P, THEN Q',symbol:'→'},iff:{label:'IF AND ONLY IF',symbol:'↔'},not:{label:'NOT P',symbol:'¬'}});
  const domain=freeze([2,4,6,8,10,12]);
  const definitions=freeze({
    'logical-connectives':{title:'Logical connectives and truth tables',expression:'P: x ≥ 6; Q: y ≥ 4; P ∧ Q',axis:'length',primaryLabel:'Truth of the selected formula',unit:'truth value',views:['geometry','graph'],setting:'A panel has length x and width y in centimetres. P means x≥6 and Q means y≥4.',limits:'These are classical truth-functional connectives. Inclusive OR includes the both-true case. Material implication does not assert causation or relevance; NOT ignores Q.',controls:[field('length','Panel length x',3,0,12,{unit:'cm'}),field('width','Panel width y',5,0,12,{unit:'cm'}),select('operation','Connective','and',[['and','AND · P ∧ Q'],['or','Inclusive OR · P ∨ Q'],['implies','If P, then Q · P → Q'],['iff','If and only if · P ↔ Q'],['not','NOT · ¬P']])]},
    quantifier:{title:'Universal and existential quantifiers',expression:'∀x∈D P(x); ∃x∈D P(x)',axis:'threshold',primaryLabel:'Truth of the selected quantified statement',unit:'truth value',views:['geometry','graph'],setting:'D consists of six strip lengths: 2, 4, 6, 8, 10 and 12 centimetres. P(x) means x≥h.',limits:'The domain is fixed, finite and nonempty. Checking every one of these six objects decides this domain only; it does not prove a statement about an infinite domain.',controls:[field('threshold','Required length h',8,0,14,{unit:'cm'}),select('mode','Quantifier','all',[['all','Every strip · ∀'],['some','At least one strip · ∃']])]},
    'cross-product':{title:'Cross product and oriented area',expression:'u × v = (0, 0, ab sin θ)',axis:'angle',primaryLabel:'Signed normal component',unit:'m²',views:['geometry','graph'],setting:'In one fixed right-handed orthonormal frame, u=(a,0,0) and v=(b cos θ,b sin θ,0).',limits:'The executable vectors lie in the xy-plane. Their cross product points along the z-axis. Its signed z-component differs from the nonnegative parallelogram area; this family does not represent arbitrary spatial input vectors.',controls:[field('uLength','First vector length a',3,0,4,{unit:'m'}),field('vLength','Second vector length b',2,0,4,{unit:'m'}),field('angle','Oriented angle θ',60,-180,180,{unit:'deg'})]},
    stability:{title:'Stability of an equilibrium',expression:'eₖ₊₁ = r eₖ; eₙ = rⁿ e₀',axis:'multiplier',primaryLabel:'Signed final displacement',unit:'cm',views:['geometry','graph'],setting:'A stipulated correction rule multiplies the signed alignment displacement from equilibrium zero by r at each whole update.',limits:'This scalar linear family classifies stability to starting-state perturbations. It does not establish structural stability under changes to the rule. The finite path illustrates the analytic classification; it is not its proof.',controls:[field('initialError','Initial displacement e₀',1,-2,2,{unit:'cm'}),field('multiplier','Correction multiplier r',.5,-1.2,1.2),field('steps','Completed updates n',8,0,8,{step:1,discrete:true})]}
  });
  const has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug);
  const definition=slug=>{if(!has(slug))throw new RangeError('Unknown book-foundation model.');return definitions[slug];};
  const defaults=slug=>Object.fromEntries(definition(slug).controls.map(c=>[c.key,c.value]));
  const controls=slug=>definition(slug).controls.map(({value,...c})=>({...c,...(c.options?{options:c.options.map(o=>({...o}))}:{})}));
  function specs(slug){const{controls:ignored,...meta}=definition(slug);return{...meta,views:[...meta.views],rendererId:slug+'-visual-model',sweeps:controls(slug).filter(c=>c.type!=='select'&&!c.discrete).map(({key,label,min,max,step})=>({key,label,min,max,step})),readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    const rules=definition(slug).controls;
    for(const key of Object.keys(input))if(!rules.some(c=>c.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const c of rules){const value=Object.hasOwn(input,c.key)?input[c.key]:c.value;
      if(c.type==='select'){if(!c.options.some(o=>o.value===value))errors.push({field:c.key,message:'Choose one of the listed options.'});else parameters[c.key]=value;}
      else if(typeof value!=='number'||!finite(value))errors.push({field:c.key,message:'Enter a finite number.'});
      else if(value<c.min||value>c.max)errors.push({field:c.key,message:'Use a value from '+c.min+' to '+c.max+'.'});
      else if(c.discrete&&!Number.isInteger(value))errors.push({field:c.key,message:'Use a whole number of completed updates.'});
      else parameters[c.key]=value===0?0:value;
    }
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  const flag=value=>value?1:0,label=value=>value?'True':'False',zero=value=>value===0?0:value;
  function truth(operation,p,q){return operation==='and'?p&&q:operation==='or'?p||q:operation==='implies'?!p||q:operation==='iff'?p===q:!p;}
  function trig(angle){if(angle===0)return{sine:0,cosine:1};if(Math.abs(angle)===180)return{sine:0,cosine:-1};if(Math.abs(angle)===90)return{sine:Math.sign(angle),cosine:0};return{sine:Math.sin(angle*Math.PI/180),cosine:Math.cos(angle*Math.PI/180)};}
  function evaluate(slug,input){
    const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};const p=checked.parameters;let result;
    if(slug==='logical-connectives'){
      const pTruth=flag(p.length>=6),qTruth=flag(p.width>=4),output=flag(truth(p.operation,!!pTruth,!!qTruth));
      result={pTruth,qTruth,output,pLabel:label(pTruth),qLabel:label(qTruth),truthLabel:label(output),truthTable:[[false,false],[false,true],[true,false],[true,true]].map(([p,q])=>({p:flag(p),q:flag(q),output:flag(truth(checked.parameters.operation,p,q))}))};
    }else if(slug==='quantifier'){
      const outcomes=domain.map(length=>({length,truth:flag(length>=p.threshold)})),qualifyingCount=outcomes.reduce((sum,row)=>sum+row.truth,0),allTruth=flag(qualifyingCount===domain.length),someTruth=flag(qualifyingCount>0),output=p.mode==='all'?allTruth:someTruth;
      result={domain:[...domain],outcomes,count:domain.length,qualifyingCount,allTruth,someTruth,output,allLabel:label(allTruth),someLabel:label(someTruth),truthLabel:label(output)};
    }else if(slug==='cross-product'){
      const{sine,cosine}=trig(p.angle),uX=p.uLength,uY=0,vX=zero(p.vLength*cosine),vY=zero(p.vLength*sine),normalComponent=zero(uX*vY),area=Math.abs(normalComponent);
      if(p.uLength>0&&p.vLength>0&&p.angle!==0&&Math.abs(p.angle)!==180&&normalComponent===0)return{...checked,valid:false,status:'numeric_precision',output:null,errors:[{field:'angle',code:'numeric_precision',message:'The nonzero cross product is below numeric precision. Use larger vector lengths or an angle farther from zero.'}],unit:definition(slug).unit};
      result={uX,uY,uZ:0,vX,vY,vZ:0,u:[uX,0,0],v:[vX,vY,0],cross:[0,0,normalComponent],sine,cosine,normalComponent,area,output:normalComponent,orientation:normalComponent>0?'Out of the page (+z)':normalComponent<0?'Into the page (−z)':'Zero cross product'};
    }else{
      const values=[p.initialError];for(let k=0;k<p.steps;k++){const value=zero(p.multiplier*values[k]);if(p.multiplier!==0&&values[k]!==0&&value===0)return{...checked,valid:false,status:'numeric_precision',output:null,errors:[{field:'multiplier',code:'numeric_precision',message:'A nonzero displacement is below numeric precision. Use a larger multiplier or starting displacement.'}],unit:definition(slug).unit};values.push(value);}
      const output=values[p.steps],factorMagnitude=Math.abs(p.multiplier),classification=factorMagnitude<1?'attracting':factorMagnitude===1?'bounded':'unstable';
      result={values,previous:values[Math.max(0,p.steps-1)],magnitude:Math.abs(output),factorMagnitude,output,classification,stabilityLabel:classification==='attracting'?'Attracting':classification==='bounded'?'Bounded, not attracting':'Unstable',alternating:p.multiplier<0,attracting:factorMagnitude<1,lyapunovStable:factorMagnitude<=1};
    }
    return{...checked,...result,status:'valid',unit:definition(slug).unit};
  }
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const r=evaluate(slug,{...input,[definition(slug).axis]:value});return r.valid?r.output:null;}
  function readout(slug,p,r,{format:f=fmt,baseline=null}={}){
    if(!r.valid)return{expression:'Choose supported inputs',stats:[],insight:r.errors.map(e=>e.message).join(' ')};
    const comparison=baseline?.valid&&typeof baseline.truthLabel==='string'?{baselineValue:baseline.truthLabel,change:baseline.truthLabel===r.truthLabel?'Unchanged':baseline.truthLabel+' → '+r.truthLabel}:undefined;
    if(slug==='logical-connectives')return{expression:(p.operation==='not'?'¬P':'P '+operations[p.operation].symbol+' Q')+' = '+r.truthLabel,stats:[{label:'P · LENGTH AT LEAST 6 cm',value:r.pLabel,note:'x = '+f(p.length)+' cm'},{label:'Q · WIDTH AT LEAST 4 cm',value:r.qLabel,note:p.operation==='not'?'Q is not used by NOT':'y = '+f(p.width)+' cm'},{label:'FORMULA',value:r.truthLabel,note:'a truth value, not a probability'}],comparison,insight:p.operation==='implies'?'P → Q is false only when P is true and Q is false. This truth-functional statement does not assert a cause.':p.operation==='not'?'NOT reverses P. The width and Q do not affect this formula.':'The measurements vary continuously. Each proposition changes truth exactly at its inclusive threshold.'};
    if(slug==='quantifier')return{expression:(p.mode==='all'?'∀x∈D P(x)':'∃x∈D P(x)')+' = '+r.truthLabel,stats:[{label:'MEETING THE REQUIREMENT',value:r.qualifyingCount,note:'of six known strips'},{label:'EVERY STRIP · ∀',value:r.allLabel,note:'all six must qualify'},{label:'AT LEAST ONE · ∃',value:r.someLabel,note:'one witness is enough'}],comparison,insight:'P(x) means x ≥ '+f(p.threshold)+' cm. These results decide only the explicitly listed six-member domain.'};
    if(slug==='cross-product')return{expression:'w_z = '+f(p.uLength)+' × '+f(p.vLength)+' × sin('+f(p.angle)+'°) = '+f(r.output)+' m²',stats:[{label:'SIGNED z-COMPONENT',value:r.output,note:'m² · right-handed frame'},{label:'PARALLELOGRAM AREA',value:r.area,note:'m² · nonnegative'},{label:'SIN θ',value:r.sine,note:r.orientation}],insight:'Both input vectors lie in the xy-plane. Positive z points out of the page, negative z into it. Reversing order reverses the normal, while area stays the same.'};
    return{expression:p.steps?'e'+sub(p.steps)+' = ('+f(p.multiplier)+')^'+p.steps+' × '+f(p.initialError)+' = '+f(r.output)+' cm':'e₀ = '+f(p.initialError)+' cm · no correction',stats:[{label:'FINAL DISPLACEMENT',value:r.output,note:'cm · signed from equilibrium zero'},{label:'MAGNITUDE',value:r.magnitude,note:'cm · distance from equilibrium'},{label:'RULE BEHAVIOR',value:r.stabilityLabel,note:'|r| = '+f(r.factorMagnitude)}],insight:r.classification==='attracting'?'Because |r|<1, |r|ⁿ tends to zero. Negative r also makes nonzero errors alternate sides.':r.classification==='bounded'?'At |r|=1 the displacement magnitude stays fixed. The equilibrium is stable but does not attract nonzero starting displacements.':'Because |r|>1, arbitrarily small nonzero displacements eventually grow. An exactly zero start remains zero and does not change the rule’s instability.'};
  }
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff',orange:'#ffb08a'};
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=value=>finite(value)?Number(value.toFixed(6)):0;
  function fmt(value){return finite(value)?String(Number(value.toPrecision(5))).replace('-','−'):'unavailable';}
  const sub=value=>String(value).replace(/[0-9]/g,d=>'₀₁₂₃₄₅₆₇₈₉'[Number(d)]);
  const scope=value=>'book-foundation-'+Array.from(String(value??'scene')).map(c=>/^[a-zA-Z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const rect=(x,y,w,h,color,extra='')=>`<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0,w))}" height="${n(Math.max(0,h))}" fill="${color}" ${extra}/>`;
  const circle=(x,y,r,color,extra='')=>`<circle cx="${n(x)}" cy="${n(y)}" r="${r}" fill="${color}" ${extra}/>`;
  const group=(keys,part,body,extra='')=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}" ${extra}>${body}</g>`;
  const dimensions=(o,height)=>({width:o.compact?360:760,height});
  function frame(slug,body,o,description,d){const id=scope(o.id||slug);return`<figure class="visualization-frame book-foundation-scene" data-book-model="${slug}"><svg class="visual-scene" viewBox="0 0 ${d.width} ${d.height}" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${d.width}" height="${d.height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function axisControl(slug,p,o){const c=controls(slug).find(c=>c.key===definition(slug).axis),b=o.controlBounds?.[c.key];if(b){const low=finite(b.min)?Math.max(c.min,b.min):c.min,high=finite(b.max)?Math.min(c.max,b.max):c.max;if(high>low){c.min=low;c.max=high;if(finite(b.step)&&b.step>0)c.step=Math.min(b.step,high-low);}}return c;}
  function rail(slug,p,o,width,y){if(o.sceneControl===false)return'';const c=axisControl(slug,p,o),left=28,right=width-28,at=left+(p[c.key]-c.min)/(c.max-c.min)*(right-left);return group(c.key,'input',`<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="${c.key}" data-drag-min="${c.min}" data-drag-max="${c.max}" data-drag-x0="${left}" data-drag-x1="${right}" data-drag-step="${c.step}" aria-label="${esc(c.label)}. Drag horizontally or use arrow keys." aria-valuemin="${c.min}" aria-valuemax="${c.max}" aria-valuenow="${p[c.key]}">${line(left,y,right,y,C.muted,'stroke-width="3"')}${circle(at,y,22,'transparent','pointer-events="all"')}${circle(at,y,7,C.cyan)}${text(width/2,y+24,c.label+' · '+fmt(p[c.key])+(c.unit?' '+c.unit:''),C.cyan,13,'text-anchor="middle"')}</g>`);}
  function pinned(slug,o){const b=o.baseline&&evaluate(slug,o.baseline);return b?.valid?b:null;}
  function logicalGeometry(p,r,o){
    const baseHeight=o.compact?485:330,d=dimensions(o,baseHeight+(o.sceneControl===false?0:60)),w=d.width,tableX=o.compact?22:420,panelX=22,base=250,s=12,tableY=o.compact?332:115;
    let body=text(22,29,'Two tests. One truth value.',C.ink,o.compact?20:25)+group('operation output truthLabel','output',text(22,66,(p.operation==='not'?'¬P':'P '+operations[p.operation].symbol+' Q')+' = '+r.truthLabel,r.output?C.mint:C.orange,29));
    body+=rect(panelX,base-144,144,144,'none','stroke="'+C.grid+'" stroke-dasharray="3 4"')+group('length width','input',rect(panelX,base-p.width*s,p.length*s,p.width*s,C.cyan,'fill-opacity=".4" stroke="'+C.cyan+'" data-role="panel" data-length="'+p.length+'" data-width="'+p.width+'"'));
    body+=group('length pTruth pLabel','input',line(panelX+72,base-150,panelX+72,base+7,C.gold,'stroke-dasharray="4 3" data-role="length-threshold"')+text(panelX+72,base+27,'6 cm',C.gold,13,'text-anchor="middle"'));
    body+=group('width qTruth qLabel','reference',line(panelX-5,base-48,panelX+150,base-48,C.violet,'stroke-dasharray="4 3" data-role="width-threshold"')+text(panelX+154,base-44,'4 cm',C.violet,13));
    body+=text(22,300,'Panel: '+fmt(p.length)+' × '+fmt(p.width)+' cm',C.cyan,16);
    const testX=o.compact?195:210;
    body+=group('length pTruth pLabel','intermediate',text(testX,126,'P: x ≥ 6',C.gold,16)+text(testX,153,r.pLabel,r.pTruth?C.mint:C.orange,23));
    body+=group('width qTruth qLabel','intermediate',text(testX,195,'Q: y ≥ 4',C.violet,16)+text(testX,222,r.qLabel,r.qTruth?C.mint:C.orange,23)+text(testX,245,p.operation==='not'?'unused by ¬P':'',C.muted,12));
    const tableWidth=o.compact?316:310,rowHeight=25,rows=p.operation==='not'?[{p:0,output:1},{p:1,output:0}]:r.truthTable;
    body+=text(tableX,tableY,'Truth table · highlighted input',C.ink,15)+text(tableX+18,tableY+25,'P',C.gold,15)+(p.operation==='not'?'':text(tableX+100,tableY+25,'Q',C.violet,15))+text(tableX+190,tableY+25,'Result',C.mint,15);
    rows.forEach((row,i)=>{const y=tableY+46+i*rowHeight,active=row.p===r.pTruth&&(p.operation==='not'||row.q===r.qTruth);body+=rect(tableX,y-16,tableWidth,23,active?C.grid:C.bg,'rx="3" data-role="truth-row" data-p="'+row.p+'" data-q="'+(row.q??'unused')+'" data-truth="'+row.output+'" data-active="'+active+'"')+text(tableX+18,y,label(row.p),C.gold,15)+(p.operation==='not'?'':text(tableX+100,y,label(row.q),C.violet,15))+group(active?'operation output truthLabel':'operation truthTable',active?'output':'reference',text(tableX+190,y,label(row.output),row.output?C.mint:C.orange,15));});
    const b=pinned('logical-connectives',o);if(b)body+=rect(panelX,base-b.parameters.width*s,b.parameters.length*s,b.parameters.width*s,'none','stroke="'+C.violet+'" stroke-width="2" stroke-dasharray="5 4" data-role="baseline-panel"')+text(w-22,82,'Pinned: '+b.truthLabel,C.violet,13,'text-anchor="end"');
    body+=rail('logical-connectives',p,o,w,baseHeight+19);
    return frame('logical-connectives',body,o,'The panel uses one length scale in both directions. Gold and violet lines mark inclusive thresholds. The truth table lists all input truth assignments; the highlighted row follows the current measurements. Truth changes exactly at a threshold, without intermediate truth values.',d);
  }
  function logicalGraph(p,r,o){
    const d=dimensions(o,o.sceneControl===false?365:425),w=d.width,left=o.compact?48:90,top=78,span=o.compact?260:440,plotHeight=220,x=value=>left+span*value/12,y=value=>top+plotHeight-plotHeight*value/12;
    let body=text(22,30,'Where is the formula true?',C.ink,o.compact?20:25)+group('operation output truthLabel','output',text(22,59,(p.operation==='not'?'¬P':'P '+operations[p.operation].symbol+' Q')+' = '+r.truthLabel,r.output?C.mint:C.orange,20));
    for(const [xmin,xmax]of [[0,6],[6,12]])for(const [ymin,ymax]of [[0,4],[4,12]]){const pass=truth(p.operation,xmin===6,ymin===4);body+=rect(x(xmin),y(ymax),x(xmax)-x(xmin),y(ymin)-y(ymax),pass?C.mint:C.orange,'fill-opacity=".18" data-role="truth-region" data-x-min="'+xmin+'" data-x-max="'+xmax+'" data-y-min="'+ymin+'" data-y-max="'+ymax+'" data-truth="'+flag(pass)+'"');}
    body+=rect(left,top,span,plotHeight,'none','stroke="'+C.grid+'"')+group('length pTruth pLabel','input',line(x(6),top,x(6),top+plotHeight,C.gold,'stroke-dasharray="4 3"'))+group('width qTruth qLabel','reference',line(left,y(4),left+span,y(4),C.violet,'stroke-dasharray="4 3"'));
    for(const value of [0,6,12])body+=text(x(value),top+plotHeight+21,value,C.muted,13,'text-anchor="middle"');
    for(const value of [0,4,12])body+=text(left-10,y(value)+4,value,C.muted,13,'text-anchor="end"');
    body+=text(left+span/2,top+plotHeight+46,'Length x (cm)',C.cyan,15,'text-anchor="middle"')+text(left,top-12,'Width y (cm)',C.violet,14)+group('length width pTruth qTruth output truthLabel','output',circle(x(p.length),y(p.width),7,r.output?C.mint:C.orange,'stroke="'+C.ink+'" stroke-width="2" data-role="current-input" data-x="'+p.length+'" data-y="'+p.width+'" data-truth="'+r.output+'"'));
    if(!o.compact)body+=text(570,115,'Green: True',C.mint,18)+text(570,147,'Orange: False',C.orange,18)+text(570,191,'x = '+fmt(p.length)+' cm',C.cyan,16)+text(570,217,'y = '+fmt(p.width)+' cm',C.violet,16);
    const b=pinned('logical-connectives',o);if(b)body+=circle(x(b.parameters.length),y(b.parameters.width),9,'none','stroke="'+C.violet+'" stroke-width="2" data-role="baseline-input"')+text(w-22,59,'Pinned: '+b.truthLabel,C.violet,13,'text-anchor="end"');
    body+=rail('logical-connectives',p,o,w,385);
    return frame('logical-connectives',body,o,'Green regions mean True and orange regions mean False for the chosen connective. The point records both panel measurements, not a probability. x=6 and y=4 belong to their respective true tests. NOT depends only on x; its color is constant vertically.',d);
  }
  function quantifierGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?430:490),w=d.width,left=o.compact?52:95,right=w-52,span=right-left,scale=value=>left+span*value/14;
    let body=text(22,30,'Every strip, or at least one?',C.ink,o.compact?19:25)+group('threshold output truthLabel','output',text(22,65,(p.mode==='all'?'∀x∈D P(x)':'∃x∈D P(x)')+' = '+r.truthLabel,r.output?C.mint:C.orange,25));
    body+=text(22,91,'P(x): length x ≥ '+fmt(p.threshold)+' cm',C.cyan,15);
    r.outcomes.forEach((row,i)=>{const y=125+31*i;body+=text(24,y+5,row.length,C.muted,14,'text-anchor="middle"')+line(left,y,right,y,C.grid)+group('domain threshold outcomes qualifyingCount','intermediate',rect(left,y-7,span*row.length/14,14,row.truth?C.mint:C.orange,'data-role="domain-strip" data-length="'+row.length+'" data-truth="'+row.truth+'"')+text(right+12,y+5,row.truth?'✓':'×',row.truth?C.mint:C.orange,18));});
    body+=group('threshold','input',line(scale(p.threshold),111,scale(p.threshold),301,C.cyan,'stroke-width="2" data-role="predicate-boundary"'))+text(left,321,'0',C.muted,12)+text(right,321,'14 cm',C.muted,12,'text-anchor="end"');
    body+=group('qualifyingCount count','intermediate',text(22,351,r.qualifyingCount+' of 6 meet the requirement',C.ink,18));
    body+=group('allTruth allLabel','output',text(22,382,'Every · ∀: '+r.allLabel,r.allTruth?C.mint:C.orange,18))+group('someTruth someLabel','output',text(22,410,'At least one · ∃: '+r.someLabel,r.someTruth?C.mint:C.orange,18));
    const b=pinned('quantifier',o);if(b)body+=line(scale(b.parameters.threshold),111,scale(b.parameters.threshold),301,C.violet,'stroke-width="2" stroke-dasharray="5 4" data-role="baseline-boundary"');
    body+=rail('quantifier',p,o,w,450);
    return frame('quantifier',body,o,'Six known strips share a length scale from 0 to 14 centimetres. A strip qualifies exactly when its endpoint reaches or passes the cyan requirement. Every needs all six; at least one needs a witness. The finite domain is the complete domain of this example.',d);
  }
  function quantifierGraph(p,r,o){
    const d=dimensions(o,o.sceneControl===false?355:415),w=d.width,left=o.compact?65:95,right=w-35,span=right-left,x=value=>left+span*value/14;
    let body=text(22,30,'Truth changes at exact thresholds',C.ink,o.compact?17:24)+text(22,57,'Closed: included · open: excluded',C.muted,13);
    for(const [key,title,cut,top,truthValue]of [['all','Every · ∀',2,88,r.allTruth],['some','At least one · ∃',12,211,r.someTruth]]){
      const yes=top+25,no=top+69,color=key===p.mode?C.gold:C.cyan;
      body+=text(22,top,title,color,16)+text(left-9,yes+5,'True',C.muted,13,'text-anchor="end"')+text(left-9,no+5,'False',C.muted,13,'text-anchor="end"')+line(left,yes,right,yes,C.grid)+line(left,no,right,no,C.grid);
      body+=group((key==='all'?'allTruth allLabel':'someTruth someLabel')+' threshold','output',line(x(0),yes,x(cut),yes,color,'stroke-width="3" data-role="true-segment" data-quantifier="'+key+'" data-start="0" data-end="'+cut+'" data-included-end="true"')+line(x(cut),no,x(14),no,color,'stroke-width="3" data-role="false-segment" data-quantifier="'+key+'" data-start="'+cut+'" data-end="14" data-included-start="false"')+circle(x(cut),yes,5,color,'data-role="closed-endpoint" data-threshold="'+cut+'"')+circle(x(cut),no,5,C.bg,'stroke="'+color+'" stroke-width="2" data-role="open-endpoint" data-threshold="'+cut+'"'));
      body+=group('threshold '+(key==='all'?'allTruth allLabel':'someTruth someLabel')+(key===p.mode?' output truthLabel':''),'input',line(x(p.threshold),yes-7,x(p.threshold),no+7,C.muted,'stroke-dasharray="3 4"')+circle(x(p.threshold),truthValue?yes:no,7,color,'stroke="'+C.ink+'" stroke-width="1.5" data-role="current-truth" data-quantifier="'+key+'" data-threshold="'+p.threshold+'" data-truth="'+truthValue+'"'));
    }
    for(const value of [0,2,12,14])body+=text(x(value),318,value,C.muted,12,'text-anchor="middle"');
    body+=text((left+right)/2,342,'Required length h (cm)',C.cyan,15,'text-anchor="middle"');
    const b=pinned('quantifier',o);if(b){const top=b.parameters.mode==='all'?88:211,v=b.output?top+25:top+69;body+=circle(x(b.parameters.threshold),v,10,'none','stroke="'+C.violet+'" stroke-width="2" data-role="baseline-truth"');}
    body+=rail('quantifier',p,o,w,375);
    return frame('quantifier',body,o,'Each panel has categorical True and False levels. Every is true through h=2 inclusive; at least one is true through h=12 inclusive. The open circles exclude the false endpoints at those exact thresholds. Separate horizontal segments never interpolate truth across a jump.',d);
  }
  function crossGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?410:470),w=d.width,ox=o.compact?138:270,oy=232,s=o.compact?22:32,id=scope(o.id||'cross-product'),point=(x,y)=>[ox+x*s,oy-y*s],O=point(0,0),U=point(r.uX,0),V=point(r.vX,r.vY),UV=point(r.uX+r.vX,r.vY),polygon=[O,U,UV,V].map(([x,y])=>n(x)+','+n(y)).join(' ');
    let body=text(22,30,'Area with an orientation',C.ink,o.compact?21:26)+group('normalComponent output','output',text(22,66,'Signed normal: '+fmt(r.output)+' m²',C.gold,o.compact?23:28))+group('area','output',text(22,94,'Area: '+fmt(r.area)+' m²',C.mint,20));
    body+=`<defs><marker id="${id}-arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6" fill="${C.ink}"/></marker></defs>`;
    body+=line(ox-4*s,oy,ox+8*s,oy,C.grid)+line(ox,oy-4*s,ox,oy+4*s,C.grid)+text(o.compact?320:550,oy+18,'x',C.muted,13)+text(ox+8,oy-4*s+4,'y',C.muted,13);
    body+=group('uLength vLength angle area','intermediate',`<polygon points="${polygon}" fill="${C.mint}" fill-opacity=".25" stroke="${C.mint}" data-role="spanned-parallelogram" data-area="${r.area}"/>`);
    body+=group('uLength uX uY','reference',line(...O,...U,C.cyan,'stroke-width="3" marker-end="url(#'+id+'-arrow)" data-role="u-vector"')+text(U[0]-2,U[1]+20,'u',C.cyan,17));
    body+=group('vLength angle vX vY sine','input',line(...O,...V,C.gold,'stroke-width="3" marker-end="url(#'+id+'-arrow)" data-role="v-vector"')+text(V[0]-15,V[1]-8,'v',C.gold,17));
    const angleY=332;
    body+=group('angle sine','input',text(22,angleY,'θ = '+fmt(p.angle)+'°',C.gold,18));
    body+=group('normalComponent output orientation','output',text(w-22,angleY,r.output>0?'⊙ +z · out':r.output<0?'⊗ −z · in':'0 · no normal',r.output===0?C.muted:C.cyan,20,'text-anchor="end"'));
    body+=text(22,364,'u × v = (0, 0, '+fmt(r.output)+') m²',C.ink,18)+text(22,391,'Both axes share the same metre scale.',C.muted,12);
    const b=pinned('cross-product',o);if(b){const B=b,points=[point(0,0),point(B.uX,0),point(B.uX+B.vX,B.vY),point(B.vX,B.vY)];body+=`<polygon points="${points.map(([x,y])=>n(x)+','+n(y)).join(' ')}" fill="none" stroke="${C.violet}" stroke-width="2" stroke-dasharray="5 4" data-role="baseline-parallelogram"/>`;}
    body+=rail('cross-product',p,o,w,430);
    return frame('cross-product',body,o,'The input vectors and their parallelogram share one metre scale. The xy-plane is the page. A circled dot marks a positive z normal out of the page; a circled cross marks negative z into it. The signed normal component is not the nonnegative area. At a zero cross product there is no nonzero normal vector.',d);
  }
  function stabilityGeometry(p,r,o){
    const d=dimensions(o,o.sceneControl===false?400:460),w=d.width,left=52,right=w-30,centre=(left+right)/2,scale=(right-left)/18,x=value=>centre+value*scale;
    let body=text(22,30,'Does a displacement shrink?',C.ink,o.compact?20:25)+group('output magnitude','output',text(22,66,'e'+sub(p.steps)+' = '+fmt(r.output)+' cm',C.gold,29))+group('multiplier factorMagnitude stabilityLabel','intermediate',text(22,93,r.stabilityLabel+' · |r| = '+fmt(r.factorMagnitude),r.attracting?C.mint:r.lyapunovStable?C.cyan:C.orange,16));
    for(let k=0;k<=8;k++){
      const y=124+k*26;body+=text(28,y+4,k,C.muted,12,'text-anchor="middle"')+line(left,y,right,y,C.grid);
      if(k<=p.steps){const value=r.values[k],keys='values'+(k===0?' initialError':' multiplier')+(k===p.steps?' steps output magnitude':'')+(k===Math.max(0,p.steps-1)?' previous':'');body+=group(keys,k===p.steps?'output':k===0?'reference':'intermediate',rect(Math.min(centre,x(value)),y-6,Math.abs(value)*scale,12,value<0?C.violet:C.cyan,'data-role="displacement-strip" data-step="'+k+'" data-value="'+value+'"')+circle(x(value),y,k===p.steps?5:3,k===p.steps?C.gold:C.ink));}
    }
    body+=line(centre,111,centre,339,C.mint,'stroke-width="1.5" data-role="equilibrium"')+text(left,357,'−9',C.muted,12)+text(centre,357,'0',C.mint,13,'text-anchor="middle"')+text(right,357,'+9 cm',C.muted,12,'text-anchor="end"')+text(22,383,'Same signed length scale at every whole update.',C.muted,13);
    const b=pinned('stability',o);if(b)body+=circle(x(b.output),124+b.parameters.steps*26,8,'none','stroke="'+C.violet+'" stroke-width="2" data-role="baseline-displacement"');
    body+=rail('stability',p,o,w,420);
    return frame('stability',body,o,'Each row shows an exact completed update relative to the green equilibrium at zero. Signed strip lengths use the same fixed −9 to 9 centimetre scale. |r|<1 attracts, |r|=1 keeps magnitude without attraction, and |r|>1 amplifies nonzero perturbations. Classification comes from |eₙ|=|r|ⁿ|e₀|, not from the finite picture. This is not structural stability.',d);
  }
  function coordinateGraph(slug,p,r,o){
    const b=pinned(slug,o),series=[],current=[];let x,y,description;
    if(slug==='cross-product'){
      x={key:'angle',label:'Oriented angle θ',min:-180,max:180,step:.01,unit:'deg',value:p.angle};y={label:'Normal component or area (m²)',min:-16,max:16};
      const points=params=>[...new Set([...Array.from({length:181},(_,i)=>-180+2*i),params.angle])].sort((a,b)=>a-b).map(angle=>({x:angle,y:evaluate(slug,{...params,angle}).output}));
      const live=points(p);series.push({id:'signed-normal',label:'Signed z-component',quantity:'angle normalComponent output',color:C.gold,points:live},{id:'area',label:'Nonnegative area',quantity:'area',color:C.mint,dashed:true,points:live.map(point=>({...point,y:Math.abs(point.y)}))});
      if(b)series.push({id:'baseline',label:'Pinned signed relationship',quantity:'normalComponent output',color:C.violet,dashed:true,points:points(b.parameters)});
      current.push({x:p.angle,y:r.output,label:'Signed normal component',quantity:'angle normalComponent output',color:C.cyan,draggable:o.sceneControl!==false});
      description='The signed z-component follows ab sin θ. The dashed area curve is its absolute value. Both use the same square-metre axis; exact cardinal angles have exact zero or extremal values.';
    }else{
      x={key:'steps',label:'Completed update k',min:0,max:8,step:1,value:p.steps};y={label:'Signed displacement eₖ (cm)',min:-9,max:9};
      series.push({id:'exact-updates',label:'Exact whole updates',quantity:'values initialError multiplier',color:C.cyan,dashed:true,dots:'both',points:r.values.map((value,k)=>({x:k,y:value}))});
      if(b)series.push({id:'baseline',label:'Pinned exact updates',quantity:'values output',color:C.violet,dashed:true,dots:'both',points:b.values.map((value,k)=>({x:k,y:value}))});
      current.push({x:p.steps,y:r.output,label:'Current completed update',quantity:'steps output magnitude',color:C.gold,draggable:o.sceneControl!==false});
      description='Each point is an exact integer update of eₖ₊₁=r eₖ. Dashed joins guide the eye and do not evaluate fractional updates. The fixed signed scale shows decay, bounded oscillation or growth. Analytic classification follows |r|ⁿ, not the finite path.';
    }
    if(b)current.push({x:slug==='cross-product'?b.parameters.angle:b.parameters.steps,y:b.output,label:'Pinned result',quantity:'output',color:C.violet});
    return Plot.render({title:definition(slug).title,description,x,y,series,current,notes:[]},o);
  }
  function render(slug,input,o={}){
    if(!has(slug))return'';const r=evaluate(slug,input);
    if(!r.valid)return frame(slug,text(22,48,'Choose valid inputs',C.gold,24)+text(22,92,'Check the declared ranges and listed options.',C.ink,o.compact?14:20),o,r.errors.map(e=>e.message).join(' '),dimensions(o,150));
    const p=r.parameters;
    if(o.view==='graph')return slug==='logical-connectives'?logicalGraph(p,r,o):slug==='quantifier'?quantifierGraph(p,r,o):coordinateGraph(slug,p,r,o);
    return slug==='logical-connectives'?logicalGeometry(p,r,o):slug==='quantifier'?quantifierGeometry(p,r,o):slug==='cross-product'?crossGeometry(p,r,o):stabilityGeometry(p,r,o);
  }
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
