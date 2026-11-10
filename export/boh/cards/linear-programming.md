---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:linear-programming", "id": "math:concept:linear-programming", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-programming", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "350ab74a4349dac7fe6742839af2773edc199c7c0e155b38b8a09c29a4c6ddd2", "source_revision": "0.1.0-draft", "upstream_content_sha256": "96ca317a285601d738dcca196c5df7544358522e9c916c349e69242db1a594b1"}, "purpose": "Which paint mixture gives the largest contribution within the available material?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "96ca317a285601d738dcca196c5df7544358522e9c916c349e69242db1a594b1", "status": "draft", "title": "Linear programming and feasible choices", "topics": ["mathematics", "algebra", "optimization", "linear programming and feasible choices"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Linear programming and feasible choices

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:linear-programming; revision 0.1.0-draft. Setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best. Expression: $\max V=px+qy,\quad 0\le x\le4,\quad0\le y\le3,\quad x+y\le B.$. Conditions required for a defined value (a case may test their violation): The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness. Scope: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.

## Schema Version

0.1.0

## Id

math:concept:linear-programming

## Slug

linear-programming

## Type

concept

## Title

Linear programming and feasible choices

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- linear programming and feasible choices

## Branches

- algebra
- optimization

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which paint mixture gives the largest contribution within the available material?

## Meaning

Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:quadratic-optimization
  - math:concept:gradient-descent
- depth:
  []

## Definition

- setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
- formal latex: \max V=px+qy,\quad 0\le x\le4,\quad0\le y\le3,\quad x+y\le B.
- signature:
  - B: Available base material
  - p: Contribution per litre of the first blend
  - q: Contribution per litre of the second blend
  - x: Litres of the first blend at one maximizing corner
  - y: Litres of the second blend at one maximizing corner
  - V: Maximum contribution
- conditions:
  - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- domain notes: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:algebra-extension:lp

## Grammar

- pronunciation: Linear programming and feasible choices
- expression latex: \max V=px+qy,\quad 0\le x\le4,\quad0\le y\le3,\quad x+y\le B.
- formation rule: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
- precedence: Evaluate the declared component operations before the final quantity; preserve the stated variable domains.
- symbols:
  - Item:
    - token: B
    - role: Available base material
    - type: Declared input or evaluated quantity
  - Item:
    - token: p
    - role: Contribution per litre of the first blend
    - type: Declared input or evaluated quantity
  - Item:
    - token: q
    - role: Contribution per litre of the second blend
    - type: Declared input or evaluated quantity
  - Item:
    - token: x
    - role: Litres of the first blend at one maximizing corner
    - type: Declared input or evaluated quantity
  - Item:
    - token: y
    - role: Litres of the second blend at one maximizing corner
    - type: Declared input or evaluated quantity
  - Item:
    - token: V
    - role: Maximum contribution
    - type: Declared input or evaluated quantity
- ast:
  - id: ast:linear-programming:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:budget
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: B
      - scope ref: scope:linear-programming
    - Item:
      - id: n:rateX
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: p
      - scope ref: scope:linear-programming
    - Item:
      - id: n:rateY
      - kind: variable
      - type: Real input in the declared finite range
      - symbol: q
      - scope ref: scope:linear-programming
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded algebra rule
      - ref: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
    - Item:
      - id: n:bound-budget
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:budget
    - Item:
      - id: n:bound-rateX
      - kind: apply
      - type: Declared primary result
      - function: n:bound-budget
      - argument: n:rateX
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-rateX
      - argument: n:rateY
  - scopes:
    - Item:
      - id: scope:linear-programming
      - kind: modelExpression
      - free variables:
        - B
        - p
        - q
      - domain condition: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- parse errors:
  - Item:
    - input: An undeclared or out-of-range input
    - status: unsupported parameter
    - reason: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- ast coverage: Typed application outline for a bounded family; not a general expression parser.
- output symbol bindings:
  - B: budget
  - p: rateX
  - q: rateY
  - x: bestX
  - y: bestY
  - V: output

## Properties

- Item:
  - claim: A maximum is attained at a feasible vertex in this bounded family.
  - conditions: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - derivation: Every feasible point is a convex combination of the polygon vertices. Its linear contribution is the same combination of their contributions, so it cannot exceed the largest vertex contribution. Equal best endpoints make their whole edge optimal.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:linear-programming:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Check historical and notation development before adding priority claims.
  - Verify exact-edition book mappings independently.
- reader text: Historical development has not been researched for this draft. The workshop stories and examples are original constructions.

## Connections

- Item:
  - target: math:concept:quadratic-optimization
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Linear programming and feasible choices supplies a bounded preparation for quadratic optimization.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:gradient-descent
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Linear programming and feasible choices supplies a bounded preparation for gradient descent.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use each connected lesson under its own stated conditions.
  - reason: Linear programming and feasible choices supplies a bounded preparation for linear model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:linear-programming:case-1
  - title: A five-litre production plan
  - role: applied_model
  - question: Which paint mixture gives the largest contribution within the available material?
  - setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
  - assumptions:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - inputs:
    - budget: 5
    - rateX: 3
    - rateY: 2
  - steps:
    - Item:
      - index: 1
      - expression: B = 5; p = 3; q = 2
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: maximize V = px + qy; x + y ≤ B; result ≈ 14.0
      - reason: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
  - result:
    - approximate: 14.0 credits
  - interpretation: Four litres of the first blend and one of the second contribute fourteen credits.
  - independent check:
    - method: Enumerate intersections of every pair of constraint lines with exact rational arithmetic; retain feasible intersections and compare their objective values.
    - expected: 14.0
  - limits: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - preset:
    - budget: 5
    - rateX: 3
    - rateY: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- Item:
  - id: math:example:linear-programming:case-2
  - title: Prefer the second blend
  - role: applied_model
  - question: Which paint mixture gives the largest contribution within the available material?
  - setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
  - assumptions:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - inputs:
    - budget: 5
    - rateX: 1
    - rateY: 4
  - steps:
    - Item:
      - index: 1
      - expression: B = 5; p = 1; q = 4
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: maximize V = px + qy; x + y ≤ B; result ≈ 14.0
      - reason: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
  - result:
    - approximate: 14.0 credits
  - interpretation: Three litres of the second blend and two of the first contribute fourteen credits.
  - independent check:
    - method: Enumerate intersections of every pair of constraint lines with exact rational arithmetic; retain feasible intersections and compare their objective values.
    - expected: 14.0
  - limits: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - preset:
    - budget: 5
    - rateX: 1
    - rateY: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- Item:
  - id: math:example:linear-programming:case-3
  - title: Equal contributions
  - role: applied_model
  - question: Which paint mixture gives the largest contribution within the available material?
  - setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
  - assumptions:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - inputs:
    - budget: 5
    - rateX: 2
    - rateY: 2
  - steps:
    - Item:
      - index: 1
      - expression: B = 5; p = 2; q = 2
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: maximize V = px + qy; x + y ≤ B; result ≈ 10.0
      - reason: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
  - result:
    - approximate: 10.0 credits
  - interpretation: Every feasible point on the full-material edge gives ten credits.
  - independent check:
    - method: Enumerate intersections of every pair of constraint lines with exact rational arithmetic; retain feasible intersections and compare their objective values.
    - expected: 10.0
  - limits: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - preset:
    - budget: 5
    - rateX: 2
    - rateY: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- Item:
  - id: math:example:linear-programming:case-4
  - title: No production is best
  - role: applied_model
  - question: Which paint mixture gives the largest contribution within the available material?
  - setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
  - assumptions:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - inputs:
    - budget: 5
    - rateX: -1
    - rateY: -2
  - steps:
    - Item:
      - index: 1
      - expression: B = 5; p = -1; q = -2
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: maximize V = px + qy; x + y ≤ B; result ≈ 0.0
      - reason: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
  - result:
    - approximate: 0.0 credits
  - interpretation: The origin gives zero; either production direction would reduce contribution.
  - independent check:
    - method: Enumerate intersections of every pair of constraint lines with exact rational arithmetic; retain feasible intersections and compare their objective values.
    - expected: 0.0
  - limits: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - preset:
    - budget: 5
    - rateX: -1
    - rateY: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- Item:
  - id: math:example:linear-programming:case-5
  - title: A flat objective
  - role: applied_model
  - question: Which paint mixture gives the largest contribution within the available material?
  - setting: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
  - assumptions:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - inputs:
    - budget: 5
    - rateX: 0
    - rateY: 0
  - steps:
    - Item:
      - index: 1
      - expression: B = 5; p = 0; q = 0
      - reason: Declare the bounded inputs and preserve their units.
    - Item:
      - index: 2
      - expression: maximize V = px + qy; x + y ≤ B; result ≈ 0.0
      - reason: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
  - result:
    - approximate: 0.0 credits
  - interpretation: Every feasible mixture gives zero, not just the corners.
  - independent check:
    - method: Enumerate intersections of every pair of constraint lines with exact rational arithmetic; retain feasible intersections and compare their objective values.
    - expected: 0.0
  - limits: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - preset:
    - budget: 5
    - rateX: 0
    - rateY: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.

## Interactive

- component id: component:linear-programming
- renderer id: linear-programming-visual-model
- renderer version: 1
- model id: linear-programming-visual-model
- model revision: 1
- expression id: ast:linear-programming:expression
- interaction status: implemented
- description: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
- controls:
  - Item:
    - id: budget
    - type: number
    - default: 5
    - min: 0
    - max: 7
    - step: 0.05
  - Item:
    - id: rateX
    - type: number
    - default: 3
    - min: -3
    - max: 5
    - step: 0.05
  - Item:
    - id: rateY
    - type: number
    - default: 2
    - min: -3
    - max: 5
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - budget: 5
      - rateX: 3
      - rateY: 2
    - status: valid
    - output: 14.0
  - Item:
    - input:
      - budget: 5
      - rateX: 1
      - rateY: 4
    - status: valid
    - output: 14.0
  - Item:
    - input:
      - budget: 5
      - rateX: 2
      - rateY: 2
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - budget: 5
      - rateX: -1
      - rateY: -2
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - budget: 5
      - rateX: 0
      - rateY: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - budget: 0
      - rateX: 3
      - rateY: 2
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - budget: 7
      - rateX: 3
      - rateY: 2
    - status: valid
    - output: 18.0
  - Item:
    - input:
      - budget: 3
      - rateX: 2
      - rateY: 2
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - budget: 4
      - rateX: 2.0000000000000004
      - rateY: 2
    - status: valid
    - output: 8.000000000000002
  - Item:
    - input:
      - budget: 4
      - rateX: 1.9999999999999998
      - rateY: 2
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - budget: 5e-324
      - rateX: 1
      - rateY: 0
    - status: valid
    - output: 5e-324
  - Item:
    - input:
      - budget: 5e-324
      - rateX: 5e-324
      - rateY: 0
    - status: numeric_precision
  - Item:
    - input:
      - budget: -1
      - rateX: 3
      - rateY: 2
    - status: invalid_parameters
  - Item:
    - input:
      - budget: 5
      - rateX: 3
      - rateY: null
    - status: invalid_parameters
- compute: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
- numeric tolerance: 1e-10
- invariants:
  - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - Story, controls, calculations and both views use one evaluated state.
- limits:
  - The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
- fallback: Pause to read story and calculation. Geometry, Graph, worked examples and the model-data table share inputs.
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
  - prompt: Which paint mixture gives the largest contribution within the available material?
  - answer: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.
- Item:
  - prompt: Which assumptions make this picture valid?
  - answer: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.

## Representations

- Item:
  - kind: geometry
  - description: A paint workshop can make at most four litres of a first blend and three litres of a second. Both use one litre of base per litre made. The available base material moves one boundary of the feasible polygon. Contribution rates may be positive or negative, so leaving material unused can be best.
- Item:
  - kind: graph
  - description: Hold the other inputs fixed and graph the declared primary result against Base material B. Real-root counts are isolated evaluated dots, never fractional counts.
- Item:
  - kind: substitution
  - description: Intersect nonnegative production choices with the two fixed capacities and the total-material half-plane. Evaluate the linear contribution at every resulting vertex and retain all maximizing vertices. A shared optimal edge or a flat objective remains visible.

## Applications

- Item:
  - context: A five-litre production plan
  - mapping: Four litres of the first blend and one of the second contribute fourteen credits.
  - limitations: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - evidence kind: constructed_example
  - example ref: math:example:linear-programming:case-1
- Item:
  - context: Prefer the second blend
  - mapping: Three litres of the second blend and two of the first contribute fourteen credits.
  - limitations: The quantities are continuous litres, not indivisible cans. The fixed capacities are four and three litres; total base ranges from zero to seven litres. Rates range from −3 to 5 credits per litre. The feasible set always contains the origin and is bounded. This two-variable family does not implement arbitrary constraints, integer programming, infeasibility or unboundedness.
  - evidence kind: constructed_example
  - example ref: math:example:linear-programming:case-2

## Source Refs

- source:algebra-extension:lp

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Added a bounded algebra family with original story, independent reference, matching preview and distinct Geometry/Graph.

## Referenced source registry

- Source ID: source:algebra-extension:lp. [MIT · 18.310 Linear Programming](https://math.mit.edu/~djk/18.310/18.310F04/26and27.html). Locator: Sections 1–3: constraints, feasible regions, vertices and linear objectives.. Verification: Definition-level source inspected 2026-11-02. Bounded workshop family and exact candidate comparisons are author-derived; independent review remains open.. Rights: Original paint-mixture scenario and diagrams; no source exercise reproduced.
