import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/data-iteration.js'),Plot=require('../src/plot-view.js');
const slugs=['conditional-probability','variance','recurrence'];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);

test('data-and-iteration provider is offline and returns independently owned metadata',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(fs.readFileSync(new URL('../src/data-iteration.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasDataIteration.render,'function');assert.ok(Object.isFrozen(M));
  for(const slug of slugs){
    assert.ok(M.has(slug));assert.equal(M.specs(slug).rendererId,slug+'-visual-model');
    const d=M.defaults(slug),key=Object.keys(d)[0];d[key]=999;assert.notEqual(M.defaults(slug)[key],999);
    const c=M.controls(slug);c[0].label='Altered';assert.notEqual(M.controls(slug)[0].label,'Altered');
    const s=M.specs(slug);s.views.pop();assert.deepEqual(M.specs(slug).views,['geometry','graph']);
  }
  const c=M.controls('conditional-probability');c[1].excluded.push(40);assert.deepEqual(M.controls('conditional-probability')[1].excluded,[0]);
  for(const value of [null,{},'constructor','__proto__','missing']){assert.equal(M.has(value),false);assert.equal(M.render(value,{}),'');}
  assert.throws(()=>M.defaults('missing'),RangeError);
});

test('conditional probability renormalizes overlap within a positive conditioning window',()=>{
  for(const eventEnd of [0,.1,1,24,60,100])for(const windowEnd of [.1,1,12,24,40,80,100]){
    const r=M.evaluate('conditional-probability',{eventEnd,windowEnd});
    const outsideWindow=Math.max(0,windowEnd-eventEnd);
    near(r.output,1-outsideWindow/windowEnd);near(r.output*r.givenProbability,r.intersectionProbability);
    near(r.givenProbability,windowEnd/100);near(r.eventProbability,eventEnd/100);
    assert.ok(r.output>=0&&r.output<=1);assert.equal(r.output,r.conditionalProbability);
    if(windowEnd<=eventEnd)assert.equal(r.output,1);
  }
  const a=M.evaluate('conditional-probability');assert.equal(a.output,.6);assert.equal(a.overlapLength,24);
  assert.equal(M.evaluate('conditional-probability',{windowEnd:100}).output,.24);
  assert.equal(M.evaluate('conditional-probability',{windowEnd:12}).output,1);
  assert.equal(M.evaluate('conditional-probability',{eventEnd:0}).output,0);
});

test('empty conditioning is undefined and never silently normalized or clamped',()=>{
  for(const eventEnd of [0,24,100]){
    const r=M.evaluate('conditional-probability',{eventEnd,windowEnd:0});
    assert.equal(r.valid,false);assert.equal(r.output,null);assert.equal(r.status,'invalid_parameters');assert.match(r.errors[0].message,/P\(B\).*greater than zero/);
    assert.equal(M.curveValue('conditional-probability',{eventEnd},0),null);
    for(const view of ['geometry','graph']){const html=M.render('conditional-probability',{eventEnd,windowEnd:0},{view,compact:true});assert.match(html,/P\(B\).*greater than zero/);assert.doesNotMatch(html,/NaN|Infinity/);}
  }
  assert.equal(M.evaluate('conditional-probability',{eventEnd:1e-300,windowEnd:1e-300}).output,1);
});

test('conditioning geometry shows a shrinking physical window and growing normalized proportion',()=>{
  const full=M.render('conditional-probability',{eventEnd:24,windowEnd:100},{sceneControl:false,compact:true});
  const narrow=M.render('conditional-probability',{eventEnd:24,windowEnd:40},{sceneControl:false,compact:true});
  near(Number(role(narrow,'window-frame').width)/Number(role(full,'window-frame').width),.4);
  near(Number(role(narrow,'conditional-fill').width)/Number(role(full,'conditional-fill').width),2.5);
  assert.equal(Number(role(narrow,'overlap-strip').width),Number(role(full,'overlap-strip').width));
  assert.match(narrow,/Inside B · 40 cm fills this frame/);assert.match(narrow,/lower frame expands only B/);
  for(const key of ['event:A','event:B','event:intersection','overlapLength','givenProbability','conditionalProbability'])assert.ok(narrow.includes(key));
});

test('conditional graphs retain exact small-window plateaus, current samples and pinned corners',()=>{
  const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});
  vm.runInContext(fs.readFileSync(new URL('../src/data-iteration.js',import.meta.url),'utf8'),context);
  const model=context.AtlasDataIteration,series=(spec,id)=>spec.series.find(s=>s.id===id).points;
  const spec=model.render('conditional-probability',{eventEnd:.1,windowEnd:.1},{view:'graph',baseline:{eventEnd:.2,windowEnd:.35}});
  const live=series(spec,'relationship'),pinned=series(spec,'baseline');
  for(const x of [.05,.1])assert.equal(live.find(point=>point.x===x)?.y,1,'small event retains its unit plateau');
  assert.equal(live.find(point=>point.x===.5)?.y,.2);
  assert.equal(pinned.find(point=>point.x===.1)?.y,1);
  assert.equal(pinned.find(point=>point.x===.2)?.y,1,'pinned series includes its own exact corner');
  assert.equal(pinned.find(point=>point.x===.35)?.y,.2/.35,'pinned result lies on its sampled curve');
  for(const [id,label]of [['relationship','Conditional probability P(A|B)'],['baseline','Pinned result']]){
    const current=spec.current.find(point=>point.label===label),sample=series(spec,id).find(point=>point.x===current.x);
    assert.equal(sample?.y,current.y);
  }
  for(const eventEnd of [0,Number.MIN_VALUE,1e-323,.1,100]){
    const windowEnd=Number.MIN_VALUE*100,graph=model.render('conditional-probability',{eventEnd,windowEnd},{view:'graph'}),points=series(graph,'relationship');
    assert.equal(points[0].x,0);assert.equal(points[0].y,null,'zero is never a defined conditioning point');
    points.forEach((point,i)=>{assert.ok(Number.isFinite(point.x));if(i){assert.ok(point.x>points[i-1].x);assert.ok(Number.isFinite(point.y)&&point.y>=0&&point.y<=1);}});
    const current=graph.current[0];assert.equal(points.find(point=>point.x===current.x)?.y,current.y);
    if(!eventEnd)assert.ok(points.slice(1).every(point=>point.y===0),'empty event has no unit plateau');
    else if(eventEnd/100>0)assert.equal(points.find(point=>point.x===eventEnd)?.y,1);
    else assert.ok(!points.some(point=>point.x===eventEnd),'unsupported positive windows are omitted from the graph');
    const html=M.render('conditional-probability',{eventEnd,windowEnd},{view:'graph',baseline:{eventEnd:.2,windowEnd:.35}});
    assert.doesNotMatch(html,/NaN|Infinity/);
  }
});

test('population variance agrees with an independent quadratic identity and noncancelling squared deviations',()=>{
  for(let lastLength=0;lastLength<=20;lastLength+=.125){
    const r=M.evaluate('variance',{lastLength}),expected=2+3*(lastLength-10)**2/16;
    near(r.output,expected);near(r.mean,(30+lastLength)/4);near(r.deviations.reduce((a,b)=>a+b,0),0);
    near(r.standardDeviation*r.standardDeviation,r.variance);near(r.sumSquaredDeviations,4*r.variance);
    assert.equal(r.output,r.variance);assert.equal(r.count,4);assert.equal(r.unit,'cm²');assert.ok(r.output>=2);
  }
  const d=M.evaluate('variance');assert.equal(d.mean,11);assert.deepEqual(d.deviations,[-3,-1,1,3]);assert.deepEqual(d.squaredDeviations,[9,1,1,9]);assert.equal(d.output,5);assert.equal(d.sumSquaredDeviations,20);
  assert.equal(M.evaluate('variance',{lastLength:10}).output,2);
  assert.equal(M.evaluate('variance',{lastLength:0}).output,20.75);assert.equal(M.evaluate('variance',{lastLength:20}).output,20.75);
  for(const h of [0,.25,2,8,10])near(M.evaluate('variance',{lastLength:10-h}).output,M.evaluate('variance',{lastLength:10+h}).output);
  d.measurements.push(99);assert.equal(M.evaluate('variance').measurements.length,4);
  d.deviations[0]=99;assert.equal(M.evaluate('variance').deviations[0],-3);
});

test('variance squares share one area scale and expose the last deviation through its squared area',()=>{
  for(const lastLength of [0,10,14,20]){
    const html=M.render('variance',{lastLength},{sceneControl:false,compact:true}),r=M.evaluate('variance',{lastLength});
    const squares=[...html.matchAll(/<rect[^>]*data-role="deviation-square"[^>]*>/g)].map(([tag])=>attrs(tag));
    assert.equal(squares.length,4);
    squares.forEach((square,i)=>{near(Number(square.width)*Number(square.height),49*r.squaredDeviations[i]);near(Number(square['data-area']),r.squaredDeviations[i]);assert.equal(square.width,square.height);});
    const bars=[...html.matchAll(/<rect[^>]*data-role="length-bar"[^>]*>/g)].map(([tag])=>attrs(tag));
    bars.forEach((bar,i)=>near(Number(bar.height),6*r.measurements[i]));
    assert.ok(html.includes('data-quantity="squaredDeviations square4 deviation4 '));assert.match(html,/standard deviation returns to cm/);
  }
});

test('recurrence matches a closed-form finite geometric sum across the full domain',()=>{
  for(const initial of [0,12,20,40])for(const retention of [0,.1,.25,.5,.75,.9,1])for(const addition of [0,.5,3,5])for(let rounds=0;rounds<=12;rounds++){
    const r=M.evaluate('recurrence',{initial,retention,addition,rounds});
    const expected=retention===1?initial+rounds*addition:initial*retention**rounds+addition*(1-retention**rounds)/(1-retention);
    near(r.output,expected);assert.equal(r.values.length,rounds+1);assert.equal(r.values[0],initial);assert.equal(r.values[rounds],r.output);
    assert.ok(r.values.every(v=>v>=0&&v<=100));
    if(rounds){near(r.retained+r.added,r.output);assert.equal(r.added,addition);assert.equal(r.previous,r.values[rounds-1]);}
    else{assert.equal(r.output,initial);assert.equal(r.previous,initial);assert.equal(r.retained,0);assert.equal(r.added,0);}
  }
  const d=M.evaluate('recurrence');assert.equal(d.output,13.423828125);assert.equal(d.previous,13.8984375);assert.equal(d.retained,10.423828125);
  const one=M.evaluate('recurrence',{rounds:1});assert.equal(one.output,18);assert.notEqual(one.output,.75*(20+3));near(one.output-.75*(20+3),3*(1-.75));
  assert.equal(M.evaluate('recurrence',{initial:12}).output,12);
  assert.equal(M.evaluate('recurrence',{initial:40,retention:1,addition:5,rounds:12}).output,100);
});

test('discrete rounds are validated, excluded from smooth sweeps and represented by exact graph samples',()=>{
  assert.equal(M.controls('recurrence').find(c=>c.key==='rounds').discrete,true);
  assert.ok(!M.specs('recurrence').sweeps.some(c=>c.key==='rounds'));
  for(const rounds of [.1,1.5,11.99])assert.equal(M.evaluate('recurrence',{rounds}).valid,false);
  for(const rounds of [0,1,6,12]){
    const r=M.evaluate('recurrence',{rounds}),html=M.render('recurrence',{rounds},{view:'graph',sceneControl:false});
    const samples=[...html.matchAll(/<circle[^>]*data-role="sample-point"[^>]*>/g)].map(([tag])=>attrs(tag));
    assert.equal(samples.length,rounds+1);assert.deepEqual(samples.map(x=>Number(x['data-x'])),Array.from({length:rounds+1},(_,i)=>i));
    samples.forEach((point,i)=>assert.equal(Number(point['data-y']),r.values[i]));assert.match(html,/do not compute fractional rounds/);
    assert.match(html,/<path[^>]*data-series="rounds"[^>]*stroke-dasharray=/);assert.doesNotMatch(html,/role="slider"/);
  }
});

test('recurrence geometry uses one fixed volume scale and distinguishes the zero-update state',()=>{
  for(const parameters of [{initial:20,retention:.75,addition:3,rounds:6},{initial:40,retention:1,addition:5,rounds:12}]){
    const r=M.evaluate('recurrence',parameters),html=M.render('recurrence',parameters,{compact:true,sceneControl:false});
    near(Number(role(html,'current-volume').width)/Number(role(html,'previous-volume').width),r.output/r.previous,1e-7);
    near(Number(role(html,'current-volume').width),Number(role(html,'retained-volume').width)+Number(role(html,'added-volume').width),1e-7);
    assert.match(html,/same volume scale/);
  }
  const zero=M.render('recurrence',{rounds:0},{compact:true,sceneControl:false});assert.match(zero,/no retaining or refilling/);assert.doesNotMatch(zero,/data-role="added-volume"/);assert.equal(Number(role(zero,'retained-volume').width),0);
});

test('all input errors are explicit and never mutate or coerce caller parameters',()=>{
  for(const slug of slugs){
    const p=M.defaults(slug);const before=JSON.stringify(p);M.evaluate(slug,p);assert.equal(JSON.stringify(p),before);
    for(const input of [null,[],7,'parameters',{extra:1}])assert.equal(M.evaluate(slug,input).valid,false);
    for(const c of M.controls(slug))for(const value of [NaN,Infinity,-Infinity,'1',null,c.min-1,c.max+1]){
      const r=M.evaluate(slug,{[c.key]:value});assert.equal(r.valid,false,slug+' '+c.key);assert.equal(r.output,null);
    }
  }
});

test('every control corner renders finite responsive views and pinned comparisons without shared SVG identifiers',()=>{
  for(const slug of slugs){
    const corners=M.controls(slug).reduce((rows,c)=>rows.flatMap(p=>[c.min,c.max].map(value=>({...p,[c.key]:value}))),[{}]);
    for(const p of corners)for(const view of ['geometry','graph'])for(const compact of [false,true]){
      const html=M.render(slug,p,{view,compact,sceneControl:false,id:'left:slot'});assert.match(html,/<svg/);assert.doesNotMatch(html,/NaN|Infinity|undefined=/);
      for(const [,value]of html.matchAll(/\b(?:width|height|r)="([^"]+)"/g))if(!value.includes('%'))assert.ok(Number(value)>=0);
    }
    for(const view of ['geometry','graph']){
      const p=M.defaults(slug),html=M.render(slug,p,{view,baseline:p,id:'left:slot'}),other=M.render(slug,p,{view,id:'left/slot'});
      assert.match(html,/baseline/);const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id));for(const [,id]of other.matchAll(/\bid="([^"]+)"/g))assert.ok(!ids.has(id));
      const safe=M.render(slug,p,{view,id:'x"><script>bad()</script>'});assert.doesNotMatch(safe,/<script|onerror=/);assert.match(safe,/data-iteration-|plot-/);
    }
  }
});

test('guided geometry contains one result scene and no duplicate in-scene slider',()=>{
  for(const slug of slugs){
    const guided=M.render(slug,M.defaults(slug),{compact:true,sceneControl:false});assert.doesNotMatch(guided,/role="slider"|data-drag-param/);assert.equal((guided.match(/<figure/g)||[]).length,1);
    const advanced=M.render(slug,M.defaults(slug));assert.match(advanced,/role="slider"/);assert.match(advanced,new RegExp('data-drag-param="'+M.specs(slug).axis+'"'));
  }
});

test('conditional scene controls retain valid sub-centimetre windows in their accessible bounds',()=>{
  for(const windowEnd of [40,.1,.001,1e-300])for(const view of ['geometry','graph']){
    const html=M.render('conditional-probability',{eventEnd:.1,windowEnd},{compact:true,view});
    const rail=html.match(/<g[^>]*role="slider"[^>]+>/)?.[0];
    assert.ok(rail);
    const min=Number(rail.match(/aria-valuemin="([^"]+)"/)[1]);
    const now=Number(rail.match(/aria-valuenow="([^"]+)"/)[1]);
    const dragMin=Number(rail.match(/data-drag-min="([^"]+)"/)[1]);
    assert.ok(min>0&&min<=windowEnd);
    assert.equal(now,windowEnd);
    assert.equal(dragMin,min);
    assert.equal(min,Math.min(.01,windowEnd));
    const reachable=M.evaluate('conditional-probability',{eventEnd:.1,windowEnd:min});
    assert.ok(reachable.valid&&reachable.givenProbability>0&&Number.isFinite(reachable.output));
    near(reachable.intersectionProbability/reachable.givenProbability,reachable.output);
  }
  assert.equal(M.evaluate('conditional-probability',{windowEnd:0}).valid,false);
  assert.equal(M.specs('conditional-probability').sweeps.find(c=>c.key==='windowEnd').min,1);
});

test('positive windows below probability precision receive an honest finite fallback',()=>{
  for(const windowEnd of [Number.MIN_VALUE,1e-323]){
    const p={eventEnd:.1,windowEnd},r=M.evaluate('conditional-probability',p);
    assert.equal(r.valid,false);assert.equal(r.output,null);assert.equal(r.status,'invalid_parameters');
    assert.equal(r.errors[0].code,'numeric_precision');assert.match(r.errors[0].message,/positive window.*numeric precision/);
    assert.doesNotMatch(r.errors[0].message,/P\(B\).*greater than zero/);
    assert.equal(M.curveValue('conditional-probability',p,windowEnd),null);
    for(const view of ['geometry','graph']){
      const html=M.render('conditional-probability',p,{view,compact:true});
      assert.match(html,/below numeric precision/);assert.doesNotMatch(html,/NaN|Infinity|role="slider"|0 \/ 0 = 1/);
    }
  }
  const p={eventEnd:1e-300,windowEnd:1e-300},r=M.evaluate('conditional-probability',p);
  assert.ok(r.valid&&r.givenProbability>0);assert.equal(r.output,1);
  assert.equal(M.specs('conditional-probability').readout(p,r).expression,'P(A|B) = 1e−300 / 1e−300 = 1');
});
