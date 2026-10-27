# Mathematical Expression Atlas

A visual field notebook for learning mathematics as a language of expression.
Explore an idea, change its inputs, inspect its conditions, compare outcomes,
and save your own observation or conjecture.

## Live demo and source

Explore [Mathcards on ppeck.me](https://ppeck.me/mathcards/) or browse the
[source on GitHub](https://github.com/ppeck1/mathcards). Every validated push to
`main` rebuilds and updates the demo from the canonical cards and shared
playground modules. Pull requests run the checks before their changes are
published.

For development, use Node.js 22 and Python 3.11, install
`requirements-checks.txt`, then run `python tools/build.py`,
`node --test tests/*.test.mjs` and `python tools/check.py`. See
[deployment and development](docs/DEPLOYMENT.md) for the workflow and local
preview commands. The offline entry points below remain available.

## Open the application

Version 0.25 adds a complete, collapsible visual symbol catalog below Index
search and restores topographic definition to the map. Summit height represents
the available lesson count in a territory. All eight territories still fit the
phone overview. The shared crate chart and single guided control remain.
See the [symbol and topography review](docs/BUILD_REVIEW_0_25_0.md).

1. Extract this ZIP into a folder.
2. Open **`START_HERE.html`** (or **`dist/index.html`**) in a modern browser such as Chrome, Edge, Firefox
   or Safari.

No installation, account, API key or internet connection is needed. The entire
application, content, styles and visualizations are embedded in that file.
On Android, open the extracted HTML with a browser rather than an archive
previewer. If your file manager cannot launch a local HTML application, use
the local server option below from a computer.

## Fill the atlas gaps — 0.22.0

This batch prioritizes the three atlas areas that had no playable lesson:
**Sets and proof**, **Statistics**, and **Linear-time algorithms**. Sets and
membership filters twelve candidate pegs through two inclusive rules. Population
and sample compares selected crate weights with the full known collection.
Computational complexity derives one full-scan inspection per item, then
separates operation count from a stipulated time per inspection.

All three use the existing shared playground, story trace, readable values and
saved-state contracts. Their connected workshop stories keep a changed cutoff,
weight or per-item cost visible in the text, formula and actual scene. Smooth
cutoff motion does not invent fractional set members; sample size and input
size remain whole-number controls. Each card includes five original worked
examples and twelve numeric fixtures.

The collection now contains **38 draft cards, 194 examples, 346 numeric fixtures
and 83 views**: 38 Geometry, 38 Graph and seven genuine Spatial views. The index
contains **409 entries: 389 authored definitions and 20 contextual readers**.
All 24 atlas areas now have at least one available lesson. The landscape keeps
eight territories, with 70 distinct mapped planned concepts; the full 192-row
inventory contains 38 draft specimens and 154 planned entries. Forty-seven
canonical sources support 232 deterministic written exports.

The new reference vocabulary and exact notation link to the cards that use
them. Set cardinality differs from interval length and absolute value; a sample
mean differs from a population mean; an asymptotic class differs from a count
or measured time. The summation operator ∑ remains distinct from Greek Σ. The expanded notation
gate resolves **39,023 occurrences across 916 forms**, with zero unresolved
forms or callable-review items.

One available lesson does not complete a field. Proof, inferential statistics
and broader complexity families remain future work. The sample is a chosen
cyclic block, without randomization or a confidence claim. The scan's constant
cost is stipulated, and its finite graph does not prove a general runtime class.
See the [three updated matrices](docs/BUILD_REVIEW_0_22_0.md),
[release verification](docs/VALIDATION_0_22_0.md), and
[current notation report](docs/NOTATION_COVERAGE_0_22_0.json).


## Choose a direction, predict locally, improve a cost — 0.21.0

Three new modules extend the connected calculus sequence: **Directional
derivative**, **Tangent plane**, and **Gradient descent**. Turn a heading to
combine two local slopes, compare a tangent-plane height prediction with the
actual surface, then adjust a learning rate and inspect exact discrete updates
on a simple error-score landscape.

The first two lessons reuse the existing quadratic field helpers for height,
partials, surface mesh and camera projection. Their Geometry, Graph and genuine
3D views share one evaluated state. Gradient descent keeps whole-number
iterations separate from smooth changes in learning rate: its graph compares
the explicitly labeled ln(1+C) of normalized cost after a fixed number of exact
updates. Exact cost remains in the numeric readout and table; its numbered path
does not invent fractional algorithm steps. A large step can oscillate or diverge.

Each lesson includes a connected four-step story, five original worked examples,
readable values and semantic links from text through formula to visible marks.
The new vocabulary joins the searchable index with actual card-use links;
cost, gradient, prediction, actual height and signed approximation error keep
separate meanings. Shared controls, pacing, pins and saved-workspace mechanisms
remain in the playground host.

The collection now has **35 draft cards, 179 worked examples, 310 numeric
fixtures and 77 views**: 35 Geometry, 35 Graph and seven genuine 3D views. The
index has **386 entries: 366 authored definitions and 20 contextual readers**.
The landscape retains eight territories and 24 areas, with eight available
Calculus lessons, two Optimization lessons and 73 distinct mapped planned
concepts. The 192-row inventory contains 35 draft specimens and 157 planned
entries; 42 canonical sources support 214 deterministic written exports.

These are bounded teaching models: a smooth quadratic field for direction and
plane predictions, and a positive quadratic objective for gradient descent.
They are not arbitrary surface engines or general optimization guarantees. The
notation gate continues for each new mathematical form, alongside separate
mathematical/history review and learner/accessibility qualification.

See [the updated matrices](docs/BUILD_REVIEW_0_21_0.md),
[release verification](docs/VALIDATION_0_21_0.md), and the
[notation coverage record](docs/NOTATION_COVERAGE_0_21_0.json).

## Notation first, connected calculus next — 0.20.0

The notation gate was completed **before** adding concepts. Its recorded
29-card baseline covers 23,991 mathematical occurrences and 795 distinct forms,
with zero unresolved or review items. The reference now explains uppercase and
lowercase Greek letters, typed and TeX forms, units, grouping, bars, set/logic
notation and context-dependent meanings. Exact case and local roles stay
distinct; a letter, operator, function and evaluated value are not merged.
This is completion of the [documented current-app and common-reference scope](docs/SYMBOL_NOTATION_COVERAGE.md),
with its [pre-expansion audit record](docs/NOTATION_GATE_BEFORE_EXPANSION.json).

After the new concepts were added, the expanded gate also passed: **29,760
occurrences across 826 forms**, with zero unresolved forms or callable-review
items. The current index has **372 entries: 352 authored definitions and 20
contextual entries**. Its [release inventory](docs/NOTATION_COVERAGE_0_20_0.json)
records the enlarged scope separately from the earlier checkpoint.

Three new plug-in modules then add **Chain rule**, **Partial derivatives**, and
**Gradient**, each with a connected four-step story and five original worked
examples. Follow a calibrated panel side into area and multiply its two local
sensitivities. On a shared illustrative height field, hold one coordinate fixed
to inspect a slice, then combine the two partial slopes into a gradient vector.
The gradient and its scalar norm remain separate; zero gradient has no unique
normalized direction and does not by itself establish a hilltop.

The collection now has **32 draft cards, 164 worked examples and 69 views**:
32 Geometry, 32 Graph and five genuine 3D views. Partial derivatives and Gradient
share one pure analytic field provider and open their stories on its actual 3D surface.
Contours, slices, point, tangent information and gradient use that same field;
the playground camera remains viewing state. The existing playground supplies controls,
motion, readable values, comparison pins and saved-workspace handling.

These are deliberately small families: a square after an affine rule for the
chain rule, and a two-input quadratic height field for partials and gradient.
Stories declare their units and chosen values. They are constructed illustrations
of mathematical reasoning rather than measured terrain or manufacturing data.
The map retains eight territories and 24 areas; Calculus has six available
lessons, with 74 distinct planned concepts mapped across the landscape.

See [the updated review matrices](docs/BUILD_REVIEW_0_20_0.md),
[the growing index contract](docs/MATH_INDEX.md), and
[release verification](docs/VALIDATION_0_20_0.md).

## Combine vectors, change coordinates, compare order — 0.19.0

Three new plug-in modules add **Linear combinations**, **Bases and coordinates**,
and **Matrix products and order**. Scale and add two movement arrows, describe a
fixed target on an oblique grid, or follow an illustration corner through two
shears in either order. Each has a four-step story, five original worked examples,
matching card artwork, and Geometry and Graph views using the same playground
controls, calculation trace and readable number cadence.

The collection now contains **29 draft cards, 149 worked examples and 61 views**:
29 Geometry, 29 Graph and the three existing genuine 3D views. The map keeps its
eight territories and 24 areas, with nine available lessons in Linear algebra
and 75 distinct planned concepts mapped across the landscape.

The index now has **213 entries: 194 authored definitions and 19 contextual
notation entries**, including 20 new authored definitions in this release.
Its 35 curated **Related definitions** groups connect neighboring meanings such
as linear combination → span → basis, while
the card links retain their specific uses and notation. These are editorial
navigation links, not proofs or mandatory prerequisites. Use the common header
search or a card's Definitions section to follow the language into an experiment.

In the basis module, an independent pair gives unique coefficients. A dependent
pair remains a valid configuration: a target can have infinitely many coefficient
pairs or no solution. Unavailable unique coordinates stay unavailable rather than
becoming zero. The matrix-product module is deliberately restricted to one
horizontal and one vertical shear; changing their order is a discrete choice.
With column vectors, **AB applies B first, then A**. The model shows the
intermediate point, final point and opposite-order comparison.

See [the updated review matrices](docs/BUILD_REVIEW_0_19_0.md),
[the module contract](docs/PLAYGROUND_MODULES.md), and
[release verification](docs/VALIDATION_0_19_0.md).

## Linear algebra, definitions and shared search — 0.18.0

Four new modules add **Vectors**, **Dot product**, **Matrix linear maps**, and
**Determinant**. Follow a robot's movement from components to length, compare
two feature profiles, shear an illustration, or stretch and reflect a printed
tile. Each has a connected four-step story, five worked examples, matching
card artwork, and separate Geometry and Graph views in the shared playground.
The collection now contains **26 draft cards, 134 worked examples and 55 views**:
26 Geometry, 26 Graph and the three existing 3D views.

Open **Index** to look up a symbol or mathematical word, read its meaning and
example, and follow links to cards that use it. Its 186 entries include 174
authored definitions and 12 entries preserving exact card notation. The 24
lowercase Greek letter names are covered, alongside common capitals and other
notation. The reference distinguishes context-dependent meanings such as
δ, Δ and ∂; it is a growing guide to this collection, rather than an exhaustive
dictionary of mathematics. Each card also has a **Definitions** section.

The common header search finds definitions, interactive cards and atlas areas.
Press Enter for the full search page and filter by result type. Explore keeps
its card search, while the index and map have their own focused search controls.
The map still has eight territories and 24 areas; its linear algebra area now
opens the four new lessons as well as related existing concepts.

These are bounded real two-dimensional models. A zero vector has zero length
but no direction angle; its dot product remains defined while projection onto
it is undefined. Singular matrices remain valid maps. A determinant's signed
factor is distinct from the nonnegative area magnitude. The matrix scene shows
both output coordinates; its graph follows the declared horizontal output.

See [the updated review matrices](docs/BUILD_REVIEW_0_18_0.md),
[the index contract](docs/MATH_INDEX.md), and
[release verification](docs/VALIDATION_0_18_0.md).

## Selectable mathematics landscape — 0.17.0

**Atlas** now opens as a colored map with eight territories and 24 selectable
areas. Click a region or a topic such as **Linear algebra** to move closer and
see its available lessons. Drag to pan, use the zoom/fit controls, or jump with
the native territory and area selectors.

Search **linear algorithms** to choose between **Linear algebra** and
**Linear-time algorithms**. The latter is explicitly a planned area; no
linear-time lesson is implied by the existing shortest-path example.

**Concept connections** keeps the earlier directed neighborhood view. Existing
concept links still open it; **Place on map** on a card locates that lesson in a
matching area. All 22 current cards are represented, alongside 80 distinct
planned concepts from the coverage inventory.

See [updated matrices](docs/BUILD_REVIEW_0_17_0.md) and
[verification](docs/VALIDATION_0_17_0.md).

## Connected atlas and refreshed cards — 0.16.0

Open **Atlas** to place each of the 22 ideas among eight overlapping fields.
Choose a concept, follow its neighborhood, and read why each connection exists.
Preparation guidance, mathematical relationships, conditions, sources and planned
cards keep their own labels. Each card also links directly to its place in the map.

All 22 card illustrations now share a dedicated visual style and use current
model values. The original three retain Geometry, Graph and 3D views; derivative
3D now includes a signed-step handle. Their implementation metadata is corrected
without changing saved model identities or versions.

In any playground, **Read the model as data** opens an evaluated table. Opening
it pauses playback; readings hold during motion and update after a pause or
released control. The table includes the exact current input alongside sampled
inputs, fixed settings, units and explicit undefined cases.

See [the updated matrices](docs/BUILD_REVIEW_0_16_0.md),
[the atlas contract](docs/CONCEPT_ATLAS.md), and
[verification](docs/VALIDATION_0_16_0.md).

## Foundation expansion — 0.15.0

Four new plug-in modules add **Function**, **Exponentiation**, **Limit**, and
**Signed accumulation**. Each includes Geometry and Graph views, a connected
four-step practical story, five worked examples, and explicit model limits.
Follow a calibration input through multiply/add, scale a poster's area, compare
two approaches to a missing point or jump, and distinguish a cart's net
displacement from its total distance. Finite rectangle counts stay discrete.

The atlas now contains 22 draft cards, 114 worked examples, and 47 distinct views.
The shared host preserves provider-declared dropdowns and valid animation ranges.
See [the updated review matrices](docs/BUILD_REVIEW_0_15_0.md) and
[validation evidence](docs/VALIDATION_0_15_0.md).

## Save the whole workspace

In **Workbench**, give the experiment a name and choose **Save workspace**.
The saved record keeps both modules and their values, selected Geometry,
Graph, or 3D space views, camera angles, comparison pins, and the connection
between them. Fractal zoom and repeating-edge comparison, and the chaos
generation trace disclosure, are kept too.

Open **Saved workspaces** to choose a record and **Restore workspace**.
Both panels return paused. A link that was waiting for a valid value returns
paused with its last receiving value preserved. Saving is explicit; changing
the live experiment does not overwrite an earlier record. Playback state,
animation speed, guided predictions, and temporary focus mode are not saved.

Saved workspaces are private browser data, separate from individual Notebook
observations. **Export workspace backup** and **Import workspace backup**
provide a portable copy; import merges validated records and does not open
one automatically. Deletion has an undo action. Records whose exact module
versions are unavailable remain readable and exportable, with restore disabled.
If stored data is corrupt, download its untouched original bytes for recovery.
See [the workspace format](docs/WORKSPACE_FORMAT.md).

## Connect quantities in the workbench

Open **Workbench**, choose the two modules, and use **Connect a quantity**.
Choose **A → B** or **B → A**, a source quantity, and a receiving input, then
choose **Connect**. The source may be a declared input or calculated result.
The receiving scene follows through the existing smooth motion and readable
number cadence. Each panel keeps its chosen Geometry, Graph, or 3D space view
and its pinned comparison.

Quantity type and unit must match exactly. Values are checked against the
receiving model's range and domain; there is no implicit conversion, rounding,
or clamping. If a changing value becomes invalid, the link pauses, keeps the
last valid receiving value, and resumes when the value is valid again. The
connection panel explains its state and the meanings of both quantities.

Editing the receiving value disconnects the link. Other controls and view
changes keep it connected. Replacing a linked module or leaving Workbench
closes the live connection. This release supports one explicit direction
between two panels. **Save workspace** keeps that connection with its module
configuration; individual Notebook exports retain their own separate format.
Matching quantities permits a controlled experiment, not a claim that the
two application scenarios are equivalent.

## Switch from the shape to its graph

Every installed topic now has separate **Geometry** and **Graph** views.
Composition, logarithm, derivative, partial derivatives, gradient, directional
derivative and tangent plane also have distinct **3D space** views. Choose a tab above the scene; the same parameters,
calculation, pin, and playback follow you between representations. A view you
choose stays selected when you start a guided experiment.

The additional topics use a shared graph renderer with their own declared
input axis, output quantity, units, and domain. Drag the highlighted graph
point or use its arrow keys. Chaos plots the separation of its two trajectories;
fractals plot the actual perimeter of the finite changing outline. Captions
distinguish completed steps from the interpolated motion between them.

## Plug modules into a shared playground

All thirty-eight topics now register their mathematics, controls, views, readouts,
and optional inspectors through one playground contract. The shared host owns
layout, input, playback, number pacing, and cleanup. Workbench panels keep
independent state; new local modules can use the same host without adding
topic-specific branches to it. See [the module contract](docs/PLAYGROUND_MODULES.md).

Open [One module. Two independent places to play.](examples/module-sandbox.html)
for a separate developer example. Its additional registered module turns a
side length into square area in two independent panels. It uses the existing
controls, motion, presets, comparison pin, and focus view. This sandbox adds no
canonical teaching card or written export, and notebook capture is disabled there.

Grammar symbols and selected story quantities now highlight authored quantity
marks in the scene. Physical quantities stay distinct: position, finite average
speed, and analytic speed do not share one generic highlight. Operators with
no appropriate geometric mark remain explained in text.

Notebook entries from unavailable card, model, or renderer revisions remain
readable and exportable. They are labeled as preserved and cannot replay under
a different implementation. If the stored notebook is actually corrupt, a
separate recovery action downloads its untouched original bytes.

The workbench's explicit connections use declared quantity metadata. Sharing
a space or matching parameter names never wires panels together automatically.
The separate developer sandbox demonstrates independent instances and does
not include the workbench connection controls.

## Follow a calculation into the shape

Each of the thirty-eight cards opens with a four-step practical story beside an
animated scene. New workshop stories select display pegs, compare crate-weight
summaries and count full-scan label inspections. Collect distance under a velocity graph, optimize a fence plan,
turn and scale a point, interpret an inspection flag, compare walking routes or
explore a driven oscillator. Other stories include chaos, fractals, waves,
functions, powers, limits, signed accumulation and practical garden, recipe and
water-tank examples. The linear algebra stories connect vector length,
alignment, shearing, signed area, weighted sums, basis coordinates and matrix
order to the same host controls. Calculus adds staged sensitivity, coordinate
slices and a local uphill direction. Use **Back** and **Next**
to choose a stage, then **Play this step** to watch its change and stop at
its endpoint. The opening stage shows the fixed starting reference. Pause
and continue a step when you need more time, or use **Play whole story** for
the complete sequence. The current step's explanation and formula also appear
in **Read this step** beside the scene; this panel starts open on a phone.

Scrub the timeline or drag the variable while reading how the calculation
works. Highlighted values in the explanation connect to scene parts:
a border bracket, moving water surface, photo edge or speed arrow. Select a
value to see its quantity name and a description of what the scene marks
measure. Position, average speed and instantaneous speed retain distinct
meanings. Dragging keeps your current reading step in place. Exact formula
identities retain their equals signs; rounded numerical evaluations are marked
as approximate while moving. Carry the current values into the playground or
keep the moment in your notebook.

**Follow the calculation** adds a compact input → operation → shape sequence.
During playback or a manual variable change, the emphasis starts at the story
variable, moves into the operation after 650 ms, and reaches the resulting
scene marks after 1400 ms. The trace then stops. Use **Trace it** to replay
that connection, or select any stage to inspect it. Its numbers use the same
readable values as the story rather than a separate animation counter.

The fractal scene now has a separate **1–27× camera zoom**. Follow the first
third of the top Koch edge: at 3×, 9× and 27×, the same motif repeats inside a
smaller part of the outline. A gold window on the whole-outline minimap locates
the detail.
Zoom changes the view, while the perimeter calculation and refinement depth
keep their own values. **Refine to level 5** explicitly changes the mathematical
drawing when you want more detail; both the zoom and recursion have finite
budgets. Reset view returns to the overview and its separate Sierpiński inset.
The camera uses a 90 ms response and a 450 ms settling deadline, moving the
retained drawing without rebuilding its edges on every frame.

**Compare repeating edges** opens three equal-width views of the original
Koch edge, its first third and its first ninth. They reuse the same finite
drawing, with a detail count for each window. Magnification exposes the
repeated rule and the available detail; it does not add refinements or change
the perimeter. Toggle the comparison off to return to the compact scene.

For chaos, choose the **starting fraction** and **tiny starting gap** and replay
the two paths together. The population plot and gap-history plot share one
generation playhead. A compact panel keeps both starts visible at seven
significant digits, then compares initial gap, current gap and amplification.
Replay preserves your chosen starts. The gap can shrink as well as grow; this
finite logistic-map example illustrates sensitivity rather than proving chaos.

Use **One generation →** to advance to the next whole marker and open
**Follow one generation**. Two short rows show each actual input, the
substituted logistic calculation and its next value. The open calculation
also highlights those two whole-step segments on the plot, with hollow result
markers. At a positive whole marker it shows the update just completed;
at zero it previews the first update. Between markers it keeps the actual
endpoint calculation separate from the smoothly interpolated cursor.
The story's calculation stages use the same quantities.
Closing the detail removes the extra plot emphasis.

Shapes and gradients follow continuous input with a short, frame-rate-independent
response. Mathematical shape changes use a 45 ms response and a 240 ms settling
deadline, then land on the exact target. Validated target values remain the source for
saved experiments. Numerical labels update at a calmer 250 ms reading pace
while the geometry remains continuous. Moving values generally use two decimal
places; small values retain meaningful digits, and settled labels show up to
six significant figures. Nearby chaos states use seven significant digits
so their small differences remain visible. Text nodes remain in place and
gradients retain their opacity as they flow, avoiding repeated text replacement
and brightness pulses.
There is no idle animation loop, and reduced-motion mode updates directly
without the flowing transition.

The playground retains growing area frames, logarithm rulers, derivative
rise/run geometry, graph views, pinned comparisons and a live home-page sketch.
Five topics also have a **3D space** view: the original isometric volumes,
exponent landscapes and derivative ribbon, plus the shared scalar-field surfaces
for partial derivatives and gradient. **Focus**, playback speeds,
timeline scrubbing and twelve optional prediction experiments support further
exploration. Scene handles support pointer dragging and arrow keys.

Narrative content, calculation tracing, step navigation, semantic scene links,
readable values, story controls, numerical models, scene rendering and motion
are separate modules. The playground registry adapts the everyday, discovery,
frontier, foundation, linear algebra, calculus field, atlas-gap and original model providers to independent
host instances. The fractal lens, pure chaos-step helper and scene inspector keep viewing controls
separate from mathematical parameters and notebook state.
See `docs/EVERYDAY_STORIES.md` for the contracts and
`docs/VISUAL_SYSTEM.md` for the established playground layers.

## What works in this build

- **Explore:** search the available cards or enter through an expressive job; all illustrations reflect the current models.
- **Atlas:** locate ideas among overlapping fields and follow explained, directed neighborhoods with conditions and evidence.
- **Definitions and search:** look up notation or a word, follow its card links,
  and search definitions, cards and atlas areas from the shared header.
- **Thirty-eight draft cards:** composition, logarithms, derivatives, ratios,
  linear and exponential models, chaos, fractals, waves, probability, vector rotation,
  Pythagoras, integration, quadratic optimization, complex multiplication,
  Bayes’ theorem, graph shortest paths and resonance, plus functions, powers,
  limits, signed accumulation, vectors, dot products, matrix maps, determinants,
  linear combinations, bases, matrix products, chain rule, partial derivatives,
  gradient, directional derivatives, tangent planes, gradient descent, sets,
  population/sample means and linear-scan complexity, with 194 worked examples.
- **Practical stories:** thirty-eight original illustrative scenarios, each with
  four worked stages, Back/Next navigation, step playback, selectable linked
  values, a calculation trace and an animated view with the current explanation
  close by.
- **Interactive experiments:** linked equations, operation diagrams or plots,
  numeric controls, result tables and explicit invalid mathematical states.
- **Workbench:** mount registered topics in two panels, compare experimental
  states, inspect their conditions, and explicitly connect one compatible
  quantity to an input in the other panel.
- **Notebook:** capture the full model state with an observation or conjecture,
  reopen compatible snapshots, retain unavailable revisions, and export or
  restore a JSON backup without discarding older notes.
- **Observe first:** keep curated connections hidden while you form your own
  interpretation, then reveal them when useful.
- **Written exports:** 232 deterministic Markdown documents for Bag of Holding,
  containing the complete card records, worked cases and experiment recipes.

Notes are saved in the current browser's local storage. Use **Notebook → Export
backup** to preserve or transfer them. Moving the application file, changing
browsers or clearing browser data can change which local notes are available.
Personal notes never enter the supplied BOH corpus export.

## Scope and review status

This is a working local application, version **0.22.0**. All thirty-eight supplied cards remain
**draft teaching specimens**. Their mathematical derivations await independent
review, and their historical accounts contain explicit research gaps. A
rendered curve or tested instance is not a proof.

The 192-entry coverage inventory includes thirty-eight draft specimens and 154 planned
entries. It does not represent 192 implemented cards. Historical research, broader
accessibility qualification and live BOH ingestion/retrieval remain unfinished.
The BOH projection retains draft/supporting/non_authoritative metadata.

The stories use chosen values to demonstrate practical mathematical reasoning;
they are not reports of observed events or measured systems. Fractional photo
resize passes show an explicit geometric interpolation between completed
integer passes. Pixel rounding, image quality and physical model validity are
separate from the ideal calculation. Chaos uses a finite deterministic logistic
simulation and interpolates between completed generations. Koch refinements
are finite, with a geometric bump-raising transition between whole levels;
the separate Sierpiński inset follows another recursive rule. Expected seedling
counts describe a mean, not a guaranteed tray result. A wave's probe height is
distinct from its resultant amplitude. The new integration story uses positive
velocity, so accumulated displacement equals distance. Fence optimization is
limited to rectangles; complex multiplication needs both output coordinates.
The inspection example uses stipulated rates, graph edge lengths are schematic,
and resonance compares normalized steady responses rather than startup motion.
Narrow-viewport checks do not replace physical-device or assistive-technology
qualification.

## Run the editable source

Open `src/index.html` in a browser. It loads the separate source files alongside
the generated catalog. Alternatively, with Python 3 installed, run this from
the extracted project folder:

```bash
python3 -m http.server 8080 --directory src
```

Then visit `http://localhost:8080`. Stop the server with Ctrl+C.

## Build and verify

The build uses Python 3.11's standard library and Node.js 22. Python builds the
offline bundle; Node compiles the reference index
with the same JavaScript used by its runtime API. Run it after changing
application source or canonical card records:

```bash
python3 tools/build.py
```

This regenerates `src/catalog.js`, `src/math-index-data.js`, `dist/index.html`,
its content-hash manifest, and all Markdown in `export/` from `content/`.
The application version comes from `package.json`. The build stamps the catalog,
manifest, footer and development asset tags, and the packager uses the same
version for its ZIP filename. The archived 0.23 terrain generator is not part of
the current map or runtime bundle. The build never reads the notebook.

Node.js 22 runs the dependency-free model, navigation, reference and notebook checks:

```bash
node --test tests/*.test.mjs
```

Full JSON Schema and pinned BOH metadata validation needs the two Python check
packages listed in `requirements-checks.txt`. A virtual environment keeps those
optional developer packages separate:

```bash
python3 -m venv .venv
```

On macOS or Linux:

```bash
.venv/bin/python -m pip install -r requirements-checks.txt
.venv/bin/python tools/check.py
```

On Windows:

```powershell
.venv\Scripts\python -m pip install -r requirements-checks.txt
.venv\Scripts\python tools/check.py
```

The full check covers schemas, references, AST structure, numeric fixtures,
negative contract mutations, deterministic standalone and Markdown output,
source/catalog equality, complete written payload preservation and both BOH
metadata validators pinned to the revision recorded in the export manifest.
Static metadata validation does not establish live ingestion or retrieval.

## Project files

| Path | Purpose |
|---|---|
| `START_HERE.html` | Ready-to-open standalone copy included in the ZIP |
| `dist/index.html` | Generated self-contained offline application |
| `src/` | Editable UI, modular visual scenes, playback, styles, models, notebook and private workspaces |
| `content/` | Canonical card records, sources and planned coverage inventory |
| `schemas/` | Card and portable notebook contracts |
| `export/boh/` | Generated inert Markdown for BOH |
| `tools/` | Build, content validation and pinned metadata checks |
| `tests/` | Model, story, motion, notebook, saved-workspace and pipeline regression checks |
| `examples/module-sandbox.html` | Two independent mounts of a separate local module |
| `docs/PLAYGROUND_MODULES.md` | Shared host, module authoring and lifecycle contract |
| `docs/MATH_INDEX.md` | Definition entries, card vocabulary and shared search contract |
| `docs/SYMBOL_NOTATION_COVERAGE.md` | Finite notation scope, exact meanings and the gate before concept expansion |
| `docs/CONCEPT_ATLAS.md` | Landscape areas, concept connections and navigation |
| `docs/WORKSPACE_FORMAT.md` | Versioned complete-workspace records, compatibility and restoration |
| `docs/IMPLEMENTATION.md` | Architecture decisions, evidence and remaining gates |
| `docs/EVERYDAY_STORIES.md` | Narrative, semantic links, readable values and motion contracts |
| `docs/` | Original detailed product and build specifications |
| `math_expression_atlas_handoff/` | Retained original planning package |

The source records generate both the learning interface and the written corpus.
To extend a card, edit its canonical JSON and rebuild; avoid editing generated
catalog or Markdown files directly.

To recreate the downloadable ZIP, run `python3 tools/package.py`. The package
contains application source and the offline build; it contains no private browser
notes or saved workspaces.
Release validation records are kept in `docs/VALIDATION_*.md`; each records the
checks performed for that version and any remaining verification.
