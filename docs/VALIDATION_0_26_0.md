# 0.26 concept expansion validation

Prepared 2026-10-27. Cards remain draft teaching specimens; this record describes
implementation checks, not independent mathematical, historical or learning review.

| Check | Result |
|---|---|
| Collection | 41 cards, 209 original worked examples, 382 numeric fixtures, 52 canonical source records and 250 written exports |
| Representations | 41 Geometry, 41 Graph and seven existing Spatial views: 89 total |
| JavaScript | 762 tests pass, including new model, domain, graph, story-goal, metadata and notation-scope regressions |
| Python/content | Ten tests, schema/reference checks, independent numeric calculations and deterministic export checks pass |
| Expanded notation | 426 entries; 40,913 recognized occurrences across 957 forms; zero unresolved or review findings |
| Visual catalog | 552 selectable forms and 321 meanings, derived from the prepared reference rather than a second inventory |
| New examples | Fifteen original cases; thirty-six fixtures independently checked with length ratios, an expanded variance quadratic and finite geometric sums |
| Sources | Five new primary definition references: OpenStax conditional probability, uniform distribution, spread, sequences and geometric sequences |
| Independent code review | Story goal, graph sampling, precision, scene-copy and syntax-reader findings were fixed before publication |

## Gap priority and actual atlas changes

| Territory | Before | After |
|---|---|---|
| Chance and inference | 3 available / 15 planned | 5 available / 13 planned |
| Computation | 2 available / 6 planned | 3 available / 5 planned |
| Change and motion | 13 available / 8 planned | 14 available / 8 planned |

All 24 areas still have at least one introduction. The mapped planned inventory
falls from 70 to 67 distinct identities. The full coverage inventory stays at
192 rows because existing planned identities were promoted to draft specimens.
Memberships overlap; territory counts do not sum to the collection count.

## Browser qualification

The actual standalone app was served locally in Chrome. The walkthrough checked:

- Conditional probability begins at the whole 100 cm window. Moving it to
  40 cm yields 24/40=0.6 while the original whole-strip probability stays 0.24.
  The target is marked solved and its conclusion agrees with the scene.
- Changing the last cut from 14 to 10 cm changes the mean from 11 to 10 cm, variance
  from 5 to 2 cm² and standard deviation to √2 cm. The target conclusion agrees.
  The optional playground inherits 10 and its Graph view remains available.
- Changing retention from 0.5 to 0.75 gives 13.423828125 L after six exact rounds.
  The correct conclusion is marked solved. Keyboard activation selects Graph;
  setting completed rounds to 0 returns the initial 20 L with no update.
- The new d₄ index reader opens Deviation from the mean and links to Variance.
  Its generic subscript reader retains that named family's actual context.
- Three local frames each had a measured 390 CSS-pixel content width. Each
  guided lesson had one HTML range input, zero in-scene sliders and no
  horizontal overflow. All three target states were verified there.
- Result text remains full contrast during story focus. Shape emphasis uses
  steady opacity changes; the shared readable-value pacing remains intact.

See [phone-width evidence](presentation-0-26/three-lessons-phone-390.png).
The responsive harness is local QA material and is excluded from the package
and deployment. Direct file launch was not newly browser-tested; the same
self-contained HTML was inspected through local HTTP.

## Specific regression checks

Conditional graphs include exact corners/current/pinned points even for small
inked intervals. Zero conditioning remains undefined; positive windows whose
probability underflows the numeric representation report a precision error.
Scene and graph controls preserve supported small current values and never
present a valid `0/0` probability result.

Variance square areas use one fixed scale, 49 SVG units² per cm². The primary
port is population-variance/cm2, distinct from geometric area; standard
deviation uses length/cm. Recurrence rounds remain discrete and retain-before-
refill order is preserved, including its zero-round state.

The build leaves identical generated reference/export files untouched. This
avoids unnecessary rewrite attempts while Windows viewers hold generated
files open, without changing the deterministic payload.

## Remaining qualification

Physical phones, touch, rotation, screen readers and learning effectiveness are
not qualified by these browser-width and numeric checks. Statistical inference,
general recurrence solving and foundational proof methods remain future work.
See the [updated matrices](BUILD_REVIEW_0_26_0.md).
