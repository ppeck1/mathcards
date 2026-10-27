---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:gradient-descent", "id": "math:concept:gradient-descent", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:gradient-descent", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "6fa46bd1284ae6972983b1a77d9618709177d51c834d74130e71235ca1d71deb", "source_revision": "0.1.0-draft", "upstream_content_sha256": "6fb24fc7cef5310f0a1c562084c6de1177f735dc856a8e764697d450865afe91"}, "purpose": "Adjust a learning rate and follow exact gradient steps across an error landscape.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "6fb24fc7cef5310f0a1c562084c6de1177f735dc856a8e764697d450865afe91", "status": "draft", "title": "Gradient descent", "topics": ["mathematics", "calculus", "optimization", "modeling", "steepest descent update", "learning rate", "iterative cost reduction"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Gradient descent

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:gradient-descent; revision 0.1.0-draft. Setting: Unconstrained minimization of a differentiable scalar objective. The executable specimen is a strictly convex quadratic with separate coordinate terms in two dimensionless calibration-error coordinates. Expression: $C(x,y)=\frac{ax^2+by^2}{2},\quad a>0,\ b>0,\quad x_{k+1}=x_k-\eta a x_k,\quad y_{k+1}=y_k-\eta b y_k.$. Conditions required for a defined value (a case may test their violation): The objective is the fixed strictly convex quadratic C(x,y)=(a*x²+b*y²)/2 with a,b positive. Its unique global minimizer is (0,0). The start point, positive coefficients and step size remain fixed during one run. The iteration control k is an integer from 0 to 16. No fractional gradient update or continuous-time interpretation is used. The coordinate updates are xNext=(1-stepSize*a)*x and yNext=(1-stepSize*b)*y. Each gradient is evaluated at the current iterate. For all starting points in this particular family, convergence requires both coordinate multipliers to have magnitude below one: 0<stepSize<2/max(a,b). Zero step size leaves every iterate unchanged. A boundary factor of -1 can oscillate, and an oversized factor can grow in magnitude. Changing the step size recomputes the exact discrete trajectory from the original start; the Graph plots cost after the selected whole number of iterations. Drawing limits and clipped path segments do not change the computed iterates or full numeric cost. At a nonzero gradient, the negative gradient is a descent direction; an oversized finite step can still raise the cost. The logarithmic display uses normalized dimensionless C>=0 and the natural logarithm ln(1+C); it changes only the Graph ordinate, not the objective value or update rule. Scope: General gradient descent can be applied to many differentiable objectives, but convergence and suitable step sizes require additional assumptions. This live demonstration has only C=(a*x²+b*y²)/2 with strictly positive coefficients, no constraints, stochastic noise, adaptive step selection, momentum or arbitrary machine-learning model. The exact multiplier condition is derived for this quadratic only. The primary sweep varies step size continuously at a fixed integer iteration count; the numbered path remains discrete.

## Schema Version

0.1.0

## Id

math:concept:gradient-descent

## Slug

gradient-descent

## Type

concept

## Title

Gradient descent

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. Stories and worked quantities are originally authored constructed examples, not measurements or historical events. Historical priority and notation claims require separate evidence before publication.

## Aliases

- steepest descent update
- learning rate
- iterative cost reduction

## Branches

- calculus
- optimization
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Adjust a learning rate and follow exact gradient steps across an error landscape.

## Meaning

Gradient descent repeatedly moves opposite the current gradient to seek a smaller objective value. Step size matters: a suitable step can contract errors, while a large step can oscillate or diverge. The live example uses a positive quadratic cost so that each discrete update and its convergence condition can be checked directly.

## Prerequisites

- required:
  - math:concept:gradient
- helpful:
  - math:concept:vector
  - math:concept:quadratic-optimization
- depth:
  - math:concept:directional-derivative
  - math:concept:tangent-plane

## Definition

- setting: Unconstrained minimization of a differentiable scalar objective. The executable specimen is a strictly convex quadratic with separate coordinate terms in two dimensionless calibration-error coordinates.
- formal latex: C(x,y)=\frac{ax^2+by^2}{2},\quad a>0,\ b>0,\quad x_{k+1}=x_k-\eta a x_k,\quad y_{k+1}=y_k-\eta b y_k.
- signature:
  - startX,startY,x₀,y₀: Initial signed coordinates in [-2,2].
  - a,b: Positive fixed cost coefficients in [0.25,2].
  - η,stepSize: Nonnegative fixed step size in [0,1.5].
  - k,iteration: Integer number of completed updates in [0,16].
  - xₖ,yₖ,currentX,currentY: Exact current iterate, potentially outside the initial range for unstable steps.
  - C,cost: Primary nonnegative scalar cost at the current iterate.
  - ∇C: Current vector (a*currentX,b*currentY), not the cost or gradient norm.
  - xₖ₊₁,yₖ₊₁: Next-iterate components, retained separately from the current ones.
- conditions:
  - The objective is the fixed strictly convex quadratic C(x,y)=(a*x²+b*y²)/2 with a,b positive. Its unique global minimizer is (0,0).
  - The start point, positive coefficients and step size remain fixed during one run.
  - The iteration control k is an integer from 0 to 16. No fractional gradient update or continuous-time interpretation is used.
  - The coordinate updates are xNext=(1-stepSize*a)*x and yNext=(1-stepSize*b)*y. Each gradient is evaluated at the current iterate.
  - For all starting points in this particular family, convergence requires both coordinate multipliers to have magnitude below one: 0<stepSize<2/max(a,b).
  - Zero step size leaves every iterate unchanged. A boundary factor of -1 can oscillate, and an oversized factor can grow in magnitude.
  - Changing the step size recomputes the exact discrete trajectory from the original start; the Graph plots cost after the selected whole number of iterations.
  - Drawing limits and clipped path segments do not change the computed iterates or full numeric cost.
  - At a nonzero gradient, the negative gradient is a descent direction; an oversized finite step can still raise the cost.
  - The logarithmic display uses normalized dimensionless C>=0 and the natural logarithm ln(1+C); it changes only the Graph ordinate, not the objective value or update rule.
- domain notes: General gradient descent can be applied to many differentiable objectives, but convergence and suitable step sizes require additional assumptions. This live demonstration has only C=(a*x²+b*y²)/2 with strictly positive coefficients, no constraints, stochastic noise, adaptive step selection, momentum or arbitrary machine-learning model. The exact multiplier condition is derived for this quadratic only. The primary sweep varies step size continuously at a fixed integer iteration count; the numbered path remains discrete.
- proof status: Definition-level references; stated restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:stanford:gradient-descent
  - source:openstax:gradient-directional

## Grammar

- pronunciation: Gradient descent
- expression latex: C(x,y)=\frac{ax^2+by^2}{2},\quad a>0,\ b>0,\quad x_{k+1}=x_k-\eta a x_k,\quad y_{k+1}=y_k-\eta b y_k.
- formation rule: contractionX=1-stepSize*a; contractionY=1-stepSize*b; currentX=startX*(contractionX^iteration); currentY=startY*(contractionY^iteration); partialX=a*currentX; partialY=b*currentY; output=cost=(a*currentX*currentX+b*currentY*currentY)/2; nextX=currentX-stepSize*partialX; nextY=currentY-stepSize*partialY. The Graph displays ln(1+C), where C denotes the current nonnegative normalized cost; logCost is this display value, while output remains the actual cost.
- precedence: Start from the declared initial errors. At each whole update evaluate the gradient at the current point, multiply by the fixed step size and subtract. Only after k updates evaluate the current cost. Parenthesize a negative contraction factor before taking its integer power.
- symbols:
  - Item:
    - token: x₀
    - role: First signed error at the start of a run
    - type: Real scalar initial coordinate
  - Item:
    - token: y₀
    - role: Second signed error at the start of a run
    - type: Real scalar initial coordinate
  - Item:
    - token: a
    - role: Positive first-coordinate cost coefficient
    - type: Positive real scalar
  - Item:
    - token: b
    - role: Positive second-coordinate cost coefficient
    - type: Positive real scalar
  - Item:
    - token: η
    - role: Fixed nonnegative step size, also called learning rate
    - type: Nonnegative real scalar
  - Item:
    - token: k
    - role: Number of completed whole updates
    - type: Nonnegative integer
  - Item:
    - token: xₖ
    - role: First coordinate after exactly k updates
    - type: Derived real scalar coordinate
  - Item:
    - token: yₖ
    - role: Second coordinate after exactly k updates
    - type: Derived real scalar coordinate
  - Item:
    - token: C(xₖ,yₖ)
    - role: Objective cost at the selected iterate
    - type: Derived nonnegative real scalar
  - Item:
    - token: ∇C
    - role: Current gradient (a*xₖ,b*yₖ), distinct from cost
    - type: Derived real plane vector
  - Item:
    - token: xₖ₊₁
    - role: First coordinate after the next whole update
    - type: Derived real scalar coordinate
  - Item:
    - token: yₖ₊₁
    - role: Second coordinate after the next whole update
    - type: Derived real scalar coordinate
- ast:
  - id: ast:gradient-descent:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:startX
      - kind: variable
      - symbol: startX
      - type: Finite real control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:startY
      - kind: variable
      - symbol: startY
      - type: Finite real control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Finite real control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Finite real control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:stepSize
      - kind: variable
      - symbol: stepSize
      - type: Finite real control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:iteration
      - kind: variable
      - symbol: iteration
      - type: Nonnegative integer control
      - scope ref: scope:gradient-descent:expression
    - Item:
      - id: n:recurX
      - kind: functionRef
      - ref: For the supplied initial first coordinate, apply exactly iteration whole updates xNext=(1-stepSize*a)*x, with a and stepSize fixed.
      - type: Real to real
    - Item:
      - id: n:recurY
      - kind: functionRef
      - ref: For the supplied initial second coordinate, apply exactly iteration whole updates yNext=(1-stepSize*b)*y, with b and stepSize fixed.
      - type: Real to real
    - Item:
      - id: n:currentX
      - kind: apply
      - function: n:recurX
      - argument: n:startX
      - type: Real scalar
    - Item:
      - id: n:currentY
      - kind: apply
      - function: n:recurY
      - argument: n:startY
      - type: Real scalar
    - Item:
      - id: n:square
      - kind: functionRef
      - ref: Square a real scalar
      - type: Real to real
    - Item:
      - id: n:xSquared
      - kind: apply
      - function: n:square
      - argument: n:currentX
      - type: Real scalar
    - Item:
      - id: n:ySquared
      - kind: apply
      - function: n:square
      - argument: n:currentY
      - type: Real scalar
    - Item:
      - id: n:weightedX
      - kind: multiply
      - arguments:
        - n:a
        - n:xSquared
      - type: Real scalar
    - Item:
      - id: n:weightedY
      - kind: multiply
      - arguments:
        - n:b
        - n:ySquared
      - type: Real scalar
    - Item:
      - id: n:weightedSum
      - kind: add
      - arguments:
        - n:weightedX
        - n:weightedY
      - type: Real scalar
    - Item:
      - id: n:half
      - kind: functionRef
      - ref: Divide a real scalar by two
      - type: Real to real
    - Item:
      - id: n:output
      - kind: apply
      - function: n:half
      - argument: n:weightedSum
      - type: Nonnegative real cost at the selected exact integer iterate
  - scopes:
    - Item:
      - id: scope:gradient-descent:expression
      - kind: modelExpression
      - free variables:
        - startX
        - startY
        - a
        - b
        - stepSize
        - iteration
      - domain condition: The objective is the fixed strictly convex quadratic C(x,y)=(a*x²+b*y²)/2 with a,b positive. Its unique global minimizer is (0,0).
- parse errors:
  - Item:
    - input: Use half an iteration as an exact algorithm state
    - status: iteration_error
    - reason: The algorithm applies whole updates; the iteration control requires an integer.
  - Item:
    - input: Assume every positive step size lowers the cost
    - status: stability_error
    - reason: A large step can make a coordinate multiplier have magnitude at least one.
  - Item:
    - input: Report the gradient norm as the objective cost
    - status: type_error
    - reason: The gradient is a vector of local slopes, while the cost is a separate scalar function value.
- ast coverage: The root is the scalar objective evaluated at the current discrete iterate. Two explicit recurrence helpers reference the fixed coefficients, step size and integer iteration count; their results are squared, weighted, added and halved. This narrow AST is an outline of the bounded recurrence, not a general algorithm parser or a claim that the cost is the gradient vector.
- output symbol bindings:
  - xₖ: currentX
  - yₖ: currentY
  - C(xₖ,yₖ): cost
  - ∇C:
    - partialX
    - partialY
  - xₖ₊₁: nextX
  - yₖ₊₁: nextY

## Properties

- Item:
  - claim: Each coordinate follows an exact geometric recurrence.
  - conditions: Keep coefficients and step size fixed and use integer k.
  - derivation: Repeated multiplication gives xₖ=x₀*(1−ηa)^k and yₖ=y₀*(1−ηb)^k.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:gradient-descent:calibration
- Item:
  - claim: The selected objective has one global minimizer at zero.
  - conditions: Both coefficients are strictly positive.
  - derivation: The sum of two nonnegative weighted squares is zero exactly when both coordinates are zero.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:gradient-descent:calibration
- Item:
  - claim: The all-start convergence condition is 0<η<2/max(a,b).
  - conditions: Use this positive quadratic with separate coordinate terms and a fixed step size.
  - derivation: Both absolute coordinate multipliers must be below one; intersect the two positive step intervals.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:gradient-descent:stability-boundary

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of the idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:gradient
  - type: supports
  - conditions: The objective is differentiable at the points used.
  - reason: Each update subtracts a scaled gradient evaluated at the current iterate.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:directional-derivative
  - type: supports
  - conditions: A local direction does not by itself choose a safe finite step size.
  - reason: A negative-gradient direction is locally downhill when the gradient is nonzero.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:quadratic-optimization
  - type: supports
  - conditions: Both cost coefficients stay positive.
  - reason: A positive quadratic gives a cost landscape whose minimum and iteration multipliers are explicit.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:gradient-descent:calibration
  - title: Reduce two normalized calibration errors
  - role: applied_model
  - question: From normalized errors (2,1.5), what error score remains after four gradient-descent updates with step size 0.4?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
  - inputs:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0.4
    - iteration: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇C=(a*x,b*y); 1−ηa=0.6; 1−ηb=0.2
      - reason: Differentiate the positive quadratic and identify the two exact coordinate multipliers.
    - Item:
      - index: 2
      - expression: xₖ=2×(0.6)^4=0.2592; yₖ=1.5×(0.2)^4=0.0024
      - reason: Apply exactly k whole gradient updates; the subscript counts discrete iterations.
    - Item:
      - index: 3
      - expression: C(xₖ,yₖ)=(1×(0.2592)²+2×(0.0024)²)/2=0.03359808
      - reason: Evaluate the original error score at that iterate, rather than calling the gradient norm the cost.
  - result:
    - exact: Errors (0.2592,0.0024); cost 0.03359808 score units
  - interpretation: Each update reduces the two errors by their own contraction factor. The cost falls from 4.25 to 0.03359808.
  - independent check:
    - method: Independent repeated-update check
    - expected: Starting from the stated pair, repeatedly subtract η times (a*x,b*y) for exactly k integer updates, then evaluate C.
  - limits: The all-start convergence condition for this restricted positive quadratic is 0<η<2/max(a,b). A finite observed cost decrease does not prove convergence for a general objective.
  - preset:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0.4
    - iteration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
- Item:
  - id: math:example:gradient-descent:one-update
  - title: Inspect the first adjustment before repeating
  - role: applied_model
  - question: After just one adjustment, what are the errors and cost?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
  - inputs:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0.4
    - iteration: 1
  - steps:
    - Item:
      - index: 1
      - expression: ∇C=(a*x,b*y); 1−ηa=0.6; 1−ηb=0.2
      - reason: Differentiate the positive quadratic and identify the two exact coordinate multipliers.
    - Item:
      - index: 2
      - expression: xₖ=2×(0.6)^1=1.2; yₖ=1.5×(0.2)^1=0.3
      - reason: Apply exactly k whole gradient updates; the subscript counts discrete iterations.
    - Item:
      - index: 3
      - expression: C(xₖ,yₖ)=(1×(1.2)²+2×(0.3)²)/2=0.81
      - reason: Evaluate the original error score at that iterate, rather than calling the gradient norm the cost.
  - result:
    - exact: Errors (1.2,0.3); cost 0.81 score units
  - interpretation: One exact update changes the errors to (1.2,0.3), and the declared cost becomes 0.81.
  - independent check:
    - method: Independent repeated-update check
    - expected: Starting from the stated pair, repeatedly subtract η times (a*x,b*y) for exactly k integer updates, then evaluate C.
  - limits: The all-start convergence condition for this restricted positive quadratic is 0<η<2/max(a,b). A finite observed cost decrease does not prove convergence for a general objective.
  - preset:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0.4
    - iteration: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
- Item:
  - id: math:example:gradient-descent:zero-step
  - title: A zero step size leaves calibration unchanged
  - role: applied_model
  - question: Can repeated updates improve the score when the step size is zero?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
  - inputs:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0
    - iteration: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇C=(a*x,b*y); 1−ηa=1; 1−ηb=1
      - reason: Differentiate the positive quadratic and identify the two exact coordinate multipliers.
    - Item:
      - index: 2
      - expression: xₖ=2×(1)^4=2; yₖ=1.5×(1)^4=1.5
      - reason: Apply exactly k whole gradient updates; the subscript counts discrete iterations.
    - Item:
      - index: 3
      - expression: C(xₖ,yₖ)=(1×(2)²+2×(1.5)²)/2=4.25
      - reason: Evaluate the original error score at that iterate, rather than calling the gradient norm the cost.
  - result:
    - exact: Errors (2,1.5); cost 4.25 score units
  - interpretation: The update multiplies both errors by one. Repetition alone does not move the settings.
  - independent check:
    - method: Independent repeated-update check
    - expected: Starting from the stated pair, repeatedly subtract η times (a*x,b*y) for exactly k integer updates, then evaluate C.
  - limits: The all-start convergence condition for this restricted positive quadratic is 0<η<2/max(a,b). A finite observed cost decrease does not prove convergence for a general objective.
  - preset:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 0
    - iteration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
- Item:
  - id: math:example:gradient-descent:stability-boundary
  - title: A boundary step can bounce forever in one coordinate
  - role: applied_model
  - question: At step size 1, does the larger-curvature coordinate converge as the number of updates increases?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
  - inputs:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 1
    - iteration: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇C=(a*x,b*y); 1−ηa=0; 1−ηb=−1
      - reason: Differentiate the positive quadratic and identify the two exact coordinate multipliers.
    - Item:
      - index: 2
      - expression: xₖ=2×(0)^4=0; yₖ=1.5×(−1)^4=1.5
      - reason: Apply exactly k whole gradient updates; the subscript counts discrete iterations.
    - Item:
      - index: 3
      - expression: C(xₖ,yₖ)=(1×(0)²+2×(1.5)²)/2=2.25
      - reason: Evaluate the original error score at that iterate, rather than calling the gradient norm the cost.
  - result:
    - exact: Errors (0,1.5); cost 2.25 score units
  - interpretation: The first error becomes zero, while the second changes sign each update with unchanged magnitude. Four iterations give score 2.25 but do not establish convergence.
  - independent check:
    - method: Independent repeated-update check
    - expected: Starting from the stated pair, repeatedly subtract η times (a*x,b*y) for exactly k integer updates, then evaluate C.
  - limits: The all-start convergence condition for this restricted positive quadratic is 0<η<2/max(a,b). A finite observed cost decrease does not prove convergence for a general objective.
  - preset:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 1
    - iteration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
- Item:
  - id: math:example:gradient-descent:oversized-step
  - title: An oversized adjustment amplifies the error
  - role: applied_model
  - question: With step size 1.5 and four updates, does the same error model still improve?
  - setting: Original constructed teaching scenario; values and rules are stipulated, not measured.
  - assumptions:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.
  - inputs:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 1.5
    - iteration: 4
  - steps:
    - Item:
      - index: 1
      - expression: ∇C=(a*x,b*y); 1−ηa=−0.5; 1−ηb=−2
      - reason: Differentiate the positive quadratic and identify the two exact coordinate multipliers.
    - Item:
      - index: 2
      - expression: xₖ=2×(−0.5)^4=0.125; yₖ=1.5×(−2)^4=24
      - reason: Apply exactly k whole gradient updates; the subscript counts discrete iterations.
    - Item:
      - index: 3
      - expression: C(xₖ,yₖ)=(1×(0.125)²+2×(24)²)/2=576.0078125
      - reason: Evaluate the original error score at that iterate, rather than calling the gradient norm the cost.
  - result:
    - exact: Errors (0.125,24); cost 576.0078125 score units
  - interpretation: The second error doubles in magnitude each update. The full result remains numeric even if the drawing clips the trajectory outside its fixed frame.
  - independent check:
    - method: Independent repeated-update check
    - expected: Starting from the stated pair, repeatedly subtract η times (a*x,b*y) for exactly k integer updates, then evaluate C.
  - limits: The all-start convergence condition for this restricted positive quadratic is 0<η<2/max(a,b). A finite observed cost decrease does not prove convergence for a general objective.
  - preset:
    - startX: 2
    - startY: 1.5
    - a: 1
    - b: 2
    - stepSize: 1.5
    - iteration: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - This is an original normalized calibration model, not measured equipment or a trained machine-learning system.
    - The two settings are dimensionless signed errors relative to a stipulated zero-error target; C is a declared error score.
    - The positive coefficients a and b stay fixed through each exact discrete run.
    - Each iteration applies the full gradient at the current point with one fixed nonnegative step size; the displayed path is not a continuous-time differential equation.

## Interactive

- component id: component:gradient-descent
- renderer id: gradient-descent-visual-model
- renderer version: 1
- model id: gradient-descent-visual-model
- model revision: 1
- expression id: ast:gradient-descent:expression
- interaction status: implemented
- description: An error-score contour landscape shows numbered exact discrete iterates, the current gradient and the next adjustment. Sweeping step size recomputes the same fixed-length run; unstable steps remain numerically honest even when a path needs drawing limits.
- controls:
  - Item:
    - id: startX
    - type: number
    - default: 2
    - min: -2
    - max: 2
    - step: 0.01
  - Item:
    - id: startY
    - type: number
    - default: 1.5
    - min: -2
    - max: 2
    - step: 0.01
  - Item:
    - id: a
    - type: number
    - default: 1
    - min: 0.25
    - max: 2
    - step: 0.01
  - Item:
    - id: b
    - type: number
    - default: 2
    - min: 0.25
    - max: 2
    - step: 0.01
  - Item:
    - id: stepSize
    - type: number
    - default: 0.4
    - min: 0
    - max: 1.5
    - step: 0.01
  - Item:
    - id: iteration
    - type: number
    - default: 4
    - min: 0
    - max: 16
    - step: 1
- expected cases:
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 4
    - output: 0.033598079999999995
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 0
    - output: 4.25
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 1
    - output: 0.8099999999999998
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 2
    - output: 0.2628
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 16
    - output: 1.5917322219892794e-07
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0
      - iteration: 4
    - output: 4.25
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 1
      - iteration: 4
    - output: 2.25
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 1.5
      - iteration: 4
    - output: 576.0078125
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 0.25
      - b: 0.25
      - stepSize: 1.5
      - iteration: 16
    - output: 2.2958874039497804e-07
  - Item:
    - input:
      - startX: 0
      - startY: 0
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 4
    - output: 0.0
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 1
      - b: 2
      - stepSize: 0.4
      - iteration: 2.5
    - status: invalid_parameters
  - Item:
    - input:
      - startX: 2
      - startY: 1.5
      - a: 0
      - b: 2
      - stepSize: 0.4
      - iteration: 4
    - status: invalid_parameters
- compute: contractionX=1-stepSize*a; contractionY=1-stepSize*b; currentX=startX*(contractionX^iteration); currentY=startY*(contractionY^iteration); partialX=a*currentX; partialY=b*currentY; output=cost=(a*currentX*currentX+b*currentY*currentY)/2; nextX=currentX-stepSize*partialX; nextY=currentY-stepSize*partialY.
- numeric tolerance: 1e-10
- invariants:
  - The objective is the fixed strictly convex quadratic C(x,y)=(a*x²+b*y²)/2 with a,b positive. Its unique global minimizer is (0,0).
  - The start point, positive coefficients and step size remain fixed during one run.
  - The iteration control k is an integer from 0 to 16. No fractional gradient update or continuous-time interpretation is used.
  - The coordinate updates are xNext=(1-stepSize*a)*x and yNext=(1-stepSize*b)*y. Each gradient is evaluated at the current iterate.
  - For all starting points in this particular family, convergence requires both coordinate multipliers to have magnitude below one: 0<stepSize<2/max(a,b).
  - Zero step size leaves every iterate unchanged. A boundary factor of -1 can oscillate, and an oversized factor can grow in magnitude.
  - Changing the step size recomputes the exact discrete trajectory from the original start; the Graph plots cost after the selected whole number of iterations.
  - Drawing limits and clipped path segments do not change the computed iterates or full numeric cost.
- limits:
  - Only a positive quadratic with separate coordinate terms with fixed coefficients and one fixed nonnegative step size.
  - The primary Graph varies stepSize at fixed integer k; iteration is a manual whole-number control.
  - At most sixteen completed updates are shown; finite progress does not prove convergence for a general objective.
  - Large iterates can leave the fixed drawing frame; clipping affects the illustration, not the computed error score.
- fallback: Pause to read the labeled inputs, intermediate calculations and output. The model-data table and original worked steps provide numeric alternatives to the scene.
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
  - prompt: Does a downhill direction guarantee a good finite update?
  - answer: No. A negative-gradient direction is locally downhill, but an oversized finite step can overshoot and increase the objective.
- Item:
  - prompt: Why does the graph vary step size rather than iteration continuously?
  - answer: The algorithm uses whole updates. Varying the learning rate smoothly compares exact runs while keeping the discrete iteration count honest.

## Representations

- Item:
  - kind: geometry
  - description: Strictly convex cost contours, numbered discrete iterates, current gradient and next update connect the learning rate to the resulting error score. Drawn connecting segments aid reading and do not create fractional algorithm steps.
- Item:
  - kind: graph
  - description: Plot the logarithmic display ln(1+C) of the nonnegative normalized dimensionless objective cost after the selected fixed integer number of updates against continuous step size η. The transformed vertical axis keeps zero visible and compresses large costs. Actual C remains the primary result and readable numeric value; this display does not interpolate algorithm iterations.
- Item:
  - kind: substitution
  - description: The fixed start, coordinate contraction factors, current and next coordinates, and objective cost are evaluated from one discrete run.

## Applications

- Item:
  - context: Normalized calibration adjustment
  - mapping: Two signed setting errors are repeatedly adjusted to reduce a stipulated quadratic error score.
  - limitations: Illustrative dimensionless settings and declared score units, not a measured control system.
  - evidence kind: constructed_example
  - example ref: math:example:gradient-descent:calibration
- Item:
  - context: Oversized adjustment comparison
  - mapping: The same initial errors are recomputed with a larger learning rate to show overshoot and divergence.
  - limitations: This exact multiplier analysis applies to the positive quadratic family.
  - evidence kind: constructed_example
  - example ref: math:example:gradient-descent:oversized-step

## Source Refs

- source:stanford:gradient-descent
- source:openstax:gradient-directional

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- The bounded interactive family is an illustration, not a general symbolic engine or proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, connected modular story and declared Geometry/Graph views with exact discrete iterates.

## Referenced source registry

- Source ID: source:openstax:gradient-directional. [Calculus Volume 3, 4.6 Directional Derivatives and the Gradient](https://openstax.org/books/calculus-volume-3/pages/4-6-directional-derivatives-and-the-gradient). Locator: Gradient definition; directional derivative for differentiable fields; maximum directional derivative and zero-gradient case. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:stanford:gradient-descent. [Stanford EE364a, Convex Optimization — Unconstrained Minimization](https://web.stanford.edu/class/ee364a/lectures/lectures_hd.pdf). Locator: Chapter 10 Unconstrained Minimization, slide 10–7 Gradient descent method: negative-gradient direction, step selection and update; earlier objective and convexity definitions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher or university page. Supports definitions and conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
