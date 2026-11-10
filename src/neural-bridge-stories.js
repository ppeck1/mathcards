/* Build-only or narrative data for the neural bridge family. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNeuralBridgeStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const stories = [
    {
      id: 'story:neural-bridge:neural-summation',
      slug: 'neural-summation',
      scene: 'neural-summation-neural-bridge-scene',
      unit: 'dimensionless',
      title: 'How can one channel add drive while another subtracts it?',
      question: 'How can one channel add drive while another subtracts it?',
      eyebrow: 'Weighted inputs, visible contributions',
      presentation: {
        compact: true,
        controlHint:
          'Follow a highlighted input through its signed weighted contribution into the result. Pause to read a value.'
      },
      summary:
        'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
      context:
        'A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.',
      variables: [
        {
          key: 'excitation',
          label: 'Approach signal e',
          symbol: 'e',
          min: 0,
          max: 1,
          step: 0.025,
          unit: 'dimensionless'
        },
        {
          key: 'inhibition',
          label: 'Braking signal i',
          symbol: 'i',
          min: 0,
          max: 1,
          step: 0.025,
          unit: 'dimensionless'
        }
      ],
      parameters: { excitation: 0.6, inhibition: 0.4 },
      timeline: { key: 'excitation', from: 0, to: 1, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the linear model',
          body: 'A workshop robot demonstrator combines an approach signal e with a braking signal i. Both readings use a zero-to-one scale. The approach channel counts twice, while the braking channel subtracts once. Change either signal and follow its colored contribution into the same net drive. This is a constructed artificial-unit demonstration.',
          formula: 'a=2,\\quad b=1,\\quad E=ae,\\quad I=bi,\\quad y=E-I.',
          focusLabel: 'The stated linear model',
          focusDescription:
            'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
          from: 0
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Choose the two input signals',
          body: 'Cyan identifies the adding channel and gold the subtracting channel. Both raw signals are nonnegative.',
          formula: 'e = {{excitation}}; i = {{inhibition}}',
          focusLabel: 'Choose the two input signals',
          focusDescription:
            'Cyan identifies the adding channel and gold the subtracting channel. Both raw signals are nonnegative.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Apply the signed gains',
          body: 'The approach bar has twice its input magnitude. The braking bar extends to the negative side because its positive magnitude I is subtracted.',
          formula: 'E ≈ 2 × {{excitation}} ≈ {{excitatoryDrive}}; I ≈ {{inhibitoryDrive}}',
          focusLabel: 'Apply the signed gains',
          focusDescription:
            'The approach bar has twice its input magnitude. The braking bar extends to the negative side because its positive magnitude I is subtracted.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Combine both channels',
          body: 'The green bar shows the algebraic sum on the same fixed scale. A larger braking signal can make this signed drive negative.',
          formula: 'y ≈ {{excitatoryDrive}} − {{inhibitoryDrive}} ≈ {{output}}',
          focusLabel: 'Combine both channels',
          focusDescription:
            'The green bar shows the algebraic sum on the same fixed scale. A larger braking signal can make this signed drive negative.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Choose the two input signals',
          template: 'e = {{excitation}}; i = {{inhibition}}',
          description:
            'Cyan identifies the adding channel and gold the subtracting channel. Both raw signals are nonnegative.'
        },
        {
          role: 'intermediate',
          label: 'Apply the signed gains',
          template: 'E ≈ 2 × {{excitation}} ≈ {{excitatoryDrive}}; I ≈ {{inhibitoryDrive}}',
          description:
            'The approach bar has twice its input magnitude. The braking bar extends to the negative side because its positive magnitude I is subtracted.'
        },
        {
          role: 'output',
          label: 'Combine both channels',
          template: 'y ≈ {{excitatoryDrive}} − {{inhibitoryDrive}} ≈ {{output}}',
          description:
            'The green bar shows the algebraic sum on the same fixed scale. A larger braking signal can make this signed drive negative.'
        }
      ],
      assumptions: [
        'This is one static linear artificial unit with zero bias. It has no activation function, learning, noise, integration through time or spike generation. Signed drive is neither a firing rate nor a measured membrane voltage. The original robot demonstration is not a control or safety specification. Derived decimal readings are numerical approximations.'
      ],
      sourceRefs: ['source:neural-bridge:neural-summation'],
      conclusion:
        'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
    },
    {
      id: 'story:neural-bridge:receptive-field',
      slug: 'receptive-field',
      scene: 'receptive-field-neural-bridge-scene',
      unit: 'dimensionless',
      title: 'Why can a bright center stand out while a uniform panel cancels?',
      question: 'Why can a bright center stand out while a uniform panel cancels?',
      eyebrow: 'Weighted inputs, visible contributions',
      presentation: {
        compact: true,
        controlHint:
          'Follow a highlighted input through its signed weighted contribution into the result. Pause to read a value.'
      },
      summary:
        'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
      context:
        'A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.',
      variables: [
        {
          key: 'center',
          label: 'Center gray setting c',
          symbol: 'c',
          min: 0,
          max: 1,
          step: 0.025,
          unit: 'dimensionless'
        },
        {
          key: 'surround',
          label: 'Surround gray setting s',
          symbol: 's',
          min: 0,
          max: 1,
          step: 0.025,
          unit: 'dimensionless'
        },
        {
          key: 'gain',
          label: 'Total surround gain g',
          symbol: 'g',
          min: 0,
          max: 2,
          step: 0.025,
          unit: 'dimensionless'
        }
      ],
      parameters: { center: 0.8, surround: 0.3, gain: 1 },
      timeline: { key: 'center', from: 0, to: 1, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the linear model',
          body: 'A vision workshop displays a row of five gray tiles. Set the middle tile to c and the four neighboring tiles to s. The filter keeps the center contribution positive and assigns each neighbor a negative weight −g/4. Change a gray setting or the total surround gain g, then watch the five signed products combine into one response.',
          formula:
            '\\vec{x}=(s,s,c,s,s),\\quad \\vec{w}=(-g/4,-g/4,1,-g/4,-g/4),\\quad S=gs,\\quad r=\\vec{w}\\cdot\\vec{x}=c-S.',
          focusLabel: 'The stated linear model',
          focusDescription:
            'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
          from: 0
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Set the center and surrounding tiles',
          body: 'The middle cyan-edged tile and four gold-edged neighbors keep their spatial positions. Their shades encode their own input settings.',
          formula: 'c = {{center}}; s = {{surround}}; g = {{gain}}',
          focusLabel: 'Set the center and surrounding tiles',
          focusDescription:
            'The middle cyan-edged tile and four gold-edged neighbors keep their spatial positions. Their shades encode their own input settings.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Weight the five spatial inputs',
          body: 'The four surrounding weights are each minus one quarter of g. Their four negative bars combine to a negative total with magnitude S.',
          formula: 'One neighbor ≈ {{surroundEach}}; total surround S ≈ {{surroundTotal}}',
          focusLabel: 'Weight the five spatial inputs',
          focusDescription:
            'The four surrounding weights are each minus one quarter of g. Their four negative bars combine to a negative total with magnitude S.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the signed contrast',
          body: 'The green response bar is the sum of all five products. With g=1, equal center and surround settings cancel; a brighter surround produces a negative response.',
          formula: 'r ≈ {{center}} − {{surroundTotal}} ≈ {{output}}',
          focusLabel: 'Read the signed contrast',
          focusDescription:
            'The green response bar is the sum of all five products. With g=1, equal center and surround settings cancel; a brighter surround produces a negative response.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the center and surrounding tiles',
          template: 'c = {{center}}; s = {{surround}}; g = {{gain}}',
          description:
            'The middle cyan-edged tile and four gold-edged neighbors keep their spatial positions. Their shades encode their own input settings.'
        },
        {
          role: 'intermediate',
          label: 'Weight the five spatial inputs',
          template: 'One neighbor ≈ {{surroundEach}}; total surround S ≈ {{surroundTotal}}',
          description:
            'The four surrounding weights are each minus one quarter of g. Their four negative bars combine to a negative total with magnitude S.'
        },
        {
          role: 'output',
          label: 'Read the signed contrast',
          template: 'r ≈ {{center}} − {{surroundTotal}} ≈ {{output}}',
          description:
            'The green response bar is the sum of all five products. With g=1, equal center and surround settings cancel; a brighter surround produces a negative response.'
        }
      ],
      assumptions: [
        'This is an originally constructed static linear spatial filter. Gray shade represents a dimensionless display setting, not calibrated radiance or perceived brightness. There is no threshold, nonlinear activation, learning, noise, spike history or adaptation. The result is a signed filter drive, not a firing rate or biological validation. At g=1 every uniform level cancels. For nonzero uniform levels that cancellation requires g=1, while all-black input always gives zero. Derived decimal readings are numerical approximations.'
      ],
      sourceRefs: ['source:neural-bridge:receptive-field'],
      conclusion:
        'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
    }
  ];
  const quantities = {
    'neural-summation': {
      excitation: {
        label: 'Approach signal e',
        role: 'input',
        unit: 'dimensionless',
        description: 'Dimensionless approach-channel input'
      },
      inhibition: {
        label: 'Braking signal i',
        role: 'input',
        unit: 'dimensionless',
        description: 'Dimensionless braking-channel input'
      },
      output: {
        label: 'Net signed drive',
        role: 'output',
        unit: 'dimensionless',
        description:
          'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      gainExcitation: {
        label: 'Fixed positive approach gain, equal to two',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Fixed positive approach gain, equal to two. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      gainInhibition: {
        label: 'Fixed positive braking magnitude gain, equal to one',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Fixed positive braking magnitude gain, equal to one. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      excitatoryDrive: {
        label: 'Nonnegative weighted approach drive',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Nonnegative weighted approach drive. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      inhibitoryDrive: {
        label: 'Nonnegative weighted braking magnitude, subtracted from E',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Nonnegative weighted braking magnitude, subtracted from E. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      netDrive: {
        label: 'Signed net drive',
        role: 'output',
        unit: 'dimensionless',
        description:
          'Signed net drive. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      signedInhibition: {
        label: 'Negative braking contribution',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Negative braking contribution. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      },
      balanceExcitation: {
        label: 'Approach signal needed for balance',
        role: 'reference',
        unit: 'dimensionless',
        description:
          'Approach signal needed for balance. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
      }
    },
    'receptive-field': {
      center: {
        label: 'Center gray setting c',
        role: 'input',
        unit: 'dimensionless',
        description: 'Dimensionless gray setting at the middle site'
      },
      surround: {
        label: 'Surround gray setting s',
        role: 'input',
        unit: 'dimensionless',
        description: 'Dimensionless gray setting shared by the four surrounding sites'
      },
      gain: {
        label: 'Total surround gain g',
        role: 'input',
        unit: 'dimensionless',
        description: 'Nonnegative total surround gain'
      },
      output: {
        label: 'Signed filter response',
        role: 'output',
        unit: 'dimensionless',
        description:
          'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      surroundTotal: {
        label: 'Total nonnegative surrounding magnitude gs',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Total nonnegative surrounding magnitude gs. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      pixels: {
        label: 'Five-site vector of gray settings',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Five-site vector of gray settings. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      weights: {
        label: 'Five-site vector of signed spatial weights',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Five-site vector of signed spatial weights. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      response: {
        label: 'Signed filter response',
        role: 'output',
        unit: 'dimensionless',
        description:
          'Signed filter response. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      contributions: {
        label: 'Five signed spatial products',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Five signed spatial products. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      centerContribution: {
        label: 'Middle tile contribution',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'Middle tile contribution. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      surroundEach: {
        label: 'One negative neighboring contribution',
        role: 'intermediate',
        unit: 'dimensionless',
        description:
          'One negative neighboring contribution. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      weightSum: {
        label: 'Sum of all five spatial weights',
        role: 'reference',
        unit: 'dimensionless',
        description:
          'Sum of all five spatial weights. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      },
      siteCount: {
        label: 'Five fixed spatial sites',
        role: 'reference',
        unit: 'dimensionless',
        description:
          'Five fixed spatial sites. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
      }
    }
  };
  const links = {
    'neural-summation': {
      variableKey: 'excitation',
      symbol: 'e',
      variableLabel: 'Approach signal e',
      unit: 'dimensionless',
      effectLabel:
        'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
      steps: [
        {
          focus: 'reference',
          label: 'The stated linear model',
          description:
            'Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.'
        },
        {
          focus: 'input',
          label: 'Choose the two input signals',
          description:
            'Cyan identifies the adding channel and gold the subtracting channel. Both raw signals are nonnegative.'
        },
        {
          focus: 'intermediate',
          label: 'Apply the signed gains',
          description:
            'The approach bar has twice its input magnitude. The braking bar extends to the negative side because its positive magnitude I is subtracted.'
        },
        {
          focus: 'output',
          label: 'Combine both channels',
          description:
            'The green bar shows the algebraic sum on the same fixed scale. A larger braking signal can make this signed drive negative.'
        }
      ]
    },
    'receptive-field': {
      variableKey: 'center',
      symbol: 'c',
      variableLabel: 'Center gray setting c',
      unit: 'dimensionless',
      effectLabel:
        'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
      steps: [
        {
          focus: 'reference',
          label: 'The stated linear model',
          description:
            'Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.'
        },
        {
          focus: 'input',
          label: 'Set the center and surrounding tiles',
          description:
            'The middle cyan-edged tile and four gold-edged neighbors keep their spatial positions. Their shades encode their own input settings.'
        },
        {
          focus: 'intermediate',
          label: 'Weight the five spatial inputs',
          description:
            'The four surrounding weights are each minus one quarter of g. Their four negative bars combine to a negative total with magnitude S.'
        },
        {
          focus: 'output',
          label: 'Read the signed contrast',
          description:
            'The green response bar is the sum of all five products. With g=1, equal center and surround settings cancel; a brighter surround produces a negative response.'
        }
      ]
    }
  };
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
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
