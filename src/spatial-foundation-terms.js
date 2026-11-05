/* Scoped spatial, coordinate and mechanics readers. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasSpatialFoundationTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'spatial-cross-product',
        title: 'Cross products in space',
        category: 'linear',
        symbols: ['u⃗×v⃗'],
        tokens: ['u⃗×v⃗'],
        definition:
          'The ordered cross product of two vectors in a right-handed three-dimensional Euclidean frame is an area vector perpendicular to both. Its norm gives the parallelogram area. This lesson varies all six components; a zero result has no unique normal direction.',
        example: '(1,0,0) × (0,0,2) = (0,−2,0) m².',
        readAs: 'cross product in space',
        aliases: ['spatial cross product', 'three-dimensional cross product'],
        grammarCards: ['spatial-cross-product'],
        formulaCards: ['spatial-cross-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'scalar-triple-product',
        title: 'Scalar triple product',
        category: 'linear',
        symbols: ['u⃗·(v⃗×w⃗)'],
        tokens: ['u⃗·(v⃗×w⃗)'],
        definition:
          'The dot product of one vector with the ordered cross product of two others is a signed scalar. For three length vectors it gives oriented volume; absolute value gives the nonnegative volume of their parallelepiped.',
        example: 'For u=(2,0,0), v=(1,3,0), w=(1,0.5,1), the product is 6 m³.',
        readAs: 'scalar triple product',
        aliases: ['triple scalar product', 'signed volume'],
        grammarCards: ['scalar-triple-product'],
        formulaCards: ['scalar-triple-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'coordinate-transformation',
        title: 'Changing an orthonormal frame',
        category: 'linear',
        symbols: ['x′', 'y′'],
        tokens: ['x′', 'y′'],
        definition:
          'A passive coordinate transformation changes the components used to describe a fixed vector. For a frame turned by θ, the new components use the inverse rotation. Primes label the new frame here; they do not denote derivatives.',
        example:
          'A fixed world displacement (2,1) m has components (1,−2) m in a frame turned by 90 degrees.',
        readAs: 'coordinates in the turned frame',
        aliases: ['passive coordinate transformation', 'orthonormal coordinate change'],
        grammarCards: ['coordinate-transformation'],
        formulaCards: ['coordinate-transformation'],
        sourceKeys: ['sfFrames']
      },
      {
        id: 'vector-projection',
        title: 'Vector projection',
        category: 'linear',
        symbols: ['projᵥu', 'proj_v u', '\\operatorname{proj}', 'c'],
        tokens: ['projᵥu', 'proj_v u', '\\operatorname{proj}', 'c'],
        definition:
          'For a nonzero reference vector v, the projection of u onto its line is the dot product with its unit direction, multiplied by that unit direction. The signed scalar component can be negative; the projection vector stays unchanged when the reference reverses.',
        example: 'The projection of (2,1,1) m onto (1,1,0) is (1.5,1.5,0) m.',
        readAs: 'vector projection',
        aliases: ['parallel component', 'signed scalar projection'],
        grammarCards: ['vector-projection'],
        formulaCards: ['vector-projection'],
        sourceKeys: ['sfDot']
      },
      {
        id: 'angular-velocity',
        title: 'Angular velocity',
        category: 'geometry',
        symbols: ['ω', 'ω⃗'],
        tokens: ['ω', 'ω⃗'],
        definition:
          'Signed angular velocity measures angular displacement per time. About the stated z axis, positive means counterclockwise. At fixed radius, the tangent speed is radius times the magnitude of angular velocity, while the tangent velocity direction changes during a turn.',
        example: 'At radius 2 m and angular velocity −1.5 rad/s, speed is 3 m/s.',
        readAs: 'angular velocity',
        aliases: ['spin rate', 'rotation rate'],
        grammarCards: ['angular-velocity'],
        formulaCards: ['angular-velocity'],
        sourceKeys: ['sfAngular']
      },
      {
        id: 'linear-momentum',
        title: 'Linear momentum',
        category: 'linear',
        symbols: ['p', 'p⃗', 'p_x', 'p_y', '‖p‖'],
        tokens: ['p', 'p⃗', 'p_x', 'p_y', '‖p‖'],
        definition:
          'Newtonian linear momentum is positive mass times the velocity vector in the same frame. Its direction follows velocity; its magnitude is mass times speed. It is distinct from kinetic energy and does not by itself predict a stopping distance.',
        example: 'A 2 kg cart with velocity (1,1) m/s has momentum (2,2) kg·m/s.',
        readAs: 'linear momentum',
        aliases: ['momentum vector'],
        grammarCards: ['linear-momentum'],
        formulaCards: ['linear-momentum'],
        sourceKeys: ['sfMomentum']
      },
      {
        id: 'spatial-edge-vector',
        title: 'Spatial edge vector',
        category: 'linear',
        symbols: ['u', 'v', 'w', 'u⃗', 'v⃗', 'w⃗'],
        tokens: ['u', 'v', 'w', 'u⃗', 'v⃗', 'w⃗'],
        definition:
          'In these spatial constructions an edge vector has three metre components in one fixed right-handed orthonormal frame. Its drawn projection can shorten or hide a component, so length and orientation must be read from the full vector.',
        example: 'u=(2,1,1) m is not confined to the first coordinate plane.',
        readAs: 'three-dimensional edge vector',
        aliases: ['edge vectors'],
        grammarCards: ['spatial-cross-product', 'scalar-triple-product', 'vector-projection'],
        formulaCards: ['spatial-cross-product', 'scalar-triple-product', 'vector-projection'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'spatial-edge-component',
        title: 'Spatial edge component',
        category: 'linear',
        symbols: ['u_x', 'u_y', 'u_z', 'v_x', 'v_y', 'v_z'],
        tokens: ['u_x', 'u_y', 'u_z', 'v_x', 'v_y', 'v_z'],
        definition:
          'A spatial edge component is a signed length along one of the fixed orthonormal frame axes. Changing one component moves that vector endpoint along that axis; it does not change the meaning of the other axes.',
        example: 'u_z=1 m records the third component of the first edge.',
        readAs: 'spatial vector component',
        aliases: ['edge component'],
        grammarCards: ['spatial-cross-product', 'vector-projection'],
        formulaCards: ['spatial-cross-product', 'vector-projection'],
        sourceKeys: ['sfFrames']
      },
      {
        id: 'spatial-cartesian-label',
        title: 'Cartesian axes and components',
        category: 'linear',
        symbols: ['x', 'y', 'z'],
        tokens: ['x', 'y', 'z'],
        definition:
          'The labels x, y and z identify three mutually perpendicular directions and their signed components in a stated Cartesian frame. A bare axis label names a measuring direction; it is not a measured length.',
        example: 'The z axis in the fixed projection still represents a spatial direction.',
        readAs: 'Cartesian coordinate labels',
        aliases: ['Cartesian axes'],
        grammarCards: [
          'spatial-cross-product',
          'scalar-triple-product',
          'vector-projection',
          'coordinate-transformation'
        ],
        formulaCards: [
          'spatial-cross-product',
          'scalar-triple-product',
          'vector-projection',
          'coordinate-transformation'
        ],
        sourceKeys: ['sfFrames']
      },
      {
        id: 'oriented-area-normal',
        title: 'Oriented area normal',
        category: 'linear',
        symbols: ['n', 'n⃗', 'n_x', 'n_y', 'n_z'],
        tokens: ['n', 'n⃗', 'n_x', 'n_y', 'n_z'],
        definition:
          'The ordered cross product of two length vectors has signed square-metre components. It is perpendicular to both edges and its norm is parallelogram area. Reversing the input order reverses this normal without changing the area.',
        example: 'The normal (0,−2,0) m² has area magnitude 2 m².',
        readAs: 'oriented area normal',
        aliases: ['area vector', 'cross product normal'],
        grammarCards: ['spatial-cross-product'],
        formulaCards: ['spatial-cross-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'spatial-parallelogram-area',
        title: 'Spatial parallelogram area',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        definition:
          'The area of the parallelogram spanned by two spatial edge vectors is the norm of their cross product. The triangle with the same two edges has half this area; the projected screen polygon generally has a different area.',
        example: 'If ‖u×v‖=2 m², the corresponding triangle has area 1 m².',
        readAs: 'parallelogram area in space',
        aliases: ['support panel area'],
        grammarCards: ['spatial-cross-product'],
        formulaCards: ['spatial-cross-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'triple-product-extents',
        title: 'Perpendicular extents of a sheared frame',
        category: 'linear',
        symbols: ['a', 'b', 'h', 's'],
        tokens: ['a', 'b', 'h', 's'],
        definition:
          'In the displayed edge family a and b are perpendicular base extents, h is signed perpendicular height, and s is sideways shear. The shear changes the frame shape but cancels from the determinant a b h.',
        example: 'Changing s from 1 m to −2 m leaves the product unchanged when a,b,h are fixed.',
        readAs: 'perpendicular extents and shear',
        aliases: ['perpendicular height', 'frame shear'],
        grammarCards: ['scalar-triple-product'],
        formulaCards: ['scalar-triple-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'oriented-volume',
        title: 'Oriented and geometric volume',
        category: 'linear',
        symbols: ['T', 'V'],
        tokens: ['T', 'V'],
        definition:
          'The ordered scalar triple product T is signed and changes sign when orientation reverses. Geometric volume V=|T| is nonnegative. Zero triple product means the edge vectors are coplanar, including collapsed cases.',
        example: 'T=−6 m³ and V=6 m³ describe the same volume with reversed orientation.',
        readAs: 'signed volume and absolute volume',
        aliases: ['oriented volume', 'parallelepiped volume'],
        grammarCards: ['scalar-triple-product'],
        formulaCards: ['scalar-triple-product'],
        sourceKeys: ['sfCross']
      },
      {
        id: 'coordinate-frame-angle',
        title: 'Coordinate frame angle',
        category: 'geometry',
        symbols: ['θ'],
        tokens: ['θ'],
        definition:
          'In this lesson θ is the counterclockwise angle of the measuring frame relative to the fixed world frame. The input uses degrees. The vector stays fixed while its components in the turned frame change.',
        example: 'Turning the measuring frame by 90 degrees uses the inverse coordinate rotation.',
        readAs: 'angle of the measuring frame',
        aliases: ['frame angle'],
        grammarCards: ['coordinate-transformation'],
        formulaCards: ['coordinate-transformation'],
        sourceKeys: ['sfFrames']
      },
      {
        id: 'orthogonal-residual',
        title: 'Orthogonal vector residual',
        category: 'linear',
        symbols: ['r⃗', '‖r‖', 'P_x', 'P_y', 'P_z'],
        tokens: ['r⃗', '‖r‖', 'P_x', 'P_y', 'P_z'],
        definition:
          'Subtracting the projection vector from the original displacement leaves a residual perpendicular to the nonzero guide direction. Here P_x,P_y,P_z are the projection components. This geometric residual is not a regression residual dataset.',
        example: '(2,1,1)−(1.5,1.5,0)=(0.5,−0.5,1) m.',
        readAs: 'perpendicular residual',
        aliases: ['perpendicular residual', 'projection residual'],
        grammarCards: ['vector-projection'],
        formulaCards: ['vector-projection'],
        sourceKeys: ['sfDot']
      },
      {
        id: 'rim-angular-position',
        title: 'Rim angular position',
        category: 'geometry',
        symbols: ['θ', 't', 'r', 'r⃗'],
        tokens: ['θ', 't', 'r', 'r⃗'],
        definition:
          'A point on the stated constant-rate wheel accumulates signed radian angle θ=ωt. Radius r is a nonnegative length; the position vector r⃗ has Cartesian components determined by cosine and sine of that angle.',
        example: 'At t=1 s and ω=1.5 rad/s, the signed angle is 1.5 rad.',
        readAs: 'wheel angle, time and radius',
        aliases: ['angular position', 'rim radius'],
        grammarCards: ['angular-velocity'],
        formulaCards: ['angular-velocity'],
        sourceKeys: ['sfAngular']
      },
      {
        id: 'tangent-velocity',
        title: 'Tangent velocity',
        category: 'geometry',
        symbols: ['v', 'v_x', 'v_y'],
        tokens: ['v', 'v_x', 'v_y'],
        definition:
          'The instantaneous velocity of a point moving on a circle is tangent to the circle and perpendicular to the radius when nonzero. Its components can change sign while its norm, speed, stays constant under fixed radius and angular velocity.',
        example: 'The tangent components are (−rω sinθ,rω cosθ) m/s.',
        readAs: 'tangent velocity',
        aliases: ['tangential velocity', 'rim speed'],
        grammarCards: ['angular-velocity'],
        formulaCards: ['angular-velocity'],
        sourceKeys: ['sfAngular']
      },
      {
        id: 'cart-velocity',
        title: 'Cart velocity components',
        category: 'linear',
        symbols: ['v_x', 'v_y'],
        tokens: ['v_x', 'v_y'],
        definition:
          'The two signed velocity components specify the cart velocity in a fixed planar frame. Speed is their nonnegative Euclidean norm; reversing both components reverses direction without changing speed.',
        example: 'Velocities (1,1) and (−1,−1) m/s have the same speed.',
        readAs: 'cart velocity components',
        aliases: ['planar velocity'],
        grammarCards: ['linear-momentum'],
        formulaCards: ['linear-momentum'],
        sourceKeys: ['sfMomentum']
      },
      {
        id: 'momentum-mass',
        title: 'Mass in the momentum model',
        category: 'language',
        symbols: ['m'],
        tokens: ['m'],
        definition:
          'The cart mass is a positive scalar in kilograms. At a fixed velocity, multiplying this mass multiplies each momentum component by the same factor. The mathematical symbol m for mass is distinct from the metre unit symbol m.',
        example: 'Doubling a 2 kg cart to 4 kg doubles its momentum at the same velocity.',
        readAs: 'cart mass',
        aliases: ['inertial mass'],
        grammarCards: ['linear-momentum'],
        formulaCards: ['linear-momentum'],
        sourceKeys: ['sfMomentum']
      },
      {
        id: 'angular-velocity-unit',
        title: 'Radians per second',
        category: 'units',
        symbols: ['rad/s'],
        tokens: ['rad/s'],
        definition:
          'Radians per second measure angular displacement per elapsed second. This angular rate is distinct from a point’s linear speed in metres per second. Radian measure supplies the factor in the relation speed=radius×angular-speed.',
        example: '1.5 rad/s at radius 2 m gives 3 m/s.',
        readAs: 'radians per second',
        aliases: ['radians per second'],
        grammarCards: ['angular-velocity'],
        formulaCards: ['angular-velocity'],
        sourceKeys: ['sfAngular']
      },
      {
        id: 'momentum-unit',
        title: 'Kilogram metres per second',
        category: 'units',
        symbols: ['kg·m/s', 'kg.m/s'],
        tokens: ['kg·m/s', 'kg.m/s'],
        definition:
          'The SI momentum unit is kilogram metre per second: mass in kilograms multiplied by velocity in metres per second. Momentum is a vector; the unit alone does not tell its direction.',
        example: '2 kg × 3 m/s = 6 kg·m/s.',
        readAs: 'kilogram metres per second',
        aliases: ['kilogram metres per second'],
        grammarCards: ['linear-momentum'],
        formulaCards: ['linear-momentum'],
        sourceKeys: ['sfMomentum']
      }
    ],
    sources: {
      sfCross: {
        title: 'OpenStax · The Cross Product',
        url: 'https://openstax.org/books/calculus-volume-3/pages/2-4-the-cross-product'
      },
      sfDot: {
        title: 'OpenStax · The Dot Product',
        url: 'https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product'
      },
      sfFrames: {
        title: 'University of Illinois Dynamics · Vectors and bases',
        url: 'https://dynref.engr.illinois.edu/rvv.html'
      },
      sfAngular: {
        title: 'OpenStax · Rotation Angle and Angular Velocity',
        url: 'https://openstax.org/books/college-physics-2e/pages/6-1-rotation-angle-and-angular-velocity'
      },
      sfMomentum: {
        title: 'OpenStax · Linear Momentum',
        url: 'https://openstax.org/books/university-physics-volume-1/pages/9-1-linear-momentum'
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
