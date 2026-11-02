/* Authored continuation data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDynamicsExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:dynamics-extension:hysteresis',
        slug: 'hysteresis',
        scene: 'hysteresis-continuation',
        unit: 'position units',
        title: 'Why can the same dial setting hold two different positions?',
        eyebrow: 'History, movement and local coordinates',
        presentation: {
          compact: true,
          controlHint:
            'Change one declared input and follow the same state through text, calculation and marks.'
        },
        summary:
          'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.',
        context:
          'A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.',
        question: 'Why can the same dial setting hold two different positions?',
        variables: [
          {
            key: 'steps',
            label: 'Sweep step k',
            min: 0,
            max: 80,
            step: 1,
            unit: 'steps',
            discrete: true,
            symbol: 'k'
          }
        ],
        parameters: {
          steps: 20,
          history: 'up-down'
        },
        timeline: {
          key: 'steps',
          from: 0,
          to: 80,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the mathematical object in view',
            body: 'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.',
            formula: 'x³ − x − b = 0; retain the nearest stable branch',
            focusLabel: 'The object and the rule',
            focusDescription:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Sweep step k',
            body: 'Sweep step k is {{steps}}. Follow that input in the selected model.',
            formula: 'k={{steps}}',
            focusLabel: 'Selected input',
            focusDescription:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.',
            formula: 'b={{bias}}; selected x={{currentX}}; switches={{snaps}}',
            focusLabel: 'The evaluated intermediate quantities',
            focusDescription:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The selected resting position is {{output}} on the {{branch}} branch.',
            formula: 'b={{bias}}; selected x={{currentX}}; switches={{snaps}}',
            focusLabel: 'Current result',
            focusDescription:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Select the history',
            template: 'k={{steps}}; {{phase}}',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            role: 'intermediate',
            label: 'Read the current control',
            template: 'b={{bias}}',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            role: 'output',
            label: 'Keep the remembered branch',
            template: 'x={{output}}; {{branch}} branch',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          }
        ]
      },
      {
        id: 'story:dynamics-extension:gradient-flow',
        slug: 'gradient-flow',
        scene: 'gradient-flow-continuation',
        unit: 'cost units',
        title: 'What makes a continuously corrected position lose potential?',
        eyebrow: 'History, movement and local coordinates',
        presentation: {
          compact: true,
          controlHint:
            'Change one declared input and follow the same state through text, calculation and marks.'
        },
        summary:
          'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.',
        context:
          'An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.',
        question: 'What makes a continuously corrected position lose potential?',
        variables: [
          {
            key: 'time',
            label: 'Elapsed time t',
            min: 0,
            max: 5,
            step: 0.05,
            unit: 'time units',
            symbol: 't'
          },
          {
            key: 'a',
            label: 'Horizontal return rate a',
            min: 0.25,
            max: 2,
            step: 0.05,
            unit: 'per time unit',
            symbol: 'a'
          },
          {
            key: 'b',
            label: 'Vertical return rate b',
            min: 0.25,
            max: 2,
            step: 0.05,
            unit: 'per time unit',
            symbol: 'b'
          }
        ],
        parameters: {
          time: 1,
          a: 1,
          b: 0.5
        },
        timeline: {
          key: 'time',
          from: 0,
          to: 5,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the mathematical object in view',
            body: 'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.',
            formula: 'ṙ = −∇V; dV/dt = −‖∇V‖²',
            focusLabel: 'The object and the rule',
            focusDescription:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Elapsed time t',
            body: 'Elapsed time t is {{time}}. Follow that input in the selected model.',
            formula: 't={{time}}',
            focusLabel: 'Selected input',
            focusDescription:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.',
            formula: 'x={{x}}; y={{y}}; V={{cost}}; dV/dt={{dissipation}}',
            focusLabel: 'The evaluated intermediate quantities',
            focusDescription:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The potential is {{output}}, with rate of change {{dissipation}}.',
            formula: 'x={{x}}; y={{y}}; V={{cost}}; dV/dt={{dissipation}}',
            focusLabel: 'Current result',
            focusDescription:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the elapsed time',
            template: 't={{time}}',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            role: 'intermediate',
            label: 'Resolve the two coordinates',
            template: 'x={{x}}; y={{y}}',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            role: 'output',
            label: 'Read the falling cost',
            template: 'V={{output}}; dV/dt={{dissipation}}',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          }
        ]
      },
      {
        id: 'story:dynamics-extension:circle-manifold',
        slug: 'circle-manifold',
        scene: 'circle-manifold-continuation',
        unit: 'chart units',
        title: 'Can a smooth circle need a second coordinate map?',
        eyebrow: 'History, movement and local coordinates',
        presentation: {
          compact: true,
          controlHint:
            'Change one declared input and follow the same state through text, calculation and marks.'
        },
        summary:
          'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.',
        context:
          'A marker moves around a circular track. To give its position one straight-line coordinate, project a line from a chosen pole through the marker. The coordinate grows large near that pole and is unavailable at the pole itself. Switch the projection pole: the track and marker stay in place while their coordinate changes.',
        question: 'Can a smooth circle need a second coordinate map?',
        variables: [
          {
            key: 'angle',
            label: 'Position angle θ (degrees)',
            min: -180,
            max: 180,
            step: 1,
            unit: 'degrees',
            symbol: 'θ'
          }
        ],
        parameters: {
          angle: 30,
          pole: 'north'
        },
        timeline: {
          key: 'angle',
          from: -180,
          to: 180,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the mathematical object in view',
            body: 'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.',
            formula: 'u = x/(1−y) or x/(1+y)',
            focusLabel: 'The object and the rule',
            focusDescription:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Position angle θ (degrees)',
            body: 'Position angle θ (degrees) is {{angle}}. Follow that input in the selected model.',
            formula: 'θ={{angle}}',
            focusLabel: 'Selected input',
            focusDescription:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.',
            formula: 'Point ({{x}},{{y}}); u≈{{x}} / {{denominator}} ≈ {{output}}',
            focusLabel: 'The evaluated intermediate quantities',
            focusDescription:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The chart coordinate is {{output}}; the chosen chart can omit its own pole.',
            formula: 'Point ({{x}},{{y}}); u≈{{x}} / {{denominator}} ≈ {{output}}',
            focusLabel: 'Current result',
            focusDescription:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the track position',
            template: 'θ={{angle}} degrees; {{chartLabel}}',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            role: 'intermediate',
            label: 'Locate the circle point',
            template: 'Point ({{x}},{{y}}); denominator≈{{denominator}}',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            role: 'output',
            label: 'Read the chosen chart',
            template: 'u≈{{x}} / {{denominator}} ≈ {{output}}',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          }
        ]
      },
      {
        id: 'story:dynamics-extension:sphere-manifold',
        slug: 'sphere-manifold',
        scene: 'sphere-manifold-continuation',
        unit: 'chart units',
        title: 'How can a curved sphere have two local coordinates?',
        eyebrow: 'History, movement and local coordinates',
        presentation: {
          compact: true,
          controlHint:
            'Change one declared input and follow the same state through text, calculation and marks.'
        },
        summary:
          'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.',
        context:
          'Place a marker on a globe and choose a projection pole. A line through that pole maps the marker to a coordinate plane. Change latitude, longitude or the projection pole. The globe point and its two plane coordinates are shown separately, so a missing coordinate at a pole is not mistaken for a defect in the globe.',
        question: 'How can a curved sphere have two local coordinates?',
        variables: [
          {
            key: 'latitude',
            label: 'Latitude φ (degrees)',
            min: -90,
            max: 90,
            step: 1,
            unit: 'degrees',
            symbol: 'φ'
          },
          {
            key: 'longitude',
            label: 'Longitude λ (degrees)',
            min: -180,
            max: 180,
            step: 1,
            unit: 'degrees',
            symbol: 'λ'
          }
        ],
        parameters: {
          latitude: 20,
          longitude: 35,
          pole: 'north'
        },
        timeline: {
          key: 'latitude',
          from: -90,
          to: 90,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the mathematical object in view',
            body: 'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.',
            formula: '(u,v) = (x,y)/(1−z) or (x,y)/(1+z)',
            focusLabel: 'The object and the rule',
            focusDescription:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Latitude φ (degrees)',
            body: 'Latitude φ (degrees) is {{latitude}}. Follow that input in the selected model.',
            formula: 'φ={{latitude}}',
            focusLabel: 'Selected input',
            focusDescription:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.',
            formula: '(u,v)=({{u}},{{v}}); plane radius={{output}}',
            focusLabel: 'The evaluated intermediate quantities',
            focusDescription:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The chart-plane radius is {{output}}. The sphere itself still has radius one.',
            formula: '(u,v)=({{u}},{{v}}); plane radius={{output}}',
            focusLabel: 'Current result',
            focusDescription:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the globe location',
            template: 'φ={{latitude}}; λ={{longitude}} degrees; {{chartLabel}}',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            role: 'intermediate',
            label: 'Locate the sphere point',
            template: '(u,v)≈({{x}},{{y}})/{{denominator}}',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            role: 'output',
            label: 'Read two plane coordinates',
            template: 'u={{u}}; v={{v}}; radius={{output}}',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          }
        ]
      },
      {
        id: 'story:dynamics-extension:structural-stability',
        slug: 'structural-stability',
        scene: 'structural-stability-continuation',
        unit: 'equilibria',
        title: 'What survives when the correction rule itself changes?',
        eyebrow: 'History, movement and local coordinates',
        presentation: {
          compact: true,
          controlHint:
            'Change one declared input and follow the same state through text, calculation and marks.'
        },
        summary:
          'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.',
        context:
          'Compare two toy alignment rules. One always pulls toward a shifted target; the other is balanced at a fold. Move a small offset in the rule rather than moving the starting position. One family keeps a single attracting balance point, while the critical family can gain or lose balance points.',
        question: 'What survives when the correction rule itself changes?',
        variables: [
          {
            key: 'perturbation',
            label: 'Rule perturbation ε',
            min: -0.5,
            max: 0.5,
            step: 0.01,
            unit: 'model units',
            symbol: 'ε'
          }
        ],
        parameters: {
          perturbation: 0.2,
          family: 'hyperbolic'
        },
        timeline: {
          key: 'perturbation',
          from: -0.5,
          to: 0.5,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the mathematical object in view',
            body: 'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.',
            formula: 'fε(x)=−x+ε or ε−x²',
            focusLabel: 'The object and the rule',
            focusDescription:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Rule perturbation ε',
            body: 'Rule perturbation ε is {{perturbation}}. Follow that input in the selected model.',
            formula: 'ε={{perturbation}}',
            focusLabel: 'Selected input',
            focusDescription:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.',
            formula: 'ε={{perturbation}}; equilibria={{output}}; {{classification}}',
            focusLabel: 'The evaluated intermediate quantities',
            focusDescription:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'There are {{output}} equilibria. {{classification}}.',
            formula: 'ε={{perturbation}}; equilibria={{output}}; {{classification}}',
            focusLabel: 'Current result',
            focusDescription:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Change the rule offset',
            template: 'ε={{perturbation}}',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            role: 'intermediate',
            label: 'Solve for balance',
            template: 'Roots: {{rootLabel}}',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            role: 'output',
            label: 'Compare the phase pattern',
            template: '{{output}} equilibria; {{classification}}',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          }
        ]
      }
    ],
    quantities: {
      hysteresis: {
        steps: {
          label: 'Sweep step k',
          role: 'input',
          unit: 'steps',
          description:
            'The declared Sweep step k input, under the conditions of this bounded mathematical family.'
        },
        history: {
          label: 'Initial sweep direction',
          role: 'input',
          unit: '',
          description:
            'The declared Initial sweep direction input, under the conditions of this bounded mathematical family.'
        },
        output: {
          label: 'Hysteresis and remembered branches result',
          role: 'output',
          unit: 'position units',
          description:
            'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
        },
        bias: {
          label: 'Current dial control',
          role: 'intermediate',
          unit: '',
          description: 'The current control on the declared outward or returning sweep.'
        },
        currentX: {
          label: 'Selected resting position',
          role: 'output',
          unit: '',
          description: 'The numerical stable root retained by the declared preceding history.'
        },
        branch: {
          label: 'Remembered well',
          role: 'output',
          unit: '',
          description: 'Names the left or right stable branch currently retained.'
        },
        snaps: {
          label: 'Completed branch switches',
          role: 'intermediate',
          unit: '',
          description: 'Counts switches in the displayed history, not an observed switching rate.'
        },
        phase: {
          label: 'Current sweep direction',
          role: 'input',
          unit: '',
          description: 'Distinguishes the first sweep from the return through the same controls.'
        },
        x: {
          label: 'Horizontal position',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal component of the same point or exact trajectory.'
        },
        y: {
          label: 'Vertical or second position',
          role: 'intermediate',
          unit: '',
          description: 'The second component of the same point in its stated coordinate frame.'
        },
        z: {
          label: 'Sphere height coordinate',
          role: 'intermediate',
          unit: '',
          description: 'The third Cartesian component of the unit-sphere point.'
        },
        cost: {
          label: 'Current quadratic potential',
          role: 'output',
          unit: '',
          description: 'The potential evaluated at the current exact continuous-time position.'
        },
        dissipation: {
          label: 'Rate of potential change',
          role: 'intermediate',
          unit: '',
          description: 'Minus the squared gradient norm along this exact gradient-flow solution.'
        },
        gradientX: {
          label: 'Horizontal gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal derivative a x of the quadratic potential.'
        },
        gradientY: {
          label: 'Vertical gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The vertical derivative b y of the quadratic potential.'
        },
        u: {
          label: 'First chart coordinate',
          role: 'output',
          unit: '',
          description:
            'Numerical coordinate in the selected stereographic chart, absent at its own pole.'
        },
        v: {
          label: 'Second chart coordinate',
          role: 'output',
          unit: '',
          description: 'The second plane coordinate in the selected sphere chart.'
        },
        denominator: {
          label: 'Projection denominator',
          role: 'intermediate',
          unit: '',
          description: 'The selected denominator 1 minus or plus the pole-axis component.'
        },
        chartRadius: {
          label: 'Radius in the chart plane',
          role: 'output',
          unit: '',
          description:
            'Euclidean magnitude of the two chart coordinates, not the radius of the sphere.'
        },
        rootLabel: {
          label: 'Real balance positions',
          role: 'intermediate',
          unit: '',
          description: 'Names every real zero of the selected perturbed velocity rule.'
        },
        classification: {
          label: 'Current phase-pattern interpretation',
          role: 'output',
          unit: '',
          description: 'Explains the equilibrium pattern in the currently selected family.'
        },
        roots: {
          label: 'Real equilibrium positions',
          role: 'output',
          unit: '',
          description: 'All real equilibrium locations for the selected perturbed velocity rule.'
        },
        potential: {
          label: 'Potential at the remembered position',
          role: 'intermediate',
          unit: '',
          description: 'The quartic potential evaluated at the selected stable equilibrium.'
        }
      },
      'gradient-flow': {
        time: {
          label: 'Elapsed time t',
          role: 'input',
          unit: 'time units',
          description:
            'The declared Elapsed time t input, under the conditions of this bounded mathematical family.'
        },
        a: {
          label: 'Horizontal return rate a',
          role: 'input',
          unit: 'per time unit',
          description:
            'The declared Horizontal return rate a input, under the conditions of this bounded mathematical family.'
        },
        b: {
          label: 'Vertical return rate b',
          role: 'input',
          unit: 'per time unit',
          description:
            'The declared Vertical return rate b input, under the conditions of this bounded mathematical family.'
        },
        output: {
          label: 'Gradient flow and falling potential result',
          role: 'output',
          unit: 'cost units',
          description:
            'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
        },
        bias: {
          label: 'Current dial control',
          role: 'intermediate',
          unit: '',
          description: 'The current control on the declared outward or returning sweep.'
        },
        currentX: {
          label: 'Selected resting position',
          role: 'output',
          unit: '',
          description: 'The numerical stable root retained by the declared preceding history.'
        },
        branch: {
          label: 'Remembered well',
          role: 'output',
          unit: '',
          description: 'Names the left or right stable branch currently retained.'
        },
        snaps: {
          label: 'Completed branch switches',
          role: 'intermediate',
          unit: '',
          description: 'Counts switches in the displayed history, not an observed switching rate.'
        },
        phase: {
          label: 'Current sweep direction',
          role: 'input',
          unit: '',
          description: 'Distinguishes the first sweep from the return through the same controls.'
        },
        x: {
          label: 'Horizontal position',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal component of the same point or exact trajectory.'
        },
        y: {
          label: 'Vertical or second position',
          role: 'intermediate',
          unit: '',
          description: 'The second component of the same point in its stated coordinate frame.'
        },
        z: {
          label: 'Sphere height coordinate',
          role: 'intermediate',
          unit: '',
          description: 'The third Cartesian component of the unit-sphere point.'
        },
        cost: {
          label: 'Current quadratic potential',
          role: 'output',
          unit: '',
          description: 'The potential evaluated at the current exact continuous-time position.'
        },
        dissipation: {
          label: 'Rate of potential change',
          role: 'intermediate',
          unit: '',
          description: 'Minus the squared gradient norm along this exact gradient-flow solution.'
        },
        gradientX: {
          label: 'Horizontal gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal derivative a x of the quadratic potential.'
        },
        gradientY: {
          label: 'Vertical gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The vertical derivative b y of the quadratic potential.'
        },
        u: {
          label: 'First chart coordinate',
          role: 'output',
          unit: '',
          description:
            'Numerical coordinate in the selected stereographic chart, absent at its own pole.'
        },
        v: {
          label: 'Second chart coordinate',
          role: 'output',
          unit: '',
          description: 'The second plane coordinate in the selected sphere chart.'
        },
        denominator: {
          label: 'Projection denominator',
          role: 'intermediate',
          unit: '',
          description: 'The selected denominator 1 minus or plus the pole-axis component.'
        },
        chartRadius: {
          label: 'Radius in the chart plane',
          role: 'output',
          unit: '',
          description:
            'Euclidean magnitude of the two chart coordinates, not the radius of the sphere.'
        },
        rootLabel: {
          label: 'Real balance positions',
          role: 'intermediate',
          unit: '',
          description: 'Names every real zero of the selected perturbed velocity rule.'
        },
        classification: {
          label: 'Current phase-pattern interpretation',
          role: 'output',
          unit: '',
          description: 'Explains the equilibrium pattern in the currently selected family.'
        },
        roots: {
          label: 'Real equilibrium positions',
          role: 'output',
          unit: '',
          description: 'All real equilibrium locations for the selected perturbed velocity rule.'
        },
        potential: {
          label: 'Potential at the remembered position',
          role: 'intermediate',
          unit: '',
          description: 'The quartic potential evaluated at the selected stable equilibrium.'
        }
      },
      'circle-manifold': {
        angle: {
          label: 'Position angle θ (degrees)',
          role: 'input',
          unit: 'degrees',
          description:
            'The declared Position angle θ (degrees) input, under the conditions of this bounded mathematical family.'
        },
        pole: {
          label: 'Projection pole',
          role: 'input',
          unit: '',
          description:
            'The declared Projection pole input, under the conditions of this bounded mathematical family.'
        },
        output: {
          label: 'A circle needs more than one chart result',
          role: 'output',
          unit: 'chart units',
          description:
            'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
        },
        bias: {
          label: 'Current dial control',
          role: 'intermediate',
          unit: '',
          description: 'The current control on the declared outward or returning sweep.'
        },
        currentX: {
          label: 'Selected resting position',
          role: 'output',
          unit: '',
          description: 'The numerical stable root retained by the declared preceding history.'
        },
        branch: {
          label: 'Remembered well',
          role: 'output',
          unit: '',
          description: 'Names the left or right stable branch currently retained.'
        },
        snaps: {
          label: 'Completed branch switches',
          role: 'intermediate',
          unit: '',
          description: 'Counts switches in the displayed history, not an observed switching rate.'
        },
        phase: {
          label: 'Current sweep direction',
          role: 'input',
          unit: '',
          description: 'Distinguishes the first sweep from the return through the same controls.'
        },
        x: {
          label: 'Horizontal position',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal component of the same point or exact trajectory.'
        },
        y: {
          label: 'Vertical or second position',
          role: 'intermediate',
          unit: '',
          description: 'The second component of the same point in its stated coordinate frame.'
        },
        z: {
          label: 'Sphere height coordinate',
          role: 'intermediate',
          unit: '',
          description: 'The third Cartesian component of the unit-sphere point.'
        },
        cost: {
          label: 'Current quadratic potential',
          role: 'output',
          unit: '',
          description: 'The potential evaluated at the current exact continuous-time position.'
        },
        dissipation: {
          label: 'Rate of potential change',
          role: 'intermediate',
          unit: '',
          description: 'Minus the squared gradient norm along this exact gradient-flow solution.'
        },
        gradientX: {
          label: 'Horizontal gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal derivative a x of the quadratic potential.'
        },
        gradientY: {
          label: 'Vertical gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The vertical derivative b y of the quadratic potential.'
        },
        u: {
          label: 'First chart coordinate',
          role: 'output',
          unit: '',
          description:
            'Numerical coordinate in the selected stereographic chart, absent at its own pole.'
        },
        v: {
          label: 'Second chart coordinate',
          role: 'output',
          unit: '',
          description: 'The second plane coordinate in the selected sphere chart.'
        },
        denominator: {
          label: 'Projection denominator',
          role: 'intermediate',
          unit: '',
          description: 'The selected denominator 1 minus or plus the pole-axis component.'
        },
        chartRadius: {
          label: 'Radius in the chart plane',
          role: 'output',
          unit: '',
          description:
            'Euclidean magnitude of the two chart coordinates, not the radius of the sphere.'
        },
        rootLabel: {
          label: 'Real balance positions',
          role: 'intermediate',
          unit: '',
          description: 'Names every real zero of the selected perturbed velocity rule.'
        },
        classification: {
          label: 'Current phase-pattern interpretation',
          role: 'output',
          unit: '',
          description: 'Explains the equilibrium pattern in the currently selected family.'
        },
        roots: {
          label: 'Real equilibrium positions',
          role: 'output',
          unit: '',
          description: 'All real equilibrium locations for the selected perturbed velocity rule.'
        },
        potential: {
          label: 'Potential at the remembered position',
          role: 'intermediate',
          unit: '',
          description: 'The quartic potential evaluated at the selected stable equilibrium.'
        }
      },
      'sphere-manifold': {
        latitude: {
          label: 'Latitude φ (degrees)',
          role: 'input',
          unit: 'degrees',
          description:
            'The declared Latitude φ (degrees) input, under the conditions of this bounded mathematical family.'
        },
        longitude: {
          label: 'Longitude λ (degrees)',
          role: 'input',
          unit: 'degrees',
          description:
            'The declared Longitude λ (degrees) input, under the conditions of this bounded mathematical family.'
        },
        pole: {
          label: 'Projection pole',
          role: 'input',
          unit: '',
          description:
            'The declared Projection pole input, under the conditions of this bounded mathematical family.'
        },
        output: {
          label: 'Local coordinates on a sphere result',
          role: 'output',
          unit: 'chart units',
          description:
            'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
        },
        bias: {
          label: 'Current dial control',
          role: 'intermediate',
          unit: '',
          description: 'The current control on the declared outward or returning sweep.'
        },
        currentX: {
          label: 'Selected resting position',
          role: 'output',
          unit: '',
          description: 'The numerical stable root retained by the declared preceding history.'
        },
        branch: {
          label: 'Remembered well',
          role: 'output',
          unit: '',
          description: 'Names the left or right stable branch currently retained.'
        },
        snaps: {
          label: 'Completed branch switches',
          role: 'intermediate',
          unit: '',
          description: 'Counts switches in the displayed history, not an observed switching rate.'
        },
        phase: {
          label: 'Current sweep direction',
          role: 'input',
          unit: '',
          description: 'Distinguishes the first sweep from the return through the same controls.'
        },
        x: {
          label: 'Horizontal position',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal component of the same point or exact trajectory.'
        },
        y: {
          label: 'Vertical or second position',
          role: 'intermediate',
          unit: '',
          description: 'The second component of the same point in its stated coordinate frame.'
        },
        z: {
          label: 'Sphere height coordinate',
          role: 'intermediate',
          unit: '',
          description: 'The third Cartesian component of the unit-sphere point.'
        },
        cost: {
          label: 'Current quadratic potential',
          role: 'output',
          unit: '',
          description: 'The potential evaluated at the current exact continuous-time position.'
        },
        dissipation: {
          label: 'Rate of potential change',
          role: 'intermediate',
          unit: '',
          description: 'Minus the squared gradient norm along this exact gradient-flow solution.'
        },
        gradientX: {
          label: 'Horizontal gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal derivative a x of the quadratic potential.'
        },
        gradientY: {
          label: 'Vertical gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The vertical derivative b y of the quadratic potential.'
        },
        u: {
          label: 'First chart coordinate',
          role: 'output',
          unit: '',
          description:
            'Numerical coordinate in the selected stereographic chart, absent at its own pole.'
        },
        v: {
          label: 'Second chart coordinate',
          role: 'output',
          unit: '',
          description: 'The second plane coordinate in the selected sphere chart.'
        },
        denominator: {
          label: 'Projection denominator',
          role: 'intermediate',
          unit: '',
          description: 'The selected denominator 1 minus or plus the pole-axis component.'
        },
        chartRadius: {
          label: 'Radius in the chart plane',
          role: 'output',
          unit: '',
          description:
            'Euclidean magnitude of the two chart coordinates, not the radius of the sphere.'
        },
        rootLabel: {
          label: 'Real balance positions',
          role: 'intermediate',
          unit: '',
          description: 'Names every real zero of the selected perturbed velocity rule.'
        },
        classification: {
          label: 'Current phase-pattern interpretation',
          role: 'output',
          unit: '',
          description: 'Explains the equilibrium pattern in the currently selected family.'
        },
        roots: {
          label: 'Real equilibrium positions',
          role: 'output',
          unit: '',
          description: 'All real equilibrium locations for the selected perturbed velocity rule.'
        },
        potential: {
          label: 'Potential at the remembered position',
          role: 'intermediate',
          unit: '',
          description: 'The quartic potential evaluated at the selected stable equilibrium.'
        }
      },
      'structural-stability': {
        perturbation: {
          label: 'Rule perturbation ε',
          role: 'input',
          unit: 'model units',
          description:
            'The declared Rule perturbation ε input, under the conditions of this bounded mathematical family.'
        },
        family: {
          label: 'Rule family',
          role: 'input',
          unit: '',
          description:
            'The declared Rule family input, under the conditions of this bounded mathematical family.'
        },
        output: {
          label: 'Perturbing a rule, not just a starting point result',
          role: 'output',
          unit: 'equilibria',
          description:
            'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
        },
        bias: {
          label: 'Current dial control',
          role: 'intermediate',
          unit: '',
          description: 'The current control on the declared outward or returning sweep.'
        },
        currentX: {
          label: 'Selected resting position',
          role: 'output',
          unit: '',
          description: 'The numerical stable root retained by the declared preceding history.'
        },
        branch: {
          label: 'Remembered well',
          role: 'output',
          unit: '',
          description: 'Names the left or right stable branch currently retained.'
        },
        snaps: {
          label: 'Completed branch switches',
          role: 'intermediate',
          unit: '',
          description: 'Counts switches in the displayed history, not an observed switching rate.'
        },
        phase: {
          label: 'Current sweep direction',
          role: 'input',
          unit: '',
          description: 'Distinguishes the first sweep from the return through the same controls.'
        },
        x: {
          label: 'Horizontal position',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal component of the same point or exact trajectory.'
        },
        y: {
          label: 'Vertical or second position',
          role: 'intermediate',
          unit: '',
          description: 'The second component of the same point in its stated coordinate frame.'
        },
        z: {
          label: 'Sphere height coordinate',
          role: 'intermediate',
          unit: '',
          description: 'The third Cartesian component of the unit-sphere point.'
        },
        cost: {
          label: 'Current quadratic potential',
          role: 'output',
          unit: '',
          description: 'The potential evaluated at the current exact continuous-time position.'
        },
        dissipation: {
          label: 'Rate of potential change',
          role: 'intermediate',
          unit: '',
          description: 'Minus the squared gradient norm along this exact gradient-flow solution.'
        },
        gradientX: {
          label: 'Horizontal gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The horizontal derivative a x of the quadratic potential.'
        },
        gradientY: {
          label: 'Vertical gradient component',
          role: 'intermediate',
          unit: '',
          description: 'The vertical derivative b y of the quadratic potential.'
        },
        u: {
          label: 'First chart coordinate',
          role: 'output',
          unit: '',
          description:
            'Numerical coordinate in the selected stereographic chart, absent at its own pole.'
        },
        v: {
          label: 'Second chart coordinate',
          role: 'output',
          unit: '',
          description: 'The second plane coordinate in the selected sphere chart.'
        },
        denominator: {
          label: 'Projection denominator',
          role: 'intermediate',
          unit: '',
          description: 'The selected denominator 1 minus or plus the pole-axis component.'
        },
        chartRadius: {
          label: 'Radius in the chart plane',
          role: 'output',
          unit: '',
          description:
            'Euclidean magnitude of the two chart coordinates, not the radius of the sphere.'
        },
        rootLabel: {
          label: 'Real balance positions',
          role: 'intermediate',
          unit: '',
          description: 'Names every real zero of the selected perturbed velocity rule.'
        },
        classification: {
          label: 'Current phase-pattern interpretation',
          role: 'output',
          unit: '',
          description: 'Explains the equilibrium pattern in the currently selected family.'
        },
        roots: {
          label: 'Real equilibrium positions',
          role: 'output',
          unit: '',
          description: 'All real equilibrium locations for the selected perturbed velocity rule.'
        },
        potential: {
          label: 'Potential at the remembered position',
          role: 'intermediate',
          unit: '',
          description: 'The quartic potential evaluated at the selected stable equilibrium.'
        }
      }
    },
    links: {
      hysteresis: {
        variableKey: 'steps',
        symbol: 'k',
        variableLabel: 'Sweep step k',
        unit: 'steps',
        effectLabel:
          'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.',
        steps: [
          {
            focus: 'reference',
            label: 'The object and the rule',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            focus: 'input',
            label: 'Selected input',
            description:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            focus: 'intermediate',
            label: 'The evaluated intermediate quantities',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          },
          {
            focus: 'output',
            label: 'Current result',
            description:
              'At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.'
          }
        ]
      },
      'gradient-flow': {
        variableKey: 'time',
        symbol: 't',
        variableLabel: 'Elapsed time t',
        unit: 'time units',
        effectLabel:
          'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.',
        steps: [
          {
            focus: 'reference',
            label: 'The object and the rule',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            focus: 'input',
            label: 'Selected input',
            description:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            focus: 'intermediate',
            label: 'The evaluated intermediate quantities',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          },
          {
            focus: 'output',
            label: 'Current result',
            description:
              'Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.'
          }
        ]
      },
      'circle-manifold': {
        variableKey: 'angle',
        symbol: 'θ',
        variableLabel: 'Position angle θ (degrees)',
        unit: 'degrees',
        effectLabel:
          'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.',
        steps: [
          {
            focus: 'reference',
            label: 'The object and the rule',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            focus: 'input',
            label: 'Selected input',
            description:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            focus: 'intermediate',
            label: 'The evaluated intermediate quantities',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          },
          {
            focus: 'output',
            label: 'Current result',
            description:
              'Compute the unit-circle point from its angle. Project from the north or south pole to the horizontal coordinate line. A chart excludes its chosen pole; the other chart covers that point.'
          }
        ]
      },
      'sphere-manifold': {
        variableKey: 'latitude',
        symbol: 'φ',
        variableLabel: 'Latitude φ (degrees)',
        unit: 'degrees',
        effectLabel:
          'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.',
        steps: [
          {
            focus: 'reference',
            label: 'The object and the rule',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            focus: 'input',
            label: 'Selected input',
            description:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            focus: 'intermediate',
            label: 'The evaluated intermediate quantities',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          },
          {
            focus: 'output',
            label: 'Current result',
            description:
              'Locate the unit-sphere point from latitude and longitude, then apply the selected stereographic chart. The primary result is the plane-coordinate radius; it is different from the fixed sphere radius one.'
          }
        ]
      },
      'structural-stability': {
        variableKey: 'perturbation',
        symbol: 'ε',
        variableLabel: 'Rule perturbation ε',
        unit: 'model units',
        effectLabel:
          'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.',
        steps: [
          {
            focus: 'reference',
            label: 'The object and the rule',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            focus: 'input',
            label: 'Selected input',
            description:
              'The input selects the current whole step or coordinate while the other declared conditions stay visible.'
          },
          {
            focus: 'intermediate',
            label: 'The evaluated intermediate quantities',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          },
          {
            focus: 'output',
            label: 'Current result',
            description:
              'Set each selected velocity rule equal to zero. Compare the number and local type of its equilibria with the zero-offset rule; the two explicit perturbation families illustrate different robustness.'
          }
        ]
      }
    }
  };
  for (const id of ['circle-manifold', 'sphere-manifold'])
    data.quantities[id].chartLabel = {
      label: 'Selected projection chart',
      role: 'input',
      unit: '',
      description:
        'Names the chosen north or south stereographic chart; a different chart gives coordinates for the same object point.'
    };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(data);
  return Object.freeze({
    all: () => data.stories.slice(),
    forSlug: s => data.stories.find(x => x.slug === s) || null,
    find: id => data.stories.find(x => x.id === id) || null,
    quantityFor: (s, k) =>
      Object.hasOwn(data.quantities, s) && Object.hasOwn(data.quantities[s], k)
        ? data.quantities[s][k]
        : null,
    linksFor: s => (Object.hasOwn(data.links, s) ? data.links[s] : null)
  });
});
