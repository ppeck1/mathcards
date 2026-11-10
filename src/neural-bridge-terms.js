/* Build-only or narrative data for the neural bridge family. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNeuralBridgeTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'neural-summation',
        title: 'Excitation and inhibition: a signed sum',
        category: 'linear',
        symbols: [],
        tokens: [],
        aliases: ['Excitation and inhibition: a signed sum', 'neural summation'],
        wordMatches: ['Excitation and inhibition: a signed sum'],
        definition:
          'A linear artificial unit combines signed weighted inputs. Here the approach input e has a fixed positive gain a=2 and the braking input i has a fixed subtractive gain b=1. Their nonnegative drive magnitudes are E=ae and I=bi, and the signed net drive is y=E−I. Equal raw inputs do not cancel because their gains differ.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Excitation and inhibition: a signed sum',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['linear-combination', 'neural-weight', 'dimensionless']
      },
      {
        id: 'neural-excitation',
        title: 'Dimensionless approach-channel input',
        category: 'linear',
        symbols: ['e'],
        tokens: ['e'],
        mathSymbols: ['e'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless approach-channel input. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Dimensionless approach-channel input',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-inhibition',
        title: 'Dimensionless braking-channel input',
        category: 'linear',
        symbols: ['i'],
        tokens: ['i'],
        mathSymbols: ['i'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless braking-channel input. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Dimensionless braking-channel input',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-gain-excitation',
        title: 'Fixed positive approach gain, equal to two',
        category: 'linear',
        symbols: ['a'],
        tokens: ['a'],
        mathSymbols: ['a'],
        aliases: [],
        wordMatches: [],
        definition:
          'Fixed positive approach gain, equal to two. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Fixed positive approach gain, equal to two',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-gain-inhibition',
        title: 'Fixed positive braking magnitude gain, equal to one',
        category: 'linear',
        symbols: ['b'],
        tokens: ['b'],
        mathSymbols: ['b'],
        aliases: [],
        wordMatches: [],
        definition:
          'Fixed positive braking magnitude gain, equal to one. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Fixed positive braking magnitude gain, equal to one',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-excitatory-drive',
        title: 'Nonnegative weighted approach drive',
        category: 'linear',
        symbols: ['E'],
        tokens: ['E'],
        mathSymbols: ['E'],
        aliases: [],
        wordMatches: [],
        definition:
          'Nonnegative weighted approach drive. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Nonnegative weighted approach drive',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-inhibitory-drive',
        title: 'Nonnegative weighted braking magnitude, subtracted from E',
        category: 'linear',
        symbols: ['I'],
        tokens: ['I'],
        mathSymbols: ['I'],
        aliases: [],
        wordMatches: [],
        definition:
          'Nonnegative weighted braking magnitude, subtracted from E. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Nonnegative weighted braking magnitude, subtracted from E',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'neural-output',
        title: 'Signed net drive of the artificial unit',
        category: 'linear',
        symbols: ['y'],
        tokens: ['y'],
        mathSymbols: ['y'],
        aliases: [],
        wordMatches: [],
        definition:
          'Signed net drive of the artificial unit. Multiply each input by its fixed gain, retain the inhibitory contribution’s minus sign, and combine both contributions. Balance requires i=2e, not equal raw inputs.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Signed net drive of the artificial unit',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'excitation-inhibition',
        title: 'Excitation and inhibition in an artificial unit',
        category: 'linear',
        symbols: [],
        tokens: [],
        aliases: ['excitation and inhibition', 'adding channel', 'subtracting channel'],
        wordMatches: ['excitation and inhibition', 'adding channel', 'subtracting channel'],
        definition:
          'Positive and negative signed input effects in this artificial computation. Excitation increases this linear drive; inhibition decreases it. These signs describe the stated algebra and do not determine the physiology of a biological neuron.',
        example:
          'The adding contribution is about 1.2 and the subtracted magnitude is 0.4. Their net drive is about 0.8.',
        readAs: 'Excitation and inhibition in an artificial unit',
        sourceKeys: ['neural_bridge_neural_summation'],
        grammarCards: ['neural-summation'],
        formulaCards: ['neural-summation'],
        relatedIds: ['neural-summation']
      },
      {
        id: 'receptive-field',
        title: 'Receptive fields: center versus surround',
        category: 'linear',
        symbols: [],
        tokens: [],
        aliases: ['Receptive fields: center versus surround', 'receptive field'],
        wordMatches: ['Receptive fields: center versus surround'],
        definition:
          'A spatial receptive-field model weights inputs by where they occur. This five-site center-surround filter uses middle gray setting c and four equal surrounding settings s. The center weight is one and every surrounding weight is −g/4. The total surrounding magnitude is S=gs, so the signed filter response is r=c−S. At g=1 all uniform gray levels cancel; black input cancels at every gain.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Receptive fields: center versus surround',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['linear-combination', 'neural-weight', 'dimensionless']
      },
      {
        id: 'receptive-center',
        title: 'Dimensionless gray setting at the middle site',
        category: 'linear',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless gray setting at the middle site. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Dimensionless gray setting at the middle site',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-surround',
        title: 'Dimensionless gray setting shared by the four surrounding sites',
        category: 'linear',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: [],
        wordMatches: [],
        definition:
          'Dimensionless gray setting shared by the four surrounding sites. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Dimensionless gray setting shared by the four surrounding sites',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-gain',
        title: 'Nonnegative total surround gain',
        category: 'linear',
        symbols: ['g'],
        tokens: ['g'],
        mathSymbols: ['g'],
        aliases: [],
        wordMatches: [],
        definition:
          'Nonnegative total surround gain. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Nonnegative total surround gain',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-surround-total',
        title: 'Total nonnegative surrounding magnitude gs',
        category: 'linear',
        symbols: ['S'],
        tokens: ['S'],
        mathSymbols: ['S'],
        aliases: [],
        wordMatches: [],
        definition:
          'Total nonnegative surrounding magnitude gs. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Total nonnegative surrounding magnitude gs',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-output',
        title: 'Signed spatial filter response',
        category: 'linear',
        symbols: ['r'],
        tokens: ['r'],
        mathSymbols: ['r'],
        aliases: [],
        wordMatches: [],
        definition:
          'Signed spatial filter response. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Signed spatial filter response',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-pixels',
        title: 'Five-site vector of gray settings',
        category: 'linear',
        symbols: ['x⃗'],
        tokens: ['x⃗', '\\vec{x}'],
        mathSymbols: ['x⃗', '\\vec{x}'],
        aliases: [],
        wordMatches: [],
        definition:
          'Five-site vector of gray settings. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Five-site vector of gray settings',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'receptive-weights',
        title: 'Five-site vector of signed spatial weights',
        category: 'linear',
        symbols: ['w⃗'],
        tokens: ['w⃗', '\\vec{w}'],
        mathSymbols: ['w⃗', '\\vec{w}'],
        aliases: [],
        wordMatches: [],
        definition:
          'Five-site vector of signed spatial weights. Multiply each displayed tile setting by its spatial weight. Four equal surrounding contributions add to −gs; combining them with the center gives c−gs.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Five-site vector of signed spatial weights',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      },
      {
        id: 'center-surround-filter',
        title: 'Center-surround filter',
        category: 'linear',
        symbols: [],
        tokens: [],
        aliases: ['center-surround filter', 'spatial weights', 'surrounding weights'],
        wordMatches: ['center-surround filter', 'spatial weights', 'surrounding weights'],
        definition:
          'A spatial filter with opposite signs for the central region and its surrounding region. This finite construction has one center weight and four equal surrounding weights. It is not an empirical estimate of a biological receptive field.',
        example:
          'The four neighboring products each contribute about −0.075. Their total magnitude is 0.3, leaving a positive response of about 0.5.',
        readAs: 'Center-surround filter',
        sourceKeys: ['neural_bridge_receptive_field'],
        grammarCards: ['receptive-field'],
        formulaCards: ['receptive-field'],
        relatedIds: ['receptive-field']
      }
    ],
    sources: {
      neural_bridge_neural_summation: {
        title: 'Dive into Deep Learning · Linear Regression as a Neural Network',
        url: 'https://d2l.ai/chapter_linear-regression/linear-regression.html'
      },
      neural_bridge_receptive_field: {
        title: 'Neuronal Dynamics · Encoding Models in Systems Neuroscience',
        url: 'https://neuronaldynamics.epfl.ch/online/Ch11.S2.html'
      }
    }
  };
  const freeze = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      Object.values(value).forEach(freeze);
      Object.freeze(value);
    }
    return value;
  };
  return freeze(data);
});
