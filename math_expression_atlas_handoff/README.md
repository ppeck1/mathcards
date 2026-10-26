# Mathematical Expression Atlas — Codex build package v0.1

Prepared for Paul Peck, 2026-10-23. Working title; no final product name assumed.

**Purpose:** learn mathematics as languages for expressing relationships, finding patterns, and building bounded descriptions of reality. This is a build specification and executable content/export starter, not a completed learning application or a reviewed comprehensive mathematics corpus.

Start by giving Codex `CODEX_PROMPT.md`, then the entire directory. Read `PRODUCT_SPEC.md`, `BUILD_PLAN.md`, `ARCHITECTURE.md`, and `BOH_INTEGRATION.md` before implementation.

## Package contents

| File or directory | Purpose |
|---|---|
| `PRODUCT_SPEC.md` | Product behavior, extensive cards, grammar, visual interactions, exploration and history |
| `BUILD_PLAN.md` | Ordered implementation milestones, task boundaries and acceptance gates |
| `UI_BLUEPRINT.md` | Concrete layouts, model states, mobile behavior and capture flow |
| `ARCHITECTURE.md` | Technical design and official documentation references |
| `BOH_INTEGRATION.md` | Source-verified BOH capabilities, exact limits and integration checks |
| `CONTENT_DESIGN.md` | Deeper authoring and learning design recommendations |
| `schemas/card.schema.json` | Machine-readable starter contract, JSON Schema 2020-12 |
| `schemas/notebook.schema.json` | Private notebook backup/snapshot contract |
| `examples/notebook-format-fixture.json` | Synthetic format fixture; not a personal observation |
| `content/cards/` | Three authored design specimens; draft, with review limitations recorded |
| `content/sources.json` | Source registry with locators, usage and verification status |
| `content/coverage.csv` | Broad planned coverage inventory; entries are not authored cards |
| `tools/validate_package.py` | Schema, references, renderer contract and mathematical fixture checks |
| `tools/export_boh.py` | Deterministic per-card and per-example Markdown projection |
| `export/` | Generated BOH projection and byte-hash manifest; regenerate after editing cards |
| `VALIDATION.md` | Checks actually run and checks still required |
| `CODEX_PROMPT.md` | Execution instructions and first implementation slice |

## Start locally

Requires Python 3.12+ plus `jsonschema` for the starter validator; no API key or paid service is needed.

```bash
python -m pip install -r requirements-checks.txt
python tools/validate_package.py
python tools/export_boh.py
python tools/boh_probe/validate_export_metadata.py export/boh
```

The supplied scripts validate the planning fixtures and build inert exports. They do not implement the visual application or perform a live BOH import. The planned TypeScript app should port these contracts and keep fixture parity rather than add a second independent content model.

## Decisions fixed for the first build

1. Structured card JSON is the project source of truth. The app, Markdown and search catalog are generated views of that data.
2. The visual library works locally without BOH. BOH receives portable, source-linked written content; live connection is a later optional feature.
3. Start with eight deeply authored cards and a few reliable interaction families. Broad coverage grows in reviewed batches.
4. No runtime AI dependency, generic computer algebra system, graph database, account system or shared cross-project platform is required for the initial release.
5. Personal observations and conjectures belong to a separate, exportable notebook. They never silently become mathematical fact or BOH canonical authority.
6. The phrase **leaf example** means an independently addressable worked case at the end of an exploration branch. It is our design interpretation of Paul's request.

The three specimen cards establish depth and machine contracts. All remain `draft`. Historical completeness, editorial review, accessibility and live ingestion require the later gates described in the plan.
