/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  function uniqueIsOnLeft(index) {
    // if nums is odd length, unique is on left if
    // mid is different from prev
    // (because all the pairs fit snugly on left)
    if (index === nums.length - 1) {
      return true;
    }

    // even case (if odd index, you have an even number of els)
    if (index % 2 !== 0) {
      if (nums[index] !== nums[index - 1]) {
        return true;
      }
    } else {
      if (nums[index] !== nums[index + 1]) {
        return true;
      }
    }

    return false;
  }

  let left = 0;
  let right = nums.length - 1;
  let ans = 0;

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (uniqueIsOnLeft(mid)) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return nums[ans];
};
