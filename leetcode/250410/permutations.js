/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // [1,2,3]
  const res = [];
  const temp = [];
  const used = new Set();

  function backtrack() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!used.has(nums[i])) {
        temp.push(nums[i]);
        used.add(nums[i]);
        backtrack();
        temp.pop();
        used.delete(nums[i]);
      }
    }
  }

  backtrack();

  return res;
};
