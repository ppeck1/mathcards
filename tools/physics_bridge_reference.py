"""Independent exact-decimal photon and invariant-clock reference calculations."""
from decimal import Decimal, localcontext
import math

FIELDS = {
    'photon-energy': {'wavelength': (400, 800)},
    'time-dilation': {'speedFraction': (0, .95), 'properDuration': (1, 10)},
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
    with localcontext() as ctx:
        ctx.prec = 65
        c = Decimal('299792458')
        if slug == 'photon-energy':
            h = Decimal('6.62607015e-34')
            conversion = Decimal('1.602176634e-19')
            wavelength = Decimal(str(parameters['wavelength'])) / Decimal(10)**9
            # Energy comes directly from the length-energy product, not from
            # the runtime sequence's frequency followed by a multiplication.
            energy_j = h*c/wavelength
            energy_ev = energy_j/conversion
            values = {'wavelengthM': wavelength, 'frequency': c/wavelength,
                      'energyJ': energy_j, 'energyEV': energy_ev,
                      'output': energy_ev, 'planck': h,
                      'lightSpeed': c, 'joulesPerEV': conversion}
        else:
            beta = Decimal(str(parameters['speedFraction']))
            tau = Decimal(str(parameters['properDuration']))
            # Solve the spacetime interval t²−(beta*t)²=tau² in high precision.
            duration = (tau*tau/(1-beta*beta)).sqrt()
            gamma = duration/tau
            velocity = beta*c
            values = {'gamma': gamma, 'coordinateDuration': duration,
                      'velocity': velocity, 'timeDifference': duration-tau,
                      'displacement': velocity*duration, 'output': duration,
                      'lightSpeed': c}
        return {'status': 'valid', **{key: float(value) for key, value in values.items()}}
