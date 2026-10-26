import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),L=require('../src/linear-algebra.js'),Plot=require('../src/plot-view.js');
const slugs=['vector','inner-product','matrix-linear-map','determinant'];
const near=(actual,expected,tolerance=1e-10)=>assert.ok(Math.abs(actual-expected)<=tolerance*Math.max(1,Math.abs(expected)),`${actual} ≈ ${expected}`);
const attrs=tag=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value]));
const polygon=html=>attrs(html.match(/<polygon[^>]*data-role="mapped-unit-square"[^>]*>/)[0]);

test('four pure linear algebra families load offline with explicit immutable API and numeric metadata',()=>{
  const context=vm.createContext({AtlasPlotView:Plot});vm.runInContext(fs.readFileSync(new URL('../src/linear-algebra.js',import.meta.url),'utf8'),context);
  assert.ok(Object.isFrozen(L));
  for(const slug of slugs){assert.equal(context.AtlasLinearAlgebra.has(slug),true);assert.equal(L.evaluate(slug,L.defaults(slug)).valid,true);assert.equal(L.specs(slug).rendererId,slug+'-visual-model');const first=L.defaults(slug);first[L.specs(slug).axis]=1000;assert.notDeepEqual(first,L.defaults(slug));assert.ok(L.specs(slug).sweeps.every(sweep=>typeof L.defaults(slug)[sweep.key]==='number'));}
  for(const slug of ['__proto__','constructor','toString','unknown',null,{}])assert.equal(L.has(slug),false);
});

test('vector norm combines signed perpendicular components and zero has no angle',()=>{
  for(const x of [-5,-3,0,1,3,5])for(const y of [-5,-4,0,4,5]){const r=L.evaluate('vector',{x,y});near(r.norm*r.norm,x*x+y*y);assert.equal(r.output,r.norm);assert.ok(r.norm>=0);}
  const zero=L.evaluate('vector',{x:0,y:0});assert.equal(zero.output,0);assert.equal(zero.angleDegrees,null);assert.equal(zero.status,'valid');
  near(L.evaluate('vector',{x:-3,y:4}).output,5);near(L.evaluate('vector',{x:0,y:-2}).angleDegrees,-90);
});

test('dot product is bilinear and retains aligned, perpendicular and opposite signs',()=>{
  near(L.evaluate('inner-product',{ux:3,uy:0,vx:2,vy:2}).output,6);
  near(L.evaluate('inner-product',{ux:1,uy:0,vx:0,vy:3}).output,0);
  near(L.evaluate('inner-product',{ux:1,uy:2,vx:-1,vy:-2}).output,-5);
  for(const ux of [-2,0,2])for(const uy of [-1,0,1]){
    const a=L.evaluate('inner-product',{ux,uy,vx:1,vy:2}).output,b=L.evaluate('inner-product',{ux,uy,vx:-2,vy:1}).output,sum=L.evaluate('inner-product',{ux,uy,vx:-1,vy:3}).output;
    near(sum,a+b);
  }
});

test('projection is onto u, is orthogonal to the residual and handles zero directions explicitly',()=>{
  for(const p of [{ux:3,uy:0,vx:2,vy:2},{ux:1,uy:2,vx:-3,vy:1},{ux:-2,uy:1,vx:3,vy:4}]){
    const r=L.evaluate('inner-product',p);near(p.ux*(p.vx-r.projectionX)+p.uy*(p.vy-r.projectionY),0);near(r.projection*r.uNorm,r.dot);near(Math.hypot(r.projectionX,r.projectionY),Math.abs(r.projection));assert.ok(r.cosine>=-1&&r.cosine<=1);
  }
  const zeroU=L.evaluate('inner-product',{ux:0,uy:0,vx:2,vy:2});assert.equal(zeroU.valid,true);assert.equal(zeroU.output,0);for(const key of ['projection','projectionFactor','projectionX','projectionY','cosine','angleDegrees'])assert.equal(zeroU[key],null,key);assert.equal(zeroU.projectionStatus,'undefined_direction');
  const zeroV=L.evaluate('inner-product',{ux:3,uy:0,vx:0,vy:0});assert.equal(zeroV.projection,0);assert.equal(zeroV.angleDegrees,null);
});

test('matrix rows compute mapped components and columns are the images of basis arrows',()=>{
  for(const p of [{a:1,b:1,c:0,d:1,x:1,y:1},{a:0,b:-1,c:1,d:0,x:2,y:1},{a:-1,b:2,c:2,d:-2,x:-2,y:3}]){
    const r=L.evaluate('matrix-linear-map',p);near(r.output,p.a*p.x+p.b*p.y);near(r.mappedY,p.c*p.x+p.d*p.y);near(r.mappedNorm,Math.hypot(r.mappedX,r.mappedY));
    const e1=L.evaluate('matrix-linear-map',{...p,x:1,y:0}),e2=L.evaluate('matrix-linear-map',{...p,x:0,y:1});near(e1.mappedX,p.a);near(e1.mappedY,p.c);near(e2.mappedX,p.b);near(e2.mappedY,p.d);
  }
  const p={a:1,b:-2,c:.5,d:1};const u=L.evaluate('matrix-linear-map',{...p,x:1,y:.5}),v=L.evaluate('matrix-linear-map',{...p,x:-.5,y:1}),sum=L.evaluate('matrix-linear-map',{...p,x:.5,y:1.5});near(sum.mappedX,u.mappedX+v.mappedX);near(sum.mappedY,u.mappedY+v.mappedY);
});

test('tiny nonzero reference directions retain their projection and angle without squared-norm underflow',()=>{
  for(const ux of [1e-200,1e-320]){
    const r=L.evaluate('inner-product',{ux,uy:0,vx:2,vy:2});
    near(r.projection,2);near(r.projectionX,2);near(r.projectionY,0);near(r.angleDegrees,45);
    assert.equal(r.projectionStatus,'valid');
    for(const value of Object.values(r))if(typeof value==='number')assert.ok(Number.isFinite(value));
  }
  const both=L.evaluate('inner-product',{ux:1e-250,uy:0,vx:0,vy:1e-250});near(both.angleDegrees,90);
});

test('determinants match independent oriented shoelace area and reverse sign on column exchange',()=>{
  for(const a of [-3,-1,0,1,3])for(const b of [-2,0,2])for(const c of [-1,1])for(const d of [-3,0,3]){
    const r=L.evaluate('determinant',{a,b,c,d}),points=[[0,0],[a,c],[a+b,c+d],[b,d]];
    const shoelace=points.reduce((sum,[x,y],i)=>sum+x*points[(i+1)%4][1]-y*points[(i+1)%4][0],0)/2;
    near(r.output,shoelace);near(r.area,Math.abs(shoelace));near(L.evaluate('determinant',{a:b,b:a,c:d,d:c}).output,-r.output);
  }
});

test('singular matrices are valid transformations with collapsed area and no inverse',()=>{
  for(const slug of ['matrix-linear-map','determinant']){
    const r=L.evaluate(slug,{a:1,b:2,c:1,d:2});assert.equal(r.valid,true);assert.equal(r.status,'valid');assert.equal(r.determinant,0);assert.equal(r.area,0);assert.equal(r.orientation,0);assert.equal(r.inverseExists,false);
  }
  const reversed=L.evaluate('determinant',{d:-2});assert.equal(reversed.output,-2);assert.equal(reversed.area,2);assert.equal(reversed.orientation,-1);assert.equal(reversed.inverseExists,true);
});

test('parameter validation preserves precise inputs and rejects malformed or unsupported values',()=>{
  for(const slug of slugs){
    const key=L.specs(slug).axis;
    for(const input of [null,[],4,{unknown:1},{[key]:NaN},{[key]:Infinity},{[key]:'2'},{[key]:1000}]){const r=L.evaluate(slug,input);assert.equal(r.status,'invalid_parameters');assert.equal(r.output,null);}
    const tiny=1e-12,r=L.evaluate(slug,{[key]:tiny});assert.equal(r.parameters[key],tiny);
  }
});

test('each model has a distinct finite geometry and graph at every parameter-boundary corner',()=>{
  for(const slug of slugs){
    const fields=L.controls(slug),defaults=L.defaults(slug);assert.notEqual(L.render(slug,defaults),L.render(slug,defaults,{view:'graph'}));
    for(let mask=0;mask<(1<<fields.length);mask++){
      const p=Object.fromEntries(fields.map((field,index)=>[field.key,mask&(1<<index)?field.max:field.min]));
      for(const view of ['geometry','graph']){const html=L.render(slug,p,{view,baseline:defaults});assert.match(html,/<svg\b/);assert.doesNotMatch(html,/NaN|Infinity/);}
    }
  }
});

test('mapped unit-square pixel area represents actual determinant magnitude on one coordinate scale',()=>{
  for(const slug of ['matrix-linear-map','determinant'])for(const p of [{a:1,b:1,c:0,d:2},{a:-1,b:2,c:1,d:0},{a:1,b:2,c:1,d:2}]){
    const r=L.evaluate(slug,p),mark=polygon(L.render(slug,p)),points=mark.points.split(' ').map(pair=>pair.split(',').map(Number));
    const pixels=Math.abs(points.reduce((sum,[x,y],i)=>sum+x*points[(i+1)%4][1]-y*points[(i+1)%4][0],0)/2);
    near(pixels/Number(mark['data-coordinate-scale'])**2,r.area,1e-6);near(Number(mark['data-signed-area']),r.determinant);near(Number(mark['data-area']),r.area);
  }
});

test('the transformed grid uses the same matrix columns as the mapped square and arrow',()=>{
  const p={a:1,b:1,c:0,d:1,x:1,y:1},html=L.render('matrix-linear-map',p),square=polygon(html),scale=Number(square['data-coordinate-scale']);
  const lines=[...html.matchAll(/<line[^>]*data-role="mapped-grid-line"[^>]*>/g)].map(([tag])=>attrs(tag));
  assert.equal(lines.length,10);
  const vertical=lines.find(mark=>mark['data-grid-axis']==='x'&&mark['data-grid-coordinate']==='1');
  near(Number(vertical.x1),270+scale*(p.a-2*p.b),1e-6);near(Number(vertical.y1),202-scale*(p.c-2*p.d),1e-6);
  near(Number(vertical.x2),270+scale*(p.a+2*p.b),1e-6);near(Number(vertical.y2),202-scale*(p.c+2*p.d),1e-6);
  assert.match(html,/data-role="mapped-grid"/);
});

test('primary matrix and determinant gestures keep their geometry scales fixed and comparison pins share it',()=>{
  for(const [slug,key,values] of [['matrix-linear-map','b',[-2,-1,0,1,2]],['determinant','d',[-3,-1,0,1,3]]]){
    const scales=values.map(value=>polygon(L.render(slug,{[key]:value}))['data-coordinate-scale']);assert.equal(new Set(scales).size,1);
    const html=L.render(slug,{[key]:1},{baseline:{...L.defaults(slug),[key]:-1}});assert.match(html,/data-role="baseline-square"/);
  }
});

test('story-specific handles preserve keyboard bounds and independently scoped SVG identifiers',()=>{
  const html=L.render('matrix-linear-map',{b:1},{controlBounds:{b:{min:0,max:1,step:.02}},id:'one slot'});
  const handle=attrs(html.match(/<g[^>]*data-drag-param="b"[^>]*>/)[0]);assert.equal(handle['data-drag-min'],'0');assert.equal(handle['data-drag-max'],'1');assert.equal(handle['data-drag-step'],'0.02');assert.equal(handle['aria-valuenow'],'1');
  const other=L.render('matrix-linear-map',{}, {id:'one_slot'}),ids=markup=>[...markup.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);
  assert.ok(ids(html).every(id=>!ids(other).includes(id)));assert.doesNotMatch(html,/<script\b|on(?:click|load)=/i);
  for(const slug of slugs){const readout=L.specs(slug).readout(L.defaults(slug),L.evaluate(slug),{format:String});assert.ok(readout.expression&&readout.insight);assert.ok(readout.stats.every(stat=>stat.value===null||Number.isFinite(stat.value)));}
});
