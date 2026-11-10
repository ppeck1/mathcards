---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:normal-variance-interval", "id": "math:concept:normal-variance-interval", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:normal-variance-interval", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "c711c04cde928d4b0717d6bad25df38c32423d8d18614268e681f3b79be8b5b8"}, "purpose": "How uncertain is a calibration process’s variance when only its sample spread is known?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "c711c04cde928d4b0717d6bad25df38c32423d8d18614268e681f3b79be8b5b8", "status": "draft", "title": "A normal-variance confidence interval", "topics": ["mathematics", "statistics", "probability", "a normal-variance confidence interval"], "type": "reference", "updated": "2026-11-03T00:00:00Z", "version": "0.1.0-draft"}
---

# A normal-variance confidence interval

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:normal-variance-interval; revision 0.1.0-draft. Setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit. Expression: $\nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].$. Conditions required for a defined value (a case may test their violation): Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter. Scope: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.

## Schema Version

0.1.0

## Id

math:concept:normal-variance-interval

## Slug

normal-variance-interval

## Type

concept

## Title

A normal-variance confidence interval

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

- a normal-variance confidence interval

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How uncertain is a calibration process’s variance when only its sample spread is known?

## Meaning

Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.

## Prerequisites

- required:
  - math:concept:student-mean-interval
- helpful:
  - math:concept:confidence-interval
  - math:concept:variance
- depth:
  []

## Definition

- setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
- formal latex: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
- signature:
  - n: Whole number of independent calibration readings
  - s: Observed sample standard deviation, in millimetres
  - ν: Degrees of freedom n−1 for the estimated variance
  - V: Observed sample variance s², in squared millimetres
  - q L: Numerical chi-square 0.025 quantile for ν degrees of freedom
  - q U: Numerical chi-square 0.975 quantile for ν degrees of freedom
  - L: Lower confidence endpoint for variance, in squared millimetres
  - U: Upper confidence endpoint for variance, in squared millimetres
  - I: Computed variance interval with endpoints L and U
  - σ²: Unknown population variance, whose numerical location is not supplied
- conditions:
  - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- domain notes: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- proof status: Definition-level primary references and original bounded derivation; independent mathematical review pending.
- source refs:
  - source:design-extensions:variance-interval

## Grammar

- pronunciation: A normal-variance confidence interval
- expression latex: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
- formation rule: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
- precedence: Center and multiply before combining paired products; calculate degrees of freedom or standard error before the declared uncertainty result.
- symbols:
  - Item:
    - token: n
    - role: Whole number of independent calibration readings
    - type: Declared statistical quantity
  - Item:
    - token: s
    - role: Observed sample standard deviation, in millimetres
    - type: Declared statistical quantity
  - Item:
    - token: ν
    - role: Degrees of freedom n−1 for the estimated variance
    - type: Declared statistical quantity
  - Item:
    - token: V
    - role: Observed sample variance s², in squared millimetres
    - type: Declared statistical quantity
  - Item:
    - token: q_L
    - role: Numerical chi-square 0.025 quantile for ν degrees of freedom
    - type: Declared statistical quantity
  - Item:
    - token: q_U
    - role: Numerical chi-square 0.975 quantile for ν degrees of freedom
    - type: Declared statistical quantity
  - Item:
    - token: L
    - role: Lower confidence endpoint for variance, in squared millimetres
    - type: Declared statistical quantity
  - Item:
    - token: U
    - role: Upper confidence endpoint for variance, in squared millimetres
    - type: Declared statistical quantity
  - Item:
    - token: I
    - role: Computed variance interval with endpoints L and U
    - type: Declared statistical quantity
  - Item:
    - token: σ²
    - role: Unknown population variance, whose numerical location is not supplied
    - type: Declared statistical quantity
- ast:
  - id: ast:normal-variance-interval:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:sampleSize
      - kind: variable
      - type: Declared numerical input or whole reading count
      - symbol: n
      - scope ref: scope:normal-variance-interval
    - Item:
      - id: n:sampleSpread
      - kind: variable
      - type: Declared numerical input or whole reading count
      - symbol: s
      - scope ref: scope:normal-variance-interval
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared bounded statistic or uncertainty rule
      - ref: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:rule
      - argument: n:sampleSize
    - Item:
      - id: n:output
      - kind: apply
      - type: Partial application or bounded numerical result
      - function: n:partial-0
      - argument: n:sampleSpread
  - scopes:
    - Item:
      - id: scope:normal-variance-interval
      - kind: modelExpression
      - free variables:
        - n
        - s
      - external parameters:
        - Unknown population variance; independent normal sampling model
      - domain condition: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- parse errors:
  - Item:
    - input: Use an incompatible observation or sampling model without changing the formula
    - status: model mismatch
    - reason: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- ast coverage: Typed application outline for the declared bounded statistic, not an arbitrary-data or general statistical model engine.
- output symbol bindings:
  - n: sampleSize
  - s: sampleSpread
  - ν: degreesFreedom
  - V: variance
  - q L: criticalLow
  - q U: criticalHigh
  - L: lowerVariance
  - U:
    - output
    - upperVariance
  - I: interval

## Properties

- Item:
  - claim: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
  - conditions: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - derivation: For independent normal readings, the variance pivot (n−1)s² divided by the population variance has a chi-square distribution with n−1 degrees of freedom. Its central 0.95 region lies between the 0.025 and 0.975 quantiles. Inverting the two positive inequalities reverses the quantile positions: the larger quantile produces the lower variance endpoint. Square roots of the variance endpoints give the corresponding standard-deviation interval.
  - status: author-derived under stated conditions; independent review pending
  - example ref: math:example:normal-variance-interval:case-1

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
  - target: math:concept:student-mean-interval
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: Both procedures use estimated spread and degrees of freedom, while their target parameters differ.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []
- Item:
  - target: math:concept:confidence-interval
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: Repeated-procedure confidence is distinct from probability assigned to a fixed parameter.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []
- Item:
  - target: math:concept:variance
  - type: supports
  - conditions: Retain each card’s own sampling assumptions, measurement units and mathematical scope.
  - reason: Centering connects spread and paired variation.
  - target status: available
  - evidence status: editorial mathematical connection; author derivation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:normal-variance-interval:case-1
  - title: Ten readings with one-millimetre sample spread
  - role: applied_model
  - question: How uncertain is a calibration process’s variance when only its sample spread is known?
  - setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - assumptions:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - inputs:
    - sampleSize: 10
    - sampleSpread: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 10; s = 1
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
      - reason: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - index: 3
      - expression: 3.3328525385191523 mm²
      - reason: The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.
  - result:
    - approximate: 3.3328525385191523
  - interpretation: The observed sample variance is 1 mm². Dividing the nine-degree numerator by the two different chi-square quantiles gives unequal margins around that observed variance.
  - independent check:
    - method: Independent inversion of the positive incomplete-gamma series for each chi-square quantile; the runtime constants come from a separate integer/half-integer recurrence.
    - expected: 3.3328525385191523
  - limits: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - preset:
    - sampleSize: 10
    - sampleSpread: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- Item:
  - id: math:example:normal-variance-interval:case-2
  - title: More readings with the same entered spread
  - role: applied_model
  - question: How uncertain is a calibration process’s variance when only its sample spread is known?
  - setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - assumptions:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - inputs:
    - sampleSize: 31
    - sampleSpread: 1
  - steps:
    - Item:
      - index: 1
      - expression: n = 31; s = 1
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
      - reason: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - index: 3
      - expression: 1.7866956638749711 mm²
      - reason: With the entered sample spread held fixed, the variance interval tightens. This isolates the procedure’s count dependence and does not simulate another observed sample.
  - result:
    - approximate: 1.7866956638749711
  - interpretation: With the entered sample spread held fixed, the variance interval tightens. This isolates the procedure’s count dependence and does not simulate another observed sample.
  - independent check:
    - method: Independent inversion of the positive incomplete-gamma series for each chi-square quantile; the runtime constants come from a separate integer/half-integer recurrence.
    - expected: 1.7866956638749711
  - limits: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - preset:
    - sampleSize: 31
    - sampleSpread: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- Item:
  - id: math:example:normal-variance-interval:case-3
  - title: Double the sample standard deviation
  - role: applied_model
  - question: How uncertain is a calibration process’s variance when only its sample spread is known?
  - setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - assumptions:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - inputs:
    - sampleSize: 10
    - sampleSpread: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 10; s = 2
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
      - reason: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - index: 3
      - expression: 13.33141015407661 mm²
      - reason: Doubling s multiplies s² and both variance endpoints by four; standard-deviation units and variance units must stay distinct.
  - result:
    - approximate: 13.33141015407661
  - interpretation: Doubling s multiplies s² and both variance endpoints by four; standard-deviation units and variance units must stay distinct.
  - independent check:
    - method: Independent inversion of the positive incomplete-gamma series for each chi-square quantile; the runtime constants come from a separate integer/half-integer recurrence.
    - expected: 13.33141015407661
  - limits: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - preset:
    - sampleSize: 10
    - sampleSpread: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- Item:
  - id: math:example:normal-variance-interval:case-4
  - title: Six readings at the readable range boundary
  - role: applied_model
  - question: How uncertain is a calibration process’s variance when only its sample spread is known?
  - setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - assumptions:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - inputs:
    - sampleSize: 6
    - sampleSpread: 2
  - steps:
    - Item:
      - index: 1
      - expression: n = 6; s = 2
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
      - reason: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - index: 3
      - expression: 24.061261507291153 mm²
      - reason: Five degrees of freedom produce a relatively wide interval. Both endpoints remain on the declared fixed variance scale.
  - result:
    - approximate: 24.061261507291153
  - interpretation: Five degrees of freedom produce a relatively wide interval. Both endpoints remain on the declared fixed variance scale.
  - independent check:
    - method: Independent inversion of the positive incomplete-gamma series for each chi-square quantile; the runtime constants come from a separate integer/half-integer recurrence.
    - expected: 24.061261507291153
  - limits: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - preset:
    - sampleSize: 6
    - sampleSpread: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
- Item:
  - id: math:example:normal-variance-interval:case-5
  - title: A quarter-millimetre observed spread
  - role: applied_model
  - question: How uncertain is a calibration process’s variance when only its sample spread is known?
  - setting: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - assumptions:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - inputs:
    - sampleSize: 16
    - sampleSpread: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: n = 16; s = 0.25
      - reason: Identify the actual constructed inputs or predeclared planning assumptions.
    - Item:
      - index: 2
      - expression: \nu=n-1,\quad V=s^2,\quad q_L=\chi^2_{0.025,\nu},\quad q_U=\chi^2_{0.975,\nu},\quad L=\frac{\nu V}{q_U},\quad U=\frac{\nu V}{q_L},\quad I=[L,U].
      - reason: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
    - Item:
      - index: 3
      - expression: 0.14970925755451614 mm²
      - reason: A small sample spread makes the variance numerator small. Both endpoints remain positive, while the unknown variance is still not a supplied numerical point.
  - result:
    - approximate: 0.14970925755451614
  - interpretation: A small sample spread makes the variance numerator small. Both endpoints remain positive, while the unknown variance is still not a supplied numerical point.
  - independent check:
    - method: Independent inversion of the positive incomplete-gamma series for each chi-square quantile; the runtime constants come from a separate integer/half-integer recurrence.
    - expected: 0.14970925755451614
  - limits: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - preset:
    - sampleSize: 16
    - sampleSpread: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.

## Interactive

- component id: component:normal-variance-interval
- renderer id: normal-variance-interval-visual-model
- renderer version: 1
- model id: normal-variance-interval-visual-model
- model revision: 1
- expression id: ast:normal-variance-interval:expression
- interaction status: implemented
- description: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
- controls:
  - Item:
    - id: sampleSize
    - type: number
    - default: 10
    - min: 6
    - max: 31
    - step: 1
  - Item:
    - id: sampleSpread
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - sampleSize: 6
      - sampleSpread: 0.25
    - status: valid
    - output: 0.37595721105142427
  - Item:
    - input:
      - sampleSize: 6
      - sampleSpread: 1
    - status: valid
    - output: 6.015315376822788
  - Item:
    - input:
      - sampleSize: 6
      - sampleSpread: 2
    - status: valid
    - output: 24.061261507291153
  - Item:
    - input:
      - sampleSize: 7
      - sampleSpread: 0.25
    - status: valid
    - output: 0.30306844782731535
  - Item:
    - input:
      - sampleSize: 7
      - sampleSpread: 1
    - status: valid
    - output: 4.8490951652370455
  - Item:
    - input:
      - sampleSize: 7
      - sampleSpread: 2
    - status: valid
    - output: 19.396380660948182
  - Item:
    - input:
      - sampleSize: 8
      - sampleSpread: 0.25
    - status: valid
    - output: 0.25889578021929227
  - Item:
    - input:
      - sampleSize: 8
      - sampleSpread: 1
    - status: valid
    - output: 4.142332483508676
  - Item:
    - input:
      - sampleSize: 8
      - sampleSpread: 2
    - status: valid
    - output: 16.569329934034705
  - Item:
    - input:
      - sampleSize: 9
      - sampleSpread: 0.25
    - status: valid
    - output: 0.2293861297457056
  - Item:
    - input:
      - sampleSize: 9
      - sampleSpread: 1
    - status: valid
    - output: 3.6701780759312896
  - Item:
    - input:
      - sampleSize: 9
      - sampleSpread: 2
    - status: valid
    - output: 14.680712303725159
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: 0.25
    - status: valid
    - output: 0.20830328365744702
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: 1
    - status: valid
    - output: 3.3328525385191523
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: 2
    - status: valid
    - output: 13.33141015407661
  - Item:
    - input:
      - sampleSize: 11
      - sampleSpread: 0.25
    - status: valid
    - output: 0.19248698473980155
  - Item:
    - input:
      - sampleSize: 11
      - sampleSpread: 1
    - status: valid
    - output: 3.079791755836825
  - Item:
    - input:
      - sampleSize: 11
      - sampleSpread: 2
    - status: valid
    - output: 12.3191670233473
  - Item:
    - input:
      - sampleSize: 12
      - sampleSpread: 0.25
    - status: valid
    - output: 0.18017436019190014
  - Item:
    - input:
      - sampleSize: 12
      - sampleSpread: 1
    - status: valid
    - output: 2.8827897630704022
  - Item:
    - input:
      - sampleSize: 12
      - sampleSpread: 2
    - status: valid
    - output: 11.531159052281609
  - Item:
    - input:
      - sampleSize: 13
      - sampleSpread: 0.25
    - status: valid
    - output: 0.17030790620643135
  - Item:
    - input:
      - sampleSize: 13
      - sampleSpread: 1
    - status: valid
    - output: 2.7249264993029017
  - Item:
    - input:
      - sampleSize: 13
      - sampleSpread: 2
    - status: valid
    - output: 10.899705997211607
  - Item:
    - input:
      - sampleSize: 14
      - sampleSpread: 0.25
    - status: valid
    - output: 0.16221610521110477
  - Item:
    - input:
      - sampleSize: 14
      - sampleSpread: 1
    - status: valid
    - output: 2.5954576833776764
  - Item:
    - input:
      - sampleSize: 14
      - sampleSpread: 2
    - status: valid
    - output: 10.381830733510705
  - Item:
    - input:
      - sampleSize: 15
      - sampleSpread: 0.25
    - status: valid
    - output: 0.15545258091834774
  - Item:
    - input:
      - sampleSize: 15
      - sampleSpread: 1
    - status: valid
    - output: 2.487241294693564
  - Item:
    - input:
      - sampleSize: 15
      - sampleSpread: 2
    - status: valid
    - output: 9.948965178774255
  - Item:
    - input:
      - sampleSize: 16
      - sampleSpread: 0.25
    - status: valid
    - output: 0.14970925755451614
  - Item:
    - input:
      - sampleSize: 16
      - sampleSpread: 1
    - status: valid
    - output: 2.3953481208722582
  - Item:
    - input:
      - sampleSize: 16
      - sampleSpread: 2
    - status: valid
    - output: 9.581392483489033
  - Item:
    - input:
      - sampleSize: 17
      - sampleSpread: 0.25
    - status: valid
    - output: 0.1447667328383943
  - Item:
    - input:
      - sampleSize: 17
      - sampleSpread: 1
    - status: valid
    - output: 2.316267725414309
  - Item:
    - input:
      - sampleSize: 17
      - sampleSpread: 2
    - status: valid
    - output: 9.265070901657236
  - Item:
    - input:
      - sampleSize: 18
      - sampleSpread: 0.25
    - status: valid
    - output: 0.14046454395096733
  - Item:
    - input:
      - sampleSize: 18
      - sampleSpread: 1
    - status: valid
    - output: 2.2474327032154773
  - Item:
    - input:
      - sampleSize: 18
      - sampleSpread: 2
    - status: valid
    - output: 8.98973081286191
  - Item:
    - input:
      - sampleSize: 19
      - sampleSpread: 0.25
    - status: valid
    - output: 0.13668262553359659
  - Item:
    - input:
      - sampleSize: 19
      - sampleSpread: 1
    - status: valid
    - output: 2.1869220085375454
  - Item:
    - input:
      - sampleSize: 19
      - sampleSpread: 2
    - status: valid
    - output: 8.747688034150181
  - Item:
    - input:
      - sampleSize: 20
      - sampleSpread: 0.25
    - status: valid
    - output: 0.1333293440147483
  - Item:
    - input:
      - sampleSize: 20
      - sampleSpread: 1
    - status: valid
    - output: 2.133269504235973
  - Item:
    - input:
      - sampleSize: 20
      - sampleSpread: 2
    - status: valid
    - output: 8.533078016943891
  - Item:
    - input:
      - sampleSize: 21
      - sampleSpread: 0.25
    - status: valid
    - output: 0.13033354324417415
  - Item:
    - input:
      - sampleSize: 21
      - sampleSpread: 1
    - status: valid
    - output: 2.0853366919067864
  - Item:
    - input:
      - sampleSize: 21
      - sampleSpread: 2
    - status: valid
    - output: 8.341346767627146
  - Item:
    - input:
      - sampleSize: 22
      - sampleSpread: 0.25
    - status: valid
    - output: 0.12763911766494135
  - Item:
    - input:
      - sampleSize: 22
      - sampleSpread: 1
    - status: valid
    - output: 2.0422258826390616
  - Item:
    - input:
      - sampleSize: 22
      - sampleSpread: 2
    - status: valid
    - output: 8.168903530556246
  - Item:
    - input:
      - sampleSize: 23
      - sampleSpread: 0.25
    - status: valid
    - output: 0.12520122415327517
  - Item:
    - input:
      - sampleSize: 23
      - sampleSpread: 1
    - status: valid
    - output: 2.0032195864524027
  - Item:
    - input:
      - sampleSize: 23
      - sampleSpread: 2
    - status: valid
    - output: 8.012878345809611
  - Item:
    - input:
      - sampleSize: 24
      - sampleSpread: 0.25
    - status: valid
    - output: 0.12298358338458659
  - Item:
    - input:
      - sampleSize: 24
      - sampleSpread: 1
    - status: valid
    - output: 1.9677373341533855
  - Item:
    - input:
      - sampleSize: 24
      - sampleSpread: 2
    - status: valid
    - output: 7.870949336613542
  - Item:
    - input:
      - sampleSize: 25
      - sampleSpread: 0.25
    - status: valid
    - output: 0.1209565220724431
  - Item:
    - input:
      - sampleSize: 25
      - sampleSpread: 1
    - status: valid
    - output: 1.9353043531590897
  - Item:
    - input:
      - sampleSize: 25
      - sampleSpread: 2
    - status: valid
    - output: 7.741217412636359
  - Item:
    - input:
      - sampleSize: 26
      - sampleSpread: 0.25
    - status: valid
    - output: 0.1190955292513881
  - Item:
    - input:
      - sampleSize: 26
      - sampleSpread: 1
    - status: valid
    - output: 1.9055284680222095
  - Item:
    - input:
      - sampleSize: 26
      - sampleSpread: 2
    - status: valid
    - output: 7.622113872088838
  - Item:
    - input:
      - sampleSize: 27
      - sampleSpread: 0.25
    - status: valid
    - output: 0.11738017576052068
  - Item:
    - input:
      - sampleSize: 27
      - sampleSpread: 1
    - status: valid
    - output: 1.8780828121683308
  - Item:
    - input:
      - sampleSize: 27
      - sampleSpread: 2
    - status: valid
    - output: 7.512331248673323
  - Item:
    - input:
      - sampleSize: 28
      - sampleSpread: 0.25
    - status: valid
    - output: 0.11579329460901705
  - Item:
    - input:
      - sampleSize: 28
      - sampleSpread: 1
    - status: valid
    - output: 1.8526927137442728
  - Item:
    - input:
      - sampleSize: 28
      - sampleSpread: 2
    - status: valid
    - output: 7.410770854977091
  - Item:
    - input:
      - sampleSize: 29
      - sampleSpread: 0.25
    - status: valid
    - output: 0.11432035155968481
  - Item:
    - input:
      - sampleSize: 29
      - sampleSpread: 1
    - status: valid
    - output: 1.829125624954957
  - Item:
    - input:
      - sampleSize: 29
      - sampleSpread: 2
    - status: valid
    - output: 7.316502499819828
  - Item:
    - input:
      - sampleSize: 30
      - sampleSpread: 0.25
    - status: valid
    - output: 0.11294895632101726
  - Item:
    - input:
      - sampleSize: 30
      - sampleSpread: 1
    - status: valid
    - output: 1.8071833011362761
  - Item:
    - input:
      - sampleSize: 30
      - sampleSpread: 2
    - status: valid
    - output: 7.2287332045451045
  - Item:
    - input:
      - sampleSize: 31
      - sampleSpread: 0.25
    - status: valid
    - output: 0.1116684789921857
  - Item:
    - input:
      - sampleSize: 31
      - sampleSpread: 1
    - status: valid
    - output: 1.7866956638749711
  - Item:
    - input:
      - sampleSize: 31
      - sampleSpread: 2
    - status: valid
    - output: 7.146782655499885
  - Item:
    - input:
      - sampleSize: 5
      - sampleSpread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 32
      - sampleSpread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 6.5
      - sampleSpread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: true
      - sampleSpread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: 0
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: 1
    - status: invalid_parameters
  - Item:
    - input:
      - sampleSize: 10
      - sampleSpread: null
    - status: invalid_parameters
- compute: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
- numeric tolerance: 5e-11
- invariants:
  - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - Story, calculation, geometry and graph share the same actual declared quantities.
  - Whole reading counts remain discrete; numerical quantiles and probability displays remain approximations.
- limits:
  - Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
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
  - prompt: How uncertain is a calibration process’s variance when only its sample spread is known?
  - answer: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.
- Item:
  - prompt: What does this construction assume?
  - answer: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.

## Representations

- Item:
  - kind: geometry
  - description: Observed sample variance and confidence endpoints use one fixed 0–25 mm² axis. Unknown population variance has no invented marker.
- Item:
  - kind: graph
  - description: Upper variance endpoint versus supported whole reading counts on a fixed 0–25 mm² axis. Numerical dots preserve the distinction between whole sample sizes.
- Item:
  - kind: substitution
  - description: Square the observed sample spread and multiply by its degrees of freedom. Divide this same numerator by the upper and lower chi-square quantiles in reverse order to obtain a confidence interval for the population variance.

## Applications

- Item:
  - context: Originally authored workshop construction
  - mapping: A workshop summarizes repeated cutting errors from a calibration jig by a sample standard deviation s and a reading count n. Square s to show the observed sample variance, then follow the chi-square quantiles into a lower bound L and upper bound U for the unknown process variance. Change the entered spread or the number of readings while keeping that summary-based comparison explicit.
  - limitations: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - evidence kind: constructed_example
  - example ref: math:example:normal-variance-interval:case-1
- Item:
  - context: More readings with the same entered spread
  - mapping: With the entered sample spread held fixed, the variance interval tightens. This isolates the procedure’s count dependence and does not simulate another observed sample.
  - limitations: Assume independent identically normal cutting errors with one unknown mean and unknown positive population variance. The sample standard deviation uses n−1 in its variance denominator. The central fixed 95% procedure has repeated-sampling coverage under this model; it does not assign posterior probability to the fixed variance or predict the next error. The general formula requires n≥2; these controls use whole n from 6 to 31 and s from 0.25 to 2 mm to keep the fixed variance axis readable. Changing n holds the entered spread fixed rather than generating observations. Chi-square quantiles are evaluated numerically. Unknown σ² has no supplied location, and the observed sample variance s² must not be presented as that unknown parameter.
  - evidence kind: constructed_example
  - example ref: math:example:normal-variance-interval:case-2

## Source Refs

- source:design-extensions:variance-interval

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: added this bounded covariance, variance or planning lesson through the shared modular host.

## Referenced source registry

- Source ID: source:design-extensions:variance-interval. [NIST/SEMATECH · Chi-Square Test for the Variance](https://www.itl.nist.gov/div898/handbook/eda/section3/eda358.htm). Locator: §1.3.5.8: variance pivot with n−1 degrees of freedom and interval limits obtained by inversion; standard-deviation limits take square roots. Independent-normal assumptions and the bounded numerical quantile implementation are stated explicitly here.. Verification: Definition-level primary source inspected 2026-11-03; the chi-square CDF reference eda3666.htm was also inspected. Independent mathematical/pedagogical and exact-edition book review remain pending.. Rights: Original calibration scenario and numerical examples; no source exercise, data, code or illustration reproduced.
