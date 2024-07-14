function findFirstOccurrence(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let targetIndex = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      targetIndex = mid;
      right = mid - 1;
    }

    if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return targetIndex;
}
