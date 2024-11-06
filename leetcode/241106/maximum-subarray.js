/**
 * @param {number[]} nums
 * @return {number}
 */

/*

 IN: array of nums
 OUT: number (max of any subarray)
 
  // [-2,1,-3,4,-1,2,1,-5,4]
              L
                          R
    
    currTotal = 5
    max = 6

    // if the currTotal is less than the current value, restart window at the current value

 */
var maxSubArray = function (nums) {
  // [-2,1,-3,4,-1,2,1,-5,4] // -2
  let max = -Infinity;
  let currSum = 0;
  // left pointer at 0
  // iterate right pointer across all nums from i = 0
  // add number at right pointer to running total
  // if num at right is greater than or equal to currTotal
  // move left pointer to where right it
  // update currTotal to number at right

  // update max to max of max and currSum

  // return max

  for (let right = 0; right < nums.length; right++) {
    const rightNum = nums[right];
    currSum += rightNum;

    if (rightNum >= currSum) {
      currSum = rightNum;
    }

    max = Math.max(max, currSum);
  }

  return max;
};
