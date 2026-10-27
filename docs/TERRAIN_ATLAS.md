# Terrain atlas preview (0.23.0)

The Landscape view now uses one continuous, imagined relief surface beneath
separate mathematical navigation. It replaces the 0.22.0 composition of colored
enclosures and stacked topic buttons. The view remains two dimensional.

“An imagined landscape for exploring mathematics. Position and elevation are
illustrative; fields overlap.” This explanation appears with the map. Elevation
does not encode difficulty, importance, prerequisites, similarity or progress.
There are no real geographic coordinates, meter values or geographic scale bar.

## Editable parts and ownership

| File | Responsibility |
|---|---|
| `src/atlas-terrain-recipe.json` | Seed, world and sampling grid, coastal silhouette, broad uplifts, ridge and valley spines, basin/lake, restrained detail, light, palette and contour settings |
| `tools/build_terrain.py` | Deterministic scalar field, relief PNG, shoreline and contour extraction; generated-asset verification |
| `src/atlas-terrain.js` | Generated frozen data: embedded PNG, shoreline, contours, input fingerprints and build statistics |
| `src/atlas-regions.js` | Eight stable territory IDs, 24 stable area IDs, canonical memberships, actual availability, deduplicated counts and search aliases |
| `src/atlas-landscape.js` | Authored territory hit regions, topic anchors and local focus bounds, screen-sized labels/markers, collision layout and locator |
| `src/atlas-explorer.js` | One camera/controller, selection, routes, native controls, search, pointer/keyboard handling, resize and cleanup |

Terrain generation reads no card counts or membership lists. A new lesson can
change an area's availability without regenerating its geography or moving its
topic anchor. Ridge spines cross editorial territory boundaries; those
boundaries do not cut the scalar field into eight height patches.

Mathematical models, personal notebook records and workbench state remain
outside the terrain renderer and camera. The existing Concept connections view
keeps authored relationship types, directions and explanations. A ridge, valley,
coast or nearby marker does not create a mathematical relationship.

## Surface and rendering method

The stable world is `x=0, y=0, width=1200, height=800`. The full build samples
`768 × 512`, or 393,216 scalar values. Broad uplifts and coastal falloff establish
the landform. Clamped Catmull–Rom curves through authored spines define connected
ranges and branching valleys. Distance falloffs vary their widths and asymmetric
slopes; smooth transitions avoid discontinuities at curve caps. Seeded,
multi-scale value noise supplies restrained detail, reduced around label
clearings and near coasts. An enclosed depression creates the lake.

The shoreline is the zero contour of that same field. Shading estimates field
gradients, forms surface normals and applies one northwest light with ambient
fill. Elevation tints run from pale sage through olive to stone. Water is muted
blue-gray. The colors are illustrative elevation tints, separate from the very
light editorial territory tints and brass selection emphasis.

Marching squares extracts contours at fixed internal intervals of `0.08`; these
are not physical height units shown to learners. Ambiguous saddle cells use a
consistent center-value decision. Every fourth contour is an index contour.
Ramer–Douglas–Peucker simplification bounds deviation to `0.75` world units
before path coordinates are serialized. The current asset has 18 contour levels.
Shoreline, shading and contours are derived together; contours are not unrelated
decorative squiggles. Rivers are omitted, so no decorative drainage is presented
as physical or mathematical flow.

The generator uses Python's standard library only, including a small lossless
RGB PNG encoder with deterministic sub filters and zlib compression. No image
service, downloaded texture or additional package is needed. The generated UMD
module exports `AtlasTerrain` in the browser and CommonJS data for tests. The
standalone application embeds it before the landscape renderer. It needs no
external image request, and no terrain generation or idle terrain loop runs in
the browser.

## Build, cache and editing

Edit the recipe for terrain changes. Edit `atlas-landscape.js` for navigation
anchors, territory shapes, label candidates or focus bounds; these presentation
changes do not require a new field. Do not hand-edit the generated image or
contour data.

The regular application build invokes the terrain build automatically:

```sh
python tools/build.py
```

To force regeneration and save an unlabeled relief image for inspection, run
this command from the repository root:

```sh
python tools/build_terrain.py --force --preview qa-terrain-relief.png
```

The generated data records recipe and generator SHA-256 fingerprints, PNG
SHA-256, sampling resolution and image length. An unchanged build checks those
inputs and the embedded PNG, then reuses the checked-in artifact. A changed
recipe, generator, resolution or invalid image digest causes a fresh bake.
The cache contains generated public artwork, not notebook or user data.

| Measurement on the development machine | Result |
|---|---:|
| Full standard-library terrain bake | 28.53 seconds |
| Matching cached asset verification | Under 0.01 seconds |
| Embedded PNG | 177,345 bytes |
| SVG contour path strings | 36,031 bytes |
| Complete generated terrain JavaScript module | 275,900 bytes |

These are one machine's build measurements, not a browser or mobile benchmark.
The uncompressed generated module size includes base64 image encoding and
metadata. The complete standalone application's size includes other assets.

## Navigation and mobile composition

Overview labels identify territories. Selecting a territory reveals its area
markers; selecting an area fits a local `250 × 200` world-space focus box around
that area's authored anchor. This replaces the former behavior where every
area reused its whole territory's bounds. Close area views can show up to four
lesson destinations; the readable panel retains the full lesson and planned
concept lists.

Text and marker targets are inverse-scaled against the camera, keeping their
size approximately constant in screen pixels. Territory labels use 18 px, area
labels 14 px and lesson labels 13 px. Labels have light halos. Collision layout
prioritizes selected/active labels and reserves space around camera controls,
the locator and touch-mode button. Suppressing a colliding label does not remove
its destination from search, native controls or the readable list. Marker
targets are at least 44 CSS pixels across, with keyboard access and visible
focus treatment.

The map sits directly below a compact search/“Find a place” toolbar. Native
territory and area selectors are inside that expandable panel. Zoom, fit and
overview controls sit inside the map frame. At mobile widths the map is about
60% of the small viewport height, with an adjusted height for short landscape
screens; the selected-area panel follows below it. The mobile portrait overview
intentionally crops the world horizontally while preserving its full height,
rather than shrinking all terrain into a letterboxed strip. A small locator
shows the visible crop. Pan, search and native selectors still reach the sides
of the map.

Single-pointer touch panning requires the explicit “Move map” mode. Outside that
mode, vertical swipes can scroll the page. “Done moving” restores that behavior.
Camera buttons and keyboard controls provide zoom without a second competing
pinch controller. Drag release suppresses destination activation; a tap remains
a selection. Arrow keys pan, plus/minus zoom and zero returns to the overview.
Reduced-motion selection settles immediately. Resize and mounted-instance
cleanup retain one camera and remove their listeners/observers.

Existing map routes and the individual Concept connections routes are retained.
The application must restore selections through browser history as well as a
fresh deep link; camera movement does not change canonical membership or saved
playground parameters.

## Preview evidence and qualification

This work was prepared on the isolated `codex/terrain-atlas-and-startup` preview
branch. At this preparation checkpoint it has not replaced the public main
deployment. The preview also includes the separately documented startup/index
work; these images are design evidence, not mathematical or accessibility
certification.

| View | Before, 0.22.0 | Terrain preview, 0.23.0 |
|---|---|---|
| Overview | [Before overview](terrain-preview/before-overview.png) | [After overview](terrain-preview/after-overview.png) |
| Calculus area | [Before Calculus](terrain-preview/before-calculus.png) | [After Calculus](terrain-preview/after-calculus.png) |

[390 CSS px mobile overview](terrain-preview/mobile-overview-390.png) records
the compact toolbar, portrait crop and locator. Preview images also exist at
[360 CSS px](terrain-preview/mobile-overview-360.png) and
[430 CSS px](terrain-preview/mobile-overview-430.png), with a
[390 CSS px Calculus view](terrain-preview/mobile-calculus-390.png).

The implementation review recorded native “Find a place” navigation and a
browser Back-history correction. The images were inspected at the listed
browser viewport widths. Real-device touch, physical device rotation and
screen-reader walkthroughs have not been performed. Browser viewport evidence
does not establish those device behaviors.

Targeted generator checks cover repeatable fields/assets, one connected
landmass with an enclosed lake, same-field interpolated contours, valid
lossless PNG encoding and cache invalidation. Run them with:

```sh
python -m unittest discover -s tests -p terrain_generation_test.py
```

The full release checks remain:

```sh
python tools/build.py
node --test tests/*.test.mjs
python tools/check.py
```

Record their actual results in the release validation notes. Passing generator
or route tests does not establish physical terrain realism, pedagogical value
or complete touch/accessibility qualification.
