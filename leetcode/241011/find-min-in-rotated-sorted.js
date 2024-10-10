/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  // 20:18 with 1 of 3 cases passing
  // [3,4,5,1,2]
  //      M.  R
  // [11,13,15,17] // currMin = 13 //11
  //  L   M.    R
  //  LMR
  // [4,5,1,2,3] // currMin = 1
  // L.   M.  R
  // LM R
  // [5,1,2,3,4]
  // [3,4,5,1,2]

  // [4,5,6,7,0,1,2] // currMin = 1
  //. L     M     R
  //          L M R
  //          LMR.

  // [3,1,2] // 1
  //  L M R

  // APPROACH IDEA
  // while right is greater or equal to left
  // if mid element is less than right element
  // store mid as currMin
  // move right to mid -1
  // else
  // move left to mid + 1

  // return currMin

  // TO DO: think about FFFTT approach
  // MAYBE JUST MAKE CURR MIN MID IF LESS THAN RIGHT

  /////////////OLD/////////////

  // if mid + 1 > mid IGNORE THIS BIT
  // store mid as currMin
  // move right to to mid - 1

  let left = 0;
  let right = nums.length - 1;
  let currMin = Infinity;

  while (right >= left) {
    const mid = Math.floor((right + left) / 2); // UPDATE TO PREVENT TOO-LARGE INTEGER
    if (nums[mid] <= nums[right]) {
      currMin = Math.min(currMin, nums[mid]);
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return currMin;
};
