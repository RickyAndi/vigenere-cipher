const { isExist } = require('../libs');
const expect = require('chai').expect;

describe('isExist', () => {
	let valueA, 
		valueB, 
		valueC;

	before(() => {
		valueA = undefined;
		valueB = null;
		valueC = 1;
	})

	it('will return false, if value is undefined', () => {
		expect(isExist(valueA)).to.not.be.true;
	})

	it('will return false, if value is null', () => {
		expect(isExist(valueB)).to.not.be.true;
	})

	it('will return true, if value is neither null or undefined', () => {
		expect(isExist(valueC)).to.be.true;
	})
})