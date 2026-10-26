/* A bounded camera for the finite Koch scene. Camera state never enters a model. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasFractalLens = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const MAX_ZOOM = 27;
  const MAX_LEVEL = 3;
  const DEFAULT_BOX = Object.freeze({ x: 65, y: 75, width: 390, height: 275 });
  const DEFAULT_GEOMETRY = Object.freeze({ x: 140, y: 143, size: 230 });
  const DEFAULT_MINI_BOX = Object.freeze({ x: 500, y: 205, width: 190, height: 110 });
  const finite = Number.isFinite;
  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
  const n = value => Number(value.toFixed(8));
  const attr = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const idOf = value => 'koch-lens-' + String(value || 'view').replace(/[^a-zA-Z0-9_-]/g, '-').slice(0, 100);

  function boxOf(input, fallback) {
    const box = input && typeof input === 'object' ? input : {};
    const coordinate = key => finite(box[key]) && Math.abs(box[key]) <= 1000000 ? box[key] : fallback[key];
    const size = key => finite(box[key]) && box[key] > 0 && box[key] <= 10000 ? box[key] : fallback[key];
    return Object.freeze({ x: coordinate('x'), y: coordinate('y'), width: size('width'), height: size('height') });
  }

  function geometryOf(input) {
    const geometry = input && typeof input === 'object' ? input : {};
    return Object.freeze({
      x: finite(geometry.x) && Math.abs(geometry.x) <= 1000000 ? geometry.x : DEFAULT_GEOMETRY.x,
      y: finite(geometry.y) && Math.abs(geometry.y) <= 1000000 ? geometry.y : DEFAULT_GEOMETRY.y,
      size: finite(geometry.size) && geometry.size > 0 && geometry.size <= 10000 ? geometry.size : DEFAULT_GEOMETRY.size,
      box: boxOf(geometry.box, DEFAULT_BOX)
    });
  }

  function normalize(input) {
    const zoom = input && typeof input === 'object' && finite(input.zoom) ? clamp(input.zoom, 1, MAX_ZOOM) : 1;
    return Object.freeze({ zoom });
  }

  /** The first child edge points in the same direction as its parent: an exact 1/3 copy. */
  function selfSimilarRegion(level = 0, input) {
    const geometry = geometryOf(input);
    const selected = finite(level) ? clamp(Math.floor(level), 0, MAX_LEVEL) : 0;
    const scale = Math.pow(1 / 3, selected), width = geometry.size * scale;
    const height = width * Math.sqrt(3) / 6;
    return Object.freeze({
      level: selected, scale, x: geometry.x, y: geometry.y - height, width, height,
      center: Object.freeze({ x: geometry.x + width / 2, y: geometry.y - height / 2 }),
      from: Object.freeze({ x: geometry.x, y: geometry.y }),
      to: Object.freeze({ x: geometry.x + width, y: geometry.y })
    });
  }

  /** At 1x the camera is the identity. From 3x on, each nested first-third edge stays centered. */
  function viewport(input, geometryInput) {
    const state = normalize(input), geometry = geometryOf(geometryInput), box = geometry.box;
    const level = Math.log(state.zoom) / Math.log(3), boxCenter = { x: box.x + box.width / 2, y: box.y + box.height / 2 };
    const width = geometry.size / state.zoom, height = width * Math.sqrt(3) / 6;
    const focus = Object.freeze({ x: geometry.x + width / 2, y: geometry.y - height / 2 });
    // Ease into the first motif without a jump when the overview becomes a detail.
    const travel = Math.min(level, 1), blend = travel * travel * (3 - 2 * travel);
    const center = Object.freeze({ x: boxCenter.x + (focus.x - boxCenter.x) * blend, y: boxCenter.y + (focus.y - boxCenter.y) * blend });
    const e = boxCenter.x - state.zoom * center.x, f = boxCenter.y - state.zoom * center.y;
    const matrix = Object.freeze({ a: state.zoom, b: 0, c: 0, d: state.zoom, e, f });
    const sourceBox = Object.freeze({ x: (box.x - e) / state.zoom, y: (box.y - f) / state.zoom, width: box.width / state.zoom, height: box.height / state.zoom });
    return Object.freeze({
      zoom: state.zoom, level, completedZoomLevel: Math.min(MAX_LEVEL, Math.floor(level + 1e-12)),
      segmentScale: 1 / state.zoom, base: 3, maxZoom: MAX_ZOOM, box, geometry, focus, center, matrix, sourceBox,
      transform: `matrix(${n(matrix.a)} 0 0 ${n(matrix.d)} ${n(e)} ${n(f)})`
    });
  }

  function project(point, view) {
    if (!point || !finite(point.x) || !finite(point.y) || !view || !view.matrix) throw new RangeError('Use a finite point and a lens viewport.');
    const m = view.matrix;
    return Object.freeze({ x: m.a * point.x + m.c * point.y + m.e, y: m.b * point.x + m.d * point.y + m.f });
  }

  /** markup is trusted, generated SVG geometry; only the geometry group is magnified. */
  function wrap(markup, options = {}) {
    const settings = options && typeof options === 'object' ? options : {};
    const view = viewport(settings, settings.geometry), id = idOf(settings.id), box = view.box;
    return `<defs><clipPath id="${id}-clip"><rect x="${n(box.x)}" y="${n(box.y)}" width="${n(box.width)}" height="${n(box.height)}"/></clipPath></defs>` +
      `<g data-role="fractal-lens" data-zoom="${n(view.zoom)}" clip-path="url(#${id}-clip)"><g data-role="fractal-lens-camera" transform="${view.transform}">${String(markup ?? '')}</g></g>`;
  }

  /** The whole outline stays still here; its rectangle is the exact inverse camera window. */
  function minimap(markup, options = {}) {
    const settings = options && typeof options === 'object' ? options : {};
    const view = viewport(settings, settings.geometry), box = view.box;
    const mini = boxOf(settings.miniBox, DEFAULT_MINI_BOX), id = idOf(settings.id) + '-map', source = view.sourceBox;
    const padding = Math.min(5, mini.width / 4, mini.height / 4);
    const label = `${Number(view.zoom.toFixed(2))}× detail · each level: 1/3 segments`;
    return `<g data-role="fractal-minimap" aria-label="${attr('Whole Koch outline; gold rectangle locates the magnified view. ' + label)}">` +
      `<rect x="${n(mini.x)}" y="${n(mini.y)}" width="${n(mini.width)}" height="${n(mini.height)}" rx="8" fill="#142735" stroke="#45616f"/>` +
      `<svg x="${n(mini.x + padding)}" y="${n(mini.y + padding)}" width="${n(mini.width - padding * 2)}" height="${n(mini.height - padding * 2)}" viewBox="${n(box.x)} ${n(box.y)} ${n(box.width)} ${n(box.height)}" preserveAspectRatio="xMidYMid meet" overflow="hidden" aria-hidden="true">` +
      `<defs><clipPath id="${id}-clip"><rect x="${n(box.x)}" y="${n(box.y)}" width="${n(box.width)}" height="${n(box.height)}"/></clipPath></defs>` +
      `<g clip-path="url(#${id}-clip)">${String(markup ?? '')}<rect data-role="fractal-camera-window" x="${n(source.x)}" y="${n(source.y)}" width="${n(source.width)}" height="${n(source.height)}" fill="#f5cf78" fill-opacity=".12" stroke="#f5cf78" stroke-width="1.5" vector-effect="non-scaling-stroke"/></g></svg>` +
      `<text x="${n(mini.x + mini.width / 2)}" y="${n(mini.y + mini.height + 19)}" fill="#98afbd" font-size="10" text-anchor="middle">Whole outline · gold = current view</text></g>`;
  }

  // Once geometry is mounted, move just the camera and its locator. Rebuilding
  // thousands of finite edge points is unnecessary for a view-only change.
  function paint(container,settings={}){
    if(!container?.querySelector)return false;
    const view=viewport(settings,settings.geometry),lens=container.querySelector('[data-role="fractal-lens"]'),camera=container.querySelector('[data-role="fractal-lens-camera"]'),map=container.querySelector('[data-role="fractal-minimap"]');
    const detail=container.querySelector('[data-role="fractal-detail-overview"]'),inset=container.querySelector('[data-role="fractal-reference-inset"]');
    if(!lens||!camera||(!detail&&!!map!==(view.zoom>1)))return false;
    const set=(node,key,value)=>{const text=String(value);if(node.getAttribute(key)!==text)node.setAttribute(key,text);};
    set(lens,'data-zoom',n(view.zoom));set(camera,'transform',view.transform);
    if(detail){set(detail,'display',view.zoom>1?'inline':'none');if(inset)set(inset,'display',view.zoom>1?'none':'inline');}
    if(map){const window=map.querySelector('[data-role="fractal-camera-window"]');if(!window)return false;for(const key of ['x','y','width','height'])set(window,key,n(view.sourceBox[key]));set(map,'aria-label','Whole Koch outline; gold rectangle locates the magnified view. '+Number(view.zoom.toFixed(2))+' times magnification.');}
    const comparison=container.querySelector('[data-role="fractal-comparison"]');
    if(comparison&&comparison.hidden!==(settings.compare!==true))comparison.hidden=settings.compare!==true;
    return true;
  }

  /** Three fixed cameras normalize the original, first-third and first-ninth edges. */
  function comparisonRegions(depth = 0, geometryInput) {
    const provided = geometryOf(geometryInput);
    // These are scene coordinates, not a route to unbounded magnification.
    const geometry = provided.size >= 1e-6 ? provided : geometryOf({ ...provided, size: DEFAULT_GEOMETRY.size });
    const drawingDepth = finite(depth) ? clamp(depth, 0, 5) : 0;
    return Object.freeze([0, 1, 2].map(level => {
      const sourceRegion = selfSimilarRegion(level, geometry), panelX = 20 + level * 244;
      const clipBox = Object.freeze({ x: panelX + 15, y: 43, width: 202, height: 72 });
      const scale = clipBox.width / sourceRegion.width;
      // All baselines and edge widths coincide in the three independent windows.
      const e = clipBox.x - geometry.x * scale, f = 108 - geometry.y * scale;
      const matrix = Object.freeze({ a: scale, b: 0, c: 0, d: scale, e, f });
      const sourceBox = Object.freeze({ x: (clipBox.x - e) / scale, y: (clipBox.y - f) / scale, width: clipBox.width / scale, height: clipBox.height / scale });
      const remainingDepth = Math.max(0, drawingDepth - level), completedLevels = Math.floor(remainingDepth);
      const forming = remainingDepth - completedLevels > 1e-10;
      const detailLabel = remainingDepth === 0 ? 'No refined detail at this scale' : completedLevels === 0 ? 'First refinement is forming' : `${completedLevels} full ${completedLevels === 1 ? 'level' : 'levels'}${forming ? ' + next forming' : ' of detail'}`;
      return Object.freeze({
        level, drawingDepth, sourceRegion, panelX, clipBox, sourceBox, matrix,
        normalizedWidth: clipBox.width, remainingDepth, completedLevels, forming, detailLabel,
        transform: `matrix(${n(scale)} 0 0 ${n(scale)} ${n(e)} ${n(f)})`
      });
    }));
  }

  /** markup is one trusted <use> reference; no contour points are generated here. */
  function comparison(markup, options = {}) {
    const settings = options && typeof options === 'object' ? options : {};
    const id = idOf(settings.id) + '-comparison', regions = comparisonRegions(settings.depth, settings.geometry);
    const names = ['Original edge', 'First third', 'First ninth'], fractions = ['1', '1/3', '1/9'];
    const description = 'Three windows show parts of the same finite Koch drawing at equal viewing width. ' + regions.map(region => `Edge length ${fractions[region.level]}: ${region.detailLabel.toLowerCase()}.`).join(' ') + ' Magnification does not add refinement or change perimeter.';
    const windows = regions.map(region => {
      const { level, panelX, clipBox } = region, clipId = id + '-' + level;
      return `<g data-role="fractal-motif-window" data-motif-level="${level}" data-source-scale="${n(region.sourceRegion.scale)}" role="group" aria-label="${attr(names[level] + ', length ' + fractions[level] + '. ' + region.detailLabel)}">` +
        `<rect x="${panelX}" y="8" width="232" height="144" rx="9" fill="#142735" stroke="#45616f"/>` +
        `<text x="${panelX + 14}" y="29" fill="#e0eae9" font-size="12">${names[level]}</text>` +
        `<text x="${panelX + 218}" y="29" fill="#96e0e9" font-size="12" text-anchor="end">${fractions[level]}</text>` +
        `<defs><clipPath id="${clipId}"><rect x="${clipBox.x}" y="${clipBox.y}" width="${clipBox.width}" height="${clipBox.height}"/></clipPath></defs>` +
        `<g clip-path="url(#${clipId})" aria-hidden="true"><g data-role="fractal-motif-camera" transform="${region.transform}">${String(markup ?? '')}</g></g>` +
        `<text x="${panelX + 116}" y="137" fill="#acc1c5" font-size="11" text-anchor="middle">${attr(region.detailLabel)}</text></g>`;
    }).join('');
    return `<svg class="fractal-motif-comparison" data-role="fractal-motif-comparison" viewBox="0 0 760 160" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">The same Koch edge at three scales</title><desc id="${id}-description">${attr(description)}</desc><g font-family="Inter,system-ui,sans-serif">${windows}</g></svg>`;
  }

  return Object.freeze({ MAX_ZOOM, MAX_LEVEL, DEFAULT_BOX, DEFAULT_GEOMETRY, DEFAULT_MINI_BOX, normalize, selfSimilarRegion, viewport, project, wrap, minimap, paint, comparisonRegions, comparison });
});
