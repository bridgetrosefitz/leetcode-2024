function inorder(root) {
  const res = [];

  function traverse(node) {
    if (node.left) traverse(node.left);
    res.push(node.val);
    if (node.right) traverse(node.right);
  }

  traverse(root);
  return res;
}
