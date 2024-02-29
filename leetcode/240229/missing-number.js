/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  // ONE
  // sort
  // iterate

  // >> TIME nlogn
  // >> SPACE constant

  // TWO
  // set with every expected number
  // remove number from set

  // >> TIME linear
  // >> SPACE linear

  // THREE
  // calculate expected sum of all
  // iterate through and get sum of actual
  // missing number = expected - actual

  // >> TIME n
  // >> SPACE constant

  let expectedSum = 0;
  let actualSum = 0;

  for (let i = 1; i <= nums.length; i++) {
    expectedSum += i;
  }

  for (let i = 0; i < nums.length; i++) {
    actualSum += nums[i];
  }

  return expectedSum - actualSum;
};
