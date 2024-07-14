function findMin(arr) {
  let left = 0;
  let right = arr.length - 1;
  let boundaryIndex = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // if mid is <= last el, then min is either left el or in other half
    if (arr[mid] <= arr[arr.length - 1]) {
      boundaryIndex = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return boundaryIndex;
}
