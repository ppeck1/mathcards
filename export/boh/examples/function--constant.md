---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:function:constant", "id": "math:example:function:constant", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:function", "example_id": "math:example:function:constant", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "009b5e7e15ceb8acae26c225bd20c9d044024763bdde67f31ac0f8863004e4cc"}, "purpose": "Follow one input through a rule to its unique output, and distinguish the rule from its current value.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "009b5e7e15ceb8acae26c225bd20c9d044024763bdde67f31ac0f8863004e4cc", "status": "draft", "title": "A locked display is still a function", "topics": ["mathematics", "language-foundations", "algebra", "input–output rule", "function evaluation"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# A locked display is still a function

Parent card: math:concept:function; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:function; revision 0.1.0-draft. Setting: A function between declared sets; the executable specimen is a bounded real affine family. Expression: $f:A\to B,\quad\forall x\in A\;\exists!\,y\in B:\;y=f(x).\qquad f_{a,b}(x)=ax+b.$. Conditions required for a defined value (a case may test their violation): Every allowed input has exactly one assigned output. A function includes its declared domain; a formula alone need not settle the intended domain. For the illustrated family, x, a and b are finite and within the declared control bounds. A multiplier and offset require compatible units; changing a or b changes the selected function. Scope: General functions need not be numerical, affine, continuous or invertible. In this specimen the input domain is [−5,5], and each chosen a,b has range [b−5|a|,b+5|a|]. Bounds are a display/model contract, not a restriction on the mathematical concept.

Case unit math:example:function:constant. Setting: Original constructed teaching scenario; quantities are stipulated, not measured. Inputs: {"a": 0, "b": 4, "x": 5}. Result: {"exact": "4 display units"}. Limits: This constant function has no single-valued inverse on the full input interval.

## Complete worked case

- id: math:example:function:constant
- title: A locked display is still a function
- role: applied_model
- question: A test display is locked at 4, regardless of a reading between −5 and 5. What is the output at x=5?
- setting: Original constructed teaching scenario; quantities are stipulated, not measured.
- assumptions:
  - The input and output units are declared and compatible with a×x+b.
  - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
  - This example has one output for each allowed input; changing a or b selects a different function.
- inputs:
  - x: 5
  - a: 0
  - b: 4
- steps:
  - Item:
    - index: 1
    - expression: f(x)=0x+4
    - reason: A zero multiplier removes dependence on this input.
  - Item:
    - index: 2
    - expression: f(5)=0×5+4=4
    - reason: Evaluate without inventing an input effect.
- result:
  - exact: 4 display units
- interpretation: Many inputs may share one output. A function needs one output per input, not a different output for every input.
- independent check:
  - method: Second input check
  - expected: f(−5)=0×(−5)+4=4 as well.
- limits: This constant function has no single-valued inverse on the full input interval.
- preset:
  - x: 5
  - a: 0
  - b: 4
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The input and output units are declared and compatible with a×x+b.
  - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
  - This example has one output for each allowed input; changing a or b selects a different function.

## Written exploration recipe

- component id: function-visual-model
- renderer id: function-visual-model
- renderer version: 1.0.0
- model id: function-visual-model
- model revision: 1.0.0
- expression id: ast:function:expression
- interaction status: implemented
- description: A highlighted input crosses the multiply and offset blocks into one output marker; the same pair is tracked on a line graph.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 2
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: a
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: b
    - type: number
    - default: 1
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
- expected cases:
  - Item:
    - input:
      - x: 2
      - a: 2
      - b: 1
    - output: 5
  - Item:
    - input:
      - x: -5
      - a: 3
      - b: -5
    - output: -20
  - Item:
    - input:
      - x: 5
      - a: 3
      - b: 5
    - output: 20
  - Item:
    - input:
      - x: -2
      - a: 1.5
      - b: 1
    - output: -2
  - Item:
    - input:
      - x: 5
      - a: 0
      - b: 4
    - output: 4
  - Item:
    - input:
      - x: 0
      - a: -3
      - b: -5
    - output: -5
  - Item:
    - input:
      - x: 3
      - a: -1
      - b: 5
    - output: 2
  - Item:
    - input:
      - x: 6
      - a: 2
      - b: 1
    - status: invalid_parameters
  - Item:
    - input:
      - x: 2
      - a: 3.1
      - b: 1
    - status: invalid_parameters
- compute: scaled=a*x; output=scaled+b; input=x. For each selected a,b this is a fixed affine function on x∈[−5,5].
- numeric tolerance: 1e-10
- invariants:
  - Every allowed input has exactly one assigned output.
  - A function includes its declared domain; a formula alone need not settle the intended domain.
  - For the illustrated family, x, a and b are finite and within the declared control bounds.
  - A multiplier and offset require compatible units; changing a or b changes the selected function.
- limits:
  - The live specimen is one bounded affine family, not an arbitrary function editor.
  - Story units and physical domains must be supplied separately; a negative coordinate can be valid while a negative delivery distance is not.
  - Output marker motion is illustrative and does not assert measured behavior.
- fallback: Pause motion and read the same labeled diagram, substitutions and original worked steps. The graph and exact numeric result remain available.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - renderer_version
  - parameters
  - result_status
  - result
  - note

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:function-notation. [Precalculus 2e, 1.1 Functions and Function Notation](https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation). Locator: Function definition; input, output, domain and range; evaluating functions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:function-domain. [Precalculus 2e, 1.2 Domain and Range](https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range). Locator: Finding the Domain of a Function Defined by an Equation; physical and mathematical restrictions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
