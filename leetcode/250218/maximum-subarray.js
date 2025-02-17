/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = -Infinity;
  let currSum = 0;

  for (let right = 0; right < nums.length; right++) {
    const rightNum = nums[right];
    currSum += rightNum;

    if (rightNum >= currSum) {
      currSum = rightNum;
    }

    max = Math.max(max, currSum);
  }

  return max;
};
