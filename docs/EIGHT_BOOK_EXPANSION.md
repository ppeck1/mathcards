# Eight-book subject roadmap

The 2026-11-02 attachment adds an attributed planning inventory: eight books,
18 subject areas, 295 concept labels and 312 book/concept associations. It is
preserved byte for byte in
[the supplied JSON](../content/planning/eight-book-subject-inventory-v1.json).
The attachment itself says that it is not an exhaustive page audit.

The [full subject matrix](EIGHT_BOOK_SUBJECT_MATRIX.csv) and the app's Subjects
browser are projections of this inventory plus a separately authored
[lesson crosswalk](../content/planning/eight-book-crosswalk.json). Importing a
subject never creates a completed lesson or a verified book attribution.

The current branch crosswalk links 71 inventory subjects to bounded draft
introductions and 56 to preparation only; 168 remain planned. These are
concept-to-lesson links, so several subjects can lead to the same lesson. They
are not counts of new cards or complete treatments of a book.

| Expansion family | Working introductions on this branch | Scope retained |
|---|---|---|
| Inference and distributions | Sampling distribution, binomial confidence interval, one-sided hypothesis test, binomial and Poisson laws | Explicit finite sampling or stated distribution models; no unsupported general inference engine |
| Statistical modeling and design | Five-point regression, Pearson correlation, two-by-two interaction and chi-square discrepancy | Descriptive constructions; causal claims, ANOVA and missing uncertainty methods remain separate |
| Information | Relative entropy | A finite KL-divergence family, including zero-probability and infinite-divergence states |
| Dynamics and order | Fields, flows, basins, fold, cusp potential, partial order, meet/join and distributivity | Declared normal forms or a finite powerset lattice; no general catastrophe or lattice classification |
| Energy and computational learning | Finite heat balance, Gibbs comparison, ideal gas, scalar sigmoid and one Hebbian update | Physical units and model limits; no biological validation or reaction-rate inference |
| Number and counting continuation | Modular remainders, gcd, prime factors, signed rational reduction, positional numerals, permutations and combinations | Exact finite domains; ordered assignments, unordered teams, prime factors and represented values retain separate meanings |
| Spatial mechanics continuation | Spatial cross/triple products, passive orthonormal frame change, projection/residual, angular velocity and linear momentum | A viewing projection is not a measured area or volume; passive frames do not rotate the arrow; angular momentum remains separate |
| Local coordinates and rule histories | Circle/sphere charts, continuous gradient flow, quasi-static hysteresis and restricted perturbation comparisons | Bounded examples prepare manifold and stability theory; chart poles are not singular spheres, and mechanical history is not neural memory |

## What the continuation advances

Eleven inventory subjects gain direct bounded introductions through the number
and counting family: numerals, numeral systems, rational numbers, fractions,
prime numbers, modular arithmetic, factorials and their notation, binomial
coefficients and their notation, and counting methods. Fractions advances from
preparation only. Zero, negative numbers and prime conjectures receive explicit
preparation links; the prime-conjecture link supplies vocabulary, not a claim
about a conjecture’s current status or a proof.

The remaining eleven new lessons strengthen existing preparation links in
analytic geometry, topology, vector calculus, mechanics, optimization and
catastrophe theory. They are not relabeled as completed fields. Unit-circle and
unit-sphere charts do not supply sphere area/volume lessons. The linear-momentum
lesson does not complete angular momentum. The restricted structural comparison
does not certify arbitrary perturbations, and quasi-static branch selection does
not simulate a switching rate or biological facilitation.

The earlier four-book matrix now records 59 introductions, 36 precursors and
119 planned rows, with all 214 topic IDs and 217 attributed associations kept.
Its examples of manifold charts and local structural robustness remain
precursors. The two inventories overlap and retain independent evidence and
review states.

## Three independent questions

| Question | Recorded as | Meaning |
|---|---|---|
| Is this concept associated with a book? | `confirmed_scope`, `provisional_book_mapping`, or `proposed_bridge` | The evidence status reported by the supplied inventory; preserved without upgrading it |
| Is there a lesson for this subject? | `draft-introduction`, `precursor`, or `planned` | An explicit editorial link to a bounded draft introduction, preparation only, or no linked lesson |
| Has the lesson passed independent review? | The card's own review gaps and draft publication state | Numerical checks and a source association do not establish independent mathematical or learning review |

The source inventory reports 215 concepts with at least one confirmed scope
association and 80 with provisional mappings only. These are source-association
counts, not counts of taught concepts. A provisional association can coexist
with an independently authored lesson; a confirmed book title can coexist with
an entirely planned lesson.

Some supplied evidence records have no linked source page. Their explanatory
notes remain visible. The app does not manufacture a locator or silently
replace the edition with a newer one. Page-level verification remains open for
Devore's 1987 edition, Solomon, Grätzer and Gleick, and for individual authored
cards as described in the supplied inventory.

## Eighteen subject areas, eight atlas territories

The subject browser adds a reading organization without replacing the atlas's
geographic organization. Subjects such as Statistics, Experimental design,
Computational neuroscience and Thermodynamics are independently searchable.
A concept can have more than one subject membership; the browser still counts
each stable concept ID once.

The existing [four-book roadmap](BOOK_CONCEPT_ROADMAP.csv) keeps its 214 stable
`MAT-` IDs. The new inventory is not appended to it as 295 allegedly distinct
additional mathematical concepts: the two inventories overlap and serve
different attribution purposes. Lesson links may connect both inventories to
the same canonical card. Editorial bridges remain separate from claims about
book contents.

## Implementation matrix

| Part | Branch implementation | Acceptance condition |
|---|---|---|
| Preserve supplied evidence | Raw JSON is unchanged; generated data records its SHA-256 | Compare the source hash and retain all original evidence notes |
| Subject organization | All 295 IDs and all 18 subject areas are browsable | No unsupported subject is hidden or marked available because it was imported |
| Search | Subject name, ID, book title, subject area and linked lesson title | Search and book/subject/availability filters compose; every label is reachable |
| Lesson links | Explicit crosswalk to canonical card slugs | Unknown slugs fail the compiler; introductory scope is stated next to the links |
| Planned subjects | Visible planned status and no executable-card link | A planning row cannot masquerade as a working experiment |
| Evidence disclosure | Original book association and source links in a details panel | Provisional coverage and missing page anchors remain explicit |
| Deterministic data | Build-time projection and full CSV matrix | No runtime cross-link scan, current timestamp or private notebook input |
| Independent review | Still open | Qualified mathematical and learner review must happen separately |
| Device qualification | Still open while desktop interaction is excluded | Real keyboard, touch, fonts, screen readers and storage recovery need later physical-browser checks |

## Contributing to the crosswalk

Change the canonical card first, then edit the matching `concept_id` row in
`content/planning/eight-book-crosswalk.json`. Use `draft-introduction` only when
the linked card directly introduces that subject. Use `precursor` when a
related card prepares for a broader subject. Include a concrete scope boundary.
Keep `planned` with an empty `cards` list when there is no linked executable
lesson. Similar words alone are insufficient evidence of coverage.

Run `python tools/build_subject_inventory.py` or the complete build. The
compiler checks unique IDs, domains, books, source ownership, evidence statuses,
all 312 associations, declared counts and actual canonical card links. It
produces inert classic-script data and the CSV matrix, using explicit LF bytes.
The subject provider has no simulation clock, model evaluator, private storage
access or independent animation loop.
