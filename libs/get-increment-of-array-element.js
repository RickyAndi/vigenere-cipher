const getIncrement = require('get-increment-decrement')._getIncrement;

/**
  * @function getIncrementOfArrayElement
  * @description provided with array of number, and length, will get array that consist of arrays, in every array consist of number and its increment, the length of every array depend on the number length you provided
  * @param {number[]} arrayOfNumber - array of number that its elements will be incremented
  * @returns {number[]} - result of incrementing all of array elements
*/

module.exports = (arrayOfNumber, length) => {
  const resultsOfIncrement = getIncrement({
    maximumLimit: length + 1,
    lengthNeeded: length,
    startNumber: -1,
  });

  return arrayOfNumber.map(number => resultsOfIncrement
      .map(incrementResult => number + incrementResult)
      .filter(resultOfAddition => resultOfAddition < arrayOfNumber[arrayOfNumber.length - 1] + 1));
};
