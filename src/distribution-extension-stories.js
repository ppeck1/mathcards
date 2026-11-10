/* Original distribution teaching data; no clocks or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDistributionExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:distribution-extension:normal-distribution',
        slug: 'normal-distribution',
        scene: 'normal-distribution-distribution-scene',
        unit: 'probability',
        title: 'How much of a cutting-error model lies below a chosen tolerance?',
        eyebrow: 'From measurements to probability',
        presentation: {
          compact: true,
          controlHint:
            'Move one quantity. Follow the highlighted reading into its calculation and picture.'
        },
        summary:
          'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        context:
          'A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.',
        question: 'How much of a cutting-error model lies below a chosen tolerance?',
        variables: [
          {
            key: 'threshold',
            symbol: 'x',
            label: 'Error threshold x',
            unit: 'mm',
            min: -6,
            max: 6,
            step: 0.05
          },
          {
            key: 'mean',
            symbol: 'μ',
            label: 'Mean error μ',
            unit: 'mm',
            min: -2,
            max: 2,
            step: 0.05
          },
          {
            key: 'sigma',
            symbol: 'σ',
            label: 'Standard deviation σ',
            unit: 'mm',
            min: 0.25,
            max: 2,
            step: 0.05
          }
        ],
        parameters: {
          threshold: 1,
          mean: 0,
          sigma: 1
        },
        timeline: {
          key: 'threshold',
          from: -4,
          to: 4,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared model',
            body: 'A workshop measures signed cutting errors in millimetres around a target length. Its chosen model has mean error μ and standard deviation σ. Slide a tolerance x across the density, then follow the standardized distance z into the area below x.',
            formula:
              'z=\\frac{x-\\mu}{\\sigma},\\quad f(x)=\\frac{\\exp(-(x-\\mu)^2/(2\\sigma^2))}{\\sigma\\sqrt{2\\pi}},\\quad F(x)=\\Phi(z).',
            focusLabel: 'The declared model',
            focusDescription:
              'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Locate the tolerance',
            body: 'Choose the threshold, center and positive spread of this one declared error model.',
            formula: 'x = {{threshold}} mm; μ = {{mean}} mm; σ = {{sigma}} mm',
            focusLabel: 'Locate the tolerance',
            focusDescription:
              'Choose the threshold, center and positive spread of this one declared error model.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Measure standardized distance',
            body: 'The same physical tolerance can be nearer or farther in standard-deviation units.',
            formula: 'z = ({{threshold}} − {{mean}})/{{sigma}} = {{z}}',
            focusLabel: 'Measure standardized distance',
            focusDescription:
              'The same physical tolerance can be nearer or farther in standard-deviation units.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Accumulate the full area',
            body: 'Follow the tolerance into the gold area and the full probability strip.',
            formula: 'F(x) = Φ({{z}}) ≈ {{output}}',
            focusLabel: 'Accumulate the full area',
            focusDescription:
              'Follow the tolerance into the gold area and the full probability strip.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Locate the tolerance',
            template: 'x = {{threshold}} mm; μ = {{mean}} mm; σ = {{sigma}} mm',
            description:
              'Choose the threshold, center and positive spread of this one declared error model.'
          },
          {
            role: 'intermediate',
            label: 'Measure standardized distance',
            template: 'z = ({{threshold}} − {{mean}})/{{sigma}} = {{z}}',
            description:
              'The same physical tolerance can be nearer or farther in standard-deviation units.'
          },
          {
            role: 'output',
            label: 'Accumulate the full area',
            template: 'F(x) = Φ({{z}}) ≈ {{output}}',
            description: 'Follow the tolerance into the gold area and the full probability strip.'
          }
        ],
        assumptions: [
          'A declared normal model describes signed cutting errors in mm, with μ from −2 to 2 and σ from 0.25 to 2. Probability is area, not density height or probability at one point. The fixed density window −10 to 10 mm omits tails without renormalizing. The full CDF is approximated by 32/64-node Gauss–Legendre quadrature and tested against erfc; measured-grid accuracy is not a proof of a global error bound. No normality or central-limit theorem is inferred.'
        ],
        sourceRefs: [
          'source:distribution-extensions:normal',
          'source:distribution-extensions:quadrature'
        ],
        conclusion:
          'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
      },
      {
        id: 'story:distribution-extension:exponential-distribution',
        slug: 'exponential-distribution',
        scene: 'exponential-distribution-distribution-scene',
        unit: 'probability',
        title: 'What is the chance the next workshop order arrives within the wait?',
        eyebrow: 'From measurements to probability',
        presentation: {
          compact: true,
          controlHint:
            'Move one quantity. Follow the highlighted reading into its calculation and picture.'
        },
        summary:
          'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        context:
          'A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.',
        question: 'What is the chance the next workshop order arrives within the wait?',
        variables: [
          {
            key: 'time',
            symbol: 't',
            label: 'Waiting threshold t',
            unit: 'min',
            min: 0,
            max: 8,
            step: 0.05
          },
          {
            key: 'rate',
            symbol: 'λ',
            label: 'Arrival rate λ',
            unit: 'per min',
            min: 0.25,
            max: 2,
            step: 0.05
          }
        ],
        parameters: {
          time: 2,
          rate: 0.5
        },
        timeline: {
          key: 'time',
          from: 0,
          to: 8,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared model',
            body: 'A workshop receives independent arrivals under a chosen constant-rate model. Move the waiting threshold t, or change the assumed arrival rate λ. Gold marks the chance of an arrival by t; the remaining strip shows the chance of still waiting.',
            formula:
              'F(t)=1-e^{-\\lambda t},\\quad S(t)=e^{-\\lambda t},\\quad f(t)=\\lambda e^{-\\lambda t},\\quad \\mathbb E[T]=\\frac{1}{\\lambda},\\qquad t\\ge0,\\ \\lambda>0.',
            focusLabel: 'The declared model',
            focusDescription:
              'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the wait and rate',
            body: 'The rate remains constant during the chosen waiting model.',
            formula: 't = {{time}} min; λ = {{rate}} per min',
            focusLabel: 'Declare the wait and rate',
            focusDescription: 'The rate remains constant during the chosen waiting model.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Find the remaining chance',
            body: 'The unarrived fraction decays continuously; its units cancel in the exponent.',
            formula: 'λt = {{exponent}}; S(t) = {{survival}}',
            focusLabel: 'Find the remaining chance',
            focusDescription:
              'The unarrived fraction decays continuously; its units cancel in the exponent.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read the accumulated arrival chance',
            body: 'Gold fills the full-probability strip as the waiting threshold increases.',
            formula: 'F(t) = 1 − {{survival}} = {{output}}',
            focusLabel: 'Read the accumulated arrival chance',
            focusDescription:
              'Gold fills the full-probability strip as the waiting threshold increases.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the wait and rate',
            template: 't = {{time}} min; λ = {{rate}} per min',
            description: 'The rate remains constant during the chosen waiting model.'
          },
          {
            role: 'intermediate',
            label: 'Find the remaining chance',
            template: 'λt = {{exponent}}; S(t) = {{survival}}',
            description:
              'The unarrived fraction decays continuously; its units cancel in the exponent.'
          },
          {
            role: 'output',
            label: 'Read the accumulated arrival chance',
            template: 'F(t) = 1 − {{survival}} = {{output}}',
            description: 'Gold fills the full-probability strip as the waiting threshold increases.'
          }
        ],
        assumptions: [
          'A constant-rate memoryless arrival model uses λ from 0.25 to 2 per min and t from 0 to 8 min. A finite displayed time window does not remove its mathematical tail. Mean wait is 1/λ min. The rate is fixed within a model and no actual workshop arrival process is certified.'
        ],
        sourceRefs: ['source:distribution-extensions:exponential'],
        conclusion:
          'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
      },
      {
        id: 'story:distribution-extension:sign-test',
        slug: 'sign-test',
        scene: 'sign-test-distribution-scene',
        unit: 'probability',
        title: 'How unusual are this many positive paired changes under a fair-sign model?',
        eyebrow: 'From measurements to probability',
        presentation: {
          compact: true,
          controlHint:
            'Move one quantity. Follow the highlighted reading into its calculation and picture.'
        },
        summary:
          'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        context:
          'A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.',
        question: 'How unusual are this many positive paired changes under a fair-sign model?',
        variables: [
          {
            key: 'shift',
            symbol: 'h',
            label: 'Added after-reading shift h',
            unit: 'mm',
            min: -4,
            max: 4,
            step: 0.05
          }
        ],
        parameters: {
          shift: 1.5,
          pattern: 'varied'
        },
        timeline: {
          key: 'shift',
          from: -4,
          to: 3,
          durationMs: 18000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared model',
            body: 'A workshop measures six pieces before and after adjusting a gauge. The same pieces stay paired. Choose either different original changes or originally matching readings; add a common after-reading shift h. Follow each pair into a positive, negative or zero difference, then count the null sign patterns with at least as many positives.',
            formula:
              'd_i=(a_i-b_i)+h,\\quad k=\\#\\{i:d_i>0\\},\\quad n=\\#\\{i:d_i\\ne0\\},\\quad K\\sim\\operatorname{Binomial}(n,\\tfrac12),\\quad p_+=\\sum_{j=k}^{n}\\binom{n}{j}2^{-n}.',
            focusLabel: 'The declared model',
            focusDescription:
              'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Move the after-readings',
            body: 'Compare each changed reading with its own before-reading; keep the pairing intact.',
            formula: 'h = {{shift}} mm',
            focusLabel: 'Move the after-readings',
            focusDescription:
              'Compare each changed reading with its own before-reading; keep the pairing intact.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Keep directions, omit exact ties',
            body: 'Only nonzero directions enter the conditional fair-sign null. Magnitudes remain visible in the paired scene.',
            formula: 'k = {{positive}}; n = {{n}}; ties = {{ties}}',
            focusLabel: 'Keep directions, omit exact ties',
            focusDescription:
              'Only nonzero directions enter the conditional fair-sign null. Magnitudes remain visible in the paired scene.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Count the selected null patterns',
            body: 'Gold null masses have at least the observed number of positive changes.',
            formula: 'p₊ = {{tailWays}}/{{denominator}} = {{output}}',
            focusLabel: 'Count the selected null patterns',
            focusDescription:
              'Gold null masses have at least the observed number of positive changes.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Move the after-readings',
            template: 'h = {{shift}} mm',
            description:
              'Compare each changed reading with its own before-reading; keep the pairing intact.'
          },
          {
            role: 'intermediate',
            label: 'Keep directions, omit exact ties',
            template: 'k = {{positive}}; n = {{n}}; ties = {{ties}}',
            description:
              'Only nonzero directions enter the conditional fair-sign null. Magnitudes remain visible in the paired scene.'
          },
          {
            role: 'output',
            label: 'Count the selected null patterns',
            template: 'p₊ = {{tailWays}}/{{denominator}} = {{output}}',
            description: 'Gold null masses have at least the observed number of positive changes.'
          }
        ],
        assumptions: [
          'Six constructed pairs use independent-pair and conditional fair-sign assumptions: under the null each nonzero difference has probability 1/2 of either sign. A continuous difference distribution with median zero supplies the usual median interpretation. This does not assert equality of the raw before/after medians. A nonzero difference lost in a represented after-reading is a precision failure. Exact zeros are omitted; with substantial ties the conditional fair-sign model needs separate justification. All ties provide no sign evidence. The alternative, positive differences, is one-sided and predeclared; interactive exploration is not an inferential study.'
        ],
        sourceRefs: [
          'source:distribution-extensions:sign',
          'source:distribution-extensions:median'
        ],
        conclusion:
          'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
      }
    ],
    quantities: {
      'normal-distribution': {
        threshold: {
          label: 'Error threshold x',
          role: 'input',
          unit: 'mm',
          description: 'Signed error threshold in mm'
        },
        mean: {
          label: 'Mean error μ',
          role: 'input',
          unit: 'mm',
          description: 'Mean of the declared normal error model in mm'
        },
        sigma: {
          label: 'Standard deviation σ',
          role: 'input',
          unit: 'mm',
          description: 'Positive standard deviation of the declared model in mm'
        },
        z: {
          label: 'Standardized threshold in standard-deviation units',
          role: 'intermediate',
          unit: '',
          description:
            'Standardized threshold in standard-deviation units. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        density: {
          label: 'Probability density height per mm at the threshold',
          role: 'intermediate',
          unit: '',
          description:
            'Probability density height per mm at the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        cumulative: {
          label: 'Cumulative probability of an error at or below the threshold',
          role: 'output',
          unit: 'probability',
          description:
            'Cumulative probability of an error at or below the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        output: {
          label: 'Cumulative probability of an error at or below the threshold',
          role: 'output',
          unit: 'probability',
          description:
            'Cumulative probability of an error at or below the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        survival: {
          label: 'Probability beyond the threshold',
          role: 'intermediate',
          unit: '',
          description:
            'Probability beyond the threshold. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        standardDensity: {
          label: 'Standard normal density at z',
          role: 'intermediate',
          unit: '',
          description:
            'Standard normal density at z. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        },
        windowMass: {
          label: 'Probability inside the fixed drawn density window',
          role: 'intermediate',
          unit: '',
          description:
            'Probability inside the fixed drawn density window. Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
        }
      },
      'exponential-distribution': {
        waitingLaw: {
          label: 'Random waiting duration T',
          role: 'reference',
          unit: 'min',
          description:
            'The nonnegative random duration T is described by the current exponential law. Its density, cumulative and survival curves share the selected rate. The slider chooses a threshold t; it does not turn the random variable into one observed wait.'
        },
        time: {
          label: 'Waiting threshold t',
          role: 'input',
          unit: 'min',
          description: 'Nonnegative waiting threshold in minutes'
        },
        rate: {
          label: 'Arrival rate λ',
          role: 'input',
          unit: 'per min',
          description: 'Positive arrival rate per minute'
        },
        cumulative: {
          label: 'Probability that the next arrival occurs by the waiting threshold',
          role: 'output',
          unit: 'probability',
          description:
            'Probability that the next arrival occurs by the waiting threshold. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        output: {
          label: 'Probability that the next arrival occurs by the waiting threshold',
          role: 'output',
          unit: 'probability',
          description:
            'Probability that the next arrival occurs by the waiting threshold. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        survival: {
          label: 'Probability of still waiting beyond the threshold',
          role: 'intermediate',
          unit: 'probability',
          description:
            'Probability of still waiting beyond the threshold. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        density: {
          label: 'Waiting-time density height per minute',
          role: 'intermediate',
          unit: '',
          description:
            'Waiting-time density height per minute. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        meanWait: {
          label: 'Mean waiting duration in minutes',
          role: 'intermediate',
          unit: '',
          description:
            'Mean waiting duration in minutes. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        exponent: {
          label: 'Dimensionless rate-times-wait product',
          role: 'intermediate',
          unit: '',
          description:
            'Dimensionless rate-times-wait product. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        },
        windowMass: {
          label: 'Probability inside the displayed time window',
          role: 'intermediate',
          unit: '',
          description:
            'Probability inside the displayed time window. Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
        }
      },
      'sign-test': {
        shift: {
          label: 'Added after-reading shift h',
          role: 'input',
          unit: 'mm',
          description: 'Common added after-reading shift in mm'
        },
        pairs: {
          label: 'Unshifted after-reading for pair i in mm',
          role: 'intermediate',
          unit: '',
          description:
            'Unshifted after-reading for pair i in mm. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        positive: {
          label: 'Number of positive differences',
          role: 'intermediate',
          unit: '',
          description:
            'Number of positive differences. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        n: {
          label: 'Number of nonzero differences after exact ties are omitted',
          role: 'intermediate',
          unit: '',
          description:
            'Number of nonzero differences after exact ties are omitted. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        masses: {
          label: 'Positive-sign count under the conditional fair-sign null',
          role: 'intermediate',
          unit: '',
          description:
            'Positive-sign count under the conditional fair-sign null. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        output: {
          label: 'One-sided null tail probability for at least k positive signs',
          role: 'output',
          unit: 'probability',
          description:
            'One-sided null tail probability for at least k positive signs. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        pattern: {
          label: 'Chosen unshifted reading pattern',
          role: 'reference',
          unit: '',
          description:
            'Chosen unshifted reading pattern. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        negative: {
          label: 'Number of negative differences',
          role: 'intermediate',
          unit: '',
          description:
            'Number of negative differences. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        ties: {
          label: 'Number of exact zero differences',
          role: 'intermediate',
          unit: '',
          description:
            'Number of exact zero differences. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        tailWays: {
          label: 'Number of selected equally likely null sign patterns',
          role: 'intermediate',
          unit: '',
          description:
            'Number of selected equally likely null sign patterns. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        },
        denominator: {
          label: 'Number of all equally likely null sign patterns',
          role: 'intermediate',
          unit: '',
          description:
            'Number of all equally likely null sign patterns. Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
        }
      }
    },
    links: {
      'normal-distribution': {
        variableKey: 'threshold',
        symbol: 'x',
        variableLabel: 'Error threshold x',
        unit: 'mm',
        effectLabel:
          'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared model',
            description:
              'Subtract the mean error from the threshold, divide by the positive standard deviation, and evaluate the standard normal CDF. The density curve supplies a height per millimetre; its accumulated area supplies probability.'
          },
          {
            focus: 'input',
            label: 'Locate the tolerance',
            description:
              'Choose the threshold, center and positive spread of this one declared error model.'
          },
          {
            focus: 'intermediate',
            label: 'Measure standardized distance',
            description:
              'The same physical tolerance can be nearer or farther in standard-deviation units.'
          },
          {
            focus: 'output',
            label: 'Accumulate the full area',
            description: 'Follow the tolerance into the gold area and the full probability strip.'
          }
        ]
      },
      'exponential-distribution': {
        variableKey: 'time',
        symbol: 't',
        variableLabel: 'Waiting threshold t',
        unit: 'min',
        effectLabel:
          'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared model',
            description:
              'Multiply arrival rate by elapsed waiting time, exponentiate its negative to obtain survival, and subtract survival from one for cumulative arrival probability. Waiting duration differs from the number of events in a fixed interval.'
          },
          {
            focus: 'input',
            label: 'Declare the wait and rate',
            description: 'The rate remains constant during the chosen waiting model.'
          },
          {
            focus: 'intermediate',
            label: 'Find the remaining chance',
            description:
              'The unarrived fraction decays continuously; its units cancel in the exponent.'
          },
          {
            focus: 'output',
            label: 'Read the accumulated arrival chance',
            description: 'Gold fills the full-probability strip as the waiting threshold increases.'
          }
        ]
      },
      'sign-test': {
        variableKey: 'shift',
        symbol: 'h',
        variableLabel: 'Added after-reading shift h',
        unit: 'mm',
        effectLabel:
          'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared model',
            description:
              'Compute each shifted after-reading minus its paired before-reading. Omit exact zeros, count k positives among n nonzero pairs, and sum the fair binomial masses from k through n for the predeclared positive-direction alternative.'
          },
          {
            focus: 'input',
            label: 'Move the after-readings',
            description:
              'Compare each changed reading with its own before-reading; keep the pairing intact.'
          },
          {
            focus: 'intermediate',
            label: 'Keep directions, omit exact ties',
            description:
              'Only nonzero directions enter the conditional fair-sign null. Magnitudes remain visible in the paired scene.'
          },
          {
            focus: 'output',
            label: 'Count the selected null patterns',
            description: 'Gold null masses have at least the observed number of positive changes.'
          }
        ]
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
  freeze(data);
  return Object.freeze({
    all: () => data.stories.slice(),
    forSlug: s => data.stories.find(v => v.slug === s) || null,
    find: id => data.stories.find(v => v.id === id) || null,
    quantityFor: (s, k) =>
      Object.hasOwn(data.quantities, s) && Object.hasOwn(data.quantities[s], k)
        ? data.quantities[s][k]
        : null,
    linksFor: s => (Object.hasOwn(data.links, s) ? data.links[s] : null)
  });
});
