# Architecture: the running application

This document describes the implemented application. The initial October 2026
framework proposal is historical; it is not a requirement to replace the working
browser-native stack. Release-specific counts and verification belong in the
build manifest and validation records rather than in architectural contracts.

## Runtime and delivery

Mathcards uses classic JavaScript, HTML, CSS and SVG. It has no runtime package
installation, framework, CDN, API key or server database. The source entry is
`src/index.html`. `python tools/build.py` generates an inert catalog and embeds
scripts, styles and content in `dist/index.html` and `START_HERE.html`. That
standalone file works offline. A validated push to `main` publishes `dist/`;
feature branches do not change the live site.

Canonical TeX is compiled at build time by the pinned MIT-licensed Temml tool in
`tools/vendor/temml/`. Native MathML and its original TeX annotation ship in
`src/formula-data.js`. The compiler, remote fonts and formula execution do not
ship in the runtime. `src/math-display.js` and the page renderer retain readable
fallbacks. Native formula and assistive-technology behavior still require
physical-browser qualification.

## Public source and deterministic projections

| Source | Ownership |
|---|---|
| `content/cards/*.json` | Canonical lesson identity, definitions, assumptions, grammar, examples, sources and numeric fixtures |
| `content/sources.json` | Cited mathematical and historical source records |
| `content/coverage.csv` and book inventories | Editorial coverage and explicit planned/precursor/introduction distinctions |
| `schemas/` | Versioned public and private data contracts |
| `src/*-stories.js` | Original practical narratives and step/calculation bindings |
| `src/math-terms.js`, `src/math-notation.js` | Reference meanings, aliases and contextual symbols |

The build validates identities and allowlisted model/renderer bindings, then
produces `src/catalog.js`, prepared reference data, MathML, written exports and
the offline application. Generated files are committed with their source.
`tools/check_generated.py` checks their byte hashes, standalone parity and Git
drift after rebuilding. Explicit LF generation keeps Windows and Linux bytes
consistent. Never edit generated reference data or written exports as another
source of truth.

Installed continuation families keep their stable IDs, grammar bindings and
typed ports in explicit `content/planning/*-integration.json` records.
`tools/build_continuation_metadata.py` checks these against canonical cards and
projects them into inert, frozen `src/continuation-metadata.js`. This registry
data contains no executable formulas or downloaded module paths. Providers,
stories and views remain authored code in separate files.

## Mathematics, representations and the shared host

`src/model-registry.js` selects a trusted provider by a stable slug. A provider
supplies `has`, `defaults`, `controls`, `specs`, `validateParams`, `evaluate`,
`curveValue` and `render`. Parameter validation, domain failures and arithmetic
remain separate from drawing. Formula strings are display data, never executed.
Provider results retain numeric precision; presentation formatting does not
alter saved calculations.

The three original families now live in `src/legacy-models.js` behind this same
routing contract. `src/models.js` remains the stable application facade. Their
existing Geometry/Graph adapters in `src/visuals.js` and Spatial adapters in
`src/spatial.js` are resolved only when drawing, avoiding an evaluation-time
cycle. The special real-life scenes retain their declared patio, photography
and motion assumptions. Existing slugs, revision 1, control domains, exact-log
labels, composition orders and analytic/finite derivative distinctions survive.

`src/module-registry.js` validates trusted learning-module definitions;
`src/playground-modules.js` adapts the installed providers to it. The shared
`src/playground.js` host owns controls, input, animation, text pacing, comparison
pins and teardown. A provider starts no animation clock and does not modify
another slot. Discrete steps do not interpolate into invented mathematical states.
An optional provider interpolation guard can also exclude a singularity between
two valid endpoints, such as a stereographic chart's omitted pole.
Geometry and Graph describe the same state with distinct encodings. Spatial is
registered only when it represents a useful additional view.

Story text, calculation stages and scene marks use declared quantity keys via
`story-links.js`, `story-scenes.js`, `calculation-flow.js` and `semantic-links.js`.
An operator or logical binder need not have an invented geometric counterpart.
The host's readable-value pacer keeps numbers legible while the scene changes.

## Discovery and reference

`concept-atlas.js` and `atlas-regions.js` own the atlas memberships. Topography
represents declared lesson availability; overlapping territory membership does
not multiply the number of distinct cards. `learning-order.js` owns the
learner-facing sequence. Search and the symbol catalog derive actual card-use
links from public content. Reference-authoring files (`math-terms.js` and the
family `*-terms.js` files) are build dependencies, excluded from the runtime
bundle and module sandbox. The complete prepared reference is compiled before startup;
hydration deduplicates only repeated meaning text in private search rows, while
retaining all public contexts and card links. Browser compilation without
authoring data fails explicitly rather than scanning the corpus.
Query-local search reuse avoids repeated normalization without keeping an
unbounded history of unrelated queries.

Module registration reuses only immutable metadata branches verified by a full
descriptor/child walk. Mutable input, parameter validation and instance state
still use independent copies; registration still validates defaults and numeric
output ports immediately. Story lookup stops at the first matching provider.
These optimizations belong in their existing registry/reference boundaries.
See the [startup record](STARTUP_OPTIMIZATION_0_34_0.md) for the unchanged budget,
fixed-attempt diagnostics and browser qualification limits.

Book inventories are editorial planning evidence. A matching topic label does
not prove exact-edition coverage or that a finite demonstration teaches a whole
advanced subject. Preserve provisional mappings and page-level verification gaps.

## Private state and explicit connections

`notebook.js` stores individual observations; `workspace-store.js` stores named
two-slot configurations. `workspace-runtime.js` captures/restores hosts;
`workspace-library.js` supplies their UI. Data stays in browser storage and
portable JSON backups. Corrupt raw bytes, unavailable revisions and failed writes
remain recoverable. Teaching builds and exports never read this personal state.

`workspace-links.js` permits one explicit directed connection through declared
quantity ports. Names alone do not establish compatibility; meaning, type and
units matter. Invalid source values preserve the last valid receiving state.
There is no arbitrary downloaded module execution, cloud account synchronization
or user-defined formula interpreter.

## Verification and remaining qualification

Run the documented checks in `README.md`, including canonical schema/numeric
fixtures, notation ownership, standalone integrity, module lifecycle, story
bindings and private-state recovery. `tools/check_source.py` adds syntax and
nonsemantic source hygiene without reformatting mathematical strings or vendor
code. [.editorconfig](../.editorconfig) defines new-file conventions.

Automated controllers, DOM harnesses and static SVG renders provide specific
evidence. They do not establish real touch ergonomics, complete CSS layout,
screen-reader math, learning outcomes or independent mathematical review. Those
gates remain explicit in the current release/branch review matrix.


## Incremental formatting policy

Prettier 3.6.2 is pinned as a development-only tool in `package-lock.json`.
`npm ci --ignore-scripts` installs it; `npm run check:format` checks the new
systems, inference, inventory, expansion, number/spatial foundations, dynamics,
algebra, algorithm, distribution, analysis, discrete, estimation and sampling extensions
and extracted legacy-provider modules,
their new tests, generated-write helpers, startup regression tests and measurement
harness. `npm run format` rewrites
only that declared scope. `.prettierignore` excludes generated projections,
release artifacts, original handoff material and the vendored formula compiler.
The published application does not include Prettier or require npm installation.

This is an incremental migration, not a claim that the entire historical source
already follows one formatter. Add a coherent file family to the explicit scope
when consolidating it; keep mass formatting separate from mathematical changes.
Syntax/whitespace checks continue to cover the broader authored source.

Algebra, algorithm, distribution, analysis, discrete, estimation and sampling extensions
follow the same explicit provider installation. Their metadata joins number, spatial and dynamics
families through the allowlisted build projection. New families add authored
files and data rather than another host or an external program loader.

## Generated-artifact writes

`tools/generated_io.py` and `tools/generated_io.cjs` compare final bytes before
writing. Changed public artifacts are staged in an exclusive sibling temporary
file, closed and atomically replaced. Identical outputs keep their modification
times. UTF-8 bytes and LF generation remain deterministic across platforms.

Known Windows sharing, permission and invalid-argument failures receive at most
three attempts with short bounded delays. Persistent or unrelated errors fail
the build, and failed staging is cleaned without truncating the previous target.
Each file replacement is atomic; the complete multi-file build is not a
transaction and still requires manifest/parity validation. These tools serve
generated catalogs, formulas, subject data, written exports and offline builds;
personal browser notebooks and backups use their separate persistence contracts.
