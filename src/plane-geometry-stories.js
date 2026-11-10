(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPlaneGeometryStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const stories = [
    {
      id: 'story:plane-geometry:triangle-measurement',
      slug: 'triangle-measurement',
      scene: 'triangle-measurement-plane-geometry-scene',
      unit: 'm²',
      title: 'Can a shade sail change shape without changing its area?',
      question: 'Can a shade sail change shape without changing its area?',
      eyebrow: 'One rule, measured shapes',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected quantity from the story through the calculation into its colored geometric mark. Pause to read a value.'
      },
      summary:
        'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
      context:
        'A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.',
      variables: [
        {
          key: 'height',
          label: 'Perpendicular height h',
          symbol: 'h',
          min: 0.5,
          max: 4,
          step: 0.05,
          unit: 'm'
        },
        { key: 'base', label: 'Anchor base b', symbol: 'b', min: 1, max: 6, step: 0.05, unit: 'm' },
        { key: 'skew', label: 'Apex shift s', symbol: 's', min: -2, max: 2, step: 0.05, unit: 'm' }
      ],
      parameters: { height: 2, base: 4, skew: 0 },
      timeline: { key: 'height', to: 4, durationMs: 18000, from: 0.5 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the geometric rule',
          body: 'A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.',
          formula: 'x=b/2+s,\\quad A=\\frac{bh}{2},\\quad P=b+\\sqrt{x^2+h^2}+\\sqrt{(b-x)^2+h^2}.',
          focusLabel: 'The geometric model',
          focusDescription:
            'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
          from: 0
        },
        {
          id: 'input',
          to: 0.5,
          focus: 'input',
          title: 'Set the anchor line and perpendicular height',
          body: 'Cyan marks the anchored base. Green marks the perpendicular height, which is different from either sloping edge.',
          formula: 'b = {{base}} m; h = {{height}} m; s = {{skew}} m',
          focusLabel: 'Set the anchor line and perpendicular height',
          focusDescription:
            'Cyan marks the anchored base. Green marks the perpendicular height, which is different from either sloping edge.',
          from: 0.25
        },
        {
          id: 'intermediate',
          to: 0.75,
          focus: 'intermediate',
          title: 'Locate the upper anchor',
          body: 'The horizontal coordinate x moves the upper vertex. Sliding it while keeping the height fixed is a shear of this triangle.',
          formula: 'x ≈ {{base}} / 2 + {{skew}} ≈ {{apex}} m',
          focusLabel: 'Locate the upper anchor',
          focusDescription:
            'The horizontal coordinate x moves the upper vertex. Sliding it while keeping the height fixed is a shear of this triangle.',
          from: 0.5
        },
        {
          id: 'output',
          to: 1.0,
          focus: 'output',
          title: 'Measure the covered floor area',
          body: 'Half the base-height rectangle has the same area as this triangle. The gold region changes shape as the corner slides, while the area reading stays fixed at a fixed height.',
          formula: 'A ≈ {{base}} × {{height}} / 2 ≈ {{output}} m²',
          focusLabel: 'Measure the covered floor area',
          focusDescription:
            'Half the base-height rectangle has the same area as this triangle. The gold region changes shape as the corner slides, while the area reading stays fixed at a fixed height.',
          from: 0.75
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the anchor line and perpendicular height',
          template: 'b = {{base}} m; h = {{height}} m; s = {{skew}} m',
          description:
            'Cyan marks the anchored base. Green marks the perpendicular height, which is different from either sloping edge.'
        },
        {
          role: 'intermediate',
          label: 'Locate the upper anchor',
          template: 'x ≈ {{base}} / 2 + {{skew}} ≈ {{apex}} m',
          description:
            'The horizontal coordinate x moves the upper vertex. Sliding it while keeping the height fixed is a shear of this triangle.'
        },
        {
          role: 'output',
          label: 'Measure the covered floor area',
          template: 'A ≈ {{base}} × {{height}} / 2 ≈ {{output}} m²',
          description:
            'Half the base-height rectangle has the same area as this triangle. The gold region changes shape as the corner slides, while the area reading stays fixed at a fixed height.'
        }
      ],
      assumptions: [
        'Use base 1–6 m, perpendicular height 0.5–4 m and signed apex shift−2–2 m. The triangle is planar and nondegenerate; the height is perpendicular to the entire line through the base. This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.'
      ],
      sourceRefs: ['source:plane-geometry:triangle-measurement'],
      conclusion:
        'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
    },
    {
      id: 'story:plane-geometry:similar-triangles',
      slug: 'similar-triangles',
      scene: 'similar-triangles-plane-geometry-scene',
      unit: 'm²',
      title: 'How much more material does an enlarged triangular panel need?',
      question: 'How much more material does an enlarged triangular panel need?',
      eyebrow: 'One rule, measured shapes',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected quantity from the story through the calculation into its colored geometric mark. Pause to read a value.'
      },
      summary:
        'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
      context:
        'A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.',
      variables: [
        {
          key: 'scale',
          label: 'Length scale factor k',
          symbol: 'k',
          min: 0.25,
          max: 2,
          step: 0.025,
          unit: ''
        }
      ],
      parameters: { scale: 1.25 },
      timeline: { key: 'scale', to: 2, durationMs: 18000, from: 0.25 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the geometric rule',
          body: 'A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.',
          formula: 'b=3k,\\quad h=4k,\\quad c=5k,\\quad A=\\frac{bh}{2}=6k^2,\\quad q=k^2.',
          focusLabel: 'The geometric model',
          focusDescription:
            'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
          from: 0
        },
        {
          id: 'input',
          to: 0.5,
          focus: 'input',
          title: 'Choose one common length factor',
          body: 'The original 3–4–5 triangle stays as a dashed outline. A positive common factor scales both perpendicular directions together.',
          formula: 'k = {{scale}}; reference area = {{referenceArea}} m²',
          focusLabel: 'Choose one common length factor',
          focusDescription:
            'The original 3–4–5 triangle stays as a dashed outline. A positive common factor scales both perpendicular directions together.',
          from: 0.25
        },
        {
          id: 'intermediate',
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow it into corresponding sides',
          body: 'Each side is its original length times the same k. The right angle and all other corresponding angles stay unchanged.',
          formula: 'b ≈ {{base}} m; h ≈ {{height}} m; c ≈ {{hypotenuse}} m',
          focusLabel: 'Follow it into corresponding sides',
          focusDescription:
            'Each side is its original length times the same k. The right angle and all other corresponding angles stay unchanged.',
          from: 0.5
        },
        {
          id: 'output',
          to: 1.0,
          focus: 'output',
          title: 'Count the two area factors',
          body: 'The base contributes one factor k and height contributes another. The panel area is 6 k², so the area ratio q is k².',
          formula: 'A ≈ {{base}} × {{height}} / 2 ≈ {{output}} m²; q ≈ {{areaFactor}}',
          focusLabel: 'Count the two area factors',
          focusDescription:
            'The base contributes one factor k and height contributes another. The panel area is 6 k², so the area ratio q is k².',
          from: 0.75
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Choose one common length factor',
          template: 'k = {{scale}}; reference area = {{referenceArea}} m²',
          description:
            'The original 3–4–5 triangle stays as a dashed outline. A positive common factor scales both perpendicular directions together.'
        },
        {
          role: 'intermediate',
          label: 'Follow it into corresponding sides',
          template: 'b ≈ {{base}} m; h ≈ {{height}} m; c ≈ {{hypotenuse}} m',
          description:
            'Each side is its original length times the same k. The right angle and all other corresponding angles stay unchanged.'
        },
        {
          role: 'output',
          label: 'Count the two area factors',
          template: 'A ≈ {{base}} × {{height}} / 2 ≈ {{output}} m²; q ≈ {{areaFactor}}',
          description:
            'The base contributes one factor k and height contributes another. The panel area is 6 k², so the area ratio q is k².'
        }
      ],
      assumptions: [
        'The reference is a 3–4–5 right triangle measured in metres. A positive uniform length scale factor k ranges from 0.25 to 2, with no rotation or deformation. Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.'
      ],
      sourceRefs: ['source:plane-geometry:similar-triangles'],
      conclusion:
        'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
    },
    {
      id: 'story:plane-geometry:perpendicular-bisector',
      slug: 'perpendicular-bisector',
      scene: 'perpendicular-bisector-plane-geometry-scene',
      unit: 'm',
      title: 'How can two equal compass circles find the midway line?',
      question: 'How can two equal compass circles find the midway line?',
      eyebrow: 'One rule, measured shapes',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected quantity from the story through the calculation into its colored geometric mark. Pause to read a value.'
      },
      summary:
        'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
      context:
        'A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.',
      variables: [
        {
          key: 'radius',
          label: 'Equal compass radius r',
          symbol: 'r',
          min: 2,
          max: 4,
          step: 0.025,
          unit: 'm'
        },
        {
          key: 'distance',
          label: 'Stake separation d',
          symbol: 'd',
          min: 2,
          max: 4,
          step: 0.025,
          unit: 'm'
        }
      ],
      parameters: { radius: 3, distance: 4 },
      timeline: { key: 'radius', to: 4, durationMs: 18000, from: 2 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the geometric rule',
          body: 'A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.',
          formula: 'h=\\sqrt{r^2-d^2/4},\\quad \\ell=2h,\\quad r\\ge d/2.',
          focusLabel: 'The geometric model',
          focusDescription:
            'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
          from: 0
        },
        {
          id: 'input',
          to: 0.5,
          focus: 'input',
          title: 'Use the same radius at both stakes',
          body: 'The two cyan circles have the same radius. A point on both has equal distances from the two stake centers.',
          formula: 'd = {{distance}} m; r = {{radius}} m',
          focusLabel: 'Use the same radius at both stakes',
          focusDescription:
            'The two cyan circles have the same radius. A point on both has equal distances from the two stake centers.',
          from: 0.25
        },
        {
          id: 'intermediate',
          to: 0.75,
          focus: 'intermediate',
          title: 'Find the intersection height',
          body: 'The midpoint, stake and upper intersection form a right triangle. Its hypotenuse is r and horizontal leg is d/2, so the height follows from Pythagoras.',
          formula: 'd / 2 ≈ {{halfDistance}} m; h ≈ {{height}} m',
          focusLabel: 'Find the intersection height',
          focusDescription:
            'The midpoint, stake and upper intersection form a right triangle. Its hypotenuse is r and horizontal leg is d/2, so the height follows from Pythagoras.',
          from: 0.5
        },
        {
          id: 'output',
          to: 1.0,
          focus: 'output',
          title: 'Join two distinct intersection points',
          body: 'The gold segment joins two intersections when their separation is positive. At zero separation the circles only touch: one point does not determine the construction line.',
          formula: 'ℓ ≈ 2 × {{height}} ≈ {{output}} m; points = {{intersectionCount}}',
          focusLabel: 'Join two distinct intersection points',
          focusDescription:
            'The gold segment joins two intersections when their separation is positive. At zero separation the circles only touch: one point does not determine the construction line.',
          from: 0.75
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Use the same radius at both stakes',
          template: 'd = {{distance}} m; r = {{radius}} m',
          description:
            'The two cyan circles have the same radius. A point on both has equal distances from the two stake centers.'
        },
        {
          role: 'intermediate',
          label: 'Find the intersection height',
          template: 'd / 2 ≈ {{halfDistance}} m; h ≈ {{height}} m',
          description:
            'The midpoint, stake and upper intersection form a right triangle. Its hypotenuse is r and horizontal leg is d/2, so the height follows from Pythagoras.'
        },
        {
          role: 'output',
          label: 'Join two distinct intersection points',
          template: 'ℓ ≈ 2 × {{height}} ≈ {{output}} m; points = {{intersectionCount}}',
          description:
            'The gold segment joins two intersections when their separation is positive. At zero separation the circles only touch: one point does not determine the construction line.'
        }
      ],
      assumptions: [
        'Both stake separation d and compass radius r range from 2 to 4 metres. Thus r≥d/2. At the only equality boundary d=4 m,r=2 m the circles touch once; for all other allowed inputs there are two intersections. This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.'
      ],
      sourceRefs: ['source:plane-geometry:perpendicular-bisector'],
      conclusion:
        'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
    },
    {
      id: 'story:plane-geometry:ellipse-section',
      slug: 'ellipse-section',
      scene: 'ellipse-section-plane-geometry-scene',
      unit: 'm²',
      title: 'How does a fixed string-length rule shape an elliptical garden?',
      question: 'How does a fixed string-length rule shape an elliptical garden?',
      eyebrow: 'One rule, measured shapes',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected quantity from the story through the calculation into its colored geometric mark. Pause to read a value.'
      },
      summary:
        'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
      context:
        'A garden designer marks two fixed foci, each c metres from the center. A moving boundary marker must keep the total length of its two straight strings to those foci equal to 2 a metres. Change the long half-axis a or focus spacing c, then drag the point parameter t to see the same distance-sum rule at different places on the garden boundary.',
      variables: [
        {
          key: 'major',
          label: 'Semimajor axis a',
          symbol: 'a',
          min: 3,
          max: 5,
          step: 0.025,
          unit: 'm'
        },
        {
          key: 'focus',
          label: 'Center-to-focus distance c',
          symbol: 'c',
          min: 0,
          max: 2,
          step: 0.025,
          unit: 'm'
        },
        {
          key: 'angle',
          label: 'Boundary parameter t',
          symbol: 't',
          min: 0,
          max: 6.283185307179586,
          step: 0.025,
          unit: 'rad'
        }
      ],
      parameters: { major: 4, focus: 2, angle: 1.0471975511965976 },
      timeline: { key: 'major', to: 5, durationMs: 18000, from: 3 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the geometric rule',
          body: 'A garden designer marks two fixed foci, each c metres from the center. A moving boundary marker must keep the total length of its two straight strings to those foci equal to 2 a metres. Change the long half-axis a or focus spacing c, then drag the point parameter t to see the same distance-sum rule at different places on the garden boundary.',
          formula:
            'b=\\sqrt{a^2-c^2},\\quad x=a\\cos t,\\quad y=b\\sin t,\\quad d_1=\\sqrt{(x+c)^2+y^2},\\quad d_2=\\sqrt{(x-c)^2+y^2},\\quad d_1+d_2=2a,\\quad A=\\pi ab.',
          focusLabel: 'The geometric model',
          focusDescription:
            'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
          from: 0
        },
        {
          id: 'input',
          to: 0.5,
          focus: 'input',
          title: 'Set the two foci and total string length',
          body: 'The cyan points sit c metres to either side of center. The total distance from one focus to the boundary marker and on to the other is always 2 a.',
          formula: 'a = {{major}} m; c = {{focus}} m; 2a ≈ {{stringLength}} m',
          focusLabel: 'Set the two foci and total string length',
          focusDescription:
            'The cyan points sit c metres to either side of center. The total distance from one focus to the boundary marker and on to the other is always 2 a.',
          from: 0.25
        },
        {
          id: 'intermediate',
          to: 0.75,
          focus: 'intermediate',
          title: 'Find the shorter half-axis and the moving point',
          body: 'At the top of the ellipse the two focus distances are equal to a. The right triangle with legs b and c gives b²=a²−c². Parameter t places the same moving marker on the boundary.',
          formula: 'b ≈ {{minor}} m; x ≈ {{pointX}} m; y ≈ {{pointY}} m',
          focusLabel: 'Find the shorter half-axis and the moving point',
          focusDescription:
            'At the top of the ellipse the two focus distances are equal to a. The right triangle with legs b and c gives b²=a²−c². Parameter t places the same moving marker on the boundary.',
          from: 0.5
        },
        {
          id: 'output',
          to: 1.0,
          focus: 'output',
          title: 'Check the distance sum and enclosed area',
          body: 'The colored strings share the fixed total 2 a. Moving the point changes each part, while the gold region has areaπab. Focus spacing reshapes that region without changing its semimajor axis.',
          formula:
            'd₁ + d₂ ≈ {{firstDistance}} + {{secondDistance}} ≈ {{distanceSum}} m; A ≈ {{output}} m²',
          focusLabel: 'Check the distance sum and enclosed area',
          focusDescription:
            'The colored strings share the fixed total 2 a. Moving the point changes each part, while the gold region has areaπab. Focus spacing reshapes that region without changing its semimajor axis.',
          from: 0.75
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the two foci and total string length',
          template: 'a = {{major}} m; c = {{focus}} m; 2a ≈ {{stringLength}} m',
          description:
            'The cyan points sit c metres to either side of center. The total distance from one focus to the boundary marker and on to the other is always 2 a.'
        },
        {
          role: 'intermediate',
          label: 'Find the shorter half-axis and the moving point',
          template: 'b ≈ {{minor}} m; x ≈ {{pointX}} m; y ≈ {{pointY}} m',
          description:
            'At the top of the ellipse the two focus distances are equal to a. The right triangle with legs b and c gives b²=a²−c². Parameter t places the same moving marker on the boundary.'
        },
        {
          role: 'output',
          label: 'Check the distance sum and enclosed area',
          template:
            'd₁ + d₂ ≈ {{firstDistance}} + {{secondDistance}} ≈ {{distanceSum}} m; A ≈ {{output}} m²',
          description:
            'The colored strings share the fixed total 2 a. Moving the point changes each part, while the gold region has areaπab. Focus spacing reshapes that region without changing its semimajor axis.'
        }
      ],
      assumptions: [
        'Semimajor axis a ranges from 3 to 5 metres, center-to-focus distance c from 0 to 2 metres, and boundary parameter t from 0 to 2π radians. Thus a>c, with a positive semiminor axis. At c=0 this family includes a circle. This is a nondegenerate planar ellipse with horizontal major axis. The semimajor axis is half its longest diameter, not a full diameter. The parameter t generally differs from the polar angle. The focus-distance strings are measured lengths, not ellipse perimeter; no orbit mechanics or general classification of conic sections is claimed.'
      ],
      sourceRefs: ['source:plane-geometry:ellipse-section'],
      conclusion:
        'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
    }
  ];
  const quantities = {
    'triangle-measurement': {
      height: {
        label: 'Perpendicular height h',
        role: 'input',
        unit: 'm',
        description:
          'A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.'
      },
      base: {
        label: 'Anchor base b',
        role: 'input',
        unit: 'm',
        description:
          'A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.'
      },
      skew: {
        label: 'Apex shift s',
        role: 'input',
        unit: 'm',
        description:
          'A triangular shade sail has two anchors along a base b metres long. Its third anchor sits h metres above the line through that base, shifted s metres from its midpoint. Change the height or slide the upper anchor sideways. The dashed height stays perpendicular to the anchor line, even when its foot lies beyond a base endpoint.'
      },
      output: {
        label: 'Enclosed triangular area in square metres',
        role: 'output',
        unit: 'm²',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      area: {
        label: 'area',
        role: 'output',
        unit: 'm²',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      apex: {
        label: 'Upper corner horizontal coordinate measured from the left anchor, in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      leftSide: {
        label: 'left side',
        role: 'intermediate',
        unit: '',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      rightSide: {
        label: 'right side',
        role: 'intermediate',
        unit: '',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      perimeter: {
        label: 'Total triangle boundary length in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
      },
      vertices: {
        label: 'Triangle vertices',
        role: 'intermediate',
        unit: 'm',
        description:
          'This ideal shade sail is a planar triangle. The height is a perpendicular distance, not a sloping edge. Its foot may lie outside the base segment. The model reports geometric area and perimeter, without fabric stretch, folds or construction allowances.'
      }
    },
    'similar-triangles': {
      scale: {
        label: 'Length scale factor k',
        role: 'input',
        unit: '',
        description:
          'A designer begins with a triangular panel whose perpendicular sides are 3 and 4 metres and whose sloping side is 5 metres. The dashed outline keeps that original panel in place. Change one scale factor k to build a similar panel on the same metre scale, then compare its side lengths and material area with the original.'
      },
      output: {
        label: 'Scaled enclosed area in square metres',
        role: 'output',
        unit: 'm²',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      area: {
        label: 'area',
        role: 'output',
        unit: 'm²',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      base: {
        label: 'Scaled base length in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      height: {
        label: 'Scaled perpendicular height in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      hypotenuse: {
        label: 'Scaled sloping side length in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      perimeter: {
        label: 'perimeter',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      areaFactor: {
        label: 'Dimensionless ratio of scaled area to the 6-square-metre reference area',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      referenceArea: {
        label: 'reference area',
        role: 'intermediate',
        unit: '',
        description:
          'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
      },
      vertices: {
        label: 'Triangle vertices',
        role: 'intermediate',
        unit: 'm',
        description:
          'Corresponding angles stay equal because both coordinate directions use the same positive scale. Matching side names express correspondence, not equality of length. The 6-square-metre reference outline and the scaled panel share one fixed drawing scale. Fabric allowance and stress are outside this geometric model.'
      }
    },
    'perpendicular-bisector': {
      radius: {
        label: 'Equal compass radius r',
        role: 'input',
        unit: 'm',
        description:
          'A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.'
      },
      distance: {
        label: 'Stake separation d',
        role: 'input',
        unit: 'm',
        description:
          'A gardener wants a straight border equally distant from two stakes. Set their separation d and draw equal-radius compass circles around them. Their two intersections can be joined by a straightedge. Increase the compass radius and watch those points move apart while the midpoint line stays in the same place.'
      },
      output: {
        label:
          'Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency',
        role: 'output',
        unit: 'm',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      separation: {
        label: 'separation',
        role: 'output',
        unit: 'm',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      height: {
        label: 'Nonnegative intersection height above the stake line, in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      halfDistance: {
        label: 'half distance',
        role: 'intermediate',
        unit: '',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      equalDistance: {
        label: 'equal distance',
        role: 'intermediate',
        unit: '',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      intersectionCount: {
        label: 'intersection count',
        role: 'intermediate',
        unit: '',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      midpoint: {
        label: 'midpoint',
        role: 'intermediate',
        unit: '',
        description:
          'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
      },
      constructionState: {
        label: 'Circle intersection state',
        role: 'intermediate',
        unit: '',
        description:
          'This is an equal-radius rigid-compass construction. A tangent point is one point, not a pair that determines a line. The perpendicular bisector exists at tangency, but the two-intersection procedure cannot construct it there. Nonintersecting circles, arbitrary ruler constructions and the full classical construction theory remain separate.'
      }
    },
    'ellipse-section': {
      major: {
        label: 'Semimajor axis a',
        role: 'input',
        unit: 'm',
        description:
          'A garden designer marks two fixed foci, each c metres from the center. A moving boundary marker must keep the total length of its two straight strings to those foci equal to 2 a metres. Change the long half-axis a or focus spacing c, then drag the point parameter t to see the same distance-sum rule at different places on the garden boundary.'
      },
      focus: {
        label: 'Center-to-focus distance c',
        role: 'input',
        unit: 'm',
        description:
          'A garden designer marks two fixed foci, each c metres from the center. A moving boundary marker must keep the total length of its two straight strings to those foci equal to 2 a metres. Change the long half-axis a or focus spacing c, then drag the point parameter t to see the same distance-sum rule at different places on the garden boundary.'
      },
      angle: {
        label: 'Boundary parameter t',
        role: 'input',
        unit: 'rad',
        description:
          'A garden designer marks two fixed foci, each c metres from the center. A moving boundary marker must keep the total length of its two straight strings to those foci equal to 2 a metres. Change the long half-axis a or focus spacing c, then drag the point parameter t to see the same distance-sum rule at different places on the garden boundary.'
      },
      output: {
        label: 'Enclosed elliptical area in square metres',
        role: 'output',
        unit: 'm²',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      area: {
        label: 'area',
        role: 'output',
        unit: 'm²',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      minor: {
        label: 'Semiminor axis in metres, half the shortest ellipse diameter',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      pointX: {
        label: 'Horizontal boundary-point coordinate in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      pointY: {
        label: 'Vertical boundary-point coordinate in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      firstDistance: {
        label: 'Distance from the point to the left focus in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      secondDistance: {
        label: 'Distance from the point to the right focus in metres',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      distanceSum: {
        label: 'distanceSum',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      stringLength: {
        label: 'string length',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      eccentricity: {
        label: 'eccentricity',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      },
      pi: {
        label: 'Euclidean circle constant pi',
        role: 'intermediate',
        unit: '',
        description:
          'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
      }
    }
  };
  const links = {
    'triangle-measurement': {
      variableKey: 'height',
      symbol: 'h',
      variableLabel: 'Perpendicular height h',
      unit: 'm',
      effectLabel:
        'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
      steps: [
        {
          focus: 'reference',
          label: 'The geometric model',
          description:
            'Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.'
        },
        {
          focus: 'input',
          label: 'Set the anchor line and perpendicular height',
          description:
            'Cyan marks the anchored base. Green marks the perpendicular height, which is different from either sloping edge.'
        },
        {
          focus: 'intermediate',
          label: 'Locate the upper anchor',
          description:
            'The horizontal coordinate x moves the upper vertex. Sliding it while keeping the height fixed is a shear of this triangle.'
        },
        {
          focus: 'output',
          label: 'Measure the covered floor area',
          description:
            'Half the base-height rectangle has the same area as this triangle. The gold region changes shape as the corner slides, while the area reading stays fixed at a fixed height.'
        }
      ]
    },
    'similar-triangles': {
      variableKey: 'scale',
      symbol: 'k',
      variableLabel: 'Length scale factor k',
      unit: '',
      effectLabel:
        'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
      steps: [
        {
          focus: 'reference',
          label: 'The geometric model',
          description:
            'Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.'
        },
        {
          focus: 'input',
          label: 'Choose one common length factor',
          description:
            'The original 3–4–5 triangle stays as a dashed outline. A positive common factor scales both perpendicular directions together.'
        },
        {
          focus: 'intermediate',
          label: 'Follow it into corresponding sides',
          description:
            'Each side is its original length times the same k. The right angle and all other corresponding angles stay unchanged.'
        },
        {
          focus: 'output',
          label: 'Count the two area factors',
          description:
            'The base contributes one factor k and height contributes another. The panel area is 6 k², so the area ratio q is k².'
        }
      ]
    },
    'perpendicular-bisector': {
      variableKey: 'radius',
      symbol: 'r',
      variableLabel: 'Equal compass radius r',
      unit: 'm',
      effectLabel:
        'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
      steps: [
        {
          focus: 'reference',
          label: 'The geometric model',
          description:
            'Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.'
        },
        {
          focus: 'input',
          label: 'Use the same radius at both stakes',
          description:
            'The two cyan circles have the same radius. A point on both has equal distances from the two stake centers.'
        },
        {
          focus: 'intermediate',
          label: 'Find the intersection height',
          description:
            'The midpoint, stake and upper intersection form a right triangle. Its hypotenuse is r and horizontal leg is d/2, so the height follows from Pythagoras.'
        },
        {
          focus: 'output',
          label: 'Join two distinct intersection points',
          description:
            'The gold segment joins two intersections when their separation is positive. At zero separation the circles only touch: one point does not determine the construction line.'
        }
      ]
    },
    'ellipse-section': {
      variableKey: 'major',
      symbol: 'a',
      variableLabel: 'Semimajor axis a',
      unit: 'm',
      effectLabel:
        'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
      steps: [
        {
          focus: 'reference',
          label: 'The geometric model',
          description:
            'Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.'
        },
        {
          focus: 'input',
          label: 'Set the two foci and total string length',
          description:
            'The cyan points sit c metres to either side of center. The total distance from one focus to the boundary marker and on to the other is always 2 a.'
        },
        {
          focus: 'intermediate',
          label: 'Find the shorter half-axis and the moving point',
          description:
            'At the top of the ellipse the two focus distances are equal to a. The right triangle with legs b and c gives b²=a²−c². Parameter t places the same moving marker on the boundary.'
        },
        {
          focus: 'output',
          label: 'Check the distance sum and enclosed area',
          description:
            'The colored strings share the fixed total 2 a. Moving the point changes each part, while the gold region has areaπab. Focus spacing reshapes that region without changing its semimajor axis.'
        }
      ]
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze({ stories, quantities, links });
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(s => s.slug === slug) || null,
    find: id => stories.find(s => s.id === id) || null,
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null)
  });
});
