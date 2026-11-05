/* Original bounded algebra teaching data; no clocks or storage. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgebraExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:algebra-extension:complex-number',
        slug: 'complex-number',
        scene: 'complex-number-algebra-scene',
        unit: 'dimensionless',
        title: 'How far is a plotter offset from the origin, and what does reflection preserve?',
        eyebrow: 'A workshop of algebraic choices',
        presentation: {
          compact: true,
          controlHint: 'Drag one quantity. Follow its highlighted calculation into the shape.'
        },
        summary:
          'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        context:
          'A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.',
        question: 'How far is a plotter offset from the origin, and what does reflection preserve?',
        variables: [
          {
            key: 'imag',
            symbol: 'b',
            label: 'Imaginary component b',
            unit: 'dimensionless',
            min: -4,
            max: 4,
            step: 0.05
          },
          {
            key: 'real',
            symbol: 'a',
            label: 'Real component a',
            unit: 'dimensionless',
            min: -4,
            max: 4,
            step: 0.05
          }
        ],
        parameters: {
          imag: 2,
          real: 3
        },
        timeline: {
          key: 'imag',
          from: -4,
          to: 4,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Set the workshop rule',
            body: 'A drawing plotter works in a unitless design grid. Represent its horizontal and vertical offsets by one complex number. Drag the vertical component: the gold point moves, its violet reflection follows, and both stay on the same gold radius circle.',
            formula: 'z = a + bi; |z| = √(a² + b²)',
            focusLabel: 'The declared model',
            focusDescription:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the offset',
            body: 'The horizontal component is {{real}} and the vertical component is {{imag}}.',
            formula: 'z = {{real}} + {{imag}}i',
            focusLabel: 'Declare the offset',
            focusDescription:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Square both components',
            body: 'The two square contributions add to {{squaredModulus}}.',
            formula: 'a² + b² = {{realSquared}} + {{imagSquared}} = {{squaredModulus}}',
            focusLabel: 'Square both components',
            focusDescription:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Measure and reflect',
            body: 'The gold radius measures the modulus. The reflected vertical component is {{conjugateImag}}.',
            formula: '|z| ≈ {{output}}; Im(z̄) = {{conjugateImag}}',
            focusLabel: 'Measure and reflect',
            focusDescription:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the offset',
            template: 'z = {{real}} + {{imag}}i',
            description:
              'The horizontal component is {{real}} and the vertical component is {{imag}}.'
          },
          {
            role: 'intermediate',
            label: 'Square both components',
            template: 'a² + b² = {{realSquared}} + {{imagSquared}} = {{squaredModulus}}',
            description: 'The two square contributions add to {{squaredModulus}}.'
          },
          {
            role: 'output',
            label: 'Measure and reflect',
            template: '|z| ≈ {{output}}; Im(z̄) = {{conjugateImag}}',
            description:
              'The gold radius measures the modulus. The reflected vertical component is {{conjugateImag}}.'
          }
        ],
        assumptions: [
          'The components are real numbers between −4 and 4 in a declared unitless frame. The complex plane here is a coordinate model; no circuit or empirical measurement is implied. Underflow of a nonzero squared component is reported explicitly.'
        ],
        sourceRefs: ['source:algebra-extension:complex', 'source:algebra-extension:conjugate'],
        conclusion: 'The common radius is √13; reflection changes the vertical sign.'
      },
      {
        id: 'story:algebra-extension:quadratic-equation',
        slug: 'quadratic-equation',
        scene: 'quadratic-equation-algebra-scene',
        unit: 'roots',
        title: 'When does a calibration trace cross its target level?',
        eyebrow: 'A workshop of algebraic choices',
        presentation: {
          compact: true,
          controlHint: 'Drag one quantity. Follow its highlighted calculation into the shape.'
        },
        summary:
          'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        context:
          'A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.',
        question: 'When does a calibration trace cross its target level?',
        variables: [
          {
            key: 'constant',
            symbol: 'c',
            label: 'Calibration offset c',
            unit: 'dimensionless',
            min: -4,
            max: 4,
            step: 0.05
          },
          {
            key: 'linear',
            symbol: 'b',
            label: 'Linear coefficient b',
            unit: 'dimensionless',
            min: -4,
            max: 4,
            step: 0.05
          },
          {
            key: 'leading',
            symbol: 'a',
            label: 'Curvature coefficient a',
            unit: 'dimensionless',
            min: 0.5,
            max: 2,
            step: 0.05
          }
        ],
        parameters: {
          constant: -3,
          linear: -2,
          leading: 1
        },
        timeline: {
          key: 'constant',
          from: -4,
          to: 4,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Set the workshop rule',
            body: 'A calibration trace curves relative to a target line. The leading coefficient fixes the upward curvature, the linear coefficient tilts the trace, and the constant moves it vertically. Drag the constant offset and watch two crossings meet in a tangency before the trace rises clear of the target.',
            formula: 'ax² + bx + c = 0; D = b² − 4ac',
            focusLabel: 'The declared model',
            focusDescription:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Set the calibration coefficients',
            body: 'The constant offset is {{constant}}; curvature and tilt stay declared.',
            formula: 'a = {{leading}}; b = {{linear}}; c = {{constant}}',
            focusLabel: 'Set the calibration coefficients',
            focusDescription:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Compute the discriminant',
            body: 'Its sign determines the real-root case.',
            formula: 'D = b² − 4ac ≈ {{discriminant}}',
            focusLabel: 'Compute the discriminant',
            focusDescription:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Count the real crossings',
            body: 'The current real-root case is: {{rootStatus}}.',
            formula: 'N = {{output}}; roots: {{rootLabel}}',
            focusLabel: 'Count the real crossings',
            focusDescription:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Set the calibration coefficients',
            template: 'a = {{leading}}; b = {{linear}}; c = {{constant}}',
            description: 'The constant offset is {{constant}}; curvature and tilt stay declared.'
          },
          {
            role: 'intermediate',
            label: 'Compute the discriminant',
            template: 'D = b² − 4ac ≈ {{discriminant}}',
            description: 'Its sign determines the real-root case.'
          },
          {
            role: 'output',
            label: 'Count the real crossings',
            template: 'N = {{output}}; roots: {{rootLabel}}',
            description: 'The current real-root case is: {{rootStatus}}.'
          }
        ],
        assumptions: [
          'The leading coefficient is between 0.5 and 2; the other coefficients lie between −4 and 4. Only real solutions are drawn. A double root is one distinct real solution. Exact binary-input discriminant sign is separate from approximate root positions; unresolved numerical distinctions report a precision failure. The fixed drawing window can crop a root.'
        ],
        sourceRefs: ['source:algebra-extension:quadratic'],
        conclusion: 'The trace crosses zero at −1 and 3.'
      },
      {
        id: 'story:algebra-extension:linear-programming',
        slug: 'linear-programming',
        scene: 'linear-programming-algebra-scene',
        unit: 'credits',
        title: 'Which paint mixture gives the largest contribution within the available material?',
        eyebrow: 'A workshop of algebraic choices',
        presentation: {
          compact: true,
          controlHint: 'Drag one quantity. Follow its highlighted calculation into the shape.'
        },
        summary:
          'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        context:
          'A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.',
        question:
          'Which paint mixture gives the largest contribution within the available material?',
        variables: [
          {
            key: 'budget',
            symbol: 'B',
            label: 'Base material B',
            unit: 'L',
            min: 0,
            max: 7,
            step: 0.05
          },
          {
            key: 'rateX',
            symbol: 'p',
            label: 'First blend contribution p',
            unit: 'credits/L',
            min: -3,
            max: 5,
            step: 0.05
          },
          {
            key: 'rateY',
            symbol: 'q',
            label: 'Second blend contribution q',
            unit: 'credits/L',
            min: -3,
            max: 5,
            step: 0.05
          }
        ],
        parameters: {
          budget: 5,
          rateX: 3,
          rateY: 2
        },
        timeline: {
          key: 'budget',
          from: 0,
          to: 7,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Set the workshop rule',
            body: 'A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.',
            formula: 'maximize V = px + qy; x + y ≤ B',
            focusLabel: 'The declared model',
            focusDescription:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the resource',
            body: 'The shared base material is {{budget}} litres; each production choice must fit the shaded region.',
            formula: 'x + y ≤ {{budget}}',
            focusLabel: 'Declare the resource',
            focusDescription:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Compare feasible corners',
            body: 'The current polygon has {{vertexCount}} corners. Evaluate the same linear contribution at each.',
            formula: 'V = {{rateX}}x + {{rateY}}y',
            focusLabel: 'Compare feasible corners',
            focusDescription:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Retain every best choice',
            body: '{{optimalLabel}}. The best contribution is {{output}} credits.',
            formula: 'maximum V ≈ {{output}}; one corner: ({{bestX}}, {{bestY}})',
            focusLabel: 'Retain every best choice',
            focusDescription:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the resource',
            template: 'x + y ≤ {{budget}}',
            description:
              'The shared base material is {{budget}} litres; each production choice must fit the shaded region.'
          },
          {
            role: 'intermediate',
            label: 'Compare feasible corners',
            template: 'V = {{rateX}}x + {{rateY}}y',
            description:
              'The current polygon has {{vertexCount}} corners. Evaluate the same linear contribution at each.'
          },
          {
            role: 'output',
            label: 'Retain every best choice',
            template: 'maximum V ≈ {{output}}; one corner: ({{bestX}}, {{bestY}})',
            description: '{{optimalLabel}}. The best contribution is {{output}} credits.'
          }
        ],
        assumptions: [
          'The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.'
        ],
        sourceRefs: ['source:algebra-extension:lp'],
        conclusion:
          'Four litres of the first blend and one of the second contribute fourteen credits.'
      }
    ],
    quantities: {
      'complex-number': {
        imag: {
          label: 'Imaginary component b',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Imaginary component b. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        real: {
          label: 'Real component a',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Real component a. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        complexPoint: {
          label: 'The represented complex point',
          role: 'intermediate',
          unit: '',
          description:
            'The represented complex point. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        conjugatePoint: {
          label: 'The reflected complex point',
          role: 'intermediate',
          unit: '',
          description:
            'The reflected complex point. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        imaginaryUnit: {
          label: 'The positive unit imaginary-axis direction',
          role: 'reference',
          unit: '',
          description:
            'The positive unit imaginary-axis direction. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        realSquared: {
          label: 'Squared real component',
          role: 'intermediate',
          unit: '',
          description:
            'Squared real component. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        imagSquared: {
          label: 'Squared imaginary component',
          role: 'intermediate',
          unit: '',
          description:
            'Squared imaginary component. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        squaredModulus: {
          label: 'Squared modulus',
          role: 'intermediate',
          unit: '',
          description:
            'Squared modulus. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        conjugateImag: {
          label: 'Imaginary component of the conjugate',
          role: 'intermediate',
          unit: '',
          description:
            'Imaginary component of the conjugate. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        },
        output: {
          label: 'Common modulus',
          role: 'output',
          unit: 'dimensionless',
          description:
            'Common modulus. A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
        }
      },
      'quadratic-equation': {
        constant: {
          label: 'Calibration offset c',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Calibration offset c. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        linear: {
          label: 'Linear coefficient b',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Linear coefficient b. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        leading: {
          label: 'Curvature coefficient a',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Curvature coefficient a. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        discriminant: {
          label: 'Discriminant of the represented inputs',
          role: 'intermediate',
          unit: '',
          description:
            'Discriminant of the represented inputs. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        roots: {
          label: 'Numerical real root coordinates',
          role: 'output',
          unit: '',
          description:
            'Numerical real root coordinates. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        rootStatus: {
          label: 'Real crossing classification',
          role: 'output',
          unit: '',
          description:
            'Real crossing classification. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        rootLabel: {
          label: 'Readable numerical real roots',
          role: 'output',
          unit: '',
          description:
            'Readable numerical real roots. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        },
        output: {
          label: 'Number of distinct real roots',
          role: 'output',
          unit: 'roots',
          description:
            'Number of distinct real roots. The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
        }
      },
      'linear-programming': {
        budget: {
          label: 'Base material B',
          role: 'input',
          unit: 'L',
          description:
            'Base material B. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        rateX: {
          label: 'First blend contribution p',
          role: 'input',
          unit: 'credits/L',
          description:
            'First blend contribution p. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        rateY: {
          label: 'Second blend contribution q',
          role: 'input',
          unit: 'credits/L',
          description:
            'Second blend contribution q. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        vertices: {
          label: 'Feasible corner coordinates',
          role: 'intermediate',
          unit: '',
          description:
            'Feasible corner coordinates. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        vertexValues: {
          label: 'Contribution at every feasible corner',
          role: 'intermediate',
          unit: '',
          description:
            'Contribution at every feasible corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        vertexCount: {
          label: 'Number of feasible corners',
          role: 'intermediate',
          unit: '',
          description:
            'Number of feasible corners. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        maximizingVertexCount: {
          label: 'Number of maximizing corners, not number of optimal mixtures',
          role: 'output',
          unit: '',
          description:
            'Number of maximizing corners, not number of optimal mixtures. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        bestX: {
          label: 'First-blend litres at one maximizing corner',
          role: 'output',
          unit: '',
          description:
            'First-blend litres at one maximizing corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        bestY: {
          label: 'Second-blend litres at one maximizing corner',
          role: 'output',
          unit: '',
          description:
            'Second-blend litres at one maximizing corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        bestUsed: {
          label: 'Material used at one maximizing corner',
          role: 'output',
          unit: '',
          description:
            'Material used at one maximizing corner. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        optimalLabel: {
          label: 'Whether a corner, edge or whole region is optimal',
          role: 'output',
          unit: '',
          description:
            'Whether a corner, edge or whole region is optimal. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        },
        output: {
          label: 'Maximum contribution',
          role: 'output',
          unit: 'credits',
          description:
            'Maximum contribution. Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
        }
      }
    },
    links: {
      'complex-number': {
        variableKey: 'imag',
        symbol: 'b',
        variableLabel: 'Imaginary component b',
        unit: 'dimensionless',
        effectLabel:
          'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.',
        steps: [
          {
            focus: 'reference',
            label: 'Set the workshop rule',
            description:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            focus: 'input',
            label: 'Declare the offset',
            description:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            focus: 'intermediate',
            label: 'Square both components',
            description:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          },
          {
            focus: 'output',
            label: 'Measure and reflect',
            description:
              'A complex number records a real horizontal component and an imaginary vertical component. Reflect the vertical component to obtain the conjugate; the Pythagorean distance gives the common modulus.'
          }
        ]
      },
      'quadratic-equation': {
        variableKey: 'constant',
        symbol: 'c',
        variableLabel: 'Calibration offset c',
        unit: 'dimensionless',
        effectLabel:
          'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.',
        steps: [
          {
            focus: 'reference',
            label: 'Set the workshop rule',
            description:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            focus: 'input',
            label: 'Set the calibration coefficients',
            description:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            focus: 'intermediate',
            label: 'Compute the discriminant',
            description:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          },
          {
            focus: 'output',
            label: 'Count the real crossings',
            description:
              'The discriminant separates two distinct real crossings, one double root and no real roots. The model classifies its exact represented inputs, then evaluates root positions numerically using a cancellation-resistant quadratic calculation.'
          }
        ]
      },
      'linear-programming': {
        variableKey: 'budget',
        symbol: 'B',
        variableLabel: 'Base material B',
        unit: 'L',
        effectLabel:
          'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.',
        steps: [
          {
            focus: 'reference',
            label: 'Set the workshop rule',
            description:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            focus: 'input',
            label: 'Declare the resource',
            description:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            focus: 'intermediate',
            label: 'Compare feasible corners',
            description:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
          },
          {
            focus: 'output',
            label: 'Retain every best choice',
            description:
              'Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.'
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
