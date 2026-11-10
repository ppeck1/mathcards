---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:neural-summation", "id": "math:concept:neural-summation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:neural-summation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f88d2854db7fd806587f1c8a0b80f52e4adaf5f5dac159fb9f1f2855fee5b6c7"}, "purpose": "How can one channel add drive while another subtracts it?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f88d2854db7fd806587f1c8a0b80f52e4adaf5f5dac159fb9f1f2855fee5b6c7", "status": "draft", "title": "Excitation and inhibition: a signed sum", "topics": ["mathematics", "computational-neuroscience", "linear-algebra", "modeling", "Excitation and inhibition: a signed sum", "neural summation"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# Excitation and inhibition: a signed sum

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:neural-summation; revision 0.1.0-draft. Setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration. Expression: $a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.$. Conditions required for a defined value (a case may test their violation): Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1. Scope: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.

## Schema Version

0.1.0

## Id

math:concept:neural-summation

## Slug

neural-summation

## Type

concept

## Title

Excitation and inhibition: a signed sum

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-10T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- Excitation and inhibition: a signed sum
- neural summation

## Branches

- computational-neuroscience
- linear-algebra
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can one channel add drive while another subtracts it?

## Meaning

A linear artificial unit combines signed weighted inputs. Here the approach input e has a fixed positive gain a=2 and the braking input i has a fixed subtractive gain b=1. Their nonnegative drive magnitudes are E=ae and I=bi, and the signed net drive is y=E−I. Equal raw inputs do not cancel because their gains differ.

## Prerequisites

- required:
  - math:concept:linear-combination
- helpful:
  - math:concept:inner-product
- depth:
  - math:concept:artificial-neuron

## Definition

- setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
- formal latex: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
- signature:
  - e: Dimensionless approach-channel input
  - i: Dimensionless braking-channel input
  - a: Fixed positive approach gain, equal to two
  - b: Fixed positive braking magnitude gain, equal to one
  - E: Nonnegative weighted approach drive
  - I: Nonnegative weighted braking magnitude, subtracted from E
  - y: Signed net drive of the artificial unit
- conditions:
  - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- domain notes: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
- proof status: Definition-level primary author source and originally derived bounded model; independent review pending.
- source refs:
  - source:neural-bridge:neural-summation

## Grammar

- pronunciation: Excitation and inhibition: a signed sum
- expression latex: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
- formation rule: A linear artificial unit combines signed weighted inputs. Here the approach input e has a fixed positive gain a=2 and the braking input i has a fixed subtractive gain b=1. Their nonnegative drive magnitudes are E=ae and I=bi, and the signed net drive is y=E−I. Equal raw inputs do not cancel because their gains differ.
- precedence: Multiply each input by its stated weight, preserve its sign, then add the signed contributions.
- symbols:
  - Item:
    - token: e
    - role: Dimensionless approach-channel input
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: i
    - role: Dimensionless braking-channel input
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: a
    - role: Fixed positive approach gain, equal to two
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: b
    - role: Fixed positive braking magnitude gain, equal to one
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: E
    - role: Nonnegative weighted approach drive
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: I
    - role: Nonnegative weighted braking magnitude, subtracted from E
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: y
    - role: Signed net drive of the artificial unit
    - type: Locally declared dimensionless quantity or vector
- ast:
  - id: ast:neural-summation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:excitation
      - kind: variable
      - type: Declared dimensionless input
      - symbol: e
      - scope ref: scope:neural-summation
    - Item:
      - id: n:inhibition
      - kind: variable
      - type: Declared dimensionless input
      - symbol: i
      - scope ref: scope:neural-summation
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared signed linear filter
      - ref: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Signed dimensionless model value
      - function: n:rule
      - argument: n:excitation
    - Item:
      - id: n:output
      - kind: apply
      - type: Signed dimensionless model value
      - function: n:partial-0
      - argument: n:inhibition
  - scopes:
    - Item:
      - id: scope:neural-summation
      - kind: modelExpression
      - free variables:
        - e
        - i
      - external parameters:
        - The stated fixed spatial sites and signed gains
      - domain condition: Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- parse errors:
  - Item:
    - input: Drop a negative weight or interpret signed drive as a firing rate
    - status: model mismatch
    - reason: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
- ast coverage: Typed application outline; the formal expression declares the complete bounded rule.
- output symbol bindings:
  - e: excitation
  - i: inhibition
  - a: gainExcitation
  - b: gainInhibition
  - E: excitatoryDrive
  - I: inhibitoryDrive
  - y: output

## Properties

- Item:
  - claim: A linear artificial unit combines signed weighted inputs. Here the approach input e has a fixed positive gain a=2 and the braking input i has a fixed subtractive gain b=1. Their nonnegative drive magnitudes are E=ae and I=bi, and the signed net drive is y=E−I. Equal raw inputs do not cancel because their gains differ.
  - conditions: Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - derivation: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
  - status: original mathematical derivation; independent review pending
  - example ref: math:example:neural-summation:case-1

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
  - target: math:concept:linear-combination
  - type: supports
  - conditions: Retain each receiving lesson’s domain, units and interpretation.
  - reason: Both lessons combine signed weighted inputs; the spatial filter specifies which site receives each weight.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:artificial-neuron
  - type: supports
  - conditions: Retain each receiving lesson’s domain, units and interpretation.
  - reason: Both lessons combine signed weighted inputs; the spatial filter specifies which site receives each weight.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:receptive-field
  - type: supports
  - conditions: Retain each receiving lesson’s domain, units and interpretation.
  - reason: Both lessons combine signed weighted inputs; the spatial filter specifies which site receives each weight.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:neural-summation:case-1
  - title: The approach channel counts twice
  - role: applied_model
  - question: How can one channel add drive while another subtracts it?
  - setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
  - assumptions:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - inputs:
    - excitation: 0.6
    - inhibition: 0.4
  - steps:
    - Item:
      - index: 1
      - expression: e = 0.6; i = 0.4
      - reason: Choose the dimensionless channel signals and read the fixed gains from the model.
    - Item:
      - index: 2
      - expression: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
      - reason: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
    - Item:
      - index: 3
      - expression: y ≈ 0.8
      - reason: The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.
  - result:
    - approximate: 0.8
  - interpretation: The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.8
  - limits: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - preset:
    - excitation: 0.6
    - inhibition: 0.4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- Item:
  - id: math:example:neural-summation:case-2
  - title: Exact balance with unequal signals
  - role: applied_model
  - question: How can one channel add drive while another subtracts it?
  - setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
  - assumptions:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - inputs:
    - excitation: 0.5
    - inhibition: 1
  - steps:
    - Item:
      - index: 1
      - expression: e = 0.5; i = 1
      - reason: Choose the dimensionless channel signals and read the fixed gains from the model.
    - Item:
      - index: 2
      - expression: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
      - reason: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
    - Item:
      - index: 3
      - expression: y ≈ 0.0
      - reason: Half an approach signal becomes one after its gain. A braking signal of one cancels it, giving zero net drive.
  - result:
    - approximate: 0.0
  - interpretation: Half an approach signal becomes one after its gain. A braking signal of one cancels it, giving zero net drive.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.0
  - limits: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - preset:
    - excitation: 0.5
    - inhibition: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- Item:
  - id: math:example:neural-summation:case-3
  - title: Equal raw readings do not cancel
  - role: applied_model
  - question: How can one channel add drive while another subtracts it?
  - setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
  - assumptions:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - inputs:
    - excitation: 1
    - inhibition: 1
  - steps:
    - Item:
      - index: 1
      - expression: e = 1; i = 1
      - reason: Choose the dimensionless channel signals and read the fixed gains from the model.
    - Item:
      - index: 2
      - expression: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
      - reason: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
    - Item:
      - index: 3
      - expression: y ≈ 1.0
      - reason: The two raw readings are equal, but their gains are not. The net drive is two minus one, equal to one.
  - result:
    - approximate: 1.0
  - interpretation: The two raw readings are equal, but their gains are not. The net drive is two minus one, equal to one.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 1.0
  - limits: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - preset:
    - excitation: 1
    - inhibition: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- Item:
  - id: math:example:neural-summation:case-4
  - title: A braking-only input
  - role: applied_model
  - question: How can one channel add drive while another subtracts it?
  - setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
  - assumptions:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - inputs:
    - excitation: 0
    - inhibition: 1
  - steps:
    - Item:
      - index: 1
      - expression: e = 0; i = 1
      - reason: Choose the dimensionless channel signals and read the fixed gains from the model.
    - Item:
      - index: 2
      - expression: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
      - reason: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
    - Item:
      - index: 3
      - expression: y ≈ -1.0
      - reason: With no approach input the only contribution is negative. The signed result is minus one.
  - result:
    - approximate: -1.0
  - interpretation: With no approach input the only contribution is negative. The signed result is minus one.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: -1.0
  - limits: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - preset:
    - excitation: 0
    - inhibition: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
- Item:
  - id: math:example:neural-summation:case-5
  - title: An approach-only input
  - role: applied_model
  - question: How can one channel add drive while another subtracts it?
  - setting: A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.
  - assumptions:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - inputs:
    - excitation: 1
    - inhibition: 0
  - steps:
    - Item:
      - index: 1
      - expression: e = 1; i = 0
      - reason: Choose the dimensionless channel signals and read the fixed gains from the model.
    - Item:
      - index: 2
      - expression: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
      - reason: Use the two-component input vector with weights two and minus one. Its inner product is 2e−i. Increasing e by a change d raises y by 2d; increasing i by d lowers y by d. The output is zero exactly when i=2e. If e=i, the net drive equals e, so equal positive inputs do not cancel.
    - Item:
      - index: 3
      - expression: y ≈ 2.0
      - reason: The largest approach signal and no braking give the maximum drive, equal to two.
  - result:
    - approximate: 2.0
  - interpretation: The largest approach signal and no braking give the maximum drive, equal to two.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 2.0
  - limits: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - preset:
    - excitation: 1
    - inhibition: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.

## Interactive

- component id: component:neural-summation
- renderer id: neural-summation-visual-model
- renderer version: 1
- model id: neural-summation-visual-model
- model revision: 1
- expression id: ast:neural-summation:expression
- interaction status: implemented
- description: A linear artificial unit combines signed weighted inputs. Here the approach input e has a fixed positive gain a=2 and the braking input i has a fixed subtractive gain b=1. Their nonnegative drive magnitudes are E=ae and I=bi, and the signed net drive is y=E−I. Equal raw inputs do not cancel because their gains differ.
- controls:
  - Item:
    - id: excitation
    - type: number
    - default: 0.6
    - min: 0
    - max: 1
    - step: 0.025
  - Item:
    - id: inhibition
    - type: number
    - default: 0.4
    - min: 0
    - max: 1
    - step: 0.025
- expected cases:
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: 0.4
    - status: valid
    - output: 0.8
  - Item:
    - input:
      - excitation: 0
      - inhibition: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - excitation: 1
      - inhibition: 0
    - status: valid
    - output: 2.0
  - Item:
    - input:
      - excitation: 0
      - inhibition: 1
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - excitation: 1
      - inhibition: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - excitation: 0.5
      - inhibition: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - excitation: 0.25
      - inhibition: 0.5
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - excitation: 0.8
      - inhibition: 0.2
    - status: valid
    - output: 1.4
  - Item:
    - input:
      - excitation: 0.2
      - inhibition: 0.8
    - status: valid
    - output: -0.4
  - Item:
    - input:
      - excitation: 0
      - inhibition: 0.4
    - status: valid
    - output: -0.4
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: 0
    - status: valid
    - output: 1.2
  - Item:
    - input:
      - excitation: 0.1
      - inhibition: 0.2
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - excitation: -0.01
      - inhibition: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: 1.01
      - inhibition: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: true
      - inhibition: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: null
      - inhibition: 0.4
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: -0.01
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: 1.01
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: true
    - status: invalid_parameters
  - Item:
    - input:
      - excitation: 0.6
      - inhibition: null
    - status: invalid_parameters
- compute: a=2,\quad b=1,\quad E=ae,\quad I=bi,\quad y=E-I.
- numeric tolerance: 5e-11
- invariants:
  - Use dimensionless approach and braking signals from zero to one. The adding gain is fixed at a=2 and the subtractive gain at b=1.
  - Story, calculation, Geometry and Graph evaluate the same parameters.
  - A fixed signed scale preserves positive and negative contributions.
- limits:
  - This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
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
  - prompt: How can one channel add drive while another subtracts it?
  - answer: Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.
- Item:
  - prompt: What does a negative result mean?
  - answer: A negative signed drive in this particular mathematical model. It is not a negative spike count or a measured biological rate.

## Representations

- Item:
  - kind: geometry
  - description: Inputs become signed weighted bars on fixed quantitative scales.
- Item:
  - kind: graph
  - description: The primary signed response versus the first input, holding other inputs fixed.
- Item:
  - kind: substitution
  - description: Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.

## Applications

- Item:
  - context: The approach channel counts twice
  - mapping: The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.
  - limitations: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - evidence kind: constructed_example
  - example ref: math:example:neural-summation:case-1
- Item:
  - context: Exact balance with unequal signals
  - mapping: Half an approach signal becomes one after its gain. A braking signal of one cancels it, giving zero net drive.
  - limitations: This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.
  - evidence kind: constructed_example
  - example ref: math:example:neural-summation:case-2

## Source Refs

- source:neural-bridge:neural-summation

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded neural-computation bridge with connected story, signed quantitative views and searchable readers.

## Referenced source registry

- Source ID: source:neural-bridge:neural-summation. [Dive into Deep Learning · Linear Regression as a Neural Network](https://d2l.ai/chapter_linear-regression/linear-regression.html). Locator: Section 3.1.4 and equation 3.1.2 introduce a single computed unit as a weighted input sum. Section 3.1.4.1 discusses positive/negative input effects. The fixed two-channel arithmetic, robot scenario and diagrams are original; no source exercise or biological fit is reproduced.. Verification: Definition-level author source inspected 2026-11-10. Independent mathematical, biological and teaching review and exact-edition book-page verification remain pending.. Rights: Original workshop scenario, arithmetic, diagrams and worked examples. No source exercise, figure, recorded data or substantial text reproduced.
