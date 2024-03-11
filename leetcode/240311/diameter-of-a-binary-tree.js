var diameterOfBinaryTree = function (root) {
  const res = 0;
  function dfs(root) {
    if (!root) return -1;
    const left = dfs(root.left);
    const right = dfs(root.right);
    res = Math.max(res, 2 + left + right);
    return 1 + Math.max(left, right);
  }

  dfs(root);
  return res;
};
