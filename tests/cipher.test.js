const { cipher } = require('../libs');
const expect = require('chai').expect;

describe('cipher module', () => {
	describe('can encrypt and decrypt string with vinegere cipher with input and key', () => {
		it('test 1 : encrypt and decrypt on word "lorem ipsum dolor" wiyh key "olcjik"', () => {
			const sourceWord = "lorem ipsum dolor";
			const key = "olcjik";
			const cipherText = cipher.encrypt(sourceWord, key);
			const plainTextResultOfDecryption = cipher.decrypt(cipherText, key);
			expect(sourceWord).to.equal(plainTextResultOfDecryption);
		});
		it('test 2 : encrypt and decrypt on word "lorem ipsum dolor 1234" wiyh key "mamake"', () => {
			const sourceWord = "lorem ipsum dolor 1234";
			const key = "mamake";
			const cipherText = cipher.encrypt(sourceWord, key);
			const plainTextResultOfDecryption = cipher.decrypt(cipherText, key);
			expect(sourceWord).to.equal(plainTextResultOfDecryption);
		});
	})
});