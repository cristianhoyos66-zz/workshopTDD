export function binarySearch(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return -1;
}
