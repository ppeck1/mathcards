import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/computation.js');
const slugs=['turing-machine','proof'],words=['0101','1011','1111','0000'],worlds=Array.from({length:8},(_,i)=>i.toString(2).padStart(3,'0'));
const source=fs.readFileSync(new URL('../src/computation.js',import.meta.url),'utf8');
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const roles=(html,name)=>[...html.matchAll(new RegExp('<[^>]*data-role="'+name+'"[^>]*>','g'))].map(([tag])=>attrs(tag));
function graphSpec(slug,p,o={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasComputation.render(slug,p,{view:'graph',...o});}

test('computation provider exposes independent metadata, controls and honest discrete axes',()=>{
  assert.equal(M.has('turing-machine'),true);assert.equal(M.has('proof'),true);assert.equal(M.has('toString'),false);assert.equal(M.has(null),false);
  for(const slug of slugs){const spec=M.specs(slug);assert.deepEqual(spec.views,['geometry','graph']);assert.equal(spec.axis,'steps');assert.equal(spec.rendererId,slug+'-visual-model');assert.equal(spec.sweeps.length,1);assert.equal(spec.sweeps[0].discrete,true);const c=M.controls(slug);c[1].options[0].label='changed';assert.notEqual(M.controls(slug)[1].options[0].label,'changed');const d=M.defaults(slug);d.steps=99;assert.equal(M.defaults(slug).steps,0);}
  assert.deepEqual(M.defaults('turing-machine'),{steps:0,word:'1011'});assert.deepEqual(M.defaults('proof'),{steps:0,plan:'chain',world:'111'});
});

test('tape increment follows all six literal rules with old read, write and moved head separated',()=>{
  const table={S:{'0':['S','0','R'],'1':['S','1','R'],'□':['C','□','L']},C:{'1':['C','0','L'],'0':['H','1','R'],'□':['H','1','R']}},used=new Set();
  for(const word of words){const r=M.evaluate('turing-machine',{word,steps:10});for(let i=1;i<r.trace.length;i++){
    const a=r.trace[i-1],b=r.trace[i],old=a.cells.find(c=>c.position===a.head).symbol,next=table[a.state][old],written=b.cells.find(c=>c.position===a.head);used.add(a.state+old);assert.equal(b.state,next[0]);assert.equal(written.symbol,next[1]);assert.equal(b.head,a.head+(next[2]==='R'?1:-1));assert.equal(b.lastWritePosition,a.head);assert.equal(b.readSymbolLabel,old);assert.equal(b.writtenSymbolLabel,next[1]);assert.equal(b.transitionCount,i);assert.equal(b.lastRuleLabel,'δ('+a.state+','+old+')=('+next.join(',')+')');assert.equal(b.cells.filter(c=>c.head).length,1);for(const cell of a.cells)if(cell.position!==a.head)assert.equal(b.cells.find(c=>c.position===cell.position).symbol,cell.symbol);
  }}
  assert.deepEqual([...used].sort(),['C0','C1','C□','S0','S1','S□'].sort());
});

test('every allowed input halts with its increment including leading zeros and left overflow',()=>{
  const expected={'0101':['0110',6,7,3],'1011':['1100',12,8,2],'1111':['10000',16,10,0],'0000':['0001',1,6,4]};
  for(const word of words){const r=M.evaluate('turing-machine',{word,steps:10}),[written,value,moves,head]=expected[word];assert.equal(r.valid,true);assert.equal(r.halted,1);assert.equal(r.state,'H');assert.equal(r.tapeWord,written);assert.equal(r.output,value);assert.equal(r.expectedValue,parseInt(word,2)+1);assert.equal(r.output,r.expectedValue);assert.equal(r.transitionCount,moves);assert.equal(r.head,head);assert.equal(r.finalValueLabel,String(value));assert.equal(r.trace.length,moves+1);assert.equal(r.cells[0].symbol,word==='1111'?'1':'□');}
});

test('intermediate carry readings are provisional and halting never invents extra transitions',()=>{
  assert.equal(M.evaluate('turing-machine').output,11);assert.equal(M.evaluate('turing-machine').finalValueLabel,'Not halted');
  const values=Array.from({length:9},(_,steps)=>M.evaluate('turing-machine',{word:'1011',steps}).output);assert.deepEqual(values,[11,11,11,11,11,11,10,8,12]);
  for(const word of words){const full=M.evaluate('turing-machine',{word,steps:10}),halt=full.transitionCount;for(let steps=0;steps<=10;steps++){const r=M.evaluate('turing-machine',{word,steps});assert.equal(r.steps,steps);assert.equal(r.transitionCount,Math.min(steps,halt));assert.equal(r.trace.length,r.transitionCount+1);assert.equal(r.halted,steps>=halt?1:0);if(steps>=halt){assert.equal(r.head,full.head);assert.deepEqual(r.cells,full.cells);assert.equal(r.lastRuleLabel,full.lastRuleLabel);assert.equal(r.state,'H');assert.match(r.nextRuleLabel,/no outgoing/);}}}
});

test('tape snapshots are immutable and recomputation has no state shared across calls',()=>{
  const p={word:'1111',steps:10},before=JSON.stringify(p),r=M.evaluate('turing-machine',p),serialized=JSON.stringify(r.trace);assert.equal(JSON.stringify(p),before);assert.ok(Object.isFrozen(r.trace));assert.ok(r.trace.every(Object.isFrozen));assert.ok(r.trace.every(row=>Object.isFrozen(row.cells)&&row.cells.every(Object.isFrozen)));assert.throws(()=>{r.trace[0].cells[0].symbol='1';},TypeError);M.evaluate('turing-machine',{word:'0000',steps:2});assert.equal(JSON.stringify(r.trace),serialized);assert.deepEqual(M.evaluate('turing-machine',p),r);assert.equal(r.trace[0].tapeWord,'1111');assert.equal(r.trace[0].lastWritePosition,null);
});

test('valid proof chain cites earlier justified lines and derives the target at its fifth line',()=>{
  const expected=['p','p→q','q→r','q','r'];
  for(let steps=0;steps<=5;steps++){const r=M.evaluate('proof',{steps});assert.equal(r.acceptedLines,steps);assert.equal(r.output,steps);assert.equal(r.complete,steps===5?1:0);assert.equal(r.targetDerived,steps===5?1:0);assert.equal(r.invalidLine,null);assert.equal(r.targetDerivable,1);r.lines.forEach((line,i)=>{assert.equal(line.formula,expected[i]);assert.equal(line.visible,i<steps);assert.equal(line.valid,i<steps?true:null);if(line.visible)assert.ok(line.cites.every(n=>n<line.number));});}
  assert.deepEqual(M.evaluate('proof',{steps:5}).lines[4].cites,[4,3]);
});

test('wrong consequents and future citations block only the candidate, not derivability',()=>{
  for(const plan of ['wrong-conclusion','forward-reference'])for(let steps=0;steps<=5;steps++){
    const r=M.evaluate('proof',{plan,steps});assert.equal(r.acceptedLines,Math.min(steps,3));assert.equal(r.invalidLine,steps>=4?4:null);assert.equal(r.complete,0);assert.equal(r.targetDerived,0);assert.equal(r.targetDerivable,1);assert.equal(r.entailed,1);if(steps>=4)assert.equal(r.lines[3].valid,false);if(steps===5){assert.equal(r.lines[4].valid,false);assert.match(r.lines[4].reason,/Earlier line 4/);}
  }
  assert.match(M.evaluate('proof',{plan:'wrong-conclusion',steps:4}).lines[3].reason,/do not yield/);assert.match(M.evaluate('proof',{plan:'forward-reference',steps:4}).lines[3].reason,/earlier justified/);
});

test('syntactic proof results are independent of all eight selected valuations',()=>{
  for(const plan of ['chain','wrong-conclusion','forward-reference'])for(let steps=0;steps<=5;steps++){
    const ref=M.evaluate('proof',{plan,steps,world:'111'});for(const world of worlds){const r=M.evaluate('proof',{plan,steps,world});for(const key of ['acceptedLines','invalidLine','complete','targetDerived','targetDerivable','entailed','counterexampleCount'])assert.equal(r[key],ref[key],key);for(let i=0;i<5;i++)assert.equal(r.lines[i].valid,ref.lines[i].valid);}
  }
  const falsePremise=M.evaluate('proof',{steps:5,world:'000'});assert.equal(falsePremise.complete,1);assert.equal(falsePremise.premisesHold,0);assert.equal(falsePremise.conclusionTruth,0);
  const trueUnlicensed=M.evaluate('proof',{steps:5,plan:'wrong-conclusion',world:'111'});assert.equal(trueUnlicensed.premisesHold,1);assert.equal(trueUnlicensed.conclusionTruth,1);assert.ok(trueUnlicensed.lines.every(line=>line.truth===1));assert.equal(trueUnlicensed.complete,0);
});

test('the stated premises semantically entail r by all eight truth assignments',()=>{
  let satisfying=0;
  for(const world of worlds){const r=M.evaluate('proof',{world,steps:5}),[p,q,s]=world.split('').map(Number),holds=Boolean(p&&(!p||q)&&(!q||s));assert.equal(r.premisesHold,holds?1:0);assert.equal(r.conclusionTruth,s);assert.equal(r.counterexampleCount,0);if(holds){satisfying++;assert.equal(r.conclusionTruth,1);}}
  assert.equal(satisfying,1);
});

test('strict parameter validation rejects unsupported and fractional configurations without coercion',()=>{
  for(const slug of slugs){for(const p of [null,[],true,4,'state',{unknown:0}]){const r=M.evaluate(slug,p);assert.equal(r.valid,false);assert.equal(r.status,'invalid_parameters');assert.equal(r.output,null);}for(const steps of [-1,slug==='proof'?6:11,.5,NaN,Infinity,-Infinity,'1',null,false])assert.equal(M.evaluate(slug,{steps}).valid,false);assert.equal(M.curveValue(slug,{},.5),null);assert.equal(M.curveValue(slug,{},0),M.evaluate(slug).output);}
  for(const word of [1011,'1','10110','',null,'111x'])assert.equal(M.evaluate('turing-machine',{word}).valid,false);for(const plan of ['MP','',1,null])assert.equal(M.evaluate('proof',{plan}).valid,false);for(const world of ['11','222',111,null])assert.equal(M.evaluate('proof',{world}).valid,false);assert.equal(M.curveValue('missing',{},0),null);assert.equal(M.curveValue('proof',{},NaN),null);
});

test('tape geometry shows exactly seven honest symbols, a moved head and the last written cell',()=>{
  for(const compact of [true,false])for(const word of words)for(let steps=0;steps<=10;steps++){
    const p={word,steps},r=M.evaluate('turing-machine',p),html=M.render('turing-machine',p,{compact,sceneControl:false}),cells=roles(html,'tape-cell'),head=roles(html,'tape-head');assert.equal(cells.length,7);assert.equal(head.length,1);assert.equal(Number(head[0]['data-position']),r.head);for(let i=0;i<7;i++){assert.equal(Number(cells[i]['data-position']),r.cells[i].position);assert.equal(cells[i]['data-symbol'],r.cells[i].symbol);assert.equal(cells[i]['data-written'],String(r.cells[i].written));}assert.equal(cells.filter(c=>c['data-written']==='true').length,steps?1:0);assert.match(html,new RegExp('Tape reads '+r.output));assert.match(html,r.halted?/Halted · final value/:/tape value is provisional/);if(r.halted){assert.match(html,/halted head/);assert.doesNotMatch(html,/next read/);}
  }
});

test('proof geometry marks syntax separately from the valuation and draws only backward visible citations',()=>{
  for(const compact of [true,false])for(const plan of ['chain','wrong-conclusion','forward-reference'])for(let steps=0;steps<=5;steps++){
    const p={steps,plan,world:'000'},r=M.evaluate('proof',p),html=M.render('proof',p,{compact,sceneControl:false}),rows=roles(html,'proof-line'),arrows=roles(html,'proof-citation');assert.equal(rows.length,5);rows.forEach((row,i)=>{assert.equal(row['data-visible'],String(r.lines[i].visible));assert.equal(row['data-valid'],String(r.lines[i].valid));});assert.ok(arrows.every(a=>Number(a['data-from'])<Number(a['data-to'])&&Number(a['data-to'])===steps));if(plan==='chain'&&steps>=4){assert.equal(arrows.length,2);assert.equal(new Set(arrows.map(a=>a.d.match(/^M([\d.]+)/)[1])).size,2);assert.equal(roles(html,'citation-source').length,2);}assert.match(html,/Selected valuation/);assert.match(html,/Conclusion r: False/);assert.match(html,new RegExp(r.acceptedLines+' justified lines'));
  }
});

test('Graph samples exact whole configurations with no interpolated line or invented fractional state',()=>{
  for(const slug of slugs){const p=slug==='proof'?{steps:4,plan:'wrong-conclusion',world:'000'}:{steps:7,word:'1011'},g=graphSpec(slug,p,{sceneControl:false}),curve=g.series[0],max=slug==='proof'?5:10;assert.equal(g.x.key,'steps');assert.equal(g.x.step,1);assert.equal(g.x.max,max);assert.equal(g.y.max,slug==='proof'?5:16);assert.equal(curve.dots,true);assert.equal(curve.points.length,max+1);curve.points.forEach(point=>{assert.equal(Number.isInteger(point.x),true);assert.equal(point.y,M.evaluate(slug,{...p,steps:point.x}).output);});assert.equal(g.current[0].draggable,false);const html=M.render(slug,p,{view:'graph',sceneControl:false});assert.equal(roles(html,'sample-point').length,max+1);assert.doesNotMatch(html,/<path[^>]*data-series=/);assert.match(g.notes.join(' '),/no interpolation/);}
});

test('pinned Graphs retain their original tape or derivation family',()=>{
  for(const slug of slugs){const p=slug==='proof'?{steps:5,plan:'chain',world:'111'}:{steps:8,word:'1011'},b=slug==='proof'?{steps:4,plan:'forward-reference',world:'000'}:{steps:10,word:'1111'},g=graphSpec(slug,p,{baseline:b}),baseline=g.series.find(s=>s.id==='baseline-curve');assert.equal(g.current.length,2);assert.equal(g.current[1].x,b.steps);assert.equal(g.current[1].y,M.evaluate(slug,b).output);baseline.points.forEach(point=>assert.equal(point.y,M.evaluate(slug,{...b,steps:point.x}).output));}
});

test('views have scoped accessible IDs, one shared-host control and safe invalid fallbacks',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph']){const a=M.render(slug,{}, {view,compact:true,id:'slot:a',baseline:M.defaults(slug)}),b=M.render(slug,{}, {view,compact:true,id:'slot_a'}),ids=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),other=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.equal((a.match(/role="slider"/g)||[]).length,1);assert.ok(ids.length>=2);assert.equal(ids.length,new Set(ids).size);assert.ok(ids.every(id=>!other.includes(id)));assert.match(a,/aria-labelledby=/);assert.doesNotMatch(a,/NaN|Infinity/);assert.match(a,/Pinned|pinned/);const no=M.render(slug,{}, {view,compact:true,sceneControl:false});assert.doesNotMatch(no,/role="slider"|data-drag-param/);assert.match(M.render(slug,{steps:.5},{view,compact:true}),/Choose valid inputs/);}
  const bounded=M.render('turing-machine',{steps:5},{compact:true,controlBounds:{steps:{min:4,max:8}}});assert.match(bounded,/data-drag-min="4"/);assert.match(bounded,/data-drag-max="8"/);assert.match(bounded,/data-drag-step="1"/);assert.equal(M.render('unknown',{}),'');
});
