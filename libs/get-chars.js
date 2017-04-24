const isExist = require('./is-exist');
const ifTrue = require('./if-true');

/**
  * @function getChars
  * @description will get array of character from string by array of number
  * @param {string} string - the string to be extracted its character
  * @param {number[]} indexes - the array of index 
  * @returns {string[]} - array contains character per index in string provided
*/

module.exports = (string, indexes) => indexes.map(index => ifTrue(isExist(string[index]), () => string[index], () => null));
