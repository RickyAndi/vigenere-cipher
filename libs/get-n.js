/**
  * @function getN
  * @description will get the position number of key with cipher char number position and plain char number position in alphabet
  * @param {number} cipherCharNumberPosition - number position of cipher character
  * @param {number} plainCharNumberPosition - number position of plain character
  * @returns {number} - position number of key
*/

const ifTrue = require('./if-true');

module.exports = (cipherCharNumberPosition, plainCharNumberPosition) => {
  const TOTAL_ALPHABETS = 26;
  const x = (cipherCharNumberPosition - plainCharNumberPosition) % TOTAL_ALPHABETS;
  return ifTrue(x < 0, () => x + TOTAL_ALPHABETS, () => x);
};
