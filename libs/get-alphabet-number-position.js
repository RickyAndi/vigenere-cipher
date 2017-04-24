/**
  * @function getAlphabetNumberPosition
  * @description will get position number of alphabet character
  * @param {string} toFindNumberPositionChar - the character to get its position number
  * @returns {object} - the object result consist of the position number and found status
*/

module.exports = (toFindNumberPositionChar) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet.split('').reduce((initialObject, char, currentIndex) => {
    if (toFindNumberPositionChar === char) {
      initialObject.number = currentIndex;
      initialObject.found = true;
    }
    return initialObject;
  }, {
    number: null,
    found: false,
  });
};
