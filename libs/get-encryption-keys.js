const getAlphabetByNumberPosition = require('./get-alphabet-by-number-position');
const getAlphabetNumberPosition = require('./get-alphabet-number-position');
const isAlphabet = require('./is-alphabet');
const ifTrue = require('./if-true');
const getN = require('./get-n');

/**
  * @function getEncryptionKeys
  * @description will get encryption key
  * @param {string} plainText - plain text
  * @param {string} cipherText - cipher text from vinegere encryption 
  * @returns {string} - keys of encryption
*/

module.exports = (plainText, cipherText) => {
  if (plainText.length !== cipherText.length) {
    throw new Error('the length of plain text and cipher text must be equal');
  }

  plainText = plainText.split('');
  cipherText = cipherText.split('');

  const keys = cipherText
    .map((cipherChar, cipherCharIndex) => ifTrue(isAlphabet(cipherChar) && isAlphabet(plainText[cipherCharIndex]),
			() => {
        const cipherCharNumberPosition = getAlphabetNumberPosition(cipherChar);
        const plainCharNumberPosition = getAlphabetNumberPosition(plainText[cipherCharIndex]);
        const numberPositionOfKey = getN(cipherCharNumberPosition.number, plainCharNumberPosition.number);
        return getAlphabetByNumberPosition(numberPositionOfKey);
      },
			() => '_')
    )
		.join('');
  
  return keys;
};
