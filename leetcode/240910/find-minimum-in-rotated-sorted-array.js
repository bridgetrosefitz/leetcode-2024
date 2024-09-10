function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[right] >= nums[left]) {
      return nums[left];
    }

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      if (nums[mid] < nums[mid - 1]) return nums[mid];
      right = mid - 1;
    }
  }

  return -1;
}
