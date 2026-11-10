/* Build-only scoped number/measurement definitions. */
(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  root.AtlasNumberInsightTerms = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const data = {
    entries: [
      {
        id: 'irrational-square-root',
        title: 'Irrational square root: a square diagonal',
        category: 'operations',
        symbols: [],
        tokens: [],
        aliases: [
          'square root of two',
          'square diagonal',
          'irrational number',
          'rational approximations'
        ],
        definition:
          'The ratio of a square’s diagonal to its side is the positive square root of two. It is irrational: no ratio of integers equals it. Consecutive finite continued-fraction convergents give useful rational approximations without making the ratio itself rational.',
        example:
          'The 7/5 estimate is 1.4 metres, shorter than the true √2-metre diagonal. A close finite fraction is still a different number.',
        readAs: 'Irrational square root: a square diagonal',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['ratio', 'square-root']
      },
      {
        id: 'golden-ratio',
        title: 'Golden ratio and similar rectangles',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['golden rectangle', 'phi', 'Fibonacci ratio', 'self-similar rectangle'],
        definition:
          'A golden rectangle has a long-to-short ratio φ greater than one such that removing a square leaves a rotated rectangle with the same ratio. The equality φ=1/(φ−1) gives φ²=φ+1 and φ=(1+√5)/2. Ratios of consecutive Fibonacci numbers supply finite rational comparisons.',
        example:
          'The long side is φ metres. Removing a one-metre square leaves width φ−1, and rotating the remainder restores aspect ratio φ.',
        readAs: 'Golden ratio and similar rectangles',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['ratio', 'square-root']
      },
      {
        id: 'circle-measurement',
        title: 'Circle measurement and pi',
        category: 'geometry',
        symbols: [],
        tokens: [],
        aliases: ['pi', 'circle area', 'disk area', 'circumference', 'circle diameter'],
        definition:
          'A circle is the planar boundary at a fixed radius from its center; the disk includes its interior. The circle constant π is circumference divided by diameter. A radius r gives diameter d=2r, circumference C=2πr and disk area A=πr².',
        example:
          'The 4-metre diameter gives circumference 4π metres and disk area 4π square metres. Equal numerical coefficients do not make length and area the same quantity.',
        readAs: 'Circle measurement and pi',
        sourceKeys: ['number_insight_circle_measurement'],
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['ratio', 'square-root']
      },
      {
        id: 'floor-ceiling',
        title: 'Floor and ceiling: whole containers',
        category: 'functions',
        symbols: [],
        tokens: [],
        aliases: [
          'floor function',
          'ceiling function',
          'round up',
          'round down',
          'container count'
        ],
        definition:
          'Floor chooses the greatest integer no larger than a real number; ceiling chooses the least integer no smaller. Dividing liquid volume v by container capacity c gives a dimensionless quotient x. Its floor counts completely full containers, and its ceiling is the least whole count with enough capacity for the entire batch.',
        example:
          'Three 4-litre containers are completely full and 1.5 litres remain. A fourth container holds the remainder, leaving 2.5 litres of unused capacity.',
        readAs: 'Floor and ceiling: whole containers',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor', 'ceiling', 'integer']
      },
      {
        id: 'irrational-number',
        title: 'Irrational number',
        category: 'operations',
        symbols: ['√2'],
        tokens: ['√2', '\\sqrt{2}'],
        mathSymbols: ['√2', '\\sqrt{2}'],
        aliases: ['irrational', 'irrational numbers'],
        definition:
          'A real number that cannot be written as p/q for integers p and nonzero q. The parity proof for √2 rules out every such ratio; a finite decimal comparison alone does not.',
        example:
          'If a coprime p/q equaled √2, p²=2q² would force both p and q even, a contradiction.',
        readAs: 'Irrational number',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['rational-number', 'real-number']
      },
      {
        id: 'number-square-side',
        title: 'Square frame side',
        category: 'geometry',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['square side'],
        definition:
          'The positive side length s sets both equal perpendicular legs of the square frame, in metres.',
        example: 'For s=2 m, the diagonal is 2√2 m.',
        readAs: 'Square frame side',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['irrational-square-root', 'length']
      },
      {
        id: 'number-square-diagonal',
        title: 'Square diagonal',
        category: 'geometry',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['square diagonal', 'geometric diagonal'],
        definition:
          'The diagonal joins opposite square corners. Its exact length is d=s√2; printed decimals are approximate.',
        example: 'The unit-square diagonal is √2 metres.',
        readAs: 'Square diagonal',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['square-root', 'irrational-number']
      },
      {
        id: 'number-rational-estimate',
        title: 'Diagonal estimate from a rational ratio',
        category: 'geometry',
        symbols: ['h'],
        tokens: ['h'],
        mathSymbols: ['h'],
        aliases: ['rational estimate', 'estimated brace'],
        definition:
          'The length estimate h=s(p/q) uses the chosen finite rational ratio p/q. It is distinct from the geometric diagonal d=s√2; an arbitrary real side s need not make h a rational number.',
        example: 'At s=1 and p/q=7/5, h=1.4 m while d≈1.4142 m.',
        readAs: 'Diagonal estimate from a rational ratio',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['rational-number', 'irrational-square-root']
      },
      {
        id: 'number-convergent-numerator',
        title: 'Convergent numerator',
        category: 'geometry',
        symbols: ['p'],
        tokens: ['p'],
        mathSymbols: ['p'],
        aliases: ['convergent numerator'],
        definition:
          'The positive integer numerator p belongs to the selected finite continued-fraction convergent p/q.',
        example: 'The ratio 7/5 has numerator 7.',
        readAs: 'Convergent numerator',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['fraction', 'rational-number']
      },
      {
        id: 'number-convergent-denominator',
        title: 'Convergent denominator',
        category: 'geometry',
        symbols: ['q'],
        tokens: ['q'],
        mathSymbols: ['q'],
        aliases: ['convergent denominator'],
        definition:
          'The positive integer denominator q belongs to the selected finite continued-fraction convergent p/q.',
        example: 'The ratio 7/5 has denominator 5.',
        readAs: 'Convergent denominator',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['fraction', 'rational-number']
      },
      {
        id: 'number-approximation-index',
        title: 'Finite approximation index',
        category: 'discrete',
        symbols: ['k'],
        tokens: ['k'],
        mathSymbols: ['k'],
        aliases: ['approximation index', 'convergent choice', 'Fibonacci index'],
        definition:
          'A whole index k chooses a finite rational approximation. The square-root lesson has eight convergents; the rectangle uses Fibonacci indices 2 through 12. This count is not physical time.',
        example: 'For √2, k=3 chooses 7/5. For the rectangle, k=5 chooses F(6)/F(5)=8/5.',
        readAs: 'Finite approximation index',
        sourceKeys: ['number_insight_irrational_square_root', 'number_insight_golden_ratio'],
        grammarCards: ['irrational-square-root', 'golden-ratio'],
        formulaCards: ['irrational-square-root', 'golden-ratio'],
        relatedIds: ['iteration-index'],
        notationKinds: ['identifier']
      },
      {
        id: 'number-approximation-index-unit',
        title: 'Approximation choice count unit',
        category: 'units',
        symbols: ['choice', 'index'],
        tokens: ['choice', 'index'],
        mathSymbols: ['choice', 'index'],
        aliases: ['approximation choice unit', 'approximation index unit'],
        definition:
          'The words choice and index label a position in the finite approximation list. They count selections rather than measuring physical time or length; the mathematical variable for that position is k.',
        example: 'The third choice is the ratio 7/5; the whole index k is three.',
        readAs: 'Approximation choice or index count',
        sourceKeys: ['number_insight_irrational_square_root', 'number_insight_golden_ratio'],
        grammarCards: ['irrational-square-root', 'golden-ratio'],
        formulaCards: ['irrational-square-root', 'golden-ratio'],
        relatedIds: ['number-approximation-index', 'dimensionless'],
        notationKinds: ['unit']
      },
      {
        id: 'number-signed-length-error',
        title: 'Signed diagonal error',
        category: 'geometry',
        symbols: ['Δ'],
        tokens: ['Δ'],
        mathSymbols: ['Δ'],
        aliases: ['signed length error', 'estimate error'],
        definition:
          'The signed error Δ=h−d is the length estimated using a rational ratio minus the geometric length, in metres. A negative reading means the estimate is short.',
        example: 'At side 1 metre and ratio 7/5, Δ≈−0.014214 m.',
        readAs: 'Signed diagonal error',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['subtraction', 'irrational-square-root']
      },
      {
        id: 'continued-fraction-convergent',
        title: 'Continued-fraction convergent',
        category: 'operations',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['continued fraction', 'convergent', 'convergents'],
        definition:
          'A rational number obtained by stopping a continued fraction after finitely many terms. The first eight shown for √2=[1;2,2,…] are 1/1, 3/2, 7/5, 17/12, 41/29, 99/70, 239/169 and 577/408.',
        example: 'The third choice is 7/5=1+1/(2+1/2).',
        readAs: 'Continued-fraction convergent',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['rational-number', 'irrational-number']
      },
      {
        id: 'parity-argument',
        title: 'Parity contradiction',
        category: 'discrete',
        symbols: [],
        tokens: [],
        mathSymbols: [],
        aliases: ['parity', 'parity proof', 'coprime'],
        definition:
          'A proof that distinguishes even and odd integers. In the √2 proof, an even square forces an even base; the resulting common factor two contradicts a reduced fraction.',
        example:
          'An odd integer 2t+1 has odd square 4t²+4t+1, so an even square cannot have an odd base.',
        readAs: 'Parity contradiction',
        sourceKeys: ['number_insight_irrational_square_root'],
        grammarCards: ['irrational-square-root'],
        formulaCards: ['irrational-square-root'],
        relatedIds: ['integer', 'proof']
      },
      {
        id: 'number-golden-constant',
        title: 'Golden ratio phi',
        category: 'geometry',
        symbols: ['φ'],
        tokens: ['φ', '\\phi', '\\varphi'],
        mathSymbols: ['φ', '\\phi', '\\varphi'],
        aliases: ['golden ratio', 'golden constant'],
        definition:
          'The unique real root greater than one of φ²=φ+1. Equivalently φ=(1+√5)/2. It makes a rectangle similar to its rotated remainder after a square is removed.',
        example: 'φ≈1.618034, while 8/5=1.6 is a finite rational approximation.',
        readAs: 'Golden ratio phi',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio', 'quadratic-equation']
      },
      {
        id: 'number-golden-short-side',
        title: 'Golden panel short side',
        category: 'geometry',
        symbols: ['s'],
        tokens: ['s'],
        mathSymbols: ['s'],
        aliases: ['short panel side'],
        definition:
          'The short side s of the golden rectangular panel is measured in metres. It is also the side of the square removed.',
        example: 'For s=1 m, the long side is φ metres.',
        readAs: 'Golden panel short side',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio']
      },
      {
        id: 'number-golden-long-side',
        title: 'Golden panel long side',
        category: 'geometry',
        symbols: ['L'],
        tokens: ['L'],
        mathSymbols: ['L'],
        aliases: ['long panel side'],
        definition:
          'The long side L=φs has metre units. Its ratio to the short side is the golden ratio. It is distinct from the litre unit also written L.',
        example: 'For s=2 m, L=2φ m≈3.2361 m.',
        readAs: 'Golden panel long side',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio']
      },
      {
        id: 'number-golden-remainder',
        title: 'Golden rectangle remainder width',
        category: 'geometry',
        symbols: ['w'],
        tokens: ['w'],
        mathSymbols: ['w'],
        aliases: ['remaining strip width'],
        definition:
          'After removing the square, the remaining width is w=L−s. The rotated remainder has ratio s/w=φ.',
        example: 'When s=1 m, w=φ−1=1/φ metres.',
        readAs: 'Golden rectangle remainder width',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio']
      },
      {
        id: 'fibonacci-number',
        title: 'Fibonacci number',
        category: 'geometry',
        symbols: ['F_k', 'F_{k+1}'],
        tokens: ['F_k', 'F_{k+1}', 'F(k)', 'F(k+1)', 'F(k−1)', 'F(k-1)', 'F_{k-1}', 'F'],
        mathSymbols: ['F_k', 'F_{k+1}', 'F(k)', 'F(k+1)', 'F(k−1)', 'F(k-1)', 'F_{k-1}', 'F'],
        aliases: ['Fibonacci', 'Fibonacci numbers', 'Fibonacci ratio'],
        definition:
          'With F(1)=F(2)=1, each later Fibonacci number is the sum of the previous two. This lesson compares the consecutive ratio F(k+1)/F(k) with φ.',
        example: 'F(5)=5 and F(6)=8, so the chosen ratio is 8/5.',
        readAs: 'Fibonacci number',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio']
      },
      {
        id: 'number-golden-candidate-ratio',
        title: 'Finite Fibonacci ratio',
        category: 'geometry',
        symbols: ['q'],
        tokens: ['q'],
        mathSymbols: ['q'],
        aliases: ['finite Fibonacci ratio'],
        definition:
          'The rational candidate q=F(k+1)/F(k) compares a finite ratio of integers with φ. It is not the exact golden ratio.',
        example: 'For k=5, q=8/5=1.6.',
        readAs: 'Finite Fibonacci ratio',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['fibonacci-number', 'golden-ratio']
      },
      {
        id: 'number-golden-ratio-error',
        title: 'Signed Fibonacci ratio error',
        category: 'geometry',
        symbols: ['Δ'],
        tokens: ['Δ'],
        mathSymbols: ['Δ'],
        aliases: ['ratio error'],
        definition:
          'The dimensionless error Δ is the finite consecutive Fibonacci ratio minus φ. Its sign distinguishes overshoot from undershoot.',
        example: '8/5−φ≈−0.018034.',
        readAs: 'Signed Fibonacci ratio error',
        sourceKeys: ['number_insight_golden_ratio'],
        grammarCards: ['golden-ratio'],
        formulaCards: ['golden-ratio'],
        relatedIds: ['golden-ratio', 'subtraction']
      },
      {
        id: 'circle-radius',
        title: 'Round table radius',
        category: 'geometry',
        symbols: ['r'],
        tokens: ['r'],
        mathSymbols: ['r'],
        aliases: ['table radius'],
        definition:
          'The radius r is the center-to-boundary distance in the table’s Euclidean plane, measured in metres.',
        example: 'A radius of 2 m gives a diameter of 4 m.',
        readAs: 'Round table radius',
        sourceKeys: ['number_insight_circle_measurement'],
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['circle-measurement', 'length']
      },
      {
        id: 'circle-diameter',
        title: 'Circle diameter',
        category: 'geometry',
        symbols: ['d'],
        tokens: ['d'],
        mathSymbols: ['d'],
        aliases: ['circle diameter', 'table diameter'],
        definition: 'A diameter crosses the circle through its center and has length d=2r.',
        example: 'For r=2 m, d=4 m.',
        readAs: 'Circle diameter',
        sourceKeys: ['number_insight_circle_measurement'],
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['circle-radius', 'pi']
      },
      {
        id: 'circumference',
        title: 'Circumference',
        category: 'geometry',
        symbols: ['C'],
        tokens: ['C'],
        mathSymbols: ['C'],
        aliases: ['edge band', 'circle boundary length'],
        definition:
          'The total length around a circle boundary is its circumference C=2πr=πd. It is a length, not the disk’s area.',
        example: 'A 2-metre radius needs 4π metres of edging.',
        readAs: 'Circumference',
        sourceKeys: ['number_insight_circle_measurement'],
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['circle-diameter', 'pi']
      },
      {
        id: 'circle-disk-area',
        title: 'Disk area',
        category: 'geometry',
        symbols: ['A'],
        tokens: ['A'],
        mathSymbols: ['A'],
        aliases: ['disk', 'disk area', 'surface covering'],
        definition:
          'The planar area enclosed by the circle is A=πr², in square metres for a metre radius. The disk includes its interior; the circle is its boundary.',
        example: 'At r=2 m, the covering area is 4π m².',
        readAs: 'Disk area',
        sourceKeys: ['number_insight_circle_measurement'],
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['area', 'circle-measurement']
      },
      {
        id: 'number-batch-volume',
        title: 'Liquid batch volume',
        category: 'geometry',
        symbols: ['v'],
        tokens: ['v'],
        mathSymbols: ['v'],
        aliases: ['batch volume', 'liquid volume'],
        definition:
          'The nonnegative total liquid volume v is measured in litres. It determines how many container capacities are required.',
        example: '13.5 litres in 4-litre containers needs four containers.',
        readAs: 'Liquid batch volume',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'number-container-capacity',
        title: 'One container capacity',
        category: 'geometry',
        symbols: ['c'],
        tokens: ['c'],
        mathSymbols: ['c'],
        aliases: ['container capacity'],
        definition: 'The positive volume c held by each identical container, measured in litres.',
        example: 'With c=4 L, three full containers hold 12 L.',
        readAs: 'One container capacity',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'number-container-quotient',
        title: 'Container-capacity quotient',
        category: 'geometry',
        symbols: ['x'],
        tokens: ['x'],
        mathSymbols: ['x'],
        aliases: ['capacity quotient'],
        definition:
          'The quotient x=v/c divides litres by litres, leaving a dimensionless count of capacities. It need not be an integer.',
        example: '13.5/4=3.375 capacities.',
        readAs: 'Container-capacity quotient',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['ratio', 'floor', 'ceiling']
      },
      {
        id: 'number-full-container-count',
        title: 'Completely full containers',
        category: 'geometry',
        symbols: ['f'],
        tokens: ['f'],
        mathSymbols: ['f'],
        aliases: ['full containers'],
        definition:
          'The floor f=⌊v/c⌋ counts completely filled containers. It excludes a partially filled container.',
        example: 'At 13.5 L and 4 L each, f=3.',
        readAs: 'Completely full containers',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor', 'floor-ceiling']
      },
      {
        id: 'number-needed-container-count',
        title: 'Containers needed',
        category: 'geometry',
        symbols: ['N'],
        tokens: ['N'],
        mathSymbols: ['N'],
        aliases: ['needed containers', 'container count'],
        definition:
          'The ceiling N=⌈v/c⌉ is the least whole count with enough capacity for all liquid. At an exact quotient it equals floor.',
        example: 'At 13.5 L and 4 L each, N=4; at 12 L, N=3.',
        readAs: 'Containers needed',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['ceiling', 'floor-ceiling']
      },
      {
        id: 'number-liquid-remainder',
        title: 'Remaining liquid',
        category: 'geometry',
        symbols: ['r'],
        tokens: ['r'],
        mathSymbols: ['r'],
        aliases: ['liquid left', 'remaining liquid'],
        definition:
          'The nonnegative remainder r=v−fc is the liquid left after filling all f complete containers. It is less than one container capacity.',
        example: '13.5−3×4=1.5 L remains.',
        readAs: 'Remaining liquid',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'number-spare-capacity',
        title: 'Unused container capacity',
        category: 'geometry',
        symbols: ['u'],
        tokens: ['u'],
        mathSymbols: ['u'],
        aliases: ['spare capacity', 'unused capacity'],
        definition:
          'The spare volume u=Nc−v is the unused capacity across the containers required for the batch.',
        example: 'Four 4-litre containers holding 13.5 L have 2.5 L spare.',
        readAs: 'Unused container capacity',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'number-container-count-unit',
        title: 'Container count unit',
        category: 'units',
        symbols: ['container', 'containers'],
        tokens: ['container', 'containers'],
        mathSymbols: ['container', 'containers'],
        aliases: ['container unit'],
        definition:
          'A dimensionless count of discrete container objects. A fractional liquid capacity quotient is distinct from the whole number of containers required.',
        example: '3.375 capacities require 4 containers.',
        readAs: 'Container count unit',
        sourceKeys: ['number_insight_floor_ceiling'],
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['integer', 'floor-ceiling'],
        notationKinds: ['unit']
      },
      {
        id: 'floor',
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'ceiling',
        grammarCards: ['floor-ceiling'],
        formulaCards: ['floor-ceiling'],
        relatedIds: ['floor-ceiling']
      },
      {
        id: 'pi',
        grammarCards: ['circle-measurement'],
        formulaCards: ['circle-measurement'],
        relatedIds: ['circle-measurement']
      }
    ],
    sources: {
      number_insight_irrational_square_root: {
        title: 'Wolfram MathWorld · Pythagoras’s Constant',
        url: 'https://mathworld.wolfram.com/PythagorassConstant.html'
      },
      number_insight_golden_ratio: {
        title: 'Wolfram MathWorld · Golden Ratio',
        url: 'https://mathworld.wolfram.com/GoldenRatio.html'
      },
      number_insight_circle_measurement: {
        title: 'Wolfram MathWorld · Circle',
        url: 'https://mathworld.wolfram.com/Circle.html'
      },
      number_insight_floor_ceiling: {
        title: 'Wolfram MathWorld · Floor and Ceiling Functions',
        url: 'https://mathworld.wolfram.com/FloorFunction.html'
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
