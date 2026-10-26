import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Discovery=require('../src/discovery.js'),Frontier=require('../src/frontier.js'),Modules=require('../src/playground-modules.js'),Bindings=require('../src/symbol-bindings.js');

test('display labels preserve the case of mathematical variables',()=>{
  for(const [provider,slug,key,symbol] of [[Discovery,'vector-rotation','angle','θ'],[Discovery,'wave-interference','phase','φ'],[Frontier,'resonance','frequency','ω']]){
    const label=provider.controls(slug).find(control=>control.key===key).label;
    assert.ok(label.includes(symbol));assert.ok(provider.render(slug,provider.defaults(slug)).includes(label));
    const module=Modules.get(slug),readout=module.readout(module.defaults(),module.evaluate(module.defaults()),{format:String,view:'geometry'});
    assert.ok(readout.stats.some(stat=>stat.label.includes(symbol)),slug+' preserves variable case in its readout');
  }
});

test('the projection vector is distinct from its signed scalar component',()=>{
  const card=JSON.parse(fs.readFileSync(new URL('../content/cards/inner-product.json',import.meta.url),'utf8'));
  assert.deepEqual(card.grammar.output_symbol_bindings['projᵤ(v)'],['projectionX','projectionY']);
  assert.deepEqual(Bindings.keysFor('inner-product','projᵤ(v)'),['projectionX','projectionY']);
  const result=Modules.get('inner-product').evaluate({ux:-3,uy:0,vx:2,vy:2});
  assert.equal(result.projection,-2);assert.equal(result.projectionX,2);assert.equal(Math.abs(result.projectionY),0);
});
