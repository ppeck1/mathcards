/* One joint law, three information readings. The playground owns the clock. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports,api=factory(node?require('./plot-view.js'):root.AtlasPlotView);
  if(node)module.exports=api;root.AtlasInformationLinks=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const finite=Number.isFinite,zero=value=>value===0?0:value;
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const fields=freeze([
    {key:'bookChance',label:'Book-presence probability q',value:.5,min:0,max:1,step:.01,unit:'probability'},
    {key:'errorChance',label:'Symmetric lamp-error probability e',value:.1,min:0,max:1,step:.01,unit:'probability'},
    {key:'observed',label:'Selected lamp observation',value:'1',type:'select',options:[{value:'1',label:'Lamp on · Y=1'},{value:'0',label:'Lamp off · Y=0'}]}
  ]);
  const setting='X records whether a library tray is empty (0) or holds a book (1); Y records a lamp that is off (0) or on (1). The prior is q=P(X=1), and the same error probability e flips the lamp label for either tray state.';
  const definitions=freeze({
    'joint-distribution':{title:'Joint probability distributions',expression:'P(X=1,Y=1)=q(1−e)',primaryLabel:'Book and lamp-on probability',unit:'probability',limits:'The four joint masses describe pairs of binary states. Row and column sums are marginals, not conditional probabilities. The selected observation only marks a column; it never changes the joint law.'},
    'conditional-entropy':{title:'Conditional entropy',expression:'H(X|Y)=∑ P(Y=y)H(X|Y=y)',primaryLabel:'Average remaining entropy H(X|Y)',unit:'bits',limits:'The primary result averages over both possible lamp observations. A particular observation can increase uncertainty relative to H(X). A zero-probability observation has no conditional distribution or selected entropy; its weighted contribution is zero.'},
    'mutual-information':{title:'Mutual information',expression:'I(X;Y)=H(X)−H(X|Y)',primaryLabel:'Mutual information I(X;Y)',unit:'bits',limits:'Information measures dependence, not accuracy or causality. A perfectly inverted binary lamp is fully informative once its labels are flipped. Selecting a realized lamp value does not change the average mutual information.'}
  });
  const has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug);
  const definition=slug=>{if(!has(slug))throw new RangeError('Unknown information-links model.');return definitions[slug];};
  function defaults(slug){definition(slug);return Object.fromEntries(fields.map(({key,value})=>[key,value]));}
  function controls(slug){definition(slug);return fields.map(({value,...field})=>({...field,...(field.options?{options:field.options.map(option=>({...option}))}:{})}));}
  function specs(slug){return{...definition(slug),setting,axis:'errorChance',views:['geometry','graph'],rendererId:slug+'-visual-model',sweeps:controls(slug).filter(field=>field.type!=='select').map(({key,label,min,max,step})=>({key,label,min,max,step})),readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    for(const key of Object.keys(input))if(!fields.some(field=>field.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const field of fields){const value=Object.hasOwn(input,field.key)?input[field.key]:field.value;
      if(field.type==='select'){if(!field.options.some(option=>option.value===value))errors.push({field:field.key,message:'Choose lamp on or lamp off.'});else parameters[field.key]=value;}
      else if(typeof value!=='number'||!finite(value))errors.push({field:field.key,message:'Enter a finite probability.'});
      else if(value<0||value>1)errors.push({field:field.key,message:'Use a probability from 0 to 1, including both endpoints.'});
      else parameters[field.key]=zero(value);
    }
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  const entropy=probabilities=>zero(probabilities.reduce((total,p)=>p>0?total-p*Math.log2(p):total,0));
  const fmt=value=>finite(value)?String(Number(value.toPrecision(5))).replace('-','−'):'Undefined';
  const pct=value=>fmt(100*value)+'%';
  const bits=value=>fmt(value)+(value===1?' bit':' bits');
  function evaluate(slug,input){
    const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};
    const{bookChance:q,errorChance:e,observed}=checked.parameters,factors=[[1-q,1-e],[1-q,e],[q,e],[q,1-e]],masses=factors.map(([a,b])=>zero(a*b));
    if(factors.some(([a,b],i)=>a>0&&b>0&&masses[i]===0))return{...checked,valid:false,status:'numeric_precision',output:null,unit:definition(slug).unit,errors:[{field:'parameters',code:'numeric_precision',message:'A positive joint mass is too small to represent. Move the probabilities farther from these endpoints.'}]};
    const[p00,p01,p10,p11]=masses,px0=1-q,px1=q,py0=p00+p10,py1=p01+p11,joint=[[p00,p01],[p10,p11]],cells=masses.map((probability,index)=>({x:Math.floor(index/2),y:index%2,probability}));
    const conditionals=[py0,py1].map((probability,y)=>{if(probability===0)return{y,probability,posterior0:null,posterior1:null,entropy:null,contribution:0,defined:false};const posterior0=joint[0][y]/probability,posterior1=joint[1][y]/probability,h=entropy([posterior0,posterior1]);return{y,probability,posterior0,posterior1,entropy:h,contribution:zero(probability*h),defined:true};});
    const hx=entropy([px0,px1]),hy=entropy([py0,py1]),hxy=entropy(masses),hyGivenX=entropy([1-e,e]),given0Contribution=conditionals[0].contribution,given1Contribution=conditionals[1].contribution,hxGivenY=zero(given0Contribution+given1Contribution);
    // Subtraction can leave a negative last bit near independence. Only the
    // proven zero cases and negative roundoff are snapped, never positive mass.
    let mutualInformation=q===0||q===1||e===.5?0:e===0||e===1?hx:hx-hxGivenY;
    if(mutualInformation<0&&mutualInformation>=-32*Number.EPSILON)mutualInformation=0;
    if(!finite(mutualInformation)||mutualInformation<0)return{...checked,valid:false,status:'numeric_precision',output:null,unit:definition(slug).unit,errors:[{field:'parameters',code:'numeric_precision',message:'Information identities cannot be resolved at numeric precision for these inputs.'}]};
    const selected=conditionals[Number(observed)],conditionalDefined=selected.defined?1:0,observationLabel=observed==='1'?'Lamp on':'Lamp off',conditionalStatus=selected.defined?'Defined observation':'Impossible observation',posteriorBookChance=selected.posterior1,selectedEntropy=selected.entropy;
    const result={joint,cells,conditionals,p00,p01,p10,p11,px0,px1,py0,py1,massTotal:masses.reduce((a,b)=>a+b,0),hx,hy,hxy,hxGivenY,hyGivenX,mutualInformation:zero(mutualInformation),given0Contribution,given1Contribution,observationProbability:selected.probability,posteriorBookChance,selectedEntropy,conditionalDefined,observationLabel,conditionalStatus,posteriorLabel:selected.defined?pct(posteriorBookChance):'Impossible observation',selectedEntropyLabel:selected.defined?bits(selectedEntropy):'Undefined: impossible observation',conditional0Label:conditionals[0].defined?pct(conditionals[0].posterior1):'Impossible observation',conditional1Label:conditionals[1].defined?pct(conditionals[1].posterior1):'Impossible observation',given0EntropyLabel:conditionals[0].defined?bits(conditionals[0].entropy):'Undefined',given1EntropyLabel:conditionals[1].defined?bits(conditionals[1].entropy):'Undefined',hxLabel:bits(hx),hxGivenYLabel:bits(hxGivenY),mutualInformationLabel:bits(mutualInformation),channelLabel:e===0?'Perfect lamp: read its label':e===1?'Inverted lamp: flip its label':e===.5?'Uninformative lamp: independent of tray':e<.5?'Noisy lamp: usually agrees with tray':'Noisy lamp: usually reverses tray'};
    return{...checked,...result,output:slug==='joint-distribution'?p11:slug==='conditional-entropy'?hxGivenY:result.mutualInformation,status:'valid',unit:definition(slug).unit};
  }
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const result=evaluate(slug,{...input,errorChance:value});return result.valid?result.output:null;}
  function readout(slug,p,r,{format:f=fmt}={}){
    if(!r.valid)return{expression:'Choose supported inputs',stats:[],insight:r.errors.map(error=>error.message).join(' ')};
    if(slug==='joint-distribution')return{expression:'P(X=1,Y=1) = '+f(p.bookChance)+' × (1 − '+f(p.errorChance)+') = '+f(r.p11),stats:[{label:'BOOK IN TRAY',value:r.px1,note:'P(X=1), a row sum'},{label:'LAMP ON',value:r.py1,note:'P(Y=1), a column sum'},{label:'BOOK AND LAMP ON',value:r.p11,note:'one joint event'}],insight:'Each cell is a pair of states. Add across a row or down a column to obtain a marginal. Selecting a lamp column highlights an observation without changing the four masses.'};
    if(slug==='conditional-entropy')return{expression:'H(X|Y) = '+f(r.given0Contribution)+' + '+f(r.given1Contribution)+' ≈ '+f(r.hxGivenY)+(r.hxGivenY===1?' bit':' bits'),stats:[{label:'AVERAGE REMAINING',value:r.hxGivenY,note:'H(X|Y), weighted over both observations'},{label:'SELECTED OBSERVATION',value:r.observationLabel,note:'probability '+f(r.observationProbability)},{label:'SELECTED ENTROPY',value:r.selectedEntropy===null?'Undefined':f(r.selectedEntropy)+(r.selectedEntropy===1?' bit':' bits'),note:r.conditionalDefined?'H(X|Y='+p.observed+'), one observation':r.conditionalStatus}],insight:'The selected column is renormalized only when its probability is positive. The main result averages both column entropies. A particular observation can increase uncertainty even though conditioning reduces it on average.'};
    return{expression:'I(X;Y) = '+f(r.hx)+' − '+f(r.hxGivenY)+' ≈ '+f(r.mutualInformation)+(r.mutualInformation===1?' bit':' bits'),stats:[{label:'STARTING UNCERTAINTY',value:r.hx,note:'H(X) bits'},{label:'AVERAGE REMAINING',value:r.hxGivenY,note:'H(X|Y) bits'},{label:'INFORMATION LEARNED',value:r.mutualInformation,note:'I(X;Y), equal to I(Y;X)'}],insight:r.channelLabel+'. Information measures dependence: an inverted label can be decoded perfectly. This average is a property of the joint distribution and does not depend on the selected lamp observation.'};
  }
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff'},cellColors=[C.cyan,C.violet,C.violet,C.gold],subs=['₀₀','₀₁','₁₀','₁₁'];
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=value=>Number(value.toFixed(6));
  const scope=value=>'information-'+Array.from(String(value??'scene')).map(c=>/^[a-zA-Z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const rect=(x,y,w,h,color,extra='')=>`<rect x="${n(x)}" y="${n(y)}" width="${n(Math.max(0,w))}" height="${n(Math.max(0,h))}" fill="${color}" ${extra}/>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const circle=(x,y,r,color,extra='')=>`<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${color}" ${extra}/>`;
  const group=(keys,part,body)=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}">${body}</g>`;
  const dimensions=(o,height)=>({width:o.compact?360:760,height});
  function frame(slug,body,o,description,d){const id=scope(o.id||slug);return`<figure class="visualization-frame information-links-scene" data-information-model="${slug}"><svg class="visual-scene" viewBox="0 0 ${d.width} ${d.height}" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${d.width}" height="${d.height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function rail(slug,p,o,w,y){if(o.sceneControl===false)return'';let low=0,high=1;const bounds=o.controlBounds?.errorChance;if(bounds){const a=finite(bounds.min)?Math.max(0,bounds.min):0,b=finite(bounds.max)?Math.min(1,bounds.max):1;if(b>a){low=a;high=b;}}const left=28,right=w-28,at=left+(p.errorChance-low)/(high-low)*(right-left);return group('errorChance','input',`<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="errorChance" data-drag-min="${low}" data-drag-max="${high}" data-drag-x0="${left}" data-drag-x1="${right}" data-drag-step=".01" aria-label="Symmetric lamp-error probability e. Drag horizontally or use arrow keys." aria-valuemin="${low}" aria-valuemax="${high}" aria-valuenow="${p.errorChance}">${line(left,y,right,y,C.muted,'stroke-width="3"')}${circle(at,y,22,'transparent','pointer-events="all"')}${circle(at,y,7,C.cyan)}${text(w/2,y+24,'Lamp-error chance e · '+pct(p.errorChance),C.cyan,14,'text-anchor="middle"')}</g>`);}
  const baseline=(slug,o)=>{const result=o.baseline&&evaluate(slug,o.baseline);return result?.valid?result:null;};
  function jointGeometry(p,r,o){
    const base=o.compact?459:405,d=dimensions(o,base+(o.sceneControl===false?0:60)),w=d.width,left=o.compact?64:84,top=158,cw=o.compact?94:170,ch=78,sumX=o.compact?300:528,b=baseline('joint-distribution',o);
    let body=text(22,30,'Two states, one joint chance',C.ink,o.compact?20:27)+group('p11 output','output',text(22,70,'P(X=1,Y=1) = '+pct(r.p11),C.gold,o.compact?25:31))+text(22,103,'X: book present · Y: lamp on',C.muted,16);
    body+=text(left+cw/2,139,'Y=0 · off',C.cyan,15,'text-anchor="middle"')+text(left+1.5*cw,139,'Y=1 · on',C.cyan,15,'text-anchor="middle"')+text(sumX,139,'Row sum',C.muted,13,'text-anchor="middle"');
    for(const x of [0,1])body+=text(left-12,top+x*ch+35,'X='+x,C.ink,15,'text-anchor="end"');
    r.cells.forEach((cell,index)=>{const x=left+cell.y*cw,y=top+cell.x*ch,keys='cells bookChance errorChance p'+cell.x+cell.y+(index===3?' output':'');body+=group(keys,'intermediate',rect(x+2,y+2,cw-4,ch-4,C.grid,'rx="4" data-role="joint-cell" data-x="'+cell.x+'" data-y="'+cell.y+'" data-probability="'+cell.probability+'"')+text(x+cw/2,y+33,pct(cell.probability),cellColors[index],o.compact?20:25,'text-anchor="middle"')+text(x+cw/2,y+53,'p'+subs[index],C.muted,12,'text-anchor="middle"')+rect(x+9,y+60,(cw-18)*cell.probability,8,cellColors[index],'data-role="joint-mass-bar" data-x="'+cell.x+'" data-y="'+cell.y+'" data-probability="'+cell.probability+'"'));if(b)body+=line(x+9+(cw-18)*b.joint[cell.x][cell.y],y+57,x+9+(cw-18)*b.joint[cell.x][cell.y],y+71,C.violet,'stroke-width="2" data-role="baseline-joint-mass"');});
    body+=group('observed observationProbability','input',rect(left+Number(p.observed)*cw,top,cw,2*ch,'none','rx="4" stroke="'+C.violet+'" stroke-width="2" data-role="observed-column" data-y="'+p.observed+'"'));
    for(const x of [0,1])body+=group('px'+x+' bookChance','reference',text(sumX,top+x*ch+36,pct(r['px'+x]),C.mint,20,'text-anchor="middle"')+text(sumX,top+x*ch+58,'P(X='+x+')',C.muted,11,'text-anchor="middle"'));
    for(const y of [0,1])body+=group('py'+y+' bookChance errorChance','intermediate',text(left+(y+.5)*cw,top+2*ch+32,pct(r['py'+y]),C.mint,20,'text-anchor="middle"')+text(left+(y+.5)*cw,top+2*ch+53,'P(Y='+y+')',C.muted,12,'text-anchor="middle"'));
    const tx=o.compact?22:528,ty=o.compact?402:333;
    body+=group('observed observationProbability conditionalStatus','input',text(tx,ty,r.observationLabel+' selected',C.violet,16)+text(tx,ty+25,'P(Y='+p.observed+') = '+pct(r.observationProbability),C.ink,16));
    body+=group('massTotal','reference',text(22,base-12,'All four joint masses add to 1.',C.muted,14))+rail('joint-distribution',p,o,w,base+19);
    return frame('joint-distribution',body,o,'Four cells describe the state pairs. Bar lengths show joint probabilities on one fixed scale. Add rows or columns for marginals; purple selects one lamp observation.',d);
  }
  function conditionalGeometry(p,r,o){
    const base=o.compact?512:441,d=dimensions(o,base+(o.sceneControl===false?0:60)),w=d.width,left=22,span=o.compact?316:320,avgX=o.compact?22:402,avgSpan=o.compact?316:336,b=baseline('conditional-entropy',o);
    let body=text(22,30,'After seeing the lamp',C.ink,o.compact?18:27)+group('hxGivenY output','output',text(22,70,'H(X|Y) ≈ '+bits(r.hxGivenY),C.gold,o.compact?27:31))+group('hx bookChance','reference',text(22,103,'Before lamp: H(X) = '+bits(r.hx),C.muted,16));
    const selectTop=o.compact?135:153;
    body+=group('observed observationProbability','input',text(left,selectTop,r.observationLabel+' · probability '+pct(r.observationProbability),C.violet,17));
    body+=group('conditionals posteriorBookChance conditionalDefined observed','intermediate',rect(left,selectTop+19,span,26,C.grid,'data-role="conditional-strip-frame"'));
    if(r.conditionalDefined){const selected=r.conditionals[Number(p.observed)];body+=group('conditionals posteriorBookChance observed','intermediate',rect(left,selectTop+19,span*selected.posterior0,26,C.cyan,'data-role="conditional-mass" data-x="0" data-probability="'+selected.posterior0+'"')+rect(left+span*selected.posterior0,selectTop+19,span*selected.posterior1,26,C.mint,'data-role="conditional-mass" data-x="1" data-probability="'+selected.posterior1+'"')+rect(left,selectTop+56,10,10,C.cyan)+text(left+16,selectTop+65,'Empty X=0',C.ink,13)+rect(left+148,selectTop+56,10,10,C.mint)+text(left+164,selectTop+65,'Book X=1',C.ink,13)+text(left,selectTop+91,'P(book | this lamp) = '+r.posteriorLabel,C.ink,18));}
    else body+=group('conditionalDefined conditionalStatus','intermediate',text(left+8,selectTop+39,'Impossible observation',C.violet,16)+text(left,selectTop+91,'No conditional distribution here.',C.ink,16));
    body+=group('selectedEntropy selectedEntropyLabel observed','intermediate',text(left,selectTop+117,'This observation’s entropy',C.muted,14)+text(left+span,selectTop+143,r.conditionalDefined?bits(r.selectedEntropy):'Undefined',C.violet,23,'text-anchor="end"'));
    const headingY=o.compact?306:145,first=o.compact?337:182,gap=o.compact?57:65;
    body+=text(avgX,headingY,'Average both lamp observations',C.ink,o.compact?17:20);
    r.conditionals.forEach((column,y)=>{const at=first+y*gap,label=(y?'On':'Off')+': '+(column.defined?fmt(column.probability)+' × '+fmt(column.entropy)+' = '+fmt(column.contribution)+' bits':'impossible → 0 weighted bits');body+=group('conditionals given'+y+'Contribution py'+y+' errorChance bookChance hxGivenY','intermediate',text(avgX,at,label,y?C.mint:C.cyan,o.compact?13:17)+rect(avgX,at+11,avgSpan*column.contribution,16,y?C.mint:C.cyan,'data-role="conditional-entropy-contribution" data-y="'+y+'" data-value="'+column.contribution+'"')+line(avgX,at+30,avgX+avgSpan,at+30,C.grid));});
    const sumY=o.compact?453:342;
    body+=group('given0Contribution given1Contribution hxGivenY output','output',text(avgX,sumY-14,'H(X|Y) = '+fmt(r.given0Contribution)+' + '+fmt(r.given1Contribution),C.gold,o.compact?16:19)+rect(avgX,sumY,avgSpan*r.given0Contribution,25,C.cyan,'data-role="conditional-sum-part" data-y="0" data-value="'+r.given0Contribution+'"')+rect(avgX+avgSpan*r.given0Contribution,sumY,avgSpan*r.given1Contribution,25,C.mint,'data-role="conditional-sum-part" data-y="1" data-value="'+r.given1Contribution+'"'))+rect(avgX,sumY,avgSpan,25,'none','stroke="'+C.muted+'"')+text(avgX,sumY+48,'0 bits',C.muted,13)+text(avgX+avgSpan,sumY+48,'1 bit',C.muted,13,'text-anchor="end"');
    if(b){const x=avgX+avgSpan*b.hxGivenY;body+=line(x,sumY-6,x,sumY+31,C.violet,'stroke-width="2" stroke-dasharray="4 3" data-role="baseline-conditional-entropy"');}
    body+=rail('conditional-entropy',p,o,w,base+19);
    return frame('conditional-entropy',body,o,'Normalize a column with positive probability. Weight both possible observations, then add their contributions. Lengths use one fixed bits scale.',d);
  }
  function mutualGeometry(p,r,o){
    const base=o.compact?448:385,d=dimensions(o,base+(o.sceneControl===false?0:60)),w=d.width,left=22,span=w-44,b=baseline('mutual-information',o),barY=o.compact?185:174;
    let body=text(22,30,'What does the lamp tell us?',C.ink,o.compact?20:27)+group('mutualInformation output','output',text(22,70,'I(X;Y) ≈ '+bits(r.mutualInformation),C.gold,o.compact?27:31));
    body+=group('hx bookChance','reference',text(22,111,'Before lamp: H(X) = '+bits(r.hx),C.ink,18))+text(22,barY-19,'Information learned + uncertainty remaining',C.muted,o.compact?13:18);
    body+=group('mutualInformation output errorChance bookChance','output',rect(left,barY,span*r.mutualInformation,39,C.gold,'data-role="shared-information" data-value="'+r.mutualInformation+'"'))+group('hxGivenY errorChance bookChance','intermediate',rect(left+span*r.mutualInformation,barY,span*r.hxGivenY,39,C.cyan,'data-role="remaining-information" data-value="'+r.hxGivenY+'"'))+rect(left,barY,span,39,'none','stroke="'+C.muted+'"')+text(left,barY+61,'0 bits',C.muted,13)+text(left+span,barY+61,'1 bit',C.muted,13,'text-anchor="end"');
    const secondX=o.compact?22:407,firstY=o.compact?289:284,secondY=o.compact?356:284;
    body+=group('mutualInformation output','output',text(22,firstY,'Information learned',C.gold,17)+text(22,firstY+29,bits(r.mutualInformation),C.gold,27))+group('hxGivenY','intermediate',text(secondX,secondY,'Uncertainty remaining',C.cyan,17)+text(secondX,secondY+29,bits(r.hxGivenY),C.cyan,27));
    body+=group('errorChance channelLabel','input',text(22,base-18,r.channelLabel,C.muted,o.compact?13:17));
    if(b){const x=left+span*b.mutualInformation;body+=line(x,barY-7,x,barY+47,C.violet,'stroke-width="2" stroke-dasharray="4 3" data-role="baseline-mutual-information"');}
    body+=rail('mutual-information',p,o,w,base+19);
    return frame('mutual-information',body,o,'Gold is information learned; blue is average uncertainty remaining. Their total is the starting tray entropy. All lengths share a fixed zero-to-one-bit scale.',d);
  }
  function graph(slug,p,r,o){
    const isJoint=slug==='joint-distribution',isConditional=slug==='conditional-entropy',b=baseline(slug,o),samples=[...new Set([...Array.from({length:121},(_,i)=>i/120),.5,p.errorChance])].sort((a,b)=>a-b),quantity=isJoint?'p11':isConditional?'hxGivenY':'mutualInformation',series=[{id:quantity,label:isJoint?'P(X=1,Y=1)':isConditional?'H(X|Y)':'I(X;Y)',quantity:'errorChance bookChance '+quantity+' output',color:C.gold,points:samples.map(e=>({x:e,y:curveValue(slug,p,e)}))}],current=[{x:p.errorChance,y:r.output,label:'Selected '+(isJoint?'joint probability':isConditional?'average remaining entropy':'mutual information'),quantity:'errorChance '+quantity+' output',color:C.mint,draggable:o.sceneControl!==false}];
    if(!isJoint)series.push({id:'starting-entropy',label:'Starting uncertainty H(X)',quantity:'hx bookChance',color:C.muted,dashed:true,points:[{x:0,y:r.hx},{x:1,y:r.hx}]});
    if(b){series.push({id:'baseline-curve',label:'Pinned prior family',quantity:'bookChance '+quantity,color:C.violet,dashed:true,points:samples.map(e=>({x:e,y:curveValue(slug,b.parameters,e)}))});current.push({x:b.parameters.errorChance,y:b.output,label:'Pinned result',quantity:quantity+' output',color:C.violet});}
    const title=isJoint?'Joint chance versus lamp error':isConditional?'Average remaining uncertainty':'Information versus lamp error',description=isJoint?'This line is P(X=1,Y=1) versus the continuous error parameter e, with the prior q fixed. It is not a density between tray or lamp outcomes. Selecting a lamp observation leaves the joint curve unchanged.':isConditional?'This curve is the average H(X|Y) versus e, holding q fixed. A selected observation has its own conditional entropy and never changes this average curve. The maximum is H(X) at e=1/2; perfect and inverted lamps leave zero uncertainty.':'This is I(X;Y) versus e, holding the prior q fixed. At e=1/2 the lamp is independent of the tray and information is zero. At e=0 and e=1 the labels can be decoded exactly, giving H(X) information. The selected observation does not change the curve.';
    return Plot.render({title,description,x:{key:'errorChance',label:'Lamp-error probability e',min:0,max:1,step:.01,value:p.errorChance},y:{label:isJoint?'Joint probability':isConditional?'H(X|Y), bits':'I(X;Y), bits',min:0,max:isJoint?1:1.05},series,current,notes:[]},o);
  }
  function render(slug,input,o={}){if(!has(slug))return'';const r=evaluate(slug,input);if(!r.valid)return frame(slug,text(22,46,'Choose valid inputs',C.gold,24)+text(22,89,r.status==='numeric_precision'?'This input is below numeric precision.':'Use probabilities from 0 to 1 and a listed lamp value.',C.ink,o.compact?13:20),o,r.errors.map(error=>error.message).join(' '),dimensions(o,135));return o.view==='graph'?graph(slug,r.parameters,r,o):slug==='joint-distribution'?jointGeometry(r.parameters,r,o):slug==='conditional-entropy'?conditionalGeometry(r.parameters,r,o):mutualGeometry(r.parameters,r,o);}
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
