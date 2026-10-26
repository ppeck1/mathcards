# Visual playground verification

Checked on Windows with Node and Python, and in a Chromium browser.

- All 41 Node checks pass: models, notebook storage and 13 visual regressions.
- `python tools/check.py` passes: schemas, references, 16 authored numerical
  cases, eight negative contract probes, deterministic exports, complete written
  payload preservation, four pipeline tests and pinned BOH metadata validation.
- Browser checks cover the live home sketch, composition geometry and graph,
  animation, pinning, input synchronization, reset, invalid logarithm bases,
  shrinking bases, zero derivative step, the absolute-value corner, workbench
  topic changes, independent SVG IDs and animation teardown on navigation.
- Matching composition workbench frames have equal area per magnitude unit,
  including when one input is changed beyond the animation range.
- Capturing an experiment pauses playback before the notebook dialog opens.
- A 390-pixel phone viewport uses compact scene labels and has no horizontal
  document overflow. Desktop layouts were also visually inspected.
- `tools/build.py` embeds all visual modules and both stylesheets. Its normal
  build also refreshes `START_HERE.html`, avoiding a stale entry-point copy.

Windows content validation now explicitly reads UTF-8, preserving mathematical
symbols independently of the operating system's default text encoding. The ZIP
packager writes a single current `START_HERE.html` entry.

This is a first visual-design iteration. Independent teaching-content review,
historical research and assistive-technology qualification remain outside these
checks, as in the preceding build. No live BOH ingestion was performed.
