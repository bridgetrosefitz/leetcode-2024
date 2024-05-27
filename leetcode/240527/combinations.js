function combinations(n, k) {
  const ans = [];
  function backtrack(curr, i) {
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }

    for (let num = i; num <= n; num++) {
      curr.push(num);
      backtrack(curr, num + 1);
      curr.pop();
    }
  }

  backtrack([], 1);
  return ans;
}
