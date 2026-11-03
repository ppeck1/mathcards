---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:normal-mean-interval", "id": "math:concept:normal-mean-interval", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:normal-mean-interval", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a55e9106a3fbc6e31d00292039b7f13191d8c67b11c4beac3ffe2a65fd216ba1"}, "purpose": "How precisely does an observed mean locate the unknown mean cutting error?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a55e9106a3fbc6e31d00292039b7f13191d8c67b11c4beac3ffe2a65fd216ba1", "status": "draft", "title": "A normal-mean interval with known spread", "topics": ["mathematics", "statistics", "probability", "a normal-mean interval with known spread"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# A normal-mean interval with known spread

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:normal-mean-interval; revision 0.1.0-draft. Setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes. Expression: $\mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).$. Conditions required for a defined value (a case may test their violation): Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display. Scope: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.

## Schema Version

0.1.0

## Id

math:concept:normal-mean-interval

## Slug

normal-mean-interval

## Type

concept

## Title

A normal-mean interval with known spread

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

- a normal-mean interval with known spread

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How precisely does an observed mean locate the unknown mean cutting error?

## Meaning

Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin of error on each side of the observed mean.

## Prerequisites

- required:
  - math:concept:sampling-distribution
- helpful:
  - math:concept:normal-distribution
  - math:concept:confidence-interval
  - math:concept:variance
- depth:
  []

## Definition

- setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
- formal latex: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
- signature:
  - n: Whole number of independent readings
  - x̄: Observed sample mean error, in millimetres
  - σ: Known positive population standard deviation, in millimetres
  - SE: Standard error of the sample mean, in millimetres
  - z₀.₉₇₅: Standard normal 0.975 quantile; approximately 1.959963984540054
  - h: Margin on each side of the observed mean, in millimetres
  - I: Computed interval of candidate population mean values
  - L: Lower interval endpoint, in millimetres
  - U: Upper interval endpoint, in millimetres
  - μ: Fixed unknown population mean, not a plotted known value
  - Φ⁻¹: Quantile function of the standard normal distribution
- conditions:
  - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- domain notes: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- proof status: Definition-level primary reference and original bounded construction; independent mathematical review pending.
- source refs:
  - source:estimation-extensions:normal-interval

## Grammar

- pronunciation: A normal-mean interval with known spread
- expression latex: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
- formation rule: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin of error on each side of the observed mean.
- precedence: Compute within-day differences before averaging, or the standard error before the confidence margin and endpoints.
- symbols:
  - Item:
    - token: n
    - role: Whole number of independent readings
    - type: Declared design or estimation quantity
  - Item:
    - token: x̄
    - role: Observed sample mean error, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: σ
    - role: Known positive population standard deviation, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: SE
    - role: Standard error of the sample mean, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: z₀.₉₇₅
    - role: Standard normal 0.975 quantile; approximately 1.959963984540054
    - type: Declared design or estimation quantity
  - Item:
    - token: h
    - role: Margin on each side of the observed mean, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: I
    - role: Computed interval of candidate population mean values
    - type: Declared design or estimation quantity
  - Item:
    - token: L
    - role: Lower interval endpoint, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: U
    - role: Upper interval endpoint, in millimetres
    - type: Declared design or estimation quantity
  - Item:
    - token: μ
    - role: Fixed unknown population mean, not a plotted known value
    - type: Declared design or estimation quantity
  - Item:
    - token: Φ⁻¹
    - role: Quantile function of the standard normal distribution
    - type: Declared design or estimation quantity
- ast:
  - id: ast:normal-mean-interval:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:sampleSize
      - kind: variable
      - type: Declared real input or whole sample count
      - symbol: n
      - scope ref: scope:normal-mean-interval
    - Item:
      - id: n:mean
      - kind: variable
      - type: Declared real input or whole sample count
      - symbol: x̄
      - scope ref: scope:normal-mean-interval
    - Item:
      - id: n:sigma
      - kind: variable
      - type: Declared real input or whole sample count
      - symbol: σ
      - scope ref: scope:normal-mean-interval
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded comparison or interval rule
      - ref: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:sampleSize
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-0
      - argument: n:mean
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-1
      - argument: n:sigma
  - scopes:
    - Item:
      - id: scope:normal-mean-interval
      - kind: modelExpression
      - free variables:
        - n
        - x̄
        - σ
      - external parameters:
        - Unknown fixed population mean μ
      - domain condition: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- parse errors:
  - Item:
    - input: Treat an estimated spread as known
    - status: model or role mismatch
    - reason: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- ast coverage: Typed application outline of the declared bounded family. The displayed assignment or unknown population mean is external; there is no arbitrary formula engine or sampler.
- output symbol bindings:
  - n: sampleSize
  - x̄: mean
  - σ: sigma
  - SE: standardError
  - z₀.₉₇₅: criticalValue
  - h: output
  - I:
    - interval
    - lower
    - upper
  - L: lower
  - U: upper
  - Φ⁻¹: criticalValue

## Properties

- Item:
  - claim: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - conditions: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - derivation: Under the stated normal model, standardizing the sample mean yields a standard normal variable; the central 0.95 quantile interval gives the endpoint procedure.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:normal-mean-interval:case-1

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
  - target: math:concept:sampling-distribution
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Known-spread normal-mean estimation connects standard error, normal quantiles and repeated-interval coverage without replacing the finite-sampling or binomial interval lessons.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:normal-distribution
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Known-spread normal-mean estimation connects standard error, normal quantiles and repeated-interval coverage without replacing the finite-sampling or binomial interval lessons.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:confidence-interval
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Known-spread normal-mean estimation connects standard error, normal quantiles and repeated-interval coverage without replacing the finite-sampling or binomial interval lessons.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:variance
  - type: supports
  - conditions: Each lesson retains its own explicit assumptions and quantity meanings.
  - reason: Known-spread normal-mean estimation connects standard error, normal quantiles and repeated-interval coverage without replacing the finite-sampling or binomial interval lessons.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:normal-mean-interval:case-1
  - title: Sixteen readings with known one-millimetre spread
  - role: applied_model
  - question: How precisely does an observed mean locate the unknown mean cutting error?
  - setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - assumptions:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - inputs:
    - sampleSize: 16
    - mean: 0.5
    - sigma: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 16; x̄ = 0.5; σ = 1
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
      - reason: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - index: 3
      - expression: 0.4899909961350134 mm
      - reason: This is the margin on either side of the observed mean, not the full width.
  - result:
    - approximate: 0.4899909961350134
  - interpretation: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - independent check:
    - method: Python statistics.NormalDist independently computes the 0.975 quantile.
    - expected: 0.4899909961350134
  - limits: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - preset:
    - sampleSize: 16
    - mean: 0.5
    - sigma: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- Item:
  - id: math:example:normal-mean-interval:case-2
  - title: Four times as many readings
  - role: applied_model
  - question: How precisely does an observed mean locate the unknown mean cutting error?
  - setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - assumptions:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - inputs:
    - sampleSize: 64
    - mean: 0.5
    - sigma: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 64; x̄ = 0.5; σ = 1
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
      - reason: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - index: 3
      - expression: 0.2449954980675067 mm
      - reason: This is the margin on either side of the observed mean, not the full width.
  - result:
    - approximate: 0.2449954980675067
  - interpretation: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - independent check:
    - method: Python statistics.NormalDist independently computes the 0.975 quantile.
    - expected: 0.2449954980675067
  - limits: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - preset:
    - sampleSize: 64
    - mean: 0.5
    - sigma: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- Item:
  - id: math:example:normal-mean-interval:case-3
  - title: A shifted observed mean
  - role: applied_model
  - question: How precisely does an observed mean locate the unknown mean cutting error?
  - setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - assumptions:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - inputs:
    - sampleSize: 16
    - mean: -1.5
    - sigma: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 16; x̄ = -1.5; σ = 1
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
      - reason: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - index: 3
      - expression: 0.4899909961350134 mm
      - reason: This is the margin on either side of the observed mean, not the full width.
  - result:
    - approximate: 0.4899909961350134
  - interpretation: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - independent check:
    - method: Python statistics.NormalDist independently computes the 0.975 quantile.
    - expected: 0.4899909961350134
  - limits: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - preset:
    - sampleSize: 16
    - mean: -1.5
    - sigma: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- Item:
  - id: math:example:normal-mean-interval:case-4
  - title: A broader known error model
  - role: applied_model
  - question: How precisely does an observed mean locate the unknown mean cutting error?
  - setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - assumptions:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - inputs:
    - sampleSize: 16
    - mean: 0.5
    - sigma: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 16; x̄ = 0.5; σ = 2
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
      - reason: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - index: 3
      - expression: 0.9799819922700268 mm
      - reason: This is the margin on either side of the observed mean, not the full width.
  - result:
    - approximate: 0.9799819922700268
  - interpretation: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - independent check:
    - method: Python statistics.NormalDist independently computes the 0.975 quantile.
    - expected: 0.9799819922700268
  - limits: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - preset:
    - sampleSize: 16
    - mean: 0.5
    - sigma: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
- Item:
  - id: math:example:normal-mean-interval:case-5
  - title: One reading under the exact normal model
  - role: applied_model
  - question: How precisely does an observed mean locate the unknown mean cutting error?
  - setting: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - assumptions:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - inputs:
    - sampleSize: 1
    - mean: 0
    - sigma: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: n = 1; x̄ = 0; σ = 0.25
      - reason: Declare the actual input quantities and stated design/model.
    - Item:
      - index: 2
      - expression: \mathrm{SE}=\frac{\sigma}{\sqrt{n}},\quad h=z_{0.975}\,\mathrm{SE},\quad I=[\bar{x}-h,\bar{x}+h],\quad z_{0.975}=\Phi^{-1}(0.975).
      - reason: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
    - Item:
      - index: 3
      - expression: 0.4899909961350134 mm
      - reason: This is the margin on either side of the observed mean, not the full width.
  - result:
    - approximate: 0.4899909961350134
  - interpretation: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - independent check:
    - method: Python statistics.NormalDist independently computes the 0.975 quantile.
    - expected: 0.4899909961350134
  - limits: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - preset:
    - sampleSize: 1
    - mean: 0
    - sigma: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.

## Interactive

- component id: component:normal-mean-interval
- renderer id: normal-mean-interval-visual-model
- renderer version: 1
- model id: normal-mean-interval-visual-model
- model revision: 1
- expression id: ast:normal-mean-interval:expression
- interaction status: implemented
- description: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
- controls:
  - Item:
    - id: sampleSize
    - type: number
    - default: 16
    - min: 1
    - max: 64
    - step: 1
  - Item:
    - id: mean
    - type: number
    - default: 0.5
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: sigma
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - sampleSize: 1
      - mean: -4
      - sigma: 0.25
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 1
      - mean: 4
      - sigma: 0.25
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 1
      - mean: -4
      - sigma: 1
    - status: valid
    - output: 1.9599639845400536
  - Item:
    - input:
      - sampleSize: 1
      - mean: 4
      - sigma: 1
    - status: valid
    - output: 1.9599639845400536
  - Item:
    - input:
      - sampleSize: 1
      - mean: -4
      - sigma: 2
    - status: valid
    - output: 3.919927969080107
  - Item:
    - input:
      - sampleSize: 1
      - mean: 4
      - sigma: 2
    - status: valid
    - output: 3.919927969080107
  - Item:
    - input:
      - sampleSize: 2
      - mean: -4
      - sigma: 0.25
    - status: valid
    - output: 0.3464759560874194
  - Item:
    - input:
      - sampleSize: 2
      - mean: 4
      - sigma: 0.25
    - status: valid
    - output: 0.3464759560874194
  - Item:
    - input:
      - sampleSize: 2
      - mean: -4
      - sigma: 1
    - status: valid
    - output: 1.3859038243496775
  - Item:
    - input:
      - sampleSize: 2
      - mean: 4
      - sigma: 1
    - status: valid
    - output: 1.3859038243496775
  - Item:
    - input:
      - sampleSize: 2
      - mean: -4
      - sigma: 2
    - status: valid
    - output: 2.771807648699355
  - Item:
    - input:
      - sampleSize: 2
      - mean: 4
      - sigma: 2
    - status: valid
    - output: 2.771807648699355
  - Item:
    - input:
      - sampleSize: 4
      - mean: -4
      - sigma: 0.25
    - status: valid
    - output: 0.2449954980675067
  - Item:
    - input:
      - sampleSize: 4
      - mean: 4
      - sigma: 0.25
    - status: valid
    - output: 0.2449954980675067
  - Item:
    - input:
      - sampleSize: 4
      - mean: -4
      - sigma: 1
    - status: valid
    - output: 0.9799819922700268
  - Item:
    - input:
      - sampleSize: 4
      - mean: 4
      - sigma: 1
    - status: valid
    - output: 0.9799819922700268
  - Item:
    - input:
      - sampleSize: 4
      - mean: -4
      - sigma: 2
    - status: valid
    - output: 1.9599639845400536
  - Item:
    - input:
      - sampleSize: 4
      - mean: 4
      - sigma: 2
    - status: valid
    - output: 1.9599639845400536
  - Item:
    - input:
      - sampleSize: 16
      - mean: -4
      - sigma: 0.25
    - status: valid
    - output: 0.12249774903375335
  - Item:
    - input:
      - sampleSize: 16
      - mean: 4
      - sigma: 0.25
    - status: valid
    - output: 0.12249774903375335
  - Item:
    - input:
      - sampleSize: 16
      - mean: -4
      - sigma: 1
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 16
      - mean: 4
      - sigma: 1
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 16
      - mean: -4
      - sigma: 2
    - status: valid
    - output: 0.9799819922700268
  - Item:
    - input:
      - sampleSize: 16
      - mean: 4
      - sigma: 2
    - status: valid
    - output: 0.9799819922700268
  - Item:
    - input:
      - sampleSize: 64
      - mean: -4
      - sigma: 0.25
    - status: valid
    - output: 0.061248874516876675
  - Item:
    - input:
      - sampleSize: 64
      - mean: 4
      - sigma: 0.25
    - status: valid
    - output: 0.061248874516876675
  - Item:
    - input:
      - sampleSize: 64
      - mean: -4
      - sigma: 1
    - status: valid
    - output: 0.2449954980675067
  - Item:
    - input:
      - sampleSize: 64
      - mean: 4
      - sigma: 1
    - status: valid
    - output: 0.2449954980675067
  - Item:
    - input:
      - sampleSize: 64
      - mean: -4
      - sigma: 2
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 64
      - mean: 4
      - sigma: 2
    - status: valid
    - output: 0.4899909961350134
  - Item:
    - input:
      - sampleSize: 1.5
      - mean: 0.5
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 0
      - mean: 0.5
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 65
      - mean: 0.5
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 16
      - mean: 0.5
      - sigma: 0
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 16
      - mean: 0.5
      - sigma: true
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 16
      - mean: 1
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 16
      - mean: 5
      - sigma: 1
    - status: invalid_parameters
- compute: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
- numeric tolerance: 2e-12
- invariants:
  - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - Story, calculation, geometry and graph share the same current parameters.
  - Discrete sample counts and assignment patterns do not interpolate into invented states.
- limits:
  - Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
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
  - prompt: How precisely does an observed mean locate the unknown mean cutting error?
  - answer: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
- Item:
  - prompt: What does this model leave untested?
  - answer: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.

## Representations

- Item:
  - kind: geometry
  - description: Centered confidence endpoints and a one-standard-error segment on a fixed millimetre axis.
- Item:
  - kind: graph
  - description: Margin versus whole sample size; separate dots do not invent fractional observations.
- Item:
  - kind: substitution
  - description: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A calibration workshop summarizes independent, identically normally distributed cutting errors by an observed mean x̄. Assume the population standard deviation σ is known. Choose a whole number n of readings and watch the interval narrow around that same entered mean. No new readings are invented as n changes.
  - limitations: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - evidence kind: constructed_example
  - example ref: math:example:normal-mean-interval:case-1
- Item:
  - context: Four times as many readings
  - mapping: Divide the known population standard deviation by the square root of the whole-number sample size. Multiply that standard error by the standard normal 0.975 quantile, then place the resulting margin on each side of the observed mean.
  - limitations: Independent, identically normal readings with one common unknown mean μ and known positive population spread σ are assumptions, not conclusions from these controls. Use n from 1 to 64, x̄ from −4 to 4 mm and σ from 0.25 to 2 mm. The ideal repeated-sampling procedure covers fixed μ with probability 0.95. One computed interval has fixed endpoints; this is not a 95% posterior probability for μ or an interval predicting the next reading. An estimated spread requires a different procedure. The quantile is numerical, z₀.₉₇₅≈1.959963984540054; 1.96 is only its rounded display.
  - evidence kind: constructed_example
  - example ref: math:example:normal-mean-interval:case-2

## Source Refs

- source:estimation-extensions:normal-interval

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded design/estimation lesson through the shared modular host.

## Referenced source registry

- Source ID: source:estimation-extensions:normal-interval. [NIST/SEMATECH · What Are Confidence Intervals?](https://www.itl.nist.gov/div898/handbook/prc/section1/prc14.htm). Locator: §7.1.4: repeated-interval confidence and the normal-mean interval with known population standard deviation; distinction from estimated spread.. Verification: Definition-level primary source inspected 2026-11-03; independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original calibration scenario, prose, calculations and SVG; no source exercise, data or illustration reproduced.
