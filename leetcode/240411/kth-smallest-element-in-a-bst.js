var kthSmallest = function (root, k) {
  const orderedValues = [];

  function dfs(node) {
    // inorder traversal
    if (!node) return;
    dfs(node.left);
    orderedValues.push(node.val);
    dfs(node.right);
  }

  dfs(root);
  return orderedValues[k - 1];
};
