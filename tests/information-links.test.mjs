import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),M=require('../src/information-links.js'),Plot=require('../src/plot-view.js');
const slugs=['joint-distribution','conditional-entropy','mutual-information'];
const source=fs.readFileSync(new URL('../src/information-links.js',import.meta.url),'utf8');
const close=(a,b,eps=1e-12)=>assert.ok(Math.abs(a-b)<=eps*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const roles=(html,name)=>[...html.matchAll(new RegExp('<[^>]*data-role="'+name+'"[^>]*>','g'))].map(([tag])=>attrs(tag));
function graphSpec(slug,p,o={}){const context=vm.createContext({AtlasPlotView:{render:spec=>spec}});vm.runInContext(source,context);return context.AtlasInformationLinks.render(slug,p,{view:'graph',...o});}
const H=probabilities=>probabilities.reduce((sum,p)=>p>0?sum-p*Math.log(p)/Math.LN2:sum,0);

test('information provider is pure and owns isolated metadata and default copies',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(source,context);assert.equal(typeof context.AtlasInformationLinks.render,'function');assert.ok(Object.isFrozen(M));assert.doesNotMatch(source,/requestAnimationFrame|setInterval|fetch\(|document\.|window\./);
  for(const slug of slugs){const p=M.defaults(slug);p.bookChance=99;assert.equal(M.defaults(slug).bookChance,.5);const c=M.controls(slug);c[2].options[0].label='changed';assert.equal(M.controls(slug)[2].options[0].label,'Lamp on · Y=1');const s=M.specs(slug);s.views.pop();s.sweeps[0].min=-1;assert.deepEqual(M.specs(slug).views,['geometry','graph']);assert.equal(M.specs(slug).sweeps[0].min,0);assert.equal(s.axis,'errorChance');assert.equal(s.rendererId,slug+'-visual-model');}
  for(const value of ['missing','__proto__','constructor',null,{},[]]){assert.equal(M.has(value),false);assert.equal(M.evaluate(value).valid,false);assert.equal(M.render(value,{}),'');}assert.throws(()=>M.defaults('missing'),RangeError);
});

test('one joint law preserves nonnegative masses, unit total and both marginal sums',()=>{
  for(let i=0;i<=40;i++)for(let j=0;j<=40;j++){
    const q=i/40,e=j/40,r=M.evaluate('joint-distribution',{bookChance:q,errorChance:e});assert.equal(r.valid,true);close(r.massTotal,1);close(r.p00,(1-q)*(1-e));close(r.p01,(1-q)*e);close(r.p10,q*e);close(r.p11,q*(1-e));assert.equal(r.output,r.p11);assert.equal(r.unit,'probability');
    for(const cell of r.cells){assert.ok(cell.probability>=0&&cell.probability<=1);assert.equal(cell.probability,r.joint[cell.x][cell.y]);}close(r.p00+r.p01,r.px0);close(r.p10+r.p11,r.px1);close(r.p00+r.p10,r.py0);close(r.p01+r.p11,r.py1);close(r.px0+r.px1,1);close(r.py0+r.py1,1);
  }
  const a=M.evaluate('joint-distribution'),b=M.evaluate('joint-distribution');a.cells[0].probability=99;a.joint[0][0]=99;a.conditionals[0].posterior0=99;assert.equal(b.p00,.45);assert.equal(M.evaluate('joint-distribution').joint[0][0],.45);
});

test('positive conditional columns renormalize exactly and weighted entropies form the primary average',()=>{
  for(let i=0;i<=25;i++)for(let j=0;j<=25;j++)for(const observed of ['0','1']){
    const r=M.evaluate('conditional-entropy',{bookChance:i/25,errorChance:j/25,observed});assert.equal(r.valid,true);assert.equal(r.output,r.hxGivenY);assert.equal(r.unit,'bits');close(r.hxGivenY,r.given0Contribution+r.given1Contribution);
    for(const c of r.conditionals)if(c.probability>0){assert.equal(c.defined,true);close(c.posterior0+c.posterior1,1);close(c.posterior0,r.joint[0][c.y]/c.probability);close(c.posterior1,r.joint[1][c.y]/c.probability);close(c.entropy,H([c.posterior0,c.posterior1]));close(c.contribution,c.probability*c.entropy);}
    const chosen=r.conditionals[Number(observed)];assert.equal(r.observationProbability,chosen.probability);assert.equal(r.posteriorBookChance,chosen.posterior1);assert.equal(r.selectedEntropy,chosen.entropy);
  }
});

test('impossible observations retain null slice values without invalidating the global calculation',()=>{
  for(const [bookChance,errorChance,observed] of [[0,0,'1'],[1,0,'0'],[0,1,'0'],[1,1,'1']])for(const slug of slugs){
    const r=M.evaluate(slug,{bookChance,errorChance,observed});assert.equal(r.valid,true);assert.equal(r.status,'valid');assert.equal(r.conditionalDefined,0);assert.equal(r.observationProbability,0);assert.equal(r.posteriorBookChance,null);assert.equal(r.selectedEntropy,null);assert.equal(r.conditionalStatus,'Impossible observation');assert.match(r.selectedEntropyLabel,/Undefined/);assert.equal(r.conditionals[Number(observed)].contribution,0);assert.equal(r.hxGivenY,0);assert.equal(r.mutualInformation,0);assert.ok(Number.isFinite(r.output));
    const scene=M.render('conditional-entropy',{bookChance,errorChance,observed},{compact:true,sceneControl:false});assert.match(scene,/Impossible observation/);assert.match(scene,/No conditional distribution here/);assert.equal(roles(scene,'conditional-mass').length,0);assert.doesNotMatch(scene,/NaN|Infinity|undefined|>null</);
  }
});

test('selected observation changes its posterior while leaving all global information quantities unchanged',()=>{
  for(const q of [0,.1,.5,.75,1])for(const e of [0,.1,.25,.5,.9,1]){
    const a=M.evaluate('conditional-entropy',{bookChance:q,errorChance:e,observed:'0'}),b=M.evaluate('conditional-entropy',{bookChance:q,errorChance:e,observed:'1'});for(const key of ['p00','p01','p10','p11','hx','hy','hxy','hxGivenY','hyGivenX','mutualInformation','output'])assert.equal(a[key],b[key],key);
  }
  const a=M.evaluate('conditional-entropy',{bookChance:.75,errorChance:.25,observed:'0'}),b=M.evaluate('conditional-entropy',{bookChance:.75,errorChance:.25,observed:'1'});assert.equal(a.posteriorBookChance,.5);assert.equal(a.selectedEntropy,1);assert.ok(a.selectedEntropy>a.hx);assert.equal(b.posteriorBookChance,.9);close(b.selectedEntropy,.4689955935892812);assert.ok(a.hxGivenY<a.hx);close(a.hxGivenY,.6681222459933007);close(a.mutualInformation,.1431558784658321);
});

test('mutual information agrees with the independent KL sum and entropy identities',()=>{
  for(let i=0;i<=30;i++)for(let j=0;j<=30;j++){
    const q=i/30,e=j/30,r=M.evaluate('mutual-information',{bookChance:q,errorChance:e}),direct=r.cells.reduce((sum,c)=>{const px=c.x?r.px1:r.px0,py=c.y?r.py1:r.py0;return c.probability>0?sum+c.probability*Math.log2(c.probability/(px*py)):sum;},0);
    assert.equal(r.valid,true);close(r.mutualInformation,direct);close(r.mutualInformation,r.hx+r.hy-r.hxy);close(r.mutualInformation,r.hx-r.hxGivenY);close(r.hxy,H([1-q,q])+H([1-e,e]));close(r.hyGivenX,H([1-e,e]));assert.ok(r.mutualInformation>=0&&r.mutualInformation<=Math.min(r.hx,r.hy)+1e-12);assert.ok(r.hxGivenY>=0&&r.hxGivenY<=r.hx+1e-12);assert.equal(r.output,r.mutualInformation);assert.equal(r.unit,'bits');
  }
});

test('independent, accurate and exactly inverted lamps have the expected information limits',()=>{
  for(const q of [0,.1,.25,.5,.9,1]){
    const perfect=M.evaluate('mutual-information',{bookChance:q,errorChance:0}),inverted=M.evaluate('mutual-information',{bookChance:q,errorChance:1}),uninformative=M.evaluate('mutual-information',{bookChance:q,errorChance:.5});assert.equal(perfect.mutualInformation,perfect.hx);assert.equal(inverted.mutualInformation,inverted.hx);assert.equal(perfect.hxGivenY,0);assert.equal(inverted.hxGivenY,0);assert.equal(uninformative.mutualInformation,0);close(uninformative.hxGivenY,uninformative.hx);assert.match(inverted.channelLabel,/Inverted/);
    for(const e of [0,.1,.25,.5,.75,.9,1]){const a=M.evaluate('mutual-information',{bookChance:q,errorChance:e}),b=M.evaluate('mutual-information',{bookChance:q,errorChance:1-e});close(a.mutualInformation,b.mutualInformation);close(a.hxGivenY,b.hxGivenY);}
  }
  const goal=M.evaluate('mutual-information');close(goal.mutualInformation,.5310044064107188);close(goal.hxGivenY,.4689955935892812);
});

test('malformed input is rejected without coercion or mutation',()=>{
  for(const slug of slugs){const p=M.defaults(slug),before=JSON.stringify(p);M.evaluate(slug,p);M.render(slug,p);assert.equal(JSON.stringify(p),before);for(const input of [null,[],5,'state',{unknown:1}])assert.equal(M.evaluate(slug,input).valid,false);for(const key of ['bookChance','errorChance'])for(const value of [-.001,1.001,NaN,Infinity,-Infinity,'0.5',true,null]){const r=M.evaluate(slug,{[key]:value});assert.equal(r.valid,false);assert.equal(r.status,'invalid_parameters');assert.equal(r.output,null);}for(const observed of [0,1,'on','off',null,true])assert.equal(M.evaluate(slug,{observed}).valid,false);}
  assert.equal(M.curveValue('missing',{},.5),null);assert.equal(M.curveValue('mutual-information',{},NaN),null);assert.equal(M.curveValue('mutual-information',{},1.1),null);
});

test('rare representable joint masses remain positive and product underflow is diagnosed',()=>{
  const r=M.evaluate('conditional-entropy',{bookChance:1e-300,errorChance:1e-10,observed:'1'});assert.equal(r.valid,true);assert.ok(r.p10>0&&r.p11>0);assert.ok(r.posteriorBookChance>0);assert.ok(r.selectedEntropy>0);assert.ok(r.hx>0);
  for(const slug of slugs){const under=M.evaluate(slug,{bookChance:Number.MIN_VALUE,errorChance:Number.MIN_VALUE});assert.equal(under.valid,false);assert.equal(under.status,'numeric_precision');assert.equal(under.output,null);}
});

test('joint Geometry bars encode exact masses on fixed probability scales and select the correct column',()=>{
  for(const compact of [true,false])for(const q of [0,.5,.75,1])for(const e of [0,.1,.5,1])for(const observed of ['0','1']){
    const p={bookChance:q,errorChance:e,observed},r=M.evaluate('joint-distribution',p),html=M.render('joint-distribution',p,{compact,sceneControl:false}),bars=roles(html,'joint-mass-bar'),cells=roles(html,'joint-cell'),column=roles(html,'observed-column')[0],span=(compact?94:170)-18;assert.equal(bars.length,4);assert.equal(cells.length,4);assert.equal(column['data-y'],observed);bars.forEach((bar,i)=>{close(Number(bar.width),span*r.cells[i].probability,1e-6);assert.equal(Number(bar['data-probability']),r.cells[i].probability);assert.equal(bar['data-x'],String(r.cells[i].x));assert.equal(bar['data-y'],String(r.cells[i].y));});
  }
});

test('conditional Geometry distinguishes normalized slice from weighted average lengths',()=>{
  for(const compact of [true,false])for(const observed of ['0','1']){
    const p={bookChance:.75,errorChance:.25,observed},r=M.evaluate('conditional-entropy',p),html=M.render('conditional-entropy',p,{compact,sceneControl:false}),masses=roles(html,'conditional-mass'),contributions=roles(html,'conditional-entropy-contribution'),sum=roles(html,'conditional-sum-part'),sliceSpan=compact?316:320,avgSpan=compact?316:336;assert.equal(masses.length,2);close(Number(masses[0].width)+Number(masses[1].width),sliceSpan,1e-6);masses.forEach((shape,i)=>close(Number(shape.width),sliceSpan*r.conditionals[Number(observed)]['posterior'+i],1e-6));contributions.forEach((shape,y)=>close(Number(shape.width),avgSpan*r.conditionals[y].contribution,1e-6));close(sum.reduce((total,shape)=>total+Number(shape.width),0),avgSpan*r.hxGivenY,1e-6);assert.match(html,/This observation’s entropy/);assert.match(html,/Average both lamp observations/);
  }
});

test('mutual Geometry decomposes H(X) on a common fixed one-bit scale',()=>{
  for(const compact of [true,false])for(const q of [0,.25,.5,1])for(const e of [0,.1,.5,1]){const p={bookChance:q,errorChance:e},r=M.evaluate('mutual-information',p),html=M.render('mutual-information',p,{compact,sceneControl:false}),learned=roles(html,'shared-information')[0],remaining=roles(html,'remaining-information')[0],span=compact?316:716;close(Number(learned.width),span*r.mutualInformation,1e-6);close(Number(remaining.width),span*r.hxGivenY,1e-6);close(Number(learned.width)+Number(remaining.width),span*r.hx,1e-6);assert.equal(Number(learned['data-value']),r.mutualInformation);if(e===1)assert.match(html,/Inverted lamp/);}
});

test('all Graph curves sweep only error probability and keep exact endpoints and the independence midpoint',()=>{
  for(const slug of slugs)for(const q of [0,.25,.5,1]){
    const g=graphSpec(slug,{bookChance:q,errorChance:.1,observed:'0'},{sceneControl:false}),curve=g.series[0];assert.equal(g.x.key,'errorChance');assert.equal(g.x.min,0);assert.equal(g.x.max,1);assert.equal(g.current[0].draggable,false);assert.equal(g.current[0].x,.1);assert.ok(curve.points.some(point=>point.x===.5));assert.ok(curve.points.every(point=>Number.isFinite(point.y)));curve.points.forEach(point=>close(point.y,M.evaluate(slug,{bookChance:q,errorChance:point.x,observed:'1'}).output));
    if(slug==='joint-distribution'){assert.equal(curve.points[0].y,q);assert.equal(curve.points.at(-1).y,0);assert.match(g.description,/not a density/);}else{const bound=g.series.find(s=>s.id==='starting-entropy');assert.ok(bound.points.every(point=>point.y===H([1-q,q])));assert.equal(bound.dashed,true);}
  }
});

test('comparison Graph retains the pinned prior family rather than moving it with current controls',()=>{
  for(const slug of slugs){const g=graphSpec(slug,{bookChance:.5,errorChance:.1,observed:'1'},{baseline:{bookChance:.75,errorChance:.25,observed:'0'}}),curve=g.series.find(s=>s.id==='baseline-curve');assert.equal(g.current.length,2);assert.equal(g.current[1].x,.25);close(g.current[1].y,M.evaluate(slug,{bookChance:.75,errorChance:.25,observed:'0'}).output);curve.points.forEach(point=>close(point.y,M.evaluate(slug,{bookChance:.75,errorChance:point.x,observed:'1'}).output));}
});

test('views use scoped accessible identities and host-owned controls at every ordinary boundary',()=>{
  for(const slug of slugs)for(const view of ['geometry','graph'])for(const q of [0,.5,1])for(const e of [0,.5,1])for(const observed of ['0','1']){
    const p={bookChance:q,errorChance:e,observed},a=M.render(slug,p,{view,compact:true,sceneControl:false,id:'slot:a',baseline:{bookChance:.75,errorChance:.25,observed:'0'}}),b=M.render(slug,p,{view,compact:true,sceneControl:false,id:'slot_a'});assert.doesNotMatch(a,/NaN|Infinity|role="slider"|data-drag-param|>null</);assert.match(a,/baseline|Pinned|pinned/);const ids=[...a.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),other=[...b.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);assert.ok(ids.length>=2);assert.equal(ids.length,new Set(ids).size);assert.ok(ids.every(id=>!other.includes(id)));assert.equal((M.render(slug,p,{view,compact:true}).match(/role="slider"/g)||[]).length,1);
  }
  for(const slug of slugs){assert.match(M.render(slug,{bookChance:2},{compact:true}),/Choose valid inputs/);const html=M.render(slug,{}, {compact:true,controlBounds:{errorChance:{min:.2,max:.7}}});assert.match(html,/data-drag-min="0.2"/);assert.match(html,/data-drag-max="0.7"/);}
});
