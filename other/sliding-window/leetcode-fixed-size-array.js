function findHighestSumForSubarrayK(nums, k) {
  let curr = 0;
  // find curr for first window
  for (let i = 0; i < k; i++) {
    curr += nums[i];
  }

  let ans = curr;
  for (let i = k; i < nums.length; i++) {
    // add the next number after window and
    // remove the first number in previous window
    curr += nums[i] - nums[i - k];
    ans = Math.max(ans, curr);
  }

  return ans;
}
