const { isEqual } = require('../libs');
const expect = require('chai').expect;

describe('isEqual', () => {
	describe('will compare two values', function() {
		describe('comparing two string values', () => {
			let valueA,
        valueB,
        valueC,
        valueD;

      before(() => {
        valueA = 'a';
        valueB = 'a';
        valueC = 'c';
        valueD = 'q';
      })

      it('will return true if two string values are same', () => {
        expect(isEqual(valueA, valueB)).to.be.true;
      })

      it('will return false, if two string values are not same', () => {
        expect(isEqual(valueC, valueD)).to.not.be.true;
      })
		});
		describe('comparing two number values', () => {
      let valueA,
        valueB,
        valueC,
        valueD;

      before(() => {
        valueA = 1;
        valueB = 1;
        valueC = 3;
        valueD = 9;
      })

      it('will return true if two number values are same', () => {
        expect(isEqual(valueA, valueB)).to.be.true;
      })

      it('will return false, if two number values are not same', () => {
        expect(isEqual(valueC, valueD)).to.not.be.true;
      })
		});
		describe('comparing two array values (not implemented)', () => {
      let valueA,
        valueB,
        valueC,
        valueD;

      before(() => {
        valueA = [1,2,3,4,6];
        valueB = [1,2,3,4,6];
        valueC = [3,4,5,6,5];
        valueD = [7,5,4,3,2];
      })

      it('will return true if two array values are same', () => {
        expect(isEqual(valueA, valueB)).to.not.be.true;
      })

      it('will return false, if two array values are not same', () => {
        expect(isEqual(valueC, valueD)).to.not.be.true;
      })
		});
		describe('comparing two object values (not implemented)', () => {
      let valueA,
        valueB,
        valueC,
        valueD;

      before(() => {
        valueA = { name : 'budi' };
        valueB = { name : 'budi' };
        valueC = { name : 'asri' };
        valueD = { name : 'astrid' };
      })

      it('will return false if two object values are same', () => {
        expect(isEqual(valueA, valueB)).to.not.be.true;
      })

      it('will return false, if two object values are not same', () => {
        expect(isEqual(valueC, valueD)).to.not.be.true;
      })
		})
	});
});