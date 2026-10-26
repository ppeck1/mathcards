/* A bounded reading sequence. Values come from the shared model, never formula text. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasCalculationFlow=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const records={
    'function-composition':[
      ['Border width','x: {{x}} m','Find x in the story and the cyan border bracket.'],
      ['Build the side','2 × {{x}} + 1 → {{intermediate}} m','The violet bracket spans a border, the fixed patch, and a second border.'],
      ['Square the side','{{intermediate}}² → {{output}} m²','Both dimensions change together. The gold outline encloses the resulting area.']
    ],
    'real-logarithm':[
      ['Light ratio','R: {{argument}} ×','The cyan bar measures the exposure ratio against the fixed reference.'],
      ['Count doublings','log₂({{argument}}) → {{output}}','The logarithm converts a multiplication ratio into a count of base-two doublings.'],
      ['Read the stops','{{output}} stops','The gold stop reading measures the ratio in doublings; the bar still measures the original ratio.']
    ],
    derivative:[
      ['Time on the track','t: {{a}} s','The cyan time handle sets the solid cart’s location.'],
      ['Differentiate position','s(t) = t³ → v(t) = 3t²','The violet distance bracket shows position; differentiation gives instantaneous speed.'],
      ['Grow the speed arrow','3 × {{a}}² → {{analytic}} m/s','The gold arrow measures instantaneous speed. Its length differs from the position bracket.']
    ],
    'ratio-scale':[
      ['Target portions','s: {{servings}}','The cyan portion count changes the target batch.'],
      ['Keep each share','{{perServing}} × {{servings}}','The fixed flour per portion is multiplied by the new portion count.'],
      ['Fill the target jar','{{output}} g','The gold level measures the resulting mass on the same scale as the reference jar.']
    ],
    'linear-model':[
      ['Elapsed time','t: {{time}} min','The cyan handle changes how long the fixed flow rate runs.'],
      ['Add the new water','4 × {{time}} → {{increment}} L','The violet added layer measures flow rate multiplied by time.'],
      ['Lift the water surface','20 + {{increment}} → {{output}} L','The gold surface combines the starting water and the newly added layer.']
    ],
    'exponential-change':[
      ['Resize coordinate','n: {{time}}','Whole numbers count completed passes; fractional values interpolate their geometry.'],
      ['Repeat the factor','1200 × 0.8^{{time}}','The same factor acts repeatedly on the current width.'],
      ['Move the photo edge','{{output}} px','The gold edge follows ideal width. Height changes proportionally; export rounding is separate.']
    ]
  };
  const roles=['input','intermediate','output'];
  function stages(story){
    const authored=story.calculation||records[story.slug]?.map((row,index)=>({role:roles[index],label:row[0],template:row[1],description:row[2]}));
    return (authored||[]).map((stage,index)=>{const role=stage.role||roles[index];return Object.freeze({...stage,role,description:stage.description||story.steps?.find(step=>step.focus===role)?.focusDescription||stage.label});});
  }
  const phaseAt=elapsed=>elapsed<650?0:elapsed<1400?1:2;
  function parts(template){let last=0;const result=[];for(const match of String(template).matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)){if(match.index>last)result.push({text:template.slice(last,match.index)});result.push({key:match[1]});last=match.index+match[0].length;}if(last<template.length)result.push({text:template.slice(last)});return result;}
  function mount(host,{story,onPhase,readable,quantityFor=()=>null,formatLiteral=text=>text,reducedMotion=()=>false,now=()=>performance.now(),requestFrame=cb=>requestAnimationFrame(cb),cancelFrame=id=>cancelAnimationFrame(id)}){
    const entries=stages(story),tokens=[],literals=[],buttons=[];let frame=null,started=0,current=-1,running=false,disposed=false;
    host.className='calculation-flow';host.setAttribute('aria-label','Follow the calculation');
    const heading=document.createElement('div');heading.className='calculation-flow-heading';
    const label=document.createElement('span');label.textContent='FOLLOW THE CALCULATION';
    const replay=document.createElement('button');replay.type='button';replay.className='calculation-trace';replay.textContent='Trace it ↗';heading.append(label,replay);host.append(heading);
    const row=document.createElement('div');row.className='calculation-stages';host.append(row);
    entries.forEach((entry,index)=>{
      const button=document.createElement('button');button.type='button';button.className='calculation-stage';button.dataset.flowRole=entry.role;button.setAttribute('aria-pressed','false');
      const title=document.createElement('span');title.className='calculation-stage-label';title.textContent=String(index+1).padStart(2,'0')+' · '+entry.label;
      const expression=document.createElement('span');expression.className='calculation-expression';
      const segments=parts(entry.template);segments.forEach((part,i)=>{if(part.key){const value=document.createElement('span');value.dataset.flowKey=part.key;value.className='calculation-value';expression.append(value);tokens.push({key:part.key,node:value,precision:quantityFor(part.key)?.precision});}else{const node=document.createTextNode(part.text);expression.append(node);literals.push({node,text:part.text,nextRole:quantityFor(segments[i+1]?.key)?.role});}});
      button.append(title,expression);button.onclick=()=>{cancel();select(index,true);};row.append(button);buttons.push(button);
    });
    function select(index,notify=false){if(index===current)return;current=index;buttons.forEach((button,i)=>{const value=String(i===index);if(button.getAttribute('aria-pressed')!==value)button.setAttribute('aria-pressed',value);});host.dataset.flowPhase=entries[index]?.role||'reference';if(notify&&entries[index])onPhase(entries[index]);}
    function cancel(){running=false;if(frame!==null)cancelFrame(frame);frame=null;}
    function tick(time){if(disposed||!running)return;select(phaseAt(Math.max(0,time-started)),true);if(current===2){running=false;frame=null;return;}frame=requestFrame(tick);}
    function begin({restart=false}={}){if(disposed||running&&!restart)return;cancel();if(reducedMotion()){select(2,true);return;}started=now();running=true;current=-1;select(0,true);frame=requestFrame(tick);}
    replay.onclick=()=>begin({restart:true});
    return Object.freeze({begin,cancel,mark(role){const index=entries.findIndex(entry=>entry.role===role);if(index>=0)select(index);else{current=-1;buttons.forEach(button=>button.setAttribute('aria-pressed','false'));}},update(values,reading){tokens.forEach(token=>readable.writeText(token.node,readable.format(values[token.key],token.precision?{settled:true,precision:token.precision}:reading)));literals.forEach(part=>{const text=formatLiteral(part.text,part.nextRole,!reading.settled);if(part.node.nodeValue!==text)part.node.nodeValue=text;});},destroy(){disposed=true;cancel();replay.onclick=null;buttons.forEach(button=>button.onclick=null);}});
  }
  return Object.freeze({stages,phaseAt,parts,mount});
});
