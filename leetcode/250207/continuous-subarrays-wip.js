/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let left = 0; // 1
  let right = 0; // 3
  let max = -Infinity;
  let min = Infinity;

  let count = 0; // 2
  // [5, 4, 2, 4]
  //   L
  //     R
  // {5, 9, 11, 15}

  // right - left + 1 subarrays
  // or right - left because we add once right has made it invalid

  while (left < nums.length && right < nums.length) {
    max = Math.max(max, nums[right]); // 4
    min = Math.min(min, nums[right]); // 2

    const diff = Math.abs(max - min); // 0 1 3

    if (diff > 2) {
      const windowLength = right - left;
      count += windowLength + 1;
      left = right;
      max = nums[right];
      min = nums[right];
    } else {
      right++;
    }
  }

  return count;
};
