(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInformationBridgeTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'channel-capacity',
        title: 'Channel capacity: a binary symmetric link',
        category: 'chance',
        symbols: [],
        tokens: [],
        aliases: ['channel capacity: a binary symmetric link', 'channel capacity'],
        definition:
          'Channel capacity C is the largest mutual information per channel use among the allowed input distributions. For a memoryless binary symmetric channel with flip probability p, C=1−H₂(p) bits per use. A chosen probability q of sending one gives received-one chance t=p+q(1−2p) and mutual information I=H₂(t)−H₂(p). An equally likely input mix reaches the capacity; an uneven mix can supply less information through the same link.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Channel capacity: a binary symmetric link',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['entropy', 'mutual-information']
      },
      {
        id: 'bridge-binary-entropy-function',
        title: 'Binary entropy function',
        category: 'chance',
        symbols: ['H₂', 'H₂(p)', 'H₂(t)'],
        tokens: ['H₂', 'H₂(p)', 'H₂(t)', 'H_2', 'H_2(p)', 'H_2(t)'],
        mathSymbols: ['H₂', 'H₂(p)', 'H₂(t)', 'H_2', 'H_2(p)', 'H_2(t)'],
        aliases: ['binary entropy', 'binary entropy function'],
        definition:
          'The binary entropy H₂(u)=−u log₂u−(1−u)log₂(1−u) measures uncertainty of a binary variable. Zero terms use their continuous limit. Here its values at p and t enter the capacity and mutual-information calculations.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Binary entropy function',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['entropy', 'logarithm']
      },
      {
        id: 'bridge-channel-flip',
        title: 'Channel flip probability',
        category: 'chance',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        aliases: ['flip probability'],
        definition:
          'The probability p that either sent binary symbol is inverted on this channel. It describes the channel rule, separately from the sent-one probability q.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Channel flip probability',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['binary-symmetric-channel']
      },
      {
        id: 'bridge-channel-input',
        title: 'Input-one probability',
        category: 'chance',
        symbols: ['q'],
        tokens: ['q'],
        mathSymbols: ['q'],
        aliases: ['input mix', 'input-one probability'],
        definition:
          'The chosen probability q of sending the binary symbol one. It changes the input distribution while leaving the channel’s flip probability p fixed.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Input-one probability',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['probability']
      },
      {
        id: 'bridge-channel-output',
        title: 'Received-one probability',
        category: 'chance',
        symbols: ['t'],
        tokens: ['t'],
        mathSymbols: ['t'],
        aliases: ['received-one probability'],
        definition:
          'The probability t=p+q(1−2p) of receiving one, found by adding the disjoint routes from the two possible sent symbols.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Received-one probability',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['joint-distribution']
      },
      {
        id: 'bridge-channel-noise',
        title: 'Noise entropy',
        category: 'chance',
        symbols: ['H₂(p)'],
        tokens: ['H₂(p)', 'H_2(p)'],
        mathSymbols: ['H₂(p)', 'H_2(p)'],
        aliases: ['noise entropy'],
        definition:
          'The binary entropy of the flip uncertainty. It is the conditional output entropy for either input symbol of this symmetric channel.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Noise entropy',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['conditional-entropy', 'entropy']
      },
      {
        id: 'bridge-channel-output-entropy',
        title: 'Received-symbol entropy',
        category: 'chance',
        symbols: ['H₂(t)'],
        tokens: ['H₂(t)', 'H_2(t)'],
        mathSymbols: ['H₂(t)', 'H_2(t)'],
        aliases: ['output entropy', 'received-symbol entropy'],
        definition:
          'The entropy of the received binary symbol at received-one probability t. It cannot exceed one bit and is one bit for equally likely outputs.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Received-symbol entropy',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['entropy']
      },
      {
        id: 'bridge-current-information',
        title: 'Information for the chosen input mix',
        category: 'chance',
        symbols: ['I'],
        tokens: ['I'],
        mathSymbols: ['I'],
        aliases: ['current mutual information', 'chosen information'],
        definition:
          'The mutual information supplied by the selected input distribution, H₂(t)−H₂(p). It may be below capacity even when the channel itself is unchanged.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Information for the chosen input mix',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['mutual-information']
      },
      {
        id: 'bridge-capacity-value',
        title: 'Binary channel capacity',
        category: 'chance',
        symbols: ['C'],
        tokens: ['C'],
        mathSymbols: ['C'],
        aliases: ['capacity limit'],
        definition:
          'The maximum mutual information over all input distributions for the stated channel. The binary symmetric case is C=1−H₂(p) bits per channel use.',
        example:
          'The channel capacity is about 0.5310 bits per use. This biased input mix supplies about 0.4123 bits per use, below that capacity.',
        readAs: 'Binary channel capacity',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['channel-capacity', 'mutual-information']
      },
      {
        id: 'hamming-code',
        title: 'Hamming code: locating one flipped bit',
        category: 'discrete',
        symbols: [],
        tokens: [],
        aliases: ['hamming code: locating one flipped bit', 'hamming code'],
        definition:
          'A (7,4) Hamming code block adds three parity bits to four data bits. With even parity, the checks on positions 1,3,5,7; 2,3,6,7; and 4,5,6,7 produce bits s₁, s₂ and s₄. Their weighted sum s=s₁+2s₂+4s₄ is the syndrome. With no flip it is zero; with one flipped bit it gives that bit’s ordinary position from one through seven. This single-error correction step restores the encoded block and the original four-bit data.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Hamming code: locating one flipped bit',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['binary-numeral', 'parity']
      },
      {
        id: 'bridge-data-word',
        title: 'Four-bit data label',
        category: 'discrete',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['four-bit data', 'data label'],
        definition:
          'The whole value d from zero to fifteen identifies the original four data bits. Leading zero bits are kept when writing its four-bit binary label.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Four-bit data label',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['binary-numeral']
      },
      {
        id: 'bridge-error-selection',
        title: 'Selected flip position',
        category: 'discrete',
        symbols: ['j'],
        tokens: ['j'],
        mathSymbols: ['j'],
        aliases: ['flipped position', 'single bit flip'],
        definition:
          'The ordinary position j of the chosen single bit flip. Positions are numbered one through seven; zero is a separate choice for no flip.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Selected flip position',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['hamming-code']
      },
      {
        id: 'bridge-codeword',
        title: 'Encoded Hamming word',
        category: 'discrete',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: ['codeword', 'encoded block', 'seven-bit word'],
        definition:
          'The seven-bit block c contains four data bits and three even-parity bits. Its three parity-check sums are zero modulo two before any error.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Encoded Hamming word',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['hamming-code', 'parity']
      },
      {
        id: 'bridge-received-word',
        title: 'Received Hamming word',
        category: 'discrete',
        symbols: ['r', 'r₁', 'r₂', 'r₃', 'r₄', 'r₅', 'r₆', 'r₇'],
        tokens: [
          'r',
          'r₁',
          'r₂',
          'r₃',
          'r₄',
          'r₅',
          'r₆',
          'r₇',
          'r_1',
          'r_2',
          'r_3',
          'r_4',
          'r_5',
          'r_6',
          'r_7'
        ],
        mathSymbols: [
          'r',
          'r₁',
          'r₂',
          'r₃',
          'r₄',
          'r₅',
          'r₆',
          'r₇',
          'r_1',
          'r_2',
          'r_3',
          'r_4',
          'r_5',
          'r_6',
          'r_7'
        ],
        aliases: ['received block', 'received word'],
        definition:
          'The seven received bits form r. A subscript identifies one ordinary position in that received block, including its parity bits; the check equations use these received values.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Received Hamming word',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-codeword']
      },
      {
        id: 'bridge-check-one',
        title: 'First parity check',
        category: 'discrete',
        symbols: ['s₁'],
        tokens: ['s₁', 's_1'],
        mathSymbols: ['s₁', 's_1'],
        aliases: ['first parity check'],
        definition:
          'The sum modulo two of received positions one, three, five and seven. Its value is the least significant bit in the syndrome address.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'First parity check',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-syndrome', 'modulo']
      },
      {
        id: 'bridge-check-two',
        title: 'Second parity check',
        category: 'discrete',
        symbols: ['s₂'],
        tokens: ['s₂', 's_2'],
        mathSymbols: ['s₂', 's_2'],
        aliases: ['second parity check'],
        definition:
          'The sum modulo two of received positions two, three, six and seven. Its value has weight two in the syndrome address.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Second parity check',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-syndrome', 'modulo']
      },
      {
        id: 'bridge-check-four',
        title: 'Third parity check',
        category: 'discrete',
        symbols: ['s₄'],
        tokens: ['s₄', 's_4'],
        mathSymbols: ['s₄', 's_4'],
        aliases: ['third parity check'],
        definition:
          'The sum modulo two of received positions four, five, six and seven. Its value has weight four in the syndrome address.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Third parity check',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-syndrome', 'modulo']
      },
      {
        id: 'bridge-syndrome',
        title: 'Hamming syndrome',
        category: 'discrete',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['syndrome', 'syndrome address'],
        definition:
          'The weighted address s=s₁+2s₂+4s₄. It is zero with no selected flip and equals the changed position for the supported single-error cases.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Hamming syndrome',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['hamming-code', 'binary-numeral']
      },
      {
        id: 'bridge-recovered-label',
        title: 'Recovered data value',
        category: 'discrete',
        symbols: ['u'],
        tokens: ['u'],
        mathSymbols: ['u'],
        aliases: ['recovered label', 'recovered data'],
        definition:
          'After repairing the syndrome address when it is nonzero, read data positions three, five, six and seven. Their four-bit word represents the recovered whole value u.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Recovered data value',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-data-word']
      },
      {
        id: 'bridge-parity-bit',
        title: 'Parity bit',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['parity bit', 'even-parity bits'],
        definition:
          'An added bit chosen to make a specified group of bit values sum to an even number. The three Hamming check groups overlap so their failure pattern locates a single changed position.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Parity bit',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['parity', 'hamming-code']
      },
      {
        id: 'bridge-error-correction',
        title: 'Single-error correction',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['error correction', 'single-error correction'],
        definition:
          'The repair procedure uses redundant parity information to recover the encoded block when at most one position changes. An ordinary (7,4) Hamming code single-error decoder does not guarantee correct repair of multiple flips.',
        example:
          'The data label is 0101. Checks one and two fail, so the syndrome is three. Repairing position three restores the original label.',
        readAs: 'Single-error correction',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['hamming-code', 'bridge-syndrome']
      },
      {
        id: 'bridge-information-rate-unit',
        title: 'Bits per channel use',
        category: 'units',
        symbols: ['bit/use'],
        tokens: ['bit/use'],
        mathSymbols: ['bit/use'],
        notationKinds: ['unit'],
        aliases: ['bits per channel use'],
        definition:
          'A bit per channel use measures information normalized by one use of this discrete channel. It does not specify uses per second, bandwidth or a physical transmission speed.',
        example: 'C≈0.531 bit/use for a ten-percent-flip channel.',
        readAs: 'Bits per channel use',
        sourceKeys: ['information_bridge_channel_capacity'],
        grammarCards: ['channel-capacity'],
        formulaCards: ['channel-capacity'],
        relatedIds: ['bit']
      },
      {
        id: 'bridge-code-position-unit',
        title: 'Code position selection',
        category: 'units',
        symbols: ['position'],
        tokens: ['position'],
        mathSymbols: ['position'],
        notationKinds: ['unit'],
        aliases: ['code position selection'],
        definition:
          'A code-position reading is an ordinary address from one through seven in this block. Zero is reserved as the no-flip or no-repair selection; this is not a physical distance.',
        example: 'Syndrome 5 names position five.',
        readAs: 'Code position selection',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-syndrome']
      },
      {
        id: 'bridge-data-word-unit',
        title: 'Four-bit word selection',
        category: 'units',
        symbols: ['word choice'],
        tokens: ['word choice'],
        mathSymbols: ['word choice'],
        notationKinds: ['unit'],
        aliases: ['four-bit word selection'],
        definition:
          'A whole word-selection value from zero through fifteen chooses one of sixteen four-bit labels. The label keeps leading zeros when written in binary.',
        example: 'The word selection 5 is written 0101.',
        readAs: 'Four-bit word selection',
        sourceKeys: ['information_bridge_hamming_code'],
        grammarCards: ['hamming-code'],
        formulaCards: ['hamming-code'],
        relatedIds: ['bridge-data-word']
      }
    ],
    sources: {
      information_bridge_channel_capacity: {
        title: 'University of Cambridge · John Daugman, Information Theory',
        url: 'https://www.cl.cam.ac.uk/teaching/1516/InfoTheory/InfoTheoryNotes2015.pdf'
      },
      information_bridge_hamming_code: {
        title: 'Cornell University · CS414, Calculating the Hamming Code',
        url: 'https://www.cs.cornell.edu/courses/cs414/2007su/slides/hamming.html'
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
