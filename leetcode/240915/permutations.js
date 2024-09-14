/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  // [1,2,3]

  // [1,2,3]
  // [1,3,2]
  // [2,1,3]
  // [2,3,1]
  // [3,1,2]
  // [3,2,1]

  const temp = [];
  const res = [];
  const used = new Set();

  function backtrack() {
    if (temp.length === nums.length) {
      return res.push([...temp]);
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
