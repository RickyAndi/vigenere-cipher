const { isArrayPatternSame } = require('../libs');
const expect = require('chai').expect;

describe('isArrayPatternSame', () => {
  it('will throw error, if array provided in first parameter have lesser length than array provided in second parameter', () => {
    let arrayA = ['a'];
    let arrayB = ['a', 'c', 'd'];
    
    expect(function() {
      isArrayPatternSame(arrayA, arrayB);
    }).to.throw(Error);
  });

  describe('will compare the similarity of occurence of element inside two arrays', () => {
    describe('comparing two arrays with same length', () => {
      let arrayA,
        arrayB,
        arrayC,
        arrayD;

      before(() => {
        arrayA = ['a', 'b', 'c', 'd'];
        arrayB = ['a', 'b', 'c', 'd'];
        arrayC = ['a', 'q', 'x', 'e'];
        arrayD = ['a', 'q', 'z', 'e'];
      });

      it('will return true, if two arrays have same pattern (the occurence of its element are same)', () => {
        expect(isArrayPatternSame(arrayA, arrayB)).to.be.true;
      });

      it('will return false, if two arrays dont have same pattern (the occurence of its element are not same)', () => {
        expect(isArrayPatternSame(arrayC, arrayD)).to.not.be.true;
      });
    });
    describe('comparing two arrays with the length of arrays are not same', () => {
      
    })
  });
});
