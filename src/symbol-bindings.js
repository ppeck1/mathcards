/* Authored grammar tokens resolve to the exact quantity keys rendered by a card. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSymbolBindings = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  // Empty lists are deliberate: a binder, operator or random variable is not
  // automatically a current numerical value or a physical mark in the scene.
  const records = {
    'logical-connectives': {x:['length'],y:['width'],P:['pTruth'],Q:['qTruth'],'P∧Q':['output'],'P∨Q':['output'],'P→Q':['output'],'P↔Q':['output'],'¬P':['output'],'∧':[],'∨':[],'¬':[],'→':[],'↔':[]},
    quantifier: {h:['threshold'],D:['domain'],'P(x)':['outcomes'],x:[],'∀x∈D P(x)':['allTruth'],'∃x∈D P(x)':['someTruth'],'∀':[],'∃':[],'|{x∈D:P(x)}|':['qualifyingCount']},
    'cross-product': {u:['uX','uY'],v:['vX','vY'],'‖u‖':['uLength'],'‖v‖':['vLength'],'θ':['angle'],'sin(θ)':['sine'],w:['normalComponent'],'u×v':['normalComponent'],'w_z':['normalComponent'],'v_x':['vX'],'v_y':['vY'],'|u×v|':['area'],'wₓ':[],'wᵧ':[],A:['area'],'‖u×v‖':['area'],'×':[]},
    stability: {'e₀':['initialError'],r:['multiplier'],n:['steps'],k:[],'eₖ':['values'],'eₖ₊₁':['values'],'eₙ':['output'],'|eₙ|':['magnitude'],'|r|':['factorMagnitude']},
    'conditional-probability': {a:['eventEnd'],b:['windowEnd'],A:['event:A'],B:['event:B'],'A∩B':['event:intersection'],'P(A)':['eventProbability'],'P(B)':['givenProbability'],'P(A∩B)':['intersectionProbability'],'P(A|B)':['conditionalProbability'],'ℓ(A∩B)':['overlapLength']},
    variance: {x:['lastLength'],'xᵢ':['measurements'],'μ':['mean'],N:['count'],'∑xᵢ':['lengthSum'],'x−μ':['deviation4'],'(x−μ)²':['square4'],'xᵢ−μ':['deviations'],'dᵢ':['deviations'],'d₁':['deviation1'],'d₂':['deviation2'],'d₃':['deviation3'],'d₄':['deviation4'],'(xᵢ−μ)²':['squaredDeviations'],'∑(xᵢ−μ)²':['sumSquaredDeviations'],'σ²':['variance'],'σ':['standardDeviation']},
    recurrence: {'v₀':['initial'],r:['retention'],d:['addition'],n:['rounds'],k:[],j:[],'vₖ':['values'],'vₖ₊₁':['values'],'vₙ':['output'],'vₙ₋₁':['previous'],'r vₙ₋₁':['retained']},
    set: {U:['set:U'],A:['set:A'],B:['set:B'],R:['set:R'],a:['maxSize'],b:['minSize'],'|A|':['countA'],'|B|':['countB'],'|R|':['resultCount'],'A∩B':['set:intersection'],'A∪B':['set:union'],'A∖B':['set:difference'],'|A∩B|':['intersectionCount'],'|A∪B|':['unionCount'],'|A∖B|':['differenceCount']},
    'population-sample': {x:['lastValue'],n:['sampleSize'],s:['startIndex'],N:['populationSize'],'∑xᵢ':['sampleSum'],'∑Xᵢ':['populationSum'],'x̄':['sampleMean'],'μ':['populationMean'],E:['meanError']},
    'computational-complexity': {n:['itemCount'],c:['costPerItem'],'T(n)':['totalTime'],'T(2n)':['doubledTime'],'2n':['doubledCount'],'w(n)':['operationCount'],'O(n)':[]},
    'directional-derivative': {x:['x'],y:['y'],a:['a'],b:['b'],c:['c'],'θ':['angleDegrees'],u:['directionX','directionY'],'∇F':['partialX','partialY'],'DᵤF':['directionalSlope'],'F(x,y)':['height']},
    'tangent-plane': {x:['x'],y:['y'],a:['a'],b:['b'],c:['c'],'Δx':['dx'],'Δy':['dy'],'F(x,y)':['baseHeight'],'∂F/∂x':['partialX'],'∂F/∂y':['partialY'],'L(x+Δx,y+Δy)':['predictedHeight'],'F(x+Δx,y+Δy)':['actualHeight'],R:['approximationError']},
    'gradient-descent': {a:['a'],b:['b'],'x₀':['startX'],'y₀':['startY'],'η':['stepSize'],k:['iteration'],'xₖ':['currentX'],'yₖ':['currentY'],'C(xₖ,yₖ)':['cost'],'∇C':['partialX','partialY'],'xₖ₊₁':['nextX'],'yₖ₊₁':['nextY']},
    'chain-rule': {x:['x'],a:['a'],b:['b'],u:['innerValue'],f:['function:f'],g:['function:g'],'g(x)':['innerValue'],'f(u)':['composedValue'],'h(x)':['composedValue'],'g′(x)':['innerDerivative'],'f′(u)':['outerDerivative'],'h′(x)':['chainDerivative']},
    'partial-derivative': {h:[],x:['x'],y:['y'],a:['a'],b:['b'],c:['c'],'F(x,y)':['height'],'∂F/∂x':['partialX'],'∂F/∂y':['partialY']},
    gradient: {x:['x'],y:['y'],a:['a'],b:['b'],c:['c'],'F(x,y)':['height'],'∂F/∂x':['partialX'],'∂F/∂y':['partialY'],'∇F':['partialX','partialY'],'‖∇F‖':['gradientNorm']},
    'linear-combination': { ux:['ux'],uy:['uy'],vx:['vx'],vy:['vy'],r:['r'],s:['s'],'wₓ':['combinedX'],'wᵧ':['combinedY'] },
    basis: { B:['a','b','c','d'],a:['a'],b:['b'],c:['c'],d:['d'],x:['x'],y:['y'],r:['r'],s:['s'],'det(B)':['determinant'] },
    'matrix-product': { a:['a'],b:['b'],x:['x'],y:['y'],order:['order'],A:['a'],B:['b'],AB:['product:AB'],BA:['product:BA'],'qₓ':['intermediateX'],'qᵧ':['intermediateY'],'rₓ':['finalX'],'rᵧ':['finalY'] },
    vector: { x: ['x'], y: ['y'], '‖v‖': ['norm'] },
    'inner-product': { ux: ['ux'], uy: ['uy'], vx: ['vx'], vy: ['vy'], 'u·v': ['dot'], 'projᵤ(v)': ['projectionX','projectionY'] },
    'matrix-linear-map': { a: ['a'], b: ['b'], c: ['c'], d: ['d'], x: ['x'], y: ['y'], 'x′': ['mappedX'], 'y′': ['mappedY'] },
    determinant: { a: ['a'], b: ['b'], c: ['c'], d: ['d'], ad: ['termAD'], bc: ['termBC'], 'det(A)': ['determinant'] },
    function: { f: ['function:f'], x: ['x'], a: ['a'], b: ['b'], 'f(x)': ['output'] },
    exponentiation: { base: ['base'], exponent: ['exponent'], 'b^x': ['output'], 'b^(−x)': ['reciprocal'] },
    limit: { a: ['a'], h: ['h'], mode: ['mode'], leftValue: ['leftValue'], rightValue: ['rightValue'], L: ['output'] },
    'signed-accumulation': { initial: ['initial'], rate: ['rate'], time: ['time'], partitions: ['partitionCount'], 'S(T)': ['output'], 'D(T)': ['distance'], L_n: ['leftSum'] },
    'function-composition': { f: ['function:f'], g: ['function:g'], '∘': [], x: ['x'] },
    'real-logarithm': { log: [], b: ['base'], x: ['argument'], y: ['output'] },
    derivative: { f: ['function:f'], a: ['a'], h: ['h'], lim: [], 'f′(a)': ['analytic'] },
    'ratio-scale': { Q: ['output'], 'Q₀': ['amount'], s: ['servings'], 's₀': ['baseServings'] },
    'linear-model': { 'V(t)': ['output'], 'V₀': ['initial'], r: ['rate'], t: ['time'] },
    'exponential-change': { 'W(n)': ['output'], 'W₀': ['initial'], q: ['factor'], n: ['time'] },
    'chaos-theory': { r: ['rate'], s: ['seed'], 'δ': ['delta'], n: ['generation'], D: ['output'] },
    'fractal-geometry': { s: ['length'], n: ['completedDepth'], d: ['depth'], P: ['output'] },
    'wave-interference': { A: ['amplitude'], 'φ': ['phase'], R: ['output'] },
    probability: { p: ['chance'], X: [], 'E[X]': ['output'] },
    'vector-rotation': { r: ['radius'], 'θ': ['angle'], x: ['x'], y: ['y'] },
    'pythagorean-theorem': { a: ['a'], b: ['b'], c: ['output'] },
    'integral-accumulation': { time: ['time'], rate: ['rate'], distance: ['distance'] },
    'quadratic-optimization': { width: ['width'], perimeter: ['perimeter'], area: ['area'] },
    'complex-multiplication': { real: ['real'], imag: ['imag'], realPart: ['realPart'], imagPart: ['imagPart'] },
    'bayes-theorem': { prior: ['prior'], sensitivity: ['sensitivity'], falsePositive: ['falsePositive'], posterior: ['posterior'] },
    'graph-theory': { bridge: ['bridge'], shortestDistance: ['output'] },
    resonance: { frequency: ['frequency'], damping: ['damping'], amplitude: ['output'] }
  };
  const empty = Object.freeze([]);
  for (const record of Object.values(records)) {
    for (const [token, keys] of Object.entries(record)) record[token] = keys.length ? Object.freeze(keys) : empty;
    Object.freeze(record);
  }
  Object.freeze(records);
  function keysFor(slug, token) {
    if (typeof slug !== 'string' || typeof token !== 'string' || !Object.hasOwn(records, slug)) return empty;
    const record = records[slug];
    return Object.hasOwn(record, token) ? record[token] : empty;
  }
  return Object.freeze({ keysFor });
});
