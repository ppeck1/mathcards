# Symbol and notation coverage contract

This is the notation gate for the current application. It defines a finite,
reviewable meaning of “complete” before another concept batch is implemented.
The pre-expansion baseline was 29 canonical cards, their stories and interactive
representations, plus the common reference families below. The expanded release
now contains 38 cards and applies the same contract to their new forms. Completion of this
gate is not a claim to contain every notation used anywhere in mathematics.

The pre-expansion gate passed on 2026-10-26: 23,991 mathematical occurrences
across 795 distinct normalized forms, with zero unresolved forms and zero pending
callable reviews. The reference then contained 335 authored definitions and 20
locally contextual entries. [The preserved baseline report](NOTATION_GATE_BEFORE_EXPANSION.json)
records that check before the next concept batch was implemented.

The same gate runs again for the expanded release through `python tools/check.py`.
The [current report](NOTATION_COVERAGE_0_22_0.json) includes the added concepts,
reference examples and public renderer/readout samples. These are syntax, meaning
and navigation checks, not independent mathematical review or learner qualification.

The preserved 0.20.0 gate passed with 29,760 resolved occurrences across 826
normalized forms, zero unresolved forms and zero pending callable reviews. That
index contained 372 entries: 352 authored definitions and 20 contextual entries.
The 0.21.0 corpus extends this checkpoint to 35 cards and 386 index entries
(366 authored plus 20 contextual). Its gate includes the additional
shifted-log display and resolves 36,609 occurrences across 876 forms, with zero
unresolved or callable-review items.

| Checkpoint | Cards | Selected fields | Occurrences | Forms | Unresolved | Callable reviews |
|---|---|---|---|---|---|---|
| Before expansion | 29 | 14,786 | 23,991 | 795 | 0 | 0 |
| Expanded 0.20.0 | 32 | 18,000 | 29,760 | 826 | 0 | 0 |
| Expanded 0.21.0 | 35 | 22,182 | 36,609 | 876 | 0 | 0 |
| Expanded 0.22.0 | 38 | 23,794 | 39,023 | 916 | 0 | 0 |

The preserved 0.20.0 field total includes 16,147 public runtime samples and 840 reference
fields, alongside the selected canonical/story fields. Its 664 formatting records
and 58 reviewed UI gesture-icon exclusions are accounted for separately. Runtime
samples exercise the declared views and selected control boundaries; this finite
audit does not enumerate every real-valued parameter combination.

The preserved 0.21.0 report includes 20,172 public runtime fields and 874 reference
fields. Its 751 formatting records and 58 reviewed gesture-icon exclusions are
accounted for separately. The shifted natural-log display ln(1+C) is mathematical
notation and remains in scope; C is normalized and dimensionless before the
logarithm is applied.

## 1. Finite completion boundary

The gate is complete when every identified learner-facing mathematical form in
the selected corpus has an accurate definition or a documented notation-family
rule, preserves its local meaning, and can be followed to its actual uses. A
literal number or an entire substituted equation does not need its own glossary
entry. Its signs, grouping, operations, indexing, quantities and units do need an
explanation. An unfamiliar input must not silently receive a different term's
definition through a substring match.

| Corpus | Included learner fields | Excluded internal material |
|---|---|---|
| Canonical cards | Meaning; formal definition and signature; conditions and domain notes; grammar expression, formation rule, symbols and selected AST mathematical formulas; properties; worked questions, calculations, results and checks; prompts and answers; mathematical application explanations | Record IDs, revision IDs, source URLs, hashes, file paths, schema property names and renderer/component identifiers |
| Formula variants | Every declared mathematical order or mode, including the full expression selected by a variant | An expression-variant value that is an AST ID is a reference, not a mathematical formula to tokenize |
| Worked fixtures | Mathematical values and unavailable-result distinctions used to check examples and displayed states; notation in authored expected displays | JSON punctuation, machine status spelling and numeric tolerance configuration are not automatically teaching notation |
| Stories | Authored explanation, calculation, variable labels, step text, displayed units and exposed mathematical helper names | Story IDs, stage keys, event names and timing configuration |
| Rendered views | Geometry, Graph and genuine 3D labels; formulas; axes and legends; readouts; scene descriptions; accessible mathematical text; data-table headings, units and status explanations | SVG attributes, CSS syntax, HTML markup, JavaScript syntax and implementation-only variables |
| Shared reference | The bounded common-reference families in section 2, including entries with no current card use | Specialized symbols from future subjects are not counted as implemented lessons merely because their names appear in the reference |

The inventory records the source location, displayed or decoded spelling,
notation family, intended meaning, definition ID or explicit classification,
and actual card/story/view context. Code-like helpers such as `floor`, `hypot`
and `atan2` are included when the application exposes them in its mathematical
explanation. Arbitrary code identifiers are not included by scanning source code
indiscriminately.

## 2. Common reference baseline

| Family | Required coverage and distinctions |
|---|---|
| Arithmetic and numbers | Addition and unary plus; subtraction and unary opposite; multiplication and juxtaposition; division and fractions; powers, roots, reciprocal and factorial; percentages; decimal and scientific notation; common Unicode fraction forms; absolute value; minimum, maximum, sign, floor, ceiling and fractional part |
| Equality, order and logic | Equality, inequality, approximation and context-dependent identity; strict/non-strict comparisons; universal, existential and unique-existential quantifiers; implication and equivalence; common logical connectives with their stated meanings |
| Sets and coordinate spaces | Membership; set braces and set-builder conditions; intervals and endpoints; standard number-set notation, including an explicit convention for natural numbers and zero; Cartesian products, real coordinate spaces and the unit square |
| Functions and change | Domain/codomain/range; function application, map arrows and composition; inverse notation versus reciprocal; exponential/logarithmic notation; trigonometric notation; limit arrows and one-sided forms; derivative primes, partial derivatives, differentials, gradient and integral notation |
| Indexed expressions | Subscripts, superscripts, sequence updates, summation/product indices and bounds; distinguish an exponent from a label and a matrix row/column index from multiplication |
| Vectors and matrices | Ordered tuples and column vectors; components, norms and dot products; scalar versus vector projection; matrix entry order, dimensions, products, inverse and determinant; coordinate vectors relative to an ordered basis |
| Probability and counting | Event probability and conditioning; distribution notation; expectation and variance; binomial coefficients and distribution parameters; distinguish combinatorial choose notation from a column-vector layout |
| Greek alphabet and symbol identity | All 24 standard lowercase and uppercase Greek letter names, with relevant variants and TeX aliases; names do not assign a universal mathematical value or role |
| Grouping, punctuation and units | Parentheses, brackets, braces, bars, commas, colons, semicolons, ellipsis and decimal points in their mathematical contexts; the units, prefixes, ratios, powers, degrees/radians and abbreviations actually used in current stories and views |

The release inventory makes the concrete supported forms in these families
explicit. A new spelling can be covered by an audited family rule rather than
duplicating definitions. A background reference entry with no identified current
use says so and supplies no fabricated card link.

## 3. Exact lookup and contextual meaning

Exact symbols and recognized notation forms take precedence over fuzzy word
search. Text matching can help find a definition by name, but it must not erase
case, mathematical type or a declared local role.

| Input or family | Expected interpretation |
|---|---|
| `δ`, `Δ`, `∂` | Lowercase delta, capital delta/change and partial differentiation remain distinct. A partial function or a “partial move” is not evidence of a partial-derivative use |
| `σ`, `Σ`, `∑` | Lowercase sigma, capital Greek sigma and the n-ary summation operator retain their character identities. Textual capital-sigma shorthand can be explained where a calculation actually uses it as a sum |
| `Π`, `∏` | Capital Greek pi and the n-ary product operator are distinguished; naming the letter does not assert a product in every context |
| `ω`, `Ω` | Lowercase omega and capital omega remain distinct. A declared sample-space use of `Ω` is shown as a local probability meaning, not the universal meaning of that letter |
| `A`/`a`, `B`/`b`, `R`/`r`, `ℝ` | Exact local symbols preserve case and style. A matrix, an event, a coefficient and a number set are not merged because their letters resemble one another |
| `∃!` | Exactly one object satisfies the statement. It is not merely “at least one,” and its exclamation mark is not factorial |
| `→`, `↦` | A function's declared source/target, an input-output mapping and approach in a limit receive their context. An ordinary flow arrow does not establish logical implication |
| `∼`, `X∼Binomial(n,p)` | Distribution notation is explained in its probability setting; it is not equality or a universal approximation symbol |
| `C(n,k)`, `n!`, stacked choose notation | Combinatorial meanings include conditions. A visually stacked pair alone does not determine whether the author means choose or a column vector |
| `ℝ²`, `[0,1]²` | Cartesian products/coordinate space and the unit square in these cards, rather than multiplying a number or interval by itself as ordinary scalar arithmetic |
| `f(x)`, `2x`, `(x,y)`, `(a+b)c` | Function application, implicit multiplication, an ordered pair and grouping are separate roles for adjacency and parentheses |
| `f′(a)`, `f'(a)`, `x′` | Derivative notation is distinguished from a prime used to label a transformed coordinate. ASCII and typographic prime forms can be aliases when their meanings agree |
| `\|x\|`, `\|z\|`, `‖v‖`, conditioning/set-builder bars | Explain real absolute value, complex modulus, vector norm, “given” or “such that” as applicable. A determinant-bar use also needs a declared square-matrix context |
| `projᵤ(v)`, `compᵤ(v)` | Vector projection and signed scalar component are distinct mathematical outputs; the former has vector components |
| `min(…)`, `8 min` | The minimum operator and the minute unit are distinguished by context |
| `exp`, `floor`, `frac`, `hypot`, `atan2` | Recognize exposed mathematical helper spellings accurately. Plain `frac(d)` for fractional part differs from TeX `\frac`; `atan2` requires its declared argument order and angle unit |
| `dt`, `Δt`, subscripted/superscripted forms | Explain integration variable, finite increment, index or power as appropriate. Numeric superscripts and Unicode fractions remain notation even when a Unicode classifier calls them alphanumeric |

Aliases express equivalent spellings within a stated use. They are not a license
to equate neighboring concepts. Definitions can offer multiple explicit contexts
and Related definitions links. A symbol query's card list must have evidence for
that symbol or its genuinely equivalent notation; a word fragment or a related
subject is insufficient evidence of use.

## 4. TeX and typography classification

Canonical TeX is decoded from JSON before inspection. Its current escaping was
checked by codepoint counts: commands have one literal backslash; matrix row
breaks have two. No corpus-wide unescaping is needed. A lexer consumes a complete
backslash run so a row break followed by `b` or `c` cannot invent commands named
`\b` or `\c`.

| Form | Classification |
|---|---|
| `\frac`, `\tfrac`, `\sqrt`, `\sum`, `\int`, `\lim`, `\log`, `\exp` | Decode the mathematical construction/operator and its arguments; do not rely on a name substring |
| `\operatorname{dom}`, `\operatorname{proj}`, `\operatorname{area}`, `\operatorname{Binomial}` | The wrapper typesets a declared name; index the name's actual mathematical meaning |
| `\mathbb{R}`, `\mathbb R`, `\mathcal{B}` | Font commands carry presentation; the rendered number set or locally named ordered basis carries the mathematical role |
| `\begin{pmatrix}…\end{pmatrix}`, `\binom{r}{s}` | Parse matrix/column layout and the author's declared type. The basis card's `\binom{r}{s}` is a coordinate column |
| `\quad`, `\qquad`, `\,`, `\;`, escaped spaces, `\left`, `\right` | Spacing/sizing instructions. They require an explicit layout classification rather than an invented mathematical operator definition or accidental quantity match |
| TeX argument braces versus `\{…\}` | Structural command grouping is distinguished from visible set braces |
| Matrix `&` and `\\` | Alignment and row structure, rather than logical “and” or learner arithmetic operators |

Spelling normalization may support equivalent Unicode and TeX forms without
collapsing distinct symbols. Character names and font relationships can be
checked against the [Unicode Greek chart](https://www.unicode.org/Public/UCD/latest/charts/nameslist/0370/)
and [Mathematical Operators chart](https://www.unicode.org/Public/UCD/latest/charts/nameslist/2200/).
Those sources identify characters; mathematical role still needs its own source
and local declaration.

## 5. Audit findings and verified corrections

The first audit found gaps in unique existence, distribution/choose notation,
natural-number indexing, Cartesian products, arrows, grouping, primes,
differentials, exposed helper functions, complex argument/modulus and capital
Greek coverage. Those findings were addressed before the baseline gate was
released. The expanded gate then covered the calculus additions and their story
units. A passing old numeric fixture alone does not close a notation finding.

The following corrections were inspected directly during this documentation
pass; this is deliberately narrower than final release approval:

| Finding | Verified state |
|---|---|
| Vector projection was bound to a scalar result | `inner-product.json` now binds `projᵤ(v)` to the `projectionX` and `projectionY` result components as an array, preserving the vector type |
| Existing lowercase Greek meanings could be lost during expansion | Lowercase delta, sigma and omega entries remain present with their original context-specific meanings; case-sensitive glyph identity remains a contract requirement |
| Canonical prompt questions were omitted by the index field reader | `math-index.js` now reads `prompt.prompt`, with the older `prompt.question` spelling accepted as a fallback |
| Typed derivative and symbol spellings needed reliable lookup | Apostrophe/prime forms use the bounded derivative reader; mathematical case and TeX command boundaries remain significant |
| New stories exposed compound unit forms | `m/m` retains its slope-ratio meaning with dimensions canceled; `m² per unit setting` uses the chain story's explicitly declared dimensionless setting |
| Ambiguous tool display suggested double-escaped TeX | Direct decoded codepoint inspection confirmed correct existing command/row escaping; canonical TeX was left unchanged |

Useful definition-level sources for the audited distinctions include
[OpenStax scalar/vector projection](https://openstax.org/books/calculus-volume-3/pages/2-3-the-dot-product),
[OpenStax binomial notation](https://openstax.org/books/introductory-statistics-2e/pages/4-3-binomial-distribution),
[Morris and Morris, §6.1 Cartesian products](https://opentext.uleth.ca/PDF/proofs%2Bconcepts.pdf),
and [Illinois CS 173 unique-existence notation, pp. 2–3](https://courses.grainger.illinois.edu/cs173/sp2018/B-lecture/Lectures/Lecture03-Notes.pdf).
For exposed function spellings, see [NIST's exponential definition](https://dlmf.nist.gov/4.2#iii)
and [the ECMAScript Math function specifications](https://tc39.es/ecma262/multipage/numbers-and-dates.html#sec-math.atan2).
Original worked scenarios remain author-derived and await independent review.

## 6. Regression and build gate before expansion

1. Inventory the selected canonical fields, every story and every declared view,
   including accessible labels, alternate modes and representative substituted
   output. Record coverage by meaningful notation forms/families and contexts,
   rather than by total glossary-entry count.
2. Classify every candidate as mathematical notation, a locally defined quantity,
   typography/layout, ordinary punctuation in prose, or internal metadata.
   Unknown mathematical forms remain actionable gaps. Explicit classifications
   require reasons; a blanket ignore rule does not establish coverage.
3. Require accurate definitions, conditions, spoken names, supported aliases and
   sources for mathematical entries. Confirm local quantities and card links
   against their actual declarations. Mark background entries honestly.
4. Regress exact glyphs, TeX aliases, case, argument order, delimiter roles,
   column-vector/choose ambiguity, scalar/vector projection, distribution
   notation, one-sided forms and exposed helper names. Include negative cases
   for layout commands and misleading word fragments such as “partial move.”
5. Keep canonical schema/reference/AST/numeric checks, source/catalog equality,
   deterministic export, and the normal application build passing. Include the
   notation provider in editable and standalone builds and check lifecycle and
   navigation behavior through the applicable integration tests.
6. Record actual browser checks separately from automated checks: exact searches,
   card usage links, Related definitions, keyboard navigation, narrow layout and
   readable mathematical text. Do not infer browser or accessibility
   qualification from content validation.
7. Attach final inventory counts, unresolved findings, exclusions with reasons,
   regression results and an explicit gate decision to the release record.
   Concept expansion starts only after the notation gate is explicitly released.

## 7. Notation arrives with every future concept

Each later concept proposal includes a notation/vocabulary delta before
implementation: new forms and names, local roles and units, exact aliases,
sources, story/view uses and failure or undefined cases. New or changed renderers
must expose their additional mathematical labels to the same inventory. A new
view or helper name can reopen the notation gate even when no card is added.

The chain-rule/partial-derivative/gradient batch was implemented only after the
29-card baseline gate was released. Its definitions, differential notation,
direction conventions, units and zero-gradient behavior are included in the
expanded 32-card report. Further batches repeat this sequence rather than
inheriting a permanent exemption from notation work.


## Local predictions and discrete iteration delta (0.21.0)

The next batch adds unit-direction scalar products, tangent-plane prediction
and exact discrete descent. The continuing gate includes `DᵤF`, the query
`L(x+Δx,y+Δy)`, signed residual `R`, cost `C(xₖ,yₖ)`, gradient `∇C`, step size
`η` and indexed current/next coordinates. Actual card scope keeps a cost function
separate from a binomial coefficient, an integer iteration index separate from
an unrelated letter and the local residual separate from other R meanings.

A continuous sweep of learning rate does not create fractional iterations. The
manual iteration count remains integer, the graph samples exact fixed-length
runs, and textual connectors or drawn path segments do not introduce additional
mathematical states. Degree-valued heading controls still declare their
conversion before trigonometric evaluation. Field-height and slope units,
predicted/actual height and signed-error units remain explicit in stories.

`python tools/check.py` writes `NOTATION_COVERAGE_0_21_0.json`. Its selected
canonical fields, story math/units, reference forms and public runtime boundary
samples use the same finite audit contract. Earlier passed checkpoints remain
unchanged; later additions cannot inherit a permanent notation exemption.


## Finite membership, descriptive data and scan costs (0.22.0)

The current reference has 409 entries: 389 authored definitions and 20
contextual readers over 38 canonical cards.

The three atlas-gap cards extend the same finite gate. Canonical set objects
`U`, `A`, `B` and `R` stay distinct from cardinalities such as `|R|` and
`|A∩B|`. Set-builder predicates, inclusive boundaries, union, intersection,
ordered difference and the empty result require their own readers and local
meanings; bar syntax cannot simply inherit scalar absolute value everywhere.

The sample card uses the operator ∑ for summation, preserving the earlier
Σ-letter distinction. `x̄` is the arithmetic sample mean in this context,
`μ` the known population mean, and `E` the signed sample-minus-population mean
difference. The value, count, sum, index and summary each retain their declared
roles. Repeated weights belong to different labeled observations, not a set
that silently removes duplicate values.

The scan uses `w(n)` for the selected operation count, `c` for time per item and
`T(n)` for modeled time. `O(n)` and `Θ(n)` denote asymptotic classes. They are not
numeric function outputs. Count units, ms and ms/item have explicit readers;
no name-based unit conversion is inferred. The synthetic zero-time boundary
still performs n inspections and does not establish a positive linear lower
bound for that zero time function.

`python tools/check.py` writes `NOTATION_COVERAGE_0_22_0.json`, with new selected
canonical/story math, unit forms, reference examples and public renderer labels.
Earlier baseline/0.20/0.21 reports remain unchanged. The expanded gate passes with 23,794 selected fields, 39,023 resolved
occurrences and 916 forms; zero unresolved forms and zero callable reviews
remain. Its runtime/reference fields number 21,602 and 929. The 796 formatting
records and 58 reviewed gesture-icon exclusions are accounted for separately.
