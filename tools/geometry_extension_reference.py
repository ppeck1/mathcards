"""Independent vertex measurements and cross-section integration references."""
from fractions import Fraction
import math


FIELDS = {
    'regular-polygon': {'radius': (1, 4), 'sides': (3, 12)},
    'sphere-measurement': {'radius': (.25, 5)},
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
                or not low <= value <= high
                or (key == 'sides' and not float(value).is_integer())):
            return {'status': 'invalid_parameters'}
    radius = parameters['radius']
    if slug == 'regular-polygon':
        sides = int(parameters['sides'])
        # Construct unit-angle vertices, then use determinants and Euclidean
        # distances. Do not evaluate the runtime's n R^2 sin(2pi/n)/2 formula.
        vertices = [(radius * math.cos(2 * math.pi * i / sides),
                     radius * math.sin(2 * math.pi * i / sides))
                    for i in range(sides)]
        determinants = [vertices[i][0] * vertices[(i + 1) % sides][1]
                        - vertices[(i + 1) % sides][0] * vertices[i][1]
                        for i in range(sides)]
        lengths = [math.dist(vertices[i], vertices[(i + 1) % sides])
                   for i in range(sides)]
        area = abs(math.fsum(determinants)) / 2
        return {
            'status': 'valid', 'output': area, 'area': area,
            'sideLength': lengths[0], 'perimeter': math.fsum(lengths),
            'apothem': abs(determinants[0]) / lengths[0],
            'centralAngle': math.acos(max(-1, min(1,
                sum(a * b for a, b in zip(vertices[0], vertices[1])) / radius ** 2))),
            'centralAngleDeg': 360 / sides,
            'triangleArea': abs(determinants[0]) / 2,
            'pi': math.pi,
        }
    r = Fraction(str(radius))
    # The disk at height z has squared radius r^2-z^2. Composite Simpson's
    # rule integrates this quadratic exactly; Fraction preserves its rational
    # coefficient before the final multiplication by pi.
    strips = 8
    step = 2 * r / strips
    disk_coefficients = [r * r - (-r + i * step) ** 2 for i in range(strips + 1)]
    coefficient = step / 3 * sum(
        value * (1 if i in (0, strips) else 4 if i % 2 else 2)
        for i, value in enumerate(disk_coefficients))
    volume = math.pi * float(coefficient)
    # Surface-area integration uses the latitude parameter: the surface
    # Jacobian is r^2 sin(phi), whose integral from 0 to pi is 2.
    surface = 2 * math.pi * radius ** 2 * (math.cos(0) - math.cos(math.pi))
    return {
        'status': 'valid', 'output': volume, 'volume': volume,
        'surfaceArea': surface, 'crossSectionArea': math.pi * float(r * r),
        'diameter': float(2 * r), 'pi': math.pi,
    }
