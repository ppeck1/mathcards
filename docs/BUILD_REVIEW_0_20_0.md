# Build review and updated matrices — 0.20.0

Reviewed on 2026-10-26. This build completed the agreed notation phase before
adding **Chain rule**, **Partial derivatives**, and **Gradient**. Models, stories,
views, reference entries, bindings and map placement remain separate modules.

The sealed [pre-expansion notation record](NOTATION_GATE_BEFORE_EXPANSION.json)
contains 29 cards, 23,991 occurrences and 795 forms, with zero unresolved or
review items. That checkpoint had 335 authored definitions and 20 contextual
entries, for 355 index entries. These are baseline figures, not the final counts
for the later calculus expansion. The finite scope is defined in
[the notation contract](SYMBOL_NOTATION_COVERAGE.md); it does not claim to contain
every notation used throughout mathematics.

The expanded collection has **32 draft cards, 164 worked examples, 274 numeric
fixtures and 40 canonical sources**. Its 190 coverage rows contain 32 draft
specimens and 158 planned concepts. The written projection has 196 deterministic
BOH documents. There are 69 views: 32 Geometry, 32 Graph and five genuine 3D views
(the original three plus the two new field topics). The landscape retains eight
territories and 24 areas, with six available Calculus lessons and 74 distinct
mapped planned concepts. The expanded index has 372 entries: 352 authored
definitions and 20 contextual entries. Its completed notation gate covers
18,000 fields, 29,760 occurrences and 826 forms, with zero unresolved forms and
zero pending callable reviews. The report separately accounts for 664 formatting
records and 58 reviewed UI gesture-icon exclusions. Full-suite and browser
verification results belong to the release record.

## What works and what remains limited

| Area | Working in this build | Remaining or limited |
|---|---|---|
| Notation-first sequence | The 29-card/common-reference gate closed before concept implementation; the expanded 32-card gate then passed with 29,760 resolved occurrences and zero unresolved/callable-review items | Future cards, stories and views extend the corpus and repeat the gate; a larger definition count alone does not establish coverage |
| Common reference | Greek uppercase/lowercase names, typed/TeX forms, units, grouping, bars, set/logic notation and context-sensitive readers are included in the declared baseline | Finite current-app/common-reference completion; specialized future notation and pedagogical qualification remain ongoing work |
| Semantic corrections | Greek case is retained; vector projection binds its two result components; apostrophe derivative lookup and canonical prompt questions are supported; constructor-like prose was clarified | A shared spelling is not a shared mathematical type. Scalar/vector, function/value and local quantity roles still require explicit declarations |
| Chain rule | The affine inner rule and square outer rule expose their current values, two local derivatives and the product; five original cases include reversed and zero sensitivities | Only g(x)=ax+b and f(u)=u²; no general symbolic differentiator. Physical panel stories stay in a positive-side range while the polynomial model permits signed inner values |
| Partial derivatives | Hold y fixed, inspect a coordinate slice and its tangent, and keep height, first partial and second partial distinct | Only F(x,y)=c+ax²+by² with bounded controls, without mixed terms or arbitrary imported surfaces. General partials can depend on the other coordinate |
| Gradient | Two partials form a vector; its norm is a separate scalar primary output. Hilltop, saddle and flat examples distinguish different zero-gradient situations | Normalized direction is unavailable at zero. Greatest-local-increase reasoning uses differentiability and compatible equally scaled Euclidean coordinates; it is not a global route claim |
| Shared analytic field | Partial derivatives and Gradient use one pure field evaluator for height, slopes, contours, slices and spatial geometry | Shared implementation does not merge their distinct learning tasks or primary output quantities |
| Genuine 3D | Two field modules declare actual height-surface views with point/slice/tangent information; the existing host owns camera handling alongside Geometry and Graph | A surface view has two independent inputs and one height output; the camera is viewing state, not a third mathematical input |
| Connected stories | Three new four-step constructed stories use the existing calculation trace, selected variable marks and readable values | The scenes demonstrate stipulated mathematical models, not measured manufacturing or terrain data; direct learner qualification remains open |
| Host continuity | Registered controls, playback, motion, comparison pins, camera state and saved-workspace mechanisms are reused | No topic-specific host branch, automatic quantity wiring, implicit unit conversion or new saved-record format is implied |
| Search and atlas | New calculus vocabulary joins the index and card links; six lessons are available in the Calculus area, within the retained eight-territory/24-area map | Related definitions and map proximity remain editorial navigation, not proofs or mandatory preparation; only 74 planned concepts are currently mapped |
| Canonical checks | Actual schema/reference/AST validation, all 274 numeric fixtures and 196-document deterministic export pass; all 36 new fixtures and 15 new example presets match the provider; expanded notation audit passes | Full-suite totals and actual browser evidence are recorded separately; these checks are not independent mathematical/history review |

## What remains in the current plan

| Plan item | Status after 0.20.0 | Remaining acceptance work |
|---|---|---|
| T00–T02: contracts/compiler | Three new canonical cards and allowlisted models retain the pipeline, with a vector gradient AST distinct from its norm readout | Preserve identity/version rules, exact result types, deterministic projection and notation classifications as providers expand |
| T03–T05: discovery/dossier | Common search, a broader notation reference, card vocabulary, related definitions and map placement connect language to experiments | Qualify novice comprehension, evaluation-point clarity and useful text/table alternatives alongside visual interaction |
| T06: compare/record | New modules use the existing comparison, pin and private record contracts; field camera behavior uses the declared view interface | Qualify cross-concept workspaces, restoration and meaningful quantity comparisons under T12 |
| T07–T09: foundations | Earlier foundational mechanics retained; new calculus explicitly builds on composition, derivative and vectors | Reconcile general Ratio/Integral inventory scope; complete independent mathematical review and sourced historical accounts |
| T10–T11: BOH compatibility | Static written projection reaches 196 deterministic documents with complete canonical payload preservation | Disposable live indexing, revision update and retrieval retaining definitions with their conditions; no live integration claim from exports alone |
| T12: accessibility/offline/recovery | Keyboard-capable controls, reduced motion, paced values, definitions and declared view alternatives remain implemented | Assistive technology, actual 200% browser zoom, physical touch devices, offline scenarios and fresh-profile recovery qualification |
| T13: reviewed expansion | The baseline notation gate preceded the three-card batch, and its expanded gate also passes; draft breadth reaches 32 cards and 164 examples | Maintain the notation gate for future arrivals and complete separate mathematical/history/visualization review before treating draft breadth as reviewed release readiness |
| T14: relations | Selectable landscape, typed neighborhoods and related-definition links retained; calculus connects to existing composition/vector ideas | Relation-level filters, a multi-concept relation matrix and evidence refinement |
| T15: personal workspace | Named records, backups and exact-version compatibility remain the existing mechanism | Selected notebook exports, revision comparison and broader record browsing |
| Continuing notation gate | Selected canonical, story, runtime and reference surfaces have an explicit finite audit contract | New vocabulary, helper spellings or mathematical view labels require inventory entries and regression checks with each future arrival |

## Principles to add or enforce next

| Priority | Principle | Status | Concrete next step |
|---|---|---|---|
| 1 | Explain the notation before expanding the concept | Pre-expansion baseline completed; continuing gate | Require a notation delta and exact contextual readers with every subsequent concept, story and view |
| 1 | One source of mathematical truth can feed several lessons | Implemented for the two field modules | Keep the analytic field evaluator shared while each module declares its own output, story, views and learning purpose |
| 1 | Function identity differs from evaluated value | Explicit chain-rule bindings | Preserve f/g as functions, u=g(x) as the inner value, and f(u)=h(x) as the current scalar output |
| 1 | A vector differs from its norm | Enforced in gradient AST and bindings | Keep both signed partial components and the nonnegative norm separately named through stories, graphs, ports and saved observations |
| 1 | A derivative has an evaluation point and conditions | Explicit in the three cards | Keep f′ evaluated at g(x), hold other coordinates fixed for a partial, and retain differentiability/coordinate assumptions for gradient directions |
| 1 | A zero result can have unavailable auxiliary information | Enforced for zero gradient | Preserve valid zero vector/norm values while withholding an invented unit direction; do not infer a hilltop from zero alone |
| 1 | Bounded demonstrations state the broader definition | Explicit polynomial-family limits | Keep arbitrary-function, numerical-estimation, physical-model and general-surface claims outside these restricted providers |
| 2 | A 3D representation earns a mathematical role | Implemented for actual scalar-field surfaces | Keep coordinate slices and local slope/vector information tied to the same field, with camera state isolated from model parameters |
| 2 | Different quantities need different graph captions | Implemented declared slices | Plot h′(x), partialX and gradient norm under their own labels; retain composed value, height and vector components as separate readings |
| 2 | A coverage report is a bounded evidence record | Both baseline and expanded gates passed with separate reports | Report occurrences/forms, exclusions and unresolved cases for the actual corpus rather than claiming universal mathematical coverage |
| Next | Learning and access need direct qualification | Open under T12 | Observe learners following the value/derivative distinction and field views; record keyboard, assistive-technology, device and recovery results |
| Next | More draft cards do not complete review gates | Mathematics/history review open | Track independent review and historical evidence separately from catalog size, model fixtures and visual polish |

See [release verification](VALIDATION_0_20_0.md),
[the notation contract](SYMBOL_NOTATION_COVERAGE.md),
[the playground contract](PLAYGROUND_MODULES.md),
[the index contract](MATH_INDEX.md), and
[the atlas contract](CONCEPT_ATLAS.md). Earlier release sections and reviews
remain preserved.
