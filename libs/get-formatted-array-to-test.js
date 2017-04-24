const getIncrement = require('get-increment-decrement')._getIncrement;
const getIncrementOfArrayElement = require('./get-increment-of-array-element');
const filterIntersectArrayOfArray = require('./filter-intersect-array-of-array');

/**
  * @function getFormattedArrayToTest
  * @description will get structured array to guide the process of finding pattern in word
  * @param {number} wordLength - the length of word
  * @returns {number[]} - array with specific format to guide of finding pattern in word
*/

module.exports = (wordLength) => {
  const incrementingResult = getIncrement({
    lengthNeeded: wordLength + 1,
    startNumber: -1,
    maximumLimit: wordLength + 1,
  });

  const formattedArrayToTest = incrementingResult.map((number) => {
    const incrementingResutOfEveryIncrementingResult = getIncrementOfArrayElement(incrementingResult, number + 1);
    const arraysWithoutIntersectingElements = filterIntersectArrayOfArray(incrementingResutOfEveryIncrementingResult);
    const formatted = arraysWithoutIntersectingElements.reduce((initialArray, array, currentIndex) => {
      if (currentIndex === 0) {
        initialArray[0].push(array);
      } else {
        initialArray[1].push(array);
      }
      return initialArray;
    }, [[], []]);
    return formatted;
  });
  return formattedArrayToTest;
};
