/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const temp = [];
  const options = new Map();

  for (const num of nums) {
    options.set(num, (options.get(num) || 0) + 1);
  }

  function buildPermutation() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }

    for (const [num, frequency] of options.entries()) {
      if (frequency > 0) {
        temp.push(num);
        options.set(num, frequency - 1);

        buildPermutation();

        temp.pop();
        options.set(num, frequency);
      }
    }
  }
  buildPermutation();

  return res;
};
