/* Original scoped geometry reference data; build-only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatialInsightTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'platonic-solids',
        title: 'Platonic solids and Euler counts',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['platonic solids and euler counts'],
        definition:
          'A Platonic solid is a convex polyhedron with congruent regular polygon faces and the same number of faces meeting at each vertex. These five models have vertex count V, edge count E and face count F satisfying V−E+F=2. Choosing a new solid changes actual connections and counts; a projected edge crossing is not an extra vertex.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Platonic solids and Euler counts',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['platonic solids and euler counts'],
        relatedIds: ['regular-polygon', 'sphere-measurement']
      },
      {
        id: 'tessellation',
        title: 'Regular tessellations',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['regular tessellations'],
        definition:
          'At a regular convex n-gon corner, the interior angle is α=180(n−2)/n degrees. Bringing q such corners together leaves signed gap g=360−qα degrees. Positive gap leaves uncovered angle and negative gap means angle overlap. The tested regular plane tilings use six triangles, four squares or three hexagons at every vertex. A local angle equation alone is not a general tiling theorem.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Regular tessellations',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['regular tessellations'],
        relatedIds: ['regular-polygon', 'ratio']
      },
      {
        id: 'perspective-projection',
        title: 'Pinhole perspective projection',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['pinhole perspective projection'],
        definition:
          'In an ideal pinhole camera, a point at sideways coordinate X and positive depth z maps to virtual-image coordinate x=fX/z. A centered marker of real width W therefore has image width w=fW/z. Magnification m=f/z is dimensionless. Real dimensions remain fixed when depth changes; the changing projection is a measured image length rather than a shrinking object.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Pinhole perspective projection',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['pinhole perspective projection'],
        relatedIds: ['ratio', 'vector-projection']
      },
      {
        id: 'sphere-packing',
        title: 'Sphere packing in cubic cells',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['sphere packing in cubic cells'],
        definition:
          'A periodic packing repeats a cell whose boundary spheres are shared with neighboring cells. Simple cubic packing has eight corner eighths, totaling one sphere, and cell edge a=2r. Face-centered cubic packing adds six face halves, totaling four spheres, with face-diagonal contacts giving a=2√2r. Dividing occupied sphere volume by cube volume gives packing fraction η, which is independent of radius within each packing.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Sphere packing in cubic cells',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['sphere packing in cubic cells'],
        relatedIds: ['sphere-measurement', 'length']
      },
      {
        id: 'spatial-platonic-solids-solid',
        title: 'Solid selector',
        category: 'geometry',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['solid selector'],
        definition:
          'Discrete solid choice: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. This meaning belongs to the stated bounded lesson.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Solid selector',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['solid selector'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-platonic-solids-vertexcount',
        title: 'Polyhedron vertex count',
        category: 'geometry',
        symbols: ['V'],
        tokens: ['V'],
        mathSymbols: ['V'],
        aliases: ['polyhedron vertex count'],
        definition:
          'Number of polyhedron vertices. This meaning belongs to the stated bounded lesson.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Polyhedron vertex count',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['polyhedron vertex count'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-platonic-solids-edgecount',
        title: 'Polyhedron edge count',
        category: 'geometry',
        symbols: ['E'],
        tokens: ['E'],
        mathSymbols: ['E'],
        aliases: ['polyhedron edge count'],
        definition:
          'Number of polyhedron edges. This meaning belongs to the stated bounded lesson.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Polyhedron edge count',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['polyhedron edge count'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-platonic-solids-output',
        title: 'Polyhedron face count',
        category: 'geometry',
        symbols: ['F'],
        tokens: ['F'],
        mathSymbols: ['F'],
        aliases: ['polyhedron face count'],
        definition:
          'Number of polyhedron faces. This meaning belongs to the stated bounded lesson.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Polyhedron face count',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['polyhedron face count'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-tessellation-sides',
        title: 'Tiling polygon side count',
        category: 'geometry',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        aliases: ['tiling polygon side count'],
        definition:
          'Whole number of sides of each regular convex tile. This meaning belongs to the stated bounded lesson.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Tiling polygon side count',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['tiling polygon side count'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-tessellation-copies',
        title: 'Corners around a vertex',
        category: 'geometry',
        symbols: ['q'],
        tokens: ['q'],
        mathSymbols: ['q'],
        aliases: ['corners around a vertex'],
        definition:
          'Whole number of tile corners brought to the same vertex. This meaning belongs to the stated bounded lesson.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Corners around a vertex',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['corners around a vertex'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-tessellation-angle',
        title: 'Regular polygon interior angle',
        category: 'geometry',
        symbols: ['α', '\\alpha'],
        tokens: ['α', '\\alpha'],
        mathSymbols: ['α', '\\alpha'],
        aliases: ['regular polygon interior angle'],
        definition:
          'One interior angle, in degrees. This meaning belongs to the stated bounded lesson.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Regular polygon interior angle',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['regular polygon interior angle'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-tessellation-output',
        title: 'Signed vertex gap',
        category: 'geometry',
        symbols: ['g'],
        tokens: ['g'],
        mathSymbols: ['g'],
        aliases: ['signed vertex gap'],
        definition:
          'Signed remaining full-turn angle, in degrees. This meaning belongs to the stated bounded lesson.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Signed vertex gap',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['signed vertex gap'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-perspective-projection-depth',
        title: 'Camera depth',
        category: 'geometry',
        symbols: ['z'],
        tokens: ['z'],
        mathSymbols: ['z'],
        aliases: ['camera depth'],
        definition:
          'Positive marker depth from the pinhole, in metres. This meaning belongs to the stated bounded lesson.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Camera depth',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['camera depth'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-perspective-projection-width',
        title: 'Real marker width',
        category: 'geometry',
        symbols: ['W'],
        tokens: ['W'],
        mathSymbols: ['W'],
        aliases: ['real marker width'],
        definition:
          'Real width of the centered marker, in metres. This meaning belongs to the stated bounded lesson.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Real marker width',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['real marker width'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-perspective-projection-focal',
        title: 'Virtual image-plane distance',
        category: 'geometry',
        symbols: ['f'],
        tokens: ['f'],
        mathSymbols: ['f'],
        aliases: ['virtual image-plane distance'],
        definition:
          'Distance to the virtual image plane, in metres. This meaning belongs to the stated bounded lesson.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Virtual image-plane distance',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['virtual image-plane distance'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-perspective-projection-output',
        title: 'Projected image width',
        category: 'geometry',
        symbols: ['w'],
        tokens: ['w'],
        mathSymbols: ['w'],
        aliases: ['projected image width'],
        definition:
          'Projected marker width on that plane, in metres. This meaning belongs to the stated bounded lesson.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Projected image width',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['projected image width'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-perspective-projection-magnification',
        title: 'Pinhole magnification',
        category: 'geometry',
        symbols: ['m'],
        tokens: ['m'],
        mathSymbols: ['m'],
        aliases: ['pinhole magnification'],
        definition:
          'Dimensionless image-to-real width ratio. This meaning belongs to the stated bounded lesson.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Pinhole magnification',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['pinhole magnification'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-sphere-packing-packing',
        title: 'Cubic packing selector',
        category: 'geometry',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        aliases: ['cubic packing selector'],
        definition:
          'Discrete packing choice: 1 simple cubic or 2 face-centered cubic. This meaning belongs to the stated bounded lesson.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Cubic packing selector',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['cubic packing selector'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-sphere-packing-output',
        title: 'Occupied cell fraction',
        category: 'geometry',
        symbols: ['η', '\\eta'],
        tokens: ['η', '\\eta'],
        mathSymbols: ['η', '\\eta'],
        aliases: ['occupied cell fraction'],
        definition:
          'Dimensionless occupied volume fraction of the periodic cell. This meaning belongs to the stated bounded lesson.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Occupied cell fraction',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['occupied cell fraction'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-sphere-packing-occupancy',
        title: 'Equivalent sphere occupancy',
        category: 'geometry',
        symbols: ['N'],
        tokens: ['N'],
        mathSymbols: ['N'],
        aliases: ['equivalent sphere occupancy'],
        definition:
          'Equivalent whole sphere count assigned to one cell. This meaning belongs to the stated bounded lesson.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Equivalent sphere occupancy',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['equivalent sphere occupancy'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-sphere-packing-radius',
        title: 'Bead radius',
        category: 'geometry',
        symbols: ['r'],
        tokens: ['r'],
        mathSymbols: ['r'],
        aliases: ['bead radius'],
        definition:
          'Common sphere radius, in centimetres. This meaning belongs to the stated bounded lesson.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Bead radius',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['bead radius'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-sphere-packing-celledge',
        title: 'Cubic cell edge',
        category: 'geometry',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        aliases: ['cubic cell edge'],
        definition:
          'Cubic cell edge length, in centimetres. This meaning belongs to the stated bounded lesson.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Cubic cell edge',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['cubic cell edge'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-count-unit',
        title: 'Counted geometric parts',
        category: 'units',
        symbols: ['faces', 'vertices', 'edges', 'corners', 'sides', 'spheres'],
        tokens: ['faces', 'vertices', 'edges', 'corners', 'sides', 'spheres'],
        mathSymbols: ['faces', 'vertices', 'edges', 'corners', 'sides', 'spheres'],
        aliases: ['counted geometric parts', 'geometric count'],
        definition:
          'Faces, vertices, edges, corners, sides and equivalent spheres are dimensionless counts of named parts. A face count is different from area; equivalent sphere occupancy accounts for shared boundary pieces.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Counted geometric parts',
        sourceKeys: ['spatial_solid', 'spatial_tiling', 'spatial_packing'],
        grammarCards: ['platonic-solids', 'tessellation', 'sphere-packing'],
        formulaCards: ['platonic-solids', 'tessellation', 'sphere-packing'],
        wordMatches: ['counted geometric parts', 'geometric count'],
        relatedIds: []
      },
      {
        id: 'spatial-choice-unit',
        title: 'Discrete model choice',
        category: 'units',
        symbols: ['choice'],
        tokens: ['choice'],
        mathSymbols: ['choice'],
        aliases: ['discrete model choice', 'solid choice', 'packing choice'],
        definition:
          'A whole choice labels a named solid or packing. The label is not a measured length and there are no fractional intermediate models.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Discrete model choice',
        sourceKeys: ['spatial_solid', 'spatial_packing'],
        grammarCards: ['platonic-solids', 'sphere-packing'],
        formulaCards: ['platonic-solids', 'sphere-packing'],
        wordMatches: ['discrete model choice', 'solid choice', 'packing choice'],
        relatedIds: []
      },
      {
        id: 'spatial-volume-fraction',
        title: 'Volume fraction',
        category: 'units',
        symbols: ['fraction'],
        tokens: ['fraction'],
        mathSymbols: ['fraction'],
        aliases: ['volume fraction', 'packing fraction', 'occupied fraction', 'empty fraction'],
        definition:
          'A dimensionless ratio of occupied sphere volume to total cubic cell volume. The bar uses a fixed zero-to-one scale; a circular cross-section does not measure this three-dimensional fraction.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Volume fraction',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['volume fraction', 'packing fraction', 'occupied fraction', 'empty fraction'],
        relatedIds: ['sphere-measurement']
      },
      {
        id: 'platonic-solid',
        title: 'Regular convex polyhedron',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['regular convex polyhedron', 'Platonic solid', 'polyhedron', 'regular solid'],
        definition:
          'A closed convex solid whose faces are congruent regular convex polygons, with the same number meeting at every vertex. The five named models have different face, edge and vertex counts.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Regular convex polyhedron',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['regular convex polyhedron', 'Platonic solid', 'polyhedron', 'regular solid'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'polyhedral-euler-relation',
        title: 'Polyhedral Euler relation',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: [
          'polyhedral euler relation',
          'Euler count',
          'Euler relation',
          'Euler characteristic'
        ],
        definition:
          'For each displayed convex closed polyhedron, the number of vertices minus the number of edges plus the number of faces equals two. This is the Euler characteristic of its sphere-like boundary. Holes and other surface types require their own treatment.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Polyhedral Euler relation',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: [
          'polyhedral euler relation',
          'Euler count',
          'Euler relation',
          'Euler characteristic'
        ],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-screen-crossing',
        title: 'Projection crossing',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['projection crossing', 'edge crossing', 'screen crossing'],
        definition:
          'Two spatial edges can cross in a drawing without meeting in space. Such a screen crossing adds no vertex to the actual polyhedron.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Projection crossing',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['projection crossing', 'edge crossing', 'screen crossing'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-interior-angle',
        title: 'Interior angle',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['interior angle', 'interior angle', 'tile corner'],
        definition:
          'The angle inside one polygon corner. A convex regular n-sided polygon has n equal interior angles, with total 180(n−2) degrees.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Interior angle',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['interior angle', 'interior angle', 'tile corner'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-angle-gap',
        title: 'Angle gap and overlap',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['angle gap and overlap', 'angle gap', 'angle overlap', 'full turn'],
        definition:
          'The signed remainder of a full turn after adding selected corner angles. Positive means an uncovered angle, zero a complete turn and negative angle overlap; it is not negative physical area.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Angle gap and overlap',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['angle gap and overlap', 'angle gap', 'angle overlap', 'full turn'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-plane-tiling',
        title: 'Euclidean plane tiling',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['euclidean plane tiling', 'plane tiling', 'regular tessellation'],
        definition:
          'A collection of shapes covering the plane without gaps or interior overlap. The lesson shows triangle, square and hexagon patches. A local angle sum alone does not certify arbitrary tilings.',
        example:
          'Each equilateral-triangle corner is 60°. Six make 360° exactly, so the triangular patch meets without gaps.',
        readAs: 'Euclidean plane tiling',
        sourceKeys: ['spatial_tiling'],
        grammarCards: ['tessellation'],
        formulaCards: ['tessellation'],
        wordMatches: ['euclidean plane tiling', 'plane tiling', 'regular tessellation'],
        relatedIds: ['tessellation']
      },
      {
        id: 'spatial-pinhole',
        title: 'Pinhole camera',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['pinhole camera', 'pinhole', 'optical axis'],
        definition:
          'An ideal projection model in which endpoint rays pass through one point. A virtual image plane in front of that point produces coordinates scaled by its distance divided by object depth.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Pinhole camera',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['pinhole camera', 'pinhole', 'optical axis'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-virtual-plane',
        title: 'Virtual image plane',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['virtual image plane', 'virtual image plane', 'image plane'],
        definition:
          'The plane placed in front of the pinhole at positive distance f to display an upright projection. A physical image plane behind the pinhole produces an inverted image of the same width.',
        example:
          'At four metres depth, a two-metre marker projects to half a metre on the virtual plane one metre from the pinhole.',
        readAs: 'Virtual image plane',
        sourceKeys: ['spatial_camera'],
        grammarCards: ['perspective-projection'],
        formulaCards: ['perspective-projection'],
        wordMatches: ['virtual image plane', 'virtual image plane', 'image plane'],
        relatedIds: ['perspective-projection']
      },
      {
        id: 'spatial-periodic-cell',
        title: 'Periodic unit cell',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['periodic unit cell', 'periodic cell', 'unit cell', 'periodic packing'],
        definition:
          'A region repeated by translations to describe an infinite periodic arrangement. Boundary spheres belong to several neighboring cells, so volume is assigned by the correct shared fractions.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Periodic unit cell',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['periodic unit cell', 'periodic cell', 'unit cell', 'periodic packing'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-simple-cubic',
        title: 'Simple cubic packing',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['simple cubic packing', 'simple cubic', 'SC'],
        definition:
          'Equal spheres touch along cube edges, with centers at cube corners. Eight corner eighths give one equivalent sphere per cell; cell edge is one diameter.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Simple cubic packing',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: ['simple cubic packing', 'simple cubic', 'SC'],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-face-centered-cubic',
        title: 'Face-centered cubic packing',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: [
          'face-centered cubic packing',
          'face-centered cubic',
          'FCC',
          'face-centered cubic packing'
        ],
        definition:
          'A periodic equal-sphere arrangement with centers at eight cube corners and six face centers. Corner-to-face-center contacts lie on face diagonals; the shared cell contains four equivalent spheres.',
        example:
          'Six face-center halves join the eight corner eighths, totaling four spheres. FCC occupies π/(3√2), about 74.05%, of its cell.',
        readAs: 'Face-centered cubic packing',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: [
          'face-centered cubic packing',
          'face-centered cubic',
          'FCC',
          'face-centered cubic packing'
        ],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-boundary-sharing',
        title: 'Boundary sharing',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: [
          'boundary sharing',
          'corner eighth',
          'face half',
          'boundary sphere',
          'boundary spheres'
        ],
        definition:
          'A sphere centered at a cell corner contributes one eighth to that cube. A sphere centered on a face contributes half. Count these pieces before dividing occupied volume by cube volume.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Boundary sharing',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: [
          'boundary sharing',
          'corner eighth',
          'face half',
          'boundary sphere',
          'boundary spheres'
        ],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-sphere-contact',
        title: 'Sphere contact',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['sphere contact', 'sphere contact', 'nearest-neighbor contact', 'face diagonal'],
        definition:
          'Equal spheres in contact have center separation twice their radius. In the modeled SC cell contacts follow cube edges; the shown FCC boundary-face contacts join corners to face centers.',
        example:
          'Eight corner eighths total one sphere. The assigned spheres occupy π/6, about 52.36%, of the two-centimetre SC cell volume.',
        readAs: 'Sphere contact',
        sourceKeys: ['spatial_packing'],
        grammarCards: ['sphere-packing'],
        formulaCards: ['sphere-packing'],
        wordMatches: [
          'sphere contact',
          'sphere contact',
          'nearest-neighbor contact',
          'face diagonal'
        ],
        relatedIds: ['sphere-packing']
      },
      {
        id: 'spatial-tetrahedron',
        title: 'Tetrahedron',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['tetrahedron'],
        definition:
          'A regular convex solid with four triangular faces, six edges and four vertices.',
        example:
          'A tetrahedral display has four triangular faces, six edges and four vertices. The alternating count is 4−6+4=2.',
        readAs: 'Tetrahedron',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['tetrahedron'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-cube',
        title: 'Cube',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['cube'],
        definition:
          'A regular convex solid with six square faces, twelve edges and eight vertices.',
        example: 'A cubic frame has six square faces, twelve edges and eight vertices: 8−12+6=2.',
        readAs: 'Cube',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['cube'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-octahedron',
        title: 'Octahedron',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['octahedron'],
        definition:
          'A regular convex solid with eight triangular faces, twelve edges and six vertices.',
        example:
          'An octahedral frame has eight triangular faces, twelve edges and six vertices: 6−12+8=2.',
        readAs: 'Octahedron',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['octahedron'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-dodecahedron',
        title: 'Dodecahedron',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['dodecahedron'],
        definition:
          'A regular convex solid with twelve pentagonal faces, thirty edges and twenty vertices.',
        example:
          'A dodecahedral frame has twelve pentagonal faces, thirty edges and twenty vertices: 20−30+12=2.',
        readAs: 'Dodecahedron',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['dodecahedron'],
        relatedIds: ['platonic-solids']
      },
      {
        id: 'spatial-icosahedron',
        title: 'Icosahedron',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['icosahedron'],
        definition:
          'A regular convex solid with twenty triangular faces, thirty edges and twelve vertices.',
        example:
          'An icosahedral frame has twenty triangular faces, thirty edges and twelve vertices: 12−30+20=2.',
        readAs: 'Icosahedron',
        sourceKeys: ['spatial_solid'],
        grammarCards: ['platonic-solids'],
        formulaCards: ['platonic-solids'],
        wordMatches: ['icosahedron'],
        relatedIds: ['platonic-solids']
      }
    ],
    sources: {
      spatial_solid: {
        title: 'Wolfram MathWorld · Platonic Solid',
        url: 'https://mathworld.wolfram.com/PlatonicSolid.html'
      },
      spatial_euler: {
        title: 'Wolfram MathWorld · Euler Characteristic',
        url: 'https://mathworld.wolfram.com/EulerCharacteristic.html'
      },
      spatial_tiling: {
        title: 'Wolfram MathWorld · Regular Tessellation',
        url: 'https://mathworld.wolfram.com/RegularTessellation.html'
      },
      spatial_camera: {
        title: 'Stanford CS231A · Camera Models, Kenji Hata and Silvio Savarese',
        url: 'https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf'
      },
      spatial_packing: {
        title: 'Wolfram MathWorld · Cubic Close Packing',
        url: 'https://mathworld.wolfram.com/CubicClosePacking.html'
      },
      'spatial_packing-primary': {
        title:
          'International Union of Crystallography · Close-packed structures, P. Krishna and D. Pandey',
        url: 'https://www.iucr.org/what-we-do/education/pamphlets/close-packed-structures'
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
  return freeze(data);
});
