const { isSomeFalse } = require('../libs');
const chai = require('chai');
const expect = chai.expect;

describe('isSomeFalse function', () => {
  describe('can test on normal array', () => {
    let arrayToTestA,
      arrayToTestB;

    before(() => {
      arrayToTestA = [true, false, true, true, true];
      arrayToTestB = [true, true, true, true];
    });

    it('will return true, if there is false value inside an array', () => {
      const result = isSomeFalse(arrayToTestA);
      expect(result).to.be.true;
    });

    it('will return false, if there is not false value inside an array', () => {
      const result = isSomeFalse(arrayToTestB);
      expect(result).to.not.be.true;
    });
  });
  describe('can test on nested array', () => {
    describe('on double nested array', () => {
      let arrayToTestA,
        arrayToTestB;

      before(() => {
        arrayToTestA = [true, false, true, true, true];
        arrayToTestB = [true, true, true, true];
      });

      it('will return true, if there is false value inside an array', () => {
        const result = isSomeFalse(arrayToTestA);
        expect(result).to.be.true;
      });

      it('will return false, if there is not false value inside an array', () => {
        const result = isSomeFalse(arrayToTestB);
        expect(result).to.not.be.true;
      });
    })
  });
});
