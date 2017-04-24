const readifyString = require('./readify-string');
const getKeyIndex = require('./get-key-index');
const getModulo = require('./get-modulo');
const isAlphabet = require('./is-alphabet');
const ifTrue = require('./if-true');
const getAlphabetNumberPosition = require('./get-alphabet-number-position');
const getAlphabetByNumberPosition = require('./get-alphabet-by-number-position');

/**
  * @function decryptor
  * @description decrypt cipher text encrypted by vinegere cypher, with input cipher text and key
  * @param {string} cipherText - cipher text encrypted by vinegere cypher
  * @param {string} keys - the keys of encryption
  * @returns {string} - the plain text from cipher text
*/

module.exports = (cipherText, keys) => {
  const TOTAL_ALPHABETS = 26;

  keys = ifTrue(Array.isArray(keys), () => keys, () => keys.split(''));
  const readyToBeDecrypted = readifyString(cipherText);
  const keysLength = keys.length;

  const arrayOfEncryptedCharacter = readyToBeDecrypted.map((char, charIndex) => ifTrue(isAlphabet(char),
    () => {
      const keyIndexToBeUsed = getKeyIndex(keysLength, charIndex);
      const numberPositionOfChar = getAlphabetNumberPosition(char);
      const numberPositionOfKeyChar = getAlphabetNumberPosition(keys[keyIndexToBeUsed]);
      const alphabetNumberPositionToBeUsed = getModulo(numberPositionOfChar.number - numberPositionOfKeyChar.number, TOTAL_ALPHABETS);
      return ifTrue(alphabetNumberPositionToBeUsed < 0,
  			() => getAlphabetByNumberPosition(alphabetNumberPositionToBeUsed + TOTAL_ALPHABETS),
  			() => getAlphabetByNumberPosition(alphabetNumberPositionToBeUsed)
  		);
    },
    () => char)
  );
  
  return arrayOfEncryptedCharacter
		.map(char => ifTrue(char == '_', () => ' ', () => char))
		.join('');
};

