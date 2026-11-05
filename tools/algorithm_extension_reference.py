"""Independent finite search and cable-network references; no runtime JS imports."""
import itertools
import math

BOUNDS = {
    'linear-search': {'steps': (0, 8), 'target': (0, 17)},
    'binary-search': {'steps': (0, 4), 'target': (0, 17)},
    'minimum-spanning-tree': {'ac': (1, 8), 'bd': (1, 8)},
}


def prufer_tree(sequence):
    """Decode the 16 length-two sequences, rather than testing edge triples."""
    degree = [1] * 4
    for value in sequence:
        degree[value] += 1
    edges = []
    for value in sequence:
        leaf = next(i for i, d in enumerate(degree) if d == 1)
        edges.append(tuple(sorted((leaf, value))))
        degree[leaf] -= 1
        degree[value] -= 1
    remaining = [i for i, d in enumerate(degree) if d == 1]
    edges.append(tuple(remaining))
    return edges


def completed_search_cost(binary, target):
    values = list(range(2, 17, 2))
    if not binary:
        return next((i for i, value in enumerate(values, 1) if value == target), len(values))
    # Shrink actual list slices, independently of the runtime index-window loop.
    checks = 0
    while values:
        checks += 1
        middle = (len(values) - 1) // 2
        if values[middle] == target:
            break
        values = values[:middle] if target < values[middle] else values[middle + 1:]
    return checks


def compute(model, p):
    slug = model.removesuffix('-visual-model')
    if slug not in BOUNDS:
        return None
    bounds = BOUNDS[slug]
    if not isinstance(p, dict) or set(p) != set(bounds):
        return {'status': 'invalid_parameters'}
    if any(type(p[key]) not in (int, float) or not math.isfinite(p[key])
           or p[key] != int(p[key]) or not low <= p[key] <= high
           for key, (low, high) in bounds.items()):
        return {'status': 'invalid_parameters'}
    if slug != 'minimum-spanning-tree':
        output = min(p['steps'], completed_search_cost(slug == 'binary-search', p['target']))
    else:
        weights = {(0, 1): 2, (0, 2): p['ac'], (0, 3): 6,
                   (1, 2): 3, (1, 3): p['bd'], (2, 3): 2}
        output = min(sum(weights[edge] for edge in prufer_tree(code))
                     for code in itertools.product(range(4), repeat=2))
    return {'status': 'valid', 'output': output}
