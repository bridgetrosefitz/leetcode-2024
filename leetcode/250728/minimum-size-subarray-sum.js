/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  /*

  currSum = 0 2 5 6 8 6 10 7 10 9 7
  minLength = Infinity 4 3
    0 1 2 3 4 5
   [2,3,1,2,4,3]
          L
              R
  */

  let currSum = 0;
  let minLength = Infinity;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];

    while (currSum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }

  return minLength === Infinity ? 0 : minLength;
};
