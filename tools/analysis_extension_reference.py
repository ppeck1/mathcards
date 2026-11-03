"""Independent exact-rational references for affine inversion and finite sums."""
from fractions import Fraction
import math

BOUNDS = {
    'inverse-function': {'reading': (-8, 8), 'gain': (-3, 3), 'offset': (-3, 3)},
    'geometric-series': {'ratio': (-1.5, 1.5), 'first': (.25, 4), 'terms': (1, 12)},
}

def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in BOUNDS:
        return None
    if not isinstance(p, dict) or set(p) != set(BOUNDS[slug]):
        return {'status': 'invalid_parameters'}
    if any(type(p[k]) not in (int, float) or not math.isfinite(p[k]) or not lo <= p[k] <= hi
           for k, (lo, hi) in BOUNDS[slug].items()):
        return {'status': 'invalid_parameters'}
    if slug == 'inverse-function':
        if abs(p['gain']) < .25:
            return {'status': 'invalid_parameters'}
        adjusted = Fraction(p['reading']) - Fraction(p['offset'])
        value = adjusted / Fraction(p['gain'])
        if value and float(value) == 0:
            return {'status': 'numeric_precision'}
        return {'status': 'valid', 'output': float(value)}
    if int(p['terms']) != p['terms']:
        return {'status': 'invalid_parameters'}
    a, r, n = Fraction(p['first']), Fraction(p['ratio']), int(p['terms'])
    values = [a * r**k for k in range(n)]
    if any(term and float(term) == 0 for term in values):
        return {'status': 'numeric_precision'}
    value = a*n if r == 1 else a*(1-r**n)/(1-r)
    return {'status': 'valid', 'output': float(value)}
