/* Six original practical narratives. Pure data; formula strings are never executed. */
(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasFrontierStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  function freeze(value) {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze); Object.freeze(value);
    }
    return value;
  }
  const stories = freeze([
  {
    "id": "story:cart-velocity-area",
    "slug": "integral-accumulation",
    "scene": "velocity-accumulation",
    "unit": "m",
    "title": "The distance hiding under a speed graph",
    "eyebrow": "A battery cart test · integral accumulation",
    "summary": "A cart gets faster at a constant rate. Collect the area under its velocity line and see that area become distance.",
    "context": "You are sketching an ideal battery-powered cart test on a straight level track. It starts from rest and accelerates at a stipulated constant 2 m/s². The graph shows velocity against elapsed time; the track below shows the same accumulated motion. These are chosen teaching values, not test measurements.",
    "question": "How far does the cart travel during its first 4 seconds?",
    "variables": [
      {
        "key": "time",
        "symbol": "T",
        "label": "Elapsed time",
        "unit": "s",
        "min": 0,
        "max": 6,
        "step": 0.01
      }
    ],
    "parameters": {
      "time": 4,
      "rate": 2
    },
    "timeline": {
      "key": "time",
      "from": 0,
      "to": 4,
      "durationMs": 10000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Keep the velocity rule",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The fixed velocity rule",
        "focusDescription": "The slope of the velocity line is the constant acceleration. The track begins at position zero.",
        "body": "The cart starts at rest. At time {{time}} s, its constant acceleration remains {{rate}} m/s². The fixed sloping line is the velocity rule, not the cart’s physical path.",
        "formula": "v(t) = {{rate}}t; s(0) = 0 m"
      },
      {
        "id": "input",
        "title": "Move the time boundary",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "Time sets the area boundary",
        "focusDescription": "The cyan cursor moves right in seconds, changing both the triangle’s width and its endpoint height.",
        "body": "Drag elapsed time, now {{time}} s. Follow the cyan vertical cursor: it selects the endpoint velocity {{velocity}} m/s and the width of the area being collected.",
        "formula": "T = {{time}} s; v(T) = {{rate}} × {{time}} = {{velocity}} m/s"
      },
      {
        "id": "calculate",
        "title": "Collect the velocity triangle",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "The accumulated velocity area",
        "focusDescription": "The shaded triangle adds all the small velocity-times-time contributions from the start up to the cursor.",
        "body": "At time {{time}} s, the triangle has width {{time}} s and height {{velocity}} m/s. Its area {{triangleArea}} m is the accumulated distance.",
        "formula": "Area = ½ × {{time}} × {{velocity}} = {{triangleArea}} m"
      },
      {
        "id": "solve",
        "title": "Carry the area onto the track",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The distance traveled",
        "focusDescription": "The gold cart position and track bracket represent the velocity graph’s accumulated area, in metres.",
        "body": "After {{time}} s the cart is {{output}} m from the start. The gold track bracket carries the same number as the shaded area. Return to 4 seconds to answer the test question.",
        "formula": "s(T) = ∫₀ᵀ v(t) dt = ½ × {{rate}} × {{time}}² = {{output}} m"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose the time",
        "template": "T = {{time}} s",
        "description": "The cyan cursor sets the right edge of the accumulation interval."
      },
      {
        "role": "intermediate",
        "label": "Accumulate the changing velocity",
        "template": "½ × {{time}} × {{velocity}} = {{triangleArea}} m",
        "description": "The area of this triangular velocity graph is time multiplied by endpoint velocity, divided by two."
      },
      {
        "role": "output",
        "label": "Move the cart by that distance",
        "template": "s(T) = {{output}} m",
        "description": "The gold track distance is the same quantity as the accumulated graph area."
      }
    ],
    "conclusion": "At 4 seconds the cart reaches 8 m/s. The triangular velocity–time area is ½ × 4 s × 8 m/s = 16 m, so the cart travels 16 m from rest.",
    "assumptions": [
      "Acceleration is a constant 2 m/s², initial velocity is zero, and motion stays forward on a straight track.",
      "The shaded graph area has units seconds × metres per second = metres; it is not physical ground area.",
      "The illustration excludes power limits, friction, braking and measured motor behavior."
    ],
    "sourceRefs": [
      "source:openstax:net-change"
    ]
  },
  {
    "id": "story:fixed-fence-garden",
    "slug": "quadratic-optimization",
    "scene": "garden-optimum",
    "unit": "m²",
    "title": "More garden from the same fence",
    "eyebrow": "A garden fence plan · quadratic optimization",
    "summary": "Keep 20 metres of fence. Trade width for length and watch the enclosed area approach its largest value.",
    "context": "You have 20 m of fence for all four sides of a rectangular community garden. Every extra metre of width uses a metre on each of two sides, so the other pair must shrink. The plan ignores a gate opening, post thickness and site constraints.",
    "question": "Which rectangle encloses the largest area with 20 m of fence?",
    "variables": [
      {
        "key": "width",
        "symbol": "w",
        "label": "Garden width",
        "unit": "m",
        "min": 0.5,
        "max": 9.5,
        "step": 0.01
      }
    ],
    "parameters": {
      "width": 5,
      "perimeter": 20
    },
    "timeline": {
      "key": "width",
      "from": 1,
      "to": 5,
      "durationMs": 10000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Keep the fence budget",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The fixed fence budget",
        "focusDescription": "All four side lengths add to the fixed perimeter; the mint graph vertex marks the maximum-area rectangle.",
        "body": "At width {{width}} m, the total fence remains {{perimeter}} m. Both pairs of opposite sides use the same fixed budget. The mint graph point marks the maximum area, reached when the rectangle is a square.",
        "formula": "2w + 2ℓ = {{perimeter}} m"
      },
      {
        "id": "input",
        "title": "Trade width for length",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "Width trades against the other side",
        "focusDescription": "The cyan width grows as the violet other side shrinks; the total perimeter stays fixed.",
        "body": "Drag width, now {{width}} m. The other side becomes {{otherSide}} m because half the fence must cover one width and one length. Follow the cyan and violet brackets together.",
        "formula": "ℓ = {{perimeter}}/2 − {{width}} = {{otherSide}} m"
      },
      {
        "id": "calculate",
        "title": "Multiply the two sides",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "The two lengths produce area",
        "focusDescription": "The current rectangle’s filled area and the corresponding curve point measure the same product in square metres.",
        "body": "At width {{width}} m, multiply it by the matching length {{otherSide}} m. The filled rectangle now encloses {{area}} m², and its graph point lies on the quadratic area curve.",
        "formula": "A = {{width}} × {{otherSide}} = {{area}} m²"
      },
      {
        "id": "solve",
        "title": "Find the top of the curve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The current area versus its maximum",
        "focusDescription": "The gold area and graph point approach their maximum at the square’s maximum-area point; moving beyond it reduces area.",
        "body": "The current width is {{width}} m and the area is {{output}} m². Compare with the optimum width {{optimumWidth}} m: that square encloses {{maxArea}} m² with the same fence.",
        "formula": "A(w) = P²/16 − (w − P/4)²; current A = {{output}} m²"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set the width",
        "template": "w = {{width}} m; P = {{perimeter}} m",
        "description": "The cyan side is the chosen width; the fence budget stays fixed."
      },
      {
        "role": "intermediate",
        "label": "Use the constraint",
        "template": "ℓ = {{perimeter}}/2 − {{width}} = {{otherSide}} m",
        "description": "The violet side uses the remaining half-perimeter."
      },
      {
        "role": "output",
        "label": "Fill the rectangle",
        "template": "A = {{width}} × {{otherSide}} = {{output}} m²",
        "description": "The gold fill measures the product; the curve shows how that product changes."
      }
    ],
    "conclusion": "With a 20 m perimeter, width and length add to 10 m. The largest area is 25 m² at 5 m × 5 m; completing the square gives A = 25 − (w − 5)².",
    "assumptions": [
      "The same 20 m of fence encloses all four sides of a flat rectangle.",
      "The optimum shown is among rectangles only; circles and other boundaries are not compared.",
      "Fence thickness, gate openings, land constraints and costs are excluded."
    ],
    "sourceRefs": [
      "source:openstax:optimization"
    ]
  },
  {
    "id": "story:sticker-transform",
    "slug": "complex-multiplication",
    "scene": "complex-transform",
    "unit": "coordinate units",
    "title": "Turn and grow a point with one multiplier",
    "eyebrow": "A graphic layout transform · complex multiplication",
    "summary": "A point starts at 2 + i. Change the multiplier and watch its two coordinates move as one transformation.",
    "context": "You are placing a graphic point on a flat design grid at z = 2 + i, meaning 2 units right and 1 unit up from the origin. Multiply the point by w = 1 + vi. As the imaginary part v changes, the same operation rotates and scales the original point about the origin.",
    "question": "Where does the point land when the multiplier is 1 + i?",
    "variables": [
      {
        "key": "imag",
        "symbol": "v",
        "label": "Multiplier imaginary part",
        "unit": "coordinate units",
        "min": -2,
        "max": 2,
        "step": 0.01
      }
    ],
    "parameters": {
      "real": 1,
      "imag": 1
    },
    "timeline": {
      "key": "imag",
      "from": 0,
      "to": 1,
      "durationMs": 10000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Keep the original point",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The fixed starting point",
        "focusDescription": "The white reference vector remains at horizontal coordinate 2 and vertical coordinate 1.",
        "body": "The original point stays at 2 + i. The multiplier is currently {{real}} + {{imag}}i. Compare its position with the fixed reference vector from the origin.",
        "formula": "z = 2 + i; w = {{real}} + {{imag}}i"
      },
      {
        "id": "input",
        "title": "Change the multiplier",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "The imaginary part of the multiplier",
        "focusDescription": "The cyan multiplier vector changes its length and angle as its imaginary coordinate moves.",
        "body": "Drag the imaginary part, now {{imag}}. The real part stays {{real}}. The cyan multiplier determines a scale and a turn about the origin; it is not a translation.",
        "formula": "w = {{real}} + {{imag}}i; |w| = {{multiplierModulus}}"
      },
      {
        "id": "calculate",
        "title": "Collect real and imaginary terms",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "The two product coordinates",
        "focusDescription": "The violet coordinate projections expose the real and imaginary components of the gold product point.",
        "body": "With imaginary multiplier part {{imag}}, the horizontal term becomes {{realPart}} and the vertical term becomes {{imagPart}}. The i² = −1 rule sends the product of imaginary terms into the real coordinate.",
        "formula": "(2 + i)({{real}} + {{imag}}i) = (2×{{real}} − {{imag}}) + i({{real}} + 2×{{imag}})"
      },
      {
        "id": "solve",
        "title": "Place the transformed point",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The transformed point",
        "focusDescription": "The gold endpoint is located by both output coordinates; its distance is the product modulus, not its horizontal coordinate.",
        "body": "At imaginary multiplier part {{imag}}, the point is at ({{output}}, {{imagPart}}). Its distance from the origin is {{modulus}} grid units. Return the multiplier to 1 + i to reach (1, 3).",
        "formula": "Product = {{realPart}} + {{imagPart}}i; horizontal coordinate = {{output}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set the multiplier",
        "template": "w = {{real}} + {{imag}}i",
        "description": "The cyan vector supplies the two multiplier components."
      },
      {
        "role": "intermediate",
        "label": "Multiply and collect terms",
        "template": "Re = 2×{{real}} − {{imag}}; Im = {{real}} + 2×{{imag}}",
        "description": "The relation i² = −1 turns the product of imaginary terms into a negative real term."
      },
      {
        "role": "output",
        "label": "Locate the product",
        "template": "(Re, Im) = ({{output}}, {{imagPart}})",
        "description": "The gold point follows the horizontal and vertical projections together."
      }
    ],
    "conclusion": "(2 + i)(1 + i) = 2 + 2i + i + i² = 1 + 3i. The point lands at coordinates (1, 3). Its length grows from √5 to √10 and its angle increases by 45°.",
    "assumptions": [
      "The input point is fixed at 2 + i; the multiplier’s real part stays 1 in this story.",
      "Coordinates use a flat complex plane with a common arbitrary grid unit.",
      "The displayed primary number is the horizontal coordinate; both coordinates are needed to locate the product.",
      "A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle."
    ],
    "sourceRefs": [
      "source:openstax:complex-polar"
    ]
  },
  {
    "id": "story:inspection-flags",
    "slug": "bayes-theorem",
    "scene": "inspection-bayes",
    "unit": "fraction of flagged items",
    "title": "What does an inspection flag mean?",
    "eyebrow": "A factory quality thought experiment · Bayes’ theorem",
    "summary": "A flag can come from a defect or a false alarm. Follow both streams before reading the flagged pool.",
    "context": "Imagine a constructed batch of parts. The inspection system flags 0.9 of defective parts and 0.1 of nondefective parts. Change the starting defective fraction while those two inspection rates remain fixed. The diagram uses continuous proportions, so its blocks are not literal counts of individual parts.",
    "question": "If the starting defective fraction is 0.1, what fraction of flagged parts is actually defective?",
    "variables": [
      {
        "key": "prior",
        "symbol": "p",
        "label": "Starting defective fraction",
        "unit": "fraction",
        "min": 0.01,
        "max": 0.99,
        "step": 0.001
      }
    ],
    "parameters": {
      "prior": 0.1,
      "sensitivity": 0.9,
      "falsePositive": 0.1
    },
    "timeline": {
      "key": "prior",
      "from": 0.01,
      "to": 0.1,
      "durationMs": 10000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Keep the inspection rates",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The fixed conditional flag rates",
        "focusDescription": "The inspection probabilities are held fixed separately within the defective and nondefective starting groups.",
        "body": "At starting defective fraction {{prior}}, the system still flags {{sensitivity}} of defective parts and {{falsePositive}} of nondefective parts. These are conditional rates with different starting groups.",
        "formula": "P(+ | D) = {{sensitivity}}; P(+ | not D) = {{falsePositive}}"
      },
      {
        "id": "input",
        "title": "Change the starting mix",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "The starting defective fraction",
        "focusDescription": "The cyan prior changes the original population split before any inspection flag is observed.",
        "body": "Drag the starting defective fraction, now {{prior}}. The cyan group changes size, and the complementary nondefective group uses the rest of the batch. Do not confuse this prior fraction with the answer after seeing a flag.",
        "formula": "P(D) = {{prior}}; P(not D) = 1 − {{prior}}"
      },
      {
        "id": "calculate",
        "title": "Collect both kinds of flags",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "Both streams entering the flagged pool",
        "focusDescription": "The violet true-flag and orange false-alarm bars measure joint fractions of the whole batch; both contribute to the flagged denominator.",
        "body": "At starting defective fraction {{prior}}, the defective-and-flagged stream is {{truePositive}} of the whole batch. The false-alarm stream is {{falseAlarm}}. Together they make a flagged fraction of {{positiveRate}}.",
        "formula": "True flags = {{prior}} × {{sensitivity}} = {{truePositive}}; all flags = {{positiveRate}}"
      },
      {
        "id": "solve",
        "title": "Look only inside the flagged pool",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The defective share after a flag",
        "focusDescription": "The gold share compares true flags with all flags; it is a conditional fraction, not the system’s sensitivity.",
        "body": "With prior {{prior}}, the defective fraction among flagged parts is {{output}}. The gold proportion uses the flagged pool as its new denominator. Return the prior to 0.1 to see an answer of 0.5, or 50%.",
        "formula": "P(D | +) = {{truePositive}} / ({{truePositive}} + {{falseAlarm}}) = {{output}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose the starting mix",
        "template": "p = {{prior}}; s = {{sensitivity}}; f = {{falsePositive}}",
        "description": "The cyan initial split combines with fixed inspection rates."
      },
      {
        "role": "intermediate",
        "label": "Find both flag streams",
        "template": "True = {{truePositive}}; false = {{falseAlarm}}; all = {{positiveRate}}",
        "description": "Each stream is measured as a fraction of the original batch."
      },
      {
        "role": "output",
        "label": "Condition on receiving a flag",
        "template": "P(D | +) = {{truePositive}} / {{positiveRate}} = {{output}}",
        "description": "The gold pool uses only flagged parts in its denominator."
      }
    ],
    "conclusion": "The defective-and-flagged fraction is 0.1 × 0.9 = 0.09. The nondefective-and-flagged fraction is 0.9 × 0.1 = 0.09. Of all flagged parts, 0.09/(0.09+0.09) = 0.5, or 50%, are defective.",
    "assumptions": [
      "The stipulated inspection rates apply to both groups in this same constructed population.",
      "All parts are classified into exactly one of two groups: defective or nondefective.",
      "Numbers are normalized fractions between zero and one; multiply by 100 for percentages.",
      "The area diagram represents proportions rather than measured counts or a validated inspection system."
    ],
    "sourceRefs": [
      "source:psu:bayes"
    ]
  },
  {
    "id": "story:walking-shortcut",
    "slug": "graph-theory",
    "scene": "walking-network",
    "unit": "min",
    "title": "When a shortcut stops saving time",
    "eyebrow": "A walking route plan · weighted graph theory",
    "summary": "Give a bridge a changing walking time. Add complete routes and see the shortest route switch.",
    "context": "A small campus map has four places A, B, C and D. Walking times are AB = 3 min, BD = 7 min, AC = 6 min and CD = 2 min. A bridge links B and C; its walking time b is the one quantity you change. The diagram’s line lengths are a layout, not a scale drawing of walking time.",
    "question": "Which A-to-D route is shortest when the bridge takes 4 minutes?",
    "variables": [
      {
        "key": "bridge",
        "symbol": "b",
        "label": "Bridge walking time",
        "unit": "min",
        "min": 1,
        "max": 12,
        "step": 0.01
      }
    ],
    "parameters": {
      "bridge": 4
    },
    "timeline": {
      "key": "bridge",
      "from": 1,
      "to": 4,
      "durationMs": 10000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Read the fixed links",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The fixed walking links",
        "focusDescription": "The four fixed edge weights are walking minutes; their drawn line lengths are schematic.",
        "body": "The bridge now takes {{bridge}} min. Keep the other edge labels fixed: AB = 3, BD = 7, AC = 6 and CD = 2 min. Nodes mark places, and the labels supply the route weights.",
        "formula": "A–B–D: 3 + 7 = 10 min; A–C–D: 6 + 2 = {{directDistance}} min"
      },
      {
        "id": "input",
        "title": "Change one bridge weight",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "The bridge edge weight",
        "focusDescription": "The cyan B–C edge is the only changing weight. Its physical drawing does not claim a geographic scale.",
        "body": "Drag the B–C bridge time, now {{bridge}} min. The network connections stay the same. Only this edge’s cost changes, so every route using it must include the new value.",
        "formula": "B–C = {{bridge}} min"
      },
      {
        "id": "calculate",
        "title": "Add each complete route",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "The candidate route totals",
        "focusDescription": "The route totals add whole sequences of edges; the local bridge weight alone cannot decide the best path.",
        "body": "With bridge time {{bridge}} min, A–B–C–D totals {{bridgeDistance}} min. Compare it with the fixed A–C–D route at {{directDistance}} min and A–B–D at 10 min.",
        "formula": "Bridge route = 3 + {{bridge}} + 2 = {{bridgeDistance}} min"
      },
      {
        "id": "solve",
        "title": "Choose the smallest total",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The shortest complete route",
        "focusDescription": "The gold path uses the minimum complete route total. Two equally short paths are both legitimate at the switching point.",
        "body": "At bridge time {{bridge}} min, the shortest A-to-D time is {{output}} min. The gold route follows the smallest total. {{tieCount}} route or routes attain that minimum; at b = 3, two routes tie.",
        "formula": "Shortest time = min(10, {{directDistance}}, {{bridgeDistance}}) = {{output}} min"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set the bridge time",
        "template": "b = {{bridge}} min",
        "description": "The cyan edge supplies the one changing route cost."
      },
      {
        "role": "intermediate",
        "label": "Add complete route weights",
        "template": "Via bridge = 3 + {{bridge}} + 2 = {{bridgeDistance}}; via C = {{directDistance}}",
        "description": "The violet comparison uses whole paths from A to D."
      },
      {
        "role": "output",
        "label": "Highlight the minimum",
        "template": "min(10, {{directDistance}}, {{bridgeDistance}}) = {{output}} min",
        "description": "The gold path is a route attaining the smallest total; equal minima create a tie."
      }
    ],
    "conclusion": "At b = 4 min, A–B–C–D takes 3 + 4 + 2 = 9 min, while A–C–D takes 6 + 2 = 8 min. The shortest route is A–C–D. At b = 3 min these two routes tie at 8 min.",
    "assumptions": [
      "Edges are undirected, available and have positive walking-time weights.",
      "Edge weights add; waits, congestion, accessibility and uncertainty are excluded.",
      "The network drawing is schematic: displayed edge length is not its time weight.",
      "At a tie, more than one route attains the same minimum; the optimum time remains continuous while route identity can switch."
    ],
    "sourceRefs": [
      "source:cornell:shortest-paths"
    ]
  },
  {
    "id": "story:vibration-sweep",
    "slug": "resonance",
    "scene": "driven-response",
    "unit": "normalized amplitude",
    "title": "One small drive, very different motion",
    "eyebrow": "An illustrative vibration test · resonance",
    "summary": "Sweep the drive frequency of a damped oscillator. Connect two denominator terms to its changing steady amplitude.",
    "context": "Imagine an ideal spring-mounted object driven by a repeating force. Its natural angular frequency sets the frequency unit; its static deflection under the same force sets the amplitude unit. Change the drive-frequency ratio r while the damping ratio stays 0.2. The scene compares settled responses, not the transient motion during a real rapid frequency sweep.",
    "question": "What is the normalized steady amplitude when the drive-frequency ratio reaches 1 with damping ratio 0.2?",
    "variables": [
      {
        "key": "frequency",
        "symbol": "r",
        "label": "Drive frequency ratio",
        "unit": "ratio",
        "min": 0.2,
        "max": 2,
        "step": 0.005
      }
    ],
    "parameters": {
      "frequency": 1,
      "damping": 0.2
    },
    "timeline": {
      "key": "frequency",
      "from": 0.2,
      "to": 1,
      "durationMs": 12000
    },
    "steps": [
      {
        "id": "reference",
        "title": "Hold the oscillator and damping fixed",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "focusLabel": "The normalized oscillator reference",
        "focusDescription": "The natural frequency and static-deflection amplitude define the dimensionless reference scales.",
        "body": "At drive ratio {{frequency}}, damping stays {{damping}}. The reference length is the static deflection, assigned amplitude 1. This lets us compare motion sizes without specifying a particular spring or mass.",
        "formula": "Natural frequency ratio = 1; damping ζ = {{damping}}"
      },
      {
        "id": "input",
        "title": "Sweep the drive frequency",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "focusLabel": "The drive frequency ratio",
        "focusDescription": "The cyan ratio changes the drive frequency and selects the current point of the steady-response curve.",
        "body": "Drag the drive ratio, now {{frequency}}. It compares the forcing frequency with the undamped natural frequency. The cyan cursor moves across predictions of separately settled responses.",
        "formula": "r = {{frequency}}; detuning = 1 − {{frequency}}² = {{detuning}}"
      },
      {
        "id": "calculate",
        "title": "Combine detuning and damping",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "focusLabel": "The two response-denominator terms",
        "focusDescription": "The violet quantities combine in quadrature. Damping keeps the denominator positive at ratio 1.",
        "body": "At drive ratio {{frequency}}, the detuning term is {{detuning}} and the damping term is {{dampingTerm}}. Their squared sum gives a denominator of {{denominator}}. Smaller denominator means a larger steady amplitude.",
        "formula": "D = √({{detuning}}² + {{dampingTerm}}²) = {{denominator}}"
      },
      {
        "id": "solve",
        "title": "Read the settled motion size",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "focusLabel": "The steady displacement amplitude",
        "focusDescription": "The gold amplitude envelope measures the settled response relative to static deflection, not an accumulating transient or an instability threshold.",
        "body": "At drive ratio {{frequency}}, the normalized steady amplitude is {{output}}. The gold amplitude envelope and response-curve point use that same size. Return to ratio 1 for an amplitude of 2.5; the actual peak is slightly below 1.",
        "formula": "R = 1 / {{denominator}} = {{output}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose the drive ratio",
        "template": "r = {{frequency}}; ζ = {{damping}}",
        "description": "The cyan cursor selects the drive-to-natural frequency ratio."
      },
      {
        "role": "intermediate",
        "label": "Build the denominator",
        "template": "D = √({{detuning}}² + {{dampingTerm}}²) = {{denominator}}",
        "description": "The violet detuning and damping contributions combine as a sum of squares."
      },
      {
        "role": "output",
        "label": "Set the motion amplitude",
        "template": "R = 1 / {{denominator}} = {{output}}",
        "description": "The gold amplitude envelope size is the reciprocal of that positive denominator."
      }
    ],
    "conclusion": "At frequency ratio 1, detuning is 0 and the damping term is 2 × 0.2 × 1 = 0.4. The amplitude is 1/0.4 = 2.5 static-deflection units. The displacement peak for this damping is near √0.92 ≈ 0.9592, slightly below 1.",
    "assumptions": [
      "The model is a linear viscously damped oscillator with a sinusoidal force of fixed amplitude.",
      "Frequency ratio means drive angular frequency divided by undamped natural angular frequency.",
      "Each displayed amplitude is a separate steady-state prediction; startup transients and the history of a real sweep are excluded.",
      "The displacement-amplitude peak shifts below ratio 1 when damping is positive; ratio 1 is the story’s comparison point, not a universal resonance location.",
      "Nonlinear effects, material limits and physical safety thresholds are outside the model."
    ],
    "sourceRefs": [
      "source:utexas:driven-oscillator"
    ]
  }
]);
  const links = freeze({
  "integral-accumulation": {
    "variableKey": "time",
    "symbol": "T",
    "variableLabel": "Elapsed time",
    "unit": "s",
    "effectLabel": "The cyan time cursor widens the shaded velocity triangle; its gold area determines the cart’s distance along the track.",
    "steps": [
      {
        "focus": "reference",
        "label": "The fixed velocity rule",
        "description": "The slope of the velocity line is the constant acceleration. The track begins at position zero."
      },
      {
        "focus": "input",
        "label": "Time sets the area boundary",
        "description": "The cyan cursor moves right in seconds, changing both the triangle’s width and its endpoint height."
      },
      {
        "focus": "intermediate",
        "label": "The accumulated velocity area",
        "description": "The shaded triangle adds all the small velocity-times-time contributions from the start up to the cursor."
      },
      {
        "focus": "output",
        "label": "The distance traveled",
        "description": "The gold cart position and track bracket represent the velocity graph’s accumulated area, in metres."
      }
    ]
  },
  "quadratic-optimization": {
    "variableKey": "width",
    "symbol": "w",
    "variableLabel": "Garden width",
    "unit": "m",
    "effectLabel": "The cyan width changes one pair of sides while the violet length compensates; the gold area and graph point move together.",
    "steps": [
      {
        "focus": "reference",
        "label": "The fixed fence budget",
        "description": "All four side lengths add to the fixed perimeter; the mint graph vertex marks the maximum-area rectangle."
      },
      {
        "focus": "input",
        "label": "Width trades against the other side",
        "description": "The cyan width grows as the violet other side shrinks; the total perimeter stays fixed."
      },
      {
        "focus": "intermediate",
        "label": "The two lengths produce area",
        "description": "The current rectangle’s filled area and the corresponding curve point measure the same product in square metres."
      },
      {
        "focus": "output",
        "label": "The current area versus its maximum",
        "description": "The gold area and graph point approach their maximum at the square’s maximum-area point; moving beyond it reduces area."
      }
    ]
  },
  "complex-multiplication": {
    "variableKey": "imag",
    "symbol": "v",
    "variableLabel": "Multiplier imaginary part",
    "unit": "coordinate units",
    "effectLabel": "The cyan multiplier changes the gold product point; violet component arrows expose where both product coordinates come from.",
    "steps": [
      {
        "focus": "reference",
        "label": "The fixed starting point",
        "description": "The white reference vector remains at horizontal coordinate 2 and vertical coordinate 1."
      },
      {
        "focus": "input",
        "label": "The imaginary part of the multiplier",
        "description": "The cyan multiplier vector changes its length and angle as its imaginary coordinate moves."
      },
      {
        "focus": "intermediate",
        "label": "The two product coordinates",
        "description": "The violet coordinate projections expose the real and imaginary components of the gold product point."
      },
      {
        "focus": "output",
        "label": "The transformed point",
        "description": "The gold endpoint is located by both output coordinates; its distance is the product modulus, not its horizontal coordinate."
      }
    ]
  },
  "bayes-theorem": {
    "variableKey": "prior",
    "symbol": "p",
    "variableLabel": "Starting defective fraction",
    "unit": "fraction",
    "effectLabel": "The cyan prior resizes the two starting groups; violet true flags and orange false alarms form the flagged pool; its gold proportion shows the defective share.",
    "steps": [
      {
        "focus": "reference",
        "label": "The fixed conditional flag rates",
        "description": "The inspection probabilities are held fixed separately within the defective and nondefective starting groups."
      },
      {
        "focus": "input",
        "label": "The starting defective fraction",
        "description": "The cyan prior changes the original population split before any inspection flag is observed."
      },
      {
        "focus": "intermediate",
        "label": "Both streams entering the flagged pool",
        "description": "The violet true-flag and orange false-alarm bars measure joint fractions of the whole batch; both contribute to the flagged denominator."
      },
      {
        "focus": "output",
        "label": "The defective share after a flag",
        "description": "The gold share compares true flags with all flags; it is a conditional fraction, not the system’s sensitivity."
      }
    ]
  },
  "graph-theory": {
    "variableKey": "bridge",
    "symbol": "b",
    "variableLabel": "Bridge walking time",
    "unit": "min",
    "effectLabel": "The cyan bridge weight changes one edge; violet path sums feed the gold shortest-route highlight and total.",
    "steps": [
      {
        "focus": "reference",
        "label": "The fixed walking links",
        "description": "The four fixed edge weights are walking minutes; their drawn line lengths are schematic."
      },
      {
        "focus": "input",
        "label": "The bridge edge weight",
        "description": "The cyan B–C edge is the only changing weight. Its physical drawing does not claim a geographic scale."
      },
      {
        "focus": "intermediate",
        "label": "The candidate route totals",
        "description": "The route totals add whole sequences of edges; the local bridge weight alone cannot decide the best path."
      },
      {
        "focus": "output",
        "label": "The shortest complete route",
        "description": "The gold path uses the minimum complete route total. Two equally short paths are both legitimate at the switching point."
      }
    ]
  },
  "resonance": {
    "variableKey": "frequency",
    "symbol": "r",
    "variableLabel": "Drive frequency ratio",
    "unit": "ratio",
    "effectLabel": "The cyan frequency cursor moves across the response curve; violet detuning and damping terms set the denominator that controls the gold amplitude envelope.",
    "steps": [
      {
        "focus": "reference",
        "label": "The normalized oscillator reference",
        "description": "The natural frequency and static-deflection amplitude define the dimensionless reference scales."
      },
      {
        "focus": "input",
        "label": "The drive frequency ratio",
        "description": "The cyan ratio changes the drive frequency and selects the current point of the steady-response curve."
      },
      {
        "focus": "intermediate",
        "label": "The two response-denominator terms",
        "description": "The violet quantities combine in quadrature. Damping keeps the denominator positive at ratio 1."
      },
      {
        "focus": "output",
        "label": "The steady displacement amplitude",
        "description": "The gold amplitude envelope measures the settled response relative to static deflection, not an accumulating transient or an instability threshold."
      }
    ]
  }
});
  const quantities = freeze({
  "integral-accumulation": {
    "time": {
      "label": "Elapsed time",
      "role": "input",
      "description": "The cyan cursor selects elapsed seconds and sets the right boundary of the shaded velocity area."
    },
    "rate": {
      "label": "Constant acceleration",
      "role": "reference",
      "description": "The fixed slope is 2 metres per second squared; the cart starts from rest."
    },
    "velocity": {
      "label": "Current velocity",
      "role": "intermediate",
      "description": "The height of the velocity line at the cyan time cursor is acceleration multiplied by elapsed time, in m/s."
    },
    "triangleArea": {
      "label": "Accumulated velocity area",
      "role": "intermediate",
      "description": "The shaded velocity–time triangle measures distance in metres, rather than geometric ground area."
    },
    "distance": {
      "label": "Traveled distance",
      "role": "output",
      "description": "The gold bracket on the track measures the cart’s distance from its start in metres."
    },
    "output": {
      "label": "Traveled distance",
      "role": "output",
      "description": "The gold cart position equals the integral of velocity from zero to the current time, in metres."
    }
  },
  "quadratic-optimization": {
    "width": {
      "label": "Garden width",
      "role": "input",
      "description": "The cyan bracket measures the chosen width in metres."
    },
    "perimeter": {
      "label": "Fixed fence perimeter",
      "role": "reference",
      "description": "The four sides together use this constant fence length in metres."
    },
    "otherSide": {
      "label": "Compensating garden length",
      "role": "intermediate",
      "description": "The violet side equals half the perimeter minus the width, keeping the fence budget unchanged."
    },
    "optimumWidth": {
      "label": "Maximum-area width",
      "role": "reference",
      "description": "One quarter of the perimeter gives each side of the maximum-area square in metres."
    },
    "maxArea": {
      "label": "Maximum rectangular area",
      "role": "reference",
      "description": "The mint graph vertex marks this largest rectangular area for the given perimeter, in square metres."
    },
    "area": {
      "label": "Current garden area",
      "role": "output",
      "description": "The filled rectangle and current graph point represent width times length, in square metres."
    },
    "output": {
      "label": "Current garden area",
      "role": "output",
      "description": "The gold rectangle’s area changes while its boundary length stays fixed."
    }
  },
  "complex-multiplication": {
    "real": {
      "label": "Multiplier real part",
      "role": "reference",
      "description": "The multiplier’s horizontal coordinate stays 1 in this story; the lab can also vary it."
    },
    "imag": {
      "label": "Multiplier imaginary part",
      "role": "input",
      "description": "The cyan multiplier’s vertical coordinate controls the changing turn and scale."
    },
    "multiplierModulus": {
      "label": "Multiplier length",
      "role": "intermediate",
      "description": "The cyan multiplier’s distance from the origin is its modulus and the product’s length scale factor."
    },
    "realPart": {
      "label": "Product horizontal coordinate",
      "role": "output",
      "description": "The gold point’s horizontal projection equals two times the multiplier real part minus its imaginary part."
    },
    "imagPart": {
      "label": "Product vertical coordinate",
      "role": "output",
      "description": "The gold point’s vertical projection equals the multiplier real part plus twice its imaginary part."
    },
    "modulus": {
      "label": "Product length",
      "role": "output",
      "description": "The distance from the origin to the gold product point is distinct from either coordinate."
    },
    "output": {
      "label": "Product horizontal coordinate",
      "role": "output",
      "description": "The primary gold number is the horizontal coordinate only; pair it with the vertical coordinate to locate the point."
    }
  },
  "bayes-theorem": {
    "prior": {
      "label": "Starting defective fraction",
      "role": "input",
      "description": "The cyan proportion describes the original batch before a flag is known."
    },
    "sensitivity": {
      "label": "Flag rate within defective parts",
      "role": "reference",
      "description": "This fixed conditional probability applies only to the defective starting group."
    },
    "falsePositive": {
      "label": "Flag rate within nondefective parts",
      "role": "reference",
      "description": "This fixed conditional probability applies only to the nondefective starting group."
    },
    "truePositive": {
      "label": "Defective and flagged fraction",
      "role": "intermediate",
      "description": "This stream is the joint fraction prior times sensitivity, measured against the entire batch."
    },
    "falseAlarm": {
      "label": "Nondefective and flagged fraction",
      "role": "intermediate",
      "description": "This stream is the joint fraction (one minus prior) times the false-positive rate, measured against the entire batch."
    },
    "positiveRate": {
      "label": "Total flagged fraction",
      "role": "intermediate",
      "description": "Adding the two flag streams gives the fraction of the whole batch that receives a flag."
    },
    "posterior": {
      "label": "Defective fraction among flagged parts",
      "role": "output",
      "description": "The gold share divides true flags by all flags; 0.5 means 50% of flagged parts."
    },
    "output": {
      "label": "Defective fraction among flagged parts",
      "role": "output",
      "description": "The answer uses flagged parts as its denominator; it is a fraction, so 0.5 corresponds to 50%."
    }
  },
  "graph-theory": {
    "bridge": {
      "label": "B–C bridge walking time",
      "role": "input",
      "description": "The cyan edge label is the changing walking time in minutes, not its drawn geometric length."
    },
    "directDistance": {
      "label": "A–C–D walking time",
      "role": "reference",
      "description": "The fixed route via C takes 6+2=8 minutes, measured as an additive edge weight."
    },
    "bridgeDistance": {
      "label": "A–B–C–D walking time",
      "role": "intermediate",
      "description": "The bridge route sums 3 minutes, the current bridge time, and 2 minutes."
    },
    "tieCount": {
      "label": "Number of shortest routes",
      "role": "output",
      "description": "At bridge time 3 minutes two routes tie; otherwise this graph has one shortest route."
    },
    "shortestDistance": {
      "label": "Shortest A-to-D walking time",
      "role": "output",
      "description": "The gold route attains the smallest sum of edge walking times, in minutes."
    },
    "output": {
      "label": "Shortest A-to-D walking time",
      "role": "output",
      "description": "The gold route total is a minimum over complete paths; its route identity can switch while this time stays continuous."
    }
  },
  "resonance": {
    "frequency": {
      "label": "Drive-to-natural frequency ratio",
      "role": "input",
      "description": "The cyan cursor selects drive angular frequency divided by undamped natural angular frequency."
    },
    "damping": {
      "label": "Damping ratio",
      "role": "reference",
      "description": "The fixed positive dimensionless damping ratio sets the strength of viscous energy loss."
    },
    "detuning": {
      "label": "Detuning term",
      "role": "intermediate",
      "description": "One minus the squared frequency ratio is the stiffness-versus-inertia term; it can be positive, zero or negative."
    },
    "dampingTerm": {
      "label": "Damping contribution",
      "role": "intermediate",
      "description": "Twice the damping ratio times the frequency ratio supplies the dissipative denominator term."
    },
    "denominator": {
      "label": "Response denominator",
      "role": "intermediate",
      "description": "The positive square root of the sum of squared detuning and damping terms determines the reciprocal amplitude."
    },
    "amplitude": {
      "label": "Normalized steady amplitude",
      "role": "output",
      "description": "The gold envelope’s amplitude is measured relative to the static deflection under the same drive-force amplitude."
    },
    "response": {
      "label": "Normalized steady response",
      "role": "output",
      "description": "This is the same dimensionless settled displacement amplitude as the gold response curve."
    },
    "output": {
      "label": "Normalized steady amplitude",
      "role": "output",
      "description": "The gold envelope size is a steady-state displacement amplitude; the damping-dependent peak need not occur at ratio 1."
    }
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
