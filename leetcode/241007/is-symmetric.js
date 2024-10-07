function isSymmetric(root) {
  function helper(node1, node2) {
    // return true if both are false
    // return false if only one of node1 and node2 is false
    // return false if value of node1 is different from value of node2
    // recurse

    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;
    return helper(node1.left, node2.right) && helper(node1.right, node2.left);
  }

  return helper(root.left, root.right);
}
