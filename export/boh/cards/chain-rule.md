---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:chain-rule", "id": "math:concept:chain-rule", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:chain-rule", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "f744c42328f5e0dd0c64beccbcf49ad7e9e162a27dabc37b4f2d4a969ac6f822", "source_revision": "0.1.0-draft", "upstream_content_sha256": "72b5e13ae51a696ac51929631f21a4c3817ad4f07c10b87a888d595ed4934b77"}, "purpose": "Follow a small change through an inner rule and an outer rule.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "72b5e13ae51a696ac51929631f21a4c3817ad4f07c10b87a888d595ed4934b77", "status": "draft", "title": "Chain rule", "topics": ["mathematics", "calculus", "algebra", "analysis", "derivative of a composition", "composite sensitivity", "inner and outer derivatives"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Chain rule

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:chain-rule; revision 0.1.0-draft. Setting: Real functions with compatible local domains: g is differentiable at x and f is differentiable at g(x). The executable specimen is a square after an affine rule, with bounded real controls. Expression: $h=f\circ g,\quad h(x)=f(g(x)),\quad h'(x)=f'(g(x))g'(x).\quad g(x)=ax+b,\ f(u)=u^2,\ u=g(x)\Rightarrow h'(x)=2(ax+b)a.$. Conditions required for a defined value (a case may test their violation): For the general chain rule, g is differentiable at x and f is differentiable at g(x), with the composition defined in the relevant neighborhood. The inner slope is evaluated at x; the outer slope is evaluated at the current inner value u=g(x). The restricted live family is g(x)=a*x+b and f(u)=u². Their composition h(x)=(a*x+b)² is differentiable for every real x. Derivative products describe local first-order sensitivity; a finite input change need not produce exactly derivative times that change. Physical story units are declared separately. A panel-side interpretation requires a positive finished side; signed polynomial inputs remain valid mathematics outside that interpretation. Scope: The general chain rule applies to differentiable compatible functions, beyond polynomials and beyond this one-variable example. The live UI is restricted to f(u)=u² and g(x)=a*x+b with bounded real controls. It is not a symbolic differentiator or an arbitrary function editor. Negative inner values remain valid polynomial inputs; a physical square-side story uses positive sides and compatible units. No finite-step quotient is substituted for the exact analytic derivative.

## Schema Version

0.1.0

## Id

math:concept:chain-rule

## Slug

chain-rule

## Type

concept

## Title

Chain rule

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

- derivative of a composition
- composite sensitivity
- inner and outer derivatives

## Branches

- calculus
- algebra
- analysis

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow a small change through an inner rule and an outer rule.

## Meaning

For a differentiable composition, the local sensitivity is the outer derivative evaluated at the inner output, multiplied by the inner derivative. In the live example an affine calibration selects a side and the square rule turns it into area. The chain rule tracks how a setting change reaches that area.

## Prerequisites

- required:
  - math:concept:function-composition
  - math:concept:derivative
- helpful:
  - math:concept:function
  - math:concept:exponentiation
- depth:
  - math:concept:partial-derivative

## Definition

- setting: Real functions with compatible local domains: g is differentiable at x and f is differentiable at g(x). The executable specimen is a square after an affine rule, with bounded real controls.
- formal latex: h=f\circ g,\quad h(x)=f(g(x)),\quad h'(x)=f'(g(x))g'(x).\quad g(x)=ax+b,\ f(u)=u^2,\ u=g(x)\Rightarrow h'(x)=2(ax+b)a.
- signature:
  - x,a,b: Finite real controls; x in [-3,3], a in [-2,2], b in [-3,3].
  - u,g(x): Current innerValue=a*x+b.
  - f(u),h(x): Current composedValue=(a*x+b)².
  - g′(x): innerDerivative=a.
  - f′(u): outerDerivative=2*u, evaluated at u=g(x).
  - h′(x): chainDerivative, the primary scalar output; expandedDerivative gives an algebraically expanded check.
- conditions:
  - For the general chain rule, g is differentiable at x and f is differentiable at g(x), with the composition defined in the relevant neighborhood.
  - The inner slope is evaluated at x; the outer slope is evaluated at the current inner value u=g(x).
  - The restricted live family is g(x)=a*x+b and f(u)=u². Their composition h(x)=(a*x+b)² is differentiable for every real x.
  - Derivative products describe local first-order sensitivity; a finite input change need not produce exactly derivative times that change.
  - Physical story units are declared separately. A panel-side interpretation requires a positive finished side; signed polynomial inputs remain valid mathematics outside that interpretation.
- domain notes: The general chain rule applies to differentiable compatible functions, beyond polynomials and beyond this one-variable example. The live UI is restricted to f(u)=u² and g(x)=a*x+b with bounded real controls. It is not a symbolic differentiator or an arbitrary function editor. Negative inner values remain valid polynomial inputs; a physical square-side story uses positive sides and compatible units. No finite-step quotient is substituted for the exact analytic derivative.
- proof status: Definition-level reference; worked properties are author-derived for stated assumptions. Independent mathematical review pending.
- source refs:
  - source:openstax:chain-rule

## Grammar

- pronunciation: Chain rule
- expression latex: h=f\circ g,\quad h(x)=f(g(x)),\quad h'(x)=f'(g(x))g'(x).\quad g(x)=ax+b,\ f(u)=u^2,\ u=g(x)\Rightarrow h'(x)=2(ax+b)a.
- formation rule: innerValue=a*x+b; composedValue=innerValue*innerValue; innerDerivative=a; outerDerivative=2*innerValue; output=chainDerivative=outerDerivative*innerDerivative; expandedDerivative=2*a*a*x+2*a*b.
- precedence: Evaluate g(x)=ax+b first. Evaluate f and its derivative at the current inner value u=g(x), then multiply the outer derivative by g′(x). Parentheses identify function arguments and preserve the composition order.
- symbols:
  - Item:
    - token: x
    - role: Input to the inner calibration
    - type: Real scalar
  - Item:
    - token: a
    - role: Inner affine multiplier
    - type: Real scalar
  - Item:
    - token: b
    - role: Inner affine offset
    - type: Real scalar
  - Item:
    - token: u
    - role: Current inner value g(x), also the outer function input
    - type: Derived real scalar
  - Item:
    - token: f
    - role: The outer square function, not an evaluated scalar
    - type: Real-to-real function
  - Item:
    - token: g
    - role: The inner affine function, not an evaluated scalar
    - type: Real-to-real function
  - Item:
    - token: g(x)
    - role: Current inner value a*x+b
    - type: Derived real scalar
  - Item:
    - token: f(u)
    - role: Current outer value u² at u=g(x)
    - type: Derived nonnegative real scalar
  - Item:
    - token: h(x)
    - role: Current composite value f(g(x))
    - type: Derived nonnegative real scalar
  - Item:
    - token: g′(x)
    - role: Inner derivative evaluated at x
    - type: Derived real scalar
  - Item:
    - token: f′(u)
    - role: Outer derivative evaluated at current u=g(x)
    - type: Derived real scalar
  - Item:
    - token: h′(x)
    - role: Derivative of the whole composition
    - type: Derived real scalar
- ast:
  - id: ast:chain-rule:expression
  - root: n:chainDerivative
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Finite real control
      - scope ref: scope:chain-rule:expression
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:chain-rule:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:chain-rule:expression
    - Item:
      - id: n:ax
      - kind: multiply
      - arguments:
        - n:a
        - n:x
      - type: Real scalar
    - Item:
      - id: n:innerValue
      - kind: add
      - arguments:
        - n:ax
        - n:b
      - type: Real scalar
    - Item:
      - id: n:f
      - kind: functionRef
      - ref: Square map f(u)=u²
      - type: Real to nonnegative real
    - Item:
      - id: n:composedValue
      - kind: apply
      - function: n:f
      - argument: n:innerValue
      - type: Nonnegative real scalar
    - Item:
      - id: n:outerSlope
      - kind: functionRef
      - ref: Derivative of the square map: a real input is multiplied by 2
      - type: Real to real
    - Item:
      - id: n:outerDerivative
      - kind: apply
      - function: n:outerSlope
      - argument: n:innerValue
      - type: Real scalar
    - Item:
      - id: n:chainDerivative
      - kind: multiply
      - arguments:
        - n:outerDerivative
        - n:a
      - type: Real scalar
  - scopes:
    - Item:
      - id: scope:chain-rule:expression
      - kind: modelExpression
      - free variables:
        - x
        - a
        - b
      - domain condition: The live square-after-affine family is defined and differentiable for all real controls; UI controls remain within their declared finite bounds.
- parse errors:
  - Item:
    - input: Evaluate f′ at x instead of g(x)
    - status: evaluation_point_error
    - reason: The outer function receives u=g(x), so its derivative factor is f′(g(x)).
  - Item:
    - input: Add the stage derivatives instead of multiplying them
    - status: operation_error
    - reason: For a differentiable composition the chain rule multiplies the correctly evaluated local derivative factors.
  - Item:
    - input: Call a finite output change exactly h′(x) times the input change for every step
    - status: scope_error
    - reason: That equality is generally only a first-order local approximation, not an exact finite-change identity.
- ast coverage: The tree explicitly forms the inner value, applies the outer square map and its derivative, then multiplies the outer derivative by the inner coefficient a. The root is the composite derivative, not the composed value. The general differentiability theorem is stated separately; this tree describes the restricted analytic family.
- output symbol bindings:
  - u: innerValue
  - g(x): innerValue
  - f(u): composedValue
  - h(x): composedValue
  - g′(x): innerDerivative
  - f′(u): outerDerivative
  - h′(x): chainDerivative
  - f: function:f
  - g: function:g

## Properties

- Item:
  - claim: h′(x)=2a(ax+b)=2a²x+2ab for the live family.
  - conditions: g(x)=ax+b and f(u)=u² with real a,b,x.
  - derivation: Apply the square derivative at u=ax+b and multiply by the affine derivative a; independent expansion gives the same polynomial derivative.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:chain-rule:panel-area
- Item:
  - claim: A zero composite derivative at one point does not imply a constant composite function.
  - conditions: Use a=1,b=-1 at x=1.
  - derivation: h(x)=(x-1)² has h′(1)=0, but h(1+ε)=ε² differs from h(1) when ε≠0.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:chain-rule:zero-outer-slope

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: Inner outputs lie in the outer domain.
  - reason: The derivative follows the same ordered inner-then-outer evaluation.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:derivative
  - type: supports
  - conditions: Both required derivatives exist at their stated evaluation points.
  - reason: The chain rule combines two local derivative factors.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:partial-derivative
  - type: supports
  - conditions: Hold other independent variables fixed before following a one-variable slice.
  - reason: The same composition reasoning can apply to a differentiable slice, with its conditions retained.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:chain-rule:panel-area
  - title: Trace setting sensitivity into panel area
  - role: applied_model
  - question: At x=1 m, the drawing tool uses a=2 and b=1 m. How quickly does panel area change with the setting?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
  - inputs:
    - x: 1
    - a: 2
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: u=g(1)=2*1+1=3 m; h(1)=3²=9 m²
      - reason: The current setting first determines the finished side, then its square area.
    - Item:
      - index: 2
      - expression: g′(1)=2; f′(u)=2u, so f′(3)=6 m
      - reason: The outer slope must use the inner value 3, not the original setting 1.
    - Item:
      - index: 3
      - expression: h′(1)=6*2=12 m²/m
      - reason: Multiply the outer area-per-side sensitivity by the side-per-setting sensitivity.
  - result:
    - exact: Area 9 m²; local area sensitivity 12 m² per metre of setting
  - interpretation: The two stage sensitivities connect the setting to the final area.
  - independent check:
    - method: Independent expansion
    - expected: h(x)=(2x+1)²=4x²+4x+1 has derivative 8x+4, which gives 12 at x=1.
  - limits: The derivative is an instantaneous local rate; it is not the exact area change for an arbitrary finite adjustment.
  - preset:
    - x: 1
    - a: 2
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
- Item:
  - id: math:example:chain-rule:gentler-calibration
  - title: A gentler calibration changes the total sensitivity
  - role: applied_model
  - question: Use a=0.5,b=1 m and x=2 m. What are the finished side, area and area sensitivity?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
  - inputs:
    - x: 2
    - a: 0.5
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: u=0.5*2+1=2 m; h=2²=4 m²
      - reason: The side follows the selected affine calibration.
    - Item:
      - index: 2
      - expression: g′=0.5; f′(2)=4 m
      - reason: The inner calibration halves the transmitted setting change.
    - Item:
      - index: 3
      - expression: h′=4*0.5=2 m²/m
      - reason: The total sensitivity combines both stages.
  - result:
    - exact: Area 4 m²; local area sensitivity 2 m²/m
  - interpretation: A large outer slope alone does not determine the overall sensitivity.
  - independent check:
    - method: Difference expansion
    - expected: h(x)=0.25x²+x+1, so h′(2)=0.5*2+1=2.
  - limits: This comparison changes the calibration and input together; it does not isolate one empirical machine effect.
  - preset:
    - x: 2
    - a: 0.5
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
- Item:
  - id: math:example:chain-rule:fixed-side
  - title: A constant inner rule stops the change
  - role: applied_model
  - question: Set a=0,b=2 m and x=3 m. Can the panel area change when the setting changes?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
  - inputs:
    - x: 3
    - a: 0
    - b: 2
  - steps:
    - Item:
      - index: 1
      - expression: g(x)=2 m for every x; h(x)=4 m²
      - reason: The inner rule ignores the setting.
    - Item:
      - index: 2
      - expression: g′(x)=0; f′(2)=4 m
      - reason: The outer area rule still has a nonzero slope at side 2.
    - Item:
      - index: 3
      - expression: h′(x)=4*0=0 m²/m
      - reason: Zero inner sensitivity blocks the transmitted change.
  - result:
    - exact: Area 4 m²; derivative 0 everywhere in this fixed-side family
  - interpretation: A zero inner derivative can make the composite derivative zero despite a nonzero outer derivative.
  - independent check:
    - method: Constant-function check
    - expected: Directly, h(x)=4 for every x, so any finite difference quotient with nonzero step is zero.
  - limits: This deliberately fixed drawing rule is a constructed configuration rather than evidence about a physical control fault.
  - preset:
    - x: 3
    - a: 0
    - b: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
- Item:
  - id: math:example:chain-rule:reversed-setting
  - title: Increasing a setting can shrink the side
  - role: applied_model
  - question: Use g(x)=-x+3 at x=1 m. What sign should the area sensitivity have?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
  - inputs:
    - x: 1
    - a: -1
    - b: 3
  - steps:
    - Item:
      - index: 1
      - expression: u=-1+3=2 m; h=4 m²
      - reason: The finished side remains positive in this example.
    - Item:
      - index: 2
      - expression: g′=-1; f′(2)=4 m
      - reason: The inner rule reverses the direction of change.
    - Item:
      - index: 3
      - expression: h′=4*(-1)=-4 m²/m
      - reason: Area decreases locally when the setting increases.
  - result:
    - exact: Area 4 m²; local area sensitivity -4 m²/m
  - interpretation: The sign comes from the full chain, not the nonnegative area value.
  - independent check:
    - method: Expanded derivative
    - expected: h(x)=x²-6x+9 has derivative 2x-6; at x=1 it is -4.
  - limits: A positive area can have a negative derivative. The physical interpretation only applies while the finished side stays positive.
  - preset:
    - x: 1
    - a: -1
    - b: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
- Item:
  - id: math:example:chain-rule:zero-outer-slope
  - title: Zero slope does not make the whole rule constant
  - role: applied_model
  - question: Consider the mathematical boundary g(x)=x-1 at x=1 m. What does the chain rule say?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.
  - inputs:
    - x: 1
    - a: 1
    - b: -1
  - steps:
    - Item:
      - index: 1
      - expression: u=0; h(1)=0
      - reason: This is a zero-side algebraic boundary, not a manufactured panel.
    - Item:
      - index: 2
      - expression: g′=1; f′(0)=0; h′(1)=0
      - reason: The outer square rule has zero slope at its origin.
    - Item:
      - index: 3
      - expression: h(1+ε)=ε² for any small nonzero real ε
      - reason: Nearby values still change even though the derivative at the boundary is zero.
  - result:
    - exact: Composite derivative 0 at x=1; the function h(x)=(x-1)² is not constant
  - interpretation: Zero first-order sensitivity at a point does not rule out higher-order change.
  - independent check:
    - method: Difference-quotient limit
    - expected: [h(1+ε)-h(1)]/ε=ε for ε≠0, which tends to 0 as ε tends to 0.
  - limits: The symbol ε here is a small signed input increment, not a claim about a positive limit-error tolerance; the physical panel interpretation excludes a zero side.
  - preset:
    - x: 1
    - a: 1
    - b: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - A configured drawing tool maps a setting x measured in metres to a finished panel side u=a*x+b measured in metres.
    - The calibration factor a is dimensionless and offset b is measured in metres; the outer rule f(u)=u² gives square area in m².
    - Values and calibration rules are stipulated examples, not measurements of a real machine.
    - A manufactured-panel interpretation uses u>0; the zero-side case is explicitly a limiting mathematical configuration.

## Interactive

- component id: chain-rule-visual-model
- renderer id: chain-rule-visual-model
- renderer version: 1.0.0
- model id: chain-rule-visual-model
- model revision: 1
- expression id: ast:chain-rule:expression
- interaction status: implemented
- description: Show the input, calibrated inner value, outer square area and two local derivative factors. The final sensitivity multiplies the staged factors; the Graph plots the composite derivative as x varies, with the composite value retained as a separate readout.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: a
    - type: number
    - default: 2
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
  - Item:
    - id: b
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its message; do not silently clamp or substitute a stale result.
- expected cases:
  - Item:
    - input:
      - x: 1
      - a: 2
      - b: 1
    - output: 12
  - Item:
    - input:
      - x: 2
      - a: 0.5
      - b: 1
    - output: 2.0
  - Item:
    - input:
      - x: 3
      - a: 0
      - b: 2
    - output: 0
  - Item:
    - input:
      - x: 1
      - a: -1
      - b: 3
    - output: -4
  - Item:
    - input:
      - x: 1
      - a: 1
      - b: -1
    - output: 0
  - Item:
    - input:
      - x: 0
      - a: 2
      - b: 0
    - output: 0
  - Item:
    - input:
      - x: -2
      - a: 2
      - b: 0
    - output: -16
  - Item:
    - input:
      - x: 3
      - a: 2
      - b: 3
    - output: 36
  - Item:
    - input:
      - x: -3
      - a: -2
      - b: -3
    - output: -12
  - Item:
    - input:
      - x: 0.5
      - a: -0.5
      - b: 0.25
    - output: -0.0
  - Item:
    - input:
      - x: 3.1
      - a: 2
      - b: 1
    - status: invalid_parameters
  - Item:
    - input:
      - x: 1
      - a: 2.1
      - b: 1
    - status: invalid_parameters
- compute: innerValue=a*x+b; composedValue=innerValue*innerValue; innerDerivative=a; outerDerivative=2*innerValue; output=chainDerivative=outerDerivative*innerDerivative; expandedDerivative=2*a*a*x+2*a*b.
- numeric tolerance: 1e-10
- invariants:
  - For the general chain rule, g is differentiable at x and f is differentiable at g(x), with the composition defined in the relevant neighborhood.
  - The inner slope is evaluated at x; the outer slope is evaluated at the current inner value u=g(x).
  - The restricted live family is g(x)=a*x+b and f(u)=u². Their composition h(x)=(a*x+b)² is differentiable for every real x.
  - Derivative products describe local first-order sensitivity; a finite input change need not produce exactly derivative times that change.
  - Physical story units are declared separately. A panel-side interpretation requires a positive finished side; signed polynomial inputs remain valid mathematics outside that interpretation.
- limits:
  - Only a square outer rule and an affine inner rule; no general symbolic parser.
  - The primary scalar output is h′(x); the composite value h(x) remains a separate result.
  - The polynomial model permits signed inner values, while the panel story declares its positive-side range and physical units.
- fallback: Pause and read the inner value, composite value and two derivative factors, then inspect the evaluated derivative samples or the original worked steps. Geometry and Graph use the same analytic calculation.
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
  - prompt: Where should the outer slope be evaluated?
  - answer: At u=g(x), the value actually supplied to the outer function, rather than at the original x.
- Item:
  - prompt: Does multiplying two derivatives predict an arbitrary finite change exactly?
  - answer: No. The derivative is local first-order sensitivity; nonlinear finite changes need the full function calculation.

## Representations

- Item:
  - kind: geometry
  - description: Show the input, calibrated inner value, outer square area and two local derivative factors. The final sensitivity multiplies the staged factors; the Graph plots the composite derivative as x varies, with the composite value retained as a separate readout.
- Item:
  - kind: graph
  - description: Plot h′(x)=2a(ax+b) as x varies while a and b stay fixed. This is the composite derivative; h(x) remains a separate value. A zero derivative is a valid plotted result.
- Item:
  - kind: substitution
  - description: Current controls, intermediate calculations and labeled scene quantities follow one evaluated model.

## Applications

- Item:
  - context: Calibrated panel area
  - mapping: A setting maps to a finished side, then to square area; stage sensitivities multiply with compatible units.
  - limitations: Stipulated calibration, positive physical sides and a local derivative interpretation.
  - evidence kind: constructed_example
  - example ref: math:example:chain-rule:panel-area
- Item:
  - context: Fixed side
  - mapping: A zero inner multiplier makes the final area constant even when the outer slope is nonzero.
  - limitations: This is a deliberate mathematical configuration, not an observed machine fault.
  - evidence kind: constructed_example
  - example ref: math:example:chain-rule:fixed-side

## Source Refs

- source:openstax:chain-rule

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original scenarios, bounded affine-then-square derivative fixtures, distinct Geometry/Graph views and a linked modular story.

## Referenced source registry

- Source ID: source:openstax:chain-rule. [Calculus Volume 1, 3.6 The Chain Rule](https://openstax.org/books/calculus-volume-1/pages/3-6-the-chain-rule). Locator: The Chain Rule theorem: derivative of a composition, compatible evaluation points and differentiability conditions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
