import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/book-foundations.js'),Plot=require('../src/plot-view.js');
const slugs=['logical-connectives','quantifier','cross-product','stability'];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);
const source=fs.readFileSync(new URL('../src/book-foundations.js',import.meta.url),'utf8');
function graphSpec(slug,parameters,options={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasBookFoundations.render(slug,parameters,{view:'graph',...options});}

test('book-foundation provider is offline and returns fresh descriptors and state',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(source,context);assert.equal(typeof context.AtlasBookFoundations.render,'function');assert.ok(Object.isFrozen(M));
  for(const slug of slugs){assert.ok(M.has(slug));assert.equal(M.specs(slug).rendererId,slug+'-visual-model');
    const d=M.defaults(slug),key=Object.keys(d)[0];d[key]=999;assert.notEqual(M.defaults(slug)[key],999);
    const controls=M.controls(slug);controls[0].label='Changed';assert.notEqual(M.controls(slug)[0].label,'Changed');
    const s=M.specs(slug);s.views.pop();s.sweeps[0].label='Changed';assert.deepEqual(M.specs(slug).views,['geometry','graph']);assert.notEqual(M.specs(slug).sweeps[0].label,'Changed');
  }
  const c=M.controls('logical-connectives');c[2].options[0].value='changed';assert.equal(M.controls('logical-connectives')[2].options[0].value,'and');
  for(const slug of [null,{},'constructor','__proto__','missing']){assert.equal(M.has(slug),false);assert.equal(M.render(slug,{}),'');assert.equal(M.evaluate(slug).valid,false);}
  assert.throws(()=>M.defaults('missing'),RangeError);
  assert.doesNotMatch(source,/requestAnimationFrame|setInterval|fetch\(|document\.|window\./);
});

test('classical connective truth tables agree with independently listed rows',()=>{
  const expected={and:[0,0,0,1],or:[0,1,1,1],implies:[1,1,0,1],iff:[1,0,0,1],not:[1,1,0,0]};
  for(const [operation,table]of Object.entries(expected)){
    const rows=[[3,2],[3,5],[9,2],[9,5]];
    rows.forEach(([length,width],i)=>{const r=M.evaluate('logical-connectives',{length,width,operation});assert.equal(r.valid,true);assert.equal(r.output,table[i]);assert.equal(r.truthLabel,table[i]?'True':'False');assert.deepEqual(r.truthTable.map(row=>row.output),table);});
  }
  assert.equal(M.evaluate('logical-connectives',{operation:'or',length:9,width:5}).output,1,'OR is inclusive');
  assert.equal(M.evaluate('logical-connectives',{operation:'implies',length:3,width:2}).output,1,'false antecedent gives true material implication');
  assert.equal(M.evaluate('logical-connectives',{operation:'implies',length:9,width:2}).output,0);
});

test('proposition boundaries are inclusive and unary NOT ignores the second measurement',()=>{
  const both=M.evaluate('logical-connectives',{length:6,width:4});assert.equal(both.pTruth,1);assert.equal(both.qTruth,1);assert.equal(both.output,1);
  assert.equal(M.evaluate('logical-connectives',{length:5.999999,width:4}).output,0);assert.equal(M.evaluate('logical-connectives',{length:6,width:3.999999}).output,0);
  for(const length of [0,5.999999,6,12]){const outputs=[0,4,12].map(width=>M.evaluate('logical-connectives',{length,width,operation:'not'}).output);assert.deepEqual(outputs,[outputs[0],outputs[0],outputs[0]]);}
  for(const operation of ['and','or','implies','iff','not'])for(const length of [0,5.999,6,12])for(const width of [0,3.999,4,12])assert.ok([0,1].includes(M.evaluate('logical-connectives',{length,width,operation}).output));
  const readout=M.specs('logical-connectives').readout(both.parameters,both);assert.equal(readout.stats[2].value,'True');assert.match(readout.stats[2].note,/not a probability/);
});

test('truth-value providers describe pinned comparisons as semantic changes',()=>{
  for(const [slug,before,after]of [['logical-connectives',{length:3,width:5,operation:'and'},{length:9,width:5,operation:'and'}],['quantifier',{threshold:8,mode:'all'},{threshold:2,mode:'all'}]]){
    const baseline=M.evaluate(slug,before),result=M.evaluate(slug,after),readout=M.specs(slug).readout(result.parameters,result,{baseline});
    assert.deepEqual(readout.comparison,{baselineValue:'False',change:'False → True'});
    assert.deepEqual(M.specs(slug).readout(result.parameters,result,{baseline:result}).comparison,{baselineValue:'True',change:'Unchanged'});
    assert.equal(M.specs(slug).readout(result.parameters,result,{baseline:M.evaluate(slug,{extra:1})}).comparison,undefined);
    assert.equal(M.specs(slug).readout(result.parameters,result).comparison,undefined);
  }
});

test('logical geometry represents actual dimensions and the active truth-table row',()=>{
  const p={length:9,width:5,operation:'and'},html=M.render('logical-connectives',p,{compact:true,sceneControl:false}),panel=role(html,'panel');
  near(Number(panel.width)/Number(panel.height),9/5);assert.equal(panel['data-length'],'9');assert.equal(panel['data-width'],'5');
  const rows=[...html.matchAll(/<rect[^>]*data-role="truth-row"[^>]*>/g)].map(([tag])=>attrs(tag));assert.equal(rows.length,4);assert.equal(rows.filter(row=>row['data-active']==='true').length,1);assert.deepEqual(rows.find(row=>row['data-active']==='true')['data-p'],'1');
  assert.equal((html.match(/data-quantity="operation output truthLabel"/g)||[]).length,2,'only the summary and active table row represent the current output');
  assert.equal((html.match(/data-quantity="operation truthTable"/g)||[]).length,3,'hypothetical inactive assignments retain their own table meaning');
  assert.match(html,/P ∧ Q = True/);assert.match(html,/data-quantity="length pTruth pLabel"/);assert.match(html,/data-quantity="width qTruth qLabel"/);
  const unary=M.render('logical-connectives',{operation:'not'},{compact:true,sceneControl:false});assert.equal((unary.match(/data-role="truth-row"/g)||[]).length,2);assert.match(unary,/unused by ¬P/);
  assert.match(M.render('logical-connectives',{}, {sceneControl:false}),/viewBox="0 0 760 330"/);
  assert.match(M.render('logical-connectives',{}, {}),/viewBox="0 0 760 390"/);
  assert.match(M.render('logical-connectives',{}, {compact:true,sceneControl:false}),/viewBox="0 0 360 485"/);
  assert.match(M.render('logical-connectives',{}, {compact:true}),/viewBox="0 0 360 545"/);
});

test('logical graph colors the actual two-input truth regions rather than a smooth numeric output',()=>{
  const expected={and:[0,0,0,1],or:[0,1,1,1],implies:[1,1,0,1],iff:[1,0,0,1],not:[1,1,0,0]};
  for(const [operation,truths]of Object.entries(expected)){const html=M.render('logical-connectives',{operation},{view:'graph',compact:true,sceneControl:false}),regions=[...html.matchAll(/<rect[^>]*data-role="truth-region"[^>]*>/g)].map(([tag])=>attrs(tag));assert.equal(regions.length,4);assert.deepEqual(regions.map(row=>Number(row['data-truth'])),truths);assert.match(html,/x=6 and y=4 belong/);assert.doesNotMatch(html,/data-series|role="slider"/);}
  assert.notEqual(M.render('logical-connectives',{},{}),M.render('logical-connectives',{},{view:'graph'}));
});

test('quantifiers decide exactly the fixed nonempty domain with inclusive predicate thresholds',()=>{
  for(let threshold=0;threshold<=14;threshold+=.125){const r=M.evaluate('quantifier',{threshold});const count=[2,4,6,8,10,12].filter(x=>x>=threshold).length;assert.equal(r.qualifyingCount,count);assert.equal(r.allTruth,Number(threshold<=2));assert.equal(r.someTruth,Number(threshold<=12));assert.equal(r.output,r.allTruth);assert.equal(r.truthLabel,r.output?'True':'False');
    assert.equal(M.evaluate('quantifier',{threshold,mode:'some'}).output,r.someTruth);assert.equal(r.count,6);
  }
  assert.equal(M.evaluate('quantifier',{threshold:2}).allTruth,1);assert.equal(M.evaluate('quantifier',{threshold:2.000001}).allTruth,0);assert.equal(M.evaluate('quantifier',{threshold:12,mode:'some'}).output,1);assert.equal(M.evaluate('quantifier',{threshold:12.000001,mode:'some'}).output,0);
  const r=M.evaluate('quantifier');assert.deepEqual(r.domain,[2,4,6,8,10,12]);assert.equal(r.qualifyingCount,3);r.domain.push(99);r.outcomes[0].length=99;assert.deepEqual(M.evaluate('quantifier').domain,[2,4,6,8,10,12]);assert.equal(M.evaluate('quantifier').outcomes[0].length,2);
});

test('quantifier scenes encode exact count decisions and include the true endpoints without interpolated jumps',()=>{
  const p={threshold:6,mode:'all'},g=M.render('quantifier',p,{compact:true,sceneControl:false}),strips=[...g.matchAll(/<rect[^>]*data-role="domain-strip"[^>]*>/g)].map(([tag])=>attrs(tag));assert.equal(strips.length,6);assert.deepEqual(strips.map(row=>Number(row['data-truth'])),[0,0,1,1,1,1]);
  const ratios=strips.map(row=>Number(row.width)/Number(row['data-length']));ratios.forEach(value=>near(value,ratios[0],1e-6));assert.match(g,/4 of 6/);assert.match(g,/finite domain is the complete domain/);
  const graph=M.render('quantifier',p,{view:'graph',compact:true,sceneControl:false});const endpoints=[...graph.matchAll(/<circle[^>]*data-role="(?:closed|open)-endpoint"[^>]*>/g)].map(([tag])=>attrs(tag));assert.equal(endpoints.length,4);assert.deepEqual(endpoints.map(e=>e['data-threshold']),['2','2','12','12']);
  const falseSegments=[...graph.matchAll(/<line[^>]*data-role="false-segment"[^>]*>/g)].map(([tag])=>attrs(tag));assert.ok(falseSegments.every(row=>row['data-included-start']==='false'));assert.ok(falseSegments.every(row=>row.y1===row.y2),'no sloping connector at truth jumps');assert.match(graph,/categorical True and False/);
});

test('cross product obeys signed area, perpendicularity and cardinal-angle degeneracies',()=>{
  const cardinal=[[-180,0],[-90,-6],[0,0],[90,6],[180,0]];
  for(const [angle,expected]of cardinal){const r=M.evaluate('cross-product',{uLength:3,vLength:2,angle});assert.equal(r.output,expected);assert.equal(r.area,Math.abs(expected));assert.equal(Object.is(r.output,-0),false);assert.deepEqual(r.cross,[0,0,expected]);}
  for(const uLength of [0,.25,3,4])for(const vLength of [0,.5,2,4])for(const angle of [-179,-120,-60,-1,1,30,60,120,179]){
    const r=M.evaluate('cross-product',{uLength,vLength,angle}),swapped=M.evaluate('cross-product',{uLength:vLength,vLength:uLength,angle:-angle});
    near(r.output,-swapped.output);near(r.area,swapped.area);near(r.vX*r.vX+r.vY*r.vY,vLength*vLength);near(r.output,uLength*vLength*Math.sin(angle*Math.PI/180));near(r.cross.reduce((sum,value,i)=>sum+value*r.u[i],0),0);near(r.cross.reduce((sum,value,i)=>sum+value*r.v[i],0),0);assert.ok(r.area<=16);
  }
  const r=M.evaluate('cross-product');near(r.output,3*Math.sqrt(3));assert.equal(M.evaluate('cross-product',{uLength:0,angle:90}).output,0);assert.match(M.evaluate('cross-product',{angle:-90}).orientation,/Into/);
});

test('parallelogram area uses a common metre scale and normal orientation is explicit',()=>{
  for(const angle of [-120,-90,-30,0,30,90,120,180]){const r=M.evaluate('cross-product',{angle}),html=M.render('cross-product',{angle},{compact:true,sceneControl:false}),poly=role(html,'spanned-parallelogram'),points=poly.points.split(' ').map(pair=>pair.split(',').map(Number));let sum=0;points.forEach(([x,y],i)=>{const [xx,yy]=points[(i+1)%points.length];sum+=x*yy-xx*y;});near(Math.abs(sum)/2,r.area*22*22,1e-5);assert.equal(Number(poly['data-area']),r.area);assert.match(html,/xy-plane is the page/);if(r.output>0)assert.match(html,/⊙ \+z · out/);else if(r.output<0)assert.match(html,/⊗ −z · in/);else assert.match(html,/0 · no normal/);}
});

test('cross graphs retain exact zeros, current and pinned samples, and separate area from signed component',()=>{
  const p={uLength:3,vLength:2,angle:33.125},b={uLength:2,vLength:4,angle:-74.5},g=graphSpec('cross-product',p,{baseline:b});assert.deepEqual([g.x.min,g.x.max,g.y.min,g.y.max],[-180,180,-16,16]);
  const signed=g.series.find(s=>s.id==='signed-normal').points,area=g.series.find(s=>s.id==='area').points,pinned=g.series.find(s=>s.id==='baseline').points;
  for(const angle of [-180,0,180])assert.equal(signed.find(point=>point.x===angle).y,0);area.forEach((point,i)=>assert.equal(point.y,Math.abs(signed[i].y)));
  assert.equal(signed.find(point=>point.x===p.angle).y,M.evaluate('cross-product',p).output);assert.equal(pinned.find(point=>point.x===b.angle).y,M.evaluate('cross-product',b).output);assert.match(g.description,/dashed area curve is its absolute value/);
});

test('equilibrium iterates agree with powers and retain the sign of exact integer updates',()=>{
  for(const initialError of [-2,-1,0,1,2])for(const multiplier of [-1.2,-1,-.75,0,.5,1,1.2])for(let steps=0;steps<=8;steps++){
    const r=M.evaluate('stability',{initialError,multiplier,steps});assert.equal(r.valid,true);near(r.output,initialError*multiplier**steps);assert.equal(r.values.length,steps+1);assert.equal(r.values[0],initialError);assert.equal(r.magnitude,Math.abs(r.output));assert.equal(r.previous,r.values[Math.max(0,steps-1)]);assert.ok(r.values.every(value=>Math.abs(value)<9));assert.ok(r.values.every(value=>!Object.is(value,-0)));
  }
  assert.equal(M.evaluate('stability').output,1/256);assert.equal(M.evaluate('stability',{steps:0,initialError:-2}).output,-2);assert.deepEqual(M.evaluate('stability',{multiplier:-1,steps:4}).values,[1,-1,1,-1,1]);
  const zero=M.evaluate('stability',{steps:0,multiplier:0,initialError:2});const readout=M.specs('stability').readout(zero.parameters,zero);assert.equal(readout.expression,'e₀ = 2 cm · no correction');assert.doesNotMatch(readout.expression,/0\^0/);
  const negative=M.evaluate('stability',{multiplier:-1,steps:8});assert.match(M.specs('stability').readout(negative.parameters,negative).expression,/\(−1\)\^8/);
});

test('stability classification is a rule property and distinguishes attraction from bounded nondecay',()=>{
  for(const initialError of [-1,0,1])for(const steps of [0,1,8]){
    for(const multiplier of [-.999,0,.999]){const r=M.evaluate('stability',{multiplier,initialError,steps});assert.equal(r.classification,'attracting');assert.equal(r.attracting,true);assert.equal(r.lyapunovStable,true);}
    for(const multiplier of [-1,1]){const r=M.evaluate('stability',{multiplier,initialError,steps});assert.equal(r.classification,'bounded');assert.equal(r.attracting,false);assert.equal(r.lyapunovStable,true);assert.match(r.stabilityLabel,/not attracting/);near(r.magnitude,Math.abs(initialError));}
    for(const multiplier of [-1.001,1.001]){const r=M.evaluate('stability',{multiplier,initialError,steps});assert.equal(r.classification,'unstable');assert.equal(r.attracting,false);assert.equal(r.lyapunovStable,false);}
  }
  const r=M.evaluate('stability',{multiplier:1.1,initialError:0});assert.equal(r.output,0);assert.equal(r.stabilityLabel,'Unstable');assert.match(M.specs('stability').readout(r.parameters,r).insight,/exactly zero start remains zero/);
});

test('stability scenes use exact discrete states and a fixed signed scale',()=>{
  for(const multiplier of [-1.2,-1,-.5,0,.5,1,1.2]){
    const p={initialError:1,multiplier,steps:8},r=M.evaluate('stability',p),html=M.render('stability',p,{compact:true,sceneControl:false}),bars=[...html.matchAll(/<rect[^>]*data-role="displacement-strip"[^>]*>/g)].map(([tag])=>attrs(tag));assert.equal(bars.length,9);bars.forEach((bar,i)=>{assert.equal(Number(bar['data-value']),r.values[i]);near(Number(bar.width),Math.abs(r.values[i])*(360-82)/18,1e-6);});
    const graph=graphSpec('stability',p,{sceneControl:false});assert.deepEqual([graph.x.min,graph.x.max,graph.y.min,graph.y.max],[0,8,-9,9]);const series=graph.series[0];assert.equal(series.dots,'both');assert.equal(series.dashed,true);assert.deepEqual(Array.from(series.points,point=>point.x),[0,1,2,3,4,5,6,7,8]);Array.from(series.points).forEach((point,i)=>assert.equal(point.y,r.values[i]));assert.match(graph.description,/do not evaluate fractional updates/);assert.equal(graph.current[0].draggable,false);
  }
  assert.equal(M.controls('stability').find(c=>c.key==='steps').discrete,true);assert.ok(M.specs('stability').sweeps.every(c=>c.key!=='steps'));
  for(const steps of [.1,1.5,7.999])assert.equal(M.evaluate('stability',{steps}).valid,false);
  assert.match(M.render('stability',{steps:0},{sceneControl:false}),/data-quantity="values initialError steps output magnitude previous"/);
  assert.match(M.render('stability',{steps:1},{sceneControl:false}),/data-quantity="values initialError previous"/);
});

test('all domains reject coercion and unknown options without mutating caller state',()=>{
  for(const slug of slugs){const p=M.defaults(slug),before=JSON.stringify(p);M.evaluate(slug,p);assert.equal(JSON.stringify(p),before);
    for(const input of [null,[],7,'parameters',{extra:1}]){const r=M.evaluate(slug,input);assert.equal(r.valid,false);assert.equal(r.output,null);}
    for(const c of M.controls(slug)){const invalid=c.type==='select'?['missing',0,null]:[NaN,Infinity,-Infinity,'1',null,c.min-1,c.max+1];for(const value of invalid){const r=M.evaluate(slug,{[c.key]:value});assert.equal(r.valid,false,slug+' '+c.key);assert.equal(r.output,null);}}
  }
  assert.equal(M.curveValue('missing',{},1),null);assert.equal(M.curveValue('quantifier',{},NaN),null);assert.equal(M.curveValue('stability',{},1.3),null);
});

test('nonzero quantities below numeric precision are diagnosed rather than declared exact zero',()=>{
  for(const p of [{uLength:Number.MIN_VALUE,vLength:Number.MIN_VALUE,angle:90},{uLength:1,vLength:1,angle:Number.MIN_VALUE}]){const r=M.evaluate('cross-product',p);assert.equal(r.valid,false);assert.equal(r.status,'numeric_precision');assert.equal(r.output,null);}
  const r=M.evaluate('stability',{initialError:1,multiplier:Number.MIN_VALUE,steps:2});assert.equal(r.valid,false);assert.equal(r.status,'numeric_precision');assert.equal(r.output,null);
  assert.equal(M.evaluate('stability',{multiplier:0,steps:8}).valid,true);assert.equal(M.evaluate('cross-product',{uLength:0,angle:90}).valid,true);
});

test('compact scenes have separate representations, scoped IDs and optional single scene controls',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph']){
    const a=M.render(slug,{}, {compact:true,sceneControl:false,view,id:'slot:a',baseline:M.defaults(slug)}),b=M.render(slug,{}, {compact:true,sceneControl:false,view,id:'slot_b'});assert.doesNotMatch(a,/NaN|Infinity|role="slider"|data-drag-param/);assert.match(a,/baseline/);
    const idsA=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),idsB=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.ok(idsA.length>=2);assert.ok(idsA.every(id=>!idsB.includes(id)));assert.equal(new Set(idsA).size,idsA.length);
    const withControl=M.render(slug,{}, {compact:true,view,id:'slot'});if(view==='geometry')assert.equal((withControl.match(/role="slider"/g)||[]).length,1);
    const invalid=M.render(slug,{extra:1},{compact:true,view});assert.match(invalid,/Choose valid inputs/);assert.doesNotMatch(invalid,/NaN|Infinity/);
  }
});
