"""Parity and determinism checks for projections of the canonical records."""
import copy
import csv
import importlib.util
import json
import math
from pathlib import Path
import re
import sys
import tempfile
import unittest
from jsonschema import Draft202012Validator, FormatChecker

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'tools'))
from build import build, load_catalog, catalog_script
from export_boh import canonical, build as build_export, prose
from release import application_version, stamp_template
from validate_package import compute
from check_generated import artifact_errors

class PipelineTests(unittest.TestCase):
    def test_written_export_keeps_empty_containers_explicit_without_blank_indentation(self):
        self.assertEqual(prose([]), '[]')
        self.assertEqual(prose({}), '{}')
        rendered=prose({'parameters':[], 'metadata':{}, 'nested':[[],{}], 'value':0})
        self.assertIn('- parameters:\n  []',rendered)
        self.assertIn('- metadata:\n  {}',rendered)
        self.assertIn('- value: 0',rendered)
        self.assertEqual(rendered.count('[]'),2)
        self.assertEqual(rendered.count('{}'),2)
        self.assertTrue(all(line==line.rstrip() for line in rendered.splitlines()))

    def test_offline_integrity_rejects_corruption_and_standalone_drift(self):
        import hashlib
        with tempfile.TemporaryDirectory() as tmp:
            root=Path(tmp);(root/'dist').mkdir()
            raw=b'<!doctype html>\n<main>One verified artifact</main>\n'
            (root/'dist/index.html').write_bytes(raw)
            (root/'START_HERE.html').write_bytes(raw)
            (root/'dist/build-manifest.json').write_text(json.dumps({'index_sha256':hashlib.sha256(raw).hexdigest()}),encoding='utf-8')
            self.assertEqual(artifact_errors(root),[])
            (root/'dist/index.html').write_bytes(raw+b'<!-- drift -->')
            self.assertTrue(any('SHA-256' in e for e in artifact_errors(root)))
            self.assertTrue(any('START_HERE' in e for e in artifact_errors(root)))

    def test_tape_reference_clears_binary_place_values_then_increments(self):
        for word,final,halt in [('0101',6,7),('1011',12,8),('1111',16,10),('0000',1,6)]:
            for step in range(11):
                with self.subTest(word=word,step=step):
                    result=compute('turing-machine-visual-model',{'steps':step,'word':word})
                    self.assertEqual(result['status'],'valid')
                    if step<=5:self.assertEqual(result['output'],int(word,2))
                    if step>=halt:self.assertEqual(result['output'],final)
            self.assertEqual(compute('turing-machine-visual-model',{'steps':halt-1,'word':word})['output'],final-2**(halt-6))
        for invalid in [{'steps':True,'word':'1011'},{'steps':1.5,'word':'1011'},{'steps':11,'word':'1011'},{'steps':0,'word':'117'},{'steps':0,'word':1011},{'steps':0}]:
            self.assertEqual(compute('turing-machine-visual-model',invalid)['status'],'invalid_parameters')

    def test_proof_reference_checks_citations_independently_of_truth(self):
        for world in (format(i,'03b') for i in range(8)):
            for plan in ('chain','wrong-conclusion','forward-reference'):
                for step in range(6):
                    expected=step if plan=='chain' else min(step,3)
                    self.assertEqual(compute('proof-visual-model',{'steps':step,'plan':plan,'world':world}),{'status':'valid','output':expected})
        for invalid in [{'steps':True,'plan':'chain','world':'117'},{'steps':.5,'plan':'chain','world':'117'},{'steps':6,'plan':'chain','world':'117'},{'steps':0,'plan':'other','world':'117'},{'steps':0,'plan':'chain','world':117},{'steps':0,'plan':'chain','world':'11'}]:
            self.assertEqual(compute('proof-visual-model',invalid)['status'],'invalid_parameters')

    def test_information_channel_identities_match_direct_joint_sums(self):
        for q,e in [(0,0),(0,1),(1,0),(1,1),(.5,0),(.5,.5),(.5,1),(.5,.1),(.75,.25),(.2,.9)]:
            cells=[[(1-q)*(1-e),(1-q)*e],[q*e,q*(1-e)]]
            px=[1-q,q];py=[math.fsum(row[j] for row in cells) for j in (0,1)]
            conditional=math.fsum(v*math.log2(py[y]/v) for x,row in enumerate(cells) for y,v in enumerate(row) if v>0)
            information=math.fsum(v*math.log2(v/(px[x]*py[y])) for x,row in enumerate(cells) for y,v in enumerate(row) if v>0)
            for observed in ('0','1'):
                p={'bookChance':q,'errorChance':e,'observed':observed}
                with self.subTest(parameters=p):
                    self.assertAlmostEqual(compute('joint-distribution-visual-model',p)['output'],cells[1][1])
                    self.assertAlmostEqual(compute('conditional-entropy-visual-model',p)['output'],conditional)
                    self.assertAlmostEqual(compute('mutual-information-visual-model',p)['output'],information)
        for slug in ('joint-distribution','conditional-entropy','mutual-information'):
            for invalid in [{'bookChance':.5,'errorChance':.1,'observed':'2'},{'bookChance':.5,'errorChance':.1,'observed':1},{'bookChance':True,'errorChance':.1,'observed':'1'},{'bookChance':.5,'errorChance':-.1,'observed':'1'},{'bookChance':.5,'errorChance':.1}]:
                with self.subTest(slug=slug,invalid=invalid):
                    self.assertEqual(compute(slug+'-visual-model',invalid)['status'],'invalid_parameters')

    def test_chance_reference_uses_tail_sums_and_entropy_partition(self):
        # Independent identities check the three-outcome PMF, including its
        # boundary distributions and the binary partition used by the oracle.
        for q,r in [(0,0),(0,1),(1,0),(1,1),(.5,.5),(.5,.75),(1/3,.5),(.999,.001)]:
            p=[(1-q)*(1-r),q,(1-q)*r]
            parameters={'oneChance':q,'twoShare':r}
            with self.subTest(parameters=parameters):
                self.assertTrue(math.isclose(math.fsum(p),1,abs_tol=1e-15))
                self.assertAlmostEqual(compute('probability-distribution-visual-model',parameters)['output'],p[2])
                self.assertAlmostEqual(compute('expected-value-visual-model',parameters)['output'],math.fsum(i*v for i,v in enumerate(p)))
                direct=math.fsum(-v*math.log2(v) for v in p if v>0)
                self.assertAlmostEqual(compute('entropy-visual-model',parameters)['output'],direct)
        for model in ['probability-distribution','expected-value','entropy']:
            for parameters in [{'oneChance':True,'twoShare':.5},{'oneChance':'0.5','twoShare':.5},{'oneChance':-.01,'twoShare':.5},{'oneChance':.5,'twoShare':1.01},{'oneChance':math.inf,'twoShare':.5},{'oneChance':.5}]:
                with self.subTest(model=model,parameters=parameters):
                    self.assertEqual(compute(model+'-visual-model',parameters)['status'],'invalid_parameters')

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
        self.assertEqual(len(catalog['cards']),123)
        self.assertEqual(sum(len(c['examples']) for c in catalog['cards']),619)
        self.assertEqual(sum(len(c['interactive']['expected_cases']) for c in catalog['cards']),2000)

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
        self.assertIn('structural-stability',structural['related_cards'].split(';'))
        self.assertIn('does not define or certify equivalence',structural['scope_note'])
        self.assertIn('all small perturbations',structural['scope_note'])

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
            self.assertEqual(ma['document_count'],742)
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
            import hashlib
            raw=(a/'index.html').read_bytes()
            self.assertNotIn(b'\r\n',raw)
            self.assertEqual(hashlib.sha256(raw).hexdigest(),ma['index_sha256'])
            self.assertEqual(html,(b/'index.html').read_text(encoding='utf-8'))
            self.assertIn('data-application-version>'+version+'<',html)
            self.assertNotIn('<!-- ATLAS_',html)
            self.assertNotIn('data-development',html)
            self.assertEqual(len(re.findall(r'<script\b',html,re.I)),1)
            self.assertFalse(re.search(r'<script[^>]+src=',html,re.I))
            self.assertFalse(re.search(r'<link[^>]+rel=[\"\']stylesheet',html,re.I))

if __name__=='__main__':unittest.main()
