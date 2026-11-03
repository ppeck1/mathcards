/* Original finite counting teaching data; no clocks, DOM or private state. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasDiscreteExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'graph-coloring',
        title: 'Graph coloring and compatible sessions',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number. Only the four-session cycle and its optional diagonal are implemented. The palette has one to four labeled time slots. Assignments can leave slots unused. Counts are exact integers; vertex positions are schematic. No arbitrary graph editor, durations, room capacities or general scheduling solver is supplied.',
        example: 'N_G(2) = 2 for the four-session cycle.',
        readAs: 'Graph coloring and compatible sessions',
        aliases: ['graph coloring', 'vertex coloring', 'graph colouring'],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring']
      },
      {
        id: 'graph-coloring-palette-1',
        title: 'Available numbered time slots',
        category: 'card-notation',
        symbols: ['k'],
        tokens: ['k'],
        definition:
          'Available numbered time slots. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'k has the stated meaning in this card.',
        readAs: 'Available numbered time slots',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'graph-coloring-diagonal-2',
        title: 'Whether the extra conflict is included: zero or one',
        category: 'card-notation',
        symbols: ['d'],
        tokens: ['d'],
        definition:
          'Whether the extra conflict is included: zero or one. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'd has the stated meaning in this card.',
        readAs: 'Whether the extra conflict is included: zero or one',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'graph-coloring-edges-3',
        title: 'The fixed four-session conflict graph',
        category: 'card-notation',
        symbols: ['G'],
        tokens: ['G'],
        definition:
          'The fixed four-session conflict graph. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'G has the stated meaning in this card.',
        readAs: 'The fixed four-session conflict graph',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'graph-coloring-output-4',
        title: 'Number of proper assignments with k labeled slots',
        category: 'card-notation',
        symbols: ['N_G(k)', 'N_G', 'N_{G}(k)'],
        tokens: ['N_G(k)', 'N_G', 'N_{G}(k)'],
        definition:
          'Number of proper assignments with k labeled slots. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'N_G(k) has the stated meaning in this card.',
        readAs: 'Number of proper assignments with k labeled slots',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'graph-coloring-chromatic-5',
        title: 'Fewest time slots permitting a proper assignment',
        category: 'card-notation',
        symbols: ['χ(G)', 'χ', '\\chi(G)'],
        tokens: ['χ(G)', 'χ', '\\chi(G)'],
        definition:
          'Fewest time slots permitting a proper assignment. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'χ(G) has the stated meaning in this card.',
        readAs: 'Fewest time slots permitting a proper assignment',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'graph-coloring-candidateCount-6',
        title: 'All labeled assignments before checking conflicts',
        category: 'card-notation',
        symbols: ['k⁴', 'k^4'],
        tokens: ['k⁴', 'k^4'],
        definition:
          'All labeled assignments before checking conflicts. Assign one numbered time slot to each session. A proper assignment gives different slots to every conflicting pair. Count proper assignments for the selected palette; the smallest palette with a proper assignment is the chromatic number.',
        example: 'k⁴ has the stated meaning in this card.',
        readAs: 'All labeled assignments before checking conflicts',
        aliases: [],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'inclusion-exclusion',
        title: 'Inclusion–exclusion: count the overlap once',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair. Each list contains zero to twelve people. The overlap is a whole count no larger than either list. Dots show one constructed realization of those counts, not collected registrations or a probability distribution. Only the two-set formula is executable.',
        example: '|A∪B| = 7 + 6 − 3 = 10',
        readAs: 'Inclusion–exclusion: count the overlap once',
        aliases: ['inclusion-exclusion', 'inclusion exclusion principle', 'two-set counting'],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-wood-8',
        title: 'People on the woodcraft signup list',
        category: 'card-notation',
        symbols: ['a'],
        tokens: ['a'],
        definition:
          'People on the woodcraft signup list. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: 'a has the stated meaning in this card.',
        readAs: 'People on the woodcraft signup list',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-repair-9',
        title: 'People on the repair signup list',
        category: 'card-notation',
        symbols: ['b'],
        tokens: ['b'],
        definition:
          'People on the repair signup list. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: 'b has the stated meaning in this card.',
        readAs: 'People on the repair signup list',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-overlap-10',
        title: 'People registered for both activities',
        category: 'card-notation',
        symbols: ['h'],
        tokens: ['h'],
        definition:
          'People registered for both activities. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: 'h has the stated meaning in this card.',
        readAs: 'People registered for both activities',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-wood-11',
        title: 'Woodcraft signup set',
        category: 'card-notation',
        symbols: ['A'],
        tokens: ['A'],
        definition:
          'Woodcraft signup set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: 'A has the stated meaning in this card.',
        readAs: 'Woodcraft signup set',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-repair-12',
        title: 'Repair signup set',
        category: 'card-notation',
        symbols: ['B'],
        tokens: ['B'],
        definition:
          'Repair signup set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: 'B has the stated meaning in this card.',
        readAs: 'Repair signup set',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-wood-13',
        title: 'Cardinality of the woodcraft set',
        category: 'card-notation',
        symbols: ['|A|'],
        tokens: ['|A|'],
        definition:
          'Cardinality of the woodcraft set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: '|A| has the stated meaning in this card.',
        readAs: 'Cardinality of the woodcraft set',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-repair-14',
        title: 'Cardinality of the repair set',
        category: 'card-notation',
        symbols: ['|B|'],
        tokens: ['|B|'],
        definition:
          'Cardinality of the repair set. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: '|B| has the stated meaning in this card.',
        readAs: 'Cardinality of the repair set',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-overlap-15',
        title: 'Shared people in both signup sets',
        category: 'card-notation',
        symbols: ['|A∩B|', '|A\\cap B|', 'A∩B'],
        tokens: ['|A∩B|', '|A\\cap B|', 'A∩B'],
        definition:
          'Shared people in both signup sets. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: '|A∩B| has the stated meaning in this card.',
        readAs: 'Shared people in both signup sets',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'inclusion-exclusion-output-16',
        title: 'Distinct people needing one chair',
        category: 'card-notation',
        symbols: ['|A∪B|', '|A\\cup B|', 'A∪B'],
        tokens: ['|A∪B|', '|A\\cup B|', 'A∪B'],
        definition:
          'Distinct people needing one chair. Add the sizes of two finite lists, then subtract their shared people once. The overlap was included in both lists, while a distinct attendee needs only one chair.',
        example: '|A∪B| has the stated meaning in this card.',
        readAs: 'Distinct people needing one chair',
        aliases: [],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      },
      {
        id: 'chromatic-number',
        title: 'Chromatic number',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'The smallest palette size permitting a proper vertex coloring of a finite graph.',
        example: 'χ(G) = 2 for the four-session cycle.',
        readAs: 'chromatic number',
        aliases: ['chromatic number'],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'proper-vertex-coloring',
        title: 'Proper vertex coloring',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'An assignment of labels to vertices in which every adjacent pair receives different labels.',
        example: 'χ(G) = 2 for the four-session cycle.',
        readAs: 'proper vertex coloring',
        aliases: ['proper vertex coloring'],
        sourceKeys: ['discrete_coloring'],
        grammarCards: ['graph-coloring'],
        formulaCards: ['graph-coloring'],
        relatedIds: ['graph-coloring']
      },
      {
        id: 'double-counting',
        title: 'Double counting',
        category: 'discrete',
        symbols: [],
        tokens: [],
        definition:
          'Counting one object more than once when adding overlapping collections. The two-set rule removes one extra copy of every shared object.',
        example: 'A person on both lists contributes two list entries but needs one chair.',
        readAs: 'double counting',
        aliases: ['double counting'],
        sourceKeys: ['discrete_inclusion'],
        grammarCards: ['inclusion-exclusion'],
        formulaCards: ['inclusion-exclusion'],
        relatedIds: ['inclusion-exclusion']
      }
    ],
    sources: {
      discrete_coloring: {
        title: 'Joy Morris · Combinatorics · Vertex colouring',
        url: 'https://opentext.uleth.ca/Combinatorics/sect_colouring-Vertices.html'
      },
      discrete_inclusion: {
        title: 'OpenStax · Contemporary Mathematics · Set operations with two sets',
        url: 'https://openstax.org/books/contemporary-mathematics/pages/1-4-set-operations-with-two-sets'
      }
    }
  };
  data.entries.push(
    {
      id: 'discrete-person-count-unit',
      title: 'People as a finite count',
      category: 'units',
      symbols: ['people', 'person'],
      tokens: ['people', 'person'],
      mathSymbols: ['people', 'person'],
      notationKinds: ['unit'],
      definition:
        'A whole count of distinct attendees in the constructed signup lists. The same person on both lists contributes one member to their union. This is a cardinality, not a length, duration, probability or measured attendance dataset.',
      example: '7 people + 6 people − 3 shared people = 10 distinct people.',
      readAs: 'people counted once',
      aliases: ['person count'],
      sourceKeys: ['discrete_inclusion'],
      grammarCards: ['inclusion-exclusion'],
      formulaCards: ['inclusion-exclusion'],
      relatedIds: ['inclusion-exclusion', 'cardinality']
    },
    {
      id: 'discrete-time-slot-count-unit',
      title: 'Number of labeled time slots',
      category: 'units',
      symbols: ['slots', 'slot'],
      tokens: ['slots', 'slot'],
      mathSymbols: ['slots', 'slot'],
      notationKinds: ['unit'],
      definition:
        'The palette size counts available time-slot labels in this conflict graph. Labels distinguish scheduling categories; their numbers do not measure start times or durations. The chromatic number is the minimum such count that permits a proper assignment.',
      example: 'Two slots can alternate around the four-session cycle.',
      readAs: 'available labeled slots',
      aliases: ['time slot count'],
      sourceKeys: ['discrete_coloring'],
      grammarCards: ['graph-coloring'],
      formulaCards: ['graph-coloring'],
      relatedIds: ['graph-coloring', 'chromatic-number']
    },
    {
      id: 'discrete-assignment-count-unit',
      title: 'Count of labeled assignments',
      category: 'units',
      symbols: ['assignments', 'assignment'],
      tokens: ['assignments', 'assignment'],
      mathSymbols: ['assignments', 'assignment'],
      notationKinds: ['unit'],
      definition:
        'An assignment gives one available slot label to each of the four sessions. Count only assignments satisfying every conflict. Exchanging two slot labels produces a different labeled assignment; unused available labels are permitted. This count is not a probability or an elapsed time.',
      example: 'The four-session cycle has two proper assignments with two labeled slots.',
      readAs: 'proper labeled assignments',
      aliases: ['assignment count'],
      sourceKeys: ['discrete_coloring'],
      grammarCards: ['graph-coloring'],
      formulaCards: ['graph-coloring'],
      relatedIds: ['graph-coloring', 'proper-vertex-coloring']
    }
  );
  const freeze = v => {
    if (v && typeof v === 'object' && !Object.isFrozen(v)) {
      Object.values(v).forEach(freeze);
      Object.freeze(v);
    }
    return v;
  };
  freeze(data);
  return data;
});
