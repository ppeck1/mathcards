/* Original constructed stories. Templates are data, never executable formulas. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasFoundationStories = api;
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
      id: 'story:sensor-calibration',
      slug: 'function',
      scene: 'affine-calibration',
      unit: 'display units',
      title: 'Give a sensor reading a useful scale',
      eyebrow: 'A workshop sensor · functions',
      summary: 'Follow one raw reading through a calibration rule, from the input marker to the display.',
      context: 'You are setting up a workshop sensor display. In this chosen calibration, every sensor unit contributes 2 display units, then an offset adds 1 display unit. One input gets one output. The graph and the measuring frame show that same conversion.',
      question: 'What should the display show when the raw sensor reading is 2?',
      variables: [{ key: 'x', symbol: 'x', label: 'Raw sensor reading', unit: 'sensor units', min: 0, max: 4, step: .01 }],
      parameters: { x: 2, a: 2, b: 1 },
      timeline: { key: 'x', from: 0, to: 2, durationMs: 12000 },
      steps: [
        {
          id: 'reference', title: 'Set the calibration rule', from: 0, to: .25, focus: 'reference',
          focusLabel: 'The fixed gain and offset',
          focusDescription: 'The gain multiplies every raw reading; the fixed offset shifts the displayed value after that multiplication.',
          body: 'At raw reading {{x}}, the calibration keeps its gain {{a}} display units per sensor unit and offset {{b}} display units. These two settings define the whole straight-line rule.',
          formula: 'f(x) = {{a}}x + {{b}}'
        },
        {
          id: 'input', title: 'Choose one raw reading', from: .25, to: .5, focus: 'input',
          focusLabel: 'The sensor reading enters the rule',
          focusDescription: 'The cyan input marker moves along the input scale. Its position selects one point on the fixed calibration line.',
          body: 'Drag the raw reading to {{x}} sensor units. Follow its cyan marker into the rule. Changing the input chooses a new output without changing the gain or offset.',
          formula: 'x = {{x}} sensor units'
        },
        {
          id: 'calculate', title: 'Multiply, then add the offset', from: .5, to: .75, focus: 'intermediate',
          focusLabel: 'The gained reading before the offset',
          focusDescription: 'The middle measure represents gain times input. The final measure shows that contribution after adding the fixed offset.',
          body: 'Multiply {{x}} by gain {{a}} to get {{scaled}} display units. Now add the fixed {{b}} display units. The final measure shows their combined result.',
          formula: '{{a}} × {{x}} = {{scaled}}; {{scaled}} + {{b}} = {{output}} display units'
        },
        {
          id: 'solve', title: 'Read the calibrated display', from: .75, to: 1, focus: 'output',
          focusLabel: 'The calibrated output',
          focusDescription: 'The final extent and graph point carry the same output. The graph pairs this displayed reading with its selected raw input.',
          body: 'The raw reading {{x}} produces {{output}} display units. Return to input 2: multiply by 2, then add 1, and the display reads 5.',
          formula: 'f({{x}}) = {{a}} × {{x}} + {{b}} = {{output}} display units'
        }
      ],
      calculation: [
        { role: 'input', label: 'Take the sensor reading', template: 'x = {{x}} sensor units', description: 'The cyan marker supplies the input to this fixed calibration rule.' },
        { role: 'intermediate', label: 'Apply the gain and offset', template: '{{a}} × {{x}} = {{scaled}}; {{scaled}} + {{b}} = {{output}}', description: 'The middle measure is gain times input; the fixed offset completes the output.' },
        { role: 'output', label: 'Read the calibrated value', template: 'f({{x}}) = {{output}} display units', description: 'The final measure and graph point represent the same calibrated reading.' }
      ],
      conclusion: 'At raw input 2, the gained reading is 2 × 2 = 4 display units. Adding the offset 1 gives 5 display units.',
      assumptions: [
        'The gain 2 and offset 1 are chosen teaching settings, not measured specifications of a real sensor.',
        'The story uses raw readings from 0 to 4 and assumes the calibration stays affine throughout that range. Saturation, noise and drift would require a different model.',
        'The gain has units display units per sensor unit; multiplying by the raw input and adding a display-unit offset is dimensionally consistent.',
        'This module explores an affine family of functions. A function can use other rules; the defining requirement is exactly one output for each input in its domain.'
      ],
      sourceRefs: ['source:openstax:function-notation', 'source:openstax:function-domain']
    },
    {
      id: 'story:poster-size-levels',
      slug: 'exponentiation',
      scene: 'repeated-scale',
      unit: 'reference areas',
      title: 'Choose a larger poster, one area step at a time',
      eyebrow: 'Square poster sizes · exponentiation',
      summary: 'Each size level multiplies paper area. Follow the growing square, then reverse the scaling.',
      context: 'A print workshop is planning square poster sizes. Each whole size level doubles the paper area relative to the level before it. Start with one reference panel area and apply the same factor repeatedly. Smooth settings between whole levels model custom sizes using the same positive-base power rule.',
      question: 'How much reference area does a poster use after three factor-2 size levels?',
      variables: [{ key: 'exponent', symbol: 'n', label: 'Poster size exponent', unit: 'levels', min: -3, max: 4, step: .01 }],
      parameters: { base: 2, exponent: 3 },
      timeline: { key: 'exponent', from: 0, to: 3, durationMs: 12000 },
      steps: [
        {
          id: 'reference', title: 'Start with one reference area', from: 0, to: .25, focus: 'reference',
          focusLabel: 'The reference area and repeated factor',
          focusDescription: 'The base readout keeps the same area factor at each whole size level. Exponent zero represents one reference panel area.',
          body: 'The exponent is {{exponent}} and the repeated area factor stays {{base}}. The level-zero poster uses 1 reference area, because any positive base raised to zero is 1.',
          formula: '{{base}}⁰ = 1'
        },
        {
          id: 'input', title: 'Move through size levels', from: .25, to: .5, focus: 'input',
          focusLabel: 'The exponent chooses the size level',
          focusDescription: 'The cyan exponent handle selects how far along the sequence of repeated area scales to go. The exponent is not a length added to the square.',
          body: 'Drag exponent {{exponent}}. Whole-number levels count repeated area scalings. Between those levels the square changes continuously according to the positive real power, modeling a custom poster size.',
          formula: 'n = {{exponent}}; area factor = {{base}}ⁿ'
        },
        {
          id: 'calculate', title: 'Apply the same factor repeatedly', from: .5, to: .75, focus: 'intermediate',
          focusLabel: 'A power collects repeated scaling',
          focusDescription: 'The power interpretation explains multiplication by a fixed factor. A negative exponent supplies the reciprocal area scale.',
          body: 'At exponent {{exponent}}, the poster uses {{output}} reference areas. For whole levels, 2 → 4 → 8 comes from multiplying by 2 each time. The reverse exponent gives {{reciprocal}}, the reciprocal area factor.',
          formula: '{{base}}^({{exponent}}) = {{output}}; {{base}}^(−({{exponent}})) = {{reciprocal}}'
        },
        {
          id: 'solve', title: 'Read the area of the poster', from: .75, to: 1, focus: 'output',
          focusLabel: 'Area of the changing square',
          focusDescription: 'The filled square’s area represents the power value on a fixed area scale. Its side length grows by the square root of the area factor.',
          body: 'Exponent {{exponent}} uses {{output}} reference areas. Return to level 3: 2 × 2 × 2 = 8. A negative level makes a smaller poster by reversing those area multiplications.',
          formula: 'poster area / reference area = {{base}}^({{exponent}}) = {{output}}'
        }
      ],
      calculation: [
        { role: 'input', label: 'Choose a poster size level', template: 'n = {{exponent}}; repeated factor = {{base}}', description: 'The cyan exponent handle selects a whole size level or a smooth custom setting between levels.' },
        { role: 'intermediate', label: 'Evaluate the power', template: '{{base}}^({{exponent}}) = {{output}}; reverse = {{reciprocal}}', description: 'The fixed positive base is raised to the chosen exponent; reversing the exponent gives its reciprocal.' },
        { role: 'output', label: 'Compare paper areas', template: 'poster area / reference area = {{output}}', description: 'The filled square’s area encodes this dimensionless ratio to the reference panel area.' }
      ],
      conclusion: 'Three factor-2 size levels give 2³ = 2 × 2 × 2 = 8 reference panel areas. Level −3 uses the reciprocal area factor 1/8. Because the poster is square, its side ratio at level 3 is √8.',
      assumptions: [
        'The workshop uses chosen square-poster sizes with one reference panel area. Every whole size level applies the same factor to area.',
        'A whole-number exponent counts repeated area scalings. Noninteger exponents model continuously chosen custom areas, rather than a fractional count of whole poster panels.',
        'The base is positive. Zero and negative bases are outside this module’s real-exponent domain; the general playground reports those cases instead of inventing a real value.',
        'The output is an area ratio: the square’s area represents the power. Its side ratio is the square root of that output. Cutting losses, borders and print margins are excluded.'
      ],
      sourceRefs: ['source:openstax:exponent-rules', 'source:openstax:positive-real-powers']
    },
    {
      id: 'story:missing-junction-reading',
      slug: 'limit',
      scene: 'junction-approach',
      unit: 'signal units',
      title: 'Find the reading a missing point approaches',
      eyebrow: 'A gap in a sensor trace · limits',
      summary: 'Bring two probes toward a missing junction reading and separate the approached value from the value at the point.',
      context: 'You are repairing a gap in an idealized sensor trace as a cart crosses a junction. Position and signal have been normalized to reference scales. Away from junction a = 1, the stored rule is f(x) = (x² − a²)/(x − a). The reading exactly at the junction is missing.',
      question: 'What signal value is approached at junction 1, even though the reading there is undefined?',
      variables: [{ key: 'h', symbol: 'h', label: 'Probe distance from junction', unit: 'coordinate units', min: .001, max: 1, step: .001 }],
      parameters: { mode: 'removable', a: 1, h: .25 },
      timeline: { key: 'h', from: 1, to: .25, durationMs: 12000 },
      steps: [
        {
          id: 'reference', title: 'Locate the missing reading', from: 0, to: .25, focus: 'reference',
          focusLabel: 'The fixed junction and its open point',
          focusDescription: 'The junction coordinate stays fixed. The missing value is identified in the readout; the graph view shows it as an open point.',
          body: 'The junction stays at a = {{a}} while the probes sit {{h}} coordinate units away. The original rule divides by zero exactly at the junction. The missing reading appears as an open point in the graph view.',
          formula: 'f(x) = (x² − {{a}}²)/(x − {{a}}), x ≠ {{a}}'
        },
        {
          id: 'input', title: 'Move in from both sides', from: .25, to: .5, focus: 'input',
          focusLabel: 'One gap places two approaching probes',
          focusDescription: 'The distance h places the cyan left probe and the gold right probe equally far from the junction. Decreasing h brings both toward it.',
          body: 'Set the gap to {{h}}. The left probe is at {{leftX}} and the right probe at {{rightX}}. Drag toward a smaller gap and follow both markers toward the same junction.',
          formula: 'left x = {{a}} − {{h}} = {{leftX}}; right x = {{a}} + {{h}} = {{rightX}}'
        },
        {
          id: 'calculate', title: 'Simplify before reading the signal', from: .5, to: .75, focus: 'intermediate',
          focusLabel: 'The nearby signal rule',
          focusDescription: 'For every nonzero gap, cancellation gives f(x) = x + a. The two signal heights are the rule evaluated at the left and right probe positions.',
          body: 'Because {{h}} is positive, both probes avoid the missing point. Canceling x − a gives f(x) = x + a: the left signal is {{leftValue}} and the right signal is {{rightValue}}.',
          formula: 'f(a − h) = 2a − h = {{leftValue}}; f(a + h) = 2a + h = {{rightValue}}'
        },
        {
          id: 'solve', title: 'Name the approached value', from: .75, to: 1, focus: 'output',
          focusLabel: 'One shared limit, still an undefined point',
          focusDescription: 'The output readout gives the value both sides approach. Dashed signal levels mark their exact one-sided limits; the original function remains undefined at the junction.',
          body: 'At gap {{h}}, the signals are {{leftValue}} and {{rightValue}}. The identity f(x) = x + a makes the signal error equal to the position gap, so both sides approach {{output}} as the gap tends to zero. The junction reading stays undefined.',
          formula: 'lim as x → {{a}} f(x) = 2 × {{a}} = {{output}} signal units'
        }
      ],
      calculation: [
        { role: 'input', label: 'Place two nearby probes', template: 'h = {{h}}; x left = {{leftX}}, x right = {{rightX}}', description: 'One positive gap sets the cyan left input and gold right input around the fixed junction.' },
        { role: 'intermediate', label: 'Use the nearby simplified rule', template: 'f(a − h) = {{leftValue}}; f(a + h) = {{rightValue}}', description: 'For x unequal to a, canceling the common factor gives x + a. The two signal heights come from that same rule.' },
        { role: 'output', label: 'Identify the shared approached value', template: 'left limit = {{leftLimit}}; right limit = {{rightLimit}}; limit = {{output}}', description: 'The algebraic identity makes both one-sided limits equal. Finite probe readings illustrate that result.' }
      ],
      conclusion: 'At a = 1 the nearby rule is x + 1, so both sides approach 2 signal units. With h = 0.25 the readings are 1.75 and 2.25. Their values illustrate the limit; the original function remains undefined at x = 1.',
      assumptions: [
        'This is a constructed normalized signal rule, not measured cart or sensor data. Position and signal numbers use their stated reference scales.',
        'The equality (x² − a²)/(x − a) = x + a requires x ≠ a. Canceling factors does not define the original function at its missing point.',
        'Finite probes do not prove a limit. Here the identity gives |f(x) − 2a| = |x − a|, so choosing a position gap smaller than any requested positive signal tolerance establishes the limit.',
        'The story uses the removable-hole mode. The playground’s jump mode has left limit a − 1 and right limit a + 1; it has no two-sided limit, even though its point value is defined.',
        'The slider keeps h positive and stops at 0.001. A displayed probe value is a nearby reading, not the limiting operation h → 0.'
      ],
      sourceRefs: ['source:openstax:function-limits', 'source:openstax:precise-limit']
    },
    {
      id: 'story:cart-out-and-back',
      slug: 'signed-accumulation',
      scene: 'signed-velocity-area',
      unit: 'm',
      title: 'Back at the start, but how far did it travel?',
      eyebrow: 'A cart moving out and back · signed accumulation',
      summary: 'Watch forward motion build positive area, then see backward motion cancel displacement without erasing the journey.',
      context: 'A test cart starts at position zero on a straight track, moving forward at 2 m/s. Its chosen constant acceleration is −1 m/s², so velocity is v(t) = 2 − t. It slows, stops at 2 seconds, then moves backward. The area above and below the velocity axis keeps track of both directions.',
      question: 'After 4 seconds, what are the cart’s net displacement and its total distance traveled?',
      variables: [{ key: 'time', symbol: 'T', label: 'Elapsed time', unit: 's', min: 0, max: 6, step: .01 }],
      parameters: { time: 4, initial: 2, rate: -1, partitions: '8' },
      timeline: { key: 'time', from: 0, to: 4, durationMs: 14000 },
      steps: [
        {
          id: 'reference', title: 'Keep direction in the velocity rule', from: 0, to: .25, focus: 'reference',
          focusLabel: 'The signed velocity and starting position',
          focusDescription: 'The fixed sloping velocity line crosses zero at the turning time. Positive and negative graph heights mean opposite track directions.',
          body: 'At elapsed time {{time}} s, the cart still follows its initial velocity {{initial}} m/s and acceleration {{rate}} m/s². Its starting position is zero, and velocity crosses zero after 2 seconds.',
          formula: 'v(t) = {{initial}} + ({{rate}})t; s(0) = 0 m'
        },
        {
          id: 'input', title: 'Move the end of the journey', from: .25, to: .5, focus: 'input',
          focusLabel: 'Time selects the accumulated interval',
          focusDescription: 'The cyan time cursor sets the right edge of the velocity area. After the turning time, extending that edge adds motion in the backward direction.',
          body: 'Drag the time boundary to {{time}} s. The endpoint velocity is {{velocity}} m/s. When the line passes below zero, it tells you the cart is moving backward, while the time interval keeps growing.',
          formula: 'T = {{time}} s; v(T) = {{initial}} + ({{rate}}) × {{time}} = {{velocity}} m/s'
        },
        {
          id: 'calculate', title: 'Keep the two areas separate', from: .5, to: .75, focus: 'intermediate',
          focusLabel: 'Forward and backward area contributions',
          focusDescription: 'Mint area above zero contributes positive displacement. Orange area below zero has a positive size but contributes with a minus sign. The outlined rectangles use left-endpoint velocities.',
          body: 'By {{time}} s, forward area contributes {{positiveArea}} m and backward area has size {{negativeArea}} m. Subtract the backward contribution for displacement. The {{partitionCount}} left-endpoint rectangles give {{leftSum}} m, a finite estimate of the exact shaded area.',
          formula: 'signed area = {{positiveArea}} − {{negativeArea}} = {{output}} m'
        },
        {
          id: 'solve', title: 'Compare displacement with travel distance', from: .75, to: 1, focus: 'output',
          focusLabel: 'Net position change versus total travel',
          focusDescription: 'The net readout records signed area; the distance readout adds both area sizes. Returning to the start can give zero displacement after a nonzero journey.',
          body: 'At {{time}} s the net displacement is {{output}} m, while total distance traveled is {{distance}} m. Return to 4 seconds: 2 m out and 2 m back leave the cart at its start after a 4 m journey.',
          formula: 'Δs = {{positiveArea}} − {{negativeArea}} = {{output}} m; distance = {{positiveArea}} + {{negativeArea}} = {{distance}} m'
        }
      ],
      calculation: [
        { role: 'input', label: 'Set the end time', template: 'T = {{time}} s; v(T) = {{velocity}} m/s', description: 'The cyan cursor selects the interval of velocity contributions from the start through the current time.' },
        { role: 'intermediate', label: 'Collect both directed areas', template: 'forward area = {{positiveArea}} m; backward area size = {{negativeArea}} m', description: 'These positive magnitudes become opposite signed contributions to the cart’s position change.' },
        { role: 'output', label: 'Subtract for displacement, add for distance', template: 'Δs = {{output}} m; total distance = {{distance}} m', description: 'Signed velocity area gives displacement. Adding the two area magnitudes gives total distance traveled.' }
      ],
      conclusion: 'At 4 seconds, the positive and negative area sizes are both 2 m. Net displacement is 2 − 2 = 0 m, but distance traveled is 2 + 2 = 4 m. The cart has returned to its starting position.',
      assumptions: [
        'The cart moves on one straight track from position zero. Initial velocity 2 m/s and constant acceleration −1 m/s² are chosen teaching values.',
        'The sign of velocity records direction. Negative displacement means a position change in the backward direction; distance traveled is always nonnegative.',
        'Velocity graph area has units (metres per second) × seconds = metres. It is not physical ground area.',
        'The exact displacement uses the integral of v(t). Left, right and midpoint rectangle sums are finite approximations in general; the midpoint rule is exact for this affine velocity on each equal subinterval.',
        'Eight rectangles give left sum 1 m, right sum −1 m and midpoint sum 0 m at 4 seconds. Changing partition count changes the finite endpoint sums, while the exact integral remains fixed.'
      ],
      sourceRefs: ['source:openstax:definite-integral', 'source:openstax:net-change']
    }
  ]);

  // The shared host consumes the same four roles for every independently authored story.
  const effects = {
    function: 'The cyan raw reading selects one point on the fixed calibration line; the gained contribution and fixed offset determine the final display value.',
    exponentiation: 'The cyan exponent handle changes the square’s area continuously. Its area represents the power value; the power curve follows that same area ratio.',
    limit: 'The positive gap moves the cyan left probe and gold right probe toward the junction. Their signal heights approach matching dashed limit levels; the readout retains the missing value.',
    'signed-accumulation': 'The cyan time boundary collects velocity area. Mint forward and orange backward contributions have opposite signs; the net and total-distance readouts show their difference and sum.'
  };
  const links = freeze(Object.fromEntries(stories.map(story => {
    const variable = story.variables.find(value => value.key === story.timeline.key);
    return [story.slug, {
      variableKey: variable.key, symbol: variable.symbol, variableLabel: variable.label, unit: variable.unit,
      effectLabel: effects[story.slug],
      steps: story.steps.map(step => ({ focus: step.focus, label: step.focusLabel, description: step.focusDescription }))
    }];
  })));

  const quantities = freeze({
    function: {
      x: { label: 'Raw sensor reading', role: 'input', unit: 'sensor units', description: 'The cyan input is the chosen raw sensor reading. It is multiplied by the gain before the offset is added.' },
      input: { label: 'Raw sensor reading', role: 'input', unit: 'sensor units', description: 'This is the raw input coordinate, in sensor units, that selects one output on the calibration line.' },
      a: { label: 'Calibration gain', role: 'reference', unit: 'display units per sensor unit', description: 'The fixed gain contributes two display units for every sensor unit in this chosen calibration.' },
      b: { label: 'Calibration offset', role: 'reference', unit: 'display units', description: 'The fixed one-display-unit offset is added after applying the gain; it is the displayed value at zero raw input.' },
      scaled: { label: 'Gained reading before the offset', role: 'intermediate', unit: 'display units', description: 'The middle measure is gain times raw input, in display units. Adding the offset gives the final reading.' },
      output: { label: 'Calibrated display reading', role: 'output', unit: 'display units', description: 'The final extent and graph point encode gain times raw input plus offset, measured in display units.' }
    },
    exponentiation: {
      base: { label: 'Repeated area factor', role: 'reference', unit: 'unitless', description: 'This fixed positive factor multiplies poster area once per whole size level. It is two in this story.' },
      exponent: { label: 'Poster size exponent', role: 'input', unit: 'unitless', description: 'The cyan exponent handle selects whole repeated area scalings or continuous custom size settings between them.' },
      reciprocal: { label: 'Reverse-exponent area factor', role: 'intermediate', unit: 'unitless', description: 'Raising the same positive base to the opposite exponent gives the reciprocal area factor and reverses the scaling.' },
      output: { label: 'Poster area relative to the reference', role: 'output', unit: 'unitless', description: 'The filled square’s area represents this ratio to the reference panel area. Its side ratio is the square root of the output.' }
    },
    limit: {
      a: { label: 'Fixed junction coordinate', role: 'reference', unit: 'coordinate units', description: 'The junction coordinate locates the missing function value. The nearby probes approach this fixed input.' },
      h: { label: 'Probe distance from the junction', role: 'input', unit: 'coordinate units', description: 'The cyan positive gap puts one probe h to the left and one h to the right. It never reaches zero on this slider.' },
      leftX: { label: 'Left probe position', role: 'input', unit: 'coordinate units', description: 'This input coordinate is a minus the positive gap h. The left probe approaches the junction from below.' },
      rightX: { label: 'Right probe position', role: 'input', unit: 'coordinate units', description: 'This input coordinate is a plus the positive gap h. The right probe approaches the junction from above.' },
      leftValue: { label: 'Current left probe signal', role: 'intermediate', unit: 'signal units', description: 'The cyan left signal is the current finite reading 2a minus h. It is a nearby sample, not the limit itself.' },
      rightValue: { label: 'Current right probe signal', role: 'intermediate', unit: 'signal units', description: 'The gold right signal is the current finite reading 2a plus h. It is distinct from the signal at the missing point.' },
      leftLimit: { label: 'Signal approached from the left', role: 'output', unit: 'signal units', description: 'The left-hand limit is 2a in this removable-hole rule. The algebraic identity establishes it beyond finite samples.' },
      rightLimit: { label: 'Signal approached from the right', role: 'output', unit: 'signal units', description: 'The right-hand limit is also 2a in this story. Agreement of the two one-sided limits gives the shared limit.' },
      gap: { label: 'Current separation of probe signals', role: 'intermediate', unit: 'signal units', description: 'This nonnegative difference compares the two finite signal readings. Small sampled separation alone does not prove a limit.' },
      functionAtPoint: { label: 'Function value at the junction', role: 'reference', unit: 'signal units', description: 'The removable-hole rule is undefined exactly at a. In the separate jump mode the filled point is a; neither point value alone determines a limit.' },
      output: { label: 'Two-sided approached signal', role: 'output', unit: 'signal units', description: 'The output readout gives 2a, established by the nearby rule x + a. It is the limit, while the original function remains undefined at a.' }
    },
    'signed-accumulation': {
      time: { label: 'Elapsed cart time', role: 'input', unit: 's', description: 'The cyan time cursor sets the right boundary of the velocity area, measured in seconds after the cart starts.' },
      initial: { label: 'Initial cart velocity', role: 'reference', unit: 'm/s', description: 'The cart starts with velocity two metres per second in the forward direction, at track position zero.' },
      rate: { label: 'Constant cart acceleration', role: 'reference', unit: 'm/s²', description: 'The velocity falls by one metre per second each second. This constant negative acceleration eventually reverses the cart.' },
      velocity: { label: 'Velocity at the time boundary', role: 'intermediate', unit: 'm/s', description: 'The velocity line height at the cyan cursor is initial velocity plus acceleration times elapsed time; its sign gives direction.' },
      finalVelocity: { label: 'Velocity at the time boundary', role: 'intermediate', unit: 'm/s', description: 'This endpoint velocity is the height of the velocity line at the selected end time, with sign recording direction.' },
      positiveArea: { label: 'Forward velocity area', role: 'intermediate', unit: 'm', description: 'The positive area magnitude above the time axis contributes forward displacement. Its units are metres.' },
      negativeArea: { label: 'Backward velocity area size', role: 'intermediate', unit: 'm', description: 'The area below the axis is stored here as a positive magnitude. It must be subtracted when computing displacement.' },
      signedNegativeArea: { label: 'Signed backward contribution', role: 'intermediate', unit: 'm', description: 'This nonpositive contribution is minus the backward area size. Adding it to the forward area gives net displacement.' },
      partitionCount: { label: 'Number of equal rectangles', role: 'reference', unit: 'rectangles', description: 'The story uses eight equal time intervals for its finite rectangle estimates. The count is an integer.' },
      step: { label: 'Time width of each rectangle', role: 'intermediate', unit: 's', description: 'Dividing elapsed time by the rectangle count gives each subinterval width in seconds, not a velocity.' },
      leftSum: { label: 'Left-endpoint rectangle estimate', role: 'intermediate', unit: 'm', description: 'Each signed rectangle uses the velocity at its left time endpoint. The finite estimate can differ from the exact integral.' },
      rightSum: { label: 'Right-endpoint rectangle estimate', role: 'intermediate', unit: 'm', description: 'Each signed rectangle uses the velocity at its right time endpoint. With decreasing velocity this differs from the left sum.' },
      midpointSum: { label: 'Midpoint rectangle estimate', role: 'intermediate', unit: 'm', description: 'The signed rectangles sample interval midpoints. This finite sum equals the exact displacement for the story’s affine velocity; that equality is not general.' },
      netDisplacement: { label: 'Net cart displacement', role: 'output', unit: 'm', description: 'Subtracting backward area size from forward area gives the cart’s signed change in position from its zero start.' },
      distance: { label: 'Total cart distance traveled', role: 'output', unit: 'm', description: 'Adding both area magnitudes gives the full journey length in metres, even when forward and backward displacements cancel.' },
      output: { label: 'Net cart displacement', role: 'output', unit: 'm', description: 'The net readout is the cart’s position change from its starting point. It equals signed velocity area, rather than total distance traveled.' }
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
