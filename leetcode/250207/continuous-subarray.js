/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let left = 0;
  let right = 0;
  const map = new Map();

  let count = 0; // 2
  // [5, 4, 2, 4]
  //   L
  //     R
  // {5, 9, 11, 15}

  while (left < nums.length && right < nums.length) {
    map.set(nums[right], (map.get(nums[right]) || 0) + 1);

    while (Math.abs(Math.max(...map.keys()) - Math.min(...map.keys())) > 2) {
      const currFreq = map.get(nums[left]);

      if (currFreq === 1) {
        map.delete(nums[left]);
      } else {
        map.set(nums[left], map.get(nums[left]) - 1);
      }

      left++;
    }

    count += right - left + 1;

    right++;
  }

  return count;
};
