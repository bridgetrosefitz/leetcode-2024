function findBoundary(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid]) {
      // if we are at the first el or the
      // prev el is false, we've found our winner
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
  ƒ;
}
