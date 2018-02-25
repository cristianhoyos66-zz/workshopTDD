export function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
}

export function fibonacci(n) {
  return n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

export function replaceWordByAnother(strBase, searchValue, newValue) {
  return strBase.replace(searchValue, newValue);
}

export function bubbleSort(arr) {
  let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
