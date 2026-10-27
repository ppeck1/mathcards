---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:function-composition", "id": "math:concept:function-composition", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:function-composition", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.1-draft", "upstream_content_sha256": "83b04da6ca8db7e34cca2c2bd280e07016296080b83d0f060c6791e9708c1ee3"}, "purpose": "Describe one transformation whose output becomes the input of another.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "83b04da6ca8db7e34cca2c2bd280e07016296080b83d0f060c6791e9708c1ee3", "status": "draft", "title": "Function composition", "topics": ["mathematics", "language", "functions", "composition of functions"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Function composition

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:function-composition; revision 0.1.1-draft. Setting: Set-based functions, with an explicitly restricted domain for partial compositions. Expression: $(f\circ g)(x)=f(g(x)),\quad x\in D=\{x\in\operatorname{dom}(g):g(x)\in\operatorname{dom}(f)\}.$. Conditions required for a defined value (a case may test their violation): For a particular x, x must be in dom(g) and g(x) must be in dom(f). A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ. Scope: More generally f may have a different declared domain Df; composition is defined on inputs of g whose outputs lie in Df. The simple B match above is a sufficient standard case.

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

math:concept:function-composition

## Type

concept

## Title

Function composition

## Aliases

- composition of functions

## Expressive Job

- compose
- transform

## Purpose

Describe one transformation whose output becomes the input of another.

## Meaning

In f composed with g, perform g first and then feed its result to f. Read the written expression from the innermost application outward.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:domain-codomain
- depth:
  - math:concept:category

## Definition

- setting: Set-based functions, with an explicitly restricted domain for partial compositions.
- formal latex: (f\circ g)(x)=f(g(x)),\quad x\in D=\{x\in\operatorname{dom}(g):g(x)\in\operatorname{dom}(f)\}.
- signature:
  - g: A → B
  - f: B → C
  - composite: A → C when every g output is valid for f
- conditions:
  - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
  - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- domain notes: More generally f may have a different declared domain Df; composition is defined on inputs of g whose outputs lie in Df. The simple B match above is a sufficient standard case.
- proof status: definition; examples are local derivations
- source refs:
  - source:openstax:composition

## Grammar

- pronunciation: f composed with g, evaluated at x
- expression latex: (f\circ g)(x)=f(g(x))
- formation rule: If x is an allowed argument of g and g(x) is an allowed argument of f, form Apply(f, Apply(g, x)).
- precedence: Parenthesized function application; g(x) is a complete operand of f. Composition order differs from ordinary left-to-right prose.
- symbols:
  - Item:
    - token: f
    - role: outer function
    - type: B → C
  - Item:
    - token: g
    - role: inner function
    - type: A → B
  - Item:
    - token: ∘
    - role: function composition operator
    - type: (B → C) × (A → B) → (A → C)
  - Item:
    - token: x
    - role: input
    - type: A
- ast:
  - id: ast:composition:apply-f-after-g
  - root: n:outer-apply
  - nodes:
    - Item:
      - id: n:f
      - kind: functionRef
      - ref: f
      - type: B → C
    - Item:
      - id: n:g
      - kind: functionRef
      - ref: g
      - type: A → B
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: A
      - scope ref: scope:composite-body
    - Item:
      - id: n:inner-apply
      - kind: apply
      - function: n:g
      - argument: n:x
      - type: B
    - Item:
      - id: n:outer-apply
      - kind: apply
      - function: n:f
      - argument: n:inner-apply
      - type: C
  - scopes:
    - Item:
      - id: scope:composite-body
      - kind: functionBody
      - bound variables:
        - x
      - external parameters:
        - f
        - g
      - domain condition: x ∈ dom(g) and g(x) ∈ dom(f)
- parse errors:
  - Item:
    - input: f(,g(x))
    - status: syntax_error
    - reason: Missing operand.
  - Item:
    - input: rotate(length("tree"))
    - status: type_error
    - reason: The declared rotation takes a 2D vector; length returns a natural number.
  - Item:
    - input: sqrt(3−4)
    - status: undefined_in_setting
    - reason: Real square root is undefined for a negative operand.
- ast coverage: The AST models the core right-hand expression, not the complete displayed equality. Output symbols use the explicit output binding map. Do not infer a full formula AST or arbitrary TeX parsing.
- output symbol bindings:
  - (f∘g)(x): output when order=f_after_g
  - (g∘f)(x): output when order=g_after_f
- ast variants:
  - Item:
    - id: ast:composition:apply-g-after-f
    - root: n:outer-apply
    - nodes:
      - Item:
        - id: n:f
        - kind: functionRef
        - ref: f
        - type: Real → Real
      - Item:
        - id: n:g
        - kind: functionRef
        - ref: g
        - type: Real → Real
      - Item:
        - id: n:x
        - kind: variable
        - symbol: x
        - type: Real
        - scope ref: scope:composite-body
      - Item:
        - id: n:inner-apply
        - kind: apply
        - function: n:f
        - argument: n:x
        - type: Real
      - Item:
        - id: n:outer-apply
        - kind: apply
        - function: n:g
        - argument: n:inner-apply
        - type: Real
    - scopes:
      - Item:
        - id: scope:composite-body
        - kind: functionBody
        - bound variables:
          - x
        - external parameters:
          - f
          - g
        - domain condition: Numeric renderer only: f and g are real polynomial/affine functions; all finite inputs allowed subject to numeric overflow checks.

## Properties

- Item:
  - claim: Order can change the result.
  - status: demonstrated by counterexample to commutativity
  - conditions: Both orders must be defined for comparison.
  - example ref: math:example:composition:numeric
- Item:
  - claim: h\circ(f\circ g)=(h\circ f)\circ g
  - status: short derivation
  - conditions: All participating applications are defined; compare on the common valid domain.
  - derivation: Both sides applied to x evaluate to h(f(g(x))). This changes grouping, not order.

## History

- status: source_gap
- claims:

- research tasks:
  - Research the evolution of function notation separately from the use of composition.
  - Find citable specialist/primary support before adding any first-use or attribution claim.
- reader text: Historical account not yet sourced in this draft.

## Connections

- Item:
  - target: math:concept:matrix-linear-map
  - type: applied_in
  - conditions: Compatible vector spaces and matrix dimensions; translation requires an affine representation.
  - reason: Successive linear maps are represented by ordered matrix multiplication.
  - target status: planned
  - evidence status: editorial_proposal
  - source refs:
- Item:
  - target: external:concept:workflow
  - type: personal_analogy_candidate
  - conditions: Only when stage outputs and inputs can be mapped explicitly.
  - reason: A staged process can resemble composition; this does not establish that every workflow is a mathematical function.
  - target status: external
  - evidence status: analogy_candidate
  - source refs:

## Examples

- Item:
  - id: math:example:composition:numeric
  - role: minimal
  - question: Does the order matter for a square and an affine function?
  - setting: Real-valued functions
  - inputs:
    - f: f(u)=u²
    - g: g(x)=2x+1
    - x: 3
  - steps:
    - Item:
      - index: 1
      - expression: g(3)=2·3+1=7
      - reason: Apply the inner function.
    - Item:
      - index: 2
      - expression: f(7)=7²=49
      - reason: Apply the outer function.
    - Item:
      - index: 3
      - expression: f(3)=9; g(9)=19
      - reason: Compute the reversed order for comparison.
  - result:
    - exact: (f∘g)(3)=49; (g∘f)(3)=19
  - interpretation: These are two different composite functions.
  - independent check:
    - method: Expand the composite expressions directly.
    - expected: (2·3+1)²=49; 2·3²+1=19
  - limits: One differing input refutes commutativity for this pair; it does not imply no functions commute.
  - preset:
    - a: 1
    - b: 0
    - c: 0
    - m: 2
    - n: 1
    - x: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Real-valued functions
  - title: Does the order matter for a square and an affine function?
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- Item:
  - id: math:example:composition:finite
  - role: structural
  - question: What happens when word length is followed by parity?
  - setting: Finite strings → natural numbers → {even, odd}
  - inputs:
    - g: g(word)=number of letters in the ASCII word
    - f: f(n)=even if n is divisible by 2; odd otherwise
    - word: tree
  - steps:
    - Item:
      - index: 1
      - expression: g("tree")=4
      - reason: Count four letters.
    - Item:
      - index: 2
      - expression: f(4)=even
      - reason: Four is divisible by two.
  - result:
    - exact: even
  - interpretation: A composition need not return a number or have numerical inputs.
  - independent check:
    - method: Enumerate the letters t,r,e,e and pair them.
    - expected: Two pairs; even.
  - limits: The string-counting convention must be specified. Byte length, code-point count and user-perceived letters can differ for other strings.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Finite strings → natural numbers → {even, odd}
  - title: What happens when word length is followed by parity?
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- Item:
  - id: math:example:composition:geometry
  - role: visual
  - question: Compare rotate-then-translate with translate-then-rotate.
  - setting: Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y)
  - inputs:
    - point:
      - 1
      - 0
    - rotation: 90° counterclockwise about the origin
    - translation:
      - 1
      - 0
  - steps:
    - Item:
      - index: 1
      - expression: R(1,0)=(0,1)
      - reason: Rotate the point.
    - Item:
      - index: 2
      - expression: T(0,1)=(1,1)
      - reason: Translate the rotated point.
    - Item:
      - index: 3
      - expression: T(1,0)=(2,0); R(2,0)=(0,2)
      - reason: Reverse the order.
  - result:
    - exact: (T∘R)(1,0)=(1,1); (R∘T)(1,0)=(0,2)
  - interpretation: The order of spatial transformations is part of the expression.
  - independent check:
    - method: Substitute the original point into each expanded formula.
    - expected: T(R(x,y))=(1−y,x); R(T(x,y))=(-y,x+1).
  - limits: Translation is affine and is not a linear map of R². Do not label both stages linear.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y)
  - title: Compare rotate-then-translate with translate-then-rotate.
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- Item:
  - id: math:example:composition:calibration
  - role: applied_model
  - question: Convert a raw sensor reading to Celsius and then Fahrenheit.
  - setting: An illustrative calibration model, not a measured device specification.
  - inputs:
    - raw reading: 60
    - g: C(r)=0.5r−10 degrees Celsius
    - f: F(C)=1.8C+32 degrees Fahrenheit
  - steps:
    - Item:
      - index: 1
      - expression: C(60)=0.5·60−10=20 °C
      - reason: Apply the stipulated calibration.
    - Item:
      - index: 2
      - expression: F(20)=1.8·20+32=68 °F
      - reason: Convert the temperature reading.
  - result:
    - exact: 68 °F under the stated calibration
  - interpretation: The composite gives a direct raw-reading-to-Fahrenheit transformation.
  - independent check:
    - method: Expand the composite before substitution.
    - expected: F(C(r))=0.9r+14; at r=60, 68 °F.
  - limits: Calibration coefficients are hypothetical. Mathematical correctness cannot establish actual sensor accuracy, range, uncertainty or physical validity.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - An illustrative calibration model, not a measured device specification.
  - title: Convert a raw sensor reading to Celsius and then Fahrenheit.
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- Item:
  - id: math:example:composition:restricted-domain
  - role: boundary
  - question: When is sqrt(x−4) a real-valued composition?
  - setting: g:R→R, g(x)=x−4; f:[0,∞)→[0,∞), f(u)=sqrt(u)
  - inputs:
    - test inputs:
      - 3
      - 8
  - steps:
    - Item:
      - index: 1
      - expression: x−4≥0 ⇔ x≥4
      - reason: Require the inner output to lie in the outer domain.
    - Item:
      - index: 2
      - expression: At x=3: g(3)=−1; f(−1) is undefined over R.
      - reason: Evaluate the invalid case without inventing a value.
    - Item:
      - index: 3
      - expression: At x=8: g(8)=4; f(4)=2.
      - reason: Evaluate a valid case.
  - result:
    - exact: Domain [4,∞); x=3 undefined over R; x=8 gives 2
  - interpretation: Composition may impose a stricter domain than the inner function alone.
  - independent check:
    - method: Square the valid output and compare with the inner output.
    - expected: 2²=4=8−4.
  - limits: Allowing complex outputs changes the mathematical setting and may require branch conventions. The interface must not switch settings silently.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - g:R→R, g(x)=x−4; f:[0,∞)→[0,∞), f(u)=sqrt(u)
  - title: When is sqrt(x−4) a real-valued composition?
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.
- Item:
  - id: math:example:composition:type-mismatch
  - role: type_boundary
  - question: Can a 2D rotation consume a word length?
  - setting: Declared nominal types, with no implicit coercion.
  - inputs:
    - g: String → Natural; word length
    - f: R² → R²; rotate a vector
    - word: tree
  - steps:
    - Item:
      - index: 1
      - expression: g("tree")=4 ∈ Natural
      - reason: The inner output is a natural number.
    - Item:
      - index: 2
      - expression: f expects a pair (x,y) ∈ R².
      - reason: Compare declared types.
  - result:
    - status: type_error
    - exact: No composite in this declared signature.
  - interpretation: A numerical-looking output does not supply the missing vector.
  - independent check:
    - method: Inspect arity and component types.
    - expected: One scalar cannot satisfy a pair-valued argument without an explicit additional map.
  - limits: An author could define an embedding n↦(n,0), but that is an extra function and changes the model.
  - preset: null
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - assumptions:
    - Declared nominal types, with no implicit coercion.
  - title: Can a 2D rotation consume a word length?
  - conditions to check:
    - For a particular x, x must be in dom(g) and g(x) must be in dom(f).
    - A type checker must establish assignability or require an explicit domain guard; matching scalar-looking numbers is insufficient when their meanings/units differ.

## Interactive

- component id: function-composition-quadratic-affine
- model revision: 1
- description: Evaluate f(u)=a u²+b u+c and g(x)=m x+n in either order, showing intermediate values, ordered arrows, expression and result.
- controls:
  - Item:
    - id: a
    - type: number
    - min: -5
    - max: 5
    - default: 1
    - step: 1
  - Item:
    - id: b
    - type: number
    - min: -5
    - max: 5
    - default: 0
    - step: 1
  - Item:
    - id: c
    - type: number
    - min: -5
    - max: 5
    - default: 0
    - step: 1
  - Item:
    - id: m
    - type: number
    - min: -5
    - max: 5
    - default: 2
    - step: 1
  - Item:
    - id: n
    - type: number
    - min: -5
    - max: 5
    - default: 1
    - step: 1
  - Item:
    - id: x
    - type: number
    - min: -10
    - max: 10
    - default: 3
    - step: 0.5
  - Item:
    - id: order
    - type: enum
    - values:
      - f_after_g
      - g_after_f
    - default: f_after_g
- expected cases:
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: f_after_g
    - intermediate: 7
    - output: 49
  - Item:
    - input:
      - a: 1
      - b: 0
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: g_after_f
    - intermediate: 9
    - output: 19
  - Item:
    - input:
      - a: 0
      - b: 1
      - c: 0
      - m: 2
      - n: 1
      - x: 3
      - order: f_after_g
    - intermediate: 7
    - output: 7
- invariants:
  - Identity f(u)=u leaves g(x) unchanged in either order.
  - Output and intermediate values agree across expression, mapping arrows, table and accessible result.
- limits:
  - This numeric module covers real quadratic f and affine g, not every mathematical function.
  - The structural, geometric and domain examples require separate registered views or static explanations.
  - General composition AST has abstract A/B/C types. The numeric renderer binds A=B=C=Real; reversed order is not automatically permitted in other typed settings.
- fallback: A worked expression, table of intermediate/output values and plain-language reading.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - parameters
  - order
  - result
  - viewport
  - note
- renderer id: function-composition-quadratic-affine
- renderer version: 1
- model id: function-composition-quadratic-affine
- expression id: ast:composition:apply-f-after-g
- interaction status: implemented
- expression variants:
  - f after g: ast:composition:apply-f-after-g
  - g after f: ast:composition:apply-g-after-f

## Prompts

- Item:
  - prompt: Before switching order, predict whether the result changes. What would count as evidence?
  - answer: Compute both ordered composites at the same input. A difference refutes equality of the two functions; agreement at one input does not prove equality.
- Item:
  - prompt: What must be checked before connecting two transformations?
  - answer: The particular inner output must be a valid outer input; for a full typed composition establish the needed domain/type compatibility.

## Schema Version

0.1.0

## Slug

function-composition

## Branches

- language
- functions

## Updated

2026-10-26T00:00:00Z

## Representations

- Item:
  - kind: symbolic
  - description: (f\circ g)(x)=f(g(x))
- Item:
  - kind: process
  - description: Evaluate f(u)=a u²+b u+c and g(x)=m x+n in either order, showing intermediate values, ordered arrows, expression and result.

## Source Refs

- source:openstax:composition

## Review Gaps

- Independent mathematical/editorial review pending.
- Historical research incomplete; no priority claim implied.
- Assistive-technology, touch-device and learner qualification remains incomplete.

## Change Log

- 0.1.0-draft: authored specimen, parameters and expected results for implementation.

## Applications

- Item:
  - context: What happens when word length is followed by parity?
  - mapping: Finite strings → natural numbers → {even, odd}
  - limitations: The string-counting convention must be specified. Byte length, code-point count and user-perceived letters can differ for other strings.
  - evidence kind: constructed_example
  - example ref: math:example:composition:finite
- Item:
  - context: Compare rotate-then-translate with translate-then-rotate.
  - mapping: Points in R²; R(x,y)=(-y,x), T(x,y)=(x+1,y)
  - limitations: Translation is affine and is not a linear map of R². Do not label both stages linear.
  - evidence kind: constructed_example
  - example ref: math:example:composition:geometry
- Item:
  - context: Convert a raw sensor reading to Celsius and then Fahrenheit.
  - mapping: An illustrative calibration model, not a measured device specification.
  - limitations: Calibration coefficients are hypothetical. Mathematical correctness cannot establish actual sensor accuracy, range, uncertainty or physical validity.
  - evidence kind: constructed_example
  - example ref: math:example:composition:calibration

## Referenced source registry

- Source ID: source:openstax:composition. [Precalculus 2e, 1.4 Composition of Functions](https://openstax.org/books/precalculus-2e/pages/1-4-composition-of-functions). Locator: Composition and domain sections. Verification: composition definition/domain inspected 2026-10-23; external reference, not independent review. Rights: Do not copy prose or exercises; verify edition license before reuse.
