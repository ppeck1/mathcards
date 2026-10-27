# Flat field atlas (0.24.0)

The atlas is navigation through the collection. Its colors identify mathematical
fields; region outlines locate topic groups. Region area, location and height
do not encode a mathematical quantity. There is no elevation layer, relief
image, mountain, lake, contour or invented progress scale in the current view.

This replaces the decorative terrain shipped in 0.23.0. The earlier recipe,
generator and [terrain notes](TERRAIN_ATLAS.md) remain historical material;
the current renderer does not import or execute that terrain asset.

## Separate responsibilities

| Module | Responsibility |
|---|---|
| `src/atlas-regions.js` | Stable eight territories, 24 areas, actual memberships, available/planned concepts, deduplicated counts and search aliases |
| `src/atlas-landscape.js` | Flat category colors, authored region outlines and anchors, local topic bounds, screen-sized labels, marker targets and locator |
| `src/atlas-explorer.js` | One camera and scoped selection/input lifecycle, routes, native controls, search, browser history and connections delegation |
| `src/atlas-landscape.css` / `src/atlas-explorer.css` | Responsive presentation, native territory key, camera controls and focus states |

Adding a card changes the provider's counts and destinations. It does not move
topic anchors or fabricate a relation between nearby map positions. The
Concept connections view retains its explained, typed relationships.

## Overview and phone layout

Overview always uses the complete 1200 × 800 world bounds at every viewport
size. It never begins with a portrait crop. On phones, the map keeps its 3:2
aspect ratio so all eight fields fit. The short familiar labels — Foundations,
Numbers, Structure, Space, Change, Chance, Computation and Applications — remain
13 CSS px, with collision checks and alternate positions. Full field names
appear in a compact two-column native key with at least 44 px button targets.

Overview camera controls sit below the map, leaving the labels clear. Selecting
a territory or area reveals its existing detail and local camera view, where
the in-map controls, locator, selected label and readable lesson list remain.
The key, selectors and search all use the same stable territory/area providers.

The map's caption says: “Territory colors identify fields. Filled dots mark
available lessons; fields overlap.” Available and planned counts remain actual
counts in accessible labels and the readable panel. No surface shape pretends
to measure lesson availability or mathematical difficulty.

## Navigation preserved

- `#atlas` opens the full collection map.
- `#atlas/map/<territory>` selects a territory.
- `#atlas/map/<territory>/<area>` selects the area's own authored local bounds.
- `#atlas/<concept-slug>` retains Concept connections.
- Native selection and map selection share the same controller and history.
- Pan release does not activate a destination. Touch panning remains an
  explicit reversible mode; ordinary vertical swipes scroll the page.
- Keyboard camera controls, reduced motion, resize handling and independent
  mounted-instance cleanup remain part of the existing contract.

## Automated qualification

Targeted coverage checks full-world overview bounds on portrait and wide
viewports; all eight visible, non-overlapping overview labels at map widths
280–430 px; all eight full-name native buttons; absence of relief assets and
elevation language; local area bounds; availability semantics; label clearings
in detail views; history; touch policy; and controller cleanup. Browser and
physical-device results belong in the release validation record rather than
being inferred from these tests.
