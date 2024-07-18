function isBalanced(root) {
  let treeIsBalanced = true;

  function dfs(node) {
    if (!node) return 0;
    const leftDepth = dfs(node.left) + 1;
    const rightDepth = dfs(node.right) + 1;

    if (Math.abs(leftDepth - rightDepth) > 1) treeIsBalanced = false;
    return Math.max(leftDepth, rightDepth);
  }

  dfs(root);
  return treeIsBalanced;
}
