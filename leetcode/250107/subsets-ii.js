/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort();
  const res = new Set();
  const temp = [];

  /*
        [1,2,2]
    */

  function generateSubset(i) {
    res.add(JSON.stringify(temp));

    for (let j = i; j < nums.length; j++) {
      temp.push(nums[j]);
      generateSubset(j + 1);
      temp.pop();
    }
  }

  generateSubset(0);

  return [...res].map(subset => JSON.parse(subset));
};
