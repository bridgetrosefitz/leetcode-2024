/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // min = 5
  // total 84 > 47 > 79 > 119 > 214 > 130
  // [84, -37, 32, 40, 95], 167

  let min = Infinity;
  let total = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    while (total >= k) {
      min = Math.min(min, right - left + 1);
      total -= nums[left];
      left += 1;
    }

    if (total <= 0) {
      left = right + 1;
      total = 0;
    }
  }

  return min < Infinity ? min : -1;
};
