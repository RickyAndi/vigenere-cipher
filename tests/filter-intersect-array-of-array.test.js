const { filterIntersectArrayOfArray } = require('../libs');
const expect = require('chai').expect;

describe('filterIntersectArrayOfArray function', () => {
  let arrayA,
    arrayB,
    arrayC;

  before(() => {
    arrayA = [
      [1,2,3],
      [3,5,4],
      [6,7,8],
      [10,11,12],
      [8,20,30]
    ];

    arrayB = [
      [1,2,3,4,5,6,7,8,9,10],
      [10,11,1,2,3,4],
      [20,30,40,50]
    ];

    arrayC = [
      ['a', 'b', 'c', 'd', 'e', 'f'],
      ['c', 'y', 'u', 'x', 'h', 'i']
    ];
  });
  it('can filter array of array, if there are same element inside each of array element, the element that have bigger index will be filtered', () => {
    const resultA = filterIntersectArrayOfArray(arrayA);
    const expectedResultA = [
      [1,2,3],
      [6,7,8],
      [10,11,12]
    ];
    expect(resultA).to.eql(expectedResultA);

    const resultB = filterIntersectArrayOfArray(arrayB);
    const expectedResultB = [
      [1,2,3,4,5,6,7,8,9,10],
      [20,30,40,50]
    ];
    expect(resultB).to.eql(expectedResultB);

    const resultC = filterIntersectArrayOfArray(arrayC);
    const expectedResultC = [
      ['a', 'b', 'c', 'd', 'e', 'f']
    ];
    expect(resultC).to.eql(expectedResultC);
  })
});
