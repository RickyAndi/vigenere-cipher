const { readifyString } = require('../libs');
const expect = require('chai').expect;

describe('readifyString function', () => {
	describe('can transform string to ready format to be encrypted', () => {
		it('test 1 : word "lorem ipsum" become ["l", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m"]', () => {
			const expectedResult = ["l", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m"];
			expect(readifyString("lorem ipsum")).to.eql(expectedResult);
		});
		it('test 2 : word "LOREM ipsum 100" become ["l", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m", " ", "1", "0", "0"]', () => {
			const expectedResult = ["l", "o", "r", "e", "m", " ", "i", "p", "s", "u", "m", " ", "1", "0", "0"];
			expect(readifyString("LOREM ipsum 100")).to.eql(expectedResult);
		});
	});
});
