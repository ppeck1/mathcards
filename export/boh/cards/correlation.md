---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:correlation", "id": "math:concept:correlation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:correlation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "481b9ea70b00ad094a28650ee45f3d6fb733a770319c6a8122a89be2402792a7", "source_revision": "0.1.0-draft", "upstream_content_sha256": "073e684d6d162ef570c159200d95f915ac6fbc1ffce4e0699cbe5927c0a00ebf"}, "purpose": "Separate trend direction from scatter and see why the same trend can have weaker correlation.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "073e684d6d162ef570c159200d95f915ac6fbc1ffce4e0699cbe5927c0a00ebf", "status": "draft", "title": "Correlation and scatter", "topics": ["mathematics", "statistics", "algebra", "correlation", "Pearson r", "linear association", "correlation coefficient"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Correlation and scatter

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:correlation; revision 0.1.0-draft. Setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. Expression: $S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y),\quad r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.\quad S_{xx}=10,\ S_{xy}=10t,\ S_{yy}=10t^2+14s^2.$. Conditions required for a defined value (a case may test their violation): Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed. Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open. Scope: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

## Schema Version

0.1.0

## Id

math:concept:correlation

## Slug

correlation

## Type

concept

## Title

Correlation and scatter

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

- correlation
- Pearson r
- linear association
- correlation coefficient

## Branches

- statistics
- algebra

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Separate trend direction from scatter and see why the same trend can have weaker correlation.

## Meaning

Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.

## Prerequisites

- required:
  - math:concept:variance
  - math:concept:linear-regression
- helpful:
  []
- depth:
  []

## Definition

- setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
- formal latex: S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y),\quad r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.\quad S_{xx}=10,\ S_{xy}=10t,\ S_{yy}=10t^2+14s^2.
- signature:
  - t: Trend coefficient in the constructed response.
  - s: Scale of the fixed orthogonal scatter pattern.
  - r: Pearson sample correlation.
- conditions:
  - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- domain notes: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- proof status: Definition-level sources and original calculations; independent review pending.
- source refs:
  - source:inference:correlation

## Grammar

- pronunciation: Correlation and scatter
- expression latex: S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y),\quad r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.\quad S_{xx}=10,\ S_{xy}=10t,\ S_{yy}=10t^2+14s^2.
- formation rule: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
- precedence: Evaluate declared inputs before the statistic. Retain sampling and domain conditions.
- symbols:
  - Item:
    - token: t
    - role: Trend coefficient in the constructed response.
    - type: Declared mathematical quantity
  - Item:
    - token: s
    - role: Scale of the fixed orthogonal scatter pattern.
    - type: Declared mathematical quantity
  - Item:
    - token: r
    - role: Pearson sample correlation.
    - type: Declared mathematical quantity
- ast:
  - id: ast:correlation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:trend
      - kind: variable
      - type: Declared model input
      - symbol: t
      - scope ref: scope:correlation:expression
    - Item:
      - id: n:scatter
      - kind: variable
      - type: Declared model input
      - symbol: s
      - scope ref: scope:correlation:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried bounded numerical model
      - ref: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. r = Sₓᵧ/√(SₓₓSᵧᵧ)
    - Item:
      - id: n:bound-trend
      - kind: apply
      - type: Partially applied model
      - function: n:rule
      - argument: n:trend
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-trend
      - argument: n:scatter
  - scopes:
    - Item:
      - id: scope:correlation:expression
      - kind: modelExpression
      - free variables:
        - t
        - s
      - domain condition: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
- parse errors:
  - Item:
    - input: The demonstration proves this model is true of collected data.
    - status: interpretation error
    - reason: The data are constructed. Empirical use needs validation of assumptions.
- ast coverage: Typed application outline of a bounded family; not a parser for arbitrary statistical expressions.
- output symbol bindings:
  - t: trend
  - s: scatter
  - r: output

## Properties

- Item:
  - claim: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - conditions: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - derivation: r=10/√(10×24)=√(5/12).
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:correlation:positive-with-scatter

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
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses variance.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-regression
  - type: supports
  - conditions: Each concept retains its declared setting.
  - reason: This lesson uses linear regression.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:correlation:positive-with-scatter
  - title: A positive trend with scatter
  - role: applied_model
  - question: A positive trend with scatter under the stated inputs?
  - setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - assumptions:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - inputs:
    - trend: 1
    - scatter: 1
  - steps:
    - Item:
      - index: 1
      - expression: trend=1; scatter=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: r=10/√(10×24)=√(5/12).
      - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - result:
    - exact: r=10/√(10×24)=√(5/12).
  - interpretation: r=10/√(10×24)=√(5/12).
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.6454972243679028}
  - limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - preset:
    - trend: 1
    - scatter: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- Item:
  - id: math:example:correlation:negative-with-scatter
  - title: Reverse the trend
  - role: applied_model
  - question: Reverse the trend under the stated inputs?
  - setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - assumptions:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - inputs:
    - trend: -1
    - scatter: 1
  - steps:
    - Item:
      - index: 1
      - expression: trend=-1; scatter=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: r=−√(5/12), with the same response variation.
      - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - result:
    - exact: r=−√(5/12), with the same response variation.
  - interpretation: r=−√(5/12), with the same response variation.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": -0.6454972243679028}
  - limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - preset:
    - trend: -1
    - scatter: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- Item:
  - id: math:example:correlation:pure-positive
  - title: Remove scatter
  - role: applied_model
  - question: Remove scatter under the stated inputs?
  - setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - assumptions:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - inputs:
    - trend: 1
    - scatter: 0
  - steps:
    - Item:
      - index: 1
      - expression: trend=1; scatter=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: All points lie on a rising line, giving r=1.
      - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - result:
    - exact: All points lie on a rising line, giving r=1.
  - interpretation: All points lie on a rising line, giving r=1.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 1.0}
  - limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - preset:
    - trend: 1
    - scatter: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- Item:
  - id: math:example:correlation:zero-cross-product
  - title: Zero linear association
  - role: applied_model
  - question: Zero linear association under the stated inputs?
  - setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - assumptions:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - inputs:
    - trend: 0
    - scatter: 1
  - steps:
    - Item:
      - index: 1
      - expression: trend=0; scatter=1
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: Centered scatter is orthogonal to x, so Sₓᵧ=0 and r=0.
      - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - result:
    - exact: Centered scatter is orthogonal to x, so Sₓᵧ=0 and r=0.
  - interpretation: Centered scatter is orthogonal to x, so Sₓᵧ=0 and r=0.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "valid", "output": 0.0}
  - limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - preset:
    - trend: 0
    - scatter: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
- Item:
  - id: math:example:correlation:constant-response
  - title: Meet an undefined case
  - role: applied_model
  - question: Meet an undefined case under the stated inputs?
  - setting: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - assumptions:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - inputs:
    - trend: 0
    - scatter: 0
  - steps:
    - Item:
      - index: 1
      - expression: trend=0; scatter=0
      - reason: Set declared inputs without changing the family.
    - Item:
      - index: 2
      - expression: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
      - reason: Pearson correlation is the centered cross-product of paired observations divided by their centered lengths. It describes linear association on a dimensionless scale from −1 to 1 when both variables vary. It is undefined when either centered length is zero.
  - result:
    - exact: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
  - interpretation: All responses equal five. Sᵧᵧ=0, so the denominator is zero.
  - independent check:
    - method: Separate Python combinatorics, enumeration or algebraic identity; tools/inference_reference.py.
    - expected: {"status": "undefined_correlation"}
  - limits: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - preset:
    - trend: 0
    - scatter: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
    - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

## Interactive

- component id: component:correlation
- renderer id: correlation-visual-model
- renderer version: 1
- model id: correlation-visual-model
- model revision: 1
- expression id: ast:correlation:expression
- interaction status: implemented
- description: Separate trend direction from scatter and see why the same trend can have weaker correlation.
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
    - default: 1
    - min: 0
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: valid
    - output: 0.6454972243679028
  - Item:
    - input:
      - trend: -1
      - scatter: 1
    - status: valid
    - output: -0.6454972243679028
  - Item:
    - input:
      - trend: 1
      - scatter: 0
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - trend: 0
      - scatter: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - trend: 0
      - scatter: 0
    - status: undefined_correlation
  - Item:
    - input:
      - trend: -2
      - scatter: 1
    - status: valid
    - output: -0.8606629658238705
  - Item:
    - input:
      - trend: 2
      - scatter: 1
    - status: valid
    - output: 0.8606629658238705
  - Item:
    - input:
      - trend: 1
      - scatter: 2
    - status: valid
    - output: 0.3892494720807615
  - Item:
    - input:
      - trend: -3
      - scatter: 1
    - status: invalid_parameters
  - Item:
    - input:
      - trend: 1
      - scatter: 1
    - status: invalid_parameters
- compute: Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation. r = Sₓᵧ/√(SₓₓSᵧᵧ)
- numeric tolerance: 1e-10
- invariants:
  - Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - Original constructed teaching examples. Exact-edition book coverage and independent mathematical review remain open.
- limits:
  - Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
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
  - prompt: At trend t=1 and scatter s=1, how large is the correlation?
  - answer: At t=s=1, Sₓᵧ=10 and Sᵧᵧ=24. Thus r=10/√240≈0.6455. Removing scatter gives r=1 for positive trend. Removing both makes r undefined because the response is constant.
- Item:
  - prompt: What is outside this demonstration?
  - answer: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.

## Representations

- Item:
  - kind: geometry
  - description: Separate trend direction from scatter and see why the same trend can have weaker correlation.
- Item:
  - kind: graph
  - description: A response graph plots r against trend t with scatter fixed. The zero-variation case is explicit and breaks the curve.
- Item:
  - kind: substitution
  - description: Follow the same inputs through story, formula and result.

## Applications

- Item:
  - context: Does a visible trend survive the scatter?
  - mapping: Separate trend direction from scatter and see why the same trend can have weaker correlation.
  - limitations: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - evidence kind: constructed_example
  - example ref: math:example:correlation:positive-with-scatter
- Item:
  - context: Reverse the trend
  - mapping: r=−√(5/12), with the same response variation.
  - limitations: Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.
  - evidence kind: constructed_example
  - example ref: math:example:correlation:negative-with-scatter

## Source Refs

- source:inference:correlation

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 branch: Bounded inference model, connected story, Geometry/Graph, five original examples and numeric fixtures.

## Referenced source registry

- Source ID: source:inference:correlation. [NIST Dataplot · Correlation](https://www.itl.nist.gov/div898/software/dataplot/refman2/auxillar/correlat.htm). Locator: Centered sums Sxx, Syy, Sxy and Pearson r. Verification: Definition-level source inspected 2026-11-02. Original bounded examples and implementation are not independently reviewed. No exact-edition eight-book mapping is asserted.. Rights: Original explanations, diagrams and examples. No source figures, exercise banks or extended prose reproduced.
