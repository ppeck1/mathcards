---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:covariance", "id": "math:concept:covariance", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:covariance", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a02bcb08eb337800198ee7cd40f19f46a261090b0c1a4536a98abc9a40a43a53"}, "purpose": "Do longer boards tend to take longer to finish, and how do their paired deviations combine?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a02bcb08eb337800198ee7cd40f19f46a261090b0c1a4536a98abc9a40a43a53", "status": "draft", "title": "Sample covariance and signed products", "topics": ["mathematics", "statistics", "algebra", "geometry", "sample covariance and signed products"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# Sample covariance and signed products

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:covariance; revision 0.1.0-draft. Setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total. Expression: $p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.$. Conditions required for a defined value (a case may test their violation): These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship. Scope: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.

## Schema Version

0.1.0

## Id

math:concept:covariance

## Slug

covariance

## Type

concept

## Title

Sample covariance and signed products

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

- sample covariance and signed products

## Branches

- statistics
- algebra
- geometry

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Do longer boards tend to take longer to finish, and how do their paired deviations combine?

## Meaning

Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.

## Prerequisites

- required:
  - math:concept:variance
- helpful:
  - math:concept:correlation
  - math:concept:inner-product
- depth:
  []

## Definition

- setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
- formal latex: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
- signature:
  - c: Trend of finishing time per metre of centered board length
  - w: Scale of the fixed finishing-time residual pattern, in minutes
  - xᵢ: The five observed board lengths, in metres
  - yᵢ: The five constructed finishing times, in minutes
  - x̄: Sample mean board length, 3 metres
  - ȳ: Sample mean finishing time, 10 minutes
  - pᵢ: Signed product of the paired length and time deviations, in metre-minutes
  - P: Sum of the five signed products, in metre-minutes
  - n: Number of paired board observations, fixed at 5
  - s xy: Sample covariance of length and finishing time, in metre-minutes
- conditions:
  - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- domain notes: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- proof status: Definition-level primary references and original bounded derivation; independent mathematical review pending.
- source refs:
  - source:design-extensions:covariance

## Grammar

- pronunciation: Sample covariance and signed products
- expression latex: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
- formation rule: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
- precedence: Center and multiply before combining paired products; calculate degrees of freedom or standard error before the declared uncertainty result.
- symbols:
  - Item:
    - token: c
    - role: Trend of finishing time per metre of centered board length
    - type: Declared statistical quantity
  - Item:
    - token: w
    - role: Scale of the fixed finishing-time residual pattern, in minutes
    - type: Declared statistical quantity
  - Item:
    - token: xᵢ
    - role: The five observed board lengths, in metres
    - type: Declared statistical quantity
  - Item:
    - token: yᵢ
    - role: The five constructed finishing times, in minutes
    - type: Declared statistical quantity
  - Item:
    - token: x̄
    - role: Sample mean board length, 3 metres
    - type: Declared statistical quantity
  - Item:
    - token: ȳ
    - role: Sample mean finishing time, 10 minutes
    - type: Declared statistical quantity
  - Item:
    - token: pᵢ
    - role: Signed product of the paired length and time deviations, in metre-minutes
    - type: Declared statistical quantity
  - Item:
    - token: P
    - role: Sum of the five signed products, in metre-minutes
    - type: Declared statistical quantity
  - Item:
    - token: n
    - role: Number of paired board observations, fixed at 5
    - type: Declared statistical quantity
  - Item:
    - token: s_xy
    - role: Sample covariance of length and finishing time, in metre-minutes
    - type: Declared statistical quantity
- ast:
  - id: ast:covariance:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:trend
      - kind: variable
      - type: Declared numerical input or whole reading count
      - symbol: c
      - scope ref: scope:covariance
    - Item:
      - id: n:scatter
      - kind: variable
      - type: Declared numerical input or whole reading count
      - symbol: w
      - scope ref: scope:covariance
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded statistic or uncertainty rule
      - ref: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:trend
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-0
      - argument: n:scatter
  - scopes:
    - Item:
      - id: scope:covariance
      - kind: modelExpression
      - free variables:
        - c
        - w
      - external parameters:
        - Five constructed pairs
      - domain condition: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- parse errors:
  - Item:
    - input: Use an incompatible observation or sampling model without changing the formula
    - status: model mismatch
    - reason: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- ast coverage: Typed application outline for the declared bounded statistic, not an arbitrary-data or general statistical model engine.
- output symbol bindings:
  - c: trend
  - w: scatter
  - xᵢ: xValues
  - yᵢ: yValues
  - x̄: meanX
  - ȳ: meanY
  - pᵢ: products
  - P: sumProducts
  - n: count
  - s xy: output

## Properties

- Item:
  - claim: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
  - conditions: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - derivation: The centered lengths are −2, −1, 0, 1 and 2, whose squares sum to 10. Their paired products with the residual pattern 1, −2, 2, −2, 1 sum to zero. Thus the total centered cross-product is 10c, and sample covariance is 10c/4=2.5c. Rectangles show signed products; their screen area has a stated coordinate scale rather than being a new measurement.
  - status: author-derived under stated conditions; independent review pending
  - example ref: math:example:covariance:case-1

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
  - target: math:concept:variance
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: Centering connects spread and paired variation.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []
- Item:
  - target: math:concept:correlation
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: Sample covariance keeps product units; correlation additionally normalizes by both sample spreads.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []
- Item:
  - target: math:concept:inner-product
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: The centered product total is the inner product of two centered coordinate lists.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:covariance:case-1
  - title: A rising time pattern with modest scatter
  - role: applied_model
  - question: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - assumptions:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - inputs:
    - trend: 1
    - scatter: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: c = 1; w = 0.5
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
      - reason: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - index: 3
      - expression: 2.5 m·min
      - reason: The centered products total 10 metre-minutes. Dividing by four gives sample covariance 2.5 metre-minutes.
  - result:
    - approximate: 2.5
  - interpretation: The centered products total 10 metre-minutes. Dividing by four gives sample covariance 2.5 metre-minutes.
  - independent check:
    - method: Independent exact-fraction reconstruction of the five paired observations, sample means, centered products and n−1 divisor.
    - expected: 2.5
  - limits: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - preset:
    - trend: 1
    - scatter: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- Item:
  - id: math:example:covariance:case-2
  - title: Reverse the trend
  - role: applied_model
  - question: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - assumptions:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - inputs:
    - trend: -1
    - scatter: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: c = -1; w = 0.5
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
      - reason: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - index: 3
      - expression: -2.5 m·min
      - reason: The residual pattern is unchanged, but reversing the trend changes the signed total to −10 and covariance to −2.5 metre-minutes.
  - result:
    - approximate: -2.5
  - interpretation: The residual pattern is unchanged, but reversing the trend changes the signed total to −10 and covariance to −2.5 metre-minutes.
  - independent check:
    - method: Independent exact-fraction reconstruction of the five paired observations, sample means, centered products and n−1 divisor.
    - expected: -2.5
  - limits: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - preset:
    - trend: -1
    - scatter: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- Item:
  - id: math:example:covariance:case-3
  - title: Scatter without a centered linear trend
  - role: applied_model
  - question: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - assumptions:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - inputs:
    - trend: 0
    - scatter: 2
  - steps:
    - Item:
      - index: 1
      - expression: c = 0; w = 2
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
      - reason: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - index: 3
      - expression: 0.0 m·min
      - reason: The times still vary, but positive and negative centered products cancel exactly. Covariance is zero without all finishing times being equal.
  - result:
    - approximate: 0.0
  - interpretation: The times still vary, but positive and negative centered products cancel exactly. Covariance is zero without all finishing times being equal.
  - independent check:
    - method: Independent exact-fraction reconstruction of the five paired observations, sample means, centered products and n−1 divisor.
    - expected: 0.0
  - limits: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - preset:
    - trend: 0
    - scatter: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- Item:
  - id: math:example:covariance:case-4
  - title: Double the trend coefficient
  - role: applied_model
  - question: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - assumptions:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - inputs:
    - trend: 2
    - scatter: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: c = 2; w = 0.5
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
      - reason: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - index: 3
      - expression: 5.0 m·min
      - reason: The total signed product doubles from 10 to 20 metre-minutes, and sample covariance doubles from 2.5 to 5 metre-minutes.
  - result:
    - approximate: 5.0
  - interpretation: The total signed product doubles from 10 to 20 metre-minutes, and sample covariance doubles from 2.5 to 5 metre-minutes.
  - independent check:
    - method: Independent exact-fraction reconstruction of the five paired observations, sample means, centered products and n−1 divisor.
    - expected: 5.0
  - limits: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - preset:
    - trend: 2
    - scatter: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
- Item:
  - id: math:example:covariance:case-5
  - title: Widen the residual pattern
  - role: applied_model
  - question: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - setting: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - assumptions:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - inputs:
    - trend: 1
    - scatter: 2
  - steps:
    - Item:
      - index: 1
      - expression: c = 1; w = 2
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: p_i=(x_i-\bar{x})(y_i-\bar{y}),\quad P=\sum_{i=1}^{n}p_i,\quad s_{xy}=\frac{P}{n-1},\quad n=5,\quad s_{xy}=2.5c.
      - reason: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
    - Item:
      - index: 3
      - expression: 2.5 m·min
      - reason: The point pattern spreads out, but this chosen residual vector is orthogonal to centered length. Covariance stays 2.5 metre-minutes; a normalized correlation need not stay the same.
  - result:
    - approximate: 2.5
  - interpretation: The point pattern spreads out, but this chosen residual vector is orthogonal to centered length. Covariance stays 2.5 metre-minutes; a normalized correlation need not stay the same.
  - independent check:
    - method: Independent exact-fraction reconstruction of the five paired observations, sample means, centered products and n−1 divisor.
    - expected: 2.5
  - limits: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - preset:
    - trend: 1
    - scatter: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.

## Interactive

- component id: component:covariance
- renderer id: covariance-visual-model
- renderer version: 1
- model id: covariance-visual-model
- model revision: 1
- expression id: ast:covariance:expression
- interaction status: implemented
- description: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
- controls:
  - Item:
    - id: trend
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.05
  - Item:
    - id: scatter
    - type: number
    - default: 0.5
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - trend: -2
      - scatter: 0
    - status: valid
    - output: -5.0
  - Item:
    - input:
      - trend: -2
      - scatter: 0.5
    - status: valid
    - output: -5.0
  - Item:
    - input:
      - trend: -2
      - scatter: 1
    - status: valid
    - output: -5.0
  - Item:
    - input:
      - trend: -2
      - scatter: 2
    - status: valid
    - output: -5.0
  - Item:
    - input:
      - trend: -1
      - scatter: 0
    - status: valid
    - output: -2.5
  - Item:
    - input:
      - trend: -1
      - scatter: 0.5
    - status: valid
    - output: -2.5
  - Item:
    - input:
      - trend: -1
      - scatter: 1
    - status: valid
    - output: -2.5
  - Item:
    - input:
      - trend: -1
      - scatter: 2
    - status: valid
    - output: -2.5
  - Item:
    - input:
      - trend: -0.5
      - scatter: 0
    - status: valid
    - output: -1.25
  - Item:
    - input:
      - trend: -0.5
      - scatter: 0.5
    - status: valid
    - output: -1.25
  - Item:
    - input:
      - trend: -0.5
      - scatter: 1
    - status: valid
    - output: -1.25
  - Item:
    - input:
      - trend: -0.5
      - scatter: 2
    - status: valid
    - output: -1.25
  - Item:
    - input:
      - trend: 0
      - scatter: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0
      - scatter: 0.5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0
      - scatter: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0
      - scatter: 2
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0.5
      - scatter: 0
    - status: valid
    - output: 1.25
  - Item:
    - input:
      - trend: 0.5
      - scatter: 0.5
    - status: valid
    - output: 1.25
  - Item:
    - input:
      - trend: 0.5
      - scatter: 1
    - status: valid
    - output: 1.25
  - Item:
    - input:
      - trend: 0.5
      - scatter: 2
    - status: valid
    - output: 1.25
  - Item:
    - input:
      - trend: 1
      - scatter: 0
    - status: valid
    - output: 2.5
  - Item:
    - input:
      - trend: 1
      - scatter: 0.5
    - status: valid
    - output: 2.5
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: valid
    - output: 2.5
  - Item:
    - input:
      - trend: 1
      - scatter: 2
    - status: valid
    - output: 2.5
  - Item:
    - input:
      - trend: 2
      - scatter: 0
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - trend: 2
      - scatter: 0.5
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - trend: 2
      - scatter: 1
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - trend: 2
      - scatter: 2
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - trend: -3
      - scatter: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 3
      - scatter: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - trend: true
      - scatter: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - trend: null
      - scatter: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 1
      - scatter: -1
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 1
      - scatter: 3
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: invalid_parameters
- compute: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
- numeric tolerance: 5e-11
- invariants:
  - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - Story, calculation, geometry and graph share the same actual declared quantities.
  - Whole reading counts remain discrete; numerical quantiles and probability displays remain approximations.
- limits:
  - These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
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
  - prompt: Do longer boards tend to take longer to finish, and how do their paired deviations combine?
  - answer: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.
- Item:
  - prompt: What does this construction assume?
  - answer: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.

## Representations

- Item:
  - kind: geometry
  - description: Paired lengths and times share fixed axes; rectangles measured from the two sample means show the signs and sizes of their products.
- Item:
  - kind: graph
  - description: Sample covariance versus the trend coefficient on a fixed signed product-unit axis. The orthogonal residual scale changes the scatter without changing this curve.
- Item:
  - kind: substitution
  - description: Center each board length and finishing time on its own sample mean, multiply the paired deviations, and combine their signed products. Divide by one fewer than the number of pairs to obtain sample covariance, in metre-minutes.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A workshop compares five constructed board lengths of 1, 2, 3, 4 and 5 metres with finishing times. The mean length is 3 metres and the mean time is 10 minutes. The time pattern is 10 plus c times the length deviation, with the additional offsets w, −2w, 2w, −2w and w. Move the trend c or the scatter scale w and follow the paired rectangles into their signed total.
  - limitations: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - evidence kind: constructed_example
  - example ref: math:example:covariance:case-1
- Item:
  - context: Reverse the trend
  - mapping: The residual pattern is unchanged, but reversing the trend changes the signed total to −10 and covariance to −2.5 metre-minutes.
  - limitations: These are five constructed pairs, not sampled evidence about a population or a causal effect of length. Sample covariance divides by n−1=4; a complete-population descriptive covariance would use n=5 instead. It retains product units and is not normalized correlation. Use c from −2 to 2 min/m and w from 0 to 2 min; the constructed times stay between 4 and 16 minutes. The fixed residual pattern has zero mean and zero centered cross-product with the lengths, so changing its scale alters the shape while leaving this covariance unchanged. Zero covariance here means the signed products cancel; it does not prove independence or rule out a nonlinear relationship.
  - evidence kind: constructed_example
  - example ref: math:example:covariance:case-2

## Source Refs

- source:design-extensions:covariance

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded covariance, variance or planning lesson through the shared modular host.

## Referenced source registry

- Source ID: source:design-extensions:covariance. [NIST/SEMATECH · Mean Vector and Covariance Matrix](https://www.itl.nist.gov/div898/handbook/pmc/section5/pmc541.htm). Locator: §6.5.4.1: sample covariance as the sum of paired centered products divided by n−1. The five board lengths, times and orthogonal residual construction are original.. Verification: Definition-level primary source inspected 2026-11-03; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original prose, board/time construction, worked derivations and SVG; no source example, data or illustration reproduced.
