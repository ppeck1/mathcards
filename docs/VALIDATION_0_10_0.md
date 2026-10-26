# Validation — 0.10.0

Checked locally on 2026-10-23.

- All 278 Node tests pass. New coverage includes actual logistic recurrence snapshots, completed and fractional generation boundaries, frozen/invalid/stale inputs, story substitutions and highlighted curve coordinates, retained number nodes, one-generation stepping, equal-width fractal motifs, source-region mappings and view-only comparison toggles.
- The full Python check passes four pipeline tests, JSON schemas, 122 model fixtures, eight negative contract mutations, deterministic exports and pinned BOH metadata lint. Content remains 18 draft cards, 94 worked examples and 112 exports. Coverage remains 187 entries: 18 implemented draft specimens and 169 planned entries.
- Browser checks confirmed that the comparison strip renders three parts of the same SVG outline through shared `use` references. At depth five, it displays source-edge ratios 1, 1/3 and 1/9 at equal viewing width, with five, four and three full levels of detail respectively. Comparison does not add refinement or change whole-perimeter readings.
- The chaos story was exercised with starts 0.35 and 0.350001. One-generation stepping preserved those starts, reached generation one, displayed the actual 0→1 recurrence for both paths, and highlighted the corresponding curve segments and result endpoints. The input, substitution and output fields retained their text nodes in automated tests.
- Completed integer generations show the update that just ended there; fractional generations show their containing interval and explain interpolation. Generation zero previews 0→1. The browser workbench at generation 36 showed 35→36, disabled the next-generation button and explained the finite endpoint.
- New disclosures remain optional. Both tools were exercised independently in the workbench, without horizontal page overflow. At 390×844, the chaos substitutions stack vertically, the current-step reader stays open, and the fractal strip has a local 338 px viewport over 540 px of scrollable comparisons. The document itself does not overflow horizontally. These checks are not broad mobile or assistive-technology qualification.
- Browser checks reported no application console errors or warnings. No notebook entries were saved. Browser automation used an agent-owned loopback preview rather than the user's file tab.
- The new helper loads through the offline classic-script order before its consumers. Source scripts, generated standalone HTML and package version agree on 0.10.0. The package task checks ZIP integrity and verifies its standalone entry against the built application.

Saved browser previews:

- [Repeated fractal edges beside the story](preview-v0-10-repeating-edges.png)
- [A completed chaos substitution](preview-v0-10-chaos-step.png)

This pass improves exploration of the existing eighteen cards; it adds no new theories. Fractals remain finite constructions with at most five complete levels. Chaos has discrete logistic iterates; fractional cursor positions interpolate endpoint populations and do not apply the recurrence at fractional generations. Calculations remain full precision internally and displayed substitutions are rounded. Draft mathematics/editorial review, historical research and live BOH ingestion/retrieval remain unfinished.
