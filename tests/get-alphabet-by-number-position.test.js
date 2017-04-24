const { getAlphabetByNumberPosition } = require('../libs');
const expect = require('chai').expect;

describe('getAlphabetByNumberPosition function', () => {
	describe('can get alphabet by number position', () => {
		it('can get "a" if wit input 0', () => {
			expect(getAlphabetByNumberPosition(0)).to.equal('a');
		});
		it('can get "b" if wit input 1', () => {
			expect(getAlphabetByNumberPosition(1)).to.equal('b');
		});
		it('can get "c" if wit input 2', () => {
			expect(getAlphabetByNumberPosition(2)).to.equal('c');
		});
		it('can get "z" if wit input 25', () => {
			expect(getAlphabetByNumberPosition(25)).to.equal('z');
		})
	});
	describe('if provided by number below 0 or above 25 will throw error', () => {
		it('test 1 : will throw error if provided by -1', () => {
			expect(() => {
				getAlphabetNumberPosition(-1)
			}).to.throw(Error);
		})
		it('test 2 : will throw error if provided by -2', () => {
			expect(() => {
				getAlphabetNumberPosition(-2)
			}).to.throw(Error);
		})
		it('test 3 : will throw error if provided by 26', () => {
			expect(() => {
				getAlphabetNumberPosition(26)
			}).to.throw(Error);
		})
		it('test 4 : will throw error if provided by 27', () => {
			expect(() => {
				getAlphabetNumberPosition(27)
			}).to.throw(Error);
		})
	})
});