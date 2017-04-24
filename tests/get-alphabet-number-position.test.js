const expect = require('chai').expect;
const { getAlphabetNumberPosition } = require('../libs');

describe('getAlphabetNumberPosition function', () => {
	describe('can get position number in alphabet', () => {
		it('test 1 : with input char "a" should return { number : 0, found : true }', () => {
			const result = getAlphabetNumberPosition("a");
			expect(result.number).to.equal(0);
			expect(result.found).to.be.true;
		});
		it('test 2 : with input char "b" should return { number : 1, found : true }', () => {
			const result = getAlphabetNumberPosition("b");
			expect(result.number).to.equal(1);
			expect(result.found).to.be.true;
		});
		it('test 3 : with input char "c" should return { number : 2, found : true }', () => {
			const result = getAlphabetNumberPosition("c");
			expect(result.number).to.equal(2);
			expect(result.found).to.be.true;
		});
		it('test 4 : with input char "z" should return { number : 25, found : true }', () => {
			const result = getAlphabetNumberPosition("z");
			expect(result.number).to.equal(25);
			expect(result.found).to.be.true;
		});
		it('test 5 : with input char "7" which is not an alphabet should return { number : null, found : false }', () => {
			const result = getAlphabetNumberPosition("7");
			expect(result.number).to.equal(null);
			expect(result.found).to.not.be.true;
		});
	});
});