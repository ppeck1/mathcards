# Repository snapshot and publication boundary

The initial source snapshot keeps the complete local learning application:
canonical content, models, stories, schemas, tests, tools and documentation.
It also keeps the built `START_HERE.html` and `dist/` entry, so a checkout can
open the same offline application without first installing a build toolchain.
The deterministic written corpus in `export/` stays available for inspection.

The original `math_expression_atlas_handoff/` is retained as the planning
package and a source of historical format fixtures. Two current test files,
`tests/models.test.mjs` and `tests/notebook.test.mjs`, read its card fixtures
directly. Removing that directory from the snapshot would break a fresh clone.

## What is excluded

The root `.gitignore` excludes local agent/configuration directories,
environment files, private-key containers, dependencies, interpreter caches,
scratch files and every `qa-*` capture. In particular, local QA notebook and
workspace backups are excluded; they are distinct from the synthetic public
format fixtures under `examples/` and the original handoff.

All ZIP archives are excluded from source history. The existing release
archives remain on disk and can be uploaded separately as release assets.
Nothing is deleted by these rules.

Publication working copies under `docs/publishing/` are initially excluded.
The project page and blog post can be reviewed and then staged deliberately in
their intended publishing repository. This does not prevent an explicit later
decision to track those drafts here.

The ZIP packager also excludes that directory, so rebuilding an offline release
does not accidentally distribute unpublished website copy.

The ZIP packager reads the filesystem independently of Git. Its current rules
do not exclude `docs/publishing/`; if that working-copy directory is retained,
the packaging exclusions also need to be updated before a later public archive
is generated. The existing 0.22.0 ZIP predates these publication drafts.

## Review performed

A filename/category-only credential-pattern scan covered 550 candidate text
files while skipping the excluded private directories, QA captures,
environment files and ZIPs. It found no private-key block or GitHub, provider,
or AWS credential-shaped string. This is a bounded pattern check, not a
guarantee about all possible sensitive content.

The current learning content declares constructed teaching scenarios. Sampled
documentation images show the crate-weight lesson and the chaos comparison
inside the application, with mathematical example values rather than patient
records. This review did not open local private tool state or QA backups. The
canonical export boundary is also covered by the existing pipeline tests.

After initialization, actual `git check-ignore --no-index` checks confirmed
that representative agent state, environment files, dependencies, QA captures,
ZIP history and publication drafts are ignored. The offline entries, export,
source, tests, deployment documentation and original derivative fixture remain
eligible for tracking.

No license file was present when this snapshot was prepared, and no license
grant was added. Licensing remains a separate decision.

## Before the first push

After the repository is initialized, inspect the candidate file list with
`git status --short` and `git add --dry-run .`. Confirm that source, fixtures
and the offline entry are present, and that local configuration, ZIP history
and QA files are absent.

Use `git check-ignore -v --no-index` with representative paths to verify the
actual Git rules. Examples expected to be ignored include `.env.local`,
`qa-notebook-old.json`, `math_cards_v0_22_0.zip` and a working copy beneath
`docs/publishing/`. Examples expected to remain visible include
`START_HERE.html`, `dist/index.html`, `content/cards/set.json`,
`examples/notebook-format-fixture.json`, and
`math_expression_atlas_handoff/content/cards/derivative.json`.

These checks do not initialize the repository, stage changes, create commits,
select visibility, or publish content. Those steps belong to the repository's
actual creation and publishing workflow.
