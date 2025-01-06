/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  const temp = [];
  const used = new Set();

  function backtrack() {
    if (temp.length === nums.length) {
      res.push([...temp]);
    }

    // add next option

    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (!used.has(num)) {
        temp.push(num);
        used.add(num);
        backtrack();
        temp.pop();
        used.delete(num);
      }
    }
  }

  backtrack();

  return res;
};
