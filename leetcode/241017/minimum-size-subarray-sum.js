/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // [2,3,1,2,4,3] currSum = 0 //2 //5 //6 //? //6 //10 //7 //6 //9 //7 //3
  //   L
  //     R

  let left = 0;
  let min = Infinity; //4 //3 //2
  let currSum = 0;

  // iterate right pointer from 0 to end
  // currSum += nums[right]
  // while currSum >= target
  // update min to window size
  // remove value at left from currSum
  // increment left

  // return min

  for (let right = 0; right < nums.length; right++) {
    currSum += nums[right];
    while (currSum >= target) {
      min = Math.min(min, right - left + 1);
      currSum -= nums[left];
      left++;
    }
  }

  return min === Infinity ? 0 : min;
};
