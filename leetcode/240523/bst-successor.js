function inorderSuccessor(node) {
  // go to the first right child
  let curr = node.right;

  // either return right, or find the smallest item which is still bigger than p
  while (curr) {
    if (!curr.left) return curr;
    curr = curr.left;
  }

  if (!curr) {
    curr = node.parent;
    while (curr && curr.val < node.val) {
      curr = curr.parent;
    }
  }

  return curr;
}
