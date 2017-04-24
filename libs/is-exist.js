/**
  * @function isExist
  * @description Check if variable exist
  * @param {string|number} value - the value to be checked
  * @returns {boolean} - whether the variable is exist
*/

module.exports = value => value !== undefined && value !== null;
