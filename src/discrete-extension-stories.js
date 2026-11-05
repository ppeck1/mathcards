/* Original finite counting teaching data; no clocks, DOM or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDiscreteExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:discrete-extension:graph-coloring',
        slug: 'graph-coloring',
        scene: 'graph-coloring-discrete-scene',
        unit: 'assignments',
        title: 'How many conflict-free schedules fit the available time slots?',
        eyebrow: 'Count a real planning decision',
        presentation: {
          compact: true,
          controlHint:
            'Move one whole input. Follow it through the story, calculation and highlighted marks.'
        },
        summary:
          'Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        context:
          'Four workshop sessions form a cycle of shared-instructor conflicts. An optional extra conflict joins sessions 1 and 3. Every session needs one slot; conflicting sessions must use different slots.',
        question: 'How many conflict-free schedules fit the available time slots?',
        variables: [
          {
            key: 'palette',
            symbol: 'k',
            label: 'Available time slots k',
            unit: 'slots',
            min: 1,
            max: 4,
            step: 1,
            discrete: true
          },
          {
            key: 'diagonal',
            symbol: 'd',
            label: 'Extra session conflict d',
            unit: '',
            min: 0,
            max: 1,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          palette: 2,
          diagonal: 0
        },
        timeline: {
          key: 'palette',
          from: 1,
          to: 4,
          durationMs: 16000
        },
        steps: [
          {
            id: '0',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Read the conflict map',
            body: 'Every edge marks sessions that must meet at different times. Vertex positions do not encode distance.',
            formula: 'G',
            focusLabel: 'Read the conflict map',
            focusDescription:
              'Every edge marks sessions that must meet at different times. Vertex positions do not encode distance.'
          },
          {
            id: '1',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose the available slots',
            body: 'Change the number of labeled slots. Add the extra conflict only when those two sessions also share an instructor.',
            formula: 'k = {{palette}}; d = {{diagonal}}',
            focusLabel: 'Choose the available slots',
            focusDescription:
              'Change the number of labeled slots. Add the extra conflict only when those two sessions also share an instructor.'
          },
          {
            id: '2',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Check every assignment',
            body: 'Test all possible slot labels for the four sessions; retain only assignments with no conflicting endpoints.',
            formula: 'k⁴ = {{candidateCount}}',
            focusLabel: 'Check every assignment',
            focusDescription:
              'Test all possible slot labels for the four sessions; retain only assignments with no conflicting endpoints.'
          },
          {
            id: '3',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Count proper schedules',
            body: '{{statusLabel}}. The first palette with any proper assignment gives the fewest slots needed.',
            formula: 'N_G(k) = {{output}}; χ(G) = {{chromatic}}',
            focusLabel: 'Count proper schedules',
            focusDescription:
              '{{statusLabel}}. The first palette with any proper assignment gives the fewest slots needed.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the available slots',
            template: 'k = {{palette}}; d = {{diagonal}}',
            description:
              'Change the number of labeled slots. Add the extra conflict only when those two sessions also share an instructor.'
          },
          {
            role: 'intermediate',
            label: 'Check every assignment',
            template: 'k⁴ = {{candidateCount}}',
            description:
              'Test all possible slot labels for the four sessions; retain only assignments with no conflicting endpoints.'
          },
          {
            role: 'output',
            label: 'Count proper schedules',
            template: 'N_G(k) = {{output}}; χ(G) = {{chromatic}}',
            description:
              '{{statusLabel}}. The first palette with any proper assignment gives the fewest slots needed.'
          }
        ],
        assumptions: [
          'Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.'
        ],
        sourceRefs: ['source:discrete-extension:coloring'],
        conclusion:
          'Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
      },
      {
        id: 'story:discrete-extension:inclusion-exclusion',
        slug: 'inclusion-exclusion',
        scene: 'inclusion-exclusion-discrete-scene',
        unit: 'people',
        title: 'How many chairs are needed when two signup lists overlap?',
        eyebrow: 'Count a real planning decision',
        presentation: {
          compact: true,
          controlHint:
            'Move one whole input. Follow it through the story, calculation and highlighted marks.'
        },
        summary:
          'Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        context:
          'At a community workshop, list A records woodcraft signups and list B records repair signups. Each person attending either activity needs one chair at the joint opening talk.',
        question: 'How many chairs are needed when two signup lists overlap?',
        variables: [
          {
            key: 'overlap',
            symbol: 'h',
            label: 'People on both lists h',
            unit: 'people',
            min: 0,
            max: 12,
            step: 1,
            discrete: true
          },
          {
            key: 'wood',
            symbol: 'a',
            label: 'Woodcraft list size a',
            unit: 'people',
            min: 0,
            max: 12,
            step: 1,
            discrete: true
          },
          {
            key: 'repair',
            symbol: 'b',
            label: 'Repair list size b',
            unit: 'people',
            min: 0,
            max: 12,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          overlap: 3,
          wood: 7,
          repair: 6
        },
        timeline: {
          key: 'overlap',
          from: 0,
          to: 6,
          durationMs: 18000
        },
        steps: [
          {
            id: '0',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Begin with two signup lists',
            body: 'Gold dots denote people on both activity lists. They are the same group shown in both rows.',
            formula: 'A; B',
            focusLabel: 'Begin with two signup lists',
            focusDescription:
              'Gold dots denote people on both activity lists. They are the same group shown in both rows.'
          },
          {
            id: '1',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Choose the overlap',
            body: 'Set the two list sizes and the number of people appearing on both. An overlap larger than a list is impossible.',
            formula: 'a = {{wood}}; b = {{repair}}; h = {{overlap}}',
            focusLabel: 'Choose the overlap',
            focusDescription:
              'Set the two list sizes and the number of people appearing on both. An overlap larger than a list is impossible.'
          },
          {
            id: '2',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Count the list entries',
            body: 'Adding both list sizes includes two copies of every shared person.',
            formula: 'a + b = {{total}}',
            focusLabel: 'Count the list entries',
            focusDescription: 'Adding both list sizes includes two copies of every shared person.'
          },
          {
            id: '3',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Remove one extra copy',
            body: 'Subtract the shared count once. The final rows contain exactly one dot for each person who needs a chair.',
            formula: '|A∪B| = {{wood}} + {{repair}} − {{overlap}} = {{output}}',
            focusLabel: 'Remove one extra copy',
            focusDescription:
              'Subtract the shared count once. The final rows contain exactly one dot for each person who needs a chair.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Choose the overlap',
            template: 'a = {{wood}}; b = {{repair}}; h = {{overlap}}',
            description:
              'Set the two list sizes and the number of people appearing on both. An overlap larger than a list is impossible.'
          },
          {
            role: 'intermediate',
            label: 'Count the list entries',
            template: 'a + b = {{total}}',
            description: 'Adding both list sizes includes two copies of every shared person.'
          },
          {
            role: 'output',
            label: 'Remove one extra copy',
            template: '|A∪B| = {{wood}} + {{repair}} − {{overlap}} = {{output}}',
            description:
              'Subtract the shared count once. The final rows contain exactly one dot for each person who needs a chair.'
          }
        ],
        assumptions: [
          'Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.'
        ],
        sourceRefs: ['source:discrete-extension:inclusion'],
        conclusion:
          'Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
      }
    ],
    quantities: {
      'graph-coloring': {
        palette: {
          label: 'Available numbered time slots',
          role: 'input',
          unit: '',
          description:
            'Available numbered time slots. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        diagonal: {
          label: 'Whether the extra conflict is included: zero or one',
          role: 'input',
          unit: '',
          description:
            'Whether the extra conflict is included: zero or one. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        edges: {
          label: 'The fixed four-session conflict graph',
          role: 'reference',
          unit: '',
          description:
            'The fixed four-session conflict graph. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        output: {
          label: 'Number of proper assignments with k labeled slots',
          role: 'output',
          unit: '',
          description:
            'Number of proper assignments with k labeled slots. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        chromatic: {
          label: 'Fewest time slots permitting a proper assignment',
          role: 'output',
          unit: '',
          description:
            'Fewest time slots permitting a proper assignment. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        candidateCount: {
          label: 'All labeled assignments before conflict checks',
          role: 'intermediate',
          unit: '',
          description:
            'All labeled assignments before conflict checks. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        assignment: {
          label: 'Representative assignment of numbered slots to sessions',
          role: 'intermediate',
          unit: '',
          description:
            'Representative assignment of numbered slots to sessions. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        conflicts: {
          label: 'Number of conflicting edges in the displayed assignment',
          role: 'intermediate',
          unit: '',
          description:
            'Number of conflicting edges in the displayed assignment. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        proper: {
          label: 'Whether a proper assignment exists',
          role: 'intermediate',
          unit: '',
          description:
            'Whether a proper assignment exists. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        vertexCount: {
          label: 'Four sessions in the fixed graph',
          role: 'intermediate',
          unit: '',
          description:
            'Four sessions in the fixed graph. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        edgeCount: {
          label: 'Number of session conflicts',
          role: 'intermediate',
          unit: '',
          description:
            'Number of session conflicts. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        statusLabel: {
          label: 'Whether the current palette permits a proper schedule',
          role: 'intermediate',
          unit: '',
          description:
            'Whether the current palette permits a proper schedule. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        },
        slotLabel: {
          label: 'Assigned slot labels in ordinary session order',
          role: 'intermediate',
          unit: '',
          description:
            'Assigned slot labels in ordinary session order. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.'
        }
      },
      'inclusion-exclusion': {
        woodMembers: {
          label: 'Constructed woodcraft signup set',
          role: 'reference',
          unit: '',
          description:
            'A finite collection of constructed person identifiers. Its row contains one dot per member and shares exactly the declared overlap with the repair list.'
        },
        repairMembers: {
          label: 'Constructed repair signup set',
          role: 'reference',
          unit: '',
          description:
            'A finite collection of constructed person identifiers. Its row contains one dot per member and shares exactly the declared overlap with the woodcraft list.'
        },
        wood: {
          label: 'Cardinality of the woodcraft set',
          role: 'input',
          unit: 'people',
          description:
            'Cardinality of the woodcraft set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        repair: {
          label: 'Cardinality of the repair set',
          role: 'input',
          unit: 'people',
          description:
            'Cardinality of the repair set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        overlap: {
          label: 'Shared people in both signup sets',
          role: 'input',
          unit: 'people',
          description:
            'Shared people in both signup sets. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        output: {
          label: 'Distinct people needing one chair',
          role: 'output',
          unit: 'people',
          description:
            'Distinct people needing one chair. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        total: {
          label: 'List entries before deduplicating shared people',
          role: 'intermediate',
          unit: '',
          description:
            'List entries before deduplicating shared people. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        woodOnly: {
          label: 'People registered only for woodcraft',
          role: 'intermediate',
          unit: '',
          description:
            'People registered only for woodcraft. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        },
        repairOnly: {
          label: 'People registered only for repair',
          role: 'intermediate',
          unit: '',
          description:
            'People registered only for repair. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.'
        }
      }
    },
    links: {
      'graph-coloring': {
        variableKey: 'palette',
        symbol: 'k',
        variableLabel: 'Available time slots k',
        unit: 'slots',
        effectLabel:
          'Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        steps: [
          {
            focus: 'reference',
            label: 'Read the conflict map',
            description:
              'Every edge marks sessions that must meet at different times. Vertex positions do not encode distance.'
          },
          {
            focus: 'input',
            label: 'Choose the available slots',
            description:
              'Change the number of labeled slots. Add the extra conflict only when those two sessions also share an instructor.'
          },
          {
            focus: 'intermediate',
            label: 'Check every assignment',
            description:
              'Test all possible slot labels for the four sessions; retain only assignments with no conflicting endpoints.'
          },
          {
            focus: 'output',
            label: 'Count proper schedules',
            description:
              '{{statusLabel}}. The first palette with any proper assignment gives the fewest slots needed.'
          }
        ]
      },
      'inclusion-exclusion': {
        variableKey: 'overlap',
        symbol: 'h',
        variableLabel: 'People on both lists h',
        unit: 'people',
        effectLabel:
          'Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        steps: [
          {
            focus: 'reference',
            label: 'Begin with two signup lists',
            description:
              'Gold dots denote people on both activity lists. They are the same group shown in both rows.'
          },
          {
            focus: 'input',
            label: 'Choose the overlap',
            description:
              'Set the two list sizes and the number of people appearing on both. An overlap larger than a list is impossible.'
          },
          {
            focus: 'intermediate',
            label: 'Count the list entries',
            description: 'Adding both list sizes includes two copies of every shared person.'
          },
          {
            focus: 'output',
            label: 'Remove one extra copy',
            description:
              'Subtract the shared count once. The final rows contain exactly one dot for each person who needs a chair.'
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
