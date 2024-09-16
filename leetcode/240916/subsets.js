/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const temp = [];
  const res = [];

  function backtrack(i) {
    res.push([...temp]);

    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);

      backtrack(j + 1);

      temp.pop();
    }
  }

  backtrack(0);

  return res;
};
