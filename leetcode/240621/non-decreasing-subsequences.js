/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// [4, 6, 7, 7]

var findSubsequences = function (nums) {
  const temp = [];
  const res = new Set();

  function backtrack(i) {
    // base case
    if (temp.length >= 2) res.add(JSON.stringify(temp));
    if (i === nums.length) return;

    // work
    if (!temp[i - 1] || nums[i] >= temp[i - 1]) {
      temp.push(nums[i]);
    }

    // backtrack
    backtrack(i + 1);
    temp.pop();
    backtrack(i + 1);
  }

  backtrack(0);

  return [...res].map(JSON.parse);
};
