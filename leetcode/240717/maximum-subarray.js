/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let curr = 0;
  let max = -Infinity;

  for (let right = 0; right < nums.length; right++) {
    const num = nums[right];
    if (curr < 0 && num > curr) {
      curr = num;
    } else {
      curr += num;
    }

    max = Math.max(max, curr);
  }

  return max;
};
