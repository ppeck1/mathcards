---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:photon-energy:case-2", "id": "math:example:photon-energy:case-2", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:photon-energy", "example_id": "math:example:photon-energy:case-2", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "a79fe5adf55cb0096d8428343a2345b8ac48c0da25fe4eb302e95544f90520f2"}, "purpose": "What changes when a light-source photon has a shorter wavelength?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "a79fe5adf55cb0096d8428343a2345b8ac48c0da25fe4eb302e95544f90520f2", "status": "draft", "title": "The shortest allowed wavelength", "topics": ["mathematics", "physics", "modeling", "photon energy and vacuum wavelength", "photon energy"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# The shortest allowed wavelength

Parent card: math:concept:photon-energy; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:photon-energy; revision 0.1.0-draft. Setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon. Expression: $f=\frac{c}{\lambda},\quad E_J=hf,\quad E=\frac{E_J}{u}.$. Conditions required for a defined value (a case may test their violation): Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV. Scope: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.

Case unit math:example:photon-energy:case-2. Setting: A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon. Inputs: {"wavelength": 400}. Result: {"approximate": "3.0996049608300065"}. Limits: The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.

## Complete worked case

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

## Written exploration recipe

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

## Parent-card sources (case derivation provenance is listed above)

- Source ID: source:physics-bridge:si-constants. [BIPM · The International System of Units](https://www.bipm.org/en/measurement-units/). Locator: SI definition: exact c=299792458 m/s, h=6.62607015×10⁻³⁴ J·s and elementary charge 1.602176634×10⁻¹⁹ C. The electronvolt conversion follows from one elementary charge through one volt.. Verification: Official defining-constant page inspected 2026-11-10. This does not verify exact-edition book coverage.. Rights: Originally authored calculations, scenarios and code-native diagrams; no source illustration or exercise reproduced.

- Source ID: source:physics-bridge:photon-energy. [OpenStax · University Physics Volume 3 §6.3](https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect). Locator: Equations 6.19–6.20: E=hf=hc/λ and λf=c in vacuum. Only the monochromatic photon relation is used; scattering is not modeled.. Verification: Original textbook page inspected 2026-11-10. Independent mathematical/teaching review and exact-edition book-page checks remain open.. Rights: Originally authored light-source scenarios, calculations and diagrams; no source exercise, data or illustration reproduced.
