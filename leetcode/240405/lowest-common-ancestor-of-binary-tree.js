var lowestCommonAncestor = function (root, p, q) {
  let ans = null;

  function dfs(node) {
    if (!node) return false;

    const current = node === p || node === q;
    const left = dfs(node.left);
    const right = dfs(node.right);

    if (current + left + right >= 2) {
      console.log("made it");
      ans = node;
    }
    return current || left || right;
  }

  dfs(root);
  return ans;
};
