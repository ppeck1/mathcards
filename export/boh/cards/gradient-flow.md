---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:gradient-flow", "id": "math:concept:gradient-flow", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gradient-flow", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "cab868ab9e0ad0f1568be4262e2308d3fb3abbe7e1015381047584f51f4c1f0e"}, "purpose": "What makes a continuously corrected position lose potential?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "cab868ab9e0ad0f1568be4262e2308d3fb3abbe7e1015381047584f51f4c1f0e", "status": "draft", "title": "Gradient flow and falling potential", "topics": ["mathematics", "dynamics", "gradient flow and falling potential"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Gradient flow and falling potential

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:gradient-flow; revision 0.1.0-draft. Setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously. Expression: $V(x,y)=\frac{a x^2+b y^2}{2},\quad \dot x=-ax,\quad\dot y=-by,\quad x(t)=2e^{-at},\quad y(t)=e^{-bt},\quad \frac{dV}{dt}=-\|\nabla V\|^2.$. Conditions required for a defined value (a case may test their violation): V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.

## Schema Version

0.1.0

## Id

math:concept:gradient-flow

## Slug

gradient-flow

## Type

concept

## Title

Gradient flow and falling potential

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

- gradient flow and falling potential

## Branches

- dynamics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What makes a continuously corrected position lose potential?

## Meaning

Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:gradient
  - math:concept:gradient-descent
  - math:concept:continuous-flow
- depth:
  []

## Definition

- setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
- formal latex: V(x,y)=\frac{a x^2+b y^2}{2},\quad \dot x=-ax,\quad\dot y=-by,\quad x(t)=2e^{-at},\quad y(t)=e^{-bt},\quad \frac{dV}{dt}=-\|\nabla V\|^2.
- signature:
  - t: Elapsed time t
  - a: Horizontal return rate a
  - b: Vertical return rate b
  - x: x
  - y: y
  - V: cost
  - dV/dt: dissipation
- conditions:
  - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- domain notes: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- proof status: Author-derived for the stated bounded family; independent mathematical review pending.
- source refs:
  - source:dynamics-extension:gradient

## Grammar

- pronunciation: Gradient flow and falling potential
- expression latex: V(x,y)=\frac{a x^2+b y^2}{2},\quad \dot x=-ax,\quad\dot y=-by,\quad x(t)=2e^{-at},\quad y(t)=e^{-bt},\quad \frac{dV}{dt}=-\|\nabla V\|^2.
- formation rule: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
- precedence: Keep the selected pole, starting state, frame and input grouping explicit before evaluating.
- symbols:
  - Item:
    - token: t
    - role: Elapsed time t
    - type: Declared quantity or model choice
  - Item:
    - token: a
    - role: Horizontal return rate a
    - type: Declared quantity or model choice
  - Item:
    - token: b
    - role: Vertical return rate b
    - type: Declared quantity or model choice
  - Item:
    - token: x
    - role: x
    - type: Declared quantity or model choice
  - Item:
    - token: y
    - role: y
    - type: Declared quantity or model choice
  - Item:
    - token: V
    - role: cost
    - type: Declared quantity or model choice
  - Item:
    - token: dV/dt
    - role: dissipation
    - type: Declared quantity or model choice
- ast:
  - id: ast:gradient-flow:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - type: Declared model input
      - symbol: t
      - scope ref: scope:gradient-flow
    - Item:
      - id: n:a
      - kind: variable
      - type: Declared model input
      - symbol: a
      - scope ref: scope:gradient-flow
    - Item:
      - id: n:b
      - kind: variable
      - type: Declared model input
      - symbol: b
      - scope ref: scope:gradient-flow
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared family
      - ref: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - id: n:bound-time
      - kind: apply
      - type: Declared model result
      - function: n:rule
      - argument: n:time
    - Item:
      - id: n:bound-a
      - kind: apply
      - type: Declared model result
      - function: n:bound-time
      - argument: n:a
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared model result
      - function: n:bound-a
      - argument: n:b
  - scopes:
    - Item:
      - id: scope:gradient-flow
      - kind: modelExpression
      - free variables:
        - t
        - a
        - b
      - domain condition: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- parse errors:
  - Item:
    - input: Treat a different rule or history as the same input
    - status: domain or model mismatch
    - reason: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- ast coverage: Typed application outline of the declared family, not an arbitrary expression parser or a general theorem checker.
- output symbol bindings:
  - t: time
  - a: a
  - b: b
  - x: x
  - y: y
  - V: cost
  - dV/dt: dissipation

## Properties

- Item:
  - claim: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - conditions: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - derivation: Use the stated formulas under their declared hypotheses; the independent reference checks the executable cases.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:gradient-flow:case-1

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
  - target: math:concept:gradient
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Gradient flow and falling potential makes a bounded connection with gradient.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:gradient-descent
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Gradient flow and falling potential makes a bounded connection with gradient descent.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:continuous-flow
  - type: supports
  - conditions: Use each connected family under its own stated assumptions.
  - reason: Gradient flow and falling potential makes a bounded connection with continuous flow.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:gradient-flow:case-1
  - title: Read the initial cost
  - role: applied_model
  - question: What makes a continuously corrected position lose potential?
  - setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
  - assumptions:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - inputs:
    - time: 0
    - a: 1
    - b: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 0; a = 1; b = 0.5
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: ṙ = −∇V; dV/dt = −‖∇V‖²
      - reason: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - index: 3
      - expression: 2.25 cost units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 2.25 cost units
  - interpretation: What makes a continuously corrected position lose potential? Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 2.25
  - limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - preset:
    - time: 0
    - a: 1
    - b: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- Item:
  - id: math:example:gradient-flow:case-2
  - title: Follow one time unit
  - role: applied_model
  - question: What makes a continuously corrected position lose potential?
  - setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
  - assumptions:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - inputs:
    - time: 1
    - a: 1
    - b: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; a = 1; b = 0.5
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: ṙ = −∇V; dV/dt = −‖∇V‖²
      - reason: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - index: 3
      - expression: 0.3626404268 cost units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.3626404268 cost units
  - interpretation: What makes a continuously corrected position lose potential? Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.362640426766086
  - limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - preset:
    - time: 1
    - a: 1
    - b: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- Item:
  - id: math:example:gradient-flow:case-3
  - title: Wait while the cost falls
  - role: applied_model
  - question: What makes a continuously corrected position lose potential?
  - setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
  - assumptions:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - inputs:
    - time: 5
    - a: 1
    - b: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 5; a = 1; b = 0.5
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: ṙ = −∇V; dV/dt = −‖∇V‖²
      - reason: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - index: 3
      - expression: 0.0017752866 cost units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.0017752866 cost units
  - interpretation: What makes a continuously corrected position lose potential? Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.0017752866092963365
  - limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - preset:
    - time: 5
    - a: 1
    - b: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- Item:
  - id: math:example:gradient-flow:case-4
  - title: Swap the return rates
  - role: applied_model
  - question: What makes a continuously corrected position lose potential?
  - setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
  - assumptions:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - inputs:
    - time: 1
    - a: 0.5
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; a = 0.5; b = 1
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: ṙ = −∇V; dV/dt = −‖∇V‖²
      - reason: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - index: 3
      - expression: 0.4355470828 cost units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.4355470828 cost units
  - interpretation: What makes a continuously corrected position lose potential? Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.4355470827897487
  - limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - preset:
    - time: 1
    - a: 0.5
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
- Item:
  - id: math:example:gradient-flow:case-5
  - title: Give both coordinates the same rate
  - role: applied_model
  - question: What makes a continuously corrected position lose potential?
  - setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously.
  - assumptions:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - inputs:
    - time: 1
    - a: 1
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: t = 1; a = 1; b = 1
      - reason: These conditions select the declared family, coordinate chart or whole history step.
    - Item:
      - index: 2
      - expression: ṙ = −∇V; dV/dt = −‖∇V‖²
      - reason: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
    - Item:
      - index: 3
      - expression: 0.3383382081 cost units
      - reason: Read the evaluated quantity, retaining its domain and units.
  - result:
    - approximate: 0.3383382081 cost units
  - interpretation: What makes a continuously corrected position lose potential? Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - independent check:
    - method: Separate Python implementation using bisection, reciprocal tangent or independent analytic identities.
    - expected: 0.33833820809153176
  - limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - preset:
    - time: 1
    - a: 1
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.

## Interactive

- component id: component:gradient-flow
- renderer id: gradient-flow-visual-model
- renderer version: 1
- model id: gradient-flow-visual-model
- model revision: 1
- expression id: ast:gradient-flow:expression
- interaction status: implemented
- description: Gradient flow and falling potential. Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 1
    - min: 0
    - max: 5
    - step: 0.05
  - Item:
    - id: a
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.05
  - Item:
    - id: b
    - type: number
    - default: 0.5
    - min: 0.25
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - time: 0
      - a: 1
      - b: 0.5
    - status: valid
    - output: 2.25
  - Item:
    - input:
      - time: 1
      - a: 1
      - b: 0.5
    - status: valid
    - output: 0.362640426766086
  - Item:
    - input:
      - time: 5
      - a: 1
      - b: 0.5
    - status: valid
    - output: 0.0017752866092963365
  - Item:
    - input:
      - time: 1
      - a: 0.5
      - b: 1
    - status: valid
    - output: 0.4355470827897487
  - Item:
    - input:
      - time: 1
      - a: 1
      - b: 1
    - status: valid
    - output: 0.33833820809153176
  - Item:
    - input:
      - time: 1
      - a: 0.25
      - b: 0.5
    - status: valid
    - output: 0.3952351901491773
  - Item:
    - input:
      - time: 1
      - a: 2
      - b: 0.5
    - status: valid
    - output: 0.1652324158477973
  - Item:
    - input:
      - time: 1
      - a: 1
      - b: 0.25
    - status: valid
    - output: 0.34648689893730455
  - Item:
    - input:
      - time: 1
      - a: 1
      - b: 2
    - status: valid
    - output: 0.28898620536195957
  - Item:
    - input:
      - time: 6
      - a: 1
      - b: 0.5
    - status: invalid_parameters
- compute: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
- numeric tolerance: 1e-10
- invariants:
  - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - The displayed calculation, coordinates and marks are evaluated from the same declared input state.
  - The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions.
- limits:
  - V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
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
  - prompt: What makes a continuously corrected position lose potential?
  - answer: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
- Item:
  - prompt: Which assumption matters for this construction?
  - answer: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.

## Representations

- Item:
  - kind: geometry
  - description: Gradient flow and falling potential uses model-derived positions and marks.
- Item:
  - kind: graph
  - description: A distinct history, response or coordinate graph retains declared domains and gaps.
- Item:
  - kind: substitution
  - description: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.

## Applications

- Item:
  - context: Originally authored model scenario
  - mapping: What makes a continuously corrected position lose potential?
  - limitations: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - evidence kind: constructed_example
  - example ref: math:example:gradient-flow:case-1
- Item:
  - context: A changed history, parameter or chart
  - mapping: Evaluate the exact exponential response of each coordinate from the fixed start (2,1), substitute it into the quadratic potential, and use the chain rule to obtain minus the squared gradient norm.
  - limitations: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.
  - evidence kind: constructed_example
  - example ref: math:example:gradient-flow:case-2

## Source Refs

- source:dynamics-extension:gradient

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch continuation: added bounded models, connected calculations, views and reference coverage.

## Referenced source registry

- Source ID: source:dynamics-extension:gradient. [Gautam Iyer · Lyapunov functions and Stability](https://www.math.cmu.edu/~gautam/c/2026-632/notes/stability.html). Locator: Proposition 14, Gradient flows; the quadratic exact solution and controller story are original derivations.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
