const isAlphabet = require('./is-alphabet');
const ifTrue = require('./if-true');

/**
  * @function readifyString
  * @description Transform string to be ready format to be encrypted / decrypted
  * @param {string} string - string to be transformed
  * @returns {array} - array that ready to be encrypted / decrypted
*/

module.exports = string => {
  return string
    .split('')
    .map(char => ifTrue(isAlphabet(char),
        () => char.toLowerCase(),
        () => char
    ));
}
