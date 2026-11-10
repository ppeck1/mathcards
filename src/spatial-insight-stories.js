/* Original connected stories for the spatial-insight family. Shared host owns state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatialInsightStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const specs = {
    'platonic-solids': {
      title: 'How can five different display frames keep the same Euler count?',
      unit: 'faces',
      context:
        'A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.',
      summary:
        'A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.',
      parameters: {
        solid: 2
      },
      variables: [
        {
          key: 'solid',
          symbol: 's',
          label: 'Solid: 1 tetra · 2 cube · 3 octa · 4 dodeca · 5 icosa',
          unit: 'choice',
          min: 1,
          max: 5,
          step: 1,
          discrete: true
        }
      ],
      formula: 'V-E+F=2.',
      stages: [
        [
          'Choose a named solid',
          's = {{solid}} · {{name}}',
          'The whole choice selects one actual regular convex frame. Sliding to another choice replaces its connections rather than bending one solid continuously.'
        ],
        [
          'Count the actual connections',
          'V = {{vertexCount}}; E = {{edgeCount}}; F = {{faceCount}}',
          'Corners, connecting edges and polygon faces have different meanings. The view shows all spatial edges; intersections on the screen are not extra joints.'
        ],
        [
          'Follow the counts into Euler’s relation',
          '{{vertexCount}} − {{edgeCount}} + {{faceCount}} = {{euler}}',
          'Subtract the edge count from the corner count, then add the faces. These five different frames all give two. The primary graph separately compares their face counts.'
        ]
      ],
      assumptions: [
        'Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.'
      ],
      sourceRefs: ['source:spatial-insights:solid', 'source:spatial-insights:euler']
    },
    tessellation: {
      title: 'Which regular tile corners meet without a gap or overlap?',
      unit: '°',
      context:
        'A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.',
      summary:
        'At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.',
      parameters: {
        sides: 6,
        copies: 3
      },
      variables: [
        {
          key: 'sides',
          symbol: 'n',
          label: 'Regular tile sides n',
          unit: 'sides',
          min: 3,
          max: 12,
          step: 1,
          discrete: true
        },
        {
          key: 'copies',
          symbol: 'q',
          label: 'Corners at one vertex q',
          unit: 'corners',
          min: 2,
          max: 6,
          step: 1,
          discrete: true
        }
      ],
      formula: '\\alpha=\\frac{180(n-2)}{n}\\,{^{\\circ}},\\qquad g=360\\,{^{\\circ}}-q\\alpha.',
      stages: [
        [
          'Choose the tile and the meeting corners',
          'n = {{sides}} sides; q = {{copies}} corners',
          'The floor designer keeps the tiles regular and convex. Count the sides of one tile separately from the corners meeting at the chosen point.'
        ],
        [
          'Measure each corner',
          'α ≈ {{angle}}°; qα ≈ {{sumAngles}}°',
          'Split a polygon into triangles to obtain its interior-angle total, divide by its equal corners, then add the q selected angles.'
        ],
        [
          'Compare with one full turn',
          'g ≈ 360° − {{sumAngles}}° ≈ {{output}}°',
          'Zero fits the full turn. A positive result leaves a gap and a negative result overlaps. Matching triangle, square and hexagon choices also show a real tiling patch.'
        ]
      ],
      assumptions: [
        'Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.'
      ],
      sourceRefs: ['source:spatial-insights:tiling']
    },
    'perspective-projection': {
      title: 'Why does the same display marker look smaller farther away?',
      unit: 'm',
      context:
        'A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.',
      summary:
        'In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.',
      parameters: {
        depth: 4,
        width: 2,
        focal: 1
      },
      variables: [
        {
          key: 'depth',
          symbol: 'z',
          label: 'Marker depth z',
          unit: 'm',
          min: 2,
          max: 10,
          step: 0.05
        },
        {
          key: 'width',
          symbol: 'W',
          label: 'Real marker width W',
          unit: 'm',
          min: 1,
          max: 4,
          step: 0.05
        },
        {
          key: 'focal',
          symbol: 'f',
          label: 'Virtual image-plane distance f',
          unit: 'm',
          min: 0.5,
          max: 1.5,
          step: 0.05
        }
      ],
      formula: 'w=\\frac{fW}{z},\\qquad m=\\frac{f}{z}.',
      stages: [
        [
          'Keep the real measurement separate',
          'W = {{width}} m; z = {{depth}} m; f = {{focal}} m',
          'The photographer moves the marker along the optical axis. The virtual image plane stays in front of the pinhole at distance f; the marker is farther away.'
        ],
        [
          'Find the ray’s depth fraction',
          'm ≈ {{focal}} / {{depth}} ≈ {{magnification}}',
          'The image plane intercepts the same rays at the fraction f/z of their distance. That dimensionless magnification scales the sideways width too.'
        ],
        [
          'Read the projected width',
          'w ≈ {{magnification}} × {{width}} ≈ {{output}} m',
          'The green image segment has the computed width on the same metre scale as the cyan real marker. Greater depth reduces the image while leaving the marker’s real width unchanged.'
        ]
      ],
      assumptions: [
        'Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.'
      ],
      sourceRefs: ['source:spatial-insights:camera']
    },
    'sphere-packing': {
      title: 'How much of a repeating bead cell is actually solid?',
      unit: 'fraction',
      context:
        'A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.',
      summary:
        'A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.',
      parameters: {
        packing: 1,
        radius: 1
      },
      variables: [
        {
          key: 'packing',
          symbol: 'k',
          label: 'Packing: 1 simple cubic · 2 face-centered cubic',
          unit: 'choice',
          min: 1,
          max: 2,
          step: 1,
          discrete: true
        },
        {
          key: 'radius',
          symbol: 'r',
          label: 'Sphere radius r',
          unit: 'cm',
          min: 0.5,
          max: 1.5,
          step: 0.05
        }
      ],
      formula:
        '\\eta=\\frac{N(4\\pi r^3/3)}{a^3},\\qquad a=2r\\text{ for SC},\\quad a=2\\sqrt{2}r\\text{ for FCC}.',
      stages: [
        [
          'Choose a repeating bead arrangement',
          '{{packingName}} · r = {{radius}} cm',
          'The bead radius sets actual lengths. The packing choice decides whether centers lie only at cube corners or also at each face center.'
        ],
        [
          'Assign shared bead pieces to one cube',
          'N = {{occupancy}} spheres; a ≈ {{cellEdge}} cm',
          'Eight corner eighths make one sphere. FCC adds six face halves, making four. Contacts determine the cube edge: one diameter for SC or a diameter times square root of two for FCC.'
        ],
        [
          'Compare solid and cell volume',
          'η ≈ {{fraction}} · occupied fraction',
          'Divide the assigned sphere volume by cube volume. Both grow with radius cubed, so changing bead size changes their actual dimensions while preserving this fraction. The bar measures volume rather than flat circle area.'
        ]
      ],
      assumptions: [
        'Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.'
      ],
      sourceRefs: ['source:spatial-insights:packing', 'source:spatial-insights:packing-primary']
    }
  };
  const quantitySpecs = {
    'platonic-solids': {
      solid: [
        'Solid: 1 tetra · 2 cube · 3 octa · 4 dodeca · 5 icosa',
        'input',
        'choice',
        'Discrete solid choice: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron'
      ],
      name: [
        'Named solid',
        'reference',
        '',
        'The selected model is one of five named regular convex solids.'
      ],
      vertexCount: [
        'Vertices V',
        'intermediate',
        'vertices',
        'Count actual spatial corners, not screen crossings.'
      ],
      edgeCount: ['Edges E', 'intermediate', 'edges', 'Count each connecting spatial edge once.'],
      faceCount: ['Faces F', 'output', 'faces', 'Count each polygon face once.'],
      euler: [
        'Euler count',
        'output',
        '',
        'Vertex count minus edge count plus face count is two for every displayed solid.'
      ],
      output: [
        'Face count F',
        'output',
        'faces',
        'A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.'
      ]
    },
    tessellation: {
      sides: [
        'Regular tile sides n',
        'input',
        'sides',
        'Whole number of sides of each regular convex tile'
      ],
      copies: [
        'Corners at one vertex q',
        'input',
        'corners',
        'Whole number of tile corners brought to the same vertex'
      ],
      angle: [
        'Interior angle α',
        'intermediate',
        '°',
        'One corner angle from the regular polygon triangulation.'
      ],
      sumAngles: [
        'Combined corner angles',
        'intermediate',
        '°',
        'Add the selected whole number of equal corners.'
      ],
      gap: ['Signed gap angle', 'output', '°', 'A full turn minus the combined corner angles.'],
      classification: [
        'Vertex fit',
        'output',
        '',
        'Distinguish a gap, a full turn and angle overlap.'
      ],
      output: [
        'Signed gap angle g',
        'output',
        '°',
        'At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.'
      ]
    },
    'perspective-projection': {
      depth: ['Marker depth z', 'input', 'm', 'Positive marker depth from the pinhole, in metres'],
      width: ['Real marker width W', 'input', 'm', 'Real width of the centered marker, in metres'],
      focal: [
        'Virtual image-plane distance f',
        'input',
        'm',
        'Distance to the virtual image plane, in metres'
      ],
      magnification: [
        'Magnification m',
        'intermediate',
        '',
        'Dimensionless plane-distance to marker-depth ratio.'
      ],
      imageWidth: [
        'Virtual image width w',
        'output',
        'm',
        'The projected endpoint separation on the virtual plane.'
      ],
      output: [
        'Image width w',
        'output',
        'm',
        'In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.'
      ]
    },
    'sphere-packing': {
      packing: [
        'Packing: 1 simple cubic · 2 face-centered cubic',
        'input',
        'choice',
        'Discrete packing choice: 1 simple cubic or 2 face-centered cubic'
      ],
      radius: ['Sphere radius r', 'input', 'cm', 'Common sphere radius, in centimetres'],
      packingName: [
        'Named packing',
        'reference',
        '',
        'Simple cubic and face-centered cubic are distinct periodic arrangements.'
      ],
      occupancy: [
        'Equivalent sphere count N',
        'intermediate',
        'spheres',
        'Account for shared eighths at corners and halves at face centers.'
      ],
      cellEdge: [
        'Cubic cell edge a',
        'intermediate',
        'cm',
        'Nearest-neighbor sphere contacts set the actual cell length.'
      ],
      fraction: [
        'Occupied volume fraction η',
        'output',
        '',
        'The periodic cell’s assigned sphere volume divided by cube volume.'
      ],
      pi: [
        'Pi',
        'reference',
        '',
        'The Euclidean circle constant appears in the spherical volume used by the occupied-fraction law.'
      ],
      output: [
        'Occupied volume fraction η',
        'output',
        'fraction',
        'A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.'
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
      id: 'story:spatial-insight:' + slug,
      slug,
      scene: slug + '-spatial-insight-scene',
      unit: spec.unit,
      title: spec.title,
      question: spec.title,
      eyebrow: 'Corners, contacts and projection',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected measurement or whole choice through the formula into its actual geometry. Pause for a closer reading.'
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
