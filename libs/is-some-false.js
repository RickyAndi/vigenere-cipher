const doArrayContain = require('./do-array-contain');

/**
  * @function isSomeFalse
  * @description Check if an array contains a false value, can be applied to normal array and nested
  * @param {array} array - the array that will be checked
  * @returns {boolean} - whether the array contains false
*/

module.exports = array => doArrayContain(array, false);
