"""Parity and determinism checks for projections of the canonical records."""
import copy
import csv
import importlib.util
import json
from pathlib import Path
import re
import sys
import tempfile
import unittest
from jsonschema import Draft202012Validator, FormatChecker

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tools'))
from build import build, load_catalog, catalog_script
from export_boh import canonical, build as build_export
from release import application_version, stamp_template

class PipelineTests(unittest.TestCase):
    def test_workspace_format_schema_and_public_fixture(self):
        schema=json.loads((ROOT/'schemas/workspace.schema.json').read_text(encoding='utf-8'))
        fixture=json.loads((ROOT/'examples/workspace-format-fixture.json').read_text(encoding='utf-8'))
        Draft202012Validator.check_schema(schema)
        validator=Draft202012Validator(schema,format_checker=FormatChecker())
        validator.validate(fixture)
        self.assertEqual(len(fixture['workspaces']),1)
        reversed_slots=copy.deepcopy(fixture)
        reversed_slots['workspaces'][0]['slots'].reverse()
        self.assertFalse(validator.is_valid(reversed_slots),'The saved slot order is part of the portable format')
        unknown_field=copy.deepcopy(fixture)
        unknown_field['workspaces'][0]['slots'][0]['unrecognized_view_override']=True
        self.assertFalse(validator.is_valid(unknown_field),'Unknown slot fields must not bypass the declared format')

    def test_catalog_preserves_complete_source(self):
        catalog=load_catalog()
        for card in catalog['cards']:
            source=json.loads((ROOT/'content/cards'/(card['slug']+'.json')).read_text(encoding='utf-8'))
            self.assertEqual(source,card)
        self.assertEqual(len(catalog['cards']),45)
        self.assertEqual(sum(len(c['examples']) for c in catalog['cards']),229)
        self.assertEqual(sum(len(c['interactive']['expected_cases']) for c in catalog['cards']),430)

    def test_book_roadmap_preserves_topic_identity_and_honest_card_links(self):
        with (ROOT/'docs/BOOK_CONCEPT_ROADMAP.csv').open(encoding='utf-8',newline='') as stream:
            rows=list(csv.DictReader(stream))
        self.assertEqual([row['topic_id'] for row in rows],['MAT-%03d'%n for n in range(1,215)])
        self.assertEqual(sum(int(row['book_count']) for row in rows),217)
        self.assertEqual({book:sum(row[book]!='Not evidenced' for row in rows) for book in ['AV','ML','SSM','SEM']},{'AV':51,'ML':54,'SSM':85,'SEM':27})
        slugs={card['slug'] for card in load_catalog()['cards']}
        for row in rows:
            self.assertTrue(row['title'] and row['domain'] and row['scope_note'])
            self.assertEqual(int(row['book_count']),sum(row[book]!='Not evidenced' for book in ['AV','ML','SSM','SEM']))
            self.assertIn(row['lesson_status'],{'planned','planned-with-precursor','draft-introduction'})
            self.assertTrue(set(filter(None,row['related_cards'].split(';')))<=slugs)
        structural=next(row for row in rows if row['topic_id']=='MAT-150')
        self.assertEqual(structural['lesson_status'],'planned-with-precursor')
        self.assertIn('rule',structural['scope_note'])

    def test_catalog_inline_is_inert(self):
        payload={'cards':[{'title':'</script><img src=x onerror=alert(1)>'}]}
        encoded=catalog_script(payload)
        self.assertNotIn('</script',encoded.lower())
        value=encoded.split('globalThis.AtlasCatalog = ',1)[1].rstrip('\n;')
        self.assertEqual(json.loads(value),payload)

    def test_export_determinism_and_private_boundary(self):
        with tempfile.TemporaryDirectory() as tmp:
            a,b=Path(tmp)/'a',Path(tmp)/'b'
            ma,mb=build_export(a),build_export(b)
            self.assertEqual(ma,mb)
            self.assertEqual(ma['document_count'],274)
            for entry in ma['documents']:
                self.assertEqual((a/entry['path']).read_bytes(),(b/entry['path']).read_bytes())
                self.assertNotIn('notebook',entry['path'])

    def test_standalone_build_determinism(self):
        if not (ROOT/'src/app.js').exists():self.skipTest('App source not yet present')
        with tempfile.TemporaryDirectory() as tmp:
            a,b=Path(tmp)/'a',Path(tmp)/'b'
            ma,mb=build(a),build(b)
            self.assertEqual(ma,mb)
            version=application_version(ROOT)
            self.assertEqual(ma['application_version'],version)
            self.assertEqual(load_catalog()['build_version'],version)
            source=(ROOT/'src/index.html').read_text(encoding='utf-8')
            self.assertEqual(set(re.findall(r'[?&]v=([0-9.]+)',source)),{version})
            self.assertIn('data-application-version>'+version+'<',source)
            html=(a/'index.html').read_text(encoding='utf-8')
            self.assertEqual(html,(b/'index.html').read_text(encoding='utf-8'))
            self.assertIn('data-application-version>'+version+'<',html)
            self.assertNotIn('<!-- ATLAS_',html)
            self.assertNotIn('data-development',html)
            self.assertEqual(len(re.findall(r'<script\b',html,re.I)),1)
            self.assertFalse(re.search(r'<script[^>]+src=',html,re.I))
            self.assertFalse(re.search(r'<link[^>]+rel=[\"\']stylesheet',html,re.I))

if __name__=='__main__':unittest.main()
