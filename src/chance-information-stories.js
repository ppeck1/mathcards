/* One return-desk model connects mass, a planning mean and uncertainty. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasChanceInformationStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const freeze=v=>{if(v&&typeof v==='object'&&!Object.isFrozen(v)){Object.values(v).forEach(freeze);Object.freeze(v);}return v;};
const stories=freeze([
  {
    "id": "story:library-return-distribution",
    "slug": "probability-distribution",
    "scene": "return-count-probability-mass",
    "unit": "",
    "title": "Where does the remaining chance go?",
    "eyebrow": "The return desk · three possible counts",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the one-book probability. The whole strip stays at 100%; its changing pieces match the three mass bars."
    },
    "summary": "Keep a complete probability distribution in view while its middle mass changes.",
    "context": "A librarian checks a small return desk. The next check-in can bring zero, one or two books. Set q, the chance of one book. Half of the remaining chance goes to zero books and half to two. Follow that same split through the probability strip and the three bars.",
    "question": "When q reaches 1/2, what are the three probability masses and the chance of two books?",
    "variables": [
      {
        "key": "oneChance",
        "symbol": "q",
        "label": "One-book probability",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "oneChance": 0.5,
      "twoShare": 0.5
    },
    "timeline": {
      "key": "oneChance",
      "from": 0.25,
      "to": 0.5,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the possible counts in view",
        "body": "X counts the books at the next check-in: 0, 1 or 2. The three probabilities together use all the available chance.",
        "formula": "p₀+p₁+p₂ = {{massTotal}}",
        "focusLabel": "The fixed count positions stay 0, 1 and 2",
        "focusDescription": "The count positions do not slide or turn into fractional book outcomes."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Give the middle count its chance",
        "body": "The one-book probability q is {{oneChance}}. The middle bar follows this input.",
        "formula": "p₁ = q = {{p1}}",
        "focusLabel": "The input names the one-book mass",
        "focusDescription": "The same selected probability appears in the story, the formula, the strip and the middle bar."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Split the remainder",
        "body": "With r=1/2, the remaining chance is divided evenly. Zero books gets {{p0}} and two books gets {{p2}}.",
        "formula": "p₀=(1−q)(1−r)={{p0}}; p₂=(1−q)r={{p2}}",
        "focusLabel": "The two outer masses receive the remainder",
        "focusDescription": "Increasing the middle mass shortens both outer pieces while keeping total mass one."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Read the complete distribution",
        "body": "The masses are {{p0}}, {{p1}}, {{p2}}. The chance of two books is {{output}}.",
        "formula": "P(X=2) = {{output}}",
        "focusLabel": "The selected two-book mass is one part of the whole",
        "focusDescription": "The highlighted output is a probability, while the horizontal label 2 is a book count."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set one-book chance",
        "template": "q = {{oneChance}}",
        "description": "The middle count receives this probability directly."
      },
      {
        "role": "intermediate",
        "label": "Split the rest",
        "template": "p₀={{p0}}; p₁={{p1}}; p₂={{p2}}",
        "description": "With r=1/2, the outer counts split the remaining probability evenly."
      },
      {
        "role": "output",
        "label": "Read two-book chance",
        "template": "P(X=2) = {{output}}",
        "description": "This output and the two-book bar use the same evaluated mass."
      }
    ],
    "conclusion": "At q=1/2 and r=1/2, the distribution is (1/4,1/2,1/4). The chance of two books is 1/4. The three masses total one.",
    "assumptions": [
      "Only the next check-in count is modeled; the possible book counts are 0,1,2.",
      "The story fixes r=1/2 so that zero and two books split the remainder evenly."
    ],
    "sourceRefs": [
      "source:openstax:discrete-pmf"
    ]
  },
  {
    "id": "story:library-return-expected-value",
    "slug": "expected-value",
    "scene": "return-count-weighted-balance",
    "unit": "books",
    "title": "How can the desk expect 1.25 books?",
    "eyebrow": "The return desk · a planning average",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the two-book share. Watch each weighted contribution and the balance marker move together."
    },
    "summary": "Move probability toward two books and follow the weighted contributions into a fractional mean.",
    "context": "The same return desk needs a planning average. Keep the chance of one book at q=1/2. The other half is shared between zero and two books. Increasing r sends more of that remaining probability to two books and moves the balance point to the right.",
    "question": "When r reaches 3/4, what expected book count should the desk use?",
    "variables": [
      {
        "key": "twoShare",
        "symbol": "r",
        "label": "Two-book share of the remaining chance",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "oneChance": 0.5,
      "twoShare": 0.75
    },
    "timeline": {
      "key": "twoShare",
      "from": 0.25,
      "to": 0.75,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep book counts and chance separate",
        "body": "The outcome positions are 0, 1 and 2 books. The one-book mass stays at {{p1}} while the remaining half changes sides.",
        "formula": "p₁=q=1/2; p₀+p₂=1/2",
        "focusLabel": "The probability masses sit at fixed book counts",
        "focusDescription": "The positions show book values and the masses show their weights."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Move the remaining probability",
        "body": "The share r is {{twoShare}}. Two books now gets mass {{p2}}, and zero books gets {{p0}}.",
        "formula": "p₂=(1−q)r={{p2}}",
        "focusLabel": "The same share moves probability toward two books",
        "focusDescription": "This control acts on the probability left after the fixed one-book mass."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Weight each count",
        "body": "Multiply each book count by its probability. The three contributions are {{c0}}, {{c1}} and {{c2}} books.",
        "formula": "0p₀={{c0}}; 1p₁={{c1}}; 2p₂={{c2}}",
        "focusLabel": "Each contribution has units of books",
        "focusDescription": "The weighted products determine the position of the common balance marker."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Add the planning average",
        "body": "The expected count is {{mean}} books. This is a weighted mean across the model, not a fractional single return.",
        "formula": "E[X] = {{c0}}+{{c1}}+{{c2}} = {{output}} books",
        "focusLabel": "The balance point is the expected count",
        "focusDescription": "The marker may lie between the whole outcome positions because a mean need not itself occur."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set the remaining share",
        "template": "r = {{twoShare}}",
        "description": "The one-book chance remains q=1/2."
      },
      {
        "role": "intermediate",
        "label": "Weight the counts",
        "template": "0p₀={{c0}}; 1p₁={{c1}}; 2p₂={{c2}}",
        "description": "Each product combines a count and its actual probability."
      },
      {
        "role": "output",
        "label": "Add the weighted values",
        "template": "E[X] = {{mean}} books",
        "description": "The visual balance marker uses this same probability-weighted mean."
      }
    ],
    "conclusion": "At r=3/4 the masses are (1/8,1/2,3/8). Their weighted values add to 0+1/2+3/4=5/4 books. A mean of 1.25 is useful for planning even though every realized return count is whole.",
    "assumptions": [
      "The chance of one book stays fixed at q=1/2.",
      "The mean is a probability-weighted count rather than a guarantee for one check-in."
    ],
    "sourceRefs": [
      "source:openstax:discrete-pmf",
      "source:openstax:expected-value"
    ]
  },
  {
    "id": "story:library-return-entropy",
    "slug": "entropy",
    "scene": "return-count-average-information",
    "unit": "bits",
    "title": "When is the next return hardest to predict?",
    "eyebrow": "The return desk · uncertainty in bits",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the one-book probability from certainty toward an equal three-way split. The contribution shapes and the total use bits."
    },
    "summary": "Spread probability from a certain return to three equally likely counts and add the weighted information contributions.",
    "context": "The librarian first knows that exactly one book will arrive. Now spread some probability to zero and two books, sharing that remainder evenly. As the three counts become equally likely, the next count becomes harder to predict. Entropy measures this uncertainty in bits.",
    "question": "How much entropy does the model have when all three book counts are equally likely?",
    "variables": [
      {
        "key": "oneChance",
        "symbol": "q",
        "label": "One-book probability",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "oneChance": 0.3333333333333333,
      "twoShare": 0.5
    },
    "timeline": {
      "key": "oneChance",
      "from": 1,
      "to": 0.3333333333333333,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Start with a certain return",
        "body": "At q=1, only one book has positive probability. Its information is −log₂1=0 bits.",
        "formula": "Certainty: H(X)=0 bits",
        "focusLabel": "The certain result leaves no choice among positive-probability outcomes",
        "focusDescription": "Zero-probability terms contribute zero; their logarithms are not evaluated as finite numbers."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Let the other counts become possible",
        "body": "The one-book chance is {{oneChance}}. With r=1/2, zero and two books each have chance {{p0}}.",
        "formula": "p₀={{p0}}; p₁={{p1}}; p₂={{p2}}",
        "focusLabel": "The same q redistributes the three probabilities",
        "focusDescription": "Each probability is linked to its positive-outcome information and its weighted contribution."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Weight information by probability",
        "body": "For a positive mass, I(xᵢ)=−log₂pᵢ. The weighted terms are {{h0}}, {{h1}} and {{h2}} bits.",
        "formula": "H(X) = −Σ pᵢ log₂pᵢ",
        "focusLabel": "The contribution shapes show probability times information",
        "focusDescription": "A rare outcome has high information, but its contribution is also multiplied by its small probability."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Read the average uncertainty",
        "body": "The contributions add to approximately {{entropy}} bits. Equal thirds reach the maximum log₂3 bits for these three values.",
        "formula": "H(X) ≈ {{output}} bits",
        "focusLabel": "The total is uncertainty, rather than an expected book count",
        "focusDescription": "The common bits scale lets each contribution add directly into the total."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Redistribute chance",
        "template": "p₀={{p0}}; p₁={{p1}}; p₂={{p2}}",
        "description": "Keep the same return-count probability distribution in view."
      },
      {
        "role": "intermediate",
        "label": "Weight each information value",
        "template": "{{h0}} + {{h1}} + {{h2}} bits",
        "description": "Each contribution is −pᵢlog₂pᵢ, with zero contributions handled by continuity."
      },
      {
        "role": "output",
        "label": "Read average information",
        "template": "H(X) ≈ {{entropy}} bits",
        "description": "The model total is the sum of unrounded contributions; the labels are rounded for reading."
      }
    ],
    "conclusion": "At q=1/3 and r=1/2, all three masses are exactly 1/3. Each positive outcome has information log₂3 bits, so H(X)=log₂3≈1.584963 bits. This is the maximum entropy on these three outcome values.",
    "assumptions": [
      "The remainder is shared evenly with r=1/2.",
      "Base-two logarithms give information units of bits. Zero-probability contributions are defined as zero by continuity."
    ],
    "sourceRefs": [
      "source:stanford:discrete-entropy",
      "source:mit:entropy-units",
      "source:openstax:discrete-pmf"
    ]
  }
]);
const effects=freeze({
  "probability-distribution": "redistributes probability mass between the three whole book counts",
  "expected-value": "moves the weighted average along the fixed book-count scale",
  "entropy": "changes the information carried by the return-count distribution"
});
const quantities=freeze({
  "probability-distribution": {
    "oneChance": {
      "label": "One-book probability",
      "unit": "",
      "role": "input",
      "description": "q, the mass assigned directly to the one-book outcome."
    },
    "twoShare": {
      "label": "Two-book share of the remainder",
      "unit": "",
      "role": "reference",
      "description": "r, the fraction of 1−q assigned to two books."
    },
    "massTotal": {
      "label": "Total probability mass",
      "unit": "",
      "role": "reference",
      "description": "The sum of the three masses, equal to one."
    },
    "mean": {
      "label": "Expected number of books",
      "unit": "books",
      "role": "reference",
      "description": "The probability-weighted mean of the book-count values."
    },
    "entropy": {
      "label": "Average information",
      "unit": "bits",
      "role": "reference",
      "description": "Shannon entropy calculated with base-two logarithms."
    },
    "output": {
      "label": "Two-book probability",
      "unit": "",
      "role": "output",
      "description": "The primary reading for this lesson, taken from the same probability model."
    },
    "p0": {
      "label": "Probability of 0 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 0."
    },
    "c0": {
      "label": "Weighted 0-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 0 multiplied by its probability."
    },
    "h0": {
      "label": "0-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p1": {
      "label": "Probability of 1 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 1."
    },
    "c1": {
      "label": "Weighted 1-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 1 multiplied by its probability."
    },
    "h1": {
      "label": "1-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p2": {
      "label": "Probability of 2 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 2."
    },
    "c2": {
      "label": "Weighted 2-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 2 multiplied by its probability."
    },
    "h2": {
      "label": "2-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    }
  },
  "expected-value": {
    "oneChance": {
      "label": "One-book probability",
      "unit": "",
      "role": "input",
      "description": "q, the mass assigned directly to the one-book outcome."
    },
    "twoShare": {
      "label": "Two-book share of the remainder",
      "unit": "",
      "role": "input",
      "description": "r, the fraction of 1−q assigned to two books."
    },
    "massTotal": {
      "label": "Total probability mass",
      "unit": "",
      "role": "reference",
      "description": "The sum of the three masses, equal to one."
    },
    "mean": {
      "label": "Expected number of books",
      "unit": "books",
      "role": "output",
      "description": "The probability-weighted mean of the book-count values."
    },
    "entropy": {
      "label": "Average information",
      "unit": "bits",
      "role": "reference",
      "description": "Shannon entropy calculated with base-two logarithms."
    },
    "output": {
      "label": "Expected book count",
      "unit": "books",
      "role": "output",
      "description": "The primary reading for this lesson, taken from the same probability model."
    },
    "p0": {
      "label": "Probability of 0 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 0."
    },
    "c0": {
      "label": "Weighted 0-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 0 multiplied by its probability."
    },
    "h0": {
      "label": "0-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p1": {
      "label": "Probability of 1 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 1."
    },
    "c1": {
      "label": "Weighted 1-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 1 multiplied by its probability."
    },
    "h1": {
      "label": "1-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p2": {
      "label": "Probability of 2 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 2."
    },
    "c2": {
      "label": "Weighted 2-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 2 multiplied by its probability."
    },
    "h2": {
      "label": "2-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    }
  },
  "entropy": {
    "oneChance": {
      "label": "One-book probability",
      "unit": "",
      "role": "input",
      "description": "q, the mass assigned directly to the one-book outcome."
    },
    "twoShare": {
      "label": "Two-book share of the remainder",
      "unit": "",
      "role": "reference",
      "description": "r, the fraction of 1−q assigned to two books."
    },
    "massTotal": {
      "label": "Total probability mass",
      "unit": "",
      "role": "reference",
      "description": "The sum of the three masses, equal to one."
    },
    "mean": {
      "label": "Expected number of books",
      "unit": "books",
      "role": "reference",
      "description": "The probability-weighted mean of the book-count values."
    },
    "entropy": {
      "label": "Average information",
      "unit": "bits",
      "role": "output",
      "description": "Shannon entropy calculated with base-two logarithms."
    },
    "output": {
      "label": "Entropy in bits",
      "unit": "bits",
      "role": "output",
      "description": "The primary reading for this lesson, taken from the same probability model."
    },
    "p0": {
      "label": "Probability of 0 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 0."
    },
    "c0": {
      "label": "Weighted 0-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 0 multiplied by its probability."
    },
    "h0": {
      "label": "0-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p1": {
      "label": "Probability of 1 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 1."
    },
    "c1": {
      "label": "Weighted 1-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 1 multiplied by its probability."
    },
    "h1": {
      "label": "1-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    },
    "p2": {
      "label": "Probability of 2 books",
      "unit": "",
      "role": "intermediate",
      "description": "Probability mass assigned to outcome 2."
    },
    "c2": {
      "label": "Weighted 2-book contribution",
      "unit": "books",
      "role": "intermediate",
      "description": "Outcome 2 multiplied by its probability."
    },
    "h2": {
      "label": "2-book entropy contribution",
      "unit": "bits",
      "role": "intermediate",
      "description": "Probability multiplied by base-two self-information; zero at a zero mass."
    }
  }
});
const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
