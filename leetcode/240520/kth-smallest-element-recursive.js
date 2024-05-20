var kthSmallest = function (root, k) {
  let count = k;
  let ans = Infinity;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    count--;
    if (count === 0) {
      ans = node.val;
      return;
    }
    if (count !== 0) dfs(node.right);
  }

  dfs(root);
  return ans;
};
