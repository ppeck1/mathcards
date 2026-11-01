# Computation and proof · 0.32.0

This batch fills two gaps in the book roadmap: writable machine configurations
and rule-checked formal derivations. Both use one model provider and one story
provider with the existing playground host. Each has Geometry and Graph views,
an original library scenario, five worked examples and indexed language.

## Added lessons

| Lesson | Connected story, formula and visual | Stated boundary |
|---|---|---|
| Writable Turing-machine tape | Advance an inventory count from binary 1011 to 1100; the selected rule writes a cell, moves the head and changes state | One six-rule incrementer and four selectable four-bit inputs; the underlying tape extends both ways, while the viewport covers the visited cells |
| Formal proof and derivation | Reveal the premises p, p→q and q→r, then cite earlier lines to derive q and r; separate arrows trace the selected step's dependencies | A premise-plus-modus-ponens calculus and three fixed candidate sequences; broader proof systems and arbitrary proof search remain planned |

## What works and what remains

| Principle | Current result | Remaining limit |
|---|---|---|
| Modularity | Models, stories, records, reference entries and map placement remain separate; the shared host supplies controls and timing | No general machine-program or proof editor |
| Connected quantities | A tape's last written cell stays distinct from its moved head; proof arrows originate at the cited earlier lines | A static diagram alone does not qualify touch or screen-reader interaction |
| Readable steps | One guided slider advances whole configurations or lines; Graph draws discrete samples | These are discrete mathematical changes rather than continuous interpolated states |
| Writable memory | The finite state, head and stored tape jointly determine a machine configuration | One incrementer does not demonstrate universal computation or undecidability |
| Honest intermediate values | Carrying can lower the tape's numeric reading before the final increment; halting freezes the actual transition count | The current tape reading is not a completed count until halt |
| Syntax and truth | Valuations change truth readings without changing rule checks; the valid chain remains a witness when another candidate fails | No claim of a complete calculus, arbitrary theorem proving or empirical truth of the premises |
| Index and atlas | Scoped entries distinguish tape δ from an automaton transition, blank □ from zero, and derivability ⊢ from entailment ⊨ | Broader meanings remain contextual; the book matrix still needs independent edition review |

## Next modules

| Priority | Next work | Acceptance condition |
|---|---|---|
| Sampling | Repeated observations, sample means and their variability | Separate the model law from a realized sample and long-run claims |
| Information comparison | Relative entropy and a mismatched predictive model | State both distributions; explain zero support and direction before divergence |
| Topology and dynamics | Neighborhood continuity, continuous flows and a fold bifurcation | Keep metric, domain, state and control axes explicit |
| Deeper proof and computation | Editable bounded programs, additional proof rules and small interpreted structures | Preserve checked configurations and distinguish syntax, interpretation and theorem scope |

The collection contains 61 draft cards, 309 original worked examples, 622
canonical fixtures, 370 deterministic written exports and 129 views: 61
Geometry, 61 Graph and seven existing Spatial. The inventory has 201 rows:
61 draft specimens and 140 planned concepts. The atlas maps 62 distinct
planned concepts; Computation has five available lessons. Region counts overlap. The reference contains 599 entries and 670 selectable
forms across 428 meanings; there are 77 primary-source records.

All 214 book-topic IDs and 217 attributed records remain intact. MAT-069 and
MAT-096 gain bounded introductions. There are now 48 introduction links, 39
precursor links and 127 planned rows. The Church–Turing thesis, universal
simulation, undecidability and general proof systems remain open. See the
[validation record](VALIDATION_0_32_0.md) for evidence and review limits.
