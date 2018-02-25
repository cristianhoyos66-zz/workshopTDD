import { binarySearch } from './binary-search.component';

describe('BinarySearch', () => {

  it('binarySearch when search a number that array contains should return the number position', () => {
    const arr = [ -10, -8, -15, 3, 4, 89, 90, 100 ];

    const index = binarySearch(arr, 4);

    expect(index).toBe(4);
  });

  it ('binarySearch when search a number that array doesnt contain should return -1', () => {
    const arr = [ -10, -8, -15, 3, 4, 89, 90, 100 ];

    const index = binarySearch(arr, 1995);

    expect(index).toBe(-1);
  });

});
