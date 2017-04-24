const { isSomeTrue } = require('../libs');
const chai = require('chai');
const expect = chai.expect;

describe('isSomeTrue function', () => {
  describe('can test on normal array', () => {
    let arrayToTestA,
      arrayToTestB;

    before(() => {
      arrayToTestA = [false, false, false, true, false];
      arrayToTestB = [false, false, false, false];
    });

    it('will return true, if there is true value inside an array', () => {
      const result = isSomeTrue(arrayToTestA);
      expect(result).to.be.true;
    });

    it('will return false, if there is not true value inside an array', () => {
      const result = isSomeTrue(arrayToTestB);
      expect(result).to.not.be.true;
    });
  });
  describe('can test on nested array', () => {
    describe('on double nested array', () => {
      let arrayToTestA,
        arrayToTestB;

      before(() => {
        arrayToTestA = [
          [false, false, true],
          [false, false]
        ];

        arrayToTestB = [
          [false, false, false],
          [false, false]
        ];
      });

      it('will return true, if there is true value inside an array', () => {
        const result = isSomeTrue(arrayToTestA);
        expect(result).to.be.true;
      });

      it('will return false, if there is not true value inside an array', () => {
        const result = isSomeTrue(arrayToTestB);
        expect(result).to.not.be.true;
      });
    });
    describe('on triple nested array', () => {
      let arrayToTestA,
        arrayToTestB;

      before(() => {
        arrayToTestA = [
          [
            [false, false, true],
            [true, false, false]  
          ],
          [
            [false, false],
            [false, false]
          ]
        ];

        arrayToTestB = [
          [
            [false, false, false],
            [false, false, false]
          ],
          [
            [false, false, false],
            [false, false]
          ]
        ];
      });

      it('will return true, if there is true value inside an array', () => {
        const result = isSomeTrue(arrayToTestA);
        expect(result).to.be.true;
      });

      it('will return false, if there is not true value inside an array', () => {
        const result = isSomeTrue(arrayToTestB);
        expect(result).to.not.be.true;
      });
    });
  });
});
