function numSubarrayProductsLessThanK(nums, k) {
  if (k <= 1) return 0;

  let ans = 0,
    left = 0,
    curr = 1;

  for (right in nums) {
    curr *= nums[right];
    while (curr >= k) {
      curr /= nums[left];
      left++;
    }

    ans += right - left + 1;
  }

  return ans;
}
