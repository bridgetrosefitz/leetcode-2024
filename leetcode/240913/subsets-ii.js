/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const temp = [];
  const res = new Set();

  function backtrack(i) {
    // add to res
    res.add(temp.join(""));
    // other base case??
    if (i === nums.length) return;

    // add number
    temp.push(nums[i]);

    // backtrack
    backtrack(i + 1);

    // remove number
    temp.pop();
  }

  backtrack(0);

  return Array.from(res);
};
