function subsets(nums) {
  const ans = [];
  function backtrack(curr, i) {
    if (i > nums.length) {
      return;
    }

    ans.push([...curr]);

    for (let j = i; i < nums.length; j++) {
      curr.push(nums[j]);
      backtrack(curr, j + 1);
      curr.pop();
    }
  }

  backtrack([], 0);

  return ans;
}
