# 0.25.0 symbol catalog and topography validation

Prepared 2026-10-27. The release retains the 38 draft concepts, 194 worked
examples and existing mathematical models.

| Check | Result |
|---|---|
| JavaScript suite | 741 tests pass; final measured bootstrap JavaScript 160.8 ms against the existing 1,500 ms budget |
| Python/content pipeline | 10 tests pass; schema, 346 numeric cases and 232 deterministic written exports pass |
| Notation coverage | 409 reference entries; 38,953 recognized occurrences; zero unresolved or review findings |
| Symbol inventory | 531 unique forms: 520 declared forms and 11 additional visible local forms; 308 meanings in 14 groups |
| Complete selection | Every catalog button resolves all known definition owners; alternate forms and case remain distinct |
| Exact context | Local sums ∑xᵢ and ∑Xᵢ link only to Population and sample; b^(−x) links only to Exponentiation |
| Topography | 55 clipped contours; summit heights use actual deduplicated territory availability; maximum 13 lessons; planned counts have no effect |
| Independent review | 70 targeted tests pass after the notation-context correction; no remaining material findings |
| Portfolio | Astro build succeeds with 41 pages; description and all four demo entry points use the current presentation/0.25 launch key |

The bootstrap number is one local JavaScript CPU measurement, not a physical
phone startup or paint guarantee. Runtime reference compilation remains
forbidden by the regression test.

## Browser checks performed

The served standalone build was inspected in Chrome:

- Opened the catalog from the original Absolute value route. All 531 buttons
  and 14 groups were mounted, with no horizontal page overflow.
- Selected δ; the catalog collapsed and the definition received keyboard focus.
- Opened the disclosure using Enter. The previously selected glyph remained
  marked when the catalog reopened.
- Selected μ and retained both Mu and Population mean definitions.
- Selected ∑xᵢ from the rebuilt catalog and verified its only card link was
  `#card/population-sample`.
- Inspected desktop topography: all eight territory names, 55 contours, exact
  summit count markers and the contour legend.
- Rendered the actual standalone app in two 405-pixel local frames, producing
  measured 390 CSS-pixel content widths after desktop scrollbars. Both Index
  and Atlas had no horizontal overflow. The open catalog scrolled internally;
  glyph buttons were at least 47.8 px high. The atlas started at the complete
  `0 0 1200 800` viewBox with all eight labels visible.
- Selected Change and then Calculus through the phone map. The panel exposed
  its eight lesson destinations and the camera moved to local context.

Evidence: [desktop catalog](presentation-0-25/symbol-catalog-desktop.png),
[desktop topography](presentation-0-25/topography-desktop.png), and
[phone-width layouts](presentation-0-25/phone-symbols-and-topography-390.png).
The local responsive harness is excluded from packaging and deployment.

## Surface meaning and module boundaries

`atlas-topography.js` is a small pure SVG helper. It receives the existing
region records and authored outlines; the region provider owns membership and
counts, while the existing explorer owns interaction and camera state.
Summit height represents the number of available lessons in a territory;
slopes are schematic. The legend explains that memberships overlap. There is
no archived raster relief, new prerequisite relationship or difficulty scale.

The symbol catalog is derived lazily from the prepared reference data when
Index is opened. A new indexed display form automatically enters the catalog.
Raw model keys, hidden TeX command aliases and prose contexts are excluded.

## Limits

Physical phones, rotation, touch and screen readers have not been qualified
in this release. Browser width and keyboard checks are not substitutes for
those walkthroughs. Mathematical and pedagogical review remains pending for
the draft lessons. Direct file launch was not newly browser-tested; the same
self-contained HTML was checked through the local HTTP preview.

See the [updated review matrices](BUILD_REVIEW_0_25_0.md).
