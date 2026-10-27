---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:complex-multiplication", "id": "math:concept:complex-multiplication", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:complex-multiplication", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9a5270f0b11fb663a32fc8495871156e02d032112aa93c9e732ad0f12d11965e"}, "purpose": "Use one complex multiplication to rotate and scale a point in the plane.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9a5270f0b11fb663a32fc8495871156e02d032112aa93c9e732ad0f12d11965e", "status": "draft", "title": "Complex numbers & transformations", "topics": ["mathematics", "number-arithmetic", "modeling", "complex multiplication", "rotation and scale"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Complex numbers & transformations

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:complex-multiplication; revision 0.1.0-draft. Setting: Use one complex multiplication to rotate and scale a point in the plane. Expression: $(2+i)(u+iv)=(2u-v)+i(u+2v)$. Conditions required for a defined value (a case may test their violation): Use the complex plane with i²=−1 and fixed input z=2+i. The real and imaginary coordinates share the same chosen unit. A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument. Scope: The interactive controls restrict each parameter to its declared finite interval. A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle.

## Schema Version

0.1.0

## Id

math:concept:complex-multiplication

## Slug

complex-multiplication

## Type

concept

## Title

Complex numbers & transformations

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- complex multiplication
- rotation and scale

## Branches

- number-arithmetic
- modeling

## Expressive Job

- model
- visualize
- compare

## Purpose

Use one complex multiplication to rotate and scale a point in the plane.

## Meaning

A multiplier changes both coordinates together. Its modulus scales length and its argument turns the vector.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:complex-multiplication:turn-grow
  - title: Transform a layout point
  - role: applied_model
  - question: Where does z=2+i land after multiplying by 1+i?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - inputs:
    - real: 1
    - imag: 1
  - steps:
    - Item:
      - index: 1
      - expression: (2+i)(1+i)=2+2i+i+i²
      - reason: Distribute the multiplication.
    - Item:
      - index: 2
      - expression: i²=−1; product=1+3i
      - reason: Collect the real and imaginary terms.
  - result:
    - exact: 1 + 3i
  - interpretation: The new coordinates are (1,3); horizontal coordinate alone is 1.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: |2+i||1+i|=√5√2=√10=|1+3i|.
  - limits: The transformation is about the origin.
  - preset:
    - real: 1
    - imag: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- Item:
  - id: math:example:complex-multiplication:identity
  - title: Leave the point in place
  - role: structural
  - question: What does multiplying by 1 do?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - inputs:
    - real: 1
    - imag: 0
  - steps:
    - Item:
      - index: 1
      - expression: (2+i)(1+0i)=2+i
      - reason: The multiplier is the multiplicative identity.
    - Item:
      - index: 2
      - expression: (Re,Im)=(2,1)
      - reason: The original coordinates remain unchanged.
  - result:
    - exact: 2 + i
  - interpretation: A unit multiplier with zero angle changes neither size nor angle.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: The multiplier modulus is 1 and its argument is 0.
  - limits: This statement concerns multiplication, not adding 1.
  - preset:
    - real: 1
    - imag: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- Item:
  - id: math:example:complex-multiplication:quarter-turn
  - title: Rotate by a quarter turn
  - role: applied_model
  - question: What is (2+i)i?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - inputs:
    - real: 0
    - imag: 1
  - steps:
    - Item:
      - index: 1
      - expression: (2+i)i=2i+i²
      - reason: Distribute the imaginary multiplier.
    - Item:
      - index: 2
      - expression: product=−1+2i
      - reason: Use i²=−1.
  - result:
    - exact: −1 + 2i
  - interpretation: Multiplication by i rotates the vector 90° counterclockwise without changing its length.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: (2,1) maps to (−1,2), and both squared lengths equal 5.
  - limits: Positive imaginary direction is upward.
  - preset:
    - real: 0
    - imag: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- Item:
  - id: math:example:complex-multiplication:half-turn
  - title: Turn the graphic around
  - role: applied_model
  - question: What is the result of multiplying 2+i by −1?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - inputs:
    - real: -1
    - imag: 0
  - steps:
    - Item:
      - index: 1
      - expression: (2+i)(−1)=−2−i
      - reason: Negate both coordinates.
    - Item:
      - index: 2
      - expression: (Re,Im)=(−2,−1)
      - reason: The product points in the opposite direction.
  - result:
    - exact: −2 − i
  - interpretation: A half turn preserves the vector’s length.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: (−2)²+(−1)²=5=2²+1².
  - limits: The fixed center of rotation is the origin.
  - preset:
    - real: -1
    - imag: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- Item:
  - id: math:example:complex-multiplication:collapse
  - title: A zero multiplier
  - role: boundary
  - question: Does multiplying by zero define a rotation angle?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - inputs:
    - real: 0
    - imag: 0
  - steps:
    - Item:
      - index: 1
      - expression: (2+i)0=0
      - reason: Both product coordinates collapse to zero.
    - Item:
      - index: 2
      - expression: |0|=0; arg(0) is undefined
      - reason: A point at the origin has no direction.
  - result:
    - exact: 0; no defined product argument
  - interpretation: The algebra remains defined even though rotation language no longer identifies an angle.
  - independent check:
    - method: A separate algebraic rearrangement or frequency-table check.
    - expected: Both real and imaginary formulas give zero.
  - limits: Do not report an arbitrary angle for the zero multiplier.
  - preset:
    - real: 0
    - imag: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use the complex plane with i²=−1 and fixed input z=2+i.
    - The real and imaginary coordinates share the same chosen unit.
    - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.

## Properties

- Item:
  - claim: A multiplier changes both coordinates together. Its modulus scales length and its argument turns the vector.
  - status: algebraic derivation
  - conditions: Use the complex plane with i²=−1 and fixed input z=2+i.; The real and imaginary coordinates share the same chosen unit.; A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
  - derivation: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.

## Prompts

- Item:
  - prompt: Which assumptions make this expression meaningful?
  - answer: Use the complex plane with i²=−1 and fixed input z=2+i. The real and imaginary coordinates share the same chosen unit. A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- Item:
  - prompt: What does the changing shape measure?
  - answer: The cyan multiplier changes the gold product point; violet component arrows expose where both product coordinates come from.

## Representations

- Item:
  - kind: symbolic
  - description: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.
- Item:
  - kind: geometric
  - description: The cyan multiplier changes the gold product point; violet component arrows expose where both product coordinates come from.

## Applications

- Item:
  - context: Transform a layout point
  - mapping: The new coordinates are (1,3); horizontal coordinate alone is 1.
  - limitations: The transformation is about the origin.
  - evidence kind: constructed_example
  - example ref: math:example:complex-multiplication:turn-grow
- Item:
  - context: Leave the point in place
  - mapping: A unit multiplier with zero angle changes neither size nor angle.
  - limitations: This statement concerns multiplication, not adding 1.
  - evidence kind: constructed_example
  - example ref: math:example:complex-multiplication:identity

## Source Refs

- source:openstax:complex-polar

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Use one complex multiplication to rotate and scale a point in the plane.
- formal latex: (2+i)(u+iv)=(2u-v)+i(u+2v)
- signature:
  - real: real part u of the multiplier
  - imag: imaginary part v of the multiplier
  - realPart: horizontal coordinate of the product
  - imagPart: vertical coordinate of the product
- conditions:
  - Use the complex plane with i²=−1 and fixed input z=2+i.
  - The real and imaginary coordinates share the same chosen unit.
  - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- domain notes: The interactive controls restrict each parameter to its declared finite interval. A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle.
- proof status: This draft gives the model and worked algebra. Animated shapes and numerical checks illustrate the stated relation; they are not independent mathematical review.
- source refs:
  - source:openstax:complex-polar

## Grammar

- pronunciation: Use one complex multiplication to rotate and scale a point in the plane.
- expression latex: (2+i)(u+iv)=(2u-v)+i(u+2v)
- formation rule: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: real
    - role: real part u of the multiplier
    - type: Real quantity in declared setting
  - Item:
    - token: imag
    - role: imaginary part v of the multiplier
    - type: Real quantity in declared setting
  - Item:
    - token: realPart
    - role: horizontal coordinate of the product
    - type: Real quantity in declared setting
  - Item:
    - token: imagPart
    - role: vertical coordinate of the product
    - type: Real quantity in declared setting
- ast:
  - id: ast:complex-multiplication:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:real
      - kind: variable
      - symbol: real
      - type: Real
      - scope ref: scope:complex-multiplication
    - Item:
      - id: n:imag
      - kind: variable
      - symbol: imag
      - type: Real
      - scope ref: scope:complex-multiplication
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:real
      - type: Remaining declared controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial0
      - argument: n:imag
      - type: Real
  - scopes:
    - Item:
      - id: scope:complex-multiplication
      - kind: modelExpression
      - free variables:
        - real
        - imag
      - domain condition: Use the complex plane with i²=−1 and fixed input z=2+i.; The real and imaginary coordinates share the same chosen unit.; A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: complex-multiplication-visual-model
- renderer id: complex-multiplication-visual-model
- renderer version: 1.0.0
- model id: complex-multiplication-visual-model
- model revision: 1.0.0
- expression id: ast:complex-multiplication:expression
- interaction status: implemented
- description: The cyan multiplier changes the gold product point; violet component arrows expose where both product coordinates come from.
- controls:
  - Item:
    - id: real
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: imag
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - real: 1
      - imag: 1
    - output: 1
  - Item:
    - input:
      - real: 1
      - imag: 0
    - output: 2
  - Item:
    - input:
      - real: 0
      - imag: 1
    - output: -1
  - Item:
    - input:
      - real: -1
      - imag: 0
    - output: -2
  - Item:
    - input:
      - real: 0
      - imag: 0
    - output: 0
  - Item:
    - input:
      - real: 2
      - imag: -2
    - output: 6
  - Item:
    - input:
      - real: 3
      - imag: 1
    - status: invalid_parameters
- compute: realPart=2*real-imag; imagPart=real+2*imag; multiplierModulus=hypot(real,imag); modulus=hypot(realPart,imagPart); output=realPart. The output is one coordinate, not the whole complex result.
- numeric tolerance: 1e-10
- invariants:
  - Use the complex plane with i²=−1 and fixed input z=2+i.
  - The real and imaginary coordinates share the same chosen unit.
  - A nonzero multiplier rotates and scales; multiplier zero collapses the point to the origin and has no defined argument.
- limits:
  - The input point is fixed at 2 + i; the multiplier’s real part stays 1 in this story.
  - Coordinates use a flat complex plane with a common arbitrary grid unit.
  - The displayed primary number is the horizontal coordinate; both coordinates are needed to locate the product.
  - A zero multiplier, available in the lab, collapses the point and does not have a defined rotation angle.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

## Referenced source registry

- Source ID: source:openstax:complex-polar. [Precalculus 2e, 8.5 Polar Form of Complex Numbers](https://openstax.org/books/precalculus-2e/pages/8-5-polar-form-of-complex-numbers). Locator: Complex-plane coordinates; multiplication of moduli and addition of arguments. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.
