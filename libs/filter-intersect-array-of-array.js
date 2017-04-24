const intersection = require('array-intersection');
const ifTrue = require('../libs/if-true');

/**
  * @function filterIntersectArrayOfArray
  * @description Will remove array that have same elements with another array and have bigger index
  * @param {array} array - the array that will filtered
  * @returns {array} - array of array without intersect elements
*/

module.exports = (array) => {
  const reducedArray = array.reduce((initialArray, individualArray) => {
    const doInitialArrayHaveIntersectArray = initialArray.some((individualInitialArray) => {
      const intersectedElements = intersection(individualInitialArray, individualArray);
      return ifTrue(intersectedElements.length === 0, () => false, () => true);
    });
    if (!doInitialArrayHaveIntersectArray) {
      initialArray.push(individualArray);
    }
    return initialArray;
  }, []);

  return reducedArray;
};
