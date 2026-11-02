---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:normal-distribution", "id": "math:concept:normal-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:normal-distribution", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "2e0fe84459dc9b887af9fc5477a3aa47c71c409b32fd7284baf0a2a31cbdfd32", "source_revision": "0.1.0-draft", "upstream_content_sha256": "9f13c908687061e87a54e6aade500cf054efa8d086cb3bc50253acea55b46d10"}, "purpose": "How much of a cutting-error model lies below a chosen tolerance?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "9f13c908687061e87a54e6aade500cf054efa8d086cb3bc50253acea55b46d10", "status": "draft", "title": "Normal distribution: height and area", "topics": ["mathematics", "probability", "statistics", "normal distribution: height and area"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Normal distribution: height and area

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:normal-distribution; revision 0.1.0-draft. Setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x. Expression: $z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).$. Conditions required for a defined value (a case may test their violation): A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred. Scope: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.

## Schema Version

0.1.0

## Id

math:concept:normal-distribution

## Slug

normal-distribution

## Type

concept

## Title

Normal distribution: height and area

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

- normal distribution: height and area

## Branches

- probability
- statistics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How much of a cutting-error model lies below a chosen tolerance?

## Meaning

Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.

## Prerequisites

- required:
  - math:concept:probability-distribution
- helpful:
  - math:concept:variance
  - math:concept:integral-accumulation
  - math:concept:sampling-distribution
- depth:
  []

## Definition

- setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
- formal latex: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
- signature:
  - x: Signed error threshold in mm
  - μ: Mean of the declared normal error model in mm
  - σ: Positive standard deviation of the declared model in mm
  - z: Standardized threshold in standard-deviation units
  - f(x): Probability density height per mm at the threshold
  - F(x): Cumulative probability of an error at or below the threshold
  - Φ(z): Standard normal cumulative probability
- conditions:
  - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- domain notes: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- proof status: Definition-level sources and original bounded calculations; independent mathematical review pending.
- source refs:
  - source:distribution-extensions:normal
  - source:distribution-extensions:quadrature

## Grammar

- pronunciation: Normal distribution: height and area
- expression latex: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
- formation rule: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
- precedence: Evaluate paired differences or standardized products before cumulative probability; retain units and the stated probability model.
- symbols:
  - Item:
    - token: x
    - role: Signed error threshold in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: μ
    - role: Mean of the declared normal error model in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: σ
    - role: Positive standard deviation of the declared model in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: z
    - role: Standardized threshold in standard-deviation units
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: f(x)
    - role: Probability density height per mm at the threshold
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: F(x)
    - role: Cumulative probability of an error at or below the threshold
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: Φ(z)
    - role: Standard normal cumulative probability
    - type: Declared mathematical quantity or bound index
- ast:
  - id: ast:normal-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:threshold
      - kind: variable
      - type: Declared physical input
      - symbol: x
      - scope ref: scope:normal-distribution
    - Item:
      - id: n:mean
      - kind: variable
      - type: Declared physical input
      - symbol: μ
      - scope ref: scope:normal-distribution
    - Item:
      - id: n:sigma
      - kind: variable
      - type: Declared physical input
      - symbol: σ
      - scope ref: scope:normal-distribution
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared probability law
      - ref: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:rule
      - argument: n:threshold
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:partial-0
      - argument: n:mean
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:partial-1
      - argument: n:sigma
  - scopes:
    - Item:
      - id: scope:normal-distribution
      - kind: modelExpression
      - free variables:
        - x
        - μ
        - σ
      - external parameters:
        []
      - domain condition: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- parse errors:
  - Item:
    - input: Treat density height as point probability
    - status: model or role mismatch
    - reason: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- ast coverage: Typed application outline of the declared probability family, with the paired-data selector held external where applicable. This is not an arbitrary expression parser or a theorem checker.
- output symbol bindings:
  - x: threshold
  - μ: mean
  - σ: sigma
  - z: z
  - f(x): density
  - F(x):
    - cumulative
    - output
  - Φ(z):
    - cumulative
    - output

## Properties

- Item:
  - claim: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - conditions: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - derivation: Use the declared probability law and the independent reference on the bounded parameters.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:normal-distribution:case-1

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
  - target: math:concept:probability-distribution
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Normal distribution: height and area connects continuous probability, paired signs or accumulated quantities to probability distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:variance
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Normal distribution: height and area connects continuous probability, paired signs or accumulated quantities to variance.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:integral-accumulation
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Normal distribution: height and area connects continuous probability, paired signs or accumulated quantities to integral accumulation.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:sampling-distribution
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Normal distribution: height and area connects continuous probability, paired signs or accumulated quantities to sampling distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:normal-distribution:case-1
  - title: One standard deviation above the mean
  - role: applied_model
  - question: How much of a cutting-error model lies below a chosen tolerance?
  - setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - assumptions:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - inputs:
    - threshold: 1
    - mean: 0
    - sigma: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = 1; μ = 0; σ = 1
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
      - reason: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - index: 3
      - expression: 0.841344746068543
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.841344746068543
  - interpretation: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - independent check:
    - method: Python math.erfc evaluates the full normal CDF independently of the JavaScript Gaussian quadrature.
    - expected: 0.841344746068543
  - limits: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - preset:
    - threshold: 1
    - mean: 0
    - sigma: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- Item:
  - id: math:example:normal-distribution:case-2
  - title: A centered threshold
  - role: applied_model
  - question: How much of a cutting-error model lies below a chosen tolerance?
  - setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - assumptions:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - inputs:
    - threshold: 1
    - mean: 1
    - sigma: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: x = 1; μ = 1; σ = 0.5
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
      - reason: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - index: 3
      - expression: 0.5
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.5
  - interpretation: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - independent check:
    - method: Python math.erfc evaluates the full normal CDF independently of the JavaScript Gaussian quadrature.
    - expected: 0.5
  - limits: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - preset:
    - threshold: 1
    - mean: 1
    - sigma: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- Item:
  - id: math:example:normal-distribution:case-3
  - title: One standard deviation below the mean
  - role: applied_model
  - question: How much of a cutting-error model lies below a chosen tolerance?
  - setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - assumptions:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - inputs:
    - threshold: -0.5
    - mean: 0.5
    - sigma: 1
  - steps:
    - Item:
      - index: 1
      - expression: x = -0.5; μ = 0.5; σ = 1
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
      - reason: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - index: 3
      - expression: 0.158655253931457
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.158655253931457
  - interpretation: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - independent check:
    - method: Python math.erfc evaluates the full normal CDF independently of the JavaScript Gaussian quadrature.
    - expected: 0.158655253931457
  - limits: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - preset:
    - threshold: -0.5
    - mean: 0.5
    - sigma: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- Item:
  - id: math:example:normal-distribution:case-4
  - title: Same tolerance, wider errors
  - role: applied_model
  - question: How much of a cutting-error model lies below a chosen tolerance?
  - setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - assumptions:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - inputs:
    - threshold: 1
    - mean: 0
    - sigma: 2
  - steps:
    - Item:
      - index: 1
      - expression: x = 1; μ = 0; σ = 2
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
      - reason: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - index: 3
      - expression: 0.691462461274013
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.691462461274013
  - interpretation: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - independent check:
    - method: Python math.erfc evaluates the full normal CDF independently of the JavaScript Gaussian quadrature.
    - expected: 0.691462461274013
  - limits: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - preset:
    - threshold: 1
    - mean: 0
    - sigma: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
- Item:
  - id: math:example:normal-distribution:case-5
  - title: A narrow offset error model
  - role: applied_model
  - question: How much of a cutting-error model lies below a chosen tolerance?
  - setting: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - assumptions:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - inputs:
    - threshold: 0.5
    - mean: 1
    - sigma: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: x = 0.5; μ = 1; σ = 0.25
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: z=\frac{x-\mu}{\sigma},\quad f(x)=\frac{\exp(-(x-\mu)^2/(2\sigma^2))}{\sigma\sqrt{2\pi}},\quad F(x)=\Phi(z).
      - reason: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
    - Item:
      - index: 3
      - expression: 0.0227501319481792
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.0227501319481792
  - interpretation: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - independent check:
    - method: Python math.erfc evaluates the full normal CDF independently of the JavaScript Gaussian quadrature.
    - expected: 0.0227501319481792
  - limits: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - preset:
    - threshold: 0.5
    - mean: 1
    - sigma: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.

## Interactive

- component id: component:normal-distribution
- renderer id: normal-distribution-visual-model
- renderer version: 1
- model id: normal-distribution-visual-model
- model revision: 1
- expression id: ast:normal-distribution:expression
- interaction status: implemented
- description: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
- controls:
  - Item:
    - id: threshold
    - type: number
    - default: 1
    - min: -6
    - max: 6
    - step: 0.05
  - Item:
    - id: mean
    - type: number
    - default: 0
    - min: -2
    - max: 2
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
      - threshold: 1
      - mean: 0
      - sigma: 1
    - status: valid
    - output: 0.8413447460685428
  - Item:
    - input:
      - threshold: 1
      - mean: 1
      - sigma: 0.5
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - threshold: -0.5
      - mean: 0.5
      - sigma: 1
    - status: valid
    - output: 0.15865525393145707
  - Item:
    - input:
      - threshold: 1
      - mean: 0
      - sigma: 2
    - status: valid
    - output: 0.691462461274013
  - Item:
    - input:
      - threshold: 0.5
      - mean: 1
      - sigma: 0.25
    - status: valid
    - output: 0.022750131948179216
  - Item:
    - input:
      - threshold: -6
      - mean: 2
      - sigma: 0.25
    - status: valid
    - output: 5.452080603512892e-225
  - Item:
    - input:
      - threshold: 6
      - mean: -2
      - sigma: 0.25
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - threshold: -4
      - mean: 0
      - sigma: 1
    - status: valid
    - output: 3.1671241833119965e-05
  - Item:
    - input:
      - threshold: 4
      - mean: 0
      - sigma: 1
    - status: valid
    - output: 0.9999683287581669
  - Item:
    - input:
      - threshold: 0
      - mean: -2
      - sigma: 2
    - status: valid
    - output: 0.8413447460685428
  - Item:
    - input:
      - threshold: 0
      - mean: 2
      - sigma: 2
    - status: valid
    - output: 0.15865525393145707
  - Item:
    - input:
      - threshold: -0.0001
      - mean: 0
      - sigma: 0.25
    - status: valid
    - output: 0.4998404230920948
  - Item:
    - input:
      - threshold: 0.0001
      - mean: 0
      - sigma: 0.25
    - status: valid
    - output: 0.5001595769079051
  - Item:
    - input:
      - threshold: -6
      - mean: -2
      - sigma: 2
    - status: valid
    - output: 0.022750131948179216
  - Item:
    - input:
      - threshold: 6
      - mean: 2
      - sigma: 2
    - status: valid
    - output: 0.9772498680518209
  - Item:
    - input:
      - threshold: true
      - mean: 0
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 100
      - mean: 0
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 1
      - mean: 0
      - sigma: 0
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 1
      - mean: 0
      - sigma: 1
    - status: invalid_parameters
  - Item:
    - input:
      - threshold: 5e-324
      - mean: 0
      - sigma: 2
    - status: numeric_precision
  - Item:
    - input:
      - threshold: 5e-324
      - mean: 0
      - sigma: 1
    - status: valid
    - output: 0.5
- compute: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
- numeric tolerance: 2e-12
- invariants:
  - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - The story, calculation and visual use the same current parameters.
  - Geometry density scales and Graph probability scales have distinct meanings.
- limits:
  - A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
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
  - prompt: How much of a cutting-error model lies below a chosen tolerance?
  - answer: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
- Item:
  - prompt: What changes when the threshold or shift moves?
  - answer: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.

## Representations

- Item:
  - kind: geometry
  - description: Model-derived density area or paired physical readings, with explicit quantity marks.
- Item:
  - kind: graph
  - description: A fixed probability scale; discrete sign boundaries are not joined.
- Item:
  - kind: substitution
  - description: Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.

## Applications

- Item:
  - context: Originally authored workshop scenario
  - mapping: A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.
  - limitations: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - evidence kind: constructed_example
  - example ref: math:example:normal-distribution:case-1
- Item:
  - context: A changed model setting
  - mapping: A centered threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.
  - limitations: A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.
  - evidence kind: constructed_example
  - example ref: math:example:normal-distribution:case-2

## Source Refs

- source:distribution-extensions:normal
- source:distribution-extensions:quadrature

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 second continuation: added continuous-distribution and exact paired-sign modules.

## Referenced source registry

- Source ID: source:distribution-extensions:normal. [NIST/SEMATECH · Normal Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3661.htm). Locator: §1.3.6.6.1: normal density, cumulative probability, location and scale.. Verification: Definition-level primary source inspected 2026-11-02. Independent mathematical review and exact-edition book checks remain open.. Rights: Original scenarios, prose, calculations and SVG; no source exercise, data or illustration reproduced.

- Source ID: source:distribution-extensions:quadrature. [NIST DLMF · Gauss Quadrature](https://dlmf.nist.gov/3.5#v). Locator: §3.5(v): Gaussian quadrature. The bounded numerical implementation and error measurements are independently authored.. Verification: Definition-level primary source inspected 2026-11-02. Independent mathematical review and exact-edition book checks remain open.. Rights: Original scenarios, prose, calculations and SVG; no source exercise, data or illustration reproduced.
