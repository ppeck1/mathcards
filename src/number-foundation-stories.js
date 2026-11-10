/* Original exact-number teaching data; no clocks or storage. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberFoundationStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:number-foundation:modular-arithmetic',
        slug: 'modular-arithmetic',
        scene: 'modular-arithmetic-number-scene',
        unit: 'items',
        title: 'What is left after every full tray is packed?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.',
        context:
          'A workshop packs counters into trays of a fixed capacity. Change the total count or the capacity. Cyan counters fill complete trays; gold counters are the leftovers. The same leftover can recur after another full tray has been added.',
        question: 'What is left after every full tray is packed?',
        variables: [
          {
            key: 'total',
            symbol: 'n',
            label: 'Counters n',
            unit: 'items',
            min: 0,
            max: 60,
            step: 1,
            discrete: true
          },
          {
            key: 'modulus',
            symbol: 'm',
            label: 'Counters per tray m',
            unit: 'items',
            min: 2,
            max: 12,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          total: 23,
          modulus: 6
        },
        timeline: {
          key: 'total',
          from: 0,
          to: 60,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'Each complete tray holds exactly m counters. Only completely filled trays enter the quotient.',
            formula: 'n = qm + r; 0 ≤ r < m',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Fill full trays',
            body: 'The whole quotient tells how many complete trays fit.',
            formula: 'q = {{quotient}}',
            focusLabel: 'Fill full trays',
            focusDescription:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Separate packed counters',
            body: 'These counters are already accounted for in complete trays.',
            formula: '{{quotient}} × {{modulus}} = {{packed}}',
            focusLabel: 'Separate packed counters',
            focusDescription:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read what remains',
            body: 'Gold marks the counters outside complete trays.',
            formula: 'r = {{total}} − {{packed}} = {{output}}',
            focusLabel: 'Read what remains',
            focusDescription:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Fill full trays',
            template: 'q = {{quotient}}',
            description: 'The whole quotient tells how many complete trays fit.'
          },
          {
            role: 'intermediate',
            label: 'Separate packed counters',
            template: '{{quotient}} × {{modulus}} = {{packed}}',
            description: 'These counters are already accounted for in complete trays.'
          },
          {
            role: 'output',
            label: 'Read what remains',
            template: 'r = {{total}} − {{packed}} = {{output}}',
            description: 'Gold marks the counters outside complete trays.'
          }
        ]
      },
      {
        id: 'story:number-foundation:greatest-common-divisor',
        slug: 'greatest-common-divisor',
        scene: 'greatest-common-divisor-number-scene',
        unit: 'cm',
        title: 'What is the longest piece that cuts both ribbons without waste?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.',
        context:
          'Two workshop ribbons have known whole-centimetre lengths. They must be cut into equal pieces without leftover ribbon. Change either length and inspect the common cut length and the exact Euclidean division chain.',
        question: 'What is the longest piece that cuts both ribbons without waste?',
        variables: [
          {
            key: 'first',
            symbol: 'a',
            label: 'First ribbon a',
            unit: 'cm',
            min: 1,
            max: 60,
            step: 1,
            discrete: true
          },
          {
            key: 'second',
            symbol: 'b',
            label: 'Second ribbon b',
            unit: 'cm',
            min: 1,
            max: 60,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          first: 24,
          second: 18
        },
        timeline: {
          key: 'first',
          from: 1,
          to: 60,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'Only equal positive whole-centimetre cuts with no waste qualify. We seek the longest one.',
            formula: 'gcd(a,b) = gcd(b, a mod b)',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Read the two lengths',
            body: 'Both ribbons use the same length unit.',
            formula: 'a = {{first}} cm; b = {{second}} cm',
            focusLabel: 'Read the two lengths',
            focusDescription:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Start Euclidean division',
            body: 'Replacing the longer pair by divisor and remainder preserves common divisors.',
            formula: '{{firstEquation}}',
            focusLabel: 'Start Euclidean division',
            focusDescription:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Read the common cut',
            body: 'Both bars are divided into pieces of exactly this length.',
            formula: 'd = {{output}} cm',
            focusLabel: 'Read the common cut',
            focusDescription:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Read the two lengths',
            template: 'a = {{first}} cm; b = {{second}} cm',
            description: 'Both ribbons use the same length unit.'
          },
          {
            role: 'intermediate',
            label: 'Start Euclidean division',
            template: '{{firstEquation}}',
            description:
              'Replacing the longer pair by divisor and remainder preserves common divisors.'
          },
          {
            role: 'output',
            label: 'Read the common cut',
            template: 'd = {{output}} cm',
            description: 'Both bars are divided into pieces of exactly this length.'
          }
        ]
      },
      {
        id: 'story:number-foundation:prime-factorization',
        slug: 'prime-factorization',
        scene: 'prime-factorization-number-scene',
        unit: 'factors',
        title: 'Which prime group sizes rebuild the original pack?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.',
        context:
          'A packer splits an item count into nested equal groups. Continue until every factor is prime. Change the item count to see a prime pack stay whole, or a composite pack reveal repeated factors.',
        question: 'Which prime group sizes rebuild the original pack?',
        variables: [
          {
            key: 'number',
            symbol: 'n',
            label: 'Item count n',
            unit: 'items',
            min: 1,
            max: 120,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          number: 84
        },
        timeline: {
          key: 'number',
          from: 1,
          to: 120,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'Every retained factor must be prime, and repeated factors remain in the product.',
            formula: 'n = p₁ × ··· × pₛ',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose the pack',
            body: 'The original count remains fixed while it is split.',
            formula: 'n = {{number}}',
            focusLabel: 'Choose the pack',
            focusDescription:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Retain every prime factor',
            body: 'Repeated prime sizes remain separate factors.',
            formula: '{{factorText}}',
            focusLabel: 'Retain every prime factor',
            focusDescription:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Check the product',
            body: 'Multiplying the retained factors reconstructs n.',
            formula: 'Product = {{product}}; s = {{output}}',
            focusLabel: 'Check the product',
            focusDescription:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the pack',
            template: 'n = {{number}}',
            description: 'The original count remains fixed while it is split.'
          },
          {
            role: 'intermediate',
            label: 'Retain every prime factor',
            template: '{{factorText}}',
            description: 'Repeated prime sizes remain separate factors.'
          },
          {
            role: 'output',
            label: 'Check the product',
            template: 'Product = {{product}}; s = {{output}}',
            description: 'Multiplying the retained factors reconstructs n.'
          }
        ]
      },
      {
        id: 'story:number-foundation:rational-number',
        slug: 'rational-number',
        scene: 'rational-number-number-scene',
        unit: 'm',
        title: 'Can a fraction change its name without changing its length?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.',
        context:
          'A ribbon account holds or owes a whole number of equal pieces. The denominator says how many pieces make one metre. Move either input and compare the original fraction with its reduced name at the same signed number-line position.',
        question: 'Can a fraction change its name without changing its length?',
        variables: [
          {
            key: 'numerator',
            symbol: 'a',
            label: 'Signed pieces a',
            unit: 'pieces',
            min: -12,
            max: 12,
            step: 1,
            discrete: true
          },
          {
            key: 'denominator',
            symbol: 'b',
            label: 'Parts per metre b',
            unit: 'parts',
            min: 1,
            max: 12,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          numerator: 6,
          denominator: 8
        },
        timeline: {
          key: 'numerator',
          from: -12,
          to: 12,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'The denominator names equal parts of one metre. Reducing a fraction changes its name without moving its position.',
            formula: 'a/b = p/q in lowest terms',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Read the equal pieces',
            body: 'Each piece measures one b-th of a metre.',
            formula: 'a = {{numerator}}; b = {{denominator}}',
            focusLabel: 'Read the equal pieces',
            focusDescription:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Cancel the common divisor',
            body: 'Divide both parts by the same positive number.',
            formula: 'd = {{gcd}}; p = {{reducedNumerator}}; q = {{reducedDenominator}}',
            focusLabel: 'Cancel the common divisor',
            focusDescription:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Keep the same position',
            body: 'The exact reduced fraction labels the same signed position.',
            formula: '{{fractionLabel}} m',
            focusLabel: 'Keep the same position',
            focusDescription:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Read the equal pieces',
            template: 'a = {{numerator}}; b = {{denominator}}',
            description: 'Each piece measures one b-th of a metre.'
          },
          {
            role: 'intermediate',
            label: 'Cancel the common divisor',
            template: 'd = {{gcd}}; p = {{reducedNumerator}}; q = {{reducedDenominator}}',
            description: 'Divide both parts by the same positive number.'
          },
          {
            role: 'output',
            label: 'Keep the same position',
            template: '{{fractionLabel}} m',
            description: 'The exact reduced fraction labels the same signed position.'
          }
        ]
      },
      {
        id: 'story:number-foundation:numeral-system',
        slug: 'numeral-system',
        scene: 'numeral-system-number-scene',
        unit: 'items',
        title: 'What changes when the same counter is written in another base?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.',
        context:
          'A counter holds a fixed number of items. Grouping by a chosen base changes its place weights and digits. Switch between binary, ternary and decimal while the weighted contributions still add to the same item count.',
        question: 'What changes when the same counter is written in another base?',
        variables: [
          {
            key: 'value',
            symbol: 'n',
            label: 'Item count n',
            unit: 'items',
            min: 0,
            max: 63,
            step: 1,
            discrete: true
          },
          {
            key: 'base',
            symbol: 'b',
            label: 'Representation base b',
            unit: 'dimensionless',
            min: 2,
            max: 10,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          value: 27,
          base: 2
        },
        timeline: {
          key: 'value',
          from: 0,
          to: 63,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'The counter’s item total stays fixed while the chosen base determines its ordinary place weights.',
            formula: 'n = ∑ dⱼ bʲ',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Keep the quantity fixed',
            body: 'The choice of base changes the representation, not n.',
            formula: 'n = {{value}}; b = {{base}}',
            focusLabel: 'Keep the quantity fixed',
            focusDescription:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Read weighted places',
            body: 'Every digit contributes its digit value times its place weight.',
            formula: '{{placeSum}}',
            focusLabel: 'Read weighted places',
            focusDescription:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Reconstruct the count',
            body: 'Geometry and Graph show the same weighted-place calculation.',
            formula: '{{representation}}; sum = {{output}}',
            focusLabel: 'Reconstruct the count',
            focusDescription:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Keep the quantity fixed',
            template: 'n = {{value}}; b = {{base}}',
            description: 'The choice of base changes the representation, not n.'
          },
          {
            role: 'intermediate',
            label: 'Read weighted places',
            template: '{{placeSum}}',
            description: 'Every digit contributes its digit value times its place weight.'
          },
          {
            role: 'output',
            label: 'Reconstruct the count',
            template: '{{representation}}; sum = {{output}}',
            description: 'Geometry and Graph show the same weighted-place calculation.'
          }
        ]
      },
      {
        id: 'story:number-foundation:permutation-count',
        slug: 'permutation-count',
        scene: 'permutation-count-number-scene',
        unit: 'arrangements',
        title: 'How many ways can different people fill different roles?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.',
        context:
          'A volunteer group must fill labeled roles such as opener, guide and closer. Nobody can fill two roles. Choose the number available and the roles to fill; the choice count drops by one at each stage.',
        question: 'How many ways can different people fill different roles?',
        variables: [
          {
            key: 'slots',
            symbol: 'r',
            label: 'Different roles r',
            unit: 'roles',
            min: 0,
            max: 8,
            step: 1,
            discrete: true
          },
          {
            key: 'available',
            symbol: 'n',
            label: 'Available volunteers n',
            unit: 'people',
            min: 0,
            max: 8,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          available: 5,
          slots: 3
        },
        timeline: {
          key: 'slots',
          from: 0,
          to: 5,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'Roles are labeled, and a volunteer can be used at most once. An assignment records who fills each role.',
            formula: 'P(n,r) = n!/(n−r)!',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Declare the people and roles',
            body: 'Roles are different, and each person can be used at most once.',
            formula: 'n = {{available}}; r = {{slots}}',
            focusLabel: 'Declare the people and roles',
            focusDescription:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Multiply the branch choices',
            body: 'After assigning a person, one fewer remains for the next role.',
            formula: '{{factorText}}',
            focusLabel: 'Multiply the branch choices',
            focusDescription:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Count whole assignments',
            body: 'Each product leaf is a distinct ordered role assignment.',
            formula: 'P(n,r) = {{output}}',
            focusLabel: 'Count whole assignments',
            focusDescription:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Declare the people and roles',
            template: 'n = {{available}}; r = {{slots}}',
            description: 'Roles are different, and each person can be used at most once.'
          },
          {
            role: 'intermediate',
            label: 'Multiply the branch choices',
            template: '{{factorText}}',
            description: 'After assigning a person, one fewer remains for the next role.'
          },
          {
            role: 'output',
            label: 'Count whole assignments',
            template: 'P(n,r) = {{output}}',
            description: 'Each product leaf is a distinct ordered role assignment.'
          }
        ]
      },
      {
        id: 'story:number-foundation:binomial-coefficient',
        slug: 'binomial-coefficient',
        scene: 'binomial-coefficient-number-scene',
        unit: 'selections',
        title: 'How many teams remain when listing order does not matter?',
        eyebrow: 'A workshop of exact choices',
        presentation: {
          compact: true,
          controlHint:
            'Change a whole-number input. Follow its exact calculation and the highlighted quantities.'
        },
        summary:
          'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.',
        context:
          'Choose a volunteer team with no different roles. The same people listed in another order still form one team. Change the team size and compare the complete count with a clearly labeled prefix of the actual teams.',
        question: 'How many teams remain when listing order does not matter?',
        variables: [
          {
            key: 'chosen',
            symbol: 'k',
            label: 'People selected k',
            unit: 'people',
            min: 0,
            max: 10,
            step: 1,
            discrete: true
          },
          {
            key: 'available',
            symbol: 'n',
            label: 'Available volunteers n',
            unit: 'people',
            min: 0,
            max: 10,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          available: 6,
          chosen: 3
        },
        timeline: {
          key: 'chosen',
          from: 0,
          to: 6,
          durationMs: 16000
        },
        steps: [
          {
            id: 'reference',
            from: 0,
            to: 0.25,
            focus: 'reference',
            title: 'Start with the workshop rule',
            body: 'Teams record members without different roles. Another listing of the same members is the same team.',
            formula: 'C(n,k) = n!/[k!(n−k)!]',
            focusLabel: 'Start with the workshop rule',
            focusDescription:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            id: 'input',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose a team size',
            body: 'A team records its members, not different roles.',
            formula: 'n = {{available}}; k = {{chosen}}',
            focusLabel: 'Choose a team size',
            focusDescription:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            id: 'calculate',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Remove repeated listings',
            body: 'Every team appears exactly k! times among ordered selections.',
            formula: '{{orderedCount}} / {{ordersPerTeam}}',
            focusLabel: 'Remove repeated listings',
            focusDescription:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            id: 'solve',
            from: 0.75,
            to: 1,
            focus: 'output',
            title: 'Count each team once',
            body: 'The displayed prefix is labeled separately from the complete count.',
            formula: 'C(n,k) = {{output}}',
            focusLabel: 'Count each team once',
            focusDescription:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose a team size',
            template: 'n = {{available}}; k = {{chosen}}',
            description: 'A team records its members, not different roles.'
          },
          {
            role: 'intermediate',
            label: 'Remove repeated listings',
            template: '{{orderedCount}} / {{ordersPerTeam}}',
            description: 'Every team appears exactly k! times among ordered selections.'
          },
          {
            role: 'output',
            label: 'Count each team once',
            template: 'C(n,k) = {{output}}',
            description: 'The displayed prefix is labeled separately from the complete count.'
          }
        ]
      }
    ],
    quantities: {
      'modular-arithmetic': {
        total: {
          label: 'Counters n',
          role: 'input',
          unit: 'items',
          description:
            'Total counters before packing. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.'
        },
        modulus: {
          label: 'Counters per tray m',
          role: 'input',
          unit: 'items',
          description:
            'Positive number of counters in a full tray. Pack n counters into full trays holding m counters each. The leftover count is the nonnegative remainder.'
        },
        output: {
          label: 'Remainder r',
          role: 'output',
          unit: 'items',
          description:
            'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers. This executable family uses nonnegative whole counts and positive tray sizes. Congruence compares remainder classes; the tray picture is not a proof about every integer.'
        },
        quotient: {
          label: 'Number of completely filled trays',
          role: 'input',
          unit: '',
          description:
            'The whole quotient tells how many complete trays fit. Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
        },
        packed: {
          label: 'Counter count in complete trays',
          role: 'intermediate',
          unit: '',
          description:
            'These counters are already accounted for in complete trays. Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
        },
        remainder: {
          label: 'Nonnegative leftover count, strictly smaller than one tray',
          role: 'intermediate',
          unit: '',
          description:
            'Nonnegative leftover count, strictly smaller than one tray. Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      },
      'greatest-common-divisor': {
        first: {
          label: 'First ribbon a',
          role: 'input',
          unit: 'cm',
          description:
            'Length of the first ribbon in centimetres. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.'
        },
        second: {
          label: 'Second ribbon b',
          role: 'input',
          unit: 'cm',
          description:
            'Length of the second ribbon in centimetres. Cut two ribbons of integer lengths a and b centimetres into equal whole-centimetre pieces with no waste. Euclidean division finds the longest permitted piece.'
        },
        output: {
          label: 'Longest common piece',
          role: 'output',
          unit: 'cm',
          description:
            'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths. Both lengths are positive integers from 1 to 60 cm. The gcd is the longest common whole-centimetre length, not the largest number of pieces or a measurement of arbitrary real lengths.'
        },
        firstEquation: {
          label: 'First Euclidean division identity',
          role: 'intermediate',
          unit: '',
          description:
            'Replacing the longer pair by divisor and remainder preserves common divisors. Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
        },
        gcd: {
          label: 'Longest whole-centimetre piece dividing both ribbon lengths',
          role: 'intermediate',
          unit: '',
          description:
            'Longest whole-centimetre piece dividing both ribbon lengths. Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      },
      'prime-factorization': {
        number: {
          label: 'Item count n',
          role: 'input',
          unit: 'items',
          description:
            'Original positive item count. A packer recursively splits a positive whole item count into smaller equal groups until the group sizes are prime. Repeated factors are kept.'
        },
        output: {
          label: 'Prime factors with repetition',
          role: 'output',
          unit: 'factors',
          description:
            'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count. The model factors integers from 1 to 120. One has an empty prime-factor list and empty product 1; it is not a prime. The displayed calculations do not prove unique factorization for every integer.'
        },
        factorText: {
          label: 'Retained multiplication factors',
          role: 'intermediate',
          unit: '',
          description:
            'Repeated prime sizes remain separate factors. Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
        },
        product: {
          label: 'Product reconstructed from prime factors',
          role: 'output',
          unit: '',
          description:
            'Multiplying the retained factors reconstructs n. Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
        },
        factors: {
          label: 'The prime factors in the displayed product',
          role: 'intermediate',
          unit: '',
          description:
            'The prime factors in the displayed product. Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      },
      'rational-number': {
        numerator: {
          label: 'Signed pieces a',
          role: 'input',
          unit: 'pieces',
          description:
            'Signed count of ribbon pieces held or owed. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.'
        },
        denominator: {
          label: 'Parts per metre b',
          role: 'input',
          unit: 'parts',
          description:
            'Positive number of equal pieces making one metre. A ribbon account records a pieces, each 1/b metre long. Positive pieces are held; negative pieces are owed. The reduced fraction names the same signed length.'
        },
        output: {
          label: 'Signed ribbon balance',
          role: 'output',
          unit: 'm',
          description:
            'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances. The numerator is an integer from −12 to 12 and the denominator is a positive integer from 1 to 12. Exact fraction strings remain distinct from their rounded decimal displays.'
        },
        gcd: {
          label: 'Greatest common positive divisor',
          role: 'intermediate',
          unit: '',
          description:
            'Divide both parts by the same positive number. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
        },
        reducedNumerator: {
          label: 'Numerator in lowest terms',
          role: 'intermediate',
          unit: '',
          description:
            'Divide both parts by the same positive number. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
        },
        reducedDenominator: {
          label: 'Positive denominator in lowest terms',
          role: 'intermediate',
          unit: '',
          description:
            'Divide both parts by the same positive number. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
        },
        fractionLabel: {
          label: 'Exact reduced fraction for display',
          role: 'output',
          unit: '',
          description:
            'The exact reduced fraction labels the same signed position. Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      },
      'numeral-system': {
        value: {
          label: 'Item count n',
          role: 'input',
          unit: 'items',
          description:
            'Nonnegative represented item count. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.'
        },
        base: {
          label: 'Representation base b',
          role: 'input',
          unit: 'dimensionless',
          description:
            'Integer base of the positional representation. Rebundle a counter of 0 to 63 items into powers of a chosen base from 2 to 10. A numeral changes when the base changes, while the represented item count stays the same.'
        },
        output: {
          label: 'Same quantity in base ten',
          role: 'output',
          unit: 'items',
          description:
            'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions. Only ordinary nonnegative integer positional notation is implemented. Digits are 0 through b−1. The app does not implement negative bases, fractional digits or a history of numeral systems.'
        },
        placeSum: {
          label: 'Sum of weighted digit contributions',
          role: 'intermediate',
          unit: '',
          description:
            'Every digit contributes its digit value times its place weight. Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
        },
        representation: {
          label: 'Digit string with its declared base',
          role: 'output',
          unit: '',
          description:
            'Geometry and Graph show the same weighted-place calculation. Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
        },
        places: {
          label: 'Digit occupying position j, counted from the units place',
          role: 'intermediate',
          unit: '',
          description:
            'Digit occupying position j, counted from the units place. Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
        },
        digitCount: {
          label: 'Number of digits, including one zero digit for zero',
          role: 'intermediate',
          unit: '',
          description:
            'Number of digits, including one zero digit for zero. Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
        }
      },
      'permutation-count': {
        available: {
          label: 'Available volunteers n',
          role: 'input',
          unit: 'people',
          description:
            'Number of distinct volunteers available. Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.'
        },
        slots: {
          label: 'Different roles r',
          role: 'input',
          unit: 'roles',
          description:
            'Number of different labeled roles to fill. Choose distinct volunteers for r different labeled roles from n available people. A person can fill at most one role, and swapping two people changes the assignment.'
        },
        output: {
          label: 'Ordered role assignments',
          role: 'output',
          unit: 'arrangements',
          description:
            'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one. Whole counts satisfy 0 ≤ r ≤ n ≤ 8. Zero roles have one empty assignment. No repetition, ties, circular equivalence or probability model is included.'
        },
        factorText: {
          label: 'Retained multiplication factors',
          role: 'intermediate',
          unit: '',
          description:
            'After assigning a person, one fewer remains for the next role. Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      },
      'binomial-coefficient': {
        available: {
          label: 'Available volunteers n',
          role: 'input',
          unit: 'people',
          description:
            'Number of distinct volunteers available. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.'
        },
        chosen: {
          label: 'People selected k',
          role: 'input',
          unit: 'people',
          description:
            'Number of people in a team. Choose k volunteers from n available people for a team with no distinct roles. The same members in another listing order are still one team.'
        },
        output: {
          label: 'Unordered teams',
          role: 'output',
          unit: 'selections',
          description:
            'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count. Whole counts satisfy 0 ≤ k ≤ n ≤ 10. Zero chosen people and choosing everybody each give one selection. A displayed prefix of teams is labeled and is never substituted for the full count.'
        },
        orderedCount: {
          label: 'Ordered selections before ignoring order',
          role: 'intermediate',
          unit: '',
          description:
            'Every team appears exactly k! times among ordered selections. Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
        },
        ordersPerTeam: {
          label: 'Ordered listings corresponding to one team',
          role: 'intermediate',
          unit: '',
          description:
            'Every team appears exactly k! times among ordered selections. Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
        },
        digitCount: {
          label: 'Digit count in the chosen base',
          role: 'output',
          unit: 'places',
          description:
            'Number of places in the ordinary representation, including one zero place when the quantity is zero.'
        }
      }
    },
    links: {
      'modular-arithmetic': {
        variableKey: 'total',
        symbol: 'n',
        variableLabel: 'Counters n',
        unit: 'items',
        effectLabel:
          'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            focus: 'input',
            label: 'Fill full trays',
            description:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            focus: 'intermediate',
            label: 'Separate packed counters',
            description:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          },
          {
            focus: 'output',
            label: 'Read what remains',
            description:
              'Divide the nonnegative total by the positive tray capacity. The integer quotient counts full trays and the remainder counts leftovers.'
          }
        ]
      },
      'greatest-common-divisor': {
        variableKey: 'first',
        symbol: 'a',
        variableLabel: 'First ribbon a',
        unit: 'cm',
        effectLabel:
          'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            focus: 'input',
            label: 'Read the two lengths',
            description:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            focus: 'intermediate',
            label: 'Start Euclidean division',
            description:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          },
          {
            focus: 'output',
            label: 'Read the common cut',
            description:
              'Repeat division with remainder until the remainder is zero. The final nonzero divisor is the greatest common divisor of the two positive lengths.'
          }
        ]
      },
      'prime-factorization': {
        variableKey: 'number',
        symbol: 'n',
        variableLabel: 'Item count n',
        unit: 'items',
        effectLabel:
          'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            focus: 'input',
            label: 'Choose the pack',
            description:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            focus: 'intermediate',
            label: 'Retain every prime factor',
            description:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          },
          {
            focus: 'output',
            label: 'Check the product',
            description:
              'Repeatedly divide by the smallest available divisor and retain every prime factor, including repetitions. Their product reconstructs the positive item count.'
          }
        ]
      },
      'rational-number': {
        variableKey: 'numerator',
        symbol: 'a',
        variableLabel: 'Signed pieces a',
        unit: 'pieces',
        effectLabel:
          'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            focus: 'input',
            label: 'Read the equal pieces',
            description:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            focus: 'intermediate',
            label: 'Cancel the common divisor',
            description:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          },
          {
            focus: 'output',
            label: 'Keep the same position',
            description:
              'Divide numerator and positive denominator by their greatest common divisor. The reduced fraction has the same value, including zero and negative balances.'
          }
        ]
      },
      'numeral-system': {
        variableKey: 'value',
        symbol: 'n',
        variableLabel: 'Item count n',
        unit: 'items',
        effectLabel:
          'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            focus: 'input',
            label: 'Keep the quantity fixed',
            description:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            focus: 'intermediate',
            label: 'Read weighted places',
            description:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          },
          {
            focus: 'output',
            label: 'Reconstruct the count',
            description:
              'Use digits from zero through one less than the base, multiply each digit by its positional power of the base, and add the contributions.'
          }
        ]
      },
      'permutation-count': {
        variableKey: 'slots',
        symbol: 'r',
        variableLabel: 'Different roles r',
        unit: 'roles',
        effectLabel:
          'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            focus: 'input',
            label: 'Declare the people and roles',
            description:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            focus: 'intermediate',
            label: 'Multiply the branch choices',
            description:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          },
          {
            focus: 'output',
            label: 'Count whole assignments',
            description:
              'Multiply the available choices for successive labeled roles: n, then n−1, continuing for r factors. The empty product for zero roles is one.'
          }
        ]
      },
      'binomial-coefficient': {
        variableKey: 'chosen',
        symbol: 'k',
        variableLabel: 'People selected k',
        unit: 'people',
        effectLabel:
          'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.',
        steps: [
          {
            focus: 'reference',
            label: 'Start with the workshop rule',
            description:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            focus: 'input',
            label: 'Choose a team size',
            description:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            focus: 'intermediate',
            label: 'Remove repeated listings',
            description:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
          },
          {
            focus: 'output',
            label: 'Count each team once',
            description:
              'Count each unordered team once. Every team has k! ordered listings, so divide ordered selections by this common multiplicity; Pascal recurrence provides the runtime count.'
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
