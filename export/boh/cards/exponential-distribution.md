---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:exponential-distribution", "id": "math:concept:exponential-distribution", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:exponential-distribution", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "bc15b489b2e36e38e265824ef3e603a8b30018be2433f8dfde9947d4efd28969"}, "purpose": "What is the chance the next workshop order arrives within the wait?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "bc15b489b2e36e38e265824ef3e603a8b30018be2433f8dfde9947d4efd28969", "status": "draft", "title": "Exponential waiting time", "topics": ["mathematics", "probability", "statistics", "exponential waiting time"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# Exponential waiting time

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:exponential-distribution; revision 0.1.0-draft. Setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting. Expression: $F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.$. Conditions required for a defined value (a case may test their violation): A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified. Scope: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.

## Schema Version

0.1.0

## Id

math:concept:exponential-distribution

## Slug

exponential-distribution

## Type

concept

## Title

Exponential waiting time

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

- exponential waiting time

## Branches

- probability
- statistics

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What is the chance the next workshop order arrives within the wait?

## Meaning

Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.

## Prerequisites

- required:
  - math:concept:probability-distribution
- helpful:
  - math:concept:poisson-distribution
  - math:concept:exponential-change
  - math:concept:expected-value
- depth:
  []

## Definition

- setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
- formal latex: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
- signature:
  - t: Nonnegative waiting threshold in minutes
  - λ: Positive arrival rate per minute
  - F(t): Probability that the next arrival occurs by the waiting threshold
  - S(t): Probability of still waiting beyond the threshold
  - f(t): Waiting-time density height per minute
  - T: Random waiting duration under the declared law
  - E[T]: Mean waiting duration in minutes
- conditions:
  - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- domain notes: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- proof status: Definition-level sources and original bounded calculations; independent mathematical review pending.
- source refs:
  - source:distribution-extensions:exponential

## Grammar

- pronunciation: Exponential waiting time
- expression latex: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
- formation rule: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
- precedence: Evaluate paired differences or standardized products before cumulative probability; retain units and the stated probability model.
- symbols:
  - Item:
    - token: t
    - role: Nonnegative waiting threshold in minutes
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: λ
    - role: Positive arrival rate per minute
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: F(t)
    - role: Probability that the next arrival occurs by the waiting threshold
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: S(t)
    - role: Probability of still waiting beyond the threshold
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: f(t)
    - role: Waiting-time density height per minute
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: T
    - role: Random waiting duration under the declared law
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: E[T]
    - role: Mean waiting duration in minutes
    - type: Declared mathematical quantity or bound index
- ast:
  - id: ast:exponential-distribution:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - type: Declared physical input
      - symbol: t
      - scope ref: scope:exponential-distribution
    - Item:
      - id: n:rate
      - kind: variable
      - type: Declared physical input
      - symbol: λ
      - scope ref: scope:exponential-distribution
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared probability law
      - ref: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:rule
      - argument: n:time
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:partial-0
      - argument: n:rate
  - scopes:
    - Item:
      - id: scope:exponential-distribution
      - kind: modelExpression
      - free variables:
        - t
        - λ
      - external parameters:
        []
      - domain condition: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- parse errors:
  - Item:
    - input: Treat density height as point probability
    - status: model or role mismatch
    - reason: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- ast coverage: Typed application outline of the declared probability family, with the paired-data selector held external where applicable. This is not an arbitrary expression parser or a theorem checker.
- output symbol bindings:
  - T: waitingLaw
  - t: time
  - λ: rate
  - F(t):
    - cumulative
    - output
  - S(t): survival
  - f(t): density
  - E[T]: meanWait

## Properties

- Item:
  - claim: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - conditions: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - derivation: Use the declared probability law and the independent reference on the bounded parameters.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:exponential-distribution:case-1

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
  - target: math:concept:poisson-distribution
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Exponential waiting time connects continuous probability, paired signs or accumulated quantities to poisson distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:exponential-change
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Exponential waiting time connects continuous probability, paired signs or accumulated quantities to exponential change.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:probability-distribution
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Exponential waiting time connects continuous probability, paired signs or accumulated quantities to probability distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:expected-value
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: Exponential waiting time connects continuous probability, paired signs or accumulated quantities to expected value.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:exponential-distribution:case-1
  - title: Two-minute window at half an arrival per minute
  - role: applied_model
  - question: What is the chance the next workshop order arrives within the wait?
  - setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - assumptions:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - inputs:
    - time: 2
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 2; λ = 0.5
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
      - reason: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - index: 3
      - expression: 0.632120558828558
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.632120558828558
  - interpretation: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - independent check:
    - method: Python expm1 evaluates cumulative waiting probability directly and checks its complement against survival.
    - expected: 0.632120558828558
  - limits: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - preset:
    - time: 2
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- Item:
  - id: math:example:exponential-distribution:case-2
  - title: The moment waiting begins
  - role: applied_model
  - question: What is the chance the next workshop order arrives within the wait?
  - setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - assumptions:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - inputs:
    - time: 0
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 0; λ = 0.5
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
      - reason: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - index: 3
      - expression: 0
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0
  - interpretation: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - independent check:
    - method: Python expm1 evaluates cumulative waiting probability directly and checks its complement against survival.
    - expected: 0
  - limits: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - preset:
    - time: 0
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- Item:
  - id: math:example:exponential-distribution:case-3
  - title: Faster arrivals, same deadline
  - role: applied_model
  - question: What is the chance the next workshop order arrives within the wait?
  - setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - assumptions:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - inputs:
    - time: 2
    - rate: 1
  - steps:
    - Item:
      - index: 1
      - expression: t = 2; λ = 1
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
      - reason: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - index: 3
      - expression: 0.864664716763387
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.864664716763387
  - interpretation: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - independent check:
    - method: Python expm1 evaluates cumulative waiting probability directly and checks its complement against survival.
    - expected: 0.864664716763387
  - limits: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - preset:
    - time: 2
    - rate: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- Item:
  - id: math:example:exponential-distribution:case-4
  - title: Longer wait at the original rate
  - role: applied_model
  - question: What is the chance the next workshop order arrives within the wait?
  - setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - assumptions:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - inputs:
    - time: 4
    - rate: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: t = 4; λ = 0.5
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
      - reason: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - index: 3
      - expression: 0.864664716763387
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.864664716763387
  - interpretation: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - independent check:
    - method: Python expm1 evaluates cumulative waiting probability directly and checks its complement against survival.
    - expected: 0.864664716763387
  - limits: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - preset:
    - time: 4
    - rate: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
- Item:
  - id: math:example:exponential-distribution:case-5
  - title: A very short wait
  - role: applied_model
  - question: What is the chance the next workshop order arrives within the wait?
  - setting: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - assumptions:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - inputs:
    - time: 0.05
    - rate: 0.25
  - steps:
    - Item:
      - index: 1
      - expression: t = 0.05; λ = 0.25
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: F(t)=1-e^{-\lambda t},\quad S(t)=e^{-\lambda t},\quad f(t)=\lambda e^{-\lambda t},\quad \mathbb E[T]=\frac{1}{\lambda},\qquad t\ge0,\ \lambda>0.
      - reason: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
    - Item:
      - index: 3
      - expression: 0.0124221995061186
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.0124221995061186
  - interpretation: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - independent check:
    - method: Python expm1 evaluates cumulative waiting probability directly and checks its complement against survival.
    - expected: 0.0124221995061186
  - limits: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - preset:
    - time: 0.05
    - rate: 0.25
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.

## Interactive

- component id: component:exponential-distribution
- renderer id: exponential-distribution-visual-model
- renderer version: 1
- model id: exponential-distribution-visual-model
- model revision: 1
- expression id: ast:exponential-distribution:expression
- interaction status: implemented
- description: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 2
    - min: 0
    - max: 8
    - step: 0.05
  - Item:
    - id: rate
    - type: number
    - default: 0.5
    - min: 0.25
    - max: 2
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - time: 2
      - rate: 0.5
    - status: valid
    - output: 0.6321205588285577
  - Item:
    - input:
      - time: 0
      - rate: 0.5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - time: 2
      - rate: 1
    - status: valid
    - output: 0.8646647167633873
  - Item:
    - input:
      - time: 4
      - rate: 0.5
    - status: valid
    - output: 0.8646647167633873
  - Item:
    - input:
      - time: 0.05
      - rate: 0.25
    - status: valid
    - output: 0.012422199506118572
  - Item:
    - input:
      - time: 8
      - rate: 0.25
    - status: valid
    - output: 0.8646647167633873
  - Item:
    - input:
      - time: 8
      - rate: 2
    - status: valid
    - output: 0.9999998874648253
  - Item:
    - input:
      - time: 0
      - rate: 2
    - status: valid
    - output: -0.0
  - Item:
    - input:
      - time: 1
      - rate: 1
    - status: valid
    - output: 0.6321205588285577
  - Item:
    - input:
      - time: 1e-06
      - rate: 0.25
    - status: valid
    - output: 2.499999687500026e-07
  - Item:
    - input:
      - time: 4
      - rate: 0.25
    - status: valid
    - output: 0.6321205588285577
  - Item:
    - input:
      - time: 1.5
      - rate: 2
    - status: valid
    - output: 0.950212931632136
  - Item:
    - input:
      - time: 8
      - rate: 0.5
    - status: valid
    - output: 0.9816843611112658
  - Item:
    - input:
      - time: true
      - rate: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - time: 100
      - rate: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - time: 2
      - rate: 0
    - status: invalid_parameters
  - Item:
    - input:
      - time: 1
      - rate: 0.5
    - status: invalid_parameters
  - Item:
    - input:
      - time: 5e-324
      - rate: 0.25
    - status: numeric_precision
  - Item:
    - input:
      - time: 5e-324
      - rate: 0.5
    - status: numeric_precision
  - Item:
    - input:
      - time: 5e-324
      - rate: 1
    - status: valid
    - output: 5e-324
  - Item:
    - input:
      - time: 5e-324
      - rate: 2
    - status: valid
    - output: 1e-323
- compute: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
- numeric tolerance: 1e-12
- invariants:
  - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - The story, calculation and visual use the same current parameters.
  - Geometry density scales and Graph probability scales have distinct meanings.
- limits:
  - A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
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
  - prompt: What is the chance the next workshop order arrives within the wait?
  - answer: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
- Item:
  - prompt: What changes when the threshold or shift moves?
  - answer: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.

## Representations

- Item:
  - kind: geometry
  - description: Model-derived density area or paired physical readings, with explicit quantity marks.
- Item:
  - kind: graph
  - description: A fixed probability scale; discrete sign boundaries are not joined.
- Item:
  - kind: substitution
  - description: Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.

## Applications

- Item:
  - context: Originally authored workshop scenario
  - mapping: A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.
  - limitations: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - evidence kind: constructed_example
  - example ref: math:example:exponential-distribution:case-1
- Item:
  - context: A changed model setting
  - mapping: The moment waiting begins. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.
  - limitations: A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.
  - evidence kind: constructed_example
  - example ref: math:example:exponential-distribution:case-2

## Source Refs

- source:distribution-extensions:exponential

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 second continuation: added continuous-distribution and exact paired-sign modules.

## Referenced source registry

- Source ID: source:distribution-extensions:exponential. [NIST/SEMATECH · Exponential Distribution](https://www.itl.nist.gov/div898/handbook/eda/section3/eda3667.htm). Locator: §1.3.6.6.7: density, CDF, survival and constant hazard. This lesson uses rate λ=1/β and zero location.. Verification: Definition-level primary source inspected 2026-11-02. Independent mathematical review and exact-edition book checks remain open.. Rights: Original scenarios, prose, calculations and SVG; no source exercise, data or illustration reproduced.
