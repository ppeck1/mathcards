/* Reader definitions for bounded flow, order, energy and learning lessons.
   Mathematical meanings and SI units are separate from book-scope evidence. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSystemsTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const sources = {
    systemsfield: {
      title: 'OpenStax · Vector Fields',
      url: 'https://openstax.org/books/calculus-volume-3/pages/6-1-vector-fields'
    },
    systemsflow: {
      title: 'OpenStax · Separable Equations',
      url: 'https://openstax.org/books/calculus-volume-2/pages/4-3-separable-equations'
    },
    systemsfold: {
      title: 'Kuznetsov · Saddle-node bifurcation',
      url: 'https://www.scholarpedia.org/article/Saddle-node'
    },
    systemscusp: {
      title: 'Kuznetsov · Cusp bifurcation',
      url: 'https://www.scholarpedia.org/article/Cusp_bifurcation'
    },
    systemsorder: {
      title: 'Doerr and Levasseur · Lattices',
      url: 'https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Applied_Discrete_Structures_(Doerr_and_Levasseur)/13:_Boolean_Algebra/13.02:_Lattices'
    },
    systemsheat: {
      title: 'OpenStax · Entropy',
      url: 'https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy'
    },
    systemsgibbs: {
      title: 'OpenStax · Free Energy',
      url: 'https://openstax.org/books/chemistry-2e/pages/16-4-free-energy'
    },
    systemsgas: {
      title: 'OpenStax · Molecular Model of an Ideal Gas',
      url: 'https://openstax.org/books/university-physics-volume-2/pages/2-1-molecular-model-of-an-ideal-gas'
    },
    systemsneuron: {
      title: 'Dive into Deep Learning · Multilayer Perceptrons',
      url: 'https://d2l.ai/chapter_multilayer-perceptrons/mlp.html'
    },
    systemshebb: {
      title: 'Gerstner et al. · Models of Hebbian Learning',
      url: 'https://neuronaldynamics.epfl.ch/online/Ch19.S2.html'
    },
    systemsCalorimetry: {
      title: 'OpenStax · Heat Transfer, Specific Heat, and Calorimetry',
      url: 'https://openstax.org/books/university-physics-volume-2/pages/1-4-heat-transfer-specific-heat-and-calorimetry'
    },
    systemsSI: {
      title: 'BIPM · The International System of Units, ninth edition',
      url: 'https://www.bipm.org/en/publications/si-brochure'
    }
  };
  const entries = [];
  function add(
    id,
    title,
    category,
    symbols,
    definition,
    example,
    readAs,
    aliases,
    sourceKeys,
    extra = {}
  ) {
    entries.push({
      id,
      title,
      category,
      symbols,
      definition,
      example,
      readAs,
      aliases,
      sourceKeys,
      ...extra
    });
  }
  const scope = (cards, tokens) => ({
    grammarCards: cards,
    formulaCards: cards,
    tokens,
    mathSymbols: tokens,
    wordMatches: []
  });
  const flows = ['continuous-flow', 'basin-attraction', 'fold-bifurcation'];
  const order = ['partial-order', 'meet-join', 'lattice-distributivity'];
  const thermal = ['heat-balance', 'gibbs-free-energy', 'ideal-gas'];

  add(
    'vector-field',
    'Vector field',
    'dynamics',
    ['F'],
    'A rule assigning a vector to each point of a domain. A velocity field gives the instantaneous direction and rate there; its arrow is not a completed path.',
    'F(1,2)=(−1,−2) for F(x,y)=(−x,−y).',
    'F, the vector field',
    ['vector fields', 'velocity field'],
    ['systemsfield'],
    {
      ...scope(['vector-field'], ['F']),
      wordMatches: ['vector field', 'vector fields', 'velocity field'],
      relatedIds: ['vector', 'component', 'trajectory']
    }
  );
  add(
    'continuous-flow',
    'Continuous flow',
    'dynamics',
    [],
    'Evolution with a state at every elapsed time. For an autonomous flow, evolving for s and then t agrees with evolving for s+t whenever those solutions exist.',
    'The rule x′=−x has x(t)=x₀e^(−t).',
    'continuous flow',
    ['continuous flows', 'continuous-time flow'],
    ['systemsflow'],
    { relatedIds: ['autonomous-ode', 'trajectory', 'continuous-equilibrium'] }
  );
  add(
    'basin-attraction',
    'Basin of attraction',
    'dynamics',
    [],
    'The starting states whose forward trajectories approach a specified attractor. A finite-time position and an eventual destination answer different questions.',
    'For x′=x−x³, every positive start approaches +1.',
    'basin of attraction',
    ['basin', 'basins', 'basins of attraction'],
    ['systemsflow'],
    { relatedIds: ['trajectory', 'continuous-equilibrium', 'unstable-equilibrium'] }
  );
  add(
    'fold-bifurcation',
    'Fold bifurcation',
    'dynamics',
    ['μ'],
    'A local parameter change at which two equilibria meet and disappear. In x′=μ−x², positive μ gives roots ±√μ; negative μ gives none.',
    'At μ=1 the equilibria are −1 and +1.',
    'mu, the fold control parameter',
    ['fold bifurcations', 'saddle-node bifurcation'],
    ['systemsfold'],
    {
      ...scope(['fold-bifurcation'], ['μ', '\\mu']),
      wordMatches: ['fold bifurcation', 'fold bifurcations', 'saddle-node bifurcation'],
      relatedIds: ['bifurcation-parameter', 'double-root', 'continuous-equilibrium']
    }
  );
  add(
    'cusp-potential',
    'Cusp potential',
    'dynamics',
    [],
    'A two-parameter quartic potential whose stationary equation is cubic. It can have two minima separated by a maximum; changing parameters can remove that barrier.',
    'V(x)=x⁴/4−x²/2 has minima at ±1.',
    'cusp potential',
    ['cusp potentials', 'competing wells'],
    ['systemscusp'],
    {
      relatedIds: [
        'potential-landscape',
        'stationary-point',
        'potential-barrier',
        'fold-bifurcation'
      ]
    }
  );
  add(
    'autonomous-ode',
    'Autonomous differential equation',
    'dynamics',
    ['dx/dt'],
    'A differential equation whose stated velocity depends on the current state, without an explicit dependence on time. It specifies a rate rather than a discrete update.',
    'dx/dt=−2x is autonomous.',
    'd x by d t',
    [
      'autonomous',
      'autonomous system',
      'autonomous scalar equation',
      'ordinary differential equation'
    ],
    ['systemsflow'],
    {
      ...scope(flows, ['dx/dt', 'x′']),
      wordMatches: ['autonomous', 'differential equation', 'ordinary differential equation'],
      relatedIds: ['derivative', 'continuous-flow', 'recurrence']
    }
  );
  add(
    'trajectory',
    'Trajectory',
    'dynamics',
    [],
    'The evolving states of one solution, starting from a declared initial condition. A field specifies local velocities; a trajectory follows the resulting evolution.',
    'x(t)=2e^(−t) starts at x(0)=2.',
    'trajectory',
    ['trajectories', 'solution path'],
    ['systemsfield', 'systemsflow'],
    { relatedIds: ['vector-field', 'continuous-flow', 'basin-attraction'] }
  );
  add(
    'continuous-equilibrium',
    'Equilibrium of a continuous flow',
    'dynamics',
    [],
    'A state with zero velocity under the declared autonomous rule, giving a constant solution. Being an equilibrium does not establish attraction or stability.',
    'For x′=x−x³, −1, 0 and +1 are equilibria.',
    'equilibrium of a continuous flow',
    ['zero-velocity equilibrium', 'stationary solution'],
    ['systemsflow'],
    {
      wordMatches: ['equilibrium', 'equilibria', 'zero velocity'],
      relatedIds: ['equilibrium', 'fixed-point', 'basin-attraction']
    }
  );
  add(
    'bifurcation-parameter',
    'Bifurcation parameter',
    'dynamics',
    [],
    'A control varied across a family of rules to study qualitative changes, such as the number or stability of equilibria. It differs from a system state.',
    'In x′=μ−x², μ is the control and x the state.',
    'bifurcation parameter',
    ['control parameter', 'bifurcation parameters'],
    ['systemsfold'],
    { relatedIds: ['parameter', 'fold-bifurcation', 'cusp-potential'] }
  );
  add(
    'double-root',
    'Double root',
    'functions',
    [],
    'A zero with multiplicity two. The graph can touch zero without crossing. Linearization there may be inconclusive; stability needs further analysis.',
    'At μ=0, μ−x² has a double root at x=0.',
    'double root',
    ['repeated root', 'repeated stationary point'],
    ['systemsfold', 'systemscusp'],
    { relatedIds: ['root-multiplicity', 'derivative', 'fold-bifurcation'] }
  );
  add(
    'root-multiplicity',
    'Root multiplicity',
    'functions',
    [],
    'For a polynomial, the number of copies of the factor x−r at a root r, after factoring out the largest possible power.',
    'In (x−2)²(x+1), the root 2 has multiplicity two.',
    'root multiplicity',
    ['multiplicity', 'multiplicity of a root'],
    ['systemsfold', 'systemscusp'],
    { relatedIds: ['double-root', 'function'] }
  );
  add(
    'potential-landscape',
    'Potential landscape',
    'dynamics',
    ['V(x)'],
    'A scalar function over states. For a declared relaxation rule x′=−V′(x), slopes determine velocity; a static landscape alone does not choose a trajectory.',
    'For V=x²/2, the gradient flow is x′=−x.',
    'V of x, the potential',
    ['potential function', 'potential landscape', 'quartic potential'],
    ['systemscusp', 'systemsfield'],
    {
      ...scope(['cusp-potential'], ['V(x)']),
      wordMatches: ['potential', 'potential landscape', 'potential function'],
      relatedIds: ['stationary-point', 'potential-barrier', 'gradient']
    }
  );
  add(
    'stationary-point',
    'Stationary point of a potential',
    'calculus',
    [],
    'A point where the first derivative is zero. It may be a minimum, maximum or a degenerate stationary point; zero slope alone does not classify it.',
    'V′(0)=0 for both V=x² and V=−x².',
    'stationary point',
    ['stationary points', 'critical point of a potential'],
    ['systemscusp'],
    { relatedIds: ['derivative', 'potential-landscape', 'double-root'] }
  );
  add(
    'potential-barrier',
    'Potential barrier',
    'dynamics',
    [],
    'A rise in the stated potential between regions around minima. Its presence describes the landscape; crossing it requires an additional evolution or noise model.',
    'The quartic V=x⁴/4−x²/2 rises from a well to x=0.',
    'potential barrier',
    ['barrier', 'well', 'wells'],
    ['systemscusp'],
    { relatedIds: ['potential-landscape', 'cusp-potential', 'trajectory'] }
  );

  add(
    'partial-order',
    'Partial order',
    'sets',
    ['≼'],
    'A reflexive, antisymmetric and transitive relation. Some pairs may be incomparable. In the displayed family, A≼B means A⊆B.',
    '{lamp} is included in {lamp,ruler}, but not in {brush}.',
    'precedes or equals in the declared order',
    ['partial orders', 'partially ordered set', 'poset'],
    ['systemsorder'],
    {
      ...scope(order, ['≼', '\\preceq']),
      wordMatches: ['partial order', 'partial orders', 'partially ordered', 'poset'],
      relatedIds: [
        'binary-relation',
        'comparable-elements',
        'lattice',
        'reflexive-relation',
        'antisymmetric-relation',
        'transitive-relation'
      ]
    }
  );
  add(
    'reflexive-relation',
    'Reflexive relation',
    'sets',
    [],
    'A relation in which every element is related to itself. Reflexivity is one of the three defining requirements for a partial order.',
    'Every set A satisfies A⊆A.',
    'reflexive relation',
    ['reflexive', 'reflexivity'],
    ['systemsorder'],
    { relatedIds: ['binary-relation', 'partial-order'] }
  );
  add(
    'antisymmetric-relation',
    'Antisymmetric relation',
    'sets',
    [],
    'A relation where a≼b and b≼a together require a=b. It does not prohibit a≼a.',
    'If A⊆B and B⊆A, then A=B.',
    'antisymmetric relation',
    ['antisymmetric', 'antisymmetry'],
    ['systemsorder'],
    { relatedIds: ['binary-relation', 'partial-order', 'equality'] }
  );
  add(
    'transitive-relation',
    'Transitive relation',
    'sets',
    [],
    'A relation where a≼b and b≼c imply a≼c. The middle element can connect two known comparisons.',
    'A⊆B and B⊆C imply A⊆C.',
    'transitive relation',
    ['transitive', 'transitivity'],
    ['systemsorder'],
    { relatedIds: ['binary-relation', 'partial-order'] }
  );
  add(
    'meet-join',
    'Meet and join',
    'sets',
    [],
    'Meet is the greatest common lower bound; join is the least common upper bound. A lattice has both for every pair.',
    'For sets ordered by inclusion, meet is intersection and join union.',
    'meet and join',
    ['meet and join'],
    ['systemsorder'],
    { relatedIds: ['lattice-meet', 'lattice-join', 'partial-order'] }
  );
  add(
    'lattice-distributivity',
    'Lattice distributivity',
    'sets',
    [],
    'A lattice property: meet distributes over join, equivalently join distributes over meet. Powerset lattices satisfy it; arbitrary lattices may fail it.',
    'A∧(B∨C)=(A∧B)∨(A∧C).',
    'lattice distributivity',
    ['distributive lattice', 'distributive lattices', 'distributive law'],
    ['systemsorder'],
    { relatedIds: ['lattice-meet', 'lattice-join', 'powerset-lattice'] }
  );
  add(
    'lattice',
    'Lattice',
    'sets',
    [],
    'A partially ordered set in which every pair has a meet and a join. The elements need not be sets.',
    'All subsets of three tools form a lattice under inclusion.',
    'lattice',
    ['lattices', 'lattice theory'],
    ['systemsorder'],
    { relatedIds: ['partial-order', 'lattice-meet', 'lattice-join'] }
  );
  add(
    'lattice-meet',
    'Lattice meet',
    'sets',
    ['∧'],
    'The greatest element below both operands in the declared order. This wedge names an order operation, distinct from logical conjunction.',
    'For subsets, {lamp,ruler}∧{ruler,brush}={ruler}.',
    'meet',
    ['meet', 'greatest lower bound', 'infimum in a lattice'],
    ['systemsorder'],
    {
      ...scope(['meet-join', 'lattice-distributivity'], ['∧', '\\wedge']),
      wordMatches: ['meet', 'greatest lower bound'],
      relatedIds: ['lattice-join', 'set-intersection', 'logical-and']
    }
  );
  add(
    'lattice-join',
    'Lattice join',
    'sets',
    ['∨'],
    'The least element above both operands in the declared order. This vee names an order operation, distinct from logical disjunction.',
    'For subsets, {lamp}∨{brush}={lamp,brush}.',
    'join',
    ['join', 'least upper bound', 'supremum in a lattice'],
    ['systemsorder'],
    {
      ...scope(['meet-join', 'lattice-distributivity'], ['∨', '\\vee']),
      wordMatches: ['join', 'least upper bound'],
      relatedIds: ['lattice-meet', 'set-union', 'logical-or']
    }
  );
  add(
    'comparable-elements',
    'Comparable and incomparable elements',
    'sets',
    [],
    'Two elements are comparable when one is below the other in the stated order. Otherwise they are incomparable.',
    '{lamp} and {brush} are incomparable by inclusion.',
    'comparable; incomparable',
    ['comparable', 'incomparable', 'incomparability'],
    ['systemsorder'],
    { relatedIds: ['partial-order', 'subset', 'lattice'] }
  );
  add(
    'powerset-lattice',
    'Powerset lattice',
    'sets',
    [],
    'All subsets of a fixed set, ordered by inclusion. Intersection supplies meet and union supplies join.',
    'A three-element set has eight subsets in its powerset lattice.',
    'powerset lattice',
    ['powerset', 'power set', 'powerset lattices'],
    ['systemsorder'],
    { relatedIds: ['set', 'subset', 'lattice-distributivity'] }
  );

  add(
    'heat-balance',
    'Heat balance',
    'functions',
    ['Q'],
    'Energy accounting for heat transferred between declared systems. In the insulated two-body example, energy lost by one body equals energy gained by the other.',
    'Transfer 20 J from the hot body to the cold body.',
    'Q, transferred heat',
    ['heat balance', 'heat exchange', 'heat transfer'],
    ['systemsCalorimetry'],
    {
      ...scope(['heat-balance'], ['Q']),
      wordMatches: ['heat transfer', 'heat exchange', 'heat balance'],
      relatedIds: ['heat-capacity', 'thermal-equilibrium', 'energy']
    }
  );
  add(
    'heat-capacity',
    'Heat capacity',
    'functions',
    ['C'],
    'The energy needed per temperature change under specified conditions. For constant capacity without phase change, Q=CΔT; it differs from capacity per unit mass.',
    'C=2 J/K needs 6 J for a 3 K rise.',
    'C, heat capacity',
    ['heat capacity', 'constant heat capacity'],
    ['systemsCalorimetry'],
    {
      ...scope(['heat-balance'], ['C']),
      wordMatches: ['heat capacity'],
      relatedIds: ['heat-balance', 'kelvin', 'entropy-unit']
    }
  );
  add(
    'absolute-temperature',
    'Absolute temperature',
    'functions',
    ['T', 'T_h', 'T_c'],
    'Temperature on a thermodynamic scale measured in kelvins. The displayed gas and entropy formulas require absolute temperature, rather than a Celsius value.',
    '300 K is approximately 26.85 °C.',
    'T, absolute temperature',
    ['temperature', 'absolute temperature', 'temperatures'],
    ['systemsCalorimetry', 'systemsgas'],
    {
      ...scope(thermal, ['T', 'T_h', 'T_c', 'Tₕ', 'T𝚌']),
      wordMatches: ['temperature', 'absolute temperature'],
      relatedIds: ['kelvin', 'ideal-gas', 'thermodynamic-entropy']
    }
  );
  add(
    'thermal-equilibrium',
    'Thermal equilibrium',
    'functions',
    [],
    'A condition in which systems in thermal contact have equal temperature and no net heat transfer due to a temperature difference.',
    'The two constant-capacity bodies meet at 350 K.',
    'thermal equilibrium',
    ['thermal equilibrium'],
    ['systemsCalorimetry'],
    { relatedIds: ['absolute-temperature', 'heat-balance', 'continuous-equilibrium'] }
  );
  add(
    'thermodynamic-entropy',
    'Thermodynamic entropy',
    'functions',
    ['S', 'ΔS'],
    'A physical state function. Its change can be calculated along a reversible reference path by integrating heat divided by absolute temperature. It is measured in J/K, separately from Shannon entropy in bits.',
    'For constant capacity, ΔS=C ln(Tfinal/Tinitial).',
    'S, entropy; delta S, entropy change',
    ['physical entropy', 'thermodynamic entropy', 'entropy change'],
    ['systemsheat'],
    {
      ...scope(['heat-balance', 'gibbs-free-energy'], ['S', 'ΔS', '\\Delta S']),
      wordMatches: ['physical entropy', 'thermodynamic entropy', 'entropy change'],
      relatedIds: ['entropy', 'entropy-unit', 'absolute-temperature', 'heat-balance']
    }
  );
  add(
    'gibbs-free-energy',
    'Gibbs free energy',
    'functions',
    ['ΔG'],
    'The state function G=H−TS. At constant temperature, ΔG=ΔH−TΔS; at constant temperature and pressure its sign assesses thermodynamic favorability, not reaction speed.',
    'ΔH=2000 J, T=300 K and ΔS=5 J/K give ΔG=500 J.',
    'delta G, Gibbs free-energy change',
    ['Gibbs energy', 'free energy', 'Gibbs free-energy change'],
    ['systemsgibbs'],
    {
      ...scope(['gibbs-free-energy'], ['ΔG', '\\Delta G']),
      wordMatches: ['Gibbs free energy', 'free energy', 'free-energy'],
      relatedIds: ['enthalpy', 'thermodynamic-entropy', 'absolute-temperature']
    }
  );
  add(
    'enthalpy',
    'Enthalpy',
    'functions',
    ['H', 'ΔH'],
    'The state function H=U+pV, combining internal energy with pressure times volume. Its change enters the Gibbs comparison in energy units.',
    'With ΔH=2000 J, the Gibbs card holds that enthalpy change fixed.',
    'H, enthalpy; delta H, enthalpy change',
    ['enthalpy', 'enthalpy change'],
    ['systemsgibbs'],
    {
      ...scope(['gibbs-free-energy'], ['H', 'ΔH', '\\Delta H']),
      wordMatches: ['enthalpy', 'enthalpy change'],
      relatedIds: ['gibbs-free-energy', 'internal-energy', 'joule']
    }
  );
  add(
    'internal-energy',
    'Internal energy',
    'functions',
    ['U'],
    'A system state quantity accounting for its microscopic energy. Heat and work describe energy transfer during a process, rather than separate contents stored inside it.',
    'The U in H=U+pV denotes internal energy.',
    'U, internal energy',
    ['internal energy'],
    ['systemsCalorimetry'],
    {
      ...scope(['gibbs-free-energy'], ['U']),
      wordMatches: ['internal energy'],
      relatedIds: ['enthalpy', 'energy', 'heat-balance']
    }
  );
  add(
    'ideal-gas',
    'Ideal gas law',
    'functions',
    [],
    'The equation of state pV=nRT relating absolute pressure, volume, amount of substance and absolute temperature in the ideal-gas approximation.',
    'At fixed n and T, doubling V halves p.',
    'p V equals n R T',
    ['ideal gas', 'ideal gas law', 'ideal-gas law'],
    ['systemsgas'],
    {
      relatedIds: [
        'gas-pressure',
        'gas-volume',
        'amount-substance',
        'gas-constant',
        'absolute-temperature'
      ]
    }
  );
  add(
    'gas-pressure',
    'Absolute gas pressure',
    'functions',
    ['p'],
    'Force per area relative to vacuum. The ideal-gas equation uses absolute pressure, rather than pressure measured relative to the surrounding atmosphere.',
    'An ideal gas at 20 L and 300 K has a stated absolute pressure.',
    'p, absolute pressure',
    ['absolute pressure', 'gas pressure', 'pressure'],
    ['systemsgas'],
    {
      ...scope(['ideal-gas'], ['p']),
      wordMatches: ['absolute pressure', 'gas pressure', 'pressure'],
      relatedIds: ['pascal', 'ideal-gas', 'gas-volume']
    }
  );
  add(
    'gas-volume',
    'Gas volume',
    'functions',
    ['V'],
    'The space occupied by the gas in the stated model. It is a volume, distinct from the potential function also named V elsewhere.',
    'The gas card uses V=20 L as its initial volume.',
    'V, gas volume',
    ['gas volume', 'volume of gas'],
    ['systemsgas'],
    {
      ...scope(['ideal-gas'], ['V']),
      wordMatches: ['gas volume', 'volume'],
      relatedIds: ['ideal-gas', 'gas-pressure', 'measurement-unit-symbols']
    }
  );
  add(
    'amount-substance',
    'Amount of substance',
    'functions',
    ['n'],
    'A quantity counting specified entities through the mole unit. It differs from gas mass and from a raw count of particles.',
    'The ideal-gas card fixes n=1 mol.',
    'n, amount of substance',
    ['amount of substance', 'amount of gas'],
    ['systemsgas', 'systemsSI'],
    {
      ...scope(['ideal-gas'], ['n']),
      wordMatches: ['amount of substance', 'one mole'],
      relatedIds: ['mole', 'ideal-gas', 'gas-constant']
    }
  );
  add(
    'gas-constant',
    'Molar gas constant',
    'functions',
    ['R'],
    'The constant R in pV=nRT. Its numerical representation depends on the chosen units; L·kPa and joules are equal energy units.',
    'R≈8.31446 L·kPa/(mol·K).',
    'R, molar gas constant',
    ['gas constant', 'molar gas constant'],
    ['systemsgas', 'systemsSI'],
    {
      ...scope(['ideal-gas'], ['R']),
      wordMatches: ['gas constant'],
      relatedIds: ['ideal-gas', 'mole', 'kelvin', 'pascal']
    }
  );
  add(
    'kelvin',
    'Kelvin',
    'units',
    ['K'],
    'The SI unit of thermodynamic temperature. Temperature intervals of one kelvin and one degree Celsius have equal size.',
    'The gas temperature is 300 K.',
    'kelvin',
    ['kelvin', 'kelvins'],
    ['systemsSI'],
    { notationKinds: ['unit'], relatedIds: ['absolute-temperature', 'thermodynamic-entropy'] }
  );
  add(
    'pascal',
    'Pascal and kilopascal',
    'units',
    ['Pa', 'kPa'],
    'The SI pressure unit: one pascal equals one newton per square metre. One kilopascal equals 1000 pascals.',
    '100 kPa = 100000 Pa.',
    'pascal; kilopascal',
    ['pascal', 'pascals', 'kilopascal', 'kilopascals'],
    ['systemsSI'],
    { notationKinds: ['unit'], relatedIds: ['gas-pressure', 'newton', 'powered-unit'] }
  );
  add(
    'mole',
    'Mole',
    'units',
    ['mol'],
    'The SI unit of amount of substance. One mole contains exactly 6.02214076×10²³ specified elementary entities.',
    'One mole of specified molecules is 1 mol.',
    'mole',
    ['mole', 'moles'],
    ['systemsSI'],
    { notationKinds: ['unit'], relatedIds: ['amount-substance', 'ideal-gas'] }
  );
  add(
    'entropy-unit',
    'Joule per kelvin',
    'units',
    ['J/K'],
    'A compound unit used for entropy and heat capacity. Equal units do not make those two physical quantities identical.',
    'A heat capacity of 1 J/K and entropy change of 0.02 J/K differ in meaning.',
    'joules per kelvin',
    ['joule per kelvin', 'joules per kelvin'],
    ['systemsSI', 'systemsheat'],
    {
      notationKinds: ['unit'],
      relatedIds: ['thermodynamic-entropy', 'heat-capacity', 'joule', 'kelvin', 'compound-unit']
    }
  );

  add(
    'artificial-neuron',
    'Artificial neuron',
    'functions',
    [],
    'A computational unit that combines weighted inputs and a bias, then applies an activation function. This mathematical abstraction is not an anatomical neuron.',
    'The displayed scalar unit uses z=wx+b and y=1/(1+e^(−z)).',
    'artificial neuron',
    ['artificial neurons', 'sigmoid unit', 'scalar unit'],
    ['systemsneuron'],
    { relatedIds: ['neural-weight', 'neural-bias', 'sigmoid', 'preactivation'] }
  );
  add(
    'sigmoid',
    'Logistic sigmoid',
    'functions',
    [],
    'The smooth function σ(z)=1/(1+e^(−z)), with values strictly between zero and one for finite real z. Such a value need not be a calibrated probability.',
    'At zero input, σ(0)=1/2.',
    'sigmoid',
    ['sigmoid', 'logistic sigmoid', 'sigmoid activation'],
    ['systemsneuron'],
    { relatedIds: ['artificial-neuron', 'preactivation', 'exponential'] }
  );
  add(
    'preactivation',
    'Preactivation',
    'functions',
    ['z'],
    'The weighted sum and bias before an activation function is applied. In the scalar example, z=wx+b.',
    'w=2, x=1 and b=−1 give z=1.',
    'z, preactivation',
    ['preactivation', 'weighted input'],
    ['systemsneuron'],
    {
      ...scope(['artificial-neuron'], ['z']),
      wordMatches: ['preactivation', 'weighted input'],
      relatedIds: ['neural-weight', 'neural-bias', 'sigmoid']
    }
  );
  add(
    'neural-weight',
    'Neural weight',
    'functions',
    ['w', 'w₀', 'w₁', 'Δw'],
    'A coefficient controlling a model connection. Its sign and scale affect the signal; it is distinct from physical mass or a probability weight.',
    'Changing w changes z=wx+b.',
    'w, weight; delta w, weight change',
    ['neural weight', 'synaptic weight', 'weight update', 'weight units'],
    ['systemsneuron', 'systemshebb'],
    {
      ...scope(
        ['artificial-neuron', 'hebbian-learning'],
        ['w', 'w₀', 'w₁', 'w_0', 'w_1', 'Δw', '\\Delta w']
      ),
      wordMatches: ['neural weight', 'synaptic weight', 'weight update'],
      relatedIds: ['weight', 'hebbian-learning', 'preactivation']
    }
  );
  add(
    'neural-bias',
    'Neural bias',
    'functions',
    ['b'],
    'An additive model parameter shifting the input to an activation function. It differs from statistical bias in an estimator.',
    'With x=0, z=wx+b equals b.',
    'b, neural bias',
    ['neural bias', 'bias parameter'],
    ['systemsneuron'],
    {
      ...scope(['artificial-neuron'], ['b']),
      wordMatches: ['neural bias', 'bias'],
      relatedIds: ['artificial-neuron', 'preactivation', 'parameter']
    }
  );
  add(
    'hebbian-learning',
    'Hebbian weight update',
    'functions',
    [],
    'A local learning-rule family involving joint pre- and postsynaptic activity. The displayed Δw=ηuv is one illustrative correlation update, without saturation or decay.',
    'η=0.1 and u=v=0.5 give Δw=0.025.',
    'Hebbian weight update',
    ['Hebbian learning', 'Hebbian update', 'Hebbian rule'],
    ['systemshebb'],
    {
      relatedIds: [
        'neural-weight',
        'presynaptic-activity',
        'postsynaptic-activity',
        'step-size',
        'synaptic-plasticity'
      ]
    }
  );
  add(
    'presynaptic-activity',
    'Presynaptic activity',
    'functions',
    ['u'],
    'Activity on the sending side of a modeled connection. Here u is a nonnegative illustrative rate, without a specified physical firing-rate scale.',
    'If u=0, the displayed ηuv update is zero.',
    'u, presynaptic activity',
    ['presynaptic', 'presynaptic activity'],
    ['systemshebb'],
    {
      ...scope(['hebbian-learning'], ['u']),
      wordMatches: ['presynaptic', 'presynaptic activity'],
      relatedIds: ['postsynaptic-activity', 'hebbian-learning', 'neural-weight']
    }
  );
  add(
    'postsynaptic-activity',
    'Postsynaptic activity',
    'functions',
    ['v'],
    'Activity on the receiving side of a modeled connection. The displayed rule needs both sides active for a positive update.',
    'With positive η and u, setting v=0 gives Δw=0.',
    'v, postsynaptic activity',
    ['postsynaptic', 'postsynaptic activity'],
    ['systemshebb'],
    {
      ...scope(['hebbian-learning'], ['v']),
      wordMatches: ['postsynaptic', 'postsynaptic activity'],
      relatedIds: ['presynaptic-activity', 'hebbian-learning']
    }
  );
  add(
    'synaptic-plasticity',
    'Synaptic plasticity',
    'functions',
    [],
    'Change in the efficacy of a biological connection. Hebbian rules model some activity-dependent changes; a single unbounded rate rule is not a complete biological account.',
    'The illustrative weight rises after a positive joint-activity update.',
    'synaptic plasticity',
    ['plasticity', 'synaptic plasticity'],
    ['systemshebb'],
    { relatedIds: ['hebbian-learning', 'neural-weight'] }
  );

  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  return freeze({ entries, sources });
});
