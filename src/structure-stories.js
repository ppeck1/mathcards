/* Structure stories compose with the shared space, trace and declared discrete controls. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasStructureStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const freeze=v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v)){Object.values(v).forEach(freeze);Object.freeze(v);}return v;};
const stories=freeze([
  {
    "id": "story:two-sided-shelf-enumeration",
    "slug": "countability",
    "scene": "index-to-integer-address",
    "unit": "",
    "title": "How can one index row visit both sides?",
    "eyebrow": "A numbered shelf · an infinite rule",
    "presentation": {
      "compact": true,
      "controlHint": "Advance by whole indices. Follow each selected ticket to its integer address and use the inverse rule to find the ticket again."
    },
    "summary": "Connect a finite two-sided shelf analogy with an explicitly invertible integer enumeration.",
    "context": "Imagine a workshop shelf with address 0 in the middle, positive addresses to the right and negative addresses to the left. A ticket rule visits addresses in the order 0, 1, −1, 2, −2 and onward. The sketch shows a finite window; the mathematical rule defines a match for every nonnegative integer index n.",
    "question": "At index n=8, which integer address is selected, and what index does the inverse rule recover?",
    "variables": [
      {
        "key": "index",
        "symbol": "n",
        "label": "Enumeration index",
        "unit": "",
        "min": 0,
        "max": 12,
        "step": 1,
        "discrete": true
      }
    ],
    "parameters": {
      "index": 8
    },
    "timeline": {
      "key": "index",
      "from": 0,
      "to": 8,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep index and address domains separate",
        "focusLabel": "The index row and address line are two different sets",
        "focusDescription": "The index domain starts at zero and extends in one direction. Integer addresses extend in both directions. Their displayed scales stay fixed as the selected prefix grows.",
        "body": "The rule begins f(0)=0, then alternates positive and negative integer addresses. The full domains are ℕ₀ and ℤ.",
        "formula": "f: ℕ₀ → ℤ; 0,1,−1,2,−2,…"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Choose a whole index",
        "focusLabel": "The highlighted ticket supplies n",
        "focusDescription": "The selected index is a whole number. Advancing one index adds one match to the highlighted finite prefix without changing the complete mathematical domain.",
        "body": "The selected index is {{index}}. Its highlighted prefix contains {{prefixSize}} matches.",
        "formula": "n = {{index}}; prefix size = {{prefixSize}}"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Follow the selected forward match",
        "focusLabel": "The arrow reaches the paired integer address",
        "focusDescription": "The zero, odd-index and positive-even-index branches determine the selected address exactly. No fractional index or halfway integer is inserted.",
        "body": "The rule sends index {{index}} to integer address {{output}}.",
        "formula": "f({{index}}) = {{output}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Recover the index with the inverse",
        "focusLabel": "The return rule checks the same selected pair",
        "focusDescription": "The inverse recovers this index. The complete bijection proof uses both inverse identities for every input, separately from checking the displayed pair.",
        "body": "Applying the inverse to {{output}} returns {{inverseIndex}}. This checks the selected match.",
        "formula": "g({{output}}) = {{inverseIndex}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose the index",
        "template": "n = {{index}}",
        "description": "A whole index selects one branch of the enumeration."
      },
      {
        "role": "intermediate",
        "label": "Read its integer address",
        "template": "f(n) = {{output}}",
        "description": "The highlighted arrow connects the two different domains."
      },
      {
        "role": "output",
        "label": "Use the inverse rule",
        "template": "g(f(n)) = {{inverseIndex}}",
        "description": "The current pair is reversible; the complete all-input inverse proof is recorded in the card."
      }
    ],
    "conclusion": "At n=8, the positive even branch gives f(8)=−8/2=−4. The inverse gives g(−4)=−2(−4)=8. The highlighted prefix has nine matches; it is finite. The full countability argument comes from the two inverse identities over all inputs.",
    "assumptions": [
      "The shelf is a finite physical analogy for the displayed matches, while the formulas define complete infinite mathematical domains.",
      "Indices and integer addresses are separate quantities. The selected integer and prefix size are not the infinite cardinal ℵ₀.",
      "This reference uses countable for finite or denumerable sets; the full stated bijection shows that ℤ is denumerable."
    ],
    "sourceRefs": [
      "source:lebl:cardinality"
    ]
  },
  {
    "id": "story:bead-parity-machine",
    "slug": "finite-state-machine",
    "scene": "word-prefix-and-machine-state",
    "unit": "",
    "title": "What can two states remember?",
    "eyebrow": "Eight beads · one parity memory",
    "presentation": {
      "compact": true,
      "controlHint": "Read whole beads one at a time. Follow each next symbol through its state transition and keep the unread suffix in view."
    },
    "summary": "Track marked-bead parity while separating a current accepting state from a finished accepted word.",
    "context": "A workshop bead pattern is written 10010010, where 1 means a dark marked bead and 0 means a light bead. A tiny machine remembers only Even or Odd: reading a dark bead swaps the state, and reading a light bead preserves it. The processed-prefix count helps us check the rule; it is not an extra counter stored in the machine’s two states.",
    "question": "After seven symbols, what state does the machine hold, what remains unread, and is the whole input finished?",
    "variables": [
      {
        "key": "steps",
        "symbol": "k",
        "label": "Processed symbols",
        "unit": "symbols",
        "min": 0,
        "max": 8,
        "step": 1,
        "discrete": true
      }
    ],
    "parameters": {
      "steps": 7,
      "pattern": "10010010"
    },
    "timeline": {
      "key": "steps",
      "from": 0,
      "to": 7,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Start with the empty prefix",
        "focusLabel": "The initial state is Even",
        "focusDescription": "No marked symbols have been read initially. The complete bead word stays visible as the processed boundary advances.",
        "body": "The word is 10010010. The initial state q₀ is Even; each transition reads exactly one next symbol.",
        "formula": "q₀ = E; δ(q,0)=q; 1 swaps E and O"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Advance the input boundary",
        "focusLabel": "The chosen prefix determines which symbols have actually been read",
        "focusDescription": "Processed beads and the unread suffix have separate visual treatments. Empty prefixes and suffixes are explicitly labelled with ε.",
        "body": "After {{steps}} symbols, the processed prefix is {{prefixLabel}}. The unread suffix is {{unreadLabel}}.",
        "formula": "k = {{steps}}; prefix = {{prefixLabel}}"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Check the parity invariant",
        "focusLabel": "Only processed dark beads affect the current state",
        "focusDescription": "A 1 changes parity and a 0 preserves it. The state label follows the parity of the marked symbols in the actual processed prefix.",
        "body": "The processed prefix contains {{onesRead}} marked beads, so the current state is {{stateLabel}}.",
        "formula": "Number of 1s read = {{onesRead}}; qₖ = {{stateLabel}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Read the complete configuration",
        "focusLabel": "State and unread suffix belong together",
        "focusDescription": "The unread suffix is part of the configuration. A full-word acceptance result is reported only after every symbol is consumed.",
        "body": "Current state: {{stateLabel}}. Unread suffix: {{unreadLabel}}. Whole-input status: {{acceptanceLabel}}.",
        "formula": "Configuration = ({{stateLabel}}, {{unreadLabel}}); {{acceptanceLabel}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Select the processed prefix",
        "template": "k = {{steps}}; prefix = {{prefixLabel}}",
        "description": "The prefix boundary moves only by complete input symbols."
      },
      {
        "role": "intermediate",
        "label": "Follow state changes on marked symbols",
        "template": "1s read = {{onesRead}}; qₖ = {{stateLabel}}",
        "description": "The two-state memory records parity rather than the entire count."
      },
      {
        "role": "output",
        "label": "Keep the remaining input in the configuration",
        "template": "({{stateLabel}}, {{unreadLabel}}); {{acceptanceLabel}}",
        "description": "A current state and a finished acceptance decision are separate readings."
      }
    ],
    "conclusion": "After seven symbols, the processed prefix is 1001001 with three marked beads. The state is Odd and the unread suffix is 0. The input is still unfinished, so this is a configuration reading rather than a full-word Accepted or Rejected result.",
    "assumptions": [
      "The original two-state machine counts parity of 1s. Its alphabet is the two symbols 0 and 1; leading zeros remain symbols.",
      "The auxiliary marked count checks the state invariant without giving the machine more than two stored states.",
      "Even is an accepting state, but the selected complete word is accepted only after all eight symbols are read and the final state is Even."
    ],
    "sourceRefs": [
      "source:columbia:finite-automata"
    ]
  },
  {
    "id": "story:cursor-open-neighborhood",
    "slug": "open-set",
    "scene": "cursor-clearance-and-query-ball",
    "unit": "cm",
    "title": "Can this neighborhood fail while the set stays open?",
    "eyebrow": "A cursor query · a strictly bounded neighborhood",
    "presentation": {
      "compact": true,
      "controlHint": "Move the cursor toward the rim. Compare clearance with the chosen radius while keeping membership, interior status and whole-set openness separate."
    },
    "summary": "Use a drawing query to distinguish one oversized open neighborhood from existence of a smaller one.",
    "context": "A drawing app marks an open disk of radius 2 cm. A cursor at p=(x,0) asks for all locations whose Euclidean distance from it is strictly less than ε=0.75 cm. This query is an open neighborhood, so its own boundary is excluded. Move x from 0.5 cm to 1.5 cm and inspect where the selected query extends outside the disk.",
    "question": "At x=1.5 cm, what is the signed clearance, does the selected query neighborhood fit, and does the disk remain open?",
    "variables": [
      {
        "key": "center",
        "symbol": "x",
        "label": "Cursor coordinate",
        "unit": "cm",
        "min": -3,
        "max": 3,
        "step": 0.01
      }
    ],
    "parameters": {
      "center": 1.5,
      "radius": 0.75,
      "boundary": "open"
    },
    "timeline": {
      "key": "center",
      "from": 0.5,
      "to": 1.5,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the target set fixed",
        "focusLabel": "The strict outer boundary defines the open disk",
        "focusDescription": "The target is the same radius-two disk throughout this story. Its openness is a property of the whole set, not a response to one chosen cursor radius.",
        "body": "The target is U={z:‖z‖<2 cm}. The selected query radius remains {{radius}} cm.",
        "formula": "U: ‖z‖<2 cm; ε = {{radius}} cm"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Locate the cursor separately from the query ball",
        "focusLabel": "The selected point has membership and interior readings",
        "focusDescription": "The point, its open neighborhood and the target set are different objects. A chosen ball can fail even when its center belongs to the set and is interior.",
        "body": "The cursor coordinate is {{center}} cm. Membership: {{centerLabel}}. Positive-neighborhood existence: {{interiorLabel}}.",
        "formula": "p = ({{center}},0) cm"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Compare the chosen radius with clearance",
        "focusLabel": "Signed clearance supplies the fit threshold",
        "focusDescription": "Clearance is 2−|x| in centimetres. A positive chosen open ball fits when ε≤C, including tangency because the inner ball excludes its touching point.",
        "body": "The signed clearance is {{clearance}} cm. Compare it with the selected radius {{radius}} cm.",
        "formula": "C(x) = 2−|{{center}}| = {{clearance}} cm; ε = {{radius}} cm"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Keep local fit and whole-set openness distinct",
        "focusLabel": "A failed chosen radius does not deny a smaller positive radius",
        "focusDescription": "The fit label reports only this selected ball. Interior status asks whether some positive ball exists, and the outer set’s openness remains a separate all-point property.",
        "body": "Chosen ball: {{fitLabel}}. Positive-neighborhood existence: {{interiorLabel}}. Whole-set status: {{opennessLabel}}.",
        "formula": "C(x) = {{clearance}} cm; {{fitLabel}}; {{opennessLabel}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Move the query center",
        "template": "x = {{center}} cm; ε = {{radius}} cm",
        "description": "The radius stays fixed while the center approaches the rim."
      },
      {
        "role": "intermediate",
        "label": "Read signed clearance",
        "template": "C(x) = 2−|x| = {{clearance}} cm",
        "description": "Positive clearance permits some sufficiently small neighborhood."
      },
      {
        "role": "output",
        "label": "Test this neighborhood and retain the other distinctions",
        "template": "{{fitLabel}}; {{interiorLabel}}; {{opennessLabel}}",
        "description": "The selected radius, existence of another radius and global openness answer different questions."
      }
    ],
    "conclusion": "At x=1.5 cm, clearance is 2−1.5=0.5 cm. The selected radius 0.75 cm is larger, so that query neighborhood does not fit. The point remains interior: for example, radius 0.25 cm works. The target disk remains open.",
    "assumptions": [
      "The ambient space is the Euclidean plane and the query uses strict distance less than ε, rather than a closed footprint.",
      "The guided target is the open disk; the optional playground also compares the closed disk and its included rim.",
      "The slider’s selected-radius range does not limit mathematical existence: a smaller positive radius can work even below that slider minimum."
    ],
    "sourceRefs": [
      "source:cmu:metric-open-sets"
    ]
  },
  {
    "id": "story:desk-station-quantifier-order",
    "slug": "quantifier-scope",
    "scene": "desk-station-witness-grid",
    "unit": "",
    "title": "A station for each desk, or one for every desk?",
    "eyebrow": "Six desks · three stations · two orders",
    "presentation": {
      "compact": true,
      "controlHint": "Increase cable reach. Follow the selected desk’s nearest distance, then compare row-wise witnesses with one common covering column."
    },
    "summary": "See witness dependency change a quantified claim while a free probe remains a separate reading.",
    "context": "A workshop drawing places desks at 2, 4, 6, 8, 10 and 12 m and stations at 1, 5 and 9 m along one line. A cable reaches a station when their distance is at most h metres. Increase h from 2 m to 3 m. The probe highlights the desk at xₚ=12 m, while the full formulas still range over every desk themselves.",
    "question": "At h=3 m, can every desk choose a reachable station, and is there one station that reaches every desk?",
    "variables": [
      {
        "key": "reach",
        "symbol": "h",
        "label": "Cable reach",
        "unit": "m",
        "min": 0,
        "max": 12,
        "step": 0.01
      }
    ],
    "parameters": {
      "reach": 3,
      "desk": 12,
      "order": "all-some"
    },
    "timeline": {
      "key": "reach",
      "from": 2,
      "to": 3,
      "durationMs": 14000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep both domains explicit",
        "focusLabel": "Rows represent all desks and columns all station choices",
        "focusDescription": "The domains stay fixed. Each row can have its own station witness, while a common witness requires one station column to cover every desk row.",
        "body": "The desk domain is D={2,4,6,8,10,12} m. The station domain is E={1,5,9} m.",
        "formula": "Rₕ(x,y): |x−y| ≤ h"
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Change the still-free reach",
        "focusLabel": "The reach marker is compared with an actual nearest distance",
        "focusDescription": "The chosen desk is a free probe assignment. Its nearest station distance is measured in the same metres as h; moving this probe is not binding a universal variable.",
        "body": "The probe desk is {{desk}} m and its nearest station is {{nearestDistance}} m away. The reach is {{reach}} m.",
        "formula": "xₚ = {{desk}} m; nearest distance = {{nearestDistance}} m; h = {{reach}} m"
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Separate the probe from all row witnesses",
        "focusLabel": "A probe truth concerns one desk; row coverage concerns all desks",
        "focusDescription": "The open formula φₕ(xₚ) evaluates the assigned probe. The complete grid separately counts how many desks have at least one witness.",
        "body": "Probe coverage: {{probeLabel}}. Across the full domain, {{rowCount}} desks have a reachable station.",
        "formula": "φₕ(xₚ) = {{probeLabel}}; covered desk rows = {{rowCount}}"
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1,
        "focus": "output",
        "title": "Read the two quantifier orders",
        "focusLabel": "Different row witnesses are not one common witness",
        "focusDescription": "Aₕ allows each bound desk to choose its own station. Bₕ requires one station before checking every bound desk. Both bind x and y, while h remains free.",
        "body": "Every desk has some station: {{allSomeLabel}}. One station serves every desk: {{someAllLabel}}.",
        "formula": "Aₕ = {{allSomeLabel}}; Bₕ = {{someAllLabel}}"
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set reach and inspect one assigned probe",
        "template": "h = {{reach}} m; xₚ = {{desk}} m",
        "description": "The probe assignment does not replace the complete bound desk domain."
      },
      {
        "role": "intermediate",
        "label": "Follow witnesses in the grid",
        "template": "φₕ(xₚ) = {{probeLabel}}; {{rowCount}} desk rows have a witness",
        "description": "Row witnesses may be different station choices."
      },
      {
        "role": "output",
        "label": "Compare every/some with some/every",
        "template": "Aₕ = {{allSomeLabel}}; Bₕ = {{someAllLabel}}",
        "description": "One common covering station is a stronger requirement than a separate witness for each desk."
      }
    ],
    "conclusion": "At h=3 m, the six desks can use stations 1,5,5,9,9 and 9 m respectively, at distances 1,1,1,1,1 and 3 m. Thus A₃ is True. No single station reaches every desk at 3 m, so B₃ is False. The probe’s assignment does not change either complete-domain formula.",
    "assumptions": [
      "The model uses fixed positions on one line and the inclusive distance test |x−y|≤h, without station capacities or cable-routing constraints.",
      "In φₕ(x), x and h are free and y is bound. In Aₕ and Bₕ, x and y are bound but h remains free.",
      "The separately assigned probe xₚ changes the open-formula reading only. Aₕ and Bₕ still range over all of their bound domains."
    ],
    "sourceRefs": [
      "source:waterloo:first-order-scope",
      "source:western:quantifier-order"
    ]
  }
]);
const effects=freeze({
  "countability": "The whole index selects one forward and inverse pairing, while the highlighted finite prefix grows without changing either infinite domain.",
  "finite-state-machine": "The processed-prefix boundary selects exact transitions and changes the configuration, while complete-word acceptance waits for finished input.",
  "open-set": "The cursor changes signed clearance and the selected ball’s fit without making one chosen radius the definition of openness.",
  "quantifier-scope": "The free reach changes binary membership, desk-dependent witnesses and common witnesses; the selected desk probe remains separate."
});
const quantities=freeze({
  "countability": {
    "index": {
      "label": "Enumeration index",
      "unit": "",
      "role": "input",
      "description": "The selected nonnegative whole index."
    },
    "prefixSize": {
      "label": "Highlighted prefix size",
      "unit": "matches",
      "role": "intermediate",
      "description": "The finite number n+1 of matches through the selected index."
    },
    "output": {
      "label": "Selected integer address",
      "unit": "",
      "role": "output",
      "description": "The integer f(n), distinct from cardinality."
    },
    "integer": {
      "label": "Selected integer address",
      "unit": "",
      "role": "output",
      "description": "The integer paired with the current index."
    },
    "inverseIndex": {
      "label": "Recovered inverse index",
      "unit": "",
      "role": "output",
      "description": "The value g(f(n)) for the selected match."
    }
  },
  "finite-state-machine": {
    "steps": {
      "label": "Processed prefix length",
      "unit": "symbols",
      "role": "input",
      "description": "The exact whole number of consumed symbols."
    },
    "prefixLabel": {
      "label": "Processed input prefix",
      "unit": "",
      "role": "input",
      "description": "The processed word, using ε for an empty prefix."
    },
    "unreadLabel": {
      "label": "Unread suffix",
      "unit": "",
      "role": "output",
      "description": "The remaining input, using ε for an empty suffix."
    },
    "onesRead": {
      "label": "Marked symbols in the processed prefix",
      "unit": "symbols",
      "role": "intermediate",
      "description": "The auxiliary count checking the parity invariant."
    },
    "stateLabel": {
      "label": "Current parity state",
      "unit": "",
      "role": "output",
      "description": "Even or Odd, rather than a truth value or probability."
    },
    "acceptanceLabel": {
      "label": "Full-word input status",
      "unit": "",
      "role": "output",
      "description": "Unfinished until all symbols are read, then Accepted or Rejected."
    }
  },
  "open-set": {
    "center": {
      "label": "Cursor coordinate",
      "unit": "cm",
      "role": "input",
      "description": "The selected point’s horizontal coordinate."
    },
    "radius": {
      "label": "Chosen query radius",
      "unit": "cm",
      "role": "reference",
      "description": "The positive radius of this particular open neighborhood."
    },
    "clearance": {
      "label": "Signed boundary clearance",
      "unit": "cm",
      "role": "intermediate",
      "description": "Two minus the magnitude of the selected coordinate."
    },
    "centerLabel": {
      "label": "Target-set membership",
      "unit": "",
      "role": "intermediate",
      "description": "Whether the selected center belongs to U."
    },
    "interiorLabel": {
      "label": "Positive-neighborhood existence",
      "unit": "",
      "role": "intermediate",
      "description": "Whether some positive ball about this point is contained in U."
    },
    "fitLabel": {
      "label": "Chosen-neighborhood containment",
      "unit": "",
      "role": "output",
      "description": "Whether the currently selected radius fits, including open-ball tangency."
    },
    "opennessLabel": {
      "label": "Whole-set openness",
      "unit": "",
      "role": "output",
      "description": "The global property of the selected disk, independent of this point and radius."
    }
  },
  "quantifier-scope": {
    "reach": {
      "label": "Free reach parameter",
      "unit": "m",
      "role": "input",
      "description": "The free parameter h in both quantified formulas."
    },
    "desk": {
      "label": "Assigned free desk probe",
      "unit": "m",
      "role": "reference",
      "description": "A selected value xₚ used only by the open-formula probe."
    },
    "nearestDistance": {
      "label": "Probe’s nearest station distance",
      "unit": "m",
      "role": "intermediate",
      "description": "The actual closest station distance for the selected probe desk."
    },
    "probeLabel": {
      "label": "Open-formula probe truth",
      "unit": "",
      "role": "intermediate",
      "description": "The existence reading at the assigned probe desk only."
    },
    "rowCount": {
      "label": "Desks having individual witnesses",
      "unit": "desks",
      "role": "intermediate",
      "description": "How many full-domain desk rows contain at least one passing station."
    },
    "allSomeLabel": {
      "label": "Every desk has some station",
      "unit": "",
      "role": "output",
      "description": "Aₕ with desk-dependent witnesses and h still free."
    },
    "someAllLabel": {
      "label": "Some station serves every desk",
      "unit": "",
      "role": "output",
      "description": "Bₕ with one common station witness and h still free."
    }
  }
});
const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
