/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function (nums, freq) {
  // ans
  // for each number
  // add to map if doesn't already exist
  // set value to existing value with change
  // find max of all values in map and push it into array

  // return ans

  const ans = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + freq[i];
    const max = Math.max(...Object.values(map));
    ans.push(max);
  }

  return ans;
};
