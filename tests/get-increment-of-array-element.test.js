const { getIncrementOfArrayElement, doArrayContain } = require('../libs');
const expect = require('chai').expect;

describe('getIncrementOfArrayElement function', () => {
  describe('can generate increment number on every number inside an array', () => {
    let arrayA,
      arrayB;

    before(() => {
      arrayA = [1,2];
      arrayB = [4,5,6,7,8,9,10];
    });

    it('test 1 : with input [1,2], with length of 2, will generate right result', () => {
      const expectedResultOfArrayA = [[1,2], [2]];
      const length = 2;
      expect(getIncrementOfArrayElement(arrayA, length)).to.eql(expectedResultOfArrayA);
    });
    it('test 2 : with input [4,5,6,7,8,9,10], with length of 3, will generate right result', () => {
      const expectedResultOfArrayB = [[4,5,6], [5,6,7], [6,7,8], [7,8,9], [8,9,10], [9,10], [10]];
      const length = 3;
      expect(getIncrementOfArrayElement(arrayB, length)).to.eql(expectedResultOfArrayB);  
    });
  });
  describe('the result of incrementing will not above the number of last index of array', () => {
    let arrayA,
      arrayB;

    before(() => {
      arrayA = [1,2];
      arrayB = [4,5,6,7,8,9,10];
    });

    it('test 1 : with input [1,2], with length of 2, will not generate number above 2', () => {
      const expectedResultOfArrayA = [[1,2], [2]];
      const length = 2;
      const aboveHighestNumber = 3;
      const result = getIncrementOfArrayElement(arrayA, length); 
      expect(doArrayContain(result, aboveHighestNumber)).to.not.be.true;
    });
    it('test 2 : with input [4,5,6,7,8,9,10], with length of 3, will not generate number above 10', () => {
      const expectedResultOfArrayB = [[4,5,6], [5,6,7], [6,7,8], [7,8,9], [8,9,10], [9,10], [10]];
      const length = 3;
      const aboveHighestNumber = 11;
      const result = getIncrementOfArrayElement(arrayB, length);
      expect(doArrayContain(result, aboveHighestNumber)).to.not.be.true;
    });
  })
});