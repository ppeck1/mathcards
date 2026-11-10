---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:hysteresis:case-1", "id": "math:example:hysteresis:case-1", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hysteresis", "example_id": "math:example:hysteresis:case-1", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d382fdf75aacc697aeda194abeaf86b7c49a173a81d5f728f45a8e400424afc1"}, "purpose": "Why can the same dial setting hold two different positions?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d382fdf75aacc697aeda194abeaf86b7c49a173a81d5f728f45a8e400424afc1", "status": "draft", "title": "Zero dial on the outward sweep", "topics": ["mathematics", "dynamics", "hysteresis and remembered branches"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Zero dial on the outward sweep

Parent card: math:concept:hysteresis; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:hysteresis; revision 0.1.0-draft. Setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone. Expression: $V(x;b)=\frac{x^4}{4}-\frac{x^2}{2}-bx,\quad x^3-x-b=0,\quad 3x^2-1>0.$. Conditions required for a defined value (a case may test their violation): A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

Case unit math:example:hysteresis:case-1. Setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone. Inputs: {"history": "up-down", "steps": 20}. Result: {"approximate": "-1.0 position units"}. Limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

## Complete worked case

- id: math:example:hysteresis:case-1
- title: Zero dial on the outward sweep
- role: applied_model
- question: Why can the same dial setting hold two different positions?
- setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
- assumptions:
  - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- inputs:
  - steps: 20
  - history: up-down
- steps:
  - Item:
    - index: 1
    - expression: k = 20; H = Raise then lower
    - reason: These conditions select the declared family, coordinate chart or whole history step.
  - Item:
    - index: 2
    - expression: x³ − x − b = 0; retain the nearest stable branch
    - reason: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - Item:
    - index: 3
    - expression: -1.0 position units
    - reason: Read the evaluated quantity, retaining its domain and units.
- result:
  - approximate: -1.0 position units
- interpretation: Why can the same dial setting hold two different positions? At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
- independent check:
  - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
  - expected: -1.0
- limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- preset:
  - steps: 20
  - history: up-down
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
    []
- conditions to check:
  - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

## Written exploration recipe

- component id: component:hysteresis
- renderer id: hysteresis-visual-model
- renderer version: 1
- model id: hysteresis-visual-model
- model revision: 1
- expression id: ast:hysteresis:expression
- interaction status: implemented
- description: Hysteresis and remembered branches. At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
- controls:
  - Item:
    - id: steps
    - type: number
    - default: 20
    - min: 0
    - max: 80
    - step: 1
  - Item:
    - id: history
    - type: enum
    - default: up-down
    - values:
      - up-down
      - down-up
    - value labels:
      - up-down: Raise then lower
      - down-up: Lower then raise
- expected cases:
  - Item:
    - input:
      - steps: 20
      - history: up-down
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - steps: 60
      - history: up-down
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - steps: 20
      - history: down-up
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - steps: 33
      - history: up-down
    - status: valid
    - output: 1.1563971531240935
  - Item:
    - input:
      - steps: 73
      - history: up-down
    - status: valid
    - output: -1.1563971531240935
  - Item:
    - input:
      - steps: 0
      - history: up-down
    - status: valid
    - output: -1.2211966861810777
  - Item:
    - input:
      - steps: 80
      - history: up-down
    - status: valid
    - output: -1.2211966861810777
  - Item:
    - input:
      - steps: 81
      - history: up-down
    - status: invalid_parameters
  - Item:
    - input:
      - steps: 0.5
      - history: up-down
    - status: invalid_parameters
- compute: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
- numeric tolerance: 1e-10
- invariants:
  - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- limits:
  - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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

- Source ID: source:dynamics-extension:hysteresis. [Joel W. Robbin · Thom’s Catastrophe Theory](https://people.math.wisc.edu/~jwrobbin/catastrophe/catastrophe_talk.pdf). Locator: Cusp potential, fold curves and hysteresis in a quasi-static branch-following interpretation; original 2013 university seminar slides.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
