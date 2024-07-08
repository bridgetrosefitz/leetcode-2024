/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function (nums, k) {
  // [2,-1,2], k = 3

  //  R
  //  L

  // [2, -3, 4, 3]
  //   R
  //   L

  // [-1, -1, 3, -1]
  //     R
  // L

  // [2, -3, -1, 2, 2, -1]
  // R
  //            L

  // // [2, -5, -1, 2, 2, -1]
  //                R
  //                L

  // [1, -2, 1, 1]
  //    R
  //    L

  // [1, -3, -1, 2, -1, 3, 3]
  //  R
  //  L

  // [1, -3, -1, 7, -5, 3, 3]
  //  R
  //  L
  // Q: why do we need to keep our negative numbers, again?
  // >> if the number on the left is bigger than the negative numnbers after it, we need to keep it because it keeps our total positive

  // [-1, -1, 1, 1, 1, -1]
  // >> suppose there were no negative numbers
  // >> for some reason this no longer works. The change to make to the algo, comes from understanding why it doesnt work anymore

  // >> somehow exclude negative numbers. You can definitely exclude them at the ends; because they will only be reducing the total, without allowing us to include bigger numbers on either side of them

  // STRATEGY
  // - if el at R is positive and total is negative, reset
  // >> or even more simply, if total is ever negative, reset

  // move r across each element
  // add to total

  // while total >= k and left is less than right
  // update min window size
  // subtract left from total
  // left++

  // if total is negative or 0
  // left moves to right + 1,
  // total goes to 0

  let min = Infinity;
  let total = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    while (total >= k) {
      min = Math.min(min, right - left + 1);
      total -= nums[left];
      left += 1;
    }

    if (total <= 0) {
      left = right + 1;
      total = 0;
    }
  }
  return min < Infinity ? min : -1;
};
