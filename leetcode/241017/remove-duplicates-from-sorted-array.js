/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // [1,1,1]
  // W
  //        R
  // [0]
  //  W
  //    R

  // [1,2,3]
  //      W
  //        R

  // [1,1,2]
  // [1,2,2]
  //    W
  //        R

  let write = 0;
  let read = 1;
  // while read < nums.length
  // if number at read is different from write
  // put number at read at position write + 1
  // increment write
  // increment read

  // return write + 1 // TO DO - check this

  while (read < nums.length) {
    if (nums[read] !== nums[write]) {
      nums[write + 1] = nums[read];
      write++;
    }
    read++;
  }

  return write + 1;
};
