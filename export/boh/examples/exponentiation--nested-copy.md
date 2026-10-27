---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:exponentiation:nested-copy", "id": "math:example:exponentiation:nested-copy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponentiation", "example_id": "math:example:exponentiation:nested-copy", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d894e4f8287c7f109f646108acc85758be3324d89b60947638467d794133c533"}, "purpose": "See repeated multiplication, reciprocals and roots as parts of one positive-real power rule.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d894e4f8287c7f109f646108acc85758be3324d89b60947638467d794133c533", "status": "draft", "title": "Three smaller copies", "topics": ["mathematics", "algebra", "functions", "powers", "positive-real power"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Three smaller copies

Parent card: math:concept:exponentiation; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:exponentiation; revision 0.1.0-draft. Setting: Positive-real exponentiation; integer repetition motivates a continuous real extension. Expression: $b>0,\ x\in\mathbb R:\quad b^x=\exp(x\ln b),\qquad b^0=1,\quad b^{-x}=\frac{1}{b^x}.$. Conditions required for a defined value (a case may test their violation): The executable power family requires base>0 and finite real controls. The structural slider range for base is [−1,3]; nonpositive choices produce invalid_base rather than a fabricated real answer. The exponent is in [−3,5]; the positive base may equal 1. A dimensional quantity should be normalized before taking a general real power. Scope: Some negative-base integer powers and zero-base positive powers exist in other settings. They are deliberately outside this single continuous positive-base family. For b=1 the power is valid and constant, although some textbooks reserve the term exponential function for b≠1. No complex branches are implemented.

Case unit math:example:exponentiation:nested-copy. Setting: Original constructed teaching scenario; quantities are stipulated, not measured. Inputs: {"base": 0.5, "exponent": 3}. Result: {"exact": "1/8 of the reference width"}. Limits: This is width scaling, not a statement that three physical folds can have arbitrary thickness or no material limits.

## Complete worked case

- id: math:example:exponentiation:nested-copy
- title: Three smaller copies
- role: applied_model
- question: A layout operation retains half a normalized width each time. What fraction remains after three operations?
- setting: Original constructed teaching scenario; quantities are stipulated, not measured.
- assumptions:
  - The base is a positive, dimensionless multiplier.
  - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
  - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
- inputs:
  - base: 0.5
  - exponent: 3
- steps:
  - Item:
    - index: 1
    - expression: width factors=½, ¼, ⅛
    - reason: Apply the same half-width operation repeatedly.
  - Item:
    - index: 2
    - expression: (½)³=⅛=0.125
    - reason: Combine the operations into a power.
- result:
  - exact: 1/8 of the reference width
- interpretation: A positive base below 1 shrinks the result as the exponent increases. The factor stays positive.
- independent check:
  - method: Reciprocal comparison
  - expected: 0.5³=1/2³=1/8.
- limits: This is width scaling, not a statement that three physical folds can have arbitrary thickness or no material limits.
- preset:
  - base: 0.5
  - exponent: 3
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The base is a positive, dimensionless multiplier.
  - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
  - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.

## Written exploration recipe

- component id: exponentiation-visual-model
- renderer id: exponentiation-visual-model
- renderer version: 1.0.0
- model id: exponentiation-visual-model
- model revision: 1.0.0
- expression id: ast:exponentiation:expression
- interaction status: implemented
- description: A reference shape scales by the positive result factor while a graph tracks exponent to output; story labels distinguish a length factor from an area factor.
- controls:
  - Item:
    - id: base
    - type: number
    - default: 2
    - min: -1
    - max: 3
    - slider min: -1
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: exponent
    - type: number
    - default: 3
    - min: -3
    - max: 5
    - slider min: -3
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
- expected cases:
  - Item:
    - input:
      - base: 2
      - exponent: 3
    - output: 8
  - Item:
    - input:
      - base: 1
      - exponent: 5
    - output: 1
  - Item:
    - input:
      - base: 2
      - exponent: 0
    - output: 1
  - Item:
    - input:
      - base: 2
      - exponent: -3
    - output: 0.125
  - Item:
    - input:
      - base: 0.25
      - exponent: -3
    - output: 64
  - Item:
    - input:
      - base: 3
      - exponent: 5
    - output: 243
  - Item:
    - input:
      - base: 2.25
      - exponent: 0.5
    - output: 1.5
  - Item:
    - input:
      - base: 0.5
      - exponent: 3
    - output: 0.125
  - Item:
    - input:
      - base: 0
      - exponent: 2
    - status: invalid_base
  - Item:
    - input:
      - base: -1
      - exponent: 2
    - status: invalid_base
  - Item:
    - input:
      - base: 2
      - exponent: 6
    - status: invalid_parameters
- compute: If base<=0 return invalid_base. Otherwise output=base**exponent and reciprocal=base**(-exponent); base=1 is a valid constant power. The positive-real rule is exp(exponent*ln(base)).
- numeric tolerance: 1e-10
- invariants:
  - The executable power family requires base>0 and finite real controls.
  - The structural slider range for base is [−1,3]; nonpositive choices produce invalid_base rather than a fabricated real answer.
  - The exponent is in [−3,5]; the positive base may equal 1.
  - A dimensional quantity should be normalized before taking a general real power.
- limits:
  - The live family has positive bases and real exponents; it does not classify every zero- or negative-base special case.
  - Repeated discrete operations give physical meaning at integer exponents; in-between motion follows a declared mathematical interpolation.
  - A changing normalized scale is not a claim about physical growth, image detail or measured data.
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

- Source ID: source:openstax:exponent-rules. [College Algebra 2e, 1.2 Exponents and Scientific Notation](https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation). Locator: Product rule; zero exponent; negative exponent; powers of products. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:positive-real-powers. [Precalculus 2e, 4.1 Exponential Functions](https://openstax.org/books/precalculus-2e/pages/4-1-exponential-functions). Locator: Identifying Exponential Functions; positive base with real exponent; growth and decay; conventional exclusion of base 1 from nonconstant exponential functions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
