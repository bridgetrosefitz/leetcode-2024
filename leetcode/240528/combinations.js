function combinations(nums, k) {
  const ans = [];
  const temp = [];

  function backtrack(start) {
    if (temp.length === k - 1) ans.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(i + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return ans;
}
