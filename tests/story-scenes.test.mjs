import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Scenes=require('../src/story-scenes.js');
const Models=require('../src/models.js');
const Everyday=require('../src/everyday.js');
const slugs=['function-composition','real-logarithm','derivative','ratio-scale','linear-model','exponential-change'];
const near=(actual,expected,tolerance=1e-4)=>assert.ok(Math.abs(actual-expected)<=tolerance*Math.max(1,Math.abs(expected)),`${actual} ≈ ${expected}`);
function attributes(html,role){
  return [...html.matchAll(/<[^>]+>/g)].filter(([tag])=>tag.includes(`data-role="${role}"`)).map(([tag])=>Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([,key,value])=>[key,value])));
}
function finiteGeometry(html){
  for(const [tag] of html.matchAll(/<[^>]+>/g))assert.doesNotMatch(tag,/(?:NaN|[+-]?Infinity)/);
  assert.doesNotMatch(html,/(?:<script|onload=|javascript:)/i);
  for(const [,value] of html.matchAll(/\b(?:width|height|r|rx|ry)="([^"]+)"/g))if(!value.includes('%'))assert.ok(Number(value)>=0,`Geometry dimension ${value} must be nonnegative`);
}
const patio=x=>({...Models.defaults('function-composition'),x});
const photograph=argument=>({base:2,argument});
const cart=(a,h=.1)=>({preset:'cubic',a,h});

test('contextual scenes load in an offline browser without DOM or network dependencies',()=>{
  const context=vm.createContext({});
  for(const name of ['everyday','models','story-scenes'])vm.runInContext(fs.readFileSync(new URL(`../src/${name}.js`,import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasStoryScenes.render,'function');
  assert.equal(context.AtlasStoryScenes.primaryValue('derivative',cart(2,.5)),12);
  for(const slug of slugs)assert.match(context.AtlasStoryScenes.render(slug,Models.defaults(slug),{id:slug}),/<svg/);
});

test('a patio grows in both dimensions on a fixed length scale, so paving area follows side squared',()=>{
  let scale;
  for(const x of [0,.5,1,2,3,4]){
    const p=patio(x),html=Scenes.render('function-composition',p,{id:'patio'}),square=attributes(html,'patio-square')[0];
    assert.ok(square);const side=2*x+1,area=side*side;
    assert.equal(Number(square['data-side']),side);assert.equal(Number(square['data-area']),area);
    near(Number(square.width),Number(square.height));
    const currentScale=Number(square.width)/side;
    if(scale!==undefined)near(currentScale,scale);else scale=currentScale;
    near(Number(square.width)*Number(square.height),area*scale*scale);
    near(Number(square.y)+Number(square.height),294);
    finiteGeometry(html);
  }
});

test('photography encodes light ratio with a linear bar and labels image brightness as qualitative',()=>{
  let unitWidth;
  for(const ratio of [.125,.25,.5,1,2,4,8,16]){
    const html=Scenes.render('real-logarithm',photograph(ratio),{id:'exposure'}),bar=attributes(html,'light-ratio')[0];
    assert.equal(Number(bar['data-value']),ratio);
    const coordinates=bar.d.match(/M([\d.-]+) ([\d.-]+)L([\d.-]+) ([\d.-]+)/);
    assert.ok(coordinates);const width=Number(coordinates[3])-Number(coordinates[1]);
    if(unitWidth!==undefined)near(width/ratio,unitWidth);else unitWidth=width/ratio;
    assert.equal(Scenes.primaryValue('real-logarithm',photograph(ratio)),Math.log2(ratio));
    assert.doesNotMatch(html,/\+[-−]\d+ stops/,'Negative exposure changes have one sign');
    assert.match(html,/picture brightness is a qualitative illustration/);
    finiteGeometry(html);
  }
});

test('cart position and instantaneous speed use cubic position and its analytic derivative',()=>{
  const xPositions=[];
  for(const a of [0,.5,1,2,3]){
    const p=cart(a,.5),values=Scenes.values('derivative',p),html=Scenes.render('derivative',p,{id:'cart'}),drawing=attributes(html,'motion-cart')[0];
    assert.ok(drawing);assert.equal(Number(drawing['data-position']),a**3);
    assert.equal(values.position,a**3);assert.equal(values.speed,3*a*a);assert.equal(Scenes.primaryValue('derivative',p),3*a*a);
    assert.match(html,new RegExp(`${3*a*a} m/s`));
    xPositions.push(Number(drawing.transform.match(/translate\(([^ ]+)/)[1]));finiteGeometry(html);
  }
  for(let i=1;i<xPositions.length;i++)assert.ok(xPositions[i]>xPositions[i-1]);
  const p=cart(2,.5);assert.notEqual(Models.evaluate('derivative',p).output,Scenes.primaryValue('derivative',p),'The story does not substitute a finite secant for instantaneous speed');
});

test('the cart remains meaningful when the finite secant step is zero',()=>{
  const p=cart(2,0);assert.equal(Models.evaluate('derivative',p).output,null);
  assert.equal(Scenes.primaryValue('derivative',p),12);
  const html=Scenes.render('derivative',p,{id:'zero-step'}),drawing=attributes(html,'motion-cart')[0];
  assert.ok(drawing,'Position and analytic speed still exist at h = 0');
  assert.equal(Number(drawing['data-position']),8);assert.match(html,/12 m\/s/);finiteGeometry(html);
});

test('everyday contextual scenes delegate to the shared mathematical renderer and quantities',()=>{
  const cases=[['ratio-scale',{amount:300,baseServings:4,servings:6},'ingredient-mass',450],
    ['linear-model',{initial:20,rate:4,time:5},'water-volume',40],
    ['exponential-change',{initial:1200,factor:.8,time:3},'photo-width',614.4]];
  for(const [slug,p,role,output] of cases){
    const html=Scenes.render(slug,p,{id:'worked-example'}),direct=Everyday.render(slug,p,{id:'story-worked-example',view:'geometry'});
    assert.equal(html,direct,'The story reuses the shared renderer instead of a second numerical model');
    near(Scenes.primaryValue(slug,p),output);
    near(Number(attributes(html,role).at(-1)['data-value']),output);finiteGeometry(html);
  }
});

test('zero quantities remain drawable and invalid inputs remove stale mathematical pictures',()=>{
  const valid=[['derivative',cart(0)],['ratio-scale',{amount:0,baseServings:4,servings:6}],['linear-model',{initial:0,rate:0,time:0}]];
  for(const [slug,p] of valid){const html=Scenes.render(slug,p,{id:'zero'});finiteGeometry(html);assert.match(html,/role="slider"/);assert.equal(Scenes.primaryValue(slug,p),0);}
  const invalid=[['function-composition',{...patio(1),x:NaN}],['real-logarithm',{base:1,argument:8}],['real-logarithm',{base:2,argument:0}],['derivative',{...cart(1),a:Infinity}],['ratio-scale',{baseServings:0}],['linear-model',{rate:-1}],['exponential-change',{factor:0}]];
  for(const [slug,p] of invalid){const html=Scenes.render(slug,p,{id:'invalid'});finiteGeometry(html);assert.doesNotMatch(html,/data-drag-param=|data-role="(?:patio-square|light-ratio|motion-cart|water-volume|photo-width|ingredient-mass)"/);assert.equal(Scenes.primaryValue(slug,p),null);}
});

test('context-specific pictures reject alternate formulas and physical domains honestly',()=>{
  const cases=[['function-composition',{...patio(2),a:2}],['function-composition',{...patio(2),order:'g_after_f'}],['function-composition',patio(-.5)],
    ['real-logarithm',{base:3,argument:8}],['real-logarithm',photograph(.0625)],['real-logarithm',photograph(32)],
    ['derivative',{preset:'linear',a:2,h:.1}],['derivative',cart(-1)]];
  for(const [slug,p] of cases){
    assert.equal(Models.evaluate(slug,p).valid,true,'The mathematical input is valid in its broader model');
    const html=Scenes.render(slug,p,{id:'different-setting'});finiteGeometry(html);
    assert.doesNotMatch(html,/data-role="(?:patio-square|light-ratio|motion-cart)"/);
    assert.match(html,/outside this story’s setting|different setting/);
  }
});

test('context scenes are immutable and isolate every SVG definition between adjacent stories',()=>{
  for(const slug of slugs){
    const p=Object.freeze(Models.defaults(slug)),options=Object.freeze({id:'left <"&>'}),before=JSON.stringify(p);
    const html=Scenes.render(slug,p,options),again=Scenes.render(slug,p,options),other=Scenes.render(slug,p,{id:'right'});
    assert.equal(html,again);assert.equal(JSON.stringify(p),before);finiteGeometry(html);
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id),otherIds=[...other.matchAll(/\bid="([^"]+)"/g)].map(([,id])=>id);
    assert.equal(ids.length,new Set(ids).size);assert.ok(ids.every(id=>!otherIds.includes(id)));
    for(const [,id] of html.matchAll(/url\(#([^)]+)\)/g))assert.ok(ids.includes(id),`Missing definition ${id}`);
  }
});
