const { isAlphabet } = require('../libs');
const expect = require('chai').expect;

describe('isAlphabet function', () => {
	describe('can decide whether a char is alphabet', () => {
		it('test 1 : with input "A" should return true', () => {
			expect(isAlphabet("A")).to.be.true;
		});
		it('test 2 : with input "a" should return true', () => {
			expect(isAlphabet("a")).to.be.true;
		});
		it('test 3 : with input "Z" should return true', () => {
			expect(isAlphabet("Z")).to.be.true;
		});
		it('test 4 : with input "x" should return true', () => {
			expect(isAlphabet("x")).to.be.true;
		});
		it('test 5 : with input "_" should return false', () => {
			expect(isAlphabet("_")).to.not.be.true;
		});
		it('test 6 : with input "1" should return false', () => {
			expect(isAlphabet("1")).to.not.be.true;
		});
		it('test 7 : with input "0" should return false', () => {
			expect(isAlphabet("0")).to.not.be.true;
		});
	});
	describe('will throw error, if the char provided more than one', () => {
		it('test 1 : with input "abc" will throw error', () => {
			expect(() => { isAlphabet("abc") }).to.throw(Error)
		});
	});
});
