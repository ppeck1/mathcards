---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:gradient-flow:case-3", "id": "math:example:gradient-flow:case-3", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gradient-flow", "example_id": "math:example:gradient-flow:case-3", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "c3106e25b790a5115b48b9df5f5400736dcf36df162d917eac0d85286603049c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "cab868ab9e0ad0f1568be4262e2308d3fb3abbe7e1015381047584f51f4c1f0e"}, "purpose": "What makes a continuously corrected position lose potential?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "cab868ab9e0ad0f1568be4262e2308d3fb3abbe7e1015381047584f51f4c1f0e", "status": "draft", "title": "Wait while the cost falls", "topics": ["mathematics", "dynamics", "gradient flow and falling potential"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Wait while the cost falls

Parent card: math:concept:gradient-flow; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:gradient-flow; revision 0.1.0-draft. Setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously. Expression: $V(x,y)=\frac{a x^2+b y^2}{2},\quad \dot x=-ax,\quad\dot y=-by,\quad x(t)=2e^{-at},\quad y(t)=e^{-bt},\quad \frac{dV}{dt}=-\|\nabla V\|^2.$. Conditions required for a defined value (a case may test their violation): V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model. The displayed calculation, coordinates and marks are evaluated from the same declared input state. The scenario is a constructed teaching model; source book and historical coverage are separate editorial questions. Scope: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.

Case unit math:example:gradient-flow:case-3. Setting: An ideal camera mount starts two units horizontally and one unit vertically from alignment. Its controller continuously corrects each coordinate using the negative gradient of a quadratic cost. Change the two return rates. The point can curve toward alignment while the cost falls continuously. Inputs: {"a": 1, "b": 0.5, "time": 5}. Result: {"approximate": "0.0017752866 cost units"}. Limits: V(x,y)=(a x²+b y²)/2, with a,b positive and a fixed start (2,1). The exact continuous solution is used; there is no time-step parameter or numerical integrator. This is a constructed controller model.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:dynamics-extension:gradient. [Gautam Iyer · Lyapunov functions and Stability](https://www.math.cmu.edu/~gautam/c/2026-632/notes/stability.html). Locator: Proposition 14, Gradient flows; the quadratic exact solution and controller story are original derivations.. Verification: Primary definition or model context inspected 2026-11-02; independently reviewed teaching status remains pending.. Rights: Original explanations, scenarios, figures and examples. No source exercises or scans reproduced.
