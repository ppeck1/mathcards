(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPhysicsBridgeStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const stories = [
    {
      id: 'story:physics-bridge:photon-energy',
      slug: 'photon-energy',
      scene: 'photon-energy-physics-bridge-scene',
      unit: 'eV',
      title: 'What changes when a light-source photon has a shorter wavelength?',
      question: 'What changes when a light-source photon has a shorter wavelength?',
      eyebrow: 'One physical relation, connected quantities',
      presentation: {
        compact: true,
        controlHint:
          'Follow a selected physical quantity from the story into the formula and its measured mark.'
      },
      summary:
        'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
      context:
        'A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.',
      variables: [
        {
          key: 'wavelength',
          label: 'Vacuum wavelength λ',
          symbol: 'λ',
          min: 400,
          max: 800,
          step: 1,
          unit: 'nm'
        }
      ],
      parameters: { wavelength: 550 },
      timeline: { key: 'wavelength', from: 400, to: 800, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Choose the physical model',
          body: 'A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.',
          formula: 'f=\\frac{c}{\\lambda},\\quad E_J=hf,\\quad E=\\frac{E_J}{u}.',
          focusLabel: 'The physical model',
          focusDescription:
            'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Choose one vacuum wavelength',
          body: 'The same physical wavelength is expressed in two units. The horizontal wave period follows the nanometre ruler; the wave height carries no energy scale.',
          formula: 'λ = {{wavelength}} nm ≈ {{wavelengthM}} m',
          focusLabel: 'Choose one vacuum wavelength',
          focusDescription:
            'The same physical wavelength is expressed in two units. The horizontal wave period follows the nanometre ruler; the wave height carries no energy scale.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow wavelength into frequency and joule energy',
          body: 'Use c divided by wavelength in metres. Multiplying that frequency by Planck’s constant gives the energy of one photon in joules.',
          formula: 'f ≈ {{frequency}} Hz; E_J ≈ {{energyJ}} J',
          focusLabel: 'Follow wavelength into frequency and joule energy',
          focusDescription:
            'Use c divided by wavelength in metres. Multiplying that frequency by Planck’s constant gives the energy of one photon in joules.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the same energy in electronvolts',
          body: 'Divide by the exact number of joules per electronvolt. The green bar shows energy per photon on the same fixed 0–3.5 electronvolt scale for every wavelength.',
          formula: 'E ≈ {{energyJ}} / {{joulesPerEV}} ≈ {{output}} eV',
          focusLabel: 'Read the same energy in electronvolts',
          focusDescription:
            'Divide by the exact number of joules per electronvolt. The green bar shows energy per photon on the same fixed 0–3.5 electronvolt scale for every wavelength.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Choose one vacuum wavelength',
          template: 'λ = {{wavelength}} nm ≈ {{wavelengthM}} m',
          description:
            'The same physical wavelength is expressed in two units. The horizontal wave period follows the nanometre ruler; the wave height carries no energy scale.'
        },
        {
          role: 'intermediate',
          label: 'Follow wavelength into frequency and joule energy',
          template: 'f ≈ {{frequency}} Hz; E_J ≈ {{energyJ}} J',
          description:
            'Use c divided by wavelength in metres. Multiplying that frequency by Planck’s constant gives the energy of one photon in joules.'
        },
        {
          role: 'output',
          label: 'Read the same energy in electronvolts',
          template: 'E ≈ {{energyJ}} / {{joulesPerEV}} ≈ {{output}} eV',
          description:
            'Divide by the exact number of joules per electronvolt. The green bar shows energy per photon on the same fixed 0–3.5 electronvolt scale for every wavelength.'
        }
      ],
      assumptions: [
        'Vacuum wavelength is 400–800 nanometres. Substitute that same wavelength in metres in f=c/λ. The physical model is one ideal monochromatic photon obeying E_J=hf, with exact SI c=299792458 m/s and h=6.62607015×10⁻³⁴ J·s, and exact u=1.602176634×10⁻¹⁹ J/eV. The oscillation indicates wavelength only: its height is arbitrary and represents neither photon trajectory, probability amplitude nor brightness. Energy per photon differs from beam power and photon arrival rate. Dispersion in materials, emission bandwidth and interactions with matter are outside this model. Numerical readings approximate the analytic expressions.'
      ],
      sourceRefs: ['source:physics-bridge:si-constants', 'source:physics-bridge:photon-energy'],
      conclusion:
        'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
    },
    {
      id: 'story:physics-bridge:time-dilation',
      slug: 'time-dilation',
      scene: 'time-dilation-physics-bridge-scene',
      unit: 's',
      title: 'How can the same pair of clock events have two elapsed-time readings?',
      question: 'How can the same pair of clock events have two elapsed-time readings?',
      eyebrow: 'One physical relation, connected quantities',
      presentation: {
        compact: true,
        controlHint:
          'Follow a selected physical quantity from the story into the formula and its measured mark.'
      },
      summary:
        'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
      context:
        'An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.',
      variables: [
        {
          key: 'speedFraction',
          label: 'Relative speed fraction β',
          symbol: 'β',
          min: 0,
          max: 0.95,
          step: 0.005,
          unit: 'dimensionless'
        },
        {
          key: 'properDuration',
          label: 'Clock proper interval τ',
          symbol: 'τ',
          min: 1,
          max: 10,
          step: 0.05,
          unit: 's'
        }
      ],
      parameters: { speedFraction: 0.6, properDuration: 4 },
      timeline: { key: 'speedFraction', from: 0, to: 0.95, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Choose the physical model',
          body: 'An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.',
          formula:
            '\\beta=\\frac vc,\\quad \\gamma=\\frac{1}{\\sqrt{1-\\beta^2}},\\quad t=\\gamma\\tau,\\quad x=vt.',
          focusLabel: 'The physical model',
          focusDescription:
            'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Identify the same two clock events',
          body: 'Both events occur on the coasting clock. Its own interval is the proper interval; the laboratory uses its own coordinate system for those same events.',
          formula: 'β = {{speedFraction}}; τ = {{properDuration}} s',
          focusLabel: 'Identify the same two clock events',
          focusDescription:
            'Both events occur on the coasting clock. Its own interval is the proper interval; the laboratory uses its own coordinate system for those same events.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Compute the interval multiplier',
          body: 'The speed ratio enters one minus beta squared. Taking its positive square root and reciprocal gives the dimensionless Lorentz factor.',
          formula: 'γ ≈ {{gamma}}; v ≈ {{velocity}} m/s',
          focusLabel: 'Compute the interval multiplier',
          focusDescription:
            'The speed ratio enters one minus beta squared. Taking its positive square root and reciprocal gives the dimensionless Lorentz factor.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Compare measured intervals',
          body: 'The green laboratory interval and cyan clock interval share one seconds scale. The laboratory event separation is x=vt; the events need not be co-located there.',
          formula: 't ≈ {{gamma}} × {{properDuration}} ≈ {{output}} s',
          focusLabel: 'Compare measured intervals',
          focusDescription:
            'The green laboratory interval and cyan clock interval share one seconds scale. The laboratory event separation is x=vt; the events need not be co-located there.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Identify the same two clock events',
          template: 'β = {{speedFraction}}; τ = {{properDuration}} s',
          description:
            'Both events occur on the coasting clock. Its own interval is the proper interval; the laboratory uses its own coordinate system for those same events.'
        },
        {
          role: 'intermediate',
          label: 'Compute the interval multiplier',
          template: 'γ ≈ {{gamma}}; v ≈ {{velocity}} m/s',
          description:
            'The speed ratio enters one minus beta squared. Taking its positive square root and reciprocal gives the dimensionless Lorentz factor.'
        },
        {
          role: 'output',
          label: 'Compare measured intervals',
          template: 't ≈ {{gamma}} × {{properDuration}} ≈ {{output}} s',
          description:
            'The green laboratory interval and cyan clock interval share one seconds scale. The laboratory event separation is x=vt; the events need not be co-located there.'
        }
      ],
      assumptions: [
        'Both frames are inertial in flat spacetime with no gravitational field. The speed fraction β is 0–0.95, and the clock proper interval τ is 1–10 seconds. The two events occur at one place in the clock rest frame; the laboratory interval concerns this same pair of events. This compares coordinate time with proper time, not delayed visual arrival of clock signals. Laboratory event positions generally differ when the clock moves. No acceleration, gravity, round trip, twin-paradox journey or claim about arbitrary event pairs is modeled. Both interval bars use one fixed 0–35 second scale. Values printed after square-root evaluation are approximate.'
      ],
      sourceRefs: ['source:physics-bridge:si-constants', 'source:physics-bridge:time-dilation'],
      conclusion:
        'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
    }
  ];
  const quantities = {
    'photon-energy': {
      wavelength: {
        label: 'Vacuum wavelength λ',
        role: 'input',
        unit: 'nm',
        description:
          'A light-source designer compares photons from ideal monochromatic emitters. Change the vacuum wavelength λ in nanometres. The wave spacing marks that physical length on a fixed ruler; the energy bar independently measures the energy carried by one photon.'
      },
      wavelengthM: {
        label: 'Vacuum wavelength, entered in nanometres and converted to metres for the formula',
        role: 'intermediate',
        unit: 'm',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      frequency: {
        label: 'Vacuum optical frequency in hertz',
        role: 'intermediate',
        unit: 'Hz',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      energyJ: {
        label: 'Energy of one photon in joules',
        role: 'intermediate',
        unit: 'J',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      energyEV: {
        label: 'energyEV',
        role: 'output',
        unit: 'eV',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      output: {
        label: 'The same photon energy expressed in electronvolts',
        role: 'output',
        unit: 'eV',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      planck: {
        label:
          'Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds',
        role: 'intermediate',
        unit: 'J·s',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      lightSpeed: {
        label: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        role: 'intermediate',
        unit: 'm/s',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      },
      joulesPerEV: {
        label:
          'Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt',
        role: 'intermediate',
        unit: 'J/eV',
        description:
          'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
      }
    },
    'time-dilation': {
      speedFraction: {
        label: 'Relative speed fraction β',
        role: 'input',
        unit: 'dimensionless',
        description:
          'An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.'
      },
      properDuration: {
        label: 'Clock proper interval τ',
        role: 'input',
        unit: 's',
        description:
          'An ideal coasting spacecraft clock marks a start event and a finish event. Choose its proper elapsed time τ and its speed fraction β relative to a laboratory. Compare the clock interval with the laboratory coordinate interval for those same two events, using one fixed seconds ruler.'
      },
      gamma: {
        label: 'Lorentz factor multiplying the proper interval',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      coordinateDuration: {
        label: 'Laboratory coordinate elapsed time between the same two events, in seconds',
        role: 'output',
        unit: 's',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      velocity: {
        label: 'Clock speed relative to the laboratory, in metres per second',
        role: 'intermediate',
        unit: 'm/s',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      timeDifference: {
        label: 'timeDifference',
        role: 'intermediate',
        unit: 's',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      displacement: {
        label: 'Laboratory spatial separation of the two clock events, in metres',
        role: 'intermediate',
        unit: 'm',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      output: {
        label: 'Laboratory coordinate elapsed time between the same two events, in seconds',
        role: 'output',
        unit: 's',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      },
      lightSpeed: {
        label: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        role: 'intermediate',
        unit: 'm/s',
        description:
          'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
      }
    }
  };
  const links = {
    'photon-energy': {
      variableKey: 'wavelength',
      symbol: 'λ',
      variableLabel: 'Vacuum wavelength λ',
      unit: 'nm',
      effectLabel:
        'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
      steps: [
        {
          focus: 'reference',
          label: 'The physical model',
          description:
            'Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.'
        },
        {
          focus: 'input',
          label: 'Choose one vacuum wavelength',
          description:
            'The same physical wavelength is expressed in two units. The horizontal wave period follows the nanometre ruler; the wave height carries no energy scale.'
        },
        {
          focus: 'intermediate',
          label: 'Follow wavelength into frequency and joule energy',
          description:
            'Use c divided by wavelength in metres. Multiplying that frequency by Planck’s constant gives the energy of one photon in joules.'
        },
        {
          focus: 'output',
          label: 'Read the same energy in electronvolts',
          description:
            'Divide by the exact number of joules per electronvolt. The green bar shows energy per photon on the same fixed 0–3.5 electronvolt scale for every wavelength.'
        }
      ]
    },
    'time-dilation': {
      variableKey: 'speedFraction',
      symbol: 'β',
      variableLabel: 'Relative speed fraction β',
      unit: 'dimensionless',
      effectLabel:
        'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
      steps: [
        {
          focus: 'reference',
          label: 'The physical model',
          description:
            'Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.'
        },
        {
          focus: 'input',
          label: 'Identify the same two clock events',
          description:
            'Both events occur on the coasting clock. Its own interval is the proper interval; the laboratory uses its own coordinate system for those same events.'
        },
        {
          focus: 'intermediate',
          label: 'Compute the interval multiplier',
          description:
            'The speed ratio enters one minus beta squared. Taking its positive square root and reciprocal gives the dimensionless Lorentz factor.'
        },
        {
          focus: 'output',
          label: 'Compare measured intervals',
          description:
            'The green laboratory interval and cyan clock interval share one seconds scale. The laboratory event separation is x=vt; the events need not be co-located there.'
        }
      ]
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze({ stories, quantities, links });
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(s => s.slug === slug) || null,
    find: id => stories.find(s => s.id === id) || null,
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null)
  });
});
