/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0,
    right = nums.length - 1;

  // if array is already sorted without rotation, return the lowest number
  if (nums[right] > nums[0]) return nums[0];

  // binary search
  while (right >= left) {
    const mid = Math.floor(left + (right - left) / 2);

    // find the inflection point
    if (nums[mid] > nums[mid + 1]) return nums[mid + 1];
    if (nums[mid - 1] > nums[mid]) return nums[mid];

    if (nums[mid] > nums[0]) {
      // the left portion is still in order, therefore the inflection is to the right
      left = mid + 1;
    } else {
      // the inflection point is to the left
      right = mid - 1;
    }
  }
};
