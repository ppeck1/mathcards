/* Original connected systems stories; no clocks or page state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSystemsStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:systems:vector-field',
        slug: 'vector-field',
        scene: 'vector-field-system',
        unit: 'units per time',
        title: 'Which way does the alignment correction point?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary: 'Evaluate each signed velocity component, then compute the Euclidean magnitude.',
        context:
          'A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.',
        question: 'Which way does the alignment correction point?',
        variables: [
          {
            key: 'x',
            label: 'Horizontal position x',
            unit: '',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'x'
          },
          {
            key: 'y',
            label: 'Vertical position y',
            unit: '',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'y'
          },
          {
            key: 'rate',
            label: 'Inward rate a',
            unit: '',
            min: 0,
            max: 2,
            step: 0.05,
            symbol: 'a'
          }
        ],
        parameters: {
          x: 1,
          y: 1,
          rate: 1
        },
        timeline: {
          key: 'x',
          from: -2,
          to: 2,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A camera mount is displaced horizontally and vertically from its target. A deliberately simple controller asks for a velocity proportional to the opposite displacement. Drag the measured position to see both components of that command. These are stipulated control rules, not measurements of a real device.',
            formula: 'F(x,y) = (−a x, −a y)',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Horizontal position x',
            body: 'Horizontal position x is now {{x}}. A velocity arrow begins at the selected position. Its direction and length follow the two computed components.',
            formula: 'x = {{x}}',
            focusLabel: 'Change Horizontal position x',
            focusDescription:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Evaluate each signed velocity component, then compute the Euclidean magnitude.',
            formula: 'F({{x}}, {{y}}) = ({{vx}}, {{vy}}); magnitude = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} units per time. A stationary planar linear field in dimensionless coordinates. Arrow displacement encodes local velocity, not a completed trajectory.',
            formula: 'F({{x}}, {{y}}) = ({{vx}}, {{vy}}); magnitude = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'x = {{x}}',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            role: 'intermediate',
            label: 'Resolve the velocity components',
            template: 'F = ({{vx}}, {{vy}})',
            description:
              'Evaluate each signed velocity component, then compute the Euclidean magnitude.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} units per time',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          }
        ]
      },
      {
        id: 'story:systems:continuous-flow',
        slug: 'continuous-flow',
        scene: 'continuous-flow-system',
        unit: 'position units',
        title: 'How does a continuous correction settle?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary: 'Multiply the initial displacement by the exponential response factor.',
        context:
          'The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.',
        question: 'How does a continuous correction settle?',
        variables: [
          {
            key: 'time',
            label: 'Elapsed time t',
            unit: '',
            min: 0,
            max: 5,
            step: 0.05,
            symbol: 't'
          },
          {
            key: 'initial',
            label: 'Starting displacement x₀',
            unit: '',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'x₀'
          },
          {
            key: 'rate',
            label: 'Return rate a',
            unit: '',
            min: 0,
            max: 2,
            step: 0.05,
            symbol: 'a'
          }
        ],
        parameters: {
          time: 1,
          initial: 2,
          rate: 0.5
        },
        timeline: {
          key: 'time',
          from: 0,
          to: 5,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'The same ideal alignment controller continuously pulls a displaced mount toward zero. A whole correction step is no longer the unit of change: position has a value at every elapsed time. Hold the rate fixed and follow the exact response from the initial displacement.',
            formula: 'x(t) = x₀ exp(−a t)',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Elapsed time t',
            body: 'Elapsed time t is now {{time}}. The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.',
            formula: 't = {{time}}',
            focusLabel: 'Change Elapsed time t',
            focusDescription:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Multiply the initial displacement by the exponential response factor.',
            formula: 'x({{time}}) = {{initial}} × {{factor}} = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} position units. The exact solution of one autonomous linear differential equation with constant nonnegative rate. No numerical integration is used.',
            formula: 'x({{time}}) = {{initial}} × {{factor}} = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 't = {{time}}',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            role: 'intermediate',
            label: 'Compute the response factor',
            template: 'exp(−a t) = {{factor}}',
            description: 'Multiply the initial displacement by the exponential response factor.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} position units',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          }
        ]
      },
      {
        id: 'story:systems:basin-attraction',
        slug: 'basin-attraction',
        scene: 'basin-attraction-system',
        unit: 'position units',
        title: 'Which resting position will the mechanism approach?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.',
        context:
          'Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.',
        question: 'Which resting position will the mechanism approach?',
        variables: [
          {
            key: 'initial',
            label: 'Starting position x₀',
            unit: '',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'x₀'
          },
          {
            key: 'time',
            label: 'Elapsed time t',
            unit: '',
            min: 0,
            max: 5,
            step: 0.05,
            symbol: 't'
          }
        ],
        parameters: {
          initial: 0.3,
          time: 2
        },
        timeline: {
          key: 'initial',
          from: -2,
          to: 2,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'Imagine a symmetric snap mechanism with two resting positions. Its illustrative relaxation law pushes small positive starts toward the right rest and small negative starts toward the left. Put it exactly at the central balance point, then change the start by a small amount. The law is a mathematical construction, not an identified spring.',
            formula: 'dx/dt = x − x³',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Starting position x₀',
            body: 'Starting position x₀ is now {{initial}}. The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.',
            formula: 'x₀ = {{initial}}',
            focusLabel: 'Change Starting position x₀',
            focusDescription:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.',
            formula: 'x₀ = {{initial}}; x({{time}}) = {{output}}; destination = {{destination}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} position units. One scalar autonomous system. Positive starts approach +1, negative starts approach −1, and zero remains at an unstable equilibrium. The finite-time value is not the limiting destination.',
            formula: 'x₀ = {{initial}}; x({{time}}) = {{output}}; destination = {{destination}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'x₀ = {{initial}}',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            role: 'intermediate',
            label: 'Read the initial velocity',
            template: 'Initial velocity = {{velocity}}',
            description:
              'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} position units',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          }
        ]
      },
      {
        id: 'story:systems:fold-bifurcation',
        slug: 'fold-bifurcation',
        scene: 'fold-bifurcation-system',
        unit: 'equilibria',
        title: 'When do two balance points disappear?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.',
        context:
          'A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.',
        question: 'When do two balance points disappear?',
        variables: [
          {
            key: 'mu',
            label: 'Control parameter μ',
            unit: '',
            min: -1,
            max: 2,
            step: 0.05,
            symbol: 'μ'
          }
        ],
        parameters: {
          mu: 1
        },
        timeline: {
          key: 'mu',
          from: -1,
          to: 2,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A control dial changes a toy actuator’s velocity rule. For positive dial values, one balance point attracts nearby positions and the other repels them. Lower the dial through zero: the pair meets, then no real balance point remains. Read balance points from zeros of velocity rather than from the height of an arbitrary mountain.',
            formula: 'dx/dt = μ − x²',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Control parameter μ',
            body: 'Control parameter μ is now {{mu}}. The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.',
            formula: 'μ = {{mu}}',
            focusLabel: 'Change Control parameter μ',
            focusDescription:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.',
            formula: 'μ = {{mu}}; equilibria = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} equilibria. A local normal-form family. Positive μ gives a stable positive and unstable negative equilibrium; zero is a one-sided attracting double root, not an asymptotically stable equilibrium on a full neighborhood.',
            formula: 'μ = {{mu}}; equilibria = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'μ = {{mu}}',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            role: 'intermediate',
            label: 'Find zero-velocity positions',
            template: '(equilibrium position)² = {{mu}}',
            description:
              'Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} equilibria',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          }
        ]
      },
      {
        id: 'story:systems:cusp-potential',
        slug: 'cusp-potential',
        scene: 'cusp-potential-system',
        unit: 'stationary points',
        title: 'How does tilting a two-well landscape change its resting points?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².',
        context:
          'A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.',
        question: 'How does tilting a two-well landscape change its resting points?',
        variables: [
          {
            key: 'bias',
            label: 'Tilt b',
            unit: '',
            min: -1,
            max: 1,
            step: 0.05,
            symbol: 'b'
          },
          {
            key: 'shape',
            label: 'Well parameter a',
            unit: '',
            min: 0,
            max: 2,
            step: 0.05,
            symbol: 'a'
          }
        ],
        parameters: {
          bias: 0,
          shape: 1
        },
        timeline: {
          key: 'bias',
          from: -1,
          to: 1,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A toy snap mechanism has a quartic potential. One dial changes the depth of its two wells and another tilts the landscape. Watch the stationary points meet or split. The scene reports available stationary positions; it does not silently choose a history or simulate a jump between wells.',
            formula: 'V(x) = x⁴/4 − a x²/2 − b x',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Tilt b',
            body: 'Tilt b is now {{bias}}. The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.',
            formula: 'b = {{bias}}',
            focusLabel: 'Change Tilt b',
            focusDescription:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².',
            formula: 'a = {{shape}}; b = {{bias}}; 4a³ − 27b² = {{discriminant}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} stationary points. Stationary points solve x³−a x−b=0. Numerical roots are approximate, especially near a repeated root. A potential landscape alone does not determine which well a history-dependent system occupies.',
            formula: 'a = {{shape}}; b = {{bias}}; 4a³ − 27b² = {{discriminant}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'b = {{bias}}',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            role: 'intermediate',
            label: 'Find stationary positions',
            template: 'x³ − {{shape}} x − {{bias}} = 0',
            description:
              'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} stationary points',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          }
        ]
      },
      {
        id: 'story:systems:partial-order',
        slug: 'partial-order',
        scene: 'partial-order-system',
        unit: 'truth value',
        title: 'Can two tool kits always be ranked?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary: 'Compare element membership, not the integer encoding of the kit.',
        context:
          'Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.',
        question: 'Can two tool kits always be ranked?',
        variables: [
          {
            key: 'a',
            label: 'First collection A',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'A'
          },
          {
            key: 'b',
            label: 'Second collection B',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'B'
          }
        ],
        parameters: {
          a: 3,
          b: 5
        },
        timeline: {
          key: 'a',
          from: 0,
          to: 7,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'Two volunteers each carry some of three tools: a lamp, a ruler and a brush. One kit is below another when every tool in the first is also in the second. Choose two kits. Sometimes neither contains the other, even when they have the same number of tools.',
            formula: 'A ≤ B exactly when A ⊆ B',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change First collection A',
            body: 'The first collection is now {{labelA}}. The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.',
            formula: 'A = {{labelA}}',
            focusLabel: 'Change First collection A',
            focusDescription:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Compare element membership, not the integer encoding of the kit.',
            formula: 'A = {{labelA}}; B = {{labelB}}; inclusion = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} truth value. All eight subsets of a fixed three-tool collection, ordered by inclusion. Incomparable sets are possible; a drawn vertical ordering is not an additional relation.',
            formula: 'A = {{labelA}}; B = {{labelB}}; inclusion = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'A = {{labelA}}',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            role: 'intermediate',
            label: 'Compare membership',
            template: '{{labelA}} ⊆ {{labelB}}',
            description: 'Compare element membership, not the integer encoding of the kit.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{classification}}',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          }
        ]
      },
      {
        id: 'story:systems:meet-join',
        slug: 'meet-join',
        scene: 'meet-join-system',
        unit: 'tools',
        title: 'Which tools are shared, and which are available together?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary: 'Take the intersection for meet or the union for join, then count selected tools.',
        context:
          'The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.',
        question: 'Which tools are shared, and which are available together?',
        variables: [
          {
            key: 'a',
            label: 'First collection A',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'A'
          },
          {
            key: 'b',
            label: 'Second collection B',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'B'
          }
        ],
        parameters: {
          a: 3,
          b: 5,
          operation: 'meet'
        },
        timeline: {
          key: 'a',
          from: 0,
          to: 7,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'The volunteers need either a kit both can supply or a combined kit using everything either carries. Choose meet to keep shared tools and join to combine the kits. The highlighted result occupies the corresponding position in the inclusion diagram.',
            formula: 'A ∧ B = A ∩ B; A ∨ B = A ∪ B',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change First collection A',
            body: 'The first collection is now {{labelA}}. Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.',
            formula: 'A = {{labelA}}',
            focusLabel: 'Change First collection A',
            focusDescription:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Take the intersection for meet or the union for join, then count selected tools.',
            formula: 'A = {{labelA}}; B = {{labelB}}; result = {{resultLabel}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} tools. In this powerset lattice meet is intersection and join is union. Other lattices need not use sets, and their operations need not be literal intersection and union.',
            formula: 'A = {{labelA}}; B = {{labelB}}; result = {{resultLabel}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'A = {{labelA}}',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            role: 'intermediate',
            label: 'Read the selected bound',
            template: '{{resultLabel}}',
            description:
              'Take the intersection for meet or the union for join, then count selected tools.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} tools',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          }
        ]
      },
      {
        id: 'story:systems:lattice-distributivity',
        slug: 'lattice-distributivity',
        scene: 'lattice-distributivity-system',
        unit: 'tools',
        title: 'Do two ways of selecting tools agree?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.',
        context:
          'Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.',
        question: 'Do two ways of selecting tools agree?',
        variables: [
          {
            key: 'a',
            label: 'First collection A',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'A'
          },
          {
            key: 'b',
            label: 'Second collection B',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'B'
          },
          {
            key: 'c',
            label: 'Third collection C',
            unit: '',
            min: 0,
            max: 7,
            step: 1,
            discrete: true,
            symbol: 'C'
          }
        ],
        parameters: {
          a: 3,
          b: 5,
          c: 6
        },
        timeline: {
          key: 'a',
          from: 0,
          to: 7,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'Three volunteers bring kits A, B and C. We need tools in A that can also be supplied by B or C. First combine B and C, then intersect with A. Compare that with taking each overlap with A and combining those overlaps. Both routes select the same actual tools.',
            formula: 'A ∧ (B ∨ C) = (A ∧ B) ∨ (A ∧ C)',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change First collection A',
            body: 'The first collection is now {{labelA}}. The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.',
            formula: 'A = {{labelA}}',
            focusLabel: 'Change First collection A',
            focusDescription:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.',
            formula: 'Both selection routes give {{resultLabel}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} tools. This finite powerset lattice is distributive, as a membership argument establishes for every triple. Not every lattice is distributive.',
            formula: 'Both selection routes give {{resultLabel}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'A = {{labelA}}',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            role: 'intermediate',
            label: 'Compare both selection routes',
            template: 'Both routes: {{resultLabel}}',
            description:
              'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} tools',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          }
        ]
      },
      {
        id: 'story:systems:heat-balance',
        slug: 'heat-balance',
        scene: 'heat-balance-system',
        unit: 'J/K',
        title: 'Why can total entropy rise while energy stays balanced?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.',
        context:
          'Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.',
        question: 'Why can total entropy rise while energy stays balanced?',
        variables: [
          {
            key: 'heat',
            label: 'Energy transferred Q (J)',
            unit: 'J',
            min: 0,
            max: 50,
            step: 0.5,
            symbol: 'Q'
          }
        ],
        parameters: {
          heat: 25
        },
        timeline: {
          key: 'heat',
          from: 0,
          to: 50,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'Two small insulated teaching bodies start at 400 K and 300 K. Each needs one joule per kelvin of temperature change. Transfer energy from the hot body to the cold one, stopping when both reach 350 K. Follow the two temperature changes and their separate entropy changes.',
            formula: 'ΔS = C ln(Tₕ/400) + C ln(T_c/300)',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Energy transferred Q (J)',
            body: 'Energy transferred Q (J) is now {{heat}}. The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.',
            formula: 'Q = {{heat}}',
            focusLabel: 'Change Energy transferred Q (J)',
            focusDescription:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.',
            formula: 'Tₕ = {{hot}} K; T_c = {{cold}} K; ΔS = {{output}} J/K',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} J/K. Two insulated bodies each have constant heat capacity 1 J/K. Heat moves from 400 K toward 300 K until both reach 350 K. No work, phase change or environmental exchange is modeled. Entropy is in J/K, not bits.',
            formula: 'Tₕ = {{hot}} K; T_c = {{cold}} K; ΔS = {{output}} J/K',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'Q = {{heat}}',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            role: 'intermediate',
            label: 'Read both temperatures',
            template: '{{hot}} K and {{cold}} K',
            description:
              'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} J/K',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          }
        ]
      },
      {
        id: 'story:systems:gibbs-free-energy',
        slug: 'gibbs-free-energy',
        scene: 'gibbs-free-energy-system',
        unit: 'J',
        title: 'Can temperature change which transformation is favorable?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.',
        context:
          'A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.',
        question: 'Can temperature change which transformation is favorable?',
        variables: [
          {
            key: 'temperature',
            label: 'Temperature T (K)',
            unit: 'K',
            min: 100,
            max: 600,
            step: 1,
            symbol: 'T'
          },
          {
            key: 'enthalpy',
            label: 'Enthalpy change ΔH (J)',
            unit: 'J',
            min: -4000,
            max: 4000,
            step: 50,
            symbol: 'ΔH'
          },
          {
            key: 'entropy',
            label: 'Entropy change ΔS (J/K)',
            unit: 'J/K',
            min: -10,
            max: 10,
            step: 0.1,
            symbol: 'ΔS'
          }
        ],
        parameters: {
          temperature: 300,
          enthalpy: 2000,
          entropy: 5
        },
        timeline: {
          key: 'temperature',
          from: 100,
          to: 600,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A fictional material has a declared enthalpy difference and entropy difference between two states. At fixed pressure and temperature, compare these contributions to free energy. Change temperature while holding the two declared differences constant. This is a comparison model, not data for a named chemical.',
            formula: 'ΔG = ΔH − T ΔS',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Temperature T (K)',
            body: 'Temperature T (K) is now {{temperature}}. The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.',
            formula: 'T = {{temperature}}',
            focusLabel: 'Change Temperature T (K)',
            focusDescription:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.',
            formula: 'ΔG = {{enthalpy}} − {{thermalTerm}} = {{output}} J',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} J. A constructed constant-temperature, constant-pressure comparison. ΔH and ΔS are held fixed during the temperature sweep. A favorable ΔG does not give a reaction rate or remove an activation barrier.',
            formula: 'ΔG = {{enthalpy}} − {{thermalTerm}} = {{output}} J',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'T = {{temperature}}',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            role: 'intermediate',
            label: 'Compute the thermal contribution',
            template: 'T ΔS = {{thermalTerm}} J',
            description:
              'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} J',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          }
        ]
      },
      {
        id: 'story:systems:ideal-gas',
        slug: 'ideal-gas',
        scene: 'ideal-gas-system',
        unit: 'kPa',
        title: 'What happens to pressure when the same gas has more room?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.',
        context:
          'A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.',
        question: 'What happens to pressure when the same gas has more room?',
        variables: [
          {
            key: 'volume',
            label: 'Volume V (L)',
            unit: 'L',
            min: 5,
            max: 40,
            step: 0.1,
            symbol: 'V'
          },
          {
            key: 'temperature',
            label: 'Temperature T (K)',
            unit: 'K',
            min: 150,
            max: 600,
            step: 1,
            symbol: 'T'
          }
        ],
        parameters: {
          volume: 20,
          temperature: 300
        },
        timeline: {
          key: 'volume',
          from: 5,
          to: 40,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A sealed piston contains one mole of an ideal gas. Set its volume and temperature, then calculate its pressure. Increasing the available volume at the same temperature lowers the pressure; changing temperature changes the numerator as well. The drawing represents an equilibrium state, not a real-time piston experiment.',
            formula: 'p = n R T / V',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Volume V (L)',
            body: 'Volume V (L) is now {{volume}}. The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.',
            formula: 'V = {{volume}}',
            focusLabel: 'Change Volume V (L)',
            focusDescription:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.',
            formula: 'p = {{thermalEnergy}} / {{volume}} = {{output}} kPa',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} kPa. One mole of ideal gas with R=8.31446261815324 L·kPa/(mol·K). Temperature uses kelvins. This dilute-gas model omits molecular volume and interactions; it does not model a compression path or heat transfer.',
            formula: 'p = {{thermalEnergy}} / {{volume}} = {{output}} kPa',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'V = {{volume}}',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            role: 'intermediate',
            label: 'Compute the numerator',
            template: 'n R T = {{thermalEnergy}} L·kPa',
            description:
              'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} kPa',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          }
        ]
      },
      {
        id: 'story:systems:artificial-neuron',
        slug: 'artificial-neuron',
        scene: 'artificial-neuron-system',
        unit: 'activation',
        title: 'How does a weighted signal become an activation?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary: 'Multiply signal by weight, add bias, then apply the sigmoid function.',
        context:
          'A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.',
        question: 'How does a weighted signal become an activation?',
        variables: [
          {
            key: 'signal',
            label: 'Input signal x',
            unit: '',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'x'
          },
          {
            key: 'weight',
            label: 'Weight w',
            unit: '',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'w'
          },
          {
            key: 'bias',
            label: 'Bias b',
            unit: '',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'b'
          }
        ],
        parameters: {
          signal: 1,
          weight: 1,
          bias: 0
        },
        timeline: {
          key: 'signal',
          from: -3,
          to: 3,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'A toy light-sensitive unit receives a normalized sensor signal. A weight changes its influence and a bias shifts its baseline. Trace the weighted sum into a smooth sigmoid response. This artificial unit is a mathematical abstraction, not a biological neuron or a tested light classifier.',
            formula: 'z = w x + b; y = 1/(1 + exp(−z))',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Input signal x',
            body: 'Input signal x is now {{signal}}. Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.',
            formula: 'x = {{signal}}',
            focusLabel: 'Change Input signal x',
            focusDescription:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Multiply signal by weight, add bias, then apply the sigmoid function.',
            formula: 'z = {{weighted}} + {{bias}} = {{z}}; y = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} activation. One scalar sigmoid unit with stipulated weights, not an anatomical neuron or a calibrated probability. No biological mechanism or trained performance is inferred.',
            formula: 'z = {{weighted}} + {{bias}} = {{z}}; y = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'x = {{signal}}',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            role: 'intermediate',
            label: 'Combine the weighted input and bias',
            template: '{{weighted}} + {{bias}} = {{z}}',
            description: 'Multiply signal by weight, add bias, then apply the sigmoid function.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} activation',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          }
        ]
      },
      {
        id: 'story:systems:hebbian-learning',
        slug: 'hebbian-learning',
        scene: 'hebbian-learning-system',
        unit: 'weight units',
        title: 'How does simultaneous activity change one connection?',
        eyebrow: 'A model you can inspect',
        presentation: {
          compact: true,
          controlHint:
            'Change one input and follow its quantity through the formula and highlighted marks.'
        },
        summary:
          'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.',
        context:
          'Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.',
        question: 'How does simultaneous activity change one connection?',
        variables: [
          {
            key: 'pre',
            label: 'Presynaptic activity u',
            unit: '',
            min: 0,
            max: 1,
            step: 0.05,
            symbol: 'u'
          },
          {
            key: 'post',
            label: 'Postsynaptic activity v',
            unit: '',
            min: 0,
            max: 1,
            step: 0.05,
            symbol: 'v'
          },
          {
            key: 'rate',
            label: 'Learning rate η',
            unit: '',
            min: 0,
            max: 0.2,
            step: 0.01,
            symbol: 'η'
          }
        ],
        parameters: {
          pre: 0.5,
          post: 0.5,
          rate: 0.1
        },
        timeline: {
          key: 'pre',
          from: 0,
          to: 1,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the stated model',
            body: 'Two idealized units are active together. A simple correlation rule strengthens their connection by the activity product times a learning rate. Change either activity and watch the proposed weight increment. This is one update from a fixed starting weight, without claiming to explain all biological learning.',
            formula: 'Δw = η u v; w₁ = w₀ + Δw',
            focusLabel: 'Start with the stated model',
            focusDescription:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change Presynaptic activity u',
            body: 'Presynaptic activity u is now {{pre}}. The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.',
            formula: 'u = {{pre}}',
            focusLabel: 'Change Presynaptic activity u',
            focusDescription:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the calculation',
            body: 'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.',
            formula: 'Δw = {{rate}} × {{product}} = {{change}}; w₁ = {{output}}',
            focusLabel: 'Follow the calculation',
            focusDescription:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the result in its setting',
            body: 'The current result is {{output}} weight units. One illustrative rate-based correlation update with fixed starting weight 0.2. No normalization, decay or saturation is included; repeated unconstrained updates can grow without bound. This rule is not a complete theory of memory.',
            formula: 'Δw = {{rate}} × {{product}} = {{change}}; w₁ = {{output}}',
            focusLabel: 'Read the result in its setting',
            focusDescription:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the declared input',
            template: 'u = {{pre}}',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            role: 'intermediate',
            label: 'Compute one weight increment',
            template: '{{rate}} × {{product}} = {{change}}',
            description:
              'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.'
          },
          {
            role: 'output',
            label: 'Read the model result',
            template: '{{output}} weight units',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          }
        ]
      }
    ],
    quantities: {
      'vector-field': {
        x: {
          label: 'Horizontal position x',
          role: 'input',
          unit: '',
          description: 'The declared Horizontal position x input.'
        },
        y: {
          label: 'Vertical position y',
          role: 'input',
          unit: '',
          description:
            'Evaluate each signed velocity component, then compute the Euclidean magnitude. A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
        },
        rate: {
          label: 'Inward rate a',
          role: 'input',
          unit: '',
          description:
            'Evaluate each signed velocity component, then compute the Euclidean magnitude. A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
        },
        output: {
          label: 'Vector fields result',
          role: 'output',
          unit: 'units per time',
          description:
            'Evaluate each signed velocity component, then compute the Euclidean magnitude.'
        },
        vx: {
          label: 'Horizontal correction velocity',
          role: 'intermediate',
          unit: '',
          description:
            'Evaluate each signed velocity component, then compute the Euclidean magnitude.'
        },
        vy: {
          label: 'Vertical correction velocity',
          role: 'intermediate',
          unit: '',
          description:
            'Evaluate each signed velocity component, then compute the Euclidean magnitude.'
        }
      },
      'continuous-flow': {
        time: {
          label: 'Elapsed time t',
          role: 'input',
          unit: '',
          description:
            'Multiply the initial displacement by the exponential response factor. The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
        },
        initial: {
          label: 'Starting displacement x₀',
          role: 'input',
          unit: '',
          description: 'The declared Starting displacement x₀ input.'
        },
        rate: {
          label: 'Return rate a',
          role: 'input',
          unit: '',
          description:
            'Multiply the initial displacement by the exponential response factor. The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
        },
        output: {
          label: 'Continuous flows result',
          role: 'output',
          unit: 'position units',
          description: 'Multiply the initial displacement by the exponential response factor.'
        },
        factor: {
          label: 'Exponential response factor',
          role: 'intermediate',
          unit: '',
          description: 'Multiply the initial displacement by the exponential response factor.'
        }
      },
      'basin-attraction': {
        initial: {
          label: 'Starting position x₀',
          role: 'input',
          unit: '',
          description:
            'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start. The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
        },
        time: {
          label: 'Elapsed time t',
          role: 'input',
          unit: '',
          description:
            'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start. The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
        },
        output: {
          label: 'Basins of attraction result',
          role: 'output',
          unit: 'position units',
          description:
            'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.'
        },
        destination: {
          label: 'Long-term resting position',
          role: 'intermediate',
          unit: '',
          description:
            'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.'
        },
        velocity: {
          label: 'Velocity at the initial position',
          role: 'intermediate',
          unit: '',
          description:
            'Use the exact solution for finite time; separately classify the limiting destination by the sign of the start.'
        }
      },
      'fold-bifurcation': {
        mu: {
          label: 'Control parameter μ',
          role: 'input',
          unit: '',
          description:
            'Solve the zero-velocity equation and inspect the sign of its derivative at each simple root. The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
        },
        output: {
          label: 'Fold bifurcations result',
          role: 'output',
          unit: 'equilibria',
          description:
            'Solve the zero-velocity equation and inspect the sign of its derivative at each simple root.'
        }
      },
      'cusp-potential': {
        bias: {
          label: 'Tilt b',
          role: 'input',
          unit: '',
          description:
            'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b². The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
        },
        shape: {
          label: 'Well parameter a',
          role: 'input',
          unit: '',
          description:
            'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b². The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
        },
        output: {
          label: 'Cusp potential and competing wells result',
          role: 'output',
          unit: 'stationary points',
          description:
            'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².'
        },
        discriminant: {
          label: 'Cubic discriminant',
          role: 'intermediate',
          unit: '',
          description:
            'Find the real zeros of the potential derivative with a cubic formula; classify the root-count regime with 4a³−27b².'
        }
      },
      'partial-order': {
        a: {
          label: 'First collection A',
          role: 'input',
          unit: '',
          description:
            'Compare element membership, not the integer encoding of the kit. The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
        },
        b: {
          label: 'Second collection B',
          role: 'input',
          unit: '',
          description:
            'Compare element membership, not the integer encoding of the kit. The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
        },
        output: {
          label: 'Partial orders result',
          role: 'output',
          unit: 'truth value',
          description: 'Compare element membership, not the integer encoding of the kit.'
        },
        labelA: {
          label: 'Tools in the first collection',
          role: 'intermediate',
          unit: '',
          description: 'Compare element membership, not the integer encoding of the kit.'
        },
        labelB: {
          label: 'Tools in the second collection',
          role: 'intermediate',
          unit: '',
          description: 'Compare element membership, not the integer encoding of the kit.'
        },
        classification: {
          label: 'Inclusion comparison',
          role: 'output',
          unit: '',
          description:
            'The inclusion statement compares actual collection members; incomparable kits have neither inclusion direction.'
        }
      },
      'meet-join': {
        a: {
          label: 'First collection A',
          role: 'input',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools. Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
        },
        b: {
          label: 'Second collection B',
          role: 'input',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools. Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
        },
        operation: {
          label: 'Lattice operation',
          role: 'input',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools. Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
        },
        output: {
          label: 'Meet and join result',
          role: 'output',
          unit: 'tools',
          description:
            'Take the intersection for meet or the union for join, then count selected tools.'
        },
        labelA: {
          label: 'Tools in the first collection',
          role: 'intermediate',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools.'
        },
        labelB: {
          label: 'Tools in the second collection',
          role: 'intermediate',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools.'
        },
        resultLabel: {
          label: 'Tools selected by the operation',
          role: 'intermediate',
          unit: '',
          description:
            'Take the intersection for meet or the union for join, then count selected tools.'
        }
      },
      'lattice-distributivity': {
        a: {
          label: 'First collection A',
          role: 'input',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C. The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
        },
        b: {
          label: 'Second collection B',
          role: 'input',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C. The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
        },
        c: {
          label: 'Third collection C',
          role: 'input',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C. The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
        },
        output: {
          label: 'Distributive lattices result',
          role: 'output',
          unit: 'tools',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.'
        },
        leftMask: {
          label: 'left collection',
          role: 'intermediate',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.'
        },
        rightMask: {
          label: 'right collection',
          role: 'intermediate',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.'
        },
        labelA: {
          label: 'Tools in the first collection',
          role: 'input',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C. The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
        },
        resultLabel: {
          label: 'Tools selected by the operation',
          role: 'intermediate',
          unit: '',
          description:
            'Compute both set expressions independently; an element belongs to either expression exactly when it is in A and in at least one of B or C.'
        }
      },
      'heat-balance': {
        heat: {
          label: 'Energy transferred Q (J)',
          role: 'input',
          unit: 'J',
          description: 'The declared Energy transferred Q (J) input.'
        },
        output: {
          label: 'Heat exchange and physical entropy result',
          role: 'output',
          unit: 'J/K',
          description:
            'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.'
        },
        hot: {
          label: 'Hot-body temperature',
          role: 'intermediate',
          unit: '',
          description:
            'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.'
        },
        cold: {
          label: 'Cold-body temperature',
          role: 'intermediate',
          unit: '',
          description:
            'Subtract and add the same transferred energy divided by heat capacity, then add the logarithmic entropy changes.'
        }
      },
      'gibbs-free-energy': {
        temperature: {
          label: 'Temperature T (K)',
          role: 'input',
          unit: 'K',
          description:
            'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference. The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
        },
        enthalpy: {
          label: 'Enthalpy change ΔH (J)',
          role: 'input',
          unit: 'J',
          description: 'The declared Enthalpy change ΔH (J) input.'
        },
        entropy: {
          label: 'Entropy change ΔS (J/K)',
          role: 'input',
          unit: 'J/K',
          description: 'The declared Entropy change ΔS (J/K) input.'
        },
        output: {
          label: 'Gibbs free energy result',
          role: 'output',
          unit: 'J',
          description:
            'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.'
        },
        thermalTerm: {
          label: 'Thermal energy contribution',
          role: 'intermediate',
          unit: '',
          description:
            'Multiply temperature by the entropy difference, then subtract this energy contribution from the enthalpy difference.'
        }
      },
      'ideal-gas': {
        volume: {
          label: 'Volume V (L)',
          role: 'input',
          unit: 'L',
          description:
            'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals. The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
        },
        temperature: {
          label: 'Temperature T (K)',
          role: 'input',
          unit: 'K',
          description:
            'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals. The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
        },
        output: {
          label: 'The ideal gas law result',
          role: 'output',
          unit: 'kPa',
          description:
            'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.'
        },
        thermalEnergy: {
          label: 'Amount times gas constant times temperature',
          role: 'intermediate',
          unit: '',
          description:
            'Multiply the amount and gas constant by kelvin temperature, then divide by volume in litres to obtain kilopascals.'
        }
      },
      'artificial-neuron': {
        signal: {
          label: 'Input signal x',
          role: 'input',
          unit: '',
          description:
            'Multiply signal by weight, add bias, then apply the sigmoid function. Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
        },
        weight: {
          label: 'Weight w',
          role: 'input',
          unit: '',
          description:
            'Multiply signal by weight, add bias, then apply the sigmoid function. Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
        },
        bias: {
          label: 'Bias b',
          role: 'input',
          unit: '',
          description:
            'Multiply signal by weight, add bias, then apply the sigmoid function. Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
        },
        output: {
          label: 'An artificial neuron result',
          role: 'output',
          unit: 'activation',
          description: 'Multiply signal by weight, add bias, then apply the sigmoid function.'
        },
        weighted: {
          label: 'Weighted input signal',
          role: 'intermediate',
          unit: '',
          description: 'Multiply signal by weight, add bias, then apply the sigmoid function.'
        },
        z: {
          label: 'Preactivation before the sigmoid',
          role: 'intermediate',
          unit: '',
          description: 'Multiply signal by weight, add bias, then apply the sigmoid function.'
        }
      },
      'hebbian-learning': {
        pre: {
          label: 'Presynaptic activity u',
          role: 'input',
          unit: '',
          description: 'The declared Presynaptic activity u input.'
        },
        post: {
          label: 'Postsynaptic activity v',
          role: 'input',
          unit: '',
          description: 'The declared Postsynaptic activity v input.'
        },
        rate: {
          label: 'Learning rate η',
          role: 'input',
          unit: '',
          description:
            'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight. The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
        },
        output: {
          label: 'A Hebbian weight update result',
          role: 'output',
          unit: 'weight units',
          description:
            'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.'
        },
        product: {
          label: 'Product of the two activities',
          role: 'intermediate',
          unit: '',
          description:
            'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.'
        },
        change: {
          label: 'Connection weight increment',
          role: 'intermediate',
          unit: '',
          description:
            'Multiply the two activity levels and learning rate, then add that increment to the fixed starting weight.'
        }
      }
    },
    links: {
      'vector-field': {
        variableKey: 'x',
        symbol: 'x',
        variableLabel: 'Horizontal position x',
        unit: '',
        effectLabel:
          'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            focus: 'input',
            label: 'Change Horizontal position x',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'A velocity arrow begins at the selected position. Its direction and length follow the two computed components.'
          }
        ]
      },
      'continuous-flow': {
        variableKey: 'time',
        symbol: 't',
        variableLabel: 'Elapsed time t',
        unit: '',
        effectLabel:
          'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            focus: 'input',
            label: 'Change Elapsed time t',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The violet dot stays at the starting position. The gold dot moves to the exact finite-time position.'
          }
        ]
      },
      'basin-attraction': {
        variableKey: 'initial',
        symbol: 'x₀',
        variableLabel: 'Starting position x₀',
        unit: '',
        effectLabel:
          'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            focus: 'input',
            label: 'Change Starting position x₀',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The starting dot and the current dot remain distinct. The two outer resting points and the central unstable point are marked.'
          }
        ]
      },
      'fold-bifurcation': {
        variableKey: 'mu',
        symbol: 'μ',
        variableLabel: 'Control parameter μ',
        unit: '',
        effectLabel:
          'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            focus: 'input',
            label: 'Change Control parameter μ',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The cyan velocity curve changes with the dial. Gold dots mark its actual zeros.'
          }
        ]
      },
      'cusp-potential': {
        variableKey: 'bias',
        symbol: 'b',
        variableLabel: 'Tilt b',
        unit: '',
        effectLabel:
          'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            focus: 'input',
            label: 'Change Tilt b',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The landscape is the stated potential. Gold marks are computed stationary points, including a repeated point on the fold.'
          }
        ]
      },
      'partial-order': {
        variableKey: 'a',
        symbol: 'A',
        variableLabel: 'First collection A',
        unit: '',
        effectLabel:
          'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            focus: 'input',
            label: 'Change First collection A',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The diagram contains every subset. Edges add exactly one tool, so upward paths represent inclusion.'
          }
        ]
      },
      'meet-join': {
        variableKey: 'a',
        symbol: 'A',
        variableLabel: 'First collection A',
        unit: '',
        effectLabel:
          'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            focus: 'input',
            label: 'Change First collection A',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'Gold marks the greatest shared lower bound or least combined upper bound in this powerset lattice.'
          }
        ]
      },
      'lattice-distributivity': {
        variableKey: 'a',
        symbol: 'A',
        variableLabel: 'First collection A',
        unit: '',
        effectLabel:
          'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            focus: 'input',
            label: 'Change First collection A',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The gold subset is the identical output of both routes. The claim concerns this distributive lattice, not all lattices.'
          }
        ]
      },
      'heat-balance': {
        variableKey: 'heat',
        symbol: 'Q',
        variableLabel: 'Energy transferred Q (J)',
        unit: 'J',
        effectLabel:
          'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            focus: 'input',
            label: 'Change Energy transferred Q (J)',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The hot and cold columns use the same temperature scale. Their temperatures approach each other as total entropy rises.'
          }
        ]
      },
      'gibbs-free-energy': {
        variableKey: 'temperature',
        symbol: 'T',
        variableLabel: 'Temperature T (K)',
        unit: 'K',
        effectLabel:
          'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            focus: 'input',
            label: 'Change Temperature T (K)',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The three signed bars share a zero origin: enthalpy, the negative thermal contribution, and their sum.'
          }
        ]
      },
      'ideal-gas': {
        variableKey: 'volume',
        symbol: 'V',
        variableLabel: 'Volume V (L)',
        unit: 'L',
        effectLabel:
          'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            focus: 'input',
            label: 'Change Volume V (L)',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The chamber width encodes volume. The separate pressure arrow responds to the calculated pressure.'
          }
        ]
      },
      'artificial-neuron': {
        variableKey: 'signal',
        symbol: 'x',
        variableLabel: 'Input signal x',
        unit: '',
        effectLabel:
          'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            focus: 'input',
            label: 'Change Input signal x',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'Three stages show the input signal, preactivation and output activation. The graph shows the nonlinear transfer rule.'
          }
        ]
      },
      'hebbian-learning': {
        variableKey: 'pre',
        symbol: 'u',
        variableLabel: 'Presynaptic activity u',
        unit: '',
        effectLabel:
          'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the stated model',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            focus: 'input',
            label: 'Change Presynaptic activity u',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the calculation',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          },
          {
            focus: 'output',
            label: 'Read the result in its setting',
            description:
              'The middle stage is the activity product. The final stage shows the new weight, distinct from the increment.'
          }
        ]
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
