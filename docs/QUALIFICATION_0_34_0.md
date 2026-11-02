# Device and teaching qualification

Status: prepared, not performed for 0.34.0. The user requested background work
without interaction with their PC. No browser-control workaround, desktop
automation, screen-reader simulation or physical-phone certification was used.

Record the tested commit, app version, device, operating system, browser,
viewport, input method, assistive technology and reviewer/date with each result.
Report pass/fail and an actual observation rather than inferring behavior from
unit tests. Preserve failures as follow-up issues.

## Complete learner journey

| Check | Required observation | Result |
|---|---|---|
| First visit | Content and controls become useful without a frozen blank page | Pending |
| Discovery | Find a lesson through Explore, Atlas, Subjects and a term/symbol search | Pending |
| Story | Explain the starting quantities and assumptions without developer help | Pending |
| Intervention | Change one variable using pointer, touch and keyboard; identify its text, calculation and changed shape | Pending |
| Readability | Values can be read while dragging; no flashing or repeated loud announcements | Pending |
| Views | Geometry and Graph show the same result; applicable Spatial views remain distinct | Pending |
| Transfer | Predict a new setting, test it and explain any disagreement | Pending |
| Limits | Recognize an invalid domain or missing assumption and state what the demonstration cannot establish | Pending |

Repeat on a representative narrow phone viewport, tablet and laptop; test
browser zoom and enlarged text. Check long formulas, the full symbol catalog,
subject filters, map overview and focused territories for clipping and unwanted
page-wide horizontal scrolling. Static SVG renders qualify only their own
geometry, not these browser layouts.

## Accessibility and motion

- Walk the whole journey by keyboard with visible focus and no traps.
- Inspect actual screen-reader names, grouping and reading order for native
  MathML, variable controls, charts, the reference, dialogs and saved entries.
- Verify numeric or keyboard alternatives for dragging and focus/tap access to
  information normally found by hover.
- Confirm that color carries a redundant text or shape cue.
- Verify reduced motion and pause/reset behavior in the operating system and
  browser. Ensure values and geometry continue to agree.
- Run a fresh automated accessibility audit, then inspect the behavior that the
  audit cannot establish. Record both separately.

## Offline and recovery

1. Open the built standalone file in a fresh profile and disconnect networking.
   Exercise a new lesson, reference search, Subjects and both views. Record any
   external request or missing asset.
2. Save a notebook entry and a workspace containing distinct modules, views,
   exact inputs, pins and an explicit compatible link. Export both backups.
3. Import into another fresh profile. Verify full-precision inputs, paused
   restoration and the distinction between saved and live state.
4. Exercise unavailable storage, quota failure, corrupt JSON and an unavailable
   revision. Confirm preserved recovery data and useful export behavior.
5. Clear storage only in the disposable test profile. Restore the exported
   backups and verify that private notes never enter public corpus exports.

Automated tests cover storage adapters, validation and rollback. This checklist
adds actual browser download/import/offline behavior; those are separate claims.

## Independent mathematical and learning review

Select representative simple, advanced, discrete, continuous and invalid-state
lessons. For each, record:

- Whether its definition, domain, units and stated model agree.
- Whether the original worked examples are correct and sufficiently varied.
- Whether the visual size, direction, scale and gaps encode the stated quantity.
- Whether exact, approximate, undefined and infinite results are distinguished.
- Whether sources support the claim at the stated depth and edition.
- Whether historical priority is supported or explicitly left unresolved.
- Whether a new learner can explain the changed quantity and solve a related
  case without memorizing the animation.

Keep numerical validation, author review, independent expert review and learner
observations distinct. Update publication status only after the applicable
review requirements are met.
