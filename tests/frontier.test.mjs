import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const F = require('../src/frontier.js');
const slugs = ['integral-accumulation', 'quadratic-optimization', 'complex-multiplication', 'bayes-theorem', 'graph-theory', 'resonance'];
const near = (actual, expected, tolerance = 1e-11) => assert.ok(Math.abs(actual - expected) <= Math.max(1, Math.abs(expected)) * tolerance, `${actual} ≈ ${expected}`);
const attrs = (html, role) => [...html.matchAll(/<[^>]+>/g)].filter(([tag]) => tag.includes(`data-role="${role}"`)).map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w-]+)="([^"]*)"/g)].map(([, key, value]) => [key, value])));
const topology = html => [...html.matchAll(/<(\w+)(?:\s|>)/g)].map(([, tag]) => tag);
const extremes = slug => {
  const rules = F.controls(slug), cases = [];
  for (let mask = 0; mask < 2 ** rules.length; mask++) cases.push(Object.fromEntries(rules.map((rule, index) => [rule.key, mask & 2 ** index ? rule.max : rule.min])));
  return cases;
};

test('six frontier models load offline, share metadata and evaluate explicit defaults', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/frontier.js', import.meta.url), 'utf8'), context);
  for (const slug of slugs) {
    assert.equal(F.has(slug), true);
    const result = F.evaluate(slug, {}), metadata = F.specs(slug);
    assert.equal(result.status, 'valid');
    assert.equal(result.unit, metadata.unit);
    near(context.AtlasFrontier.evaluate(slug, {}).output, result.output);
    assert.ok(metadata.expression && metadata.insight && metadata.primaryLabel);
    assert.equal(metadata.rendererId, slug + '-visual-model');
    const html = F.render(slug, {});
    assert.match(html, /viewBox="0 0 760 420"/);
    const caption = html.match(/<figcaption[^>]*>(.*?)<\/figcaption>/s)[1], description = html.match(/<desc[^>]*>(.*?)<\/desc>/s)[1];
    assert.ok(caption.length < 200, slug + ' keeps a concise visible caption');
    assert.ok(description.length > caption.length * 2, slug + ' retains the full accessible description');
  }
  near(F.evaluate('integral-accumulation', {}).output, 16);
  near(F.evaluate('quadratic-optimization', {}).output, 25);
  near(F.evaluate('complex-multiplication', {}).output, 1);
  near(F.evaluate('bayes-theorem', {}).output, .5);
  near(F.evaluate('graph-theory', {}).output, 8);
  near(F.evaluate('resonance', {}).output, 2.5);
});

test('integration reports the exact zero-based triangle area and renders its scaled geometry', () => {
  for (const time of [0, .01, 1, 4, 6]) for (const rate of [.5, 2, 4]) {
    const result = F.evaluate('integral-accumulation', { time, rate }), html = F.render('integral-accumulation', { time, rate });
    near(result.velocity, rate * time);
    near(result.output, .5 * time * result.velocity);
    near(result.triangleArea, result.distance);
    const area = attrs(html, 'accumulated-area')[0], endpoint = attrs(html, 'velocity-endpoint')[0];
    near(Number(area['data-area']), result.distance);
    near(Number(endpoint.cx), 80 + time * 55);
    near(Number(endpoint.cy), 290 - result.velocity * 8);
    const coords = area.d.match(/[-\d.]+/g).map(Number);
    const twiceArea = Math.abs(coords[0] * (coords[3] - coords[5]) + coords[2] * (coords[5] - coords[1]) + coords[4] * (coords[1] - coords[3]));
    near(twiceArea / 2, result.distance * 55 * 8);
    const bracket = attrs(html, 'distance-bracket')[0], cart = attrs(html, 'distance-cart')[0];
    near(Number(bracket.x2) - Number(bracket.x1), result.distance * 3, 1e-5);
    near(Number(cart['data-distance']), result.distance);
    assert.equal(cart.transform, `translate(${Number((475 + result.distance * 3).toFixed(5))} 0)`);
  }
  assert.match(F.render('integral-accumulation', {}), /velocity and time have different units/);
});

test('fence optimization preserves perimeter and matches the fixed scale rectangle area', () => {
  for (const perimeter of [20, 24, 30]) for (const width of [.5, 2.5, 5, 7.5, 9.5]) {
    const result = F.evaluate('quadratic-optimization', { perimeter, width });
    assert.ok(result.otherSide > 0);
    near(2 * (width + result.otherSide), perimeter);
    near(result.output, width * result.otherSide);
    near(result.maxArea, (perimeter / 4) ** 2);
    assert.ok(result.output <= result.maxArea + 1e-12);
    const rect = attrs(F.render('quadratic-optimization', { perimeter, width }), 'garden-area')[0];
    near(Number(rect.width) * Number(rect.height), result.area * 144, 1e-6);
  }
  for (const perimeter of [20, 24, 30]) {
    const optimal = F.evaluate('quadratic-optimization', { perimeter, width: perimeter / 4 });
    near(optimal.area, optimal.maxArea);
    near(optimal.otherSide, optimal.optimumWidth);
  }
});

test('complex multiplication preserves signed components, the zero multiplier and product modulus', () => {
  assert.equal(F.specs('complex-multiplication').axis, 'imag');
  for (const real of [-2, -1, 0, 1, 2]) for (const imag of [-2, -1, 0, 1, 2]) {
    const result = F.evaluate('complex-multiplication', { real, imag });
    near(result.realPart, 2 * real - imag);
    near(result.imagPart, real + 2 * imag);
    near(result.modulus, Math.sqrt(5) * Math.hypot(real, imag));
    const endpoint = attrs(F.render('complex-multiplication', { real, imag }), 'complex-product-endpoint')[0];
    near(Number(endpoint.cx), 235 + result.realPart * 17);
    near(Number(endpoint.cy), 202 - result.imagPart * 17);
  }
  const zero = F.evaluate('complex-multiplication', { real: 0, imag: 0 });
  assert.equal(zero.realPart, 0); assert.equal(zero.imagPart, 0); assert.equal(zero.modulus, 0);
  assert.match(F.render('complex-multiplication', {}), /angle is undefined/);
});

test('Bayes proportions normalize against all flags and expected bars share one fixed scale', () => {
  for (const parameters of [...extremes('bayes-theorem'), { prior: .1, sensitivity: .9, falsePositive: .1 }]) {
    const result = F.evaluate('bayes-theorem', parameters), html = F.render('bayes-theorem', parameters);
    near(result.truePositive, parameters.prior * parameters.sensitivity);
    near(result.falseAlarm, (1 - parameters.prior) * parameters.falsePositive);
    near(result.positiveRate, result.truePositive + result.falseAlarm);
    near(result.posterior * result.positiveRate, result.truePositive);
    assert.ok(result.posterior > 0 && result.posterior < 1);
    near(Number(attrs(html, 'true-positive-bar')[0].width), result.truePositive * 610, 1e-5);
    near(Number(attrs(html, 'false-alarm-bar')[0].width), result.falseAlarm * 610, 1e-5);
    near(Number(attrs(html, 'posterior-proportion')[0].width), result.posterior * 610, 1e-5);
  }
  assert.match(F.render('bayes-theorem', {}), /fractional expected counts/);
  assert.match(F.render('bayes-theorem', {}), /separate 0–100% probability scale/);
});

test('shortest path handles route changes, exact ties and dominated alternatives honestly', () => {
  for (const bridge of [1, 2.99, 3, 3.01, 4, 12]) {
    const result = F.evaluate('graph-theory', { bridge }), html = F.render('graph-theory', { bridge });
    near(result.output, Math.min(10, 8, 5 + bridge, 13 + bridge));
    assert.equal(result.route, bridge < 3 ? 'A → B → C → D' : 'A → C → D');
    assert.equal(result.tied, bridge === 3);
    assert.equal(result.tieCount, bridge === 3 ? 2 : 1);
    assert.equal(Number(attrs(html, 'tied-route')[0].opacity), bridge === 3 ? 1 : 0);
    near(Number(attrs(html, 'variable-bridge')[0]['data-value']), bridge);
  }
  near(F.evaluate('graph-theory', { bridge: 3 - 1e-9 }).output, F.evaluate('graph-theory', { bridge: 3 + 1e-9 }).output, 1e-8);
  const html = F.render('graph-theory', {});
  assert.match(html, /line lengths show connectivity, not time/);
  assert.match(html, /switches discretely at the tie/);
});

test('resonance stays finite with positive damping and the plotted endpoint shares the response arithmetic', () => {
  for (const frequency of [.2, .99, 1, 1.5, 2]) for (const damping of [.1, .2, .5]) {
    const result = F.evaluate('resonance', { frequency, damping });
    near(result.detuning, 1 - frequency ** 2);
    near(result.dampingTerm, 2 * damping * frequency);
    near(result.denominator, Math.sqrt(result.detuning ** 2 + result.dampingTerm ** 2));
    near(result.output * result.denominator, 1);
    assert.ok(result.output > 0 && result.output < 5.1);
    const html = F.render('resonance', { frequency, damping }), endpoint = attrs(html, 'response-endpoint')[0], envelope = attrs(html, 'amplitude-envelope')[0];
    near(Number(endpoint.cx), 70 + (frequency - .2) / 1.8 * 390, 1e-5);
    near(Number(endpoint.cy), 296 - result.output * 37, 1e-5);
    near(Number(envelope.width), result.output * 28, 1e-5);
  }
  near(F.evaluate('resonance', { frequency: 1, damping: .1 }).output, 5);
  assert.match(F.render('resonance', {}), /not an instantaneous oscillation or a time simulation/);
});

test('model inputs reject unknown fields, invalid structures, nonnumeric and unbounded values', () => {
  for (const slug of slugs) {
    for (const parameters of [null, [], '', 2, { evil: '<script>' }]) assert.equal(F.evaluate(slug, parameters).status, 'invalid_parameters');
    for (const { key, min, max } of F.controls(slug)) for (const value of [NaN, Infinity, -Infinity, '1', min - .001, max + .001]) {
      const result = F.evaluate(slug, { [key]: value });
      assert.equal(result.status, 'invalid_parameters', `${slug}.${key}=${value}`);
      assert.equal(result.output, null);
    }
    assert.equal(F.curveValue(slug, {}, Infinity), null);
    const axis = F.specs(slug).axis, rule = F.controls(slug).find(c => c.key === axis);
    assert.equal(F.curveValue(slug, {}, rule.min - 1), null);
    assert.equal(F.curveValue(slug, {}, rule.max + 1), null);
    near(F.curveValue(slug, {}, F.defaults(slug)[axis]), F.evaluate(slug, {}).output);
  }
  for (const slug of ['unknown', 'constructor', '__proto__']) {
    assert.equal(F.has(slug), false);
    assert.equal(F.evaluate(slug, {}).status, 'invalid_parameters');
    assert.equal(F.curveValue(slug, {}, 1), null);
    assert.throws(() => F.defaults(slug), RangeError);
  }
});

test('metadata, controls, parameters and model state remain independent across calls', () => {
  for (const slug of slugs) {
    const expected = F.defaults(slug), frozen = Object.freeze({ ...expected }), result = F.evaluate(slug, frozen);
    assert.deepEqual(frozen, expected);
    const metadata = F.specs(slug); metadata.title = 'Changed';
    const controls = F.controls(slug); controls[0].min = -100;
    result.parameters[controls[0].key] = -100;
    assert.notEqual(F.specs(slug).title, 'Changed');
    assert.notEqual(F.controls(slug)[0].min, -100);
    assert.deepEqual(F.defaults(slug), expected);
  }
});

test('all extreme scenes stay finite, safe, namespaced and retain SVG topology while values move', () => {
  for (const slug of slugs) {
    const initial = F.render(slug, {}, { id: 'one' }), expectedTopology = topology(initial);
    for (const parameters of extremes(slug)) {
      const html = F.render(slug, parameters, { id: 'one' });
      for (const [tag] of html.matchAll(/<[^>]+>/g)) assert.doesNotMatch(tag, /(?:NaN|[+-]?Infinity)/);
      assert.doesNotMatch(html, /(?:<script|onload=|javascript:)/i);
      assert.deepEqual(topology(html), expectedTopology, slug);
      for (const role of ['input', 'intermediate', 'output', 'reference']) assert.match(html, new RegExp(`data-story-part="[^"]*${role}`));
    }
    const a = F.render(slug, {}, { id: 'first' }), b = F.render(slug, {}, { id: 'second' });
    const ids = html => [...html.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.ok(ids(a).every(id => !ids(b).includes(id)));
    const slider = a.match(/<g[^>]+role="slider"[^>]+>/)[0], axis = F.specs(slug).axis;
    assert.match(slider, new RegExp(`data-drag-param="${axis}"`));
    for (const attr of ['tabindex="0"', 'data-drag-x0="90"', 'data-drag-x1="680"', 'aria-valuenow=', 'aria-valuetext=', 'touch-action:none']) assert.ok(slider.includes(attr));
    assert.match(F.render(slug, {}, { baseline: F.defaults(slug) }), /Pinned comparison:/);
    assert.doesNotMatch(F.render(slug, {}, { baseline: { unknown: 1 } }), /Pinned comparison:/);
  }
});
