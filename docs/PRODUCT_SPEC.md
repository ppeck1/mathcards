# Product specification

## 1. What Paul should be able to do

Open a mathematical idea, see what it does, read its notation as a meaningful statement, change its inputs, inspect what remains true, and decide whether its structure helps describe a different situation. Save that exploration with the assumptions and evidence needed to revisit it.

Mathematics includes multiple formal languages and conventions. The interface must expose the chosen setting rather than imply every notation has one universal meaning. A symbol, concept, theorem, computational method, historical event and applied model are distinct things even when one dossier brings them together.

This continues the earlier Philosophy Atlas's question-centered, relationship-based organization and rich dossiers. It adds executable mathematical models, explicit grammar, reproducible experiments and independently addressable worked cases. The prior coding-library implementation was not recovered; no code reuse from it is assumed. Philosophy Atlas is a design precedent, not the separate project-management repository called `project-atlas`.

## 2. Primary experience

Three primary destinations: **Explore**, **Workbench**, **Notebook**. An open card is a persistent detail route, not a modal that disappears with context. Sources and history live inside the card. Library status, debugging and ingestion diagnostics are secondary utilities.

### Explore

Offer two equally accessible entrances: a visual collection of mathematical ideas and a list of expressive jobs. Initial jobs:

- Describe quantity and scale.
- Describe change and accumulation.
- Combine processes and transformations.
- Express uncertainty and evidence.
- Describe structure, connection and space.
- Express constraints, choices and what stays invariant.

These are overlapping tags, not a compulsory course or mutually exclusive classification. Branch and difficulty filters are available without becoming the main navigation. Search accepts plain descriptions, conventional names, notation aliases and exact IDs. It does not promise algebraic equivalence search.

Each preview tile shows title, one meaningful visual thumbnail, a central expression, a one-sentence expressive purpose, and readiness of its material. Avoid numerical difficulty or usefulness scores. Planned entries must be visibly planned and excluded from the default available-card count.

A filtered relationship map is an optional view, initially one card and its immediate neighbors. Every edge has a type and explanation. The same relationships are browsable as a keyboard-accessible list. No giant force-directed graph as the landing screen; visual proximity never implies proof or historical influence.

### Open card

Top screen: title, short question/purpose, central expression with readable translation, one live visual, compact controls, selected values and explicit mathematical setting. It should be possible to learn something by changing one control before reading a long section.

Below: persistent section links to **Meaning**, **Grammar**, **Examples**, **Connections**, **History**, **Sources**. Desktop may show an outline beside the dossier. On mobile it becomes a compact section menu. Long prose uses progressive disclosure, but a visualization's domain and current limitations remain adjacent to it.

Recommended visual direction: a precise field notebook with generous plots and dense optional detail, restrained ink/paper surfaces, readable math, stable labels and low visual noise. Color tracks mathematical roles across representations, accompanied by names and shapes. Final styling can be tuned without changing the schema or navigation.

### Workbench

Place two cards or two states of one card side by side. On mobile stack them with independent controls and a clear shared-state indicator. Explicitly choose whether axes, units, input values or parameters are linked. Never synchronize incompatible quantities because their names happen to match.

Support a compare matrix for expressive job, input/output types, domain, assumptions, operation, invariant, inverse, limit/failure mode, examples and historical context. Distinguish exact identity, theorem under assumptions, structural analogy, shared notation, historical influence and a user's proposed connection.

The first composition tool supports only declared compatible model ports. For example, `x -> x+3 -> x²` is allowed, and shows the intermediate value. Connecting a scalar output to a vector input is rejected with an explanation. The initial tool does not claim to compose arbitrary mathematics.

Provide an **Observe first** setting: hide curated connections and worked conclusions until explicitly revealed. It must be a reversible user choice, not a forced testing ritual. Prompt fields are optional: What changed? What stayed fixed? What assumption matters? Where would this fail?

### Notebook

Save a snapshot containing the card ID and revision, renderer and model version, parameters, units, domain, selected representation, numerical method/tolerance, optional random seed, observations, a possible connection, evidence for it, attempted counterexamples and unresolved questions. A note may be incomplete; these are aids to thought, not required form fields.

Notebook statuses: observation, conjecture, tested instance, supported relationship, rejected, unresolved. A tested instance is not a proof. User labels do not change the reviewed corpus. Mark old notes when their source card has changed, preserve the old snapshot metadata, and let the user compare revisions. The first release may reopen a snapshot only when its exact model version is still installed; otherwise show the saved parameters with an explicit version-unavailable message.

Support local save, undo for deletion, JSON backup/restore and Markdown export. Do not rely on browser storage as the sole durable copy. Never include private notes in public corpus export by default.

## 3. A card is an extensive dossier with addressable parts

Use one primary idea per card. A preview is not the whole record. Definitions, statements, examples, history claims and visualizations have stable child IDs and can be linked directly. Avoid word-count padding; completeness depends on roles being filled.

| Element | Required content |
|---|---|
| Identity | Stable ID/slug, revision, kind, title/aliases, branches, expressive jobs and content status |
| Meaning | What relationship this expresses; what question it answers; plain-language reading; what it does not establish |
| Formal setting | Definition, objects, domain/codomain, assumptions, units/dimensions where relevant, mathematical convention |
| Grammar | Symbol roles, reading order, arity, input/output types, grouping, binding/scope, precedence, well-formed and malformed expressions |
| Notation | Literal TeX, readable text, alternate notation with context, overloaded-symbol warnings, display-to-semantic mapping |
| Properties | Statements paired with hypotheses, explanation/derivation or proof sketch, verification level and source pointers |
| Representations | At least two useful views: symbolic, verbal, geometric, numeric/table, process, probabilistic or structural |
| Interactive model | Clear purpose, allowlisted renderer/model IDs, parameters, linked state, validation, outputs, limits, reset, text/table fallback |
| Examples | At least five concrete leaf cases, showing given values, model, steps, result, interpretation and assumptions |
| Applications | At least two contexts with mappings and stated limitations; label constructed toy models versus sourced applications |
| Relationships | Typed edges, direction, reason, assumptions and source or conjecture status |
| History | Separate development of idea, notation, formalization, transmission and applications; explicit unknowns and disputed attributions |
| Sources | Claim-level source refs and locators; source kind and licensing/quotation/asset rights |
| Discovery | Open-ended variations, invariants to inspect and a failure probe; optional, not leading toward a predetermined metaphor |
| Maintenance | Review status by math/history/visualization area, changelog, unresolved gaps and provenance |

Core kinds: concept, notation, operation, structure, theorem, method, model. History events and source records are separate child/registry types. A theorem card requires precise hypotheses and conclusion; a method requires preconditions and termination/accuracy limits; a model requires variable-to-world mapping and empirical scope. The starter schema models the shared core; add kind-specific validation during Phase 0 before publishing those later kinds.

### Example ladder

Every authored core card has at least these five cases, with extra cases where they expose a different structure:

1. A small concrete computation with every step visible.
2. A visual/geometric or table-based version of the idea.
3. A different-domain application with explicit quantity mapping.
4. A boundary, degenerate or limiting case.
5. A counterexample, malformed use or tempting wrong generalization.

At least three are positive worked cases; a counterexample does not substitute for all applications. Every case has a revealable reasoning path, a stable URL/ID and a text-only version. Exercises may follow the examples but are optional. No points, streaks, timed quiz or compulsory sequence is part of the first release.

### Grammar is substantive

Separate lexical identity from context. `|x|`, `|A|`, `P(A|B)` and a divisibility bar can share a glyph without sharing a grammatical role. `f⁻¹` can mean inverse function while `(f(x))⁻¹` is reciprocal in another setting. A dummy index is bound within its summation; a parameter can be fixed in one view and varied experimentally in another.

Each executable specimen uses a small typed semantic tree. Node IDs map to an expression outline and visual marks. TeX is a presentation serialization, not the execution source. Selection of a symbol highlights its declared role and mapped marks; do not make this depend on brittle rendered DOM text matching.

The supplied starter ASTs explicitly cover core expressions, with output symbols mapped separately. They do not parse the entire displayed equality. Composition selects a different semantic variant when order changes; the numeric renderer binds both functions to real inputs/outputs, while general reversed composition still requires a type/domain check. The starter validator checks structural references, selected binders and control fixtures; implement the full type/domain contract in Phase 0 rather than claiming it already exists.

Provide explicit English readings, but do not claim that a translation captures every formal commitment. Grammar correctness, mathematical truth and empirical applicability have separate checks. A syntactically valid expression may be undefined, false or an unsuitable model.

Initial expression support is curated, not a parser for all TeX. Reject ambiguous input rather than silently choosing a convention. Later editable-expression work needs its own grammar, parser, type checker and threat/resource limits.

## 4. Visualizations must reveal mathematical behavior

Every published interactive card has at least one meaningful intervention, two linked representations and one inspectable limit/failure condition. Some abstract cards may use a step-through proof, finite construction or relation table rather than animated geometry. Provide the reason when an interactive widget is not appropriate; do not invent ornamental animation to meet a quota.

### First renderer families and acceptance examples

| Family | Interaction | Required behavior |
|---|---|---|
| Function/composition | Change input, reorder declared operations | Display intermediate/output values; show that order may matter; enforce domains |
| Exponential/logarithm | Change base and positive input; inspect inverse view | Permit bases above one and between zero and one; reject base one; show domains and reversed input/output roles |
| Limit/derivative | Move evaluation point, vary nonzero step from both sides | Secant differs from analytic derivative; step zero does not evaluate quotient; corner preset has no derivative |
| Accumulation | Change interval and finite partition count | Distinguish signed accumulation from area magnitude; numerical approximation labeled; interval direction visible |
| Vector/matrix, next release | Drag vector and alter matrix entries | Preserve dimensions; show order effects and singular cases; no inverse for singular matrix |
| Conditional probability, next release | Alter joint-frequency table | Compute from declared joint counts; zero conditioning denominator undefined; no causality claim |

Use exact or analytic values when available and numeric approximations when appropriate. Show which is which. Floating-point error is not mathematical failure. Distinguish undefined, divergent, outside real domain, incompatible units, insufficient data and numerical failure. Never join a plotted curve across a known discontinuity or draw asymptotes as sampled data. A finite sequence of samples does not prove a limit, continuity or convergence.

Validity belongs to each output. For example, at h=0 the finite difference quotient is undefined, while the cubic's analytic derivative at a=2 remains 12. The interface must preserve that distinction. Likewise, example assumptions describe the case actually being studied; conditions being tested or violated are stored separately and never asserted as true assumptions of a counterexample.

Controls need labels, numeric input alternatives, keyboard operation, reset, touch support and reduced-motion behavior. Each visual needs a useful text summary and an accessible table when values are central. Maintain meaningful labels at 360px and 200% zoom. Scroll within a wide equation if needed; do not make the whole page wider than the viewport.

History has a separate interactive timeline by claim category, with uncertain date ranges shown honestly. Historical connection does not imply mathematical prerequisite. Do not silently collapse BCE/CE dates, calendars, composition date, surviving manuscript date and publication date.

## 5. Help Paul find patterns without certifying them prematurely

Tag cards by operations they make possible and features that can be compared: linearity, additivity, composition, inversion, symmetry, conservation, locality/globality, discrete/continuous, sensitivity, feedback, scale and uncertainty. These tags are editorial navigation aids, not a new universal theory of mathematics.

Curated relationships must specify the level of connection:

- `prerequisite_for`: learning dependency, with a reason; not historical priority.
- `special_case_of` / `generalizes`: precise scope and assumptions.
- `inverse_of`: applicable domain/restriction.
- `represents` / `approximates`: mapping and limitations.
- `equivalent_under`: hypothesis-scoped equivalence.
- `analogy_to`: explicit correspondence and where it breaks.
- `contrasts_with` / `counterexample_to`: what distinction it establishes.
- `historically_influenced`: historical evidence, not visual resemblance.

Own insights can be pinned before revealing curated connections. A connection panel should ask what structure would need to match: objects, operation, constraints, preserved quantity, allowable transformations and failure behavior. It must permit the conclusion that two ideas merely look similar.

Good prompts: compare equal increments with equal ratios; change the coordinate scale; swap operation order; find a condition whose removal breaks a property; construct two models that fit the same finite observations; distinguish a representation change from a change in the modeled system.

## 6. Breadth and depth

The coverage inventory is an expansion map, not a promise that all mathematics is captured. Start with quantity and language, then functions/change, structure/space, uncertainty/inference, discrete systems, optimization and dynamics. Include number theory, geometry, topology, abstract algebra, numerical computation, information theory and logic in later waves.

First authored release: ratio/proportion, function, function composition, exponentiation, logarithm, limit, derivative, definite accumulation. Each needs the complete card requirements above. Provide a brief prerequisite bridge for any concept referenced before its own card exists; show missing/unpublished targets honestly.

Next wave: vector, matrix transformation, linear system, dot product, probability event, conditional probability, Bayes' rule, expectation, variance, graph, recurrence, optimization, symmetry, invariant, modular arithmetic and complex number. Branch labels remain optional routes; avoid making advanced jargon the entrance criterion.

History coverage grows alongside mathematical coverage. Include multiple traditions and transmission paths where sourced, avoid present-day national identities projected backward, and preserve names/scripts and transliteration variants when supported. Do not impose invented numerical cultural quotas or assume that an eponym identifies the earliest use.

## 7. Source and history rules

Keep claims separate: earliest attested surviving example, documented independent development, popularization, current formal definition, notation adoption and the person honored by a name. `unknown` is valid, `unresearched` is valid, and they are different. A missing surviving source does not prove absence of earlier knowledge.

For teaching mathematics, use authored derivations checked against standard references. For history, prefer inspectable original works/critical editions and scholarly historical studies; institutional reference works can establish a bounded secondary claim. Record original-language source, translator/edition, locator, original wording versus modern reconstruction, date precision and confidence. Cite a specific passage, not only a homepage. Never manufacture a quotation, source locator or claim of direct primary-source inspection.

Each historical claim has `claim_kind`, `statement`, date or interval, people/tradition where appropriate, `evidence_status`, source refs, uncertainty and notes on anachronism. A card may be ready for mathematical use while parts of its historical account are explicitly still under research. Source popularity never upgrades a claim to theorem or empirical fact.

History is a required release workstream. The three supplied specimens may have gaps because they are draft design records. Before calling the eight-card library complete, every card needs a sourced historical account addressing the motivating problem/development, notation, and later formulation or transmission. Each strand needs a supported claim or a specific evidence-based explanation of what is unresolved or not applicable. An entirely unresearched history panel cannot pass as a finished card. Priority assertions require specialist corroboration and, where inspectable, an original work or critical edition; otherwise keep the assertion explicitly secondary and bounded. Later regional/cultural expansion must be driven by evidence rather than a default European inventor list.

Maintain attribution and asset rights. Write original explanations and original diagrams. A freely readable source is not automatically licensed for copying, and historical text public-domain status does not automatically cover a recent translation or scan. No copied textbook exercise banks are required.

## 8. Acceptance of the learning experience

Paul should complete these scenarios without a tutorial explaining the UI:

1. Find a card by a question in ordinary language, inspect its expression and change one parameter.
2. Select a symbol and identify its role, allowed inputs and a possible ambiguity.
3. Open five worked cases and identify one invalid use.
4. Compare two operations on the same input, notice an order effect and save that observation.
5. Reopen a saved experiment and recover its exact declared model state, or receive an explicit unavailable-version explanation.
6. Discover a curated connection after recording an independent conjecture; distinguish analogy from conditional equivalence.
7. Read the source and uncertainty behind a historical statement.
8. Export a card to BOH and retrieve its definition with relevant conditions using an isolated test corpus.

Success is an explainable observation and a correctly bounded attempted transfer. Card counts, animation counts, a connected graph and time spent browsing are not sufficient measures.
