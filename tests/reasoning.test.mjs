import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/reasoning.js'),Plot=require('../src/plot-view.js');
const slugs=['relation','equivalence','inference','torque'],D=[2,4,6,8,10,12];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);
const roles=(html,name)=>[...html.matchAll(new RegExp('<[^>]*data-role="'+name+'"[^>]*>','g'))].map(([tag])=>attrs(tag));
const source=fs.readFileSync(new URL('../src/reasoning.js',import.meta.url),'utf8');
const inputs=[[3,2],[3,5],[9,2],[9,5]];
function torqueSpec(p,o={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasReasoning.render('torque',p,{view:'graph',...o});}

test('reasoning modules are offline, immutable at the boundary, and independently owned',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(source,context);assert.equal(typeof context.AtlasReasoning.render,'function');assert.ok(Object.isFrozen(M));assert.doesNotMatch(source,/requestAnimationFrame|setInterval|fetch\(|document\.|window\./);
  for(const slug of slugs){assert.ok(M.has(slug));assert.equal(M.specs(slug).rendererId,slug+'-visual-model');const p=M.defaults(slug),key=Object.keys(p)[0];p[key]=999;assert.notEqual(M.defaults(slug)[key],999);const c=M.controls(slug);c[0].label='Changed';assert.notEqual(M.controls(slug)[0].label,'Changed');const s=M.specs(slug);s.views.pop();s.sweeps[0].min=999;assert.deepEqual(M.specs(slug).views,['geometry','graph']);assert.notEqual(M.specs(slug).sweeps[0].min,999);}
  const c=M.controls('equivalence');c[2].options[0].value='other';assert.equal(M.controls('equivalence')[2].options[0].value,'de-morgan');
  for(const slug of [null,{},'constructor','__proto__','missing']){assert.equal(M.has(slug),false);assert.equal(M.render(slug,{}),'');assert.equal(M.evaluate(slug).valid,false);}assert.throws(()=>M.defaults('missing'),RangeError);
});

test('relations count all 36 ordered choices, including independently supplied equal lengths',()=>{
  for(let threshold=0;threshold<=26;threshold+=.125){const r=M.evaluate('relation',{threshold});let expected=0;for(let a=1;a<=6;a++)expected+=Math.max(0,7-Math.max(1,Math.ceil(threshold/2-a)));assert.equal(r.output,expected);assert.equal(r.output,r.pairCount);assert.equal(r.pairs.length,36);assert.equal(r.count,36);assert.equal(r.exampleTotal,14);assert.equal(r.exampleTruth,Number(threshold<=14));assert.equal(r.exampleLabel,threshold<=14?'True':'False');}
  const r=M.evaluate('relation',{threshold:14});assert.equal(r.output,21);assert.equal(r.members.length,21);assert.ok(r.members.every(row=>row.x+row.y>=14));assert.equal(r.pairs.filter(row=>row.x===row.y).length,6);assert.ok(r.pairs.some(row=>row.x===6&&row.y===8));assert.ok(r.pairs.some(row=>row.x===8&&row.y===6));
  for(const row of r.pairs)assert.equal(row.truth,r.pairs.find(other=>other.x===row.y&&other.y===row.x).truth);
  r.domain.push(99);r.pairs[0].x=99;assert.deepEqual(M.evaluate('relation').domain,D);assert.equal(M.evaluate('relation').pairs[0].x,2);
});

test('relation membership includes equality and changes counts only after exact pair totals',()=>{
  const expected=[[0,36],[4,36],[6,35],[8,33],[10,30],[12,26],[14,21],[16,15],[18,10],[20,6],[22,3],[24,1],[26,0]];
  for(const [threshold,count]of expected)assert.equal(M.evaluate('relation',{threshold}).output,count);
  for(const h of [4,6,8,10,12,14,16,18,20,22,24]){const at=M.evaluate('relation',{threshold:h}),after=M.evaluate('relation',{threshold:h+.00001});assert.equal(at.output-after.output,at.pairs.filter(row=>row.total===h).length);assert.equal(M.evaluate('relation',{threshold:h-.00001}).output,at.output);}
  assert.equal(M.evaluate('relation',{threshold:14}).exampleTruth,1);assert.equal(M.evaluate('relation',{threshold:14.000001}).exampleTruth,0);
});

test('relation geometry joins exact cell membership to a common strip scale',()=>{
  for(const threshold of [0,14,14.001,18,26]){const r=M.evaluate('relation',{threshold}),html=M.render('relation',{threshold},{compact:true,sceneControl:false}),cells=roles(html,'relation-cell');assert.equal(cells.length,36);assert.equal(cells.filter(cell=>cell['data-truth']==='1').length,r.output);assert.equal(cells.find(cell=>cell['data-x']==='6'&&cell['data-y']==='8')['data-truth'],String(r.exampleTruth));const a=role(html,'left-strip'),b=role(html,'right-strip');near(Number(a.width)/Number(b.width),6/8,1e-6);const marker=role(html,'requirement-marker');near(Number(marker.x1)-Number(a.x),304*threshold/26,1e-6);assert.match(html,/data-quantity="pairs(?: members)? exampleX exampleY exampleTotal exampleTruth exampleLabel"/);assert.equal((html.match(/data-quantity="pairs members(?: |")/g)||[]).length,r.members.length);}
});

test('relation Graph has separate horizontal steps with exact included totals',()=>{
  const html=M.render('relation',{threshold:14},{view:'graph',compact:true,sceneControl:false}),segments=roles(html,'count-segment');assert.equal(segments.length,12);
  segments.forEach((segment,i)=>{assert.equal(segment.y1,segment.y2);const start=Number(segment['data-start']),end=Number(segment['data-end']),count=Number(segment['data-count']);assert.equal(count,M.evaluate('relation',{threshold:(start+end)/2}).output);assert.equal(count,M.evaluate('relation',{threshold:end}).output);if(i)assert.notEqual(count,M.evaluate('relation',{threshold:start}).output);});
  assert.equal(roles(html,'open-count-endpoint').length,11);assert.equal(roles(html,'closed-count-endpoint').length,13);assert.equal(role(html,'current-count')['data-y'],'21');assert.doesNotMatch(html,/data-series|role="slider"/);
});

test('equivalence is decided on all four assignments with independent literal truth tables',()=>{
  const expected={'de-morgan':{left:[1,1,1,0],right:[1,1,1,0],mismatches:0},implication:{left:[1,1,0,1],right:[1,1,0,1],mismatches:0},lookalike:{left:[1,1,1,0],right:[1,0,0,0],mismatches:2}};
  for(const [comparison,e]of Object.entries(expected))inputs.forEach(([length,width],i)=>{const r=M.evaluate('equivalence',{length,width,comparison});assert.equal(r.leftTruth,e.left[i]);assert.equal(r.rightTruth,e.right[i]);assert.equal(r.output,e.left[i]);assert.equal(r.truthLabel,e.left[i]?'True':'False');assert.equal(r.currentMatch,Number(e.left[i]===e.right[i]));assert.equal(r.mismatchCount,e.mismatches);assert.equal(r.equivalent,Number(!e.mismatches));assert.equal(r.equivalentLabel,e.mismatches?'Not equivalent':'Equivalent');assert.deepEqual(r.truthTable.map(row=>row.leftTruth),e.left);assert.deepEqual(r.truthTable.map(row=>row.rightTruth),e.right);});
  for(const comparison of Object.keys(expected))inputs.forEach(([length,width],i)=>{const r=M.evaluate('equivalence',{comparison,length,width});assert.equal(r.notAndTruth,[1,1,1,0][i]);assert.equal(r.notPOrNotQTruth,[1,1,1,0][i]);assert.equal(r.implicationTruth,[1,1,0,1][i]);assert.equal(r.notPOrQTruth,[1,1,0,1][i]);assert.equal(r.notPAndNotQTruth,[1,0,0,0][i]);assert.equal(r[r.leftQuantity],r.leftTruth);assert.equal(r[r.rightQuantity],r.rightTruth);});
});

test('a matching current row and a true current formula do not establish global equivalence',()=>{
  const bothTrue=M.evaluate('equivalence',{comparison:'lookalike',length:3,width:2}),bothFalse=M.evaluate('equivalence',{comparison:'lookalike',length:9,width:5});
  for(const r of [bothTrue,bothFalse]){assert.equal(r.currentMatch,1);assert.equal(r.equivalent,0);assert.equal(r.mismatchCount,2);assert.match(M.specs('equivalence').readout(r.parameters,r).insight,/One match does not establish equivalence/);}
  assert.equal(bothTrue.output,1);assert.equal(bothFalse.output,0);const correct=M.evaluate('equivalence',{comparison:'de-morgan',length:9,width:5});assert.equal(correct.output,0);assert.equal(correct.equivalent,1);
  assert.equal(M.evaluate('equivalence',{length:6,width:4}).output,0);assert.equal(M.evaluate('equivalence',{length:6,width:3.999999}).output,1);
});

test('formula aliases attach only to the selected comparison and active current-row readings',()=>{
  const keys={'de-morgan':['formula:not-and','formula:not-p-or-not-q'],implication:['formula:implies','formula:not-p-or-q'],lookalike:['formula:not-and','formula:not-p-and-not-q']};
  for(const [comparison,expected]of Object.entries(keys)){const html=M.render('equivalence',{comparison},{compact:true,sceneControl:false}),rows=roles(html,'comparison-row');assert.equal(rows.length,4);assert.equal(rows.filter(row=>row['data-active']==='true').length,1);assert.equal(rows.filter(row=>row['data-match']==='0').length,comparison==='lookalike'?2:0);for(const key of expected)assert.ok(html.includes(key));assert.equal((html.match(/data-quantity="leftTruth leftLabel output truthLabel /g)||[]).length,2,'only current formula box and current truth-table row carry primary output');assert.match(html,/data-quantity="negatedP negatedPLabel"/);assert.match(html,/data-quantity="negatedQ negatedQLabel"/);}
  const graph=M.render('equivalence',{comparison:'lookalike'},{view:'graph',compact:true,sceneControl:false});assert.equal(roles(graph,'reasoning-region').filter(row=>row['data-mismatch']==='1').length,2);assert.notEqual(graph,M.render('equivalence',{comparison:'lookalike'},{compact:true,sceneControl:false}));
});

test('inference validity comes from all Boolean assignments, using independently listed premise and conclusion rows',()=>{
  const conditional=[1,1,0,1],expected={'modus-ponens':{second:[0,0,1,1],conclusion:[0,1,0,1],counterexamples:0},'modus-tollens':{second:[1,0,1,0],conclusion:[1,1,0,0],counterexamples:0},'affirming-consequent':{second:[0,1,0,1],conclusion:[0,0,1,1],counterexamples:1}};
  for(const [argument,e]of Object.entries(expected))inputs.forEach(([length,width],i)=>{const r=M.evaluate('inference',{length,width,argument});assert.equal(r.conditionalTruth,conditional[i]);assert.equal(r.premise1Truth,conditional[i]);assert.equal(r.premise2Truth,e.second[i]);assert.equal(r.conclusionTruth,e.conclusion[i]);assert.equal(r.output,e.conclusion[i]);assert.equal(r.truthLabel,e.conclusion[i]?'True':'False');assert.equal(r.counterexampleCount,e.counterexamples);assert.equal(r.validArgument,Number(!e.counterexamples));assert.equal(r.validityLabel,e.counterexamples?'Invalid':'Valid');assert.deepEqual(r.truthTable.map(row=>row.premise1Truth),conditional);assert.deepEqual(r.truthTable.map(row=>row.premise2Truth),e.second);assert.deepEqual(r.truthTable.map(row=>row.conclusionTruth),e.conclusion);});
});

test('current true conclusions are distinguished from licensed inference and global validity',()=>{
  const missing=M.evaluate('inference',{length:3,width:5,argument:'modus-ponens'});assert.equal(missing.output,1);assert.equal(missing.premisesHold,0);assert.equal(missing.validArgument,1);assert.match(missing.licenseLabel,/do not license/);assert.match(M.specs('inference').readout(missing.parameters,missing).insight,/not a conclusion licensed/);
  const lucky=M.evaluate('inference',{length:9,width:5,argument:'affirming-consequent'});assert.equal(lucky.output,1);assert.equal(lucky.premisesHold,1);assert.equal(lucky.validArgument,0);assert.match(lucky.licenseLabel,/invalid/);
  const counter=M.evaluate('inference',{length:3,width:5,argument:'affirming-consequent'});assert.equal(counter.output,0);assert.equal(counter.premisesHold,1);assert.equal(counter.counterexample,1);assert.equal(counter.validArgument,0);assert.match(M.specs('inference').readout(counter.parameters,counter).insight,/refutes the argument/);
  const mt=M.evaluate('inference',{length:3,width:2,argument:'modus-tollens'});assert.equal(mt.premisesHold,1);assert.equal(mt.negatedP,1);assert.equal(mt.conclusionTruth,1);assert.equal(mt.negatedQ,mt.premise2Truth);
});

test('inference scenes mark only actual counterexamples and keep current/global quantity roles separate',()=>{
  for(const argument of ['modus-ponens','modus-tollens','affirming-consequent']){
    const p={length:3,width:5,argument},r=M.evaluate('inference',p),html=M.render('inference',p,{compact:true,sceneControl:false}),rows=roles(html,'argument-row');assert.equal(rows.length,4);assert.equal(rows.filter(row=>row['data-counterexample']==='1').length,r.counterexampleCount);assert.equal((html.match(/data-quantity="conclusionTruth conclusionLabel output truthLabel"/g)||[]).length,2);assert.match(html,/data-quantity="validArgument validityLabel counterexampleCount"/);
    const graph=M.render('inference',p,{view:'graph',compact:true,sceneControl:false}),bad=roles(graph,'reasoning-region').filter(row=>row['data-mismatch']==='1');assert.equal(bad.length,r.counterexampleCount);if(bad.length){assert.equal(bad[0]['data-x-min'],'0');assert.equal(bad[0]['data-y-min'],'4');assert.equal(bad[0]['data-premises'],'1');assert.equal(bad[0]['data-conclusion'],'0');}
    assert.match(html,/data-quantity="licenseLabel"/);assert.ok(html.includes(r.licenseLabel));
  }
});

test('reasoning truth labels and pin comparisons describe current formula truth without numeric deltas',()=>{
  for(const [slug,before,after]of [['equivalence',{length:9,width:5,comparison:'de-morgan'},{length:9,width:3,comparison:'de-morgan'}],['inference',{length:9,width:3,argument:'modus-ponens'},{length:9,width:5,argument:'modus-ponens'}]]){
    const b=M.evaluate(slug,before),r=M.evaluate(slug,after),data=M.specs(slug).readout(r.parameters,r,{baseline:b});assert.deepEqual(data.comparison,{baselineValue:'False',change:'False → True'});assert.deepEqual(M.specs(slug).readout(r.parameters,r,{baseline:r}).comparison,{baselineValue:'True',change:'Unchanged'});assert.equal(M.specs(slug).readout(r.parameters,r).comparison,undefined);
  }
  const r=M.evaluate('relation');assert.equal(M.specs('relation').readout(r.parameters,r,{baseline:r}).comparison,undefined,'pair counts retain numeric comparison');
});

test('torque agrees with the ordered determinant, force projection and perpendicular moment arm',()=>{
  for(const arm of [0,.25,.8,2])for(const force of [0,.5,10,20])for(const angle of [-179,-150,-90,-30,0,30,90,150,179,180]){
    const r=M.evaluate('torque',{arm,force,angle});assert.equal(r.valid,true);near(r.output,arm*force*Math.sin(angle*Math.PI/180));near(r.output,arm*r.forceY);near(r.magnitude,force*r.momentArm);near(r.forceX*r.forceX+r.forceY*r.forceY,force*force);assert.equal(r.perpendicularForce,r.forceY);assert.equal(r.unit,'N·m');assert.ok(r.magnitude<=40);assert.ok(r.momentArm<=arm);assert.ok(!Object.is(r.output,-0));assert.ok(!Object.is(r.forceX,-0));assert.ok(!Object.is(r.forceY,-0));
  }
  near(M.evaluate('torque').output,4);assert.equal(M.evaluate('torque',{angle:90}).output,8);assert.equal(M.evaluate('torque',{angle:-90}).output,-8);assert.equal(M.evaluate('torque',{arm:2,force:20,angle:90}).output,40);
  const r=M.evaluate('torque',{angle:90});assert.deepEqual(r.positionVector,[.8,0,0]);assert.deepEqual(r.forceVector,[0,10,0]);assert.deepEqual(r.torqueVector,[0,0,8]);r.forceVector[0]=99;assert.notEqual(M.evaluate('torque',{angle:90}).forceVector[0],99);
});

test('torque cardinal zeros and zero inputs do not acquire spurious orientation',()=>{
  for(const angle of [-180,0,180]){const r=M.evaluate('torque',{arm:2,force:20,angle});assert.equal(r.output,0);assert.equal(r.forceY,0);assert.equal(r.momentArm,0);assert.equal(r.orientationLabel,'Zero torque');}
  for(const p of [{arm:0,force:20,angle:90},{arm:2,force:0,angle:90},{arm:0,force:0,angle:-90}]){const r=M.evaluate('torque',p);assert.equal(r.output,0);assert.equal(r.orientationLabel,'Zero torque');assert.equal(r.magnitude,0);}
  assert.equal(M.evaluate('torque',{arm:2,force:0,angle:90}).momentArm,2,'the construction direction still defines its moment arm');
  for(const angle of [10,30,90,170]){const a=M.evaluate('torque',{angle}),b=M.evaluate('torque',{angle:-angle});near(a.output,-b.output);near(a.magnitude,b.magnitude);near(a.momentArm,b.momentArm);}
});

test('torque geometry uses separate force and distance scales with the force applied at the handle',()=>{
  const p={arm:.8,force:10,angle:30},r=M.evaluate('torque',p),html=M.render('torque',p,{compact:true,sceneControl:false}),arm=role(html,'position-arm'),force=role(html,'force-arrow'),vertical=role(html,'perpendicular-force'),horizontal=role(html,'horizontal-force'),lever=role(html,'moment-arm');
  near(Number(arm.x2)-Number(arm.x1),90*p.arm);assert.equal(arm.x2,force.x1);assert.equal(arm.y2,force.y1);near(Math.hypot(Number(force.x2)-Number(force.x1),Number(force.y2)-Number(force.y1)),3*p.force,1e-7);near(Number(vertical.y1)-Number(vertical.y2),3*r.forceY,1e-7);near(Number(horizontal.x2)-Number(horizontal.x1),3*r.forceX,1e-7);near(Math.hypot(Number(lever.x2)-Number(lever.x1),Number(lever.y2)-Number(lever.y1)),90*r.momentArm,1e-7);assert.match(html,/separate metre scale/);assert.match(html,/20 N/);assert.match(html,/1 m/);
});

test('torque extrema and reversed forces remain inside the compact frame',()=>{
  for(const arm of [0,.8,2])for(const force of [0,10,20])for(const angle of [-180,-135,-90,-45,0,45,90,135,180]){
    const html=M.render('torque',{arm,force,angle},{compact:true,sceneControl:false});
    for(const name of ['position-arm','force-arrow','perpendicular-force','horizontal-force','moment-arm','force-line']){const mark=role(html,name);for(const key of ['x1','x2'])assert.ok(Number(mark[key])>=0&&Number(mark[key])<=360,`${name}.${key}`);for(const key of ['y1','y2'])assert.ok(Number(mark[key])>=0&&Number(mark[key])<=453,`${name}.${key}`);}
    assert.match(html,/viewBox="0 0 360 453"/);assert.doesNotMatch(html,/NaN|Infinity|role="slider"/);
  }
});

test('torque Graph includes exact cardinals, current samples, separate magnitude and independent pinned curves',()=>{
  const p={arm:.8,force:10,angle:33.125},b={arm:2,force:20,angle:-74.5},g=torqueSpec(p,{baseline:b});assert.deepEqual([g.x.min,g.x.max,g.y.min,g.y.max],[-180,180,-40,40]);
  const signed=g.series.find(s=>s.id==='signed-torque').points,mag=g.series.find(s=>s.id==='torque-magnitude').points,pinned=g.series.find(s=>s.id==='baseline').points;
  for(const angle of [-180,0,180])assert.equal(signed.find(point=>point.x===angle).y,0);assert.equal(signed.find(point=>point.x===p.angle).y,M.evaluate('torque',p).output);assert.equal(pinned.find(point=>point.x===b.angle).y,M.evaluate('torque',b).output);mag.forEach((point,i)=>assert.equal(point.y,Math.abs(signed[i].y)));assert.match(g.y.label,/N·m/);assert.equal(g.current[0].draggable,true);assert.equal(torqueSpec(p,{sceneControl:false}).current[0].draggable,false);
});

test('unsupported inputs are rejected without coercion, clipping or caller mutation',()=>{
  for(const slug of slugs){const p=M.defaults(slug),before=JSON.stringify(p);M.evaluate(slug,p);M.render(slug,p);assert.equal(JSON.stringify(p),before);for(const input of [null,[],5,'input',{extra:1}]){const r=M.evaluate(slug,input);assert.equal(r.valid,false);assert.equal(r.output,null);}
    for(const c of M.controls(slug)){const values=c.type==='select'?['missing',0,null]:[NaN,Infinity,-Infinity,'1',null,c.min-1,c.max+1];for(const value of values){const r=M.evaluate(slug,{[c.key]:value});assert.equal(r.valid,false,slug+' '+c.key);assert.equal(r.status,'invalid_parameters');assert.equal(r.output,null);}}
  }
  assert.equal(M.curveValue('missing',{},1),null);assert.equal(M.curveValue('relation',{},NaN),null);assert.equal(M.curveValue('torque',{},181),null);
});

test('nonzero torque or visible projections below numeric precision are explicitly diagnosed',()=>{
  for(const p of [{arm:Number.MIN_VALUE,force:20,angle:30},{arm:0,force:Number.MIN_VALUE,angle:30},{arm:1,force:Number.MIN_VALUE,angle:80},{arm:1,force:0,angle:Number.MIN_VALUE},{arm:Number.MIN_VALUE,force:Number.MIN_VALUE,angle:90}]){const r=M.evaluate('torque',p);assert.equal(r.valid,false);assert.equal(r.status,'numeric_precision');assert.equal(r.output,null);assert.equal(r.errors[0].code,'numeric_precision');assert.match(M.render('torque',p,{compact:true}),/below numeric precision/);}
  assert.equal(M.evaluate('torque',{arm:0,force:0,angle:0}).valid,true);
});

test('all compact views stay inert without scene controls, preserve pins and namespace their SVG identities',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph']){
    const a=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot:a',baseline:M.defaults(slug)}),b=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot_b'});assert.doesNotMatch(a,/NaN|Infinity|role="slider"|data-drag-param/);assert.match(a,/baseline/);const ia=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),ib=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.ok(ia.length>=2);assert.equal(new Set(ia).size,ia.length);assert.ok(ia.every(id=>!ib.includes(id)));if(view==='geometry')assert.equal((M.render(slug,{}, {compact:true}).match(/role="slider"/g)||[]).length,1);const invalid=M.render(slug,{extra:1},{view,compact:true});assert.match(invalid,/Choose valid inputs/);assert.doesNotMatch(invalid,/NaN|Infinity/);
  }
  assert.match(M.render('equivalence',{}, {sceneControl:false}),/viewBox="0 0 760 383"/);assert.match(M.render('inference',{}, {sceneControl:false}),/viewBox="0 0 760 430"/);
});
