/* Authored discovery stories and semantic links. No DOM, clocks or evaluated text. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDiscoveryStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }

  const stories = freeze([
    {
      id: 'story:nearby-forecasts', slug: 'chaos-theory', scene: 'logistic-orbits', unit: 'of capacity',
      title: 'Two forecasts, almost the same start', eyebrow: 'A population thought experiment · chaos theory',
      summary: 'Repeat one simple rule from two nearly equal starting states. Watch a tiny gap change through time.',
      context: 'You are testing a toy population forecast. Population is a fraction of a fixed capacity, and each whole generation follows xₙ₊₁ = 3.8xₙ(1 − xₙ). Begin with projections at 0.35 and 0.3501, then try the starting-fraction and tiny-difference controls. These are chosen numbers for exploring sensitivity, not measured populations or a reliable ecological forecast.',
      question: 'After 12 generations, how far apart are these two projected population fractions?',
      goalKeys:['generation','rate'],conclusionTemplate:'After {{generation}} generations, A is {{populationA}} and B is {{populationB}}. The gap is {{output}} of capacity, {{amplification}} times the initial gap {{initialGap}}.',
      variables: [{ key: 'generation', symbol: 'n', label: 'Generation coordinate (fractions interpolate)', unit: 'generations', min: 0, max: 36, step: 0.01 },{key:'seed',symbol:'A₀',label:'First starting fraction',unit:'of capacity',min:.01,max:.99,step:.001,precision:7},{key:'delta',symbol:'δ',label:'Tiny starting difference',unit:'of capacity',min:.000001,max:.01,step:.000001,precision:7}],
      parameters: { rate: 3.8, seed: 0.35, delta: 0.0001, generation: 12 },
      timeline: { key: 'generation', from: 0, to: 12, durationMs: 12000 },
      steps: [
        { id: 'start', title: 'Keep both starting states', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The two nearly equal starting states', focusDescription: 'Both starting markers stay fixed while generations advance. Their separation is the chosen tiny starting difference.',
          body: 'At generation coordinate {{generation}}, compare both paths with starting fractions {{seed}} and {{startB}}. Their initial gap is {{initialGap}}. Change the tiny difference and replay both paths. Whole-number markers are actual applications of the rule.',
          formula: 'A₀ = {{seed}}; B₀ = {{seed}} + {{delta}} → {{startB}}' },
        { id: 'repeat', title: 'Choose a whole-generation update', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'The two whole-step inputs', focusDescription: 'The calculation uses actual whole-generation endpoints. At an integer cursor it shows the update just completed; between markers it shows the interval being interpolated.',
          body: 'At cursor {{generation}}, follow the whole update {{iteration}} → {{nextIteration}}. Its inputs are A = {{stepInputA}} and B = {{stepInputB}}. On a whole marker, this is the update just completed. Between markers, the cursor blends the same two endpoints.',
          formula: 'n = {{iteration}}; Aₙ = {{stepInputA}}; Bₙ = {{stepInputB}}' },
        { id: 'compare', title: 'Substitute both inputs into the rule', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'One actual recurrence for each path', focusDescription: 'Each whole-step input is multiplied by the same rate and by one minus that input. Blended cursor values are not fed back into the recurrence.',
          body: 'For cursor {{generation}}, the displayed update starts with {{stepInputA}} and {{stepInputB}}. Subtract each input from 1, then multiply by its own input and the shared rate {{rate}}. These are actual whole-generation calculations, even while the cursor moves between markers.',
          formula: 'Aₙ₊₁: {{rate}} × {{stepInputA}} × (1 − {{stepInputA}}) → {{stepNextA}}; Bₙ₊₁: {{rate}} × {{stepInputB}} × (1 − {{stepInputB}}) → {{stepNextB}}' },
        { id: 'solve', title: 'Measure the separation', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The gap between the two current states', focusDescription: 'The gold separation mark spans the two current population fractions. It measures absolute difference, not either population itself.',
          body: 'At cursor {{generation}}, the current gap is {{output}} of capacity. The whole update ends at generation {{nextIteration}}, with gap {{stepGapAfter}}. Between markers, the cursor linearly blends endpoint populations; the gap can grow or shrink. Return to 12 whole generations for the question.',
          formula: 'Cursor gap: |{{populationA}} − {{populationB}}| → {{output}}; whole-step end: |{{stepNextA}} − {{stepNextB}}| → {{stepGapAfter}}' }
      ],
      calculation: [
        { role: 'input', label: 'Read the whole-step inputs', template: 'n {{iteration}} · A {{stepInputA}} · B {{stepInputB}}; cursor {{generation}}', description: 'Use actual whole-generation states from the chosen starting pair. At an integer marker this is the update just completed; fractional cursor motion blends its endpoints.' },
        { role: 'intermediate', label: 'Apply the same rule to each', template: 'A: {{rate}} × {{stepInputA}} × (1 − {{stepInputA}}); B: {{rate}} × {{stepInputB}} × (1 − {{stepInputB}})', description: 'Substitute each whole-step input into r × input × (1 − input). The displayed interpolation is never used as a new recurrence input.' },
        { role: 'output', label: 'Read the next whole marker', template: 'At {{nextIteration}}: A {{stepNextA}} · B {{stepNextB}}; gap {{stepGapAfter}}', description: 'These are the actual next iterates and their absolute difference. The moving cursor can still lie between the whole-generation endpoints.' }
      ],
      conclusion: 'At generation 12, the two fractions are about 0.439298 and 0.412856. Their separation is about 0.0264416 of capacity, or 2.64 percentage points, from an initial 0.01 percentage-point gap.',
      assumptions: ['This is a finite deterministic logistic-map demonstration with rate 3.8, not a fitted biological forecast.', 'Only integer generations apply the recurrence. Fractional coordinates linearly interpolate adjacent iterates for smooth display.', 'The displayed separation is the absolute difference between two chosen trajectories. A finite visual example alone is not a proof of chaos.', 'Sensitivity does not mean randomness, and the gap is not required to grow monotonically.'],
      sourceRefs: ['source:mit:logistic-dynamics']
    },
    {
      id: 'story:laser-cut-snowflake', slug: 'fractal-geometry', scene: 'koch-snowflake', unit: 'm',
      title: 'A longer edge inside a small outline', eyebrow: 'A laser-cut edge plan · fractal geometry',
      summary: 'Replace every straight edge with four smaller edges. A snowflake grows detail while its boundary gets longer.',
      context: 'You are sketching an ideal laser-cut decoration that starts as an equilateral triangle with 1 m sides. For each Koch refinement, replace the middle third of every segment with two sides of an outward equilateral bump. Track the planned edge length before accounting for tool width or material limits.',
      question: 'How long is the ideal boundary after three complete Koch refinements?',
      variables: [{ key: 'depth', symbol: 'n', label: 'Refinement coordinate (fractions morph)', unit: 'refinements', min: 0, max: 5, step: 0.01 }],
      parameters: { depth: 3, length: 1 },
      timeline: { key: 'depth', from: 0, to: 3, durationMs: 12000 },
      steps: [
        { id: 'triangle', title: 'Keep the original triangle', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The original three-sided boundary', focusDescription: 'The reference triangle has three one-metre sides. Its initial perimeter is three metres.',
          body: 'The refinement coordinate is {{depth}}. Compare the changing boundary with the fixed 1 m-sided triangle. At zero refinements, the three original sides give a perimeter of 3 m.',
          formula: 'P₀ = 3 × {{length}} = 3 m' },
        { id: 'rule', title: 'Lift a bump from every middle third', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'The refinement coordinate raises the new bumps', focusDescription: 'Each whole refinement replaces every segment with four segments one third as long. Fractional inputs raise the new bumps smoothly.',
          body: 'At coordinate {{depth}}, watch each middle third rise into a triangular bump. One complete refinement turns one segment into four segments, each one third as long. Fractional values show the geometric transition between complete levels.',
          formula: 'One complete refinement: edge length × 4/3' },
        { id: 'count', title: 'Count the completed level', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'The repeated segments of the boundary', focusDescription: 'Completed levels contain exactly three times four to the level segments. The current morph can lie between these discrete constructions.',
          body: 'At coordinate {{depth}}, the last completed level is {{completedDepth}} and it has {{completedSegmentCount}} equal segments. For whole levels n, the perimeter follows 3 × (4/3)ⁿ m. During a morph, the readout measures the actual raised-bump path.',
          formula: 'Completed level {{completedDepth}}: {{completedSegmentCount}} segments; Pₙ = 3L(4/3)ⁿ for integer n' },
        { id: 'solve', title: 'Read the length around the edge', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The full current boundary length', focusDescription: 'The gold boundary is the path whose length is measured. It is perimeter rather than the area enclosed.',
          body: 'At refinement coordinate {{depth}}, the boundary measures {{output}} m. Return to exactly three complete refinements for the plan. The small triangle-removal inset is a separate Sierpiński construction, another way to repeat a geometric rule.',
          formula: 'Current perimeter = {{output}} m; at n = 3: P₃ = 64/9 m' }
      ],
      calculation: [
        { role: 'input', label: 'Choose the refinement', template: 'n = {{depth}}; whole values complete the Koch rule' },
        { role: 'intermediate', label: 'Use the whole-level rule', template: '3 × (4/3)^{{completedDepth}} → {{integerPerimeter}} m', description: 'This formula measures the last completed whole level. During a transition, the gold readout measures the current raised-bump path.' },
        { role: 'output', label: 'Trace the full boundary', template: 'Current perimeter = {{output}} m' }
      ],
      conclusion: 'Three complete refinements give 3 × (4/3)³ = 64/9 m, about 7.11111 m of ideal boundary, compared with the original 3 m.',
      assumptions: ['The initial equilateral triangle has side length 1 m. Each completed refinement uses the ideal Koch replacement rule.', 'Fractional refinement coordinates raise triangular bumps between neighboring integer levels. They are geometric morphs, not fractional iterations of a fractal definition.', 'The current perimeter measures that morph path; the integer formula 3L(4/3)ⁿ is used only at completed levels.', 'The rendering stops at a finite depth. A real laser cut has nonzero kerf, finite resolution and material limits.', 'The Sierpiński inset removes middle triangles. It is a separate self-similar construction, not a step in the Koch boundary.'],
      sourceRefs: ['source:openstax:koch-snowflake', 'source:cornell:fractal-constructions']
    },
    {
      id: 'story:two-tones', slug: 'wave-interference', scene: 'two-waves', unit: 'amplitude units',
      title: 'Two tones meet at one place', eyebrow: 'A sound thought experiment · wave interference',
      summary: 'Slide one wave against the other. Follow their point-by-point sum as reinforcement becomes cancellation.',
      context: 'Imagine two ideal pure tones of the same frequency reaching one observation point, each with normalized amplitude 1. Keep their amplitudes fixed and change their phase difference. The scene plots the two ideal sine waves and their sum; it does not simulate the whole room.',
      question: 'What resultant amplitude remains when the two tones are half a cycle out of phase?',
      variables: [{ key: 'phase', symbol: 'φ', label: 'Phase difference', unit: 'rad', min: 0, max: 2 * Math.PI, step: 0.01 }],
      parameters: { phase: Math.PI, amplitude: 1 },
      timeline: { key: 'phase', from: 0, to: Math.PI, durationMs: 10000 },
      steps: [
        { id: 'reference', title: 'Hold frequency and amplitude fixed', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The first wave keeps its timing and amplitude', focusDescription: 'The reference wave stays fixed. Both waves have the same frequency and equal unit amplitude.',
          body: 'The phase difference is {{phase}} rad. Keep the first wave fixed and compare it with the shifted second wave. Both amplitudes stay {{amplitude}}, so their relative timing alone changes the sum.',
          formula: 'y₁(θ) = A sin θ; y₂(θ) = A sin(θ + φ); A = {{amplitude}}' },
        { id: 'shift', title: 'Shift the second wave', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Phase moves the second wave sideways', focusDescription: 'The cyan phase control shifts the second wave relative to the unchanged reference; it does not stretch the wave vertically.',
          body: 'Drag the phase difference, now {{phase}} rad. Matching crests reinforce each other. As the second wave moves toward half a cycle of offset, its crests approach the first wave’s troughs.',
          formula: 'Phase difference φ = {{phase}} rad; half a cycle = π rad' },
        { id: 'add', title: 'Add heights at the same position', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'The two heights add at the fixed probe', focusDescription: 'The fixed probe compares both wave heights at θ = π/2 and shows their signed sum. That one height is distinct from amplitude.',
          body: 'At phase {{phase}} rad, the fixed probe reads heights {{componentA}} and {{componentB}}. Add them to get {{probeValue}} at that position. Repeat the same addition across the graph to build the resultant wave.',
          formula: 'At θ = π/2: {{componentA}} + ({{componentB}}) = {{probeValue}}' },
        { id: 'solve', title: 'Read the resultant amplitude', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The amplitude of the summed wave', focusDescription: 'The gold resultant curve is the pointwise sum. Its amplitude measures the maximum size of that ideal sinusoid, not just its height at the probe.',
          body: 'At phase {{phase}} rad, the resultant amplitude is {{output}}. Return the offset to π rad: equal opposite waves cancel in this ideal model. A single probe height and the whole wave’s amplitude answer different questions.',
          formula: 'Resultant amplitude = 2 × {{amplitude}} × |cos({{phase}} / 2)| = {{output}}' }
      ],
      calculation: [
        { role: 'input', label: 'Move one wave in phase', template: 'φ = {{phase}} rad; A = {{amplitude}} stays fixed' },
        { role: 'intermediate', label: 'Combine amplitude and phase', template: '2 × {{amplitude}} × |cos({{phase}}/2)|', description: 'The phase difference changes how the two waves combine. This formula gives the full resulting amplitude; the fixed probe shows a separate local height.' },
        { role: 'output', label: 'Follow the whole summed wave', template: 'Resultant amplitude = {{output}}' }
      ],
      conclusion: 'At a phase difference of π rad, the ideal waves cancel and the resultant amplitude is 0. At zero phase difference they reinforce to amplitude 2.',
      assumptions: ['Both ideal sinusoidal waves have the same frequency and equal normalized amplitude 1 at one observation point.', 'Superposition adds the signed instantaneous heights. Amplitude is a property of the resulting sinusoid, not one sampled height.', 'Exact cancellation requires the stated equality and phase relationship. Room reflections, changing frequencies and unequal real sources are outside this model.'],
      sourceRefs: ['source:openstax:wave-interference']
    },
    {
      id: 'story:six-seed-tray', slug: 'probability', scene: 'seed-distribution', unit: 'expected seedlings',
      title: 'Plan a tray of six seeds', eyebrow: 'A growing plan · binomial probability',
      summary: 'Change one seed’s chance of germinating. See every possible tray total change together.',
      context: 'You are planning a classroom tray with six seeds. Give each seed the same illustrative germination chance p, and assume their outcomes are independent. The chart shows the probability of each possible total from zero to six seedlings, rather than picking one random tray outcome.',
      question: 'If each seed has a 50% germination chance, what is the expected number of seedlings?',
      variables: [{ key: 'chance', symbol: 'p', label: 'Germination chance per seed', unit: 'probability', min: 0, max: 1, step: 0.01 }],
      parameters: { chance: 0.5 },
      timeline: { key: 'chance', from: 0, to: 0.5, durationMs: 10000 },
      steps: [
        { id: 'tray', title: 'Keep the six-seed tray', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'Six fixed independent seed trials', focusDescription: 'The number of seeds remains six. The distribution always includes the same possible totals, from zero to six seedlings.',
          body: 'The tray always has {{trials}} seeds. Each has the current chance {{chance}} of germinating. Keep the seed count fixed while you inspect the possible totals; no single illustrated outcome is a guarantee.',
          formula: 'K = number germinated; possible K: 0, 1, 2, 3, 4, 5, 6' },
        { id: 'chance', title: 'Change each seed’s chance', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'One probability changes all six trials', focusDescription: 'The cyan control changes the shared per-seed success probability. It changes every distribution bar together.',
          body: 'Drag the shared chance, now {{chance}}. All six seeds use this same value in the model. Higher p shifts probability toward larger tray totals without choosing which particular seeds germinate.',
          formula: 'P(one seed germinates) = {{chance}}; P(it does not) = 1 − {{chance}}' },
        { id: 'distribution', title: 'Build the distribution of totals', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'Each bar is the probability of one tray total', focusDescription: 'The seven bars represent mutually exclusive totals. Their heights sum to one, while their positions count seedlings.',
          body: 'With chance {{chance}}, the binomial rule combines different ways to get the same total k. Each bar measures one total’s probability. Across all seven bars the probability stays 1.',
          formula: 'P(K = k) = C(6,k) × pᵏ × (1 − p)⁶⁻ᵏ; p = {{chance}}' },
        { id: 'solve', title: 'Read the expected total', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The average total across many such trays', focusDescription: 'The gold expectation marker gives six times p. It is a long-run mean, and need not equal a whole number or one tray’s result.',
          body: 'At chance {{chance}}, the expected total is {{output}} seedlings. Return to 0.5 for the question: the mean is three. An actual tray may contain any total from zero to six, and an expectation can be fractional.',
          formula: 'E[K] = {{trials}} × {{chance}} = {{output}} seedlings' }
      ],
      calculation: [
        { role: 'input', label: 'Set the chance per seed', template: 'p = {{chance}} for each of {{trials}} independent seeds' },
        { role: 'intermediate', label: 'Weigh all possible totals', template: 'P(K = k) = C(6,k)pᵏ(1 − p)⁶⁻ᵏ' },
        { role: 'output', label: 'Locate the average', template: 'E[K] = 6 × {{chance}} = {{output}} seedlings' }
      ],
      conclusion: 'Six independent seeds with p = 0.5 have an expected total of 3 seedlings. This is the average across many comparable trays, not a promise that this tray will contain exactly three.',
      assumptions: ['Exactly six trials have two modeled outcomes: germinate or not germinate.', 'Each seed uses the same stipulated probability and trials are independent. Real shared soil, temperature or seed quality may violate these assumptions.', 'The probability is chosen for illustration; it is not an estimate from measured germination data.', 'Expected count is a mean and can be noninteger. The model displays the whole binomial distribution without sampling a random result.'],
      sourceRefs: ['source:openstax:binomial-distribution']
    },
    {
      id: 'story:turning-robot-arm', slug: 'vector-rotation', scene: 'robot-arm', unit: 'm horizontally',
      title: 'Turn a robot arm without stretching it', eyebrow: 'A motion plan · vector rotation',
      summary: 'Rotate a fixed-length arm. Follow the angle through sine and cosine into its endpoint coordinates.',
      context: 'You are planning the motion of an ideal robot arm in a flat plane. Its pivot is at the origin and its length is fixed at 2 m. Measure its angle counterclockwise from the positive horizontal axis. Rotation moves the endpoint while preserving the arm’s length.',
      question: 'Where is the arm’s endpoint after a 60° turn from the horizontal?',
      variables: [{ key: 'angle', symbol: 'θ', label: 'Counterclockwise angle', unit: '°', min: 0, max: 360, step: 0.1 }],
      parameters: { angle: 60, radius: 2 },
      timeline: { key: 'angle', from: 0, to: 60, durationMs: 10000 },
      steps: [
        { id: 'arm', title: 'Keep the arm length fixed', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'A fixed pivot and two-metre radius', focusDescription: 'The pivot remains at the origin and the reference circle has a fixed radius of two metres.',
          body: 'At angle {{angle}}°, the pivot stays at the origin and the arm stays {{radius}} m long. Its endpoint must remain on the fixed circle. Only direction changes as you drag.',
          formula: 'Fixed length r = {{radius}} m; x² + y² = r²' },
        { id: 'turn', title: 'Turn through an angle', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Angle turns the arm around the pivot', focusDescription: 'The cyan angle arc measures a counterclockwise turn from the positive horizontal axis.',
          body: 'The angle is now {{angle}}°. Follow the arc from the positive horizontal axis to the arm. The equivalent angle is {{radians}} rad; it tells the sine and cosine functions where to look on the circle.',
          formula: 'Radians = {{angle}} × π / 180 = {{radians}}' },
        { id: 'project', title: 'Resolve horizontal and vertical parts', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'The arm’s projections onto both axes', focusDescription: 'The projection guides resolve the same arm into horizontal and vertical coordinates. Neither projection is the arm’s total length.',
          body: 'At {{angle}}°, cosine gives the horizontal share and sine gives the vertical share. Multiplying each by the fixed {{radius}} m radius gives x = {{x}} m and y = {{y}} m.',
          formula: 'x = {{radius}} cos({{angle}}°) = {{x}} m; y = {{radius}} sin({{angle}}°) = {{y}} m' },
        { id: 'solve', title: 'Read the moving endpoint', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The endpoint defined by both coordinates', focusDescription: 'The gold endpoint sits at the horizontal and vertical coordinates together. It stays two metres from the pivot throughout the turn.',
          body: 'At angle {{angle}}°, the endpoint is ({{x}}, {{y}}) m. Return to 60°: x = 1 m and y = √3 m. The horizontal readout alone is only one coordinate; use both to locate the arm.',
          formula: 'Endpoint = ({{x}}, {{y}}) m; distance from pivot = {{radius}} m' }
      ],
      calculation: [
        { role: 'input', label: 'Choose the direction', template: 'θ = {{angle}}°; fixed radius = {{radius}} m' },
        { role: 'intermediate', label: 'Resolve the two components', template: 'x = r cos θ; y = r sin θ' },
        { role: 'output', label: 'Locate the endpoint', template: '(x, y) = ({{x}}, {{y}}) m' }
      ],
      conclusion: 'At 60°, the endpoint is (1, √3) m, approximately (1, 1.73205) m. Its distance from the pivot remains 2 m.',
      assumptions: ['This is a rigid two-metre arm in a two-dimensional coordinate plane with a fixed origin.', 'Angles are measured counterclockwise in degrees from the positive horizontal axis, then converted to radians for evaluation.', 'The model describes geometry. Motor dynamics, joint limits, collisions and control error are outside the example.'],
      sourceRefs: ['source:openstax:polar-coordinates']
    },
    {
      id: 'story:diagonal-garden-path', slug: 'pythagorean-theorem', scene: 'garden-diagonal', unit: 'm',
      title: 'Take a diagonal across the garden', eyebrow: 'A garden plan · the Pythagorean theorem',
      summary: 'Change one side of a rectangle. Watch the two squared lengths determine its shortest corner-to-corner path.',
      context: 'You are planning a straight path between opposite corners of a rectangular garden. One side is fixed at 4 m and the other will be 3 m. The sides meet at a right angle, so the diagonal is the hypotenuse of a right triangle.',
      question: 'How long is the straight path across a 3 m by 4 m rectangular garden?',
      variables: [{ key: 'a', symbol: 'a', label: 'Garden width', unit: 'm', min: 0.5, max: 6, step: 0.01 }],
      parameters: { a: 3, b: 4 },
      timeline: { key: 'a', from: 0.5, to: 3, durationMs: 10000 },
      steps: [
        { id: 'right-angle', title: 'Keep the length and right angle', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'A fixed four-metre side and right angle', focusDescription: 'The garden length remains four metres. The right-angle marker identifies the condition needed for the theorem.',
          body: 'The garden is currently {{a}} m wide and {{b}} m long. Keep the 4 m side and right angle fixed as the width changes. The diagonal joins the two opposite corners.',
          formula: 'Fixed side b = {{b}} m; angle between a and b = 90°' },
        { id: 'width', title: 'Move one side of the garden', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Width moves the far corners horizontally', focusDescription: 'The cyan width dimension changes one side. The moving endpoint changes the diagonal as the other side stays fixed.',
          body: 'Drag the width, now {{a}} m. The far corners move while the garden length stays {{b}} m. Follow the diagonal: it must adjust to reach the new opposite corner.',
          formula: 'Changing side a = {{a}} m; fixed side b = {{b}} m' },
        { id: 'squares', title: 'Add the two squared lengths', from: 0.5, to: 0.75,
          focus: 'intermediate', focusLabel: 'Areas of squares on the two short sides', focusDescription: 'The two side-square areas represent a squared and b squared in square metres. Their sum equals the square on the diagonal.',
          body: 'At width {{a}} m, the two side-square areas are {{aSquared}} m² and {{bSquared}} m². Add their areas to get {{cSquared}} m². This is the square of the diagonal’s length, not the length yet.',
          formula: 'c² = a² + b² = {{aSquared}} + {{bSquared}} = {{cSquared}} m²' },
        { id: 'solve', title: 'Take the square root for distance', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The straight corner-to-corner path', focusDescription: 'The gold diagonal measures length in metres. Taking the square root converts the summed squared lengths back to distance.',
          body: 'At width {{a}} m, the straight diagonal is {{output}} m. Return to a width of 3 m: the squared lengths sum to 25 m², giving a 5 m diagonal. The square-root step restores length units.',
          formula: 'c = √({{aSquared}} + {{bSquared}}) = {{output}} m' }
      ],
      calculation: [
        { role: 'input', label: 'Choose the garden width', template: 'a = {{a}} m; b = {{b}} m stays fixed' },
        { role: 'intermediate', label: 'Add the squared sides', template: '{{a}}² + {{b}}² → {{cSquared}} m²' },
        { role: 'output', label: 'Take the square root', template: 'c = √{{cSquared}} = {{output}} m' }
      ],
      conclusion: 'The diagonal across a 3 m by 4 m rectangle is √(9 + 16) = √25 = 5 m. It is the shortest straight connection between the opposite corners in this flat plan.',
      assumptions: ['The plan is a flat rectangle with an exact right angle and stated side lengths.', 'The theorem relates squared lengths. Side-square areas have square metres, and the final diagonal has metres.', 'This is ideal geometric path length; terrain, obstacles, slope and construction allowances are outside the plan.'],
      sourceRefs: ['source:openstax:pythagorean-theorem']
    }
  ]);

  // Each step has one semantic anchor; the scene is free to contain several
  // marks for a role. Quantity descriptions specify the actual measured value.
  const links = freeze(Object.fromEntries(stories.map(story => {
    const driver = story.variables.find(variable => variable.key === story.timeline.key);
    return [story.slug, {
      variableKey: driver.key, symbol: driver.symbol, variableLabel: driver.label, unit: driver.unit,
      effectLabel: {
        'chaos-theory': 'The cyan generation cursor follows both paths; the gold gap measures their separation.',
        'fractal-geometry': 'The cyan refinement control raises the repeated bumps; the gold boundary shows the measured perimeter.',
        'wave-interference': 'The cyan phase control shifts the second wave; the gold curve is their signed sum.',
        probability: 'The cyan chance changes all distribution bars; the gold marker shows the expected seedling total.',
        'vector-rotation': 'The cyan angle arc turns the fixed-length arm; the gold endpoint follows both coordinate projections.',
        'pythagorean-theorem': 'The cyan width moves the far corners; the gold diagonal connects the opposite corners.'
      }[story.slug],
      steps: story.steps.map(step => ({ focus: step.focus, label: step.focusLabel, description: step.focusDescription }))
    }];
  })));

  const quantities = freeze({
    'chaos-theory': {
      generation: { label: 'Generation coordinate', role: 'input', description: 'The cyan cursor selects a shared point on both paths. Integer values are completed logistic iterations; fractions interpolate adjacent iterates.' },
      rate: { label: 'Shared logistic rate', role: 'reference', description: 'The chosen rate is held fixed for both trajectories. Both paths apply exactly the same recurrence at each whole generation.' },
      seed: { label: 'First starting fraction', role: 'input', precision:7, description: 'The cyan path begins at this fraction of capacity. Its initial marker stays fixed while the generation cursor advances.' },
      delta: { label: 'Initial separation', role: 'input', precision:7, description: 'The violet path starts this tiny amount above the first. Change it to compare another pair; the gold gap measures their current separation.' },
      startA:{label:'First initial state',role:'reference',precision:7,description:'This fixed initial state starts the cyan trajectory. It is distinct from the current population at the time cursor.'},
      startB:{label:'Second initial state',role:'reference',precision:7,description:'The violet starting state is the first state plus the chosen initial gap. Extra digits keep that tiny difference visible.'},
      initialGap:{label:'Initial starting gap',role:'reference',precision:7,description:'This is the chosen separation before any logistic updates, used as the denominator when comparing gap growth.'},
      amplification:{label:'Current gap divided by initial gap',role:'output',description:'The gold current separation divided by the chosen starting gap measures relative amplification. This ratio can grow and shrink; it is not a Lyapunov exponent.'},
      populationA: { label: 'Population A at the cursor', role: 'intermediate', precision:7, description: 'The cyan current marker is an actual iterate at a whole generation. Between markers, it linearly interpolates the two whole-step endpoints.' },
      populationB: { label: 'Population B at the cursor', role: 'intermediate', precision:7, description: 'The violet current marker uses the same generation coordinate as A. Fractional coordinates interpolate endpoints rather than applying an extra recurrence.' },
      separation: { label: 'Current population separation', role: 'output', precision:7, description: 'The gold cursor gap measures the absolute difference between the two currently displayed population fractions. It can grow or shrink.' },
      output: { label: 'Current population separation', role: 'output', precision:7, description: 'The gold cursor gap compares current displayed populations. Between whole markers it can differ from the next whole-step endpoint gap.' },
      iteration: { label: 'Whole-step input generation', role: 'input', description: 'This integer identifies the actual recurrence input. At a positive whole cursor, it is the preceding generation; between markers it is the left endpoint.' },
      nextIteration: { label: 'Whole-step output generation', role: 'output', description: 'This integer identifies the next actual iterate in the displayed update. At a whole marker above zero, this is the cursor generation itself.' },
      iterationProgress: { label: 'Display progress within the whole step', role: 'input', description: 'This fraction places the cursor between actual endpoint states. It controls a linear visual interpolation, not a fractional logistic update.' },
      stepInputA: { label: 'Whole-step input for A', role: 'input', precision:7, description: 'The actual cyan whole-generation value enters the displayed logistic recurrence. It stays fixed while the cursor moves inside this interval.' },
      stepInputB: { label: 'Whole-step input for B', role: 'input', precision:7, description: 'The actual violet whole-generation value enters the same recurrence as A. Extra digits preserve the visible difference between nearby states.' },
      stepRemainingA: { label: 'One minus the A input', role: 'intermediate', precision:7, description: 'Subtract the whole-step A input from one to obtain the remaining-capacity factor for this actual logistic update.' },
      stepRemainingB: { label: 'One minus the B input', role: 'intermediate', precision:7, description: 'Subtract the whole-step B input from one to obtain its remaining-capacity factor; use B’s own input rather than A’s.' },
      stepGrowthA: { label: 'A growth factor for the whole step', role: 'intermediate', precision:7, description: 'The shared rate times one minus the whole-step A input is the factor multiplying that input to produce its next iterate.' },
      stepGrowthB: { label: 'B growth factor for the whole step', role: 'intermediate', precision:7, description: 'The shared rate times one minus the whole-step B input is its growth factor; the same rule uses a slightly different input.' },
      stepNextA: { label: 'Next whole-generation A value', role: 'output', precision:7, description: 'This is the actual logistic output from the whole-step A input. It is the endpoint approached by the cyan interpolated cursor marker.' },
      stepNextB: { label: 'Next whole-generation B value', role: 'output', precision:7, description: 'This is the actual logistic output from the whole-step B input. It is distinct from the in-between violet cursor reading.' },
      stepGapBefore: { label: 'Gap at the whole-step start', role: 'input', precision:7, description: 'The absolute difference between the two actual input states belongs to the left endpoint of the displayed whole-generation update.' },
      stepGapAfter: { label: 'Gap at the next whole marker', role: 'output', precision:7, description: 'The absolute difference between the two actual next iterates belongs to the right endpoint. It matches the cursor gap only when the cursor reaches that endpoint.' }
    },
    'fractal-geometry': {
      depth: { label: 'Refinement coordinate', role: 'input', description: 'The cyan control sets complete Koch levels at integer values. Between them it raises new triangular bumps continuously.' },
      length: { label: 'Original triangle side length', role: 'reference', description: 'Each original triangle side is one metre. This reference length stays fixed while the boundary gains detail.' },
      completedDepth: { label: 'Last complete Koch level', role: 'intermediate', description: 'This whole number counts completed edge-replacement levels. A fractional morph has not completed the next level.' },
      completedSegmentCount: { label: 'Segments at the last complete level', role: 'intermediate', description: 'The last completed Koch level has three times four to that level equal segments. This count is discrete, unlike the in-between morph.' },
      segmentCount: { label: 'Segments in the current drawn path', role: 'intermediate', description: 'During a morph, the path is subdivided for the next Koch level while the new bumps rise. The count can exceed the last completed level’s segment count.' },
      integerPerimeter: { label: 'Perimeter at the last complete level', role: 'intermediate', description: 'This is the boundary length at the completed integer level. It can differ from the perimeter of the current in-between morph.' },
      perimeter: { label: 'Current boundary perimeter', role: 'output', description: 'The gold boundary is measured along its entire current path. During a morph, this is its actual geometric path length rather than a fractional-iteration power formula.' },
      output: { label: 'Current boundary perimeter', role: 'output', description: 'The gold boundary shows the measured current path length in metres. It measures perimeter, not enclosed area.' }
    },
    'wave-interference': {
      phase: { label: 'Phase difference', role: 'input', description: 'The cyan phase control shifts the second wave horizontally relative to the fixed first wave. It is measured in radians.' },
      amplitude: { label: 'Amplitude of each source wave', role: 'reference', description: 'Each source keeps unit amplitude as phase changes. The summed wave can have a different amplitude.' },
      componentA: { label: 'First wave height at the probe', role: 'intermediate', description: 'This signed height belongs to the first wave at the fixed θ = π/2 probe. It is one instantaneous sample.' },
      componentB: { label: 'Second wave height at the probe', role: 'intermediate', description: 'This signed height belongs to the shifted second wave at the same fixed probe. It adds algebraically to the first height.' },
      probeValue: { label: 'Summed height at the probe', role: 'intermediate', description: 'The fixed-probe height is the sum of both signed heights there. It is distinct from the amplitude of the whole resultant wave.' },
      resultantAmplitude: { label: 'Resultant wave amplitude', role: 'output', description: 'This is the maximum magnitude of the summed sinusoid. It ranges from zero at ideal cancellation to two for equal unit waves in phase.' },
      output: { label: 'Resultant wave amplitude', role: 'output', description: 'The gold resultant curve has this amplitude. A point’s sampled height can be smaller and may be negative.' }
    },
    probability: {
      chance: { label: 'Germination chance per seed', role: 'input', description: 'The cyan probability applies equally to all six independent trials and changes all possible-total probabilities together.' },
      trials: { label: 'Fixed seed count', role: 'reference', description: 'There are exactly six modeled seeds throughout the story. Only the per-seed chance changes.' },
      variance: { label: 'Variance of the seedling count', role: 'intermediate', description: 'The variance describes spread of the binomial count distribution and equals 6p(1 − p), in squared count units.' },
      expected: { label: 'Expected seedling total', role: 'output', description: 'The gold expectation marker is the long-run mean 6p. It can be fractional and does not promise any one tray’s outcome.' },
      output: { label: 'Expected seedling total', role: 'output', description: 'The gold marker gives the average number of seedlings across many comparable trays. Every possible single-tray total remains represented by a bar.' }
    },
    'vector-rotation': {
      angle: { label: 'Counterclockwise arm angle', role: 'input', description: 'The cyan arc measures degrees counterclockwise from the positive horizontal axis to the arm.' },
      radius: { label: 'Fixed arm length', role: 'reference', description: 'The arm stays two metres long and its endpoint stays on the reference circle centered on the fixed pivot.' },
      radians: { label: 'Angle in radians', role: 'intermediate', description: 'Multiplying degrees by π/180 gives the angle used to evaluate sine and cosine. It describes the same rotation.' },
      x: { label: 'Horizontal endpoint coordinate', role: 'output', description: 'The endpoint’s horizontal projection equals r cos θ. It is one coordinate in metres, not the arm length or the endpoint’s vertical position.' },
      y: { label: 'Vertical endpoint coordinate', role: 'output', description: 'The endpoint’s vertical projection equals r sin θ. Pair it with the horizontal coordinate to locate the gold endpoint.' },
      output: { label: 'Horizontal endpoint coordinate', role: 'output', description: 'This horizontal coordinate equals r cos θ. The endpoint’s vertical coordinate is shown separately; both are needed to locate the arm.' }
    },
    'pythagorean-theorem': {
      a: { label: 'Garden width', role: 'input', description: 'The cyan width bracket measures the changing side in metres. Moving that side changes the far corner and diagonal.' },
      b: { label: 'Fixed garden length', role: 'reference', description: 'The other garden side remains four metres long and meets the width at a right angle.' },
      aSquared: { label: 'Square on the changing side', role: 'intermediate', description: 'This side-square area is a² in square metres. It changes as the garden width changes.' },
      bSquared: { label: 'Square on the fixed side', role: 'intermediate', description: 'This side-square area remains b² = 16 square metres. Its area contributes to the sum for the diagonal square.' },
      cSquared: { label: 'Square on the diagonal', role: 'output', description: 'The diagonal square has area a² + b² in square metres. Taking its square root gives the diagonal length in metres.' },
      c: { label: 'Garden diagonal length', role: 'output', description: 'The gold diagonal connects opposite corners. Its length is the positive square root of a² + b², measured in metres.' },
      output: { label: 'Garden diagonal length', role: 'output', description: 'The gold diagonal is the straight corner-to-corner distance in metres. Its squared length is shown separately in square metres.' }
    }
  });

  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(story => story.slug === slug) || null,
    find: id => stories.find(story => story.id === id) || null,
    linksFor: slug => Object.hasOwn(links, slug) ? links[slug] : null,
    quantityFor: (slug, key) => Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key) ? quantities[slug][key] : null
  });
});
