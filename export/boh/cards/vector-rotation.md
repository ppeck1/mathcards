---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:vector-rotation", "id": "math:concept:vector-rotation", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:vector-rotation", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "450b558f90b96a363831ad53e9f4a09e6333cec8289972dedc7389cd5a969a2d", "source_revision": "0.1.0-draft", "upstream_content_sha256": "5da0caf147fe5b055476a594ee66924ff0273e1aa91bdef4858a1c16053b166d"}, "purpose": "Turn a planar vector and follow its horizontal and vertical projections.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "5da0caf147fe5b055476a594ee66924ff0273e1aa91bdef4858a1c16053b166d", "status": "draft", "title": "Vectors & rotation", "topics": ["mathematics", "geometry", "trigonometry", "linear-algebra", "polar to Cartesian", "vector components"], "type": "reference", "updated": "2026-10-23T00:00:00Z", "version": "0.1.0-draft"}
---

# Vectors & rotation

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:vector-rotation; revision 0.1.0-draft. Setting: Turn a planar vector and follow its horizontal and vertical projections. Expression: $x=r\cos(\theta\pi/180),\qquad y=r\sin(\theta\pi/180)$. Conditions required for a defined value (a case may test their violation): Use an orthonormal two-dimensional Cartesian coordinate system. The angle is measured counterclockwise from positive x in degrees. The radius is positive; rotation preserves distance from the origin. Scope: Angle 0–360°, radius 0.5–3 m. The primary numerical output is x; the scene also shows y. This parameterizes a rotated radius vector, not every possible affine transformation.

## Schema Version

0.1.0

## Id

math:concept:vector-rotation

## Slug

vector-rotation

## Type

concept

## Title

Vectors & rotation

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-23T00:00:00Z

## Review

- mathematics: author-derived; independent review pending
- history: source gap; no priority assertions
- interaction: implemented; numerical fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematics. Applications and stories are original constructed scenarios, not measurements or historical events. Historical claims require claim-level sources before publication.

## Aliases

- polar to Cartesian
- vector components

## Branches

- geometry
- trigonometry
- linear-algebra

## Expressive Job

- model
- visualize
- compare

## Purpose

Turn a planar vector and follow its horizontal and vertical projections.

## Meaning

A fixed-length arm sweeps around a circle while its two signed components stretch and reverse direction.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:function
- depth:
  - math:concept:model-assumption

## History

- status: source_gap
- claims:

- research tasks:
  - Research the concept and notation with specialist sources before adding historical attribution.
- reader text: Historical account not yet sourced. Everyday scenarios are constructed examples, not historical anecdotes.

## Connections



## Examples

- Item:
  - id: math:example:vector-rotation:boom
  - title: Position a rotating display arm
  - role: applied_model
  - question: A rigid 2 m display arm points 60° counterclockwise from the positive horizontal. Where is its tip?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
  - inputs:
    - angle: 60
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: θ=60°×π/180=π/3
      - reason: Convert the control angle to radians for trig evaluation.
    - Item:
      - index: 2
      - expression: x=2cos(π/3)=1 m; y=2sin(π/3)=√3 m
      - reason: Project the fixed arm onto each axis.
  - result:
    - exact: (1,√3)m ≈(1,1.73205)m
  - interpretation: Rotation changes the projections while preserving the arm length.
  - independent check:
    - method: Check the squared distance.
    - expected: 1²+(√3)²=4=2².
  - limits: A planar rigid arm is assumed; joint constraints, load and thickness are excluded.
  - preset:
    - angle: 60
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
- Item:
  - id: math:example:vector-rotation:vertical
  - title: Point straight up
  - role: boundary
  - question: What are the coordinates at 90° with radius 2?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
  - inputs:
    - angle: 90
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: cos 90°=0; sin 90°=1
      - reason: Use the vertical direction.
    - Item:
      - index: 2
      - expression: x=0 m; y=2 m
      - reason: The entire length projects vertically.
  - result:
    - exact: (0,2)m
  - interpretation: The x-component is zero even though the vector is not zero.
  - independent check:
    - method: Inspect a vertical segment from the origin.
    - expected: It has zero horizontal displacement and length 2 m.
  - limits: Numerical cosine ofπ/2 may produce a tiny residue around zero.
  - preset:
    - angle: 90
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
- Item:
  - id: math:example:vector-rotation:left
  - title: Turn to the left
  - role: structural
  - question: What is the horizontal component at 180°?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
  - inputs:
    - angle: 180
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: cos 180°=−1; sin 180°=0
      - reason: The direction is opposite the positive x-axis.
    - Item:
      - index: 2
      - expression: x=−2 m; y=0 m
      - reason: A signed component distinguishes left from right.
  - result:
    - exact: (−2,0)m
  - interpretation: A negative component indicates direction; the radius remains positive.
  - independent check:
    - method: Measure signed displacement.
    - expected: Two meters left of the origin has x=−2.
  - limits: The reported primary output is x; y is shown as the second coordinate.
  - preset:
    - angle: 180
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
- Item:
  - id: math:example:vector-rotation:return
  - title: Make a full turn
  - role: structural
  - question: Where does the tip return at 360°?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
  - inputs:
    - angle: 360
    - radius: 2
  - steps:
    - Item:
      - index: 1
      - expression: cos 360°=1; sin 360°=0
      - reason: A full turn restores the initial direction.
    - Item:
      - index: 2
      - expression: x=2 m; y=0 m
      - reason: The start and end positions coincide.
  - result:
    - exact: (2,0)m
  - interpretation: Angle may change by a full cycle without changing position.
  - independent check:
    - method: Compare with 0°.
    - expected: The same radius on the positive horizontal has coordinates(2,0).
  - limits: An endpoint position does not record how many turns occurred.
  - preset:
    - angle: 360
    - radius: 2
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
- Item:
  - id: math:example:vector-rotation:longer
  - title: Reach farther at the same direction
  - role: applied_model
  - question: A 3 m arm points 30°. What are its projections?
  - setting: Original constructed teaching scenario; stipulated quantities are not measurements.
  - assumptions:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.
  - inputs:
    - angle: 30
    - radius: 3
  - steps:
    - Item:
      - index: 1
      - expression: x=3cos 30°=3√3/2 m
      - reason: Multiply radius by the horizontal directional factor.
    - Item:
      - index: 2
      - expression: y=3sin 30°=3/2 m
      - reason: Use the corresponding vertical factor.
  - result:
    - exact: (3√3/2,3/2)m ≈(2.59808,1.5)m
  - interpretation: Scaling radius scales both coordinates without changing angle.
  - independent check:
    - method: Check length.
    - expected: (3√3/2)²+(3/2)²=27/4+9/4=9.
  - limits: The construction is two-dimensional and assumes a fixed origin.
  - preset:
    - angle: 30
    - radius: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: draft
    - external source refs:
  - conditions to check:
    - Use an orthonormal two-dimensional Cartesian coordinate system.
    - The angle is measured counterclockwise from positive x in degrees.
    - The radius is positive; rotation preserves distance from the origin.

## Properties

- Item:
  - claim: Rotation preserves squared length.
  - status: algebraic derivation
  - conditions: Use the same positive radius for both components.
  - derivation: x²+y²=r²(cos²θ+sin²θ)=r².
- Item:
  - claim: A full turn preserves position.
  - status: algebraic derivation
  - conditions: Compare angles differing by 360°.
  - derivation: Sine and cosine have period 2π radians.

## Prompts

- Item:
  - prompt: How can the horizontal number be negative?
  - answer: It is a signed coordinate. Negative means the tip lies left of the origin; it is not a negative length.
- Item:
  - prompt: What changes when radius changes?
  - answer: Both projections scale by the radius ratio while the direction stays fixed.

## Representations

- Item:
  - kind: symbolic
  - description: Convert degrees to radians, then multiply radius by cosine and sine.
- Item:
  - kind: geometric
  - description: A rotating arm, its horizontal and vertical projections, and angle arc share the same tip position.

## Applications

- Item:
  - context: Place the tip of an ideal rotating display arm.
  - mapping: At r=2 m and 60°, the tip is(1,√3)m.
  - limitations: This does not evaluate structural loading or safe reach.
  - evidence kind: constructed_example
  - example ref: math:example:vector-rotation:boom
- Item:
  - context: Scale the reach of a geometric design.
  - mapping: At 30° and r=3 m, coordinates are(3√3/2,3/2)m.
  - limitations: A fixed planar pivot and rigid arm are stipulated.
  - evidence kind: constructed_example
  - example ref: math:example:vector-rotation:longer

## Source Refs

- source:openstax:polar-coordinates

## Review Gaps

- Independent mathematics and editorial review pending.
- Historical research incomplete; no priority or invention claim implied.

## Change Log

- 0.1.0-draft: original applications, explicit model assumptions, bounded visual model and numerical fixtures.

## Definition

- setting: Turn a planar vector and follow its horizontal and vertical projections.
- formal latex: x=r\cos(\theta\pi/180),\qquad y=r\sin(\theta\pi/180)
- signature:
  - r: positive arm length in meters
  - θ: angle in degrees counterclockwise from positive x
  - x: signed horizontal tip coordinate in meters; primary output
  - y: signed vertical tip coordinate in meters
- conditions:
  - Use an orthonormal two-dimensional Cartesian coordinate system.
  - The angle is measured counterclockwise from positive x in degrees.
  - The radius is positive; rotation preserves distance from the origin.
- domain notes: Angle 0–360°, radius 0.5–3 m. The primary numerical output is x; the scene also shows y. This parameterizes a rotated radius vector, not every possible affine transformation.
- proof status: Resolve the radius with sine and cosine; use cos²θ+sin²θ=1 to verify length preservation.
- source refs:
  - source:openstax:polar-coordinates

## Grammar

- pronunciation: The horizontal component is radius times cosine of the angle; the vertical component is radius times sine of the angle.
- expression latex: x=r\cos(\theta\pi/180),\qquad y=r\sin(\theta\pi/180)
- formation rule: Convert angle to radians with theta=angle*pi/180. Output=radius*cos(theta); the vertical component is y=radius*sin(theta).
- precedence: Follow parentheses and function applications; products precede sums. Angle units and iteration conventions are explicit.
- symbols:
  - Item:
    - token: r
    - role: positive arm length in meters
    - type: Real quantity in declared setting
  - Item:
    - token: θ
    - role: angle in degrees counterclockwise from positive x
    - type: Real quantity in declared setting
  - Item:
    - token: x
    - role: signed horizontal tip coordinate in meters; primary output
    - type: Real quantity in declared setting
  - Item:
    - token: y
    - role: signed vertical tip coordinate in meters
    - type: Real quantity in declared setting
- ast:
  - id: ast:vector-rotation:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:angle
      - kind: variable
      - symbol: θ
      - type: Angle[deg]
      - scope ref: scope:vector-rotation
    - Item:
      - id: n:radius
      - kind: variable
      - symbol: r
      - type: Length[m]
      - scope ref: scope:vector-rotation
    - Item:
      - id: n:radians
      - kind: functionRef
      - ref: θ →θπ/180
      - type: Angle[deg] → Angle[rad]
    - Item:
      - id: n:cos
      - kind: functionRef
      - ref: cosine of radians
      - type: Real → Real
    - Item:
      - id: n:converted
      - kind: apply
      - function: n:radians
      - argument: n:angle
      - type: Angle[rad]
    - Item:
      - id: n:projection
      - kind: apply
      - function: n:cos
      - argument: n:converted
      - type: Real
    - Item:
      - id: n:output
      - kind: multiply
      - arguments:
        - n:radius
        - n:projection
      - type: Length[m]
  - scopes:
    - Item:
      - id: scope:vector-rotation
      - kind: modelExpression
      - free variables:
        - r
        - θ
        - x
        - y
      - domain condition: Use an orthonormal two-dimensional Cartesian coordinate system.; The angle is measured counterclockwise from positive x in degrees.; The radius is positive; rotation preserves distance from the origin.
- parse errors:
  - Item:
    - input: A parameter outside the declared control interval
    - status: outside_model_domain
    - reason: Reject the experiment instead of drawing a plausible but unrelated answer.
  - Item:
    - input: Treat a display interpolation as an extra physical observation
    - status: model_mismatch
    - reason: Continuous transitions explain the chosen model; they do not add measured evidence.
- ast coverage: The tree models the primary output through named mathematical helper functions, whose definitions and parameter dependencies are stated in compute and the signature. It is structural metadata, not arbitrary TeX execution or a general proof checker.
- output symbol bindings:
  - primary displayed result: output

## Interactive

- component id: vector-rotation-visual-model
- renderer id: vector-rotation-visual-model
- renderer version: 1.0.0
- model id: vector-rotation-visual-model
- model revision: 1.0.0
- expression id: ast:vector-rotation:expression
- interaction status: implemented
- description: A rotating arm, its horizontal and vertical projections, and angle arc share the same tip position.
- controls:
  - Item:
    - id: angle
    - type: number
    - default: 60
    - min: 0
    - max: 360
    - slider min: 0
    - slider max: 360
    - slider step: 0.1
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
  - Item:
    - id: radius
    - type: number
    - default: 2
    - min: 0.5
    - max: 3
    - slider min: 0.5
    - slider max: 3
    - slider step: 0.05
    - text input policy: Keep invalid input visible with an explicit error; never silently clamp or reuse a stale answer.
- expected cases:
  - Item:
    - input:
      - angle: 60
      - radius: 2
    - output: 1.0000000000000002
  - Item:
    - input:
      - angle: 90
      - radius: 2
    - output: 1.2246467991473532e-16
  - Item:
    - input:
      - angle: 180
      - radius: 2
    - output: -2.0
  - Item:
    - input:
      - angle: 360
      - radius: 2
    - output: 2.0
  - Item:
    - input:
      - angle: 30
      - radius: 3
    - output: 2.598076211353316
  - Item:
    - input:
      - angle: 0
      - radius: 0.5
    - output: 0.5
  - Item:
    - input:
      - angle: 361
      - radius: 2
    - status: invalid_parameters
- compute: Convert angle to radians with theta=angle*pi/180. Output=radius*cos(theta); the vertical component is y=radius*sin(theta).
- numeric tolerance: 1e-10
- invariants:
  - x²+y²=radius² up to numerical rounding.
  - At 0° and 360°, output equals radius.
  - At 180°, output equals negative radius.
- limits:
  - Only a planar rotation of a radius vector is modeled.
  - Trig values at exact quarter turns can have tiny floating-point residues.
  - The primary output is a signed x-coordinate; radius remains a positive length.
- fallback: Read the same substituted formula, worked steps and labeled static scene with motion paused.
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

## Referenced source registry

- Source ID: source:openstax:polar-coordinates. [Precalculus2e,8.3 Polar Coordinates](https://openstax.org/books/precalculus-2e/pages/8-3-polar-coordinates). Locator: Converting polar coordinates to rectangular coordinates: x=r cosθ and y=r sinθ. Verification: Definition-level mathematics inspected2026-10-23 via the official publisher or university page. This supports definitions, not historical priority, independent mathematical review or the original constructed applications.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
