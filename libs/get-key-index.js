const getModulo = require('./get-modulo');
const ifTrue = require('./if-true');

/**
  * @function getKeyIndex
  * @description will get which key in array of keys to be used in encryption and decryption on every char in string to be encrypted
  * @param {number} keysLength - the length of keys
  * @param {number} indexOfCharToTransform - the index position of char in string
  * @returns {number} - which index of keys to be used
*/

module.exports = (keysLength, indexOfCharToTransform) => {
  const modulo = getModulo((indexOfCharToTransform + 1), keysLength);
  return ifTrue(modulo === 0, () => ((modulo + keysLength) - 1), () => (modulo - 1));
};
