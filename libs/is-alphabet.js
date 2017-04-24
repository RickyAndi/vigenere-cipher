const ifTrue = require('./if-true');

/**
  * @function isAlphabet
  * @description Check if character is alphabet or not
  * @param {string} char - character to be checked, must be provided with one character
  * @returns {boolean} - whether char is alphabet or not
*/

module.exports = (char) => {
  
  if(char.length !== 1) {
    throw new Error('Either, you provide more than one characters or no character to be checked');
  }
  
  const alphabets = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
  const charInAlphabets = alphabets.split('').find(alphabet => alphabet === char);
  return ifTrue(charInAlphabets === undefined, () => false, () => true);
};
