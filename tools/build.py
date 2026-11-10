#!/usr/bin/env python3
"""Compile canonical cards into an offline application and inert BOH projection.

Uses the Python standard library and Node.js for the shared reference compiler.
Run tools/check.py for full JSON Schema
and pinned BOH metadata validation (requirements-checks.txt).
"""
from __future__ import annotations
import argparse
import csv
import hashlib
import json
from pathlib import Path
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(Path(__file__).parent))
from export_boh import build as build_export, canonical, read_cards
from release import application_version, stamp_template
from generated_io import write_generated
from build_continuation_metadata import load_metadata as continuation_metadata, build as build_continuation_metadata

RENDERERS = {
    *{slug+'-visual-model' for slug in continuation_metadata(ROOT)['ids']},
    'function-composition-quadratic-affine',
    'real-logarithm-linked-exponential',
    'derivative-secant-tangent',
    'ratio-scale-proportion','linear-model-tank','exponential-change-resize',
    *{slug+'-visual-model' for slug in ['chaos-theory','fractal-geometry','wave-interference','probability','vector-rotation','pythagorean-theorem','integral-accumulation','quadratic-optimization','complex-multiplication','bayes-theorem','graph-theory','resonance','function','exponentiation','limit','signed-accumulation','vector','inner-product','matrix-linear-map','determinant','linear-combination','basis','matrix-product','chain-rule','partial-derivative','gradient','directional-derivative','tangent-plane','gradient-descent','set','population-sample','computational-complexity','conditional-probability','variance','recurrence','logical-connectives','quantifier','cross-product','stability','relation','equivalence','inference','torque','countability','finite-state-machine','open-set','quantifier-scope','probability-distribution','expected-value','entropy','joint-distribution','conditional-entropy','mutual-information','turing-machine','proof','vector-field','continuous-flow','basin-attraction','fold-bifurcation','cusp-potential','partial-order','meet-join','lattice-distributivity','heat-balance','gibbs-free-energy','ideal-gas','artificial-neuron','hebbian-learning','sampling-distribution','confidence-interval','hypothesis-test','linear-regression','correlation','factorial-interaction','chi-square-association','relative-entropy','binomial-distribution','poisson-distribution']},
}

def load_catalog():
    cards = read_cards()
    sources = json.loads((ROOT/'content/sources.json').read_text(encoding='utf-8'))['sources']
    with (ROOT/'content/coverage.csv').open(encoding='utf-8', newline='') as f:
        coverage = list(csv.DictReader(f))
    ids = [c['id'] for c in cards]
    if len(ids) != len(set(ids)):
        raise ValueError('Duplicate card ID')
    leaves = [e['id'] for c in cards for e in c['examples']]
    if len(leaves) != len(set(leaves)):
        raise ValueError('Duplicate worked-example ID')
    source_ids = {s['id'] for s in sources}
    for card in cards:
        if not re.fullmatch('[a-z0-9-]+', card['slug']):
            raise ValueError('Unsafe card slug')
        model = card['interactive']
        if model['renderer_id'] not in RENDERERS or model['model_id'] != model['renderer_id']:
            raise ValueError('Unknown model or renderer: '+str(model.get('renderer_id')))
        if card['publication_status'] != 'draft':
            raise ValueError('This release only admits draft teaching specimens')
        def refs(value):
            if isinstance(value, dict):
                for k, v in value.items():
                    if k in ('source_refs','external_source_refs','research_sources'):
                        for ref in v:
                            if ref not in source_ids:
                                raise ValueError('Unresolved source reference: '+ref)
                    refs(v)
            elif isinstance(value, list):
                for v in value: refs(v)
        refs(card)
    return {'schema_version':'0.1.0', 'build_version':application_version(ROOT),
            'cards':cards, 'sources':sources, 'coverage':coverage}

def catalog_script(catalog):
    # Escape HTML-sensitive characters so the same projection is safe in an
    # inline classic script and as an external script; no executable content.
    payload = json.dumps(catalog, ensure_ascii=False, sort_keys=True, separators=(',',':'))
    payload = payload.replace('&','\\u0026').replace('<','\\u003c').replace('>','\\u003e')
    payload = payload.replace('\u2028','\\u2028').replace('\u2029','\\u2029')
    return '/* Generated from content/. Do not edit. */\nglobalThis.AtlasCatalog = '+payload+';\n'

def build(output=None, catalog_only=False):
    build_continuation_metadata(root=ROOT)
    catalog = load_catalog()
    src = ROOT/'src'; src.mkdir(parents=True, exist_ok=True)
    catalog_target=src/'catalog.js'; catalog_source=catalog_script(catalog)
    write_generated(catalog_target, catalog_source)
    # Reference-to-card cross-links are deterministic build data. Never scan
    # every card field before the browser can display its first lesson.
    subprocess.run(['node',str(ROOT/'tools/build_math_index.cjs')],cwd=ROOT,check=True)
    # The pinned TeX parser is a build tool only. Ship native MathML data.
    subprocess.run(['node',str(ROOT/'tools/build_mathml.cjs')],cwd=ROOT,check=True,stdout=subprocess.DEVNULL)
    subprocess.run([sys.executable,str(ROOT/'tools/build_subject_inventory.py')],cwd=ROOT,check=True,stdout=subprocess.DEVNULL)
    export = build_export(ROOT/'export')
    if catalog_only:
        return {'cards':len(catalog['cards']), 'examples':sum(len(c['examples']) for c in catalog['cards']),
                'boh_documents':export['document_count'], 'catalog_only':True}
    original_template = (src/'index.html').read_text(encoding='utf-8')
    template = stamp_template(original_template, catalog['build_version'])
    if template != original_template:
        write_generated(src/'index.html', template)
    # The editable source page loads separate assets. The downloadable page
    # embeds those assets instead; loading both would run the app twice and
    # make the supposedly standalone document depend on adjacent files.
    template = re.sub(r'<link\b(?=[^>]*\bdata-development\b)[^>]*>\s*', '', template, flags=re.IGNORECASE)
    template = re.sub(r'<script\b(?=[^>]*\bdata-development\b)[^>]*>.*?</script>\s*', '', template, flags=re.IGNORECASE | re.DOTALL)
    css = '\n'.join((src/name).read_text(encoding='utf-8') for name in ['styles.css','formula.css','experience.css','studio.css','motion.css','life-story.css','calculation-flow.css','scene-inspector.css','semantic-links.css','workspace-panel.css','workspace-library.css','card-previews.css','model-data.css','concept-atlas.css','atlas-landscape.css','atlas-explorer.css','math-index.css','atlas-search.css','subject-inventory.css'])
    js = '\n'.join((src/name).read_text(encoding='utf-8') for name in
                   ['everyday.js','fractal-lens.js','chaos-trace.js','discovery.js','frontier.js','plot-view.js','foundations.js','linear-algebra.js','linear-workflows.js','calculus-fields.js','local-change.js','atlas-gaps.js','data-iteration.js','book-foundations.js','reasoning.js','structures.js','chance-information.js','information-links.js','computation.js','legacy-models.js','systems-models.js','inference-models.js','number-foundations.js','spatial-foundations.js','dynamics-extensions.js','algebra-extensions.js','algorithm-extensions.js','distribution-extensions.js','analysis-extensions.js','discrete-extensions.js','estimation-extensions.js','sampling-extensions.js','design-extensions.js','comparison-extensions.js','number-extensions.js','geometry-extensions.js','number-insights.js','plane-geometry.js','spatial-insights.js','model-registry.js','models.js','catalog.js','notebook.js','visuals.js','spatial.js','module-graphs.js','life-stories.js','discovery-stories.js','frontier-stories.js','foundation-stories.js','linear-algebra-stories.js','linear-workflow-stories.js','calculus-field-stories.js','local-change-stories.js','atlas-gap-stories.js','data-iteration-stories.js','book-foundation-stories.js','reasoning-stories.js','structure-stories.js','chance-information-stories.js','information-link-stories.js','computation-stories.js','systems-stories.js','inference-stories.js','number-foundation-stories.js','spatial-foundation-stories.js','dynamics-extension-stories.js','algebra-extension-stories.js','algorithm-extension-stories.js','distribution-extension-stories.js','analysis-extension-stories.js','discrete-extension-stories.js','estimation-extension-stories.js','sampling-extension-stories.js','design-extension-stories.js','comparison-extension-stories.js','number-extension-stories.js','geometry-extension-stories.js','number-insight-stories.js','plane-geometry-stories.js','spatial-insight-stories.js','story-library.js','experiments.js','scene-input.js','motion.js','readable-values.js','scene-inspector.js','module-registry.js','semantic-links.js','continuation-metadata.js','inference-bindings.js','expansion-bindings.js','symbol-bindings.js','module-ports.js','playground-modules.js','model-data.js','playground.js','workspace-links.js','workspace-panel.js','workspace-store.js','workspace-runtime.js','workspace-library.js','story-links.js','story-scenes.js','story-journey.js','calculation-flow.js','life-story.js','inference-previews.js','number-foundation-previews.js','spatial-foundation-previews.js','dynamics-extension-previews.js','algebra-extension-previews.js','algorithm-extension-previews.js','distribution-extension-previews.js','analysis-extension-previews.js','discrete-extension-previews.js','estimation-extension-previews.js','sampling-extension-previews.js','design-extension-previews.js','comparison-extension-previews.js','number-extension-previews.js','geometry-extension-previews.js','number-insight-previews.js','plane-geometry-previews.js','spatial-insight-previews.js','card-previews.js','concept-atlas.js','atlas-regions.js','atlas-topography.js','atlas-landscape.js','atlas-explorer.js','math-notation.js','math-index.js','math-index-data.js','atlas-search.js','learning-order.js','subject-inventory-data.js','subject-inventory.js','math-display.js','formula-data.js','app.js'])
    if template.count('<!-- ATLAS_STYLES -->') != 1 or template.count('<!-- ATLAS_SCRIPTS -->') != 1:
        raise ValueError('Source template must have one styles and one scripts placeholder')
    if re.search(r'</script', js, re.IGNORECASE):
        raise ValueError('Unexpected closing script tag in JavaScript source')
    html = template.replace('<!-- ATLAS_STYLES -->','<style>\n'+css+'\n</style>')
    html = html.replace('<!-- ATLAS_SCRIPTS -->','<script>\n'+js+'\n</script>')
    output = Path(output) if output else ROOT/'dist'
    output.mkdir(parents=True, exist_ok=True)
    target = output/'index.html'; write_generated(target, html)
    if output.resolve() == (ROOT/'dist').resolve():
        write_generated(ROOT/'START_HERE.html', html)
    manifest = {'application_version':catalog['build_version'],'schema_version':catalog['schema_version'],
                'atlas_presentation':'lesson-count topography; overview fits all territories',
                'cards':len(catalog['cards']),'examples':sum(len(c['examples']) for c in catalog['cards']),
                'boh_documents':export['document_count'],
                'canonical_content_sha256':hashlib.sha256(canonical(catalog)).hexdigest(),
                'index_sha256':hashlib.sha256(target.read_bytes()).hexdigest(),
                'offline':'All app code and content are embedded in index.html.',
                'review_status':'Draft specimens; historical research and independent review remain incomplete.',
                'boh_scope':'Static metadata only. Live ingestion and retrieval unverified.'}
    write_generated(output/'build-manifest.json', json.dumps(manifest,indent=2,sort_keys=True)+'\n')
    return manifest

if __name__ == '__main__':
    p=argparse.ArgumentParser(description=__doc__)
    p.add_argument('--output',type=Path)
    p.add_argument('--catalog-only',action='store_true')
    args=p.parse_args()
    print(json.dumps(build(args.output,args.catalog_only),indent=2))
