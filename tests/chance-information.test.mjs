import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/chance-information.js'),Plot=require('../src/plot-view.js');
const slugs=['probability-distribution','expected-value','entropy'];
const source=fs.readFileSync(new URL('../src/chance-information.js',import.meta.url),'utf8');
const close=(a,b,epsilon=1e-12)=>assert.ok(Math.abs(a-b)<=epsilon*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const roles=(html,name)=>[...html.matchAll(new RegExp('<[^>]*data-role="'+name+'"[^>]*>','g'))].map(([tag])=>attrs(tag));
const role=(html,name)=>roles(html,name)[0];
function graphSpec(slug,input,options={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasChanceInformation.render(slug,input,{view:'graph',...options});}

test('chance provider is pure, isolated and exposes independently owned metadata',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(source,context);assert.equal(typeof context.AtlasChanceInformation.render,'function');assert.ok(Object.isFrozen(M));assert.doesNotMatch(source,/requestAnimationFrame|setInterval|fetch\(|document\.|window\./);
  for(const slug of slugs){assert.equal(M.has(slug),true);assert.equal(M.specs(slug).rendererId,slug+'-visual-model');const defaults=M.defaults(slug);defaults.oneChance=99;assert.equal(M.defaults(slug).oneChance,.5);const controls=M.controls(slug);controls[0].label='changed';assert.notEqual(M.controls(slug)[0].label,'changed');const spec=M.specs(slug);spec.views.pop();spec.sweeps[0].min=-8;assert.deepEqual(M.specs(slug).views,['geometry','graph']);assert.equal(M.specs(slug).sweeps[0].min,0);}
  for(const value of [null,{},'constructor','__proto__','missing']){assert.equal(M.has(value),false);assert.equal(M.evaluate(value).valid,false);assert.equal(M.render(value,{}),'');}assert.throws(()=>M.defaults('missing'),RangeError);
});

test('every modeled distribution has nonnegative masses summing to one and correct units',()=>{
  for(let i=0;i<=40;i++)for(let j=0;j<=40;j++){
    const oneChance=i/40,twoShare=j/40,r=M.evaluate('probability-distribution',{oneChance,twoShare});assert.equal(r.valid,true);close(r.p0,(1-oneChance)*(1-twoShare));assert.equal(r.p1,oneChance);close(r.p2,(1-oneChance)*twoShare);close(r.massTotal,1);assert.deepEqual(r.rows.map(row=>row.outcome),[0,1,2]);r.rows.forEach((row,index)=>{assert.ok(row.probability>=0&&row.probability<=1);assert.equal(row.probability,r.probabilities[index]);assert.equal(row.weightedValue,index*row.probability);});assert.equal(r.output,r.p2);assert.equal(r.unit,'probability');
  }
  for(const slug of slugs){const r=M.evaluate(slug);r.probabilities[0]=99;r.rows[0].probability=99;assert.equal(M.evaluate(slug).p0,.25);assert.equal(M.evaluate(slug).rows[0].probability,.25);}assert.match(M.specs('probability-distribution').setting,/At q=1.*r has no effect/);
});

test('expected value equals the explicit weighted sum and stays between extreme outcomes',()=>{
  for(let i=0;i<=25;i++)for(let j=0;j<=25;j++){
    const oneChance=i/25,twoShare=j/25,r=M.evaluate('expected-value',{oneChance,twoShare});close(r.mean,oneChance+2*(1-oneChance)*twoShare);close(r.mean,r.c0+r.c1+r.c2);assert.equal(r.c0,0);assert.equal(r.c1,r.p1);assert.equal(r.c2,2*r.p2);assert.ok(r.mean>=0&&r.mean<=2);assert.equal(r.output,r.mean);assert.equal(r.unit,'books');
  }
  assert.equal(M.evaluate('expected-value',{oneChance:.5,twoShare:.25}).mean,.75);assert.equal(M.evaluate('expected-value',{oneChance:.5,twoShare:.75}).mean,1.25);assert.ok(![0,1,2].includes(M.evaluate('expected-value',{oneChance:.5,twoShare:.75}).mean));
});

test('entropy computes base-2 expected surprise with the continuous zero-mass convention',()=>{
  for(let i=0;i<=30;i++)for(let j=0;j<=30;j++){
    const r=M.evaluate('entropy',{oneChance:i/30,twoShare:j/30}),direct=r.probabilities.filter(p=>p>0).reduce((sum,p)=>sum-p*Math.log(p)/Math.LN2,0);close(r.entropy,direct);close(r.entropy,r.h0+r.h1+r.h2);assert.ok(r.entropy>=0&&r.entropy<=Math.log2(3)+1e-12);assert.equal(r.output,r.entropy);assert.equal(r.unit,'bits');assert.equal(r.supportSize,r.probabilities.filter(p=>p>0).length);
    for(const row of r.rows)if(row.probability===0){assert.equal(row.surprisal,null);assert.equal(row.surprisalLabel,'Impossible outcome');assert.equal(row.entropyContribution,0);}else{close(row.surprisal,-Math.log2(row.probability));close(row.entropyContribution,row.probability*row.surprisal);assert.ok(Number.isFinite(row.surprisal));}
  }
  for(const oneChance of [0,1])for(const twoShare of [0,1]){const r=M.evaluate('entropy',{oneChance,twoShare});assert.equal(r.entropy,0);assert.equal(r.supportSize,1);}const uniform=M.evaluate('entropy',{oneChance:1/3,twoShare:.5});close(uniform.entropy,Math.log2(3));assert.equal(M.evaluate('entropy',{oneChance:.5,twoShare:.5}).entropy,1.5);assert.equal(M.evaluate('entropy',{oneChance:0,twoShare:.5}).entropy,1);
});

test('moving probability between symmetric extremes can change the mean without changing entropy',()=>{
  for(const oneChance of [0,.1,1/3,.5,.8,1])for(const twoShare of [0,.1,.25,.7,1]){const a=M.evaluate('entropy',{oneChance,twoShare}),b=M.evaluate('entropy',{oneChance,twoShare:1-twoShare});close(a.entropy,b.entropy);close(a.mean+b.mean,2);}
  const a=M.evaluate('entropy',{oneChance:0,twoShare:.5}),b=M.evaluate('entropy',{oneChance:1,twoShare:.5});assert.equal(a.mean,b.mean);assert.notEqual(a.entropy,b.entropy);
});

test('the unused split at certainty cannot change any modeled quantity',()=>{
  for(const twoShare of [0,.25,.5,.75,1]){const r=M.evaluate('entropy',{oneChance:1,twoShare});assert.deepEqual(r.probabilities,[0,1,0]);assert.equal(r.mean,1);assert.equal(r.entropy,0);assert.equal(r.p0,0);assert.equal(r.p2,0);for(const value of [r.p0,r.p1,r.p2,r.mean,r.entropy,r.c0,r.h0])assert.equal(Object.is(value,-0),false);}
});

test('rare representable outcomes remain positive and true floating underflow is explicit',()=>{
  const rare=M.evaluate('entropy',{oneChance:1e-300,twoShare:1e-20});assert.equal(rare.valid,true);assert.ok(rare.p1>0&&rare.p2>0);assert.ok(rare.h1>0&&rare.h2>0);assert.ok(rare.rows[1].surprisal>900);assert.equal(rare.supportSize,3);
  for(const slug of slugs){const r=M.evaluate(slug,{oneChance:1-Number.EPSILON,twoShare:Number.MIN_VALUE});assert.equal(r.valid,false);assert.equal(r.status,'numeric_precision');assert.equal(r.output,null);assert.equal(r.errors[0].code,'numeric_precision');}
});

test('no provider coerces out-of-range, unknown or nonnumeric inputs',()=>{
  for(const slug of slugs){const p=M.defaults(slug),before=JSON.stringify(p);M.evaluate(slug,p);M.render(slug,p);assert.equal(JSON.stringify(p),before);for(const input of [null,[],5,'parameters',{other:1}]){const r=M.evaluate(slug,input);assert.equal(r.valid,false);assert.equal(r.output,null);}for(const key of ['oneChance','twoShare'])for(const value of [NaN,Infinity,-Infinity,'0.5',null,-.00001,1.00001]){assert.equal(M.evaluate(slug,{[key]:value}).valid,false);assert.equal(M.evaluate(slug,{[key]:value}).output,null);}}
  assert.equal(M.curveValue('missing',{},.5),null);assert.equal(M.curveValue('entropy',{},NaN),null);assert.equal(M.curveValue('entropy',{},1.1),null);
});

test('probability strip width and discrete mass height use fixed common probability scales',()=>{
  for(const compact of [false,true])for(const oneChance of [0,.25,.5,1])for(const twoShare of [0,.5,1]){
    const input={oneChance,twoShare},r=M.evaluate('probability-distribution',input),html=M.render('probability-distribution',input,{compact,sceneControl:false}),strip=roles(html,'probability-strip'),bars=roles(html,'probability-mass'),span=compact?316:404,height=compact?124:111;
    assert.equal(strip.length,3);assert.equal(bars.length,3);let offset=22;strip.forEach((shape,index)=>{close(Number(shape.x),offset,1e-6);close(Number(shape.width),span*r.probabilities[index],1e-6);assert.equal(Number(shape['data-probability']),r.probabilities[index]);offset+=span*r.probabilities[index];});bars.forEach((bar,index)=>{close(Number(bar.height),height*r.probabilities[index],1e-6);assert.equal(Number(bar['data-outcome']),index);});
  }
});

test('expected-value balance marker and contribution lengths represent the same evaluated mean',()=>{
  for(const compact of [true,false])for(const twoShare of [0,.25,.75,1]){const p={oneChance:.5,twoShare},r=M.evaluate('expected-value',p),html=M.render('expected-value',p,{compact,sceneControl:false}),balance=role(html,'mean-balance'),parts=roles(html,'mean-contribution'),span=compact?276:388,strip=compact?316:245;assert.equal(Number(balance['data-mean']),r.mean);const x=Number(balance.d.match(/^M([\d.]+)/)[1]);close(x,42+span*r.mean/2,1e-6);parts.forEach((part,index)=>{close(Number(part.width),strip*r.rows[index].weightedValue/2,1e-6);assert.equal(Number(part['data-value']),r.rows[index].weightedValue);});close(parts.reduce((sum,part)=>sum+Number(part.width),0),strip*r.mean/2,1e-6);}
});

test('entropy bars add weighted surprise on one fixed log₂3 scale without drawing impossible surprise',()=>{
  for(const compact of [true,false])for(const oneChance of [0,1/3,.5,1])for(const twoShare of [0,.5,1]){
    const p={oneChance,twoShare},r=M.evaluate('entropy',p),html=M.render('entropy',p,{compact,sceneControl:false}),contributions=roles(html,'entropy-contribution'),sum=roles(html,'entropy-sum-part'),span=compact?316:716;assert.equal(contributions.length,3);assert.equal(sum.length,3);for(let i=0;i<3;i++){close(Number(contributions[i].width),span*r.rows[i].entropyContribution/Math.log2(3),1e-6);assert.equal(Number(contributions[i]['data-probability']),r.probabilities[i]);assert.equal(Number(sum[i]['data-value']),r.rows[i].entropyContribution);}close(sum.reduce((value,part)=>value+Number(part.width),0),span*r.entropy/Math.log2(3),1e-6);if(r.supportSize<3)assert.match(html,/>Impossible<\/text>/);assert.doesNotMatch(html,/NaN|Infinity/);
  }
});

test('PMF Graph keeps exactly three stems and never draws a density between counts',()=>{
  for(const input of [{oneChance:0,twoShare:0},{oneChance:.5,twoShare:.5},{oneChance:1,twoShare:1}]){const html=M.render('probability-distribution',input,{view:'graph',compact:true,sceneControl:false}),r=M.evaluate('probability-distribution',input),stems=roles(html,'pmf-stem'),points=roles(html,'pmf-point');assert.equal(stems.length,3);assert.equal(points.length,3);stems.forEach((stem,i)=>{assert.equal(stem.x1,stem.x2);assert.equal(Number(stem['data-outcome']),i);assert.equal(Number(stem['data-probability']),r.probabilities[i]);});assert.match(html,/No line connects the counts into a continuous density/);assert.doesNotMatch(html,/data-series|role="slider"|data-drag-param/);}
});

test('expected-value Graph holds q fixed and plots its affine mean versus r',()=>{
  for(const oneChance of [0,.5,1]){const g=graphSpec('expected-value',{oneChance,twoShare:.75},{sceneControl:false});assert.equal(g.x.key,'twoShare');assert.deepEqual([g.x.min,g.x.max,g.y.min,g.y.max],[0,1,0,2]);g.series[0].points.forEach(point=>close(point.y,oneChance+2*(1-oneChance)*point.x));assert.equal(g.current[0].x,.75);close(g.current[0].y,oneChance+1.5*(1-oneChance));assert.equal(g.current[0].draggable,false);}
});

test('entropy Graph includes exact q=1/3 uniform peak and finite endpoints',()=>{
  const g=graphSpec('entropy',{oneChance:.5,twoShare:.5},{sceneControl:false}),curve=g.series.find(series=>series.id==='entropy'),maximum=g.series.find(series=>series.id==='maximum');assert.equal(g.x.key,'oneChance');assert.ok(curve.points.every(point=>Number.isFinite(point.y)));assert.equal(curve.points[0].y,1);assert.equal(curve.points.at(-1).y,0);close(curve.points.find(point=>point.x===1/3).y,Math.log2(3));assert.ok(maximum.points.every(point=>point.y===Math.log2(3)));assert.equal(maximum.dashed,true);assert.equal(g.current[0].draggable,false);
  const pinned=graphSpec('entropy',{oneChance:.5,twoShare:.5},{baseline:{oneChance:.25,twoShare:.75}});assert.equal(pinned.current.length,2);const family=pinned.series.find(series=>series.id==='baseline-curve');for(const point of family.points)close(point.y,M.evaluate('entropy',{oneChance:point.x,twoShare:.75}).entropy);
});

test('all views keep scoped accessible identities, baseline comparisons and host-owned controls',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph']){const a=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot:a',baseline:{oneChance:.25,twoShare:.75}}),b=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot_a'});assert.doesNotMatch(a,/NaN|Infinity|role="slider"|data-drag-param/);assert.match(a,/baseline|Pinned|pinned/);const aIds=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),bIds=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.ok(aIds.length>=2);assert.equal(new Set(aIds).size,aIds.length);assert.ok(aIds.every(id=>!bIds.includes(id)));assert.equal((M.render(slug,{}, {view,compact:true}).match(/role="slider"/g)||[]).length,1);assert.match(M.render(slug,{unknown:1},{view,compact:true}),/Choose valid inputs/);}
});
