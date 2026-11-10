"""Independent joint-law and parity-matrix references for communication bridges."""
from decimal import Decimal, localcontext
import itertools
import math

DEFAULTS = {
    'channel-capacity': {'errorChance': .1, 'inputChance': .25},
    'hamming-code': {'flippedBit': 3, 'dataWord': 5},
}
BOUNDS = {
    'channel-capacity': {'errorChance': (0, 1, False), 'inputChance': (0, 1, False)},
    'hamming-code': {'flippedBit': (0, 7, True), 'dataWord': (0, 15, True)},
}
H = ((1, 0, 1, 0, 1, 0, 1), (0, 1, 1, 0, 0, 1, 1), (0, 0, 0, 1, 1, 1, 1))


def checks(bits):
    return [sum(bit * coefficient for bit, coefficient in zip(bits, row)) % 2 for row in H]


CODEWORDS = [bits for bits in itertools.product((0, 1), repeat=7) if checks(bits) == [0, 0, 0]]


def mutual_information(q, p):
    """Sum joint probability log joint/(row*column), independently of H(Y)-H(Y|X)."""
    with localcontext() as context:
        context.prec = 80
        p, q = Decimal(str(p)), Decimal(str(q))
        joint = (((1-q)*(1-p), (1-q)*p), (q*p, q*(1-p)))
        rows = [sum(row) for row in joint]
        columns = [sum(joint[x][y] for x in range(2)) for y in range(2)]
        result = Decimal(0)
        for x in range(2):
            for y in range(2):
                mass = joint[x][y]
                if mass:
                    result += mass * (mass/(rows[x]*columns[y])).ln()/Decimal(2).ln()
        return float(result)


def entropy(probability):
    with localcontext() as context:
        context.prec = 80
        p = Decimal(str(probability))
        return float(-sum(x*x.ln()/Decimal(2).ln() for x in (p, 1-p) if x))


def compute(model, supplied):
    slug = model.removesuffix('-visual-model')
    if slug not in DEFAULTS:
        return None
    if not isinstance(supplied, dict) or set(supplied) - set(DEFAULTS[slug]):
        return {'status': 'invalid_parameters'}
    p = {**DEFAULTS[slug], **supplied}
    for key, (low, high, whole) in BOUNDS[slug].items():
        value = p[key]
        if type(value) not in (int, float) or not math.isfinite(value) or not low <= value <= high or (whole and int(value) != value):
            return {'status': 'invalid_parameters'}
    if slug == 'channel-capacity':
        capacity = mutual_information(.5, p['errorChance'])
        information = mutual_information(p['inputChance'], p['errorChance'])
        output_chance = p['errorChance'] + p['inputChance']*(1-2*p['errorChance'])
        return {'status': 'valid', 'output': capacity, 'capacity': capacity,
                'mutualInformation': information, 'noiseEntropy': entropy(p['errorChance']),
                'outputChance': output_chance, 'outputEntropy': entropy(output_chance),
                'inputEntropy': entropy(p['inputChance']), 'unusedCapacity': capacity-information}
    data = format(int(p['dataWord']), '04b')
    encoded = next(bits for bits in CODEWORDS if ''.join(str(bits[i]) for i in (2, 4, 5, 6)) == data)
    received = list(encoded)
    if p['flippedBit']:
        received[int(p['flippedBit'])-1] = 1-received[int(p['flippedBit'])-1]
    syndrome_bits = checks(received)
    syndrome = sum(bit*weight for bit, weight in zip(syndrome_bits, (1, 2, 4)))
    # Decode by nearest codeword rather than repeating the JS syndrome repair.
    distances = [(sum(a != b for a, b in zip(received, word)), word) for word in CODEWORDS]
    minimum = min(distance for distance, _ in distances)
    nearest = [word for distance, word in distances if distance == minimum]
    assert len(nearest) == 1 and minimum <= 1
    corrected = nearest[0]
    recovered = ''.join(str(corrected[i]) for i in (2, 4, 5, 6))
    return {'status': 'valid', 'output': syndrome, 'syndrome': syndrome,
            'checkOne': syndrome_bits[0], 'checkTwo': syndrome_bits[1], 'checkFour': syndrome_bits[2],
            'encodedWord': ''.join(map(str, encoded)), 'receivedWord': ''.join(map(str, received)),
            'correctedWord': ''.join(map(str, corrected)), 'dataBits': data,
            'recoveredData': recovered, 'recoveredWord': int(recovered, 2),
            'correctionCount': minimum}
