/* Original stories use the shared host, semantic trace and animation clock. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasReasoningStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const freeze=v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v)){Object.values(v).forEach(freeze);Object.freeze(v);}return v;};
  const stories=freeze([
  {
    "id": "story:two-strip-relation",
    "slug": "relation",
    "scene": "ordered-strip-pairs",
    "unit": "pairs",
    "title": "Which two-strip choices qualify?",
    "eyebrow": "Two supplies · one combined requirement",
    "presentation": {
      "compact": true,
      "controlHint": "Lower the combined requirement. Follow the known pair into its truth value, then inspect every ordered choice in the grid."
    },
    "summary": "Connect one binary predicate to a complete set of ordered pairs and its count.",
    "context": "A workshop chooses a left strip and a right strip from two independent racks. Each rack offers lengths 2, 4, 6, 8, 10 and 12 cm, so choosing the same length twice is allowed. A pair qualifies when its total is at least h centimetres. Follow the highlighted 6 cm left strip and 8 cm right strip while h falls from 18 cm to 14 cm.",
    "question": "At h=14 cm, does the pair (6,8) qualify, and how many of the 36 ordered choices belong to the relation?",
    "variables": [
      {
        "key": "threshold",
        "symbol": "h",
        "label": "Required combined length",
        "unit": "cm",
        "min": 0,
        "max": 26,
        "step": 0.01
      }
    ],
    "parameters": {
      "threshold": 14
    },
    "timeline": {
      "key": "threshold",
      "from": 18,
      "to": 14,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the two argument positions separate",
        "focusLabel": "Left and right are ordered choices",
        "focusDescription": "The two racks provide independent choices. The highlighted pair has a specific left entry and right entry even though reversing them preserves this particular sum.",
        "body": "The known left strip is {{exampleX}} cm and the known right strip is {{exampleY}} cm. Their total is {{exampleTotal}} cm.",
        "formula": "(x,y) = ({{exampleX}},{{exampleY}}) cm; x+y = {{exampleTotal}} cm"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Change the shared requirement",
        "focusLabel": "The same h enters every binary test",
        "focusDescription": "The threshold controls whether each ordered sum meets the requirement. Every grid cell uses the same h.",
        "body": "The required total is {{threshold}} cm. The binary predicate compares x+y with that requirement.",
        "formula": "Rₕ(x,y): x+y ≥ h; h = {{threshold}} cm"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Read one pair’s membership",
        "focusLabel": "The highlighted cell corresponds to the two visible strips",
        "focusDescription": "The truth value of the known pair is one predicate result. It is separate from how many other cells also pass.",
        "body": "For the highlighted pair, {{exampleTotal}} cm compared with {{threshold}} cm gives {{exampleLabel}}.",
        "formula": "Rₕ(6,8) = {{exampleLabel}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Count the complete relation",
        "focusLabel": "Passing cells are members, and the readout counts them",
        "focusDescription": "Each cell is one ordered choice from the fixed domain product. The integer count summarizes membership without becoming a probability.",
        "body": "At this requirement, {{pairCount}} ordered pairs qualify. The highlighted pair’s membership remains {{exampleLabel}}.",
        "formula": "|Rₕ| = {{pairCount}} ordered pairs"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set the binary requirement",
        "template": "h = {{threshold}} cm; (x,y) = ({{exampleX}},{{exampleY}}) cm",
        "description": "One requirement applies to all left-right pairs."
      },
      {
        "role": "intermediate",
        "label": "Check the known pair",
        "template": "x+y = {{exampleTotal}} cm; Rₕ(6,8) = {{exampleLabel}}",
        "description": "The ordered pair supplies both arguments to the membership predicate."
      },
      {
        "role": "output",
        "label": "Count every satisfying ordered choice",
        "template": "|Rₕ| = {{pairCount}} pairs",
        "description": "The full grid includes equal lengths from the independent supplies."
      }
    ],
    "conclusion": "At h=14 cm, the highlighted pair qualifies because 6+8=14 meets equality. The six left-choice rows contain 1,2,3,4,5 and 6 passing right choices, so the relation contains 21 ordered pairs.",
    "assumptions": [
      "Two independent supplies each offer the same six lengths; equal numerical choices are allowed and left/right positions remain distinct.",
      "The complete fixed domain product has 36 ordered choices. The inclusive predicate is x+y≥h.",
      "The relation contains ordered pairs, its predicate gives one membership truth, and its size is a count."
    ],
    "sourceRefs": [
      "source:western:relations"
    ]
  },
  {
    "id": "story:panel-equivalence",
    "slug": "equivalence",
    "scene": "two-formula-paths",
    "unit": "",
    "title": "Do two different formulas always agree?",
    "eyebrow": "One panel · two formula paths",
    "presentation": {
      "compact": true,
      "controlHint": "Shorten the panel width. Follow Q through both formula paths, then compare the current row with the complete table."
    },
    "summary": "See De Morgan’s law preserve agreement while the current truth values change.",
    "context": "The workshop panel has length x=9 cm and a width y that falls from 5 cm to 3 cm. As before, P means x≥6 cm and Q means y≥4 cm. Compare two ways to say that the panel does not satisfy both requirements: ¬(P∧Q), and ¬P∨¬Q. Follow this panel’s truth values, then check every possible P/Q assignment.",
    "question": "At width y=3 cm, what does each formula say, and does the full table establish their equivalence?",
    "variables": [
      {
        "key": "width",
        "symbol": "y",
        "label": "Panel width",
        "unit": "cm",
        "min": 0,
        "max": 12,
        "step": 0.01
      }
    ],
    "parameters": {
      "length": 9,
      "width": 3,
      "comparison": "de-morgan"
    },
    "timeline": {
      "key": "width",
      "from": 5,
      "to": 3,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the first statement fixed",
        "focusLabel": "The unchanged length keeps P true",
        "focusDescription": "The two formula paths receive the same P and Q inputs. The length stays above its threshold throughout this story.",
        "body": "The length is {{length}} cm, so P is {{pLabel}}. Only the width changes.",
        "formula": "P: x≥6 cm; x = {{length}} cm → {{pLabel}}"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Move the width across its threshold",
        "focusLabel": "The moving width changes the input Q",
        "focusDescription": "Both formulas receive the exact same width statement. Equality at 4 cm belongs to the passing case.",
        "body": "The width is {{width}} cm. Its statement Q is {{qLabel}}.",
        "formula": "Q: y≥4 cm; y = {{width}} cm → {{qLabel}}"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Follow the two formula paths",
        "focusLabel": "Both expressions evaluate the same current assignment",
        "focusDescription": "The first path negates a conjunction. The second negates each input and takes their inclusive disjunction.",
        "body": "For this panel, the left formula is {{leftLabel}} and the right formula is {{rightLabel}}.",
        "formula": "¬(P∧Q) = {{leftLabel}}; ¬P∨¬Q = {{rightLabel}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Separate one match from equivalence",
        "focusLabel": "The complete table supplies the every-assignment result",
        "focusDescription": "A current match is one row. The four-row comparison establishes equivalence only when no assignment differs.",
        "body": "This row {{currentMatchLabel}}. Across all four assignments there are {{mismatchCount}} mismatches: {{equivalentLabel}}.",
        "formula": "Current row: {{currentMatchLabel}}; mismatches = {{mismatchCount}}; {{equivalentLabel}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Read the changing statement",
        "template": "y = {{width}} cm; Q = {{qLabel}}",
        "description": "The width changes one common input to both formulas."
      },
      {
        "role": "intermediate",
        "label": "Evaluate both paths",
        "template": "¬(P∧Q) = {{leftLabel}}; ¬P∨¬Q = {{rightLabel}}",
        "description": "These are current truth values at the selected panel."
      },
      {
        "role": "output",
        "label": "Check every assignment",
        "template": "All-row mismatches = {{mismatchCount}}; {{equivalentLabel}}",
        "description": "Logical equivalence belongs to the complete truth functions, not one matching row."
      }
    ],
    "conclusion": "At x=9 cm and y=3 cm, P is True and Q is False. Both ¬(P∧Q) and ¬P∨¬Q are True. The complete four-row table has zero mismatches, so this formula pair is logically equivalent even though its current truth changed as the width moved.",
    "assumptions": [
      "The two dimension statements are independent classical propositions, and all four truth assignments are represented in the table.",
      "The guided comparison is De Morgan’s correct pair. The optional playground includes an implication rewrite and a lookalike with two mismatch rows.",
      "A complete truth table establishes these propositional equivalences; the current panel alone cannot do so."
    ],
    "sourceRefs": [
      "source:openstax:equivalent-statements",
      "source:openstax:de-morgan",
      "source:openstax:truth-tables"
    ]
  },
  {
    "id": "story:panel-inference",
    "slug": "inference",
    "scene": "premises-and-conclusion",
    "unit": "",
    "title": "When do the premises support the conclusion?",
    "eyebrow": "One panel · an explicit argument",
    "presentation": {
      "compact": true,
      "controlHint": "Increase the width. Follow Q into the conditional premise, then inspect whether both premises hold and what the valid pattern licenses."
    },
    "summary": "Connect actual premise truth to a conclusion while keeping global argument validity separate.",
    "context": "Before accepting a size claim, the workshop writes down its reasoning. Let P mean the panel is at least 6 cm long and Q mean it is at least 4 cm wide. Inspect the argument “If P then Q; P; therefore Q.” The length stays 9 cm while width y rises from 3 cm to 5 cm. The premise boxes show whether the selected panel actually meets the statements used by the argument.",
    "question": "At width y=5 cm, do both premises hold, and what conclusion does modus ponens license?",
    "variables": [
      {
        "key": "width",
        "symbol": "y",
        "label": "Panel width",
        "unit": "cm",
        "min": 0,
        "max": 12,
        "step": 0.01
      }
    ],
    "parameters": {
      "length": 9,
      "width": 5,
      "argument": "modus-ponens"
    },
    "timeline": {
      "key": "width",
      "from": 3,
      "to": 5,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "State the known length comparison",
        "focusLabel": "The second premise is the statement P",
        "focusDescription": "The length remains 9 cm, so this premise stays true. It is one of the two premises needed by modus ponens.",
        "body": "The length is {{length}} cm. The statement P is {{pLabel}}.",
        "formula": "P: x≥6 cm; x = {{length}} cm → {{pLabel}}"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Evaluate the changing width statement",
        "focusLabel": "The moving panel width supplies Q",
        "focusDescription": "Q is read from the current width rather than assumed. Changing Q also changes the current truth of the conditional premise P→Q.",
        "body": "At width {{width}} cm, Q is {{qLabel}} and the conditional P→Q is {{premise1Label}}.",
        "formula": "Q = {{qLabel}}; P→Q = {{premise1Label}}"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Check every current premise",
        "focusLabel": "Both premise boxes must be true",
        "focusDescription": "A valid pattern preserves truth when its premises hold. A false current premise prevents this row from licensing a conclusion.",
        "body": "The conditional premise is {{premise1Label}} and the P premise is {{premise2Label}}. Current status: {{premisesLabel}}.",
        "formula": "P→Q: {{premise1Label}}; P: {{premise2Label}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Read the conclusion and the global validity test",
        "focusLabel": "Current conclusion truth and pattern validity are separate",
        "focusDescription": "The full table checks whether any assignment can satisfy both premises while falsifying the conclusion. A successful current row alone is not that test.",
        "body": "The current conclusion Q is {{conclusionLabel}}. The pattern is {{validityLabel}}, with {{counterexampleCount}} counterexample assignments. {{licenseLabel}}.",
        "formula": "Conclusion Q = {{conclusionLabel}}; pattern {{validityLabel}}; counterexamples = {{counterexampleCount}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Read P and Q from the panel",
        "template": "P = {{pLabel}}; Q = {{qLabel}}",
        "description": "The two dimension comparisons supply the atomic statements."
      },
      {
        "role": "intermediate",
        "label": "Inspect both premises",
        "template": "P→Q = {{premise1Label}}; P = {{premise2Label}}; {{premisesLabel}}",
        "description": "Premise satisfaction is checked for the current assignment."
      },
      {
        "role": "output",
        "label": "Separate truth from validity",
        "template": "Q = {{conclusionLabel}}; pattern {{validityLabel}}; counterexamples = {{counterexampleCount}}",
        "description": "The complete table tests argument validity independently of this conclusion’s current truth."
      }
    ],
    "conclusion": "At y=5 cm and x=9 cm, P and Q are True, so P→Q is True as well. Both modus ponens premises hold and the valid pattern licenses Q. Its complete table has no assignment with both premises true and Q false.",
    "assumptions": [
      "The panel comparisons provide independent classical propositions P and Q. The conditional is a material truth function, not an empirical size law or cause.",
      "The guided argument is modus ponens. The optional playground also compares modus tollens and invalid affirming-the-consequent reasoning.",
      "A true current conclusion does not alone establish validity. A validity counterexample requires every premise true and the conclusion false."
    ],
    "sourceRefs": [
      "source:openstax:logical-arguments",
      "source:openstax:truth-tables"
    ]
  },
  {
    "id": "story:force-at-a-handle",
    "slug": "torque",
    "scene": "pivot-force-and-lever-arm",
    "unit": "N·m",
    "title": "Which part of the pull creates a turning effect?",
    "eyebrow": "A fixed pivot · a changing force direction",
    "presentation": {
      "compact": true,
      "controlHint": "Turn the force arrow. Follow its perpendicular component and moment arm into signed torque about the same pivot."
    },
    "summary": "Resolve a force at a fixed application point into the component that produces torque.",
    "context": "A handle sketch places a force application point 0.8 m to the right of a pivot. A 10 N force acts at angle θ from the positive handle direction. Turn the force from 30° to 90° while keeping its magnitude and application point fixed. The arrow changes direction; the calculation follows its turning effect about that pivot.",
    "question": "At θ=90°, what signed torque does this force produce, and what is its perpendicular moment arm?",
    "variables": [
      {
        "key": "angle",
        "symbol": "θ",
        "label": "Force angle",
        "unit": "°",
        "min": -180,
        "max": 180,
        "step": 0.01
      }
    ],
    "parameters": {
      "arm": 0.8,
      "force": 10,
      "angle": 90
    },
    "timeline": {
      "key": "angle",
      "from": 30,
      "to": 90,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Locate the force application point",
        "focusLabel": "Distance and force use different physical units",
        "focusDescription": "The fixed bracket measures pivot-to-application distance in metres. The force arrow represents a magnitude in newtons, on its own labelled scale.",
        "body": "The application distance is {{arm}} m and the force magnitude is {{force}} N.",
        "formula": "r = {{arm}} m; F = {{force}} N"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Turn the force without changing its magnitude",
        "focusLabel": "The angle sets the signed perpendicular share",
        "focusDescription": "The force’s vertical component changes as the arrow turns. The position vector stays along positive x.",
        "body": "The force angle is {{angle}}°, with sine {{sine}}.",
        "formula": "θ = {{angle}}°; sinθ = {{sine}}"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Distinguish perpendicular force and moment arm",
        "focusLabel": "The two equivalent torque constructions use different factors",
        "focusDescription": "The signed force component uses newtons. The perpendicular distance to the force line uses metres and generally differs from the full application distance.",
        "body": "The perpendicular force is {{perpendicularForce}} N. The perpendicular moment arm is {{momentArm}} m.",
        "formula": "F⊥ = {{force}} sinθ = {{perpendicularForce}} N; d⊥ = {{arm}} |sinθ| = {{momentArm}} m"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Multiply the appropriate distance and force",
        "focusLabel": "Torque keeps its signed turning sense",
        "focusDescription": "Multiplying application distance by signed perpendicular force gives the normal torque component. Its magnitude also equals force magnitude times perpendicular moment arm.",
        "body": "The signed torque is {{output}} N·m and its magnitude is {{magnitude}} N·m.",
        "formula": "τ_z = {{arm}} × {{perpendicularForce}} = {{output}} N·m; |τ_z| = {{force}} × {{momentArm}} = {{magnitude}} N·m"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose the force direction",
        "template": "θ = {{angle}}°; F = {{force}} N; r = {{arm}} m",
        "description": "The force magnitude and application distance stay fixed."
      },
      {
        "role": "intermediate",
        "label": "Follow the perpendicular component",
        "template": "F⊥ = {{perpendicularForce}} N; d⊥ = {{momentArm}} m",
        "description": "Force projection and perpendicular distance are distinct quantities."
      },
      {
        "role": "output",
        "label": "Read signed torque about the pivot",
        "template": "τ_z = {{arm}} × {{perpendicularForce}} = {{output}} N·m",
        "description": "The sign records the turning sense in the fixed right-handed frame."
      }
    ],
    "conclusion": "At θ=90°, all 10 N of the force is perpendicular to the handle direction. The moment arm is 0.8 m, giving τ_z=0.8×10=8 N·m, with positive normal out of the page. At 30° the moment arm was only 0.4 m and the torque was 4 N·m.",
    "assumptions": [
      "The drawing is a stipulated planar torque calculation about one fixed pivot; it does not simulate motion, friction or rotational inertia.",
      "The application distance and the perpendicular moment arm are different except in special configurations. Metre and Newton drawing scales remain separate.",
      "Torque in N·m is not an energy or work value. Positive normal is out of the page in the stated right-handed frame."
    ],
    "sourceRefs": [
      "source:openstax:torque",
      "source:openstax:cross-product"
    ]
  }
]);
  const effects=freeze({
  "relation": "The requirement changes pair membership and the count while left/right identities stay explicit.",
  "equivalence": "The same predicate change follows two paths; current truth and agreement on every assignment remain separate.",
  "inference": "The width changes actual premise truth and conclusion truth while the full table tests argument validity.",
  "torque": "The force direction changes its perpendicular component, the actual moment arm and the signed torque."
});
  const quantities=freeze({
  "relation": {
    "threshold": {
      "label": "Required combined length",
      "unit": "cm",
      "role": "input",
      "description": "The same free requirement used in every binary predicate."
    },
    "exampleX": {
      "label": "Known left length",
      "unit": "cm",
      "role": "reference",
      "description": "The fixed first argument of the highlighted pair."
    },
    "exampleY": {
      "label": "Known right length",
      "unit": "cm",
      "role": "reference",
      "description": "The fixed second argument of the highlighted pair."
    },
    "exampleTotal": {
      "label": "Known pair total",
      "unit": "cm",
      "role": "intermediate",
      "description": "The sum of the two highlighted strip lengths."
    },
    "exampleTruth": {
      "label": "Known pair membership",
      "unit": "",
      "role": "intermediate",
      "description": "The exact membership truth of the highlighted ordered pair."
    },
    "exampleLabel": {
      "label": "Known pair membership",
      "unit": "",
      "role": "intermediate",
      "description": "The True/False result for the highlighted pair, separate from the count."
    },
    "pairCount": {
      "label": "Satisfying ordered-pair count",
      "unit": "pairs",
      "role": "output",
      "description": "How many complete-domain pairs belong to the current relation."
    },
    "output": {
      "label": "Satisfying ordered-pair count",
      "unit": "pairs",
      "role": "output",
      "description": "The integer membership count."
    }
  },
  "equivalence": {
    "length": {
      "label": "Panel length",
      "unit": "cm",
      "role": "reference",
      "description": "The unchanged dimension supplying P."
    },
    "width": {
      "label": "Panel width",
      "unit": "cm",
      "role": "input",
      "description": "The changed dimension supplying Q."
    },
    "pLabel": {
      "label": "Length statement truth",
      "unit": "",
      "role": "reference",
      "description": "The fixed True/False input P."
    },
    "qLabel": {
      "label": "Width statement truth",
      "unit": "",
      "role": "intermediate",
      "description": "The changed True/False input Q."
    },
    "leftLabel": {
      "label": "Current left formula truth",
      "unit": "",
      "role": "output",
      "description": "The left formula at the current P/Q assignment."
    },
    "rightLabel": {
      "label": "Current right formula truth",
      "unit": "",
      "role": "output",
      "description": "The right formula at the same current assignment."
    },
    "currentMatchLabel": {
      "label": "Current row agreement",
      "unit": "",
      "role": "output",
      "description": "Whether the two current truth values match."
    },
    "mismatchCount": {
      "label": "All-assignment mismatch count",
      "unit": "rows",
      "role": "output",
      "description": "The number of differing rows in the complete four-row table."
    },
    "equivalentLabel": {
      "label": "Global equivalence",
      "unit": "",
      "role": "output",
      "description": "Whether every assignment has matching formula values."
    }
  },
  "inference": {
    "length": {
      "label": "Panel length",
      "unit": "cm",
      "role": "reference",
      "description": "The fixed measurement supplying P."
    },
    "width": {
      "label": "Panel width",
      "unit": "cm",
      "role": "input",
      "description": "The changed measurement supplying Q."
    },
    "pLabel": {
      "label": "Length statement truth",
      "unit": "",
      "role": "reference",
      "description": "The atomic P truth read from length."
    },
    "qLabel": {
      "label": "Width statement truth",
      "unit": "",
      "role": "intermediate",
      "description": "The atomic Q truth read from width."
    },
    "premise1Label": {
      "label": "Conditional premise truth",
      "unit": "",
      "role": "intermediate",
      "description": "The current truth of P→Q."
    },
    "premise2Label": {
      "label": "Second premise truth",
      "unit": "",
      "role": "intermediate",
      "description": "The current truth of the other selected premise."
    },
    "premisesLabel": {
      "label": "Current premise satisfaction",
      "unit": "",
      "role": "intermediate",
      "description": "Whether both premise statements hold here."
    },
    "conclusionLabel": {
      "label": "Current conclusion truth",
      "unit": "",
      "role": "output",
      "description": "The selected conclusion’s current truth, not global validity."
    },
    "validityLabel": {
      "label": "Argument validity",
      "unit": "",
      "role": "output",
      "description": "The all-assignment truth-preservation result."
    },
    "counterexampleCount": {
      "label": "Counterexample-assignment count",
      "unit": "rows",
      "role": "output",
      "description": "Rows where every premise is true and the conclusion false."
    },
    "licenseLabel": {
      "label": "Current inference status",
      "unit": "",
      "role": "output",
      "description": "Whether this valid pattern’s premises actually license its conclusion here."
    }
  },
  "torque": {
    "arm": {
      "label": "Pivot-to-application distance",
      "unit": "m",
      "role": "reference",
      "description": "The full distance from pivot to the force application point."
    },
    "force": {
      "label": "Force magnitude",
      "unit": "N",
      "role": "reference",
      "description": "The fixed magnitude of the applied force."
    },
    "angle": {
      "label": "Signed force direction",
      "unit": "°",
      "role": "input",
      "description": "The directed construction angle relative to the positive handle axis."
    },
    "sine": {
      "label": "Perpendicular sine factor",
      "unit": "",
      "role": "intermediate",
      "description": "The signed factor projecting the force onto its perpendicular component."
    },
    "perpendicularForce": {
      "label": "Signed perpendicular force",
      "unit": "N",
      "role": "intermediate",
      "description": "The force component that contributes to planar signed torque."
    },
    "momentArm": {
      "label": "Perpendicular moment arm",
      "unit": "m",
      "role": "intermediate",
      "description": "The perpendicular distance from the pivot to the force line for this nonzero force."
    },
    "magnitude": {
      "label": "Torque magnitude",
      "unit": "N·m",
      "role": "output",
      "description": "The nonnegative magnitude, kept distinct from energy."
    },
    "output": {
      "label": "Signed torque about the pivot",
      "unit": "N·m",
      "role": "output",
      "description": "The normal component of the position-vector and force-vector cross product."
    }
  }
});
  const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
  return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
