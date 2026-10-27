---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:example:stability:equilibrium-under-unstable-rule", "id": "math:example:stability:equilibrium-under-unstable-rule", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:stability", "example_id": "math:example:stability:equilibrium-under-unstable-rule", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e3f44c562b3477bb06c8e126d78c5d00f5642c797f319845324ac7262a04e8ce"}, "purpose": "Change a repeated correction multiplier and follow an initial displacement toward, around or away from the same equilibrium.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e3f44c562b3477bb06c8e126d78c5d00f5642c797f319845324ac7262a04e8ce", "status": "draft", "title": "Separate an equilibrium trace from rule stability", "topics": ["mathematics", "dynamics", "discrete-computation", "modeling", "asymptotic stability", "linear error correction", "attracting equilibrium", "perturbation response"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Separate an equilibrium trace from rule stability

Parent card: math:concept:stability; revision 0.1.0-draft. Original worked draft; independent review pending.

Definition unit math:concept:stability; revision 0.1.0-draft. Setting: Starting-state stability of the equilibrium zero for an exact scalar linear discrete update. Expression: $e_{k+1}=r e_k,\quad e_n=r^n e_0,\quad |e_n|=|r|^n|e_0|.$. Conditions required for a defined value (a case may test their violation): The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2. The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged. The classification concerns the rule for nearby starting displacements, independently of the chosen e₀. In particular, e₀=0 stays exactly zero even when |r|>1. For the unlimited linear recurrence, |r|<1 makes every initial error approach zero. At r=1 the error is constant; at r=−1 it alternates with unchanged magnitude. These boundary rules are stable but not attracting. This lesson concerns perturbing the starting state of a scalar discrete rule. Structural stability concerns persistence of qualitative behavior under perturbations of a system and requires a separate lesson. Scope: The exact finite trace is an illustration. The all-future classification follows from the power formula for every nonnegative integer n, not from observing only eight corrections. The unitless multiplier r acts on centimetre displacements.

Case unit math:example:stability:equilibrium-under-unstable-rule. Setting: An originally authored workshop scenario with stipulated quantities and rules. Inputs: {"initialError": 0, "multiplier": 1.2, "steps": 8}. Result: {"exact": "e₈=0 cm; the rule is unstable"}. Limits: This is stability of a discrete linear equilibrium, not structural stability.

## Complete worked case

- id: math:example:stability:equilibrium-under-unstable-rule
- title: Separate an equilibrium trace from rule stability
- role: applied_model
- question: If e₀=0 and r=1.2, does the zero trace make the rule stable?
- setting: An originally authored workshop scenario with stipulated quantities and rules.
- assumptions:
  - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
  - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
- inputs:
  - initialError: 0
  - multiplier: 1.2
  - steps: 8
- steps:
  - Item:
    - index: 1
    - expression: eₖ=(1.2)ᵏ·0=0 cm.
    - reason: The equilibrium is preserved exactly.
  - Item:
    - index: 2
    - expression: For a nearby nonzero initial error, |eₖ|=(1.2)ᵏ|e₀| grows.
    - reason: Stability concerns starting-state perturbations, not only the equilibrium trajectory.
- result:
  - exact: e₈=0 cm; the rule is unstable
- interpretation: An unchanged zero marker cannot certify stability of the surrounding dynamics.
- independent check:
  - method: Separate logical or exact arithmetic check
  - expected: Starting at 1/100 cm gives a nonzero growing geometric sequence with the same multiplier.
- limits: This is stability of a discrete linear equilibrium, not structural stability.
- preset:
  - initialError: 0
  - multiplier: 1.2
  - steps: 8
- provenance:
  - kind: original worked derivation
  - mathematical review: author-derived; independent review pending
  - external source refs:
- conditions to check:
  - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
  - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.

## Written exploration recipe

- component id: component:stability
- renderer id: stability-visual-model
- renderer version: 1
- model id: stability-visual-model
- model revision: 1
- expression id: ast:stability:expression
- interaction status: implemented
- description: Signed correction strips share one fixed−9 to 9 cm scale around equilibrium zero. The earlier state, repeated multiplier and resulting displacement keep direction and magnitude separate.
- controls:
  - Item:
    - id: initialError
    - type: number
    - default: 1
    - min: -2
    - max: 2
    - step: 0.01
  - Item:
    - id: multiplier
    - type: number
    - default: 0.5
    - min: -1.2
    - max: 1.2
    - step: 0.01
  - Item:
    - id: steps
    - type: number
    - default: 8
    - min: 0
    - max: 8
    - step: 1
- expected cases:
  - Item:
    - input:
      - initialError: 1
      - multiplier: 0.5
      - steps: 8
    - output: 0.00390625
  - Item:
    - input:
      - initialError: 1
      - multiplier: 1.1
      - steps: 8
    - output: 2.14358881
  - Item:
    - input:
      - initialError: 1
      - multiplier: -0.5
      - steps: 3
    - output: -0.125
  - Item:
    - input:
      - initialError: 1
      - multiplier: -1
      - steps: 8
    - output: 1
  - Item:
    - input:
      - initialError: 1
      - multiplier: 1
      - steps: 8
    - output: 1
  - Item:
    - input:
      - initialError: 0
      - multiplier: 1.2
      - steps: 8
    - output: 0
  - Item:
    - input:
      - initialError: -2
      - multiplier: 1.2
      - steps: 8
    - output: -8.59963392
  - Item:
    - input:
      - initialError: 2
      - multiplier: 0
      - steps: 0
    - output: 2
  - Item:
    - input:
      - initialError: 2
      - multiplier: 0
      - steps: 1
    - output: 0
  - Item:
    - input:
      - initialError: 1
      - multiplier: -1.2
      - steps: 7
    - output: -3.5831808
  - Item:
    - input:
      - initialError: 1
      - multiplier: 0.5
      - steps: 2.5
    - status: invalid_parameters
  - Item:
    - input:
      - initialError: 1
      - multiplier: 1.21
      - steps: 8
    - status: invalid_parameters
- compute: Begin at signed displacement e₀. Apply eₖ₊₁=r eₖ exactly n whole times, yielding eₙ=rⁿe₀ and |eₙ|=|r|ⁿ|e₀|. For this linear family, |r|<1 gives asymptotic stability; |r|=1 gives stability without attraction; |r|>1 gives instability.
- numeric tolerance: 1e-10
- invariants:
  - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
  - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - The classification concerns the rule for nearby starting displacements, independently of the chosen e₀. In particular, e₀=0 stays exactly zero even when |r|>1.
  - For the unlimited linear recurrence, |r|<1 makes every initial error approach zero. At r=1 the error is constant; at r=−1 it alternates with unchanged magnitude. These boundary rules are stable but not attracting.
  - This lesson concerns perturbing the starting state of a scalar discrete rule. Structural stability concerns persistence of qualitative behavior under perturbations of a system and requires a separate lesson.
- limits:
  - This is a constructed scalar linear correction rule, not a calibrated controller or an equipment recommendation.
  - Finite plotted behavior is not the proof of asymptotic stability; the power formula supplies the stated linear-family argument.
  - State-perturbation stability is distinct from structural stability, bifurcation theory and the behavior of a general nonlinear system.
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

- Source ID: source:openstax:geometric-sequences. [Precalculus 2e, 11.3 Geometric Sequences](https://openstax.org/books/precalculus-2e/pages/11-3-geometric-sequences). Locator: Recursive and explicit geometric-sequence formulas and repeated multiplication. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:ucdavis:scalar-dynamics. [John K. Hunter, One Dimensional Dynamical Systems, Chapter 2](https://www.math.ucdavis.edu/~hunter/m207/ch2.pdf). Locator: Section 2.12 Discrete Dynamical Systems, printed pages 28–29: the scalar linear recurrence, its exact powers, attraction, instability and the two unit-magnitude cases. Verification: Definition-level material inspected 2026-10-27 on the official university-hosted course notes. Supports the stated scalar recurrence and conditions, not independent review, structural-stability coverage or validation of a physical controller.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:tamu:structural-stability. [Texas A&M MATH 614, Dynamical Systems and Chaos, Lecture 10](https://people.tamu.edu/~yvorobets/MATH614-2016A/Lect1-10web.pdf). Locator: Slides 9–10 of 13: structural stability, specified perturbations and topological conjugacy; distinction from a fixed rule's response to starting-state changes. Verification: Definition-level material inspected 2026-10-27 on the official university-hosted lecture. Supports the reference distinction, not a claim that the bounded equilibrium lesson implements structural-stability analysis.. Rights: Reference only. Explanations and scenarios are originally authored; no lecture prose or diagrams copied.
