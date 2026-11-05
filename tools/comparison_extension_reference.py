"""Independent centered-product and finite signed/label rank references."""
from fractions import Fraction
from itertools import combinations, product
import math

FIELDS = {
    'covariance-matrix': {'shared': (-2, 2), 'horizontal': (.25, 2), 'residual': (0, 2)},
    'wilcoxon-signed-rank': {'lastDifference': (-5, 5)},
    'mann-whitney': {'lastScore': (0, 7), 'scale': (.5, 2)},
}
PATTERNS = {'mixed': (-3, -1, 2, 4), 'tied': (-2, -2, 2, 2), 'positive': (1, 2, 3, 4)}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if set(parameters) != set(fields) | ({'pattern'} if slug == 'wilcoxon-signed-rank' else set()):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    if slug == 'covariance-matrix':
        a, b, c = (parameters[k] for k in ('horizontal', 'shared', 'residual'))
        u, v = (-2, -1, 0, 1, 2), (1, -2, 2, -2, 1)
        # An explicitly stated machine-precision guard is separate from the
        # independent exact centered-observation arithmetic below.
        sxx, sxy, syy = 2.5 * a ** 2, 2.5 * a * b, 2.5 * b ** 2 + 3.5 * c ** 2
        trace, det = sxx + syy, 8.75 * a ** 2 * c ** 2
        major = (trace + math.hypot(sxx - syy, 2 * sxy)) / 2
        xs, ys = [a * x for x in u], [b * x + c * residual for x, residual in zip(u, v)]
        represented_cross = sum(x * y for x, y in zip(xs, ys)) / 4
        if c > 0 and (det == 0 or det / major == 0 or syy == 2.5 * b ** 2 or sxx * syy - sxy * sxy <= 0 or
                      all(y == b * x for x, y in zip(u, ys))):
            return {'status': 'numeric_precision'}
        if b != 0 and (sxy == 0 or represented_cross == 0 or (represented_cross > 0) != (sxy > 0)):
            return {'status': 'numeric_precision'}
        a, b, c = (Fraction(str(parameters[k])) for k in ('horizontal', 'shared', 'residual'))
        xs = [a * x for x in u]
        ys = [b * x + c * residual for x, residual in zip(u, v)]
        mx, my = sum(xs) / 5, sum(ys) / 5
        total_variance = sum((x - mx) ** 2 + (y - my) ** 2 for x, y in zip(xs, ys)) / 4
        return {'status': 'valid', 'output': float(total_variance)}
    if slug == 'wilcoxon-signed-rank':
        name = parameters['pattern']
        if type(name) is not str or name not in PATTERNS:
            return {'status': 'invalid_parameters'}
        value = parameters['lastDifference']
        if value != 0 and 10 + value == 10:
            return {'status': 'numeric_precision'}
        differences = [Fraction(x) for x in PATTERNS[name]] + [Fraction(str(value))]
        differences = [d for d in differences if d != 0]
        magnitudes = list(map(abs, differences))
        # Pairwise less/equal counting supplies each doubled midrank without
        # sorting groups in the runtime implementation's way.
        ranks = [2 * sum(other < value for other in magnitudes) + sum(other == value for other in magnitudes) + 1
                 for value in magnitudes]
        observed = abs(sum(rank if d > 0 else -rank for rank, d in zip(ranks, differences)))
        scores = [sum(sign * rank for sign, rank in zip(signs, ranks))
                  for signs in product((-1, 1), repeat=len(differences))]
        return {'status': 'valid', 'output': sum(abs(score) >= observed for score in scores) / len(scores)}
    last, scale = parameters['lastScore'], parameters['scale']
    raw_float = [1, 3, last, 2, 4, 6]
    scaled = [value * scale for value in raw_float]
    if any(value != 0 and output == 0 for value, output in zip(raw_float, scaled)) or any(
        a != b and scaled[i] == scaled[j] for i, a in enumerate(raw_float) for j, b in enumerate(raw_float)
    ):
        return {'status': 'numeric_precision'}
    values = [Fraction(x) for x in (1, 3)] + [Fraction(str(last))] + [Fraction(x) for x in (2, 4, 6)]

    def doubled_u(selected):
        chosen = set(selected)
        return sum(2 if a > b else 1 if a == b else 0
                   for i, a in enumerate(values) if i in chosen
                   for j, b in enumerate(values) if j not in chosen)

    observed = abs(doubled_u((0, 1, 2)) - 9)
    outcomes = [doubled_u(selected) for selected in combinations(range(6), 3)]
    return {'status': 'valid', 'output': sum(abs(value - 9) >= observed for value in outcomes) / len(outcomes)}
