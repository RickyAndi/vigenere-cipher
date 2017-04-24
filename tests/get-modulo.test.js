const expect = require('chai').expect;
const { getModulo } = require('../libs');

describe('getModulo function', () => {
  describe('can get the result of modulo of two numbers', () => {
    it('test 1 : modulo of 10 and 4 is 2', () => {
      expect(getModulo(10, 4)).to.equal(2);
    });
    it('test 2 : modulo of 10 and 2 is 0', () => {
      expect(getModulo(10, 2)).to.equal(0);
    });
    it('test 3 : modulo of 5 and 2 is 1', () => {
      expect(getModulo(5, 2)).to.equal(1);
    });
    it('test 4 : modulo of 1 and 10 is 1', () => {
      expect(getModulo(1, 10)).to.equal(1);
    });
  });
});
