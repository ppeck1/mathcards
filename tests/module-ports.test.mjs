import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require=createRequire(import.meta.url);
const Ports=require('../src/module-ports.js');
const Models=require('../src/models.js');
const ids=require('../src/playground-modules.js').list().map(module=>module.id);
const find=(id,direction,key)=>Ports.forModule(id).find(port=>port.direction===direction&&port.key===key);

test('port metadata loads offline without a document, model library, or registry',()=>{
  const context=vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/module-ports.js',import.meta.url),'utf8'),context);
  assert.equal(typeof context.AtlasModulePorts.forModule,'function');
  assert.ok(Object.isFrozen(context.AtlasModulePorts));
  assert.equal(context.AtlasModulePorts.forModule('pythagorean-theorem').find(port=>port.key==='output').unit,'m');
});

test('all installed models declare every numeric input and real finite output keys',()=>{
  for(const id of ids){
    const defaults=Models.defaults(id),result=Models.evaluate(id,defaults),ports=Ports.forModule(id);
    assert.ok(ports.length>0,id);
    const inputs=ports.filter(port=>port.direction==='input');
    assert.deepEqual(inputs.map(port=>port.key).sort(),Object.keys(defaults).filter(key=>typeof defaults[key]==='number').sort(),id+' numeric inputs');
    const outputs=ports.filter(port=>port.direction==='output');
    assert.ok(outputs.some(port=>port.key==='output'),id+' has its primary result');
    for(const port of inputs)assert.ok(Number.isFinite(defaults[port.key]),id+' '+port.id);
    for(const port of outputs)assert.ok(Number.isFinite(result[port.key]),id+' '+port.id+' refers to a model result');
  }
});

test('ports have complete, unique, immutable metadata with stable identifiers',()=>{
  const required=['description','direction','id','key','label','type','unit'];
  for(const id of ids){
    const ports=Ports.forModule(id);
    assert.ok(Object.isFrozen(ports),id);
    assert.equal(new Set(ports.map(port=>port.id)).size,ports.length,id+' port IDs');
    for(const port of ports){
      assert.deepEqual(Object.keys(port).sort(),required,id+' '+port.id);
      assert.match(port.id,/^(input|output):[A-Za-z][A-Za-z0-9]*$/);
      assert.equal(port.id,port.direction+':'+port.key);
      assert.match(port.type,/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/);
      // ASCII compound units use a dot for products and a slash for ratios.
      assert.match(port.unit,/^[A-Za-z0-9]+(?:[/.][A-Za-z0-9]+)*$/);
      assert.ok(port.label.length>0&&port.description.length>20);
      assert.ok(Object.isFrozen(port));
      assert.throws(()=>{port.unit='invented';},TypeError);
    }
    assert.throws(()=>ports.push({}),TypeError);
  }
  assert.equal(Ports.forModule('pythagorean-theorem'),Ports.forModule('pythagorean-theorem'),'immutable metadata can safely be shared');
});

test('physical quantities align by explicit semantics and units across topics',()=>{
  const hypotenuse=find('pythagorean-theorem','output','output');
  const gardenWidth=find('quadratic-optimization','input','width');
  assert.deepEqual([hypotenuse.type,hypotenuse.unit],[gardenWidth.type,gardenWidth.unit]);
  assert.deepEqual([hypotenuse.type,hypotenuse.unit],['length','m']);
  assert.deepEqual([find('integral-accumulation','output','output').type,find('integral-accumulation','output','output').unit],['length','m']);
  assert.deepEqual([find('fractal-geometry','output','output').type,find('fractal-geometry','output','output').unit],['length','m']);
  assert.equal(find('pythagorean-theorem','output','cSquared').type,'area');
  assert.equal(find('quadratic-optimization','output','output').unit,'m2');
  assert.equal(find('graph-theory','output','output').unit,find('linear-model','input','time').unit);
  assert.equal(find('ratio-scale','output','factor').type,find('exponential-change','input','factor').type);
});

test('similar names and dimensionless values retain meaningful type and unit differences',()=>{
  const probability=find('probability','input','chance'),population=find('chaos-theory','input','seed');
  assert.equal(probability.unit,population.unit);
  assert.notEqual(probability.type,population.type,'a population fraction is not an event probability');
  assert.notEqual(find('chaos-theory','input','seed').type,find('chaos-theory','input','delta').type,'a population and a population gap remain distinct');
  assert.notEqual(find('resonance','input','frequency').type,find('resonance','input','damping').type,'dimensionless ratios have different meanings');
  assert.notEqual(find('resonance','output','output').type,find('wave-interference','input','amplitude').type);
  assert.notEqual(find('exponential-change','output','output').unit,find('quadratic-optimization','input','width').unit,'pixels are not metres');
  assert.notEqual(find('linear-model','input','time').unit,find('integral-accumulation','input','time').unit,'minutes are not seconds');
  assert.notEqual(find('wave-interference','input','phase').unit,find('vector-rotation','input','angle').unit,'radians are not degrees');
  assert.equal(find('vector-rotation','output','radians').unit,'rad','a conversion already calculated by the model can be exposed explicitly');
  assert.notEqual(find('derivative','input','a').type,find('derivative','output','output').type,'coordinates and slopes remain distinct');
  assert.equal(find('real-logarithm','input','argument').type,'positive-scalar');
});

test('playheads and counts declare their actual model meaning instead of a generic number',()=>{
  assert.equal(find('ratio-scale','input','servings').unit,'serving');
  assert.equal(find('exponential-change','input','time').unit,'pass');
  assert.equal(find('chaos-theory','input','generation').unit,'generation');
  assert.equal(find('fractal-geometry','input','depth').unit,'level');
  assert.match(find('chaos-theory','input','generation').description,/interpolation between discrete iterates/);
  assert.match(find('fractal-geometry','input','depth').description,/not a completed iteration/);
  assert.match(find('probability','output','output').description,/not an observed integer sample/);
  assert.equal(find('probability','output','variance').unit,'success2');
});

test('unknown and non-string identifiers yield an immutable empty list without prototype lookups',()=>{
  for(const id of ['unknown','__proto__','constructor','toString','',null,undefined,{},[],18]){
    assert.deepEqual(Ports.forModule(id),[]);
    assert.ok(Object.isFrozen(Ports.forModule(id)));
  }
  assert.deepEqual(Object.keys(Ports),['forModule'],'compatibility and propagation belong to the host boundary');
});
