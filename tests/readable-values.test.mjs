import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Values=require('../src/readable-values.js');

test('readable values are available as an offline classic script',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/readable-values.js',import.meta.url),'utf8'),context);
  assert.equal(context.AtlasReadableValues.format(450),'450');
});

test('moving labels use two decimals while resting labels retain six significant digits',()=>{
  assert.equal(Values.format(614.4385),'614.44');
  assert.equal(Values.format(614.4388,{settled:true}),'614.439');
  assert.equal(Values.format(-1.239), '−1.24');
  assert.equal(Values.format(1200.000001), '1,200');
  assert.equal(Values.format(1.23456,{precision:1}), '1.2');
  assert.equal(Values.format(1.23456,{precision:4,settled:true}), '1.235');
  assert.equal(Values.format(-0),'0');
});

test('tiny nonzero changes keep their sign and scale instead of rounding to zero',()=>{
  assert.equal(Values.format(.0001234), '0.00012');
  assert.equal(Values.format(-.0001234), '−0.00012');
  assert.equal(Values.format(1.234e-10), '1.2e-10');
  assert.equal(Values.format(1.23456e-10,{settled:true}), '1.23456e-10');
  assert.equal(Values.format(null), 'Undefined');
  assert.equal(Values.format(NaN), 'Unavailable');
  assert.equal(Values.format(Infinity), 'Unavailable');
});

test('existing decimal scene labels can be rounded without changing integer or unit notation',()=>{
  assert.equal(Values.formatText('01 · 3:2 · width 614.4385 px · h = −0.0001234'), '01 · 3:2 · width 614.44 px · h = −0.00012');
  assert.equal(Values.formatText('x = 1,234.56789; y = 1.23456e-7',{settled:true}), 'x = 1,234.57; y = 1.23456e-7');
  assert.equal(Values.formatText('Keep < and > as text; 2.45 m²'), 'Keep < and > as text; 2.45 m²');
});

test('a frame-rate-independent pacer limits moving text and immediately flushes exact stops',()=>{
  let now=0;const pacer=Values.createPacer({now:()=>now});
  assert.equal(pacer.take(),true);
  const emissions=[];
  for(now=16;now<=1000;now+=16)if(pacer.take())emissions.push(now);
  assert.ok(emissions.length<=4,'The geometry clock can render every frame without making text tick at 60 Hz');
  assert.ok(emissions.every((time,i)=>time-(i?emissions[i-1]:0)>=250));
  assert.equal(pacer.take({settled:true}),true);
  assert.equal(pacer.take(),false);
  assert.equal(pacer.take({force:true}),true);
});

test('a settled snapshot is not delayed by the moving interval or a reset clock',()=>{
  let time=100;const pacer=Values.createPacer({intervalMs:300,now:()=>time});
  assert.equal(pacer.take(),true);time=110;assert.equal(pacer.take(),false);
  assert.equal(pacer.take({settled:true}),true);
  time=120;assert.equal(pacer.take(),false);
  time=0;assert.equal(pacer.take(),true);
});

test('text writes preserve existing text node identity and skip unchanged content',()=>{
  const text={nodeType:3,nodeValue:'4.2'};
  let replacements=0;
  const element={childNodes:[text],firstChild:text,get textContent(){return text.nodeValue;},set textContent(value){replacements++;text.nodeValue=value;}};
  assert.equal(Values.writeText(element,'4.2'),false);
  assert.equal(Values.writeText(element,'4.3'),true);
  assert.equal(element.firstChild,text);assert.equal(replacements,0);assert.equal(text.nodeValue,'4.3');
});
