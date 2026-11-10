---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:one-way-anova", "id": "math:concept:one-way-anova", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:one-way-anova", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "2778e3b1ebe3f7d4ac65fbc7e1c0def84408ab82f58eb37b41142b6f1c63135b"}, "purpose": "Is separation between three method means large compared with variation inside each method?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "2778e3b1ebe3f7d4ac65fbc7e1c0def84408ab82f58eb37b41142b6f1c63135b", "status": "draft", "title": "One-way ANOVA: between and within variation", "topics": ["mathematics", "statistics", "experimental-design", "one-way anova: between and within variation"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# One-way ANOVA: between and within variation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:one-way-anova; revision 0.1.0-draft. Setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center. Expression: $\mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.$. Conditions required for a defined value (a case may test their violation): This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state. Scope: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state. The Graph view uses logarithmic spacing after adding one, within fixed 0–800 F bounds. Tick labels and selected or pinned readings still show F itself.

## Schema Version

0.1.0

## Id

math:concept:one-way-anova

## Slug

one-way-anova

## Type

concept

## Title

One-way ANOVA: between and within variation

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

- one-way anova: between and within variation

## Branches

- statistics
- experimental-design

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Is separation between three method means large compared with variation inside each method?

## Meaning

Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.

## Prerequisites

- required:
  - math:concept:variance
- helpful:
  - math:concept:linear-regression
  - math:concept:randomized-block-design
  - math:concept:hypothesis-test
- depth:
  []

## Definition

- setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
- formal latex: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
- signature:
  - g: Separation of adjacent constructed group means, in minutes
  - w: Within-group deviation from each mean, in minutes
  - SSB: Between-group sum of squared deviations, in squared minutes
  - SSW: Within-group sum of squared deviations, in squared minutes
  - SST: Total sum of squared deviations, in squared minutes
  - MSB: Between-group mean square, SSB divided by 2
  - MSW: Within-group mean square, SSW divided by 6
  - F: Dimensionless between/within mean-square ratio
  - p: Upper-tail probability from F(2,6) under the stated null model
  - ν B: Between-group degrees of freedom, 3−1=2
  - ν W: Within-group degrees of freedom, 9−3=6
- conditions:
  - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- domain notes: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state. The Graph view uses logarithmic spacing after adding one, within fixed 0–800 F bounds. Tick labels and selected or pinned readings still show F itself.
- proof status: Definition-level primary reference and original bounded construction; independent mathematical review pending.
- source refs:
  - source:sampling-extensions:anova

## Grammar

- pronunciation: One-way ANOVA: between and within variation
- expression latex: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
- formation rule: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
- precedence: Compute sums of squared deviations first, divide by their own degrees of freedom, then divide between by within mean square.
- symbols:
  - Item:
    - token: g
    - role: Separation of adjacent constructed group means, in minutes
    - type: Declared inference quantity
  - Item:
    - token: w
    - role: Within-group deviation from each mean, in minutes
    - type: Declared inference quantity
  - Item:
    - token: SSB
    - role: Between-group sum of squared deviations, in squared minutes
    - type: Declared inference quantity
  - Item:
    - token: SSW
    - role: Within-group sum of squared deviations, in squared minutes
    - type: Declared inference quantity
  - Item:
    - token: SST
    - role: Total sum of squared deviations, in squared minutes
    - type: Declared inference quantity
  - Item:
    - token: MSB
    - role: Between-group mean square, SSB divided by 2
    - type: Declared inference quantity
  - Item:
    - token: MSW
    - role: Within-group mean square, SSW divided by 6
    - type: Declared inference quantity
  - Item:
    - token: F
    - role: Dimensionless between/within mean-square ratio
    - type: Declared inference quantity
  - Item:
    - token: p
    - role: Upper-tail probability from F(2,6) under the stated null model
    - type: Declared inference quantity
  - Item:
    - token: ν_B
    - role: Between-group degrees of freedom, 3−1=2
    - type: Declared inference quantity
  - Item:
    - token: ν_W
    - role: Within-group degrees of freedom, 9−3=6
    - type: Declared inference quantity
- ast:
  - id: ast:one-way-anova:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:separation
      - kind: variable
      - type: Declared numerical input or whole sample count
      - symbol: g
      - scope ref: scope:one-way-anova
    - Item:
      - id: n:spread
      - kind: variable
      - type: Declared numerical input or whole sample count
      - symbol: w
      - scope ref: scope:one-way-anova
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded inference rule
      - ref: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:separation
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-0
      - argument: n:spread
  - scopes:
    - Item:
      - id: scope:one-way-anova
      - kind: modelExpression
      - free variables:
        - g
        - w
      - external parameters:
        - Constructed group centers and fixed group sizes
      - domain condition: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- parse errors:
  - Item:
    - input: Use a different sampling or assignment model without changing the procedure
    - status: model or role mismatch
    - reason: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- ast coverage: Typed application outline of this bounded model; not a general formula parser, random sampler or arbitrary-data analysis engine.
- output symbol bindings:
  - g: separation
  - w: spread
  - SSB: betweenSS
  - SSW: withinSS
  - SST: totalSS
  - MSB: betweenMS
  - MSW: withinMS
  - F: output
  - p: pValue
  - ν B: betweenDF
  - ν W: withinDF

## Properties

- Item:
  - claim: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
  - conditions: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - derivation: The grand mean of all nine constructed times is ten minutes. The group means lie at 10−g,10,10+g with three outcomes each, so between SS is 3(g²+0+g²)=6g². Each group contributes w²+0+w² within, giving 6w². Dividing by2 and6 produces F=3g²/w². The upper tail of an F distribution with2 and6 degrees of freedom is (1+F/3)^(−3). This is an omnibus mean comparison: its alternative allows at least one population mean to differ. The three constructed readings per method show where replication would supply within-group information in an actual experiment.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:one-way-anova:case-1

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
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:linear-regression
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:randomized-block-design
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hypothesis-test
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:one-way-anova:case-1
  - title: Three separated packing-method centers
  - role: applied_model
  - question: Is separation between three method means large compared with variation inside each method?
  - setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - separation: 2
    - spread: 1
  - steps:
    - Item:
      - index: 1
      - expression: g = 2; w = 1
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
      - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - index: 3
      - expression: 12.0
      - reason: Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.
  - result:
    - approximate: 12.0
  - interpretation: Between SS is24 and within SS is6 squared minutes. Their mean squares are12 and1, so F=12 and the model-based upper tail is1/125=0.008.
  - independent check:
    - method: Independent Python reconstructs all nine outcomes, recomputes sample means and sums of squares from their residuals, and forms the F ratio.
    - expected: 12.0
  - limits: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - preset:
    - separation: 2
    - spread: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- Item:
  - id: math:example:one-way-anova:case-2
  - title: Equal group means
  - role: applied_model
  - question: Is separation between three method means large compared with variation inside each method?
  - setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - separation: 0
    - spread: 1
  - steps:
    - Item:
      - index: 1
      - expression: g = 0; w = 1
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
      - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - index: 3
      - expression: 0.0
      - reason: All three means equal ten minutes while within-group variation remains positive. Between SS and F are zero, and the upper-tail probability is one.
  - result:
    - approximate: 0.0
  - interpretation: All three means equal ten minutes while within-group variation remains positive. Between SS and F are zero, and the upper-tail probability is one.
  - independent check:
    - method: Independent Python reconstructs all nine outcomes, recomputes sample means and sums of squares from their residuals, and forms the F ratio.
    - expected: 0.0
  - limits: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - preset:
    - separation: 0
    - spread: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- Item:
  - id: math:example:one-way-anova:case-3
  - title: Double the within-group deviations
  - role: applied_model
  - question: Is separation between three method means large compared with variation inside each method?
  - setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - separation: 2
    - spread: 2
  - steps:
    - Item:
      - index: 1
      - expression: g = 2; w = 2
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
      - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - index: 3
      - expression: 3.0
      - reason: Within SS grows by a factor of four. The same separation now produces F=3 and a larger upper-tail probability of0.125.
  - result:
    - approximate: 3.0
  - interpretation: Within SS grows by a factor of four. The same separation now produces F=3 and a larger upper-tail probability of0.125.
  - independent check:
    - method: Independent Python reconstructs all nine outcomes, recomputes sample means and sums of squares from their residuals, and forms the F ratio.
    - expected: 3.0
  - limits: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - preset:
    - separation: 2
    - spread: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- Item:
  - id: math:example:one-way-anova:case-4
  - title: Bring the group centers together
  - role: applied_model
  - question: Is separation between three method means large compared with variation inside each method?
  - setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - separation: 1
    - spread: 1
  - steps:
    - Item:
      - index: 1
      - expression: g = 1; w = 1
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
      - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - index: 3
      - expression: 3.0
      - reason: Halving mean separation quarters between SS and F. A visual gap must be compared with the observed spread inside each group.
  - result:
    - approximate: 3.0
  - interpretation: Halving mean separation quarters between SS and F. A visual gap must be compared with the observed spread inside each group.
  - independent check:
    - method: Independent Python reconstructs all nine outcomes, recomputes sample means and sums of squares from their residuals, and forms the F ratio.
    - expected: 3.0
  - limits: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - preset:
    - separation: 1
    - spread: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
- Item:
  - id: math:example:one-way-anova:case-5
  - title: Small within-group spread
  - role: applied_model
  - question: Is separation between three method means large compared with variation inside each method?
  - setting: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - assumptions:
    - Use the declared normal or sharp-null assignment model in the formal setting.
  - inputs:
    - separation: 0.5
    - spread: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: g = 0.5; w = 0.25
      - reason: Keep the actual supplied summaries or constructed outcomes fixed as declared.
    - Item:
      - index: 2
      - expression: \mathrm{SSB}=6g^2,\quad \mathrm{SSW}=6w^2,\quad \mathrm{MSB}=\frac{\mathrm{SSB}}{2},\quad \mathrm{MSW}=\frac{\mathrm{SSW}}{6},\quad F=\frac{\mathrm{MSB}}{\mathrm{MSW}},\quad p=(1+F/3)^{-3}.
      - reason: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
    - Item:
      - index: 3
      - expression: 12.0
      - reason: Both distances are small in minutes, but their ratio still yields F=12. A large standardized ratio alone does not describe the practical size of a time difference.
  - result:
    - approximate: 12.0
  - interpretation: Both distances are small in minutes, but their ratio still yields F=12. A large standardized ratio alone does not describe the practical size of a time difference.
  - independent check:
    - method: Independent Python reconstructs all nine outcomes, recomputes sample means and sums of squares from their residuals, and forms the F ratio.
    - expected: 12.0
  - limits: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - preset:
    - separation: 0.5
    - spread: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.

## Interactive

- component id: component:one-way-anova
- renderer id: one-way-anova-visual-model
- renderer version: 1
- model id: one-way-anova-visual-model
- model revision: 1
- expression id: ast:one-way-anova:expression
- interaction status: implemented
- description: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
- controls:
  - Item:
    - id: separation
    - type: number
    - default: 2
    - min: 0
    - max: 4
    - step: 0.05
  - Item:
    - id: spread
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - separation: 0
      - spread: 0.25
    - status: valid
    - output: 0
  - Item:
    - input:
      - separation: 0
      - spread: 0.5
    - status: valid
    - output: 0
  - Item:
    - input:
      - separation: 0
      - spread: 1
    - status: valid
    - output: 0
  - Item:
    - input:
      - separation: 0
      - spread: 2
    - status: valid
    - output: 0
  - Item:
    - input:
      - separation: 0.25
      - spread: 0.25
    - status: valid
    - output: 3
  - Item:
    - input:
      - separation: 0.25
      - spread: 0.5
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - separation: 0.25
      - spread: 1
    - status: valid
    - output: 0.1875
  - Item:
    - input:
      - separation: 0.25
      - spread: 2
    - status: valid
    - output: 0.046875
  - Item:
    - input:
      - separation: 0.5
      - spread: 0.25
    - status: valid
    - output: 12
  - Item:
    - input:
      - separation: 0.5
      - spread: 0.5
    - status: valid
    - output: 3
  - Item:
    - input:
      - separation: 0.5
      - spread: 1
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - separation: 0.5
      - spread: 2
    - status: valid
    - output: 0.1875
  - Item:
    - input:
      - separation: 1
      - spread: 0.25
    - status: valid
    - output: 48
  - Item:
    - input:
      - separation: 1
      - spread: 0.5
    - status: valid
    - output: 12
  - Item:
    - input:
      - separation: 1
      - spread: 1
    - status: valid
    - output: 3
  - Item:
    - input:
      - separation: 1
      - spread: 2
    - status: valid
    - output: 0.75
  - Item:
    - input:
      - separation: 2
      - spread: 0.25
    - status: valid
    - output: 192
  - Item:
    - input:
      - separation: 2
      - spread: 0.5
    - status: valid
    - output: 48
  - Item:
    - input:
      - separation: 2
      - spread: 1
    - status: valid
    - output: 12
  - Item:
    - input:
      - separation: 2
      - spread: 2
    - status: valid
    - output: 3
  - Item:
    - input:
      - separation: 4
      - spread: 0.25
    - status: valid
    - output: 768
  - Item:
    - input:
      - separation: 4
      - spread: 0.5
    - status: valid
    - output: 192
  - Item:
    - input:
      - separation: 4
      - spread: 1
    - status: valid
    - output: 48
  - Item:
    - input:
      - separation: 4
      - spread: 2
    - status: valid
    - output: 12
  - Item:
    - input:
      - separation: 5e-324
      - spread: 1
    - status: numeric_precision
  - Item:
    - input:
      - separation: -1
      - spread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - separation: 5
      - spread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - separation: true
      - spread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - separation: 2
      - spread: 0
    - status: invalid_parameters
  - Item:
    - input:
      - separation: 2
      - spread: 3
    - status: invalid_parameters
  - Item:
    - input:
      - separation: 2
      - spread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - separation: 2
      - spread: null
    - status: invalid_parameters
- compute: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
- numeric tolerance: 3e-12
- invariants:
  - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - Story, calculation, geometry and graph use the same supplied parameters.
  - Whole counts and fixed allocation labels remain discrete.
- limits:
  - This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
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
  - prompt: Is separation between three method means large compared with variation inside each method?
  - answer: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.
- Item:
  - prompt: What does this construction assume?
  - answer: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.

## Representations

- Item:
  - kind: geometry
  - description: Nine packing-time marks retain a shared minute axis, with distinct marks for between-center separation and within-group spread.
- Item:
  - kind: graph
  - description: The current F ratio changes with between-group separation at the entered within-group spread.
- Item:
  - kind: substitution
  - description: Separate the nine packing times into variation between three group means and variation within each group. Divide the two sums of squares by their degrees of freedom, then compare the mean squares with an F ratio.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A workshop compares three packing methods A, B and C using three constructed times per method. Their means are 10−g, 10 and 10+g minutes. Each group has times one w below its mean, at its mean and one w above it. Move g to separate the centers, or w to spread observations around each center.
  - limitations: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - evidence kind: constructed_example
  - example ref: math:example:one-way-anova:case-1
- Item:
  - context: Equal group means
  - mapping: All three means equal ten minutes while within-group variation remains positive. Between SS and F are zero, and the upper-tail probability is one.
  - limitations: This is a bounded balanced construction with three groups of three outcomes, separation g from 0 to 4 minutes and within-group deviation w from 0.25 to 2 minutes. Times are constructed rather than measured or sampled. Between and within sums of squares have 2 and 6 degrees of freedom. The stated F(2,6) upper-tail probability additionally assumes independent normal errors with one common positive variance and the null of equal population means. Those conditions are declared, not tested. A small tail probability does not identify which means differ, show that every pair differs, estimate practical importance or establish causation. Extremely small nonzero separations that disappear in represented times receive a numerical precision state.
  - evidence kind: constructed_example
  - example ref: math:example:one-way-anova:case-2

## Source Refs

- source:sampling-extensions:anova

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded inference lesson through the shared modular host.

## Referenced source registry

- Source ID: source:sampling-extensions:anova. [NIST/SEMATECH · The ANOVA Table and Tests of Hypotheses About Means](https://www.itl.nist.gov/div898/handbook/prc/section4/prc433.htm). Locator: §7.4.3.3: between/within sums of squares, degrees of freedom, mean squares and the F ratio. The three constructed packing groups and the explicit F(2,6) survival expression are derived here rather than copied from the reference example.. Verification: Definition-level primary source inspected 2026-11-03; independent mathematical, pedagogical and exact-edition book review remain pending.. Rights: Original nine packing times, wording and worked derivations; no source exercise, data or illustration reproduced.
