const { getKeyIndex } = require('../libs');
const expect = require('chai').expect;

describe('getKeyIndex function', () => {
  describe('given length of array key and index of character to transform in string to be encrypted, can decide which key index is used in array of key (in caesar chiper)', () => {
    describe('given the array of keys ["a", "b", "d", "e", "f"] and the word to be encrypted is "loremipsum"', () => {
      let keysLength = ["a", "b", "c", "d", "e", "f"].length;
      it('test 1 : character "l" which have index of 0, will get index 0 of key', () => {
        expect(getKeyIndex(keysLength, 0)).to.equal(0);
      });
      it('test 2 : character "o" which have index of 1, will get index 1 of key', () => {
        expect(getKeyIndex(keysLength, 1)).to.equal(1);
      });
      it('test 3 : character "r" which have index of 2, will get index 2 of key', () => {
        expect(getKeyIndex(keysLength, 2)).to.equal(2);
      });
      it('test 4 : character "e" which have index of 3, will get index 3 of key', () => {
        expect(getKeyIndex(keysLength, 3)).to.equal(3);
      });
      it('test 5 : character "m" which have index of 4, will get index 4 of key', () => {
        expect(getKeyIndex(keysLength, 4)).to.equal(4);
      });
      it('test 6 : character "i" which have index of 5, will get index 5 of key', () => {
        expect(getKeyIndex(keysLength, 5)).to.equal(5);
      });
      it('test 7 : character "p" which have index of 6, will get index 0 of key', () => {
        expect(getKeyIndex(keysLength, 6)).to.equal(0);
      });
      it('test 8 : character "s" which have index of 7, will get index 1 of key', () => {
        expect(getKeyIndex(keysLength, 7)).to.equal(1);
      });
      it('test 9 : character "u" which have index of 8, will get index 2 of key', () => {
        expect(getKeyIndex(keysLength, 8)).to.equal(2);
      });
      it('test 10 : character "m" which have index of 9, will get index 3 of key', () => {
        expect(getKeyIndex(keysLength, 9)).to.equal(3);
      });
    });
  });
});
