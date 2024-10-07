function isSymmetric(root) {
  // isSymm if:
  // left and right children BOTH don't exist
  // val of left child is same as val of right child
  // get left subtree isSymm
  // get right subtree isSymm

  function subtreeIsSymm(node) {
    if (!node.left && !node.right) return true;
    if (!node.left || !node.right) return false;

    const left = subtreeIsSymm(node.left);
    const right = subtreeIsSymm(node.right);

    return left && right;
  }

  subtreeIsSymm(root);
}
