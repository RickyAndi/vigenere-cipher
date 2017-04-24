const { getChars } = require('../libs');
const expect = require('chai').expect;

describe('getChars function', () => {
  describe('it can extract char inside a string by array of indexes', () => {
  	let word,
  		indexesToExtract;

  	before(() => {
  		word = 'lorem ipsum dolor sit amet';
  		indexesToExtract = [0,1,2,3,4];
  	});

  	it('test 1 : on word "lorem ipsum dolor sit amet" with indexes [0,1,2,3,4] should return ["l", "o", "r", "e", "m"]', () => {
  		const expectedArrayOfChars = ['l', 'o', 'r', 'e', 'm'];
  		expect(getChars(word, indexesToExtract)).to.eql(expectedArrayOfChars);
  	})
  });
  describe('if char on that specific index doesnt exist or null, will return null on that index', () => {
  	let word,
  		indexesToExtract;

  	before(() => {
  		word = 'lorem ipsum dolor sit amet';
  		indexesToExtract = [0,1,2,3,4, 100];
  	});

  	it('test 1 : on word "lorem ipsum dolor sit amet" with indexes [0,1,2,3,4, 100] should return ["l", "o", "r", "e", "m", null]', () => {
  		const expectedArrayOfChars = ['l', 'o', 'r', 'e', 'm', null];
  		expect(getChars(word, indexesToExtract)).to.eql(expectedArrayOfChars);
  	})
  });
});
