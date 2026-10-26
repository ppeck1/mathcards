#!/usr/bin/env python3
"""Build inert deterministic Markdown from cards. Does not contact BOH.

Hash policy: source_hash is the upstream card's sorted compact JSON SHA-256;
manifest file_sha256 hashes the final generated UTF-8 file bytes.
"""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSION = '0.2.0'

def canonical(value):
    return json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(',', ':')).encode('utf-8')

def digest(data):
    return hashlib.sha256(data).hexdigest()

def read_cards():
    return [json.loads(p.read_text(encoding='utf-8')) for p in sorted((ROOT/'content/cards').glob('*.json'))]

def scalar(value):
    if isinstance(value, str):
        return value.replace('\n', ' ')
    return json.dumps(value, ensure_ascii=False, sort_keys=True)

def prose(value):
    """Loss-accounted inert field rendering: keys remain visible and values unabridged."""
    if isinstance(value, dict):
        return '\n'.join(f'- {k.replace("_", " ")}: {scalar(v)}' if not isinstance(v, (dict,list))
                         else f'- {k.replace("_", " ")}:\n'+ '\n'.join('  '+s for s in prose(v).splitlines())
                         for k,v in value.items())
    if isinstance(value, list):
        return '\n'.join('- '+scalar(v) if not isinstance(v,(dict,list))
                         else '- Item:\n'+'\n'.join('  '+s for s in prose(v).splitlines()) for v in value)
    return scalar(value)

def header(card, doc_id, title, sources_hash, example_id=None):
    source_hash=digest(canonical(card))
    meta={'id':doc_id,'document_id':doc_id,'type':'reference','document_class':'reference',
          'purpose':card['purpose'],'title':title,'project':'Mathematical Expression Atlas',
          'status':'draft','canonical_layer':'supporting','authority_state':'non_authoritative',
          'review_state':'none','version':card['revision'],'updated':card['updated'],
          'source_hash':source_hash,'provenance':{'mode':'math_atlas_projection_v0_1',
          'card_id':card['id'],'upstream_content_sha256':source_hash,
          'source_registry_sha256':sources_hash,'source_revision':card['revision'],
          'hash_scope':'sorted compact Unicode card JSON; not generated Markdown bytes',
          'exporter_version':VERSION},'topics':['mathematics',*card['branches'],*card['aliases']],
          'rubrix':{'operator_state':'observe','operator_intent':'capture'}}
    if example_id:
        meta['provenance']['example_id']=example_id
    # YAML 1.2 accepts JSON flow objects as values; this avoids a YAML runtime dependency.
    return '---\nboh: '+json.dumps(meta,ensure_ascii=False,sort_keys=True)+'\n---\n\n'

def compact_definition(card):
    d=card['definition']
    return (f"Definition unit {card['id']}; revision {card['revision']}. Setting: {d['setting']} "
            f"Expression: ${d['formal_latex']}$. Conditions required for a defined value (a case may test their violation): "+' '.join(d['conditions'])+
            ' Scope: '+d['domain_notes'])

def source_section(registry):
    return '\n\n'.join(f"- Source ID: {s['id']}. [{s['title']}]({s['url']}). "
                       f"Locator: {s['locator']}. Verification: {s['verification']}. Rights: {s['rights']}"
                       for s in registry)

def used_sources(card, sources):
    ids=set()
    def collect(value):
        if isinstance(value,dict):
            for key,item in value.items():
                if key in ['source_refs','external_source_refs','research_sources']:ids.update(item)
                collect(item)
        elif isinstance(value,list):
            for item in value:collect(item)
    collect(card)
    return [s for s in sources if s['id'] in ids]

def document(card, sources, sources_hash):
    content=header(card,card['id'],card['title'],sources_hash)
    content+=f"# {card['title']}\n\nDraft teaching specimen. A registered interactive renderer is available in the accompanying application; retained source fields describe the original specimen and its pending review.\n\n"
    content+=compact_definition(card)+'\n\n'
    # Every original top-level field is exported, including grammar tree and complete leaves.
    for key,value in card.items():
        content+=f"## {key.replace('_',' ').title()}\n\n{prose(value)}\n\n"
    content+='## Referenced source registry\n\n'+source_section(used_sources(card,sources))+'\n'
    return content.encode('utf-8')

def leaf(card, ex, sources, sources_hash):
    content=header(card,ex['id'],ex['title'],sources_hash,ex['id'])
    content+=f"# {ex['title']}\n\nParent card: {card['id']}; revision {card['revision']}. Original worked draft; independent review pending.\n\n"
    content+=compact_definition(card)+'\n\n'
    content+=(f"Case unit {ex['id']}. Setting: {ex['setting']} Inputs: {scalar(ex['inputs'])}. "
              f"Result: {scalar(ex['result'])}. Limits: {ex['limits']}\n\n")
    content+='## Complete worked case\n\n'+prose(ex)+'\n\n'
    content+='## Written exploration recipe\n\n'+prose(card['interactive'])+'\n\n'
    content+='## Parent-card sources (case derivation provenance is listed above)\n\n'+source_section(used_sources(card,sources))+'\n'
    return content.encode('utf-8')

def build(output=None):
    output=Path(output) if output else ROOT/'export'
    output.mkdir(parents=True,exist_ok=True)
    source_data=json.loads((ROOT/'content/sources.json').read_text(encoding='utf-8'))
    sources=source_data['sources']; sources_hash=digest(canonical(source_data))
    files={}; entries=[]
    for card in read_cards():
        slug=card['slug']
        if not slug or any(c not in 'abcdefghijklmnopqrstuvwxyz0123456789-' for c in slug):
            raise ValueError('unsafe card slug')
        items=[(f'boh/cards/{slug}.md',card['id'],None,document(card,sources,sources_hash))]
        for ex in card['examples']:
            child=ex['id'].rsplit(':',1)[-1]
            if not child or any(c not in 'abcdefghijklmnopqrstuvwxyz0123456789-' for c in child):
                raise ValueError('unsafe example id')
            items.append((f'boh/examples/{slug}--{child}.md',ex['id'],ex['id'],leaf(card,ex,sources,sources_hash)))
        for path,doc_id,example_id,raw in items:
            if path in files: raise ValueError('duplicate generated path')
            files[path]=raw
            entries.append({'path':path,'document_id':doc_id,'card_id':card['id'],
                            'example_id':example_id,'source_revision':card['revision'],
                            'source_sha256':digest(canonical(card)),'file_sha256':digest(raw),
                            'size_bytes':len(raw)})
    manifest={'contract_version':VERSION,'exporter_version':VERSION,
              'boh_source_pin':'aa3d4fcae554a5d39bde0aa7dba1f7ab584854b5',
              'source_registry_sha256':sources_hash,'authority_policy':'draft/supporting/non_authoritative',
              'interaction_policy':'inert textual recipes only; app owns execution',
              'hash_policy':'source_sha256=sorted compact card JSON; file_sha256=generated full UTF-8 bytes',
              'card_count':len(read_cards()),'document_count':len(entries),'documents':entries}
    old=output/'export-manifest.json'
    if old.exists():
        for entry in json.loads(old.read_text())['documents']:
            rel=Path(entry['path']); target=(output/rel).resolve()
            if rel.is_absolute() or '..' in rel.parts or not target.is_relative_to(output.resolve()):
                raise ValueError('unsafe old manifest path')
            if entry['path'] not in files and target.is_file(): target.unlink()
    for name,raw in files.items():
        target=output/name
        if not target.resolve().is_relative_to(output.resolve()): raise ValueError('unsafe output path')
        target.parent.mkdir(parents=True,exist_ok=True); target.write_bytes(raw)
    old.write_text(json.dumps(manifest,ensure_ascii=False,indent=2,sort_keys=True)+'\n',encoding='utf-8')
    return manifest

if __name__=='__main__':
    ap=argparse.ArgumentParser(description=__doc__);ap.add_argument('--output',type=Path)
    from validate_package import validate_for_export
    validate_for_export()
    result=build(ap.parse_args().output)
    print(json.dumps({'cards':result['card_count'],'documents':result['document_count'],'authority':result['authority_policy']}))
