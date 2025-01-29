function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  // right and left could be at same index and we have to check that index too
  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);
    if (arr[mid] === target) {
      return mid;
    }

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

/*

EDGE CASES

one element array
*/
