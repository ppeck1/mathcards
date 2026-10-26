import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),L=require('../src/local-change.js'),Fields=require('../src/calculus-fields.js'),Plot=require('../src/plot-view.js');
const slugs=['directional-derivative','tangent-plane','gradient-descent'];
const near=(a,b,t=1e-9)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);
const height=(p,x=p.x,y=p.y)=>p.c+p.a*x*x+p.b*y*y;

test('local-change provider loads offline with immutable API and independent descriptors',()=>{
  const context=vm.createContext({AtlasPlotView:Plot,AtlasCalculusFields:Fields});vm.runInContext(fs.readFileSync(new URL('../src/local-change.js',import.meta.url),'utf8'),context);assert.equal(typeof context.AtlasLocalChange.render,'function');assert.ok(Object.isFrozen(L));
  for(const slug of slugs){assert.ok(L.has(slug));assert.equal(L.specs(slug).rendererId,slug+'-visual-model');const p=L.defaults(slug);p.a=100;assert.notEqual(L.defaults(slug).a,100);const meta=L.specs(slug);meta.views.pop();assert.equal(L.specs(slug).views.length,slug==='gradient-descent'?2:3);}
  for(const key of ['constructor','__proto__','toString','missing',null,{}]){assert.equal(L.has(key),false);assert.equal(L.render(key,{}),'');}
});

test('directional derivatives match independently sampled paths and retain unit directions',()=>{
  const h=1e-5;
  for(const angleDegrees of [-180,-120,-90,-15,0,60,90,180])for(const a of [-1,0,.75])for(const b of [-.5,0,1]){
    const p={...L.defaults('directional-derivative'),x:.7,y:-.4,a,b,angleDegrees},r=L.evaluate('directional-derivative',p),angle=angleDegrees*Math.PI/180,ux=Math.cos(angle),uy=Math.sin(angle),estimate=(height(p,p.x+h*ux,p.y+h*uy)-height(p,p.x-h*ux,p.y-h*uy))/(2*h);
    near(r.output,estimate,2e-8);near(Math.hypot(r.directionX,r.directionY),1);near(r.output,r.directionalXTerm+r.directionalYTerm);assert.ok(Math.abs(r.output)<=r.gradientNorm+1e-12);near(r.height,Fields.fieldAt(p).height);
  }
  const east=L.evaluate('directional-derivative',{angleDegrees:0}),north=L.evaluate('directional-derivative',{angleDegrees:90}),west=L.evaluate('directional-derivative',{angleDegrees:180});assert.equal(east.directionY,0);assert.equal(north.directionX,0);assert.equal(west.directionY,0);assert.equal(east.output,-1);assert.equal(north.output,-.25);assert.equal(west.output,1);
  const flat=L.evaluate('directional-derivative',{a:0,b:0});assert.equal(flat.output,0);assert.equal(Math.hypot(flat.directionX,flat.directionY),1,'The chosen direction remains defined even when the gradient is zero');
});

test('tangent predictions share base height and slopes, with an exact quadratic remainder',()=>{
  for(const a of [-1,0,1])for(const b of [-1,0,1])for(const dx of [-.8,0,.7])for(const dy of [-.5,0,.6]){
    const p={...L.defaults('tangent-plane'),a,b,dx,dy},r=L.evaluate('tangent-plane',p);near(r.baseHeight,height(p));near(r.actualHeight,height(p,p.x+dx,p.y+dy));near(r.output,r.baseHeight+2*a*p.x*dx+2*b*p.y*dy);near(r.approximationError,a*dx*dx+b*dy*dy);
  }
  const p=L.defaults('tangent-plane'),base=L.evaluate('tangent-plane',{...p,dx:0,dy:0});near(base.output,base.actualHeight);assert.equal(base.approximationError,0);
  const full=L.evaluate('tangent-plane',p),half=L.evaluate('tangent-plane',{...p,dx:p.dx/2,dy:p.dy/2});near(half.approximationError,full.approximationError/4);
  const saddle=L.evaluate('tangent-plane',{a:1,b:-1,dx:.5,dy:.5});near(saddle.approximationError,0);assert.notEqual(saddle.parameters.dx,0,'Zero signed error can cancel away from the base');
});

test('discrete descent agrees with closed-form coordinate factors and evaluated costs',()=>{
  for(const a of [.25,1,2])for(const b of [.25,1.5,2])for(const stepSize of [0,.1,.5,1,1.5])for(const iteration of [0,1,4,16]){
    const p={startX:1.7,startY:-.8,a,b,stepSize,iteration},r=L.evaluate('gradient-descent',p);near(r.currentX,p.startX*Math.pow(1-stepSize*a,iteration));near(r.currentY,p.startY*Math.pow(1-stepSize*b,iteration));near(r.cost,(a*r.currentX*r.currentX+b*r.currentY*r.currentY)/2);assert.equal(r.history.length,iteration+1);near(r.nextX,r.currentX-stepSize*a*r.currentX);near(r.nextY,r.currentY-stepSize*b*r.currentY);near(r.nextCost,(a*r.nextX*r.nextX+b*r.nextY*r.nextY)/2);
    for(let i=0;i<r.history.length;i++){assert.equal(r.history[i].iteration,i);assert.ok(Number.isFinite(r.history[i].cost));if(i&&r.stability==='contracting')assert.ok(r.history[i].cost<=r.history[i-1].cost+1e-12);}
  }
  const d=L.evaluate('gradient-descent',L.defaults('gradient-descent'));near(d.currentX,.2592);near(d.currentY,.0024);near(d.cost,.03359808);
  const hold=L.evaluate('gradient-descent',{stepSize:0});assert.equal(hold.stability,'no_move');assert.equal(hold.currentX,2);assert.equal(hold.currentY,1.5);
  const boundary=L.evaluate('gradient-descent',{stepSize:1,a:1,b:2});assert.equal(boundary.stability,'boundary');assert.equal(Math.abs(boundary.currentY),1.5);
  const oversized=L.evaluate('gradient-descent',{stepSize:1.5,a:2,b:2,iteration:16});assert.equal(oversized.stability,'not_contracting');assert.ok(oversized.cost>oversized.initialCost);assert.ok(Number.isFinite(oversized.cost));
});

test('whole update counts are discrete controls and never animation sweeps',()=>{
  const meta=L.specs('gradient-descent');assert.equal(meta.axis,'stepSize');assert.ok(!meta.sweeps.some(s=>s.key==='iteration'));assert.equal(L.controls('gradient-descent').find(c=>c.key==='iteration').discrete,true);
  for(const iteration of [.1,4.5,15.99]){const r=L.evaluate('gradient-descent',{iteration});assert.equal(r.valid,false);assert.equal(r.output,null);assert.match(r.errors[0].message,/whole number/);}
  for(const value of [0,.17,.4,.783,1,1.5])near(L.curveValue('gradient-descent',L.defaults('gradient-descent'),value),L.evaluate('gradient-descent',{stepSize:value}).cost);
});

test('descent Graph displays ln(1+C) for samples, pins and the current point while actual cost stays primary',()=>{
  const context=vm.createContext({AtlasPlotView:{render:spec=>JSON.stringify(spec)},AtlasCalculusFields:Fields});vm.runInContext(fs.readFileSync(new URL('../src/local-change.js',import.meta.url),'utf8'),context);const display=context.AtlasLocalChange;
  for(const p of [L.defaults('gradient-descent'),{...L.defaults('gradient-descent'),startX:0,startY:0},{startX:2,startY:2,a:2,b:2,stepSize:1.5,iteration:16}]){
    const r=L.evaluate('gradient-descent',p),pin={...p,iteration:2,startX:1,startY:-1},spec=JSON.parse(display.render('gradient-descent',p,{view:'graph',baseline:pin}));
    near(r.logCost,Math.log1p(r.cost));assert.equal(r.output,r.cost);near(L.curveValue('gradient-descent',p,p.stepSize),r.cost);
    assert.equal(spec.x.key,'stepSize');assert.equal(spec.x.value,p.stepSize);assert.equal(spec.y.label,'ln(1+C)');assert.equal(spec.y.min,0);assert.equal(spec.title,'Logarithmic cost display vs learning rate');assert.match(spec.description,/readout and data table retain actual C/);assert.match(spec.description,/normalized dimensionless cost/);
    for(const series of spec.series){assert.equal(series.quantity,'logCost');const parameters=series.id==='baseline'?pin:p;for(const point of series.points){const x=parameters.startX*Math.pow(1-point.x*parameters.a,parameters.iteration),y=parameters.startY*Math.pow(1-point.x*parameters.b,parameters.iteration),cost=(parameters.a*x*x+parameters.b*y*y)/2;near(point.y,Math.log1p(cost));}}
    const current=spec.current[0];near(current.y,r.logCost);assert.equal(current.quantity,'stepSize logCost');assert.ok(!current.quantity.split(' ').includes('output'));
    const html=L.render('gradient-descent',p,{view:'graph',baseline:pin}),point=role(html,'current-point');near(Number(point['data-y']),r.logCost);assert.equal(point['data-quantity'],'stepSize logCost');const actualMark=role(html,'actual-cost-readout');near(Number(actualMark['data-value']),r.cost);assert.equal(actualMark['data-quantity'],'cost output');assert.match(html,/Actual C =/);
  }
});

test('genuine field Spatial views reuse evaluated heights, cameras and the actual tangent plane',()=>{
  for(const slug of ['directional-derivative','tangent-plane']){const p=L.defaults(slug),r=L.evaluate(slug,p);for(const camera of [.15,.65,1]){const html=L.render(slug,p,{view:'spatial',camera}),point=role(html,'surface-point'),expected=Fields.projectPoint(p.x,p.y,r.height,camera);near(Number(point.cx),expected.x,1e-6);near(Number(point.cy),expected.y,1e-6);assert.equal((html.match(/data-role="surface-cell"/g)||[]).length,144);assert.notEqual(html,L.render(slug,p,{view:'geometry'}));}
  }
  const p=L.defaults('tangent-plane'),r=L.evaluate('tangent-plane',p),html=L.render('tangent-plane',p,{view:'spatial'}),patch=role(html,'tangent-plane');for(const row of patch['data-world-corners'].split(';')){const [x,y,z]=row.split(',').map(Number);near(z,r.baseHeight+r.partialX*(x-p.x)+r.partialY*(y-p.y));}assert.equal(Number(role(html,'actual-target')['data-height']),r.actualHeight);assert.equal(Number(role(html,'predicted-target')['data-height']),r.predictedHeight);
});

test('out-of-frame descent uses bounded clipped segments and preserves exact readable values',()=>{
  const p={startX:2,startY:2,a:2,b:2,stepSize:1.5,iteration:16},r=L.evaluate('gradient-descent',p),html=L.render('gradient-descent',p);assert.match(html,/Current point is outside the frame/);assert.match(html,/segments are clipped/);assert.ok(r.currentX>2.5);
  const dots=[...html.matchAll(/<circle[^>]*data-role="iterate-point"[^>]*>/g)].map(([tag])=>attrs(tag));assert.ok(dots.every(point=>Math.abs(Number(point['data-x']))<=2.5&&Math.abs(Number(point['data-y']))<=2.5));assert.ok(!dots.some(point=>Number(point['data-iteration'])===16),'Do not invent a visible current iterate at the frame boundary');
  for(const [tag]of html.matchAll(/<line[^>]*data-role="(?:iterate-segment|next-update)"[^>]*>/g)){const a=attrs(tag);for(const key of ['x1','x2'])assert.ok(Number(a[key])>=105-1e-6&&Number(a[key])<=365+1e-6);}
});

test('a fixed signed-error magnifier makes short-move errors visible without distorting surface heights',()=>{
  const p={...L.defaults('tangent-plane'),dy:0},r=L.evaluate('tangent-plane',p);
  for(const view of ['geometry','spatial']){const html=L.render('tangent-plane',p,{view}),bar=role(html,'error-magnifier');near(Number(bar['data-error']),-.08);assert.equal(bar['data-clipped'],'false');assert.ok(Number(bar.x2)<Number(bar.x1));assert.match(html,/fixed error magnifier spans ±0.25/);}
  const clipped=role(L.render('tangent-plane',{...p,a:1,b:1,dx:1,dy:1}),'error-magnifier');assert.equal(clipped['data-clipped'],'true');assert.equal(Number(clipped['data-error']),2);assert.equal(Number(clipped.x2),670);near(r.actualHeight,2.9575);
});

test('all boundary states render finite views and pins with scoped identifiers',()=>{
  for(const slug of slugs){const rules=L.controls(slug),corners=rules.reduce((rows,c)=>rows.flatMap(p=>[c.min,c.max].map(value=>({...p,[c.key]:value}))),[{}]);for(const p of corners)for(const view of L.specs(slug).views){const html=L.render(slug,p,{view,id:'left:slot'});assert.match(html,/<svg/);assert.doesNotMatch(html,/NaN|Infinity|undefined=/);}
    for(const view of L.specs(slug).views){const p=L.defaults(slug),html=L.render(slug,p,{view,id:'a:b',baseline:p}),other=L.render(slug,p,{view,id:'a/b'});assert.match(html,view==='graph'?/data-series="baseline"/:view==='spatial'?/baseline-surface-point/:slug==='gradient-descent'?/baseline-iterate-segment/:/baseline-field-point/);const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id));for(const [,id]of other.matchAll(/\bid="([^"]+)"/g))assert.ok(!ids.has(id));}
  }
});

test('validation rejects malformed inputs, and bounds narrow all interactive scene rails',()=>{
  for(const slug of slugs){for(const input of [null,[],false,'x',{extra:1},{a:NaN},{a:Infinity},{a:'1'},{a:100}])assert.equal(L.evaluate(slug,input).valid,false);const p=L.defaults(slug),axis=L.specs(slug).axis,rule=L.controls(slug).find(c=>c.key===axis),min=rule.min+(rule.max-rule.min)*.2,max=rule.min+(rule.max-rule.min)*.8;for(const view of L.specs(slug).views){const html=L.render(slug,p,{view,controlBounds:{[axis]:{min,max,step:.02}}}),handle=attrs(html.match(new RegExp('<g[^>]*data-drag-param="'+axis+'"[^>]*>'))[0]);near(Number(handle['data-drag-min']),min);near(Number(handle['data-drag-max']),max);assert.equal(Number(handle['data-drag-step']),.02);}}
});

test('canonical numerical cases and original worked presets match the provider',()=>{
  let cases=0,presets=0;for(const slug of slugs){const card=JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));for(const row of card.interactive.expected_cases){const r=L.evaluate(slug,row.input);assert.equal(r.status,row.status||'valid');if(row.output==null)assert.equal(r.output,null);else near(r.output,row.output,1e-10);cases++;}for(const example of card.examples){const p=example.interactive_preset||example.playground_preset||example.preset;assert.ok(p,example.title);assert.equal(L.evaluate(slug,p).valid,true);presets++;}}
  assert.equal(cases,36);assert.equal(presets,15);
});
