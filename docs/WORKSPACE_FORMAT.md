# Saved workspace format — v1

A saved workspace records the context of a two-panel exploration. It is
separate from an individual notebook observation and from the canonical card
corpus. Its local storage key is
`math-expression-atlas:workspaces:1.0`; notebook storage uses its own key.
Builds and teaching exports never read these private browser records.

The portable structure is defined in
[schemas/workspace.schema.json](../schemas/workspace.schema.json). The runtime
validator and persistence API live in
[src/workspace-store.js](../src/workspace-store.js). Formula-like strings remain
inert data; importing a backup does not register or execute a program.

## Captured state

| Record field | Meaning |
|---|---|
| `schema_version` | Workspace record format, currently `1.0.0` |
| `kind` | `math-atlas-workspace` |
| `id` | Immutable opaque identity; a new save receives a new identity |
| `title` | Readable nonblank title, at most 200 characters |
| `created_at` | UTC ISO creation time |
| `slots` | Exactly two ordered slots, `work-0` followed by `work-1` |
| `connection` | One explicit directed connection, or `null` |

Each slot contains:

| Slot field | Meaning |
|---|---|
| `id` | `work-0` or `work-1` |
| `module_id`, `module_version` | The installed module identity and exact version used to interpret the state |
| `parameters` | Complete module parameter object, with full numerical values |
| `view` | The selected representation's declared view ID |
| `camera` | Shared host spatial-viewing angle, between 0.15 and 1 |
| `baseline` | Complete pinned comparison parameters, or `null` |
| `inspector` | Module-owned viewing state, or `null` |

Inspector state may include a fractal camera and repeated-edge comparison, or
another module's declared viewing state. Its fields belong to that module's
contract; the workspace schema does not hardcode the installed topic list.
The same applies to parameter keys and view IDs.

A connection uses `sourceSlotId`, `sourcePortId`, `targetSlotId`, and
`targetPortId`. Its endpoints must be different saved slots. A source can be an
input or a result; the receiving quantity must be an input. Declared quantity
types and units must match before values and model domains are considered.
Port labels and matching parameter names do not create an implicit connection.

Playback is restored paused. Parameters, view, camera, pin, and inspector state
are restored before coordination begins. A save does not capture a running
animation loop, focus-mode dialog, transient pointer gesture, or a partially
rounded display value.

## Backup envelope and API

The backup envelope is:

```json
{
  "schema_version": "1.0.0",
  "kind": "math-atlas-workspace-backup",
  "workspaces": []
}
```

The schema's reusable `$defs.workspace` describes one record. The store accepts
up to 200 records and 8 MiB of serialized UTF-8 JSON. It also bounds nested data,
individual text values, array lengths, and object field counts. JSON Schema
checks the portable structure; it does not replace these runtime size checks or
the semantic checks described below.

```js
const store = AtlasWorkspaceStore.createStore({
  modules: AtlasModules,
  storage: localStorage
});

const result = store.add({ title, slots, connection });
// result: { ok, workspace, persistence, warning } on success

const saved = store.get(result.workspace.id);
const compatibility = store.compatibility(saved);
if (compatibility.replayable) {
  // The application preflights and restores this state into paused hosts.
}
```

| Method | Behaviour |
|---|---|
| `list()`, `get(id)` | Return data copies; `get` returns `null` when absent |
| `add({ title, slots, connection })` | Save a new immutable record using current matching module versions; `connection` may be omitted for independent slots |
| `remove(id)` | Remove one record; a caller can retain a backup for an undo action |
| `compatibility(recordOrId)` | Return `replayable`, `status`, `reason`, and `issues` |
| `exportBackup()` | Return a JSON backup string containing all saved workspaces |
| `importBackup(data, { mode })` | Validate and merge by immutable record ID; `mode: 'replace'` replaces the collection |
| `status()` | Return count, preserved count, persistence mode, warning, and raw-recovery availability |
| `exportRecovery()` | Return unchanged original stored text after a corrupt/unsupported store was detected, otherwise `null` |

Imports accept a backup JSON string or a plain data object. The default import
mode is `merge`. An identical repeated record is idempotent; a different record
with the same ID is an identity conflict. All incoming and resulting records
are validated before applying a merge or replacement. Invalid imports leave
the current collection unchanged. Importing does not itself open a workspace.

Omitting `storage` uses browser storage where available; explicitly passing
`storage: null` keeps the collection in memory. If reads fail or a write is
blocked/full, the store reports the memory fallback and the need to export a
backup. Corrupt or unsupported original storage is left untouched and exposed
through the separate recovery action. This does not change notebook data.

Before each write, the store compares the current stored text with the exact
text it last read or successfully wrote. If another tab or store instance has
changed it, the external data is left untouched. This tab retains its pending
save, removal, or import in memory and explains that a backup should be exported
before reloading to see the other tab's records. A failed pre-write read uses
the same memory-only fallback rather than attempting a blind overwrite.

The changed external text is not parsed, merged, or applied automatically.
This is an optimistic stale-writer guard, not cross-tab synchronization or a
transactional compare-and-swap. Explicit export/import remains available for
reconciling separately saved work.

## Validation and version compatibility

For each available exact module version, the store checks complete parameter
and comparison keys, model parameter validation, declared view IDs, bounded
camera state, and the module's `validateInspectorState` contract. Validation
must not normalize, round, clamp, convert, or silently fill saved state.
Structurally valid failure-case parameters, such as a zero derivative step or
logarithm base one, can still be saved as independent explorations.

For a currently valid saved connection, the recorded receiving input must
already equal the source quantity at full model precision. A mismatch is an
invalid saved configuration; restore must not silently correct it.

A live connection can also be paused because a source output is undefined or
the next value is outside the receiving model's range/domain. Such a snapshot
retains the connection and the last valid receiving parameters. If the port
metadata remains compatible, it can be saved and restored as blocked without
applying the invalid value. It resumes only after the relevant values become
valid again. This preserves the user's actual scene rather than clamping it.

When a saved module is missing or its exact version differs, the workspace is
`preserved` and not replayable. The unavailable slot's parameters, pin, and
inspector data remain opaque portable JSON. Its current replacement is not
called to reinterpret or recalculate them. A connection involving such a slot
is not evaluated under a different implementation. Other exact-version slots
still pass their own current structural validation.

The saved record remains readable and exportable, including when new current
workspaces are added to the same collection. Missing records or records that
fail saved-state validation are `unavailable`; safe version differences are
not treated as corrupt storage.

**A module version must change when its parameter, view, port, or inspector
contract changes incompatibly.** That includes a changed quantity meaning or
unit under an existing port ID. The current workspace compatibility check uses
`module_id` and `module_version`; it cannot infer that an author changed a
contract while keeping the same version. Changes to decorative layout alone do
not require interpreting saved mathematical state differently.

This format preserves an exploration's context. It does not establish
independent mathematical review, learner effectiveness, broad accessibility,
or an empirical relationship between two illustrative stories.
