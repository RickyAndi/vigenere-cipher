const { getN } = require('../libs');
const expect = require('chai').expect;

describe('getN function', () => {
	describe('can count n on "(x + n) mod 26 = En(x)"', () => {
		it('test 1 : (1 + n) mod 26 = 1, n should be 0', () => {
			const enx = 1;
			const x = 1;
			const expectedN = 0;
			expect(getN(enx, x)).to.equal(expectedN);
		})
		it('test 2 : (2 + n) mod 26 = 2, n should be 0', () => {
			const enx = 2;
			const x = 2;
			const expectedN = 0;
			expect(getN(enx, x)).to.equal(expectedN);
		})
		it('test 3 : (3 + n) mod 26 = 3, n should be 0', () => {
			const enx = 3;
			const x = 3;
			const expectedN = 0;
			expect(getN(enx, x)).to.equal(expectedN);
		})
		it('test 4 : (2 + n) mod 26 = 5, n should be 3', () => {
			const enx = 5;
			const x = 2;
			const expectedN = 3;
			expect(getN(enx, x)).to.equal(expectedN);
		})
		it('test 5 : (2 + n) mod 26 = 1, n should be 25', () => {
			const enx = 1;
			const x = 2;
			const expectedN = 25;
			expect(getN(enx, x)).to.equal(expectedN);
		})
	});
});