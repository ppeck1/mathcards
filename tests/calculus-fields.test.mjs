import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),L=require('../src/calculus-fields.js'),Plot=require('../src/plot-view.js');
const slugs=['chain-rule','partial-derivative','gradient'],near=(a,b,tolerance=1e-9)=>assert.ok(Math.abs(a-b)<=tolerance*Math.max(1,Math.abs(b)),`${a} ≈ ${b}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const role=(html,name)=>attrs(html.match(new RegExp('<[^>]*data-role="'+name+'"[^>]*>'))[0]);
const height=(p,x=p.x,y=p.y)=>p.c+p.a*x*x+p.b*y*y;

test('three calculus families load offline and retain independent metadata and declared views',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(fs.readFileSync(new URL('../src/calculus-fields.js',import.meta.url),'utf8'),context);assert.equal(typeof context.AtlasCalculusFields.render,'function');assert.ok(Object.isFrozen(L));
  for(const slug of slugs){assert.equal(L.has(slug),true);assert.equal(L.specs(slug).rendererId,slug+'-visual-model');assert.equal(L.specs(slug).unit,'');assert.equal(L.evaluate(slug,{}).valid,true);const metadata=L.specs(slug);metadata.views.pop();assert.equal(L.specs(slug).views.length,slug==='chain-rule'?2:3);const p=L.defaults(slug);p.x=100;assert.notDeepEqual(p,L.defaults(slug));}
  for(const slug of ['__proto__','constructor','toString',null,{},'missing'])assert.equal(L.has(slug),false);
});

test('the chain derivative agrees with finite differences and an independently expanded polynomial',()=>{
  for(const a of [-2,-1,0,.5,2])for(const b of [-3,0,3])for(const x of [-2,-.5,0,1,2]){
    const r=L.evaluate('chain-rule',{a,b,x}),h=1e-5,plus=(a*(x+h)+b)**2,minus=(a*(x-h)+b)**2;
    near(r.chainDerivative,(plus-minus)/(2*h),2e-8);near(r.chainDerivative,2*a*a*x+2*a*b);near(r.output,r.outerDerivative*r.innerDerivative);near(r.innerValue,a*x+b);near(r.composedValue,(a*x+b)**2);near(r.expandedDerivative,r.chainDerivative);
  }
  const constant=L.evaluate('chain-rule',{x:2,a:0,b:3});assert.equal(constant.output,0);assert.equal(constant.outerDerivative,6);assert.equal(constant.innerDerivative,0);
  const turning=L.evaluate('chain-rule',{x:-.5,a:2,b:1});assert.equal(turning.innerValue,0);assert.equal(turning.outerDerivative,0);assert.equal(turning.output,0);
  const signed=L.evaluate('chain-rule',{x:2,a:-1,b:0});assert.equal(signed.innerValue,-2);assert.equal(signed.innerDerivative,-1);assert.equal(signed.outerDerivative,-4);assert.equal(signed.output,4);
});

test('both field modules share analytic height and partials verified by finite differences',()=>{
  const h=1e-5;
  for(const a of [-1,-.5,0,.5,1])for(const b of [-1,0,.75])for(const x of [-1.5,0,1.5])for(const y of [-1,0,1]){
    const p={a,b,c:4,x,y},partial=L.evaluate('partial-derivative',p),gradient=L.evaluate('gradient',p),shared=L.fieldAt(p);
    near(partial.height,height(p));near(partial.partialX,(height(p,x+h,y)-height(p,x-h,y))/(2*h),2e-8);near(partial.partialY,(height(p,x,y+h)-height(p,x,y-h))/(2*h),2e-8);
    for(const key of ['height','heightXTerm','heightYTerm','partialX','partialY','gradientNorm','unitGradientX','unitGradientY','directionStatus','stationary','stationaryType']){assert.equal(partial[key],gradient[key],key);assert.equal(shared[key],gradient[key],key);}
    assert.equal(partial.output,partial.partialX);assert.equal(gradient.output,gradient.gradientNorm);
  }
});

test('the nonzero gradient is the steepest unit-direction derivative and its norm is not height',()=>{
  const p=L.defaults('gradient'),r=L.evaluate('gradient',p),h=1e-5;near(r.height,3.4375);near(r.partialX,-1);near(r.partialY,-.25);near(r.gradientNorm,Math.sqrt(1.0625));near(Math.hypot(r.unitGradientX,r.unitGradientY),1);
  const plus=height(p,p.x+h*r.unitGradientX,p.y+h*r.unitGradientY),minus=height(p,p.x-h*r.unitGradientX,p.y-h*r.unitGradientY);near((plus-minus)/(2*h),r.gradientNorm,2e-8);
  for(let i=0;i<64;i++){const angle=i*Math.PI/32,dx=Math.cos(angle),dy=Math.sin(angle),directional=r.partialX*dx+r.partialY*dy;assert.ok(directional<=r.gradientNorm+1e-12);}
  const shifted=L.evaluate('gradient',{...p,c:6});near(shifted.height-r.height,2);assert.equal(shifted.gradientNorm,r.gradientNorm);assert.equal(shifted.partialX,r.partialX);assert.equal(shifted.partialY,r.partialY);
});

test('zero gradients distinguish peaks, valleys, saddles, ridges and flat fields without a fake direction',()=>{
  const cases=[{a:-1,b:-1,type:'local_maximum'},{a:1,b:1,type:'local_minimum'},{a:-1,b:1,type:'saddle'},{a:1e-200,b:-1e-200,type:'saddle'},{a:0,b:0,type:'flat'},{a:0,b:-1,type:'non_strict_maximum'},{a:1,b:0,type:'non_strict_minimum'}];
  for(const {a,b,type}of cases){const r=L.evaluate('gradient',{x:0,y:0,a,b,c:4});assert.equal(r.status,'valid');assert.equal(r.output,0);assert.equal(r.stationary,true);assert.equal(r.stationaryType,type);assert.equal(r.directionStatus,'undefined_direction');assert.equal(r.unitGradientX,null);assert.equal(r.unitGradientY,null);assert.match(L.specs('gradient').readout(r.parameters,r).insight,/does not mean a maximum or minimum/);}
  const flat=L.evaluate('gradient',{x:2,y:-2,a:0,b:0,c:0});assert.equal(flat.height,0);assert.equal(flat.gradientNorm,0);assert.equal(flat.stationaryType,'flat');
  const html=L.render('gradient',{x:0,y:0,a:1,b:-1,c:4});assert.doesNotMatch(html,/data-role="gradient-vector"/);assert.match(html,/No unit direction at zero gradient/);
});

test('surface mesh samples the actual polynomial and local tangent plane has the correct first-order remainder',()=>{
  const p=L.defaults('gradient'),r=L.evaluate('gradient',p),mesh=L.surfaceMesh(p);assert.equal(mesh.rows.length,13);assert.equal(mesh.cells.length,144);assert.deepEqual(mesh.bounds,{x:[-2,2],y:[-2,2],height:[-8,14]});
  for(const cell of mesh.cells)for(const corner of cell.corners)near(corner.height,height(p,corner.x,corner.y));
  for(const [dx,dy]of[[.1,.2],[-.1,.1],[.2,-.1]]){const tangent=r.height+r.partialX*dx+r.partialY*dy;near(height(p,p.x+dx,p.y+dy)-tangent,p.a*dx*dx+p.b*dy*dy);}
  const markup=L.render('gradient',p,{view:'spatial'}),patch=role(markup,'tangent-plane');for(const row of patch['data-world-corners'].split(';')){const [x,y,z]=row.split(',').map(Number);near(z,r.height+r.partialX*(x-p.x)+r.partialY*(y-p.y));}
  mesh.rows[0][0].height=10000;assert.notEqual(L.surfaceMesh(p).rows[0][0].height,10000);assert.equal(L.surfaceMesh({x:100}),null);assert.equal(L.fieldAt(null),null);
});

test('Spatial is a genuine camera projection of height while input-plane gradients remain horizontal',()=>{
  const p=L.defaults('gradient'),r=L.evaluate('gradient',p);
  for(const camera of [.15,.65,1]){const expected=L.projectPoint(p.x,p.y,r.height,camera),html=L.render('gradient',p,{view:'spatial',camera}),point=role(html,'surface-point');near(Number(point.cx),expected.x,1e-6);near(Number(point.cy),expected.y,1e-6);assert.equal(Number(point['data-height']),r.height);assert.equal((html.match(/data-role="surface-cell"/g)||[]).length,144);assert.match(html,/data-role="input-plane-gradient"/);assert.match(html,/not the surface normal/);const arrow=role(html,'input-plane-gradient'),floor=L.projectPoint(p.x,p.y,-8,camera),tip=L.projectPoint(p.x+.25*r.partialX,p.y+.25*r.partialY,-8,camera);near(Number(arrow.x1),floor.x,1e-6);near(Number(arrow.y1),floor.y,1e-6);near(Number(arrow.x2),tip.x,1e-6);near(Number(arrow.y2),tip.y,1e-6);}
  const low=L.projectPoint(1,.5,0,.15),high=L.projectPoint(1,.5,1,.15);near(high.x,low.x);near(high.y-low.y,-8);assert.notDeepEqual(L.projectPoint(1,.5,3,.15),L.projectPoint(1,.5,3,1));
  for(const slug of ['partial-derivative','gradient']){const geometry=L.render(slug,p),spatial=L.render(slug,p,{view:'spatial'}),graph=L.render(slug,p,{view:'graph'});assert.doesNotMatch(geometry,/data-role="surface-cell"/);assert.notEqual(geometry,spatial);assert.notEqual(spatial,graph);}
});

test('the chain square encodes output area and signed derivative bars retain opposite signs',()=>{
  const a=role(L.render('chain-rule',{x:1,a:1,b:0}),'composed-area'),b=role(L.render('chain-rule',{x:2,a:1,b:0}),'composed-area');near(Number(b.width)*Number(b.height)/(Number(a.width)*Number(a.height)),4,1e-6);assert.equal(Number(b['data-world-side']),2);assert.equal(Number(b['data-value']),4);
  const minus=role(L.render('chain-rule',{x:-2,a:1,b:0}),'composed-area');assert.equal(minus.width,b.width);assert.equal(minus.height,b.height);assert.match(L.render('chain-rule',{x:1,a:-1,b:0}),/h′\(x\) = 2/);
});

test('all numeric corners remain finite in declared views with stable pins and scoped ids',()=>{
  for(const slug of slugs){const rules=L.controls(slug),corners=rules.reduce((rows,c)=>rows.flatMap(p=>[c.min,c.max].map(value=>({...p,[c.key]:value}))),[{}]);for(const p of corners)for(const view of L.specs(slug).views){const html=L.render(slug,p,{view,camera:.65,id:'left:slot'});assert.match(html,/<svg/);assert.doesNotMatch(html,/NaN|Infinity|undefined=/);}
    for(const view of L.specs(slug).views){const p=L.defaults(slug),html=L.render(slug,p,{view,id:'left:slot',baseline:p}),other=L.render(slug,p,{view,id:'left/slot'});assert.match(html,view==='graph'?/data-series="baseline"/:view==='spatial'?/data-role="baseline-surface-point"/:slug==='chain-rule'?/data-role="baseline-sensitivity"/:/data-role="baseline-field-point"/);const ids=new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id));for(const [,id]of other.matchAll(/\bid="([^"]+)"/g))assert.ok(!ids.has(id));}
  }
});

test('validation, curve sampling and story rails use the shared finite parameter contract',()=>{
  for(const slug of slugs){for(const p of [null,[],false,'x',{extra:1},{x:NaN},{x:Infinity},{x:'1'},{x:100}]){const r=L.evaluate(slug,p);assert.equal(r.valid,false);assert.equal(r.output,null);assert.equal(r.status,'invalid_parameters');}const p=L.defaults(slug),r=L.evaluate(slug,p);near(L.curveValue(slug,p,p.x),r.output);assert.equal(L.curveValue(slug,p,100),null);assert.equal(L.curveValue(slug,p,NaN),null);assert.equal(L.specs(slug).readout(p,r).stats.length,3);
    for(const view of L.specs(slug).views){const html=L.render(slug,p,{view,controlBounds:{x:{min:0,max:1.5,step:.05}}}),tag=attrs(html.match(/<g[^>]*data-drag-param="x"[^>]*>/)[0]);assert.equal(Number(tag['data-drag-min']),0);assert.equal(Number(tag['data-drag-max']),1.5);assert.equal(Number(tag['data-drag-step']),.05);}
  }
});

test('Graphs keep derivative and gradient-norm axes distinct from height',()=>{
  const p=L.defaults('gradient'),a=L.render('partial-derivative',p,{view:'graph'}),b=L.render('gradient',p,{view:'graph'}),c=L.render('chain-rule',L.defaults('chain-rule'),{view:'graph'});assert.match(a,/slope, not height/);assert.match(b,/norm.*nonnegative/);assert.match(c,/derivative, not the composed value/);assert.match(a,/data-series="partial-derivative-curve"/);assert.match(b,/data-series="gradient-curve"/);
  const a0=L.evaluate('partial-derivative',{...p,a:0,c:6});assert.equal(a0.output,0);assert.notEqual(a0.height,0);const b0=L.evaluate('gradient',{...p,a:0,b:0,c:6});assert.equal(b0.output,0);assert.equal(b0.height,6);
});

test('partial geometry exposes the cross slope without relabeling the selected x-slice tangent',()=>{
  const p={x:1,y:.5,a:-.5,b:-.25,c:4},r=L.evaluate('partial-derivative',p),html=L.render('partial-derivative',p),cross=html.match(/<text[^>]*data-role="cross-slope-readout"[^>]*>([^<]+)<\/text>/);
  assert.ok(cross);assert.equal(attrs(cross[0])['data-quantity'],'partialY');assert.match(cross[1],/∂F\/∂y = −0\.25 · x fixed/);assert.match(html,/>Height F\(x,y\) = 3\.4375<\/text>/);
  const tangent=html.match(/<g[^>]*data-quantity="([^"]+)"[^>]*><line[^>]*data-role="slice-tangent"[^>]*\/><\/g>/);assert.ok(tangent);assert.equal(tangent[1],'partialX');
  const changed=L.render('partial-derivative',{...p,y:1});assert.match(changed,/∂F\/∂y = −0\.5 · x fixed/);assert.equal(L.evaluate('partial-derivative',{...p,y:1}).partialX,r.partialX);
  const Symbols=require('../src/symbol-bindings.js'),card=JSON.parse(fs.readFileSync(new URL('../content/cards/partial-derivative.json',import.meta.url),'utf8')),present=new Set([...html.matchAll(/data-quantity="([^"]+)"/g)].flatMap(([,keys])=>keys.split(/\s+/)));
  for(const {token}of card.grammar.symbols)for(const key of Symbols.keysFor('partial-derivative',token))assert.ok(present.has(key),`${token}: ${key}`);
});

test('the new canonical fixtures and practical presets match runtime results',()=>{
  for(const slug of slugs){const card=JSON.parse(fs.readFileSync(new URL('../content/cards/'+slug+'.json',import.meta.url),'utf8'));for(const fixture of card.interactive.expected_cases){const result=L.evaluate(slug,fixture.input);assert.equal(result.status,fixture.status||'valid');if(fixture.output==null)assert.equal(result.output,null);else near(result.output,fixture.output);}for(const example of card.examples)if(example.preset)assert.equal(L.evaluate(slug,example.preset).valid,true);}
});
