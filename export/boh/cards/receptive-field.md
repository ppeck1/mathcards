---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:receptive-field", "id": "math:concept:receptive-field", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:receptive-field", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "40ef2046174d67dc9280c774d0d536b6cba334d70ee188ff77172ac4570666ee"}, "purpose": "Why can a bright center stand out while a uniform panel cancels?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "40ef2046174d67dc9280c774d0d536b6cba334d70ee188ff77172ac4570666ee", "status": "draft", "title": "Receptive fields: center versus surround", "topics": ["mathematics", "computational-neuroscience", "linear-algebra", "modeling", "Receptive fields: center versus surround", "receptive field"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# Receptive fields: center versus surround

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:receptive-field; revision 0.1.0-draft. Setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response. Expression: $\vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.$. Conditions required for a defined value (a case may test their violation): Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed. Scope: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.

## Schema Version

0.1.0

## Id

math:concept:receptive-field

## Slug

receptive-field

## Type

concept

## Title

Receptive fields: center versus surround

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

- Receptive fields: center versus surround
- receptive field

## Branches

- computational-neuroscience
- linear-algebra
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Why can a bright center stand out while a uniform panel cancels?

## Meaning

A spatial receptive-field model weights inputs by where they occur. This five-site center-surround filter uses middle gray setting c and four equal surrounding settings s. The center weight is one and every surrounding weight is −g/4. The total surrounding magnitude is S=gs, so the signed filter response is r=c−S. At g=1 all uniform gray levels cancel; black input cancels at every gain.

## Prerequisites

- required:
  - math:concept:neural-summation
- helpful:
  - math:concept:inner-product
- depth:
  - math:concept:artificial-neuron

## Definition

- setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
- formal latex: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
- signature:
  - c: Dimensionless gray setting at the middle site
  - s: Dimensionless gray setting shared by the four surrounding sites
  - g: Nonnegative total surround gain
  - S: Total nonnegative surrounding magnitude gs
  - r: Signed spatial filter response
  - x⃗: Five-site vector of gray settings
  - w⃗: Five-site vector of signed spatial weights
- conditions:
  - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- domain notes: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
- proof status: Definition-level primary author source and originally derived bounded model; independent review pending.
- source refs:
  - source:neural-bridge:receptive-field

## Grammar

- pronunciation: Receptive fields: center versus surround
- expression latex: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
- formation rule: A spatial receptive-field model weights inputs by where they occur. This five-site center-surround filter uses middle gray setting c and four equal surrounding settings s. The center weight is one and every surrounding weight is −g/4. The total surrounding magnitude is S=gs, so the signed filter response is r=c−S. At g=1 all uniform gray levels cancel; black input cancels at every gain.
- precedence: Multiply each input by its stated weight, preserve its sign, then add the signed contributions.
- symbols:
  - Item:
    - token: c
    - role: Dimensionless gray setting at the middle site
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: s
    - role: Dimensionless gray setting shared by the four surrounding sites
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: g
    - role: Nonnegative total surround gain
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: S
    - role: Total nonnegative surrounding magnitude gs
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: r
    - role: Signed spatial filter response
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: x⃗
    - role: Five-site vector of gray settings
    - type: Locally declared dimensionless quantity or vector
  - Item:
    - token: w⃗
    - role: Five-site vector of signed spatial weights
    - type: Locally declared dimensionless quantity or vector
- ast:
  - id: ast:receptive-field:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:center
      - kind: variable
      - type: Declared dimensionless input
      - symbol: c
      - scope ref: scope:receptive-field
    - Item:
      - id: n:surround
      - kind: variable
      - type: Declared dimensionless input
      - symbol: s
      - scope ref: scope:receptive-field
    - Item:
      - id: n:gain
      - kind: variable
      - type: Declared dimensionless input
      - symbol: g
      - scope ref: scope:receptive-field
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Declared signed linear filter
      - ref: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Signed dimensionless model value
      - function: n:rule
      - argument: n:center
    - Item:
      - id: n:partial-1
      - kind: apply
      - type: Signed dimensionless model value
      - function: n:partial-0
      - argument: n:surround
    - Item:
      - id: n:output
      - kind: apply
      - type: Signed dimensionless model value
      - function: n:partial-1
      - argument: n:gain
  - scopes:
    - Item:
      - id: scope:receptive-field
      - kind: modelExpression
      - free variables:
        - c
        - s
        - g
      - external parameters:
        - The stated fixed spatial sites and signed gains
      - domain condition: Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- parse errors:
  - Item:
    - input: Drop a negative weight or interpret signed drive as a firing rate
    - status: model mismatch
    - reason: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
- ast coverage: Typed application outline; the formal expression declares the complete bounded rule.
- output symbol bindings:
  - c: center
  - s: surround
  - g: gain
  - S: surroundTotal
  - r: output
  - x⃗: pixels
  - w⃗: weights

## Properties

- Item:
  - claim: A spatial receptive-field model weights inputs by where they occur. This five-site center-surround filter uses middle gray setting c and four equal surrounding settings s. The center weight is one and every surrounding weight is −g/4. The total surrounding magnitude is S=gs, so the signed filter response is r=c−S. At g=1 all uniform gray levels cancel; black input cancels at every gain.
  - conditions: Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - derivation: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
  - status: original mathematical derivation; independent review pending
  - example ref: math:example:receptive-field:case-1

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
  - target: math:concept:neural-summation
  - type: supports
  - conditions: Retain each receiving lesson’s domain, units and interpretation.
  - reason: Both lessons combine signed weighted inputs; the spatial filter specifies which site receives each weight.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:inner-product
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

## Examples

- Item:
  - id: math:example:receptive-field:case-1
  - title: A brighter middle tile
  - role: applied_model
  - question: Why can a bright center stand out while a uniform panel cancels?
  - setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
  - assumptions:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - inputs:
    - center: 0.8
    - surround: 0.3
    - gain: 1
  - steps:
    - Item:
      - index: 1
      - expression: c = 0.8; s = 0.3; g = 1
      - reason: Choose the center and surround gray settings and the total surround gain.
    - Item:
      - index: 2
      - expression: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
      - reason: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
    - Item:
      - index: 3
      - expression: r ≈ 0.5
      - reason: The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.
  - result:
    - approximate: 0.5
  - interpretation: The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.5
  - limits: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - preset:
    - center: 0.8
    - surround: 0.3
    - gain: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- Item:
  - id: math:example:receptive-field:case-2
  - title: Uniform gray with balanced weights
  - role: applied_model
  - question: Why can a bright center stand out while a uniform panel cancels?
  - setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
  - assumptions:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - inputs:
    - center: 0.4
    - surround: 0.4
    - gain: 1
  - steps:
    - Item:
      - index: 1
      - expression: c = 0.4; s = 0.4; g = 1
      - reason: Choose the center and surround gray settings and the total surround gain.
    - Item:
      - index: 2
      - expression: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
      - reason: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
    - Item:
      - index: 3
      - expression: r ≈ 0.0
      - reason: The weights sum to zero. Matching center and surround settings therefore give exactly zero in the mathematical model.
  - result:
    - approximate: 0.0
  - interpretation: The weights sum to zero. Matching center and surround settings therefore give exactly zero in the mathematical model.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.0
  - limits: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - preset:
    - center: 0.4
    - surround: 0.4
    - gain: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- Item:
  - id: math:example:receptive-field:case-3
  - title: A strong bright surround
  - role: applied_model
  - question: Why can a bright center stand out while a uniform panel cancels?
  - setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
  - assumptions:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - inputs:
    - center: 0.2
    - surround: 0.8
    - gain: 2
  - steps:
    - Item:
      - index: 1
      - expression: c = 0.2; s = 0.8; g = 2
      - reason: Choose the center and surround gray settings and the total surround gain.
    - Item:
      - index: 2
      - expression: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
      - reason: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
    - Item:
      - index: 3
      - expression: r ≈ -1.4
      - reason: The surrounding magnitude is 1.6, larger than the center contribution 0.2. The signed response is about −1.4.
  - result:
    - approximate: -1.4
  - interpretation: The surrounding magnitude is 1.6, larger than the center contribution 0.2. The signed response is about −1.4.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: -1.4
  - limits: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - preset:
    - center: 0.2
    - surround: 0.8
    - gain: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- Item:
  - id: math:example:receptive-field:case-4
  - title: Turn off the surrounding weights
  - role: applied_model
  - question: Why can a bright center stand out while a uniform panel cancels?
  - setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
  - assumptions:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - inputs:
    - center: 0.7
    - surround: 1
    - gain: 0
  - steps:
    - Item:
      - index: 1
      - expression: c = 0.7; s = 1; g = 0
      - reason: Choose the center and surround gray settings and the total surround gain.
    - Item:
      - index: 2
      - expression: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
      - reason: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
    - Item:
      - index: 3
      - expression: r ≈ 0.7
      - reason: Zero surround gain makes all four surrounding weights zero. The response is the center setting, about 0.7, regardless of neighbor brightness.
  - result:
    - approximate: 0.7
  - interpretation: Zero surround gain makes all four surrounding weights zero. The response is the center setting, about 0.7, regardless of neighbor brightness.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.7
  - limits: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - preset:
    - center: 0.7
    - surround: 1
    - gain: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
- Item:
  - id: math:example:receptive-field:case-5
  - title: Uniform gray with a different gain
  - role: applied_model
  - question: Why can a bright center stand out while a uniform panel cancels?
  - setting: A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.
  - assumptions:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - inputs:
    - center: 0.4
    - surround: 0.4
    - gain: 0.5
  - steps:
    - Item:
      - index: 1
      - expression: c = 0.4; s = 0.4; g = 0.5
      - reason: Choose the center and surround gray settings and the total surround gain.
    - Item:
      - index: 2
      - expression: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
      - reason: The spatial inner product contains one term c and four equal terms −gs/4. Summing those four terms gives −gs, hence response c−gs. For a uniform level t, center and surround both equal t and the response is t times one minus g. Thus every uniform level cancels at g=1; for t>0, cancellation implies g=1. At t=0 the response is zero for any gain.
    - Item:
      - index: 3
      - expression: r ≈ 0.2
      - reason: Uniform input need not cancel at another gain. The weights sum to 0.5, so gray level 0.4 produces a response of about 0.2.
  - result:
    - approximate: 0.2
  - interpretation: Uniform input need not cancel at another gain. The weights sum to 0.5, so gray level 0.4 produces a response of about 0.2.
  - independent check:
    - method: An independent Python reference forms exact rational signed products from the entered decimal values, then sums them before converting to a numerical reading.
    - expected: 0.2
  - limits: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - preset:
    - center: 0.4
    - surround: 0.4
    - gain: 0.5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.

## Interactive

- component id: component:receptive-field
- renderer id: receptive-field-visual-model
- renderer version: 1
- model id: receptive-field-visual-model
- model revision: 1
- expression id: ast:receptive-field:expression
- interaction status: implemented
- description: A spatial receptive-field model weights inputs by where they occur. This five-site center-surround filter uses middle gray setting c and four equal surrounding settings s. The center weight is one and every surrounding weight is −g/4. The total surrounding magnitude is S=gs, so the signed filter response is r=c−S. At g=1 all uniform gray levels cancel; black input cancels at every gain.
- controls:
  - Item:
    - id: center
    - type: number
    - default: 0.8
    - min: 0
    - max: 1
    - step: 0.025
  - Item:
    - id: surround
    - type: number
    - default: 0.3
    - min: 0
    - max: 1
    - step: 0.025
  - Item:
    - id: gain
    - type: number
    - default: 1
    - min: 0
    - max: 2
    - step: 0.025
- expected cases:
  - Item:
    - input:
      - center: 0.8
      - surround: 0.3
      - gain: 1
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - center: 0
      - surround: 0
      - gain: 0
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - center: 0
      - surround: 0
      - gain: 2
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - center: 1
      - surround: 0
      - gain: 2
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - center: 0
      - surround: 1
      - gain: 2
    - status: valid
    - output: -2.0
  - Item:
    - input:
      - center: 1
      - surround: 1
      - gain: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - center: 0.4
      - surround: 0.4
      - gain: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - center: 0.2
      - surround: 0.8
      - gain: 2
    - status: valid
    - output: -1.4
  - Item:
    - input:
      - center: 0.7
      - surround: 1
      - gain: 0
    - status: valid
    - output: 0.7
  - Item:
    - input:
      - center: 0.4
      - surround: 0.4
      - gain: 0.5
    - status: valid
    - output: 0.2
  - Item:
    - input:
      - center: 1
      - surround: 1
      - gain: 2
    - status: valid
    - output: -1.0
  - Item:
    - input:
      - center: 0.1
      - surround: 0.1
      - gain: 1
    - status: valid
    - output: 0.0
  - Item:
    - input:
      - center: -0.01
      - surround: 0.3
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 1.01
      - surround: 0.3
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: true
      - surround: 0.3
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: null
      - surround: 0.3
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: -0.01
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: 1.01
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: true
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: null
      - gain: 1
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: 0.3
      - gain: -0.01
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: 0.3
      - gain: 2.01
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: 0.3
      - gain: true
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.8
      - surround: 0.3
      - gain: null
    - status: invalid_parameters
- compute: \vec{x}=(s,s,c,s,s),\quad \vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\quad S=gs,\quad r=\vec{w}\cdot\vec{x}=c-S.
- numeric tolerance: 5e-11
- invariants:
  - Use center and surround gray settings from zero to one, with total surround gain g from zero to two. All four neighbors share the same setting and the five spatial sites stay fixed.
  - Story, calculation, Geometry and Graph evaluate the same parameters.
  - A fixed signed scale preserves positive and negative contributions.
- limits:
  - This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
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
  - prompt: Why can a bright center stand out while a uniform panel cancels?
  - answer: Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.
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
  - description: Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.

## Applications

- Item:
  - context: A brighter middle tile
  - mapping: The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.
  - limitations: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - evidence kind: constructed_example
  - example ref: math:example:receptive-field:case-1
- Item:
  - context: Uniform gray with balanced weights
  - mapping: The weights sum to zero. Matching center and surround settings therefore give exactly zero in the mathematical model.
  - limitations: This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.
  - evidence kind: constructed_example
  - example ref: math:example:receptive-field:case-2

## Source Refs

- source:neural-bridge:receptive-field

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 continuation: bounded neural-computation bridge with connected story, signed quantitative views and searchable readers.

## Referenced source registry

- Source ID: source:neural-bridge:receptive-field. [Neuronal Dynamics · Encoding Models in Systems Neuroscience](https://neuronaldynamics.epfl.ch/online/Ch11.S2.html). Locator: Section 11.2.1 and Figure 11.5 describe the spatial linear-filter stage as a weighted stimulus projection, before a nonlinearity and a stochastic spike model. This lesson isolates that algebraic stage in an original five-site construction; it does not reproduce a receptive-field measurement, figure or LNP spike model.. Verification: Definition-level author source inspected 2026-11-10. Independent mathematical, biological and teaching review and exact-edition book-page verification remain pending.. Rights: Original workshop scenario, arithmetic, diagrams and worked examples. No source exercise, figure, recorded data or substantial text reproduced.
