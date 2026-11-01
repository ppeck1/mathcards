/* Exact configurations and written derivations share the host clock. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasComputationStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
const stories=freeze([
  {
    "id": "story:library-binary-counter",
    "slug": "turing-machine",
    "scene": "writable-counter-tape",
    "unit": "integer",
    "title": "How does a counter make eleven become twelve?",
    "eyebrow": "The return desk · a writable memory",
    "presentation": {
      "compact": true,
      "controlHint": "Advance by whole transitions. Follow the head, the highlighted rule and the last-written cell; read the completed count only at halt."
    },
    "summary": "Trace a binary increment through scanning, stored-bit changes and a carry.",
    "context": "The library has recorded eleven returns. Imagine its counter written as 1011 on a tape: eight plus two plus one. One more return must change it to twelve. A tiny program scans to the right edge, then carries left through the trailing 1s. The finite control remembers whether to scan or carry; the tape stores the count. This is an original mathematical model of a counter, not a claim about the library’s actual electronics.",
    "question": "Which cells must change, and when is the tape finally a completed count of twelve?",
    "variables": [
      {
        "key": "steps",
        "symbol": "k",
        "label": "Requested transition step",
        "unit": "transitions",
        "min": 0,
        "max": 10,
        "step": 1,
        "discrete": true
      }
    ],
    "parameters": {
      "steps": 8,
      "word": "1011"
    },
    "timeline": {
      "key": "steps",
      "from": 0,
      "to": 8,
      "durationMs": 20000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the stored count separate from the program",
        "body": "The tape begins with 1011, or eleven. The desired completed count is {{expectedValue}}; state S scans without changing a digit.",
        "formula": "1011₂ = 11; 11 + 1 = {{expectedValue}}",
        "focusLabel": "The tape holds data; the state selects a rule",
        "focusDescription": "The input stays visible beside its target. The finite control is not itself a counter containing eleven."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Choose a whole transition",
        "body": "At step k={{steps}}, the head is at address {{head}} and the state is {{stateLabel}}. The head selects exactly one tape cell.",
        "formula": "k={{steps}}; hₖ={{head}}; qₖ={{stateLabel}}",
        "focusLabel": "The head marks the current tape address",
        "focusDescription": "Changing the selected whole step moves through actual configurations. The head position and the last-written cell have distinct outlines."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Follow the read-write-move rule",
        "body": "The most recent completed rule is {{lastRuleLabel}}. The tape currently reads {{tapeWord}}, with value {{tapeValue}}.",
        "formula": "{{lastRuleLabel}}; vₖ={{tapeValue}}",
        "focusLabel": "The most recently completed rule explains the write and move",
        "focusDescription": "Scan rules preserve bits. Carry rules turn trailing 1s into 0s until a 0 or blank can absorb the carry. An intermediate reading can decrease."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Wait for the program to halt",
        "body": "After {{transitionCount}} actual transitions, the status is {{statusLabel}}. The current tape value is {{tapeValue}}; the completed result reads {{finalValueLabel}}.",
        "formula": "vₖ={{tapeValue}}; completed result: {{finalValueLabel}}",
        "focusLabel": "The final numeral is identified by halting, not by a rising number",
        "focusDescription": "For input 1011, halt occurs after eight transitions with tape 1100. Extending the requested viewing step later adds no machine transitions."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Choose a configuration",
        "template": "k={{steps}}; head={{head}}",
        "description": "A whole transition step selects a real configuration."
      },
      {
        "role": "intermediate",
        "label": "Read the actual rule",
        "template": "{{lastRuleLabel}}",
        "description": "The rule names the old symbol, write, direction and new state."
      },
      {
        "role": "output",
        "label": "Read the stored numeral",
        "template": "{{tapeWord}} → {{tapeValue}}",
        "description": "This is the current unsigned tape reading; the completed result is identified only at halt."
      }
    ],
    "conclusion": "The carry rewrites the two trailing 1s as 0s, then writes 1 over the preceding 0. The final tape is 1100, or twelve, after eight actual transitions. The head has moved right from the final written cell. Try 1111 in the playground to see a new leading bit appear.",
    "assumptions": [
      "The counter, six rules and input choices form an original constructed model.",
      "One whole transition reads a cell, writes, moves left or right and changes state; H has no outgoing transition.",
      "The tape extends beyond the visible window. Every cell reached by the selected four-bit examples is visible."
    ],
    "sourceRefs": [
      "source:ucdavis:turing-configurations",
      "source:princeton:turing-tape"
    ]
  },
  {
    "id": "story:library-receipt-derivation",
    "slug": "proof",
    "scene": "ordered-proof-dependencies",
    "unit": "lines",
    "title": "What makes a receipt conclusion justified?",
    "eyebrow": "The return desk · a written reason",
    "presentation": {
      "compact": true,
      "controlHint": "Reveal one proof line at a time. Follow its earlier citations, then compare the separate truth panel; a true conclusion alone does not justify a proof step."
    },
    "summary": "Connect a recorded return to a receipt by two explicit rule applications.",
    "context": "Suppose the library uses three stated premises. Let p mean “the return is recorded,” q mean “the count is updated,” and r mean “the receipt is ready.” Take p, p→q and q→r as the premise set Γ. The question is how to write a justified sequence reaching r. The selected situation’s truth values are displayed separately so we can distinguish following the rules from checking whether these premises describe what actually happened.",
    "question": "How can each line cite an earlier reason, all the way from a recorded return to a ready receipt?",
    "variables": [
      {
        "key": "steps",
        "symbol": "k",
        "label": "Candidate lines revealed",
        "unit": "lines",
        "min": 0,
        "max": 5,
        "step": 1,
        "discrete": true
      }
    ],
    "parameters": {
      "steps": 5,
      "plan": "chain",
      "world": "111"
    },
    "timeline": {
      "key": "steps",
      "from": 0,
      "to": 5,
      "durationMs": 18000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Declare what the argument assumes",
        "body": "The fixed premise set is Γ={p,p→q,q→r}. The target is r, a ready receipt. Each premise is an assumption of this argument.",
        "formula": "Γ={p,p→q,q→r}; target r",
        "focusLabel": "The three premises belong to the same fixed argument",
        "focusDescription": "Premise membership licenses the first three lines. These assumptions are displayed explicitly rather than treated as measured facts."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Reveal a line and its reason",
        "body": "With k={{steps}} candidate lines visible, {{acceptedLines}} consecutive lines are justified. A premise line must be a member of Γ.",
        "formula": "k={{steps}}; accepted lines={{acceptedLines}}",
        "focusLabel": "The selected whole line count controls which reasons can be used",
        "focusDescription": "Only visible earlier accepted lines are available as dependencies. Revealing lines is a viewing action; it does not alter the premise set."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Use the consequent named by the implication",
        "body": "Modus ponens takes A and A→B to B. Thus p with p→q licenses q; the next rule reading is {{nextRuleLabel}}.",
        "formula": "p, p→q; then q. q, q→r; then r.",
        "focusLabel": "The cited lines determine the exact conclusion",
        "focusDescription": "Dependency arrows connect each new formula to the earlier accepted formulas it uses. A future citation or a different consequent fails this stated rule."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Separate the written derivation from a situation’s truth",
        "body": "The candidate status is {{derivationLabel}} and the target reads {{targetLabel}}. In the selected situation, Γ is {{premisesLabel}} and r is {{conclusionLabel}}.",
        "formula": "Γ⊢r by the complete chain; selected r: {{conclusionLabel}}",
        "focusLabel": "The proof result and the truth panel answer different questions",
        "focusDescription": "The full chain derives q and then r. Changing the selected world later affects truth readings without changing these valid rule applications."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Reveal the candidate",
        "template": "k={{steps}}",
        "description": "The first k ordered lines are visible for checking."
      },
      {
        "role": "intermediate",
        "label": "Check the dependencies",
        "template": "{{acceptedLines}} justified lines",
        "description": "Each MP application needs two earlier accepted lines with the matching formulas."
      },
      {
        "role": "output",
        "label": "Read the target status",
        "template": "{{targetLabel}}",
        "description": "The target can be derived by this prefix, unfinished, or absent from a rejected candidate; derivability still has the known chain witness."
      }
    ],
    "conclusion": "Lines 1–3 state the premises. Line 4 derives q by modus ponens from lines 1 and 2. Line 5 derives r from lines 4 and 3. This complete chain witnesses Γ⊢r. In the playground, try the wrong-conclusion candidate with all propositions true: the true receipt statement still lacks the cited justification. Then restore the chain and choose world 000: the proof remains valid from Γ, while that situation fails a premise.",
    "assumptions": [
      "Only premise membership and modus ponens are used in this small forward calculus; no additional axiom schemata are assumed.",
      "The three candidates keep the same Γ and target r. The checker accepts only the consecutive justified prefix.",
      "The library propositions are an original constructed example. Truth under a selected assignment does not validate the library’s actual systems."
    ],
    "sourceRefs": [
      "source:openlogic:axiomatic-derivations"
    ]
  }
]);
const quantities=freeze({
  "turing-machine": {
    "steps": {
      "label": "Requested transition step",
      "role": "input",
      "unit": "transitions",
      "description": "A whole viewing step, distinct from actual transitions after halt."
    },
    "head": {
      "label": "Current head address",
      "role": "input",
      "unit": "",
      "description": "The integer tape address selected for the next read."
    },
    "stateLabel": {
      "label": "Current control state",
      "role": "intermediate",
      "unit": "",
      "description": "Scan, carry or halt; finite control stays separate from tape contents."
    },
    "lastRuleLabel": {
      "label": "Most recent completed transition",
      "role": "intermediate",
      "unit": "",
      "description": "The actual state/read/write/direction rule used at the last transition."
    },
    "tapeWord": {
      "label": "Current written binary numeral",
      "role": "output",
      "unit": "",
      "description": "The four original bit positions and a left overflow bit when present."
    },
    "tapeValue": {
      "label": "Current unsigned tape value",
      "role": "output",
      "unit": "integer",
      "description": "A reading of the stored numeral, intermediate until the machine halts."
    },
    "output": {
      "label": "Current unsigned tape value",
      "role": "output",
      "unit": "integer",
      "description": "The primary tape reading, labeled completed only at halt."
    },
    "expectedValue": {
      "label": "Input plus one",
      "role": "reference",
      "unit": "integer",
      "description": "The arithmetic target, separate from the current tape reading."
    },
    "inputValue": {
      "label": "Initial tape value",
      "role": "reference",
      "unit": "integer",
      "description": "The input word interpreted as an unsigned binary numeral."
    },
    "transitionCount": {
      "label": "Actual transitions completed",
      "role": "intermediate",
      "unit": "transitions",
      "description": "Stops increasing at H even if a later viewing step is requested."
    },
    "statusLabel": {
      "label": "Computation status",
      "role": "output",
      "unit": "",
      "description": "Whether the increment program is still running or halted."
    },
    "finalValueLabel": {
      "label": "Completed increment reading",
      "role": "output",
      "unit": "",
      "description": "Unavailable before halt; equals the written tape value at halt."
    }
  },
  "proof": {
    "steps": {
      "label": "Candidate lines revealed",
      "role": "input",
      "unit": "lines",
      "description": "The whole prefix length made visible for checking."
    },
    "acceptedLines": {
      "label": "Consecutive justified lines",
      "role": "intermediate",
      "unit": "lines",
      "description": "The accepted prefix stops at the first invalid line."
    },
    "output": {
      "label": "Consecutive justified lines",
      "role": "output",
      "unit": "lines",
      "description": "The primary numeric count, not a truth value or probability."
    },
    "nextRuleLabel": {
      "label": "Next line-check rule",
      "role": "intermediate",
      "unit": "",
      "description": "Whether a stated premise or a modus ponens application is next."
    },
    "derivationLabel": {
      "label": "Candidate derivation status",
      "role": "output",
      "unit": "",
      "description": "Complete, unfinished or rejected under the stated syntax rules."
    },
    "targetLabel": {
      "label": "Target in the accepted prefix",
      "role": "output",
      "unit": "",
      "description": "Whether this checked prefix has actually derived r."
    },
    "premisesLabel": {
      "label": "Selected-world premise satisfaction",
      "role": "reference",
      "unit": "",
      "description": "Whether every formula in Γ holds in the selected Boolean assignment."
    },
    "conclusionLabel": {
      "label": "Selected-world target truth",
      "role": "reference",
      "unit": "",
      "description": "The selected assignment’s truth value for r, separate from syntactic justification."
    }
  }
});
const effects=freeze({
  "turing-machine": "The whole transition step follows the head through a read, write and move, changing the stored numeral until the halting configuration is reached.",
  "proof": "The revealed prefix exposes earlier citations and accepted proof lines; the separate selected-world truth panel never changes the syntax check."
});

const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
