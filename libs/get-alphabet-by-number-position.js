/**
  * @function getAlphabetByNumberPosition
  * @description will get alphabet by its number position
  * @param {number} alphabetNumberPosition - the position number of alphabet
  * @returns {string} - a character depend on position number provided
*/

module.exports = (alphabetNumberPosition) => {
  if (alphabetNumberPosition < 0) {
    throw new Error('Alphabet with number below 0 is not exist');
  }

  if (alphabetNumberPosition >= 26) {
    throw new Error('Alphabet with number above 25 is not exist');
  }

  const alphabets = 'abcdefghijklmnopqrstuvwxyz';
  return alphabets[alphabetNumberPosition];
};
