"""Independent coordinate, distance and area checks for four plane lessons."""
import math
from decimal import Decimal, localcontext

FIELDS = {
    'triangle-measurement': {'height': (.5, 4), 'base': (1, 6), 'skew': (-2, 2)},
    'similar-triangles': {'scale': (.25, 2)},
    'perpendicular-bisector': {'radius': (2, 4), 'distance': (2, 4)},
    'ellipse-section': {'major': (3, 5), 'focus': (0, 2), 'angle': (0, 2 * math.pi)},
}


def shoelace(vertices):
    return abs(math.fsum(x * vertices[(i + 1) % len(vertices)][1]
                        - y * vertices[(i + 1) % len(vertices)][0]
                        for i, (x, y) in enumerate(vertices))) / 2


def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if not isinstance(parameters, dict) or set(parameters) != set(fields):
        return {'status': 'invalid_parameters'}
    for key, (low, high) in fields.items():
        v = parameters[key]
        if type(v) not in (int, float) or not math.isfinite(v) or not low <= v <= high:
            return {'status': 'invalid_parameters'}
    p = parameters
    if slug == 'triangle-measurement':
        vertices = [(0, 0), (p['base'], 0), (p['base'] / 2 + p['skew'], p['height'])]
        lengths = [math.dist(vertices[i], vertices[(i + 1) % 3]) for i in range(3)]
        area = shoelace(vertices)
        return {'status': 'valid', 'output': area, 'area': area,
                'apex': vertices[2][0], 'leftSide': lengths[2], 'rightSide': lengths[1],
                'perimeter': math.fsum(lengths)}
    if slug == 'similar-triangles':
        vertices = [(x * p['scale'], y * p['scale']) for x, y in [(0, 0), (3, 0), (0, 4)]]
        area = shoelace(vertices)
        return {'status': 'valid', 'output': area, 'area': area,
                'base': math.dist(vertices[0], vertices[1]),
                'height': math.dist(vertices[0], vertices[2]),
                'hypotenuse': math.dist(vertices[1], vertices[2]),
                'perimeter': math.fsum(math.dist(vertices[i], vertices[(i + 1) % 3]) for i in range(3)),
                'areaFactor': area / 6, 'referenceArea': 6}
    if slug == 'perpendicular-bisector':
        # Circle equations are solved by subtracting them (x=0), then locating
        # the nonnegative root of y^2 + (d/2)^2 = r^2 by bisection.
        half = p['distance'] / 2
        if p['radius'] == half:
            height = 0.
        else:
            # Keep the independent bisection reliable arbitrarily close to
            # tangency: float hypot rounds a band of tiny heights to r.
            # Decimal.from_float interprets the actual finite numeric inputs.
            with localcontext() as ctx:
                ctx.prec = 70
                r = Decimal.from_float(float(p['radius']))
                a = Decimal.from_float(float(p['distance'])) / 2
                low, high = Decimal(0), r
                for _ in range(240):
                    mid = (low + high) / 2
                    if mid * mid + a * a < r * r:
                        low = mid
                    else:
                        high = mid
                height = float((low + high) / 2)
        return {'status': 'valid', 'output': 2 * height, 'separation': 2 * height,
                'height': height, 'halfDistance': half, 'equalDistance': p['radius'],
                'intersectionCount': 1 if height == 0 else 2, 'midpoint': 0}
    # At the top point both focus distances equal a. Solve this independently
    # by bisection, then integrate vertical slices with analytic unit-disk area.
    low, high = 0., p['major']
    for _ in range(80):
        mid = (low + high) / 2
        if math.hypot(p['focus'], mid) < p['major']:
            low = mid
        else:
            high = mid
    minor = (low + high) / 2
    x, y = p['major'] * math.cos(p['angle']), minor * math.sin(p['angle'])
    first = math.dist((x, y), (-p['focus'], 0))
    second = math.dist((x, y), (p['focus'], 0))
    # The linear map from unit disk scales its determinant by a*b.
    area = math.pi * p['major'] * minor
    return {'status': 'valid', 'output': area, 'area': area, 'minor': minor,
            'pointX': x, 'pointY': y, 'firstDistance': first, 'secondDistance': second,
            'distanceSum': first + second, 'stringLength': 2 * p['major'],
            'eccentricity': p['focus'] / p['major'], 'pi': math.pi}
