/* Original authored data; no clocks, storage or page state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatialFoundationStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:spatial-cross-product:connected',
        slug: 'spatial-cross-product',
        scene: 'spatial-cross-product-scene',
        unit: 'm²',
        title: 'How does a spatial panel acquire a normal direction?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.',
        context:
          'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.',
        question: 'How does a spatial panel acquire a normal direction?',
        variables: [
          {
            key: 'vz',
            label: 'Second edge, z component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_z'
          },
          {
            key: 'ux',
            label: 'First edge, x component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_x'
          },
          {
            key: 'uy',
            label: 'First edge, y component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_y'
          },
          {
            key: 'uz',
            label: 'First edge, z component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_z'
          },
          {
            key: 'vx',
            label: 'Second edge, x component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_x'
          },
          {
            key: 'vy',
            label: 'Second edge, y component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_y'
          }
        ],
        parameters: {
          ux: 2,
          uy: 1,
          uz: 1,
          vx: 1,
          vy: 2,
          vz: -1
        },
        timeline: {
          key: 'vz',
          from: -2,
          to: 2,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.',
            formula: 'n = u × v; A = ‖n‖',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Set the second edge height',
            body: 'Change Second edge, z component and follow its actual mark.',
            formula: 'v_z = {{vz}} m',
            focusLabel: 'Set the second edge height',
            focusDescription:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Build the normal',
            body: 'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.',
            formula: 'n = ({{nx}}, {{ny}}, {{nz}}) m²',
            focusLabel: 'Build the normal',
            focusDescription:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read the area',
            body: 'A normal can have three nonzero components.',
            formula: 'A = {{area}} m²; triangle = {{triangleArea}} m²',
            focusLabel: 'Read the area',
            focusDescription:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Set the second edge height',
            template: 'v_z = {{vz}} m',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            role: 'intermediate',
            label: 'Build the normal',
            template: 'n = ({{nx}}, {{ny}}, {{nz}}) m²',
            description:
              'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area.'
          },
          {
            role: 'output',
            label: 'Read the area',
            template: 'A = {{area}} m²; triangle = {{triangleArea}} m²',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          }
        ]
      },
      {
        id: 'story:scalar-triple-product:connected',
        slug: 'scalar-triple-product',
        scene: 'scalar-triple-product-scene',
        unit: 'm³',
        title: 'Why can a slanted storage frame keep the same volume?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.',
        context:
          'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.',
        question: 'Why can a slanted storage frame keep the same volume?',
        variables: [
          {
            key: 'height',
            label: 'Signed third-edge height h',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'h'
          },
          {
            key: 'length',
            label: 'First edge length a',
            unit: 'm',
            min: 0,
            max: 3,
            step: 0.05,
            symbol: 'a'
          },
          {
            key: 'width',
            label: 'Second perpendicular extent b',
            unit: 'm',
            min: 0,
            max: 3,
            step: 0.05,
            symbol: 'b'
          },
          {
            key: 'shear',
            label: 'Second-edge shear s',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 's'
          }
        ],
        parameters: {
          length: 2,
          width: 3,
          height: 1,
          shear: 1
        },
        timeline: {
          key: 'height',
          from: -2,
          to: 2,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.',
            formula: 'T = u · (v × w); V = |T|',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Set the signed height',
            body: 'Change Signed third-edge height h and follow its actual mark.',
            formula: 'h = {{height}} m',
            focusLabel: 'Set the signed height',
            focusDescription:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Measure the perpendicular base',
            body: 'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.',
            formula: 'base area = {{baseArea}} m²',
            focusLabel: 'Measure the perpendicular base',
            focusDescription:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Keep orientation and size separate',
            body: 'The perpendicular extents give a signed product of 6 m³.',
            formula: 'T = {{output}} m³; V = {{volume}} m³',
            focusLabel: 'Keep orientation and size separate',
            focusDescription:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Set the signed height',
            template: 'h = {{height}} m',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            role: 'intermediate',
            label: 'Measure the perpendicular base',
            template: 'base area = {{baseArea}} m²',
            description:
              'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h.'
          },
          {
            role: 'output',
            label: 'Keep orientation and size separate',
            template: 'T = {{output}} m³; V = {{volume}} m³',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          }
        ]
      },
      {
        id: 'story:coordinate-transformation:connected',
        slug: 'coordinate-transformation',
        scene: 'coordinate-transformation-scene',
        unit: 'm',
        title: 'How can the same displacement have different coordinates?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.',
        context:
          'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.',
        question: 'How can the same displacement have different coordinates?',
        variables: [
          {
            key: 'angle',
            label: 'Frame angle θ',
            unit: 'deg',
            min: -180,
            max: 180,
            step: 1,
            symbol: 'θ'
          },
          {
            key: 'x',
            label: 'Fixed world x component',
            unit: 'm',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'x'
          },
          {
            key: 'y',
            label: 'Fixed world y component',
            unit: 'm',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'y'
          }
        ],
        parameters: {
          x: 2,
          y: 1,
          angle: 30
        },
        timeline: {
          key: 'angle',
          from: -180,
          to: 180,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.',
            formula: 'x′ = x cosθ + y sinθ; y′ = −x sinθ + y cosθ',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Turn the measuring frame',
            body: 'Change Frame angle θ and follow its actual mark.',
            formula: 'θ = {{angle}} degrees',
            focusLabel: 'Turn the measuring frame',
            focusDescription:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Resolve the fixed displacement',
            body: 'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.',
            formula: 'x′ = {{first}} m; y′ = {{second}} m',
            focusLabel: 'Resolve the fixed displacement',
            focusDescription:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Check the unchanged length',
            body: 'Both component readings change, while the gold world arrow stays fixed.',
            formula: 'length = {{norm}} m',
            focusLabel: 'Check the unchanged length',
            focusDescription:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Turn the measuring frame',
            template: 'θ = {{angle}} degrees',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            role: 'intermediate',
            label: 'Resolve the fixed displacement',
            template: 'x′ = {{first}} m; y′ = {{second}} m',
            description:
              'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation.'
          },
          {
            role: 'output',
            label: 'Check the unchanged length',
            template: 'length = {{norm}} m',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          }
        ]
      },
      {
        id: 'story:vector-projection:connected',
        slug: 'vector-projection',
        scene: 'vector-projection-scene',
        unit: 'm',
        title: 'How much of a survey displacement follows the guide direction?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.',
        context:
          'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.',
        question: 'How much of a survey displacement follows the guide direction?',
        variables: [
          {
            key: 'ux',
            label: 'Measured displacement, x component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_x'
          },
          {
            key: 'uy',
            label: 'Measured displacement, y component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_y'
          },
          {
            key: 'uz',
            label: 'Measured displacement, z component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'u_z'
          },
          {
            key: 'vx',
            label: 'Reference direction, x component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_x'
          },
          {
            key: 'vy',
            label: 'Reference direction, y component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_y'
          },
          {
            key: 'vz',
            label: 'Reference direction, z component',
            unit: 'm',
            min: -2,
            max: 2,
            step: 0.05,
            symbol: 'v_z'
          }
        ],
        parameters: {
          ux: 2,
          uy: 1,
          uz: 1,
          vx: 1,
          vy: 1,
          vz: 0
        },
        timeline: {
          key: 'ux',
          from: -2,
          to: 2,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.',
            formula: 'c = (u · v)/‖v‖; projᵥu = (u · v)/(v · v) v',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose a displacement component',
            body: 'Change Measured displacement, x component and follow its actual mark.',
            formula: 'u_x = {{ux}} m',
            focusLabel: 'Choose a displacement component',
            focusDescription:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Use a unit guide direction',
            body: 'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.',
            formula: 'unit guide = ({{unitX}}, {{unitY}}, {{unitZ}})',
            focusLabel: 'Use a unit guide direction',
            focusDescription:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Separate parallel and perpendicular parts',
            body: 'The parallel part is (1.5,1.5,0) m and the residual is (0.5,−0.5,1) m.',
            formula: 'signed component = {{output}} m; residual = {{residualNorm}} m',
            focusLabel: 'Separate parallel and perpendicular parts',
            focusDescription:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose a displacement component',
            template: 'u_x = {{ux}} m',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            role: 'intermediate',
            label: 'Use a unit guide direction',
            template: 'unit guide = ({{unitX}}, {{unitY}}, {{unitZ}})',
            description:
              'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual.'
          },
          {
            role: 'output',
            label: 'Separate parallel and perpendicular parts',
            template: 'signed component = {{output}} m; residual = {{residualNorm}} m',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          }
        ]
      },
      {
        id: 'story:angular-velocity:connected',
        slug: 'angular-velocity',
        scene: 'angular-velocity-scene',
        unit: 'm/s',
        title: 'Why can a rim point keep its speed while changing velocity?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.',
        context:
          'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.',
        question: 'Why can a rim point keep its speed while changing velocity?',
        variables: [
          {
            key: 'time',
            label: 'Elapsed time t',
            unit: 's',
            min: 0,
            max: 3,
            step: 0.02,
            symbol: 't'
          },
          {
            key: 'radius',
            label: 'Rim radius r',
            unit: 'm',
            min: 0,
            max: 2,
            step: 0.05,
            symbol: 'r'
          },
          {
            key: 'omega',
            label: 'Signed angular velocity ω',
            unit: 'rad/s',
            min: -4,
            max: 4,
            step: 0.05,
            symbol: 'ω'
          }
        ],
        parameters: {
          time: 1,
          radius: 1,
          omega: 1.5
        },
        timeline: {
          key: 'time',
          from: 0,
          to: 3,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.',
            formula: 'θ = ωt; v = ω × r; speed = |ω|r',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose the elapsed time',
            body: 'Change Elapsed time t and follow its actual mark.',
            formula: 't = {{time}} s',
            focusLabel: 'Choose the elapsed time',
            focusDescription:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Accumulate the signed angle',
            body: 'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.',
            formula: 'θ = {{angle}} rad',
            focusLabel: 'Accumulate the signed angle',
            focusDescription:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read tangent and speed',
            body: 'The angle is 1.5 rad and the speed is 1.5 m/s.',
            formula: 'velocity = ({{velocityX}}, {{velocityY}}) m/s; speed = {{output}} m/s',
            focusLabel: 'Read tangent and speed',
            focusDescription:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the elapsed time',
            template: 't = {{time}} s',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            role: 'intermediate',
            label: 'Accumulate the signed angle',
            template: 'θ = {{angle}} rad',
            description:
              'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r.'
          },
          {
            role: 'output',
            label: 'Read tangent and speed',
            template: 'velocity = ({{velocityX}}, {{velocityY}}) m/s; speed = {{output}} m/s',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          }
        ]
      },
      {
        id: 'story:linear-momentum:connected',
        slug: 'linear-momentum',
        scene: 'linear-momentum-scene',
        unit: 'kg·m/s',
        title: 'What changes when the same cart velocity belongs to a heavier cart?',
        eyebrow: 'A constructed geometry and mechanics model',
        presentation: {
          compact: true,
          controlHint:
            'Use one control per quantity. Follow its text, formula and exact marked vector or component.'
        },
        summary:
          'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.',
        context:
          'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.',
        question: 'What changes when the same cart velocity belongs to a heavier cart?',
        variables: [
          {
            key: 'vx',
            label: 'Velocity x component',
            unit: 'm/s',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'v_x'
          },
          {
            key: 'mass',
            label: 'Cart mass m',
            unit: 'kg',
            min: 0.5,
            max: 5,
            step: 0.05,
            symbol: 'm'
          },
          {
            key: 'vy',
            label: 'Velocity y component',
            unit: 'm/s',
            min: -3,
            max: 3,
            step: 0.05,
            symbol: 'v_y'
          }
        ],
        parameters: {
          mass: 2,
          vx: 1,
          vy: 1
        },
        timeline: {
          key: 'vx',
          from: -3,
          to: 3,
          durationMs: 18000
        },
        steps: [
          {
            id: '1',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Keep the stated frame',
            body: 'A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.',
            formula: 'p = m v; |p| = m|v|',
            focusLabel: 'Keep the stated frame',
            focusDescription:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            id: '2',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose the horizontal velocity',
            body: 'Change Velocity x component and follow its actual mark.',
            formula: 'v_x = {{vx}} m/s',
            focusLabel: 'Choose the horizontal velocity',
            focusDescription:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            id: '3',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Scale both components by mass',
            body: 'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.',
            formula: 'momentum = ({{px}}, {{py}}) kg·m/s',
            focusLabel: 'Scale both components by mass',
            focusDescription:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            id: '4',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read the magnitude',
            body: 'The momentum pair is (2,2) kg·m/s.',
            formula: 'momentum magnitude = {{output}} kg·m/s',
            focusLabel: 'Read the magnitude',
            focusDescription:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the horizontal velocity',
            template: 'v_x = {{vx}} m/s',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            role: 'intermediate',
            label: 'Scale both components by mass',
            template: 'momentum = ({{px}}, {{py}}) kg·m/s',
            description:
              'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.'
          },
          {
            role: 'output',
            label: 'Read the magnitude',
            template: 'momentum magnitude = {{output}} kg·m/s',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          }
        ]
      }
    ],
    quantities: {
      'spatial-cross-product': {
        ux: {
          label: 'First edge, x component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        vx: {
          label: 'Second edge, x component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        vz: {
          label: 'Second edge, z component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        nz: {
          label: 'Normal vertical area component',
          role: 'intermediate',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        uy: {
          label: 'First edge, y component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        area: {
          label: 'Parallelogram area',
          role: 'intermediate',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        triangleArea: {
          label: 'Support triangle area',
          role: 'intermediate',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        ny: {
          label: 'Normal depth area component',
          role: 'intermediate',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        uz: {
          label: 'First edge, z component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        vy: {
          label: 'Second edge, y component',
          role: 'input',
          unit: 'm',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        nx: {
          label: 'Normal horizontal area component',
          role: 'intermediate',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        },
        output: {
          label: 'Parallelogram area',
          role: 'output',
          unit: 'm²',
          description:
            'Form each signed two-component determinant in the stated right-handed frame, then take the Euclidean norm for area. Two freely chosen edge vectors in a fixed right-handed orthonormal three-dimensional frame describe a triangular support panel.'
        }
      },
      'scalar-triple-product': {
        baseArea: {
          label: 'Perpendicular base area',
          role: 'intermediate',
          unit: 'm²',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        shear: {
          label: 'Second-edge shear s',
          role: 'input',
          unit: 'm',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        volume: {
          label: 'Nonnegative geometric volume',
          role: 'intermediate',
          unit: 'm³',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        height: {
          label: 'Signed third-edge height h',
          role: 'input',
          unit: 'm',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        length: {
          label: 'First edge length a',
          role: 'input',
          unit: 'm',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        output: {
          label: 'Signed triple product',
          role: 'output',
          unit: 'm³',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        },
        width: {
          label: 'Second perpendicular extent b',
          role: 'input',
          unit: 'm',
          description:
            'For u=(a,0,0), v=(s,b,0) and w=(1,0.5,h), form v cross w and dot with u; the signed result is a b h. A constructed storage frame has edges u=(a,0,0), v=(s,b,0) and w=(1,0.5,h) metres. Changing shear slants it without changing its perpendicular dimensions.'
        }
      },
      'coordinate-transformation': {
        x: {
          label: 'Fixed world x component',
          role: 'input',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        first: {
          label: 'First rotated-frame component',
          role: 'intermediate',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        angle: {
          label: 'Frame angle θ',
          role: 'input',
          unit: 'deg',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        y: {
          label: 'Fixed world y component',
          role: 'input',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        norm: {
          label: 'Unchanged displacement length',
          role: 'intermediate',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        output: {
          label: 'First rotated-frame component',
          role: 'output',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        },
        second: {
          label: 'Second rotated-frame component',
          role: 'intermediate',
          unit: 'm',
          description:
            'Resolve the fixed world vector onto the two rotated unit directions. The coordinate pair uses the inverse, or transpose, of the orthonormal frame rotation. A floor marker has a fixed world displacement. Turn the measuring frame counterclockwise while leaving the marker and physical vector fixed.'
        }
      },
      'vector-projection': {
        ux: {
          label: 'Measured displacement, x component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        vx: {
          label: 'Reference direction, x component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        residualNorm: {
          label: 'Perpendicular residual length',
          role: 'intermediate',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        vz: {
          label: 'Reference direction, z component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        uy: {
          label: 'Measured displacement, y component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        unitX: {
          label: 'Unit-guide horizontal component',
          role: 'intermediate',
          unit: '1',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        unitY: {
          label: 'Unit-guide depth component',
          role: 'intermediate',
          unit: '1',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        uz: {
          label: 'Measured displacement, z component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        vy: {
          label: 'Reference direction, y component',
          role: 'input',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        output: {
          label: 'Signed scalar component',
          role: 'output',
          unit: 'm',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        },
        unitZ: {
          label: 'Unit-guide vertical component',
          role: 'intermediate',
          unit: '1',
          description:
            'Normalize the nonzero reference direction with a scaled norm, take the dot product with that unit direction, and multiply back by the unit direction. Subtract to obtain the orthogonal residual. A survey displacement is resolved along a chosen nonzero reference direction. Keep the parallel part separate from the perpendicular residual.'
        }
      },
      'angular-velocity': {
        angle: {
          label: 'Accumulated or frame angle',
          role: 'intermediate',
          unit: 'rad',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        velocityX: {
          label: 'Horizontal tangent velocity',
          role: 'intermediate',
          unit: 'm/s',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        omega: {
          label: 'Signed angular velocity ω',
          role: 'input',
          unit: 'rad/s',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        radius: {
          label: 'Rim radius r',
          role: 'input',
          unit: 'm',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        velocityY: {
          label: 'Vertical tangent velocity',
          role: 'intermediate',
          unit: 'm/s',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        time: {
          label: 'Elapsed time t',
          role: 'input',
          unit: 's',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        },
        output: {
          label: 'Rim speed',
          role: 'output',
          unit: 'm/s',
          description:
            'Use the radian angle ωt for the circular position. Differentiate to obtain the tangent components (−rω sin(ωt),rω cos(ωt)); their norm is |ω|r. A marked point turns with constant angular velocity on an ideal wheel about the positive z axis. Positive angular velocity is counterclockwise in the displayed plane.'
        }
      },
      'linear-momentum': {
        vx: {
          label: 'Velocity x component',
          role: 'input',
          unit: 'm/s',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        },
        px: {
          label: 'Horizontal momentum component',
          role: 'intermediate',
          unit: 'kg·m/s',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        },
        mass: {
          label: 'Cart mass m',
          role: 'input',
          unit: 'kg',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        },
        py: {
          label: 'Vertical momentum component',
          role: 'intermediate',
          unit: 'kg·m/s',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        },
        vy: {
          label: 'Velocity y component',
          role: 'input',
          unit: 'm/s',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        },
        output: {
          label: 'Momentum magnitude',
          role: 'output',
          unit: 'kg·m/s',
          description:
            'Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude. A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.'
        }
      }
    },
    links: {
      'spatial-cross-product': {
        variableKey: 'vz',
        symbol: 'v_z',
        variableLabel: 'Second edge, z component',
        unit: 'm',
        effectLabel:
          'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            focus: 'input',
            label: 'Set the second edge height',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            focus: 'intermediate',
            label: 'Build the normal',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          },
          {
            focus: 'output',
            label: 'Read the area',
            description:
              'Two rods form the edges of a triangular support panel. Their ends can move in all three coordinate directions. Follow the ordered cross product: its components describe the normal, and its magnitude gives the area of the corresponding parallelogram. The triangle uses half that area.'
          }
        ]
      },
      'scalar-triple-product': {
        variableKey: 'height',
        symbol: 'h',
        variableLabel: 'Signed third-edge height h',
        unit: 'm',
        effectLabel:
          'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            focus: 'input',
            label: 'Set the signed height',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            focus: 'intermediate',
            label: 'Measure the perpendicular base',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          },
          {
            focus: 'output',
            label: 'Keep orientation and size separate',
            description:
              'A storage frame has one edge along the floor, a second floor edge that can shear sideways, and a third edge leaning upward or downward. Follow the cross product of two edges into its dot product with the remaining edge. The sign records orientation; the physical volume takes absolute value.'
          }
        ]
      },
      'coordinate-transformation': {
        variableKey: 'angle',
        symbol: 'θ',
        variableLabel: 'Frame angle θ',
        unit: 'deg',
        effectLabel:
          'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            focus: 'input',
            label: 'Turn the measuring frame',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            focus: 'intermediate',
            label: 'Resolve the fixed displacement',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          },
          {
            focus: 'output',
            label: 'Check the unchanged length',
            description:
              'A surveyor marks one fixed displacement on the floor. A second surveyor turns the measuring frame, rather than moving the marker. Follow the gold arrow while the cyan and violet basis directions turn; the coordinate readings change even though the physical displacement stays put.'
          }
        ]
      },
      'vector-projection': {
        variableKey: 'ux',
        symbol: 'u_x',
        variableLabel: 'Measured displacement, x component',
        unit: 'm',
        effectLabel:
          'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            focus: 'input',
            label: 'Choose a displacement component',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            focus: 'intermediate',
            label: 'Use a unit guide direction',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          },
          {
            focus: 'output',
            label: 'Separate parallel and perpendicular parts',
            description:
              'A survey displacement has three components. A guide direction tells us which part counts as along-guide travel. Normalize that direction, take the signed component, then compare the parallel arrow with the perpendicular residual that completes the displacement.'
          }
        ]
      },
      'angular-velocity': {
        variableKey: 'time',
        symbol: 't',
        variableLabel: 'Elapsed time t',
        unit: 's',
        effectLabel:
          'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            focus: 'input',
            label: 'Choose the elapsed time',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            focus: 'intermediate',
            label: 'Accumulate the signed angle',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          },
          {
            focus: 'output',
            label: 'Read tangent and speed',
            description:
              'A marked point turns on a wheel at constant signed angular velocity. Follow elapsed time into its angle, then into its position and tangent velocity. The cyan tangent changes direction as the point moves; the rim speed keeps the same magnitude while radius and rate stay fixed.'
          }
        ]
      },
      'linear-momentum': {
        variableKey: 'vx',
        symbol: 'v_x',
        variableLabel: 'Velocity x component',
        unit: 'm/s',
        effectLabel:
          'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.',
        steps: [
          {
            focus: 'reference',
            label: 'Keep the stated frame',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            focus: 'input',
            label: 'Choose the horizontal velocity',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            focus: 'intermediate',
            label: 'Scale both components by mass',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
          },
          {
            focus: 'output',
            label: 'Read the magnitude',
            description:
              'A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.'
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
