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
        expected={'apply':2,'log':2,'add':2,'subtract':2,'divide':2,'multiply':2,'power':2,'limit':2}
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
    gap_bounds={
        'set-visual-model':{'maxSize':(0,12),'minSize':(0,12)},
        'population-sample-visual-model':{'lastValue':(0,30),'sampleSize':(1,12),'startIndex':(0,11)},
        'computational-complexity-visual-model':{'costPerItem':(0,10),'itemCount':(1,32)},
    }
    if model in gap_bounds:
        bounds=gap_bounds[model]
        keys=set(bounds)|({'operation'} if model=='set-visual-model' else set())
        if set(p)!=keys or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()):return {'status':'invalid_parameters'}
        if model=='set-visual-model':
            if not isinstance(p['operation'],str) or p['operation'] not in {'intersection','union','difference'}:return {'status':'invalid_parameters'}
            # Integer-bound counting independently checks the runtime's membership filters.
            count_a=math.floor(p['maxSize'])
            lower=max(1,math.ceil(p['minSize']))
            count_b=max(0,13-lower)
            common=max(0,count_a-lower+1)
            output={'intersection':common,'union':count_a+count_b-common,'difference':count_a-common}[p['operation']]
        elif model=='population-sample-visual-model':
            if any(p[key]!=int(p[key]) for key in ['sampleSize','startIndex']):return {'status':'invalid_parameters'}
            population=[8,9,9,10,10,10,11,11,12,12,13,p['lastValue']]
            start=int(p['startIndex']);rotated=population[start:]+population[:start]
            output=math.fsum(rotated[:int(p['sampleSize'])])/p['sampleSize']
        else:
            if p['itemCount']!=int(p['itemCount']):return {'status':'invalid_parameters'}
            # Sum the stipulated cost for each actual inspection instead of multiplying.
            output=math.fsum([p['costPerItem']]*int(p['itemCount']))
        return {'status':'valid','output':output}
    local_bounds={
        'directional-derivative-visual-model':{'x':(-2,2),'y':(-2,2),'a':(-1,1),'b':(-1,1),'c':(0,6),'angleDegrees':(-180,180)},
        'tangent-plane-visual-model':{'x':(-1,1),'y':(-1,1),'a':(-1,1),'b':(-1,1),'c':(0,6),'dx':(-1,1),'dy':(-1,1)},
        'gradient-descent-visual-model':{'startX':(-2,2),'startY':(-2,2),'a':(.25,2),'b':(.25,2),'stepSize':(0,1.5),'iteration':(0,16)},
    }
    if model in local_bounds:
        bounds=local_bounds[model]
        if set(p)!=set(bounds) or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()):return {'status':'invalid_parameters'}
        if model=='gradient-descent-visual-model':
            if p['iteration']!=int(p['iteration']):return {'status':'invalid_parameters'}
            # Closed forms independently check the runtime's repeated gradient updates.
            k=int(p['iteration'])
            x=p['startX']*(1-p['stepSize']*p['a'])**k
            y=p['startY']*(1-p['stepSize']*p['b'])**k
            output=math.fsum([p['a']*x*x,p['b']*y*y])/2
        else:
            field=lambda x,y:math.fsum([p['c'],p['a']*x*x,p['b']*y*y])
            x,y=p['x'],p['y']
            if model=='directional-derivative-visual-model':
                angle=math.radians(p['angleDegrees']);ux,uy=math.cos(angle),math.sin(angle)
                # This centered directional difference is exact for a quadratic.
                output=(field(x+ux,y+uy)-field(x-ux,y-uy))/2
            else:
                horizontal=(field(x+1,y)-field(x-1,y))/2
                vertical=(field(x,y+1)-field(x,y-1))/2
                output=math.fsum([field(x,y),horizontal*p['dx'],vertical*p['dy']])
        return {'status':'valid','output':output}
    calculus_bounds={
        'chain-rule-visual-model':{'x':(-3,3),'a':(-2,2),'b':(-3,3)},
        'partial-derivative-visual-model':{'x':(-2,2),'y':(-2,2),'a':(-1,1),'b':(-1,1),'c':(0,6)},
        'gradient-visual-model':{'x':(-2,2),'y':(-2,2),'a':(-1,1),'b':(-1,1),'c':(0,6)},
    }
    if model in calculus_bounds:
        bounds=calculus_bounds[model]
        if set(p)!=set(bounds) or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()):return {'status':'invalid_parameters'}
        if model=='chain-rule-visual-model':
            # Differentiate the expanded quadratic rather than replaying the two local factors.
            output=math.fsum([2*p['a']**2*p['x'],2*p['a']*p['b']])
        else:
            # A symmetric unit-step difference is exact for this quadratic family.
            field=lambda x,y:math.fsum([p['c'],p['a']*x*x,p['b']*y*y])
            horizontal=(field(p['x']+1,p['y'])-field(p['x']-1,p['y']))/2
            vertical=(field(p['x'],p['y']+1)-field(p['x'],p['y']-1))/2
            output=horizontal if model=='partial-derivative-visual-model' else math.sqrt(horizontal**2+vertical**2)
        return {'status':'valid','output':output}
    workflow_bounds={
        'linear-combination-visual-model':{**{key:(-3,3) for key in ['ux','uy','vx','vy']},'r':(-2,2),'s':(-2,2)},
        'basis-visual-model':{**{key:(-2,2) for key in ['a','b','c','d']},'x':(-3,3),'y':(-3,3)},
        'matrix-product-visual-model':{key:(-2,2) for key in ['a','b','x','y']},
    }
    if model in workflow_bounds:
        bounds=workflow_bounds[model]
        enums={'order':{'B_then_A','A_then_B'}} if model=='matrix-product-visual-model' else {}
        if set(p)!=set(bounds)|set(enums) or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()) or any(not isinstance(p[key],str) or p[key] not in values for key,values in enums.items()):return {'status':'invalid_parameters'}
        if model=='linear-combination-visual-model':
            # Complex coordinates provide an independent weighted-vector representation.
            value=p['r']*complex(p['ux'],p['uy'])+p['s']*complex(p['vx'],p['vy'])
            output=value.real
        elif model=='matrix-product-visual-model':
            # Multiply full matrices, then apply their product, rather than replaying the two maps.
            horizontal=[[1,p['a']],[0,1]];vertical=[[1,0],[p['b'],1]]
            left,right=(horizontal,vertical) if p['order']=='B_then_A' else (vertical,horizontal)
            product=[[math.fsum(left[i][k]*right[k][j] for k in range(2)) for j in range(2)] for i in range(2)]
            output=math.fsum([product[0][0]*p['x'],product[0][1]*p['y']])
        else:
            # Pivoted elimination checks the coordinate solution independently of Cramer's rule.
            rows=[[p['a'],p['b'],p['x']],[p['c'],p['d'],p['y']]]
            if abs(rows[1][0])>abs(rows[0][0]):rows.reverse()
            output=None
            if rows[0][0]:
                factor=rows[1][0]/rows[0][0]
                denominator=rows[1][1]-factor*rows[0][1]
                if denominator:
                    second=(rows[1][2]-factor*rows[0][2])/denominator
                    candidate=(rows[0][2]-rows[0][1]*second)/rows[0][0]
                    if math.isfinite(candidate):output=candidate
        return {'status':'valid','output':output}
    linear_bounds={
        'vector-visual-model':{'x':(-5,5),'y':(-5,5)},
        'inner-product-visual-model':{key:(-4,4) for key in ['ux','uy','vx','vy']},
        'matrix-linear-map-visual-model':{**{key:(-2,2) for key in ['a','b','c','d']},'x':(-3,3),'y':(-3,3)},
        'determinant-visual-model':{key:(-3,3) for key in ['a','b','c','d']},
    }
    if model in linear_bounds:
        bounds=linear_bounds[model]
        if set(p)!=set(bounds) or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()):return {'status':'invalid_parameters'}
        if model=='vector-visual-model':output=math.sqrt(math.fsum([p['x']**2,p['y']**2]))
        elif model=='inner-product-visual-model':
            # Polarization computes the scalar product from squared distances.
            plus=(p['ux']+p['vx'])**2+(p['uy']+p['vy'])**2
            minus=(p['ux']-p['vx'])**2+(p['uy']-p['vy'])**2
            output=(plus-minus)/4
        elif model=='matrix-linear-map-visual-model':output=math.fsum([p['a']*p['x'],p['b']*p['y']])
        else:
            # Signed cross product of the matrix columns via complex arithmetic.
            output=(complex(p['a'],p['c']).conjugate()*complex(p['b'],p['d'])).imag
        return {'status':'valid','output':output}
    foundation_bounds={
        'function-visual-model':{'x':(-5,5),'a':(-3,3),'b':(-5,5)},
        'exponentiation-visual-model':{'base':(-1,3),'exponent':(-3,5)},
        'limit-visual-model':{'a':(-2,2),'h':(.001,1)},
        'signed-accumulation-visual-model':{'time':(0,6),'initial':(-4,4),'rate':(-2,2)},
    }
    if model in foundation_bounds:
        bounds=foundation_bounds[model]
        enums={'mode':{'removable','jump'}} if model=='limit-visual-model' else {'partitions':{'4','8','16','32'}} if model=='signed-accumulation-visual-model' else {}
        if set(p)!=set(bounds)|set(enums) or any(type(p[key]) not in (int,float) or not math.isfinite(p[key]) or not low<=p[key]<=high for key,(low,high) in bounds.items()) or any(p[key] not in values for key,values in enums.items()):
            return {'status':'invalid_parameters'}
        if model=='function-visual-model':
            return {'status':'valid','output':sum([p['a']*p['x'],p['b']])}
        if model=='exponentiation-visual-model':
            if p['base']<=0:return {'status':'invalid_base'}
            return {'status':'valid','output':math.exp(p['exponent']*math.log(p['base']))}
        if model=='limit-visual-model':
            # These are analytic one-sided limits for the declared families,
            # not conclusions obtained by shrinking a finite probe distance.
            return {'status':'valid','output':2*p['a']} if p['mode']=='removable' else {'status':'does_not_exist','output':None}
        # Affine velocity integrates exactly to its endpoint trapezoid,
        # independently of the authored finite left/right rectangle sums.
        start,end=p['initial'],p['initial']+p['rate']*p['time']
        return {'status':'valid','output':p['time']*(start+end)/2}
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
    bounds={
        'ratio-scale-proportion':{'servings':(1,12),'amount':(0,1000),'baseServings':(1,12)},
        'linear-model-tank':{'initial':(0,100),'rate':(0,20),'time':(0,12)},
        'exponential-change-resize':{'initial':(1,2000),'factor':(.25,2),'time':(0,8)},
        'chaos-theory-visual-model':{'rate':(2.5,4),'seed':(.01,.99),'delta':(.000001,.01),'generation':(0,36)},
        'fractal-geometry-visual-model':{'depth':(0,5),'length':(.5,3)},
        'wave-interference-visual-model':{'phase':(0,2*math.pi),'amplitude':(.2,2)},
        'probability-visual-model':{'chance':(0,1)},
        'vector-rotation-visual-model':{'angle':(0,360),'radius':(.5,3)},
        'pythagorean-theorem-visual-model':{'a':(.5,6),'b':(.5,6)},
        'integral-accumulation-visual-model':{'time':(0,6),'rate':(.5,4)},
        'quadratic-optimization-visual-model':{'width':(.5,9.5),'perimeter':(20,30)},
        'complex-multiplication-visual-model':{'real':(-2,2),'imag':(-2,2)},
        'bayes-theorem-visual-model':{'prior':(.01,.99),'sensitivity':(.05,1),'falsePositive':(.01,1)},
        'graph-theory-visual-model':{'bridge':(1,12)},
        'resonance-visual-model':{'frequency':(.2,2),'damping':(.1,.5)},
    }
    if model in bounds:
        spec=bounds[model]
        if set(p)!=set(spec) or any(type(p[k]) not in (int,float) or not math.isfinite(p[k]) or not low<=p[k]<=high for k,(low,high) in spec.items()):
            return {'status':'invalid_parameters'}
        if model=='ratio-scale-proportion':output=p['amount']*p['servings']/p['baseServings']
        elif model=='linear-model-tank':output=p['initial']+p['rate']*p['time']
        elif model=='exponential-change-resize':output=p['initial']*p['factor']**p['time']
        elif model=='chaos-theory-visual-model':
            def value(seed):
                whole=math.floor(p['generation']);fraction=p['generation']-whole
                for _ in range(whole):seed=p['rate']*seed*(1-seed)
                following=p['rate']*seed*(1-seed)
                return seed+(following-seed)*fraction
            output=abs(value(p['seed'])-value(p['seed']+p['delta']))
        elif model=='fractal-geometry-visual-model':
            whole=math.floor(p['depth']);fraction=p['depth']-whole
            output=3*p['length']*(4/3)**whole*(2/3+2*math.sqrt(1/36+fraction*fraction/12))
        elif model=='wave-interference-visual-model':output=2*p['amplitude']*abs(math.cos(p['phase']/2))
        elif model=='probability-visual-model':output=6*p['chance']
        elif model=='vector-rotation-visual-model':output=p['radius']*math.cos(p['angle']*math.pi/180)
        elif model=='pythagorean-theorem-visual-model':output=math.hypot(p['a'],p['b'])
        elif model=='integral-accumulation-visual-model':
            # A linear velocity's integral is exactly its endpoint trapezoid.
            start_velocity=0
            end_velocity=p['rate']*p['time']
            output=(start_velocity+end_velocity)/2*p['time']
        elif model=='quadratic-optimization-visual-model':
            # Complete the square, independently of the renderer's side product.
            half_side=p['perimeter']/4
            output=half_side**2-(p['width']-half_side)**2
        elif model=='complex-multiplication-visual-model':
            output=(complex(2,1)*complex(p['real'],p['imag'])).real
        elif model=='bayes-theorem-visual-model':
            # Posterior odds = prior odds multiplied by the flag likelihood ratio.
            odds=p['prior']/(1-p['prior'])*p['sensitivity']/p['falsePositive']
            output=odds/(1+odds)
        elif model=='graph-theory-visual-model':
            # Dijkstra traverses the actual graph instead of enumerating formula candidates.
            edges={'A':{'B':3,'C':6},'B':{'A':3,'D':7,'C':p['bridge']},
                   'C':{'A':6,'D':2,'B':p['bridge']},'D':{'B':7,'C':2}}
            distances={node:math.inf for node in edges};distances['A']=0
            remaining=set(edges)
            while remaining:
                node=min(remaining,key=lambda item:distances[item]);remaining.remove(node)
                if node=='D':break
                for neighbor,weight in edges[node].items():
                    distances[neighbor]=min(distances[neighbor],distances[node]+weight)
            output=distances['D']
        else:
            # Magnitude of the complex transfer function of the normalized oscillator.
            transfer=1/complex(1-p['frequency']**2,2*p['damping']*p['frequency'])
            output=abs(transfer)
        return {'status':'valid','output':output}
    raise ValueError('unsupported model')

def validate_for_export():
    schema=Draft202012Validator(json.loads((ROOT/'schemas/card.schema.json').read_text(encoding='utf-8')))
    sources=json.loads((ROOT/'content/sources.json').read_text(encoding='utf-8'))['sources']
    source_ids={s['id'] for s in sources}
    with (ROOT/'content/coverage.csv').open(encoding='utf-8') as f:known={r['id'] for r in csv.DictReader(f)}
    cards=read_cards()
    if len({c['id'] for c in cards})!=len(cards):raise ValueError('duplicate card IDs')
    for card in cards:
        errors=checks(card,schema,source_ids,known)
        if errors:raise ValueError(card['id']+': '+json.dumps(errors))

def main():
    schema_data=json.loads((ROOT/'schemas/card.schema.json').read_text(encoding='utf-8'));Draft202012Validator.check_schema(schema_data)
    schema=Draft202012Validator(schema_data)
    notebook_schema=json.loads((ROOT/'schemas/notebook.schema.json').read_text(encoding='utf-8'))
    Draft202012Validator.check_schema(notebook_schema)
    notebook=json.loads((ROOT/'examples/notebook-format-fixture.json').read_text(encoding='utf-8'))
    Draft202012Validator(notebook_schema).validate(notebook)
    sources=json.loads((ROOT/'content/sources.json').read_text(encoding='utf-8'))['sources'];source_ids={s['id'] for s in sources}
    assert len(source_ids)==len(sources)
    with (ROOT/'content/coverage.csv').open(encoding='utf-8') as f:coverage=list(csv.DictReader(f))
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
        bad=copy.deepcopy(next(c for c in cards if c['slug']=='derivative'));mutate(bad)
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
            raw=(a/f"boh/cards/{card['slug']}.md").read_text(encoding='utf-8')
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
