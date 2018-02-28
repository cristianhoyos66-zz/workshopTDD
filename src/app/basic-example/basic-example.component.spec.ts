import { factorial, fibonacci, replaceWordByAnother, bubbleSort, jsSort } from './basic-example.component';

describe('Basic example', () => {

  it('5! should return 120', () => {
    const res = factorial(5);

    expect(res).toBe(120);
  });

  it('fibonacci of 8 should return 34', () => {
    const res = fibonacci(8);

    expect(res).toBe(34);
  });

  it('replaceWordByAnother when replace given word the result should contains that word', () => {
    const strBase = 'Big hero 6';
    const searchValue = 'hero';
    const newValue = 'churumbelo';

    const res = replaceWordByAnother(strBase, searchValue, newValue);

    expect(res).toContain(newValue);
  });

  it('replaceWordByAnother when cannot find searchValue should return strBase', () => {
    const strBase = 'Big hero 6';
    const searchValue = 'churumbelo';
    const newValue = 'churumbelito';

    const res = replaceWordByAnother(strBase, searchValue, newValue);

    expect(res).toEqual(strBase);
  });

  it('jsSort should return less time than bubbleSort', () => {
    const arr = generateArray();

    const bubbleSortTime = performBubbleSort(arr);
    const jsSortTime = performJsSort(arr);

    expect(jsSortTime).toBeLessThan(bubbleSortTime);
  });

  function performBubbleSort(arr) {
    const firstTime = performance.now();
    const orderedArray = bubbleSort(arr);
    const secondTime = performance.now();
    console.log(secondTime - firstTime);
    return secondTime - firstTime;
  }

  function performJsSort(arr) {
    const firstTime = performance.now();
    const orderedArray = jsSort(arr);
    const secondTime = performance.now();
    console.log(secondTime - firstTime);
    return secondTime - firstTime;
  }

  function generateArray() {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr[i] = Math.floor(Math.random() * 100);
    }
    return arr;
  }
});
