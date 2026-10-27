# 0.25 visual reference and topography review

The release retains the 38 concepts and their mathematical models. The new
symbol browser and terrain presentation reuse the existing reference and atlas
providers rather than introducing separate content inventories.

| Request | Implementation | Verification |
|---|---|---|
| See every indexed symbol | 531 forms and 308 meanings below Index search, grouped into 14 fields | Coverage tests include every declared form and 11 additional visible local forms |
| Keep the page uncluttered | Native collapsible catalog with a bounded, scrollable glyph grid | Keyboard and narrow-layout browser checks |
| Select a glyph and read it | Exact-form search opens its definition; shared forms retain their other meanings and usage links | Selection, case-sensitive notation and context tests |
| Restore topographic definition | Layered SVG contours and summit shading | Actual counts drive height; planned counts do not affect the surface |
| Preserve phone overview | Full-world camera, eight visible names and native territory key | Existing label/camera regression tests retained |
| Keep startup responsive | Prebuilt reference links and lightweight SVG surface | Existing startup CPU budget remains enforced |

| Remaining work | Scope |
|---|---|
| Physical device checks | Touch, rotation and screen readers require real-device walkthroughs |
| New notation | Newly authored display forms enter the catalog through reference data; this is complete for the current index, not every symbol ever used in mathematics |
| Future content | Add concepts, stories, terms and validation through existing module contracts |

| Principle | Rule |
|---|---|
| One source of reference truth | Derive glyphs from prepared index entries; do not maintain another shortcut inventory |
| Preserve context | A shared glyph can have several definitions; keep their meanings and actual card uses available |
| Accessible density | Use native disclosure and buttons, readable glyphs, wrapping and clear focus |
| Meaningful relief | Peak heights encode available lesson counts; the territory shapes remain editorial navigation |
| Independent modules | Reference content, symbol presentation, region membership, terrain and camera retain separate responsibilities |

See [release validation](VALIDATION_0_25_0.md) for recorded checks and evidence.
