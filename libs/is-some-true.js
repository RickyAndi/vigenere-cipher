const doArrayContain = require('./do-array-contain');

/**
  * @function isSomeTrue
  * @description Check if an array contains a true value, can be applied to normal array and nested
  * @param {array} array - the array that will be checked
  * @returns {boolean} - whether the array contains true
*/

module.exports = array => doArrayContain(array, true);
