import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Links=require('../src/story-links.js');
const Stories=require('../src/life-stories.js');

test('every authored quantity has an immutable story-specific meaning and visual role',()=>{
  for(const story of Stories.all()){
    const keys=new Set(story.steps.flatMap(step=>[step.body,step.formula]).flatMap(text=>Array.from(text.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g),match=>match[1])));
    for(const key of keys){
      const quantity=Links.quantityFor(story.slug,key);
      assert.ok(quantity,`${story.slug}: ${key} needs a spoken meaning`);
      assert.ok(Object.isFrozen(quantity));
      assert.ok(quantity.label.length>4&&quantity.label!==key);
      assert.ok(quantity.description.length>40);
      assert.ok(['reference','input','intermediate','output'].includes(quantity.role));
      assert.equal(Links.quantityFor(story.slug,key),quantity,'Metadata is stable across frames');
    }
    assert.equal(Links.quantityFor(story.slug,story.timeline.key).role,'input');
  }
});

test('unknown story or quantity names never expose prototype properties',()=>{
  for(const slug of ['unknown','constructor','toString','__proto__']){
    assert.equal(Links.quantityFor(slug,'output'),null);
    assert.equal(Links.quantityFor(slug,'constructor'),null);
  }
  for(const story of Stories.all())for(const key of ['unknown','constructor','toString','__proto__'])assert.equal(Links.quantityFor(story.slug,key),null);
});

test('derivative quantities distinguish distance, finite average, and instantaneous speed',()=>{
  const position=Links.quantityFor('derivative','position'),average=Links.quantityFor('derivative','output'),instant=Links.quantityFor('derivative','analytic');
  assert.match(position.label,/position/i);assert.match(position.description,/distance, not a speed/);
  assert.match(average.label,/average speed.*0\.1 seconds/i);assert.match(average.description,/gap itself measures metres/);
  assert.match(instant.label,/instantaneous speed/i);assert.match(instant.description,/distinct from position.*average/);
  assert.equal(position.role,'intermediate');assert.equal(average.role,'intermediate');assert.equal(instant.role,'output');
});

test('rounded export width does not claim that the animated frame is rounded',()=>{
  const rounded=Links.quantityFor('exponential-change','rounded');
  assert.match(rounded.label,/export width/i);
  assert.match(rounded.description,/frame still shows the ideal, unrounded width/);
  assert.match(Links.quantityFor('exponential-change','time').description,/fractional values.*interpolation/);
});
