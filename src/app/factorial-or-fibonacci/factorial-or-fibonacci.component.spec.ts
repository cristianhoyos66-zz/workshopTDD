import * as BinarySearch from '../binary-search/binary-search.component';
import * as BasicExample from './../basic-example/basic-example.component';
import { factorialOrFibonacci } from './factorial-or-fibonacci.component';

describe('factorial or fibonacci', () => {

  let arr;

  beforeEach(() => {
    arr = [-80, -50, -10, 0, 1, 2, 79, 90];
    spyOn(BasicExample, 'factorial');
    spyOn(BasicExample, 'fibonacci');
  });

  it('factorialOrFibonacci should call binarySearch', () => {
    spyOn(BinarySearch, 'binarySearch');

    factorialOrFibonacci(arr, 1);

    expect(BinarySearch.binarySearch).toHaveBeenCalled();
  });

  it('factorialOrFibonacci when index is even should call factorial', () => {
    factorialOrFibonacci(arr, 79);

    expect(BasicExample.factorial).toHaveBeenCalled();
    expect(BasicExample.fibonacci).not.toHaveBeenCalled();
  });

  it('factorialOrFibonacci when index is odd should call fibonacci', () => {
    factorialOrFibonacci(arr, 2);

    expect(BasicExample.fibonacci).toHaveBeenCalled();
    expect(BasicExample.factorial).not.toHaveBeenCalled();
  });

});
