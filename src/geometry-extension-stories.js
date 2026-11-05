/* Equal-scale geometry stories; the shared host owns time and state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasGeometryExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    'regular-polygon': {
      title: 'How much floor do equal pavilion panels enclose?',
      unit: 'm²',
      context:
        'A pavilion floor has n equal straight sides, with every corner R metres from its center. Join the center to adjacent corners to make n equal triangular panels. Change the corner radius R or the whole side count n, then follow each panel into the total floor area.',
      summary:
        'Divide one full turn into equal central angles. Use the corner radius to find one side and the perpendicular apothem, then combine the panel areas as half the perimeter times the apothem.',
      parameters: { radius: 3, sides: 6 },
      variables: [
        {
          key: 'radius',
          symbol: 'R',
          label: 'Center-to-corner radius R',
          unit: 'm',
          min: 1,
          max: 4,
          step: 0.05
        },
        {
          key: 'sides',
          symbol: 'n',
          label: 'Equal sides n',
          unit: 'sides',
          min: 3,
          max: 12,
          step: 1,
          discrete: true
        }
      ],
      formula:
        '\\theta=\\frac{2\\pi}{n},\\quad s=2R\\sin(\\theta/2),\\quad a=R\\cos(\\theta/2),\\quad P=ns,\\quad A=\\frac{Pa}{2}.',
      stages: [
        [
          'Split one full turn into panels',
          'R = {{radius}} m; n = {{sides}}; θ ≈ {{centralAngle}} rad',
          'The same radius reaches every corner. Each triangular panel uses the same central angle; the degree reading is another unit for that same angle.'
        ],
        [
          'Measure one side and its perpendicular height',
          's ≈ {{sideLength}} m; a ≈ {{apothem}} m; P ≈ {{perimeter}} m',
          'The side s is a panel’s base. The apothem a is the perpendicular distance from center to that side, so it is the panel height. The perimeter adds all n equal sides.'
        ],
        [
          'Combine the equal triangular panels',
          'A ≈ {{perimeter}} × {{apothem}} / 2 ≈ {{output}} m²',
          'One panel has half its base times its perpendicular height. Adding all n panels gives half the perimeter times the apothem. Radius changes scale continuously; changing the whole side count rebuilds the panels.'
        ]
      ],
      assumptions: [
        'The pavilion boundary is a planar convex regular polygon with three through twelve straight equal sides and a center-to-corner radius from one through four metres. R is the circumradius, not the apothem. Both drawing directions use equal metre scales. Trigonometric calculations use radians; a degree reading is labeled separately. Area is floor area in square metres, not perimeter in metres. The illustration does not include wall thickness, waste or construction tolerances.'
      ],
      sourceRefs: ['source:geometry-extensions:regular-polygon']
    },
    'sphere-measurement': {
      title: 'How does a spherical tank’s radius change its capacity?',
      unit: 'm³',
      context:
        'An ideal spherical tank is completely full. Change its inner radius r, measured from center to the modeled spherical surface. A circle shows the great-circle cross-section on a fixed metre scale; a separate volume bar measures the tank’s capacity. Follow the same radius into diameter, spherical surface area and volume.',
      summary:
        'Double the radius to obtain diameter, square it for the surface-area law and cube it for the volume law. Keep the great-circle area, spherical surface area and tank volume in their own units.',
      parameters: { radius: 2 },
      variables: [
        {
          key: 'radius',
          symbol: 'r',
          label: 'Tank radius r',
          unit: 'm',
          min: 0.25,
          max: 5,
          step: 0.05
        }
      ],
      formula: 'd=2r,\\quad A=4\\pi r^2,\\quad V=\\frac{4}{3}\\pi r^3.',
      stages: [
        [
          'Set one center-to-surface distance',
          'r = {{radius}} m; d ≈ {{diameter}} m',
          'The radius reaches from the center to the sphere’s surface; diameter crosses the full sphere. The illustrated great circle uses that same radius.'
        ],
        [
          'Separate a cross-section from the spherical surface',
          'Great-circle area ≈ {{crossSectionArea}} m²; A ≈ {{surfaceArea}} m²',
          'The flat great circle has area π times radius squared. The entire spherical surface has four times that area. Neither square-metre reading is a volume.'
        ],
        [
          'Read the full tank’s capacity',
          'V ≈ 4 × π × {{radius}}³ / 3 ≈ {{output}} m³',
          'The quantitative bar uses the computed volume on one fixed cubic-metre scale. Radius, area and volume grow at different rates: doubling the radius doubles diameter, quadruples surface area and multiplies capacity by eight.'
        ]
      ],
      assumptions: [
        'The tank is an ideal sphere, completely full, with inner radius from one quarter to five metres. Its circular picture is a great-circle cross-section, not a claim that a drawn circle’s flat area measures capacity. Diameter uses metres, surface and cross-section use square metres, and volume uses cubic metres. The volume bar has one fixed scale across the allowed radii. Partial filling, tank-wall thickness and deformation are outside this model; π is the usual mathematical constant.'
      ],
      sourceRefs: ['source:geometry-extensions:sphere-measurement']
    }
  };
  const quantitySpecs = {
    'regular-polygon': {
      radius: [
        'Center-to-corner radius',
        'input',
        'm',
        'The circumradius reaches every corner on the fixed equal-metre drawing scale.'
      ],
      sides: [
        'Equal straight sides',
        'input',
        'sides',
        'The whole side count also counts the equal triangular panels.'
      ],
      sideLength: [
        'One polygon side',
        'intermediate',
        'm',
        'The base of one center-to-side triangular panel.'
      ],
      apothem: [
        'Center-to-side perpendicular distance',
        'intermediate',
        'm',
        'This is the triangular panel’s height, distinct from its corner radius.'
      ],
      perimeter: [
        'Total boundary length',
        'intermediate',
        'm',
        'The perimeter is the number of equal sides times one side length.'
      ],
      centralAngle: [
        'One panel’s central angle',
        'intermediate',
        'rad',
        'One full turn of two pi radians is divided by the number of sides.'
      ],
      centralAngleDeg: [
        'The same central angle in degrees',
        'intermediate',
        '°',
        'A full turn of 360 degrees is divided into the same equal panels.'
      ],
      vertices: [
        'Polygon corners',
        'input',
        'm',
        'These equal-radius coordinates form the actual polygon; drawing axes use equal metre scales.'
      ],
      triangleArea: [
        'One triangular panel’s area',
        'intermediate',
        'm²',
        'Half of one side length times the perpendicular apothem.'
      ],
      pi: [
        'Pi',
        'reference',
        '',
        'The mathematical constant pi makes one full turn equal to two pi radians.'
      ],
      area: [
        'Total floor area',
        'output',
        'm²',
        'Add the n equal panel areas, equivalently half the perimeter times apothem.'
      ],
      output: [
        'Total floor area',
        'output',
        'm²',
        'The primary result is the enclosed area, not the perimeter or a circle’s area.'
      ]
    },
    'sphere-measurement': {
      radius: [
        'Tank inner radius',
        'input',
        'm',
        'The one center-to-surface distance determines all measurements in this ideal sphere.'
      ],
      diameter: [
        'Tank diameter',
        'intermediate',
        'm',
        'The full center-crossing distance is twice the radius.'
      ],
      crossSectionArea: [
        'Great-circle cross-section area',
        'intermediate',
        'm²',
        'The flat central circle has area pi times radius squared; it does not measure volume.'
      ],
      surfaceArea: [
        'Spherical surface area',
        'intermediate',
        'm²',
        'The modeled spherical surface has area four pi times the inner radius squared.'
      ],
      volume: [
        'Full spherical tank capacity',
        'output',
        'm³',
        'The full volume is four thirds times pi times radius cubed; the separate bar measures this quantity.'
      ],
      pi: [
        'Pi',
        'reference',
        '',
        'The constant pi is shared by the circular-area, sphere-area and sphere-volume laws.'
      ],
      output: [
        'Full spherical tank capacity',
        'output',
        'm³',
        'The primary result is the full ideal-sphere volume in cubic metres.'
      ]
    }
  };
  const roles = ['input', 'intermediate', 'output'];
  const stories = Object.entries(specs).map(([slug, spec]) => {
    const calculation = spec.stages.map(([label, template, description], i) => ({
      role: roles[i],
      label,
      template,
      description
    }));
    return {
      id: 'story:geometry-extension:' + slug,
      slug,
      scene: slug + '-geometry-extension-scene',
      unit: spec.unit,
      title: spec.title,
      question: spec.title,
      eyebrow: 'One dimension, connected measurements',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected radius or side count through the formula into its actual shape and measurement. Pause for a closer reading.'
      },
      summary: spec.summary,
      context: spec.context,
      variables: spec.variables,
      parameters: spec.parameters,
      timeline: {
        key: spec.variables[0].key,
        from: spec.variables[0].min,
        to: spec.variables[0].max,
        durationMs: 18000
      },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the measurement model',
          body: spec.context,
          formula: spec.formula,
          focusLabel: 'The measurement model',
          focusDescription: spec.summary
        },
        ...calculation.map((stage, i) => ({
          id: stage.role,
          from: (i + 1) / 4,
          to: (i + 2) / 4,
          focus: stage.role,
          title: stage.label,
          body: stage.description,
          formula: stage.template,
          focusLabel: stage.label,
          focusDescription: stage.description
        }))
      ],
      calculation,
      assumptions: spec.assumptions,
      sourceRefs: spec.sourceRefs,
      conclusion: spec.summary
    };
  });
  const quantities = Object.fromEntries(
    Object.entries(quantitySpecs).map(([slug, entries]) => [
      slug,
      Object.fromEntries(
        Object.entries(entries).map(([key, [label, role, unit, description]]) => [
          key,
          { label, role, unit, description }
        ])
      )
    ])
  );
  const links = Object.fromEntries(
    stories.map(story => [
      story.slug,
      {
        variableKey: story.variables[0].key,
        symbol: story.variables[0].symbol,
        variableLabel: story.variables[0].label,
        unit: story.variables[0].unit,
        effectLabel: story.summary,
        steps: story.steps.map(step => ({
          focus: step.focus,
          label: step.focusLabel,
          description: step.focusDescription
        }))
      }
    ])
  );
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }
  freeze({ stories, quantities, links });
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(story => story.slug === slug) || null,
    find: id => stories.find(story => story.id === id) || null,
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null)
  });
});
