/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const res = [];
  const temp = [];
  const options = new Map();
  for (const num of nums) {
    options.set(num, 0);
  }

  for (const num of nums) {
    options.set(num, options.get(num) + 1);
  }

  /*
        
        options = {
            1: 1, 
            2: 1
        }

        temp = [1,2]

        */

  function generate() {
    if (temp.length === nums.length) {
      res.push([...temp]);
      return;
    }

    for (const [num, frequency] of options.entries()) {
      if (frequency > 0) {
        temp.push(num);
        options.set(num, frequency - 1);
        generate();
        temp.pop();
        options.set(num, frequency);
      }
    }
  }

  generate();

  return res;
};
