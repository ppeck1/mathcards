"""Independent bounded number/counting references; never import runtime JS."""
import math
from fractions import Fraction

BOUNDS = {
    'modular-arithmetic': {'total': (0, 60), 'modulus': (2, 12)},
    'greatest-common-divisor': {'first': (1, 60), 'second': (1, 60)},
    'prime-factorization': {'number': (1, 120)},
    'rational-number': {'numerator': (-12, 12), 'denominator': (1, 12)},
    'numeral-system': {'value': (0, 63), 'base': (2, 10)},
    'permutation-count': {'available': (0, 8), 'slots': (0, 8)},
    'binomial-coefficient': {'available': (0, 10), 'chosen': (0, 10)},
}


def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in BOUNDS:
        return None
    bounds = BOUNDS[slug]
    if not isinstance(p, dict) or set(p) != set(bounds):
        return {'status': 'invalid_parameters'}
    if any(type(p[k]) not in (int, float) or not math.isfinite(p[k])
           or p[k] != int(p[k]) or not lo <= p[k] <= hi
           for k, (lo, hi) in bounds.items()):
        return {'status': 'invalid_parameters'}
    p = {k: int(v) for k, v in p.items()}
    if slug == 'permutation-count' and p['slots'] > p['available']:
        return {'status': 'invalid_parameters'}
    if slug == 'binomial-coefficient' and p['chosen'] > p['available']:
        return {'status': 'invalid_parameters'}
    if slug == 'modular-arithmetic':
        _, output = divmod(p['total'], p['modulus'])
    elif slug == 'greatest-common-divisor':
        # Enumerate common divisors, separate from the runtime remainder chain.
        output = max(d for d in range(1, min(p['first'], p['second']) + 1)
                     if p['first'] % d == p['second'] % d == 0)
    elif slug == 'prime-factorization':
        # Sieve all possible primes first, then count divisibility by powers.
        sieve = [True] * 121
        sieve[:2] = [False, False]
        for d in range(2, 11):
            if sieve[d]:
                for multiple in range(d*d, 121, d):
                    sieve[multiple] = False
        output = 0
        for prime in range(2, 121):
            if sieve[prime]:
                power = prime
                while power <= p['number'] and p['number'] % power == 0:
                    output += 1
                    power *= prime
    elif slug == 'rational-number':
        f = Fraction(p['numerator'], p['denominator'])
        return {'status': 'valid', 'output': float(f)}
    elif slug == 'numeral-system':
        # The primary invariant is the represented quantity, independent of base.
        output = p['value']
    elif slug == 'permutation-count':
        output = math.perm(p['available'], p['slots'])
    else:
        output = math.comb(p['available'], p['chosen'])
    return {'status': 'valid', 'output': output}
