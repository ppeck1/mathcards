(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPlaneGeometryTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'triangle-measurement',
        title: 'Triangle area and shear',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['triangle area and shear', 'triangle measurement'],
        definition:
          'A triangle has area A equal to half its base b times its perpendicular height h. Slide the third corner sideways while keeping b and h fixed: the triangle changes shape and its sloping sides change length, but its area stays the same. The signed shift s places that corner relative to the base midpoint.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Triangle area and shear',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['length', 'ratio']
      },
      {
        id: 'plane-triangle-measurement-b',
        title: 'Base length in metres',
        category: 'geometry',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        aliases: [],
        wordMatches: [],
        definition:
          'Base length in metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Base length in metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'plane-triangle-measurement-h',
        title: 'Perpendicular height above the base line in metres',
        category: 'geometry',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        aliases: [],
        wordMatches: [],
        definition:
          'Perpendicular height above the base line in metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Perpendicular height above the base line in metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'plane-triangle-measurement-s',
        title: 'Signed shift of the upper corner from the base midpoint, in metres',
        category: 'geometry',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: [],
        wordMatches: [],
        definition:
          'Signed shift of the upper corner from the base midpoint, in metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Signed shift of the upper corner from the base midpoint, in metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'plane-triangle-measurement-x',
        title: 'Upper corner horizontal coordinate measured from the left anchor, in metres',
        category: 'geometry',
        symbols: ['x'],
        tokens: ['x'],
        mathSymbols: ['x'],
        aliases: [],
        wordMatches: [],
        definition:
          'Upper corner horizontal coordinate measured from the left anchor, in metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Upper corner horizontal coordinate measured from the left anchor, in metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'plane-triangle-measurement-A',
        title: 'Enclosed triangular area in square metres',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: [],
        wordMatches: [],
        definition:
          'Enclosed triangular area in square metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Enclosed triangular area in square metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'plane-triangle-measurement-P',
        title: 'Total triangle boundary length in metres',
        category: 'geometry',
        symbols: ['P'],
        tokens: ['P'],
        mathSymbols: ['P'],
        aliases: [],
        wordMatches: [],
        definition:
          'Total triangle boundary length in metres. Measure the perpendicular height, multiply by the base, and take half. A sideways shift changes shape and boundary length while preserving area at the same height.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Total triangle boundary length in metres',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'triangle-perpendicular-height',
        title: 'Perpendicular height',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['perpendicular height', 'altitude'],
        definition:
          'The shortest distance from the upper triangle vertex to the line through its base. It can meet an extension beyond a base endpoint.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Perpendicular height',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'triangle-shear',
        title: 'Triangle shear',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['shear', 'sideways shift'],
        definition:
          'A sideways move of the upper vertex that keeps the base and perpendicular height fixed. The triangle area is unchanged, while its side lengths and angles generally change.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Triangle shear',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'triangle-boundary',
        title: 'Triangle perimeter',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['perimeter', 'boundary length'],
        definition:
          'The total length of all three triangle edges. It measures boundary length in metres, rather than enclosed area in square metres.',
        example:
          'Half of 4×2 is 4 square metres. The central top corner makes equal sloping sides.',
        readAs: 'Triangle perimeter',
        sourceKeys: ['plane_geometry_triangle_measurement'],
        grammarCards: ['triangle-measurement'],
        formulaCards: ['triangle-measurement'],
        relatedIds: ['triangle-measurement']
      },
      {
        id: 'similar-triangles',
        title: 'Similar triangles and square-law area',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['similar triangles and square-law area', 'similar triangles'],
        definition:
          'Similar triangles have equal corresponding angles and proportional corresponding side lengths. Scale a 3–4–5 right triangle uniformly by a positive factor k. Its lengths become 3 k,4 k and 5 k, while area becomes 6 k² square metres. Doubling every length quadruples the enclosed area. The area ratio q equals k²: divide the scaled area by the original six square metres.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Similar triangles and square-law area',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['length', 'ratio']
      },
      {
        id: 'plane-similar-triangles-k',
        title: 'Positive dimensionless scale factor for all lengths',
        category: 'geometry',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        aliases: [],
        wordMatches: [],
        definition:
          'Positive dimensionless scale factor for all lengths. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Positive dimensionless scale factor for all lengths',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'plane-similar-triangles-b',
        title: 'Scaled base length in metres',
        category: 'geometry',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        aliases: [],
        wordMatches: [],
        definition:
          'Scaled base length in metres. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Scaled base length in metres',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'plane-similar-triangles-h',
        title: 'Scaled perpendicular height in metres',
        category: 'geometry',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        aliases: [],
        wordMatches: [],
        definition:
          'Scaled perpendicular height in metres. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Scaled perpendicular height in metres',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'plane-similar-triangles-c',
        title: 'Scaled sloping side length in metres',
        category: 'geometry',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: [],
        wordMatches: [],
        definition:
          'Scaled sloping side length in metres. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Scaled sloping side length in metres',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'plane-similar-triangles-A',
        title: 'Scaled enclosed area in square metres',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: [],
        wordMatches: [],
        definition:
          'Scaled enclosed area in square metres. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Scaled enclosed area in square metres',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'plane-similar-triangles-q',
        title: 'Dimensionless ratio of scaled area to the 6-square-metre reference area',
        category: 'geometry',
        symbols: ['q'],
        tokens: ['q'],
        mathSymbols: ['q'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless ratio of scaled area to the 6-square-metre reference area. Use the same factor for every corresponding length. The base and height each gain one factor k, so their product gives the square factor k² in area.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Dimensionless ratio of scaled area to the 6-square-metre reference area',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'triangle-similarity',
        title: 'Triangle similarity',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['similar triangles', 'corresponding angles', 'corresponding sides'],
        definition:
          'A correspondence of triangles with equal matching angles and all matching side lengths in the same ratio. Similar triangles can have different sizes.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Triangle similarity',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'triangle-length-scale',
        title: 'Uniform length scale',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['uniform length scale', 'length scale factor'],
        definition:
          'One positive dimensionless factor multiplying every corresponding length. Scaling both base and height by k scales area by k².',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Uniform length scale',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'triangle-area-ratio',
        title: 'Area ratio under similarity',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['area ratio', 'area multiplier'],
        definition:
          'The dimensionless quotient of scaled triangle area by reference area. It is the square of the common length factor, rather than the length factor itself.',
        example:
          'The lengths become 3.75,5 and 6.25 metres. The area is 9.375 square metres,1.5625 times the original.',
        readAs: 'Area ratio under similarity',
        sourceKeys: ['plane_geometry_similar_triangles'],
        grammarCards: ['similar-triangles'],
        formulaCards: ['similar-triangles'],
        relatedIds: ['similar-triangles']
      },
      {
        id: 'perpendicular-bisector',
        title: 'Perpendicular bisector construction',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['perpendicular bisector construction', 'perpendicular bisector'],
        definition:
          'A perpendicular bisector passes through a segment midpoint at a right angle. Two distinct intersections of equal-radius circles centered at the endpoints lie on this line. If the endpoint distance is d and circle radius is r, each intersection is h=√(r²−d²/4) above or below the segment. The intersection separation is ℓ=2 h.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Perpendicular bisector construction',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['length', 'ratio']
      },
      {
        id: 'plane-perpendicular-bisector-r',
        title: 'Common compass-circle radius in metres',
        category: 'geometry',
        symbols: ['r'],
        tokens: ['r'],
        mathSymbols: ['r'],
        aliases: [],
        wordMatches: [],
        definition:
          'Common compass-circle radius in metres. Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Common compass-circle radius in metres',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-perpendicular-bisector-d',
        title: 'Distance between the two stakes in metres',
        category: 'geometry',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: [],
        wordMatches: [],
        definition:
          'Distance between the two stakes in metres. Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Distance between the two stakes in metres',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-perpendicular-bisector-h',
        title: 'Nonnegative intersection height above the stake line, in metres',
        category: 'geometry',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        aliases: [],
        wordMatches: [],
        definition:
          'Nonnegative intersection height above the stake line, in metres. Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Nonnegative intersection height above the stake line, in metres',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-perpendicular-bisector-ell',
        title:
          'Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency',
        category: 'geometry',
        symbols: ['ℓ'],
        tokens: ['ℓ', '\\ell'],
        mathSymbols: ['ℓ', '\\ell'],
        aliases: [],
        wordMatches: [],
        definition:
          'Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency. Equal distances force every circle intersection onto the midpoint line. Pythagoras gives its height. Two distinct intersections determine the border; one tangent point cannot complete this construction.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs:
          'Distance between the upper and lower intersections in metres; zero when the two coalesce at tangency',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-perpendicular-bisector',
        title: 'Perpendicular bisector',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['perpendicular bisector', 'midway line'],
        definition:
          'The line through a segment midpoint perpendicular to its supporting line. Every point on it has equal distances to the segment endpoints.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Perpendicular bisector',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-compass-opening',
        title: 'Equal compass radius',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['compass radius', 'compass opening', 'rigid compass'],
        definition:
          'The same center-to-circle distance used at both endpoints. Two intersections require a radius strictly greater than half the endpoint distance.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Equal compass radius',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'plane-circle-tangency',
        title: 'Circle tangency in the bisector construction',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['tangency', 'tangent point', 'two-point construction'],
        definition:
          'At radius equal to half the center separation, the two equal circles have exactly one shared point. Their two-point construction degenerates even though the mathematical bisector still exists.',
        example:
          'Each intersection is √5, about 2.236 metres from the stake line, so the pair is about 4.472 metres apart.',
        readAs: 'Circle tangency in the bisector construction',
        sourceKeys: ['plane_geometry_perpendicular_bisector'],
        grammarCards: ['perpendicular-bisector'],
        formulaCards: ['perpendicular-bisector'],
        relatedIds: ['perpendicular-bisector']
      },
      {
        id: 'ellipse-section',
        title: 'Ellipse and focus distances',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['ellipse and focus distances', 'ellipse section'],
        definition:
          'An ellipse is the locus of planar points whose distances to two fixed foci add to 2 a. Here locus means the set of points satisfying that geometric rule. Put its foci on the horizontal axis at positions −c and c, with vertical coordinate zero and a>c. The semiminor axis is b=√(a²−c²), so enclosed area is A=πab. A moving point with coordinates x=a cos t and y=b sin t keeps the same total focus distance even while its two individual distances change.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Ellipse and focus distances',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['length', 'ratio']
      },
      {
        id: 'plane-ellipse-section-a',
        title: 'Semimajor axis in metres, half the longest ellipse diameter',
        category: 'geometry',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        aliases: [],
        wordMatches: [],
        definition:
          'Semimajor axis in metres, half the longest ellipse diameter. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Semimajor axis in metres, half the longest ellipse diameter',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-b',
        title: 'Semiminor axis in metres, half the shortest ellipse diameter',
        category: 'geometry',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        aliases: [],
        wordMatches: [],
        definition:
          'Semiminor axis in metres, half the shortest ellipse diameter. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Semiminor axis in metres, half the shortest ellipse diameter',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-c',
        title: 'Distance from center to either focus in metres',
        category: 'geometry',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: [],
        wordMatches: [],
        definition:
          'Distance from center to either focus in metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Distance from center to either focus in metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-t',
        title: 'Ellipse boundary parameter in radians, generally not the polar angle',
        category: 'geometry',
        symbols: ['t'],
        tokens: ['t'],
        mathSymbols: ['t'],
        aliases: [],
        wordMatches: [],
        definition:
          'Ellipse boundary parameter in radians, generally not the polar angle. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Ellipse boundary parameter in radians, generally not the polar angle',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-x',
        title: 'Horizontal boundary-point coordinate in metres',
        category: 'geometry',
        symbols: ['x'],
        tokens: ['x'],
        mathSymbols: ['x'],
        aliases: [],
        wordMatches: [],
        definition:
          'Horizontal boundary-point coordinate in metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Horizontal boundary-point coordinate in metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-y',
        title: 'Vertical boundary-point coordinate in metres',
        category: 'geometry',
        symbols: ['y'],
        tokens: ['y'],
        mathSymbols: ['y'],
        aliases: [],
        wordMatches: [],
        definition:
          'Vertical boundary-point coordinate in metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Vertical boundary-point coordinate in metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-d-1',
        title: 'Distance from the point to the left focus in metres',
        category: 'geometry',
        symbols: ['d_1'],
        tokens: ['d_1', 'd_{1}', 'd₁'],
        mathSymbols: ['d_1', 'd_{1}', 'd₁'],
        aliases: [],
        wordMatches: [],
        definition:
          'Distance from the point to the left focus in metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Distance from the point to the left focus in metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-d-2',
        title: 'Distance from the point to the right focus in metres',
        category: 'geometry',
        symbols: ['d_2'],
        tokens: ['d_2', 'd_{2}', 'd₂'],
        mathSymbols: ['d_2', 'd_{2}', 'd₂'],
        aliases: [],
        wordMatches: [],
        definition:
          'Distance from the point to the right focus in metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Distance from the point to the right focus in metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'plane-ellipse-section-A',
        title: 'Enclosed elliptical area in square metres',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: [],
        wordMatches: [],
        definition:
          'Enclosed elliptical area in square metres. Use the fixed total distance to find the shorter half-axis, then multiply the two half-axes and pi for enclosed area. The moving marker changes each focus distance while preserving their sum.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Enclosed elliptical area in square metres',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-semimajor-axis',
        title: 'Semimajor axis',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['semimajor axis', 'long half-axis'],
        definition:
          'Half the longest diameter of the ellipse. In the focus-sum description the fixed total distance is twice this length.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Semimajor axis',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-semiminor-axis',
        title: 'Semiminor axis',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['semiminor axis', 'shorter half-axis'],
        definition:
          'Half the shortest diameter of the ellipse. For center-to-focus distance c and semimajor axis a, it equals√(a²−c²).',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Semiminor axis',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-foci',
        title: 'Ellipse foci',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['foci', 'focus distance', 'focus spacing'],
        definition:
          'The two fixed points used to describe the ellipse by a constant sum of distances. They coincide at the circle case.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Ellipse foci',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-locus',
        title: 'Locus',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['locus'],
        definition:
          'The set of points satisfying a stated geometric rule. The ellipse consists of all planar points with one fixed total distance to its two foci.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Locus',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-parameter',
        title: 'Ellipse boundary parameter',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['boundary parameter', 'parametrization'],
        definition:
          'The parameter t in(a cos t,b sin t). It measures a position in this parametrization and generally is not the point’s polar angle about the ellipse center.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Ellipse boundary parameter',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      },
      {
        id: 'ellipse-focus-sum',
        title: 'Ellipse distance sum',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['distance sum', 'string length', 'constant focus-distance sum'],
        definition:
          'The two point-to-focus distances add to 2 a everywhere on this ellipse. These straight-string lengths are different from the curved ellipse perimeter.',
        example:
          'The semiminor axis is √12, about 3.464 metres. The two strings total 8 metres, and the enclosed area is about 43.531 square metres.',
        readAs: 'Ellipse distance sum',
        sourceKeys: ['plane_geometry_ellipse_section'],
        grammarCards: ['ellipse-section'],
        formulaCards: ['ellipse-section'],
        relatedIds: ['ellipse-section']
      }
    ],
    sources: {
      plane_geometry_triangle_measurement: {
        title: 'Wolfram MathWorld · Triangle Area',
        url: 'https://mathworld.wolfram.com/TriangleArea.html'
      },
      plane_geometry_similar_triangles: {
        title: 'Wolfram MathWorld · Similar Triangles',
        url: 'https://mathworld.wolfram.com/SimilarTriangles.html'
      },
      plane_geometry_perpendicular_bisector: {
        title: 'Wolfram MathWorld · Perpendicular Bisector',
        url: 'https://mathworld.wolfram.com/PerpendicularBisector.html'
      },
      plane_geometry_ellipse_section: {
        title: 'Wolfram MathWorld · Ellipse',
        url: 'https://mathworld.wolfram.com/Ellipse.html'
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
