# Startup and payload measurements — 0.34.0 continuation

Measured on 2026-11-02 after the successful 102-card build and regression
suites had stopped. All processes ran sequentially in the background. No
browser, desktop application, network or physical-device test was used.

## Method and reproducibility

```sh
node tools/measure_startup.cjs > qa-measure-continuation-final-0-34.json
```

The raw local JSON is ignored QA output. The
[measurement tool](../tools/measure_startup.cjs) checks actual manifest bytes,
current embedded source and source stability before/after measurement. It
invokes the unchanged bootstrap budget test in three fresh Node processes,
with concurrency one and the same 1500 ms threshold. Separate fresh workers
measure hydration, initialization, actual unified searches and symbol catalog
creation. They use prepared reference data, without compiling cross-links at
runtime. The 16-query set is unchanged from the initial checkpoint.

Environment: Windows x64, Node v24.11.1, AMD Ryzen 5 4600G, 12 logical CPUs.
The user's PC remained in normal use; caches were not flushed. CI uses Node 22.
Source strings are read before the budget timer. This is a Node/V8 proxy that
excludes network delivery, HTML/CSS parsing, layout, paint, native MathML,
physical touch and assistive technology. Fresh processes do not imply cold
operating-system caches.

## Artifact identity

| Item | Value |
|---|---:|
| Canonical cards / prepared formulas | 102 / 102 |
| Prepared reference entries | 802 |
| Selectable symbol forms / meanings | 789 / 595 |
| Reference card-use records / contexts | 4,156 / 6,751 |
| Eight-book planning subjects | 295 |
| Embedded source scripts | 106 |
| Offline HTML bytes | 7,888,001 |
| Local gzip level-6 estimate | 1,316,503 bytes |

The scripts are embedded in one standalone HTML artifact; their count does
not describe production requests. Gzip is a local estimate, not evidence of
production headers or transferred bytes.

HTML SHA-256:
`c8924b6cbb517e6bd3b440cbdf7ae9fbcc526820b370010299098accfc4eae55`

Canonical-content SHA-256:
`4bfad6ce35a1fda08d1d97e461463ab23df0172813b0ca1ab8bcbe783d0db980`

Measured source-script SHA-256:
`2027455a1bff652abd9d016fbf95745a7f4ea6daaca0463199a3fb313f850448`

## Results

| Existing bootstrap budget test | Elapsed JavaScript time |
|---|---:|
| Fresh process 1 | 355.7 ms |
| Fresh process 2 | 370.0 ms |
| Fresh process 3 | 359.4 ms |
| Median | 359.4 ms |
| Unchanged acceptance budget | 1500 ms |

| Diagnostic component | Median of three processes |
|---|---:|
| Catalog parse and evaluation | 42.271 ms |
| Prepared reference parse and evaluation | 39.969 ms |
| Prepared formula parse and evaluation | 1.679 ms |
| Subject data parse and evaluation | 2.805 ms |
| Reference hydration | 38.232 ms |
| Atlas initialization | 7.326 ms |
| Subject-provider initialization | 6.970 ms |
| Unified-search initialization | 9.498 ms |
| First symbol-catalog construction | 8.360 ms |
| Repeated query, median of per-run medians | 4.631 ms |

The slowest first query was 18.810 ms, for `+`; the slowest repeated query was
10.447 ms. The real search adapter queries reference, cards, map areas and
subjects. Component medians come from distinct workers and should not be added
to reproduce the bootstrap elapsed time. Small differences from the earlier
checkpoint are not evidence of a performance improvement or regression.

## Payload decision

The canonical catalog occupies 2,516,056 source bytes; prepared reference data
occupies 2,006,811. The compact reference JSON is 2,004,862 bytes, with
1,414,971 bytes in serialized card-use arrays and 580,000 in entry content
without those arrays. These diagnostic projections are not independently
loadable files. Their sizes should not be added as separate payloads.

Compared with the earlier 84-card checkpoint, the standalone grows by 1,221,834
bytes and its local compressed estimate by 151,472 bytes. Eighteen lessons,
their examples, definitions and actual use links account for the expanded
content. The former startup source scan remains eliminated. This candidate
retains eager prepared data; no deferred-loading benefit is claimed.

A future split should first measure real delivery and first-use behavior on
representative browsers and phones. It must preserve offline search, complete
symbol browsing, deterministic exports and first-open availability. Those
device gates remain open in the [qualification checklist](QUALIFICATION_0_34_0.md).
