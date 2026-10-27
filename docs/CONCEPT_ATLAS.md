# Concepts, fields and visual alternatives

The Atlas is an introductory navigation map of the current card collection.
Field membership describes where an idea is useful in this edition; fields
overlap. It is not a complete classification of mathematics, an account of the
research frontier, or a sequence every learner must follow.

## Continuous terrain and navigation preview (0.23.0)

The Landscape view now layers stable semantic navigation over a single baked
relief surface. `atlas-terrain-recipe.json` and `tools/build_terrain.py` generate
the self-contained `atlas-terrain.js` asset during the deterministic build;
matching recipe/generator fingerprints reuse the checked-in asset. The browser
does not generate terrain or run an idle terrain loop. The editable recipe,
field/shading/contour methods, costs and preview evidence are documented in
[Terrain atlas](TERRAIN_ATLAS.md).

“An imagined landscape for exploring mathematics. Position and elevation are
illustrative; fields overlap.” Elevation and location imply no difficulty,
importance, prerequisite depth or learning progress. The relief uses no rivers
and invents no relationship edges. Canonical membership still comes from
`atlas-regions.js`: eight territory IDs, 24 area IDs, 38 available cards and 70
mapped planned concepts retain their identities, actual counts and card links.
The earlier release sections below remain historical checkpoints.

`atlas-landscape.js` owns authored anchors, editorial hit regions, label layout
and focus bounds independently from the scalar field. Selecting an area now
fits its local bounds rather than reusing its territory's whole bounds. Labels
and 44 CSS px marker targets remain screen-sized as the camera changes; a
collision can suppress a visual label while search, native selectors and the
complete readable panel retain the destination.

`atlas-explorer.js` remains the one owner of camera and interaction lifecycle.
The compact search/“Find a place” toolbar exposes native controls, and in-map
buttons provide zoom, fit and overview. Portrait overview uses a locator-backed
horizontal crop of the world rather than a letterboxed miniature. Touch panning
has an explicit “Move map” mode so ordinary vertical swipes can scroll the page.
Pan release must not select a destination. Keyboard/reduced-motion behavior,
deep links, Back/Forward restoration, resize and independent mount cleanup are
navigation requirements; they do not alter models, notebook or workbench state.

The established routes remain `#atlas`, `#atlas/map/<territory>`,
`#atlas/map/<territory>/<area>` and `#atlas/<concept-slug>`. Concept connections
preserves the existing typed, directed, explained relationships. Terrain,
editorial fields, definition-use links and personal conjectures remain separate
from those canonical relationship claims. This redesign is isolated for preview
on `codex/terrain-atlas-and-startup`; device limitations and evidence are listed
in the linked terrain notes.

## Selectable landscape (0.22.0)

Plain `#atlas` now opens the colored geographic overview. Three separate pure
providers/controller layers keep this extension independent from the existing
connection map:

| Component | Responsibility |
|---|---|
| `atlas-regions.js` | Eight territories / 24 areas, canonical identity membership, actual availability, planned coverage references and search aliases |
| `atlas-landscape.js` | Authored SVG territory shapes, mathematical motifs, accessible region/topic hotspots and camera bounds |
| `atlas-explorer.js` | Selection, native controls, search results, camera movement, pointer/keyboard interaction and delegated connection-view lifecycle |

`AtlasExplorer.create({cards,sources,coverage})` exposes `areas`, `connections`,
`stateFromPath`, `pathForState`, `pathForCard`, `markup`, `panelMarkup`, and
`mount`. Its controller exposes `selectRegion`, `selectTopic`, `showConnections`,
`zoom`, `getState`, and `destroy`.

| URL | View |
|---|---|
| `#atlas` | Whole landscape |
| `#atlas/map/structures` | Algebra and structure territory |
| `#atlas/map/structures/linear-algebra` | Selected Linear algebra area |
| `#atlas/map/change/calculus` | Calculus area with eight available lessons |
| `#atlas/map/computation/linear-time-algorithms` | Linear-time area with the full-scan lesson |
| `#atlas/<concept-slug>` | Existing individual connections view |

The map uses a host-owned `AtlasMotion` follower for finite camera transitions,
instant reduced-motion selection, bounded panning and zooming. It owns no
mathematical simulation state. Native region/area selectors and search are
alternatives to small overview labels; desktop/touch dragging moves the camera,
and map focus permits arrow-key panning and plus/minus/zero camera controls.
All listeners, camera frames and embedded neighborhood mounts are cleaned up.

Search aliases are navigation hints. “Linear algorithms” returns Linear algebra
and Linear-time algorithms separately, with distinct explanations. The latter
now opens a dedicated full-scan lesson under Computational complexity. Its
linear operation count comes from the specified procedure, while the route
example still makes no O(n) claim.

All 38 current cards appear in one or more areas. Seventy unique planned coverage
concepts are represented; the map does not pretend to include the remaining
inventory. Available counts deduplicate overlaps within a territory. New
lessons can join an existing area through its explicit canonical references;
new areas or territories also need authored geometry. Fields and territories
remain editorial teaching groupings, separate from canonical relationship
claims and personal conjectures.

## Individual connection-map boundary

`src/concept-atlas.js` is an offline UMD provider. It reads canonical cards,
sources and coverage as data. It does not read private notebooks, evaluate
models, start clocks, or modify any playground state.

`AtlasConceptAtlas.create({cards,sources,coverage})` returns:

| API | Purpose |
|---|---|
| `nodes`, `edges`, `fields` | Frozen normalized data for available cards, directed links, and overlapping teaching fields |
| `node(slug)`, `neighbors(slug)` | Look up a card and its incoming/outgoing links |
| `markup({selectedSlug,field,id})` | Produce inert page markup |
| `mount(host,{selectedSlug,field,onSelect})` | Render scoped controls and return a controller |
| Controller `select`, `filter`, `getState`, `destroy` | Navigate, filter, inspect selection and remove delegated listeners |

The app owns `#atlas` and `#atlas/<slug>`, selection URL updates, navigation and
cleanup. A field filter can change the selected card when its old selection is
outside that field; callbacks preserve the shareable URL. SVG neighbors accept
keyboard input, and a native concept chooser and readable lists provide the same
navigation without requiring the map.

## Relationship meanings

| Link source | Direction and meaning |
|---|---|
| Required/helpful prerequisites | Preparation topic → current card; study guidance |
| Further depth | Current card → advanced topic; further-study guidance |
| Canonical connections | Preserve the authored source → target direction, relationship type, reason, conditions, evidence and source references |

Availability comes from actual cards in the catalog. A source card's stale
`target_status` cannot hide a target that is now available. Unavailable targets
stay labeled as planned or external and receive no working-card link. General
Ratio and Integral identities remain distinct from their narrower available
application cards; changing that editorial coverage should be intentional.

The map's solid and dashed lines distinguish card relationships and study
guidance. The full list names both ends and gives the exact direction. A
compatible numeric port is not used to infer a mathematical relationship.
Personal conjectures never enter the canonical map.

## Illustrations

`src/card-previews.js` supplies dedicated 360×200 SVG illustrations for the 38
installed cards. Each reads the model's current defaults and evaluated quantities,
with a short caption and accessible description. These are compact illustrations
with explicit encodings rather than scaled screenshots of a full playground.

Future concept additions should supply a preview entry and meaningful field
membership alongside their model, story and canonical card. The module sandbox
does not need a canonical illustration or atlas entry.

## Data alternatives

`src/model-data.js` is a separate pure provider shared by every playground. It
accepts a registered module and validated parameters, samples its primary declared
numeric sweep at nine points, and includes the exact current input. All other
controls, including string-valued choices, stay fixed. Up to four declared output
ports provide labeled/unit-bearing columns. A static module gets one honest row.

Undefined outputs remain null in the data, with a readable state in the table.
The derivative can retain its analytic tangent when the finite quotient is
undefined. The limit's disagreeing sides remain visible beside a missing
two-sided result. Numeric presentation is rounded for reading; near-one values
remain distinguishable from the excluded logarithm base 1.

The shared host owns pacing. Opening the panel pauses and settles the model.
The table holds its previous readings during motion and updates on settling;
status text explains the held state. Closed panels do not sample every frame.
This is a numeric slice of the declared model, not a complete nonvisual account
of every geometric or 3D feature. Screen-reader and learner qualification remain
separate acceptance work.

## Linear algebra expansion and lookup (0.18.0)

The existing Linear algebra area now opens six available lessons: Vectors &
rotation, Complex numbers & transformations, Vectors: components and length,
Dot product & projection, Matrix linear maps and Determinant. Their original
canonical references determine availability; overlapping fields still count
each card once. General vector spaces, bases and matrix products remain planned.

The global search reads `AtlasExplorer.areas.search` through `AtlasSearch`, so
area results share the map's meanings, actual available counts and stable URLs.
The local map search remains an independent scoped controller. Definition usage
links are reference aids, not additional canonical mathematical relationships.
The new concepts supply compact previews and field membership without changing
the landscape's eight territories or 24 areas.

## Weighted vectors, coordinates and composition (0.19.0)

Linear algebra now contains nine available cards. Linear combinations, Basis
coordinates and Matrix products extend the existing six lessons. General vector
spaces and general linear maps remain planned; the available bounded examples
do not imply those general concepts are fully implemented. The map still has
eight territories and 24 areas. Seventy-five distinct planned inventory concepts
are represented, alongside the 29 current cards.

The three new compact illustrations use the providers' actual defaults. A
weighted-vector illustration shows head-to-tail addition, basis coordinates
locate a fixed target, and a composition illustration follows the input through
the two maps. Index related-definition links are authored learning suggestions,
separate from the canonical sourced relationships projected in the concept map.

## Connected calculus and notation (0.20.0)

The Calculus area contains six available cards: Derivative, Integral accumulation,
Signed accumulation, Chain rule, Partial derivatives and Gradient. Canonical
references also preserve planned general Integral and Fundamental Theorem of
Calculus context. The Limits area remains a separate overlapping navigation
context; membership is not a mandatory learning order.

The map still has eight territories and 24 selectable areas. Its current corpus
contains 32 available cards and 74 distinct mapped planned concepts. These
figures describe landscape membership, rather than all 190 coverage rows or all
372 definition-index entries. Background symbol definitions do not become
playable cards or inferred relationship edges.

The three calculus illustrations use current provider defaults. A staged chain
connects calibrated input, square value and derivative factors; field previews
distinguish a coordinate partial from the gradient vector and its scalar norm.
The two field cards offer Geometry, Graph and genuine Spatial surface views in
their playgrounds. The atlas remains the navigation layer; its own camera does
not change those model parameters or saved playground cameras.

Notation work preceded the new concepts. The
[sealed 29-card checkpoint](NOTATION_GATE_BEFORE_EXPANSION.json) and expanded
[current audit](NOTATION_COVERAGE_0_20_0.json) have separate scopes. Exact symbol,
unit and definition links help readers reach the related mathematics while
preserving case, local meanings, derivative conditions and draft review status.
Related definitions remain editorial reference links alongside, rather than
inside, the canonical relationship map.


## Directions, planes and iterative optimization (0.21.0)

Directional derivative and Tangent plane join the Calculus area, bringing it to
eight available lessons. Gradient descent joins Optimization, where it sits
alongside the existing quadratic garden example, for two available lessons.
The connection map also places these ideas in overlapping algebra, geometry,
analysis and modeling fields according to their teaching roles.

Runtime availability now counts 35 distinct canonical cards and 73 distinct
mapped planned concepts. The landscape remains eight territories and 24 areas.
Gradient descent moves from planned to available; the new direction and plane
identities were not previously counted as mapped planned concepts. The complete
inventory has 192 rows and remains distinct from this selected map coverage.

Each new preview encodes the actual default calculation: a chosen direction and
its signed slope, a plane prediction compared with the actual surface, or a
numbered exact descent run. Search terms such as directional derivative, tangent
plane, learning rate and gradient descent lead to their appropriate areas.
Definition-use links remain vocabulary navigation, not inferred map edges.


## Fill the formerly empty areas (0.22.0)

The priority audit identified three areas with no available card. They now have
an introductory lesson:

| Area | New available card | What remains broader |
|---|---|---|
| Foundations → Sets and proof | Sets and membership | Proof methods, relations and other general set-theory questions |
| Uncertainty → Statistics | Population and sample | Random sampling, inference, variance and other statistical methods |
| Computation → Linear-time algorithms | Computational complexity: a linear scan | Other algorithm families, resource models and general complexity questions |

All 24 areas across eight territories now have at least one available lesson.
This minimum availability is different from completing the mathematical field.
The map contains 38 distinct available concepts and 70 distinct mapped planned
concepts. The full inventory remains 192 rows: 38 draft specimens and 154
planned concepts. The three already-planned identities move to available;
geometry and area identity remain stable.

The `sets-and-proof`, `statistics` and `linear-time-algorithms` URLs keep their
existing route shapes. New previews encode the actual default results: four
selected peg heights, a 12.75 kg selected-sample mean versus a 10.75 kg population
mean, and 24 modeled milliseconds for twelve inspections at 2 ms/item. Nearby
connections link selection, descriptive summaries and explicit operation counts.
Vocabulary links do not manufacture canonical relationship edges.
