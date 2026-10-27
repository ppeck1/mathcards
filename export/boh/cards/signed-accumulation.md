---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:signed-accumulation", "id": "math:concept:signed-accumulation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:signed-accumulation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.1.1-draft", "upstream_content_sha256": "e77cdd1fe1db0abc58c3307d803eb1145575db6b51467c209ca345fa49cce194"}, "purpose": "Add positive and negative contributions while keeping net change distinct from total activity.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "e77cdd1fe1db0abc58c3307d803eb1145575db6b51467c209ca345fa49cce194", "status": "draft", "title": "Signed accumulation", "topics": ["mathematics", "calculus", "modeling", "signed area", "net displacement", "Riemann-sum approximation"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.1-draft"}
---

# Signed accumulation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:signed-accumulation; revision 0.1.1-draft. Setting: A continuous affine velocity on [0,T]; a bounded specimen of signed definite integration. Expression: $v(t)=v_0+rt,\quad S(T)=\int_0^T v(t)\,dt=v_0T+\frac12rT^2,\quad D(T)=\int_0^T|v(t)|\,dt.\quad L_n=\sum_{i=0}^{n-1}v(i\Delta t)\Delta t,\quad\Delta t=T/n.$. Conditions required for a defined value (a case may test their violation): The velocity rule is affine and continuous throughout the integration interval. Time is nonnegative; reversing direction is permitted and a zero crossing must split magnitude areas. Net displacement equals positiveArea−negativeArea; total distance equals positiveArea+negativeArea. Partition count is an allowed integer choice; changing it changes the approximation, not the underlying motion. For time=0, all areas and finite sums are zero; for rate=0 use constant velocity without division by the rate. Scope: This model includes negative velocities and interior zero crossings, unlike the separate from-rest positive-acceleration specimen. It evaluates the integral analytically for a line; it is not a numerical integrator for arbitrary curves. Shape shading has units (m/s)×s=m, not square metres.

## Schema Version

0.1.0

## Id

math:concept:signed-accumulation

## Slug

signed-accumulation

## Type

concept

## Title

Signed accumulation

## Revision

0.1.1-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. All stories and worked quantities are original constructed teaching scenarios, not measurements or historical events. Historical priority and notation claims require separate claim-level evidence before publication.

## Aliases

- signed area
- net displacement
- Riemann-sum approximation

## Branches

- calculus
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Add positive and negative contributions while keeping net change distinct from total activity.

## Meaning

Area above zero adds to displacement; area below zero subtracts. The same motion can cover a long path and end where it began. Finite rectangles show an approximation beside the exact integral of a declared velocity law.

## Prerequisites

- required:
  - math:concept:function
- helpful:
  - math:concept:limit
  - math:concept:integral-accumulation
- depth:
  - math:concept:model-assumption

## Definition

- setting: A continuous affine velocity on [0,T]; a bounded specimen of signed definite integration.
- formal latex: v(t)=v_0+rt,\quad S(T)=\int_0^T v(t)\,dt=v_0T+\frac12rT^2,\quad D(T)=\int_0^T|v(t)|\,dt.\quad L_n=\sum_{i=0}^{n-1}v(i\Delta t)\Delta t,\quad\Delta t=T/n.
- signature:
  - initial: initial signed velocity v₀∈[−4,4] m/s
  - rate: constant acceleration r∈[−2,2] m/s²
  - time: elapsed T∈[0,6] s
  - partitions: one of the exact strings 4, 8, 16, 32; converted to integer n
  - output: exact netDisplacement S(T), in metres
  - positiveArea: integral of max(v(t),0), a nonnegative magnitude
  - negativeArea: integral of max(−v(t),0), a nonnegative magnitude
  - signedNegativeArea: −negativeArea
  - distance: positiveArea+negativeArea, in metres
  - leftSum: finite left-endpoint signed sum L_n, in metres
- conditions:
  - The velocity rule is affine and continuous throughout the integration interval.
  - Time is nonnegative; reversing direction is permitted and a zero crossing must split magnitude areas.
  - Net displacement equals positiveArea−negativeArea; total distance equals positiveArea+negativeArea.
  - Partition count is an allowed integer choice; changing it changes the approximation, not the underlying motion.
  - For time=0, all areas and finite sums are zero; for rate=0 use constant velocity without division by the rate.
- domain notes: This model includes negative velocities and interior zero crossings, unlike the separate from-rest positive-acceleration specimen. It evaluates the integral analytically for a line; it is not a numerical integrator for arbitrary curves. Shape shading has units (m/s)×s=m, not square metres.
- proof status: For the affine law integrate v₀+rt directly, or compute trapezoid signed area. Split at −v₀/r only if that time lies strictly inside the interval. Independent mathematical review pending.
- source refs:
  - source:openstax:definite-integral
  - source:openstax:net-change

## Grammar

- pronunciation: the integral of velocity from zero to T
- expression latex: S(T)=\int_0^T(v_0+rt)\,dt=v_0T+\tfrac12rT^2
- formation rule: Let n be the selected positive whole-number rectangle count; step=time/n; finalVelocity=initial+rate*time; output=netDisplacement=initial*time+0.5*rate*time*time. Integrate positive and negative pieces separately, splitting at t=−initial/rate only for an interior zero crossing. positiveArea>=0; negativeArea>=0; signedNegativeArea=−negativeArea; distance=positiveArea+negativeArea; netDisplacement=positiveArea−negativeArea. leftSum=netDisplacement−0.5*rate*time*time/n; rightSum=netDisplacement+0.5*rate*time*time/n; midpointSum=netDisplacement for this affine family. At time=0 all sums and areas are zero; at rate=0 use a constant line.
- precedence: Evaluate products and powers inside the affine velocity and antiderivative; sum signed rectangle contributions before comparing with the exact integral.
- symbols:
  - Item:
    - token: initial
    - role: initial velocity v₀
    - type: Declared real quantity or finite mode
  - Item:
    - token: rate
    - role: constant acceleration r
    - type: Declared real quantity or finite mode
  - Item:
    - token: time
    - role: interval endpoint T
    - type: Declared real quantity or finite mode
  - Item:
    - token: partitions
    - role: chosen integer rectangle count n
    - type: Declared real quantity or finite mode
  - Item:
    - token: S(T)
    - role: exact net displacement
    - type: Declared real quantity or finite mode
  - Item:
    - token: D(T)
    - role: total distance
    - type: Declared real quantity or finite mode
  - Item:
    - token: L_n
    - role: finite left-endpoint approximation
    - type: Declared real quantity or finite mode
- ast:
  - id: ast:signed-accumulation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:time
      - kind: variable
      - symbol: time
      - type: Declared control
      - scope ref: scope:signed-accumulation:model
    - Item:
      - id: n:initial
      - kind: variable
      - symbol: initial
      - type: Declared control
      - scope ref: scope:signed-accumulation:model
    - Item:
      - id: n:rate
      - kind: variable
      - symbol: rate
      - type: Declared control
      - scope ref: scope:signed-accumulation:model
    - Item:
      - id: n:partitions
      - kind: variable
      - symbol: partitions
      - type: Declared control
      - scope ref: scope:signed-accumulation:model
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: n=Number(partitions); step=time/n; finalVelocity=initial+rate*time; output=netDisplacement=initial*time+0.5*rate*time*time. Integrate positive and negative pieces separately, splitting at t=−initial/rate only for an interior zero crossing. positiveArea>=0; negativeArea>=0; signedNegativeArea=−negativeArea; distance=positiveArea+negativeArea; netDisplacement=positiveArea−negativeArea. leftSum=netDisplacement−0.5*rate*time*time/n; rightSum=netDisplacement+0.5*rate*time*time/n; midpointSum=netDisplacement for this affine family. At time=0 all sums and areas are zero; at rate=0 use a constant line.
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:time
      - type: Remaining controls → primary output
    - Item:
      - id: n:partial1
      - kind: apply
      - function: n:partial0
      - argument: n:initial
      - type: Remaining controls → primary output
    - Item:
      - id: n:partial2
      - kind: apply
      - function: n:partial1
      - argument: n:rate
      - type: Remaining controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial2
      - argument: n:partitions
      - type: Real or explicit undefined status
  - scopes:
    - Item:
      - id: scope:signed-accumulation:model
      - kind: modelExpression
      - free variables:
        - time
        - initial
        - rate
        - partitions
      - domain condition: n=Number(partitions); step=time/n; finalVelocity=initial+rate*time; output=netDisplacement=initial*time+0.5*rate*time*time. Integrate positive and negative pieces separately, splitting at t=−initial/rate only for an interior zero crossing. positiveArea>=0; negativeArea>=0; signedNegativeArea=−negativeArea; distance=positiveArea+negativeArea; netDisplacement=positiveArea−negativeArea. leftSum=netDisplacement−0.5*rate*time*time/n; rightSum=netDisplacement+0.5*rate*time*time/n; midpointSum=netDisplacement for this affine family. At time=0 all sums and areas are zero; at rate=0 use a constant line.
- parse errors:
  - Item:
    - input: Report the signed integral as total distance across a reversal
    - status: quantity_mismatch
    - reason: Total distance integrates speed |v| and adds magnitudes instead of canceling.
  - Item:
    - input: Treat 8 rectangles as the exact definition of an integral
    - status: approximation_mismatch
    - reason: The finite sum is an approximation; the integral is the limiting signed accumulation.
  - Item:
    - input: partitions=7.5
    - status: invalid_parameters
    - reason: A fractional rectangle count is not a permitted discrete choice.
- ast coverage: This tree applies the explicitly named bounded model to its controls. It is structural metadata; it does not parse arbitrary formulas or establish a theorem. The formal definition is broader than the illustrated family.
- output symbol bindings:
  - S(T): output
  - net displacement: netDisplacement
  - positive contribution: positiveArea
  - negative magnitude: negativeArea
  - negative signed contribution: signedNegativeArea
  - total distance: distance
  - left sum: leftSum
  - right sum: rightSum
  - midpoint sum: midpointSum
  - rectangle width: step
  - end velocity: finalVelocity

## Properties

- Item:
  - claim: Net displacement can be zero while total distance is positive.
  - status: author-derived for stated conditions; independent review pending
  - conditions: Velocity changes sign with equal positive and negative area magnitudes.
  - derivation: S=A₊−A₋=0 but D=A₊+A₋>0.
  - example ref: math:example:signed-accumulation:out-and-back
- Item:
  - claim: A left sum converges to the affine integral as the partition count grows.
  - status: author-derived for stated conditions; independent review pending
  - conditions: Fixed finite T, initial and rate; uniform partitions.
  - derivation: L_n=S−rT²/(2n), so |L_n−S|=|r|T²/(2n) tends to zero.
- Item:
  - claim: For this affine family the midpoint sum is exact.
  - status: author-derived for stated conditions; independent review pending
  - conditions: Uniform intervals and exact arithmetic.
  - derivation: On each interval the midpoint velocity is the mean endpoint velocity, giving the exact trapezoid area.

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:integral-accumulation
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: The positive from-rest triangle is a special case without negative cancellation.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:limit
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: Finite signed sums approach a definite integral as their maximum interval width tends to zero.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:derivative
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: For continuous velocity the derivative of accumulated displacement recovers that velocity.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:signed-accumulation:out-and-back
  - title: A cart returns home
  - role: applied_model
  - question: A cart starts at 2 m/s and slows by 1 m/s each second for 4 s, continuing backward after it stops. How can net motion be zero when it has moved?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
  - inputs:
    - time: 4
    - initial: 2
    - rate: -1
    - partitions: 8
  - steps:
    - Item:
      - index: 1
      - expression: v(t)=2−t; v(t)=0 at t=2 s
      - reason: Locate the direction reversal before adding areas.
    - Item:
      - index: 2
      - expression: positive area=½×2×2=2 m; negative magnitude=½×2×2=2 m
      - reason: Read the two velocity–time triangles with separate signs.
    - Item:
      - index: 3
      - expression: net=2−2=0 m; distance=2+2=4 m
      - reason: Subtract signed contributions for displacement; add magnitudes for travel.
    - Item:
      - index: 4
      - expression: Δt=4/8=0.5 s; left sum=1 m; exact integral=0 m
      - reason: Keep the finite approximation visibly distinct from the exact result.
  - result:
    - exact: net 0 m; distance 4 m
    - net displacement: 0
    - distance: 4
    - left sum: 1
  - interpretation: The cart goes 2 m forward and then 2 m backward. A zero signed area means it returns to its start, not that it stayed still.
  - independent check:
    - method: Average velocity and symmetry
    - expected: (v(0)+v(4))/2=(2−2)/2=0, giving net 0; the two congruent triangles each have area 2.
  - limits: The cart is permitted to reverse. A real controller might stop it at zero velocity; that would be a different model.
  - preset:
    - time: 4
    - initial: 2
    - rate: -1
    - partitions: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
- Item:
  - id: math:example:signed-accumulation:forward
  - title: An accelerating forward cart
  - role: applied_model
  - question: A cart starts at 1 m/s and gains 1 m/s every second for 2 s. What displacement accumulates?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
  - inputs:
    - time: 2
    - initial: 1
    - rate: 1
    - partitions: 4
  - steps:
    - Item:
      - index: 1
      - expression: v(2)=1+1×2=3 m/s
      - reason: Determine the final height of the velocity trapezoid.
    - Item:
      - index: 2
      - expression: net=1×2+½×1×2²=4 m
      - reason: Add a rectangle and a triangle.
    - Item:
      - index: 3
      - expression: left sum=0.5×(1+1.5+2+2.5)=3.5 m
      - reason: Use each interval’s left velocity once.
  - result:
    - exact: net 4 m; distance 4 m
    - net displacement: 4
    - distance: 4
    - left sum: 3.5
  - interpretation: All velocities are positive, so net displacement and total distance agree. Four left rectangles underestimate this increasing line.
  - independent check:
    - method: Trapezoid area
    - expected: Average velocity (1+3)/2=2 m/s times 2 s gives 4 m.
  - limits: Positive velocity throughout is what lets the integral equal total distance here.
  - preset:
    - time: 2
    - initial: 1
    - rate: 1
    - partitions: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
- Item:
  - id: math:example:signed-accumulation:backward
  - title: Steady travel behind the origin
  - role: applied_model
  - question: A cart moves at −2 m/s for 3 s. What do the signed area and total distance mean?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
  - inputs:
    - time: 3
    - initial: -2
    - rate: 0
    - partitions: 8
  - steps:
    - Item:
      - index: 1
      - expression: v(t)=−2 m/s
      - reason: The acceleration is zero, so the velocity graph is a horizontal line below zero.
    - Item:
      - index: 2
      - expression: net=−2×3=−6 m
      - reason: Keep the negative direction when accumulating.
    - Item:
      - index: 3
      - expression: distance=|−2|×3=6 m
      - reason: Travel length uses speed, the magnitude of velocity.
  - result:
    - exact: net −6 m; distance 6 m
    - net displacement: -6
    - distance: 6
    - left sum: -6
  - interpretation: The cart ends 6 m behind the origin after travelling 6 m. A negative displacement is a direction, not a negative path length.
  - independent check:
    - method: Eight rectangles
    - expected: Each interval is 3/8 s and contributes −2×3/8=−0.75 m; eight give −6 m exactly.
  - limits: The left sum is exact because velocity is constant, not because every finite partition is automatically exact.
  - preset:
    - time: 3
    - initial: -2
    - rate: 0
    - partitions: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
- Item:
  - id: math:example:signed-accumulation:reverse-to-home
  - title: A cart first moves backward
  - role: applied_model
  - question: A cart starts at −2 m/s and accelerates forward at 1 m/s² for 4 s. Where does it end?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
  - inputs:
    - time: 4
    - initial: -2
    - rate: 1
    - partitions: 16
  - steps:
    - Item:
      - index: 1
      - expression: v(t)=−2+t; zero crossing at t=2 s
      - reason: Identify the initial backward section and the later forward section.
    - Item:
      - index: 2
      - expression: negative magnitude=2 m; positive area=2 m
      - reason: Separate the two congruent triangles by their side of zero.
    - Item:
      - index: 3
      - expression: net=−2+2=0 m; distance=2+2=4 m
      - reason: Signed cancellation returns the cart to zero after real travel.
  - result:
    - exact: net 0 m; distance 4 m
    - net displacement: 0
    - distance: 4
  - interpretation: Changing the sign order changes the path even though the final displacement matches the other out-and-back case.
  - independent check:
    - method: Position values
    - expected: s(t)=−2t+½t² gives s(2)=−2 m and s(4)=0 m; the path length is 2+2=4 m.
  - limits: A final net value alone cannot recover the order or amount of travel; inspect the signed curve.
  - preset:
    - time: 4
    - initial: -2
    - rate: 1
    - partitions: 16
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
- Item:
  - id: math:example:signed-accumulation:unequal-return
  - title: A shorter return leg
  - role: applied_model
  - question: A cart starts at 4 m/s and accelerates at −2 m/s² for 3 s. Does it get back to its starting point?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.
  - inputs:
    - time: 3
    - initial: 4
    - rate: -2
    - partitions: 32
  - steps:
    - Item:
      - index: 1
      - expression: v(t)=4−2t=0 at t=2 s; v(3)=−2 m/s
      - reason: The reversal occurs before the interval ends.
    - Item:
      - index: 2
      - expression: positive area=½×2×4=4 m; negative magnitude=½×1×2=1 m
      - reason: The forward and backward triangles have different sizes.
    - Item:
      - index: 3
      - expression: net=4−1=3 m; distance=4+1=5 m
      - reason: Signed cancellation is incomplete, leaving a positive displacement.
  - result:
    - exact: net 3 m; distance 5 m
    - net displacement: 3
    - distance: 5
  - interpretation: The cart finishes 3 m ahead of the origin after travelling 5 m. More rectangles refine the approximation but do not change this exact answer.
  - independent check:
    - method: Endpoint average
    - expected: Average velocity (4+(−2))/2=1 m/s times 3 s gives net 3 m; splitting at t=2 gives distance 5 m.
  - limits: The endpoint-average shortcut gives the exact integral for an affine velocity, but total distance still requires the sign split.
  - preset:
    - time: 3
    - initial: 4
    - rate: -2
    - partitions: 32
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - Motion follows a single signed straight coordinate measured in metres, with time in seconds.
    - Initial velocity is in m/s and rate is constant acceleration in m/s²; v(t)=initial+rate×t on the whole stated interval.
    - The initial position is zero; displacement and total distance are calculated separately.
    - A finite left-endpoint sum is an approximation; the exact integral follows from the affine velocity law.

## Interactive

- component id: signed-accumulation-visual-model
- renderer id: signed-accumulation-visual-model
- renderer version: 1.0.0
- model id: signed-accumulation-visual-model
- model revision: 1.0.0
- expression id: ast:signed-accumulation:expression
- interaction status: implemented
- description: Signed rectangles and two continuous shaded regions feed the same net displacement on a cart track; an independent distance label preserves travel that cancels in the net.
- controls:
  - Item:
    - id: time
    - type: number
    - default: 4
    - min: 0
    - max: 6
    - slider min: 0
    - slider max: 6
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: initial
    - type: number
    - default: 2
    - min: -4
    - max: 4
    - slider min: -4
    - slider max: 4
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: rate
    - type: number
    - default: -1
    - min: -2
    - max: 2
    - slider min: -2
    - slider max: 2
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: partitions
    - type: enum
    - default: 8
    - values:
      - 4
      - 8
      - 16
      - 32
- expected cases:
  - Item:
    - input:
      - time: 4
      - initial: 2
      - rate: -1
      - partitions: 8
    - output: 0
  - Item:
    - input:
      - time: 0
      - initial: 4
      - rate: -2
      - partitions: 4
    - output: 0
  - Item:
    - input:
      - time: 6
      - initial: 4
      - rate: 2
      - partitions: 32
    - output: 60
  - Item:
    - input:
      - time: 6
      - initial: -4
      - rate: -2
      - partitions: 16
    - output: -60
  - Item:
    - input:
      - time: 3
      - initial: -2
      - rate: 0
      - partitions: 8
    - output: -6
  - Item:
    - input:
      - time: 2
      - initial: 1
      - rate: 1
      - partitions: 4
    - output: 4
  - Item:
    - input:
      - time: 3
      - initial: 4
      - rate: -2
      - partitions: 32
    - output: 3
  - Item:
    - input:
      - time: 4
      - initial: -2
      - rate: 1
      - partitions: 16
    - output: 0
  - Item:
    - input:
      - time: -1
      - initial: 2
      - rate: -1
      - partitions: 8
    - status: invalid_parameters
  - Item:
    - input:
      - time: 4
      - initial: 2
      - rate: -2.1
      - partitions: 8
    - status: invalid_parameters
- compute: n=Number(partitions); step=time/n; finalVelocity=initial+rate*time; output=netDisplacement=initial*time+0.5*rate*time*time. Integrate positive and negative pieces separately, splitting at t=−initial/rate only for an interior zero crossing. positiveArea>=0; negativeArea>=0; signedNegativeArea=−negativeArea; distance=positiveArea+negativeArea; netDisplacement=positiveArea−negativeArea. leftSum=netDisplacement−0.5*rate*time*time/n; rightSum=netDisplacement+0.5*rate*time*time/n; midpointSum=netDisplacement for this affine family. At time=0 all sums and areas are zero; at rate=0 use a constant line.
- numeric tolerance: 1e-10
- invariants:
  - The velocity rule is affine and continuous throughout the integration interval.
  - Time is nonnegative; reversing direction is permitted and a zero crossing must split magnitude areas.
  - Net displacement equals positiveArea−negativeArea; total distance equals positiveArea+negativeArea.
  - Partition count is an allowed integer choice; changing it changes the approximation, not the underlying motion.
  - For time=0, all areas and finite sums are zero; for rate=0 use constant velocity without division by the rate.
- limits:
  - The analytic law is constant acceleration on one axis; real friction, controller stops and acceleration changes require another module.
  - Finite rectangle count controls an approximation. It never changes the exact integral or the cart’s declared motion.
  - The midpoint sum is exact here because velocity is affine; that is not a general guarantee for curved velocity.
  - NegativeArea is stored as a positive magnitude; signedNegativeArea carries its negative sign.
- fallback: Pause motion and read the same labeled diagram, substitutions and original worked steps. The graph and exact numeric result remain available.
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
  - prompt: If net displacement is zero, did the cart stay still?
  - answer: Not necessarily. Equal forward and backward travel cancel in displacement but add to distance.
- Item:
  - prompt: Does choosing 32 rectangles change the cart’s exact final position?
  - answer: No. It refines the finite approximation while the same velocity rule fixes the exact integral.

## Representations

- Item:
  - kind: signed geometry
  - description: Continuous regions above and below zero encode opposite contributions; finite left rectangles remain visually separate from the exact region.
- Item:
  - kind: motion
  - description: A cart follows exact integrated position, with a separate distance readout for accumulated travel.
- Item:
  - kind: graph
  - description: The velocity–time graph shows rates and signed areas; the net-displacement graph shows the accumulated result as time changes.

## Applications

- Item:
  - context: Out-and-back cart motion
  - mapping: Integrate signed velocity to find the ending coordinate while separately integrating speed for travel length.
  - limitations: Motion is one-dimensional with constant acceleration; a real stop controller is a different rule.
  - evidence kind: constructed_example
  - example ref: math:example:signed-accumulation:out-and-back
- Item:
  - context: Backward conveyor travel
  - mapping: A constant negative velocity accumulates negative displacement while total distance stays positive.
  - limitations: The sign depends on the chosen axis; the path length is independent of that direction convention.
  - evidence kind: constructed_example
  - example ref: math:example:signed-accumulation:backward

## Source Refs

- source:openstax:definite-integral
- source:openstax:net-change

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original worked scenarios, explicit domains and failures, bounded model fixtures and shared modular playground bindings.

## Referenced source registry

- Source ID: source:openstax:net-change. [Calculus Volume 1, 5.4 Integration Formulas and the Net Change Theorem](https://openstax.org/books/calculus-volume-1/pages/5-4-integration-formulas-and-the-net-change-theorem). Locator: Net Change Theorem; velocity, displacement and distance distinction. Verification: Definition-level mathematics inspected 2026-10-23 via the official publisher or university page; original examples are not independently reviewed.. Rights: Reference only. Explanations, scenarios and worked examples are originally authored; no source exercise bank or prose copied.

- Source ID: source:openstax:definite-integral. [Calculus Volume 1, 5.2 The Definite Integral](https://openstax.org/books/calculus-volume-1/pages/5-2-the-definite-integral). Locator: Definition and Notation; signed regular Riemann sums; integrability of continuous functions; net area. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
