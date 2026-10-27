---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:real-logarithm", "id": "math:concept:real-logarithm", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:real-logarithm", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.1-draft", "upstream_content_sha256": "6ca6dce7c59c287ebd573cb640c7b6df9136b54f1499905d882286c70300e0f2"}, "purpose": "Express the exponent needed to obtain a positive number from a chosen positive base.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6ca6dce7c59c287ebd573cb640c7b6df9136b54f1499905d882286c70300e0f2", "status": "draft", "title": "Real logarithm", "topics": ["mathematics", "functions", "scale", "logarithm to a base"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Real logarithm

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:real-logarithm; revision 0.1.1-draft. Setting: Real logarithm with fixed real base b>0 and b≠1. Expression: $\log_b(x)=y\iff b^y=x,\qquad b>0,\ b\ne1,\ x>0.$. Conditions required for a defined value (a case may test their violation): The base is positive and is not 1. The argument is positive in this real setting. Scope: For b>1 the function increases; for 0<b<1 it decreases. No real logarithm value is assigned to x≤0.

## Revision

0.1.1-draft

## Publication Status

draft

## Review

- mathematics: author-derived, not independently reviewed
- history: source gap
- interaction: implemented; Geometry, Graph and 3D views share validated parameters and readable controls; independent usability review pending

## Source Policy

Historical assertions require claim-level sources and locators before publication. These specimens make no historical priority or invention assertions.

## Id

math:concept:real-logarithm

## Type

concept

## Title

Real logarithm

## Aliases

- logarithm to a base

## Expressive Job

- compare
- measure_scale
- invert_exponential

## Purpose

Express the exponent needed to obtain a positive number from a chosen positive base.

## Meaning

A logarithm asks “what exponent would produce this value?” The base fixes the multiplicative unit being counted.

## Prerequisites

- required:
  - math:concept:exponentiation
  - math:concept:function
- helpful:
  - math:concept:inverse-function
- depth:
  - math:concept:complex-logarithm

## Definition

- setting: Real logarithm with fixed real base b>0 and b≠1.
- formal latex: \log_b(x)=y\iff b^y=x,\qquad b>0,\ b\ne1,\ x>0.
- signature:
  - input: x ∈ (0,∞)
  - parameter: b ∈ (0,∞) \ {1}
  - output: y ∈ R
- conditions:
  - The base is positive and is not 1.
  - The argument is positive in this real setting.
- proof status: definition using the inverse of real exponentiation; prerequisite existence/uniqueness explanation required before full publication
- domain notes: For b>1 the function increases; for 0<b<1 it decreases. No real logarithm value is assigned to x≤0.
- source refs:
  - source:openstax:log

## Grammar

- pronunciation: logarithm base b of x
- expression latex: y=\log_b(x)
- formation rule: Form log_b(x) only in a context satisfying the base and argument conditions.
- precedence: Always display parentheses around a composite argument; log_b(x+y) and log_b(x)+y are different expressions.
- symbols:
  - Item:
    - token: log
    - role: logarithm operator
    - type: positive argument to real output, with valid base parameter
  - Item:
    - token: b
    - role: base parameter
    - type: positive real except 1
  - Item:
    - token: x
    - role: argument
    - type: positive real
  - Item:
    - token: y
    - role: output exponent
    - type: real
- ast:
  - id: ast:real-log:expression
  - root: n:log
  - nodes:
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: PositiveRealExceptOne
      - scope ref: scope:log-context
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: PositiveReal
      - scope ref: scope:log-context
    - Item:
      - id: n:log
      - kind: log
      - base: n:b
      - argument: n:x
      - type: Real
  - scopes:
    - Item:
      - id: scope:log-context
      - kind: definitionContext
      - parameters:
        - b
      - domain condition: b>0 and b≠1 and x>0
      - free variables:
        - x
- parse errors:
  - Item:
    - input: log_2()
    - status: syntax_error
    - reason: Argument missing.
  - Item:
    - input: log_2(-8)
    - status: undefined_in_setting
    - reason: The real logarithm requires a positive argument.
  - Item:
    - input: log_1(8)
    - status: invalid_parameter
    - reason: Base 1 cannot define this inverse function.
  - Item:
    - input: log_2(2+4)=log_2(2)+log_2(4)
    - status: well_formed_but_false
    - reason: The left side is log_2(6); the right side is 3.
- ast coverage: The AST models the core right-hand expression, not the complete displayed equality. Output symbols use the explicit output binding map. Do not infer a full formula AST or arbitrary TeX parsing.
- output symbol bindings:
  - y: output

## Properties

- Item:
  - claim: \log_b(uv)=\log_b(u)+\log_b(v)
  - conditions: u,v>0; b>0; b≠1
  - status: local derivation
  - derivation: Write u=b^p and v=b^q. Then uv=b^(p+q), so its logarithm is p+q.
- Item:
  - claim: \log_b(x)=\ln(x)/\ln(b)
  - conditions: x>0; b>0; b≠1
  - status: computational identity; independent mathematical review pending
  - derivation: If x=b^y, taking natural logarithms gives ln(x)=y ln(b), and ln(b)≠0.

## History

- status: source_gap
- claims:

- research tasks:
  - Research logarithmic tables/calculation practices separately from modern inverse-function definitions and notation.
  - Source attribution, dates and independent or related developments before describing origin.
- reader text: Historical account not yet sourced in this draft.
- research sources:
  - source:mactutor:symbols

## Connections

- Item:
  - target: math:concept:exponentiation
  - type: inverse_under
  - conditions: A fixed valid positive base and the real positive domain.
  - reason: Logarithm returns the exponent in that base.
  - target status: planned
  - evidence status: editorial_proposal
  - source refs:
- Item:
  - target: math:concept:ratio
  - type: applied_in
  - conditions: Positive ratios and an explicitly chosen reference/base.
  - reason: Logarithms can express multiplicative ratios as additive differences.
  - target status: planned
  - evidence status: editorial_proposal
  - source refs:

## Examples

- Item:
  - id: math:example:log:minimal
  - role: minimal
  - question: What is log base 2 of 8?
  - setting: Positive real arguments; base 2.
  - inputs:
    - b: 2
    - x: 8
  - steps:
    - Item:
      - index: 1
      - expression: 2³=8
      - reason: Find the exponent producing 8.
    - Item:
      - index: 2
      - expression: log₂(8)=3
      - reason: Apply the definition.
  - result:
    - exact: 3
  - interpretation: The result is an exponent, not the original size.
  - independent check:
    - method: Exponentiate the result.
    - expected: 2³=8.
  - limits: This uses base 2; another base gives another exponent.
  - preset:
    - base: 2
    - argument: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Positive real arguments; base 2.
  - title: What is log base 2 of 8?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.
- Item:
  - id: math:example:log:plot
  - role: visual
  - question: How do equal multiplication factors appear on a logarithmic coordinate?
  - setting: Compare x with y=log₂(x).
  - inputs:
    - x values:
      - 1
      - 2
      - 4
      - 8
  - steps:
    - Item:
      - index: 1
      - expression: 1=2⁰, 2=2¹, 4=2², 8=2³
      - reason: Express each positive input as a power of 2.
    - Item:
      - index: 2
      - expression: y values are 0,1,2,3
      - reason: Read the exponent for each input.
  - result:
    - exact:
      - pairs:
        - Item:
          - 1
          - 0
        - Item:
          - 2
          - 1
        - Item:
          - 4
          - 2
        - Item:
          - 8
          - 3
  - interpretation: Equal factors of 2 become equal increments of 1 in this log coordinate.
  - independent check:
    - method: Exponentiate every tabulated y.
    - expected: The resulting x values are 1,2,4,8.
  - limits: Equal additive changes in x do not generally become equal increments in log₂(x). Axis labels must make clear whether the coordinate is x or log₂(x).
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Compare x with y=log₂(x).
  - title: How do equal multiplication factors appear on a logarithmic coordinate?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.
- Item:
  - id: math:example:log:photography
  - role: applied_model
  - question: What exposure ratio corresponds to three doubling steps?
  - setting: A mathematical exposure-ratio convention: s=log₂(E₂/E₁), with positive exposures.
  - inputs:
    - E1: 1
    - E2: 8
    - units: same exposure units
  - steps:
    - Item:
      - index: 1
      - expression: E₂/E₁=8
      - reason: Form a dimensionless positive ratio.
    - Item:
      - index: 2
      - expression: s=log₂(8)=3
      - reason: Count multiplicative doubling steps.
  - result:
    - exact: 3 doubling steps, commonly expressed as 3 stops for this ratio
  - interpretation: The logarithm expresses the relative exposure, not an absolute exposure.
  - independent check:
    - method: Repeatedly double 1: 2,4,8.
    - expected: Three doublings.
  - limits: This ratio model does not predict displayed brightness, scene appearance, clipping, processing, sensor response or perceived lightness. Exposure settings and photographic response need their own physical/contextual model.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - A mathematical exposure-ratio convention: s=log₂(E₂/E₁), with positive exposures.
  - title: What exposure ratio corresponds to three doubling steps?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.
- Item:
  - id: math:example:log:binary-tree
  - role: cross_domain_transfer
  - question: How many edges from root to leaf in a perfect binary tree with 32 leaves?
  - setting: Every internal node has exactly two children and all leaves occur at the same depth; root depth 0.
  - inputs:
    - leaf count: 32
  - steps:
    - Item:
      - index: 1
      - expression: At depth h, a perfect binary tree has 2^h leaves.
      - reason: Each level doubles the number of nodes.
    - Item:
      - index: 2
      - expression: 2^h=32 ⇒ h=log₂(32)=5
      - reason: Invert the exponential relationship.
  - result:
    - exact: height 5 edges
  - interpretation: The same inverse-exponential structure counts levels here and doubling steps in the exposure example.
  - independent check:
    - method: Enumerate level counts.
    - expected: 1,2,4,8,16,32 at depths 0 through 5.
  - limits: An arbitrary binary tree with 32 leaves need not have height 5. The transferred structure depends on the perfect-tree assumptions; it does not equate the physical domains.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Every internal node has exactly two children and all leaves occur at the same depth; root depth 0.
  - title: How many edges from root to leaf in a perfect binary tree with 32 leaves?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.
- Item:
  - id: math:example:log:decreasing-base
  - role: contrast
  - question: What is log base one-half of 8?
  - setting: Valid base b=1/2 in (0,1).
  - inputs:
    - b: 0.5
    - x: 8
  - steps:
    - Item:
      - index: 1
      - expression: (1/2)^(-3)=2³=8
      - reason: A negative exponent inverts the repeated factor.
    - Item:
      - index: 2
      - expression: log_(1/2)(8)=−3
      - reason: Read the needed exponent.
  - result:
    - exact: -3
  - interpretation: A positive input above 1 can have a negative logarithm when the base is below 1.
  - independent check:
    - method: Exponentiate using the chosen base.
    - expected: (1/2)^(-3)=8.
  - limits: “Logarithms grow with x” requires b>1; it is false for every valid base below 1.
  - preset:
    - base: 0.5
    - argument: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Valid base b=1/2 in (0,1).
  - title: What is log base one-half of 8?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.
- Item:
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
- Item:
  - id: math:example:log:sum-fallacy
  - role: counterexample
  - question: Does logarithm distribute over addition?
  - setting: Base 2, arguments 2 and 4.
  - inputs:
    - u: 2
    - v: 4
  - steps:
    - Item:
      - index: 1
      - expression: log₂(2+4)=log₂(6)≈2.584962500721156
      - reason: Evaluate the log of the sum.
    - Item:
      - index: 2
      - expression: log₂(2)+log₂(4)=1+2=3
      - reason: Evaluate the sum of the logs.
    - Item:
      - index: 3
      - expression: log₂(2·4)=log₂(8)=3
      - reason: Compare the actual product law.
  - result:
    - exact: log₂(6)≠3
    - approximate left: 2.584962500721156
    - right: 3
    - tolerance: 1e-12
  - interpretation: The additive identity is for a product of positive inputs, not their sum.
  - independent check:
    - method: Exponentiate the proposed value 3.
    - expected: 2³=8, which is not 6.
  - limits: A coincidental equality in a special numerical case would not prove a general law.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Base 2, arguments 2 and 4.
  - title: Does logarithm distribute over addition?
  - conditions to check:
    - The base is positive and is not 1.
    - The argument is positive in this real setting.

## Interactive

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

## Prompts

- Item:
  - prompt: What changes when you change the base but keep x=8?
  - answer: The exponent changes because the multiplicative unit changes. The original x does not change.
- Item:
  - prompt: What must be shared by two quantities before you take a logarithm of their ratio in an application?
  - answer: The positive ratio must be meaningful and dimensionless under a declared model/reference; mathematical computation alone cannot validate that modeling choice.

## Schema Version

0.1.0

## Slug

real-logarithm

## Branches

- functions
- scale

## Updated

2026-10-26T00:00:00Z

## Representations

- Item:
  - kind: symbolic
  - description: y=\log_b(x)
- Item:
  - kind: numeric
  - description: Manipulate base and positive argument; link y=log_b(x), b^y=x, a plot, a table and an exponent ladder.

## Source Refs

- source:openstax:log

## Review Gaps

- Independent mathematical/editorial review pending.
- Historical research incomplete; no priority claim implied.
- Assistive-technology, touch-device and learner qualification remains incomplete.

## Change Log

- 0.1.0-draft: authored specimen, parameters and expected results for implementation.

## Applications

- Item:
  - context: How do equal multiplication factors appear on a logarithmic coordinate?
  - mapping: Compare x with y=log₂(x).
  - limitations: Equal additive changes in x do not generally become equal increments in log₂(x). Axis labels must make clear whether the coordinate is x or log₂(x).
  - evidence kind: constructed_example
  - example ref: math:example:log:plot
- Item:
  - context: What exposure ratio corresponds to three doubling steps?
  - mapping: A mathematical exposure-ratio convention: s=log₂(E₂/E₁), with positive exposures.
  - limitations: This ratio model does not predict displayed brightness, scene appearance, clipping, processing, sensor response or perceived lightness. Exposure settings and photographic response need their own physical/contextual model.
  - evidence kind: constructed_example
  - example ref: math:example:log:photography
- Item:
  - context: How many edges from root to leaf in a perfect binary tree with 32 leaves?
  - mapping: Every internal node has exactly two children and all leaves occur at the same depth; root depth 0.
  - limitations: An arbitrary binary tree with 32 leaves need not have height 5. The transferred structure depends on the perfect-tree assumptions; it does not equate the physical domains.
  - evidence kind: constructed_example
  - example ref: math:example:log:binary-tree

## Referenced source registry

- Source ID: source:openstax:log. [Precalculus 2e, 4.3 Logarithmic Functions](https://openstax.org/books/precalculus-2e/pages/4-3-logarithmic-functions). Locator: Definition of the Logarithmic Function. Verification: definition inspected 2026-10-23. Rights: Original explanations/examples in this package; no textbook exercise bank copied.

- Source ID: source:mactutor:symbols. [MacTutor, Earliest Uses of Various Mathematical Symbols](https://mathshistory.st-andrews.ac.uk/Miller/mathsym/). Locator: Functions, operations, calculus and written-source indexes. Verification: index inspected 2026-10-23; research route only. Rights: Research pointer, not evidence for a specific unresearched first-use claim.
