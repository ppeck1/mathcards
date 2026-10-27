---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:derivative:corner", "id": "math:example:derivative:corner", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:derivative", "example_id": "math:example:derivative:corner", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.1-draft", "upstream_content_sha256": "da1b98043fa01d001465a389beebd95ed3e8aec9aa5e6a20175abcf2843aca31"}, "purpose": "Express the first-order response near a point when that local rate exists.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "da1b98043fa01d001465a389beebd95ed3e8aec9aa5e6a20175abcf2843aca31", "status": "draft", "title": "Does |x| have a derivative at zero?", "topics": ["mathematics", "calculus", "change", "local rate of change", "tangent slope", "f prime", "dy/dx"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Does |x| have a derivative at zero?

Parent card: math:concept:derivative; revision 0.1.1-draft. Original worked draft; independent review pending.

Definition unit math:concept:derivative; revision 0.1.1-draft. Setting: A real-valued function on an open interval containing a; ordinary finite two-sided derivative. Expression: $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$. Conditions required for a defined value (a case may test their violation): f is defined on an open interval containing a. The quotient uses h≠0 with a+h in the domain. The finite limit must agree from both sides. Scope: This card does not define one-sided endpoint derivatives, complex derivatives or generalized derivatives.

Case unit math:example:derivative:corner. Setting: Real absolute-value function at an interior point Inputs: {"a": 0}. Result: {"exact": "Undefined derivative at zero"}. Limits: A wide plot or rounded pixel corner must not smooth away this failure.

## Complete worked case

- id: math:example:derivative:corner
- title: Does |x| have a derivative at zero?
- role: boundary
- question: Does |x| have a derivative at zero?
- setting: Real absolute-value function at an interior point
- assumptions:
  - Real absolute-value function at an interior point
- inputs:
  - a: 0
- steps:
  - Item:
    - index: 1
    - expression: |h|/h=1 for h>0
    - reason: Approach from the right.
  - Item:
    - index: 2
    - expression: |h|/h=−1 for h<0
    - reason: Approach from the left.
- result:
  - exact: Undefined derivative at zero
- interpretation: Continuity does not guarantee differentiability.
- independent check:
  - method: Independent algebra or condition check
  - expected: The two one-sided quotient limits disagree.
- limits: A wide plot or rounded pixel corner must not smooth away this failure.
- preset: null
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- conditions to check:
  - f is defined on an open interval containing a.
  - The quotient uses h≠0 with a+h in the domain.
  - The finite limit must agree from both sides.

## Written exploration recipe

- component id: derivative-secant-tangent
- renderer id: derivative-secant-tangent
- renderer version: 1
- model id: derivative-secant-tangent
- model revision: 1
- expression id: ast:derivative:limit-quotient
- interaction status: implemented
- description: Change a and signed nonzero h; compare secant slope with analytic derivative for cubic, linear and absolute-value presets. Show both sides of the corner.
- controls:
  - Item:
    - id: preset
    - type: enum
    - values:
      - cubic
      - linear
      - absolute
    - default: cubic
  - Item:
    - id: a
    - type: number
    - min: -3
    - max: 3
    - default: 2
    - step: 0.25
  - Item:
    - id: h
    - type: number
    - min: -1
    - max: 1
    - default: 0.1
    - step: 0.01
    - excluded:
      - 0
- numeric tolerance: 1e-10
- expected cases:
  - Item:
    - input:
      - preset: cubic
      - a: 2
      - h: 0.1
    - output: 12.61
    - analytic: 12
  - Item:
    - input:
      - preset: cubic
      - a: 2
      - h: -0.1
    - output: 11.41
    - analytic: 12
  - Item:
    - input:
      - preset: linear
      - a: 2
      - h: 0.2
    - output: 3
    - analytic: 3
  - Item:
    - input:
      - preset: absolute
      - a: 0
      - h: 0.1
    - output: 1
    - analytic status: undefined
  - Item:
    - input:
      - preset: absolute
      - a: 0
      - h: -0.1
    - output: -1
    - analytic status: undefined
  - Item:
    - input:
      - preset: cubic
      - a: 2
      - h: 0
    - status: undefined_step
    - analytic: 12
- invariants:
  - For a fixed linear preset 3x+1, every valid secant slope is 3.
  - The absolute-value preset at a=0 has slopes of opposite sign from the two sides.
- limits:
  - The graph is finite and cannot prove limit existence.
  - Do not treat an extremely small floating-point h as exact zero or as exact derivative.
  - Display secant and analytic derivative as different outputs.
  - At h=0 only the finite quotient is undefined; compute/display the analytic derivative independently when it exists. Each output has its own validity state.
- fallback: Table of signed h, quotient and analytic derivative; plain description of the two-sided condition.
- snapshot fields:
  - card_id
  - card_revision
  - model_id
  - model_revision
  - renderer_version
  - preset
  - a
  - h
  - outputs
  - numeric_tolerance
  - note

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:hmc:derivative. [Harvey Mudd College, Limit Definition of the Derivative](https://math.hmc.edu/calculus/hmc-mathematics-calculus-online-tutorials/single-variable-calculus/limit-definition-of-the-derivative/). Locator: Definition and undefined-limit note. Verification: definition inspected 2026-10-23. Rights: Only definition-level reference; examples below are independently constructed.

- Source ID: source:mactutor:calculus-notation. [MacTutor, Earliest Uses of Symbols of Calculus](https://mathshistory.st-andrews.ac.uk/Miller/mathsym/calculus/). Locator: Derivative paragraph; cites Cajori vol. 2 p. 204. Verification: secondary account inspected 2026-10-23; underlying manuscript not inspected. Rights: Brief paraphrase only; not a claim of original manuscript inspection.
