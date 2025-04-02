/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  // R
  let left = 0;
  let countZeroes = 0; // 0 1 // 0 1 0
  let max = -Infinity; // -Inf 1 2 3 // 1

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      countZeroes++;
    }

    while (countZeroes > k) {
      const leftCh = nums[left];
      if (leftCh === 0) {
        countZeroes--;
      }
      left++;
    }

    const windowLength = right - left + 1; // 2
    max = Math.max(max, windowLength);
  }

  return max;
};
