---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:time-dilation", "id": "math:concept:time-dilation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:time-dilation", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "53c2d5f2b1d7645e40e24664aa25b12721ecd4a237e6d049234b822f081cd6c6", "source_revision": "0.1.0-draft", "upstream_content_sha256": "cee47490529eabf5fa06e7ed28d4ea8d95db9aafeb0f7795278c79dbbae2179e"}, "purpose": "How can the same pair of clock events have two elapsed-time readings?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "cee47490529eabf5fa06e7ed28d4ea8d95db9aafeb0f7795278c79dbbae2179e", "status": "draft", "title": "Time dilation between two clock events", "topics": ["mathematics", "physics", "modeling", "time dilation between two clock events", "time dilation"], "type": "reference", "updated": "2026-11-10T00:00:00Z", "version": "0.1.0-draft"}
---

# Time dilation between two clock events

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:time-dilation; revision 0.1.0-draft. Setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler. Expression: $\beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.$. Conditions required for a defined value (a case may test their violation): Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events. Scope: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.

## Schema Version

0.1.0

## Id

math:concept:time-dilation

## Slug

time-dilation

## Type

concept

## Title

Time dilation between two clock events

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

- time dilation between two clock events
- time dilation

## Branches

- physics
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How can the same pair of clock events have two elapsed-time readings?

## Meaning

For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.

## Prerequisites

- required:
  - math:concept:pythagorean-theorem
- helpful:
  - math:concept:ratio-scale
  - math:concept:linear-momentum
- depth:
  []

## Definition

- setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
- formal latex: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
- signature:
  - β: Dimensionless relative speed v divided by the vacuum speed of light c
  - γ: Lorentz factor multiplying the proper interval
  - τ: Proper elapsed time between the two events, in seconds on their common clock
  - t: Laboratory coordinate elapsed time between the same two events, in seconds
  - v: Clock speed relative to the laboratory, in metres per second
  - c: Exact SI speed of light in vacuum, 299792458 metres per second
  - x: Laboratory spatial separation of the two clock events, in metres
- conditions:
  - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- domain notes: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
- proof status: Physical premise with originally authored algebraic consequences; independent review pending.
- source refs:
  - source:physics-bridge:si-constants
  - source:physics-bridge:time-dilation

## Grammar

- pronunciation: Time dilation between two clock events
- expression latex: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
- formation rule: For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.
- precedence: Convert units before substitution, then evaluate the stated physical relation under its conditions.
- symbols:
  - Item:
    - token: β
    - role: Dimensionless relative speed v divided by the vacuum speed of light c
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: γ
    - role: Lorentz factor multiplying the proper interval
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: τ
    - role: Proper elapsed time between the two events, in seconds on their common clock
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: t
    - role: Laboratory coordinate elapsed time between the same two events, in seconds
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: v
    - role: Clock speed relative to the laboratory, in metres per second
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: c
    - role: Exact SI speed of light in vacuum, 299792458 metres per second
    - type: Locally declared physical quantity or exact constant
  - Item:
    - token: x
    - role: Laboratory spatial separation of the two clock events, in metres
    - type: Locally declared physical quantity or exact constant
- ast:
  - id: ast:time-dilation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:speedFraction
      - kind: variable
      - type: Declared numeric input
      - symbol: β
      - scope ref: scope:time-dilation
    - Item:
      - id: n:properDuration
      - kind: variable
      - type: Declared numeric input
      - symbol: τ
      - scope ref: scope:time-dilation
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Bounded physical relation
      - ref: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
    - Item:
      - id: n:partial-0
      - kind: apply
      - type: Physical quantity under stated model
      - function: n:rule
      - argument: n:speedFraction
    - Item:
      - id: n:output
      - kind: apply
      - type: Physical quantity under stated model
      - function: n:partial-0
      - argument: n:properDuration
  - scopes:
    - Item:
      - id: scope:time-dilation
      - kind: modelExpression
      - free variables:
        - β
        - τ
      - external parameters:
        - Declared physical law and exact SI defining constants
      - domain condition: Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- parse errors:
  - Item:
    - input: Mix numerical unit readings or compare different event pairs
    - status: model mismatch
    - reason: Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- ast coverage: Typed application outline; the formal expression and stated physical premise specify the complete bounded relation.
- output symbol bindings:
  - β: speedFraction
  - γ: gamma
  - τ: properDuration
  - t: output
  - v: velocity
  - c: lightSpeed
  - x: displacement

## Properties

- Item:
  - claim: For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.
  - conditions: Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - derivation: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
  - status: original consequence of the stated physical premise; independent review pending
  - example ref: math:example:time-dilation:case-1

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
  - target: math:concept:pythagorean-theorem
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
- Item:
  - target: math:concept:linear-momentum
  - type: supports
  - conditions: Retain the physical model and units; the algebraic connection alone does not establish the physical law.
  - reason: The bounded physical relation connects measured quantities, ratios and geometric invariants.
  - target status: available
  - evidence status: editorial mathematical connection; original explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:time-dilation:case-1
  - title: A four-second spacecraft clock
  - role: applied_model
  - question: How can the same pair of clock events have two elapsed-time readings?
  - setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
  - assumptions:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - inputs:
    - speedFraction: 0.6
    - properDuration: 4
  - steps:
    - Item:
      - index: 1
      - expression: β = 0.6; τ = 4
      - reason: Choose the dimensionless speed ratio and proper interval in seconds.
    - Item:
      - index: 2
      - expression: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
      - reason: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
    - Item:
      - index: 3
      - expression: t ≈ 5.0 s
      - reason: At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.
  - result:
    - approximate: 5.0
  - interpretation: At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 5.0
  - limits: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - preset:
    - speedFraction: 0.6
    - properDuration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- Item:
  - id: math:example:time-dilation:case-2
  - title: No relative motion
  - role: applied_model
  - question: How can the same pair of clock events have two elapsed-time readings?
  - setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
  - assumptions:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - inputs:
    - speedFraction: 0
    - properDuration: 4
  - steps:
    - Item:
      - index: 1
      - expression: β = 0; τ = 4
      - reason: Choose the dimensionless speed ratio and proper interval in seconds.
    - Item:
      - index: 2
      - expression: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
      - reason: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
    - Item:
      - index: 3
      - expression: t ≈ 4.0 s
      - reason: The multiplier is one. Clock and laboratory intervals are both four seconds, and the two laboratory event positions coincide.
  - result:
    - approximate: 4.0
  - interpretation: The multiplier is one. Clock and laboratory intervals are both four seconds, and the two laboratory event positions coincide.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 4.0
  - limits: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - preset:
    - speedFraction: 0
    - properDuration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- Item:
  - id: math:example:time-dilation:case-3
  - title: A three-second proper interval
  - role: applied_model
  - question: How can the same pair of clock events have two elapsed-time readings?
  - setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
  - assumptions:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - inputs:
    - speedFraction: 0.8
    - properDuration: 3
  - steps:
    - Item:
      - index: 1
      - expression: β = 0.8; τ = 3
      - reason: Choose the dimensionless speed ratio and proper interval in seconds.
    - Item:
      - index: 2
      - expression: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
      - reason: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
    - Item:
      - index: 3
      - expression: t ≈ 5.0 s
      - reason: At β=0.8, γ=5/3. A three-second proper interval corresponds to five laboratory seconds.
  - result:
    - approximate: 5.0
  - interpretation: At β=0.8, γ=5/3. A three-second proper interval corresponds to five laboratory seconds.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 5.0
  - limits: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - preset:
    - speedFraction: 0.8
    - properDuration: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- Item:
  - id: math:example:time-dilation:case-4
  - title: The largest allowed speed and interval
  - role: applied_model
  - question: How can the same pair of clock events have two elapsed-time readings?
  - setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
  - assumptions:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - inputs:
    - speedFraction: 0.95
    - properDuration: 10
  - steps:
    - Item:
      - index: 1
      - expression: β = 0.95; τ = 10
      - reason: Choose the dimensionless speed ratio and proper interval in seconds.
    - Item:
      - index: 2
      - expression: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
      - reason: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
    - Item:
      - index: 3
      - expression: t ≈ 32.025630761017425 s
      - reason: At β=0.95 the factor is about 3.2026. Ten clock seconds correspond to about 32.026 laboratory seconds, still within the fixed 35-second display.
  - result:
    - approximate: 32.025630761017425
  - interpretation: At β=0.95 the factor is about 3.2026. Ten clock seconds correspond to about 32.026 laboratory seconds, still within the fixed 35-second display.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 32.025630761017425
  - limits: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - preset:
    - speedFraction: 0.95
    - properDuration: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
- Item:
  - id: math:example:time-dilation:case-5
  - title: Change only the clock interval
  - role: applied_model
  - question: How can the same pair of clock events have two elapsed-time readings?
  - setting: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.
  - assumptions:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - inputs:
    - speedFraction: 0.6
    - properDuration: 8
  - steps:
    - Item:
      - index: 1
      - expression: β = 0.6; τ = 8
      - reason: Choose the dimensionless speed ratio and proper interval in seconds.
    - Item:
      - index: 2
      - expression: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
      - reason: For this inertial clock-event pair the spacetime interval gives c²τ²=c²t²−x². With x=vt, division by c² gives τ²=t²(1−β²). The future-directed positive interval therefore satisfies t=τ/√(1−β²)=γτ. This uses the special-relativistic interval as a physical premise, not a consequence of Euclidean geometry alone.
    - Item:
      - index: 3
      - expression: t ≈ 10.0 s
      - reason: At the same β=0.6, doubling the proper interval from four to eight seconds doubles the laboratory interval from five to ten seconds. The multiplier stays 1.25.
  - result:
    - approximate: 10.0
  - interpretation: At the same β=0.6, doubling the proper interval from four to eight seconds doubles the laboratory interval from five to ten seconds. The multiplier stays 1.25.
  - independent check:
    - method: Independent high-precision decimal constants and direct length-energy product, or spacetime-interval solution.
    - expected: 10.0
  - limits: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - preset:
    - speedFraction: 0.6
    - properDuration: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.

## Interactive

- component id: component:time-dilation
- renderer id: time-dilation-visual-model
- renderer version: 1
- model id: time-dilation-visual-model
- model revision: 1
- expression id: ast:time-dilation:expression
- interaction status: implemented
- description: For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.
- controls:
  - Item:
    - id: speedFraction
    - type: number
    - default: 0.6
    - min: 0
    - max: 0.95
    - step: 0.005
  - Item:
    - id: properDuration
    - type: number
    - default: 4
    - min: 1
    - max: 10
    - step: 0.05
- expected cases:
  - Item:
    - input:
      - speedFraction: 0
      - properDuration: 1
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - speedFraction: 0
      - properDuration: 10
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - speedFraction: 0.1
      - properDuration: 1
    - status: valid
    - output: 1.005037815259212
  - Item:
    - input:
      - speedFraction: 0.4
      - properDuration: 3
    - status: valid
    - output: 3.2732683535398857
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 4
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - speedFraction: 0.8
      - properDuration: 3
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - speedFraction: 0.9
      - properDuration: 5
    - status: valid
    - output: 11.470786693528089
  - Item:
    - input:
      - speedFraction: 0.95
      - properDuration: 1
    - status: valid
    - output: 3.2025630761017427
  - Item:
    - input:
      - speedFraction: 0.95
      - properDuration: 10
    - status: valid
    - output: 32.025630761017425
  - Item:
    - input:
      - speedFraction: 0.945
      - properDuration: 9.95
    - status: valid
    - output: 30.421591697535234
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 4
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - speedFraction: 0
      - properDuration: 4
    - status: valid
    - output: 4.0
  - Item:
    - input:
      - speedFraction: 0.8
      - properDuration: 3
    - status: valid
    - output: 5.0
  - Item:
    - input:
      - speedFraction: 0.95
      - properDuration: 10
    - status: valid
    - output: 32.025630761017425
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 8
    - status: valid
    - output: 10.0
  - Item:
    - input:
      - speedFraction: -0.01
      - properDuration: 4
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.96
      - properDuration: 4
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: true
      - properDuration: 4
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 2
      - properDuration: 4
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: null
      - properDuration: 4
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 0.99
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 10.01
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: true
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: 2
    - status: invalid_parameters
  - Item:
    - input:
      - speedFraction: 0.6
      - properDuration: null
    - status: invalid_parameters
- compute: \beta=\frac vc,\quad \gamma=\frac{1}{\sqrt{1-\beta^2}},\quad t=\gamma\tau,\quad x=vt.
- numeric tolerance: 5e-12
- invariants:
  - Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events.
  - Story, calculation, Geometry and Graph evaluate one shared physical state.
  - Fixed measured scales preserve the distinction between the chosen input and derived output.
- limits:
  - This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
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
  - prompt: How can the same pair of clock events have two elapsed-time readings?
  - answer: For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.
- Item:
  - prompt: What does each visual measure?
  - answer: An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.

## Representations

- Item:
  - kind: geometry
  - description: Physical lengths or intervals and independent quantitative energy/time bars on fixed scales.
- Item:
  - kind: graph
  - description: The primary physical result against the first input on fixed bounds.
- Item:
  - kind: substitution
  - description: For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.

## Applications

- Item:
  - context: A four-second spacecraft clock
  - mapping: At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.
  - limitations: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - evidence kind: constructed_example
  - example ref: math:example:time-dilation:case-1
- Item:
  - context: No relative motion
  - mapping: The multiplier is one. Clock and laboratory intervals are both four seconds, and the two laboratory event positions coincide.
  - limitations: This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.
  - evidence kind: constructed_example
  - example ref: math:example:time-dilation:case-2

## Source Refs

- source:physics-bridge:si-constants
- source:physics-bridge:time-dilation

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 physics bridge: original physical scenario, staged calculation and quantitative views.

## Referenced source registry

- Source ID: source:physics-bridge:si-constants. [BIPM · The International System of Units](https://www.bipm.org/en/measurement-units/). Locator: SI definition: exact c=299792458 m/s, h=6.62607015×10⁻³⁴ J·s and elementary charge 1.602176634×10⁻¹⁹ C. The electronvolt conversion follows from one elementary charge through one volt.. Verification: Official defining-constant page inspected 2026-11-10. This does not verify exact-edition book coverage.. Rights: Originally authored calculations, scenarios and code-native diagrams; no source illustration or exercise reproduced.

- Source ID: source:physics-bridge:time-dilation. [OpenStax · University Physics Volume 3 §5.3](https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation). Locator: Equation 5.2 and proper-time definition: the same two events at one position in the clock rest frame satisfy Δt=γΔτ with γ=1/sqrt(1−v²/c²).. Verification: Original textbook page inspected 2026-11-10. Independent mathematical/teaching review and exact-edition book-page checks remain open.. Rights: Originally authored clock-event scenarios and fixed-scale interval bars; no source exercise, illustration or empirical data reproduced.
