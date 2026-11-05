import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url),
  Terms = require('../src/math-terms.js'),
  Systems = require('../src/systems-terms.js'),
  Index = require('../src/math-index.js');
const relevant = [
  'vector-field',
  'continuous-flow',
  'basin-attraction',
  'fold-bifurcation',
  'cusp-potential',
  'partial-order',
  'meet-join',
  'lattice-distributivity',
  'heat-balance',
  'gibbs-free-energy',
  'ideal-gas',
  'artificial-neuron',
  'hebbian-learning',
  'logical-connectives',
  'entropy',
  'probability'
];
const cards = relevant.map(slug =>
  JSON.parse(
    fs.readFileSync(new URL('../content/cards/' + slug + '.json', import.meta.url), 'utf8')
  )
);
const index = Index.create({ cards });

test('systems vocabulary supplies full reader entries, original examples and resolvable related meanings', () => {
  const ids = new Set(Terms.entries.map(entry => entry.id));
  assert.equal(new Set(Systems.entries.map(entry => entry.id)).size, Systems.entries.length);
  for (const entry of Systems.entries) {
    assert.ok(entry.definition.length > 50, entry.id);
    assert.ok(entry.example.length > 10 && entry.readAs, entry.id);
    assert.ok(
      entry.sourceKeys.length &&
        entry.sourceKeys.every(key => Systems.sources[key]?.url.startsWith('https://')),
      entry.id
    );
    assert.ok(
      (entry.relatedIds || []).every(id => ids.has(id)),
      entry.id
    );
    assert.ok(
      Terms.entries.some(candidate => candidate.id === entry.id),
      entry.id + ' is actually installed'
    );
  }
  for (const id of [
    'reflexive-relation',
    'antisymmetric-relation',
    'transitive-relation',
    'root-multiplicity',
    'kelvin',
    'pascal',
    'mole',
    'entropy-unit',
    'preactivation',
    'synaptic-plasticity'
  ])
    assert.ok(index.get(id), id);
});

test('lattice operations retain their own glyph meanings and do not become logical statements', () => {
  for (const [id, logic] of [
    ['lattice-meet', 'logical-and'],
    ['lattice-join', 'logical-or']
  ]) {
    const entry = index.get(id);
    assert.ok(
      entry.usedBy.some(
        card => card.slug === 'meet-join' && card.contexts.some(context => context.via !== 'term')
      ),
      id
    );
    assert.ok(
      entry.usedBy.some(
        card =>
          card.slug === 'lattice-distributivity' &&
          card.contexts.some(context => context.via !== 'term')
      ),
      id
    );
    assert.ok(
      !index
        .get(logic)
        .usedBy.some(
          card =>
            ['meet-join', 'lattice-distributivity'].includes(card.slug) &&
            card.contexts.some(context => context.via !== 'term')
        ),
      logic
    );
    assert.ok(
      index.get(logic).usedBy.some(card => card.slug === 'logical-connectives'),
      logic + ' remains available in logic'
    );
  }
});

test('physical quantities keep local symbols distinct from entropy in bits and probability notation', () => {
  const thermal = index.get('thermodynamic-entropy');
  assert.ok(
    thermal.usedBy.some(
      card =>
        card.slug === 'gibbs-free-energy' && card.contexts.some(context => context.token === 'ΔS')
    )
  );
  assert.ok(
    !thermal.usedBy.some(
      card => card.slug === 'entropy' && card.contexts.some(context => context.via !== 'term')
    )
  );
  assert.match(thermal.definition, /J\/K/);
  assert.match(thermal.definition, /Shannon entropy in bits/);
  const pressure = index.get('gas-pressure');
  assert.ok(pressure.usedBy.some(card => card.slug === 'ideal-gas'));
  assert.ok(
    !pressure.usedBy.some(
      card => card.slug === 'probability' && card.contexts.some(context => context.via !== 'term')
    )
  );
  for (const id of [
    'absolute-temperature',
    'enthalpy',
    'gas-volume',
    'amount-substance',
    'gas-constant'
  ])
    assert.ok(index.get(id).usedBy.length, id);
});

test('neural model terms state the model boundaries and retain scoped weight and bias roles', () => {
  assert.match(index.get('artificial-neuron').definition, /not an anatomical neuron/);
  assert.match(index.get('sigmoid').definition, /need not be a calibrated probability/);
  assert.match(index.get('hebbian-learning').definition, /without saturation or decay/);
  assert.ok(
    index
      .get('neural-weight')
      .usedBy.some(
        card =>
          card.slug === 'artificial-neuron' && card.contexts.some(context => context.token === 'w')
      )
  );
  assert.ok(
    index
      .get('neural-bias')
      .usedBy.some(
        card =>
          card.slug === 'artificial-neuron' && card.contexts.some(context => context.token === 'b')
      )
  );
  assert.ok(
    index
      .get('presynaptic-activity')
      .usedBy.some(
        card =>
          card.slug === 'hebbian-learning' && card.contexts.some(context => context.token === 'u')
      )
  );
});
