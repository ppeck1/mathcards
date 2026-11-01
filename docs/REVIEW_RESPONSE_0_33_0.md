# Presentation review · 0.33.0

The supplied review describes 59 cards and 890 JavaScript tests. The starting
release here was 0.32.0, with 61 cards and 910 tests. The visible thumbnail
collisions and most presentation findings still applied. This release repairs
those issues without adding concepts or changing the shared playground host.

## Mathematical presentation

| Finding | Result | Evidence or boundary |
|---|---|---|
| Exact logarithms labeled approximate | Fixed | Bounded binary-rational certificates replace the allowlist; integer powers and reduced fractions for powers-of-two inputs retain exact strings |
| Log multiplier changes with argument | Fixed | Captions state that adding one to the exponent multiplies by the base; the selected tick spacing does not redefine that factor |
| Greek Σ used for summation | Fixed | Probability properties and the Riemann-sum entry use ∑; semantic regression checks preserve Σ as an alphabet or Greek-letter meaning |
| Stale graph vertex labels | Fixed | The index names the actual A–D vertices and route A→D |
| ASCII minus and signed addition | Fixed | Shared formula helpers render minus signs and simplify signed terms while retaining signed accessibility labels and existing text nodes |
| Singular preview units | Fixed | One book and one bit use singular labels |
| Headline formulas are one text node | Fixed | All 61 canonical TeX definitions compile to annotated native MathML; fractions, subscripts, sums and matrices have structure |
| Missing legacy experiment presets | Improved within the models' scope | Six newly executable examples; other examples remain explicitly written cases when they need a different function, type, domain or control range |

Exactness certificates concern the represented input numbers. Uncertified
evaluations remain numerical; proximity to an integer alone proves nothing.
No general symbolic algebra engine is claimed. The numerical logarithm output
and independent fixture formulas are unchanged.

## Visuals, navigation and accessibility

| Finding | Result | Evidence or boundary |
|---|---|---|
| Preview captions collide with data | Fixed | Every preview reserves a separate caption band; all 61 retain model-derived geometry and readable text |
| Small, faint reference labels | Improved | Reference metadata has an 11 px floor; seven representative foreground/background pairs meet 4.5:1 in automated checks |
| Incomplete Explore filter chips | Fixed | All eight filters use actual atlas membership, compose with search and retain every match |
| One very long card grid | Fixed | Twelve cards appear initially; Show more reveals the rest, with draft status stated once |
| Internal connection IDs and “LEAVES” | Fixed | Linked lesson titles and ordinary example labels; evidence metadata is inside review details |
| Unhelpful initial Index and Workbench | Fixed | Addition opens the unselected Index route; two different modules open the Workbench, with management controls below the experiments |
| Gradient-descent question assumes the goal input | Fixed | The opening question asks how changing the learning rate affects the four updates |
| Story heading outweighs the page heading | Improved | Story typography follows the page's serif hierarchy with smaller desktop/mobile caps |
| Map counts appear inconsistent | Clarified | A visible note explains overlapping territory membership; the collection total remains a count of distinct cards |
| Map label halo and border placement | Improved | Reduced halo width and moved Computation inside its territory; the contour elevations still represent lesson counts |
| Notebook import has no label | Fixed | The native file input has an explicit accessible label |
| Shared links lack previews | Fixed | Canonical Open Graph and Twitter metadata includes the existing public project image |

[Preview scene proof](presentation-0-33/previews.png) and
[map scene proof](presentation-0-33/map.png) are static renders of actual SVG,
not browser screenshots. No browser-control workaround was used. Browser
layout, actual phone dragging, MathML font behavior, screen readers and a fresh
axe audit remain unverified because live browser control is disabled.

## Repository and build

| Finding | Result | Evidence or boundary |
|---|---|---|
| Committed build drift is hidden by rebuilding | Fixed | CI checks generated paths against Git after build/tests, including untracked generated files; artifact hashes and standalone parity are checked too |
| Manifest hash disagrees with committed HTML | Fixed | Reproduced on 0.32.0; generated text now uses explicit LF bytes on Windows and Linux, backed by Git attributes and hash tests |
| Unused baked terrain asset | Removed | The archived generator and its mathematical tests remain; its default output is ignored QA data, not an unused runtime asset |
| README mixes the introduction with old releases | Fixed | A short visual introduction, live link, run instructions and contributor links replace the release-note wall; history remains in the changelog and Git |
| A TeX dependency could burden startup | Avoided | The pinned MIT-licensed Temml parser is a build tool only; the app ships native MathML data and needs no parser, CDN or font download |

The review's reported 393,000 random comparisons and independent fixture script
were not attached. They are useful external evidence, not results we claim to
have reproduced. This release runs the repository's independent numeric
references and adds targeted regression tests for the reported failures.

## Verification

All 944 JavaScript tests pass in the recorded full run (66.5 seconds). Bootstrap
used 273.6 ms against the unchanged 1500 ms budget. The isolated index test file
fell from 87.29 to 17.61 seconds; its exhaustive actual-catalog lookup test fell
from 72.82 to 4.92 seconds. No test fixtures or card-use contexts were removed.
The optimization shares query analysis only within one search call.

All 61 canonical formulas compile, and notation resolves 55,982 occurrences
across 1,177 forms with zero unresolved or review items. There are still 599
reference entries and 670 selectable notation forms. See the
[validation record](VALIDATION_0_33_0.md) for the independent pipeline checks.

## Remaining work

| Priority | Work | Acceptance condition |
|---|---|---|
| Browser qualification | Phone/desktop walkthrough, axe, native MathML and touch | Inspect the full layouts and actual assistive technology behavior rather than infer them from unit tests |
| Smaller startup payload | Measure and stage reference/catalog JSON hydration | Preserve offline use, header search and source parity; demonstrate improvement under CPU throttling before changing architecture |
| Reviewable code | A separate formatter/lint migration and shared text helpers | Keep formatting changes apart from behavior changes, exclude vendored/generated code and preserve mathematical strings |
| Legacy model migration | Move the three original families behind the common provider API | Preserve domain failures, both composition orders, analytic versus finite derivatives and existing saved workspaces |
| More executable examples | New model families for unsupported written cases | Implement their actual mathematics before offering a Load experiment button |

The map's territory counts intentionally overlap. Broad mathematical and
pedagogical review remains open; neither repaired labels nor additional tests
turn the draft lessons into independently reviewed material.
