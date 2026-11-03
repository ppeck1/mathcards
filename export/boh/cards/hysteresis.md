---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:hysteresis", "id": "math:concept:hysteresis", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:hysteresis", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d382fdf75aacc697aeda194abeaf86b7c49a173a81d5f728f45a8e400424afc1"}, "purpose": "Why can the same dial setting hold two different positions?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d382fdf75aacc697aeda194abeaf86b7c49a173a81d5f728f45a8e400424afc1", "status": "draft", "title": "Hysteresis and remembered branches", "topics": ["mathematics", "dynamics", "hysteresis and remembered branches"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Hysteresis and remembered branches

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:hysteresis; revision 0.1.0-draft. Setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone. Expression: $V(x;b)=\frac{x^4}{4}-\frac{x^2}{2}-bx,\quad x^3-x-b=0,\quad 3x^2-1>0.$. Conditions required for a defined value (a case may test their violation): A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

## Schema Version

0.1.0

## Id

math:concept:hysteresis

## Slug

hysteresis

## Type

concept

## Title

Hysteresis and remembered branches

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- hysteresis and remembered branches

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can the same dial setting hold two different positions?

## Meaning

At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:cusp-potential
  - math:concept:fold-bifurcation
  - math:concept:basin-attraction
- depth:
  []

## Definition

- setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
- formal latex: V(x;b)=\frac{x^4}{4}-\frac{x^2}{2}-bx,\quad x^3-x-b=0,\quad 3x^2-1>0.
- signature:
  - k: Sweep step k
  - H: Initial sweep direction
  - b: bias
  - x: Selected resting position
  - V: potential
- conditions:
  - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- domain notes: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- proof status: Author-derived for the stated bounded family; independent mathematical review pending.
- source refs:
  - source:dynamics-extension:hysteresis

## Grammar

- pronunciation: Hysteresis and remembered branches
- expression latex: V(x;b)=\frac{x^4}{4}-\frac{x^2}{2}-bx,\quad x^3-x-b=0,\quad 3x^2-1>0.
- formation rule: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
- precedence: Keep the selected pole, starting state, frame and input grouping explicit before evaluating.
- symbols:
  - Item:
    - token: k
    - role: Sweep step k
    - type: Declared quantity or model choice
  - Item:
    - token: H
    - role: Initial sweep direction
    - type: Declared quantity or model choice
  - Item:
    - token: b
    - role: bias
    - type: Declared quantity or model choice
  - Item:
    - token: x
    - role: Selected resting position
    - type: Declared quantity or model choice
  - Item:
    - token: V
    - role: potential
    - type: Declared quantity or model choice
- ast:
  - id: ast:hysteresis:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared model input
      - symbol: k
      - scope ref: scope:hysteresis
    - Item:
      - id: n:history
      - kind: variable
      - type: Declared model input
      - symbol: H
      - scope ref: scope:hysteresis
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared family
      - ref: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
    - Item:
      - id: n:bound-steps
      - kind: apply
      - type: Declared model result
      - function: n:rule
      - argument: n:steps
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared model result
      - function: n:bound-steps
      - argument: n:history
  - scopes:
    - Item:
      - id: scope:hysteresis
      - kind: modelExpression
      - free variables:
        - k
        - H
      - domain condition: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- parse errors:
  - Item:
    - input: Treat a different rule or history as the same input
    - status: domain or model mismatch
    - reason: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- ast coverage: Typed application outline of the declared family, not an arbitrary expression parser or a general theorem checker.
- output symbol bindings:
  - k: steps
  - H: history
  - b: bias
  - x: currentX
  - V: potential

## Properties

- Item:
  - claim: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - conditions: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - derivation: Use the stated formulas under their declared hypotheses; the independent reference checks the executable cases.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:hysteresis:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:cusp-potential
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Hysteresis and remembered branches makes a bounded connection with cusp potential.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:fold-bifurcation
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Hysteresis and remembered branches makes a bounded connection with fold bifurcation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:basin-attraction
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Hysteresis and remembered branches makes a bounded connection with basin attraction.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
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
- Item:
  - id: math:example:hysteresis:case-2
  - title: Zero dial after the snap
  - role: applied_model
  - question: Why can the same dial setting hold two different positions?
  - setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
  - assumptions:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - inputs:
    - steps: 60
    - history: up-down
  - steps:
    - Item:
      - index: 1
      - expression: k = 60; H = Raise then lower
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: x³ − x − b = 0; retain the nearest stable branch
      - reason: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
    - Item:
      - index: 3
      - expression: 1.0 position units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.0 position units
  - interpretation: Why can the same dial setting hold two different positions? At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.0
  - limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - preset:
    - steps: 60
    - history: up-down
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- Item:
  - id: math:example:hysteresis:case-3
  - title: Reverse the starting history
  - role: applied_model
  - question: Why can the same dial setting hold two different positions?
  - setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
  - assumptions:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - inputs:
    - steps: 20
    - history: down-up
  - steps:
    - Item:
      - index: 1
      - expression: k = 20; H = Lower then raise
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: x³ − x − b = 0; retain the nearest stable branch
      - reason: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
    - Item:
      - index: 3
      - expression: 1.0 position units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.0 position units
  - interpretation: Why can the same dial setting hold two different positions? At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.0
  - limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - preset:
    - steps: 20
    - history: down-up
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- Item:
  - id: math:example:hysteresis:case-4
  - title: Pass the upper switching region
  - role: applied_model
  - question: Why can the same dial setting hold two different positions?
  - setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
  - assumptions:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - inputs:
    - steps: 33
    - history: up-down
  - steps:
    - Item:
      - index: 1
      - expression: k = 33; H = Raise then lower
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: x³ − x − b = 0; retain the nearest stable branch
      - reason: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
    - Item:
      - index: 3
      - expression: 1.1563971531 position units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 1.1563971531 position units
  - interpretation: Why can the same dial setting hold two different positions? At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 1.1563971531240935
  - limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - preset:
    - steps: 33
    - history: up-down
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
- Item:
  - id: math:example:hysteresis:case-5
  - title: Pass the lower switching region
  - role: applied_model
  - question: Why can the same dial setting hold two different positions?
  - setting: A toy snap mechanism rests in one of two wells. Raise its control dial, then lower it again. The mechanism follows its current stable branch until that branch disappears. Returning the dial to zero can leave it in a different well. The chosen history is visible, so position is not silently inferred from the dial alone.
  - assumptions:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - inputs:
    - steps: 73
    - history: up-down
  - steps:
    - Item:
      - index: 1
      - expression: k = 73; H = Raise then lower
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: x³ − x − b = 0; retain the nearest stable branch
      - reason: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
    - Item:
      - index: 3
      - expression: -1.1563971531 position units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: -1.1563971531 position units
  - interpretation: Why can the same dial setting hold two different positions? At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: -1.1563971531240935
  - limits: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - preset:
    - steps: 73
    - history: up-down
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

## Interactive

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

## Prompts

- Item:
  - prompt: Why can the same dial setting hold two different positions?
  - answer: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
- Item:
  - prompt: Which assumption matters for this construction?
  - answer: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.

## Representations

- Item:
  - kind: geometry
  - description: Hysteresis and remembered branches uses model-derived positions and marks.
- Item:
  - kind: graph
  - description: A distinct history, response or coordinate graph retains declared domains and gaps.
- Item:
  - kind: substitution
  - description: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.

## Applications

- Item:
  - context: Originally authored model scenario
  - mapping: Why can the same dial setting hold two different positions?
  - limitations: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - evidence kind: constructed_example
  - example ref: math:example:hysteresis:case-1
- Item:
  - context: A changed history, parameter or chart
  - mapping: At each whole sweep step, solve the stationary cubic. Among its stable roots choose the one nearest the preceding selected root. Start at the unique root for b=−0.6, or b=0.6 for the reversed history.
  - limitations: A declared quasi-static branch-following rule samples 81 controls. Stable roots satisfy 3x²−1>0. A snap selects the other stable root after the followed branch disappears; no transient motion, switching rate or global minimum rule is simulated.
  - evidence kind: constructed_example
  - example ref: math:example:hysteresis:case-2

## Source Refs

- source:dynamics-extension:hysteresis

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch continuation: added bounded models, connected calculations, views and reference coverage.

## Referenced source registry

- Source ID: source:dynamics-extension:hysteresis. [Joel W. Robbin · Thom’s Catastrophe Theory](https://people.math.wisc.edu/~jwrobbin/catastrophe/catastrophe_talk.pdf). Locator: Cusp potential, fold curves and hysteresis in a quasi-static branch-following interpretation; original 2013 university seminar slides.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
