// ALGOMONSTER code

function merge(nums1, countNums1, nums2, countNums2) {
  let lastNums1Index = countNums1 - 1;
  let lastNums2Index = countNums2 - 1;
  let mergedIndex = countNums1 + countNums2 - 1;

  while (lastNums2Index >= 0) {
    nums1[mergedIndex--] =
      lastNums1Index >= 0 && nums1[lastNums1Index] > nums2[lastNums2Index]
        ? nums1[lastNums1Index--]
        : nums2[lastNums2Index--];
  }
}

// how come we can be sure that in no cases we will decrement lastNums2Index
// to < 0 before we have finished adding all the elements from nums1

// what if we had [1,2,3,0,0] [-1,4,5,6,7]
