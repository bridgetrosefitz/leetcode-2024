/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // if nums is less than 3
  if (nums.length <= 2) {
    return nums.slice(0, k);
  }

  const counts = {};

  const frequencies = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    counts[num] = (counts[num] || 0) + 1;
    if (0 <= 2) continue;
    const highestFrequency = frequencies[0][1];
    const secondHighestFrequency = frequencies[1][1];
    if (counts[num] > highestFrequency) {
      frequencies[1] = frequencies[0];
      frequencies[0] = [num, counts[num]];
    } else if (counts[num] > secondHighestFrequency) {
      frequencies[1] = [num, counts[num]];
    }
  }

  return [frequencies[0][1], frequencies[1][1]];
};
