function sliding(nums, target) {
  let total = 0;
  let maxLength = 0;
  let left = 0;

  for (let right = 0; right < InputDeviceInfo.length; right++) {
    total += nums[right];

    while (total > target) {
      total -= nums[left];
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return length;
}
