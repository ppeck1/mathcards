/* Small executable rules; the shared playground owns time and interaction. */
(function(root,factory){
  const node=typeof module==='object'&&module.exports,api=factory(node?require('./plot-view.js'):root.AtlasPlotView);
  if(node)module.exports=api;root.AtlasComputation=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Plot){
  'use strict';
  const finite=Number.isFinite,flag=value=>value?1:0;
  const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
  const choose=(key,label,value,options)=>({key,label,value,type:'select',options:options.map(([value,label])=>({value,label}))});
  const definitions=freeze({
    'turing-machine':{title:'Writable Turing-machine tape',expression:'δ(C,1)=(C,0,L)',axis:'steps',primaryLabel:'Current tape reading',unit:'integer',views:['geometry','graph'],setting:'A deterministic binary incrementer scans a four-bit word, carries left, writes one more and halts. The blank tape extends in both directions.',limits:'The tape reading during a carry is an intermediate value, not the completed increment. The finite displayed window covers these four inputs; the machine model has an unbounded writable tape. No universality or undecidability claim follows from this example.',controls:[{key:'steps',label:'Transitions requested k',value:0,min:0,max:10,step:1,discrete:true,unit:'transitions'},choose('word','Initial binary counter','1011',[['0101','0101 · 5'],['1011','1011 · 11'],['1111','1111 · 15'],['0000','0000 · 0']])]},
    proof:{title:'Formal proof and derivation',expression:'Γ ⊢ r; Γ={p,p→q,q→r}',axis:'steps',primaryLabel:'Accepted proof-prefix lines',unit:'lines',views:['geometry','graph'],setting:'The fixed premises are p, p→q and q→r. A line is justified by membership in these premises or by modus ponens from two earlier justified lines.',limits:'An invalid candidate is not evidence that r is underivable: the chain supplies a valid derivation from the same premises. Syntactic checking is independent of a selected valuation. This small forward calculus is not a complete proof assistant or a proof of completeness.',controls:[{key:'steps',label:'Lines revealed k',value:0,min:0,max:5,step:1,discrete:true,unit:'lines'},choose('plan','Candidate derivation','chain',[['chain','Valid chain'],['wrong-conclusion','Wrong consequent'],['forward-reference','Future citation']]),choose('world','Selected truth assignment','111',Array.from({length:8},(_,i)=>{const word=i.toString(2).padStart(3,'0');return[word,'p='+word[0]+', q='+word[1]+', r='+word[2]];}))]}
  });
  const has=slug=>typeof slug==='string'&&Object.hasOwn(definitions,slug);
  const definition=slug=>{if(!has(slug))throw new RangeError('Unknown computation model.');return definitions[slug];};
  const defaults=slug=>Object.fromEntries(definition(slug).controls.map(({key,value})=>[key,value]));
  const controls=slug=>definition(slug).controls.map(({value,...c})=>({...c,...(c.options?{options:c.options.map(o=>({...o}))}:{})}));
  function specs(slug){const{controls:ignored,...meta}=definition(slug);return{...meta,views:[...meta.views],rendererId:slug+'-visual-model',sweeps:controls(slug).filter(c=>c.type!=='select').map(({key,label,min,max,step,discrete})=>({key,label,min,max,step,discrete})),readout:(p,r,context)=>readout(slug,p,r,context)};}
  function validateParams(slug,input){
    const parameters={},errors=[],fail=message=>({valid:false,parameters,errors:[{field:'parameters',message}],warnings:[]});
    if(!has(slug))return fail('Unknown model.');if(input===undefined)input={};if(!input||typeof input!=='object'||Array.isArray(input))return fail('Parameters must be an object.');
    const fields=definition(slug).controls;
    for(const key of Object.keys(input))if(!fields.some(c=>c.key===key))errors.push({field:key,message:'Unknown parameter.'});
    for(const c of fields){const value=Object.hasOwn(input,c.key)?input[c.key]:c.value;
      if(c.type==='select'){if(!c.options.some(o=>o.value===value))errors.push({field:c.key,message:'Choose one of the listed options.'});else parameters[c.key]=value;}
      else if(typeof value!=='number'||!finite(value)||!Number.isInteger(value))errors.push({field:c.key,message:'Use a finite whole-number step.'});
      else if(value<c.min||value>c.max)errors.push({field:c.key,message:'Use a step from '+c.min+' to '+c.max+'.'});
      else parameters[c.key]=value===0?0:value;
    }
    return{valid:errors.length===0,parameters,errors,warnings:[]};
  }
  const transitions=freeze({S:{'0':['S','0','R'],'1':['S','1','R'],'□':['C','□','L']},C:{'1':['C','0','L'],'0':['H','1','R'],'□':['H','1','R']}});
  const stateNames=freeze({S:'Scan right',C:'Carry left',H:'Halted'});
  const ruleLabel=(q,a,next)=>next?'δ('+q+','+a+')=('+next[0]+','+next[1]+','+next[2]+')':'No transition yet';
  function tapeModel(p){
    const tape=new Map([...p.word].map((bit,position)=>[position,bit]));let state='S',head=0,lastWritePosition=null,lastRuleLabel='No transition yet',readSymbolLabel='None yet',writtenSymbolLabel='None yet',directionLabel='No move yet';
    const snapshot=transitionCount=>{const tapeWord=(tape.has(-1)?tape.get(-1):'')+[0,1,2,3].map(i=>tape.get(i)||'□').join('');return freeze({transitionCount,state,stateLabel:stateNames[state],head,tapeWord,tapeValue:parseInt(tapeWord,2),lastWritePosition,lastRuleLabel,readSymbolLabel,writtenSymbolLabel,directionLabel,cells:Array.from({length:7},(_,i)=>{const position=i-1;return{position,symbol:tape.get(position)||'□',head:position===head,written:position===lastWritePosition};})});};
    const trace=[snapshot(0)];
    for(let t=0;t<p.steps&&state!=='H';t++){
      const symbol=tape.get(head)||'□',next=transitions[state][symbol];lastRuleLabel=ruleLabel(state,symbol,next);readSymbolLabel=symbol;writtenSymbolLabel=next[1];directionLabel=next[2]==='R'?'Right':'Left';lastWritePosition=head;
      if(next[1]==='□')tape.delete(head);else tape.set(head,next[1]);state=next[0];head+=next[2]==='R'?1:-1;trace.push(snapshot(t+1));
    }
    const current=trace.at(-1),halted=flag(state==='H'),inputValue=parseInt(p.word,2),next=state==='H'?null:transitions[state][tape.get(head)||'□'];
    return{...current,word:p.word,steps:p.steps,output:current.tapeValue,inputValue,expectedValue:inputValue+1,halted,trace:freeze(trace),configurationLabel:'('+state+', head '+head+', '+current.tapeWord+')',statusLabel:halted?'Increment complete':'Computation in progress',tapeValueLabel:String(current.tapeValue),finalValueLabel:halted?String(current.tapeValue):'Not halted',nextRuleLabel:next?ruleLabel(state,tape.get(head)||'□',next):'H has no outgoing rule',writtenPositionLabel:lastWritePosition===null?'None yet':String(lastWritePosition),headLabel:String(head),transitionLabel:String(current.transitionCount)};
  }
  const premises=freeze(['p','p→q','q→r']);
  const candidate=plan=>[
    {number:1,formula:'p',rule:'Premise',cites:[]},
    {number:2,formula:'p→q',rule:'Premise',cites:[]},
    {number:3,formula:'q→r',rule:'Premise',cites:[]},
    plan==='chain'?{number:4,formula:'q',rule:'MP',cites:[1,2]}:plan==='wrong-conclusion'?{number:4,formula:'r',rule:'MP',cites:[1,2]}:{number:4,formula:'r',rule:'MP',cites:[5,3]},
    plan==='chain'?{number:5,formula:'r',rule:'MP',cites:[4,3]}:{number:5,formula:'q',rule:'MP',cites:[1,2]}
  ];
  function proofModel(p){
    const[pTruth,qTruth,rTruth]=[...p.world].map(Number),truth={'p':pTruth,'q':qTruth,'r':rTruth,'p→q':flag(!pTruth||qTruth),'q→r':flag(!qTruth||rTruth)};
    let acceptedLines=0,invalidLine=null;
    const lines=candidate(p.plan).map(row=>{
      const visible=row.number<=p.steps;let valid=null,reason='Not revealed';
      if(visible){
        if(invalidLine!==null){valid=false;reason='Earlier line '+invalidLine+' was rejected; this prefix is blocked.';}
        else if(row.rule==='Premise'){valid=premises.includes(row.formula);reason=valid?'Listed in Γ.':'Not a stated premise.';}
        else if(row.cites.some(number=>number>=row.number)){valid=false;reason='A citation must name an earlier justified line.';}
        else {const earlier=candidate(p.plan),a=earlier[row.cites[0]-1]?.formula,b=earlier[row.cites[1]-1]?.formula;valid=Boolean(a&&b&&row.cites.every(number=>number>=1&&number<=acceptedLines)&&((b===a+'→'+row.formula)||(a===b+'→'+row.formula)));reason=valid?'Modus ponens from lines '+row.cites.join(' and ')+'.':'The cited antecedent and implication do not yield this consequent.';}
        if(valid)acceptedLines++;else if(invalidLine===null)invalidLine=row.number;
      }
      return{...row,visible,valid,reason,truth:truth[row.formula],citationLabel:row.cites.length?row.cites.join(', '):'Γ'};
    });
    const complete=flag(p.steps===5&&acceptedLines===5),targetDerived=flag(lines.some(row=>row.number<=acceptedLines&&row.formula==='r')),premisesHold=flag(pTruth&&truth['p→q']&&truth['q→r']);
    const counterexampleCount=Array.from({length:8},(_,i)=>{const[a,b,c]=i.toString(2).padStart(3,'0').split('').map(Number);return flag(a&&(!a||b)&&(!b||c)&&!c);}).reduce((a,b)=>a+b,0);
    return{steps:p.steps,plan:p.plan,world:p.world,output:acceptedLines,acceptedLines,lines:freeze(lines),invalidLine,complete,targetDerived,targetDerivable:1,entailed:flag(counterexampleCount===0),counterexampleCount,pTruth,qTruth,rTruth,premisesHold,conclusionTruth:rTruth,derivationLabel:invalidLine!==null?'Line '+invalidLine+' rejected':complete?'Derivation complete':p.steps?'Justified prefix':'No lines checked',premisesLabel:premisesHold?'All true':'Not all true',conclusionLabel:rTruth?'True':'False',targetLabel:targetDerived?'r derived in this prefix':'r not yet derived in this prefix',nextRuleLabel:invalidLine!==null?'Repair the rejected line':p.steps===5?'All five lines justified':p.steps<3?'Introduce a stated premise':'Apply modus ponens',acceptedLabel:String(acceptedLines),truthLabel:'p='+pTruth+', q='+qTruth+', r='+rTruth,entailmentLabel:'Γ ⊨ r',derivabilityLabel:'Γ ⊢ r'};
  }
  function evaluate(slug,input){const checked=validateParams(slug,input);if(!checked.valid)return{...checked,status:'invalid_parameters',output:null};return{...checked,...(slug==='turing-machine'?tapeModel(checked.parameters):proofModel(checked.parameters)),status:'valid',unit:definition(slug).unit};}
  function curveValue(slug,input,value){if(!has(slug)||!finite(value))return null;const r=evaluate(slug,{...input,steps:value});return r.valid?r.output:null;}
  function readout(slug,p,r){
    if(!r.valid)return{expression:'Choose supported inputs',stats:[],insight:r.errors.map(e=>e.message).join(' ')};
    if(slug==='turing-machine')return{expression:r.lastRuleLabel,stats:[{label:'TAPE READING',value:r.tapeValue,note:r.halted?'Completed increment':'Intermediate value; not the final answer'},{label:'STATE AND HEAD',value:r.state+' · cell '+r.head,note:r.stateLabel},{label:'ACTUAL TRANSITIONS',value:r.transitionCount,note:r.halted?'Halted; later requested steps add no moves':'Read, write, move, change state'}],insight:r.halted?'The initial counter '+r.inputValue+' has become '+r.tapeValue+'. The head has already moved after the final write. H has no outgoing transition.':'Follow the head separately from the gold last-written cell. The finite state tells the machine which rule to apply; the writable tape stores the counter.'};
    return{expression:'Γ={p,p→q,q→r}; '+r.acceptedLines+' justified lines',stats:[{label:'CANDIDATE PREFIX',value:r.derivationLabel,note:r.targetLabel},{label:'SELECTED PREMISES',value:r.premisesLabel,note:r.truthLabel},{label:'SELECTED CONCLUSION r',value:r.conclusionLabel,note:'One valuation, separate from derivation checking'}],insight:r.invalidLine!==null?'This candidate fails at line '+r.invalidLine+'. The same premises still derive r by the valid chain. A true displayed sentence is not automatically a justified proof line.':r.complete?'The derivation uses stated premises and earlier justified lines. It remains a syntactic derivation when a chosen valuation makes a premise false; a true conclusion is guaranteed only when all premises are true.':'A citation must point backward to justified lines. Reveal the chain from p through q to r; changing a truth assignment does not change the syntactic checks.'};
  }
  const C={bg:'#101e2b',grid:'#294352',ink:'#eef8f4',muted:'#a0b5bc',cyan:'#77d8e8',mint:'#c6f276',gold:'#f5cf78',violet:'#b8a1ff',red:'#ff8791'};
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const n=value=>Number(value.toFixed(6));
  const scope=value=>'computation-'+Array.from(String(value??'scene')).map(c=>/^[a-zA-Z0-9-]$/.test(c)?c:'_'+c.codePointAt(0).toString(16)+'_').join('');
  const text=(x,y,value,color=C.muted,size=15,extra='')=>`<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const rect=(x,y,w,h,color,extra='')=>`<rect x="${n(x)}" y="${n(y)}" width="${n(w)}" height="${n(h)}" fill="${color}" ${extra}/>`;
  const line=(x,y,xx,yy,color=C.grid,extra='')=>`<line x1="${n(x)}" y1="${n(y)}" x2="${n(xx)}" y2="${n(yy)}" stroke="${color}" ${extra}/>`;
  const circle=(x,y,r,color,extra='')=>`<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${color}" ${extra}/>`;
  const group=(keys,part,body)=>`<g class="story-cue" data-quantity="${esc(keys)}" data-story-part="${part}">${body}</g>`;
  const dimensions=(o,height)=>({width:o.compact?360:760,height});
  function frame(slug,body,o,description,d){const id=scope(o.id||slug);return`<figure class="visualization-frame computation-scene" data-computation-model="${slug}"><svg class="visual-scene" viewBox="0 0 ${d.width} ${d.height}" role="group" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(definition(slug).title)}</title><desc id="${id}-desc">${esc(description)}</desc><rect width="${d.width}" height="${d.height}" rx="16" fill="${C.bg}"/><g font-family="system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(description)}</figcaption></figure>`;}
  function rail(slug,p,o,w,y){
    if(o.sceneControl===false)return'';const c=controls(slug).find(c=>c.key==='steps'),b=o.controlBounds?.steps;let low=c.min,high=c.max;
    if(b){const a=finite(b.min)?Math.max(low,Math.ceil(b.min)):low,z=finite(b.max)?Math.min(high,Math.floor(b.max)):high;if(z>a){low=a;high=z;}}
    const left=28,right=w-28,at=left+Math.max(0,Math.min(1,(p.steps-low)/(high-low)))*(right-left);
    return group('steps','input',`<g class="scene-handle" role="slider" tabindex="0" style="cursor:ew-resize;touch-action:none" data-drag-param="steps" data-drag-min="${low}" data-drag-max="${high}" data-drag-x0="${left}" data-drag-x1="${right}" data-drag-step="1" aria-label="${esc(c.label)}. Drag horizontally or use arrow keys." aria-valuemin="${low}" aria-valuemax="${high}" aria-valuenow="${p.steps}">${line(left,y,right,y,C.muted,'stroke-width="3"')}${circle(at,y,22,'transparent','pointer-events="all"')}${circle(at,y,7,C.cyan)}${text(w/2,y+25,c.label+' · '+p.steps,C.cyan,14,'text-anchor="middle"')}</g>`);
  }
  const baseline=(slug,o)=>{const r=o.baseline&&evaluate(slug,o.baseline);return r?.valid?r:null;};
  function tapeGeometry(p,r,o){
    const base=o.compact?452:393,d=dimensions(o,base+(o.sceneControl===false?0:60)),w=d.width,cw=o.compact?42:76,left=(w-7*cw)/2,top=151,b=baseline('turing-machine',o);
    let body=text(22,30,'Rewrite a binary counter',C.ink,o.compact?22:28)+group('tapeValue output tapeWord','output',text(22,72,'Tape reads '+r.tapeValue,C.gold,31))+group('inputValue word expectedValue','reference',text(22,103,'Started at '+r.word+' = '+r.inputValue+' · goal '+r.expectedValue,C.muted,16));
    r.cells.forEach((cell,i)=>{
      const x=left+i*cw,fill=cell.written?C.gold:C.grid,ink=cell.written?C.bg:C.ink;
      body+=group('cells tapeWord tapeValue word steps'+(cell.written?' lastWritePosition writtenSymbolLabel':''),'intermediate',rect(x+2,top,cw-4,54,fill,'rx="5" data-role="tape-cell" data-position="'+cell.position+'" data-symbol="'+cell.symbol+'" data-written="'+cell.written+'"')+text(x+cw/2,top+36,cell.symbol,ink,29,'text-anchor="middle"')+text(x+cw/2,top+76,cell.position,C.muted,13,'text-anchor="middle"'));
      if(cell.head)body+=group('head state','input',`<path d="M${n(x+cw/2-8)} ${top-17} L${n(x+cw/2+8)} ${top-17} L${n(x+cw/2)} ${top-5} Z" fill="${C.cyan}" data-role="tape-head" data-position="${cell.position}"/>`+line(x+5,top+57,x+cw-5,top+57,C.cyan,'stroke-width="3"'));
    });
    body+=group('state stateLabel head','input',text(22,266,r.state+' · '+r.stateLabel+' · head '+r.head,C.cyan,o.compact?21:24));
    body+=group('lastRuleLabel readSymbolLabel writtenSymbolLabel directionLabel lastWritePosition','intermediate',text(22,302,r.lastRuleLabel,C.ink,o.compact?20:24)+text(22,329,r.transitionCount?'Read '+r.readSymbolLabel+' · write '+r.writtenSymbolLabel+' · move '+r.directionLabel:'Read → write → move → change state',C.muted,15));
    const footerY=o.compact?370:366;
    body+=group('halted finalValueLabel transitionCount output','output',text(22,footerY,r.halted?'Halted · final value '+r.finalValueLabel:'Still running · tape value is provisional',r.halted?C.mint:C.gold,o.compact?16:19));
    if(o.compact)body+=text(22,397,r.halted?'Blue marks the halted head.':'Blue points to the next read.',C.cyan,14)+text(22,419,'Gold marks the last written cell.',C.gold,14);
    else body+=text(420,302,r.halted?'Blue: halted head position':'Blue: head for next read',C.cyan,16)+text(420,329,'Gold: last write (before head moved)',C.gold,16);
    if(b)body+=group('tapeValue output','reference',text(o.compact?22:420,o.compact?442:365,'Pinned: '+b.tapeWord+' = '+b.tapeValue,C.violet,14));
    body+=rail('turing-machine',p,o,w,base+19);
    return frame('turing-machine',body,o,'The finite state selects a rule. Seven tape cells show the entire visited window for these four inputs; the underlying tape extends both ways. Blue marks the head after the move, gold the last written cell. The counter is final only after H halts.',d);
  }
  function proofGeometry(p,r,o){
    const base=o.compact?547:442,d=dimensions(o,base+(o.sceneControl===false?0:60)),w=d.width,left=22,rowWidth=o.compact?316:360,top=139,gap=47,b=baseline('proof',o);
    let body=text(22,30,'Follow the cited lines',C.ink,o.compact?23:28)+group('acceptedLines output targetDerived','output',text(22,72,r.acceptedLines+' justified lines',C.gold,31))+group('targetDerivable entailed','reference',text(22,105,'Γ={p, p→q, q→r} · target r',C.muted,17));
    r.lines.forEach(row=>{const y=top+(row.number-1)*gap,color=!row.visible?C.muted:row.valid?C.mint:C.red,label=!row.visible?'Not revealed':row.rule==='Premise'?'Premise Γ':'MP '+row.cites.join(', '),last= row.number===Math.min(p.steps,5);
      body+=group('lines acceptedLines steps plan'+(row.rule==='MP'?' citations':''),'intermediate',rect(left,y,rowWidth,39,!row.visible?C.bg:C.grid,'rx="5" stroke="'+(last?color:C.grid)+'" data-role="proof-line" data-line="'+row.number+'" data-formula="'+row.formula+'" data-visible="'+row.visible+'" data-valid="'+row.valid+'"')+text(left+12,y+26,row.number,C.muted,15)+text(left+46,y+28,row.visible?row.formula:'…',color,24)+text(left+rowWidth-12,y+25,label,color,14,'text-anchor="end"'));
      if(row.visible&&row.rule==='MP'&&row.number===p.steps)row.cites.forEach((number,index)=>{if(number<row.number){const lane=left+27+index*8,sourceY=top+(number-1)*gap+20,targetY=y+16+index*8,color=row.valid?(index?C.violet:C.cyan):C.red;body+=group('citations lines','intermediate',`<path data-role="proof-citation" data-from="${number}" data-to="${row.number}" d="M${lane} ${sourceY} L${lane} ${targetY} L${left+42} ${targetY}" fill="none" stroke="${color}" stroke-width="1.7"/>`+circle(lane,sourceY,3,color,'data-role="citation-source" data-line="'+number+'"')+`<path d="M${left+42} ${targetY-3} L${left+46} ${targetY} L${left+42} ${targetY+3} Z" fill="${color}"/>`);}});
    });
    const truthX=o.compact?22:416,truthY=o.compact?419:159;
    body+=group('world pTruth qTruth rTruth premisesHold conclusionTruth','reference',text(truthX,truthY,'Selected valuation',C.violet,17)+text(truthX,truthY+29,r.truthLabel,C.violet,21)+text(truthX,truthY+56,'Premises: '+r.premisesLabel,C.muted,16)+text(truthX,truthY+82,'Conclusion r: '+r.conclusionLabel,C.muted,16));
    const verdictY=o.compact?394:393;
    body+=group('invalidLine complete targetDerived derivationLabel output','output',text(22,verdictY,r.derivationLabel,r.invalidLine!==null?C.red:r.complete?C.mint:C.gold,18));
    if(!o.compact)body+=text(416,287,'Proof checking follows rules.',C.ink,17)+text(416,314,'Truth reads one assignment.',C.muted,17)+text(416,341,'These are separate checks.',C.muted,17);
    if(b)body+=group('acceptedLines output','reference',text(o.compact?22:416,o.compact?535:397,'Pinned prefix: '+b.acceptedLines+' lines',C.violet,14));
    body+=rail('proof',p,o,w,base+19);
    return frame('proof',body,o,'Reveal a candidate derivation one line at a time. Each MP citation must name earlier justified lines with the right antecedent and implication. A rejected line blocks this prefix, while the same premises still derive r by the valid chain. The separate valuation does not affect these syntax checks.',d);
  }
  function graph(slug,p,r,o){
    const tape=slug==='turing-machine',max=tape?10:5,b=baseline(slug,o),points=parameters=>Array.from({length:max+1},(_,steps)=>({x:steps,y:evaluate(slug,{...parameters,steps}).output})),quantity=tape?'tapeValue':'acceptedLines',series=[{id:quantity,label:tape?'Tape reading at whole steps':'Accepted prefix at whole lines',quantity:'steps '+quantity+' output',color:C.gold,dots:true,points:points(p)}],current=[{x:p.steps,y:r.output,label:tape?'Selected tape reading':'Selected accepted prefix',quantity:'steps '+quantity+' output',color:C.mint,draggable:o.sceneControl!==false}];
    if(b){series.push({id:'baseline-curve',label:'Pinned input',quantity:quantity+' output',color:C.violet,dots:true,points:points(b.parameters)});current.push({x:b.parameters.steps,y:b.output,label:'Pinned result',quantity:quantity+' output',color:C.violet});}
    return Plot.render({title:tape?'Tape reading during an increment':'Justification follows the rules',description:tape?'Dots show the current tape numeral after whole requested transitions. Intermediate carry values can fall before the completed increment. No partial transition is a configuration. Once halted, later requested steps repeat the same configuration.':'Dots show the accepted consecutive prefix for each number of revealed lines. There are no fractional proof lines. An invalid candidate stops growing at its first rejected line; this does not refute derivability from the fixed premises.',x:{key:'steps',label:tape?'Transitions requested':'Lines revealed',min:0,max,step:1,value:p.steps},y:{label:tape?'Current tape value (integer)':'Accepted lines (count)',min:0,max:tape?16:5},series,current,notes:['Only discrete samples are drawn; there is no interpolation between configurations.']},o);
  }
  function render(slug,input,o={}){if(!has(slug))return'';const r=evaluate(slug,input);if(!r.valid)return frame(slug,text(22,46,'Choose valid inputs',C.gold,24)+text(22,88,'Use a whole step and listed choices.',C.ink,o.compact?15:21),o,r.errors.map(e=>e.message).join(' '),dimensions(o,135));return o.view==='graph'?graph(slug,r.parameters,r,o):slug==='turing-machine'?tapeGeometry(r.parameters,r,o):proofGeometry(r.parameters,r,o);}
  return Object.freeze({has,defaults,controls,specs,validateParams,evaluate,curveValue,render});
});
