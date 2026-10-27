# 0.30.0 validation record

## Automated checks

- All 869 JavaScript tests passed, including 15 new pure-model tests and five
  integration tests for stories, previews, ports, meanings and atlas placement.
- All 12 Python tests passed. The new probability reference check uses the
  tail-sum identity for expectation and a binary partition identity for entropy,
  independently of the runtime's direct weighted sums.
- All 562 canonical fixtures agree with independent Python calculations. The
  three additions supply 36 fixtures and 15 original worked examples.
- Nine negative schema/reference/contract mutations are rejected.
- The [notation audit](NOTATION_COVERAGE_0_30_0.json) resolves all 51,835
  occurrences across 1,117 forms with zero unresolved forms and zero review
  items. The reference has 554 entries: 529 authored and 25 contextual. The
  visual catalog offers 644 selectable forms across 399 meanings.
- The prepared-index startup check recorded 416.6 ms of bootstrap JavaScript
  against its unchanged 1500 ms budget. This CPU check does not measure phone
  layout, paint or network delivery.
- Builds, the 340-document export and the source/offline projections are
  deterministic. The runtime gains no network service, account, API key,
  dependency or animation clock.

## Mathematical review within the build

The common model gives nonnegative probabilities for the listed book counts
0, 1 and 2 and preserves total mass one. Tests check the whole parameter square,
endpoint certainty, the unused remainder share at q=1, a uniform distribution,
the expected-value bounds and the log₂3 entropy bound. Positive representable
masses remain positive; an underflowing positive product produces an explicit
precision diagnostic. An impossible outcome has no finite surprisal and has
zero contribution to entropy by the continuous convention.

A separate implementation pass audited all 15 worked derivations and 303
story frames in both views. This is an additional internal audit, not a claim
of independent mathematical or pedagogical qualification.

## Browser walkthrough

The built standalone artifact was served locally and reviewed in Chrome using
visible native controls.

| Lesson | Observed result |
|---|---|
| Distributions | Moving q from 1/4 to 1/2 gives masses (1/4,1/2,1/4), with P(X=2)=25%; the fixed whole-probability strip agrees with the three bars. The advanced Graph shows three separate probability stems |
| Expected value | Moving r from 1/4 to 3/4 at q=1/2 gives masses (1/8,1/2,3/8) and E[X]=0+1/2+3/4=1.25 books. The balance marker and contribution strip agree with the open calculation |
| Entropy | The initial certain outcome gives zero entropy with impossible outcomes safely labelled. Whole-story playback reaches q=1/3, equal masses, H(X)=log₂3≈1.585 bits and Replay change |
| Searchable reference | The entropy definition is reachable directly. Searching 0 log 0 opens the zero-probability convention and its entropy card link. The catalog lists all 644 forms |

Three 405-pixel iframe previews include browser scrollbars and approximate
390 content pixels. Native range changes reach the probability and expectation
answers and the entropy maximum to display precision. Each guided scene has
one HTML slider and no duplicate scene slider. The complete charts, primary
values, contribution labels and controls remain readable without horizontal
overflow in the [phone layout evidence](presentation-0-30/three-lessons-phone.png).

The first desktop walkthrough exposed overly dim inactive quantities from the
shared cue treatment. The new family keeps inactive groups at 84% opacity and
the focused group at full opacity, preserving the complete distribution while
highlighting the current step. Captions now describe actual shapes concisely.
Physical touch, screen-reader qualification and learning outcomes remain open.

## Sources and scope

Four inspected primary references support the additions: OpenStax's finite
distribution and expected-value sections, John Duchi's Stanford notes on
discrete entropy and its uniform maximum, and MIT 6.441 section 1.1 on the
zero-term convention and logarithm units. Duchi uses natural logarithms; the
base-two model follows by change of base, with units supported directly by MIT.
The stories and worked scenarios are originally authored.

The book roadmap retains all 214 topic IDs and 217 attributed book records.
There are 46 introduction links, 41 precursor links and 127 planned rows.
Microcanonical entropy and entropy of a form remain broader planned subjects;
the new Shannon lesson supplies a prerequisite. Historical priority, book
edition claims and external review are not inferred from these checks.
