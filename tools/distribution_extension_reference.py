"""Independent erfc/exponential references and combinatorial paired-sign tails."""
import math

FIELDS = {
    'normal-distribution': {'threshold': (-6, 6), 'mean': (-2, 2), 'sigma': (.25, 2)},
    'exponential-distribution': {'time': (0, 8), 'rate': (.25, 2)},
    'sign-test': {'shift': (-4, 4)},
}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    expected = set(fields) | ({'pattern'} if slug == 'sign-test' else set())
    if set(parameters) != expected:
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    if slug == 'normal-distribution':
        z = (parameters['threshold'] - parameters['mean']) / parameters['sigma']
        if parameters['threshold'] != parameters['mean'] and z == 0:
            return {'status': 'numeric_precision'}
        output = .5 * math.erfc(-z / math.sqrt(2))
    elif slug == 'exponential-distribution':
        if parameters['time'] > 0 and parameters['rate'] * parameters['time'] == 0:
            return {'status': 'numeric_precision'}
        output = -math.expm1(-parameters['rate'] * parameters['time'])
    else:
        if type(parameters['pattern']) is not str or parameters['pattern'] not in ('varied', 'matched'):
            return {'status': 'invalid_parameters'}
        original = [-2, -1, 0, 1, 2, 3] if parameters['pattern'] == 'varied' else [0] * 6
        differences = [value + parameters['shift'] for value in original]
        before = [10, 12, 14, 16, 18, 20]
        if any(difference != 0 and initial + difference == initial
               for initial, difference in zip(before, differences)):
            return {'status': 'numeric_precision'}
        n = sum(value != 0 for value in differences)
        if not n:
            return {'status': 'no_nonzero_pairs'}
        k = sum(value > 0 for value in differences)
        output = sum(math.comb(n, j) for j in range(k, n + 1)) / 2 ** n
    return {'status': 'valid', 'output': output}
