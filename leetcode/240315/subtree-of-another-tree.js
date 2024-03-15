var isSubtree = function (root, subRoot) {
  function dfs(node) {
    if (!node) return false;

    if (isIdentical(node, subRoot)) return true;

    return dfs(node.left) || dfs(node.right);
  }

  function isIdentical(node1, node2) {
    if (node1 === null || node2 === null) {
      return node1 === null && node2 === null;
    }

    return (
      node1.val === node2.val &&
      isIdentical(node1.left, node2.left) &&
      isIdentical(node1.right, node2.right)
    );
  }

  return dfs(root);
};
