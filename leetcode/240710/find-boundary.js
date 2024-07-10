function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid]) {
      if (mid === 0 || !arr[mid - 1]) {
        return mid;
      }

      right = mid - 1;
    }

    if (!arr[mid]) {
      if (arr[mid + 1]) {
        return mid + 1;
      }

      left = mid + 1;
    }
  }

  return -1;
}
