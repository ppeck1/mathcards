# Learning and content design for an interactive mathematics atlas

Design recommendations for the new project, prepared 2026-10-23. These are proposed product and content contracts, not claims about existing Bag of Holding support. Historical particulars must be researched during content authoring; none are asserted here.

PRODUCT_SPEC.md and BUILD_PLAN.md are authoritative when this supplementary memo is less specific. In particular, a wholly unresearched history panel is permitted in draft design specimens only; it cannot pass the complete eight-card release gate. Starter AST validation is structural and limited; full type/domain checking remains implementation work.

## Product purpose

Give Paul a place to read mathematics, manipulate its expressions, compare its structures, and record his own possible connections. The unit is a substantial, explorable card or dossier. A card should answer: what can this express, how do I read and form it, under which assumptions does it work, what changes when I manipulate it, and where does its usefulness end?

“Mathematics as a language” is the organizing lens, with explicit limits. Mathematics has multiple formal languages, foundations, notational traditions, and interpretive conventions. One glyph can have several meanings; one idea can have several notations; visual resemblance is not proof of structural equivalence; an internally valid mathematical model need not be a valid model of a physical situation.

Success means the user can construct or interpret a new example, state its conditions, identify a misleading analogy, and save a testable connection. Browsing a large graph or memorizing many symbols is insufficient evidence of learning.

## Content object types

Use a shared identity/provenance envelope with typed bodies. Do not force every historical person or notation variant into an executable mathematical-concept template.

| Object | Purpose | Required body distinctions |
|---|---|---|
| Concept | A reusable mathematical idea | Definition, domains, representations, consequences, applications, limitations |
| Operator / construction | A transformation or way of building objects | Input/output types, operand roles, composition rules, laws with conditions |
| Relation / predicate | A statement that can hold between objects | Arity, argument roles, truth conditions, logical properties where applicable |
| Proposition / theorem | A claim with explicit hypotheses | Hypotheses, conclusion, proof status, proof idea, scope, failure examples |
| Axiom / convention | An adopted starting rule | System/context, role, alternatives, consequences, no implication of empirical discovery |
| Notation | A glyph or written convention | Context-specific meanings, pronunciation, parse, ambiguity, alternatives, history |
| Method / algorithm | A procedure | Preconditions, steps, outputs, termination/precision/complexity when relevant |
| Model / application | A connection to an observed or designed system | Variable mapping, units, assumptions, calibration, validation evidence, limits |
| Worked example | One fully instantiated case | Inputs, goal, steps, result, interpretation, checks, parent links |
| Historical claim / event | A sourced account of development | What changed, evidence, dating uncertainty, culture/context, attribution status |
| Source | A citable work or artifact | Bibliography, edition/location, access date, license, reliability context |
| Personal conjecture / observation | User-owned exploratory work | Proposed link, mapped roles, evidence, counterevidence, status, experiment snapshot |

Concept cards own or reference their examples, experiments, notation entries, historical claims, and sources. Example records have stable IDs and may be shared, but each card includes its own self-contained explanation of why the example belongs there. Generated representations must not become competing sources of truth.

## Extensive mathematical card contract

Every published primary mathematics card includes these sections. The interface uses progressive disclosure so completeness does not require an uninterrupted wall of text.

1. **Identity and orientation.** Stable ID; title; type; aliases; one-sentence expressive purpose; one everyday-language question it helps answer; fields/branches; prerequisites separated into required-to-read, helpful background, and further depth. A prerequisite reference cannot replace the explanation needed for the first example.
2. **Plain-language meaning.** What the object or operation means; what information it preserves or discards; how to distinguish it from neighboring ideas. Explicitly label an intuition as intuition.
3. **Formal definition.** Definition in an identified mathematical setting; input/output types; allowed domain and codomain; quantifiers and scope; assumptions; degenerate cases; units/dimensions when relevant. Use “not applicable” only with a reason, never a silent missing field.
4. **Expression grammar.** Literal notation and TeX; human pronunciation; token roles; valid formation rules; grouping and precedence; binding/free-variable rules if relevant; a parse tree for a representative expression; a trace from valid syntax to meaning. Include a syntactically invalid expression and a well-formed but semantically undefined expression when the distinction is meaningful.
5. **Symbol dictionary in context.** Glyph, name, spoken form, local role, type, permissible values, and links to other senses of the glyph. Store notation IDs independently of concept IDs. The equals sign, assignment, approximation, identity and equivalence must not be visually or semantically collapsed.
6. **Representation family.** Symbolic, verbal, tabular, geometric/graphical, and procedural forms where meaningful. State each representation’s limits. Provide at least two synchronized representations for interactive cards. Changing representation does not imply a new mathematical object.
7. **Properties and consequences.** Each law has hypotheses, result, status, and a supporting source or local derivation. Separate definitions, proved theorems, conjectures, useful approximations and empirical model assumptions. Avoid vague universal claims such as “works for all numbers.”
8. **Derivation or proof idea.** Short chain explaining why a central property follows, with the level of rigor labeled. Numerical sampling is labeled a check, not a proof; pictures are intuition unless a stated proof justifies the picture.
9. **Worked example family.** Five or more substantive examples following the ladder below. Examples remain readable without launching a simulation.
10. **Interactive experiment.** A meaningful manipulation, an observable consequence, a prediction prompt, an inspectable numerical/textual result, a reset action, and stated domain and model limits. Some abstract cards need an interactive structure viewer or proof-step explorer rather than a slider.
11. **Use cases and modeling translation.** Identify a question, map real-world quantities to mathematical objects, state assumptions and units, explain why the math fits, and describe evidence needed before treating the result as a real-world conclusion.
12. **Connections and contrast.** Typed relations with a written reason, conditions, and evidence. Include at least one useful contrast or failed analogy. Do not infer relation truth from graph proximity or shared keywords.
13. **History.** Separate the development of the idea, notation, proof/method, terminology, and application. Include uncertainty and competing accounts rather than a mandatory inventor field.
14. **Pitfalls and boundaries.** Common misreadings, counterexamples, numerical pitfalls, domains where the idea changes meaning, and known non-applicability. A visual that hides a singularity must say so.
15. **Try it and explain it.** Two or three optional prompts: read/translate an expression, predict a manipulation, construct a case or counterexample, and explain what a result licenses. Reveal solutions deliberately. No compulsory gamified progression.
16. **Sources and revision.** Claim-level or section-level source IDs and locators; provenance; licenses; author/reviewer status; revision; known source gaps. Draft content is visible as draft and cannot silently count as reviewed coverage.

### Formal grammar is a real contract

Do not confuse TeX rendering with mathematical grammar. For the supported expression subset, use an explicit expression AST with whitelisted node types, typed operands and binding semantics. TeX and natural-language readings are renderings of that AST. The MVP can support constants, variables, arithmetic, equality, function application and composition; binders, matrices, quantified logic and derivatives can be separate validated families rather than pretending one small parser covers all mathematics.

The visible grammar panel should distinguish these questions:

- Can this string be parsed in this notation?
- Are its operands well-typed in the chosen mathematical context?
- Is the operation defined for these values?
- Is a claimed equation or proposition true under the stated assumptions?
- Does that mathematical claim fit the physical situation?

Syntax validation alone never answers the remaining questions. A theorem source is not automatically evidence for the empirical adequacy of an application.

## Example ladder and meaning of “leaf”

Interpret “leaf example” as a concrete, completed instantiation whose result the user can inspect without following further links. It is not an unfinished branch or a one-line application name. An example may link to background, but must include enough inputs, definitions, computation and interpretation to close locally.

Each primary card ships with at least these five examples:

| Level | Required contribution | Typical check |
|---|---|---|
| 1. Minimal | Smallest useful numeric or finite-object case | Hand-checkable exact answer |
| 2. Visual | A geometric, graphical, spatial or structural case | Alignment between picture, values and expression |
| 3. Applied | One concrete measurement or designed system | Units, variable mapping, explicit idealizations |
| 4. Transfer | A second domain using the same stated structure | Role-by-role mapping; what the mapping preserves and loses |
| 5. Boundary | A counterexample, undefined case or tempting misuse | Explain precisely which condition fails |

For richer cards add a symbolic/parameterized example, a historical reconstruction, a numerical-versus-exact example, and an alternative representation. Five examples must not be five parameter changes of the same problem.

Every example record contains: stable ID, parent card IDs, example role, question, mathematical setting, assumptions, supplied values, variable/units table where relevant, expression or construction, numbered reasoning, exact result when available, numerical result with tolerance when appropriate, interpretation, independent check, failure conditions, source/derivation provenance, and optional experiment preset. Show one fully worked case, one partially worked case and one independent attempt across the set when useful.

## Historical sourcing policy

History is a collection of claims supported by sources, not a decorative “invented by” line.

- Distinguish earliest currently attested use from actual origin; independent development from transmission; concept from notation; theorem statement from proof; modern reconstruction from contemporary formulation.
- Record time precision explicitly: exact year, interval, approximate date, century, or unknown. Do not fabricate a specific day to satisfy a timeline schema. BCE/CE must sort correctly; unknown dates stay undated.
- Give region, language, intellectual/practical context, artifact/work, and people or communities where sources support them. Do not turn “first European publication” into a universal first.
- Prefer primary editions, manuscripts and archival/critical works for strong first-use claims, supplemented by recognized specialist histories. Modern tertiary explanations can orient the reader but cannot alone support contentious priority claims.
- Record edition, page/section/folio, stable URL or identifier, access date, quotation boundaries and rights. A URL without a supporting passage is incomplete evidence.
- Use attribution states such as supported, approximate, disputed, traditional attribution and unresolved. For contradictory accounts, show the competing claims with their evidence; no confidence percentage without a defensible method.
- Treat notational evolution and semantic drift as useful content: the same form may change use; modern notation may conceal the shape of the earlier idea.
- Source gaps may remain in drafts. Published history panels either include supported statements or explicitly say what is unknown; they must not fill gaps with generated prose that reads as fact.

## Broad coverage without an unbounded first release

Keep two independent organizing axes: mathematical field and expressive job. Also index scale, discreteness/continuity, deterministic/stochastic character, exact/approximate status, representation, historical period/context, and prerequisites. These facets are filters, not claims that every object belongs in one exclusive category.

| Coverage family | Representative scope |
|---|---|
| Mathematical language and foundations | Objects, variables, expressions, equality/equivalence, sets, relations, functions, quantifiers, logic, proof, axioms, type/domain |
| Number and arithmetic | Natural/integer/rational/real/complex numbers, operations, ratios, divisibility, primes, modular arithmetic, magnitude, orders, infinity distinctions |
| Algebra and structure | Equations, polynomials, composition, groups, rings, fields, symmetry, invariants, linear structures |
| Geometry and space | Euclidean/non-Euclidean settings, coordinates, distance, angle, transformations, topology, manifolds, dimension |
| Change and accumulation | Limits, sequences, continuity, derivative, integral, differential equations, discrete differences, dynamical systems |
| Linear algebra | Vectors, dot product, matrices, linear maps, basis, rank, determinant, eigenstructures, decompositions |
| Probability and statistics | Events, distributions, conditional probability, expectation, variance, sampling, inference, uncertainty, association versus causation |
| Discrete mathematics and computation | Counting, combinatorics, graphs, recurrence, algorithms, computability, complexity, coding/information |
| Optimization and decisions | Constraints, objectives, feasible sets, gradients, convexity, linear/integer optimization, tradeoffs |
| Measurement and applied modeling | Units, dimensional analysis, scaling, error, numerical methods, model identification and validation |
| Patterns across fields | Symmetry, invariance, composition, duality, feedback, periodicity, conservation, recursion, scale, locality, emergence; each is qualified by a mathematical setting |
| History and practice | Parallel developments, notation, proof cultures, instruments, translation, computation, transmission and application |

Expressive jobs: count; compare; locate; transform; compose; constrain; classify; measure change; accumulate; model interaction; represent uncertainty; compress; optimize; prove. The entry interface can ask “what would you like to express?” with these visible options and sample objects, avoiding a course-only hierarchy.

Maintain a coverage register with planned, draft, mathematically reviewed, historically reviewed, interactive tested and published states. Planned nodes are visibly incomplete and do not masquerade as full cards. Report depth and status, not just a total card count.

## Agreed first cohort

The authoritative cohort is the eight cards in PRODUCT_SPEC.md, followed by sixteen more for a 24-card release. Implement composition first, then logarithm and derivative. Complete ratio, function, exponentiation, limit and accumulation before calling the eight-card release complete. This replaces the earlier alternative cohort recommendations.

## Interface and independent discovery

### Library and reader

Use a visual library with legible live or static thumbnails, semantic titles, expressive-job chips and “what changes” subtitles. The card opens to a large working visual, a short meaning statement, the central expression and a context-sensitive symbol inspector. A clear section rail offers Meaning, Grammar, Examples, Experiment, Connections, History and Sources; deep material unfolds within those sections.

Support linked notation highlighting: focus one glyph and the relevant object/axis/table column lights up. Use synchronized verbal, symbolic and visual representations with careful labeling rather than decorative animation. On phones the experiment stays directly above its controls/results; comparisons stack vertically; gesture-only actions always have buttons and keyboard equivalents.

History has a timeline and a textual list. Source passages, competing attribution and date uncertainty are inspectable. Timelines must not imply influence from temporal proximity; influence is a separately evidenced edge.

### Discovery workbench

Provide a persistent “My connections” tray. The user can initially pin two cards and compare input/output types, transformation, conserved quantities, assumptions, characteristic behavior, examples and failure modes. Layout adjacency itself asserts nothing.

An explicit connection form asks for: what seems similar; object-role mapping; what is preserved; where the comparison fails; an example; a counterexample or disconfirming test; and a status. Suggested status progression is observation → proposed connection → checked example → counterexample found or externally supported claim. A checked example is not a proved theorem.

Save experimental snapshots including card revision, renderer/model version, parameters, viewport, random seed if applicable, exact result or tolerance and the user's note. Restore should show whether the original revision is available. Never relabel a personal conjecture as a sourced mathematical relationship automatically.

Use typed graph edges: prerequisite_of, example_of, representation_of, special_case_of, generalizes, equivalent_under, composes_with_under, contrasts_with, applied_in, historically_influenced_by, notation_for, supported_by, and personal_hypothesis. Conditional edges carry explicit assumptions and a reason. Keyword similarity may suggest candidates in a separate optional panel; it cannot manufacture authoritative edges.

### Product tone

Encourage inspection and manipulation rather than a stream of answers. Optional “predict, change, inspect, explain” prompts are concise and dismissible. Answers reveal deliberately. No mandatory quiz, streak, points, or prerequisite lock. Terminology has immediate plain-language glosses, but formal definitions remain available beside them.

## Interactive module contract

Each module has a registered component ID, supported version, mathematical model ID/revision, bounded parameters with types/defaults/ranges/units, deterministic compute function, invariant/check definitions, representation labels, accessible description, static fallback and nonvisual result output. Modules are trusted application code; content supplies validated data/configuration. No arbitrary JavaScript, eval, uploaded HTML scripts or untrusted executable formulas.

For stochastic modules, require an explicit seed, sample count and separation of analytical expectation from observed estimate. For numerical modules, record method, step size/tolerance, rounding and limitations. For discontinuities, singularities, domain breaks and overflow, show explicit mathematical state instead of drawing a connecting line through invalid points.

### Reusable families

- Mapping diagram / typed function composition.
- Linked number line, ratio table and scale geometry.
- Function plot / transformation with interval and domain inspector.
- Discrete recurrence versus continuous trajectory, visibly distinguished.
- Tangent/secant and accumulation with method/error disclosure.
- Vector/linear-transform grid with basis arrows and exact small matrices.
- Finite graph editor with adjacency representation and property inspection.
- Probability tree/finite outcomes with normalization checks.
- Symmetry action viewer with invariant inspection.
- Expression parse/binding viewer and reversible derivation steps.

Avoid a single universal slider template. Abstract concepts need changes to structure, examples or assumptions; history needs source comparison; proof needs hypothesis/step inspection.

## Deterministic acceptance criteria

1. Every published primary card has a valid type-specific schema, complete symbol/domain/assumption fields, five distinct completed examples, at least one boundary case, sourced history or explicit historical gap, and no unresolved required references.
2. For each supported grammar family, fixtures distinguish valid syntax, syntax errors, type mismatch, undefined values, and a false but well-formed proposition. A valid parse never displays a success badge meaning “mathematically true.”
3. Synchronized representations agree on the same underlying values. A test changes a parameter and checks expression, table, visual and accessible result all update consistently.
4. Each interactive module has exact small reference cases or independently derived numerical baselines; boundary cases; invariant checks; deterministic reset; and snapshot round-trip. Tests do not simply call the same implementation twice and compare it with itself.
5. Composition rejects or clearly explains incompatible codomain/domain combinations; changing order can produce a different result and the interface preserves that distinction.
6. A linear-versus-affine comparison shows the role of the offset; the reader can inspect which definition is in use. Zero input and additivity/homogeneity checks are labeled as examples unless the proof is supplied.
7. Exponential and proportional modules expose domain/rate assumptions; invalid logarithm inputs and overflow are explicit. No plot line crosses an undefined interval.
8. Derivative/integral modules label numerical approximations and avoid implying every continuous function is differentiable. The renderer can represent an undefined derivative rather than forcing a value.
9. Probability controls preserve total probability where required; conditional events with zero probability produce an explicit undefined state in the finite elementary model. Sampling output is separate from exact probabilities.
10. Keyboard users can change all controls, inspect expressions, retrieve numerical results and compare cards. Reduced motion removes animation without removing information. Color is never the only carrier of mathematical distinction.
11. The graph and timeline have table/list equivalents. Narrow screens retain complete controls and results without horizontal clipping of core tasks.
12. Historical first-use/priority statements have claim-level sources and locators. Date ranges and disputed claims remain visible in both timeline and prose/export.
13. Personal conjectures stay distinct from reviewed relations in filters, exports, retrieval metadata and visual style. Editing a note never mutates a published card.
14. A restored snapshot reproduces the original computed state for the retained model version or explicitly reports incompatibility. New software cannot silently reinterpret old parameters.
15. The offline/static textual projection contains formal definition, local symbol meanings, conditions, worked examples, history/source claims and a textual account of the interactive lesson. Essential knowledge is not trapped inside pixels or event handlers.

## Risks and design responses

| Risk | Response |
|---|---|
| Encyclopedia breadth with thin explanation | Freeze a rigorous reference cohort and coverage statuses before bulk expansion |
| Beautiful diagrams mistaken for reasoning | Separate representation, numerical check, derivation and proof statuses visibly |
| Math-as-language metaphor hides different formal settings | Context/domain/type names travel with every definition and expression |
| Overloaded glyphs produce false connections | Context-specific notation IDs and explicit sense selection |
| Model result presented as fact about reality | Application variable mapping, units, assumptions and validation evidence |
| Pattern graph becomes an authority machine | Typed conditional edges and a separate user hypothesis layer |
| Infinite prerequisite descent | Complete leaf examples and declared prerequisite boundaries |
| Single inventor mythology | Claim-based history separating idea, notation, proof, method and application |
| Animation obscures actual values or limits | Synchronized numeric/text output, pause/reset and static fallback |
| Automated content gives an appearance of review | Separate content generation, mathematical review, historical review and interaction validation |
| A successful numerical example treated as a theorem | Explicit evidence-kind/status and counterexample prompts |
| A global universal parser/evaluator becomes the project | Implement a small typed expression subset and component registry, expand by tested families |

## Build order

Follow BUILD_PLAN.md, the authoritative phased sequence. This document supplies authoring detail, not a competing implementation schedule.
