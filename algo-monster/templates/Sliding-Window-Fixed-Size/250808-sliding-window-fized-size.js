function slidingWindow(nums, windowSize) {
  let max = -Infinity;
  let curr = 0;

  for (let i = 0; i < windowSize; i++) {
    curr += nums[i];
  }

  max = Math.max(max, curr);

  for (let right = windowSize; righ < nums.length; right++) {
    const left = right - windowSize;
    curr += nums[right];
    curr -= nums[left];
    max = Math.max(max, curr);
  }

  return max;
}
