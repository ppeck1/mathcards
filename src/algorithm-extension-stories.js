/* Authored bounded algorithm teaching data; no clocks or private storage. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgorithmExtensionStories = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    stories: [
      {
        id: 'story:algorithm-extension:linear-search',
        slug: 'linear-search',
        scene: 'linear-search-algorithm-scene',
        unit: 'checks',
        title: 'How many bins have been checked, and when can the clerk stop?',
        eyebrow: 'A workshop procedure you can follow',
        presentation: {
          compact: true,
          controlHint:
            'Reveal one whole decision at a time. Gold marks the current result; the story, calculation and view use the same inputs.'
        },
        summary:
          'Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.',
        context:
          'A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The clerk checks bins from left to right and stops at the first match.',
        question: 'How many bins have been checked, and when can the clerk stop?',
        variables: [
          {
            key: 'steps',
            symbol: 'k',
            label: 'Comparisons to reveal k',
            unit: 'checks',
            min: 0,
            max: 8,
            step: 1,
            discrete: true
          },
          {
            key: 'target',
            symbol: 't',
            label: 'Requested code t',
            unit: '',
            min: 0,
            max: 17,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          steps: 5,
          target: 10
        },
        timeline: {
          key: 'steps',
          from: 0,
          to: 8,
          durationMs: 16000
        },
        steps: [
          {
            id: '0',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Read the bin rule',
            body: 'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.',
            formula: 'n = 8',
            focusLabel: 'Read the bin rule',
            focusDescription:
              'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.'
          },
          {
            id: '1',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Reveal a whole comparison',
            body: 'Change the trace prefix or requested code. Fractional comparisons are not defined.',
            formula: 'k = {{steps}}; t = {{target}}',
            focusLabel: 'Reveal a whole comparison',
            focusDescription:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            id: '2',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the actual comparison',
            body: 'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.',
            formula: 'C = {{completedCost}}',
            focusLabel: 'Follow the actual comparison',
            focusDescription:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            id: '3',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read the shown count',
            body: '{{statusLabel}}. The gold count is the shown prefix, while the cyan tick marks the completed run cost.',
            formula: 'Cₖ = min({{steps}},{{completedCost}}) = {{output}}',
            focusLabel: 'Read the shown count',
            focusDescription:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Reveal a whole comparison',
            template: 'k = {{steps}}; t = {{target}}',
            description:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            role: 'intermediate',
            label: 'Follow the actual comparison',
            template: 'C = {{completedCost}}',
            description:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            role: 'output',
            label: 'Read the shown count',
            template: 'Cₖ = min({{steps}},{{completedCost}}) = {{output}}',
            description:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ],
        assumptions: [
          'The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.'
        ],
        sourceRefs: ['source:algorithm-extensions:linear'],
        conclusion:
          'Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
      },
      {
        id: 'story:algorithm-extension:binary-search',
        slug: 'binary-search',
        scene: 'binary-search-algorithm-scene',
        unit: 'checks',
        title: 'How many bins have been checked, and when can the clerk stop?',
        eyebrow: 'A workshop procedure you can follow',
        presentation: {
          compact: true,
          controlHint:
            'Reveal one whole decision at a time. Gold marks the current result; the story, calculation and view use the same inputs.'
        },
        summary:
          'Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.',
        context:
          'A workshop stores part codes 2, 4, 6, 8, 10, 12, 14 and 16 in bins numbered 1 through 8. A clerk receives a requested code. Move the comparison step to follow the checks, or change the requested code and predict the next bin. The bins are already sorted, so a middle comparison can eliminate half of the current candidates.',
        question: 'How many bins have been checked, and when can the clerk stop?',
        variables: [
          {
            key: 'steps',
            symbol: 'k',
            label: 'Comparisons to reveal k',
            unit: 'checks',
            min: 0,
            max: 4,
            step: 1,
            discrete: true
          },
          {
            key: 'target',
            symbol: 't',
            label: 'Requested code t',
            unit: '',
            min: 0,
            max: 17,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          steps: 3,
          target: 10
        },
        timeline: {
          key: 'steps',
          from: 0,
          to: 4,
          durationMs: 16000
        },
        steps: [
          {
            id: '0',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Read the bin rule',
            body: 'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.',
            formula: 'n = 8',
            focusLabel: 'Read the bin rule',
            focusDescription:
              'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.'
          },
          {
            id: '1',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Reveal a whole comparison',
            body: 'Change the trace prefix or requested code. Fractional comparisons are not defined.',
            formula: 'k = {{steps}}; t = {{target}}',
            focusLabel: 'Reveal a whole comparison',
            focusDescription:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            id: '2',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Follow the actual comparison',
            body: 'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.',
            formula: 'C = {{completedCost}}',
            focusLabel: 'Follow the actual comparison',
            focusDescription:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            id: '3',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Read the shown count',
            body: '{{statusLabel}}. The gold count is the shown prefix, while the cyan tick marks the completed run cost.',
            formula: 'Cₖ = min({{steps}},{{completedCost}}) = {{output}}',
            focusLabel: 'Read the shown count',
            focusDescription:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Reveal a whole comparison',
            template: 'k = {{steps}}; t = {{target}}',
            description:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            role: 'intermediate',
            label: 'Follow the actual comparison',
            template: 'C = {{completedCost}}',
            description:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            role: 'output',
            label: 'Read the shown count',
            template: 'Cₖ = min({{steps}},{{completedCost}}) = {{output}}',
            description:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ],
        assumptions: [
          'The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.'
        ],
        sourceRefs: ['source:algorithm-extensions:binary'],
        conclusion:
          'Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
      },
      {
        id: 'story:algorithm-extension:minimum-spanning-tree',
        slug: 'minimum-spanning-tree',
        scene: 'minimum-spanning-tree-algorithm-scene',
        unit: 'm',
        title: 'Which three runs connect every sensor using the least cable?',
        eyebrow: 'A workshop procedure you can follow',
        presentation: {
          compact: true,
          controlHint:
            'Reveal one whole decision at a time. Gold marks the current result; the story, calculation and view use the same inputs.'
        },
        summary:
          'Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.',
        context:
          'Four garden sensor stations must share one cable network. The available cable runs are quoted in whole metres: AB is 2, AD is 6, BC is 3 and CD is 2. Change the AC and BD quotes. Keep all four connected with the least cable; there is no need to form a loop.',
        question: 'Which three runs connect every sensor using the least cable?',
        variables: [
          {
            key: 'ac',
            symbol: 'w',
            label: 'Cable quote AC, w',
            unit: 'm',
            min: 1,
            max: 8,
            step: 1,
            discrete: true
          },
          {
            key: 'bd',
            symbol: 'v',
            label: 'Cable quote BD, v',
            unit: 'm',
            min: 1,
            max: 8,
            step: 1,
            discrete: true
          }
        ],
        parameters: {
          ac: 4,
          bd: 4
        },
        timeline: {
          key: 'ac',
          from: 1,
          to: 8,
          durationMs: 16000
        },
        steps: [
          {
            id: '0',
            from: 0.0,
            to: 0.25,
            focus: 'reference',
            title: 'Read the cable plan',
            body: 'Connect all four sensor stations without forming a loop. The available run lengths are the quantities being compared.',
            formula: 'W(T) = ∑ wₑ',
            focusLabel: 'Read the cable plan',
            focusDescription:
              'Connect all four sensor stations without forming a loop. The available run lengths are the quantities being compared.'
          },
          {
            id: '1',
            from: 0.25,
            to: 0.5,
            focus: 'input',
            title: 'Change two cable quotes',
            body: 'The cyan AC quote and violet BD quote can change which tree is cheapest.',
            formula: 'w = {{ac}} m; v = {{bd}} m',
            focusLabel: 'Change two cable quotes',
            focusDescription:
              'The cyan AC quote and violet BD quote can change which tree is cheapest.'
          },
          {
            id: '2',
            from: 0.5,
            to: 0.75,
            focus: 'intermediate',
            title: 'Keep a minimum tree',
            body: 'The selected links join all four stations; every alternative tied minimum is retained.',
            formula: 'T = {{selectedLabel}}',
            focusLabel: 'Keep a minimum tree',
            focusDescription:
              'The selected links join all four stations; every alternative tied minimum is retained.'
          },
          {
            id: '3',
            from: 0.75,
            to: 1.0,
            focus: 'output',
            title: 'Add only the selected runs',
            body: 'Read their total cable and the number of equal minimum choices.',
            formula: 'W = {{sumLabel}} = {{output}} m; N = {{tieCount}}',
            focusLabel: 'Add only the selected runs',
            focusDescription: 'Read their total cable and the number of equal minimum choices.'
          }
        ],
        calculation: [
          {
            role: 'input',
            label: 'Change two cable quotes',
            template: 'w = {{ac}} m; v = {{bd}} m',
            description: 'The cyan AC quote and violet BD quote can change which tree is cheapest.'
          },
          {
            role: 'intermediate',
            label: 'Keep a minimum tree',
            template: 'T = {{selectedLabel}}',
            description:
              'The selected links join all four stations; every alternative tied minimum is retained.'
          },
          {
            role: 'output',
            label: 'Add only the selected runs',
            template: 'W = {{sumLabel}} = {{output}} m; N = {{tieCount}}',
            description: 'Read their total cable and the number of equal minimum choices.'
          }
        ],
        assumptions: [
          'Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.'
        ],
        sourceRefs: ['source:algorithm-extensions:mst'],
        conclusion:
          'Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
      }
    ],
    quantities: {
      'linear-search': {
        steps: {
          label: 'Whole comparison prefix selected by the learner',
          role: 'input',
          unit: 'checks',
          description:
            'Whole comparison prefix selected by the learner. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        target: {
          label: 'Requested part code',
          role: 'input',
          unit: '',
          description:
            'Requested part code. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        completedCost: {
          label: 'Comparison count for the complete run',
          role: 'intermediate',
          unit: 'checks',
          description:
            'Comparison count for the complete run. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        output: {
          label: 'Comparisons actually revealed in the selected prefix',
          role: 'output',
          unit: 'checks',
          description:
            'Comparisons actually revealed in the selected prefix. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        listLength: {
          label: 'Fixed number of bins in this lesson',
          role: 'reference',
          unit: '',
          description:
            'Fixed number of bins in this lesson. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        values: {
          label: 'Part code stored at ordinary bin position i',
          role: 'reference',
          unit: '',
          description:
            'Part code stored at ordinary bin position i. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        lastPosition: {
          label: 'Ordinary bin position of the last shown comparison',
          role: 'intermediate',
          unit: '',
          description:
            'Ordinary bin position of the last shown comparison. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        performed: {
          label: 'Number of revealed comparisons',
          role: 'output',
          unit: '',
          description:
            'Number of revealed comparisons. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        remaining: {
          label: 'Full-run comparisons still to reveal',
          role: 'intermediate',
          unit: '',
          description:
            'Full-run comparisons still to reveal. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        statusLabel: {
          label: 'Progress or completed-search status',
          role: 'output',
          unit: '',
          description:
            'Progress or completed-search status. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        windowLabel: {
          label: 'Remaining candidate window after the shown checks',
          role: 'intermediate',
          unit: '',
          description:
            'Remaining candidate window after the shown checks. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        windowSize: {
          label: 'Number of remaining candidate bins',
          role: 'intermediate',
          unit: '',
          description:
            'Number of remaining candidate bins. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        foundPosition: {
          label: 'Ordinary matching bin after completion, otherwise unavailable',
          role: 'output',
          unit: '',
          description:
            'Ordinary matching bin after completion, otherwise unavailable. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        lastValue: {
          label: 'Part code in the last shown comparison',
          role: 'intermediate',
          unit: '',
          description:
            'Part code in the last shown comparison. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        checkLabel: {
          label: 'Last comparison of requested and stored codes',
          role: 'intermediate',
          unit: '',
          description:
            'Last comparison of requested and stored codes. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        nextPosition: {
          label: 'Next bin to compare, when a comparison remains',
          role: 'intermediate',
          unit: '',
          description:
            'Next bin to compare, when a comparison remains. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        low: {
          label: 'First candidate bin in the remaining window',
          role: 'intermediate',
          unit: '',
          description:
            'First candidate bin in the remaining window. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        },
        high: {
          label: 'Last candidate bin in the remaining window',
          role: 'intermediate',
          unit: '',
          description:
            'Last candidate bin in the remaining window. Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.'
        }
      },
      'binary-search': {
        steps: {
          label: 'Whole comparison prefix selected by the learner',
          role: 'input',
          unit: 'checks',
          description:
            'Whole comparison prefix selected by the learner. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        target: {
          label: 'Requested part code',
          role: 'input',
          unit: '',
          description:
            'Requested part code. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        completedCost: {
          label: 'Comparison count for the complete run',
          role: 'intermediate',
          unit: 'checks',
          description:
            'Comparison count for the complete run. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        output: {
          label: 'Comparisons actually revealed in the selected prefix',
          role: 'output',
          unit: 'checks',
          description:
            'Comparisons actually revealed in the selected prefix. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        listLength: {
          label: 'Fixed number of bins in this lesson',
          role: 'reference',
          unit: '',
          description:
            'Fixed number of bins in this lesson. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        values: {
          label: 'Part code stored at ordinary bin position i',
          role: 'reference',
          unit: '',
          description:
            'Part code stored at ordinary bin position i. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        lastPosition: {
          label: 'Ordinary bin position of the last shown comparison',
          role: 'intermediate',
          unit: '',
          description:
            'Ordinary bin position of the last shown comparison. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        low: {
          label: 'First remaining candidate bin position',
          role: 'intermediate',
          unit: '',
          description:
            'First remaining candidate bin position. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        high: {
          label: 'Last remaining candidate bin position',
          role: 'intermediate',
          unit: '',
          description:
            'Last remaining candidate bin position. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        nextPosition: {
          label: 'Middle bin selected for the next comparison',
          role: 'intermediate',
          unit: '',
          description:
            'Middle bin selected for the next comparison. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        performed: {
          label: 'Number of revealed comparisons',
          role: 'output',
          unit: '',
          description:
            'Number of revealed comparisons. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        remaining: {
          label: 'Full-run comparisons still to reveal',
          role: 'intermediate',
          unit: '',
          description:
            'Full-run comparisons still to reveal. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        statusLabel: {
          label: 'Progress or completed-search status',
          role: 'output',
          unit: '',
          description:
            'Progress or completed-search status. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        windowLabel: {
          label: 'Remaining candidate window after the shown checks',
          role: 'intermediate',
          unit: '',
          description:
            'Remaining candidate window after the shown checks. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        windowSize: {
          label: 'Number of remaining candidate bins',
          role: 'intermediate',
          unit: '',
          description:
            'Number of remaining candidate bins. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        foundPosition: {
          label: 'Ordinary matching bin after completion, otherwise unavailable',
          role: 'output',
          unit: '',
          description:
            'Ordinary matching bin after completion, otherwise unavailable. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        lastValue: {
          label: 'Part code in the last shown comparison',
          role: 'intermediate',
          unit: '',
          description:
            'Part code in the last shown comparison. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        },
        checkLabel: {
          label: 'Last comparison of requested and stored codes',
          role: 'intermediate',
          unit: '',
          description:
            'Last comparison of requested and stored codes. Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.'
        }
      },
      'minimum-spanning-tree': {
        ac: {
          label: 'Quoted routed cable length for AC',
          role: 'input',
          unit: 'm',
          description:
            'Quoted routed cable length for AC. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        bd: {
          label: 'Quoted routed cable length for BD',
          role: 'input',
          unit: 'm',
          description:
            'Quoted routed cable length for BD. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        selected: {
          label: 'Chosen tree joining all four stations',
          role: 'intermediate',
          unit: '',
          description:
            'Chosen tree joining all four stations. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        edges: {
          label: 'Quoted length assigned to an edge',
          role: 'reference',
          unit: '',
          description:
            'Quoted length assigned to an edge. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        output: {
          label: 'Least total cable length across spanning trees',
          role: 'output',
          unit: 'm',
          description:
            'Least total cable length across spanning trees. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        tieCount: {
          label: 'Number of minimum trees with exactly equal total length',
          role: 'output',
          unit: '',
          description:
            'Number of minimum trees with exactly equal total length. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        sumLabel: {
          label: 'Sum of the selected cable lengths',
          role: 'intermediate',
          unit: '',
          description:
            'Sum of the selected cable lengths. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        selectedLabel: {
          label: 'Names of selected cable runs',
          role: 'intermediate',
          unit: '',
          description:
            'Names of selected cable runs. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        selectedWeights: {
          label: 'Lengths of the selected runs',
          role: 'output',
          unit: '',
          description:
            'Lengths of the selected runs. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        treeCount: {
          label: 'Sixteen spanning trees in the fixed complete graph',
          role: 'reference',
          unit: '',
          description:
            'Sixteen spanning trees in the fixed complete graph. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        },
        tieLabel: {
          label: 'Whether the minimum is unique or tied',
          role: 'output',
          unit: '',
          description:
            'Whether the minimum is unique or tied. Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.'
        }
      }
    },
    links: {
      'linear-search': {
        variableKey: 'steps',
        symbol: 'k',
        variableLabel: 'Comparisons to reveal k',
        unit: 'checks',
        effectLabel:
          'Each additional whole step reveals one check, until the first match or the end. A completed absent search checks all eight bins. The completed run cost remains separate from the shown prefix.',
        steps: [
          {
            focus: 'reference',
            label: 'Read the bin rule',
            description:
              'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.'
          },
          {
            focus: 'input',
            label: 'Reveal a whole comparison',
            description:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the actual comparison',
            description:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            focus: 'output',
            label: 'Read the shown count',
            description:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ]
      },
      'binary-search': {
        variableKey: 'steps',
        symbol: 'k',
        variableLabel: 'Comparisons to reveal k',
        unit: 'checks',
        effectLabel:
          'Sorted order makes the discarded half impossible for this target. The displayed window is the one remaining after the shown checks. An empty window certifies absence in this fixed list.',
        steps: [
          {
            focus: 'reference',
            label: 'Read the bin rule',
            description:
              'Bin numbers use ordinary positions 1 through 8. The full run stops at a match or when no candidate remains.'
          },
          {
            focus: 'input',
            label: 'Reveal a whole comparison',
            description:
              'Change the trace prefix or requested code. Fractional comparisons are not defined.'
          },
          {
            focus: 'intermediate',
            label: 'Follow the actual comparison',
            description:
              'The full-run cost describes the entire search. The shown trace contains only comparisons already revealed.'
          },
          {
            focus: 'output',
            label: 'Read the shown count',
            description:
              'The gold count is the shown prefix, while the cyan tick marks the completed run cost.'
          }
        ]
      },
      'minimum-spanning-tree': {
        variableKey: 'ac',
        symbol: 'w',
        variableLabel: 'Cable quote AC, w',
        unit: 'm',
        effectLabel:
          'Three links connect all four stations in a tree. Mint marks one minimum tree; dashed mint marks links in alternative tied minima. Every tied minimum is counted, using exact whole-metre totals.',
        steps: [
          {
            focus: 'reference',
            label: 'Read the cable plan',
            description:
              'Connect all four sensor stations without forming a loop. The available run lengths are the quantities being compared.'
          },
          {
            focus: 'input',
            label: 'Change two cable quotes',
            description: 'The cyan AC quote and violet BD quote can change which tree is cheapest.'
          },
          {
            focus: 'intermediate',
            label: 'Keep a minimum tree',
            description:
              'The selected links join all four stations; every alternative tied minimum is retained.'
          },
          {
            focus: 'output',
            label: 'Add only the selected runs',
            description: 'Read their total cable and the number of equal minimum choices.'
          }
        ]
      }
    }
  };
  for (const label of ['A', 'B', 'C', 'D']) {
    data.quantities['minimum-spanning-tree']['station' + label] = {
      label: 'Sensor station ' + label,
      role: 'reference',
      unit: '',
      description:
        'The named sensor station is one vertex of the fixed cable network. Its label identifies that station rather than a numerical matrix or product.'
    };
  }
  for (const label of ['AB', 'AC', 'AD', 'BC', 'BD', 'CD']) {
    data.quantities['minimum-spanning-tree']['edge' + label] = {
      label: 'Cable quote for run ' + label,
      role: label === 'AC' || label === 'BD' ? 'input' : 'reference',
      unit: 'm',
      description:
        'Quoted routed length for the undirected cable run between its two named stations. The drawn run and its metre label share this quantity; node positions are schematic.'
    };
  }
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
