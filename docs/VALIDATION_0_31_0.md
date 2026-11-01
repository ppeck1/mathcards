# 0.31.0 validation record

## Automated checks

- All 890 JavaScript tests pass. The additions include 15 model tests and six
  integration tests; existing workspace, timing, readability, symbol catalog,
  notation, source parity and module tests also pass.
- All 13 Python tests pass. The new independent reference uses channel entropy
  identities, checked against direct joint conditional/KL sums at boundary,
  independent, biased and inverted states. It rejects malformed parameters.
- All 598 canonical fixtures agree with independent Python calculations. The
  new cards supply 36 fixtures and 15 original worked examples.
- Nine negative schema/reference/contract mutations are rejected.
- The [notation audit](NOTATION_COVERAGE_0_31_0.json) resolves all 55,055
  occurrences across 1,162 forms, with zero unresolved forms or review items.
  There are 573 index entries: 548 authored and 25 contextual. The visual catalog
  provides 661 selectable forms across 411 meanings.
- Bootstrap JavaScript used 265.2 ms against the unchanged 1500 ms budget in
  the recorded full run. This checks CPU startup, not network delivery or paint.
- Canonical-source projection, standalone builds and the 358-document export
  are deterministic. No new runtime dependency, service, account, API key or
  animation clock is introduced.

## Mathematics and connected stories

All three modules evaluate one binary symmetric channel family. Tests check
joint mass nonnegativity, unit total, both marginal sums, normalization of
positive conditional columns, entropy identities, mutual-information bounds
and agreement with an independent joint-versus-product-of-marginals sum.

Selecting an impossible observation leaves its posterior and slice entropy
null. Its weighted contribution is zero, while the joint law and global
information outputs remain valid. The independent oracle checks both selected
observations without changing those global outputs.

At q=1/2 and e=1/10, p11=0.45, H(X|Y)=0.4689955935892812 bits and
I(X;Y)=0.5310044064107188 bits. At e=1/2 the lamp is independent of the tray.
At e=0 or e=1 it can be decoded exactly; H(X|Y)=0 and I(X;Y)=H(X).
Certain tray states have H(X)=I(X;Y)=0.

The biased example q=3/4, e=1/4 and lamp off gives a selected posterior of 1/2
and selected entropy 1 bit. Before observing the lamp, H(X)≈0.811278 bits;
the average H(X|Y)≈0.668122 bits remains lower. This distinguishes a particular
surprising observation from the average reduction in uncertainty.

A separate internal implementation pass checked all 15 worked derivations
and 303 guided-story frames in each of the two views. Tokens are finite or
explicitly readable labels; nullable fields do not enter numeric templates.
Each guided story exposes one range control and suppresses the scene's second
control. This is an additional internal audit, not external mathematical review.

## Rendered visual review and limits

Browser control was disabled in Work settings during this release. No browser
or desktop automation workaround was used. Live dragging, playback, DOM layout,
touch, screen-reader behavior and the live portfolio iframe were not newly
verified for 0.31. The code retains the existing shared interaction contracts,
and its controller/integration regressions pass.

The actual model SVGs were rendered as static artifacts with explicit local
Segoe UI glyphs and inspected at compact and desktop widths. Rasterization was
serialized to avoid a fallback-renderer font/cache artifact. These are scene
reviews, not browser screenshots or measurements of a physical phone.

| Evidence | Reviewed quantities |
|---|---|
| [Compact scenes](presentation-0-31/compact-scenes.png) | Four readable joint masses, row/column totals, selected lamp column, normalized Empty/Book strip, prior and selected entropy, weighted average and information decomposition |
| [Edge cases](presentation-0-31/edge-scenes.png) | Selected entropy above the prior in the biased example; safe impossible observation; full information from an inverted lamp |
| [Compact Graphs](presentation-0-31/compact-graphs.png) | Correct dependence on error probability, midpoint independence and endpoint information; continuous curves describe parameters, not fractional outcomes |
| [Desktop scenes](presentation-0-31/desktop-scenes.png) | Same quantities and scales in the wider shared space |

Short headings, explicit strip colors and the visible prior keep the selected
reading understandable. Unfocused groups retain 84% opacity, with the focused
group at full opacity. Future browser qualification should check these rendered
scenes in the complete story layout before making accessibility claims.

## Sources and roadmap

Two newly inspected primary-source records support joint/conditional discrete
laws and information identities: Yen-Chi Chen's University of Washington
probability lecture, and MIT 6.441 section 1.1 and section 2.3. The MIT references
include joint and conditional entropy, mutual-information symmetry and bounds,
average conditioning versus a specific observation, and the binary symmetric
channel. Existing entropy references support units and zero-term conventions.
The tray/lamp scenarios, diagrams and worked derivations are originally authored.

All 214 book-topic IDs and 217 attributed book records remain intact. There
are still 46 introduction links, 41 precursor links and 127 planned rows.
The new cards deepen prerequisites for MAT-052 and MAT-177; they do not supply
microcanonical ensembles, physical entropy or the book's definition of a form.
Book edition claims, historical priority and external learning review remain
open.
