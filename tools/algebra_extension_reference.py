"""Independent exact-rational/Decimal references for three bounded algebra models."""
from decimal import Decimal, localcontext
from fractions import Fraction
import itertools
import math

BOUNDS = {
    'complex-number': {'imag': (-4, 4), 'real': (-4, 4)},
    'quadratic-equation': {'constant': (-4, 4), 'linear': (-4, 4), 'leading': (.5, 2)},
    'linear-programming': {'budget': (0, 7), 'rateX': (-3, 5), 'rateY': (-3, 5)},
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
    if slug == 'complex-number':
        if any(p[k] != 0 and float(Fraction(p[k]) ** 2) == 0 for k in ('real', 'imag')):
            return {'status': 'numeric_precision'}
        squared = Fraction(p['real']) ** 2 + Fraction(p['imag']) ** 2
        with localcontext() as ctx:
            ctx.prec = 80
            output = float((Decimal(squared.numerator) / Decimal(squared.denominator)).sqrt())
    elif slug == 'quadratic-equation':
        a, b, c = (Fraction(p[k]) for k in ('leading', 'linear', 'constant'))
        disc = b*b - 4*a*c
        if disc != 0 and float(disc) == 0:
            return {'status': 'numeric_precision'}
        if disc < 0:
            output = 0
        elif disc == 0:
            output = 1
        else:
            if float(disc) == 0:
                return {'status': 'numeric_precision'}
            with localcontext() as ctx:
                ctx.prec = 800
                dec = lambda f: Decimal(f.numerator) / Decimal(f.denominator)
                radical = dec(disc).sqrt()
                roots = [(-dec(b)-radical)/(2*dec(a)), (-dec(b)+radical)/(2*dec(a))]
                rounded = [float(x) for x in roots]
                if (any(x != 0 and y == 0 for x, y in zip(roots, rounded)) or rounded[0] == rounded[1]):
                    return {'status': 'numeric_precision'}
            output = 2
    else:
        budget, px, py = (Fraction(p[k]) for k in ('budget', 'rateX', 'rateY'))
        # Enumerate every pair of supporting lines independently of SVG clipping.
        lines = [(1, 0, Fraction(0)), (0, 1, Fraction(0)),
                 (1, 0, Fraction(4)), (0, 1, Fraction(3)), (1, 1, budget)]
        candidates = set()
        for (a, b, c), (d, e, f) in itertools.combinations(lines, 2):
            det = a*e - b*d
            if det:
                x, y = (c*e-b*f)/det, (a*f-c*d)/det
                if 0 <= x <= 4 and 0 <= y <= 3 and x+y <= budget:
                    candidates.add((x, y))
        exact = max(px*x+py*y for x, y in candidates)
        output = float(exact)
        if exact and output == 0:
            return {'status': 'numeric_precision'}
    return {'status': 'valid', 'output': output}
