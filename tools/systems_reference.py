"""Independent numeric reference for the bounded systems lessons."""
import math

RANGES = {
    'vector-field': {'x': (-2, 2), 'y': (-2, 2), 'rate': (0, 2)},
    'continuous-flow': {'time': (0, 5), 'initial': (-3, 3), 'rate': (0, 2)},
    'basin-attraction': {'initial': (-2, 2), 'time': (0, 5)},
    'fold-bifurcation': {'mu': (-1, 2)},
    'cusp-potential': {'bias': (-1, 1), 'shape': (0, 2)},
    'partial-order': {'a': (0, 7), 'b': (0, 7)},
    'meet-join': {'a': (0, 7), 'b': (0, 7)},
    'lattice-distributivity': {'a': (0, 7), 'b': (0, 7), 'c': (0, 7)},
    'heat-balance': {'heat': (0, 50)},
    'gibbs-free-energy': {'temperature': (100, 600), 'enthalpy': (-4000, 4000), 'entropy': (-10, 10)},
    'ideal-gas': {'volume': (5, 40), 'temperature': (150, 600)},
    'artificial-neuron': {'signal': (-3, 3), 'weight': (-2, 2), 'bias': (-2, 2)},
    'hebbian-learning': {'pre': (0, 1), 'post': (0, 1), 'rate': (0, .2)},
}

def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in RANGES:
        return None
    fields = RANGES[slug]
    if set(p) != set(fields) | ({'operation'} if slug == 'meet-join' else set()):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        v = p[key]
        if type(v) not in (int, float) or not math.isfinite(v) or not low <= v <= high:
            return {'status': 'invalid_parameters'}
        if key in {'a', 'b', 'c'} and slug in {'partial-order', 'meet-join', 'lattice-distributivity'} and int(v) != v:
            return {'status': 'invalid_parameters'}
    if slug == 'vector-field':
        y = math.sqrt((p['rate'] * p['x']) ** 2 + (p['rate'] * p['y']) ** 2)
    elif slug == 'continuous-flow':
        y = p['initial'] / math.exp(p['rate'] * p['time'])
    elif slug == 'basin-attraction':
        x = p['initial']
        y = 0 if x == 0 else math.copysign(1 / math.sqrt(1 + (1 / x ** 2 - 1) / math.exp(2 * p['time'])), x)
    elif slug == 'fold-bifurcation':
        y = 0 if p['mu'] < 0 else 1 if p['mu'] == 0 else 2
    elif slug == 'cusp-potential':
        # Turning-point signs determine real-root count; no runtime Cardano path.
        a, b = p['shape'], p['bias']
        from fractions import Fraction
        delta = 4 * Fraction(a) ** 3 - 27 * Fraction(b) ** 2
        y = 1 if a == b == 0 or delta < 0 else 2 if delta == 0 else 3
    elif slug == 'partial-order':
        y = int(set(i for i in range(3) if int(p['a']) & (1 << i)) <= set(i for i in range(3) if int(p['b']) & (1 << i)))
    elif slug == 'meet-join':
        if p['operation'] not in ('meet', 'join'):
            return {'status': 'invalid_parameters'}
        a, b = ({i for i in range(3) if int(p[k]) & (1 << i)} for k in ('a', 'b'))
        y = len(a & b if p['operation'] == 'meet' else a | b)
    elif slug == 'lattice-distributivity':
        a, b, c = ({i for i in range(3) if int(p[k]) & (1 << i)} for k in ('a', 'b', 'c'))
        assert a & (b | c) == (a & b) | (a & c)
        y = len(a & (b | c))
    elif slug == 'heat-balance':
        q = p['heat']
        y = math.log(((400 - q) * (300 + q)) / 120000)
    elif slug == 'gibbs-free-energy':
        y = math.fsum([p['enthalpy'], -p['temperature'] * p['entropy']])
    elif slug == 'ideal-gas':
        y = 8.31446261815324 * (p['temperature'] / p['volume'])
    elif slug == 'artificial-neuron':
        y = (1 + math.tanh((p['signal'] * p['weight'] + p['bias']) / 2)) / 2
    else:
        y = math.fsum([.2, p['rate'] * p['post'] * p['pre']])
    return {'status': 'valid', 'output': y}
