function permutations(nums) {
  const seen = new Set();
  const temp = [];
  const ans = [];

  function backtrack() {
    if (temp.length === nums.length) {
      ans.push([...temp]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (seen.has(nums[i])) continue;

      temp.push(nums[i]);
      seen.add(nums[i]);
      backtrack();
      temp.pop();
      seen.delete(nums[i]);
    }
  }

  backtrack();
  return ans;
}
