"""Independent finite counting references; no runtime imports."""
import itertools
import math

BOUNDS = {
    'graph-coloring': {'palette': (1, 4), 'diagonal': (0, 1)},
    'inclusion-exclusion': {'overlap': (0, 12), 'wood': (0, 12), 'repair': (0, 12)},
}


def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in BOUNDS:
        return None
    fields = BOUNDS[slug]
    if not isinstance(p, dict) or set(p) != set(fields):
        return {'status': 'invalid_parameters'}
    if any(type(p[key]) not in (int, float) or not math.isfinite(p[key])
           or p[key] != int(p[key]) or not low <= p[key] <= high
           for key, (low, high) in fields.items()):
        return {'status': 'invalid_parameters'}
    if slug == 'graph-coloring':
        # Cartesian products of label tuples, independently of runtime base-k decoding.
        edges = {(0, 1), (1, 2), (2, 3), (0, 3)}
        if p['diagonal']:
            edges.add((0, 2))
        count = sum(all(labels[a] != labels[b] for a, b in edges)
                    for labels in itertools.product(range(int(p['palette'])), repeat=4))
        return {'status': 'valid', 'output': count}
    if p['overlap'] > min(p['wood'], p['repair']):
        return {'status': 'invalid_parameters'}
    # Build actual sets of labels rather than applying the runtime subtraction.
    shared = set(range(int(p['overlap'])))
    wood_only = set(range(20, 20 + int(p['wood'] - p['overlap'])))
    repair_only = set(range(40, 40 + int(p['repair'] - p['overlap'])))
    return {'status': 'valid', 'output': len((shared | wood_only) | (shared | repair_only))}
