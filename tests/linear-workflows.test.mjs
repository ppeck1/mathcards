import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),L=require('../src/linear-workflows.js'),Plot=require('../src/plot-view.js');
const slugs=['linear-combination','basis','matrix-product'];
const near=(a,b,tolerance=1e-10)=>assert.ok(Math.abs(a-b)<=tolerance*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attributes=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const tip=(html,role)=>attributes(html.match(new RegExp('<circle[^>]*data-role="'+role+'"[^>]*>'))[0]);
const multiply=(A,B)=>A.map(row=>B[0].map((_,j)=>row.reduce((sum,value,k)=>sum+value*B[k][j],0)));
const apply=(A,v)=>A.map(row=>row.reduce((sum,value,i)=>sum+value*v[i],0));

test('three independent workflow families load without DOM, timers or mutable metadata',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(fs.readFileSync(new URL('../src/linear-workflows.js',import.meta.url),'utf8'),context);
  assert.ok(Object.isFrozen(L));assert.equal(typeof context.AtlasLinearWorkflows.render,'function');
  for(const slug of slugs){assert.equal(L.has(slug),true);assert.equal(L.evaluate(slug,L.defaults(slug)).status,'valid');assert.equal(L.specs(slug).rendererId,slug+'-visual-model');assert.ok(L.specs(slug).sweeps.every(sweep=>typeof L.defaults(slug)[sweep.key]==='number'));assert.equal(L.specs(slug).unit,'');const copy=L.defaults(slug);copy[L.specs(slug).axis]=100;assert.notDeepEqual(copy,L.defaults(slug));}
  const select=L.controls('matrix-product').find(control=>control.key==='order');select.options[0].label='changed';assert.notEqual(L.controls('matrix-product').find(control=>control.key==='order').options[0].label,'changed');
  for(const slug of ['__proto__','constructor','toString','absent',null,{}])assert.equal(L.has(slug),false);
});

test('linear combinations agree with signed component sums and scalar distributivity',()=>{
  for(const r of [-2,-1,0,.5,1,2])for(const s of [-2,0,1,2]){
    const p={ux:2,uy:-1,vx:-3,vy:2,r,s},v=L.evaluate('linear-combination',p);
    near(v.combinedX,2*r-3*s);near(v.combinedY,-r+2*s);near(v.norm,Math.hypot(2*r-3*s,-r+2*s));assert.equal(v.output,v.combinedX);
    near(v.firstX+v.secondX,v.combinedX);near(v.firstY+v.secondY,v.combinedY);
  }
  const zero=L.evaluate('linear-combination',{ux:1,uy:2,vx:1,vy:2,r:1,s:-1});assert.equal(zero.norm,0);
  const a=L.evaluate('linear-combination',{r:.5,s:.5}),b=L.evaluate('linear-combination',{r:1,s:1});near(2*a.combinedX,b.combinedX);near(2*a.combinedY,b.combinedY);
});

test('independent basis coordinates reconstruct targets under rotations, reversals and skew frames',()=>{
  const initial=L.evaluate('basis',L.defaults('basis'));near(initial.r,1);near(initial.s,2);
  for(const a of [-2,-1,0,1,2])for(const b of [-2,0,2])for(const c of [-1,0,1])for(const d of [-2,-1,0,1,2]){
    if(a*d-b*c===0)continue;
    for(const x of [-3,0,2])for(const y of [-2,0,3]){
      const v=L.evaluate('basis',{a,b,c,d,x,y});assert.equal(v.solutionStatus,'unique');assert.equal(v.rank,2);assert.equal(v.basisKind,'plane');assert.equal(v.inverseExists,true);near(v.r*a+v.s*b,x);near(v.r*c+v.s*d,y);near(v.residualNorm,0);assert.equal(v.output,v.r);
    }
  }
});

test('dependent proposed bases distinguish a line, a zero span, no solution and infinitely many solutions',()=>{
  const line={a:1,b:2,c:.5,d:1};
  for(const [target,status,consistent]of[[{x:2,y:1},'infinite_solutions',true],[{x:2,y:0},'no_solution',false],[{x:0,y:0},'infinite_solutions',true]]){
    const v=L.evaluate('basis',{...line,...target});assert.equal(v.valid,true);assert.equal(v.status,'valid');assert.equal(v.rank,1);assert.equal(v.basisKind,'line');assert.equal(v.solutionStatus,status);assert.equal(v.consistent,consistent);assert.equal(v.inverseExists,false);for(const key of ['r','s','output','reconstructedX','reconstructedY'])assert.equal(v[key],null);
  }
  for(const x of [0,1]){const v=L.evaluate('basis',{a:0,b:0,c:0,d:0,x,y:0});assert.equal(v.basisKind,'zero');assert.equal(v.rank,0);assert.equal(v.solutionStatus,x?'no_solution':'infinite_solutions');assert.equal(v.output,null);}
  const negative=L.evaluate('basis',{a:-1,b:0,c:0,d:1,x:3,y:2});near(negative.r,-3);near(negative.s,2);near(negative.determinant,-1);
});

test('near-dependent bases keep actual large coefficients and report numeric-range limits honestly',()=>{
  const large=L.evaluate('basis',{a:1,b:1,c:0,d:1e-12,x:1,y:1});assert.equal(large.solutionStatus,'unique');near(large.s,1e12);near(large.r,1-1e12);near(large.reconstructedX,1);
  for(const p of [{a:1,b:0,c:0,d:1e-320,x:1,y:1},{a:1e-200,b:0,c:0,d:1e-200,x:1,y:1}]){
    const v=L.evaluate('basis',p);assert.equal(v.valid,true);assert.equal(v.rank,2);assert.equal(v.solutionStatus,'numeric_range');assert.equal(v.r,null);assert.equal(v.s,null);assert.equal(v.output,null);for(const value of Object.values(v))if(typeof value==='number')assert.ok(Number.isFinite(value));
  }
});

test('matrix products match independent row-column multiplication for both exact orders',()=>{
  for(const a of [-2,-1,0,.5,2])for(const b of [-2,0,1,2])for(const order of ['B_then_A','A_then_B']){
    const A=[[1,a],[0,1]],B=[[1,0],[b,1]],product=order==='B_then_A'?multiply(A,B):multiply(B,A),expected=apply(product,[2,-1]),r=L.evaluate('matrix-product',{a,b,x:2,y:-1,order});
    near(r.finalX,expected[0]);near(r.finalY,expected[1]);assert.deepEqual([[r.productA,r.productB],[r.productC,r.productD]],product);near(r.productA*r.productD-r.productB*r.productC,1);assert.equal(r.determinant,1);
    const intermediate=apply(order==='B_then_A'?B:A,[2,-1]);near(r.intermediateX,intermediate[0]);near(r.intermediateY,intermediate[1]);
    const other=L.evaluate('matrix-product',{a,b,x:2,y:-1,order:order==='B_then_A'?'A_then_B':'B_then_A'});near(r.otherFinalX,other.finalX);near(r.otherFinalY,other.finalY);near(r.differenceX,r.finalX-other.finalX);
  }
  const ab=L.evaluate('matrix-product',L.defaults('matrix-product')),ba=L.evaluate('matrix-product',{order:'A_then_B'});assert.deepEqual([ab.finalX,ab.finalY],[3,2]);assert.deepEqual([ba.finalX,ba.finalY],[2,3]);
});

test('the strict parameter boundary rejects unsupported values and preserves the order enum',()=>{
  for(const slug of slugs){assert.equal(L.evaluate(slug,{}).valid,true);for(const input of [null,[],false,'x',{extra:1},{[L.specs(slug).axis]:NaN},{[L.specs(slug).axis]:Infinity},{[L.specs(slug).axis]:'1'},{[L.specs(slug).axis]:100}]){const r=L.evaluate(slug,input);assert.equal(r.valid,false);assert.equal(r.output,null);assert.equal(r.status,'invalid_parameters');}}
  for(const order of ['AB','BA',0,null,'B_then_A '])assert.equal(L.evaluate('matrix-product',{order}).valid,false);
  assert.equal(L.evaluate('matrix-product',{order:'A_then_B'}).parameters.order,'A_then_B');
});

test('graphs sample the declared primary input, leave nonunique basis gaps and separate matrix orders',()=>{
  for(const slug of slugs){const p=L.defaults(slug),axis=L.specs(slug).axis;near(L.curveValue(slug,p,p[axis]),L.evaluate(slug,p).output);assert.equal(L.curveValue(slug,p,100),null);assert.equal(L.curveValue(slug,p,NaN),null);assert.notEqual(L.render(slug,p),L.render(slug,p,{view:'graph'}));}
  for(const x of [-3,0,1,2,3])assert.equal(L.curveValue('basis',{a:1,b:2,c:.5,d:1,x:2,y:1},x),null);
  const html=L.render('basis',{a:1,b:2,c:.5,d:1,x:2,y:1},{view:'graph'});assert.match(html,/No unique coordinate/);assert.doesNotMatch(html,/data-series="basis-curve"/);assert.doesNotMatch(html,/data-role="current-point"/);assert.match(html,/data-role="input-axis-handle"/);assert.match(html,/no coefficient point is plotted/);
  const product=L.render('matrix-product',{a:1,b:2,x:2,y:0,order:'A_then_B'},{view:'graph'});assert.match(product,/data-series="other-order"/);assert.match(product,/one exact order/);
});

test('head-to-tail geometry uses signed endpoints and the selected product semantic key',()=>{
  const p={ux:2,uy:1,vx:-1,vy:2,r:-1,s:1},r=L.evaluate('linear-combination',p),html=L.render('linear-combination',p);
  near(Number(tip(html,'first-scaled-tip')['data-x']),-2);near(Number(tip(html,'combined-tip')['data-x']),r.combinedX);near(Number(tip(html,'combined-tip')['data-y']),r.combinedY);
  for(const order of ['B_then_A','A_then_B']){
    const label=order==='B_then_A'?'AB':'BA',other=label==='AB'?'BA':'AB',svg=L.render('matrix-product',{order}),groupFor=role=>svg.match(new RegExp('<g class="story-cue" data-quantity="([^"]+)"[^>]*>(?:(?!<g).)*?data-role="'+role+'"','s'))?.[1];
    assert.ok(groupFor('final-tip').split(' ').includes('product:'+label));assert.ok(groupFor('other-order-tip').split(' ').includes('product:'+other));assert.ok(!groupFor('final-tip').split(' ').includes('product:'+other));
  }
});

test('basis clipping keeps the target endpoint accurate even when weighted arrows are astronomically long',()=>{
  const parameters={a:1,b:1,c:0,d:1e-300,x:1,y:1},html=L.render('basis',parameters);assert.match(html,/Clipped arrows · residual/);assert.doesNotMatch(html,/NaN|Infinity/);assert.match(L.specs('basis').readout(parameters,L.evaluate('basis',parameters)).insight,/loses precision/);
  const target=tip(html,'target-tip'),second=tip(html,'basis-second-tip');near(Number(target.cx),Number(second.cx));near(Number(target.cy),Number(second.cy));near(Number(second['data-x']),1);assert.equal(second['data-clipped'],'true');
  for(const tag of html.matchAll(/<(?:line|circle|path|polygon)\b[^>]*>/g))for(const [key,value]of Object.entries(attributes(tag[0])))if(['x1','x2','y1','y2','cx','cy'].includes(key))assert.ok(Number.isFinite(Number(value))&&Math.abs(Number(value))<10000,key+' '+value);
  const graph=L.render('basis',{a:1,b:0,c:0,d:1e-12,x:1,y:1},{view:'graph'});assert.doesNotMatch(graph,/NaN|Infinity/);
});

test('numeric corner renders, pin overlays and scoped SVG ids stay finite in both views',()=>{
  for(const slug of slugs){
    const rules=L.controls(slug),corners=rules.reduce((rows,c)=>rows.flatMap(p=>(c.type==='select'?c.options.map(option=>option.value):[c.min,c.max]).map(value=>({...p,[c.key]:value}))),[{}]);
    for(const p of corners)for(const view of ['geometry','graph']){const markup=L.render(slug,p,{view,id:'panel:a'});assert.match(markup,/<svg/);assert.doesNotMatch(markup,/NaN|Infinity|undefined=/);}
    for(const view of ['geometry','graph']){const markup=L.render(slug,L.defaults(slug),{view,baseline:L.defaults(slug),id:'panel:a'}),other=L.render(slug,L.defaults(slug),{view,id:'panel/a'});assert.match(markup,view==='graph'?/data-series="baseline"/:/data-role="baseline-tip"/);const ids=new Set([...markup.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id));for(const [,id]of other.matchAll(/\bid="([^"]+)"/g))assert.ok(!ids.has(id));}
  }
});

test('geometry and graph rails honor story bounds and readouts retain nullable coordinate meanings',()=>{
  for(const slug of slugs){const p=L.defaults(slug),axis=L.specs(slug).axis,rule=L.controls(slug).find(c=>c.key===axis),controlBounds={[axis]:{min:Math.max(0,rule.min),max:rule.max,step:.1}};
    for(const view of ['geometry','graph']){const html=L.render(slug,p,{view,controlBounds}),tag=attributes(html.match(new RegExp('<g[^>]*data-drag-param="'+axis+'"[^>]*>'))[0]);assert.equal(Number(tag['data-drag-min']),0);assert.equal(Number(tag['data-drag-step']),.1);}
    const readout=L.specs(slug).readout(p,L.evaluate(slug,p));assert.ok(readout.expression);assert.equal(readout.stats.length,3);
  }
  const p={a:1,b:2,c:.5,d:1,x:2,y:0},readout=L.specs('basis').readout(p,L.evaluate('basis',p));assert.match(readout.expression,/outside the span/);assert.equal(readout.stats[1].value,null);assert.match(readout.stats[0].note,/no inverse/);
});
