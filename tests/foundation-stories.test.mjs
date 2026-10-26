import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Stories = require('../src/foundation-stories.js');
const Foundations = require('../src/foundations.js');
const Scenes = require('../src/story-scenes.js');
const LifeStory = require('../src/life-story.js');
const slugs = ['function', 'exponentiation', 'limit', 'signed-accumulation'];
const roles = ['reference', 'input', 'intermediate', 'output'];
const templates = story => [...story.steps.flatMap(step => [step.body, step.formula]), ...story.calculation.map(stage => stage.template)];
const tokens = story => new Set(templates(story).flatMap(template => [...template.matchAll(/\{\{([A-Za-z][A-Za-z0-9_]*)\}\}/g)].map(match => match[1])));
const near = (actual, expected) => assert.ok(Math.abs(actual - expected) <= 1e-11 * Math.max(1, Math.abs(expected)), `${actual} ≈ ${expected}`);
const at = (story, progress) => ({ ...story.parameters, [story.timeline.key]: progress === 1 ? story.timeline.to : story.timeline.from + (story.timeline.to - story.timeline.from) * progress });
function deeplyFrozen(value) {
  if (!value || typeof value !== 'object') return;
  assert.ok(Object.isFrozen(value), 'Story records and their nested data are immutable');
  Object.values(value).forEach(deeplyFrozen);
}

test('four foundation narratives load offline as pure, immutable, independently selectable data', () => {
  const browser = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/foundation-stories.js', import.meta.url), 'utf8'), browser);
  assert.equal(browser.AtlasFoundationStories.all().length, 4);
  assert.deepEqual(Stories.all().map(story => story.slug), slugs);
  assert.equal(new Set(Stories.all().map(story => story.id)).size, 4);
  for (const story of Stories.all()) {
    deeplyFrozen(story);
    deeplyFrozen(Stories.linksFor(story.slug));
    assert.equal(Stories.forSlug(story.slug), story);
    assert.equal(Stories.find(story.id), story);
    for (const key of ['title', 'eyebrow', 'summary', 'context', 'question', 'conclusion']) assert.ok(story[key].length > 10, `${story.slug}.${key}`);
    assert.ok(story.scene && story.unit && story.assumptions.length >= 3);
  }
  const independentList = Stories.all();
  independentList.pop();
  assert.equal(Stories.all().length, 4);
  for (const unknown of ['constructor', '__proto__', 'toString', 'unknown', null, undefined, {}]) {
    assert.equal(Stories.forSlug(unknown), null);
    assert.equal(Stories.find(unknown), null);
    assert.equal(Stories.linksFor(unknown), null);
    assert.equal(Stories.quantityFor(unknown, 'output'), null);
  }
  for (const slug of slugs) for (const unknown of ['constructor', '__proto__', 'toString', 'unknown']) assert.equal(Stories.quantityFor(slug, unknown), null);
});

test('each story owns one bounded smooth path ending at its authored complete model state', () => {
  for (const story of Stories.all()) {
    assert.deepEqual(Object.keys(story.parameters).sort(), Object.keys(Foundations.defaults(story.slug)).sort());
    assert.deepEqual(at(story, 1), story.parameters);
    const variable = story.variables.find(variable => variable.key === story.timeline.key);
    assert.ok(variable.min < variable.max && variable.step > 0);
    assert.ok(story.timeline.from >= variable.min && story.timeline.from <= variable.max);
    assert.ok(story.timeline.to >= variable.min && story.timeline.to <= variable.max);
    assert.ok(story.timeline.durationMs >= 10000 && story.timeline.durationMs <= 14000);
    for (let frame = 0; frame <= 120; frame++) {
      const parameters = at(story, frame / 120), result = Foundations.evaluate(story.slug, parameters);
      assert.equal(result.valid, true, `${story.slug}, frame ${frame}`);
      assert.ok(Number.isFinite(result.output));
      for (const [key, value] of Object.entries(story.parameters)) if (key !== story.timeline.key) assert.equal(parameters[key], value);
    }
    for (const endpoint of [variable.min, variable.max]) assert.equal(Foundations.evaluate(story.slug, { ...story.parameters, [variable.key]: endpoint }).valid, true);
  }
  assert.equal(Stories.forSlug('limit').parameters.mode, 'removable');
  assert.equal(Stories.forSlug('signed-accumulation').parameters.partitions, '8');
});

test('the story, substituted calculation and scene all carry the same evaluated quantities', () => {
  for (const story of Stories.all()) {
    for (const key of tokens(story)) {
      const quantity = Stories.quantityFor(story.slug, key);
      assert.ok(quantity, `${story.slug}.${key} needs a readable meaning`);
      deeplyFrozen(quantity);
      assert.ok(quantity.label.length > 4 && quantity.description.length > 35 && quantity.unit);
      assert.ok(roles.includes(quantity.role));
    }
    for (const progress of [0, .1, .25, .49, .5, .75, .9, 1]) {
      const parameters = at(story, progress), result = Foundations.evaluate(story.slug, parameters), values = Scenes.values(story.slug, parameters);
      for (const key of tokens(story)) assert.ok(Number.isFinite(values[key]), `${story.slug}.${key} at ${progress}`);
      for (const [key, value] of Object.entries(result)) if (typeof value === 'number' && tokens(story).has(key)) near(values[key], value);
      for (const template of templates(story)) assert.doesNotMatch(LifeStory.formatTemplate(template, values), /\{\{|Unavailable|NaN/);
      near(Scenes.primaryValue(story.slug, parameters), result.output);
    }
  }
});

test('four linked story steps and three calculation phases reuse the host visual roles', () => {
  for (const story of Stories.all()) {
    const variable = story.variables[0], link = Stories.linksFor(story.slug);
    assert.equal(story.steps.length, 4);
    assert.deepEqual(story.steps.map(step => step.focus), roles);
    assert.deepEqual(story.calculation.map(stage => stage.role), ['input', 'intermediate', 'output']);
    story.steps.forEach((step, index) => {
      assert.equal(step.from, index / 4);
      assert.equal(step.to, (index + 1) / 4);
      assert.ok(step.body.includes(`{{${story.timeline.key}}}`), `${story.slug}.${step.id} keeps the driver in its text`);
      assert.ok(step.focusLabel.length > 10 && step.focusDescription.length > 35);
    });
    assert.equal(link.variableKey, variable.key);
    assert.equal(link.variableLabel, variable.label);
    assert.equal(link.symbol, variable.symbol);
    assert.equal(link.unit, variable.unit);
    assert.ok(link.effectLabel.length > 40);
    assert.deepEqual(link.steps, story.steps.map(step => ({ focus: step.focus, label: step.focusLabel, description: step.focusDescription })));
    assert.equal(Stories.quantityFor(story.slug, variable.key).role, 'input');
    assert.ok(story.calculation[0].template.includes(`{{${variable.key}}}`));
    for (const stage of story.calculation) assert.ok(stage.label.length > 4 && stage.description.length > 35);
    const svg = Foundations.render(story.slug, story.parameters, { view: 'geometry', id: `story-contract-${story.slug}` });
    for (const role of roles) assert.ok(svg.includes(`data-story-part="${role}"`), `${story.slug} has a visual ${role} cue`);
  }
});

test('the calibrated sensor story answers in output units and keeps the gained contribution distinct', () => {
  const story = Stories.forSlug('function'), result = Foundations.evaluate(story.slug, story.parameters);
  near(result.scaled, 4);
  near(result.output, 5);
  assert.equal(Stories.quantityFor('function', 'x').unit, 'sensor units');
  assert.equal(Stories.quantityFor('function', 'a').unit, 'display units per sensor unit');
  assert.equal(Stories.quantityFor('function', 'scaled').unit, 'display units');
  assert.equal(story.unit, 'display units');
  assert.match(story.conclusion, /2 × 2 = 4.*offset 1 gives 5/);
  assert.match(story.assumptions.join(' '), /affine.*Saturation, noise and drift/);
});

test('the poster story maps the power to area, including reciprocal and noninteger sizes', () => {
  const story = Stories.forSlug('exponentiation'), result = Foundations.evaluate(story.slug, story.parameters);
  near(result.output, 8);
  near(result.reciprocal, 1 / 8);
  near(Foundations.evaluate(story.slug, { ...story.parameters, exponent: .5 }).output, Math.sqrt(2));
  assert.match(story.conclusion, /8 reference panel areas/);
  assert.match(story.assumptions.join(' '), /Noninteger exponents.*continuously chosen custom areas/);
  assert.match(story.assumptions.join(' '), /square’s area represents the power.*side ratio.*square root/);
  const svg = Foundations.render(story.slug, story.parameters, { view: 'geometry' });
  const square = svg.match(/<rect[^>]*data-role="power-square"[^>]*>/)?.[0];
  assert.ok(square);
  const attr = name => Number(square.match(new RegExp(` ${name}="([^"]+)"`))[1]);
  near(attr('data-value'), result.output);
  assert.ok(Math.abs(attr('width') * attr('height') / attr('data-area-scale') - result.output) < 1e-5);
  assert.equal(Foundations.evaluate(story.slug, { ...story.parameters, base: 0 }).valid, false);
  assert.match(story.assumptions.join(' '), /Zero and negative bases.*outside/);
});

test('the limit story separates finite probes, algebraic justification and a missing point', () => {
  const story = Stories.forSlug('limit'), result = Foundations.evaluate(story.slug, story.parameters);
  near(result.leftX, .75); near(result.rightX, 1.25);
  near(result.leftValue, 1.75); near(result.rightValue, 2.25);
  near(result.output, 2);
  assert.equal(result.functionAtPoint, null);
  assert.equal(result.limitExists, true);
  assert.ok(!tokens(story).has('functionAtPoint'), 'Undefined at the point is explained in words instead of formatted as a numeric value');
  assert.match(story.assumptions.join(' '), /Finite probes do not prove a limit/);
  assert.match(story.assumptions.join(' '), /\|f\(x\) − 2a\| = \|x − a\|/);
  assert.match(story.conclusion, /original function remains undefined/);
  const jump = Foundations.evaluate('limit', { ...story.parameters, mode: 'jump' });
  assert.equal(jump.limitExists, false);
  assert.equal(jump.output, null);
  near(jump.functionAtPoint, 1);
  assert.match(story.assumptions.join(' '), /jump mode.*no two-sided limit.*point value is defined/);
});

test('the cart story distinguishes signed displacement, distance and finite endpoint rectangles', () => {
  const story = Stories.forSlug('signed-accumulation'), result = Foundations.evaluate(story.slug, story.parameters);
  near(result.output, 0); near(result.distance, 4);
  near(result.positiveArea, 2); near(result.negativeArea, 2);
  near(result.leftSum, 1); near(result.rightSum, -1); near(result.midpointSum, 0);
  assert.ok(story.steps[2].body.includes('{{leftSum}}'));
  assert.match(story.steps[2].body, /left-endpoint rectangles.*finite estimate/);
  assert.match(story.assumptions.join(' '), /midpoint rule is exact.*affine velocity/);
  assert.match(story.conclusion, /Net displacement is 2 − 2 = 0 m.*distance traveled is 2 \+ 2 = 4 m/);
  for (const key of ['positiveArea', 'negativeArea', 'output', 'distance', 'leftSum', 'rightSum', 'midpointSum']) assert.equal(Stories.quantityFor(story.slug, key).unit, 'm');
  assert.equal(Stories.quantityFor(story.slug, 'rate').unit, 'm/s²');
  assert.equal(Stories.quantityFor(story.slug, 'velocity').unit, 'm/s');
  assert.equal(Stories.quantityFor(story.slug, 'step').unit, 's');
  const rectangles = Foundations.render(story.slug, story.parameters).match(/data-role="left-rectangle"/g);
  assert.equal(rectangles.length, result.partitionCount);
  const refined = Foundations.evaluate(story.slug, { ...story.parameters, partitions: '32' });
  near(refined.output, result.output);
  near(refined.distance, result.distance);
  assert.ok(Math.abs(refined.leftSum) < Math.abs(result.leftSum));
});

test('all foundation story references resolve to authored source records', () => {
  const sourceIds = new Set(JSON.parse(fs.readFileSync(new URL('../content/sources.json', import.meta.url), 'utf8')).sources.map(source => source.id));
  for (const story of Stories.all()) {
    assert.ok(story.sourceRefs.length > 0);
    for (const reference of story.sourceRefs) assert.ok(sourceIds.has(reference), `Unknown story source ${reference}`);
  }
});
