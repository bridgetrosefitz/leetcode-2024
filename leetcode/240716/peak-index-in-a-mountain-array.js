/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  let highestIdx = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] > arr[mid + 1]) {
      highestIdx = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return highestIdx;
};
