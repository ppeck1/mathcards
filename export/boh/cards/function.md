---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:function", "id": "math:concept:function", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:function", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "5a84637d71136c60093ef7898a8c06e8ad8d0988f5beb6cd50c83c9fed2a29f0", "source_revision": "0.1.0-draft", "upstream_content_sha256": "009b5e7e15ceb8acae26c225bd20c9d044024763bdde67f31ac0f8863004e4cc"}, "purpose": "Follow one input through a rule to its unique output, and distinguish the rule from its current value.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "009b5e7e15ceb8acae26c225bd20c9d044024763bdde67f31ac0f8863004e4cc", "status": "draft", "title": "Function", "topics": ["mathematics", "language-foundations", "algebra", "input–output rule", "function evaluation"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.1.0-draft"}
---

# Function

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:function; revision 0.1.0-draft. Setting: A function between declared sets; the executable specimen is a bounded real affine family. Expression: $f:A\to B,\quad\forall x\in A\;\exists!\,y\in B:\;y=f(x).\qquad f_{a,b}(x)=ax+b.$. Conditions required for a defined value (a case may test their violation): Every allowed input has exactly one assigned output. A function includes its declared domain; a formula alone need not settle the intended domain. For the illustrated family, x, a and b are finite and within the declared control bounds. A multiplier and offset require compatible units; changing a or b changes the selected function. Scope: General functions need not be numerical, affine, continuous or invertible. In this specimen the input domain is [−5,5], and each chosen a,b has range [b−5|a|,b+5|a|]. Bounds are a display/model contract, not a restriction on the mathematical concept.

## Schema Version

0.1.0

## Id

math:concept:function

## Slug

function

## Type

concept

## Title

Function

## Revision

0.1.0-draft

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

- input–output rule
- function evaluation

## Branches

- language-foundations
- algebra

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Follow one input through a rule to its unique output, and distinguish the rule from its current value.

## Meaning

A function assigns exactly one output to each input in its domain. The playground illustrates the affine family f(x)=ax+b: x moves through a fixed rule; a and b edit the rule itself.

## Prerequisites

- required:
  - math:concept:variable
- helpful:
  - math:concept:domain-codomain
- depth:
  - math:concept:model-assumption

## Definition

- setting: A function between declared sets; the executable specimen is a bounded real affine family.
- formal latex: f:A\to B,\quad\forall x\in A\;\exists!\,y\in B:\;y=f(x).\qquad f_{a,b}(x)=ax+b.
- signature:
  - general: f:A→B; exactly one output for each x∈A
  - x: input in A; real x∈[−5,5] in this specimen
  - a: real multiplier in [−3,3]
  - b: real offset in [−5,5]
  - output: a×x+b; its units are the output units
- conditions:
  - Every allowed input has exactly one assigned output.
  - A function includes its declared domain; a formula alone need not settle the intended domain.
  - For the illustrated family, x, a and b are finite and within the declared control bounds.
  - A multiplier and offset require compatible units; changing a or b changes the selected function.
- domain notes: General functions need not be numerical, affine, continuous or invertible. In this specimen the input domain is [−5,5], and each chosen a,b has range [b−5|a|,b+5|a|]. Bounds are a display/model contract, not a restriction on the mathematical concept.
- proof status: Definition-level reference; affine properties are author-derived. No independent review or general theorem-proving claimed.
- source refs:
  - source:openstax:function-notation
  - source:openstax:function-domain

## Grammar

- pronunciation: f of x equals a times x plus b
- expression latex: f(x)=ax+b
- formation rule: scaled=a*x; output=scaled+b; input=x. For each selected a,b this is a fixed affine function on x∈[−5,5].
- precedence: Evaluate ax before adding b; f(x) denotes function application, not f multiplied by x.
- symbols:
  - Item:
    - token: x
    - role: current input
    - type: Declared real quantity or finite mode
  - Item:
    - token: a
    - role: multiplier selecting slope
    - type: Declared real quantity or finite mode
  - Item:
    - token: b
    - role: offset selecting vertical shift
    - type: Declared real quantity or finite mode
  - Item:
    - token: f(x)
    - role: the selected function’s output
    - type: Declared real quantity or finite mode
- ast:
  - id: ast:function:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:x
      - kind: variable
      - symbol: x
      - type: Declared control
      - scope ref: scope:function:model
    - Item:
      - id: n:a
      - kind: variable
      - symbol: a
      - type: Declared control
      - scope ref: scope:function:model
    - Item:
      - id: n:b
      - kind: variable
      - symbol: b
      - type: Declared control
      - scope ref: scope:function:model
    - Item:
      - id: n:rule
      - kind: functionRef
      - ref: scaled=a*x; output=scaled+b; input=x. For each selected a,b this is a fixed affine function on x∈[−5,5].
      - type: Curried declared controls → primary output
    - Item:
      - id: n:partial0
      - kind: apply
      - function: n:rule
      - argument: n:x
      - type: Remaining controls → primary output
    - Item:
      - id: n:partial1
      - kind: apply
      - function: n:partial0
      - argument: n:a
      - type: Remaining controls → primary output
    - Item:
      - id: n:output
      - kind: apply
      - function: n:partial1
      - argument: n:b
      - type: Real or explicit undefined status
  - scopes:
    - Item:
      - id: scope:function:model
      - kind: modelExpression
      - free variables:
        - x
        - a
        - b
      - domain condition: scaled=a*x; output=scaled+b; input=x. For each selected a,b this is a fixed affine function on x∈[−5,5].
- parse errors:
  - Item:
    - input: One input is assigned two different outputs
    - status: not_a_function
    - reason: A relation with two outputs for the same allowed input fails the single-output condition.
  - Item:
    - input: Treat f(x) as f×x
    - status: notation_error
    - reason: Parentheses here mean application of the rule.
  - Item:
    - input: x=6 in this bounded specimen
    - status: invalid_parameters
    - reason: This UI model stops at x=5; the affine formula itself could be extended in another declared model.
- ast coverage: This tree applies the explicitly named bounded model to its controls. It is structural metadata; it does not parse arbitrary formulas or establish a theorem. The formal definition is broader than the illustrated family.
- output symbol bindings:
  - f(x): output
  - ax: scaled
  - input: input

## Properties

- Item:
  - claim: Many inputs can share a single output without violating the function condition.
  - status: author-derived for stated conditions; independent review pending
  - conditions: Each input still has exactly one output.
  - derivation: For a=0, ax+b=b for every x.
  - example ref: math:example:function:constant
- Item:
  - claim: For the affine family, a unit input increase changes the output by a.
  - status: author-derived for stated conditions; independent review pending
  - conditions: Hold a and b fixed and keep both inputs in the declared domain.
  - derivation: f(x+1)−f(x)=a(x+1)+b−(ax+b)=a.

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical sources before adding attributions.
  - Distinguish an early use, later formalization and modern teaching convention; inspect evidence for each.
- reader text: Historical account not yet sourced. These scenarios are constructed examples, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:function-composition
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: Function outputs become the next rule’s inputs when the domains match.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:linear-model
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: A constant rate with an offset is one important numerical function family.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:exponentiation
  - type: supports
  - conditions: Use compatible domains, units and the stated model assumptions.
  - reason: Changing the rule can replace additive output changes with multiplicative ones.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:function:sensor
  - title: A sensor display learns its rule
  - role: applied_model
  - question: A display doubles a sensor reading x and adds one display unit. What appears when x=2?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
  - inputs:
    - x: 2
    - a: 2
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: f(x)=2x+1
      - reason: Name the input, multiplier and offset before substituting.
    - Item:
      - index: 2
      - expression: f(2)=2×2+1=5
      - reason: Follow the same input through the multiply block and then the offset block.
    - Item:
      - index: 3
      - expression: (x,f(x))=(2,5)
      - reason: Place the result on the graph and on the output scale.
  - result:
    - exact: 5 display units
  - interpretation: The input marker at 2 maps to exactly one output marker at 5. Dragging x moves the marker along this fixed line.
  - independent check:
    - method: Difference check
    - expected: f(3)=7 differs from f(2)=5 by a=2 when the input rises by one.
  - limits: This is a stipulated calibration rule, not a measured sensor accuracy claim.
  - preset:
    - x: 2
    - a: 2
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
- Item:
  - id: math:example:function:delivery
  - title: A short delivery quote
  - role: applied_model
  - question: A local delivery quote adds a $3 setup fee to $2 per kilometre. What is the quote for 4 km?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
  - inputs:
    - x: 4
    - a: 2
    - b: 3
  - steps:
    - Item:
      - index: 1
      - expression: variable charge=2×4=$8
      - reason: Multiply distance by the declared rate.
    - Item:
      - index: 2
      - expression: f(4)=8+3=$11
      - reason: Add the fixed setup charge once.
  - result:
    - exact: $11
  - interpretation: The offset moves the entire line upward; the slope controls how much an extra kilometre costs.
  - independent check:
    - method: Itemized addition
    - expected: Four one-kilometre charges total $8; adding the $3 setup charge gives $11.
  - limits: The story domain is 0≤x≤5 km; negative distances on the general playground are algebraic inputs, not delivery quotes.
  - preset:
    - x: 4
    - a: 2
    - b: 3
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
- Item:
  - id: math:example:function:cooling
  - title: A cooling dial over a short test
  - role: applied_model
  - question: A controlled test starts at 5 temperature units and falls by one unit per minute. What is the reading after 3 minutes?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
  - inputs:
    - x: 3
    - a: -1
    - b: 5
  - steps:
    - Item:
      - index: 1
      - expression: f(x)=−x+5
      - reason: A decrease uses a negative multiplier.
    - Item:
      - index: 2
      - expression: f(3)=−3+5=2
      - reason: The negative scaled contribution lowers the offset.
  - result:
    - exact: 2 temperature units
  - interpretation: A downward line is still a function. Each time has one model reading.
  - independent check:
    - method: Repeated subtraction
    - expected: Starting from 5, three one-unit drops give 4, 3, 2.
  - limits: A linear cooling rule is a short stipulated test, not a general heat-transfer law; use nonnegative elapsed time.
  - preset:
    - x: 3
    - a: -1
    - b: 5
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
- Item:
  - id: math:example:function:offset-coordinate
  - title: Mapping a position left of the origin
  - role: applied_model
  - question: A stage display maps a signed coordinate x to 1.5x+1. Where does x=−2 appear?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
  - inputs:
    - x: -2
    - a: 1.5
    - b: 1
  - steps:
    - Item:
      - index: 1
      - expression: scaled input=1.5×(−2)=−3
      - reason: Keep the sign of the input through the multiplier.
    - Item:
      - index: 2
      - expression: f(−2)=−3+1=−2
      - reason: Add the offset after scaling.
  - result:
    - exact: −2 display units
  - interpretation: A negative input is meaningful here because coordinates are signed. The output crosses an origin on a labeled scale.
  - independent check:
    - method: Solve backward
    - expected: 1.5x+1=−2 gives 1.5x=−3 and x=−2.
  - limits: This maps one coordinate axis to another; it does not describe a full 3D stage transformation.
  - preset:
    - x: -2
    - a: 1.5
    - b: 1
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
- Item:
  - id: math:example:function:constant
  - title: A locked display is still a function
  - role: applied_model
  - question: A test display is locked at 4, regardless of a reading between −5 and 5. What is the output at x=5?
  - setting: Original constructed teaching scenario; quantities are stipulated, not measured.
  - assumptions:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.
  - inputs:
    - x: 5
    - a: 0
    - b: 4
  - steps:
    - Item:
      - index: 1
      - expression: f(x)=0x+4
      - reason: A zero multiplier removes dependence on this input.
    - Item:
      - index: 2
      - expression: f(5)=0×5+4=4
      - reason: Evaluate without inventing an input effect.
  - result:
    - exact: 4 display units
  - interpretation: Many inputs may share one output. A function needs one output per input, not a different output for every input.
  - independent check:
    - method: Second input check
    - expected: f(−5)=0×(−5)+4=4 as well.
  - limits: This constant function has no single-valued inverse on the full input interval.
  - preset:
    - x: 5
    - a: 0
    - b: 4
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The input and output units are declared and compatible with a×x+b.
    - The stated affine rule applies throughout the short interval; coefficients remain fixed while x changes.
    - This example has one output for each allowed input; changing a or b selects a different function.

## Interactive

- component id: function-visual-model
- renderer id: function-visual-model
- renderer version: 1.0.0
- model id: function-visual-model
- model revision: 1.0.0
- expression id: ast:function:expression
- interaction status: implemented
- description: A highlighted input crosses the multiply and offset blocks into one output marker; the same pair is tracked on a line graph.
- controls:
  - Item:
    - id: x
    - type: number
    - default: 2
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: a
    - type: number
    - default: 2
    - min: -3
    - max: 3
    - slider min: -3
    - slider max: 3
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
  - Item:
    - id: b
    - type: number
    - default: 1
    - min: -5
    - max: 5
    - slider min: -5
    - slider max: 5
    - slider step: 0.01
    - text input policy: Keep invalid input visible with its domain message; do not clamp it or retain a stale result.
- expected cases:
  - Item:
    - input:
      - x: 2
      - a: 2
      - b: 1
    - output: 5
  - Item:
    - input:
      - x: -5
      - a: 3
      - b: -5
    - output: -20
  - Item:
    - input:
      - x: 5
      - a: 3
      - b: 5
    - output: 20
  - Item:
    - input:
      - x: -2
      - a: 1.5
      - b: 1
    - output: -2
  - Item:
    - input:
      - x: 5
      - a: 0
      - b: 4
    - output: 4
  - Item:
    - input:
      - x: 0
      - a: -3
      - b: -5
    - output: -5
  - Item:
    - input:
      - x: 3
      - a: -1
      - b: 5
    - output: 2
  - Item:
    - input:
      - x: 6
      - a: 2
      - b: 1
    - status: invalid_parameters
  - Item:
    - input:
      - x: 2
      - a: 3.1
      - b: 1
    - status: invalid_parameters
- compute: scaled=a*x; output=scaled+b; input=x. For each selected a,b this is a fixed affine function on x∈[−5,5].
- numeric tolerance: 1e-10
- invariants:
  - Every allowed input has exactly one assigned output.
  - A function includes its declared domain; a formula alone need not settle the intended domain.
  - For the illustrated family, x, a and b are finite and within the declared control bounds.
  - A multiplier and offset require compatible units; changing a or b changes the selected function.
- limits:
  - The live specimen is one bounded affine family, not an arbitrary function editor.
  - Story units and physical domains must be supplied separately; a negative coordinate can be valid while a negative delivery distance is not.
  - Output marker motion is illustrative and does not assert measured behavior.
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
  - prompt: Does f(2)=5 tell you the entire function?
  - answer: No. It gives one input–output pair; many distinct rules agree there.
- Item:
  - prompt: Why can a horizontal line be a function?
  - answer: Each input has one output even when all inputs share that output.

## Representations

- Item:
  - kind: mapping
  - description: The input, rule blocks and unique output show assignment.
- Item:
  - kind: graph
  - description: A tracked point (x,f(x)) moves along the selected affine line; axis units are declared by each story.
- Item:
  - kind: substitution
  - description: The highlighted x is replaced by the same numeric input in ax+b.

## Applications

- Item:
  - context: Sensor calibration
  - mapping: Raw reading→multiply by a→add b→display value.
  - limitations: The teaching rule is stipulated; accuracy and calibration uncertainty are outside the model.
  - evidence kind: constructed_example
  - example ref: math:example:function:sensor
- Item:
  - context: Delivery quote
  - mapping: Kilometres x map to a variable charge ax plus fixed charge b.
  - limitations: The story uses only nonnegative distances and excludes tiered prices.
  - evidence kind: constructed_example
  - example ref: math:example:function:delivery

## Source Refs

- source:openstax:function-notation
- source:openstax:function-domain

## Review Gaps

- Independent mathematical and unit review is pending.
- Historical development and notation are not yet researched.
- The bounded visualization is an illustration, not a general expression engine or proof.

## Change Log

- 0.1.0-draft: five original worked scenarios, explicit domains and failures, bounded model fixtures and shared modular playground bindings.

## Referenced source registry

- Source ID: source:openstax:function-notation. [Precalculus 2e, 1.1 Functions and Function Notation](https://openstax.org/books/precalculus-2e/pages/1-1-functions-and-function-notation). Locator: Function definition; input, output, domain and range; evaluating functions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:function-domain. [Precalculus 2e, 1.2 Domain and Range](https://openstax.org/books/precalculus-2e/pages/1-2-domain-and-range). Locator: Finding the Domain of a Function Defined by an Equation; physical and mathematical restrictions. Verification: Definition-level mathematics inspected 2026-10-26 on the official publisher page. This supports definitions and domain conditions, not historical priority or independent review of the original worked scenarios.. Rights: Reference only. Explanations, stories and worked derivations are originally authored; no source prose or exercise bank copied.
