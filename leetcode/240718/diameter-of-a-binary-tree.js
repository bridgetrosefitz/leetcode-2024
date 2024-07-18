function diameterOfBinaryTree(root) {
  let maxDiameter = 0;

  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    maxDiameter = Math.max(left + right, maxDiameter);
    return Math.max(left, right) + 1;
  }

  dfs(root);
  return maxDiameter;
}
