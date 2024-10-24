/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  // [1,2,3,1]
  //   L.
  //       R
  //     M
  // [3,2,1]
  // L
  // R
  // M

  // [1,2,3]
  //     L
  //     R
  //   M
  // [1,2]
  // L
  //   R
  // M

  // 1. why don't we need the boundary checks
  // we will never have left be the last element in the array, because if L = R, we will have broken out
  // we are only ever checking MID and MID + 1
  // L and M could be the first element, but we will never try to access MID - 1
  // 2. what is special about this template vs BF's code

  return left;
};
