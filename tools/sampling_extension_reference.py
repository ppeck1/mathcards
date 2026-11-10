"""Independent finite-assignment, sample-mean and one-way ANOVA references."""
from fractions import Fraction
from functools import lru_cache
from itertools import combinations
import math


@lru_cache(maxsize=30)
def student_critical(df):
    """Invert the CDF using the analytic integer-power cosine recurrence.

    This does not copy the runtime quantile table or the quadrature used to
    generate it. Substitution t=sqrt(df)*tan(theta) gives an integral of
    cos(theta)**(df-1), whose antiderivative obeys integration by parts.
    """
    coefficient = math.exp(math.lgamma((df + 1) / 2) - math.lgamma(df / 2)) / math.sqrt(math.pi)

    def cdf(t):
        theta = math.atan(t / math.sqrt(df))
        sine, cosine = math.sin(theta), math.cos(theta)
        degree = df - 1
        integrals = [theta, sine]
        for power in range(2, degree + 1):
            integrals.append(sine * cosine ** (power - 1) / power + (power - 1) * integrals[power - 2] / power)
        return .5 + coefficient * integrals[degree]

    low, high = 0., 16.
    for _ in range(70):
        middle = (low + high) / 2
        if cdf(middle) < .975:
            low = middle
        else:
            high = middle
    return (low + high) / 2


FIELDS = {
    'student-mean-interval': {'sampleSize': (2, 31), 'mean': (-4, 4), 'sampleSpread': (.25, 2)},
    'randomization-distribution': {'lastValue': (0, 10)},
    'one-way-anova': {'separation': (0, 4), 'spread': (.25, 2)},
}
ALLOCATIONS = {'separated': (0, 1, 2, 3), 'alternating': (0, 2, 4, 6), 'mixed': (0, 3, 5, 6)}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if set(parameters) != set(fields) | ({'allocation'} if slug == 'randomization-distribution' else set()):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    if slug == 'student-mean-interval':
        count = parameters['sampleSize']
        if count != int(count):
            return {'status': 'invalid_parameters'}
        margin = student_critical(int(count) - 1) * parameters['sampleSpread'] / math.sqrt(count)
        return {'status': 'valid', 'output': margin}
    if slug == 'randomization-distribution':
        name = parameters['allocation']
        if type(name) is not str or name not in ALLOCATIONS:
            return {'status': 'invalid_parameters'}
        values = list(map(Fraction, range(1, 8))) + [Fraction(str(parameters['lastValue']))]

        def statistic(indices):
            selected = set(indices)
            return (sum(v for i, v in enumerate(values) if i not in selected) - sum(values[i] for i in selected)) / 4

        observed = abs(statistic(ALLOCATIONS[name]))
        count = sum(abs(statistic(indices)) >= observed for indices in combinations(range(8), 4))
        return {'status': 'valid', 'output': count / 70}
    separation, spread = parameters['separation'], parameters['spread']
    # Reconstruct the nine outcomes; obtain sums of squares from observations,
    # rather than copying the runtime closed forms.
    groups = [[10 + offset + deviation for deviation in (-spread, 0, spread)] for offset in (-separation, 0, separation)]
    means = [math.fsum(group) / len(group) for group in groups]
    grand = math.fsum(value for group in groups for value in group) / 9
    between = math.fsum(len(group) * (mean - grand) ** 2 for group, mean in zip(groups, means))
    within = math.fsum((value - mean) ** 2 for group, mean in zip(groups, means) for value in group)
    if separation != 0 and (between == 0 or any(mean == grand for mean in (means[0], means[2]))):
        return {'status': 'numeric_precision'}
    return {'status': 'valid', 'output': (between / 2) / (within / 6)}
