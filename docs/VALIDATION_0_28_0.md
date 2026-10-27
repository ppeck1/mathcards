# 0.28.0 validation record

## Automated checks

- All 816 JavaScript tests passed, including 20 focused reasoning-model tests,
  new integration cases, prepared-index startup, host pacing, comparison pins,
  workspace contracts and existing reference regressions.
- All 11 Python tests passed, including deterministic build/export, source
  parity, terrain generation and preservation of the 214-topic book roadmap.
- Independent Python computation paths agree with all 478 canonical fixtures.
  The four new lessons add 48 fixtures and 20 original worked examples.
- Nine negative schema/reference/contract mutations are rejected. Intentional
  invalid-domain fixtures remain legitimate test records.
- The [notation audit](NOTATION_COVERAGE_0_28_0.json) resolves all 46,517
  occurrences across 1,035 unique tokens, with zero unresolved or review items.
  Its scope includes formulas, worked examples, story mathematics, declared
  control boundaries and reference forms. The searchable index has 489 entries
  (464 authored and 25 contextual); the visual catalog has 597 selectable forms
  across 356 meanings.
- Bootstrap JavaScript used 241.0 ms against the 1500 ms budget in the full run.
  This measures bootstrap CPU behavior, not a physical-phone load time.
- The models distinguish relation candidates from members, selected truth from
  global equivalence/validity, scalar application distance from position vector,
  force from displacement, and signed torque from nonnegative magnitude.
- Extreme underflow in a nonzero torque or visible projection is diagnosed;
  exact cardinal-angle zeros remain positive zero with no invented direction.
  Compound port units support ASCII products such as N.m, while semantic types
  keep torque distinct from energy.

## Browser walkthrough

The final standalone artifact was served from an isolated preview folder and
opened in Chrome. UI actions exercised the guided controls and advanced views.

| Lesson | Observed result |
|---|---|
| Predicates and relations | Lowering h from 18 to 14 cm changes the count from 10 to 21 and the known pair (6,8) from False to True. Graph uses separate exact horizontal count intervals with included/excluded endpoints |
| Logical equivalence | Width 5 to 3 cm changes both De Morgan formula results from False to True while equivalence remains global. The lookalike pair matches at (9,5), yet Graph and readout retain its two mismatching assignments and Not equivalent result. A pin compares False → True using words |
| Inference | At (3,5), affirming the consequent shows both premises True, conclusion False and one counterexample; current truth stays separate from global validity. Graph exposes the counterexample region |
| Torque | Turning from 30 to 90 degrees changes signed torque from 4 to 8 N·m and perpendicular moment arm from 0.4 to 0.8 m. Graph at −90 degrees gives −8 N·m while magnitude stays 8 N·m |
| Reference | Searching ⊨ finds Semantic entailment and its inference-card link. Expanding the full catalog exposes new relation, vector and torque forms; selecting τ_z opens its definition and torque-card link |

Four 405-pixel iframe previews, including vertical browser scrollbars, show the
phone layout at approximately 390 content pixels. Each guided lesson has one
HTML range and no in-scene slider. Native edits reach all four targets: 21 pairs,
True, True and 8 N·m. Scene labels remain legible, controls and shapes fit their
frames, and no horizontal page overflow is visible.

[Responsive presentation evidence](presentation-0-28/four-lessons-phone.png)
records the four final guided scenes. These checks do not establish physical
touch-device qualification, screen-reader accessibility or learning outcomes.

## Scope and provenance

Five newly inspected primary sources support definitions: Western University's
binary relations/predicate notes and OpenStax equivalent statements, De Morgan
laws, logical arguments and torque. Scenarios and derivations are original.
Historical development, independent mathematical/pedagogical review and
edition-specific book coverage remain explicitly pending in the draft records.

The book roadmap preserves 214 stable topic IDs and 217 attributed book records.
It now links 42 rows to draft introductions and 34 to precursors, with 138 still
planned. A finite truth-table argument check is not an arbitrary proof engine;
a single-force torque construction does not predict rigid-body motion. Shared
runtime boundaries remain: no new clock, network service, account or API key.
