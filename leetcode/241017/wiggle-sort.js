/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  // q = [3,4]
  // [1,6,2,5,3,4]
  //     W
  //   R

  // ?????????

  // [1,3,2,5,4,6]
  //   i

  // [3,5,2,1,6,4]
  // [1,2,3,4,5,6]
  // L
  //   R
  // [1,5,3,4,2,6]

  // [1,6,2,5,3,4]

  // [6,6,5,6,3,8]
  // [3,5,6,6,6,8]
  //      L
  //         R

  // [3,8,5,6,6,6]

  // [3,8,5,6,6,6]

  // [4,5]

  let left = 0;
  let right = nums.length - 1;
  nums.sort((a, b) => a - b);
  while (right >= left) {
    if (left % 2 !== 0) {
      // swap
      const temp = nums[right];
      nums[right] = nums[left];
      nums[left] = temp;
    }

    left++;
    right--;
  }

  // if l is even, then don't swap
};
