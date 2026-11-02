# Startup optimization — 0.34.0 review candidate

Measured on 2026-11-02 using sequential background Node processes on the user's
PC. No browser, desktop app, tab, panel or network measurement ran. The live
0.33.0 site remains unchanged; this work stays in draft PR #13.

This record supersedes the performance conclusion in the
[atlas-gap checkpoint](STARTUP_MEASUREMENT_0_34_0_GAPS.md). Its passing timings
and 1577.7 ms miss remain historical evidence, not measurements of this artifact.

## Changes and preserved contracts

- Keep the ten authored reference-definition files in the build/compiler, and
  remove their duplicate data and merge/freeze work from runtime entries. The
  complete prepared reference remains immediately available offline.
- Normalize each distinct context meaning once per entry for private search
  rows. Preserve every definition, alias, form, context and actual card link.
- Stop story-provider lookup at the first match.
- Build ordinary metadata records with native own-property creation. During
  registration only, reuse immutable branches after recursively checking every
  descriptor and child. Accessors, cycles and unsafe keys still fail. Custom,
  null and foreign prototypes normalize through copying; sparse trailing holes
  and hidden-child copying retain their previous behavior. Parameter copies,
  default validation and output-port evaluation stay independent and eager.

No generic loader, extra runtime dependency or deferred first-open compilation
was added. Providers, stories, views, reference authorship and the shared host
remain separate. All 111 lessons and model revisions are unchanged.

## Measurement method

The acceptance test and `src/app.js` are byte-identical to baseline commit
`518b76d893fe0f6ebe97bc8938f42f89f4e4dbe6`. The budget remains **1500 ms**.

The existing gate reads source strings before timing, then evaluates the source
scripts individually and the application prefix through header search. Its
timer ends before storage restoration and main-view rendering. Its top-level
CommonJS imports and prepared-data setup occur before the timer. Fresh Node
processes therefore do not imply fully cold source compilation or OS caches.

Windows x64, Node v24.11.1, Ryzen 5 4600G, 12 logical CPUs; CI uses Node 22.
Other repository checks stopped during measurements. The PC remained in
ordinary use. Timings are elapsed wall time; CPU diagnostics use process-wide
user plus system time, with coarse platform accounting and possible multiple
process threads.

The frozen baseline copies its original source, package, unchanged gate and
built artifact. Five predeclared pairs alternate baseline/candidate order;
every process runs serially. The final rebuilt artifact also receives five
predeclared profiled attempts. There is no retry-until-pass policy: the harness
retains every failed attempt and exits nonzero if any attempt fails.

`node tools/measure_startup.cjs --profile --runs=5` adds component timings and a
separate one-call diagnostic of the built inline-script prefix at the same
pre-storage boundary. It never substitutes for the acceptance test. Node
documents that VM timeout watchdogs add overhead; individual timed VM calls
also differ from the single inline script delivered by production. See
[Node VM timeouts](https://nodejs.org/download/release/v24.11.1/docs/api/vm.html#scriptrunincontextcontextifiedobject-options)
and [CPU accounting](https://nodejs.org/docs/latest-v24.x/api/process.html#processcpuusagepreviousvalue).

## Results

All ten final candidate gate attempts passed. The five paired attempts span
517.4–697 ms; the rebuilt-artifact attempts span 500.5–552.3 ms. The slowest
final candidate leaves **803 ms of headroom** against the unchanged limit.

| Final paired attempt | First process | Baseline | Candidate |
|---|---|---:|---:|
| 1 | Baseline | 1170 ms | 697 ms |
| 2 | Candidate | 650.2 ms | 663.9 ms |
| 3 | Baseline | 805.3 ms | 517.4 ms |
| 4 | Candidate | 677.4 ms | 575.7 ms |
| 5 | Baseline | 632.7 ms | 641.1 ms |
| Median | | 677.4 ms | 641.1 ms |
| Maximum | | 1170 ms | 697 ms |

The paired median improves about 5.4%; the maximum improves about 40.4%.
Two individual candidate attempts are slightly slower than their paired
baseline. This variation is why the historical 1422 ms median is not used as
the denominator for a claimed causal speedup.

| Rebuilt-artifact attempt | Unchanged gate | Separate built-prefix diagnostic | Prefix CPU |
|---|---:|---:|---:|
| 1 | 552.3 ms | 430.494 ms | 532 ms |
| 2 | 500.5 ms | 431.121 ms | 501 ms |
| 3 | 513.1 ms | 434.797 ms | 563 ms |
| 4 | 526.8 ms | 468.126 ms | 532 ms |
| 5 | 510.7 ms | 460.929 ms | 562 ms |
| Median | 513.1 ms | 434.797 ms | 532 ms |

No final attempt or worker failed; source/build/measurement identities stayed
stable. The fixed registry diagnostic uses identical actual definitions, one
declared warmup pair and six alternating measured pairs, 333 registrations per
attempt. Baseline/candidate medians are 102.467/55.737 ms wall and 109/63 ms CPU.
It supports reduced registration work; it is not another startup gate.

Diagnostic component medians are hydration 50.274 ms, atlas 11.224 ms, subjects
9.607 ms, search setup 12.454 ms, first symbol catalog 11.078 ms and repeated
unified query 6.341 ms. They come from separate workers and must not be added
to the acceptance timing.

| Payload | Baseline | Final |
|---|---:|---:|
| Embedded scripts | 118 | 108 |
| Standalone HTML bytes | 8,691,337 | 8,159,018 |
| Local gzip level-6 estimate | 1,416,526 | 1,293,082 |
| Runtime source-script bytes | 8,544,421 | 8,012,112 |

The HTML is 532,319 bytes smaller; its gzip estimate is 123,444 bytes smaller.
All 897 reference entries, 4,477 card-use records, 7,208 usage contexts,
834 forms and 677 meanings remain. Compiler parity and the authored-reader
audit still cover all 76,271 occurrences without unresolved items.

Final HTML SHA-256:
`3acccadf55dc409358d8b665f4113c4e2eb4b4e4723481b7d53d4f6ea4a14883`

Measured runtime-source SHA-256:
`b32157d877c73b65d6627bfbcc8ac6cb5cc326ad78d5c9958a7a5bced9fde402`

Measurement-input SHA-256:
`8e325619a761fb722d9ee656eb14d18f26f3fb50196b990ccb819fac4b4801f4`

Unchanged gate SHA-256:
`08a24bf429a931c50c20f0fefadc27adaaa7cca9f49c8253f64dc4c3bf0c6150`

## Earlier attempts retained

Before the immutable-metadata refinement, five alternating pairs also passed:

| Pair | Baseline | Intermediate candidate |
|---|---:|---:|
| 1 | 932 ms | 574.1 ms |
| 2 | 668.3 ms | 677.1 ms |
| 3 | 689.2 ms | 625.9 ms |
| 4 | 716.4 ms | 596.2 ms |
| 5 | 664.2 ms | 586.9 ms |

An intermediate artifact passed all five attempts at 1423.9, 1071.5, 1118.5,
700.2 and 773.9 ms. Its high samples motivated the final registry refinement;
they are retained here rather than replaced by the faster paired observations.
Its HTML SHA-256 was
`810cfe06ebd1917ddd45b26a55d79032f913dc248f8806f67e8c2fb30bef7fbb`.

The unchanged canonical content SHA-256 is
`375c43cd01a28bba6f98c37257640b5755d4e06e2ecb7175916331de81f97166`.

## Regression validation

All **1,159 JavaScript tests pass** with two file workers in 182.5 seconds,
without skips. The unchanged gate also passes inside that full suite at
703.8 ms; it is reported separately from the isolated fixed-attempt samples.
The 20 additional regressions cover complete prepared runtime data without
authoring globals, search-context preservation, registry copying/immutability,
provider routing and measurement failure retention. The 111 actual module
definitions also match the baseline registry in values, own keys, property
descriptors and default parameters.

All **29 Python tests pass** in 131.0 seconds, including repeated builds,
deterministic exports, generated-write failures and metadata validation. All
1,256 numeric fixtures and nine negative contract mutations pass; all 111
formulas compile strictly. The notation audit retains zero unresolved/review
items. Incremental formatting and authored-source syntax/whitespace pass across
152 files. The gate and application source hashes remain unchanged. Offline
hash/parity and package CRC/current-byte/private-path audits also pass.

## Qualification limits

These are Node/V8 startup checks, excluding delivery, HTML/CSS parsing, layout,
paint, main-view rendering, native MathML, touch and assistive technology. Local
gzip sizes are estimates, not evidence of production response headers.
Historical runs under different PC conditions cannot establish a causal speedup
of the same size. The paired observations provide the closer comparison.

Real first-visit delivery and responsiveness on a representative phone and
laptop remain in the [qualification checklist](QUALIFICATION_0_34_0.md).
