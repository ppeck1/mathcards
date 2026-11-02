/* Authored inference-family data; independent of host state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasInferenceStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  const stories = freeze([
    {
      id: 'story:sampling-distribution:connected',
      slug: 'sampling-distribution',
      scene: 'sampling-distribution-scene',
      unit: 'kg',
      title: 'Why is an average steadier than one parcel?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Independent draws n. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.',
      context:
        'A parcel desk repeatedly weighs items drawn from four known masses: 2,4,8 and 10 kg, each equally likely. After each draw the choice is replaced. Change how many independent draws go into an average. The bars enumerate every possible sample mean, so their narrowing reflects a probability calculation.',
      question: 'How does taking four draws instead of one change the standard error of the mean?',
      variables: [
        {
          key: 'sampleSize',
          symbol: 'n',
          label: 'Independent draws n',
          unit: 'draws',
          min: 1,
          max: 4,
          step: 1,
          discrete: true
        }
      ],
      parameters: {
        sampleSize: 4
      },
      timeline: {
        key: 'sampleSize',
        from: 1,
        to: 4,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A parcel desk repeatedly weighs items drawn from four known masses: 2,4,8 and 10 kg, each equally likely. After each draw the choice is replaced. Change how many independent draws go into an average. The bars enumerate every possible sample mean, so their narrowing reflects a probability calculation.',
          formula: 'SE(X̄) = σ/√n',
          focusLabel: 'Name the model',
          focusDescription:
            'A parcel desk repeatedly weighs items drawn from four known masses: 2,4,8 and 10 kg, each equally likely. After each draw the choice is replaced. Change how many independent draws go into an average. The bars enumerate every possible sample mean, so their narrowing reflects a probability calculation.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'n = {{sampleSize}} independent draws',
          formula: 'n = {{sampleSize}} independent draws',
          focusLabel: 'Change the input',
          focusDescription: 'n = {{sampleSize}} independent draws'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Var(X̄) = 10/n = {{variance}} kg²',
          formula: 'Var(X̄) = 10/n = {{variance}} kg²',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Var(X̄) = 10/n = {{variance}} kg²'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'SE(X̄) = {{standardError}} kg',
          formula: 'SE(X̄) = {{standardError}} kg',
          focusLabel: 'Read the result',
          focusDescription:
            'See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'n = {{sampleSize}} independent draws',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Var(X̄) = 10/n = {{variance}} kg²',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'SE(X̄) = {{standardError}} kg',
          description:
            'See why averaging more independent parcel masses narrows the distribution of the mean while its center stays fixed.'
        }
      ],
      conclusion:
        'Four draws reduce standard error from √10 to √(10/4)=√2.5 kg, exactly half. The expected mean remains 6 kg. No normal approximation is needed.',
      assumptions: [
        'Draw independently with replacement from four equally likely parcel masses 2, 4, 8 and 10 kg. Enumerate every ordered sample, rather than drawing an animated random sample.',
        'Sample size is a whole number from 1 to 4. The complete finite sampling distribution is exact; its standard error is evaluated numerically. Sampling without replacement has a different variance.'
      ],
      sourceRefs: ['source:inference:sampling']
    },
    {
      id: 'story:confidence-interval:connected',
      slug: 'confidence-interval',
      scene: 'confidence-interval-scene',
      unit: 'probability',
      title: 'What does 95% confidence promise?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Teaching-model probability p. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.',
      context:
        'A packet inspector sees k sticker packets among eight independent packets. Every possible k produces a different interval. For this teaching view we also know the underlying chance p, so we can check which intervals contain it. Move p: green rows cover the same cyan value, and their binomial probabilities determine coverage.',
      question: 'At p=1/2, what probability belongs to intervals that cover p?',
      variables: [
        {
          key: 'trueChance',
          symbol: 'p',
          label: 'Teaching-model probability p',
          unit: 'probability',
          min: 0,
          max: 1,
          step: 0.01
        }
      ],
      parameters: {
        trueChance: 0.5,
        observed: 4
      },
      timeline: {
        key: 'trueChance',
        from: 0.1,
        to: 0.5,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A packet inspector sees k sticker packets among eight independent packets. Every possible k produces a different interval. For this teaching view we also know the underlying chance p, so we can check which intervals contain it. Move p: green rows cover the same cyan value, and their binomial probabilities determine coverage.',
          formula: 'Pₚ{L(K) ≤ p ≤ U(K)} ≥ 0.95',
          focusLabel: 'Name the model',
          focusDescription:
            'A packet inspector sees k sticker packets among eight independent packets. Every possible k produces a different interval. For this teaching view we also know the underlying chance p, so we can check which intervals contain it. Move p: green rows cover the same cyan value, and their binomial probabilities determine coverage.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'p = {{trueChance}}; highlighted k is fixed',
          formula: 'p = {{trueChance}}; highlighted k is fixed',
          focusLabel: 'Change the input',
          focusDescription: 'p = {{trueChance}}; highlighted k is fixed'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Selected interval: [{{low}}, {{high}}]',
          formula: 'Selected interval: [{{low}}, {{high}}]',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Selected interval: [{{low}}, {{high}}]'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'Coverage probability = {{coverage}}',
          formula: 'Coverage probability = {{coverage}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'p = {{trueChance}}; highlighted k is fixed',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Selected interval: [{{low}}, {{high}}]',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'Coverage probability = {{coverage}}',
          description:
            'Follow possible observed counts into the probability that an interval covers a fixed teaching-model value.'
        }
      ],
      conclusion:
        'At p=1/2 only counts 0 and 8 miss. Their combined chance is 2/256, so coverage is 254/256=0.9921875. Discreteness makes this conservative procedure exceed 95%; counting green rows without probability weights gives the wrong answer.',
      assumptions: [
        'Eight independent packets either contain a bonus sticker or do not. Compute a two-sided 95% Clopper–Pearson interval for each possible count. A known teaching-model probability p lets us inspect coverage across all nine counts.',
        'The interval describes uncertainty about a fixed p, not a 95% posterior probability for p in one computed interval. Exact means binomial-tail inversion without a normal approximation; numeric endpoints use 70 bisections. Discreteness generally makes coverage greater than 95%.'
      ],
      sourceRefs: ['source:inference:interval', 'source:inference:binomial']
    },
    {
      id: 'story:hypothesis-test:connected',
      slug: 'hypothesis-test',
      scene: 'hypothesis-test-scene',
      unit: 'probability',
      title: 'Which counts challenge a half-chance claim?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Observed stickers k. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.',
      context:
        'A sticker supplier claims that half its packets contain a sticker. Before inspecting twelve independent packets, an inspector chooses the alternative that the chance is greater than one half and a significance level of 0.05. Move the observed count. Gold bars include that count and every larger one under the unchanged null model.',
      question: 'Does ten stickers out of twelve cross the declared 0.05 threshold?',
      variables: [
        {
          key: 'observed',
          symbol: 'k',
          label: 'Observed stickers k',
          unit: 'packets',
          min: 0,
          max: 12,
          step: 1,
          discrete: true
        }
      ],
      parameters: {
        observed: 10
      },
      timeline: {
        key: 'observed',
        from: 6,
        to: 10,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A sticker supplier claims that half its packets contain a sticker. Before inspecting twelve independent packets, an inspector chooses the alternative that the chance is greater than one half and a significance level of 0.05. Move the observed count. Gold bars include that count and every larger one under the unchanged null model.',
          formula: 'p-value = Pₚ₀(K ≥ k)',
          focusLabel: 'Name the model',
          focusDescription:
            'A sticker supplier claims that half its packets contain a sticker. Before inspecting twelve independent packets, an inspector chooses the alternative that the chance is greater than one half and a significance level of 0.05. Move the observed count. Gold bars include that count and every larger one under the unchanged null model.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Observed stickers k = {{observed}}',
          formula: 'Observed stickers k = {{observed}}',
          focusLabel: 'Change the input',
          focusDescription: 'Observed stickers k = {{observed}}'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Upper tail: P(K ≥ k | p₀=1/2)',
          formula: 'Upper tail: P(K ≥ k | p₀=1/2)',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Upper tail: P(K ≥ k | p₀=1/2)'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'p-value = {{pValue}}',
          formula: 'p-value = {{pValue}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Observed stickers k = {{observed}}',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Upper tail: P(K ≥ k | p₀=1/2)',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'p-value = {{pValue}}',
          description:
            'Make a p-value visible as a complete probability tail, then compare it with a threshold declared in advance.'
        }
      ],
      conclusion:
        'At k=10 the tail contains counts 10,11,12 and has probability (66+12+1)/4096=79/4096≈0.01929. This rejects the null at α=0.05 within this test; it is not the probability that the null is true.',
      assumptions: [
        'A sticker supplier claims p₀=1/2. Inspect 12 independent packets and test the prespecified alternative p>1/2 using the upper binomial tail at the observed count k.',
        'The p-value assumes the null model and the fixed one-sided alternative; it is not the probability that the null hypothesis is true. The decision threshold is α=0.05, set before seeing the count. These constructed data do not validate a supplier.'
      ],
      sourceRefs: ['source:inference:binomial', 'source:inference:interval']
    },
    {
      id: 'story:linear-regression:connected',
      slug: 'linear-regression',
      scene: 'linear-regression-scene',
      unit: 'cm/day',
      title: 'One late measurement changes the whole fit',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Day-five height h. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary: 'Connect a moved measurement to the fitted line, its slope and all its residuals.',
      context:
        'A grower records five seedling heights on days one through five. The first four heights are 2,3,5 and 4 cm. Drag the fifth height h. A fitted line responds to all five measurements together, so moving one point changes both parameters and every residual.',
      question: 'When the fifth height is 6 cm, what slope minimizes squared vertical residuals?',
      variables: [
        {
          key: 'lastValue',
          symbol: 'h',
          label: 'Day-five height h',
          unit: 'cm',
          min: 0,
          max: 10,
          step: 0.1
        }
      ],
      parameters: {
        lastValue: 6
      },
      timeline: {
        key: 'lastValue',
        from: 3,
        to: 6,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A grower records five seedling heights on days one through five. The first four heights are 2,3,5 and 4 cm. Drag the fifth height h. A fitted line responds to all five measurements together, so moving one point changes both parameters and every residual.',
          formula: 'b = Sₓᵧ/Sₓₓ; a = ȳ − bx̄',
          focusLabel: 'Name the model',
          focusDescription:
            'A grower records five seedling heights on days one through five. The first four heights are 2,3,5 and 4 cm. Drag the fifth height h. A fitted line responds to all five measurements together, so moving one point changes both parameters and every residual.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Final height h = {{lastValue}} cm',
          formula: 'Final height h = {{lastValue}} cm',
          focusLabel: 'Change the input',
          focusDescription: 'Final height h = {{lastValue}} cm'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'b = Sₓᵧ/Sₓₓ = {{sxy}}/10',
          formula: 'b = Sₓᵧ/Sₓₓ = {{sxy}}/10',
          focusLabel: 'Follow the calculation',
          focusDescription: 'b = Sₓᵧ/Sₓₓ = {{sxy}}/10'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'Fitted slope b = {{slope}} cm/day',
          formula: 'Fitted slope b = {{slope}} cm/day',
          focusLabel: 'Read the result',
          focusDescription:
            'Connect a moved measurement to the fitted line, its slope and all its residuals.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Final height h = {{lastValue}} cm',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'b = Sₓᵧ/Sₓₓ = {{sxy}}/10',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'Fitted slope b = {{slope}} cm/day',
          description:
            'Connect a moved measurement to the fitted line, its slope and all its residuals.'
        }
      ],
      conclusion:
        'At h=6, x̄=3, ȳ=4 and Sₓᵧ=9. The fitted slope is 0.9 cm/day and intercept is 1.3 cm. Residuals are −0.2,−0.1,1,−0.9,0.2 cm, with squared sum 1.9 cm².',
      assumptions: [
        'Five constructed seedling measurements have days x=(1,2,3,4,5) and heights y=(2,3,5,4,h) cm. Move the final height and refit an intercept and slope by ordinary least squares.',
        'The fitted line minimizes vertical squared residuals for these five measurements. No causal growth law, extrapolation guarantee or regression uncertainty interval is inferred. The day values remain distinct, so the fit is defined.'
      ],
      sourceRefs: ['source:inference:regression']
    },
    {
      id: 'story:correlation:connected',
      slug: 'correlation',
      scene: 'correlation-scene',
      unit: 'dimensionless',
      title: 'Does a visible trend survive the scatter?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Trend t. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'Separate trend direction from scatter and see why the same trend can have weaker correlation.',
      context:
        'A workshop compares paired readings at five fixed input settings. The response combines straight trend t with a fixed scatter pattern scaled by s. Drag t while retaining the same scatter. Points move through negative, zero and positive linear association without changing sample size.',
      question: 'At trend t=1 and scatter s=1, how large is the correlation?',
      variables: [
        {
          key: 'trend',
          symbol: 't',
          label: 'Trend t',
          unit: '',
          min: -2,
          max: 2,
          step: 0.05
        }
      ],
      parameters: {
        trend: 1,
        scatter: 1
      },
      timeline: {
        key: 'trend',
        from: -1,
        to: 1,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A workshop compares paired readings at five fixed input settings. The response combines straight trend t with a fixed scatter pattern scaled by s. Drag t while retaining the same scatter. Points move through negative, zero and positive linear association without changing sample size.',
          formula: 'r = Sₓᵧ/√(SₓₓSᵧᵧ)',
          focusLabel: 'Name the model',
          focusDescription:
            'A workshop compares paired readings at five fixed input settings. The response combines straight trend t with a fixed scatter pattern scaled by s. Drag t while retaining the same scatter. Points move through negative, zero and positive linear association without changing sample size.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Trend t = {{trend}}; scatter s = {{scatter}}',
          formula: 'Trend t = {{trend}}; scatter s = {{scatter}}',
          focusLabel: 'Change the input',
          focusDescription: 'Trend t = {{trend}}; scatter s = {{scatter}}'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Sₓᵧ={{sxy}}; Sᵧᵧ={{syy}}',
          formula: 'Sₓᵧ={{sxy}}; Sᵧᵧ={{syy}}',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Sₓᵧ={{sxy}}; Sᵧᵧ={{syy}}'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'r = {{r}}',
          formula: 'r = {{r}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Separate trend direction from scatter and see why the same trend can have weaker correlation.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Trend t = {{trend}}; scatter s = {{scatter}}',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Sₓᵧ={{sxy}}; Sᵧᵧ={{syy}}',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'r = {{r}}',
          description:
            'Separate trend direction from scatter and see why the same trend can have weaker correlation.'
        }
      ],
      conclusion:
        'At t=s=1, Sₓᵧ=10 and Sᵧᵧ=24. Thus r=10/√240≈0.6455. Removing scatter gives r=1 for positive trend. Removing both makes r undefined because the response is constant.',
      assumptions: [
        'Five constructed paired readings have x=(1,2,3,4,5) and yᵢ=5+t(xᵢ−3)+s zᵢ, with z=(1,−2,2,−2,1). Change trend t or scatter scale s and recompute the sample correlation.',
        'Correlation measures linear association, not causation. The fixed noise pattern is orthogonal to centered x. If t=s=0 all y values are constant and correlation is undefined. No significance test is performed.'
      ],
      sourceRefs: ['source:inference:correlation']
    },
    {
      id: 'story:factorial-interaction:connected',
      slug: 'factorial-interaction',
      scene: 'factorial-interaction-scene',
      unit: 'minutes',
      title: 'Does the tool save the same time with a guide?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag Both improvements: mean c. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary: 'Compare two changes in packing time and see interaction as nonparallel responses.',
      context:
        'A packing team compares tool off/on and guide off/on. Four constructed mean times are 12,10,9 and c minutes. Drag the mean for both improvements. Compare the tool saving without a guide against its saving with one: the lines are parallel exactly when those changes agree.',
      question: 'At c=7 minutes, is there an additive interaction?',
      variables: [
        {
          key: 'combined',
          symbol: 'c',
          label: 'Both improvements: mean c',
          unit: 'minutes',
          min: 2,
          max: 14,
          step: 0.1
        }
      ],
      parameters: {
        combined: 7
      },
      timeline: {
        key: 'combined',
        from: 11,
        to: 7,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A packing team compares tool off/on and guide off/on. Four constructed mean times are 12,10,9 and c minutes. Drag the mean for both improvements. Compare the tool saving without a guide against its saving with one: the lines are parallel exactly when those changes agree.',
          formula: 'Δ = (y₁₁−y₀₁) − (y₁₀−y₀₀)',
          focusLabel: 'Name the model',
          focusDescription:
            'A packing team compares tool off/on and guide off/on. Four constructed mean times are 12,10,9 and c minutes. Drag the mean for both improvements. Compare the tool saving without a guide against its saving with one: the lines are parallel exactly when those changes agree.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Both improvements: c = {{combined}} minutes',
          formula: 'Both improvements: c = {{combined}} minutes',
          focusLabel: 'Change the input',
          focusDescription: 'Both improvements: c = {{combined}} minutes'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Tool effects: {{without}} and {{withGuide}} minutes',
          formula: 'Tool effects: {{without}} and {{withGuide}} minutes',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Tool effects: {{without}} and {{withGuide}} minutes'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'Difference of differences Δ = {{difference}} minutes',
          formula: 'Difference of differences Δ = {{difference}} minutes',
          focusLabel: 'Read the result',
          focusDescription:
            'Compare two changes in packing time and see interaction as nonparallel responses.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Both improvements: c = {{combined}} minutes',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Tool effects: {{without}} and {{withGuide}} minutes',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'Difference of differences Δ = {{difference}} minutes',
          description:
            'Compare two changes in packing time and see interaction as nonparallel responses.'
        }
      ],
      conclusion:
        'Without a guide the tool changes time by 10−12=−2 minutes. At c=7 it changes time by 7−9=−2 with the guide. Their difference is zero, and the response lines are parallel.',
      assumptions: [
        'A constructed packing experiment combines a tool (off/on) and a guide (off/on). Mean packing times are 12, 10, 9 and c minutes in the four cells. Compare the tool effect with and without the guide.',
        'This is a descriptive difference of differences, not an ANOVA or a significance test. Replication, randomization and an error model would be needed for experimental inference. The conventional ±1 factorial interaction effect is Δ/2; the display names Δ explicitly.'
      ],
      sourceRefs: ['source:inference:factorial', 'source:inference:interaction']
    },
    {
      id: 'story:chi-square-association:connected',
      slug: 'chi-square-association',
      scene: 'chi-square-association-scene',
      unit: 'dimensionless',
      title: 'Are desk and reading preference associated?',
      eyebrow: 'A constructed model · statistics',
      presentation: {
        compact: true,
        controlHint:
          'Drag A-paper and B-digital count d. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'Move counts while preserving table margins and follow their discrepancies into one statistic.',
      context:
        'A constructed table classifies forty readers by desk A/B and paper/digital preference. Each desk has twenty readers, and each preference also has twenty. Drag d, the A-paper and B-digital count. Other counts preserve the margins. Under independence every expected count stays ten.',
      question: 'At d=14, how much observed-versus-expected discrepancy is there?',
      variables: [
        {
          key: 'diagonal',
          symbol: 'd',
          label: 'A-paper and B-digital count d',
          unit: 'readers',
          min: 0,
          max: 20,
          step: 1,
          discrete: true
        }
      ],
      parameters: {
        diagonal: 14
      },
      timeline: {
        key: 'diagonal',
        from: 10,
        to: 14,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A constructed table classifies forty readers by desk A/B and paper/digital preference. Each desk has twenty readers, and each preference also has twenty. Drag d, the A-paper and B-digital count. Other counts preserve the margins. Under independence every expected count stays ten.',
          formula: 'χ² = ∑ (Oᵢⱼ−Eᵢⱼ)²/Eᵢⱼ',
          focusLabel: 'Name the model',
          focusDescription:
            'A constructed table classifies forty readers by desk A/B and paper/digital preference. Each desk has twenty readers, and each preference also has twenty. Drag d, the A-paper and B-digital count. Other counts preserve the margins. Under independence every expected count stays ten.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Diagonal count d = {{diagonal}} readers',
          formula: 'Diagonal count d = {{diagonal}} readers',
          focusLabel: 'Change the input',
          focusDescription: 'Diagonal count d = {{diagonal}} readers'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Each expected count E = {{expected}}',
          formula: 'Each expected count E = {{expected}}',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Each expected count E = {{expected}}'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'χ² = {{statistic}}',
          formula: 'χ² = {{statistic}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Move counts while preserving table margins and follow their discrepancies into one statistic.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Diagonal count d = {{diagonal}} readers',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Each expected count E = {{expected}}',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'χ² = {{statistic}}',
          description:
            'Move counts while preserving table margins and follow their discrepancies into one statistic.'
        }
      ],
      conclusion:
        'Observed counts are 14,6,6,14; every expected count is 10. Each contribution is 16/10, so χ²=6.4. The statistic detects departure in either direction, without establishing causality.',
      assumptions: [
        'Forty constructed readers are classified by desk (A/B) and preference (paper/digital). The 2×2 table is [[d,20−d],[20−d,d]]. Both row and column totals are fixed at 20, making every expected independence count 10.',
        'The statistic describes discrepancy from independence for this fixed-margin table. No p-value or causal conclusion is computed. A chi-square reference approximation requires independent observations and adequate expected counts; expected counts here are 10.'
      ],
      sourceRefs: ['source:inference:association']
    },
    {
      id: 'story:relative-entropy:connected',
      slug: 'relative-entropy',
      scene: 'relative-entropy-scene',
      unit: 'bits',
      title: 'How much does a wrong forecast cost?',
      eyebrow: 'A constructed model · information',
      presentation: {
        compact: true,
        controlHint:
          'Drag Forecast sticker probability q. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary: 'Compare a model with a forecast while preserving direction and support conditions.',
      context:
        'A sticker model says three quarters of packets contain a sticker. A forecast uses chance q. Drag that forecast toward the model. Cyan model bars stay fixed, purple forecast bars move, and their probability-weighted log ratios add into relative entropy.',
      question: 'How much relative entropy separates P=(1/4,3/4) from Q=(1/2,1/2)?',
      variables: [
        {
          key: 'forecast',
          symbol: 'q',
          label: 'Forecast sticker probability q',
          unit: 'probability',
          min: 0,
          max: 1,
          step: 0.01
        }
      ],
      parameters: {
        actual: 0.75,
        forecast: 0.5
      },
      timeline: {
        key: 'forecast',
        from: 0.2,
        to: 0.5,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A sticker model says three quarters of packets contain a sticker. A forecast uses chance q. Drag that forecast toward the model. Cyan model bars stay fixed, purple forecast bars move, and their probability-weighted log ratios add into relative entropy.',
          formula: 'D(P∥Q) = ∑ pᵢ log₂(pᵢ/qᵢ)',
          focusLabel: 'Name the model',
          focusDescription:
            'A sticker model says three quarters of packets contain a sticker. A forecast uses chance q. Drag that forecast toward the model. Cyan model bars stay fixed, purple forecast bars move, and their probability-weighted log ratios add into relative entropy.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Model p={{actual}}; forecast q={{forecast}}',
          formula: 'Model p={{actual}}; forecast q={{forecast}}',
          focusLabel: 'Change the input',
          focusDescription: 'Model p={{actual}}; forecast q={{forecast}}'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Signed terms: {{contribution0}} and {{contribution1}} bits',
          formula: 'Signed terms: {{contribution0}} and {{contribution1}} bits',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Signed terms: {{contribution0}} and {{contribution1}} bits'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'D(P∥Q) = {{divergence}} bits',
          formula: 'D(P∥Q) = {{divergence}} bits',
          focusLabel: 'Read the result',
          focusDescription:
            'Compare a model with a forecast while preserving direction and support conditions.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Model p={{actual}}; forecast q={{forecast}}',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Signed terms: {{contribution0}} and {{contribution1}} bits',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'D(P∥Q) = {{divergence}} bits',
          description:
            'Compare a model with a forecast while preserving direction and support conditions.'
        }
      ],
      conclusion:
        'Contributions are (1/4)log₂(1/2)=−1/4 and (3/4)log₂(3/2). They sum to approximately 0.188722 bits. A negative individual term is allowed; the full divergence is nonnegative.',
      assumptions: [
        'A teaching model gives sticker probability p. A forecast uses q. Compare the Bernoulli distributions P=(1−p,p) and Q=(1−q,q), keeping the direction P∥Q explicit.',
        'KL divergence is not symmetric and is not a metric. A positive P mass assigned zero Q probability produces infinite divergence, represented as an explicit state rather than a finite bar. A zero P mass contributes zero, including when Q is also zero.'
      ],
      sourceRefs: ['source:inference:relative']
    },
    {
      id: 'story:binomial-distribution:connected',
      slug: 'binomial-distribution',
      scene: 'binomial-distribution-scene',
      unit: 'probability',
      title: 'How likely are exactly four sticker packets?',
      eyebrow: 'A constructed model · probability',
      presentation: {
        compact: true,
        controlHint:
          'Drag Sticker probability p. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary: 'Connect trial probability to the full set of count masses and one selected count.',
      context:
        'A collector opens eight independent packets, each with sticker chance p. Drag p while keeping chosen count k=4. Every count mass moves together. Gold selects exactly four, rather than at least four.',
      question: 'At p=1/2, what is the chance of exactly four stickers among eight packets?',
      variables: [
        {
          key: 'chance',
          symbol: 'p',
          label: 'Sticker probability p',
          unit: 'probability',
          min: 0,
          max: 1,
          step: 0.01
        }
      ],
      parameters: {
        chance: 0.5,
        trials: 8,
        count: 4
      },
      timeline: {
        key: 'chance',
        from: 0.1,
        to: 0.5,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A collector opens eight independent packets, each with sticker chance p. Drag p while keeping chosen count k=4. Every count mass moves together. Gold selects exactly four, rather than at least four.',
          formula: 'P(K=k) = C(n,k)pᵏ(1−p)ⁿ⁻ᵏ',
          focusLabel: 'Name the model',
          focusDescription:
            'A collector opens eight independent packets, each with sticker chance p. Drag p while keeping chosen count k=4. Every count mass moves together. Gold selects exactly four, rather than at least four.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Sticker chance p = {{chance}}',
          formula: 'Sticker chance p = {{chance}}',
          focusLabel: 'Change the input',
          focusDescription: 'Sticker chance p = {{chance}}'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'Count arrangements: C(8,4)=70',
          formula: 'Count arrangements: C(8,4)=70',
          focusLabel: 'Follow the calculation',
          focusDescription: 'Count arrangements: C(8,4)=70'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'P(K=4) = {{selectedMass}}',
          formula: 'P(K=4) = {{selectedMass}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Connect trial probability to the full set of count masses and one selected count.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Sticker chance p = {{chance}}',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'Count arrangements: C(8,4)=70',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'P(K=4) = {{selectedMass}}',
          description:
            'Connect trial probability to the full set of count masses and one selected count.'
        }
      ],
      conclusion:
        'There are C(8,4)=70 arrangements with four stickers, each of probability (1/2)⁸. Their total is 70/256=0.2734375. The expected count is four, which is not guaranteed.',
      assumptions: [
        'Each of n independent packets contains a sticker with the same probability p. Count K, the number of packets with a sticker, and select a whole-number count k.',
        'Independence, fixed n and a common p are model assumptions. Counts beyond n have zero probability. These masses are at integers; the probability parameter may change continuously without creating fractional packet outcomes.'
      ],
      sourceRefs: ['source:inference:binomial']
    },
    {
      id: 'story:poisson-distribution:connected',
      slug: 'poisson-distribution',
      scene: 'poisson-distribution-scene',
      unit: 'probability',
      title: 'How many returns arrive in a minute?',
      eyebrow: 'A constructed model · probability',
      presentation: {
        compact: true,
        controlHint:
          'Drag Mean arrivals λ per minute. Follow the highlighted quantity through the calculation into its marks.'
      },
      summary:
        'Connect an arrival rate to count probabilities while retaining the undisplayed tail.',
      context:
        'A library return slot uses a constant-rate Poisson teaching model. Drag mean arrivals λ for one minute. Count probabilities change while gold selects three arrivals. Counts above twenty remain possible; their total probability is stated separately.',
      question: 'With mean three arrivals per minute, what is the chance of exactly three?',
      variables: [
        {
          key: 'rate',
          symbol: 'λ',
          label: 'Mean arrivals λ per minute',
          unit: 'arrivals/minute',
          min: 0,
          max: 10,
          step: 0.05
        }
      ],
      parameters: {
        rate: 3,
        count: 3
      },
      timeline: {
        key: 'rate',
        from: 0.5,
        to: 3,
        durationMs: 16000
      },
      steps: [
        {
          id: 'reference',
          from: 0.0,
          to: 0.25,
          focus: 'reference',
          title: 'Name the model',
          body: 'A library return slot uses a constant-rate Poisson teaching model. Drag mean arrivals λ for one minute. Count probabilities change while gold selects three arrivals. Counts above twenty remain possible; their total probability is stated separately.',
          formula: 'P(K=k) = e⁻λ λᵏ/k!',
          focusLabel: 'Name the model',
          focusDescription:
            'A library return slot uses a constant-rate Poisson teaching model. Drag mean arrivals λ for one minute. Count probabilities change while gold selects three arrivals. Counts above twenty remain possible; their total probability is stated separately.'
        },
        {
          id: 'input',
          from: 0.25,
          to: 0.5,
          focus: 'input',
          title: 'Change the input',
          body: 'Mean arrivals λ = {{rate}} per minute',
          formula: 'Mean arrivals λ = {{rate}} per minute',
          focusLabel: 'Change the input',
          focusDescription: 'Mean arrivals λ = {{rate}} per minute'
        },
        {
          id: 'intermediate',
          from: 0.5,
          to: 0.75,
          focus: 'intermediate',
          title: 'Follow the calculation',
          body: 'P(K=3) = exp(−λ)λ³/3!',
          formula: 'P(K=3) = exp(−λ)λ³/3!',
          focusLabel: 'Follow the calculation',
          focusDescription: 'P(K=3) = exp(−λ)λ³/3!'
        },
        {
          id: 'output',
          from: 0.75,
          to: 1.0,
          focus: 'output',
          title: 'Read the result',
          body: 'P(K=3) = {{selectedMass}}',
          formula: 'P(K=3) = {{selectedMass}}',
          focusLabel: 'Read the result',
          focusDescription:
            'Connect an arrival rate to count probabilities while retaining the undisplayed tail.'
        }
      ],
      calculation: [
        {
          role: 'input',
          label: 'Set the input',
          template: 'Mean arrivals λ = {{rate}} per minute',
          description: 'Set the input'
        },
        {
          role: 'intermediate',
          label: 'Follow calculation',
          template: 'P(K=3) = exp(−λ)λ³/3!',
          description: 'Follow calculation'
        },
        {
          role: 'output',
          label: 'Read result',
          template: 'P(K=3) = {{selectedMass}}',
          description:
            'Connect an arrival rate to count probabilities while retaining the undisplayed tail.'
        }
      ],
      conclusion:
        'At λ=3 the mass is e⁻³3³/6≈0.224042. Mean three does not mean every minute has three arrivals. The display never renormalizes its finite 0–20 window.',
      assumptions: [
        'A return-slot model counts arrivals in one minute with mean λ. The homogeneous Poisson-process interpretation assumes independent increments and a constant rate. Inspect the count distribution rather than inventing a simulated arrival history.',
        'The Poisson distribution has infinite support. Geometry displays counts 0–20 and a separately stated remaining probability; the displayed bars are never renormalized. At λ=0, zero arrivals are certain. Real arrival streams need model validation.'
      ],
      sourceRefs: ['source:inference:poisson']
    }
  ]);
  const quantities = freeze({
    'sampling-distribution': {
      sampleSize: {
        label: 'Number of independent draws.',
        unit: '',
        role: 'input',
        description: 'Number of independent draws.'
      },
      output: {
        label: 'Standard deviation of the sample mean, in kg.',
        unit: 'kg',
        role: 'output',
        description: 'Standard deviation of the sample mean, in kg.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Sampling distribution of a mean.'
      }
    },
    'confidence-interval': {
      trueChance: {
        label: 'Fixed probability used to inspect repeated-sampling coverage.',
        unit: '',
        role: 'input',
        description: 'Fixed probability used to inspect repeated-sampling coverage.'
      },
      observed: {
        label: 'Highlighted observed count out of eight.',
        unit: '',
        role: 'input',
        description: 'Highlighted observed count out of eight.'
      },
      low: {
        label: 'Lower endpoint of the highlighted interval.',
        unit: '',
        role: 'intermediate',
        description: 'Lower endpoint of the highlighted interval.'
      },
      high: {
        label: 'Upper endpoint of the highlighted interval.',
        unit: '',
        role: 'intermediate',
        description: 'Upper endpoint of the highlighted interval.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Confidence intervals and coverage.'
      }
    },
    'hypothesis-test': {
      observed: {
        label: 'Observed count out of twelve.',
        unit: '',
        role: 'input',
        description: 'Observed count out of twelve.'
      },
      output: {
        label: 'Probability of this count or a larger count under p₀=1/2.',
        unit: 'probability',
        role: 'output',
        description: 'Probability of this count or a larger count under p₀=1/2.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in An exact one-sided hypothesis test.'
      }
    },
    'linear-regression': {
      lastValue: {
        label: 'Day-five measured height in cm.',
        unit: '',
        role: 'input',
        description: 'Day-five measured height in cm.'
      },
      intercept: {
        label: 'Fitted intercept in cm.',
        unit: '',
        role: 'intermediate',
        description: 'Fitted intercept in cm.'
      },
      slope: {
        label: 'Fitted slope in cm per day.',
        unit: '',
        role: 'intermediate',
        description: 'Fitted slope in cm per day.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Least squares and residuals.'
      }
    },
    correlation: {
      trend: {
        label: 'Trend coefficient in the constructed response.',
        unit: '',
        role: 'input',
        description: 'Trend coefficient in the constructed response.'
      },
      scatter: {
        label: 'Scale of the fixed orthogonal scatter pattern.',
        unit: '',
        role: 'input',
        description: 'Scale of the fixed orthogonal scatter pattern.'
      },
      output: {
        label: 'Pearson sample correlation.',
        unit: 'dimensionless',
        role: 'output',
        description: 'Pearson sample correlation.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Correlation and scatter.'
      }
    },
    'factorial-interaction': {
      combined: {
        label: 'Mean time with both tool and guide.',
        unit: '',
        role: 'input',
        description: 'Mean time with both tool and guide.'
      },
      output: {
        label: 'Difference between the two tool effects, in minutes.',
        unit: 'minutes',
        role: 'output',
        description: 'Difference between the two tool effects, in minutes.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Two-factor interaction.'
      }
    },
    'chi-square-association': {
      diagonal: {
        label: 'Two matching diagonal counts in a fixed-margin table.',
        unit: '',
        role: 'input',
        description: 'Two matching diagonal counts in a fixed-margin table.'
      },
      output: {
        label: 'Pearson chi-square discrepancy statistic.',
        unit: 'dimensionless',
        role: 'output',
        description: 'Pearson chi-square discrepancy statistic.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Observed versus expected counts.'
      }
    },
    'relative-entropy': {
      actual: {
        label: 'Sticker chance in teaching model P.',
        unit: '',
        role: 'input',
        description: 'Sticker chance in teaching model P.'
      },
      forecast: {
        label: 'Sticker chance in forecast Q.',
        unit: '',
        role: 'input',
        description: 'Sticker chance in forecast Q.'
      },
      output: {
        label: 'Relative entropy from P to Q in bits.',
        unit: 'bits',
        role: 'output',
        description: 'Relative entropy from P to Q in bits.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Relative entropy.'
      }
    },
    'binomial-distribution': {
      chance: {
        label: 'Common sticker chance on each independent trial.',
        unit: '',
        role: 'input',
        description: 'Common sticker chance on each independent trial.'
      },
      trials: {
        label: 'Packets n',
        unit: 'packets',
        role: 'reference',
        description: 'Declared Packets n control.'
      },
      count: {
        label: 'Selected whole sticker count.',
        unit: '',
        role: 'input',
        description: 'Selected whole sticker count.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Binomial counts.'
      }
    },
    'poisson-distribution': {
      rate: {
        label: 'Expected arrivals in a fixed minute.',
        unit: '',
        role: 'input',
        description: 'Expected arrivals in a fixed minute.'
      },
      count: {
        label: 'Selected whole arrival count.',
        unit: '',
        role: 'input',
        description: 'Selected whole arrival count.'
      },
      standardError: {
        label: 'standardError',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      variance: {
        label: 'variance',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      coverage: {
        label: 'coverage',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      low: {
        label: 'low',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      high: {
        label: 'high',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      pValue: {
        label: 'pValue',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      sxy: {
        label: 'sxy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      syy: {
        label: 'syy',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      slope: {
        label: 'slope',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      r: {
        label: 'r',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      without: {
        label: 'without',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      withGuide: {
        label: 'withGuide',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      difference: {
        label: 'difference',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      expected: {
        label: 'expected',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      statistic: {
        label: 'statistic',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      contribution0: {
        label: 'contribution0',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      contribution1: {
        label: 'contribution1',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      divergence: {
        label: 'divergence',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      selectedMass: {
        label: 'selectedMass',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      },
      rows: {
        label: 'rows',
        unit: '',
        role: 'intermediate',
        description: 'Computed quantity in Poisson arrivals.'
      }
    }
  });
  const links = freeze(
    Object.fromEntries(
      stories.map(story => {
        const v = story.variables[0];
        return [
          story.slug,
          {
            variableKey: v.key,
            symbol: v.symbol,
            variableLabel: v.label,
            unit: v.unit,
            effectLabel: story.summary,
            steps: story.steps.map(s => ({
              focus: s.focus,
              label: s.focusLabel,
              description: s.focusDescription
            }))
          }
        ];
      })
    )
  );
  return Object.freeze({
    all: () => stories.slice(),
    forSlug: slug => stories.find(s => s.slug === slug) || null,
    find: id => stories.find(s => s.id === id) || null,
    linksFor: slug => (Object.hasOwn(links, slug) ? links[slug] : null),
    quantityFor: (slug, key) =>
      Object.hasOwn(quantities, slug) && Object.hasOwn(quantities[slug], key)
        ? quantities[slug][key]
        : null
  });
});
