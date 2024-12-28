/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  // [4,5,6,7,0,1,2] 0

  // 7 is bigger than 2 (pivot point is on the right)
  // AND 0 is less than 2

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2 + left);
    const midNum = nums[mid];
    const rightNum = nums[right];
    // find pivot side

    // [4,5,6,7,0,1,2,3]
    if (nums[mid] === target) {
      return mid;
    }
    if (midNum > rightNum) {
      // pivot is on the right, left is sorted
      if (target >= nums[left] && target < nums[mid]) {
        // go left
        right = mid - 1;
      } else {
        // go right
        left = mid + 1;
      }
    } else {
      // pivot is on the left, right is sorted
      if (target <= nums[right] && target > nums[mid]) {
        // << depends how you choose to move your pointer when taking a side
        // go right
        left = mid + 1;
      } else {
        // go left
        right = mid - 1;
      }
    }
  }

  return -1;
};
