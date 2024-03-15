var postorderTraversal = function (root) {
  const res = [];

  function traverse(node) {
    if (!node) return;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    res.push(node.val);
  }

  traverse(root);
  return res;

  // go left
  // go right
  // visit node
};
