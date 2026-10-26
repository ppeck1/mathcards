# Validation receipt — 2026-10-23

This is a planning package plus executable content/export fixtures. It contains no implemented browser learning application.

## Executed

| Check | Result |
|---|---|
| JSON Schema 2020-12 schema validity and card validation | 3 draft cards pass |
| Notebook backup schema and synthetic fixture | Schema and fixture validate; persistence/recovery not implemented |
| Required source/entity references, child IDs and declared relationships | Pass against source registry and planned coverage ledger |
| Starter AST checks | Root/operand/scope references, arity, cycle detection, selected derivative binder checks and order-variant mapping pass |
| Renderer/control contract | Known IDs, defaults, fixture control keys, enum values and declared invalid cases pass |
| Mathematical numeric fixtures | 16 cases pass, covering ordinary and failure states |
| Negative contract mutations | 8 deliberate defects detected |
| Leaf content | 19 complete worked examples across the three drafts |
| Planned coverage inventory | 172 entries; these are not 172 authored cards |
| Deterministic export | Two fresh builds have identical manifests and file bytes |
| Content/export string parity | All string payloads in the three card records retained in generated per-card Markdown |
| Generated exports | 22 documents: 3 primary cards and 19 standalone examples |
| Actual pinned BOH metadata validators | All 22 documents pass both validators with no lint errors |
| BOH authority export policy | draft / supporting / non_authoritative / none / reference |
| Negative BOH metadata case | Invented type `math_concept` rejected as expected |

BOH pin: `aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5`, reviewed 2026-10-23. Only the two retained metadata modules were executed. No BOH app, database or personal corpus was initialized or changed.

Machine receipts: `checks/starter-checks.json`, `checks/export-build.json`, `checks/boh-static-metadata.json`. Upstream module checksums and MIT license are retained under `tools/boh_probe/vendor/`.

## Not established by these checks

- A complete type checker or binder-aware mathematical language implementation. The starter AST probe is deliberately narrower.
- Complete displayed-equation AST agreement. The specimens declare core-expression coverage and separate output bindings; application rendering remains to implement.
- TeX parsing/typesetting correctness in a browser, meaningful interactive widgets, visual fidelity or accessibility conformance.
- Full mathematical proof checking or independent expert review of the teaching corpus.
- Comprehensive or independently reviewed history. Two specimen histories remain unsourced, and the derivative has only one bounded secondary notation claim. All cards remain drafts.
- Actual BOH admission, indexing, chunk-level formula/condition coherence, reimport identity, revision lifecycle, lexical/math search quality or citation reopening.
- Notebook persistence, backup restoration, offline behavior or reproducible app snapshots. The notebook example tests format only.

These are explicit implementation gates in BUILD_PLAN.md. In particular, clean metadata does not imply successful end-to-end ingestion, and a passing numerical example does not prove a theorem or an empirical model.

## Reproduce

From this directory, use Python 3.12+ for the supplied probes:

```bash
python -m pip install -r requirements-checks.txt
python tools/validate_package.py
python tools/export_boh.py
python tools/boh_probe/validate_export_metadata.py export/boh
```

The generation routines accept only the supplied allowlisted mathematical families. The app implementation should port or reuse the fixtures rather than assume these Python models are a shipped frontend runtime.
