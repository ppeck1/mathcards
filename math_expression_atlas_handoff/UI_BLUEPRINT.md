# Interface and interaction blueprint

This is a design specification, not a rendered application. PRODUCT_SPEC governs behavior; these defaults make the first implementation concrete without requiring another design round.

## Screen structure

| Screen | Main region | Secondary region | Persistent action |
|---|---|---|---|
| Explore | Expressive jobs and available-card tiles | Search/facets, optional local relationship view | Open a card, pin for comparison |
| Card | Central expression, live visual, adjacent controls/results | Symbol inspector, section outline | Capture experiment, compare |
| Workbench | Two independent card/state panels | Aligned assumptions/structure matrix | Link compatible controls, record observation |
| Notebook | Saved observations and experiments | Source/model revision and backup controls | Reopen state, export backup |

At wide widths use a short top navigation and a narrow left section outline on an open card. The experiment area gets most of the width; the meaning/symbol inspector sits beside it. Reading sections below use a readable prose measure rather than filling the entire screen with long lines. Avoid nested scrolling panels for core card content.

At phone widths stack expression, visual, controls, results and short meaning in that order. Replace the outline with a compact section selector. Keep Capture and Compare reachable without obscuring axes or controls. Example reasoning opens inline and returns focus to its trigger when collapsed. Narrow formulas scroll within their own labeled region.

Use a system light/dark appearance, quiet neutral surfaces, one clear accent for the selected state, and a small set of consistently labeled mathematical-role colors. Show patterns with shape/text as well as color. Keep function identities and quantities consistent across the equation, diagram and table. Do not paint every subject branch a different saturated color.

## Open-card anatomy

1. Title and expressive question, e.g. “Function composition — what happens when one operation feeds another?”
2. Formal setting and central expression with an immediately readable sentence.
3. Live visual and controls, with current exact/approximate/invalid outputs.
4. Symbol/role inspector reachable by focus, click or tap. Output symbols have explicit bindings when outside the starter core AST.
5. Meaning and formal definition, always including domain/conditions.
6. Grammar, worked cases, applications, relationships, history and sources, with stable anchors.
7. Optional discovery prompts and capture into the separate notebook.

Review details are inspectable but should not replace the learning surface with a governance dashboard. BOH synchronization information is a secondary utility, not part of every lesson.

## First model: composition

Use f(u)=a u²+b u+c and g(x)=m x+n. Default f(u)=u², g(x)=2x+1, x=3. Show two labeled operation boxes with the intermediate value on the connecting arrow, plus a compact table. A real button switches order. A numeric field accompanies each slider; parameters can be revealed progressively instead of showing seven controls immediately.

| State/action | Expression/visual | Result |
|---|---|---|
| Default, f after g | x=3 → g → 7 → f → 49; AST variant f-after-g | f(g(3))=49 |
| Reverse | x=3 → f → 9 → g → 19; distinct AST variant g-after-f | g(f(3))=19 |
| Make f the identity | f(u)=u; either order yields g(3) | 7 |
| Compare original two orders | Same x and function parameters in both panels | Difference 30, with order labels |
| General typed mismatch example | String length produces Natural; rotation expects R² | Explain missing map; no fabricated vector |

Do not infer that every function order is valid because this numeric model uses real-to-real functions. When order changes, update the selected semantic expression, spoken formula, diagram, intermediate value, table and captured state atomically.

## Logarithm and derivative states

| Case | Required display |
|---|---|
| log₂(8) | 3, with inverse relation 2³=8 |
| log₁⁄₂(8) | −3; decreasing function for bases between zero and one |
| base=1 | Invalid base; no stale current graph/result presented as valid |
| input=0 or negative, real setting | Outside real logarithm domain; no forced zero/complex value |
| base near 1 | Numerical sensitivity diagnostic; declared precision |
| cubic, a=2, h=0.1 | Finite quotient 12.61; analytic derivative 12 |
| cubic, a=2, h=0 | Quotient undefined; analytic derivative still 12 |
| absolute value, a=0 | Right quotient 1; left quotient −1; derivative undefined |

Plots use quantities/units, not unlabeled x/y by habit. Secant and tangent have labels and different line styles. Fallback tables contain the same values and validity states. A graph window may crop a curve but cannot change the function's declared domain.

## Capture and connection flow

Capture freezes the current declared state and outputs. It then opens a small note editor with an optional observation and proposed connection. Let the user save a short note without completing a questionnaire. Suggested details unfold: what changed, what stayed fixed, mapping of roles, counterexample attempted, unresolved conditions.

The notebook schema fixture is synthetic. It demonstrates format only and must never be loaded as an actual personal observation by default. Corpus exports never traverse the notebook store. Restoring a backup first validates the schema and previews conflicts; cancellation leaves storage unchanged.

When the current card/model revision is unavailable, show the preserved state and explanation. Do not recompute with a newer model and label the result reproduced. Reproduction, migration and viewing a saved output are distinct actions.

## Empty and error states

| Condition | Behavior |
|---|---|
| No matching available cards | Explain the filter; optionally expose planned topics separately |
| Missing planned prerequisite | Show complete short bridge plus explicit planned-card status |
| Unknown renderer | Show all written content and unsupported-renderer explanation |
| Invalid parameter | Preserve entered value and state the failed condition; allow correction |
| Storage unavailable/full | Keep unsaved note visible and allow file export |
| Broken historical/source link | Retain bibliographic citation and flag link failure; do not invent content |
| BOH offline/unconfigured | Core library and notebook continue normally |
| Old experiment version absent | Display saved metadata/output and an explicit reproduction limitation |

## Acceptance

Verify the full discovery loop at 360px, with keyboard only, touch, 200% zoom and reduced motion. Test one named screen-reader/browser combination and record its result separately from automated scans. No essential information is hover-only, color-only or embedded only in an animation. MathJax accessibility support is an implementation aid, not automatic certification of the product.
