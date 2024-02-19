/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let curr = 0;
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let max = curr;

  for (let i = k; i < nums.length; i++) {
    curr = curr + nums[i] - nums[i - k];
    max = Math.max(max, curr);
  }

  return max / k;
};
