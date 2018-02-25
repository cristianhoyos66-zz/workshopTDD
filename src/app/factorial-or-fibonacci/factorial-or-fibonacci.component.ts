import { binarySearch } from '../binary-search/binary-search.component';
import { factorial, fibonacci } from './../basic-example/basic-example.component';

export function factorialOrFibonacci(arr, target) {
  const index = binarySearch(arr, target);

  return index % 2 === 0 ? factorial(index) : fibonacci(index);
}
