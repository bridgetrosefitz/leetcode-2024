/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // [3,4,-1,2]
  let sum = 0;
  let max = -Infinity;

  for (const num of nums) {
    // if sum is negative, start again from curr
    if (sum < 0) {
      sum = 0;
    }

    sum += num;
    max = Math.max(max, sum);
  }

  return max;
};
