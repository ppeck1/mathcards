---
boh: {"authority_state": "non_authoritative", "canonical_layer": "supporting", "document_class": "reference", "document_id": "math:concept:sign-test", "id": "math:concept:sign-test", "project": "Mathematical Expression Atlas", "provenance": {"card_id": "math:concept:sign-test", "exporter_version": "0.2.1", "hash_scope": "sorted compact Unicode card JSON; not generated Markdown bytes", "mode": "math_atlas_projection_v0_1", "source_registry_sha256": "723fc3bab1108b9a30421bf0d412d696955757c260d61ea7081618a018508c9b", "source_revision": "0.1.0-draft", "upstream_content_sha256": "92404f322a939f659942cb5abae3f08b5e1d4f8ecb62f5268c0a18a4df920f8c"}, "purpose": "How unusual are this many positive paired changes under a fair-sign model?", "review_state": "none", "rubrix": {"operator_intent": "capture", "operator_state": "observe"}, "source_hash": "92404f322a939f659942cb5abae3f08b5e1d4f8ecb62f5268c0a18a4df920f8c", "status": "draft", "title": "A paired sign test", "topics": ["mathematics", "statistics", "probability", "a paired sign test"], "type": "reference", "updated": "2026-11-02T00:00:00Z", "version": "0.1.0-draft"}
---

# A paired sign test

Draft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.

Definition unit math:concept:sign-test; revision 0.1.0-draft. Setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives. Expression: $d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.$. Conditions required for a defined value (a case may test their violation): Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study. Scope: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.

## Schema Version

0.1.0

## Id

math:concept:sign-test

## Slug

sign-test

## Type

concept

## Title

A paired sign test

## Revision

0.1.0-draft

## Publication Status

draft

## Updated

2026-11-02T00:00:00Z

## Review

- mathematics: author-derived for stated conditions; independent mathematical review pending
- history: source gap; no origin or priority assertions
- interaction: implemented; numeric fixtures are not independent review

## Source Policy

Primary references support definitions and stated conditions. Scenarios and worked derivations are originally authored constructions. The supplied book matrix guides sequencing; it is not independent verification of exact-edition book coverage.

## Aliases

- a paired sign test

## Branches

- statistics
- probability

## Expressive Job

- evaluate
- visualize
- compare

## Purpose

How unusual are this many positive paired changes under a fair-sign model?

## Meaning

Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.

## Prerequisites

- required:
  - math:concept:binomial-distribution
- helpful:
  - math:concept:binomial-distribution
  - math:concept:hypothesis-test
  - math:concept:population-sample
- depth:
  []

## Definition

- setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
- formal latex: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
- signature:
  - h: Common added after-reading shift in mm
  - a i: Unshifted after-reading for pair i in mm
  - b i: Before-reading for the same pair in mm
  - d i: Shifted after minus before for one pair in mm
  - i: Pair index from 1 through 6
  - k: Number of positive differences
  - n: Number of nonzero differences after exact ties are omitted
  - K: Positive-sign count under the conditional fair-sign null
  - j: Bound summation index over possible positive-sign counts
  - p +: One-sided null tail probability for at least k positive signs
- conditions:
  - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- domain notes: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- proof status: Definition-level sources and original bounded calculations; independent mathematical review pending.
- source refs:
  - source:distribution-extensions:sign
  - source:distribution-extensions:median

## Grammar

- pronunciation: A paired sign test
- expression latex: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
- formation rule: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
- precedence: Evaluate paired differences or standardized products before cumulative probability; retain units and the stated probability model.
- symbols:
  - Item:
    - token: h
    - role: Common added after-reading shift in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: a_i
    - role: Unshifted after-reading for pair i in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: b_i
    - role: Before-reading for the same pair in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: d_i
    - role: Shifted after minus before for one pair in mm
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: i
    - role: Pair index from 1 through 6
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: k
    - role: Number of positive differences
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: n
    - role: Number of nonzero differences after exact ties are omitted
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: K
    - role: Positive-sign count under the conditional fair-sign null
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: j
    - role: Bound summation index over possible positive-sign counts
    - type: Declared mathematical quantity or bound index
  - Item:
    - token: p_+
    - role: One-sided null tail probability for at least k positive signs
    - type: Declared mathematical quantity or bound index
- ast:
  - id: ast:sign-test:expression
  - root: n:output
  - nodes:
    - Item:
      - id: n:shift
      - kind: variable
      - type: Declared physical input
      - symbol: h
      - scope ref: scope:sign-test
    - Item:
      - id: n:rule
      - kind: functionRef
      - type: Curried evaluation of the declared probability law
      - ref: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - id: n:output
      - kind: apply
      - type: Declared probability result or partial application
      - function: n:rule
      - argument: n:shift
  - scopes:
    - Item:
      - id: scope:sign-test
      - kind: modelExpression
      - free variables:
        - h
      - external parameters:
        - Selected original paired-reading pattern
      - domain condition: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- parse errors:
  - Item:
    - input: Count an exact tie as a positive or negative sign
    - status: model or role mismatch
    - reason: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- ast coverage: Typed application outline of the declared probability family, with the paired-data selector held external where applicable. This is not an arbitrary expression parser or a theorem checker.
- output symbol bindings:
  - h: shift
  - a i: pairs
  - b i: pairs
  - d i: pairs
  - i: pairs
  - k: positive
  - n: n
  - K: masses
  - j: masses
  - p +: output

## Properties

- Item:
  - claim: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - conditions: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - derivation: Use the declared probability law and the independent reference on the bounded parameters.
  - status: author-derived for stated conditions; independent mathematical review pending
  - example ref: math:example:sign-test:case-1

## History

- status: source_gap
- claims:
  []
- research tasks:
  - Research concept and notation development before adding historical priority claims.
  - Check exact-edition book coverage independently before treating the supplied planning matrix as verified.
- reader text: Historical development has not been researched for this draft. The scenarios and worked examples are original constructions.

## Connections

- Item:
  - target: math:concept:binomial-distribution
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: A paired sign test connects continuous probability, paired signs or accumulated quantities to binomial distribution.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:hypothesis-test
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: A paired sign test connects continuous probability, paired signs or accumulated quantities to hypothesis test.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []
- Item:
  - target: math:concept:population-sample
  - type: supports
  - conditions: Use each connected model under its own explicit assumptions.
  - reason: A paired sign test connects continuous probability, paired signs or accumulated quantities to population sample.
  - target status: available
  - evidence status: editorial mathematical connection; author explanation
  - source refs:
    []

## Examples

- Item:
  - id: math:example:sign-test:case-1
  - title: Five positives out of six nonzero changes
  - role: applied_model
  - question: How unusual are this many positive paired changes under a fair-sign model?
  - setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - assumptions:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - inputs:
    - shift: 1.5
    - pattern: varied
  - steps:
    - Item:
      - index: 1
      - expression: h = 1.5; different original changes
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
      - reason: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - index: 3
      - expression: 0.109375
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.109375
  - interpretation: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - independent check:
    - method: Enumerate independent fair signs by exact binomial coefficients after excluding exact zero differences.
    - expected: 0.109375
  - limits: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - preset:
    - shift: 1.5
    - pattern: varied
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- Item:
  - id: math:example:sign-test:case-2
  - title: An exact tied pair is omitted
  - role: applied_model
  - question: How unusual are this many positive paired changes under a fair-sign model?
  - setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - assumptions:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - inputs:
    - shift: 0
    - pattern: varied
  - steps:
    - Item:
      - index: 1
      - expression: h = 0; different original changes
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
      - reason: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - index: 3
      - expression: 0.5
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.5
  - interpretation: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - independent check:
    - method: Enumerate independent fair signs by exact binomial coefficients after excluding exact zero differences.
    - expected: 0.5
  - limits: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - preset:
    - shift: 0
    - pattern: varied
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- Item:
  - id: math:example:sign-test:case-3
  - title: All six changes are positive
  - role: applied_model
  - question: How unusual are this many positive paired changes under a fair-sign model?
  - setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - assumptions:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - inputs:
    - shift: 2.5
    - pattern: varied
  - steps:
    - Item:
      - index: 1
      - expression: h = 2.5; different original changes
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
      - reason: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - index: 3
      - expression: 0.015625
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.015625
  - interpretation: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - independent check:
    - method: Enumerate independent fair signs by exact binomial coefficients after excluding exact zero differences.
    - expected: 0.015625
  - limits: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - preset:
    - shift: 2.5
    - pattern: varied
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- Item:
  - id: math:example:sign-test:case-4
  - title: No positive changes
  - role: applied_model
  - question: How unusual are this many positive paired changes under a fair-sign model?
  - setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - assumptions:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - inputs:
    - shift: -4
    - pattern: varied
  - steps:
    - Item:
      - index: 1
      - expression: h = -4; different original changes
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
      - reason: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - index: 3
      - expression: 1
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 1
  - interpretation: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - independent check:
    - method: Enumerate independent fair signs by exact binomial coefficients after excluding exact zero differences.
    - expected: 1
  - limits: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - preset:
    - shift: -4
    - pattern: varied
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- Item:
  - id: math:example:sign-test:case-5
  - title: Matching originals shifted together
  - role: applied_model
  - question: How unusual are this many positive paired changes under a fair-sign model?
  - setting: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - assumptions:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - inputs:
    - shift: 1
    - pattern: matched
  - steps:
    - Item:
      - index: 1
      - expression: h = 1; originally matching pairs
      - reason: Declare the physical quantities and the selected probability model.
    - Item:
      - index: 2
      - expression: d_i=(a_i-b_i)+h,\quad k=\#\{i:d_i>0\},\quad n=\#\{i:d_i\ne0\},\quad K\sim\operatorname{Binomial}(n,\tfrac12),\quad p_+=\sum_{j=k}^{n}\binom{n}{j}2^{-n}.
      - reason: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
    - Item:
      - index: 3
      - expression: 0.015625
      - reason: Read cumulative probability or the predeclared one-sided null tail.
  - result:
    - approximate: 0.015625
  - interpretation: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - independent check:
    - method: Enumerate independent fair signs by exact binomial coefficients after excluding exact zero differences.
    - expected: 0.015625
  - limits: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - preset:
    - shift: 1
    - pattern: matched
  - provenance:
    - kind: original worked derivation
    - mathematical review: author-derived; independent review pending
    - external source refs:
      []
  - conditions to check:
    - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.

## Interactive

- component id: component:sign-test
- renderer id: sign-test-visual-model
- renderer version: 1
- model id: sign-test-visual-model
- model revision: 1
- expression id: ast:sign-test:expression
- interaction status: implemented
- description: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
- controls:
  - Item:
    - id: shift
    - type: number
    - default: 1.5
    - min: -4
    - max: 4
    - step: 0.05
  - Item:
    - id: pattern
    - type: enum
    - default: varied
    - values:
      - varied
      - matched
    - value labels:
      - varied: Different original changes
      - matched: Originally matching pairs
- expected cases:
  - Item:
    - input:
      - shift: 1.5
      - pattern: varied
    - status: valid
    - output: 0.109375
  - Item:
    - input:
      - shift: 0
      - pattern: varied
    - status: valid
    - output: 0.5
  - Item:
    - input:
      - shift: 2.5
      - pattern: varied
    - status: valid
    - output: 0.015625
  - Item:
    - input:
      - shift: -4
      - pattern: varied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - shift: 1
      - pattern: matched
    - status: valid
    - output: 0.015625
  - Item:
    - input:
      - shift: 0
      - pattern: matched
    - status: no_nonzero_pairs
  - Item:
    - input:
      - shift: -1
      - pattern: matched
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - shift: -3
      - pattern: varied
    - status: valid
    - output: 1.0
  - Item:
    - input:
      - shift: -2
      - pattern: varied
    - status: valid
    - output: 0.96875
  - Item:
    - input:
      - shift: -1
      - pattern: varied
    - status: valid
    - output: 0.8125
  - Item:
    - input:
      - shift: 1
      - pattern: varied
    - status: valid
    - output: 0.1875
  - Item:
    - input:
      - shift: 2
      - pattern: varied
    - status: valid
    - output: 0.03125
  - Item:
    - input:
      - shift: 3
      - pattern: varied
    - status: valid
    - output: 0.015625
  - Item:
    - input:
      - shift: 1e-06
      - pattern: matched
    - status: valid
    - output: 0.015625
  - Item:
    - input:
      - shift: 1.9999999999999996
      - pattern: varied
    - status: numeric_precision
  - Item:
    - input:
      - shift: 8.881784197001252e-16
      - pattern: matched
    - status: numeric_precision
  - Item:
    - input:
      - shift: 3.552713678800501e-15
      - pattern: matched
    - status: valid
    - output: 0.015625
  - Item:
    - input:
      - shift: true
      - pattern: varied
    - status: invalid_parameters
  - Item:
    - input:
      - shift: 100
      - pattern: varied
    - status: invalid_parameters
  - Item:
    - input:
      - shift: 1.5
      - pattern: other
    - status: invalid_parameters
  - Item:
    - input:
      - shift: 1
      - pattern: varied
    - status: invalid_parameters
- compute: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
- numeric tolerance: 1e-12
- invariants:
  - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - The story, calculation and visual use the same current parameters.
  - Geometry density scales and Graph probability scales have distinct meanings.
- limits:
  - Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
- fallback: Pause to read the quantities. Worked steps, the graph, model-data table and searchable definitions provide text and numeric alternatives.
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
  - prompt: How unusual are this many positive paired changes under a fair-sign model?
  - answer: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
- Item:
  - prompt: What changes when the threshold or shift moves?
  - answer: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.

## Representations

- Item:
  - kind: geometry
  - description: Model-derived density area or paired physical readings, with explicit quantity marks.
- Item:
  - kind: graph
  - description: A fixed probability scale; discrete sign boundaries are not joined.
- Item:
  - kind: substitution
  - description: Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.

## Applications

- Item:
  - context: Originally authored workshop scenario
  - mapping: A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.
  - limitations: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - evidence kind: constructed_example
  - example ref: math:example:sign-test:case-1
- Item:
  - context: A changed model setting
  - mapping: An exact tied pair is omitted. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.
  - limitations: Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.
  - evidence kind: constructed_example
  - example ref: math:example:sign-test:case-2

## Source Refs

- source:distribution-extensions:sign
- source:distribution-extensions:median

## Review Gaps

- Independent mathematical, unit and pedagogical review is pending.
- Historical development and exact-edition book coverage have not been independently researched.
- The bounded executable family does not replace the broader concept.

## Change Log

- 0.34.0 second continuation: added continuous-distribution and exact paired-sign modules.

## Referenced source registry

- Source ID: source:distribution-extensions:sign. [NIST Dataplot · Sign Test](https://www.itl.nist.gov/div898/software/dataplot/refman1/auxillar/signtest.htm). Locator: Paired differences, omission of ties and binomial sign probabilities. The lesson states a conditional fair-sign null explicitly.. Verification: Definition-level primary source inspected 2026-11-02. Independent mathematical review and exact-edition book checks remain open.. Rights: Original scenarios, prose, calculations and SVG; no source exercise, data or illustration reproduced.

- Source ID: source:distribution-extensions:median. [Penn State STAT 415 · The Sign Test for a Median](https://online.stat.psu.edu/stat415/book/export/html/836). Locator: §20.1: continuous difference/median interpretation and paired observations; no source exercise is reproduced.. Verification: Definition-level primary source inspected 2026-11-02. Independent mathematical review and exact-edition book checks remain open.. Rights: Original scenarios, prose, calculations and SVG; no source exercise, data or illustration reproduced.
