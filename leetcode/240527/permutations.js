function permutations(nums) {
  const ans = [];
  function backtrack(curr) {
    if (curr.length === nums) {
      ans.push([...curr]); // push a copy! So it doesn't keep getting modified
      return;
    }

    for (const num of nums) {
      if (!curr.includes(num)) curr.push(num);
      backtrack(curr);
      curr.pop();
    }
  }

  backtrack([]);
  return ans;
}
