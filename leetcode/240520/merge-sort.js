/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  mergeSort(nums, 0, nums.length - 1);

  function mergeSort(nums, l, r) {
    if (l >= r) return;
    const m = l + Math.floor((r - l) / 2);
    mergeSort(nums, l, m);
    mergeSort(nums, m + 1, r);
    merge(nums, l, m, r);
  }

  function merge(nums, l, m, r) {
    const length1 = m - l + 1;
    const length2 = r - m;

    const tempArray1 = new Array(length1);
    const tempArray2 = new Array(length2);

    for (let i = 0; i < length1; i++) {
      tempArray1[i] = nums[l + i];
    }
    for (let j = 0; j < length2; j++) {
      tempArray2[j] = nums[m + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = l;

    while (i < length1 && j < length2) {
      if (tempArray1[i] <= tempArray2[j]) {
        nums[k] = tempArray1[i];
        i++;
      } else {
        nums[k] = tempArray2[j];
        j++;
      }
      k++;
    }

    while (i < length1) {
      nums[k] = tempArray1[i];
      i++;
      k++;
    }

    while (j < length2) {
      nums[k] = tempArray2[j];
      j++;
      k++;
    }
  }

  return nums;
};
