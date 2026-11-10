"""Independent paired-block arithmetic and normal-mean interval references."""
import math
from statistics import NormalDist

FIELDS = {
    'randomized-block-design': {'change': (-4, 4), 'blockSpread': (0, 4)},
    'normal-mean-interval': {'sampleSize': (1, 64), 'mean': (-4, 4), 'sigma': (.25, 2)},
}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if set(parameters) != set(fields) | ({'assignment'} if slug == 'randomized-block-design' else set()):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    if slug == 'normal-mean-interval':
        count = parameters['sampleSize']
        if count != int(count):
            return {'status': 'invalid_parameters'}
        # Quantile from a separate standard-library implementation, rather than
        # copying the JavaScript constant or its interval endpoints.
        margin = NormalDist().inv_cdf(.975) * parameters['sigma'] / math.sqrt(count)
        return {'status': 'valid', 'output': margin}
    if type(parameters['assignment']) is not str or parameters['assignment'] not in ('alternating', 'reversed'):
        return {'status': 'invalid_parameters'}
    shift, spread = parameters['change'], parameters['blockSpread']
    original = [10 - spread, 10, 10 + spread]
    differences = [shift - 1, shift, shift + 1]
    observed = [(a + d) - a for a, d in zip(original, differences)]
    mean = math.fsum(observed) / 3
    if any(d != 0 and observed_d == 0 for d, observed_d in zip(differences, observed)) or shift != 0 and mean == 0:
        return {'status': 'numeric_precision'}
    return {'status': 'valid', 'output': mean}
