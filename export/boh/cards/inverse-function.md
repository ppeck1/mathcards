---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:inverse-function", "id": "math:concept:inverse-function", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:inverse-function", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "8e38fe5baaec6b4ae19b1b5813ec808f9d3dba0a01a8e66bebdaab22e943a435"}, "purpose": "Which command produced the position shown by the calibrated stage?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "8e38fe5baaec6b4ae19b1b5813ec808f9d3dba0a01a8e66bebdaab22e943a435", "status": "draft", "title": "Inverse functions and calibration", "topics": ["mathematics", "algebra", "functions", "inverse function"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Inverse functions and calibration

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:inverse-function; revision 0.1.0-draft. Setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed. Expression: $f(x)=ax+b,\quad a\ne0,\qquad f^{-1}(y)=\frac{y-b}{a},\qquad f^{-1}(f(x))=x.$. Conditions required for a defined value (a case may test their violation): The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure. Scope: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.

## Schema Version

0.1.0

## Id

math:concept:inverse-function

## Slug

inverse-function

## Type

concept

## Title

Inverse functions and calibration

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-03T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- inverse function

## Branches

- algebra
- functions

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Which command produced the position shown by the calibrated stage?

## Meaning

An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value. Here a nonzero affine gain makes the rule a one-to-one function from the real line onto the real line, so every observed position has one recovered command.

## Prerequisites

- required:
  []
- helpful:
  - math:concept:function
  - math:concept:function-composition
- depth:
  []

## Definition

- setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
- formal latex: f(x)=ax+b,\quad a\ne0,\qquad f^{-1}(y)=\frac{y-b}{a},\qquad f^{-1}(f(x))=x.
- signature:
  - x: Recovered command
  - y: Observed position
  - a: Nonzero calibration gain
  - b: Zero offset
  - f: Forward affine function
  - f⁻¹: Inverse function, not reciprocal
  - f⁻¹(y): Recovered command
  - f(x): Forward position
  - y − b: Offset-corrected position
- conditions:
  - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- domain notes: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- proof status: Definition-level sources and original bounded calculations; independent review pending.
- source refs:
  - source:analysis-extension:inverse

## Grammar

- pronunciation: Inverse functions and calibration
- expression latex: f(x)=ax+b,\quad a\ne0,\qquad f^{-1}(y)=\frac{y-b}{a},\qquad f^{-1}(f(x))=x.
- formation rule: An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.
- precedence: Keep the declared operations and parameter domains. Evaluate the finite sum before considering any infinite limit.
- symbols:
  - Item:
    - token: x
    - role: Recovered command
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: y
    - role: Observed position
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: a
    - role: Nonzero calibration gain
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: b
    - role: Zero offset
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: f
    - role: Forward affine function
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: f⁻¹
    - role: Inverse function, not reciprocal
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: f⁻¹(y)
    - role: Recovered command
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: f(x)
    - role: Forward position
    - type: Declared input, bound index or evaluated quantity
  - Item:
    - token: y − b
    - role: Offset-corrected position
    - type: Declared input, bound index or evaluated quantity
- ast:
  - id: ast:inverse-function:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:reading
      - kind: variable
      - type: Real input in the declared bounded family
      - symbol: y
      - scope ref: scope:inverse-function
    - Item:
      - id: n:gain
      - kind: variable
      - type: Real input in the declared bounded family
      - symbol: a
      - scope ref: scope:inverse-function
    - Item:
      - id: n:offset
      - kind: variable
      - type: Real input in the declared bounded family
      - symbol: b
      - scope ref: scope:inverse-function
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded analysis rule
      - ref: An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.
    - Item:
      - id: n:bound-reading
      - kind: apply
      - type: Declared primary result
      - function: n:rule
      - argument: n:reading
    - Item:
      - id: n:bound-gain
      - kind: apply
      - type: Declared primary result
      - function: n:bound-reading
      - argument: n:gain
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-gain
      - argument: n:offset
  - scopes:
    - Item:
      - id: scope:inverse-function
      - kind: modelExpression
      - free variables:
        - y
        - a
        - b
      - domain condition: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- parse errors:
  - Item:
    - input: An undeclared or unsupported input
    - status: unsupported parameter
    - reason: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- ast coverage: Typed application outline for the bounded family; not a general expression parser.
- output symbol bindings:
  - x: output
  - y: reading
  - a: gain
  - b: offset
  - f⁻¹(y): output
  - f(x): reading
  - y − b: adjusted

## Properties

- Item:
  - claim: Applying the inverse undoes the affine calibration.
  - conditions: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - derivation: Solve y=ax+b by subtracting b and dividing by a. Substitution into the forward rule cancels those two operations in reverse order.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:inverse-function:case-1

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
  - target: math:concept:function
  - type: supports
  - conditions: Use each lesson under its own declared domains and units.
  - reason: Inverse functions and calibration supplies a bounded bridge to function.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: Use each lesson under its own declared domains and units.
  - reason: Inverse functions and calibration supplies a bounded bridge to function composition.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use each lesson under its own declared domains and units.
  - reason: Inverse functions and calibration supplies a bounded bridge to linear model.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:real-logarithm
  - type: supports
  - conditions: Use each lesson under its own declared domains and units.
  - reason: Inverse functions and calibration supplies a bounded bridge to real logarithm.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:inverse-function:case-1
  - title: Recover a command
  - role: applied_model
  - question: Which command produced the position shown by the calibrated stage?
  - setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
  - assumptions:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - inputs:
    - reading: 5
    - gain: 2
    - offset: 1
  - steps:
    - Item:
      - index: 1
      - expression: y − b = 5 − (1) = 4 cm
      - reason: Remove the additive offset first.
    - Item:
      - index: 2
      - expression: x = (4)/(2) = 2.0 cm
      - reason: Divide by the nonzero gain.
    - Item:
      - index: 3
      - expression: ax+b = (2)(2.0)+(1) = 5 cm
      - reason: Check by applying the original calibration.
  - result:
    - approximate: 2.0 cm
  - interpretation: The original command is 2 cm; the forward check gives 2×2+1=5 cm.
  - independent check:
    - method: Substitute the recovered command into the original calibration.
    - expected: 2.0
  - limits: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - preset:
    - reading: 5
    - gain: 2
    - offset: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- Item:
  - id: math:example:inverse-function:case-2
  - title: Reverse the coordinate axis
  - role: applied_model
  - question: Which command produced the position shown by the calibrated stage?
  - setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
  - assumptions:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - inputs:
    - reading: -5
    - gain: -2
    - offset: 1
  - steps:
    - Item:
      - index: 1
      - expression: y − b = -5 − (1) = -6 cm
      - reason: Remove the additive offset first.
    - Item:
      - index: 2
      - expression: x = (-6)/(-2) = 3.0 cm
      - reason: Divide by the nonzero gain.
    - Item:
      - index: 3
      - expression: ax+b = (-2)(3.0)+(1) = -5 cm
      - reason: Check by applying the original calibration.
  - result:
    - approximate: 3.0 cm
  - interpretation: The command is 3 cm even though the reported coordinate is negative. A negative gain reverses direction.
  - independent check:
    - method: Substitute the recovered command into the original calibration.
    - expected: 3.0
  - limits: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - preset:
    - reading: -5
    - gain: -2
    - offset: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- Item:
  - id: math:example:inverse-function:case-3
  - title: Remove a zero offset
  - role: applied_model
  - question: Which command produced the position shown by the calibrated stage?
  - setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
  - assumptions:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - inputs:
    - reading: 0
    - gain: 0.5
    - offset: -2
  - steps:
    - Item:
      - index: 1
      - expression: y − b = 0 − (-2) = 2 cm
      - reason: Remove the additive offset first.
    - Item:
      - index: 2
      - expression: x = (2)/(0.5) = 4.0 cm
      - reason: Divide by the nonzero gain.
    - Item:
      - index: 3
      - expression: ax+b = (0.5)(4.0)+(-2) = 0 cm
      - reason: Check by applying the original calibration.
  - result:
    - approximate: 4.0 cm
  - interpretation: The command is 4 cm. A zero reading does not require a zero command when the calibration has an offset.
  - independent check:
    - method: Substitute the recovered command into the original calibration.
    - expected: 4.0
  - limits: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - preset:
    - reading: 0
    - gain: 0.5
    - offset: -2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- Item:
  - id: math:example:inverse-function:case-4
  - title: Identity calibration
  - role: applied_model
  - question: Which command produced the position shown by the calibrated stage?
  - setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
  - assumptions:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - inputs:
    - reading: -3
    - gain: 1
    - offset: 0
  - steps:
    - Item:
      - index: 1
      - expression: y − b = -3 − (0) = -3 cm
      - reason: Remove the additive offset first.
    - Item:
      - index: 2
      - expression: x = (-3)/(1) = -3.0 cm
      - reason: Divide by the nonzero gain.
    - Item:
      - index: 3
      - expression: ax+b = (1)(-3.0)+(0) = -3 cm
      - reason: Check by applying the original calibration.
  - result:
    - approximate: -3.0 cm
  - interpretation: The rule and its inverse coincide: the command and reading are both −3 cm.
  - independent check:
    - method: Substitute the recovered command into the original calibration.
    - expected: -3.0
  - limits: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - preset:
    - reading: -3
    - gain: 1
    - offset: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- Item:
  - id: math:example:inverse-function:case-5
  - title: Boundary gain
  - role: applied_model
  - question: Which command produced the position shown by the calibrated stage?
  - setting: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
  - assumptions:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - inputs:
    - reading: 8
    - gain: 0.25
    - offset: -3
  - steps:
    - Item:
      - index: 1
      - expression: y − b = 8 − (-3) = 11 cm
      - reason: Remove the additive offset first.
    - Item:
      - index: 2
      - expression: x = (11)/(0.25) = 44.0 cm
      - reason: Divide by the nonzero gain.
    - Item:
      - index: 3
      - expression: ax+b = (0.25)(44.0)+(-3) = 8 cm
      - reason: Check by applying the original calibration.
  - result:
    - approximate: 44.0 cm
  - interpretation: The recovered command is 44 cm. The graph expands its equal-axis window to keep both swapped points visible.
  - independent check:
    - method: Substitute the recovered command into the original calibration.
    - expected: 44.0
  - limits: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - preset:
    - reading: 8
    - gain: 0.25
    - offset: -3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.

## Interactive

- component id: component:inverse-function
- renderer id: inverse-function-visual-model
- renderer version: 1
- model id: inverse-function-visual-model
- model revision: 1
- expression id: ast:inverse-function:expression
- interaction status: implemented
- description: A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.
- controls:
  - Item:
    - id: reading
    - type: number
    - default: 5
    - min: -8
    - max: 8
    - step: 0.05
  - Item:
    - id: gain
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - step: 0.05
  - Item:
    - id: offset
    - type: number
    - default: 1
    - min: -3
    - max: 3
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - reading: 5
      - gain: 2
      - offset: 1
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - reading: -5
      - gain: -2
      - offset: 1
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - reading: 0
      - gain: 0.5
      - offset: -2
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - reading: -3
      - gain: 1
      - offset: 0
    - status: valid
    - output: -3.0
  - Item:
    - input:
      - reading: 8
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: 44.0
  - Item:
    - input:
      - reading: -8
      - gain: -3
      - offset: -3
    - status: valid
    - output: 1.6666666666666667
  - Item:
    - input:
      - reading: -8
      - gain: -3
      - offset: 0
    - status: valid
    - output: 2.6666666666666665
  - Item:
    - input:
      - reading: -8
      - gain: -3
      - offset: 3
    - status: valid
    - output: 3.6666666666666665
  - Item:
    - input:
      - reading: -8
      - gain: -0.5
      - offset: -3
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - reading: -8
      - gain: -0.5
      - offset: 0
    - status: valid
    - output: 16.0
  - Item:
    - input:
      - reading: -8
      - gain: -0.5
      - offset: 3
    - status: valid
    - output: 22.0
  - Item:
    - input:
      - reading: -8
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: -20.0
  - Item:
    - input:
      - reading: -8
      - gain: 0.25
      - offset: 0
    - status: valid
    - output: -32.0
  - Item:
    - input:
      - reading: -8
      - gain: 0.25
      - offset: 3
    - status: valid
    - output: -44.0
  - Item:
    - input:
      - reading: -8
      - gain: 1
      - offset: -3
    - status: valid
    - output: -5.0
  - Item:
    - input:
      - reading: -8
      - gain: 1
      - offset: 0
    - status: valid
    - output: -8.0
  - Item:
    - input:
      - reading: -8
      - gain: 1
      - offset: 3
    - status: valid
    - output: -11.0
  - Item:
    - input:
      - reading: -8
      - gain: 3
      - offset: -3
    - status: valid
    - output: -1.6666666666666667
  - Item:
    - input:
      - reading: -8
      - gain: 3
      - offset: 0
    - status: valid
    - output: -2.6666666666666665
  - Item:
    - input:
      - reading: -8
      - gain: 3
      - offset: 3
    - status: valid
    - output: -3.6666666666666665
  - Item:
    - input:
      - reading: -1
      - gain: -3
      - offset: -3
    - status: valid
    - output: -0.6666666666666666
  - Item:
    - input:
      - reading: -1
      - gain: -3
      - offset: 0
    - status: valid
    - output: 0.3333333333333333
  - Item:
    - input:
      - reading: -1
      - gain: -3
      - offset: 3
    - status: valid
    - output: 1.3333333333333333
  - Item:
    - input:
      - reading: -1
      - gain: -0.5
      - offset: -3
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - reading: -1
      - gain: -0.5
      - offset: 0
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - reading: -1
      - gain: -0.5
      - offset: 3
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - reading: -1
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - reading: -1
      - gain: 0.25
      - offset: 0
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - reading: -1
      - gain: 0.25
      - offset: 3
    - status: valid
    - output: -16.0
  - Item:
    - input:
      - reading: -1
      - gain: 1
      - offset: -3
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - reading: -1
      - gain: 1
      - offset: 0
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - reading: -1
      - gain: 1
      - offset: 3
    - status: valid
    - output: -4.0
  - Item:
    - input:
      - reading: -1
      - gain: 3
      - offset: -3
    - status: valid
    - output: 0.6666666666666666
  - Item:
    - input:
      - reading: -1
      - gain: 3
      - offset: 0
    - status: valid
    - output: -0.3333333333333333
  - Item:
    - input:
      - reading: -1
      - gain: 3
      - offset: 3
    - status: valid
    - output: -1.3333333333333333
  - Item:
    - input:
      - reading: 0
      - gain: -3
      - offset: -3
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - reading: 0
      - gain: -3
      - offset: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - reading: 0
      - gain: -3
      - offset: 3
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - reading: 0
      - gain: -0.5
      - offset: -3
    - status: valid
    - output: -6.0
  - Item:
    - input:
      - reading: 0
      - gain: -0.5
      - offset: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - reading: 0
      - gain: -0.5
      - offset: 3
    - status: valid
    - output: 6.0
  - Item:
    - input:
      - reading: 0
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: 12.0
  - Item:
    - input:
      - reading: 0
      - gain: 0.25
      - offset: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - reading: 0
      - gain: 0.25
      - offset: 3
    - status: valid
    - output: -12.0
  - Item:
    - input:
      - reading: 0
      - gain: 1
      - offset: -3
    - status: valid
    - output: 3.0
  - Item:
    - input:
      - reading: 0
      - gain: 1
      - offset: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - reading: 0
      - gain: 1
      - offset: 3
    - status: valid
    - output: -3.0
  - Item:
    - input:
      - reading: 0
      - gain: 3
      - offset: -3
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - reading: 0
      - gain: 3
      - offset: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - reading: 0
      - gain: 3
      - offset: 3
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - reading: 1
      - gain: -3
      - offset: -3
    - status: valid
    - output: -1.3333333333333333
  - Item:
    - input:
      - reading: 1
      - gain: -3
      - offset: 0
    - status: valid
    - output: -0.3333333333333333
  - Item:
    - input:
      - reading: 1
      - gain: -3
      - offset: 3
    - status: valid
    - output: 0.6666666666666666
  - Item:
    - input:
      - reading: 1
      - gain: -0.5
      - offset: -3
    - status: valid
    - output: -8.0
  - Item:
    - input:
      - reading: 1
      - gain: -0.5
      - offset: 0
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - reading: 1
      - gain: -0.5
      - offset: 3
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - reading: 1
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: 16.0
  - Item:
    - input:
      - reading: 1
      - gain: 0.25
      - offset: 0
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - reading: 1
      - gain: 0.25
      - offset: 3
    - status: valid
    - output: -8.0
  - Item:
    - input:
      - reading: 1
      - gain: 1
      - offset: -3
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - reading: 1
      - gain: 1
      - offset: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - reading: 1
      - gain: 1
      - offset: 3
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - reading: 1
      - gain: 3
      - offset: -3
    - status: valid
    - output: 1.3333333333333333
  - Item:
    - input:
      - reading: 1
      - gain: 3
      - offset: 0
    - status: valid
    - output: 0.3333333333333333
  - Item:
    - input:
      - reading: 1
      - gain: 3
      - offset: 3
    - status: valid
    - output: -0.6666666666666666
  - Item:
    - input:
      - reading: 8
      - gain: -3
      - offset: -3
    - status: valid
    - output: -3.6666666666666665
  - Item:
    - input:
      - reading: 8
      - gain: -3
      - offset: 0
    - status: valid
    - output: -2.6666666666666665
  - Item:
    - input:
      - reading: 8
      - gain: -3
      - offset: 3
    - status: valid
    - output: -1.6666666666666667
  - Item:
    - input:
      - reading: 8
      - gain: -0.5
      - offset: -3
    - status: valid
    - output: -22.0
  - Item:
    - input:
      - reading: 8
      - gain: -0.5
      - offset: 0
    - status: valid
    - output: -16.0
  - Item:
    - input:
      - reading: 8
      - gain: -0.5
      - offset: 3
    - status: valid
    - output: -10.0
  - Item:
    - input:
      - reading: 8
      - gain: 0.25
      - offset: -3
    - status: valid
    - output: 44.0
  - Item:
    - input:
      - reading: 8
      - gain: 0.25
      - offset: 0
    - status: valid
    - output: 32.0
  - Item:
    - input:
      - reading: 8
      - gain: 0.25
      - offset: 3
    - status: valid
    - output: 20.0
  - Item:
    - input:
      - reading: 8
      - gain: 1
      - offset: -3
    - status: valid
    - output: 11.0
  - Item:
    - input:
      - reading: 8
      - gain: 1
      - offset: 0
    - status: valid
    - output: 8.0
  - Item:
    - input:
      - reading: 8
      - gain: 1
      - offset: 3
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - reading: 8
      - gain: 3
      - offset: -3
    - status: valid
    - output: 3.6666666666666665
  - Item:
    - input:
      - reading: 8
      - gain: 3
      - offset: 0
    - status: valid
    - output: 2.6666666666666665
  - Item:
    - input:
      - reading: 8
      - gain: 3
      - offset: 3
    - status: valid
    - output: 1.6666666666666667
  - Item:
    - input:
      - reading: 1
      - gain: 0
      - offset: 0
    - status: invalid_parameters
  - Item:
    - input:
      - reading: 1
      - gain: 0.1
      - offset: 0
    - status: invalid_parameters
  - Item:
    - input:
      - reading: 9
      - gain: 1
      - offset: 0
    - status: invalid_parameters
  - Item:
    - input:
      - reading: true
      - gain: 1
      - offset: 0
    - status: invalid_parameters
  - Item:
    - input:
      - reading: 5e-324
      - gain: 3
      - offset: 0
    - status: numeric_precision
- compute: An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.
- numeric tolerance: 1e-10
- invariants:
  - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - Story, calculations and both views read one validated state.
- limits:
  - The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
- fallback: Pause and inspect the same inputs through the story, formula, Geometry, Graph and numeric table.
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
  - prompt: Which command produced the position shown by the calibrated stage?
  - answer: An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.
- Item:
  - prompt: Which domains and limits matter?
  - answer: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.

## Representations

- Item:
  - kind: geometry
  - description: Aligned signed lengths show reversal of a calibration.
- Item:
  - kind: graph
  - description: Equal coordinate scales show a function and its inverse reflected across the identity line.
- Item:
  - kind: substitution
  - description: An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.

## Applications

- Item:
  - context: Recover a command
  - mapping: The original command is 2 cm; the forward check gives 2×2+1=5 cm.
  - limitations: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - evidence kind: constructed_example
  - example ref: math:example:inverse-function:case-1
- Item:
  - context: Reverse the coordinate axis
  - mapping: The command is 3 cm even though the reported coordinate is negative. A negative gain reverses direction.
  - limitations: The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.
  - evidence kind: constructed_example
  - example ref: math:example:inverse-function:case-2

## Source Refs

- source:analysis-extension:inverse

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded family is an introduction, not completion of a broad subject.

## Change Log

- Added a bounded analysis bridge with original story, independent exact-rational reference, matching preview and connected Geometry/Graph.

## Referenced source registry

- Source ID: source:analysis-extension:inverse. [OpenStax · Inverse Functions](https://openstax.org/books/algebra-and-trigonometry-2e/pages/3-7-inverse-functions). Locator: Definition, inverse identities and reflected coordinates.. Verification: Definition-level public source inspected 2026-11-03. Original bounded scenario, diagrams and examples are author-derived; independent mathematical and exact-edition book review remain pending.. Rights: Original calibration/correction scenarios and diagrams. No source exercise or illustration reproduced.
