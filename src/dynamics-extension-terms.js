/* Authored continuation data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDynamicsExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'hysteresis',
        title: 'Hysteresis and remembered branches',
        category: 'dynamics',
        symbols: [],
        tokens: [],
        definition:
          'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history. A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.',
        example: 'x³ − x − b = 0; retain the nearest stable branch',
        readAs: 'hysteresis and remembered branches',
        aliases: ['Why can the same dial setting hold two different positions?'],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'gradient-flow',
        title: 'Gradient flow and falling potential',
        category: 'dynamics',
        symbols: [],
        tokens: [],
        definition:
          'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm. V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.',
        example: 'ṙ = −∇V; dV/dt = −‖∇V‖²',
        readAs: 'gradient flow and falling potential',
        aliases: ['What makes a continuously corrected position lose potential?'],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'circle-manifold',
        title: 'A circle needs more than one chart',
        category: 'geometry',
        symbols: [],
        tokens: [],
        definition:
          'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point. The unit circle is covered by two stereographic charts. A chosen projection omits its own pole, although the circle is smooth there. Coordinate values are numerical and may leave the displayed window; a chart is not an isometric map.',
        example: 'u = x/(1−y) or x/(1+y)',
        readAs: 'a circle needs more than one chart',
        aliases: ['Can a smooth circle need a second coordinate map?'],
        grammarCards: ['circle-manifold'],
        formulaCards: ['circle-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'sphere-manifold',
        title: 'Local coordinates on a sphere',
        category: 'geometry',
        symbols: [],
        tokens: [],
        definition:
          'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one. Two stereographic charts cover the unit sphere. The north chart excludes only the north pole, and the south chart excludes only the south pole. Longitude is not unique at a pole, but the point and the other chart remain well defined. Geometry uses a labeled fixed 3D projection, not a separate Spatial tab.',
        example: '(u,v) = (x,y)/(1−z) or (x,y)/(1+z)',
        readAs: 'local coordinates on a sphere',
        aliases: ['How can a curved sphere have two local coordinates?'],
        grammarCards: ['sphere-manifold'],
        formulaCards: ['sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'structural-stability',
        title: 'Perturbing a rule, not just a starting point',
        category: 'dynamics',
        symbols: [],
        tokens: [],
        definition:
          'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness. This compares two explicit one-dimensional families on the line. The linear family retains one attracting equilibrium; the fold at ε=0 changes its equilibrium count under arbitrarily small signed shifts. This is a bounded introduction to structural stability, not a general certificate over all perturbations or domains.',
        example: 'fε(x)=−x+ε or ε−x²',
        readAs: 'perturbing a rule, not just a starting point',
        aliases: ['What survives when the correction rule itself changes?'],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'coordinate-chart',
        title: 'Coordinate chart',
        category: 'geometry',
        symbols: [],
        tokens: [],
        definition:
          'A map giving coordinates on an open part of a manifold, with an inverse onto an open coordinate domain. The chosen chart can fail at a point where the manifold remains smooth.',
        example: 'North and south stereographic charts together cover a sphere.',
        readAs: 'coordinate chart',
        aliases: ['local chart', 'chart domain'],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'stereographic-projection',
        title: 'Stereographic projection',
        category: 'geometry',
        symbols: [],
        tokens: [],
        definition:
          'Projection from a chosen point of a unit sphere or circle to its equatorial plane or line. The chosen pole is excluded from that chart.',
        example: 'From the north sphere pole, (u,v)=(x,y)/(1−z).',
        readAs: 'stereographic projection',
        aliases: ['stereographic chart'],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'unit-circle',
        title: 'Unit circle',
        category: 'geometry',
        symbols: ['S¹', 'S^1'],
        tokens: ['S¹', 'S^1'],
        definition:
          'The set of plane points (x,y) with x²+y²=1. This circle is a one-dimensional smooth manifold; it is not described by one global real-coordinate chart.',
        example: 'S¹={(x,y):x²+y²=1}.',
        readAs: 'unit circle',
        aliases: [],
        grammarCards: ['circle-manifold'],
        formulaCards: ['circle-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'unit-sphere',
        title: 'Unit sphere',
        category: 'geometry',
        symbols: ['S²', 'S^2'],
        tokens: ['S²', 'S^2'],
        definition:
          'The set of points (x,y,z) in three-dimensional space satisfying x²+y²+z²=1. Its surface is a two-dimensional manifold, distinct from the solid unit ball.',
        example: 'S²={(x,y,z):x²+y²+z²=1}.',
        readAs: 'unit sphere',
        aliases: [],
        grammarCards: ['sphere-manifold'],
        formulaCards: ['sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'chart-ambient-coordinate',
        title: 'Ambient coordinates of a charted point',
        category: 'geometry',
        symbols: ['x', 'y', 'z'],
        tokens: ['x', 'y', 'z'],
        definition:
          'The Cartesian coordinates of the point on the unit circle or unit sphere before projection. The circle uses x and y; the sphere also uses z. These coordinates describe the curved object in its surrounding space, while u and v describe its stereographic chart.',
        example: 'The sphere point (1,0,0) has north-chart coordinates (u,v)=(1,0).',
        readAs: 'ambient Cartesian coordinates',
        aliases: ['ambient coordinates', 'embedded coordinates'],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'projection-pole',
        title: 'Projection pole',
        category: 'geometry',
        symbols: ['P', 'N', 'S'],
        tokens: ['P', 'N', 'S'],
        definition:
          'The selected north or south point from which the projection line is drawn. A stereographic chart excludes that pole, while the opposite chart covers it.',
        example: 'Switch from the north chart to cover the north pole.',
        readAs: 'projection pole',
        aliases: ['chart pole'],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'stereographic-coordinate',
        title: 'Stereographic coordinates',
        category: 'geometry',
        symbols: ['u', 'v', 'u_N', 'u_S', 'v_N', 'v_S'],
        tokens: ['u', 'v', 'u_N', 'u_S', 'v_N', 'v_S'],
        definition:
          'The real coordinate on the circle chart or two real coordinates on the sphere chart. They describe a point locally and need not remain in a bounded drawing window.',
        example: 'At the sphere equator, the north-chart radius is one.',
        readAs: 'stereographic coordinates',
        aliases: ['chart coordinate'],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'chart-radius',
        title: 'Chart-plane radius',
        category: 'geometry',
        symbols: ['r'],
        tokens: ['r'],
        definition:
          'The Euclidean magnitude √(u²+v²) of the two coordinates in the chart plane. It changes with the point and chart even though the sphere radius is fixed at one.',
        example: 'The north sphere chart has radius cot((90°−φ)/2).',
        readAs: 'chart-plane radius',
        aliases: [],
        grammarCards: ['sphere-manifold'],
        formulaCards: ['sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'sphere-latitude',
        title: 'Latitude in the sphere model',
        category: 'geometry',
        symbols: ['φ'],
        tokens: ['φ'],
        definition:
          'Angle above the equatorial plane. Here x=cosφ cosλ, y=cosφ sinλ, and z=sinφ, with angles converted from degrees.',
        example: 'Latitude 90 degrees is the north pole.',
        readAs: 'latitude in the sphere model',
        aliases: ['latitude'],
        grammarCards: ['sphere-manifold'],
        formulaCards: ['sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'sphere-longitude',
        title: 'Longitude in the sphere model',
        category: 'geometry',
        symbols: ['λ'],
        tokens: ['λ'],
        definition:
          'The direction around the polar axis. At a pole its choice does not change the sphere point; away from the poles it sets the direction of the chart coordinate pair.',
        example: 'Longitude 90 degrees lies in the positive y direction at the equator.',
        readAs: 'longitude in the sphere model',
        aliases: ['longitude'],
        grammarCards: ['sphere-manifold'],
        formulaCards: ['sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'sweep-history',
        title: 'Sweep history',
        category: 'dynamics',
        symbols: ['H'],
        tokens: ['H'],
        definition:
          'The explicitly chosen path of control values, including which direction was followed first. In a hysteretic model the current control alone does not determine the state.',
        example: 'At b=0, an outward and returning sweep can occupy opposite wells.',
        readAs: 'sweep history',
        aliases: ['remembered branch', 'branch following'],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'hysteresis-sweep-index',
        title: 'History sweep index',
        category: 'dynamics',
        symbols: ['k'],
        tokens: ['k'],
        definition:
          'The whole-number position in the declared sequence of control settings. Advancing k changes the bias and retains the preceding stable root when selecting the next root. It counts quasi-static samples rather than elapsed physical time.',
        example: 'Two different sweep indices can visit b=0 with different remembered roots.',
        readAs: 'sweep index k',
        aliases: ['history sweep index'],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'hysteresis-potential',
        title: 'Double-well hysteresis potential',
        category: 'dynamics',
        symbols: ['V', 'V(x;b)'],
        tokens: ['V', 'V(x;b)'],
        definition:
          'The quartic potential V(x;b)=x⁴/4−x²/2−bx. Its stationary points solve x³−x−b=0, and a positive second derivative 3x²−1 selects local minima. The history rule follows a stable branch and does not require selecting the lowest minimum.',
        example: 'At b=0, V has stable minima at x=−1 and x=1.',
        readAs: 'potential V at position x and bias b',
        aliases: ['double-well potential'],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'hysteresis-control',
        title: 'Hysteresis control parameter',
        category: 'dynamics',
        symbols: ['b'],
        tokens: ['b'],
        definition:
          'The present bias in the quartic potential x⁴/4−x²/2−b x. Different histories can reach this same bias with different selected stable roots.',
        example: 'The bias zero is visited twice in the declared cycle.',
        readAs: 'hysteresis control parameter',
        aliases: [],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'hysteresis-position',
        title: 'Remembered equilibrium position',
        category: 'dynamics',
        symbols: ['x'],
        tokens: ['x'],
        definition:
          'The stable stationary point selected by the declared previous history. It is a quasi-static resting position, not the transient motion during a snap.',
        example: 'The same b=0 can select x≈−1 or x≈1.',
        readAs: 'remembered equilibrium position',
        aliases: [],
        grammarCards: ['hysteresis'],
        formulaCards: ['hysteresis'],
        sourceKeys: ['dynamics_hysteresis']
      },
      {
        id: 'gradient-flow-potential',
        title: 'Potential along a gradient flow',
        category: 'dynamics',
        symbols: ['V', 'V(x,y)'],
        tokens: ['V', 'V(x,y)'],
        definition:
          'The scalar function whose negative gradient supplies the velocity field. Along this quadratic gradient flow its derivative is minus the squared gradient norm.',
        example: 'V=(a x²+b y²)/2; dV/dt=−‖∇V‖².',
        readAs: 'potential along a gradient flow',
        aliases: ['Lyapunov potential'],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'gradient-flow-rate',
        title: 'Gradient-flow return coefficients',
        category: 'dynamics',
        symbols: ['a', 'b'],
        tokens: ['a', 'b'],
        definition:
          'The positive coefficients controlling horizontal and vertical continuous-time correction. They are rates in the differential equation, not numerical time steps.',
        example: 'x(t)=2exp(−a t), y(t)=exp(−b t).',
        readAs: 'gradient-flow return coefficients',
        aliases: [],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'gradient-flow-position',
        title: 'Gradient-flow position',
        category: 'dynamics',
        symbols: ['x', 'y'],
        tokens: ['x', 'y'],
        definition:
          'The two coordinates of the same continuous trajectory, evaluated analytically from the fixed start (2,1).',
        example: 'At t=0, x=2 and y=1.',
        readAs: 'gradient-flow position',
        aliases: [],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'rule-perturbation',
        title: 'Perturbation of a dynamical rule',
        category: 'dynamics',
        symbols: ['ε'],
        tokens: ['ε'],
        definition:
          'A change to the function specifying velocity, distinct from a change of initial state. This lesson varies one additive offset in either of two declared families.',
        example: '−x becomes −x+ε.',
        readAs: 'perturbation of a dynamical rule',
        aliases: ['rule perturbation'],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'phase-rule-family',
        title: 'Selected rule family',
        category: 'dynamics',
        symbols: ['F'],
        tokens: ['F'],
        definition:
          'The choice between the attracting linear rule and critical fold rule. It is a categorical model choice, not an additional real parameter.',
        example: 'Compare −x+ε with ε−x².',
        readAs: 'selected rule family',
        aliases: [],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'perturbed-equilibrium-count',
        title: 'Perturbed equilibrium count',
        category: 'dynamics',
        symbols: ['n'],
        tokens: ['n'],
        definition:
          'The number of real zeros of the selected perturbed velocity rule. A zero derivative at a critical root requires nonlinear analysis, not a stable/unstable label from linearization alone.',
        example:
          'The fold rule has zero, one double, or two real roots according to the offset sign.',
        readAs: 'perturbed equilibrium count',
        aliases: [],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'perturbed-equilibrium-position',
        title: 'Perturbed equilibrium position',
        category: 'dynamics',
        symbols: ['x_*'],
        tokens: ['x_*'],
        definition:
          'A real zero of the selected velocity function. Positive and negative simple fold roots have different local attraction properties.',
        example: 'For ε>0 in ε−x², x*=±√ε.',
        readAs: 'perturbed equilibrium position',
        aliases: [],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'hyperbolic-equilibrium',
        title: 'Hyperbolic equilibrium',
        category: 'dynamics',
        symbols: [],
        tokens: [],
        definition:
          'An equilibrium whose linearization has no eigenvalues with zero real part. In one dimension a nonzero derivative gives this condition; the linear example has derivative −1.',
        example: 'The equilibrium x=ε of −x+ε stays attracting.',
        readAs: 'hyperbolic equilibrium',
        aliases: ['hyperbolic fixed point'],
        grammarCards: ['structural-stability'],
        formulaCards: ['structural-stability'],
        sourceKeys: ['dynamics_structural']
      },
      {
        id: 'chart-coordinate-unit',
        title: 'Chart coordinate units',
        category: 'units',
        symbols: ['chart units'],
        tokens: ['chart units'],
        definition:
          'A declared unit for real coordinates in the projection line or plane. A chart-coordinate distance is not automatically a geodesic or physical distance on the curved object.',
        example: 'A unit sphere can have a chart coordinate of ten.',
        readAs: 'chart coordinate units',
        aliases: [],
        grammarCards: ['circle-manifold', 'sphere-manifold'],
        formulaCards: ['circle-manifold', 'sphere-manifold'],
        sourceKeys: ['dynamics_charts']
      },
      {
        id: 'model-time-unit',
        title: 'Model time unit',
        category: 'units',
        symbols: ['time units'],
        tokens: ['time units'],
        definition:
          'The declared time scale of this illustrative continuous correction. It is distinct from an iteration or history-step count.',
        example: 't=1 is one model time unit.',
        readAs: 'model time unit',
        aliases: [],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'model-return-rate-unit',
        title: 'Inverse model time',
        category: 'units',
        symbols: ['per time unit'],
        tokens: ['per time unit'],
        definition:
          'The inverse time dimension of the coefficients a and b in the differential equation. It is not a numerical step length.',
        example: 'a=1 per time unit.',
        readAs: 'inverse model time',
        aliases: [],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      },
      {
        id: 'model-cost-unit',
        title: 'Model potential units',
        category: 'units',
        symbols: ['cost units'],
        tokens: ['cost units'],
        definition:
          'A declared scale for the constructed quadratic potential. It is not asserted to be joules or a measured financial cost.',
        example: 'V starts at 2a+b/2 cost units.',
        readAs: 'model potential units',
        aliases: [],
        grammarCards: ['gradient-flow'],
        formulaCards: ['gradient-flow'],
        sourceKeys: ['dynamics_gradient']
      }
    ],
    sources: {
      dynamics_hysteresis: {
        title: 'Joel W. Robbin · Thom’s Catastrophe Theory',
        url: 'https://people.math.wisc.edu/~jwrobbin/catastrophe/catastrophe_talk.pdf'
      },
      dynamics_gradient: {
        title: 'Gautam Iyer · Lyapunov functions and Stability',
        url: 'https://www.math.cmu.edu/~gautam/c/2026-632/notes/stability.html'
      },
      dynamics_charts: {
        title: 'Peter Petersen · Manifolds, Transversality, and de Rham Cohomology',
        url: 'https://www.math.ucla.edu/~petersen/manifolds.pdf'
      },
      dynamics_structural: {
        title: 'Rahman and Blackmore · One-dimensional structural stability',
        url: 'https://arxiv.org/abs/2302.04941'
      }
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(data);
  return data;
});
