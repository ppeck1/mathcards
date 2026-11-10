"""Independent finite references for number/measurement bridges.

Decimal thresholds use Fraction, square roots use Decimal Newton iteration,
Fibonacci references use a predeclared sequence, and circle measures integrate
the parametrized boundary and polar area analytically.
"""
from decimal import Decimal, localcontext
from fractions import Fraction
import math

DEFAULTS = {
    'irrational-square-root': {'side': 1, 'refinement': 3},
    'golden-ratio': {'shortSide': 1, 'term': 5},
    'circle-measurement': {'radius': 2},
    'floor-ceiling': {'amount': 13.5, 'capacity': 4},
}
DOMAINS = {
    'irrational-square-root': {'side': (.5, 3, False), 'refinement': (1, 8, True)},
    'golden-ratio': {'shortSide': (.5, 3, False), 'term': (2, 12, True)},
    'circle-measurement': {'radius': (.25, 4, False)},
    'floor-ceiling': {'amount': (0, 30, False), 'capacity': (1, 6, False)},
}

def square_root(n):
    with localcontext() as context:
        context.prec = 60
        value = Decimal(n)
        estimate = value
        for _ in range(20):
            estimate = (estimate + value / estimate) / 2
        return float(estimate)

def compute(slug, supplied):
    slug = slug.removesuffix('-visual-model')
    if slug not in DEFAULTS:
        return None
    if not isinstance(supplied, dict) or set(supplied) - set(DEFAULTS[slug]):
        return {'status': 'invalid_parameters'}
    p = dict(DEFAULTS[slug], **supplied)
    for key, (low, high, integer) in DOMAINS[slug].items():
        value = p[key]
        if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value) or not low <= value <= high or (integer and int(value) != value):
            return {'status': 'invalid_parameters'}
    if slug == 'irrational-square-root':
        # Evaluate [1; 2, ..., 2] from its tail, independently of JS forward recurrence.
        ratio = Fraction(2)
        for _ in range(int(p['refinement']) - 2):
            ratio = 2 + 1 / ratio
        ratio = Fraction(1) if p['refinement'] == 1 else 1 + 1 / ratio
        root = square_root(2)
        diagonal = p['side'] * root
        estimate = p['side'] * float(ratio)
        return {'status': 'valid', 'output': diagonal, 'numerator': ratio.numerator, 'denominator': ratio.denominator, 'approximation': float(ratio), 'estimatedDiagonal': estimate, 'signedError': estimate-diagonal, 'pellResidual': ratio.numerator**2-2*ratio.denominator**2}
    if slug == 'golden-ratio':
        sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233]
        k = int(p['term'])
        phi = (1 + square_root(5)) / 2
        return {'status': 'valid', 'output': p['shortSide'] * phi, 'phi': phi, 'fibonacci': sequence[k], 'following': sequence[k+1], 'approximation': sequence[k+1]/sequence[k], 'remainder': p['shortSide']/phi}
    if slug == 'circle-measurement':
        # ∫_0^(2π) ∫_0^r ρ dρ dθ and ∫_0^(2π) r dθ.
        r = p['radius']
        return {'status': 'valid', 'output': 2*math.pi*(r*r/2), 'diameter': 2*r, 'circumference': r*math.tau, 'ratio': math.pi}
    ratio = Fraction(str(p['amount'])) / Fraction(str(p['capacity']))
    full = ratio.numerator // ratio.denominator
    needed = -(-ratio.numerator // ratio.denominator)
    remainder = Fraction(str(p['amount'])) - full * Fraction(str(p['capacity']))
    spare = needed * Fraction(str(p['capacity'])) - Fraction(str(p['amount']))
    return {'status': 'valid', 'output': needed, 'full': full, 'needed': needed, 'remainder': float(remainder), 'spare': float(spare), 'quotient': float(ratio)}
