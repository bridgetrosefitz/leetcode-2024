var invertTree = function (root) {
  // if null, return
  // move my left pointer to the right, and my right pointer to the left
  if (!root) return root;

  invertTree(root.left);
  invertTree(root.right);
  const oldLeft = root.left;
  const oldRight = root.right;
  root.left = oldRight;
  root.right = oldLeft;

  return root;
};
