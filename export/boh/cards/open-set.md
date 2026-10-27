---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:open-set", "id": "math:concept:open-set", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:open-set", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "f48f440ed45b54b5a0f9f177e36d3d36f97ab8116b8bd46b27da42c8a7ea790e"}, "purpose": "Move a query point and separate its membership, the existence of some neighborhood, the fit of one chosen neighborhood and openness of the whole set.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "f48f440ed45b54b5a0f9f177e36d3d36f97ab8116b8bd46b27da42c8a7ea790e", "status": "draft", "title": "Open sets and neighborhoods", "topics": ["mathematics", "topology-space", "geometry", "analysis", "open ball", "interior point", "neighborhood containment", "signed boundary clearance"], "type": "reference", "updated": "2026-10-27T00:00:00Z", "version": "0.1.0-draft"}
---

# Open sets and neighborhoods

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:open-set; revision 0.1.0-draft. Setting: Euclidean neighborhoods around points on the horizontal diameter of a radius-two disk in the ambient plane ℝ². Expression: $U_{<}=\{z\in\mathbb R^2:\|z\|<2\,\mathrm{cm}\},\quad U_{\le}=\{z:\|z\|\le2\,\mathrm{cm}\},\quad B_\varepsilon(p)=\{z:\|z-p\|<\varepsilon\},\quad C(x)=2-|x|.$. Conditions required for a defined value (a case may test their violation): The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm. The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded. Point membership is strict at the open disk rim and inclusive at the closed disk rim. An interior point, for either disk, has |x|<2 and positive clearance. The chosen open ball fits when |x|+ε≤2, including equality even for the open disk. At tangency the touching point is excluded from the inner open ball. For an interior point, the constructive radius C(x)/2 is positive and works, even when it is below the live slider minimum. Failure of the selected radius does not imply absence of every possible radius. Global openness depends on the whole selected set, not this point or radius. In general a set may be both open and closed, or neither; the two labels are not universal opposites. Scope: The primary output is signed clearance, which may be positive, zero or negative. It is not a radius or an openness truth value. The disk boundary choice, point membership, interior status and chosen-ball containment are four separate notions.

## Schema Version

0.1.0

## Id

math:concept:open-set

## Slug

open-set

## Type

concept

## Title

Open sets and neighborhoods

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

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- open ball
- interior point
- neighborhood containment
- signed boundary clearance

## Branches

- topology-space
- geometry
- analysis

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Move a query point and separate its membership, the existence of some neighborhood, the fit of one chosen neighborhood and openness of the whole set.

## Meaning

A set in a metric space is open when every point of the set has a positive-radius open ball contained in it. That condition concerns the existence of some sufficiently small ball, not whether one currently chosen radius fits. A closed disk has interior points too, but its included rim points have no positive ball contained in the disk.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:euclidean-distance
  - math:concept:quantifier
- depth:
  - math:concept:topological-space
  - math:concept:topological-continuity

## Definition

- setting: Euclidean neighborhoods around points on the horizontal diameter of a radius-two disk in the ambient plane ℝ².
- formal latex: U_{<}=\{z\in\mathbb R^2:\|z\|<2\,\mathrm{cm}\},\quad U_{\le}=\{z:\|z\|\le2\,\mathrm{cm}\},\quad B_\varepsilon(p)=\{z:\|z-p\|<\varepsilon\},\quad C(x)=2-|x|.
- signature:
  - U: Selected radius-two target disk.
  - p: Selected point (x,0).
  - x: Horizontal coordinate of p.
  - ε: Chosen open-neighborhood radius.
  - Bε(p): Open ball about p.
  - ‖p‖: Distance from p to the origin.
  - C(x): Signed clearance to the disk boundary.
  - b: Selected open or closed disk boundary.
- conditions:
  - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
  - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - Point membership is strict at the open disk rim and inclusive at the closed disk rim. An interior point, for either disk, has |x|<2 and positive clearance.
  - The chosen open ball fits when |x|+ε≤2, including equality even for the open disk. At tangency the touching point is excluded from the inner open ball.
  - For an interior point, the constructive radius C(x)/2 is positive and works, even when it is below the live slider minimum. Failure of the selected radius does not imply absence of every possible radius.
  - Global openness depends on the whole selected set, not this point or radius. In general a set may be both open and closed, or neither; the two labels are not universal opposites.
- domain notes: The primary output is signed clearance, which may be positive, zero or negative. It is not a radius or an openness truth value. The disk boundary choice, point membership, interior status and chosen-ball containment are four separate notions.
- proof status: Definition-level sources and original restricted-family arguments; independent review pending.
- source refs:
  - source:cmu:metric-open-sets

## Grammar

- pronunciation: Open sets and neighborhoods
- expression latex: U_{<}=\{z\in\mathbb R^2:\|z\|<2\,\mathrm{cm}\},\quad U_{\le}=\{z:\|z\|\le2\,\mathrm{cm}\},\quad B_\varepsilon(p)=\{z:\|z-p\|<\varepsilon\},\quad C(x)=2-|x|.
- formation rule: Choose the open or closed disk of radius 2 cm, and p=(x,0) with horizontal coordinate measured in centimetres. The selected neighborhood is the open ball Bε(p) of positive radius ε. Its signed clearance is C(x)=2−|x| cm. For either disk choice, Bε(p) is contained exactly when |x|+ε≤2. A positive contained ball exists exactly when |x|<2; the full open disk is open, while the full closed disk is not open in ℝ².
- precedence: First distinguish the selected set and point. Then compare the chosen radius with clearance; keep that one-ball containment test separate from existence of some positive ball and the global openness condition.
- symbols:
  - Item:
    - token: U
    - role: Selected radius-two target disk
    - type: Subset of ℝ²
  - Item:
    - token: p
    - role: Selected point (x,0)
    - type: Plane point
  - Item:
    - token: x
    - role: Horizontal coordinate of p
    - type: Centimetres
  - Item:
    - token: ε
    - role: Chosen open-neighborhood radius
    - type: Positive centimetres
  - Item:
    - token: Bε(p)
    - role: Open ball about p
    - type: Subset of ℝ²
  - Item:
    - token: ‖p‖
    - role: Distance from p to the origin
    - type: Nonnegative centimetres
  - Item:
    - token: C(x)
    - role: Signed clearance to the disk boundary
    - type: Centimetres
  - Item:
    - token: b
    - role: Selected open or closed disk boundary
    - type: One of two stated set choices
- ast:
  - id: ast:open-set:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:center
      - kind: variable
      - type: Declared model input
      - symbol: x
      - scope ref: scope:open-set:expression
    - Item:
      - id: n:radius
      - kind: variable
      - type: Declared model input
      - symbol: ε
      - scope ref: scope:open-set:expression
    - Item:
      - id: n:boundary
      - kind: variable
      - type: Declared model input
      - symbol: b
      - scope ref: scope:open-set:expression
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried rule for the stated executable family
      - ref: Choose the open or closed disk of radius 2 cm, and p=(x,0) with horizontal coordinate measured in centimetres. The selected neighborhood is the open ball Bε(p) of positive radius ε. Its signed clearance is C(x)=2−|x| cm. For either disk choice, Bε(p) is contained exactly when |x|+ε≤2. A positive contained ball exists exactly when |x|<2; the full open disk is open, while the full closed disk is not open in ℝ².
    - Item:
      - id: n:bound-0
      - kind: apply
      - type: Partially applied declared rule
      - function: n:rule
      - argument: n:center
    - Item:
      - id: n:bound-1
      - kind: apply
      - type: Partially applied declared rule
      - function: n:bound-0
      - argument: n:radius
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared primary result
      - function: n:bound-1
      - argument: n:boundary
  - scopes:
    - Item:
      - id: scope:open-set:expression
      - kind: modelExpression
      - free variables:
        - x
        - ε
        - b
      - domain condition: Euclidean neighborhoods around points on the horizontal diameter of a radius-two disk in the ambient plane ℝ².
- parse errors:
  - Item:
    - input: Use a strict inequality for open-ball tangency
    - status: boundary error
    - reason: When |x|+ε=2, the inner open ball excludes the touching point, so it remains inside the open target disk.
  - Item:
    - input: Conclude the set is not open because the selected ball fails
    - status: quantifier error
    - reason: Openness requires some positive fitting radius for each included point, not every chosen radius.
  - Item:
    - input: Call a closed-disk rim point interior because it belongs to U
    - status: membership error
    - reason: An included rim point has no positive open ball contained in the disk.
- ast coverage: A typed application outline of the fixed executable rule. Displayed logical formulas and vector notation have the meanings stated in the signature; this outline is not a general formula parser or proof calculus.
- output symbol bindings:
  - p: center
  - x: center
  - ε: radius
  - C(x): clearance

## Properties

- Item:
  - claim: An open neighborhood tangent to the open target disk is contained.
  - conditions: Use a positive radius with |x|+ε=2.
  - derivation: For every z in the inner ball, ‖z‖≤|x|+‖z−p‖<|x|+ε=2, so z belongs to the open target disk.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:open-set:tangent-open-ball
- Item:
  - claim: Interior status is equivalent to positive clearance for either disk choice.
  - conditions: Use the Euclidean disk family and the ambient plane.
  - derivation: If C>0, radius C/2 works. At a rim point or outside, every positive open ball contains an outward point outside the disk.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:open-set:closed-rim
- Item:
  - claim: Failure of the chosen radius does not refute global openness.
  - conditions: The selected point is strictly inside the open disk.
  - derivation: A smaller positive radius such as C/2 may fit even when the displayed ε exceeds C.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:open-set:oversized-selected-ball

## History

- status: source_gap
- claims:

- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Membership in the selected target set differs from being an interior point.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: Openness uses a for-every-point/there-exists-radius condition.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:euclidean-distance
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The norm and open-ball test use Euclidean distance in the ambient plane.
  - target status: planned
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quantifier-scope
  - type: supports
  - conditions: Use each connected card under its own stated domain and interpretation.
  - reason: The existence of some fitting radius must be distinguished from the choice of one fixed radius.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:open-set:fitting-neighborhood
  - title: Check one contained query neighborhood
  - role: applied_model
  - question: At x=0.5 cm and ε=0.75 cm, does the open neighborhood fit?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - inputs:
    - center: 0.5
    - radius: 0.75
    - boundary: open
  - steps:
    - Item:
      - index: 1
      - expression: C=2−0.5=1.5 cm.
      - reason: Compute the signed boundary clearance.
    - Item:
      - index: 2
      - expression: |x|+ε=0.5+0.75=1.25 cm≤2 cm.
      - reason: Apply the open-ball containment criterion.
  - result:
    - exact: Clearance=1.5 cm; center inside; interior=True; chosen ball fits
  - interpretation: The selected query neighborhood is one of the positive balls available at this interior point.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: For any point in the ball, its origin distance is less than 0.5+0.75=1.25 cm<2 cm.
  - limits: This verifies the selected configuration, separately from the whole-set definition.
  - preset:
    - center: 0.5
    - radius: 0.75
    - boundary: open
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
- Item:
  - id: math:example:open-set:tangent-open-ball
  - title: Include tangency for an open inner ball
  - role: applied_model
  - question: Does x=1.25 cm, ε=0.75 cm fit inside the open disk?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - inputs:
    - center: 1.25
    - radius: 0.75
    - boundary: open
  - steps:
    - Item:
      - index: 1
      - expression: |x|+ε=1.25+0.75=2 cm.
      - reason: The outer and neighborhood boundaries are tangent.
    - Item:
      - index: 2
      - expression: If ‖z−p‖<0.75 cm, then ‖z‖≤1.25+‖z−p‖<2 cm.
      - reason: Use the strict inner open-ball condition.
  - result:
    - exact: Clearance=0.75 cm; chosen ball fits at equality
  - interpretation: The excluded touching point is not a counterexample to containment.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The triangle inequality gives a strict origin-distance bound for every point actually in the inner ball.
  - limits: A closed inner ball would include the touching point and change this open-target conclusion.
  - preset:
    - center: 1.25
    - radius: 0.75
    - boundary: open
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
- Item:
  - id: math:example:open-set:oversized-selected-ball
  - title: Keep openness when one chosen radius fails
  - role: applied_model
  - question: At x=1.5 cm and ε=0.75 cm, what fails and what remains true?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - inputs:
    - center: 1.5
    - radius: 0.75
    - boundary: open
  - steps:
    - Item:
      - index: 1
      - expression: C=2−1.5=0.5 cm, which is positive.
      - reason: The point is an interior point.
    - Item:
      - index: 2
      - expression: 1.5+0.75=2.25>2, so the chosen ball fails.
      - reason: This specific radius is too large.
    - Item:
      - index: 3
      - expression: The point z=(2.125,0) cm lies 0.625 cm from p and outside U.
      - reason: Use a witness inside the chosen ball.
    - Item:
      - index: 4
      - expression: A smaller radius C/2=0.25 cm fits.
      - reason: Existence of another positive radius preserves the interior condition.
  - result:
    - exact: Clearance=0.5 cm; interior=True; chosen ball fails; U remains open
  - interpretation: A failed selected neighborhood does not refute the every-point/some-radius definition.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The witness has 0.625<0.75 cm distance from p and 2.125>2 cm distance from the origin.
  - limits: The outside witness refutes only this chosen neighborhood’s containment.
  - preset:
    - center: 1.5
    - radius: 0.75
    - boundary: open
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
- Item:
  - id: math:example:open-set:closed-rim
  - title: Separate membership from interior at a closed rim
  - role: applied_model
  - question: What happens at x=2 cm in the closed disk?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - inputs:
    - center: 2
    - radius: 0.05
    - boundary: closed
  - steps:
    - Item:
      - index: 1
      - expression: The point belongs to U because ‖p‖=2 cm≤2 cm.
      - reason: The selected disk includes its rim.
    - Item:
      - index: 2
      - expression: C=0, so no positive neighborhood radius can fit.
      - reason: Every outward displacement leaves the disk.
    - Item:
      - index: 3
      - expression: The point z=(2.025,0) cm lies inside the chosen 0.05 cm ball but outside U.
      - reason: Half the chosen radius gives an explicit outward witness.
  - result:
    - exact: Clearance=0 cm; membership=True; interior=False; chosen ball fails
  - interpretation: The closed disk contains this point but is not open in the ambient plane.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: For every ε>0, the outward point at distance ε/2 is in Bε(p) and has origin distance greater than 2 cm.
  - limits: The argument concerns neighborhoods in the ambient ℝ², not a relative subspace topology.
  - preset:
    - center: 2
    - radius: 0.05
    - boundary: closed
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
- Item:
  - id: math:example:open-set:below-slider-minimum
  - title: Use a mathematical witness smaller than the live radius range
  - role: applied_model
  - question: At x=1.99 cm and selected ε=0.05 cm, does a smaller positive ball exist?
  - setting: An originally authored workshop scenario with stipulated quantities and rules.
  - assumptions:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - inputs:
    - center: 1.99
    - radius: 0.05
    - boundary: open
  - steps:
    - Item:
      - index: 1
      - expression: C=2−1.99=0.01 cm>0.
      - reason: The selected point is interior.
    - Item:
      - index: 2
      - expression: The chosen radius 0.05 cm exceeds the clearance.
      - reason: That selected ball fails.
    - Item:
      - index: 3
      - expression: Choose ε*=C/2=0.005 cm. Then 1.99+0.005=1.995<2 cm.
      - reason: A valid existence witness need not lie in the slider’s selected-radius range.
  - result:
    - exact: Clearance=0.01 cm; interior=True; chosen ball fails; ε*=0.005 cm works
  - interpretation: The control range does not redefine the mathematical neighborhood condition.
  - independent check:
    - method: Separate logical or exact arithmetic check
    - expected: The explicit positive radius gives a contained ball by the triangle inequality.
  - limits: The smaller radius is a mathematical witness, not a new allowed selected slider value.
  - preset:
    - center: 1.99
    - radius: 0.05
    - boundary: open
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
    - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.

## Interactive

- component id: component:open-set
- renderer id: open-set-visual-model
- renderer version: 1
- model id: open-set-visual-model
- model revision: 1
- expression id: ast:open-set:expression
- interaction status: implemented
- description: The radius-two target disk and selected open neighborhood use one centimetre scale. The point, boundary convention, signed clearance and any valid outside witness make the local tests visible.
- controls:
  - Item:
    - id: center
    - type: number
    - default: 0.5
    - min: -3
    - max: 3
    - step: 0.01
  - Item:
    - id: radius
    - type: number
    - default: 0.75
    - min: 0.05
    - max: 1.5
    - step: 0.01
  - Item:
    - id: boundary
    - type: enum
    - default: open
    - values:
      - open
      - closed
- expected cases:
  - Item:
    - input:
      - center: 0.5
      - radius: 0.75
      - boundary: open
    - output: 1.5
  - Item:
    - input:
      - center: 1.5
      - radius: 0.75
      - boundary: open
    - output: 0.5
  - Item:
    - input:
      - center: 1.25
      - radius: 0.75
      - boundary: open
    - output: 0.75
  - Item:
    - input:
      - center: 1.25
      - radius: 0.75
      - boundary: closed
    - output: 0.75
  - Item:
    - input:
      - center: 2
      - radius: 0.05
      - boundary: open
    - output: 0
  - Item:
    - input:
      - center: 2
      - radius: 0.05
      - boundary: closed
    - output: 0
  - Item:
    - input:
      - center: 2.5
      - radius: 0.5
      - boundary: closed
    - output: -0.5
  - Item:
    - input:
      - center: -1.5
      - radius: 0.5
      - boundary: open
    - output: 0.5
  - Item:
    - input:
      - center: 0
      - radius: 1.5
      - boundary: open
    - output: 2
  - Item:
    - input:
      - center: 0.5
      - radius: 0
      - boundary: open
    - status: invalid_parameters
  - Item:
    - input:
      - center: 3.1
      - radius: 0.75
      - boundary: open
    - status: invalid_parameters
  - Item:
    - input:
      - center: 0.5
      - radius: 0.75
      - boundary: half-open
    - status: invalid_parameters
- compute: Choose the open or closed disk of radius 2 cm, and p=(x,0) with horizontal coordinate measured in centimetres. The selected neighborhood is the open ball Bε(p) of positive radius ε. Its signed clearance is C(x)=2−|x| cm. For either disk choice, Bε(p) is contained exactly when |x|+ε≤2. A positive contained ball exists exactly when |x|<2; the full open disk is open, while the full closed disk is not open in ℝ².
- numeric tolerance: 1e-10
- invariants:
  - The ambient space is ℝ² with Euclidean distance. U is either the disk ‖z‖<2 cm or the disk ‖z‖≤2 cm; p=(x,0) has x between −3 and 3 cm.
  - The selected neighborhood Bε(p) is an open ball, using strict distance less than ε. The live radius lies from 0.05 to 1.5 cm; radius zero is excluded.
  - Point membership is strict at the open disk rim and inclusive at the closed disk rim. An interior point, for either disk, has |x|<2 and positive clearance.
  - The chosen open ball fits when |x|+ε≤2, including equality even for the open disk. At tangency the touching point is excluded from the inner open ball.
  - For an interior point, the constructive radius C(x)/2 is positive and works, even when it is below the live slider minimum. Failure of the selected radius does not imply absence of every possible radius.
  - Global openness depends on the whole selected set, not this point or radius. In general a set may be both open and closed, or neither; the two labels are not universal opposites.
- limits:
  - The live family consists of two disks and points on their horizontal diameter, rather than arbitrary metric spaces or set expressions.
  - The selected neighborhood is open; the tangency rule would differ for a closed neighborhood inside an open target disk.
  - The radius slider range limits the selected example, not the mathematical existence of a smaller positive neighborhood.
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
  - prompt: Can the set remain open while this chosen neighborhood fails?
  - answer: Yes. An interior point admits a sufficiently small positive radius even if a larger selected radius extends outside the set.
- Item:
  - prompt: Does a closed disk have interior points?
  - answer: Yes. Points strictly inside the rim admit positive contained balls. The included rim points prevent the entire closed disk from being open in ℝ².

## Representations

- Item:
  - kind: geometry
  - description: The radius-two target disk and selected open neighborhood use one centimetre scale. The point, boundary convention, signed clearance and any valid outside witness make the local tests visible.
- Item:
  - kind: graph
  - description: The continuous signed-clearance graph C(x)=2−|x| uses fixed coordinate and centimetre axes, with the chosen radius shown separately. Containment and global openness remain separately labelled.
- Item:
  - kind: substitution
  - description: Follow the declared inputs through the stated expression into the labelled result.

## Applications

- Item:
  - context: Constructed workshop example
  - mapping: Move a query point and separate its membership, the existence of some neighborhood, the fit of one chosen neighborhood and openness of the whole set.
  - limitations: The live family consists of two disks and points on their horizontal diameter, rather than arbitrary metric spaces or set expressions.
  - evidence kind: constructed_example
  - example ref: math:example:open-set:fitting-neighborhood
- Item:
  - context: Include tangency for an open inner ball
  - mapping: The excluded touching point is not a counterexample to containment.
  - limitations: A closed inner ball would include the touching point and change this open-target conclusion.
  - evidence kind: constructed_example
  - example ref: math:example:open-set:tangent-open-ball

## Source Refs

- source:cmu:metric-open-sets

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.29.0: Added an original modular story, Geometry and Graph views, five worked examples and twelve numeric fixtures in the continuing book-scope sequence.

## Referenced source registry

- Source ID: source:cmu:metric-open-sets. [Gautam Iyer, Carnegie Mellon 2024-455, Metric Spaces](https://www.math.cmu.edu/~gautam/c/2024-455/notes/01-metric.html). Locator: Definitions 1 and 8–11, Example 12 and Proposition 14: Euclidean metrics, open/closed balls, open sets, and the distinction between open and closed properties. Verification: Definition-level material inspected 2026-10-27 on the author, university or course publication. Supports the stated definitions and conditions, not independent review, photographed-book coverage or verification of the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
