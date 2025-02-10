/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // [1,2,3,3]
  /*
       [1,3,6,9]
       target - currTotal (other way around)
       3 - 3 >> 0
       3 - 6 >> -3
       3 - 9 >> -6
    {
        1:1
        3:1
        6:1
    }

    diffs: {
        0: 1,
        1: 1
        3: 1
        6: 1
    }
    
    */

  const diffs = { 0: 1 };
  let currTotal = 0; // 1 3 6 9
  let count = 0; // 0 1 2 3
  for (const num of nums) {
    currTotal += num;
    const diffToTarget = currTotal - k; // -2 0 3 6
    if (diffs.hasOwnProperty(diffToTarget)) {
      count += diffs[diffToTarget];
    }

    diffs[currTotal] = (diffs[currTotal] || 0) + 1;
  }

  return count;
};
