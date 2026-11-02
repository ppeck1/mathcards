import test from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const Ports = require('../src/module-ports.js');
const Modules = require('../src/playground-modules.js');
const Links = require('../src/workspace-links.js');
const find = (slug, direction, key) =>
  Ports.forModule(slug).find(port => port.direction === direction && port.key === key);
const check = (source, sourcePort, target, targetPort, sourceParameters = {}) => {
  const from = Modules.get(source),
    to = Modules.get(target);
  return Links.check({
    sourceModule: from,
    sourceParameters: { ...from.defaults(), ...sourceParameters },
    sourcePortId: sourcePort,
    targetModule: to,
    targetParameters: to.defaults(),
    targetPortId: targetPort
  });
};

test('equal numbers and shared names do not conflate activities, probabilities, decisions or collection codes', () => {
  for (const [source, sourcePort, target, targetPort] of [
    ['artificial-neuron', 'output:output', 'binomial-distribution', 'input:chance'],
    ['partial-order', 'output:output', 'relative-entropy', 'input:forecast'],
    ['hypothesis-test', 'output:output', 'confidence-interval', 'input:trueChance'],
    ['confidence-interval', 'output:coverage', 'relative-entropy', 'input:actual'],
    ['meet-join', 'output:resultMask', 'binomial-distribution', 'input:trials'],
    ['hebbian-learning', 'input:rate', 'continuous-flow', 'input:rate'],
    ['poisson-distribution', 'input:rate', 'hebbian-learning', 'input:rate'],
    ['heat-balance', 'input:heat', 'gibbs-free-energy', 'input:enthalpy']
  ]) {
    const result = check(source, sourcePort, target, targetPort);
    assert.equal(result.valid, false, source + ' to ' + target);
    assert.equal(result.code, 'type_mismatch', source + ' to ' + target);
    assert.equal(result.parameters, null);
  }
});

test('explicit neural activity and weight links retain their different mathematical roles', () => {
  const activated = check('artificial-neuron', 'output:output', 'hebbian-learning', 'input:pre');
  assert.equal(activated.valid, true, activated.reason);
  assert.equal(activated.value, 1 / (1 + Math.exp(-1)));
  assert.equal(activated.parameters.pre, activated.value);
  assert.equal(activated.parameters.post, 0.5);
  assert.equal(
    Modules.get('hebbian-learning').defaults().pre,
    0.5,
    'link preflight cannot mutate another instance'
  );
  const weight = check('hebbian-learning', 'output:output', 'artificial-neuron', 'input:weight');
  assert.equal(weight.valid, true, weight.reason);
  assert.equal(weight.parameters.weight, 0.225);
  assert.notEqual(
    find('hebbian-learning', 'output', 'change').type,
    find('artificial-neuron', 'input', 'weight').type
  );
});

test('physical entropy and absolute temperatures share explicit units while information entropy stays separate', () => {
  const entropy = check('heat-balance', 'output:output', 'gibbs-free-energy', 'input:entropy');
  assert.equal(entropy.valid, true, entropy.reason);
  assert.equal(find('heat-balance', 'output', 'output').unit, 'J/K');
  assert.equal(find('entropy', 'output', 'output').unit, 'bit');
  assert.notEqual(
    find('heat-balance', 'output', 'output').type,
    find('entropy', 'output', 'output').type
  );
  const temperature = check('heat-balance', 'output:hot', 'ideal-gas', 'input:temperature');
  assert.equal(temperature.valid, true, temperature.reason);
  assert.equal(temperature.parameters.temperature, 375);
  assert.equal(temperature.parameters.volume, 20);
  assert.equal(
    check('entropy', 'output:output', 'gibbs-free-energy', 'input:entropy').valid,
    false
  );
});

test('undefined branches retain their declared ports and never become a fabricated finite reading', () => {
  const stable = find('fold-bifurcation', 'output', 'stable');
  const result = check('fold-bifurcation', 'output:stable', 'continuous-flow', 'input:initial', {
    mu: -1
  });
  assert.equal(result.valid, false);
  assert.equal(result.code, 'invalid_source_value');
  assert.equal(result.value, null);
  assert.equal(result.parameters, null);
  assert.equal(find('fold-bifurcation', 'output', 'stable'), stable);
  const divergence = Modules.get('relative-entropy').evaluate({ actual: 1, forecast: 0 });
  assert.equal(divergence.output, null);
  assert.equal(divergence.status, 'infinite_divergence');
  assert.ok(find('relative-entropy', 'output', 'output'));
  const correlation = Modules.get('correlation').evaluate({ trend: 0, scatter: 0 });
  assert.equal(correlation.output, null);
  assert.ok(find('correlation', 'output', 'output'));
});

test('collection codes may link explicitly while selector choices remain categorical metadata', () => {
  const result = check('meet-join', 'output:resultMask', 'partial-order', 'input:a');
  assert.equal(result.valid, true, result.reason);
  assert.equal(result.parameters.a, 1);
  assert.equal(
    Ports.forModule('meet-join').some(port => port.key === 'operation'),
    false
  );
  assert.equal(find('partial-order', 'input', 'a').type, 'tool-collection-code');
  assert.equal(find('meet-join', 'output', 'output').unit, 'tool');
  assert.notEqual(
    find('partial-order', 'input', 'a').type,
    find('meet-join', 'output', 'output').type
  );
});
