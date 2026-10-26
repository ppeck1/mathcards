# Bag of Holding integration findings for the math library
Reviewed 2026-10-23. Read-only inspection of public GitHub source; no BOH runtime test or repository mutation performed.

## Source pin
Repository: https://github.com/ppeck1/Bag-of-Holding
main commit: aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5
Commit dated 2026-10-22: "feat: publish Markdown lifecycle and reusable retrieval platform".
The GitHub branch API supplied this full SHA. Initial file reads used default main; no mutation during this inspection was observed. Implementer must pin and recheck target checkout.

## Implemented behavior
1. Plain UTF-8 .md/.markdown is accepted without BOH metadata. Bytes are preserved, and derived posture is draft / non_authoritative / supporting / none. Native IDs are relative-path-derived UUID5 ("plain-md-..."); roots do not enter the identity. A ledger-proven rename can preserve that identity. Changing indexed native files manually to BOH metadata must preserve their existing native ID. This makes metadata-free ingestion convenient but unsuitable for deliberate portable authored card IDs.
2. Explicit BOH frontmatter is supported. The path indexer takes doc_id from boh.id, not merely boh.document_id. Include both identically. The indexer validates two contracts, and incomplete explicit metadata can still index with lint/quarantine behavior: indexed=true alone is insufficient acceptance.
3. app/core/rubrix.py requires boh.id, type, purpose, status, updated plus rubrix.operator_state/operator_intent. Valid type values: note, canon, reference, log, event, person, ledger, project. Valid status here: draft, working, canonical, archived. States: observe, vessel, constraint, integrate, release. Intents: capture, triage, define, extract, reconcile, refactor, canonize, archive.
4. app/core/metadata_contract.py additionally requires project, document_class, status, canonical_layer, title, provenance, source_hash, document_id (with aliases for some). Valid document_class registry includes reference; type=reference and document_class=reference is safe. Draft/supporting/non_authoritative is deliberately explicit. Do not use app-level card kinds such as "math_concept" as BOH type values.
5. Explicit authority is never inferred from mathematical truth or a polished visual. Intake is separate from promotion; imports cannot overwrite canonical documents. The math library's "canonical source data" means authoritative project source format, not BOH canonical authority. Keep these meanings separate.
6. Topics and scope are read from boh.topics and boh.scope. These can help lexical retrieval but custom math ontology fields are not automatically projected into first-class BOH graph relationships.
7. Normal Markdown body is indexed, with headings, source offsets and chunk IDs. Chunk default is 1400 characters, split on heading, changed line classification (body/table/link) and size. This is not a math-aware parser: no AST, units checker, theorem verifier, equation/assumption grouping, or stable semantic assertion ID is provided.
8. Current chunk IDs contain doc identity + full text hash + chunk index + heading + leading content. Revisions can change chunk IDs. Persist author-controlled section/example/assertion IDs in source and export manifest; do not use chunk ID as permanent math identity.
9. JSON/JSONL have adapter declarations for preservation and staging; direct indexer JSON conversion pretty-prints only first 3000 characters and invents stem-based IDs. Do not make a large catalog JSON the sole searchable BOH projection. The JSON/JSONL adapter is not a math-card schema importer.
10. HTML intake removes scripts/forms/iframes/event handlers, does not execute content or fetch remote assets. Known losses explicitly include interactive_behavior, layout_precision and script_behavior. Importing the app HTML cannot preserve the learning experience.
11. PDF and image OCR are unavailable in the public update. Image/PDF adapter records are preservation/hold boundaries, not extracted mathematical semantics. Interactive assets must have independent textual descriptions, equations, domains, state parameters and experiment recipes.
12. The public local HTTP consumer is read-only. It supports libraries(), retrieve(), read() and lookup(). Modes: exploration, strict_answer, audit_provenance. Retrieve preserves warnings, exclusions, authority, lifecycle and coverage data. An optional math application adapter should keep these fields rather than flatten them away.
13. reader.py /api/docs/{id}/content opens current file bytes and strips frontmatter. It does not reopen the exact cited retained revision. consumer.lookup labels reader_matches_indexed_source_hash as "unknown" and warns about current-file content. Hashes of stripped bodies are not equal to full source-byte hashes in general.
14. Logical library scope is a browsing filter, not an authorization tenant. The public source intentionally omits operational MCP deployment; do not promise that cloning public BOH yields runnable MCP ingestion.
15. Managed source observations track changed/missing/invalid sources and retained prior revisions; this does not by itself expose historical citation reopening in the current reader API.

## Proposed export contract for the new math app
Use one project-owned, validated content source (recommend structured JSON records plus Markdown longform slots, or a strict authoring bundle compiled deterministically). The application and BOH Markdown are projections of the same source revision. Avoid independently maintained dual truth.

Export one UTF-8 Markdown document per primary card, with related leaves either in compact local sections or separate one-example documents if retrieval grouping cannot be kept coherent. Keep every definition/condition/formula prose unit self-contained, because chunker splits headings and line types.

Suggested header (illustrative; generate actual timestamp/hash):
```yaml
---
boh:
  id: math:concept:derivative
  document_id: math:concept:derivative
  type: reference
  document_class: reference
  purpose: "Derivative: local rate of change"
  title: "Derivative"
  project: "Mathematical Expression Atlas"
  status: draft
  canonical_layer: supporting
  authority_state: non_authoritative
  review_state: none
  version: "0.1.0"
  updated: "2026-10-23T00:00:00Z"
  source_hash: "<SHA-256 of the authoritative upstream card content representation>"
  provenance:
    mode: math_atlas_projection_v0_1
    card_id: math:concept:derivative
    upstream_content_sha256: "<same upstream card content SHA-256>"
    source_revision: "<project content revision>"
    exporter_version: "0.1.0"
  topics: [mathematics, calculus, derivative, local change]
  rubrix:
    operator_state: observe
    operator_intent: capture
---
```

BOH doesn't validate the meaning/format of source_hash in this metadata extraction. To avoid self-referential full-file hashing, define source_hash here as upstream content hash, explain scope in provenance, and separately record generated Markdown byte SHA-256 in export-manifest.json. BOH's text_hash captures generated Markdown text. Do not label upstream hash as generated full-byte hash.

Recommended body sections: stable card ID and revision; plain-language meaning; formal definition with domain and assumptions attached; notation and reading; grammar/roles/binding; properties with hypotheses; visualization specification and textual experiment recipe; leaf examples (given/model/steps/result/interpretation/limits); counterexample/nonexample; modeling caveats; historical claim records with scoped citations; typed relationship list with card IDs; sources and change log.

Record export manifest contract version, exported document identity/path, upstream card/version/hash, generated file SHA-256, relationships/asset metadata, stable leaf/assertion IDs. Keep interactive modules in math app allowlisted renderer registry. BOH imports only inert evidence projections. Custom math graph remains math app data until a separately implemented BOH graph adapter is verified.

## Minimal implementation/acceptance plan
A. In the math project, deterministic exporter tests check all IDs, mandatory fields/enums, source refs, math source strings and link targets. Generated Markdown must be loss-accounted against original card: no missing definitions, conditions, leaf examples, history sources or interaction fallback.
B. Isolated BOH integration fixture sets BOH_DB, BOH_LIBRARY and BOH_DATA_ROOT to test-owned disposable directories, disables automatic LLM/review/analyze/scheduler features. Never use Paul's actual corpus/database.
C. Index 3 representative cards: derivative with LaTeX/Unicode, vector transformation with domain/dimensions, conditional probability with counterexample. Assert indexed=true AND lint_errors empty; draft/supporting/non_authoritative; stable boh.id; correct topics/title/source provenance; full UTF-8 text retrievable; no script execution.
D. Reindex unchanged export: same doc/card count and IDs. Re-export changed card under same stable ID: new text searchable, old current text no longer returned, proper lifecycle observation; never hardcode persistent chunk identity.
E. Retrieve a compact definition and its conditions. Verify no accepted answer/pack presents a formula as universally valid when hypotheses are outside selected chunks. If coherence fails, export separate compact definition/leaf docs or explicitly expand current-card context; do not silently claim math-safe retrieval from generic chunking.
F. Exact ID/name and Unicode/LaTeX alias searches need measured results. Lexical tokenization is not equation equivalence. Add explicit prose/symbol aliases to body.
G. Malformed explicit metadata rejected or caught by linter before staging; no fallback to draft with invented authority; changing to canonical is blocked unless explicit operator governance occurs. App publishes content-reviewed state independently of BOH canonical state.
H. Asset manifest pointers remain links and descriptive fallbacks, never claims that BOH renders widgets or ingests their behavior.
I. Optional live consumer mode is separate milestone: offline app remains useful, read-only local service bridge preserves authority/coverage/error fields, no operator token in browser; no historical reopening promise.

## Static metadata probe (executed)

Fetched exact pinned app/core/rubrix.py and app/core/metadata_contract.py into scratch at boh_contract_probe/vendor/. A standalone script imports only these modules and runs their validate_header() and extract_contract(..., allow_legacy=False) functions. It does not initialize the app, database, source lifecycle or corpus. PyYAML is used only to read generated YAML frontmatter.

Script: tools/boh_probe/validate_export_metadata.py

Executed positive representative-header check: both BOH validators returned zero lint errors; posture extracted as draft / supporting / non_authoritative / none / reference. Executed negative check: type=math_concept produced LINT_INVALID_TYPE as expected.

The script also reports separately labeled exporter-policy checks: matching id/document_id, reference type, declared document_class in the BOH registry, draft/supporting/non_authoritative/none, provenance mapping and SHA-256 shape. These are project export checks, not claims that BOH validates every custom field.

For generated examples, run:

```bash
python tools/boh_probe/validate_export_metadata.py export/boh/
```

This confirms only static metadata compatibility. Complete ingestibility and condition-preserving retrieval still require the isolated BOH integration milestone described above.

## Source links
- README: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/README.md
- October update: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/docs/PUBLIC_UPDATE_2026_10.md
- Indexer: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/services/indexer.py
- Native Markdown derivation: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/services/plain_markdown.py
- Rubrix lint: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/core/rubrix.py
- Governed contract: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/core/metadata_contract.py
- Chunking/retrieval: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/core/retrieval.py
- HTML normalization: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/services/intake/normalization.py
- Adapter registry: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/services/intake/adapter_registry.py
- Read-only consumer: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/tools/platform/consumer.py
- Current-file reader: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/app/api/routes/reader.py
- Native tests: https://github.com/ppeck1/Bag-of-Holding/blob/aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5/tests/test_plain_markdown_intake_public.py

