(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasPhysicsBridgeTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'photon-energy',
        title: 'Photon energy and vacuum wavelength',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['photon energy and vacuum wavelength', 'photon energy'],
        definition:
          'For an ideal monochromatic photon in vacuum, frequency f and wavelength λ satisfy fλ=c, and photon energy in joules is E_J=hf. The speed of light c and Planck constant h have exact SI defining values. Divide the joule reading by the exact conversion u=1.602176634×10⁻¹⁹ joules per electronvolt to obtain its electronvolt reading E. Shorter wavelength gives higher frequency and higher energy per photon; it does not by itself specify beam brightness or power. The unit of h is the joule second.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Photon energy and vacuum wavelength',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['ratio', 'measurement-unit-symbols']
      },
      {
        id: 'physics-photon-energy-lambda',
        title: 'Vacuum wavelength, entered in nanometres and converted to metres for the formula',
        category: 'functions',
        symbols: ['λ'],
        tokens: ['λ', '\\lambda'],
        mathSymbols: ['λ', '\\lambda'],
        aliases: [],
        wordMatches: [],
        definition:
          'Vacuum wavelength, entered in nanometres and converted to metres for the formula. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Vacuum wavelength, entered in nanometres and converted to metres for the formula',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-f',
        title: 'Vacuum optical frequency in hertz',
        category: 'functions',
        symbols: ['f'],
        tokens: ['f'],
        mathSymbols: ['f'],
        aliases: [],
        wordMatches: [],
        definition:
          'Vacuum optical frequency in hertz. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Vacuum optical frequency in hertz',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-c',
        title: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        category: 'functions',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: [],
        wordMatches: [],
        definition:
          'Exact SI speed of light in vacuum, 299792458 metres per second. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-h',
        title:
          'Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds',
        category: 'functions',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        aliases: [],
        wordMatches: [],
        definition:
          'Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs:
          'Exact SI Planck constant, 6.62607015 times ten to the minus thirty-four joule seconds',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-e-j',
        title: 'Energy of one photon in joules',
        category: 'functions',
        symbols: ['E_J'],
        tokens: ['E_J', 'E_{J}'],
        mathSymbols: ['E_J', 'E_{J}'],
        aliases: [],
        wordMatches: [],
        definition:
          'Energy of one photon in joules. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Energy of one photon in joules',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-e',
        title: 'The same photon energy expressed in electronvolts',
        category: 'functions',
        symbols: ['E'],
        tokens: ['E'],
        mathSymbols: ['E'],
        aliases: [],
        wordMatches: [],
        definition:
          'The same photon energy expressed in electronvolts. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'The same photon energy expressed in electronvolts',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon-energy-u',
        title:
          'Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt',
        category: 'functions',
        symbols: ['u'],
        tokens: ['u'],
        mathSymbols: ['u'],
        aliases: [],
        wordMatches: [],
        definition:
          'Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt. Convert the same vacuum wavelength to metres, divide c by it for frequency, then multiply by h and convert joules to electronvolts. A shorter spacing gives a higher energy bar.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs:
          'Exact energy-unit conversion, 1.602176634 times ten to the minus nineteen joules per electronvolt',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-photon',
        title: 'Photon in this energy model',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['photon', 'energy per photon'],
        definition:
          'A single light quantum described here by E_J=hf in vacuum. The energy of one photon is distinct from beam power, which also depends on photon rate.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Photon in this energy model',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-vacuum-wavelength',
        title: 'Vacuum wavelength',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['vacuum wavelength', 'wave spacing'],
        definition:
          'The spatial period of the associated monochromatic vacuum wave. It equals the speed of light divided by frequency; this is a length, not a time period.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Vacuum wavelength',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'physics-electronvolt',
        title: 'Electronvolt',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['electronvolt', 'electronvolts'],
        definition:
          'A unit of energy equal to exactly 1.602176634×10⁻¹⁹ joules. It is the same physical energy expressed on another numerical scale, not a voltage.',
        example:
          'One photon carries about 2.2543 electronvolts, or 3.6117×10⁻¹⁹ joules. Its frequency is about 5.4508×10¹⁴ hertz.',
        readAs: 'Electronvolt',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_photon_energy'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['photon-energy']
      },
      {
        id: 'time-dilation',
        title: 'Time dilation between two clock events',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['time dilation between two clock events', 'time dilation'],
        definition:
          'For two events at the same position in the rest frame of an ideal inertial clock, its proper elapsed time is τ. A laboratory inertial frame in which that clock moves with speed v assigns coordinate interval t=γτ, where β=v/c and γ=1/√(1−β²). The two events generally occupy different laboratory positions. The factor γ is at least one, and equals one when relative speed is zero.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Time dilation between two clock events',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['ratio', 'measurement-unit-symbols']
      },
      {
        id: 'physics-time-dilation-beta',
        title: 'Dimensionless relative speed v divided by the vacuum speed of light c',
        category: 'functions',
        symbols: ['β'],
        tokens: ['β', '\\beta'],
        mathSymbols: ['β', '\\beta'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless relative speed v divided by the vacuum speed of light c. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Dimensionless relative speed v divided by the vacuum speed of light c',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-gamma',
        title: 'Lorentz factor multiplying the proper interval',
        category: 'functions',
        symbols: ['γ'],
        tokens: ['γ', '\\gamma'],
        mathSymbols: ['γ', '\\gamma'],
        aliases: [],
        wordMatches: [],
        definition:
          'Lorentz factor multiplying the proper interval. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Lorentz factor multiplying the proper interval',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-tau',
        title: 'Proper elapsed time between the two events, in seconds on their common clock',
        category: 'functions',
        symbols: ['τ'],
        tokens: ['τ', '\\tau'],
        mathSymbols: ['τ', '\\tau'],
        aliases: [],
        wordMatches: [],
        definition:
          'Proper elapsed time between the two events, in seconds on their common clock. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Proper elapsed time between the two events, in seconds on their common clock',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-t',
        title: 'Laboratory coordinate elapsed time between the same two events, in seconds',
        category: 'functions',
        symbols: ['t'],
        tokens: ['t'],
        mathSymbols: ['t'],
        aliases: [],
        wordMatches: [],
        definition:
          'Laboratory coordinate elapsed time between the same two events, in seconds. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Laboratory coordinate elapsed time between the same two events, in seconds',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-v',
        title: 'Clock speed relative to the laboratory, in metres per second',
        category: 'functions',
        symbols: ['v'],
        tokens: ['v'],
        mathSymbols: ['v'],
        aliases: [],
        wordMatches: [],
        definition:
          'Clock speed relative to the laboratory, in metres per second. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Clock speed relative to the laboratory, in metres per second',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-c',
        title: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        category: 'functions',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: [],
        wordMatches: [],
        definition:
          'Exact SI speed of light in vacuum, 299792458 metres per second. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Exact SI speed of light in vacuum, 299792458 metres per second',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-time-dilation-x',
        title: 'Laboratory spatial separation of the two clock events, in metres',
        category: 'functions',
        symbols: ['x'],
        tokens: ['x'],
        mathSymbols: ['x'],
        aliases: [],
        wordMatches: [],
        definition:
          'Laboratory spatial separation of the two clock events, in metres. Express the relative speed as a fraction of c, compute the Lorentz factor, then multiply the chosen proper interval. Increasing speed lengthens the laboratory interval without changing the selected clock interval.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Laboratory spatial separation of the two clock events, in metres',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-proper-time',
        title: 'Proper time for the clock events',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['proper time', 'proper interval'],
        definition:
          'The elapsed time recorded by the one inertial clock on which both events occur. In its rest frame those events have the same spatial position.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Proper time for the clock events',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-coordinate-time',
        title: 'Laboratory coordinate interval',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['coordinate interval', 'laboratory interval', 'coordinate time'],
        definition:
          'The difference between laboratory coordinate times assigned to the same two events. It is distinct from the time between arrival of their light signals.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Laboratory coordinate interval',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-lorentz-factor',
        title: 'Lorentz factor',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['Lorentz factor', 'interval multiplier'],
        definition:
          'The dimensionless multiplier γ=1/√(1−β²), where β is relative speed divided by c. For the allowed sub-light speeds it is finite and at least one.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Lorentz factor',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-inertial-frame',
        title: 'Inertial frame',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: ['inertial frame', 'inertial frames'],
        definition:
          'A coordinate frame in which free particles move with constant velocity. The model compares two such frames in flat spacetime, with no acceleration or gravity.',
        example:
          'At β=0.6 the Lorentz factor is 1.25. The clock records four seconds and the laboratory assigns five seconds to the same events.',
        readAs: 'Inertial frame',
        sourceKeys: ['physics_bridge_si_constants', 'physics_bridge_time_dilation'],
        grammarCards: ['time-dilation'],
        formulaCards: ['time-dilation'],
        relatedIds: ['time-dilation']
      },
      {
        id: 'physics-nanometre-unit',
        title: 'Nanometre',
        category: 'units',
        symbols: ['nm'],
        tokens: ['nm'],
        mathSymbols: ['nm'],
        aliases: ['nanometre'],
        definition:
          'A unit of length equal to exactly one billionth of a metre. Wavelength controls use nanometres and are converted to metres before substitution.',
        example: '550 nm = 0.00000055 m.',
        readAs: 'Nanometre',
        sourceKeys: ['physics_bridge_si_constants'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['measurement-unit-symbols', 'photon-energy'],
        notationKinds: ['unit']
      },
      {
        id: 'physics-hertz-unit',
        title: 'Hertz',
        category: 'units',
        symbols: ['Hz'],
        tokens: ['Hz'],
        mathSymbols: ['Hz'],
        aliases: ['hertz'],
        definition:
          'A unit of frequency equal to one cycle per second. It is distinct from photon energy or wavelength.',
        example: 'A frequency of 5×10¹⁴ Hz means five times ten to the fourteen cycles per second.',
        readAs: 'Hertz',
        sourceKeys: ['physics_bridge_si_constants'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['measurement-unit-symbols', 'photon-energy'],
        notationKinds: ['unit']
      },
      {
        id: 'physics-electronvolt-unit',
        title: 'Electronvolt energy unit',
        category: 'units',
        symbols: ['eV'],
        tokens: ['eV'],
        mathSymbols: ['eV'],
        aliases: ['electronvolt energy unit'],
        definition:
          'An energy unit equal to exactly 1.602176634×10⁻¹⁹ joules. This unit is not a voltage.',
        example: '1 eV = 1.602176634×10⁻¹⁹ J.',
        readAs: 'Electronvolt energy unit',
        sourceKeys: ['physics_bridge_si_constants'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['measurement-unit-symbols', 'photon-energy'],
        notationKinds: ['unit']
      },
      {
        id: 'physics-action-unit',
        title: 'Joule second',
        category: 'units',
        symbols: ['J·s', 'J s'],
        tokens: ['J·s', 'J s'],
        mathSymbols: ['J·s', 'J s'],
        aliases: ['joule second'],
        definition:
          'The product unit of energy and time used for Planck’s constant. It is neither an energy alone nor joules per second.',
        example: 'h = 6.62607015×10⁻³⁴ J·s.',
        readAs: 'Joule second',
        sourceKeys: ['physics_bridge_si_constants'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['measurement-unit-symbols', 'photon-energy'],
        notationKinds: ['unit']
      },
      {
        id: 'physics-energy-conversion-unit',
        title: 'Joules per electronvolt',
        category: 'units',
        symbols: ['J/eV'],
        tokens: ['J/eV'],
        mathSymbols: ['J/eV'],
        aliases: ['joules per electronvolt'],
        definition:
          'The unit of the fixed conversion factor from an electronvolt reading to joules. Dividing a joule energy by this factor yields an electronvolt energy reading.',
        example: 'u = 1.602176634×10⁻¹⁹ J/eV.',
        readAs: 'Joules per electronvolt',
        sourceKeys: ['physics_bridge_si_constants'],
        grammarCards: ['photon-energy'],
        formulaCards: ['photon-energy'],
        relatedIds: ['measurement-unit-symbols', 'photon-energy'],
        notationKinds: ['unit']
      }
    ],
    sources: {
      physics_bridge_si_constants: {
        title: 'BIPM · The International System of Units',
        url: 'https://www.bipm.org/en/measurement-units/'
      },
      physics_bridge_photon_energy: {
        title: 'OpenStax · University Physics Volume 3 §6.3',
        url: 'https://openstax.org/books/university-physics-volume-3/pages/6-3-the-compton-effect'
      },
      physics_bridge_time_dilation: {
        title: 'OpenStax · University Physics Volume 3 §5.3',
        url: 'https://openstax.org/books/university-physics-volume-3/pages/5-3-time-dilation'
      }
    }
  };
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  return freeze(data);
});
