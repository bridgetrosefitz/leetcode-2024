/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // if R is greater than mid
  // right side is ascending, therefore we can eliminate it
  // keep the mid el, though (right = mid)
  // else
  // keep the right side (left = mid + 1)

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[left];
};
