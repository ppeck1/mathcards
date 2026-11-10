/* Bounded discrete space and camera models. Shared host owns controls and time. */
(function (root, factory) {
  const node = typeof module === 'object' && module.exports;
  const api = factory(node ? require('./plot-view.js') : root.AtlasPlotView);
  if (node) module.exports = api;
  root.AtlasSpatialInsights = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Plot) {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  const copy = v =>
    Array.isArray(v)
      ? v.map(copy)
      : v && typeof v === 'object'
        ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, copy(x)]))
        : v;
  const field = (key, label, value, min, max, step, unit, discrete = false) => ({
    key,
    label,
    value,
    min,
    max,
    step,
    unit,
    ...(discrete ? { discrete: true } : {})
  });
  const definitions = freeze({
    'platonic-solids': {
      title: 'Five regular convex solids',
      expression: 'V − E + F = 2',
      axis: 'solid',
      unit: 'faces',
      primaryLabel: 'Face count F',
      setting:
        'A model maker chooses a regular convex display frame. Count its corners, connecting edges and polygon faces while the actual edge skeleton changes.',
      limits:
        'Choose exactly one of five regular convex solids: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. The index is a selection label, not a physical quantity. Every modeled edge is one unit long. A fixed orthographic view shows all edges, including normally hidden edges. Screen crossings do not create new vertices. Face count and the Euler relation are topological counts, not volume or projected area.',
      controls: [
        field(
          'solid',
          'Solid: 1 tetra · 2 cube · 3 octa · 4 dodeca · 5 icosa',
          2,
          1,
          5,
          1,
          'choice',
          true
        )
      ]
    },
    tessellation: {
      title: 'Regular tiles around a vertex',
      expression: 'α = 180(n−2)/n; g = 360 − qα',
      axis: 'sides',
      unit: '°',
      primaryLabel: 'Signed gap angle g',
      setting:
        'A floor designer brings q equal corners from regular n-sided tiles to one point. Follow each interior angle into the full turn, then compare the three regular plane tilings.',
      limits:
        'Use whole sides n from 3 to 12 and whole copies q from 2 to 6. Positive g is a gap and negative g is angle overlap. Local angle compatibility is necessary, not a general proof that an arbitrary tile covers a plane. For the regular convex polygons tested here, the compatible pairs are triangles six at a vertex, squares four, and hexagons three. Those three cases also show a finite patch of their actual Euclidean plane tiling.',
      controls: [
        field('sides', 'Regular tile sides n', 6, 3, 12, 1, 'sides', true),
        field('copies', 'Corners at one vertex q', 3, 2, 6, 1, 'corners', true)
      ]
    },
    'perspective-projection': {
      title: 'Pinhole perspective',
      expression: 'w = fW/z; m = f/z',
      axis: 'depth',
      unit: 'm',
      primaryLabel: 'Image width w',
      setting:
        'A photographer moves a straight display marker away from a pinhole. Its real width W stays measured in metres; its projection onto a fixed virtual image plane shrinks as depth z increases.',
      limits:
        'Depth is 2–10 metres, marker width 1–4 metres and virtual image-plane distance 0.5–1.5 metres. Depth always exceeds the image-plane distance. This ideal point-pinhole construction uses a virtual plane in front of the pinhole; a physical rear image is inverted with the same width. The marker is parallel to the image plane and centered on the optical axis. Lens blur, pixels, distortion and field-of-view clipping are outside the model. Both scene directions share the same metre scale.',
      controls: [
        field('depth', 'Marker depth z', 4, 2, 10, 0.05, 'm'),
        field('width', 'Real marker width W', 2, 1, 4, 0.05, 'm'),
        field('focal', 'Virtual image-plane distance f', 1, 0.5, 1.5, 0.05, 'm')
      ]
    },
    'sphere-packing': {
      title: 'Two periodic sphere packings',
      expression: 'η = NVs/a³; Vs = 4πr³/3',
      axis: 'packing',
      unit: 'fraction',
      primaryLabel: 'Occupied volume fraction η',
      setting:
        'A materials model repeats one cube of equal solid beads. Compare corner-only simple cubic packing with face-centered cubic packing, accounting for the bead pieces shared by neighboring cubes.',
      limits:
        'Choose 1 simple cubic or 2 face-centered cubic, with equal sphere radius 0.5–1.5 centimetres. Boundary spheres are shared periodically: corners contribute eighths and face centers halves. The picture is the plane containing one boundary face, with full circular sections of boundary spheres; it does not measure the three-dimensional occupied fraction by flat area. SC contacts follow cube edges; FCC contacts follow a face diagonal through its face center. A separate fixed 0–1 bar measures the volume fraction. No densest-packing proof or real-material prediction is claimed.',
      controls: [
        field(
          'packing',
          'Packing: 1 simple cubic · 2 face-centered cubic',
          1,
          1,
          2,
          1,
          'choice',
          true
        ),
        field('radius', 'Sphere radius r', 1, 0.5, 1.5, 0.05, 'cm')
      ]
    }
  });
  const ids = Object.freeze(Object.keys(definitions));
  const has = slug => typeof slug === 'string' && Object.hasOwn(definitions, slug);
  const get = slug => {
    if (!has(slug)) throw new RangeError('Unknown spatial insight.');
    return definitions[slug];
  };
  const defaults = slug => Object.fromEntries(get(slug).controls.map(c => [c.key, c.value]));
  const controls = slug => get(slug).controls.map(({ value, ...c }) => copy(c));
  function validateParams(slug, input = {}) {
    const parameters = {},
      errors = [];
    if (!has(slug) || !input || typeof input !== 'object' || Array.isArray(input))
      return {
        valid: false,
        parameters,
        errors: [{ field: 'parameters', message: 'Use the declared spatial input object.' }],
        warnings: []
      };
    const fields = get(slug).controls;
    for (const key of Object.keys(input))
      if (!fields.some(c => c.key === key)) errors.push({ field: key, message: 'Unknown input.' });
    for (const c of fields) {
      const v = Object.hasOwn(input, c.key) ? input[c.key] : c.value;
      if (
        typeof v !== 'number' ||
        !Number.isFinite(v) ||
        v < c.min ||
        v > c.max ||
        (c.discrete && !Number.isSafeInteger(v))
      )
        errors.push({
          field: c.key,
          message: c.discrete
            ? 'Choose a whole supported count or model.'
            : 'Use a finite measurement within the displayed bounds.'
        });
      else parameters[c.key] = v;
    }
    return { valid: !errors.length, parameters, errors, warnings: [] };
  }
  const solidData = freeze([
    {
      name: 'Tetrahedron',
      vertexCount: 4,
      edgeCount: 6,
      faceCount: 4,
      faceSides: 3,
      vertexDegree: 3
    },
    { name: 'Cube', vertexCount: 8, edgeCount: 12, faceCount: 6, faceSides: 4, vertexDegree: 3 },
    {
      name: 'Octahedron',
      vertexCount: 6,
      edgeCount: 12,
      faceCount: 8,
      faceSides: 3,
      vertexDegree: 4
    },
    {
      name: 'Dodecahedron',
      vertexCount: 20,
      edgeCount: 30,
      faceCount: 12,
      faceSides: 5,
      vertexDegree: 3
    },
    {
      name: 'Icosahedron',
      vertexCount: 12,
      edgeCount: 30,
      faceCount: 20,
      faceSides: 3,
      vertexDegree: 5
    }
  ]);
  function solidVertices(index) {
    const phi = (1 + Math.sqrt(5)) / 2,
      v = [],
      signs = [-1, 1];
    if (index === 1)
      return [
        [1, 1, 1],
        [1, -1, -1],
        [-1, 1, -1],
        [-1, -1, 1]
      ].map(p => p.map(x => x / (2 * Math.sqrt(2))));
    if (index === 2) {
      for (const x of signs)
        for (const y of signs) for (const z of signs) v.push([x / 2, y / 2, z / 2]);
    }
    if (index === 3) {
      for (let i = 0; i < 3; i++)
        for (const s of signs) {
          const p = [0, 0, 0];
          p[i] = s / Math.sqrt(2);
          v.push(p);
        }
    }
    if (index === 4) {
      for (const x of signs) for (const y of signs) for (const z of signs) v.push([x, y, z]);
      for (const a of signs)
        for (const b of signs)
          v.push([0, a / phi, b * phi], [a / phi, b * phi, 0], [b * phi, 0, a / phi]);
      return v.map(p => p.map(x => (x * phi) / 2));
    }
    if (index === 5) {
      for (const a of signs)
        for (const b of signs) v.push([0, a, b * phi], [a, b * phi, 0], [b * phi, 0, a]);
      return v.map(p => p.map(x => x / 2));
    }
    return v;
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters,
      base = { ...checked, status: 'valid' };
    if (slug === 'platonic-solids') {
      const d = solidData[p.solid - 1],
        vertices = solidVertices(p.solid),
        edges = [];
      vertices.forEach((a, i) =>
        vertices.forEach((b, j) => {
          if (j > i && Math.abs(Math.hypot(...a.map((x, k) => x - b[k])) - 1) < 1e-9)
            edges.push([i, j]);
        })
      );
      return {
        ...base,
        ...d,
        output: d.faceCount,
        euler: d.vertexCount - d.edgeCount + d.faceCount,
        vertices,
        edges,
        edgeLength: 1
      };
    }
    if (slug === 'tessellation') {
      const angle = (180 * (p.sides - 2)) / p.sides,
        sumAngles = p.copies * angle,
        gap = 360 - sumAngles,
        compatible = p.copies * (p.sides - 2) === 2 * p.sides ? 1 : 0;
      return {
        ...base,
        output: gap,
        angle,
        sumAngles,
        gap,
        compatible,
        classification: compatible ? 'fits one full turn' : gap > 0 ? 'gap' : 'overlap'
      };
    }
    if (slug === 'perspective-projection') {
      const magnification = p.focal / p.depth,
        imageWidth = p.width * magnification;
      return {
        ...base,
        output: imageWidth,
        imageWidth,
        magnification,
        halfImage: imageWidth / 2,
        halfWidth: p.width / 2
      };
    }
    const occupancy = p.packing === 1 ? 1 : 4,
      faceCenters = p.packing === 1 ? 0 : 6,
      cellEdge = (p.packing === 1 ? 2 : 2 * Math.sqrt(2)) * p.radius,
      sphereVolume = (4 * Math.PI * p.radius ** 3) / 3,
      occupiedVolume = occupancy * sphereVolume,
      cellVolume = cellEdge ** 3,
      fraction = occupiedVolume / cellVolume;
    return {
      ...base,
      output: fraction,
      fraction,
      occupancy,
      faceCenters,
      cornerShare: 1,
      faceShare: faceCenters / 2,
      cellEdge,
      sphereVolume,
      occupiedVolume,
      cellVolume,
      emptyFraction: 1 - fraction,
      packingName: p.packing === 1 ? 'Simple cubic' : 'Face-centered cubic',
      pi: Math.PI
    };
  }
  const canInterpolate = (slug, a, b) => {
    const first = validateParams(slug, a),
      second = validateParams(slug, b);
    return (
      first.valid &&
      second.valid &&
      get(slug).controls.every(
        c => !c.discrete || first.parameters[c.key] === second.parameters[c.key]
      )
    );
  };
  const curveValue = (slug, p, value) => {
    if (!has(slug)) return null;
    const r = evaluate(slug, { ...p, [get(slug).axis]: value });
    return r.valid ? r.output : null;
  };
  function specs(slug) {
    const d = get(slug);
    return {
      title: d.title,
      expression: d.expression,
      axis: d.axis,
      unit: d.unit,
      primaryLabel: d.primaryLabel,
      setting: d.setting,
      limits: d.limits,
      views: ['geometry', 'graph'],
      rendererId: slug + '-visual-model',
      sweeps: controls(slug),
      canInterpolate: (a, b) => canInterpolate(slug, a, b),
      readout: (p, r) => ({
        expression: d.expression,
        stats: !r.valid
          ? []
          : [
              { label: d.primaryLabel.toUpperCase(), value: r.output, note: d.unit },
              {
                label:
                  slug === 'platonic-solids'
                    ? 'SOLID'
                    : slug === 'tessellation'
                      ? 'VERTEX'
                      : slug === 'sphere-packing'
                        ? 'PACKING'
                        : 'MAGNIFICATION',
                value:
                  slug === 'platonic-solids'
                    ? r.name
                    : slug === 'tessellation'
                      ? r.classification
                      : slug === 'sphere-packing'
                        ? r.packingName
                        : r.magnification,
                note:
                  slug === 'platonic-solids'
                    ? 'one of five discrete choices'
                    : slug === 'tessellation'
                      ? 'signed angle balance'
                      : slug === 'sphere-packing'
                        ? 'one of two discrete choices'
                        : 'image width / real width'
              }
            ],
        insight: !r.valid
          ? r.errors.map(error => error.message).join(' ')
          : slug === 'platonic-solids'
            ? r.name +
              ' has ' +
              r.vertexCount +
              ' vertices, ' +
              r.edgeCount +
              ' edges and ' +
              r.faceCount +
              ' faces. Screen crossings do not add vertices.'
            : slug === 'tessellation'
              ? 'The signed gap compares the chosen corners with one full turn. A compatible regular case also shows its plane pattern.'
              : slug === 'sphere-packing'
                ? r.packingName +
                  ' assigns ' +
                  r.occupancy +
                  ' sphere volumes to one repeating cell. Changing the common radius scales both volumes equally.'
                : 'Moving the marker farther from the pinhole shrinks its image on the fixed image plane. Changing its width or the plane distance changes that same projection.'
      })
    };
  }
  const C = {
    ink: '#eef8f4',
    muted: '#a0b5bc',
    grid: '#294352',
    cyan: '#77d8e8',
    gold: '#f5cf78',
    mint: '#c6f276',
    violet: '#b8a1ff'
  };
  const esc = v =>
    String(v ?? '').replace(
      /[&<>"']/g,
      c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
    );
  const n = v => Number(v.toFixed(5));
  const f = v => String(Number(v.toPrecision(4))).replace(/-/g, '−');
  const text = (x, y, v, color = C.ink, size = 18, anchor = 'middle') =>
    `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" text-anchor="${anchor}">${esc(v)}</text>`;
  const line = (x, y, a, b, color = C.grid, width = 2, extra = '') =>
    `<line x1="${n(x)}" y1="${n(y)}" x2="${n(a)}" y2="${n(b)}" stroke="${color}" stroke-width="${width}" ${extra}/>`;
  const mark = (keys, body, role = 'intermediate') =>
    `<g data-quantity="${esc(keys)}" data-story-part="${role}">${body}</g>`;
  const polygon = (points, color, role, extra = '') =>
    `<polygon data-role="${role}" points="${points.map(p => p.map(n).join(',')).join(' ')}" fill="${color}" fill-opacity=".15" stroke="${color}" stroke-width="1.4" ${extra}/>`;
  function frame(slug, body, o, caption) {
    const w = o.compact ? 360 : 760,
      id =
        'spatial-insight-' +
        Array.from(String(o.id || slug))
          .map(c => (/^[A-Za-z0-9-]$/.test(c) ? c : '_' + c.codePointAt(0).toString(16) + '_'))
          .join('');
    return `<figure class="visualization-frame"><svg class="visual-scene spatial-insight-model" data-model="${slug}" viewBox="0 0 ${w} 460" role="img" aria-labelledby="${id}-title ${id}-desc" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(get(slug).title)}</title><desc id="${id}-desc">${esc(caption)}</desc><rect width="${w}" height="460" rx="18" fill="#111e2b"/><g font-family="Inter, system-ui, sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(caption)}</figcaption></figure>`;
  }
  function project(v) {
    const az = 0.47,
      el = 0.38,
      u = v[0] * Math.cos(az) - v[2] * Math.sin(az),
      z = v[0] * Math.sin(az) + v[2] * Math.cos(az);
    return [u, v[1] * Math.cos(el) - z * Math.sin(el)];
  }
  function geometry(slug, p, r, o) {
    const w = o.compact ? 360 : 760,
      cx = w / 2,
      left = o.compact ? 36 : 70,
      right = w - left,
      span = right - left,
      pin = o.baseline && evaluate(slug, o.baseline);
    let body = mark(
      slug === 'platonic-solids' ? 'output name' : 'output',
      text(
        cx,
        40,
        slug === 'platonic-solids'
          ? r.name
          : slug === 'tessellation'
            ? 'Signed gap = ' + f(r.output) + '°'
            : slug === 'perspective-projection'
              ? 'Image width ≈ ' + f(r.output) + ' m'
              : 'Occupied fraction ≈ ' + f(r.output),
        C.gold,
        o.compact ? 25 : 30
      ),
      'output'
    );
    if (slug === 'platonic-solids') {
      body += mark(
        'vertexCount edgeCount faceCount',
        text(
          cx,
          78,
          'V = ' + r.vertexCount + ' · E = ' + r.edgeCount + ' · F = ' + r.faceCount,
          C.ink,
          o.compact ? 21 : 25
        )
      );
      const draw = (result, color, dashed = false) => {
        let b = '';
        const points = result.vertices.map(project).map(([x, y]) => [cx + x * 62, 222 - y * 62]);
        result.edges.forEach(([a, bidx]) => {
          b += line(
            ...points[a],
            ...points[bidx],
            color,
            dashed ? 1.3 : 2.3,
            `data-role="solid-edge" ${dashed ? 'stroke-dasharray="4 4"' : ''}`
          );
        });
        points.forEach(([x, y]) => {
          b += `<circle data-role="solid-vertex" cx="${n(x)}" cy="${n(y)}" r="3" fill="${color}"/>`;
        });
        return b;
      };
      if (pin?.valid) body += mark('solid', draw(pin, C.violet, true), 'reference');
      body += mark('solid edgeCount vertexCount', draw(r, C.cyan), 'input');
      body += mark(
        'euler',
        text(
          cx,
          365,
          r.vertexCount + ' − ' + r.edgeCount + ' + ' + r.faceCount + ' = ' + r.euler,
          C.mint,
          o.compact ? 25 : 30
        ),
        'output'
      );
      body += text(
        cx,
        402,
        'All edges shown · crossings add no corners',
        C.muted,
        o.compact ? 14 : 18
      );
      return frame(
        slug,
        body,
        o,
        'The actual unit-edge skeleton changes with the named discrete solid. A fixed orthographic projection shows all edges; it does not measure face area or volume. V counts vertices, E edges and F faces. Every displayed solid has V−E+F=2. Violet edges, if present, preserve the pinned choice.'
      );
    }
    if (slug === 'tessellation') {
      body += mark(
        'sides copies angle',
        text(
          cx,
          75,
          p.sides + ' sides · ' + p.copies + ' corners · α ≈ ' + f(r.angle) + '°',
          C.ink,
          o.compact ? 17 : 23
        ),
        'input'
      );
      const cy = 173,
        rad = 69;
      for (let i = 0; i < p.copies; i++) {
        const a = (i * r.angle * Math.PI) / 180 - Math.PI / 2,
          b = ((i + 1) * r.angle * Math.PI) / 180 - Math.PI / 2;
        body += mark(
          'angle copies',
          `<path data-role="angle-sector" d="M${cx} ${cy}L${n(cx + rad * Math.cos(a))} ${n(cy + rad * Math.sin(a))}A${rad} ${rad} 0 ${r.angle > 180 ? 1 : 0} 1 ${n(cx + rad * Math.cos(b))} ${n(cy + rad * Math.sin(b))}Z" fill="${i % 2 ? C.gold : C.cyan}" fill-opacity=".22" stroke="${C.grid}"/>`
        );
      }
      body += mark(
        'sumAngles gap classification',
        text(
          cx,
          272,
          'qα ≈ ' + f(r.sumAngles) + '° · ' + r.classification,
          C.mint,
          o.compact ? 19 : 24
        ),
        'output'
      );
      if (r.compatible) {
        const tx = cx,
          ty = 340,
          s = 15,
          points = [];
        if (p.sides === 4) {
          for (let a = -2; a <= 1; a++)
            for (let b = -1; b <= 1; b++)
              points.push([
                [tx + a * s, ty + b * s],
                [tx + (a + 1) * s, ty + b * s],
                [tx + (a + 1) * s, ty + (b + 1) * s],
                [tx + a * s, ty + (b + 1) * s]
              ]);
        }
        if (p.sides === 3) {
          const h = (s * Math.sqrt(3)) / 2;
          for (let a = -2; a <= 1; a++)
            for (let b = -1; b <= 1; b++) {
              const x = tx + a * s + (b * s) / 2,
                y = ty + b * h;
              points.push(
                [
                  [x, y],
                  [x + s, y],
                  [x + s / 2, y + h]
                ],
                [
                  [x + s, y],
                  [x + 1.5 * s, y + h],
                  [x + s / 2, y + h]
                ]
              );
            }
        }
        if (p.sides === 6) {
          for (let a = -1; a <= 1; a++)
            for (let b = -1; b <= 1; b++) {
              const x = tx + 1.5 * s * a,
                y = ty + Math.sqrt(3) * s * (b + a / 2);
              points.push(
                Array.from({ length: 6 }, (_, i) => [
                  x + s * Math.cos((i * Math.PI) / 3),
                  y + s * Math.sin((i * Math.PI) / 3)
                ])
              );
            }
        }
        body += mark(
          'compatible sides',
          points.map((v, i) => polygon(v, i % 2 ? C.gold : C.cyan, 'tiling-tile')).join('')
        );
        body += text(
          cx,
          413,
          'A patch of the matching regular plane tiling',
          C.muted,
          o.compact ? 13 : 18
        );
      } else {
        body += text(
          cx,
          330,
          'These corners leave ' + (r.gap > 0 ? 'a gap.' : 'angle overlap.'),
          C.muted,
          o.compact ? 19 : 24
        );
        body += text(
          cx,
          374,
          'Local angles do not tile a whole floor.',
          C.muted,
          o.compact ? 15 : 20
        );
      }
      if (pin?.valid)
        body += mark(
          'output',
          text(cx, 447, 'Pinned gap ≈ ' + f(pin.gap) + '°', C.violet, 14),
          'reference'
        );
      return frame(
        slug,
        body,
        o,
        'The circular sectors show the exact interior angle of each selected regular-polygon corner, not complete tile outlines. The signed full-turn gap is 360 minus their sum; multiple turns overlap. Compatible triangle, square and hexagon settings additionally show actual polygon patches. Other settings do not invent a gap-free tiling.'
      );
    }
    if (slug === 'perspective-projection') {
      body += mark(
        'depth width focal',
        text(
          cx,
          77,
          'z = ' + f(p.depth) + ' m · W = ' + f(p.width) + ' m · f = ' + f(p.focal) + ' m',
          C.ink,
          o.compact ? 16 : 22
        ),
        'input'
      );
      const scale = o.compact ? 26 : 40,
        x0 = o.compact ? 34 : 180,
        y0 = 224,
        px = z => x0 + scale * z,
        py = x => y0 - scale * x;
      body +=
        line(px(0), y0, px(10), y0, C.grid, 1) +
        line(px(p.focal), py(-2), px(p.focal), py(2), C.violet, 1.5);
      for (const sign of [-1, 1])
        body += mark(
          'depth width imageWidth',
          line(px(0), y0, px(p.depth), py((sign * p.width) / 2), C.grid, 1.7)
        );
      body += mark(
        'depth width',
        line(
          px(p.depth),
          py(-p.width / 2),
          px(p.depth),
          py(p.width / 2),
          C.cyan,
          5,
          'data-role="real-marker"'
        ),
        'input'
      );
      body += mark(
        'imageWidth output focal',
        line(
          px(p.focal),
          py(-r.halfImage),
          px(p.focal),
          py(r.halfImage),
          C.mint,
          5,
          'data-role="image-marker"'
        ),
        'output'
      );
      body += `<circle cx="${px(0)}" cy="${y0}" r="3.5" fill="${C.gold}"/>`;
      if (pin?.valid)
        body += mark(
          'imageWidth',
          line(
            px(p.focal) + 6,
            py(-pin.halfImage),
            px(p.focal) + 6,
            py(pin.halfImage),
            C.violet,
            2,
            'stroke-dasharray="4 3"'
          ),
          'reference'
        );
      body += text(
        cx,
        320,
        'Cyan: real width · green: virtual image',
        C.muted,
        o.compact ? 14 : 19
      );
      body += mark(
        'magnification',
        text(cx, 361, 'm ≈ ' + f(r.magnification) + ' = image / real', C.mint, o.compact ? 20 : 26)
      );
      body +=
        line(left, 403, left + scale, 403, C.muted, 2) +
        text(left + scale / 2, 426, '1 m', C.muted, 14);
      body += text(right, 426, 'Depth increases →', C.muted, 14, 'end');
      return frame(
        slug,
        body,
        o,
        'A side-view section shows the centered marker and its rays through the pinhole to a virtual image plane in front. Both axes use one fixed metre scale. The green segment length is fW/z; the cyan segment retains real width W. The virtual plane is upright; the corresponding rear physical image is inverted. A violet dashed segment preserves pinned image width at the current plane for comparison.'
      );
    }
    body += mark(
      'packing packingName occupancy',
      text(cx, 77, r.packingName + ' · N = ' + r.occupancy, C.ink, o.compact ? 18 : 24),
      'input'
    );
    const scale = 27,
      edge = r.cellEdge * scale,
      rr = p.radius * scale,
      x = cx - edge / 2,
      y = 192 - edge / 2;
    body += polygon(
      [
        [x, y],
        [x + edge, y],
        [x + edge, y + edge],
        [x, y + edge]
      ],
      C.muted,
      'packing-cell',
      `data-edge="${r.cellEdge}"`
    );
    const centers = [
      [x, y],
      [x + edge, y],
      [x, y + edge],
      [x + edge, y + edge]
    ];
    if (p.packing === 2) centers.push([cx, 192]);
    const contacts =
      p.packing === 1
        ? [
            [0, 1],
            [0, 2],
            [1, 3],
            [2, 3]
          ]
        : [
            [0, 4],
            [1, 4],
            [2, 4],
            [3, 4]
          ];
    body += mark(
      'radius packing',
      centers
        .map(
          ([a, b]) =>
            `<circle data-role="sphere-section" cx="${n(a)}" cy="${n(b)}" r="${n(rr)}" fill="${C.cyan}" fill-opacity=".13" stroke="${C.cyan}" stroke-width="1.7"/>`
        )
        .join(''),
      'input'
    );
    body += mark(
      'cellEdge radius',
      contacts
        .map(([a, b]) =>
          line(...centers[a], ...centers[b], C.gold, 1.6, 'data-role="contact-centers"')
        )
        .join('')
    );
    body += mark(
      'cellEdge',
      text(
        cx,
        314,
        'a ≈ ' + f(r.cellEdge) + ' cm · r = ' + f(p.radius) + ' cm',
        C.muted,
        o.compact ? 18 : 23
      )
    );
    body += mark(
      'cornerShare faceShare occupancy',
      text(
        cx,
        343,
        '8 × ⅛ + ' + r.faceCenters + ' × ½ = ' + r.occupancy + ' spheres',
        C.muted,
        o.compact ? 16 : 21
      )
    );
    body += `<rect x="${left}" y="367" width="${span}" height="22" fill="${C.grid}"/>`;
    body += mark(
      'output fraction',
      `<rect data-role="packing-fraction" x="${left}" y="367" width="${n(span * r.fraction)}" height="22" fill="${C.mint}"/>`,
      'output'
    );
    if (pin?.valid)
      body += mark(
        'output',
        line(
          left + span * pin.fraction,
          361,
          left + span * pin.fraction,
          395,
          C.violet,
          2,
          'stroke-dasharray="4 3"'
        ),
        'reference'
      );
    body +=
      text(left, 411, '0', C.muted, 14, 'start') +
      text(right, 411, '1 (full cell)', C.muted, 14, 'end');
    body += mark(
      'pi',
      text(cx, 444, 'π ≈ ' + f(r.pi) + ' · fraction measures volume', C.muted, o.compact ? 14 : 19),
      'reference'
    );
    return frame(
      slug,
      body,
      o,
      'The square has the evaluated cell-edge length at a fixed centimetre scale. Full circles show sphere sections in one boundary-face plane, with neighboring spheres outside the square also visible. Gold center-to-center segments equal two radii and show actual contacts. Cell occupancy is one sphere for SC or four for FCC after boundary sharing. The separate bar measures occupied three-dimensional volume fraction on fixed 0–1 bounds.'
    );
  }
  function graph(slug, p, r, o) {
    const d = get(slug),
      c = d.controls.find(x => x.key === d.axis),
      discrete = !!c.discrete,
      pin = o.baseline && evaluate(slug, o.baseline),
      current = [
        {
          x: p[c.key],
          y: r.output,
          label: d.primaryLabel,
          quantity: c.key + ' output',
          color: C.mint,
          draggable: o.sceneControl !== false
        }
      ];
    if (pin?.valid)
      current.push({
        x: pin.parameters[c.key],
        y: pin.output,
        label: 'Pinned result',
        quantity: 'output',
        color: C.violet
      });
    const bounds =
      slug === 'tessellation'
        ? [-600, 240]
        : slug === 'platonic-solids'
          ? [0, 22]
          : slug === 'sphere-packing'
            ? [0, 1]
            : [0, 3.2];
    return Plot.render(
      {
        title: d.title,
        description: d.setting,
        x: { ...c, value: p[c.key] },
        y: { min: bounds[0], max: bounds[1], label: d.primaryLabel + ' (' + d.unit + ')' },
        series: [
          {
            id: 'result',
            label: d.primaryLabel,
            quantity: c.key + ' output',
            color: C.gold,
            ...(discrete ? { dots: true } : {}),
            points: Array.from({ length: discrete ? c.max - c.min + 1 : 101 }, (_, i) => {
              const x = discrete ? c.min + i : c.min + ((c.max - c.min) * i) / 100;
              return { x, y: curveValue(slug, p, x) };
            })
          }
        ],
        current,
        notes: [
          slug === 'platonic-solids'
            ? 'Choices: 1 tetrahedron, 2 cube, 3 octahedron, 4 dodecahedron, 5 icosahedron. Separate dots show named categories; no intermediate solid is implied.'
            : slug === 'sphere-packing'
              ? 'Choices: 1 simple cubic, 2 face-centered cubic. Fraction is independent of radius within each periodic packing; the category dots are not a continuous deformation.'
              : slug === 'tessellation'
                ? 'Sides are whole numbers and copies are fixed for this curve. Negative gap means angle overlap. Separate dots do not invent fractional-sided tiles.'
                : 'Real width and plane distance stay fixed for this depth curve. The same image width follows the inverse-depth law.'
        ]
      },
      o
    );
  }
  function render(slug, input, o = {}) {
    if (!has(slug)) return '';
    const r = evaluate(slug, input);
    if (!r.valid)
      return frame(
        slug,
        text(
          o.compact ? 180 : 380,
          213,
          'Choose supported measurements',
          C.gold,
          o.compact ? 20 : 26
        ),
        o,
        r.errors.map(e => e.message).join(' ')
      );
    return o.view === 'graph'
      ? graph(slug, r.parameters, r, o)
      : geometry(slug, r.parameters, r, o);
  }
  return Object.freeze({
    ids,
    has,
    defaults,
    controls,
    specs,
    validateParams,
    evaluate,
    curveValue,
    render,
    canInterpolate
  });
});
