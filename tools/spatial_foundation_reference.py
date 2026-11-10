"""Independent bounded vector references, with exact rational determinants."""
import cmath
import math
from decimal import Decimal, localcontext
from fractions import Fraction

_VECTORS = {k: (-2, 2) for k in ('ux', 'uy', 'uz', 'vx', 'vy', 'vz')}
RANGES = {
    'spatial-cross-product': _VECTORS,
    'scalar-triple-product': {'length': (0, 3), 'width': (0, 3), 'height': (-2, 2), 'shear': (-2, 2)},
    'coordinate-transformation': {'x': (-3, 3), 'y': (-3, 3), 'angle': (-180, 180)},
    'vector-projection': _VECTORS,
    'angular-velocity': {'time': (0, 3), 'radius': (0, 2), 'omega': (-4, 4)},
    'linear-momentum': {'mass': (.5, 5), 'vx': (-3, 3), 'vy': (-3, 3)},
}


def _decimal(value):
    f = Fraction(value)
    return Decimal(f.numerator) / Decimal(f.denominator)


def _norm(values):
    with localcontext() as context:
        context.prec = 120
        return float(sum((_decimal(x) ** 2 for x in values), Decimal(0)).sqrt())


def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in RANGES:
        return None
    if not isinstance(p, dict) or set(p) != set(RANGES[slug]):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in RANGES[slug].items():
        value = p[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    nonzero_exact = False
    if slug == 'spatial-cross-product':
        a, b = ([Fraction(p[prefix + key]) for key in 'xyz'] for prefix in 'uv')
        # Three signed 2x2 minors, independently preserving exact represented inputs.
        minors = [a[1]*b[2]-a[2]*b[1], a[2]*b[0]-a[0]*b[2], a[0]*b[1]-a[1]*b[0]]
        output = _norm(minors)
        nonzero_exact = any(minors)
    elif slug == 'scalar-triple-product':
        # Determinant of the triangular edge matrix; shear and fixed slants vanish.
        determinant = Fraction(p['length']) * Fraction(p['width']) * Fraction(p['height'])
        output = float(determinant)
        nonzero_exact = bool(determinant)
    elif slug == 'coordinate-transformation':
        # Passive change is multiplication by the inverse unit complex rotation.
        output = (complex(p['x'], p['y']) * cmath.exp(-1j * math.radians(p['angle']))).real
    elif slug == 'vector-projection':
        a, b = ([Fraction(p[prefix + key]) for key in 'xyz'] for prefix in 'uv')
        if not any(b):
            return {'status': 'undefined_direction'}
        with localcontext() as context:
            context.prec = 120
            numerator = sum((_decimal(x) * _decimal(y) for x, y in zip(a, b)), Decimal(0))
            denominator = sum((_decimal(y) ** 2 for y in b), Decimal(0)).sqrt()
            output = float(numerator / denominator)
    elif slug == 'angular-velocity':
        magnitude = Fraction(p['radius']) * abs(Fraction(p['omega']))
        output = float(magnitude)
        nonzero_exact = bool(magnitude)
    else:
        momentum = [Fraction(p['mass']) * Fraction(p[key]) for key in ('vx', 'vy')]
        output = _norm(momentum)
        nonzero_exact = any(momentum)
    if output == 0 and nonzero_exact:
        return {'status': 'numeric_precision'}
    return {'status': 'valid', 'output': output}
