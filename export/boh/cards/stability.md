---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:stability", "id": "math:concept:stability", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:stability", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "b012d0e0b24e0b461a8844c13329808521d841062895d46d26a9771d6d5ded42", "source_revision": "0.1.0-draft", "upstream_content_sha256": "e3f44c562b3477bb06c8e126d78c5d00f5642c797f319845324ac7262a04e8ce"}, "purpose": "Change a repeated correction multiplier and follow an initial displacement toward, around or away from the same equilibrium.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e3f44c562b3477bb06c8e126d78c5d00f5642c797f319845324ac7262a04e8ce", "status": "draft", "title": "Stability of an equilibrium", "topics": ["mathematics", "dynamics", "discrete-computation", "modeling", "asymptotic stability", "linear error correction", "attracting equilibrium", "perturbation response"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Stability of an equilibrium

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:stability; revision 0.1.0-draft. Setting: Starting-state stability of the equilibrium zero for an exact scalar linear discrete update. Expression: $e_{k+1}=r e_k,\quad e_n=r^n e_0,\quad |e_n|=|r|^n|e_0|.$. Conditions required for a defined value (a case may test their violation): The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2. The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged. The classification concerns the rule for nearby starting displacements, independently of the chosen e₀. In particular, e₀=0 stays exactly zero even when |r|>1. For the unlimited linear recurrence, |r|<1 makes every initial error approach zero. At r=1 the error is constant; at r=−1 it alternates with unchanged magnitude. These boundary rules are stable but not attracting. This lesson concerns perturbing the starting state of a scalar discrete rule. Structural stability concerns persistence of qualitative behavior under perturbations of a system and requires a separate lesson. Scope: The exact finite trace is an illustration. The all-future classification follows from the power formula for every nonnegative integer n, not from observing only eight corrections. The unitless multiplier r acts on centimetre displacements.

## Schema Version

0.1.0

## Id

math:concept:stability

## Slug

stability

## Type

concept

## Title

Stability of an equilibrium

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-27T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Workshop stories and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of a book edition or lesson.

## Aliases

- asymptotic stability
- linear error correction
- attracting equilibrium
- perturbation response

## Branches

- dynamics
- discrete-computation
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Change a repeated correction multiplier and follow an initial displacement toward, around or away from the same equilibrium.

## Meaning

Stability asks how trajectories respond to a small change in their starting state. For the scalar linear update eₖ₊₁=r eₖ about zero, the magnitude after n updates is |r|ⁿ|e₀|. A multiplier with |r|<1 attracts errors to zero; |r|=1 preserves their magnitude; |r|>1 amplifies every nonzero error. An exactly zero start remains at equilibrium even for an unstable rule.

## Prerequisites

- required:
  - math:concept:recurrence
- helpful:
  - math:concept:exponential-change
  - math:concept:absolute-value
- depth:
  - math:concept:chaos-theory
  - math:concept:bifurcation

## Definition

- setting: Starting-state stability of the equilibrium zero for an exact scalar linear discrete update.
- formal latex: e_{k+1}=r e_k,\quad e_n=r^n e_0,\quad |e_n|=|r|^n|e_0|.
- signature:
  - e₀: Initial signed displacement from equilibrium.
  - r: Repeated correction multiplier.
  - n: Number of completed corrections.
  - k: Index of one correction.
  - eₖ: Displacement at correction k.
  - eₙ: Final displayed displacement.
  - |r|: Multiplier magnitude.
  - |eₙ|: Distance from equilibrium after n corrections.
- conditions:
  - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
  - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - The classification concerns the rule for nearby starting displacements, independently of the chosen e₀. In particular, e₀=0 stays exactly zero even when |r|>1.
  - For the unlimited linear recurrence, |r|<1 makes every initial error approach zero. At r=1 the error is constant; at r=−1 it alternates with unchanged magnitude. These boundary rules are stable but not attracting.
  - This lesson concerns perturbing the starting state of a scalar discrete rule. Structural stability concerns persistence of qualitative behavior under perturbations of a system and requires a separate lesson.
- domain notes: The exact finite trace is an illustration. The all-future classification follows from the power formula for every nonnegative integer n, not from observing only eight corrections. The unitless multiplier r acts on centimetre displacements.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:ucdavis:scalar-dynamics
  - source:openstax:geometric-sequences
  - source:tamu:structural-stability

## Grammar

- pronunciation: Stability of an equilibrium
- expression latex: e_{k+1}=r e_k,\quad e_n=r^n e_0,\quad |e_n|=|r|^n|e_0|.
- formation rule: Begin at signed displacement e₀. Apply eₖ₊₁=r eₖ exactly n whole times, yielding eₙ=rⁿe₀ and |eₙ|=|r|ⁿ|e₀|. For this linear family, |r|<1 gives asymptotic stability; |r|=1 gives stability without attraction; |r|>1 gives instability.
- precedence: Multiply the current signed error by r once per completed correction. A negative r changes sign; its absolute value decides growth or shrinkage in magnitude.
- symbols:
  - Item:
    - token: e₀
    - role: Initial signed displacement from equilibrium
    - type: Centimetres
  - Item:
    - token: r
    - role: Repeated correction multiplier
    - type: Unitless real number
  - Item:
    - token: n
    - role: Number of completed corrections
    - type: Nonnegative integer
  - Item:
    - token: k
    - role: Index of one correction
    - type: Bound nonnegative integer
  - Item:
    - token: eₖ
    - role: Displacement at correction k
    - type: Centimetres
  - Item:
    - token: eₙ
    - role: Final displayed displacement
    - type: Centimetres
  - Item:
    - token: |r|
    - role: Multiplier magnitude
    - type: Nonnegative unitless number
  - Item:
    - token: |eₙ|
    - role: Distance from equilibrium after n corrections
    - type: Nonnegative centimetres
- ast:
  - id: ast:stability:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:initialError
      - kind: variable
      - type: Declared model input
      - symbol: initialError
      - scope ref: scope:stability:expression
    - Item:
      - id: n:multiplier
      - kind: variable
      - type: Declared model input
      - symbol: multiplier
      - scope ref: scope:stability:expression
    - Item:
      - id: n:steps
      - kind: variable
      - type: Declared model input
      - symbol: steps
      - scope ref: scope:stability:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for this explicitly bounded executable family
      - ref: Begin at signed displacement e₀. Apply eₖ₊₁=r eₖ exactly n whole times, yielding eₙ=rⁿe₀ and |eₙ|=|r|ⁿ|e₀|. For this linear family, |r|<1 gives asymptotic stability; |r|=1 gives stability without attraction; |r|>1 gives instability.
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:initialError
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:multiplier
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:steps
  - scopes:
    - Item:
      - id: scope:stability:expression
      - kind: modelExpression
      - free variables:
        - initialError
        - multiplier
        - steps
      - domain condition: Starting-state stability of the equilibrium zero for an exact scalar linear discrete update.
- parse errors:
  - Item:
    - input: Declare the rule stable because e₀=0 stays at zero
    - status: classification error
    - reason: Stability concerns nearby starting states; an unstable rule still preserves its equilibrium exactly.
  - Item:
    - input: Call r=−1 attracting because the trace stays bounded
    - status: limit error
    - reason: The nonzero error alternates without approaching zero.
  - Item:
    - input: Use n=2.5 corrections
    - status: domain error
    - reason: The update count is an integer in this model.
- ast coverage: A typed application outline of the stated executable rule. Bound notation in the displayed mathematical definition is explained in the signature; this outline is not a general formula parser or proof engine.
- output symbol bindings:
  - e₀: initialError
  - r: multiplier
  - n: steps
  - eₖ: values
  - eₙ: output
  - |r|: factorMagnitude
  - |eₙ|: magnitude

## Properties

- Item:
  - claim: The equilibrium is asymptotically stable when |r|<1.
  - conditions: Use the exact scalar linear recurrence for all nonnegative integer updates.
  - derivation: For any e₀, |eₙ|=|r|ⁿ|e₀| tends to zero and never exceeds |e₀|.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:stability:halving-error
- Item:
  - claim: At r=−1 the equilibrium is stable but not attracting.
  - conditions: Use a nonzero starting displacement.
  - derivation: eₖ=(−1)ᵏe₀ keeps magnitude |e₀|, so nearby states stay nearby without approaching zero.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:stability:neutral-alternation
- Item:
  - claim: A zero equilibrium trace does not establish rule stability.
  - conditions: Stability must concern nearby starts, not only e₀=0.
  - derivation: Zero remains zero for every multiplier, but for |r|>1 every nonzero displacement is amplified without bound.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:stability:equilibrium-under-unstable-rule

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the concept and notation before adding historical priority claims.
  - Check book-specific statements against the exact edition before treating the supplied planning matrix as verified coverage.
- reader text: Historical development has not been researched for this draft. The workshop scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:recurrence
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The error trace is a recurrence with zero additive term.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:exponential-change
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The exact magnitude follows repeated multiplication by |r|.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:gradient-descent
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: A quadratic descent coordinate can obey a linear error update, with its multiplier determined by the chosen step.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:chaos-theory
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Nearby starting states are compared under repeated rules; a nonlinear rule can behave beyond this linear classification.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:bifurcation
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Changing a rule parameter can alter qualitative behavior, motivating a later bifurcation lesson.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:stability:halving-error
  - title: Halve the displacement eight times
  - role: applied_model
  - question: Starting1 cm from equilibrium, what remains after eight corrections with r=1/2?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - inputs:
    - initialError: 1
    - multiplier: 0.5
    - steps: 8
  - steps:
    - Item:
      - index: 1
      - expression: e₁=1/2 cm; e₂=1/4 cm.
      - reason: Apply the same multiplier at each correction.
    - Item:
      - index: 2
      - expression: e₈=(1/2)⁸·1=1/256 cm.
      - reason: Use the power formula.
    - Item:
      - index: 3
      - expression: |r|=1/2<1.
      - reason: Every nonzero initial displacement shrinks toward zero under this linear rule.
  - result:
    - exact: e₈=1/256 cm=0.00390625 cm
  - interpretation: The displayed displacement is small and remains on the positive side.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Eight halvings divide the initial centimetre by 256.
  - limits: The asymptotic conclusion comes from |r|ⁿ→0, not merely from the finite display.
  - preset:
    - initialError: 1
    - multiplier: 0.5
    - steps: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
- Item:
  - id: math:example:stability:alternating-contraction
  - title: Cross the target while converging
  - role: applied_model
  - question: What remains after three corrections with r=−1/2?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - inputs:
    - initialError: 1
    - multiplier: -0.5
    - steps: 3
  - steps:
    - Item:
      - index: 1
      - expression: e₁=−1/2 cm; e₂=1/4 cm; e₃=−1/8 cm.
      - reason: A negative multiplier reverses sign each time.
    - Item:
      - index: 2
      - expression: |e₃|=1/8 cm; |r|=1/2<1.
      - reason: The magnitude shrinks despite alternation.
  - result:
    - exact: e₃=−1/8 cm; |e₃|=1/8 cm
  - interpretation: Crossing the equilibrium does not prevent attraction.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The third power of−1/2 is−1/8.
  - limits: Alternation alone does not distinguish a shrinking from a growing error.
  - preset:
    - initialError: 1
    - multiplier: -0.5
    - steps: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
- Item:
  - id: math:example:stability:neutral-alternation
  - title: Keep the same error magnitude
  - role: applied_model
  - question: At r=−1, does a 1 cm start approach equilibrium?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - inputs:
    - initialError: 1
    - multiplier: -1
    - steps: 8
  - steps:
    - Item:
      - index: 1
      - expression: eₖ=(−1)ᵏ cm.
      - reason: The power formula alternates sign.
    - Item:
      - index: 2
      - expression: |eₖ|=1 cm for every k.
      - reason: Magnitude remains fixed at every update.
    - Item:
      - index: 3
      - expression: e₈=1 cm; the equilibrium is stable but not attracting.
      - reason: Nearby errors remain nearby without tending to zero.
  - result:
    - exact: e₈=1 cm; no attraction
  - interpretation: The trace stays bounded and repeats two values rather than converging.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: Every even power is 1 and every odd power is−1.
  - limits: Bounded behavior must not be described as asymptotic attraction.
  - preset:
    - initialError: 1
    - multiplier: -1
    - steps: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
- Item:
  - id: math:example:stability:growing-error
  - title: Amplify a small displacement
  - role: applied_model
  - question: What follows eight corrections with r=1.1 from 1 cm?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
  - inputs:
    - initialError: 1
    - multiplier: 1.1
    - steps: 8
  - steps:
    - Item:
      - index: 1
      - expression: e₈=(11/10)⁸ cm=214358881/100000000 cm.
      - reason: Use exact rational multiplication.
    - Item:
      - index: 2
      - expression: |r|=1.1>1.
      - reason: Every nonzero initial error grows in magnitude under repeated updates.
  - result:
    - exact: e₈=2.14358881 cm
  - interpretation: The displacement has more than doubled by the eighth correction.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The positive geometric sequence with ratio11/10 grows without bound as the update count increases.
  - limits: The trace is finite; the power formula supplies the all-future linear-family statement.
  - preset:
    - initialError: 1
    - multiplier: 1.1
    - steps: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The equilibrium is e=0 cm. The initial signed displacement e₀ lies between−2 and 2 cm, with fixed multiplier r from −1.2 to 1.2.
    - The displayed count n is an integer from zero to eight. Each plotted point is one exact update, and n=0 returns the initial displacement unchanged.
- Item:
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

## Interactive

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

## Prompts

- Item:
  - prompt: Does a zero trace prove that the chosen rule is stable?
  - answer: No. The equilibrium itself stays at zero for every r; stability asks what happens to nearby nonzero initial errors.
- Item:
  - prompt: What does a negative multiplier add?
  - answer: It reverses the sign each update. Its magnitude still determines whether the errors shrink, stay fixed in size or grow.

## Representations

- Item:
  - kind: geometry
  - description: Signed correction strips share one fixed−9 to 9 cm scale around equilibrium zero. The earlier state, repeated multiplier and resulting displacement keep direction and magnitude separate.
- Item:
  - kind: graph
  - description: Exact signed displacement points at integer correction counts use a fixed scale. Joining segments guide the eye between completed updates without inventing fractional corrections.
- Item:
  - kind: substitution
  - description: Follow each declared input through the stated expression into the labelled truth value or measured result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Change a repeated correction multiplier and follow an initial displacement toward, around or away from the same equilibrium.
  - limitations: This is a constructed scalar linear correction rule, not a calibrated controller or an equipment recommendation.
  - evidence kind: constructed_example
  - example ref: math:example:stability:halving-error
- Item:
  - context: Cross the target while converging
  - mapping: Crossing the equilibrium does not prevent attraction.
  - limitations: Alternation alone does not distinguish a shrinking from a growing error.
  - evidence kind: constructed_example
  - example ref: math:example:stability:alternating-contraction

## Source Refs

- source:ucdavis:scalar-dynamics
- source:openstax:geometric-sequences
- source:tamu:structural-stability

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.27.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures, sequenced from the supplied book-scope matrix.

## Referenced source registry

- Source ID: source:openstax:geometric-sequences. [Precalculus 2e, 11.3 Geometric Sequences](https://openstax.org/books/precalculus-2e/pages/11-3-geometric-sequences). Locator: Recursive and explicit geometric-sequence formulas and repeated multiplication. Verification: Definition-level material inspected 2026-10-27 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:ucdavis:scalar-dynamics. [John K. Hunter, One Dimensional Dynamical Systems, Chapter 2](https://www.math.ucdavis.edu/~hunter/m207/ch2.pdf). Locator: Section 2.12 Discrete Dynamical Systems, printed pages 28–29: the scalar linear recurrence, its exact powers, attraction, instability and the two unit-magnitude cases. Verification: Definition-level material inspected 2026-10-27 on the official university-hosted course notes. Supports the stated scalar recurrence and conditions, not independent review, structural-stability coverage or validation of a physical controller.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:tamu:structural-stability. [Texas A&M MATH 614, Dynamical Systems and Chaos, Lecture 10](https://people.tamu.edu/~yvorobets/MATH614-2016A/Lect1-10web.pdf). Locator: Slides 9–10 of 13: structural stability, specified perturbations and topological conjugacy; distinction from a fixed rule's response to starting-state changes. Verification: Definition-level material inspected 2026-10-27 on the official university-hosted lecture. Supports the reference distinction, not a claim that the bounded equilibrium lesson implements structural-stability analysis.. Rights: Reference only. Explanations and scenarios are originally authored; no lecture prose or diagrams copied.
