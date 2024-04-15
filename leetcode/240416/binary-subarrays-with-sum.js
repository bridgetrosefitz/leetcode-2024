/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  function lteTarget(target) {
    let count = 0;
    let sum = 0;
    let left = 0;

    for (let right = 0; right < nums.length; right++) {
      sum += nums[right];

      while (sum > target && left <= right) {
        sum -= nums[left];
        left++;
      }

      // each index is a valid starting point to meet our condition
      count += right - left + 1;
    }

    return count;
  }

  return lteTarget(goal) - lteTarget(goal - 1);
};
