/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  /*
    
    [5,7,7,8,8,10]
         ^
    [F,F,F,T,T,T]

    [F,F,F,F,F,T]
    [8,8,8]
     
    [7,8,8]
    [7,7,8]
    [7,8]
    [8]
    [7]
    */

  // binary search for first occurrence
  // store leftmost occurrence
  // keep searching further left

  // binary search for first occurence of value greater than

  // [7,8]
  //   L
  // R
  //   M
  let left = 0;
  let right = nums.length - 1;
  let firstOccurence = -1; // -1 1
  let firstGreater = nums.length; // 2
  while (left <= right) {
    const mid = Math.floor(right - left / 2) + left;

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        firstOccurence = mid;
      }
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  // first occurence will either be:
  // -1, 0, between 0 and nums.length - 1

  /*
        [7,8]
             L. 
           R
           M
    */
  if (firstOccurence === -1) return [-1, -1];
  left = firstOccurence; // 1
  right = nums.length - 1; // 1

  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left;

    if (nums[mid] === target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      firstGreater = mid;
      right = mid - 1;
    }
  }

  return [firstOccurence, firstGreater - 1];
};
