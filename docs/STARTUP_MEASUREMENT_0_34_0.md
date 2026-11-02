# Startup and payload measurements — 0.34.0 branch

Measured on 2026-11-02 using background processes only. No browser, desktop
application, network request or physical-phone test was used. The live site was
not changed by this measurement.

## Reproduce

After a completed build, with other test suites stopped:

```sh
node tools/measure_startup.cjs > qa-measure-final-0-34.json
```

The raw local report is `qa-measure-final-0-34.json` (ignored QA output). The
[measurement tool](../tools/measure_startup.cjs) verifies the manifest's actual
HTML hash, confirms that the current source scripts are embedded, and rejects
source/build changes during measurement. It invokes the existing
`tests/startup-index.test.mjs` bootstrap budget test unchanged in three fresh,
sequential Node processes. Concurrency is one; the 1500 ms budget is unchanged.

Additional fresh processes measure source-script parsing/evaluation, prepared
index hydration, initialization, actual unified searches and first symbol-catalog
construction. They do not compile cross-links at runtime. Sixteen representative
queries include punctuation, Greek symbols, scoped letters, probability,
statistics, order and neural vocabulary, plus an unsuccessful query. Each worker
then repeats those queries three times.

Environment: Windows x64, Node v24.11.1, AMD Ryzen 5 4600G, 12 logical CPUs.
CI remains configured for Node 22. The user's PC was in normal use; no operating
system caches were flushed or benchmark-only machine settings applied.

## Artifact identity

| Item | Value |
|---|---|
| Cards / prepared formulas | 84 / 84 |
| Reference entries | 710 |
| Selectable forms / meanings | 713 / 515 |
| Reference card-use records / contexts | 3,539 / 5,806 |
| Eight-book subjects | 295 |
| Offline HTML bytes | 6,666,167 |
| Local gzip level-6 estimate | 1,165,031 bytes |

The gzip figure is a local compression estimate, not a measurement of production
response headers or transferred bytes. The 93 source scripts are embedded in the
standalone HTML; they do not represent 93 production script requests.

HTML SHA-256:
`6faf5a4ae3ba585a89cd4bb7e8d3dcfc51082096cc6ad3f09a21a53400eff01f`.

Canonical-content SHA-256:
`9ecf53213d44ccc39f6585d7ca9289c3152810a7a26df0fd10d149517f690646`.

Measured source-script SHA-256:
`da2089b1d1434e7520678a3b616675a3aaee57d3dec66f015ab2e4343ca8a1d1`.

## Results

| Existing bootstrap budget test | Elapsed JavaScript time |
|---|---:|
| Fresh process 1 | 345.6 ms |
| Fresh process 2 | 432.6 ms |
| Fresh process 3 | 369.8 ms |
| Median | 369.8 ms |
| Unchanged acceptance budget | 1500 ms |

All three runs passed. These timings cover the existing test's VM parsing,
module setup, atlas/reference initialization and header-search mounting. Source
strings are read before that test's timer, and ordinary test setup precedes it.
A fresh process does not imply that every V8 or filesystem cache is cold.

The separate component workers provide diagnostic timings:

| Component | Median of three processes |
|---|---:|
| Catalog script parse and evaluation | 38.719 ms |
| Prepared reference script parse and evaluation | 38.407 ms |
| Formula data parse and evaluation | 1.684 ms |
| Subject data parse and evaluation | 3.068 ms |
| Reference hydration | 37.560 ms |
| Atlas initialization | 8.492 ms |
| Subject-provider initialization | 7.753 ms |
| Unified-search initialization | 8.210 ms |
| First symbol-catalog construction | 8.275 ms |
| Repeated unified query, median of per-run medians | 4.711 ms |

The slowest first query was 22.197 ms, for `+`; the slowest repeated query was
11.174 ms. These are the actual shared search adapter's results, including
reference, cards, atlas areas and the new subject provider. Component medians
come from different fresh processes and should not be added to reproduce the
bootstrap test's elapsed time.

## Payload and deferred-loading decision

| Source projection | Bytes | Share of offline HTML |
|---|---:|---:|
| Canonical catalog | 2,058,063 | 30.9% |
| Prepared reference | 1,726,669 | 25.9% |
| Authored reference definitions | 309,549 | 4.6% |
| Prepared MathML | 237,136 | 3.6% |
| Subject inventory projection | 122,661 | 1.8% |

The compact reference payload contains 1,202,009 serialized bytes of card-use
arrays, approximately 69.7% of its 1,724,740-byte JSON payload. Entry content
without those use arrays accounts for 514,128 bytes. These component sizes are
diagnostic estimates, not independently loadable or interchangeable files.

The former startup source scan remains eliminated. Hydration itself takes about
38 ms here; merely postponing it would move that cost to the first lookup while
leaving the prepared script's parsing and transfer cost. The symbol catalog is
already constructed lazily when first requested. These results do not justify
changing the working lookup contract solely to move its timer.

The measured payload identifies a useful next experiment: separate a prepared
header-search projection from detailed usage contexts, then compare deferred
detail parsing against this baseline. Any prototype must preserve offline use,
literal-symbol ownership, scoped card links, source parity and immediate header
search. The current search uses those contexts for meaning and ownership, so
dropping them from startup without an equivalent projection would change search
semantics. No such runtime change is claimed by this measurement.

## Remaining qualification

These Node/V8 proxies exclude disk/network delivery, HTML and CSS parsing,
layout, paint, native MathML behavior, physical-device dragging and assistive
technology. Three runs on one PC do not establish phone performance or a
high-percentile latency guarantee. The next performance gate is a permitted
browser run under constrained CPU/network conditions, including sustained input
and first reference opening. Physical-device and learning review remain open.
