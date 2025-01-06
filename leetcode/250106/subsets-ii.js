/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const res = new Set();
  const temp = [];
  nums.sort();

  // [1,2,2]

  function backtrack(i) {
    if (res.has(JSON.stringify(temp))) {
      return;
    }

    res.add(JSON.stringify(temp));

    for (let j = i; j < nums.length; j++) {
      const num = nums[j];
      temp.push(num);
      backtrack(j + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return [...res].map(subset => JSON.parse(subset));
};
