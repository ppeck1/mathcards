import test from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const Player=require('../src/life-story.js');
const Stories=require('../src/life-stories.js');

test('story templates separate stable prose from changing quantities without evaluating markup or expressions',()=>{
  assert.deepEqual(Player.templateParts('A border of {{x}} m gives {{output}} m².'),[{text:'A border of '},{key:'x'},{text:' m gives '},{key:'output'},{text:' m².'}]);
  assert.deepEqual(Player.templateParts('<img onerror="x"> {{x+1}}'),[{text:'<img onerror="x"> {{x+1}}'}]);
  assert.deepEqual(Player.templateParts('{{x}}{{x}}'),[{key:'x'},{key:'x'}]);
  assert.deepEqual(Player.templateParts(''),[]);
});

test('the driver and its consequences retain distinct roles in every story',()=>{
  for(const story of Stories.all()){
    const key=story.timeline.key;
    assert.equal(Player.tokenRole(story.slug,key,key),'input');
    const terms=story.steps.flatMap(step=>Player.templateParts(step.body)).filter(part=>part.key===key);
    assert.equal(terms.length,4,'Each step keeps the actual driver visible');
    for(const step of story.steps)assert.ok(['reference','input','intermediate','output'].includes(step.focus));
  }
  assert.equal(Player.tokenRole('derivative','position','a'),'intermediate');
  assert.equal(Player.tokenRole('derivative','output','a'),'intermediate','A finite average is not the analytic instantaneous speed');
  assert.equal(Player.tokenRole('derivative','analytic','a'),'output');
  assert.equal(Player.tokenRole('function-composition','intermediate','x'),'intermediate');
  assert.equal(Player.tokenRole('ratio-scale','amount','servings'),'reference');
});
