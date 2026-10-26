---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:derivative", "id": "math:concept:derivative", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:derivative", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.1-draft", "upstream_content_sha256": "da1b98043fa01d001465a389beebd95ed3e8aec9aa5e6a20175abcf2843aca31"}, "purpose": "Express the first-order response near a point when that local rate exists.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "da1b98043fa01d001465a389beebd95ed3e8aec9aa5e6a20175abcf2843aca31", "status": "draft", "title": "Derivative at a point", "topics": ["mathematics", "calculus", "change", "local rate of change", "tangent slope", "f prime", "dy/dx"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Derivative at a point

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:derivative; revision 0.1.1-draft. Setting: A real-valued function on an open interval containing a; ordinary finite two-sided derivative. Expression: $f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$. Conditions required for a defined value (a case may test their violation): f is defined on an open interval containing a. The quotient uses h≠0 with a+h in the domain. The finite limit must agree from both sides. Scope: This card does not define one-sided endpoint derivatives, complex derivatives or generalized derivatives.

## Schema Version

0.1.0

## Id

math:concept:derivative

## Slug

derivative

## Type

concept

## Title

Derivative at a point

## Revision

0.1.1-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived, not independently reviewed
- history: one secondary notation claim; broader history pending
- interaction: implemented; Geometry, Graph and 3D views share validated parameters and readable controls; independent usability review pending

## Source Policy

History distinguishes notation from concept; source inspection is recorded per claim.

## Aliases

- local rate of change
- tangent slope
- f prime
- dy/dx

## Branches

- calculus
- change

## Expressive Job

- measure change
- local approximation

## Purpose

Express the first-order response near a point when that local rate exists.

## Meaning

Compare a small output change with its input change and ask whether the ratio approaches one finite value from both sides. This describes local behavior, not the entire process or its causes.

## Prerequisites

- required:
  - math:concept:function
  - math:concept:limit
- helpful:
  - math:concept:ratio
- depth:


## Definition

- setting: A real-valued function on an open interval containing a; ordinary finite two-sided derivative.
- formal latex: f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
- signature:
  - f: open real interval → Real
  - a: interior point
  - derivative: Real, if the finite two-sided limit exists
- conditions:
  - f is defined on an open interval containing a.
  - The quotient uses h≠0 with a+h in the domain.
  - The finite limit must agree from both sides.
- domain notes: This card does not define one-sided endpoint derivatives, complex derivatives or generalized derivatives.
- proof status: definition; illustrative local derivations
- source refs:
  - source:hmc:derivative

## Grammar

- pronunciation: f prime at a is the limit as h approaches zero of the change in f divided by h.
- expression latex: f'(a)=\lim_{h\to0}\frac{f(a+h)-f(a)}{h}
- formation rule: Form a difference quotient for nonzero h, then bind h in a limit as h approaches zero.
- precedence: f(a+h) is evaluated before subtraction; the fraction divides the entire difference by h.
- symbols:
  - Item:
    - token: f
    - role: function
    - type: Interval → Real
  - Item:
    - token: a
    - role: fixed evaluation point
    - type: Real interior point
  - Item:
    - token: h
    - role: increment, bound inside the limit
    - type: Real, nonzero in quotient
  - Item:
    - token: lim
    - role: limit binder
    - type: finite limit, when it exists
  - Item:
    - token: f′(a)
    - role: derivative value, not f(a)
    - type: Real if defined
- ast:
  - id: ast:derivative:limit-quotient
  - root: n:limit
  - nodes:
    - Item:
      - id: n:f
      - kind: functionRef
      - ref: f
      - type: Interval → Real
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Real
      - scope ref: scope:outer
    - Item:
      - id: n:h
      - kind: variable
      - symbol: h
      - type: Real
      - scope ref: scope:limit
    - Item:
      - id: n:ah
      - kind: add
      - arguments:
        - n:a
        - n:h
      - type: Real
    - Item:
      - id: n:fah
      - kind: apply
      - function: n:f
      - argument: n:ah
      - type: Real
    - Item:
      - id: n:fa
      - kind: apply
      - function: n:f
      - argument: n:a
      - type: Real
    - Item:
      - id: n:change
      - kind: subtract
      - arguments:
        - n:fah
        - n:fa
      - type: Real
    - Item:
      - id: n:quotient
      - kind: divide
      - arguments:
        - n:change
        - n:h
      - type: Real for h≠0
    - Item:
      - id: n:limit
      - kind: limit
      - variable: n:h
      - body: n:quotient
      - towards: 0
      - type: Real if finite limit exists
      - scope ref: scope:limit
  - scopes:
    - Item:
      - id: scope:outer
      - kind: definitionContext
      - free variables:
        - a
      - external parameters:
        - f
    - Item:
      - id: scope:limit
      - kind: limitBinder
      - bound variables:
        - h
      - external parameters:
        - f
        - a
      - domain condition: h≠0 and a+h in dom(f)
- parse errors:
  - Item:
    - input: f(a+h)−f(a)/h
    - status: different_expression
    - reason: Without numerator grouping only f(a) is divided by h.
  - Item:
    - input: [f(a+0)−f(a)]/0
    - status: undefined_in_setting
    - reason: A limit is not substitution of zero into this quotient.
  - Item:
    - input: f continuous therefore f differentiable
    - status: well_formed_but_false
    - reason: Absolute value at zero is a counterexample.
- ast coverage: The AST models the core right-hand expression, not the complete displayed equality. Output symbols use the explicit output binding map. Do not infer a full formula AST or arbitrary TeX parsing.
- output symbol bindings:
  - f′(a): analytic
  - finite quotient: output

## Properties

- Item:
  - claim: For f(x)=x³, f′(a)=3a².
  - status: short derivation
  - conditions: All real a; nonzero h in the quotient.
  - derivation: [(a+h)³−a³]/h=3a²+3ah+h²; the last two terms tend to zero.
- Item:
  - claim: At an interior differentiability point, Δf≈f′(a)h for small h.
  - status: local approximation
  - conditions: Differentiability at a; error depends on f and h.
  - derivation: The definition gives f(a+h)−f(a)=f′(a)h+o(h); finite h is an approximation, not equality.

## History

- status: partial
- reader text: One notation claim has secondary support; the concept, earlier methods, independent developments and later formalization still need research.
- claims:
  - Item:
    - id: math:history:derivative:notation-1675
    - claim kind: notation
    - statement: MacTutor attributes the differential symbols dx and dy and a quotient notation to a Leibniz manuscript dated 11 November 1675. This is a claim about notation in that source, not the origin of the whole concept.
    - evidence status: supported_secondary
    - date:
      - start year: 1675
      - end year: 1675
      - precision: year
    - source refs:
      - source:mactutor:calculus-notation
    - locator: Derivative paragraph; reference to Cajori vol. 2 p. 204
    - uncertainty: Underlying manuscript and critical edition not inspected in this package.
- research tasks:
  - Source earlier tangent/rate methods, independent developments, and later formalization separately.
  - Inspect primary/critical editions before strengthening priority assertions.

## Connections

- Item:
  - target: math:concept:limit
  - type: uses_definition
  - conditions: Limit must exist finitely.
  - reason: The derivative uses a limit of difference quotients.
  - target status: planned
  - evidence status: definition
  - source refs:
    - source:hmc:derivative
- Item:
  - target: math:concept:integral
  - type: inverse_under
  - conditions: Appropriate hypotheses of the fundamental theorem; not every informal derivative/integral pair is interchangeable.
  - reason: Rate and accumulation are related by a theorem under conditions.
  - target status: planned
  - evidence status: research_required
  - source refs:

## Examples

- Item:
  - id: math:example:derivative:cubic
  - title: What is the local slope of x³ at x=2?
  - role: minimal
  - question: What is the local slope of x³ at x=2?
  - setting: Real cubic function
  - assumptions:
    - Real cubic function
  - inputs:
    - a: 2
  - steps:
    - Item:
      - index: 1
      - expression: [(2+h)³−8]/h=12+6h+h²
      - reason: Expand and divide for h≠0.
    - Item:
      - index: 2
      - expression: lim as h→0 is 12
      - reason: Terms with h vanish.
  - result:
    - exact: 12
  - interpretation: The local output change is about 12 times a small input change.
  - independent check:
    - method: Independent algebra or condition check
    - expected: At a=2 the symbolic formula 3a² gives 12.
  - limits: A slope at one point is not a global constant.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - f is defined on an open interval containing a.
    - The quotient uses h≠0 with a+h in the domain.
    - The finite limit must agree from both sides.
- Item:
  - id: math:example:derivative:secant
  - title: What changes between two nearby points?
  - role: visual
  - question: What changes between two nearby points?
  - setting: f(x)=x³, a=2, h=0.1
  - assumptions:
    - f(x)=x³, a=2, h=0.1
  - inputs:
    - a: 2
    - h: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: f(2.1)=9.261; f(2)=8
      - reason: Evaluate the endpoints.
    - Item:
      - index: 2
      - expression: (9.261−8)/0.1=12.61
      - reason: Compute the secant slope.
  - result:
    - exact: 12.61
  - interpretation: This finite secant slope is close to, and distinct from, derivative 12.
  - independent check:
    - method: Independent algebra or condition check
    - expected: Expanded quotient: 12+6(0.1)+(0.1)²=12.61.
  - limits: Moving a finite step is not taking a limit.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - f is defined on an open interval containing a.
    - The quotient uses h≠0 with a+h in the domain.
    - The finite limit must agree from both sides.
- Item:
  - id: math:example:derivative:motion
  - title: What rate follows from a stipulated position model?
  - role: applied_model
  - question: What rate follows from a stipulated position model?
  - setting: s(t)=(3 m/s²)t², with t in seconds, within a chosen model interval
  - assumptions:
    - s(t)=(3 m/s²)t², with t in seconds, within a chosen model interval
  - inputs:
    - t seconds: 2
  - steps:
    - Item:
      - index: 1
      - expression: s′(t)=(6 m/s²)t
      - reason: Differentiate the stipulated quadratic.
    - Item:
      - index: 2
      - expression: s′(2 s)=12 m/s
      - reason: Substitute time with units.
  - result:
    - exact: 12 m/s
  - interpretation: The model predicts this instantaneous velocity.
  - independent check:
    - method: Independent algebra or condition check
    - expected: Average velocity from 2 s to 2.1 s is 12.3 m/s, tending to 12 as interval shrinks.
  - limits: The calculation does not establish that an actual object follows this model; measurements and model validation are separate.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - f is defined on an open interval containing a.
    - The quotient uses h≠0 with a+h in the domain.
    - The finite limit must agree from both sides.
- Item:
  - id: math:example:derivative:image-scale
  - title: How sensitive is square image area to side length?
  - role: cross_domain_transfer
  - question: How sensitive is square image area to side length?
  - setting: A(L)=L² for a square; L is continuous length, not a count of integer pixels
  - assumptions:
    - A(L)=L² for a square; L is continuous length, not a count of integer pixels
  - inputs:
    - L cm: 5
    - delta L cm: 0.1
  - steps:
    - Item:
      - index: 1
      - expression: A′(5 cm)=10 cm
      - reason: Differentiate area with respect to side length.
    - Item:
      - index: 2
      - expression: ΔA≈(10 cm)(0.1 cm)=1 cm²
      - reason: Use a first-order estimate.
    - Item:
      - index: 3
      - expression: 5.1²−5²=1.01 cm²
      - reason: Compute the actual finite area change.
  - result:
    - exact: Estimate 1 cm²; exact finite change 1.01 cm²
  - interpretation: A local derivative can express sensitivity of area as well as rate in time.
  - independent check:
    - method: Independent algebra or condition check
    - expected: The omitted quadratic term is (0.1 cm)²=0.01 cm².
  - limits: This does not determine perceived image detail; discrete pixel counts require a discrete model.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - f is defined on an open interval containing a.
    - The quotient uses h≠0 with a+h in the domain.
    - The finite limit must agree from both sides.
- Item:
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
- Item:
  - id: math:example:derivative:zero-step
  - title: Can the difference quotient be evaluated at h=0?
  - role: counterexample
  - question: Can the difference quotient be evaluated at h=0?
  - setting: f(x)=x³, a=2
  - assumptions:
    - f(x)=x³, a=2
  - inputs:
    - h: 0
  - steps:
    - Item:
      - index: 1
      - expression: [f(2)−f(2)]/0=0/0
      - reason: Substitution produces no defined quotient.
  - result:
    - exact: Undefined quotient; derivative can still exist
  - interpretation: A limit concerns nearby admissible values, not evaluation at the excluded point.
  - independent check:
    - method: Independent algebra or condition check
    - expected: For h≠0 the quotient is 12+6h+h² and its limit is 12.
  - limits: Never display the h=0 quotient as 0 or 12.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - f is defined on an open interval containing a.
    - The quotient uses h≠0 with a+h in the domain.
    - The finite limit must agree from both sides.

## Interactive

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

## Prompts

- Item:
  - prompt: Can a graph look smooth in a wide view and still fail to have a derivative at a point?
  - answer: Yes. Inspect local structure and both one-sided behaviors, and distinguish a sampled picture from a definition.
- Item:
  - prompt: What would change if the input unit changed from seconds to minutes?
  - answer: The numerical rate changes with the input unit; preserve units and the same underlying phenomenon before comparing rates.

## Representations

- Item:
  - kind: symbolic
  - description: Limit of a difference quotient.
- Item:
  - kind: geometric
  - description: Secant and tangent slopes in a labeled coordinate system.
- Item:
  - kind: numeric
  - description: Signed-h table for one evaluation point.

## Applications

- Item:
  - context: What rate follows from a stipulated position model?
  - mapping: s(t)=(3 m/s²)t², with t in seconds, within a chosen model interval
  - limitations: The calculation does not establish that an actual object follows this model; measurements and model validation are separate.
  - evidence kind: constructed_example
  - example ref: math:example:derivative:motion
- Item:
  - context: How sensitive is square image area to side length?
  - mapping: A(L)=L² for a square; L is continuous length, not a count of integer pixels
  - limitations: This does not determine perceived image detail; discrete pixel counts require a discrete model.
  - evidence kind: constructed_example
  - example ref: math:example:derivative:image-scale

## Source Refs

- source:hmc:derivative
- source:mactutor:calculus-notation

## Review Gaps

- Independent mathematics review pending.
- Conceptual and cross-cultural history incomplete.
- Assistive-technology, touch-device and learner qualification remains incomplete.

## Change Log

- 0.1.0-draft: original worked cases and model fixtures; one bounded secondary historical notation claim.

## Referenced source registry

- Source ID: source:hmc:derivative. [Harvey Mudd College, Limit Definition of the Derivative](https://math.hmc.edu/calculus/hmc-mathematics-calculus-online-tutorials/single-variable-calculus/limit-definition-of-the-derivative/). Locator: Definition and undefined-limit note. Verification: definition inspected 2026-10-23. Rights: Only definition-level reference; examples below are independently constructed.

- Source ID: source:mactutor:calculus-notation. [MacTutor, Earliest Uses of Symbols of Calculus](https://mathshistory.st-andrews.ac.uk/Miller/mathsym/calculus/). Locator: Derivative paragraph; cites Cajori vol. 2 p. 204. Verification: secondary account inspected 2026-10-23; underlying manuscript not inspected. Rights: Brief paraphrase only; not a claim of original manuscript inspection.
