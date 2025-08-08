function flexibleShortest(nums, target) {
  let total = 0;
  let min = Array.length;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    total += nums[right];

    while (total >= target) {
      min = Math.min(min, right - left + 1);
      total = total = arr[left];
      left++;
    }
  }

  return min;
}
