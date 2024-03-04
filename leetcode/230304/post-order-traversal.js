var postorderTraversal = function (root) {
  if (!root) return [];

  const stack = [];
  const result = [];
  let previous = null;

  while (root || stack.length) {
    // Reach the leftmost node of the current subtree
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // Peek at the node from the top of the stack
    root = stack.pop();
    // If the right subtree is already visited or doesn't exist,
    // process the current node
    if (!root.right || root.right === previous) {
      result.push(root.val);
      // Mark the current node as visited
      previous = root;
      // Reset root to null to indicate node processing is done
      root = null;
    } else {
      // If right subtree exists, push the current node back to
      // the stack, and move to the right subtree
      stack.push(root);
      root = root.right;
    }
  }

  return result;
};
