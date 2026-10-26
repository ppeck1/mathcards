(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasLifeStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // Story content is separate from the numerical models and scene renderers.
  // No formula string is evaluated. The view substitutes validated model values.
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  }
  const stories = freeze([
    {
      id: 'story:patio-border', slug: 'function-composition', scene: 'patio',
      title: 'Room for a garden border', eyebrow: 'A garden plan · composition',
      summary: 'First grow the side. Then square it. See why a wider border needs much more space.',
      context: 'You have a square herb patch, 1 m on each side. You are planning an equally wide paved border around it. A border adds width on both sides, so changing one width changes two edges of the outer square.',
      question: 'How much total ground does the patch plus a 2 m border occupy?',
      variables: [{ key: 'x', symbol: 'x', label: 'Border width', unit: 'm', min: 0, max: 4, step: 0.01 }],
      parameters: { a: 1, b: 0, c: 0, m: 2, n: 1, x: 2, order: 'f_after_g' },
      timeline: { key: 'x', from: 0, to: 2, durationMs: 10000 },
      steps: [
        { id: 'start', title: 'Start with the patch', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The fixed herb patch', focusDescription: 'The small center square stays 1 m by 1 m as the border changes.',
          body: 'The original patch stays 1 m by 1 m. The border width is now {{x}} m. Drag it and compare the moving outer edges with the fixed center patch.',
          formula: 'Original side = 1 m; original area = 1 m²' },
        { id: 'side', title: 'Add both sides', from: 0.25, to: 0.5,
          focus: 'intermediate', focusLabel: 'The outside side length', focusDescription: 'The dimension line follows the full side: one patch plus a border on each end.',
          body: 'A border of {{x}} m adds that width on both sides of the patch. Follow the dimension line: the outside side is now {{intermediate}} m. This is the first transformation, g.',
          formula: 'g({{x}}) = 2 × {{x}} + 1 = {{intermediate}} m' },
        { id: 'area', title: 'Turn the side into area', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'The whole footprint', focusDescription: 'The full square changes in width and height; its filled area is the total footprint.',
          body: 'With a border of {{x}} m, both dimensions become {{intermediate}} m. The whole filled square covers {{output}} m². Widening two dimensions makes area grow faster than border width.',
          formula: 'A({{x}}) = [{{intermediate}}]² = {{output}} m²' },
        { id: 'solve', title: 'Read the footprint', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'Read area from the frame', focusDescription: 'The total footprint includes the fixed herb patch and all of the surrounding border.',
          body: 'At the current border width of {{x}} m, the total footprint is {{output}} m². For paved area alone, subtract the fixed 1 m² patch. Return the width to 2 m to answer the original question.',
          formula: 'A({{x}}) = (2 × {{x}} + 1)² = {{output}} m²' }
      ],
      conclusion: 'A 2 m border gives a 5 m outside side and a 25 m² total footprint. The paved area alone is 24 m².',
      assumptions: ['An ideal square patch has a 1 m side and a uniform border.', 'The output is total plan area, not paving volume; subtract the original patch to get border area.', 'The story fixes the order as side length first, area second; reversing these transformations would change their units and meaning.'],
      sourceRefs: ['source:openstax:composition']
    },
    {
      id: 'story:camera-stops', slug: 'real-logarithm', scene: 'exposure',
      title: 'Count the light in stops', eyebrow: 'A camera experiment · logarithms',
      summary: 'A light ratio becomes a count of doubling steps. Slide between those steps and watch the scale change.',
      context: 'You are comparing two exposure settings. Take the first exposure as a positive reference of 1. The second has a chosen light-exposure ratio R relative to that reference. In the full-stop convention, each +1 stop doubles the exposure ratio.',
      question: 'How many doubling stops separate the reference exposure from a ratio of 8?',
      variables: [{ key: 'argument', symbol: 'R', label: 'Exposure ratio', unit: '× reference', min: 0.125, max: 16, step: 0.01 }],
      parameters: { base: 2, argument: 8 },
      timeline: { key: 'argument', from: 1, to: 8, durationMs: 10000 },
      steps: [
        { id: 'reference', title: 'Choose a reference', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'One reference exposure', focusDescription: 'A ratio of one is the zero-stop reference; the ratio bar uses one fixed scale.',
          body: 'The reference exposure stays at R = 1, or zero stops. Your current exposure ratio is {{argument}}. Drag the ratio and watch how much light the bar represents relative to that fixed reference.',
          formula: 'R = E₂ / E₁; log₂(1) = 0 stops' },
        { id: 'double', title: 'Follow the doublings', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'The light-ratio bar', focusDescription: 'The length of the ratio bar encodes the exposure ratio directly.',
          body: 'The light-ratio bar now represents {{argument}} times the reference. Ratios 1, 2, 4 and 8 are one stop apart: each doubles the bar length, even though the added lengths get larger.',
          formula: '1 → 2 → 4 → 8; each arrow is +1 stop' },
        { id: 'measure', title: 'Let the logarithm count', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'The count of doubling stops', focusDescription: 'The stop count is the logarithm of the bar’s exposure ratio; the picture glow is qualitative.',
          body: 'At an exposure ratio of {{argument}}, the logarithm gives {{output}} doubling stops. A ratio between the markers gives a fractional stop difference.',
          formula: 's = log₂({{argument}}) = {{output}} stops' },
        { id: 'solve', title: 'Check by going backward', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'Connect the stops back to light', focusDescription: 'Raising two to the stop count recovers the exposure ratio represented by the bar.',
          body: 'The current ratio of {{argument}} corresponds to {{output}} stops. Raise 2 to that stop count to recover the same ratio. Return the ratio to 8 for the original three-stop question.',
          formula: '2^{{output}} = {{argument}}, so log₂({{argument}}) = {{output}} stops' }
      ],
      conclusion: 'An exposure ratio of 8 is three doubling stops above the reference. Ratio 1 is zero stops; ratios below 1 give negative stops.',
      assumptions: ['Both exposures are positive and comparable, so their ratio is meaningful and dimensionless.', 'One full stop corresponds to a doubling or halving of exposure.', 'The illustrated glow is qualitative. It does not predict displayed brightness, image processing, clipping or perceived lightness.'],
      sourceRefs: ['source:openstax:log', 'source:nikon:exposure']
    },
    {
      id: 'story:motion-cart', slug: 'derivative', scene: 'motion',
      title: 'A cart that picks up speed', eyebrow: 'A motion plan · derivatives',
      summary: 'Position tells you where the cart is. The changing slope tells you how fast it is moving now.',
      context: 'You are designing a smooth animation of a cart on a straight track. For this invented motion plan, its position is s(t) = t³ meters when t is measured in seconds. The cart starts slowly and travels farther during each new second.',
      question: 'How fast is the cart moving at t = 2 seconds?',
      variables: [{ key: 'a', symbol: 't', label: 'Time on the track', unit: 's', min: 0, max: 3, step: 0.01 }],
      parameters: { preset: 'cubic', a: 2, h: 0.1 },
      timeline: { key: 'a', from: 0, to: 2, durationMs: 10000 },
      steps: [
        { id: 'position', title: 'Give the cart a position rule', from: 0, to: 0.25,
          focus: 'intermediate', focusLabel: 'The cart’s position on the track', focusDescription: 'The solid cart’s distance from the starting point is the cube of the current time.',
          body: 'At time {{a}} s, the cart is {{position}} m along the track. Drag time and follow the solid cart. Its position follows this invented rule, starting at zero when time is zero.',
          formula: 's({{a}}) = {{a}}³ = {{position}} m' },
        { id: 'interval', title: 'Measure a short trip', from: 0.25, to: 0.5,
          focus: 'intermediate', focusLabel: 'The gap to the faint cart', focusDescription: 'The faint cart is the position 0.1 seconds later; the separation is the next short trip.',
          body: 'From time {{a}} s, look 0.1 seconds ahead to the faint cart. The gap between the two positions is the next short trip. Dividing that distance by 0.1 s gives {{output}} m/s on average.',
          formula: 'Average speed = [s({{a}} + 0.1) − s({{a}})] / 0.1 = {{output}} m/s' },
        { id: 'instant', title: 'Ask about this instant', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'Speed at the solid cart', focusDescription: 'The instantaneous-speed readout belongs to the current time, rather than the finite trip to the faint cart.',
          body: 'At time {{a}} s, the instantaneous speed is {{analytic}} m/s. It is the limiting slope as the interval shrinks to zero. For this cubic rule, that slope is 3t².',
          formula: 'v({{a}}) = 3 × {{a}}² = {{analytic}} m/s' },
        { id: 'solve', title: 'Separate position from speed', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'Position and speed answer different questions', focusDescription: 'The cart location measures meters; the current speed readout measures meters per second.',
          body: 'At {{a}} s, position is {{position}} m and instantaneous speed is {{analytic}} m/s. The next 0.1-second average is {{output}} m/s. Return time to 2 s to answer the original question.',
          formula: 's({{a}}) = {{position}} m; v({{a}}) = {{analytic}} m/s' }
      ],
      conclusion: 'At 2 s the cart is at 8 m and moves at 12 m/s. Position and speed answer different questions and have different units.',
      assumptions: ['This is a constructed motion rule on a straight track for 0–3 s, not a measured physical cart.', 'The coefficient of t³ is 1 m/s³, so position has meters and speed has meters per second.', 'The finite 0.1 s secant average is separate from the analytic derivative. This forward motion makes velocity and speed agree in sign.'],
      sourceRefs: ['source:hmc:derivative']
    },
    {
      id: 'story:dinner-for-six', slug: 'ratio-scale', scene: 'recipe',
      title: 'Two more people for dinner', eyebrow: 'In the kitchen · ratio and scale',
      summary: 'A four-portion recipe becomes dinner for six. Keep each portion equal while the ingredient frame grows.',
      context: 'Your reference recipe makes four equal portions using 300 g of flour. Two more people are joining dinner, and you want six portions of the same size. Assume the flour amount per portion stays constant.',
      question: 'How much flour do you need for six equal portions?',
      variables: [{ key: 'servings', symbol: 's', label: 'Target portion-equivalents', unit: 'portions', min: 1, max: 12, step: 0.01 }],
      parameters: { servings: 6, amount: 300, baseServings: 4 },
      timeline: { key: 'servings', from: 4, to: 6, durationMs: 10000 },
      steps: [
        { id: 'reference', title: 'Keep the reference batch', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The fixed four-portion batch', focusDescription: 'The reference flour amount stays at 300 g while the target frame changes.',
          body: 'Keep the reference at 300 g for four portions. Your target is now {{servings}} portion-equivalents. Compare the changing target frame with the fixed reference on the same visual scale.',
          formula: 'Reference: 300 g ÷ 4 portions = 75 g per portion' },
        { id: 'factor', title: 'Find the batch multiplier', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Target portions set the batch size', focusDescription: 'Increasing target portions expands the target ingredient frame in direct proportion.',
          body: 'Divide the current target of {{servings}} portion-equivalents by four. The multiplier is {{factor}}. Follow the target frame as that multiplier changes its flour amount.',
          formula: 'Scale factor = {{servings}} ÷ 4 = {{factor}}' },
        { id: 'scale', title: 'Scale the flour', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'The target flour amount', focusDescription: 'The target filled frame encodes the total flour mass at the same scale as the reference.',
          body: 'Apply the same multiplier to the flour. At {{servings}} portion-equivalents, the model needs {{output}} g. The total changes smoothly while the amount per portion stays fixed.',
          formula: 'Q = 300 × ({{servings}} / 4) = {{output}} g' },
        { id: 'solve', title: 'Check every portion', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'The flour per portion stays fixed', focusDescription: 'The total frame changes, while each portion still corresponds to the same flour amount.',
          body: 'The current {{servings}} portion-equivalents need {{output}} g. Divide back by the target: each still corresponds to {{perServing}} g. Return the target to six to solve the dinner question.',
          formula: '{{output}} g ÷ {{servings}} = {{perServing}} g per portion' }
      ],
      conclusion: 'Use 450 g of flour for six equal portions: 300 × (6/4). Each portion still corresponds to 75 g.',
      assumptions: ['This constructed recipe assumes equal portion sizes and proportional flour scaling.', 'A fractional input means a portion-equivalent, not a fraction of a guest.', 'The calculation does not scale cooking time, equipment, temperature or every possible ingredient automatically.'],
      sourceRefs: ['source:openstax:proportions']
    },
    {
      id: 'story:filling-tank', slug: 'linear-model', scene: 'tank',
      title: 'Five minutes at the tap', eyebrow: 'Water in a tank · a linear model',
      summary: 'Start with what is already there. Then watch equal amounts of water arrive in equal times.',
      context: 'A tank already holds 20 L of water. You open a tap that adds 4 L per minute. There is no outflow, and the tank has enough capacity for this short filling interval.',
      question: 'How much water is in the tank after five minutes?',
      variables: [{ key: 'time', symbol: 't', label: 'Elapsed time', unit: 'min', min: 0, max: 12, step: 0.01 }],
      parameters: { initial: 20, rate: 4, time: 5 },
      timeline: { key: 'time', from: 0, to: 5, durationMs: 10000 },
      steps: [
        { id: 'initial', title: 'Mark the starting water', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The starting water stays fixed', focusDescription: 'The lower 20 L layer is present before the tap opens and stays the same size.',
          body: 'The starting 20 L is already in the tank before the tap opens. Elapsed time is now {{time}} min. Compare that fixed lower layer with the water added above it.',
          formula: 'V(0) = 20 L' },
        { id: 'rate', title: 'Let the tap run', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Elapsed time grows the added layer', focusDescription: 'More time at the fixed tap rate adds water above the original 20 L layer.',
          body: 'After {{time}} min, the tap has added {{increment}} L. Drag time and follow the upper layer. A constant 4 L/min means equal time changes always add equal volumes.',
          formula: 'Added water = (4 L/min) × {{time}} min = {{increment}} L' },
        { id: 'combine', title: 'Add the two parts', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'The moving water surface', focusDescription: 'The top surface marks total volume: the fixed initial layer plus the water added by the tap.',
          body: 'After {{time}} min, add the starting 20 L to the new {{increment}} L. Follow the top surface: it marks a total of {{output}} L, while the original lower layer stays fixed.',
          formula: 'V = 20 + 4 × {{time}} = {{output}} L' },
        { id: 'solve', title: 'Read the five-minute mark', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'Read the total at the surface', focusDescription: 'The tank’s surface follows total volume, with the initial volume and added volume kept visible.',
          body: 'At {{time}} min, the tank contains {{output}} L. Doubling elapsed time doubles the added layer while the starting 20 L stays fixed. Return time to 5 min for the original question.',
          formula: 'V({{time}}) = 20 + 4 × {{time}} = {{output}} L' }
      ],
      conclusion: 'The tank contains 40 L after five minutes: 20 L initially plus 20 L from the tap.',
      assumptions: ['The rate is stipulated as 4 L/min throughout the modeled interval.', 'There is no outflow or loss, and sufficient tank capacity is assumed.', 'A real tap’s flow and tank capacity would need measurement; these are chosen values for an illustrative model.'],
      sourceRefs: ['source:openstax:linear-functions']
    },
    {
      id: 'story:photo-previews', slug: 'exponential-change', scene: 'photo',
      title: 'A photo, smaller each time', eyebrow: 'An image workflow · exponential change',
      summary: 'Repeat an 80% resize. The same percentage removes fewer pixels as the photo gets smaller.',
      context: 'You begin with a photo that is 1200 px wide. For three successive preview versions, you keep 80% of the current width each time. Track ideal widths first; round to whole pixels only when preparing the final raster export.',
      question: 'What ideal width remains after three 80% resize passes?',
      variables: [{ key: 'time', symbol: 'n', label: 'Resize passes (fractions interpolate)', unit: 'passes', min: 0, max: 8, step: 0.01 }],
      parameters: { initial: 1200, factor: 0.8, time: 3 },
      timeline: { key: 'time', from: 0, to: 3, durationMs: 10000 },
      steps: [
        { id: 'original', title: 'Keep the original frame', from: 0, to: 0.25,
          focus: 'reference', focusLabel: 'The original photo frame', focusDescription: 'The faint frame remains 1200 px wide and provides a fixed comparison for the current width.',
          body: 'The faint original frame stays 1200 px wide. The pass coordinate is now {{time}}. Whole numbers mark completed resizes; the flow between them is geometric interpolation.',
          formula: 'W(0) = 1200 px' },
        { id: 'repeat', title: 'Use the current width', from: 0.25, to: 0.5,
          focus: 'input', focusLabel: 'Each pass scales the current frame', focusDescription: 'Increasing the pass coordinate shrinks the current frame relative to the fixed original.',
          body: 'At pass coordinate {{time}}, the current frame is {{output}} px wide. Each completed pass keeps 80% of the previous width. Follow the moving right edge as the same factor acts again.',
          formula: 'Current width = 1200 × 0.8^{{time}} = {{output}} px' },
        { id: 'power', title: 'Collect the repeated factors', from: 0.5, to: 0.75,
          focus: 'output', focusLabel: 'The current photo width', focusDescription: 'The width dimension follows the current frame’s edge; height keeps the same aspect ratio.',
          body: 'Multiplying by 0.8 repeatedly gives a power. The pass coordinate is {{time}} and the ideal width is {{output}} px. Fractional pass coordinates only describe the displayed interpolation.',
          formula: 'W(n) = 1200 × 0.8^{{time}} = {{output}} px' },
        { id: 'solve', title: 'Finish, then round', from: 0.75, to: 1,
          focus: 'output', focusLabel: 'Read ideal width, then export', focusDescription: 'The current frame tracks ideal width; rounding is applied only to the final raster export.',
          body: 'At pass coordinate {{time}}, ideal width is {{output}} px. Nearest-integer rounding would give {{rounded}} px. Return to three completed passes for the final preview, and wait until export to round.',
          formula: 'W({{time}}) = {{output}} px → {{rounded}} px at export' }
      ],
      conclusion: 'Three passes leave an ideal width of 614.4 px. With the stated final nearest-integer rounding, export at 614 px wide.',
      assumptions: ['The factor 0.8 applies to the current width at every completed integer pass.', 'Fractional pass inputs visualize the geometric interpolation W₀qⁿ; real resize operations are counted in whole passes.', 'Ideal width is unrounded until final nearest-integer export. Intermediate raster rounding can change the result.', 'The illustration tracks width only; image detail, resampling quality and file size need separate models.'],
      sourceRefs: ['source:openstax:exponential-functions']
    }
  ]);

  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(story => story.slug === slug) || null,
    find: id => stories.find(story => story.id === id) || null
  });
});
