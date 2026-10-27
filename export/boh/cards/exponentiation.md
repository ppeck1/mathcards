---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:exponentiation", "id": "math:concept:exponentiation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponentiation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d894e4f8287c7f109f646108acc85758be3324d89b60947638467d794133c533"}, "purpose": "See repeated multiplication, reciprocals and roots as parts of one positive-real power rule.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d894e4f8287c7f109f646108acc85758be3324d89b60947638467d794133c533", "status": "draft", "title": "Exponentiation", "topics": ["mathematics", "algebra", "functions", "powers", "positive-real power"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Exponentiation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:exponentiation; revision 0.1.0-draft. Setting: Positive-real exponentiation; integer repetition motivates a continuous real extension. Expression: $b>0,\ x\in\mathbb R:\quad b^x=\exp(x\ln b),\qquad b^0=1,\quad b^{-x}=\frac{1}{b^x}.$. Conditions required for a defined value (a case may test their violation): The executable power family requires base>0 and finite real controls. The structural slider range for base is [−1,3]; nonpositive choices produce invalid_base rather than a fabricated real answer. The exponent is in [−3,5]; the positive base may equal 1. A dimensional quantity should be normalized before taking a general real power. Scope: Some negative-base integer powers and zero-base positive powers exist in other settings. They are deliberately outside this single continuous positive-base family. For b=1 the power is valid and constant, although some textbooks reserve the term exponential function for b≠1. No complex branches are implemented.

## Schema Version

0.1.0

## Id

math:concept:exponentiation

## Slug

exponentiation

## Type

concept

## Title

Exponentiation

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. All stories and worked quantities are original constructed teaching scenarios, not measurements or historical events. Historical priority and notation claims require separate claim-level evidence before publication.

## Aliases

- powers
- positive-real power

## Branches

- algebra
- functions

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

See repeated multiplication, reciprocals and roots as parts of one positive-real power rule.

## Meaning

The base is the multiplier; the exponent controls how that multiplication accumulates. Positive integer exponents count factors. The positive-base real extension fills the gaps smoothly and makes negative exponents reciprocal scales.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
  - math:concept:real-logarithm
- depth:
  - math:concept:model-assumption

## Definition

- setting: Positive-real exponentiation; integer repetition motivates a continuous real extension.
- formal latex: b>0,\ x\in\mathbb R:\quad b^x=\exp(x\ln b),\qquad b^0=1,\quad b^{-x}=\frac{1}{b^x}.
- signature:
  - base: dimensionless b>0; live structural input range [−1,3] permits an explicit bad-base demonstration
  - exponent: real x∈[−3,5] in the specimen
  - output: positive dimensionless factor b^x
  - reciprocal: b^(−x)=1/output
- conditions:
  - The executable power family requires base>0 and finite real controls.
  - The structural slider range for base is [−1,3]; nonpositive choices produce invalid_base rather than a fabricated real answer.
  - The exponent is in [−3,5]; the positive base may equal 1.
  - A dimensional quantity should be normalized before taking a general real power.
- domain notes: Some negative-base integer powers and zero-base positive powers exist in other settings. They are deliberately outside this single continuous positive-base family. For b=1 the power is valid and constant, although some textbooks reserve the term exponential function for b≠1. No complex branches are implemented.
- proof status: Definition-level references; small exact examples are independently constructed and author-derived. Independent review pending.
- source refs:
  - source:openstax:exponent-rules
  - source:openstax:positive-real-powers

## Grammar

- pronunciation: b raised to x
- expression latex: b^x
- formation rule: If base<=0 return invalid_base. Otherwise output=base**exponent and reciprocal=base**(-exponent); base=1 is a valid constant power. The positive-real rule is exp(exponent*ln(base)).
- precedence: Exponentiation is evaluated before an outer sign: −2² means −(2²); (−2)² is a different expression outside this live family.
- symbols:
  - Item:
    - token: base
    - role: positive repeated multiplier b
    - type: Declared real quantity or finite mode
  - Item:
    - token: exponent
    - role: accumulation exponent x
    - type: Declared real quantity or finite mode
  - Item:
    - token: b^x
    - role: positive result factor
    - type: Declared real quantity or finite mode
  - Item:
    - token: b^(−x)
    - role: reciprocal result factor
    - type: Declared real quantity or finite mode
- ast:
  - id: ast:exponentiation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:base
      - kind: variable
      - symbol: base
      - type: Declared control
      - scope ref: scope:exponentiation:model
    - Item:
      - id: n:exponent
      - kind: variable
      - symbol: exponent
      - type: Declared control
      - scope ref: scope:exponentiation:model
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: If base<=0 return invalid_base. Otherwise output=base**exponent and reciprocal=base**(-exponent); base=1 is a valid constant power. The positive-real rule is exp(exponent*ln(base)).
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:base
      - type: Remaining controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial0
      - argument: n:exponent
      - type: Real or explicit undefined status
  - scopes:
    - Item:
      - id: scope:exponentiation:model
      - kind: modelExpression
      - free variables:
        - base
        - exponent
      - domain condition: If base<=0 return invalid_base. Otherwise output=base**exponent and reciprocal=base**(-exponent); base=1 is a valid constant power. The positive-real rule is exp(exponent*ln(base)).
- parse errors:
  - Item:
    - input: base=0 or base<0 in this real-exponent family
    - status: invalid_base
    - reason: A positive base keeps b^x real and continuous for every supported real exponent.
  - Item:
    - input: Read 2³ as 2×3
    - status: notation_error
    - reason: 2³ has three factors of 2 and equals 8.
  - Item:
    - input: Interpret 2⁻² as −4
    - status: notation_error
    - reason: The negative exponent denotes 1/2²=1/4.
- ast coverage: This tree applies the explicitly named bounded model to its controls. It is structural metadata; it does not parse arbitrary formulas or establish a theorem. The formal definition is broader than the illustrated family.
- output symbol bindings:
  - b^x: output
  - b^(−x): reciprocal

## Properties

- Item:
  - claim: A zero exponent gives the reference factor 1.
  - status: author-derived for stated conditions; independent review pending
  - conditions: base>0.
  - derivation: b^x/b^x=b^(x−x)=b⁰=1.
- Item:
  - claim: A negative exponent produces a reciprocal, not a negative result.
  - status: author-derived for stated conditions; independent review pending
  - conditions: base>0.
  - derivation: b^x×b^(−x)=b⁰=1.
  - example ref: math:example:exponentiation:undo-zoom
- Item:
  - claim: For a base between 0 and 1, larger exponents produce smaller positive factors.
  - status: author-derived for stated conditions; independent review pending
  - conditions: 0<base<1.
  - derivation: For x₂>x₁, b^x₂/b^x₁=b^(x₂−x₁)<1.

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:exponential-change
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: Repeated multiplication becomes a time model when the exponent is elapsed periods.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:real-logarithm
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: A logarithm asks which exponent produced a positive output under an admissible base.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: Each real exponent has one positive output when the positive base is fixed.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:exponentiation:digital-zoom
  - title: Three passes through a zoom tool
  - role: applied_model
  - question: A drawing tool doubles a normalized length in each pass. What length factor follows three passes?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
  - inputs:
    - base: 2
    - exponent: 3
  - steps:
    - Item:
      - index: 1
      - expression: reference factor=2⁰=1
      - reason: Begin with the original normalized length.
    - Item:
      - index: 2
      - expression: 2³=2×2×2=8
      - reason: Apply the same multiplier in each of three passes.
    - Item:
      - index: 3
      - expression: new length=8×reference length
      - reason: Map the power back to the drawing.
  - result:
    - exact: 8× length factor
  - interpretation: The base selects each stretch; the exponent tells how many stretches accumulate. A smooth noninteger exponent is an interpolation of this positive-real rule.
  - independent check:
    - method: Reverse operation
    - expected: Divide the final factor by 2 three times: 8→4→2→1.
  - limits: This is an ideal geometric scaling factor; it does not promise image detail or specify a camera’s optical zoom.
  - preset:
    - base: 2
    - exponent: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
- Item:
  - id: math:example:exponentiation:poster-area
  - title: A larger square poster
  - role: applied_model
  - question: A square poster’s side length is multiplied by 1.5. What is its area factor?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
  - inputs:
    - base: 1.5
    - exponent: 2
  - steps:
    - Item:
      - index: 1
      - expression: area factor=side factor×side factor
      - reason: Two independent lengths multiply to area.
    - Item:
      - index: 2
      - expression: 1.5²=1.5×1.5=2.25
      - reason: Use exponent 2 for two scaled dimensions.
  - result:
    - exact: 2.25× area factor
  - interpretation: An increase of 50% in both side lengths produces 125% more area, because the area factor is 2.25.
  - independent check:
    - method: Rectangle grid
    - expected: A normalized 1.5-by-1.5 square has area 2.25.
  - limits: Uniform scaling is required. Length factor and area factor have different meanings even when shown as dimensionless ratios.
  - preset:
    - base: 1.5
    - exponent: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
- Item:
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
- Item:
  - id: math:example:exponentiation:undo-zoom
  - title: Undo two doubling passes
  - role: applied_model
  - question: A tool’s doubling operation is run backward twice. What is the factor relative to the original?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
  - inputs:
    - base: 2
    - exponent: -2
  - steps:
    - Item:
      - index: 1
      - expression: 2⁻²=1/(2²)
      - reason: A negative exponent reverses multiplicative accumulation.
    - Item:
      - index: 2
      - expression: 1/(2×2)=¼=0.25
      - reason: Divide by the multiplier twice.
  - result:
    - exact: 1/4 of the reference length
  - interpretation: The negative sign belongs to the exponent. The output is positive and smaller than 1, rather than negative.
  - independent check:
    - method: Compose undo with redo
    - expected: 2⁻²×2²=¼×4=1 returns to the reference factor.
  - limits: The reverse rule assumes a nonzero multiplier and exact scaling; destructive pixel resampling need not recover an original image.
  - preset:
    - base: 2
    - exponent: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
- Item:
  - id: math:example:exponentiation:recover-side
  - title: Recover a side factor from area
  - role: applied_model
  - question: A square’s area factor is 2.25. What positive side factor would create it?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.
  - inputs:
    - base: 2.25
    - exponent: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: side factor=(area factor)^(½)
      - reason: Select the positive square root for a positive length ratio.
    - Item:
      - index: 2
      - expression: 2.25^(½)=1.5
      - reason: Check that 1.5×1.5 restores the area factor.
  - result:
    - exact: 1.5× side factor
  - interpretation: A fractional exponent expresses a root. It does not require performing half of a real printing operation.
  - independent check:
    - method: Square the answer
    - expected: 1.5²=2.25, so 1.5 is the positive length factor.
  - limits: A length ratio is positive. Algebraically the equation z²=2.25 also has −1.5, but the positive-real power denotes +1.5.
  - preset:
    - base: 2.25
    - exponent: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The base is a positive, dimensionless multiplier.
    - Repeated operations use the same multiplier; the reference amount corresponds to exponent zero.
    - Fractional and negative exponents use the positive-real power convention, not a fractional count of physical actions.

## Interactive

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

## Prompts

- Item:
  - prompt: Why is 1³ valid here?
  - answer: The positive-real power rule gives 1 for every real exponent; this is the constant boundary between growth and decay.
- Item:
  - prompt: Does exponent −2 make the answer negative?
  - answer: No. It takes the reciprocal of the square of the positive base.

## Representations

- Item:
  - kind: geometric scale
  - description: A unit reference shape and its scaled copy make the factor visible; the story declares which physical quantity the scale represents.
- Item:
  - kind: graph
  - description: For a fixed positive base, exponent x maps to b^x; a base of 1 gives a horizontal line.
- Item:
  - kind: factor chain
  - description: Integer powers show repeated factors; negative and fractional examples show the reciprocal or root step.

## Applications

- Item:
  - context: Drawing zoom
  - mapping: Each doubling contributes one factor of 2 to the normalized length.
  - limitations: A mathematical scale does not add pixels or recover lost image information.
  - evidence kind: constructed_example
  - example ref: math:example:exponentiation:digital-zoom
- Item:
  - context: Square poster sizing
  - mapping: The area factor is the side factor raised to the second power.
  - limitations: Both dimensions must use the same side factor.
  - evidence kind: constructed_example
  - example ref: math:example:exponentiation:poster-area

## Source Refs

- source:openstax:exponent-rules
- source:openstax:positive-real-powers

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original worked scenarios, explicit domains and failures, bounded model fixtures and shared modular playground bindings.

## Referenced source registry

- Source ID: source:openstax:exponent-rules. [College Algebra 2e, 1.2 Exponents and Scientific Notation](https://openstax.org/books/college-algebra-2e/pages/1-2-exponents-and-scientific-notation). Locator: Product rule; zero exponent; negative exponent; powers of products. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:positive-real-powers. [Precalculus 2e, 4.1 Exponential Functions](https://openstax.org/books/precalculus-2e/pages/4-1-exponential-functions). Locator: Identifying Exponential Functions; positive base with real exponent; growth and decay; conventional exclusion of base 1 from nonconstant exponential functions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
