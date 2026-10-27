/* Explicit quantities for the installed modules. Metadata only: no value conversion,
   evaluation, or automatic wiring. Types describe meaning; units use stable ASCII
   identifiers. Dimensionless quantities still have a type, and use unit "1".
   A host must validate the receiving model, including bounds and domain, before
   applying a linked value. A matching type and unit never imply equal ranges. */
(function(root,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  root.AtlasModulePorts=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
  'use strict';
  const port=(direction,key,label,type,unit,description)=>Object.freeze({id:direction+':'+key,label,direction,key,type,unit,description});
  const input=(...args)=>port('input',...args),output=(...args)=>port('output',...args);
  const definitions={
    relation:[
      input('threshold','Required combined length','length','cm','The inclusive lower bound for the total length of an ordered pair of independently selected strips.'),
      output('output','Qualifying ordered pair count','count','pair','The exact number of satisfying ordered pairs among the thirty-six stated choices, not a probability.'),
      output('pairCount','Qualifying ordered pairs','count','pair','The number of pairs in the current finite binary relation.')
    ],
    equivalence:[
      input('length','Panel length','length','cm','The measurement assigned to x in proposition P.'),
      input('width','Panel width','length','cm','The measurement assigned to y in proposition Q.'),
      output('output','Current left formula truth','truth-value','1','The truth value of the left formula under the selected assignment, encoded as one or zero; separate from global equivalence.'),
      output('leftTruth','Current left formula truth','truth-value','1','The current truth value of the left comparison formula.'),
      output('rightTruth','Current right formula truth','truth-value','1','The current truth value of the right comparison formula.'),
      output('equivalent','Global formula equivalence','formula-equivalence','1','Whether the two formulas agree on every one of the four Boolean assignments, separate from the current formula truth.'),
      output('mismatchCount','Mismatching truth assignments','count','assignment','How many of all four Boolean assignments make the two formulas differ.')
    ],
    inference:[
      input('length','Panel length','length','cm','The measurement assigned to x in proposition P.'),
      input('width','Panel width','length','cm','The measurement assigned to y in proposition Q.'),
      output('output','Current conclusion truth','truth-value','1','The current conclusion truth value, encoded as one or zero; separate from validity of the argument pattern.'),
      output('conclusionTruth','Current conclusion truth','truth-value','1','The conclusion truth under the selected assignment.'),
      output('validArgument','Global argument validity','argument-validity','1','Whether every assignment with all premises true has the conclusion true, separate from the current conclusion truth.'),
      output('counterexampleCount','Counterexample assignments','count','assignment','The number of all four assignments with every premise true and the conclusion false.')
    ],
    torque:[
      input('arm','Pivot-to-application distance','length','m','The distance from pivot to force application, not generally the perpendicular moment arm.'),
      input('force','Applied force magnitude','force','N','The nonnegative magnitude of the force vector in newtons.'),
      input('angle','Signed force angle','angle','deg','The angle from the pivot-to-application vector to the applied force in the fixed right-handed plane.'),
      output('output','Signed torque component','torque','N.m','The signed z component of torque about the stated pivot; the shared dimensions of energy do not make it energy.'),
      output('magnitude','Torque magnitude','torque-magnitude','N.m','The nonnegative magnitude of the torque about the pivot.'),
      output('forceX','Force along the arm','force','N','The signed force component parallel to the pivot-to-application direction.'),
      output('forceY','Perpendicular force component','force','N','The signed component perpendicular to the pivot-to-application direction.'),
      output('perpendicularForce','Perpendicular force','force','N','The signed force component that contributes to the planar torque.'),
      output('momentArm','Perpendicular moment arm','length','m','The nonnegative perpendicular distance from the pivot to the line of action of the force.')
    ],
    'logical-connectives':[
      input('length','Panel length','length','cm','The measured length used by the proposition P: the length is at least six centimetres.'),
      input('width','Panel width','length','cm','The measured width used by the proposition Q: the width is at least four centimetres.'),
      output('output','Selected statement truth','truth-value','1','A classical truth value encoded internally as one for true or zero for false, not a probability or measured amount.')
    ],
    quantifier:[
      input('threshold','Required strip length','length','cm','The lower length bound used by the predicate on the six explicitly listed strips.'),
      output('output','Selected quantified claim truth','truth-value','1','One for true and zero for false over this fixed finite domain, not a proportion of successes.'),
      output('qualifyingCount','Strips satisfying the predicate','count','item','The exact number of the six stated strips whose length meets the inclusive threshold.')
    ],
    'cross-product':[
      input('uLength','First vector length','length','m','The nonnegative length of u on the positive horizontal axis.'),
      input('vLength','Second vector length','length','m','The nonnegative length of v before its signed planar turn.'),
      input('angle','Signed turn from u to v','angle','deg','A signed angle in the fixed right-handed coordinate frame.'),
      output('output','Signed normal component','oriented-area-component','m2','The signed z component of u cross v; its sign gives orientation and its magnitude is parallelogram area.'),
      output('normalComponent','Signed z component','oriented-area-component','m2','The directed normal-area component in the fixed right-handed frame.'),
      output('area','Parallelogram area','area','m2','The nonnegative magnitude of the cross product in this planar family.')
    ],
    stability:[
      input('initialError','Initial signed alignment error','displacement','cm','The initial signed displacement from the equilibrium at zero.'),
      input('multiplier','Error multiplier per update','iteration-multiplier','1','The real multiplier of the previous signed error; it can reverse sign or amplify error.'),
      input('steps','Completed correction updates','iteration-count','step','The whole number of repeated correction updates, including zero.'),
      output('output','Current signed alignment error','displacement','cm','The signed displacement after the exact number of completed updates.'),
      output('magnitude','Current error magnitude','length','cm','The nonnegative distance from equilibrium after the completed updates.'),
      output('factorMagnitude','Multiplier magnitude','iteration-multiplier-magnitude','1','The absolute multiplier used to classify this linear rule independently of the starting displacement.')
    ],
    'conditional-probability':[
      input('eventEnd','Inked interval endpoint','length','cm','The endpoint of event A on the stipulated 100 centimetre uniform strip.'),
      input('windowEnd','Known inspection interval endpoint','length','cm','The positive endpoint of conditioning event B; zero makes the ratio undefined.'),
      output('output','Conditional probability','probability','1','The probability of event A within the positive-probability conditioning event B.'),
      output('conditionalProbability','Probability of A given B','probability','1','The overlap probability divided by the conditioning probability.'),
      output('eventProbability','Unconditional probability of A','probability','1','The inked interval length divided by the full strip length, before conditioning.'),
      output('givenProbability','Probability of conditioning event B','probability','1','The inspection interval length divided by the full 100 centimetre strip length.'),
      output('intersectionProbability','Probability of both events','probability','1','The overlap length divided by the full strip length, not by the inspection window.'),
      output('overlapLength','Overlap interval length','length','cm','The length common to the two nested intervals on the full physical strip.')
    ],
    variance:[
      input('lastLength','Last strap length','length','cm','The one changing observation among four known strap lengths in centimetres.'),
      output('output','Population variance','population-variance','cm2','The mean squared deviation of all four declared lengths, with denominator four.'),
      output('variance','Population variance','population-variance','cm2','The sum of squared deviations divided by four, in squared centimetres.'),
      output('standardDeviation','Population standard deviation','length','cm','The nonnegative square root of the population variance, in the original length unit.'),
      output('mean','Mean strap length','length','cm','The arithmetic mean of all four known strap lengths, not an inferred parameter.'),
      output('lengthSum','Total strap length','length','cm','The sum of the four declared observations before division by their count.'),
      output('sumSquaredDeviations','Squared deviation total','squared-deviation-total','cm2','The sum of squared differences from the current complete-group mean.'),
      output('count','Number of observations','count','item','The fixed complete group of four strap length observations.')
    ],
    recurrence:[
      input('initial','Starting reservoir volume','volume','L','The volume before any retention and refill rounds have been completed.'),
      input('retention','Retained fraction','retention-fraction','1','The fraction of the current volume retained before the fixed refill is added.'),
      input('addition','Refill per completed round','volume','L','The fixed volume added after retention in each actual integer round.'),
      input('rounds','Completed rounds','iteration-count','round','The whole number of retention-then-refill updates, including zero updates.'),
      output('output','Current reservoir volume','volume','L','The volume after the selected number of exact retention-then-refill rounds.'),
      output('previous','Volume before the final update','volume','L','The previous volume for a completed update; at zero rounds this remains the initial volume.'),
      output('retained','Retained part of the final update','volume','L','The retained volume in the final completed round; zero when no round occurs.'),
      output('added','Refill in the final update','volume','L','The added volume in the final completed round; zero when no round occurs.')
    ],
    set:[
      input('maxSize','Maximum accepted height','length','cm','The upper height cutoff for set A in the finite peg universe.'),
      input('minSize','Minimum accepted height','length','cm','The lower height cutoff for set B in the same universe.'),
      output('output','Result cardinality','count','item','The number of members of the selected result set; not an interval length.'),
      ...['countA','countB','unionCount','intersectionCount','differenceCount'].map(key=>output(key,key,'count','item','A finite set cardinality from the same universe.'))
    ],
    'population-sample':[
      input('lastValue','Highlighted crate weight','mass','kg','One measurement in the known twelve-crate population.'),
      input('sampleSize','Selected sample size','count','item','A whole number of distinct observations in the selected circular block.'),
      input('startIndex','First selected index','index','item','A zero-based selection index; this is not a random-sampling mechanism.'),
      output('output','Sample mean weight','mass','kg','The selected sample sum divided by its observation count.'),
      output('populationMean','Population mean weight','mass','kg','The known full population sum divided by twelve.'),
      output('sampleSum','Sample weight sum','mass','kg','The sum over the selected crate observations.'),
      output('populationSum','Population weight sum','mass','kg','The sum of all twelve crate observations.'),
      output('meanError','Sample minus population mean','mass-difference','kg','The signed difference for this known population and chosen sample; not a confidence interval.'),
      output('populationSize','Population size','count','item','The fixed number of twelve distinct observations.')
    ],
    'computational-complexity':[
      input('itemCount','Items inspected','count','item','A whole number of items inspected once each by the declared full scan.'),
      input('costPerItem','Modeled time per inspection','unit-cost','ms/item','The stipulated constant time cost of one inspection; not a measured benchmark.'),
      output('output','Modeled scan time','duration','ms','The product of item count and constant per-item cost.'),
      output('operationCount','Inspections performed','count','item','Exactly one counted inspection for each input item.'),
      output('doubledCount','Doubled input size','count','item','Twice the current item count for the counterfactual comparison.'),
      output('doubledTime','Time for doubled input','duration','ms','The same constant-cost model evaluated at twice the input size.')
    ],
    'directional-derivative':[
      ...['x','y'].map(key=>input(key,'Field '+key+' coordinate','abstract-coordinate','1','A coordinate in the declared scalar field.')),
      ...['a','b','c'].map(key=>input(key,'Field coefficient '+key,'scalar','1','A coefficient of the bounded quadratic field.')),
      input('angleDegrees','Chosen direction angle','angle','deg','Angle of a unit direction in the equally scaled input plane.'),
      output('output','Directional slope','abstract-slope','1','The gradient dot the chosen unit direction at the current point.'),
      output('height','Field height','abstract-function-value','1','The field value, separate from its directional rate.'),
      output('directionX','Unit direction x component','direction-component','1','The cosine of the explicitly converted angle.'),
      output('directionY','Unit direction y component','direction-component','1','The sine of the explicitly converted angle.'),
      output('gradientNorm','Steepest local rate','slope-magnitude','1','The Euclidean gradient magnitude; bounds the absolute directional slope.')
    ],
    'tangent-plane':[
      ...['x','y'].map(key=>input(key,'Base '+key+' coordinate','abstract-coordinate','1','A coordinate of the point at which the local plane is formed.')),
      ...['a','b','c'].map(key=>input(key,'Field coefficient '+key,'scalar','1','A coefficient of the bounded quadratic field.')),
      ...['dx','dy'].map(key=>input(key,'Target offset '+key,'coordinate-displacement','1','An offset from the base point, not an absolute target coordinate.')),
      output('output','Predicted height','abstract-function-value','1','The local plane evaluated at the offset target.'),
      output('actualHeight','Actual target height','abstract-function-value','1','The original field evaluated at the same target.'),
      output('approximationError','Actual minus predicted','approximation-error','1','Signed error between the true field height and its local linear approximation.'),
      output('partialX','Base x partial','abstract-slope','1','The x slope evaluated at the base point.'),
      output('partialY','Base y partial','abstract-slope','1','The y slope evaluated at the base point.')
    ],
    'gradient-descent':[
      ...['startX','startY'].map(key=>input(key,'Initial '+key.slice(-1)+' setting','abstract-coordinate','1','A coordinate of the initial setting before any update.')),
      ...['a','b'].map(key=>input(key,'Positive curvature '+key,'positive-curvature','1','A strictly positive curvature of the declared convex quadratic objective.')),
      input('stepSize','Gradient step size','gradient-step-size','1','Scale multiplying the negative gradient at each discrete update.'),
      input('iteration','Completed updates','count','iteration','A whole number of gradient updates; fractional iterates are not admitted.'),
      output('output','Current objective value','objective-value','1','The objective after exactly the selected number of updates.'),
      output('initialCost','Initial objective value','objective-value','1','The objective before the first update.'),
      output('currentX','Current x setting','abstract-coordinate','1','The first coordinate after the selected whole number of updates.'),
      output('currentY','Current y setting','abstract-coordinate','1','The second coordinate after the selected whole number of updates.'),
      output('gradientNorm','Current gradient magnitude','slope-magnitude','1','The norm of the objective gradient at the current iterate.')
    ],
    'chain-rule':[
      input('x','Original input','abstract-coordinate','1','The abstract input to the affine inner function.'),
      input('a','Inner multiplier','scalar','1','The constant derivative of the inner affine rule.'),
      input('b','Inner offset','scalar','1','The offset of the affine rule before squaring.'),
      output('output','Composite derivative','abstract-slope','1','The signed product of outer and inner derivatives at the current input.'),
      output('innerValue','Inner value g(x)','abstract-function-value','1','The intermediate value a times x plus b.'),
      output('composedValue','Composite value f(g(x))','abstract-function-value','1','The square of the intermediate value; distinct from its derivative.'),
      output('innerDerivative','Inner derivative','abstract-slope','1','The derivative a of the inner affine rule.'),
      output('outerDerivative','Outer derivative at g(x)','abstract-slope','1','Twice the current intermediate value, before multiplying by the inner derivative.')
    ],
    'partial-derivative':[
      ...['x','y'].map(key=>input(key,'Surface '+key+' coordinate','abstract-coordinate','1','One coordinate in the declared abstract height field.')),
      ...['a','b','c'].map(key=>input(key,'Field coefficient '+key,'scalar','1','A real coefficient of the declared quadratic height field.')),
      output('output','Partial derivative in x','abstract-slope','1','The local rate 2ax, holding y fixed.'),
      output('partialY','Partial derivative in y','abstract-slope','1','The local rate 2by, holding x fixed.'),
      output('height','Field value','abstract-function-value','1','The scalar height c+ax²+by² at the current point.'),
      output('gradientNorm','Gradient magnitude','slope-magnitude','1','The nonnegative magnitude of the two partial derivatives in the orthonormal coordinate frame.')
    ],
    gradient:[
      ...['x','y'].map(key=>input(key,'Surface '+key+' coordinate','abstract-coordinate','1','One coordinate in the declared abstract height field.')),
      ...['a','b','c'].map(key=>input(key,'Field coefficient '+key,'scalar','1','A real coefficient of the declared quadratic height field.')),
      output('output','Gradient magnitude','slope-magnitude','1','The nonnegative maximum directional rate per unit input distance in this Euclidean frame.'),
      output('partialX','Gradient x component','abstract-slope','1','The signed x partial derivative in the common orthonormal frame.'),
      output('partialY','Gradient y component','abstract-slope','1','The signed y partial derivative in the common orthonormal frame.'),
      output('height','Field value','abstract-function-value','1','The scalar height at the current point; a vertical offset changes this without changing the gradient.'),
      output('unitGradientX','Unit uphill x component','direction-component','1','The normalized x component; unavailable at zero gradient.'),
      output('unitGradientY','Unit uphill y component','direction-component','1','The normalized y component; unavailable at zero gradient.')
    ],
    'linear-combination':[
      ...['ux','uy','vx','vy'].map(key=>input(key,key[0]+' '+(key[1]==='x'?'horizontal':'vertical')+' component','vector-component','1','A signed component of one of the two abstract plane vectors.')),
      ...['r','s'].map(key=>input(key,'Weight '+key,'scalar','1','A real coefficient multiplying one vector before addition.')),
      output('output','Combined horizontal component','vector-component','1','The horizontal component of the weighted vector sum.'),
      output('combinedY','Combined vertical component','vector-component','1','The vertical component of the weighted vector sum.'),
      output('norm','Combined vector length','vector-magnitude','1','The Euclidean magnitude of the resulting vector.')
    ],
    basis:[
      ...['x','y'].map(key=>input(key,'Target '+key+' coordinate','vector-component','1','A coordinate of the target vector in the original abstract frame.')),
      ...['a','b','c','d'].map(key=>input(key,'Basis coefficient '+key,'scalar','1','An entry in the two proposed basis columns. The receiving model checks whether they form a basis.')),
      output('output','First basis coordinate','scalar','1','The unique first coefficient; undefined when these columns do not form a basis or the result exceeds numeric range.'),
      output('s','Second basis coordinate','scalar','1','The unique second coefficient under the same basis conditions.'),
      output('determinant','Signed basis area factor','signed-area-scale','1','The determinant of the proposed basis columns, including dependent settings.')
    ],
    'matrix-product':[
      ...['a','b'].map(key=>input(key,key==='a'?'Horizontal shear coefficient':'Vertical shear coefficient','scalar','1','A real coefficient in one of the two declared shear maps.')),
      ...['x','y'].map(key=>input(key,'Input '+key+' component','vector-component','1','A component of the input vector before either map acts.')),
      output('output','Final horizontal component','vector-component','1','The horizontal component after both maps in the selected order.'),
      output('finalY','Final vertical component','vector-component','1','The vertical component after both maps in the selected order.'),
      output('intermediateX','Intermediate horizontal component','vector-component','1','The horizontal coordinate after the first map.'),
      output('intermediateY','Intermediate vertical component','vector-component','1','The vertical coordinate after the first map.')
    ],
    vector:[
      input('x','Horizontal vector component','vector-component','1','The signed horizontal component in this abstract coordinate plane.'),
      input('y','Vertical vector component','vector-component','1','The signed vertical component in this abstract coordinate plane.'),
      output('output','Vector length','vector-magnitude','1','The nonnegative Euclidean magnitude of the abstract vector.'),
      output('xSquared','Squared horizontal component','squared-component','1','The square of the horizontal component used in the length calculation.'),
      output('ySquared','Squared vertical component','squared-component','1','The square of the vertical component used in the length calculation.')
    ],
    'inner-product':[
      ...['ux','uy','vx','vy'].map(key=>input(key,key[0]+' '+(key[1]==='x'?'horizontal':'vertical')+' component','vector-component','1','A signed component of one of the two abstract real vectors.')),
      output('output','Dot product','scalar','1','The signed sum of corresponding component products for two abstract vectors.'),
      output('projection','Signed projection onto u','scalar-projection','1','The signed scalar projection onto u; undefined when the reference direction is zero.'),
      output('projectionX','Projection horizontal component','vector-component','1','The horizontal component of the orthogonal projection onto u.'),
      output('projectionY','Projection vertical component','vector-component','1','The vertical component of the orthogonal projection onto u.'),
      output('angleDegrees','Angle between vectors','angle','deg','The angle between two nonzero vectors, expressed explicitly in degrees.')
    ],
    'matrix-linear-map':[
      input('x','Input horizontal component','vector-component','1','The input vector horizontal component in the abstract plane.'),
      input('y','Input vertical component','vector-component','1','The input vector vertical component in the abstract plane.'),
      ...['a','b','c','d'].map(key=>input(key,'Matrix coefficient '+key,'scalar','1','A real dimensionless coefficient of the two-by-two linear map.')),
      output('output','Mapped horizontal component','vector-component','1','The horizontal component ax plus by of the transformed vector.'),
      output('mappedY','Mapped vertical component','vector-component','1','The vertical component cx plus dy of the transformed vector.'),
      output('determinant','Signed area factor','signed-area-scale','1','The determinant gives the signed factor applied to oriented unit-square area.'),
      output('mappedNorm','Mapped vector length','vector-magnitude','1','The nonnegative Euclidean length of the transformed vector.')
    ],
    determinant:[
      ...['a','b','c','d'].map(key=>input(key,'Matrix coefficient '+key,'scalar','1','A real dimensionless coefficient defining the two-by-two matrix.')),
      output('output','Determinant','signed-area-scale','1','The signed unit-square area factor ad minus bc, including zero and negative values.'),
      output('area','Unsigned area factor','area-scale','1','The nonnegative magnitude of the determinant, excluding orientation; an area factor is distinct from a length multiplier.'),
      output('termAD','First diagonal product','scalar','1','The product a times d in the two-by-two determinant formula.'),
      output('termBC','Second diagonal product','scalar','1','The product b times c subtracted in the determinant formula.')
    ],
    function:[
      input('x','Function input','scalar','1','An abstract real input to the affine function; no physical unit is assigned.'),
      input('a','Function multiplier','scalar','1','The real multiplier applied to the abstract input before the offset.'),
      input('b','Function offset','scalar','1','The real offset added after multiplying the abstract input.'),
      output('output','Function output','scalar','1','The result of multiplying the input by a and adding b.'),
      output('scaled','Scaled input','scalar','1','The intermediate a times x before the offset is added.')
    ],
    exponentiation:[
      input('base','Positive power base','positive-scalar','1','A positive real base; the receiving model checks its continuous power domain.'),
      input('exponent','Real exponent','scalar','1','The real exponent, including zero, negative and fractional values.'),
      output('output','Power value','positive-scalar','1','The positive real value of the selected base raised to the exponent.'),
      output('reciprocal','Reciprocal power','positive-scalar','1','The reciprocal power, computed by negating the current exponent.')
    ],
    limit:[
      input('a','Approach coordinate','coordinate','1','The abstract coordinate approached from the left and right.'),
      input('h','Positive probe distance','coordinate-step','1','A strictly positive distance from the approach coordinate to each probe.'),
      output('output','Two-sided limit','scalar','1','The analytically known limit for the removable family; null when the two sides disagree.'),
      output('leftValue','Left probe value','scalar','1','The function value at the point a minus the positive probe distance.'),
      output('rightValue','Right probe value','scalar','1','The function value at the point a plus the positive probe distance.')
    ],
    'signed-accumulation':[
      input('time','Elapsed time','duration','s','The nonnegative elapsed time from the start of the cart motion.'),
      input('initial','Initial cart velocity','velocity','m/s','The signed velocity at time zero, in metres per second.'),
      input('rate','Constant acceleration','acceleration','m/s2','The signed constant rate of velocity change, in metres per second squared.'),
      output('output','Net displacement','displacement','m','The signed change in position, counting backwards travel negatively.'),
      output('distance','Total distance travelled','length','m','The nonnegative total path length, counting both directions positively.'),
      output('velocity','Final cart velocity','velocity','m/s','The signed cart velocity at the selected elapsed time.'),
      output('leftSum','Left rectangle estimate','displacement','m','The signed finite sum using the left endpoint of each time interval.'),
      output('rightSum','Right rectangle estimate','displacement','m','The signed finite sum using the right endpoint of each time interval.'),
      output('midpointSum','Midpoint rectangle estimate','displacement','m','The signed midpoint estimate, exact for this affine velocity family.')
    ],
    'function-composition':[
      input('x','Input x','scalar','1','An abstract real input to the selected composition; no physical unit is assigned.'),
      input('a','Quadratic coefficient a','scalar','1','Coefficient of x squared in the abstract function f.'),
      input('b','Linear coefficient b','scalar','1','Coefficient of x in the abstract function f.'),
      input('c','Constant c','scalar','1','Constant term of the abstract function f.'),
      input('m','Affine slope m','scalar','1','Coefficient of x in the abstract function g.'),
      input('n','Affine offset n','scalar','1','Constant term of the abstract function g.'),
      output('output','Composition result','scalar','1','The output of the selected composition order.'),
      output('intermediate','Intermediate result','scalar','1','The result after the first function, before the second acts.'),
      output('difference','Difference between orders','scalar','1','f(g(x)) minus g(f(x)) at the current input; agreement here does not prove function equality.')
    ],
    'real-logarithm':[
      input('base','Logarithm base','scale-factor','1','A positive multiplicative factor other than one; domain validation is required.'),
      input('argument','Positive argument','positive-scalar','1','The strictly positive dimensionless quantity whose exponent is sought.'),
      output('output','Logarithm exponent','scalar','1','The real exponent y for which base raised to y equals the argument.'),
      output('inverse','Rebuilt argument','positive-scalar','1','The positive argument reconstructed by raising the base to the calculated exponent.')
    ],
    derivative:[
      input('a','Point a','abstract-coordinate','1','A coordinate on the selected abstract function, without a physical unit.'),
      input('h','Signed step h','abstract-coordinate-step','1','A signed coordinate displacement, kept distinct from an absolute coordinate.'),
      output('output','Finite secant slope','abstract-slope','1','The finite difference quotient; undefined for a zero step.'),
      output('analytic','Analytic tangent slope','abstract-slope','1','The analytic derivative at a; unavailable at the absolute-value corner.'),
      output('fa','Function value at a','abstract-function-value','1','The selected function evaluated at a.'),
      output('fah','Function value at a + h','abstract-function-value','1','The selected function evaluated after the signed step.')
    ],
    'ratio-scale':[
      input('servings','Target servings','count','serving','The target number of servings; fractional servings are permitted by this model.'),
      input('amount','Original ingredient mass','mass','g','Grams of this ingredient in the original recipe.'),
      input('baseServings','Original servings','count','serving','The number of servings in the original recipe.'),
      output('output','Scaled ingredient mass','mass','g','Grams needed for the target number of servings.'),
      output('factor','Recipe scale factor','scale-factor','1','Target servings divided by original servings.'),
      output('perServing','Ingredient mass per serving','mass-per-serving','g/serving','The fixed number of grams required for one serving.')
    ],
    'linear-model':[
      input('initial','Starting water','volume','L','Litres in the tank at time zero.'),
      input('rate','Water flow rate','volumetric-flow','L/min','Litres added per minute at a constant rate.'),
      input('time','Elapsed time','duration','min','Elapsed time in minutes; no conversion from seconds is implicit.'),
      output('output','Water in the tank','volume','L','Starting water plus the volume added during the elapsed time.'),
      output('increment','Added water','volume','L','The volume added after time zero, in litres.')
    ],
    'exponential-change':[
      input('initial','Original photograph width','length','px','The original photograph width in pixels, not metres.'),
      input('factor','Scale per resize pass','scale-factor','1','A multiplicative factor applied at each resize pass.'),
      input('time','Resize passes','count','pass','A resize playhead; fractional passes interpolate the exponential model.'),
      output('output','Resized photograph width','length','px','The width after the selected number of resize passes.'),
      output('change','Signed width change','length','px','The resized width minus the original width; shrinking gives a negative value.'),
      output('height','Resized photograph height','length','px','The height at the fixed three-to-two aspect ratio.')
    ],
    'chaos-theory':[
      input('generation','Generation playhead','count','generation','A generation playhead; fractional values display interpolation between discrete iterates.'),
      input('rate','Logistic growth parameter','logistic-growth-parameter','1','The logistic map parameter r, not a physical rate per unit time.'),
      input('seed','Starting population fraction','population-fraction','1','A normalized population fraction, distinct from the probability of an event.'),
      input('delta','Initial population gap','population-fraction-difference','1','The small positive difference between the two starting population fractions.'),
      output('output','Population path separation','population-fraction-difference','1','The absolute difference between the two displayed populations.'),
      output('populationA','Population fraction A','population-fraction','1','The first normalized population at the current generation playhead.'),
      output('populationB','Population fraction B','population-fraction','1','The second normalized population at the current generation playhead.'),
      output('amplification','Gap amplification factor','scale-factor','1','The current path separation divided by the initial gap; it need not grow monotonically.')
    ],
    'fractal-geometry':[
      input('depth','Refinement playhead','count','level','A Koch refinement playhead; fractional levels show a geometric morph, not a completed iteration.'),
      input('length','Original triangle side','length','m','The side length of the starting equilateral triangle in metres.'),
      output('output','Drawn snowflake perimeter','length','m','The perimeter of the currently drawn snowflake, including intermediate morphs.'),
      output('integerPerimeter','Last completed perimeter','length','m','The exact model perimeter at the last completed integer refinement.'),
      output('completedDepth','Completed refinement level','count','level','The most recent completed integer refinement level.'),
      output('completedSegmentCount','Completed segment count','count','segment','The number of segments at that completed integer refinement.')
    ],
    'wave-interference':[
      input('phase','Phase difference','angle','rad','The phase difference in radians; a degree-valued input needs an explicit conversion.'),
      input('amplitude','Each wave amplitude','wave-amplitude','1','A wave displacement in the model\'s uncalibrated amplitude units.'),
      output('output','Resultant amplitude','wave-amplitude','1','The nonnegative amplitude of the combined equal-amplitude waves.'),
      output('componentA','Wave A at the probe','wave-amplitude','1','The first wave displacement at the fixed probe position.'),
      output('componentB','Wave B at the probe','wave-amplitude','1','The signed second wave displacement at the fixed probe position.'),
      output('probeValue','Combined wave at the probe','wave-amplitude','1','The signed sum of both displacements at the fixed probe position.')
    ],
    probability:[
      input('chance','Success probability','probability','1','The probability of success in each of six independent identical trials.'),
      output('output','Expected successes','count','success','The expected number of successes in six trials, not an observed integer sample.'),
      output('trials','Trial count','count','trial','The fixed number of independent Bernoulli trials.'),
      output('variance','Success-count variance','count-variance','success2','The variance of the number of successes, with squared count units.')
    ],
    'vector-rotation':[
      input('angle','Rotation angle','angle','deg','The vector angle in degrees; radians are not implicitly converted.'),
      input('radius','Vector length','length','m','The vector length in metres.'),
      output('output','Horizontal vector component','length','m','The signed horizontal component r cos(theta), in metres.'),
      output('y','Vertical vector component','length','m','The signed vertical component r sin(theta), in metres.'),
      output('radians','Angle expressed in radians','angle','rad','The model explicitly converts its degree-valued input to radians.')
    ],
    'pythagorean-theorem':[
      input('a','Horizontal triangle leg','length','m','The horizontal leg length of the right triangle in metres.'),
      input('b','Vertical triangle leg','length','m','The vertical leg length of the right triangle in metres.'),
      output('output','Hypotenuse length','length','m','The hypotenuse length sqrt(a squared + b squared), in metres.'),
      output('aSquared','Square on the horizontal leg','area','m2','The area of the square on the horizontal leg.'),
      output('bSquared','Square on the vertical leg','area','m2','The area of the square on the vertical leg.'),
      output('cSquared','Square on the hypotenuse','area','m2','The area of the square on the hypotenuse, equal to the sum of the two other square areas.')
    ],
    'integral-accumulation':[
      input('time','Elapsed acceleration time','duration','s','Elapsed time in seconds from rest; minutes are not implicitly converted.'),
      input('rate','Constant acceleration','acceleration','m/s2','The constant acceleration of the cart in metres per second squared.'),
      output('output','Accumulated distance','length','m','The area under the velocity-time graph, in metres.'),
      output('velocity','Current cart velocity','velocity','m/s','The velocity at the selected elapsed time.')
    ],
    'quadratic-optimization':[
      input('width','Garden width','length','m','One side of the rectangular garden, in metres.'),
      input('perimeter','Available fence length','length','m','The total fence length, in metres, shared by all four sides.'),
      output('output','Garden area','area','m2','The area enclosed by the current rectangular garden.'),
      output('otherSide','Other garden side','length','m','The other side length, computed from the fence constraint.'),
      output('optimumWidth','Optimal garden width','length','m','One quarter of the fence length: the width that makes the garden square.'),
      output('maxArea','Maximum garden area','area','m2','The greatest possible rectangle area for the selected fence length.')
    ],
    'complex-multiplication':[
      input('real','Multiplier real component','complex-component','1','The real component of the dimensionless complex multiplier.'),
      input('imag','Multiplier imaginary component','complex-component','1','The imaginary component of the dimensionless complex multiplier.'),
      output('output','Product real component','complex-component','1','The real component of (2 + i) times the multiplier.'),
      output('imagPart','Product imaginary component','complex-component','1','The imaginary component of (2 + i) times the multiplier.'),
      output('modulus','Product modulus','complex-modulus','1','The nonnegative magnitude of the resulting complex number.'),
      output('multiplierModulus','Multiplier scale factor','scale-factor','1','The magnitude of the multiplier, which scales the original complex arrow.')
    ],
    'bayes-theorem':[
      input('prior','Prior defect probability','probability','1','The probability that a randomly chosen part is defective.'),
      input('sensitivity','Detection probability','probability','1','The conditional probability of a flag given a defective part.'),
      input('falsePositive','False-flag probability','probability','1','The conditional probability of a flag given a good part.'),
      output('output','Posterior defect probability','probability','1','The probability of a defect given a flag.'),
      output('truePositive','Joint true-flag probability','probability','1','The joint probability that a part is defective and flagged.'),
      output('falseAlarm','Joint false-flag probability','probability','1','The joint probability that a part is good and flagged.'),
      output('positiveRate','Total flag probability','probability','1','The probability that a randomly chosen part receives a flag.')
    ],
    'graph-theory':[
      input('bridge','Bridge travel time','duration','min','The time needed to cross the adjustable bridge edge, in minutes.'),
      output('output','Shortest route time','duration','min','The minimum travel time from A to D, in minutes.'),
      output('bridgeDistance','Route time using the bridge','duration','min','The total travel time along A to B to C to D, including the adjustable bridge.'),
      output('directDistance','Direct route time','duration','min','The total travel time along the fixed A to C to D route.')
    ],
    resonance:[
      input('frequency','Drive frequency ratio','frequency-ratio','1','Drive frequency divided by natural frequency, not a frequency in hertz.'),
      input('damping','Damping ratio','damping-ratio','1','The dimensionless damping ratio, distinct from a frequency ratio.'),
      output('output','Relative response amplitude','dimensionless-response','1','The steady-state response amplitude relative to static displacement, distinct from uncalibrated wave amplitude.'),
      output('denominator','Response denominator','response-denominator','1','The magnitude of the combined detuning and damping terms.'),
      output('detuning','Squared-frequency detuning','frequency-detuning','1','One minus the squared drive frequency ratio.'),
      output('dampingTerm','Damping term','response-damping-term','1','Twice the damping ratio times the drive frequency ratio.')
    ]
  };
  for(const ports of Object.values(definitions))Object.freeze(ports);
  Object.freeze(definitions);
  const empty=Object.freeze([]);
  return Object.freeze({forModule:id=>typeof id==='string'&&Object.hasOwn(definitions,id)?definitions[id]:empty});
});
