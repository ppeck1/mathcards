/* Six bounded mathematical experiments. Formula text is never executed. */
(function (root, factory) {
  'use strict';
  const api = factory(typeof module==='object'&&module.exports?require('./fractal-lens.js'):root.AtlasFractalLens,typeof module==='object'&&module.exports?require('./chaos-trace.js'):root.AtlasChaosTrace);
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDiscovery = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (Lens,Trace) {
  'use strict';
  const TAU = Math.PI * 2;
  const DEFINITIONS = {
    'chaos-theory': { title: 'Chaos and sensitive dependence', expression: 'xₙ₊₁ = r xₙ(1 − xₙ)', rendererId: 'chaos-theory-visual-model', unit: 'population fraction', axis: 'generation', maximum: 36, primaryLabel: 'Separation of the two paths', controls: [
      { key: 'generation', label: 'Generation playhead', value: 12, min: 0, max: 36, step: .05, unit: 'generations' },
      { key: 'rate', label: 'Growth parameter r', value: 3.8, min: 2.5, max: 4, step: .005, unit: '' },
      { key: 'seed', label: 'Starting population', value: .35, min: .01, max: .99, step: .001, unit: 'fraction' },
      { key: 'delta', label: 'Tiny starting difference', value: .0001, min: .000001, max: .01, step: .000001, unit: 'fraction' }
    ] },
    'fractal-geometry': { title: 'Fractal geometry', expression: 'Pₙ = 3s(4/3)ⁿ at integer levels', rendererId: 'fractal-geometry-visual-model', unit: 'm', axis: 'depth', maximum: 5, primaryLabel: 'Drawn snowflake perimeter', controls: [
      { key: 'depth', label: 'Refinement playhead', value: 3, min: 0, max: 5, step: .01, unit: 'levels' },
      { key: 'length', label: 'Original triangle side', value: 1, min: .5, max: 3, step: .01, unit: 'm' }
    ] },
    'wave-interference': { title: 'Wave interference', expression: 'R = 2A |cos(φ/2)|', rendererId: 'wave-interference-visual-model', unit: 'amplitude units', axis: 'phase', maximum: TAU, primaryLabel: 'Resultant wave amplitude', controls: [
      { key: 'phase', label: 'Phase difference φ', value: Math.PI / 2, min: 0, max: TAU, step: .01, unit: 'rad' },
      { key: 'amplitude', label: 'Each wave amplitude A', value: 1, min: .2, max: 2, step: .01, unit: 'units' }
    ] },
    probability: { title: 'Probability and expectation', expression: 'E[K] = 6p', rendererId: 'probability-visual-model', unit: 'successes', axis: 'chance', maximum: 1, primaryLabel: 'Expected successes in six trials', controls: [
      { key: 'chance', label: 'Success chance p', value: .5, min: 0, max: 1, step: .005, unit: 'probability' }
    ] },
    'vector-rotation': { title: 'Vectors and rotation', expression: '(x, y) = (r cos θ, r sin θ)', rendererId: 'vector-rotation-visual-model', unit: 'm', axis: 'angle', maximum: 360, primaryLabel: 'Horizontal projection x', controls: [
      { key: 'angle', label: 'Rotation angle θ', value: 60, min: 0, max: 360, step: .25, unit: '°' },
      { key: 'radius', label: 'Vector length r', value: 2, min: .5, max: 3, step: .01, unit: 'm' }
    ] },
    'pythagorean-theorem': { title: 'The Pythagorean theorem', expression: 'c = √(a² + b²)', rendererId: 'pythagorean-theorem-visual-model', unit: 'm', axis: 'a', maximum: 6, primaryLabel: 'Hypotenuse length c', controls: [
      { key: 'a', label: 'Horizontal leg a', value: 3, min: .5, max: 6, step: .01, unit: 'm' },
      { key: 'b', label: 'Vertical leg b', value: 4, min: .5, max: 6, step: .01, unit: 'm' }
    ] }
  };
  const C = { bg: '#101e2b', grid: '#294352', white: '#f0f7f6', muted: '#98afbd', mint: '#c6f276', cyan: '#77d8e8', gold: '#f5cf78', violet: '#b8a1ff', orange: '#ffb08a' };
  const finite = Number.isFinite;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const n = value => finite(value) ? Number(value.toFixed(4)) : 0;
  const fmt = value => finite(value) ? (Math.abs(value) > 0 && Math.abs(value) < .0001 ? value.toExponential(2) : String(Number(value.toPrecision(5)))).replace('-', '−') : 'undefined';
  const zero = value => Math.abs(value) < 1e-14 ? 0 : value;
  const clamp = (value, lo, hi) => Math.min(hi, Math.max(lo, value));
  const text = (x, y, value, color = C.muted, size = 12, extra = '') => `<text x="${n(x)}" y="${n(y)}" fill="${color}" font-size="${size}" ${extra}>${esc(value)}</text>`;
  const line = (x1, y1, x2, y2, color = C.grid, extra = '') => `<line x1="${n(x1)}" y1="${n(y1)}" x2="${n(x2)}" y2="${n(y2)}" stroke="${color}" ${extra}/>`;
  const circle = (x, y, radius, color, extra = '') => `<circle cx="${n(x)}" cy="${n(y)}" r="${n(radius)}" fill="${color}" ${extra}/>`;
  const mark = (part, body) => `<g data-story-part="${part}" class="story-cue">${body}</g>`;
  const path = points => points.map(([x, y], i) => `${i ? 'L' : 'M'}${n(x)} ${n(y)}`).join('');
  function has(slug) { return Object.hasOwn(DEFINITIONS, slug); }
  function definition(slug) { if (!has(slug)) throw new RangeError('Unknown discovery model: ' + slug); return DEFINITIONS[slug]; }
  function defaults(slug) { return Object.fromEntries(definition(slug).controls.map(control => [control.key, control.value])); }
  function controls(slug) { return definition(slug).controls.map(({ value, ...control }) => ({ ...control })); }
  function specs(slug) { const { controls: ignored, ...metadata } = definition(slug); return { ...metadata }; }
  function validateParams(slug, input) {
    const parameters = {}, errors = [];
    const invalid = message => ({ valid: false, parameters, errors: [{ field: 'parameters', message }], warnings: [] });
    if (!has(slug)) return invalid('Unknown model.');
    if (input === undefined) input = {};
    if (!input || typeof input !== 'object' || Array.isArray(input)) return invalid('Parameters must be an object.');
    const rules = definition(slug).controls;
    for (const key of Object.keys(input)) if (!rules.some(rule => rule.key === key)) errors.push({ field: key, message: 'Unknown parameter.' });
    for (const rule of rules) {
      const value = Object.hasOwn(input, rule.key) ? input[rule.key] : rule.value;
      if (typeof value !== 'number' || !finite(value)) errors.push({ field: rule.key, message: 'Enter a finite number.' });
      else if (value < rule.min || value > rule.max) errors.push({ field: rule.key, message: `Use a value from ${rule.min} to ${rule.max}.` });
      else parameters[rule.key] = value;
    }
    return { valid: errors.length === 0, parameters, errors, warnings: [] };
  }
  /** Actual logistic iterates, including the seed at index zero. No random sampling. */
  function orbit(rate, seed, count = 36) {
    if (!finite(rate) || rate < 0 || rate > 4 || !finite(seed) || seed < 0 || seed > 1 || !Number.isInteger(count) || count < 0 || count > 1000) throw new RangeError('Use a bounded logistic orbit.');
    const values = [seed];
    for (let i = 0; i < count; i++) values.push(rate * values[i] * (1 - values[i]));
    return values;
  }
  function atGeneration(values, generation) { const lower = Math.floor(generation), f = generation - lower; return values[lower] + ((values[lower + 1] ?? values[lower]) - values[lower]) * f; }
  /** Fixed topology: later, inactive Koch subdivisions remain collinear. */
  function kochPoints(depth, length = 1) {
    if (!finite(depth) || depth < 0 || depth > 5 || !finite(length) || length <= 0 || length > 3) throw new RangeError('Use depth 0–5 and side length greater than 0 and at most 3.');
    const points = [], h = Math.sqrt(3) / 2;
    function segment(a, b, level) {
      if (level === 5) { points.push(a); return; }
      const f = clamp(depth - level, 0, 1), dx = b[0] - a[0], dy = b[1] - a[1];
      const one = [a[0] + dx / 3, a[1] + dy / 3], peak = [a[0] + dx / 2 + dy * Math.sqrt(3) / 6 * f, a[1] + dy / 2 - dx * Math.sqrt(3) / 6 * f], two = [a[0] + 2 * dx / 3, a[1] + 2 * dy / 3];
      segment(a, one, level + 1); segment(one, peak, level + 1); segment(peak, two, level + 1); segment(two, b, level + 1);
    }
    const corners = [[0, 0], [length, 0], [length / 2, length * h]];
    for (let i = 0; i < 3; i++) segment(corners[i], corners[(i + 1) % 3], 0);
    points.push(corners[0]);
    return points;
  }
  function kochPerimeter(depth, length = 1) {
    if (!finite(depth) || depth < 0 || depth > 5 || !finite(length) || length <= 0 || length > 3) throw new RangeError('Use depth 0–5 and side length greater than 0 and at most 3.');
    const level = Math.floor(depth), fraction = depth - level;
    return 3 * length * Math.pow(4 / 3, level) * (2 / 3 + 2 * Math.sqrt(1 / 36 + fraction * fraction / 12));
  }
  function evaluate(slug, input) {
    const checked = validateParams(slug, input);
    if (!checked.valid) return { ...checked, status: 'invalid_parameters', output: null };
    const p = checked.parameters;
    let quantities;
    if (slug === 'chaos-theory') {
      const orbitA = orbit(p.rate, p.seed), orbitB = orbit(p.rate, p.seed + p.delta);
      const populationA = atGeneration(orbitA, p.generation), populationB = atGeneration(orbitB, p.generation), lowerGeneration = Math.floor(p.generation);
      quantities = { output: Math.abs(populationA - populationB), separation: Math.abs(populationA - populationB), populationA, populationB, orbitA, orbitB, lowerGeneration, fraction: p.generation - lowerGeneration, nextA: orbitA[Math.min(lowerGeneration + 1, 36)], nextB: orbitB[Math.min(lowerGeneration + 1, 36)], startA:p.seed,startB:p.seed+p.delta,initialGap:p.delta,amplification:Math.abs(populationA-populationB)/p.delta };
    } else if (slug === 'fractal-geometry') {
      const completedDepth = Math.floor(p.depth), fraction = p.depth - completedDepth, perimeter = kochPerimeter(p.depth, p.length);
      quantities = { output: perimeter, perimeter, completedDepth, fraction, segmentCount: 3 * Math.pow(4, Math.ceil(p.depth)), completedSegmentCount: 3 * Math.pow(4, completedDepth), integerPerimeter: 3 * p.length * Math.pow(4 / 3, completedDepth) };
    } else if (slug === 'wave-interference') {
      const resultantAmplitude = zero(2 * p.amplitude * Math.abs(Math.cos(p.phase / 2))), probeX = Math.PI / 2, componentA = p.amplitude, componentB = zero(p.amplitude * Math.sin(probeX + p.phase));
      quantities = { output: resultantAmplitude, resultantAmplitude, probeX, componentA, componentB, probeValue: zero(componentA + componentB) };
    } else if (slug === 'probability') {
      const distribution = [1, 6, 15, 20, 15, 6, 1].map((choose, k) => choose * Math.pow(p.chance, k) * Math.pow(1 - p.chance, 6 - k));
      quantities = { output: 6 * p.chance, expected: 6 * p.chance, trials: 6, variance: 6 * p.chance * (1 - p.chance), distribution };
    } else if (slug === 'vector-rotation') {
      const radians = p.angle * Math.PI / 180, x = zero(p.radius * Math.cos(radians)), y = zero(p.radius * Math.sin(radians));
      quantities = { output: x, x, y, radians };
    } else {
      const aSquared = p.a * p.a, bSquared = p.b * p.b, cSquared = aSquared + bSquared, c = Math.hypot(p.a, p.b);
      quantities = { output: c, c, aSquared, bSquared, cSquared };
    }
    return { ...checked, ...quantities, status: 'valid', unit: definition(slug).unit };
  }
  function curveValue(slug, input, x) {
    if (!has(slug) || !finite(x)) return null;
    const checked = validateParams(slug, input), rule = definition(slug).controls.find(control => control.key === definition(slug).axis);
    if (!checked.valid || x < rule.min || x > rule.max) return null;
    return evaluate(slug, { ...checked.parameters, [rule.key]: x }).output;
  }
  function rail(slug, p) {
    const rule = definition(slug).controls.find(control => control.key === definition(slug).axis), position = 90 + (p[rule.key] - rule.min) / (rule.max - rule.min) * 590;
    return text(90, 359, `${rule.label} · ${fmt(p[rule.key])} ${rule.unit}`, C.white, 11) +
      `<g class="scene-handle" data-story-part="input" role="slider" tabindex="0" data-quantity="${rule.key}" data-drag-param="${rule.key}" data-drag-min="${rule.min}" data-drag-max="${rule.max}" data-drag-x0="90" data-drag-x1="680" data-drag-step="${rule.step}" aria-label="${esc(rule.label)}" aria-orientation="horizontal" aria-valuemin="${rule.min}" aria-valuemax="${rule.max}" aria-valuenow="${p[rule.key]}" aria-valuetext="${esc(fmt(p[rule.key]) + ' ' + rule.unit)}" style="cursor:ew-resize;touch-action:none"><rect x="70" y="365" width="630" height="44" fill="transparent"/>${line(90, 387, 680, 387, C.grid, 'stroke-width="3" stroke-linecap="round"')}${line(90, 387, position, 387, C.cyan, 'stroke-width="3" stroke-linecap="round"')}${circle(position, 387, 14, C.cyan, 'fill-opacity=".16" stroke="' + C.cyan + '"')}${circle(position, 387, 5, C.cyan)}</g>`;
  }
  function frame(id, title, body, caption, compact, shortCaption=caption) {
    return `<figure class="visualization-frame discovery-frame"${compact ? ' data-compact="true"' : ''}><svg class="visual-scene discovery-scene" viewBox="0 0 760 420" role="group" aria-labelledby="${id}-title ${id}-description" xmlns="http://www.w3.org/2000/svg"><title id="${id}-title">${esc(title)}</title><desc id="${id}-description">${esc(caption)}</desc><defs><linearGradient id="${id}-fill" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.cyan}" stop-opacity=".12"/><stop offset="1" stop-color="${C.violet}" stop-opacity=".55"/></linearGradient><linearGradient id="${id}-gold" x1="0" y1="1" x2="1" y2="0"><stop stop-color="${C.gold}" stop-opacity=".15"/><stop offset="1" stop-color="${C.mint}" stop-opacity=".5"/></linearGradient></defs><rect width="760" height="420" rx="20" fill="${C.bg}"/><g font-family="Inter,system-ui,sans-serif">${body}</g></svg><figcaption class="visual-caption">${esc(shortCaption)}</figcaption></figure>`;
  }
  function chaos(r, id, pin, options={}) {
    const p=r.parameters,px=g=>75+g/36*465,py=v=>225-v*135,gy=v=>322-v*50,playX=px(p.generation);
    let body=text(35,32,'NEARLY IDENTICAL STARTS. DIFFERENT PATHS.',C.mint,12);
    for(let i=0;i<=4;i++)body+=line(75,py(i/4),540,py(i/4))+text(62,py(i/4)+4,fmt(i/4),C.muted,10,'text-anchor="end"');
    for(let i=0;i<=36;i+=6)body+=line(px(i),90,px(i),322,C.grid,'stroke-opacity=".4"')+text(px(i),244,i,C.muted,10,'text-anchor="middle"');
    body+=text(75,72,'population fraction · same rule for both starts',C.muted,11)+text(540,260,'generation',C.muted,10,'text-anchor="end"');
    body+=`<defs><clipPath id="${id}-past"><rect x="74" y="78" width="${n(playX-74)}" height="248"/></clipPath></defs>`;
    for(const [values,color,quantity] of [[r.orbitA,C.cyan,'populationA'],[r.orbitB,C.violet,'populationB']]){
      const d=path(values.map((value,i)=>[px(i),py(value)]));
      body+=`<path data-role="future-orbit" d="${d}" fill="none" stroke="${color}" stroke-opacity=".14" stroke-width="1.5"/>`;
      body+=mark('intermediate',`<path data-role="logistic-orbit" data-quantity="${quantity} rate" d="${d}" fill="none" stroke="${color}" stroke-width="2.5" clip-path="url(#${id}-past)"/>`);
    }
    if(pin)body+=`<path data-role="baseline-orbit" d="${path(pin.orbitA.map((value,i)=>[px(i),py(value)]))}" fill="none" stroke="${C.orange}" stroke-dasharray="5 4" stroke-opacity=".55"/>`;
    const gaps=[];
    r.orbitA.forEach((value,i)=>{
      const difference=value-r.orbitB[i];
      if(i){
        const previous=r.orbitA[i-1]-r.orbitB[i-1];
        // The displayed orbits are linear between iterates. Their absolute
        // difference has a corner at a crossing, not a straight positive chord.
        if(previous*difference<0)gaps.push([px(i-1+previous/(previous-difference)),gy(0)]);
      }
      gaps.push([px(i),gy(Math.abs(difference))]);
    });
    body+=text(75,263,'ABSOLUTE GAP |A − B| · fixed 0–1 scale',C.gold,10)+line(75,322,540,322,C.grid);
    body+=`<path data-role="future-gap" d="${path(gaps)}" fill="none" stroke="${C.gold}" stroke-opacity=".14"/>`;
    body+=mark('output',`<path data-role="gap-history" data-quantity="output" d="${path(gaps)}" fill="none" stroke="${C.gold}" stroke-width="2" clip-path="url(#${id}-past)"/>`+circle(playX,gy(r.output),4,C.gold,'data-role="gap-history-cursor" data-quantity="output" data-value="'+r.output+'"'));
    body+=mark('reference input',circle(px(0),py(p.seed),3,C.cyan,'data-role="initial-population-a" data-quantity="seed startA"')+circle(px(0),py(p.seed+p.delta),3,C.violet,'data-role="initial-population-b" data-quantity="seed delta startB"'));
    body+=mark('input',line(playX,86,playX,325,C.cyan,'data-quantity="generation" stroke-dasharray="3 5"'));
    body+=mark('intermediate',circle(playX,py(r.populationA),5,C.cyan,'data-quantity="populationA" stroke="'+C.bg+'" stroke-width="2"')+circle(playX,py(r.populationB),5,C.violet,'data-quantity="populationB" stroke="'+C.bg+'" stroke-width="2"'));
    body+=mark('output',line(playX+8,py(r.populationA),playX+8,py(r.populationB),C.gold,'stroke-width="3" data-role="orbit-separation" data-quantity="output" data-value="'+r.output+'"'));
    const step=options.chaosTrace&&Trace?.snapshot(p,r);
    if(step?.valid){
      for(const row of step.rows){
        const color=row.id==='A'?C.cyan:C.violet;
        body+=mark('input intermediate output',line(px(step.n),py(row.input),px(step.nextGeneration),py(row.output),color,`stroke-width="4" data-role="chaos-step-${row.id.toLowerCase()}" data-quantity="${row.id === 'A' ? 'populationA stepInputA stepNextA' : 'populationB stepInputB stepNextB'} rate generation" data-from="${step.n}" data-to="${step.nextGeneration}"`)+circle(px(step.n),py(row.input),3,color)+circle(px(step.nextGeneration),py(row.output),6,C.bg,`stroke="${color}" stroke-width="2"`));
      }
      body+=circle(px(step.nextGeneration),gy(step.gapAfter),5,'none','stroke="'+C.gold+'" stroke-width="2" data-role="chaos-step-gap" data-quantity="stepGapAfter"');
    }
    body+=text(580,93,'CURRENT A',C.cyan,10)+text(580,119,fmt(r.populationA),C.cyan,22,'data-quantity="populationA" data-story-part="intermediate"')+text(580,151,'CURRENT B',C.violet,10)+text(580,177,fmt(r.populationB),C.violet,22,'data-quantity="populationB" data-story-part="intermediate"');
    body+=text(580,211,'GAP NOW',C.gold,10)+text(580,241,fmt(r.output),C.gold,25,'data-quantity="output" data-story-part="output"')+text(580,278,'GAP / INITIAL GAP',C.muted,10)+text(580,305,fmt(r.amplification)+'×',C.gold,22,'data-quantity="amplification" data-story-part="output"');
    const traceNote=step?.valid?' The thicker segments connect the whole-generation inputs and results in the open calculation. Hollow endpoints mark those results.':'';
    return {body,shortCaption:'Same rule, nearly identical starts. The cursor compares both paths; the lower gold plot measures their gap. The gap can grow or shrink.'+traceNote,caption:'Cyan and violet apply the same logistic rule to nearly identical starts. The shared cursor compares them at one generation; the lower gold trace records their absolute separation on a fixed 0–1 scale. The amplification is current gap divided by initial gap, and can grow or shrink. Fractional generations interpolate adjacent iterates. This finite sensitivity experiment is not proof that every growth parameter is chaotic.'+traceNote};
  }
  function sierpinski() {
    const pieces = [];
    function split(a, b, c, depth) {
      if (!depth) { pieces.push(`<path d="${path([a, b, c])}Z"/>`); return; }
      const ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2], ca = [(c[0] + a[0]) / 2, (c[1] + a[1]) / 2];
      split(a, ab, ca, depth - 1); split(ab, b, bc, depth - 1); split(ca, bc, c, depth - 1);
    }
    split([615, 195], [550, 305], [680, 305], 4);
    return pieces.join('');
  }
  const SIERPINSKI = sierpinski();
  function fractal(r,id,pin,options={}) {
    const p=r.parameters,points=kochPoints(p.depth),scale=230,tx=140,ty=143,zoom=Lens?Lens.normalize(options.lens).zoom:1;
    let body=text(35,32,'KEEP THE RULE. LOOK CLOSER.',C.mint,12)+text(35,56,'Koch snowflake · finite refinement',C.white,13);
    const geometry=`<path data-story-part="reference" d="${path([[tx,ty],[tx+scale,ty],[tx+scale/2,ty+scale*Math.sqrt(3)/2]])}Z" fill="none" stroke="${C.muted}" stroke-dasharray="4 5" stroke-opacity=".5" vector-effect="non-scaling-stroke"/>`+
      `<path data-story-part="input intermediate output" data-role="koch-contour" data-quantity="depth output" data-value="${r.output}" d="${path(points.map(([x,y])=>[tx+x*scale,ty+y*scale]))}Z" fill="url(#${id}-fill)" stroke="${C.gold}" stroke-width="1.5" stroke-linejoin="round" vector-effect="non-scaling-stroke"/>`;
    const geometryId=id+'-koch-geometry',reused=`<use data-quantity="depth output" href="#${geometryId}"/>`;
    body+=Lens?`<defs><g id="${geometryId}">${geometry}</g></defs>`+Lens.wrap(reused,{id,zoom}):geometry;
    body+=text(495,84,'WHOLE PERIMETER',C.gold,10)+text(495,113,`${fmt(r.output)} m`,C.gold,25,'data-quantity="output" data-story-part="output"');
    body+=text(495,141,`side ${fmt(p.length)} m`,C.cyan,12,'data-quantity="length" data-story-part="input"')+text(625,141,`level ${fmt(p.depth)}`,C.cyan,12,'data-quantity="depth" data-story-part="input"')+text(495,163,`completed levels: ${r.completedDepth}`,C.violet,11,'data-quantity="completedDepth" data-story-part="intermediate"')+text(495,190,'Camera view · whole perimeter unchanged',C.muted,10);
    if(Lens)body+=`<g data-role="fractal-detail-overview" display="${zoom>1?'inline':'none'}">${Lens.minimap(reused,{id,zoom})}</g>`;
    body+=`<g data-role="fractal-reference-inset" display="${zoom>1&&Lens?'none':'inline'}">`+`<g data-role="sierpinski-inset" fill="${C.mint}" fill-opacity=".8">${SIERPINSKI}</g>`+text(615,324,'Separate pattern: Sierpiński · level 4',C.muted,10,'text-anchor="middle"')+'</g>';
    const viewNote=' At magnification above 1, the main window follows a nested first-third edge and the overview rectangle locates that window. Zoom changes the camera, not the total perimeter; each complete zoom step follows an edge one third as long. At 1×, the separate Sierpiński inset shows a different recursive rule at level 4.';
    const supplement=Lens?.comparison?`<figure class="fractal-comparison" data-role="fractal-comparison"${options.lens?.compare===true?'':' hidden'}><div class="fractal-comparison-scroll" tabindex="0" role="region" aria-label="Compare three repeating edges; scroll horizontally on a small screen">${Lens.comparison(reused,{id,depth:p.depth})}</div><figcaption>Three source edges, shown at the same width. Length ratios refer to the original edge. Each third repeats the rule with fewer finite levels remaining. On small screens, swipe across the three views.</figcaption></figure>`:'';
    return {body,supplement,shortCaption:'Refine the finite boundary, then follow its repeated thirds. Zoomed views include a gold locator window; zoom leaves the whole perimeter unchanged.',caption:'At each completed Koch level, replace every segment with four segments one third as long: Pₙ=3s(4/3)ⁿ. Between levels the new triangular bumps rise continuously; the reported perimeter is the actual length of that intermediate outline, not a fractional power shortcut. The outline is fitted to view.'+viewNote+' These are finite approximations; no infinite fractal is drawn.'};
  }
  function waves(r, id, pin) {
    const p = r.parameters, px = x => 70 + x / (TAU * 2) * 620, py = y => 190 - 28 * y;
    const samples = Array.from({ length: 161 }, (_, i) => i * TAU * 2 / 160);
    let body = text(35, 32, 'TWO WAVES. ONE SHARED SPACE.', C.mint, 12) + text(725, 57, 'cyan + violet = gold', C.muted, 11, 'text-anchor="end"');
    for (let tick = -4; tick <= 4; tick += 2) body += line(70, py(tick), 690, py(tick), C.grid) + text(57, py(tick) + 4, tick, C.muted, 10, 'text-anchor="end"');
    for (let i = 0; i <= 4; i++) body += line(px(i * Math.PI), 70, px(i * Math.PI), 310, C.grid, 'stroke-opacity=".5"') + text(px(i * Math.PI), 329, i === 0 ? '0' : `${i}π`, C.muted, 10, 'text-anchor="middle"');
    const wave = (fn, color, role, name, width) => `<path data-story-part="${role}" data-role="${name}"${name === 'baseline-wave' ? '' : ` data-quantity="${name === 'component-wave-a' ? 'function:waveA amplitude' : name === 'component-wave-b' ? 'function:waveB phase amplitude' : 'probeValue resultant'}"`} d="${path(samples.map(x => [px(x), py(fn(x))]))}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round"/>`;
    if (pin) body += wave(x => pin.parameters.amplitude * (Math.sin(x) + Math.sin(x + pin.parameters.phase)), C.orange, 'reference', 'baseline-wave', 1.5).replace('stroke-width="1.5"', 'stroke-width="1.5" stroke-dasharray="5 4"');
    body += wave(x => p.amplitude * Math.sin(x), C.cyan, 'reference intermediate', 'component-wave-a', 2) + wave(x => p.amplitude * Math.sin(x + p.phase), C.violet, 'input intermediate', 'component-wave-b', 2) + wave(x => zero(p.amplitude * (Math.sin(x) + Math.sin(x + p.phase))), C.gold, 'output', 'resultant-wave', 3);
    const probe = px(r.probeX);
    body += line(probe, 70, probe, 312, C.white, 'stroke-dasharray="3 5" stroke-opacity=".45"') + mark('intermediate', circle(probe, py(r.componentA), 4, C.cyan, 'data-quantity="componentA"') + circle(probe, py(r.componentB), 4, C.violet, 'data-quantity="componentB"') + circle(probe, py(r.probeValue), 6, C.gold, 'data-role="wave-probe" data-quantity="probeValue" data-value="' + r.probeValue + '"'));
    body += text(82, 91, `probe sum ${fmt(r.componentA)} + ${fmt(r.componentB)} = ${fmt(r.probeValue)}`, C.white, 11, 'data-story-part="intermediate"') + text(725, 32, `envelope ${fmt(r.output)} units`, C.gold, 12, 'text-anchor="end" data-quantity="output" data-story-part="output"');
    return { body, caption: 'Two equal sinusoids A sin(x) and A sin(x+φ) add point by point. The fixed probe is at x=π/2; its local sum is distinct from the resultant envelope amplitude 2A|cos(φ/2)|. At phase π the waves cancel; at 0 or 2π they reinforce. Wave profiles move only when a variable changes; no hidden clock drives them.' };
  }
  function probability(r, id, pin) {
    const p = r.parameters, px = k => 100 + k * 84, py = probability => 285 - probability * 190;
    let body = text(35, 32, 'ONE CHANCE. A WHOLE DISTRIBUTION.', C.mint, 12) + text(725, 32, '6 independent trials', C.muted, 11, 'text-anchor="end" data-story-part="reference"');
    for (const tick of [0, .25, .5, .75, 1]) body += line(70, py(tick), 650, py(tick)) + text(58, py(tick) + 4, `${tick * 100}%`, C.muted, 10, 'text-anchor="end"');
    r.distribution.forEach((prob, k) => {
      body += `<rect data-story-part="intermediate" data-role="probability-bar" data-quantity="distribution chance" data-successes="${k}" data-probability="${prob}" x="${px(k) - 24}" y="${n(py(prob))}" width="48" height="${n(prob * 190)}" rx="3" fill="url(#${id}-fill)" stroke="${C.violet}" stroke-opacity=".8"/>`;
      body += text(px(k), 308, k, C.white, 12, 'text-anchor="middle" data-story-part="reference"') + text(px(k), py(prob) - 10, `${fmt(prob * 100)}%`, C.muted, 10, 'text-anchor="middle"');
    });
    if (pin) body += line(px(pin.output), 80, px(pin.output), 287, C.orange, 'stroke-dasharray="5 4" data-role="baseline-expectation"');
    body += mark('output', line(px(r.output), 77, px(r.output), 288, C.gold, 'stroke-width="2" stroke-dasharray="4 5" data-role="expectation-marker" data-quantity="output" data-value="' + r.output + '"') + circle(px(r.output), 77, 5, C.gold));
    body += text(100, 329, 'number of successes k', C.muted, 11) + text(690, 329, `mean = ${fmt(r.output)}`, C.gold, 15, 'text-anchor="end" data-story-part="output"') + text(100, 65, `p = ${fmt(p.chance)} per trial`, C.cyan, 12, 'data-story-part="input"');
    return { body, caption: 'Each bar is the exact binomial probability of k successes in six independent trials, P(K=k)=C(6,k)pᵏ(1−p)⁶⁻ᵏ. All bars share a fixed 0–100% vertical scale. The gold marker is the expectation 6p, a long-run average across repeated groups, and may sit between integer outcomes. These are computed probabilities, not random sample counts.' };
  }
  function angleArc(cx, cy, radius, angle) {
    const midpoint = Math.min(angle, 180) * Math.PI / 180, end = angle * Math.PI / 180;
    const a = [cx + radius * Math.cos(midpoint), cy - radius * Math.sin(midpoint)], b = [cx + radius * Math.cos(end), cy - radius * Math.sin(end)];
    return `M${cx + radius} ${cy}A${radius} ${radius} 0 0 0 ${n(a[0])} ${n(a[1])}A${radius} ${radius} 0 0 0 ${n(b[0])} ${n(b[1])}`;
  }
  function vector(r, id, pin) {
    const p = r.parameters, cx = 265, cy = 198, scale = 43, x = cx + r.x * scale, y = cy - r.y * scale;
    let body = text(35, 32, 'TURN THE VECTOR. FOLLOW ITS SHADOW.', C.mint, 12);
    body += mark('reference', circle(cx, cy, p.radius * scale, 'none', `stroke="${C.muted}" stroke-dasharray="4 5" data-role="rotation-circle" data-quantity="radius" data-radius="${p.radius}"`));
    for (let i = -3; i <= 3; i++) {
      body += line(cx + i * scale, 66, cx + i * scale, 330, C.grid, 'stroke-opacity=".4"') + line(133, cy - i * scale, 397, cy - i * scale, C.grid, 'stroke-opacity=".4"');
      body += text(cx + i * scale, 346, i, C.muted, 9, 'text-anchor="middle"') + text(121, cy - i * scale + 4, i, C.muted, 9, 'text-anchor="end"');
    }
    body += line(125, cy, 405, cy, C.muted) + line(cx, 58, cx, 337, C.muted) + text(414, cy + 4, 'x', C.muted, 12) + text(cx + 8, 61, 'y', C.muted, 12);
    if (pin) body += line(cx, cy, cx + pin.x * scale, cy - pin.y * scale, C.orange, 'stroke-width="2" stroke-dasharray="5 4" data-role="baseline-vector"');
    body += mark('input intermediate', `<path data-role="rotation-angle" data-quantity="angle" d="${angleArc(cx, cy, 30, p.angle)}" fill="none" stroke="${C.cyan}" stroke-width="2"/>`) + mark('input', line(cx, cy, x, y, C.cyan, 'stroke-width="3" data-role="rotating-vector" data-quantity="radius angle"'));
    body += mark('intermediate output', line(cx, cy, x, cy, C.gold, 'stroke-width="5" data-role="horizontal-projection" data-quantity="x output" data-value="' + r.x + '"') + line(x, cy, x, y, C.gold, 'stroke-dasharray="3 5" stroke-opacity=".5"'));
    body += mark('intermediate output', line(x, cy, x, y, C.violet, 'stroke-width="3" data-role="vertical-projection" data-quantity="y" data-value="' + r.y + '"')) + mark('output', circle(x, y, 6, C.gold, 'data-role="vector-endpoint" data-quantity="x y" stroke="' + C.bg + '" stroke-width="2"')) + mark('reference', circle(cx, cy, 3, C.mint));
    body += text(470, 97, `θ = ${fmt(p.angle)}°`, C.cyan, 22, 'data-story-part="input"') + text(470, 133, `length r = ${fmt(p.radius)} m`, C.white, 14, 'data-story-part="reference"') + text(470, 189, 'HORIZONTAL · r cos θ', C.gold, 10) + text(470, 219, `${fmt(r.x)} m`, C.gold, 26, 'data-story-part="output"') + text(470, 265, 'VERTICAL · r sin θ', C.violet, 10) + text(470, 295, `${fmt(r.y)} m`, C.violet, 26, 'data-story-part="intermediate"');
    return { body, caption: 'A vector of length r turns through angle θ. Its gold horizontal projection is x=r cos θ; the violet vertical projection is y=r sin θ. Both axes use the same metre scale, so x²+y²=r² and the endpoint stays on the circle of radius r. Negative projections point left or down; rotation preserves length.' };
  }
  function pythagorean(r, id, pin) {
    const p = r.parameters, s = 15, ox = 210, oy = 250, a = p.a * s, b = p.b * s;
    const A = [ox + a, oy], B = [ox, oy - b], C0 = [ox, oy], farA = [ox + a + b, oy - a], farB = [ox + b, oy - b - a];
    let body = text(35, 32, 'SQUARE THE LEGS. ADD THEIR AREAS.', C.mint, 12);
    body += `<rect data-story-part="input intermediate" data-role="leg-square-a" data-quantity="a aSquared" data-area="${r.aSquared}" x="${ox}" y="${oy}" width="${n(a)}" height="${n(a)}" fill="url(#${id}-fill)" stroke="${C.cyan}"/>`;
    body += `<rect data-story-part="reference intermediate" data-role="leg-square-b" data-quantity="b bSquared" data-area="${r.bSquared}" x="${n(ox - b)}" y="${n(oy - b)}" width="${n(b)}" height="${n(b)}" fill="${C.violet}" fill-opacity=".22" stroke="${C.violet}"/>`;
    body += `<path data-story-part="output" data-role="hypotenuse-square" data-quantity="cSquared" data-area="${r.cSquared}" d="${path([A, farA, farB, B])}Z" fill="url(#${id}-gold)" stroke="${C.gold}" stroke-width="1.5"/>`;
    body += `<path d="${path([C0, A, B])}Z" fill="${C.bg}" stroke="${C.white}" stroke-width="1.5" data-role="right-triangle"/>`;
    body += `<path d="${path([C0, A, [ox + a, oy - b], B])}Z" fill="none" stroke="${C.white}" stroke-opacity=".35" stroke-dasharray="3 4" data-role="garden-rectangle"/>`;
    body += mark('input', line(ox, oy, A[0], A[1], C.cyan, 'stroke-width="3" data-role="garden-width" data-quantity="a"') + line(ox, oy - 4, ox, oy + 4, C.cyan) + line(A[0], oy - 4, A[0], oy + 4, C.cyan));
    body += mark('reference', line(ox, oy, B[0], B[1], C.violet, 'stroke-width="3" data-role="garden-length" data-quantity="b"'));
    body += mark('output', line(A[0], A[1], B[0], B[1], C.gold, 'stroke-width="3" data-role="garden-diagonal" data-quantity="output" data-value="' + r.output + '"'));
    const corner = Math.min(9, a / 3, b / 3);
    body += `<path data-story-part="reference" d="M${ox} ${oy - corner}h${corner}v${corner}" fill="none" stroke="${C.white}"/>`;
    body += text(ox + a / 2, oy + a / 2 + 4, 'a²', C.cyan, 13, 'text-anchor="middle" data-story-part="intermediate"') + text(ox - b / 2, oy - b / 2 + 4, 'b²', C.violet, 13, 'text-anchor="middle" data-story-part="intermediate"') + text((A[0] + B[0] + b) / 2, (A[1] + B[1] - a) / 2 + 4, 'c²', C.gold, 15, 'text-anchor="middle" data-story-part="output"');
    body += text(470, 99, `a = ${fmt(p.a)} m`, C.cyan, 18, 'data-story-part="input"') + text(470, 130, `b = ${fmt(p.b)} m`, C.violet, 18, 'data-story-part="reference"') + text(470, 183, `${fmt(r.aSquared)} + ${fmt(r.bSquared)}`, C.violet, 23, 'data-story-part="intermediate"') + text(470, 211, `= ${fmt(r.cSquared)} m²`, C.gold, 23, 'data-story-part="output"') + text(470, 269, 'HYPOTENUSE c', C.gold, 10) + text(470, 301, `${fmt(r.output)} m`, C.gold, 28, 'data-story-part="output"');
    body += text(470, 329, 'Equal area scale · right angle 90°', C.muted, 10);
    return { body, caption: 'For this right triangle, the square on side a has area a² and the square on b has area b². Their sum equals the gold square on the hypotenuse: a²+b²=c². The drawn square areas share one scale, and the triangle uses equal horizontal and vertical length scales. Take the square root of the summed area to get the length c. This relation requires a right angle.' };
  }
  const RENDERERS = { 'chaos-theory': chaos, 'fractal-geometry': fractal, 'wave-interference': waves, probability, 'vector-rotation': vector, 'pythagorean-theorem': pythagorean };
  function render(slug, input, options = {}) {
    const id = 'discovery-' + String(options.id || 'stage').replace(/[^A-Za-z0-9_-]/g, '-'), result = evaluate(slug, input);
    if (!result.valid) return frame(id, 'The input is outside this model', text(380, 174, '∅', C.orange, 44, 'text-anchor="middle"') + text(380, 230, 'Check the variable values', C.white, 18, 'text-anchor="middle"'), result.errors.map(error => error.message).join(' '), options.compact);
    const candidate = options.baseline ? evaluate(slug, options.baseline) : null, pin = candidate?.valid ? candidate : null;
    const scene = RENDERERS[slug](result, id, pin, options);
    const baselineCaption = pin ? ` Pinned comparison: ${definition(slug).primaryLabel.toLowerCase()} ${fmt(pin.output)} ${pin.unit}.` : '';
    return frame(id, definition(slug).title, scene.body + rail(slug, result.parameters), scene.caption + baselineCaption, options.compact, (scene.shortCaption||scene.caption)+baselineCaption)+(scene.supplement||'');
  }
  return Object.freeze({ has, defaults, controls, specs, validateParams, evaluate, curveValue, render, orbit, kochPoints, kochPerimeter });
});
