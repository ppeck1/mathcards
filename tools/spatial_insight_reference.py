"""Independent incidence, exact angle, ray-plane and unit-cell references."""
from fractions import Fraction
import math

FIELDS = {
    'platonic-solids': {'solid': (1, 5, True)},
    'tessellation': {'sides': (3, 12, True), 'copies': (2, 6, True)},
    'perspective-projection': {'depth': (2, 10, False), 'width': (1, 4, False), 'focal': (.5, 1.5, False)},
    'sphere-packing': {'packing': (1, 2, True), 'radius': (.5, 1.5, False)},
}

def compute(model, parameters):
    slug = model.removesuffix('-visual-model')
    if slug not in FIELDS:
        return None
    fields = FIELDS[slug]
    if not isinstance(parameters, dict) or set(parameters) != set(fields):
        return {'status': 'invalid_parameters'}
    for key, (low, high, integer) in fields.items():
        value = parameters[key]
        if (type(value) not in (int, float) or not math.isfinite(value)
                or not low <= value <= high or (integer and not float(value).is_integer())):
            return {'status': 'invalid_parameters'}
    if slug == 'platonic-solids':
        # Derive V and E by double-counting incidences of explicitly stated
        # regular faces/vertex degrees, independently of the runtime table.
        face_sides, face_count, degree = [(3, 4, 3), (4, 6, 3), (3, 8, 4),
                                         (5, 12, 3), (3, 20, 5)][int(parameters['solid'])-1]
        edge_count = face_sides * face_count // 2
        vertex_count = 2 * edge_count // degree
        return {'status': 'valid', 'output': face_count, 'faceCount': face_count,
                'edgeCount': edge_count, 'vertexCount': vertex_count,
                'faceSides': face_sides, 'vertexDegree': degree,
                'euler': vertex_count-edge_count+face_count, 'edgeLength': 1}
    if slug == 'tessellation':
        n, q = int(parameters['sides']), int(parameters['copies'])
        # Interior angle from a triangulation's total, with exact rational
        # arithmetic. Zero compatibility is tested without float tolerance.
        angle = Fraction(180*(n-2), n)
        gap = 360-q*angle
        return {'status': 'valid', 'output': float(gap), 'angle': float(angle),
                'sumAngles': float(q*angle), 'gap': float(gap),
                'compatible': int(gap == 0)}
    if slug == 'perspective-projection':
        # Parametric rays P(t)=t*(W/2,0,z) meet plane z=f. Solve the plane
        # intersection for both endpoints using exact rational input values.
        z, width, focal = (Fraction(str(parameters[k])) for k in ('depth', 'width', 'focal'))
        t = focal/z
        plus, minus = t*width/2, -t*width/2
        return {'status': 'valid', 'output': float(plus-minus),
                'imageWidth': float(plus-minus), 'magnification': float(t),
                'halfImage': float(plus), 'halfWidth': float(width/2)}
    radius = parameters['radius']
    fcc = parameters['packing'] == 2
    # One cell has corner spheres shared by eight cubes; face spheres by two.
    # Nearest-center displacement is (a,0,0) in SC and (a/2,a/2,0) in FCC.
    nearest_unit_distance = math.dist((0, 0, 0), (.5, .5, 0) if fcc else (1, 0, 0))
    edge = 2*radius/nearest_unit_distance
    face_centers = 6 if fcc else 0
    occupancy = float(8*Fraction(1, 8)+face_centers*Fraction(1, 2))
    # Integrate a sphere by its circular cross-sections; quadratic Simpson
    # weights integrate the rational coefficient exactly before multiplying pi.
    r = Fraction(str(radius))
    h = 2*r/8
    coefficient = h/3*sum((r*r-(-r+i*h)**2)*(1 if i in (0, 8) else 4 if i%2 else 2) for i in range(9))
    sphere_volume = math.pi*float(coefficient)
    occupied = occupancy*sphere_volume
    cell_volume = edge**3
    fraction = occupied/cell_volume
    return {'status': 'valid', 'output': fraction, 'fraction': fraction,
            'occupancy': occupancy, 'faceCenters': face_centers, 'cornerShare': 1,
            'faceShare': face_centers/2, 'cellEdge': edge,
            'sphereVolume': sphere_volume, 'occupiedVolume': occupied,
            'cellVolume': cell_volume, 'emptyFraction': 1-fraction, 'pi': math.pi}
