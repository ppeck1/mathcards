import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const Links = require('../src/workspace-links.js');
const port = (id, direction = 'input', extra = {}) => ({ id, key: id, label: id, direction, type: 'scalar', unit: 'unitless', description: 'A test quantity.', ...extra });
const module = (extra = {}) => ({
  ports: [port('amount'), port('output', 'output')],
  validateParams(parameters) {
    const valid = Number.isFinite(parameters.amount) && parameters.amount >= -10 && parameters.amount <= 10;
    return { valid, parameters: { ...parameters }, errors: valid ? [] : [{ field: 'amount', message: 'Amount must be between −10 and 10.' }] };
  },
  evaluate: parameters => ({ valid: true, output: parameters.amount * 2 }),
  ...extra
});
const request = extra => ({
  sourceModule: module(), sourceParameters: { amount: 3 }, sourcePortId: 'output',
  targetModule: module(), targetParameters: { amount: 1 }, targetPortId: 'amount', ...extra
});

test('directed links load offline without a DOM or clocks', () => {
  const context = vm.createContext({});
  vm.runInContext(fs.readFileSync(new URL('../src/workspace-links.js', import.meta.url), 'utf8'), context);
  assert.equal(typeof context.AtlasWorkspaceLinks.check, 'function');
  assert.equal(context.AtlasWorkspaceLinks.compatible(port('left'), port('right')).valid, true);
});

test('a compatible output proposes a complete target snapshot without changing either slot', () => {
  const options = request({ targetParameters: { amount: 1, title: 'Keep this setting' } });
  const result = Links.check(options);
  assert.deepEqual(result, {
    valid: true, code: 'linked', reason: 'The source value fits the target input and its calculation is defined.',
    value: 6, parameters: { amount: 6, title: 'Keep this setting' }, targetKey: 'amount'
  });
  result.parameters.title = 'External edit';
  assert.deepEqual(options.sourceParameters, { amount: 3 });
  assert.deepEqual(options.targetParameters, { amount: 1, title: 'Keep this setting' });
});

test('input sources use the current parameter after validation, even when an unrelated output is undefined', () => {
  let evaluations = 0;
  const source = module({ evaluate() { evaluations++; return { valid: false, output: null }; } });
  const result = Links.check(request({ sourceModule: source, sourcePortId: 'amount', sourceParameters: { amount: -2 } }));
  assert.equal(result.valid, true);
  assert.equal(result.value, -2);
  assert.equal(result.parameters.amount, -2);
  assert.equal(evaluations, 0);
});

test('zero and negative numbers remain exact when allowed by the target range', () => {
  for (const amount of [0, -3]) {
    const result = Links.check(request({ sourceParameters: { amount } }));
    assert.equal(result.valid, true);
    assert.equal(result.value, amount * 2);
    assert.equal(result.parameters.amount, amount * 2);
  }
});

test('matching names do not imply type or unit compatibility and targets must be inputs', () => {
  assert.equal(Links.compatible(port('same', 'output', { unit: 'metres' }), port('same', 'input', { unit: 'litres' })).code, 'unit_mismatch');
  assert.equal(Links.compatible(port('same', 'output'), port('same', 'input', { type: 'probability' })).code, 'type_mismatch');
  assert.equal(Links.compatible(port('one'), port('two', 'output')).code, 'target_is_output');
  assert.equal(Links.compatible(port('one'), port('two')).valid, true, 'Different labels and keys may share declared meaning');
  for (const extra of [{ unit: '' }, { type: '' }, { direction: 'both' }, { key: '__proto__' }]) {
    assert.equal(Links.compatible(port('one', 'input', extra), port('two')).valid, false);
  }
});

test('pair discovery uses metadata only, excludes outputs and ambiguous ids, and copies its results', () => {
  const source = module({ ports: [port('large', 'output'), port('input'), port('distance', 'output', { unit: 'metres' }), port('duplicate'), port('duplicate')] });
  const target = module({ ports: [port('target'), port('other-output', 'output'), port('length', 'input', { unit: 'metres' })] });
  source.evaluate = () => { throw new Error('Pair discovery cannot calculate values'); };
  const pairs = Links.listPairs(source, target);
  assert.deepEqual(pairs.map(pair => [pair.sourcePort.id, pair.targetPort.id]), [['large', 'target'], ['input', 'target'], ['distance', 'length']]);
  pairs[0].sourcePort.label = 'Changed outside';
  assert.equal(source.ports[0].label, 'large');
  assert.deepEqual(Links.listPairs(null, target), []);
});

test('invalid source parameters, missing quantities and ambiguous ports cannot drive a link', () => {
  const cases = [
    [{ sourceParameters: { amount: 11 } }, 'invalid_source_parameters'],
    [{ sourceParameters: { amount: '3' } }, 'invalid_source_parameters'],
    [{ sourcePortId: 'missing' }, 'unknown_source_port'],
    [{ targetPortId: 'missing' }, 'unknown_target_port'],
    [{ sourceModule: module({ ports: [port('amount'), port('amount')] }), sourcePortId: 'amount' }, 'unknown_source_port'],
    [{ sourceModule: null }, 'invalid_source_module'],
    [{ targetModule: module({ evaluate: 'amount * 2' }) }, 'invalid_target_module']
  ];
  for (const [changes, code] of cases) {
    const result = Links.check(request(changes));
    assert.equal(result.valid, false);
    assert.equal(result.code, code);
    assert.equal(result.parameters, null);
  }
});

test('undefined, nonfinite or nonnumeric source output is rejected without coercion', () => {
  for (const output of [undefined, null, Infinity, -Infinity, NaN, '4']) {
    const result = Links.check(request({ sourceModule: module({ evaluate: () => ({ valid: true, output }) }) }));
    assert.equal(result.code, 'invalid_source_value');
    assert.equal(result.parameters, null);
  }
  const undefinedDomain = Links.check(request({ sourceModule: module({ evaluate: () => ({ valid: false, output: 4, message: 'The quotient is undefined.' }) }) }));
  assert.equal(undefinedDomain.code, 'invalid_source_domain');
  assert.equal(undefinedDomain.reason, 'The quotient is undefined.');
});

test('an input port reads the current numeric value without validator coercion', () => {
  const source = module({ validateParams: p => ({ valid: true, parameters: { ...p, amount: Number(p.amount) } }) });
  const result = Links.check(request({ sourceModule: source, sourcePortId: 'amount', sourceParameters: { amount: '3' } }));
  assert.equal(result.code, 'invalid_source_value');
  assert.equal(result.parameters, null);
});

test('out-of-range values pause atomically and are never clamped', () => {
  const options = request({ sourceParameters: { amount: 8 }, targetParameters: { amount: 1, another: 3 } });
  const result = Links.check(options);
  assert.equal(result.valid, false);
  assert.equal(result.code, 'invalid_target_parameters');
  assert.equal(result.value, 16);
  assert.match(result.reason, /between/);
  assert.deepEqual(options.targetParameters, { amount: 1, another: 3 });
  assert.equal(Links.listPairs(options.sourceModule, options.targetModule).length, 2, 'Temporarily invalid values do not remove compatible ports');
  const normalizing = module({ validateParams: p => ({ valid: true, parameters: { ...p, amount: Math.min(5, p.amount) } }) });
  assert.equal(Links.check(request({ targetModule: normalizing })).code, 'target_value_changed');
});

test('the whole proposed target is checked for its mathematical domain', () => {
  const source = module({ evaluate: p => ({ valid: true, output: p.amount }) });
  const logarithm = module({
    validateParams: p => ({ valid: Number.isFinite(p.amount) && Number.isFinite(p.base), parameters: { ...p } }),
    evaluate: p => ({ valid: p.base > 0 && p.base !== 1 && p.amount > 0, output: Math.log(p.amount) / Math.log(p.base), message: p.amount <= 0 ? 'The logarithm needs a positive argument.' : 'The logarithm needs a base other than 1.' })
  });
  const invalidArgument = Links.check(request({ sourceModule: source, sourceParameters: { amount: 0 }, targetModule: logarithm, targetParameters: { amount: 8, base: 2 } }));
  assert.equal(invalidArgument.code, 'invalid_target_domain');
  assert.match(invalidArgument.reason, /positive argument/);
  const invalidOtherField = Links.check(request({ sourceModule: source, targetModule: logarithm, targetParameters: { amount: 8, base: 1 } }));
  assert.equal(invalidOtherField.code, 'invalid_target_domain');
  const nullOutput = Links.check(request({ targetModule: module({ evaluate: () => ({ valid: true, output: null }) }) }));
  assert.equal(nullOutput.code, 'invalid_target_domain');
});

test('validated normalization of unrelated settings is preserved, but callbacks cannot change slot state', () => {
  const sourceParameters = { amount: 3, nested: { value: 1 } }, targetParameters = { amount: 1, nested: { value: 2 } };
  const source = module({
    validateParams(p) { p.nested.value = 11; return { valid: true, parameters: p }; },
    evaluate(p) { p.nested.value = 12; return { valid: true, output: p.amount * 2 }; }
  });
  const target = module({
    validateParams(p) { p.nested.value = 21; return { valid: true, parameters: p }; },
    evaluate(p) { p.amount = 99; p.nested.value = 22; return { valid: true, output: 4 }; }
  });
  const result = Links.check(request({ sourceModule: source, sourceParameters, targetModule: target, targetParameters }));
  assert.equal(result.valid, true);
  assert.deepEqual(result.parameters, { amount: 6, nested: { value: 21 } });
  assert.deepEqual(sourceParameters, { amount: 3, nested: { value: 1 } });
  assert.deepEqual(targetParameters, { amount: 1, nested: { value: 2 } });
});

test('validation and evaluation failures become honest failures without altering either slot', () => {
  const throwing = () => { throw new Error('Internal details'); };
  const cases = [
    [{ sourceModule: module({ validateParams: throwing }) }, 'invalid_source_parameters'],
    [{ sourceModule: module({ evaluate: throwing }) }, 'source_evaluation_failed'],
    [{ targetModule: module({ validateParams: throwing }) }, 'invalid_target_parameters'],
    [{ targetModule: module({ evaluate: throwing }) }, 'target_evaluation_failed']
  ];
  for (const [changes, code] of cases) {
    const options = request(changes), result = Links.check(options);
    assert.equal(result.code, code);
    assert.equal(result.parameters, null);
    assert.doesNotMatch(result.reason, /Internal details/);
    assert.deepEqual(options.sourceParameters, { amount: 3 });
    assert.deepEqual(options.targetParameters, { amount: 1 });
  }
});

test('data accessors, prototype keys and cycles cannot execute or become linked state', () => {
  let calls = 0;
  const getter = {};
  Object.defineProperty(getter, 'amount', { enumerable: true, get() { calls++; return 3; } });
  const cyclic = { amount: 3 }; cyclic.nested = cyclic;
  for (const sourceParameters of [getter, cyclic, JSON.parse('{"amount":3,"__proto__":{"polluted":true}}')]) {
    assert.equal(Links.check(request({ sourceParameters })).code, 'invalid_source_parameters');
  }
  assert.equal(calls, 0);
  assert.equal({}.polluted, undefined);
});

test('installed length modules can share metres while preserving their own ranges and rejecting pixels', () => {
  const Models = require('../src/models.js'), Ports = require('../src/module-ports.js');
  const installed = id => ({ ports: Ports.forModule(id), validateParams: p => Models.validateParams(id, p), evaluate: p => Models.evaluate(id, p) });
  const options = {
    sourceModule: installed('pythagorean-theorem'), sourceParameters: Models.defaults('pythagorean-theorem'), sourcePortId: 'output:output',
    targetModule: installed('quadratic-optimization'), targetParameters: Models.defaults('quadratic-optimization'), targetPortId: 'input:width'
  };
  const result = Links.check(options);
  assert.equal(result.valid, true);
  assert.equal(result.value, 5);
  assert.equal(result.parameters.width, 5);
  assert.equal(Models.evaluate('quadratic-optimization', result.parameters).output, 25);
  assert.equal(Links.check({ ...options, targetPortId: 'input:perimeter' }).code, 'invalid_target_parameters');
  const pixels = installed('exponential-change');
  assert.equal(Links.compatible(pixels.ports.find(p => p.id === 'output:output'), options.targetModule.ports.find(p => p.id === 'input:width')).code, 'unit_mismatch');
});

const connection = { sourceSlotId: 'left', sourcePortId: 'output', targetSlotId: 'right', targetPortId: 'amount' };
function workspace(extra = {}) {
  const slots = [
    { id: 'left', module: module({ id: 'source', version: '1' }), parameters: { amount: 2 } },
    { id: 'right', module: module({ id: 'target', version: '1' }), parameters: { amount: 1, other: 3 } },
    { id: 'sibling', module: module({ id: 'third', version: '1' }), parameters: { amount: 7 } }
  ];
  const applied = [];
  const session = Links.createSession({
    getSlots: () => slots.map(slot => ({ ...slot, parameters: structuredClone(slot.parameters) })),
    apply(id, parameters) {
      applied.push({ id, parameters: structuredClone(parameters) });
      const slot = slots.find(candidate => candidate.id === id);
      slot.parameters = structuredClone(parameters);
      return { valid: true, parameters: structuredClone(parameters) };
    }, ...extra
  });
  return { slots, applied, session };
}

test('a session follows one explicit directed connection while sibling slots remain independent', () => {
  const { slots, applied, session } = workspace();
  assert.equal(session.getState().phase, 'idle');
  assert.equal(session.connect(connection).phase, 'linked');
  assert.equal(slots[1].parameters.amount, 4);
  assert.deepEqual(slots[1].parameters, { amount: 4, other: 3 });
  assert.deepEqual(slots[2].parameters, { amount: 7 });
  slots[0].parameters.amount = 3;
  assert.equal(session.refresh('left').value, 6);
  assert.equal(slots[1].parameters.amount, 6);
  assert.deepEqual(applied.map(item => item.id), ['right', 'right']);
  const read = session.getState(); read.connection.sourcePortId = 'outside-change';
  assert.equal(session.getState().connection.sourcePortId, 'output');
});

test('an invalid initial choice is idle and never becomes a latent connection', () => {
  const { slots, applied, session } = workspace();
  slots[0].parameters.amount = 8;
  const blocked = session.connect(connection);
  assert.equal(blocked.phase, 'idle');
  assert.equal(blocked.connection, null);
  assert.equal(blocked.code, 'invalid_target_parameters');
  slots[0].parameters.amount = 2;
  assert.equal(session.refresh('left').phase, 'idle');
  assert.equal(applied.length, 0);
  assert.equal(slots[1].parameters.amount, 1);
  assert.equal(session.connect({ ...connection, targetSlotId: 'left' }).code, 'same_slot');
});

test('a live range or source-validation failure holds the last valid receiving state and resumes automatically', () => {
  const { slots, applied, session } = workspace();
  session.connect(connection);
  slots[0].parameters.amount = 8;
  const blocked = session.refresh('left');
  assert.equal(blocked.phase, 'blocked');
  assert.deepEqual(blocked.connection, connection);
  assert.equal(blocked.value, 16);
  assert.equal(slots[1].parameters.amount, 4);
  assert.equal(applied.length, 1);
  slots[0].parameters.amount = 11;
  assert.equal(session.refresh('left').code, 'invalid_source_parameters');
  assert.equal(slots[1].parameters.amount, 4);
  slots[0].parameters.amount = 3;
  assert.equal(session.refresh('left').phase, 'linked');
  assert.equal(slots[1].parameters.amount, 6);
  assert.equal(applied.length, 2);
});

test('an undefined source or receiving calculation pauses a live link until its domain is valid again', () => {
  for (const failedSide of ['source', 'target']) {
    const { slots, applied, session } = workspace();
    const index = failedSide === 'source' ? 0 : 1;
    slots[index].module.evaluate = p => ({ valid: p.amount !== (index === 0 ? 3 : 6), output: p.amount * 2 });
    session.connect(connection);
    slots[0].parameters.amount = 3;
    const paused = session.refresh('left');
    assert.equal(paused.phase, 'blocked');
    assert.equal(paused.code, `invalid_${failedSide}_domain`);
    assert.equal(slots[1].parameters.amount, 4);
    assert.equal(applied.length, 1);
    slots[0].parameters.amount = 2.5;
    assert.equal(session.refresh('left').phase, 'linked');
    assert.equal(slots[1].parameters.amount, 5);
  }
});

test('manual edits detach the receiving value while view changes and other controls retain the link', () => {
  const { slots, applied, session } = workspace();
  session.connect(connection);
  assert.equal(session.refresh().phase, 'linked');
  slots[1].parameters.other = 8;
  assert.equal(session.refresh('right').phase, 'linked');
  assert.equal(applied.length, 1, 'An unchanged linked value does not trigger another apply');
  slots[1].parameters.amount = 5;
  const detached = session.refresh('right');
  assert.equal(detached.phase, 'idle');
  assert.equal(detached.connection, null);
  assert.equal(detached.reason, 'Receiving value edited. Panels are independent.');
  slots[0].parameters.amount = 3;
  session.refresh('left');
  assert.equal(slots[1].parameters.amount, 5);
  assert.equal(slots[1].parameters.other, 8);
  assert.equal(applied.length, 1);
});

test('receiving-value edits detach while blocked instead of silently overwriting the manual value later', () => {
  const { slots, session } = workspace();
  session.connect(connection);
  slots[0].parameters.amount = 8;
  session.refresh('left');
  slots[1].parameters.amount = 3;
  assert.equal(session.refresh('right').code, 'receiving_value_edited');
  slots[0].parameters.amount = 2;
  session.refresh('left');
  assert.equal(slots[1].parameters.amount, 3);
});

test('slot removal, duplicate slot ids, and module identity or version replacement detach instead of retargeting', () => {
  const changes = [
    slots => { slots.splice(0, 1); },
    slots => { slots.push({ ...slots[0] }); },
    slots => { slots[0].module = module({ id: 'source', version: '1' }); },
    slots => { slots[1].module.version = '2'; },
    slots => { slots[0].module.id = 'different-source'; }
  ];
  for (const change of changes) {
    const { slots, applied, session } = workspace();
    session.connect(connection);
    change(slots);
    const state = session.refresh();
    assert.equal(state.phase, 'idle');
    assert.equal(state.connection, null);
    assert.match(state.code, /slot_changed|module_changed/);
    assert.equal(applied.length, 1);
  }
});

test('units are checked before activating a session, even for equally named and equally valued quantities', () => {
  const { slots, applied, session } = workspace();
  slots[0].module.ports[1] = port('output', 'output', { unit: 'px', type: 'length' });
  slots[1].module.ports[0] = port('amount', 'input', { unit: 'm', type: 'length' });
  const result = session.connect(connection);
  assert.equal(result.phase, 'idle');
  assert.equal(result.code, 'unit_mismatch');
  assert.equal(applied.length, 0);
});

test('initial equal values apply once, retain full precision, and unchanged refreshes never apply twice', () => {
  const { slots, applied, session } = workspace();
  slots[0].parameters.amount = .123456789012345;
  slots[1].parameters.amount = slots[0].parameters.amount * 2;
  session.connect(connection);
  assert.equal(applied.length, 1, 'Initial apply lets the host pause receiving playback');
  assert.equal(session.getState().value, .24691357802469);
  session.refresh('left'); session.refresh('right'); session.refresh();
  assert.equal(applied.length, 1);
});

test('synchronous host notifications cannot reenter apply or detach a programmatic update', () => {
  const slots = [
    { id: 'left', module: module(), parameters: { amount: 2 } },
    { id: 'right', module: module(), parameters: { amount: 1 } }
  ];
  let session, calls = 0;
  session = Links.createSession({ getSlots: () => slots, apply(id, parameters) {
    calls++;
    slots.find(slot => slot.id === id).parameters = parameters;
    session.refresh(id);
    return true;
  } });
  assert.equal(session.connect(connection).phase, 'linked');
  slots[0].parameters.amount = 3;
  assert.equal(session.refresh('left').phase, 'linked');
  assert.equal(slots[1].parameters.amount, 6);
  assert.equal(calls, 2);
});

test('an atomic host apply failure blocks a live link and leaves its last valid target intact', () => {
  const slots = [
    { id: 'left', module: module(), parameters: { amount: 2 } },
    { id: 'right', module: module(), parameters: { amount: 1 } }
  ];
  let fail = true;
  const session = Links.createSession({ getSlots: () => slots, apply(id, parameters) {
    if (fail) return { valid: false, errors: [{ message: 'The receiving controller is busy.' }] };
    slots.find(slot => slot.id === id).parameters = parameters;
    return true;
  } });
  assert.equal(session.connect(connection).phase, 'idle');
  assert.equal(slots[1].parameters.amount, 1);
  fail = false;
  session.connect(connection);
  assert.equal(slots[1].parameters.amount, 4);
  fail = true;
  slots[0].parameters.amount = 3;
  const blocked = session.refresh('left');
  assert.equal(blocked.phase, 'blocked');
  assert.equal(blocked.code, 'apply_failed');
  assert.equal(blocked.reason, 'The receiving controller is busy.');
  assert.equal(slots[1].parameters.amount, 4);
  fail = false;
  assert.equal(session.refresh().phase, 'linked');
  assert.equal(slots[1].parameters.amount, 6);
});

test('disconnect and destroy stop coordination, and destruction is permanent and idempotent', () => {
  const { slots, applied, session } = workspace();
  session.connect(connection);
  assert.equal(session.disconnect('Link removed.').reason, 'Link removed.');
  slots[0].parameters.amount = 3;
  session.refresh();
  assert.equal(slots[1].parameters.amount, 4);
  session.connect(connection);
  const destroyed = session.destroy();
  assert.equal(destroyed.phase, 'idle');
  assert.equal(destroyed.code, 'destroyed');
  for (const operation of [() => session.connect(connection), () => session.refresh('left'), () => session.disconnect('Changed'), () => session.destroy()]) {
    assert.deepEqual(operation(), destroyed);
  }
  assert.equal(applied.length, 2);
  assert.throws(() => Links.createSession({ getSlots: () => [] }), /getSlots and apply/);
});

test('destroying during an apply does not allow the outer update to revive the session', () => {
  let session;
  const { slots } = workspace();
  session = Links.createSession({ getSlots: () => slots, apply() { session.destroy(); return true; } });
  assert.equal(session.connect(connection).code, 'destroyed');
  assert.equal(session.getState().connection, null);
});

test('destruction during validation prevents the pending receiving update', () => {
  let session, applications = 0;
  const { slots } = workspace();
  slots[0].module.validateParams = p => { session.destroy(); return { valid: true, parameters: p }; };
  session = Links.createSession({ getSlots: () => slots, apply() { applications++; return true; } });
  assert.equal(session.connect(connection).code, 'destroyed');
  assert.equal(applications, 0);
});

test('restoring an equal saved connection captures ownership without applying or changing either slot', () => {
  const { slots, applied, session } = workspace();
  slots[1].parameters.amount = 4;
  const before = structuredClone(slots.map(slot => slot.parameters));
  const restored = session.restore(connection);
  assert.equal(restored.restored, true);
  assert.equal(restored.error, null);
  assert.equal(restored.phase, 'linked');
  assert.deepEqual(slots.map(slot => slot.parameters), before);
  assert.equal(applied.length, 0, 'Restoration never restarts the receiving calculation');
  restored.connection.sourcePortId = 'changed outside';
  assert.equal(session.getState().connection.sourcePortId, 'output');
  session.refresh('right');
  assert.equal(session.getState().phase, 'linked', 'Ownership starts from the saved receiving value');
  slots[0].parameters.amount = 3;
  session.refresh('left');
  assert.equal(slots[1].parameters.amount, 6);
  assert.equal(applied.length, 1);
});

test('a saved blocked range connection retains its last receiving value and later resumes normally', () => {
  const { slots, applied, session } = workspace();
  slots[0].parameters.amount = 8;
  slots[1].parameters.amount = 4;
  const restored = session.restore(connection);
  assert.equal(restored.restored, true);
  assert.equal(restored.phase, 'blocked');
  assert.equal(restored.code, 'invalid_target_parameters');
  assert.equal(slots[1].parameters.amount, 4);
  assert.equal(applied.length, 0);
  assert.equal(session.refresh('right').phase, 'blocked', 'The saved last-valid target does not count as a manual edit');
  slots[0].parameters.amount = 3;
  assert.equal(session.refresh('left').phase, 'linked');
  assert.equal(slots[1].parameters.amount, 6);
  assert.equal(applied.length, 1);
});

test('saved undefined calculations may remain blocked without losing a valid saved receiving value', () => {
  for (const side of ['source', 'target']) {
    const { slots, applied, session } = workspace();
    slots[1].parameters.amount = 4;
    const index = side === 'source' ? 0 : 1, undefinedAt = index === 0 ? 2 : 4;
    slots[index].module.evaluate = parameters => ({ valid: parameters.amount !== undefinedAt, output: parameters.amount * 2 });
    const restored = session.restore(connection);
    assert.equal(restored.restored, true);
    assert.equal(restored.phase, 'blocked');
    assert.equal(restored.code, 'invalid_' + side + '_domain');
    assert.equal(slots[1].parameters.amount, 4);
    assert.equal(applied.length, 0);
    slots[0].parameters.amount = 2.5;
    assert.equal(session.refresh('left').phase, 'linked');
    assert.equal(slots[1].parameters.amount, 5);
  }
});

test('inconsistent or incompatible saved connections fail atomically without rounding or retargeting', () => {
  const cases = [
    { change(slots) { slots[1].parameters.amount = 3.999999; }, descriptor: connection, code: 'inconsistent_restore' },
    { change() {}, descriptor: { ...connection, sourcePortId: 'missing' }, code: 'unknown_source_port' },
    { change() {}, descriptor: { ...connection, targetPortId: 'missing' }, code: 'unknown_target_port' },
    { change() {}, descriptor: { ...connection, targetSlotId: 'left' }, code: 'same_slot' },
    { change(slots) { slots[1].module.ports[0].unit = 'px'; }, descriptor: connection, code: 'unit_mismatch' },
    { change(slots) { slots[1].module.ports[0].type = 'area'; }, descriptor: connection, code: 'type_mismatch' },
    { change(slots) { slots[1].parameters.amount = NaN; }, descriptor: connection, code: 'invalid_saved_target' }
  ];
  for (const item of cases) {
    const { slots, applied, session } = workspace();
    session.connect(connection);
    const before = session.getState();
    item.change(slots);
    const parameters = structuredClone(slots.map(slot => slot.parameters));
    const result = session.restore(item.descriptor);
    assert.equal(result.restored, false);
    assert.equal(result.error.code, item.code);
    assert.deepEqual(session.getState(), before, 'A failed restore retains the previous session');
    assert.deepEqual(slots.map(slot => slot.parameters), parameters);
    assert.equal(applied.length, 1, 'Only the earlier explicit connection may apply');
  }
});

test('restored connections retain manual override and module identity guards; null closes the connection', () => {
  const { slots, applied, session } = workspace();
  slots[1].parameters.amount = 4;
  session.restore(connection);
  slots[1].parameters.amount = 5;
  assert.equal(session.refresh('right').code, 'receiving_value_edited');
  slots[1].parameters.amount = 4;
  session.restore(connection);
  slots[0].module = { ...slots[0].module };
  assert.equal(session.refresh().code, 'module_changed');
  session.restore(connection);
  const cleared = session.restore(null);
  assert.equal(cleared.restored, true);
  assert.equal(cleared.phase, 'idle');
  assert.equal(cleared.connection, null);
  assert.equal(applied.length, 0);
  session.destroy();
  assert.equal(session.restore(connection).error.code, 'destroyed');
  assert.equal(session.restore(null).error.code, 'destroyed');
});

test('restore rejects executable descriptor data and cannot revive a session destroyed by validation', () => {
  const { slots, applied, session } = workspace();
  let reads = 0;
  const descriptor = { ...connection };
  Object.defineProperty(descriptor, 'sourceSlotId', { get() { reads++; return 'left'; }, enumerable: true });
  assert.equal(session.restore(descriptor).error.code, 'invalid_connection');
  assert.equal(reads, 0);
  slots[1].parameters.amount = 4;
  slots[0].module.validateParams = parameters => { session.destroy(); return { valid: true, parameters }; };
  assert.equal(session.restore(connection).error.code, 'destroyed');
  assert.equal(session.getState().code, 'destroyed');
  assert.equal(session.getState().connection, null);
  assert.equal(applied.length, 0);
});
