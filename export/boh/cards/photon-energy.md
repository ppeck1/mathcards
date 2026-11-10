---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:photon-energy", "id": "math:concept:photon-energy", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:photon-energy", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a79fe5adf55cb0096d8428343a2345b8ac48c0da25fe4eb302e95544f90520f2"}, "purpose": "What changes when a light-source photon has a shorter wavelength?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a79fe5adf55cb0096d8428343a2345b8ac48c0da25fe4eb302e95544f90520f2", "status": "draft", "title": "Photon energy and vacuum wavelength", "topics": ["mathematics", "physics", "modeling", "photon energy and vacuum wavelength", "photon energy"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# Photon energy and vacuum wavelength

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:photon-energy; revision 0.1.0-draft. Setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon. Expression: $f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.$. Conditions required for a defined value (a case may test their violation): Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV. Scope: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.

## Schema Version

0.1.0

## Id

math:concept:photon-energy

## Slug

photon-energy

## Type

concept

## Title

Photon energy and vacuum wavelength

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

- photon energy and vacuum wavelength
- photon energy

## Branches

- physics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

What changes when a light-source photon has a shorter wavelength?

## Meaning

For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.

## Prerequisites

- required:
  - math:concept:wave-interference
- helpful:
  - math:concept:ratio-scale
- depth:
  []

## Definition

- setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
- formal latex: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
- signature:
  - λ: Vacuum wavelength, entered in nanometres and converted to metres for the formula
  - f: Vacuum optical frequency in hertz
  - c: Exact SI speed of light in vacuum, 299792458 metres per second
  - h: Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds
  - E J: Energy of one photon in joules
  - E: The same photon energy expressed in electronvolts
  - u: Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt
- conditions:
  - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- domain notes: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
- proof status: Physical premise with originally authored algebraic consequences; independent review pending.
- source refs:
  - source:physics-bridge:si-constants
  - source:physics-bridge:photon-energy

## Grammar

- pronunciation: Photon energy and vacuum wavelength
- expression latex: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
- formation rule: For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.
- precedence: Convert units before substitution, then evaluate the stated physical relation under its conditions.
- symbols:
  - Item:
    - token: λ
    - role: Vacuum wavelength, entered in nanometres and converted to metres for the formula
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: f
    - role: Vacuum optical frequency in hertz
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: c
    - role: Exact SI speed of light in vacuum, 299792458 metres per second
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: h
    - role: Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: E_J
    - role: Energy of one photon in joules
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: E
    - role: The same photon energy expressed in electronvolts
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: u
    - role: Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt
    - type: Locally declared physical quantity or exact constant
- ast:
  - id: ast:photon-energy:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:wavelength
      - kind: variable
      - type: Declared numeric input
      - symbol: λ
      - scope ref: scope:photon-energy
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded physical relation
      - ref: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
    - Item:
      - id: n:output
      - kind: apply
      - type: Physical quantity under stated model
      - function: n:rule
      - argument: n:wavelength
  - scopes:
    - Item:
      - id: scope:photon-energy
      - kind: modelExpression
      - free variables:
        - λ
      - external parameters:
        - Declared physical law and exact SI defining constants
      - domain condition: Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- parse errors:
  - Item:
    - input: Mix numerical unit readings or compare different event pairs
    - status: model mismatch
    - reason: Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- ast coverage: Typed application outline; the formal expression and stated physical premise specify the complete bounded relation.
- output symbol bindings:
  - λ: wavelength
  - f: frequency
  - c: lightSpeed
  - h: planck
  - E J: energyJ
  - E: output
  - u: joulesPerEV

## Properties

- Item:
  - claim: For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.
  - conditions: Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - derivation: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
  - status: original consequence of the stated physical premise; independent review pending
  - example ref: math:example:photon-energy:case-1

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
  - target: math:concept:wave-interference
  - type: supports
  - conditions: Retain the physical model and units; the algebraic connection alone does not establish the physical law.
  - reason: The bounded physical relation connects measured quantities, ratios and geometric invariants.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []
- Item:
  - target: math:concept:ratio-scale
  - type: supports
  - conditions: Retain the physical model and units; the algebraic connection alone does not establish the physical law.
  - reason: The bounded physical relation connects measured quantities, ratios and geometric invariants.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:photon-energy:case-1
  - title: Compare a 550-nanometre emitter
  - role: applied_model
  - question: What changes when a light-source photon has a shorter wavelength?
  - setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
  - assumptions:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - inputs:
    - wavelength: 550
  - steps:
    - Item:
      - index: 1
      - expression: λ = 550
      - reason: Choose the vacuum wavelength in nanometres.
    - Item:
      - index: 2
      - expression: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
      - reason: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
    - Item:
      - index: 3
      - expression: E ≈ 2.254258153330914 eV
      - reason: One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.
  - result:
    - approximate: 2.254258153330914
  - interpretation: One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 2.254258153330914
  - limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - preset:
    - wavelength: 550
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- Item:
  - id: math:example:photon-energy:case-2
  - title: The shortest allowed wavelength
  - role: applied_model
  - question: What changes when a light-source photon has a shorter wavelength?
  - setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
  - assumptions:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - inputs:
    - wavelength: 400
  - steps:
    - Item:
      - index: 1
      - expression: λ = 400
      - reason: Choose the vacuum wavelength in nanometres.
    - Item:
      - index: 2
      - expression: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
      - reason: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
    - Item:
      - index: 3
      - expression: E ≈ 3.0996049608300065 eV
      - reason: A 400-nanometre photon carries about 3.0996 electronvolts. This is energy per photon, not the power emitted by a lamp.
  - result:
    - approximate: 3.0996049608300065
  - interpretation: A 400-nanometre photon carries about 3.0996 electronvolts. This is energy per photon, not the power emitted by a lamp.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 3.0996049608300065
  - limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - preset:
    - wavelength: 400
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- Item:
  - id: math:example:photon-energy:case-3
  - title: Double the wavelength
  - role: applied_model
  - question: What changes when a light-source photon has a shorter wavelength?
  - setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
  - assumptions:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - inputs:
    - wavelength: 800
  - steps:
    - Item:
      - index: 1
      - expression: λ = 800
      - reason: Choose the vacuum wavelength in nanometres.
    - Item:
      - index: 2
      - expression: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
      - reason: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
    - Item:
      - index: 3
      - expression: E ≈ 1.5498024804150032 eV
      - reason: At 800 nanometres the photon energy is about 1.5498 electronvolts, exactly half the analytic energy at 400 nanometres.
  - result:
    - approximate: 1.5498024804150032
  - interpretation: At 800 nanometres the photon energy is about 1.5498 electronvolts, exactly half the analytic energy at 400 nanometres.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 1.5498024804150032
  - limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - preset:
    - wavelength: 800
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- Item:
  - id: math:example:photon-energy:case-4
  - title: A 500-nanometre comparison
  - role: applied_model
  - question: What changes when a light-source photon has a shorter wavelength?
  - setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
  - assumptions:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - inputs:
    - wavelength: 500
  - steps:
    - Item:
      - index: 1
      - expression: λ = 500
      - reason: Choose the vacuum wavelength in nanometres.
    - Item:
      - index: 2
      - expression: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
      - reason: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
    - Item:
      - index: 3
      - expression: E ≈ 2.479683968664005 eV
      - reason: The vacuum frequency is 5.99584916×10¹⁴ hertz. The photon energy is about 2.4797 electronvolts.
  - result:
    - approximate: 2.479683968664005
  - interpretation: The vacuum frequency is 5.99584916×10¹⁴ hertz. The photon energy is about 2.4797 electronvolts.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 2.479683968664005
  - limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - preset:
    - wavelength: 500
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
- Item:
  - id: math:example:photon-energy:case-5
  - title: A longer 700-nanometre comparison
  - role: applied_model
  - question: What changes when a light-source photon has a shorter wavelength?
  - setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.
  - assumptions:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - inputs:
    - wavelength: 700
  - steps:
    - Item:
      - index: 1
      - expression: λ = 700
      - reason: Choose the vacuum wavelength in nanometres.
    - Item:
      - index: 2
      - expression: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
      - reason: Under the stated photon law E_J=hf and the vacuum wave relation fλ=c, substitution gives E_J=hc/λ. Dividing by the fixed joule-per-electronvolt conversion gives E=hc/(uλ). Thus doubling a wavelength halves frequency and both energy readings; changing units does not change the physical energy.
    - Item:
      - index: 3
      - expression: E ≈ 1.7712028347600037 eV
      - reason: One photon carries about 1.7712 electronvolts. More photons can still make a beam brighter; this wavelength alone does not specify their number.
  - result:
    - approximate: 1.7712028347600037
  - interpretation: One photon carries about 1.7712 electronvolts. More photons can still make a beam brighter; this wavelength alone does not specify their number.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 1.7712028347600037
  - limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - preset:
    - wavelength: 700
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.

## Interactive

- component id: component:photon-energy
- renderer id: photon-energy-visual-model
- renderer version: 1
- model id: photon-energy-visual-model
- model revision: 1
- expression id: ast:photon-energy:expression
- interaction status: implemented
- description: For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.
- controls:
  - Item:
    - id: wavelength
    - type: number
    - default: 550
    - min: 400
    - max: 800
    - step: 1
- expected cases:
  - Item:
    - input:
      - wavelength: 400
    - status: valid
    - output: 3.0996049608300065
  - Item:
    - input:
      - wavelength: 401
    - status: valid
    - output: 3.0918752726483856
  - Item:
    - input:
      - wavelength: 450
    - status: valid
    - output: 2.7552044096266726
  - Item:
    - input:
      - wavelength: 550
    - status: valid
    - output: 2.254258153330914
  - Item:
    - input:
      - wavelength: 600
    - status: valid
    - output: 2.0664033072200043
  - Item:
    - input:
      - wavelength: 650
    - status: valid
    - output: 1.9074492066646194
  - Item:
    - input:
      - wavelength: 799
    - status: valid
    - output: 1.551742158112644
  - Item:
    - input:
      - wavelength: 800
    - status: valid
    - output: 1.5498024804150032
  - Item:
    - input:
      - wavelength: 550
    - status: valid
    - output: 2.254258153330914
  - Item:
    - input:
      - wavelength: 400
    - status: valid
    - output: 3.0996049608300065
  - Item:
    - input:
      - wavelength: 800
    - status: valid
    - output: 1.5498024804150032
  - Item:
    - input:
      - wavelength: 500
    - status: valid
    - output: 2.479683968664005
  - Item:
    - input:
      - wavelength: 700
    - status: valid
    - output: 1.7712028347600037
  - Item:
    - input:
      - wavelength: 399.99
    - status: invalid_parameters
  - Item:
    - input:
      - wavelength: 800.01
    - status: invalid_parameters
  - Item:
    - input:
      - wavelength: true
    - status: invalid_parameters
  - Item:
    - input:
      - wavelength: 2
    - status: invalid_parameters
  - Item:
    - input:
      - wavelength: null
    - status: invalid_parameters
- compute: f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.
- numeric tolerance: 5e-12
- invariants:
  - Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV.
  - Story, calculation, Geometry and Graph evaluate one shared physical state.
  - Fixed measured scales preserve the distinction between the chosen input and derived output.
- limits:
  - The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
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
  - prompt: What changes when a light-source photon has a shorter wavelength?
  - answer: For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.
- Item:
  - prompt: What does each visual measure?
  - answer: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.

## Representations

- Item:
  - kind: geometry
  - description: Physical lengths or intervals and independent quantitative energy/time bars on fixed scales.
- Item:
  - kind: graph
  - description: The primary physical result against the first input on fixed bounds.
- Item:
  - kind: substitution
  - description: For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.

## Applications

- Item:
  - context: Compare a 550-nanometre emitter
  - mapping: One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.
  - limitations: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - evidence kind: constructed_example
  - example ref: math:example:photon-energy:case-1
- Item:
  - context: The shortest allowed wavelength
  - mapping: A 400-nanometre photon carries about 3.0996 electronvolts. This is energy per photon, not the power emitted by a lamp.
  - limitations: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.
  - evidence kind: constructed_example
  - example ref: math:example:photon-energy:case-2

## Source Refs

- source:physics-bridge:si-constants
- source:physics-bridge:photon-energy

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 physics bridge: original physical scenario, staged calculation and quantitative views.

## Referenced source registry

- Source ID: source:physics-bridge:si-constants. [BIPM · The International System of Units](https://www.bipm.org/en/measurement-units/). Locator: SI definition: exact c=299792458 m/s, h=6.62607015×10⁻³⁴ J·s and elementary charge 1.602176634×10⁻¹⁹ C. The electronvolt conversion follows from one elementary charge through one volt.. Verification: Official defining-constant page inspected 2026-11-10. This does not verify exact-edition book coverage.. Rights: Originally authored calculations, scenarios and code-native diagrams; no source illustration or exercise reproduced.

- Source ID: source:physics-bridge:photon-energy. [OpenStax · University Physics Volume 3 §6.3](https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect). Locator: Equations 6.19–6.20: E=hf=hc/λ and λf=c in vacuum. Only the monochromatic photon relation is used; scattering is not modeled.. Verification: Original textbook page inspected 2026-11-10. Independent mathematical/teaching review and exact-edition book-page checks remain open.. Rights: Originally authored light-source scenarios, calculations and diagrams; no source exercise, data or illustration reproduced.
