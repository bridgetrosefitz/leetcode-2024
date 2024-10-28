/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    // if middle el is greater than el to its right
    // peak is either middle el or further left
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      // if middle el is less than el to its right
      // peak is either the el to the right, or further right
      left = mid + 1;
    }
  }

  return left;
};
