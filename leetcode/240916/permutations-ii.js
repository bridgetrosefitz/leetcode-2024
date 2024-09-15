/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const temp = [];
  const res = [];
  const selection = new Map();
  for (const num of nums) {
    selection.set(num, (selection.get(num) ? selection.get(num) : 0) + 1);
  }

  function backtrack() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }

    for (const [key, val] of selection) {
      if (val > 0) {
        temp.push(key);
        selection.set(key, val - 1);
        backtrack();
        temp.pop();
        selection.set(key, val);
      }
    }
  }

  backtrack();

  return res;
};
