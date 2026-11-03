/* Original analysis teaching data; no clocks, DOM or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAnalysisExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:analysis-extension:inverse-function',
        slug: 'inverse-function',
        scene: 'inverse-function-analysis-scene',
        unit: 'cm',
        title: 'Which command produced the position shown by the calibrated stage?',
        eyebrow: 'Reverse a rule · add its repeated changes',
        presentation: {
          compact: true,
          controlHint:
            'Drag one quantity and follow the same value through the calculation and shape.'
        },
        summary:
          'An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        context:
          'A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.',
        question: 'Which command produced the position shown by the calibrated stage?',
        variables: [
          {
            key: 'reading',
            symbol: 'y',
            label: 'Observed position y',
            unit: 'cm',
            min: -8,
            max: 8,
            step: 0.05
          },
          {
            key: 'gain',
            symbol: 'a',
            label: 'Calibration gain a',
            unit: 'dimensionless',
            min: -3,
            max: 3,
            step: 0.05
          },
          {
            key: 'offset',
            symbol: 'b',
            label: 'Zero offset b',
            unit: 'cm',
            min: -3,
            max: 3,
            step: 0.05
          }
        ],
        parameters: {
          reading: 5,
          gain: 2,
          offset: 1
        },
        timeline: {
          key: 'reading',
          to: 6,
          durationMs: 18000,
          from: -6
        },
        steps: [
          {
            id: 'reference',
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared rule',
            body: 'A workshop positioning stage accepts a signed command x in centimetres. Its declared calibration reports position y=ax+b in centimetres. After observing y, a technician removes the zero offset b, then divides by gain a to recover the command. A negative gain means the coordinate axis is reversed.',
            formula:
              'f(x)=ax+b,\\quad a\\ne0,\\qquad f^{-1}(y)=\\frac{y-b}{a},\\qquad f^{-1}(f(x))=x.',
            focusLabel: 'Declared rule and domain',
            focusDescription:
              'An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
            from: 0
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Read the calibrated position',
            body: 'The stage reports {{reading}} cm. Keep its nonzero gain {{gain}} and offset {{offset}} cm explicit.',
            formula: 'y = {{reading}} cm; a = {{gain}}; b = {{offset}} cm',
            focusLabel: 'Read the calibrated position',
            focusDescription:
              'The stage reports {{reading}} cm. Keep its nonzero gain {{gain}} and offset {{offset}} cm explicit.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Undo the offset',
            body: 'Remove the additive offset before undoing the multiplicative gain.',
            formula: 'y − b = {{adjusted}} cm',
            focusLabel: 'Undo the offset',
            focusDescription: 'Remove the additive offset before undoing the multiplicative gain.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Undo the gain',
            body: 'Divide the corrected position by the gain. Applying the forward rule returns approximately {{roundTrip}} cm.',
            formula: 'f⁻¹(y) ≈ {{output}} cm',
            focusLabel: 'Undo the gain',
            focusDescription:
              'Divide the corrected position by the gain. Applying the forward rule returns approximately {{roundTrip}} cm.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Read the calibrated position',
            template: 'y = {{reading}} cm; a = {{gain}}; b = {{offset}} cm',
            description:
              'The stage reports {{reading}} cm. Keep its nonzero gain {{gain}} and offset {{offset}} cm explicit.'
          },
          {
            role: 'intermediate',
            label: 'Undo the offset',
            template: 'y − b = {{adjusted}} cm',
            description: 'Remove the additive offset before undoing the multiplicative gain.'
          },
          {
            role: 'output',
            label: 'Undo the gain',
            template: 'f⁻¹(y) ≈ {{output}} cm',
            description:
              'Divide the corrected position by the gain. Applying the forward rule returns approximately {{roundTrip}} cm.'
          }
        ],
        assumptions: [
          'The affine rule has domain and range all real numbers for nonzero a. This demonstration bounds y to [−8,8] cm and b to [−3,3] cm, with gain a in [−3,3] and |a| at least 0.25. The inverse domain is the original range; its inverse range is the original domain. The calibration is declared, not fitted to measurements. Numerical round trips approximate the exact algebraic identity. A nonzero recovered command that underflows is reported as a precision failure.'
        ],
        sourceRefs: ['source:analysis-extension:inverse'],
        conclusion: 'The original command is 2 cm; the forward check gives 2×2+1=5 cm.'
      },
      {
        id: 'story:analysis-extension:geometric-series',
        slug: 'geometric-series',
        scene: 'geometric-series-analysis-scene',
        unit: 'cm',
        title: 'Where does the stage finish after a whole number of repeated corrections?',
        eyebrow: 'Reverse a rule · add its repeated changes',
        presentation: {
          compact: true,
          controlHint:
            'Drag one quantity and follow the same value through the calculation and shape.'
        },
        summary:
          'A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        context:
          'A positioning script sends a first forward correction a centimetres. Each later signed correction is r times the previous correction. Add exactly n commands to find the endpoint. A negative ratio alternates forward and backward corrections; the signed sum is net displacement, not distance travelled or a simulation of a mechanical controller.',
        question: 'Where does the stage finish after a whole number of repeated corrections?',
        variables: [
          {
            key: 'ratio',
            symbol: 'r',
            label: 'Correction ratio r',
            unit: 'dimensionless',
            min: -1.5,
            max: 1.5,
            step: 0.05
          },
          {
            key: 'first',
            symbol: 'a',
            label: 'First correction a',
            unit: 'cm',
            min: 0.25,
            max: 4,
            step: 0.05
          },
          {
            key: 'terms',
            symbol: 'n',
            label: 'Commands to add n',
            unit: 'commands',
            min: 1,
            max: 12,
            step: 1
          }
        ],
        parameters: {
          ratio: 0.5,
          first: 2,
          terms: 6
        },
        timeline: {
          key: 'ratio',
          to: 1.25,
          durationMs: 18000,
          from: -0.75
        },
        steps: [
          {
            id: 'reference',
            to: 0.25,
            focus: 'reference',
            title: 'Begin with the declared rule',
            body: 'A positioning script sends a first forward correction a centimetres. Each later signed correction is r times the previous correction. Add exactly n commands to find the endpoint. A negative ratio alternates forward and backward corrections; the signed sum is net displacement, not distance travelled or a simulation of a mechanical controller.',
            formula:
              'S_n=\\sum_{k=0}^{n-1}ar^k=\\begin{cases}a\\frac{1-r^n}{1-r},&r\\ne1,\\\\na,&r=1.\\end{cases}\\qquad\\sum_{k=0}^{\\infty}ar^k=\\frac{a}{1-r}\\ \\ (|r|<1).',
            focusLabel: 'Declared rule and domain',
            focusDescription:
              'A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
            from: 0
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the corrections',
            body: 'Start with {{first}} cm, then multiply by {{ratio}} for every later command. There are exactly {{terms}} commands.',
            formula: 'a = {{first}} cm; r = {{ratio}}; n = {{terms}}',
            focusLabel: 'Declare the corrections',
            focusDescription:
              'Start with {{first}} cm, then multiply by {{ratio}} for every later command. There are exactly {{terms}} commands.'
          },
          {
            id: 'intermediate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Read the last term',
            body: 'Each bar keeps the sign of its individual correction. Negative ratios reverse successive directions.',
            formula: 'arⁿ⁻¹ ≈ {{lastTerm}} cm',
            focusLabel: 'Read the last term',
            focusDescription:
              'Each bar keeps the sign of its individual correction. Negative ratios reverse successive directions.'
          },
          {
            id: 'output',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Add the commands',
            body: 'The dots show partial sums after whole commands. The last dot is the signed total; an infinite limit is a separate claim under |r|<1.',
            formula: 'Sₙ ≈ {{output}} cm; infinite sum: {{limitLabel}}',
            focusLabel: 'Add the commands',
            focusDescription:
              'The dots show partial sums after whole commands. The last dot is the signed total; an infinite limit is a separate claim under |r|<1.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the corrections',
            template: 'a = {{first}} cm; r = {{ratio}}; n = {{terms}}',
            description:
              'Start with {{first}} cm, then multiply by {{ratio}} for every later command. There are exactly {{terms}} commands.'
          },
          {
            role: 'intermediate',
            label: 'Read the last term',
            template: 'arⁿ⁻¹ ≈ {{lastTerm}} cm',
            description:
              'Each bar keeps the sign of its individual correction. Negative ratios reverse successive directions.'
          },
          {
            role: 'output',
            label: 'Add the commands',
            template: 'Sₙ ≈ {{output}} cm; infinite sum: {{limitLabel}}',
            description:
              'The dots show partial sums after whole commands. The last dot is the signed total; an infinite limit is a separate claim under |r|<1.'
          }
        ],
        assumptions: [
          'The first correction a lies in [0.25,4] cm, ratio r in [−1.5,1.5], and n is a whole number from 1 through 12. Every finite sum is defined, including r=1. Because a is nonzero, the infinite series has a finite sum only for |r|<1. Integer commands do not interpolate into fractional terms. Numeric sums use a compensated recurrence; nonzero term underflow is reported explicitly.'
        ],
        sourceRefs: ['source:analysis-extension:series'],
        conclusion: 'The six commands total 3.9375 cm; the separate infinite-series limit is 4 cm.'
      }
    ],
    quantities: {
      'inverse-function': {
        reading: {
          label: 'Observed position y',
          role: 'input',
          unit: 'cm',
          description:
            'Observed position y. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        gain: {
          label: 'Nonzero calibration gain a',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Nonzero calibration gain a. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        offset: {
          label: 'Zero offset b',
          role: 'input',
          unit: 'cm',
          description:
            'Zero offset b. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        adjusted: {
          label: 'Offset-corrected position',
          role: 'intermediate',
          unit: 'cm',
          description:
            'Offset-corrected position. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        output: {
          label: 'Recovered command x',
          role: 'output',
          unit: 'cm',
          description:
            'Recovered command x. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        roundTrip: {
          label: 'Reapplied forward position',
          role: 'output',
          unit: 'cm',
          description:
            'Reapplied forward position. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        forwardPoint: {
          label: 'Forward ordered pair',
          role: 'output',
          unit: 'cm',
          description:
            'Forward ordered pair. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        inversePoint: {
          label: 'Inverse ordered pair',
          role: 'output',
          unit: 'cm',
          description:
            'Inverse ordered pair. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        },
        identity: {
          label: 'Identity diagonal',
          role: 'reference',
          unit: 'cm',
          description:
            'Identity diagonal. An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
        }
      },
      'geometric-series': {
        ratio: {
          label: 'Common ratio r',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Common ratio r. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        first: {
          label: 'First correction a',
          role: 'input',
          unit: 'cm',
          description:
            'First correction a. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        terms: {
          label: 'Whole command count n',
          role: 'input',
          unit: 'commands',
          description:
            'Whole command count n. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        contributions: {
          label: 'Ordered signed corrections',
          role: 'intermediate',
          unit: 'cm',
          description:
            'Ordered signed corrections. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        partialSums: {
          label: 'Successive finite partial sums',
          role: 'intermediate',
          unit: 'cm',
          description:
            'Successive finite partial sums. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        lastTerm: {
          label: 'Final included correction',
          role: 'intermediate',
          unit: 'cm',
          description:
            'Final included correction. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        output: {
          label: 'Total signed displacement',
          role: 'output',
          unit: 'cm',
          description:
            'Total signed displacement. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        infiniteSum: {
          label: 'Infinite sum under magnitude ratio less than one',
          role: 'output',
          unit: 'cm',
          description:
            'Infinite sum under magnitude ratio less than one. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        remaining: {
          label: 'Difference from the convergent limit',
          role: 'output',
          unit: 'cm',
          description:
            'Difference from the convergent limit. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        },
        limitLabel: {
          label: 'Readable infinite-series status',
          role: 'output',
          unit: '',
          description:
            'Readable infinite-series status. A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
        }
      }
    },
    links: {
      'inverse-function': {
        variableKey: 'reading',
        symbol: 'y',
        variableLabel: 'Observed position y',
        unit: 'cm',
        effectLabel:
          'An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared rule',
            description:
              'An inverse function reverses a one-to-one rule by exchanging its inputs and outputs. For an affine calibration, subtract the offset and divide by the nonzero gain. The inverse is a function, rather than the reciprocal of a function value.'
          },
          {
            focus: 'input',
            label: 'Read the calibrated position',
            description:
              'The stage reports {{reading}} cm. Keep its nonzero gain {{gain}} and offset {{offset}} cm explicit.'
          },
          {
            focus: 'intermediate',
            label: 'Undo the offset',
            description: 'Remove the additive offset before undoing the multiplicative gain.'
          },
          {
            focus: 'output',
            label: 'Undo the gain',
            description:
              'Divide the corrected position by the gain. Applying the forward rule returns approximately {{roundTrip}} cm.'
          }
        ]
      },
      'geometric-series': {
        variableKey: 'ratio',
        symbol: 'r',
        variableLabel: 'Correction ratio r',
        unit: 'dimensionless',
        effectLabel:
          'A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with the declared rule',
            description:
              'A geometric series adds terms with one common ratio. A partial sum adds a finite whole number of terms. Its closed form has a separate r=1 case. With a nonzero first term, the infinite geometric series has a finite sum exactly when the ratio has magnitude less than one.'
          },
          {
            focus: 'input',
            label: 'Declare the corrections',
            description:
              'Start with {{first}} cm, then multiply by {{ratio}} for every later command. There are exactly {{terms}} commands.'
          },
          {
            focus: 'intermediate',
            label: 'Read the last term',
            description:
              'Each bar keeps the sign of its individual correction. Negative ratios reverse successive directions.'
          },
          {
            focus: 'output',
            label: 'Add the commands',
            description:
              'The dots show partial sums after whole commands. The last dot is the signed total; an infinite limit is a separate claim under |r|<1.'
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
    forSlug: s => data.stories.find(x => x.slug === s) || null,
    find: id => data.stories.find(x => x.id === id) || null,
    quantityFor: (s, k) =>
      Object.hasOwn(data.quantities, s) && Object.hasOwn(data.quantities[s], k)
        ? data.quantities[s][k]
        : null,
    linksFor: s => (Object.hasOwn(data.links, s) ? data.links[s] : null)
  });
});
