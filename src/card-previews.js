/* Compact illustrations of the installed models, not screenshots of their controls. */
(function (root, factory) {
  'use strict';
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./models.js') : root.AtlasModels, node ? require('./discovery.js') : root.AtlasDiscovery);
  if (node) module.exports = api;
  root.AtlasCardPreviews = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (M, D) {
  'use strict';
  const C = Object.freeze({ bg: '#101e2b', grid: '#294352', ink: '#eef8f3', muted: '#9eb4bf', cyan: '#77d8e8', mint: '#c6f276', gold: '#f5cf78', violet: '#b8a1ff', orange: '#ffb08a' });
  const finite = Number.isFinite;
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const n = value => finite(value) ? Number(value.toFixed(5)) : 0;
  const f = value => finite(value) ? String(Number(value.toPrecision(4))).replace('-', '−') : 'undefined';
  const scope = value => 'atlas-card-' + Array.from(String(value ?? 'preview')).map(c => /^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_').join('');
  const text = (x, y, value, color = C.muted, size = 15, extra = '') => `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" ${extra}/>`;
  const circle = (x, y, r, color, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(r)}" fill="${color}" ${extra}/>`;
  const rect = (x, y, width, height, color, extra = '') => `<rect x="${n(x)}" y="${n(y)}" width="${n(width)}" height="${n(height)}" fill="${color}" ${extra}/>`;
  const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('');
  const curve = (points, color, extra = '') => {
    const width = /\bstroke-width="([^"]+)"/.exec(extra)?.[1] || '3';
    return `<path d="${path(points)}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" ${extra.replace(/\bstroke-width="[^"]+"\s*/, '')}/>`;
  };
  const quantity = (key, value, body, extra = '') => `<g data-preview-quantity="${esc(key)}" data-value="${esc(value)}" ${extra}>${body}</g>`;
  const label = (x, y, value, color = C.ink, size = 18) => text(x, y, value, color, size, 'text-anchor="middle"');
  const arrow = (x1, y1, x2, y2, color = C.muted, extra = '') => {
    const angle = Math.atan2(y2 - y1, x2 - x1), backX = x2 - Math.cos(angle) * 8, backY = y2 - Math.sin(angle) * 8;
    return line(x1, y1, x2, y2, color, 'stroke-width="2.5" ' + extra) + `<path d="M${n(backX + Math.sin(angle) * 4)} ${n(backY - Math.cos(angle) * 4)}L${n(x2)} ${n(y2)}L${n(backX - Math.sin(angle) * 4)} ${n(backY + Math.cos(angle) * 4)}" fill="none" stroke="${color}" stroke-width="2.5"/>`;
  };
  const samples = (from, to, count, compute) => Array.from({ length: count + 1 }, (_, i) => { const x = from + (to - from) * i / count; return compute(x); });
  const axis = (left = 42, top = 36, right = 318, bottom = 146) => line(left, top, left, bottom, C.grid) + line(left, bottom, right, bottom, C.grid);
  const caption = value => label(180, 184, value, C.ink, 17);

  const records = {
    relation: {
      title:'Predicates and relations',
      describe:(p,r)=>`Independent left and right strip supplies both offer lengths 2, 4, 6, 8, 10 and 12 centimetres. Exactly ${r.pairCount} of the 36 ordered pairs meet the total requirement ${f(p.threshold)} cm. The distinguished pair (6,8) totals 14 cm and ${r.exampleTruth?'qualifies':'does not qualify'}. This is an exact count, not a probability.`,
      draw:(p,r)=>[2,4,6,8,10,12].map((y,j)=>[2,4,6,8,10,12].map((x,i)=>rect(39+i*17,31+j*17,13,13,x+y>=p.threshold?C.mint:C.grid,(x===6&&y===8?'stroke="'+C.gold+'" stroke-width="2"':''))).join('')).join('')+label(90,152,'left × right choices',C.muted,12)+label(255,40,'TOTAL REQUIREMENT',C.muted,11)+label(255,67,f(p.threshold)+' cm',C.cyan,23)+quantity('output',r.output,label(255,109,r.output+' qualifying pairs',C.mint,20))+label(255,140,'of 36 ordered choices',C.muted,12)+caption('One property. Two ordered inputs.')
    },
    equivalence: {
      title:'Logical equivalence',
      describe:(p,r)=>`At panel length ${f(p.length)} cm and width ${f(p.width)} cm, P is ${r.pLabel} and Q is ${r.qLabel}. The current De Morgan formulas both have truth value ${r.leftLabel}. Across all four Boolean assignments, mismatch count is ${r.mismatchCount}; equivalence is a separate global result.`,
      draw:(p,r)=>label(180,27,'P = '+r.pLabel+' · Q = '+r.qLabel,C.muted,13)+rect(27,44,139,77,C.cyan,'fill-opacity=".13" rx="7"')+rect(194,44,139,77,C.violet,'fill-opacity=".13" rx="7"')+label(96,71,'¬(P∧Q)',C.cyan,20)+quantity('output',r.output,label(96,103,r.leftLabel,C.ink,23))+label(263,71,'¬P∨¬Q',C.violet,20)+label(263,103,r.rightLabel,C.ink,23)+label(180,91,'≡',C.gold,27)+label(180,150,'All four assignments match',C.mint,19)+caption('Matching formulas, beyond one row.')
    },
    inference: {
      title:'Inference rules and counterexamples',
      describe:(p,r)=>`For the default modus ponens argument, P is ${r.pLabel} and Q is ${r.qLabel}. The conditional premise and P both hold, so the current conclusion Q is ${r.conclusionLabel}. Exhaustive evaluation of the four Boolean assignments finds ${r.counterexampleCount} counterexamples; current conclusion truth is separate from argument validity.`,
      draw:(p,r)=>rect(23,30,143,94,C.cyan,'fill-opacity=".13" rx="7"')+label(95,52,'PREMISES',C.muted,11)+label(95,80,'P → Q: '+r.premise1Label,C.cyan,17)+label(95,107,'P: '+r.premise2Label,C.cyan,17)+arrow(176,77,203,77,C.gold)+label(270,52,'CONCLUSION',C.muted,11)+quantity('output',r.output,label(270,90,'Q: '+r.conclusionLabel,C.mint,23))+label(180,151,r.counterexampleCount+' counterexample rows',C.ink,18)+caption('True premises. A licensed conclusion.')
    },
    torque: {
      title:'Torque about a pivot',
      describe:(p,r)=>`A ${f(p.force)} newton force is applied ${f(p.arm)} metres from a pivot at signed angle ${f(p.angle)} degrees. Its perpendicular force component is ${f(r.perpendicularForce)} newtons, its perpendicular moment arm is ${f(r.momentArm)} metres, and the signed torque is ${f(r.output)} newton metres. Distance and force use distinct labeled scales. No door motion is simulated.`,
      draw:(p,r)=>{
        const pivot=[37,107],handle=[37+p.arm*112,107],tip=[handle[0]+r.forceX*4.5,handle[1]-r.forceY*4.5];
        return line(...pivot,...handle,C.violet,'stroke-width="6"')+circle(...pivot,7,C.gold)+circle(...handle,4,C.violet)+arrow(...handle,...tip,C.cyan)+arrow(...handle,handle[0],handle[1]-r.perpendicularForce*4.5,C.orange)+label(83,133,'r = '+f(p.arm)+' m',C.violet,13)+label(156,45,'F = '+f(p.force)+' N',C.cyan,13)+label(83,158,'F⊥ = '+f(r.perpendicularForce)+' N',C.orange,13)+label(276,58,'SIGNED TORQUE',C.muted,11)+quantity('output',r.output,label(276,92,f(r.output)+' N·m',C.mint,25))+label(276,125,'d⊥ = '+f(r.momentArm)+' m',C.muted,13)+caption('Turn depends on perpendicular force.');
      }
    },
    'logical-connectives': {
      title:'Logical connectives and truth tables',
      describe:(p,r)=>`A workshop panel is ${f(p.length)} centimetres long and ${f(p.width)} centimetres wide. P requires length at least 6 cm; Q requires width at least 4 cm. At the default conjunction, P is ${r.pTruth?'true':'false'}, Q is ${r.qTruth?'true':'false'}, and P and Q is ${r.output?'true':'false'}. Truth values are not probabilities.`,
      draw:(p,r)=>rect(30,130-p.width*14,p.length*14,p.width*14,C.cyan,'fill-opacity=".3" stroke="'+C.cyan+'" stroke-width="2"')+line(114,42,114,142,C.gold,'stroke-width="2" stroke-dasharray="4 3"')+label(76,160,'6 cm required',C.gold,13)+label(245,45,'P: '+(r.pTruth?'True':'False'),C.cyan,19)+label(245,81,'Q: '+(r.qTruth?'True':'False'),C.violet,19)+quantity('output',r.output,label(245,131,'P ∧ Q: '+(r.output?'True':'False'),C.mint,23))+caption('Two tests. One truth condition.')
    },
    quantifier: {
      title:'Universal and existential quantifiers',
      describe:(p,r)=>`The six strips have lengths 2, 4, 6, 8, 10 and 12 centimetres. At threshold ${f(p.threshold)} cm, exactly ${r.qualifyingCount} qualify. The universal claim is ${r.allTruth?'true':'false'} and the existential claim is ${r.someTruth?'true':'false'} over this stated finite domain.`,
      draw:(p,r)=>[2,4,6,8,10,12].map((x,i)=>rect(28,29+i*17,x*12,10,x>=p.threshold?C.mint:C.grid)+label(17,38+i*17,x,C.muted,10)).join('')+quantity('threshold',p.threshold,line(28+p.threshold*12,21,28+p.threshold*12,136,C.gold,'stroke-width="2"'))+label(266,53,'EVERY',C.muted,12)+quantity('output',r.output,label(266,76,r.allTruth?'True':'False',C.cyan,23))+label(266,107,'AT LEAST ONE',C.muted,12)+label(266,131,r.someTruth?'True':'False',C.mint,23)+quantity('qualifyingCount',r.qualifyingCount,label(180,160,r.qualifyingCount+' of 6 meet the cutoff',C.ink,18))+caption('Every strip or at least one?')
    },
    'cross-product': {
      title:'Cross product and oriented area',
      describe:(p,r)=>`In a fixed right-handed frame, u has length ${f(p.uLength)} metres and v has length ${f(p.vLength)} metres at signed angle ${f(p.angle)} degrees. Their cross product has z component ${f(r.normalComponent)} square metres and magnitude ${f(r.area)} square metres. Its positive normal points out of the page.`,
      draw:(p,r)=>{
        const o=[45,131],u=[o[0]+p.uLength*25,o[1]],v=[o[0]+r.vX*25,o[1]-r.vY*25],end=[u[0]+r.vX*25,u[1]-r.vY*25];
        return quantity('area',r.area,`<path d="${path([o,u,end,v])}Z" fill="${C.gold}" fill-opacity=".24" stroke="${C.gold}" stroke-width="1.5"/>`)+arrow(...o,...u,C.cyan)+arrow(...o,...v,C.violet)+label(91,154,'u',C.cyan,17)+label(56,75,'v',C.violet,17)+circle(269,66,20,'none','stroke="'+C.mint+'" stroke-width="2"')+circle(269,66,4,C.mint)+label(269,104,'out of page',C.muted,12)+quantity('output',r.output,label(269,142,'w_z = '+f(r.output),C.mint,23))+caption('Area has magnitude and orientation.');
      }
    },
    stability: {
      title:'Stability of an equilibrium',
      describe:(p,r)=>`Starting error ${f(p.initialError)} centimetres is multiplied by ${f(p.multiplier)} at each of ${p.steps} completed updates. The final signed error is ${f(r.output)} centimetres. This multiplier has magnitude below one, so the exact linear recurrence attracts errors to zero.`,
      draw:(p,r)=>{
        const values=Array.from({length:p.steps+1},(_,k)=>p.initialError*p.multiplier**k),points=values.map((v,k)=>[34+k*292/8,139-v*93]);
        return line(34,139,326,139,C.grid,'stroke-width="2"')+curve(points,C.grid,'stroke-width="2" stroke-dasharray="4 3"')+points.map(([x,y],k)=>circle(x,y,4.5,k===p.steps?C.mint:C.cyan)).join('')+label(236,40,'r = '+f(p.multiplier),C.cyan,20)+quantity('output',r.output,label(236,77,'e₈ = '+f(r.output)+' cm',C.mint,18))+label(236,102,'attracting equilibrium',C.muted,12)+caption('Exact updates toward the same target.');
      }
    },
    'conditional-probability': {
      title:'Conditional probability',
      describe:(p,r)=>`A uniformly sampled location lies on a 100 centimetre strip. Event A covers ${f(p.eventEnd)} centimetres and event B covers ${f(p.windowEnd)} centimetres. Their overlap is ${f(r.overlapLength)} centimetres. Restricting attention to B gives conditional probability ${f(r.output)}, while the unconditional probability of A remains ${f(r.eventProbability)}.`,
      draw:(p,r)=>label(180,24,'KNOWN WINDOW B',C.muted,12)+rect(30,43,300,32,C.grid)+quantity('eventEnd',p.eventEnd,rect(30,43,p.eventEnd*3,32,C.gold,'fill-opacity=".55"'))+quantity('windowEnd',p.windowEnd,rect(30,43,p.windowEnd*3,32,'none','stroke="'+C.cyan+'" stroke-width="3"'))+label(180,99,'Within B: overlap / window',C.cyan,14)+rect(30,116,300,27,C.grid)+quantity('output',r.output,rect(30,116,300*r.output,27,C.mint))+quantity('eventProbability',r.eventProbability,label(180,164,'P(A|B) = '+f(r.output)+' · P(A) = '+f(r.eventProbability),C.mint,19))+caption('Restrict the denominator, keep the event.')
    },
    variance: {
      title:'Variance and standard deviation',
      describe:(p,r)=>`The four known strap lengths are 8, 10, 12 and ${f(p.lastLength)} centimetres. Their mean is ${f(r.mean)} centimetres. Their population variance is ${f(r.variance)} square centimetres, using denominator four, and standard deviation is ${f(r.standardDeviation)} centimetres. Each square uses the same area scale.`,
      draw:(p,r)=>{
        const lengths=r.measurements,squares=r.squaredDeviations,bottom=92;
        return lengths.map((value,i)=>quantity(i===3?'lastLength':'measurement-'+i,value,rect(31+i*76,bottom-value*3,23,value*3,i===3?C.cyan:C.muted))).join('')+quantity('mean',r.mean,line(24,bottom-r.mean*3,316,bottom-r.mean*3,C.gold,'stroke-width="2"'))+squares.map((value,i)=>{const side=Math.sqrt(value)*3;return quantity('square-'+i,value,rect(43+i*76-side/2,143-side,side,side,C.violet,'fill-opacity=".45" data-area-scale="9"'));}).join('')+quantity('output',r.output,label(180,163,'σ² = '+f(r.variance)+' cm²',C.mint,22))+caption('Average squared distance from the mean.');
      }
    },
    recurrence: {
      title:'Recurrence relations',
      describe:(p,r)=>`The reservoir begins with ${f(p.initial)} litres. Each round retains fraction ${f(p.retention)} and then adds ${f(p.addition)} litres. After ${p.rounds} complete rounds, the exact recurrence gives ${f(r.output)} litres. Points represent integer rounds.`,
      draw:(p,r)=>{
        const values=r.values||[p.initial],points=values.map((value,i)=>[34+i*292/12,142-value]);
        return axis(34,34,326,142)+label(180,24,'KEEP A FRACTION, THEN REFILL',C.muted,12)+curve(points,C.grid,'stroke-width="2"')+points.map(([x,y],i)=>quantity('round-'+i,values[i],circle(x,y,4.5,i===points.length-1?C.mint:C.cyan))).join('')+quantity('output',r.output,label(180,165,'v'+p.rounds+' = '+f(r.output)+' L',C.mint,22))+caption('Exact rounds, one rule repeated.');
      }
    },
    set: {
      title:'Sets and membership',
      describe:(p,r)=>`The universe contains peg heights one through twelve. Set A admits ${r.countA} pegs at most ${f(p.maxSize)} centimetres tall; set B admits ${r.countB} pegs at least ${f(p.minSize)} centimetres tall. Their intersection contains ${r.resultIDs.join(', ')} and has cardinality ${r.output}. Set membership and its count are distinct.`,
      draw:(p,r)=>{
        const rows=[['A',r.idsA,C.cyan],['B',r.idsB,C.violet],['R',r.resultIDs,C.mint]];
        return rows.map(([name,ids,color],row)=>label(20,53+row*34,name,color,16)+r.universeIDs.map((u,i)=>circle(49+i*24.5,48+row*34,ids.includes(u)?6:3,ids.includes(u)?color:C.grid)).join('')).join('')+r.universeIDs.map((u,i)=>label(49+i*24.5,140,u,C.muted,10)).join('')+quantity('output',r.output,label(180,163,'|A ∩ B| = '+r.output,C.mint,23))+caption('Combine collections, then count.');
      }
    },
    'population-sample': {
      title:'Population and sample',
      describe:(p,r)=>`The twelve known crate weights have mean ${f(r.populationMean)} kilograms. The four selected crates weigh ${r.sampleValues.map(f).join(', ')} kilograms, with sum ${f(r.sampleSum)} and mean ${f(r.output)}. The selected sample mean differs from the full population mean by ${f(r.meanError)} kilograms.`,
      draw:(p,r)=>{
        const y=v=>143-v*4,selected=new Set(r.sampleIndices);
        return r.populationValues.map((value,i)=>rect(24+i*18,y(value),12,value*4,selected.has(i)?C.mint:C.grid)+label(30+i*18,158,i+1,selected.has(i)?C.mint:C.muted,9)).join('')+line(19,y(r.populationMean),239,y(r.populationMean),C.violet,'stroke-width="2" stroke-dasharray="4 3"')+line(19,y(r.sampleMean),239,y(r.sampleMean),C.mint,'stroke-width="2"')+label(294,38,'SAMPLE MEAN',C.muted,11)+quantity('output',r.output,label(294,69,f(r.output),C.mint,27))+label(294,89,'kg',C.muted,12)+label(294,116,'WHOLE GROUP',C.muted,11)+quantity('populationMean',r.populationMean,label(294,143,f(r.populationMean),C.violet,24))+caption('A chosen part can tell a different story.');
      }
    },
    'computational-complexity': {
      title:'Linear-time full scan',
      describe:(p,r)=>`One inspection per item gives ${r.operationCount} inspections for ${p.itemCount} items. At a stipulated constant cost of ${f(p.costPerItem)} milliseconds per inspection, the time model gives ${f(r.output)} milliseconds. Doubling the input gives ${r.doubledCount} inspections and ${f(r.doubledTime)} milliseconds. The asymptotic claim comes from the algorithm's rule, not this finite picture alone.`,
      draw:(p,r)=>label(180,28,'c = '+f(p.costPerItem)+' ms/item',C.muted,14)+label(43,68,'n = '+p.itemCount,C.cyan,13)+quantity('output',r.output,rect(91,48,r.totalTime*5,23,C.cyan,'rx="4"')+label(91+r.totalTime*5/2,66,f(r.totalTime)+' ms',C.bg,13))+label(43,120,'2n = '+r.doubledCount,C.mint,13)+quantity('doubledTime',r.doubledTime,rect(91,100,r.doubledTime*5,23,C.mint,'rx="4"')+label(91+r.doubledTime*5/2,118,f(r.doubledTime)+' ms',C.bg,13))+caption('One inspection per item: linear work.')
    },
    'directional-derivative': {
      title:'Directional derivative',
      describe:(p,r)=>`At (${f(p.x)}, ${f(p.y)}) the gradient components are ${f(r.partialX)} and ${f(r.partialY)}. The chosen ${f(p.angleDegrees)} degree unit direction has components ${f(r.directionX)} and ${f(r.directionY)}. Their dot product gives directional slope ${f(r.output)}, a rate distinct from height.`,
      draw:(p,r)=>{
        const x=100+p.x*25,y=92-p.y*25;
        return [1,2,3].map(k=>`<ellipse cx="100" cy="92" rx="${k*23}" ry="${k*16}" fill="none" stroke="${C.grid}"/>`).join('')+line(27,92,173,92,C.grid)+line(100,33,100,150,C.grid)+quantity('directionX',r.directionX,arrow(x,y,x+45*r.directionX,y-45*r.directionY,C.mint,'stroke-width="3"'))+circle(x,y,5,C.cyan)+label(262,49,'CHOSEN DIRECTION',C.muted,12)+label(262,80,f(p.angleDegrees)+'°',C.cyan,26)+quantity('output',r.output,label(262,127,f(r.output),C.mint,32))+label(262,150,'local slope',C.muted,13)+caption('Choose a direction. Read its slope.');
      }
    },
    'tangent-plane': {
      title:'Tangent plane',
      describe:(p,r)=>`The local plane at (${f(p.x)}, ${f(p.y)}) predicts target height ${f(r.predictedHeight)} after offsets (${f(p.dx)}, ${f(p.dy)}). The true field height there is ${f(r.actualHeight)}. Signed actual-minus-predicted error is ${f(r.approximationError)}; the slice compares both heights at the same target.`,
      draw:(p,r)=>{
        const x=t=>37+128*t,y=h=>145-(h-2)*44,field=t=>p.c+p.a*(p.x+t*p.dx)**2+p.b*(p.y+t*p.dy)**2;
        return axis(30,36,176,151)+curve(samples(0,1,40,t=>[x(t),y(field(t))]),C.cyan)+curve([[x(0),y(r.baseHeight)],[x(1),y(r.predictedHeight)]],C.gold,'stroke-dasharray="5 4"')+circle(x(0),y(r.baseHeight),5,C.cyan)+circle(x(1),y(r.actualHeight),5,C.cyan)+circle(x(1),y(r.predictedHeight),5,C.gold)+label(266,42,'PLANE PREDICTION',C.muted,12)+quantity('output',r.output,label(266,78,f(r.output),C.gold,26))+label(266,108,'ACTUAL HEIGHT',C.muted,12)+quantity('actualHeight',r.actualHeight,label(266,139,f(r.actualHeight),C.cyan,24))+caption('Nearby prediction, visible error.');
      }
    },
    'gradient-descent': {
      title:'Gradient descent',
      describe:(p,r)=>`Starting at (${f(p.startX)}, ${f(p.startY)}), ${p.iteration} discrete negative-gradient updates with step size ${f(p.stepSize)} reach (${f(r.currentX)}, ${f(r.currentY)}). The objective changes from ${f(r.initialCost)} to ${f(r.output)}. A larger step need not improve the result.`,
      draw:(p,r)=>{
        let x=p.startX,y=p.startY;const points=[[100+x*30,90-y*30]];
        for(let i=0;i<p.iteration;i++){x*=1-p.stepSize*p.a;y*=1-p.stepSize*p.b;points.push([100+x*30,90-y*30]);}
        return [1,2,3].map(k=>`<ellipse cx="100" cy="90" rx="${k*24}" ry="${k*17}" fill="none" stroke="${C.grid}"/>`).join('')+curve(points,C.mint)+points.map(([xx,yy],i)=>circle(xx,yy,i===points.length-1?5:3,i===0?C.cyan:C.mint)).join('')+label(266,44,p.iteration+' UPDATES',C.muted,13)+label(266,78,'η = '+f(p.stepSize),C.cyan,23)+quantity('output',r.output,label(266,124,f(r.output),C.mint,28))+label(266,150,'current error score',C.muted,12)+caption('Follow exact steps downhill.');
      }
    },
    'chain-rule': {
      title: 'Chain rule',
      describe: (p,r) => `Input ${f(p.x)} passes through g to ${f(r.innerValue)}, then through the square rule to ${f(r.composedValue)}. The two local derivative factors ${f(r.innerDerivative)} and ${f(r.outerDerivative)} multiply to ${f(r.chainDerivative)}. Value and sensitivity are different quantities.`,
      draw: (p,r) => {
        const side=Math.sqrt(r.composedValue)*18;
        return label(45,34,'x',C.cyan,17)+quantity('x',p.x,circle(45,84,20,C.cyan,'fill-opacity=".12" stroke="'+C.cyan+'"')+label(45,91,f(p.x),C.cyan,24))+arrow(72,84,120,84,C.grid)+label(161,34,'g(x)',C.gold,17)+quantity('innerValue',r.innerValue,circle(161,84,24,C.gold,'fill-opacity=".12" stroke="'+C.gold+'"')+label(161,91,f(r.innerValue),C.gold,24))+arrow(192,84,237,84,C.grid)+quantity('composedValue',r.composedValue,rect(285-side/2,84-side/2,side,side,C.mint,'fill-opacity=".2" stroke="'+C.mint+'"')+label(285,91,f(r.composedValue),C.mint,24))+label(285,34,'f(g(x))',C.mint,17)+quantity('output',r.output,label(180,151,f(r.innerDerivative)+' × '+f(r.outerDerivative)+' = '+f(r.chainDerivative),C.ink,24))+caption('Multiply the local rates.');
      }
    },
    'partial-derivative': {
      title: 'Partial derivatives',
      describe: (p,r) => `The quadratic field has height ${f(r.height)} at (${f(p.x)}, ${f(p.y)}). Holding y fixed gives the horizontal section. Its tangent slope is ${f(r.partialX)}. Contours and section use the same evaluated field; height and slope have separate meanings.`,
      draw: (p,r) => {
        const px=x=>105+x*28,py=y=>88-y*28,sx=x=>275+x*29,sy=z=>137-(z-1.5)*27;
        const contours=[18,30,42].map(rx=>`<ellipse cx="105" cy="88" rx="${rx}" ry="${n(rx*Math.sqrt(Math.abs(p.a/p.b)))}" fill="none" stroke="${C.grid}"/>`).join('');
        const section=samples(-2,2,32,x=>[sx(x),sy(p.c+p.a*x*x+p.b*p.y*p.y)]);
        return contours+quantity('y',p.y,line(42,py(p.y),171,py(p.y),C.cyan,'stroke-dasharray="4 4"'))+circle(px(p.x),py(p.y),5,C.cyan)+text(45,20,'Hold y fixed',C.cyan,14)+line(213,139,337,139,C.grid)+curve(section,C.mint)+line(sx(p.x-.6),sy(r.height-.6*r.partialX),sx(p.x+.6),sy(r.height+.6*r.partialX),C.gold,'stroke-width="2"')+quantity('height',r.height,circle(sx(p.x),sy(r.height),4,C.cyan))+quantity('output',r.output,label(274,162,'∂F/∂x = '+f(r.partialX),C.gold,17))+caption('One direction. The other held still.');
      }
    },
    gradient: {
      title: 'Gradient',
      describe: (p,r) => `At (${f(p.x)}, ${f(p.y)}), the gradient components are (${f(r.partialX)}, ${f(r.partialY)}), with magnitude ${f(r.gradientNorm)}. The arrow lies in the input plane and points toward greatest local rise; it is distinct from the surface height ${f(r.height)}.`,
      draw: (p,r) => {
        const x=v=>110+v*28,y=v=>88-v*28,contours=[18,30,42].map(rx=>`<ellipse cx="110" cy="88" rx="${rx}" ry="${n(rx*Math.sqrt(Math.abs(p.a/p.b)))}" fill="none" stroke="${C.grid}"/>`).join('');
        return contours+quantity('partialX',r.partialX,arrow(x(p.x),y(p.y),x(p.x+r.partialX),y(p.y+r.partialY),C.mint))+circle(x(p.x),y(p.y),5,C.cyan)+text(210,50,'∇F',C.mint,22)+text(210,83,'('+f(r.partialX)+', '+f(r.partialY)+')',C.mint,18)+text(210,117,'Magnitude',C.muted,13)+quantity('output',r.output,text(210,150,f(r.gradientNorm),C.cyan,27))+caption('The steepest local direction.');
      }
    },
    'linear-combination': {
      title: 'Linear combinations',
      describe: (p,r) => `Scale u = (${f(p.ux)}, ${f(p.uy)}) by ${f(p.r)} and v = (${f(p.vx)}, ${f(p.vy)}) by ${f(p.s)}, then add head to tail. The sum is (${f(r.combinedX)}, ${f(r.combinedY)}). Both components share one drawing scale.`,
      draw: (p,r) => {
        const x=v=>98+v*22,y=v=>133-v*22;
        return line(37,133,262,133,C.grid)+line(98,151,98,30,C.grid)+quantity('firstX',r.firstX,arrow(x(0),y(0),x(r.firstX),y(r.firstY),C.cyan))+quantity('secondX',r.secondX,arrow(x(r.firstX),y(r.firstY),x(r.combinedX),y(r.combinedY),C.gold))+quantity('output',r.output,arrow(x(0),y(0),x(r.combinedX),y(r.combinedY),C.mint))+quantity('combinedY',r.combinedY,text(238,66,'('+f(r.combinedX)+', '+f(r.combinedY)+')',C.mint,23))+text(41,29,'r u',C.cyan,17)+text(222,29,'+ s v',C.gold,17)+caption('Weighted arrows. One sum.');
      }
    },
    basis: {
      title: 'Basis coordinates',
      describe: (p,r) => `The fixed target (${f(p.x)}, ${f(p.y)}) equals ${f(r.r)} times (${f(p.a)}, ${f(p.c)}) plus ${f(r.s)} times (${f(p.b)}, ${f(p.d)}). The basis grid and target share one coordinate frame; changing a basis changes its coordinates, not the target.`,
      draw: (p,r) => {
        const x=v=>66+v*38,y=v=>137-v*38;let grid='';
        for(let i=0;i<=3;i++)grid+=line(x(i*p.a),y(i*p.c),x(i*p.a+3*p.b),y(i*p.c+3*p.d),C.grid)+line(x(i*p.b),y(i*p.d),x(i*p.b+3*p.a),y(i*p.d+3*p.c),C.grid);
        return '<g opacity=".55">'+grid+'</g>'+arrow(x(0),y(0),x(p.a),y(p.c),C.cyan)+arrow(x(0),y(0),x(p.b),y(p.d),C.gold)+quantity('output',r.r,text(251,71,'r = '+f(r.r),C.cyan,22))+quantity('s',r.s,text(251,103,'s = '+f(r.s),C.gold,22))+quantity('targetX',p.x,arrow(x(0),y(0),x(p.x),y(p.y),C.mint))+text(127,33,'Same point',C.mint,16)+caption('One point. A different address.');
      }
    },
    'matrix-product': {
      title: 'Matrix composition',
      describe: (p,r) => `Apply ${p.order==='B_then_A'?'B first, then A':'A first, then B'} to (${f(p.x)}, ${f(p.y)}). The intermediate point is (${f(r.intermediateX)}, ${f(r.intermediateY)}), then (${f(r.finalX)}, ${f(r.finalY)}). Reversing the order gives (${f(r.otherFinalX)}, ${f(r.otherFinalY)}). All three arrows use one scale.`,
      draw: (p,r) => {
        const first=p.order==='B_then_A'?'B first':'A first',last=p.order==='B_then_A'?'A second':'B second';
        return [[p.x,p.y,'Input',C.cyan],[r.intermediateX,r.intermediateY,first,C.gold],[r.finalX,r.finalY,last,C.mint]].map(([vx,vy,name,color],i)=>{const ox=45+i*113,oy=126;return line(ox-20,oy,ox+68,oy,C.grid)+line(ox,oy+16,ox,oy-72,C.grid)+label(ox+13,33,name,color,15)+quantity(i===2?'output':i===1?'intermediateX':'x',vx,arrow(ox,oy,ox+vx*15,oy-vy*15,color))+label(ox+13,154,'('+f(vx)+', '+f(vy)+')',color,16);}).join('')+caption('Two maps. The order matters.');
      }
    },
    vector: {
      title: 'Vectors',
      describe: (p,r) => `The signed components (${p.x}, ${p.y}) locate a vector with Euclidean length ${f(r.norm)}. The horizontal and vertical segments share the arrow's coordinate scale.`,
      draw(p,r) {
        const x=80, y=142, scale=22, xx=x+p.x*scale, yy=y-p.y*scale;
        return line(40,y,215,y)+line(x,30,x,155)+quantity('x',p.x,line(x,y,xx,y,C.cyan,'stroke-width="4"'))+quantity('y',p.y,line(xx,y,xx,yy,C.gold,'stroke-width="4"'))+quantity('output',r.norm,arrow(x,y,xx,yy,C.mint))+circle(xx,yy,5,C.mint)+text(245,78,'Length',C.muted,15)+text(245,115,f(r.norm),C.mint,34)+label(142,162,`(${p.x}, ${p.y})`,C.cyan,16)+caption('Components locate. Length measures.');
      }
    },
    'inner-product': {
      title: 'Dot product',
      describe: (p,r) => `The dot product is ${p.ux} × ${p.vx} + ${p.uy} × ${p.vy} = ${f(r.dot)}. The gold projected arrow lies along the violet reference direction.`,
      draw(p,r) {
        const x=54,y=138,s=38;
        return line(35,y,225,y)+quantity('uNorm',r.uNorm,arrow(x,y,x+p.ux*s,y-p.uy*s,C.violet))+quantity('vNorm',r.vNorm,arrow(x,y,x+p.vx*s,y-p.vy*s,C.cyan))+line(x+p.vx*s,y-p.vy*s,x+r.projectionX*s,y-r.projectionY*s,C.gold,'stroke-dasharray="4 4"')+quantity('projection',r.projection,arrow(x,y,x+r.projectionX*s,y-r.projectionY*s,C.gold))+text(245,76,'u · v',C.muted,20)+quantity('output',r.dot,text(245,117,f(r.dot),C.mint,36))+label(180,184,'Alignment gives a signed result',C.ink,16);
      }
    },
    'matrix-linear-map': {
      title: 'Matrices as linear maps',
      describe: (p,r) => `The matrix maps (${p.x}, ${p.y}) to (${r.mappedX}, ${r.mappedY}). Its columns shear the unit square with signed area factor ${r.determinant}.`,
      draw(p,r) {
        const x=65,y=145,s=50,poly=points=>points.map(([a,b])=>(x+a*s)+','+(y-b*s)).join(' ');
        return line(35,y,220,y)+line(x,25,x,155)+`<polygon points="${poly([[0,0],[1,0],[1,1],[0,1]])}" fill="none" stroke="${C.muted}" stroke-dasharray="4 4"/>`+quantity('determinant',r.determinant,`<polygon points="${poly([[0,0],[p.a,p.c],[p.a+p.b,p.c+p.d],[p.b,p.d]])}" fill="${C.mint}" fill-opacity=".2" stroke="${C.mint}" stroke-width="2"/>`)+quantity('output',r.mappedX,arrow(x,y,x+r.mappedX*s,y-r.mappedY*s,C.cyan))+text(246,72,'Mapped tip',C.muted,15)+text(238,111,`(${r.mappedX}, ${r.mappedY})`,C.cyan,26)+caption('One rule moves arrows and space');
      }
    },
    determinant: {
      title: 'Determinants',
      describe: (p,r) => `The determinant ad − bc is ${f(r.determinant)}. The mapped unit square has area factor ${f(r.area)} with preserved orientation at these defaults.`,
      draw(p,r) {
        const x=82,y=147,s=49,poly=points=>points.map(([a,b])=>(x+a*s)+','+(y-b*s)).join(' ');
        return line(45,y,212,y)+line(x,25,x,158)+`<polygon points="${poly([[0,0],[1,0],[1,1],[0,1]])}" fill="none" stroke="${C.muted}" stroke-dasharray="4 4"/>`+quantity('output',r.determinant,`<polygon points="${poly([[0,0],[p.a,p.c],[p.a+p.b,p.c+p.d],[p.b,p.d]])}" fill="${C.mint}" fill-opacity=".25" stroke="${C.mint}" stroke-width="2"/>`)+arrow(x,y,x+p.a*s,y-p.c*s,C.violet)+arrow(x,y,x+p.b*s,y-p.d*s,C.gold)+text(232,71,'Signed area',C.muted,15)+text(240,112,'× '+f(r.determinant),C.mint,34)+caption('Area factor and orientation');
      }
    },
    function: {
      title: 'Function',
      describe: (p, r) => `The same rule multiplies input ${f(p.x)} by ${f(p.a)} to give ${f(r.scaled)}, then adds ${f(p.b)} to give ${f(r.output)}. The bars share one signed length scale.`,
      draw(p, r) {
        const rows = [{ key: 'x', value: p.x, y: 55, color: C.cyan, label: 'x' }, { key: 'scaled', value: r.scaled, y: 98, color: C.gold, label: 'ax' }, { key: 'output', value: r.output, y: 141, color: C.mint, label: 'ax + b' }];
        return rows.map(row => quantity(row.key, row.value, text(35, row.y + 5, row.label, row.color, 17) + line(108, row.y, 305, row.y) + rect(108, row.y - 9, row.value * 31, 18, row.color, 'rx="4"') + text(318, row.y + 6, f(row.value), row.color, 20, 'text-anchor="end"'))).join('') + caption('One input. One rule. One output.');
      }
    },
    exponentiation: {
      title: 'Exponentiation',
      describe: (p, r) => `Base ${f(p.base)} raised to exponent ${f(p.exponent)} gives ${f(r.output)}. The larger square has ${f(r.output)} times the area of the one-unit reference square.`,
      draw(p, r) {
        const unit = 32, side = unit * Math.sqrt(r.output);
        return quantity('reference', 1, rect(48, 141 - unit, unit, unit, C.cyan, 'rx="3" fill-opacity=".2" stroke="' + C.cyan + '" stroke-width="2"') + label(64, 163, '1', C.cyan, 17)) + arrow(103, 108, 178, 108, C.gold) + label(139, 88, '× ' + f(r.output), C.gold, 17) + quantity('output', r.output, rect(246 - side / 2, 141 - side, side, side, C.mint, 'rx="4" fill-opacity=".27" stroke="' + C.mint + '" stroke-width="2" data-area-scale="' + unit * unit + '"') + label(246, 163, f(r.output), C.mint, 17)) + caption(`${f(p.base)}^${f(p.exponent)} = ${f(r.output)} · area grows`);
      }
    },
    limit: {
      title: 'Limit',
      describe: (p, r) => `The line has a missing point at input ${f(p.a)}, output ${f(r.output)}. Left and right probe values ${f(r.leftValue)} and ${f(r.rightValue)} approach that same value. The hollow point remains undefined.`,
      draw(p, r) {
        const px = value => 180 + (value - p.a) * 100, py = value => 105 - (value - r.output) * 46;
        return axis(42, 36, 318, 146) + curve([[50, py(r.output - 1.3)], [310, py(r.output + 1.3)]], C.mint) + quantity('leftValue', r.leftValue, circle(px(r.leftX), py(r.leftValue), 6, C.cyan)) + quantity('rightValue', r.rightValue, circle(px(r.rightX), py(r.rightValue), 6, C.gold)) + arrow(107, 130, 162, 111, C.cyan) + arrow(253, 80, 199, 99, C.gold) + quantity('output', r.output, circle(180, 105, 9, C.bg, 'stroke="' + C.mint + '" stroke-width="3" data-role="excluded-point"') + text(195, 130, f(r.output), C.mint, 22)) + caption('A missing point can have a limit');
      }
    },
    'signed-accumulation': {
      title: 'Signed accumulation',
      describe: (p, r) => `The velocity line crosses zero. Positive area is ${f(r.positiveArea)} metres and negative area has magnitude ${f(r.negativeArea)} metres. Net displacement is ${f(r.output)} metres while total distance is ${f(r.distance)} metres.`,
      draw(p, r) {
        const px = t => 50 + t * 64, py = v => 99 - v * 22, crossing = -p.initial / p.rate;
        return line(42, 99, 319, 99, C.muted) + quantity('positiveArea', r.positiveArea, `<path d="${path([[px(0), 99], [px(0), py(p.initial)], [px(crossing), 99]])}Z" fill="${C.mint}" fill-opacity=".3"/>`) + quantity('negativeArea', r.negativeArea, `<path d="${path([[px(crossing), 99], [px(p.time), py(r.velocity)], [px(p.time), 99]])}Z" fill="${C.orange}" fill-opacity=".3"/>`) + curve([[px(0), py(p.initial)], [px(p.time), py(r.velocity)]], C.cyan) + label(102, 84, '+' + f(r.positiveArea), C.mint, 20) + label(235, 126, '−' + f(r.negativeArea), C.orange, 20) + quantity('output', r.output, caption(`Net ${f(r.output)} m · distance ${f(r.distance)} m`));
      }
    },
    'integral-accumulation': {
      title: 'Integration and accumulation',
      describe: (p, r) => `The shaded velocity-time triangle has area ${f(r.output)} metres, the distance accumulated in ${f(p.time)} seconds from rest. Its endpoint velocity is ${f(r.velocity)} metres per second.`,
      draw(p, r) {
        const points = [[51, 146], [306, 146], [306, 48]];
        return axis(50, 30, 322, 146) + quantity('output', r.output, `<path d="${path(points)}Z" fill="${C.mint}" fill-opacity=".27"/>` + label(236, 118, f(r.output) + ' m', C.mint, 25)) + curve([[51, 146], [306, 48]], C.cyan) + line(306, 48, 306, 146, C.cyan, 'stroke-dasharray="4 5"') + text(307, 39, f(r.velocity) + ' m/s', C.cyan, 15, 'text-anchor="end"') + caption('Rate becomes accumulated area');
      }
    },
    'quadratic-optimization': {
      title: 'Quadratic optimization',
      describe: (p, r) => `With perimeter ${f(p.perimeter)} metres, the default ${f(p.width)} by ${f(r.otherSide)} metre square encloses ${f(r.output)} square metres, the maximum of the area parabola.`,
      draw(p, r) {
        const side = 79, half = p.perimeter / 2, px = x => 179 + x / half * 136, py = area => 146 - area / r.maxArea * 90;
        return quantity('output', r.output, rect(45, 54, side, side, C.mint, 'fill-opacity=".23" stroke="' + C.mint + '" stroke-width="2"') + label(84.5, 102, f(r.output), C.mint, 23)) + label(84, 152, `${f(p.width)} × ${f(r.otherSide)}`, C.muted, 16) + axis(176, 39, 321, 147) + curve(samples(0, half, 40, x => [px(x), py(x * (half - x))]), C.cyan) + quantity('maxArea', r.maxArea, circle(px(r.optimumWidth), py(r.maxArea), 6, C.gold) + text(260, 49, 'max', C.gold, 15)) + caption('A fixed boundary. A largest area.');
      }
    },
    'complex-multiplication': {
      title: 'Complex multiplication',
      describe: (p, r) => `Multiplying the complex vector 2+i by ${f(p.real)}+${f(p.imag)}i gives ${f(r.realPart)}+${f(r.imagPart)}i. The arrows share the same real/imaginary scale, so rotation and enlargement are both visible.`,
      draw(p, r) {
        const ox = 136, oy = 143, k = 31;
        return line(48, oy, 306, oy, C.grid) + line(ox, 27, ox, 159, C.grid) + quantity('original', 0, arrow(ox, oy, ox + 2 * k, oy - k, C.cyan) + text(208, 117, '2 + i', C.cyan, 18)) + quantity('output', r.output, arrow(ox, oy, ox + r.realPart * k, oy - r.imagPart * k, C.mint) + text(179, 49, `${f(r.realPart)} + ${f(r.imagPart)}i`, C.mint, 21)) + `<path d="M184 119A54 54 0 0 0 157 94" fill="none" stroke="${C.gold}" stroke-width="2" stroke-dasharray="3 4"/>` + caption('One multiplication rotates and scales');
      }
    },
    'bayes-theorem': {
      title: 'Bayes’ theorem',
      describe: (p, r) => `Among flagged parts, true flags and false alarms have equal shares at the default inputs, so the posterior defect probability is ${f(r.output)}. The bar renormalizes the flagged groups only.`,
      draw(p, r) {
        const width = 258, total = r.positiveRate, ratio = r.truePositive / total;
        return label(180, 48, 'Among the flagged parts', C.muted, 16) + quantity('truePositive', r.truePositive, rect(51, 70, width * ratio, 46, C.mint, 'rx="3"')) + quantity('falseAlarm', r.falseAlarm, rect(51 + width * ratio, 70, width * (1 - ratio), 46, C.orange, 'rx="3"')) + label(51 + width * ratio / 2, 99, 'defect', C.bg, 17) + label(51 + width * ratio + width * (1 - ratio) / 2, 99, 'good', C.bg, 17) + quantity('output', r.output, label(180, 151, f(100 * r.output) + '% are defective', C.mint, 23)) + caption('A flag changes what you know');
      }
    },
    'graph-theory': {
      title: 'Graph theory',
      describe: (p, r) => `The highlighted route ${r.route} has shortest travel time ${f(r.output)} minutes. The adjustable bridge edge has travel time ${f(p.bridge)} minutes. Lines represent connections, not geometric distances.`,
      draw(p, r) {
        const nodes = { A: [52, 94], B: [157, 42], C: [173, 140], D: [308, 94] }, edge = (a, b, value, active, dx = 0, dy = 0) => line(...nodes[a], ...nodes[b], active ? C.mint : C.grid, 'stroke-width="' + (active ? 4 : 2) + '"') + label((nodes[a][0] + nodes[b][0]) / 2 + dx, (nodes[a][1] + nodes[b][1]) / 2 + dy, value, active ? C.mint : C.muted, 16);
        let body = edge('A', 'B', 3, false, 0, -9) + edge('B', 'D', 7, false, 0, -9) + edge('B', 'C', p.bridge, false, 15, 1) + edge('A', 'C', 6, true, -2, 18) + edge('C', 'D', 2, true, 0, 20);
        for (const [key, [x, y]] of Object.entries(nodes)) body += circle(x, y, 17, C.bg, 'stroke="' + C.cyan + '" stroke-width="2"') + label(x, y + 6, key, C.ink, 17);
        return body + quantity('output', r.output, caption(`Shortest route: ${f(r.output)} minutes`));
      }
    },
    resonance: {
      title: 'Resonance',
      describe: (p, r) => `The response curve peaks near the natural frequency. At drive ratio ${f(p.frequency)} and damping ${f(p.damping)}, response amplitude is ${f(r.output)}. Positive damping keeps the response finite.`,
      draw(p, r) {
        const px = x => 36 + x * 143, py = y => 148 - y * 39, points = samples(.2, 2, 75, x => [px(x), py(M.evaluate('resonance', { ...p, frequency: x }).output)]);
        return axis(41, 28, 322, 148) + curve(points, C.mint) + line(px(p.frequency), 148, px(p.frequency), py(r.output), C.gold, 'stroke-dasharray="4 5"') + quantity('output', r.output, circle(px(p.frequency), py(r.output), 7, C.gold) + text(211, 61, f(r.output) + '×', C.gold, 24)) + caption('A small drive. A larger response.');
      }
    },
    'chaos-theory': {
      title: 'Chaos theory',
      describe: (p, r) => `Two exact logistic iterates start ${f(p.delta)} apart. Their separation at generation ${f(p.generation)} is ${f(r.output)}. The joined lines guide the eye between discrete integer generations.`,
      draw(p, r) {
        const count = 26, points = values => values.slice(0, count + 1).map((value, i) => [40 + i * 10.7, 147 - value * 115]);
        return axis(39, 28, 321, 147) + curve(points(r.orbitA), C.cyan, 'stroke-width="2.4"') + curve(points(r.orbitB), C.gold, 'stroke-width="2.4"') + quantity('generation', p.generation, line(40 + p.generation * 10.7, 28, 40 + p.generation * 10.7, 147, C.violet, 'stroke-dasharray="4 5"')) + quantity('output', r.output, caption('Nearby starts. Different futures.'));
      }
    },
    'fractal-geometry': {
      title: 'Fractal geometry',
      describe: (p, r) => `This finite Koch outline shows completed refinement level ${f(r.completedDepth)}. Its ${f(r.segmentCount)} segments have total perimeter ${f(r.output)} metres. It is a finite construction, not an infinite completed fractal.`,
      draw(p, r) {
        const points = [];
        for (const point of D.kochPoints(p.depth, p.length)) {
          while (points.length > 1) {
            const a = points[points.length - 2], b = points[points.length - 1];
            if (Math.abs((b[0] - a[0]) * (point[1] - b[1]) - (b[1] - a[1]) * (point[0] - b[0])) > 1e-12) break;
            points.pop();
          }
          points.push(point);
        }
        const xs = points.map(point => point[0]), ys = points.map(point => point[1]), xmin = Math.min(...xs), xmax = Math.max(...xs), ymin = Math.min(...ys), ymax = Math.max(...ys), scale = Math.min(225 / (xmax - xmin), 121 / (ymax - ymin));
        const mapped = points.map(([x, y]) => [180 + (x - (xmin + xmax) / 2) * scale, 89 + (y - (ymin + ymax) / 2) * scale]);
        return quantity('output', r.output, `<path d="${path(mapped)}Z" fill="${C.cyan}" fill-opacity=".075" stroke="${C.cyan}" stroke-width="1.8" stroke-linejoin="round"/>`) + caption(`A pattern inside the pattern · level ${r.completedDepth}`);
      }
    },
    'wave-interference': {
      title: 'Wave interference',
      describe: (p, r) => `Two waves of amplitude ${f(p.amplitude)} and phase difference ${f(p.phase)} add point by point. The brighter sum has amplitude ${f(r.output)}, distinct from its value at a single point.`,
      draw(p, r) {
        const wave = compute => samples(0, Math.PI * 2, 60, x => [34 + x / (Math.PI * 2) * 292, 94 - compute(x) * 34]);
        return line(34, 94, 326, 94, C.grid) + curve(wave(x => p.amplitude * Math.sin(x)), C.cyan, 'stroke-opacity=".6"') + curve(wave(x => p.amplitude * Math.sin(x + p.phase)), C.violet, 'stroke-opacity=".6"') + quantity('output', r.output, curve(wave(x => p.amplitude * (Math.sin(x) + Math.sin(x + p.phase))), C.mint, 'stroke-width="4"')) + caption('Two waves. Their pointwise sum.');
      }
    },
    probability: {
      title: 'Probability',
      describe: (p, r) => `The seven bars are exact binomial probabilities for zero through six successes with success chance ${f(p.chance)}. The expected number of successes is ${f(r.output)}, not a guaranteed observation.`,
      draw(p, r) {
        let body = line(38, 145, 323, 145, C.grid);
        for (const [i, probability] of r.distribution.entries()) body += quantity('probability-' + i, probability, rect(47 + i * 40, 145 - probability * 320, 24, probability * 320, i === r.output ? C.mint : C.cyan, 'rx="3" fill-opacity="' + (i === r.output ? '.9' : '.46') + '"') + label(59 + i * 40, 163, i, C.muted, 13));
        return body + quantity('output', r.output, caption(`Expected successes: ${f(r.output)} of ${r.trials}`));
      }
    },
    'vector-rotation': {
      title: 'Vector rotation',
      describe: (p, r) => `A vector of length ${f(p.radius)} metres rotates through ${f(p.angle)} degrees. Its horizontal component is ${f(r.x)} metres and vertical component ${f(r.y)} metres. The circle preserves vector length.`,
      draw(p, r) {
        const ox = 156, oy = 100, k = 31, xx = ox + r.x * k, yy = oy - r.y * k;
        return circle(ox, oy, p.radius * k, 'none', 'stroke="' + C.grid + '" stroke-width="1.5"') + line(61, oy, 281, oy, C.grid) + line(ox, 27, ox, 155, C.grid) + quantity('x', r.x, line(ox, oy, xx, oy, C.gold, 'stroke-width="3"')) + quantity('y', r.y, line(xx, oy, xx, yy, C.violet, 'stroke-width="3" stroke-dasharray="4 4"')) + quantity('output', r.output, arrow(ox, oy, xx, yy, C.mint)) + text(238, 56, f(p.angle) + '°', C.mint, 24) + caption('Turn the vector. Keep its length.');
      }
    },
    'pythagorean-theorem': {
      title: 'Pythagorean theorem',
      describe: (p, r) => `A right triangle has legs ${f(p.a)} and ${f(p.b)} metres and hypotenuse ${f(r.output)} metres. Its side lengths use a common scale; the squares of the legs sum to the square of the hypotenuse.`,
      draw(p, r) {
        const k = 24, x = 104, y = 148, xx = x + p.a * k, yy = y - p.b * k;
        return `<path d="${path([[x, y], [xx, y], [xx, yy]])}Z" fill="${C.mint}" fill-opacity=".1" stroke="${C.grid}" stroke-width="2"/>` + quantity('a', p.a, line(x, y, xx, y, C.cyan, 'stroke-width="3"') + label((x + xx) / 2, 168, f(p.a), C.cyan, 18)) + quantity('b', p.b, line(xx, y, xx, yy, C.violet, 'stroke-width="3"') + text(xx + 12, (y + yy) / 2 + 6, f(p.b), C.violet, 18)) + quantity('output', r.output, line(x, y, xx, yy, C.mint, 'stroke-width="3"') + text((x + xx) / 2 - 25, (y + yy) / 2, f(r.output), C.mint, 24)) + `<path d="M${xx - 13} ${y}V${y - 13}H${xx}" fill="none" stroke="${C.muted}"/>` + caption(`${f(r.aSquared)} + ${f(r.bSquared)} = ${f(r.cSquared)}`);
      }
    },
    'ratio-scale': {
      title: 'Ratio and scale',
      describe: (p, r) => `The same flour-per-portion ratio scales ${f(p.amount)} grams for ${f(p.baseServings)} servings to ${f(r.output)} grams for ${f(p.servings)} servings. The two jars share one mass-to-height scale.`,
      draw(p, r) {
        const scale = .18, jar = (x, value, color) => rect(x, 43, 74, 107, C.grid, 'rx="8" fill-opacity=".15" stroke="' + C.grid + '" stroke-width="2"') + rect(x + 5, 145 - value * scale, 64, value * scale, color, 'rx="4" fill-opacity=".37"') + label(x + 37, 133 - value * scale, f(value) + ' g', color, 18);
        return quantity('amount', p.amount, jar(49, p.amount, C.cyan)) + quantity('output', r.output, jar(237, r.output, C.mint)) + arrow(144, 101, 218, 101, C.gold) + label(181, 80, '× ' + f(r.factor), C.gold, 18) + caption('More portions. The same proportion.');
      }
    },
    'linear-model': {
      title: 'Linear model',
      describe: (p, r) => `The tank begins with ${f(p.initial)} litres and gains ${f(p.rate)} litres each minute. After ${f(p.time)} minutes the added volume is ${f(r.increment)} litres and total volume ${f(r.output)} litres.`,
      draw(p, r) {
        const scale = 1.9, left = 57, top = 36, bottom = 148;
        return rect(left, top, 114, bottom - top, C.grid, 'rx="8" fill-opacity=".13" stroke="' + C.grid + '" stroke-width="2"') + quantity('initial', p.initial, rect(left + 5, bottom - p.initial * scale, 104, p.initial * scale - 5, C.cyan, 'fill-opacity=".28"')) + quantity('increment', r.increment, rect(left + 5, bottom - r.output * scale, 104, r.increment * scale, C.mint, 'fill-opacity=".38"')) + line(left + 3, bottom - p.initial * scale, left + 111, bottom - p.initial * scale, C.cyan, 'stroke-dasharray="4 4"') + arrow(222, 62, 222, 119, C.mint) + label(268, 91, '+' + f(p.rate) + ' L/min', C.mint, 17) + quantity('output', r.output, caption(`${f(p.initial)} + ${f(p.rate)} × ${f(p.time)} = ${f(r.output)} L`));
      }
    },
    'exponential-change': {
      title: 'Exponential change',
      describe: (p, r) => `An image width of ${f(p.initial)} pixels is multiplied by ${f(p.factor)} for each of ${f(p.time)} resize passes, giving ${f(r.output)} pixels. Nested image frames preserve the aspect ratio; width, not area, follows the multiplier.`,
      draw(p, r) {
        const scale = .13, height = width => width * 2 / 3, width = r.output * scale, original = p.initial * scale, bottom = 35 + height(original);
        const mountains = [[60, bottom - 5], [55 + width * .25, bottom - height(width) * .6], [55 + width * .52, bottom - height(width) * .28], [55 + width * .75, bottom - height(width) * .75], [50 + width, bottom - 5]];
        return quantity('initial', p.initial, rect(55, 35, original, height(original), 'none', 'rx="5" stroke="' + C.grid + '" stroke-width="2" stroke-dasharray="5 5"')) + quantity('output', r.output, rect(55, bottom - height(width), width, height(width), C.mint, 'rx="4" fill-opacity=".2" stroke="' + C.mint + '" stroke-width="2"') + curve(mountains, C.cyan, 'stroke-width="2" stroke-opacity=".65"')) + text(245, 82, '× ' + f(p.factor), C.gold, 22) + text(245, 108, 'per pass', C.muted, 15) + caption('The same percentage, applied again');
      }
    },
    'function-composition': {
      title: 'Function composition',
      describe: (p, r) => `Input ${f(p.x)} passes through ${r.first} to become ${f(r.intermediate)}, then through ${r.second} to become ${f(r.output)}. Square areas, not side lengths, represent their magnitudes on one shared scale. The order is ${p.order === 'f_after_g' ? 'g then f' : 'f then g'}.`,
      draw(p, r) {
        const values = [p.x, r.intermediate, r.output], centers = [60, 172, 289], colors = [C.cyan, C.gold, C.mint], k = 84 / Math.sqrt(Math.max(...values.map(Math.abs), 1));
        let body = arrow(88, 93, 133, 93, C.muted) + arrow(208, 93, 245, 93, C.muted) + label(112, 71, r.first, C.gold, 23) + label(229, 71, r.second, C.mint, 23);
        for (const [i, value] of values.entries()) { const side = Math.sqrt(Math.abs(value)) * k; body += quantity(['x', 'intermediate', 'output'][i], value, rect(centers[i] - side / 2, 142 - side, side, side, colors[i], 'rx="4" fill-opacity=".25" stroke="' + colors[i] + '" stroke-width="2" data-area-scale="' + k * k + '"') + label(centers[i], 164, f(value), colors[i], 20)); }
        return body + caption('One output becomes the next input');
      }
    },
    'real-logarithm': {
      title: 'Real logarithm',
      describe: (p, r) => `Starting at one, each step multiplies by base ${f(p.base)}. Reaching argument ${f(p.argument)} takes exponent ${f(r.output)}. The logarithm reads that exponent; the inverse power reconstructs ${f(r.inverse)}. Step positions are symbolic, not a linear argument axis.`,
      draw(p, r) {
        const steps = [0, 1, 2, r.output], positions = [51, 136, 221, 306];
        let body = line(51, 92, 306, 92, C.grid, 'stroke-width="2"');
        for (let i = 0; i < positions.length; i++) { const exponent = steps[i], value = p.base ** exponent, color = i === 3 ? C.mint : C.cyan; body += quantity('power-' + exponent, value, circle(positions[i], 92, i === 3 ? 12 : 8, color) + label(positions[i], 130, f(value), color, 21)); if (i < 3) body += label((positions[i] + positions[i + 1]) / 2, 69, '× ' + f(p.base), C.gold, 15); }
        return body + quantity('output', r.output, caption(`log base ${f(p.base)} of ${f(p.argument)} = ${f(r.output)}`));
      }
    },
    derivative: {
      title: 'Derivative at a point',
      describe: (p, r) => `At a=${f(p.a)} the cubic's analytic tangent slope is ${f(r.analytic)}. The finite secant through a and a+h has slope ${f(r.output)} with h=${f(p.h)}. The local horizontal scale is magnified so those distinct slopes and the finite run remain visible.`,
      draw(p, r) {
        const x = value => 180 + (value - p.a) * 520, y = value => 100 - (value - r.fa) * 23, from = p.a - .2, to = p.a + .2, fn = value => M.curveValue('derivative', p, value);
        const points = samples(from, to, 48, value => [x(value), y(fn(value))]);
        return line(42, 147, 318, 147, C.grid) + curve(points, C.mint) + quantity('analytic', r.analytic, curve([[x(from), y(r.fa + r.analytic * (from - p.a))], [x(to), y(r.fa + r.analytic * (to - p.a))]], C.violet, 'stroke-width="2" stroke-dasharray="5 4"')) + quantity('output', r.output, curve([[x(from), y(r.fa + r.output * (from - p.a))], [x(to), y(r.fa + r.output * (to - p.a))]], C.gold, 'stroke-width="2"')) + circle(x(p.a), y(r.fa), 6, C.cyan) + circle(x(p.a + p.h), y(r.fah), 5, C.gold) + line(x(p.a), y(r.fa), x(p.a + p.h), y(r.fa), C.cyan, 'stroke-width="3"') + line(x(p.a + p.h), y(r.fa), x(p.a + p.h), y(r.fah), C.gold, 'stroke-width="3"') + caption('Finite secant ≠ analytic tangent');
      }
    }
  };
  const slugs = Object.freeze(Object.keys(records));
  function has(slug) { return typeof slug === 'string' && Object.hasOwn(records, slug); }
  function description(slug) { if (!has(slug)) return ''; const p = M.defaults(slug); return records[slug].describe(p, M.evaluate(slug, p)); }
  function render(slug, options = {}) {
    if (!has(slug)) return '';
    const p = M.defaults(slug), r = M.evaluate(slug, p), record = records[slug], id = scope(options.id ?? slug), title = options.title ?? record.title, desc = record.describe(p, r);
    return `<svg class="card-illustration" data-preview="${esc(slug)}" data-preview-output="${esc(r.output)}" viewBox="0 0 360 200" role="img" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)} visual preview</title><desc id="${id}-description">${esc(desc)}</desc><defs><radialGradient id="${id}-glow"><stop stop-color="${C.cyan}" stop-opacity=".11"/><stop offset="1" stop-color="${C.cyan}" stop-opacity="0"/></radialGradient><clipPath id="${id}-art"><rect width="360" height="172"/></clipPath></defs><rect width="360" height="200" fill="${C.bg}"/><circle cx="285" cy="32" r="160" fill="url(#${id}-glow)"/><g font-family="system-ui,sans-serif">${record.draw(p, r)}</g></svg>`;
  }
  return Object.freeze({ has, list: () => slugs.slice(), description, render });
});
