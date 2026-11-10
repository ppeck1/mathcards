"""Independent exact-rational signed-product references for neural toy models."""
from fractions import Fraction
import math

FIELDS = {
    'neural-summation': {'excitation': (0, 1), 'inhibition': (0, 1)},
    'receptive-field': {'center': (0, 1), 'surround': (0, 1), 'gain': (0, 2)},
}


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if not isinstance(parameters, dict) or set(parameters) != set(fields):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        value = parameters[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high:
            return {'status': 'invalid_parameters'}
    q = {key: Fraction(str(value)) for key, value in parameters.items()}
    if slug == 'neural-summation':
        # A two-component inner product with an explicitly negative weight.
        products = [q['excitation'] * Fraction(2), q['inhibition'] * -1]
        result = sum(products, Fraction())
        return {'status': 'valid', 'output': float(result), 'netDrive': float(result),
                'gainExcitation': 2, 'gainInhibition': 1,
                'excitatoryDrive': float(products[0]), 'inhibitoryDrive': float(-products[1]),
                'signedInhibition': float(products[1]),
                'balanceExcitation': float(q['inhibition'] / Fraction(2))}
    # Enumerate all five spatial products before summing. This does not use the
    # runtime's collapsed center-minus-total-surround expression.
    stimulus = [q['surround'], q['surround'], q['center'], q['surround'], q['surround']]
    weights = [-q['gain'] / 4, -q['gain'] / 4, Fraction(1), -q['gain'] / 4, -q['gain'] / 4]
    products = [x * weight for x, weight in zip(stimulus, weights)]
    result = sum(products, Fraction())
    return {'status': 'valid', 'output': float(result), 'response': float(result),
            'centerContribution': float(products[2]),
            'surroundEach': float(products[0]),
            'surroundTotal': float(-sum(products[:2] + products[3:], Fraction())),
            'weightSum': float(sum(weights, Fraction())), 'siteCount': 5}
