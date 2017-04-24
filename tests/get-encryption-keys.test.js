const { getEncryptionKeys } = require('../libs');
const expect = require('chai').expect;

describe('getEncryptionKeys function', () => {
	describe('can get keys of encryption by two inputs, cipher text and plain text', () => {
		describe('test assume the plain text dont have space and the keys length same as plain text length', () => {
			it('test 1 : plain text : "loremipsum", cipher text : "aeiwfckork", will get keys : "opqrstuvwx"', () => {
				const plainText = "loremipsum";
				const cipherText = "zdhvebjnqj";
				const expectedKeys = "opqrstuvwx";
				expect(getEncryptionKeys(plainText, cipherText)).to.equal(expectedKeys); 
			});
		})
	})
	describe('if the length between cipher text and plain text is not same, will throw error', () => {
		it('test 1 : will throw error if cipher text and plain text length is not same', () => {
			const plainText = 'abcdef'
			const cipherText = 'opqrstu';

			expect(() => {
				getEncryptionKeys(plainText, cipherText);
			}).to.throw(Error);
		})
	})
});