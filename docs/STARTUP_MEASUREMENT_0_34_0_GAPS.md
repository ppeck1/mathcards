# Startup and payload — 0.34.0 atlas-gap candidate

Measured on 2026-11-02 using background Node processes, after other repository
checks stopped. No browser, desktop app, network or physical-device test ran.
The PC remained in ordinary use; operating-system caches were not flushed.

## Method and artifact

Run `node tools/measure_startup.cjs > qa-measure-gaps-final-0-34.json` after a
successful build. The ignored raw report records three sequential fresh-process
runs of the unchanged 1500 ms bootstrap test, plus diagnostic component workers.
The tool checks the manifest's actual bytes, embedded current scripts and
source stability. The representative 16-query set remains unchanged.

Windows x64, Node v24.11.1, AMD Ryzen 5 4600G, 12 logical CPUs;
CI uses Node 22. Source strings are read before the budget timer. Node/V8 is a
proxy that excludes delivery, HTML/CSS parsing, layout, paint, native MathML,
touch and assistive technology. Fresh processes do not imply cold OS caches.

| Artifact measure | Value |
|---|---:|
| Cards / prepared formulas | 111 / 111 |
| Prepared reference entries | 897 |
| Selectable forms / meanings | 834 / 677 |
| Card-use records / contexts | 4477 / 7208 |
| Attributed planning subjects | 295 |
| Embedded scripts | 118 |
| Standalone HTML | 8,691,337 bytes |
| Local gzip level-6 estimate | 1,416,526 bytes |

The script count does not represent network requests. Gzip is a local estimate,
not evidence of production headers or transferred bytes.

HTML SHA-256: `c8363cecf9e072592ccbc304622d455cbc4d651c7f121c7546cd25a36b5990ff`

Canonical SHA-256: `375c43cd01a28bba6f98c37257640b5755d4e06e2ecb7175916331de81f97166`

Measured source-script SHA-256: `287f1c21c5f0494e944eff6997427a36fa6145d527c9e2c2825645f67fae3776`

## Results, including the budget miss

| Fresh bootstrap process | Time |
|---|---:|
| 1 | 1444.9 ms |
| 2 | 1345.1 ms |
| 3 | 1422 ms |
| Median | 1422 ms |
| Unchanged limit | 1500 ms |

These three runs pass. An earlier attempt against this frozen artifact failed
at **1577.7 ms**; the measurement command stopped on that failure. It is not
discarded as a passing run or hidden by a relaxed threshold. A separate
diagnostic worker measured parsing, hydration and initialization; the prepared
index path remained in use. The diagnostics do not establish a single cause
for timing variation.

| Diagnostic field | Median of three workers |
|---|---:|
| indexHydrationMs | 126.423 ms |
| atlasInitializationMs | 27.868 ms |
| subjectInitializationMs | 19.913 ms |
| searchInitializationMs | 27.185 ms |
| firstSymbolCatalogMs | 28.993 ms |
| repeatedUnifiedQueryMedianMs | 12.315 ms |

The successful set has little headroom. These measurements were slower and
more variable than the earlier 102-card checkpoint; they do not establish a
causal regression of that size from the added content. Record the miss and
retain startup/device performance as an open release gate. No physical-phone
or browser readiness claim is made.

## Payload and next measurement

The standalone grows by 803,336 bytes from the
102-card checkpoint; its compressed estimate grows by
100,023 bytes. Canonical content and its
prepared reference still dominate the payload. Cross-links remain compiled at
build time; no deferred-loading improvement is claimed.

Before publishing, measure real first-use delivery and responsiveness on a
representative phone and laptop. Any future data split must preserve complete
offline search, symbol browsing, first-open availability and deterministic
exports. The [qualification checklist](QUALIFICATION_0_34_0.md) remains open.
