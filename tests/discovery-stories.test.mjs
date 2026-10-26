import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Stories = require('../src/discovery-stories.js');
const Discovery = require('../src/discovery.js');
const Scenes = require('../src/story-scenes.js');
const Readable = require('../src/readable-values.js');
const slugs = ['chaos-theory', 'fractal-geometry', 'wave-interference', 'probability', 'vector-rotation', 'pythagorean-theorem'];
const roles = ['reference', 'input', 'intermediate', 'output'];
const at = (story, progress) => ({ ...story.parameters, [story.timeline.key]: progress === 1 ? story.timeline.to : story.timeline.from + (story.timeline.to - story.timeline.from) * progress });
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) <= Math.max(1, Math.abs(expected)) * 1e-11, `${actual} ≈ ${expected}`);
const templates = story => [...story.steps.flatMap(step => [step.body, step.formula]), ...story.calculation.map(stage => stage.template)];
function deeplyFrozen(value) {
  if (!value || typeof value !== 'object') return;
  assert.ok(Object.isFrozen(value), 'Authored arrays and objects are recursively immutable');
  Object.values(value).forEach(deeplyFrozen);
}

test('six discovery narratives load offline without DOM, model dependency or side effects', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/discovery-stories.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasDiscoveryStories.all().length, 6);
  assert.deepEqual(Stories.all().map(story => story.slug), slugs);
  assert.equal(new Set(Stories.all().map(story => story.id)).size, 6);
  for (const story of Stories.all()) {
    assert.equal(Stories.forSlug(story.slug), story);
    assert.equal(Stories.find(story.id), story);
    for (const key of ['title', 'eyebrow', 'summary', 'context', 'question', 'conclusion']) assert.ok(typeof story[key] === 'string' && story[key].length > 10, `${story.slug}.${key}`);
    assert.equal(typeof story.scene, 'string');
    assert.equal(typeof story.unit, 'string');
    assert.ok(story.unit.length > 0);
    assert.ok(story.assumptions.length >= 3);
  }
  for (const invalid of ['constructor', '__proto__', 'toString', null, undefined, {}]) {
    assert.equal(Stories.forSlug(invalid), null);
    assert.equal(Stories.find(invalid), null);
    assert.equal(Stories.linksFor(invalid), null);
    assert.equal(Stories.quantityFor(invalid, 'output'), null);
  }
});

test('each story has a complete, reproducible model state and a bounded smooth playback path', () => {
  for (const story of Stories.all()) {
    assert.deepEqual(Object.keys(story.parameters).sort(), Object.keys(Discovery.defaults(story.slug)).sort());
    assert.deepEqual(at(story, 1), story.parameters, 'The endpoint answers the authored question');
    const driver = story.variables.find(variable => variable.key === story.timeline.key);
    assert.ok(driver);
    assert.ok(story.timeline.durationMs >= 10000 && story.timeline.durationMs <= 14000);
    assert.ok(driver.min < driver.max && driver.step > 0);
    assert.ok(story.timeline.from >= driver.min && story.timeline.from <= driver.max);
    assert.ok(story.timeline.to >= driver.min && story.timeline.to <= driver.max);
    for (let frame = 0; frame <= 120; frame++) {
      const parameters = at(story, frame / 120), result = Discovery.evaluate(story.slug, parameters);
      assert.equal(result.valid, true, `${story.slug} at frame ${frame}`);
      assert.ok(Number.isFinite(result.output));
      for (const [key, value] of Object.entries(story.parameters)) if (key !== story.timeline.key) assert.equal(parameters[key], value);
    }
    for (const value of [driver.min, (driver.min + driver.max) / 2, driver.max]) assert.equal(Discovery.evaluate(story.slug, { ...story.parameters, [driver.key]: value }).valid, true);
  }
});

test('four story stages connect the current driver to each semantic scene role', () => {
  for (const story of Stories.all()) {
    assert.equal(story.steps.length, 4);
    assert.equal(new Set(story.steps.map(step => step.id)).size, 4);
    assert.deepEqual(story.steps.map(step => step.focus), roles);
    story.steps.forEach((step, index) => {
      assert.equal(step.from, index / 4);
      assert.equal(step.to, (index + 1) / 4);
      assert.ok(step.title.length > 4);
      assert.ok(step.focusLabel.length > 10 && step.focusDescription.length > 30);
      assert.ok(step.body.includes('{{' + story.timeline.key + '}}'), `${story.slug}.${step.id} explains the current dragged value`);
    });
    const link = Stories.linksFor(story.slug), driver = story.variables[0];
    assert.equal(link.variableKey, driver.key);
    assert.equal(link.symbol, driver.symbol);
    assert.equal(link.variableLabel, driver.label);
    assert.equal(link.unit, driver.unit);
    assert.ok(link.effectLabel.length > 40);
    assert.deepEqual(link.steps, story.steps.map(step => ({ focus: step.focus, label: step.focusLabel, description: step.focusDescription })));
    assert.deepEqual(story.calculation.map(stage => stage.role), ['input', 'intermediate', 'output']);
    assert.ok(story.calculation[0].template.includes('{{' + story.timeline.key + '}}'));
  }
});

test('every narrative and calculation token resolves to the same scalar model quantity as its scene', () => {
  for (const story of Stories.all()) for (const progress of [0, .1, .25, .49, .5, .75, .9, 1]) {
    const parameters = at(story, progress), values = Scenes.values(story.slug, parameters);
    for (const template of templates(story)) for (const [, key] of template.matchAll(/\{\{(\w+)\}\}/g)) {
      assert.ok(Object.hasOwn(values, key), `Unknown token ${story.slug}.${key}`);
      assert.ok(Number.isFinite(values[key]), `Non-scalar token ${story.slug}.${key}`);
      const quantity = Stories.quantityFor(story.slug, key);
      assert.ok(quantity, `Missing readable quantity metadata ${story.slug}.${key}`);
      assert.ok(quantity.label.length > 5 && quantity.description.length > 35);
      assert.ok(roles.includes(quantity.role));
    }
  }
  for (const slug of slugs) for (const key of ['constructor', '__proto__', 'toString', 'missing']) assert.equal(Stories.quantityFor(slug, key), null);
});

test('story endpoints solve all six practical questions with the claimed units', () => {
  const chaos = Discovery.evaluate('chaos-theory', Stories.forSlug('chaos-theory').parameters);
  near(chaos.populationA, .4392976148702576);
  near(chaos.populationB, .41285603076313887);
  near(chaos.output, .02644158410711872);
  const fractal = Discovery.evaluate('fractal-geometry', Stories.forSlug('fractal-geometry').parameters);
  near(fractal.output, 64 / 9);
  assert.equal(fractal.completedDepth, 3);
  assert.equal(fractal.segmentCount, 192);
  const waves = Discovery.evaluate('wave-interference', Stories.forSlug('wave-interference').parameters);
  assert.equal(waves.output, 0);
  assert.equal(waves.probeValue, 0);
  const probability = Discovery.evaluate('probability', Stories.forSlug('probability').parameters);
  assert.equal(probability.output, 3);
  near(probability.distribution.reduce((sum, value) => sum + value, 0), 1);
  const vector = Discovery.evaluate('vector-rotation', Stories.forSlug('vector-rotation').parameters);
  near(vector.x, 1);
  near(vector.y, Math.sqrt(3));
  near(Math.hypot(vector.x, vector.y), 2);
  const diagonal = Discovery.evaluate('pythagorean-theorem', Stories.forSlug('pythagorean-theorem').parameters);
  assert.equal(diagonal.aSquared, 9);
  assert.equal(diagonal.bSquared, 16);
  assert.equal(diagonal.cSquared, 25);
  assert.equal(diagonal.output, 5);
});

test('discrete iteration and fractional display claims are kept distinct', () => {
  const chaos = Stories.forSlug('chaos-theory'), fractal = Stories.forSlug('fractal-geometry');
  assert.match(chaos.assumptions.join(' '), /integer generations.*Fractional coordinates linearly interpolate/i);
  assert.match(chaos.assumptions.join(' '), /not a proof of chaos/i);
  assert.match(fractal.assumptions.join(' '), /geometric morphs, not fractional iterations/i);
  assert.match(fractal.assumptions.join(' '), /integer formula.*only at completed levels/i);
  const parameters = { ...fractal.parameters, depth: .5 }, result = Discovery.evaluate(fractal.slug, parameters);
  assert.notEqual(result.output, 3 * Math.pow(4 / 3, .5), 'Current morph length is not a fractional-power shortcut');
  assert.equal(result.completedDepth, 0);
  assert.equal(result.completedSegmentCount, 3);
  assert.equal(result.segmentCount, 12, 'The current morph draws next-level subdivisions, distinct from the last completed level');
});

test('chaos calculation substitutes actual adjacent iterates, including just-completed integer updates', () => {
  const story=Stories.forSlug('chaos-theory');
  assert.ok(story.calculation[0].template.includes('{{stepInputA}}'));
  assert.ok(story.calculation[0].template.includes('{{stepInputB}}'));
  assert.match(story.calculation[1].template,/\{\{rate\}\} × \{\{stepInputA\}\} × \(1 − \{\{stepInputA\}\}\)/);
  assert.match(story.calculation[1].template,/\{\{rate\}\} × \{\{stepInputB\}\} × \(1 − \{\{stepInputB\}\}\)/);
  assert.ok(story.calculation[2].template.includes('{{stepNextA}}')&&story.calculation[2].template.includes('{{stepNextB}}'));
  assert.ok(story.calculation[2].template.includes('{{stepGapAfter}}'));
  assert.doesNotMatch(story.calculation[1].template,/\{\{population[AB]\}\}/,'Interpolated display values never become discrete recurrence inputs');
  for(const generation of [0,.4,1,1.25,12,35.8,36]){
    const parameters={...story.parameters,generation,seed:.4,delta:.000002};
    const model=Discovery.evaluate(story.slug,parameters),values=Scenes.values(story.slug,parameters);
    const n=Math.max(0,Math.min(Math.ceil(generation)-1,35));
    assert.equal(values.iteration,n);assert.equal(values.nextIteration,n+1);
    near(values.stepInputA,model.orbitA[n]);near(values.stepInputB,model.orbitB[n]);
    near(values.stepNextA,parameters.rate*values.stepInputA*(1-values.stepInputA));
    near(values.stepNextB,parameters.rate*values.stepInputB*(1-values.stepInputB));
    near(values.stepGapAfter,Math.abs(values.stepNextA-values.stepNextB));
    near(values.iterationProgress,generation-n);
    near(values.populationA,values.stepInputA+(values.stepNextA-values.stepInputA)*values.iterationProgress);
    near(values.populationB,values.stepInputB+(values.stepNextB-values.stepInputB)*values.iterationProgress);
    for(const key of ['stepInputA','stepInputB','stepRemainingA','stepRemainingB','stepNextA','stepNextB','stepGapBefore','stepGapAfter'])assert.ok(values[key]>=0&&values[key]<=1,`${key} remains a bounded fraction`);
    if(Number.isInteger(generation)&&generation>0){near(values.populationA,values.stepNextA);near(values.output,values.stepGapAfter);}
  }
  const fraction=Scenes.values(story.slug,{...story.parameters,generation:.4});
  assert.notEqual(fraction.populationA,fraction.stepInputA);assert.notEqual(fraction.output,fraction.stepGapAfter);
  assert.match(story.steps[3].body,/current gap.*whole update.*linearly blends/);
});

test('chaos calculation keeps nearby starting inputs legible without changing the shared number cadence',()=>{
  const values=Scenes.values('chaos-theory',{...Stories.forSlug('chaos-theory').parameters,generation:0,seed:.35,delta:.000001});
  const reading=key=>Readable.format(values[key],{settled:true,precision:Stories.quantityFor('chaos-theory',key).precision});
  assert.notEqual(reading('stepInputA'),reading('stepInputB'));
  assert.notEqual(reading('stepNextA'),reading('stepNextB'));
  for(const key of ['stepInputA','stepInputB','stepNextA','stepNextB','stepGapAfter']){
    assert.equal(Stories.quantityFor('chaos-theory',key).precision,7);
    assert.doesNotMatch(reading(key),/Undefined|Unavailable|NaN/);
  }
  assert.equal(Stories.quantityFor('chaos-theory','iterationProgress').role,'input');
  assert.match(Stories.quantityFor('chaos-theory','stepGapAfter').description,/right endpoint/);
});

test('quantity descriptions distinguish paired coordinates, sampled wave heights and mean outcomes', () => {
  assert.notEqual(Stories.quantityFor('vector-rotation', 'x').label, Stories.quantityFor('vector-rotation', 'y').label);
  assert.match(Stories.quantityFor('vector-rotation', 'output').description, /both.*locate/i);
  assert.equal(Stories.quantityFor('wave-interference', 'probeValue').role, 'intermediate');
  assert.equal(Stories.quantityFor('wave-interference', 'output').role, 'output');
  assert.match(Stories.quantityFor('probability', 'expected').description, /fractional.*does not promise/i);
  assert.match(Stories.forSlug('probability').conclusion, /not a promise/i);
  assert.match(Stories.quantityFor('pythagorean-theorem', 'cSquared').description, /square metres/);
  assert.match(Stories.quantityFor('pythagorean-theorem', 'output').description, /metres/);
});

test('all story references resolve to authored source records', () => {
  const sourceIds = new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json', import.meta.url), 'utf8')).sources.map(source => source.id));
  for (const story of Stories.all()) {
    assert.ok(story.sourceRefs.length > 0);
    for (const reference of story.sourceRefs) assert.ok(sourceIds.has(reference), `Unknown story source ${reference}`);
  }
});

test('returned story and link collections cannot mutate authored content', () => {
  const before = JSON.stringify(Stories.all());
  for (const story of Stories.all()) {
    deeplyFrozen(story);
    deeplyFrozen(Stories.linksFor(story.slug));
    for (const key of templates(story).join(' ').matchAll(/\{\{(\w+)\}\}/g)) deeplyFrozen(Stories.quantityFor(story.slug, key[1]));
    assert.throws(() => { story.parameters[story.timeline.key] = -1; }, TypeError);
    assert.throws(() => { Stories.linksFor(story.slug).steps[0].focus = 'invalid'; }, TypeError);
  }
  const copy = Stories.all();
  copy.pop();
  assert.equal(Stories.all().length, 6);
  assert.equal(JSON.stringify(Stories.all()), before);
});
