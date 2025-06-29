/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = [];
  const temp = [];

  nums.sort((a, b) => a - b);

  function backtrack(i) {
    if (i === nums.length) {
      res.push([...temp]);
      return;
    }

    temp.push(nums[i]);
    backtrack(i + 1);
    temp.pop();

    while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      i += 1;
    }

    backtrack(i + 1);
  }

  backtrack(0);

  return res;
};
