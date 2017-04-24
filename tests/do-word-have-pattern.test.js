const { doWordHavePattern } = require('../libs');
const chai = require('chai');
chai.should();
chai.use(require('chai-things'));

describe('doWordHavePattern function', () => {
  describe('can decide that word have pattern', () => {
    it('test 1 : test on word "abcabcabc", the result should contain { numberOfChars : 3, havePattern : true }', () => {
      const wordToBeTested = 'abcabcabc';
      const expectedResultObject = {numberOfChars : 3, havePattern : true};
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObject)
    });
    it('test 2 : test on word "abangdaa", the result should contain { numberOfChars : 7, havePattern : true }', () => {
      const wordToBeTested = 'abangdaa';
      const expectedResultObject = {numberOfChars : 7, havePattern : true};
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObject)
    });
    it('test 3 : test on word "aaaaaa", the result should contain [{numberOfChars : 1 , havePattern : true}, {numberOfChars : 2, havePattern : true}, { numberOfChars : 3, havePattern : true}, { numberOfChars : 4, havePattern : true }, { numberOfChars : 5, havePattern : true}]', () => {
      const wordToBeTested = 'aaaaaa';
      const expectedResultObjectA = {numberOfChars : 1, havePattern : true};
      const expectedResultObjectB = {numberOfChars : 2, havePattern : true};
      const expectedResultObjectC = {numberOfChars : 3, havePattern : true};
      const expectedResultObjectD = {numberOfChars : 4, havePattern : true};
      const expectedResultObjectE = {numberOfChars : 5, havePattern : true};

      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObjectA);
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObjectB);
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObjectC);
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObjectD);
      doWordHavePattern(wordToBeTested).should.include.something.that.deep.equals(expectedResultObjectE);
    });
    it('test 4 : test on word "abcdefghijk", the result shoulf an empty array', () => {
      const wordToBeTested = 'abcdefghijk';
      doWordHavePattern(wordToBeTested).should.be.empty;
    });
  });
});
