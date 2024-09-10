function isValidBST(root) {
  if (!root.left && !root.right) return true;

  function dfs(node) {
    if (!node) return true;
    if (node.left && (!dfs(node.left) || node.left.val >= node.val))
      return false;
    if (node.right && (!dfs(node.right) || node.right.val <= node.val))
      return false;
    return true;
  }

  return dfs(root);
}
