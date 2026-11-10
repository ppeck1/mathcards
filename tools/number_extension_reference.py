"""Independent bounded common-multiple and divisor-pair references."""
import math


FIELDS = {
    'least-common-multiple': {'first': (1, 8), 'second': (1, 8)},
    'perfect-number': {'number': (1, 60)},
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
        if (type(value) not in (int, float) or not math.isfinite(value)
                or not float(value).is_integer() or not low <= value <= high):
            return {'status': 'invalid_parameters'}
    if slug == 'least-common-multiple':
        a, b = int(parameters['first']), int(parameters['second'])
        # Search for the first positive common multiple, independently of the
        # runtime's Euclidean algorithm and product/gcd identity.
        reunion = next(value for value in range(1, a * b + 1)
                       if value % a == 0 and value % b == 0)
        divisor = max(value for value in range(1, min(a, b) + 1)
                      if a % value == 0 and b % value == 0)
        return {
            'status': 'valid', 'output': reunion, 'lcm': reunion,
            'gcd': divisor, 'product': a * b,
            'firstCycles': reunion // a, 'secondCycles': reunion // b,
            'firstTimes': [t for t in range(61) if t % a == 0],
            'secondTimes': [t for t in range(61) if t % b == 0],
            'sharedTimes': [t for t in range(61) if t % a == 0 and t % b == 0],
        }
    number = int(parameters['number'])
    # Pair factors around sqrt(n), instead of the runtime's direct proper-
    # divisor scan. Remove n even when the first pair is (1,n).
    divisors = set()
    for factor in range(1, math.isqrt(number) + 1):
        if number % factor == 0:
            divisors.update((factor, number // factor))
    divisors.discard(number)
    total = sum(divisors)
    return {
        'status': 'valid', 'output': total, 'divisors': sorted(divisors),
        'divisorSum': total, 'balance': total - number,
        'divisorCount': len(divisors),
        'classification': 'deficient' if total < number else 'abundant' if total > number else 'perfect',
    }
