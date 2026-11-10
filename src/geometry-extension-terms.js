/* Original bounded number and geometry reference data; build-only. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasGeometryExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'regular-polygon',
        title: 'Regular polygon area',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['regular polygon area', 'regular polygon'],
        definition:
          'A regular convex polygon has equal sides and equal interior angles. Join its center to every vertex to split its floor into n congruent triangles. The circumradius R reaches a vertex; the apothem a reaches the midpoint of a side at a right angle. Perimeter P times apothem a, divided by two, gives the area A.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Regular polygon area',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['length', 'ratio', 'circle-manifold']
      },
      {
        id: 'sphere-measurement',
        title: 'Sphere surface and volume',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['sphere surface and volume', 'sphere measurement'],
        definition:
          'A sphere consists of points a fixed radius r from its center, and its enclosed ball has volume V=4πr³/3. The complete spherical surface has area A=4πr² and the diameter is d=2r. Radius changes length, surface and capacity at different rates: by the first, second and third powers of the scale factor.',
        example:
          'The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.',
        readAs: 'Sphere surface and volume',
        sourceKeys: ['geometry_extension_sphere'],
        grammarCards: ['sphere-measurement'],
        formulaCards: ['sphere-measurement'],
        relatedIds: ['sphere-manifold', 'ratio', 'integral']
      },
      {
        id: 'geometry-radius',
        title: 'Radius and circumradius',
        category: 'geometry',
        symbols: ['R', 'r'],
        tokens: ['R', 'r'],
        mathSymbols: ['R', 'r'],
        aliases: ['circumradius', 'sphere radius'],
        definition:
          'A radius measures center-to-boundary distance. The polygon circumradius R reaches every vertex of its circumcircle; the sphere radius r reaches every point of its surface. These physical lengths are measured in metres.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Radius and circumradius',
        sourceKeys: ['geometry_extension_polygon', 'geometry_extension_sphere'],
        grammarCards: ['regular-polygon', 'sphere-measurement'],
        formulaCards: ['regular-polygon', 'sphere-measurement'],
        relatedIds: ['regular-polygon', 'sphere-measurement'],
        wordMatches: ['circumradius', 'sphere radius']
      },
      {
        id: 'polygon-side-count',
        title: 'Regular polygon side count',
        category: 'geometry',
        symbols: ['n'],
        tokens: ['n'],
        mathSymbols: ['n'],
        aliases: ['side count'],
        definition:
          'The whole number n counts the sides and the congruent center triangles of the regular convex polygon. This construction allows three through twelve sides.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Regular polygon side count',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon']
      },
      {
        id: 'polygon-side-length',
        title: 'Regular polygon side length',
        category: 'geometry',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['side length', 'polygon side'],
        definition:
          'The straight edge length s joins neighboring vertices. It is a chord of the circumcircle and equals 2R sin(π/n).',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Regular polygon side length',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon']
      },
      {
        id: 'polygon-apothem',
        title: 'Apothem',
        category: 'geometry',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        aliases: ['apothem', 'apothem length'],
        definition:
          'The perpendicular distance a from the center of a regular polygon to the midpoint of any side. It is the height of each center triangle and equals R cos(π/n).',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Apothem',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon', 'polygon-side-length', 'geometry-radius']
      },
      {
        id: 'polygon-central-angle',
        title: 'Polygon central angle',
        category: 'geometry',
        symbols: ['θ'],
        tokens: ['θ', '\\theta'],
        mathSymbols: ['θ', '\\theta'],
        aliases: ['central angle'],
        definition:
          'The angle θ at the center between neighboring vertex radii. The n equal angles make one full turn, so θ=2π/n radians. Its degree reading is 360/n.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Polygon central angle',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon', 'radian', 'degree', 'pi']
      },
      {
        id: 'sphere-diameter',
        title: 'Sphere diameter',
        category: 'geometry',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['diameter', 'sphere diameter'],
        definition:
          'The center-crossing distance d between opposite points of the spherical surface. It is twice the radius, d=2r.',
        example:
          'The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.',
        readAs: 'Sphere diameter',
        sourceKeys: ['geometry_extension_sphere'],
        grammarCards: ['sphere-measurement'],
        formulaCards: ['sphere-measurement'],
        relatedIds: ['sphere-measurement', 'geometry-radius']
      },
      {
        id: 'sphere-surface-area',
        title: 'Sphere surface area',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: ['surface area', 'spherical surface'],
        definition:
          'The area A of the complete curved spherical surface is 4πr². Its unit is square metres. A projected disk or equatorial cross-section has a different area, πr².',
        example:
          'The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.',
        readAs: 'Sphere surface area',
        sourceKeys: ['geometry_extension_sphere'],
        grammarCards: ['sphere-measurement'],
        formulaCards: ['sphere-measurement'],
        relatedIds: ['sphere-measurement', 'area', 'powered-unit']
      },
      {
        id: 'sphere-enclosed-volume',
        title: 'Sphere enclosed volume',
        category: 'geometry',
        symbols: ['V'],
        tokens: ['V'],
        mathSymbols: ['V'],
        aliases: ['enclosed volume', 'spherical capacity'],
        definition:
          'The volume V inside the spherical boundary is 4πr³/3, measured in cubic metres. The surface itself is two-dimensional and does not have this enclosed volume.',
        example:
          'The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.',
        readAs: 'Sphere enclosed volume',
        sourceKeys: ['geometry_extension_sphere'],
        grammarCards: ['sphere-measurement'],
        formulaCards: ['sphere-measurement'],
        relatedIds: ['sphere-measurement', 'powered-unit']
      },
      {
        id: 'equatorial-cross-section',
        title: 'Equatorial disk cross-section',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['equatorial disk', 'cross-section', 'cross-sections'],
        definition:
          'A plane through a sphere center cuts a circular disk of radius r and area πr². This cross-section helps describe the geometry but differs from the complete curved surface and enclosed ball.',
        example:
          'The full tank holds 32π/3, about 33.510 cubic metres. Its surface area is 16π square metres and its diameter is 4 metres.',
        readAs: 'Equatorial disk cross-section',
        sourceKeys: ['geometry_extension_sphere'],
        grammarCards: ['sphere-measurement'],
        formulaCards: ['sphere-measurement'],
        relatedIds: ['sphere-measurement', 'area', 'sphere-surface-area']
      },
      {
        id: 'convex-regular-polygon',
        title: 'Convex regular polygon',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['regular convex polygon', 'regular polygon', 'convex'],
        definition:
          'A planar polygon with equal sides and equal interior angles, with no inward indentation. Its center triangles fill the interior without overlapping.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Convex regular polygon',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon', 'polygon-apothem']
      },
      {
        id: 'circumcircle',
        title: 'Circumcircle',
        category: 'geometry',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['circumcircle', 'enclosing circle'],
        definition:
          'The circle passing through every vertex of the regular polygon. Its radius is the circumradius R; its curved boundary differs from the straight polygon edges.',
        example:
          'Six center triangles fill about 23.383 square metres. The hexagon side equals its 3-metre radius, while its apothem is smaller.',
        readAs: 'Circumcircle',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        relatedIds: ['regular-polygon', 'geometry-radius']
      },
      {
        id: 'regular-polygon-area',
        title: 'Regular polygon floor area',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: ['pavilion floor area', 'regular polygon area'],
        definition:
          'The planar area A inside the straight edges of the regular pavilion floor. Adding its center triangles gives A=Pa/2, measured in square metres. The enclosing circumcircle has a different area.',
        example: 'For six sides and a 3-metre circumradius, A≈23.383 m².',
        readAs: 'A, the regular polygon floor area',
        sourceKeys: ['geometry_extension_polygon'],
        grammarCards: ['regular-polygon'],
        formulaCards: ['regular-polygon'],
        wordMatches: ['pavilion floor area', 'regular polygon area'],
        relatedIds: ['area', 'regular-polygon']
      },
      {
        id: 'geometric-congruence',
        aliases: ['congruent triangles'],
        wordMatches: ['geometric congruence', 'congruent figures', 'congruent triangles'],
        relatedIds: ['regular-polygon']
      }
    ],
    sources: {
      geometry_extension_polygon: {
        title: 'Wolfram MathWorld · Regular Polygon',
        url: 'https://mathworld.wolfram.com/RegularPolygon.html'
      },
      geometry_extension_sphere: {
        title: 'Wolfram MathWorld · Sphere',
        url: 'https://mathworld.wolfram.com/Sphere.html'
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
