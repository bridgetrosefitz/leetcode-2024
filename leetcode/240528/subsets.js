function subsets(nums) {
  const ans = [];
  const temp = [];

  function backtrack(start) {
    // THIS BASE CASE IS UNNECESSARY
    if (start > nums.length) {
      return;
    }

    ans.push([...temp]);

    for (let i = start; i < nums.length; i++) {
      temp.push(nums[i]);
      backtrack(i + 1);
      temp.pop();
    }
  }

  backtrack(0);

  return ans;
}
