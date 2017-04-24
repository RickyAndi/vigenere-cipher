const getFormattedArrayToTest = require('./get-formatted-array-to-test');
const isArrayPatternSame = require('./is-array-pattern-same');
const getChars = require('./get-chars');
const isSomeTrue = require('./is-some-true');
const isSomeFalse = require('./is-some-false');
const ifTrue = require('./if-true');
const getIncrementOfArrayElement = require('./get-increment-of-array-element');

/**
  * @function doWordHavePattern
  * @description Check if a word have pattern
  * @param {string} word - the word to be checked
  * @returns {array} - array that consist of objects that contains how many character form a pattern
*/

module.exports = (word) => {
  const wordLength = word.length;
  const formattedArrayToTest = getFormattedArrayToTest(wordLength);
  
  const doWordHavePattern = formattedArrayToTest.map((array) => {
    const toBeTestedArraysOfIndexes = array[1];
    const toTestIndexes = array[0][0];
    const resultOfTest = toBeTestedArraysOfIndexes.map((arrayOfIndexes) => {
      return isArrayPatternSame(getChars(word, toTestIndexes), getChars(word, arrayOfIndexes));
    });
    return resultOfTest;
  });

  return doWordHavePattern.reduce((initialArray, arrayOfTestResult, currentIndex) => {
    ifTrue(isSomeFalse(arrayOfTestResult),
      () => {},
      () => {
        ifTrue(isSomeTrue(arrayOfTestResult),
          () => {
            const resultObject = {};
            resultObject.numberOfChars = currentIndex + 1;
            resultObject.havePattern = true;
            initialArray.push(resultObject);
          },
          () => {}
        );
      }
    );
    return initialArray;
  }, []);
};
