# First application build: validation evidence

Date: 2026-10-23. Version: 0.2.0. This report supersedes the planning
package's statement that no browser application exists; it does not promote
the draft mathematical or historical content.

## Automated checks completed

- 28 dependency-free Node model/notebook tests pass: all supplied model
  fixtures, ordered composition and identity, real-log domain/inverse behavior,
  analytic versus finite derivatives, zero step, the absolute-value corner,
  nonfinite/unknown parameters, typed snapshots, corrupt/oversize backup
  rejection, atomic merges, reverse-order restoration and storage failures.
- Four Python pipeline regression tests pass: source/catalog parity, inert
  inline data, deterministic standalone builds, deterministic written export,
  and separation of private notebook data.
- Supplied JSON Schema 2020-12, cross-reference and semantic-structure checks
  pass for 3 cards, 19 examples and 16 numeric fixtures; 8 deliberately invalid
  contract mutations are rejected. Seven generated notebook notes also pass
  the supplied notebook schema with date-time format validation.
- All 22 generated Markdown documents pass both pinned BOH metadata checks.
- Standalone app contains one embedded script, embedded styles/content and
  no external script or stylesheet dependencies. Application code uses no
  runtime fetch, service, API key, arbitrary formula evaluation or CDN.

## Browser checks completed

Checked the compiled application in Chromium through the internal preview:

- Explore renders three available cards, navigation, expressive-job filters,
  search controls and the draft-content scope statement.
- Composition defaults to 49 through intermediate 7; reverse order displays
  19 through intermediate 9. Compare uses two independent states and reports
  the output difference with conditions for interpreting it.
- Saved a clearly labeled disposable QA observation, reopened it and observed
  the reversed order and output 19 restored.
- Exported a JSON backup using the browser download flow, removed the
  disposable QA entry, and imported the backup into the empty notebook.
  The entry, source revision and model version returned.
- Log base 1 removes the current graph/result and explains invalidity.
- Cubic at a=2,h=0 shows an undefined secant and analytic slope 12.
- Absolute value at a=0 shows analytic derivative undefined and explains
  unequal one-sided slopes.
- Rendered the real application inside a 360px-wide iframe. The page has
  no horizontal overflow (345px client/scroll width after its scrollbar).
  Composition uses stacked readable steps at this width. Section navigation
  and wide formulas/tables scroll within their own regions.
- Keyboard activation of the skip link moves focus to the main content
  without changing routes.

Preview browser-extension diagnostics were present in the cloud browser;
these originate from its extension, not the application. Browser checking
was an internal QA session, not publication.

## Remaining verification and scope limits

- Browser QA used a served single-file bundle. A direct file:// session,
  Android file-manager launch, offline browser network blocking, real touch
  hardware, 200% browser zoom and screen-reader use were not exercised here.
  The bundle is designed for local file use and does not load external assets;
  storage fallback is covered by automated tests.
- Browser checking was interactive; there is no automated browser-runner
  dependency in this source package.
- These models use a fixed allowlist, not a general algebra parser or a
  full type checker for arbitrary functions. Non-numeric examples are worked
  text cases rather than executable general composition tools.
- Independent mathematical review and complete historical research remain
  pending. Composition/logarithm history panels retain explicit source gaps.
- No live BOH ingestion, indexing, retrieval or revision-reopening test was
  performed; Paul's live corpus was not touched.
- Eight-card breadth, richer relationship maps and subsequent build-plan
  milestones remain future work. The 172-topic inventory is only a backlog.
