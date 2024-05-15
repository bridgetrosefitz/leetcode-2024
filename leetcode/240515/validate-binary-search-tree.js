function isValidBSTRecursive(root) {
  // for every node, its left child must be smaller and its right child must be greater
  if (!root) return true;

  let isValid = true;

  function dfs(node) {
    if (!node) return;

    // dfs on left child
    // dfs on right child

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);

    // if left child is greater than current,
    // or if left subtree is invalid
    // send FALSE back up the tree

    // if right child is greater than current,
    // or if right subtree is invalid
    // send FALSE back up the tree

    return (
      leftSubtreeIsValid &&
      rightSubtreeIsValid &&
      leftChild.val < node.val &&
      rightChild.val > node.val
    );
  }
}

function isValidBSTIterative(node) {
  // for every node, its left child must be smaller and its right child must be greater
}
