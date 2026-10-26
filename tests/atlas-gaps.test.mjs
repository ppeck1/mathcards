import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/atlas-gaps.js'),Plot=require('../src/plot-view.js');
const slugs=['set','population-sample','computational-complexity'];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);

test('gap provider loads offline, has safe identities and independent descriptors',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(fs.readFileSync(new URL('../src/atlas-gaps.js',import.meta.url),'utf8'),context);assert.equal(typeof context.AtlasGaps.evaluate,'function');assert.ok(Object.isFrozen(M));
  for(const slug of slugs){assert.ok(M.has(slug));assert.equal(M.specs(slug).rendererId,slug+'-visual-model');const p=M.defaults(slug),key=Object.keys(p)[0];p[key]=1000;assert.notEqual(M.defaults(slug)[key],1000);const spec=M.specs(slug);spec.views.pop();assert.equal(M.specs(slug).views.length,2);}
  const select=M.controls('set').find(c=>c.key==='operation');assert.equal(select.type,'select');assert.deepEqual(select.options.map(o=>o.value),['intersection','union','difference']);select.options[0].label='Modified';assert.notEqual(M.controls('set').find(c=>c.key==='operation').options[0].label,'Modified');
  for(const key of ['constructor','__proto__','toString','missing',null,{}]){assert.equal(M.has(key),false);assert.equal(M.render(key,{}),'');}
});

test('set operations enumerate actual members and satisfy independent count identities',()=>{
  for(const maxSize of [0,.25,3,4,7.5,11.999,12])for(const minSize of [0,1,4,7.5,12])for(const operation of ['intersection','union','difference']){
    const r=M.evaluate('set',{maxSize,minSize,operation}),expected=[];
    for(let u=1;u<=12;u++){const a=u<=maxSize,b=u>=minSize;if(operation==='intersection'?a&&b:operation==='union'?a||b:a&&!b)expected.push(u);}
    assert.deepEqual(r.resultIDs,expected);assert.equal(r.output,expected.length);assert.equal(r.countA+r.countB,r.unionCount+r.intersectionCount);assert.equal(r.differenceCount,r.countA-r.intersectionCount);assert.ok(r.resultIDs.every(u=>r.universeIDs.includes(u)));
  }
  assert.deepEqual(M.evaluate('set').resultIDs,[4,5,6,7]);const first=M.evaluate('set');first.idsA.push(100);assert.ok(!M.evaluate('set').idsA.includes(100));
});

test('inclusive threshold boundaries change cardinality discretely rather than measuring interval length',()=>{
  const p={...M.defaults('set'),minSize:4};assert.equal(M.evaluate('set',{...p,maxSize:3.999}).output,0);assert.equal(M.evaluate('set',{...p,maxSize:4}).output,1);assert.equal(M.evaluate('set',{...p,maxSize:4.999}).output,1);assert.equal(M.evaluate('set',{...p,maxSize:5}).output,2);
  assert.equal(M.curveValue('set',p,7.1),M.curveValue('set',p,7.9));assert.equal(M.curveValue('set',p,8),5);
  const html=M.render('set',p,{view:'graph'});assert.match(html,/Filled dots give exact counts/);assert.doesNotMatch(html,/<path[^>]*data-series="set-curve"/);assert.match(html,/<g[^>]*data-series="set-curve"/);
});

test('sample means use unique cyclic indices and independent full-population totals',()=>{
  for(let sampleSize=1;sampleSize<=12;sampleSize++)for(let startIndex=0;startIndex<12;startIndex++)for(const lastValue of [0,14,26,30]){
    const r=M.evaluate('population-sample',{sampleSize,startIndex,lastValue});assert.equal(new Set(r.sampleIndices).size,sampleSize);assert.equal(r.populationValues.length,12);assert.equal(r.populationSum,115+lastValue);near(r.populationMean,(115+lastValue)/12);
    const total=r.sampleIndices.reduce((sum,index)=>sum+r.populationValues[index],0);near(r.sampleMean,total/sampleSize);near(r.meanError,r.sampleMean-r.populationMean);assert.equal(r.output,r.sampleMean);
    if(sampleSize===12){near(r.sampleMean,r.populationMean);near(r.meanError,0);}
  }
  const d=M.evaluate('population-sample');assert.deepEqual(d.sampleIndices,[8,9,10,11]);assert.equal(d.sampleMean,12.75);assert.equal(d.populationMean,10.75);assert.equal(d.meanError,2);
  const question=M.evaluate('population-sample',{lastValue:26});assert.equal(question.sampleMean,15.75);assert.equal(question.populationMean,11.75);assert.equal(question.meanError,4);
});

test('moving one measurement changes each mean only through its declared inclusion and denominator',()=>{
  for(const startIndex of [0,4,8,11])for(const sampleSize of [1,4,12]){const p={lastValue:14,startIndex,sampleSize},a=M.evaluate('population-sample',p),b=M.evaluate('population-sample',{...p,lastValue:20});near(b.populationMean-a.populationMean,6/12);near(b.sampleMean-a.sampleMean,a.selectedIncludesLast?6/sampleSize:0);}
});

test('a census has exactly the population mean and zero error for every cyclic starting index',()=>{
  for(let startIndex=0;startIndex<12;startIndex++)for(const lastValue of [.1,14.1234567,26.01,1e-6]){
    const r=M.evaluate('population-sample',{lastValue,sampleSize:12,startIndex});
    assert.equal(r.sampleSum,r.populationSum);assert.equal(r.sampleMean,r.populationMean);assert.equal(r.meanError,0);
    assert.deepEqual(r.sampleIndices,Array.from({length:12},(_,i)=>(startIndex+i)%12));assert.deepEqual(r.sampleValues,r.sampleIndices.map(i=>r.populationValues[i]));
  }
});

test('one operation per item separates discrete work from continuous predicted time',()=>{
  for(let itemCount=1;itemCount<=32;itemCount++)for(const costPerItem of [0,.25,2,10]){const r=M.evaluate('computational-complexity',{itemCount,costPerItem});assert.equal(r.operationCount,itemCount);assert.equal(r.doubledCount,2*itemCount);near(r.totalTime,itemCount*costPerItem);near(r.doubledTime,2*r.totalTime);assert.equal(r.output,r.totalTime);}
  const p=M.defaults('computational-complexity'),r=M.evaluate('computational-complexity',p),html=M.render('computational-complexity',p);near(r.totalTime,24);near(r.doubledTime,48);const a=role(html,'scan-time-bar'),b=role(html,'double-time-bar');near(Number(b.width),2*Number(a.width));assert.equal((html.match(/data-role="work-tile"/g)||[]).length,36);assert.match(html,/not a measured hardware benchmark/);
});

test('whole-number selections are declared discrete and excluded from all automatic sweeps',()=>{
  for(const [slug,keys]of [['population-sample',['sampleSize','startIndex']],['computational-complexity',['itemCount']]])for(const key of keys){assert.equal(M.controls(slug).find(c=>c.key===key).discrete,true);assert.ok(!M.specs(slug).sweeps.some(c=>c.key===key));assert.equal(M.evaluate(slug,{[key]:1.5}).valid,false);}
  for(const slug of slugs)assert.ok(M.specs(slug).sweeps.every(c=>Number.isFinite(c.min)&&Number.isFinite(c.max)));
});

test('all declared corners and comparison pins render finite scoped views',()=>{
  for(const slug of slugs){const rules=M.controls(slug),corners=rules.reduce((rows,c)=>rows.flatMap(p=>(c.type==='select'?c.options.map(o=>o.value):[c.min,c.max]).map(value=>({...p,[c.key]:value}))),[{}]);for(const p of corners)for(const view of M.specs(slug).views){const html=M.render(slug,p,{view,id:'left:slot'});assert.match(html,/<svg/);assert.doesNotMatch(html,/NaN|Infinity|undefined=/);for(const [,value]of html.matchAll(/\b(?:width|height|r)="([^"]+)"/g))if(!value.includes('%'))assert.ok(Number(value)>=0);}
    for(const view of M.specs(slug).views){const p=M.defaults(slug),html=M.render(slug,p,{view,id:'left:slot',baseline:p}),other=M.render(slug,p,{view,id:'left/slot'});assert.match(html,view==='graph'?/data-series="baseline"/:slug==='set'?/baseline-set-count/:slug==='population-sample'?/baseline-sample-mean/:/baseline-scan-time/);const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id));for(const [,id]of other.matchAll(/\bid="([^"]+)"/g))assert.ok(!ids.has(id));}
  }
});

test('validation and narrowed scene bounds retain supported finite states',()=>{
  for(const slug of slugs){for(const value of [null,[],false,'x',{extra:1}])assert.equal(M.evaluate(slug,value).valid,false);const p=M.defaults(slug),axis=M.specs(slug).axis,rule=M.controls(slug).find(c=>c.key===axis);for(const value of [NaN,Infinity,'1',true,rule.min-1,rule.max+1])assert.equal(M.evaluate(slug,{[axis]:value}).valid,false);for(const view of M.specs(slug).views){const min=rule.min+(rule.max-rule.min)*.2,max=rule.min+(rule.max-rule.min)*.8,html=M.render(slug,p,{view,controlBounds:{[axis]:{min,max,step:.02}}}),handle=attrs(html.match(new RegExp('<g[^>]*data-drag-param="'+axis+'"[^>]*>'))[0]);near(Number(handle['data-drag-min']),min);near(Number(handle['data-drag-max']),max);assert.equal(Number(handle['data-drag-step']),.02);}}
  for(const operation of ['__proto__','constructor','Intersection',1,null])assert.equal(M.evaluate('set',{operation}).valid,false);
});

test('new canonical fixtures and original worked presets agree with the provider',()=>{
  let cases=0,presets=0;for(const slug of slugs){const card=JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));for(const row of card.interactive.expected_cases){const r=M.evaluate(slug,row.input);assert.equal(r.status,row.status||'valid',slug);if(row.output==null)assert.equal(r.output,null);else near(r.output,row.output);cases++;}for(const example of card.examples){const p=example.interactive_preset||example.playground_preset||example.preset;assert.ok(p,example.title);assert.equal(M.evaluate(slug,p).valid,true);presets++;}}
  assert.equal(cases,36);assert.equal(presets,15);
});
