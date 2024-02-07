var subsets = function (nums) {
  const result = [];

  const subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      result.push([...subset]);
      return;
    }

    // decision to include nums[i]
    subset.push(nums[i]);
    dfs(i + 1);

    // decision not to include nums[i]
    subset.pop();
    dfs(i + 1);
  }

  dfs(0);
  return result;
};
