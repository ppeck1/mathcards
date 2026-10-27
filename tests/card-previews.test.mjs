import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Previews = require('../src/card-previews.js');
const Models = require('../src/models.js');
const Modules = require('../src/playground-modules.js');
const Discovery = require('../src/discovery.js');
const attrs = tag => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value]));
const quantities = html => [...html.matchAll(/<g\s+data-preview-quantity="([^"]+)"\s+data-value="([^"]*)"[^>]*>([\s\S]*?)<\/g>/g)].map(([, key, value, body]) => ({ key, value: Number(value), body }));
const find = (html, key) => quantities(html).find(item => item.key === key);
const near = (a, b, tolerance = 1e-8) => assert.ok(Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(b)), `${a} ≈ ${b}`);

test('every installed concept has a dedicated, accessible, finite and noninteractive card illustration', () => {
  assert.deepEqual(Previews.list(), Modules.list().map(module => module.id));
  const allIds = new Set();
  for (const slug of Previews.list()) {
    const original = Models.defaults(slug), result = Models.evaluate(slug, original), html = Previews.render(slug, { id: 'tile-' + slug });
    assert.match(html, /^<svg\b/);
    assert.match(html, /viewBox="0 0 360 200"/);
    assert.match(html, /role="img"/);
    assert.ok(Previews.description(slug).length > 70, slug);
    assert.doesNotMatch(html, /NaN|Infinity/);
    assert.doesNotMatch(html, /data-drag-|tabindex=|role="(?:slider|button)"|<button|<input|<select|<script|on(?:click|load|error)=/i);
    assert.equal(attrs(html.slice(0, html.indexOf('>') + 1))['data-preview-output'], String(result.output), slug);
    assert.ok(find(html, 'output'), slug + ' identifies the actual default model result');
    near(find(html, 'output').value, result.output);
    for (const tag of html.matchAll(/<(?:rect|circle)\s[^>]+>/g)) {
      const a = attrs(tag[0]);
      for (const key of ['x', 'y', 'width', 'height', 'cx', 'cy', 'r']) if (key in a) assert.ok(Number.isFinite(Number(a[key])), `${slug}.${key}`);
      for (const key of ['width', 'height', 'r']) if (key in a) assert.ok(Number(a[key]) >= 0, `${slug}.${key}`);
    }
    const localIds = [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(localIds).size, localIds.length, slug + ' unique local IDs');
    for (const id of localIds) { assert.equal(allIds.has(id), false, id); allIds.add(id); }
    for (const [, id] of html.matchAll(/url\(#([^)]+)\)/g)) assert.ok(localIds.includes(id), id + ' resolves locally');
    const aria = attrs(html.slice(0, html.indexOf('>') + 1))['aria-labelledby'].split(' ');
    for (const id of aria) assert.ok(localIds.includes(id));
    assert.deepEqual(Models.defaults(slug), original, slug + ' preview does not mutate defaults');
  }
});

test('the card library loads offline with the existing model helpers and escapes authored titles and IDs', () => {
  const context = vm.createContext({ AtlasModels: Models, AtlasDiscovery: Discovery });
  vm.runInContext(fs.readFileSync(new URL('../src/card-previews.js', import.meta.url), 'utf8'), context);
  assert.equal(context.AtlasCardPreviews.list().length, Modules.list().length);
  for (const slug of Previews.list()) assert.equal(context.AtlasCardPreviews.render(slug), Previews.render(slug));
  const html = Previews.render('function', { id: '"/><script>alert(1)</script>', title: '<img src=x onerror=alert(1)>' });
  assert.doesNotMatch(html, /<script|<img/);
  assert.match(html, /&lt;img src=x onerror=alert\(1\)&gt;/);
  assert.ok(Object.isFrozen(Previews));
  const list = Previews.list(); list.pop(); assert.equal(Previews.list().length, Modules.list().length);
  for (const slug of ['constructor', '__proto__', 'unknown', null, {}]) {
    assert.equal(Previews.has(slug), false); assert.equal(Previews.render(slug), ''); assert.equal(Previews.description(slug), '');
  }
});

test('composition illustrates the current order and scales square areas, not side lengths, by magnitude', () => {
  const p = Models.defaults('function-composition'), r = Models.evaluate('function-composition', p), html = Previews.render('function-composition');
  const entries = ['x', 'intermediate', 'output'].map(key => find(html, key));
  assert.deepEqual(entries.map(entry => entry.value), [p.x, r.intermediate, r.output]);
  const squares = entries.map(entry => attrs(entry.body.match(/<rect\s[^>]+>/)[0]));
  const scale = Number(squares[0]['data-area-scale']);
  for (let i = 0; i < entries.length; i++) {
    near(Number(squares[i].width), Number(squares[i].height));
    near(Number(squares[i].width) ** 2, entries[i].value * scale, 1e-6);
  }
  assert.match(Previews.description('function-composition'), /g then f/);
  assert.match(Previews.description('function-composition'), /Square areas, not side lengths/);
});

test('the logarithm illustration reconstructs the argument through actual default-base powers', () => {
  const p = Models.defaults('real-logarithm'), r = Models.evaluate('real-logarithm', p), html = Previews.render('real-logarithm');
  const powers = quantities(html).filter(item => item.key.startsWith('power-'));
  assert.equal(powers.length, 4);
  for (const entry of powers) near(entry.value, p.base ** Number(entry.key.slice(6)));
  near(powers.at(-1).value, p.argument);
  near(find(html, 'output').value, r.output);
  assert.match(Previews.description('real-logarithm'), /symbolic, not a linear argument axis/);
});

test('the derivative preview keeps finite secant and analytic tangent separate at the same point', () => {
  const p = Models.defaults('derivative'), r = Models.evaluate('derivative', p), html = Previews.render('derivative');
  near(find(html, 'output').value, r.output);
  near(find(html, 'analytic').value, r.analytic);
  assert.notEqual(find(html, 'output').value, find(html, 'analytic').value);
  const analytic = find(html, 'analytic').body.match(/\bd="([^"]+)"/)[1], secant = find(html, 'output').body.match(/\bd="([^"]+)"/)[1];
  assert.notEqual(analytic, secant);
  assert.match(find(html, 'analytic').body, /stroke-dasharray/);
  assert.doesNotMatch(find(html, 'output').body, /stroke-dasharray/);
  assert.match(Previews.description('derivative'), /horizontal scale is magnified/);
});

test('power areas and proportional recipe fills retain their actual model ratios', () => {
  const html = Previews.render('exponentiation'), r = Models.evaluate('exponentiation');
  const a = attrs(find(html, 'reference').body.match(/<rect\s[^>]+>/)[0]), b = attrs(find(html, 'output').body.match(/<rect\s[^>]+>/)[0]);
  near(Number(b.width) * Number(b.height) / (Number(a.width) * Number(a.height)), r.output, 1e-6);
  const recipe = Previews.render('ratio-scale'), p = Models.defaults('ratio-scale'), recipeResult = Models.evaluate('ratio-scale', p);
  const fill = key => attrs([...find(recipe, key).body.matchAll(/<rect\s[^>]+>/g)][1][0]);
  near(Number(fill('output').height) / Number(fill('amount').height), recipeResult.factor);
});

test('signed areas, binomial bars and finite fractals depict the quantities named by their captions', () => {
  const signed = Previews.render('signed-accumulation'), r = Models.evaluate('signed-accumulation');
  near(find(signed, 'positiveArea').value, r.positiveArea);
  near(find(signed, 'negativeArea').value, r.negativeArea);
  assert.match(Previews.description('signed-accumulation'), /Net displacement is 0 metres while total distance is 4 metres/);
  const distribution = quantities(Previews.render('probability')).filter(item => item.key.startsWith('probability-'));
  assert.equal(distribution.length, 7);
  near(distribution.reduce((sum, item) => sum + item.value, 0), 1);
  for (const item of distribution) {
    const bar = attrs(item.body.match(/<rect\s[^>]+>/)[0]); near(Number(bar.height), item.value * 320);
  }
  const fractal = Previews.render('fractal-geometry'), p = Models.defaults('fractal-geometry'), expected = Models.evaluate('fractal-geometry', p);
  const outline = find(fractal, 'output').body.match(/\bd="([^"]+)"/)[1];
  assert.equal([...outline.matchAll(/L/g)].length, expected.segmentCount);
  assert.match(Previews.description('fractal-geometry'), /finite construction, not an infinite completed fractal/);
  assert.match(Previews.description('chaos-theory'), /discrete integer generations/);
});
