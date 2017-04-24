/**
  * @function ifTrue
  * @description will return value or invoke callback provided based on condition provided
  * 
  *
  * @callback toBeInvokedIfTrue
  * @callback toBeInvokedIfFalse
  *
  * @param {boolean} condition - condition to be evaluated
  * @param {toBeInvokedIfTrue|*} toReturnIfTrue - the value to be returned or callback to be invoked
  * @param {toBeInvokedIfFalse|*} toReturnIfFalse - the value to be returned or callback to be invoked
  * @returns {*} - anything from toReturnIfTrue or toReturnIfFalse
*/

module.exports = (condition, toReturnIfTrue, toReturnIfFalse) => {
  if (condition) {
    if ((typeof toReturnIfTrue) === 'function') {
      return toReturnIfTrue();
    }

    return toReturnIfTrue;
  }

  if ((typeof toReturnIfFalse) === 'function') {
    return toReturnIfFalse();
  }

  return toReturnIfFalse;
};
