/* Authored bounded algorithm teaching data; no clocks or private storage. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasAlgorithmExtensionTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'linear-search',
        title: 'Linear search, one check at a time',
        category: 'computation',
        symbols: [],
        tokens: [],
        definition:
          'Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity. The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.',
        example: 'Cₖ = min(3,5) = 3',
        readAs: 'Linear search, one check at a time',
        aliases: ['linear search'],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search']
      },
      {
        id: 'linear-search-steps',
        title: 'Whole comparison prefix selected by the learner',
        category: 'card-notation',
        symbols: ['k'],
        tokens: ['k'],
        definition:
          'Whole comparison prefix selected by the learner. The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.',
        example: 'k is defined in this card.',
        readAs: 'Whole comparison prefix selected by the learner',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-target',
        title: 'Requested part code',
        category: 'card-notation',
        symbols: ['t'],
        tokens: ['t'],
        definition:
          'Requested part code. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 't is defined in this card.',
        readAs: 'Requested part code',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-completedCost',
        title: 'Comparison count for the complete run',
        category: 'card-notation',
        symbols: ['C'],
        tokens: ['C'],
        definition:
          'Comparison count for the complete run. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'C is defined in this card.',
        readAs: 'Comparison count for the complete run',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-output',
        title: 'Comparisons actually revealed in the selected prefix',
        category: 'card-notation',
        symbols: ['Cₖ', 'C_k'],
        tokens: ['Cₖ', 'C_k'],
        definition:
          'Comparisons actually revealed in the selected prefix. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'Cₖ is defined in this card.',
        readAs: 'Comparisons actually revealed in the selected prefix',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-listLength',
        title: 'Fixed number of bins in this lesson',
        category: 'card-notation',
        symbols: ['n'],
        tokens: ['n'],
        definition:
          'Fixed number of bins in this lesson. The fixed eight-bin list contains the even codes from 2 to 16. Targets and trace steps are whole numbers. One comparison means one three-way comparison of the requested code with a bin value; other machine work and wall-clock time are not counted.',
        example: 'n is defined in this card.',
        readAs: 'Fixed number of bins in this lesson',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-values',
        title: 'Part code stored at ordinary bin position i',
        category: 'card-notation',
        symbols: ['aᵢ', 'a_i'],
        tokens: ['aᵢ', 'a_i'],
        definition:
          'Part code stored at ordinary bin position i. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'aᵢ is defined in this card.',
        readAs: 'Part code stored at ordinary bin position i',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'linear-search-lastPosition',
        title: 'Ordinary bin position of the last shown comparison',
        category: 'card-notation',
        symbols: ['i'],
        tokens: ['i'],
        definition:
          'Ordinary bin position of the last shown comparison. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'i is defined in this card.',
        readAs: 'Ordinary bin position of the last shown comparison',
        aliases: [],
        sourceKeys: ['algorithm_linear'],
        grammarCards: ['linear-search'],
        formulaCards: ['linear-search'],
        relatedIds: ['linear-search']
      },
      {
        id: 'binary-search',
        title: 'Binary search and the remaining window',
        category: 'computation',
        symbols: [],
        tokens: [],
        definition:
          'Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'Cₖ = min(3,5) = 3',
        readAs: 'Binary search and the remaining window',
        aliases: ['binary search'],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search']
      },
      {
        id: 'binary-search-steps',
        title: 'Whole comparison prefix selected by the learner',
        category: 'card-notation',
        symbols: ['k'],
        tokens: ['k'],
        definition:
          'Whole comparison prefix selected by the learner. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'k is defined in this card.',
        readAs: 'Whole comparison prefix selected by the learner',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-target',
        title: 'Requested part code',
        category: 'card-notation',
        symbols: ['t'],
        tokens: ['t'],
        definition:
          'Requested part code. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 't is defined in this card.',
        readAs: 'Requested part code',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-completedCost',
        title: 'Comparison count for the complete run',
        category: 'card-notation',
        symbols: ['C'],
        tokens: ['C'],
        definition:
          'Comparison count for the complete run. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'C is defined in this card.',
        readAs: 'Comparison count for the complete run',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-output',
        title: 'Comparisons actually revealed in the selected prefix',
        category: 'card-notation',
        symbols: ['Cₖ', 'C_k'],
        tokens: ['Cₖ', 'C_k'],
        definition:
          'Comparisons actually revealed in the selected prefix. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'Cₖ is defined in this card.',
        readAs: 'Comparisons actually revealed in the selected prefix',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-listLength',
        title: 'Fixed number of bins in this lesson',
        category: 'card-notation',
        symbols: ['n'],
        tokens: ['n'],
        definition:
          'Fixed number of bins in this lesson. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'n is defined in this card.',
        readAs: 'Fixed number of bins in this lesson',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-values',
        title: 'Part code stored at ordinary bin position i',
        category: 'card-notation',
        symbols: ['aᵢ', 'a_i'],
        tokens: ['aᵢ', 'a_i'],
        definition:
          'Part code stored at ordinary bin position i. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'aᵢ is defined in this card.',
        readAs: 'Part code stored at ordinary bin position i',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-lastPosition',
        title: 'Ordinary bin position of the last shown comparison',
        category: 'card-notation',
        symbols: ['i'],
        tokens: ['i'],
        definition:
          'Ordinary bin position of the last shown comparison. Build a complete search trace for the chosen target, then reveal only its first k comparisons. The shown count is the smaller of k and the full trace length; the full-run cost is a separate quantity.',
        example: 'i is defined in this card.',
        readAs: 'Ordinary bin position of the last shown comparison',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-low',
        title: 'First remaining candidate bin position',
        category: 'card-notation',
        symbols: ['ℓ', 'ell', 'l'],
        tokens: ['ℓ', 'ell', 'l'],
        definition:
          'First remaining candidate bin position. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'ℓ is defined in this card.',
        readAs: 'First remaining candidate bin position',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search'],
        lookupAliases: ['\\ell'],
        mathSymbols: ['ℓ', '\\ell']
      },
      {
        id: 'binary-search-high',
        title: 'Last remaining candidate bin position',
        category: 'card-notation',
        symbols: ['h'],
        tokens: ['h'],
        definition:
          'Last remaining candidate bin position. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'h is defined in this card.',
        readAs: 'Last remaining candidate bin position',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'binary-search-nextPosition',
        title: 'Middle bin selected for the next comparison',
        category: 'card-notation',
        symbols: ['m'],
        tokens: ['m'],
        definition:
          'Middle bin selected for the next comparison. The eight distinct even codes are already sorted. Sorting cost is excluded. One step is one three-way middle-bin comparison, not the number of primitive language operators. The lower middle bin is used when a window has even size.',
        example: 'm is defined in this card.',
        readAs: 'Middle bin selected for the next comparison',
        aliases: [],
        sourceKeys: ['algorithm_binary'],
        grammarCards: ['binary-search'],
        formulaCards: ['binary-search'],
        relatedIds: ['binary-search']
      },
      {
        id: 'minimum-spanning-tree',
        title: 'Minimum spanning tree',
        category: 'computation',
        symbols: [],
        tokens: [],
        definition:
          'Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum. Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.',
        example: 'W = 2 + 2 + 3 = 7 m',
        readAs: 'Minimum spanning tree',
        aliases: ['minimum spanning tree'],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-ac',
        title: 'Quoted routed cable length for AC',
        category: 'card-notation',
        symbols: ['w'],
        tokens: ['w'],
        definition:
          'Quoted routed cable length for AC. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.',
        example: 'w is defined in this card.',
        readAs: 'Quoted routed cable length for AC',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-bd',
        title: 'Quoted routed cable length for BD',
        category: 'card-notation',
        symbols: ['v'],
        tokens: ['v'],
        definition:
          'Quoted routed cable length for BD. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.',
        example: 'v is defined in this card.',
        readAs: 'Quoted routed cable length for BD',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-selected',
        title: 'Chosen tree joining all four stations',
        category: 'card-notation',
        symbols: ['T'],
        tokens: ['T'],
        definition:
          'Chosen tree joining all four stations. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.',
        example: 'T is defined in this card.',
        readAs: 'Chosen tree joining all four stations',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-edges',
        title: 'One available cable edge',
        category: 'card-notation',
        symbols: ['e'],
        tokens: ['e'],
        definition:
          'One available cable edge. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.',
        example: 'e is defined in this card.',
        readAs: 'One available cable edge',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-edges-weight',
        title: 'Quoted length assigned to an edge',
        category: 'card-notation',
        symbols: ['wₑ', 'w_e'],
        tokens: ['wₑ', 'w_e'],
        definition:
          'Quoted length assigned to an edge. Only this connected four-station graph is implemented. The two variable cable quotes are whole metres from 1 to 8; all sums and ties are exact integers. Node layout is schematic, while edge width and labels encode routed cable length. This is a network-wide connection problem; it does not minimize each station-to-station journey.',
        example: 'wₑ is defined in this card.',
        readAs: 'Quoted length assigned to an edge',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-output',
        title: 'Total cable length for a tree',
        category: 'card-notation',
        symbols: ['W', 'W(T)'],
        tokens: ['W', 'W(T)'],
        definition:
          'For a spanning tree T, W(T) is the sum of its quoted cable lengths. Each candidate tree has its own total. The model selects a tree with the least total among all sixteen, so the displayed W is the total for that chosen minimum tree. Equal minimum totals retain their separate trees.',
        example: 'W(T) = 2 + 2 + 3 = 7 m for the selected tree.',
        readAs: 'W of T, total cable length of tree T',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-tieCount',
        title: 'Number of minimum trees with exactly equal total length',
        category: 'card-notation',
        symbols: ['N'],
        tokens: ['N'],
        definition:
          'Number of minimum trees with exactly equal total length. Evaluate the fixed graph at the two declared cable quotes. Sort links by length, add links joining different components until all stations connect, and separately enumerate the sixteen spanning trees to retain every minimum.',
        example: 'N is defined in this card.',
        readAs: 'Number of minimum trees with exactly equal total length',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'minimum-spanning-tree-station-labels',
        title: 'Sensor station and cable names',
        category: 'card-notation',
        symbols: ['A', 'B', 'C', 'D', 'AB', 'AC', 'AD', 'BC', 'BD', 'CD'],
        tokens: ['A', 'B', 'C', 'D', 'AB', 'AC', 'AD', 'BC', 'BD', 'CD'],
        definition:
          'A, B, C and D name the four stations. A pair names one undirected available cable run, not multiplication of letters.',
        example: 'AC joins station A to station C.',
        readAs: 'named stations and cable runs',
        aliases: [],
        sourceKeys: ['algorithm_mst'],
        grammarCards: ['minimum-spanning-tree'],
        formulaCards: ['minimum-spanning-tree'],
        relatedIds: ['minimum-spanning-tree']
      },
      {
        id: 'algorithm-part-code',
        title: 'Part code as an identifier',
        category: 'computation',
        symbols: [],
        tokens: [],
        definition:
          'A code is an integer label identifying a requested or stored part in the fixed inventory. Code values are compared for equality and order; their difference is not a physical distance or a measured amount of stock.',
        example: 'The requested code 10 is stored in bin 5.',
        readAs: 'part code',
        aliases: ['part code', 'part codes'],
        sourceKeys: ['algorithm_linear', 'algorithm_binary'],
        grammarCards: ['linear-search', 'binary-search'],
        formulaCards: ['linear-search', 'binary-search'],
        relatedIds: ['linear-search', 'binary-search']
      }
    ],
    sources: {
      algorithm_linear: {
        title: 'Sedgewick and Wayne · Sequential search',
        url: 'https://raw.githubusercontent.com/kevin-wayne/algs4/master/src/main/java/edu/princeton/cs/algs4/SequentialSearchST.java'
      },
      algorithm_binary: {
        title: 'Sedgewick and Wayne · Binary search in a sorted list',
        url: 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/BinarySearch.java'
      },
      algorithm_mst: {
        title: 'Sedgewick and Wayne · Minimum spanning trees',
        url: 'https://github.com/kevin-wayne/algs4/blob/master/src/main/java/edu/princeton/cs/algs4/KruskalMST.java'
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
  return data;
});
