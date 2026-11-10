#!/usr/bin/env python3
"""Validate an attributed planning inventory and compile inert subject data.

Book-scope evidence is copied from the supplied inventory, not re-certified by
this compiler. A card link is an explicit editorial crosswalk; keyword overlap
never changes a concept's teaching status.
"""
from __future__ import annotations

from collections import Counter
import csv
import hashlib
import io
import json
from pathlib import Path
from generated_io import write_generated
import re

ROOT = Path(__file__).resolve().parents[1]
INVENTORY = Path('content/planning/eight-book-subject-inventory-v1.json')
CROSSWALK = Path('content/planning/eight-book-crosswalk.json')
STATUSES = {'planned', 'precursor', 'draft-introduction'}
EVIDENCE = {'confirmed_scope', 'provisional_book_mapping', 'proposed_bridge'}


def unique(records, label):
    ids = [record['id'] for record in records]
    if len(ids) != len(set(ids)):
        raise ValueError('Duplicate '+label+' identifier')
    return set(ids)


def compile_inventory(root=ROOT):
    raw = (root / INVENTORY).read_bytes()
    inventory = json.loads(raw.decode('utf-8-sig'))
    crosswalk_bytes = (root / CROSSWALK).read_bytes()
    crosswalk = json.loads(crosswalk_bytes.decode('utf-8'))
    if inventory.get('schema_version') != '1.0.0' or crosswalk.get('format_version') != 1:
        raise ValueError('Unsupported subject inventory or crosswalk version')
    books = unique(inventory['books'], 'book')
    subjects = unique(inventory['domains'], 'subject')
    concepts = unique(inventory['concepts'], 'concept')
    sources = unique(inventory['sources'], 'source')
    source_map = {row['id']: row for row in inventory['sources']}
    for source in inventory['sources']:
        if source['book_id'] not in books or not source['url'].startswith('https://'):
            raise ValueError('Invalid attributed inventory source')
    links = crosswalk['links']
    link_ids = [row['concept_id'] for row in links]
    if len(link_ids) != len(set(link_ids)) or set(link_ids) != concepts:
        raise ValueError('Crosswalk must contain exactly one row per inventory concept')
    link_map = {row['concept_id']: row for row in links}
    cards = [json.loads(path.read_text(encoding='utf-8')) for path in (root/'content/cards').glob('*.json')]
    available = {card['slug'] for card in cards}
    rows = []
    mappings = 0
    confirmed = 0
    for concept in inventory['concepts']:
        if not re.fullmatch(r'[a-z0-9-]+', concept['id']):
            raise ValueError('Unsafe subject concept identifier')
        if not concept['domain_ids'] or not set(concept['domain_ids']) <= subjects:
            raise ValueError('Unknown or missing subject domain')
        evidence = concept['book_evidence']
        if not evidence:
            raise ValueError('Missing attributed book evidence')
        if len({row['book_id'] for row in evidence}) != len(evidence):
            raise ValueError('Duplicate concept/book mapping')
        for record in evidence:
            if record['book_id'] not in books or record['evidence_status'] not in EVIDENCE:
                raise ValueError('Unknown book or evidence status')
            if not set(record['source_ids']) <= sources:
                raise ValueError('Unknown evidence source')
            if not record['source_ids'] and not record.get('note', '').strip():
                raise ValueError('An unlinked evidence claim needs its attributed note')
            if any(source_map[s]['book_id'] != record['book_id'] for s in record['source_ids']):
                raise ValueError('Source belongs to a different book')
        mappings += len(evidence)
        confirmed += any(row['evidence_status'] == 'confirmed_scope' for row in evidence)
        link = link_map[concept['id']]
        if link['status'] not in STATUSES:
            raise ValueError('Unknown lesson crosswalk status')
        if len(link['cards']) != len(set(link['cards'])) or not set(link['cards']) <= available:
            raise ValueError('Unknown or duplicate linked lesson')
        if (link['status'] == 'planned') != (len(link['cards']) == 0):
            raise ValueError('Planned rows have no lessons; introductions and precursors require lessons')
        if not link.get('scope_note', '').strip():
            raise ValueError('Every mapping needs a scope boundary')
        rows.append({
            'id': concept['id'], 'label': concept['label'],
            'subjects': concept['domain_ids'], 'evidence': evidence,
            'status': link['status'], 'cards': link['cards'],
            'scopeNote': link['scope_note'],
        })
    actual = {'books': len(books), 'domains': len(subjects),
              'distinct_concept_labels': len(concepts), 'book_topic_mappings': mappings,
              'concepts_with_confirmed_scope': confirmed,
              'provisional_only_concepts': len(concepts)-confirmed}
    if actual != inventory['counts']:
        raise ValueError('Inventory declared counts disagree with actual records')
    return {
        'formatVersion': 1, 'title': inventory['title'],
        'sourceHash': hashlib.sha256(raw).hexdigest(),
        'crosswalkHash': hashlib.sha256(crosswalk_bytes).hexdigest(),
        'provenance': 'User-supplied eight-book planning inventory, dated 2026-11-02; source evidence is attributed, not independently re-audited here.',
        'books': inventory['books'], 'subjects': inventory['domains'],
        'concepts': rows, 'sources': inventory['sources'],
        'bridges': inventory['proposed_cross_domain_bridges'],
        'counts': {**actual, **dict(Counter(row['status'] for row in rows))},
        'verification': inventory['completeness'],
    }


def script(data):
    payload = json.dumps(data, ensure_ascii=False, sort_keys=True, separators=(',', ':'))
    for char, escaped in [('&', '\\u0026'), ('<', '\\u003c'), ('>', '\\u003e'),
                          ('\u2028', '\\u2028'), ('\u2029', '\\u2029')]:
        payload = payload.replace(char, escaped)
    return '/* Generated from content/planning/. Book evidence remains attributed. */\nglobalThis.AtlasSubjectInventoryData = '+payload+';\n'


def progress_matrix(data):
    """Project the whole authorized roadmap without inventing completed coverage."""
    counts = Counter(row['status'] for row in data['concepts'])
    lines = [
        '# Eight-book roadmap progress', '',
        'Generated from the supplied inventory and the authored lesson crosswalk. '
        'This is the full expansion scope. A bounded draft introduction is not '
        'completion of a subject, an independent review or a verified book-page attribution.', '',
        f"{len(data['concepts'])} stable subjects: **{counts['draft-introduction']} bounded draft introductions**, "
        f"**{counts['precursor']} with preparation only**, and **{counts['planned']} planned**.", '',
        'The live site is unchanged. Branch lessons still need the device and independent '
        'review recorded in the release matrix.', '',
        '| Subject area | Draft introductions | Preparation only | Planned |',
        '|---|---:|---:|---:|',
    ]
    for subject in data['subjects']:
        members = [row for row in data['concepts'] if subject['id'] in row['subjects']]
        totals = Counter(row['status'] for row in members)
        lines.append(f"| {subject['label']} | {totals['draft-introduction']} | {totals['precursor']} | {totals['planned']} |")
    lines += ['', 'Subjects can belong to more than one area. Area rows overlap and must not '
              'be added to recover the distinct-subject total.', '',
              '## Build sequence', '',
              'Continue in dependency order through these areas. The lists below include '
              'every currently planned subject once, by its first supplied area; actual '
              'lesson boundaries may group closely related subjects. Status changes require '
              'a working card and an explicit scope note in the crosswalk.', '']
    order = ['notation', 'numbers', 'algebra', 'geometry', 'analysis', 'discrete', 'logic',
             'order', 'probability', 'statistics', 'design', 'information', 'computation',
             'dynamics', 'neuroscience', 'thermodynamics', 'physics', 'history']
    by_id = {subject['id']: subject for subject in data['subjects']}
    for key in order:
        members = [row for row in data['concepts'] if row['subjects'][0] == key and row['status'] == 'planned']
        if not members:
            continue
        lines += ['### ' + by_id[key]['label'], '',
                  '; '.join(row['label'] + ' (`' + row['id'] + '`)' for row in members) + '.', '']
    lines += ['## Qualification still open', '',
              '| Area | Remaining evidence |', '|---|---|',
              '| Mathematics and teaching | Independent model, proof and explanation review; observation with learners |',
              '| Book evidence | Exact-edition and original-page checks; supplied provisional associations remain provisional |',
              '| Browser and phone | Layout, touch, keyboard/focus, reduced motion and screen-reader MathML |',
              '| Startup | Unchanged 1500 ms Node proxy plus later real delivery and first-render review |',
              '| Recovery | Real offline/file opening, private storage, import/export and two-tab behavior |',
              '| Publication | Keep the draft branch separate; no merge or deployment in this expansion task |', '',
              '[Every subject, source state, card link and scope boundary](EIGHT_BOOK_SUBJECT_MATRIX.csv).', '']
    return '\n'.join(lines)


def build(root=ROOT):
    data = compile_inventory(root)
    target = root/'src/subject-inventory-data.js'
    encoded = script(data).encode('utf-8')
    write_generated(target, encoded)
    matrix = io.StringIO(newline='')
    writer = csv.writer(matrix, lineterminator='\n')
    writer.writerow(['concept_id', 'label', 'subject_areas', 'lesson_status', 'linked_cards',
                     'book_ids', 'book_evidence_statuses', 'scope_boundary'])
    for row in data['concepts']:
        writer.writerow([row['id'], row['label'], ';'.join(row['subjects']), row['status'],
                         ';'.join(row['cards']), ';'.join(record['book_id'] for record in row['evidence']),
                         ';'.join(record['book_id']+':'+record['evidence_status'] for record in row['evidence']),
                         row['scopeNote']])
    matrix_target = root/'docs/EIGHT_BOOK_SUBJECT_MATRIX.csv'
    matrix_bytes = matrix.getvalue().encode('utf-8')
    write_generated(matrix_target, matrix_bytes)
    write_generated(root/'docs/ROADMAP_PROGRESS.md', progress_matrix(data))
    return data['counts']


if __name__ == '__main__':
    print(json.dumps(build(), sort_keys=True))
