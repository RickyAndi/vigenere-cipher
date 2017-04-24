/**
  * Check if an array contains a value, the array provided can be normal array or nested array
  * @param {array} array - the array that will be checked
  * @param {string|number} valueToSearch - the value to be checked
  * @returns {boolean} - whether the array contains value
*/

function doArrayContain(array, valueToSearch) {
  const testIfArrayContain = array.some((value) => {
    if (Array.isArray(value)) {
      return doArrayContain(value, valueToSearch);
    }
    return value === valueToSearch;
  });
  return testIfArrayContain;
}

module.exports = doArrayContain;
