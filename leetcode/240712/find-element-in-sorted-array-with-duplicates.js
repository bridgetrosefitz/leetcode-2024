function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let leftmostOccurrence = -1;

  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      leftmostOccurrence = mid;
      right = mid - 1;
    } else if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return leftmostOccurrence;
}
