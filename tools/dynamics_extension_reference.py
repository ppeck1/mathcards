"""Independent references for explicit histories, analytic flows and sphere charts."""
import math

FIELDS={
    'hysteresis':{'steps':(0,80)},
    'gradient-flow':{'time':(0,5),'a':(.25,2),'b':(.25,2)},
    'circle-manifold':{'angle':(-180,180)},
    'sphere-manifold':{'latitude':(-90,90),'longitude':(-180,180)},
    'structural-stability':{'perturbation':(-.5,.5)},
}
CHOICES={'hysteresis':{'history':('up-down','down-up')},'circle-manifold':{'pole':('north','south')},'sphere-manifold':{'pole':('north','south')},'structural-stability':{'family':('hyperbolic','fold')}}

def bisect_root(low, high, bias):
    for _ in range(80):
        mid=(low+high)/2
        if mid**3-mid-bias<0:low=mid
        else:high=mid
    return (low+high)/2

def history(step, direction):
    last=None
    for k in range(step+1):
        bias=-.6+.03*k if k<=40 else .6-.03*(k-40)
        if direction=='down-up':bias=-bias
        turn=1/math.sqrt(3);critical=2/(3*math.sqrt(3));candidates=[]
        if bias<=critical:candidates.append(bisect_root(-2,-turn,bias))
        if bias>=-critical:candidates.append(bisect_root(turn,2,bias))
        last=candidates[0] if last is None else min(candidates,key=lambda x:abs(x-last))
    return last

def compute(model,p):
    slug=model.removesuffix('-visual-model')
    if slug not in FIELDS:return None
    fields=FIELDS[slug];choices=CHOICES.get(slug,{})
    if set(p)!=set(fields)|set(choices):return {'status':'invalid_parameters'}
    for key,(low,high) in fields.items():
        v=p[key]
        if type(v) not in (int,float) or not math.isfinite(v) or not low<=v<=high or (key=='steps' and v!=int(v)):return {'status':'invalid_parameters'}
    if any(type(p[k]) is not str or p[k] not in values for k,values in choices.items()):return {'status':'invalid_parameters'}
    if slug=='hysteresis':output=history(int(p['steps']),p['history'])
    elif slug=='gradient-flow':output=(4*p['a']/math.exp(2*p['a']*p['time'])+p['b']/math.exp(2*p['b']*p['time']))/2
    elif slug in ('circle-manifold','sphere-manifold'):
        angle=p['angle'] if slug=='circle-manifold' else p['latitude']
        if angle==(90 if p['pole']=='north' else -90):return {'status':'outside_chart'}
        if angle==(-90 if p['pole']=='north' else 90):scale=0.
        else:
            half=math.radians((90-angle)/2)
            scale=1/math.tan(half) if p['pole']=='north' else math.tan(half)
        output=scale if slug=='circle-manifold' else abs(scale)
    else:output=1 if p['family']=='hyperbolic' else 0 if p['perturbation']<0 else 1 if p['perturbation']==0 else 2
    return {'status':'valid','output':output}
