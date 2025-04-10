/**
 * @param {number[]} nums
 * @return {number[][]}

curr = [1,3]
res = [[],[1],[1,2],[1,2,3]]
 [1,2,3]
      ^
 */
var subsets = function (nums) {
  // [1,2,3]
  const res = []; //
  const temp = [];

  function backtrack(i) {
    res.push([...temp]);

    if (i === nums.length) {
      return;
    }

    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
      backtrack(j + 1);
      temp.pop();
    }
  }

  backtrack(0);
  return res;
};
