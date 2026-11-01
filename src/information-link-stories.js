/* One binary tray/lamp model connects joint probability and information. */
(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;root.AtlasInformationLinkStories=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const freeze=value=>{if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(freeze);Object.freeze(value);}return value;};
const stories=freeze([
  {
    "id": "story:library-joint-distribution",
    "slug": "joint-distribution",
    "scene": "tray-lamp-joint-masses",
    "unit": "",
    "title": "How often are a book and the light present together?",
    "eyebrow": "The return tray · reading two variables",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the shared flip probability. The same four joint cells determine both marginal distributions."
    },
    "summary": "Follow one channel error into all four joint masses and their marginals.",
    "context": "This tray records presence rather than the earlier lesson’s full return count: it is empty or holds a book. A sensor lamp is off or on. Keep the prior chance of a book at q=1/2. The channel flips either input with probability e. Lower e and watch mass move from mismatches toward matching book/lamp pairs.",
    "question": "When e reaches 1/10, what is the chance of a book and lamp on together?",
    "variables": [
      {
        "key": "errorChance",
        "symbol": "e",
        "label": "Symmetric lamp flip probability",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "bookChance": 0.5,
      "errorChance": 0.1,
      "observed": "1"
    },
    "timeline": {
      "key": "errorChance",
      "from": 0.5,
      "to": 0.1,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the pair of variables visible",
        "body": "X records book presence and Y the lamp. Their four joint cells account for total probability {{massTotal}}.",
        "formula": "p₀₀+p₀₁+p₁₀+p₁₁={{massTotal}}",
        "focusLabel": "The row and column describe different variables",
        "focusDescription": "An empty tray with its lamp on is a different pair from a book with its lamp off."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Set the channel’s flip chance",
        "body": "The error probability e is {{errorChance}} for both book states. The prior chance of a book stays {{bookChance}}.",
        "formula": "q={{bookChance}}; e={{errorChance}}",
        "focusLabel": "One shared error changes both rows",
        "focusDescription": "The lamp can flip either input; changing e moves joint probability without changing the book prior."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Multiply within each pair",
        "body": "A book and lamp on receives {{p11}}. A book with lamp off receives {{p10}}.",
        "formula": "p₁₁=q(1−e)={{p11}}; p₁₀=qe={{p10}}",
        "focusLabel": "The book row follows the same prior",
        "focusDescription": "Its two cells retain a total book probability of one half."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Read the joint event",
        "body": "The chance of a book and lamp on together is {{output}}. Adding the full on column instead gives {{py1}}.",
        "formula": "P(X=1,Y=1)={{output}}; P(Y=1)={{py1}}",
        "focusLabel": "A cell differs from a column total",
        "focusDescription": "The highlighted joint event is one part of the lamp-on marginal."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set shared error",
        "template": "e={{errorChance}}",
        "description": "Both channel rows use the same flip probability."
      },
      {
        "role": "intermediate",
        "label": "Multiply the pair",
        "template": "p₁₁=q(1−e)={{p11}}",
        "description": "A prior book chance is multiplied by the probability that its lamp stays on."
      },
      {
        "role": "output",
        "label": "Read joint chance",
        "template": "P(X=1,Y=1)={{output}}",
        "description": "This is the book/on cell, not a normalized lamp column."
      }
    ],
    "conclusion": "At q=1/2 and e=1/10, the four masses are 9/20, 1/20, 1/20 and 9/20. A book and lamp on together has probability 9/20=0.45; lamp on alone has probability 1/2.",
    "assumptions": [
      "The tray has two states, empty or book; the lamp has two states, off or on.",
      "The story fixes q=1/2 and changes the same flip probability in both channel rows."
    ],
    "sourceRefs": [
      "source:washington:joint-conditional"
    ]
  },
  {
    "id": "story:library-conditional-entropy",
    "slug": "conditional-entropy",
    "scene": "tray-lamp-remaining-uncertainty",
    "unit": "bits",
    "title": "How much uncertainty is left after the light is read?",
    "eyebrow": "The return tray · remaining uncertainty",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the flip probability. Keep the selected lamp slice separate from the probability-weighted average over both lamp values."
    },
    "summary": "Normalize each possible lamp column, then average the uncertainty left about the book.",
    "context": "This tray records presence rather than the earlier lesson’s full return count: it is empty or holds a book. A sensor lamp is off or on. Keep the prior chance of a book at q=1/2. The channel flips either input with probability e. The librarian will read the lamp before checking the tray. As e falls, each lamp value becomes more useful for predicting book presence.",
    "question": "At e=1/10, what is the average remaining uncertainty about the book?",
    "variables": [
      {
        "key": "errorChance",
        "symbol": "e",
        "label": "Symmetric lamp flip probability",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "bookChance": 0.5,
      "errorChance": 0.1,
      "observed": "1"
    },
    "timeline": {
      "key": "errorChance",
      "from": 0.5,
      "to": 0.1,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Start with the prior uncertainty",
        "body": "Before the lamp is read, book presence has entropy {{hx}} bits. This target uses a balanced prior.",
        "formula": "H(X)={{hx}} bits",
        "focusLabel": "The prior is a reference, not the selected posterior",
        "focusDescription": "It supplies the uncertainty available before any lamp observation."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Change the same error probability",
        "body": "The lamp flips either book state with probability {{errorChance}}. Its selected on-column total is {{observationProbability}}.",
        "formula": "e={{errorChance}}; P(Y=1)={{observationProbability}}",
        "focusLabel": "The changed channel moves the selected column",
        "focusDescription": "Both joint cells in that lamp column remain tied to the same error input."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Normalize and read each slice",
        "body": "For the selected lamp, the book chance is {{posteriorLabel}} and its remaining entropy is {{selectedEntropyLabel}}.",
        "formula": "P(X=1|Y=1)={{posteriorLabel}}; H(X|Y=1)={{selectedEntropyLabel}}",
        "focusLabel": "A conditional reading uses one positive column",
        "focusDescription": "The selected entropy is one slice; the global conditional entropy must still average both possible lamp values."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Weight both possible lamp readings",
        "body": "The off and on contributions are {{given0Contribution}} and {{given1Contribution}} bits. Their sum is {{output}} bits.",
        "formula": "H(X|Y)={{given0Contribution}}+{{given1Contribution}}≈{{output}} bits",
        "focusLabel": "The primary result is an average over observations",
        "focusDescription": "A zero-probability lamp column would be omitted rather than assigned a conditional distribution."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Set shared error",
        "template": "e={{errorChance}}",
        "description": "The book prior stays at one half."
      },
      {
        "role": "intermediate",
        "label": "Weight the slices",
        "template": "{{given0Contribution}}+{{given1Contribution}} bits",
        "description": "Each defined slice entropy is multiplied by its lamp marginal."
      },
      {
        "role": "output",
        "label": "Read averaged uncertainty",
        "template": "H(X|Y)≈{{output}} bits",
        "description": "This averaged quantity is distinct from one inspected observation."
      }
    ],
    "conclusion": "At e=1/10 and q=1/2, both lamp marginals are 1/2 and each conditional book distribution has probabilities 1/10 and 9/10. The average remaining entropy is −(1/10)log₂(1/10)−(9/10)log₂(9/10)≈0.468996 bits.",
    "assumptions": [
      "The tray has two states, empty or book; the lamp has two states, off or on.",
      "The story fixes q=1/2 and changes the same flip probability in both channel rows."
    ],
    "sourceRefs": [
      "source:mit:conditional-information",
      "source:washington:joint-conditional",
      "source:mit:entropy-units"
    ]
  },
  {
    "id": "story:library-mutual-information",
    "slug": "mutual-information",
    "scene": "tray-lamp-information-split",
    "unit": "bits",
    "title": "How much does the light tell us about the book?",
    "eyebrow": "The return tray · shared information",
    "presentation": {
      "compact": true,
      "controlHint": "Drag the flip probability. The prior-entropy bar splits into information and average remaining uncertainty on one bits scale."
    },
    "summary": "Follow one channel into the information learned and the average uncertainty left.",
    "context": "This tray records presence rather than the earlier lesson’s full return count: it is empty or holds a book. A sensor lamp is off or on. Keep the prior chance of a book at q=1/2. The channel flips either input with probability e. Compare the uncertainty before and after reading the lamp. The gap is mutual information: a property of the whole joint distribution, not just one selected lamp reading.",
    "question": "At e=1/10, how much of the prior book uncertainty is shared with the lamp?",
    "variables": [
      {
        "key": "errorChance",
        "symbol": "e",
        "label": "Symmetric lamp flip probability",
        "unit": "",
        "min": 0,
        "max": 1,
        "step": 0.01
      }
    ],
    "parameters": {
      "bookChance": 0.5,
      "errorChance": 0.1,
      "observed": "1"
    },
    "timeline": {
      "key": "errorChance",
      "from": 0.5,
      "to": 0.1,
      "durationMs": 16000
    },
    "steps": [
      {
        "id": "reference",
        "from": 0.0,
        "to": 0.25,
        "focus": "reference",
        "title": "Keep the target’s ceiling visible",
        "body": "The prior uncertainty of book presence is {{hx}} bits. Information about this target cannot exceed that amount.",
        "formula": "H(X)={{hx}} bits",
        "focusLabel": "The prior entropy sets the available total",
        "focusDescription": "The fixed bits scale stays readable as the two parts change."
      },
      {
        "id": "input",
        "from": 0.25,
        "to": 0.5,
        "focus": "input",
        "title": "Tune the observation channel",
        "body": "The shared flip probability is {{errorChance}}. The lamp is selected as {{observationLabel}} for inspection.",
        "formula": "e={{errorChance}}",
        "focusLabel": "Only the channel probabilities affect the global split",
        "focusDescription": "Changing the inspected lamp selection does not change the complete joint distribution."
      },
      {
        "id": "calculate",
        "from": 0.5,
        "to": 0.75,
        "focus": "intermediate",
        "title": "Read what remains after observation",
        "body": "Average remaining uncertainty is {{hxGivenY}} bits. This average uses both lamp values with their probabilities.",
        "formula": "H(X|Y)≈{{hxGivenY}} bits",
        "focusLabel": "The remaining part uses an averaged conditional entropy",
        "focusDescription": "One surprising selected observation is not substituted for the weighted average."
      },
      {
        "id": "solve",
        "from": 0.75,
        "to": 1.0,
        "focus": "output",
        "title": "Take the information difference",
        "body": "Prior uncertainty {{hx}} minus average remaining uncertainty {{hxGivenY}} gives {{output}} bits of mutual information.",
        "formula": "I(X;Y)=H(X)−H(X|Y)≈{{output}} bits",
        "focusLabel": "The two pieces add to the prior total",
        "focusDescription": "At a consistently inverted channel the lamp can still determine the book, so mismatch alone does not measure information."
      }
    ],
    "calculation": [
      {
        "role": "input",
        "label": "Keep prior uncertainty",
        "template": "H(X)={{hx}} bits",
        "description": "A balanced binary target begins with one bit."
      },
      {
        "role": "intermediate",
        "label": "Read what remains",
        "template": "H(X|Y)≈{{hxGivenY}} bits",
        "description": "This is the average after observing the lamp."
      },
      {
        "role": "output",
        "label": "Subtract the remaining part",
        "template": "I(X;Y)≈{{output}} bits",
        "description": "Mutual information is the nonnegative difference for this joint distribution."
      }
    ],
    "conclusion": "At q=1/2 and e=1/10, the lamp shares 1−H(X|Y)≈0.531004 bits with the book. That information and the approximately 0.468996 remaining bits add to the prior one bit.",
    "assumptions": [
      "The tray has two states, empty or book; the lamp has two states, off or on.",
      "The story fixes q=1/2 and changes the same flip probability in both channel rows."
    ],
    "sourceRefs": [
      "source:mit:conditional-information",
      "source:washington:joint-conditional",
      "source:mit:entropy-units"
    ]
  }
]);
const effects=freeze({"joint-distribution": "Joint mass at book/on", "conditional-entropy": "Average remaining book uncertainty", "mutual-information": "Shared book/lamp information"});
const quantities=freeze({
  "joint-distribution": {
    "bookChance": {
      "label": "Prior book probability",
      "role": "reference",
      "unit": "",
      "description": "q, the fixed story prior for book presence."
    },
    "errorChance": {
      "label": "Shared lamp flip probability",
      "role": "input",
      "unit": "",
      "description": "e, the same channel error probability in both input rows."
    },
    "observed": {
      "label": "Selected lamp value",
      "role": "reference",
      "unit": "",
      "description": "The lamp state inspected without changing the joint law."
    },
    "massTotal": {
      "label": "Total joint probability",
      "role": "reference",
      "unit": "",
      "description": "All four book/lamp joint masses add to one."
    },
    "observationProbability": {
      "label": "Selected lamp marginal",
      "role": "reference",
      "unit": "",
      "description": "The total probability of the selected lamp column."
    },
    "observationLabel": {
      "label": "Selected lamp reading",
      "role": "reference",
      "unit": "",
      "description": "The inspected lamp state, on or off."
    },
    "posteriorLabel": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "The positive column’s normalized book probability; an impossible observation has no posterior."
    },
    "posteriorBookChance": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "A conditional probability only when the selected lamp marginal is positive."
    },
    "conditionalStatus": {
      "label": "Selected conditional status",
      "role": "reference",
      "unit": "",
      "description": "Indicates whether the inspected lamp column can be normalized."
    },
    "selectedEntropyLabel": {
      "label": "Uncertainty in the selected lamp slice",
      "role": "intermediate",
      "unit": "bits",
      "description": "Entropy after one selected positive-probability lamp value; undefined for an impossible observation."
    },
    "selectedEntropy": {
      "label": "Selected-slice entropy",
      "role": "intermediate",
      "unit": "bits",
      "description": "The conditional entropy for one selected lamp value, not the average over Y."
    },
    "hx": {
      "label": "Prior book uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the book-presence marginal before reading the lamp."
    },
    "hy": {
      "label": "Lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the complete lamp marginal."
    },
    "hxy": {
      "label": "Joint uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the whole book/lamp pair."
    },
    "hxGivenY": {
      "label": "Averaged remaining book uncertainty",
      "role": "intermediate",
      "unit": "bits",
      "description": "Each defined lamp-slice entropy is weighted by its marginal probability."
    },
    "hyGivenX": {
      "label": "Averaged remaining lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "The channel’s binary entropy after book presence is known."
    },
    "mutualInformation": {
      "label": "Mutual information",
      "role": "reference",
      "unit": "bits",
      "description": "Prior book entropy minus averaged remaining book entropy."
    },
    "given0Contribution": {
      "label": "Lamp-off weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-off probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "given1Contribution": {
      "label": "Lamp-on weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-on probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "output": {
      "label": "Book/on joint probability",
      "role": "output",
      "unit": "",
      "description": "The declared primary reading from the same evaluated joint distribution."
    },
    "p00": {
      "label": "Joint mass for X=0, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=0, with the book index first."
    },
    "p01": {
      "label": "Joint mass for X=0, Y=1",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=1, with the book index first."
    },
    "p10": {
      "label": "Joint mass for X=1, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=1, Y=0, with the book index first."
    },
    "p11": {
      "label": "Joint mass for X=1, Y=1",
      "role": "output",
      "unit": "",
      "description": "The probability of the pair X=1, Y=1, with the book index first."
    },
    "px0": {
      "label": "Empty-tray marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "px1": {
      "label": "Book-presence marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py0": {
      "label": "Lamp-off marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py1": {
      "label": "Lamp-on marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    }
  },
  "conditional-entropy": {
    "bookChance": {
      "label": "Prior book probability",
      "role": "reference",
      "unit": "",
      "description": "q, the fixed story prior for book presence."
    },
    "errorChance": {
      "label": "Shared lamp flip probability",
      "role": "input",
      "unit": "",
      "description": "e, the same channel error probability in both input rows."
    },
    "observed": {
      "label": "Selected lamp value",
      "role": "reference",
      "unit": "",
      "description": "The lamp state inspected without changing the joint law."
    },
    "massTotal": {
      "label": "Total joint probability",
      "role": "reference",
      "unit": "",
      "description": "All four book/lamp joint masses add to one."
    },
    "observationProbability": {
      "label": "Selected lamp marginal",
      "role": "reference",
      "unit": "",
      "description": "The total probability of the selected lamp column."
    },
    "observationLabel": {
      "label": "Selected lamp reading",
      "role": "reference",
      "unit": "",
      "description": "The inspected lamp state, on or off."
    },
    "posteriorLabel": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "The positive column’s normalized book probability; an impossible observation has no posterior."
    },
    "posteriorBookChance": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "A conditional probability only when the selected lamp marginal is positive."
    },
    "conditionalStatus": {
      "label": "Selected conditional status",
      "role": "reference",
      "unit": "",
      "description": "Indicates whether the inspected lamp column can be normalized."
    },
    "selectedEntropyLabel": {
      "label": "Uncertainty in the selected lamp slice",
      "role": "intermediate",
      "unit": "bits",
      "description": "Entropy after one selected positive-probability lamp value; undefined for an impossible observation."
    },
    "selectedEntropy": {
      "label": "Selected-slice entropy",
      "role": "intermediate",
      "unit": "bits",
      "description": "The conditional entropy for one selected lamp value, not the average over Y."
    },
    "hx": {
      "label": "Prior book uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the book-presence marginal before reading the lamp."
    },
    "hy": {
      "label": "Lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the complete lamp marginal."
    },
    "hxy": {
      "label": "Joint uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the whole book/lamp pair."
    },
    "hxGivenY": {
      "label": "Averaged remaining book uncertainty",
      "role": "output",
      "unit": "bits",
      "description": "Each defined lamp-slice entropy is weighted by its marginal probability."
    },
    "hyGivenX": {
      "label": "Averaged remaining lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "The channel’s binary entropy after book presence is known."
    },
    "mutualInformation": {
      "label": "Mutual information",
      "role": "reference",
      "unit": "bits",
      "description": "Prior book entropy minus averaged remaining book entropy."
    },
    "given0Contribution": {
      "label": "Lamp-off weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-off probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "given1Contribution": {
      "label": "Lamp-on weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-on probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "output": {
      "label": "Averaged conditional entropy",
      "role": "output",
      "unit": "bits",
      "description": "The declared primary reading from the same evaluated joint distribution."
    },
    "p00": {
      "label": "Joint mass for X=0, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=0, with the book index first."
    },
    "p01": {
      "label": "Joint mass for X=0, Y=1",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=1, with the book index first."
    },
    "p10": {
      "label": "Joint mass for X=1, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=1, Y=0, with the book index first."
    },
    "p11": {
      "label": "Joint mass for X=1, Y=1",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=1, Y=1, with the book index first."
    },
    "px0": {
      "label": "Empty-tray marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "px1": {
      "label": "Book-presence marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py0": {
      "label": "Lamp-off marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py1": {
      "label": "Lamp-on marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    }
  },
  "mutual-information": {
    "bookChance": {
      "label": "Prior book probability",
      "role": "reference",
      "unit": "",
      "description": "q, the fixed story prior for book presence."
    },
    "errorChance": {
      "label": "Shared lamp flip probability",
      "role": "input",
      "unit": "",
      "description": "e, the same channel error probability in both input rows."
    },
    "observed": {
      "label": "Selected lamp value",
      "role": "reference",
      "unit": "",
      "description": "The lamp state inspected without changing the joint law."
    },
    "massTotal": {
      "label": "Total joint probability",
      "role": "reference",
      "unit": "",
      "description": "All four book/lamp joint masses add to one."
    },
    "observationProbability": {
      "label": "Selected lamp marginal",
      "role": "reference",
      "unit": "",
      "description": "The total probability of the selected lamp column."
    },
    "observationLabel": {
      "label": "Selected lamp reading",
      "role": "reference",
      "unit": "",
      "description": "The inspected lamp state, on or off."
    },
    "posteriorLabel": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "The positive column’s normalized book probability; an impossible observation has no posterior."
    },
    "posteriorBookChance": {
      "label": "Book chance given the selected lamp",
      "role": "intermediate",
      "unit": "",
      "description": "A conditional probability only when the selected lamp marginal is positive."
    },
    "conditionalStatus": {
      "label": "Selected conditional status",
      "role": "reference",
      "unit": "",
      "description": "Indicates whether the inspected lamp column can be normalized."
    },
    "selectedEntropyLabel": {
      "label": "Uncertainty in the selected lamp slice",
      "role": "intermediate",
      "unit": "bits",
      "description": "Entropy after one selected positive-probability lamp value; undefined for an impossible observation."
    },
    "selectedEntropy": {
      "label": "Selected-slice entropy",
      "role": "intermediate",
      "unit": "bits",
      "description": "The conditional entropy for one selected lamp value, not the average over Y."
    },
    "hx": {
      "label": "Prior book uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the book-presence marginal before reading the lamp."
    },
    "hy": {
      "label": "Lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the complete lamp marginal."
    },
    "hxy": {
      "label": "Joint uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "Entropy of the whole book/lamp pair."
    },
    "hxGivenY": {
      "label": "Averaged remaining book uncertainty",
      "role": "intermediate",
      "unit": "bits",
      "description": "Each defined lamp-slice entropy is weighted by its marginal probability."
    },
    "hyGivenX": {
      "label": "Averaged remaining lamp uncertainty",
      "role": "reference",
      "unit": "bits",
      "description": "The channel’s binary entropy after book presence is known."
    },
    "mutualInformation": {
      "label": "Mutual information",
      "role": "output",
      "unit": "bits",
      "description": "Prior book entropy minus averaged remaining book entropy."
    },
    "given0Contribution": {
      "label": "Lamp-off weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-off probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "given1Contribution": {
      "label": "Lamp-on weighted entropy contribution",
      "role": "intermediate",
      "unit": "bits",
      "description": "Lamp-on probability times its defined slice entropy; omitted at zero lamp probability."
    },
    "output": {
      "label": "Mutual information",
      "role": "output",
      "unit": "bits",
      "description": "The declared primary reading from the same evaluated joint distribution."
    },
    "p00": {
      "label": "Joint mass for X=0, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=0, with the book index first."
    },
    "p01": {
      "label": "Joint mass for X=0, Y=1",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=0, Y=1, with the book index first."
    },
    "p10": {
      "label": "Joint mass for X=1, Y=0",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=1, Y=0, with the book index first."
    },
    "p11": {
      "label": "Joint mass for X=1, Y=1",
      "role": "intermediate",
      "unit": "",
      "description": "The probability of the pair X=1, Y=1, with the book index first."
    },
    "px0": {
      "label": "Empty-tray marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "px1": {
      "label": "Book-presence marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py0": {
      "label": "Lamp-off marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    },
    "py1": {
      "label": "Lamp-on marginal",
      "role": "reference",
      "unit": "",
      "description": "The matching row or column sum of the same joint cells."
    }
  }
});
const links=freeze(Object.fromEntries(stories.map(story=>{const v=story.variables[0];return[story.slug,{variableKey:v.key,symbol:v.symbol,variableLabel:v.label,unit:v.unit,effectLabel:effects[story.slug],steps:story.steps.map(step=>({focus:step.focus,label:step.focusLabel,description:step.focusDescription}))}];})));
return Object.freeze({all:()=>stories.slice(),forSlug:slug=>stories.find(story=>story.slug===slug)||null,find:id=>stories.find(story=>story.id===id)||null,linksFor:slug=>typeof slug==='string'&&Object.hasOwn(links,slug)?links[slug]:null,quantityFor:(slug,key)=>typeof slug==='string'&&typeof key==='string'&&Object.hasOwn(quantities,slug)&&Object.hasOwn(quantities[slug],key)?quantities[slug][key]:null});
});
