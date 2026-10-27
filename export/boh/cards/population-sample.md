---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:population-sample", "id": "math:concept:population-sample", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:population-sample", "exporter_version": "0.2.0", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "d0956879e2bfa40bcdd6f003ec9c533f59a0bb812fae6f636f45e43590739254", "source_revision": "0.3.0-draft", "upstream_content_sha256": "ef5808a5e30de8ddf6eb5c3503b0edd1e21f4db00a1ccb78782f287f50de33c7"}, "purpose": "Compare a selected sample with the whole population and see how one changed value affects each mean.", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "ef5808a5e30de8ddf6eb5c3503b0edd1e21f4db00a1ccb78782f287f50de33c7", "status": "draft", "title": "Population and sample", "topics": ["mathematics", "statistics", "probability", "modeling", "sample mean", "population mean", "sample selection"], "type": "reference", "updated": "2026-10-26T00:00:00Z", "version": "0.3.0-draft"}
---

# Population and sample

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:population-sample; revision 0.3.0-draft. Setting: Descriptive statistics for a known finite population of twelve distinctly labeled crate weights. Selection is a deliberate cyclic window, not a random experiment. Expression: $\overline{x}=\frac{\sum_{i=1}^{n}x_i}{n},\quad \mu=\frac{\sum_{i=1}^{12}X_i}{12},\quad E=\overline{x}-\mu.$. Conditions required for a defined value (a case may test their violation): The finite population is twelve labeled crate masses in kilograms: [8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, x]. Different crates remain distinct even when their masses match. The last crate has mass x, with 0 ≤ x ≤ 30 kg. Only x changes; the other eleven masses stay fixed. Sample size n is an integer from 1 to 12. Skip s crates (an integer from 0 to 11), then select n consecutive crates. Continue from crate 1 after crate 12 (wraparound), without selecting a crate twice. The selected mean is x̄ = (∑xᵢ)/n. The population mean is μ = (∑Xᵢ)/12. Both means are measured in kilograms; totals and counts are different quantities. The mean difference is E = x̄ − μ. A positive E means the selected crates have the higher average mass. This deliberately chosen contiguous window is not a simple random sample. No randomization, unbiased-estimator guarantee, confidence interval or sampling distribution is produced. A census uses all twelve distinct crate labels and makes the sample mean equal to this known finite-population mean. If the highlighted crate is outside the selected sample, changing it leaves the sample mean fixed while changing the population mean. Scope: The broader subject distinguishes descriptive summaries from statistical inference. This specimen has a known finite population and deterministic sample selection. It does not simulate random sampling, infer an unknown population mean, produce a confidence level, or implement sample variance. The ordering of the labeled crates does not imply that observations are independent random draws.

## Schema Version

0.1.0

## Id

math:concept:population-sample

## Slug

population-sample

## Type

concept

## Title

Population and sample

## Revision

0.3.0-draft

## Publication Status

draft

## Updated

2026-10-26T00:00:00Z

## Review

- mathematics: author-derived; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent mathematical review

## Source Policy

Definition-level references support the mathematical vocabulary. Stories and worked quantities are originally authored constructed examples, not measurements or historical events. Historical priority and notation claims require separate evidence before publication.

## Aliases

- sample mean
- population mean
- sample selection

## Branches

- statistics
- probability
- modeling

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

Compare a selected sample with the whole population and see how one changed value affects each mean.

## Meaning

A population is the complete collection under study, while a sample is a selected part of that collection. An arithmetic mean summarizes its own values. The live example keeps the full population visible so that a chosen sample statistic can be compared with the population parameter and its signed difference.

## Prerequisites

- required:
  - math:concept:set
- helpful:
  - math:concept:ratio-scale
- depth:
  - math:concept:random-variable
  - math:concept:variance

## Definition

- setting: Descriptive statistics for a known finite population of twelve distinctly labeled crate weights. Selection is a deliberate cyclic window, not a random experiment.
- formal latex: \overline{x}=\frac{\sum_{i=1}^{n}x_i}{n},\quad \mu=\frac{\sum_{i=1}^{12}X_i}{12},\quad E=\overline{x}-\mu.
- signature:
  - x: Mass of the changing last crate, from 0 to 30 kilograms.
  - n: Integer number of selected crates in [1,12].
  - s: Number of crates skipped before selection, an integer from 0 to 11.
  - N: Fixed population count twelve.
  - ∑xᵢ: Sum of the n selected crate weights.
  - ∑Xᵢ: Sum of all twelve crate weights.
  - x̄: Primary sample mean in kilograms.
  - μ: Known finite-population mean in kilograms.
  - E: Sample mean minus population mean, in kilograms.
- conditions:
  - The finite population is twelve labeled crate masses in kilograms: [8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, x]. Different crates remain distinct even when their masses match.
  - The last crate has mass x, with 0 ≤ x ≤ 30 kg. Only x changes; the other eleven masses stay fixed.
  - Sample size n is an integer from 1 to 12. Skip s crates (an integer from 0 to 11), then select n consecutive crates. Continue from crate 1 after crate 12 (wraparound), without selecting a crate twice.
  - The selected mean is x̄ = (∑xᵢ)/n. The population mean is μ = (∑Xᵢ)/12. Both means are measured in kilograms; totals and counts are different quantities.
  - The mean difference is E = x̄ − μ. A positive E means the selected crates have the higher average mass.
  - This deliberately chosen contiguous window is not a simple random sample. No randomization, unbiased-estimator guarantee, confidence interval or sampling distribution is produced.
  - A census uses all twelve distinct crate labels and makes the sample mean equal to this known finite-population mean.
  - If the highlighted crate is outside the selected sample, changing it leaves the sample mean fixed while changing the population mean.
- domain notes: The broader subject distinguishes descriptive summaries from statistical inference. This specimen has a known finite population and deterministic sample selection. It does not simulate random sampling, infer an unknown population mean, produce a confidence level, or implement sample variance. The ordering of the labeled crates does not imply that observations are independent random draws.
- proof status: Definition-level references; restricted-family properties are author-derived. Independent mathematical review pending.
- source refs:
  - source:openstax:statistics-population-sample
  - source:openstax:statistics-mean

## Grammar

- pronunciation: Population and sample
- expression latex: \overline{x}=\frac{\sum_{i=1}^{n}x_i}{n},\quad \mu=\frac{\sum_{i=1}^{12}X_i}{12},\quad E=\overline{x}-\mu.
- formation rule: N = 12; ∑Xᵢ = 115 + x; μ = (115 + x)/12. Skip s crates and select n consecutive crates, continuing from crate 1 after crate 12. Then x̄ = (∑xᵢ)/n and E = x̄ − μ.
- precedence: Choose the distinct crate labels first, add their weights once each, and divide by their positive count. Compute the full-population sum separately before comparing the two means.
- symbols:
  - Item:
    - token: x
    - role: Mass of the changing last crate
    - type: Nonnegative real data value in kilograms
  - Item:
    - token: n
    - role: Number of selected distinct crates
    - type: Positive integer count
  - Item:
    - token: s
    - role: Number of crates skipped before selecting the sample
    - type: Integer count from 0 to 11
  - Item:
    - token: N
    - role: Number of distinct crates in the finite population
    - type: Fixed integer count twelve
  - Item:
    - token: ∑xᵢ
    - role: Sum of selected sample values
    - type: Real sum in kilograms
  - Item:
    - token: ∑Xᵢ
    - role: Sum of all finite-population values
    - type: Real sum in kilograms
  - Item:
    - token: x̄
    - role: Primary arithmetic mean of the selected sample
    - type: Real mean in kilograms
  - Item:
    - token: μ
    - role: Arithmetic mean of the known finite population
    - type: Real mean in kilograms
  - Item:
    - token: E
    - role: Signed sample-mean minus population-mean difference
    - type: Real difference in kilograms
- ast:
  - id: ast:population-sample:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:lastValue
      - kind: variable
      - type: Finite real control
      - symbol: lastValue
      - scope ref: scope:population-sample:expression
    - Item:
      - id: n:sampleSize
      - kind: variable
      - type: Positive integer sample size
      - symbol: sampleSize
      - scope ref: scope:population-sample:expression
    - Item:
      - id: n:startIndex
      - kind: variable
      - type: Integer count of crates skipped
      - symbol: startIndex
      - scope ref: scope:population-sample:expression
    - Item:
      - id: n:populationRule
      - kind: functionRef
      - type: Real to ordered twelve-value population
      - ref: Append mass x to the eleven fixed masses [8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13].
    - Item:
      - id: n:population
      - kind: apply
      - type: Ordered finite population of twelve kilogram values
      - function: n:populationRule
      - argument: n:lastValue
    - Item:
      - id: n:sampleRule
      - kind: functionRef
      - type: Integer to index to population to selected value list
      - ref: Select n consecutive distinct crates after skipping s crates; continue from crate 1 after the last.
    - Item:
      - id: n:sizeRule
      - kind: apply
      - type: Index to population to selected value list
      - function: n:sampleRule
      - argument: n:sampleSize
    - Item:
      - id: n:startRule
      - kind: apply
      - type: Population to selected value list
      - function: n:sizeRule
      - argument: n:startIndex
    - Item:
      - id: n:sample
      - kind: apply
      - type: Selected finite list of kilogram values
      - function: n:startRule
      - argument: n:population
    - Item:
      - id: n:sum
      - kind: functionRef
      - type: Finite numeric list to scalar sum
      - ref: Add all values of a finite list, retaining one contribution per distinct crate label.
    - Item:
      - id: n:sampleSum
      - kind: apply
      - type: Real sample sum in kilograms
      - function: n:sum
      - argument: n:sample
    - Item:
      - id: n:output
      - kind: divide
      - type: Real sample arithmetic mean in kilograms
      - arguments:
        - n:sampleSum
        - n:sampleSize
  - scopes:
    - Item:
      - id: scope:population-sample:expression
      - kind: modelExpression
      - free variables:
        - lastValue
        - sampleSize
        - startIndex
      - domain condition: The finite population is twelve labeled crate masses in kilograms: [8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, x]. Different crates remain distinct even when their masses match.
- parse errors:
  - Item:
    - input: Divide a sample sum by zero selected observations
    - status: domain error
    - reason: An arithmetic sample mean requires a positive sample size; the live model rejects n=0.
  - Item:
    - input: Call the chosen window a simple random sample
    - status: selection error
    - reason: The selected labels follow a deterministic cyclic rule, without a random draw.
  - Item:
    - input: Assume the sample mean must equal the population mean
    - status: inference error
    - reason: A selected subset can have a different average; equality is guaranteed for the full census here, not for every smaller sample.
- ast coverage: A narrow typed expression outline for the declared executable specimen. Function references name fixed finite selection/counting procedures; no general set parser, statistical inference engine or program analyzer is claimed.
- output symbol bindings:
  - x: lastValue
  - n: sampleSize
  - s: startIndex
  - N: populationSize
  - ∑xᵢ: sampleSum
  - ∑Xᵢ: populationSum
  - x̄: sampleMean
  - μ: populationMean
  - E: meanError

## Properties

- Item:
  - claim: Selecting all twelve labels makes the two means agree.
  - conditions: Use n=N=12 with the stated without-replacement cyclic selection.
  - derivation: The selected values are a permutation of the population, so their sums and denominators agree.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:population-sample:full-census
- Item:
  - claim: Changing a selected observation affects a mean according to its denominator.
  - conditions: Keep both collection sizes and selected labels fixed.
  - derivation: A value increment d changes the selected sum by d and the mean by d/n; the population mean changes by d/12.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:population-sample:change-one-crate
- Item:
  - claim: An observation outside the sample does not change its mean.
  - conditions: Keep the selected labels fixed and alter only the excluded last crate.
  - derivation: The selected sum and n do not contain the changed value; the population sum does.
  - status: author-derived for stated conditions; independent review pending
  - example ref: math:example:population-sample:outside-window

## History

- status: source_gap
- claims:

- research tasks:
  - Research the development of this idea and its notation using specialist historical evidence before adding origin or priority claims.
  - Distinguish historical attribution from a modern teaching formulation.
- reader text: Historical account not yet sourced. These are original constructed scenarios, not historical anecdotes.

## Connections

- Item:
  - target: math:concept:set
  - type: supports
  - conditions: Keep labels distinct even when their measured values coincide.
  - reason: A sample consists of selected population members.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:probability
  - type: supports
  - conditions: No such random mechanism is used in this deterministic window.
  - reason: Random sampling needs a probability mechanism beyond selecting a subset.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:
- Item:
  - target: math:concept:computational-complexity
  - type: supports
  - conditions: Count a declared visit or addition; a whole implementation also includes other operations.
  - reason: A full-population arithmetic mean can be computed using one visit per value.
  - target status: available
  - evidence status: definition-level connection; author explanation
  - source refs:

## Examples

- Item:
  - id: math:example:population-sample:heavy-window
  - title: Inspect a deliberately heavy sample
  - role: applied_model
  - question: What average comes from the last four crate labels, compared with all twelve?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
  - inputs:
    - lastValue: 14
    - sampleSize: 4
    - startIndex: 8
  - steps:
    - Item:
      - index: 1
      - expression: selected masses = (12,12,13,14); ∑xᵢ=51
      - reason: Resolve the selected labels and add the chosen weights.
    - Item:
      - index: 2
      - expression: x̄=51/4=12.75; μ=129/12=10.75
      - reason: Divide each sum by its own collection size.
    - Item:
      - index: 3
      - expression: E=12.75−10.75=2
      - reason: Subtract the known population mean from the sample statistic, retaining the sign.
  - result:
    - exact: x̄=51/4=12.75; μ=129/12=10.75; E=12.75−10.75=2
  - interpretation: The chosen heavy block has a mean 2 kg above the known population mean; this selected window is not evidence of a random-sampling guarantee.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: List the selected crate indices explicitly, check that no label repeats, add their values, and independently add all twelve population values before taking both averages.
  - limits: A selected sample summary is descriptive here. Its proximity to the population mean does not prove random sampling, unbiasedness or a confidence interval.
  - preset:
    - lastValue: 14
    - sampleSize: 4
    - startIndex: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
- Item:
  - id: math:example:population-sample:change-one-crate
  - title: Increase one selected crate weight
  - role: applied_model
  - question: What changes when the highlighted last crate rises from 14 to 26 kg?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
  - inputs:
    - lastValue: 26
    - sampleSize: 4
    - startIndex: 8
  - steps:
    - Item:
      - index: 1
      - expression: selected masses = (12,12,13,26); ∑xᵢ=63
      - reason: Resolve the selected labels and add the chosen weights.
    - Item:
      - index: 2
      - expression: x̄=63/4=15.75; μ=141/12=11.75
      - reason: Divide each sum by its own collection size.
    - Item:
      - index: 3
      - expression: E=15.75−11.75=4
      - reason: Subtract the known population mean from the sample statistic, retaining the sign.
  - result:
    - exact: x̄=63/4=15.75; μ=141/12=11.75; E=15.75−11.75=4
  - interpretation: A 12 kg change contributes 3 kg to the mean of four selected crates but only 1 kg to the mean of twelve crates.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: List the selected crate indices explicitly, check that no label repeats, add their values, and independently add all twelve population values before taking both averages.
  - limits: A selected sample summary is descriptive here. Its proximity to the population mean does not prove random sampling, unbiasedness or a confidence interval.
  - preset:
    - lastValue: 26
    - sampleSize: 4
    - startIndex: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
- Item:
  - id: math:example:population-sample:full-census
  - title: Use the entire known population
  - role: applied_model
  - question: If all twelve crates are included with highlighted weight 26 kg, do the means agree?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
  - inputs:
    - lastValue: 26
    - sampleSize: 12
    - startIndex: 8
  - steps:
    - Item:
      - index: 1
      - expression: ∑xᵢ=∑Xᵢ=141; n=N=12
      - reason: Resolve the selected labels and add the chosen weights.
    - Item:
      - index: 2
      - expression: x̄=141/12=11.75; μ=141/12=11.75
      - reason: Divide each sum by its own collection size.
    - Item:
      - index: 3
      - expression: E=11.75−11.75=0
      - reason: Subtract the known population mean from the sample statistic, retaining the sign.
  - result:
    - exact: x̄=141/12=11.75; μ=141/12=11.75; E=11.75−11.75=0
  - interpretation: A census includes every label exactly once; the two descriptive means then agree regardless of the cyclic starting index.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: List the selected crate indices explicitly, check that no label repeats, add their values, and independently add all twelve population values before taking both averages.
  - limits: A selected sample summary is descriptive here. Its proximity to the population mean does not prove random sampling, unbiasedness or a confidence interval.
  - preset:
    - lastValue: 26
    - sampleSize: 12
    - startIndex: 8
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
- Item:
  - id: math:example:population-sample:outside-window
  - title: Change a crate outside the selected sample
  - role: applied_model
  - question: What does changing the last crate to 26 kg do to a sample of the first four labels?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
  - inputs:
    - lastValue: 26
    - sampleSize: 4
    - startIndex: 0
  - steps:
    - Item:
      - index: 1
      - expression: selected masses = (8,9,9,10); ∑xᵢ=36
      - reason: Resolve the selected labels and add the chosen weights.
    - Item:
      - index: 2
      - expression: x̄=36/4=9; μ=141/12=11.75
      - reason: Divide each sum by its own collection size.
    - Item:
      - index: 3
      - expression: E=9−11.75=−2.75
      - reason: Subtract the known population mean from the sample statistic, retaining the sign.
  - result:
    - exact: x̄=36/4=9; μ=141/12=11.75; E=9−11.75=−2.75
  - interpretation: The selected mean stays at 9 kg because the altered crate is outside the sample. The known population mean still changes.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: List the selected crate indices explicitly, check that no label repeats, add their values, and independently add all twelve population values before taking both averages.
  - limits: A selected sample summary is descriptive here. Its proximity to the population mean does not prove random sampling, unbiasedness or a confidence interval.
  - preset:
    - lastValue: 26
    - sampleSize: 4
    - startIndex: 0
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
- Item:
  - id: math:example:population-sample:wraparound
  - title: Follow a sample window across the last label
  - role: applied_model
  - question: Which average results from four consecutive crates starting at crate 11, returning to crate 1 after crate 12?
  - setting: Original constructed teaching scenario; quantities and rules are stipulated, not measured.
  - assumptions:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.
  - inputs:
    - lastValue: 14
    - sampleSize: 4
    - startIndex: 10
  - steps:
    - Item:
      - index: 1
      - expression: selected masses = (13,14,8,9); ∑xᵢ=44
      - reason: Resolve the selected labels and add the chosen weights.
    - Item:
      - index: 2
      - expression: x̄=44/4=11; μ=129/12=10.75
      - reason: Divide each sum by its own collection size.
    - Item:
      - index: 3
      - expression: E=11−10.75=0.25
      - reason: Subtract the known population mean from the sample statistic, retaining the sign.
  - result:
    - exact: x̄=44/4=11; μ=129/12=10.75; E=11−10.75=0.25
  - interpretation: The window wraps to the first labels without reusing any crate. Cyclic selection is a stated indexing rule, not a physical rearrangement or randomization.
  - independent check:
    - method: Independent enumeration or arithmetic check
    - expected: List the selected crate indices explicitly, check that no label repeats, add their values, and independently add all twelve population values before taking both averages.
  - limits: A selected sample summary is descriptive here. Its proximity to the population mean does not prove random sampling, unbiasedness or a confidence interval.
  - preset:
    - lastValue: 14
    - sampleSize: 4
    - startIndex: 10
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
  - conditions to check:
    - The twelve crate weights are original stipulated teaching values, not a measured warehouse dataset.
    - Each crate has its own label, even when several weights are equal.
    - Skip s crates, then select n consecutive distinct crates, returning to crate 1 after crate 12.
    - Means use kilograms and are computed from separate sums and positive counts; the signed difference is sample minus population.

## Interactive

- component id: component:population-sample
- renderer id: population-sample-visual-model
- renderer version: 1
- model id: population-sample-visual-model
- model revision: 1
- expression id: ast:population-sample:expression
- interaction status: implemented
- description: Population bars retain all twelve distinct crate labels. Selected sample bars, separate sums and mean reference lines show how one highlighted weight affects the selected summary and full-population summary.
- controls:
  - Item:
    - id: lastValue
    - type: number
    - default: 14
    - min: 0
    - max: 30
    - step: 0.01
  - Item:
    - id: sampleSize
    - type: number
    - default: 4
    - min: 1
    - max: 12
    - step: 1
  - Item:
    - id: startIndex
    - type: number
    - default: 8
    - min: 0
    - max: 11
    - step: 1
- expected cases:
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 4
      - startIndex: 8
    - output: 12.75
  - Item:
    - input:
      - lastValue: 26
      - sampleSize: 4
      - startIndex: 8
    - output: 15.75
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 12
      - startIndex: 8
    - output: 10.75
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 1
      - startIndex: 11
    - output: 14.0
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 1
      - startIndex: 0
    - output: 8.0
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 4
      - startIndex: 10
    - output: 11.0
  - Item:
    - input:
      - lastValue: 0
      - sampleSize: 4
      - startIndex: 8
    - output: 9.25
  - Item:
    - input:
      - lastValue: 30
      - sampleSize: 4
      - startIndex: 8
    - output: 16.75
  - Item:
    - input:
      - lastValue: 26
      - sampleSize: 4
      - startIndex: 0
    - output: 9.0
  - Item:
    - input:
      - lastValue: 0
      - sampleSize: 12
      - startIndex: 8
    - output: 9.583333333333334
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 2.5
      - startIndex: 8
    - status: invalid_parameters
  - Item:
    - input:
      - lastValue: 14
      - sampleSize: 4
      - startIndex: 12
    - status: invalid_parameters
- compute: N = 12; ∑Xᵢ = 115 + x; μ = (115 + x)/12. Skip s crates and select n consecutive crates, continuing from crate 1 after crate 12. Then x̄ = (∑xᵢ)/n and E = x̄ − μ.
- numeric tolerance: 1e-10
- invariants:
  - The finite population is twelve labeled crate masses in kilograms: [8, 9, 9, 10, 10, 10, 11, 11, 12, 12, 13, x]. Different crates remain distinct even when their masses match.
  - The last crate has mass x, with 0 ≤ x ≤ 30 kg. Only x changes; the other eleven masses stay fixed.
  - Sample size n is an integer from 1 to 12. Skip s crates (an integer from 0 to 11), then select n consecutive crates. Continue from crate 1 after crate 12 (wraparound), without selecting a crate twice.
  - The selected mean is x̄ = (∑xᵢ)/n. The population mean is μ = (∑Xᵢ)/12. Both means are measured in kilograms; totals and counts are different quantities.
  - The mean difference is E = x̄ − μ. A positive E means the selected crates have the higher average mass.
- limits:
  - Twelve stipulated observations, not a measured dataset or probability distribution.
  - Sample selection is deterministic and cyclic; it does not establish representativeness or unbiasedness.
  - Sample size and starting index are discrete controls. Smooth motion varies only the highlighted value.
- fallback: Pause to read the labeled quantities. The model-data table, exact worked steps and searchable definitions provide numeric and textual alternatives to the scene.
- snapshot fields:
  - card_id
  - card_revision
  - component_id
  - model_revision
  - renderer_version
  - parameters
  - result_status
  - result
  - note

## Prompts

- Item:
  - prompt: Does a larger chosen sample automatically become random?
  - answer: No. Sample size and selection method are separate. This cyclic rule is deterministic at every size.
- Item:
  - prompt: Why keep repeated weights as separate bars?
  - answer: The population contains labeled crates. Two crates with the same weight are still two observations and both contribute to the mean.

## Representations

- Item:
  - kind: geometry
  - description: A bar for every population observation, selected sample labels and two separate arithmetic-mean reference lines connect membership to sample and population sums.
- Item:
  - kind: graph
  - description: Sample mean and population mean are plotted against the highlighted last value while sample size and starting index stay fixed. An excluded highlighted value gives a flat sample-mean curve.
- Item:
  - kind: substitution
  - description: Selected sample sum divided by sample size and full population sum divided by N remain separate, followed by the signed mean difference.

## Applications

- Item:
  - context: Workshop crate weights
  - mapping: A deliberate selected block is compared with the full known crate population.
  - limitations: Original observations and a deterministic selection rule; no random inference or warehouse recommendation.
  - evidence kind: constructed_example
  - example ref: math:example:population-sample:heavy-window
- Item:
  - context: Census comparison
  - mapping: Including all distinct crate labels checks when the sample statistic equals the population parameter.
  - limitations: A descriptive identity for this known finite population, not a confidence calculation.
  - evidence kind: constructed_example
  - example ref: math:example:population-sample:full-census

## Source Refs

- source:openstax:statistics-population-sample
- source:openstax:statistics-mean

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and notation have not yet been researched.
- This bounded teaching model does not replace the broader mathematical definition or independent proof.

## Change Log

- 0.1.0-draft: five original worked cases, twelve numeric fixtures, a connected modular story and distinct Geometry/Graph views.

## Referenced source registry

- Source ID: source:openstax:statistics-population-sample. [Introductory Statistics 2e, 1.1 Definitions of Statistics, Probability, and Key Terms](https://openstax.org/books/introductory-statistics-2e/pages/1-1-definitions-of-statistics-probability-and-key-terms). Locator: Population, sample, statistic, parameter, descriptive statistics versus inference. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.

- Source ID: source:openstax:statistics-mean. [Introductory Statistics 2e, 2.5 Measures of the Center of the Data](https://openstax.org/books/introductory-statistics-2e/pages/2-5-measures-of-the-center-of-the-data). Locator: Arithmetic mean, sample-mean bar notation, population mean mu, sum divided by collection size. Verification: Definition-level material inspected 2026-10-26 on the official publisher or university page. Supports definitions and stated conditions, not independent review, historical priority or the original constructed scenarios.. Rights: Reference only. Explanations, scenarios and worked derivations are originally authored; no source prose or exercise bank copied.
