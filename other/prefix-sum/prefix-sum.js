function createPrefixSum(arr) {
  const prefix = [[nums[0]]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  return prefix;
}
