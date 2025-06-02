function findLca(root, p, q) {
  function traverse(node) {
    // if no node, get out and return null
    if (!node) {
      return null;
    }

    // if node is p or q, return node!

    if (node === p || node === q) {
      return node;
    }

    // see if left or right subtree contains the lca / p or q

    const leftSubtree = traverse(node.left);
    const rightSubtree = traverse(node.right);

    // if both are truthy, return self
    // if one is truthy, return that one

    if (leftSubtree && rightSubtree) {
      return node;
    }

    return leftSubtree || rightSubtree;
  }

  return traverse(root);
}
