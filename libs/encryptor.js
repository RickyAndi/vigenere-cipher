const readifyString = require('./readify-string');
const getKeyIndex = require('./get-key-index');
const getModulo = require('./get-modulo');
const isAlphabet = require('./is-alphabet');
const ifTrue = require('./if-true');
const getAlphabetNumberPosition = require('./get-alphabet-number-position');
const getAlphabetByNumberPosition = require('./get-alphabet-by-number-position');
const debug = require('debug')('encryptor');

/**
  * @function encryptor
  * @description Encrypt plain text to cipher text with vigenere cypher
  * @param {string} plainText - the string to be encryptes
  * @param {string} keys - the keys of encryption
  * @returns {string} - cipher text from encryption
*/

module.exports = (plainText, keys) => {
  const TOTAL_ALPHABETS = 26;

  keys = ifTrue(Array.isArray(keys), () => keys, () => keys.split(''));
  const readyToBeEncrypted = readifyString(plainText);
  const keysLength = keys.length;
  const arrayOfEncryptedCharacter = readyToBeEncrypted.map((char, charIndex) => ifTrue(isAlphabet(char), () => {
    const keyIndexToBeUsed = getKeyIndex(keysLength, charIndex);
    const numberPositionOfChar = getAlphabetNumberPosition(char);
    const numberPositionOfKeyChar = getAlphabetNumberPosition(keys[keyIndexToBeUsed]);
    const alphabetNumberPositionToBeUsed = getModulo(numberPositionOfChar.number + numberPositionOfKeyChar.number, TOTAL_ALPHABETS);
    return getAlphabetByNumberPosition(alphabetNumberPositionToBeUsed);
  },
		() => char));
  return arrayOfEncryptedCharacter.join('');
};
