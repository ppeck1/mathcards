(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInformationBridgeStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const stories = [
    {
      id: 'story:information-bridge:channel-capacity',
      slug: 'channel-capacity',
      scene: 'channel-capacity-information-bridge-scene',
      unit: 'bit/use',
      title: 'How much information can one use of the noisy link carry?',
      question: 'How much information can one use of the noisy link carry?',
      eyebrow: 'One message, connected information',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected probability or bit position through the calculation into its marked visual. Pause for a closer reading.'
      },
      summary:
        'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.',
      context:
        'A remote workshop sends a binary machine-status symbol: zero or one. Each use independently flips either symbol with probability p. A designer also chooses the long-run probability q of sending one. Change the channel or the chosen input mix, then compare the information delivered by that mix with the channel’s best possible information per use.',
      variables: [
        {
          key: 'errorChance',
          symbol: 'p',
          label: 'Flip probability p',
          min: 0,
          max: 1,
          step: 0.01,
          unit: 'probability'
        },
        {
          key: 'inputChance',
          symbol: 'q',
          label: 'Chance of sending one q',
          min: 0,
          max: 1,
          step: 0.01,
          unit: 'probability'
        }
      ],
      parameters: { errorChance: 0.1, inputChance: 0.25 },
      timeline: { key: 'errorChance', from: 0, to: 1, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the communication model',
          body: 'A remote workshop sends a binary machine-status symbol: zero or one. Each use independently flips either symbol with probability p. A designer also chooses the long-run probability q of sending one. Change the channel or the chosen input mix, then compare the information delivered by that mix with the channel’s best possible information per use.',
          formula: 't=p+q(1-2p),\\quad I=H_2(t)-H_2(p),\\quad C=1-H_2(p)=\\max_{0\\le q\\le1} I.',
          focusLabel: 'The communication model',
          focusDescription:
            'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Choose the channel and the sent-symbol mix',
          body: 'The cyan inputs distinguish the channel’s flip probability from the source’s probability of sending one. The same channel can be used with different symbol mixes.',
          formula: 'p = {{errorChance}}; q = {{inputChance}}',
          focusLabel: 'Choose the channel and the sent-symbol mix',
          focusDescription:
            'The cyan inputs distinguish the channel’s flip probability from the source’s probability of sending one. The same channel can be used with different symbol mixes.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the probabilities into entropy',
          body: 'Purple measures uncertainty added by the channel. The received-one chance determines the output entropy used in the current-information calculation.',
          formula: 't ≈ {{outputChance}}; H₂(p) ≈ {{noiseEntropy}}; H₂(t) ≈ {{outputEntropy}}',
          focusLabel: 'Follow the probabilities into entropy',
          focusDescription:
            'Purple measures uncertainty added by the channel. The received-one chance determines the output entropy used in the current-information calculation.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Compare the chosen information with the limit',
          body: 'Gold measures information for the chosen mix. Green measures the maximum across mixes. Both use the same fixed one-bit scale; balanced inputs attain the green limit.',
          formula: 'I ≈ {{mutualInformation}}; C ≈ {{output}} bit/use',
          focusLabel: 'Compare the chosen information with the limit',
          focusDescription:
            'Gold measures information for the chosen mix. Green measures the maximum across mixes. Both use the same fixed one-bit scale; balanced inputs attain the green limit.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Choose the channel and the sent-symbol mix',
          template: 'p = {{errorChance}}; q = {{inputChance}}',
          description:
            'The cyan inputs distinguish the channel’s flip probability from the source’s probability of sending one. The same channel can be used with different symbol mixes.'
        },
        {
          role: 'intermediate',
          label: 'Follow the probabilities into entropy',
          template: 't ≈ {{outputChance}}; H₂(p) ≈ {{noiseEntropy}}; H₂(t) ≈ {{outputEntropy}}',
          description:
            'Purple measures uncertainty added by the channel. The received-one chance determines the output entropy used in the current-information calculation.'
        },
        {
          role: 'output',
          label: 'Compare the chosen information with the limit',
          template: 'I ≈ {{mutualInformation}}; C ≈ {{output}} bit/use',
          description:
            'Gold measures information for the chosen mix. Green measures the maximum across mixes. Both use the same fixed one-bit scale; balanced inputs attain the green limit.'
        }
      ],
      assumptions: [
        'Use probabilities p and q from zero to one. The binary channel is symmetric, stationary, memoryless and known to the decoder. Entropy uses base-two logarithms and zero-probability terms have their limiting value zero. Capacity is an asymptotic coding limit in bits per channel use. It is not a promise that an individual symbol arrives correctly, a rate in bits per second, or a code constructed by this lesson. An always-flipping link is invertible when its rule is known. Printed readings approximate the analytic quantities.'
      ],
      sourceRefs: ['source:information-bridge:channel-capacity'],
      conclusion:
        'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
    },
    {
      id: 'story:information-bridge:hamming-code',
      slug: 'hamming-code',
      scene: 'hamming-code-information-bridge-scene',
      unit: 'position',
      title: 'How can three overlapping checks tell us which bit changed?',
      question: 'How can three overlapping checks tell us which bit changed?',
      eyebrow: 'One message, connected information',
      presentation: {
        compact: true,
        controlHint:
          'Follow the selected probability or bit position through the calculation into its marked visual. Pause for a closer reading.'
      },
      summary:
        'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.',
      context:
        'A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.',
      variables: [
        {
          key: 'flippedBit',
          symbol: 'j',
          label: 'Flipped position j · 0 means none',
          min: 0,
          max: 7,
          step: 1,
          unit: 'position',
          discrete: true
        },
        {
          key: 'dataWord',
          symbol: 'd',
          label: 'Four-bit data value d',
          min: 0,
          max: 15,
          step: 1,
          unit: 'word choice',
          discrete: true
        }
      ],
      parameters: { flippedBit: 3, dataWord: 5 },
      timeline: { key: 'flippedBit', from: 0, to: 7, durationMs: 18000 },
      steps: [
        {
          id: 'reference',
          from: 0,
          to: 0.25,
          focus: 'reference',
          title: 'Begin with the communication model',
          body: 'A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.',
          formula:
            's_1=(r_1+r_3+r_5+r_7)\\bmod2,\\quad s_2=(r_2+r_3+r_6+r_7)\\bmod2,\\quad s_4=(r_4+r_5+r_6+r_7)\\bmod2,\\quad s=s_1+2s_2+4s_4.',
          focusLabel: 'The communication model',
          focusDescription:
            'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Place data and parity bits in one block',
          body: 'Cyan marks data positions. Purple marks the three parity positions. The gold outline identifies the selected position where the received bit changes.',
          formula: 'd = {{dataWord}}; c = {{encodedWord}}; j = {{flippedBit}}',
          focusLabel: 'Place data and parity bits in one block',
          focusDescription:
            'Cyan marks data positions. Purple marks the three parity positions. The gold outline identifies the selected position where the received bit changes.'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Recheck the received block',
          body: 'Each check adds its selected received bits modulo two. A failed even-parity check is one; a passing check is zero. The overlapping check groups give each position a different pattern.',
          formula: 'r = {{receivedWord}}; s₁ = {{checkOne}}; s₂ = {{checkTwo}}; s₄ = {{checkFour}}',
          focusLabel: 'Recheck the received block',
          focusDescription:
            'Each check adds its selected received bits modulo two. A failed even-parity check is one; a passing check is zero. The overlapping check groups give each position a different pattern.'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the address and recover the label',
          body: 'Read the three check results with weights one, two and four. The green address points to the repair, and the cyan recovered data matches the original label.',
          formula: 's = {{output}}; u = {{recoveredWord}}; recovered bits {{recoveredData}}',
          focusLabel: 'Read the address and recover the label',
          focusDescription:
            'Read the three check results with weights one, two and four. The green address points to the repair, and the cyan recovered data matches the original label.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Place data and parity bits in one block',
          template: 'd = {{dataWord}}; c = {{encodedWord}}; j = {{flippedBit}}',
          description:
            'Cyan marks data positions. Purple marks the three parity positions. The gold outline identifies the selected position where the received bit changes.'
        },
        {
          role: 'intermediate',
          label: 'Recheck the received block',
          template:
            'r = {{receivedWord}}; s₁ = {{checkOne}}; s₂ = {{checkTwo}}; s₄ = {{checkFour}}',
          description:
            'Each check adds its selected received bits modulo two. A failed even-parity check is one; a passing check is zero. The overlapping check groups give each position a different pattern.'
        },
        {
          role: 'output',
          label: 'Read the address and recover the label',
          template: 's = {{output}}; u = {{recoveredWord}}; recovered bits {{recoveredData}}',
          description:
            'Read the three check results with weights one, two and four. The green address points to the repair, and the cyan recovered data matches the original label.'
        }
      ],
      assumptions: [
        'Use a whole data value d from 0 to 15 and a whole flip selection j from 0 to 7. Zero selects no flip; actual bit positions are numbered one through seven. The guarantee assumes at most one flipped bit in the entire seven-bit block. Data bits occupy positions 3,5,6,7 and even-parity bits occupy positions 1,2,4. This deterministic construction does not simulate random noise or an extended SECDED code. Multiple errors can make the single-error decoder repair the wrong position. Zero syndrome does not prove error-free transmission outside the at-most-one-error assumption. The three checks and the recovered four-bit label are distinct quantities.'
      ],
      sourceRefs: ['source:information-bridge:hamming-code'],
      conclusion:
        'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
    }
  ];
  const quantities = {
    'channel-capacity': {
      errorChance: {
        label: 'Flip probability p',
        role: 'input',
        unit: 'probability',
        description:
          'A remote workshop sends a binary machine-status symbol: zero or one. Each use independently flips either symbol with probability p. A designer also chooses the long-run probability q of sending one. Change the channel or the chosen input mix, then compare the information delivered by that mix with the channel’s best possible information per use.'
      },
      inputChance: {
        label: 'Chance of sending one q',
        role: 'input',
        unit: 'probability',
        description:
          'A remote workshop sends a binary machine-status symbol: zero or one. Each use independently flips either symbol with probability p. A designer also chooses the long-run probability q of sending one. Change the channel or the chosen input mix, then compare the information delivered by that mix with the channel’s best possible information per use.'
      },
      output: {
        label: 'Channel capacity: the maximum over input mixes, in bits per channel use',
        role: 'output',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      capacity: {
        label: 'capacity',
        role: 'output',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      mutualInformation: {
        label: 'Mutual information for the chosen input mix, in bits per channel use',
        role: 'intermediate',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      noiseEntropy: {
        label: 'Binary entropy of the flip uncertainty, in bits per channel use',
        role: 'intermediate',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      outputChance: {
        label: 'Probability of receiving the symbol one',
        role: 'intermediate',
        unit: '',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      outputEntropy: {
        label: 'Binary entropy of the received symbol, in bits per channel use',
        role: 'intermediate',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      inputEntropy: {
        label: 'inputEntropy',
        role: 'intermediate',
        unit: 'bit/use',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      },
      unusedCapacity: {
        label: 'unusedCapacity',
        role: 'intermediate',
        unit: '',
        description:
          'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
      }
    },
    'hamming-code': {
      flippedBit: {
        label: 'Flipped position j · 0 means none',
        role: 'input',
        unit: 'position',
        description:
          'A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.'
      },
      dataWord: {
        label: 'Four-bit data value d',
        role: 'input',
        unit: 'word choice',
        description:
          'A workshop sends a four-bit machine-status label d through a wire as a seven-bit block c. Three added check bits overlap the data positions. Choose either a single flipped bit position j or no flip, then follow the received block r through its three parity checks into the repaired label u.'
      },
      output: {
        label: 'Syndrome address computed from the three check results',
        role: 'output',
        unit: 'position',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      syndrome: {
        label: 'syndrome',
        role: 'output',
        unit: 'position',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      checkOne: {
        label: 'Even-parity check result for positions 1,3,5,7',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      checkTwo: {
        label: 'Even-parity check result for positions 2,3,6,7',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      checkFour: {
        label: 'Even-parity check result for positions 4,5,6,7',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      encodedWord: {
        label: 'Encoded seven-bit word with data and even-parity bits',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      receivedWord: {
        label: 'Received seven-bit word after the selected flip',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      correctedWord: {
        label: 'correctedWord',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      dataBits: {
        label: 'dataBits',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      recoveredData: {
        label: 'recoveredData',
        role: 'output',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      recoveredWord: {
        label: 'Whole value represented by the recovered four data bits',
        role: 'output',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      correctionCount: {
        label: 'correctionCount',
        role: 'intermediate',
        unit: '',
        description:
          'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
      },
      encodedBits: {
        label: 'encoded bits',
        role: 'intermediate',
        unit: '',
        description: 'Seven binary entries in ordinary position order from one through seven.'
      },
      receivedBits: {
        label: 'received bits',
        role: 'intermediate',
        unit: '',
        description: 'Seven binary entries in ordinary position order from one through seven.'
      },
      correctedBits: {
        label: 'corrected bits',
        role: 'intermediate',
        unit: '',
        description: 'Seven binary entries in ordinary position order from one through seven.'
      }
    }
  };
  const links = {
    'channel-capacity': {
      variableKey: 'errorChance',
      symbol: 'p',
      variableLabel: 'Flip probability p',
      unit: 'probability',
      effectLabel:
        'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.',
      steps: [
        {
          focus: 'reference',
          label: 'The communication model',
          description:
            'Follow the flip chance into noise entropy, calculate the received symbol mix, then subtract the noise entropy. The best input mix makes the output equally likely and reaches one minus the noise entropy.'
        },
        {
          focus: 'input',
          label: 'Choose the channel and the sent-symbol mix',
          description:
            'The cyan inputs distinguish the channel’s flip probability from the source’s probability of sending one. The same channel can be used with different symbol mixes.'
        },
        {
          focus: 'intermediate',
          label: 'Follow the probabilities into entropy',
          description:
            'Purple measures uncertainty added by the channel. The received-one chance determines the output entropy used in the current-information calculation.'
        },
        {
          focus: 'output',
          label: 'Compare the chosen information with the limit',
          description:
            'Gold measures information for the chosen mix. Green measures the maximum across mixes. Both use the same fixed one-bit scale; balanced inputs attain the green limit.'
        }
      ]
    },
    'hamming-code': {
      variableKey: 'flippedBit',
      symbol: 'j',
      variableLabel: 'Flipped position j · 0 means none',
      unit: 'position',
      effectLabel:
        'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.',
      steps: [
        {
          focus: 'reference',
          label: 'The communication model',
          description:
            'Encode four data bits with three even-parity checks, apply the chosen flip, and read the failed checks as a binary address. Repair that address and recover the original four-bit label.'
        },
        {
          focus: 'input',
          label: 'Place data and parity bits in one block',
          description:
            'Cyan marks data positions. Purple marks the three parity positions. The gold outline identifies the selected position where the received bit changes.'
        },
        {
          focus: 'intermediate',
          label: 'Recheck the received block',
          description:
            'Each check adds its selected received bits modulo two. A failed even-parity check is one; a passing check is zero. The overlapping check groups give each position a different pattern.'
        },
        {
          focus: 'output',
          label: 'Read the address and recover the label',
          description:
            'Read the three check results with weights one, two and four. The green address points to the repair, and the cyan recovered data matches the original label.'
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
