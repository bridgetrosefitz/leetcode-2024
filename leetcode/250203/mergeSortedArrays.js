/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let read1 = m - 1; // 1
  let read2 = n - 1; // 1
  let write = nums1.length - 1;

  //  [1,1,1,3],
  // R
  // W

  //  [1,3]
  // R

  while (read1 >= 0 && read2 >= 0) {
    if (nums1[read1] >= nums2[read2]) {
      nums1[write] = nums1[read1];
      read1--;
    } else {
      nums1[write] = nums2[read2];
      read2--;
    }

    write--;
  }

  while (read1 >= 0) {
    nums1[write] = nums1[read1];
    read1--;
    write--;
  }

  while (read2 >= 0) {
    nums1[write] = nums2[read2];
    read2--;
    write--;
  }
};
