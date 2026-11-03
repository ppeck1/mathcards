"""Independent covariance, normal-variance interval and normal-test power references."""
from fractions import Fraction
from functools import lru_cache
import math
from statistics import NormalDist


@lru_cache(maxsize=52)
def chi_square_critical(df, probability):
    """Invert the regularized lower gamma series, independently of runtime tables.

    Every summand is positive. Runtime constants were generated with the
    integer/half-integer gamma recurrence instead of this power-series CDF.
    This bounded reference is intentionally limited to the declared table.
    """
    if type(df) is not int or not 5 <= df <= 30 or probability not in (.025, .975):
        raise ValueError('Use the declared degrees of freedom and tail probabilities.')
    shape = df / 2

    def cdf(value):
        if value == 0:
            return 0.
        z = value / 2
        term = total = 1.
        for k in range(1, 500):
            term *= z / (shape + k)
            total += term
            if term <= total * 2e-16:
                break
        return math.exp(shape * math.log(z) - z - math.lgamma(shape + 1)) * total

    low, high = 0., 128.
    for _ in range(75):
        middle = (low + high) / 2
        if cdf(middle) < probability:
            low = middle
        else:
            high = middle
    return (low + high) / 2


FIELDS = {
    'covariance': {'trend': (-2, 2), 'scatter': (0, 2)},
    'normal-variance-interval': {'sampleSize': (6, 31), 'sampleSpread': (.25, 2)},
    'normal-test-power': {'perGroup': (2, 64), 'effect': (0, 2), 'sigma': (.25, 2)},
}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if set(parameters) != set(fields):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    if slug == 'covariance':
        # Construct all paired observations using exact decimal fractions,
        # then center/sum them rather than copying 2.5*trend.
        slope, scatter = Fraction(str(parameters['trend'])), Fraction(str(parameters['scatter']))
        x = list(map(Fraction, range(1, 6)))
        y = [10 + slope * (value - 3) + scatter * residual
             for value, residual in zip(x, (1, -2, 2, -2, 1))]
        mean_x, mean_y = sum(x) / 5, sum(y) / 5
        output = sum((a - mean_x) * (b - mean_y) for a, b in zip(x, y)) / 4
        represented_sum = math.fsum((float(a) - float(mean_x)) * (float(b) - float(mean_y))
                                    for a, b in zip(x, y))
        exact_sum = float(output * 4)
        if slope != 0 and (float(output) == 0 or represented_sum == 0 or
                           abs(represented_sum - exact_sum) > 1e-10 * abs(exact_sum)):
            return {'status': 'numeric_precision'}
        return {'status': 'valid', 'output': float(output)}
    count_key = 'sampleSize' if slug == 'normal-variance-interval' else 'perGroup'
    count = parameters[count_key]
    if count != int(count):
        return {'status': 'invalid_parameters'}
    if slug == 'normal-variance-interval':
        df = int(count) - 1
        upper = df * parameters['sampleSpread'] ** 2 / chi_square_critical(df, .025)
        return {'status': 'valid', 'output': upper}
    standard_error = parameters['sigma'] * math.sqrt(2 / count)
    standardized = parameters['effect'] / standard_error
    output = NormalDist().cdf(standardized - NormalDist().inv_cdf(.95))
    return {'status': 'valid', 'output': output}
