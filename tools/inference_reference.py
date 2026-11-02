"""Independent scalar references for the bounded inference lesson families.

These use Python's combinatorics, exact sample enumeration and separate OLS
normal equations. They do not import or execute the JavaScript providers.
"""
from functools import lru_cache
from itertools import product
import math

BOUNDS = {
    'sampling-distribution': {'sampleSize': (1, 4, True)},
    'confidence-interval': {'trueChance': (0, 1, False), 'observed': (0, 8, True)},
    'hypothesis-test': {'observed': (0, 12, True)},
    'linear-regression': {'lastValue': (0, 10, False)},
    'correlation': {'trend': (-2, 2, False), 'scatter': (0, 2, False)},
    'factorial-interaction': {'combined': (2, 14, False)},
    'chi-square-association': {'diagonal': (0, 20, True)},
    'relative-entropy': {'actual': (0, 1, False), 'forecast': (0, 1, False)},
    'binomial-distribution': {'chance': (0, 1, False), 'trials': (1, 20, True), 'count': (0, 20, True)},
    'poisson-distribution': {'rate': (0, 10, False), 'count': (0, 20, True)},
}


def mass(n, p, k):
    if k < 0 or k > n:
        return 0.0
    return math.comb(n, k) * p ** k * (1 - p) ** (n - k)


@lru_cache(maxsize=9)
def confidence_interval(k):
    def cdf(p, stop):
        return math.fsum(mass(8, p, j) for j in range(stop + 1))
    lo, hi = 0.0, 1.0
    if k:
        a, b = 0.0, 1.0
        for _ in range(80):
            mid = (a + b) / 2
            if 1 - cdf(mid, k - 1) < .025:
                a = mid
            else:
                b = mid
        lo = (a + b) / 2
    if k < 8:
        a, b = 0.0, 1.0
        for _ in range(80):
            mid = (a + b) / 2
            if cdf(mid, k) > .025:
                a = mid
            else:
                b = mid
        hi = (a + b) / 2
    return lo, hi


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in BOUNDS:
        return None
    bounds = BOUNDS[slug]
    if not isinstance(parameters, dict) or set(parameters) != set(bounds):
        return {'status': 'invalid_parameters'}
    for key, (low, high, integer) in bounds.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high or integer and value != int(value):
            return {'status': 'invalid_parameters'}
    p = parameters
    if slug == 'sampling-distribution':
        n = int(p['sampleSize'])
        means = [math.fsum(row) / n for row in product((2, 4, 8, 10), repeat=n)]
        output = math.sqrt(math.fsum((x - 6) ** 2 for x in means) / len(means))
    elif slug == 'confidence-interval':
        actual = p['trueChance']
        if 0 < actual < 1 and any(mass(8, actual, k) == 0 for k in range(9)):
            return {'status': 'numeric_precision'}
        output = math.fsum(mass(8, actual, k) for k in range(9) if confidence_interval(k)[0] <= actual <= confidence_interval(k)[1])
    elif slug == 'hypothesis-test':
        output = math.fsum(math.comb(12, k) for k in range(int(p['observed']), 13)) / 4096
    elif slug == 'linear-regression':
        xs, ys = (1, 2, 3, 4, 5), (2, 3, 5, 4, p['lastValue'])
        # Solve the two normal equations by a determinant, not centered arrays.
        output = (5 * math.fsum(x*y for x, y in zip(xs, ys)) - math.fsum(xs) * math.fsum(ys)) / (5 * math.fsum(x*x for x in xs) - math.fsum(xs) ** 2)
    elif slug == 'correlation':
        xs = (1, 2, 3, 4, 5)
        ys = [5 + p['trend'] * (x - 3) + p['scatter'] * z for x, z in zip(xs, (1, -2, 2, -2, 1))]
        y_mean = math.fsum(ys) / 5
        denom = math.sqrt(math.fsum((x-3)**2 for x in xs) * math.fsum((y-y_mean)**2 for y in ys))
        if denom == 0:
            return {'status': 'numeric_precision' if p['trend'] or p['scatter'] else 'undefined_correlation'}
        output = math.fsum((x-3)*(y-y_mean) for x, y in zip(xs, ys)) / denom
    elif slug == 'factorial-interaction':
        output = p['combined'] - 9 - 10 + 12
    elif slug == 'chi-square-association':
        d = p['diagonal']
        # Determinant identity for a 2x2 table with margins 20.
        output = 40 * (d*d-(20-d)**2)**2 / (20**4)
    elif slug == 'relative-entropy':
        actual, forecast = (1-p['actual'], p['actual']), (1-p['forecast'], p['forecast'])
        if any(x > 0 and y == 0 for x, y in zip(actual, forecast)):
            return {'status': 'infinite_divergence'}
        output = max(0, math.fsum(x * (math.log(x) - math.log(y)) / math.log(2) for x, y in zip(actual, forecast) if x > 0))
    elif slug == 'binomial-distribution':
        if 0 < p['chance'] < 1 and any(mass(int(p['trials']), p['chance'], k) == 0 for k in range(int(p['trials']) + 1)):
            return {'status': 'numeric_precision'}
        output = mass(int(p['trials']), p['chance'], int(p['count']))
    elif slug == 'poisson-distribution':
        k = int(p['count'])
        if p['rate'] > 0 and any(math.exp(-p['rate']) * p['rate'] ** j / math.factorial(j) == 0 for j in range(21)):
            return {'status': 'numeric_precision'}
        output = math.exp(-p['rate']) * p['rate'] ** k / math.factorial(k)
    return {'status': 'valid', 'output': output}
