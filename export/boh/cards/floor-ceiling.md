---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:floor-ceiling", "id": "math:concept:floor-ceiling", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:floor-ceiling", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "d02fa06ad04e263242360cd18bd10de74af4a6d010b4ad48f71fecac26e16ded"}, "purpose": "When does a partly filled container change the whole count required?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "d02fa06ad04e263242360cd18bd10de74af4a6d010b4ad48f71fecac26e16ded", "status": "draft", "title": "Floor and ceiling: whole containers", "topics": ["mathematics", "functions", "discrete-mathematics", "floor function", "ceiling function", "round up", "round down", "container count"], "type": "reference", "updated": "2026-11-09T00:00:00Z", "version": "0.1.0-draft"}
---

# Floor and ceiling: whole containers

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:floor-ceiling; revision 0.1.0-draft. Setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains. Expression: $x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.$. Conditions required for a defined value (a case may test their violation): Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities. Scope: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.

## Schema Version

0.1.0

## Id

math:concept:floor-ceiling

## Slug

floor-ceiling

## Type

concept

## Title

Floor and ceiling: whole containers

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-09T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- floor function
- ceiling function
- round up
- round down
- container count

## Branches

- functions
- discrete-mathematics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

When does a partly filled container change the whole count required?

## Meaning

Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.

## Prerequisites

- required:
  - math:concept:ratio-scale
- helpful:
  - math:concept:rational-number
- depth:
  - math:concept:function

## Definition

- setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
- formal latex: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
- signature:
  - v: Nonnegative liquid volume, in litres
  - c: Positive capacity of each container, in litres
  - x: Dimensionless number of container capacities
  - f: Count of completely full containers, the floor of x
  - N: Count of containers needed, the ceiling of x
  - r: Remaining liquid after filling f containers, in litres
  - u: Unused capacity in the N containers, in litres
- conditions:
  - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- domain notes: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
- proof status: Definition-level sources and originally authored derivations; independent review pending.
- source refs:
  - source:number-insights:floor-ceiling

## Grammar

- pronunciation: Floor and ceiling: whole containers
- expression latex: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
- formation rule: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
- precedence: Divide volume by positive capacity first, then apply floor or ceiling to the whole quotient. Do not round the quotient before deciding the integer count.
- symbols:
  - Item:
    - token: v
    - role: Nonnegative liquid volume, in litres
    - type: Locally declared quantity or constant
  - Item:
    - token: c
    - role: Positive capacity of each container, in litres
    - type: Locally declared quantity or constant
  - Item:
    - token: x
    - role: Dimensionless number of container capacities
    - type: Locally declared quantity or constant
  - Item:
    - token: f
    - role: Count of completely full containers, the floor of x
    - type: Locally declared quantity or constant
  - Item:
    - token: N
    - role: Count of containers needed, the ceiling of x
    - type: Locally declared quantity or constant
  - Item:
    - token: r
    - role: Remaining liquid after filling f containers, in litres
    - type: Locally declared quantity or constant
  - Item:
    - token: u
    - role: Unused capacity in the N containers, in litres
    - type: Locally declared quantity or constant
- ast:
  - id: ast:floor-ceiling:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:amount
      - kind: variable
      - type: Declared numeric input
      - symbol: v
      - scope ref: scope:floor-ceiling
    - Item:
      - id: n:capacity
      - kind: variable
      - type: Declared numeric input
      - symbol: c
      - scope ref: scope:floor-ceiling
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded number/measurement rule
      - ref: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Bounded model value
      - function: n:rule
      - argument: n:amount
    - Item:
      - id: n:output
      - kind: apply
      - type: Bounded model value
      - function: n:partial-0
      - argument: n:capacity
  - scopes:
    - Item:
      - id: scope:floor-ceiling
      - kind: modelExpression
      - free variables:
        - v
        - c
      - external parameters:
        - Declared Euclidean geometry, exact integer choices and mathematical constants as stated
      - domain condition: Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- parse errors:
  - Item:
    - input: Use an unsupported index, domain or unit
    - status: model mismatch
    - reason: Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- ast coverage: Typed application outline; the formal expression and conditions state the full bounded construction.
- output symbol bindings:
  - v: amount
  - c: capacity
  - x: quotient
  - f: full
  - N: output
  - r: remainder
  - u: spare

## Properties

- Item:
  - claim: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
  - conditions: Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - derivation: By definition f≤x<f+1. Multiplying by positive c gives fc≤v<(f+1)c, so f full containers leave r=v−fc in [0,c). If r=0, f containers suffice and N=f. Otherwise f containers cannot hold the whole batch but f+1 can, so N=f+1. Thus N=⌈v/c⌉. At v=0, both floor and ceiling are zero.
  - status: original derivation under stated conditions; independent review pending
  - example ref: math:example:floor-ceiling:case-1

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
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: This lesson builds on the stated prerequisite’s ratio or geometric rule.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:rational-number
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked example provides a contrasting numerical or geometric construction.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:function
  - type: supports
  - conditions: Retain each card’s stated domains, units and interpretation.
  - reason: The linked lesson supplies a further viewpoint without changing this bounded model.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:floor-ceiling:case-1
  - title: A partly filled final container
  - role: applied_model
  - question: When does a partly filled container change the whole count required?
  - setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
  - assumptions:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - inputs:
    - amount: 13.5
    - capacity: 4
  - steps:
    - Item:
      - index: 1
      - expression: v = 13.5; c = 4
      - reason: Choose the liquid volume v and each container capacity c, both in litres.
    - Item:
      - index: 2
      - expression: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
      - reason: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
    - Item:
      - index: 3
      - expression: N = 4 containers
      - reason: Three 4-litre containers are completely full and 1.5 litres remain. A fourth container holds the remainder, leaving 2.5 litres of unused capacity.
  - result:
    - exact: 4
  - interpretation: Three 4-litre containers are completely full and 1.5 litres remain. A fourth container holds the remainder, leaving 2.5 litres of unused capacity.
  - independent check:
    - method: Express the decimal measurements as exact fractions. Find their lower and upper whole-count bounds, then check the remaining liquid and spare capacity.
    - expected: 4
  - limits: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - preset:
    - amount: 13.5
    - capacity: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- Item:
  - id: math:example:floor-ceiling:case-2
  - title: An exact fit
  - role: applied_model
  - question: When does a partly filled container change the whole count required?
  - setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
  - assumptions:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - inputs:
    - amount: 12
    - capacity: 4
  - steps:
    - Item:
      - index: 1
      - expression: v = 12; c = 4
      - reason: Choose the liquid volume v and each container capacity c, both in litres.
    - Item:
      - index: 2
      - expression: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
      - reason: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
    - Item:
      - index: 3
      - expression: N = 3 containers
      - reason: The quotient is exactly three, so floor and ceiling agree. No fourth container is required and both remaining liquid and spare capacity are zero.
  - result:
    - exact: 3
  - interpretation: The quotient is exactly three, so floor and ceiling agree. No fourth container is required and both remaining liquid and spare capacity are zero.
  - independent check:
    - method: Express the decimal measurements as exact fractions. Find their lower and upper whole-count bounds, then check the remaining liquid and spare capacity.
    - expected: 3
  - limits: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - preset:
    - amount: 12
    - capacity: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- Item:
  - id: math:example:floor-ceiling:case-3
  - title: An empty batch
  - role: applied_model
  - question: When does a partly filled container change the whole count required?
  - setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
  - assumptions:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - inputs:
    - amount: 0
    - capacity: 4
  - steps:
    - Item:
      - index: 1
      - expression: v = 0; c = 4
      - reason: Choose the liquid volume v and each container capacity c, both in litres.
    - Item:
      - index: 2
      - expression: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
      - reason: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
    - Item:
      - index: 3
      - expression: N = 0 containers
      - reason: Zero liquid requires zero containers. The outline grid stays fixed so an empty batch is distinct from an absent visualization.
  - result:
    - exact: 0
  - interpretation: Zero liquid requires zero containers. The outline grid stays fixed so an empty batch is distinct from an absent visualization.
  - independent check:
    - method: Express the decimal measurements as exact fractions. Find their lower and upper whole-count bounds, then check the remaining liquid and spare capacity.
    - expected: 0
  - limits: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - preset:
    - amount: 0
    - capacity: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- Item:
  - id: math:example:floor-ceiling:case-4
  - title: Just beyond a capacity boundary
  - role: applied_model
  - question: When does a partly filled container change the whole count required?
  - setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
  - assumptions:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - inputs:
    - amount: 12.25
    - capacity: 4
  - steps:
    - Item:
      - index: 1
      - expression: v = 12.25; c = 4
      - reason: Choose the liquid volume v and each container capacity c, both in litres.
    - Item:
      - index: 2
      - expression: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
      - reason: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
    - Item:
      - index: 3
      - expression: N = 4 containers
      - reason: Three containers are full and one quarter litre remains. Crossing the threshold changes the ceiling to four while the floor stays three.
  - result:
    - exact: 4
  - interpretation: Three containers are full and one quarter litre remains. Crossing the threshold changes the ceiling to four while the floor stays three.
  - independent check:
    - method: Express the decimal measurements as exact fractions. Find their lower and upper whole-count bounds, then check the remaining liquid and spare capacity.
    - expected: 4
  - limits: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - preset:
    - amount: 12.25
    - capacity: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
- Item:
  - id: math:example:floor-ceiling:case-5
  - title: Decimal capacities that fit exactly
  - role: applied_model
  - question: When does a partly filled container change the whole count required?
  - setting: A workshop must store v litres of liquid in identical containers that hold c litres each. Count the completely full containers with floor, then include one more container exactly when liquid remains.
  - assumptions:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - inputs:
    - amount: 3.3
    - capacity: 1.1
  - steps:
    - Item:
      - index: 1
      - expression: v = 3.3; c = 1.1
      - reason: Choose the liquid volume v and each container capacity c, both in litres.
    - Item:
      - index: 2
      - expression: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
      - reason: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
    - Item:
      - index: 3
      - expression: N = 3 containers
      - reason: The quotient 3.3/1.1 equals three exactly. Three containers are full, floor and ceiling both equal three, and no liquid or spare capacity remains.
  - result:
    - exact: 3
  - interpretation: The quotient 3.3/1.1 equals three exactly. Three containers are full, floor and ceiling both equal three, and no liquid or spare capacity remains.
  - independent check:
    - method: Express the decimal measurements as exact fractions. Find their lower and upper whole-count bounds, then check the remaining liquid and spare capacity.
    - expected: 3
  - limits: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - preset:
    - amount: 3.3
    - capacity: 1.1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.

## Interactive

- component id: component:floor-ceiling
- renderer id: floor-ceiling-visual-model
- renderer version: 1
- model id: floor-ceiling-visual-model
- model revision: 1
- expression id: ast:floor-ceiling:expression
- interaction status: implemented
- description: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
- controls:
  - Item:
    - id: amount
    - type: number
    - default: 13.5
    - min: 0
    - max: 30
    - step: 0.25
  - Item:
    - id: capacity
    - type: number
    - default: 4
    - min: 1
    - max: 6
    - step: 0.25
- expected cases:
  - Item:
    - input:
      - amount: 0
      - capacity: 4
    - status: valid
    - output: 0
  - Item:
    - input:
      - amount: 0.25
      - capacity: 4
    - status: valid
    - output: 1
  - Item:
    - input:
      - amount: 3.3
      - capacity: 1.1
    - status: valid
    - output: 3
  - Item:
    - input:
      - amount: 12
      - capacity: 4
    - status: valid
    - output: 3
  - Item:
    - input:
      - amount: 12.25
      - capacity: 4
    - status: valid
    - output: 4
  - Item:
    - input:
      - amount: 11.75
      - capacity: 4
    - status: valid
    - output: 3
  - Item:
    - input:
      - amount: 13.5
      - capacity: 4
    - status: valid
    - output: 4
  - Item:
    - input:
      - amount: 30
      - capacity: 1
    - status: valid
    - output: 30
  - Item:
    - input:
      - amount: 30
      - capacity: 6
    - status: valid
    - output: 5
  - Item:
    - input:
      - amount: 29.75
      - capacity: 6
    - status: valid
    - output: 5
  - Item:
    - input:
      - amount: 1
      - capacity: 1
    - status: valid
    - output: 1
  - Item:
    - input:
      - amount: 1.25
      - capacity: 1
    - status: valid
    - output: 2
  - Item:
    - input:
      - amount: 6
      - capacity: 6
    - status: valid
    - output: 1
  - Item:
    - input:
      - amount: -0.25
      - capacity: 4
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 30.25
      - capacity: 4
    - status: invalid_parameters
  - Item:
    - input:
      - amount: true
      - capacity: 4
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 2
      - capacity: 4
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 13.5
      - capacity: 0.75
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 13.5
      - capacity: 6.25
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 13.5
      - capacity: true
    - status: invalid_parameters
  - Item:
    - input:
      - amount: 13.5
      - capacity: 2
    - status: invalid_parameters
- compute: x=\frac vc,\quad f=\lfloor x\rfloor,\quad N=\lceil x\rceil,\quad r=v-fc,\quad u=Nc-v.
- numeric tolerance: 5e-11
- invariants:
  - Liquid volume is 0 to 30 litres and each container holds 1 to 6 litres. The model treats its entered real numbers as exact ideal measurements, with no tolerances or safety margin. At an exact integer quotient, floor and ceiling agree and no extra container is added. Otherwise floor is the greatest integer below the quotient and ceiling the least integer above it. General negative-number behavior is defined in the index but this storage scenario uses nonnegative quantities.
  - Story, calculation, Geometry and Graph use the same evaluated state.
  - Continuous physical quantities retain continuous shapes; whole indices and output counts retain discrete meanings.
- limits:
  - The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
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
  - prompt: When does a partly filled container change the whole count required?
  - answer: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.
- Item:
  - prompt: What does this picture measure?
  - answer: A fixed grid counts containers; cyan cells are full and at most one gold cell has fill height proportional to the remaining capacity fraction.

## Representations

- Item:
  - kind: geometry
  - description: A fixed grid counts containers; cyan cells are full and at most one gold cell has fill height proportional to the remaining capacity fraction.
- Item:
  - kind: graph
  - description: The ceiling graph has horizontal plateaus with hollow excluded left endpoints and solid included right endpoints. Exact thresholds never connect through invented fractional counts.
- Item:
  - kind: substitution
  - description: Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.

## Applications

- Item:
  - context: A partly filled final container
  - mapping: Three 4-litre containers are completely full and 1.5 litres remain. A fourth container holds the remainder, leaving 2.5 litres of unused capacity.
  - limitations: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - evidence kind: constructed_example
  - example ref: math:example:floor-ceiling:case-1
- Item:
  - context: An exact fit
  - mapping: The quotient is exactly three, so floor and ceiling agree. No fourth container is required and both remaining liquid and spare capacity are zero.
  - limitations: The storage model uses volume 0–30 litres and capacity 1–6 litres. Entered decimal measurements are treated as exact. The whole counts use the unrounded quotient; printed fractional readings are approximate. The model has no measurement tolerance or safety margin. For negative reals the definitions still apply, but a negative storage volume is outside this scenario.
  - evidence kind: constructed_example
  - example ref: math:example:floor-ceiling:case-2

## Source Refs

- source:number-insights:floor-ceiling

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded number/measurement lesson through the existing modular host.

## Referenced source registry

- Source ID: source:number-insights:floor-ceiling. [Wolfram MathWorld · Floor and Ceiling Functions](https://mathworld.wolfram.com/FloorFunction.html). Locator: Greatest-integer definition; companion CeilingFunction.html gives least-integer definition. Storage interpretation and exact-decimal threshold examples are original.. Verification: Definition-level page inspected 2026-11-09. Independent mathematical/pedagogical review and exact-edition book-page verification remain pending.. Rights: Originally authored scenarios, derivations and visual encodings; no source exercise, data or artwork reproduced.
