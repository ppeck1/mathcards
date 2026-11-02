import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

test('the plug-in sandbox loads the same provider dependencies without starting a clock',()=>{
  const page=new URL('../examples/module-sandbox.html',import.meta.url);
  const html=fs.readFileSync(page,'utf8');
  const context=vm.createContext({
    console,
    performance,
    structuredClone,
    setTimeout:()=>{throw new Error('Loading a provider must not start a timer');},
    requestAnimationFrame:()=>{throw new Error('Loading a provider must not start an animation');}
  });
  for(const [,source] of html.matchAll(/<script src="([^"]+)"[^>]*><\/script>/g)){
    assert.doesNotMatch(source,/^(?:https?:|\/\/)/);
    vm.runInContext(fs.readFileSync(new URL(source,page),'utf8'),context,{filename:source});
  }
  assert.ok(context.AtlasLegacyModels.has('real-logarithm'));
  assert.ok(context.AtlasModules.get('sampling-distribution'));
  assert.ok(context.AtlasModules.get('partial-order'));
  assert.equal(context.AtlasModels.evaluate('real-logarithm',{base:4,argument:2}).exactDisplay,'1/2');
  assert.equal(context.AtlasModels.evaluate('meet-join',{a:3,b:5,operation:'meet'}).output,1);
  assert.ok(context.AtlasPlayground.mount);
});
