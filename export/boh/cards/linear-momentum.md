---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:linear-momentum", "id": "math:concept:linear-momentum", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:linear-momentum", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "e197c58753ad01f66e42806ee3b836b950c3a71fd0485db36ac9527185c0ad9c", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f318aede9f68c389f6f1cac7aa3dd590aea1139498f897b6352509f1c2d13251"}, "purpose": "What changes when the same cart velocity belongs to a heavier cart?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f318aede9f68c389f6f1cac7aa3dd590aea1139498f897b6352509f1c2d13251", "status": "draft", "title": "Linear momentum", "topics": ["mathematics", "mechanics", "applied-mathematics", "linear momentum"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Linear momentum

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:linear-momentum; revision 0.1.0-draft. Setting: A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity. Expression: $\vec p=m\vec v,\quad p_x=mv_x,\quad p_y=mv_y,\quad\|\vec p\|=m\sqrt{v_x^2+v_y^2}.$. Conditions required for a defined value (a case may test their violation): A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity. This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction. All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure. Scope: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.

## Schema Version

0.1.0

## Id

math:concept:linear-momentum

## Slug

linear-momentum

## Type

concept

## Title

Linear momentum

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

- linear momentum

## Branches

- mechanics
- applied-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What changes when the same cart velocity belongs to a heavier cart?

## Meaning

Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.

## Prerequisites

- required:
  - math:concept:vector
- helpful:
  - math:concept:ratio-scale
  - math:concept:angular-velocity
- depth:
  []

## Definition

- setting: A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
- formal latex: \vec p=m\vec v,\quad p_x=mv_x,\quad p_y=mv_y,\quad\|\vec p\|=m\sqrt{v_x^2+v_y^2}.
- signature:
  - m: Cart mass m
  - v x: Velocity x component
  - v y: Velocity y component
  - p x: First projected component
  - p y: Second projected component
  - ‖p‖: Primary model result
- conditions:
  - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
  - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- domain notes: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- proof status: Definition-level references and original bounded derivations; independent mathematical review pending.
- source refs:
  - source:spatial-foundations:momentum

## Grammar

- pronunciation: Linear momentum
- expression latex: \vec p=m\vec v,\quad p_x=mv_x,\quad p_y=mv_y,\quad\|\vec p\|=m\sqrt{v_x^2+v_y^2}.
- formation rule: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
- precedence: Keep the ordered operations, declared frame and units fixed; evaluate the component operations before the magnitude.
- symbols:
  - Item:
    - token: m
    - role: Cart mass m
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_x
    - role: Velocity x component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: v_y
    - role: Velocity y component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: p_x
    - role: First projected component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: p_y
    - role: Second projected component
    - type: Declared input or computed geometric quantity
  - Item:
    - token: ‖p‖
    - role: Primary model result
    - type: Declared input or computed geometric quantity
- ast:
  - id: ast:linear-momentum:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:mass
      - kind: variable
      - type: Declared bounded input
      - symbol: m
      - scope ref: scope:linear-momentum:expression
    - Item:
      - id: n:vx
      - kind: variable
      - type: Declared bounded input
      - symbol: v_x
      - scope ref: scope:linear-momentum:expression
    - Item:
      - id: n:vy
      - kind: variable
      - type: Declared bounded input
      - symbol: v_y
      - scope ref: scope:linear-momentum:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded vector/coordinate rule
      - ref: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - id: n:bound-mass
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:mass
    - Item:
      - id: n:bound-vx
      - kind: apply
      - type: Declared primary result
      - function: n:bound-mass
      - argument: n:vx
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-vx
      - argument: n:vy
  - scopes:
    - Item:
      - id: scope:linear-momentum:expression
      - kind: modelExpression
      - free variables:
        - m
        - v_x
        - v_y
      - domain condition: A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
- parse errors:
  - Item:
    - input: Treat the constructed model as a measured prediction
    - status: interpretation error
    - reason: A formula and stipulated inputs are not an empirical validation.
- ast coverage: Typed application outline of this bounded family; not an arbitrary expression evaluator.
- output symbol bindings:
  - m: mass
  - v x: vx
  - v y: vy
  - p x: px
  - p y: py
  - ‖p‖: output

## Properties

- Item:
  - claim: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
  - conditions: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - derivation: The momentum pair is (2,2) kg·m/s.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:linear-momentum:case-1
- Item:
  - claim: Both momentum components double; the velocity does not change.
  - conditions: A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
  - derivation: 5.6568542495 kg·m/s
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:linear-momentum:case-2

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:vector
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: Both velocity and momentum have signed components in a frame.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: For fixed velocity, momentum is directly proportional to mass.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:angular-velocity
  - type: supports
  - conditions: Use each lesson with its own frame, units and domain.
  - reason: A rim-point velocity can supply the instantaneous velocity when its mass and frame are stated.
  - target status: available
  - evidence status: definition-level relationship; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:linear-momentum:case-1
  - title: Read the stated cart momentum
  - role: applied_model
  - question: What changes when the same cart velocity belongs to a heavier cart?
  - setting: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
  - assumptions:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - inputs:
    - mass: 2
    - vx: 1
    - vy: 1
  - steps:
    - Item:
      - index: 1
      - expression: m = 2; v_x = 1; v_y = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: p = m v; |p| = m|v|
      - reason: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - index: 3
      - expression: 2.8284271247 kg·m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.8284271247 kg·m/s
  - interpretation: The momentum pair is (2,2) kg·m/s.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.8284271247461903}
  - limits: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - preset:
    - mass: 2
    - vx: 1
    - vy: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- Item:
  - id: math:example:linear-momentum:case-2
  - title: Double the mass at the same velocity
  - role: applied_model
  - question: What changes when the same cart velocity belongs to a heavier cart?
  - setting: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
  - assumptions:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - inputs:
    - mass: 4
    - vx: 1
    - vy: 1
  - steps:
    - Item:
      - index: 1
      - expression: m = 4; v_x = 1; v_y = 1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: p = m v; |p| = m|v|
      - reason: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - index: 3
      - expression: 5.6568542495 kg·m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 5.6568542495 kg·m/s
  - interpretation: Both momentum components double; the velocity does not change.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 5.656854249492381}
  - limits: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - preset:
    - mass: 4
    - vx: 1
    - vy: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- Item:
  - id: math:example:linear-momentum:case-3
  - title: Reverse the velocity
  - role: applied_model
  - question: What changes when the same cart velocity belongs to a heavier cart?
  - setting: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
  - assumptions:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - inputs:
    - mass: 2
    - vx: -1
    - vy: -1
  - steps:
    - Item:
      - index: 1
      - expression: m = 2; v_x = -1; v_y = -1
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: p = m v; |p| = m|v|
      - reason: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - index: 3
      - expression: 2.8284271247 kg·m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 2.8284271247 kg·m/s
  - interpretation: Momentum reverses direction while retaining the same magnitude.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 2.8284271247461903}
  - limits: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - preset:
    - mass: 2
    - vx: -1
    - vy: -1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- Item:
  - id: math:example:linear-momentum:case-4
  - title: Stop the cart
  - role: applied_model
  - question: What changes when the same cart velocity belongs to a heavier cart?
  - setting: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
  - assumptions:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - inputs:
    - mass: 2
    - vx: 0
    - vy: 0
  - steps:
    - Item:
      - index: 1
      - expression: m = 2; v_x = 0; v_y = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: p = m v; |p| = m|v|
      - reason: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - index: 3
      - expression: 0.0 kg·m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 0.0 kg·m/s
  - interpretation: A stationary positive-mass cart has zero momentum.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - preset:
    - mass: 2
    - vx: 0
    - vy: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- Item:
  - id: math:example:linear-momentum:case-5
  - title: Travel along one negative axis
  - role: applied_model
  - question: What changes when the same cart velocity belongs to a heavier cart?
  - setting: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
  - assumptions:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - inputs:
    - mass: 2
    - vx: -3
    - vy: 0
  - steps:
    - Item:
      - index: 1
      - expression: m = 2; v_x = -3; v_y = 0
      - reason: Set these original constructed inputs in the declared frame.
    - Item:
      - index: 2
      - expression: p = m v; |p| = m|v|
      - reason: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
    - Item:
      - index: 3
      - expression: 6.0 kg·m/s
      - reason: Evaluate the bounded family before rounding its displayed values.
  - result:
    - approximate: 6.0 kg·m/s
  - interpretation: The signed horizontal momentum is −6 kg·m/s and its magnitude is 6 kg·m/s.
  - independent check:
    - method: Separate Python rational determinants, complex rotation or high-precision norm, tools/spatial_foundation_reference.py.
    - expected: {"status": "valid", "output": 6.0}
  - limits: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - preset:
    - mass: 2
    - vx: -3
    - vy: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
    - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.

## Interactive

- component id: component:linear-momentum
- renderer id: linear-momentum-visual-model
- renderer version: 1
- model id: linear-momentum-visual-model
- model revision: 1
- expression id: ast:linear-momentum:expression
- interaction status: implemented
- description: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
- controls:
  - Item:
    - id: mass
    - type: number
    - default: 2
    - min: 0.5
    - max: 5
    - step: 0.05
  - Item:
    - id: vx
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: vy
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - mass: 2
      - vx: 1
      - vy: 1
    - status: valid
    - output: 2.8284271247461903
  - Item:
    - input:
      - mass: 4
      - vx: 1
      - vy: 1
    - status: valid
    - output: 5.656854249492381
  - Item:
    - input:
      - mass: 2
      - vx: -1
      - vy: -1
    - status: valid
    - output: 2.8284271247461903
  - Item:
    - input:
      - mass: 2
      - vx: 0
      - vy: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - mass: 2
      - vx: -3
      - vy: 0
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - mass: 0.5
      - vx: 1
      - vy: 1
    - status: valid
    - output: 0.7071067811865476
  - Item:
    - input:
      - mass: 5
      - vx: 1
      - vy: 1
    - status: valid
    - output: 7.0710678118654755
  - Item:
    - input:
      - mass: 2
      - vx: -3
      - vy: 1
    - status: valid
    - output: 6.324555320336759
  - Item:
    - input:
      - mass: 2
      - vx: 3
      - vy: 1
    - status: valid
    - output: 6.324555320336759
  - Item:
    - input:
      - mass: 2
      - vx: 1
      - vy: -3
    - status: valid
    - output: 6.324555320336759
  - Item:
    - input:
      - mass: 2
      - vx: 1
      - vy: 3
    - status: valid
    - output: 6.324555320336759
  - Item:
    - input:
      - mass: 2
      - vx: 4
      - vy: 1
    - status: invalid_parameters
  - Item:
    - input:
      - mass: 2
      - vx: 1
      - vy: 1
    - status: invalid_parameters
- compute: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
- numeric tolerance: 1e-10
- invariants:
  - A cart of stated positive mass has a measured planar velocity. Resolve its momentum in the same frame; changing mass changes momentum without changing the stated velocity.
  - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - All values use the declared frame and units. Numerical positions and magnitudes are floating-point evaluations; an underflowed nonzero product is reported as a precision failure.
- limits:
  - This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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
  - prompt: What changes when the same cart velocity belongs to a heavier cart?
  - answer: Multiply each velocity component by the positive mass in the same frame. The Euclidean norm of the momentum pair is its nonnegative magnitude.
- Item:
  - prompt: What must stay fixed to interpret this display?
  - answer: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.

## Representations

- Item:
  - kind: geometry
  - description: A warehouse cart has a stated mass and planar velocity. Keep the velocity fixed while changing its mass, then change direction without changing speed. The momentum arrow keeps the velocity direction but responds to both mass and speed. The two arrows use separate scales because their units differ.
- Item:
  - kind: graph
  - description: Hold other inputs fixed and plot actual components and the primary result against Velocity x component.
- Item:
  - kind: substitution
  - description: The three calculation rows expose input, intermediate operation and result from the same evaluated state.

## Applications

- Item:
  - context: Read the stated cart momentum
  - mapping: The momentum pair is (2,2) kg·m/s.
  - limitations: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - evidence kind: constructed_example
  - example ref: math:example:linear-momentum:case-1
- Item:
  - context: Double the mass at the same velocity
  - mapping: Both momentum components double; the velocity does not change.
  - limitations: This is Newtonian momentum at the stated instant, not kinetic energy, stopping distance or a collision forecast. Velocity and momentum use separate declared arrow scales because their units differ. A stationary cart has zero momentum and no distinguished momentum direction.
  - evidence kind: constructed_example
  - example ref: math:example:linear-momentum:case-2

## Source Refs

- source:spatial-foundations:momentum

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- Continuation of 0.34.0 branch: original connected spatial/coordinate/mechanics family, two distinct views and independent references.

## Referenced source registry

- Source ID: source:spatial-foundations:momentum. [OpenStax · Linear Momentum](https://openstax.org/books/university-physics-volume-1/pages/9-1-linear-momentum). Locator: §9.1, Newtonian vector momentum as mass times velocity.. Verification: Definition-level primary page inspected 2026-11-02. Original bounded family and examples; independent review pending. Exact-edition book mapping is not asserted.. Rights: Facts and equations support original explanations, stories and diagrams; no source exercises, images or scans reproduced.
