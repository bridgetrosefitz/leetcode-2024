/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let currMin = Infinity;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[right] >= nums[left]) {
      return currMin > nums[left] ? nums[left] : currMin;
    }
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      currMin = nums[mid];
      right = mid - 1;
    }
  }

  return -1;
};
