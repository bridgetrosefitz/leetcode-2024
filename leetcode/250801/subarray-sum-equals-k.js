/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  /*

    count = 0 1

    {
        0: 1
        1: 1
        2: 1
    }

    [1,1,1], k = 2 >> 2
    [1,2,3]
         ^

    if you've seen the complement, taht means that you've seen 
    an index where if you subtract the value at that index
    from the current value, you get k

    */

  let count = 0;
  let currSum = 0;

  const prefixSumCount = new Map([[0, 1]]);

  for (const num of nums) {
    currSum += num;
    const lookingFor = currSum - k;
    count += prefixSumCount.get(lookingFor) || 0;

    prefixSumCount.set(currSum, (prefixSumCount.get(currSum) || 0) + 1);
  }

  return count;
};
