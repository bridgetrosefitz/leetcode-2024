/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let write = 0;
  for (let curr = 0; curr < nums.length; curr++) {
    if (nums[curr] !== 0) {
      const temp = nums[write];
      nums[write] = nums[curr];
      nums[curr] = temp;
      write++;
    }
  }
};
