/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const temp = [];
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  function dfs() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }

    for (option of count.keys()) {
      if (count.get(option) > 0) {
        temp.push(option);
        count.set(option, count.get(option) - 1);

        dfs();

        count.set(option, count.get(option) + 1);
        temp.pop();
      }
    }
  }

  dfs();
  return res;
};
