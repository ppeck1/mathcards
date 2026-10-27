---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:log:invalid-domain", "id": "math:example:log:invalid-domain", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:real-logarithm", "example_id": "math:example:log:invalid-domain", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.1-draft", "upstream_content_sha256": "6ca6dce7c59c287ebd573cb640c7b6df9136b54f1499905d882286c70300e0f2"}, "purpose": "Express the exponent needed to obtain a positive number from a chosen positive base.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6ca6dce7c59c287ebd573cb640c7b6df9136b54f1499905d882286c70300e0f2", "status": "draft", "title": "Can these values be evaluated as real logarithms?", "topics": ["mathematics", "functions", "scale", "logarithm to a base"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Can these values be evaluated as real logarithms?

Parent card: math:concept:real-logarithm; revision 0.1.1-draft. Original worked draft; independent review pending.

Definition unit math:concept:real-logarithm; revision 0.1.1-draft. Setting: Real logarithm with fixed real base b>0 and b≠1. Expression: $\log_b(x)=y\iff b^y=x,\qquad b>0,\ b\ne1,\ x>0.$. Conditions required for a defined value (a case may test their violation): The base is positive and is not 1. The argument is positive in this real setting. Scope: For b>1 the function increases; for 0<b<1 it decreases. No real logarithm value is assigned to x≤0.

Case unit math:example:log:invalid-domain. Setting: Real logarithm only. Inputs: {"cases": [{"b": 2, "x": 0}, {"b": 2, "x": -8}, {"b": 1, "x": 8}]}. Result: {"statuses": ["undefined_argument", "undefined_argument", "invalid_base"]}. Limits: Complex logarithms are a different setting with additional choices. Do not silently display one as a real answer.

## Complete worked case

- id: math:example:log:invalid-domain
- role: boundary
- question: Can these values be evaluated as real logarithms?
- setting: Real logarithm only.
- inputs:
  - cases:
    - Item:
      - b: 2
      - x: 0
    - Item:
      - b: 2
      - x: -8
    - Item:
      - b: 1
      - x: 8
- steps:
  - Item:
    - index: 1
    - expression: No real y satisfies 2^y=0 or 2^y=−8.
    - reason: Positive real exponentials have positive outputs.
  - Item:
    - index: 2
    - expression: 1^y=1 for all real y.
    - reason: Base 1 cannot provide an inverse yielding 8.
- result:
  - statuses:
    - undefined_argument
    - undefined_argument
    - invalid_base
- interpretation: These failures come from the mathematical setting; they are not zeros or missing measurements.
- independent check:
  - method: Compare with the output range of the corresponding exponential.
  - expected: Positive range for base 2; constant 1 for base 1.
- limits: Complex logarithms are a different setting with additional choices. Do not silently display one as a real answer.
- preset: null
- provenance:
  - kind: original worked derivation
  - mathematical review: draft
  - external source refs:
- assumptions:
  - Real logarithm only.
- title: Can these values be evaluated as real logarithms?
- conditions to check:
  - The base is positive and is not 1.
  - The argument is positive in this real setting.

## Written exploration recipe

- component id: real-logarithm-linked-exponential
- model revision: 1
- description: Manipulate base and positive argument; link y=log_b(x), b^y=x, a plot, a table and an exponent ladder.
- controls:
  - Item:
    - id: base
    - type: number
    - default: 2
    - slider min: 0.25
    - slider max: 8
    - slider step: 0.25
    - text input policy: Allow entry of invalid values to explain why they are invalid; do not clamp silently.
    - excluded:
      - 1
  - Item:
    - id: argument
    - type: number
    - default: 8
    - slider min: 0.125
    - slider max: 64
    - slider step: 0.125
    - text input policy: Display explicit undefined state for nonpositive entries.
- compute: For valid inputs use ln(argument)/ln(base); retain exact results only when a trusted exact case is established. Floating output is explicitly approximate.
- numeric tolerance: 1e-12
- expected cases:
  - Item:
    - input:
      - base: 2
      - argument: 8
    - output: 3
    - exact display: 3
  - Item:
    - input:
      - base: 10
      - argument: 1000
    - output: 3
    - exact display: 3
  - Item:
    - input:
      - base: 0.5
      - argument: 8
    - output: -3
    - exact display: −3
  - Item:
    - input:
      - base: 2
      - argument: 1
    - output: 0
    - exact display: 0
  - Item:
    - input:
      - base: 2
      - argument: 6
    - output: 2.584962500721156
    - display status: approximate
  - Item:
    - input:
      - base: 1
      - argument: 8
    - status: invalid_base
  - Item:
    - input:
      - base: 2
      - argument: 0
    - status: undefined_argument
- invariants:
  - For valid finite cases, b^output approximately reconstructs argument within a separately stated absolute/relative tolerance.
  - At argument 1, output is 0 for every valid base.
  - All linked representations use the same validated base and argument.
- limits:
  - The plot displays a finite window of a function defined for all positive arguments.
  - The x=0 boundary is excluded and no line crosses into nonpositive x.
  - Near base 1, numerical sensitivity increases; report warnings or bounded accuracy instead of falsely precise output.
  - Invalid input never falls back to a previous valid answer without a clear stale-result label.
- fallback: Definition, base/argument conditions, worked table and a textual description of increasing/decreasing behavior.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - base
  - argument
  - result_status
  - result
  - numeric_tolerance
  - viewport
  - note
- renderer id: real-logarithm-linked-exponential
- renderer version: 1
- model id: real-logarithm-linked-exponential
- expression id: ast:real-log:expression
- interaction status: implemented

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:openstax:log. [Precalculus 2e, 4.3 Logarithmic Functions](https://openstax.org/books/precalculus-2e/pages/4-3-logarithmic-functions). Locator: Definition of the Logarithmic Function. Verification: definition inspected 2026-10-23. Rights: Original explanations/examples in this package; no textbook exercise bank copied.

- Source ID: source:mactutor:symbols. [MacTutor, Earliest Uses of Various Mathematical Symbols](https://mathshistory.st-andrews.ac.uk/Miller/mathsym/). Locator: Functions, operations, calculus and written-source indexes. Verification: index inspected 2026-10-23; research route only. Rights: Research pointer, not evidence for a specific unresearched first-use claim.
