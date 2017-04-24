const { doArrayContain } = require('../libs');
const expect = require('chai').expect;

describe('doArrayContain function', () => {
  describe('can test if array contain specific value', () => {
    describe('can test on normal array, such as [1,2,3,4,5,6,7]', () => {
      let arrayA,
        arrayB;

      before(() => {
        arrayA = [1,2,3,4,5,6,8];
        arrayB = [10,4,5,6,4,3,9];
      });

      it('test 1 : test that array contain 1, should return true', () => {
        const valueToSearch = 1;
        expect(doArrayContain(arrayA, valueToSearch)).to.be.true;
      });

      it('test 2 : test that array contain 1, should return false', () => {
        const valueToSearch = 1;
        expect(doArrayContain(arrayB, valueToSearch)).to.not.be.true;
      });
    });
    describe('can test on nested array, such as [1, [2,3,4], [1,2,3,[1,2,3, [5,6,7]]]]', () => {
      let arrayA,
        arrayB;

      before(() => {
        arrayA = [10,[3,4,5,[5,6,7],5,[4,4,5,6,[4,[6,7,8,[4,5,6,5,4,3,6,7,[1,2,3]]]]]]];
        arrayB = [[2,3,4,5,3,[5,6,7,[9,7,6,5,0]]],2,3,4,5,[6,7,[9,4]]];
      });

      it('test 1 : test that array contain 1, should return true', () => {
        const valueToSearch = 1;
        expect(doArrayContain(arrayA, valueToSearch)).to.be.true;
      });

      it('test 2 : test that array contain 1, should return false', () => {
        const valueToSearch = 1;
        expect(doArrayContain(arrayB, valueToSearch)).to.not.be.true;
      });
    });
  });
});
