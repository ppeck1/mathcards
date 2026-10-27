# 0.27.0 validation record

## Automated checks

- 789 JavaScript tests passed, including the prepared-index startup budget,
  model/domain invariants, formula and story alignment, metadata, notebook,
  workspace, comparison and existing notation regressions.
- 11 Python tests passed, including build/export determinism, source parity,
  terrain generation and the full book-roadmap identity/link check.
- The independent Python computation paths agree with all 430 canonical cases.
  The four new cards supply 48 of those cases and 20 original worked examples.
- Nine negative schema/reference/contract mutations are rejected, including an
  invalid enum fixture incorrectly declared valid. Intentional rejection cases
  remain valid test records.
- Final provider/host checks were repeated after presentation corrections:
  negative bases are parenthesized, zero updates do not display a zero-to-zero
  power, only the active truth-table row represents the current result, and
  announcements use human-readable expressions.
- The current [notation report](NOTATION_COVERAGE_0_27_0.json) has zero unresolved
  forms and zero callable-review items. The reference has 455 entries, including
  430 authored entries; the visual catalog has 573 forms across 336 meanings.
- Local bootstrap JavaScript used 237.4 ms against the 1500 ms CPU budget in the
  recorded full run. This is a bootstrap CPU test, not a physical-phone load-time
  measurement.

## Browser walkthrough

The built offline artifact was served from a dedicated local preview folder and
opened in Chrome. Browser UI actions checked:

| Lesson | Observed behavior |
|---|---|
| Logical connectives | At panel dimensions 9 by 5 cm, AND reads True; Graph shows the input-plane truth region. Pinning True, choosing implication and reducing width to 3 cm reads False and compares True → False |
| Quantifier | At h=2 cm all six strips pass and both claims are True. At h=2.01 cm five pass: Every is False while At least one remains True. Graph has separate exact horizontal truth segments and open/closed endpoints |
| Cross product | At 90 degrees the normal component and area are 6 m². In Graph at −90 degrees the signed normal is −6 m² while area stays 6 m² |
| Stability | At r=1/2 eight corrections give 0.00390625 cm. At r=−1 the magnitude remains 1 cm and the rule is bounded without attraction. Setting completed updates to zero preserves the starting displacement and Graph selection |

Four 405-pixel iframe previews, including their vertical browser scrollbars,
show the phone layout at approximately 390 content pixels. Each guided story
has one HTML range and no in-scene slider. Native range edits reached the four
story goals without intermediate truth values or fractional updates. Labels and
scenes fit their frames; the desktop logic scene was shortened to remove an
unused band. Text retains full contrast while shape emphasis remains steady.

[Phone presentation evidence](presentation-0-27/four-lessons-phone.png) records
the four actual guided scenes. Formula and scene marks also have targeted
semantic-selection tests. A manual browser walkthrough is not independent
mathematical review, physical touch qualification, a screen-reader audit or an
evaluation of learning effectiveness.

## Scope and provenance

The user-supplied book matrix was inspected as a twelve-page PDF. All 214
normalized topic IDs were extracted and preserved, and its book counts reconcile
to 217 records (51/54/85/27). Coverage, editions and depth are attributed to that
matrix, not independently verified as book claims. The original attachment and
its local path are excluded from the public package.

Six newly inspected primary teaching sources support the authored definitions:
OpenStax statements/quantifiers, compound statements, truth tables and cross
products; UC Davis scalar dynamics; Texas A&M structural-stability terminology.
Stories, examples and derivations are original constructions. The stability
lesson is a scalar discrete precursor and does not implement structural
stability, a continuous flow or catastrophe theory.

Shared runtime boundaries remain: no new animation clock, host topic branch,
network service, account, API key or automatic variable-name connection.
