/**
 * 88. Merge Sorted Array

 *You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
 * 
 */

/* 
inputs: nums1, nums2, m, n
output: nums1 [merged sorted]

edge cases:
- if nums2 is empty (aka n = 0), return nums1
- numbers are all the same in nums1 and nums2

nums1 = [1,2,2,3,5,6], m = 3, nums2 = [2,5,6]
           |W                        |
nums1 = [1,2,2,3,5,6], m = 3, 
                w
nums2 = [2,5,6]
*/

function mergeSortedArrays(nums1, nums2, m, n) {
  // nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6]
  // nums1 = [0], m = 0, nums2 = [1], n = 1

  if (n === 0) return nums1;

  let nums1Pointer = m - 1; // 2 // -1    let p1
  let nums2Pointer = n - 1; // 2 // 0    let p2
  let write = nums1.length - 1; // 5 // 0    let w

  // while nums1Pointer >= 0 and nums2Pointer >= 0
  // if el at nums1Pointer is less than or equal to el at nums2Pointer
  // put el at nums1Pointer at write in nums1
  // decrement nums1Pointer
  // else
  // put el at nums2pointer at write in nums1
  // decrement nums2pointer
  // decrement write

  while (nums1Pointer >= 0 && nums2Pointer >= 0) {
    const n1 = nums1[nums1Pointer];
    const n2 = nums2[nums2Pointer];

    if (n1 >= n2) {
      nums1[write] = n1;
      nums1Pointer--;
    } else {
      nums1[write] = n2;
      nums2Pointer--;
    }

    write--;
  }

  // handle leftovers

  while (nums1Pointer >= 0) {
    // throw in all remaining nums1 els
    // decrement write
    nums1[write] = nums1[nums1Pointer];
    write--;
  }

  while (nums2Pointer >= 0) {
    // throw in all remaining nums1 els
    // decrement write
    nums1[write] = nums2[nums2Pointer];
    write--;
  }

  return nums1;
}
