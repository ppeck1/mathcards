import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/structures.js'),Plot=require('../src/plot-view.js');
const slugs=['countability','finite-state-machine','open-set','quantifier-scope'];
const near=(a,b,t=1e-10)=>assert.ok(Math.abs(a-b)<=t*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);
const roles=(html,name)=>[...html.matchAll(new RegExp('<[^>]*data-role="'+name+'"[^>]*>','g'))].map(([tag])=>attrs(tag));
const source=fs.readFileSync(new URL('../src/structures.js',import.meta.url),'utf8');
function plotSpec(slug,p,o={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasStructures.render(slug,p,{view:'graph',...o});}

test('structures provider is pure and metadata, selected sets and results are independently owned',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(source,context);assert.equal(typeof context.AtlasStructures.render,'function');assert.ok(Object.isFrozen(M));assert.doesNotMatch(source,/requestAnimationFrame|setInterval|fetch\(|document\.|window\./);
  for(const slug of slugs){assert.ok(M.has(slug));assert.equal(M.specs(slug).rendererId,slug+'-visual-model');const p=M.defaults(slug),key=Object.keys(p)[0];p[key]=99;assert.notEqual(M.defaults(slug)[key],99);const c=M.controls(slug);c[0].label='Changed';assert.notEqual(M.controls(slug)[0].label,'Changed');const spec=M.specs(slug);spec.views.pop();assert.deepEqual(M.specs(slug).views,['geometry','graph']);}
  const c=M.controls('finite-state-machine');c[1].options[0].value='other';assert.equal(M.controls('finite-state-machine')[1].options[0].value,'10010010');const d=M.controls('quantifier-scope').find(c=>c.key==='desk');d.allowed.push(3);assert.ok(!M.controls('quantifier-scope').find(c=>c.key==='desk').allowed.includes(3));
  for(const slug of [null,{},'constructor','__proto__','missing']){assert.equal(M.has(slug),false);assert.equal(M.render(slug,{}),'');assert.equal(M.evaluate(slug).valid,false);}assert.throws(()=>M.defaults('missing'),RangeError);
});

test('enumeration has the stated parity order and its inverse returns the unique selected ticket',()=>{
  const expected=[0,1,-1,2,-2,3,-3,4,-4,5,-5,6,-6];
  for(let index=0;index<=12;index++){const r=M.evaluate('countability',{index});assert.equal(r.output,expected[index]);assert.equal(r.integer,expected[index]);assert.equal(r.inverseIndex,index);assert.equal(r.prefixSize,index+1);assert.deepEqual(r.prefix,expected.slice(0,index+1));assert.equal(new Set(r.prefix).size,r.prefix.length);assert.deepEqual(r.pairs.map(row=>row.inverseIndex),Array.from({length:index+1},(_,i)=>i));assert.equal(Object.is(r.inverseIndex,-0),false);}
  const r=M.evaluate('countability',{index:12});assert.deepEqual([...r.prefix].sort((a,b)=>a-b),[-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6]);r.prefix[0]=999;r.pairs[0].integer=999;assert.equal(M.evaluate('countability').prefix[0],0);assert.equal(M.evaluate('countability').pairs[0].integer,0);
});

test('countability geometry grows a prefix without reflow and labels the full inverse identities',()=>{
  const a=M.render('countability',{index:0},{compact:true,sceneControl:false}),b=M.render('countability',{index:8},{compact:true,sceneControl:false}),ra=roles(a,'integer-match'),rb=roles(b,'integer-match');assert.equal(ra.length,13);assert.equal(rb.length,13);ra.forEach((row,i)=>assert.equal(row.d,rb[i].d));assert.equal(ra.filter(row=>row['data-shown']==='true').length,1);assert.equal(rb.filter(row=>row['data-shown']==='true').length,9);assert.equal(rb.find(row=>row['data-index']==='8')['data-integer'],'-4');assert.match(b,/f\(2k\+1\)=k\+1/);assert.match(b,/f\(2k\+2\)=−\(k\+1\)/);assert.match(b,/g\(f\(n\)\)=n; f\(g\(z\)\)=z/);assert.doesNotMatch(M.specs('countability').readout({index:8},M.evaluate('countability',{index:8})).expression,/ℵ/);
});

test('countability Graph is discrete and selected indices never become half-tickets',()=>{
  for(const index of [0,4,8,12]){const g=plotSpec('countability',{index},{sceneControl:false}),prefix=g.series.find(s=>s.id==='prefix');assert.equal(prefix.dots,true);assert.equal(prefix.points.length,index+1);assert.ok(prefix.points.every(point=>Number.isInteger(point.x)&&Number.isInteger(point.y)));assert.deepEqual([g.x.min,g.x.max,g.y.min,g.y.max],[0,12,-6,6]);assert.equal(g.current[0].draggable,false);}
  for(const index of [.1,3.5,11.99])assert.equal(M.evaluate('countability',{index}).valid,false);const sweep=M.specs('countability').sweeps[0];assert.deepEqual(sweep,{key:'index',label:'Ticket index n',min:0,max:12,step:1,discrete:true});
});

test('finite automaton reads exact prefixes, preserves leading zeros and tracks configurations',()=>{
  for(const pattern of ['10010010','00000000','11111111','10101010'])for(let steps=0;steps<=8;steps++){
    const r=M.evaluate('finite-state-machine',{pattern,steps}),prefix=pattern.slice(0,steps),unread=pattern.slice(steps),ones=[...prefix].filter(c=>c==='1').length;assert.equal(r.valid,true);assert.equal(r.word,pattern);assert.equal(r.prefix,prefix);assert.equal(r.unread,unread);assert.equal(r.onesRead,ones);assert.equal(r.stateCode,ones%2);assert.equal(r.output,ones%2);assert.equal(r.stateLabel,ones%2?'Odd':'Even');assert.equal(r.trace.length,steps+1);assert.equal(r.trace.at(-1).unread,unread);assert.equal(r.prefixLabel,prefix||'ε');assert.equal(r.unreadLabel,unread||'ε');assert.equal(r.configurationLabel,'('+r.stateLabel+', '+(unread||'ε')+')');
    r.trace.forEach((row,k)=>{assert.equal(row.steps,k);assert.equal(row.stateCode,[...pattern.slice(0,k)].filter(c=>c==='1').length%2);});
  }
  assert.equal(M.evaluate('finite-state-machine',{pattern:'00000000',steps:3}).unread,'00000');
});

test('accepting-state visits are distinct from completed acceptance',()=>{
  for(const steps of [0,1,4,7]){const r=M.evaluate('finite-state-machine',{pattern:'00000000',steps});assert.equal(r.isAcceptingState,1);assert.equal(r.finished,0);assert.equal(r.accepted,0);assert.equal(r.acceptanceLabel,'Input unfinished');}
  const a=M.evaluate('finite-state-machine',{pattern:'00000000',steps:8}),b=M.evaluate('finite-state-machine',{pattern:'10010010',steps:8}),story=M.evaluate('finite-state-machine',{pattern:'10010010',steps:7});assert.equal(a.finished,1);assert.equal(a.accepted,1);assert.equal(a.acceptanceLabel,'Accepted');assert.equal(b.finished,1);assert.equal(b.accepted,0);assert.equal(b.acceptanceLabel,'Rejected');assert.equal(story.stateLabel,'Odd');assert.equal(story.acceptanceLabel,'Input unfinished');assert.equal(story.unread,'0');
});

test('automaton scene highlights exactly the actual last transition and categorical state',()=>{
  for(let steps=0;steps<=8;steps++){const p={steps,pattern:'10010010'},r=M.evaluate('finite-state-machine',p),html=M.render('finite-state-machine',p,{compact:true,sceneControl:false}),beads=roles(html,'input-bead'),edges=roles(html,'dfa-transition'),active=edges.filter(row=>row['data-active']==='true');assert.equal(beads.length,8);assert.equal(beads.filter(row=>row['data-processed']==='true').length,steps);assert.equal(edges.length,4);assert.equal(active.length,steps?1:0);if(steps){assert.equal(active[0]['data-symbol'],p.pattern[steps-1]);assert.equal(Number(active[0]['data-from']),r.trace[steps-1].stateCode);}assert.equal(roles(html,'dfa-state').find(row=>row['data-active']==='true')['data-state'],String(r.stateCode));assert.match(html,steps<8?/>Input unfinished<\/text>/:/>Rejected<\/text>/);}
});

test('DFA Graph contains only completed categorical samples and semantic pin comparisons',()=>{
  for(const steps of [0,1,7,8]){const p={steps,pattern:'10010010'},r=M.evaluate('finite-state-machine',p),html=M.render('finite-state-machine',p,{view:'graph',compact:true,sceneControl:false}),samples=roles(html,'state-sample');assert.equal(samples.length,steps+1);samples.forEach((row,k)=>{assert.equal(Number(row['data-step']),k);assert.equal(Number(row['data-state']),r.trace[k].stateCode);});assert.doesNotMatch(html,/data-series/);assert.match(html,/no line invents half-states/);}
  const a=M.evaluate('finite-state-machine',{steps:0}),b=M.evaluate('finite-state-machine',{steps:1});assert.deepEqual(M.specs('finite-state-machine').readout(b.parameters,b,{baseline:a}).comparison,{baselineValue:'Even',change:'Even → Odd'});assert.equal(M.specs('finite-state-machine').sweeps[0].discrete,true);assert.ok(M.specs('finite-state-machine').readout(a.parameters,a).stats.some(stat=>stat.value==='Input unfinished'));
});

test('open-set evaluation separates membership, interior, chosen containment and global openness',()=>{
  for(const boundary of ['open','closed'])for(const center of [-3,-2,-1.5,0,.5,1.5,2,3])for(const radius of [.05,.5,.75,1.5]){
    const r=M.evaluate('open-set',{center,radius,boundary});assert.equal(r.valid,true);assert.equal(r.clearance,2-Math.abs(center));assert.equal(r.output,r.clearance);assert.equal(r.distanceFromOrigin,Math.abs(center));assert.equal(r.centerInside,Number(boundary==='open'?Math.abs(center)<2:Math.abs(center)<=2));assert.equal(r.interior,Number(Math.abs(center)<2));assert.equal(r.neighborhoodFits,Number(Math.abs(center)+radius<=2));assert.equal(r.isOpen,Number(boundary==='open'));assert.equal(r.constructiveRadius,r.interior?r.clearance/2:null);
  }
  const failed=M.evaluate('open-set',{center:1.5,radius:.75,boundary:'open'});assert.equal(failed.neighborhoodFits,0);assert.equal(failed.interior,1);assert.equal(failed.isOpen,1);assert.equal(failed.constructiveRadius,.25);assert.match(failed.interiorLabel,/positive ball exists/);
  const closedInterior=M.evaluate('open-set',{center:0,radius:.75,boundary:'closed'});assert.equal(closedInterior.centerInside,1);assert.equal(closedInterior.interior,1);assert.equal(closedInterior.neighborhoodFits,1);assert.equal(closedInterior.isOpen,0);
});

test('tangent open balls are contained even in an open target disk',()=>{
  for(const boundary of ['open','closed'])for(const [center,radius]of [[1.25,.75],[-1.5,.5],[.5,1.5],[1.8,.2]]){const r=M.evaluate('open-set',{center,radius,boundary});assert.equal(r.valid,true);assert.equal(Math.abs(center)+radius,2);assert.equal(r.neighborhoodFits,1);assert.equal(r.outsideWitness,null);}
  for(const boundary of ['open','closed']){const r=M.evaluate('open-set',{center:1.25001,radius:.75,boundary});assert.equal(r.neighborhoodFits,0);assert.ok(r.outsideWitness);}
});

test('a closed rim belongs to the disk but has no positive contained ball',()=>{
  const closed=M.evaluate('open-set',{center:2,radius:.75,boundary:'closed'}),open=M.evaluate('open-set',{center:2,radius:.75,boundary:'open'});assert.equal(closed.centerInside,1);assert.equal(closed.interior,0);assert.equal(closed.neighborhoodFits,0);assert.equal(closed.constructiveRadius,null);assert.equal(closed.outsideWitness.x,2.375);assert.match(closed.constructiveRadiusLabel,/No positive radius/);assert.equal(open.centerInside,0);assert.equal(open.interior,0);assert.equal(open.isOpen,1);assert.equal(open.outsideWitness.x,2);assert.equal(open.outsideWitness.distanceFromCenter,0);
});

test('constructive radii remain positive below the slider minimum and every outside witness is legitimate',()=>{
  const close=M.evaluate('open-set',{center:1.99,radius:.05,boundary:'closed'});assert.equal(close.valid,true);assert.ok(close.constructiveRadius>0&&close.constructiveRadius<.05);near(close.constructiveRadius,.005);assert.ok(Math.abs(1.99)+close.constructiveRadius<2);
  for(const boundary of ['open','closed'])for(let center=-3;center<=3;center+=.125)for(const radius of [.05,.125,.25,.5,.75,1,1.5]){const r=M.evaluate('open-set',{center,radius,boundary});assert.equal(r.valid,true);if(r.neighborhoodFits)assert.equal(r.outsideWitness,null);else{const z=r.outsideWitness;assert.ok(z);assert.ok(Math.abs(z.x-center)<radius);assert.ok(boundary==='open'?Math.abs(z.x)>=2:Math.abs(z.x)>2);assert.equal(z.distanceFromCenter,Math.abs(z.x-center));assert.equal(z.y,0);}}
});

test('unrepresentable strict witnesses are diagnosed without relaxing inequalities',()=>{
  for(const center of [1.2500000000000004,-1.2500000000000004]){const r=M.evaluate('open-set',{center,radius:.75,boundary:'closed'});assert.equal(r.valid,false);assert.equal(r.status,'numeric_precision');assert.equal(r.output,null);assert.equal(r.errors[0].code,'numeric_precision');const open=M.evaluate('open-set',{center,radius:.75,boundary:'open'});assert.equal(open.valid,true);assert.ok(open.outsideWitness.distanceFromCenter<.75);assert.equal(Math.abs(open.outsideWitness.x),2);}
});

test('disk Geometry uses one actual centimetre scale and honest included/excluded rims',()=>{
  for(const boundary of ['open','closed'])for(const p of [{center:.5,radius:.75,boundary},{center:1.5,radius:.75,boundary},{center:3,radius:1.5,boundary},{center:-3,radius:1.5,boundary}]){
    const r=M.evaluate('open-set',p),html=M.render('open-set',p,{compact:true,sceneControl:false}),target=role(html,'target-disk'),ball=role(html,'chosen-open-ball'),point=role(html,'selected-center'),scale=Number(target.r)/2;near(Number(ball.r),p.radius*scale,1e-6);near(Number(point.cx)-Number(target.cx),p.center*scale,1e-6);assert.equal(Boolean(target['stroke-dasharray']),boundary==='open');assert.ok(ball['stroke-dasharray']);for(const shape of [target,ball]){assert.ok(Number(shape.cx)-Number(shape.r)>=0);assert.ok(Number(shape.cx)+Number(shape.r)<=360);assert.ok(Number(shape.cy)-Number(shape.r)>=0);assert.ok(Number(shape.cy)+Number(shape.r)<=510);}if(r.outsideWitness)assert.equal(Number(role(html,'outside-witness')['data-x']),r.outsideWitness.x);
  }
});

test('clearance Graph is continuous, signed and separate from the chosen radius',()=>{
  const g=plotSpec('open-set',{center:1.5,radius:.75,boundary:'open'},{sceneControl:false,baseline:{center:0,radius:.5,boundary:'closed'}});assert.deepEqual([g.x.min,g.x.max,g.y.min,g.y.max],[-3,3,-1,2]);const curve=g.series.find(s=>s.id==='clearance');assert.equal(curve.dots,undefined);curve.points.forEach(point=>assert.equal(point.y,2-Math.abs(point.x)));assert.equal(curve.points.find(point=>point.x===0).y,2);assert.equal(g.current[0].y,.5);assert.equal(g.current[0].draggable,false);assert.deepEqual(Array.from(g.series.find(s=>s.id==='chosen-radius').points,p=>p.y),[.75,.75]);
});

test('quantifier order uses all rows versus common columns and includes exact reach thresholds',()=>{
  for(const [reach,a,b]of [[0,0,0],[1,0,0],[2,0,0],[2.999999,0,0],[3,1,0],[6.999999,1,0],[7,1,1],[11,1,1],[12,1,1]])for(const order of ['all-some','some-all']){const r=M.evaluate('quantifier-scope',{reach,order});assert.equal(r.allSomeTruth,a);assert.equal(r.someAllTruth,b);assert.equal(r.output,order==='all-some'?a:b);assert.equal(r.truthLabel,r.output?'True':'False');assert.equal(r.pairs.length,18);assert.equal(r.rows.length,6);assert.equal(r.rowCount,r.rows.filter(row=>row.count>0).length);}
  assert.deepEqual(M.evaluate('quantifier-scope',{reach:7}).coveringStations,[5,9]);assert.deepEqual(M.evaluate('quantifier-scope',{reach:11}).coveringStations,[1,5,9]);assert.equal(M.evaluate('quantifier-scope',{reach:3}).rowCount,6);
});

test('the free probe changes an open-formula reading without changing either bound formula',()=>{
  const a=M.evaluate('quantifier-scope',{reach:2,desk:12}),b=M.evaluate('quantifier-scope',{reach:2,desk:2});assert.equal(a.probeTruth,0);assert.equal(b.probeTruth,1);assert.equal(a.nearestDistance,3);assert.equal(b.nearestDistance,1);assert.deepEqual(a.rows,b.rows);assert.deepEqual(a.pairs,b.pairs);for(const key of ['allSomeTruth','someAllTruth','rowCount','output'])assert.equal(a[key],b[key]);assert.deepEqual(a.coveringStations,b.coveringStations);assert.deepEqual(b.probeWitnesses,[1]);
  for(const desk of [2,4,6,8,10,12]){const r=M.evaluate('quantifier-scope',{reach:3,desk});const distances=[1,5,9].map(station=>Math.abs(desk-station));assert.equal(r.nearestDistance,Math.min(...distances));assert.deepEqual(r.probeWitnesses,[1,5,9].filter(station=>Math.abs(desk-station)<=3));}
  for(const desk of [0,3,5,8.5,14])assert.equal(M.evaluate('quantifier-scope',{desk}).valid,false);assert.ok(!M.specs('quantifier-scope').sweeps.some(s=>s.key==='desk'));
});

test('scope Geometry represents actual distances, selected probe witnesses and common coverage columns',()=>{
  for(const reach of [0,2,3,7,11]){const p={reach,desk:12,order:'all-some'},r=M.evaluate('quantifier-scope',p),html=M.render('quantifier-scope',p,{compact:true,sceneControl:false}),cells=roles(html,'reach-cell');assert.equal(cells.length,18);cells.forEach(cell=>{const distance=Math.abs(Number(cell['data-desk'])-Number(cell['data-station']));assert.equal(Number(cell['data-distance']),distance);assert.equal(Number(cell['data-truth']),Number(distance<=reach));});assert.deepEqual(roles(html,'common-station').map(row=>Number(row['data-station'])),r.coveringStations);assert.equal(role(html,'probe-row')['data-desk'],'12');near(Number(role(html,'nearest-distance').width),316*r.nearestDistance/12,1e-6);near(Number(role(html,'reach-marker').x1)-22,316*reach/12,1e-6);assert.match(html,/free probe row/);}
});

test('scope Graph preserves both exact Boolean jumps and leaves the probe separate',()=>{
  const html=M.render('quantifier-scope',{reach:3,desk:12},{view:'graph',compact:true,sceneControl:false});assert.deepEqual(roles(html,'true-step').map(row=>row['data-threshold']),['3','7']);assert.equal(roles(html,'open-step-end').length,2);assert.equal(roles(html,'closed-step-end').length,2);assert.deepEqual(roles(html,'bound-truth').map(row=>row['data-truth']),['1','0']);for(const row of [...roles(html,'true-step'),...roles(html,'false-step')])assert.equal(row.y1,row.y2);assert.match(html,/probe desk never changes either trace/);
  const before=M.evaluate('quantifier-scope',{reach:2}),after=M.evaluate('quantifier-scope',{reach:3});assert.deepEqual(M.specs('quantifier-scope').readout(after.parameters,after,{baseline:before}).comparison,{baselineValue:'False',change:'False → True'});
});

test('all unsupported inputs are explicit and no provider coerces or mutates caller parameters',()=>{
  for(const slug of slugs){const p=M.defaults(slug),before=JSON.stringify(p);M.evaluate(slug,p);M.render(slug,p);assert.equal(JSON.stringify(p),before);for(const input of [null,[],7,'parameters',{extra:1}]){const r=M.evaluate(slug,input);assert.equal(r.valid,false);assert.equal(r.output,null);}for(const c of M.controls(slug)){const values=c.type==='select'?['missing',0,null]:[NaN,Infinity,-Infinity,'1',null,c.min-1,c.max+1];for(const value of values){const r=M.evaluate(slug,{[c.key]:value});assert.equal(r.valid,false,slug+' '+c.key);assert.equal(r.output,null);}}}
  assert.equal(M.curveValue('missing',{},1),null);assert.equal(M.curveValue('open-set',{},NaN),null);assert.equal(M.curveValue('finite-state-machine',{},1.5),null);
});

test('all views use scoped identities, retain pins and suppress scene controls on request',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph']){const a=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot:a',baseline:M.defaults(slug)}),b=M.render(slug,{}, {view,compact:true,sceneControl:false,id:'slot_b'});assert.doesNotMatch(a,/NaN|Infinity|role="slider"|data-drag-param/);assert.match(a,/baseline|Pinned/);const ia=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),ib=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.ok(ia.length>=2);assert.equal(new Set(ia).size,ia.length);assert.ok(ia.every(id=>!ib.includes(id)));if(view==='geometry')assert.equal((M.render(slug,{}, {compact:true}).match(/role="slider"/g)||[]).length,1);assert.match(M.render(slug,{extra:1},{view,compact:true}),/Choose valid inputs/);}
});
