const ifTrue = require('./if-true');
const isExist = require('./is-exist');
const isEqual = require('./is-equal');
const isSomeFalse = require('./is-some-false');
const isSomeTrue = require('./is-some-true');
const isAlphabet = require('./is-alphabet');

/**
  * @function isArrayPatternSame
  * @description Check if two arrays have same pattern of occurences of its elements
  * @param {array} arrayA - array to be checked
  * @param {array} arrayB - array to be checked
  * @returns {boolean} - whether the two arrays have same pattern
*/

module.exports = (arrayA, arrayB) => {
  if (arrayA.length < arrayB.length) {
    throw new Error('the length of first array provided must be higher or equal');
  }
  
  const arrayOfCheckResult = arrayA.map((char, index) => ifTrue(isExist(arrayB[index]),
    () => ifTrue(isAlphabet(char) && isAlphabet(arrayB[index]),
      () => ifTrue(isEqual(char, arrayB[index]), () => true, () => false), 
      () => null
    ),
    () => null
  ));
  
  const isArrayPatternSame = ifTrue(isSomeFalse(arrayOfCheckResult),
    () => false,
    () => ifTrue(isSomeTrue(arrayOfCheckResult), () => true, () => null));

  return isArrayPatternSame;
};
