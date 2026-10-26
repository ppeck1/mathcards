#!/usr/bin/env python3
"""Validate the starter contract, references, numeric cases and deterministic export.
AST checking is a narrow structural/reference probe, not a general mathematical
type checker or TeX parser. Does not render TeX, prove theorems, execute app
widgets, or ingest into BOH.
"""
from __future__ import annotations
import copy
import csv
import json
import math
from pathlib import Path
import tempfile
import sys

try:
    from jsonschema import Draft202012Validator
except ImportError:
    raise SystemExit('Install the test dependencies: python -m pip install -r requirements-checks.txt')

from export_boh import ROOT, read_cards, build, canonical, digest

def nested(value,key):
    if isinstance(value,dict):
        for k,v in value.items():
            if k==key: yield from v
            yield from nested(v,key)
    elif isinstance(value,list):
        for v in value: yield from nested(v,key)

def checks(card, schema, source_ids, known):
    errors=[str(list(e.path))+': '+e.message for e in schema.iter_errors(card)]
    if errors: return errors
    ids=[e['id'] for e in card['examples']]
    if len(ids)!=len(set(ids)):errors.append('duplicate example ID')
    for ref in nested(card,'source_refs'):
        if ref not in source_ids:errors.append('unknown source '+ref)
    for ref in nested(card,'external_source_refs'):
        if ref not in source_ids:errors.append('unknown source '+ref)
    for refs in card['prerequisites'].values():
        for ref in refs:
            if ref not in known:errors.append('unregistered prerequisite '+ref)
    for edge in card['connections']:
        if edge['target_status']!='external' and edge['target'] not in known:
            errors.append('unregistered relationship '+edge['target'])
    ast=card['grammar']['ast'];nodes={n['id']:n for n in ast['nodes']};scopes={s['id'] for s in ast['scopes']}
    if len(nodes)!=len(ast['nodes']):errors.append('duplicate local AST node')
    if ast['root'] not in nodes:errors.append('missing AST root')
    references={}
    for n in ast['nodes']:
        refs=[n[k] for k in ['function','argument','base','body','variable'] if k in n]+n.get('arguments',[])
        references[n['id']]=refs
        if any(r not in nodes for r in refs):errors.append('missing AST operand')
        if 'scope_ref' in n and n['scope_ref'] not in scopes:errors.append('missing AST scope')
        if n['kind']=='limit':
            bound=nodes.get(n.get('variable'),{})
            matching=[s for s in ast['scopes'] if s['id']==n.get('scope_ref')]
            if not matching or bound.get('symbol') not in matching[0].get('bound_variables',[]):
                errors.append('limit variable not declared bound in its scope')
            if bound.get('scope_ref')!=n.get('scope_ref'):
                errors.append('limit variable attached to wrong scope')
        expected={'apply':2,'log':2,'add':2,'subtract':2,'divide':2,'limit':2}
        if n['kind'] in expected and len(refs)!=expected[n['kind']]:errors.append('AST arity mismatch')
    def visit(node,active):
        if node in active:errors.append('cyclic AST');return
        for ref in references.get(node,[]):visit(ref,active|{node})
    if ast['root'] in nodes:visit(ast['root'],set())
    inter=card['interactive']
    if inter['expression_id']!=ast['id']:errors.append('interactive expression binding mismatch')
    if inter['model_id']!=inter['renderer_id']:errors.append('unsupported model/renderer binding')
    variant_ids={a['id'] for a in card['grammar'].get('ast_variants',[])}|{ast['id']}
    if inter['renderer_id']=='function-composition-quadratic-affine':
        variants=inter.get('expression_variants',{})
        if set(variants)!={'f_after_g','g_after_f'} or any(a not in variant_ids for a in variants.values()):
            errors.append('missing order-specific expression variant')
        if len(set(variants.values()))!=2:errors.append('composition orders need distinct AST variants')
    control_ids={x['id'] for x in inter['controls']}
    if len(control_ids)!=len(inter['controls']):errors.append('duplicate control')
    for control in inter['controls']:
        if control['type']=='enum' and control['default'] not in control.get('values',[]):errors.append('invalid enum default')
        if control['type']=='number':
            default=control['default']
            if not isinstance(default,(int,float)) or default in control.get('excluded',[]):errors.append('invalid numeric default')
            elif default<control.get('min',-math.inf) or default>control.get('max',math.inf):errors.append('numeric default outside bounds')
    for case in inter['expected_cases']:
        if set(case['input'])!=control_ids:errors.append('fixture input/control mismatch')
        for control in inter['controls']:
            value=case['input'].get(control['id'])
            if control['type']=='enum' and value not in control.get('values',[]):errors.append('invalid fixture enum')
            if control['type']=='number' and isinstance(value,(int,float)):
                invalid=value in control.get('excluded',[]) or value<control.get('min',-math.inf) or value>control.get('max',math.inf)
                if invalid and not case.get('status'):errors.append('invalid fixture value lacks expected failure')
    for h in card['history']['claims']:
        if h['evidence_status'] in ['supported_secondary','primary_inspected'] and not h['source_refs']:
            errors.append('supported history requires source')
        if h.get('date',{}).get('start_year') is not None and h['date'].get('end_year') is not None:
            if h['date']['start_year']>h['date']['end_year']:errors.append('reversed history interval')
    for application in card['applications']:
        if application['example_ref'] not in ids:errors.append('missing application example')
    for prop in card['properties']:
        if prop.get('example_ref') and prop['example_ref'] not in ids:errors.append('missing property example')
    if card['publication_status']!='draft' and card['review_gaps']:
        errors.append('cannot publish specimen with unresolved review gaps')
    return errors

def compute(model,p):
    if model=='function-composition-quadratic-affine':
        f=lambda u:p['a']*u*u+p['b']*u+p['c']
        g=lambda x:p['m']*x+p['n']
        inner,outer=(g,f) if p['order']=='f_after_g' else (f,g)
        intermediate=inner(p['x']);return {'intermediate':intermediate,'output':outer(intermediate)}
    if model=='real-logarithm-linked-exponential':
        b,x=p['base'],p['argument']
        if b<=0 or b==1:return {'status':'invalid_base'}
        if x<=0:return {'status':'undefined_argument'}
        return {'output':math.log(x)/math.log(b)}
    if model=='derivative-secant-tangent':
        a,h=p['a'],p['h']
        if h==0:
            result={'status':'undefined_step'}
            if p['preset']=='cubic':result['analytic']=3*a*a
            elif p['preset']=='linear':result['analytic']=3
            elif a==0:result['analytic_status']='undefined'
            else:result['analytic']=1 if a>0 else -1
            return result
        if p['preset']=='cubic':return {'output':((a+h)**3-a**3)/h,'analytic':3*a*a}
        if p['preset']=='linear':return {'output':((3*(a+h)+1)-(3*a+1))/h,'analytic':3}
        if p['preset']=='absolute':
            r={'output':(abs(a+h)-abs(a))/h}
            if a==0:r['analytic_status']='undefined'
            else:r['analytic']=1 if a>0 else -1
            return r
    raise ValueError('unsupported model')

def validate_for_export():
    schema=Draft202012Validator(json.loads((ROOT/'schemas/card.schema.json').read_text()))
    sources=json.loads((ROOT/'content/sources.json').read_text())['sources']
    source_ids={s['id'] for s in sources}
    with (ROOT/'content/coverage.csv').open() as f:known={r['id'] for r in csv.DictReader(f)}
    cards=read_cards()
    if len({c['id'] for c in cards})!=len(cards):raise ValueError('duplicate card IDs')
    for card in cards:
        errors=checks(card,schema,source_ids,known)
        if errors:raise ValueError(card['id']+': '+json.dumps(errors))

def main():
    schema_data=json.loads((ROOT/'schemas/card.schema.json').read_text());Draft202012Validator.check_schema(schema_data)
    schema=Draft202012Validator(schema_data)
    notebook_schema=json.loads((ROOT/'schemas/notebook.schema.json').read_text())
    Draft202012Validator.check_schema(notebook_schema)
    notebook=json.loads((ROOT/'examples/notebook-format-fixture.json').read_text())
    Draft202012Validator(notebook_schema).validate(notebook)
    sources=json.loads((ROOT/'content/sources.json').read_text())['sources'];source_ids={s['id'] for s in sources}
    assert len(source_ids)==len(sources)
    with (ROOT/'content/coverage.csv').open() as f:coverage=list(csv.DictReader(f))
    known={r['id'] for r in coverage};assert len(known)==len(coverage)
    cards=read_cards();assert len({c['id'] for c in cards})==len(cards)
    cases=0;leaves=[]
    for card in cards:
        problems=checks(card,schema,source_ids,known)
        if problems:raise AssertionError(card['id']+': '+json.dumps(problems))
        leaves.extend(e['id'] for e in card['examples'])
        for case in card['interactive']['expected_cases']:
            result=compute(card['interactive']['model_id'],case['input'])
            for key in ['output','intermediate','analytic','status','analytic_status']:
                if key in case:
                    if isinstance(case[key],(int,float)):
                        assert math.isclose(result[key],case[key],rel_tol=1e-10,abs_tol=1e-10),(key,result,case)
                    else:assert result[key]==case[key],(result,case)
            cases+=1
    assert len(leaves)==len(set(leaves))
    # Reject structural mistakes that schema-only checks cannot detect.
    negative_checks=0
    for mutate in [lambda c:c['grammar']['ast'].__setitem__('root','missing'),
                   lambda c:c['source_refs'].append('source:missing'),
                   lambda c:c['interactive'].__setitem__('renderer_id','untrusted-code'),
                   lambda c:c['interactive'].__setitem__('expression_id','wrong'),
                   lambda c:c['grammar']['ast']['scopes'][1].__setitem__('bound_variables',[]),
                   lambda c:c['grammar']['ast']['nodes'][2].__setitem__('scope_ref','scope:outer'),
                   lambda c:c['interactive']['controls'][0].__setitem__('default','unknown-preset'),
                   lambda c:c['examples'].append(copy.deepcopy(c['examples'][0]))]:
        bad=copy.deepcopy(cards[0]);mutate(bad)
        assert checks(bad,schema,source_ids,known),'negative mutation not caught'
        negative_checks+=1
    for model in ['real-logarithm-linked-exponential']:
        assert compute(model,{'base':-2,'argument':8})['status']=='invalid_base'
        assert compute(model,{'base':2,'argument':-8})['status']=='undefined_argument'
    with tempfile.TemporaryDirectory() as tmp:
        a,b=Path(tmp)/'a',Path(tmp)/'b';ma=build(a);mb=build(b)
        assert ma==mb
        for doc in ma['documents']:
            assert (a/doc['path']).read_bytes()==(b/doc['path']).read_bytes()
            raw=(a/doc['path']).read_bytes();assert digest(raw)==doc['file_sha256']
        for card in cards:
            raw=(a/f"boh/cards/{card['slug']}.md").read_text()
            # Semantic payload leaf strings all survive export; formatting may add labels only.
            def strings(v):
                if isinstance(v,str):yield v.replace('\n',' ')
                elif isinstance(v,dict):
                    for x in v.values():yield from strings(x)
                elif isinstance(v,list):
                    for x in v:yield from strings(x)
            for value in strings(card):assert value in raw,(card['id'],value)
    print(json.dumps({'schema':'JSON Schema 2020-12','cards':len(cards),'leaf_examples':len(leaves),
                      'numeric_cases':cases,'negative_contract_mutations':negative_checks,
                      'planned_inventory_entries':len(coverage),'export_documents':ma['document_count'],
                      'deterministic_export':True,'full_string_payload_preserved':True,
                      'limits':'No TeX rendering, UI, theorem/history review or BOH runtime check.'},indent=2))

if __name__=='__main__':main()
