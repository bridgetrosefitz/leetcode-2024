/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  /*
    { 100, 4, 200, 1, 3, 2}
                  C
    count = 1


    
    */
  const numSet = new Set(nums);
  let max = 0;

  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      // look for the lowest starting point
      let current = num;
      let count = 1;

      while (numSet.has(current + 1)) {
        current++;
        count++;
      }

      max = Math.max(max, count);
    }
  }

  return max;
};
